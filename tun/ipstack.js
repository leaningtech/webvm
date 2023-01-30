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
function __ZN7IpStack9TCPSocket10shutdownRxEv(Lthis){
	__ZN3tcp6Socket10shutdownRxEv(Lthis.a0|0);
}
function __ZN7IpStack9TCPSocket10shutdownTxEv(Lthis){
	__ZN3tcp6Socket10shutdownTxEv(Lthis.a0|0);
}
function __ZN7IpStack9TCPSocket4recvEPN6client13EventListenerE(Lthis,Mthis,Ll){
	var tmp0=null;
	Lthis[Mthis].a2=Ll;
	tmp0=__ZN7IpStack9TCPSocket9allocatorE$p0;
	__ZN7IpStack9TCPSocket11recvAdapterEiPN3tcp6SocketE((__imul(Mthis,16))-(__imul(0,16))>>4,Lthis[Mthis].a0|0);
}
function __ZN7IpStack9TCPSocket4sendEPN6client10Uint8ArrayE(Lthis,Ldata){
	var LsavedStack=null,Lbuf=0,tmp2=null,tmp2o=0,Li$p010=0;
	LsavedStack=___getStackPtr();
	tmp2=-16+LsavedStack|0;
	___setStackPtr(tmp2);
	Lbuf=tmp2|0;
	__ZNSt6vectorIhSaIhEEC2Ej(Lbuf,~~ +Ldata.length);
	if( +Ldata.length>0){
		tmp2o=HEAP32[Lbuf>>2];
		tmp2=HEAP8;
		Li$p010=0;
		while(1){
			tmp2[tmp2o+Li$p010|0]=Ldata[0+Li$p010|0]|0;
			Li$p010=Li$p010+1|0;
			if( +Ldata.length>(+(Li$p010|0)))continue;
			break;
		}
	}
	Li$p010=__ZN7IpStack9TCPSocket11sendAdapterEPN3tcp6SocketERKSt6vectorIhSaIhEE(Lthis.a0|0,Lbuf)|0;
	__ZNSt6vectorIhSaIhEED2B7v160000Ev(Lbuf);
	___setStackPtr(LsavedStack);
	return Li$p010|0;
}
function __ZN7IpStack9TCPSocket5closeEv(Lthis,Mthis){
	var Lsub$pptr$pdiv$pi$pi$pi=0,tmp1=0,tmp2=null;
	tmp2=__ZN7IpStack9TCPSocket9allocatorE$p0;
	Lsub$pptr$pdiv$pi$pi$pi=(__imul(Mthis,16))-(__imul(0,16))>>4;
	tmp1=tmp2[Lsub$pptr$pdiv$pi$pi$pi].a0|0;
	a:if((tmp1|0)!=(0|0)){
		__ZN3tcp6Socket5closeEv(tmp1);
		break a;
	}
	tmp2=__ZN7IpStack9TCPSocket9allocatorE$p1;
	tmp2[Lsub$pptr$pdiv$pi$pi$pi]=0;
}
function __ZN7IpStack9TCPSocket6createEv(){
	var tmp0=null,Lid$p0$plcssa27$pi$pi=0,tmp2=null,Lid$p021$pi$pi=0;
	Lid$p0$plcssa27$pi$pi=__ZN7IpStack9TCPSocket9allocatorE$p2|0;
	a:{
		b:{
			if((Lid$p0$plcssa27$pi$pi|0)>1){
				tmp2=__ZN7IpStack9TCPSocket9allocatorE$p1;
				Lid$p021$pi$pi=1;
				while(1){
					if((tmp2[Lid$p021$pi$pi]&255)!==0){
						Lid$p021$pi$pi=Lid$p021$pi$pi+1|0;
						if((Lid$p021$pi$pi|0)===(Lid$p0$plcssa27$pi$pi|0))break b;
						continue;
					}
					break;
				}
			}else{
				Lid$p021$pi$pi=1;
			}
			if((Lid$p021$pi$pi|0)===(Lid$p0$plcssa27$pi$pi|0))break b;
			Lid$p0$plcssa27$pi$pi=Lid$p021$pi$pi;
			break a;
		}
		Lid$p021$pi$pi=Lid$p0$plcssa27$pi$pi<<1;
		__ZN7IpStack9TCPSocket9allocatorE$p2=Lid$p021$pi$pi;
		tmp2=__ZN7IpStack9TCPSocket9allocatorE$p0;
		b:{
			if(tmp2!==nullArray||0!==0){
				tmp2=resizeArray_class$p_ZN7IpStack9TCPSocketE(tmp2,tmp2.length,Lid$p021$pi$pi/16|0);
				break b;
			}
			tmp2=createArray_class$p_ZN7IpStack9TCPSocketE(Lid$p021$pi$pi/16|0);
		}
		__ZN7IpStack9TCPSocket9allocatorE$p0=tmp2;
		Lid$p021$pi$pi=__ZN7IpStack9TCPSocket9allocatorE$p2|0;
		tmp2=__ZN7IpStack9TCPSocket9allocatorE$p1;
		b:{
			if(tmp2!==nullArray||0!==0){
				tmp2=(function(){var __old__=tmp2;
					var __ret__=new Uint8Array(Lid$p021$pi$pi/1|0);
					__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
					return __ret__;})();
				break b;
			}
			tmp2=new Uint8Array(Lid$p021$pi$pi/1|0);
		}
		__ZN7IpStack9TCPSocket9allocatorE$p1=tmp2;
		break a;
	}
	tmp2=__ZN7IpStack9TCPSocket9allocatorE$p0;
	Lid$p021$pi$pi=_malloc(88)|0;
	__ZN3tcp6SocketC2Ev(Lid$p021$pi$pi);
	tmp2[Lid$p0$plcssa27$pi$pi].a0=Lid$p021$pi$pi;
	tmp2[Lid$p0$plcssa27$pi$pi].a1=null;
	tmp2[Lid$p0$plcssa27$pi$pi].a2=null;
	tmp0=__ZN7IpStack9TCPSocket9allocatorE$p1;
	tmp0[Lid$p0$plcssa27$pi$pi]=1;
	oSlot=0+Lid$p0$plcssa27$pi$pi|0;
	return tmp2;
}
function __ZN7IpStack9TCPSocket6deleteEv(Lthis){
	var tmp0=0;
	tmp0=Lthis.a0|0;
	a:if((tmp0|0)!=(0|0)){
		__ZN3tcp6Socket5closeEv(tmp0);
		break a;
	}
}
function __ZN7IpStack9TCPSocket6listenEiPN6client8CallbackIvJPS0_iiiEEE(Lthis,Mthis,LlocalPort,Lcb){
	var tmp0=null,Lcall=0;
	Lcall=__ZN3tcp6Socket4bindEii(Lthis[Mthis].a0|0,LlocalPort)|0;
	if((Lcall&255)!==0)return Lcall<<24>>24|0;
	Lcall=__ZN3tcp6Socket6listenEv(Lthis[Mthis].a0|0)|0;
	if((Lcall&255)!==0)return Lcall<<24>>24|0;
	Lthis[Mthis].a3=Lcb;
	tmp0=__ZN7IpStack9TCPSocket9allocatorE$p0;
	__ZN7IpStack9TCPSocket13acceptAdapterEiPN3tcp6SocketE((__imul(Mthis,16))-(__imul(0,16))>>4,Lthis[Mthis].a0|0);
	return 0|0;
}
function __ZN7IpStack9TCPSocket7connectEiiiPN6client13EventListenerE(Lthis,Mthis,LlocalPort,Lip,Lport,Ll){
	var tmp0=null,Lret$p0$pi=0,L__root$paddr$p04$pi$pi$pi$pi=0,L__result$paddr$p05$pi$pi$pi$pi=0;
	Lret$p0$pi=4+1060688|0;
	L__root$paddr$p04$pi$pi$pi$pi=HEAP32[Lret$p0$pi>>2]|0;
	a:if((L__root$paddr$p04$pi$pi$pi$pi|0)!=(0|0)){
		L__result$paddr$p05$pi$pi$pi$pi=Lret$p0$pi;
		while(1){
			b:{
				if(HEAP32[16+L__root$paddr$p04$pi$pi$pi$pi>>2]>>>0<Lip>>>0){
					L__root$paddr$p04$pi$pi$pi$pi=HEAP32[4+L__root$paddr$p04$pi$pi$pi$pi>>2]|0;
					break b;
				}
				L__result$paddr$p05$pi$pi$pi$pi=L__root$paddr$p04$pi$pi$pi$pi|0;
				L__root$paddr$p04$pi$pi$pi$pi=HEAP32[L__root$paddr$p04$pi$pi$pi$pi>>2]|0;
			}
			if((L__root$paddr$p04$pi$pi$pi$pi|0)!=(0|0))continue;
			break;
		}
		if((L__result$paddr$p05$pi$pi$pi$pi|0)==(Lret$p0$pi|0)){
			Lret$p0$pi=Lip;
			break a;
		}
		if(HEAP32[16+L__result$paddr$p05$pi$pi$pi$pi>>2]>>>0>Lip>>>0){
			Lret$p0$pi=Lip;
			break a;
		}
		Lret$p0$pi=HEAP32[20+L__result$paddr$p05$pi$pi$pi$pi>>2]|0;
	}else{
		Lret$p0$pi=Lip;
	}
	Lthis[Mthis].a1=Ll;
	L__result$paddr$p05$pi$pi$pi$pi=__ZN3tcp6Socket4bindEii(Lthis[Mthis].a0|0,LlocalPort)|0;
	if((L__result$paddr$p05$pi$pi$pi$pi&255)!==0){
		Lret$p0$pi=L__result$paddr$p05$pi$pi$pi$pi<<24>>24;
		Lthis[Mthis].a1(Lret$p0$pi);
		Lthis[Mthis].a1=null;
		return Lret$p0$pi|0;
	}
	tmp0=__ZN7IpStack9TCPSocket9allocatorE$p0;
	Lret$p0$pi=__ZN7IpStack9TCPSocket11connAdapterEiPN3tcp6SocketEii((__imul(Mthis,16))-(__imul(0,16))>>4,Lthis[Mthis].a0|0,Lret$p0$pi,Lport)|0;
	if((Lret$p0$pi|0)!==0){
		Lthis[Mthis].a1(Lret$p0$pi);
		Lthis[Mthis].a1=null;
		return Lret$p0$pi|0;
	}
	return 0|0;
}
function __ZN7IpStack9TCPSocket7disposeEv(Lthis,Mthis){
	var Lsub$pptr$pdiv$pi$pi=0,tmp1=0,tmp2=null;
	tmp2=__ZN7IpStack9TCPSocket9allocatorE$p0;
	Lsub$pptr$pdiv$pi$pi=(__imul(Mthis,16))-(__imul(0,16))>>4;
	tmp1=tmp2[Lsub$pptr$pdiv$pi$pi].a0|0;
	a:if((tmp1|0)!=(0|0)){
		__ZN3tcp6Socket5closeEv(tmp1);
		break a;
	}
	tmp2=__ZN7IpStack9TCPSocket9allocatorE$p1;
	tmp2[Lsub$pptr$pdiv$pi$pi]=0;
}
function __ZN7IpStack9UDPSocket4bindEi(Lthis,LlocalPort){
	return (__ZN3udp6Socket4bindEii(Lthis.a1|0,LlocalPort)|0)<<24>>24|0;
}
function __ZN7IpStack9UDPSocket4recvEPN6client8CallbackIvJPNS1_10Uint8ArrayEiiEEE(Lthis,Mthis,Lcb){
	var tmp0=null;
	Lthis[Mthis].a0=Lcb;
	tmp0=__ZN7IpStack9UDPSocket9allocatorE$p0;
	__ZN7IpStack9UDPSocket11recvAdapterEiPN3udp6SocketE((__imul(Mthis,8))-(__imul(0,8))>>3,Lthis[Mthis].a1|0);
}
function __ZN7IpStack9UDPSocket5closeEv(Lthis,Mthis){
	var Lsub$pptr$pdiv$pi$pi$pi=0,tmp1=0,tmp2=null;
	tmp2=__ZN7IpStack9UDPSocket9allocatorE$p0;
	Lsub$pptr$pdiv$pi$pi$pi=(__imul(Mthis,8))-(__imul(0,8))>>3;
	tmp1=tmp2[Lsub$pptr$pdiv$pi$pi$pi].a1|0;
	a:if((tmp1|0)!=(0|0)){
		__ZN3udp6Socket5closeEv(tmp1);
		break a;
	}
	tmp2=__ZN7IpStack9UDPSocket9allocatorE$p1;
	tmp2[Lsub$pptr$pdiv$pi$pi$pi]=0;
}
function __ZN7IpStack9UDPSocket6createEv(){
	var tmp0=null,Lid$p0$plcssa27$pi$pi=0,tmp2=null,Lid$p021$pi$pi=0;
	Lid$p0$plcssa27$pi$pi=__ZN7IpStack9UDPSocket9allocatorE$p2|0;
	a:{
		b:{
			if((Lid$p0$plcssa27$pi$pi|0)>1){
				tmp2=__ZN7IpStack9UDPSocket9allocatorE$p1;
				Lid$p021$pi$pi=1;
				while(1){
					if((tmp2[Lid$p021$pi$pi]&255)!==0){
						Lid$p021$pi$pi=Lid$p021$pi$pi+1|0;
						if((Lid$p021$pi$pi|0)===(Lid$p0$plcssa27$pi$pi|0))break b;
						continue;
					}
					break;
				}
			}else{
				Lid$p021$pi$pi=1;
			}
			if((Lid$p021$pi$pi|0)===(Lid$p0$plcssa27$pi$pi|0))break b;
			Lid$p0$plcssa27$pi$pi=Lid$p021$pi$pi;
			break a;
		}
		Lid$p021$pi$pi=Lid$p0$plcssa27$pi$pi<<1;
		__ZN7IpStack9UDPSocket9allocatorE$p2=Lid$p021$pi$pi;
		tmp2=__ZN7IpStack9UDPSocket9allocatorE$p0;
		b:{
			if(tmp2!==nullArray||0!==0){
				tmp2=resizeArray_class$p_ZN7IpStack9UDPSocketE(tmp2,tmp2.length,Lid$p021$pi$pi/8|0);
				break b;
			}
			tmp2=createArray_class$p_ZN7IpStack9UDPSocketE(Lid$p021$pi$pi/8|0);
		}
		__ZN7IpStack9UDPSocket9allocatorE$p0=tmp2;
		Lid$p021$pi$pi=__ZN7IpStack9UDPSocket9allocatorE$p2|0;
		tmp2=__ZN7IpStack9UDPSocket9allocatorE$p1;
		b:{
			if(tmp2!==nullArray||0!==0){
				tmp2=(function(){var __old__=tmp2;
					var __ret__=new Uint8Array(Lid$p021$pi$pi/1|0);
					__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
					return __ret__;})();
				break b;
			}
			tmp2=new Uint8Array(Lid$p021$pi$pi/1|0);
		}
		__ZN7IpStack9UDPSocket9allocatorE$p1=tmp2;
		break a;
	}
	tmp2=__ZN7IpStack9UDPSocket9allocatorE$p0;
	Lid$p021$pi$pi=_malloc(32)|0;
	__ZN3udp6SocketC2Ev(Lid$p021$pi$pi);
	tmp2[Lid$p0$plcssa27$pi$pi].a1=Lid$p021$pi$pi;
	tmp0=__ZN7IpStack9UDPSocket9allocatorE$p1;
	tmp0[Lid$p0$plcssa27$pi$pi]=1;
	oSlot=0+Lid$p0$plcssa27$pi$pi|0;
	return tmp2;
}
function __ZN7IpStack9UDPSocket6deleteEv(Lthis){
	var tmp0=0;
	tmp0=Lthis.a1|0;
	a:if((tmp0|0)!=(0|0)){
		__ZN3udp6Socket5closeEv(tmp0);
		break a;
	}
}
function __ZN7IpStack9UDPSocket6sendtoEPN6client10Uint8ArrayEii(Lthis,Ldata,Laddr,Lport){
	var LsavedStack=null,tmp1=null,tmp1o=0,Lret$p0$pi=0,L__root$paddr$p04$pi$pi$pi$pi=0,L__result$paddr$p05$pi$pi$pi$pi=0;
	LsavedStack=___getStackPtr();
	tmp1=-16+LsavedStack|0;
	___setStackPtr(tmp1);
	Lret$p0$pi=4+1060688|0;
	L__root$paddr$p04$pi$pi$pi$pi=HEAP32[Lret$p0$pi>>2]|0;
	a:if((L__root$paddr$p04$pi$pi$pi$pi|0)!=(0|0)){
		L__result$paddr$p05$pi$pi$pi$pi=Lret$p0$pi;
		while(1){
			b:{
				if(HEAP32[16+L__root$paddr$p04$pi$pi$pi$pi>>2]>>>0<Laddr>>>0){
					L__root$paddr$p04$pi$pi$pi$pi=HEAP32[4+L__root$paddr$p04$pi$pi$pi$pi>>2]|0;
					break b;
				}
				L__result$paddr$p05$pi$pi$pi$pi=L__root$paddr$p04$pi$pi$pi$pi|0;
				L__root$paddr$p04$pi$pi$pi$pi=HEAP32[L__root$paddr$p04$pi$pi$pi$pi>>2]|0;
			}
			if((L__root$paddr$p04$pi$pi$pi$pi|0)!=(0|0))continue;
			break;
		}
		if((L__result$paddr$p05$pi$pi$pi$pi|0)==(Lret$p0$pi|0)){
			Lret$p0$pi=Laddr;
			break a;
		}
		if(HEAP32[16+L__result$paddr$p05$pi$pi$pi$pi>>2]>>>0>Laddr>>>0){
			Lret$p0$pi=Laddr;
			break a;
		}
		Lret$p0$pi=HEAP32[20+L__result$paddr$p05$pi$pi$pi$pi>>2]|0;
	}else{
		Lret$p0$pi=Laddr;
	}
	L__root$paddr$p04$pi$pi$pi$pi=tmp1|0;
	__ZNSt6vectorIhSaIhEEC2Ej(L__root$paddr$p04$pi$pi$pi$pi,~~ +Ldata.length);
	if( +Ldata.length>0){
		tmp1o=HEAP32[L__root$paddr$p04$pi$pi$pi$pi>>2];
		tmp1=HEAP8;
		L__result$paddr$p05$pi$pi$pi$pi=0;
		while(1){
			tmp1[tmp1o+L__result$paddr$p05$pi$pi$pi$pi|0]=Ldata[0+L__result$paddr$p05$pi$pi$pi$pi|0]|0;
			L__result$paddr$p05$pi$pi$pi$pi=L__result$paddr$p05$pi$pi$pi$pi+1|0;
			if( +Ldata.length>(+(L__result$paddr$p05$pi$pi$pi$pi|0)))continue;
			break;
		}
	}
	Lret$p0$pi=__ZN7IpStack9UDPSocket13sendToAdapterEPN3udp6SocketERKSt6vectorIhSaIhEEii(Lthis.a1|0,L__root$paddr$p04$pi$pi$pi$pi,Lret$p0$pi,Lport)|0;
	__ZNSt6vectorIhSaIhEED2B7v160000Ev(L__root$paddr$p04$pi$pi$pi$pi);
	___setStackPtr(LsavedStack);
	return Lret$p0$pi|0;
}
function __ZN7IpStack9UDPSocket7disposeEv(Lthis,Mthis){
	var Lsub$pptr$pdiv$pi$pi=0,tmp1=0,tmp2=null;
	tmp2=__ZN7IpStack9UDPSocket9allocatorE$p0;
	Lsub$pptr$pdiv$pi$pi=(__imul(Mthis,8))-(__imul(0,8))>>3;
	tmp1=tmp2[Lsub$pptr$pdiv$pi$pi].a1|0;
	a:if((tmp1|0)!=(0|0)){
		__ZN3udp6Socket5closeEv(tmp1);
		break a;
	}
	tmp2=__ZN7IpStack9UDPSocket9allocatorE$p1;
	tmp2[Lsub$pptr$pdiv$pi$pi]=0;
}
function __ZN7IpStack9UDPSocket8callRecvEiPhjii(Lid,Ldata,Mdata,Llen,Laddr,Lport){
	var Lret$p0$pi=0,L__root$paddr$p04$pi$pi$pi$pi=0,L__result$paddr$p05$pi$pi$pi$pi=0,Lretval$p0$pi=null,Lcall11$pi$pi=null;
	Lret$p0$pi=4+1060688|0;
	L__root$paddr$p04$pi$pi$pi$pi=HEAP32[Lret$p0$pi>>2]|0;
	a:if((L__root$paddr$p04$pi$pi$pi$pi|0)!=(0|0)){
		L__result$paddr$p05$pi$pi$pi$pi=Lret$p0$pi;
		while(1){
			b:{
				if(HEAP32[16+L__root$paddr$p04$pi$pi$pi$pi>>2]>>>0<Laddr>>>0){
					L__root$paddr$p04$pi$pi$pi$pi=HEAP32[4+L__root$paddr$p04$pi$pi$pi$pi>>2]|0;
					break b;
				}
				L__result$paddr$p05$pi$pi$pi$pi=L__root$paddr$p04$pi$pi$pi$pi|0;
				L__root$paddr$p04$pi$pi$pi$pi=HEAP32[L__root$paddr$p04$pi$pi$pi$pi>>2]|0;
			}
			if((L__root$paddr$p04$pi$pi$pi$pi|0)!=(0|0))continue;
			break;
		}
		if((L__result$paddr$p05$pi$pi$pi$pi|0)==(Lret$p0$pi|0)){
			Lret$p0$pi=Laddr;
			break a;
		}
		if(HEAP32[16+L__result$paddr$p05$pi$pi$pi$pi>>2]>>>0>Laddr>>>0){
			Lret$p0$pi=Laddr;
			break a;
		}
		Lret$p0$pi=HEAP32[20+L__result$paddr$p05$pi$pi$pi$pi>>2]|0;
	}else{
		Lret$p0$pi=Laddr;
	}
	L__result$paddr$p05$pi$pi$pi$pi=__ZN7IpStack9UDPSocket9allocatorE$p2|0;
	a:if((Lid|0)>-1){
		if((L__result$paddr$p05$pi$pi$pi$pi|0)>(Lid|0)){
			Lretval$p0$pi=__ZN7IpStack9UDPSocket9allocatorE$p1;
			if((Lretval$p0$pi[Lid]&255)!==0){
				Lretval$p0$pi=__ZN7IpStack9UDPSocket9allocatorE$p0;
				Lretval$p0$pi=Lretval$p0$pi[Lid];
				break a;
			}
			Lretval$p0$pi=null;
		}else{
			Lretval$p0$pi=null;
		}
	}else{
		Lretval$p0$pi=null;
	}
	L__result$paddr$p05$pi$pi$pi$pi=(Ldata.buffer===__heap);
	a:{
		if(L__result$paddr$p05$pi$pi$pi$pi){
			L__result$paddr$p05$pi$pi$pi$pi=Mdata;
			L__result$paddr$p05$pi$pi$pi$pi=(L__result$paddr$p05$pi$pi$pi$pi|0)===0?1:0;
			break a;
		}
		L__result$paddr$p05$pi$pi$pi$pi=0;
	}
	a:{
		b:if((Llen|0)!==0){
			if(L__result$paddr$p05$pi$pi$pi$pi)break b;
			L__result$paddr$p05$pi$pi$pi$pi=Mdata;
			Lcall11$pi$pi=Ldata;
			Lcall11$pi$pi=Lcall11$pi$pi;
			c:{
				d:{
					if((L__result$paddr$p05$pi$pi$pi$pi|0)!==0)break d;
					if( +Lcall11$pi$pi.length===(+(Llen>>>0)))break c;
				}
				Lcall11$pi$pi=Lcall11$pi$pi.subarray((+(L__result$paddr$p05$pi$pi$pi$pi>>>0)),(+(L__result$paddr$p05$pi$pi$pi$pi+Llen>>>0)));
				break c;
			}
			Lretval$p0$pi.a0(Lcall11$pi$pi,Lret$p0$pi,Lport);
			break a;
		}
		Lretval$p0$pi.a0(null,Lret$p0$pi,Lport);
		break a;
	}
}
function __ZN7IpStack9TCPSocket14resolveConnectEii(Lid,Lret){
	var tmp0=0,Lretval$p0$pi=null;
	tmp0=__ZN7IpStack9TCPSocket9allocatorE$p2|0;
	a:if((Lid|0)>-1){
		if((tmp0|0)>(Lid|0)){
			Lretval$p0$pi=__ZN7IpStack9TCPSocket9allocatorE$p1;
			if((Lretval$p0$pi[Lid]&255)!==0){
				Lretval$p0$pi=__ZN7IpStack9TCPSocket9allocatorE$p0;
				Lretval$p0$pi=Lretval$p0$pi[Lid];
				break a;
			}
			Lretval$p0$pi=null;
		}else{
			Lretval$p0$pi=null;
		}
	}else{
		Lretval$p0$pi=null;
	}
	Lretval$p0$pi.a1(Lret);
	Lretval$p0$pi.a1=null;
}
function __ZN7IpStack9TCPSocket13resolveAcceptEiPN3tcp6SocketEiia(Lid,LnewS,Laddr,Lport,Lret){
	var tmp0=null,Lid$p0$plcssa27$pi$pi$pi=0,Lretval$p0$pi=null,tmp3=null,Lid$p021$pi$pi$pi=0;
	Lid$p0$plcssa27$pi$pi$pi=__ZN7IpStack9TCPSocket9allocatorE$p2|0;
	a:if((Lid|0)>-1){
		if((Lid$p0$plcssa27$pi$pi$pi|0)>(Lid|0)){
			Lretval$p0$pi=__ZN7IpStack9TCPSocket9allocatorE$p1;
			if((Lretval$p0$pi[Lid]&255)!==0){
				Lretval$p0$pi=__ZN7IpStack9TCPSocket9allocatorE$p0;
				Lretval$p0$pi=Lretval$p0$pi[Lid];
				break a;
			}
			Lretval$p0$pi=null;
		}else{
			Lretval$p0$pi=null;
		}
	}else{
		Lretval$p0$pi=null;
	}
	a:{
		b:{
			if((Lid$p0$plcssa27$pi$pi$pi|0)>1){
				tmp3=__ZN7IpStack9TCPSocket9allocatorE$p1;
				Lid$p021$pi$pi$pi=1;
				while(1){
					if((tmp3[Lid$p021$pi$pi$pi]&255)!==0){
						Lid$p021$pi$pi$pi=Lid$p021$pi$pi$pi+1|0;
						if((Lid$p021$pi$pi$pi|0)===(Lid$p0$plcssa27$pi$pi$pi|0))break b;
						continue;
					}
					break;
				}
			}else{
				Lid$p021$pi$pi$pi=1;
			}
			if((Lid$p021$pi$pi$pi|0)===(Lid$p0$plcssa27$pi$pi$pi|0))break b;
			Lid$p0$plcssa27$pi$pi$pi=Lid$p021$pi$pi$pi;
			break a;
		}
		Lid$p021$pi$pi$pi=Lid$p0$plcssa27$pi$pi$pi<<1;
		__ZN7IpStack9TCPSocket9allocatorE$p2=Lid$p021$pi$pi$pi;
		tmp3=__ZN7IpStack9TCPSocket9allocatorE$p0;
		b:{
			if(tmp3!==nullArray||0!==0){
				tmp3=resizeArray_class$p_ZN7IpStack9TCPSocketE(tmp3,tmp3.length,Lid$p021$pi$pi$pi/16|0);
				break b;
			}
			tmp3=createArray_class$p_ZN7IpStack9TCPSocketE(Lid$p021$pi$pi$pi/16|0);
		}
		__ZN7IpStack9TCPSocket9allocatorE$p0=tmp3;
		Lid$p021$pi$pi$pi=__ZN7IpStack9TCPSocket9allocatorE$p2|0;
		tmp3=__ZN7IpStack9TCPSocket9allocatorE$p1;
		b:{
			if(tmp3!==nullArray||0!==0){
				tmp3=(function(){var __old__=tmp3;
					var __ret__=new Uint8Array(Lid$p021$pi$pi$pi/1|0);
					__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
					return __ret__;})();
				break b;
			}
			tmp3=new Uint8Array(Lid$p021$pi$pi$pi/1|0);
		}
		__ZN7IpStack9TCPSocket9allocatorE$p1=tmp3;
		break a;
	}
	tmp3=__ZN7IpStack9TCPSocket9allocatorE$p0;
	tmp3[Lid$p0$plcssa27$pi$pi$pi].a0=(LnewS|0);
	tmp3[Lid$p0$plcssa27$pi$pi$pi].a1=null;
	tmp3[Lid$p0$plcssa27$pi$pi$pi].a2=null;
	tmp0=__ZN7IpStack9TCPSocket9allocatorE$p1;
	tmp0[Lid$p0$plcssa27$pi$pi$pi]=1;
	Lretval$p0$pi.a3(Object.create(IpStack.TCPSocket.prototype,{this:{value:{d:tmp3,o:0+Lid$p0$plcssa27$pi$pi$pi|0}}}),Laddr,Lport,Lret<<24>>24);
}
function __ZN7IpStack9TCPSocket8callRecvEiPhj(Lid,Ldata,Mdata,Llen){
	var tmp0=0,Lretval$p0$pi=null,Lcall11$pi$pi=null;
	tmp0=__ZN7IpStack9TCPSocket9allocatorE$p2|0;
	a:if((Lid|0)>-1){
		if((tmp0|0)>(Lid|0)){
			Lretval$p0$pi=__ZN7IpStack9TCPSocket9allocatorE$p1;
			if((Lretval$p0$pi[Lid]&255)!==0){
				Lretval$p0$pi=__ZN7IpStack9TCPSocket9allocatorE$p0;
				Lretval$p0$pi=Lretval$p0$pi[Lid];
				break a;
			}
			Lretval$p0$pi=null;
		}else{
			Lretval$p0$pi=null;
		}
	}else{
		Lretval$p0$pi=null;
	}
	tmp0=(Ldata.buffer===__heap);
	a:{
		if(tmp0){
			tmp0=Mdata;
			tmp0=(tmp0|0)===0?1:0;
			break a;
		}
		tmp0=0;
	}
	a:{
		b:if((Llen|0)!==0){
			if(tmp0)break b;
			tmp0=Mdata;
			Lcall11$pi$pi=Ldata;
			Lcall11$pi$pi=Lcall11$pi$pi;
			c:{
				d:{
					if((tmp0|0)!==0)break d;
					if( +Lcall11$pi$pi.length===(+(Llen>>>0)))break c;
				}
				Lcall11$pi$pi=Lcall11$pi$pi.subarray((+(tmp0>>>0)),(+(tmp0+Llen>>>0)));
				break c;
			}
			Lretval$p0$pi.a2(Lcall11$pi$pi);
			break a;
		}
		Lretval$p0$pi.a2(null);
		break a;
	}
}
function _sys_now(){
	return ~~ +performance.now()|0;
}
function __Z9output_jsPhi(Lbuf,Mbuf,Llen){
	var tmp0=0,LretConstructorphirem3=null;
	tmp0=Mbuf;
	LretConstructorphirem3=Lbuf;
	LretConstructorphirem3=LretConstructorphirem3;
	if((Llen|0)!==0){
		if((tmp0|0)===0)if( +LretConstructorphirem3.length===(+(Llen>>>0))){
			LretConstructorphirem3=new Uint8Array(LretConstructorphirem3);
			__ZL9output_cb(LretConstructorphirem3);
			return;
		}
		LretConstructorphirem3=new Uint8Array(LretConstructorphirem3.subarray((+(tmp0>>>0)),(+(tmp0+Llen>>>0))));
		__ZL9output_cb(LretConstructorphirem3);
		return;
	}
	if((tmp0|0)===0){
		LretConstructorphirem3=new Uint8Array(LretConstructorphirem3);
		__ZL9output_cb(LretConstructorphirem3);
		return;
	}
	LretConstructorphirem3=new Uint8Array(LretConstructorphirem3.subarray((+(tmp0>>>0))));
	__ZL9output_cb(LretConstructorphirem3);
}
function __Z14start_timeoutsv(){
	var tmp0=null;
	tmp0=__ZZ14start_timeoutsvEN3$_08__invokeEv;
	+setInterval(tmp0,10);
}
function __ZZ14start_timeoutsvEN3$_08__invokeEv(){
	_sys_check_timeouts();
}
function __ZN7IpStack4initEPN6client9UpOptionsE(Lopts){
	__Z4initv();
	__Z16udpecho_raw_initv();
	__Z16tcpecho_raw_initv();
}
function __ZN7IpStack2upEPN6client9UpOptionsE(Lopts){
	var LsavedStack=null,Lip=0,tmp2=null,Lcall13=null,Lcall=null,Lcallo=0,Lcall2=null,Lcall2o=0,Li$p07$pi=0,Lref$ptmp7=0,Lref$ptmp8=0,Ltmp=0,Li$p061=0,LcheerpPtrAlloca$p060=null,tmp12=null,tmp12o=0,Li$p07$pi23=0;
	LsavedStack=___getStackPtr();
	Lcall13=-104+LsavedStack|0;
	___setStackPtr(Lcall13);
	Lip=88+Lcall13|0;
	Lcall=Lopts.localIp;
	__ZNSsC2B7v160000Ev(Lip);
	__ZNSs6resizeB7v160000Ej(Lip,Lcall.length);
	Lcall2o=HEAP32[8+Lip>>2];
	Lcall2=HEAP8;
	if(((Lcall.length)|0)>0){
		Li$p07$pi=0;
		while(1){
			Lcall2[Lcall2o+Li$p07$pi|0]=Lcall.charCodeAt(Li$p07$pi);
			Li$p07$pi=Li$p07$pi+1|0;
			if((Li$p07$pi|0)<((Lcall.length)|0))continue;
			break;
		}
	}
	Li$p07$pi=72+Lcall13|0;
	__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEEC2B7v160000Ev(Li$p07$pi);
	Lcall=Lopts.ipMap;
	a:{
		if(Lcall===undefined)break a;
		Lcall2=Object.keys(Lcall);
		if(((Lcall2.length)|0)>0){
			Lref$ptmp7=56+Lcall13|0;
			Lref$ptmp8=40+Lcall13|0;
			Ltmp=32+Lcall13|0;
			Li$p061=0;
			while(1){
				tmp2=Lcall2[0+Li$p061|0];
				LcheerpPtrAlloca$p060=Lcall[tmp2];
				__ZNSsC2B7v160000Ev(Lref$ptmp7);
				__ZNSs6resizeB7v160000Ej(Lref$ptmp7,tmp2.length);
				tmp12o=HEAP32[8+Lref$ptmp7>>2];
				tmp12=HEAP8;
				if(((tmp2.length)|0)>0){
					Li$p07$pi23=0;
					while(1){
						tmp12[tmp12o+Li$p07$pi23|0]=tmp2.charCodeAt(Li$p07$pi23);
						Li$p07$pi23=Li$p07$pi23+1|0;
						if((Li$p07$pi23|0)<((tmp2.length)|0))continue;
						break;
					}
				}
				__ZNSsC2B7v160000Ev(Lref$ptmp8);
				__ZNSs6resizeB7v160000Ej(Lref$ptmp8,LcheerpPtrAlloca$p060.length);
				tmp12o=HEAP32[8+Lref$ptmp8>>2];
				tmp12=HEAP8;
				if(((LcheerpPtrAlloca$p060.length)|0)>0){
					Li$p07$pi23=0;
					while(1){
						tmp12[tmp12o+Li$p07$pi23|0]=LcheerpPtrAlloca$p060.charCodeAt(Li$p07$pi23);
						Li$p07$pi23=Li$p07$pi23+1|0;
						if((Li$p07$pi23|0)<((LcheerpPtrAlloca$p060.length)|0))continue;
						break;
					}
				}
				__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEE7emplaceB7v160000IJSsSsEEES2_ISt14__map_iteratorISt15__tree_iteratorISt12__value_typeISsSsEPSt11__tree_nodeISB_PvElEEbEDpOT_(Ltmp,Li$p07$pi,Lref$ptmp7,Lref$ptmp8);
				__ZNSsD2Ev(Lref$ptmp8);
				__ZNSsD2Ev(Lref$ptmp7);
				Li$p061=Li$p061+1|0;
				if((Li$p061|0)<((Lcall2.length)|0)){
					LcheerpPtrAlloca$p060=tmp2;
					continue;
				}
				break;
			}
		}
	}
	Lref$ptmp7=16+Lcall13|0;
	__ZNSsC2B7v160000Ev(Lref$ptmp7);
	Lcall=Lopts.dnsIp;
	a:{
		if(undefined===Lcall)break a;
		Lref$ptmp8=Lcall13|0;
		Lcall13=Lopts.dnsIp;
		__ZNSsC2B7v160000Ev(Lref$ptmp8);
		__ZNSs6resizeB7v160000Ej(Lref$ptmp8,Lcall13.length);
		Lcallo=HEAP32[8+Lref$ptmp8>>2];
		Lcall=HEAP8;
		if(((Lcall13.length)|0)>0){
			Ltmp=0;
			while(1){
				Lcall[Lcallo+Ltmp|0]=Lcall13.charCodeAt(Ltmp);
				Ltmp=Ltmp+1|0;
				if((Ltmp|0)<((Lcall13.length)|0))continue;
				break;
			}
		}
		__ZNSsaSB7v160000EOSs(Lref$ptmp7,Lref$ptmp8)|0;
		__ZNSsD2Ev(Lref$ptmp8);
	}
	__Z2upRKSsRKSt3mapISsSsSt4lessISsESaISt4pairIS_SsEEES0_(Lip,Li$p07$pi,Lref$ptmp7);
	__ZNSsD2Ev(Lref$ptmp7);
	__ZNSt3mapISsSsSt4lessISsESaISt4pairIKSsSsEEED2B7v160000Ev(Li$p07$pi);
	__ZNSsD2Ev(Lip);
	___setStackPtr(LsavedStack);
}
function __ZN7IpStack4downEv(){
	__Z4downv();
}
function __ZN7IpStack5inputEPN6client10Uint8ArrayE(Lpkt){
	var Lconv=0,Lcall2=0,tmp2=0,Lcall$pi=null,Lcall$pio=0;
	Lconv=~~ +Lpkt.length;
	Lcall2=_pbuf_alloc(0,Lconv)|0;
	a:if((Lcall2|0)!=(0|0)){
		Lcall$pio=HEAP32[4+Lcall2>>2];
		Lcall$pi=HEAP8;
		tmp2=Lcall$pio;
		Lcall$pi=Lcall$pi;
		Lcall$pi=Lcall$pi;
		b:{
			if((Lconv|0)!==0){
				if((tmp2|0)===0)if( +Lcall$pi.length===(+(Lconv>>>0)))break b;
				Lcall$pi=Lcall$pi.subarray((+(tmp2>>>0)),(+(tmp2+Lconv>>>0)));
				break b;
			}
			if((tmp2|0)===0)break b;
			Lcall$pi=Lcall$pi.subarray((+(tmp2>>>0)));
		}
		Lcall$pi.set(Lpkt);
		__ZN7IpStackL7doInputEP4pbuf(Lcall2);
		break a;
	}
}
function __ZN7IpStack6outputEPFvPN6client10Uint8ArrayEE(Lcallback){
	__ZL9output_cb=Lcallback;
}
function __ZN7IpStack7parseIPEPN6client6StringE(LjsStr){
	var LsavedStack=null,Lstr=0,tmp2=null,tmp2o=0,Li$p07$pi=0;
	LsavedStack=___getStackPtr();
	tmp2=-16+LsavedStack|0;
	___setStackPtr(tmp2);
	Lstr=tmp2|0;
	__ZNSsC2B7v160000Ev(Lstr);
	__ZNSs6resizeB7v160000Ej(Lstr,LjsStr.length);
	tmp2o=HEAP32[8+Lstr>>2];
	tmp2=HEAP8;
	if(((LjsStr.length)|0)>0){
		Li$p07$pi=0;
		while(1){
			tmp2[tmp2o+Li$p07$pi|0]=LjsStr.charCodeAt(Li$p07$pi);
			Li$p07$pi=Li$p07$pi+1|0;
			if((Li$p07$pi|0)<((LjsStr.length)|0))continue;
			break;
		}
	}
	Li$p07$pi=__ZN2ip4stonERKSs(Lstr)|0;
	__ZNSsD2Ev(Lstr);
	___setStackPtr(LsavedStack);
	return Li$p07$pi|0;
}
function __ZN7IpStack14resolveAdapterEii(Lid,Lip){
	var tmp0=null,tmp1=null;
	tmp0=__ZN7IpStackL10dnsQueriesE;
	tmp1=tmp0[0+Lid|0];
	tmp0[0+Lid|0]=null;
	tmp1(Lip);
}
function __ZN7IpStack7resolveEPN6client6StringE(LnameJs){
	var LsavedStack=null,Lname=0,tmp2=null,tmp3=null,tmp3o=0,Li$p07$pi=0,Lcall$pi6=null;
	LsavedStack=___getStackPtr();
	tmp3=-16+LsavedStack|0;
	___setStackPtr(tmp3);
	Lname=tmp3|0;
	__ZNSsC2B7v160000Ev(Lname);
	__ZNSs6resizeB7v160000Ej(Lname,LnameJs.length);
	tmp3o=HEAP32[8+Lname>>2];
	tmp3=HEAP8;
	if(((LnameJs.length)|0)>0){
		Li$p07$pi=0;
		while(1){
			tmp3[tmp3o+Li$p07$pi|0]=LnameJs.charCodeAt(Li$p07$pi);
			Li$p07$pi=Li$p07$pi+1|0;
			if((Li$p07$pi|0)<((LnameJs.length)|0))continue;
			break;
		}
	}
	Lcall$pi6=new Object();
	tmp3=new Object();
	tmp2=new Promise(function(__f,__r){Lcall$pi6.inner=__f;tmp3.inner=__r;});;
	Lcall$pi6=Lcall$pi6.inner;
	tmp3.inner;
	Li$p07$pi=__ZN7IpStackL10dnsQueriesE.indexOf(null);
	tmp3=__ZN7IpStackL10dnsQueriesE;
	a:{
		if((Li$p07$pi|0)<0){
			Li$p07$pi=tmp3.length;
			__ZN7IpStackL10dnsQueriesE.push(Lcall$pi6);
			break a;
		}
		tmp3[0+Li$p07$pi|0]=Lcall$pi6;
	}
	__ZN7IpStack11resolveWasmERKSsi(Lname,Li$p07$pi);
	__ZNSsD2Ev(Lname);
	___setStackPtr(LsavedStack);
	return tmp2;
}
function __ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj(Lthrown_object){
	var Ldest$paddr=null,Lref$ptmp=null,Ltinfo$paddr=null;
	Ltinfo$paddr=[0];
	Ltinfo$paddr[0]=(1051464|0);
	Ldest$paddr=[0];
	Ldest$paddr[0]=((9|0)|0);
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
			if((Lid$p022$pi$pi|0)===(Lid$p0$plcssa28$pi$pi|0))break b;
			Lid$p0$plcssa28$pi$pi=Lid$p022$pi$pi;
			break a;
		}
		__ZN10__cxxabiv19Exception9allocatorE$p2=Lid$p0$plcssa28$pi$pi<<1;
		tmp2=__ZN10__cxxabiv19Exception9allocatorE$p0;
		Lid$p022$pi$pi=__imul(Lid$p0$plcssa28$pi$pi,88)|0;
		b:{
			if(tmp2!==nullArray||0!==0){
				tmp2=resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp2,tmp2.length,Lid$p022$pi$pi/44|0);
				break b;
			}
			tmp2=createArray_struct$p_ZN10__cxxabiv19ExceptionE(Lid$p022$pi$pi/44|0);
		}
		__ZN10__cxxabiv19Exception9allocatorE$p0=tmp2;
		Lid$p022$pi$pi=__ZN10__cxxabiv19Exception9allocatorE$p2|0;
		tmp2=__ZN10__cxxabiv19Exception9allocatorE$p1;
		b:{
			if(tmp2!==nullArray||0!==0){
				tmp2=(function(){var __old__=tmp2;
					var __ret__=new Uint8Array(Lid$p022$pi$pi/1|0);
					__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
					return __ret__;})();
				break b;
			}
			tmp2=new Uint8Array(Lid$p022$pi$pi/1|0);
		}
		__ZN10__cxxabiv19Exception9allocatorE$p1=tmp2;
		break a;
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
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	var LretConstructor$pi=null,Lgeptoindexphi=0,LcheerpPtrAlloca$p07$pi=null;
	LretConstructor$pi=String();
	if((Larg0[Marg0]&255)===0)return String(LretConstructor$pi);
	Lgeptoindexphi=0;
	while(1){
		LcheerpPtrAlloca$p07$pi=String.fromCharCode(Larg0[Marg0+Lgeptoindexphi|0]<<24>>24);
		LretConstructor$pi=LretConstructor$pi.concat(LcheerpPtrAlloca$p07$pi);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if((Larg0[Marg0+Lgeptoindexphi|0]&255)!==0)continue;
		break;
	}
	return String(LretConstructor$pi);
}
function __ZL17do_syscall_writevPK5iovecl(Lios,Llen){
	var Lbuilder=null,Lbuildero=0,L__ret$p05=0,Li$p04=0,Lios$poptgep=0,Ladd168=0,Lcall20=null,Lcall20o=0,tmp6=0;
	a:{
		if(__ZGVZL17do_syscall_writevPK5ioveclE4curr|0)break a;
		__ZZL17do_syscall_writevPK5ioveclE4curr=String();
		__ZGVZL17do_syscall_writevPK5ioveclE4curr=1;
	}
	Lbuilder=[null];
	__ZN12_GLOBAL__N_119CheerpStringBuilder9setStringEPN6client6StringE(Lbuilder,0,__ZZL17do_syscall_writevPK5ioveclE4curr);
	a:if((Llen|0)>0){
		Li$p04=0;
		L__ret$p05=0;
		while(1){
			Lios$poptgep=(Li$p04<<3)+Lios|0;
			Ladd168=HEAP32[4+Lios$poptgep>>2]|0;
			b:if((Ladd168|0)!==0){
				L__ret$p05=Ladd168+L__ret$p05|0;
				Lcall20o=HEAP32[Lios$poptgep>>2];
				Lcall20=HEAP8;
				if((Ladd168|0)>0){
					Lios$poptgep=0;
					while(1){
						__ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h(Lbuilder,0,Lcall20[Lcall20o+Lios$poptgep|0]|0);
						Lios$poptgep=Lios$poptgep+1|0;
						if((Lios$poptgep|0)===(Ladd168|0))break b;
						continue;
					}
				}
			}
			Li$p04=Li$p04+1|0;
			if((Li$p04|0)===(Llen|0))break a;
			continue;
		}
	}else{
		L__ret$p05=0;
	}
	Lbuilder=__ZN12_GLOBAL__N_119CheerpStringBuilder9getStringEv(Lbuilder,0);
	Lbuilder=Lbuilder.split(_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1053980>>0));
	Li$p04=Lbuilder.length;
	a:if((Li$p04|0)>1){
		Lios$poptgep=0;
		Ladd168=1;
		while(1){
			Lcall20=__ZN6client6TArrayINS_6StringEEixEi(Lbuilder,Lios$poptgep);
			Lcall20o=oSlot;
			console.log(Lcall20[Lcall20o]);
			Lios$poptgep=Ladd168+1|0;
			if((Lios$poptgep|0)===(Li$p04|0))break a;
			tmp6=Ladd168;
			Ladd168=Lios$poptgep;
			Lios$poptgep=tmp6;
			continue;
		}
	}
	Lbuilder=__ZN6client6TArrayINS_6StringEEixEi(Lbuilder,Li$p04-1|0);
	Lbuildero=oSlot;
	__ZZL17do_syscall_writevPK5ioveclE4curr=Lbuilder[Lbuildero];
	return L__ret$p05|0;
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder9setStringEPN6client6StringE(Lthis,Mthis,La){
	Lthis[Mthis]=La;
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h(Lthis,Mthis,Lch){
	var Lconv=0,tmp1=null,Lmask$p1=0,Ldec=0;
	Ldec=__ZZL17do_syscall_writevPK5ioveclE9remaining|0;
	Lconv=Lch&255;
	tmp1=1051620|0;
	a:{
		if((Lch&255)<192){
			b:{
				if((Ldec|0)===0){
					if(Lch<<24>-16777216){
						__ZZL17do_syscall_writevPK5ioveclE9codepoint=Lconv;
						break b;
					}
					___assert_fail(1051728|0,417,tmp1);
					;
				}
				if((Lconv&192|0)!==128)___assert_fail(1053984|0,403,tmp1);
				;
				__ZZL17do_syscall_writevPK5ioveclE9codepoint=(__ZZL17do_syscall_writevPK5ioveclE9codepoint<<6)+(Lconv&63)|0;
				Ldec=Ldec-1|0;
				__ZZL17do_syscall_writevPK5ioveclE9remaining=Ldec;
				if((Ldec|0)!==0)break a;
			}
			__ZN12_GLOBAL__N_119CheerpStringBuilder15outputCodepointEj(Lthis,Mthis,__ZZL17do_syscall_writevPK5ioveclE9codepoint|0);
			break a;
		}
		if((Ldec|0)===0){
			b:{
				if((Lch&255)<224){
					Lmask$p1=31;
					Ldec=1;
					break b;
				}
				Lmask$p1=(Lch&255)<240?15|0:7|0;
				Ldec=(Lch&255)<240?2|0:3|0;
			}
			__ZZL17do_syscall_writevPK5ioveclE9remaining=Ldec;
			__ZZL17do_syscall_writevPK5ioveclE9codepoint=Lmask$p1&Lconv;
			break a;
		}
		___assert_fail(1051740|0,428,tmp1);
		;
	}
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder9getStringEv(Lthis,Mthis){
	return Lthis[Mthis];
}
function __ZN6client6TArrayINS_6StringEEixEi(Lthis,Lindex){
	var Lcall=null,Lcallo=0;
	Lcall=__ZN6client5ArrayixEi(Lthis,Lindex);
	Lcallo=oSlot;
	oSlot=Lcallo;
	return Lcall;
}
function __ZN6client5ArrayixEi(Lthis,Lindex){
	oSlot=0+Lindex|0;
	return Lthis;
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder15outputCodepointEj(Lthis,Mthis,Lcodepoint){
	var Lcodepoint$psink=0,Lcall$pi17=null;
	a:{
		b:{
			if(Lcodepoint>>>0<65536){
				if((Lcodepoint|0)===0)break a;
				Lcall$pi17=Lthis[Mthis];
				Lcodepoint$psink=Lcodepoint;
				break b;
			}
			Lcall$pi17=Lthis[Mthis];
			Lcall$pi17=Lcall$pi17.concat(String.fromCharCode((Lcodepoint-65536>>>10)+55296|0));
			Lthis[Mthis]=Lcall$pi17;
			Lcodepoint$psink=(Lcodepoint&1023)+56320|0;
		}
		Lthis[Mthis]=Lcall$pi17.concat(String.fromCharCode(Lcodepoint$psink));
		break a;
	}
}
function __start(){
	var tmp0=null;
	___cxx_global_var_init();
	tmp0=new Uint8Array(16);
	__ZN7IpStack9TCPSocket9allocatorE$p1=tmp0;
	__ZN7IpStack9TCPSocket9allocatorE$p2=16;
	tmp0=createArray_class$p_ZN7IpStack9TCPSocketE(16);
	__ZN7IpStack9TCPSocket9allocatorE$p0=tmp0;
	tmp0=new Uint8Array(16);
	__ZN7IpStack9UDPSocket9allocatorE$p1=tmp0;
	__ZN7IpStack9UDPSocket9allocatorE$p2=16;
	tmp0=createArray_class$p_ZN7IpStack9UDPSocketE(16);
	__ZN7IpStack9UDPSocket9allocatorE$p0=tmp0;
	__ZN7IpStackL10dnsQueriesE=new Array();
}
function ___wrapper___ZN7IpStack9UDPSocket8callRecvEiPhjii(Larg0,Larg1,Larg2,Larg3,Larg4){
	__ZN7IpStack9UDPSocket8callRecvEiPhjii(Larg0,HEAP8,Larg1>>0,Larg2,Larg3,Larg4);
}
function ___wrapper___Z9output_jsPhi(Larg0,Larg1){
	__Z9output_jsPhi(HEAP8,Larg0>>0,Larg1);
}
function ___wrapper___ZN7IpStack9TCPSocket8callRecvEiPhj(Larg0,Larg1,Larg2){
	__ZN7IpStack9TCPSocket8callRecvEiPhj(Larg0,HEAP8,Larg1>>0,Larg2);
}
var __ZN7IpStack9TCPSocket9allocatorE$p1=nullArray;
var __ZN7IpStack9TCPSocket9allocatorE$p2=0;
var __ZN7IpStack9TCPSocket9allocatorE$p0=nullArray;
var __ZN7IpStack9UDPSocket9allocatorE$p1=nullArray;
var __ZN7IpStack9UDPSocket9allocatorE$p2=0;
var __ZN7IpStack9UDPSocket9allocatorE$p0=nullArray;
var __ZN7IpStackL10dnsQueriesE=null;
var __ZGVZL17do_syscall_writevPK5ioveclE4curr=0;
var __ZZL17do_syscall_writevPK5ioveclE4curr=null;
var __ZZL17do_syscall_writevPK5ioveclE9remaining=0;
var __ZZL17do_syscall_writevPK5ioveclE9codepoint=0;
var __ZN10__cxxabiv19Exception9allocatorE$p2=16;
var _promotedMalloc$p8=new Uint8Array(16);
var __ZN10__cxxabiv19Exception9allocatorE$p1=_promotedMalloc$p8;
var _promotedMalloc$p7=createArray_struct$p_ZN10__cxxabiv19ExceptionE(16);
var __ZN10__cxxabiv19Exception9allocatorE$p0=_promotedMalloc$p7;
var __ZL9output_cb=null;
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
function createArray_class$p_ZN7IpStack9UDPSocketE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={a0:null,a1:0};
	return r;
}
function createArray_class$p_ZN7IpStack9TCPSocketE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={a0:0,a1:null,a2:null,a3:null};
	return r;
}
function resizeArray_class$p_ZN7IpStack9TCPSocketE(r,s,e){
	for(var i=s;i<e;i++)
	r[i]={a0:0,a1:null,a2:null,a3:null};
	return r;
}
function resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(r,s,e){
	for(var i=s;i<e;i++)
	r[i]=new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function resizeArray_class$p_ZN7IpStack9UDPSocketE(r,s,e){
	for(var i=s;i<e;i++)
	r[i]={a0:null,a1:0};
	return r;
}
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
	TCPSocket:null,
	UDPSocket:null,
	down:null,
	init:null,
	input:null,
	output:null,
	parseIP:null,
	resolve:null,
	up:null,
};
var HEAP8=null,HEAP32=null,__asm=null,__heap=null;function __dummy(){throw new Error('this should be unreachable');};
var ___cxx_global_var_init=null;
var __ZN3udp6Socket5closeEv=null;
var ___assert_fail=null;
var __ZNSt6vectorIhSaIhEEC2Ej=null;
var __ZN7IpStack9UDPSocket13sendToAdapterEPN3udp6SocketERKSt6vectorIhSaIhEEii=null;
var __ZNSt6vectorIhSaIhEED2B7v160000Ev=null;
var __ZN7IpStack9UDPSocket11recvAdapterEiPN3udp6SocketE=null;
var __ZN3udp6Socket4bindEii=null;
var _malloc=null;
var __ZN3udp6SocketC2Ev=null;
var __ZNSsC2B7v160000Ev=null;
var __ZNSs6resizeB7v160000Ej=null;
var __ZN7IpStack11resolveWasmERKSsi=null;
var __ZNSsD2Ev=null;
var __ZN2ip4stonERKSs=null;
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
var __ZN3tcp6Socket5closeEv=null;
var __ZN3tcp6Socket4bindEii=null;
var __ZN3tcp6Socket6listenEv=null;
var __ZN7IpStack9TCPSocket13acceptAdapterEiPN3tcp6SocketE=null;
var __ZN3tcp6Socket10shutdownRxEv=null;
var __ZN3tcp6Socket10shutdownTxEv=null;
var __ZN7IpStack9TCPSocket11sendAdapterEPN3tcp6SocketERKSt6vectorIhSaIhEE=null;
var __ZN7IpStack9TCPSocket11recvAdapterEiPN3tcp6SocketE=null;
var __ZN7IpStack9TCPSocket11connAdapterEiPN3tcp6SocketEii=null;
var __ZN3tcp6SocketC2Ev=null;
var _free=null;
var ___getStackPtr=null;
var ___setStackPtr=null;
IpStack.TCPSocket=__dummy;
IpStack.UDPSocket=__dummy;
IpStack.down=__dummy;
IpStack.init=__dummy;
IpStack.input=__dummy;
IpStack.output=__dummy;
IpStack.parseIP=__dummy;
IpStack.resolve=__dummy;
IpStack.up=__dummy;
export default function(Ll){
	return (Ll&&Ll.buffer)?
	Promise.resolve(Ll.buffer):
	fetchBuffer((Ll&&Ll.absPath)?Ll.absPath:new URL('ipstack.wasm', import.meta.url)).then(Ll=>
	WebAssembly.instantiate(Ll,
	{i:{
			___syscall_rt_sigprocmask:__dummy,
			___syscall_tkill:__dummy,
			___syscall_rt_sigaction:__dummy,
			___syscall__llseek:__dummy,
			__ZL17do_syscall_writevPK5iovecl:__ZL17do_syscall_writevPK5iovecl,
			___wrapper___ZN7IpStack9TCPSocket8callRecvEiPhj:___wrapper___ZN7IpStack9TCPSocket8callRecvEiPhj,
			__ZN7IpStack14resolveAdapterEii:__ZN7IpStack14resolveAdapterEii,
			__ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj:__ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj,
			_sys_now:_sys_now,
			__Z14start_timeoutsv:__Z14start_timeoutsv,
			___wrapper___Z9output_jsPhi:___wrapper___Z9output_jsPhi,
			__ZN7IpStack9TCPSocket13resolveAcceptEiPN3tcp6SocketEiia:__ZN7IpStack9TCPSocket13resolveAcceptEiPN3tcp6SocketEiia,
			___wrapper___ZN7IpStack9UDPSocket8callRecvEiPhjii:___wrapper___ZN7IpStack9UDPSocket8callRecvEiPhjii,
			__ZN7IpStack9TCPSocket14resolveConnectEii:__ZN7IpStack9TCPSocket14resolveConnectEii,
			growLinearMemory:growLinearMemory,
		}})
	).then(Ll=>{
		__asm=Ll.instance.exports;
		__heap=__asm.memory.buffer;
		assignHeaps(__heap);
		___cxx_global_var_init=__asm.___cxx_global_var_init;
		__ZN3udp6Socket5closeEv=__asm.__ZN3udp6Socket5closeEv;
		___assert_fail=__asm.___assert_fail;
		__ZNSt6vectorIhSaIhEEC2Ej=__asm.__ZNSt6vectorIhSaIhEEC2Ej;
		__ZN7IpStack9UDPSocket13sendToAdapterEPN3udp6SocketERKSt6vectorIhSaIhEEii=__asm.__ZN7IpStack9UDPSocket13sendToAdapterEPN3udp6SocketERKSt6vectorIhSaIhEEii;
		__ZNSt6vectorIhSaIhEED2B7v160000Ev=__asm.__ZNSt6vectorIhSaIhEED2B7v160000Ev;
		__ZN7IpStack9UDPSocket11recvAdapterEiPN3udp6SocketE=__asm.__ZN7IpStack9UDPSocket11recvAdapterEiPN3udp6SocketE;
		__ZN3udp6Socket4bindEii=__asm.__ZN3udp6Socket4bindEii;
		_malloc=__asm._malloc;
		__ZN3udp6SocketC2Ev=__asm.__ZN3udp6SocketC2Ev;
		__ZNSsC2B7v160000Ev=__asm.__ZNSsC2B7v160000Ev;
		__ZNSs6resizeB7v160000Ej=__asm.__ZNSs6resizeB7v160000Ej;
		__ZN7IpStack11resolveWasmERKSsi=__asm.__ZN7IpStack11resolveWasmERKSsi;
		__ZNSsD2Ev=__asm.__ZNSsD2Ev;
		__ZN2ip4stonERKSs=__asm.__ZN2ip4stonERKSs;
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
		__ZN3tcp6Socket5closeEv=__asm.__ZN3tcp6Socket5closeEv;
		__ZN3tcp6Socket4bindEii=__asm.__ZN3tcp6Socket4bindEii;
		__ZN3tcp6Socket6listenEv=__asm.__ZN3tcp6Socket6listenEv;
		__ZN7IpStack9TCPSocket13acceptAdapterEiPN3tcp6SocketE=__asm.__ZN7IpStack9TCPSocket13acceptAdapterEiPN3tcp6SocketE;
		__ZN3tcp6Socket10shutdownRxEv=__asm.__ZN3tcp6Socket10shutdownRxEv;
		__ZN3tcp6Socket10shutdownTxEv=__asm.__ZN3tcp6Socket10shutdownTxEv;
		__ZN7IpStack9TCPSocket11sendAdapterEPN3tcp6SocketERKSt6vectorIhSaIhEE=__asm.__ZN7IpStack9TCPSocket11sendAdapterEPN3tcp6SocketERKSt6vectorIhSaIhEE;
		__ZN7IpStack9TCPSocket11recvAdapterEiPN3tcp6SocketE=__asm.__ZN7IpStack9TCPSocket11recvAdapterEiPN3tcp6SocketE;
		__ZN7IpStack9TCPSocket11connAdapterEiPN3tcp6SocketEii=__asm.__ZN7IpStack9TCPSocket11connAdapterEiPN3tcp6SocketEii;
		__ZN3tcp6SocketC2Ev=__asm.__ZN3tcp6SocketC2Ev;
		_free=__asm._free;
		___getStackPtr=__asm.___getStackPtr;
		___setStackPtr=__asm.___setStackPtr;
		IpStack.TCPSocket=function (){
			throw new Error("Class/Struct IpStack.TCPSocket do not have a [[cheerp::jsexport]]-ed constructor");
		};
		IpStack.TCPSocket.create=function(){
			return Object.create(IpStack.TCPSocket.prototype,{this:{value:{d:__ZN7IpStack9TCPSocket6createEv(),o:oSlot}}});
		};
		IpStack.TCPSocket.prototype.dispose=function(){
			return __ZN7IpStack9TCPSocket7disposeEv(this.this.d,this.this.o);
		};
		IpStack.TCPSocket.prototype.connect=function(a0,a1,a2,a3){
			return __ZN7IpStack9TCPSocket7connectEiiiPN6client13EventListenerE(this.this.d,this.this.o,a0,a1,a2,a3);
		};
		IpStack.TCPSocket.prototype.recv=function(a0){
			return __ZN7IpStack9TCPSocket4recvEPN6client13EventListenerE(this.this.d,this.this.o,a0);
		};
		IpStack.TCPSocket.prototype.send=function(a0){
			return __ZN7IpStack9TCPSocket4sendEPN6client10Uint8ArrayE(this.this.d[this.this.o],a0);
		};
		IpStack.TCPSocket.prototype.close=function(){
			return __ZN7IpStack9TCPSocket5closeEv(this.this.d,this.this.o);
		};
		IpStack.TCPSocket.prototype.shutdownTx=function(){
			return __ZN7IpStack9TCPSocket10shutdownTxEv(this.this.d[this.this.o]);
		};
		IpStack.TCPSocket.prototype.shutdownRx=function(){
			return __ZN7IpStack9TCPSocket10shutdownRxEv(this.this.d[this.this.o]);
		};
		IpStack.TCPSocket.prototype.listen=function(a0,a1){
			return __ZN7IpStack9TCPSocket6listenEiPN6client8CallbackIvJPS0_iiiEEE(this.this.d,this.this.o,a0,a1);
		};
		IpStack.TCPSocket.prototype.delete=function(){
			return __ZN7IpStack9TCPSocket6deleteEv(this.this.d[this.this.o]);
		};
		IpStack.UDPSocket=function (){
			throw new Error("Class/Struct IpStack.UDPSocket do not have a [[cheerp::jsexport]]-ed constructor");
		};
		IpStack.UDPSocket.create=function(){
			return Object.create(IpStack.UDPSocket.prototype,{this:{value:{d:__ZN7IpStack9UDPSocket6createEv(),o:oSlot}}});
		};
		IpStack.UDPSocket.prototype.dispose=function(){
			return __ZN7IpStack9UDPSocket7disposeEv(this.this.d,this.this.o);
		};
		IpStack.UDPSocket.prototype.bind=function(a0){
			return __ZN7IpStack9UDPSocket4bindEi(this.this.d[this.this.o],a0);
		};
		IpStack.UDPSocket.prototype.recv=function(a0){
			return __ZN7IpStack9UDPSocket4recvEPN6client8CallbackIvJPNS1_10Uint8ArrayEiiEEE(this.this.d,this.this.o,a0);
		};
		IpStack.UDPSocket.prototype.sendto=function(a0,a1,a2){
			return __ZN7IpStack9UDPSocket6sendtoEPN6client10Uint8ArrayEii(this.this.d[this.this.o],a0,a1,a2);
		};
		IpStack.UDPSocket.prototype.close=function(){
			return __ZN7IpStack9UDPSocket5closeEv(this.this.d,this.this.o);
		};
		IpStack.UDPSocket.prototype.delete=function(){
			return __ZN7IpStack9UDPSocket6deleteEv(this.this.d[this.this.o]);
		};
		IpStack.down=function(){
			return __ZN7IpStack4downEv();
		};
		IpStack.init=function(a0){
			return __ZN7IpStack4initEPN6client9UpOptionsE(a0);
		};
		IpStack.input=function(a0){
			return __ZN7IpStack5inputEPN6client10Uint8ArrayE(a0);
		};
		IpStack.output=function(a0){
			return __ZN7IpStack6outputEPFvPN6client10Uint8ArrayEE(a0);
		};
		IpStack.parseIP=function(a0){
			return __ZN7IpStack7parseIPEPN6client6StringE(a0);
		};
		IpStack.resolve=function(a0){
			return __ZN7IpStack7resolveEPN6client6StringE(a0);
		};
		IpStack.up=function(a0){
			return __ZN7IpStack2upEPN6client9UpOptionsE(a0);
		};
		__start();
		return{
			IpStack:IpStack,
		};
	});
}
function assignHeaps(Ll){
	HEAP8=new Uint8Array(Ll);
	HEAP32=new Int32Array(Ll);
}
