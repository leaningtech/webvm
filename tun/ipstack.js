"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function fetchBuffer(p){
	return (typeof self==='object')?
	fetch(p).then(r=>r.arrayBuffer()):
	new Promise((y,n)=>{
		import('fs').then(r=>r.readFile(p,(e,d)=>{
			if(e)n(e);
			else y(d);
		}));
	});
}
var __stackPtr=1048576|0;
var CHEERP_ENV=null,CHEERP_ARGV=null;
function ___ctor__Z28taskToPromiseHelperAllocatorIiE(){
	if(!(__ZGV28taskToPromiseHelperAllocatorIiE|0)){
		__ZGV28taskToPromiseHelperAllocatorIiE=1;
		__ZN11IdAllocatorIPFviEEC2Ev();
	}
}
function ___ctor__ZN7IpStackL10dnsQueriesE(){
	__ZN7IpStackL10dnsQueriesE=_cheerpCreate_ZN6client6TArrayIPFviEEC2Ev();
}
function _cheerpCreate_ZN6client6TArrayIPFviEEC2Ev(){
	return new Array();
}
function __ZN11IdAllocatorIPFviEEC2Ev(){
	var tmp0=null;
	tmp0=new Uint8Array(16);
	__Z28taskToPromiseHelperAllocatorIiE$p1=tmp0;
	__Z28taskToPromiseHelperAllocatorIiE$p2=16;
	tmp0=createPointerArray([],0,16,nullObj);
	__Z28taskToPromiseHelperAllocatorIiE$p0=tmp0;
}
function __ZN7IpStack9TCPSocketC1Ev(Larg0){
	var tmp0=null,tmp1=0;
	tmp0=HEAP8;
	tmp1=__Znwj(92)|0;
	__ZN3tcp6SocketC2Ev(tmp1|0);
	Larg0.a0=(tmp1|0);
}
function __ZN7IpStack9TCPSocketD2Ev(Larg0){
	var tmp0=0;
	tmp0=Larg0.a0|0;
	if((tmp0|0)!=(0|0)){
		__ZN3tcp6SocketD2Ev(tmp0);
		__ZdlPv(tmp0|0);
	}
}
function __ZN7IpStack9TCPSocketD1Ev(Larg0){
	__ZN7IpStack9TCPSocketD2Ev(Larg0);
}
function __ZN7IpStack9TCPSocket12waitIncomingEv(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=null;
	LsavedStack=___getStackPtr();
	tmp2=-8+LsavedStack|0;
	___setStackPtr(tmp2);
	tmp1=tmp2|0;
	__ZN3tcp6Socket12waitIncomingEv(tmp1,Larg0.a0|0);
	tmp2=__Z13taskToPromiseIiEPN6client7PromiseIT_EEO4TaskIS2_E(tmp1);
	__ZN4TaskIiED2Ev(tmp1);
	___setStackPtr(LsavedStack);
	return tmp2;
}
function __ZN7IpStack9TCPSocket12waitOutgoingEv(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=null;
	LsavedStack=___getStackPtr();
	tmp2=-8+LsavedStack|0;
	___setStackPtr(tmp2);
	tmp1=tmp2|0;
	__ZN3tcp6Socket12waitOutgoingEv(tmp1,Larg0.a0|0);
	tmp2=__Z13taskToPromiseIiEPN6client7PromiseIT_EEO4TaskIS2_E(tmp1);
	__ZN4TaskIiED2Ev(tmp1);
	___setStackPtr(LsavedStack);
	return tmp2;
}
function __ZN7IpStack9TCPSocket7connectEii(Larg0,Larg1,Larg2){
	var tmp0=0;
	tmp0=__ZL6map_ipj(Larg1)|0;
	tmp0=__ZN3tcp6Socket7connectEii(Larg0.a0|0,tmp0,Larg2)|0;
	return ((tmp0|0)!==0? -22|0:0|0)|0;
}
function __ZN7IpStack9TCPSocket4recvEPN6client10Uint8ArrayEjj(Larg0,Larg1,Larg2,Larg3){
	var tmp0=0;
	tmp0=__ZN3tcp6Socket4recvEPN6client10Uint8ArrayEjj(Larg0.a0|0,Larg1,Larg2,Larg3)|0;
	if((tmp0|0)===-7)return  -11|0;
	return ((tmp0|0)<0? -22|0:tmp0|0)|0;
}
function __ZN7IpStack9TCPSocket4sendEPN6client10Uint8ArrayEjj(Larg0,Larg1,Larg2,Larg3){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=null,tmp4=0,tmp5=null,tmp6=0,Lsmin_select=0,tmp8=0;
	LsavedStack=___getStackPtr();
	tmp1=-24+LsavedStack|0;
	___setStackPtr(tmp1);
	Lsmin_select=__ZN3tcp6Socket14writeAvailableEv(Larg0.a0|0)|0;
	if((Lsmin_select|0)!==0){
		Lsmin_select=Lsmin_select>>>0<Larg3>>>0?Lsmin_select|0:Larg3|0;
		tmp2=tmp1|0;
		__ZNSt6vectorIhSaIhEEC2Ej(tmp2,Lsmin_select);
		if((Lsmin_select|0)!==0){
			tmp8=0;
			while(1){
				tmp3=__ZN6client10Uint8ArrayixEd(Larg1,(+(tmp8+Larg2>>>0)));
				tmp4=oSlot;
				tmp5=HEAP8;
				tmp6=__ZNSt6vectorIhSaIhEEixB7v160000Ej(tmp2,tmp8)|0;
				tmp5[tmp6]=tmp3[tmp4]|0;
				tmp8=tmp8+1|0;
				if((tmp8|0)!==(Lsmin_select|0))continue;
				break;
			}
		}
		Lsmin_select=Larg0.a0|0;
		tmp8=16+tmp1|0;
		__ZNSt4spanIKhLj4294967295EEC2B7v160000IRSt6vectorIhSaIhEEEEOT_(tmp8,tmp2);
		Lsmin_select=__ZN3tcp6Socket4sendESt4spanIKhLj4294967295EE(Lsmin_select,tmp8)|0;
		__ZNSt6vectorIhSaIhEED2B7v160000Ev(tmp2);
		___setStackPtr(LsavedStack);
		return ((Lsmin_select|0)<0? -22|0:Lsmin_select|0)|0;
	}
	___setStackPtr(LsavedStack);
	return  -11|0;
}
function __ZN7IpStack9TCPSocket6acceptEv(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=null,tmp6=null;
	LsavedStack=___getStackPtr();
	tmp5=-96+LsavedStack|0;
	___setStackPtr(tmp5);
	tmp1=tmp5|0;
	__ZN3tcp6Socket6acceptEv(tmp1,Larg0.a0|0);
	if(__ZNK4PbufcvbEv_icf(tmp1|0)|0){
		tmp2=__ZN3tcp6Socket13getRemoteAddrEv(tmp1)|0;
		tmp3=__ZN3tcp6Socket13getRemotePortEv(tmp1)|0;
		tmp5={a0:0};
		tmp6=HEAP8;
		tmp4=__Znwj(92)|0;
		__ZN3tcp6SocketC2EOS0_(tmp4|0,tmp1);
		__ZN7IpStack9TCPSocketC2EPN3tcp6SocketE(tmp5,tmp4|0);
		tmp6=_cheerpCreate_ZN6client12AcceptReturnC2Ev();
		tmp6.socket=Object.create(IpStack.TCPSocket.prototype,{this:{value:tmp5}});
		tmp6.addr=tmp2;
		tmp6.port=tmp3;
		__ZN3tcp6SocketD2Ev(tmp1);
		___setStackPtr(LsavedStack);
		return tmp6;
	}
	__ZN3tcp6SocketD2Ev(tmp1);
	___setStackPtr(LsavedStack);
	return null;
}
function __ZN7IpStack9TCPSocket5closeEv(Larg0){
	__ZN3tcp6Socket5closeEv(Larg0.a0|0);
}
function __ZN7IpStack9TCPSocket10shutdownTxEv(Larg0){
	__ZN3tcp6Socket10shutdownTxEv(Larg0.a0|0);
}
function __ZN7IpStack9TCPSocket10shutdownRxEv(Larg0){
	__ZN3tcp6Socket10shutdownRxEv(Larg0.a0|0);
}
function __ZN7IpStack9TCPSocket4bindEi(Larg0,Larg1){
	var tmp0=0;
	tmp0=__ZN3tcp6Socket4bindEii(Larg0.a0|0,Larg1)|0;
	return ((tmp0|0)<0? -22|0:0|0)|0;
}
function __ZN7IpStack9TCPSocket6listenEv(Larg0){
	__ZN3tcp6Socket6listenEv(Larg0.a0|0);
	return 0|0;
}
function __ZN7IpStack9TCPSocket13readAvailableEv(Larg0){
	return (__ZN3tcp6Socket13readAvailableEv(Larg0.a0|0)|0)|0;
}
function __ZN7IpStack9UDPSocketC1Ev(Larg0){
	var tmp0=null,tmp1=0;
	tmp0=HEAP8;
	tmp1=__Znwj(48)|0;
	__ZN3udp6SocketC2Ev(tmp1|0);
	Larg0.a0=(tmp1|0);
}
function __ZN7IpStack9UDPSocketD2Ev(Larg0){
	var tmp0=0;
	tmp0=Larg0.a0|0;
	if((tmp0|0)!=(0|0)){
		__ZN3udp6SocketD2Ev(tmp0);
		__ZdlPv(tmp0|0);
	}
}
function __ZN7IpStack9UDPSocketD1Ev(Larg0){
	__ZN7IpStack9UDPSocketD2Ev(Larg0);
}
function __ZN7IpStack9UDPSocket4bindEi(Larg0,Larg1){
	var tmp0=0;
	tmp0=__ZN3udp6Socket4bindEii(Larg0.a0|0,Larg1)|0;
	return ((tmp0|0)<0? -22|0:0|0)|0;
}
function __ZN7IpStack9UDPSocket12waitIncomingEv(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=null;
	LsavedStack=___getStackPtr();
	tmp2=-8+LsavedStack|0;
	___setStackPtr(tmp2);
	tmp1=tmp2|0;
	__ZN3udp6Socket12waitIncomingEv(tmp1,Larg0.a0|0);
	tmp2=__Z13taskToPromiseIiEPN6client7PromiseIT_EEO4TaskIS2_E(tmp1);
	__ZN4TaskIiED2Ev(tmp1);
	___setStackPtr(LsavedStack);
	return tmp2;
}
function __ZN7IpStack9UDPSocket4recvEPN6client10Uint8ArrayEjjPNS1_8AddrInfoE(Larg0,Larg1,Larg2,Larg3,Larg4){
	var LsavedStack=null,tmp1=null,tmp2=0;
	LsavedStack=___getStackPtr();
	tmp1=-16+LsavedStack|0;
	___setStackPtr(tmp1);
	__ZN3udp6Socket4recvEPN6client10Uint8ArrayEjj(tmp1|0,Larg0.a0|0,Larg1,Larg2,Larg3);
	tmp2=HEAP32[8+tmp1>>2]|0;
	if((tmp2|0)===-7){
		___setStackPtr(LsavedStack);
		return  -11|0;
	}
	Larg4.addr=__ZL6map_ipj(HEAP32[tmp1>>2]|0)|0;
	Larg4.port=HEAP32[4+tmp1>>2]|0;
	___setStackPtr(LsavedStack);
	return tmp2|0;
}
function __ZN7IpStack9UDPSocket6sendtoEPN6client10Uint8ArrayEii(Larg0,Larg1,Larg2,Larg3){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=0,tmp4=null,tmp5=null,tmp6=0,tmp7=0,tmp8=0;
	LsavedStack=___getStackPtr();
	tmp1=-24+LsavedStack|0;
	___setStackPtr(tmp1);
	tmp2=__ZL6map_ipj(Larg2)|0;
	tmp3=tmp1|0;
	__ZNSt6vectorIhSaIhEEC2Ej(tmp3,Larg1.length);
	if(((Larg1.length)|0)>0){
		tmp7=0;
		while(1){
			tmp4=__ZN6client10Uint8ArrayixEd(Larg1,(+(tmp7|0)));
			tmp8=oSlot;
			tmp5=HEAP8;
			tmp6=__ZNSt6vectorIhSaIhEEixB7v160000Ej(tmp3,tmp7)|0;
			tmp5[tmp6]=tmp4[tmp8]|0;
			tmp7=tmp7+1|0;
			if((tmp7|0)<((Larg1.length)|0))continue;
			break;
		}
	}
	tmp7=Larg0.a0|0;
	tmp8=16+tmp1|0;
	__ZNSt4spanIKhLj4294967295EEC2B7v160000IRSt6vectorIhSaIhEEEEOT_(tmp8,tmp3);
	__ZN3udp6Socket6sendtoESt4spanIKhLj4294967295EEii(tmp7,tmp8,tmp2,Larg3);
	__ZNSt6vectorIhSaIhEED2B7v160000Ev(tmp3);
	___setStackPtr(LsavedStack);
	return 0|0;
}
function __ZN7IpStack9UDPSocket5closeEv(Larg0){
	__ZN3udp6Socket5closeEv(Larg0.a0|0);
}
function __ZN7IpStack9TCPSocket3newEv(){
	var tmp0=null;
	tmp0={a0:0};
	__ZN7IpStack9TCPSocketC1Ev(tmp0);
	return tmp0;
}
function __ZN7IpStack9TCPSocket6deleteEv(Larg0){
	__ZN7IpStack9TCPSocketD1Ev(Larg0);
}
function __ZN7IpStack9UDPSocket3newEv(){
	var tmp0=null;
	tmp0={a0:0};
	__ZN7IpStack9UDPSocketC1Ev(tmp0);
	return tmp0;
}
function __ZN7IpStack9UDPSocket6deleteEv(Larg0){
	__ZN7IpStack9UDPSocketD1Ev(Larg0);
}
function __ZN6client10Uint8ArrayixEd(Larg0,Larg1){
	oSlot=0+~~Larg1|0;
	return Larg0;
}
function __Z13taskToPromiseIiEPN6client7PromiseIT_EEO4TaskIS2_E(Larg0){
	var LsavedStack=null,tmp1=null,tmp2=null,tmp3=0,tmp4=null,tmp5=0;
	LsavedStack=___getStackPtr();
	tmp4=-16+LsavedStack|0;
	___setStackPtr(tmp4);
	tmp1={a0:null,a1:[null],a2:null};
	__ZN11PromiseDataIiPN6client4_AnyEEC2Ev(tmp1);
	tmp2=__ZN11IdAllocatorIPFviEE8allocateIJRS1_EEEPS1_DpOT_(tmp1.a1,0);
	tmp5=oSlot;
	tmp5=__ZN11IdAllocatorIPFviEE6get_idEPS1_(tmp2,tmp5)|0;
	tmp3=tmp4|0;
	__ZN4TaskIiEC2EOS0_(tmp3,Larg0|0);
	__Z19taskToPromiseHelperIiE6Thread4TaskIT_Ei(8+tmp4|0,tmp3,tmp5);
	__ZN4TaskIiED2Ev(tmp3);
	tmp4=tmp1.a0;
	___setStackPtr(LsavedStack);
	return tmp4;
}
function __ZN11PromiseDataIiPN6client4_AnyEEC2Ev(Larg0){
	var tmp0=null,tmp1=null;
	Larg0.a1[0]=null;
	Larg0.a2=null;
	tmp0=_cheerpCreate_ZN6client9CheerpRefINS_13EventListenerEEC2Ev();
	tmp1=_cheerpCreate_ZN6client9CheerpRefINS_13EventListenerEEC2Ev();
	Larg0.a0=new Promise(function(__f,__r){tmp0.inner=__f;tmp1.inner=__r;});;
	Larg0.a1[0]=tmp0.inner;
	Larg0.a2=tmp1.inner;
}
function __ZN11IdAllocatorIPFviEE8allocateIJRS1_EEEPS1_DpOT_(Larg0,Marg0){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp0=__ZN11IdAllocatorIPFviEE12find_free_idEv()|0;
	tmp1=__Z28taskToPromiseHelperAllocatorIiE$p0;
	tmp1[tmp0]=Larg0[Marg0];
	tmp2=__Z28taskToPromiseHelperAllocatorIiE$p1;
	tmp2[tmp0]=1;
	oSlot=0+tmp0|0;
	return tmp1;
}
function __ZN11IdAllocatorIPFviEE6get_idEPS1_(Larg0,Marg0){
	var tmp0=null;
	if(Larg0!==nullArray||Marg0!==0){
		tmp0=__Z28taskToPromiseHelperAllocatorIiE$p0;
		return (__imul(Marg0,4))-(__imul(0,4))>>2|0;
	}
	return  -1|0;
}
function __Z21taskToPromiseHelperJsIiEvT_i(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp0=__ZN11IdAllocatorIPFviEE10get_objectEi(Larg1);
	tmp1=oSlot;
	tmp2=tmp0[tmp1];
	__ZN11IdAllocatorIPFviEE10deallocateEPS1_(tmp0,tmp1);
	tmp2(Larg0);
}
function __ZN11IdAllocatorIPFviEE10get_objectEi(Larg0){
	var tmp0=0,tmp1=null;
	tmp0=__Z28taskToPromiseHelperAllocatorIiE$p2|0;
	if((Larg0|0)>-1){
		if((tmp0|0)>(Larg0|0)){
			tmp1=__Z28taskToPromiseHelperAllocatorIiE$p1;
			if((tmp1[Larg0]&1)!==0){
				tmp1=__Z28taskToPromiseHelperAllocatorIiE$p0;
				oSlot=0+Larg0|0;
				return tmp1;
			}
			oSlot=0;
			return nullArray;
		}
		oSlot=0;
		return nullArray;
	}
	oSlot=0;
	return nullArray;
}
function __ZN11IdAllocatorIPFviEE10deallocateEPS1_(Larg0,Marg0){
	var tmp0=0,tmp1=null;
	tmp0=__ZN11IdAllocatorIPFviEE6get_idEPS1_(Larg0,Marg0)|0;
	tmp1=__Z28taskToPromiseHelperAllocatorIiE$p1;
	tmp1[tmp0]=0;
}
function __ZN11IdAllocatorIPFviEE12find_free_idEv(){
	var tmp0=0,tmp1=null,L$plcssa4=0;
	tmp0=__Z28taskToPromiseHelperAllocatorIiE$p2|0;
	a:{
		if((tmp0|0)>1){
			tmp1=__Z28taskToPromiseHelperAllocatorIiE$p1;
			L$plcssa4=1;
			while(1){
				if((tmp1[L$plcssa4]&1)!==0){
					L$plcssa4=L$plcssa4+1|0;
					if((L$plcssa4|0)===(tmp0|0))break a;
					continue;
				}
				break;
			}
		}else{
			L$plcssa4=1;
		}
		if((L$plcssa4|0)!==(tmp0|0))return L$plcssa4|0;
	}
	L$plcssa4=tmp0<<1;
	__Z28taskToPromiseHelperAllocatorIiE$p2=L$plcssa4;
	tmp1=__Z28taskToPromiseHelperAllocatorIiE$p0;
	if(tmp1!==nullArray||0!==0)tmp1=createPointerArray(tmp1,tmp1.length,L$plcssa4/4|0,nullObj);
	else tmp1=createPointerArray([],0,L$plcssa4/4|0,nullObj);
	__Z28taskToPromiseHelperAllocatorIiE$p0=tmp1;
	L$plcssa4=__Z28taskToPromiseHelperAllocatorIiE$p2|0;
	tmp1=__Z28taskToPromiseHelperAllocatorIiE$p1;
	if(tmp1!==nullArray||0!==0)tmp1=(function(){var __old__=tmp1;
		var __ret__=new Uint8Array(L$plcssa4/1|0);
		__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
		return __ret__;})();
	else tmp1=new Uint8Array(L$plcssa4/1|0);
	__Z28taskToPromiseHelperAllocatorIiE$p1=tmp1;
	return tmp0|0;
}
function _cheerpCreate_ZN6client9CheerpRefINS_13EventListenerEEC2Ev(){
	return new Object();
}
function __ZN7IpStack9TCPSocketC2EPN3tcp6SocketE(Larg0,Larg1){
	Larg0.a0=(Larg1|0);
}
function _cheerpCreate_ZN6client12AcceptReturnC2Ev(){
	return new Object();
}
function _sys_now(){
	return ~~ +performance.now()|0;
}
function __Z9output_jsPhi(Larg0,Marg0,Larg1){
	var tmp0=null;
	tmp0=new Uint8Array(__ZN6cheerp14MakeTypedArrayIhN6client10Uint8ArrayEEEPT0_PKT_j(Larg0,Marg0,Larg1));
	__ZL9output_cb(tmp0);
}
function __ZN6cheerp14MakeTypedArrayIhN6client10Uint8ArrayEEEPT0_PKT_j(Larg0,Marg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp0=Marg0;
	tmp1=Larg0;
	tmp1=tmp1;
	if((Larg1|0)!==0){
		if((tmp0|0)===0)if(((tmp1.length)|0)===(Larg1|0))return tmp1;
		return tmp1.subarray((+(tmp0>>>0)),(+(tmp0+Larg1>>>0)));
	}
	if((tmp0|0)===0)return tmp1;
	return tmp1.subarray((+(tmp0>>>0)));
}
function __Z14start_timeoutsv(){
	+setInterval(__ZN6cheerp8CallbackIZ14start_timeoutsvE3$_0EEPN6client13EventListenerEOT_(),10);
}
function __ZN6cheerp8CallbackIZ14start_timeoutsvE3$_0EEPN6client13EventListenerEOT_(){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZ14start_timeoutsvE3$_0EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS2_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS2_Efp_EEEOS2_(tmp0);
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvvEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIZ14start_timeoutsvE3$_0EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS2_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS2_Efp_EEEOS2_(Larg0){
	__ZN6cheerp13ClosureHelperIZ14start_timeoutsvE3$_0MS1_KFvvEE12make_closureEOS1_(Larg0);
}
function __ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvvEE14deleter_helperEPNS2_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFvvEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFvvEE14deleter_helperEPNS2_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0,Larg1){
	var tmp0=null;
	tmp0=__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE;
	if(tmp0!==null){
		tmp0.set(Larg0,Larg1);
		return;
	}
	tmp0=new Map();
	__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE=tmp0;
	tmp0.set(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIZ14start_timeoutsvE3$_0MS1_KFvvEE12make_closureEOS1_(Larg0){
	__ZN6cheerp7ClosureIFvvEEC2IZ14start_timeoutsvE3$_0EET_PNS_7utility9enable_ifIXsr6cheerp7utility14is_convertibleIS5_PS1_EE5valueEvE4typeE(Larg0);
}
function __ZN6cheerp7ClosureIFvvEEC2IZ14start_timeoutsvE3$_0EET_PNS_7utility9enable_ifIXsr6cheerp7utility14is_convertibleIS5_PS1_EE5valueEvE4typeE(Larg0){
	var tmp0=null;
	tmp0=__ZZ14start_timeoutsvEN3$_08__invokeEv;
	Larg0.a0=tmp0;
	Larg0.a1=null;
	Larg0.a2=null;
}
function __ZZ14start_timeoutsvEN3$_08__invokeEv(){
	__ZZ14start_timeoutsvENK3$_0clEv();
}
function __ZZ14start_timeoutsvENK3$_0clEv(){
	_sys_check_timeouts();
}
function __ZN7IpStack9TCPSocket19__cheerp_get_EagainEv(){
	return  -11|0;
}
function __ZN7IpStack9TCPSocket19__cheerp_get_EinvalEv(){
	return  -22|0;
}
function __ZN7IpStack9UDPSocket19__cheerp_get_EagainEv(){
	return  -11|0;
}
function __ZN7IpStack9UDPSocket19__cheerp_get_EinvalEv(){
	return  -22|0;
}
function __ZN7IpStack4initEPN6client9UpOptionsE(Larg0){
	__Z4initv();
	__Z16udpecho_raw_initv();
	__Z16tcpecho_raw_initv();
}
function __ZN7IpStack2upEPN6client9UpOptionsE(Larg0){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=0,tmp4=null,tmp5=0,tmp6=null,tmp7=null,tmp8=0,tmp9=0,tmp10=0,tmp11=null;
	LsavedStack=___getStackPtr();
	tmp1=-104+LsavedStack|0;
	___setStackPtr(tmp1);
	tmp2=88+tmp1|0;
	__ZNK6client6StringcvSsEv(tmp2,Larg0.localIp);
	tmp3=72+tmp1|0;
	__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEEC2B7v160000Ev(tmp3);
	tmp7=Larg0.ipMap;
	if(tmp7!==undefined){
		tmp4=Object.keys(tmp7);
		if(((tmp4.length)|0)>0){
			tmp8=56+tmp1|0;
			tmp9=40+tmp1|0;
			tmp10=0;
			while(1){
				tmp11=__ZN6client6TArrayIPNS_6StringEEixEd(tmp4,(+(tmp10|0)));
				tmp5=oSlot;
				tmp11=tmp11[tmp5];
				tmp6=tmp7[tmp11];
				__ZNK6client6StringcvSsEv(tmp8,tmp11);
				__ZNK6client6StringcvSsEv(tmp9,tmp6);
				__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEE7emplaceB7v160000IJSsSsEEES2_ISt14__map_iteratorISt15__tree_iteratorISt12__value_typeISsSsEPSt11__tree_nodeISB_PvElEEbEDpOT_(32+tmp1|0,tmp3,tmp8,tmp9);
				__ZNSsD2Ev(tmp9);
				__ZNSsD2Ev(tmp8);
				tmp10=tmp10+1|0;
				if((tmp10|0)<((tmp4.length)|0))continue;
				break;
			}
		}
	}
	tmp8=16+tmp1|0;
	__ZNSsC2B7v160000Ev(tmp8);
	tmp7=Larg0.dnsIp;
	if(undefined!==tmp7){
		tmp9=tmp1|0;
		__ZNK6client6StringcvSsEv(tmp9,Larg0.dnsIp);
		__ZNSsaSB7v160000EOSs(tmp8,tmp9)|0;
		__ZNSsD2Ev(tmp9);
	}
	__Z2upRKSsRKSt3mapISsSsSt4lessISsESaISt4pairIS_SsEEES0_(tmp2,tmp3,tmp8);
	__ZNSsD2Ev(tmp8);
	__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEED2B7v160000Ev(tmp3);
	__ZNSsD2Ev(tmp2);
	___setStackPtr(LsavedStack);
}
function __ZNK6client6StringcvSsEv(Larg0,Larg1){
	__ZNK6client6String6toUtf8Ev(Larg0|0,Larg1);
}
function __ZN6client6TArrayIPNS_6StringEEixEd(Larg0,Larg1){
	oSlot=0+~~Larg1|0;
	return Larg0;
}
function __ZNK6client6String6toUtf8Ev(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=0,L$psink=0;
	__ZNSsC2B7v160000Ev(Larg0|0);
	tmp0=Larg1.length;
	if((tmp0|0)!==0){
		tmp1=0;
		while(1){
			L$psink=Larg1.charCodeAt((+(tmp1>>>0)));
			if(L$psink-57344>>>0<4294965248){
				tmp2=L$psink;
			}else if(L$psink>>>0<56320){
				tmp2=L$psink<<10&1047552;
			}else{
				tmp2=(L$psink&1023|tmp2)+65536|0;
			}
			tmp1=tmp1+1|0;
			a:{
				if((tmp1|0)!==(tmp0|0))if((L$psink&56320|0)===55296)break a;
				if(tmp2>>>0<128){
					L$psink=tmp2;
				}else if(tmp2>>>0<2048){
					__ZNSs9push_backEc(Larg0|0,tmp2>>>6|192);
					L$psink=tmp2&63|128;
				}else if(tmp2>>>0<65536){
					__ZNSs9push_backEc(Larg0|0,tmp2>>>12|224);
					__ZNSs9push_backEc(Larg0|0,tmp2>>>6&63|128);
					L$psink=tmp2&63|128;
				}else{
					__ZNSs9push_backEc(Larg0|0,tmp2>>>18|240);
					__ZNSs9push_backEc(Larg0|0,tmp2>>>12&63|128);
					__ZNSs9push_backEc(Larg0|0,tmp2>>>6&63|128);
					L$psink=tmp2&63|128;
				}
				__ZNSs9push_backEc(Larg0|0,L$psink);
			}
			if((tmp1|0)!==(tmp0|0))continue;
			break;
		}
	}
}
function __ZN7IpStack4downEv(){
	__Z4downv();
}
function __ZN7IpStack5inputEPN6client10Uint8ArrayE(Larg0){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=null;
	tmp0=Larg0.length;
	tmp1=_pbuf_alloc(0,tmp0)|0;
	if((tmp1|0)!=(0|0)){
		tmp3=HEAP8;
		tmp2=HEAP32[4+tmp1>>2]|0;
		tmp3=__ZN6cheerp14MakeTypedArrayIhN6client10Uint8ArrayEEEPT0_PKT_j(tmp3,tmp2,tmp0);
		tmp3.set(Larg0);
		__ZN7IpStackL7doInputEP4pbuf(tmp1);
	}
}
function __ZN7IpStack6outputEPFvPN6client10Uint8ArrayEE(Larg0){
	__ZL9output_cb=Larg0;
}
function __ZN7IpStack7parseIPEPN6client6StringE(Larg0){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=0;
	LsavedStack=___getStackPtr();
	tmp1=-16+LsavedStack|0;
	___setStackPtr(tmp1);
	tmp2=tmp1|0;
	__ZNK6client6StringcvSsEv(tmp2,Larg0);
	tmp3=__ZN2ip4stonERKSs(tmp2)|0;
	__ZNSsD2Ev(tmp2);
	___setStackPtr(LsavedStack);
	return tmp3|0;
}
function __ZN7IpStack6dumpIPEi(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=null,tmp6=null,tmp7=0,tmp8=0;
	LsavedStack=___getStackPtr();
	tmp5=-16+LsavedStack|0;
	___setStackPtr(tmp5);
	tmp1=tmp5|0;
	__ZN2ip4ntosEi(tmp1,Larg0);
	tmp5=HEAP8;
	tmp2=__ZNKSs5c_strB7v160000Ev(tmp1)|0;
	tmp6=String();
	tmp7=0;
	while(1){
		tmp3=tmp5[tmp2+tmp7|0]|0;
		if((tmp3&255)!==0){
			tmp4=tmp3&255;
			if(tmp3<<24>-16777216){
				tmp8=tmp4;
			}else if((tmp3&255)<192){
				tmp8=(tmp4&63)+(tmp8<<6)|0;
			}else if((tmp3&255)<224){
				tmp8=tmp4&31;
			}else if((tmp3&255)<240){
				tmp8=tmp4&15;
			}else{
				tmp8=tmp4&7;
			}
			tmp7=tmp7+1|0;
			a:{
				if((tmp7|0)!==-1)if((tmp5[tmp2+tmp7|0]&192)===128)break a;
				if(tmp8>>>0<65536)tmp6=tmp6.concat(String.fromCharCode(tmp8));
				else{
					tmp6=tmp6.concat(String.fromCharCode(tmp8-65536>>>10|55296));
					tmp6=tmp6.concat(String.fromCharCode(tmp8&1023|56320));
				}
			}
			if((tmp7|0)!==-1)continue;
			__ZNSsD2Ev(tmp1);
			___setStackPtr(LsavedStack);
			return tmp6;
		}
		break;
	}
	__ZNSsD2Ev(tmp1);
	___setStackPtr(LsavedStack);
	return tmp6;
}
function __ZN7IpStack14resolveAdapterEii(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp2=__ZN7IpStackL10dnsQueriesE;
	tmp0=__ZN6client6TArrayIPFviEEixEd(tmp2,(+(Larg0|0)));
	tmp1=oSlot;
	tmp2=tmp0[tmp1];
	tmp0[tmp1]=null;
	tmp2(Larg1);
}
function __ZN6client6TArrayIPFviEEixEd(Larg0,Larg1){
	oSlot=0+~~Larg1|0;
	return Larg0;
}
function __ZN7IpStack7resolveEPN6client6StringE(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=null,tmp6=0;
	LsavedStack=___getStackPtr();
	tmp5=-16+LsavedStack|0;
	___setStackPtr(tmp5);
	tmp1=tmp5|0;
	__ZNK6client6StringcvSsEv(tmp1,Larg0);
	tmp5={a0:null,a1:[null],a2:null};
	__ZN11PromiseDataIiPN6client4_AnyEEC2Ev(tmp5);
	tmp6=__ZN7IpStackL10dnsQueriesE.indexOf(null);
	if((tmp6|0)<0){
		tmp6=__ZN7IpStackL10dnsQueriesE.length;
		+__ZN7IpStackL10dnsQueriesE.push(tmp5.a1[0]);
	}else{
		tmp2=__ZN7IpStackL10dnsQueriesE;
		tmp3=__ZN6client6TArrayIPFviEEixEd(tmp2,(+(tmp6|0)));
		tmp4=oSlot;
		tmp3[tmp4]=tmp5.a1[0];
	}
	__ZN7IpStack11resolveWasmERKSsi(tmp1,tmp6);
	tmp5=tmp5.a0;
	__ZNSsD2Ev(tmp1);
	___setStackPtr(LsavedStack);
	return tmp5;
}
function __ZN3tcp6Socket4recvEPN6client10Uint8ArrayEjj(Larg0,Larg1,Larg2,Larg3){
	var L$poptgepsqueezed7=0,tmp1=0,tmp2=0,L$plcssa=0,tmp4=0;
	L$poptgepsqueezed7=64+Larg0|0;
	if(__ZNKSt5dequeIP7tcp_pcbSaIS1_EE5emptyB7v160000Ev_icf(L$poptgepsqueezed7|0)|0)return (((HEAP32[Larg0>>2]|0)|0)!=(0|0)? -7|0: -15|0)|0;
	if((Larg3|0)!==0){
		L$plcssa=0;
		while(1){
			tmp1=__ZNSt5dequeI4PbufSaIS0_EE5frontEv(L$poptgepsqueezed7)|0;
			if(!(__ZNK4PbufcvbEv_icf(tmp1)|0))return L$plcssa|0;
			tmp4=__ZN4Pbuf4readEPN6client10Uint8ArrayEjjj(tmp1,Larg1,L$plcssa+Larg2|0,Larg3-L$plcssa|0,HEAP32[88+Larg0>>2]|0)|0;
			tmp2=(HEAP32[88+Larg0>>2]|0)+tmp4|0;
			HEAP32[88+Larg0>>2]=tmp2;
			L$plcssa=tmp4+L$plcssa|0;
			if((tmp2|0)===((__ZNK4Pbuf4sizeEv(tmp1)|0)|0)){
				__ZNSt5dequeI4PbufSaIS0_EE9pop_frontEv(L$poptgepsqueezed7);
				HEAP32[88+Larg0>>2]=0;
			}
			if((__ZNKSt5dequeIP7tcp_pcbSaIS1_EE5emptyB7v160000Ev_icf(L$poptgepsqueezed7|0)|0)^1)if((L$plcssa|0)!==(Larg3|0))continue;
			break;
		}
	}else{
		L$plcssa=0;
	}
	tmp4=HEAP32[Larg0>>2]|0;
	if((tmp4|0)!=(0|0)){
		_tcp_recved(tmp4,L$plcssa);
		return L$plcssa|0;
	}
	return L$plcssa|0;
}
function __ZN4Pbuf4readEPN6client10Uint8ArrayEjjj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var Lsmax_select=0,tmp1=null,tmp2=0,tmp3=null,tmp4=0,tmp5=0,L$plcssa12=0,L$plcssa=0;
	tmp5=HEAP32[Larg0>>2]|0;
	if((tmp5|0)==(0|0))return 0|0;
	L$plcssa12=Larg4;
	while(1){
		L$plcssa=HEAP16[10+tmp5>>1]&65535;
		if(L$plcssa12>>>0>=L$plcssa>>>0){
			tmp5=HEAP32[tmp5>>2]|0;
			if((tmp5|0)!=(0|0)){
				L$plcssa12=L$plcssa12-L$plcssa|0;
				continue;
			}
			return 0|0;
		}
		break;
	}
	L$plcssa=0;
	while(1){
		if((L$plcssa12|0)<(HEAP16[10+tmp5>>1]&65535|0)){
			Lsmax_select=L$plcssa>>>0>Larg3>>>0?L$plcssa|0:Larg3|0;
			while(1){
				if((L$plcssa|0)===(Lsmax_select|0))return Lsmax_select|0;
				tmp1=HEAP8;
				tmp2=HEAP32[4+tmp5>>2]|0;
				tmp3=__ZN6client10Uint8ArrayixEd(Larg1,(+(L$plcssa+Larg2>>>0)));
				tmp4=oSlot;
				tmp3[tmp4]=tmp1[tmp2+L$plcssa12|0]|0;
				L$plcssa12=L$plcssa12+1|0;
				L$plcssa=L$plcssa+1|0;
				if((L$plcssa12|0)<(HEAP16[10+tmp5>>1]&65535|0))continue;
				break;
			}
			L$plcssa12=0;
		}
		tmp5=HEAP32[tmp5>>2]|0;
		if((tmp5|0)!=(0|0))continue;
		break;
	}
	return L$plcssa|0;
}
function __ZN3udp6Socket4recvEPN6client10Uint8ArrayEjj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=0,tmp4=0,L$poptgepsqueezed15=0;
	LsavedStack=___getStackPtr();
	tmp1=-16+LsavedStack|0;
	___setStackPtr(tmp1);
	L$poptgepsqueezed15=20+Larg1|0;
	if(((__ZNKSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE4sizeB7v160000Ev_icf(L$poptgepsqueezed15)|0)|0)!==0){
		tmp2=tmp1|0;
		__ZNSt4pairI4PbufN3udp6Socket10PacketInfoEEC2EOS4_(tmp2,(__ZNSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE5frontEv(L$poptgepsqueezed15)|0)|0);
		tmp3=__ZSt3getB7v160000ILj0E4PbufN3udp6Socket10PacketInfoEEONSt13tuple_elementIXT_ESt4pairIT0_T1_EE4typeEOS8_(tmp2)|0;
		if(((__ZNK4Pbuf3getEv(tmp3)|0)|0)!=(0|0)){
			tmp4=__ZSt3getB7v160000ILj1E4PbufN3udp6Socket10PacketInfoEEONSt13tuple_elementIXT_ESt4pairIT0_T1_EE4typeEOS8_(tmp2)|0;
			__ZNSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE9pop_frontEv(L$poptgepsqueezed15);
			HEAP32[44+Larg1>>2]=(HEAP32[44+Larg1>>2]|0)-(__ZNK4Pbuf4sizeEv(tmp3)|0)|0;
			L$poptgepsqueezed15=__ZN4Pbuf4readEPN6client10Uint8ArrayEjjj(tmp3,Larg2,Larg3,Larg4,0)|0;
			HEAP32[8+tmp4>>2]=L$poptgepsqueezed15;
			HEAP32[Larg0>>2]=HEAP32[tmp4>>2]|0;
			HEAP32[4+Larg0>>2]=HEAP32[4+tmp4>>2]|0;
			HEAP32[8+Larg0>>2]=L$poptgepsqueezed15;
		}else __ZN3udp6Socket10PacketInfoC2Ejji(Larg0|0,0,0,0);
		__ZNSt4pairI4PbufN3udp6Socket10PacketInfoEED2Ev(tmp2);
	}else __ZN3udp6Socket10PacketInfoC2Ejji(Larg0|0,0,0,((HEAP32[Larg1>>2]|0)|0)!=(0|0)? -7|0: -15|0);
	___setStackPtr(LsavedStack);
}
function ___cxa_throw_wasm_adapter(Larg0,Larg1,Larg2){
	var LmergedArray=null,tmp1=null;
	tmp1=[0];
	tmp1[0]=(Larg1|0);
	LmergedArray=new Int32Array(2);
	LmergedArray[0]=Larg2;
	LmergedArray[1]=Larg0;
	tmp1=__ZN10__cxxabiv19Exception8allocateIJiRPSt9type_infoRjEEEPS0_DpOT_(LmergedArray,1,tmp1,0,LmergedArray,0);
	__ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(tmp1);
	;
}
function __ZN10__cxxabiv19Exception8allocateIJiRPSt9type_infoRjEEEPS0_DpOT_(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp1=__ZZN10__cxxabiv19Exception9allocatorEvE6result;
	if(tmp1!==null)return __ZN10__cxxabiv111IdAllocatorINS_9ExceptionEE8allocateIJiRPSt9type_infoRjEEEPS1_DpOT_(tmp1,Larg0,Marg0,Larg1,Marg1,Larg2,Marg2);
	tmp1={a0:nullArray,a1:nullArray,i2:0};
	tmp1.i2=16;
	tmp2=createArray_struct$p_ZN10__cxxabiv19ExceptionE(16);
	tmp1.a0=tmp2;
	tmp0=tmp1.i2|0;
	tmp2=new Uint8Array(tmp0/1|0);
	tmp1.a1=tmp2;
	__ZZN10__cxxabiv19Exception9allocatorEvE6result=tmp1;
	return __ZN10__cxxabiv111IdAllocatorINS_9ExceptionEE8allocateIJiRPSt9type_infoRjEEEPS1_DpOT_(tmp1,Larg0,Marg0,Larg1,Marg1,Larg2,Marg2);
}
function __ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(Larg0){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null;
	tmp0=Larg0.a4|0;
	tmp3=HEAP8;
	tmp1=HEAP32[4+tmp0>>2]|0;
	tmp3=_cheerpCreate_ZN6client6StringC2EPKc(tmp3,tmp1);
	tmp2=new CheerpException(tmp3);
	Larg0.a0=tmp2;
	throw tmp2;
	;
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=0,tmp4=0;
	tmp2=String();
	tmp3=0;
	while(1){
		tmp0=Larg0[Marg0+tmp3|0]|0;
		if((tmp0&255)!==0){
			tmp1=tmp0&255;
			if(tmp0<<24>-16777216){
				tmp4=tmp1;
			}else if((tmp0&255)<192){
				tmp4=(tmp1&63)+(tmp4<<6)|0;
			}else if((tmp0&255)<224){
				tmp4=tmp1&31;
			}else if((tmp0&255)<240){
				tmp4=tmp1&15;
			}else{
				tmp4=tmp1&7;
			}
			tmp3=tmp3+1|0;
			a:{
				if((tmp3|0)!==-1)if((Larg0[Marg0+tmp3|0]&192)===128)break a;
				if(tmp4>>>0<65536)tmp2=tmp2.concat(String.fromCharCode(tmp4));
				else{
					tmp2=tmp2.concat(String.fromCharCode(tmp4-65536>>>10|55296));
					tmp2=tmp2.concat(String.fromCharCode(tmp4&1023|56320));
				}
			}
			if((tmp3|0)!==-1)continue;
			return tmp2;
		}
		break;
	}
	return tmp2;
}
function __ZN10__cxxabiv111IdAllocatorINS_9ExceptionEE8allocateIJiRPSt9type_infoRjEEEPS1_DpOT_(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=0,tmp4=null,tmp5=0;
	tmp3=Larg0.i2|0;
	a:{
		b:{
			if((tmp3|0)>1){
				tmp4=Larg0.a1;
				tmp5=1;
				while(1){
					if((tmp4[tmp5]&255)!==0){
						tmp5=tmp5+1|0;
						if((tmp5|0)===(tmp3|0))break b;
						continue;
					}
					break;
				}
			}else{
				tmp5=1;
			}
			if((tmp5|0)!==(tmp3|0)){
				tmp4=Larg0.a1;
				tmp3=tmp5;
				break a;
			}
		}
		Larg0.i2=tmp3<<1;
		tmp4=Larg0.a0;
		tmp5=__imul(tmp3,96)|0;
		if(tmp4!==nullArray||0!==0)tmp4=resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp4,tmp4.length,tmp5/48|0);
		else tmp4=createArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp5/48|0);
		Larg0.a0=tmp4;
		tmp5=Larg0.i2|0;
		tmp4=Larg0.a1;
		if(tmp4!==nullArray||0!==0)tmp4=(function(){var __old__=tmp4;
			var __ret__=new Uint8Array(tmp5/1|0);
			__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
			return __ret__;})();
		else tmp4=new Uint8Array(tmp5/1|0);
		Larg0.a1=tmp4;
	}
	tmp0=Larg0.a0;
	tmp5=Larg1[Marg1]|0;
	tmp1=Larg2[Marg2]|0;
	tmp2=Larg3[Marg3]|0;
	tmp0[tmp3].a1=null;
	tmp0[tmp3].i2=tmp5;
	tmp0[tmp3].a3=null;
	tmp0[tmp3].a4=tmp1;
	tmp0[tmp3].a5=null;
	tmp0[tmp3].i6=tmp2;
	tmp0[tmp3].i7=1;
	tmp0[tmp3].i8=0;
	tmp0[tmp3].a10=null;
	tmp0[tmp3].a11=null;
	tmp4[tmp3]=1;
	return tmp0[tmp3];
}
function __ZN12_GLOBAL__N_111raiseSignalEv(){
	throw new Error('Cheerp: Signal raised');
	;
}
function __ZL16read_nodejs_argsPKN6client6StringE(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=_cheerpCreate_ZN6client6TArrayIPNS_6StringEEC2Ev();
	tmp1=(typeof process == 'undefined' ? [] : process.argv) || [];
	if(((tmp1.length)|0)!==0){
		tmp3=0;
		while(1){
			tmp2=tmp1[(+(tmp3>>>0))];
			if(tmp2.startsWith(Larg0))+tmp0.push(tmp2.substr((+((Larg0.length)|0))));
			tmp3=tmp3+1|0;
			if(tmp3>>>0<(tmp1.length)>>>0)continue;
			break;
		}
	}
	return tmp0;
}
function __ZL11read_to_bufPcjPKN6client6TArrayIPNS0_6StringEEEj(Larg0,Marg0,Larg1,Larg2,Larg3){
	var tmp0=0;
	if((Larg2.length)>>>0>Larg3>>>0){
		tmp0=__ZL14client_to_utf8PcjPKN6client6StringE(Larg0,Marg0,Larg1,Larg2[(+(Larg3>>>0))])|0;
		if(tmp0>>>0<Larg1>>>0)Larg0[Marg0+tmp0|0]=0;
		return tmp0+1|0;
	}
	return 0|0;
}
function __ZL14client_to_utf8PcjPKN6client6StringE(Larg0,Marg0,Larg1,Larg2){
	var tmp0=0,tmp1=0,Lgeptoindexphi1=0,tmp3=0,tmp4=0,L$psink=0;
	tmp0=Larg2.length;
	if((tmp0|0)===0)return 0|0;
	tmp4=0;
	tmp3=0;
	Lgeptoindexphi1=0;
	while(1){
		L$psink=Larg2.charCodeAt((+(tmp3>>>0)));
		a:{
			if((L$psink& -2048|0)===55296){
				tmp1=tmp3+1|0;
				if(tmp1>>>0<tmp0>>>0){
					tmp3=Larg2.charCodeAt((+(tmp1>>>0)));
					L$psink=((tmp3|L$psink)&1023)+65536|0;
					tmp3=tmp1;
				}else{
					L$psink=-1;
				}
			}else if(L$psink>>>0>1114111){
				L$psink=-1;
			}else{
				if(L$psink>>>0<128){
					if(tmp4>>>0<Larg1>>>0){
						Larg0[Marg0+Lgeptoindexphi1|0]=L$psink;
						Lgeptoindexphi1=Lgeptoindexphi1+1|0;
						L$psink=1;
						break a;
					}
					L$psink=1;
					break a;
				}
				if(L$psink>>>0<2048){
					if(tmp4+1>>>0<Larg1>>>0){
						Larg0[Marg0+Lgeptoindexphi1|0]=L$psink>>>6|192;
						Larg0[(Marg0+Lgeptoindexphi1|0)+1|0]=L$psink&63|128;
						Lgeptoindexphi1=Lgeptoindexphi1+2|0;
						L$psink=2;
						break a;
					}
					L$psink=2;
					break a;
				}
				if(L$psink>>>0<65536){
					if(tmp4+2>>>0<Larg1>>>0){
						Larg0[Marg0+Lgeptoindexphi1|0]=L$psink>>>12|224;
						Larg0[(Marg0+Lgeptoindexphi1|0)+1|0]=L$psink>>>6&63|128;
						Larg0[(Marg0+Lgeptoindexphi1|0)+2|0]=L$psink&63|128;
						Lgeptoindexphi1=Lgeptoindexphi1+3|0;
						L$psink=3;
						break a;
					}
					L$psink=3;
					break a;
				}
			}
			if(tmp4+3>>>0<Larg1>>>0){
				Larg0[Marg0+Lgeptoindexphi1|0]=L$psink>>>18|240;
				Larg0[(Marg0+Lgeptoindexphi1|0)+1|0]=L$psink>>>12&63|128;
				Larg0[(Marg0+Lgeptoindexphi1|0)+2|0]=L$psink>>>6&63|128;
				Larg0[(Marg0+Lgeptoindexphi1|0)+3|0]=L$psink&63|128;
				Lgeptoindexphi1=Lgeptoindexphi1+4|0;
				L$psink=4;
			}else{
				L$psink=4;
			}
		}
		tmp4=tmp4+L$psink|0;
		tmp3=tmp3+1|0;
		if(tmp3>>>0<tmp0>>>0)continue;
		break;
	}
	return tmp4|0;
}
function _cheerpCreate_ZN6client6TArrayIPNS_6StringEEC2Ev(){
	return new Array();
}
function __ZL8read_envPcjj(Larg0,Marg0,Larg1,Larg2){
	var tmp0=null;
	if(__ZGVZL8read_envPcjjE14client_environ|0)return (__ZL11read_to_bufPcjPKN6client6TArrayIPNS0_6StringEEEj(Larg0,Marg0,Larg1,__ZZL8read_envPcjjE14client_environ,Larg2)|0)|0;
	tmp0=CHEERP_ENV;
	if(tmp0!==null)tmp0=CHEERP_ENV;
	else tmp0=__ZL16read_nodejs_argsPKN6client6StringE("--cheerp-env=");
	__ZZL8read_envPcjjE14client_environ=tmp0;
	__ZGVZL8read_envPcjjE14client_environ=1;
	return (__ZL11read_to_bufPcjPKN6client6TArrayIPNS0_6StringEEEj(Larg0,Marg0,Larg1,tmp0,Larg2)|0)|0;
}
function __ZN12_GLOBAL__N_117do_syscall_writevEPK5iovecl(Larg0,Larg1){
	var tmp0=null,tmp1=null,L$plcssa=0,tmp3=0,L$poptgep=0,tmp5=0,tmp6=0;
	if(__ZGVZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr|0){
		tmp0=__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr;
	}else{
		tmp0=String();
		__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=tmp0;
		__ZGVZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=1;
	}
	tmp1=[null];
	__ZN12_GLOBAL__N_119CheerpStringBuilder9setStringEPN6client6StringE(tmp1,0,tmp0);
	if((Larg1|0)>0){
		tmp3=0;
		L$plcssa=0;
		while(1){
			L$poptgep=(tmp3<<3)+Larg0|0;
			tmp5=HEAP32[4+L$poptgep>>2]|0;
			if((tmp5|0)!==0){
				L$plcssa=tmp5+L$plcssa|0;
				tmp0=HEAP8;
				tmp6=HEAP32[L$poptgep>>2]|0;
				if((tmp5|0)>0){
					L$poptgep=0;
					while(1){
						__ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h(tmp1,0,tmp0[tmp6+L$poptgep|0]|0);
						L$poptgep=L$poptgep+1|0;
						if((L$poptgep|0)!==(tmp5|0))continue;
						break;
					}
				}
			}
			tmp3=tmp3+1|0;
			if((tmp3|0)!==(Larg1|0))continue;
			break;
		}
	}else{
		L$plcssa=0;
	}
	tmp0=__ZN12_GLOBAL__N_119CheerpStringBuilder9getStringEv(tmp1,0);
	tmp0=tmp0.split("\n");
	tmp3=tmp0.length;
	if((tmp3|0)>1){
		tmp6=0;
		tmp5=1;
		while(1){
			tmp1=__ZN6client6TArrayIPNS_6StringEEixEd(tmp0,(+(tmp6|0)));
			L$poptgep=oSlot;
			console.log(tmp1[L$poptgep]);
			tmp6=tmp5+1|0;
			if((tmp6|0)!==(tmp3|0)){
				L$poptgep=tmp6;
				tmp6=tmp5;
				tmp5=L$poptgep;
				continue;
			}
			break;
		}
	}
	tmp1=__ZN6client6TArrayIPNS_6StringEEixEd(tmp0,(+(tmp3-1|0)));
	tmp5=oSlot;
	__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=tmp1[tmp5];
	return L$plcssa|0;
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder9setStringEPN6client6StringE(Larg0,Marg0,Larg1){
	Larg0[Marg0]=Larg1;
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h(Larg0,Marg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,L$psink=0,tmp4=0;
	L$psink=__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining|0;
	tmp4=Larg1&255;
	tmp0=1069112|0;
	tmp1=1069168|0;
	a:if((Larg1&255)<192){
		if((L$psink|0)===0){
			if(Larg1<<24<=-16777216)___assert_fail(1069180|0,tmp0,79,tmp1);
			;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp4;
		}else{
			if((tmp4&192|0)!==128)___assert_fail(1069092|0,tmp0,65,tmp1);
			;
			tmp4=(__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint<<6)+(tmp4&63)|0;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp4;
			L$psink=L$psink-1|0;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=L$psink;
			if((L$psink|0)!==0)break a;
		}
		__ZN12_GLOBAL__N_119CheerpStringBuilder15outputCodepointEj(Larg0,Marg0,tmp4);
	}else{
		if((L$psink|0)!==0)___assert_fail(1069192|0,tmp0,90,tmp1);
		;
		if((Larg1&255)<224){
			tmp2=31;
			L$psink=1;
		}else{
			tmp2=(Larg1&255)<240?15|0:7|0;
			L$psink=(Larg1&255)<240?2|0:3|0;
		}
		__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=L$psink;
		__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp2&tmp4;
	}
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder9getStringEv(Larg0,Marg0){
	return Larg0[Marg0];
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder15outputCodepointEj(Larg0,Marg0,Larg1){
	var L$psink=null;
	a:{
		if(Larg1>>>0<65536){
			if((Larg1|0)===0)break a;
			L$psink=Larg0[Marg0];
			L$psink=L$psink.concat(String.fromCharCode(Larg1));
		}else{
			L$psink=Larg0[Marg0];
			L$psink=L$psink.concat(String.fromCharCode((Larg1-65536>>>10)+55296|0));
			Larg0[Marg0]=L$psink;
			L$psink=L$psink.concat(String.fromCharCode((Larg1&1023)+56320|0));
		}
		Larg0[Marg0]=L$psink;
	}
}
function ___wrapper___ZL8read_envPcjj(Larg0,Larg1,Larg2){
	return (__ZL8read_envPcjj(HEAP8,Larg0>>0,Larg1,Larg2)|0)|0;
}
function ___wrapper___Z9output_jsPhi(Larg0,Larg1){
	__Z9output_jsPhi(HEAP8,Larg0>>0,Larg1);
}
var __ZN7IpStackL10dnsQueriesE=null;
var __ZGV28taskToPromiseHelperAllocatorIiE=0;
var __Z28taskToPromiseHelperAllocatorIiE$p1=nullArray;
var __Z28taskToPromiseHelperAllocatorIiE$p2=0;
var __Z28taskToPromiseHelperAllocatorIiE$p0=nullArray;
var __ZZN10__cxxabiv19Exception9allocatorEvE6result=null;
var __ZGVZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=0;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=null;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=0;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=0;
var __ZGVZL8read_envPcjjE14client_environ=0;
var __ZZL8read_envPcjjE14client_environ=null;
var __ZL9output_cb=null;
var __ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE=null;
function constructor_struct$p_ZN10__cxxabiv19ExceptionE(){
	this.a0=null;
	this.a1=null;
	this.i2=0;
	this.a3=null;
	this.a4=0;
	this.a5=null;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.a9=null;
	this.a10=null;
	this.a11=null;
}
function create__ZN3tcp6Socket12waitOutgoingEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN3udp6Socket12waitIncomingEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN3tcp6Socket12waitIncomingEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__Z19taskToPromiseHelperIiE6Thread4TaskIT_Ei$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
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
function createPointerArray(r,s,e,v){for(var i=s;i<e;i++)r[i]=v;return r;}
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
function growLinearMemory(pages){
	try{
		var ret=memory.grow(pages);
		__heap=memory.buffer;
		assignHeaps(__heap);
		return ret;
	}catch(e){
		return -1;
	}
}
var IpStack={
	TCPSocket:null,
	UDPSocket:null,
	down:null,
	dumpIP:null,
	init:null,
	input:null,
	output:null,
	parseIP:null,
	resolve:null,
	up:null,
};
var HEAP8=null,HEAP16=null,HEAP32=null,__asm=null,__heap=null;function __dummy(){throw new Error('this should be unreachable');};
var memory=new WebAssembly.Memory({initial:30,maximum:2048});
var __start=null;
var ___assert_fail=null;
var __ZN7IpStack11resolveWasmERKSsi=null;
var __ZNSsD2Ev=null;
var __ZNSsC2B7v160000Ev=null;
var __ZNSs9push_backEc=null;
var __ZN2ip4ntosEi=null;
var __ZNKSs5c_strB7v160000Ev=null;
var __ZN2ip4stonERKSs=null;
var __ZN3udp6SocketD2Ev=null;
var __ZdlPv=null;
var __Znwj=null;
var __ZN3udp6SocketC2Ev=null;
var __ZN3tcp6SocketD2Ev=null;
var __ZN3tcp6SocketC2Ev=null;
var _pbuf_alloc=null;
var __ZN7IpStackL7doInputEP4pbuf=null;
var __Z4downv=null;
var __ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEEC2B7v160000Ev=null;
var __ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEE7emplaceB7v160000IJSsSsEEES2_ISt14__map_iteratorISt15__tree_iteratorISt12__value_typeISsSsEPSt11__tree_nodeISB_PvElEEbEDpOT_=null;
var __ZNSsaSB7v160000EOSs=null;
var __Z2upRKSsRKSt3mapISsSsSt4lessISsESaISt4pairIS_SsEEES0_=null;
var __ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEED2B7v160000Ev=null;
var __Z4initv=null;
var __Z16udpecho_raw_initv=null;
var __Z16tcpecho_raw_initv=null;
var _sys_check_timeouts=null;
var __ZN3udp6Socket5closeEv=null;
var __ZL6map_ipj=null;
var __ZNSt6vectorIhSaIhEEC2Ej=null;
var __ZNSt6vectorIhSaIhEEixB7v160000Ej=null;
var __ZNSt4spanIKhLj4294967295EEC2B7v160000IRSt6vectorIhSaIhEEEEOT_=null;
var __ZN3udp6Socket6sendtoESt4spanIKhLj4294967295EEii=null;
var __ZNSt6vectorIhSaIhEED2B7v160000Ev=null;
var __ZNKSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE4sizeB7v160000Ev_icf=null;
var __ZN3udp6Socket10PacketInfoC2Ejji=null;
var __ZNSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE5frontEv=null;
var __ZNSt4pairI4PbufN3udp6Socket10PacketInfoEEC2EOS4_=null;
var __ZSt3getB7v160000ILj0E4PbufN3udp6Socket10PacketInfoEEONSt13tuple_elementIXT_ESt4pairIT0_T1_EE4typeEOS8_=null;
var __ZNK4Pbuf3getEv=null;
var __ZSt3getB7v160000ILj1E4PbufN3udp6Socket10PacketInfoEEONSt13tuple_elementIXT_ESt4pairIT0_T1_EE4typeEOS8_=null;
var __ZNSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE9pop_frontEv=null;
var __ZNK4Pbuf4sizeEv=null;
var __ZNSt4pairI4PbufN3udp6Socket10PacketInfoEED2Ev=null;
var __ZN3udp6Socket12waitIncomingEv=null;
var __ZN4TaskIiED2Ev=null;
var __ZN4TaskIiEC2EOS0_=null;
var __Z19taskToPromiseHelperIiE6Thread4TaskIT_Ei=null;
var __ZN3udp6Socket4bindEii=null;
var __ZN3tcp6Socket13readAvailableEv=null;
var __ZN3tcp6Socket6listenEv=null;
var __ZN3tcp6Socket4bindEii=null;
var __ZN3tcp6Socket10shutdownRxEv=null;
var __ZN3tcp6Socket10shutdownTxEv=null;
var __ZN3tcp6Socket5closeEv=null;
var __ZN3tcp6Socket6acceptEv=null;
var __ZNK4PbufcvbEv_icf=null;
var __ZN3tcp6Socket13getRemoteAddrEv=null;
var __ZN3tcp6Socket13getRemotePortEv=null;
var __ZN3tcp6SocketC2EOS0_=null;
var __ZN3tcp6Socket14writeAvailableEv=null;
var __ZN3tcp6Socket4sendESt4spanIKhLj4294967295EE=null;
var __ZNKSt5dequeIP7tcp_pcbSaIS1_EE5emptyB7v160000Ev_icf=null;
var __ZNSt5dequeI4PbufSaIS0_EE5frontEv=null;
var __ZNSt5dequeI4PbufSaIS0_EE9pop_frontEv=null;
var _tcp_recved=null;
var __ZN3tcp6Socket7connectEii=null;
var __ZN3tcp6Socket12waitOutgoingEv=null;
var __ZN3tcp6Socket12waitIncomingEv=null;
var ___getStackPtr=null;
var ___setStackPtr=null;
IpStack.TCPSocket=__dummy;
IpStack.UDPSocket=__dummy;
IpStack.down=__dummy;
IpStack.dumpIP=__dummy;
IpStack.init=__dummy;
IpStack.input=__dummy;
IpStack.output=__dummy;
IpStack.parseIP=__dummy;
IpStack.resolve=__dummy;
IpStack.up=__dummy;
export default function(tmp1){
	CHEERP_ENV=(typeof tmp1 == 'undefined' ? null : tmp1.env) || null;
	CHEERP_ARGV=(typeof tmp1 == 'undefined' ? null : tmp1.argv) || null;
	return ((tmp1&&tmp1.buffer)?
	Promise.resolve(tmp1.buffer):
	fetchBuffer((tmp1&&tmp1.absPath)?tmp1.absPath:new URL('ipstack.wasm', import.meta.url))).then(tmp1=>
	WebAssembly.instantiate(tmp1,
	{i:{
			memory:memory,
			___ctor__Z28taskToPromiseHelperAllocatorIiE:___ctor__Z28taskToPromiseHelperAllocatorIiE,
			___ctor__ZN7IpStackL10dnsQueriesE:___ctor__ZN7IpStackL10dnsQueriesE,
			___cxa_throw_wasm_adapter:___cxa_throw_wasm_adapter,
			__ZN12_GLOBAL__N_117do_syscall_writevEPK5iovecl:__ZN12_GLOBAL__N_117do_syscall_writevEPK5iovecl,
			__ZN12_GLOBAL__N_111raiseSignalEv:__ZN12_GLOBAL__N_111raiseSignalEv,
			___wrapper___Z9output_jsPhi:___wrapper___Z9output_jsPhi,
			__ZN7IpStack14resolveAdapterEii:__ZN7IpStack14resolveAdapterEii,
			_sys_now:_sys_now,
			__Z14start_timeoutsv:__Z14start_timeoutsv,
			___wrapper___ZL8read_envPcjj:___wrapper___ZL8read_envPcjj,
			__Z21taskToPromiseHelperJsIiEvT_i:__Z21taskToPromiseHelperJsIiEvT_i,
			growLinearMemory:growLinearMemory,
		}})
	).then(tmp1=>{
		__asm=tmp1.instance.exports;
		__heap=memory.buffer;
		assignHeaps(__heap);
		__start=__asm.__start;
		___assert_fail=__asm.___assert_fail;
		__ZN7IpStack11resolveWasmERKSsi=__asm.__ZN7IpStack11resolveWasmERKSsi;
		__ZNSsD2Ev=__asm.__ZNSsD2Ev;
		__ZNSsC2B7v160000Ev=__asm.__ZNSsC2B7v160000Ev;
		__ZNSs9push_backEc=__asm.__ZNSs9push_backEc;
		__ZN2ip4ntosEi=__asm.__ZN2ip4ntosEi;
		__ZNKSs5c_strB7v160000Ev=__asm.__ZNKSs5c_strB7v160000Ev;
		__ZN2ip4stonERKSs=__asm.__ZN2ip4stonERKSs;
		__ZN3udp6SocketD2Ev=__asm.__ZN3udp6SocketD2Ev;
		__ZdlPv=__asm.__ZdlPv;
		__Znwj=__asm.__Znwj;
		__ZN3udp6SocketC2Ev=__asm.__ZN3udp6SocketC2Ev;
		__ZN3tcp6SocketD2Ev=__asm.__ZN3tcp6SocketD2Ev;
		__ZN3tcp6SocketC2Ev=__asm.__ZN3tcp6SocketC2Ev;
		_pbuf_alloc=__asm._pbuf_alloc;
		__ZN7IpStackL7doInputEP4pbuf=__asm.__ZN7IpStackL7doInputEP4pbuf;
		__Z4downv=__asm.__Z4downv;
		__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEEC2B7v160000Ev=__asm.__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEEC2B7v160000Ev;
		__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEE7emplaceB7v160000IJSsSsEEES2_ISt14__map_iteratorISt15__tree_iteratorISt12__value_typeISsSsEPSt11__tree_nodeISB_PvElEEbEDpOT_=__asm.__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEE7emplaceB7v160000IJSsSsEEES2_ISt14__map_iteratorISt15__tree_iteratorISt12__value_typeISsSsEPSt11__tree_nodeISB_PvElEEbEDpOT_;
		__ZNSsaSB7v160000EOSs=__asm.__ZNSsaSB7v160000EOSs;
		__Z2upRKSsRKSt3mapISsSsSt4lessISsESaISt4pairIS_SsEEES0_=__asm.__Z2upRKSsRKSt3mapISsSsSt4lessISsESaISt4pairIS_SsEEES0_;
		__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEED2B7v160000Ev=__asm.__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEED2B7v160000Ev;
		__Z4initv=__asm.__Z4initv;
		__Z16udpecho_raw_initv=__asm.__Z16udpecho_raw_initv;
		__Z16tcpecho_raw_initv=__asm.__Z16tcpecho_raw_initv;
		_sys_check_timeouts=__asm._sys_check_timeouts;
		__ZN3udp6Socket5closeEv=__asm.__ZN3udp6Socket5closeEv;
		__ZL6map_ipj=__asm.__ZL6map_ipj;
		__ZNSt6vectorIhSaIhEEC2Ej=__asm.__ZNSt6vectorIhSaIhEEC2Ej;
		__ZNSt6vectorIhSaIhEEixB7v160000Ej=__asm.__ZNSt6vectorIhSaIhEEixB7v160000Ej;
		__ZNSt4spanIKhLj4294967295EEC2B7v160000IRSt6vectorIhSaIhEEEEOT_=__asm.__ZNSt4spanIKhLj4294967295EEC2B7v160000IRSt6vectorIhSaIhEEEEOT_;
		__ZN3udp6Socket6sendtoESt4spanIKhLj4294967295EEii=__asm.__ZN3udp6Socket6sendtoESt4spanIKhLj4294967295EEii;
		__ZNSt6vectorIhSaIhEED2B7v160000Ev=__asm.__ZNSt6vectorIhSaIhEED2B7v160000Ev;
		__ZNKSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE4sizeB7v160000Ev_icf=__asm.__ZNKSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE4sizeB7v160000Ev_icf;
		__ZN3udp6Socket10PacketInfoC2Ejji=__asm.__ZN3udp6Socket10PacketInfoC2Ejji;
		__ZNSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE5frontEv=__asm.__ZNSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE5frontEv;
		__ZNSt4pairI4PbufN3udp6Socket10PacketInfoEEC2EOS4_=__asm.__ZNSt4pairI4PbufN3udp6Socket10PacketInfoEEC2EOS4_;
		__ZSt3getB7v160000ILj0E4PbufN3udp6Socket10PacketInfoEEONSt13tuple_elementIXT_ESt4pairIT0_T1_EE4typeEOS8_=__asm.__ZSt3getB7v160000ILj0E4PbufN3udp6Socket10PacketInfoEEONSt13tuple_elementIXT_ESt4pairIT0_T1_EE4typeEOS8_;
		__ZNK4Pbuf3getEv=__asm.__ZNK4Pbuf3getEv;
		__ZSt3getB7v160000ILj1E4PbufN3udp6Socket10PacketInfoEEONSt13tuple_elementIXT_ESt4pairIT0_T1_EE4typeEOS8_=__asm.__ZSt3getB7v160000ILj1E4PbufN3udp6Socket10PacketInfoEEONSt13tuple_elementIXT_ESt4pairIT0_T1_EE4typeEOS8_;
		__ZNSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE9pop_frontEv=__asm.__ZNSt5dequeISt4pairI4PbufN3udp6Socket10PacketInfoEESaIS5_EE9pop_frontEv;
		__ZNK4Pbuf4sizeEv=__asm.__ZNK4Pbuf4sizeEv;
		__ZNSt4pairI4PbufN3udp6Socket10PacketInfoEED2Ev=__asm.__ZNSt4pairI4PbufN3udp6Socket10PacketInfoEED2Ev;
		__ZN3udp6Socket12waitIncomingEv=__asm.__ZN3udp6Socket12waitIncomingEv;
		__ZN4TaskIiED2Ev=__asm.__ZN4TaskIiED2Ev;
		__ZN4TaskIiEC2EOS0_=__asm.__ZN4TaskIiEC2EOS0_;
		__Z19taskToPromiseHelperIiE6Thread4TaskIT_Ei=__asm.__Z19taskToPromiseHelperIiE6Thread4TaskIT_Ei;
		__ZN3udp6Socket4bindEii=__asm.__ZN3udp6Socket4bindEii;
		__ZN3tcp6Socket13readAvailableEv=__asm.__ZN3tcp6Socket13readAvailableEv;
		__ZN3tcp6Socket6listenEv=__asm.__ZN3tcp6Socket6listenEv;
		__ZN3tcp6Socket4bindEii=__asm.__ZN3tcp6Socket4bindEii;
		__ZN3tcp6Socket10shutdownRxEv=__asm.__ZN3tcp6Socket10shutdownRxEv;
		__ZN3tcp6Socket10shutdownTxEv=__asm.__ZN3tcp6Socket10shutdownTxEv;
		__ZN3tcp6Socket5closeEv=__asm.__ZN3tcp6Socket5closeEv;
		__ZN3tcp6Socket6acceptEv=__asm.__ZN3tcp6Socket6acceptEv;
		__ZNK4PbufcvbEv_icf=__asm.__ZNK4PbufcvbEv_icf;
		__ZN3tcp6Socket13getRemoteAddrEv=__asm.__ZN3tcp6Socket13getRemoteAddrEv;
		__ZN3tcp6Socket13getRemotePortEv=__asm.__ZN3tcp6Socket13getRemotePortEv;
		__ZN3tcp6SocketC2EOS0_=__asm.__ZN3tcp6SocketC2EOS0_;
		__ZN3tcp6Socket14writeAvailableEv=__asm.__ZN3tcp6Socket14writeAvailableEv;
		__ZN3tcp6Socket4sendESt4spanIKhLj4294967295EE=__asm.__ZN3tcp6Socket4sendESt4spanIKhLj4294967295EE;
		__ZNKSt5dequeIP7tcp_pcbSaIS1_EE5emptyB7v160000Ev_icf=__asm.__ZNKSt5dequeIP7tcp_pcbSaIS1_EE5emptyB7v160000Ev_icf;
		__ZNSt5dequeI4PbufSaIS0_EE5frontEv=__asm.__ZNSt5dequeI4PbufSaIS0_EE5frontEv;
		__ZNSt5dequeI4PbufSaIS0_EE9pop_frontEv=__asm.__ZNSt5dequeI4PbufSaIS0_EE9pop_frontEv;
		_tcp_recved=__asm._tcp_recved;
		__ZN3tcp6Socket7connectEii=__asm.__ZN3tcp6Socket7connectEii;
		__ZN3tcp6Socket12waitOutgoingEv=__asm.__ZN3tcp6Socket12waitOutgoingEv;
		__ZN3tcp6Socket12waitIncomingEv=__asm.__ZN3tcp6Socket12waitIncomingEv;
		___getStackPtr=__asm.___getStackPtr;
		___setStackPtr=__asm.___setStackPtr;
		IpStack.TCPSocket=function (){
			this.this=__ZN7IpStack9TCPSocket3newEv();
		};
		IpStack.TCPSocket.prototype.accept=function(){
			return __ZN7IpStack9TCPSocket6acceptEv(this.this);
		};
		IpStack.TCPSocket.prototype.bind=function(a0){
			return __ZN7IpStack9TCPSocket4bindEi(this.this,a0);
		};
		IpStack.TCPSocket.prototype.close=function(){
			return __ZN7IpStack9TCPSocket5closeEv(this.this);
		};
		IpStack.TCPSocket.prototype.connect=function(a0,a1){
			return __ZN7IpStack9TCPSocket7connectEii(this.this,a0,a1);
		};
		IpStack.TCPSocket.prototype.delete=function(){
			return __ZN7IpStack9TCPSocket6deleteEv(this.this);
		};
		IpStack.TCPSocket.prototype.listen=function(){
			return __ZN7IpStack9TCPSocket6listenEv(this.this);
		};
		IpStack.TCPSocket.prototype.readAvailable=function(){
			return __ZN7IpStack9TCPSocket13readAvailableEv(this.this);
		};
		IpStack.TCPSocket.prototype.recv=function(a0,a1,a2){
			return __ZN7IpStack9TCPSocket4recvEPN6client10Uint8ArrayEjj(this.this,a0,a1,a2);
		};
		IpStack.TCPSocket.prototype.send=function(a0,a1,a2){
			return __ZN7IpStack9TCPSocket4sendEPN6client10Uint8ArrayEjj(this.this,a0,a1,a2);
		};
		IpStack.TCPSocket.prototype.shutdownRx=function(){
			return __ZN7IpStack9TCPSocket10shutdownRxEv(this.this);
		};
		IpStack.TCPSocket.prototype.shutdownTx=function(){
			return __ZN7IpStack9TCPSocket10shutdownTxEv(this.this);
		};
		IpStack.TCPSocket.prototype.waitIncoming=function(){
			return __ZN7IpStack9TCPSocket12waitIncomingEv(this.this);
		};
		IpStack.TCPSocket.prototype.waitOutgoing=function(){
			return __ZN7IpStack9TCPSocket12waitOutgoingEv(this.this);
		};
		Object.defineProperty(IpStack.TCPSocket,'Eagain',{
			get:__ZN7IpStack9TCPSocket19__cheerp_get_EagainEv,
		});
		Object.defineProperty(IpStack.TCPSocket,'Einval',{
			get:__ZN7IpStack9TCPSocket19__cheerp_get_EinvalEv,
		});
		IpStack.UDPSocket=function (){
			this.this=__ZN7IpStack9UDPSocket3newEv();
		};
		IpStack.UDPSocket.prototype.bind=function(a0){
			return __ZN7IpStack9UDPSocket4bindEi(this.this,a0);
		};
		IpStack.UDPSocket.prototype.close=function(){
			return __ZN7IpStack9UDPSocket5closeEv(this.this);
		};
		IpStack.UDPSocket.prototype.delete=function(){
			return __ZN7IpStack9UDPSocket6deleteEv(this.this);
		};
		IpStack.UDPSocket.prototype.recv=function(a0,a1,a2,a3){
			return __ZN7IpStack9UDPSocket4recvEPN6client10Uint8ArrayEjjPNS1_8AddrInfoE(this.this,a0,a1,a2,a3);
		};
		IpStack.UDPSocket.prototype.sendto=function(a0,a1,a2){
			return __ZN7IpStack9UDPSocket6sendtoEPN6client10Uint8ArrayEii(this.this,a0,a1,a2);
		};
		IpStack.UDPSocket.prototype.waitIncoming=function(){
			return __ZN7IpStack9UDPSocket12waitIncomingEv(this.this);
		};
		Object.defineProperty(IpStack.UDPSocket,'Eagain',{
			get:__ZN7IpStack9UDPSocket19__cheerp_get_EagainEv,
		});
		Object.defineProperty(IpStack.UDPSocket,'Einval',{
			get:__ZN7IpStack9UDPSocket19__cheerp_get_EinvalEv,
		});
		IpStack.down=__ZN7IpStack4downEv;
		IpStack.dumpIP=__ZN7IpStack6dumpIPEi;
		IpStack.init=__ZN7IpStack4initEPN6client9UpOptionsE;
		IpStack.input=__ZN7IpStack5inputEPN6client10Uint8ArrayE;
		IpStack.output=__ZN7IpStack6outputEPFvPN6client10Uint8ArrayEE;
		IpStack.parseIP=__ZN7IpStack7parseIPEPN6client6StringE;
		IpStack.resolve=__ZN7IpStack7resolveEPN6client6StringE;
		IpStack.up=__ZN7IpStack2upEPN6client9UpOptionsE;
		__asm.__start();
		var __export={
			IpStack:IpStack,
		};
		return __export;
	});
}
function assignHeaps(tmp1){
	HEAP8=new Uint8Array(tmp1);
	HEAP16=new Uint16Array(tmp1);
	HEAP32=new Int32Array(tmp1);
}
