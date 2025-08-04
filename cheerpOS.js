// Copyright 2017-2021 Leaning Technologies Ltd. All Rights Reserved.

// An array of {path:"/path",handler:handlerObj} ordered by the most specific to the least
var cheerpjFSMounts = [];
// An array of resources loaded from the runtime
var cheerpjRuntimeResources = [];
// Resource ranges loaded from the runtime
var cosRuntimeResourcesRanges = {};
var cosFileWatchPrefixes = {};

function cheerpjFSInit(appUrlPrefix, jarJsOverridePath, loaderPath, useIframe)
{
	// Keep these ordered from the most specific to the least
	cheerpjFSMounts.push(new CheerpJWebFolder("/app/", appUrlPrefix ? appUrlPrefix : "", jarJsOverridePath, false, DirectDownloader));
	cheerpjFSMounts.push(new CheerpJIndexedDBFolder("/files/"));
	cheerpjFSMounts.push(new CheerpJWebFolder("/lt/", loaderPath, null, true, useIframe ? IFrameProxyDownloader : DirectDownloader));
	cheerpjFSMounts.push(new CheerpJDataFolder("/str/"));
	cheerpjFSMounts.push(new CheerpJDevFolder("/dev/"));
	cheerpjFSMounts.push(new CheerpJDataFolder("/proc/"));
	cheerpjFSMounts.push(new CheerpJRootFolder("/"));
	cheerpOSAddStringFile("/proc/mounts", "none / ext4 rw,relatime 0 0\n");
	if(useIframe)
		ipfCreateIFrame(loaderPath);
}

function cheerpOSCreateWebFolder(appUrlPrefix)
{
	return new CheerpJWebFolder("/app/", appUrlPrefix ? appUrlPrefix : "", null, false, DirectDownloader);
}

function cheerpOSNetInit(path_, tailscaleLoginUrlCb, tailscaleAuthKey, tailscaleControlUrl, tailscaleDnsIp, ipMap, tailscaleNetmapUpdateCb, cb)
{
	self.cjEnableTailscale = true;
	import(path_).then((net) => {
		var state = net.State;
		var stateUpdate = (s) => {
			if (s == state.Running)
			{
				// Resolve promise
				return cb();
			}
		};
		var loginCb = tailscaleLoginUrlCb;
		if(loginCb == null)
		{
			// Use an empty callback by default
			loginCb = () => {};
		}
		var controlUrl = tailscaleControlUrl;
		if(controlUrl == null)
		{
			// Reset to undefined, it will be interpreted as the default Tailscale control plane
			controlUrl = undefined;
		}
		if (!ipMap)
		{
			// Reset to an empty object since when not used.
			ipMap = {}
		}
		net.autoConf({loginUrlCb: loginCb, stateUpdateCb: stateUpdate, netmapUpdateCb: tailscaleNetmapUpdateCb, authKey: tailscaleAuthKey, controlUrl: controlUrl, dnsIp: tailscaleDnsIp, ipMap: ipMap})
		.then((netExports) => {
			self.cjTailscaleSocket=netExports.tcpSocket;
			self.cjTailscaleUdpSocket=netExports.udpSocket;
			self.cjTailscaleParseIp=netExports.parseIP;
			self.cjTailscaleDumpIp=netExports.dumpIP;
			// NOTE: Not exporting resolve, which was used in CJ2
			netExports.up();
		});
	})
}

function cheerpOSNetDisable()
{
	// explicit API call to the set the global state to false
	self.cjEnableTailscale = false;
}

function CheerpJFileData(parent, path, len, inodeId, permType, lastModified, uid, gid)
{
	this.refCount = 0;
	this.cacheRefCount = 0;
	this.length = len | 0;
	this.dirty = 0;
	this.parent = parent;
	// path is local to the mount point
	this.path = path;
	this.inodeId = inodeId | 0;
	// data is linear not chunked data
	this.data = null;
	// chunks is for chunked data
	this.chunks = null;
	// mount contains the ops structure
	this.mount = null;
	// permissions and file type following 'stat' conventions
	this.permType = permType | 0;
	this.uid = uid;
	this.gid = gid;
	// last modification time, seconds from epoch
	this.lastModified = lastModified | 0;
	this.flags = 0;
}

CheerpJFileData.S_IFCHR = 0x2000;
CheerpJFileData.S_IFDIR = 0x4000;
CheerpJFileData.S_IFREG = 0x8000;
CheerpJFileData.S_IFSOCK = 0xc000;
CheerpJFileData.S_IFMT = 0xf000;
CheerpJFileData.O_NONBLOCK = 0x800;

function CheerpJFolder(mp)
{
	this.mountPoint = mp;
	this.isSplit = false;
	// { statAsync, listAsync, makeFileData, createDirAsync, renameAsync, unlinkAsync }
	this.mountOps = null;
	// { readAsync, writeAsync, close };
	this.inodeOps = null;
	this.devId = CheerpJFolder.lastDevId;
	// Contains inodes
	this.fileCache = {};
	this.cacheThreads = {};
	// Contains CheerpJFileData entries
	this.inodeCache = [];
	CheerpJFolder.lastDevId = CheerpJFolder.lastDevId + 1|0
}

function folderDecRefCached(fileName, fileData)
{
	fileData.cacheRefCount = fileData.cacheRefCount-1|0;
	if(fileData.cacheRefCount==0)
	{
		assert(this.inodeCache[fileData.inodeId]);
		delete this.inodeCache[fileData.inodeId];
	}
}

function folderGetCached(fileName)
{
	var c = this.fileCache;
	if(!c.hasOwnProperty(fileName))
		return null;
	var inodeId = c[fileName];
	var ret = this.inodeCache[inodeId];
	assert(ret);
	return ret;
}

function folderSetCached(fileName, fileData)
{
	var c = this.fileCache;
	fileData.cacheRefCount = fileData.cacheRefCount+1|0;
	if(c.hasOwnProperty(fileName))
		this.decRefCached(fileName, c[fileName]);
	var inodeId = fileData.inodeId;
	c[fileName] = inodeId;
	this.inodeCache[inodeId] = fileData;
}

function folderClearCached(fileName)
{
	var c = this.fileCache;
	if(c.hasOwnProperty(fileName))
	{
		var inodeId = c[fileName];
		var data = this.inodeCache[inodeId];
		assert(data);
		this.decRefCached(fileName, data);
		delete c[fileName];
	}
}

CheerpJFolder.lastDevId = 1;
CheerpJFolder.prototype.getCached = folderGetCached;
CheerpJFolder.prototype.setCached = folderSetCached;
CheerpJFolder.prototype.decRefCached = folderDecRefCached;
CheerpJFolder.prototype.clearCached = folderClearCached;

function CheerpJRootFolder(mp)
{
	CheerpJFolder.call(this, mp);
	this.mountOps = RootOps;
	this.inodeOps = RootInodeOps;
}

CheerpJRootFolder.prototype = Object.create(CheerpJFolder.prototype);

function rootStatAsync(mp, path, fileRef, cb)
{
	if(path == "/")
	{
		fileRef.permType = CheerpJFileData.S_IFDIR | 0555;
		// Use the dev id as the inode id
		fileRef.inodeId = 0;
		return cb();
	}
	// Iterate over the mount points
	for(var i=0;i<cheerpjFSMounts.length;i++)
	{
		var f = cheerpjFSMounts[i];
		if(f.mountPoint == path + "/")
		{
			fileRef.permType = CheerpJFileData.S_IFDIR | 0555;
			// Use the dev id as the inode id
			fileRef.inodeId = f.devId;
			return cb();
		}
	}
	fileRef.permType = 0;
	return cb();
}

function rootListAsync(mp, path, fileRef, cb)
{
	// Only the root itself can be listed
	if(path != "/"){
		return cb();
	}
	for(var i=0;i<cheerpjFSMounts.length-1;i++)
	{
		var f = cheerpjFSMounts[i];
		fileRef.push(f.mountPoint.substr(1, f.mountPoint.length - 2));
	}
	return cb();
}

function rootMakeFileData(mp, path, mode, uid, gid, cb)
{
	// Only the root itself can be opened
	if(path != "/"){
		return cb(null);
	}
	var ret = new CheerpJFileData(mp, path, 0, 0, CheerpJFileData.S_IFDIR | 0777, /*lastModified*/0, /*uid*/0, /*gid*/0);
	ret.mount = mp.inodeOps;
	return cb(ret);
}

var RootOps = { statAsync: rootStatAsync, listAsync: rootListAsync, makeFileData: rootMakeFileData, createDirAsync: null, renameAsync: null, linkAsync: null, unlinkAsync: null };
var RootInodeOps = { readAsync: null, writeAsync: null, close: null };

function CheerpJWebFolder(mp, basePath, jarJSOverride, resTrace, downloader)
{
	CheerpJFolder.call(this, mp);
	this.mountOps = WebOps;
	this.inodeOps = WebInodeOps;
	this.basePath = basePath;
	this.jarJSOverride = jarJSOverride;
	// Make this a member as it needs to be overridden for jnlp support
	this.mapPath = webMapPath;
	// We need to assign unique ids to each file, and they must persist over the lifetime of the application
	this.inodeMap = {}
	this.lastInode = 1;
	// True if we should keep track of required resource ranges
	this.resTrace = resTrace;
	this.downloader = downloader;
	this.chunkSize = 128 * 1024;
}

CheerpJWebFolder.prototype = Object.create(CheerpJFolder.prototype);

function webGetInode(mp, path)
{
	var ret = mp.inodeMap[path];
	if(ret !== undefined){
		return ret;
	}
	ret = {inodeId:mp.lastInode, permType:0, fileLength:0};
	mp.lastInode = mp.lastInode + 1|0;
	mp.inodeMap[path] = ret;
	return ret;
}

function DirectDownloader(url, metaDataOnly, chunkSize, rangeHeader)
{
	this.url = url;
	this.metaDataOnly = metaDataOnly;
	this.responseURL = null;
	this.response = null;
	this.fileLength = -1;
	// The effective length of the downloaded data
	this.downloadLength = 0;
	this.failCount = 0;
	this.chunkSize = chunkSize;
	this.chunk = null;
	this.chunkOffset = 0;
	this.chunkCount = 0;
	this.rangeHeader = rangeHeader;
}

function cheerpOSSafeContentLength(contentRangeStr)
{
	if(contentRangeStr == null)
		return -1;
	// Partial content with a Content-Range header
	if(!contentRangeStr.startsWith("bytes "))
		return -1;
	var segments = contentRangeStr.substr(6).split("/");
	if(segments.length != 2)
		return -1;
	return parseInt(segments[1]);
}

function ddlOnLoad(resp, downloader)
{
	if(resp.status == 206)
	{
		downloader.responseURL = resp.url;
		downloader.lastModified = resp.headers.get("Last-Modified");
		if(downloader.responseURL.endsWith("/"))
		{
			downloader.fileLength = 0;
			downloader.onEnd(null);
		}
		else if(resp.headers.get("Content-Encoding") !== null)
		{
			// Be defensive against broken servers that mix up compression and partial content,
			// that is forbidden since it's ambiguous if the partial content is over the compressed
			// or uncompressed data
			ddlOnError(downloader, "HTTP server returned compressed partial data. That should not happen. CheerpJ cannot run.", /*fatal*/true);
		}
		else
		{
			var safeContentLength = cheerpOSSafeContentLength(resp.headers.get("Content-Range"));
			if(safeContentLength < 0)
			{
				// Partial content without Content-Range. The server is broken.
				ddlOnError(downloader, "HTTP server does not support the 'Content-Range' header. CheerpJ cannot run.", /*fatal*/true);
			}
			downloader.fileLength = safeContentLength;
			downloader.chunk = new Uint8Array(downloader.chunkSize);
			ddlOnData(downloader, resp.body.getReader());
		}
		return;
	}
	else if(resp.status == 200)
	{
		// It's only ever supposed to happen for directory redirects and index.list
		downloader.responseURL = resp.url;
		if(downloader.responseURL.endsWith("/"))
		{
			downloader.fileLength = 0;
			downloader.onEnd(null);
		}
		else
		{
			if(downloader.chunkSize > 0)
			{
				// Corner case, when the file is empty even reasonable servers (e.g. nginx) reply with 200
				if(resp.headers.get("Content-Length") != "0")
				{
					// We expected a chunk, we got a full response. The server is broken.
					ddlOnError(downloader, "HTTP server does not support the 'Range' header. CheerpJ cannot run.", /*fatal*/true);
					return;
				}
			}
			// Accumulate the data
			downloader.chunk = [];
			ddlOnData(downloader, resp.body.getReader());
		}
		downloader.lastModified = resp.headers.get("Last-Modified");
		return;
	}
	else if(resp.status == 416)
	{
		// Existing, but empty
		downloader.responseURL = resp.url;
		downloader.fileLength = 0;
		downloader.lastModified = resp.headers.get("Last-Modified");
		downloader.onEnd(null);
		return;
	}
	else if(resp.status == 204 || resp.status == 231 || resp.status == 403 || resp.status == 404)
	{
		downloader.responseURL = resp.url;
		if(resp.status == 231)
			downloader.responseURL += "/";
		downloader.onEnd(null);
		return;
	}
	else if(resp.status >= 500 && resp.status < 600)
	{
		ddlOnError(downloader, "Internal server error: " + resp.status, /*fatal*/false);
		return;
	}
	else
	{
		debugger;
	}
}

