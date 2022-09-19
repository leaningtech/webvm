"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function fetchBuffer(p){
	return (typeof fetch==='function')?
	fetch(p).then(r=>r.arrayBuffer()):
	new Promise((y,n)=>{
		import('fs').then(r=>r.readFile(p,(e,d)=>{
			if(e)n(e);
			else y(d);
		}));
	});
}
function ___cxx_global_var_init$p3(){
	__ZN7IpStackL7chanMapE=_cheerpCreate_ZN6client4TMapIiPNS_14MessageChannelEEC2Ev();
}
function ___cxx_global_var_init$p4(){
	__ZN7IpStackL11listenerMapE=_cheerpCreate_ZN6client4TMapIiPNS_13EventListenerEEC2Ev();
}
function _cheerpCreate_ZN6client4TMapIiPNS_13EventListenerEEC2Ev(){
	return new Map();
}
function _cheerpCreate_ZN6client4TMapIiPNS_14MessageChannelEEC2Ev(){
	return new Map();
}
function __Z13createPromisev(Lagg$presult){
	var LretConstructor=null,LretConstructor7=null;
	LretConstructor=_cheerpCreate_ZN6client9CheerpRefINS_13EventListenerEEC2Ev();
	LretConstructor7=_cheerpCreate_ZN6client9CheerpRefINS_13EventListenerEEC2Ev();
	Lagg$presult.a0=new Promise(function(__f,__r){LretConstructor.inner=__f;LretConstructor7.inner=__r;});;
	Lagg$presult.a1=LretConstructor.inner;
	Lagg$presult.a2=LretConstructor7.inner;
}
function _cheerpCreate_ZN6client9CheerpRefINS_13EventListenerEEC2Ev(){
	return new Object();
}
function _sys_now(){
	return ~~ +performance.now()|0;
}
function __Z9output_jsPhi(Lbuf,Mbuf,Llen){
	var LretConstructor=null;
	LretConstructor=new Uint8Array((+(Llen|0)));
	LretConstructor.set(__ZN6cheerp14MakeTypedArrayIhN6client10Uint8ArrayEEEPT0_PKT_j(Lbuf,Mbuf,Llen));
	__ZL9output_cb(LretConstructor);
}
function __ZN6cheerp14MakeTypedArrayIhN6client10Uint8ArrayEEEPT0_PKT_j(Lptr,Mptr,Lsize){
	var tmp0=0,tmp1=null;
	tmp0=Mptr;
	tmp1=Lptr;
	tmp1=tmp1;
	if((Lsize|0)!==0){
		if((tmp0|0)===0)if( +tmp1.length===(+(Lsize>>>0)))return tmp1;
		return tmp1.subarray((+(tmp0>>>0)),(+(tmp0+Lsize>>>0)));
	}
	if((tmp0|0)===0)return tmp1;
	return tmp1.subarray((+(tmp0>>>0)));
}
function __Z14start_timeoutsv(){
	+setInterval(__ZN6cheerp8CallbackIZ14start_timeoutsvE3$_0EEPN6client13EventListenerEOT_(),100);
}
function __ZN6cheerp8CallbackIZ14start_timeoutsvE3$_0EEPN6client13EventListenerEOT_(){
	var Lref$ptmp=null,Lcall1=null;
	Lref$ptmp={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZ14start_timeoutsvE3$_0EEDTclsr13ClosureHelperIT_DTadsr3std16remove_referenceIS2_E4typeEonclEEE12make_closureclgssr6cheerpE7forwardIS2_Efp_EEEOS2_(Lref$ptmp);
	Lcall1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(Lref$ptmp);
	__ZN6cheerp7ClosureIFvvEED2Ev(Lref$ptmp);
	return Lcall1;
}
function __ZN6cheerp12make_closureIZ14start_timeoutsvE3$_0EEDTclsr13ClosureHelperIT_DTadsr3std16remove_referenceIS2_E4typeEonclEEE12make_closureclgssr6cheerpE7forwardIS2_Efp_EEEOS2_(Lagg$presult){
	__ZN6cheerp13ClosureHelperIZ14start_timeoutsvE3$_0MS1_KFvvEE12make_closureEOS1_(Lagg$presult);
}
function __ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(Lthis){
	var tmp0=null;
	if(Lthis.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Lthis.a1;
		tmp0[0].a1=Lthis.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvvEE14deleter_helperEPNS2_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Lthis.a0,tmp0);
		Lthis.a1=null;
	}
	return Lthis.a0;
}
function __ZN6cheerp7ClosureIFvvEED2Ev(Lthis){
	var tmp0=null;
	tmp0=Lthis.a1;
	if(tmp0!==null)tmp0(Lthis.a2);
}
function __ZN6cheerp7ClosureIFvvEE14deleter_helperEPNS2_13DeleterHelperE(Lh){
	Lh.a0(Lh.a1);
}
function __ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Lr,Ld){
	if(__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE===null)__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE=new Map();
	__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE.set(Lr,Ld);
}
function __ZN6cheerp13ClosureHelperIZ14start_timeoutsvE3$_0MS1_KFvvEE12make_closureEOS1_(Lagg$presult){
	__ZN6cheerp7ClosureIFvvEEC2IZ14start_timeoutsvE3$_0EET_PNSt9enable_ifIXsr3std14is_convertibleIS5_PS1_EE5valueEvE4typeE(Lagg$presult);
}
function __ZN6cheerp7ClosureIFvvEEC2IZ14start_timeoutsvE3$_0EET_PNSt9enable_ifIXsr3std14is_convertibleIS5_PS1_EE5valueEvE4typeE(Lthis){
	var tmp0=null;
	tmp0=__ZZ14start_timeoutsvEN3$_08__invokeEv;
	Lthis.a0=tmp0;
	Lthis.a1=null;
	Lthis.a2=null;
}
function __ZZ14start_timeoutsvEN3$_08__invokeEv(){
	__ZZ14start_timeoutsvENK3$_0clEv();
}
function __ZZ14start_timeoutsvENK3$_0clEv(){
	_sys_check_timeouts();
}
function __ZN7IpStack4initEPN6client9UpOptionsE(Lopts){
	__Z4initv();
	__Z16udpecho_raw_initv();
	__Z16tcpecho_raw_initv();
}
function __ZN7IpStack2upEPN6client9UpOptionsE(Lopts){
	var LsavedStack=null,tmp1=null,Lip=0,LipMapStr=0,Lcall1=null,Lcall2=null,Lref$ptmp7=0,Lref$ptmp8=0,Lcall6=null,Li$p03=0,Lcall5=null,Lcall5o=0;
	LsavedStack=___getStackPtr();
	tmp1=-80+LsavedStack|0;
	___setStackPtr(tmp1);
	Lip=64+tmp1|0;
	__ZNK6client6StringcvSsEv(Lip,Lopts.localIp);
	LipMapStr=40+tmp1|0;
	__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEEC2Ev(LipMapStr);
	Lcall1=Lopts.ipMap;
	if(Lcall1!==undefined){
		Lcall2=Object.keys(Lcall1);
		if(((Lcall2.length)|0)>0){
			Lref$ptmp7=24+tmp1|0;
			Lref$ptmp8=8+tmp1|0;
			Li$p03=0;
			while(1){
				Lcall5=__ZN6client5ArrayixEi(Lcall2,Li$p03);
				Lcall5o=oSlot;
				Lcall5=Lcall5[Lcall5o];
				Lcall6=Lcall1[Lcall5];
				__ZNK6client6StringcvSsEv(Lref$ptmp7,Lcall5);
				__ZNK6client6StringcvSsEv(Lref$ptmp8,Lcall6);
				__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEE7emplaceIJSsSsEEES4_ISt19__hash_map_iteratorISt15__hash_iteratorIPSt11__hash_nodeISt17__hash_value_typeISsSsEPvEEEbEDpOT_(tmp1|0,LipMapStr,Lref$ptmp7,Lref$ptmp8);
				__ZNSsD2Ev(Lref$ptmp8);
				__ZNSsD2Ev(Lref$ptmp7);
				Li$p03=Li$p03+1|0;
				if((Li$p03|0)<((Lcall2.length)|0))continue;
				break;
			}
		}
	}
	__Z2upRKSsRKSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIS_SsEEE(Lip,LipMapStr);
	__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEED2Ev(LipMapStr);
	__ZNSsD2Ev(Lip);
	___setStackPtr(LsavedStack);
}
function __ZNK6client6StringcvSsEv(Lagg$presult,Lthis){
	var Lcall2=null,Lcall2o=0,Li$p03=0;
	__ZNSsC2Ev(Lagg$presult|0);
	__ZNSs6resizeEj(Lagg$presult|0,Lthis.length);
	Lcall2=HEAP8;
	Lcall2o=__ZNSsixEj_icf(Lagg$presult|0)|0;
	if(((Lthis.length)|0)>0){
		Li$p03=0;
		while(1){
			Lcall2[Lcall2o+Li$p03|0]=Lthis.charCodeAt(Li$p03);
			Li$p03=Li$p03+1|0;
			if((Li$p03|0)<((Lthis.length)|0))continue;
			break;
		}
	}
}
function __ZN6client5ArrayixEi(Lthis,Lindex){
	oSlot=0+Lindex|0;
	return Lthis;
}
function __ZN7IpStack4downEv(){
	__Z4downv();
}
function __ZN7IpStack5inputEPN6client10Uint8ArrayE(Lpkt){
	var LsavedStack=null,Ldata=0,Lcall1=null,Lcall1o=0,Lconv=0;
	LsavedStack=___getStackPtr();
	Lcall1=-16+LsavedStack|0;
	___setStackPtr(Lcall1);
	Lconv=~~ +Lpkt.length;
	Ldata=Lcall1|0;
	__ZNSt6vectorIhSaIhEEC2Ej(Ldata,Lconv);
	Lcall1=HEAP8;
	Lcall1o=__ZNSt6vectorIhSaIhEEixEj(Ldata,0)|0;
	__ZN6cheerp14MakeTypedArrayIhN6client10Uint8ArrayEEEPT0_PKT_j(Lcall1,Lcall1o,Lconv).set(Lpkt);
	Lconv=_pbuf_alloc(0,Lconv,386)|0;
	if((Lconv|0)!=(0|0))__Z22copy_to_pbuf_and_inputP4pbufRKSt6vectorIhSaIhEE(Lconv,Ldata);
	__ZNSt6vectorIhSaIhEED2Ev(Ldata);
	___setStackPtr(LsavedStack);
}
function __ZN7IpStack6outputEPFvPN6client10Uint8ArrayEE(Lcallback){
	__ZL9output_cb=Lcallback;
}
function __ZN7IpStack11recvAdapterEPN3tcp6SocketEPhj(Ls,Ldata,Mdata,Llen){
	var Lcall1=null;
	Lcall1=__ZN6client4TMapIiPNS_14MessageChannelEE3getEi(__ZN7IpStackL7chanMapE,((Ls|0)|0)).port2;
	if(__ZN7IpStack10isWasmNullIhEEbPT_(Ldata,Mdata)|0){
		console.warn(_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1052568>>0));
		__ZN3tcp6Socket5closeEv(Ls|0);
		__ZN3tcp6SocketD2Ev(Ls|0);
		_free(Ls|0);
		Lcall1.postMessage(null);
		return;
	}
	Lcall1.postMessage(__ZN6cheerp14MakeTypedArrayIhN6client10Uint8ArrayEEEPT0_PKT_j(Ldata,Mdata,Llen));
}
function __ZN6client4TMapIiPNS_14MessageChannelEE3getEi(Lthis,Lk){
	return Lthis.get(Lk);
}
function __ZN7IpStack10isWasmNullIhEEbPT_(Lp,Mp){
	var tmp0=0;
	tmp0=(Lp.buffer===__heap);
	if(tmp0){
		tmp0=Mp;
		return ((tmp0|0)===0?1:0)|0;
	}
	return 0|0;
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	return String(__ZN6client6String11fromCharPtrIcEEPS0_PKT_(Larg0,Marg0));
}
function __ZN6client6String11fromCharPtrIcEEPS0_PKT_(Ls,Ms){
	var LretConstructor=null,tmp1=0,Lgeptoindexphi=0;
	LretConstructor=String();
	tmp1=Ls[Ms]|0;
	if((tmp1&255)===0)return LretConstructor;
	Lgeptoindexphi=0;
	while(1){
		LretConstructor=LretConstructor.concat(String.fromCharCode(tmp1<<24>>24));
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		tmp1=Ls[Ms+Lgeptoindexphi|0]|0;
		if((tmp1&255)!==0)continue;
		break;
	}
	return LretConstructor;
}
function __ZN7IpStack11connAdapterEPN3tcp6SocketEi(Ls,Lerr){
	var tmp0=0,Lcall=null,Lcall2=null;
	tmp0=((Ls|0)|0);
	Lcall=__ZN6client4TMapIiPNS_13EventListenerEE3getEi(__ZN7IpStackL11listenerMapE,tmp0);
	Lcall2=__ZN6client4TMapIiPNS_14MessageChannelEE3getEi(__ZN7IpStackL7chanMapE,tmp0).port1;
	if((Lerr|0)!==0)Lcall(null);
	Lcall(Lcall2);
}
function __ZN6client4TMapIiPNS_13EventListenerEE3getEi(Lthis,Lk){
	return Lthis.get(Lk);
}
function __ZN7IpStack7parseIPEPN6client6StringE(LjsStr){
	var LsavedStack=null,tmp1=null,Lstr=0,Lcall=0;
	LsavedStack=___getStackPtr();
	tmp1=-16+LsavedStack|0;
	___setStackPtr(tmp1);
	Lstr=tmp1|0;
	__ZNK6client6StringcvSsEv(Lstr,LjsStr);
	Lcall=__ZN2ip4stonERKSs(Lstr)|0;
	__ZNSsD2Ev(Lstr);
	___setStackPtr(LsavedStack);
	return Lcall|0;
}
function __ZN7IpStack7connectEiii(LlocalPort,Lip,Lport){
	var Lcall=0,tmp1=0,Lp=null;
	Lcall=__ZL6map_ipj(Lip)|0;
	tmp1=_malloc(88)|0;
	__ZN3tcp6SocketC2Ev(tmp1);
	__ZN7IpStackL12setupChannelEPN3tcp6SocketE(tmp1);
	if(((__ZN3tcp6Socket4bindEii(tmp1,LlocalPort)|0)&255)===0){
		Lp={a0:null,a1:null,a2:null};
		__Z13createPromisev(Lp);
		__ZN6client4TMapIiPNS_13EventListenerEE3setEiS2_(__ZN7IpStackL11listenerMapE,(tmp1|0),Lp.a1);
		if(((__ZN7IpStack11connectWasmEPN3tcp6SocketEii(tmp1,Lcall,Lport)|0)|0)===0)return Lp.a0;
	}
	__ZN3tcp6SocketD2Ev(tmp1);
	_free(tmp1|0);
	return null;
}
function __ZN7IpStackL12setupChannelEPN3tcp6SocketE(Ls){
	var Lcall1=null,LretConstructor=null;
	LretConstructor=new MessageChannel();
	LretConstructor.port1;
	Lcall1=LretConstructor.port2;
	__ZN6client4TMapIiPNS_14MessageChannelEE3setEiS2_(__ZN7IpStackL7chanMapE,((Ls|0)|0),LretConstructor);
	__ZN7IpStack8recvWasmEPN3tcp6SocketE(Ls|0);
	LretConstructor={a0:0};
	LretConstructor.a0=(Ls|0);
	Lcall1.onmessage=__ZN6cheerp8CallbackIZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7EEPN6client13EventListenerEOT_(LretConstructor);
}
function __ZN6client4TMapIiPNS_13EventListenerEE3setEiS2_(Lthis,Lk,Lv){
	Lthis.set(Lk,Lv);
}
function __ZN6client4TMapIiPNS_14MessageChannelEE3setEiS2_(Lthis,Lk,Lv){
	Lthis.set(Lk,Lv);
}
function __ZN6cheerp8CallbackIZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7EEPN6client13EventListenerEOT_(Lfunc){
	var Lref$ptmp=null,Lcall1=null;
	Lref$ptmp={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7EEDTclsr13ClosureHelperIT_DTadsr3std16remove_referenceIS6_E4typeEonclEEE12make_closureclgssr6cheerpE7forwardIS6_Efp_EEEOS6_(Lref$ptmp,Lfunc);
	Lcall1=__ZN6cheerp7ClosureIFvPN6client12MessageEventEEEcvPNS1_13EventListenerEEv(Lref$ptmp);
	__ZN6cheerp7ClosureIFvPN6client12MessageEventEEED2Ev(Lref$ptmp);
	return Lcall1;
}
function __ZN6cheerp12make_closureIZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7EEDTclsr13ClosureHelperIT_DTadsr3std16remove_referenceIS6_E4typeEonclEEE12make_closureclgssr6cheerpE7forwardIS6_Efp_EEEOS6_(Lagg$presult,Lfunc){
	__ZN6cheerp13ClosureHelperIZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7MS5_KFvPN6client12MessageEventEEE12make_closureEOS5_(Lagg$presult,Lfunc);
}
function __ZN6cheerp7ClosureIFvPN6client12MessageEventEEEcvPNS1_13EventListenerEEv(Lthis){
	var tmp0=null;
	if(Lthis.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Lthis.a1;
		tmp0[0].a1=Lthis.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvPN6client12MessageEventEEE14deleter_helperEPNS5_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Lthis.a0,tmp0);
		Lthis.a1=null;
	}
	return Lthis.a0;
}
function __ZN6cheerp7ClosureIFvPN6client12MessageEventEEED2Ev(Lthis){
	var tmp0=null;
	tmp0=Lthis.a1;
	if(tmp0!==null)tmp0(Lthis.a2);
}
function __ZN6cheerp7ClosureIFvPN6client12MessageEventEEE14deleter_helperEPNS5_13DeleterHelperE(Lh){
	Lh.a0(Lh.a1);
}
function __ZN6cheerp13ClosureHelperIZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7MS5_KFvPN6client12MessageEventEEE12make_closureEOS5_(Lagg$presult,Lfunc){
	__ZN6cheerp7ClosureIFvPN6client12MessageEventEEEC2IZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7EEOT_PNSt9enable_ifIXntsr3std14is_convertibleISC_PS4_EE5valueEvE4typeEPNSE_IXntsrNS5_13_must_destroyISC_EE5valueEvE4typeE(Lagg$presult,Lfunc);
}
function __ZN6cheerp7ClosureIFvPN6client12MessageEventEEEC2IZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7EEOT_PNSt9enable_ifIXntsr3std14is_convertibleISC_PS4_EE5valueEvE4typeEPNSE_IXntsrNS5_13_must_destroyISC_EE5valueEvE4typeE(Lthis,Lf){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:0}];
	tmp0[0].a0=(Lf.a0|0);
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7JPN6client12MessageEventEEEEvPT_DpT0_,tmp0[0]);
	Lthis.a0=tmp1;
	Lthis.a1=null;
	Lthis.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7IpStackL12setupChannelEPN3tcp6SocketEE3$_7JPN6client12MessageEventEEEEvPT_DpT0_(Lfunc,Largs){
	__ZZN7IpStackL12setupChannelEPN3tcp6SocketEENK3$_7clEPN6client12MessageEventE(Lfunc,Largs);
}
function __ZZN7IpStackL12setupChannelEPN3tcp6SocketEENK3$_7clEPN6client12MessageEventE(Lthis,Lev){
	var LsavedStack=null,Lcall=null,Lcall8=null,Lcall8o=0,Lcall7=null,Lcall7o=0,Lbuf=0,Li$p04=0;
	LsavedStack=___getStackPtr();
	Lcall7=-16+LsavedStack|0;
	___setStackPtr(Lcall7);
	Lcall=Lev.data;
	if(Lcall!==null){
		Lbuf=Lcall7|0;
		__ZNSt6vectorIhSaIhEEC2Ej(Lbuf,~~ +Lcall.length);
		if( +Lcall.length>0){
			Li$p04=0;
			while(1){
				Lcall7=__ZN6client10Uint8ArrayixEi(Lcall,Li$p04);
				Lcall7o=oSlot;
				Lcall8=HEAP8;
				Lcall8o=__ZNSt6vectorIhSaIhEEixEj(Lbuf,Li$p04)|0;
				Lcall8[Lcall8o]=Lcall7[Lcall7o]|0;
				Li$p04=Li$p04+1|0;
				if( +Lcall.length>(+(Li$p04|0)))continue;
				break;
			}
		}
		__ZN7IpStack8sendWasmEPN3tcp6SocketERKSt6vectorIhSaIhEE(Lthis.a0|0,Lbuf);
		__ZNSt6vectorIhSaIhEED2Ev(Lbuf);
	}else{
		__ZN3tcp6Socket5closeEv(Lthis.a0|0);
		Lbuf=Lthis.a0|0;
		if((Lbuf|0)!=(0|0)){
			__ZN3tcp6SocketD2Ev(Lbuf);
			_free(Lbuf|0);
		}
	}
	___setStackPtr(LsavedStack);
}
function __ZN6client10Uint8ArrayixEi(Lthis,Lindex){
	oSlot=0+Lindex|0;
	return Lthis;
}
function __ZN7IpStack13acceptAdapterEPN3tcp6SocketES2_iii(LlistenSock,LnewSock,Laddr,Lport){
	var Lcall=0,Lcall2=null,Lcall4=null,tmp3=null;
	Lcall=__ZL6map_ipj(Laddr)|0;
	__ZN7IpStackL12setupChannelEPN3tcp6SocketE(LnewSock|0);
	Lcall2=__ZN6client4TMapIiPNS_14MessageChannelEE3getEi(__ZN7IpStackL7chanMapE,((LlistenSock|0)|0)).port2;
	Lcall4=__ZN6client4TMapIiPNS_14MessageChannelEE3getEi(__ZN7IpStackL7chanMapE,((LnewSock|0)|0)).port1;
	tmp3={addr: Lcall, port: Lport, arg1: Lcall4};
	Lcall2.postMessage(tmp3,new Array(Lcall4));
}
function __ZN7IpStack6listenEi(LlocalPort){
	var tmp0=0,Lcall9=null,Lcall10=null,LretConstructor=null;
	tmp0=_malloc(88)|0;
	__ZN3tcp6SocketC2Ev(tmp0);
	if(((__ZN3tcp6Socket4bindEii(tmp0,LlocalPort)|0)&255)===0)if(((__ZN3tcp6Socket6listenEv(tmp0)|0)&255)===0){
		LretConstructor=new MessageChannel();
		Lcall9=LretConstructor.port1;
		Lcall10=LretConstructor.port2;
		__ZN6client4TMapIiPNS_14MessageChannelEE3setEiS2_(__ZN7IpStackL7chanMapE,(tmp0|0),LretConstructor);
		__ZN7IpStack10acceptWasmEPN3tcp6SocketE(tmp0);
		LretConstructor={a0:0};
		LretConstructor.a0=tmp0;
		Lcall10.onmessage=__ZN6cheerp8CallbackIZN7IpStack6listenEiE3$_4EEPN6client13EventListenerEOT_(LretConstructor);
		return Lcall9;
	}
	__ZN3tcp6SocketD2Ev(tmp0);
	_free(tmp0|0);
	return null;
}
function __ZN6cheerp8CallbackIZN7IpStack6listenEiE3$_4EEPN6client13EventListenerEOT_(Lfunc){
	var Lref$ptmp=null,Lcall1=null;
	Lref$ptmp={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN7IpStack6listenEiE3$_4EEDTclsr13ClosureHelperIT_DTadsr3std16remove_referenceIS3_E4typeEonclEEE12make_closureclgssr6cheerpE7forwardIS3_Efp_EEEOS3_(Lref$ptmp,Lfunc);
	Lcall1=__ZN6cheerp7ClosureIFvPN6client12MessageEventEEEcvPNS1_13EventListenerEEv(Lref$ptmp);
	__ZN6cheerp7ClosureIFvPN6client12MessageEventEEED2Ev(Lref$ptmp);
	return Lcall1;
}
function __ZN6cheerp12make_closureIZN7IpStack6listenEiE3$_4EEDTclsr13ClosureHelperIT_DTadsr3std16remove_referenceIS3_E4typeEonclEEE12make_closureclgssr6cheerpE7forwardIS3_Efp_EEEOS3_(Lagg$presult,Lfunc){
	__ZN6cheerp13ClosureHelperIZN7IpStack6listenEiE3$_4MS2_KFvPN6client12MessageEventEEE12make_closureEOS2_(Lagg$presult,Lfunc);
}
function __ZN6cheerp13ClosureHelperIZN7IpStack6listenEiE3$_4MS2_KFvPN6client12MessageEventEEE12make_closureEOS2_(Lagg$presult,Lfunc){
	__ZN6cheerp7ClosureIFvPN6client12MessageEventEEEC2IZN7IpStack6listenEiE3$_4EEOT_PNSt9enable_ifIXntsr3std14is_convertibleIS9_PS4_EE5valueEvE4typeEPNSB_IXntsrNS5_13_must_destroyIS9_EE5valueEvE4typeE(Lagg$presult,Lfunc);
}
function __ZN6cheerp7ClosureIFvPN6client12MessageEventEEEC2IZN7IpStack6listenEiE3$_4EEOT_PNSt9enable_ifIXntsr3std14is_convertibleIS9_PS4_EE5valueEvE4typeEPNSB_IXntsrNS5_13_must_destroyIS9_EE5valueEvE4typeE(Lthis,Lf){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:0}];
	tmp0[0].a0=(Lf.a0|0);
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7IpStack6listenEiE3$_4JPN6client12MessageEventEEEEvPT_DpT0_,tmp0[0]);
	Lthis.a0=tmp1;
	Lthis.a1=null;
	Lthis.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7IpStack6listenEiE3$_4JPN6client12MessageEventEEEEvPT_DpT0_(Lfunc,Largs){
}
function __ZN7IpStack14recvAdapterUdpEPN3udp6SocketEPhjii(Ls,Ldata,Mdata,Llen,Laddr,Lport){
	var Lcall=0,Lcall2=null;
	Lcall=__ZL6map_ipj(Laddr)|0;
	Lcall2=__ZN6client4TMapIiPNS_14MessageChannelEE3getEi(__ZN7IpStackL7chanMapE,((Ls|0)|0)).port2;
	Lcall2.postMessage({addr: Lcall, port: Lport, data: __ZN6cheerp14MakeTypedArrayIhN6client10Uint8ArrayEEEPT0_PKT_j(Ldata,Mdata,Llen)});
}
function __ZN7IpStack4bindEi(LlocalPort){
	var tmp0=0,Lcall1=null,Lcall2=null,LretConstructor=null;
	tmp0=_malloc(32)|0;
	__ZN3udp6SocketC2Ev(tmp0);
	if(((__ZN3udp6Socket4bindEii(tmp0,LlocalPort)|0)&255)!==0){
		__ZN3udp6SocketD2Ev(tmp0);
		_free(tmp0|0);
		return null;
	}
	LretConstructor=new MessageChannel();
	Lcall1=LretConstructor.port1;
	Lcall2=LretConstructor.port2;
	__ZN6client4TMapIiPNS_14MessageChannelEE3setEiS2_(__ZN7IpStackL7chanMapE,(tmp0|0),LretConstructor);
	__ZN7IpStack11recvWasmUdpEPN3udp6SocketE(tmp0);
	LretConstructor={a0:0};
	LretConstructor.a0=tmp0;
	Lcall2.onmessage=__ZN6cheerp8CallbackIZN7IpStack4bindEiE3$_6EEPN6client13EventListenerEOT_(LretConstructor);
	return Lcall1;
}
function __ZN6cheerp8CallbackIZN7IpStack4bindEiE3$_6EEPN6client13EventListenerEOT_(Lfunc){
	var Lref$ptmp=null,Lcall1=null;
	Lref$ptmp={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN7IpStack4bindEiE3$_6EEDTclsr13ClosureHelperIT_DTadsr3std16remove_referenceIS3_E4typeEonclEEE12make_closureclgssr6cheerpE7forwardIS3_Efp_EEEOS3_(Lref$ptmp,Lfunc);
	Lcall1=__ZN6cheerp7ClosureIFvPN6client12MessageEventEEEcvPNS1_13EventListenerEEv(Lref$ptmp);
	__ZN6cheerp7ClosureIFvPN6client12MessageEventEEED2Ev(Lref$ptmp);
	return Lcall1;
}
function __ZN6cheerp12make_closureIZN7IpStack4bindEiE3$_6EEDTclsr13ClosureHelperIT_DTadsr3std16remove_referenceIS3_E4typeEonclEEE12make_closureclgssr6cheerpE7forwardIS3_Efp_EEEOS3_(Lagg$presult,Lfunc){
	__ZN6cheerp13ClosureHelperIZN7IpStack4bindEiE3$_6MS2_KFvPN6client12MessageEventEEE12make_closureEOS2_(Lagg$presult,Lfunc);
}
function __ZN6cheerp13ClosureHelperIZN7IpStack4bindEiE3$_6MS2_KFvPN6client12MessageEventEEE12make_closureEOS2_(Lagg$presult,Lfunc){
	__ZN6cheerp7ClosureIFvPN6client12MessageEventEEEC2IZN7IpStack4bindEiE3$_6EEOT_PNSt9enable_ifIXntsr3std14is_convertibleIS9_PS4_EE5valueEvE4typeEPNSB_IXntsrNS5_13_must_destroyIS9_EE5valueEvE4typeE(Lagg$presult,Lfunc);
}
function __ZN6cheerp7ClosureIFvPN6client12MessageEventEEEC2IZN7IpStack4bindEiE3$_6EEOT_PNSt9enable_ifIXntsr3std14is_convertibleIS9_PS4_EE5valueEvE4typeEPNSB_IXntsrNS5_13_must_destroyIS9_EE5valueEvE4typeE(Lthis,Lf){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:0}];
	tmp0[0].a0=(Lf.a0|0);
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7IpStack4bindEiE3$_6JPN6client12MessageEventEEEEvPT_DpT0_,tmp0[0]);
	Lthis.a0=tmp1;
	Lthis.a1=null;
	Lthis.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7IpStack4bindEiE3$_6JPN6client12MessageEventEEEEvPT_DpT0_(Lfunc,Largs){
	__ZZN7IpStack4bindEiENK3$_6clEPN6client12MessageEventE(Lfunc,Largs);
}
function __ZZN7IpStack4bindEiENK3$_6clEPN6client12MessageEventE(Lthis,Lev){
	var LsavedStack=null,Lcall=null,Lcall3=null,Lcall9=null,Lcall9o=0,Lcall11=0,Lcall8=null,Lcall8o=0,Lbuf=0,Li$p04=0;
	LsavedStack=___getStackPtr();
	Lcall8=-16+LsavedStack|0;
	___setStackPtr(Lcall8);
	Lcall=Lev.data;
	if(Lcall!==null){
		Lcall3=Lcall.data;
		Lbuf=Lcall8|0;
		__ZNSt6vectorIhSaIhEEC2Ej(Lbuf,~~ +Lcall3.length);
		if( +Lcall3.length>0){
			Li$p04=0;
			while(1){
				Lcall8=__ZN6client10Uint8ArrayixEi(Lcall3,Li$p04);
				Lcall8o=oSlot;
				Lcall9=HEAP8;
				Lcall9o=__ZNSt6vectorIhSaIhEEixEj(Lbuf,Li$p04)|0;
				Lcall9[Lcall9o]=Lcall8[Lcall8o]|0;
				Li$p04=Li$p04+1|0;
				if( +Lcall3.length>(+(Li$p04|0)))continue;
				break;
			}
		}
		Li$p04=Lcall.addr;
		Lcall11=Lcall.port;
		__ZN7IpStack11sendWasmUdpEPN3udp6SocketERKSt6vectorIhSaIhEEjj(Lthis.a0|0,Lbuf,Li$p04,Lcall11);
		__ZNSt6vectorIhSaIhEED2Ev(Lbuf);
	}else{
		__ZN3udp6Socket5closeEv(Lthis.a0|0);
		Lbuf=Lthis.a0|0;
		if((Lbuf|0)!=(0|0)){
			__ZN3udp6SocketD2Ev(Lbuf);
			_free(Lbuf|0);
		}
	}
	___setStackPtr(LsavedStack);
}
function __ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj(Lthrown_object){
	var Ldest$paddr=null,Lref$ptmp=null,Ltinfo$paddr=null;
	Ltinfo$paddr=[0];
	Ltinfo$paddr[0]=(1048752|0);
	Ldest$paddr=[0];
	Ldest$paddr[0]=((58|0)|0);
	Lref$ptmp=[nullObj];
	Lref$ptmp[0]={d:null,o:Lthrown_object};
	Ltinfo$paddr=__ZN10__cxxabiv19Exception8allocateIJPvRPSt9type_infoRjEEEPS0_DpOT_(Lref$ptmp,0,Ltinfo$paddr,0,Ldest$paddr,0);
	__ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(Ltinfo$paddr);
	;
}
function __ZN10__cxxabiv19Exception8allocateIJPvRPSt9type_infoRjEEEPS0_DpOT_(Largs,Margs,Largs1,Margs1,Largs3,Margs3){
	var tmp0=0,Lid$p0$plcssa28$pi$pi=0,tmp2=null,Lid$p022$pi$pi=0,tmp4=null;
	Lid$p0$plcssa28$pi$pi=__ZN10__cxxabiv19Exception9allocatorE$p2|0;
	a:{
		b:{
			if((Lid$p0$plcssa28$pi$pi|0)>1){
				tmp2=__ZN10__cxxabiv19Exception9allocatorE$p1;
				Lid$p022$pi$pi=1;
				while(1){
					if((tmp2[Lid$p022$pi$pi]&255)!==0){
						Lid$p022$pi$pi=Lid$p022$pi$pi+1|0;
						if((Lid$p022$pi$pi|0)===(Lid$p0$plcssa28$pi$pi|0))break b;
						continue;
					}
					break;
				}
			}else{
				Lid$p022$pi$pi=1;
			}
			if((Lid$p022$pi$pi|0)!==(Lid$p0$plcssa28$pi$pi|0)){
				Lid$p0$plcssa28$pi$pi=Lid$p022$pi$pi;
				break a;
			}
		}
		__ZN10__cxxabiv19Exception9allocatorE$p2=Lid$p0$plcssa28$pi$pi<<1;
		tmp2=__ZN10__cxxabiv19Exception9allocatorE$p0;
		Lid$p022$pi$pi=__imul(Lid$p0$plcssa28$pi$pi,88)|0;
		if(tmp2!==nullArray||0!==0)tmp2=resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp2,tmp2.length,Lid$p022$pi$pi/44|0);
		else tmp2=createArray_struct$p_ZN10__cxxabiv19ExceptionE(Lid$p022$pi$pi/44|0);
		__ZN10__cxxabiv19Exception9allocatorE$p0=tmp2;
		Lid$p022$pi$pi=__ZN10__cxxabiv19Exception9allocatorE$p2|0;
		tmp2=__ZN10__cxxabiv19Exception9allocatorE$p1;
		if(tmp2!==nullArray||0!==0)tmp2=(function(){var __old__=tmp2;
			var __ret__=new Uint8Array(Lid$p022$pi$pi/1|0);
			__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
			return __ret__;})();
		else tmp2=new Uint8Array(Lid$p022$pi$pi/1|0);
		__ZN10__cxxabiv19Exception9allocatorE$p1=tmp2;
	}
	tmp2=__ZN10__cxxabiv19Exception9allocatorE$p0;
	tmp4=Largs[Margs];
	Lid$p022$pi$pi=Largs1[Margs1]|0;
	tmp0=Largs3[Margs3]|0;
	tmp2[Lid$p0$plcssa28$pi$pi].a1=tmp4.d[tmp4.o];
	tmp2[Lid$p0$plcssa28$pi$pi].a2=null;
	tmp2[Lid$p0$plcssa28$pi$pi].a3=Lid$p022$pi$pi;
	tmp2[Lid$p0$plcssa28$pi$pi].a4=null;
	tmp2[Lid$p0$plcssa28$pi$pi].i5=tmp0;
	tmp2[Lid$p0$plcssa28$pi$pi].i6=1;
	tmp2[Lid$p0$plcssa28$pi$pi].i7=0;
	tmp2[Lid$p0$plcssa28$pi$pi].a9=null;
	tmp2[Lid$p0$plcssa28$pi$pi].a10=null;
	tmp4=__ZN10__cxxabiv19Exception9allocatorE$p1;
	tmp4[Lid$p0$plcssa28$pi$pi]=1;
	return tmp2[Lid$p0$plcssa28$pi$pi];
}
function __ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(Lex){
	var tmp0=0,LretConstructor8=null,LretConstructor=null,LretConstructoro=0;
	tmp0=Lex.a3|0;
	LretConstructoro=HEAP32[4+tmp0>>2];
	LretConstructor=HEAP8;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(LretConstructor,LretConstructoro);
	LretConstructor8=new CheerpException(LretConstructor);
	Lex.a0=LretConstructor8;
	throw LretConstructor8;
	;
}
function _print(Lbuf,Mbuf,Llen){
	var Lcall=null,Lsub=0;
	Lcall=__ZN6client6String8fromUtf8EPKcj(Lbuf,Mbuf,Llen);
	Lsub=(Lcall.length)-1|0;
	if(((Lcall.charCodeAt(Lsub))|0)===10){
		console.log(Lcall.substr(0,Lsub));
		return;
	}
	console.log(Lcall);
}
function __ZN6client6String8fromUtf8EPKcj(Lin,Min,Llen){
	var tmp0=0,LretConstructor=null,Lgeptoindexphi=0,Llen$paddr$p06=0,Lcodepoint$p03=0,Lconv2=0;
	LretConstructor=String();
	if((Llen|0)===0)return LretConstructor;
	Llen$paddr$p06=Llen;
	Lgeptoindexphi=0;
	while(1){
		tmp0=Lin[Min+Lgeptoindexphi|0]|0;
		if((tmp0&255)!==0){
			Lconv2=tmp0&255;
			if(tmp0<<24<=-16777216)if((tmp0&255)<192){
				Lconv2=(Lconv2&63)+(Lcodepoint$p03<<6)|0;
			}else if((tmp0&255)<224){
				Lconv2&=31;
			}else if((tmp0&255)<240){
				Lconv2&=15;
			}else{
				Lconv2&=7;
			}
			Llen$paddr$p06=Llen$paddr$p06-1|0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			a:{
				if((Llen$paddr$p06|0)!==0)if((Lin[Min+Lgeptoindexphi|0]&192)===128){
					Lcodepoint$p03=Lconv2;
					break a;
				}
				if(Lconv2>>>0<65536){
					Lcodepoint$p03=Lconv2;
				}else{
					Lcodepoint$p03=Lconv2-65536|0;
					LretConstructor=LretConstructor.concat(String.fromCharCode((Lcodepoint$p03>>>10)+55296|0));
					Lconv2=(Lconv2&1023)+56320|0;
				}
				LretConstructor=LretConstructor.concat(String.fromCharCode(Lconv2));
			}
			if((Llen$paddr$p06|0)!==0)continue;
			return LretConstructor;
		}
		break;
	}
	return LretConstructor;
}
function __start(){
	___cxx_global_var_init();
	___cxx_global_var_init$p3();
	___cxx_global_var_init$p4();
}
function ___wrapper__print(Larg0,Larg1){
	_print(HEAP8,Larg0>>0,Larg1);
}
function ___wrapper___ZN7IpStack14recvAdapterUdpEPN3udp6SocketEPhjii(Larg0,Larg1,Larg2,Larg3,Larg4){
	__ZN7IpStack14recvAdapterUdpEPN3udp6SocketEPhjii(Larg0|0,HEAP8,Larg1>>0,Larg2,Larg3,Larg4);
}
function ___wrapper___ZN7IpStack11recvAdapterEPN3tcp6SocketEPhj(Larg0,Larg1,Larg2){
	__ZN7IpStack11recvAdapterEPN3tcp6SocketEPhj(Larg0|0,HEAP8,Larg1>>0,Larg2);
}
function ___wrapper___Z9output_jsPhi(Larg0,Larg1){
	__Z9output_jsPhi(HEAP8,Larg0>>0,Larg1);
}
var __ZN7IpStackL11listenerMapE=null;
var __ZN7IpStackL7chanMapE=null;
var __ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE=null;
var __ZL9output_cb=null;
var __ZN10__cxxabiv19Exception9allocatorE$p2=16;
var _promotedMalloc$p6=new Uint8Array(16);
var __ZN10__cxxabiv19Exception9allocatorE$p1=_promotedMalloc$p6;
var _promotedMalloc$p5=createArray_struct$p_ZN10__cxxabiv19ExceptionE(16);
var __ZN10__cxxabiv19Exception9allocatorE$p0=_promotedMalloc$p5;
function constructor_struct$p_ZN10__cxxabiv19ExceptionE(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=0;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.a8=null;
	this.a9=null;
	this.a10=null;
}
function createArray_struct$p_ZN10__cxxabiv19ExceptionE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]=new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(r,s,e){
	for(var i=s;i<e;i++)
	r[i]=new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function cheerpCreateClosure(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}
function cheerpCreateClosureSplit(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}
function CheerpException(m){
	var instance=new Error('Uncaught C++ exception: '+m);
	instance.name='CheerpException';
	Object.setPrototypeOf(instance,Object.getPrototypeOf(this));
	if(Error.captureStackTrace){
		Error.captureStackTrace(instance, CheerpException);
	}
	return instance;
}
CheerpException.prototype=Object.create(Error.prototype);
function growLinearMemory(bytes){
	var pages=(bytes+65535)>>16;
	try{
		__asm.memory.grow(pages);
		__heap=__asm.memory.buffer;
		assignHeaps(__heap);
		return pages<<16;
	}catch(e){
		return -1;
	}
}
var IpStack={
	bind:null,
	connect:null,
	down:null,
	init:null,
	input:null,
	listen:null,
	output:null,
	parseIP:null,
	up:null,
};
var HEAP8=null,HEAP32=null,__asm=null,__heap=null;function __dummy(){throw new Error('this should be unreachable');};
var ___cxx_global_var_init=null;
var _malloc=null;
var __ZN3udp6SocketC2Ev=null;
var __ZN3udp6Socket4bindEii=null;
var __ZN3udp6SocketD2Ev=null;
var __ZN7IpStack11recvWasmUdpEPN3udp6SocketE=null;
var __ZN3udp6Socket5closeEv=null;
var __ZNSt6vectorIhSaIhEEC2Ej=null;
var __ZNSt6vectorIhSaIhEEixEj=null;
var __ZN7IpStack11sendWasmUdpEPN3udp6SocketERKSt6vectorIhSaIhEEjj=null;
var __ZNSt6vectorIhSaIhEED2Ev=null;
var __ZL6map_ipj=null;
var __ZN3tcp6SocketC2Ev=null;
var __ZN3tcp6Socket4bindEii=null;
var __ZN3tcp6Socket6listenEv=null;
var __ZN7IpStack10acceptWasmEPN3tcp6SocketE=null;
var __ZN3tcp6SocketD2Ev=null;
var __ZN7IpStack8recvWasmEPN3tcp6SocketE=null;
var __ZN3tcp6Socket5closeEv=null;
var __ZN7IpStack8sendWasmEPN3tcp6SocketERKSt6vectorIhSaIhEE=null;
var __ZN7IpStack11connectWasmEPN3tcp6SocketEii=null;
var __ZN2ip4stonERKSs=null;
var __ZNSsD2Ev=null;
var __ZNSsC2Ev=null;
var __ZNSs6resizeEj=null;
var __ZNSsixEj_icf=null;
var _pbuf_alloc=null;
var __Z22copy_to_pbuf_and_inputP4pbufRKSt6vectorIhSaIhEE=null;
var __Z4downv=null;
var __ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEEC2Ev=null;
var __ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEE7emplaceIJSsSsEEES4_ISt19__hash_map_iteratorISt15__hash_iteratorIPSt11__hash_nodeISt17__hash_value_typeISsSsEPvEEEbEDpOT_=null;
var __Z2upRKSsRKSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIS_SsEEE=null;
var __ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEED2Ev=null;
var __Z4initv=null;
var __Z16udpecho_raw_initv=null;
var __Z16tcpecho_raw_initv=null;
var _sys_check_timeouts=null;
var _free=null;
var ___getStackPtr=null;
var ___setStackPtr=null;
export default function(Lh){
	return (Lh&&Lh.buffer)?
	Promise.resolve(Lh.buffer):
	fetchBuffer((Lh&&Lh.absPath)?Lh.absPath:new URL('ipstack.wasm', import.meta.url)).then(Lh=>
	WebAssembly.instantiate(Lh,
	{i:{
			___syscall_rt_sigprocmask:__dummy,
			___syscall_rt_sigaction:__dummy,
			___syscall_tkill:__dummy,
			___syscall_exit_group:__dummy,
			___syscall_exit:__dummy,
			___syscall_futex:__dummy,
			___syscall__llseek:__dummy,
			___wrapper___Z9output_jsPhi:___wrapper___Z9output_jsPhi,
			___syscall_close:__dummy,
			___wrapper___ZN7IpStack11recvAdapterEPN3tcp6SocketEPhj:___wrapper___ZN7IpStack11recvAdapterEPN3tcp6SocketEPhj,
			__ZN7IpStack13acceptAdapterEPN3tcp6SocketES2_iii:__ZN7IpStack13acceptAdapterEPN3tcp6SocketES2_iii,
			___wrapper___ZN7IpStack14recvAdapterUdpEPN3udp6SocketEPhjii:___wrapper___ZN7IpStack14recvAdapterUdpEPN3udp6SocketEPhjii,
			__ZN7IpStack11connAdapterEPN3tcp6SocketEi:__ZN7IpStack11connAdapterEPN3tcp6SocketEi,
			_sys_now:_sys_now,
			__ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj:__ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj,
			__Z14start_timeoutsv:__Z14start_timeoutsv,
			___wrapper__print:___wrapper__print,
			growLinearMemory:growLinearMemory,
		}})
	).then(Lh=>{
		__asm=Lh.instance.exports;
		__heap=__asm.memory.buffer;
		assignHeaps(__heap);
		___cxx_global_var_init=__asm.___cxx_global_var_init;
		_malloc=__asm._malloc;
		__ZN3udp6SocketC2Ev=__asm.__ZN3udp6SocketC2Ev;
		__ZN3udp6Socket4bindEii=__asm.__ZN3udp6Socket4bindEii;
		__ZN3udp6SocketD2Ev=__asm.__ZN3udp6SocketD2Ev;
		__ZN7IpStack11recvWasmUdpEPN3udp6SocketE=__asm.__ZN7IpStack11recvWasmUdpEPN3udp6SocketE;
		__ZN3udp6Socket5closeEv=__asm.__ZN3udp6Socket5closeEv;
		__ZNSt6vectorIhSaIhEEC2Ej=__asm.__ZNSt6vectorIhSaIhEEC2Ej;
		__ZNSt6vectorIhSaIhEEixEj=__asm.__ZNSt6vectorIhSaIhEEixEj;
		__ZN7IpStack11sendWasmUdpEPN3udp6SocketERKSt6vectorIhSaIhEEjj=__asm.__ZN7IpStack11sendWasmUdpEPN3udp6SocketERKSt6vectorIhSaIhEEjj;
		__ZNSt6vectorIhSaIhEED2Ev=__asm.__ZNSt6vectorIhSaIhEED2Ev;
		__ZL6map_ipj=__asm.__ZL6map_ipj;
		__ZN3tcp6SocketC2Ev=__asm.__ZN3tcp6SocketC2Ev;
		__ZN3tcp6Socket4bindEii=__asm.__ZN3tcp6Socket4bindEii;
		__ZN3tcp6Socket6listenEv=__asm.__ZN3tcp6Socket6listenEv;
		__ZN7IpStack10acceptWasmEPN3tcp6SocketE=__asm.__ZN7IpStack10acceptWasmEPN3tcp6SocketE;
		__ZN3tcp6SocketD2Ev=__asm.__ZN3tcp6SocketD2Ev;
		__ZN7IpStack8recvWasmEPN3tcp6SocketE=__asm.__ZN7IpStack8recvWasmEPN3tcp6SocketE;
		__ZN3tcp6Socket5closeEv=__asm.__ZN3tcp6Socket5closeEv;
		__ZN7IpStack8sendWasmEPN3tcp6SocketERKSt6vectorIhSaIhEE=__asm.__ZN7IpStack8sendWasmEPN3tcp6SocketERKSt6vectorIhSaIhEE;
		__ZN7IpStack11connectWasmEPN3tcp6SocketEii=__asm.__ZN7IpStack11connectWasmEPN3tcp6SocketEii;
		__ZN2ip4stonERKSs=__asm.__ZN2ip4stonERKSs;
		__ZNSsD2Ev=__asm.__ZNSsD2Ev;
		__ZNSsC2Ev=__asm.__ZNSsC2Ev;
		__ZNSs6resizeEj=__asm.__ZNSs6resizeEj;
		__ZNSsixEj_icf=__asm.__ZNSsixEj_icf;
		_pbuf_alloc=__asm._pbuf_alloc;
		__Z22copy_to_pbuf_and_inputP4pbufRKSt6vectorIhSaIhEE=__asm.__Z22copy_to_pbuf_and_inputP4pbufRKSt6vectorIhSaIhEE;
		__Z4downv=__asm.__Z4downv;
		__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEEC2Ev=__asm.__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEEC2Ev;
		__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEE7emplaceIJSsSsEEES4_ISt19__hash_map_iteratorISt15__hash_iteratorIPSt11__hash_nodeISt17__hash_value_typeISsSsEPvEEEbEDpOT_=__asm.__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEE7emplaceIJSsSsEEES4_ISt19__hash_map_iteratorISt15__hash_iteratorIPSt11__hash_nodeISt17__hash_value_typeISsSsEPvEEEbEDpOT_;
		__Z2upRKSsRKSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIS_SsEEE=__asm.__Z2upRKSsRKSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIS_SsEEE;
		__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEED2Ev=__asm.__ZNSt13unordered_mapISsSsSt4hashISsESt8equal_toISsESaISt4pairIKSsSsEEED2Ev;
		__Z4initv=__asm.__Z4initv;
		__Z16udpecho_raw_initv=__asm.__Z16udpecho_raw_initv;
		__Z16tcpecho_raw_initv=__asm.__Z16tcpecho_raw_initv;
		_sys_check_timeouts=__asm._sys_check_timeouts;
		_free=__asm._free;
		___getStackPtr=__asm.___getStackPtr;
		___setStackPtr=__asm.___setStackPtr;
		IpStack.bind=__ZN7IpStack4bindEi;
		IpStack.connect=__ZN7IpStack7connectEiii;
		IpStack.down=__ZN7IpStack4downEv;
		IpStack.init=__ZN7IpStack4initEPN6client9UpOptionsE;
		IpStack.input=__ZN7IpStack5inputEPN6client10Uint8ArrayE;
		IpStack.listen=__ZN7IpStack6listenEi;
		IpStack.output=__ZN7IpStack6outputEPFvPN6client10Uint8ArrayEE;
		IpStack.parseIP=__ZN7IpStack7parseIPEPN6client6StringE;
		IpStack.up=__ZN7IpStack2upEPN6client9UpOptionsE;
		__start();
		return{
			IpStack:IpStack,
		};
	});
}
function assignHeaps(Lh){
	HEAP8=new Uint8Array(Lh);
	HEAP32=new Int32Array(Lh);
}
