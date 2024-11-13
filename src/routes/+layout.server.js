import { parse } from 'node-html-parser';
import { read } from '$app/server';

var posts = [
	"https://labs.leaningtech.com/blog/webvm-20",
	"https://labs.leaningtech.com/blog/join-the-webvm-hackathon",
	"https://labs.leaningtech.com/blog/mini-webvm-your-linux-box-from-dockerfile-via-wasm",
	"https://labs.leaningtech.com/blog/webvm-virtual-machine-with-networking-via-tailscale",
	"https://labs.leaningtech.com/blog/webvm-server-less-x86-virtual-machines-in-the-browser",
];

async function getPostData(u)
{
	var ret = { title: null, image: null, url: u };
	var response = await fetch(u);
	var str = await response.text();
	var root = parse(str);
	var tags = root.getElementsByTagName("meta");
	for(var i=0;i<tags.length;i++)
	{
		var metaName = tags[i].getAttribute("property");
		var metaContent = tags[i].getAttribute("content");
		switch(metaName)
		{
			case "og:title":
				ret.title = metaContent;
				break;
			case "og:image":
				ret.image = metaContent;
				break;
		}
	}
	return ret;
}

export async function load()
{
	var ret = [];
	for(var i=0;i<posts.length;i++)
	{
		ret.push(await getPostData(posts[i]));
	}
	return { posts: ret };
}