function ddlOnData(downloader, reader)
{
	reader.read()
		.then(function(result){
			if(!result.done)
			{
				var data = result.value;
				if(downloader.chunkSize == 0)
				{
					downloader.chunk.push(data);
					downloader.downloadLength += data.length;
				}
				else
				{
					// Copy data in chunks
					var dataLen = data.length;
					var dataOff = 0;
					var chunkAvail = downloader.chunkSize - downloader.chunkOffset;
					while(dataLen > 0)
					{
						if(chunkAvail > dataLen)
							chunkAvail = dataLen;
						downloader.chunk.set(data.subarray(dataOff, dataOff + chunkAvail), downloader.chunkOffset);
						downloader.chunkOffset += chunkAvail;
						downloader.downloadLength += chunkAvail;
						dataOff += chunkAvail;
						dataLen -= chunkAvail;
						if(downloader.chunkOffset == downloader.chunkSize)
						{
							downloader.onData(new Uint8Array(downloader.chunk));
							downloader.chunkOffset = 0;
							chunkAvail = downloader.chunkSize;
						}
					}
				}
				ddlOnData(downloader, reader);
			}
			else
			{
				if(downloader.fileLength == -1)
				{
					downloader.fileLength = downloader.downloadLength;
				}
				if(downloader.chunkSize == 0)
				{
					downloader.onEnd(downloader.chunk);
				}
				else
				{
					if(downloader.chunkOffset != 0)
						downloader.onData(new Uint8Array(downloader.chunk.subarray(0, downloader.chunkOffset)));
					downloader.onEnd(null);
				}
			}
		});
}

function ddlOnError(downloader, err, fatal)
{
	downloader.failCount++;
	if(downloader.failCount > 5 || fatal)
	{
		console.error("Network error for " + downloader.responseURL + ": " + err);
		downloader.onEnd(null);
		return;
	}
	// Try again
	downloader.send();
}

function ddlSend()
{
	var downloader = this;
	var headers = {};
	var method = "GET";
	if(downloader.rangeHeader)
		headers["Range"] = downloader.rangeHeader;
	else if(downloader.metaDataOnly)
		headers["Range"] = "bytes=0-0";
	fetch(downloader.url, {"method": method, "mode": "cors", "headers" : headers})
		.then(function(response){
			ddlOnLoad(response, downloader);
		})
		.catch(function(err){
			ddlOnError(downloader, err);
		});
}

DirectDownloader.prototype.send = ddlSend;
DirectDownloader.prototype.onData = function(value){};
DirectDownloader.prototype.onEnd = function(allChunks){};

function IFrameProxyDownloader(url, metaDataOnly, chunkSize, rangeHeader)
{
	this.url = url;
	this.metaDataOnly = metaDataOnly;
	this.responseURL = null;
	this.response = null;
	this.fileLength = -1;
	this.chunkSize = chunkSize;
	this.chunk = null;
	this.chunkOffset = 0;
	this.rangeHeader = rangeHeader;
	assert(IFrameProxyDownloader.iframe);
}

function ipfMessage(e)
{
	var d = e.data;
	var dl = IFrameProxyDownloader.pending[d.idx];
	dl.responseURL = d.responseURL;
	dl.fileLength = d.fileLength;
	if(d.from === "onData")
	{
		dl.onData(d.resp);
	}
	else if(d.from === "onEnd")
	{
		IFrameProxyDownloader.pending[d.idx] = null;
		dl.onEnd(d.resp);
	}
	return;
}

function ipfCreateIFrame(loaderPath)
{
	var ret = document.createElement("iframe");
	ret.onload = function(e)
	{
		clearInterval(IFrameProxyDownloader.intervalId);
		var i = e.target;
		var c = new MessageChannel();
		var q = IFrameProxyDownloader.portOrQueue;
		c.port1.onmessage = ipfMessage;
		IFrameProxyDownloader.portOrQueue = c.port1;
		i.contentWindow.postMessage({t:"port",port:c.port2}, loaderPath, [c.port2]);
		// Dispatch pending loads
		for(var i=0;i<q.length;i=i+1|0)
			q[i].send();
	};
	ret.src = loaderPath + "/c.html";
	ret.width = "0px";
	ret.height = "0px";
	ret.style.border = "0px";
	ret.style.position = "fixed";
	ret.style.visibility = "hidden";
	IFrameProxyDownloader.iframe = ret;
	if(document.body)
		document.body.appendChild(ret);
	else
		document.addEventListener("DOMContentLoaded", function(e) { document.body.appendChild(IFrameProxyDownloader.iframe); })
	IFrameProxyDownloader.intervalId = setInterval(function(){
		IFrameProxyDownloader.iframe.src = loaderPath + "/c.html";
	}, 10000);
}

function ipfSend()
{
	if(Array.isArray(IFrameProxyDownloader.portOrQueue))
	{
		// Not ready, add to queue
		IFrameProxyDownloader.portOrQueue.push(this);
		return;
	}
	var dict = {t: "load", url: this.url, metaDataOnly: this.metaDataOnly, chunkSize: this.chunkSize, rangeHeader: this.rangeHeader};
	for(var i = 0; i < IFrameProxyDownloader.pending.length; ++i)
	{
		if(IFrameProxyDownloader.pending[i] === null)
		{
			IFrameProxyDownloader.pending[i] = this;
			dict.idx = i;
			IFrameProxyDownloader.portOrQueue.postMessage(dict);
			return;
		}
	}
	IFrameProxyDownloader.pending.push(this);
	dict.idx = IFrameProxyDownloader.pending.length - 1;
	IFrameProxyDownloader.portOrQueue.postMessage(dict);
}

// Global data
IFrameProxyDownloader.iframe = null;
IFrameProxyDownloader.portOrQueue = [];
IFrameProxyDownloader.pending = [];
IFrameProxyDownloader.intervalId = 0;

IFrameProxyDownloader.prototype.send = ipfSend;
IFrameProxyDownloader.prototype.onData = function(value){};
IFrameProxyDownloader.prototype.onEnd = function(allChunks){};

function webStatAsyncImpl(mp, path, fileRef, onData, cb)
{
	var ci = mp.inodeMap[path];
	if(ci !== undefined)
	{
		fileRef.fileLength = ci.fileLength | 0;
		fileRef.inodeId = ci.inodeId | 0;
		fileRef.permType = ci.permType | 0;
		return cb();
	}
	if(path == "")
	{
		var ci = webGetInode(mp, path);
		fileRef.inodeId = ci.inodeId;
		fileRef.permType = ci.permType = CheerpJFileData.S_IFDIR | 0555;
		return cb();
	}
	var url = mp.mapPath(mp, path);
	var rangeHeader = null;
	if(onData)
	{
		// The caller can also store data, download the first chunk
		// For small files we can avoid further requests by doing this
		rangeHeader = "bytes=0-"+(mp.chunkSize-1);
	}
	var dl = new mp.downloader(url, /*metaDataOnly*/true, mp.chunkSize, /*rangeHeader*/rangeHeader);
	if(onData)
		dl.onData = onData;
	dl.onEnd = function(allChunks) {
		var inodeId = 0;
		var permType = 0;
		if(this.responseURL && this.responseURL.endsWith("/"))
		{
			var ci = webGetInode(mp, path);
			inodeId = ci.inodeId;
			permType = ci.permType = CheerpJFileData.S_IFDIR | 0555;
		}
		else if(this.fileLength >= 0)
		{
			var ci = webGetInode(mp, path);
			inodeId = ci.inodeId;
			permType = ci.permType = CheerpJFileData.S_IFREG | 0444;
			fileRef.fileLength = ci.fileLength = this.fileLength;
		}
		fileRef.permType = permType | 0;
		fileRef.inodeId = inodeId | 0;
		if(this.lastModified)
			fileRef.lastModified = (Date.parse(this.lastModified) / 1000) | 0;
		else
			fileRef.lastModified = 0;
		return cb();
	};
	dl.send();
}

function webStatAsync(mp, path, fileRef, cb)
{
	webStatAsyncImpl(mp, path, fileRef, null, cb);
}

function webMapPath(mp, path)
{
	if(mp.resTrace)
	{
		var res = mp.mountPoint + path.substr(1);
		if(cosRuntimeResourcesRanges[res] === undefined)
		{
			cheerpjRuntimeResources.push(res);
			cosRuntimeResourcesRanges[res] = [];
		}
	}
	if(path.endsWith(".jar.js") && mp.jarJSOverride){
		return mp.jarJSOverride + path;
	}else{
		return mp.basePath + path;
	}
}

function webMakeFileData(mp, path, mode, uid, gid, cb)
{
	if(mode != "r")
		return cb(null);
	var fileRef={}
	var chunks = [];
	function onData(value)
	{
		chunks.push(value);
	}
	webStatAsyncImpl(mp, path, fileRef, onData, function(){
	if(fileRef.permType === 0)
		return cb(null);
	var fileData = new CheerpJFileData(mp, path, fileRef.fileLength|0, fileRef.inodeId|0, fileRef.permType|0, fileRef.lastModified, /*uid*/0, /*gid*/0);
	fileData.mount = mp.inodeOps;
	fileData.chunks = chunks;
	if((fileRef.permType & CheerpJFileData.S_IFMT) != CheerpJFileData.S_IFREG){
		return cb(fileData);
	}
	// Prepare chunks
	var numChunks = ((fileRef.fileLength + (mp.chunkSize-1)) / mp.chunkSize) | 0;
	// NOTE: The first chunk might be already populated
	for(var i=chunks.length;i<numChunks;i++)
		chunks[i] = null;
	return cb(fileData);
	});
}

function webReadAsync(fileData, fileOffset, buf, off, len, flags, cb)
{
	assert(fileOffset <= fileData.length);
	if(fileOffset + len > fileData.length) len = fileData.length - fileOffset;
	// EOF
	if(len == 0){
		return cb(0);
	}
	var mp = fileData.parent;
	var chunkSize = mp.chunkSize;
	var startChunk = fileOffset / chunkSize | 0;
	var endChunk = (fileOffset + len - 1) / chunkSize | 0;
	var fileRef = {pendingLoads: 0};
	if(mp.resTrace){
		var startOffset = startChunk * chunkSize;
		var endOffset = (endChunk + 1) * chunkSize
		var res = mp.mountPoint + fileData.path.substr(1);
		// Keep the array ordered and remove duplicates, ranges are exclusive
		var ranges = cosRuntimeResourcesRanges[res];
		var i = 0;
		for(;i<ranges.length;i+=2)
		{
			if(ranges[i] < startOffset)
				continue;
			break;
		}
		if(i > 0 && ranges[i-1] >= startOffset)
		{
			// Merge on the left
			if(ranges[i-1] < endOffset)
			{
				ranges[i-1] = endOffset;
				// Check if we also need to merge on the right and remove an entry
				if(ranges[i] <= endOffset)
				{
					if(ranges[i+1] > endOffset)
					{
						ranges[i-1] = ranges[i+1];
					}
					ranges.splice(i, 2);
				}
			}
		}
		else if(i != ranges.length && ranges[i] <= endOffset)
		{
			// Merge on the right
			ranges[i] = startOffset;
		}
		else
		{
			// Add an entry
			ranges.splice(i, 0, startOffset, endOffset);
		}
		// Sanity checks
		for(var i=1;i<ranges.length;i++)
		{
			assert(ranges[i] > ranges[i-1]);
		}
	}
	return webReadAsyncLoop(fileData, fileOffset, buf, off, len, fileRef, startChunk, endChunk, cb);
}

function webBuildRange(fileData, chunkStart, chunkEnd)
{
	var startByte = chunkStart * fileData.parent.chunkSize;
	var endByte = ((chunkEnd + 1) * fileData.parent.chunkSize) - 1;
	if(endByte >= fileData.length)
		endByte = fileData.length - 1;
	return "bytes="+startByte+"-"+endByte;
}

function webDownloadRange(fileData, fileOffset, buf, off, len, startChunk, endChunk, fileRef, cb)
{
	var url = fileData.path;
	var rangeHeader = webBuildRange(fileData, startChunk, endChunk);
	url = webMapPath(fileData.parent, url);
	var dl = new fileData.parent.downloader(url, /*metaDataOnly*/false, fileData.parent.chunkSize, rangeHeader);
	dl.curChunk = startChunk;
	dl.onData = function(value)
	{
		var tmp = fileData.chunks[this.curChunk];
		fileData.chunks[this.curChunk] = value;
		this.curChunk++;
		for(var k = 0; k < tmp.length; k++)
		{
			tmp[k]();
		}
		// NOTE: pendingLoads can go negative due to read-ahead
		fileRef.pendingLoads--;
		if(fileRef.pendingLoads !== 0)
			return;
		webReadAsyncEnd(fileData, fileOffset, buf, off, len, cb);
	};
	dl.send();
}

function webReadAsyncLoop(fileData, fileOffset, buf, off, len, fileRef, startChunk, endChunk, cb)
{
	var pendingStartChunk = startChunk;
	for(var curChunk=startChunk;curChunk<=endChunk;curChunk++){
		var curData = fileData.chunks[curChunk];
		if(curData)
		{
			if(pendingStartChunk < curChunk)
			{
				// Download a range up to this chunk, which we already have
				webDownloadRange(fileData, fileOffset, buf, off, len, pendingStartChunk, curChunk - 1, fileRef, cb)
			}
			pendingStartChunk = curChunk + 1;
			if(curData instanceof Uint8Array)
			{
				continue;
			}
			else
			{
				// The double increment here is required to avoid waking up threads too early
				// due to the read-ahead block arriving sooner
				fileRef.pendingLoads+=2;
				curData.push(function()
				{
					// If the read-ahead has already completed we will reach -1
					fileRef.pendingLoads-=2;
					if(fileRef.pendingLoads > 0)
						return;
					webReadAsyncEnd(fileData, fileOffset, buf, off, len, cb);
				});
			}
		}
		else
		{
			// Nothing to do, accumulate the range
			fileRef.pendingLoads++;
			fileData.chunks[curChunk] = [];
		}
	}
	// Do read-ahead, but do not wait for the results
	var fwdAhead = endChunk + 1;
	var bwdAhead = startChunk - 1;
	var bwdDownloader = null;
	if(fwdAhead < fileData.chunks.length && fileData.chunks[fwdAhead] == null)
	{
		// Extend the range, but don't increment pendingLoads
		endChunk = fwdAhead;
		fileData.chunks[fwdAhead] = [];
	}
	else if(bwdAhead >= 0 && fileData.chunks[bwdAhead] == null)
	{
		var url = fileData.path;
		var rangeHeader = webBuildRange(fileData, bwdAhead, bwdAhead);
		url = webMapPath(fileData.parent, url);
		bwdDownloader = new fileData.parent.downloader(url, /*metaDataOnly*/false, fileData.parent.chunkSize, rangeHeader);
		fileData.chunks[bwdAhead] = [];
		bwdDownloader.curChunk = bwdAhead;
		bwdDownloader.onData = function(value)
		{
			var tmp = fileData.chunks[this.curChunk];
			fileData.chunks[this.curChunk] = value;
			for(var k = 0; k < tmp.length; k++)
			{
				tmp[k]();
			}
		};
	}
	if(pendingStartChunk <= endChunk)
	{
		webDownloadRange(fileData, fileOffset, buf, off, len, pendingStartChunk, endChunk, fileRef, cb)
	}
	if(bwdDownloader)
	{
		bwdDownloader.send();
	}
	if(fileRef.pendingLoads !== 0){
		return;
	}
	return webReadAsyncEnd(fileData, fileOffset, buf, off, len, cb);
}

function webReadAsyncEnd(fileData, fileOffset, buf, off, len, cb)
{
	if(buf.length == 0)
	{
		// Defend against buffer invalidation
		return cb(/*EFAULT*/-14);
	}
	// All chunks are now loaded
	var chunkSize = fileData.parent.chunkSize;
	var curChunk = fileOffset / chunkSize | 0;
	var curOffset = fileOffset - (curChunk*chunkSize) | 0;
	var i=0;
	while(i<len)
	{
		var c = fileData.chunks[curChunk];
		if((len-i) < (chunkSize-curOffset))
			chunkSize = curOffset+(len-i);
		for(var j=curOffset;j<chunkSize;j++)
		{
			buf[off+i>>>0]=c[j];
			i++;
		}
		curChunk++;
		curOffset=0;
	}
	assert(i===len);
	return cb(len);
}

function webListAsync(mp, path, fileRef, cb)
{
	var url = mp.mapPath(mp, path+"/index.list");
	var dl = new mp.downloader(url, /*metaDataOnly*/false, /*chunkSize*/0, /*rangeHeader*/null);
	dl.fileRef = fileRef;
	dl.onEnd = function(allChunks)
	{
		if(allChunks != null)
		{
			var res = "";
			for(var i=0;i<allChunks.length;i++)
			{
				var chunk = allChunks[i];
				var chunkLen = chunk.length;
				for(var j=0;j<chunkLen;j++)
					res += String.fromCharCode(chunk[j]);
			}
			var files = res.split("\n");
			var filesLen = files.length;
			for(var i=0;i<filesLen;i++)
			{
				if(files[i].length)
					fileRef.push(files[i]);
			}
		}
		cb();
	};
	dl.send();
}

var WebOps = { statAsync: webStatAsync, listAsync: webListAsync, makeFileData: webMakeFileData, createDirAsync: null, renameAsync: null, linkAsync: null, unlinkAsync: null };
var WebInodeOps = { readAsync: webReadAsync, writeAsync: null, close: null };

function CheerpJIndexedDBFolder(mp)
{
	CheerpJFolder.call(this, mp);
	this.mountOps = IdbOps;
	this.inodeOps = IdbInodeOps;
	this.isSplit = true;
	this.dbConnection = null;
	this.dEntries = {};
}

CheerpJIndexedDBFolder.prototype = Object.create(CheerpJFolder.prototype);

function idbTrap(e)
{
debugger
}

function idbStatAsync(mp, path, fileRef, cb)
{
	idbEnsureDBConnection(mp, function()
	{
	// We get here after dbConnection is valid
	assert(path[path.length-1]!='/');
	var tx = mp.dbConnection.transaction("files", "readonly");
	var store = tx.objectStore("files");
	// Find the directory
	var req = store.get(path);
	assert(req.readyState != "done");
	req.fileRef = fileRef;
	req.onerror = idbTrap;
	function gotRes(fileRef, res)
	{
		if(!res)
		{
			fileRef.permType = 0;
		}
		else
		{
			fileRef.inodeId = res.inodeId;
			fileRef.uid = res.uid;
			fileRef.gid = res.gid;
			if(res.hasOwnProperty("permType"))
				fileRef.permType = res.permType;
			else if(res.type == "dir")
				fileRef.permType = CheerpJFileData.S_IFDIR | 0777;
			else if(res.type == "s")
				fileRef.permType = CheerpJFileData.S_IFSOCK | 0666;
			else
			{
				assert(res.type == "file");
				fileRef.permType = CheerpJFileData.S_IFREG | 0666;
			}
			if(res.type == "file")
				fileRef.fileLength = res.contents == null ? 0 : res.contents.length;
			else if(res.type == "special")
				fileRef.contents = res.contents;
			fileRef.lastModified = res.lastModified|0;
		}
		return cb();
	}
	req.onsuccess = function(e)
	{
		this.onerror = null;
		this.onsuccess = null;
		var res = this.result;
		if(typeof(res) == "number")
		{
			assert(store != null);
			var req = store.get(res);
			assert(req.readyState != "done");
			req.fileRef = this.fileRef;
			req.onerror = idbTrap;
			req.onsuccess = function(e)
			{
				this.onerror = null;
				this.onsuccess = null;
				var res = this.result;
				return gotRes(this.fileRef, res);
			};
			return;
		}
		return gotRes(this.fileRef, res);
	}
	});
}

function idbListAsync(mp,path, fileRef, cb)
{
	idbEnsureDBConnection(mp, function()
	{
	// We get here after dbConnection is valid
	assert(path[path.length-1]!='/');
	var tx = mp.dbConnection.transaction("files", "readonly");
	var store = tx.objectStore("files");
	// Find the directory
	var req = store.get(path);
	assert(req.readyState != "done");
	req.fileRef = fileRef;
	req.onerror = idbTrap;
	req.onsuccess = function(e)
	{
		this.onerror = null;
		this.onsuccess = null;
		var res = this.result;
		if(res && res.type == "dir")
		{
			var c = res.contents;
			for(var i=0;i<c.length;i++)
				fileRef.push(c[i].substr(1));
		}
		// If there is no event, this is an sync handling
		if(e){
			return cb();
		}
	}
	if(req.readyState == "done"){
		req.onsuccess(null);
		return cb();
	}else{
		return;
	}
	});
}

function idbCreateDirAsync(mp, path, fileRef, mode, uid, gid, cb)
{
	idbEnsureDBConnection(mp, function(){
	// We get here after dbConnection is valid
	assert(path[path.length-1]!='/');
	// Find where the parent directory ends
	var parentEnd = path.lastIndexOf('/');
	assert(parentEnd >= 0);
	var parentPath = path.substring(0, parentEnd);
	var tx = mp.dbConnection.transaction("files", "readwrite");
	var store = tx.objectStore("files");
	function gotParent(res, asyncThread)
	{
		if(!res)
			fileRef.exists = 0;
		else
			fileRef.exists = (res.type == "dir" ? 5 : 3);
		if(fileRef.exists !== 5)
		{
			// Parent directory does not exist or it's not a directory
			if(asyncThread)
			{
				fileRef.exists = 0;
				return asyncThread();
			}
			return;
		}
		res = idbAddDEntry(mp, parentPath, res);
		// Add this new object to the parent Path
		var childPath = path.substring(parentPath.length);
		assert(childPath[0]=='/');
		for(var i=0;i<res.contents.length;i++)
		{
			if(res.contents[i] == childPath)
			{
				if(asyncThread)
				{
					fileRef.exists = 5;
					return asyncThread();
				}
				return;
			}
		}
		res.contents.push(childPath);
		store.put(res, parentPath);
		var cachedDE = idbCheckDEntry(mp, "");
		var curInodeId = cachedDE.nextInode++;
		store.put(cachedDE, "");
		store.put({ type: "dir", contents:[], inodeId: curInodeId, permType: CheerpJFileData.S_IFDIR | (mode & 01777), uid: uid, gid: gid, lastModified: (Date.now() / 1000)|0}, path);
		if(asyncThread)
		{
			fileRef.exists = 5;
			return asyncThread();
		}
	}
	var cachedDE = idbCheckDEntry(mp, parentPath);
	if(cachedDE)
	{
		gotParent(cachedDE, null);
		return cb();
	}
	else
	{
		// Find the parent
		var req = store.get(parentPath);
		if(req.readyState == "done")
		{
			gotParent(req.result, null);
			return cb();
		}
		else
		{
			req.onerror = idbTrap;
			req.onsuccess = function(e) { this.onerror = null; this.onsuccess = null; gotParent(this.result, cb); }
			return;
		}
	}
	});
}

function idbCheckDEntry(mp, path)
{
	// Does it exists already?
	var ret = mp.dEntries[path];
	if(!ret){
		return null;
	}
	// Yep, mark it for LRU
	ret.ts = Date.now();
	return ret.res;
}

function idbAddDEntry(mp, path, res)
{
	var ret = idbCheckDEntry(mp, path);
	if(ret){
		return ret;
	}
	mp.dEntries[path] = { res: res, ts: Date.now() };
	return res;
}

function idbDelDEntry(mp, path)
{
	delete mp.dEntries[path];
}


function idbDecRefIndirect(store, fileRef)
{
	fileRef.refCount = fileRef.refCount-1|0;
	if(fileRef.refCount == 0)
		store.delete(fileRef.inodeId);
	else
		store.put(fileRef, fileRef.inodeId);
}

function idbResolve(mp, path, fileRef, cb)
{
	var parentPath = null;
	// We get here after dbConnection is valid
	if(path.length == 0)
	{
		// Getting the root directory, special case this
		parentPath = path;
	}
	else
	{
		assert(path[path.length-1]!='/');
		// Find where the parent directory ends
		var parentEnd = path.lastIndexOf('/');
		assert(parentEnd >= 0);
		parentPath = path.substring(0, parentEnd);
	}
	function gotFile(parentRes, res, asyncThread, store)
	{
		if(typeof(res) == "number")
		{
			assert(store != null);
			assert(asyncThread != null);
			var req = store.get(res);
			assert(req.readyState != "done");
			req.onerror = idbTrap;
			req.onsuccess = function(e)
			{
				this.onerror = null;
				this.onsuccess = null;
				var res = this.result;
				gotFile(parentRes, res, asyncThread, store);
			}
			return;
		}
		fileRef.parentPath = parentPath;
		fileRef.parentRes = parentRes;
		fileRef.res = res;
		if(asyncThread)
		{
			return asyncThread();
		}
	}
	function gotParent(res, asyncThread, store)
	{
		if(!res || res.type != "dir")
		{
			// Parent directory does not exist or it's not a directory
			fileRef.fileData = null;
			if(asyncThread)
			{
				return asyncThread();
			}
			return false;
		}
		var parentRes = idbAddDEntry(mp, parentPath, res);
		// The file may already exists
		var filePath = path.substr(parentPath.length);
		var fileIndex = res.contents.indexOf(filePath);
		if(filePath == "")
		{
			gotFile(parentRes, parentRes, asyncThread, store);
			return false;
		}
		else if(fileIndex < 0)
		{
			gotFile(parentRes, null, asyncThread, store);
			return false;
		}
		else
		{
			if(store == null)
			{
				var tx = mp.dbConnection.transaction("files", "readonly");
				var store = tx.objectStore("files");
			}
			var req = store.get(path);
			assert(req.readyState != "done");
			req.onerror = idbTrap;
			req.onsuccess = function(e)
			{
				this.onerror = null;
				this.onsuccess = null;
				var res = this.result;
				gotFile(parentRes, res, asyncThread ? asyncThread : cb, store);
			}
			return true;
		}
	}
	var cachedDE = idbCheckDEntry(mp, parentPath);
	var doAsync = false;
	if(cachedDE)
	{
		doAsync = gotParent(cachedDE, null, null);
	}
	else
	{
		// Find the parent
		var tx = mp.dbConnection.transaction("files", "readonly");
		var store = tx.objectStore("files");
		var req = store.get(parentPath);
		assert(req.readyState != "done");
		if(req.readyState == "done")
			doAsync = gotParent(null, null, store);
		else
		{
			req.onerror = idbTrap;
			req.onsuccess = function(e) { this.onerror = null; this.onsuccess = null; gotParent(this.result, cb, this.source); }
			doAsync = true;
			assert(req.readyState != "done");
		}
	}
	if(doAsync)
	{
		return;
	}
	return cb();
}

function idbMakeFileData(mp, path, mode, uid, gid, cb)
{
	assert(mp.isSplit);
	var fileRef={fileData:null, parentPath: null, parentRes:null, res:null};
	idbEnsureDBConnection(mp, function(){
	idbResolve(mp, path, fileRef, function(){
	var tx = mp.dbConnection.transaction("files", "readwrite");
	var store = tx.objectStore("files");
	if(fileRef.parentRes == null)
	{
		// Parent directory does not exists
		return cb(null);
	}
	else
	{
		var parentPath = fileRef.parentPath;
		var parentRes = fileRef.parentRes;
		var res = fileRef.res;
		var fileExists = res && (res.type == "file" || res.type == "dir");
		var fileIsIndirect = res && res.hasOwnProperty("refCount");
		if(mode == "r" || ((mode == "r+" || mode == "w") && fileExists))
		{
			if(fileExists)
			{
				if(res.type == "file")
				{
					var data = res.contents;
					var chunks = [];
					if(mode == "w")
						data = null;
					else if(data)
					{
						var cur = 0;
						var len = data.length;
						var chunkSize = 1024*1024;
						while(cur < len)
						{
							var thisChunkSize = (len - cur) < chunkSize ? len - cur : chunkSize;
							var c = new Uint8Array(chunkSize);
							c.set(data.subarray(cur, cur+thisChunkSize));
							chunks.push(c);
							cur += thisChunkSize;
						}
						assert(cur == len);
					}
					var permType = res.permType ? res.permType : CheerpJFileData.S_IFREG | 0666;
					if(mp.inodeCache[res.inodeId])
					{
						fileRef.fileData = mp.inodeCache[res.inodeId];
						fileRef.path = null;
					}
					else
					{
						fileRef.fileData = new CheerpJFileData(mp, fileIsIndirect ? null : path, data?data.length:0, res.inodeId, permType, res.lastModified|0, res.uid, res.gid);
						fileRef.fileData.mount = mp.inodeOps;
						fileRef.fileData.chunks = chunks;
					}
					if(mode == "w")
						fileRef.fileData.dirty = 1;
				}
				else if(res.type == "dir")
				{
					// It is legal to get an fd to a directory
					var permType = res.permType ? res.permType : CheerpJFileData.S_IFDIR | 0777;
					// It not legal to have multiple names for the same directory
					assert(!mp.inodeCache[res.inodeId]);
					fileRef.fileData = new CheerpJFileData(mp, path, 0, res.inodeId, permType, res.lastModified|0, res.uid, res.gid);
					fileRef.fileData.mount = mp.inodeOps;
				}
			}
			else
				fileRef.fileData = null;
		}
		else if(mode == "r+" || mode == "w")
		{
			// w is truncate, so we always update the file
			assert(!fileExists);
			{
				// Add this new object to the parent Path
				var childPath = path.substring(parentPath.length);
				assert(childPath[0]=='/');
				assert(parentRes.contents);
				parentRes.contents.push(childPath);
				store.put(parentRes, parentPath);
			}
			// TODO: Check if the file is actually a dir
			var cachedDE = idbCheckDEntry(mp, "");
			var curInodeId = cachedDE.nextInode++;
			store.put(cachedDE, "");
			var lastModified = (Date.now() / 1000)|0;
			store.put({ type: "file", contents:null, inodeId: curInodeId, uid: uid, gid: gid, lastModified: lastModified }, path);
			fileRef.fileData = new CheerpJFileData(mp, path, 0, curInodeId, CheerpJFileData.S_IFREG | 0666, lastModified, uid, gid);
			fileRef.fileData.dirty = 1;
			fileRef.fileData.mount = mp.inodeOps;
			fileRef.fileData.chunks = [];
		}
		else if(mode == "s")
		{
			if(fileExists)
				fileRef.fileData = null;
			else
			{
				// Add this new object to the parent Path
				var childPath = path.substring(parentPath.length);
				assert(childPath[0]=='/');
				assert(parentRes.contents);
				parentRes.contents.push(childPath);
				store.put(parentRes, parentPath);
				var cachedDE = idbCheckDEntry(mp, "");
				var curInodeId = cachedDE.nextInode++;
				store.put(cachedDE, "");
				var lastModified = (Date.now() / 1000)|0;
				store.put({ type: "special", contents:null, inodeId: curInodeId, uid: uid, gid: gid, lastModified: lastModified }, path);
				fileRef.fileData = new CheerpJFileData(mp, path, 0, curInodeId, CheerpJFileData.S_IFSOCK | 0666, lastModified, uid, gid);
				fileRef.fileData.dirty = 1;
				fileRef.fileData.mount = mp.inodeOps;
			}
		}
		else
			debugger
	}
	// The returned value may be null if the file can't be created
	return cb(fileRef.fileData);
	});
	});
}

function idbRenameAsync(mp, srcPath, dstPath, cb)
{
	idbEnsureDBConnection(mp, function(){
	// The whole operation should be atomic, using a single transaction should do it
	// TODO: What about the file cache atomicity? That is handled in the caller.
	var srcFileRef={fileData:null, parentPath: null, parentRes:null, res:null};
	idbResolve(mp, srcPath, srcFileRef, function(){
	if(srcFileRef.res == null){
		// File does not exists
		return cb(0);
	}
	var dstFileRef={fileData:null, parentPath: null, parentRes:null, res:null};
	idbResolve(mp, dstPath, dstFileRef, function()
	{
	assert(dstFileRef.res == null || !dstFileRef.res.hasOwnProperty("refCount"));
	if(dstFileRef.parentRes == null){
		// Parent directory does not exists
		return cb(0);
	}
	// TODO: Support renaming directories
	if(srcFileRef.res.type == "dir"){
		return cb(0);
	}
	var tx = mp.dbConnection.transaction("files", "readwrite");
	var store = tx.objectStore("files");
	// 1) Remove src file from parent directory
	var srcChildPath = srcPath.substr(srcFileRef.parentPath.length);
	var srcParentIndex = srcFileRef.parentRes.contents.indexOf(srcChildPath);
	assert(srcParentIndex >= 0);
	srcFileRef.parentRes.contents.splice(srcParentIndex, 1);
	store.put(srcFileRef.parentRes, srcFileRef.parentPath);
	// 2) Remove src from the DB
	store.delete(srcPath);
	// 3) Add the file to the dst directory
	var dstChildPath = dstPath.substr(dstFileRef.parentPath.length);
	var dstParentIndex = dstFileRef.parentRes.contents.indexOf(dstChildPath);
	if(dstParentIndex < 0){
		dstFileRef.parentRes.contents.push(dstChildPath);
		store.put(dstFileRef.parentRes, dstFileRef.parentPath);
	}
	// 4) Store the contents to the dst path
	store.put(srcFileRef.res, dstPath);
	tx.oncomplete = function(e){
		return cb(1);
	}
	});
	});
	});
}

function idbLinkAsync(mp, srcPath, dstPath, cb)
{
	idbEnsureDBConnection(mp, function(){
	// The whole operation should be atomic, using a single transaction should do it
	var srcFileRef={fileData:null, parentPath: null, parentRes:null, res:null};
	idbResolve(mp, srcPath, srcFileRef, function(){
	if(srcFileRef.res == null){
		// File does not exists
		return cb(0);
	}
	var dstFileRef={fileData:null, parentPath: null, parentRes:null, res:null};
	idbResolve(mp, dstPath, dstFileRef, function()
	{
	if(dstFileRef.res != null){
		// Dest file already exists
		return cb(0);
	}
	if(dstFileRef.parentRes == null){
		// Parent directory does not exists
		return cb(0);
	}
	// Hard-linking directories is not supported
	if(srcFileRef.res.type == "dir"){
		return cb(0);
	}
	var tx = mp.dbConnection.transaction("files", "readwrite");
	var store = tx.objectStore("files");
	// 1) Check if srcFileRef needs to become indirect
	if(!srcFileRef.res.hasOwnProperty("refCount")){
		var res = srcFileRef.res;
		var inodeId = res.inodeId;
		assert(inodeId);
		store.put(inodeId, srcPath);
		res.refCount = 1;
		var cachedFileData = mp.inodeCache[inodeId];
		if(cachedFileData){
			assert(cachedFileData.path);
			cachedFileData.path = null;
		}
	}
	// 2) Add the file to the dst directory
	var dstChildPath = dstPath.substr(dstFileRef.parentPath.length);
	var dstParentIndex = dstFileRef.parentRes.contents.indexOf(dstChildPath);
	assert(dstParentIndex < 0);
	dstFileRef.parentRes.contents.push(dstChildPath);
	store.put(dstFileRef.parentRes, dstFileRef.parentPath);
	// 3) Store the contents to the dst path, as indirect
	srcFileRef.res.refCount = srcFileRef.res.refCount+1|0;
	store.put(srcFileRef.res, srcFileRef.res.inodeId);
	store.put(srcFileRef.res.inodeId, dstPath);
	tx.oncomplete = function(e){
		return cb(1);
	}
	});
	});
	});
}

function idbReadAsync(fileData, fileOffset, buf, off, len, flags, cb)
{
	var chunkSize = 1024*1024;
	var curChunk = fileOffset / chunkSize | 0;
	if(fileOffset + len > fileData.length)
		len = fileData.length - fileOffset;
	if(len<=0){
		return cb(0);
	}
	var endChunk = (fileOffset + len - 1) / chunkSize | 0;
	var fileRef={cheerpjDownload:null};
	while(len && curChunk <= endChunk){
		assert(fileData.chunks[curChunk]);
		var curChunk = curChunk+1|0;
	}
	// All chunks are now loaded
	var curChunk = fileOffset / chunkSize | 0;
	var curOffset = fileOffset - (curChunk*chunkSize) | 0;
	var i=0;
	while(i<len)
	{
		var c = fileData.chunks[curChunk];
		if((len-i) < (chunkSize-curOffset))
			chunkSize = curOffset+(len-i);
		for(var j=curOffset;j<chunkSize;j++)
		{
			buf[off+i>>>0]=c[j];
			i++;
		}
		curChunk++;
		curOffset=0;
	}
	assert(i==len);
	return cb(len);
}

function idbWriteAsync(fileData, fileOffset, buf, off, len, cb)
{
	var chunkSize = 1024*1024;
	var curChunk = 0;
	var endChunk = (fileOffset + len) / chunkSize | 0;
	// Create all chunks first
	while(curChunk <= endChunk)
	{
		if(fileData.chunks[curChunk])
		{
			var curChunk = curChunk+1|0;
			continue;
		}
		fileData.chunks[curChunk]=new Uint8Array(chunkSize);
		curChunk = curChunk+1|0;
	}
	var curChunk = fileOffset / chunkSize | 0;
	var curOffset = fileOffset - (curChunk*chunkSize) | 0;
	var i=0;
	while(i<len)
	{
		var c = fileData.chunks[curChunk];
		if((len-i) < (chunkSize-curOffset))
			chunkSize = curOffset+(len-i);
		for(var j=curOffset;j<chunkSize;j++)
		{
			c[j]=buf[off+i>>>0];
			i++;
		}
		curChunk++;
		curOffset=0;
	}
	assert(i==len);
	if((fileOffset+len|0) > fileData.length)
	{
		fileData.length = fileOffset + len | 0;
	}
	return cb(len);
}

function idbCommitFileData(fileData, cb)
{
	if (!fileData.dirty)
		return cb();
	var mp = fileData.parent;
	assert(mp.isSplit);
	assert(mp.dbConnection);
	var fileRef = null;
	var filePath = fileData.path;
	if(filePath == null){
		assert(fileData.inodeId > 0);
		filePath = fileData.inodeId;
	}
	// For non-files we only update permType
	if((fileData.permType & CheerpJFileData.S_IFMT) != CheerpJFileData.S_IFREG){
		fileRef={};
		idbResolve(mp, filePath, fileRef, function()
		{
			assert(fileRef.res);
			fileRef = fileRef.res;
			fileRef.permType = fileData.permType;
			if((fileData.permType & CheerpJFileData.S_IFMT) != CheerpJFileData.S_IFDIR){
				fileRef.contents = fileData.chunks;
			}
			var tx = mp.dbConnection.transaction("files", "readwrite");
			var store = tx.objectStore("files");
			tx.oncomplete = function()
			{
				cb();
			};
			fileData.dirty = 0;
			store.put(fileRef, filePath);
		});
	}else{
		var contents = new Uint8Array(fileData.length);
		var chunkSize = 1024*1024;
		var curChunk = 0;
		for(var i=0;i<fileData.length;)
		{
			var c = fileData.chunks[curChunk];
			if(fileData.length - i < chunkSize)
				c = c.subarray(0, fileData.length-i)
			contents.set(c, i);
			curChunk++;
			i += c.length;
		}
		fileRef = { type: "file", contents:contents, inodeId: fileData.inodeId, permType: fileData.permType, uid: fileData.uid, gid: fileData.gid, lastModified: (Date.now() / 1000)|0 };
		var tx = mp.dbConnection.transaction("files", "readwrite");
		var store = tx.objectStore("files");
		tx.oncomplete = function()
		{
			cb();
		};
		fileData.dirty = 0;
		store.put(fileRef, filePath);
	}
}

function idbUnlinkAsync(mp, path, cb)
{
	assert(mp.isSplit);
	var fileRef={fileData:null, parentPath: null, parentRes:null, res:null};
	idbEnsureDBConnection(mp, function(){
	idbResolve(mp, path, fileRef, function(){
	if(fileRef.res == null)
	{
		// File does not exists
		return cb(false);
	}
	else
	{
		var parentPath = fileRef.parentPath;
		var parentRes = fileRef.parentRes;
		var res = fileRef.res;
		if(res.type == "dir")
		{
			// We can only delete empty directories
			if(res.contents.length > 0)
				return cb(false);
			// Remove the cached entry
			idbDelDEntry(mp, path);
		}
		var filePath = path.substr(parentPath.length);
		var fileIndex = parentRes.contents.indexOf(filePath);
		assert(filePath.length > 0);
		assert(fileIndex >= 0);
		parentRes.contents.splice(fileIndex, 1);
		var tx = mp.dbConnection.transaction("files", "readwrite");
		var store = tx.objectStore("files");
		tx.onerror = idbTrap;
		tx.onabort = idbTrap;
		tx.oncomplete = function()
		{
			this.onerror = null;
			this.onabort = null;
			this.oncomplete = null;
			// If we get here the deletion was successfull
			return cb(true);
		};
		store.put(parentRes, parentPath);
		store.delete(path);
		if(fileRef.res.hasOwnProperty("refCount"))
			idbDecRefIndirect(store, fileRef.res);
	}
	});
	});
}

function idbEnsureDBConnection(mp, cb)
{
	if(mp.dbConnection == null){
		// Async connection to the DB
		var openResult = indexedDB.open("cjFS_"+mp.mountPoint);
		assert(openResult.readyState != "done");
		openResult.folder = mp;
		openResult.onerror = idbTrap;
		openResult.onsuccess = function(e)
		{
			this.onerror = null;
			this.onsuccess = null;
			this.onupgradeneeded = null;
			this.folder.dbConnection = this.result;
			var tx = this.folder.dbConnection.transaction("files", "readonly");
			// Retrieve the first unallocated inode
			var store = tx.objectStore("files");
			var inodeReq = store.get("");
			assert(inodeReq.readyState != "done");
			inodeReq.folder = this.folder;
			inodeReq.onerror = idbTrap;
			inodeReq.onsuccess = function()
			{
				idbAddDEntry(this.folder, "", this.result);
				this.folder.inodeId = this.result.nextInode;
				return cb();
			};
		}
		openResult.onupgradeneeded = function(e)
		{
			this.onerror = null;
			this.onsuccess = null;
			this.onupgradeneeded = null;
			var db = this.result;
			db.onerror = idbTrap;
			db.onabort = idbTrap;
			db.onclose = idbTrap;
			db.onversionchange = idbTrap;
			var store=db.createObjectStore("files");
			// Initialize the root dir
			var req = store.add({ type: "dir", contents:[], uid: 0, gid: 0, lastModified: (Date.now() / 1000)|0, inodeId: 1, nextInode:2 }, "");
			assert(req.readyState != "done");
			// TODO: What if this fails?
			req.onabort = idbTrap;
			this.transaction.oncomplete = function()
			{
				this.oncomplete = null;
				openResult.folder.dbConnection = this.db;
				return cb();
			}
		}
	}else{
		return cb();
	}
}

var IdbOps = { statAsync: idbStatAsync, listAsync: idbListAsync, makeFileData: idbMakeFileData, createDirAsync: idbCreateDirAsync, renameAsync: idbRenameAsync, linkAsync: idbLinkAsync, unlinkAsync: idbUnlinkAsync };
var IdbInodeOps = { readAsync: idbReadAsync, writeAsync: idbWriteAsync, close: idbCommitFileData };

function CheerpJDataFolder(mp)
{
	CheerpJFolder.call(this, mp);
	this.mountOps = StrOps;
	this.inodeOps = StrInodeOps;
	this.files = {};
	this.lastInode = 2;
}

CheerpJDataFolder.prototype = Object.create(CheerpJFolder.prototype);

function strStatAsync(mp, path, fileRef, cb)
{
	if(path == "")
	{
		fileRef.permType = CheerpJFileData.S_IFDIR | 0555;
		// Use the dev id as the inode id
		fileRef.inodeId = 1;
		return cb();
	}
	if(mp.files.hasOwnProperty(path))
	{
		var file = mp.files[path];
		fileRef.fileLength = file.data.length;
		fileRef.permType = CheerpJFileData.S_IFREG | 0444;
		fileRef.inodeId = file.inodeId;
	}
	else
	{
		fileRef.permType = 0;
	}
	return cb();
}

function strListAsync(mp, path, fileRef, cb)
{
	// Only the root itself can be listed
	if(path != ""){
		return cb();
	}
	for(var p in mp.files)
	{
		fileRef.push(p.substring(1));
	}
	return cb();
}

function strMakeFileData(mp, path, mode, uid, gid, cb)
{
	if(path == "")
	{
		var ret = new CheerpJFileData(mp, path, 0, 0, CheerpJFileData.S_IFDIR | 0777, /*lastModified*/0, /*uid*/0, /*gid*/0);
		ret.mount = mp.inodeOps;
		return cb(ret);
	}
	if(!mp.files.hasOwnProperty(path))
	{
		return cb(null);
	}
	var ret = mp.files[path].data;
	assert(ret instanceof Uint8Array);
	var inodeId = mp.files[path].inodeId
	var fileData = new CheerpJFileData(mp, path, ret.length|0, inodeId|0, CheerpJFileData.S_IFREG | 0444, /*lastModified*/0, /*uid*/0, /*gid*/0);
	fileData.mount = mp.inodeOps;
	fileData.data = ret;
	return cb(fileData);
}

function strReadAsync(fileData, fileOffset, buf, off, len, flags, cb)
{
	if(len > fileData.data.length - fileOffset)
		len = fileData.data.length - fileOffset;
	// EOF
	if(len == 0){
		return cb(0);
	}
	for(var i=0;i<len;i++)
		buf[off+i>>>0] = fileData.data[fileOffset+i|0];
	return cb(len);
}

var StrOps = { statAsync: strStatAsync, listAsync: strListAsync, makeFileData: strMakeFileData, createDirAsync: null, renameAsync: null, linkAsync: null, unlinkAsync: null };
var StrInodeOps = { readAsync: strReadAsync, writeAsync: null, close: null };

function CheerpJDevFolder(mp, basePath)
{
	CheerpJFolder.call(this, mp);
	this.mountOps = DevOps;
	this.inodeOps = null;
	this.isSplit = true;
	this.devMap = {};
	// Reserve a few ides for random/urandom/nul;
	this.nextInode = 4;
}

CheerpJDevFolder.prototype = Object.create(CheerpJFolder.prototype);

function devStatAsync(mp, path, fileRef, cb)
{
	if(path == "/random" || path == "/urandom" || path == "/null")
	{
		fileRef.permType = CheerpJFileData.S_IFCHR | 0666;
	}
	else
	{
		fileRef.permType = 0;
	}
	return cb();
}

function devMakeFileData(mp, path, mode, uid, gid, cb)
{
	var fileData = null;
	if(path == "/random")
	{
		fileData = new CheerpJFileData(mp, path, 0xffffffff, 1, CheerpJFileData.S_IFCHR | 0666, /*lastModified*/0, /*uid*/0, /*gid*/0);
		fileData.mount = DevRandomInodeOps;
	}
	else if(path == "/urandom")
	{
		fileData = new CheerpJFileData(mp, path, 0xffffffff, 2, CheerpJFileData.S_IFCHR | 0666, /*lastModified*/0, /*uid*/0, /*gid*/0);
		fileData.mount = DevRandomInodeOps;
	}
	else if(path == "/null")
	{
		fileData = new CheerpJFileData(mp, path, 0xffffffff, 3, CheerpJFileData.S_IFCHR | 0666, /*lastModified*/0, /*uid*/0, /*gid*/0);
		fileData.mount = DevNullInodeOps;
	}
	else if(mp.devMap.hasOwnProperty(path))
	{
		fileData = new CheerpJFileData(mp, path, 0xffffffff, mp.devMap[path].inodeId, CheerpJFileData.S_IFCHR | 0666, /*lastModified*/0, /*uid*/0, /*gid*/0);
		fileData.mount = mp.devMap[path];
	}
	return cb(fileData);
}

function devRandomRead(fileData, fileOffset, buf, off, len, flags, cb)
{
	var data = buf.subarray(off, off+len);
	crypto.getRandomValues(data);
	return cb(len);
}

function devRandomWrite(fileData, fileOffset, buf, off, len, cb)
{
	return cb(len);
}

var DevRandomInodeOps = { readAsync: devRandomRead, writeAsync: devRandomWrite, close: null };

function devNullRead(fileData, fileOffset, buf, off, len, flags, cb)
{
	return cb(0);
}

function devNullWrite(fileData, fileOffset, buf, off, len, cb)
{
	return cb(len);
}

var DevNullInodeOps = { readAsync: devNullRead, writeAsync: devNullWrite, close: null };

var DevOps = { statAsync: devStatAsync, listAsync: null, makeFileData: devMakeFileData, createDirAsync: null, renameAsync: null, linkAsync: null, unlinkAsync: null };

function conReadAsync(fileData, fileOffset, buf, off, len, flags, cb)
{
	if(!fileData.inCallback)
		return;
	fileData.inCallback(fileData.param, fileOffset, buf, off, len, cb);
}

function conWriteAsync(fileData, fileOffset, buf, off, len, cb)
{
	fileData.outCallback(fileData.param, fileOffset, buf, off, len, cb);
}

var ConInodeOps = { readAsync: conReadAsync, writeAsync: conWriteAsync, close: null };

function cheerpjCreateConsole(param, inCallback, outCallback)
{
	var fileData = new CheerpJFileData(null, null, 0, 0, CheerpJFileData.S_IFCHR | 0666, /*lastModified*/0, /*uid*/0, /*gid*/0);
	fileData.mount = ConInodeOps;
	// Add custom fields
	fileData.inCallback = inCallback;
	fileData.outCallback = outCallback;
	fileData.param = param;
	return fileData;
}

function cheerpjDefaultConsoleWrite(param, fileOffset, buf, off, len, cb)
{
	// Console output, either to debug console or DOM console
	var strBytes = ""
	for(var i=0;i<len;i++)
	{
		var b = buf[i+off]&0xff;
		var h = b.toString(16);
		if(b < 16)
			h = "0" + h;
		strBytes += "%" + h;
	}
	strBytes = decodeURIComponent(strBytes);
	var c = self.document ? document.getElementById("console") : null;
	if(c)
		c.textContent += strBytes;
	else
		console.log(strBytes);
	return cb(len);
}

function cheerpOSAddStringFile(name, str)
{
	var mount = cheerpjGetFSMountForPath(name);
	var fileName = name.substr(mount.mountPoint.length-1);
	if(fileName.lastIndexOf("/") != 0)
		console.error(`CheerpOS: Directories are not supported ${name}`);
	else
		cheerpOSAddStringFileMain(mount, fileName, str);
}

function cheerpOSAddStringFileMain(mount, fileName, str)
{
	assert(mount instanceof CheerpJDataFolder);
	if(!(str instanceof Uint8Array))
	{
		var enc = new TextEncoder();
		str = enc.encode(str.toString());
	}
	mount.files[fileName] = {inodeId:mount.lastInode, data:str};
	mount.lastInode = mount.lastInode + 1|0;
	mount.clearCached(fileName);
}

function cheerpOSRemoveStringFile(name)
{
	var mount = cheerpjGetFSMountForPath(name);
	assert(mount instanceof CheerpJDataFolder);
	var fileName = name.substr(mount.mountPoint.length-1);
	delete mount.files[fileName];
	mount.clearCached(fileName);
}

function cheerpjAddStringFile(name, str)
{
	console.warn("Deprecated: Use cheerpOSAddStringFile");
	return cheerpOSAddStringFile(name, str);
}

function cheerpjRemoveStringFile(name)
{
	console.warn("Deprecated: Use cheerpjRemoveStringFile");
	return cheerpOSRemoveStringFile(name);
}

function cheerpjGetFSMountForPath(path)
{
	for(var i=0;i<cheerpjFSMounts.length;i++)
	{
		var mount = cheerpjFSMounts[i];
		if(path.startsWith(mount.mountPoint)){
			return mount;
		}
	}
	debugger
	return null;
}

function cheerpjNormalizePath(path)
{
	var parts = path.split('/');
	var newParts = []
	var partsUnderflow = 0;
	for(var i=0;i<parts.length;i++)
	{
		if(parts[i] == '.' || parts[i] == "")
			continue;
		else if(parts[i] == '..')
		{
			if(newParts.length)
				newParts.pop();
			else
				partsUnderflow++;
		}
		else
			newParts.push(parts[i]);
	}
	if(!path.startsWith('/') && partsUnderflow == 0)
	{
		// TODO: Support cwd
		newParts.unshift("files");
	}
	return "/" + newParts.join("/");
}

function cheerpOSStat(path_, fileRef, cb)
{
	var path = cheerpjNormalizePath(path_)
	var mount = cheerpjGetFSMountForPath(path + "/");
	cheerpOSStatMain(mount, path.substr(mount.mountPoint.length-1), fileRef, cb);
}

function cheerpOSStatMain(mount, fileName, fileRef, cb)
{
	fileRef.parent = mount;
	mount.mountOps.statAsync(mount, fileName, fileRef, cb);
}

function cheerpOSListFiles(path_, fileRef, cb)
{
	var path = cheerpjNormalizePath(path_)
	var mount = cheerpjGetFSMountForPath(path + "/");
	cheerpOSListFilesMain(mount, path.substr(mount.mountPoint.length-1), fileRef, cb);
}

function cheerpOSListFilesMain(mount, path_, fileRef, cb)
{
	// Some backends (like Web) do not implement list
	if(!mount.mountOps.listAsync){
		return;
	}
	mount.mountOps.listAsync(mount, path_, fileRef, cb);
}

function cheerpOSCreateDir(path_, fileRef, mode, cb)
{
	var path = cheerpjNormalizePath(path_)
	var mount = cheerpjGetFSMountForPath(path);
	cheerpOSCreateDirMain(mount, path.substr(mount.mountPoint.length-1), fileRef, mode, /*uid*/0, /*gid*/0, cb);
}

function cheerpOSCreateDirMain(mount, path_, fileRef, mode, uid, gid, cb)
{
	if(!mount.mountOps.createDirAsync){
		return cb(-1);
	}
	mount.mountOps.createDirAsync(mount, path_, fileRef, mode, uid, gid, cb);
}

function cheerpOSInitFds(fds)
{
	var conFileData = cheerpjCreateConsole(null, null, cheerpjDefaultConsoleWrite);
	var conFD = { fileData: conFileData, offset: 0, flags: 0 };
	fds[0] = conFD;
	fds[1] = conFD;
	fds[2] = conFD;
	conFileData.refCount+=3;
}

function cheerpOSCopyFds(dstFds, srcFds)
{
	for(var i=0;i<srcFds.length;i++)
	{
		var fdObj = srcFds[i];
		var fileData = fdObj.fileData;
		dstFds[i] = {fileData: fileData, offset: fdObj.offset, flags: fdObj.flags};
		fileData.refCount=fileData.refCount+1|0;
	}
}

function cheerpOSAllocateFd(fds, fileData)
{
	var newFD = {fileData: fileData, offset: 0, flags: 0};
	for(var i=0;i<fds.length;i++)
	{
		if(fds[i]===null)
		{
			fds[i] = newFD;
			return i;
		}
	}
	fds.push(newFD);
	return fds.length-1|0;
}

function cheerpOSDupFd(fds, oldFd, newFd, cb)
{
	cheerpOSClose(fds, newFd, function()
	{
		var fdObj = fds[oldFd];
		var fileData = fdObj.fileData;
		fds[newFd] = {fileData: fileData, offset: fdObj.offset, flags: fdObj.flags};
		fileData.refCount=fileData.refCount+1|0;
		cb(newFd);
	});
}

function cheerpjWakeOpenThreads (fileName, mount)
{
	var tmp = mount.cacheThreads[fileName];
	delete mount.cacheThreads[fileName];
	for(var i = 0; i < tmp.length; i++)
	{
		tmp[i]();
	}
}

function cheerpOSOpen(fds, path_, mode, cb)
{
	var path = cheerpjNormalizePath(path_)
	var mount = cheerpjGetFSMountForPath(path + "/");
	var fileName = path.substr(mount.mountPoint.length-1);
	if(mount.cacheThreads[fileName]){
		mount.cacheThreads[fileName].push(function()
		{
			cheerpOSOpen(fds, path_, mode, cb);
		});
		return;
	}
	return cheerpOSOpenMain(fileName, mount, fds, mode, /*uid*/0, /*gid*/0, cb);
}

function cheerpOSOpenMain(fileName, mount, fds, mode, uid, gid, cb)
{
	var fileData = mount.getCached(fileName);
	if(fileData === null)
	{
		mount.cacheThreads[fileName] = [];
		var fileRef = {};
		assert(mount.mountOps.makeFileData);
		mount.mountOps.makeFileData(mount, fileName, mode, uid, gid, function(fileData){
			if(fileData == null){
				cheerpjWakeOpenThreads(fileName, mount);
				return cb(-1);
			}
			mount.setCached(fileName, fileData);
			cheerpjWakeOpenThreads(fileName, mount);
			fileData.refCount=fileData.refCount+1|0;
			return cb(cheerpOSAllocateFd(fds, fileData));
		});
		return;
	}else if(mode != "r" && !fileData.parent.isSplit){
		// Make sure we don't allow opening for write a cached file that does not support it
		return cb(-1);
	}else if(mode == "w"){
		// Truncation of a cached file
		fileData.dirty = 1;
		fileData.chunks = [];
		fileData.length = 0;
	}
	fileData.refCount=fileData.refCount+1|0;
	return cb(cheerpOSAllocateFd(fds, fileData));
}

function cheerpOSRead(fds, fd, buf, off, len, cb)
{
	if(fd < 0){
		return cb(-1);
	}
	var fdObj = fds[fd];
	assert(fdObj);
	assert(fdObj.fileData.mount);
	assert(off + len <= buf.length);
	fdObj.fileData.mount.readAsync(fdObj.fileData, fdObj.offset, buf, off, len, fdObj.flags, function(ret){
		if(ret<=0){
			return cb(ret);
		}
		fdObj.offset = fdObj.offset + ret|0;
		return cb(ret);
	});
}

function cheerpOSWrite(fds, fd, buf, off, len, cb)
{
	if(fd < 0){
		return cb(-1);
	}
	var fdObj = fds[fd];
	assert(fdObj);
	assert(fdObj.fileData.mount);
	assert(off + len <= buf.length);
	fdObj.fileData.dirty = 1;
	fdObj.fileData.mount.writeAsync(fdObj.fileData, fdObj.offset, buf, off, len, function(ret){
		if(ret<=0){
			return cb(ret);
		}
		fdObj.offset = fdObj.offset + ret|0;
		return cb(ret);
	});
}

function cheerpOSRename(srcPath_, dstPath_, cb)
{
	var srcPath = cheerpjNormalizePath(srcPath_);
	var dstPath = cheerpjNormalizePath(dstPath_);
	var srcMount = cheerpjGetFSMountForPath(srcPath + "/");
	var dstMount = cheerpjGetFSMountForPath(dstPath + "/");
	// Only allowed on the same mount point
	if(srcMount !== dstMount){
		return cb(0);
	}
	var prefixLen = srcMount.mountPoint.length-1;
	var srcFileName = srcPath.substr(prefixLen);
	var dstFileName = dstPath.substr(prefixLen);
	return cheerpOSRenameMain(srcMount, srcFileName, dstFileName, cb);
}

function cheerpOSRenameMain(mount, srcPath_, dstPath_, cb)
{
	if(!mount.mountOps.renameAsync){
		return cb(0);
	}
	mount.mountOps.renameAsync(mount, srcPath_, dstPath_, function(ret){
		if(ret == 0){
			return cb(0);
		}
		mount.clearCached(srcPath_);
		mount.clearCached(dstPath_);
		return cb(1);
	});
}

function cheerpOSLink(srcPath_, dstPath_, cb)
{
	var srcPath = cheerpjNormalizePath(srcPath_);
	var dstPath = cheerpjNormalizePath(dstPath_);
	var srcMount = cheerpjGetFSMountForPath(srcPath + "/");
	var dstMount = cheerpjGetFSMountForPath(dstPath + "/");
	// Only allowed on the same mount point
	if(srcMount !== dstMount){
		return cb(0);
	}
	var prefixLen = srcMount.mountPoint.length-1;
	return cheerpOSLinkMain(srcMount, srcPath.substr(prefixLen), dstPath.substr(prefixLen), cb);
}

function cheerpOSLinkMain(mount, srcPath_, dstPath_, cb)
{
	if(!mount.mountOps.linkAsync){
		return cb(0);
	}
	mount.mountOps.linkAsync(mount, srcPath_, dstPath_, cb);
}

function cheerpOSUnlink(path_, cb)
{
	var path = cheerpjNormalizePath(path_, false);
	var mount = cheerpjGetFSMountForPath(path);
	var fileName = path.substr(mount.mountPoint.length-1);
	return cheerpOSUnlinkMain(mount, fileName, cb);
}

function cheerpOSUnlinkMain(mount, path_, cb)
{
	mount.clearCached(path_);
	if(!mount.mountOps.unlinkAsync)
		return cb(-1);
	mount.mountOps.unlinkAsync(mount, path_, cb);
}

var cjGraceTimeQueue = []

function cjGraceTimeExpire()
{
	// Only get the first item on the queue
	assert(cjGraceTimeQueue.length);
	var fileData = cjGraceTimeQueue.shift();
	if(fileData == null)
	{
		// The file lifetime has been bumped
		return;
	}
	if(fileData.refCount > 0)
	{
		// The file has been resurrected
		return;
	}
	// File dead, free the memory
	var mount = fileData.parent;
	for(var f in mount.fileCache)
	{
		if(fileData.inodeId == mount.fileCache[f])
			mount.clearCached(f);
	}
	assert(fileData.cacheRefCount == 0);
}

function cheerpOSClose(fds, fd, cb)
{
	if(fd < 0 || fd >= fds.length){
		cb();
		return;
	}
	var fdObj = fds[fd];
	if(fdObj === null)
	{
		cb();
		return;
	}
	var fileData = fdObj.fileData;
	// No fileData may be there for FDs which are not files
	if(fileData)
	{
		fileData.refCount = fileData.refCount-1|0;
		if(fileData.refCount===0 && fileData.parent != null)
		{
			if(fileData.dirty)
			{
				for(var p in cosFileWatchPrefixes)
				{
					assert(fileData.path.startsWith("/"));
					var path = fileData.parent.mountPoint + fileData.path.substr(1);
					if(path === p || path.startsWith(p + "/"))
						cosFileWatchPrefixes[p](path);
				}
			}
			// Commit the data immediately to ensure persistence
			if(fileData.mount.close)
			{
				fileData.mount.close(fileData, cb);
				// Reset the callback to not call it again at the end of the function
				cb = null;
			}
			// Make sure there is only one entry in the queue for each file,
			// if there is an existing one, null it out
			var prevIdx = cjGraceTimeQueue.indexOf(fileData);
			if(prevIdx >= 0)
				cjGraceTimeQueue[prevIdx] = null;
			// Put the cached file in the queue, and give it a 10 sec grace time before freeing the memory
			cjGraceTimeQueue.push(fileData);
			setTimeout(cjGraceTimeExpire, 10000);
		}
	}
	fds[fd] = null;
	if(cb)
		cb();
}

function httpSocketReadAsync(fileData, fileOffset, buf, off, len, flags, cb)
{
	assert(len != 0);
	let cnt = off;
	
	if(fileData.currData === null){
		return cb(0);
	}
	return httpSocketReadLoop(fileData, fileOffset, buf, off, len, flags, cnt, cb);
}

function httpSocketReadLoop(fileData, fileOffset, buf, off, len, flags, cnt, cb)
{
	if(buf.length == 0)
	{
		// Defend against buffer invalidation
		return cb(/*EFAULT*/-14);
	}
	while(1){
		if(cnt === off+len){
			break;
		}
		if(!fileData.currData || fileData.currPos >= fileData.currData.length){
			while(1){
				if(fileData.chunks.length !== 0){
					break;
				}
				if(cnt>off)
					return cb(cnt-off);
				fileData.blockedThread = function(){
					return httpSocketReadLoop(fileData, fileOffset, buf, off, len, flags, cnt, cb);
				};
				return;
			}
			fileData.currData = fileData.chunks.shift();
			fileData.currPos = 0;
			if(!(fileData.currData instanceof Uint8Array)){
				if(fileData.currData == 'cjRemoteError')
				{
					fileData.currData = null;
					return cb(cnt-off);
				}
				else 
				{
					return cb(cnt-off);
				}
			}
		}

		buf[cnt] = fileData.currData[fileData.currPos];
		fileData.currPos = fileData.currPos + 1 | 0;
		cnt++;
	}
	return cb(cnt-off);
}

function cheerpNetReadFetchOS(reader,fileData)
{
	reader.read()
		.then(function(result){
			console.log(result);
			if(result.done)
			{
				fileData.chunks.push(null);
			}
			else
			{
				if(result.value instanceof ArrayBuffer)
				{
					fileData.chunks.push(new Uint8Array(result.value));
				}
				else
				{
					fileData.chunks.push(result.value);
				}
			}
			if(fileData.blockedThread)
			{
				var blockedThread=fileData.blockedThread;
				fileData.blockedThread=null;
				blockedThread();
			}
			if(!result.done)
			{
				cheerpNetReadFetchOS(reader, fileData);
			}
		});
}

function httpSocketWriteAsync(fileData, fileOffset, buf, off, len, cb)
{
	let i = 0;
	let cnt = 0;
	if(fileData.currRequest.headersNewLines < 1)
	{
		/*Consume bytes*/
		for(i = off; i < off+len && fileData.currRequest.headersNewLines < 1; i++)
		{
			cnt++;
			let currChar = String.fromCharCode(buf[i]);
			if(currChar === '\n'){ /* Parse */
				let line = fileData.currRequest.currString;
				if(line.startsWith('\r'))
				{
					fileData.currRequest.headersNewLines++;
				}
				else 
				{
					if(fileData.currRequest.nLines === 0 && line.indexOf("HTTP/1.1") !== -1)
					{
						let firstLine = line.split(" ");
						fileData.currRequest.method = firstLine[0];
						fileData.currRequest.url = firstLine[1];
					}
					else if(!line.toLowerCase().startsWith("cookie")) 
					{
						let key = line.substr(0,line.indexOf(':'));
						let value = line.substr(line.indexOf(':')+2);
						if(key.toLowerCase() === "host")
						{
							if(window.location.protocol == "https:")
							{
								fileData.currRequest.url = "https://" + value + fileData.currRequest.url;
							}
							else 
							{
								fileData.currRequest.url = "http://" + value + fileData.currRequest.url;
							}
						}
						else
						{
							fileData.currRequest.headers.append(key, value);
						}
					}
				}
				fileData.currRequest.currString = "";
				fileData.currRequest.nLines++;
			}else
			{
				fileData.currRequest.currString += currChar;
			}
			fileData.currRequest.prevChar = currChar;
		}
		off = off + i - 1;
	}
	if(fileData.currRequest.headersNewLines >= 1)
	{
		if(fileData.currRequest.method === "POST")
		{
			if(!fileData.currRequest.data)
			{
				fileData.currRequest.data = new Uint8Array(parseInt(fileData.currRequest.headers.get("Content-Length")));
			}
			fileData.currRequest.data.set(buf.subarray(off, len), fileData.currRequest.dataIdx);
			fileData.currRequest.dataIdx += len-off+1;
			cnt += len-off;
		}
		if((fileData.currRequest.method === "POST" && fileData.currRequest.dataIdx < fileData.currRequest.headers.get("Content-Length"))
			|| (fileData.currRequest.method !== "POST" && fileData.currRequest.headersNewLines < 1))
		{
			return cb(cnt);
		}
		let dict = {credential: 'include', method: fileData.currRequest.method, headers: fileData.currRequest.headers};
		if(fileData.currRequest.data)
		{
			dict.body = fileData.currRequest.data;
		}
		fetch(fileData.currRequest.url, dict)
			.then(function(response)
				{
					let cjStr2AB = function(str) {
						let bufView = new Uint8Array(str.length);
						for (var i=0; i < str.length; i++) {
							bufView[i] = str.charCodeAt(i);
						}
						return bufView;
					};
					if(response.ok)
					{
						let responseStatus = "HTTP/1.1 " + response.status + " " + response.statusText;
						let responseHeaders = response.headers.entries();
						fileData.chunks.push(cjStr2AB(responseStatus+'\r\n'));

						let entry = responseHeaders.next();
						while (!entry.done)
						{
							if(entry.value[0].toLowerCase() === "transfer-encoding")
							{
								entry = responseHeaders.next();
								continue;
							}
							let he = entry.value[0] + ': ' + entry.value[1] + '\r\n';
							fileData.chunks.push(cjStr2AB(he));
							entry = responseHeaders.next();
						}
						fileData.chunks.push(cjStr2AB("\r\n"));

						const reader = response.body.getReader();
						cheerpNetReadFetchOS(reader, fileData);
					}else
					{
						fileData.chunks.push('cjRemoteError');
					}
				})
			.catch(function(err)
				{
					fileData.chunks.push('cjRemoteError');
				});
	}
	else if(fileData.currRequest.currString.length >= 4)
	{
		// Not even 1 line available, can this even be HTTP?
		if(!fileData.currRequest.currString.startsWith("HTTP")) {
			fileData.chunks.push('cjRemoteError');
			return cb(-1);
		}
	}
	return cb(cnt);
}

function httpSocketConnect(fileData, ipAddr, ipPort)
{
	// Pretend that the connection succeeds, we'll try to parse an HTTP session in the write handler.
	return 0;
}

async function tcpSocketReadAsync(fileData, fileOffset, buf, off, len, flags, cb)
{
	assert(len != 0);
	while(true)
	{
		var ret = fileData.data.recv(buf, off, len);
		if (ret != cjTailscaleSocket.Eagain)
			return cb(ret);
		await fileData.net.canRead(fileData);
	}
}

function tcpSocketReadAvailable(fileData)
{
	return fileData.data.readAvailable();
}

function tcpSocketListen(fileData)
{
	var ret = fileData.data.listen();
	return ret == 0? 0 : -1;
}

function tcpSocketConnect(fileData, ipAddr, ipPort)
{
	fileData.data.bind(0);
	var ret = fileData.data.connect(cjTailscaleParseIp(ipAddr), ipPort);
	return ret == 0? 0 : -1;
}

function tcpSocketAccept(fileData)
{
	return fileData.data.accept();
}

function socketBind(fileData, port)
{
	return fileData.data.bind(port);
}

function tcpSocketShutdown(fileData, how)
{
	switch(how)
	{
		case 0:
			ret = fileData.data.shutdownRx();
			break;
		case 1:
			ret = fileData.data.shutdownTx();
			break;
		case 2:
			var ret1 = fileData.data.shutdownRx();
			var ret2 = fileData.data.shutdownTx();
			ret = ret1 != 0? ret1 : ret2;
			break;
	}
	return ret;
}

async function tcpSocketWriteAsync(fileData, fileOffset, buf, off, len, cb)
{
	while(true)
	{
		var ret = fileData.data.send(buf, off, len);
		if (ret != cjTailscaleSocket.Eagain)
			return cb(ret);
		await fileData.net.canWrite(fileData);
	}
}

function socketRecv(fileData, fileOffset, buf, off, len, addrInfo)
{
	return fileData.data.recv(fileOffset, buf, off, len, addrInfo);
}

function socketSendTo(fileData, buf, addr, port)
{
	return fileData.data.sendto(buf, cjTailscaleParseIp(addr), port);
}

function socketClose(fileData, cb)
{
	if (fileData.data)
	{
		fileData.data.close();
		fileData.data.delete();
		fileData.data = null;
	}
	cb();
}

async function socketCanRead(fileData)
{
	if (!fileData.incomingPromise)
	{
		fileData.incomingPromise = fileData.data.waitIncoming().then(ret => {
			fileData.incomingPromise = null;
			return ret;
		});
	}
	var ret = await fileData.incomingPromise;
	return ret;
}

async function socketCanWrite(fileData)
{
	if (!fileData.outgoingPromise)
	{
		fileData.outgoingPromise = fileData.data.waitOutgoing().then(ret => {
			fileData.outgoingPromise = null;
			return ret;
		});
	}
	var ret = await fileData.outgoingPromise;
	return ret;
}

function internalSocketReadAsync(fileData, fileOffset, buf, off, len, flags, cb)
{
	if(buf.length == 0)
	{
		// Defend against buffer invalidation
		return cb(/*EFAULT*/-14);
	}
	if(fileData.chunks.length == 0)
	{
		if(fileData.flags & CheerpJFileData.O_NONBLOCK)
			return cb(/*EAGAIN*/-11);
		fileData.blockedThread = function()
		{
			return internalSocketReadAsync(fileData, fileOffset, buf, off, len, flags, cb);
		};
		return;
	}
	// TODO: Read more if possible
	var first = fileData.chunks[0];
	if(first.length < len)
		len = first.length;
	for(var i=0;i<len;i++)
		buf[off + i] = first[i];
	if(len == first.length)
		fileData.chunks.shift();
	else
		fileData.chunks[0] = first.subarray(len);
	return cb(len);
}

function internalSocketWriteAsync(fileData, fileOffset, buf, off, len, cb)
{
	if(len > 0)
	{
		var socket = fileData.data;
		var data = new Uint8Array(buf.subarray(off, off + len));
		socket.peerFileData.chunks.push(data);
		if (socket.peerFileData.blockedThread)
		{
			var thread = socket.peerFileData.blockedThread;
			socket.peerFileData.blockedThread = null;
			thread();
		}
	}
	return cb(len);
}

async function internalSocketCanRead(fileData)
{
	if(fileData.chunks.length != 0 || fileData.data.acceptQueue.length != 0)
	{
		return 0;
	}
	let { promise, resolve, reject } = Promise.withResolvers();
	fileData.blockedThread = resolve;
	await promise;
	return 0;
}

function internalSocketClose(fileData, cb)
{
	debugger;
}

function internalSocketConnect(fileData, addr, port)
{
	var peer = InternalSocket.boundSockets[port];
	if(peer && peer.data.listening)
	{
		var newSocket = new InternalSocket();
		newSocket.peerFileData = fileData;
		peer.data.acceptQueue.push({socket:newSocket, addr:addr, port:port});
		if (peer.blockedThread)
		{
			var thread = peer.blockedThread;
			peer.blockedThread = null;
			thread();
		}
		return 0;
	}
	return -1;
}
function internalSocketAccept(fileData)
{
	if (fileData.data.acceptQueue.length == 0)
		return null;
	var s = fileData.data.acceptQueue.shift();
	return s;
}

function internalSocketBind(fileData, port)
{
	if(port == 0)
	{
		// Used to assign a port, nothing to do
		return 0;
	}
	InternalSocket.boundSockets[port] = fileData;
	return 0;
}

function internalSocketListen(fileData)
{
	fileData.data.listening = true;
}

function InternalSocket()
{
	this.peerFileData = null;
	this.listening = false;
	this.acceptQueue = [];
}

InternalSocket.boundSockets = {};

function netOpsUnimplemented()
{
	debugger;
}
function netOpsAlwaysReady()
{
	return Promise.resolve(0);
}
var TcpSocketInodeOps = { readAsync: tcpSocketReadAsync, writeAsync: tcpSocketWriteAsync, close: socketClose };
var TcpSocketNetOps = { canWrite: socketCanWrite, canRead: socketCanRead, readAvailable: tcpSocketReadAvailable, recv: netOpsUnimplemented, sendto: netOpsUnimplemented, connect: tcpSocketConnect, listen: tcpSocketListen, accept: tcpSocketAccept, bind: socketBind, shutdown: tcpSocketShutdown };

var UdpSocketInodeOps = { readAsync: netOpsUnimplemented, writeAsync: netOpsUnimplemented, close: socketClose };
var UdpSocketNetOps = { canWrite: netOpsAlwaysReady, canRead: socketCanRead, readAvailable: netOpsUnimplemented, recv: socketRecv, sendto: socketSendTo, connect: netOpsUnimplemented, listen: netOpsUnimplemented, accept: netOpsUnimplemented, bind: socketBind, shutdown: null };


var HttpSocketInodeOps = { readAsync: httpSocketReadAsync, writeAsync: httpSocketWriteAsync, close: null };
var HttpSocketNetOps = { canWrite: netOpsAlwaysReady, canRead: netOpsUnimplemented, readAvailable: null, recv: netOpsUnimplemented, sendto: netOpsUnimplemented, connect: httpSocketConnect, listen: netOpsUnimplemented, accept: netOpsUnimplemented, bind: netOpsUnimplemented, shutdown: netOpsUnimplemented };

var InternalSocketInodeOps = { readAsync: internalSocketReadAsync, writeAsync: internalSocketWriteAsync, close: internalSocketClose };
var InternalSocketNetOps = { canWrite: netOpsAlwaysReady, canRead: internalSocketCanRead, readAvailable: null, recv: netOpsUnimplemented, sendto: netOpsUnimplemented, connect: internalSocketConnect, listen: internalSocketListen, accept: internalSocketAccept, bind: internalSocketBind, shutdown: netOpsUnimplemented };

function cheerpOSSocketOpenInternal(fds, mode, socket)
{
	var fileData = new CheerpJFileData(null, null, 0, 0, 0, 0, 0, 0);
	// Internal sockets are supported unconditionally
	if(mode == 2)
	{
		fileData.mount = InternalSocketInodeOps;
		fileData.net = InternalSocketNetOps;
		fileData.data = socket? socket : new InternalSocket();
		if (fileData.data.peerFileData)
		{
			var peer = fileData.data.peerFileData;
			peer.data.peerFileData = fileData;
		}
	}
	else
	{
		if(!cjEnableTailscale)
		{
			if (mode != 0)
				return -1;
			fileData.mount = HttpSocketInodeOps;
			fileData.net = HttpSocketNetOps;
			fileData.currRequest = {
				headers: new Headers(),
				url: "",
				method: "",
				currString: "",
				prevChar: "",
				firstFetchCall: true,
				headersNewLines: 0,
				dataIdx: 0,
				nLines: 0,
			};
		}
		else
		{
			if (mode == 1)
			{
				fileData.mount = UdpSocketInodeOps;
				fileData.net = UdpSocketNetOps;
				fileData.data = socket? socket : new cjTailscaleUdpSocket();
			}
			else
			{
				fileData.mount = TcpSocketInodeOps;
				fileData.net = TcpSocketNetOps;
				fileData.data = socket? socket : new cjTailscaleSocket();
			}
		}
	}

	fileData.chunks = [];
	fileData.currData = undefined;
	fileData.currPos = 0;
	fileData.refCount=fileData.refCount+1|0;
	return cheerpOSAllocateFd(fds, fileData);
}
function cheerpOSSocketOpen(fds, mode, cb)
{
	return cb(cheerpOSSocketOpenInternal(fds, mode, undefined));
}

function cheerpOSSocketShutdown(fds, fd, how, cb)
{
	if(fd < 0)
		return cb(-1);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(-1);
	var fileData=fileDesc.fileData;
	var ret = 0;
	if (!fileData.net || !fileData.net.shutdown)
		return cb(-1);
	return cb(fileData.net.shutdown(fileData, how));
}

async function cheerpOSPoll(fds, fd, timeout, cb)
{
	if(fd < 0)
		return cb(-1);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(-1);
	var fileData = fileDesc.fileData;
	var canReadPromise;
	if (fileData.net)
		canReadPromise = fileData.net.canRead(fileData);
	else
		canReadPromise = Promise.resolve(0);
	var promises = [];
	var timeoutId = 0;
	if(timeout >= 0)
	{
		const timoutPromise = new Promise(resolve => {
			timeoutId = setTimeout(resolve, timeout);
		});
		promises.push(timoutPromise.then(() => {
			return 0;
		}));
	}
	promises.push(canReadPromise.then(() => {
		if (timeoutId)
			clearTimeout(timeoutId);
		fileData.incomingPromise = null;
		return 1;
	}));
	return cb(await Promise.race(promises))
}

function cheerpOSReadAvailable(fds, fd, cb)
{
	if(fd < 0)
		return cb(-1);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(-1);
	var tot = 0;
	var data = fileDesc.fileData;
	if (data.net && data.net.readAvailable)
	{
		return cb(data.net.readAvailable(data));
	}
	for(var i = 0; i < data.chunks.length; i++)
	{
		if(data.chunks[i])
			tot += data.chunks[i].length;
	}
	if(data.currData)
	{
		tot += data.currData.length - data.currPos;
	}
	return cb(tot);
}

async function cheerpOSSocketConnect(fds, fd, ipAddr, ipPort, cb)
{
	if(fd < 0)
		return cb(-1);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(-1);
	var fileData=fileDesc.fileData;
	if (!fileData.net)
		return cb(-1);
	var ret = fileData.net.connect(fileData, ipAddr, ipPort);
	if (ret != 0)
		return cb(-1);
	var ret = await fileData.net.canWrite(fileData);
	return cb(ret);
}

function cheerpOSSocketListen(fds, fd, backlog, cb)
{
	if(fd < 0)
		return cb(-1);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(-1);
	var fileData=fileDesc.fileData;
	if(!fileData.net)
		return cb(-1);
	return cb(fileData.net.listen(fileData));
}

async function cheerpOSSocketAccept(fds, fd, cb)
{
	if(fd < 0)
		return cb(-1);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(-1);
	var fileData=fileDesc.fileData;
	if(!fileData.net)
		return cb(-1);
	var newSocket = fileData.net.accept(fileData);
	while (newSocket == null) {
		await fileData.net.canRead(fileData);
		newSocket = fileData.net.accept(fileData);
	}
	var newFd = cheerpOSSocketOpenInternal(fds, (newSocket.socket instanceof InternalSocket) ? 2 : 0, newSocket.socket);
	return cb({newFd,addr:newSocket.addr,port:newSocket.port});
}

function cheerpOSSocketBind(fds, fd, localPort, cb)
{
	if(fd < 0)
		return cb(-1);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(-1);
	var fileData=fileDesc.fileData;
	if(!fileData.net)
		return cb(-1);
	return cb(fileData.net.bind(fileData, localPort));
}

async function cheerpOSSocketSendTo(fds, fd, data, ipAddr, ipPort, cb)
{
	if(fd < 0)
		return cb(-1);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(-1);
	var fileData=fileDesc.fileData;
	if(!fileData.net)
		return cb(-1);
	var ret = fileData.net.sendto(fileData, data, ipAddr, ipPort);
	while(ret == cjTailscaleUdpSocket.Eagain) {
		ret = await fileData.net.canWrite(fileData);
		if (ret < 0)
			return cb(-1);
		ret = fileData.data.sendto(fileData, data, ipAddr, ipPort);
	}
	return cb(ret);
}
async function cheerpOSSocketRecv(fds, fd, buf, off, bufLen, cb)
{
	var ret = {length:-1,addr:0,port:0};
	if(fd < 0)
		return cb(ret);
	var fileDesc=fds[fd];
	if(fileDesc == null)
		return cb(ret);
	var fileData=fileDesc.fileData;
	if(!fileData.net)
		return cb(ret);
	ret.length = fileData.net.recv(fileData, buf, off, bufLen, ret);
	while(ret.length == cjTailscaleUdpSocket.Eagain)
	{
		ret.length = await fileData.net.canRead(fileData);
		if (ret.length < 0)
			return cb(ret);
		ret.length = fileData.net.recv(fileData, buf, off, bufLen, ret);
	}
	return cb(ret);
}

function cheerpOSResolveHost(hostName, cb)
{
	if(hostName=='cheerpjhost')
		hostName = "127.0.0.1";
	if(!cjEnableTailscale)
		return cb((192<<24)|(168<<16)|(1<<8)|1);

	cjTailscaleResolve(hostName).then((ip) =>
	{
		var ip0 = ip & 0xff;
		var ip1 = (ip>>8) & 0xff;
		var ip2 = (ip>>16) & 0xff;
		var ip3 = (ip>>24) & 0xff;
		var javaIp = (ip0<<24) | (ip1<<16) | (ip2<<8) | ip3;
		console.log("host ",hostName, " is ",ip0,ip1,ip2,ip3)
		cb(javaIp);
	});
}

var cheerpOSMimeMap = { htm: "text/html", html: "text/html", jpeg: "image/jpeg", jpg: "image/jpeg", js: "text/javascript", pdf: "application/pdf", png: "image/png", rtf: "application/rtf", xml: "text/xml" };

function cheerpOSGetFileBlobFd(fds, fd, path, cb)
{
	if(fd < 0){
		return cb(null);
	}
	// Compute file length
	var fileRef = {};
	cheerpOSFStat(fds, fd, fileRef, function()
	{
		var len = fileRef.fileLength;
		var buf = new Uint8Array(len);
		// Read the whole file
		cheerpOSRead(fds, fd, buf, 0, len, function(r)
		{
			assert(len == r);
			var mimeType = null;
			var extIndex = path.lastIndexOf(".");
			if(extIndex >= 0){
				var ext = path.substr(extIndex+1);
				var m = cheerpOSMimeMap[ext];
				if(m)
					mimeType = m;
			}
			cheerpOSClose(fds, fd, function(){});
			var blob=new Blob([buf], {type: mimeType});
			return cb(blob);
		});
	});
}

function cheerpOSGetFileBlob(fds, path, cb)
{
	cheerpOSOpen(fds, path, "r", function(fd)
	{
		return cheerpOSGetFileBlobFd(fds, fd, path, cb);
	});
}

function cheerpOSWatchFiles(prefix, cb)
{
	var prefix = cheerpjNormalizePath(prefix)
	if(cb == null)
		delete cosFileWatchPrefixes[prefix];
	else
		cosFileWatchPrefixes[prefix] = cb;
}

function cheerpOSSeek(fds, fd, offset, whence, cb)
{
	if(fd < 0)
	{
		return cb(-1);
	}
	var fdObj = fds[fd];
	assert(fdObj);
	var newOffset = offset;
	if(whence == 0 /*SEEK_SET*/)
	{
		// Nothing to do
	}
	else if(whence == 2 /*SEEK_END*/)
	{
		assert(offset == 0);
		var fileLength = fdObj.fileData.length;
		newOffset = fileLength;
	}
	else
	{
		assert(whence == 1 /*SEEK_CUR*/);
		var fileOffset = fdObj.offset;
		newOffset = fileOffset + offset;
	}
	fdObj.offset = newOffset;
	return cb(newOffset);
}

function cheerpOSFStat(fds, fd, fileRef, cb)
{
	var fileData = fds[fd].fileData;
	assert(fileData);
	fileRef.fileLength = fileData.length;
	fileRef.permType = fileData.permType;
	fileRef.inodeId = fileData.inodeId;
	fileRef.lastModified = fileData.lastModified;
	return cb();
}

function cheerpOSGetFullPath(fds, fd, cb)
{
	var fileData = fds[fd].fileData;
	assert(fileData);
	fullPath = fileData.parent.mountPoint + fileData.path;
	return cb(fullPath);
}

function cheerpOSGetFlags(fds, fd, cb)
{
	if(fd < 0 || fd >= fds.length)
	{
		return cb(-1);
	}
	var fdObj = fds[fd];
	if(fdObj === null)
	{
		return cb(-1);
	}
	var fileData = fdObj.fileData;
	return cb(fileData.flags);
}

function cheerpOSSetFlags(fds, fd, value, cb)
{
	if(fd < 0 || fd >= fds.length)
	{
		return cb(-1);
	}
	var fdObj = fds[fd];
	if(fdObj === null)
	{
		return cb(-1);
	}
	var fileData = fdObj.fileData;
	fileData.flags = value;
	return cb(0);
}

function assert(cond)
{
	if(!cond)
		debugger
}
