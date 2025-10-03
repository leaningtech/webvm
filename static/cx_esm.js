"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
var CHEERP_ENV=null,CHEERP_ARGV=null;
function __ZN7CheerpX6Device17isWebCheerpDeviceEv(Larg0){
	return 0|0;
}
function __ZN7CheerpX6Device3runEPNS_5LinuxE(Larg0,Larg1,Larg2){
	var L$poptgepsqueezed4=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=create__ZN7CheerpX6Device3runEPNS_5LinuxE$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,i4:0});
	tmp2=tmp2;
	tmp2.a0=__ZN7CheerpX6Device3runEPNS_5LinuxE$presume;
	tmp2.a1=__ZN7CheerpX6Device3runEPNS_5LinuxE$pdestroy;
	L$poptgepsqueezed4=tmp2.a2;
	L$poptgepsqueezed4.a0=nullArray;
	L$poptgepsqueezed4.a0o=0;
	tmp1=L$poptgepsqueezed4.a;
	tmp3=L$poptgepsqueezed4.o-1;
	Larg0.a0=tmp1;
	Larg0.a0o=tmp3;
	tmp2.a3=L$poptgepsqueezed4;
	tmp2.a0=null;
	tmp2=L$poptgepsqueezed4.a0;
	tmp3=L$poptgepsqueezed4.a0o|0;
	(tmp2!==nullArray||tmp3!==0?tmp2:_NoopCoro$pFrame$pConst)[tmp2!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst].a0((tmp2!==nullArray||tmp3!==0?tmp2:_NoopCoro$pFrame$pConst),tmp2!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst);
}
function __ZNK7CheerpX6Device16hasPendingWritesEv(Larg0){
	return 0|0;
}
function __ZN7CheerpX11BlockDevice12requestBytesEP11CheerpXBasejj(Larg0,Larg1,Larg2,Larg3,Larg4){
	___assert_fail(_$pstr$p61,0,_$pstr$p62,0,139,___func__$p_ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj,0);
	;
}
function __ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed31=null,tmp1=null,tmp2=0,Lxtraiter=0,tmp4=null,tmp5=null,L$poptgepsqueezed32=null,tmp7=0,tmp8=null,Lgeptoindexphi=0,Lgeptoindexphi3=0,Lprol$piter=0;
	tmp4=new constructor__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame().a;
	tmp5=tmp4[0];
	tmp5.a0=__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$presume;
	tmp5.a1=__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pdestroy;
	tmp5.i8=Larg6;
	tmp5.a7=Larg5;
	tmp5.i6=Larg4;
	L$poptgepsqueezed31=tmp5.a2;
	L$poptgepsqueezed31.a0=nullArray;
	L$poptgepsqueezed31.a0o=0;
	tmp1=L$poptgepsqueezed31.a1;
	tmp1.i0=0;
	L$poptgepsqueezed32=L$poptgepsqueezed31.a;
	tmp7=L$poptgepsqueezed31.o-1;
	Larg0.a0=L$poptgepsqueezed32;
	Larg0.a0o=tmp7;
	L$poptgepsqueezed32=tmp5.a3;
	__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj(L$poptgepsqueezed32,Larg1,Larg2,Larg3,Larg4);
	tmp8=L$poptgepsqueezed32.a0;
	tmp7=L$poptgepsqueezed32.a0o|0;
	a:{
		if(tmp8!==nullArray||tmp7!==0)if(tmp8[tmp7].a0!==null){
			tmp5.i4=0;
			tmp5=tmp8[tmp7].a[tmp8[tmp7].o- -1];
			tmp5.a0=tmp4;
			tmp5.a0o=0;
			break a;
		}
		tmp8=tmp8[tmp7].a[tmp8[tmp7].o- -1];
		tmp8=tmp8.a1.a1;
		tmp4=L$poptgepsqueezed32.a0;
		tmp7=L$poptgepsqueezed32.a0o|0;
		if(tmp4!==nullArray||tmp7!==0)tmp4[tmp7].a1(tmp4,tmp7);
		tmp7=tmp5.i6|0;
		if(((tmp8.length)|0)!==(tmp7|0))___assert_fail(_$pstr$p13,0,_$pstr$p9,0,319,___func__$p_ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,0);
		;
		tmp7=tmp5.i8|0;
		tmp4=tmp5.a7;
		tmp2=tmp5.i6|0;
		if((tmp2|0)!==0){
			Lxtraiter=tmp2&7;
			if((Lxtraiter|0)!==0){
				Lprol$piter=0;
				Lgeptoindexphi3=0;
				Lgeptoindexphi=0;
				while(1){
					tmp4[tmp7+Lgeptoindexphi3|0]=tmp8[0+Lgeptoindexphi|0]|0;
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=0;
				Lgeptoindexphi=0;
			}
			if(tmp2>>>0>=8)while(1){
				tmp4[tmp7+Lgeptoindexphi3|0]=tmp8[0+Lgeptoindexphi|0]|0;
				tmp4[(tmp7+Lgeptoindexphi3|0)+1|0]=tmp8[(0+Lgeptoindexphi|0)+1|0]|0;
				tmp4[(tmp7+Lgeptoindexphi3|0)+2|0]=tmp8[(0+Lgeptoindexphi|0)+2|0]|0;
				tmp4[(tmp7+Lgeptoindexphi3|0)+3|0]=tmp8[(0+Lgeptoindexphi|0)+3|0]|0;
				tmp4[(tmp7+Lgeptoindexphi3|0)+4|0]=tmp8[(0+Lgeptoindexphi|0)+4|0]|0;
				tmp4[(tmp7+Lgeptoindexphi3|0)+5|0]=tmp8[(0+Lgeptoindexphi|0)+5|0]|0;
				tmp4[(tmp7+Lgeptoindexphi3|0)+6|0]=tmp8[(0+Lgeptoindexphi|0)+6|0]|0;
				tmp4[(tmp7+Lgeptoindexphi3|0)+7|0]=tmp8[(0+Lgeptoindexphi|0)+7|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp4!==tmp4||(tmp7+tmp2|0)!==(tmp7+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
		tmp1.i0=256;
		tmp1.i1=tmp2;
		tmp5.a9=L$poptgepsqueezed31;
		tmp5.a0=null;
		tmp4=L$poptgepsqueezed31.a0;
		tmp7=L$poptgepsqueezed31.a0o|0;
		(tmp4!==nullArray||tmp7!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp7!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX11BlockDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	___assert_fail(_$pstr$p61,0,_$pstr$p62,0,144,___func__$p_ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj,0);
	;
}
function __ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,Lxtraiter=0,L$poptgepsqueezed25=null,tmp3=0,L$poptgep$poptgep22$poptgep=null,Lgeptoindexphi=0,Lgeptoindexphi3=0,Lprol$piter=0;
	L$poptgepsqueezed25=Larg0.a3.a0;
	tmp3=Larg0.a3.a0o|0;
	L$poptgepsqueezed25=L$poptgepsqueezed25[tmp3].a[L$poptgepsqueezed25[tmp3].o- -1];
	L$poptgepsqueezed25=L$poptgepsqueezed25.a1.a1;
	L$poptgep$poptgep22$poptgep=Larg0.a3.a0;
	tmp3=Larg0.a3.a0o|0;
	if(L$poptgep$poptgep22$poptgep!==nullArray||tmp3!==0)L$poptgep$poptgep22$poptgep[tmp3].a1(L$poptgep$poptgep22$poptgep,tmp3);
	tmp3=Larg0.i6|0;
	if(((L$poptgepsqueezed25.length)|0)===(tmp3|0)){
		tmp0=Larg0.i8|0;
		L$poptgep$poptgep22$poptgep=Larg0.a7;
		if((tmp3|0)!==0){
			Lxtraiter=tmp3&7;
			if((Lxtraiter|0)!==0){
				Lprol$piter=0;
				Lgeptoindexphi3=0;
				Lgeptoindexphi=0;
				while(1){
					L$poptgep$poptgep22$poptgep[tmp0+Lgeptoindexphi3|0]=L$poptgepsqueezed25[0+Lgeptoindexphi|0]|0;
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=0;
				Lgeptoindexphi=0;
			}
			if(tmp3>>>0>=8)while(1){
				L$poptgep$poptgep22$poptgep[tmp0+Lgeptoindexphi3|0]=L$poptgepsqueezed25[0+Lgeptoindexphi|0]|0;
				L$poptgep$poptgep22$poptgep[(tmp0+Lgeptoindexphi3|0)+1|0]=L$poptgepsqueezed25[(0+Lgeptoindexphi|0)+1|0]|0;
				L$poptgep$poptgep22$poptgep[(tmp0+Lgeptoindexphi3|0)+2|0]=L$poptgepsqueezed25[(0+Lgeptoindexphi|0)+2|0]|0;
				L$poptgep$poptgep22$poptgep[(tmp0+Lgeptoindexphi3|0)+3|0]=L$poptgepsqueezed25[(0+Lgeptoindexphi|0)+3|0]|0;
				L$poptgep$poptgep22$poptgep[(tmp0+Lgeptoindexphi3|0)+4|0]=L$poptgepsqueezed25[(0+Lgeptoindexphi|0)+4|0]|0;
				L$poptgep$poptgep22$poptgep[(tmp0+Lgeptoindexphi3|0)+5|0]=L$poptgepsqueezed25[(0+Lgeptoindexphi|0)+5|0]|0;
				L$poptgep$poptgep22$poptgep[(tmp0+Lgeptoindexphi3|0)+6|0]=L$poptgepsqueezed25[(0+Lgeptoindexphi|0)+6|0]|0;
				L$poptgep$poptgep22$poptgep[(tmp0+Lgeptoindexphi3|0)+7|0]=L$poptgepsqueezed25[(0+Lgeptoindexphi|0)+7|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(L$poptgep$poptgep22$poptgep!==L$poptgep$poptgep22$poptgep||(tmp0+tmp3|0)!==(tmp0+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
		L$poptgepsqueezed25=Larg0.a2;
		L$poptgep$poptgep22$poptgep=L$poptgepsqueezed25.a1;
		L$poptgep$poptgep22$poptgep.i0=256;
		L$poptgep$poptgep22$poptgep.i1=tmp3;
		Larg0.a9=L$poptgepsqueezed25;
		Larg0.a0=null;
		L$poptgep$poptgep22$poptgep=L$poptgepsqueezed25.a0;
		tmp3=L$poptgepsqueezed25.a0o|0;
		(L$poptgep$poptgep22$poptgep!==nullArray||tmp3!==0?L$poptgep$poptgep22$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep22$poptgep!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep22$poptgep!==nullArray||tmp3!==0?L$poptgep$poptgep22$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep22$poptgep!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst);
		return;
	}
	___assert_fail(_$pstr$p13,0,_$pstr$p9,0,319,___func__$p_ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,0);
	;
}
function __ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgepsqueezed12=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed13=null,tmp5=0,tmp6=-0.,tmp7=null;
	tmp2=new constructor__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj$presume;
	tmp3.a1=__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj$pdestroy;
	L$poptgepsqueezed12=tmp3.a2;
	L$poptgepsqueezed12.a0=nullArray;
	L$poptgepsqueezed12.a0o=0;
	tmp1=L$poptgepsqueezed12.a1;
	tmp1.i0=0;
	L$poptgepsqueezed13=L$poptgepsqueezed12.a;
	tmp5=L$poptgepsqueezed12.o-1;
	Larg0.a0=L$poptgepsqueezed13;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed13=__ZN7CheerpX5Linux6eventsE[3];
	tmp3.a7=L$poptgepsqueezed13;
	if(L$poptgepsqueezed13!==null)tmp6=+performance.now();
	else{
		tmp6=0;
	}
	tmp3.d6=tmp6;
	L$poptgepsqueezed13=tmp3.a3;
	Larg1.a0.a5(L$poptgepsqueezed13,Larg1,Larg2,Larg3,Larg4);
	tmp7=L$poptgepsqueezed13.a0;
	tmp5=L$poptgepsqueezed13.a0o|0;
	a:{
		if(tmp7!==nullArray||tmp5!==0)if(tmp7[tmp5].a0!==null){
			tmp3.i4=0;
			tmp3=tmp7[tmp5].a[tmp7[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp7=tmp7[tmp5].a[tmp7[tmp5].o- -1];
		tmp7=tmp7.a1.a1;
		tmp2=L$poptgepsqueezed13.a0;
		tmp5=L$poptgepsqueezed13.a0o|0;
		if(tmp2!==nullArray||tmp5!==0)tmp2[tmp5].a1(tmp2,tmp5);
		tmp2=tmp3.a7;
		if(tmp2!==null){
			tmp6=+tmp3.d6;
			L$poptgepsqueezed13=[null];
			L$poptgepsqueezed13[0]=~~( +performance.now()-tmp6);
			L$poptgepsqueezed13=L$poptgepsqueezed13[0];
			__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(tmp2,L$poptgepsqueezed13);
		}
		tmp1.i0=256;
		tmp1.a1=tmp7;
		tmp3.a8=L$poptgepsqueezed12;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed12.a0;
		tmp5=L$poptgepsqueezed12.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst);
	}
}
function ___NoopCoro_ResumeDestroy(Larg0){
}
function __ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=-0.,tmp1=null,tmp2=0,L$poptgepsqueezed7=null,L$poptgep$poptgep4$poptgep=null;
	tmp1=Larg0.a3.a0;
	tmp2=Larg0.a3.a0o|0;
	tmp1=tmp1[tmp2].a[tmp1[tmp2].o- -1];
	tmp1=tmp1.a1.a1;
	L$poptgepsqueezed7=Larg0.a3.a0;
	tmp2=Larg0.a3.a0o|0;
	if(L$poptgepsqueezed7!==nullArray||tmp2!==0)L$poptgepsqueezed7[tmp2].a1(L$poptgepsqueezed7,tmp2);
	L$poptgepsqueezed7=Larg0.a7;
	if(L$poptgepsqueezed7!==null){
		tmp0=+Larg0.d6;
		L$poptgep$poptgep4$poptgep=[null];
		L$poptgep$poptgep4$poptgep[0]=~~( +performance.now()-tmp0);
		L$poptgep$poptgep4$poptgep=L$poptgep$poptgep4$poptgep[0];
		__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(L$poptgepsqueezed7,L$poptgep$poptgep4$poptgep);
	}
	L$poptgepsqueezed7=Larg0.a2;
	L$poptgep$poptgep4$poptgep=L$poptgepsqueezed7.a1;
	L$poptgep$poptgep4$poptgep.i0=256;
	L$poptgep$poptgep4$poptgep.a1=tmp1;
	Larg0.a8=L$poptgepsqueezed7;
	Larg0.a0=null;
	L$poptgep$poptgep4$poptgep=L$poptgepsqueezed7.a0;
	tmp2=L$poptgepsqueezed7.a0o|0;
	(L$poptgep$poptgep4$poptgep!==nullArray||tmp2!==0?L$poptgep$poptgep4$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep4$poptgep!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep4$poptgep!==nullArray||tmp2!==0?L$poptgep$poptgep4$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep4$poptgep!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX6Device3runEPNS_5LinuxE$presume(Larg0,Marg0){
	;
}
function __ZN7CheerpX6Device3runEPNS_5LinuxE$pdestroy(Larg0,Marg0){
}
function __ZN7CheerpX10DataDevice3runEPNS_5LinuxE(Larg0,Larg1,Larg2){
	var L$poptgepsqueezed4=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=create__ZN7CheerpX10DataDevice3runEPNS_5LinuxE$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,i4:0});
	tmp2=tmp2;
	tmp2.a0=__ZN7CheerpX10DataDevice3runEPNS_5LinuxE$presume;
	tmp2.a1=__ZN7CheerpX10DataDevice3runEPNS_5LinuxE$pdestroy;
	L$poptgepsqueezed4=tmp2.a2;
	L$poptgepsqueezed4.a0=nullArray;
	L$poptgepsqueezed4.a0o=0;
	tmp1=L$poptgepsqueezed4.a;
	tmp3=L$poptgepsqueezed4.o-1;
	Larg0.a0=tmp1;
	Larg0.a0o=tmp3;
	Larg1.a4=Larg2;
	tmp2.a3=L$poptgepsqueezed4;
	tmp2.a0=null;
	tmp2=L$poptgepsqueezed4.a0;
	tmp3=L$poptgepsqueezed4.a0o|0;
	(tmp2!==nullArray||tmp3!==0?tmp2:_NoopCoro$pFrame$pConst)[tmp2!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst].a0((tmp2!==nullArray||tmp3!==0?tmp2:_NoopCoro$pFrame$pConst),tmp2!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX10DataDevice3runEPNS_5LinuxE$presume(Larg0,Marg0){
	;
}
function __ZN7CheerpX10DataDevice3runEPNS_5LinuxE$pdestroy(Larg0,Marg0){
}
function __ZN7CheerpX15HttpBytesDevice11getPermTypeEv(Larg0,Larg1){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0;
	tmp3=create__ZN7CheerpX15HttpBytesDevice11getPermTypeEv$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp3={i0:0,i1:0}},i3:0,a4:tmp3=[0],a5:null});
	tmp3=tmp3;
	tmp3.a0=__ZN7CheerpX15HttpBytesDevice11getPermTypeEv$presume;
	tmp3.a1=__ZN7CheerpX15HttpBytesDevice11getPermTypeEv$pdestroy;
	L$poptgepsqueezed8=tmp3.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	tmp2=L$poptgepsqueezed8.a;
	tmp4=L$poptgepsqueezed8.o-1;
	Larg0.a0=tmp2;
	Larg0.a0o=tmp4;
	tmp4=tmp1.i0|0;
	tmp1.i1=0;
	if((tmp4&65535)<256)tmp1.i0=tmp4|256;
	tmp3.a5=L$poptgepsqueezed8;
	tmp3.a0=null;
	tmp3=L$poptgepsqueezed8.a0;
	tmp4=L$poptgepsqueezed8.a0o|0;
	(tmp3!==nullArray||tmp4!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp4!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX15HttpBytesDevice12requestBytesEP11CheerpXBasejj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgepsqueezed14=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,tmp6=0,L$poptgepsqueezed15=null;
	tmp3=create__ZN7CheerpX15HttpBytesDevice12requestBytesEP11CheerpXBasejj$pFrame({a0:null,a1:null,a2:tmp3={a0:nullArray,a0o:0,a1:{i0:0,a1:null}},a3:tmp3={a0:nullArray,a0o:0},i4:0,a5:[0],a6:null,a7:null}).a;
	tmp4=tmp3[0];
	tmp4.a0=__ZN7CheerpX15HttpBytesDevice12requestBytesEP11CheerpXBasejj$presume;
	tmp4.a1=__ZN7CheerpX15HttpBytesDevice12requestBytesEP11CheerpXBasejj$pdestroy;
	L$poptgepsqueezed14=tmp4.a2;
	L$poptgepsqueezed14.a0=nullArray;
	L$poptgepsqueezed14.a0o=0;
	tmp1=L$poptgepsqueezed14.a1;
	tmp1.i0=0;
	tmp5=L$poptgepsqueezed14.a;
	tmp6=L$poptgepsqueezed14.o-1;
	Larg0.a0=tmp5;
	Larg0.a0o=tmp6;
	tmp5=new XMLHttpRequest();
	tmp4.a6=tmp5;
	L$poptgepsqueezed15="GET";
	tmp5.open(L$poptgepsqueezed15,Larg1.a5);
	L$poptgepsqueezed15="bytes=".concat(Larg3);
	L$poptgepsqueezed15=L$poptgepsqueezed15.concat("-").concat((Larg3-1|0)+Larg4|0);
	tmp2="Range";
	tmp5.setRequestHeader(tmp2,L$poptgepsqueezed15);
	L$poptgepsqueezed15="arraybuffer";
	tmp5.responseType=L$poptgepsqueezed15;
	L$poptgepsqueezed15=tmp4.a3;
	__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE(L$poptgepsqueezed15,tmp5);
	tmp5=L$poptgepsqueezed15.a0;
	tmp6=L$poptgepsqueezed15.a0o|0;
	a:{
		if(tmp5!==nullArray||tmp6!==0){
			if(tmp5[tmp6].a0!==null){
				tmp4.i4=0;
				tmp4=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp4.a0=tmp3;
				tmp4.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
		}
		tmp3=tmp4.a6.response;
		tmp5=new Uint8Array(tmp3);
		tmp1.i0=256;
		tmp1.a1=tmp5;
		tmp4.a7=L$poptgepsqueezed14;
		tmp4.a0=null;
		tmp3=L$poptgepsqueezed14.a0;
		tmp6=L$poptgepsqueezed14.a0o|0;
		(tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX15HttpBytesDevice12requestBytesEP11CheerpXBasejj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,L$poptgepsqueezed7=null,tmp2=0,L$poptgep$poptgep2$poptgep=null;
	L$poptgepsqueezed7=Larg0.a3.a0;
	tmp2=Larg0.a3.a0o|0;
	if(L$poptgepsqueezed7!==nullArray||tmp2!==0)L$poptgepsqueezed7[tmp2].a1(L$poptgepsqueezed7,tmp2);
	L$poptgepsqueezed7=Larg0.a6.response;
	tmp0=new Uint8Array(L$poptgepsqueezed7);
	L$poptgepsqueezed7=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed7.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.a1=tmp0;
	Larg0.a7=L$poptgepsqueezed7;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed7.a0;
	tmp2=L$poptgepsqueezed7.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX15HttpBytesDevice12requestBytesEP11CheerpXBasejj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
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
function __ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE(Larg0,Larg1){
	var tmp0=null,L$poptgepsqueezed12=null,tmp2=null,L$poptgepsqueezed13=null,tmp4=0,tmp5=null;
	tmp2=create__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE$pFrame({a0:null,a1:null,a2:tmp2={a0:nullArray,a0o:0},a3:null,a4:null,a5:null,a6:tmp2={i0:0,a1:{a0:nullArray,a0o:0}},i7:0}).a;
	tmp0=tmp2[0];
	tmp0.a0=__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE$presume;
	tmp0.a1=__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE$pdestroy;
	L$poptgepsqueezed12=tmp0.a2;
	L$poptgepsqueezed12.a0=nullArray;
	L$poptgepsqueezed12.a0o=0;
	L$poptgepsqueezed13=L$poptgepsqueezed12.a;
	tmp4=L$poptgepsqueezed12.o-1;
	Larg0.a0=L$poptgepsqueezed13;
	Larg0.a0o=tmp4;
	L$poptgepsqueezed13=__ZN7CheerpX5Linux6eventsE[2];
	tmp0.a3=L$poptgepsqueezed13;
	tmp5="wait";
	tmp0.a4="ready";
	if(L$poptgepsqueezed13!==null)__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(L$poptgepsqueezed13,tmp5);
	L$poptgepsqueezed13=tmp0.a6;
	L$poptgepsqueezed13.i0=0;
	L$poptgepsqueezed13.a1.a0=nullArray;
	L$poptgepsqueezed13.a1.a0o=0;
	tmp5=[{a0:null}];
	tmp5[0].a0=L$poptgepsqueezed13;
	tmp5=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestEE3$_0JRSA_EEET_DpOT0_EUlvE_JEEEvPSD_DpSE_,tmp5[0]);
	Larg1.onload=tmp5;
	Larg1.send();
	if((L$poptgepsqueezed13.i0&255)!==0){
		tmp2=tmp0.a3;
		if(tmp2!==null){
			L$poptgepsqueezed13=tmp0.a4;
			__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(tmp2,L$poptgepsqueezed13);
		}
		tmp0.a5=L$poptgepsqueezed12;
		tmp0.a0=null;
		tmp2=L$poptgepsqueezed12.a0;
		tmp4=L$poptgepsqueezed12.a0o|0;
		(tmp2!==nullArray||tmp4!==0?tmp2:_NoopCoro$pFrame$pConst)[tmp2!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst].a0((tmp2!==nullArray||tmp4!==0?tmp2:_NoopCoro$pFrame$pConst),tmp2!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i7=0;
		L$poptgepsqueezed13.a1.a0=tmp2;
		L$poptgepsqueezed13.a1.a0o=0;
	}
}
function __ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,L$poptgepsqueezed5=null,tmp2=null;
	L$poptgepsqueezed5=Larg0.a3;
	if(L$poptgepsqueezed5!==null){
		tmp2=Larg0.a4;
		__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(L$poptgepsqueezed5,tmp2);
	}
	L$poptgepsqueezed5=Larg0.a2;
	Larg0.a5=L$poptgepsqueezed5;
	Larg0.a0=null;
	tmp2=L$poptgepsqueezed5.a0;
	tmp0=L$poptgepsqueezed5.a0o|0;
	(tmp2!==nullArray||tmp0!==0?tmp2:_NoopCoro$pFrame$pConst)[tmp2!==nullArray||tmp0!==0?tmp0:$NoopCoro$pFrame$pConst].a0((tmp2!==nullArray||tmp0!==0?tmp2:_NoopCoro$pFrame$pConst),tmp2!==nullArray||tmp0!==0?tmp0:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestEE3$_0JRSA_EEET_DpOT0_EUlvE_JEEEvPSD_DpSE_(Larg0){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i0=1;
	tmp1=tmp0.a1.a0;
	tmp2=tmp0.a1.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX15HttpBytesDevice11getPermTypeEv$presume(Larg0,Marg0){
	;
}
function __ZN7CheerpX15HttpBytesDevice11getPermTypeEv$pdestroy(Larg0,Marg0){
}
function __ZN7CheerpX11CloudDevice11getPermTypeEv(Larg0,Larg1){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0;
	tmp3=create__ZN7CheerpX11CloudDevice11getPermTypeEv$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp3={i0:0,i1:0}},i3:0,a4:tmp3=[0],a5:null});
	tmp3=tmp3;
	tmp3.a0=__ZN7CheerpX11CloudDevice11getPermTypeEv$presume;
	tmp3.a1=__ZN7CheerpX11CloudDevice11getPermTypeEv$pdestroy;
	L$poptgepsqueezed8=tmp3.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	tmp2=L$poptgepsqueezed8.a;
	tmp4=L$poptgepsqueezed8.o-1;
	Larg0.a0=tmp2;
	Larg0.a0o=tmp4;
	tmp4=tmp1.i0|0;
	tmp1.i1=0;
	if((tmp4&65535)<256)tmp1.i0=tmp4|256;
	tmp3.a5=L$poptgepsqueezed8;
	tmp3.a0=null;
	tmp3=L$poptgepsqueezed8.a0;
	tmp4=L$poptgepsqueezed8.a0o|0;
	(tmp3!==nullArray||tmp4!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp4!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgepsqueezed40=null,tmp1=null,L$poptgepsqueezed41=null,tmp3=null,tmp4=null,L$pbe=null,tmp6=0,L$poptgepsqueezed42=null,L$pbe25=null,tmp9=null;
	tmp3=new constructor__ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj$pFrame().a;
	tmp4=tmp3[0];
	tmp4.a0=__ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj$presume;
	tmp4.a1=__ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj$pdestroy;
	tmp4.a5=Larg1;
	L$poptgepsqueezed40=tmp4.a2;
	L$poptgepsqueezed40.a0=nullArray;
	L$poptgepsqueezed40.a0o=0;
	tmp1=L$poptgepsqueezed40.a1;
	tmp1.i0=0;
	L$pbe=L$poptgepsqueezed40.a;
	tmp6=L$poptgepsqueezed40.o-1;
	Larg0.a0=L$pbe;
	Larg0.a0o=tmp6;
	tmp6=(Larg3-1|0)+Larg4|0;
	a:{
		b:if(Larg1.a6!==null){
			L$pbe=String(Larg3);
			L$pbe=L$pbe.concat("-",tmp6);
			tmp4.a6=L$pbe;
			L$poptgepsqueezed41=tmp4.a4;
			L$poptgepsqueezed42=tmp4.a3;
			while(1){
				tmp4.a7=L$pbe25;
				L$pbe25=tmp4.a5;
				L$poptgepsqueezed42.i0=0;
				L$poptgepsqueezed42.a2.a0=nullArray;
				L$poptgepsqueezed42.a2.a0o=0;
				L$pbe25=L$pbe25.a6;
				tmp9=[{a0:null}];
				tmp9[0].a0=L$poptgepsqueezed42;
				tmp9=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client12MessageEventIPNS4_11ArrayBufferEEEEC1IZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejjE3$_0JRPNS4_9WebSocketERPNS4_6StringEEEET_DpOT0_EUlS9_E_JS9_EEEvPSN_DpSO_,tmp9[0]);
				L$pbe25.onmessage=tmp9;
				if(L$pbe!==null)L$pbe25.send(L$pbe);
				if((L$poptgepsqueezed42.i0&255)!==0){
					L$pbe=L$poptgepsqueezed42.a1.data;
					if( +L$pbe.byteLength===0){
						L$pbe25=tmp4.a7;
						L$pbe=null;
					}else{
						if(!( +L$pbe.byteLength===1)){
							L$pbe25=new Uint8Array(L$pbe);
							tmp1.i0=256;
							tmp1.a1=L$pbe25;
							break b;
						}
						L$pbe=tmp4.a7;
						L$pbe25=new WebSocket(tmp4.a5.a5);
						tmp4.a8=L$pbe25;
						L$pbe="arraybuffer";
						tmp4.a9=L$pbe;
						L$pbe25.binaryType=L$pbe;
						L$poptgepsqueezed41.i0=0;
						L$poptgepsqueezed41.a2.a0=nullArray;
						L$poptgepsqueezed41.a2.a0o=0;
						L$pbe=[{a0:null}];
						L$pbe[0].a0=L$poptgepsqueezed41;
						L$pbe=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client12MessageEventIPNS4_6StringEEEEC1IZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejjE3$_0JRPNS4_9WebSocketEDnEEET_DpOT0_EUlS9_E_JS9_EEEvPSK_DpSL_,L$pbe[0]);
						L$pbe25.onmessage=L$pbe;
						if((L$poptgepsqueezed41.i0&255)===0){
							tmp4.i13=1;
							L$poptgepsqueezed41.a2.a0=tmp3;
							L$poptgepsqueezed41.a2.a0o=0;
							break a;
						}
						L$pbe=tmp4.a8;
						L$pbe25=tmp4.a5;
						L$pbe25.a6.close();
						L$pbe25.a6=L$pbe;
						L$pbe=tmp4.a6;
						L$pbe25=tmp4.a9;
					}
					continue;
				}
				break;
			}
			tmp4.i13=0;
			L$poptgepsqueezed42.a2.a0=tmp3;
			L$poptgepsqueezed42.a2.a0o=0;
			break a;
		}else{
			L$pbe=new XMLHttpRequest();
			tmp4.a10=L$pbe;
			L$poptgepsqueezed42=Larg1.a5;
			L$pbe25="?s=";
			L$poptgepsqueezed42=L$poptgepsqueezed42.concat(L$pbe25,Larg3,"&e=",tmp6);
			L$pbe25="GET";
			L$pbe.open(L$pbe25,L$poptgepsqueezed42);
			L$poptgepsqueezed42="arraybuffer";
			L$pbe.responseType=L$poptgepsqueezed42;
			L$poptgepsqueezed42=tmp4.a12;
			__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE(L$poptgepsqueezed42,L$pbe);
			L$pbe=L$poptgepsqueezed42.a0;
			tmp6=L$poptgepsqueezed42.a0o|0;
			if(L$pbe!==nullArray||tmp6!==0){
				if(L$pbe[tmp6].a0!==null){
					tmp4.i13=2;
					tmp4=L$pbe[tmp6].a[L$pbe[tmp6].o- -1];
					tmp4.a0=tmp3;
					tmp4.a0o=0;
					break a;
				}
				L$pbe[tmp6].a1(L$pbe,tmp6);
			}
			tmp3=tmp4.a10.response;
			L$pbe=new Uint8Array(tmp3);
			tmp1.i0=256;
			tmp1.a1=L$pbe;
		}
		tmp4.a11=L$poptgepsqueezed40;
		tmp4.a0=null;
		tmp3=L$poptgepsqueezed40.a0;
		tmp6=L$poptgepsqueezed40.a0o|0;
		(tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj$presume(Larg0,Marg0){
	var L$poptgepsqueezed41=null,Llabel=0,L$poptgep$poptgep6$poptgep8=null,L$poptgepsqueezed43=null,L$poptgep$poptgep6$poptgep=null,tmp5=null,tmp6=null;
	Llabel=Larg0[Marg0].i13|0;
	L$poptgepsqueezed41=Larg0[Marg0].a2;
	a:{
		b:if(Llabel<<30>-1073741824){
			L$poptgep$poptgep6$poptgep8=Larg0[Marg0].a4;
			L$poptgepsqueezed43=Larg0[Marg0].a3;
			if((Llabel&3)!==0){
				Llabel=-1;
			}else{
				Llabel=0;
			}
			c:while(1){
				switch(Llabel|0){
					case 0:
					L$poptgep$poptgep6$poptgep=L$poptgepsqueezed43.a1.data;
					if( +L$poptgep$poptgep6$poptgep.byteLength===0){
						tmp5=Larg0[Marg0].a7;
						L$poptgep$poptgep6$poptgep=null;
						break;
					}
					if( +L$poptgep$poptgep6$poptgep.byteLength===1){
						L$poptgep$poptgep6$poptgep=Larg0[Marg0].a7;
						tmp5=new WebSocket(Larg0[Marg0].a5.a5);
						Larg0[Marg0].a8=tmp5;
						L$poptgep$poptgep6$poptgep="arraybuffer";
						Larg0[Marg0].a9=L$poptgep$poptgep6$poptgep;
						tmp5.binaryType=L$poptgep$poptgep6$poptgep;
						L$poptgep$poptgep6$poptgep8.i0=0;
						L$poptgep$poptgep6$poptgep8.a2.a0=nullArray;
						L$poptgep$poptgep6$poptgep8.a2.a0o=0;
						L$poptgep$poptgep6$poptgep=[{a0:null}];
						L$poptgep$poptgep6$poptgep[0].a0=L$poptgep$poptgep6$poptgep8;
						L$poptgep$poptgep6$poptgep=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client12MessageEventIPNS4_6StringEEEEC1IZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejjE3$_0JRPNS4_9WebSocketEDnEEET_DpOT0_EUlS9_E_JS9_EEEvPSK_DpSL_,L$poptgep$poptgep6$poptgep[0]);
						tmp5.onmessage=L$poptgep$poptgep6$poptgep;
						if((L$poptgep$poptgep6$poptgep8.i0&255)!==0){
							Llabel=-1;
							continue c;
						}
						Larg0[Marg0].i13=1;
						L$poptgep$poptgep6$poptgep8.a2.a0=Larg0;
						L$poptgep$poptgep6$poptgep8.a2.a0o=Marg0;
						break a;
					}
					tmp5=new Uint8Array(L$poptgep$poptgep6$poptgep);
					L$poptgep$poptgep6$poptgep=L$poptgepsqueezed41.a1;
					L$poptgep$poptgep6$poptgep.i0=256;
					L$poptgep$poptgep6$poptgep.a1=tmp5;
					break b;
					default:
					L$poptgep$poptgep6$poptgep=Larg0[Marg0].a8;
					tmp5=Larg0[Marg0].a5;
					tmp5.a6.close();
					tmp5.a6=L$poptgep$poptgep6$poptgep;
					L$poptgep$poptgep6$poptgep=Larg0[Marg0].a6;
					tmp5=Larg0[Marg0].a9;
				}
				Larg0[Marg0].a7=tmp5;
				tmp5=Larg0[Marg0].a5;
				L$poptgepsqueezed43.i0=0;
				L$poptgepsqueezed43.a2.a0=nullArray;
				L$poptgepsqueezed43.a2.a0o=0;
				tmp5=tmp5.a6;
				tmp6=[{a0:null}];
				tmp6[0].a0=L$poptgepsqueezed43;
				tmp6=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client12MessageEventIPNS4_11ArrayBufferEEEEC1IZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejjE3$_0JRPNS4_9WebSocketERPNS4_6StringEEEET_DpOT0_EUlS9_E_JS9_EEEvPSN_DpSO_,tmp6[0]);
				tmp5.onmessage=tmp6;
				if(L$poptgep$poptgep6$poptgep!==null)tmp5.send(L$poptgep$poptgep6$poptgep);
				if((L$poptgepsqueezed43.i0&255)!==0){
					Llabel=0;
					continue c;
				}
				break;
			}
			Larg0[Marg0].i13=0;
			L$poptgepsqueezed43.a2.a0=Larg0;
			L$poptgepsqueezed43.a2.a0o=Marg0;
			break a;
		}else{
			L$poptgep$poptgep6$poptgep8=Larg0[Marg0].a12.a0;
			Llabel=Larg0[Marg0].a12.a0o|0;
			if(L$poptgep$poptgep6$poptgep8!==nullArray||Llabel!==0)L$poptgep$poptgep6$poptgep8[Llabel].a1(L$poptgep$poptgep6$poptgep8,Llabel);
			L$poptgep$poptgep6$poptgep8=Larg0[Marg0].a10.response;
			L$poptgepsqueezed43=new Uint8Array(L$poptgep$poptgep6$poptgep8);
			L$poptgep$poptgep6$poptgep8=L$poptgepsqueezed41.a1;
			L$poptgep$poptgep6$poptgep8.i0=256;
			L$poptgep$poptgep6$poptgep8.a1=L$poptgepsqueezed43;
		}
		Larg0[Marg0].a11=L$poptgepsqueezed41;
		Larg0[Marg0].a0=null;
		L$poptgep$poptgep6$poptgep8=L$poptgepsqueezed41.a0;
		Llabel=L$poptgepsqueezed41.a0o|0;
		(L$poptgep$poptgep6$poptgep8!==nullArray||Llabel!==0?L$poptgep$poptgep6$poptgep8:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep6$poptgep8!==nullArray||Llabel!==0?Llabel:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep6$poptgep8!==nullArray||Llabel!==0?L$poptgep$poptgep6$poptgep8:_NoopCoro$pFrame$pConst),L$poptgep$poptgep6$poptgep8!==nullArray||Llabel!==0?Llabel:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null)if(Larg0.i13<<30<=-1073741824){
		tmp0=Larg0.a12.a0;
		tmp1=Larg0.a12.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client12MessageEventIPNS4_11ArrayBufferEEEEC1IZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejjE3$_0JRPNS4_9WebSocketERPNS4_6StringEEEET_DpOT0_EUlS9_E_JS9_EEEvPSN_DpSO_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.a1=Larg1;
	tmp0.i0=1;
	tmp1=tmp0.a2.a0;
	tmp2=tmp0.a2.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client12MessageEventIPNS4_6StringEEEEC1IZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejjE3$_0JRPNS4_9WebSocketEDnEEET_DpOT0_EUlS9_E_JS9_EEEvPSK_DpSL_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.a1=Larg1;
	tmp0.i0=1;
	tmp1=tmp0.a2.a0;
	tmp2=tmp0.a2.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX11CloudDevice11getPermTypeEv$presume(Larg0,Marg0){
	;
}
function __ZN7CheerpX11CloudDevice11getPermTypeEv$pdestroy(Larg0,Marg0){
}
function __ZN7CheerpX12GitHubDevice11getPermTypeEv(Larg0,Larg1){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0;
	tmp3=create__ZN7CheerpX12GitHubDevice11getPermTypeEv$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp3={i0:0,i1:0}},i3:0,a4:tmp3=[0],a5:null});
	tmp3=tmp3;
	tmp3.a0=__ZN7CheerpX12GitHubDevice11getPermTypeEv$presume;
	tmp3.a1=__ZN7CheerpX12GitHubDevice11getPermTypeEv$pdestroy;
	L$poptgepsqueezed8=tmp3.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	tmp2=L$poptgepsqueezed8.a;
	tmp4=L$poptgepsqueezed8.o-1;
	Larg0.a0=tmp2;
	Larg0.a0o=tmp4;
	tmp4=tmp1.i0|0;
	tmp1.i1=0;
	if((tmp4&65535)<256)tmp1.i0=tmp4|256;
	tmp3.a5=L$poptgepsqueezed8;
	tmp3.a0=null;
	tmp3=L$poptgepsqueezed8.a0;
	tmp4=L$poptgepsqueezed8.a0o|0;
	(tmp3!==nullArray||tmp4!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp4!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgepsqueezed17=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=0,L$poptgepsqueezed14=null,L$poptgep$poptgep7$poptgepsqueezed=null;
	tmp2=create__ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj$pFrame({a0:null,a1:null,a2:tmp2={a0:nullArray,a0o:0,a1:{i0:0,a1:null}},a3:new Uint8Array(9),a4:tmp2={a0:nullArray,a0o:0},i5:0,a6:null,a7:null}).a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj$presume;
	tmp3.a1=__ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj$pdestroy;
	L$poptgepsqueezed17=tmp3.a2;
	L$poptgepsqueezed17.a0=nullArray;
	L$poptgepsqueezed17.a0o=0;
	tmp1=L$poptgepsqueezed17.a1;
	tmp1.i0=0;
	tmp4=L$poptgepsqueezed17.a;
	tmp5=L$poptgepsqueezed17.o-1;
	Larg0.a0=tmp4;
	Larg0.a0o=tmp5;
	tmp4=new XMLHttpRequest();
	tmp3.a6=tmp4;
	L$poptgepsqueezed14=Larg1.a5;
	L$poptgepsqueezed14=L$poptgepsqueezed14.concat(".c");
	if((Larg3&131071|0)!==0)___assert_fail(_$pstr$p22,0,_$pstr$p9,0,597,___func__$p_ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj,0);
	;
	L$poptgep$poptgep7$poptgepsqueezed=tmp3.a3;
	__Z11padHexValuePcjj(L$poptgep$poptgep7$poptgepsqueezed,0,Larg3>>>17);
	L$poptgep$poptgep7$poptgepsqueezed[6]=0;
	L$poptgepsqueezed14=L$poptgepsqueezed14.concat(_cheerpCreate_ZN6client6StringC2EPKc(L$poptgep$poptgep7$poptgepsqueezed,0));
	L$poptgepsqueezed14=L$poptgepsqueezed14.concat(".txt");
	L$poptgep$poptgep7$poptgepsqueezed="GET";
	tmp4.open(L$poptgep$poptgep7$poptgepsqueezed,L$poptgepsqueezed14);
	L$poptgepsqueezed14="arraybuffer";
	tmp4.responseType=L$poptgepsqueezed14;
	L$poptgepsqueezed14=tmp3.a4;
	__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE(L$poptgepsqueezed14,tmp4);
	tmp4=L$poptgepsqueezed14.a0;
	tmp5=L$poptgepsqueezed14.a0o|0;
	a:{
		if(tmp4!==nullArray||tmp5!==0){
			if(tmp4[tmp5].a0!==null){
				tmp3.i5=0;
				tmp3=tmp4[tmp5].a[tmp4[tmp5].o- -1];
				tmp3.a0=tmp2;
				tmp3.a0o=0;
				break a;
			}
			tmp4[tmp5].a1(tmp4,tmp5);
		}
		tmp2=tmp3.a6.response;
		tmp4=new Uint8Array(tmp2);
		tmp1.i0=256;
		tmp1.a1=tmp4;
		tmp3.a7=L$poptgepsqueezed17;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed17.a0;
		tmp5=L$poptgepsqueezed17.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,L$poptgepsqueezed7=null,tmp2=0,L$poptgep$poptgep2$poptgep=null;
	L$poptgepsqueezed7=Larg0.a4.a0;
	tmp2=Larg0.a4.a0o|0;
	if(L$poptgepsqueezed7!==nullArray||tmp2!==0)L$poptgepsqueezed7[tmp2].a1(L$poptgepsqueezed7,tmp2);
	L$poptgepsqueezed7=Larg0.a6.response;
	tmp0=new Uint8Array(L$poptgepsqueezed7);
	L$poptgepsqueezed7=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed7.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.a1=tmp0;
	Larg0.a7=L$poptgepsqueezed7;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed7.a0;
	tmp2=L$poptgepsqueezed7.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a4.a0;
		tmp1=Larg0.a4.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX12GitHubDevice11getPermTypeEv$presume(Larg0,Marg0){
	;
}
function __ZN7CheerpX12GitHubDevice11getPermTypeEv$pdestroy(Larg0,Marg0){
}
function __ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE(Larg0,Larg1,Larg2){
	var L$poptgepsqueezed16=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed18=null,tmp5=0;
	tmp2=new constructor__ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE$presume;
	tmp3.a1=__ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE$pdestroy;
	tmp3.a4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed16=tmp3.a2;
	L$poptgepsqueezed16.a0=nullArray;
	L$poptgepsqueezed16.a0o=0;
	L$poptgepsqueezed18=L$poptgepsqueezed16.a;
	tmp5=L$poptgepsqueezed16.o-1;
	Larg0.a0=L$poptgepsqueezed18;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed18=tmp3.a6;
	__ZN7CheerpX5Linux13requestDeviceEjj(L$poptgepsqueezed18,Larg2,Larg1.i2|0,Larg1.i3|0);
	tmp1=L$poptgepsqueezed18.a0;
	tmp5=L$poptgepsqueezed18.a0o|0;
	a:{
		if(tmp1!==nullArray||tmp5!==0){
			if(tmp1[tmp5].a0!==null){
				tmp3.i8=0;
				tmp3=tmp1[tmp5].a[tmp1[tmp5].o- -1];
				tmp3.a0=tmp2;
				tmp3.a0o=0;
				break a;
			}
			tmp1[tmp5].a1(tmp1,tmp5);
		}
		__ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE(tmp3.a7,tmp3.a3,tmp3.a4);
		tmp3.a5=L$poptgepsqueezed16;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed16.a0;
		tmp5=L$poptgepsqueezed16.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst);
	}
}
function __ZNK7CheerpX13OverlayDevice16hasPendingWritesEv(Larg0){
	var L$poptgep$poptgep$poptgepsqueezed=null,tmp1=null,tmp2=0,tmp3=null,tmp4=0;
	L$poptgep$poptgep$poptgepsqueezed=Larg0.a10;
	tmp1=L$poptgep$poptgep$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
	tmp3=L$poptgep$poptgep$poptgepsqueezed.a1;
	tmp4=L$poptgep$poptgep$poptgepsqueezed.a1o|0;
	if(tmp1===tmp3&&tmp2===tmp4)return ((Larg0.i11&65535)>255?1:0)|0;
	return 1|0;
}
function __ZN7CheerpX13OverlayDevice11getPermTypeEv(Larg0,Larg1){
	var L$poptgepsqueezed8=null,tmp1=null,L$poptgepsqueezed9=null,tmp3=0,tmp4=null,tmp5=null,tmp6=null,tmp7=0;
	tmp4=create__ZN7CheerpX13OverlayDevice11getPermTypeEv$pFrame({a0:null,a1:null,a2:tmp4={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:{a0:nullArray,a0o:0},i4:0,a5:tmp4=[0],a6:null}).a;
	tmp5=tmp4[0];
	tmp5.a0=__ZN7CheerpX13OverlayDevice11getPermTypeEv$presume;
	tmp5.a1=__ZN7CheerpX13OverlayDevice11getPermTypeEv$pdestroy;
	L$poptgepsqueezed8=tmp5.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	tmp6=L$poptgepsqueezed8.a;
	tmp7=L$poptgepsqueezed8.o-1;
	Larg0.a0=tmp6;
	Larg0.a0o=tmp7;
	tmp6=Larg1.a5;
	L$poptgepsqueezed9=tmp5.a3;
	tmp6.a0.a4(L$poptgepsqueezed9,tmp6);
	tmp6=L$poptgepsqueezed9.a0;
	tmp7=L$poptgepsqueezed9.a0o|0;
	a:{
		if(tmp6!==nullArray||tmp7!==0)if(tmp6[tmp7].a0!==null){
			tmp5.i4=0;
			tmp5=tmp6[tmp7].a[tmp6[tmp7].o- -1];
			tmp5.a0=tmp4;
			tmp5.a0o=0;
			break a;
		}
		tmp6=tmp6[tmp7].a[tmp6[tmp7].o- -1];
		tmp7=tmp6.a1.i1|0;
		tmp6=L$poptgepsqueezed9.a0;
		tmp3=L$poptgepsqueezed9.a0o|0;
		if(tmp6!==nullArray||tmp3!==0)tmp6[tmp3].a1(tmp6,tmp3);
		tmp1.i0=256;
		tmp1.i1=tmp7|2;
		tmp5.a6=L$poptgepsqueezed8;
		tmp5.a0=null;
		tmp4=L$poptgepsqueezed8.a0;
		tmp7=L$poptgepsqueezed8.a0o|0;
		(tmp4!==nullArray||tmp7!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp7!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX13OverlayDevice11getPermTypeEv$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,L$poptgepsqueezed5=null,tmp2=0,L$poptgep$poptgep2$poptgep=null;
	L$poptgepsqueezed5=Larg0.a3.a0;
	tmp2=Larg0.a3.a0o|0;
	L$poptgepsqueezed5=L$poptgepsqueezed5[tmp2].a[L$poptgepsqueezed5[tmp2].o- -1];
	tmp2=L$poptgepsqueezed5.a1.i1|0;
	L$poptgepsqueezed5=Larg0.a3.a0;
	tmp0=Larg0.a3.a0o|0;
	if(L$poptgepsqueezed5!==nullArray||tmp0!==0)L$poptgepsqueezed5[tmp0].a1(L$poptgepsqueezed5,tmp0);
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.i1=tmp2|2;
	Larg0.a6=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a0;
	tmp2=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep2$poptgep!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX13OverlayDevice11getPermTypeEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,L$poptgepsqueezed10=null,tmp2=0;
	L$poptgepsqueezed10=Larg0.a6.a0;
	tmp2=Larg0.a6.a0o|0;
	if(L$poptgepsqueezed10!==nullArray||tmp2!==0)L$poptgepsqueezed10[tmp2].a1(L$poptgepsqueezed10,tmp2);
	__ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE(Larg0.a7,Larg0.a3,Larg0.a4);
	L$poptgepsqueezed10=Larg0.a2;
	Larg0.a5=L$poptgepsqueezed10;
	Larg0.a0=null;
	tmp0=L$poptgepsqueezed10.a0;
	tmp2=L$poptgepsqueezed10.a0o|0;
	(tmp0!==nullArray||tmp2!==0?tmp0:_NoopCoro$pFrame$pConst)[tmp0!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((tmp0!==nullArray||tmp2!==0?tmp0:_NoopCoro$pFrame$pConst),tmp0!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a6.a0;
		tmp1=Larg0.a6.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX10FileDevice11getPermTypeEv(Larg0,Larg1){
	var L$poptgepsqueezed17=null,tmp1=null,L$poptgepsqueezed18=null,tmp3=0,tmp4=null,tmp5=null,tmp6=null,tmp7=0,tmp8=null;
	tmp4=create__ZN7CheerpX10FileDevice11getPermTypeEv$pFrame({a0:null,a1:null,a2:tmp4={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:tmp4={a0:nullArray,a0o:0},i4:0,a5:[0],a6:null,a7:null}).a;
	tmp5=tmp4[0];
	tmp5.a0=__ZN7CheerpX10FileDevice11getPermTypeEv$presume;
	tmp5.a1=__ZN7CheerpX10FileDevice11getPermTypeEv$pdestroy;
	L$poptgepsqueezed17=tmp5.a2;
	L$poptgepsqueezed17.a0=nullArray;
	L$poptgepsqueezed17.a0o=0;
	tmp1=L$poptgepsqueezed17.a1;
	tmp1.i0=0;
	tmp6=L$poptgepsqueezed17.a;
	tmp7=L$poptgepsqueezed17.o-1;
	Larg0.a0=tmp6;
	Larg0.a0o=tmp7;
	tmp6=Larg1.a5;
	tmp8=Larg1.a6;
	tmp5.a6=tmp8;
	L$poptgepsqueezed18=tmp5.a3;
	__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed18,tmp6,tmp8);
	tmp6=L$poptgepsqueezed18.a0;
	tmp7=L$poptgepsqueezed18.a0o|0;
	a:{
		if(tmp6!==nullArray||tmp7!==0)if(tmp6[tmp7].a0!==null){
			tmp5.i4=0;
			tmp5=tmp6[tmp7].a[tmp6[tmp7].o- -1];
			tmp5.a0=tmp4;
			tmp5.a0o=0;
			break a;
		}
		tmp6=tmp6[tmp7].a[tmp6[tmp7].o- -1];
		tmp6=tmp6.a1.a1;
		tmp8=L$poptgepsqueezed18.a0;
		tmp7=L$poptgepsqueezed18.a0o|0;
		if(tmp8!==nullArray||tmp7!==0)tmp8[tmp7].a1(tmp8,tmp7);
		tmp8=tmp5.a6;
		tmp7=tmp6.permType;
		tmp3=tmp1.i0|0;
		tmp1.i1=tmp7;
		if((tmp3&65535)<256)tmp1.i0=tmp3|256;
		tmp5.a7=L$poptgepsqueezed17;
		tmp5.a0=null;
		tmp4=L$poptgepsqueezed17.a0;
		tmp7=L$poptgepsqueezed17.a0o|0;
		(tmp4!==nullArray||tmp7!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp7!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed30=null,tmp1=null,tmp2=null,L$poptgepsqueezed32=null,tmp4=0,tmp5=0,tmp6=null,tmp7=null,L$poptgepsqueezed31=null,tmp9=0,tmp10=null,tmp11=0;
	tmp6=new constructor__ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame().a;
	tmp7=tmp6[0];
	tmp7.a0=__ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$presume;
	tmp7.a1=__ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pdestroy;
	tmp7.i10=Larg6;
	tmp7.a9=Larg5;
	tmp7.i8=Larg4;
	tmp7.i7=Larg3;
	L$poptgepsqueezed30=tmp7.a2;
	L$poptgepsqueezed30.a0=nullArray;
	L$poptgepsqueezed30.a0o=0;
	tmp1=L$poptgepsqueezed30.a1;
	tmp1.i0=0;
	L$poptgepsqueezed31=L$poptgepsqueezed30.a;
	tmp9=L$poptgepsqueezed30.o-1;
	Larg0.a0=L$poptgepsqueezed31;
	Larg0.a0o=tmp9;
	L$poptgepsqueezed31=Larg1.a5;
	tmp10=Larg1.a6;
	tmp7.a11=tmp10;
	tmp2="r";
	tmp7.a12=tmp2;
	L$poptgepsqueezed32=tmp7.a3;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed32,L$poptgepsqueezed31,tmp10,tmp2,0,0);
	L$poptgepsqueezed31=L$poptgepsqueezed32.a0;
	tmp9=L$poptgepsqueezed32.a0o|0;
	a:{
		if(L$poptgepsqueezed31!==nullArray||tmp9!==0)if(L$poptgepsqueezed31[tmp9].a0!==null){
			tmp7.i5=0;
			tmp7=L$poptgepsqueezed31[tmp9].a[L$poptgepsqueezed31[tmp9].o- -1];
			tmp7.a0=tmp6;
			tmp7.a0o=0;
			break a;
		}
		L$poptgepsqueezed31=L$poptgepsqueezed31[tmp9].a[L$poptgepsqueezed31[tmp9].o- -1];
		tmp9=L$poptgepsqueezed31.a1.i1|0;
		L$poptgepsqueezed31=L$poptgepsqueezed32.a0;
		tmp11=L$poptgepsqueezed32.a0o|0;
		if(L$poptgepsqueezed31!==nullArray||tmp11!==0)L$poptgepsqueezed31[tmp11].a1(L$poptgepsqueezed31,tmp11);
		L$poptgepsqueezed31=tmp7.a12;
		tmp10=tmp7.a11;
		tmp11=tmp7.i10|0;
		tmp10=tmp7.a9;
		tmp4=tmp7.i8|0;
		tmp5=tmp7.i7|0;
		__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
		L$poptgepsqueezed31=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
		L$poptgepsqueezed31[0+tmp9|0].offset=tmp5;
		L$poptgepsqueezed31=tmp7.a4;
		__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(L$poptgepsqueezed31,tmp9,tmp10,tmp11,tmp4);
		tmp10=L$poptgepsqueezed31.a0;
		tmp9=L$poptgepsqueezed31.a0o|0;
		if(tmp10!==nullArray||tmp9!==0)if(tmp10[tmp9].a0!==null){
			tmp7.i5=1;
			tmp7=tmp10[tmp9].a[tmp10[tmp9].o- -1];
			tmp7.a0=tmp6;
			tmp7.a0o=0;
			break a;
		}
		tmp10=tmp10[tmp9].a[tmp10[tmp9].o- -1];
		tmp9=tmp10.a1.i1|0;
		tmp10=L$poptgepsqueezed31.a0;
		tmp11=L$poptgepsqueezed31.a0o|0;
		if(tmp10!==nullArray||tmp11!==0)tmp10[tmp11].a1(tmp10,tmp11);
		if((tmp9|0)!==(tmp7.i8|0))___assert_fail(_$pstr$p13,0,_$pstr$p9,0,726,___func__$p_ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,0);
		;
		tmp11=tmp1.i0|0;
		tmp1.i1=tmp9;
		if((tmp11&65535)<256)tmp1.i0=tmp11|256;
		tmp7.a13=L$poptgepsqueezed30;
		tmp7.a0=null;
		tmp6=L$poptgepsqueezed30.a0;
		tmp9=L$poptgepsqueezed30.a0o|0;
		(tmp6!==nullArray||tmp9!==0?tmp6:_NoopCoro$pFrame$pConst)[tmp6!==nullArray||tmp9!==0?tmp9:$NoopCoro$pFrame$pConst].a0((tmp6!==nullArray||tmp9!==0?tmp6:_NoopCoro$pFrame$pConst),tmp6!==nullArray||tmp9!==0?tmp9:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed52=null,tmp1=null,tmp2=0,tmp3=0,L$poptgepsqueezed31=null,tmp5=null,tmp6=null,L$poptgepsqueezed54=null,tmp8=0,tmp9=null,L$poptgepsqueezed33=null,L$poptgepsqueezed55=null,tmp12=0,tmp13=null;
	tmp5=new constructor__ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame().a;
	tmp6=tmp5[0];
	tmp6.a0=__ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj$presume;
	tmp6.a1=__ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj$pdestroy;
	tmp6.i11=Larg6;
	tmp6.a10=Larg5;
	tmp6.i9=Larg4;
	tmp6.i8=Larg3;
	L$poptgepsqueezed52=tmp6.a2;
	L$poptgepsqueezed52.a0=nullArray;
	L$poptgepsqueezed52.a0o=0;
	tmp1=L$poptgepsqueezed52.a1;
	tmp1.i0=0;
	L$poptgepsqueezed54=L$poptgepsqueezed52.a;
	tmp8=L$poptgepsqueezed52.o-1;
	Larg0.a0=L$poptgepsqueezed54;
	Larg0.a0o=tmp8;
	L$poptgepsqueezed54=Larg1.a5;
	tmp9=Larg1.a6;
	tmp6.a12=tmp9;
	L$poptgepsqueezed33="r";
	tmp6.a13=L$poptgepsqueezed33;
	L$poptgepsqueezed55=tmp6.a3;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed55,L$poptgepsqueezed54,tmp9,L$poptgepsqueezed33,0,0);
	L$poptgepsqueezed54=L$poptgepsqueezed55.a0;
	tmp8=L$poptgepsqueezed55.a0o|0;
	a:{
		if(L$poptgepsqueezed54!==nullArray||tmp8!==0)if(L$poptgepsqueezed54[tmp8].a0!==null){
			tmp6.i6=0;
			tmp6=L$poptgepsqueezed54[tmp8].a[L$poptgepsqueezed54[tmp8].o- -1];
			tmp6.a0=tmp5;
			tmp6.a0o=0;
			break a;
		}
		L$poptgepsqueezed54=L$poptgepsqueezed54[tmp8].a[L$poptgepsqueezed54[tmp8].o- -1];
		tmp8=L$poptgepsqueezed54.a1.i1|0;
		tmp6.i14=tmp8;
		L$poptgepsqueezed54=L$poptgepsqueezed55.a0;
		tmp12=L$poptgepsqueezed55.a0o|0;
		if(L$poptgepsqueezed54!==nullArray||tmp12!==0)L$poptgepsqueezed54[tmp12].a1(L$poptgepsqueezed54,tmp12);
		L$poptgepsqueezed54=tmp6.a13;
		tmp9=tmp6.a12;
		tmp12=tmp6.i11|0;
		tmp9=tmp6.a10;
		tmp2=tmp6.i9|0;
		tmp3=tmp6.i8|0;
		__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
		L$poptgepsqueezed54=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
		L$poptgepsqueezed54[0+tmp8|0].offset=tmp3;
		L$poptgepsqueezed54=tmp6.a4;
		__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed54,tmp8,tmp9,tmp12,tmp2);
		tmp9=L$poptgepsqueezed54.a0;
		tmp8=L$poptgepsqueezed54.a0o|0;
		if(tmp9!==nullArray||tmp8!==0)if(tmp9[tmp8].a0!==null){
			tmp6.i6=1;
			tmp6=tmp9[tmp8].a[tmp9[tmp8].o- -1];
			tmp6.a0=tmp5;
			tmp6.a0o=0;
			break a;
		}
		tmp9=tmp9[tmp8].a[tmp9[tmp8].o- -1];
		tmp8=tmp9.a1.i1|0;
		tmp9=L$poptgepsqueezed54.a0;
		tmp12=L$poptgepsqueezed54.a0o|0;
		if(tmp9!==nullArray||tmp12!==0)tmp9[tmp12].a1(tmp9,tmp12);
		if((tmp8|0)!==(tmp6.i9|0))___assert_fail(_$pstr$p13,0,_$pstr$p9,0,736,___func__$p_ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj,0);
		;
		L$poptgepsqueezed54=create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:L$poptgepsqueezed54={i0:0,a1:{a0:nullArray,a0o:0}},i5:0}).a;
		tmp8=tmp6.i14|0;
		tmp9=L$poptgepsqueezed54[0];
		tmp9.a0=__ZN7CheerpX14CheerpOSDevice5closeEi$presume;
		tmp9.a1=__ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy;
		L$poptgepsqueezed31=tmp9.a2;
		L$poptgepsqueezed31.a0=nullArray;
		L$poptgepsqueezed31.a0o=0;
		L$poptgepsqueezed33=L$poptgepsqueezed31.a;
		tmp12=L$poptgepsqueezed31.o-1;
		tmp6.a5.a0=L$poptgepsqueezed33;
		tmp6.a5.a0o=tmp12;
		L$poptgepsqueezed33=tmp9.a4;
		L$poptgepsqueezed33.i0=0;
		L$poptgepsqueezed33.a1.a0=nullArray;
		L$poptgepsqueezed33.a1.a0o=0;
		L$poptgepsqueezed55=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
		tmp13=[{a0:null}];
		tmp13[0].a0=L$poptgepsqueezed33;
		tmp13=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_,tmp13[0]);
		cheerpOSClose(L$poptgepsqueezed55,tmp8,tmp13);
		if((L$poptgepsqueezed33.i0&255)!==0){
			tmp9.a3=L$poptgepsqueezed31;
			tmp9.a0=null;
			L$poptgepsqueezed54=L$poptgepsqueezed31.a0;
			tmp8=L$poptgepsqueezed31.a0o|0;
			(L$poptgepsqueezed54!==nullArray||tmp8!==0?L$poptgepsqueezed54:_NoopCoro$pFrame$pConst)[L$poptgepsqueezed54!==nullArray||tmp8!==0?tmp8:$NoopCoro$pFrame$pConst].a0((L$poptgepsqueezed54!==nullArray||tmp8!==0?L$poptgepsqueezed54:_NoopCoro$pFrame$pConst),L$poptgepsqueezed54!==nullArray||tmp8!==0?tmp8:$NoopCoro$pFrame$pConst);
		}else{
			tmp9.i5=0;
			L$poptgepsqueezed33.a1.a0=L$poptgepsqueezed54;
			L$poptgepsqueezed33.a1.a0o=0;
		}
		L$poptgepsqueezed54=tmp6.a5.a0;
		tmp8=tmp6.a5.a0o|0;
		if(L$poptgepsqueezed54!==nullArray||tmp8!==0){
			if(L$poptgepsqueezed54[tmp8].a0!==null){
				tmp6.i6=2;
				tmp6=L$poptgepsqueezed54[tmp8].a[L$poptgepsqueezed54[tmp8].o- -1];
				tmp6.a0=tmp5;
				tmp6.a0o=0;
				break a;
			}
			L$poptgepsqueezed54[tmp8].a1(L$poptgepsqueezed54,tmp8);
		}
		tmp8=tmp1.i0|0;
		tmp1.i1=tmp6.i9|0;
		if((tmp8&65535)<256)tmp1.i0=tmp8|256;
		tmp6.a15=L$poptgepsqueezed52;
		tmp6.a0=null;
		tmp5=L$poptgepsqueezed52.a0;
		tmp8=L$poptgepsqueezed52.a0o|0;
		(tmp5!==nullArray||tmp8!==0?tmp5:_NoopCoro$pFrame$pConst)[tmp5!==nullArray||tmp8!==0?tmp8:$NoopCoro$pFrame$pConst].a0((tmp5!==nullArray||tmp8!==0?tmp5:_NoopCoro$pFrame$pConst),tmp5!==nullArray||tmp8!==0?tmp8:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj$presume(Larg0,Marg0){
	var L$poptgepsqueezed26=null,tmp1=null,tmp2=0,tmp3=0,L$ppre12_1=0,L$poptgepsqueezed42=null,L$ppre12_0=null,L$ppre_0=null,tmp8=0,L$poptgepsqueezed28=null,tmp10=null;
	L$ppre12_1=Larg0[Marg0].i6|0;
	L$poptgepsqueezed42=Larg0[Marg0].a5;
	a:{
		b:{
			if(L$ppre12_1<<30>-1073741824){
				L$ppre12_0=Larg0[Marg0].a4;
				if((L$ppre12_1&3)!==0){
					L$ppre_0=L$ppre12_0.a0;
					L$ppre12_1=L$ppre12_0.a0o|0;
					L$ppre_0=L$ppre_0[L$ppre12_1];
				}else{
					L$ppre_0=Larg0[Marg0].a3.a0;
					L$ppre12_1=Larg0[Marg0].a3.a0o|0;
					L$ppre_0=L$ppre_0[L$ppre12_1].a[L$ppre_0[L$ppre12_1].o- -1];
					L$ppre12_1=L$ppre_0.a1.i1|0;
					Larg0[Marg0].i14=L$ppre12_1;
					L$ppre_0=Larg0[Marg0].a3.a0;
					tmp8=Larg0[Marg0].a3.a0o|0;
					if(L$ppre_0!==nullArray||tmp8!==0)L$ppre_0[tmp8].a1(L$ppre_0,tmp8);
					L$ppre_0=Larg0[Marg0].a13;
					L$poptgepsqueezed28=Larg0[Marg0].a12;
					tmp8=Larg0[Marg0].i11|0;
					L$ppre_0=Larg0[Marg0].a10;
					tmp2=Larg0[Marg0].i9|0;
					tmp3=Larg0[Marg0].i8|0;
					__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
					L$poptgepsqueezed28=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
					L$poptgepsqueezed28[0+L$ppre12_1|0].offset=tmp3;
					__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$ppre12_0,L$ppre12_1,L$ppre_0,tmp8,tmp2);
					L$ppre_0=L$ppre12_0.a0;
					L$ppre12_1=L$ppre12_0.a0o|0;
					if(L$ppre_0!==nullArray||L$ppre12_1!==0){
						if(L$ppre_0[L$ppre12_1].a0!==null){
							Larg0[Marg0].i6=1;
							L$poptgepsqueezed42=L$ppre_0[L$ppre12_1].a[L$ppre_0[L$ppre12_1].o- -1];
							L$poptgepsqueezed42.a0=Larg0;
							L$poptgepsqueezed42.a0o=Marg0;
							break a;
						}
						L$ppre_0=L$ppre_0[L$ppre12_1];
					}else{
						L$ppre_0=null;
					}
				}
				L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
				L$ppre12_1=L$ppre_0.a1.i1|0;
				L$ppre_0=L$ppre12_0.a0;
				tmp8=L$ppre12_0.a0o|0;
				if(L$ppre_0!==nullArray||tmp8!==0)L$ppre_0[tmp8].a1(L$ppre_0,tmp8);
				if((L$ppre12_1|0)!==(Larg0[Marg0].i9|0))___assert_fail(_$pstr$p13,0,_$pstr$p9,0,736,___func__$p_ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj,0);
				;
				L$ppre12_0=create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:L$ppre12_0={i0:0,a1:{a0:nullArray,a0o:0}},i5:0}).a;
				L$ppre12_1=Larg0[Marg0].i14|0;
				L$ppre_0=L$ppre12_0[0];
				L$ppre_0.a0=__ZN7CheerpX14CheerpOSDevice5closeEi$presume;
				L$ppre_0.a1=__ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy;
				L$poptgepsqueezed26=L$ppre_0.a2;
				L$poptgepsqueezed26.a0=nullArray;
				L$poptgepsqueezed26.a0o=0;
				L$poptgepsqueezed28=L$poptgepsqueezed26.a;
				tmp8=L$poptgepsqueezed26.o-1;
				L$poptgepsqueezed42.a0=L$poptgepsqueezed28;
				L$poptgepsqueezed42.a0o=tmp8;
				L$poptgepsqueezed28=L$ppre_0.a4;
				L$poptgepsqueezed28.i0=0;
				L$poptgepsqueezed28.a1.a0=nullArray;
				L$poptgepsqueezed28.a1.a0o=0;
				tmp1=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
				tmp10=[{a0:null}];
				tmp10[0].a0=L$poptgepsqueezed28;
				tmp10=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_,tmp10[0]);
				cheerpOSClose(tmp1,L$ppre12_1,tmp10);
				if((L$poptgepsqueezed28.i0&255)!==0){
					L$ppre_0.a3=L$poptgepsqueezed26;
					L$ppre_0.a0=null;
					L$ppre12_0=L$poptgepsqueezed26.a0;
					L$ppre12_1=L$poptgepsqueezed26.a0o|0;
					(L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_0:_NoopCoro$pFrame$pConst)[L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_1:$NoopCoro$pFrame$pConst].a0((L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_0:_NoopCoro$pFrame$pConst),L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_1:$NoopCoro$pFrame$pConst);
				}else{
					L$ppre_0.i5=0;
					L$poptgepsqueezed28.a1.a0=L$ppre12_0;
					L$poptgepsqueezed28.a1.a0o=0;
				}
				L$ppre12_0=L$poptgepsqueezed42.a0;
				L$ppre12_1=L$poptgepsqueezed42.a0o|0;
				if(L$ppre12_0===nullArray&&L$ppre12_1===0)break b;
				if(L$ppre12_0[L$ppre12_1].a0!==null){
					Larg0[Marg0].i6=2;
					L$poptgepsqueezed42=L$ppre12_0[L$ppre12_1].a[L$ppre12_0[L$ppre12_1].o- -1];
					L$poptgepsqueezed42.a0=Larg0;
					L$poptgepsqueezed42.a0o=Marg0;
					break a;
				}
				L$ppre12_1=L$ppre12_1;
				L$poptgepsqueezed42=L$ppre12_0;
			}else{
				L$ppre12_0=L$poptgepsqueezed42.a0;
				L$ppre12_1=L$poptgepsqueezed42.a0o|0;
				if(L$ppre12_0===nullArray&&L$ppre12_1===0)break b;
				L$ppre12_1=L$ppre12_1;
				L$poptgepsqueezed42=L$ppre12_0;
			}
			L$poptgepsqueezed42[L$ppre12_1].a1(L$poptgepsqueezed42,L$ppre12_1);
		}
		L$poptgepsqueezed42=Larg0[Marg0].a2;
		L$ppre12_0=L$poptgepsqueezed42.a1;
		L$ppre12_1=L$ppre12_0.i0|0;
		L$ppre12_0.i1=Larg0[Marg0].i9|0;
		if((L$ppre12_1&65535)<256)L$ppre12_0.i0=L$ppre12_1|256;
		Larg0[Marg0].a15=L$poptgepsqueezed42;
		Larg0[Marg0].a0=null;
		L$ppre12_0=L$poptgepsqueezed42.a0;
		L$ppre12_1=L$poptgepsqueezed42.a0o|0;
		(L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_0:_NoopCoro$pFrame$pConst)[L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_1:$NoopCoro$pFrame$pConst].a0((L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_0:_NoopCoro$pFrame$pConst),L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_1:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0,tmp2=null;
	if(Larg0.a0!==null){
		tmp1=Larg0.i6|0;
		if(tmp1<<30>-1073741824){
			if((tmp1&3)!==0){
				tmp2=Larg0.a4.a0;
				tmp1=Larg0.a4.a0o|0;
				if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
			}else{
				tmp2=Larg0.a3.a0;
				tmp1=Larg0.a3.a0o|0;
				if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
				tmp2=Larg0.a13;
				tmp0=Larg0.a12;
			}
		}else{
			tmp2=Larg0.a5.a0;
			tmp1=Larg0.a5.a0o|0;
			if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
		}
	}
}
function __ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,L$poptgepsqueezed10=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null,L$poptgepsqueezed11=null,tmp7=0,tmp8=null;
	tmp5=create__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp5={i0:0,i1:0}},a3:tmp5={i0:0,i1:0,a2:{a0:nullArray,a0o:0}},i4:0,a5:null}).a;
	tmp0=tmp5[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii$pdestroy;
	L$poptgepsqueezed10=tmp0.a2;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	tmp2=L$poptgepsqueezed10.a1;
	tmp2.i0=0;
	L$poptgepsqueezed11=L$poptgepsqueezed10.a;
	tmp7=L$poptgepsqueezed10.o-1;
	Larg0.a0=L$poptgepsqueezed11;
	Larg0.a0o=tmp7;
	L$poptgepsqueezed11=tmp0.a3;
	L$poptgepsqueezed11.i0=0;
	L$poptgepsqueezed11.a2.a0=nullArray;
	L$poptgepsqueezed11.a2.a0o=0;
	tmp3=Larg1.a3;
	tmp4=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
	tmp8=[{a0:null}];
	tmp8[0].a0=L$poptgepsqueezed11;
	tmp8=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvRKN6client6StringEPNS6_13CheerpJFolderEPNS6_6TArrayIPNS6_2FDEEES9_iiPNS6_13EventListenerEEJS9_RSB_RSG_S9_RiSN_EEET_DpOT0_EUliE_JiEEEvPSO_DpSP_,tmp8[0]);
	cheerpOSOpenMain(Larg2,tmp3,tmp4,Larg3,Larg4,Larg5,tmp8);
	if((L$poptgepsqueezed11.i0&255)!==0){
		tmp7=L$poptgepsqueezed11.i1|0;
		tmp2.i0=256;
		tmp2.i1=tmp7;
		tmp0.a5=L$poptgepsqueezed10;
		tmp0.a0=null;
		tmp5=L$poptgepsqueezed10.a0;
		tmp7=L$poptgepsqueezed10.a0o|0;
		(tmp5!==nullArray||tmp7!==0?tmp5:_NoopCoro$pFrame$pConst)[tmp5!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst].a0((tmp5!==nullArray||tmp7!==0?tmp5:_NoopCoro$pFrame$pConst),tmp5!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed11.a2.a0=tmp5;
		L$poptgepsqueezed11.a2.a0o=0;
	}
}
function __ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,L$poptgepsqueezed10=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed11=null,tmp6=0,tmp7=null;
	tmp4=create__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp4={i0:0,i1:0}},a3:tmp4={i0:0,i1:0,a2:{a0:nullArray,a0o:0}},i4:0,a5:null}).a;
	tmp0=tmp4[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii$pdestroy;
	L$poptgepsqueezed10=tmp0.a2;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	tmp2=L$poptgepsqueezed10.a1;
	tmp2.i0=0;
	L$poptgepsqueezed11=L$poptgepsqueezed10.a;
	tmp6=L$poptgepsqueezed10.o-1;
	Larg0.a0=L$poptgepsqueezed11;
	Larg0.a0o=tmp6;
	L$poptgepsqueezed11=tmp0.a3;
	L$poptgepsqueezed11.i0=0;
	L$poptgepsqueezed11.a2.a0=nullArray;
	L$poptgepsqueezed11.a2.a0o=0;
	tmp3=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
	tmp7=[{a0:null}];
	tmp7[0].a0=L$poptgepsqueezed11;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvPN6client6TArrayIPNS6_2FDEEEiPNS6_10Uint8ArrayEiiPNS6_13EventListenerEEJRSB_RiRSD_SJ_SJ_EEET_DpOT0_EUliE_JiEEEvPSL_DpSM_,tmp7[0]);
	cheerpOSWrite(tmp3,Larg1,Larg2,Larg3,Larg4,tmp7);
	if((L$poptgepsqueezed11.i0&255)!==0){
		tmp6=L$poptgepsqueezed11.i1|0;
		tmp2.i0=256;
		tmp2.i1=tmp6;
		tmp0.a5=L$poptgepsqueezed10;
		tmp0.a0=null;
		tmp4=L$poptgepsqueezed10.a0;
		tmp6=L$poptgepsqueezed10.a0o|0;
		(tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed11.a2.a0=tmp4;
		L$poptgepsqueezed11.a2.a0o=0;
	}
}
function __ZN7CheerpX14CheerpOSDevice5closeEi$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed3=null,tmp1=null,tmp2=0;
	L$poptgepsqueezed3=Larg0.a2;
	Larg0.a3=L$poptgepsqueezed3;
	Larg0.a0=null;
	tmp1=L$poptgepsqueezed3.a0;
	tmp2=L$poptgepsqueezed3.a0o|0;
	(tmp1!==nullArray||tmp2!==0?tmp1:_NoopCoro$pFrame$pConst)[tmp1!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((tmp1!==nullArray||tmp2!==0?tmp1:_NoopCoro$pFrame$pConst),tmp1!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_(Larg0){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i0=1;
	tmp1=tmp0.a1.a0;
	tmp2=tmp0.a1.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep1$poptgep=null;
	tmp1=Larg0.a3.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.i1=tmp1;
	Larg0.a5=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvPN6client6TArrayIPNS6_2FDEEEiPNS6_10Uint8ArrayEiiPNS6_13EventListenerEEJRSB_RiRSD_SJ_SJ_EEET_DpOT0_EUliE_JiEEEvPSL_DpSM_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i1=Larg1;
	tmp0.i0=1;
	tmp1=tmp0.a2.a0;
	tmp2=tmp0.a2.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep1$poptgep=null;
	tmp1=Larg0.a3.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.i1=tmp1;
	Larg0.a5=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvRKN6client6StringEPNS6_13CheerpJFolderEPNS6_6TArrayIPNS6_2FDEEES9_iiPNS6_13EventListenerEEJS9_RSB_RSG_S9_RiSN_EEET_DpOT0_EUliE_JiEEEvPSO_DpSP_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i1=Larg1;
	tmp0.i0=1;
	tmp1=tmp0.a2.a0;
	tmp2=tmp0.a2.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$presume(Larg0,Marg0){
	var tmp0=0,tmp1=0,L$poptgepsqueezed25=null,L$ppre_0=null,L$ppre_1=0,tmp5=0,tmp6=null;
	L$poptgepsqueezed25=Larg0[Marg0].a4;
	a:{
		if((Larg0[Marg0].i5&3)!==0){
			L$ppre_0=L$poptgepsqueezed25.a0;
			L$ppre_1=L$poptgepsqueezed25.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1];
		}else{
			L$ppre_0=Larg0[Marg0].a3.a0;
			L$ppre_1=Larg0[Marg0].a3.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
			L$ppre_1=L$ppre_0.a1.i1|0;
			L$ppre_0=Larg0[Marg0].a3.a0;
			tmp5=Larg0[Marg0].a3.a0o|0;
			if(L$ppre_0!==nullArray||tmp5!==0)L$ppre_0[tmp5].a1(L$ppre_0,tmp5);
			L$ppre_0=Larg0[Marg0].a12;
			tmp6=Larg0[Marg0].a11;
			tmp5=Larg0[Marg0].i10|0;
			L$ppre_0=Larg0[Marg0].a9;
			tmp0=Larg0[Marg0].i8|0;
			tmp1=Larg0[Marg0].i7|0;
			__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
			tmp6=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
			tmp6[0+L$ppre_1|0].offset=tmp1;
			__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(L$poptgepsqueezed25,L$ppre_1,L$ppre_0,tmp5,tmp0);
			L$ppre_0=L$poptgepsqueezed25.a0;
			L$ppre_1=L$poptgepsqueezed25.a0o|0;
			if(L$ppre_0!==nullArray||L$ppre_1!==0){
				if(L$ppre_0[L$ppre_1].a0!==null){
					Larg0[Marg0].i5=1;
					L$poptgepsqueezed25=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$poptgepsqueezed25.a0=Larg0;
					L$poptgepsqueezed25.a0o=Marg0;
					break a;
				}
				L$ppre_0=L$ppre_0[L$ppre_1];
			}else{
				L$ppre_0=null;
			}
		}
		L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
		L$ppre_1=L$ppre_0.a1.i1|0;
		L$ppre_0=L$poptgepsqueezed25.a0;
		tmp5=L$poptgepsqueezed25.a0o|0;
		if(L$ppre_0!==nullArray||tmp5!==0)L$ppre_0[tmp5].a1(L$ppre_0,tmp5);
		if((L$ppre_1|0)!==(Larg0[Marg0].i8|0))___assert_fail(_$pstr$p13,0,_$pstr$p9,0,726,___func__$p_ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,0);
		;
		L$poptgepsqueezed25=Larg0[Marg0].a2;
		L$ppre_0=L$poptgepsqueezed25.a1;
		tmp5=L$ppre_0.i0|0;
		L$ppre_0.i1=L$ppre_1;
		if((tmp5&65535)<256)L$ppre_0.i0=tmp5|256;
		Larg0[Marg0].a13=L$poptgepsqueezed25;
		Larg0[Marg0].a0=null;
		L$ppre_0=L$poptgepsqueezed25.a0;
		L$ppre_1=L$poptgepsqueezed25.a0o|0;
		(L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst)[L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst].a0((L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst),L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=0;
	if(Larg0.a0!==null)if((Larg0.i5&3)!==0){
		tmp1=Larg0.a4.a0;
		tmp2=Larg0.a4.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
	}else{
		tmp1=Larg0.a3.a0;
		tmp2=Larg0.a3.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
		tmp1=Larg0.a12;
		tmp0=Larg0.a11;
	}
}
function __ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,L$poptgepsqueezed10=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed11=null,tmp6=0,tmp7=null;
	tmp4=create__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp4={i0:0,i1:0}},a3:tmp4={i0:0,i1:0,a2:{a0:nullArray,a0o:0}},i4:0,a5:null}).a;
	tmp0=tmp4[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii$pdestroy;
	L$poptgepsqueezed10=tmp0.a2;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	tmp2=L$poptgepsqueezed10.a1;
	tmp2.i0=0;
	L$poptgepsqueezed11=L$poptgepsqueezed10.a;
	tmp6=L$poptgepsqueezed10.o-1;
	Larg0.a0=L$poptgepsqueezed11;
	Larg0.a0o=tmp6;
	L$poptgepsqueezed11=tmp0.a3;
	L$poptgepsqueezed11.i0=0;
	L$poptgepsqueezed11.a2.a0=nullArray;
	L$poptgepsqueezed11.a2.a0o=0;
	tmp3=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
	tmp7=[{a0:null}];
	tmp7[0].a0=L$poptgepsqueezed11;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvPN6client6TArrayIPNS6_2FDEEEiPNS6_10Uint8ArrayEiiPNS6_13EventListenerEEJRSB_RiRSD_SJ_SJ_EEET_DpOT0_EUliE_JiEEEvPSL_DpSM_,tmp7[0]);
	cheerpOSRead(tmp3,Larg1,Larg2,Larg3,Larg4,tmp7);
	if((L$poptgepsqueezed11.i0&255)!==0){
		tmp6=L$poptgepsqueezed11.i1|0;
		tmp2.i0=256;
		tmp2.i1=tmp6;
		tmp0.a5=L$poptgepsqueezed10;
		tmp0.a0=null;
		tmp4=L$poptgepsqueezed10.a0;
		tmp6=L$poptgepsqueezed10.a0o|0;
		(tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed11.a2.a0=tmp4;
		L$poptgepsqueezed11.a2.a0o=0;
	}
}
function __ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep1$poptgep=null;
	tmp1=Larg0.a3.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.i1=tmp1;
	Larg0.a5=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii$pdestroy(Larg0,Marg0){
}
function __ZN7CheerpX10FileDevice11getPermTypeEv$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,L$poptgepsqueezed9=null,tmp2=0,tmp3=null;
	L$poptgepsqueezed9=Larg0.a3.a0;
	tmp2=Larg0.a3.a0o|0;
	L$poptgepsqueezed9=L$poptgepsqueezed9[tmp2].a[L$poptgepsqueezed9[tmp2].o- -1];
	L$poptgepsqueezed9=L$poptgepsqueezed9.a1.a1;
	tmp3=Larg0.a3.a0;
	tmp2=Larg0.a3.a0o|0;
	if(tmp3!==nullArray||tmp2!==0)tmp3[tmp2].a1(tmp3,tmp2);
	tmp3=Larg0.a6;
	tmp2=L$poptgepsqueezed9.permType;
	L$poptgepsqueezed9=Larg0.a2;
	tmp3=L$poptgepsqueezed9.a1;
	tmp0=tmp3.i0|0;
	tmp3.i1=tmp2;
	if((tmp0&65535)<256)tmp3.i0=tmp0|256;
	Larg0.a7=L$poptgepsqueezed9;
	Larg0.a0=null;
	tmp3=L$poptgepsqueezed9.a0;
	tmp2=L$poptgepsqueezed9.a0o|0;
	(tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX10FileDevice11getPermTypeEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	if(Larg0.a0!==null){
		tmp1=Larg0.a3.a0;
		tmp0=Larg0.a3.a0o|0;
		if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		tmp1=Larg0.a6;
	}
}
function __ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(Larg0,Larg1,Larg2){
	var tmp0=null,L$poptgepsqueezed11=null,tmp2=null,L$poptgepsqueezed12=null,tmp4=null,tmp5=null,tmp6=null,tmp7=0,tmp8=null;
	tmp5=create__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE$pFrame({a0:null,a1:null,a2:tmp5={a0:nullArray,a0o:0,a1:{i0:0,a1:null}},a3:tmp5={i0:0,a1:{a0:nullArray,a0o:0}},i4:0,a5:null,a6:null}).a;
	tmp0=tmp5[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE$pdestroy;
	L$poptgepsqueezed11=tmp0.a2;
	L$poptgepsqueezed11.a0=nullArray;
	L$poptgepsqueezed11.a0o=0;
	tmp2=L$poptgepsqueezed11.a1;
	tmp2.i0=0;
	tmp6=L$poptgepsqueezed11.a;
	tmp7=L$poptgepsqueezed11.o-1;
	Larg0.a0=tmp6;
	Larg0.a0o=tmp7;
	tmp6=new Object();
	tmp0.a5=tmp6;
	L$poptgepsqueezed12=tmp0.a3;
	L$poptgepsqueezed12.i0=0;
	L$poptgepsqueezed12.a1.a0=nullArray;
	L$poptgepsqueezed12.a1.a0o=0;
	tmp4=Larg1.a3;
	tmp8=[{a0:null}];
	tmp8[0].a0=L$poptgepsqueezed12;
	tmp8=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFvPN6client13CheerpJFolderERKNS6_6StringEPNS6_7FileRefEPNS6_13EventListenerEEJRS8_SB_RSD_EEET_DpOT0_EUlvE_JEEEvPSK_DpSL_,tmp8[0]);
	cheerpOSStatMain(tmp4,Larg2,tmp6,tmp8);
	if((L$poptgepsqueezed12.i0&255)!==0){
		tmp5=tmp0.a5;
		tmp2.i0=256;
		tmp2.a1=tmp5;
		tmp0.a6=L$poptgepsqueezed11;
		tmp0.a0=null;
		tmp5=L$poptgepsqueezed11.a0;
		tmp7=L$poptgepsqueezed11.a0o|0;
		(tmp5!==nullArray||tmp7!==0?tmp5:_NoopCoro$pFrame$pConst)[tmp5!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst].a0((tmp5!==nullArray||tmp7!==0?tmp5:_NoopCoro$pFrame$pConst),tmp5!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed12.a1.a0=tmp5;
		L$poptgepsqueezed12.a1.a0o=0;
	}
}
function __ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed6=null,L$poptgep$poptgep1$poptgep=null,tmp2=0,tmp3=null;
	tmp3=Larg0.a5;
	L$poptgepsqueezed6=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed6.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.a1=tmp3;
	Larg0.a6=L$poptgepsqueezed6;
	Larg0.a0=null;
	tmp3=L$poptgepsqueezed6.a0;
	tmp2=L$poptgepsqueezed6.a0o|0;
	(tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFvPN6client13CheerpJFolderERKNS6_6StringEPNS6_7FileRefEPNS6_13EventListenerEEJRS8_SB_RSD_EEET_DpOT0_EUlvE_JEEEvPSK_DpSL_(Larg0){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i0=1;
	tmp1=tmp0.a1.a0;
	tmp2=tmp0.a1.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN14CheerpXProcess3newEj(Larg0){
	var tmp0=null;
	tmp0={i0:0,a1:createPointerArray([],0,32,null)};
	__ZN14CheerpXProcessC1Ej(tmp0,Larg0);
	return tmp0;
}
function __ZN14CheerpXProcess6deleteEv(Larg0){
}
function __ZN7CheerpX10DataDevice6createEv(){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	__ZZN7CheerpX10DataDevice6createEvENK3$_0clEPFvPN6client6ObjectEEPFvRKNS2_6StringEE(tmp1,tmp0.a1);
	tmp1=tmp0.a0;
	return tmp1;
}
function __ZN7CheerpX10DataDevice6deleteEv(Larg0){
}
function __ZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	tmp1.a0=Larg0;
	tmp2={a0:null};
	__ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E(tmp2,tmp1,Larg0.a4,Larg1,Larg2,tmp0.a1,tmp0.a2);
	tmp2=tmp0.a0;
	return tmp2;
}
function __ZN7CheerpX10FileDevice10dumpDeviceEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	__ZN7CheerpX10FileDevice8dumpImplEv(tmp0,Larg0);
}
function __ZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	__ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E(tmp1,Larg0,Larg1,tmp0.a1,tmp0.a2);
	tmp1=tmp0.a0;
	return tmp1;
}
function __ZN7CheerpX10FileDevice6deleteEv(Larg0){
}
function __ZN7CheerpX11BlockDevice3newERKN6client6StringEj(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp4=null,tmp5=0,tmp6=0,L$poptgepsqueezed13=null,tmp8=0,tmp9=null;
	tmp0={a0:null,i1:0,i2:0,i3:0,a4:null};
	tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
	tmp0.i1=1;
	tmp6=__ZN7CheerpX6Device9lastDevIdE|0;
	__ZN7CheerpX6Device9lastDevIdE=tmp6+1|0;
	tmp0.i2=tmp6;
	L$poptgepsqueezed13=__ZN11CheerpXBase7devicesE.a1;
	tmp8=__ZN11CheerpXBase7devicesE.a1o|0;
	tmp1=__ZN11CheerpXBase7devicesE.a2;
	tmp9=tmp1.a0;
	tmp2=tmp1.a0o|0;
	if(tmp8<tmp2){
		L$poptgepsqueezed13[tmp8]=tmp0;
		__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed13;
		__ZN11CheerpXBase7devicesE.a1o=tmp8+1|0;
	}else{
		tmp3={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp3={a0:null}}};
		tmp4=__ZN11CheerpXBase7devicesE.a0;
		tmp6=__ZN11CheerpXBase7devicesE.a0o|0;
		tmp6=(__imul(tmp6,4));
		tmp8=(__imul(tmp8,4))-tmp6>>2;
		tmp5=tmp8+1|0;
		if(tmp5>>>0>1073741823)_abort();
		;
		tmp6=(__imul(tmp2,4))-tmp6|0;
		if(tmp6>>>0<2147483644){
			tmp6>>>=1;
			tmp6=tmp6>>>0>tmp5>>>0?tmp6|0:tmp5|0;
		}else{
			tmp6=1073741823;
		}
		L$poptgepsqueezed13=tmp3.a3;
		L$poptgepsqueezed13.a1.a0=tmp1;
		if((tmp6|0)!==0)tmp9=createPointerArray([],0,(tmp6<<2)/4|0,null);
		else{
			tmp9=nullArray;
		}
		tmp3.a0=tmp9[0];
		tmp3.a1=tmp9;
		tmp3.a1o=0+tmp8|0;
		L$poptgepsqueezed13.a0=tmp9;
		L$poptgepsqueezed13.a0o=0+tmp6|0;
		tmp9[tmp8]=tmp0;
		tmp3.a2=tmp9;
		tmp3.a2o=(0+tmp8|0)+1|0;
		__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp3);
	}
	tmp0.a0=__ZTVN7CheerpX11BlockDeviceE;
	tmp0.i3=Larg1;
	tmp0.a4=Larg0;
	return tmp0;
}
function __ZN7CheerpX11BlockDevice6deleteEv(Larg0){
}
function __ZN7CheerpX11CloudDevice6createERKN6client6StringE(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	__ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E(tmp1,Larg0,tmp0.a1,tmp0.a2);
	tmp1=tmp0.a0;
	return tmp1;
}
function __ZN7CheerpX11CloudDevice6deleteEv(Larg0){
}
function __ZN7CheerpX12GitHubDevice6createERKN6client6StringE(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	__ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E(tmp1,Larg0,tmp0.a1,tmp0.a2);
	tmp1=tmp0.a0;
	return tmp1;
}
function __ZN7CheerpX12GitHubDevice6deleteEv(Larg0){
}
function __ZN7CheerpX13OverlayDevice10dumpDeviceEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	__ZN7CheerpX13OverlayDevice8dumpImplEv(tmp0,Larg0);
}
function __ZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	__ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE(tmp1,Larg0,Larg1,tmp0.a1,tmp0.a2);
	tmp1=tmp0.a0;
	return tmp1;
}
function __ZN7CheerpX13OverlayDevice6deleteEv(Larg0){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=null,tmp2=0;
	Larg0.a0=__ZTVN7CheerpX13OverlayDeviceE;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a10;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a9;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a8;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
}
function __ZN7CheerpX14CheerpOSDevice3newEv(){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp4=null,tmp5=0,tmp6=0,L$poptgepsqueezed11=null,tmp8=0,tmp9=null;
	tmp0={a0:null,i1:0,i2:0,a3:null};
	tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
	tmp0.i1=0;
	tmp6=__ZN7CheerpX6Device9lastDevIdE|0;
	__ZN7CheerpX6Device9lastDevIdE=tmp6+1|0;
	tmp0.i2=tmp6;
	L$poptgepsqueezed11=__ZN11CheerpXBase7devicesE.a1;
	tmp8=__ZN11CheerpXBase7devicesE.a1o|0;
	tmp1=__ZN11CheerpXBase7devicesE.a2;
	tmp9=tmp1.a0;
	tmp2=tmp1.a0o|0;
	if(tmp8<tmp2){
		L$poptgepsqueezed11[tmp8]=tmp0;
		__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed11;
		__ZN11CheerpXBase7devicesE.a1o=tmp8+1|0;
	}else{
		tmp3={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp3={a0:null}}};
		tmp4=__ZN11CheerpXBase7devicesE.a0;
		tmp6=__ZN11CheerpXBase7devicesE.a0o|0;
		tmp6=(__imul(tmp6,4));
		tmp8=(__imul(tmp8,4))-tmp6>>2;
		tmp5=tmp8+1|0;
		if(tmp5>>>0>1073741823)_abort();
		;
		tmp6=(__imul(tmp2,4))-tmp6|0;
		if(tmp6>>>0<2147483644){
			tmp6>>>=1;
			tmp6=tmp6>>>0>tmp5>>>0?tmp6|0:tmp5|0;
		}else{
			tmp6=1073741823;
		}
		L$poptgepsqueezed11=tmp3.a3;
		L$poptgepsqueezed11.a1.a0=tmp1;
		if((tmp6|0)!==0)tmp9=createPointerArray([],0,(tmp6<<2)/4|0,null);
		else{
			tmp9=nullArray;
		}
		tmp3.a0=tmp9[0];
		tmp3.a1=tmp9;
		tmp3.a1o=0+tmp8|0;
		L$poptgepsqueezed11.a0=tmp9;
		L$poptgepsqueezed11.a0o=0+tmp6|0;
		tmp9[tmp8]=tmp0;
		tmp3.a2=tmp9;
		tmp3.a2o=(0+tmp8|0)+1|0;
		__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp3);
	}
	tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
	tmp0.a3=null;
	return tmp0;
}
function __ZN7CheerpX14CheerpOSDevice6deleteEv(Larg0){
}
function __ZN7CheerpX15HttpBytesDevice6createERKN6client6StringE(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	__ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E(tmp1,Larg0,tmp0.a1,tmp0.a2);
	tmp1=tmp0.a0;
	return tmp1;
}
function __ZN7CheerpX15HttpBytesDevice6deleteEv(Larg0){
}
function __ZN7CheerpX5Linux19setJITErrorCallbackEPFvPN6client6StringEE(Larg0,Larg1){
	Larg0.a5=Larg1;
}
function __ZN7CheerpX5Linux26setOffscreenCanvasCallbackEPN6client13EventListenerE(Larg0,Larg1){
	Larg0.a40=Larg1;
}
function __ZN7CheerpX5Linux4wrapEPN6client6ObjectE(Larg0){
	return Larg0;
}
function __ZN7CheerpX5Linux6deleteEv(Larg0){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=null,tmp2=0;
	Larg0.a0=__ZTVN7CheerpX5LinuxE;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a49;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a48;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
	__ZNSt5dequeIPN6client11CoreMessageESaIS2_EED2B7v160000Ev(Larg0.a46);
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a45;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	if(tmp1!==nullArray||0!==0)L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1[0];
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a44;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
	__ZNSt5dequeIN7CheerpX5Linux14FileWatchQueue4DataESaIS3_EED2B7v160000Ev(Larg0.a41.a3);
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a39;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
	Larg0.a0=__ZTV11CheerpXBase;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a25;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a24;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
}
function __ZN7CheerpX5Linux9createHudEv(Larg0){
	__ZN11CheerpXBase13createHudImplEv(Larg0);
}
function __ZN7CheerpX6Device3newENS0_4TYPEE(Larg0){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp4=null,tmp5=0,tmp6=0,L$poptgepsqueezed7=null,tmp8=0,tmp9=null;
	tmp0={a0:null,i1:0,i2:0};
	tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
	tmp0.i1=Larg0;
	tmp6=__ZN7CheerpX6Device9lastDevIdE|0;
	__ZN7CheerpX6Device9lastDevIdE=tmp6+1|0;
	tmp0.i2=tmp6;
	L$poptgepsqueezed7=__ZN11CheerpXBase7devicesE.a1;
	tmp8=__ZN11CheerpXBase7devicesE.a1o|0;
	tmp1=__ZN11CheerpXBase7devicesE.a2;
	tmp9=tmp1.a0;
	tmp2=tmp1.a0o|0;
	if(tmp8<tmp2){
		L$poptgepsqueezed7[tmp8]=tmp0;
		__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed7;
		__ZN11CheerpXBase7devicesE.a1o=tmp8+1|0;
	}else{
		tmp3={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp3={a0:null}}};
		tmp4=__ZN11CheerpXBase7devicesE.a0;
		tmp6=__ZN11CheerpXBase7devicesE.a0o|0;
		tmp6=(__imul(tmp6,4));
		tmp8=(__imul(tmp8,4))-tmp6>>2;
		tmp5=tmp8+1|0;
		if(tmp5>>>0>1073741823)_abort();
		;
		tmp6=(__imul(tmp2,4))-tmp6|0;
		if(tmp6>>>0<2147483644){
			tmp6>>>=1;
			tmp6=tmp6>>>0>tmp5>>>0?tmp6|0:tmp5|0;
		}else{
			tmp6=1073741823;
		}
		L$poptgepsqueezed7=tmp3.a3;
		L$poptgepsqueezed7.a1.a0=tmp1;
		if((tmp6|0)!==0)tmp9=createPointerArray([],0,(tmp6<<2)/4|0,null);
		else{
			tmp9=nullArray;
		}
		tmp3.a0=tmp9[0];
		tmp3.a1=tmp9;
		tmp3.a1o=0+tmp8|0;
		L$poptgepsqueezed7.a0=tmp9;
		L$poptgepsqueezed7.a0o=0+tmp6|0;
		tmp9[tmp8]=tmp0;
		tmp3.a2=tmp9;
		tmp3.a2o=(0+tmp8|0)+1|0;
		__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp3);
	}
	return tmp0;
}
function __ZN7CheerpX6Device4wrapEPN6client6ObjectE(Larg0){
	return Larg0;
}
function __ZN7CheerpX6Device6deleteEv(Larg0){
}
function __ZN7CheerpX9IDBDevice14readFileAsBlobEPN6client6StringE(Larg0,Larg1){
	var tmp0=null,L$poptgepsqueezed16=null,tmp2=null,tmp3=0,tmp4=null,L$poptgepsqueezed18=null,tmp6=null,tmp7=0;
	tmp4=create__ZN7CheerpX9IDBDevice14readFileAsBlobEPN6client6StringE$pFrame({a0:null,a1:null,a2:tmp4={a0:null},a3:null,a4:null,a5:tmp4={a0:nullArray,a0o:0},a6:tmp4={a0:nullArray,a0o:0},i7:0}).a;
	tmp0=tmp4[0];
	tmp0.a0=__ZN7CheerpX9IDBDevice14readFileAsBlobEPN6client6StringE$presume;
	tmp0.a1=__ZN7CheerpX9IDBDevice14readFileAsBlobEPN6client6StringE$pdestroy;
	tmp0.a3=Larg1;
	L$poptgepsqueezed18=[{a0:null}];
	L$poptgepsqueezed16=tmp0.a2;
	L$poptgepsqueezed18[0].a0=L$poptgepsqueezed16;
	L$poptgepsqueezed18=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4BlobEEEJRN7CheerpX9IDBDeviceEPNS4_6StringEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSI_EEEvPT_DpT0_,L$poptgepsqueezed18[0]);
	tmp2=new Promise(L$poptgepsqueezed18);
	tmp6="r";
	tmp0.a4=tmp6;
	L$poptgepsqueezed18=tmp0.a5;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed18,Larg0,Larg1,tmp6,0,0);
	tmp6=L$poptgepsqueezed18.a0;
	tmp7=L$poptgepsqueezed18.a0o|0;
	a:{
		if(tmp6!==nullArray||tmp7!==0)if(tmp6[tmp7].a0!==null){
			tmp0.i7=0;
			L$poptgepsqueezed18=tmp6[tmp7].a[tmp6[tmp7].o- -1];
			L$poptgepsqueezed18.a0=tmp4;
			L$poptgepsqueezed18.a0o=0;
			break a;
		}
		tmp6=tmp6[tmp7].a[tmp6[tmp7].o- -1];
		tmp7=tmp6.a1.i1|0;
		tmp6=L$poptgepsqueezed18.a0;
		tmp3=L$poptgepsqueezed18.a0o|0;
		if(tmp6!==nullArray||tmp3!==0)tmp6[tmp3].a1(tmp6,tmp3);
		L$poptgepsqueezed18=tmp0.a4;
		tmp6=tmp0.a3;
		if((tmp7|0)<0)L$poptgepsqueezed16.a0.call(null,null);
		else{
			tmp6=tmp0.a3;
			L$poptgepsqueezed18=tmp0.a6;
			__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE(L$poptgepsqueezed18,tmp7,tmp6);
			tmp6=L$poptgepsqueezed18.a0;
			tmp7=L$poptgepsqueezed18.a0o|0;
			if(tmp6!==nullArray||tmp7!==0)if(tmp6[tmp7].a0!==null){
				tmp0.i7=1;
				L$poptgepsqueezed18=tmp6[tmp7].a[tmp6[tmp7].o- -1];
				L$poptgepsqueezed18.a0=tmp4;
				L$poptgepsqueezed18.a0o=0;
				break a;
			}
			tmp4=tmp6[tmp7].a[tmp6[tmp7].o- -1];
			tmp4=tmp4.a1.a1;
			tmp6=L$poptgepsqueezed18.a0;
			tmp7=L$poptgepsqueezed18.a0o|0;
			if(tmp6!==nullArray||tmp7!==0)tmp6[tmp7].a1(tmp6,tmp7);
			L$poptgepsqueezed18=tmp0.a3;
			L$poptgepsqueezed16.a0.call(null,tmp4);
		}
	}
	return tmp2;
}
function __ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj(Larg0,Larg1,Larg2){
	var tmp0=null,L$poptgepsqueezed69=null,tmp2=null,tmp3=0,tmp4=0,tmp5=null,L$poptgepsqueezed71=null,tmp7=null,L$poptgepsqueezed72=null,tmp9=0,L$poptgepsqueezed53=null,tmp11=0,tmp12=null,tmp13=null;
	tmp5=new constructor__ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj$pFrame().a;
	tmp0=tmp5[0];
	tmp0.a0=__ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj$presume;
	tmp0.a1=__ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj$pdestroy;
	tmp0.i5=Larg2;
	tmp0.a4=Larg1;
	tmp0.a3=Larg0;
	L$poptgepsqueezed71=[{a0:null}];
	L$poptgepsqueezed69=tmp0.a2;
	L$poptgepsqueezed71[0].a0=L$poptgepsqueezed69;
	L$poptgepsqueezed71=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPN7CheerpX6DeviceEEEJRNS6_9IDBDeviceEPNS4_6StringEjEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSI_EEEvPT_DpT0_,L$poptgepsqueezed71[0]);
	tmp2=new Promise(L$poptgepsqueezed71);
	L$poptgepsqueezed71="/".concat(Larg1);
	tmp0.a6=L$poptgepsqueezed71;
	tmp7="w";
	tmp0.a7=tmp7;
	L$poptgepsqueezed72=tmp0.a11;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed72,Larg0,L$poptgepsqueezed71,tmp7,0,0);
	L$poptgepsqueezed71=L$poptgepsqueezed72.a0;
	tmp9=L$poptgepsqueezed72.a0o|0;
	a:{
		if(L$poptgepsqueezed71!==nullArray||tmp9!==0)if(L$poptgepsqueezed71[tmp9].a0!==null){
			tmp0.i14=0;
			L$poptgepsqueezed71=L$poptgepsqueezed71[tmp9].a[L$poptgepsqueezed71[tmp9].o- -1];
			L$poptgepsqueezed71.a0=tmp5;
			L$poptgepsqueezed71.a0o=0;
			break a;
		}
		L$poptgepsqueezed71=L$poptgepsqueezed71[tmp9].a[L$poptgepsqueezed71[tmp9].o- -1];
		tmp0.i8=L$poptgepsqueezed71.a1.i1|0;
		L$poptgepsqueezed71=L$poptgepsqueezed72.a0;
		tmp9=L$poptgepsqueezed72.a0o|0;
		if(L$poptgepsqueezed71!==nullArray||tmp9!==0)L$poptgepsqueezed71[tmp9].a1(L$poptgepsqueezed71,tmp9);
		L$poptgepsqueezed71=tmp0.a7;
		tmp7=tmp0.a6;
		tmp9=tmp0.i5|0;
		tmp0.a9=new Uint8Array(4096);
		tmp9<<=20;
		tmp0.i10=tmp9;
		if((tmp9|0)!==0){
			L$poptgepsqueezed71=tmp0.a12;
			while(1){
				__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed71,tmp0.i8|0,tmp0.a9,0,4096);
				tmp7=L$poptgepsqueezed71.a0;
				tmp9=L$poptgepsqueezed71.a0o|0;
				if(tmp7!==nullArray||tmp9!==0)if(tmp7[tmp9].a0!==null){
					tmp0.i14=1;
					L$poptgepsqueezed71=tmp7[tmp9].a[tmp7[tmp9].o- -1];
					L$poptgepsqueezed71.a0=tmp5;
					L$poptgepsqueezed71.a0o=0;
					break a;
				}
				tmp7=L$poptgepsqueezed71.a0;
				tmp9=L$poptgepsqueezed71.a0o|0;
				if(tmp7!==nullArray||tmp9!==0)tmp7[tmp9].a1(tmp7,tmp9);
				tmp9=(tmp0.i10|0)-4096|0;
				tmp0.i10=tmp9;
				if((tmp9|0)!==0)continue;
				break;
			}
		}
		L$poptgepsqueezed71=create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:L$poptgepsqueezed71={i0:0,a1:{a0:nullArray,a0o:0}},i5:0}).a;
		tmp9=tmp0.i8|0;
		tmp7=L$poptgepsqueezed71[0];
		tmp7.a0=__ZN7CheerpX14CheerpOSDevice5closeEi$presume;
		tmp7.a1=__ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy;
		L$poptgepsqueezed72=tmp7.a2;
		L$poptgepsqueezed72.a0=nullArray;
		L$poptgepsqueezed72.a0o=0;
		L$poptgepsqueezed53=L$poptgepsqueezed72.a;
		tmp11=L$poptgepsqueezed72.o-1;
		tmp0.a13.a0=L$poptgepsqueezed53;
		tmp0.a13.a0o=tmp11;
		L$poptgepsqueezed53=tmp7.a4;
		L$poptgepsqueezed53.i0=0;
		L$poptgepsqueezed53.a1.a0=nullArray;
		L$poptgepsqueezed53.a1.a0o=0;
		tmp12=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
		tmp13=[{a0:null}];
		tmp13[0].a0=L$poptgepsqueezed53;
		tmp13=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_,tmp13[0]);
		cheerpOSClose(tmp12,tmp9,tmp13);
		if((L$poptgepsqueezed53.i0&255)!==0){
			tmp7.a3=L$poptgepsqueezed72;
			tmp7.a0=null;
			L$poptgepsqueezed71=L$poptgepsqueezed72.a0;
			tmp9=L$poptgepsqueezed72.a0o|0;
			(L$poptgepsqueezed71!==nullArray||tmp9!==0?L$poptgepsqueezed71:_NoopCoro$pFrame$pConst)[L$poptgepsqueezed71!==nullArray||tmp9!==0?tmp9:$NoopCoro$pFrame$pConst].a0((L$poptgepsqueezed71!==nullArray||tmp9!==0?L$poptgepsqueezed71:_NoopCoro$pFrame$pConst),L$poptgepsqueezed71!==nullArray||tmp9!==0?tmp9:$NoopCoro$pFrame$pConst);
		}else{
			tmp7.i5=0;
			L$poptgepsqueezed53.a1.a0=L$poptgepsqueezed71;
			L$poptgepsqueezed53.a1.a0o=0;
		}
		L$poptgepsqueezed71=tmp0.a13.a0;
		tmp9=tmp0.a13.a0o|0;
		if(L$poptgepsqueezed71!==nullArray||tmp9!==0){
			if(L$poptgepsqueezed71[tmp9].a0!==null){
				tmp0.i14=2;
				L$poptgepsqueezed71=L$poptgepsqueezed71[tmp9].a[L$poptgepsqueezed71[tmp9].o- -1];
				L$poptgepsqueezed71.a0=tmp5;
				L$poptgepsqueezed71.a0o=0;
				break a;
			}
			L$poptgepsqueezed71[tmp9].a1(L$poptgepsqueezed71,tmp9);
		}
		tmp7=tmp0.a4;
		tmp5=tmp0.a3;
		L$poptgepsqueezed71={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null,a6:null};
		L$poptgepsqueezed71.a0=__ZTVN7CheerpX9IDBDeviceE;
		L$poptgepsqueezed71.i1=1;
		tmp9=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp9+1|0;
		L$poptgepsqueezed71.i2=tmp9;
		L$poptgepsqueezed53=__ZN11CheerpXBase7devicesE.a1;
		tmp11=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp7=__ZN11CheerpXBase7devicesE.a2;
		tmp12=tmp7.a0;
		tmp3=tmp7.a0o|0;
		if(tmp11<tmp3){
			L$poptgepsqueezed53[tmp11]=L$poptgepsqueezed71;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed53;
			__ZN11CheerpXBase7devicesE.a1o=tmp11+1|0;
		}else{
			L$poptgepsqueezed72={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:L$poptgepsqueezed72={a0:null}}};
			tmp13=__ZN11CheerpXBase7devicesE.a0;
			tmp9=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp9=(__imul(tmp9,4));
			tmp11=(__imul(tmp11,4))-tmp9>>2;
			tmp4=tmp11+1|0;
			if(tmp4>>>0>1073741823)_abort();
			;
			tmp9=(__imul(tmp3,4))-tmp9|0;
			if(tmp9>>>0<2147483644){
				tmp9>>>=1;
				tmp9=tmp9>>>0>tmp4>>>0?tmp9|0:tmp4|0;
			}else{
				tmp9=1073741823;
			}
			L$poptgepsqueezed53=L$poptgepsqueezed72.a3;
			L$poptgepsqueezed53.a1.a0=tmp7;
			if((tmp9|0)!==0)tmp7=createPointerArray([],0,(tmp9<<2)/4|0,null);
			else{
				tmp7=nullArray;
			}
			L$poptgepsqueezed72.a0=tmp7[0];
			L$poptgepsqueezed72.a1=tmp7;
			L$poptgepsqueezed72.a1o=0+tmp11|0;
			L$poptgepsqueezed53.a0=tmp7;
			L$poptgepsqueezed53.a0o=0+tmp9|0;
			tmp7[tmp11]=L$poptgepsqueezed71;
			L$poptgepsqueezed72.a2=tmp7;
			L$poptgepsqueezed72.a2o=(0+tmp11|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(L$poptgepsqueezed72);
		}
		tmp7=tmp0.a4;
		L$poptgepsqueezed71.i3=tmp0.i5<<20;
		L$poptgepsqueezed71.a4=tmp7;
		L$poptgepsqueezed71.a0=__ZTVN7CheerpX10FileDeviceE;
		L$poptgepsqueezed71.a5=tmp5;
		tmp5="/";
		tmp5=tmp5.concat(tmp7);
		tmp5=tmp5;
		L$poptgepsqueezed71.a6=tmp5;
		L$poptgepsqueezed69.a0.call(null,Object.create(CheerpX.Device.prototype,{this:{value:L$poptgepsqueezed71}}));
	}
	return tmp2;
}
function __ZN7CheerpX9IDBDevice5resetEv(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0,L$poptgepsqueezed14=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	L$poptgepsqueezed14=tmp0.a1;
	tmp1=create__ZZN7CheerpX9IDBDevice5resetEvENK3$_0clEPS0_PFvPN6client6ObjectEE$pFrame({a0:null,a1:null,a2:{i0:0},a3:tmp1={a0:nullArray,a0o:0},i4:0,a5:new Uint8Array(2),a6:null}).a;
	tmp2=tmp1[0];
	tmp2.a0=__ZZN7CheerpX9IDBDevice5resetEvENK3$_0clEPS0_PFvPN6client6ObjectEE$presume;
	tmp2.a1=__ZZN7CheerpX9IDBDevice5resetEvENK3$_0clEPS0_PFvPN6client6ObjectEE$pdestroy;
	tmp2.a6=L$poptgepsqueezed14;
	L$poptgepsqueezed14=tmp2.a3;
	__ZN7CheerpX9IDBDevice10clearCacheEv(L$poptgepsqueezed14,Larg0);
	tmp3=L$poptgepsqueezed14.a0;
	tmp4=L$poptgepsqueezed14.a0o|0;
	a:{
		if(tmp3!==nullArray||tmp4!==0){
			if(tmp3[tmp4].a0!==null){
				tmp2.i4=0;
				L$poptgepsqueezed14=tmp3[tmp4].a[tmp3[tmp4].o- -1];
				L$poptgepsqueezed14.a0=tmp1;
				L$poptgepsqueezed14.a0o=0;
				break a;
			}
			tmp3[tmp4].a1(tmp3,tmp4);
		}
		tmp2.a6(null);
	}
	L$poptgepsqueezed14=tmp0.a0;
	return L$poptgepsqueezed14;
}
function __ZN7CheerpX9IDBDevice6createEPN6client6StringE(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	__ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E(tmp1,Larg0,tmp0.a1,tmp0.a2);
	tmp1=tmp0.a0;
	return tmp1;
}
function __ZN7CheerpX9IDBDevice6deleteEv(Larg0){
}
function __ZN7CheerpX9IDBDevice8dumpFileEPN6client6StringE(Larg0,Larg1){
	var tmp0=null;
	if(undefined!==Larg1){
		tmp0={a0:null};
		__ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE(tmp0,Larg0,Larg1);
	}
}
function __ZN7CheerpX9WebDevice6createERKN6client6StringE(Larg0){
	var tmp0=null,tmp1=null,L$poptgepsqueezed12=null,tmp3=null,tmp4=null,tmp5=0;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	L$poptgepsqueezed12=tmp0.a1;
	tmp3=tmp0.a2;
	tmp4=create__ZZN7CheerpX9WebDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame({a0:null,a1:null,a2:tmp4={i0:0},a3:tmp4={a0:nullArray,a0o:0},i4:0,a5:new Uint8Array(2),a6:null,a7:null}).a;
	tmp1=tmp4[0];
	tmp1.a0=__ZZN7CheerpX9WebDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$presume;
	tmp1.a1=__ZZN7CheerpX9WebDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy;
	tmp1.a7=tmp3;
	tmp1.a6=L$poptgepsqueezed12;
	L$poptgepsqueezed12=tmp1.a3;
	__ZN7CheerpX9WebDevice14createInternalERKN6client6StringE(L$poptgepsqueezed12,Larg0);
	tmp3=L$poptgepsqueezed12.a0;
	tmp5=L$poptgepsqueezed12.a0o|0;
	a:{
		if(tmp3!==nullArray||tmp5!==0)if(tmp3[tmp5].a0!==null){
			tmp1.i4=0;
			L$poptgepsqueezed12=tmp3[tmp5].a[tmp3[tmp5].o- -1];
			L$poptgepsqueezed12.a0=tmp4;
			L$poptgepsqueezed12.a0o=0;
			break a;
		}
		tmp3=tmp3[tmp5].a[tmp3[tmp5].o- -1];
		tmp3=tmp3.a1.a1;
		tmp4=L$poptgepsqueezed12.a0;
		tmp5=L$poptgepsqueezed12.a0o|0;
		if(tmp4!==nullArray||tmp5!==0)tmp4[tmp5].a1(tmp4,tmp5);
		if(tmp3!==null){
			tmp4=tmp1.a6;
			tmp4(CheerpX.Linux.wrap(Object.create(CheerpX.WebDevice.prototype,{this:{value:tmp3}})));
		}else{
			L$poptgepsqueezed12=tmp1.a7;
			tmp3="Initialization failed for 'WebDevice'";
			L$poptgepsqueezed12(tmp3);
		}
	}
	L$poptgepsqueezed12=tmp0.a0;
	return L$poptgepsqueezed12;
}
function __ZN7CheerpX9WebDevice6deleteEv(Larg0){
}
function __ZZN7CheerpX9WebDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null;
	tmp1=Larg0.a3.a0;
	tmp0=Larg0.a3.a0o|0;
	tmp2=tmp1[tmp0].a[tmp1[tmp0].o- -1];
	tmp2=tmp2.a1.a1;
	if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
	if(tmp2!==null){
		tmp1=Larg0.a6;
		tmp1(CheerpX.Linux.wrap(Object.create(CheerpX.WebDevice.prototype,{this:{value:tmp2}})));
	}else{
		tmp1=Larg0.a7;
		tmp2="Initialization failed for 'WebDevice'";
		tmp1(tmp2);
	}
}
function __ZZN7CheerpX9WebDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZN7CheerpX9WebDevice14createInternalERKN6client6StringE(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=null,tmp6=null,L$poptgepsqueezed38=null,tmp8=null,L$poptgepsqueezed36=null,tmp10=0,tmp11=0,tmp12=null;
	tmp5=new constructor__ZN7CheerpX9WebDevice14createInternalERKN6client6StringE$pFrame().a;
	tmp6=tmp5[0];
	tmp6.a0=__ZN7CheerpX9WebDevice14createInternalERKN6client6StringE$presume;
	tmp6.a1=__ZN7CheerpX9WebDevice14createInternalERKN6client6StringE$pdestroy;
	tmp6.a6=Larg1;
	L$poptgepsqueezed38=tmp6.a2;
	L$poptgepsqueezed38.a0=nullArray;
	L$poptgepsqueezed38.a0o=0;
	tmp8=L$poptgepsqueezed38.a1;
	tmp8.i0=0;
	L$poptgepsqueezed36=L$poptgepsqueezed38.a;
	tmp10=L$poptgepsqueezed38.o-1;
	Larg0.a0=L$poptgepsqueezed36;
	Larg0.a0o=tmp10;
	if((__ZN11CheerpXBase13cheerpOSStateE|0)!==0){
		tmp5={a0:null,i1:0,i2:0,a3:null,a4:null};
		tmp5.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp5.i1=0;
		tmp10=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp10+1|0;
		tmp5.i2=tmp10;
		L$poptgepsqueezed36=__ZN11CheerpXBase7devicesE.a1;
		tmp11=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp0=__ZN11CheerpXBase7devicesE.a2;
		tmp12=tmp0.a0;
		tmp1=tmp0.a0o|0;
		if(tmp11<tmp1){
			L$poptgepsqueezed36[tmp11]=tmp5;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed36;
			__ZN11CheerpXBase7devicesE.a1o=tmp11+1|0;
		}else{
			tmp2={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp2={a0:null}}};
			tmp3=__ZN11CheerpXBase7devicesE.a0;
			tmp10=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp10=(__imul(tmp10,4));
			tmp11=(__imul(tmp11,4))-tmp10>>2;
			tmp4=tmp11+1|0;
			if(tmp4>>>0>1073741823)_abort();
			;
			tmp10=(__imul(tmp1,4))-tmp10|0;
			if(tmp10>>>0<2147483644){
				tmp10>>>=1;
				tmp10=tmp10>>>0>tmp4>>>0?tmp10|0:tmp4|0;
			}else{
				tmp10=1073741823;
			}
			L$poptgepsqueezed36=tmp2.a3;
			L$poptgepsqueezed36.a1.a0=tmp0;
			if((tmp10|0)!==0)tmp12=createPointerArray([],0,(tmp10<<2)/4|0,null);
			else{
				tmp12=nullArray;
			}
			tmp2.a0=tmp12[0];
			tmp2.a1=tmp12;
			tmp2.a1o=0+tmp11|0;
			L$poptgepsqueezed36.a0=tmp12;
			L$poptgepsqueezed36.a0o=0+tmp10|0;
			tmp12[tmp11]=tmp5;
			tmp2.a2=tmp12;
			tmp2.a2o=(0+tmp11|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp2);
		}
		L$poptgepsqueezed36=tmp6.a6;
		tmp5.a3=null;
		tmp5.a0=__ZTVN7CheerpX9WebDeviceE;
		tmp5.a4=L$poptgepsqueezed36;
		tmp5.a3=cheerpOSCreateWebFolder(L$poptgepsqueezed36);
		tmp8.i0=256;
		tmp8.a1=tmp5;
		tmp6.a8=L$poptgepsqueezed38;
		tmp6.a0=null;
		tmp5=L$poptgepsqueezed38.a0;
		tmp10=L$poptgepsqueezed38.a0o|0;
		(tmp5!==nullArray||tmp10!==0?tmp5:_NoopCoro$pFrame$pConst)[tmp5!==nullArray||tmp10!==0?tmp10:$NoopCoro$pFrame$pConst].a0((tmp5!==nullArray||tmp10!==0?tmp5:_NoopCoro$pFrame$pConst),tmp5!==nullArray||tmp10!==0?tmp10:$NoopCoro$pFrame$pConst);
	}else{
		tmp8=__ZN11CheerpXBase12loadCheerpOSEv();
		tmp6.a7=tmp8;
		L$poptgepsqueezed36=tmp6.a3;
		L$poptgepsqueezed36.a0=tmp8;
		tmp6.i4=0;
		tmp6=new Uint8Array(1);
		tmp6[0]=0;
		L$poptgepsqueezed36.a2=tmp6;
		L$poptgepsqueezed38=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		L$poptgepsqueezed38[0].a0=L$poptgepsqueezed36;
		L$poptgepsqueezed38[0].a1.a0=tmp5;
		L$poptgepsqueezed38[0].a1.a0o=0;
		L$poptgepsqueezed38[0].a2=tmp6;
		L$poptgepsqueezed36=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,L$poptgepsqueezed38[0]);
		tmp8.then(L$poptgepsqueezed36);
	}
}
function __ZN7CheerpX9WebDevice14createInternalERKN6client6StringE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null,tmp3=0,tmp4=null,tmp5=0,L$poptgepsqueezed19=null,tmp7=0,L$poptgep$poptgep2$poptgep=null,tmp9=null;
	tmp4=Larg0.a3.a2;
	if(tmp4!==nullArray||0!==0)tmp4[0]=1;
	tmp4={a0:null,i1:0,i2:0,a3:null,a4:null};
	tmp4.a0=__ZTVN7CheerpX9IDBDeviceE;
	tmp4.i1=0;
	tmp5=__ZN7CheerpX6Device9lastDevIdE|0;
	__ZN7CheerpX6Device9lastDevIdE=tmp5+1|0;
	tmp4.i2=tmp5;
	L$poptgepsqueezed19=__ZN11CheerpXBase7devicesE.a1;
	tmp7=__ZN11CheerpXBase7devicesE.a1o|0;
	L$poptgep$poptgep2$poptgep=__ZN11CheerpXBase7devicesE.a2;
	tmp9=L$poptgep$poptgep2$poptgep.a0;
	tmp0=L$poptgep$poptgep2$poptgep.a0o|0;
	if(tmp7<tmp0){
		L$poptgepsqueezed19[tmp7]=tmp4;
		__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed19;
		__ZN11CheerpXBase7devicesE.a1o=tmp7+1|0;
	}else{
		tmp1={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp1={a0:null}}};
		tmp2=__ZN11CheerpXBase7devicesE.a0;
		tmp5=__ZN11CheerpXBase7devicesE.a0o|0;
		tmp5=(__imul(tmp5,4));
		tmp7=(__imul(tmp7,4))-tmp5>>2;
		tmp3=tmp7+1|0;
		if(tmp3>>>0>1073741823)_abort();
		;
		tmp5=(__imul(tmp0,4))-tmp5|0;
		if(tmp5>>>0<2147483644){
			tmp5>>>=1;
			tmp5=tmp5>>>0>tmp3>>>0?tmp5|0:tmp3|0;
		}else{
			tmp5=1073741823;
		}
		L$poptgepsqueezed19=tmp1.a3;
		L$poptgepsqueezed19.a1.a0=L$poptgep$poptgep2$poptgep;
		if((tmp5|0)!==0)tmp9=createPointerArray([],0,(tmp5<<2)/4|0,null);
		else{
			tmp9=nullArray;
		}
		tmp1.a0=tmp9[0];
		tmp1.a1=tmp9;
		tmp1.a1o=0+tmp7|0;
		L$poptgepsqueezed19.a0=tmp9;
		L$poptgepsqueezed19.a0o=0+tmp5|0;
		tmp9[tmp7]=tmp4;
		tmp1.a2=tmp9;
		tmp1.a2o=(0+tmp7|0)+1|0;
		__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp1);
	}
	L$poptgepsqueezed19=Larg0.a6;
	tmp4.a3=null;
	tmp4.a0=__ZTVN7CheerpX9WebDeviceE;
	tmp4.a4=L$poptgepsqueezed19;
	tmp4.a3=cheerpOSCreateWebFolder(L$poptgepsqueezed19);
	L$poptgepsqueezed19=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed19.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.a1=tmp4;
	Larg0.a8=L$poptgepsqueezed19;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed19.a0;
	tmp5=L$poptgepsqueezed19.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp5!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep2$poptgep!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp5!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep2$poptgep!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX9WebDevice14createInternalERKN6client6StringE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a2;
		if(tmp0!==nullArray||0!==0)tmp0[0]=1;
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a2;
	if((tmp1[0]&255)===0){
		tmp1=Larg0.a0;
		tmp1.a1=Larg1;
		tmp1.a2=nullArray;
		tmp1=Larg0.a1.a0;
		tmp0=Larg0.a1.a0o|0;
		tmp1[tmp0].a0(tmp1,tmp0);
	}
}
function __ZN7CheerpX9WebDevice17isWebCheerpDeviceEv(Larg0){
	return 1|0;
}
function __ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0){
	var tmp0=0,tmp1=null,tmp2=null,Lgeptoindexphi=0,tmp4=0,tmp5=0,tmp6=null,Lgeptoindexphi3=0,Lgeptoindex18=0,tmp9=0,Lxtraiter=0,Lprol$piter=0;
	tmp1=__ZN11CheerpXBase7devicesE.a0;
	tmp0=__ZN11CheerpXBase7devicesE.a0o|0;
	tmp2=__ZN11CheerpXBase7devicesE.a1;
	Lgeptoindexphi=__ZN11CheerpXBase7devicesE.a1o|0;
	Lgeptoindexphi=(__imul(Lgeptoindexphi,4))-(__imul(tmp0,4))|0;
	tmp2=Larg0.a1;
	tmp4=Larg0.a1o|0;
	tmp5=-(Lgeptoindexphi>>2)|0;
	if(Lgeptoindexphi>>>0>=4){
		Lgeptoindexphi3=Lgeptoindexphi>>>2;
		Lgeptoindex18=tmp5+Lgeptoindexphi3|0;
		if(tmp0<(tmp4+tmp5|0)){
			tmp9=Lgeptoindexphi-4|0;
			Lgeptoindexphi=(tmp9>>>2)+1&3;
			if((Lgeptoindexphi|0)!==0){
				Lxtraiter=0;
				while(1){
					Lgeptoindexphi3=Lgeptoindexphi3-1|0;
					Lgeptoindex18=Lgeptoindex18-1|0;
					tmp2[tmp4+Lgeptoindex18|0]=tmp1[tmp0+Lgeptoindexphi3|0];
					Lxtraiter=Lxtraiter+1|0;
					if((Lxtraiter|0)!==(Lgeptoindexphi|0))continue;
					break;
				}
			}
			if(tmp9>>>0>=12)while(1){
				tmp2[(tmp4+Lgeptoindex18|0)+ -1|0]=tmp1[(tmp0+Lgeptoindexphi3|0)+ -1|0];
				tmp2[(tmp4+Lgeptoindex18|0)+ -2|0]=tmp1[(tmp0+Lgeptoindexphi3|0)+ -2|0];
				tmp2[(tmp4+Lgeptoindex18|0)+ -3|0]=tmp1[(tmp0+Lgeptoindexphi3|0)+ -3|0];
				Lgeptoindexphi3=Lgeptoindexphi3-4|0;
				Lgeptoindex18=Lgeptoindex18-4|0;
				tmp2[tmp4+Lgeptoindex18|0]=tmp1[tmp0+Lgeptoindexphi3|0];
				if(tmp2!==tmp2||(tmp4+tmp5|0)!==(tmp4+Lgeptoindex18|0))continue;
				break;
			}
		}else{
			tmp9=Lgeptoindexphi-4|0;
			Lxtraiter=(tmp9>>>2)+1&7;
			if((Lxtraiter|0)!==0){
				Lgeptoindexphi3=tmp5;
				Lprol$piter=0;
				Lgeptoindexphi=0;
				while(1){
					tmp2[tmp4+Lgeptoindexphi3|0]=tmp1[tmp0+Lgeptoindexphi|0];
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=tmp5;
				Lgeptoindexphi=0;
			}
			if(tmp9>>>0>=28)while(1){
				tmp2[tmp4+Lgeptoindexphi3|0]=tmp1[tmp0+Lgeptoindexphi|0];
				tmp2[(tmp4+Lgeptoindexphi3|0)+1|0]=tmp1[(tmp0+Lgeptoindexphi|0)+1|0];
				tmp2[(tmp4+Lgeptoindexphi3|0)+2|0]=tmp1[(tmp0+Lgeptoindexphi|0)+2|0];
				tmp2[(tmp4+Lgeptoindexphi3|0)+3|0]=tmp1[(tmp0+Lgeptoindexphi|0)+3|0];
				tmp2[(tmp4+Lgeptoindexphi3|0)+4|0]=tmp1[(tmp0+Lgeptoindexphi|0)+4|0];
				tmp2[(tmp4+Lgeptoindexphi3|0)+5|0]=tmp1[(tmp0+Lgeptoindexphi|0)+5|0];
				tmp2[(tmp4+Lgeptoindexphi3|0)+6|0]=tmp1[(tmp0+Lgeptoindexphi|0)+6|0];
				tmp2[(tmp4+Lgeptoindexphi3|0)+7|0]=tmp1[(tmp0+Lgeptoindexphi|0)+7|0];
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp2!==tmp2||(tmp4+Lgeptoindex18|0)!==(tmp4+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
	}
	tmp1=__ZN11CheerpXBase7devicesE.a0;
	Lgeptoindexphi=__ZN11CheerpXBase7devicesE.a0o|0;
	__ZN11CheerpXBase7devicesE.a0=tmp2;
	__ZN11CheerpXBase7devicesE.a0o=tmp4+(tmp5<<2>>2)|0;
	Larg0.a1=tmp1;
	Larg0.a1o=Lgeptoindexphi;
	tmp2=__ZN11CheerpXBase7devicesE.a1;
	tmp4=__ZN11CheerpXBase7devicesE.a1o|0;
	tmp6=Larg0.a2;
	tmp5=Larg0.a2o|0;
	__ZN11CheerpXBase7devicesE.a1=tmp6;
	__ZN11CheerpXBase7devicesE.a1o=tmp5;
	Larg0.a2=tmp2;
	Larg0.a2o=tmp4;
	tmp2=__ZN11CheerpXBase7devicesE.a2.a0;
	tmp4=__ZN11CheerpXBase7devicesE.a2.a0o|0;
	tmp6=Larg0.a3.a0;
	tmp5=Larg0.a3.a0o|0;
	__ZN11CheerpXBase7devicesE.a2.a0=tmp6;
	__ZN11CheerpXBase7devicesE.a2.a0o=tmp5;
	Larg0.a3.a0=tmp2;
	Larg0.a3.a0o=tmp4;
	Larg0.a0=tmp1[Lgeptoindexphi];
}
function __ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed16=null,tmp5=0;
	tmp1=new constructor__ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE$pFrame().a;
	tmp2=tmp1[0];
	tmp2.a0=__ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE$presume;
	tmp2.a1=__ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE$pdestroy;
	tmp2.a8=Larg2;
	tmp2.a7=Larg1;
	tmp3=tmp2.a2.a[tmp2.a2.o-1];
	Larg0.a0=tmp3;
	tmp3="r";
	tmp2.a9=tmp3;
	L$poptgepsqueezed16=tmp2.a3;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed16,Larg1,Larg2,tmp3,0,0);
	tmp3=L$poptgepsqueezed16.a0;
	tmp5=L$poptgepsqueezed16.a0o|0;
	a:{
		if(tmp3!==nullArray||tmp5!==0)if(tmp3[tmp5].a0!==null){
			tmp2.i5=0;
			tmp2=tmp3[tmp5].a[tmp3[tmp5].o- -1];
			tmp2.a0=tmp1;
			tmp2.a0o=0;
			break a;
		}
		tmp3=tmp3[tmp5].a[tmp3[tmp5].o- -1];
		tmp5=tmp3.a1.i1|0;
		tmp3=L$poptgepsqueezed16.a0;
		tmp0=L$poptgepsqueezed16.a0o|0;
		if(tmp3!==nullArray||tmp0!==0)tmp3[tmp0].a1(tmp3,tmp0);
		tmp3=tmp2.a9;
		L$poptgepsqueezed16=tmp2.a8;
		tmp3=tmp2.a8;
		L$poptgepsqueezed16=tmp2.a4;
		__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE(L$poptgepsqueezed16,tmp5,tmp3);
		tmp3=L$poptgepsqueezed16.a0;
		tmp5=L$poptgepsqueezed16.a0o|0;
		if(tmp3!==nullArray||tmp5!==0)if(tmp3[tmp5].a0!==null){
			tmp2.i5=1;
			tmp2=tmp3[tmp5].a[tmp3[tmp5].o- -1];
			tmp2.a0=tmp1;
			tmp2.a0o=0;
			break a;
		}
		tmp3=tmp3[tmp5].a[tmp3[tmp5].o- -1];
		tmp3=tmp3.a1.a1;
		tmp1=L$poptgepsqueezed16.a0;
		tmp5=L$poptgepsqueezed16.a0o|0;
		if(tmp1!==nullArray||tmp5!==0)tmp1[tmp5].a1(tmp1,tmp5);
		tmp1=tmp2.a8;
		__ZN7CheerpX6Device12downloadBlobEPN6client4BlobEPNS1_6StringE(tmp3,tmp2.a8);
	}
}
function __ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE$presume(Larg0,Marg0){
	var tmp0=0,L$poptgepsqueezed8=null,L$ppre_0=null,L$ppre_1=0,tmp4=null;
	L$poptgepsqueezed8=Larg0[Marg0].a4;
	a:{
		if(Larg0[Marg0].i5|0){
			L$ppre_0=L$poptgepsqueezed8.a0;
			L$ppre_1=L$poptgepsqueezed8.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1];
		}else{
			L$ppre_0=Larg0[Marg0].a3.a0;
			L$ppre_1=Larg0[Marg0].a3.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
			L$ppre_1=L$ppre_0.a1.i1|0;
			L$ppre_0=Larg0[Marg0].a3.a0;
			tmp0=Larg0[Marg0].a3.a0o|0;
			if(L$ppre_0!==nullArray||tmp0!==0)L$ppre_0[tmp0].a1(L$ppre_0,tmp0);
			L$ppre_0=Larg0[Marg0].a9;
			tmp4=Larg0[Marg0].a8;
			L$ppre_0=Larg0[Marg0].a8;
			__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE(L$poptgepsqueezed8,L$ppre_1,L$ppre_0);
			L$ppre_0=L$poptgepsqueezed8.a0;
			L$ppre_1=L$poptgepsqueezed8.a0o|0;
			if(L$ppre_0!==nullArray||L$ppre_1!==0){
				if(L$ppre_0[L$ppre_1].a0!==null){
					Larg0[Marg0].i5=1;
					L$poptgepsqueezed8=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$poptgepsqueezed8.a0=Larg0;
					L$poptgepsqueezed8.a0o=Marg0;
					break a;
				}
				L$ppre_0=L$ppre_0[L$ppre_1];
			}else{
				L$ppre_0=null;
			}
		}
		L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
		L$ppre_0=L$ppre_0.a1.a1;
		tmp4=L$poptgepsqueezed8.a0;
		L$ppre_1=L$poptgepsqueezed8.a0o|0;
		if(tmp4!==nullArray||L$ppre_1!==0)tmp4[L$ppre_1].a1(tmp4,L$ppre_1);
		tmp4=Larg0[Marg0].a8;
		__ZN7CheerpX6Device12downloadBlobEPN6client4BlobEPNS1_6StringE(L$ppre_0,Larg0[Marg0].a8);
	}
}
function __ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=0;
	if(Larg0.i5|0){
		tmp1=Larg0.a4.a0;
		tmp2=Larg0.a4.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
		tmp1=Larg0.a8;
		return;
	}
	tmp1=Larg0.a3.a0;
	tmp2=Larg0.a3.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
	tmp1=Larg0.a9;
	tmp0=Larg0.a8;
}
function __ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE(Larg0,Larg1,Larg2){
	var tmp0=null,L$poptgepsqueezed10=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed11=null,tmp6=0,tmp7=null;
	tmp4=create__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp4={i0:0,a1:null}},a3:tmp4={i0:0,a1:null,a2:{a0:nullArray,a0o:0}},i4:0,a5:null}).a;
	tmp0=tmp4[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE$pdestroy;
	L$poptgepsqueezed10=tmp0.a2;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	tmp2=L$poptgepsqueezed10.a1;
	tmp2.i0=0;
	L$poptgepsqueezed11=L$poptgepsqueezed10.a;
	tmp6=L$poptgepsqueezed10.o-1;
	Larg0.a0=L$poptgepsqueezed11;
	Larg0.a0o=tmp6;
	L$poptgepsqueezed11=tmp0.a3;
	L$poptgepsqueezed11.i0=0;
	L$poptgepsqueezed11.a2.a0=nullArray;
	L$poptgepsqueezed11.a2.a0o=0;
	tmp3=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
	tmp7=[{a0:null}];
	tmp7[0].a0=L$poptgepsqueezed11;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client4BlobEEC1IPFvPNS4_6TArrayIPNS4_2FDEEEjRKNS4_6StringEPNS4_13EventListenerEEJRSD_RjSG_EEET_DpOT0_EUlS6_E_JS6_EEEvPSN_DpSO_,tmp7[0]);
	cheerpOSGetFileBlobFd(tmp3,Larg1,Larg2,tmp7);
	if((L$poptgepsqueezed11.i0&255)!==0){
		tmp4=L$poptgepsqueezed11.a1;
		tmp2.i0=256;
		tmp2.a1=tmp4;
		tmp0.a5=L$poptgepsqueezed10;
		tmp0.a0=null;
		tmp4=L$poptgepsqueezed10.a0;
		tmp6=L$poptgepsqueezed10.a0o|0;
		(tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed11.a2.a0=tmp4;
		L$poptgepsqueezed11.a2.a0o=0;
	}
}
function __ZN7CheerpX6Device12downloadBlobEPN6client4BlobEPNS1_6StringE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null;
	tmp0=URL.createObjectURL(Larg0);
	tmp3="a";
	tmp1=document.createElement(tmp3);
	tmp3="href";
	tmp1.setAttribute(tmp3,tmp0);
	tmp3="download";
	tmp2=Larg1.concat(".dump");
	tmp1.setAttribute(tmp3,tmp2);
	tmp1.click();
	URL.revokeObjectURL(tmp0);
}
function __ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,L$poptgep$poptgep1$poptgep=null,tmp2=0,tmp3=null;
	tmp3=Larg0.a3.a1;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.a1=tmp3;
	Larg0.a5=L$poptgepsqueezed5;
	Larg0.a0=null;
	tmp3=L$poptgepsqueezed5.a0;
	tmp2=L$poptgepsqueezed5.a0o|0;
	(tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client4BlobEEC1IPFvPNS4_6TArrayIPNS4_2FDEEEjRKNS4_6StringEPNS4_13EventListenerEEJRSD_RjSG_EEET_DpOT0_EUlS6_E_JS6_EEEvPSN_DpSO_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.a1=Larg1;
	tmp0.i0=1;
	tmp1=tmp0.a2.a0;
	tmp2=tmp0.a2.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,L$poptgepsqueezed23=null,tmp5=null,tmp6=null,tmp7=null,tmp8=0,tmp9=0,L$poptgepsqueezed35=null,tmp11=null;
	L$poptgepsqueezed23=new constructor__ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E$pFrame().a;
	tmp5=L$poptgepsqueezed23[0];
	tmp5.a0=__ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E$presume;
	tmp5.a1=__ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E$pdestroy;
	tmp5.a8=Larg3;
	tmp5.a7=Larg2;
	tmp5.a6=Larg1;
	tmp6=tmp5.a2.a[tmp5.a2.o-1];
	Larg0.a0=tmp6;
	if((__ZN11CheerpXBase13cheerpOSStateE|0)!==0){
		tmp7=tmp5.a6;
		if(undefined===tmp7){
			L$poptgepsqueezed23=tmp5.a8;
			tmp5="Initialization failed for 'IDBDevice'";
			L$poptgepsqueezed23(tmp5);
		}else{
			tmp0={a0:null,i1:0,i2:0,a3:null,a4:null};
			L$poptgepsqueezed23="/";
			tmp7=L$poptgepsqueezed23.concat(tmp7,"/");
			tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
			tmp0.i1=0;
			tmp8=__ZN7CheerpX6Device9lastDevIdE|0;
			__ZN7CheerpX6Device9lastDevIdE=tmp8+1|0;
			tmp0.i2=tmp8;
			L$poptgepsqueezed23=__ZN11CheerpXBase7devicesE.a1;
			tmp9=__ZN11CheerpXBase7devicesE.a1o|0;
			tmp6=__ZN11CheerpXBase7devicesE.a2;
			L$poptgepsqueezed35=tmp6.a0;
			tmp1=tmp6.a0o|0;
			if(tmp9<tmp1){
				L$poptgepsqueezed23[tmp9]=tmp0;
				__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed23;
				__ZN11CheerpXBase7devicesE.a1o=tmp9+1|0;
			}else{
				tmp2={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp2={a0:null}}};
				tmp11=__ZN11CheerpXBase7devicesE.a0;
				tmp8=__ZN11CheerpXBase7devicesE.a0o|0;
				tmp8=(__imul(tmp8,4));
				tmp9=(__imul(tmp9,4))-tmp8>>2;
				tmp3=tmp9+1|0;
				if(tmp3>>>0>1073741823)_abort();
				;
				tmp8=(__imul(tmp1,4))-tmp8|0;
				if(tmp8>>>0<2147483644){
					tmp8>>>=1;
					tmp8=tmp8>>>0>tmp3>>>0?tmp8|0:tmp3|0;
				}else{
					tmp8=1073741823;
				}
				L$poptgepsqueezed23=tmp2.a3;
				L$poptgepsqueezed23.a1.a0=tmp6;
				if((tmp8|0)!==0)L$poptgepsqueezed35=createPointerArray([],0,(tmp8<<2)/4|0,null);
				else{
					L$poptgepsqueezed35=nullArray;
				}
				tmp2.a0=L$poptgepsqueezed35[0];
				tmp2.a1=L$poptgepsqueezed35;
				tmp2.a1o=0+tmp9|0;
				L$poptgepsqueezed23.a0=L$poptgepsqueezed35;
				L$poptgepsqueezed23.a0o=0+tmp8|0;
				L$poptgepsqueezed35[tmp9]=tmp0;
				tmp2.a2=L$poptgepsqueezed35;
				tmp2.a2o=(0+tmp9|0)+1|0;
				__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp2);
			}
			L$poptgepsqueezed23=tmp5.a7;
			tmp0.a3=null;
			tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
			tmp0.a4=tmp7;
			tmp0.a3=new CheerpJIndexedDBFolder(tmp7);
			L$poptgepsqueezed23(CheerpX.Device.wrap(Object.create(CheerpX.IDBDevice.prototype,{this:{value:tmp0}})));
		}
	}else{
		tmp11=__ZN11CheerpXBase12loadCheerpOSEv();
		tmp5.a9=tmp11;
		L$poptgepsqueezed35=tmp5.a3;
		L$poptgepsqueezed35.a0=tmp11;
		tmp5.i4=0;
		tmp5=new Uint8Array(1);
		tmp5[0]=0;
		L$poptgepsqueezed35.a2=tmp5;
		tmp6=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		tmp6[0].a0=L$poptgepsqueezed35;
		tmp6[0].a1.a0=L$poptgepsqueezed23;
		tmp6[0].a1.a0o=0;
		tmp6[0].a2=tmp5;
		L$poptgepsqueezed35=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp6[0]);
		tmp11.then(L$poptgepsqueezed35);
	}
}
function __ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp4=null,tmp5=0,tmp6=null,L$poptgepsqueezed17=null,tmp8=0,tmp9=0,tmp10=null;
	tmp6=Larg0.a3.a2;
	if(tmp6!==nullArray||0!==0)tmp6[0]=1;
	tmp6=Larg0.a6;
	if(undefined===tmp6){
		tmp6=Larg0.a8;
		L$poptgepsqueezed17="Initialization failed for 'IDBDevice'";
		tmp6(L$poptgepsqueezed17);
	}else{
		tmp0={a0:null,i1:0,i2:0,a3:null,a4:null};
		L$poptgepsqueezed17="/";
		tmp6=L$poptgepsqueezed17.concat(tmp6,"/");
		tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp0.i1=0;
		tmp8=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp8+1|0;
		tmp0.i2=tmp8;
		L$poptgepsqueezed17=__ZN11CheerpXBase7devicesE.a1;
		tmp9=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp1=__ZN11CheerpXBase7devicesE.a2;
		tmp10=tmp1.a0;
		tmp2=tmp1.a0o|0;
		if(tmp9<tmp2){
			L$poptgepsqueezed17[tmp9]=tmp0;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed17;
			__ZN11CheerpXBase7devicesE.a1o=tmp9+1|0;
		}else{
			tmp3={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp3={a0:null}}};
			tmp4=__ZN11CheerpXBase7devicesE.a0;
			tmp8=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp8=(__imul(tmp8,4));
			tmp9=(__imul(tmp9,4))-tmp8>>2;
			tmp5=tmp9+1|0;
			if(tmp5>>>0>1073741823)_abort();
			;
			tmp8=(__imul(tmp2,4))-tmp8|0;
			if(tmp8>>>0<2147483644){
				tmp8>>>=1;
				tmp8=tmp8>>>0>tmp5>>>0?tmp8|0:tmp5|0;
			}else{
				tmp8=1073741823;
			}
			L$poptgepsqueezed17=tmp3.a3;
			L$poptgepsqueezed17.a1.a0=tmp1;
			if((tmp8|0)!==0)tmp10=createPointerArray([],0,(tmp8<<2)/4|0,null);
			else{
				tmp10=nullArray;
			}
			tmp3.a0=tmp10[0];
			tmp3.a1=tmp10;
			tmp3.a1o=0+tmp9|0;
			L$poptgepsqueezed17.a0=tmp10;
			L$poptgepsqueezed17.a0o=0+tmp8|0;
			tmp10[tmp9]=tmp0;
			tmp3.a2=tmp10;
			tmp3.a2o=(0+tmp9|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp3);
		}
		L$poptgepsqueezed17=Larg0.a7;
		tmp0.a3=null;
		tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp0.a4=tmp6;
		tmp0.a3=new CheerpJIndexedDBFolder(tmp6);
		L$poptgepsqueezed17(CheerpX.Device.wrap(Object.create(CheerpX.IDBDevice.prototype,{this:{value:tmp0}})));
	}
}
function __ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	tmp0=Larg0.a3.a2;
	if(tmp0!==nullArray||0!==0)tmp0[0]=1;
}
function __ZZN7CheerpX9IDBDevice5resetEvENK3$_0clEPS0_PFvPN6client6ObjectEE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	Larg0.a6(null);
}
function __ZZN7CheerpX9IDBDevice5resetEvENK3$_0clEPS0_PFvPN6client6ObjectEE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZN7CheerpX9IDBDevice10clearCacheEv(Larg0,Larg1){
	var L$poptgepsqueezed20=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed21=null,tmp6=0,L$poptgepsqueezed22=null,tmp8=null;
	tmp3=new constructor__ZN7CheerpX9IDBDevice10clearCacheEv$pFrame().a;
	tmp4=tmp3[0];
	tmp4.a0=__ZN7CheerpX9IDBDevice10clearCacheEv$presume;
	tmp4.a1=__ZN7CheerpX9IDBDevice10clearCacheEv$pdestroy;
	tmp4.a3=Larg1;
	L$poptgepsqueezed20=tmp4.a2;
	L$poptgepsqueezed20.a0=nullArray;
	L$poptgepsqueezed20.a0o=0;
	L$poptgepsqueezed21=L$poptgepsqueezed20.a;
	tmp6=L$poptgepsqueezed20.o-1;
	Larg0.a0=L$poptgepsqueezed21;
	Larg0.a0o=tmp6;
	L$poptgepsqueezed21="";
	tmp4.a4=L$poptgepsqueezed21;
	L$poptgepsqueezed22=tmp4.a9;
	__ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE(L$poptgepsqueezed22,Larg1,L$poptgepsqueezed21);
	L$poptgepsqueezed21=L$poptgepsqueezed22.a0;
	tmp6=L$poptgepsqueezed22.a0o|0;
	a:{
		if(L$poptgepsqueezed21!==nullArray||tmp6!==0)if(L$poptgepsqueezed21[tmp6].a0!==null){
			tmp4.i11=0;
			tmp4=L$poptgepsqueezed21[tmp6].a[L$poptgepsqueezed21[tmp6].o- -1];
			tmp4.a0=tmp3;
			tmp4.a0o=0;
			break a;
		}
		L$poptgepsqueezed21=L$poptgepsqueezed21[tmp6].a[L$poptgepsqueezed21[tmp6].o- -1];
		L$poptgepsqueezed21=L$poptgepsqueezed21.a1.a1;
		tmp4.a5=L$poptgepsqueezed21;
		tmp8=L$poptgepsqueezed22.a0;
		tmp6=L$poptgepsqueezed22.a0o|0;
		if(tmp8!==nullArray||tmp6!==0)tmp8[tmp6].a1(tmp8,tmp6);
		tmp8=tmp4.a4;
		if(((L$poptgepsqueezed21.length)|0)>0){
			tmp8=tmp4.a3;
			L$poptgepsqueezed22={i0:0,i1:0,a2:nullArray};
			__ZNK6client6String6toUtf8Ev(L$poptgepsqueezed22,tmp8.a4);
			tmp8=L$poptgepsqueezed22.a2;
			___printf(_$pstr$p5,0,{d:tmp8,o:0});
			if(((L$poptgepsqueezed21.length)|0)!==0){
				L$poptgepsqueezed21=tmp4.a10;
				tmp6=0;
				while(1){
					tmp4.i6=tmp6;
					tmp8=tmp4.a5;
					tmp1=tmp4.a3;
					tmp2="/";
					tmp8=tmp2.concat(tmp8[0+tmp6|0]);
					tmp4.a7=tmp8;
					__ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE(L$poptgepsqueezed21,tmp1,tmp8);
					L$poptgepsqueezed22=L$poptgepsqueezed21.a0;
					tmp6=L$poptgepsqueezed21.a0o|0;
					if(L$poptgepsqueezed22!==nullArray||tmp6!==0)if(L$poptgepsqueezed22[tmp6].a0!==null){
						tmp4.i11=1;
						tmp4=L$poptgepsqueezed22[tmp6].a[L$poptgepsqueezed22[tmp6].o- -1];
						tmp4.a0=tmp3;
						tmp4.a0o=0;
						break a;
					}
					L$poptgepsqueezed22=L$poptgepsqueezed21.a0;
					tmp6=L$poptgepsqueezed21.a0o|0;
					if(L$poptgepsqueezed22!==nullArray||tmp6!==0)L$poptgepsqueezed22[tmp6].a1(L$poptgepsqueezed22,tmp6);
					L$poptgepsqueezed22=tmp4.a7;
					tmp6=tmp4.i6|0;
					tmp8=tmp4.a5;
					tmp6=tmp6+1|0;
					if(tmp6>>>0<(tmp8.length)>>>0){
						L$poptgepsqueezed22=tmp4.a7;
						continue;
					}
					break;
				}
			}
		}
		tmp4.a8=L$poptgepsqueezed20;
		tmp4.a0=null;
		tmp3=L$poptgepsqueezed20.a0;
		tmp6=L$poptgepsqueezed20.a0o|0;
		(tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX9IDBDevice10clearCacheEv$presume(Larg0,Marg0){
	var L$poptgepsqueezed26=null,L$ppre6_0=null,L$ppre6_1=0,Llabel=0,L$ppre=null,L$pdispatch6=null,tmp6=null;
	L$poptgepsqueezed26=Larg0[Marg0].a10;
	a:{
		b:{
			if((Larg0[Marg0].i11&3)!==0){
				L$ppre6_0=L$poptgepsqueezed26.a0;
				L$ppre6_1=L$poptgepsqueezed26.a0o|0;
				L$ppre6_0=L$ppre6_0[L$ppre6_1];
				Llabel=-1;
			}else{
				L$ppre6_0=Larg0[Marg0].a9.a0;
				Llabel=Larg0[Marg0].a9.a0o|0;
				L$ppre6_0=L$ppre6_0[Llabel].a[L$ppre6_0[Llabel].o- -1];
				L$ppre6_0=L$ppre6_0.a1.a1;
				Larg0[Marg0].a5=L$ppre6_0;
				L$ppre=Larg0[Marg0].a9.a0;
				Llabel=Larg0[Marg0].a9.a0o|0;
				if(L$ppre!==nullArray||Llabel!==0)L$ppre[Llabel].a1(L$ppre,Llabel);
				L$ppre=Larg0[Marg0].a4;
				if(((L$ppre6_0.length)|0)<=0)break b;
				L$ppre=Larg0[Marg0].a3;
				L$pdispatch6={i0:0,i1:0,a2:nullArray};
				__ZNK6client6String6toUtf8Ev(L$pdispatch6,L$ppre.a4);
				tmp6=L$pdispatch6.a2;
				___printf(_$pstr$p5,0,{d:tmp6,o:0});
				if(((L$ppre6_0.length)|0)===0)break b;
				L$ppre6_1=0;
				Llabel=0;
			}
			c:while(1){
				switch(Llabel|0){
					case 0:
					Larg0[Marg0].i6=L$ppre6_1;
					L$ppre6_0=Larg0[Marg0].a5;
					tmp6="/";
					L$ppre6_0=tmp6.concat(L$ppre6_0[0+L$ppre6_1|0]);
					Larg0[Marg0].a7=L$ppre6_0;
					__ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE(L$poptgepsqueezed26,L$ppre,L$ppre6_0);
					L$ppre6_0=L$poptgepsqueezed26.a0;
					Llabel=L$poptgepsqueezed26.a0o|0;
					if(L$ppre6_0!==nullArray||Llabel!==0){
						if(L$ppre6_0[Llabel].a0!==null){
							Larg0[Marg0].i11=1;
							L$poptgepsqueezed26=L$ppre6_0[Llabel].a[L$ppre6_0[Llabel].o- -1];
							L$poptgepsqueezed26.a0=Larg0;
							L$poptgepsqueezed26.a0o=Marg0;
							break a;
						}
						L$ppre6_0=L$ppre6_0[Llabel];
						Llabel=-1;
						continue c;
					}
					L$ppre6_0=null;
					Llabel=-1;
					continue c;
					default:
					L$pdispatch6=L$poptgepsqueezed26.a0;
					L$ppre6_1=L$poptgepsqueezed26.a0o|0;
					if(L$pdispatch6!==nullArray||L$ppre6_1!==0)L$pdispatch6[L$ppre6_1].a1(L$pdispatch6,L$ppre6_1);
					L$ppre=Larg0[Marg0].a7;
					L$ppre6_1=Larg0[Marg0].i6|0;
					L$pdispatch6=Larg0[Marg0].a5;
					L$ppre6_1=L$ppre6_1+1|0;
					if(L$ppre6_1>>>0<(L$pdispatch6.length)>>>0){
						L$pdispatch6=Larg0[Marg0].a7;
						L$ppre=Larg0[Marg0].a3;
						Llabel=0;
						continue c;
					}
				}
				break;
			}
		}
		L$poptgepsqueezed26=Larg0[Marg0].a2;
		Larg0[Marg0].a8=L$poptgepsqueezed26;
		Larg0[Marg0].a0=null;
		L$ppre6_0=L$poptgepsqueezed26.a0;
		Llabel=L$poptgepsqueezed26.a0o|0;
		(L$ppre6_0!==nullArray||Llabel!==0?L$ppre6_0:_NoopCoro$pFrame$pConst)[L$ppre6_0!==nullArray||Llabel!==0?Llabel:$NoopCoro$pFrame$pConst].a0((L$ppre6_0!==nullArray||Llabel!==0?L$ppre6_0:_NoopCoro$pFrame$pConst),L$ppre6_0!==nullArray||Llabel!==0?Llabel:$NoopCoro$pFrame$pConst);
	}
}
function __ZN7CheerpX9IDBDevice10clearCacheEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null)if((Larg0.i11&3)!==0){
		tmp0=Larg0.a10.a0;
		tmp1=Larg0.a10.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
		tmp0=Larg0.a7;
	}else{
		tmp0=Larg0.a9.a0;
		tmp1=Larg0.a9.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
		tmp0=Larg0.a4;
	}
}
function __ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE(Larg0,Larg1,Larg2){
	var tmp0=null,L$poptgepsqueezed11=null,tmp2=null,L$poptgepsqueezed12=null,tmp4=null,tmp5=null,tmp6=null,tmp7=0,tmp8=null;
	tmp5=create__ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE$pFrame({a0:null,a1:null,a2:tmp5={a0:nullArray,a0o:0,a1:{i0:0,a1:null}},a3:tmp5={i0:0,a1:{a0:nullArray,a0o:0}},i4:0,a5:null,a6:null}).a;
	tmp0=tmp5[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE$pdestroy;
	L$poptgepsqueezed11=tmp0.a2;
	L$poptgepsqueezed11.a0=nullArray;
	L$poptgepsqueezed11.a0o=0;
	tmp2=L$poptgepsqueezed11.a1;
	tmp2.i0=0;
	tmp6=L$poptgepsqueezed11.a;
	tmp7=L$poptgepsqueezed11.o-1;
	Larg0.a0=tmp6;
	Larg0.a0o=tmp7;
	tmp6=new Array();
	tmp0.a5=tmp6;
	L$poptgepsqueezed12=tmp0.a3;
	L$poptgepsqueezed12.i0=0;
	L$poptgepsqueezed12.a1.a0=nullArray;
	L$poptgepsqueezed12.a1.a0o=0;
	tmp4=Larg1.a3;
	tmp8=[{a0:null}];
	tmp8[0].a0=L$poptgepsqueezed12;
	tmp8=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFvPN6client13CheerpJFolderERKNS6_6StringEPNS6_5ArrayEPNS6_13EventListenerEEJRS8_SB_RPNS6_6TArrayIPS9_EEEEET_DpOT0_EUlvE_JEEEvPSO_DpSP_,tmp8[0]);
	cheerpOSListFilesMain(tmp4,Larg2,tmp6,tmp8);
	if((L$poptgepsqueezed12.i0&255)!==0){
		tmp5=tmp0.a5;
		tmp2.i0=256;
		tmp2.a1=tmp5;
		tmp0.a6=L$poptgepsqueezed11;
		tmp0.a0=null;
		tmp5=L$poptgepsqueezed11.a0;
		tmp7=L$poptgepsqueezed11.a0o|0;
		(tmp5!==nullArray||tmp7!==0?tmp5:_NoopCoro$pFrame$pConst)[tmp5!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst].a0((tmp5!==nullArray||tmp7!==0?tmp5:_NoopCoro$pFrame$pConst),tmp5!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed12.a1.a0=tmp5;
		L$poptgepsqueezed12.a1.a0o=0;
	}
}
function __ZNK6client6String6toUtf8Ev(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0;
	Larg0.i0=0;
	Larg0.i1=0;
	Larg0.a2=nullArray;
	tmp0=Larg1.length;
	if((tmp0|0)!==0){
		tmp1=0;
		while(1){
			tmp3=Larg1.charCodeAt((+(tmp1>>>0)));
			if(tmp3-57344>>>0<4294965248){
				tmp2=tmp3;
			}else if(tmp3>>>0<56320){
				tmp2=tmp3<<10&1047552;
			}else{
				tmp2=(tmp3&1023|tmp2)+65536|0;
			}
			tmp1=tmp1+1|0;
			a:{
				if((tmp1|0)!==(tmp0|0))if((tmp3&56320|0)===55296)break a;
				if(tmp2>>>0<128){
					tmp3=tmp2;
				}else if(tmp2>>>0<2048){
					__ZNSs9push_backEc(Larg0,tmp2>>>6|192);
					tmp3=tmp2&63|128;
				}else if(tmp2>>>0<65536){
					__ZNSs9push_backEc(Larg0,tmp2>>>12|224);
					__ZNSs9push_backEc(Larg0,tmp2>>>6&63|128);
					tmp3=tmp2&63|128;
				}else{
					__ZNSs9push_backEc(Larg0,tmp2>>>18|240);
					__ZNSs9push_backEc(Larg0,tmp2>>>12&63|128);
					__ZNSs9push_backEc(Larg0,tmp2>>>6&63|128);
					tmp3=tmp2&63|128;
				}
				__ZNSs9push_backEc(Larg0,tmp3);
			}
			if((tmp1|0)!==(tmp0|0))continue;
			break;
		}
	}
}
function __ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE(Larg0,Larg1,Larg2){
	var tmp0=null,L$poptgepsqueezed10=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed11=null,tmp6=0,tmp7=null;
	tmp4=create__ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp4={i0:0,i1:0}},a3:tmp4={i0:0,i1:0,a2:{a0:nullArray,a0o:0}},i4:0,a5:null}).a;
	tmp0=tmp4[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE$pdestroy;
	L$poptgepsqueezed10=tmp0.a2;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	tmp2=L$poptgepsqueezed10.a1;
	tmp2.i0=0;
	L$poptgepsqueezed11=L$poptgepsqueezed10.a;
	tmp6=L$poptgepsqueezed10.o-1;
	Larg0.a0=L$poptgepsqueezed11;
	Larg0.a0o=tmp6;
	L$poptgepsqueezed11=tmp0.a3;
	L$poptgepsqueezed11.i0=0;
	L$poptgepsqueezed11.a2.a0=nullArray;
	L$poptgepsqueezed11.a2.a0o=0;
	tmp3=Larg1.a3;
	tmp7=[{a0:null}];
	tmp7[0].a0=L$poptgepsqueezed11;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvPN6client13CheerpJFolderERKNS6_6StringEPNS6_13EventListenerEEJRS8_SB_EEET_DpOT0_EUliE_JiEEEvPSH_DpSI_,tmp7[0]);
	cheerpOSUnlinkMain(tmp3,Larg2,tmp7);
	if((L$poptgepsqueezed11.i0&255)!==0){
		tmp6=L$poptgepsqueezed11.i1|0;
		tmp2.i0=256;
		tmp2.i1=tmp6;
		tmp0.a5=L$poptgepsqueezed10;
		tmp0.a0=null;
		tmp4=L$poptgepsqueezed10.a0;
		tmp6=L$poptgepsqueezed10.a0o|0;
		(tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed11.a2.a0=tmp4;
		L$poptgepsqueezed11.a2.a0o=0;
	}
}
function __ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep1$poptgep=null;
	tmp1=Larg0.a3.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.i1=tmp1;
	Larg0.a5=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvPN6client13CheerpJFolderERKNS6_6StringEPNS6_13EventListenerEEJRS8_SB_EEET_DpOT0_EUliE_JiEEEvPSH_DpSI_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i1=Larg1;
	tmp0.i0=1;
	tmp1=tmp0.a2.a0;
	tmp2=tmp0.a2.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed6=null,L$poptgep$poptgep1$poptgep=null,tmp2=0,tmp3=null;
	tmp3=Larg0.a5;
	L$poptgepsqueezed6=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed6.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.a1=tmp3;
	Larg0.a6=L$poptgepsqueezed6;
	Larg0.a0=null;
	tmp3=L$poptgepsqueezed6.a0;
	tmp2=L$poptgepsqueezed6.a0o|0;
	(tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFvPN6client13CheerpJFolderERKNS6_6StringEPNS6_5ArrayEPNS6_13EventListenerEEJRS8_SB_RPNS6_6TArrayIPS9_EEEEET_DpOT0_EUlvE_JEEEvPSO_DpSP_(Larg0){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i0=1;
	tmp1=tmp0.a1.a0;
	tmp2=tmp0.a1.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj$presume(Larg0,Marg0){
	var tmp0=0,tmp1=0,L$ppre12_1=0,L$poptgepsqueezed70=null,L$ppre12_0=null,L$ppre_0=null,L$pdispatch4=0,L$poptgepsqueezed53=null,L$poptgepsqueezed52=null,tmp9=null,tmp10=null;
	L$ppre12_1=Larg0[Marg0].i14|0;
	L$poptgepsqueezed70=Larg0[Marg0].a13;
	a:{
		b:{
			c:if(L$ppre12_1<<30>-1073741824){
				L$ppre12_0=Larg0[Marg0].a12;
				if((L$ppre12_1&3)!==0){
					L$ppre_0=L$ppre12_0.a0;
					L$ppre12_1=L$ppre12_0.a0o|0;
					L$ppre_0=L$ppre_0[L$ppre12_1];
					L$ppre12_1=-1;
				}else{
					L$ppre_0=Larg0[Marg0].a11.a0;
					L$ppre12_1=Larg0[Marg0].a11.a0o|0;
					L$ppre_0=L$ppre_0[L$ppre12_1].a[L$ppre_0[L$ppre12_1].o- -1];
					Larg0[Marg0].i8=L$ppre_0.a1.i1|0;
					L$ppre_0=Larg0[Marg0].a11.a0;
					L$ppre12_1=Larg0[Marg0].a11.a0o|0;
					if(L$ppre_0!==nullArray||L$ppre12_1!==0)L$ppre_0[L$ppre12_1].a1(L$ppre_0,L$ppre12_1);
					L$ppre_0=Larg0[Marg0].a7;
					L$poptgepsqueezed53=Larg0[Marg0].a6;
					L$ppre12_1=Larg0[Marg0].i5|0;
					Larg0[Marg0].a9=new Uint8Array(4096);
					L$pdispatch4=L$ppre12_1<<20;
					L$ppre12_1=0;
				}
				d:while(1){
					switch(L$ppre12_1|0){
						case 0:
						Larg0[Marg0].i10=L$pdispatch4;
						if((L$pdispatch4|0)!==0){
							__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$ppre12_0,Larg0[Marg0].i8|0,Larg0[Marg0].a9,0,4096);
							L$ppre_0=L$ppre12_0.a0;
							L$ppre12_1=L$ppre12_0.a0o|0;
							if(L$ppre_0!==nullArray||L$ppre12_1!==0){
								if(L$ppre_0[L$ppre12_1].a0!==null){
									Larg0[Marg0].i14=1;
									L$poptgepsqueezed70=L$ppre_0[L$ppre12_1].a[L$ppre_0[L$ppre12_1].o- -1];
									L$poptgepsqueezed70.a0=Larg0;
									L$poptgepsqueezed70.a0o=Marg0;
									break a;
								}
								L$ppre_0=L$ppre_0[L$ppre12_1];
								L$ppre12_1=-1;
								continue d;
							}
							L$ppre_0=null;
							L$ppre12_1=-1;
							continue d;
						}
						L$ppre12_0=create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:L$ppre12_0={i0:0,a1:{a0:nullArray,a0o:0}},i5:0}).a;
						L$ppre12_1=Larg0[Marg0].i8|0;
						L$ppre_0=L$ppre12_0[0];
						L$ppre_0.a0=__ZN7CheerpX14CheerpOSDevice5closeEi$presume;
						L$ppre_0.a1=__ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy;
						L$poptgepsqueezed52=L$ppre_0.a2;
						L$poptgepsqueezed52.a0=nullArray;
						L$poptgepsqueezed52.a0o=0;
						L$poptgepsqueezed53=L$poptgepsqueezed52.a;
						L$pdispatch4=L$poptgepsqueezed52.o-1;
						L$poptgepsqueezed70.a0=L$poptgepsqueezed53;
						L$poptgepsqueezed70.a0o=L$pdispatch4;
						L$poptgepsqueezed53=L$ppre_0.a4;
						L$poptgepsqueezed53.i0=0;
						L$poptgepsqueezed53.a1.a0=nullArray;
						L$poptgepsqueezed53.a1.a0o=0;
						tmp9=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
						tmp10=[{a0:null}];
						tmp10[0].a0=L$poptgepsqueezed53;
						tmp10=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_,tmp10[0]);
						cheerpOSClose(tmp9,L$ppre12_1,tmp10);
						if((L$poptgepsqueezed53.i0&255)!==0){
							L$ppre_0.a3=L$poptgepsqueezed52;
							L$ppre_0.a0=null;
							L$ppre12_0=L$poptgepsqueezed52.a0;
							L$ppre12_1=L$poptgepsqueezed52.a0o|0;
							(L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_0:_NoopCoro$pFrame$pConst)[L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_1:$NoopCoro$pFrame$pConst].a0((L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_0:_NoopCoro$pFrame$pConst),L$ppre12_0!==nullArray||L$ppre12_1!==0?L$ppre12_1:$NoopCoro$pFrame$pConst);
						}else{
							L$ppre_0.i5=0;
							L$poptgepsqueezed53.a1.a0=L$ppre12_0;
							L$poptgepsqueezed53.a1.a0o=0;
						}
						L$ppre12_0=L$poptgepsqueezed70.a0;
						L$ppre12_1=L$poptgepsqueezed70.a0o|0;
						if(L$ppre12_0===nullArray&&L$ppre12_1===0)break b;
						if(L$ppre12_0[L$ppre12_1].a0!==null){
							Larg0[Marg0].i14=2;
							L$poptgepsqueezed70=L$ppre12_0[L$ppre12_1].a[L$ppre12_0[L$ppre12_1].o- -1];
							L$poptgepsqueezed70.a0=Larg0;
							L$poptgepsqueezed70.a0o=Marg0;
							break a;
						}
						L$ppre12_1=L$ppre12_1;
						L$poptgepsqueezed70=L$ppre12_0;
						break c;
						default:
						L$poptgepsqueezed53=L$ppre12_0.a0;
						L$ppre12_1=L$ppre12_0.a0o|0;
						if(L$poptgepsqueezed53!==nullArray||L$ppre12_1!==0)L$poptgepsqueezed53[L$ppre12_1].a1(L$poptgepsqueezed53,L$ppre12_1);
						L$ppre12_1=Larg0[Marg0].i10|0;
						L$pdispatch4=L$ppre12_1-4096|0;
						L$ppre12_1=0;
						continue d;
					}
					break;
				}
			}else{
				L$ppre12_0=L$poptgepsqueezed70.a0;
				L$ppre12_1=L$poptgepsqueezed70.a0o|0;
				if(L$ppre12_0===nullArray&&L$ppre12_1===0)break b;
				L$ppre12_1=L$ppre12_1;
				L$poptgepsqueezed70=L$ppre12_0;
			}
			L$poptgepsqueezed70[L$ppre12_1].a1(L$poptgepsqueezed70,L$ppre12_1);
		}
		L$poptgepsqueezed70=Larg0[Marg0].a4;
		L$ppre12_0=Larg0[Marg0].a3;
		L$poptgepsqueezed52={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null,a6:null};
		L$poptgepsqueezed52.a0=__ZTVN7CheerpX9IDBDeviceE;
		L$poptgepsqueezed52.i1=1;
		L$ppre12_1=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=L$ppre12_1+1|0;
		L$poptgepsqueezed52.i2=L$ppre12_1;
		L$poptgepsqueezed70=__ZN11CheerpXBase7devicesE.a1;
		L$pdispatch4=__ZN11CheerpXBase7devicesE.a1o|0;
		L$poptgepsqueezed53=__ZN11CheerpXBase7devicesE.a2;
		tmp10=L$poptgepsqueezed53.a0;
		tmp0=L$poptgepsqueezed53.a0o|0;
		if(L$pdispatch4<tmp0){
			L$poptgepsqueezed70[L$pdispatch4]=L$poptgepsqueezed52;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed70;
			__ZN11CheerpXBase7devicesE.a1o=L$pdispatch4+1|0;
		}else{
			tmp9={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp9={a0:null}}};
			L$ppre_0=__ZN11CheerpXBase7devicesE.a0;
			L$ppre12_1=__ZN11CheerpXBase7devicesE.a0o|0;
			L$ppre12_1=(__imul(L$ppre12_1,4));
			L$pdispatch4=(__imul(L$pdispatch4,4))-L$ppre12_1>>2;
			tmp1=L$pdispatch4+1|0;
			if(tmp1>>>0>1073741823)_abort();
			;
			L$ppre12_1=(__imul(tmp0,4))-L$ppre12_1|0;
			if(L$ppre12_1>>>0<2147483644){
				L$ppre12_1>>>=1;
				L$ppre12_1=L$ppre12_1>>>0>tmp1>>>0?L$ppre12_1|0:tmp1|0;
			}else{
				L$ppre12_1=1073741823;
			}
			L$poptgepsqueezed70=tmp9.a3;
			L$poptgepsqueezed70.a1.a0=L$poptgepsqueezed53;
			if((L$ppre12_1|0)!==0)tmp10=createPointerArray([],0,(L$ppre12_1<<2)/4|0,null);
			else{
				tmp10=nullArray;
			}
			tmp9.a0=tmp10[0];
			tmp9.a1=tmp10;
			tmp9.a1o=0+L$pdispatch4|0;
			L$poptgepsqueezed70.a0=tmp10;
			L$poptgepsqueezed70.a0o=0+L$ppre12_1|0;
			tmp10[L$pdispatch4]=L$poptgepsqueezed52;
			tmp9.a2=tmp10;
			tmp9.a2o=(0+L$pdispatch4|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp9);
		}
		L$poptgepsqueezed70=Larg0[Marg0].a4;
		L$poptgepsqueezed52.i3=Larg0[Marg0].i5<<20;
		L$poptgepsqueezed52.a4=L$poptgepsqueezed70;
		L$poptgepsqueezed52.a0=__ZTVN7CheerpX10FileDeviceE;
		L$poptgepsqueezed52.a5=L$ppre12_0;
		L$ppre12_0="/";
		L$ppre12_0=L$ppre12_0.concat(L$poptgepsqueezed70);
		L$ppre12_0=L$ppre12_0;
		L$poptgepsqueezed52.a6=L$ppre12_0;
		Larg0[Marg0].a2.a0.call(null,Object.create(CheerpX.Device.prototype,{this:{value:L$poptgepsqueezed52}}));
	}
}
function __ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0,tmp2=null;
	tmp1=Larg0.i14|0;
	if(tmp1<<30>-1073741824){
		if((tmp1&3)!==0){
			tmp2=Larg0.a12.a0;
			tmp1=Larg0.a12.a0o|0;
			if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
		}else{
			tmp2=Larg0.a11.a0;
			tmp1=Larg0.a11.a0o|0;
			if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
			tmp2=Larg0.a7;
			tmp0=Larg0.a6;
		}
	}else{
		tmp2=Larg0.a13.a0;
		tmp1=Larg0.a13.a0o|0;
		if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPN7CheerpX6DeviceEEEJRNS6_9IDBDeviceEPNS4_6StringEjEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSI_EEEvPT_DpT0_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZN7CheerpX9IDBDevice14readFileAsBlobEPN6client6StringE$presume(Larg0,Marg0){
	var L$poptgepsqueezed14=null,tmp1=0,L$poptgepsqueezed13=null,L$ppre_0=null,L$ppre_1=0,tmp5=null;
	L$poptgepsqueezed13=Larg0[Marg0].a2;
	L$poptgepsqueezed14=Larg0[Marg0].a6;
	a:{
		if(Larg0[Marg0].i7|0){
			L$ppre_0=L$poptgepsqueezed14.a0;
			L$ppre_1=L$poptgepsqueezed14.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1];
		}else{
			L$ppre_0=Larg0[Marg0].a5.a0;
			L$ppre_1=Larg0[Marg0].a5.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
			L$ppre_1=L$ppre_0.a1.i1|0;
			L$ppre_0=Larg0[Marg0].a5.a0;
			tmp1=Larg0[Marg0].a5.a0o|0;
			if(L$ppre_0!==nullArray||tmp1!==0)L$ppre_0[tmp1].a1(L$ppre_0,tmp1);
			L$ppre_0=Larg0[Marg0].a4;
			tmp5=Larg0[Marg0].a3;
			if((L$ppre_1|0)<0){
				L$poptgepsqueezed13.a0.call(null,null);
				break a;
			}
			L$ppre_0=Larg0[Marg0].a3;
			__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE(L$poptgepsqueezed14,L$ppre_1,L$ppre_0);
			L$ppre_0=L$poptgepsqueezed14.a0;
			L$ppre_1=L$poptgepsqueezed14.a0o|0;
			if(L$ppre_0!==nullArray||L$ppre_1!==0){
				if(L$ppre_0[L$ppre_1].a0!==null){
					Larg0[Marg0].i7=1;
					L$poptgepsqueezed13=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$poptgepsqueezed13.a0=Larg0;
					L$poptgepsqueezed13.a0o=Marg0;
					break a;
				}
				L$ppre_0=L$ppre_0[L$ppre_1];
			}else{
				L$ppre_0=null;
			}
		}
		L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
		L$ppre_0=L$ppre_0.a1.a1;
		tmp5=L$poptgepsqueezed14.a0;
		L$ppre_1=L$poptgepsqueezed14.a0o|0;
		if(tmp5!==nullArray||L$ppre_1!==0)tmp5[L$ppre_1].a1(tmp5,L$ppre_1);
		tmp5=Larg0[Marg0].a3;
		L$poptgepsqueezed13.a0.call(null,L$ppre_0);
	}
}
function __ZN7CheerpX9IDBDevice14readFileAsBlobEPN6client6StringE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=0;
	if(Larg0.i7|0){
		tmp1=Larg0.a6.a0;
		tmp2=Larg0.a6.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
		tmp1=Larg0.a3;
		return;
	}
	tmp1=Larg0.a5.a0;
	tmp2=Larg0.a5.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
	tmp1=Larg0.a4;
	tmp0=Larg0.a3;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4BlobEEEJRN7CheerpX9IDBDeviceEPNS4_6StringEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSI_EEEvPT_DpT0_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZNSt5dequeIPN6client11CoreMessageESaIS2_EED2B7v160000Ev(Larg0){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=0,L$ppre$mphi8=0,Lgeptoindexphi=0;
	Larg0.i5=0;
	tmp0=Larg0.a2;
	tmp1=Larg0.a2o|0;
	tmp2=Larg0.a1;
	tmp3=Larg0.a1o|0;
	tmp4=(__imul(tmp1,4));
	L$ppre$mphi8=tmp4-(__imul(tmp3,4))|0;
	if(L$ppre$mphi8>>>0>8){
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			L$ppre$mphi8=tmp4-(__imul(tmp3+Lgeptoindexphi|0,4))|0;
			if(L$ppre$mphi8>>>0>8)continue;
			break;
		}
		Larg0.a1=tmp2;
		Larg0.a1o=tmp3+Lgeptoindexphi|0;
	}else{
		Lgeptoindexphi=0;
	}
	L$ppre$mphi8>>>=2;
	if((L$ppre$mphi8|0)===1)Larg0.i4=512;
	else if((L$ppre$mphi8|0)===2)Larg0.i4=1024;
	if(tmp2!==tmp0||(tmp3+Lgeptoindexphi|0)!==tmp1){
		Larg0.a2=tmp2;
		Larg0.a2o=tmp3+Lgeptoindexphi|0;
	}
}
function __ZNSt5dequeIN7CheerpX5Linux14FileWatchQueue4DataESaIS3_EED2B7v160000Ev(Larg0){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=0,L$ppre$mphi8=0,Lgeptoindexphi=0;
	Larg0.i5=0;
	tmp0=Larg0.a2;
	tmp1=Larg0.a2o|0;
	tmp2=Larg0.a1;
	tmp3=Larg0.a1o|0;
	tmp4=(__imul(tmp1,4));
	L$ppre$mphi8=tmp4-(__imul(tmp3,4))|0;
	if(L$ppre$mphi8>>>0>8){
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			L$ppre$mphi8=tmp4-(__imul(tmp3+Lgeptoindexphi|0,4))|0;
			if(L$ppre$mphi8>>>0>8)continue;
			break;
		}
		Larg0.a1=tmp2;
		Larg0.a1o=tmp3+Lgeptoindexphi|0;
	}else{
		Lgeptoindexphi=0;
	}
	L$ppre$mphi8>>>=2;
	if((L$ppre$mphi8|0)===1)Larg0.i4=256;
	else if((L$ppre$mphi8|0)===2)Larg0.i4=512;
	if(tmp2!==tmp0||(tmp3+Lgeptoindexphi|0)!==tmp1){
		Larg0.a2=tmp2;
		Larg0.a2o=tmp3+Lgeptoindexphi|0;
	}
}
function __ZN11CheerpXBase12cheerpOSInitEv(Larg0,Larg1){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0;
	tmp3=create__ZN11CheerpXBase12cheerpOSInitEv$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp3={i0:0,a1:null}},i3:0,a4:tmp3=[0],a5:null});
	tmp3=tmp3;
	tmp3.a0=__ZN11CheerpXBase12cheerpOSInitEv$presume;
	tmp3.a1=__ZN11CheerpXBase12cheerpOSInitEv$pdestroy;
	L$poptgepsqueezed8=tmp3.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	tmp2=L$poptgepsqueezed8.a;
	tmp4=L$poptgepsqueezed8.o-1;
	Larg0.a0=tmp2;
	Larg0.a0o=tmp4;
	tmp4=tmp1.i0|0;
	tmp1.a1=null;
	if((tmp4&65535)<256)tmp1.i0=tmp4|256;
	tmp3.a5=L$poptgepsqueezed8;
	tmp3.a0=null;
	tmp3=L$poptgepsqueezed8.a0;
	tmp4=L$poptgepsqueezed8.a0o|0;
	(tmp3!==nullArray||tmp4!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp4!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst);
}
function __ZN11CheerpXBase12cheerpOSInitEv$presume(Larg0,Marg0){
	;
}
function __ZN11CheerpXBase12cheerpOSInitEv$pdestroy(Larg0,Marg0){
}
function __ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=null,tmp5=null,tmp6=null,L$poptgepsqueezed41=null,tmp8=null,tmp9=0,L$poptgepsqueezed27=null,tmp11=-0.,tmp12=0;
	tmp4=new constructor__ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame().a;
	tmp5=tmp4[0];
	tmp5.a0=__ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$presume;
	tmp5.a1=__ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy;
	tmp5.a8=Larg3;
	tmp5.a7=Larg2;
	tmp5.a6=Larg1;
	tmp6=tmp5.a2.a[tmp5.a2.o-1];
	Larg0.a0=tmp6;
	tmp6=new XMLHttpRequest();
	tmp5.a9=tmp6;
	L$poptgepsqueezed41="GET";
	tmp6.open(L$poptgepsqueezed41,Larg1);
	L$poptgepsqueezed41="Range";
	tmp8="bytes=0-1";
	tmp6.setRequestHeader(L$poptgepsqueezed41,tmp8);
	L$poptgepsqueezed41=tmp5.a3;
	__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE(L$poptgepsqueezed41,tmp6);
	tmp6=L$poptgepsqueezed41.a0;
	tmp9=L$poptgepsqueezed41.a0o|0;
	a:{
		if(tmp6!==nullArray||tmp9!==0){
			if(tmp6[tmp9].a0!==null){
				tmp5.i4=0;
				tmp5=tmp6[tmp9].a[tmp6[tmp9].o- -1];
				tmp5.a0=tmp4;
				tmp5.a0o=0;
				break a;
			}
			tmp6[tmp9].a1(tmp6,tmp9);
		}
		if(!( +tmp5.a9.status===200))if(!( +tmp5.a9.status===206)){
			tmp6=tmp5.a9;
			tmp5=tmp5.a8;
			tmp4="Initialization failed for 'HttpBytesDevice': Server returned ";
			tmp5(tmp4.concat(+tmp6.status));
			break a;
		}
		tmp6=tmp5.a9;
		L$poptgepsqueezed41="Last-Modified";
		tmp4=tmp6.getResponseHeader(L$poptgepsqueezed41);
		L$poptgepsqueezed41="Etag";
		tmp6=tmp6.getResponseHeader(L$poptgepsqueezed41);
		tmp9=tmp6!==null?1:0;
		if(tmp4===null)if(!(tmp9)){
			tmp4=tmp5.a8;
			tmp5="Initialization failed for 'HttpBytesDevice': Server didn't include header `Last-Modified` nor header `Etag`";
			tmp4(tmp5);
			break a;
		}
		L$poptgepsqueezed41=tmp5.a9;
		tmp8="Content-Range";
		L$poptgepsqueezed41=L$poptgepsqueezed41.getResponseHeader(tmp8);
		if(L$poptgepsqueezed41!==null){
			tmp8="/";
			L$poptgepsqueezed41=L$poptgepsqueezed41.split(tmp8);
			L$poptgepsqueezed41=L$poptgepsqueezed41[0+1|0];
			tmp8=new Number(L$poptgepsqueezed41);
			if( +tmp8.valueOf()>2147483648){
				tmp4=tmp5.a8;
				tmp5="Initialization failed for 'HttpBytesDevice': File size exceeds 2GB";
				tmp4(tmp5);
			}else{
				if(tmp9){
					L$poptgepsqueezed41="%";
					tmp8="g";
					tmp4=new RegExp(L$poptgepsqueezed41,tmp8);
					L$poptgepsqueezed27="%25";
					tmp4=tmp6.replace(tmp4,L$poptgepsqueezed27);
					tmp6="/";
					L$poptgepsqueezed41="g";
					tmp8=new RegExp(tmp6,L$poptgepsqueezed41);
					L$poptgepsqueezed27="%2F";
					tmp4=tmp4.replace(tmp8,L$poptgepsqueezed27);
				}else{
					tmp11=+Date.parse(tmp4);
					tmp4=L$poptgepsqueezed41.concat("-").concat(~~(tmp11/1000));
				}
				tmp6={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null};
				tmp11=+parseInt(tmp4);
				tmp6.a0=__ZTVN7CheerpX9IDBDeviceE;
				tmp6.i1=1;
				tmp9=__ZN7CheerpX6Device9lastDevIdE|0;
				__ZN7CheerpX6Device9lastDevIdE=tmp9+1|0;
				tmp6.i2=tmp9;
				L$poptgepsqueezed27=__ZN11CheerpXBase7devicesE.a1;
				tmp12=__ZN11CheerpXBase7devicesE.a1o|0;
				L$poptgepsqueezed41=__ZN11CheerpXBase7devicesE.a2;
				tmp0=L$poptgepsqueezed41.a0;
				tmp1=L$poptgepsqueezed41.a0o|0;
				if(tmp12<tmp1){
					L$poptgepsqueezed27[tmp12]=tmp6;
					__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed27;
					__ZN11CheerpXBase7devicesE.a1o=tmp12+1|0;
				}else{
					tmp8={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp8={a0:null}}};
					tmp2=__ZN11CheerpXBase7devicesE.a0;
					tmp9=__ZN11CheerpXBase7devicesE.a0o|0;
					tmp9=(__imul(tmp9,4));
					tmp12=(__imul(tmp12,4))-tmp9>>2;
					tmp3=tmp12+1|0;
					if(tmp3>>>0>1073741823)_abort();
					;
					tmp9=(__imul(tmp1,4))-tmp9|0;
					if(tmp9>>>0<2147483644){
						tmp9>>>=1;
						tmp9=tmp9>>>0>tmp3>>>0?tmp9|0:tmp3|0;
					}else{
						tmp9=1073741823;
					}
					L$poptgepsqueezed27=tmp8.a3;
					L$poptgepsqueezed27.a1.a0=L$poptgepsqueezed41;
					if((tmp9|0)!==0)L$poptgepsqueezed41=createPointerArray([],0,(tmp9<<2)/4|0,null);
					else{
						L$poptgepsqueezed41=nullArray;
					}
					tmp8.a0=L$poptgepsqueezed41[0];
					tmp8.a1=L$poptgepsqueezed41;
					tmp8.a1o=0+tmp12|0;
					L$poptgepsqueezed27.a0=L$poptgepsqueezed41;
					L$poptgepsqueezed27.a0o=0+tmp9|0;
					L$poptgepsqueezed41[tmp12]=tmp6;
					tmp8.a2=L$poptgepsqueezed41;
					tmp8.a2o=(0+tmp12|0)+1|0;
					__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp8);
				}
				L$poptgepsqueezed41=tmp5.a7;
				tmp5=tmp5.a6;
				tmp6.i3=~~tmp11;
				tmp6.a4=tmp4;
				tmp6.a0=__ZTVN7CheerpX15HttpBytesDeviceE;
				tmp6.a5=tmp5;
				L$poptgepsqueezed41(CheerpX.Device.wrap(Object.create(CheerpX.HttpBytesDevice.prototype,{this:{value:tmp6}})));
			}
		}else{
			tmp4=tmp5.a8;
			tmp5="Initialization failed for 'HttpBytesDevice': Server didn't include header `Content-Range`";
			tmp4(tmp5);
		}
	}
}
function __ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null,tmp3=0,tmp4=null,tmp5=0,L$poptgepsqueezed25=null,tmp7=null,tmp8=null,tmp9=null,tmp10=-0.,tmp11=0;
	tmp4=Larg0.a3.a0;
	tmp5=Larg0.a3.a0o|0;
	if(tmp4!==nullArray||tmp5!==0)tmp4[tmp5].a1(tmp4,tmp5);
	tmp4=Larg0.a9;
	a:{
		if(!( +tmp4.status===200))if(!( +tmp4.status===206)){
			L$poptgepsqueezed25=Larg0.a8;
			tmp7="Initialization failed for 'HttpBytesDevice': Server returned ";
			L$poptgepsqueezed25(tmp7.concat(+tmp4.status));
			break a;
		}
		L$poptgepsqueezed25="Last-Modified";
		tmp7=tmp4.getResponseHeader(L$poptgepsqueezed25);
		L$poptgepsqueezed25="Etag";
		tmp8=tmp4.getResponseHeader(L$poptgepsqueezed25);
		tmp5=tmp8!==null?1:0;
		if(tmp7===null)if(!(tmp5)){
			tmp4=Larg0.a8;
			L$poptgepsqueezed25="Initialization failed for 'HttpBytesDevice': Server didn't include header `Last-Modified` nor header `Etag`";
			tmp4(L$poptgepsqueezed25);
			break a;
		}
		L$poptgepsqueezed25="Content-Range";
		tmp4=tmp4.getResponseHeader(L$poptgepsqueezed25);
		if(tmp4!==null){
			L$poptgepsqueezed25="/";
			tmp4=tmp4.split(L$poptgepsqueezed25);
			L$poptgepsqueezed25=tmp4[0+1|0];
			tmp4=new Number(L$poptgepsqueezed25);
			if( +tmp4.valueOf()>2147483648){
				tmp4=Larg0.a8;
				L$poptgepsqueezed25="Initialization failed for 'HttpBytesDevice': File size exceeds 2GB";
				tmp4(L$poptgepsqueezed25);
			}else{
				if(tmp5){
					L$poptgepsqueezed25="%";
					tmp9="g";
					tmp4=new RegExp(L$poptgepsqueezed25,tmp9);
					tmp7="%25";
					tmp4=tmp8.replace(tmp4,tmp7);
					L$poptgepsqueezed25="/";
					tmp9="g";
					tmp7=new RegExp(L$poptgepsqueezed25,tmp9);
					tmp8="%2F";
					tmp4=tmp4.replace(tmp7,tmp8);
				}else{
					tmp10=+Date.parse(tmp7);
					tmp4=L$poptgepsqueezed25.concat("-").concat(~~(tmp10/1000));
				}
				tmp7={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null};
				tmp10=+parseInt(tmp4);
				tmp7.a0=__ZTVN7CheerpX9IDBDeviceE;
				tmp7.i1=1;
				tmp5=__ZN7CheerpX6Device9lastDevIdE|0;
				__ZN7CheerpX6Device9lastDevIdE=tmp5+1|0;
				tmp7.i2=tmp5;
				L$poptgepsqueezed25=__ZN11CheerpXBase7devicesE.a1;
				tmp11=__ZN11CheerpXBase7devicesE.a1o|0;
				tmp9=__ZN11CheerpXBase7devicesE.a2;
				tmp8=tmp9.a0;
				tmp0=tmp9.a0o|0;
				if(tmp11<tmp0){
					L$poptgepsqueezed25[tmp11]=tmp7;
					__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed25;
					__ZN11CheerpXBase7devicesE.a1o=tmp11+1|0;
				}else{
					tmp1={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp1={a0:null}}};
					tmp2=__ZN11CheerpXBase7devicesE.a0;
					tmp5=__ZN11CheerpXBase7devicesE.a0o|0;
					tmp5=(__imul(tmp5,4));
					tmp11=(__imul(tmp11,4))-tmp5>>2;
					tmp3=tmp11+1|0;
					if(tmp3>>>0>1073741823)_abort();
					;
					tmp5=(__imul(tmp0,4))-tmp5|0;
					if(tmp5>>>0<2147483644){
						tmp5>>>=1;
						tmp5=tmp5>>>0>tmp3>>>0?tmp5|0:tmp3|0;
					}else{
						tmp5=1073741823;
					}
					L$poptgepsqueezed25=tmp1.a3;
					L$poptgepsqueezed25.a1.a0=tmp9;
					if((tmp5|0)!==0)tmp8=createPointerArray([],0,(tmp5<<2)/4|0,null);
					else{
						tmp8=nullArray;
					}
					tmp1.a0=tmp8[0];
					tmp1.a1=tmp8;
					tmp1.a1o=0+tmp11|0;
					L$poptgepsqueezed25.a0=tmp8;
					L$poptgepsqueezed25.a0o=0+tmp5|0;
					tmp8[tmp11]=tmp7;
					tmp1.a2=tmp8;
					tmp1.a2o=(0+tmp11|0)+1|0;
					__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp1);
				}
				L$poptgepsqueezed25=Larg0.a7;
				tmp9=Larg0.a6;
				tmp7.i3=~~tmp10;
				tmp7.a4=tmp4;
				tmp7.a0=__ZTVN7CheerpX15HttpBytesDeviceE;
				tmp7.a5=tmp9;
				L$poptgepsqueezed25(CheerpX.Device.wrap(Object.create(CheerpX.HttpBytesDevice.prototype,{this:{value:tmp7}})));
			}
		}else{
			tmp4=Larg0.a8;
			L$poptgepsqueezed25="Initialization failed for 'HttpBytesDevice': Server didn't include header `Content-Range`";
			tmp4(L$poptgepsqueezed25);
		}
	}
}
function __ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgepsqueezed40=null,tmp1=0,tmp2=null,tmp3=null,L$poptgepsqueezed41=null,tmp5=0,L$poptgepsqueezed42=null,tmp7=null;
	tmp2=new constructor__ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE$presume;
	tmp3.a1=__ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE$pdestroy;
	tmp3.a12=Larg4;
	tmp3.a11=Larg3;
	tmp3.a10=Larg2;
	tmp3.a9=Larg1;
	L$poptgepsqueezed41=tmp3.a2.a[tmp3.a2.o-1];
	Larg0.a0=L$poptgepsqueezed41;
	a:{
		if(Larg1!==null){
			tmp5=Larg1.i1|0;
			if(Larg2!==null)if((tmp5|0)===1)if((Larg2.i1|0)===0){
				L$poptgepsqueezed41="/meta_";
				L$poptgepsqueezed42=Larg1.a4;
				L$poptgepsqueezed41=L$poptgepsqueezed41.concat(L$poptgepsqueezed42);
				L$poptgepsqueezed41=L$poptgepsqueezed41;
				tmp3.a13=L$poptgepsqueezed41;
				L$poptgepsqueezed42=tmp3.a3;
				__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed42,Larg2,L$poptgepsqueezed41);
				L$poptgepsqueezed41=L$poptgepsqueezed42.a0;
				tmp5=L$poptgepsqueezed42.a0o|0;
				if(L$poptgepsqueezed41!==nullArray||tmp5!==0)if(L$poptgepsqueezed41[tmp5].a0!==null){
					tmp3.i7=0;
					tmp3=L$poptgepsqueezed41[tmp5].a[L$poptgepsqueezed41[tmp5].o- -1];
					tmp3.a0=tmp2;
					tmp3.a0o=0;
					break a;
				}
				L$poptgepsqueezed41=L$poptgepsqueezed41[tmp5].a[L$poptgepsqueezed41[tmp5].o- -1];
				L$poptgepsqueezed41=L$poptgepsqueezed41.a1.a1;
				tmp7=L$poptgepsqueezed42.a0;
				tmp5=L$poptgepsqueezed42.a0o|0;
				if(tmp7!==nullArray||tmp5!==0)tmp7[tmp5].a1(tmp7,tmp5);
				tmp7=tmp3.a13;
				if(((L$poptgepsqueezed41.permType)|0)===0){
					L$poptgepsqueezed41=__ZN7CheerpX5Linux6eventsE[2];
					tmp3.a14=L$poptgepsqueezed41;
					L$poptgepsqueezed42="wait";
					tmp3.a15="ready";
					if(L$poptgepsqueezed41!==null)__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(L$poptgepsqueezed41,L$poptgepsqueezed42);
					L$poptgepsqueezed41=tmp3.a4;
					__ZN7CheerpX9IDBDevice10clearCacheEv(L$poptgepsqueezed41,tmp3.a10);
					L$poptgepsqueezed42=L$poptgepsqueezed41.a0;
					tmp5=L$poptgepsqueezed41.a0o|0;
					if(L$poptgepsqueezed42!==nullArray||tmp5!==0){
						if(L$poptgepsqueezed42[tmp5].a0!==null){
							tmp3.i7=1;
							tmp3=L$poptgepsqueezed42[tmp5].a[L$poptgepsqueezed42[tmp5].o- -1];
							tmp3.a0=tmp2;
							tmp3.a0o=0;
							break a;
						}
						L$poptgepsqueezed42[tmp5].a1(L$poptgepsqueezed42,tmp5);
					}
					L$poptgepsqueezed41=tmp3.a13;
					L$poptgepsqueezed42=tmp3.a10;
					tmp7="w";
					tmp3.a16=tmp7;
					L$poptgepsqueezed40=tmp3.a5;
					__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed40,L$poptgepsqueezed42,L$poptgepsqueezed41,tmp7,0,0);
					L$poptgepsqueezed41=L$poptgepsqueezed40.a0;
					tmp5=L$poptgepsqueezed40.a0o|0;
					if(L$poptgepsqueezed41!==nullArray||tmp5!==0)if(L$poptgepsqueezed41[tmp5].a0!==null){
						tmp3.i7=2;
						tmp3=L$poptgepsqueezed41[tmp5].a[L$poptgepsqueezed41[tmp5].o- -1];
						tmp3.a0=tmp2;
						tmp3.a0o=0;
						break a;
					}
					L$poptgepsqueezed41=L$poptgepsqueezed41[tmp5].a[L$poptgepsqueezed41[tmp5].o- -1];
					tmp5=L$poptgepsqueezed41.a1.i1|0;
					L$poptgepsqueezed41=L$poptgepsqueezed40.a0;
					tmp1=L$poptgepsqueezed40.a0o|0;
					if(L$poptgepsqueezed41!==nullArray||tmp1!==0)L$poptgepsqueezed41[tmp1].a1(L$poptgepsqueezed41,tmp1);
					L$poptgepsqueezed41=tmp3.a16;
					L$poptgepsqueezed42=tmp3.a13;
					if((tmp5|0)<0){
						tmp2=tmp3.a12;
						tmp3="Initialization failed for 'OverlayDevice'";
						tmp2(tmp3);
						break a;
					}
					L$poptgepsqueezed41=tmp3.a6;
					__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed41,tmp5);
					L$poptgepsqueezed42=L$poptgepsqueezed41.a0;
					tmp5=L$poptgepsqueezed41.a0o|0;
					if(L$poptgepsqueezed42!==nullArray||tmp5!==0){
						if(L$poptgepsqueezed42[tmp5].a0!==null){
							tmp3.i7=3;
							tmp3=L$poptgepsqueezed42[tmp5].a[L$poptgepsqueezed42[tmp5].o- -1];
							tmp3.a0=tmp2;
							tmp3.a0o=0;
							break a;
						}
						L$poptgepsqueezed42[tmp5].a1(L$poptgepsqueezed42,tmp5);
					}
					tmp2=tmp3.a14;
					if(tmp2!==null){
						L$poptgepsqueezed41=tmp3.a15;
						__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(tmp2,L$poptgepsqueezed41);
					}
				}
				L$poptgepsqueezed41=tmp3.a11;
				L$poptgepsqueezed42=tmp3.a10;
				tmp3=tmp3.a9;
				tmp2=L$poptgepsqueezed42.a4;
				tmp2=tmp2.concat("_overlay");
				tmp7=new constructor_class$p_ZN7CheerpX13OverlayDeviceE();
				__ZN7CheerpX13OverlayDeviceC2EPNS_11BlockDeviceEPNS_9IDBDeviceERKN6client6StringEj(tmp7,tmp3,L$poptgepsqueezed42,tmp2,tmp3.i3|0);
				L$poptgepsqueezed41(CheerpX.Device.wrap(Object.create(CheerpX.OverlayDevice.prototype,{this:{value:tmp7}})));
				break a;
			}
		}
		tmp2="Initialization failed for 'OverlayDevice'";
		Larg4(tmp2);
	}
}
function __ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE$presume(Larg0,Marg0){
	var L$poptgepsqueezed24=null,L$ppre_1=0,L$poptgepsqueezed44=null,L$poptgepsqueezed45=null,L$ppre$mphi29_0=null,tmp5=0,L$ppre_0=null,tmp7=null,tmp8=null;
	L$ppre_1=Larg0[Marg0].i7|0;
	L$poptgepsqueezed44=Larg0[Marg0].a6;
	L$poptgepsqueezed45=Larg0[Marg0].a5;
	a:{
		b:{
			c:{
				d:{
					if(L$ppre_1<<30<0){
						if((L$ppre_1&3)!==2){
							L$poptgepsqueezed45=L$poptgepsqueezed44.a0;
							L$ppre_1=L$poptgepsqueezed44.a0o|0;
							if(L$poptgepsqueezed45===nullArray&&L$ppre_1===0)break c;
							L$ppre_1=L$ppre_1;
							L$poptgepsqueezed44=L$poptgepsqueezed45;
							break d;
						}
						L$ppre$mphi29_0=L$poptgepsqueezed45.a0;
						L$ppre_1=L$poptgepsqueezed45.a0o|0;
						L$ppre$mphi29_0=L$ppre$mphi29_0[L$ppre_1];
					}else{
						L$ppre$mphi29_0=Larg0[Marg0].a4;
						e:{
							if((L$ppre_1&3)!==0){
								L$ppre_0=L$ppre$mphi29_0.a0;
								L$ppre_1=L$ppre$mphi29_0.a0o|0;
								if(L$ppre_0===nullArray&&L$ppre_1===0)break e;
								L$ppre_1=L$ppre_1;
								L$ppre$mphi29_0=L$ppre_0;
							}else{
								L$ppre_0=Larg0[Marg0].a3.a0;
								L$ppre_1=Larg0[Marg0].a3.a0o|0;
								L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
								L$ppre_0=L$ppre_0.a1.a1;
								tmp7=Larg0[Marg0].a3.a0;
								L$ppre_1=Larg0[Marg0].a3.a0o|0;
								if(tmp7!==nullArray||L$ppre_1!==0)tmp7[L$ppre_1].a1(tmp7,L$ppre_1);
								tmp7=Larg0[Marg0].a13;
								if(((L$ppre_0.permType)|0)!==0)break b;
								L$ppre_0=__ZN7CheerpX5Linux6eventsE[2];
								Larg0[Marg0].a14=L$ppre_0;
								tmp7="wait";
								Larg0[Marg0].a15="ready";
								if(L$ppre_0!==null)__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(L$ppre_0,tmp7);
								__ZN7CheerpX9IDBDevice10clearCacheEv(L$ppre$mphi29_0,Larg0[Marg0].a10);
								L$ppre_0=L$ppre$mphi29_0.a0;
								L$ppre_1=L$ppre$mphi29_0.a0o|0;
								if(L$ppre_0===nullArray&&L$ppre_1===0)break e;
								if(L$ppre_0[L$ppre_1].a0!==null){
									Larg0[Marg0].i7=1;
									L$poptgepsqueezed44=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
									L$poptgepsqueezed44.a0=Larg0;
									L$poptgepsqueezed44.a0o=Marg0;
									break a;
								}
								L$ppre_1=L$ppre_1;
								L$ppre$mphi29_0=L$ppre_0;
							}
							L$ppre$mphi29_0[L$ppre_1].a1(L$ppre$mphi29_0,L$ppre_1);
						}
						L$ppre$mphi29_0=Larg0[Marg0].a13;
						L$ppre_0=Larg0[Marg0].a10;
						tmp7="w";
						Larg0[Marg0].a16=tmp7;
						__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed45,L$ppre_0,L$ppre$mphi29_0,tmp7,0,0);
						L$ppre$mphi29_0=L$poptgepsqueezed45.a0;
						L$ppre_1=L$poptgepsqueezed45.a0o|0;
						if(L$ppre$mphi29_0!==nullArray||L$ppre_1!==0){
							if(L$ppre$mphi29_0[L$ppre_1].a0!==null){
								Larg0[Marg0].i7=2;
								L$poptgepsqueezed44=L$ppre$mphi29_0[L$ppre_1].a[L$ppre$mphi29_0[L$ppre_1].o- -1];
								L$poptgepsqueezed44.a0=Larg0;
								L$poptgepsqueezed44.a0o=Marg0;
								break a;
							}
							L$ppre$mphi29_0=L$ppre$mphi29_0[L$ppre_1];
						}else{
							L$ppre$mphi29_0=null;
						}
					}
					L$ppre$mphi29_0=L$ppre$mphi29_0.a[L$ppre$mphi29_0.o- -1];
					L$ppre_1=L$ppre$mphi29_0.a1.i1|0;
					L$ppre$mphi29_0=L$poptgepsqueezed45.a0;
					tmp5=L$poptgepsqueezed45.a0o|0;
					if(L$ppre$mphi29_0!==nullArray||tmp5!==0)L$ppre$mphi29_0[tmp5].a1(L$ppre$mphi29_0,tmp5);
					L$poptgepsqueezed45=Larg0[Marg0].a16;
					L$ppre$mphi29_0=Larg0[Marg0].a13;
					if((L$ppre_1|0)<0){
						L$poptgepsqueezed44=Larg0[Marg0].a12;
						L$poptgepsqueezed45="Initialization failed for 'OverlayDevice'";
						L$poptgepsqueezed44(L$poptgepsqueezed45);
						break a;
					}
					L$poptgepsqueezed45=create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:L$poptgepsqueezed45={i0:0,a1:{a0:nullArray,a0o:0}},i5:0}).a;
					L$ppre$mphi29_0=L$poptgepsqueezed45[0];
					L$ppre$mphi29_0.a0=__ZN7CheerpX14CheerpOSDevice5closeEi$presume;
					L$ppre$mphi29_0.a1=__ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy;
					L$poptgepsqueezed24=L$ppre$mphi29_0.a2;
					L$poptgepsqueezed24.a0=nullArray;
					L$poptgepsqueezed24.a0o=0;
					L$ppre_0=L$poptgepsqueezed24.a;
					tmp5=L$poptgepsqueezed24.o-1;
					L$poptgepsqueezed44.a0=L$ppre_0;
					L$poptgepsqueezed44.a0o=tmp5;
					L$ppre_0=L$ppre$mphi29_0.a4;
					L$ppre_0.i0=0;
					L$ppre_0.a1.a0=nullArray;
					L$ppre_0.a1.a0o=0;
					tmp7=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
					tmp8=[{a0:null}];
					tmp8[0].a0=L$ppre_0;
					tmp8=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_,tmp8[0]);
					cheerpOSClose(tmp7,L$ppre_1,tmp8);
					if((L$ppre_0.i0&255)!==0){
						L$ppre$mphi29_0.a3=L$poptgepsqueezed24;
						L$ppre$mphi29_0.a0=null;
						L$poptgepsqueezed45=L$poptgepsqueezed24.a0;
						L$ppre_1=L$poptgepsqueezed24.a0o|0;
						(L$poptgepsqueezed45!==nullArray||L$ppre_1!==0?L$poptgepsqueezed45:_NoopCoro$pFrame$pConst)[L$poptgepsqueezed45!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst].a0((L$poptgepsqueezed45!==nullArray||L$ppre_1!==0?L$poptgepsqueezed45:_NoopCoro$pFrame$pConst),L$poptgepsqueezed45!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst);
					}else{
						L$ppre$mphi29_0.i5=0;
						L$ppre_0.a1.a0=L$poptgepsqueezed45;
						L$ppre_0.a1.a0o=0;
					}
					L$poptgepsqueezed45=L$poptgepsqueezed44.a0;
					L$ppre_1=L$poptgepsqueezed44.a0o|0;
					if(L$poptgepsqueezed45===nullArray&&L$ppre_1===0)break c;
					if(L$poptgepsqueezed45[L$ppre_1].a0!==null){
						Larg0[Marg0].i7=3;
						L$poptgepsqueezed44=L$poptgepsqueezed45[L$ppre_1].a[L$poptgepsqueezed45[L$ppre_1].o- -1];
						L$poptgepsqueezed44.a0=Larg0;
						L$poptgepsqueezed44.a0o=Marg0;
						break a;
					}
					L$ppre_1=L$ppre_1;
					L$poptgepsqueezed44=L$poptgepsqueezed45;
				}
				L$poptgepsqueezed44[L$ppre_1].a1(L$poptgepsqueezed44,L$ppre_1);
			}
			L$poptgepsqueezed44=Larg0[Marg0].a14;
			if(L$poptgepsqueezed44!==null){
				L$poptgepsqueezed45=Larg0[Marg0].a15;
				__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(L$poptgepsqueezed44,L$poptgepsqueezed45);
			}
		}
		L$poptgepsqueezed44=Larg0[Marg0].a11;
		L$poptgepsqueezed45=Larg0[Marg0].a10;
		L$ppre$mphi29_0=Larg0[Marg0].a9;
		L$ppre_0=L$poptgepsqueezed45.a4;
		L$ppre_0=L$ppre_0.concat("_overlay");
		tmp7=new constructor_class$p_ZN7CheerpX13OverlayDeviceE();
		__ZN7CheerpX13OverlayDeviceC2EPNS_11BlockDeviceEPNS_9IDBDeviceERKN6client6StringEj(tmp7,L$ppre$mphi29_0,L$poptgepsqueezed45,L$ppre_0,L$ppre$mphi29_0.i3|0);
		L$poptgepsqueezed44(CheerpX.Device.wrap(Object.create(CheerpX.OverlayDevice.prototype,{this:{value:tmp7}})));
	}
}
function __ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0,tmp2=null;
	tmp1=Larg0.i7|0;
	if(tmp1<<30<0){
		if((tmp1&3)===2){
			tmp2=Larg0.a5.a0;
			tmp1=Larg0.a5.a0o|0;
			if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
			tmp2=Larg0.a16;
			tmp0=Larg0.a13;
		}else{
			tmp2=Larg0.a6.a0;
			tmp1=Larg0.a6.a0o|0;
			if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
		}
	}else if((tmp1&3)!==0){
		tmp2=Larg0.a4.a0;
		tmp1=Larg0.a4.a0o|0;
		if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
	}else{
		tmp2=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
		tmp2=Larg0.a13;
	}
}
function __ZN7CheerpX14CheerpOSDevice5closeEi(Larg0,Larg1){
	var tmp0=null,L$poptgepsqueezed8=null,tmp2=null,tmp3=null,L$poptgepsqueezed9=null,tmp5=0,tmp6=null;
	tmp3=create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:tmp3={i0:0,a1:{a0:nullArray,a0o:0}},i5:0}).a;
	tmp0=tmp3[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice5closeEi$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy;
	L$poptgepsqueezed8=tmp0.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	L$poptgepsqueezed9=L$poptgepsqueezed8.a;
	tmp5=L$poptgepsqueezed8.o-1;
	Larg0.a0=L$poptgepsqueezed9;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed9=tmp0.a4;
	L$poptgepsqueezed9.i0=0;
	L$poptgepsqueezed9.a1.a0=nullArray;
	L$poptgepsqueezed9.a1.a0o=0;
	tmp2=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
	tmp6=[{a0:null}];
	tmp6[0].a0=L$poptgepsqueezed9;
	tmp6=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_,tmp6[0]);
	cheerpOSClose(tmp2,Larg1,tmp6);
	if((L$poptgepsqueezed9.i0&255)!==0){
		tmp0.a3=L$poptgepsqueezed8;
		tmp0.a0=null;
		tmp3=L$poptgepsqueezed8.a0;
		tmp5=L$poptgepsqueezed8.a0o|0;
		(tmp3!==nullArray||tmp5!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp5!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i5=0;
		L$poptgepsqueezed9.a1.a0=tmp3;
		L$poptgepsqueezed9.a1.a0o=0;
	}
}
function __ZN7CheerpX13OverlayDeviceC2EPNS_11BlockDeviceEPNS_9IDBDeviceERKN6client6StringEj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=0,L$poptgepsqueezed31=null,tmp7=0,tmp8=null;
	Larg0.a0=__ZTVN7CheerpX9IDBDeviceE;
	Larg0.i1=1;
	tmp5=__ZN7CheerpX6Device9lastDevIdE|0;
	__ZN7CheerpX6Device9lastDevIdE=tmp5+1|0;
	Larg0.i2=tmp5;
	L$poptgepsqueezed31=__ZN11CheerpXBase7devicesE.a1;
	tmp7=__ZN11CheerpXBase7devicesE.a1o|0;
	tmp0=__ZN11CheerpXBase7devicesE.a2;
	tmp8=tmp0.a0;
	tmp1=tmp0.a0o|0;
	if(tmp7<tmp1){
		L$poptgepsqueezed31[tmp7]=Larg0;
		__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed31;
		__ZN11CheerpXBase7devicesE.a1o=tmp7+1|0;
	}else{
		tmp2={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp2={a0:null}}};
		tmp3=__ZN11CheerpXBase7devicesE.a0;
		tmp5=__ZN11CheerpXBase7devicesE.a0o|0;
		tmp5=(__imul(tmp5,4));
		tmp7=(__imul(tmp7,4))-tmp5>>2;
		tmp4=tmp7+1|0;
		if(tmp4>>>0>1073741823)_abort();
		;
		tmp5=(__imul(tmp1,4))-tmp5|0;
		if(tmp5>>>0<2147483644){
			tmp5>>>=1;
			tmp5=tmp5>>>0>tmp4>>>0?tmp5|0:tmp4|0;
		}else{
			tmp5=1073741823;
		}
		L$poptgepsqueezed31=tmp2.a3;
		L$poptgepsqueezed31.a1.a0=tmp0;
		if((tmp5|0)!==0)tmp8=createPointerArray([],0,(tmp5<<2)/4|0,null);
		else{
			tmp8=nullArray;
		}
		tmp2.a0=tmp8[0];
		tmp2.a1=tmp8;
		tmp2.a1o=0+tmp7|0;
		L$poptgepsqueezed31.a0=tmp8;
		L$poptgepsqueezed31.a0o=0+tmp5|0;
		tmp8[tmp7]=Larg0;
		tmp2.a2=tmp8;
		tmp2.a2o=(0+tmp7|0)+1|0;
		__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp2);
	}
	Larg0.i3=Larg4;
	Larg0.a4=Larg3;
	Larg0.a0=__ZTVN7CheerpX13OverlayDeviceE;
	Larg0.a5=Larg1;
	Larg0.a6=Larg2;
	L$poptgepsqueezed31=Larg0.a7;
	L$poptgepsqueezed31.a0=nullArray;
	L$poptgepsqueezed31.a0o=0;
	L$poptgepsqueezed31.i1=L$poptgepsqueezed31.i1&65280;
	L$poptgepsqueezed31.a2=null;
	L$poptgepsqueezed31=Larg0.a8;
	L$poptgepsqueezed31.a0=nullArray;
	L$poptgepsqueezed31.a0o=0;
	L$poptgepsqueezed31.a1=nullArray;
	L$poptgepsqueezed31.a1o=0;
	L$poptgepsqueezed31.a2.a0=nullArray;
	L$poptgepsqueezed31.a2.a0o=0;
	L$poptgepsqueezed31=Larg0.a9;
	L$poptgepsqueezed31.a0=nullArray;
	L$poptgepsqueezed31.a0o=0;
	L$poptgepsqueezed31.a1=nullArray;
	L$poptgepsqueezed31.a1o=0;
	L$poptgepsqueezed31.a2.a0=nullArray;
	L$poptgepsqueezed31.a2.a0o=0;
	L$poptgepsqueezed31=Larg0.a10;
	L$poptgepsqueezed31.a0=nullArray;
	L$poptgepsqueezed31.a0o=0;
	L$poptgepsqueezed31.a1=nullArray;
	L$poptgepsqueezed31.a1o=0;
	L$poptgepsqueezed31.a2.a0=nullArray;
	L$poptgepsqueezed31.a2.a0o=0;
	Larg0.i11=Larg0.i11&255;
}
function __ZN7CheerpX13OverlayDevice8dumpImplEv(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,L$poptgepsqueezed20=null,tmp5=0,tmp6=null;
	tmp2=new constructor__ZN7CheerpX13OverlayDevice8dumpImplEv$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX13OverlayDevice8dumpImplEv$presume;
	tmp3.a1=__ZN7CheerpX13OverlayDevice8dumpImplEv$pdestroy;
	tmp3.a6=Larg1;
	L$poptgepsqueezed20=tmp3.a2.a[tmp3.a2.o-1];
	Larg0.a0=L$poptgepsqueezed20;
	L$poptgepsqueezed20=new Array();
	tmp3.a7=L$poptgepsqueezed20;
	tmp5=Larg1.i3|0;
	tmp3.i8=tmp5;
	a:{
		if(tmp5+131071>>>0>=131072){
			L$poptgepsqueezed20=tmp3.a3;
			tmp5=0;
			while(1){
				tmp3.i9=tmp5;
				tmp6=tmp3.a6;
				tmp0=new Uint8Array(131072);
				tmp3.a10=tmp0;
				__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(L$poptgepsqueezed20,tmp6,null,tmp5,tmp0,0,null);
				tmp6=L$poptgepsqueezed20.a0;
				tmp5=L$poptgepsqueezed20.a0o|0;
				if(tmp6!==nullArray||tmp5!==0){
					if(tmp6[tmp5].a0!==null){
						tmp3.i4=0;
						tmp3=tmp6[tmp5].a[tmp6[tmp5].o- -1];
						tmp3.a0=tmp2;
						tmp3.a0o=0;
						break a;
					}
					tmp6[tmp5].a1(tmp6,tmp5);
				}
				tmp5=tmp3.i9|0;
				tmp1=tmp3.i8|0;
				+tmp3.a7.push(tmp3.a10);
				tmp5=tmp5+1|0;
				if((tmp5|0)!==(tmp1+131071>>>17|0))continue;
				break;
			}
			L$poptgepsqueezed20=tmp3.a7;
		}
		tmp2=tmp3.a6;
		L$poptgepsqueezed20=new Blob(L$poptgepsqueezed20);
		__ZN7CheerpX6Device12downloadBlobEPN6client4BlobEPNS1_6StringE(L$poptgepsqueezed20,tmp2.a6.a4);
	}
}
function __ZN7CheerpX13OverlayDevice8dumpImplEv$presume(Larg0,Marg0){
	var tmp0=0,tmp1=null,L$poptgepsqueezed12=null,L$ppre_0=null,L$ppre_1=0;
	L$poptgepsqueezed12=Larg0[Marg0].a3;
	L$ppre_0=L$poptgepsqueezed12.a0;
	L$ppre_1=L$poptgepsqueezed12.a0o|0;
	a:{
		while(1){
			if(L$ppre_0!==nullArray||L$ppre_1!==0)L$ppre_0[L$ppre_1].a1(L$ppre_0,L$ppre_1);
			L$ppre_1=Larg0[Marg0].i9|0;
			tmp0=Larg0[Marg0].i8|0;
			L$ppre_0=Larg0[Marg0].a7;
			+L$ppre_0.push(Larg0[Marg0].a10);
			L$ppre_1=L$ppre_1+1|0;
			if((L$ppre_1|0)!==(tmp0+131071>>>17|0)){
				Larg0[Marg0].i9=L$ppre_1;
				L$ppre_0=Larg0[Marg0].a6;
				tmp1=new Uint8Array(131072);
				Larg0[Marg0].a10=tmp1;
				__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(L$poptgepsqueezed12,L$ppre_0,null,L$ppre_1,tmp1,0,null);
				L$ppre_0=L$poptgepsqueezed12.a0;
				L$ppre_1=L$poptgepsqueezed12.a0o|0;
				if(L$ppre_0!==nullArray||L$ppre_1!==0)if(L$ppre_0[L$ppre_1].a0!==null){
					Larg0[Marg0].i4=0;
					L$poptgepsqueezed12=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$poptgepsqueezed12.a0=Larg0;
					L$poptgepsqueezed12.a0o=Marg0;
					break a;
				}
				continue;
			}
			break;
		}
		L$poptgepsqueezed12=Larg0[Marg0].a6;
		L$ppre_0=new Blob(L$ppre_0);
		__ZN7CheerpX6Device12downloadBlobEPN6client4BlobEPNS1_6StringE(L$ppre_0,L$poptgepsqueezed12.a6.a4);
	}
}
function __ZN7CheerpX13OverlayDevice8dumpImplEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp4=0,L$poptgepsqueezed27=null,tmp6=null,tmp7=null,L$poptgepsqueezed41=null,tmp9=null,tmp10=0,tmp11=-0.,tmp12=0;
	L$poptgepsqueezed27=new constructor__ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame().a;
	tmp6=L$poptgepsqueezed27[0];
	tmp6.a0=__ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$presume;
	tmp6.a1=__ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy;
	tmp6.a8=Larg3;
	tmp6.a7=Larg2;
	tmp6.a6=Larg1;
	tmp7=tmp6.a2.a[tmp6.a2.o-1];
	Larg0.a0=tmp7;
	tmp7=new XMLHttpRequest();
	tmp6.a9=tmp7;
	L$poptgepsqueezed41="GET";
	tmp9=Larg1.concat(".meta");
	tmp7.open(L$poptgepsqueezed41,tmp9);
	L$poptgepsqueezed41=tmp6.a3;
	__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE(L$poptgepsqueezed41,tmp7);
	tmp7=L$poptgepsqueezed41.a0;
	tmp10=L$poptgepsqueezed41.a0o|0;
	a:{
		if(tmp7!==nullArray||tmp10!==0){
			if(tmp7[tmp10].a0!==null){
				tmp6.i4=0;
				tmp6=tmp7[tmp10].a[tmp7[tmp10].o- -1];
				tmp6.a0=L$poptgepsqueezed27;
				tmp6.a0o=0;
				break a;
			}
			tmp7[tmp10].a1(tmp7,tmp10);
		}
		if(!( +tmp6.a9.status===200))if(!( +tmp6.a9.status===206)){
			L$poptgepsqueezed27=tmp6.a8;
			tmp6="Initialization failed for 'GitHubDevice'";
			L$poptgepsqueezed27(tmp6);
			break a;
		}
		L$poptgepsqueezed27=tmp6.a9;
		tmp7="Last-Modified";
		L$poptgepsqueezed41=L$poptgepsqueezed27.getResponseHeader(tmp7);
		tmp11=+Date.parse(L$poptgepsqueezed41);
		L$poptgepsqueezed27=L$poptgepsqueezed27.responseText;
		tmp0=L$poptgepsqueezed27.concat("-").concat(~~(tmp11/1000));
		tmp1={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null};
		tmp11=+parseInt(tmp0);
		tmp1.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp1.i1=1;
		tmp10=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp10+1|0;
		tmp1.i2=tmp10;
		L$poptgepsqueezed27=__ZN11CheerpXBase7devicesE.a1;
		tmp12=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp7=__ZN11CheerpXBase7devicesE.a2;
		L$poptgepsqueezed41=tmp7.a0;
		tmp2=tmp7.a0o|0;
		if(tmp12<tmp2){
			L$poptgepsqueezed27[tmp12]=tmp1;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed27;
			__ZN11CheerpXBase7devicesE.a1o=tmp12+1|0;
		}else{
			tmp3={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp3={a0:null}}};
			tmp9=__ZN11CheerpXBase7devicesE.a0;
			tmp10=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp10=(__imul(tmp10,4));
			tmp12=(__imul(tmp12,4))-tmp10>>2;
			tmp4=tmp12+1|0;
			if(tmp4>>>0>1073741823)_abort();
			;
			tmp10=(__imul(tmp2,4))-tmp10|0;
			if(tmp10>>>0<2147483644){
				tmp10>>>=1;
				tmp10=tmp10>>>0>tmp4>>>0?tmp10|0:tmp4|0;
			}else{
				tmp10=1073741823;
			}
			L$poptgepsqueezed27=tmp3.a3;
			L$poptgepsqueezed27.a1.a0=tmp7;
			if((tmp10|0)!==0)L$poptgepsqueezed41=createPointerArray([],0,(tmp10<<2)/4|0,null);
			else{
				L$poptgepsqueezed41=nullArray;
			}
			tmp3.a0=L$poptgepsqueezed41[0];
			tmp3.a1=L$poptgepsqueezed41;
			tmp3.a1o=0+tmp12|0;
			L$poptgepsqueezed27.a0=L$poptgepsqueezed41;
			L$poptgepsqueezed27.a0o=0+tmp10|0;
			L$poptgepsqueezed41[tmp12]=tmp1;
			tmp3.a2=L$poptgepsqueezed41;
			tmp3.a2o=(0+tmp12|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp3);
		}
		L$poptgepsqueezed27=tmp6.a7;
		tmp6=tmp6.a6;
		tmp1.i3=~~tmp11;
		tmp1.a4=tmp0;
		tmp1.a0=__ZTVN7CheerpX12GitHubDeviceE;
		tmp1.a5=tmp6;
		L$poptgepsqueezed27(CheerpX.Device.wrap(Object.create(CheerpX.GitHubDevice.prototype,{this:{value:tmp1}})));
	}
}
function __ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=null,tmp6=0,tmp7=null,L$poptgepsqueezed22=null,tmp9=-0.,tmp10=0,tmp11=null;
	tmp5=Larg0.a3.a0;
	tmp6=Larg0.a3.a0o|0;
	if(tmp5!==nullArray||tmp6!==0)tmp5[tmp6].a1(tmp5,tmp6);
	tmp5=Larg0.a9;
	a:{
		if(!( +tmp5.status===200))if(!( +tmp5.status===206)){
			tmp5=Larg0.a8;
			tmp7="Initialization failed for 'GitHubDevice'";
			tmp5(tmp7);
			break a;
		}
		tmp7="Last-Modified";
		L$poptgepsqueezed22=tmp5.getResponseHeader(tmp7);
		tmp9=+Date.parse(L$poptgepsqueezed22);
		tmp5=tmp5.responseText;
		tmp5=tmp5.concat("-").concat(~~(tmp9/1000));
		tmp7={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null};
		tmp9=+parseInt(tmp5);
		tmp7.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp7.i1=1;
		tmp6=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp6+1|0;
		tmp7.i2=tmp6;
		L$poptgepsqueezed22=__ZN11CheerpXBase7devicesE.a1;
		tmp10=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp0=__ZN11CheerpXBase7devicesE.a2;
		tmp11=tmp0.a0;
		tmp1=tmp0.a0o|0;
		if(tmp10<tmp1){
			L$poptgepsqueezed22[tmp10]=tmp7;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed22;
			__ZN11CheerpXBase7devicesE.a1o=tmp10+1|0;
		}else{
			tmp2={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp2={a0:null}}};
			tmp3=__ZN11CheerpXBase7devicesE.a0;
			tmp6=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp6=(__imul(tmp6,4));
			tmp10=(__imul(tmp10,4))-tmp6>>2;
			tmp4=tmp10+1|0;
			if(tmp4>>>0>1073741823)_abort();
			;
			tmp6=(__imul(tmp1,4))-tmp6|0;
			if(tmp6>>>0<2147483644){
				tmp6>>>=1;
				tmp6=tmp6>>>0>tmp4>>>0?tmp6|0:tmp4|0;
			}else{
				tmp6=1073741823;
			}
			L$poptgepsqueezed22=tmp2.a3;
			L$poptgepsqueezed22.a1.a0=tmp0;
			if((tmp6|0)!==0)tmp11=createPointerArray([],0,(tmp6<<2)/4|0,null);
			else{
				tmp11=nullArray;
			}
			tmp2.a0=tmp11[0];
			tmp2.a1=tmp11;
			tmp2.a1o=0+tmp10|0;
			L$poptgepsqueezed22.a0=tmp11;
			L$poptgepsqueezed22.a0o=0+tmp6|0;
			tmp11[tmp10]=tmp7;
			tmp2.a2=tmp11;
			tmp2.a2o=(0+tmp10|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp2);
		}
		L$poptgepsqueezed22=Larg0.a7;
		tmp11=Larg0.a6;
		tmp7.i3=~~tmp9;
		tmp7.a4=tmp5;
		tmp7.a0=__ZTVN7CheerpX12GitHubDeviceE;
		tmp7.a5=tmp11;
		L$poptgepsqueezed22(CheerpX.Device.wrap(Object.create(CheerpX.GitHubDevice.prototype,{this:{value:tmp7}})));
	}
}
function __ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=null,tmp6=null,tmp7=null,L$poptgepsqueezed55=null,tmp9=null,tmp10=-0.,tmp11=0,tmp12=0,tmp13=null;
	tmp5=new constructor__ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame().a;
	tmp6=tmp5[0];
	tmp6.a0=__ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$presume;
	tmp6.a1=__ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy;
	tmp6.a9=Larg3;
	tmp6.a8=Larg2;
	tmp6.a7=Larg1;
	tmp7=tmp6.a2.a[tmp6.a2.o-1];
	Larg0.a0=tmp7;
	tmp7="ws:";
	a:{
		b:{
			if(!(Larg1.startsWith(tmp7))){
				L$poptgepsqueezed55="wss:";
				tmp11=Larg1.startsWith(L$poptgepsqueezed55);
				if(!(tmp11)){
					tmp7=new XMLHttpRequest();
					tmp6.a13=tmp7;
					L$poptgepsqueezed55="HEAD";
					tmp7.open(L$poptgepsqueezed55,Larg1);
					L$poptgepsqueezed55=tmp6.a4;
					__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE(L$poptgepsqueezed55,tmp7);
					tmp7=L$poptgepsqueezed55.a0;
					tmp11=L$poptgepsqueezed55.a0o|0;
					if(tmp7!==nullArray||tmp11!==0){
						if(tmp7[tmp11].a0!==null){
							tmp6.i5=1;
							tmp6=tmp7[tmp11].a[tmp7[tmp11].o- -1];
							tmp6.a0=tmp5;
							tmp6.a0o=0;
							break a;
						}
						tmp7[tmp11].a1(tmp7,tmp11);
					}
					if(!( +tmp6.a13.status===200))if(!( +tmp6.a13.status===206)){
						tmp5=tmp6.a9;
						tmp6="Initialization failed for 'CloudDevice'";
						tmp5(tmp6);
						break a;
					}
					tmp5=tmp6.a13;
					tmp7="Last-Modified";
					L$poptgepsqueezed55=tmp5.getResponseHeader(tmp7);
					tmp10=+Date.parse(L$poptgepsqueezed55);
					tmp7="Content-Length";
					tmp5=tmp5.getResponseHeader(tmp7);
					tmp7=tmp5.concat("-").concat(~~(tmp10/1000));
					tmp5=null;
					break b;
				}
			}
			tmp7=new WebSocket(Larg1);
			tmp6.a10=tmp7;
			L$poptgepsqueezed55="arraybuffer";
			tmp7.binaryType=L$poptgepsqueezed55;
			L$poptgepsqueezed55=__ZN7CheerpX5Linux6eventsE[2];
			tmp6.a11=L$poptgepsqueezed55;
			tmp9="wait";
			tmp6.a12="ready";
			if(L$poptgepsqueezed55!==null)__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(L$poptgepsqueezed55,tmp9);
			L$poptgepsqueezed55=tmp6.a3;
			L$poptgepsqueezed55.i0=0;
			L$poptgepsqueezed55.a2.a0=nullArray;
			L$poptgepsqueezed55.a2.a0o=0;
			tmp9=[{a0:null}];
			tmp9[0].a0=L$poptgepsqueezed55;
			tmp9=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client12MessageEventIPNS4_6StringEEEEC1IZZN7CheerpX11CloudDevice6createERKS6_ENK3$_0clESF_PFvPNS4_6ObjectEEPFvSF_EEUlPNS4_9WebSocketEPNS4_13EventListenerEE_JRSO_EEET_DpOT0_EUlS9_E_JS9_EEEvPST_DpSU_,tmp9[0]);
			tmp7.onmessage=tmp9;
			tmp7.onerror=tmp9;
			if((L$poptgepsqueezed55.i0&255)===0){
				tmp6.i5=0;
				L$poptgepsqueezed55.a2.a0=tmp5;
				L$poptgepsqueezed55.a2.a0o=0;
				break a;
			}
			tmp5=L$poptgepsqueezed55.a1;
			tmp7=tmp5.type;
			L$poptgepsqueezed55="message";
			tmp10=+tmp7.localeCompare(L$poptgepsqueezed55);
			if(!(tmp10===0)){
				tmp5=tmp6.a9;
				tmp6="Initialization failed for 'CloudDevice'";
				tmp5(tmp6);
				break a;
			}
			tmp7=tmp6.a11;
			if(tmp7!==null){
				L$poptgepsqueezed55=tmp6.a12;
				__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(tmp7,L$poptgepsqueezed55);
			}
			tmp7=tmp5.data;
			if(((tmp7.length)|0)===0){
				tmp5=tmp6.a9;
				tmp6="Initialization failed for 'CloudDevice'";
				tmp5(tmp6);
				break a;
			}
			tmp5=tmp6.a10;
		}
		tmp0={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null,a6:null};
		tmp10=+parseInt(tmp7);
		tmp0.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp0.i1=1;
		tmp11=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp11+1|0;
		tmp0.i2=tmp11;
		L$poptgepsqueezed55=__ZN11CheerpXBase7devicesE.a1;
		tmp12=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp9=__ZN11CheerpXBase7devicesE.a2;
		tmp13=tmp9.a0;
		tmp1=tmp9.a0o|0;
		if(tmp12<tmp1){
			L$poptgepsqueezed55[tmp12]=tmp0;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed55;
			__ZN11CheerpXBase7devicesE.a1o=tmp12+1|0;
		}else{
			tmp2={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp2={a0:null}}};
			tmp3=__ZN11CheerpXBase7devicesE.a0;
			tmp11=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp11=(__imul(tmp11,4));
			tmp12=(__imul(tmp12,4))-tmp11>>2;
			tmp4=tmp12+1|0;
			if(tmp4>>>0>1073741823)_abort();
			;
			tmp11=(__imul(tmp1,4))-tmp11|0;
			if(tmp11>>>0<2147483644){
				tmp11>>>=1;
				tmp11=tmp11>>>0>tmp4>>>0?tmp11|0:tmp4|0;
			}else{
				tmp11=1073741823;
			}
			L$poptgepsqueezed55=tmp2.a3;
			L$poptgepsqueezed55.a1.a0=tmp9;
			if((tmp11|0)!==0)tmp13=createPointerArray([],0,(tmp11<<2)/4|0,null);
			else{
				tmp13=nullArray;
			}
			tmp2.a0=tmp13[0];
			tmp2.a1=tmp13;
			tmp2.a1o=0+tmp12|0;
			L$poptgepsqueezed55.a0=tmp13;
			L$poptgepsqueezed55.a0o=0+tmp11|0;
			tmp13[tmp12]=tmp0;
			tmp2.a2=tmp13;
			tmp2.a2o=(0+tmp12|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp2);
		}
		L$poptgepsqueezed55=tmp6.a7;
		tmp0.i3=~~tmp10;
		tmp0.a4=tmp7;
		tmp0.a0=__ZTVN7CheerpX11CloudDeviceE;
		tmp0.a5=L$poptgepsqueezed55;
		tmp0.a6=tmp5;
		if(tmp5!==null){
			tmp5="beforeunload";
			tmp7=[{a0:null}];
			tmp7[0].a0=tmp0;
			tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES8_PFvPNS5_6ObjectEEPFvS8_EEUlPNS5_5EventEE_JSH_EEEvPT_DpT0_,tmp7[0]);
			window.addEventListener(tmp5,tmp7);
		}
		tmp5=tmp6.a8;
		tmp5(CheerpX.Device.wrap(Object.create(CheerpX.CloudDevice.prototype,{this:{value:tmp0}})));
	}
}
function __ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=null,tmp6=0,tmp7=null,tmp8=null,tmp9=-0.,L$poptgepsqueezed31=null,tmp11=0,tmp12=null;
	a:{
		if(Larg0.i5|0){
			tmp5=Larg0.a4.a0;
			tmp6=Larg0.a4.a0o|0;
			if(tmp5!==nullArray||tmp6!==0)tmp5[tmp6].a1(tmp5,tmp6);
			tmp5=Larg0.a13;
			if(!( +tmp5.status===200))if(!( +tmp5.status===206)){
				tmp5=Larg0.a9;
				tmp7="Initialization failed for 'CloudDevice'";
				tmp5(tmp7);
				break a;
			}
			tmp7="Last-Modified";
			tmp8=tmp5.getResponseHeader(tmp7);
			tmp9=+Date.parse(tmp8);
			tmp7="Content-Length";
			tmp5=tmp5.getResponseHeader(tmp7);
			tmp7=tmp5.concat("-").concat(~~(tmp9/1000));
			tmp5=null;
		}else{
			tmp5=Larg0.a3.a1;
			tmp7=tmp5.type;
			tmp8="message";
			tmp9=+tmp7.localeCompare(tmp8);
			if(!(tmp9===0)){
				tmp5=Larg0.a9;
				tmp7="Initialization failed for 'CloudDevice'";
				tmp5(tmp7);
				break a;
			}
			tmp7=Larg0.a11;
			if(tmp7!==null){
				tmp8=Larg0.a12;
				__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(tmp7,tmp8);
			}
			tmp7=tmp5.data;
			if(((tmp7.length)|0)===0){
				tmp5=Larg0.a9;
				tmp7="Initialization failed for 'CloudDevice'";
				tmp5(tmp7);
				break a;
			}
			tmp5=Larg0.a10;
		}
		tmp8={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null,a6:null};
		tmp9=+parseInt(tmp7);
		tmp8.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp8.i1=1;
		tmp6=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp6+1|0;
		tmp8.i2=tmp6;
		L$poptgepsqueezed31=__ZN11CheerpXBase7devicesE.a1;
		tmp11=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp0=__ZN11CheerpXBase7devicesE.a2;
		tmp12=tmp0.a0;
		tmp1=tmp0.a0o|0;
		if(tmp11<tmp1){
			L$poptgepsqueezed31[tmp11]=tmp8;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed31;
			__ZN11CheerpXBase7devicesE.a1o=tmp11+1|0;
		}else{
			tmp2={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp2={a0:null}}};
			tmp3=__ZN11CheerpXBase7devicesE.a0;
			tmp6=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp6=(__imul(tmp6,4));
			tmp11=(__imul(tmp11,4))-tmp6>>2;
			tmp4=tmp11+1|0;
			if(tmp4>>>0>1073741823)_abort();
			;
			tmp6=(__imul(tmp1,4))-tmp6|0;
			if(tmp6>>>0<2147483644){
				tmp6>>>=1;
				tmp6=tmp6>>>0>tmp4>>>0?tmp6|0:tmp4|0;
			}else{
				tmp6=1073741823;
			}
			L$poptgepsqueezed31=tmp2.a3;
			L$poptgepsqueezed31.a1.a0=tmp0;
			if((tmp6|0)!==0)tmp12=createPointerArray([],0,(tmp6<<2)/4|0,null);
			else{
				tmp12=nullArray;
			}
			tmp2.a0=tmp12[0];
			tmp2.a1=tmp12;
			tmp2.a1o=0+tmp11|0;
			L$poptgepsqueezed31.a0=tmp12;
			L$poptgepsqueezed31.a0o=0+tmp6|0;
			tmp12[tmp11]=tmp8;
			tmp2.a2=tmp12;
			tmp2.a2o=(0+tmp11|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp2);
		}
		L$poptgepsqueezed31=Larg0.a7;
		tmp8.i3=~~tmp9;
		tmp8.a4=tmp7;
		tmp8.a0=__ZTVN7CheerpX11CloudDeviceE;
		tmp8.a5=L$poptgepsqueezed31;
		tmp8.a6=tmp5;
		if(tmp5!==null){
			tmp5="beforeunload";
			tmp7=[{a0:null}];
			tmp7[0].a0=tmp8;
			tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES8_PFvPNS5_6ObjectEEPFvS8_EEUlPNS5_5EventEE_JSH_EEEvPT_DpT0_,tmp7[0]);
			window.addEventListener(tmp5,tmp7);
		}
		tmp5=Larg0.a8;
		tmp5(CheerpX.Device.wrap(Object.create(CheerpX.CloudDevice.prototype,{this:{value:tmp8}})));
	}
}
function __ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.i5|0){
		tmp0=Larg0.a4.a0;
		tmp1=Larg0.a4.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIPN6client12MessageEventIPNS4_6StringEEEEC1IZZN7CheerpX11CloudDevice6createERKS6_ENK3$_0clESF_PFvPNS4_6ObjectEEPFvSF_EEUlPNS4_9WebSocketEPNS4_13EventListenerEE_JRSO_EEET_DpOT0_EUlS9_E_JS9_EEEvPST_DpSU_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.a1=Larg1;
	tmp0.i0=1;
	tmp1=tmp0.a2.a0;
	tmp2=tmp0.a2.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES8_PFvPNS5_6ObjectEEPFvS8_EEUlPNS5_5EventEE_JSH_EEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=Larg0.a0.a6;
	tmp1="";
	tmp0.send(tmp1);
}
function __ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=null,tmp5=null,L$poptgepsqueezed36=null,tmp7=null,tmp8=0,tmp9=0,L$poptgepsqueezed27=null,tmp11=0;
	tmp4=new constructor__ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E$pFrame().a;
	tmp5=tmp4[0];
	tmp5.a0=__ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E$presume;
	tmp5.a1=__ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E$pdestroy;
	tmp5.a9=Larg4;
	tmp5.a8=Larg3;
	tmp5.a7=Larg2;
	tmp5.a6=Larg1;
	L$poptgepsqueezed36=tmp5.a2.a[tmp5.a2.o-1];
	Larg0.a0=L$poptgepsqueezed36;
	a:if((Larg1.i1|0)!==0){
		tmp4="Initialization failed for 'FileDevice'";
		Larg4(tmp4);
	}else{
		L$poptgepsqueezed36="/";
		L$poptgepsqueezed36=L$poptgepsqueezed36.concat(Larg2);
		tmp7=L$poptgepsqueezed36;
		tmp5.a10=tmp7;
		L$poptgepsqueezed36=tmp5.a3;
		__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed36,Larg1,tmp7);
		tmp7=L$poptgepsqueezed36.a0;
		tmp8=L$poptgepsqueezed36.a0o|0;
		if(tmp7!==nullArray||tmp8!==0)if(tmp7[tmp8].a0!==null){
			tmp5.i4=0;
			tmp5=tmp7[tmp8].a[tmp7[tmp8].o- -1];
			tmp5.a0=tmp4;
			tmp5.a0o=0;
			break a;
		}
		tmp4=tmp7[tmp8].a[tmp7[tmp8].o- -1];
		tmp4=tmp4.a1.a1;
		tmp7=L$poptgepsqueezed36.a0;
		tmp8=L$poptgepsqueezed36.a0o|0;
		if(tmp7!==nullArray||tmp8!==0)tmp7[tmp8].a1(tmp7,tmp8);
		L$poptgepsqueezed36=tmp5.a10;
		if(((tmp4.permType)|0)!==0){
			tmp7=tmp5.a7;
			L$poptgepsqueezed36={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null,a6:null};
			tmp8=tmp4.fileLength;
			L$poptgepsqueezed36.a0=__ZTVN7CheerpX9IDBDeviceE;
			L$poptgepsqueezed36.i1=1;
			tmp9=__ZN7CheerpX6Device9lastDevIdE|0;
			__ZN7CheerpX6Device9lastDevIdE=tmp9+1|0;
			L$poptgepsqueezed36.i2=tmp9;
			L$poptgepsqueezed27=__ZN11CheerpXBase7devicesE.a1;
			tmp11=__ZN11CheerpXBase7devicesE.a1o|0;
			tmp4=__ZN11CheerpXBase7devicesE.a2;
			tmp0=tmp4.a0;
			tmp1=tmp4.a0o|0;
			if(tmp11<tmp1){
				L$poptgepsqueezed27[tmp11]=L$poptgepsqueezed36;
				__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed27;
				__ZN11CheerpXBase7devicesE.a1o=tmp11+1|0;
			}else{
				tmp7={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp7={a0:null}}};
				tmp2=__ZN11CheerpXBase7devicesE.a0;
				tmp9=__ZN11CheerpXBase7devicesE.a0o|0;
				tmp9=(__imul(tmp9,4));
				tmp11=(__imul(tmp11,4))-tmp9>>2;
				tmp3=tmp11+1|0;
				if(tmp3>>>0>1073741823)_abort();
				;
				tmp9=(__imul(tmp1,4))-tmp9|0;
				if(tmp9>>>0<2147483644){
					tmp9>>>=1;
					tmp9=tmp9>>>0>tmp3>>>0?tmp9|0:tmp3|0;
				}else{
					tmp9=1073741823;
				}
				L$poptgepsqueezed27=tmp7.a3;
				L$poptgepsqueezed27.a1.a0=tmp4;
				if((tmp9|0)!==0)tmp4=createPointerArray([],0,(tmp9<<2)/4|0,null);
				else{
					tmp4=nullArray;
				}
				tmp7.a0=tmp4[0];
				tmp7.a1=tmp4;
				tmp7.a1o=0+tmp11|0;
				L$poptgepsqueezed27.a0=tmp4;
				L$poptgepsqueezed27.a0o=0+tmp9|0;
				tmp4[tmp11]=L$poptgepsqueezed36;
				tmp7.a2=tmp4;
				tmp7.a2o=(0+tmp11|0)+1|0;
				__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp7);
			}
			tmp4=tmp5.a8;
			tmp7=tmp5.a7;
			tmp5=tmp5.a6;
			L$poptgepsqueezed36.i3=tmp8;
			L$poptgepsqueezed36.a4=tmp7;
			L$poptgepsqueezed36.a0=__ZTVN7CheerpX10FileDeviceE;
			L$poptgepsqueezed36.a5=tmp5;
			tmp5="/";
			tmp5=tmp5.concat(tmp7);
			tmp5=tmp5;
			L$poptgepsqueezed36.a6=tmp5;
			tmp4(CheerpX.Device.wrap(Object.create(CheerpX.FileDevice.prototype,{this:{value:L$poptgepsqueezed36}})));
		}else{
			tmp4=tmp5.a9;
			tmp5="Initialization failed for 'FileDevice'";
			tmp4(tmp5);
		}
	}
}
function __ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp4=null,tmp5=0,tmp6=null,tmp7=0,L$poptgepsqueezed25=null,tmp9=0,tmp10=0,tmp11=null;
	tmp6=Larg0.a3.a0;
	tmp7=Larg0.a3.a0o|0;
	L$poptgepsqueezed25=tmp6[tmp7].a[tmp6[tmp7].o- -1];
	L$poptgepsqueezed25=L$poptgepsqueezed25.a1.a1;
	if(tmp6!==nullArray||tmp7!==0)tmp6[tmp7].a1(tmp6,tmp7);
	tmp6=Larg0.a10;
	if(((L$poptgepsqueezed25.permType)|0)!==0){
		tmp0=Larg0.a7;
		tmp1={a0:null,i1:0,i2:0,i3:0,a4:null,a5:null,a6:null};
		tmp7=L$poptgepsqueezed25.fileLength;
		tmp1.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp1.i1=1;
		tmp9=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp9+1|0;
		tmp1.i2=tmp9;
		L$poptgepsqueezed25=__ZN11CheerpXBase7devicesE.a1;
		tmp10=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp6=__ZN11CheerpXBase7devicesE.a2;
		tmp11=tmp6.a0;
		tmp2=tmp6.a0o|0;
		if(tmp10<tmp2){
			L$poptgepsqueezed25[tmp10]=tmp1;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed25;
			__ZN11CheerpXBase7devicesE.a1o=tmp10+1|0;
		}else{
			tmp3={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp3={a0:null}}};
			tmp4=__ZN11CheerpXBase7devicesE.a0;
			tmp9=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp9=(__imul(tmp9,4));
			tmp10=(__imul(tmp10,4))-tmp9>>2;
			tmp5=tmp10+1|0;
			if(tmp5>>>0>1073741823)_abort();
			;
			tmp9=(__imul(tmp2,4))-tmp9|0;
			if(tmp9>>>0<2147483644){
				tmp9>>>=1;
				tmp9=tmp9>>>0>tmp5>>>0?tmp9|0:tmp5|0;
			}else{
				tmp9=1073741823;
			}
			L$poptgepsqueezed25=tmp3.a3;
			L$poptgepsqueezed25.a1.a0=tmp6;
			if((tmp9|0)!==0)tmp11=createPointerArray([],0,(tmp9<<2)/4|0,null);
			else{
				tmp11=nullArray;
			}
			tmp3.a0=tmp11[0];
			tmp3.a1=tmp11;
			tmp3.a1o=0+tmp10|0;
			L$poptgepsqueezed25.a0=tmp11;
			L$poptgepsqueezed25.a0o=0+tmp9|0;
			tmp11[tmp10]=tmp1;
			tmp3.a2=tmp11;
			tmp3.a2o=(0+tmp10|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp3);
		}
		L$poptgepsqueezed25=Larg0.a8;
		tmp6=Larg0.a6;
		tmp1.i3=tmp7;
		tmp1.a4=tmp0;
		tmp1.a0=__ZTVN7CheerpX10FileDeviceE;
		tmp1.a5=tmp6;
		tmp6="/";
		tmp6=tmp6.concat(tmp0);
		tmp6=tmp6;
		tmp1.a6=tmp6;
		L$poptgepsqueezed25(CheerpX.Device.wrap(Object.create(CheerpX.FileDevice.prototype,{this:{value:tmp1}})));
	}else{
		L$poptgepsqueezed25=Larg0.a9;
		tmp6="Initialization failed for 'FileDevice'";
		L$poptgepsqueezed25(tmp6);
	}
}
function __ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a3.a0;
	tmp0=Larg0.a3.a0o|0;
	if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
	tmp1=Larg0.a10;
}
function __ZN7CheerpX10FileDevice8dumpImplEv(Larg0,Larg1){
	var tmp0=null,L$poptgepsqueezed22=null,tmp2=0,tmp3=null,tmp4=null,tmp5=null,L$poptgepsqueezed21=null,tmp7=0;
	tmp3=new constructor__ZN7CheerpX10FileDevice8dumpImplEv$pFrame().a;
	tmp4=tmp3[0];
	tmp4.a0=__ZN7CheerpX10FileDevice8dumpImplEv$presume;
	tmp4.a1=__ZN7CheerpX10FileDevice8dumpImplEv$pdestroy;
	tmp4.a7=Larg1;
	tmp5=tmp4.a2.a[tmp4.a2.o-1];
	Larg0.a0=tmp5;
	new Array();
	tmp5=Larg1.a5;
	L$poptgepsqueezed21=Larg1.a6;
	tmp4.a8=L$poptgepsqueezed21;
	tmp0="r";
	tmp4.a9=tmp0;
	L$poptgepsqueezed22=tmp4.a3;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed22,tmp5,L$poptgepsqueezed21,tmp0,0,0);
	tmp5=L$poptgepsqueezed22.a0;
	tmp7=L$poptgepsqueezed22.a0o|0;
	a:{
		if(tmp5!==nullArray||tmp7!==0)if(tmp5[tmp7].a0!==null){
			tmp4.i5=0;
			tmp4=tmp5[tmp7].a[tmp5[tmp7].o- -1];
			tmp4.a0=tmp3;
			tmp4.a0o=0;
			break a;
		}
		tmp5=tmp5[tmp7].a[tmp5[tmp7].o- -1];
		tmp7=tmp5.a1.i1|0;
		tmp5=L$poptgepsqueezed22.a0;
		tmp2=L$poptgepsqueezed22.a0o|0;
		if(tmp5!==nullArray||tmp2!==0)tmp5[tmp2].a1(tmp5,tmp2);
		tmp5=tmp4.a9;
		L$poptgepsqueezed21=tmp4.a8;
		tmp5=tmp4.a7.a6;
		tmp4.a10=tmp5;
		L$poptgepsqueezed21=tmp4.a4;
		__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE(L$poptgepsqueezed21,tmp7,tmp5);
		tmp5=L$poptgepsqueezed21.a0;
		tmp7=L$poptgepsqueezed21.a0o|0;
		if(tmp5!==nullArray||tmp7!==0)if(tmp5[tmp7].a0!==null){
			tmp4.i5=1;
			tmp4=tmp5[tmp7].a[tmp5[tmp7].o- -1];
			tmp4.a0=tmp3;
			tmp4.a0o=0;
			break a;
		}
		tmp5=tmp5[tmp7].a[tmp5[tmp7].o- -1];
		tmp5=tmp5.a1.a1;
		tmp3=L$poptgepsqueezed21.a0;
		tmp7=L$poptgepsqueezed21.a0o|0;
		if(tmp3!==nullArray||tmp7!==0)tmp3[tmp7].a1(tmp3,tmp7);
		tmp3=tmp4.a10;
		__ZN7CheerpX6Device12downloadBlobEPN6client4BlobEPNS1_6StringE(tmp5,tmp4.a7.a6);
	}
}
function __ZN7CheerpX10FileDevice8dumpImplEv$presume(Larg0,Marg0){
	var tmp0=0,L$poptgepsqueezed12=null,L$ppre_0=null,L$ppre_1=0,tmp4=null;
	L$poptgepsqueezed12=Larg0[Marg0].a4;
	a:{
		if(Larg0[Marg0].i5|0){
			L$ppre_0=L$poptgepsqueezed12.a0;
			L$ppre_1=L$poptgepsqueezed12.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1];
		}else{
			L$ppre_0=Larg0[Marg0].a3.a0;
			L$ppre_1=Larg0[Marg0].a3.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
			L$ppre_1=L$ppre_0.a1.i1|0;
			L$ppre_0=Larg0[Marg0].a3.a0;
			tmp0=Larg0[Marg0].a3.a0o|0;
			if(L$ppre_0!==nullArray||tmp0!==0)L$ppre_0[tmp0].a1(L$ppre_0,tmp0);
			L$ppre_0=Larg0[Marg0].a9;
			tmp4=Larg0[Marg0].a8;
			L$ppre_0=Larg0[Marg0].a7.a6;
			Larg0[Marg0].a10=L$ppre_0;
			__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE(L$poptgepsqueezed12,L$ppre_1,L$ppre_0);
			L$ppre_0=L$poptgepsqueezed12.a0;
			L$ppre_1=L$poptgepsqueezed12.a0o|0;
			if(L$ppre_0!==nullArray||L$ppre_1!==0){
				if(L$ppre_0[L$ppre_1].a0!==null){
					Larg0[Marg0].i5=1;
					L$poptgepsqueezed12=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$poptgepsqueezed12.a0=Larg0;
					L$poptgepsqueezed12.a0o=Marg0;
					break a;
				}
				L$ppre_0=L$ppre_0[L$ppre_1];
			}else{
				L$ppre_0=null;
			}
		}
		L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
		L$ppre_0=L$ppre_0.a1.a1;
		tmp4=L$poptgepsqueezed12.a0;
		L$ppre_1=L$poptgepsqueezed12.a0o|0;
		if(tmp4!==nullArray||L$ppre_1!==0)tmp4[L$ppre_1].a1(tmp4,L$ppre_1);
		tmp4=Larg0[Marg0].a10;
		__ZN7CheerpX6Device12downloadBlobEPN6client4BlobEPNS1_6StringE(L$ppre_0,Larg0[Marg0].a7.a6);
	}
}
function __ZN7CheerpX10FileDevice8dumpImplEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=0;
	if(Larg0.i5|0){
		tmp1=Larg0.a4.a0;
		tmp2=Larg0.a4.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
		tmp1=Larg0.a10;
		return;
	}
	tmp1=Larg0.a3.a0;
	tmp2=Larg0.a3.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
	tmp1=Larg0.a9;
	tmp0=Larg0.a8;
}
function __ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0,tmp4=null,tmp5=null,L$poptgepsqueezed18=null,tmp7=0;
	tmp4=Larg1.a0;
	tmp5=new constructor__ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E$pFrame().a;
	tmp0=tmp5[0];
	tmp0.a0=__ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E$presume;
	tmp0.a1=__ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy;
	tmp0.a10=tmp4;
	tmp0.a9=Larg6;
	tmp0.a8=Larg5;
	tmp0.a7=Larg4;
	tmp0.a6=Larg3;
	L$poptgepsqueezed18=tmp0.a2.a[tmp0.a2.o-1];
	Larg0.a0=L$poptgepsqueezed18;
	L$poptgepsqueezed18="/";
	a:{
		if(Larg3.startsWith(L$poptgepsqueezed18)){
			tmp1=Larg3.substring(1);
			tmp2="/";
			tmp7=tmp1.indexOf(tmp2);
			if((tmp7|0)===-1){
				if(Larg2!==null){
					tmp7=tmp4.i2|0;
					tmp4=Larg3.substring(1);
					tmp0.a11=tmp4;
					L$poptgepsqueezed18=tmp0.a3;
					__ZN7CheerpX5Linux17requestCreateFileEjRKN6client6StringE(L$poptgepsqueezed18,Larg2,tmp7,tmp4);
					tmp4=L$poptgepsqueezed18.a0;
					tmp7=L$poptgepsqueezed18.a0o|0;
					if(tmp4!==nullArray||tmp7!==0)if(tmp4[tmp7].a0!==null){
						tmp0.i4=0;
						tmp4=tmp4[tmp7].a[tmp4[tmp7].o- -1];
						tmp4.a0=tmp5;
						tmp4.a0o=0;
						break a;
					}
					tmp4=tmp4[tmp7].a[tmp4[tmp7].o- -1];
					tmp7=tmp4.a1.i1|0;
					tmp4=L$poptgepsqueezed18.a0;
					tmp3=L$poptgepsqueezed18.a0o|0;
					if(tmp4!==nullArray||tmp3!==0)tmp4[tmp3].a1(tmp4,tmp3);
					tmp4=tmp0.a11;
					if((tmp7|0)===0){
						tmp4=tmp0.a9;
						tmp5="Unable to add file";
						tmp4(tmp5);
						break a;
					}
				}
				tmp4=tmp0.a8;
				cheerpOSAddStringFileMain(tmp0.a10.a3,tmp0.a6,tmp0.a7);
				tmp4(null);
				break a;
			}
		}
		tmp4="Invalid fileName";
		Larg6(tmp4);
	}
}
function __ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null;
	tmp2=Larg0.a3.a0;
	tmp0=Larg0.a3.a0o|0;
	tmp3=tmp2[tmp0].a[tmp2[tmp0].o- -1];
	tmp1=tmp3.a1.i1|0;
	if(tmp2!==nullArray||tmp0!==0)tmp2[tmp0].a1(tmp2,tmp0);
	tmp2=Larg0.a11;
	if((tmp1|0)!==0){
		tmp2=Larg0.a8;
		cheerpOSAddStringFileMain(Larg0.a10.a3,Larg0.a6,Larg0.a7);
		tmp2(null);
	}else{
		tmp2=Larg0.a9;
		tmp3="Unable to add file";
		tmp2(tmp3);
	}
}
function __ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a3.a0;
	tmp0=Larg0.a3.a0o|0;
	if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
	tmp1=Larg0.a11;
}
function __ZZN7CheerpX10DataDevice6createEvENK3$_0clEPFvPN6client6ObjectEEPFvRKNS2_6StringEE(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=0,tmp3=null,tmp4=null,L$poptgepsqueezed21=null,tmp6=0,tmp7=0,tmp8=null,L$poptgepsqueezed33=null,tmp10=null;
	tmp3=create__ZZN7CheerpX10DataDevice6createEvENK3$_0clEPFvPN6client6ObjectEEPFvRKNS2_6StringEE$pFrame({a0:null,a1:null,a2:tmp3={i0:0},a3:tmp3={a0:null,a1:null,a2:nullArray},i4:0,a5:new Uint8Array(2),a6:null,a7:null}).a;
	tmp4=tmp3[0];
	tmp4.a0=__ZZN7CheerpX10DataDevice6createEvENK3$_0clEPFvPN6client6ObjectEEPFvRKNS2_6StringEE$presume;
	tmp4.a1=__ZZN7CheerpX10DataDevice6createEvENK3$_0clEPFvPN6client6ObjectEEPFvRKNS2_6StringEE$pdestroy;
	tmp4.a6=Larg1;
	L$poptgepsqueezed21=tmp4.a2.a[tmp4.a2.o-1];
	Larg0.a0=L$poptgepsqueezed21;
	if((__ZN11CheerpXBase13cheerpOSStateE|0)!==0){
		tmp3={a0:null,i1:0,i2:0,a3:null,a4:null};
		tmp3.a0=__ZTVN7CheerpX9IDBDeviceE;
		tmp3.i1=0;
		tmp6=__ZN7CheerpX6Device9lastDevIdE|0;
		__ZN7CheerpX6Device9lastDevIdE=tmp6+1|0;
		tmp3.i2=tmp6;
		L$poptgepsqueezed21=__ZN11CheerpXBase7devicesE.a1;
		tmp7=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp8=__ZN11CheerpXBase7devicesE.a2;
		L$poptgepsqueezed33=tmp8.a0;
		tmp0=tmp8.a0o|0;
		if(tmp7<tmp0){
			L$poptgepsqueezed21[tmp7]=tmp3;
			__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed21;
			__ZN11CheerpXBase7devicesE.a1o=tmp7+1|0;
		}else{
			tmp1={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp1={a0:null}}};
			tmp10=__ZN11CheerpXBase7devicesE.a0;
			tmp6=__ZN11CheerpXBase7devicesE.a0o|0;
			tmp6=(__imul(tmp6,4));
			tmp7=(__imul(tmp7,4))-tmp6>>2;
			tmp2=tmp7+1|0;
			if(tmp2>>>0>1073741823)_abort();
			;
			tmp6=(__imul(tmp0,4))-tmp6|0;
			if(tmp6>>>0<2147483644){
				tmp6>>>=1;
				tmp6=tmp6>>>0>tmp2>>>0?tmp6|0:tmp2|0;
			}else{
				tmp6=1073741823;
			}
			L$poptgepsqueezed21=tmp1.a3;
			L$poptgepsqueezed21.a1.a0=tmp8;
			if((tmp6|0)!==0)L$poptgepsqueezed33=createPointerArray([],0,(tmp6<<2)/4|0,null);
			else{
				L$poptgepsqueezed33=nullArray;
			}
			tmp1.a0=L$poptgepsqueezed33[0];
			tmp1.a1=L$poptgepsqueezed33;
			tmp1.a1o=0+tmp7|0;
			L$poptgepsqueezed21.a0=L$poptgepsqueezed33;
			L$poptgepsqueezed21.a0o=0+tmp6|0;
			L$poptgepsqueezed33[tmp7]=tmp3;
			tmp1.a2=L$poptgepsqueezed33;
			tmp1.a2o=(0+tmp7|0)+1|0;
			__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp1);
		}
		L$poptgepsqueezed21=tmp4.a6;
		tmp3.a3=null;
		tmp3.a0=__ZTVN7CheerpX10DataDeviceE;
		tmp3.a4=null;
		tmp8="/str";
		tmp3.a3=new CheerpJDataFolder(tmp8);
		L$poptgepsqueezed21(CheerpX.Device.wrap(Object.create(CheerpX.DataDevice.prototype,{this:{value:tmp3}})));
	}else{
		tmp10=__ZN11CheerpXBase12loadCheerpOSEv();
		tmp4.a7=tmp10;
		L$poptgepsqueezed33=tmp4.a3;
		L$poptgepsqueezed33.a0=tmp10;
		tmp4.i4=0;
		tmp4=new Uint8Array(1);
		tmp4[0]=0;
		L$poptgepsqueezed33.a2=tmp4;
		L$poptgepsqueezed21=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		L$poptgepsqueezed21[0].a0=L$poptgepsqueezed33;
		L$poptgepsqueezed21[0].a1.a0=tmp3;
		L$poptgepsqueezed21[0].a1.a0o=0;
		L$poptgepsqueezed21[0].a2=tmp4;
		L$poptgepsqueezed33=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,L$poptgepsqueezed21[0]);
		tmp10.then(L$poptgepsqueezed33);
	}
}
function __ZZN7CheerpX10DataDevice6createEvENK3$_0clEPFvPN6client6ObjectEEPFvRKNS2_6StringEE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=null,tmp6=0,L$poptgepsqueezed15=null,tmp8=0,tmp9=null;
	tmp5=Larg0.a3.a2;
	if(tmp5!==nullArray||0!==0)tmp5[0]=1;
	tmp5={a0:null,i1:0,i2:0,a3:null,a4:null};
	tmp5.a0=__ZTVN7CheerpX9IDBDeviceE;
	tmp5.i1=0;
	tmp6=__ZN7CheerpX6Device9lastDevIdE|0;
	__ZN7CheerpX6Device9lastDevIdE=tmp6+1|0;
	tmp5.i2=tmp6;
	L$poptgepsqueezed15=__ZN11CheerpXBase7devicesE.a1;
	tmp8=__ZN11CheerpXBase7devicesE.a1o|0;
	tmp0=__ZN11CheerpXBase7devicesE.a2;
	tmp9=tmp0.a0;
	tmp1=tmp0.a0o|0;
	if(tmp8<tmp1){
		L$poptgepsqueezed15[tmp8]=tmp5;
		__ZN11CheerpXBase7devicesE.a1=L$poptgepsqueezed15;
		__ZN11CheerpXBase7devicesE.a1o=tmp8+1|0;
	}else{
		tmp2={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp2={a0:null}}};
		tmp3=__ZN11CheerpXBase7devicesE.a0;
		tmp6=__ZN11CheerpXBase7devicesE.a0o|0;
		tmp6=(__imul(tmp6,4));
		tmp8=(__imul(tmp8,4))-tmp6>>2;
		tmp4=tmp8+1|0;
		if(tmp4>>>0>1073741823)_abort();
		;
		tmp6=(__imul(tmp1,4))-tmp6|0;
		if(tmp6>>>0<2147483644){
			tmp6>>>=1;
			tmp6=tmp6>>>0>tmp4>>>0?tmp6|0:tmp4|0;
		}else{
			tmp6=1073741823;
		}
		L$poptgepsqueezed15=tmp2.a3;
		L$poptgepsqueezed15.a1.a0=tmp0;
		if((tmp6|0)!==0)tmp9=createPointerArray([],0,(tmp6<<2)/4|0,null);
		else{
			tmp9=nullArray;
		}
		tmp2.a0=tmp9[0];
		tmp2.a1=tmp9;
		tmp2.a1o=0+tmp8|0;
		L$poptgepsqueezed15.a0=tmp9;
		L$poptgepsqueezed15.a0o=0+tmp6|0;
		tmp9[tmp8]=tmp5;
		tmp2.a2=tmp9;
		tmp2.a2o=(0+tmp8|0)+1|0;
		__ZNSt6vectorIPN7CheerpX6DeviceESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(tmp2);
	}
	L$poptgepsqueezed15=Larg0.a6;
	tmp5.a3=null;
	tmp5.a0=__ZTVN7CheerpX10DataDeviceE;
	tmp5.a4=null;
	tmp9="/str";
	tmp5.a3=new CheerpJDataFolder(tmp9);
	L$poptgepsqueezed15(CheerpX.Device.wrap(Object.create(CheerpX.DataDevice.prototype,{this:{value:tmp5}})));
}
function __ZZN7CheerpX10DataDevice6createEvENK3$_0clEPFvPN6client6ObjectEEPFvRKNS2_6StringEE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	tmp0=Larg0.a3.a2;
	if(tmp0!==nullArray||0!==0)tmp0[0]=1;
}
function __ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,L$poptgepsqueezed11=null,tmp2=null,L$poptgepsqueezed12=null,tmp4=null,tmp5=null,tmp6=null,tmp7=0,tmp8=null;
	tmp5=create__ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii$pFrame({a0:null,a1:null,a2:tmp5={a0:nullArray,a0o:0,a1:{i0:0,a1:null}},a3:tmp5={i0:0,a1:{a0:nullArray,a0o:0}},i4:0,a5:null,a6:null}).a;
	tmp0=tmp5[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii$pdestroy;
	L$poptgepsqueezed11=tmp0.a2;
	L$poptgepsqueezed11.a0=nullArray;
	L$poptgepsqueezed11.a0o=0;
	tmp2=L$poptgepsqueezed11.a1;
	tmp2.i0=0;
	tmp6=L$poptgepsqueezed11.a;
	tmp7=L$poptgepsqueezed11.o-1;
	Larg0.a0=tmp6;
	Larg0.a0o=tmp7;
	tmp6=new Object();
	tmp0.a5=tmp6;
	L$poptgepsqueezed12=tmp0.a3;
	L$poptgepsqueezed12.i0=0;
	L$poptgepsqueezed12.a1.a0=nullArray;
	L$poptgepsqueezed12.a1.a0o=0;
	tmp4=Larg1.a3;
	tmp8=[{a0:null}];
	tmp8[0].a0=L$poptgepsqueezed12;
	tmp8=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFvPN6client13CheerpJFolderERKNS6_6StringEPNS6_7FileRefEjiiPNS6_13EventListenerEEJRS8_SB_RSD_RjRiSL_EEET_DpOT0_EUlvE_JEEEvPSM_DpSN_,tmp8[0]);
	cheerpOSCreateDirMain(tmp4,Larg2,tmp6,Larg3,Larg4,Larg5,tmp8);
	if((L$poptgepsqueezed12.i0&255)!==0){
		tmp5=tmp0.a5;
		tmp2.i0=256;
		tmp2.a1=tmp5;
		tmp0.a6=L$poptgepsqueezed11;
		tmp0.a0=null;
		tmp5=L$poptgepsqueezed11.a0;
		tmp7=L$poptgepsqueezed11.a0o|0;
		(tmp5!==nullArray||tmp7!==0?tmp5:_NoopCoro$pFrame$pConst)[tmp5!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst].a0((tmp5!==nullArray||tmp7!==0?tmp5:_NoopCoro$pFrame$pConst),tmp5!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed12.a1.a0=tmp5;
		L$poptgepsqueezed12.a1.a0o=0;
	}
}
function __ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed6=null,L$poptgep$poptgep1$poptgep=null,tmp2=0,tmp3=null;
	tmp3=Larg0.a5;
	L$poptgepsqueezed6=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed6.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.a1=tmp3;
	Larg0.a6=L$poptgepsqueezed6;
	Larg0.a0=null;
	tmp3=L$poptgepsqueezed6.a0;
	tmp2=L$poptgepsqueezed6.a0o|0;
	(tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst)[tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst].a0((tmp3!==nullArray||tmp2!==0?tmp3:_NoopCoro$pFrame$pConst),tmp3!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFvPN6client13CheerpJFolderERKNS6_6StringEPNS6_7FileRefEjiiPNS6_13EventListenerEEJRS8_SB_RSD_RjRiSL_EEET_DpOT0_EUlvE_JEEEvPSM_DpSN_(Larg0){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i0=1;
	tmp1=tmp0.a1.a0;
	tmp2=tmp0.a1.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX14CheerpOSDevice4linkERKN6client6StringES4_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,L$poptgepsqueezed10=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed11=null,tmp6=0,tmp7=null;
	tmp4=create__ZN7CheerpX14CheerpOSDevice4linkERKN6client6StringES4_$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp4={i0:0,i1:0}},a3:tmp4={i0:0,i1:0,a2:{a0:nullArray,a0o:0}},i4:0,a5:null}).a;
	tmp0=tmp4[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice4linkERKN6client6StringES4_$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice4linkERKN6client6StringES4_$pdestroy;
	L$poptgepsqueezed10=tmp0.a2;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	tmp2=L$poptgepsqueezed10.a1;
	tmp2.i0=0;
	L$poptgepsqueezed11=L$poptgepsqueezed10.a;
	tmp6=L$poptgepsqueezed10.o-1;
	Larg0.a0=L$poptgepsqueezed11;
	Larg0.a0o=tmp6;
	L$poptgepsqueezed11=tmp0.a3;
	L$poptgepsqueezed11.i0=0;
	L$poptgepsqueezed11.a2.a0=nullArray;
	L$poptgepsqueezed11.a2.a0o=0;
	tmp3=Larg1.a3;
	tmp7=[{a0:null}];
	tmp7[0].a0=L$poptgepsqueezed11;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvPN6client13CheerpJFolderERKNS6_6StringESB_PNS6_13EventListenerEEJRS8_SB_SB_EEET_DpOT0_EUliE_JiEEEvPSH_DpSI_,tmp7[0]);
	cheerpOSLinkMain(tmp3,Larg2,Larg3,tmp7);
	if((L$poptgepsqueezed11.i0&255)!==0){
		tmp6=L$poptgepsqueezed11.i1|0;
		tmp2.i0=256;
		tmp2.i1=tmp6;
		tmp0.a5=L$poptgepsqueezed10;
		tmp0.a0=null;
		tmp4=L$poptgepsqueezed10.a0;
		tmp6=L$poptgepsqueezed10.a0o|0;
		(tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed11.a2.a0=tmp4;
		L$poptgepsqueezed11.a2.a0o=0;
	}
}
function __ZN7CheerpX14CheerpOSDevice4linkERKN6client6StringES4_$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep1$poptgep=null;
	tmp1=Larg0.a3.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.i1=tmp1;
	Larg0.a5=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice4linkERKN6client6StringES4_$pdestroy(Larg0,Marg0){
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvPN6client13CheerpJFolderERKNS6_6StringESB_PNS6_13EventListenerEEJRS8_SB_SB_EEET_DpOT0_EUliE_JiEEEvPSH_DpSI_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp0.i1=Larg1;
	tmp0.i0=1;
	tmp1=tmp0.a2.a0;
	tmp2=tmp0.a2.a0o|0;
	if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a0(tmp1,tmp2);
}
function __ZN7CheerpX14CheerpOSDevice6renameERKN6client6StringES4_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,L$poptgepsqueezed10=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed11=null,tmp6=0,tmp7=null;
	tmp4=create__ZN7CheerpX14CheerpOSDevice6renameERKN6client6StringES4_$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp4={i0:0,i1:0}},a3:tmp4={i0:0,i1:0,a2:{a0:nullArray,a0o:0}},i4:0,a5:null}).a;
	tmp0=tmp4[0];
	tmp0.a0=__ZN7CheerpX14CheerpOSDevice6renameERKN6client6StringES4_$presume;
	tmp0.a1=__ZN7CheerpX14CheerpOSDevice6renameERKN6client6StringES4_$pdestroy;
	L$poptgepsqueezed10=tmp0.a2;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	tmp2=L$poptgepsqueezed10.a1;
	tmp2.i0=0;
	L$poptgepsqueezed11=L$poptgepsqueezed10.a;
	tmp6=L$poptgepsqueezed10.o-1;
	Larg0.a0=L$poptgepsqueezed11;
	Larg0.a0o=tmp6;
	L$poptgepsqueezed11=tmp0.a3;
	L$poptgepsqueezed11.i0=0;
	L$poptgepsqueezed11.a2.a0=nullArray;
	L$poptgepsqueezed11.a2.a0o=0;
	tmp3=Larg1.a3;
	tmp7=[{a0:null}];
	tmp7[0].a0=L$poptgepsqueezed11;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIiEC1IPFvPN6client13CheerpJFolderERKNS6_6StringESB_PNS6_13EventListenerEEJRS8_SB_SB_EEET_DpOT0_EUliE_JiEEEvPSH_DpSI_,tmp7[0]);
	cheerpOSRenameMain(tmp3,Larg2,Larg3,tmp7);
	if((L$poptgepsqueezed11.i0&255)!==0){
		tmp6=L$poptgepsqueezed11.i1|0;
		tmp2.i0=256;
		tmp2.i1=tmp6;
		tmp0.a5=L$poptgepsqueezed10;
		tmp0.a0=null;
		tmp4=L$poptgepsqueezed10.a0;
		tmp6=L$poptgepsqueezed10.a0o|0;
		(tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst)[tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst].a0((tmp4!==nullArray||tmp6!==0?tmp4:_NoopCoro$pFrame$pConst),tmp4!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst);
	}else{
		tmp0.i4=0;
		L$poptgepsqueezed11.a2.a0=tmp4;
		L$poptgepsqueezed11.a2.a0o=0;
	}
}
function __ZN7CheerpX14CheerpOSDevice6renameERKN6client6StringES4_$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep1$poptgep=null;
	tmp1=Larg0.a3.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep1$poptgep.i0=256;
	L$poptgep$poptgep1$poptgep.i1=tmp1;
	Larg0.a5=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep1$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst)[L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst].a0((L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep1$poptgep:_NoopCoro$pFrame$pConst),L$poptgep$poptgep1$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst);
}
function __ZN7CheerpX14CheerpOSDevice6renameERKN6client6StringES4_$pdestroy(Larg0,Marg0){
}
function __ZN7CheerpX14CheerpOSDevice5getFDEi(Larg0){
	var tmp0=null;
	if((Larg0|0)<0)return null;
	if(((__ZN7CheerpX14CheerpOSDevice7fdDescsE.length)|0)>(Larg0|0)){
		tmp0=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
		return tmp0[0+Larg0|0];
	}
	return null;
}
function __ZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp1={a0:null};
	__ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE(tmp1,Larg0,Larg1,tmp0.a1,tmp0.a2);
	tmp1=tmp0.a0;
	return tmp1;
}
function __ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=null,tmp2=null,L$poptgepsqueezed57=null,L$poptgepsqueezed59=null,tmp5=null,L$poptgepsqueezed58=null,Lsmin_select=0,L$poptgepsqueezed60=null,tmp9=0;
	tmp1=new constructor__ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE$pFrame().a;
	tmp2=tmp1[0];
	tmp2.a0=__ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE$presume;
	tmp2.a1=__ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE$pdestroy;
	tmp2.a13=Larg4;
	tmp2.a12=Larg3;
	L$poptgepsqueezed57=tmp2.a2.a[tmp2.a2.o-1];
	Larg0.a0=L$poptgepsqueezed57;
	L$poptgepsqueezed57="dev";
	a:{
		b:if(Larg1.hasOwnProperty(L$poptgepsqueezed57)){
			L$poptgepsqueezed59="dev";
			if(Larg2.hasOwnProperty(L$poptgepsqueezed59)){
				tmp5="path";
				if(Larg1.hasOwnProperty(tmp5)){
					L$poptgepsqueezed58="path";
					Lsmin_select=Larg2.hasOwnProperty(L$poptgepsqueezed58);
					if(!(Lsmin_select))break b;
					tmp5=Larg1.dev.this;
					tmp0=Larg2.dev.this;
					L$poptgepsqueezed59=Larg1.path;
					tmp2.a14=L$poptgepsqueezed59;
					L$poptgepsqueezed58=Larg2.path;
					tmp2.a15=L$poptgepsqueezed58;
					c:if((tmp5.i1|0)===0)if((tmp0.i1|0)===0){
						L$poptgepsqueezed57="/";
						if(L$poptgepsqueezed59.startsWith(L$poptgepsqueezed57)){
							L$poptgepsqueezed60="/";
							Lsmin_select=L$poptgepsqueezed58.startsWith(L$poptgepsqueezed60);
							if(!(Lsmin_select))break c;
							tmp2.a16=tmp0;
							L$poptgepsqueezed57="r";
							tmp2.a17=L$poptgepsqueezed57;
							L$poptgepsqueezed60=tmp2.a3;
							__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed60,tmp5,L$poptgepsqueezed59,L$poptgepsqueezed57,0,0);
							L$poptgepsqueezed57=L$poptgepsqueezed60.a0;
							Lsmin_select=L$poptgepsqueezed60.a0o|0;
							if(L$poptgepsqueezed57!==nullArray||Lsmin_select!==0)if(L$poptgepsqueezed57[Lsmin_select].a0!==null){
								tmp2.i9=0;
								tmp2=L$poptgepsqueezed57[Lsmin_select].a[L$poptgepsqueezed57[Lsmin_select].o- -1];
								tmp2.a0=tmp1;
								tmp2.a0o=0;
								break a;
							}
							L$poptgepsqueezed57=L$poptgepsqueezed57[Lsmin_select].a[L$poptgepsqueezed57[Lsmin_select].o- -1];
							Lsmin_select=L$poptgepsqueezed57.a1.i1|0;
							tmp2.i18=Lsmin_select;
							L$poptgepsqueezed57=L$poptgepsqueezed60.a0;
							tmp9=L$poptgepsqueezed60.a0o|0;
							if(L$poptgepsqueezed57!==nullArray||tmp9!==0)L$poptgepsqueezed57[tmp9].a1(L$poptgepsqueezed57,tmp9);
							L$poptgepsqueezed57=tmp2.a17;
							L$poptgepsqueezed58=tmp2.a14;
							if((Lsmin_select|0)===-1){
								tmp1=tmp2.a13;
								tmp2="File not found";
								tmp1(tmp2);
								break a;
							}
							L$poptgepsqueezed57=tmp2.a16;
							L$poptgepsqueezed58=tmp2.a15;
							tmp5="w";
							tmp2.a19=tmp5;
							L$poptgepsqueezed59=tmp2.a4;
							__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed59,L$poptgepsqueezed57,L$poptgepsqueezed58,tmp5,0,0);
							L$poptgepsqueezed57=L$poptgepsqueezed59.a0;
							Lsmin_select=L$poptgepsqueezed59.a0o|0;
							if(L$poptgepsqueezed57!==nullArray||Lsmin_select!==0)if(L$poptgepsqueezed57[Lsmin_select].a0!==null){
								tmp2.i9=1;
								tmp2=L$poptgepsqueezed57[Lsmin_select].a[L$poptgepsqueezed57[Lsmin_select].o- -1];
								tmp2.a0=tmp1;
								tmp2.a0o=0;
								break a;
							}
							L$poptgepsqueezed57=L$poptgepsqueezed57[Lsmin_select].a[L$poptgepsqueezed57[Lsmin_select].o- -1];
							tmp2.i20=L$poptgepsqueezed57.a1.i1|0;
							L$poptgepsqueezed57=L$poptgepsqueezed59.a0;
							Lsmin_select=L$poptgepsqueezed59.a0o|0;
							if(L$poptgepsqueezed57!==nullArray||Lsmin_select!==0)L$poptgepsqueezed57[Lsmin_select].a1(L$poptgepsqueezed57,Lsmin_select);
							L$poptgepsqueezed57=tmp2.a19;
							L$poptgepsqueezed58=tmp2.a15;
							Lsmin_select=__ZN7CheerpX14CheerpOSDevice5getFDEi(tmp2.i18|0).fileData.length;
							tmp2.a21=new Uint8Array(4096);
							tmp2.i10=0;
							tmp2.i22=Lsmin_select;
							if((Lsmin_select|0)!==0){
								L$poptgepsqueezed57=tmp2.a6;
								L$poptgepsqueezed58=tmp2.a5;
								while(1){
									tmp5=tmp2.a21;
									tmp9=tmp2.i18|0;
									Lsmin_select=Lsmin_select>>>0<4096?Lsmin_select|0:4096|0;
									tmp2.i23=Lsmin_select;
									__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(L$poptgepsqueezed58,tmp9,tmp5,0,Lsmin_select);
									tmp5=L$poptgepsqueezed58.a0;
									Lsmin_select=L$poptgepsqueezed58.a0o|0;
									if(tmp5!==nullArray||Lsmin_select!==0)if(tmp5[Lsmin_select].a0!==null){
										tmp2.i9=2;
										tmp2=tmp5[Lsmin_select].a[tmp5[Lsmin_select].o- -1];
										tmp2.a0=tmp1;
										tmp2.a0o=0;
										break a;
									}
									tmp5=L$poptgepsqueezed58.a0;
									Lsmin_select=L$poptgepsqueezed58.a0o|0;
									if(tmp5!==nullArray||Lsmin_select!==0)tmp5[Lsmin_select].a1(tmp5,Lsmin_select);
									__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed57,tmp2.i20|0,tmp2.a21,0,tmp2.i23|0);
									tmp5=L$poptgepsqueezed57.a0;
									Lsmin_select=L$poptgepsqueezed57.a0o|0;
									if(tmp5!==nullArray||Lsmin_select!==0)if(tmp5[Lsmin_select].a0!==null){
										tmp2.i9=3;
										tmp2=tmp5[Lsmin_select].a[tmp5[Lsmin_select].o- -1];
										tmp2.a0=tmp1;
										tmp2.a0o=0;
										break a;
									}
									tmp5=tmp5[Lsmin_select].a[tmp5[Lsmin_select].o- -1];
									Lsmin_select=tmp5.a1.i1|0;
									tmp5=L$poptgepsqueezed57.a0;
									tmp9=L$poptgepsqueezed57.a0o|0;
									if(tmp5!==nullArray||tmp9!==0)tmp5[tmp9].a1(tmp5,tmp9);
									if((Lsmin_select|0)===-1){
										tmp1=tmp2.a13;
										tmp2="Write failed";
										tmp1(tmp2);
										break a;
									}
									Lsmin_select=(tmp2.i22|0)-(tmp2.i23|0)|0;
									tmp2.i10=0;
									tmp2.i22=Lsmin_select;
									if((Lsmin_select|0)!==0)continue;
									break;
								}
							}
							L$poptgepsqueezed57=tmp2.a7;
							__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed57,tmp2.i18|0);
							L$poptgepsqueezed58=L$poptgepsqueezed57.a0;
							Lsmin_select=L$poptgepsqueezed57.a0o|0;
							if(L$poptgepsqueezed58!==nullArray||Lsmin_select!==0){
								if(L$poptgepsqueezed58[Lsmin_select].a0!==null){
									tmp2.i9=4;
									tmp2=L$poptgepsqueezed58[Lsmin_select].a[L$poptgepsqueezed58[Lsmin_select].o- -1];
									tmp2.a0=tmp1;
									tmp2.a0o=0;
									break a;
								}
								L$poptgepsqueezed58[Lsmin_select].a1(L$poptgepsqueezed58,Lsmin_select);
							}
							L$poptgepsqueezed57=tmp2.a8;
							__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed57,tmp2.i20|0);
							L$poptgepsqueezed58=L$poptgepsqueezed57.a0;
							Lsmin_select=L$poptgepsqueezed57.a0o|0;
							if(L$poptgepsqueezed58!==nullArray||Lsmin_select!==0){
								if(L$poptgepsqueezed58[Lsmin_select].a0!==null){
									tmp2.i9=5;
									tmp2=L$poptgepsqueezed58[Lsmin_select].a[L$poptgepsqueezed58[Lsmin_select].o- -1];
									tmp2.a0=tmp1;
									tmp2.a0o=0;
									break a;
								}
								L$poptgepsqueezed58[Lsmin_select].a1(L$poptgepsqueezed58,Lsmin_select);
							}
							tmp2.a12(null);
							break a;
						}
					}
					tmp1="Bad parameters";
					Larg4(tmp1);
					break a;
				}
			}
		}
		tmp1="Bad parameters";
		Larg4(tmp1);
	}
}
function __ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE$presume(Larg0,Marg0){
	var Lsmin_select=0,L$ppre31_0=0,L$poptgepsqueezed92=null,L$poptgepsqueezed93=null,L$poptgepsqueezed94=null,L$poptgepsqueezed95=null,L$poptgepsqueezed63=null,L$ppre25_0=null,L$pdispatch9=0,L$poptgepsqueezed53=null,L$poptgepsqueezed60=null;
	L$ppre31_0=Larg0[Marg0].i9|0;
	L$poptgepsqueezed92=Larg0[Marg0].a8;
	L$poptgepsqueezed93=Larg0[Marg0].a7;
	L$poptgepsqueezed94=Larg0[Marg0].a6;
	L$poptgepsqueezed95=Larg0[Marg0].a5;
	a:{
		b:{
			c:{
				d:{
					e:{
						f:if((L$ppre31_0&7)<3){
							L$poptgepsqueezed63=Larg0[Marg0].a4;
							if((L$ppre31_0&7)!==0){
								if((L$ppre31_0&7)!==1){
									L$ppre25_0=L$poptgepsqueezed95.a0;
									L$ppre31_0=L$poptgepsqueezed95.a0o|0;
									L$ppre25_0=L$ppre25_0[L$ppre31_0];
									L$ppre31_0=0;
									break f;
								}
								L$ppre25_0=L$poptgepsqueezed63.a0;
								L$ppre31_0=L$poptgepsqueezed63.a0o|0;
								L$ppre25_0=L$ppre25_0[L$ppre31_0];
							}else{
								L$ppre25_0=Larg0[Marg0].a3.a0;
								L$ppre31_0=Larg0[Marg0].a3.a0o|0;
								L$ppre25_0=L$ppre25_0[L$ppre31_0].a[L$ppre25_0[L$ppre31_0].o- -1];
								L$ppre31_0=L$ppre25_0.a1.i1|0;
								Larg0[Marg0].i18=L$ppre31_0;
								L$ppre25_0=Larg0[Marg0].a3.a0;
								L$pdispatch9=Larg0[Marg0].a3.a0o|0;
								if(L$ppre25_0!==nullArray||L$pdispatch9!==0)L$ppre25_0[L$pdispatch9].a1(L$ppre25_0,L$pdispatch9);
								L$ppre25_0=Larg0[Marg0].a17;
								L$poptgepsqueezed53=Larg0[Marg0].a14;
								if((L$ppre31_0|0)===-1){
									L$poptgepsqueezed92=Larg0[Marg0].a13;
									L$poptgepsqueezed93="File not found";
									L$poptgepsqueezed92(L$poptgepsqueezed93);
									break a;
								}
								L$ppre25_0=Larg0[Marg0].a16;
								L$poptgepsqueezed53=Larg0[Marg0].a15;
								L$poptgepsqueezed60="w";
								Larg0[Marg0].a19=L$poptgepsqueezed60;
								__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed63,L$ppre25_0,L$poptgepsqueezed53,L$poptgepsqueezed60,0,0);
								L$ppre25_0=L$poptgepsqueezed63.a0;
								L$ppre31_0=L$poptgepsqueezed63.a0o|0;
								if(L$ppre25_0!==nullArray||L$ppre31_0!==0){
									if(L$ppre25_0[L$ppre31_0].a0!==null){
										Larg0[Marg0].i9=1;
										L$poptgepsqueezed92=L$ppre25_0[L$ppre31_0].a[L$ppre25_0[L$ppre31_0].o- -1];
										L$poptgepsqueezed92.a0=Larg0;
										L$poptgepsqueezed92.a0o=Marg0;
										break a;
									}
									L$ppre25_0=L$ppre25_0[L$ppre31_0];
								}else{
									L$ppre25_0=null;
								}
							}
							L$ppre25_0=L$ppre25_0.a[L$ppre25_0.o- -1];
							Larg0[Marg0].i20=L$ppre25_0.a1.i1|0;
							L$ppre25_0=L$poptgepsqueezed63.a0;
							L$ppre31_0=L$poptgepsqueezed63.a0o|0;
							if(L$ppre25_0!==nullArray||L$ppre31_0!==0)L$ppre25_0[L$ppre31_0].a1(L$ppre25_0,L$ppre31_0);
							L$poptgepsqueezed63=Larg0[Marg0].a19;
							L$ppre25_0=Larg0[Marg0].a15;
							L$ppre31_0=Larg0[Marg0].i18|0;
							__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
							L$poptgepsqueezed63=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
							L$pdispatch9=L$poptgepsqueezed63[0+L$ppre31_0|0].fileData.length;
							Larg0[Marg0].a21=new Uint8Array(4096);
							L$ppre31_0=1;
						}else{
							if(L$ppre31_0<<29<-1073741824){
								if((L$ppre31_0&7)===4){
									L$poptgepsqueezed94=L$poptgepsqueezed93.a0;
									L$ppre31_0=L$poptgepsqueezed93.a0o|0;
									if(L$poptgepsqueezed94===nullArray&&L$ppre31_0===0)break d;
									L$ppre31_0=L$ppre31_0;
									L$poptgepsqueezed93=L$poptgepsqueezed94;
									break e;
								}
								L$poptgepsqueezed93=L$poptgepsqueezed92.a0;
								L$ppre31_0=L$poptgepsqueezed92.a0o|0;
								if(L$poptgepsqueezed93===nullArray&&L$ppre31_0===0)break b;
								L$ppre31_0=L$ppre31_0;
								L$poptgepsqueezed92=L$poptgepsqueezed93;
								break c;
							}
							L$poptgepsqueezed63=L$poptgepsqueezed94.a0;
							L$ppre31_0=L$poptgepsqueezed94.a0o|0;
							L$poptgepsqueezed63=L$poptgepsqueezed63[L$ppre31_0];
							L$ppre31_0=-1;
						}
						f:while(1){
							switch(L$ppre31_0|0){
								case 0:
								L$poptgepsqueezed63=L$poptgepsqueezed95.a0;
								L$ppre31_0=L$poptgepsqueezed95.a0o|0;
								if(L$poptgepsqueezed63!==nullArray||L$ppre31_0!==0)L$poptgepsqueezed63[L$ppre31_0].a1(L$poptgepsqueezed63,L$ppre31_0);
								__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed94,Larg0[Marg0].i20|0,Larg0[Marg0].a21,0,Larg0[Marg0].i23|0);
								L$poptgepsqueezed63=L$poptgepsqueezed94.a0;
								L$ppre31_0=L$poptgepsqueezed94.a0o|0;
								if(L$poptgepsqueezed63!==nullArray||L$ppre31_0!==0){
									if(L$poptgepsqueezed63[L$ppre31_0].a0!==null){
										Larg0[Marg0].i9=3;
										L$poptgepsqueezed92=L$poptgepsqueezed63[L$ppre31_0].a[L$poptgepsqueezed63[L$ppre31_0].o- -1];
										L$poptgepsqueezed92.a0=Larg0;
										L$poptgepsqueezed92.a0o=Marg0;
										break a;
									}
									L$poptgepsqueezed63=L$poptgepsqueezed63[L$ppre31_0];
									L$ppre31_0=-1;
									continue f;
								}
								L$poptgepsqueezed63=null;
								L$ppre31_0=-1;
								continue f;
								case 1:
								Larg0[Marg0].i10=0;
								Larg0[Marg0].i22=L$pdispatch9;
								if((L$pdispatch9|0)!==0){
									L$ppre25_0=Larg0[Marg0].a21;
									L$ppre31_0=Larg0[Marg0].i18|0;
									Lsmin_select=L$pdispatch9>>>0<4096?L$pdispatch9|0:4096|0;
									Larg0[Marg0].i23=Lsmin_select;
									__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(L$poptgepsqueezed95,L$ppre31_0,L$ppre25_0,0,Lsmin_select);
									L$ppre25_0=L$poptgepsqueezed95.a0;
									L$ppre31_0=L$poptgepsqueezed95.a0o|0;
									if(L$ppre25_0!==nullArray||L$ppre31_0!==0){
										if(L$ppre25_0[L$ppre31_0].a0!==null){
											Larg0[Marg0].i9=2;
											L$poptgepsqueezed92=L$ppre25_0[L$ppre31_0].a[L$ppre25_0[L$ppre31_0].o- -1];
											L$poptgepsqueezed92.a0=Larg0;
											L$poptgepsqueezed92.a0o=Marg0;
											break a;
										}
										L$ppre25_0=L$ppre25_0[L$ppre31_0];
										L$ppre31_0=0;
										continue f;
									}
									L$ppre25_0=null;
									L$ppre31_0=0;
									continue f;
								}
								L$ppre31_0=Larg0[Marg0].i18|0;
								L$poptgepsqueezed94=create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:L$poptgepsqueezed94={i0:0,a1:{a0:nullArray,a0o:0}},i5:0}).a;
								L$poptgepsqueezed95=L$poptgepsqueezed94[0];
								L$poptgepsqueezed95.a0=__ZN7CheerpX14CheerpOSDevice5closeEi$presume;
								L$poptgepsqueezed95.a1=__ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy;
								L$poptgepsqueezed60=L$poptgepsqueezed95.a2;
								L$poptgepsqueezed60.a0=nullArray;
								L$poptgepsqueezed60.a0o=0;
								L$poptgepsqueezed63=L$poptgepsqueezed60.a;
								L$pdispatch9=L$poptgepsqueezed60.o-1;
								L$poptgepsqueezed93.a0=L$poptgepsqueezed63;
								L$poptgepsqueezed93.a0o=L$pdispatch9;
								L$poptgepsqueezed63=L$poptgepsqueezed95.a4;
								L$poptgepsqueezed63.i0=0;
								L$poptgepsqueezed63.a1.a0=nullArray;
								L$poptgepsqueezed63.a1.a0o=0;
								L$ppre25_0=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
								L$poptgepsqueezed53=[{a0:null}];
								L$poptgepsqueezed53[0].a0=L$poptgepsqueezed63;
								L$poptgepsqueezed53=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_,L$poptgepsqueezed53[0]);
								cheerpOSClose(L$ppre25_0,L$ppre31_0,L$poptgepsqueezed53);
								if((L$poptgepsqueezed63.i0&255)!==0){
									L$poptgepsqueezed95.a3=L$poptgepsqueezed60;
									L$poptgepsqueezed95.a0=null;
									L$poptgepsqueezed94=L$poptgepsqueezed60.a0;
									L$ppre31_0=L$poptgepsqueezed60.a0o|0;
									(L$poptgepsqueezed94!==nullArray||L$ppre31_0!==0?L$poptgepsqueezed94:_NoopCoro$pFrame$pConst)[L$poptgepsqueezed94!==nullArray||L$ppre31_0!==0?L$ppre31_0:$NoopCoro$pFrame$pConst].a0((L$poptgepsqueezed94!==nullArray||L$ppre31_0!==0?L$poptgepsqueezed94:_NoopCoro$pFrame$pConst),L$poptgepsqueezed94!==nullArray||L$ppre31_0!==0?L$ppre31_0:$NoopCoro$pFrame$pConst);
								}else{
									L$poptgepsqueezed95.i5=0;
									L$poptgepsqueezed63.a1.a0=L$poptgepsqueezed94;
									L$poptgepsqueezed63.a1.a0o=0;
								}
								L$poptgepsqueezed94=L$poptgepsqueezed93.a0;
								L$ppre31_0=L$poptgepsqueezed93.a0o|0;
								if(L$poptgepsqueezed94===nullArray&&L$ppre31_0===0)break d;
								if(L$poptgepsqueezed94[L$ppre31_0].a0!==null){
									Larg0[Marg0].i9=4;
									L$poptgepsqueezed92=L$poptgepsqueezed94[L$ppre31_0].a[L$poptgepsqueezed94[L$ppre31_0].o- -1];
									L$poptgepsqueezed92.a0=Larg0;
									L$poptgepsqueezed92.a0o=Marg0;
									break a;
								}
								L$ppre31_0=L$ppre31_0;
								L$poptgepsqueezed93=L$poptgepsqueezed94;
								break e;
								default:
								L$poptgepsqueezed53=L$poptgepsqueezed63.a[L$poptgepsqueezed63.o- -1];
								L$ppre31_0=L$poptgepsqueezed53.a1.i1|0;
								L$poptgepsqueezed53=L$poptgepsqueezed94.a0;
								L$pdispatch9=L$poptgepsqueezed94.a0o|0;
								if(L$poptgepsqueezed53!==nullArray||L$pdispatch9!==0)L$poptgepsqueezed53[L$pdispatch9].a1(L$poptgepsqueezed53,L$pdispatch9);
								if((L$ppre31_0|0)===-1){
									L$poptgepsqueezed92=Larg0[Marg0].a13;
									L$poptgepsqueezed93="Write failed";
									L$poptgepsqueezed92(L$poptgepsqueezed93);
									break a;
								}
								L$ppre31_0=Larg0[Marg0].i23|0;
								L$pdispatch9=Larg0[Marg0].i22|0;
								L$pdispatch9=L$pdispatch9-L$ppre31_0|0;
								L$ppre31_0=1;
								continue f;
							}
							break;
						}
					}
					L$poptgepsqueezed93[L$ppre31_0].a1(L$poptgepsqueezed93,L$ppre31_0);
				}
				L$ppre31_0=Larg0[Marg0].i20|0;
				L$poptgepsqueezed93=create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:L$poptgepsqueezed93={i0:0,a1:{a0:nullArray,a0o:0}},i5:0}).a;
				L$poptgepsqueezed94=L$poptgepsqueezed93[0];
				L$poptgepsqueezed94.a0=__ZN7CheerpX14CheerpOSDevice5closeEi$presume;
				L$poptgepsqueezed94.a1=__ZN7CheerpX14CheerpOSDevice5closeEi$pdestroy;
				L$poptgepsqueezed53=L$poptgepsqueezed94.a2;
				L$poptgepsqueezed53.a0=nullArray;
				L$poptgepsqueezed53.a0o=0;
				L$poptgepsqueezed95=L$poptgepsqueezed53.a;
				L$pdispatch9=L$poptgepsqueezed53.o-1;
				L$poptgepsqueezed92.a0=L$poptgepsqueezed95;
				L$poptgepsqueezed92.a0o=L$pdispatch9;
				L$poptgepsqueezed95=L$poptgepsqueezed94.a4;
				L$poptgepsqueezed95.i0=0;
				L$poptgepsqueezed95.a1.a0=nullArray;
				L$poptgepsqueezed95.a1.a0o=0;
				L$poptgepsqueezed63=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
				L$ppre25_0=[{a0:null}];
				L$ppre25_0[0].a0=L$poptgepsqueezed95;
				L$ppre25_0=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN15CallbackAwaiterIvEC1IPFiPN6client6TArrayIPNS6_2FDEEEiPNS6_13EventListenerEEJRSB_RiEEET_DpOT0_EUlvE_JEEEvPSI_DpSJ_,L$ppre25_0[0]);
				cheerpOSClose(L$poptgepsqueezed63,L$ppre31_0,L$ppre25_0);
				if((L$poptgepsqueezed95.i0&255)!==0){
					L$poptgepsqueezed94.a3=L$poptgepsqueezed53;
					L$poptgepsqueezed94.a0=null;
					L$poptgepsqueezed93=L$poptgepsqueezed53.a0;
					L$ppre31_0=L$poptgepsqueezed53.a0o|0;
					(L$poptgepsqueezed93!==nullArray||L$ppre31_0!==0?L$poptgepsqueezed93:_NoopCoro$pFrame$pConst)[L$poptgepsqueezed93!==nullArray||L$ppre31_0!==0?L$ppre31_0:$NoopCoro$pFrame$pConst].a0((L$poptgepsqueezed93!==nullArray||L$ppre31_0!==0?L$poptgepsqueezed93:_NoopCoro$pFrame$pConst),L$poptgepsqueezed93!==nullArray||L$ppre31_0!==0?L$ppre31_0:$NoopCoro$pFrame$pConst);
				}else{
					L$poptgepsqueezed94.i5=0;
					L$poptgepsqueezed95.a1.a0=L$poptgepsqueezed93;
					L$poptgepsqueezed95.a1.a0o=0;
				}
				L$poptgepsqueezed93=L$poptgepsqueezed92.a0;
				L$ppre31_0=L$poptgepsqueezed92.a0o|0;
				if(L$poptgepsqueezed93===nullArray&&L$ppre31_0===0)break b;
				if(L$poptgepsqueezed93[L$ppre31_0].a0!==null){
					Larg0[Marg0].i9=5;
					L$poptgepsqueezed92=L$poptgepsqueezed93[L$ppre31_0].a[L$poptgepsqueezed93[L$ppre31_0].o- -1];
					L$poptgepsqueezed92.a0=Larg0;
					L$poptgepsqueezed92.a0o=Marg0;
					break a;
				}
				L$ppre31_0=L$ppre31_0;
				L$poptgepsqueezed92=L$poptgepsqueezed93;
			}
			L$poptgepsqueezed92[L$ppre31_0].a1(L$poptgepsqueezed92,L$ppre31_0);
		}
		Larg0[Marg0].a12(null);
	}
}
function __ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null;
	tmp0=Larg0.i9|0;
	if((tmp0&7)<3){
		if((tmp0&7)!==0){
			if((tmp0&7)===1){
				tmp1=Larg0.a4.a0;
				tmp0=Larg0.a4.a0o|0;
				if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
				tmp1=Larg0.a19;
				tmp2=Larg0.a15;
			}else{
				tmp1=Larg0.a5.a0;
				tmp0=Larg0.a5.a0o|0;
				if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
			}
		}else{
			tmp1=Larg0.a3.a0;
			tmp0=Larg0.a3.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
			tmp1=Larg0.a17;
			tmp2=Larg0.a14;
		}
	}else if(tmp0<<29<-1073741824){
		if((tmp0&7)===4){
			tmp1=Larg0.a7.a0;
			tmp0=Larg0.a7.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		}else{
			tmp1=Larg0.a8.a0;
			tmp0=Larg0.a8.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		}
	}else{
		tmp1=Larg0.a6.a0;
		tmp0=Larg0.a6.a0o|0;
		if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
	}
}
function __ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE(Larg0){
	var L$poptgepsqueezed17=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null;
	tmp2=new constructor__ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE$presume;
	tmp3.a1=__ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE$pdestroy;
	tmp3.a4=Larg0;
	tmp4=[{a0:null}];
	tmp4[0].a0=tmp3.a2;
	tmp5=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_16NetworkInterfaceEEEJPNS4_6ObjectEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSF_EEEvPT_DpT0_,tmp4[0]);
	tmp4=new Promise(tmp5);
	tmp5="./tun/tailscale_direct.js";
	tmp3.a5=tmp5;
	tmp5=import(tmp5);
	tmp3.a6=tmp5;
	L$poptgepsqueezed17=tmp3.a8;
	L$poptgepsqueezed17.a0=tmp5;
	tmp3.i10=0;
	tmp3=new Uint8Array(1);
	tmp3[0]=0;
	L$poptgepsqueezed17.a2=tmp3;
	tmp1=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
	tmp1[0].a0=L$poptgepsqueezed17;
	tmp1[0].a1.a0=tmp2;
	tmp1[0].a1.a0o=0;
	tmp1[0].a2=tmp3;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client6ObjectEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp1[0]);
	tmp5.then(tmp2);
	return tmp4;
}
function __ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE$presume(Larg0,Marg0){
	var L$poptgepsqueezed20=null,L$poptgep$poptgep4$poptgepsqueezed=null,tmp2=null,tmp3=null;
	L$poptgepsqueezed20=Larg0[Marg0].a9;
	if(Larg0[Marg0].i10|0){
		L$poptgep$poptgep4$poptgepsqueezed=L$poptgepsqueezed20.a1;
		L$poptgepsqueezed20=L$poptgepsqueezed20.a2;
		if(L$poptgepsqueezed20!==nullArray||0!==0)L$poptgepsqueezed20[0]=1;
		L$poptgepsqueezed20=Larg0[Marg0].a3[0];
		L$poptgepsqueezed20=new L$poptgep$poptgep4$poptgepsqueezed.TailscaleNetwork(Larg0[Marg0].a4);
		Larg0[Marg0].a2.a0.call(null,L$poptgepsqueezed20);
	}else{
		L$poptgep$poptgep4$poptgepsqueezed=Larg0[Marg0].a8;
		tmp2=L$poptgep$poptgep4$poptgepsqueezed.a1;
		L$poptgep$poptgep4$poptgepsqueezed=L$poptgep$poptgep4$poptgepsqueezed.a2;
		if(L$poptgep$poptgep4$poptgepsqueezed!==nullArray||0!==0)L$poptgep$poptgep4$poptgepsqueezed[0]=1;
		L$poptgep$poptgep4$poptgepsqueezed=Larg0[Marg0].a5;
		L$poptgep$poptgep4$poptgepsqueezed="default";
		tmp2=tmp2[L$poptgep$poptgep4$poptgepsqueezed];
		Larg0[Marg0].a3[0]=nullObj;
		L$poptgep$poptgep4$poptgepsqueezed=tmp2.call(null);
		Larg0[Marg0].a7=L$poptgep$poptgep4$poptgepsqueezed;
		L$poptgepsqueezed20.a0=L$poptgep$poptgep4$poptgepsqueezed;
		Larg0[Marg0].i10=1;
		tmp3=new Uint8Array(1);
		tmp3[0]=0;
		L$poptgepsqueezed20.a2=tmp3;
		tmp2=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		tmp2[0].a0=L$poptgepsqueezed20;
		tmp2[0].a1.a0=Larg0;
		tmp2[0].a1.a0o=Marg0;
		tmp2[0].a2=tmp3;
		tmp3=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp2[0]);
		L$poptgep$poptgep4$poptgepsqueezed.then(tmp3);
	}
}
function __ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.i10|0){
		tmp0=Larg0.a9.a2;
		if(tmp0!==nullArray||0!==0)tmp0[0]=1;
		tmp0=Larg0.a3[0];
	}else{
		tmp0=Larg0.a8.a2;
		if(tmp0!==nullArray||0!==0)tmp0[0]=1;
		tmp0=Larg0.a5;
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_16NetworkInterfaceEEEJPNS4_6ObjectEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSF_EEEvPT_DpT0_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client6ObjectEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a2;
	if((tmp1[0]&255)===0){
		tmp1=Larg0.a0;
		tmp1.a1=Larg1;
		tmp1.a2=nullArray;
		tmp1=Larg0.a1.a0;
		tmp0=Larg0.a1.a0o|0;
		tmp1[tmp0].a0(tmp1,tmp0);
	}
}
function __ZN7CheerpX20DirectSocketsNetworkEv(){
	return {
		TCPSocket: function(remoteAddress, remotePort) {return new TCPSocket(remoteAddress, remotePort);},
		TCPServerSocket: function(localAddress, options) {return new TCPServerSocket(localAddress, options);},
		UDPSocket: function(options) {return new UDPSocket(options);},
		up:()=>{}
	};
}
function __ZN7CheerpX12DummyNetworkEv(){
	return {TCPSocket:()=>{return null;},TCPServerSocket:()=>{return null;},UDPSocket:()=>{return null;}, up:()=>{}};
}
function __ZN7CheerpX6System12cheerpOSInitEv(Larg0,Larg1){
	var L$poptgepsqueezed5=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0;
	tmp2=create__ZN7CheerpX6System12cheerpOSInitEv$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0,a1:tmp2={i0:0,a1:null}},i3:0,a4:tmp2=[0],a5:null});
	tmp2=tmp2;
	tmp2.a0=__ZN7CheerpX6System12cheerpOSInitEv$presume;
	tmp2.a1=__ZN7CheerpX6System12cheerpOSInitEv$pdestroy;
	L$poptgepsqueezed5=tmp2.a2;
	L$poptgepsqueezed5.a0=nullArray;
	L$poptgepsqueezed5.a0o=0;
	tmp1=L$poptgepsqueezed5.a1;
	tmp1.i0=0;
	tmp3=L$poptgepsqueezed5.a;
	tmp4=L$poptgepsqueezed5.o-1;
	Larg0.a0=tmp3;
	Larg0.a0o=tmp4;
	tmp3=CheerpX.System.wrap(Object.create(CheerpX.System.prototype,{this:{value:Larg1}}));
	tmp1.i0=256;
	tmp1.a1=tmp3;
	tmp2.a5=L$poptgepsqueezed5;
	tmp2.a0=null;
	tmp2=L$poptgepsqueezed5.a0;
	tmp4=L$poptgepsqueezed5.a0o|0;
	(tmp2!==nullArray||tmp4!==0?tmp2:_NoopCoro$pFrame$pConst$p14)[tmp2!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p14].a0((tmp2!==nullArray||tmp4!==0?tmp2:_NoopCoro$pFrame$pConst$p14),tmp2!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p14);
}
function __ZN7CheerpX6System12cheerpOSInitEv$presume(Larg0,Marg0){
	;
}
function __ZN7CheerpX6System12cheerpOSInitEv$pdestroy(Larg0,Marg0){
}
function ___NoopCoro_ResumeDestroy$p15(Larg0){
}
function __ZN7CheerpX6System3newEv(){
	var tmp0=null,L$poptgep$poptgep21$poptgepsqueezed=null;
	tmp0=new constructor_class$p_ZN7CheerpX6SystemE();
	tmp0.a1=null;
	tmp0.a2=null;
	tmp0.a3=null;
	tmp0.a4=null;
	tmp0.a5=null;
	tmp0.a6=null;
	tmp0.i7=0;
	tmp0.i8=0;
	tmp0.a9=null;
	tmp0.a10=null;
	tmp0.a11[0]=null;
	tmp0.a12=null;
	tmp0.a13=null;
	tmp0.a14=null;
	tmp0.a15=null;
	tmp0.a16=null;
	tmp0.a17=null;
	tmp0.a18=null;
	tmp0.a19=null;
	tmp0.a20=null;
	tmp0.a21=null;
	L$poptgep$poptgep21$poptgepsqueezed=tmp0.a24;
	L$poptgep$poptgep21$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep21$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep21$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a2.a0o=0;
	L$poptgep$poptgep21$poptgepsqueezed=tmp0.a25;
	L$poptgep$poptgep21$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep21$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep21$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a2.a0o=0;
	tmp0.a26=null;
	tmp0.a0=__ZTVN7CheerpX6SystemE;
	L$poptgep$poptgep21$poptgepsqueezed=[{a0:null}];
	L$poptgep$poptgep21$poptgepsqueezed[0].a0=tmp0;
	L$poptgep$poptgep21$poptgepsqueezed=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX6SystemC1EvE3$_0JPN6client12MessageEventIPNS6_6ObjectEEEEEEvPT_DpT0_,L$poptgep$poptgep21$poptgepsqueezed[0]);
	tmp0.a2=L$poptgep$poptgep21$poptgepsqueezed;
	return tmp0;
}
function __ZN7CheerpX6System3runEPN6client19SystemConfigurationE(Larg0,Larg1){
	var tmp0=null;
	tmp0={a0:null};
	__ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE(tmp0,Larg0,Larg1);
}
function __ZN7CheerpX6System4wrapEPN6client6ObjectE(Larg0){
	return Larg0;
}
function __ZN7CheerpX6System6createEv(){
	var tmp0=null,tmp1=null,tmp2=null,L$poptgep$poptgep21$poptgepsqueezed=null;
	tmp0=new constructor_class$p_ZN7CheerpX6SystemE();
	tmp0.a1=null;
	tmp0.a2=null;
	tmp0.a3=null;
	tmp0.a4=null;
	tmp0.a5=null;
	tmp0.a6=null;
	tmp0.i7=0;
	tmp0.i8=0;
	tmp0.a9=null;
	tmp0.a10=null;
	tmp0.a11[0]=null;
	tmp0.a12=null;
	tmp0.a13=null;
	tmp0.a14=null;
	tmp0.a15=null;
	tmp0.a16=null;
	tmp0.a17=null;
	tmp0.a18=null;
	tmp0.a19=null;
	tmp0.a20=null;
	tmp0.a21=null;
	L$poptgep$poptgep21$poptgepsqueezed=tmp0.a24;
	L$poptgep$poptgep21$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep21$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep21$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a2.a0o=0;
	L$poptgep$poptgep21$poptgepsqueezed=tmp0.a25;
	L$poptgep$poptgep21$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep21$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep21$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep21$poptgepsqueezed.a2.a0o=0;
	tmp0.a26=null;
	tmp0.a0=__ZTVN7CheerpX6SystemE;
	L$poptgep$poptgep21$poptgepsqueezed=[{a0:null}];
	L$poptgep$poptgep21$poptgepsqueezed[0].a0=tmp0;
	L$poptgep$poptgep21$poptgepsqueezed=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX6SystemC1EvE3$_0JPN6client12MessageEventIPNS6_6ObjectEEEEEEvPT_DpT0_,L$poptgep$poptgep21$poptgepsqueezed[0]);
	tmp0.a2=L$poptgep$poptgep21$poptgepsqueezed;
	L$poptgep$poptgep21$poptgepsqueezed=new Object();
	tmp1=new Promise(function(f,r){L$poptgep$poptgep21$poptgepsqueezed.fullfill=f;L$poptgep$poptgep21$poptgepsqueezed.reject=r;});;
	tmp2=L$poptgep$poptgep21$poptgepsqueezed.fullfill;
	__ZN11CheerpXBase4initEPFvPN6client6ObjectEEPFvRKNS0_6StringEE(tmp0,tmp2,L$poptgep$poptgep21$poptgepsqueezed.reject);
	return tmp1;
}
function __ZN7CheerpX6System6deleteEv(Larg0){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=null,tmp2=0;
	Larg0.a0=__ZTV11CheerpXBase;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a25;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a24;
	tmp1=L$poptgep$poptgep1$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
	if(tmp1!==nullArray||tmp2!==0){
		L$poptgep$poptgep1$poptgepsqueezed.a1=tmp1;
		L$poptgep$poptgep1$poptgepsqueezed.a1o=tmp2;
	}
}
function __ZN7CheerpX6System9createHudEv(Larg0){
	__ZN11CheerpXBase13createHudImplEv(Larg0);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX6SystemC1EvE3$_0JPN6client12MessageEventIPNS6_6ObjectEEEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a0;
	__ZN7CheerpX6System17handleCoreMessageEPN6client11CoreMessageE(tmp0,Larg1.data);
}
function __ZN7CheerpX6System17handleCoreMessageEPN6client11CoreMessageE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,tmp4=0,tmp5=0;
	if(((Larg1.type)|0)===3){
		tmp0=HEAP8.buffer;
		tmp1=new DataView(tmp0);
		tmp2=Larg1.vgaDevice;
		tmp0=HEAP8;
		tmp3=Larg1.vgaRamOffset;
		__ZN9VGAOutput10initializeEPhR9VGAShared(tmp0,tmp3,tmp1[tmp2]);
		tmp0="keydown";
		tmp1=[{a0:null}];
		tmp1[0].a0=Larg0;
		tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX6System17handleCoreMessageEPN6client11CoreMessageEE3$_0JPNS5_13KeyboardEventEEEEvPT_DpT0_,tmp1[0]);
		document.addEventListener(tmp0,tmp1);
		tmp0="keyup";
		tmp1=[{a0:null}];
		tmp1[0].a0=Larg0;
		tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX6System17handleCoreMessageEPN6client11CoreMessageEE3$_1JPNS5_13KeyboardEventEEEEvPT_DpT0_,tmp1[0]);
		document.addEventListener(tmp0,tmp1);
	}else if(((Larg1.type)|0)===4)__ZN9VGAOutput13setRenderModeE15VGA_RENDER_MODE(Larg1.value);
	else if(((Larg1.type)|0)===5){
		tmp2=Larg1.value;
		tmp0=__ZN9VGAOutput8instanceE;
		tmp0.i6=tmp2;
		__ZN9VGAOutput16updateCanvasSizeEv(tmp0);
	}else if(((Larg1.type)|0)===6){
		tmp2=Larg1.value;
		tmp0=__ZN9VGAOutput8instanceE;
		tmp0.i7=tmp2;
		__ZN9VGAOutput16updateCanvasSizeEv(tmp0);
	}else{
		tmp0={a0:null};
		if(((Larg1.type)|0)===10){
			tmp2=Larg1.devId;
			tmp3=Larg1.start;
			tmp4=Larg1.len;
			tmp5=Larg1.ioTransaction;
			__ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj(tmp0,Larg0,tmp2,tmp3,tmp4,tmp5,Larg1.value);
		}else if(((Larg1.type)|0)===11){
			tmp2=Larg1.devId;
			tmp3=Larg1.start;
			tmp4=Larg1.len;
			tmp5=Larg1.ioTransaction;
			__ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj(tmp0,Larg0,tmp2,tmp3,tmp4,tmp5,Larg1.value);
		}else __ZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageE(Larg0,Larg1);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX6System17handleCoreMessageEPN6client11CoreMessageEE3$_0JPNS5_13KeyboardEventEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=Larg0.a0;
	a:{
		if(Larg1.ctrlKey)if(Larg1.shiftKey)break a;
		Larg1.preventDefault();
		tmp1={type:92,value: +Larg1.keyCode};
		tmp2=HEAP32;
		tmp3=tmp0.i7|0;
		tmp2[0+tmp3|0]=-2;
		tmp0.a6.postMessage(tmp1);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX6System17handleCoreMessageEPN6client11CoreMessageEE3$_1JPNS5_13KeyboardEventEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=Larg0.a0;
	a:{
		if(Larg1.ctrlKey)if(Larg1.shiftKey)break a;
		Larg1.preventDefault();
		tmp1={type:93,value: +Larg1.keyCode};
		tmp2=HEAP32;
		tmp3=tmp0.i7|0;
		tmp2[0+tmp3|0]=-2;
		tmp0.a6.postMessage(tmp1);
	}
}
function __ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null,tmp4=0,L$poptgepsqueezed18=null;
	tmp1=create__ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj$pFrame({a0:null,a1:null,a2:tmp1={i0:0},a3:tmp1={a0:nullArray,a0o:0},i4:0,a5:new Uint8Array(2),a6:null,i7:0}).a;
	tmp2=tmp1[0];
	tmp2.a0=__ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj$presume;
	tmp2.a1=__ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj$pdestroy;
	tmp2.i7=Larg5;
	tmp2.a6=Larg1;
	tmp3=tmp2.a2.a[tmp2.a2.o-1];
	Larg0.a0=tmp3;
	if((Larg2|0)!==0){
		tmp3=__ZN11CheerpXBase7devicesE.a1;
		tmp4=__ZN11CheerpXBase7devicesE.a1o|0;
		L$poptgepsqueezed18=__ZN11CheerpXBase7devicesE.a0;
		tmp0=__ZN11CheerpXBase7devicesE.a0o|0;
		if((__imul(tmp4,4))-(__imul(tmp0,4))>>2>>>0>=Larg2>>>0){
			tmp3=L$poptgepsqueezed18[tmp0+(Larg2-1|0)|0];
			if((tmp3.i2|0)===(Larg2|0)){
				if((tmp3.i1|0)===1){
					L$poptgepsqueezed18=tmp2.a3;
					tmp3.a0.a6(L$poptgepsqueezed18,tmp3,Larg1,Larg3,Larg4,HEAP8,Larg6);
					tmp3=L$poptgepsqueezed18.a0;
					tmp4=L$poptgepsqueezed18.a0o|0;
					a:{
						if(tmp3!==nullArray||tmp4!==0)if(tmp3[tmp4].a0!==null){
							tmp2.i4=0;
							tmp2=tmp3[tmp4].a[tmp3[tmp4].o- -1];
							tmp2.a0=tmp1;
							tmp2.a0o=0;
							break a;
						}
						tmp3=L$poptgepsqueezed18.a0;
						tmp4=L$poptgepsqueezed18.a0o|0;
						if(tmp3!==nullArray||tmp4!==0)tmp3[tmp4].a1(tmp3,tmp4);
						tmp3=tmp2.a6;
						tmp2={type:12,ioTransaction:(tmp2.i7|0)};
						tmp1=HEAP32;
						tmp4=tmp3.i7|0;
						tmp1[0+tmp4|0]=-2;
						tmp3.a6.postMessage(tmp2);
					}
					return;
				}
				___assert_fail(_$pstr$p45$p65,0,_$pstr$p1$p35,0,649,___func__$p_ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj,0);
				;
			}
			___assert_fail(_$pstr$p2$p64,0,_$pstr$p1$p35,0,17,___func__$p_ZN11CheerpXBase13getDeviceByIdEj,0);
			;
		}
	}
	___assert_fail(_$pstr$p63,0,_$pstr$p1$p35,0,15,___func__$p_ZN11CheerpXBase13getDeviceByIdEj,0);
	;
}
function __ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null,tmp4=0,L$poptgepsqueezed18=null;
	tmp1=create__ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj$pFrame({a0:null,a1:null,a2:tmp1={i0:0},a3:tmp1={a0:nullArray,a0o:0},i4:0,a5:new Uint8Array(2),a6:null,i7:0}).a;
	tmp2=tmp1[0];
	tmp2.a0=__ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj$presume;
	tmp2.a1=__ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj$pdestroy;
	tmp2.i7=Larg5;
	tmp2.a6=Larg1;
	tmp3=tmp2.a2.a[tmp2.a2.o-1];
	Larg0.a0=tmp3;
	if((Larg2|0)!==0){
		tmp3=__ZN11CheerpXBase7devicesE.a1;
		tmp4=__ZN11CheerpXBase7devicesE.a1o|0;
		L$poptgepsqueezed18=__ZN11CheerpXBase7devicesE.a0;
		tmp0=__ZN11CheerpXBase7devicesE.a0o|0;
		if((__imul(tmp4,4))-(__imul(tmp0,4))>>2>>>0>=Larg2>>>0){
			tmp3=L$poptgepsqueezed18[tmp0+(Larg2-1|0)|0];
			if((tmp3.i2|0)===(Larg2|0)){
				if((tmp3.i1|0)===1){
					L$poptgepsqueezed18=tmp2.a3;
					tmp3.a0.a7(L$poptgepsqueezed18,tmp3,Larg1,Larg3,Larg4,HEAP8,Larg6);
					tmp3=L$poptgepsqueezed18.a0;
					tmp4=L$poptgepsqueezed18.a0o|0;
					a:{
						if(tmp3!==nullArray||tmp4!==0)if(tmp3[tmp4].a0!==null){
							tmp2.i4=0;
							tmp2=tmp3[tmp4].a[tmp3[tmp4].o- -1];
							tmp2.a0=tmp1;
							tmp2.a0o=0;
							break a;
						}
						tmp3=L$poptgepsqueezed18.a0;
						tmp4=L$poptgepsqueezed18.a0o|0;
						if(tmp3!==nullArray||tmp4!==0)tmp3[tmp4].a1(tmp3,tmp4);
						tmp3=tmp2.a6;
						tmp2={type:12,ioTransaction:(tmp2.i7|0)};
						tmp1=HEAP32;
						tmp4=tmp3.i7|0;
						tmp1[0+tmp4|0]=-2;
						tmp3.a6.postMessage(tmp2);
					}
					return;
				}
				___assert_fail(_$pstr$p45$p65,0,_$pstr$p1$p35,0,660,___func__$p_ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj,0);
				;
			}
			___assert_fail(_$pstr$p2$p64,0,_$pstr$p1$p35,0,17,___func__$p_ZN11CheerpXBase13getDeviceByIdEj,0);
			;
		}
	}
	___assert_fail(_$pstr$p63,0,_$pstr$p1$p35,0,15,___func__$p_ZN11CheerpXBase13getDeviceByIdEj,0);
	;
}
function __ZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageE(Larg0,Larg1){
	var tmp0=null,tmp1=null,L$poptgep11$poptgep$poptgepsqueezed=null,L$poptgepsqueezed65=null,tmp4=0,tmp5=0,tmp6=null,tmp7=null,L$poptgepsqueezed54=null,L$poptgepsqueezed67=null,tmp10=0,tmp11=0,Lgeptoindexphi=0;
	L$poptgep11$poptgep$poptgepsqueezed={a0:null};
	a:if(((Larg1.type)|0)!==0){
		if(((Larg1.type)|0)===1){
			L$poptgepsqueezed65="cxcore-no-return-call.js";
			__ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE(L$poptgep11$poptgep$poptgepsqueezed,Larg0,L$poptgepsqueezed65,40);
		}else if(((Larg1.type)|0)===40){
			L$poptgep11$poptgep$poptgepsqueezed="CheerpX initialization failed: ";
			L$poptgep11$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.concat(Larg1.value);
			Larg0.a4(L$poptgep11$poptgep$poptgepsqueezed);
			Larg0.a4=null;
		}else{
			L$poptgep11$poptgep$poptgepsqueezed=[null];
			if(((Larg1.type)|0)===47){
				tmp4=Larg1.start;
				tmp5=Larg1.len;
				L$poptgepsqueezed65=HEAP8.subarray((+(tmp4>>>0)),(+(tmp5+tmp4>>>0)));
				tmp4=Larg1.replyType;
				if((Larg0.i8&255)!==0)L$poptgepsqueezed65=new Uint8Array(L$poptgepsqueezed65);
				L$poptgep11$poptgep$poptgepsqueezed[0]=L$poptgepsqueezed65;
				tmp6=WebAssembly.compile(L$poptgepsqueezed65);
				tmp7=[{a0:null,i1:0,a2:null}];
				tmp7[0].a0=Larg0;
				tmp7[0].i1=tmp4;
				tmp7[0].a2=L$poptgepsqueezed65;
				tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEE3$_2JPNS4_6ObjectEEEEvPT_DpT0_,tmp7[0]);
				L$poptgepsqueezed54=[{a0:null,a1:null}];
				L$poptgepsqueezed54[0].a0=Larg0;
				L$poptgepsqueezed54[0].a1=L$poptgepsqueezed65;
				L$poptgepsqueezed54=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEE3$_3JPNS4_6StringEEEEvPT_DpT0_,L$poptgepsqueezed54[0]);
				tmp6.then(tmp7,L$poptgepsqueezed54);
				L$poptgep11$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed[0];
			}else if(((Larg1.type)|0)===14){
				L$poptgepsqueezed65=HEAP32;
				tmp4=Larg1.intWrapper;
				L$poptgep11$poptgep$poptgepsqueezed[0]={d:L$poptgepsqueezed65,o:tmp4>>>2};
				tmp6=[null];
				tmp7=Larg1.statName;
				tmp6[0]=tmp7;
				L$poptgepsqueezed54=[0];
				tmp5=Larg1.statType;
				L$poptgepsqueezed54[0]=tmp5;
				L$poptgepsqueezed67=Larg0.a24;
				tmp0=L$poptgepsqueezed67.a1;
				tmp10=L$poptgepsqueezed67.a1o|0;
				tmp1=L$poptgepsqueezed67.a2.a0;
				tmp11=L$poptgepsqueezed67.a2.a0o|0;
				if(tmp10<tmp11){
					__ZN13HudGlobalStatC2EPN6client7ElementEPNS0_6StringEPj13HUD_STAT_TYPE(tmp0[tmp10],Larg0.a11[0],tmp7,L$poptgepsqueezed65,tmp4>>>2,tmp5);
					L$poptgepsqueezed67.a1=tmp0;
					L$poptgepsqueezed67.a1o=tmp10+1|0;
				}else __ZNSt6vectorI13HudGlobalStatSaIS0_EE24__emplace_back_slow_pathIJRPN6client7ElementEPNS4_6StringERPj13HUD_STAT_TYPEEEEvDpOT_(L$poptgepsqueezed67,Larg0.a11,0,tmp6,0,L$poptgep11$poptgep$poptgepsqueezed,0,L$poptgepsqueezed54,0);
			}else if(((Larg1.type)|0)===25){
				L$poptgepsqueezed65={i0:0,i1:0,a2:null,i3:0};
				tmp4=Larg1.ctxType;
				tmp5=Larg1.value;
				__ZN11CheerpXBase11ContextDataC2E12CONTEXT_TYPEj9DBG_STATE(L$poptgepsqueezed65,tmp4,tmp5,Larg1.dbgState);
				L$poptgep11$poptgep$poptgepsqueezed[0]=L$poptgepsqueezed65;
				__ZNSt6vectorIPN11CheerpXBase11ContextDataESaIS2_EE9push_backB7v160000ERKS2_(Larg0.a25,L$poptgep11$poptgep$poptgepsqueezed,0);
				__ZN11CheerpXBase14updateContextsEv(Larg0);
			}else if(((Larg1.type)|0)===46){
				L$poptgep11$poptgep$poptgepsqueezed={i0:0,i1:0,a2:null,i3:0};
				tmp4=Larg1.ctxType;
				tmp5=Larg1.value;
				__ZN11CheerpXBase11ContextDataC2E12CONTEXT_TYPEj9DBG_STATE(L$poptgep11$poptgep$poptgepsqueezed,tmp4,tmp5,Larg1.dbgState);
				L$poptgep11$poptgep$poptgepsqueezed={a0:nullArray,a0o:0};
				L$poptgepsqueezed65=Larg0.a25;
				tmp6=L$poptgepsqueezed65.a0;
				tmp4=L$poptgepsqueezed65.a0o|0;
				tmp7=L$poptgepsqueezed65.a1;
				tmp5=L$poptgepsqueezed65.a1o|0;
				L$poptgepsqueezed54={a0:nullArray,a0o:0};
				L$poptgepsqueezed54.a0=tmp6;
				L$poptgepsqueezed54.a0o=tmp4;
				tmp6={a0:nullArray,a0o:0};
				tmp6.a0=tmp7;
				tmp6.a0o=tmp5;
				__ZSt9remove_ifB7v160000ISt11__wrap_iterIPPN11CheerpXBase11ContextDataEEZNS1_21handleCoreMessageBaseEPN6client11CoreMessageEE3$_0ET_SA_SA_T0_(L$poptgep11$poptgep$poptgepsqueezed,L$poptgepsqueezed54,tmp6,Larg1);
				tmp6=L$poptgepsqueezed65.a1;
				tmp4=L$poptgepsqueezed65.a1o|0;
				tmp7=L$poptgep11$poptgep$poptgepsqueezed.a0;
				tmp5=L$poptgep11$poptgep$poptgepsqueezed.a0o|0;
				if(tmp7!==tmp6||tmp5!==tmp4){
					L$poptgepsqueezed54={a0:nullArray,a0o:0};
					L$poptgepsqueezed54.a0=tmp7;
					L$poptgepsqueezed54.a0o=tmp5;
					tmp7={a0:nullArray,a0o:0};
					tmp7.a0=tmp6;
					tmp7.a0o=tmp4;
					__ZNSt6vectorIPN11CheerpXBase11ContextDataESaIS2_EE5eraseESt11__wrap_iterIPKS2_ES8_(L$poptgep11$poptgep$poptgepsqueezed,L$poptgepsqueezed65,L$poptgepsqueezed54,tmp7);
					__ZN11CheerpXBase14updateContextsEv(Larg0);
				}
			}else if(((Larg1.type)|0)===26){
				tmp4=Larg1.ctxType;
				tmp5=Larg1.value;
				L$poptgep11$poptgep$poptgepsqueezed=Larg0.a25;
				L$poptgepsqueezed65=L$poptgep11$poptgep$poptgepsqueezed.a0;
				tmp10=L$poptgep11$poptgep$poptgepsqueezed.a0o|0;
				tmp6=L$poptgep11$poptgep$poptgepsqueezed.a1;
				tmp11=L$poptgep11$poptgep$poptgepsqueezed.a1o|0;
				if(L$poptgepsqueezed65!==tmp6||tmp10!==tmp11){
					Lgeptoindexphi=0;
					while(1){
						L$poptgep11$poptgep$poptgepsqueezed=L$poptgepsqueezed65[tmp10+Lgeptoindexphi|0];
						if((L$poptgep11$poptgep$poptgepsqueezed.i0|0)===(tmp4|0))if((L$poptgep11$poptgep$poptgepsqueezed.i1|0)===(tmp5|0)){
							L$poptgep11$poptgep$poptgepsqueezed.i3=Larg1.dbgState;
							__ZN11CheerpXBase13selectContextEPKNS_11ContextDataE(Larg0,Larg0.a26);
							break a;
						}
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if(L$poptgepsqueezed65!==tmp6||(tmp10+Lgeptoindexphi|0)!==tmp11)continue;
						break;
					}
				}
			}else if(((Larg1.type)|0)===32){
				L$poptgep11$poptgep$poptgepsqueezed=Larg0.a20;
				L$poptgepsqueezed65=Larg1.text;
				L$poptgep11$poptgep$poptgepsqueezed.textContent=L$poptgepsqueezed65;
			}else if(((Larg1.type)|0)===78){
				L$poptgep11$poptgep$poptgepsqueezed=String();
				L$poptgepsqueezed65=Larg1.traces;
				if(((L$poptgepsqueezed65.length)|0)>0){
					tmp4=0;
					while(1){
						L$poptgep11$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.concat(new Number((+(L$poptgepsqueezed65[0+tmp4|0]>>>0))).toString(16));
						L$poptgep11$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.concat("\n");
						tmp4=tmp4+1|0;
						if((tmp4|0)<((L$poptgepsqueezed65.length)|0))continue;
						break;
					}
				}
				L$poptgep11$poptgep$poptgepsqueezed=L$poptgep11$poptgep$poptgepsqueezed.trim();
				Larg0.a21.value=L$poptgep11$poptgep$poptgepsqueezed;
			}else if(((Larg1.type)|0)===42){
				L$poptgep11$poptgep$poptgepsqueezed=Larg1.path;
				Larg1.value;
				L$poptgepsqueezed65="a";
				tmp7=document.createElement(L$poptgepsqueezed65);
				L$poptgepsqueezed65="href";
				tmp7.setAttribute(L$poptgepsqueezed65,L$poptgep11$poptgep$poptgepsqueezed);
				L$poptgepsqueezed65="download";
				tmp6=Larg1.value;
				tmp7.setAttribute(L$poptgepsqueezed65,tmp6);
				tmp7.click();
				URL.revokeObjectURL(L$poptgep11$poptgep$poptgepsqueezed);
			}else debugger;
		}
	}else{
		L$poptgepsqueezed65=Larg1.buffer;
		HEAP8=new Uint8Array(L$poptgepsqueezed65);
		L$poptgepsqueezed65=Larg1.buffer;
		HEAP16=new Uint16Array(L$poptgepsqueezed65);
		L$poptgepsqueezed65=Larg1.buffer;
		HEAP32=new Int32Array(L$poptgepsqueezed65);
		try{new WebAssembly.Module(HEAP8.subarray(0, 0))}catch(e){if(e.message=='first argument must be an ArrayBuffer or typed array object')HEAP8[0]=1;};
		L$poptgepsqueezed65=HEAP8;
		if((L$poptgepsqueezed65[0]&255)!==0){
			Larg0.i8=1;
			L$poptgepsqueezed65[0]=0;
		}
		Larg0.i7=(Larg1.asyncPtrOffset)>>>2;
		if( +Larg1.startRealTime>=0){
			L$poptgep11$poptgep$poptgepsqueezed={a0:null,a1:null};
			L$poptgep11$poptgep$poptgepsqueezed.a0=Larg0;
			L$poptgep11$poptgep$poptgepsqueezed.a1=Larg1;
			L$poptgepsqueezed65=new constructor__ZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEv$pFrame().a;
			tmp6=L$poptgepsqueezed65[0];
			tmp6.a0=__ZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEv$presume;
			tmp6.a1=__ZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEv$pdestroy;
			tmp6.a8=Larg0;
			tmp6.a7=L$poptgep11$poptgep$poptgepsqueezed;
			tmp7=__Z13getCheerpXUrlv();
			tmp6.a9=tmp7;
			tmp7=tmp7.concat("workerclock.js");
			tmp6.a10=tmp7;
			L$poptgepsqueezed67=fetch(tmp7);
			tmp6.a11=L$poptgepsqueezed67;
			L$poptgepsqueezed54=tmp6.a3;
			L$poptgepsqueezed54.a0=L$poptgepsqueezed67;
			tmp6.i5=0;
			tmp6=new Uint8Array(1);
			tmp6[0]=0;
			L$poptgepsqueezed54.a2=tmp6;
			tmp7=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
			tmp7[0].a0=L$poptgepsqueezed54;
			tmp7[0].a1.a0=L$poptgepsqueezed65;
			tmp7[0].a1.a0o=0;
			tmp7[0].a2=tmp6;
			L$poptgepsqueezed54=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client8ResponseEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp7[0]);
			L$poptgepsqueezed67.then(L$poptgepsqueezed54);
		}else __ZN11CheerpXBase16cheerpOsInitImplEv(L$poptgep11$poptgep$poptgepsqueezed,Larg0);
	}
}
function __ZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEv$presume(Larg0,Marg0){
	var tmp0=null,tmp1=null,L$poptgepsqueezed20=null,L$poptgep$poptgep3$poptgepsqueezed=null,tmp4=null,tmp5=0,tmp6=null,tmp7=null;
	L$poptgepsqueezed20=Larg0[Marg0].a4;
	if(Larg0[Marg0].i5|0){
		L$poptgep$poptgep3$poptgepsqueezed=L$poptgepsqueezed20.a1;
		L$poptgepsqueezed20=L$poptgepsqueezed20.a2;
		if(L$poptgepsqueezed20!==nullArray||0!==0)L$poptgepsqueezed20[0]=1;
		L$poptgepsqueezed20=Larg0[Marg0].a9;
		tmp4="isolated-app://";
		tmp5=L$poptgepsqueezed20.indexOf(tmp4);
		if((tmp5|0)>-1)L$poptgepsqueezed20="workerclock.js";
		else{
			L$poptgep$poptgep3$poptgepsqueezed=new Blob(new Array(L$poptgep$poptgep3$poptgepsqueezed));
			L$poptgepsqueezed20=URL.createObjectURL(L$poptgep$poptgep3$poptgepsqueezed);
		}
		L$poptgep$poptgep3$poptgepsqueezed=Larg0[Marg0].a8;
		tmp4=Larg0[Marg0].a7;
		tmp6=new Worker(L$poptgepsqueezed20);
		L$poptgepsqueezed20=new MessageChannel();
		tmp7=L$poptgepsqueezed20.port1;
		tmp0={type:86, value: tmp7};
		tmp1=L$poptgep$poptgep3$poptgepsqueezed.a6;
		tmp1.postMessage(tmp0,new Array(tmp7));
		tmp7=[{a0:null}];
		tmp7[0].a0=L$poptgep$poptgep3$poptgepsqueezed;
		tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEvEUlvE_JEEEvPT_DpT0_,tmp7[0]);
		tmp6.onmessage=tmp7;
		L$poptgepsqueezed20=L$poptgepsqueezed20.port2;
		L$poptgep$poptgep3$poptgepsqueezed=tmp4.a1.buffer;
		tmp5=tmp4.a1.asyncPtrOffset;
		L$poptgep$poptgep3$poptgepsqueezed={kind:1, buffer:L$poptgep$poptgep3$poptgepsqueezed, basePtr:tmp5, startRealTime: +tmp4.a1.startRealTime, port: L$poptgepsqueezed20};
		tmp6.postMessage(L$poptgep$poptgep3$poptgepsqueezed,new Array(L$poptgepsqueezed20));
	}else{
		L$poptgep$poptgep3$poptgepsqueezed=Larg0[Marg0].a3;
		tmp4=L$poptgep$poptgep3$poptgepsqueezed.a1;
		L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed.a2;
		if(L$poptgep$poptgep3$poptgepsqueezed!==nullArray||0!==0)L$poptgep$poptgep3$poptgepsqueezed[0]=1;
		L$poptgep$poptgep3$poptgepsqueezed=Larg0[Marg0].a10;
		L$poptgep$poptgep3$poptgepsqueezed=tmp4.text();
		Larg0[Marg0].a12=L$poptgep$poptgep3$poptgepsqueezed;
		L$poptgepsqueezed20.a0=L$poptgep$poptgep3$poptgepsqueezed;
		Larg0[Marg0].i5=1;
		tmp6=new Uint8Array(1);
		tmp6[0]=0;
		L$poptgepsqueezed20.a2=tmp6;
		tmp4=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		tmp4[0].a0=L$poptgepsqueezed20;
		tmp4[0].a1.a0=Larg0;
		tmp4[0].a1.a0o=Marg0;
		tmp4[0].a2=tmp6;
		tmp6=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client6StringEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp4[0]);
		L$poptgep$poptgep3$poptgepsqueezed.then(tmp6);
	}
}
function __ZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.i5|0){
		tmp0=Larg0.a4.a2;
		if(tmp0!==nullArray||0!==0)tmp0[0]=1;
	}else{
		tmp0=Larg0.a3.a2;
		if(tmp0!==nullArray||0!==0)tmp0[0]=1;
		tmp0=Larg0.a10;
	}
}
function __Z13getCheerpXUrlv(){
	var tmp0=0,tmp1=-0.,tmp2=0,tmp3=null,tmp4=null,Lsmax_select=0;
	tmp3=new Array();
	try{throw new Error();}catch(e){tmp3.push(e.stack);};
	tmp3=tmp3[0];
	console.log("stackStr = ",tmp3);
	tmp4="/cx_esm.js";
	tmp0=tmp3.indexOf(tmp4);
	console.log("cxStart = ",tmp0);
	if((tmp0|0)>0){
		tmp4="http:";
		tmp1=(+(tmp0|0));
		Lsmax_select=tmp3.lastIndexOf(tmp4,tmp1);
		tmp4="https:";
		tmp2=tmp3.lastIndexOf(tmp4,tmp1);
		Lsmax_select=(Lsmax_select|0)>(tmp2|0)?Lsmax_select|0:tmp2|0;
		if((Lsmax_select|0)<0){
			tmp4="chrome-extension:";
			Lsmax_select=tmp3.lastIndexOf(tmp4,tmp1);
			if((Lsmax_select|0)<0){
				tmp4="isolated-app:";
				Lsmax_select=tmp3.lastIndexOf(tmp4,tmp1);
			}
		}
		if((Lsmax_select|0)>0)return tmp3.substring((+(Lsmax_select|0)),(+(tmp0+1|0)));
		___assert_fail(_$pstr$p11$p40,0,_$pstr$p1$p35,0,130,___func__$p_Z13getCheerpXUrlv,0);
		;
	}
	___assert_fail(_$pstr$p6$p34,0,_$pstr$p1$p35,0,122,___func__$p_Z13getCheerpXUrlv,0);
	;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client8ResponseEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a2;
	if((tmp1[0]&255)===0){
		tmp1=Larg0.a0;
		tmp1.a1=Larg1;
		tmp1.a2=nullArray;
		tmp1=Larg0.a1.a0;
		tmp0=Larg0.a1.a0o|0;
		tmp1[tmp0].a0(tmp1,tmp0);
	}
}
function __ZN11CheerpXBase16cheerpOsInitImplEv(Larg0,Larg1){
	var tmp0=null,tmp1=null,L$poptgepsqueezed12=null,tmp3=null,tmp4=0;
	tmp0=create__ZN11CheerpXBase16cheerpOsInitImplEv$pFrame({a0:null,a1:null,a2:{i0:0},a3:tmp0={a0:nullArray,a0o:0},i4:0,a5:new Uint8Array(2),a6:null}).a;
	tmp1=tmp0[0];
	tmp1.a0=__ZN11CheerpXBase16cheerpOsInitImplEv$presume;
	tmp1.a1=__ZN11CheerpXBase16cheerpOsInitImplEv$pdestroy;
	tmp1.a6=Larg1;
	L$poptgepsqueezed12=tmp1.a2.a[tmp1.a2.o-1];
	Larg0.a0=L$poptgepsqueezed12;
	L$poptgepsqueezed12=tmp1.a3;
	Larg1.a0.a1(L$poptgepsqueezed12,Larg1);
	tmp3=L$poptgepsqueezed12.a0;
	tmp4=L$poptgepsqueezed12.a0o|0;
	a:{
		if(tmp3!==nullArray||tmp4!==0)if(tmp3[tmp4].a0!==null){
			tmp1.i4=0;
			tmp1=tmp3[tmp4].a[tmp3[tmp4].o- -1];
			tmp1.a0=tmp0;
			tmp1.a0o=0;
			break a;
		}
		tmp3=tmp3[tmp4].a[tmp3[tmp4].o- -1];
		tmp3=tmp3.a1.a1;
		tmp0=L$poptgepsqueezed12.a0;
		tmp4=L$poptgepsqueezed12.a0o|0;
		if(tmp0!==nullArray||tmp4!==0)tmp0[tmp4].a1(tmp0,tmp4);
		tmp0=tmp1.a6;
		if(tmp3!==null){
			tmp0.a3(tmp3);
			tmp0.a3=null;
		}else{
			tmp0=tmp0.a4;
			tmp1="CheerpX initialization failed";
			tmp0(tmp1);
		}
	}
}
function __ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed25=null;
	tmp0=new constructor__ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE$pFrame().a;
	tmp2=tmp0[0];
	tmp2.a0=__ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE$presume;
	tmp2.a1=__ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE$pdestroy;
	tmp2.i9=Larg3;
	tmp2.a8=Larg2;
	tmp2.a7=Larg1;
	tmp3=tmp2.a2.a[tmp2.a2.o-1];
	Larg0.a0=tmp3;
	tmp3=__Z13getCheerpXUrlv();
	tmp2.a10=tmp3;
	L$poptgepsqueezed25="isolated-app://";
	tmp2.i11=tmp3.indexOf(L$poptgepsqueezed25);
	tmp3=tmp3.concat(Larg2);
	tmp3=tmp3;
	tmp2.a12=tmp3;
	tmp1=fetch(tmp3);
	tmp2.a13=tmp1;
	L$poptgepsqueezed25=tmp2.a3;
	L$poptgepsqueezed25.a0=tmp1;
	tmp2.i5=0;
	tmp2=new Uint8Array(1);
	tmp2[0]=0;
	L$poptgepsqueezed25.a2=tmp2;
	tmp3=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
	tmp3[0].a0=L$poptgepsqueezed25;
	tmp3[0].a1.a0=tmp0;
	tmp3[0].a1.a0o=0;
	tmp3[0].a2=tmp2;
	L$poptgepsqueezed25=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client8ResponseEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp3[0]);
	tmp1.then(L$poptgepsqueezed25);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEE3$_2JPNS4_6ObjectEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=Larg0.a0;
	tmp3=Larg0.i1|0;
	tmp1={type:tmp3, wasmModule:Larg1};
	tmp2=HEAP32;
	if((tmp3|0)===48){
		tmp3=tmp0.i7|0;
		tmp2[0+(tmp3+5|0)|0]=2;
	}
	tmp3=tmp0.i7|0;
	tmp2[0+tmp3|0]=-2;
	tmp0.a6.postMessage(tmp1);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEE3$_3JPNS4_6StringEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=Larg0.a0;
	console.log(Larg1);
	tmp2=tmp0.a5;
	if(tmp2!==null)tmp2(Larg1);
	tmp2=new Blob(new Array(new Uint8Array(Larg0.a1)));
	tmp1=URL.createObjectURL(tmp2);
	__ZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageE(tmp0,{type:42, path:tmp1, value:"fail.wasm"});
}
function __ZN13HudGlobalStatC2EPN6client7ElementEPNS0_6StringEPj13HUD_STAT_TYPE(Larg0,Larg1,Larg2,Larg3,Marg3,Larg4){
	var tmp0=null,tmp1=null,tmp2=null;
	Larg0.a0=Larg2;
	Larg0.a1=Larg3;
	Larg0.a1o=Marg3;
	Larg0.i2=0;
	Larg0.i3=Larg4;
	Larg0.a4=null;
	tmp2="p";
	tmp0=document.createElement(tmp2);
	tmp2="span";
	tmp1=document.createElement(tmp2);
	tmp2=Larg0.a0;
	tmp2=tmp2.concat(": ");
	tmp1.textContent=tmp2;
	tmp0.appendChild(tmp1);
	tmp2="span";
	Larg0.a4=document.createElement(tmp2);
	tmp0.appendChild(Larg0.a4);
	Larg1.appendChild(tmp0);
}
function __ZNSt6vectorI13HudGlobalStatSaIS0_EE24__emplace_back_slow_pathIJRPN6client7ElementEPNS4_6StringERPj13HUD_STAT_TYPEEEEvDpOT_(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	var tmp0=null,tmp1=0,tmp2=0,L$poptgepsqueezed7=null,tmp4=0,L$poptgepsqueezed12=null,tmp6=0;
	tmp0={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp0={a0:null}}};
	L$poptgepsqueezed7=Larg0.a1;
	tmp4=Larg0.a1o|0;
	L$poptgepsqueezed12=Larg0.a0;
	tmp6=Larg0.a0o|0;
	tmp6=(__imul(tmp6,20));
	tmp4=((__imul(tmp4,20))-tmp6|0)/20|0;
	tmp1=tmp4+1|0;
	if(tmp1>>>0>214748364)_abort();
	;
	L$poptgepsqueezed12=Larg0.a2;
	L$poptgepsqueezed7=L$poptgepsqueezed12.a0;
	tmp2=L$poptgepsqueezed12.a0o|0;
	tmp6=((__imul(tmp2,20))-tmp6|0)/20|0;
	if(tmp6>>>0<107374182){
		tmp6<<=1;
		tmp6=tmp6>>>0>tmp1>>>0?tmp6|0:tmp1|0;
	}else{
		tmp6=214748364;
	}
	L$poptgepsqueezed7=tmp0.a3;
	L$poptgepsqueezed7.a1.a0=L$poptgepsqueezed12;
	if((tmp6|0)!==0)L$poptgepsqueezed12=createArray_struct$p_Z13HudGlobalStat((__imul(tmp6,20)|0)/20|0);
	else{
		L$poptgepsqueezed12=nullArray;
	}
	tmp0.a0=L$poptgepsqueezed12[0];
	tmp0.a1=L$poptgepsqueezed12;
	tmp0.a1o=0+tmp4|0;
	L$poptgepsqueezed7.a0=L$poptgepsqueezed12;
	L$poptgepsqueezed7.a0o=0+tmp6|0;
	L$poptgepsqueezed7=Larg3[Marg3];
	__ZN13HudGlobalStatC2EPN6client7ElementEPNS0_6StringEPj13HUD_STAT_TYPE(L$poptgepsqueezed12[tmp4],Larg1[Marg1],Larg2[Marg2],L$poptgepsqueezed7.d,L$poptgepsqueezed7.o,Larg4[Marg4]|0);
	tmp0.a2=L$poptgepsqueezed12;
	tmp0.a2o=(0+tmp4|0)+1|0;
	__ZNSt6vectorI13HudGlobalStatSaIS0_EE26__swap_out_circular_bufferERSt14__split_bufferIS0_RS1_E(Larg0,tmp0);
}
function __ZN11CheerpXBase11ContextDataC2E12CONTEXT_TYPEj9DBG_STATE(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null;
	Larg0.i0=Larg1;
	Larg0.i1=Larg2;
	Larg0.a2=null;
	Larg0.i3=Larg3;
	if((Larg1|0)!==0){
		if((Larg1|0)!==1)___assert_fail(_$pstr$p89,0,_$pstr$p90,0,64,___func__$p_ZN11CheerpXBase11ContextDataC2E12CONTEXT_TYPEj9DBG_STATE,0);
		;
		tmp0=_$pstr$p91;
	}else{
		tmp0=_$pstr$p88;
	}
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(tmp0,0);
	Larg0.a2=tmp0;
	Larg0.a2=tmp0.concat(Larg0.i1|0);
}
function __ZNSt6vectorIPN11CheerpXBase11ContextDataESaIS2_EE9push_backB7v160000ERKS2_(Larg0,Larg1,Marg1){
	var tmp0=null,tmp1=0,L$poptgepsqueezed7=null,tmp3=0,L$poptgepsqueezed11=null,tmp5=null,tmp6=0;
	L$poptgepsqueezed7=Larg0.a1;
	tmp3=Larg0.a1o|0;
	L$poptgepsqueezed11=Larg0.a2;
	tmp5=L$poptgepsqueezed11.a0;
	tmp6=L$poptgepsqueezed11.a0o|0;
	if(L$poptgepsqueezed7===tmp5&&tmp3===tmp6){
		tmp5={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp5={a0:null}}};
		tmp0=Larg0.a0;
		tmp6=Larg0.a0o|0;
		tmp3=(__imul(tmp3,4))-(__imul(tmp6,4))|0;
		tmp1=tmp3>>2;
		tmp6=tmp1+1|0;
		if(tmp6>>>0>1073741823)_abort();
		;
		if(tmp3>>>0<2147483644){
			tmp3>>>=1;
			tmp3=tmp3>>>0>tmp6>>>0?tmp3|0:tmp6|0;
		}else{
			tmp3=1073741823;
		}
		L$poptgepsqueezed7=tmp5.a3;
		L$poptgepsqueezed7.a1.a0=L$poptgepsqueezed11;
		if((tmp3|0)!==0)L$poptgepsqueezed11=createPointerArray([],0,(tmp3<<2)/4|0,null);
		else{
			L$poptgepsqueezed11=nullArray;
		}
		tmp5.a0=L$poptgepsqueezed11[0];
		tmp5.a1=L$poptgepsqueezed11;
		tmp5.a1o=0+tmp1|0;
		L$poptgepsqueezed7.a0=L$poptgepsqueezed11;
		L$poptgepsqueezed7.a0o=0+tmp3|0;
		L$poptgepsqueezed11[tmp1]=Larg1[Marg1];
		tmp5.a2=L$poptgepsqueezed11;
		tmp5.a2o=(0+tmp1|0)+1|0;
		__ZNSt6vectorIPN11CheerpXBase11ContextDataESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,tmp5);
	}else{
		L$poptgepsqueezed7[tmp3]=Larg1[Marg1];
		Larg0.a1=L$poptgepsqueezed7;
		Larg0.a1o=tmp3+1|0;
	}
}
function __ZN11CheerpXBase14updateContextsEv(Larg0){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=null,L$poptgep$poptgep3$poptgepsqueezed=null,tmp6=null,tmp7=null,tmp8=null,tmp9=null,Lgeptoindexphi=0;
	L$poptgep$poptgep3$poptgepsqueezed=Larg0.a14;
	if(L$poptgep$poptgep3$poptgepsqueezed!==null){
		L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed.firstChild;
		if(L$poptgep$poptgep3$poptgepsqueezed!==null)while(1){
			if(L$poptgep$poptgep3$poptgepsqueezed!==null){
				Larg0.a14.removeChild(L$poptgep$poptgep3$poptgepsqueezed);
				L$poptgep$poptgep3$poptgepsqueezed=Larg0.a14.firstChild;
				if(L$poptgep$poptgep3$poptgepsqueezed!==null)continue;
			}
			break;
		}
		L$poptgep$poptgep3$poptgepsqueezed=Larg0.a14;
		tmp6="<none>";
		tmp7="";
		tmp8="option";
		tmp9=document.createElement(tmp8);
		tmp9.textContent=tmp6;
		tmp9.value=tmp7;
		L$poptgep$poptgep3$poptgepsqueezed.appendChild(tmp9);
		L$poptgep$poptgep3$poptgepsqueezed=Larg0.a25;
		tmp0=L$poptgep$poptgep3$poptgepsqueezed.a0;
		tmp1=L$poptgep$poptgep3$poptgepsqueezed.a0o|0;
		tmp2=L$poptgep$poptgep3$poptgepsqueezed.a1;
		tmp3=L$poptgep$poptgep3$poptgepsqueezed.a1o|0;
		if(tmp0!==tmp2||tmp1!==tmp3){
			Lgeptoindexphi=0;
			while(1){
				tmp9=tmp0[tmp1+Lgeptoindexphi|0];
				tmp4=tmp9.a2;
				tmp6="option";
				tmp8=document.createElement(tmp6);
				tmp8.textContent=tmp4;
				tmp8.value=tmp4;
				Larg0.a14.appendChild(tmp8);
				L$poptgep$poptgep3$poptgepsqueezed="cxLastCtx";
				tmp6=localStorage.getItem(L$poptgep$poptgep3$poptgepsqueezed);
				tmp7=tmp9.a2;
				if(tmp6===tmp7){
					tmp8.selected=1;
					__ZN11CheerpXBase13selectContextEPKNS_11ContextDataE(Larg0,tmp9);
				}
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(tmp0!==tmp2||(tmp1+Lgeptoindexphi|0)!==tmp3){
					tmp6=tmp4;
					continue;
				}
				break;
			}
		}
	}
}
function __ZSt9remove_ifB7v160000ISt11__wrap_iterIPPN11CheerpXBase11ContextDataEEZNS1_21handleCoreMessageBaseEPN6client11CoreMessageEE3$_0ET_SA_SA_T0_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,Lgeptoindexphi=0,tmp5=null,Lgeptoindex6=0,tmp7=0;
	tmp0=Larg1.a0;
	tmp1=Larg1.a0o|0;
	tmp2=Larg2.a0;
	tmp3=Larg2.a0o|0;
	if(tmp0!==tmp2||tmp1!==tmp3){
		Lgeptoindexphi=0;
		while(1){
			tmp5=tmp0[tmp1+Lgeptoindexphi|0];
			Lgeptoindex6=tmp5.i0|0;
			if((Lgeptoindex6|0)===((Larg3.ctxType)|0)){
				Lgeptoindex6=tmp5.i1|0;
				if((Lgeptoindex6|0)===((Larg3.value)|0)){
					Larg1.a0=tmp0;
					Larg1.a0o=tmp1+Lgeptoindexphi|0;
					if(tmp0===tmp2&&(tmp1+Lgeptoindexphi|0)===tmp3){
						Larg0.a0=tmp2;
						Larg0.a0o=tmp3;
						return;
					}
					Lgeptoindex6=Lgeptoindexphi+1|0;
					if(tmp0!==tmp2||(tmp1+Lgeptoindex6|0)!==tmp3)while(1){
						tmp5=tmp0[tmp1+Lgeptoindex6|0];
						tmp7=tmp5.i0|0;
						a:{
							if((tmp7|0)===((Larg3.ctxType)|0)){
								tmp7=tmp5.i1|0;
								if((tmp7|0)===((Larg3.value)|0))break a;
							}
							tmp0[tmp1+Lgeptoindexphi|0]=tmp0[tmp1+Lgeptoindex6|0];
							Lgeptoindexphi=Lgeptoindexphi+1|0;
						}
						Lgeptoindex6=Lgeptoindex6+1|0;
						if(tmp0!==tmp2||(tmp1+Lgeptoindex6|0)!==tmp3)continue;
						break;
					}
					Larg1.a0=tmp0;
					Larg1.a0o=tmp1+Lgeptoindexphi|0;
					Larg0.a0=tmp0;
					Larg0.a0o=tmp1+Lgeptoindexphi|0;
					return;
				}
			}
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if(tmp0!==tmp2||(tmp1+Lgeptoindexphi|0)!==tmp3)continue;
			break;
		}
	}
	Larg1.a0=tmp2;
	Larg1.a0o=tmp3;
	Larg0.a0=tmp2;
	Larg0.a0o=tmp3;
}
function __ZNSt6vectorIPN11CheerpXBase11ContextDataESaIS2_EE5eraseESt11__wrap_iterIPKS2_ES8_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=null,tmp4=null,tmp5=0,Lgeptoindexphi5=0,Lgeptoindex22=0,Lxtraiter=0,Lgeptoindex2=0,tmp10=0,Lprol$piter=0;
	tmp0=Larg1.a0;
	tmp1=Larg1.a0o|0;
	tmp4=Larg2.a0;
	tmp5=Larg2.a0o|0;
	Lgeptoindexphi5=(__imul(tmp5,4));
	tmp2=Lgeptoindexphi5-(__imul(tmp1,4))>>2;
	tmp3=Larg3.a0;
	Lgeptoindex22=Larg3.a0o|0;
	if(tmp4!==tmp3||tmp5!==Lgeptoindex22){
		Lxtraiter=(__imul(Lgeptoindex22,4))-Lgeptoindexphi5|0;
		Lgeptoindex2=tmp2+(Lxtraiter>>2)|0;
		tmp4=Larg1.a1;
		tmp5=Larg1.a1o|0;
		tmp5=(__imul(tmp5,4))-(__imul(tmp1+Lgeptoindex2|0,4))|0;
		if(tmp5>>>0>=4){
			Lgeptoindexphi5=tmp5>>>2;
			Lgeptoindex22=tmp2+Lgeptoindexphi5|0;
			if((Lxtraiter|0)<0){
				Lgeptoindexphi5=Lgeptoindex2+Lgeptoindexphi5|0;
				tmp10=tmp5-4|0;
				Lxtraiter=(tmp10>>>2)+1&3;
				if((Lxtraiter|0)!==0){
					Lgeptoindex2=0;
					while(1){
						Lgeptoindexphi5=Lgeptoindexphi5-1|0;
						Lgeptoindex22=Lgeptoindex22-1|0;
						tmp0[tmp1+Lgeptoindex22|0]=tmp0[tmp1+Lgeptoindexphi5|0];
						Lgeptoindex2=Lgeptoindex2+1|0;
						if((Lgeptoindex2|0)!==(Lxtraiter|0))continue;
						break;
					}
				}
				if(tmp10>>>0>=12)while(1){
					tmp0[(tmp1+Lgeptoindex22|0)+ -1|0]=tmp0[(tmp1+Lgeptoindexphi5|0)+ -1|0];
					tmp0[(tmp1+Lgeptoindex22|0)+ -2|0]=tmp0[(tmp1+Lgeptoindexphi5|0)+ -2|0];
					tmp0[(tmp1+Lgeptoindex22|0)+ -3|0]=tmp0[(tmp1+Lgeptoindexphi5|0)+ -3|0];
					Lgeptoindexphi5=Lgeptoindexphi5-4|0;
					Lgeptoindex22=Lgeptoindex22-4|0;
					tmp0[tmp1+Lgeptoindex22|0]=tmp0[tmp1+Lgeptoindexphi5|0];
					if(tmp0!==tmp0||(tmp1+tmp2|0)!==(tmp1+Lgeptoindex22|0))continue;
					break;
				}
			}else{
				tmp10=tmp5-4|0;
				Lxtraiter=(tmp10>>>2)+1&7;
				if((Lxtraiter|0)!==0){
					Lgeptoindexphi5=tmp2;
					Lprol$piter=0;
					while(1){
						tmp0[tmp1+Lgeptoindexphi5|0]=tmp0[tmp1+Lgeptoindex2|0];
						Lprol$piter=Lprol$piter+1|0;
						Lgeptoindexphi5=Lgeptoindexphi5+1|0;
						Lgeptoindex2=Lgeptoindex2+1|0;
						if((Lprol$piter|0)!==(Lxtraiter|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi5=tmp2;
				}
				if(tmp10>>>0>=28)while(1){
					tmp0[tmp1+Lgeptoindexphi5|0]=tmp0[tmp1+Lgeptoindex2|0];
					tmp0[(tmp1+Lgeptoindexphi5|0)+1|0]=tmp0[(tmp1+Lgeptoindex2|0)+1|0];
					tmp0[(tmp1+Lgeptoindexphi5|0)+2|0]=tmp0[(tmp1+Lgeptoindex2|0)+2|0];
					tmp0[(tmp1+Lgeptoindexphi5|0)+3|0]=tmp0[(tmp1+Lgeptoindex2|0)+3|0];
					tmp0[(tmp1+Lgeptoindexphi5|0)+4|0]=tmp0[(tmp1+Lgeptoindex2|0)+4|0];
					tmp0[(tmp1+Lgeptoindexphi5|0)+5|0]=tmp0[(tmp1+Lgeptoindex2|0)+5|0];
					tmp0[(tmp1+Lgeptoindexphi5|0)+6|0]=tmp0[(tmp1+Lgeptoindex2|0)+6|0];
					tmp0[(tmp1+Lgeptoindexphi5|0)+7|0]=tmp0[(tmp1+Lgeptoindex2|0)+7|0];
					Lgeptoindexphi5=Lgeptoindexphi5+8|0;
					if(tmp0!==tmp0||(tmp1+Lgeptoindex22|0)!==(tmp1+Lgeptoindexphi5|0)){
						Lgeptoindex2=Lgeptoindex2+8|0;
						continue;
					}
					break;
				}
			}
		}
		Larg1.a1=tmp0;
		Larg1.a1o=(tmp1+tmp2|0)+(tmp5>>2)|0;
	}
	Larg0.a0=tmp0;
	Larg0.a0o=tmp1+tmp2|0;
}
function __ZN11CheerpXBase13selectContextEPKNS_11ContextDataE(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=null;
	Larg0.a26=Larg1;
	Larg0.a17.disabled=1;
	Larg0.a18.disabled=1;
	Larg0.a19.disabled=1;
	tmp1=Larg0.a20;
	tmp2="";
	tmp1.textContent=tmp2;
	if(Larg1!==null){
		Larg0.a21.disabled=0;
		Larg0.a22.disabled=0;
		tmp1="cxLastCtx";
		tmp2=Larg1.a2;
		localStorage.setItem(tmp1,tmp2);
		tmp0=Larg1.i3|0;
		if(tmp0>>>0<2){
			tmp1=Larg0.a15;
			if((tmp0|0)!==0){
				tmp2="Detach";
				tmp1.textContent=tmp2;
				Larg0.a15.disabled=0;
				Larg0.a17.disabled=0;
				Larg0.a18.disabled=0;
				Larg0.a19.disabled=0;
			}else{
				tmp2="Attach";
				tmp1.textContent=tmp2;
				Larg0.a15.disabled=0;
			}
		}else if((tmp0|0)===2){
			tmp1=Larg0.a15;
			tmp2="Stepping";
			tmp1.textContent=tmp2;
			Larg0.a15.disabled=1;
		}
	}else{
		tmp1=Larg0.a15;
		tmp2="Invalid";
		tmp1.textContent=tmp2;
		Larg0.a15.disabled=1;
		Larg0.a21.disabled=1;
		Larg0.a22.disabled=1;
	}
}
function __ZNSt6vectorIPN11CheerpXBase11ContextDataESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,Lgeptoindexphi=0,tmp5=0,Lgeptoindexphi3=0,Lgeptoindex18=0,tmp8=0,Lxtraiter=0,Lprol$piter=0;
	tmp2=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp3=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	Lgeptoindexphi=(__imul(Lgeptoindexphi,4))-(__imul(tmp0,4))|0;
	tmp3=Larg1.a1;
	tmp5=Larg1.a1o|0;
	tmp1=-(Lgeptoindexphi>>2)|0;
	if(Lgeptoindexphi>>>0>=4){
		Lgeptoindexphi3=Lgeptoindexphi>>>2;
		Lgeptoindex18=tmp1+Lgeptoindexphi3|0;
		if(tmp0<(tmp5+tmp1|0)){
			tmp8=Lgeptoindexphi-4|0;
			Lgeptoindexphi=(tmp8>>>2)+1&3;
			if((Lgeptoindexphi|0)!==0){
				Lxtraiter=0;
				while(1){
					Lgeptoindexphi3=Lgeptoindexphi3-1|0;
					Lgeptoindex18=Lgeptoindex18-1|0;
					tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0];
					Lxtraiter=Lxtraiter+1|0;
					if((Lxtraiter|0)!==(Lgeptoindexphi|0))continue;
					break;
				}
			}
			if(tmp8>>>0>=12)while(1){
				tmp3[(tmp5+Lgeptoindex18|0)+ -1|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -1|0];
				tmp3[(tmp5+Lgeptoindex18|0)+ -2|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -2|0];
				tmp3[(tmp5+Lgeptoindex18|0)+ -3|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -3|0];
				Lgeptoindexphi3=Lgeptoindexphi3-4|0;
				Lgeptoindex18=Lgeptoindex18-4|0;
				tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0];
				if(tmp3!==tmp3||(tmp5+tmp1|0)!==(tmp5+Lgeptoindex18|0))continue;
				break;
			}
		}else{
			tmp8=Lgeptoindexphi-4|0;
			Lxtraiter=(tmp8>>>2)+1&7;
			if((Lxtraiter|0)!==0){
				Lgeptoindexphi3=tmp1;
				Lprol$piter=0;
				Lgeptoindexphi=0;
				while(1){
					tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0];
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=tmp1;
				Lgeptoindexphi=0;
			}
			if(tmp8>>>0>=28)while(1){
				tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+1|0]=tmp2[(tmp0+Lgeptoindexphi|0)+1|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+2|0]=tmp2[(tmp0+Lgeptoindexphi|0)+2|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+3|0]=tmp2[(tmp0+Lgeptoindexphi|0)+3|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+4|0]=tmp2[(tmp0+Lgeptoindexphi|0)+4|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+5|0]=tmp2[(tmp0+Lgeptoindexphi|0)+5|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+6|0]=tmp2[(tmp0+Lgeptoindexphi|0)+6|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+7|0]=tmp2[(tmp0+Lgeptoindexphi|0)+7|0];
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp3!==tmp3||(tmp5+Lgeptoindex18|0)!==(tmp5+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
	}
	Larg1.a1=tmp3;
	Larg1.a1o=tmp5+(tmp1<<2>>2)|0;
	tmp2=Larg0.a0;
	Lgeptoindexphi=Larg0.a0o|0;
	Larg0.a0=tmp3;
	Larg0.a0o=tmp5+(tmp1<<2>>2)|0;
	Larg1.a1=tmp2;
	Larg1.a1o=Lgeptoindexphi;
	tmp2=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	tmp3=Larg1.a2;
	tmp5=Larg1.a2o|0;
	Larg0.a1=tmp3;
	Larg0.a1o=tmp5;
	Larg1.a2=tmp2;
	Larg1.a2o=Lgeptoindexphi;
	tmp2=Larg0.a2.a0;
	Lgeptoindexphi=Larg0.a2.a0o|0;
	tmp3=Larg1.a3.a0;
	tmp5=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp3;
	Larg0.a2.a0o=tmp5;
	Larg1.a3.a0=tmp2;
	Larg1.a3.a0o=Lgeptoindexphi;
	tmp2=Larg1.a1;
	Lgeptoindexphi=Larg1.a1o|0;
	Larg1.a0=tmp2[Lgeptoindexphi];
}
function __ZNSt6vectorI13HudGlobalStatSaIS0_EE26__swap_out_circular_bufferERSt14__split_bufferIS0_RS1_E(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=0,tmp3=0,tmp4=null,tmp5=null,Lgeptoindexphi11=0,tmp7=0,Lgeptoindex18=0,Lgeptoindexphi=0,Lgeptoindexphi1=0;
	tmp4=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp5=Larg0.a1;
	Lgeptoindexphi11=Larg0.a1o|0;
	Lgeptoindexphi11=(__imul(Lgeptoindexphi11,20))-(__imul(tmp0,20))|0;
	tmp1=Larg1.a1;
	tmp7=Larg1.a1o|0;
	tmp2=(Lgeptoindexphi11|0)/-20|0;
	if(Lgeptoindexphi11>>>0>=20){
		Lgeptoindexphi11=(Lgeptoindexphi11>>>0)/20|0;
		Lgeptoindex18=tmp2+Lgeptoindexphi11|0;
		if(tmp0<(tmp7+tmp2|0))while(1){
			Lgeptoindexphi=Lgeptoindexphi11-1|0;
			Lgeptoindexphi1=Lgeptoindex18-1|0;
			tmp1[tmp7+Lgeptoindexphi1|0].a0=tmp4[tmp0+Lgeptoindexphi|0].a0;
			tmp5=tmp4[(tmp0+Lgeptoindexphi11|0)+ -1|0].a1;
			tmp3=tmp4[(tmp0+Lgeptoindexphi11|0)+ -1|0].a1o|0;
			tmp1[(tmp7+Lgeptoindex18|0)+ -1|0].a1=tmp5;
			tmp1[(tmp7+Lgeptoindex18|0)+ -1|0].a1o=tmp3;
			tmp1[(tmp7+Lgeptoindex18|0)+ -1|0].i2=tmp4[(tmp0+Lgeptoindexphi11|0)+ -1|0].i2|0;
			tmp1[(tmp7+Lgeptoindex18|0)+ -1|0].i3=tmp4[(tmp0+Lgeptoindexphi11|0)+ -1|0].i3|0;
			tmp1[(tmp7+Lgeptoindex18|0)+ -1|0].a4=tmp4[(tmp0+Lgeptoindexphi11|0)+ -1|0].a4;
			if(tmp1!==tmp1||(tmp7+tmp2|0)!==(tmp7+Lgeptoindexphi1|0)){
				Lgeptoindexphi11=Lgeptoindexphi;
				Lgeptoindex18=Lgeptoindexphi1;
				continue;
			}
			break;
		}
		else{
			if((Lgeptoindexphi11&1|0)!==0){
				tmp1[tmp7+tmp2|0].a0=tmp4[tmp0].a0;
				tmp5=tmp4[tmp0].a1;
				Lgeptoindexphi=tmp4[tmp0].a1o|0;
				tmp1[tmp7+tmp2|0].a1=tmp5;
				tmp1[tmp7+tmp2|0].a1o=Lgeptoindexphi;
				tmp1[tmp7+tmp2|0].i2=tmp4[tmp0].i2|0;
				tmp1[tmp7+tmp2|0].i3=tmp4[tmp0].i3|0;
				tmp1[tmp7+tmp2|0].a4=tmp4[tmp0].a4;
				Lgeptoindexphi1=tmp2+1|0;
				Lgeptoindexphi=1;
			}else{
				Lgeptoindexphi1=tmp2;
				Lgeptoindexphi=0;
			}
			if((Lgeptoindexphi11+1073741823&1073741823|0)!==0)while(1){
				tmp1[tmp7+Lgeptoindexphi1|0].a0=tmp4[tmp0+Lgeptoindexphi|0].a0;
				tmp5=tmp4[tmp0+Lgeptoindexphi|0].a1;
				Lgeptoindexphi11=tmp4[tmp0+Lgeptoindexphi|0].a1o|0;
				tmp1[tmp7+Lgeptoindexphi1|0].a1=tmp5;
				tmp1[tmp7+Lgeptoindexphi1|0].a1o=Lgeptoindexphi11;
				tmp1[tmp7+Lgeptoindexphi1|0].i2=tmp4[tmp0+Lgeptoindexphi|0].i2|0;
				tmp1[tmp7+Lgeptoindexphi1|0].i3=tmp4[tmp0+Lgeptoindexphi|0].i3|0;
				tmp1[tmp7+Lgeptoindexphi1|0].a4=tmp4[tmp0+Lgeptoindexphi|0].a4;
				tmp1[(tmp7+Lgeptoindexphi1|0)+1|0].a0=tmp4[(tmp0+Lgeptoindexphi|0)+1|0].a0;
				tmp5=tmp4[(tmp0+Lgeptoindexphi|0)+1|0].a1;
				Lgeptoindexphi11=tmp4[(tmp0+Lgeptoindexphi|0)+1|0].a1o|0;
				tmp1[(tmp7+Lgeptoindexphi1|0)+1|0].a1=tmp5;
				tmp1[(tmp7+Lgeptoindexphi1|0)+1|0].a1o=Lgeptoindexphi11;
				tmp1[(tmp7+Lgeptoindexphi1|0)+1|0].i2=tmp4[(tmp0+Lgeptoindexphi|0)+1|0].i2|0;
				tmp1[(tmp7+Lgeptoindexphi1|0)+1|0].i3=tmp4[(tmp0+Lgeptoindexphi|0)+1|0].i3|0;
				tmp1[(tmp7+Lgeptoindexphi1|0)+1|0].a4=tmp4[(tmp0+Lgeptoindexphi|0)+1|0].a4;
				Lgeptoindexphi1=Lgeptoindexphi1+2|0;
				if(tmp1!==tmp1||(tmp7+Lgeptoindex18|0)!==(tmp7+Lgeptoindexphi1|0)){
					Lgeptoindexphi=Lgeptoindexphi+2|0;
					continue;
				}
				break;
			}
		}
	}
	Larg1.a1=tmp1;
	Larg1.a1o=tmp7+tmp2|0;
	tmp4=Larg0.a0;
	Lgeptoindexphi11=Larg0.a0o|0;
	Larg0.a0=tmp1;
	Larg0.a0o=tmp7+tmp2|0;
	Larg1.a1=tmp4;
	Larg1.a1o=Lgeptoindexphi11;
	tmp4=Larg0.a1;
	Lgeptoindexphi11=Larg0.a1o|0;
	tmp5=Larg1.a2;
	tmp7=Larg1.a2o|0;
	Larg0.a1=tmp5;
	Larg0.a1o=tmp7;
	Larg1.a2=tmp4;
	Larg1.a2o=Lgeptoindexphi11;
	tmp4=Larg0.a2.a0;
	Lgeptoindexphi11=Larg0.a2.a0o|0;
	tmp5=Larg1.a3.a0;
	tmp7=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp5;
	Larg0.a2.a0o=tmp7;
	Larg1.a3.a0=tmp4;
	Larg1.a3.a0o=Lgeptoindexphi11;
	tmp4=Larg1.a1;
	Lgeptoindexphi11=Larg1.a1o|0;
	Larg1.a0=tmp4[Lgeptoindexphi11];
}
function __ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE$presume(Larg0,Marg0){
	var tmp0=0,tmp1=0,L$poptgepsqueezed29=null,L$poptgep$poptgep3$poptgepsqueezed=null,tmp4=null,L$psink2=null,tmp6=null;
	L$poptgepsqueezed29=Larg0[Marg0].a4;
	if(Larg0[Marg0].i5|0){
		L$poptgep$poptgep3$poptgepsqueezed=L$poptgepsqueezed29.a1;
		L$poptgepsqueezed29=L$poptgepsqueezed29.a2;
		if(L$poptgepsqueezed29!==nullArray||0!==0)L$poptgepsqueezed29[0]=1;
		tmp0=Larg0[Marg0].i11|0;
		tmp4=Larg0[Marg0].a10;
		tmp1=Larg0[Marg0].i9|0;
		L$poptgepsqueezed29=Larg0[Marg0].a8;
		L$psink2=".js";
		tmp6=".wasm";
		L$poptgepsqueezed29=L$poptgepsqueezed29.replace(L$psink2,tmp6);
		tmp4=tmp4.concat(L$poptgepsqueezed29);
		L$poptgepsqueezed29=L$poptgep$poptgep3$poptgepsqueezed.replace(L$poptgepsqueezed29,tmp4);
		tmp4="cxCoreInit.promise.then(function(){cxCoreInit();}).catch(function(e){postMessage({type:";
		L$poptgep$poptgep3$poptgepsqueezed=L$poptgepsqueezed29.concat(tmp4,tmp1,",value:e.toString()});})");
		L$poptgepsqueezed29=Larg0[Marg0].a7;
		if((tmp0|0)>-1)L$psink2="cxcore.js";
		else{
			L$poptgep$poptgep3$poptgepsqueezed=new Blob(new Array(L$poptgep$poptgep3$poptgepsqueezed));
			L$psink2=URL.createObjectURL(L$poptgep$poptgep3$poptgepsqueezed);
		}
		L$poptgepsqueezed29.a6=new Worker(L$psink2);
		L$poptgep$poptgep3$poptgepsqueezed=Larg0[Marg0].a7;
		L$poptgep$poptgep3$poptgepsqueezed.a6.onmessage=L$poptgep$poptgep3$poptgepsqueezed.a2;
	}else{
		L$poptgep$poptgep3$poptgepsqueezed=Larg0[Marg0].a3;
		L$psink2=L$poptgep$poptgep3$poptgepsqueezed.a1;
		L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed.a2;
		if(L$poptgep$poptgep3$poptgepsqueezed!==nullArray||0!==0)L$poptgep$poptgep3$poptgepsqueezed[0]=1;
		L$poptgep$poptgep3$poptgepsqueezed=Larg0[Marg0].a12;
		L$poptgep$poptgep3$poptgepsqueezed=L$psink2.text();
		Larg0[Marg0].a14=L$poptgep$poptgep3$poptgepsqueezed;
		L$poptgepsqueezed29.a0=L$poptgep$poptgep3$poptgepsqueezed;
		Larg0[Marg0].i5=1;
		tmp6=new Uint8Array(1);
		tmp6[0]=0;
		L$poptgepsqueezed29.a2=tmp6;
		L$psink2=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		L$psink2[0].a0=L$poptgepsqueezed29;
		L$psink2[0].a1.a0=Larg0;
		L$psink2[0].a1.a0o=Marg0;
		L$psink2[0].a2=tmp6;
		tmp6=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client6StringEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,L$psink2[0]);
		L$poptgep$poptgep3$poptgepsqueezed.then(tmp6);
	}
}
function __ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.i5|0){
		tmp0=Larg0.a4.a2;
		if(tmp0!==nullArray||0!==0)tmp0[0]=1;
	}else{
		tmp0=Larg0.a3.a2;
		if(tmp0!==nullArray||0!==0)tmp0[0]=1;
		tmp0=Larg0.a12;
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client6StringEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a2;
	if((tmp1[0]&255)===0){
		tmp1=Larg0.a0;
		tmp1.a1=Larg1;
		tmp1.a2=nullArray;
		tmp1=Larg0.a1.a0;
		tmp0=Larg0.a1.a0o|0;
		tmp1[tmp0].a0(tmp1,tmp0);
	}
}
function __ZN11CheerpXBase16cheerpOsInitImplEv$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null;
	tmp1=Larg0.a3.a0;
	tmp0=Larg0.a3.a0o|0;
	tmp2=tmp1[tmp0].a[tmp1[tmp0].o- -1];
	tmp2=tmp2.a1.a1;
	if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
	tmp1=Larg0.a6;
	if(tmp2!==null){
		tmp1.a3(tmp2);
		tmp1.a3=null;
	}else{
		tmp1=tmp1.a4;
		tmp2="CheerpX initialization failed";
		tmp1(tmp2);
	}
}
function __ZN11CheerpXBase16cheerpOsInitImplEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEvEUlvE_JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0=Larg0.a0;
	tmp1={a0:null};
	__ZN11CheerpXBase16cheerpOsInitImplEv(tmp1,tmp0);
}
function __ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=Larg0.a3.a0;
	tmp3=Larg0.a3.a0o|0;
	if(tmp2!==nullArray||tmp3!==0)tmp2[tmp3].a1(tmp2,tmp3);
	tmp2=Larg0.a6;
	tmp0={type:12,ioTransaction:(Larg0.i7|0)};
	tmp1=HEAP32;
	tmp3=tmp2.i7|0;
	tmp1[0+tmp3|0]=-2;
	tmp2.a6.postMessage(tmp0);
}
function __ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=Larg0.a3.a0;
	tmp3=Larg0.a3.a0o|0;
	if(tmp2!==nullArray||tmp3!==0)tmp2[tmp3].a1(tmp2,tmp3);
	tmp2=Larg0.a6;
	tmp0={type:12,ioTransaction:(Larg0.i7|0)};
	tmp1=HEAP32;
	tmp3=tmp2.i7|0;
	tmp1[0+tmp3|0]=-2;
	tmp2.a6.postMessage(tmp0);
}
function __ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZN11CheerpXBase13createHudImplEv(Larg0){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null;
	tmp1="div";
	Larg0.a10=document.createElement(tmp1);
	tmp1=Larg0.a10;
	tmp2="keydown";
	tmp3=__ZZN11CheerpXBase13createHudImplEvEN3$_08__invokeEPN6client5EventE;
	tmp1.addEventListener(tmp2,tmp3);
	tmp1=Larg0.a10;
	tmp2="keyup";
	tmp1.addEventListener(tmp2,tmp3);
	tmp1=Larg0.a10;
	tmp2="keypress";
	tmp1.addEventListener(tmp2,tmp3);
	tmp1=Larg0.a10;
	tmp2="style";
	tmp3="position:absolute;width:25%;height:100%;top:0;right:0;overflow-y:scroll;";
	tmp1.setAttribute(tmp2,tmp3);
	tmp1="div";
	Larg0.a11[0]=document.createElement(tmp1);
	tmp1="Global stats";
	__ZN11CheerpXBase14appendHudBlockERKN6client6StringEPNS0_7ElementE(Larg0,tmp1,Larg0.a11[0]);
	tmp1="div";
	Larg0.a12=document.createElement(tmp1);
	tmp1="Debugger - Contexts";
	__ZN11CheerpXBase14appendHudBlockERKN6client6StringEPNS0_7ElementE(Larg0,tmp1,Larg0.a12);
	tmp1="select";
	Larg0.a14=document.createElement(tmp1);
	Larg0.a12.appendChild(Larg0.a14);
	tmp1=Larg0.a14;
	tmp3="50%";
	tmp1.style.width=tmp3;
	tmp1=tmp1.style;
	tmp2="border-box";
	tmp1.boxSizing=tmp2;
	tmp1="div";
	Larg0.a13=document.createElement(tmp1);
	tmp1="Debugger - Control";
	__ZN11CheerpXBase14appendHudBlockERKN6client6StringEPNS0_7ElementE(Larg0,tmp1,Larg0.a13);
	tmp1="button";
	Larg0.a15=document.createElement(tmp1);
	tmp1=Larg0.a15;
	tmp3="50%";
	tmp1.style.width=tmp3;
	tmp1=tmp1.style;
	tmp2="border-box";
	tmp1.boxSizing=tmp2;
	Larg0.a13.appendChild(Larg0.a15);
	tmp1="div";
	Larg0.a16=document.createElement(tmp1);
	tmp1="Debugger - Disassembly";
	__ZN11CheerpXBase14appendHudBlockERKN6client6StringEPNS0_7ElementE(Larg0,tmp1,Larg0.a16);
	tmp1="select";
	Larg0.a17=document.createElement(tmp1);
	tmp1=Larg0.a17;
	tmp2="16-bit";
	tmp3="0";
	tmp4="option";
	tmp5=document.createElement(tmp4);
	tmp5.textContent=tmp2;
	tmp5.value=tmp3;
	tmp1.appendChild(tmp5);
	tmp1=Larg0.a17;
	tmp2="32-bit";
	tmp3="1";
	tmp4="option";
	tmp5=document.createElement(tmp4);
	tmp5.textContent=tmp2;
	tmp5.value=tmp3;
	tmp1.appendChild(tmp5);
	tmp1=Larg0.a17;
	tmp2="Wasm (dump)";
	tmp3="2";
	tmp4="option";
	tmp5=document.createElement(tmp4);
	tmp5.textContent=tmp2;
	tmp5.value=tmp3;
	tmp1.appendChild(tmp5);
	tmp1=Larg0.a17;
	tmp3="20%";
	tmp1.style.width=tmp3;
	tmp1=tmp1.style;
	tmp2="border-box";
	tmp1.boxSizing=tmp2;
	tmp1="input";
	Larg0.a18=document.createElement(tmp1);
	tmp1=Larg0.a18;
	tmp3="20%";
	tmp1.style.width=tmp3;
	tmp1=tmp1.style;
	tmp2="border-box";
	tmp1.boxSizing=tmp2;
	tmp1="button";
	Larg0.a19=document.createElement(tmp1);
	tmp1=Larg0.a19;
	tmp3="20%";
	tmp1.style.width=tmp3;
	tmp1=tmp1.style;
	tmp2="border-box";
	tmp1.boxSizing=tmp2;
	tmp1=Larg0.a19;
	tmp2="Show";
	tmp1.textContent=tmp2;
	tmp1="pre";
	Larg0.a20=document.createElement(tmp1);
	Larg0.a16.appendChild(Larg0.a17);
	Larg0.a16.appendChild(Larg0.a18);
	Larg0.a16.appendChild(Larg0.a19);
	Larg0.a16.appendChild(Larg0.a20);
	tmp1=Larg0.a19;
	tmp2=[{a0:null}];
	tmp2[0].a0=Larg0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_1JEEEvPT_DpT0_,tmp2[0]);
	tmp1.onclick=tmp2;
	tmp1="div";
	tmp2=document.createElement(tmp1);
	tmp1="JIT - Bisect";
	__ZN11CheerpXBase14appendHudBlockERKN6client6StringEPNS0_7ElementE(Larg0,tmp1,tmp2);
	tmp1="textarea";
	Larg0.a21=document.createElement(tmp1);
	tmp1="button";
	Larg0.a22=document.createElement(tmp1);
	tmp1="button";
	Larg0.a23=document.createElement(tmp1);
	tmp2.appendChild(Larg0.a21);
	tmp2.appendChild(Larg0.a22);
	tmp2.appendChild(Larg0.a23);
	tmp1=Larg0.a21;
	tmp3="100%";
	tmp1.style.width=tmp3;
	tmp1=tmp1.style;
	tmp2="border-box";
	tmp1.boxSizing=tmp2;
	tmp1=Larg0.a22;
	tmp3="50%";
	tmp1.style.width=tmp3;
	tmp1=tmp1.style;
	tmp2="border-box";
	tmp1.boxSizing=tmp2;
	tmp1=Larg0.a23;
	tmp3="50%";
	tmp1.style.width=tmp3;
	tmp1=tmp1.style;
	tmp2="border-box";
	tmp1.boxSizing=tmp2;
	tmp1=Larg0.a22;
	tmp2="Apply";
	tmp1.textContent=tmp2;
	tmp1=Larg0.a23;
	tmp2="Load Current";
	tmp1.textContent=tmp2;
	tmp1="cxLastBisect";
	tmp2=localStorage.getItem(tmp1);
	if(tmp2!==null){
		Larg0.a21.value=tmp2;
		if(((tmp2.length)|0)!==0)__ZZN11CheerpXBase13createHudImplEvENK3$_2clEv(Larg0);
	}
	tmp1=Larg0.a22;
	tmp2=[{a0:null}];
	tmp2[0].a0=Larg0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_2JEEEvPT_DpT0_,tmp2[0]);
	tmp1.onclick=tmp2;
	tmp1=Larg0.a23;
	tmp2=[{a0:null}];
	tmp2[0].a0=Larg0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_3JEEEvPT_DpT0_,tmp2[0]);
	tmp1.onclick=tmp2;
	__ZN11CheerpXBase13selectContextEPKNS_11ContextDataE(Larg0,null);
	tmp1=document.body;
	tmp1.appendChild(Larg0.a10);
	tmp1=Larg0.a15;
	tmp2=[{a0:null}];
	tmp2[0].a0=Larg0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_4JEEEvPT_DpT0_,tmp2[0]);
	tmp1.onclick=tmp2;
	tmp1=Larg0.a14;
	tmp2=[{a0:null}];
	tmp2[0].a0=Larg0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_5JEEEvPT_DpT0_,tmp2[0]);
	tmp1.onchange=tmp2;
	__ZN11CheerpXBase14updateContextsEv(Larg0);
	tmp1={type:13};
	tmp2=HEAP32;
	tmp0=Larg0.i7|0;
	tmp2[0+tmp0|0]=-2;
	Larg0.a6.postMessage(tmp1);
	tmp1=[{a0:null}];
	tmp1[0].a0=Larg0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_6JEEEvPT_DpT0_,tmp1[0]);
	+setInterval(tmp1,1000);
}
function __ZZN11CheerpXBase13createHudImplEvEN3$_08__invokeEPN6client5EventE(Larg0){
	Larg0.stopPropagation();
}
function __ZN11CheerpXBase14appendHudBlockERKN6client6StringEPNS0_7ElementE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null;
	tmp3="div";
	tmp0=document.createElement(tmp3);
	tmp3="p";
	tmp1=document.createElement(tmp3);
	tmp3=tmp1.style;
	tmp2="bold";
	tmp3.fontWeight=tmp2;
	tmp1.textContent=Larg1;
	tmp0.appendChild(tmp1);
	tmp0.appendChild(Larg2);
	Larg0.a10.appendChild(tmp0);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_1JEEEvPT_DpT0_(Larg0){
	__ZZN11CheerpXBase13createHudImplEvENK3$_1clEv(Larg0.a0);
}
function __ZZN11CheerpXBase13createHudImplEvENK3$_2clEv(Larg0){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null;
	tmp0="cxLastBisect";
	tmp1=Larg0.a21.value;
	localStorage.setItem(tmp0,tmp1);
	tmp0=Larg0.a21.value.trim();
	if(((tmp0.length)|0)!==0){
		tmp1="\n";
		tmp0=tmp0.split(tmp1);
		tmp1=new Uint32Array((+((tmp0.length)|0)));
		if(((tmp0.length)|0)>0){
			tmp2=0;
			while(1){
				tmp3=tmp0[0+tmp2|0];
				tmp1[0+tmp2|0]=~~ +parseInt(tmp3,16);
				tmp2=tmp2+1|0;
				if((tmp2|0)<((tmp0.length)|0))continue;
				break;
			}
		}
		tmp0={type:44,traces:tmp1};
		tmp1=HEAP32;
		tmp2=Larg0.i7|0;
		tmp1[0+tmp2|0]=-2;
		Larg0.a6.postMessage(tmp0);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_2JEEEvPT_DpT0_(Larg0){
	__ZZN11CheerpXBase13createHudImplEvENK3$_2clEv(Larg0.a0);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_3JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=Larg0.a0;
	tmp1={type:78};
	tmp2=HEAP32;
	tmp3=tmp0.i7|0;
	tmp2[0+tmp3|0]=-2;
	tmp0.a6.postMessage(tmp1);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_4JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=Larg0.a0;
	tmp2=tmp0.a26;
	if(tmp2!==null){
		tmp3=tmp2.i3|0;
		if(tmp3>>>0<2){
			tmp2={type:((tmp3|0)!==0?28|0:27|0),ctxType:(tmp2.i0|0),value:(tmp2.i1|0)};
			tmp1=HEAP32;
			tmp3=tmp0.i7|0;
			tmp1[0+tmp3|0]=-2;
			tmp0.a6.postMessage(tmp2);
			return;
		}
	}
	___assert_fail(_$pstr$p101,0,_$pstr$p1$p35,0,845,___func__$p_ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE,0);
	;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_5JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0,tmp4=null,tmp5=0,L$poptgep$poptgep5$poptgepsqueezed=null,Lgeptoindexphi=0;
	tmp0=Larg0.a0;
	tmp1=tmp0.a14.value;
	L$poptgep$poptgep5$poptgepsqueezed=tmp0.a25;
	tmp2=L$poptgep$poptgep5$poptgepsqueezed.a0;
	tmp3=L$poptgep$poptgep5$poptgepsqueezed.a0o|0;
	tmp4=L$poptgep$poptgep5$poptgepsqueezed.a1;
	tmp5=L$poptgep$poptgep5$poptgepsqueezed.a1o|0;
	if(tmp2===tmp4&&tmp3===tmp5){
		__ZN11CheerpXBase13selectContextEPKNS_11ContextDataE(tmp0,null);
		return;
	}
	Lgeptoindexphi=0;
	while(1){
		L$poptgep$poptgep5$poptgepsqueezed=tmp2[tmp3+Lgeptoindexphi|0];
		if( +L$poptgep$poptgep5$poptgepsqueezed.a2.localeCompare(tmp1)===0){
			__ZN11CheerpXBase13selectContextEPKNS_11ContextDataE(tmp0,L$poptgep$poptgep5$poptgepsqueezed);
			return;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(tmp2!==tmp4||(tmp3+Lgeptoindexphi|0)!==tmp5)continue;
		break;
	}
	__ZN11CheerpXBase13selectContextEPKNS_11ContextDataE(tmp0,null);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase13createHudImplEvE3$_6JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=null,L$poptgep$poptgep$poptgepsqueezed=null,Lgeptoindexphi=0,tmp7=0;
	L$poptgep$poptgep$poptgepsqueezed=Larg0.a0.a24;
	tmp0=L$poptgep$poptgep$poptgepsqueezed.a0;
	tmp1=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
	tmp2=L$poptgep$poptgep$poptgepsqueezed.a1;
	tmp3=L$poptgep$poptgep$poptgepsqueezed.a1o|0;
	if(tmp0!==tmp2||tmp1!==tmp3){
		Lgeptoindexphi=0;
		while(1){
			L$poptgep$poptgep$poptgepsqueezed=tmp0[tmp1+Lgeptoindexphi|0].a1;
			tmp7=tmp0[tmp1+Lgeptoindexphi|0].a1o|0;
			tmp7=L$poptgep$poptgep$poptgepsqueezed[tmp7]|0;
			L$poptgep$poptgep$poptgepsqueezed=tmp0[tmp1+Lgeptoindexphi|0].a4;
			tmp4=String(tmp7-(tmp0[tmp1+Lgeptoindexphi|0].i2|0)|0);
			L$poptgep$poptgep$poptgepsqueezed.textContent=tmp4;
			if((tmp0[tmp1+Lgeptoindexphi|0].i3|0)===1)tmp0[tmp1+Lgeptoindexphi|0].i2=tmp7;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if(tmp0!==tmp2||(tmp1+Lgeptoindexphi|0)!==tmp3)continue;
			break;
		}
	}
}
function __ZZN11CheerpXBase13createHudImplEvENK3$_1clEv(Larg0){
	var tmp0=-0.,tmp1=-0.,tmp2=null,tmp3=null,tmp4=0;
	tmp3=Larg0.a26;
	if(tmp3!==null)if((tmp3.i3|0)===1){
		tmp3=Larg0.a17.value;
		tmp0=+parseInt(tmp3);
		tmp3=Larg0.a18.value;
		a:if(((tmp3.length)|0)!==0){
			tmp1=+parseInt(tmp3,16);
			tmp4=~~tmp0;
			b:if(tmp4>>>0<2){
				if((tmp4|0)===0){
					tmp4=30;
					break b;
				}
				tmp4=31;
			}else{
				if((tmp4|0)!==2)break a;
				tmp4=51;
			}
			tmp3=Larg0.a26;
			tmp3={type:tmp4,ctxType:(tmp3.i0|0),value:(tmp3.i1|0),addr:~~tmp1};
			tmp2=HEAP32;
			tmp4=Larg0.i7|0;
			tmp2[0+tmp4|0]=-2;
			Larg0.a6.postMessage(tmp3);
		}
		return;
	}
	___assert_fail(_$pstr$p100,0,_$pstr$p1$p35,0,780,___func__$p_ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE,0);
	;
}
function __ZN11CheerpXBase4initEPFvPN6client6ObjectEEPFvRKNS0_6StringEE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=0,tmp2=null;
	Larg0.a3=Larg1;
	Larg0.a4=Larg2;
	tmp1=__ZN11CheerpXBase13cheerpOSStateE|0;
	if((tmp1|0)===0){
		__ZN11CheerpXBase12loadCheerpOSEv();
		tmp1=__ZN11CheerpXBase13cheerpOSStateE|0;
	}
	a:{
		if((tmp1|0)!==3){
			tmp2=__Z13getCheerpXUrlv();
			tmp2=tmp2.concat("tun/tailscale_tun_auto.js");
			tmp0=import(tmp2);
			tmp2=__ZZN11CheerpXBase13loadTailScaleEvEN3$_08__invokeEPN6client11NetworkConfE;
			tmp0.then(tmp2);
			if((__ZN11CheerpXBase13cheerpOSStateE|0)!==3){
				Larg0.a1=__ZN11CheerpXBase22waitingForCheerpOSListE;
				__ZN11CheerpXBase22waitingForCheerpOSListE=Larg0;
				break a;
			}
		}
		__ZN11CheerpXBase16createCoreWorkerEv(Larg0);
	}
}
function __ZN11CheerpXBase12loadCheerpOSEv(){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=null;
	tmp5=new Object();
	tmp0=new Promise(function(f,r){tmp5.fullfill=f;tmp5.reject=r;});;
	tmp1=tmp5.fullfill;
	tmp2=tmp5.reject;
	tmp5=__Z13getCheerpXUrlv();
	__ZN11CheerpXBase13cheerpOSStateE=1;
	tmp5=tmp5.concat("cheerpOS.js");
	tmp3="script";
	tmp4=document.createElement(tmp3);
	tmp4.src=tmp5;
	tmp5=[{a0:null,a1:null,a2:null}];
	tmp5[0].a0=tmp0;
	tmp5[0].a1=tmp1;
	tmp5[0].a2=tmp2;
	tmp5=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase12loadCheerpOSEvE3$_0JEEEvPT_DpT0_,tmp5[0]);
	tmp4.onload=tmp5;
	document.head.appendChild(tmp4);
	return tmp0;
}
function __ZZN11CheerpXBase13loadTailScaleEvEN3$_08__invokeEPN6client11NetworkConfE(Larg0){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp0=__ZN11CheerpXBase13cheerpOSStateE|0;
	if((tmp0|0)===1)__ZN11CheerpXBase13cheerpOSStateE=2;
	else if((tmp0|0)===2){
		__ZN11CheerpXBase13cheerpOSStateE=3;
		tmp2=__ZN11CheerpXBase22waitingForCheerpOSListE;
		__ZN11CheerpXBase22waitingForCheerpOSListE=null;
		if(tmp2!==null)while(1){
			__ZN11CheerpXBase16createCoreWorkerEv(tmp2);
			tmp1=tmp2.a1;
			tmp2.a1=null;
			if(tmp1!==null){
				tmp2=tmp1;
				continue;
			}
			break;
		}
	}
}
function __ZN11CheerpXBase16createCoreWorkerEv(Larg0){
	var tmp0=null,tmp1=null;
	if(Larg0.a9!==null){
		tmp1=__Z13getCheerpXUrlv();
		tmp1=tmp1.concat("cxbridge.js");
		Larg0.a6=new Worker(tmp1);
		Larg0.a6.onmessage=Larg0.a2;
	}else{
		tmp1="cxcore.js";
		tmp0={a0:null};
		__ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE(tmp0,Larg0,tmp1,1);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CheerpXBase12loadCheerpOSEvE3$_0JEEEvPT_DpT0_(Larg0){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp0=__ZN11CheerpXBase13cheerpOSStateE|0;
	if((tmp0|0)===1)__ZN11CheerpXBase13cheerpOSStateE=2;
	else if((tmp0|0)===2){
		__ZN11CheerpXBase13cheerpOSStateE=3;
		tmp2=__ZN11CheerpXBase22waitingForCheerpOSListE;
		__ZN11CheerpXBase22waitingForCheerpOSListE=null;
		if(tmp2!==null)while(1){
			__ZN11CheerpXBase16createCoreWorkerEv(tmp2);
			tmp1=tmp2.a1;
			tmp2.a1=null;
			if(tmp1!==null){
				tmp2=tmp1;
				continue;
			}
			break;
		}
	}
	Larg0.a1(null);
}
function __ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null,L$poptgepsqueezed93=null,L$poptgepsqueezed89=null,Lgeptoindexphi=0,tmp6=null,L$poptgepsqueezed84=null,L$poptgep$poptgep35$poptgepsqueezed=null,tmp9=0,tmp10=-0.;
	tmp1=new constructor__ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE$pFrame().a;
	tmp2=tmp1[0];
	tmp2.a0=__ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE$presume;
	tmp2.a1=__ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE$pdestroy;
	tmp2.a18=Larg2;
	tmp2.a17=Larg1;
	L$poptgepsqueezed93=tmp2.a2.a[tmp2.a2.o-1];
	Larg0.a0=L$poptgepsqueezed93;
	L$poptgepsqueezed93="bios";
	a:{
		if(Larg2.hasOwnProperty(L$poptgepsqueezed93)){
			L$poptgepsqueezed89="vgaBios";
			Lgeptoindexphi=Larg2.hasOwnProperty(L$poptgepsqueezed89);
			if(Lgeptoindexphi){
				L$poptgepsqueezed93=tmp2.a18.bios.this;
				if((L$poptgepsqueezed93.i1|0)===1){
					L$poptgepsqueezed89=tmp2.a17;
					tmp6=new Uint8Array((+(L$poptgepsqueezed93.i3>>>0)));
					tmp2.a19=tmp6;
					L$poptgepsqueezed84=tmp2.a11;
					L$poptgepsqueezed93.a0.a6(L$poptgepsqueezed84,L$poptgepsqueezed93,L$poptgepsqueezed89,0,L$poptgepsqueezed93.i3|0,tmp6,0);
					L$poptgepsqueezed93=L$poptgepsqueezed84.a0;
					Lgeptoindexphi=L$poptgepsqueezed84.a0o|0;
					if(L$poptgepsqueezed93!==nullArray||Lgeptoindexphi!==0)if(L$poptgepsqueezed93[Lgeptoindexphi].a0!==null){
						tmp2.i15=1;
						L$poptgepsqueezed93=L$poptgepsqueezed93[Lgeptoindexphi].a[L$poptgepsqueezed93[Lgeptoindexphi].o- -1];
						L$poptgepsqueezed93.a0=tmp1;
						L$poptgepsqueezed93.a0o=0;
						break a;
					}
					L$poptgepsqueezed93=L$poptgepsqueezed84.a0;
					Lgeptoindexphi=L$poptgepsqueezed84.a0o|0;
					if(L$poptgepsqueezed93!==nullArray||Lgeptoindexphi!==0)L$poptgepsqueezed93[Lgeptoindexphi].a1(L$poptgepsqueezed93,Lgeptoindexphi);
					L$poptgepsqueezed93=tmp2.a18.vgaBios.this;
					if((L$poptgepsqueezed93.i1|0)===1){
						L$poptgepsqueezed89=tmp2.a17;
						tmp6=new Uint8Array((+(L$poptgepsqueezed93.i3>>>0)));
						tmp2.a20=tmp6;
						L$poptgepsqueezed84=tmp2.a12;
						L$poptgepsqueezed93.a0.a6(L$poptgepsqueezed84,L$poptgepsqueezed93,L$poptgepsqueezed89,0,L$poptgepsqueezed93.i3|0,tmp6,0);
						L$poptgepsqueezed93=L$poptgepsqueezed84.a0;
						Lgeptoindexphi=L$poptgepsqueezed84.a0o|0;
						if(L$poptgepsqueezed93!==nullArray||Lgeptoindexphi!==0)if(L$poptgepsqueezed93[Lgeptoindexphi].a0!==null){
							tmp2.i15=2;
							L$poptgepsqueezed93=L$poptgepsqueezed93[Lgeptoindexphi].a[L$poptgepsqueezed93[Lgeptoindexphi].o- -1];
							L$poptgepsqueezed93.a0=tmp1;
							L$poptgepsqueezed93.a0o=0;
							break a;
						}
						L$poptgepsqueezed93=L$poptgepsqueezed84.a0;
						Lgeptoindexphi=L$poptgepsqueezed84.a0o|0;
						if(L$poptgepsqueezed93!==nullArray||Lgeptoindexphi!==0)L$poptgepsqueezed93[Lgeptoindexphi].a1(L$poptgepsqueezed93,Lgeptoindexphi);
						L$poptgepsqueezed93=tmp2.a18;
						tmp0=new Array();
						L$poptgepsqueezed89="MhZ";
						Lgeptoindexphi=L$poptgepsqueezed93.hasOwnProperty(L$poptgepsqueezed89);
						if(Lgeptoindexphi)Lgeptoindexphi=tmp2.a18.MhZ;
						else{
							Lgeptoindexphi=0;
						}
						L$poptgepsqueezed93=tmp2.a20;
						L$poptgepsqueezed89=tmp2.a19;
						tmp6=tmp2.a18;
						L$poptgepsqueezed84=tmp2.a17;
						L$poptgep$poptgep35$poptgepsqueezed={type:8,mhz:Lgeptoindexphi,mem:(tmp6.mem),bios:L$poptgepsqueezed89,vgaBios:L$poptgepsqueezed93};
						+tmp0.push(L$poptgepsqueezed89.buffer);
						+tmp0.push(L$poptgepsqueezed93.buffer);
						L$poptgepsqueezed84.a6.postMessage(L$poptgep$poptgep35$poptgepsqueezed,tmp0);
						L$poptgepsqueezed93="floppies";
						if(tmp6.hasOwnProperty(L$poptgepsqueezed93)){
							tmp6=tmp2.a18.floppies;
							Lgeptoindexphi=Array.isArray(tmp6);
							if(Lgeptoindexphi){
								L$poptgepsqueezed93=tmp2.a18.floppies;
								tmp2.a21=L$poptgepsqueezed93;
								if(((L$poptgepsqueezed93.length)|0)!==0){
									L$poptgepsqueezed93=tmp2.a13;
									Lgeptoindexphi=0;
									while(1){
										tmp2.i22=Lgeptoindexphi;
										L$poptgepsqueezed89=tmp2.a17;
										__ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE(L$poptgepsqueezed93,L$poptgepsqueezed89,Lgeptoindexphi,tmp2.a21[(+(Lgeptoindexphi>>>0))]);
										L$poptgepsqueezed89=L$poptgepsqueezed93.a0;
										Lgeptoindexphi=L$poptgepsqueezed93.a0o|0;
										if(L$poptgepsqueezed89!==nullArray||Lgeptoindexphi!==0){
											if(L$poptgepsqueezed89[Lgeptoindexphi].a0!==null){
												tmp2.i15=3;
												L$poptgepsqueezed93=L$poptgepsqueezed89[Lgeptoindexphi].a[L$poptgepsqueezed89[Lgeptoindexphi].o- -1];
												L$poptgepsqueezed93.a0=tmp1;
												L$poptgepsqueezed93.a0o=0;
												break a;
											}
											L$poptgepsqueezed89[Lgeptoindexphi].a1(L$poptgepsqueezed89,Lgeptoindexphi);
										}
										Lgeptoindexphi=tmp2.i22|0;
										Lgeptoindexphi=Lgeptoindexphi+1|0;
										if(Lgeptoindexphi>>>0<(tmp2.a21.length)>>>0)continue;
										break;
									}
								}
							}
						}
						L$poptgepsqueezed93=tmp2.a18;
						L$poptgepsqueezed89="disks";
						if(L$poptgepsqueezed93.hasOwnProperty(L$poptgepsqueezed89)){
							L$poptgepsqueezed93=tmp2.a18.disks;
							Lgeptoindexphi=Array.isArray(L$poptgepsqueezed93);
							if(Lgeptoindexphi){
								tmp6=tmp2.a18.disks;
								tmp2.a23=tmp6;
								L$poptgep$poptgep35$poptgepsqueezed=tmp2.a14;
								Lgeptoindexphi=0;
								while(1){
									L$poptgep$poptgep35$poptgepsqueezed[Lgeptoindexphi]=0;
									Lgeptoindexphi=Lgeptoindexphi+1|0;
									if(L$poptgep$poptgep35$poptgepsqueezed!==L$poptgep$poptgep35$poptgepsqueezed||2!==(0+Lgeptoindexphi|0))continue;
									break;
								}
								if(((tmp6.length)|0)!==0){
									tmp9=0;
									while(1){
										tmp2.a27=tmp6;
										tmp2.a26=L$poptgepsqueezed89;
										tmp2.i25=tmp9;
										tmp2.i24=Lgeptoindexphi;
										L$poptgepsqueezed89=tmp2.a23;
										tmp10=(+(tmp9>>>0));
										tmp2.a28=L$poptgepsqueezed89[tmp10].dev.this;
										L$poptgepsqueezed89=L$poptgepsqueezed89[tmp10];
										L$poptgepsqueezed93="id";
										tmp2.a29=L$poptgepsqueezed93;
										Lgeptoindexphi=L$poptgepsqueezed89.hasOwnProperty(L$poptgepsqueezed93);
										if(Lgeptoindexphi)tmp9=tmp2.a23[tmp10].id;
										tmp2.i30=tmp9;
										if(tmp9>>>0>1){
											console.log("Invalid disk id",tmp9);
											L$poptgepsqueezed93=tmp2.a4;
											L$poptgepsqueezed93.a1.i0=0;
											L$poptgepsqueezed89=tmp2.a8;
											L$poptgepsqueezed89.a0=L$poptgepsqueezed93;
											L$poptgepsqueezed93.a2=L$poptgepsqueezed89;
											tmp2.i15=4;
											L$poptgepsqueezed93.a0=tmp1;
											L$poptgepsqueezed93.a0o=0;
											break a;
										}
										if((L$poptgep$poptgep35$poptgepsqueezed[tmp9]|0)!==0){
											console.log("Overwriting disk id",tmp9);
											L$poptgepsqueezed93=tmp2.a5;
											L$poptgepsqueezed93.a1.i0=0;
											L$poptgepsqueezed89=tmp2.a9;
											L$poptgepsqueezed89.a0=L$poptgepsqueezed93;
											L$poptgepsqueezed93.a2=L$poptgepsqueezed89;
											tmp2.i15=5;
											L$poptgepsqueezed93.a0=tmp1;
											L$poptgepsqueezed93.a0o=0;
											break a;
										}
										L$poptgepsqueezed93=tmp2.a26;
										Lgeptoindexphi=tmp2.i25|0;
										L$poptgepsqueezed89=tmp2.a23;
										L$poptgep$poptgep35$poptgepsqueezed[tmp9]=1;
										L$poptgepsqueezed89=L$poptgepsqueezed89[(+(Lgeptoindexphi>>>0))].type;
										L$poptgepsqueezed93="ata";
										tmp2.a31=L$poptgepsqueezed93;
										tmp10=+L$poptgepsqueezed89.localeCompare(L$poptgepsqueezed93);
										tmp6=tmp2.a27;
										if(tmp10===0){
											Lgeptoindexphi=0;
										}else{
											L$poptgepsqueezed93=tmp2.a23[(+(tmp2.i25>>>0))].type;
											tmp6="atapi";
											tmp2.a32=tmp6;
											tmp10=+L$poptgepsqueezed93.localeCompare(tmp6);
											if(!(tmp10===0)){
												console.log("Unknown disk type");
												L$poptgepsqueezed93=tmp2.a6;
												L$poptgepsqueezed93.a1.i0=0;
												L$poptgepsqueezed89=tmp2.a10;
												L$poptgepsqueezed89.a0=L$poptgepsqueezed93;
												L$poptgepsqueezed93.a2=L$poptgepsqueezed89;
												tmp2.i15=6;
												L$poptgepsqueezed93.a0=tmp1;
												L$poptgepsqueezed93.a0o=0;
												break a;
											}
											Lgeptoindexphi=1;
										}
										tmp9=tmp2.i30|0;
										L$poptgepsqueezed93=tmp2.a28;
										L$poptgepsqueezed89=tmp2.a17.a6;
										L$poptgepsqueezed84=tmp2.a16[0];
										L$poptgepsqueezed93={type:9,diskType:Lgeptoindexphi,index:tmp9,devId:(L$poptgepsqueezed93.i2|0),len:(L$poptgepsqueezed93.i3|0)};
										tmp2.a16[0]=L$poptgepsqueezed93;
										L$poptgepsqueezed89.postMessage(L$poptgepsqueezed93);
										L$poptgepsqueezed89=tmp2.a31;
										tmp9=tmp2.i25|0;
										tmp9=tmp9+1|0;
										if(tmp9>>>0<(tmp2.a23.length)>>>0){
											L$poptgepsqueezed93=tmp2.a29;
											continue;
										}
										break;
									}
								}
							}
						}
						tmp1=tmp2.a17;
						tmp2={type:2};
						tmp1.a6.postMessage(tmp2);
						break a;
					}
					___assert_fail(_$pstr$p35$p96,0,_$pstr$p1$p35,0,560,___func__$p_ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE,0);
					;
				}
				___assert_fail(_$pstr$p34$p95,0,_$pstr$p1$p35,0,555,___func__$p_ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE,0);
				;
			}
		}
		console.log("bios and vgaBios must be defined");
		L$poptgepsqueezed93=tmp2.a3;
		L$poptgepsqueezed93.a1.i0=0;
		L$poptgepsqueezed89=tmp2.a7;
		L$poptgepsqueezed89.a0=L$poptgepsqueezed93;
		L$poptgepsqueezed93.a2=L$poptgepsqueezed89;
		tmp2.i15=0;
		L$poptgepsqueezed93.a0=tmp1;
		L$poptgepsqueezed93.a0o=0;
	}
}
function __ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE$presume(Larg0,Marg0){
	var L$poptgepsqueezed149=null,tmp1=null,L$ppre83_1=0,L$poptgepsqueezed147=null,L$poptgepsqueezed148=null,L$ppre73=null,L$poptgep$poptgep58$poptgepsqueezed=null,L$ppre83_0=null,L$ppre74=null,tmp9=null,tmp10=null,L$pdispatch9=0,L$pdispatch10=0,L$pdispatch11=0,tmp14=-0.;
	L$ppre83_1=Larg0[Marg0].i15|0;
	L$poptgepsqueezed147=Larg0[Marg0].a10;
	L$poptgepsqueezed148=Larg0[Marg0].a9;
	L$poptgepsqueezed149=Larg0[Marg0].a8;
	a:{
		b:{
			c:if(L$ppre83_1<<29>-536870912){
				L$ppre73=Larg0[Marg0].a13;
				L$poptgep$poptgep58$poptgepsqueezed=Larg0[Marg0].a12;
				d:{
					e:{
						if((L$ppre83_1&7)<2){
							L$ppre83_0=Larg0[Marg0].a11;
							if((L$ppre83_1&7)!==0){
								L$ppre74=L$ppre83_0.a0;
								L$ppre83_1=L$ppre83_0.a0o|0;
								L$ppre74=L$ppre74[L$ppre83_1];
							}else{
								L$ppre74=Larg0[Marg0].a7.a0;
								L$ppre83_1=L$ppre74.a1.i0|0;
								f:{
									if((L$ppre83_1&65535)>=256){
										L$ppre74.a1.i0=L$ppre83_1&255;
										L$ppre74=Larg0[Marg0].a7.a0;
										if(L$ppre74===null)break f;
									}
									L$ppre74.a0=nullArray;
									L$ppre74.a0o=0;
								}
								L$ppre74=Larg0[Marg0].a18.bios.this;
								if((L$ppre74.i1|0)!==1)___assert_fail(_$pstr$p34$p95,0,_$pstr$p1$p35,0,555,___func__$p_ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE,0);
								;
								tmp9=Larg0[Marg0].a17;
								tmp10=new Uint8Array((+(L$ppre74.i3>>>0)));
								Larg0[Marg0].a19=tmp10;
								L$ppre74.a0.a6(L$ppre83_0,L$ppre74,tmp9,0,L$ppre74.i3|0,tmp10,0);
								L$ppre74=L$ppre83_0.a0;
								L$ppre83_1=L$ppre83_0.a0o|0;
								if(L$ppre74!==nullArray||L$ppre83_1!==0){
									if(L$ppre74[L$ppre83_1].a0!==null){
										Larg0[Marg0].i15=1;
										L$ppre83_0=L$ppre74[L$ppre83_1].a[L$ppre74[L$ppre83_1].o- -1];
										L$ppre83_0.a0=Larg0;
										L$ppre83_0.a0o=Marg0;
										break a;
									}
									L$ppre74=L$ppre74[L$ppre83_1];
								}else{
									L$ppre74=null;
								}
							}
							L$ppre74=L$ppre83_0.a0;
							L$ppre83_1=L$ppre83_0.a0o|0;
							if(L$ppre74!==nullArray||L$ppre83_1!==0)L$ppre74[L$ppre83_1].a1(L$ppre74,L$ppre83_1);
							L$ppre83_0=Larg0[Marg0].a18.vgaBios.this;
							if((L$ppre83_0.i1|0)!==1)___assert_fail(_$pstr$p35$p96,0,_$pstr$p1$p35,0,560,___func__$p_ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE,0);
							;
							L$ppre74=Larg0[Marg0].a17;
							tmp9=new Uint8Array((+(L$ppre83_0.i3>>>0)));
							Larg0[Marg0].a20=tmp9;
							L$ppre83_0.a0.a6(L$poptgep$poptgep58$poptgepsqueezed,L$ppre83_0,L$ppre74,0,L$ppre83_0.i3|0,tmp9,0);
							L$ppre83_0=L$poptgep$poptgep58$poptgepsqueezed.a0;
							L$ppre83_1=L$poptgep$poptgep58$poptgepsqueezed.a0o|0;
							if(L$ppre83_0!==nullArray||L$ppre83_1!==0){
								if(L$ppre83_0[L$ppre83_1].a0!==null){
									Larg0[Marg0].i15=2;
									L$ppre83_0=L$ppre83_0[L$ppre83_1].a[L$ppre83_0[L$ppre83_1].o- -1];
									L$ppre83_0.a0=Larg0;
									L$ppre83_0.a0o=Marg0;
									break a;
								}
								L$ppre83_0=L$ppre83_0[L$ppre83_1];
							}else{
								L$ppre83_0=null;
							}
						}else{
							if((L$ppre83_1&7)!==2){
								L$ppre83_0=L$ppre73.a0;
								L$ppre83_1=L$ppre73.a0o|0;
								if(L$ppre83_0!==nullArray||L$ppre83_1!==0){
									L$poptgep$poptgep58$poptgepsqueezed=L$ppre83_0;
									L$pdispatch9=L$ppre83_1;
									L$ppre83_1=-1;
									break e;
								}
								L$ppre83_1=0;
								break e;
							}
							L$ppre83_0=L$poptgep$poptgep58$poptgepsqueezed.a0;
							L$ppre83_1=L$poptgep$poptgep58$poptgepsqueezed.a0o|0;
							L$ppre83_0=L$ppre83_0[L$ppre83_1];
						}
						L$ppre83_0=L$poptgep$poptgep58$poptgepsqueezed.a0;
						L$ppre83_1=L$poptgep$poptgep58$poptgepsqueezed.a0o|0;
						if(L$ppre83_0!==nullArray||L$ppre83_1!==0)L$ppre83_0[L$ppre83_1].a1(L$ppre83_0,L$ppre83_1);
						L$poptgep$poptgep58$poptgepsqueezed=Larg0[Marg0].a18;
						tmp1=new Array();
						L$ppre83_0="MhZ";
						L$ppre83_1=L$poptgep$poptgep58$poptgepsqueezed.hasOwnProperty(L$ppre83_0);
						if(L$ppre83_1)L$ppre83_1=Larg0[Marg0].a18.MhZ;
						else{
							L$ppre83_1=0;
						}
						L$poptgep$poptgep58$poptgepsqueezed=Larg0[Marg0].a20;
						L$ppre83_0=Larg0[Marg0].a19;
						L$ppre74=Larg0[Marg0].a18;
						tmp9=Larg0[Marg0].a17;
						tmp10={type:8,mhz:L$ppre83_1,mem:(L$ppre74.mem),bios:L$ppre83_0,vgaBios:L$poptgep$poptgep58$poptgepsqueezed};
						+tmp1.push(L$ppre83_0.buffer);
						+tmp1.push(L$poptgep$poptgep58$poptgepsqueezed.buffer);
						tmp9.a6.postMessage(tmp10,tmp1);
						L$poptgep$poptgep58$poptgepsqueezed="floppies";
						if(!(L$ppre74.hasOwnProperty(L$poptgep$poptgep58$poptgepsqueezed)))break d;
						L$ppre74=Larg0[Marg0].a18.floppies;
						L$ppre83_1=Array.isArray(L$ppre74);
						if(!(L$ppre83_1))break d;
						L$ppre83_0=Larg0[Marg0].a18.floppies;
						Larg0[Marg0].a21=L$ppre83_0;
						if(((L$ppre83_0.length)|0)===0)break d;
						L$pdispatch10=0;
						L$ppre83_1=1;
					}
					e:while(1){
						switch(L$ppre83_1|0){
							case 0:
							L$pdispatch10=Larg0[Marg0].i22|0;
							L$pdispatch10=L$pdispatch10+1|0;
							if(L$pdispatch10>>>0>=(Larg0[Marg0].a21.length)>>>0)break d;
							L$ppre83_1=1;
							continue e;
							case 1:
							Larg0[Marg0].i22=L$pdispatch10;
							L$ppre83_0=Larg0[Marg0].a17;
							__ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE(L$ppre73,L$ppre83_0,L$pdispatch10,Larg0[Marg0].a21[(+(L$pdispatch10>>>0))]);
							L$ppre83_0=L$ppre73.a0;
							L$ppre83_1=L$ppre73.a0o|0;
							if(L$ppre83_0!==nullArray||L$ppre83_1!==0){
								if(L$ppre83_0[L$ppre83_1].a0!==null){
									Larg0[Marg0].i15=3;
									L$ppre83_0=L$ppre83_0[L$ppre83_1].a[L$ppre83_0[L$ppre83_1].o- -1];
									L$ppre83_0.a0=Larg0;
									L$ppre83_0.a0o=Marg0;
									break a;
								}
								L$poptgep$poptgep58$poptgepsqueezed=L$ppre83_0;
								L$pdispatch9=L$ppre83_1;
								L$ppre83_1=-1;
								continue e;
							}
							L$ppre83_1=0;
							continue e;
							default:
							L$poptgep$poptgep58$poptgepsqueezed[L$pdispatch9].a1(L$poptgep$poptgep58$poptgepsqueezed,L$pdispatch9);
							L$ppre83_1=0;
							continue e;
						}
						break;
					}
				}
				L$ppre73=Larg0[Marg0].a18;
				L$poptgep$poptgep58$poptgepsqueezed="disks";
				if(!(L$ppre73.hasOwnProperty(L$poptgep$poptgep58$poptgepsqueezed)))break b;
				L$ppre73=Larg0[Marg0].a18.disks;
				L$ppre83_1=Array.isArray(L$ppre73);
				if(!(L$ppre83_1))break b;
				L$ppre73=Larg0[Marg0].a18.disks;
				Larg0[Marg0].a23=L$ppre73;
				L$poptgep$poptgep58$poptgepsqueezed=Larg0[Marg0].a14;
				L$ppre83_1=0;
				while(1){
					L$poptgep$poptgep58$poptgepsqueezed[L$ppre83_1]=0;
					L$ppre83_1=L$ppre83_1+1|0;
					if(L$poptgep$poptgep58$poptgepsqueezed!==L$poptgep$poptgep58$poptgepsqueezed||2!==(0+L$ppre83_1|0))continue;
					break;
				}
				if(((L$ppre73.length)|0)===0)break b;
				L$pdispatch11=0;
				L$ppre83_1=2;
			}else if((L$ppre83_1&7)<6){
				if((L$ppre83_1&7)===4){
					L$ppre73=L$poptgepsqueezed149.a0;
					L$ppre83_1=L$ppre73.a1.i0|0;
					if((L$ppre83_1&65535)>=256){
						L$ppre73.a1.i0=L$ppre83_1&255;
						L$ppre73=L$poptgepsqueezed149.a0;
						if(L$ppre73===null){
							L$ppre83_1=1;
							break c;
						}
					}
					L$ppre73.a0=nullArray;
					L$ppre73.a0o=0;
					L$ppre83_1=1;
				}else{
					L$ppre73=L$poptgepsqueezed148.a0;
					L$ppre83_1=L$ppre73.a1.i0|0;
					if((L$ppre83_1&65535)>=256){
						L$ppre73.a1.i0=L$ppre83_1&255;
						L$ppre73=L$poptgepsqueezed148.a0;
						if(L$ppre73===null){
							L$ppre83_1=0;
							break c;
						}
					}
					L$ppre73.a0=nullArray;
					L$ppre73.a0o=0;
					L$ppre83_1=0;
				}
			}else{
				L$ppre73=L$poptgepsqueezed147.a0;
				L$ppre83_1=L$ppre73.a1.i0|0;
				d:{
					if((L$ppre83_1&65535)>=256){
						L$ppre73.a1.i0=L$ppre83_1&255;
						L$ppre73=L$poptgepsqueezed147.a0;
						if(L$ppre73===null)break d;
					}
					L$ppre73.a0=nullArray;
					L$ppre73.a0o=0;
				}
				L$ppre73=Larg0[Marg0].a32;
				L$pdispatch9=Larg0[Marg0].i24|0;
				L$ppre83_1=-1;
			}
			c:while(1){
				switch(L$ppre83_1|0){
					case 0:
					L$ppre83_1=Larg0[Marg0].i30|0;
					L$ppre73=Larg0[Marg0].a26;
					L$pdispatch9=Larg0[Marg0].i25|0;
					tmp9=Larg0[Marg0].a23;
					Larg0[Marg0].a14[L$ppre83_1]=1;
					tmp9=tmp9[(+(L$pdispatch9>>>0))].type;
					L$ppre73="ata";
					Larg0[Marg0].a31=L$ppre73;
					tmp14=+tmp9.localeCompare(L$ppre73);
					L$ppre73=Larg0[Marg0].a27;
					if(tmp14===0){
						L$pdispatch9=0;
						L$ppre83_1=-1;
						continue c;
					}
					tmp9=Larg0[Marg0].a23[(+(Larg0[Marg0].i25>>>0))].type;
					L$ppre73="atapi";
					Larg0[Marg0].a32=L$ppre73;
					tmp14=+tmp9.localeCompare(L$ppre73);
					if(tmp14===0){
						L$pdispatch9=1;
						L$ppre83_1=-1;
						continue c;
					}
					console.log("Unknown disk type");
					L$ppre83_0=Larg0[Marg0].a6;
					L$ppre83_0.a1.i0=0;
					L$poptgepsqueezed147.a0=L$ppre83_0;
					L$ppre83_0.a2=L$poptgepsqueezed147;
					Larg0[Marg0].i15=6;
					L$ppre83_0.a0=Larg0;
					L$ppre83_0.a0o=Marg0;
					break a;
					case 1:
					L$ppre83_1=Larg0[Marg0].i30|0;
					if((Larg0[Marg0].a14[L$ppre83_1]|0)!==0){
						console.log("Overwriting disk id",L$ppre83_1);
						L$ppre83_0=Larg0[Marg0].a5;
						L$ppre83_0.a1.i0=0;
						L$poptgepsqueezed148.a0=L$ppre83_0;
						L$ppre83_0.a2=L$poptgepsqueezed148;
						Larg0[Marg0].i15=5;
						L$ppre83_0.a0=Larg0;
						L$ppre83_0.a0o=Marg0;
						break a;
					}
					L$ppre83_1=0;
					continue c;
					case 2:
					Larg0[Marg0].a27=L$ppre74;
					Larg0[Marg0].a26=L$ppre83_0;
					Larg0[Marg0].i25=L$pdispatch11;
					Larg0[Marg0].i24=L$pdispatch10;
					tmp9=Larg0[Marg0].a23;
					tmp14=(+(L$pdispatch11>>>0));
					Larg0[Marg0].a28=tmp9[tmp14].dev.this;
					tmp9=tmp9[tmp14];
					tmp10="id";
					Larg0[Marg0].a29=tmp10;
					L$ppre83_1=tmp9.hasOwnProperty(tmp10);
					if(L$ppre83_1)L$ppre83_1=Larg0[Marg0].a23[tmp14].id;
					else{
						L$ppre83_1=L$pdispatch11;
					}
					Larg0[Marg0].i30=L$ppre83_1;
					if(L$ppre83_1>>>0>1){
						console.log("Invalid disk id",L$ppre83_1);
						L$ppre83_0=Larg0[Marg0].a4;
						L$ppre83_0.a1.i0=0;
						L$poptgepsqueezed149.a0=L$ppre83_0;
						L$ppre83_0.a2=L$poptgepsqueezed149;
						Larg0[Marg0].i15=4;
						L$ppre83_0.a0=Larg0;
						L$ppre83_0.a0o=Marg0;
						break a;
					}
					L$ppre83_1=1;
					continue c;
					default:
					L$pdispatch11=Larg0[Marg0].i30|0;
					L$poptgep$poptgep58$poptgepsqueezed=Larg0[Marg0].a28;
					L$ppre83_0=Larg0[Marg0].a17.a6;
					L$ppre74=Larg0[Marg0].a16[0];
					L$poptgep$poptgep58$poptgepsqueezed={type:9,diskType:L$pdispatch9,index:L$pdispatch11,devId:(L$poptgep$poptgep58$poptgepsqueezed.i2|0),len:(L$poptgep$poptgep58$poptgepsqueezed.i3|0)};
					Larg0[Marg0].a16[0]=L$poptgep$poptgep58$poptgepsqueezed;
					L$ppre83_0.postMessage(L$poptgep$poptgep58$poptgepsqueezed);
					L$ppre83_0=Larg0[Marg0].a31;
					L$pdispatch11=Larg0[Marg0].i25|0;
					L$pdispatch11=L$pdispatch11+1|0;
					if(L$pdispatch11>>>0<(Larg0[Marg0].a23.length)>>>0){
						L$poptgep$poptgep58$poptgepsqueezed=Larg0[Marg0].a29;
						L$pdispatch10=L$pdispatch9;
						L$ppre74=L$ppre73;
						L$ppre83_1=2;
						continue c;
					}
				}
				break;
			}
		}
		L$poptgepsqueezed147=Larg0[Marg0].a17;
		L$poptgepsqueezed148={type:2};
		L$poptgepsqueezed147.a6.postMessage(L$poptgepsqueezed148);
	}
}
function __ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	tmp0=Larg0.i15|0;
	if(tmp0<<29>-536870912){
		if((tmp0&7)<2){
			if((tmp0&7)!==0){
				tmp1=Larg0.a11.a0;
				tmp0=Larg0.a11.a0o|0;
				if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
			}else{
				tmp1=Larg0.a7.a0;
				if(tmp1!==null){
					tmp1.a0=nullArray;
					tmp1.a0o=0;
				}
			}
		}else if((tmp0&7)===2){
			tmp1=Larg0.a12.a0;
			tmp0=Larg0.a12.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		}else{
			tmp1=Larg0.a13.a0;
			tmp0=Larg0.a13.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		}
	}else if((tmp0&7)<6){
		if((tmp0&7)===4){
			tmp1=Larg0.a8.a0;
			if(tmp1!==null){
				tmp1.a0=nullArray;
				tmp1.a0o=0;
			}
		}else{
			tmp1=Larg0.a9.a0;
			if(tmp1!==null){
				tmp1.a0=nullArray;
				tmp1.a0o=0;
			}
		}
	}else{
		tmp1=Larg0.a10.a0;
		if(tmp1!==null){
			tmp1.a0=nullArray;
			tmp1.a0o=0;
		}
	}
}
function __ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,L$poptgepsqueezed27=null,L$poptgepsqueezed23=null,tmp4=0,L$poptgepsqueezed28=null,tmp6=null,tmp7=0;
	tmp0=new constructor__ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE$pFrame().a;
	tmp1=tmp0[0];
	tmp1.a0=__ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE$presume;
	tmp1.a1=__ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE$pdestroy;
	tmp1.a5=Larg3;
	tmp1.i4=Larg2;
	tmp1.a3=Larg1;
	L$poptgepsqueezed27=tmp1.a2;
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed23=L$poptgepsqueezed27.a;
	tmp4=L$poptgepsqueezed27.o-1;
	Larg0.a0=L$poptgepsqueezed23;
	Larg0.a0o=tmp4;
	a:if(Larg2>>>0>1){
		console.log("Invalid floppy id",Larg2);
		L$poptgepsqueezed27=tmp1.a8;
		L$poptgepsqueezed27.a1.i0=0;
		L$poptgepsqueezed23=tmp1.a10;
		L$poptgepsqueezed23.a0=L$poptgepsqueezed27;
		L$poptgepsqueezed27.a2=L$poptgepsqueezed23;
		tmp1.i13=0;
		L$poptgepsqueezed27.a0=tmp0;
		L$poptgepsqueezed27.a0o=0;
	}else{
		L$poptgepsqueezed23=tmp1.a5;
		L$poptgepsqueezed28="dev";
		tmp4=L$poptgepsqueezed23.hasOwnProperty(L$poptgepsqueezed28);
		if(tmp4){
			L$poptgepsqueezed23=tmp1.a5.dev.this;
			tmp1.a6=L$poptgepsqueezed23;
			if((L$poptgepsqueezed23.i1|0)===0)___assert_fail(_$pstr$p94,0,_$pstr$p1$p35,0,585,___func__$p_ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE,0);
			;
			L$poptgepsqueezed28=tmp1.a5;
			tmp6="size";
			if(L$poptgepsqueezed28.hasOwnProperty(tmp6)){
				tmp4=tmp1.a5.size;
				tmp7=L$poptgepsqueezed23.i3|0;
				if((tmp4<<10|0)!==(tmp7|0)){
					console.log("Unexpected Floppy size");
					L$poptgepsqueezed27=tmp1.a9;
					L$poptgepsqueezed27.a1.i0=0;
					L$poptgepsqueezed23=tmp1.a11;
					L$poptgepsqueezed23.a0=L$poptgepsqueezed27;
					L$poptgepsqueezed27.a2=L$poptgepsqueezed23;
					tmp1.i13=1;
					L$poptgepsqueezed27.a0=tmp0;
					L$poptgepsqueezed27.a0o=0;
					break a;
				}
			}
			L$poptgepsqueezed23=tmp1.a6;
			L$poptgepsqueezed28=tmp1.a12;
			L$poptgepsqueezed23.a0.a4(L$poptgepsqueezed28,L$poptgepsqueezed23);
			L$poptgepsqueezed23=L$poptgepsqueezed28.a0;
			tmp4=L$poptgepsqueezed28.a0o|0;
			if(L$poptgepsqueezed23!==nullArray||tmp4!==0)if(L$poptgepsqueezed23[tmp4].a0!==null){
				tmp1.i13=2;
				tmp1=L$poptgepsqueezed23[tmp4].a[L$poptgepsqueezed23[tmp4].o- -1];
				tmp1.a0=tmp0;
				tmp1.a0o=0;
				break a;
			}
			L$poptgepsqueezed23=L$poptgepsqueezed23[tmp4].a[L$poptgepsqueezed23[tmp4].o- -1];
			tmp4=L$poptgepsqueezed23.a1.i1|0;
			L$poptgepsqueezed23=L$poptgepsqueezed28.a0;
			tmp7=L$poptgepsqueezed28.a0o|0;
			if(L$poptgepsqueezed23!==nullArray||tmp7!==0)L$poptgepsqueezed23[tmp7].a1(L$poptgepsqueezed23,tmp7);
			tmp0=tmp1.a6;
			tmp7=tmp1.i4|0;
			L$poptgepsqueezed23=tmp1.a3;
			tmp6=L$poptgepsqueezed23.a6;
			L$poptgepsqueezed28={type:41,index:tmp7,len:(tmp0.i3|0)};
			tmp6.postMessage(L$poptgepsqueezed28);
			L$poptgepsqueezed23=L$poptgepsqueezed23.a6;
			tmp0={type:45,index:tmp7,devId:(tmp0.i2|0),len:(tmp0.i3|0),writeProtected:((tmp4&2|0)===0?1:0)};
			L$poptgepsqueezed23.postMessage(tmp0);
		}
		tmp0=tmp1.a5;
		L$poptgepsqueezed23="size";
		tmp4=tmp0.hasOwnProperty(L$poptgepsqueezed23);
		if(tmp4){
			tmp0=tmp1.a3.a6;
			L$poptgepsqueezed23={type:41,index:1,len:((tmp1.a5.size)<<10)};
			tmp0.postMessage(L$poptgepsqueezed23);
		}
		tmp1.a7=L$poptgepsqueezed27;
		tmp1.a0=null;
		tmp0=L$poptgepsqueezed27.a0;
		tmp4=L$poptgepsqueezed27.a0o|0;
		(tmp0!==nullArray||tmp4!==0?tmp0:_NoopCoro$pFrame$pConst$p14)[tmp0!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p14].a0((tmp0!==nullArray||tmp4!==0?tmp0:_NoopCoro$pFrame$pConst$p14),tmp0!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p14);
	}
}
function __ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE$presume(Larg0,Marg0){
	var tmp0=null,L$ppre_0=0,L$poptgepsqueezed32=null,L$poptgepsqueezed33=null,tmp4=0,tmp5=null,tmp6=null;
	L$ppre_0=Larg0[Marg0].i13|0;
	L$poptgepsqueezed32=Larg0[Marg0].a12;
	a:{
		b:{
			if(L$ppre_0<<30>-1073741824){
				L$poptgepsqueezed33=Larg0[Marg0].a11;
				if((L$ppre_0&3)!==0){
					L$poptgepsqueezed33=L$poptgepsqueezed33.a0;
					L$ppre_0=L$poptgepsqueezed33.a1.i0|0;
					if((L$ppre_0&65535)>=256)L$poptgepsqueezed33.a1.i0=L$ppre_0&255;
					L$poptgepsqueezed33.a0=nullArray;
					L$poptgepsqueezed33.a0o=0;
				}else{
					tmp5=Larg0[Marg0].a10.a0;
					L$ppre_0=tmp5.a1.i0|0;
					if((L$ppre_0&65535)>=256)tmp5.a1.i0=L$ppre_0&255;
					tmp5.a0=nullArray;
					tmp5.a0o=0;
					tmp5=Larg0[Marg0].a5;
					tmp6="dev";
					L$ppre_0=tmp5.hasOwnProperty(tmp6);
					if(!(L$ppre_0))break b;
					tmp5=Larg0[Marg0].a5;
					tmp6=tmp5.dev.this;
					Larg0[Marg0].a6=tmp6;
					if((tmp6.i1|0)===0)___assert_fail(_$pstr$p94,0,_$pstr$p1$p35,0,585,___func__$p_ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE,0);
					;
					tmp0="size";
					if(tmp5.hasOwnProperty(tmp0)){
						L$ppre_0=tmp5.size;
						tmp4=tmp6.i3|0;
						if((L$ppre_0<<10|0)!==(tmp4|0)){
							console.log("Unexpected Floppy size");
							L$poptgepsqueezed32=Larg0[Marg0].a9;
							L$poptgepsqueezed32.a1.i0=0;
							L$poptgepsqueezed33.a0=L$poptgepsqueezed32;
							L$poptgepsqueezed32.a2=L$poptgepsqueezed33;
							Larg0[Marg0].i13=1;
							L$poptgepsqueezed32.a0=Larg0;
							L$poptgepsqueezed32.a0o=Marg0;
							break a;
						}
					}
				}
				L$poptgepsqueezed33=Larg0[Marg0].a6;
				L$poptgepsqueezed33.a0.a4(L$poptgepsqueezed32,L$poptgepsqueezed33);
				L$poptgepsqueezed33=L$poptgepsqueezed32.a0;
				L$ppre_0=L$poptgepsqueezed32.a0o|0;
				if(L$poptgepsqueezed33!==nullArray||L$ppre_0!==0){
					if(L$poptgepsqueezed33[L$ppre_0].a0!==null){
						Larg0[Marg0].i13=2;
						L$poptgepsqueezed32=L$poptgepsqueezed33[L$ppre_0].a[L$poptgepsqueezed33[L$ppre_0].o- -1];
						L$poptgepsqueezed32.a0=Larg0;
						L$poptgepsqueezed32.a0o=Marg0;
						break a;
					}
					L$poptgepsqueezed33=L$poptgepsqueezed33[L$ppre_0];
				}else{
					L$poptgepsqueezed33=null;
				}
			}else{
				L$poptgepsqueezed33=L$poptgepsqueezed32.a0;
				L$ppre_0=L$poptgepsqueezed32.a0o|0;
				L$poptgepsqueezed33=L$poptgepsqueezed33[L$ppre_0];
			}
			L$poptgepsqueezed33=L$poptgepsqueezed33.a[L$poptgepsqueezed33.o- -1];
			L$ppre_0=L$poptgepsqueezed33.a1.i1|0;
			L$poptgepsqueezed33=L$poptgepsqueezed32.a0;
			tmp4=L$poptgepsqueezed32.a0o|0;
			if(L$poptgepsqueezed33!==nullArray||tmp4!==0)L$poptgepsqueezed33[tmp4].a1(L$poptgepsqueezed33,tmp4);
			L$poptgepsqueezed32=Larg0[Marg0].a6;
			tmp4=Larg0[Marg0].i4|0;
			L$poptgepsqueezed33=Larg0[Marg0].a3;
			tmp5=L$poptgepsqueezed33.a6;
			tmp6={type:41,index:tmp4,len:(L$poptgepsqueezed32.i3|0)};
			tmp5.postMessage(tmp6);
			L$poptgepsqueezed33=L$poptgepsqueezed33.a6;
			L$poptgepsqueezed32={type:45,index:tmp4,devId:(L$poptgepsqueezed32.i2|0),len:(L$poptgepsqueezed32.i3|0),writeProtected:((L$ppre_0&2|0)===0?1:0)};
			L$poptgepsqueezed33.postMessage(L$poptgepsqueezed32);
		}
		L$poptgepsqueezed32=Larg0[Marg0].a5;
		L$poptgepsqueezed33="size";
		L$ppre_0=L$poptgepsqueezed32.hasOwnProperty(L$poptgepsqueezed33);
		if(L$ppre_0){
			L$poptgepsqueezed32=Larg0[Marg0].a3.a6;
			L$poptgepsqueezed33={type:41,index:1,len:((Larg0[Marg0].a5.size)<<10)};
			L$poptgepsqueezed32.postMessage(L$poptgepsqueezed33);
		}
		L$poptgepsqueezed32=Larg0[Marg0].a2;
		Larg0[Marg0].a7=L$poptgepsqueezed32;
		Larg0[Marg0].a0=null;
		L$poptgepsqueezed33=L$poptgepsqueezed32.a0;
		L$ppre_0=L$poptgepsqueezed32.a0o|0;
		(L$poptgepsqueezed33!==nullArray||L$ppre_0!==0?L$poptgepsqueezed33:_NoopCoro$pFrame$pConst$p14)[L$poptgepsqueezed33!==nullArray||L$ppre_0!==0?L$ppre_0:$NoopCoro$pFrame$pConst$p14].a0((L$poptgepsqueezed33!==nullArray||L$ppre_0!==0?L$poptgepsqueezed33:_NoopCoro$pFrame$pConst$p14),L$poptgepsqueezed33!==nullArray||L$ppre_0!==0?L$ppre_0:$NoopCoro$pFrame$pConst$p14);
	}
}
function __ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.i13|0;
		if(tmp0<<30>-1073741824){
			if((tmp0&3)!==0){
				tmp1=Larg0.a11.a0;
				if(tmp1!==null){
					tmp1.a0=nullArray;
					tmp1.a0o=0;
				}
			}else{
				tmp1=Larg0.a10.a0;
				if(tmp1!==null){
					tmp1.a0=nullArray;
					tmp1.a0o=0;
				}
			}
		}else{
			tmp1=Larg0.a12.a0;
			tmp0=Larg0.a12.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		}
	}
}
function __ZN11CheerpXBase13getDeviceByIdEj(Larg0){
	var tmp0=0,tmp1=null,tmp2=0,tmp3=null;
	if((Larg0|0)!==0){
		tmp3=__ZN11CheerpXBase7devicesE.a1;
		tmp0=__ZN11CheerpXBase7devicesE.a1o|0;
		tmp1=__ZN11CheerpXBase7devicesE.a0;
		tmp2=__ZN11CheerpXBase7devicesE.a0o|0;
		if((__imul(tmp0,4))-(__imul(tmp2,4))>>2>>>0>=Larg0>>>0){
			tmp3=tmp1[tmp2+(Larg0-1|0)|0];
			if((tmp3.i2|0)===(Larg0|0))return tmp3;
			___assert_fail(_$pstr$p2$p64,0,_$pstr$p1$p35,0,17,___func__$p_ZN11CheerpXBase13getDeviceByIdEj,0);
			;
		}
	}
	___assert_fail(_$pstr$p63,0,_$pstr$p1$p35,0,15,___func__$p_ZN11CheerpXBase13getDeviceByIdEj,0);
	;
}
function __ZN11CheerpXBase13createPromiseEv(Larg0){
	var tmp0=null;
	tmp0=new Object();
	Larg0.a0=new Promise(function(f,r){tmp0.fullfill=f;tmp0.reject=r;});;
	Larg0.a1=tmp0.fullfill;
	Larg0.a2=tmp0.reject;
}
function __ZN11CheerpXBaseC2Ev(Larg0){
	var L$poptgep$poptgep22$poptgepsqueezed=null;
	Larg0.a0=__ZTV11CheerpXBase;
	Larg0.a1=null;
	Larg0.a2=null;
	Larg0.a3=null;
	Larg0.a4=null;
	Larg0.a5=null;
	Larg0.a6=null;
	Larg0.i7=0;
	Larg0.i8=0;
	Larg0.a9=null;
	Larg0.a10=null;
	Larg0.a11[0]=null;
	Larg0.a12=null;
	Larg0.a13=null;
	Larg0.a14=null;
	Larg0.a15=null;
	Larg0.a16=null;
	Larg0.a17=null;
	Larg0.a18=null;
	Larg0.a19=null;
	Larg0.a20=null;
	Larg0.a21=null;
	L$poptgep$poptgep22$poptgepsqueezed=Larg0.a24;
	L$poptgep$poptgep22$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep22$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep22$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep22$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep22$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep22$poptgepsqueezed.a2.a0o=0;
	L$poptgep$poptgep22$poptgepsqueezed=Larg0.a25;
	L$poptgep$poptgep22$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep22$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep22$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep22$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep22$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep22$poptgepsqueezed.a2.a0o=0;
	Larg0.a26=null;
}
function __ZN7CheerpX5Linux12cheerpOSInitEv(Larg0,Larg1){
	var L$poptgepsqueezed62=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed65=null,tmp6=0,L$poptgep20$poptgep27$poptgepsqueezed=null,tmp8=null,L$poptgep36$poptgep$poptgepsqueezed=null,tmp10=0;
	tmp3=new constructor__ZN7CheerpX5Linux12cheerpOSInitEv$pFrame().a;
	tmp4=tmp3[0];
	tmp4.a0=__ZN7CheerpX5Linux12cheerpOSInitEv$presume;
	tmp4.a1=__ZN7CheerpX5Linux12cheerpOSInitEv$pdestroy;
	tmp4.a8=Larg1;
	L$poptgepsqueezed62=tmp4.a2;
	L$poptgepsqueezed62.a0=nullArray;
	L$poptgepsqueezed62.a0o=0;
	tmp1=L$poptgepsqueezed62.a1;
	tmp1.i0=0;
	L$poptgepsqueezed65=L$poptgepsqueezed62.a;
	tmp6=L$poptgepsqueezed62.o-1;
	Larg0.a0=L$poptgepsqueezed65;
	Larg0.a0o=tmp6;
	L$poptgepsqueezed65=new constructor_class$p_Z11CXUIConsole();
	L$poptgepsqueezed65.i0=0;
	L$poptgepsqueezed65.a1=Larg1;
	L$poptgepsqueezed65.a2=null;
	L$poptgepsqueezed65.i5=0;
	L$poptgepsqueezed65.i6=0;
	L$poptgepsqueezed65.i7=1;
	L$poptgepsqueezed65.i8=0;
	L$poptgep20$poptgep27$poptgepsqueezed=L$poptgepsqueezed65.a9;
	L$poptgep20$poptgep27$poptgepsqueezed.a0=nullArray;
	L$poptgep20$poptgep27$poptgepsqueezed.a0o=0;
	L$poptgep20$poptgep27$poptgepsqueezed.a1=nullArray;
	L$poptgep20$poptgep27$poptgepsqueezed.a1o=0;
	L$poptgep20$poptgep27$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep20$poptgep27$poptgepsqueezed.a2.a0o=0;
	L$poptgepsqueezed65.a10[0]=0;
	L$poptgep20$poptgep27$poptgepsqueezed=L$poptgepsqueezed65.a11;
	L$poptgep20$poptgep27$poptgepsqueezed.a0=nullArray;
	L$poptgep20$poptgep27$poptgepsqueezed.a0o=0;
	L$poptgep20$poptgep27$poptgepsqueezed.a1=nullArray;
	L$poptgep20$poptgep27$poptgepsqueezed.a1o=0;
	L$poptgep20$poptgep27$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep20$poptgep27$poptgepsqueezed.a2.a0o=0;
	Larg1.a27=L$poptgepsqueezed65;
	L$poptgepsqueezed65=tmp4.a3;
	__ZN7CheerpX5Linux28requestCreateExternalProcessEv(L$poptgepsqueezed65,Larg1);
	L$poptgep20$poptgep27$poptgepsqueezed=L$poptgepsqueezed65.a0;
	tmp6=L$poptgepsqueezed65.a0o|0;
	a:{
		if(L$poptgep20$poptgep27$poptgepsqueezed!==nullArray||tmp6!==0)if(L$poptgep20$poptgep27$poptgepsqueezed[tmp6].a0!==null){
			tmp4.i6=0;
			tmp4=L$poptgep20$poptgep27$poptgepsqueezed[tmp6].a[L$poptgep20$poptgep27$poptgepsqueezed[tmp6].o- -1];
			tmp4.a0=tmp3;
			tmp4.a0o=0;
			break a;
		}
		tmp8=tmp4.a8;
		L$poptgep20$poptgep27$poptgepsqueezed=L$poptgep20$poptgep27$poptgepsqueezed[tmp6].a[L$poptgep20$poptgep27$poptgepsqueezed[tmp6].o- -1];
		tmp8.i42=L$poptgep20$poptgep27$poptgepsqueezed.a1.i1|0;
		L$poptgep20$poptgep27$poptgepsqueezed=L$poptgepsqueezed65.a0;
		tmp6=L$poptgepsqueezed65.a0o|0;
		if(L$poptgep20$poptgep27$poptgepsqueezed!==nullArray||tmp6!==0)L$poptgep20$poptgep27$poptgepsqueezed[tmp6].a1(L$poptgep20$poptgep27$poptgepsqueezed,tmp6);
		__ZN7CheerpX5Linux14requestAppInitEv(L$poptgepsqueezed65,tmp4.a8);
		L$poptgep20$poptgep27$poptgepsqueezed=L$poptgepsqueezed65.a0;
		tmp6=L$poptgepsqueezed65.a0o|0;
		if(L$poptgep20$poptgep27$poptgepsqueezed!==nullArray||tmp6!==0){
			if(L$poptgep20$poptgep27$poptgepsqueezed[tmp6].a0!==null){
				tmp4.i6=1;
				tmp4=L$poptgep20$poptgep27$poptgepsqueezed[tmp6].a[L$poptgep20$poptgep27$poptgepsqueezed[tmp6].o- -1];
				tmp4.a0=tmp3;
				tmp4.a0o=0;
				break a;
			}
			L$poptgep20$poptgep27$poptgepsqueezed[tmp6].a1(L$poptgep20$poptgep27$poptgepsqueezed,tmp6);
		}
		L$poptgep20$poptgep27$poptgepsqueezed=tmp4.a8;
		__ZN7CheerpX5Linux13runFSRequestsEv(tmp4.a4,L$poptgep20$poptgep27$poptgepsqueezed);
		L$poptgep36$poptgep$poptgepsqueezed=L$poptgep20$poptgep27$poptgepsqueezed.a44;
		tmp8=L$poptgep36$poptgep$poptgepsqueezed.a0;
		tmp6=L$poptgep36$poptgep$poptgepsqueezed.a0o|0;
		L$poptgep20$poptgep27$poptgepsqueezed=L$poptgep36$poptgep$poptgepsqueezed.a1;
		tmp10=L$poptgep36$poptgep$poptgepsqueezed.a1o|0;
		tmp4.a9=L$poptgep20$poptgep27$poptgepsqueezed[tmp10];
		b:{
			c:if(tmp8!==L$poptgep20$poptgep27$poptgepsqueezed||tmp6!==tmp10){
				L$poptgep20$poptgep27$poptgepsqueezed=tmp4.a5;
				while(1){
					tmp4.a11=tmp8;
					tmp4.a11o=tmp6;
					tmp4.i10=0;
					L$poptgep36$poptgep$poptgepsqueezed=tmp8[tmp6].a3;
					if(L$poptgep36$poptgep$poptgepsqueezed!==null){
						L$poptgep36$poptgep$poptgepsqueezed.a0.a2(L$poptgepsqueezed65,L$poptgep36$poptgep$poptgepsqueezed,tmp4.a8);
						tmp8=L$poptgepsqueezed65.a0;
						tmp6=L$poptgepsqueezed65.a0o|0;
						if(tmp8!==nullArray||tmp6!==0){
							if(tmp8[tmp6].a0!==null){
								tmp4.i6=2;
								tmp4=tmp8[tmp6].a[tmp8[tmp6].o- -1];
								tmp4.a0=tmp3;
								tmp4.a0o=0;
								break a;
							}
							tmp8[tmp6].a1(tmp8,tmp6);
						}
						tmp8=tmp4.a11;
						tmp6=tmp4.a11o|0;
						tmp2=tmp8;
						tmp8=tmp2[tmp6];
						tmp6=tmp2[tmp6].a3.i2|0;
					}else{
						tmp8=tmp8[tmp6];
						tmp6=0;
					}
					L$poptgep36$poptgep$poptgepsqueezed=tmp4.a8;
					tmp2=tmp8.a2;
					__ZNSsC2B7v160000IDnEEPKc(L$poptgepsqueezed65,tmp2,0);
					__ZN7CheerpX5Linux12requestMountERKSsS2_j(L$poptgep20$poptgep27$poptgepsqueezed,L$poptgep36$poptgep$poptgepsqueezed,L$poptgepsqueezed65,tmp8.a4,tmp6);
					tmp8=L$poptgep20$poptgep27$poptgepsqueezed.a0;
					tmp6=L$poptgep20$poptgep27$poptgepsqueezed.a0o|0;
					if(tmp8!==nullArray||tmp6!==0)if(tmp8[tmp6].a0!==null){
						tmp4.i6=3;
						tmp4=tmp8[tmp6].a[tmp8[tmp6].o- -1];
						tmp4.a0=tmp3;
						tmp4.a0o=0;
						break a;
					}
					tmp8=tmp8[tmp6].a[tmp8[tmp6].o- -1];
					tmp6=tmp8.a1.i1|0;
					tmp8=L$poptgep20$poptgep27$poptgepsqueezed.a0;
					tmp10=L$poptgep20$poptgep27$poptgepsqueezed.a0o|0;
					if(tmp8!==nullArray||tmp10!==0)tmp8[tmp10].a1(tmp8,tmp10);
					if(tmp6>>>0<3){
						if((tmp6|0)===0){
							tmp8=tmp4.a11;
							tmp6=tmp4.a11o|0;
							if(tmp8[tmp6+1|0]===tmp4.a9)break c;
							tmp6=tmp6+1|0;
							tmp8=tmp8;
							continue;
						}
						if((tmp6|0)===1){
							tmp3={d:_$pstr$p113,o:0};
						}else{
							tmp3={d:_$pstr$p1$p114,o:0};
						}
					}else{
						tmp3=((tmp6|0)===3?{d:_$pstr$p2$p115,o:0}:((tmp6|0)===4?{d:_$pstr$p3$p116,o:0}:{d:_$pstr$p4$p112,o:0}));
					}
					break;
				}
				L$poptgepsqueezed65=tmp4.a11;
				tmp6=tmp4.a11o|0;
				L$poptgep20$poptgep27$poptgepsqueezed=L$poptgepsqueezed65[tmp6].a2;
				L$poptgepsqueezed65=L$poptgepsqueezed65[tmp6].a4.a2;
				___printf(_$pstr$p5$p117,0,{d:L$poptgep20$poptgep27$poptgepsqueezed,o:0},{d:L$poptgepsqueezed65,o:0},tmp3);
				tmp6=tmp1.i0|0;
				tmp1.a1=null;
				if((tmp6&65535)>=256)break b;
				tmp1.i0=tmp6|256;
				break b;
			}
			tmp3=CheerpX.Linux.wrap(Object.create(CheerpX.Linux.prototype,{this:{value:tmp4.a8}}));
			tmp1.i0=256;
			tmp1.a1=tmp3;
		}
		tmp4.a12=L$poptgepsqueezed62;
		tmp4.a0=null;
		tmp3=L$poptgepsqueezed62.a0;
		tmp6=L$poptgepsqueezed62.a0o|0;
		(tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst$p118)[tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst$p118].a0((tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst$p118),tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux12cheerpOSInitEv$presume(Larg0,Marg0){
	var L$poptgepsqueezed44=null,L$poptgepsqueezed46=null,L$ppre$mphi$pdispatch_0=null,L$ppre$mphi$pdispatch_1=0,L$ppre_1=0,L$poptgepsqueezed43=null,L$ppre_0=null,L$pdispatch7_0=null,L$pdispatch7_1=0,L$poptgep$poptgep11$poptgep12=null,tmp10=null;
	L$ppre_1=Larg0[Marg0].i6|0;
	L$poptgepsqueezed43=Larg0[Marg0].a2;
	L$poptgepsqueezed44=Larg0[Marg0].a5;
	L$poptgepsqueezed46=Larg0[Marg0].a3;
	a:{
		b:{
			c:{
				if((L$ppre_1&7)<2){
					d:{
						if((L$ppre_1&7)!==0){
							L$ppre_0=L$poptgepsqueezed46.a0;
							L$ppre_1=L$poptgepsqueezed46.a0o|0;
							if(L$ppre_0===nullArray&&L$ppre_1===0)break d;
							L$ppre_1=L$ppre_1;
							L$ppre_0=L$ppre_0;
						}else{
							L$ppre_0=Larg0[Marg0].a8;
							L$poptgep$poptgep11$poptgep12=L$poptgepsqueezed46.a0;
							L$ppre_1=L$poptgepsqueezed46.a0o|0;
							L$poptgep$poptgep11$poptgep12=L$poptgep$poptgep11$poptgep12[L$ppre_1].a[L$poptgep$poptgep11$poptgep12[L$ppre_1].o- -1];
							L$ppre_0.i42=L$poptgep$poptgep11$poptgep12.a1.i1|0;
							L$ppre_0=L$poptgepsqueezed46.a0;
							L$ppre_1=L$poptgepsqueezed46.a0o|0;
							if(L$ppre_0!==nullArray||L$ppre_1!==0)L$ppre_0[L$ppre_1].a1(L$ppre_0,L$ppre_1);
							__ZN7CheerpX5Linux14requestAppInitEv(L$poptgepsqueezed46,Larg0[Marg0].a8);
							L$ppre_0=L$poptgepsqueezed46.a0;
							L$ppre_1=L$poptgepsqueezed46.a0o|0;
							if(L$ppre_0===nullArray&&L$ppre_1===0)break d;
							if(L$ppre_0[L$ppre_1].a0!==null){
								Larg0[Marg0].i6=1;
								L$poptgepsqueezed43=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
								L$poptgepsqueezed43.a0=Larg0;
								L$poptgepsqueezed43.a0o=Marg0;
								break a;
							}
							L$ppre_1=L$ppre_1;
							L$ppre_0=L$ppre_0;
						}
						L$ppre_0[L$ppre_1].a1(L$ppre_0,L$ppre_1);
					}
					L$ppre_0=Larg0[Marg0].a8;
					__ZN7CheerpX5Linux13runFSRequestsEv(Larg0[Marg0].a4,L$ppre_0);
					L$ppre_0=L$ppre_0.a44;
					L$pdispatch7_0=L$ppre_0.a0;
					L$pdispatch7_1=L$ppre_0.a0o|0;
					L$poptgep$poptgep11$poptgep12=L$ppre_0.a1;
					L$ppre_1=L$ppre_0.a1o|0;
					Larg0[Marg0].a9=L$poptgep$poptgep11$poptgep12[L$ppre_1];
					if(L$pdispatch7_0===L$poptgep$poptgep11$poptgep12&&L$pdispatch7_1===L$ppre_1)break c;
					L$ppre_1=2;
				}else if((L$ppre_1&7)===2){
					L$ppre_0=L$poptgepsqueezed46.a0;
					L$ppre_1=L$poptgepsqueezed46.a0o|0;
					if(L$ppre_0!==nullArray||L$ppre_1!==0){
						L$ppre$mphi$pdispatch_0=L$ppre_0;
						L$ppre$mphi$pdispatch_1=L$ppre_1;
						L$ppre_1=-1;
					}else{
						L$ppre_1=0;
					}
				}else{
					L$ppre_0=L$poptgepsqueezed44.a0;
					L$ppre_1=L$poptgepsqueezed44.a0o|0;
					L$ppre_0=L$ppre_0[L$ppre_1];
					L$ppre_1=1;
				}
				d:while(1){
					switch(L$ppre_1|0){
						case 0:
						L$ppre_0=Larg0[Marg0].a11;
						L$ppre_1=Larg0[Marg0].a11o|0;
						L$poptgep$poptgep11$poptgep12=L$ppre_0;
						L$ppre_0=L$poptgep$poptgep11$poptgep12[L$ppre_1];
						L$ppre_1=L$poptgep$poptgep11$poptgep12[L$ppre_1].a3.i2|0;
						break;
						case 1:
						L$pdispatch7_0=L$ppre_0.a[L$ppre_0.o- -1];
						L$ppre_1=L$pdispatch7_0.a1.i1|0;
						L$pdispatch7_0=L$poptgepsqueezed44.a0;
						L$pdispatch7_1=L$poptgepsqueezed44.a0o|0;
						if(L$pdispatch7_0!==nullArray||L$pdispatch7_1!==0)L$pdispatch7_0[L$pdispatch7_1].a1(L$pdispatch7_0,L$pdispatch7_1);
						if(L$ppre_1>>>0<3){
							if((L$ppre_1|0)===0){
								L$pdispatch7_0=Larg0[Marg0].a11;
								L$ppre_1=Larg0[Marg0].a11o|0;
								if(L$pdispatch7_0[L$ppre_1+1|0]===Larg0[Marg0].a9)break c;
								L$pdispatch7_0=L$pdispatch7_0;
								L$pdispatch7_1=L$ppre_1+1|0;
								L$ppre_1=2;
								continue d;
							}
							if((L$ppre_1|0)===1){
								L$ppre_0={d:_$pstr$p113,o:0};
							}else{
								L$ppre_0={d:_$pstr$p1$p114,o:0};
							}
						}else{
							L$ppre_0=((L$ppre_1|0)===3?{d:_$pstr$p2$p115,o:0}:((L$ppre_1|0)===4?{d:_$pstr$p3$p116,o:0}:{d:_$pstr$p4$p112,o:0}));
						}
						L$poptgep$poptgep11$poptgep12=Larg0[Marg0].a11;
						L$ppre_1=Larg0[Marg0].a11o|0;
						tmp10=L$poptgep$poptgep11$poptgep12[L$ppre_1].a2;
						L$poptgep$poptgep11$poptgep12=L$poptgep$poptgep11$poptgep12[L$ppre_1].a4.a2;
						___printf(_$pstr$p5$p117,0,{d:tmp10,o:0},{d:L$poptgep$poptgep11$poptgep12,o:0},L$ppre_0);
						L$ppre_0=L$poptgepsqueezed43.a1;
						L$ppre_1=L$ppre_0.i0|0;
						L$ppre_0.a1=null;
						if((L$ppre_1&65535)>=256)break b;
						L$ppre_0.i0=L$ppre_1|256;
						break b;
						case 2:
						Larg0[Marg0].a11=L$pdispatch7_0;
						Larg0[Marg0].a11o=L$pdispatch7_1;
						Larg0[Marg0].i10=0;
						L$poptgep$poptgep11$poptgep12=L$pdispatch7_0[L$pdispatch7_1].a3;
						if(L$poptgep$poptgep11$poptgep12!==null){
							L$poptgep$poptgep11$poptgep12.a0.a2(L$poptgepsqueezed46,L$poptgep$poptgep11$poptgep12,Larg0[Marg0].a8);
							L$poptgep$poptgep11$poptgep12=L$poptgepsqueezed46.a0;
							L$ppre_1=L$poptgepsqueezed46.a0o|0;
							if(L$poptgep$poptgep11$poptgep12!==nullArray||L$ppre_1!==0){
								if(L$poptgep$poptgep11$poptgep12[L$ppre_1].a0!==null){
									Larg0[Marg0].i6=2;
									L$poptgepsqueezed43=L$poptgep$poptgep11$poptgep12[L$ppre_1].a[L$poptgep$poptgep11$poptgep12[L$ppre_1].o- -1];
									L$poptgepsqueezed43.a0=Larg0;
									L$poptgepsqueezed43.a0o=Marg0;
									break a;
								}
								L$ppre$mphi$pdispatch_0=L$poptgep$poptgep11$poptgep12;
								L$ppre$mphi$pdispatch_1=L$ppre_1;
								L$ppre_1=-1;
								continue d;
							}
							L$ppre_1=0;
							continue d;
						}
						L$ppre_0=L$pdispatch7_0[L$pdispatch7_1];
						L$ppre_1=0;
						break;
						default:
						L$ppre$mphi$pdispatch_0[L$ppre$mphi$pdispatch_1].a1(L$ppre$mphi$pdispatch_0,L$ppre$mphi$pdispatch_1);
						L$ppre_1=0;
						continue d;
					}
					L$poptgep$poptgep11$poptgep12=Larg0[Marg0].a8;
					tmp10=L$ppre_0.a2;
					__ZNSsC2B7v160000IDnEEPKc(L$poptgepsqueezed46,tmp10,0);
					__ZN7CheerpX5Linux12requestMountERKSsS2_j(L$poptgepsqueezed44,L$poptgep$poptgep11$poptgep12,L$poptgepsqueezed46,L$ppre_0.a4,L$ppre_1);
					L$ppre_0=L$poptgepsqueezed44.a0;
					L$ppre_1=L$poptgepsqueezed44.a0o|0;
					if(L$ppre_0!==nullArray||L$ppre_1!==0){
						if(L$ppre_0[L$ppre_1].a0!==null){
							Larg0[Marg0].i6=3;
							L$poptgepsqueezed43=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
							L$poptgepsqueezed43.a0=Larg0;
							L$poptgepsqueezed43.a0o=Marg0;
							break a;
						}
						L$ppre_0=L$ppre_0[L$ppre_1];
						L$ppre_1=1;
						continue d;
					}
					L$ppre_0=null;
					L$ppre_1=1;
					continue d;
				}
			}
			L$ppre_0=CheerpX.Linux.wrap(Object.create(CheerpX.Linux.prototype,{this:{value:Larg0[Marg0].a8}}));
			L$poptgep$poptgep11$poptgep12=L$poptgepsqueezed43.a1;
			L$poptgep$poptgep11$poptgep12.i0=256;
			L$poptgep$poptgep11$poptgep12.a1=L$ppre_0;
		}
		Larg0[Marg0].a12=L$poptgepsqueezed43;
		Larg0[Marg0].a0=null;
		L$ppre_0=L$poptgepsqueezed43.a0;
		L$ppre_1=L$poptgepsqueezed43.a0o|0;
		(L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118)[L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118].a0((L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118),L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux12cheerpOSInitEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,L$poptgepsqueezed5=null,tmp2=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.i6|0;
		L$poptgepsqueezed5=Larg0.a3;
		if((tmp0&7)<2){
			if((tmp0&7)!==0){
				tmp2=L$poptgepsqueezed5.a0;
				tmp0=L$poptgepsqueezed5.a0o|0;
				if(tmp2!==nullArray||tmp0!==0)tmp2[tmp0].a1(tmp2,tmp0);
			}else{
				tmp2=L$poptgepsqueezed5.a0;
				tmp0=L$poptgepsqueezed5.a0o|0;
				if(tmp2!==nullArray||tmp0!==0)tmp2[tmp0].a1(tmp2,tmp0);
			}
		}else if((tmp0&7)===2){
			tmp2=L$poptgepsqueezed5.a0;
			tmp0=L$poptgepsqueezed5.a0o|0;
			if(tmp2!==nullArray||tmp0!==0)tmp2[tmp0].a1(tmp2,tmp0);
		}else{
			L$poptgepsqueezed5=Larg0.a5.a0;
			tmp0=Larg0.a5.a0o|0;
			if(L$poptgepsqueezed5!==nullArray||tmp0!==0)L$poptgepsqueezed5[tmp0].a1(L$poptgepsqueezed5,tmp0);
		}
	}
}
function __ZN7CheerpX5Linux28requestCreateExternalProcessEv(Larg0,Larg1){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed9=null,tmp5=0,tmp6=null;
	tmp2=create__ZN7CheerpX5Linux28requestCreateExternalProcessEv$pFrame({a0:null,a1:null,a2:tmp2={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:{a0:nullArray,a0o:0},i4:0,a5:tmp2=[0],a6:null}).a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux28requestCreateExternalProcessEv$presume;
	tmp3.a1=__ZN7CheerpX5Linux28requestCreateExternalProcessEv$pdestroy;
	L$poptgepsqueezed8=tmp3.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	L$poptgepsqueezed9=L$poptgepsqueezed8.a;
	tmp5=L$poptgepsqueezed8.o-1;
	Larg0.a0=L$poptgepsqueezed9;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed9=tmp3.a3;
	__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb(L$poptgepsqueezed9,Larg1,-1,{type:33,arg1:Larg1.a9},1);
	tmp6=L$poptgepsqueezed9.a0;
	tmp5=L$poptgepsqueezed9.a0o|0;
	a:{
		if(tmp6!==nullArray||tmp5!==0)if(tmp6[tmp5].a0!==null){
			tmp3.i4=0;
			tmp3=tmp6[tmp5].a[tmp6[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp6=tmp6[tmp5].a[tmp6[tmp5].o- -1];
		tmp5=tmp6.a1.i1|0;
		tmp1.i0=256;
		tmp1.i1=tmp5;
		tmp6=L$poptgepsqueezed9.a0;
		tmp5=L$poptgepsqueezed9.a0o|0;
		if(tmp6!==nullArray||tmp5!==0)tmp6[tmp5].a1(tmp6,tmp5);
		tmp3.a6=L$poptgepsqueezed8;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed8.a0;
		tmp5=L$poptgepsqueezed8.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux14requestAppInitEv(Larg0,Larg1){
	var L$poptgepsqueezed7=null,tmp1=null,tmp2=null,L$poptgepsqueezed8=null,tmp4=0,tmp5=null;
	tmp1=create__ZN7CheerpX5Linux14requestAppInitEv$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:tmp1={a0:nullArray,a0o:0},i5:0}).a;
	tmp2=tmp1[0];
	tmp2.a0=__ZN7CheerpX5Linux14requestAppInitEv$presume;
	tmp2.a1=__ZN7CheerpX5Linux14requestAppInitEv$pdestroy;
	L$poptgepsqueezed7=tmp2.a2;
	L$poptgepsqueezed7.a0=nullArray;
	L$poptgepsqueezed7.a0o=0;
	L$poptgepsqueezed8=L$poptgepsqueezed7.a;
	tmp4=L$poptgepsqueezed7.o-1;
	Larg0.a0=L$poptgepsqueezed8;
	Larg0.a0o=tmp4;
	tmp4=Larg1.i42|0;
	L$poptgepsqueezed8=tmp2.a4;
	__ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b(L$poptgepsqueezed8,Larg1,tmp4,{type:43,tid:tmp4});
	tmp5=L$poptgepsqueezed8.a0;
	tmp4=L$poptgepsqueezed8.a0o|0;
	a:{
		if(tmp5!==nullArray||tmp4!==0)if(tmp5[tmp4].a0!==null){
			tmp2.i5=0;
			tmp2=tmp5[tmp4].a[tmp5[tmp4].o- -1];
			tmp2.a0=tmp1;
			tmp2.a0o=0;
			break a;
		}
		tmp5=L$poptgepsqueezed8.a0;
		tmp4=L$poptgepsqueezed8.a0o|0;
		if(tmp5!==nullArray||tmp4!==0)tmp5[tmp4].a1(tmp5,tmp4);
		tmp2.a3=L$poptgepsqueezed7;
		tmp2.a0=null;
		tmp1=L$poptgepsqueezed7.a0;
		tmp4=L$poptgepsqueezed7.a0o|0;
		(tmp1!==nullArray||tmp4!==0?tmp1:_NoopCoro$pFrame$pConst$p118)[tmp1!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p118].a0((tmp1!==nullArray||tmp4!==0?tmp1:_NoopCoro$pFrame$pConst$p118),tmp1!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux13runFSRequestsEv(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,L$poptgepsqueezed100=null,tmp5=null,tmp6=0,tmp7=null,tmp8=null,tmp9=0,tmp10=0,tmp11=0,tmp12=0;
	tmp0=new constructor__ZN7CheerpX5Linux13runFSRequestsEv$pFrame().a;
	tmp3=tmp0[0];
	tmp3.a0=__ZN7CheerpX5Linux13runFSRequestsEv$presume;
	tmp3.a1=__ZN7CheerpX5Linux13runFSRequestsEv$pdestroy;
	tmp3.a6=Larg1;
	L$poptgepsqueezed100=tmp3.a2.a[tmp3.a2.o-1];
	Larg0.a0=L$poptgepsqueezed100;
	L$poptgepsqueezed100=tmp3.a3;
	a:while(1){
		tmp3.a7=tmp5;
		__ZN7CheerpX5Linux12MessageQueue3popEv(L$poptgepsqueezed100,tmp3.a6.a46);
		tmp5=L$poptgepsqueezed100.a0;
		tmp6=L$poptgepsqueezed100.a0o|0;
		if(tmp5!==nullArray||tmp6!==0)if(tmp5[tmp6].a0!==null){
			tmp3.i4=0;
			tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
			tmp3.a0=tmp0;
			tmp3.a0o=0;
			break a;
		}
		tmp5=tmp5[tmp6].a[tmp5[tmp6].o- -1];
		tmp5=tmp5.a1.a1;
		tmp3.a8=tmp5;
		tmp7=L$poptgepsqueezed100.a0;
		tmp6=L$poptgepsqueezed100.a0o|0;
		if(tmp7!==nullArray||tmp6!==0)tmp7[tmp6].a1(tmp7,tmp6);
		switch((tmp5.type)|0){
			case 19:
			tmp7=tmp3.a6;
			tmp8=tmp5.path;
			tmp6=tmp5.tid;
			tmp9=tmp5.replyType;
			tmp10=tmp5.flags;
			tmp11=tmp5.permType;
			tmp12=tmp5.devId;
			tmp1=tmp5.uid;
			__ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj(L$poptgepsqueezed100,tmp7,tmp8,tmp6,tmp9,tmp10,tmp11,tmp12,tmp1,tmp5.gid);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=1;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			case 66:
			tmp7=tmp3.a6;
			tmp8=tmp5.path;
			tmp6=tmp5.tid;
			tmp9=tmp5.replyType;
			tmp10=tmp5.permType;
			tmp11=tmp5.devId;
			tmp12=tmp5.uid;
			__ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj(L$poptgepsqueezed100,tmp7,tmp8,tmp6,tmp9,tmp10,tmp11,tmp12,tmp5.gid);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=2;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			case 70:
			tmp7=tmp3.a6;
			tmp8=tmp5.path;
			tmp6=tmp5.tid;
			tmp9=tmp5.replyType;
			tmp10=tmp5.permType;
			tmp2=tmp5.value;
			tmp11=tmp5.devId;
			tmp12=tmp5.uid;
			__ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj(L$poptgepsqueezed100,tmp7,tmp8,tmp6,tmp9,tmp10,tmp2,tmp11,tmp12,tmp5.gid);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=3;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			case 23:
			tmp7=tmp3.a6;
			tmp6=tmp5.replyType;
			tmp9=tmp5.tid;
			tmp10=tmp5.fd;
			tmp11=tmp5.fileOffset;
			__ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE(L$poptgepsqueezed100,tmp7,tmp6,tmp9,tmp10,tmp11,tmp5.slices);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=4;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			case 54:
			tmp7=tmp3.a6;
			tmp7.a46.i6=1;
			tmp6=tmp5.replyType;
			tmp9=tmp5.tid;
			tmp10=tmp5.fd;
			tmp11=tmp5.fileOffset;
			__ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE(L$poptgepsqueezed100,tmp7,tmp6,tmp9,tmp10,tmp11,tmp5.slices);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5!==nullArray||tmp6!==0){
				if(tmp5[tmp6].a0!==null){
					tmp3.i4=5;
					tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
					tmp3.a0=tmp0;
					tmp3.a0o=0;
					break a;
				}
				tmp5[tmp6].a1(tmp5,tmp6);
			}
			tmp5=tmp3.a6;
			tmp5.a46.i6=0;
			__ZN7CheerpX5Linux18checkPendingWritesEv(tmp5);
			break;
			case 22:
			tmp7=tmp3.a6;
			tmp7.a46.i6=1;
			tmp6=tmp5.replyType;
			tmp9=tmp5.fd;
			__ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj(L$poptgepsqueezed100,tmp7,tmp6,tmp9,tmp5.value);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5!==nullArray||tmp6!==0){
				if(tmp5[tmp6].a0!==null){
					tmp3.i4=6;
					tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
					tmp3.a0=tmp0;
					tmp3.a0o=0;
					break a;
				}
				tmp5[tmp6].a1(tmp5,tmp6);
			}
			tmp5=tmp3.a6;
			tmp5.a46.i6=0;
			__ZN7CheerpX5Linux18checkPendingWritesEv(tmp5);
			break;
			case 61:
			tmp7=tmp3.a6;
			tmp6=tmp5.replyType;
			tmp9=tmp5.tid;
			tmp10=tmp5.fd;
			__ZN7CheerpX5Linux18runFSFchmodRequestE12CORE_MESSAGEjjj(tmp7,tmp6,tmp9,tmp10,tmp5.permType);
			break;
			case 63:
			tmp7=tmp3.a6;
			tmp6=tmp5.replyType;
			tmp9=tmp5.tid;
			tmp10=tmp5.devId;
			tmp8=tmp5.oldPath;
			__ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_(L$poptgepsqueezed100,tmp7,tmp6,tmp9,tmp10,tmp8,tmp5.newPath);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=7;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			case 17:
			tmp7=tmp3.a6;
			tmp6=tmp5.replyType;
			tmp9=tmp5.tid;
			tmp8=tmp5.path;
			tmp10=tmp5.devId;
			__ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj(L$poptgepsqueezed100,tmp7,tmp6,tmp9,tmp8,tmp10,tmp5.parentInodeId);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=8;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			case 68:
			tmp7=tmp3.a6;
			tmp6=tmp5.replyType;
			tmp9=tmp5.tid;
			tmp8=tmp5.path;
			tmp10=tmp5.devId;
			__ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj(L$poptgepsqueezed100,tmp7,tmp6,tmp9,tmp8,tmp10,tmp5.inodeId);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=9;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			case 65:
			tmp7=tmp3.a6;
			tmp6=tmp5.replyType;
			tmp9=tmp5.tid;
			tmp10=tmp5.devId;
			tmp8=tmp5.oldPath;
			__ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_(L$poptgepsqueezed100,tmp7,tmp6,tmp9,tmp10,tmp8,tmp5.newPath);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=10;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			case 64:
			tmp7=tmp3.a6;
			tmp6=tmp5.replyType;
			tmp9=tmp5.tid;
			tmp8=tmp5.path;
			__ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj(L$poptgepsqueezed100,tmp7,tmp6,tmp9,tmp8,tmp5.devId);
			tmp5=L$poptgepsqueezed100.a0;
			tmp6=L$poptgepsqueezed100.a0o|0;
			if(tmp5===nullArray&&tmp6===0)break;
			if(tmp5[tmp6].a0!==null){
				tmp3.i4=11;
				tmp3=tmp5[tmp6].a[tmp5[tmp6].o- -1];
				tmp3.a0=tmp0;
				tmp3.a0o=0;
				break a;
			}
			tmp5[tmp6].a1(tmp5,tmp6);
			break;
			default:
			___assert_fail(_$pstr$p61,0,_$pstr$p15$p124,0,221,___func__$p_ZN7CheerpX5Linux13runFSRequestsEv,0);
			;
		}
		tmp5=tmp3.a8;
		continue a;
	}
}
function __ZNSsC2B7v160000IDnEEPKc(Larg0,Larg1,Marg1){
	var tmp0=0,tmp1=null,Lgeptoindexphi=0,tmp3=0,Lgeptoindexphi9=0,Lxtraiter=0,Lprol$piter=0;
	if((Larg1[Marg1]&255)!==0){
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if((Larg1[Marg1+Lgeptoindexphi|0]&255)!==0)continue;
			break;
		}
	}else{
		Lgeptoindexphi=0;
	}
	tmp3=(Marg1);
	Lgeptoindexphi=(Marg1+Lgeptoindexphi|0);
	tmp0=Lgeptoindexphi-tmp3|0;
	if(tmp0>>>0>2147483631)_abort();
	;
	Lgeptoindexphi9=(tmp0& -16)+16|0;
	tmp1=new Uint8Array(Lgeptoindexphi9/1|0);
	Larg0.a2=tmp1;
	Larg0.i0=(Lgeptoindexphi9<<1)+1|0;
	Larg0.i1=tmp0;
	Lgeptoindexphi9=0>Marg1?1:0;
	Lxtraiter=(Lgeptoindexphi|0)===(tmp3|0)?1:0;
	if(((Marg1+tmp0|0)|0)!==(tmp3|0))if(!(Lxtraiter))if(Lgeptoindexphi9){
		tmp3=(tmp3^ -1)+Lgeptoindexphi|0;
		Lxtraiter=tmp0&3;
		if((Lxtraiter|0)!==0){
			Lgeptoindexphi=tmp0;
			Lgeptoindexphi9=tmp0;
			Lprol$piter=0;
			while(1){
				Lgeptoindexphi9=Lgeptoindexphi9-1|0;
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				tmp1[Lgeptoindexphi9]=Larg1[Marg1+Lgeptoindexphi|0]|0;
				Lprol$piter=Lprol$piter+1|0;
				if((Lprol$piter|0)!==(Lxtraiter|0))continue;
				break;
			}
		}else{
			Lgeptoindexphi=tmp0;
			Lgeptoindexphi9=tmp0;
		}
		if(tmp3>>>0>=3)while(1){
			tmp1[(0+Lgeptoindexphi9|0)+ -1|0]=Larg1[(Marg1+Lgeptoindexphi|0)+ -1|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+ -2|0]=Larg1[(Marg1+Lgeptoindexphi|0)+ -2|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+ -3|0]=Larg1[(Marg1+Lgeptoindexphi|0)+ -3|0]|0;
			Lgeptoindexphi9=Lgeptoindexphi9-4|0;
			Lgeptoindexphi=Lgeptoindexphi-4|0;
			tmp1[Lgeptoindexphi9]=Larg1[Marg1+Lgeptoindexphi|0]|0;
			if(tmp1!==tmp1||0!==(0+Lgeptoindexphi9|0))continue;
			break;
		}
	}else{
		tmp3=(tmp3^ -1)+Lgeptoindexphi|0;
		Lxtraiter=tmp0&7;
		if((Lxtraiter|0)!==0){
			Lprol$piter=0;
			Lgeptoindexphi9=0;
			Lgeptoindexphi=0;
			while(1){
				tmp1[Lgeptoindexphi9]=Larg1[Marg1+Lgeptoindexphi|0]|0;
				Lprol$piter=Lprol$piter+1|0;
				Lgeptoindexphi9=Lgeptoindexphi9+1|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if((Lprol$piter|0)!==(Lxtraiter|0))continue;
				break;
			}
		}else{
			Lgeptoindexphi9=0;
			Lgeptoindexphi=0;
		}
		if(tmp3>>>0>=7)while(1){
			tmp1[Lgeptoindexphi9]=Larg1[Marg1+Lgeptoindexphi|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+1|0]=Larg1[(Marg1+Lgeptoindexphi|0)+1|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+2|0]=Larg1[(Marg1+Lgeptoindexphi|0)+2|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+3|0]=Larg1[(Marg1+Lgeptoindexphi|0)+3|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+4|0]=Larg1[(Marg1+Lgeptoindexphi|0)+4|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+5|0]=Larg1[(Marg1+Lgeptoindexphi|0)+5|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+6|0]=Larg1[(Marg1+Lgeptoindexphi|0)+6|0]|0;
			tmp1[(0+Lgeptoindexphi9|0)+7|0]=Larg1[(Marg1+Lgeptoindexphi|0)+7|0]|0;
			Lgeptoindexphi9=Lgeptoindexphi9+8|0;
			if(tmp1!==tmp1||(0+tmp0|0)!==(0+Lgeptoindexphi9|0)){
				Lgeptoindexphi=Lgeptoindexphi+8|0;
				continue;
			}
			break;
		}
	}
	tmp1[tmp0]=0;
}
function __ZN7CheerpX5Linux12requestMountERKSsS2_j(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgepsqueezed20=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=0,L$poptgepsqueezed21=null,tmp8=0,tmp9=0,tmp10=0,tmp11=0,tmp12=null;
	tmp2=create__ZN7CheerpX5Linux12requestMountERKSsS2_j$pFrame({a0:null,a1:null,a2:tmp2={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:{a0:nullArray,a0o:0},i4:0,a5:tmp2=[0],a6:null}).a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux12requestMountERKSsS2_j$presume;
	tmp3.a1=__ZN7CheerpX5Linux12requestMountERKSsS2_j$pdestroy;
	L$poptgepsqueezed20=tmp3.a2;
	L$poptgepsqueezed20.a0=nullArray;
	L$poptgepsqueezed20.a0o=0;
	tmp1=L$poptgepsqueezed20.a1;
	tmp1.i0=0;
	tmp4=L$poptgepsqueezed20.a;
	tmp5=L$poptgepsqueezed20.o-1;
	Larg0.a0=tmp4;
	Larg0.a0o=tmp5;
	tmp5=Larg1.i42|0;
	tmp4=Larg2.a2;
	tmp6=Larg2.i1|0;
	L$poptgepsqueezed21=String();
	a:if((tmp6|0)!==0){
		tmp8=tmp4[0]|0;
		if((tmp8&255)!==0){
			tmp10=0;
			while(1){
				tmp11=tmp8&255;
				if(tmp8<<24>-16777216){
					tmp9=tmp11;
				}else if((tmp8&255)<192){
					tmp9=(tmp9<<6)+(tmp11&63)|0;
				}else if((tmp8&255)<224){
					tmp9=tmp11&31;
				}else if((tmp8&255)<240){
					tmp9=tmp11&15;
				}else{
					tmp9=tmp11&7;
				}
				tmp10=tmp10+1|0;
				b:{
					if((tmp10|0)!==(tmp6|0)){
						tmp8=tmp4[tmp10]|0;
						if((tmp8&192)===128)break b;
					}
					if(tmp9>>>0<65536)L$poptgepsqueezed21=L$poptgepsqueezed21.concat(String.fromCharCode(tmp9));
					else{
						L$poptgepsqueezed21=L$poptgepsqueezed21.concat(String.fromCharCode(tmp9-65536>>>10|55296));
						L$poptgepsqueezed21=L$poptgepsqueezed21.concat(String.fromCharCode(tmp9&1023|56320));
					}
					if((tmp10|0)===(tmp6|0))break a;
					tmp8=tmp4[tmp10]|0;
				}
				if((tmp8&255)!==0)continue;
				break;
			}
		}
	}
	tmp4=Larg3.a2;
	tmp6=Larg3.i1|0;
	tmp12=String();
	a:if((tmp6|0)!==0){
		tmp8=tmp4[0]|0;
		if((tmp8&255)!==0){
			tmp10=0;
			while(1){
				tmp11=tmp8&255;
				if(tmp8<<24>-16777216){
					tmp9=tmp11;
				}else if((tmp8&255)<192){
					tmp9=(tmp9<<6)+(tmp11&63)|0;
				}else if((tmp8&255)<224){
					tmp9=tmp11&31;
				}else if((tmp8&255)<240){
					tmp9=tmp11&15;
				}else{
					tmp9=tmp11&7;
				}
				tmp10=tmp10+1|0;
				b:{
					if((tmp10|0)!==(tmp6|0)){
						tmp8=tmp4[tmp10]|0;
						if((tmp8&192)===128)break b;
					}
					if(tmp9>>>0<65536)tmp12=tmp12.concat(String.fromCharCode(tmp9));
					else{
						tmp12=tmp12.concat(String.fromCharCode(tmp9-65536>>>10|55296));
						tmp12=tmp12.concat(String.fromCharCode(tmp9&1023|56320));
					}
					if((tmp10|0)===(tmp6|0))break a;
					tmp8=tmp4[tmp10]|0;
				}
				if((tmp8&255)!==0)continue;
				break;
			}
		}
	}
	tmp4={type:15,tid:tmp5,mountType:L$poptgepsqueezed21,path:tmp12,devId:Larg4};
	L$poptgepsqueezed21=tmp3.a3;
	__ZN7CheerpX5Linux11postRequestI12MOUNT_RESULTEE4TaskIT_EiPN6client6ObjectEb(L$poptgepsqueezed21,Larg1,Larg1.i42|0,tmp4);
	tmp4=L$poptgepsqueezed21.a0;
	tmp5=L$poptgepsqueezed21.a0o|0;
	a:{
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp3.i4=0;
			tmp3=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
		tmp5=tmp4.a1.i1|0;
		tmp1.i0=256;
		tmp1.i1=tmp5;
		tmp4=L$poptgepsqueezed21.a0;
		tmp5=L$poptgepsqueezed21.a0o|0;
		if(tmp4!==nullArray||tmp5!==0)tmp4[tmp5].a1(tmp4,tmp5);
		tmp3.a6=L$poptgepsqueezed20;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed20.a0;
		tmp5=L$poptgepsqueezed20.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function ___NoopCoro_ResumeDestroy$p119(Larg0){
}
function __ZN7CheerpX5Linux12requestMountERKSsS2_j$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep2$poptgep=null;
	L$poptgepsqueezed5=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	L$poptgepsqueezed5=L$poptgepsqueezed5[tmp1].a[L$poptgepsqueezed5[tmp1].o- -1];
	tmp1=L$poptgepsqueezed5.a1.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.i1=tmp1;
	L$poptgep$poptgep2$poptgep=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0)L$poptgep$poptgep2$poptgep[tmp1].a1(L$poptgep$poptgep2$poptgep,tmp1);
	Larg0.a6=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118)[L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118),L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux12requestMountERKSsS2_j$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux11postRequestI12MOUNT_RESULTEE4TaskIT_EiPN6client6ObjectEb(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0,Lgeptoindexphi3=0,Lgeptoindex=0,Lgeptoindex4=0,L$poptgepsqueezed27=null,L$poptgep15$poptgep$poptgepsqueezed=null,tmp9=0,tmp10=null,tmp11=0,tmp12=null,Lgeptoindexphi=0,tmp14=0;
	tmp0=create__ZN7CheerpX5Linux11postRequestI12MOUNT_RESULTEE4TaskIT_EiPN6client6ObjectEb$pFrame({a0:null,a1:null,a2:tmp0={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:tmp0={a0:null,a1:null},i4:0,a5:[0],a6:null}).a;
	tmp1=tmp0[0];
	tmp1.a0=__ZN7CheerpX5Linux11postRequestI12MOUNT_RESULTEE4TaskIT_EiPN6client6ObjectEb$presume;
	tmp1.a1=__ZN7CheerpX5Linux11postRequestI12MOUNT_RESULTEE4TaskIT_EiPN6client6ObjectEb$pdestroy;
	L$poptgepsqueezed27=tmp1.a2;
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed27.a1.i0=0;
	L$poptgep15$poptgep$poptgepsqueezed=L$poptgepsqueezed27.a;
	tmp9=L$poptgepsqueezed27.o-1;
	Larg0.a0=L$poptgep15$poptgep$poptgepsqueezed;
	Larg0.a0o=tmp9;
	L$poptgepsqueezed27=HEAP32;
	tmp9=Larg1.i7|0;
	L$poptgepsqueezed27[0+tmp9|0]=-2;
	Larg1.a6.postMessage(Larg3);
	L$poptgepsqueezed27={a0:nullArray,a0o:0,a1:{i0:0,a1:null},a2:null};
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed27.a1.i0=0;
	L$poptgepsqueezed27.a2=null;
	L$poptgep15$poptgep$poptgepsqueezed=Larg1.a49;
	tmp10=L$poptgep15$poptgep$poptgepsqueezed.a1;
	tmp11=L$poptgep15$poptgep$poptgepsqueezed.a1o|0;
	tmp12=L$poptgep15$poptgep$poptgepsqueezed.a2.a0;
	Lgeptoindexphi=L$poptgep15$poptgep$poptgepsqueezed.a2.a0o|0;
	if(tmp11<Lgeptoindexphi){
		tmp10[tmp11].i0=Larg2;
		tmp10[tmp11].a1=L$poptgepsqueezed27;
		L$poptgep15$poptgep$poptgepsqueezed.a1=tmp10;
		L$poptgep15$poptgep$poptgepsqueezed.a1o=tmp11+1|0;
		tmp10=tmp10[tmp11];
	}else{
		tmp2=L$poptgep15$poptgep$poptgepsqueezed.a0;
		tmp9=L$poptgep15$poptgep$poptgepsqueezed.a0o|0;
		tmp9=(__imul(tmp9,8));
		tmp11=(__imul(tmp11,8))-tmp9>>3;
		tmp14=tmp11+1|0;
		if(tmp14>>>0>536870911)_abort();
		;
		tmp9=(__imul(Lgeptoindexphi,8))-tmp9|0;
		if(tmp9>>>0<2147483640){
			tmp9>>>=2;
			tmp9=tmp9>>>0>tmp14>>>0?tmp9|0:tmp14|0;
		}else{
			tmp9=536870911;
		}
		tmp12=createArray_struct$p_ZSt4pairIjP9SuspenderIPN6client6ObjectEEE((tmp9<<3)/8|0);
		tmp12[tmp11].i0=Larg2;
		tmp12[tmp11].a1=L$poptgepsqueezed27;
		L$poptgepsqueezed27=L$poptgep15$poptgep$poptgepsqueezed.a0;
		tmp14=L$poptgep15$poptgep$poptgepsqueezed.a0o|0;
		tmp10=L$poptgep15$poptgep$poptgepsqueezed.a1;
		tmp3=L$poptgep15$poptgep$poptgepsqueezed.a1o|0;
		if(tmp10===L$poptgepsqueezed27&&tmp3===tmp14){
			L$poptgep15$poptgep$poptgepsqueezed.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a0o=0+tmp11|0;
			L$poptgep15$poptgep$poptgepsqueezed.a1=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a1o=(0+tmp11|0)+1|0;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0o=0+tmp9|0;
			tmp10=tmp12[tmp11];
		}else{
			Lgeptoindexphi=tmp11;
			Lgeptoindexphi3=0;
			while(1){
				Lgeptoindex=Lgeptoindexphi-1|0;
				Lgeptoindex4=Lgeptoindexphi3-1|0;
				tmp12[Lgeptoindex].i0=tmp10[tmp3+Lgeptoindex4|0].i0|0;
				tmp12[(0+Lgeptoindexphi|0)+ -1|0].a1=tmp10[(tmp3+Lgeptoindexphi3|0)+ -1|0].a1;
				if(tmp10!==L$poptgepsqueezed27||(tmp3+Lgeptoindex4|0)!==tmp14){
					Lgeptoindexphi3=Lgeptoindex4;
					Lgeptoindexphi=Lgeptoindex;
					continue;
				}
				break;
			}
			L$poptgep15$poptgep$poptgepsqueezed.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a0o=0+Lgeptoindex|0;
			L$poptgep15$poptgep$poptgepsqueezed.a1=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a1o=(0+tmp11|0)+1|0;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0o=0+tmp9|0;
			tmp10=tmp12[tmp11];
		}
	}
	L$poptgepsqueezed27=tmp10.a1;
	L$poptgep15$poptgep$poptgepsqueezed=tmp1.a3;
	L$poptgep15$poptgep$poptgepsqueezed.a0=L$poptgepsqueezed27;
	if(L$poptgepsqueezed27.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
	;
	L$poptgepsqueezed27.a2=L$poptgep15$poptgep$poptgepsqueezed;
	tmp1.i4=0;
	L$poptgepsqueezed27.a0=tmp0;
	L$poptgepsqueezed27.a0o=0;
}
function __ZN7CheerpX5Linux11postRequestI12MOUNT_RESULTEE4TaskIT_EiPN6client6ObjectEb$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,L$poptgepsqueezed10=null,L$poptgep$poptgep2$poptgep=null,tmp3=0;
	L$poptgepsqueezed10=Larg0.a3.a0;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed10.a1;
	tmp0=L$poptgep$poptgep2$poptgep.a1;
	tmp3=L$poptgep$poptgep2$poptgep.i0|0;
	if((tmp3&65535)>=256)L$poptgep$poptgep2$poptgep.i0=tmp3&255;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	if(tmp0!==null){
		tmp3=tmp0|0;
		L$poptgepsqueezed10=Larg0.a2;
		L$poptgep$poptgep2$poptgep=L$poptgepsqueezed10.a1;
		L$poptgep$poptgep2$poptgep.i0=256;
		L$poptgep$poptgep2$poptgep.i1=tmp3;
		Larg0.a6=L$poptgepsqueezed10;
		Larg0.a0=null;
		L$poptgep$poptgep2$poptgep=L$poptgepsqueezed10.a0;
		tmp3=L$poptgepsqueezed10.a0o|0;
		(L$poptgep$poptgep2$poptgep!==nullArray||tmp3!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118)[L$poptgep$poptgep2$poptgep!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp3!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118),L$poptgep$poptgep2$poptgep!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118);
		return;
	}
	___assert_fail(_$pstr$p61,0,_$pstr$p81$p123,0,233,___func__$p_ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb,0);
	;
}
function __ZN7CheerpX5Linux11postRequestI12MOUNT_RESULTEE4TaskIT_EiPN6client6ObjectEb$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		if(tmp0!==null){
			tmp0.a0=nullArray;
			tmp0.a0o=0;
		}
	}
}
function __ZN7CheerpX5Linux13runFSRequestsEv$presume(Larg0,Marg0){
	var L$ppre$mphi120$pdispatch_0=0,L$ppre$mphi118$pdispatch_0=null,L$ppre$mphi118$pdispatch_1=0,L$ppre$mphi116$pdispatch_0=null,L$ppre$mphi116$pdispatch_1=0,L$ppre$mphi114$pdispatch_0=null,L$ppre$mphi114$pdispatch_1=0,L$ppre$mphi112$pdispatch_0=null,L$ppre$mphi112$pdispatch_1=0,L$ppre$mphi110$pdispatch_0=null,L$ppre$mphi110$pdispatch_1=0,L$ppre$mphi108$pdispatch_0=null,L$ppre$mphi108$pdispatch_1=0,L$ppre$mphi106$pdispatch_0=null,L$ppre$mphi106$pdispatch_1=0,L$ppre$mphi104$pdispatch_0=null,L$ppre$mphi104$pdispatch_1=0,L$ppre$mphi102$pdispatch_0=null,L$ppre$mphi102$pdispatch_1=0,L$ppre$mphi$pdispatch_0=null,L$ppre$mphi$pdispatch_1=0,tmp21=0,tmp22=null,L$poptgepsqueezed58=null,L$ppre_0=null,L$ppre_1=0,L$ppre68_0=null,tmp27=null,tmp28=null,tmp29=null,tmp30=0,tmp31=0,tmp32=0,tmp33=0;
	L$poptgepsqueezed58=Larg0[Marg0].a3;
	switch(Larg0[Marg0].i4&15){
		case 0:
		L$ppre_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		L$ppre_0=L$ppre_0[L$ppre_1];
		L$ppre_1=13;
		break;
		case 1:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi$pdispatch_0=L$ppre68_0;
			L$ppre$mphi$pdispatch_1=L$ppre_1;
			L$ppre_1=11;
			break;
		}
		L$ppre_1=12;
		break;
		case 2:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi102$pdispatch_0=L$ppre68_0;
			L$ppre$mphi102$pdispatch_1=L$ppre_1;
			L$ppre_1=10;
			break;
		}
		L$ppre_1=12;
		break;
		case 3:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi104$pdispatch_0=L$ppre68_0;
			L$ppre$mphi104$pdispatch_1=L$ppre_1;
			L$ppre_1=9;
			break;
		}
		L$ppre_1=12;
		break;
		case 4:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi106$pdispatch_0=L$ppre68_0;
			L$ppre$mphi106$pdispatch_1=L$ppre_1;
			L$ppre_1=8;
			break;
		}
		L$ppre_1=12;
		break;
		case 5:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi108$pdispatch_0=L$ppre68_0;
			L$ppre$mphi108$pdispatch_1=L$ppre_1;
			L$ppre_1=6;
			break;
		}
		L$ppre_1=7;
		break;
		case 6:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi110$pdispatch_0=L$ppre68_0;
			L$ppre$mphi110$pdispatch_1=L$ppre_1;
			L$ppre_1=4;
			break;
		}
		L$ppre_1=5;
		break;
		case 7:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi112$pdispatch_0=L$ppre68_0;
			L$ppre$mphi112$pdispatch_1=L$ppre_1;
			L$ppre_1=3;
			break;
		}
		L$ppre_1=12;
		break;
		case 8:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi114$pdispatch_0=L$ppre68_0;
			L$ppre$mphi114$pdispatch_1=L$ppre_1;
			L$ppre_1=2;
			break;
		}
		L$ppre_1=12;
		break;
		case 9:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi116$pdispatch_0=L$ppre68_0;
			L$ppre$mphi116$pdispatch_1=L$ppre_1;
			L$ppre_1=1;
			break;
		}
		L$ppre_1=12;
		break;
		case 10:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi118$pdispatch_0=L$ppre68_0;
			L$ppre$mphi118$pdispatch_1=L$ppre_1;
			L$ppre_1=0;
			break;
		}
		L$ppre_1=12;
		break;
		case 11:
		L$ppre68_0=L$poptgepsqueezed58.a0;
		L$ppre_1=L$poptgepsqueezed58.a0o|0;
		if(L$ppre68_0!==nullArray||L$ppre_1!==0){
			L$ppre$mphi120$pdispatch_0=L$ppre_1;
			L$ppre68_0=L$ppre68_0;
			L$ppre_1=-1;
			break;
		}
		L$ppre_1=12;
		break;
		default:
		;
	}
	a:while(1){
		switch(L$ppre_1|0){
			case 0:
			L$ppre$mphi118$pdispatch_0[L$ppre$mphi118$pdispatch_1].a1(L$ppre$mphi118$pdispatch_0,L$ppre$mphi118$pdispatch_1);
			L$ppre_1=12;
			continue a;
			case 1:
			L$ppre$mphi116$pdispatch_0[L$ppre$mphi116$pdispatch_1].a1(L$ppre$mphi116$pdispatch_0,L$ppre$mphi116$pdispatch_1);
			L$ppre_1=12;
			continue a;
			case 2:
			L$ppre$mphi114$pdispatch_0[L$ppre$mphi114$pdispatch_1].a1(L$ppre$mphi114$pdispatch_0,L$ppre$mphi114$pdispatch_1);
			L$ppre_1=12;
			continue a;
			case 3:
			L$ppre$mphi112$pdispatch_0[L$ppre$mphi112$pdispatch_1].a1(L$ppre$mphi112$pdispatch_0,L$ppre$mphi112$pdispatch_1);
			L$ppre_1=12;
			continue a;
			case 4:
			L$ppre$mphi110$pdispatch_0[L$ppre$mphi110$pdispatch_1].a1(L$ppre$mphi110$pdispatch_0,L$ppre$mphi110$pdispatch_1);
			L$ppre_1=5;
			continue a;
			case 5:
			tmp27=Larg0[Marg0].a6;
			tmp27.a46.i6=0;
			__ZN7CheerpX5Linux18checkPendingWritesEv(tmp27);
			L$ppre_1=12;
			continue a;
			case 6:
			L$ppre$mphi108$pdispatch_0[L$ppre$mphi108$pdispatch_1].a1(L$ppre$mphi108$pdispatch_0,L$ppre$mphi108$pdispatch_1);
			L$ppre_1=7;
			continue a;
			case 7:
			tmp27=Larg0[Marg0].a6;
			tmp27.a46.i6=0;
			__ZN7CheerpX5Linux18checkPendingWritesEv(tmp27);
			L$ppre_1=12;
			continue a;
			case 8:
			L$ppre$mphi106$pdispatch_0[L$ppre$mphi106$pdispatch_1].a1(L$ppre$mphi106$pdispatch_0,L$ppre$mphi106$pdispatch_1);
			L$ppre_1=12;
			continue a;
			case 9:
			L$ppre$mphi104$pdispatch_0[L$ppre$mphi104$pdispatch_1].a1(L$ppre$mphi104$pdispatch_0,L$ppre$mphi104$pdispatch_1);
			L$ppre_1=12;
			continue a;
			case 10:
			L$ppre$mphi102$pdispatch_0[L$ppre$mphi102$pdispatch_1].a1(L$ppre$mphi102$pdispatch_0,L$ppre$mphi102$pdispatch_1);
			L$ppre_1=12;
			continue a;
			case 11:
			L$ppre$mphi$pdispatch_0[L$ppre$mphi$pdispatch_1].a1(L$ppre$mphi$pdispatch_0,L$ppre$mphi$pdispatch_1);
			L$ppre_1=12;
			continue a;
			case 12:
			Larg0[Marg0].a7=Larg0[Marg0].a8;
			__ZN7CheerpX5Linux12MessageQueue3popEv(L$poptgepsqueezed58,Larg0[Marg0].a6.a46);
			L$ppre_0=L$poptgepsqueezed58.a0;
			L$ppre_1=L$poptgepsqueezed58.a0o|0;
			if(L$ppre_0!==nullArray||L$ppre_1!==0){
				if(L$ppre_0[L$ppre_1].a0!==null){
					Larg0[Marg0].i4=0;
					L$poptgepsqueezed58=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$poptgepsqueezed58.a0=Larg0;
					L$poptgepsqueezed58.a0o=Marg0;
					break a;
				}
				L$ppre_0=L$ppre_0[L$ppre_1];
				L$ppre_1=13;
				continue a;
			}
			L$ppre_0=null;
			L$ppre_1=13;
			continue a;
			case 13:
			tmp27=L$ppre_0.a[L$ppre_0.o- -1];
			tmp27=tmp27.a1.a1;
			Larg0[Marg0].a8=tmp27;
			tmp28=L$poptgepsqueezed58.a0;
			L$ppre_1=L$poptgepsqueezed58.a0o|0;
			if(tmp28!==nullArray||L$ppre_1!==0)tmp28[L$ppre_1].a1(tmp28,L$ppre_1);
			switch((tmp27.type)|0){
				case 19:
				tmp28=Larg0[Marg0].a6;
				tmp29=tmp27.path;
				L$ppre_1=tmp27.tid;
				tmp30=tmp27.replyType;
				tmp31=tmp27.flags;
				tmp32=tmp27.permType;
				tmp33=tmp27.devId;
				tmp21=tmp27.uid;
				__ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj(L$poptgepsqueezed58,tmp28,tmp29,L$ppre_1,tmp30,tmp31,tmp32,tmp33,tmp21,tmp27.gid);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=1;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi$pdispatch_0=tmp27;
					L$ppre$mphi$pdispatch_1=L$ppre_1;
					L$ppre_1=11;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				case 66:
				tmp28=Larg0[Marg0].a6;
				tmp29=tmp27.path;
				L$ppre_1=tmp27.tid;
				tmp30=tmp27.replyType;
				tmp31=tmp27.permType;
				tmp32=tmp27.devId;
				tmp33=tmp27.uid;
				__ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj(L$poptgepsqueezed58,tmp28,tmp29,L$ppre_1,tmp30,tmp31,tmp32,tmp33,tmp27.gid);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=2;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi102$pdispatch_0=tmp27;
					L$ppre$mphi102$pdispatch_1=L$ppre_1;
					L$ppre_1=10;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				case 70:
				tmp28=Larg0[Marg0].a6;
				tmp29=tmp27.path;
				L$ppre_1=tmp27.tid;
				tmp30=tmp27.replyType;
				tmp31=tmp27.permType;
				tmp22=tmp27.value;
				tmp32=tmp27.devId;
				tmp33=tmp27.uid;
				__ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj(L$poptgepsqueezed58,tmp28,tmp29,L$ppre_1,tmp30,tmp31,tmp22,tmp32,tmp33,tmp27.gid);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=3;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi104$pdispatch_0=tmp27;
					L$ppre$mphi104$pdispatch_1=L$ppre_1;
					L$ppre_1=9;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				case 23:
				tmp28=Larg0[Marg0].a6;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.tid;
				tmp31=tmp27.fd;
				tmp32=tmp27.fileOffset;
				__ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE(L$poptgepsqueezed58,tmp28,L$ppre_1,tmp30,tmp31,tmp32,tmp27.slices);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=4;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi106$pdispatch_0=tmp27;
					L$ppre$mphi106$pdispatch_1=L$ppre_1;
					L$ppre_1=8;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				case 54:
				tmp28=Larg0[Marg0].a6;
				tmp28.a46.i6=1;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.tid;
				tmp31=tmp27.fd;
				tmp32=tmp27.fileOffset;
				__ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE(L$poptgepsqueezed58,tmp28,L$ppre_1,tmp30,tmp31,tmp32,tmp27.slices);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=5;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi108$pdispatch_0=tmp27;
					L$ppre$mphi108$pdispatch_1=L$ppre_1;
					L$ppre_1=6;
					continue a;
				}
				L$ppre_1=7;
				continue a;
				case 22:
				tmp28=Larg0[Marg0].a6;
				tmp28.a46.i6=1;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.fd;
				__ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj(L$poptgepsqueezed58,tmp28,L$ppre_1,tmp30,tmp27.value);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=6;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi110$pdispatch_0=tmp27;
					L$ppre$mphi110$pdispatch_1=L$ppre_1;
					L$ppre_1=4;
					continue a;
				}
				L$ppre_1=5;
				continue a;
				case 61:
				tmp28=Larg0[Marg0].a6;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.tid;
				tmp31=tmp27.fd;
				__ZN7CheerpX5Linux18runFSFchmodRequestE12CORE_MESSAGEjjj(tmp28,L$ppre_1,tmp30,tmp31,tmp27.permType);
				L$ppre_1=12;
				continue a;
				case 63:
				tmp28=Larg0[Marg0].a6;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.tid;
				tmp31=tmp27.devId;
				tmp29=tmp27.oldPath;
				__ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_(L$poptgepsqueezed58,tmp28,L$ppre_1,tmp30,tmp31,tmp29,tmp27.newPath);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=7;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi112$pdispatch_0=tmp27;
					L$ppre$mphi112$pdispatch_1=L$ppre_1;
					L$ppre_1=3;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				case 17:
				tmp28=Larg0[Marg0].a6;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.tid;
				tmp29=tmp27.path;
				tmp31=tmp27.devId;
				__ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj(L$poptgepsqueezed58,tmp28,L$ppre_1,tmp30,tmp29,tmp31,tmp27.parentInodeId);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=8;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi114$pdispatch_0=tmp27;
					L$ppre$mphi114$pdispatch_1=L$ppre_1;
					L$ppre_1=2;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				case 68:
				tmp28=Larg0[Marg0].a6;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.tid;
				tmp29=tmp27.path;
				tmp31=tmp27.devId;
				__ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj(L$poptgepsqueezed58,tmp28,L$ppre_1,tmp30,tmp29,tmp31,tmp27.inodeId);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=9;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi116$pdispatch_0=tmp27;
					L$ppre$mphi116$pdispatch_1=L$ppre_1;
					L$ppre_1=1;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				case 65:
				tmp28=Larg0[Marg0].a6;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.tid;
				tmp31=tmp27.devId;
				tmp29=tmp27.oldPath;
				__ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_(L$poptgepsqueezed58,tmp28,L$ppre_1,tmp30,tmp31,tmp29,tmp27.newPath);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=10;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi118$pdispatch_0=tmp27;
					L$ppre$mphi118$pdispatch_1=L$ppre_1;
					L$ppre_1=0;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				case 64:
				tmp28=Larg0[Marg0].a6;
				L$ppre_1=tmp27.replyType;
				tmp30=tmp27.tid;
				tmp29=tmp27.path;
				__ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj(L$poptgepsqueezed58,tmp28,L$ppre_1,tmp30,tmp29,tmp27.devId);
				tmp27=L$poptgepsqueezed58.a0;
				L$ppre_1=L$poptgepsqueezed58.a0o|0;
				if(tmp27!==nullArray||L$ppre_1!==0){
					if(tmp27[L$ppre_1].a0!==null){
						Larg0[Marg0].i4=11;
						L$poptgepsqueezed58=tmp27[L$ppre_1].a[tmp27[L$ppre_1].o- -1];
						L$poptgepsqueezed58.a0=Larg0;
						L$poptgepsqueezed58.a0o=Marg0;
						break a;
					}
					L$ppre$mphi120$pdispatch_0=L$ppre_1;
					L$ppre68_0=tmp27;
					L$ppre_1=-1;
					continue a;
				}
				L$ppre_1=12;
				continue a;
				default:
				___assert_fail(_$pstr$p61,0,_$pstr$p15$p124,0,221,___func__$p_ZN7CheerpX5Linux13runFSRequestsEv,0);
				;
			}
			default:
			L$ppre68_0[L$ppre$mphi120$pdispatch_0].a1(L$ppre68_0,L$ppre$mphi120$pdispatch_0);
			L$ppre_1=12;
			continue a;
		}
		break;
	}
}
function __ZN7CheerpX5Linux13runFSRequestsEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed6=null,tmp1=null,tmp2=0;
	L$poptgepsqueezed6=Larg0.a3;
	a:{
		switch(Larg0.i4&15){
			case 0:
			Larg0.a8=Larg0.a7;
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 1:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 2:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 3:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 4:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 5:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 6:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 7:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 8:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 9:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 10:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			case 11:
			tmp1=L$poptgepsqueezed6.a0;
			tmp2=L$poptgepsqueezed6.a0o|0;
			if(tmp1!==nullArray||tmp2!==0)break;
			break a;
			default:
			;
		}
		tmp1[tmp2].a1(tmp1,tmp2);
	}
}
function __ZN7CheerpX5Linux12MessageQueue3popEv(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=null,L$poptgepsqueezed16=null,L$poptgepsqueezed17=null,tmp6=null,tmp7=0,tmp8=null;
	tmp3=create__ZN7CheerpX5Linux12MessageQueue3popEv$pFrame({a0:null,a1:null,a2:tmp3={a0:nullArray,a0o:0,a1:{i0:0,a1:null}},a3:tmp3={a0:null,a1:null},i4:0,a5:[0],a6:null,a7:null}).a;
	tmp0=tmp3[0];
	tmp0.a0=__ZN7CheerpX5Linux12MessageQueue3popEv$presume;
	tmp0.a1=__ZN7CheerpX5Linux12MessageQueue3popEv$pdestroy;
	tmp0.a6=Larg1;
	L$poptgepsqueezed16=tmp0.a2;
	L$poptgepsqueezed16.a0=nullArray;
	L$poptgepsqueezed16.a0o=0;
	L$poptgepsqueezed17=L$poptgepsqueezed16.a1;
	L$poptgepsqueezed17.i0=0;
	tmp6=L$poptgepsqueezed16.a;
	tmp7=L$poptgepsqueezed16.o-1;
	Larg0.a0=tmp6;
	Larg0.a0o=tmp7;
	if((Larg1.i5|0)!==0){
		tmp3=tmp0.a6;
		tmp6=tmp3.a1;
		tmp7=tmp3.a1o|0;
		tmp1=tmp3.i4|0;
		tmp8=tmp6[tmp7+(tmp1>>>10)|0];
		tmp8=tmp8.d[tmp8.o+(tmp1&1023)|0];
		tmp3.i5=(tmp3.i5|0)-1|0;
		tmp2=tmp1+1|0;
		tmp3.i4=tmp2;
		if(tmp2>>>0>=2048){
			tmp3.a1=tmp6;
			tmp3.a1o=tmp7+1|0;
			tmp3.i4=tmp1-1023|0;
		}
		L$poptgepsqueezed17.i0=256;
		L$poptgepsqueezed17.a1=tmp8;
		tmp0.a7=L$poptgepsqueezed16;
		tmp0.a0=null;
		tmp3=L$poptgepsqueezed16.a0;
		tmp7=L$poptgepsqueezed16.a0o|0;
		(tmp3!==nullArray||tmp7!==0?tmp3:_NoopCoro$pFrame$pConst$p118)[tmp3!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst$p118].a0((tmp3!==nullArray||tmp7!==0?tmp3:_NoopCoro$pFrame$pConst$p118),tmp3!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst$p118);
	}else{
		L$poptgepsqueezed16=Larg1.a7;
		L$poptgepsqueezed17=tmp0.a3;
		L$poptgepsqueezed17.a0=L$poptgepsqueezed16;
		if(L$poptgepsqueezed16.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
		;
		L$poptgepsqueezed16.a2=L$poptgepsqueezed17;
		tmp0.i4=0;
		L$poptgepsqueezed16.a0=tmp3;
		L$poptgepsqueezed16.a0o=0;
	}
}
function __ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Larg7,Larg8,Larg9){
	var L$poptgepsqueezed27=null,L$poptgepsqueezed28=null,tmp2=0,tmp3=0,tmp4=0,tmp5=0,tmp6=0,tmp7=0,tmp8=null,tmp9=null,tmp10=null,tmp11=0,tmp12=null,tmp13=null,tmp14=0,tmp15=0;
	tmp8=new constructor__ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj$pFrame().a;
	tmp9=tmp8[0];
	tmp9.a0=__ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj$presume;
	tmp9.a1=__ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj$pdestroy;
	tmp9.i8=Larg7;
	tmp9.i7=Larg6;
	tmp9.i6=Larg5;
	tmp9.i5=Larg4;
	tmp9.i4=Larg3;
	tmp9.a3=Larg1;
	L$poptgepsqueezed27=tmp9.a2;
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	tmp10=L$poptgepsqueezed27.a;
	tmp11=L$poptgepsqueezed27.o-1;
	Larg0.a0=tmp10;
	Larg0.a0o=tmp11;
	tmp12=__ZN11CheerpXBase13getDeviceByIdEj(Larg7);
	tmp11=tmp12.i1|0;
	if((tmp11|0)===1){
		tmp13=tmp12.a5;
		tmp11=tmp13.i1|0;
		L$poptgepsqueezed28=tmp13;
		tmp13=tmp12.a6;
		tmp12=L$poptgepsqueezed28;
	}else{
		tmp13=Larg2;
	}
	tmp9.a9=tmp13;
	if((tmp11|0)!==0)___assert_fail(_$pstr$p35$p125,0,_$pstr$p15$p124,0,1046,___func__$p_ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj,0);
	;
	if((Larg5&3|0)!==0){
		tmp10=((Larg5&512|0)!==0?_$pstr$p7:_$pstr$p46$p131);
		tmp11=(Larg5&512|0)!==0?0:0;
	}else{
		tmp10=_$pstr$p10;
		tmp11=0;
	}
	tmp10=_cheerpCreate_ZN6client6StringC2EPKc(tmp10,tmp11);
	tmp9.a10=tmp10;
	L$poptgepsqueezed28=tmp9.a12;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed28,tmp12,tmp13,tmp10,Larg8,Larg9);
	tmp10=L$poptgepsqueezed28.a0;
	tmp11=L$poptgepsqueezed28.a0o|0;
	a:{
		if(tmp10!==nullArray||tmp11!==0)if(tmp10[tmp11].a0!==null){
			tmp9.i13=0;
			tmp9=tmp10[tmp11].a[tmp10[tmp11].o- -1];
			tmp9.a0=tmp8;
			tmp9.a0o=0;
			break a;
		}
		tmp10=tmp10[tmp11].a[tmp10[tmp11].o- -1];
		tmp11=tmp10.a1.i1|0;
		tmp10=L$poptgepsqueezed28.a0;
		tmp14=L$poptgepsqueezed28.a0o|0;
		if(tmp10!==nullArray||tmp14!==0)tmp10[tmp14].a1(tmp10,tmp14);
		tmp8=tmp9.a10;
		tmp10=tmp9.a9;
		if((tmp11|0)<0){
			if((tmp9.i6&3|0)===0)___assert_fail(_$pstr$p47$p134,0,_$pstr$p15$p124,0,1053,___func__$p_ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj,0);
			;
			tmp8={type:62,tid:(tmp9.i4|0),value: -30};
		}else{
			__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
			tmp8=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
			tmp8=tmp8[0+tmp11|0].fileData;
			if(tmp8.parent===null)___assert_fail(_$pstr$p48$p130,0,_$pstr$p15$p124,0,1062,___func__$p_ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj,0);
			;
			tmp15=tmp9.i6|0;
			tmp2=tmp8.inodeId;
			tmp3=tmp8.length;
			tmp14=tmp8.permType;
			tmp4=tmp8.lastModified;
			if((tmp15&64|0)!==0)if(((tmp8.dirty)|0)!==0){
				if((tmp14|0)===0)___assert_fail(_$pstr$p45$p127,0,_$pstr$p15$p124,0,1072,___func__$p_ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj,0);
				;
				tmp14=tmp9.i7&511|tmp14& -512;
				tmp8.permType=tmp14;
			}
			tmp15=tmp9.i8|0;
			tmp5=tmp9.i5|0;
			tmp6=tmp9.i4|0;
			tmp7=tmp8.uid;
			tmp8={type:tmp5,tid:tmp6,fd:tmp11,devId:tmp15,inodeId:tmp2,permType:tmp14,len:tmp3,lastModified:tmp4,uid:tmp7,gid:(tmp8.gid)};
		}
		tmp9.a3.a6.postMessage(tmp8);
		tmp9.a11=L$poptgepsqueezed27;
		tmp9.a0=null;
		tmp8=L$poptgepsqueezed27.a0;
		tmp11=L$poptgepsqueezed27.a0o|0;
		(tmp8!==nullArray||tmp11!==0?tmp8:_NoopCoro$pFrame$pConst$p118)[tmp8!==nullArray||tmp11!==0?tmp11:$NoopCoro$pFrame$pConst$p118].a0((tmp8!==nullArray||tmp11!==0?tmp8:_NoopCoro$pFrame$pConst$p118),tmp8!==nullArray||tmp11!==0?tmp11:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Larg7,Larg8){
	var L$poptgepsqueezed29=null,tmp1=0,tmp2=null,tmp3=null,tmp4=null,tmp5=0,L$poptgepsqueezed21=null,tmp7=null,tmp8=0;
	tmp2=new constructor__ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj$presume;
	tmp3.a1=__ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj$pdestroy;
	tmp3.i9=Larg8;
	tmp3.i8=Larg7;
	tmp3.i7=Larg5;
	tmp3.i6=Larg4;
	tmp3.i5=Larg3;
	tmp3.a4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed29=tmp3.a2;
	L$poptgepsqueezed29.a0=nullArray;
	L$poptgepsqueezed29.a0o=0;
	tmp4=L$poptgepsqueezed29.a;
	tmp5=L$poptgepsqueezed29.o-1;
	Larg0.a0=tmp4;
	Larg0.a0o=tmp5;
	tmp4=__ZN11CheerpXBase13getDeviceByIdEj(Larg6);
	if((tmp4.i1|0)!==0)___assert_fail(_$pstr$p35$p125,0,_$pstr$p15$p124,0,1086,___func__$p_ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj,0);
	;
	tmp3.a10=tmp4;
	L$poptgepsqueezed21=tmp3.a13;
	__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed21,tmp4,Larg2);
	tmp4=L$poptgepsqueezed21.a0;
	tmp5=L$poptgepsqueezed21.a0o|0;
	a:{
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp3.i15=0;
			tmp3=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
		tmp4=tmp4.a1.a1;
		tmp3.a11=tmp4;
		tmp7=L$poptgepsqueezed21.a0;
		tmp5=L$poptgepsqueezed21.a0o|0;
		if(tmp7!==nullArray||tmp5!==0)tmp7[tmp5].a1(tmp7,tmp5);
		if(((tmp4.permType)&16384|0)!==0)tmp2={type:(tmp3.i6|0),tid:(tmp3.i5|0),value: -17};
		else{
			tmp4=tmp3.a10;
			tmp5=tmp3.i9|0;
			tmp8=tmp3.i8|0;
			tmp1=tmp3.i7|0;
			tmp7=tmp3.a4;
			L$poptgepsqueezed21=tmp3.a14;
			__ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii(L$poptgepsqueezed21,tmp4,tmp7,tmp1,tmp8,tmp5);
			tmp4=L$poptgepsqueezed21.a0;
			tmp5=L$poptgepsqueezed21.a0o|0;
			if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
				tmp3.i15=1;
				tmp3=tmp4[tmp5].a[tmp4[tmp5].o- -1];
				tmp3.a0=tmp2;
				tmp3.a0o=0;
				break a;
			}
			tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp4=tmp4.a1.a1;
			tmp7=L$poptgepsqueezed21.a0;
			tmp5=L$poptgepsqueezed21.a0o|0;
			if(tmp7!==nullArray||tmp5!==0)tmp7[tmp5].a1(tmp7,tmp5);
			tmp7=tmp3.a4;
			tmp5=tmp3.i6|0;
			tmp8=tmp3.i5|0;
			tmp2={type:tmp5,tid:tmp8,value:((((tmp4.exists)|0)!==5?1:0)<<31>>31)};
		}
		tmp3.a3.a6.postMessage(tmp2);
		tmp3.a12=L$poptgepsqueezed29;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed29.a0;
		tmp5=L$poptgepsqueezed29.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Larg7,Larg8,Larg9){
	var L$poptgepsqueezed41=null,L$poptgepsqueezed31=null,tmp2=null,tmp3=null,L$poptgepsqueezed42=null,tmp5=0,tmp6=null,tmp7=0;
	tmp2=new constructor__ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj$presume;
	tmp3.a1=__ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj$pdestroy;
	tmp3.i11=Larg9;
	tmp3.i10=Larg8;
	tmp3.i9=Larg7;
	tmp3.a8=Larg6;
	tmp3.i7=Larg5;
	tmp3.i6=Larg4;
	tmp3.i5=Larg3;
	tmp3.a4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed41=tmp3.a2;
	L$poptgepsqueezed41.a0=nullArray;
	L$poptgepsqueezed41.a0o=0;
	L$poptgepsqueezed42=L$poptgepsqueezed41.a;
	tmp5=L$poptgepsqueezed41.o-1;
	Larg0.a0=L$poptgepsqueezed42;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed42=__ZN11CheerpXBase13getDeviceByIdEj(Larg7);
	if((L$poptgepsqueezed42.i1|0)!==0)___assert_fail(_$pstr$p35$p125,0,_$pstr$p15$p124,0,1112,___func__$p_ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj,0);
	;
	tmp6="s";
	tmp3.a12=tmp6;
	L$poptgepsqueezed31=tmp3.a17;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed31,L$poptgepsqueezed42,Larg2,tmp6,Larg8,Larg9);
	L$poptgepsqueezed42=L$poptgepsqueezed31.a0;
	tmp5=L$poptgepsqueezed31.a0o|0;
	a:{
		if(L$poptgepsqueezed42!==nullArray||tmp5!==0)if(L$poptgepsqueezed42[tmp5].a0!==null){
			tmp3.i19=0;
			tmp3=L$poptgepsqueezed42[tmp5].a[L$poptgepsqueezed42[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		L$poptgepsqueezed42=L$poptgepsqueezed42[tmp5].a[L$poptgepsqueezed42[tmp5].o- -1];
		tmp5=L$poptgepsqueezed42.a1.i1|0;
		L$poptgepsqueezed42=L$poptgepsqueezed31.a0;
		tmp7=L$poptgepsqueezed31.a0o|0;
		if(L$poptgepsqueezed42!==nullArray||tmp7!==0)L$poptgepsqueezed42[tmp7].a1(L$poptgepsqueezed42,tmp7);
		L$poptgepsqueezed42=tmp3.a12;
		tmp6=tmp3.a4;
		if((tmp5|0)<=-1)___assert_fail(_$pstr$p50$p129,0,_$pstr$p15$p124,0,1115,___func__$p_ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj,0);
		;
		__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
		L$poptgepsqueezed42=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
		L$poptgepsqueezed42=L$poptgepsqueezed42[0+tmp5|0].fileData;
		if(L$poptgepsqueezed42.parent===null)___assert_fail(_$pstr$p48$p130,0,_$pstr$p15$p124,0,1119,___func__$p_ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj,0);
		;
		tmp7=tmp3.i7|0;
		tmp3.i13=L$poptgepsqueezed42.inodeId;
		tmp3.i14=L$poptgepsqueezed42.length;
		tmp3.i15=L$poptgepsqueezed42.lastModified;
		L$poptgepsqueezed42.permType=tmp7;
		L$poptgepsqueezed42.dirty=1;
		if((tmp7&61440|0)===40960)L$poptgepsqueezed42.chunks=tmp3.a8;
		L$poptgepsqueezed42=tmp3.a18;
		__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed42,tmp5);
		tmp6=L$poptgepsqueezed42.a0;
		tmp5=L$poptgepsqueezed42.a0o|0;
		if(tmp6!==nullArray||tmp5!==0){
			if(tmp6[tmp5].a0!==null){
				tmp3.i19=1;
				tmp3=tmp6[tmp5].a[tmp6[tmp5].o- -1];
				tmp3.a0=tmp2;
				tmp3.a0o=0;
				break a;
			}
			tmp6[tmp5].a1(tmp6,tmp5);
		}
		tmp2=tmp3.a3;
		L$poptgepsqueezed42={type:(tmp3.i6|0),tid:(tmp3.i5|0),value:tmp3.a8,devId:(tmp3.i9|0),inodeId:(tmp3.i13|0),permType:(tmp3.i7|0),len:(tmp3.i14|0),lastModified:(tmp3.i15|0),uid:(tmp3.i10|0),gid:(tmp3.i11|0)};
		tmp2.a6.postMessage(L$poptgepsqueezed42);
		tmp3.a16=L$poptgepsqueezed41;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed41.a0;
		tmp5=L$poptgepsqueezed41.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed25=null,tmp1=-0.,tmp2=null,tmp3=null,L$poptgepsqueezed26=null,tmp5=0,tmp6=0,tmp7=0,tmp8=null;
	tmp2=new constructor__ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$presume;
	tmp3.a1=__ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pdestroy;
	tmp3.a7=Larg6;
	tmp3.i6=Larg4;
	tmp3.i5=Larg3;
	tmp3.i4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed25=tmp3.a2;
	L$poptgepsqueezed25.a0=nullArray;
	L$poptgepsqueezed25.a0o=0;
	L$poptgepsqueezed26=L$poptgepsqueezed25.a;
	tmp5=L$poptgepsqueezed25.o-1;
	Larg0.a0=L$poptgepsqueezed26;
	Larg0.a0o=tmp5;
	__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
	L$poptgepsqueezed26=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
	L$poptgepsqueezed26[0+Larg4|0].offset=Larg5;
	a:{
		if(((Larg6.length)|0)!==0){
			L$poptgepsqueezed26=tmp3.a13;
			tmp7=0;
			tmp6=0;
			while(1){
				tmp3.i10=tmp7;
				tmp3.i9=tmp6;
				tmp3.i8=tmp5;
				tmp8=tmp3.a7;
				tmp7=tmp3.i6|0;
				tmp1=(+(tmp6>>>0));
				tmp6=tmp8[tmp1].bufOffset;
				tmp5=tmp8[tmp1].len;
				tmp3.i11=tmp5;
				__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(L$poptgepsqueezed26,tmp7,HEAP8,tmp6,tmp5);
				tmp8=L$poptgepsqueezed26.a0;
				tmp5=L$poptgepsqueezed26.a0o|0;
				if(tmp8!==nullArray||tmp5!==0)if(tmp8[tmp5].a0!==null){
					tmp3.i14=0;
					tmp3=tmp8[tmp5].a[tmp8[tmp5].o- -1];
					tmp3.a0=tmp2;
					tmp3.a0o=0;
					break a;
				}
				tmp8=tmp8[tmp5].a[tmp8[tmp5].o- -1];
				tmp6=tmp8.a1.i1|0;
				tmp8=L$poptgepsqueezed26.a0;
				tmp7=L$poptgepsqueezed26.a0o|0;
				if(tmp8!==nullArray||tmp7!==0)tmp8[tmp7].a1(tmp8,tmp7);
				if((tmp6|0)<1){
					tmp7=tmp3.i10|0;
				}else{
					tmp7=(tmp3.i10|0)+tmp6|0;
					if((tmp6|0)===(tmp3.i11|0)){
						tmp6=tmp3.i9|0;
						tmp6=tmp6+1|0;
						if(tmp6>>>0<(tmp3.a7.length)>>>0){
							tmp5=tmp3.i11|0;
							continue;
						}
					}
				}
				break;
			}
		}else{
			tmp7=0;
		}
		tmp2=tmp3.a3;
		L$poptgepsqueezed26={type:(tmp3.i4|0),tid:(tmp3.i5|0),value:tmp7};
		tmp2.a6.postMessage(L$poptgepsqueezed26);
		tmp3.a12=L$poptgepsqueezed25;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed25.a0;
		tmp5=L$poptgepsqueezed25.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed25=null,tmp1=-0.,tmp2=null,tmp3=null,L$poptgepsqueezed26=null,tmp5=0,tmp6=0,tmp7=0,tmp8=null;
	tmp2=new constructor__ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$presume;
	tmp3.a1=__ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pdestroy;
	tmp3.a7=Larg6;
	tmp3.i6=Larg4;
	tmp3.i5=Larg3;
	tmp3.i4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed25=tmp3.a2;
	L$poptgepsqueezed25.a0=nullArray;
	L$poptgepsqueezed25.a0o=0;
	L$poptgepsqueezed26=L$poptgepsqueezed25.a;
	tmp5=L$poptgepsqueezed25.o-1;
	Larg0.a0=L$poptgepsqueezed26;
	Larg0.a0o=tmp5;
	__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
	L$poptgepsqueezed26=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
	L$poptgepsqueezed26[0+Larg4|0].offset=Larg5;
	a:{
		if(((Larg6.length)|0)!==0){
			L$poptgepsqueezed26=tmp3.a13;
			tmp7=0;
			tmp6=0;
			while(1){
				tmp3.i10=tmp7;
				tmp3.i9=tmp6;
				tmp3.i8=tmp5;
				tmp8=tmp3.a7;
				tmp7=tmp3.i6|0;
				tmp1=(+(tmp6>>>0));
				tmp6=tmp8[tmp1].bufOffset;
				tmp5=tmp8[tmp1].len;
				tmp3.i11=tmp5;
				__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed26,tmp7,HEAP8,tmp6,tmp5);
				tmp8=L$poptgepsqueezed26.a0;
				tmp5=L$poptgepsqueezed26.a0o|0;
				if(tmp8!==nullArray||tmp5!==0)if(tmp8[tmp5].a0!==null){
					tmp3.i14=0;
					tmp3=tmp8[tmp5].a[tmp8[tmp5].o- -1];
					tmp3.a0=tmp2;
					tmp3.a0o=0;
					break a;
				}
				tmp8=tmp8[tmp5].a[tmp8[tmp5].o- -1];
				tmp6=tmp8.a1.i1|0;
				tmp8=L$poptgepsqueezed26.a0;
				tmp7=L$poptgepsqueezed26.a0o|0;
				if(tmp8!==nullArray||tmp7!==0)tmp8[tmp7].a1(tmp8,tmp7);
				if((tmp6|0)<0){
					tmp7=tmp3.i10|0;
				}else{
					tmp7=(tmp3.i10|0)+tmp6|0;
					if((tmp6|0)===(tmp3.i11|0)){
						tmp6=tmp3.i9|0;
						tmp6=tmp6+1|0;
						if(tmp6>>>0<(tmp3.a7.length)>>>0){
							tmp5=tmp3.i11|0;
							continue;
						}
					}
				}
				break;
			}
		}else{
			tmp7=0;
		}
		tmp6=tmp3.i4|0;
		if((tmp6|0)!==21){
			tmp2=tmp3.a3;
			L$poptgepsqueezed26={type:tmp6,tid:(tmp3.i5|0),value:tmp7};
			tmp2.a6.postMessage(L$poptgepsqueezed26);
		}
		tmp3.a12=L$poptgepsqueezed25;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed25.a0;
		tmp5=L$poptgepsqueezed25.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux18checkPendingWritesEv(Larg0){
	var tmp0=null,tmp1=0,L$poptgep$poptgep$poptgepsqueezed=null,L$ppre10_0=null,Lgeptoindexphi=0,Lgeptoindexphi3=0;
	L$poptgep$poptgep$poptgepsqueezed=Larg0.a45;
	L$ppre10_0=L$poptgep$poptgep$poptgepsqueezed.a0;
	L$poptgep$poptgep$poptgepsqueezed=L$poptgep$poptgep$poptgepsqueezed.a1;
	a:{
		if(L$ppre10_0[0]!==L$poptgep$poptgep$poptgepsqueezed){
			Lgeptoindexphi=0;
			while(1){
				if(L$ppre10_0[Lgeptoindexphi].a0.a3(L$ppre10_0[Lgeptoindexphi])|0)break a;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(L$ppre10_0[Lgeptoindexphi]!==L$poptgep$poptgep$poptgepsqueezed)continue;
				break;
			}
		}
		if(!(__ZNK7CheerpX5Linux12MessageQueue16hasPendingWritesEv(Larg0.a46)|0)){
			L$poptgep$poptgep$poptgepsqueezed=Larg0.a48;
			L$ppre10_0=L$poptgep$poptgep$poptgepsqueezed.a0;
			Lgeptoindexphi=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
			tmp0=L$poptgep$poptgep$poptgepsqueezed.a1;
			tmp1=L$poptgep$poptgep$poptgepsqueezed.a1o|0;
			if(L$ppre10_0!==tmp0||Lgeptoindexphi!==tmp1){
				Lgeptoindexphi3=0;
				while(1){
					L$ppre10_0[Lgeptoindexphi+Lgeptoindexphi3|0](null);
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					if(L$ppre10_0!==tmp0||(Lgeptoindexphi+Lgeptoindexphi3|0)!==tmp1)continue;
					break;
				}
				L$ppre10_0=L$poptgep$poptgep$poptgepsqueezed.a0;
				Lgeptoindexphi=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
			}
			L$poptgep$poptgep$poptgepsqueezed.a1=L$ppre10_0;
			L$poptgep$poptgep$poptgepsqueezed.a1o=Lgeptoindexphi;
		}
	}
}
function __ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgepsqueezed17=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed18=null,tmp5=0;
	tmp2=new constructor__ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj$presume;
	tmp3.a1=__ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj$pdestroy;
	tmp3.i5=Larg4;
	tmp3.i4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed17=tmp3.a2;
	L$poptgepsqueezed17.a0=nullArray;
	L$poptgepsqueezed17.a0o=0;
	L$poptgepsqueezed18=L$poptgepsqueezed17.a;
	tmp5=L$poptgepsqueezed17.o-1;
	Larg0.a0=L$poptgepsqueezed18;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed18=tmp3.a7;
	__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed18,Larg3);
	tmp1=L$poptgepsqueezed18.a0;
	tmp5=L$poptgepsqueezed18.a0o|0;
	a:{
		if(tmp1!==nullArray||tmp5!==0){
			if(tmp1[tmp5].a0!==null){
				tmp3.i8=0;
				tmp3=tmp1[tmp5].a[tmp1[tmp5].o- -1];
				tmp3.a0=tmp2;
				tmp3.a0o=0;
				break a;
			}
			tmp1[tmp5].a1(tmp1,tmp5);
		}
		tmp2=tmp3.a3;
		L$poptgepsqueezed18={type:(tmp3.i4|0),value:(tmp3.i5|0)};
		tmp2.a6.postMessage(L$poptgepsqueezed18);
		tmp3.a6=L$poptgepsqueezed17;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed17.a0;
		tmp5=L$poptgepsqueezed17.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux18runFSFchmodRequestE12CORE_MESSAGEjjj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=null;
	__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
	tmp1=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
	tmp1=tmp1[0+Larg3|0].fileData;
	tmp0=tmp1.permType;
	if((tmp0|0)!==0){
		tmp1.permType=tmp0& -512|Larg4&511;
		tmp1.dirty=1;
		if((Larg1|0)!==21){
			tmp1={type:Larg1,tid:Larg2,value:0};
			Larg0.a6.postMessage(tmp1);
		}
		return;
	}
	___assert_fail(_$pstr$p45$p127,0,_$pstr$p15$p124,0,961,___func__$p_ZN7CheerpX5Linux18runFSFchmodRequestE12CORE_MESSAGEjjj,0);
	;
}
function __ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed18=null,L$poptgepsqueezed12=null,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=0;
	tmp2=new constructor__ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_$presume;
	tmp3.a1=__ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_$pdestroy;
	tmp3.a7=Larg6;
	tmp3.a6=Larg5;
	tmp3.i5=Larg3;
	tmp3.i4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed18=tmp3.a2;
	L$poptgepsqueezed18.a0=nullArray;
	L$poptgepsqueezed18.a0o=0;
	tmp4=L$poptgepsqueezed18.a;
	tmp5=L$poptgepsqueezed18.o-1;
	Larg0.a0=tmp4;
	Larg0.a0o=tmp5;
	tmp4=__ZN11CheerpXBase13getDeviceByIdEj(Larg4);
	if((tmp4.i1|0)!==0)___assert_fail(_$pstr$p35$p125,0,_$pstr$p15$p124,0,975,___func__$p_ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_,0);
	;
	L$poptgepsqueezed12=tmp3.a9;
	__ZN7CheerpX14CheerpOSDevice4linkERKN6client6StringES4_(L$poptgepsqueezed12,tmp4,Larg5,Larg6);
	tmp4=L$poptgepsqueezed12.a0;
	tmp5=L$poptgepsqueezed12.a0o|0;
	a:{
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp3.i10=0;
			tmp3=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
		tmp5=tmp4.a1.i1|0;
		tmp4=L$poptgepsqueezed12.a0;
		tmp6=L$poptgepsqueezed12.a0o|0;
		if(tmp4!==nullArray||tmp6!==0)tmp4[tmp6].a1(tmp4,tmp6);
		tmp2=tmp3.a7;
		tmp4=tmp3.a6;
		tmp6=tmp3.i4|0;
		if((tmp6|0)!==21){
			tmp2=tmp3.a3;
			tmp4={type:tmp6,tid:(tmp3.i5|0),value:(((tmp5|0)===0?1:0)<<31>>31)};
			tmp2.a6.postMessage(tmp4);
		}
		tmp3.a8=L$poptgepsqueezed18;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed18.a0;
		tmp5=L$poptgepsqueezed18.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed25=null,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=0,tmp6=0,tmp7=0,tmp8=0,tmp9=null,tmp10=null,tmp11=null,tmp12=0,tmp13=null,L$poptgepsqueezed26=null;
	tmp9=new constructor__ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj$pFrame().a;
	tmp10=tmp9[0];
	tmp10.a0=__ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj$presume;
	tmp10.a1=__ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj$pdestroy;
	tmp10.i8=Larg6;
	tmp10.i7=Larg5;
	tmp10.a6=Larg4;
	tmp10.i5=Larg3;
	tmp10.i4=Larg2;
	tmp10.a3=Larg1;
	L$poptgepsqueezed25=tmp10.a2;
	L$poptgepsqueezed25.a0=nullArray;
	L$poptgepsqueezed25.a0o=0;
	tmp11=L$poptgepsqueezed25.a;
	tmp12=L$poptgepsqueezed25.o-1;
	Larg0.a0=tmp11;
	Larg0.a0o=tmp12;
	tmp11=__ZN11CheerpXBase13getDeviceByIdEj(Larg5);
	tmp12=tmp11.i1|0;
	if((tmp12|0)===1){
		tmp13=tmp11.a5;
		tmp12=tmp13.i1|0;
		L$poptgepsqueezed26=tmp13;
		tmp13=tmp11.a6;
		tmp11=L$poptgepsqueezed26;
	}else{
		tmp13=Larg4;
	}
	if((tmp12|0)!==0)___assert_fail(_$pstr$p35$p125,0,_$pstr$p15$p124,0,750,___func__$p_ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj,0);
	;
	tmp10.a9=tmp11;
	L$poptgepsqueezed26=tmp10.a11;
	__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed26,tmp11,tmp13);
	tmp11=L$poptgepsqueezed26.a0;
	tmp12=L$poptgepsqueezed26.a0o|0;
	a:{
		if(tmp11!==nullArray||tmp12!==0)if(tmp11[tmp12].a0!==null){
			tmp10.i12=0;
			tmp10=tmp11[tmp12].a[tmp11[tmp12].o- -1];
			tmp10.a0=tmp9;
			tmp10.a0o=0;
			break a;
		}
		tmp11=tmp11[tmp12].a[tmp11[tmp12].o- -1];
		tmp11=tmp11.a1.a1;
		tmp13=L$poptgepsqueezed26.a0;
		tmp12=L$poptgepsqueezed26.a0o|0;
		if(tmp13!==nullArray||tmp12!==0)tmp13[tmp12].a1(tmp13,tmp12);
		tmp13=tmp10.a9;
		tmp12=tmp13.a0.a1(tmp13)|0;
		if(tmp11.parent===null)___assert_fail(_$pstr$p30$p126,0,_$pstr$p15$p124,0,756,___func__$p_ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj,0);
		;
		tmp1=tmp10.i8|0;
		tmp2=tmp10.i7|0;
		tmp13=tmp10.a6;
		tmp3=tmp10.i5|0;
		tmp4=tmp10.i4|0;
		tmp9=tmp10.a3;
		tmp5=tmp11.inodeId;
		tmp6=tmp11.permType;
		tmp7=tmp11.fileLength;
		L$poptgepsqueezed26=tmp11.contents;
		tmp8=tmp11.gid;
		tmp13={type:tmp4,tid:tmp3,devId:tmp2,inodeId:tmp5,permType:tmp6,fileSize:tmp7,lastModified:0,promoteReadToExec:tmp12,path:tmp13,parentInodeId:tmp1,value:L$poptgepsqueezed26,uid:tmp8,gid:(tmp11.uid)};
		tmp9.a6.postMessage(tmp13);
		tmp10.a10=L$poptgepsqueezed25;
		tmp10.a0=null;
		tmp9=L$poptgepsqueezed25.a0;
		tmp12=L$poptgepsqueezed25.a0o|0;
		(tmp9!==nullArray||tmp12!==0?tmp9:_NoopCoro$pFrame$pConst$p118)[tmp9!==nullArray||tmp12!==0?tmp12:$NoopCoro$pFrame$pConst$p118].a0((tmp9!==nullArray||tmp12!==0?tmp9:_NoopCoro$pFrame$pConst$p118),tmp9!==nullArray||tmp12!==0?tmp12:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed20=null,L$poptgepsqueezed13=null,tmp2=null,tmp3=null,tmp4=null,tmp5=0;
	tmp2=new constructor__ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj$presume;
	tmp3.a1=__ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj$pdestroy;
	tmp3.i8=Larg6;
	tmp3.i7=Larg5;
	tmp3.a6=Larg4;
	tmp3.i5=Larg3;
	tmp3.i4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed20=tmp3.a2;
	L$poptgepsqueezed20.a0=nullArray;
	L$poptgepsqueezed20.a0o=0;
	tmp4=L$poptgepsqueezed20.a;
	tmp5=L$poptgepsqueezed20.o-1;
	Larg0.a0=tmp4;
	Larg0.a0o=tmp5;
	tmp4=__ZN11CheerpXBase13getDeviceByIdEj(Larg5);
	if((tmp4.i1|0)!==0)___assert_fail(_$pstr$p35$p125,0,_$pstr$p15$p124,0,770,___func__$p_ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj,0);
	;
	L$poptgepsqueezed13=tmp3.a10;
	__ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE(L$poptgepsqueezed13,tmp4,Larg4);
	tmp4=L$poptgepsqueezed13.a0;
	tmp5=L$poptgepsqueezed13.a0o|0;
	a:{
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp3.i11=0;
			tmp3=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
		tmp4=tmp4.a1.a1;
		tmp2=L$poptgepsqueezed13.a0;
		tmp5=L$poptgepsqueezed13.a0o|0;
		if(tmp2!==nullArray||tmp5!==0)tmp2[tmp5].a1(tmp2,tmp5);
		tmp2=tmp3.a6;
		tmp2=tmp3.a3;
		tmp4={type:(tmp3.i4|0),tid:(tmp3.i5|0),files:tmp4,devId:(tmp3.i7|0),inodeId:(tmp3.i8|0)};
		tmp2.a6.postMessage(tmp4);
		tmp3.a9=L$poptgepsqueezed20;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed20.a0;
		tmp5=L$poptgepsqueezed20.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed18=null,L$poptgepsqueezed12=null,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=0;
	tmp2=new constructor__ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_$presume;
	tmp3.a1=__ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_$pdestroy;
	tmp3.a7=Larg6;
	tmp3.a6=Larg5;
	tmp3.i5=Larg3;
	tmp3.i4=Larg2;
	tmp3.a3=Larg1;
	L$poptgepsqueezed18=tmp3.a2;
	L$poptgepsqueezed18.a0=nullArray;
	L$poptgepsqueezed18.a0o=0;
	tmp4=L$poptgepsqueezed18.a;
	tmp5=L$poptgepsqueezed18.o-1;
	Larg0.a0=tmp4;
	Larg0.a0o=tmp5;
	tmp4=__ZN11CheerpXBase13getDeviceByIdEj(Larg4);
	if((tmp4.i1|0)!==0)___assert_fail(_$pstr$p35$p125,0,_$pstr$p15$p124,0,994,___func__$p_ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_,0);
	;
	L$poptgepsqueezed12=tmp3.a9;
	__ZN7CheerpX14CheerpOSDevice6renameERKN6client6StringES4_(L$poptgepsqueezed12,tmp4,Larg5,Larg6);
	tmp4=L$poptgepsqueezed12.a0;
	tmp5=L$poptgepsqueezed12.a0o|0;
	a:{
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp3.i10=0;
			tmp3=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
		tmp5=tmp4.a1.i1|0;
		tmp4=L$poptgepsqueezed12.a0;
		tmp6=L$poptgepsqueezed12.a0o|0;
		if(tmp4!==nullArray||tmp6!==0)tmp4[tmp6].a1(tmp4,tmp6);
		tmp2=tmp3.a7;
		tmp4=tmp3.a6;
		tmp6=tmp3.i4|0;
		if((tmp6|0)!==21){
			tmp2=tmp3.a3;
			tmp4={type:tmp6,tid:(tmp3.i5|0),value:(((tmp5|0)===0?1:0)<<31>>31)};
			tmp2.a6.postMessage(tmp4);
		}
		tmp3.a8=L$poptgepsqueezed18;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed18.a0;
		tmp5=L$poptgepsqueezed18.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var L$poptgepsqueezed21=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0,L$poptgepsqueezed16=null,tmp6=null,tmp7=0;
	tmp1=new constructor__ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj$pFrame().a;
	tmp2=tmp1[0];
	tmp2.a0=__ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj$presume;
	tmp2.a1=__ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj$pdestroy;
	tmp2.a6=Larg4;
	tmp2.i5=Larg3;
	tmp2.i4=Larg2;
	tmp2.a3=Larg1;
	L$poptgepsqueezed21=tmp2.a2;
	L$poptgepsqueezed21.a0=nullArray;
	L$poptgepsqueezed21.a0o=0;
	tmp3=L$poptgepsqueezed21.a;
	tmp4=L$poptgepsqueezed21.o-1;
	Larg0.a0=tmp3;
	Larg0.a0o=tmp4;
	tmp3=__ZN11CheerpXBase13getDeviceByIdEj(Larg5);
	if((tmp3.i1|0)!==0)___assert_fail(_$pstr$p35$p125,0,_$pstr$p15$p124,0,1013,___func__$p_ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj,0);
	;
	tmp2.a7=tmp3;
	L$poptgepsqueezed16=tmp2.a9;
	__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed16,tmp3,Larg4);
	tmp3=L$poptgepsqueezed16.a0;
	tmp4=L$poptgepsqueezed16.a0o|0;
	a:{
		if(tmp3!==nullArray||tmp4!==0)if(tmp3[tmp4].a0!==null){
			tmp2.i11=0;
			tmp2=tmp3[tmp4].a[tmp3[tmp4].o- -1];
			tmp2.a0=tmp1;
			tmp2.a0o=0;
			break a;
		}
		tmp3=tmp3[tmp4].a[tmp3[tmp4].o- -1];
		tmp3=tmp3.a1.a1;
		tmp6=L$poptgepsqueezed16.a0;
		tmp4=L$poptgepsqueezed16.a0o|0;
		if(tmp6!==nullArray||tmp4!==0)tmp6[tmp4].a1(tmp6,tmp4);
		b:{
			if(((tmp3.permType)|0)!==0){
				tmp3=tmp2.a7;
				tmp6=tmp2.a6;
				L$poptgepsqueezed16=tmp2.a10;
				__ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE(L$poptgepsqueezed16,tmp3,tmp6);
				tmp3=L$poptgepsqueezed16.a0;
				tmp4=L$poptgepsqueezed16.a0o|0;
				if(tmp3!==nullArray||tmp4!==0)if(tmp3[tmp4].a0!==null){
					tmp2.i11=1;
					tmp2=tmp3[tmp4].a[tmp3[tmp4].o- -1];
					tmp2.a0=tmp1;
					tmp2.a0o=0;
					break a;
				}
				tmp3=tmp3[tmp4].a[tmp3[tmp4].o- -1];
				tmp4=tmp3.a1.i1|0;
				tmp3=L$poptgepsqueezed16.a0;
				tmp7=L$poptgepsqueezed16.a0o|0;
				if(tmp3!==nullArray||tmp7!==0)tmp3[tmp7].a1(tmp3,tmp7);
				tmp1=tmp2.a6;
				tmp7=tmp2.i4|0;
				if((tmp7|0)===21)break b;
				tmp1={type:tmp7,tid:(tmp2.i5|0),value:(((tmp4|0)===0?1:0)<<31>>31)};
			}else tmp1={type:(tmp2.i4|0),tid:(tmp2.i5|0),value: -2};
			tmp2.a3.a6.postMessage(tmp1);
		}
		tmp2.a8=L$poptgepsqueezed21;
		tmp2.a0=null;
		tmp1=L$poptgepsqueezed21.a0;
		tmp4=L$poptgepsqueezed21.a0o|0;
		(tmp1!==nullArray||tmp4!==0?tmp1:_NoopCoro$pFrame$pConst$p118)[tmp1!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p118].a0((tmp1!==nullArray||tmp4!==0?tmp1:_NoopCoro$pFrame$pConst$p118),tmp1!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj$presume(Larg0,Marg0){
	var L$poptgepsqueezed25=null,L$ppre_0=null,L$ppre_1=0,tmp3=0,tmp4=null;
	L$poptgepsqueezed25=Larg0[Marg0].a10;
	a:{
		b:{
			c:{
				if((Larg0[Marg0].i11&3)!==0){
					L$ppre_0=L$poptgepsqueezed25.a0;
					L$ppre_1=L$poptgepsqueezed25.a0o|0;
					L$ppre_0=L$ppre_0[L$ppre_1];
				}else{
					L$ppre_0=Larg0[Marg0].a9.a0;
					L$ppre_1=Larg0[Marg0].a9.a0o|0;
					L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$ppre_0=L$ppre_0.a1.a1;
					tmp4=Larg0[Marg0].a9.a0;
					L$ppre_1=Larg0[Marg0].a9.a0o|0;
					if(tmp4!==nullArray||L$ppre_1!==0)tmp4[L$ppre_1].a1(tmp4,L$ppre_1);
					if(((L$ppre_0.permType)|0)===0){
						L$poptgepsqueezed25={type:(Larg0[Marg0].i4|0),tid:(Larg0[Marg0].i5|0),value: -2};
						break c;
					}
					L$ppre_0=Larg0[Marg0].a7;
					tmp4=Larg0[Marg0].a6;
					__ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE(L$poptgepsqueezed25,L$ppre_0,tmp4);
					L$ppre_0=L$poptgepsqueezed25.a0;
					L$ppre_1=L$poptgepsqueezed25.a0o|0;
					if(L$ppre_0!==nullArray||L$ppre_1!==0){
						if(L$ppre_0[L$ppre_1].a0!==null){
							Larg0[Marg0].i11=1;
							L$poptgepsqueezed25=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
							L$poptgepsqueezed25.a0=Larg0;
							L$poptgepsqueezed25.a0o=Marg0;
							break a;
						}
						L$ppre_0=L$ppre_0[L$ppre_1];
					}else{
						L$ppre_0=null;
					}
				}
				L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
				L$ppre_1=L$ppre_0.a1.i1|0;
				L$ppre_0=L$poptgepsqueezed25.a0;
				tmp3=L$poptgepsqueezed25.a0o|0;
				if(L$ppre_0!==nullArray||tmp3!==0)L$ppre_0[tmp3].a1(L$ppre_0,tmp3);
				L$poptgepsqueezed25=Larg0[Marg0].a6;
				tmp3=Larg0[Marg0].i4|0;
				if((tmp3|0)===21)break b;
				L$poptgepsqueezed25={type:tmp3,tid:(Larg0[Marg0].i5|0),value:(((L$ppre_1|0)===0?1:0)<<31>>31)};
			}
			Larg0[Marg0].a3.a6.postMessage(L$poptgepsqueezed25);
		}
		L$poptgepsqueezed25=Larg0[Marg0].a2;
		Larg0[Marg0].a8=L$poptgepsqueezed25;
		Larg0[Marg0].a0=null;
		L$ppre_0=L$poptgepsqueezed25.a0;
		L$ppre_1=L$poptgepsqueezed25.a0o|0;
		(L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118)[L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118].a0((L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118),L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null)if((Larg0.i11&3)!==0){
		tmp0=Larg0.a10.a0;
		tmp1=Larg0.a10.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
		tmp0=Larg0.a6;
	}else{
		tmp0=Larg0.a9.a0;
		tmp1=Larg0.a9.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed9=null,tmp1=0,tmp2=0,tmp3=null;
	L$poptgepsqueezed9=Larg0.a9.a0;
	tmp1=Larg0.a9.a0o|0;
	L$poptgepsqueezed9=L$poptgepsqueezed9[tmp1].a[L$poptgepsqueezed9[tmp1].o- -1];
	tmp1=L$poptgepsqueezed9.a1.i1|0;
	L$poptgepsqueezed9=Larg0.a9.a0;
	tmp2=Larg0.a9.a0o|0;
	if(L$poptgepsqueezed9!==nullArray||tmp2!==0)L$poptgepsqueezed9[tmp2].a1(L$poptgepsqueezed9,tmp2);
	L$poptgepsqueezed9=Larg0.a7;
	tmp3=Larg0.a6;
	tmp2=Larg0.i4|0;
	if((tmp2|0)!==21){
		L$poptgepsqueezed9=Larg0.a3;
		tmp3={type:tmp2,tid:(Larg0.i5|0),value:(((tmp1|0)===0?1:0)<<31>>31)};
		L$poptgepsqueezed9.a6.postMessage(tmp3);
	}
	L$poptgepsqueezed9=Larg0.a2;
	Larg0.a8=L$poptgepsqueezed9;
	Larg0.a0=null;
	tmp3=L$poptgepsqueezed9.a0;
	tmp1=L$poptgepsqueezed9.a0o|0;
	(tmp3!==nullArray||tmp1!==0?tmp3:_NoopCoro$pFrame$pConst$p118)[tmp3!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((tmp3!==nullArray||tmp1!==0?tmp3:_NoopCoro$pFrame$pConst$p118),tmp3!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null;
	if(Larg0.a0!==null){
		tmp2=Larg0.a9.a0;
		tmp0=Larg0.a9.a0o|0;
		if(tmp2!==nullArray||tmp0!==0)tmp2[tmp0].a1(tmp2,tmp0);
		tmp2=Larg0.a7;
		tmp1=Larg0.a6;
	}
}
function __ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed16=null,tmp1=0,tmp2=null;
	L$poptgepsqueezed16=Larg0.a10.a0;
	tmp1=Larg0.a10.a0o|0;
	L$poptgepsqueezed16=L$poptgepsqueezed16[tmp1].a[L$poptgepsqueezed16[tmp1].o- -1];
	L$poptgepsqueezed16=L$poptgepsqueezed16.a1.a1;
	tmp2=Larg0.a10.a0;
	tmp1=Larg0.a10.a0o|0;
	if(tmp2!==nullArray||tmp1!==0)tmp2[tmp1].a1(tmp2,tmp1);
	tmp2=Larg0.a6;
	tmp2=Larg0.a3;
	L$poptgepsqueezed16={type:(Larg0.i4|0),tid:(Larg0.i5|0),files:L$poptgepsqueezed16,devId:(Larg0.i7|0),inodeId:(Larg0.i8|0)};
	tmp2.a6.postMessage(L$poptgepsqueezed16);
	L$poptgepsqueezed16=Larg0.a2;
	Larg0.a9=L$poptgepsqueezed16;
	Larg0.a0=null;
	tmp2=L$poptgepsqueezed16.a0;
	tmp1=L$poptgepsqueezed16.a0o|0;
	(tmp2!==nullArray||tmp1!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp1!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	if(Larg0.a0!==null){
		tmp1=Larg0.a10.a0;
		tmp0=Larg0.a10.a0o|0;
		if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		tmp1=Larg0.a6;
	}
}
function __ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=null,tmp5=0,tmp6=0,tmp7=0,tmp8=null,tmp9=0,L$poptgepsqueezed17=null,tmp11=0,tmp12=null;
	L$poptgepsqueezed17=Larg0.a11.a0;
	tmp11=Larg0.a11.a0o|0;
	L$poptgepsqueezed17=L$poptgepsqueezed17[tmp11].a[L$poptgepsqueezed17[tmp11].o- -1];
	L$poptgepsqueezed17=L$poptgepsqueezed17.a1.a1;
	tmp12=Larg0.a11.a0;
	tmp11=Larg0.a11.a0o|0;
	if(tmp12!==nullArray||tmp11!==0)tmp12[tmp11].a1(tmp12,tmp11);
	tmp12=Larg0.a9;
	tmp11=tmp12.a0.a1(tmp12)|0;
	if(L$poptgepsqueezed17.parent!==null){
		tmp0=Larg0.i8|0;
		tmp1=Larg0.i7|0;
		tmp12=Larg0.a6;
		tmp2=Larg0.i5|0;
		tmp3=Larg0.i4|0;
		tmp4=Larg0.a3;
		tmp5=L$poptgepsqueezed17.inodeId;
		tmp6=L$poptgepsqueezed17.permType;
		tmp7=L$poptgepsqueezed17.fileLength;
		tmp8=L$poptgepsqueezed17.contents;
		tmp9=L$poptgepsqueezed17.gid;
		tmp12={type:tmp3,tid:tmp2,devId:tmp1,inodeId:tmp5,permType:tmp6,fileSize:tmp7,lastModified:0,promoteReadToExec:tmp11,path:tmp12,parentInodeId:tmp0,value:tmp8,uid:tmp9,gid:(L$poptgepsqueezed17.uid)};
		tmp4.a6.postMessage(tmp12);
		L$poptgepsqueezed17=Larg0.a2;
		Larg0.a10=L$poptgepsqueezed17;
		Larg0.a0=null;
		tmp12=L$poptgepsqueezed17.a0;
		tmp11=L$poptgepsqueezed17.a0o|0;
		(tmp12!==nullArray||tmp11!==0?tmp12:_NoopCoro$pFrame$pConst$p118)[tmp12!==nullArray||tmp11!==0?tmp11:$NoopCoro$pFrame$pConst$p118].a0((tmp12!==nullArray||tmp11!==0?tmp12:_NoopCoro$pFrame$pConst$p118),tmp12!==nullArray||tmp11!==0?tmp11:$NoopCoro$pFrame$pConst$p118);
		return;
	}
	___assert_fail(_$pstr$p30$p126,0,_$pstr$p15$p124,0,756,___func__$p_ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj,0);
	;
}
function __ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a11.a0;
		tmp1=Larg0.a11.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed9=null,tmp1=0,tmp2=0,tmp3=null;
	L$poptgepsqueezed9=Larg0.a9.a0;
	tmp1=Larg0.a9.a0o|0;
	L$poptgepsqueezed9=L$poptgepsqueezed9[tmp1].a[L$poptgepsqueezed9[tmp1].o- -1];
	tmp1=L$poptgepsqueezed9.a1.i1|0;
	L$poptgepsqueezed9=Larg0.a9.a0;
	tmp2=Larg0.a9.a0o|0;
	if(L$poptgepsqueezed9!==nullArray||tmp2!==0)L$poptgepsqueezed9[tmp2].a1(L$poptgepsqueezed9,tmp2);
	L$poptgepsqueezed9=Larg0.a7;
	tmp3=Larg0.a6;
	tmp2=Larg0.i4|0;
	if((tmp2|0)!==21){
		L$poptgepsqueezed9=Larg0.a3;
		tmp3={type:tmp2,tid:(Larg0.i5|0),value:(((tmp1|0)===0?1:0)<<31>>31)};
		L$poptgepsqueezed9.a6.postMessage(tmp3);
	}
	L$poptgepsqueezed9=Larg0.a2;
	Larg0.a8=L$poptgepsqueezed9;
	Larg0.a0=null;
	tmp3=L$poptgepsqueezed9.a0;
	tmp1=L$poptgepsqueezed9.a0o|0;
	(tmp3!==nullArray||tmp1!==0?tmp3:_NoopCoro$pFrame$pConst$p118)[tmp3!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((tmp3!==nullArray||tmp1!==0?tmp3:_NoopCoro$pFrame$pConst$p118),tmp3!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null;
	if(Larg0.a0!==null){
		tmp2=Larg0.a9.a0;
		tmp0=Larg0.a9.a0o|0;
		if(tmp2!==nullArray||tmp0!==0)tmp2[tmp0].a1(tmp2,tmp0);
		tmp2=Larg0.a7;
		tmp1=Larg0.a6;
	}
}
function __ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed10=null,tmp1=0,tmp2=null;
	L$poptgepsqueezed10=Larg0.a7.a0;
	tmp1=Larg0.a7.a0o|0;
	if(L$poptgepsqueezed10!==nullArray||tmp1!==0)L$poptgepsqueezed10[tmp1].a1(L$poptgepsqueezed10,tmp1);
	L$poptgepsqueezed10=Larg0.a3;
	tmp2={type:(Larg0.i4|0),value:(Larg0.i5|0)};
	L$poptgepsqueezed10.a6.postMessage(tmp2);
	L$poptgepsqueezed10=Larg0.a2;
	Larg0.a6=L$poptgepsqueezed10;
	Larg0.a0=null;
	tmp2=L$poptgepsqueezed10.a0;
	tmp1=L$poptgepsqueezed10.a0o|0;
	(tmp2!==nullArray||tmp1!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp1!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a7.a0;
		tmp1=Larg0.a7.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZNK7CheerpX5Linux12MessageQueue16hasPendingWritesEv(Larg0){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=null,tmp4=null,tmp5=0,Lgeptoindexphi1=0,tmp7=null,tmp8=0;
	tmp0=Larg0.a1;
	tmp1=Larg0.a1o|0;
	tmp4=Larg0.a2;
	tmp5=Larg0.a2o|0;
	if(tmp4!==tmp0||tmp5!==tmp1){
		tmp5=Larg0.i4|0;
		Lgeptoindexphi1=tmp5>>>10;
		tmp4=tmp0[tmp1+Lgeptoindexphi1|0];
		tmp2=(Larg0.i5|0)+tmp5|0;
		tmp3=tmp0[tmp1+(tmp2>>>10)|0];
		if(tmp4.d!==tmp3.d||(tmp4.o+(tmp5&1023)|0)!==(tmp3.o+(tmp2&1023)|0)){
			tmp8=tmp5;
			tmp5=tmp4.o+(tmp8&1023)|0;
			tmp4=tmp4.d;
			while(1){
				tmp7=tmp4[tmp5];
				if(((tmp7.type)|0)===54)return 1|0;
				if(((tmp7.type)|0)===22)return 1|0;
				tmp7=tmp0[tmp1+Lgeptoindexphi1|0];
				if(((__imul(tmp5+1|0,4))-(__imul(tmp7.o,4))|0)===4096){
					Lgeptoindexphi1=Lgeptoindexphi1+1|0;
					tmp4=tmp0[tmp1+Lgeptoindexphi1|0];
					tmp5=tmp4.o;
					tmp4=tmp4.d;
				}else{
					tmp4=tmp4;
					tmp5=tmp5+1|0;
				}
				if(tmp4!==tmp3.d||tmp5!==(tmp3.o+(tmp2&1023)|0))continue;
				break;
			}
		}
	}
	return ((Larg0.i6&255)!==0?1:0)|0;
}
function __ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$presume(Larg0,Marg0){
	var tmp0=-0.,L$poptgepsqueezed25=null,L$ppre_0=null,L$ppre_1=0,tmp4=0,tmp5=0;
	L$poptgepsqueezed25=Larg0[Marg0].a13;
	L$ppre_0=L$poptgepsqueezed25.a0;
	L$ppre_1=L$poptgepsqueezed25.a0o|0;
	L$ppre_0=L$ppre_0[L$ppre_1];
	a:{
		while(1){
			L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
			tmp4=L$ppre_0.a1.i1|0;
			L$ppre_0=L$poptgepsqueezed25.a0;
			L$ppre_1=L$poptgepsqueezed25.a0o|0;
			if(L$ppre_0!==nullArray||L$ppre_1!==0)L$ppre_0[L$ppre_1].a1(L$ppre_0,L$ppre_1);
			if((tmp4|0)<0){
				L$ppre_1=Larg0[Marg0].i10|0;
			}else{
				L$ppre_1=(Larg0[Marg0].i10|0)+tmp4|0;
				if((tmp4|0)===(Larg0[Marg0].i11|0)){
					tmp5=Larg0[Marg0].i9|0;
					L$ppre_0=Larg0[Marg0].a7;
					tmp5=tmp5+1|0;
					if(tmp5>>>0<(L$ppre_0.length)>>>0){
						Larg0[Marg0].i10=L$ppre_1;
						Larg0[Marg0].i9=tmp5;
						Larg0[Marg0].i8=tmp4;
						L$ppre_1=Larg0[Marg0].i6|0;
						tmp0=(+(tmp5>>>0));
						tmp5=L$ppre_0[tmp0].bufOffset;
						tmp4=L$ppre_0[tmp0].len;
						Larg0[Marg0].i11=tmp4;
						__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed25,L$ppre_1,HEAP8,tmp5,tmp4);
						L$ppre_0=L$poptgepsqueezed25.a0;
						L$ppre_1=L$poptgepsqueezed25.a0o|0;
						if(L$ppre_0!==nullArray||L$ppre_1!==0)if(L$ppre_0[L$ppre_1].a0!==null){
							Larg0[Marg0].i14=0;
							L$poptgepsqueezed25=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
							L$poptgepsqueezed25.a0=Larg0;
							L$poptgepsqueezed25.a0o=Marg0;
							break a;
						}
						L$ppre_0=L$ppre_0[L$ppre_1];
						continue;
					}
				}
			}
			break;
		}
		tmp5=Larg0[Marg0].i4|0;
		if((tmp5|0)!==21){
			L$poptgepsqueezed25=Larg0[Marg0].a3;
			L$ppre_0={type:tmp5,tid:(Larg0[Marg0].i5|0),value:L$ppre_1};
			L$poptgepsqueezed25.a6.postMessage(L$ppre_0);
		}
		L$poptgepsqueezed25=Larg0[Marg0].a2;
		Larg0[Marg0].a12=L$poptgepsqueezed25;
		Larg0[Marg0].a0=null;
		L$ppre_0=L$poptgepsqueezed25.a0;
		L$ppre_1=L$poptgepsqueezed25.a0o|0;
		(L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118)[L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118].a0((L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118),L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a13.a0;
		tmp1=Larg0.a13.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$presume(Larg0,Marg0){
	var tmp0=-0.,L$poptgepsqueezed25=null,L$ppre_0=null,L$ppre_1=0,tmp4=0,tmp5=0;
	L$poptgepsqueezed25=Larg0[Marg0].a13;
	L$ppre_0=L$poptgepsqueezed25.a0;
	L$ppre_1=L$poptgepsqueezed25.a0o|0;
	L$ppre_0=L$ppre_0[L$ppre_1];
	a:{
		while(1){
			L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
			tmp4=L$ppre_0.a1.i1|0;
			L$ppre_0=L$poptgepsqueezed25.a0;
			L$ppre_1=L$poptgepsqueezed25.a0o|0;
			if(L$ppre_0!==nullArray||L$ppre_1!==0)L$ppre_0[L$ppre_1].a1(L$ppre_0,L$ppre_1);
			if((tmp4|0)<1){
				L$ppre_1=Larg0[Marg0].i10|0;
			}else{
				L$ppre_1=(Larg0[Marg0].i10|0)+tmp4|0;
				if((tmp4|0)===(Larg0[Marg0].i11|0)){
					tmp5=Larg0[Marg0].i9|0;
					L$ppre_0=Larg0[Marg0].a7;
					tmp5=tmp5+1|0;
					if(tmp5>>>0<(L$ppre_0.length)>>>0){
						Larg0[Marg0].i10=L$ppre_1;
						Larg0[Marg0].i9=tmp5;
						Larg0[Marg0].i8=tmp4;
						L$ppre_1=Larg0[Marg0].i6|0;
						tmp0=(+(tmp5>>>0));
						tmp5=L$ppre_0[tmp0].bufOffset;
						tmp4=L$ppre_0[tmp0].len;
						Larg0[Marg0].i11=tmp4;
						__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(L$poptgepsqueezed25,L$ppre_1,HEAP8,tmp5,tmp4);
						L$ppre_0=L$poptgepsqueezed25.a0;
						L$ppre_1=L$poptgepsqueezed25.a0o|0;
						if(L$ppre_0!==nullArray||L$ppre_1!==0)if(L$ppre_0[L$ppre_1].a0!==null){
							Larg0[Marg0].i14=0;
							L$poptgepsqueezed25=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
							L$poptgepsqueezed25.a0=Larg0;
							L$poptgepsqueezed25.a0o=Marg0;
							break a;
						}
						L$ppre_0=L$ppre_0[L$ppre_1];
						continue;
					}
				}
			}
			break;
		}
		L$poptgepsqueezed25=Larg0[Marg0].a3;
		L$ppre_0={type:(Larg0[Marg0].i4|0),tid:(Larg0[Marg0].i5|0),value:L$ppre_1};
		L$poptgepsqueezed25.a6.postMessage(L$ppre_0);
		L$poptgepsqueezed25=Larg0[Marg0].a2;
		Larg0[Marg0].a12=L$poptgepsqueezed25;
		Larg0[Marg0].a0=null;
		L$ppre_0=L$poptgepsqueezed25.a0;
		L$ppre_1=L$poptgepsqueezed25.a0o|0;
		(L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118)[L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118].a0((L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118),L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a13.a0;
		tmp1=Larg0.a13.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj$presume(Larg0,Marg0){
	var tmp0=null,L$poptgepsqueezed45=null,L$ppre_0=null,L$ppre_1=0,tmp4=0;
	L$poptgepsqueezed45=Larg0[Marg0].a18;
	a:{
		b:{
			if((Larg0[Marg0].i19&3)!==0){
				L$ppre_0=L$poptgepsqueezed45.a0;
				L$ppre_1=L$poptgepsqueezed45.a0o|0;
				if(L$ppre_0===nullArray&&L$ppre_1===0)break b;
				L$poptgepsqueezed45=L$ppre_0;
				L$ppre_1=L$ppre_1;
			}else{
				L$ppre_0=Larg0[Marg0].a17.a0;
				L$ppre_1=Larg0[Marg0].a17.a0o|0;
				L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
				L$ppre_1=L$ppre_0.a1.i1|0;
				L$ppre_0=Larg0[Marg0].a17.a0;
				tmp4=Larg0[Marg0].a17.a0o|0;
				if(L$ppre_0!==nullArray||tmp4!==0)L$ppre_0[tmp4].a1(L$ppre_0,tmp4);
				L$ppre_0=Larg0[Marg0].a12;
				tmp0=Larg0[Marg0].a4;
				if((L$ppre_1|0)<=-1)___assert_fail(_$pstr$p50$p129,0,_$pstr$p15$p124,0,1115,___func__$p_ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj,0);
				;
				__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
				L$ppre_0=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
				L$ppre_0=L$ppre_0[0+L$ppre_1|0].fileData;
				if(L$ppre_0.parent===null)___assert_fail(_$pstr$p48$p130,0,_$pstr$p15$p124,0,1119,___func__$p_ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj,0);
				;
				tmp4=Larg0[Marg0].i7|0;
				Larg0[Marg0].i13=L$ppre_0.inodeId;
				Larg0[Marg0].i14=L$ppre_0.length;
				Larg0[Marg0].i15=L$ppre_0.lastModified;
				L$ppre_0.permType=tmp4;
				L$ppre_0.dirty=1;
				if((tmp4&61440|0)===40960)L$ppre_0.chunks=Larg0[Marg0].a8;
				__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed45,L$ppre_1);
				L$ppre_0=L$poptgepsqueezed45.a0;
				L$ppre_1=L$poptgepsqueezed45.a0o|0;
				if(L$ppre_0===nullArray&&L$ppre_1===0)break b;
				if(L$ppre_0[L$ppre_1].a0!==null){
					Larg0[Marg0].i19=1;
					L$poptgepsqueezed45=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$poptgepsqueezed45.a0=Larg0;
					L$poptgepsqueezed45.a0o=Marg0;
					break a;
				}
				L$poptgepsqueezed45=L$ppre_0;
				L$ppre_1=L$ppre_1;
			}
			L$poptgepsqueezed45[L$ppre_1].a1(L$poptgepsqueezed45,L$ppre_1);
		}
		L$poptgepsqueezed45=Larg0[Marg0].a3;
		L$ppre_0={type:(Larg0[Marg0].i6|0),tid:(Larg0[Marg0].i5|0),value:Larg0[Marg0].a8,devId:(Larg0[Marg0].i9|0),inodeId:(Larg0[Marg0].i13|0),permType:(Larg0[Marg0].i7|0),len:(Larg0[Marg0].i14|0),lastModified:(Larg0[Marg0].i15|0),uid:(Larg0[Marg0].i10|0),gid:(Larg0[Marg0].i11|0)};
		L$poptgepsqueezed45.a6.postMessage(L$ppre_0);
		L$poptgepsqueezed45=Larg0[Marg0].a2;
		Larg0[Marg0].a16=L$poptgepsqueezed45;
		Larg0[Marg0].a0=null;
		L$ppre_0=L$poptgepsqueezed45.a0;
		L$ppre_1=L$poptgepsqueezed45.a0o|0;
		(L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118)[L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118].a0((L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118),L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=0;
	if(Larg0.a0!==null)if((Larg0.i19&3)!==0){
		tmp1=Larg0.a18.a0;
		tmp2=Larg0.a18.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
	}else{
		tmp1=Larg0.a17.a0;
		tmp2=Larg0.a17.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
		tmp1=Larg0.a12;
		tmp0=Larg0.a4;
	}
}
function __ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj$presume(Larg0,Marg0){
	var tmp0=0,L$poptgepsqueezed33=null,L$ppre_0=null,L$ppre_1=0,tmp4=null,tmp5=0;
	L$poptgepsqueezed33=Larg0[Marg0].a14;
	a:{
		b:{
			if((Larg0[Marg0].i15&3)!==0){
				L$ppre_0=L$poptgepsqueezed33.a0;
				L$ppre_1=L$poptgepsqueezed33.a0o|0;
				L$ppre_0=L$ppre_0[L$ppre_1];
			}else{
				L$ppre_0=Larg0[Marg0].a13.a0;
				L$ppre_1=Larg0[Marg0].a13.a0o|0;
				L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
				L$ppre_0=L$ppre_0.a1.a1;
				Larg0[Marg0].a11=L$ppre_0;
				tmp4=Larg0[Marg0].a13.a0;
				L$ppre_1=Larg0[Marg0].a13.a0o|0;
				if(tmp4!==nullArray||L$ppre_1!==0)tmp4[L$ppre_1].a1(tmp4,L$ppre_1);
				if(((L$ppre_0.permType)&16384|0)!==0){
					L$poptgepsqueezed33={type:(Larg0[Marg0].i6|0),tid:(Larg0[Marg0].i5|0),value: -17};
					break b;
				}
				L$ppre_0=Larg0[Marg0].a10;
				L$ppre_1=Larg0[Marg0].i9|0;
				tmp5=Larg0[Marg0].i8|0;
				tmp0=Larg0[Marg0].i7|0;
				tmp4=Larg0[Marg0].a4;
				__ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii(L$poptgepsqueezed33,L$ppre_0,tmp4,tmp0,tmp5,L$ppre_1);
				L$ppre_0=L$poptgepsqueezed33.a0;
				L$ppre_1=L$poptgepsqueezed33.a0o|0;
				if(L$ppre_0!==nullArray||L$ppre_1!==0){
					if(L$ppre_0[L$ppre_1].a0!==null){
						Larg0[Marg0].i15=1;
						L$poptgepsqueezed33=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
						L$poptgepsqueezed33.a0=Larg0;
						L$poptgepsqueezed33.a0o=Marg0;
						break a;
					}
					L$ppre_0=L$ppre_0[L$ppre_1];
				}else{
					L$ppre_0=null;
				}
			}
			L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
			L$ppre_0=L$ppre_0.a1.a1;
			tmp4=L$poptgepsqueezed33.a0;
			L$ppre_1=L$poptgepsqueezed33.a0o|0;
			if(tmp4!==nullArray||L$ppre_1!==0)tmp4[L$ppre_1].a1(tmp4,L$ppre_1);
			tmp4=Larg0[Marg0].a4;
			L$ppre_1=Larg0[Marg0].i6|0;
			tmp5=Larg0[Marg0].i5|0;
			L$poptgepsqueezed33={type:L$ppre_1,tid:tmp5,value:((((L$ppre_0.exists)|0)!==5?1:0)<<31>>31)};
		}
		Larg0[Marg0].a3.a6.postMessage(L$poptgepsqueezed33);
		L$poptgepsqueezed33=Larg0[Marg0].a2;
		Larg0[Marg0].a12=L$poptgepsqueezed33;
		Larg0[Marg0].a0=null;
		L$ppre_0=L$poptgepsqueezed33.a0;
		L$ppre_1=L$poptgepsqueezed33.a0o|0;
		(L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118)[L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118].a0((L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_0:_NoopCoro$pFrame$pConst$p118),L$ppre_0!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null)if((Larg0.i15&3)!==0){
		tmp0=Larg0.a14.a0;
		tmp1=Larg0.a14.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
		tmp0=Larg0.a4;
	}else{
		tmp0=Larg0.a13.a0;
		tmp1=Larg0.a13.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=0,L$poptgepsqueezed15=null,tmp7=0,tmp8=0,tmp9=null,tmp10=0;
	L$poptgepsqueezed15=Larg0.a12.a0;
	tmp7=Larg0.a12.a0o|0;
	L$poptgepsqueezed15=L$poptgepsqueezed15[tmp7].a[L$poptgepsqueezed15[tmp7].o- -1];
	tmp7=L$poptgepsqueezed15.a1.i1|0;
	L$poptgepsqueezed15=Larg0.a12.a0;
	tmp8=Larg0.a12.a0o|0;
	if(L$poptgepsqueezed15!==nullArray||tmp8!==0)L$poptgepsqueezed15[tmp8].a1(L$poptgepsqueezed15,tmp8);
	L$poptgepsqueezed15=Larg0.a10;
	tmp9=Larg0.a9;
	if((tmp7|0)<0){
		if((Larg0.i6&3|0)===0)___assert_fail(_$pstr$p47$p134,0,_$pstr$p15$p124,0,1053,___func__$p_ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj,0);
		;
		L$poptgepsqueezed15={type:62,tid:(Larg0.i4|0),value: -30};
	}else{
		__ZN7CheerpX14CheerpOSDevice7fdDescsE.length;
		L$poptgepsqueezed15=__ZN7CheerpX14CheerpOSDevice7fdDescsE;
		L$poptgepsqueezed15=L$poptgepsqueezed15[0+tmp7|0].fileData;
		if(L$poptgepsqueezed15.parent===null)___assert_fail(_$pstr$p48$p130,0,_$pstr$p15$p124,0,1062,___func__$p_ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj,0);
		;
		tmp10=Larg0.i6|0;
		tmp0=L$poptgepsqueezed15.inodeId;
		tmp1=L$poptgepsqueezed15.length;
		tmp8=L$poptgepsqueezed15.permType;
		tmp2=L$poptgepsqueezed15.lastModified;
		if((tmp10&64|0)!==0)if(((L$poptgepsqueezed15.dirty)|0)!==0){
			if((tmp8|0)===0)___assert_fail(_$pstr$p45$p127,0,_$pstr$p15$p124,0,1072,___func__$p_ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj,0);
			;
			tmp8=Larg0.i7&511|tmp8& -512;
			L$poptgepsqueezed15.permType=tmp8;
		}
		tmp10=Larg0.i8|0;
		tmp3=Larg0.i5|0;
		tmp4=Larg0.i4|0;
		tmp5=L$poptgepsqueezed15.uid;
		L$poptgepsqueezed15={type:tmp3,tid:tmp4,fd:tmp7,devId:tmp10,inodeId:tmp0,permType:tmp8,len:tmp1,lastModified:tmp2,uid:tmp5,gid:(L$poptgepsqueezed15.gid)};
	}
	Larg0.a3.a6.postMessage(L$poptgepsqueezed15);
	L$poptgepsqueezed15=Larg0.a2;
	Larg0.a11=L$poptgepsqueezed15;
	Larg0.a0=null;
	tmp9=L$poptgepsqueezed15.a0;
	tmp7=L$poptgepsqueezed15.a0o|0;
	(tmp9!==nullArray||tmp7!==0?tmp9:_NoopCoro$pFrame$pConst$p118)[tmp9!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst$p118].a0((tmp9!==nullArray||tmp7!==0?tmp9:_NoopCoro$pFrame$pConst$p118),tmp9!==nullArray||tmp7!==0?tmp7:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null;
	if(Larg0.a0!==null){
		tmp2=Larg0.a12.a0;
		tmp0=Larg0.a12.a0o|0;
		if(tmp2!==nullArray||tmp0!==0)tmp2[tmp0].a1(tmp2,tmp0);
		tmp2=Larg0.a10;
		tmp1=Larg0.a9;
	}
}
function __ZN7CheerpX5Linux12MessageQueue3popEv$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=0,tmp2=null,tmp3=0,L$poptgepsqueezed11=null,L$poptgep$poptgep3$poptgep=null;
	tmp2=Larg0.a3.a0;
	tmp3=tmp2.a1.i0|0;
	if((tmp3&65535)>=256)tmp2.a1.i0=tmp3&255;
	tmp2.a0=nullArray;
	tmp2.a0o=0;
	L$poptgepsqueezed11=Larg0.a6;
	L$poptgep$poptgep3$poptgep=L$poptgepsqueezed11.a1;
	tmp3=L$poptgepsqueezed11.a1o|0;
	tmp0=L$poptgepsqueezed11.i4|0;
	tmp2=L$poptgep$poptgep3$poptgep[tmp3+(tmp0>>>10)|0];
	tmp2=tmp2.d[tmp2.o+(tmp0&1023)|0];
	L$poptgepsqueezed11.i5=(L$poptgepsqueezed11.i5|0)-1|0;
	tmp1=tmp0+1|0;
	L$poptgepsqueezed11.i4=tmp1;
	if(tmp1>>>0>=2048){
		L$poptgepsqueezed11.a1=L$poptgep$poptgep3$poptgep;
		L$poptgepsqueezed11.a1o=tmp3+1|0;
		L$poptgepsqueezed11.i4=tmp0-1023|0;
	}
	L$poptgepsqueezed11=Larg0.a2;
	L$poptgep$poptgep3$poptgep=L$poptgepsqueezed11.a1;
	L$poptgep$poptgep3$poptgep.i0=256;
	L$poptgep$poptgep3$poptgep.a1=tmp2;
	Larg0.a7=L$poptgepsqueezed11;
	Larg0.a0=null;
	tmp2=L$poptgepsqueezed11.a0;
	tmp3=L$poptgepsqueezed11.a0o|0;
	(tmp2!==nullArray||tmp3!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp3!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux12MessageQueue3popEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		if(tmp0!==null){
			tmp0.a0=nullArray;
			tmp0.a0o=0;
		}
	}
}
function __ZN7CheerpX5Linux14requestAppInitEv$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,L$poptgepsqueezed4=null,tmp2=0;
	L$poptgepsqueezed4=Larg0.a4.a0;
	tmp2=Larg0.a4.a0o|0;
	L$poptgepsqueezed4=Larg0.a4.a0;
	tmp2=Larg0.a4.a0o|0;
	if(L$poptgepsqueezed4!==nullArray||tmp2!==0)L$poptgepsqueezed4[tmp2].a1(L$poptgepsqueezed4,tmp2);
	L$poptgepsqueezed4=Larg0.a2;
	Larg0.a3=L$poptgepsqueezed4;
	Larg0.a0=null;
	tmp0=L$poptgepsqueezed4.a0;
	tmp2=L$poptgepsqueezed4.a0o|0;
	(tmp0!==nullArray||tmp2!==0?tmp0:_NoopCoro$pFrame$pConst$p118)[tmp0!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst$p118].a0((tmp0!==nullArray||tmp2!==0?tmp0:_NoopCoro$pFrame$pConst$p118),tmp0!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux14requestAppInitEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a4.a0;
		tmp1=Larg0.a4.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0,Lgeptoindexphi3=0,Lgeptoindex=0,Lgeptoindex4=0,L$poptgepsqueezed27=null,L$poptgep15$poptgep$poptgepsqueezed=null,tmp9=0,tmp10=null,tmp11=0,tmp12=null,Lgeptoindexphi=0,tmp14=0;
	tmp0=create__ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b$pFrame({a0:null,a1:null,a2:tmp0={a0:nullArray,a0o:0,a1:{i0:0,a1:null}},a3:tmp0={a0:null,a1:null},i4:0,a5:[0],a6:null}).a;
	tmp1=tmp0[0];
	tmp1.a0=__ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b$presume;
	tmp1.a1=__ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b$pdestroy;
	L$poptgepsqueezed27=tmp1.a2;
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed27.a1.i0=0;
	L$poptgep15$poptgep$poptgepsqueezed=L$poptgepsqueezed27.a;
	tmp9=L$poptgepsqueezed27.o-1;
	Larg0.a0=L$poptgep15$poptgep$poptgepsqueezed;
	Larg0.a0o=tmp9;
	L$poptgepsqueezed27=HEAP32;
	tmp9=Larg1.i7|0;
	L$poptgepsqueezed27[0+tmp9|0]=-2;
	Larg1.a6.postMessage(Larg3);
	L$poptgepsqueezed27={a0:nullArray,a0o:0,a1:{i0:0,a1:null},a2:null};
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed27.a1.i0=0;
	L$poptgepsqueezed27.a2=null;
	L$poptgep15$poptgep$poptgepsqueezed=Larg1.a49;
	tmp10=L$poptgep15$poptgep$poptgepsqueezed.a1;
	tmp11=L$poptgep15$poptgep$poptgepsqueezed.a1o|0;
	tmp12=L$poptgep15$poptgep$poptgepsqueezed.a2.a0;
	Lgeptoindexphi=L$poptgep15$poptgep$poptgepsqueezed.a2.a0o|0;
	if(tmp11<Lgeptoindexphi){
		tmp10[tmp11].i0=Larg2;
		tmp10[tmp11].a1=L$poptgepsqueezed27;
		L$poptgep15$poptgep$poptgepsqueezed.a1=tmp10;
		L$poptgep15$poptgep$poptgepsqueezed.a1o=tmp11+1|0;
		tmp10=tmp10[tmp11];
	}else{
		tmp2=L$poptgep15$poptgep$poptgepsqueezed.a0;
		tmp9=L$poptgep15$poptgep$poptgepsqueezed.a0o|0;
		tmp9=(__imul(tmp9,8));
		tmp11=(__imul(tmp11,8))-tmp9>>3;
		tmp14=tmp11+1|0;
		if(tmp14>>>0>536870911)_abort();
		;
		tmp9=(__imul(Lgeptoindexphi,8))-tmp9|0;
		if(tmp9>>>0<2147483640){
			tmp9>>>=2;
			tmp9=tmp9>>>0>tmp14>>>0?tmp9|0:tmp14|0;
		}else{
			tmp9=536870911;
		}
		tmp12=createArray_struct$p_ZSt4pairIjP9SuspenderIPN6client6ObjectEEE((tmp9<<3)/8|0);
		tmp12[tmp11].i0=Larg2;
		tmp12[tmp11].a1=L$poptgepsqueezed27;
		L$poptgepsqueezed27=L$poptgep15$poptgep$poptgepsqueezed.a0;
		tmp14=L$poptgep15$poptgep$poptgepsqueezed.a0o|0;
		tmp10=L$poptgep15$poptgep$poptgepsqueezed.a1;
		tmp3=L$poptgep15$poptgep$poptgepsqueezed.a1o|0;
		if(tmp10===L$poptgepsqueezed27&&tmp3===tmp14){
			L$poptgep15$poptgep$poptgepsqueezed.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a0o=0+tmp11|0;
			L$poptgep15$poptgep$poptgepsqueezed.a1=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a1o=(0+tmp11|0)+1|0;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0o=0+tmp9|0;
			tmp10=tmp12[tmp11];
		}else{
			Lgeptoindexphi=tmp11;
			Lgeptoindexphi3=0;
			while(1){
				Lgeptoindex=Lgeptoindexphi-1|0;
				Lgeptoindex4=Lgeptoindexphi3-1|0;
				tmp12[Lgeptoindex].i0=tmp10[tmp3+Lgeptoindex4|0].i0|0;
				tmp12[(0+Lgeptoindexphi|0)+ -1|0].a1=tmp10[(tmp3+Lgeptoindexphi3|0)+ -1|0].a1;
				if(tmp10!==L$poptgepsqueezed27||(tmp3+Lgeptoindex4|0)!==tmp14){
					Lgeptoindexphi3=Lgeptoindex4;
					Lgeptoindexphi=Lgeptoindex;
					continue;
				}
				break;
			}
			L$poptgep15$poptgep$poptgepsqueezed.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a0o=0+Lgeptoindex|0;
			L$poptgep15$poptgep$poptgepsqueezed.a1=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a1o=(0+tmp11|0)+1|0;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0o=0+tmp9|0;
			tmp10=tmp12[tmp11];
		}
	}
	L$poptgepsqueezed27=tmp10.a1;
	L$poptgep15$poptgep$poptgepsqueezed=tmp1.a3;
	L$poptgep15$poptgep$poptgepsqueezed.a0=L$poptgepsqueezed27;
	if(L$poptgepsqueezed27.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
	;
	L$poptgepsqueezed27.a2=L$poptgep15$poptgep$poptgepsqueezed;
	tmp1.i4=0;
	L$poptgepsqueezed27.a0=tmp0;
	L$poptgepsqueezed27.a0o=0;
}
function __ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed14=null,tmp1=null,tmp2=null,tmp3=0;
	L$poptgepsqueezed14=Larg0.a3.a0;
	tmp1=L$poptgepsqueezed14.a1;
	tmp2=tmp1.a1;
	tmp3=tmp1.i0|0;
	if((tmp3&65535)>=256)tmp1.i0=tmp3&255;
	L$poptgepsqueezed14.a0=nullArray;
	L$poptgepsqueezed14.a0o=0;
	L$poptgepsqueezed14=Larg0.a2;
	tmp1=L$poptgepsqueezed14.a1;
	if(tmp2!==null){
		tmp2=tmp2;
		tmp1.i0=256;
		tmp1.a1=tmp2;
	}else{
		tmp3=tmp1.i0|0;
		tmp1.a1=null;
		if((tmp3&65535)<256)tmp1.i0=tmp3|256;
	}
	Larg0.a6=L$poptgepsqueezed14;
	Larg0.a0=null;
	tmp1=L$poptgepsqueezed14.a0;
	tmp3=L$poptgepsqueezed14.a0o|0;
	(tmp1!==nullArray||tmp3!==0?tmp1:_NoopCoro$pFrame$pConst$p118)[tmp1!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118].a0((tmp1!==nullArray||tmp3!==0?tmp1:_NoopCoro$pFrame$pConst$p118),tmp1!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		if(tmp0!==null){
			tmp0.a0=nullArray;
			tmp0.a0o=0;
		}
	}
}
function __ZN7CheerpX5Linux28requestCreateExternalProcessEv$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep2$poptgep=null;
	L$poptgepsqueezed5=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	L$poptgepsqueezed5=L$poptgepsqueezed5[tmp1].a[L$poptgepsqueezed5[tmp1].o- -1];
	tmp1=L$poptgepsqueezed5.a1.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.i1=tmp1;
	L$poptgep$poptgep2$poptgep=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0)L$poptgep$poptgep2$poptgep[tmp1].a1(L$poptgep$poptgep2$poptgep,tmp1);
	Larg0.a6=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118)[L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118),L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux28requestCreateExternalProcessEv$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0,Lgeptoindexphi3=0,Lgeptoindex=0,Lgeptoindex4=0,L$poptgepsqueezed27=null,L$poptgep15$poptgep$poptgepsqueezed=null,tmp9=0,tmp10=null,tmp11=0,tmp12=null,Lgeptoindexphi=0,tmp14=0;
	tmp0=create__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb$pFrame({a0:null,a1:null,a2:tmp0={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:tmp0={a0:null,a1:null},i4:0,a5:[0],a6:null}).a;
	tmp1=tmp0[0];
	tmp1.a0=__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb$presume;
	tmp1.a1=__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb$pdestroy;
	L$poptgepsqueezed27=tmp1.a2;
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed27.a1.i0=0;
	L$poptgep15$poptgep$poptgepsqueezed=L$poptgepsqueezed27.a;
	tmp9=L$poptgepsqueezed27.o-1;
	Larg0.a0=L$poptgep15$poptgep$poptgepsqueezed;
	Larg0.a0o=tmp9;
	if(Larg4){
		L$poptgepsqueezed27=HEAP32;
		tmp9=Larg1.i7|0;
		L$poptgepsqueezed27[0+tmp9|0]=-2;
	}
	Larg1.a6.postMessage(Larg3);
	L$poptgepsqueezed27={a0:nullArray,a0o:0,a1:{i0:0,a1:null},a2:null};
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed27.a1.i0=0;
	L$poptgepsqueezed27.a2=null;
	L$poptgep15$poptgep$poptgepsqueezed=Larg1.a49;
	tmp10=L$poptgep15$poptgep$poptgepsqueezed.a1;
	tmp11=L$poptgep15$poptgep$poptgepsqueezed.a1o|0;
	tmp12=L$poptgep15$poptgep$poptgepsqueezed.a2.a0;
	Lgeptoindexphi=L$poptgep15$poptgep$poptgepsqueezed.a2.a0o|0;
	if(tmp11<Lgeptoindexphi){
		tmp10[tmp11].i0=Larg2;
		tmp10[tmp11].a1=L$poptgepsqueezed27;
		L$poptgep15$poptgep$poptgepsqueezed.a1=tmp10;
		L$poptgep15$poptgep$poptgepsqueezed.a1o=tmp11+1|0;
		tmp10=tmp10[tmp11];
	}else{
		tmp2=L$poptgep15$poptgep$poptgepsqueezed.a0;
		tmp9=L$poptgep15$poptgep$poptgepsqueezed.a0o|0;
		tmp9=(__imul(tmp9,8));
		tmp11=(__imul(tmp11,8))-tmp9>>3;
		tmp14=tmp11+1|0;
		if(tmp14>>>0>536870911)_abort();
		;
		tmp9=(__imul(Lgeptoindexphi,8))-tmp9|0;
		if(tmp9>>>0<2147483640){
			tmp9>>>=2;
			tmp9=tmp9>>>0>tmp14>>>0?tmp9|0:tmp14|0;
		}else{
			tmp9=536870911;
		}
		tmp12=createArray_struct$p_ZSt4pairIjP9SuspenderIPN6client6ObjectEEE((tmp9<<3)/8|0);
		tmp12[tmp11].i0=Larg2;
		tmp12[tmp11].a1=L$poptgepsqueezed27;
		L$poptgepsqueezed27=L$poptgep15$poptgep$poptgepsqueezed.a0;
		tmp14=L$poptgep15$poptgep$poptgepsqueezed.a0o|0;
		tmp10=L$poptgep15$poptgep$poptgepsqueezed.a1;
		tmp3=L$poptgep15$poptgep$poptgepsqueezed.a1o|0;
		if(tmp10===L$poptgepsqueezed27&&tmp3===tmp14){
			L$poptgep15$poptgep$poptgepsqueezed.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a0o=0+tmp11|0;
			L$poptgep15$poptgep$poptgepsqueezed.a1=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a1o=(0+tmp11|0)+1|0;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0o=0+tmp9|0;
			tmp10=tmp12[tmp11];
		}else{
			Lgeptoindexphi=tmp11;
			Lgeptoindexphi3=0;
			while(1){
				Lgeptoindex=Lgeptoindexphi-1|0;
				Lgeptoindex4=Lgeptoindexphi3-1|0;
				tmp12[Lgeptoindex].i0=tmp10[tmp3+Lgeptoindex4|0].i0|0;
				tmp12[(0+Lgeptoindexphi|0)+ -1|0].a1=tmp10[(tmp3+Lgeptoindexphi3|0)+ -1|0].a1;
				if(tmp10!==L$poptgepsqueezed27||(tmp3+Lgeptoindex4|0)!==tmp14){
					Lgeptoindexphi3=Lgeptoindex4;
					Lgeptoindexphi=Lgeptoindex;
					continue;
				}
				break;
			}
			L$poptgep15$poptgep$poptgepsqueezed.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a0o=0+Lgeptoindex|0;
			L$poptgep15$poptgep$poptgepsqueezed.a1=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a1o=(0+tmp11|0)+1|0;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0o=0+tmp9|0;
			tmp10=tmp12[tmp11];
		}
	}
	L$poptgepsqueezed27=tmp10.a1;
	L$poptgep15$poptgep$poptgepsqueezed=tmp1.a3;
	L$poptgep15$poptgep$poptgepsqueezed.a0=L$poptgepsqueezed27;
	if(L$poptgepsqueezed27.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
	;
	L$poptgepsqueezed27.a2=L$poptgep15$poptgep$poptgepsqueezed;
	tmp1.i4=0;
	L$poptgepsqueezed27.a0=tmp0;
	L$poptgepsqueezed27.a0o=0;
}
function __ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,L$poptgepsqueezed10=null,L$poptgep$poptgep2$poptgep=null,tmp3=0;
	L$poptgepsqueezed10=Larg0.a3.a0;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed10.a1;
	tmp0=L$poptgep$poptgep2$poptgep.a1;
	tmp3=L$poptgep$poptgep2$poptgep.i0|0;
	if((tmp3&65535)>=256)L$poptgep$poptgep2$poptgep.i0=tmp3&255;
	L$poptgepsqueezed10.a0=nullArray;
	L$poptgepsqueezed10.a0o=0;
	if(tmp0!==null){
		tmp3=tmp0|0;
		L$poptgepsqueezed10=Larg0.a2;
		L$poptgep$poptgep2$poptgep=L$poptgepsqueezed10.a1;
		L$poptgep$poptgep2$poptgep.i0=256;
		L$poptgep$poptgep2$poptgep.i1=tmp3;
		Larg0.a6=L$poptgepsqueezed10;
		Larg0.a0=null;
		L$poptgep$poptgep2$poptgep=L$poptgepsqueezed10.a0;
		tmp3=L$poptgepsqueezed10.a0o|0;
		(L$poptgep$poptgep2$poptgep!==nullArray||tmp3!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118)[L$poptgep$poptgep2$poptgep!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp3!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118),L$poptgep$poptgep2$poptgep!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118);
		return;
	}
	___assert_fail(_$pstr$p61,0,_$pstr$p81$p123,0,233,___func__$p_ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb,0);
	;
}
function __ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		if(tmp0!==null){
			tmp0.a0=nullArray;
			tmp0.a0o=0;
		}
	}
}
function __ZN14CheerpXProcess17setSignalHandlersEPN6client14SignalHandlersE(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg1.SIGUSR1;
	if(tmp0!==undefined)Larg0.a1[10]=tmp0;
}
function __ZN14CheerpXProcessC1Ej(Larg0,Larg1){
	var tmp0=null,L$poptgep$poptgep1$poptgepsqueezed=null;
	Larg0.i0=Larg1;
	tmp0=undefined;
	L$poptgep$poptgep1$poptgepsqueezed=Larg0.a1;
	L$poptgep$poptgep1$poptgepsqueezed[0]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[1]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[2]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[3]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[4]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[5]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[6]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[7]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[8]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[9]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[10]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[11]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[12]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[13]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[14]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[15]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[16]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[17]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[18]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[19]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[20]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[21]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[22]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[23]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[24]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[25]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[26]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[27]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[28]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[29]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[30]=tmp0;
	L$poptgep$poptgep1$poptgepsqueezed[31]=tmp0;
}
function __ZN7CheerpX12UnixListener5closeEv(Larg0){
	var tmp0=null,tmp1=null;
	tmp0=Larg0.a2;
	if(tmp0.a9===null){
		tmp1={type:84,tid:(Larg0.i0|0),arg0:(Larg0.i1|0)};
		tmp0.a6.postMessage(tmp1);
	}
	Larg0.a2=null;
}
function __ZN7CheerpX12UnixListener6acceptEv(Larg0){
	var tmp0=null,tmp1=null,L$poptgepsqueezed16=null,tmp3=null,tmp4=null,tmp5=0;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	L$poptgepsqueezed16=tmp0.a1;
	tmp3=create__ZZN7CheerpX12UnixListener6acceptEvENKUlPT_T0_E_clIS0_PFvPN6client6ObjectEEEE6ThreadS2_S3_$pFrame({a0:null,a1:null,a2:{i0:0},a3:tmp3={a0:nullArray,a0o:0},i4:0,a5:new Uint8Array(2),a6:null}).a;
	tmp1=tmp3[0];
	tmp1.a0=__ZZN7CheerpX12UnixListener6acceptEvENKUlPT_T0_E_clIS0_PFvPN6client6ObjectEEEE6ThreadS2_S3_$presume;
	tmp1.a1=__ZZN7CheerpX12UnixListener6acceptEvENKUlPT_T0_E_clIS0_PFvPN6client6ObjectEEEE6ThreadS2_S3_$pdestroy;
	tmp1.a6=L$poptgepsqueezed16;
	L$poptgepsqueezed16=tmp1.a3;
	__ZN7CheerpX5Linux13requestAcceptEjj(L$poptgepsqueezed16,Larg0.a2,Larg0.i0|0,Larg0.i1|0);
	tmp4=L$poptgepsqueezed16.a0;
	tmp5=L$poptgepsqueezed16.a0o|0;
	a:{
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp1.i4=0;
			L$poptgepsqueezed16=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			L$poptgepsqueezed16.a0=tmp3;
			L$poptgepsqueezed16.a0o=0;
			break a;
		}
		tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
		tmp4=tmp4.a1.a1;
		tmp3=L$poptgepsqueezed16.a0;
		tmp5=L$poptgepsqueezed16.a0o|0;
		if(tmp3!==nullArray||tmp5!==0)tmp3[tmp5].a1(tmp3,tmp5);
		tmp1.a6(tmp4);
	}
	L$poptgepsqueezed16=tmp0.a0;
	return L$poptgepsqueezed16;
}
function __ZN7CheerpX5Linux10setConsoleEPN6client11HTMLElementE(Larg0,Larg1){
	__ZN11CXUIConsole10setElementEPN6client11HTMLElementE(Larg0.a27,Larg1);
}
function __ZN7CheerpX5Linux12networkLoginEv(Larg0){
	return Larg0.a47.up();
}
function __ZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjj(Larg0,Larg1,Larg2,Larg3){
	var tmp0=-0.,tmp1=null,tmp2=null,tmp3=null,tmp4=null;
	tmp2={alpha:false};
	tmp3="2d";
	tmp4=[null];
	tmp4[0]=tmp2;
	Larg0.a33=Larg1.getContext(tmp3,tmp2);
	tmp2=tmp4[0];
	if(Larg0.a32!==null){
		tmp2=document.body;
		tmp2.removeChild(Larg0.a34);
		tmp2=Larg0.a32;
		tmp4="mousemove";
		tmp2.removeEventListener(tmp4,Larg0.a35);
		tmp2=Larg0.a32;
		tmp4="mousedown";
		tmp2.removeEventListener(tmp4,Larg0.a35);
		tmp2=Larg0.a32;
		tmp4="mouseup";
		tmp2.removeEventListener(tmp4,Larg0.a35);
		tmp2=Larg0.a32;
		tmp4="contextmenu";
		tmp2.removeEventListener(tmp4,Larg0.a36);
		tmp2=Larg0.a32;
		tmp4="touchmove";
		tmp2.removeEventListener(tmp4,Larg0.a37);
		tmp2=Larg0.a32;
		tmp4="touchstart";
		tmp2.removeEventListener(tmp4,Larg0.a37);
		tmp2=Larg0.a32;
		tmp4="touchend";
		tmp2.removeEventListener(tmp4,Larg0.a37);
		tmp2=Larg0.a32;
		tmp4="click";
		tmp2.removeEventListener(tmp4,Larg0.a38);
	}
	Larg0.a32=Larg1;
	tmp2="textarea";
	Larg0.a34=document.createElement(tmp2);
	tmp2=Larg0.a34;
	tmp4="off";
	tmp2.autocapitalize=tmp4;
	Larg0.a34.spellcheck=1;
	tmp2=Larg0.a34.style;
	tmp4="fixed";
	tmp2.position=tmp4;
	tmp2=Larg0.a34.style;
	tmp4="0";
	tmp2.opacity=tmp4;
	tmp2=Larg0.a34.style;
	tmp4="0";
	tmp2.padding=tmp4;
	tmp2=Larg0.a34.style;
	tmp4="0";
	tmp2.border=tmp4;
	tmp2=Larg0.a34.style;
	tmp4="0px";
	tmp2.top=tmp4;
	tmp2=Larg0.a34.style;
	tmp4="0px";
	tmp2.left=tmp4;
	tmp2=Larg0.a34;
	tmp4="_";
	tmp2.value=tmp4;
	tmp2=document.body;
	tmp2.appendChild(Larg0.a34);
	tmp0=+performance.timeOrigin;
	tmp2=[{a0:null,d1:-0.}];
	tmp2[0].a0=Larg0;
	tmp2[0].d1=tmp0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_0JPNS5_10MouseEventEEEEvPT_DpT0_,tmp2[0]);
	Larg0.a35=tmp2;
	tmp2=__ZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjEN3$_18__invokeEPNS1_5EventE;
	Larg0.a36=tmp2;
	tmp2=[{a0:null,d1:-0.}];
	tmp2[0].a0=Larg0;
	tmp2[0].d1=tmp0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_2JPNS5_10TouchEventEEEEvPT_DpT0_,tmp2[0]);
	Larg0.a37=tmp2;
	tmp2=[{a0:null}];
	tmp2[0].a0=Larg0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_3JPNS5_10MouseEventEEEEvPT_DpT0_,tmp2[0]);
	Larg0.a38=tmp2;
	tmp2=[{a0:null,d1:-0.}];
	tmp2[0].a0=Larg0;
	tmp2[0].d1=tmp0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_4JPNS5_13KeyboardEventEEEEvPT_DpT0_,tmp2[0]);
	tmp2=[{a0:null,d1:-0.}];
	tmp2[0].a0=Larg0;
	tmp2[0].d1=tmp0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_5JPNS5_13KeyboardEventEEEEvPT_DpT0_,tmp2[0]);
	tmp4="mousemove";
	Larg1.addEventListener(tmp4,Larg0.a35);
	tmp4="mousedown";
	Larg1.addEventListener(tmp4,Larg0.a35);
	tmp4="mouseup";
	Larg1.addEventListener(tmp4,Larg0.a35);
	tmp4="contextmenu";
	Larg1.addEventListener(tmp4,Larg0.a36);
	tmp4="touchmove";
	Larg1.addEventListener(tmp4,Larg0.a37);
	tmp4="touchstart";
	Larg1.addEventListener(tmp4,Larg0.a37);
	tmp4="touchend";
	Larg1.addEventListener(tmp4,Larg0.a37);
	tmp4="click";
	Larg1.addEventListener(tmp4,Larg0.a38);
	tmp4=Larg0.a34;
	tmp3="keydown";
	tmp4.addEventListener(tmp3,tmp1);
	tmp4=Larg0.a34;
	tmp3="keyup";
	tmp4.addEventListener(tmp3,tmp2);
	tmp2={type:95,width:Larg2,height:Larg3};
	Larg0.a6.postMessage(tmp2);
}
function __ZN7CheerpX5Linux16registerCallbackERKN6client6StringEPNS1_13EventListenerE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=0,tmp2=0,L$poptgepsqueezed14=null,L$poptgep$poptgep1$poptgepsqueezed=null,tmp5=null,tmp6=null,tmp7=0;
	tmp2=__ZN7CheerpX5Linux14EventCallbacks18getEventTypeByNameERKN6client6StringE(Larg1)|0;
	if((tmp2|0)!==4){
		L$poptgepsqueezed14=__ZN7CheerpX5Linux6eventsE[tmp2];
		if(L$poptgepsqueezed14===null){
			L$poptgepsqueezed14={i0:0,a1:{a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}}};
			L$poptgepsqueezed14.i0=tmp2;
			L$poptgep$poptgep1$poptgepsqueezed=L$poptgepsqueezed14.a1;
			L$poptgep$poptgep1$poptgepsqueezed.a0=nullArray;
			L$poptgep$poptgep1$poptgepsqueezed.a0o=0;
			L$poptgep$poptgep1$poptgepsqueezed.a1=nullArray;
			L$poptgep$poptgep1$poptgepsqueezed.a1o=0;
			L$poptgep$poptgep1$poptgepsqueezed.a2.a0=nullArray;
			L$poptgep$poptgep1$poptgepsqueezed.a2.a0o=0;
			__ZN7CheerpX5Linux6eventsE[tmp2]=L$poptgepsqueezed14;
			L$poptgepsqueezed14={type:57,eventType:tmp2};
			Larg0.a6.postMessage(L$poptgepsqueezed14);
			L$poptgepsqueezed14=__ZN7CheerpX5Linux6eventsE[tmp2];
		}
		L$poptgepsqueezed14=L$poptgepsqueezed14.a1;
		L$poptgep$poptgep1$poptgepsqueezed=L$poptgepsqueezed14.a1;
		tmp2=L$poptgepsqueezed14.a1o|0;
		tmp5=L$poptgepsqueezed14.a2;
		tmp6=tmp5.a0;
		tmp7=tmp5.a0o|0;
		if(L$poptgep$poptgep1$poptgepsqueezed===tmp6&&tmp2===tmp7){
			tmp6={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp6={a0:null}}};
			tmp0=L$poptgepsqueezed14.a0;
			tmp7=L$poptgepsqueezed14.a0o|0;
			tmp2=(__imul(tmp2,4))-(__imul(tmp7,4))|0;
			tmp1=tmp2>>2;
			tmp7=tmp1+1|0;
			if(tmp7>>>0>1073741823)_abort();
			;
			if(tmp2>>>0<2147483644){
				tmp2>>>=1;
				tmp2=tmp2>>>0>tmp7>>>0?tmp2|0:tmp7|0;
			}else{
				tmp2=1073741823;
			}
			L$poptgep$poptgep1$poptgepsqueezed=tmp6.a3;
			L$poptgep$poptgep1$poptgepsqueezed.a1.a0=tmp5;
			if((tmp2|0)!==0)tmp5=createPointerArray([],0,(tmp2<<2)/4|0,null);
			else{
				tmp5=nullArray;
			}
			tmp6.a0=tmp5[0];
			tmp6.a1=tmp5;
			tmp6.a1o=0+tmp1|0;
			L$poptgep$poptgep1$poptgepsqueezed.a0=tmp5;
			L$poptgep$poptgep1$poptgepsqueezed.a0o=0+tmp2|0;
			tmp5[tmp1]=Larg2;
			tmp6.a2=tmp5;
			tmp6.a2o=(0+tmp1|0)+1|0;
			__ZNSt6vectorIPN6client13EventListenerESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(L$poptgepsqueezed14,tmp6);
		}else{
			L$poptgep$poptgep1$poptgepsqueezed[tmp2]=Larg2;
			L$poptgepsqueezed14.a1=L$poptgep$poptgep1$poptgepsqueezed;
			L$poptgepsqueezed14.a1o=tmp2+1|0;
		}
	}
}
function __ZN7CheerpX5Linux16setCustomConsoleEPFvPN6client10Uint8ArrayEjEjj(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null;
	tmp0={type:87,columns:Larg2,rows:Larg3};
	Larg0.a6.postMessage(tmp0);
	tmp0=Larg0.a27;
	if(tmp0.a2!==null)___assert_fail(_$pstr$p28$p245,0,_$pstr$p1$p210,0,375,___func__$p_ZN11CXUIConsole16setWriteCallbackEPFvPN6client10Uint8ArrayEjE,0);
	;
	tmp0.a3=Larg1;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg0;
	tmp0=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux16setCustomConsoleEPFvPN6client10Uint8ArrayEjEjjE3$_0JjjEEEvPT_DpT0_,tmp0[0]);
	return tmp0;
}
function __ZN7CheerpX5Linux18createUnixListenerEPN6client6StringE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp2=tmp0.a1;
	tmp3=new TextEncoder();
	tmp3=tmp3.encode(Larg1);
	if((tmp3[0]&255)===64)tmp3[0]=0;
	tmp1=new Uint8Array((+((tmp3.length)+2>>>0)));
	tmp1[0]=1;
	tmp1.set(tmp3,2);
	tmp3={a0:null};
	__ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_(tmp3,Larg0,tmp2,tmp1);
	tmp2=tmp0.a0;
	return tmp2;
}
function __ZN7CheerpX5Linux18setActivateConsoleEPFvjE(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a27;
	if(tmp0.a2!==null)___assert_fail(_$pstr$p28$p245,0,_$pstr$p1$p210,0,381,___func__$p_ZN11CXUIConsole19setActivateCallbackEPFvjE,0);
	;
	tmp0.a4=Larg1;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg0;
	tmp0=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux18setActivateConsoleEPFvjEE3$_0JjEEEvPT_DpT0_,tmp0[0]);
	return tmp0;
}
function __ZN7CheerpX5Linux18unregisterCallbackERKN6client6StringEPNS1_13EventListenerE(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=null,tmp2=0,L$poptgep$poptgep$poptgepsqueezed=null;
	tmp0=__ZN7CheerpX5Linux14EventCallbacks18getEventTypeByNameERKN6client6StringE(Larg1)|0;
	if((tmp0|0)!==4){
		L$poptgep$poptgep$poptgepsqueezed=__ZN7CheerpX5Linux6eventsE[tmp0];
		if(L$poptgep$poptgep$poptgepsqueezed!==null)if(__ZN7CheerpX5Linux14EventCallbacks14removeCallbackEPN6client13EventListenerE(L$poptgep$poptgep$poptgepsqueezed,Larg2)|0){
			L$poptgep$poptgep$poptgepsqueezed=L$poptgep$poptgep$poptgepsqueezed.a1;
			tmp1=L$poptgep$poptgep$poptgepsqueezed.a0;
			tmp2=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
			if(tmp1!==nullArray||tmp2!==0){
				L$poptgep$poptgep$poptgepsqueezed.a1=tmp1;
				L$poptgep$poptgep$poptgepsqueezed.a1o=tmp2;
			}
			__ZN7CheerpX5Linux6eventsE[tmp0]=null;
			L$poptgep$poptgep$poptgepsqueezed={type:80,eventType:tmp0};
			Larg0.a6.postMessage(L$poptgep$poptgep$poptgepsqueezed);
		}
	}
}
function __ZN7CheerpX5Linux3runEPN6client6StringEPNS1_6TArrayIS3_EEPNS1_12RunOptionalsE(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0,tmp5=0,tmp6=null,tmp7=null,tmp8=0,tmp9=0,tmp10=null,tmp11=0,tmp12=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	if(undefined===Larg2){
		tmp2=tmp0.a2;
		tmp3="The 'args' array is required";
		tmp2(tmp3);
		tmp2=tmp0.a0;
		return tmp2;
	}
	tmp4=Larg0.a28.indexOf(null);
	if((tmp4|0)<0){
		tmp4=Larg0.a28.length;
		+Larg0.a28.push(tmp0.a1);
	}else{
		tmp2=Larg0.a28;
		tmp2[0+tmp4|0]=tmp0.a1;
	}
	tmp2=undefined;
	tmp3=new Array();
	a:{
		b:{
			c:{
				if(Larg3!==null)if(tmp2!==Larg3){
					tmp2="env";
					tmp9=Larg3.hasOwnProperty(tmp2);
					if(tmp9)tmp3=Larg3.env;
					else{
						tmp3=tmp3;
					}
					tmp6="parent";
					tmp9=Larg3.hasOwnProperty(tmp6);
					if(tmp9)tmp6=Larg3.parent.this;
					else{
						tmp6=null;
					}
					tmp2="cwd";
					tmp9=Larg3.hasOwnProperty(tmp2);
					if(tmp9)tmp2=Larg3.cwd;
					else{
						tmp2=null;
					}
					tmp10="uid";
					tmp9=Larg3.hasOwnProperty(tmp10);
					if(tmp9)tmp9=Larg3.uid;
					else{
						tmp9=1000;
					}
					tmp10="gid";
					tmp8=Larg3.hasOwnProperty(tmp10);
					if(tmp8)tmp8=Larg3.gid;
					else{
						tmp8=1000;
					}
					tmp11=Larg0.a9===null?1:0;
					d:{
						if(tmp6!==null){
							tmp5=tmp6.i0|0;
							if(!(tmp11))break d;
						}else{
							tmp5=Larg0.i42|0;
							if(!(tmp11))break d;
						}
						tmp7=new Uint8Array(32);
						tmp6="handlers";
						tmp11=Larg3.hasOwnProperty(tmp6);
						if(!(tmp11))break c;
						tmp6=Larg3.handlers;
						tmp10=createPointerArray([],0,32,null);
						tmp12=undefined;
						tmp10[0]=tmp12;
						tmp10[1]=tmp12;
						tmp10[2]=tmp12;
						tmp10[3]=tmp12;
						tmp10[4]=tmp12;
						tmp10[5]=tmp12;
						tmp10[6]=tmp12;
						tmp10[7]=tmp12;
						tmp10[8]=tmp12;
						tmp10[9]=tmp12;
						tmp10[10]=tmp12;
						tmp10[11]=tmp12;
						tmp10[12]=tmp12;
						tmp10[13]=tmp12;
						tmp10[14]=tmp12;
						tmp10[15]=tmp12;
						tmp10[16]=tmp12;
						tmp10[17]=tmp12;
						tmp10[18]=tmp12;
						tmp10[19]=tmp12;
						tmp10[20]=tmp12;
						tmp10[21]=tmp12;
						tmp10[22]=tmp12;
						tmp10[23]=tmp12;
						tmp10[24]=tmp12;
						tmp10[25]=tmp12;
						tmp10[26]=tmp12;
						tmp10[27]=tmp12;
						tmp10[28]=tmp12;
						tmp10[29]=tmp12;
						tmp10[30]=tmp12;
						tmp10[31]=tmp12;
						tmp12=tmp6.SIGUSR1;
						tmp6=undefined;
						if(tmp12!==tmp6)tmp10[10]=tmp12;
						tmp11=0;
						while(1){
							tmp12=tmp10[tmp11];
							if(tmp12!==tmp6){
								if(tmp12!==null)break;
								tmp7[0+tmp11|0]=1;
								tmp6=undefined;
							}
							tmp1=tmp11+1|0;
							tmp12=tmp10[tmp1];
							if(tmp12!==tmp6){
								if(tmp12!==null)break;
								tmp7[0+tmp1|0]=1;
								tmp6=undefined;
							}
							tmp11=tmp11+2|0;
							if((tmp11|0)===32)break c;
							continue;
						}
						___assert_fail(_$pstr$p61,0,_$pstr$p15$p124,0,727,___func__$p_ZN7CheerpX5Linux3runEPN6client6StringEPNS1_6TArrayIS3_EEPNS1_12RunOptionalsE,0);
						;
					}
					tmp2=Larg3.stdout;
					tmp6=Larg3.stderr;
					break b;
				}
				tmp5=Larg0.i42|0;
				if(Larg0.a9!==null){
					tmp2=undefined;
					tmp6=tmp2;
					tmp3=tmp3;
					break b;
				}
				tmp7=new Uint8Array(32);
				tmp3=tmp3;
				tmp2=null;
				tmp9=1000;
				tmp8=1000;
			}
			tmp3={type:59,path:Larg1,args:Larg2,env:tmp3,tid:tmp5,index:tmp4,handlers:tmp7,cwd:tmp2,uid:tmp9,gid:tmp8};
			break a;
		}
		tmp3={type:79,path:Larg1,args:Larg2,stdout:tmp2,stderr:tmp6,env:tmp3,tid:tmp5};
	}
	Larg0.a6.postMessage(tmp3);
	tmp2=tmp0.a0;
	return tmp2;
}
function __ZN7CheerpX5Linux6createEPN6client14LinuxOptionalsE(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0,tmp5=null,tmp6=0,tmp7=null,tmp8=0,L$poptgepsqueezed18=null,tmp10=null,tmp11=-0.,tmp12=null,tmp13=null,L$p0=null,tmp15=0,L$poptgepsqueezed11=null,tmp17=0;
	tmp0=new constructor_class$p_ZN7CheerpX5LinuxE();
	__ZN7CheerpX5LinuxC2Ev(tmp0);
	tmp7=undefined;
	if(Larg0!==null){
		if(tmp7!==Larg0){
			tmp7="bridgeURL";
			tmp8=Larg0.hasOwnProperty(tmp7);
			if(tmp8)tmp0.a9=Larg0.bridgeURL;
			tmp7="mounts";
			tmp8=Larg0.hasOwnProperty(tmp7);
			a:if(tmp8){
				tmp7=Larg0.mounts;
				if(((tmp7.length)|0)!==0){
					L$poptgepsqueezed18=tmp7[0].path;
					tmp10="/";
					tmp11=+L$poptgepsqueezed18.localeCompare(tmp10);
					if(tmp11===0){
						L$poptgepsqueezed18=tmp0.a44;
						tmp10=L$poptgepsqueezed18.a0;
						tmp8=L$poptgepsqueezed18.a0o|0;
						L$poptgepsqueezed18.a1=tmp10;
						L$poptgepsqueezed18.a1o=tmp8;
						if(((tmp7.length)|0)===0)break a;
						tmp10={i0:0,i1:0,a2:nullArray};
						tmp1={i0:0,i1:0,a2:nullArray};
						tmp2={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp2={a0:null}}};
						tmp8=0;
						while(1){
							tmp11=(+(tmp8>>>0));
							tmp13=tmp7[tmp11].type;
							L$p0=tmp7[tmp11];
							tmp12="dev";
							tmp15=L$p0.hasOwnProperty(tmp12);
							if(tmp15)L$p0=tmp7[tmp11].dev.this;
							else{
								L$p0=null;
							}
							L$poptgepsqueezed11=tmp7[tmp11].path;
							__ZNK6client6String6toUtf8Ev(tmp1,tmp13);
							__ZNK6client6String6toUtf8Ev(tmp10,L$poptgepsqueezed11);
							L$poptgepsqueezed11=L$poptgepsqueezed18.a1;
							tmp17=L$poptgepsqueezed18.a1o|0;
							tmp13=L$poptgepsqueezed18.a2;
							tmp3=tmp13.a0;
							tmp4=tmp13.a0o|0;
							if(tmp17<tmp4){
								__ZNSsC2ERKSs(L$poptgepsqueezed11[tmp17],tmp1);
								L$poptgepsqueezed11[tmp17].a3=L$p0;
								__ZNSsC2ERKSs(L$poptgepsqueezed11[tmp17].a4,tmp10);
								L$poptgepsqueezed18.a1=L$poptgepsqueezed11;
								L$poptgepsqueezed18.a1o=tmp17+1|0;
							}else{
								tmp5=L$poptgepsqueezed18.a0;
								tmp15=L$poptgepsqueezed18.a0o|0;
								tmp15=(__imul(tmp15,28));
								tmp17=((__imul(tmp17,28))-tmp15|0)/28|0;
								tmp6=tmp17+1|0;
								if(tmp6>>>0>153391689)_abort();
								;
								tmp15=((__imul(tmp4,28))-tmp15|0)/28|0;
								if(tmp15>>>0<76695844){
									tmp15<<=1;
									tmp15=tmp15>>>0>tmp6>>>0?tmp15|0:tmp6|0;
								}else{
									tmp15=153391689;
								}
								L$poptgepsqueezed11=tmp2.a3;
								L$poptgepsqueezed11.a1.a0=tmp13;
								if((tmp15|0)!==0)tmp13=createArray_struct$p_ZN7CheerpX5Linux10MountPointE((__imul(tmp15,28)|0)/28|0);
								else{
									tmp13=nullArray;
								}
								tmp2.a0=tmp13[0];
								tmp2.a1=tmp13;
								tmp2.a1o=0+tmp17|0;
								L$poptgepsqueezed11.a0=tmp13;
								L$poptgepsqueezed11.a0o=0+tmp15|0;
								__ZNSsC2ERKSs(tmp13[tmp17],tmp1);
								tmp13[tmp17].a3=L$p0;
								__ZNSsC2ERKSs(tmp13[tmp17].a4,tmp10);
								tmp2.a2=tmp13;
								tmp2.a2o=(0+tmp17|0)+1|0;
								__ZNSt6vectorIN7CheerpX5Linux10MountPointESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(L$poptgepsqueezed18,tmp2);
							}
							tmp8=tmp8+1|0;
							if(tmp8>>>0<(tmp7.length)>>>0)continue;
							break;
						}
						break a;
					}else{
						tmp7=_$pstr$p10$p142;
					}
				}else{
					tmp7=_$pstr$p11$p143;
				}
				console.log(_cheerpCreate_ZN6client6StringC2EPKc(tmp7,0));
			}
			tmp7="networkInterface";
			tmp8=Larg0.hasOwnProperty(tmp7);
			if(tmp8){
				tmp7="networkInterface";
				L$poptgepsqueezed18=Larg0[tmp7];
				tmp7="netmapUpdateCb";
				tmp8=L$poptgepsqueezed18.hasOwnProperty(tmp7);
				if(tmp8){
					tmp0.a47={TCPSocket:()=>{return null;},TCPServerSocket:()=>{return null;},UDPSocket:()=>{return null;}, up:()=>{}};
					return __ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_(tmp0,__ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE(L$poptgepsqueezed18));
				}
				tmp0.a47=Larg0.networkInterface;
				return __ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_(tmp0,null);
			}
			tmp0.a47={TCPSocket:()=>{return null;},TCPServerSocket:()=>{return null;},UDPSocket:()=>{return null;}, up:()=>{}};
			return __ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_(tmp0,null);
		}
		return __ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_(tmp0,null);
	}
	return __ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_(tmp0,null);
}
function __ZN7CheerpX5Linux7flushIOEv(Larg0){
	var tmp0=null,L$poptgepsqueezed12=null,tmp2=null,tmp3=0,tmp4=null,L$poptgepsqueezed8=null,tmp6=0,tmp7=null,tmp8=null,tmp9=0;
	tmp0={a0:null,a1:null,a2:null};
	__ZN11CheerpXBase13createPromiseEv(tmp0);
	tmp4=tmp0.a1;
	L$poptgepsqueezed12=Larg0.a48;
	L$poptgepsqueezed8=L$poptgepsqueezed12.a1;
	tmp6=L$poptgepsqueezed12.a1o|0;
	tmp7=L$poptgepsqueezed12.a2;
	tmp8=tmp7.a0;
	tmp9=tmp7.a0o|0;
	if(L$poptgepsqueezed8===tmp8&&tmp6===tmp9){
		tmp8={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp8={a0:null}}};
		tmp2=L$poptgepsqueezed12.a0;
		tmp9=L$poptgepsqueezed12.a0o|0;
		tmp6=(__imul(tmp6,4))-(__imul(tmp9,4))|0;
		tmp3=tmp6>>2;
		tmp9=tmp3+1|0;
		if(tmp9>>>0>1073741823)_abort();
		;
		if(tmp6>>>0<2147483644){
			tmp6>>>=1;
			tmp6=tmp6>>>0>tmp9>>>0?tmp6|0:tmp9|0;
		}else{
			tmp6=1073741823;
		}
		L$poptgepsqueezed8=tmp8.a3;
		L$poptgepsqueezed8.a1.a0=tmp7;
		if((tmp6|0)!==0)tmp7=createPointerArray([],0,(tmp6<<2)/4|0,null);
		else{
			tmp7=nullArray;
		}
		tmp8.a0=tmp7[0];
		tmp8.a1=tmp7;
		tmp8.a1o=0+tmp3|0;
		L$poptgepsqueezed8.a0=tmp7;
		L$poptgepsqueezed8.a0o=0+tmp6|0;
		tmp7[tmp3]=tmp4;
		tmp8.a2=tmp7;
		tmp8.a2o=(0+tmp3|0)+1|0;
		__ZNSt6vectorIPFvPN6client6ObjectEESaIS4_EE26__swap_out_circular_bufferERSt14__split_bufferIS4_RS5_E(L$poptgepsqueezed12,tmp8);
	}else{
		L$poptgepsqueezed8[tmp6]=tmp4;
		L$poptgepsqueezed12.a1=L$poptgepsqueezed8;
		L$poptgepsqueezed12.a1o=tmp6+1|0;
	}
	__ZN7CheerpX5Linux18checkPendingWritesEv(Larg0);
	tmp4=tmp0.a0;
	return tmp4;
}
function __ZNSt6vectorIPFvPN6client6ObjectEESaIS4_EE26__swap_out_circular_bufferERSt14__split_bufferIS4_RS5_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,Lgeptoindexphi=0,tmp5=0,Lgeptoindexphi3=0,Lgeptoindex18=0,tmp8=0,Lxtraiter=0,Lprol$piter=0;
	tmp2=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp3=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	Lgeptoindexphi=(__imul(Lgeptoindexphi,4))-(__imul(tmp0,4))|0;
	tmp3=Larg1.a1;
	tmp5=Larg1.a1o|0;
	tmp1=-(Lgeptoindexphi>>2)|0;
	if(Lgeptoindexphi>>>0>=4){
		Lgeptoindexphi3=Lgeptoindexphi>>>2;
		Lgeptoindex18=tmp1+Lgeptoindexphi3|0;
		if(tmp0<(tmp5+tmp1|0)){
			tmp8=Lgeptoindexphi-4|0;
			Lgeptoindexphi=(tmp8>>>2)+1&3;
			if((Lgeptoindexphi|0)!==0){
				Lxtraiter=0;
				while(1){
					Lgeptoindexphi3=Lgeptoindexphi3-1|0;
					Lgeptoindex18=Lgeptoindex18-1|0;
					tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0];
					Lxtraiter=Lxtraiter+1|0;
					if((Lxtraiter|0)!==(Lgeptoindexphi|0))continue;
					break;
				}
			}
			if(tmp8>>>0>=12)while(1){
				tmp3[(tmp5+Lgeptoindex18|0)+ -1|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -1|0];
				tmp3[(tmp5+Lgeptoindex18|0)+ -2|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -2|0];
				tmp3[(tmp5+Lgeptoindex18|0)+ -3|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -3|0];
				Lgeptoindexphi3=Lgeptoindexphi3-4|0;
				Lgeptoindex18=Lgeptoindex18-4|0;
				tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0];
				if(tmp3!==tmp3||(tmp5+tmp1|0)!==(tmp5+Lgeptoindex18|0))continue;
				break;
			}
		}else{
			tmp8=Lgeptoindexphi-4|0;
			Lxtraiter=(tmp8>>>2)+1&7;
			if((Lxtraiter|0)!==0){
				Lgeptoindexphi3=tmp1;
				Lprol$piter=0;
				Lgeptoindexphi=0;
				while(1){
					tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0];
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=tmp1;
				Lgeptoindexphi=0;
			}
			if(tmp8>>>0>=28)while(1){
				tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+1|0]=tmp2[(tmp0+Lgeptoindexphi|0)+1|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+2|0]=tmp2[(tmp0+Lgeptoindexphi|0)+2|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+3|0]=tmp2[(tmp0+Lgeptoindexphi|0)+3|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+4|0]=tmp2[(tmp0+Lgeptoindexphi|0)+4|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+5|0]=tmp2[(tmp0+Lgeptoindexphi|0)+5|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+6|0]=tmp2[(tmp0+Lgeptoindexphi|0)+6|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+7|0]=tmp2[(tmp0+Lgeptoindexphi|0)+7|0];
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp3!==tmp3||(tmp5+Lgeptoindex18|0)!==(tmp5+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
	}
	Larg1.a1=tmp3;
	Larg1.a1o=tmp5+(tmp1<<2>>2)|0;
	tmp2=Larg0.a0;
	Lgeptoindexphi=Larg0.a0o|0;
	Larg0.a0=tmp3;
	Larg0.a0o=tmp5+(tmp1<<2>>2)|0;
	Larg1.a1=tmp2;
	Larg1.a1o=Lgeptoindexphi;
	tmp2=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	tmp3=Larg1.a2;
	tmp5=Larg1.a2o|0;
	Larg0.a1=tmp3;
	Larg0.a1o=tmp5;
	Larg1.a2=tmp2;
	Larg1.a2o=Lgeptoindexphi;
	tmp2=Larg0.a2.a0;
	Lgeptoindexphi=Larg0.a2.a0o|0;
	tmp3=Larg1.a3.a0;
	tmp5=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp3;
	Larg0.a2.a0o=tmp5;
	Larg1.a3.a0=tmp2;
	Larg1.a3.a0o=Lgeptoindexphi;
	tmp2=Larg1.a1;
	Lgeptoindexphi=Larg1.a1o|0;
	Larg1.a0=tmp2[Lgeptoindexphi];
}
function __ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,L$poptgep14$poptgep$poptgepsqueezed=null,L$poptgepsqueezed37=null,tmp6=0,L$poptgepsqueezed26=null,tmp8=0,tmp9=null;
	tmp1=new constructor__ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_$pFrame().a;
	tmp2=tmp1[0];
	tmp2.a0=__ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_$presume;
	tmp2.a1=__ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_$pdestroy;
	tmp2.a5=Larg1;
	tmp2.a4=Larg0;
	tmp3=[{a0:null}];
	tmp3[0].a0=tmp2.a2;
	L$poptgep14$poptgep$poptgepsqueezed=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRKZN7CheerpX5Linux6createEPNS4_14LinuxOptionalsEE3$_0PSB_PNS5_IPNS4_16NetworkInterfaceEEEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSP_EEEvPT_DpT0_,tmp3[0]);
	tmp3=new Promise(L$poptgep14$poptgep$poptgepsqueezed);
	L$poptgep14$poptgep$poptgepsqueezed=Larg0.a44;
	L$poptgepsqueezed37=L$poptgep14$poptgep$poptgepsqueezed.a1;
	tmp6=L$poptgep14$poptgep$poptgepsqueezed.a1o|0;
	L$poptgepsqueezed26=L$poptgep14$poptgep$poptgepsqueezed.a0;
	tmp8=L$poptgep14$poptgep$poptgepsqueezed.a0o|0;
	a:{
		if(((__imul(tmp6,28))|0)===((__imul(tmp8,28))|0)){
			L$poptgep14$poptgep$poptgepsqueezed=location.pathname;
			L$poptgepsqueezed37="/";
			tmp6=L$poptgep14$poptgep$poptgepsqueezed.lastIndexOf(L$poptgepsqueezed37);
			if((tmp6|0)<=-1)___assert_fail(_$pstr$p78$p146,0,_$pstr$p15$p124,0,153,___func__$p_ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE,0);
			;
			L$poptgepsqueezed37=L$poptgep14$poptgep$poptgepsqueezed.substr(0,(+(tmp6|0)));
			tmp2.a6=L$poptgepsqueezed37;
			L$poptgep14$poptgep$poptgepsqueezed=tmp2.a12;
			__ZN7CheerpX9WebDevice14createInternalERKN6client6StringE(L$poptgep14$poptgep$poptgepsqueezed,L$poptgepsqueezed37);
			L$poptgepsqueezed37=L$poptgep14$poptgep$poptgepsqueezed.a0;
			tmp6=L$poptgep14$poptgep$poptgepsqueezed.a0o|0;
			if(L$poptgepsqueezed37!==nullArray||tmp6!==0)if(L$poptgepsqueezed37[tmp6].a0!==null){
				tmp2.i13=0;
				tmp2=L$poptgepsqueezed37[tmp6].a[L$poptgepsqueezed37[tmp6].o- -1];
				tmp2.a0=tmp1;
				tmp2.a0o=0;
				break a;
			}
			L$poptgepsqueezed37=L$poptgepsqueezed37[tmp6].a[L$poptgepsqueezed37[tmp6].o- -1];
			L$poptgepsqueezed37=L$poptgepsqueezed37.a1.a1;
			L$poptgepsqueezed26=L$poptgep14$poptgep$poptgepsqueezed.a0;
			tmp6=L$poptgep14$poptgep$poptgepsqueezed.a0o|0;
			if(L$poptgepsqueezed26!==nullArray||tmp6!==0)L$poptgepsqueezed26[tmp6].a1(L$poptgepsqueezed26,tmp6);
			L$poptgep14$poptgep$poptgepsqueezed=tmp2.a6;
			L$poptgepsqueezed26=tmp2.a4;
			tmp2.a3[0]=L$poptgepsqueezed37;
			L$poptgep14$poptgep$poptgepsqueezed={i0:0,i1:0,a2:nullArray};
			L$poptgepsqueezed37={i0:0,i1:0,a2:nullArray};
			L$poptgepsqueezed26=L$poptgepsqueezed26.a44;
			tmp0=L$poptgepsqueezed26.a1;
			tmp6=L$poptgepsqueezed26.a1o|0;
			tmp9=L$poptgepsqueezed26.a2.a0;
			tmp8=L$poptgepsqueezed26.a2.a0o|0;
			if(tmp6<tmp8){
				__ZNSsC2B7v160000IDnEEPKc(L$poptgep14$poptgep$poptgepsqueezed,_$pstr$p79$p147,0);
				tmp9=tmp2.a3[0];
				__ZNSsC2B7v160000IDnEEPKc(L$poptgepsqueezed37,_$pstr$p6,0);
				__ZNSsC2ERKSs(tmp0[tmp6],L$poptgep14$poptgep$poptgepsqueezed);
				tmp0[tmp6].a3=tmp9;
				__ZNSsC2ERKSs(tmp0[tmp6].a4,L$poptgepsqueezed37);
				L$poptgepsqueezed26.a1=tmp0;
				L$poptgepsqueezed26.a1o=tmp6+1|0;
			}else __ZNSt6vectorIN7CheerpX5Linux10MountPointESaIS2_EE24__emplace_back_slow_pathIJRA4_KcRPNS0_6DeviceERA2_S6_EEEvDpOT_(L$poptgepsqueezed26,tmp2.a3,0);
		}
		L$poptgep14$poptgep$poptgepsqueezed=tmp2.a4;
		L$poptgepsqueezed37=tmp2.a9;
		__ZN11CheerpXBase13createPromiseEv(L$poptgepsqueezed37);
		__ZN11CheerpXBase4initEPFvPN6client6ObjectEEPFvRKNS0_6StringEE(L$poptgep14$poptgep$poptgepsqueezed,L$poptgepsqueezed37.a1,L$poptgepsqueezed37.a2);
		L$poptgep14$poptgep$poptgepsqueezed=L$poptgepsqueezed37.a0;
		tmp2.a7=L$poptgep14$poptgep$poptgepsqueezed;
		L$poptgepsqueezed37=tmp2.a10;
		L$poptgepsqueezed37.a0=L$poptgep14$poptgep$poptgepsqueezed;
		tmp2.i13=1;
		tmp2=new Uint8Array(1);
		tmp2[0]=0;
		L$poptgepsqueezed37.a2=tmp2;
		L$poptgepsqueezed26=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		L$poptgepsqueezed26[0].a0=L$poptgepsqueezed37;
		L$poptgepsqueezed26[0].a1.a0=tmp1;
		L$poptgepsqueezed26[0].a1.a0o=0;
		L$poptgepsqueezed26[0].a2=tmp2;
		tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,L$poptgepsqueezed26[0]);
		L$poptgep14$poptgep$poptgepsqueezed.then(tmp1);
	}
	return tmp3;
}
function __ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_$presume(Larg0,Marg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0,tmp4=0,L$poptgepsqueezed46=null,L$poptgepsqueezed47=null,L$poptgepsqueezed34=null,tmp8=null,tmp9=null;
	tmp4=Larg0[Marg0].i13|0;
	L$poptgepsqueezed46=Larg0[Marg0].a11;
	a:{
		if(tmp4<<30>-1073741824){
			L$poptgepsqueezed47=Larg0[Marg0].a10;
			if((tmp4&3)===0){
				L$poptgepsqueezed46=Larg0[Marg0].a12.a0;
				tmp4=Larg0[Marg0].a12.a0o|0;
				L$poptgepsqueezed46=L$poptgepsqueezed46[tmp4].a[L$poptgepsqueezed46[tmp4].o- -1];
				L$poptgepsqueezed46=L$poptgepsqueezed46.a1.a1;
				tmp9=Larg0[Marg0].a12.a0;
				tmp4=Larg0[Marg0].a12.a0o|0;
				if(tmp9!==nullArray||tmp4!==0)tmp9[tmp4].a1(tmp9,tmp4);
				tmp9=Larg0[Marg0].a6;
				tmp9=Larg0[Marg0].a4;
				Larg0[Marg0].a3[0]=L$poptgepsqueezed46;
				tmp0={i0:0,i1:0,a2:nullArray};
				tmp8={i0:0,i1:0,a2:nullArray};
				L$poptgepsqueezed34=tmp9.a44;
				tmp1=L$poptgepsqueezed34.a1;
				tmp4=L$poptgepsqueezed34.a1o|0;
				tmp2=L$poptgepsqueezed34.a2.a0;
				tmp3=L$poptgepsqueezed34.a2.a0o|0;
				if(tmp4<tmp3){
					__ZNSsC2B7v160000IDnEEPKc(tmp0,_$pstr$p79$p147,0);
					__ZNSsC2B7v160000IDnEEPKc(tmp8,_$pstr$p6,0);
					__ZNSsC2ERKSs(tmp1[tmp4],tmp0);
					tmp1[tmp4].a3=L$poptgepsqueezed46;
					__ZNSsC2ERKSs(tmp1[tmp4].a4,tmp8);
					L$poptgepsqueezed34.a1=tmp1;
					L$poptgepsqueezed34.a1o=tmp4+1|0;
					tmp9=Larg0[Marg0].a4;
				}else __ZNSt6vectorIN7CheerpX5Linux10MountPointESaIS2_EE24__emplace_back_slow_pathIJRA4_KcRPNS0_6DeviceERA2_S6_EEEvDpOT_(L$poptgepsqueezed34,Larg0[Marg0].a3,0);
				L$poptgepsqueezed34=Larg0[Marg0].a9;
				__ZN11CheerpXBase13createPromiseEv(L$poptgepsqueezed34);
				__ZN11CheerpXBase4initEPFvPN6client6ObjectEEPFvRKNS0_6StringEE(tmp9,L$poptgepsqueezed34.a1,L$poptgepsqueezed34.a2);
				L$poptgepsqueezed46=L$poptgepsqueezed34.a0;
				Larg0[Marg0].a7=L$poptgepsqueezed46;
				L$poptgepsqueezed47.a0=L$poptgepsqueezed46;
				Larg0[Marg0].i13=1;
				L$poptgepsqueezed34=new Uint8Array(1);
				L$poptgepsqueezed34[0]=0;
				L$poptgepsqueezed47.a2=L$poptgepsqueezed34;
				tmp8=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
				tmp8[0].a0=L$poptgepsqueezed47;
				tmp8[0].a1.a0=Larg0;
				tmp8[0].a1.a0o=Marg0;
				tmp8[0].a2=L$poptgepsqueezed34;
				L$poptgepsqueezed34=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp8[0]);
				L$poptgepsqueezed46.then(L$poptgepsqueezed34);
				break a;
			}
			Larg0[Marg0].a8=L$poptgepsqueezed47.a1;
			L$poptgepsqueezed47=L$poptgepsqueezed47.a2;
			if(L$poptgepsqueezed47!==nullArray||0!==0)L$poptgepsqueezed47[0]=1;
			L$poptgepsqueezed47=Larg0[Marg0].a5;
			if(L$poptgepsqueezed47!==null){
				L$poptgepsqueezed46.a0=L$poptgepsqueezed47;
				Larg0[Marg0].i13=2;
				L$poptgepsqueezed34=new Uint8Array(1);
				L$poptgepsqueezed34[0]=0;
				L$poptgepsqueezed46.a2=L$poptgepsqueezed34;
				tmp8=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
				tmp8[0].a0=L$poptgepsqueezed46;
				tmp8[0].a1.a0=Larg0;
				tmp8[0].a1.a0o=Marg0;
				tmp8[0].a2=L$poptgepsqueezed34;
				L$poptgepsqueezed34=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client16NetworkInterfaceEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp8[0]);
				L$poptgepsqueezed47.then(L$poptgepsqueezed34);
				break a;
			}
		}else{
			Larg0[Marg0].a4.a47=L$poptgepsqueezed46.a1;
			L$poptgepsqueezed46=L$poptgepsqueezed46.a2;
			if(L$poptgepsqueezed46!==nullArray||0!==0)L$poptgepsqueezed46[0]=1;
		}
		Larg0[Marg0].a2.a0.call(null,Larg0[Marg0].a8);
	}
}
function __ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	tmp0=Larg0.i13|0;
	if(tmp0<<30>-1073741824){
		if((tmp0&3)!==0){
			tmp1=Larg0.a10.a2;
			if(tmp1!==nullArray||0!==0)tmp1[0]=1;
		}else{
			tmp1=Larg0.a12.a0;
			tmp0=Larg0.a12.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
			tmp1=Larg0.a6;
		}
	}else{
		tmp1=Larg0.a11.a2;
		if(tmp1!==nullArray||0!==0)tmp1[0]=1;
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRKZN7CheerpX5Linux6createEPNS4_14LinuxOptionalsEE3$_0PSB_PNS5_IPNS4_16NetworkInterfaceEEEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSP_EEEvPT_DpT0_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZNSt6vectorIN7CheerpX5Linux10MountPointESaIS2_EE24__emplace_back_slow_pathIJRA4_KcRPNS0_6DeviceERA2_S6_EEEvDpOT_(Larg0,Larg1,Marg1){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=null,tmp4=null,L$poptgepsqueezed9=null,tmp6=0,L$poptgepsqueezed14=null,tmp8=0;
	tmp0={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp0={a0:null}}};
	L$poptgepsqueezed9=Larg0.a1;
	tmp6=Larg0.a1o|0;
	L$poptgepsqueezed14=Larg0.a0;
	tmp8=Larg0.a0o|0;
	tmp8=(__imul(tmp8,28));
	tmp6=((__imul(tmp6,28))-tmp8|0)/28|0;
	tmp1=tmp6+1|0;
	if(tmp1>>>0>153391689)_abort();
	;
	L$poptgepsqueezed14=Larg0.a2;
	L$poptgepsqueezed9=L$poptgepsqueezed14.a0;
	tmp2=L$poptgepsqueezed14.a0o|0;
	tmp8=((__imul(tmp2,28))-tmp8|0)/28|0;
	if(tmp8>>>0<76695844){
		tmp8<<=1;
		tmp8=tmp8>>>0>tmp1>>>0?tmp8|0:tmp1|0;
	}else{
		tmp8=153391689;
	}
	L$poptgepsqueezed9=tmp0.a3;
	L$poptgepsqueezed9.a1.a0=L$poptgepsqueezed14;
	if((tmp8|0)!==0)L$poptgepsqueezed14=createArray_struct$p_ZN7CheerpX5Linux10MountPointE((__imul(tmp8,28)|0)/28|0);
	else{
		L$poptgepsqueezed14=nullArray;
	}
	tmp0.a0=L$poptgepsqueezed14[0];
	tmp0.a2=L$poptgepsqueezed14;
	tmp0.a2o=0+tmp6|0;
	tmp0.a1=L$poptgepsqueezed14;
	tmp0.a1o=0+tmp6|0;
	L$poptgepsqueezed9.a0=L$poptgepsqueezed14;
	L$poptgepsqueezed9.a0o=0+tmp8|0;
	L$poptgepsqueezed9={i0:0,i1:0,a2:nullArray};
	tmp3={i0:0,i1:0,a2:nullArray};
	__ZNSsC2B7v160000IDnEEPKc(L$poptgepsqueezed9,_$pstr$p79$p147,0);
	tmp4=Larg1[Marg1];
	__ZNSsC2B7v160000IDnEEPKc(tmp3,_$pstr$p6,0);
	__ZNSsC2ERKSs(L$poptgepsqueezed14[tmp6],L$poptgepsqueezed9);
	L$poptgepsqueezed14[tmp6].a3=tmp4;
	__ZNSsC2ERKSs(L$poptgepsqueezed14[tmp6].a4,tmp3);
	L$poptgepsqueezed9=tmp0.a2;
	tmp8=tmp0.a2o|0;
	tmp0.a2=L$poptgepsqueezed9;
	tmp0.a2o=tmp8+1|0;
	__ZNSt6vectorIN7CheerpX5Linux10MountPointESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,tmp0);
}
function __ZNSt6vectorIN7CheerpX5Linux10MountPointESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=0,Lgeptoindex4=0,tmp5=null,tmp6=null,tmp7=null,Lgeptoindex=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,tmp11=null,tmp12=null;
	tmp6=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp7=Larg0.a1;
	tmp1=Larg0.a1o|0;
	tmp2=Larg1.a1;
	tmp3=Larg1.a1o|0;
	if(tmp7===tmp6&&tmp1===tmp0){
		Lgeptoindex=0;
	}else{
		Lgeptoindexphi3=0;
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindex=Lgeptoindexphi-1|0;
			Lgeptoindex4=Lgeptoindexphi3-1|0;
			tmp11=tmp2[tmp3+Lgeptoindex|0];
			tmp12=tmp7[tmp1+Lgeptoindex4|0];
			tmp11.i0=tmp12.i0|0;
			tmp11.i1=tmp12.i1|0;
			tmp12=tmp12.a2;
			tmp11.a2=tmp12;
			tmp11=tmp7[tmp1+Lgeptoindex4|0];
			tmp11.i0=0;
			tmp11.i1=0;
			tmp11.a2=nullArray;
			tmp2[(tmp3+Lgeptoindexphi|0)+ -1|0].a3=tmp7[(tmp1+Lgeptoindexphi3|0)+ -1|0].a3;
			tmp11=tmp7[(tmp1+Lgeptoindexphi3|0)+ -1|0].a4;
			tmp12=tmp2[(tmp3+Lgeptoindexphi|0)+ -1|0].a4;
			tmp12.i0=tmp11.i0|0;
			tmp12.i1=tmp11.i1|0;
			tmp5=tmp11.a2;
			tmp12.a2=tmp5;
			tmp11.i0=0;
			tmp11.i1=0;
			tmp11.a2=nullArray;
			if(tmp7!==tmp6||(tmp1+Lgeptoindex4|0)!==tmp0){
				Lgeptoindexphi=Lgeptoindex;
				Lgeptoindexphi3=Lgeptoindex4;
				continue;
			}
			break;
		}
	}
	Larg1.a1=tmp2;
	Larg1.a1o=tmp3+Lgeptoindex|0;
	tmp6=Larg0.a0;
	Lgeptoindexphi=Larg0.a0o|0;
	Larg0.a0=tmp2;
	Larg0.a0o=tmp3+Lgeptoindex|0;
	Larg1.a1=tmp6;
	Larg1.a1o=Lgeptoindexphi;
	tmp6=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	tmp7=Larg1.a2;
	Lgeptoindexphi3=Larg1.a2o|0;
	Larg0.a1=tmp7;
	Larg0.a1o=Lgeptoindexphi3;
	Larg1.a2=tmp6;
	Larg1.a2o=Lgeptoindexphi;
	tmp6=Larg0.a2.a0;
	Lgeptoindexphi=Larg0.a2.a0o|0;
	tmp7=Larg1.a3.a0;
	Lgeptoindexphi3=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp7;
	Larg0.a2.a0o=Lgeptoindexphi3;
	Larg1.a3.a0=tmp6;
	Larg1.a3.a0o=Lgeptoindexphi;
	tmp6=Larg1.a1;
	Lgeptoindexphi=Larg1.a1o|0;
	Larg1.a0=tmp6[Lgeptoindexphi];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client16NetworkInterfaceEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a2;
	if((tmp1[0]&255)===0){
		tmp1=Larg0.a0;
		tmp1.a1=Larg1;
		tmp1.a2=nullArray;
		tmp1=Larg0.a1.a0;
		tmp0=Larg0.a1.a0o|0;
		tmp1[tmp0].a0(tmp1,tmp0);
	}
}
function __ZN7CheerpX5LinuxC2Ev(Larg0){
	var tmp0=null,L$poptgep$poptgep13$poptgepsqueezed=null;
	__ZN11CheerpXBaseC2Ev(Larg0);
	Larg0.a0=__ZTVN7CheerpX5LinuxE;
	Larg0.a27=null;
	Larg0.a28=new Array();
	Larg0.a29=null;
	Larg0.a30=null;
	Larg0.a31=null;
	Larg0.a32=null;
	Larg0.a33=null;
	Larg0.a34=null;
	Larg0.a35=null;
	Larg0.a36=null;
	Larg0.a37=null;
	Larg0.a38=null;
	L$poptgep$poptgep13$poptgepsqueezed=Larg0.a39;
	L$poptgep$poptgep13$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0o=0;
	Larg0.a40=null;
	L$poptgep$poptgep13$poptgepsqueezed=Larg0.a41;
	L$poptgep$poptgep13$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a1.i0=0;
	L$poptgep$poptgep13$poptgepsqueezed.a2=null;
	L$poptgep$poptgep13$poptgepsqueezed=L$poptgep$poptgep13$poptgepsqueezed.a3;
	L$poptgep$poptgep13$poptgepsqueezed.a0=null;
	L$poptgep$poptgep13$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a2=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a2o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a3.a0=null;
	L$poptgep$poptgep13$poptgepsqueezed.i4=0;
	L$poptgep$poptgep13$poptgepsqueezed.i5=0;
	Larg0.i42=0;
	L$poptgep$poptgep13$poptgepsqueezed=Larg0.a43;
	tmp0=L$poptgep$poptgep13$poptgepsqueezed.a1;
	tmp0.a0=null;
	L$poptgep$poptgep13$poptgepsqueezed.i2=0;
	L$poptgep$poptgep13$poptgepsqueezed.a0=tmp0;
	L$poptgep$poptgep13$poptgepsqueezed=Larg0.a44;
	L$poptgep$poptgep13$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed=Larg0.a45;
	L$poptgep$poptgep13$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a1=null;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0=null;
	L$poptgep$poptgep13$poptgepsqueezed=Larg0.a46;
	L$poptgep$poptgep13$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a2=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a2o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a3.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a3.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed.i4=0;
	L$poptgep$poptgep13$poptgepsqueezed.i5=0;
	L$poptgep$poptgep13$poptgepsqueezed.i6=0;
	L$poptgep$poptgep13$poptgepsqueezed=L$poptgep$poptgep13$poptgepsqueezed.a7;
	L$poptgep$poptgep13$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a1.i0=0;
	L$poptgep$poptgep13$poptgepsqueezed.a2=null;
	Larg0.a47=null;
	L$poptgep$poptgep13$poptgepsqueezed=Larg0.a48;
	L$poptgep$poptgep13$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed=Larg0.a49;
	L$poptgep$poptgep13$poptgepsqueezed.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a1=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a1o=0;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0=nullArray;
	L$poptgep$poptgep13$poptgepsqueezed.a2.a0o=0;
	L$poptgep$poptgep13$poptgepsqueezed=[{a0:null}];
	L$poptgep$poptgep13$poptgepsqueezed[0].a0=Larg0;
	L$poptgep$poptgep13$poptgepsqueezed=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5LinuxC1EvE3$_0JPN6client12MessageEventIPNS6_6ObjectEEEEEEvPT_DpT0_,L$poptgep$poptgep13$poptgepsqueezed[0]);
	Larg0.a2=L$poptgep$poptgep13$poptgepsqueezed;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5LinuxC1EvE3$_0JPN6client12MessageEventIPNS6_6ObjectEEEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a0;
	__ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE(tmp0,Larg1.data);
}
function __ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE(Larg0,Larg1){
	var LmergedArray=null,L$poptgepsqueezed147=null,L$poptgepsqueezed139=null,Lmergedload2=0,Lgeptoindexphi3=0,Lgeptoindex14=0,tmp6=null,L$poptgepsqueezed148=null,tmp8=null,Lgeptoindexphi=0,tmp10=null,Lgeptoindexphi7=0;
	LmergedArray=new Int32Array(3);
	L$poptgepsqueezed147=[null];
	a:switch((Larg1.type)|0){
		case 19:
		case 66:
		case 70:
		case 23:
		case 54:
		case 22:
		case 61:
		case 63:
		case 17:
		case 68:
		case 65:
		case 64:
		__ZN7CheerpX5Linux12MessageQueue4pushEPN6client11CoreMessageE(Larg0.a46,Larg1);
		break a;
		case 67:
		L$poptgepsqueezed139=__ZN11CheerpXBase13getDeviceByIdEj(Larg1.fd);
		if(L$poptgepsqueezed139!==null){
			if(((Larg1.slices.length)|0)===1){
				Lmergedload2=Larg1.replyType;
				LmergedArray[0]=Lmergedload2;
				Lgeptoindexphi3=Larg1.tid;
				LmergedArray[1]=Lgeptoindexphi3;
				Lgeptoindex14=Larg1.fileOffset;
				LmergedArray[2]=Lgeptoindex14;
				tmp6=Larg1.slices[0];
				L$poptgepsqueezed147[0]=tmp6;
				L$poptgepsqueezed148=L$poptgepsqueezed139.a8;
				tmp8=L$poptgepsqueezed148.a1;
				Lgeptoindexphi=L$poptgepsqueezed148.a1o|0;
				tmp10=L$poptgepsqueezed148.a2.a0;
				Lgeptoindexphi7=L$poptgepsqueezed148.a2.a0o|0;
				if(Lgeptoindexphi<Lgeptoindexphi7){
					tmp8[Lgeptoindexphi].i0=Lmergedload2;
					tmp8[Lgeptoindexphi].i1=Lgeptoindexphi3;
					tmp8[Lgeptoindexphi].i2=Lgeptoindex14;
					tmp8[Lgeptoindexphi].a3=tmp6;
					L$poptgepsqueezed148.a1=tmp8;
					L$poptgepsqueezed148.a1o=Lgeptoindexphi+1|0;
				}else __ZNSt6vectorIN7CheerpX13OverlayDevice2OpESaIS2_EE24__emplace_back_slow_pathIJ12CORE_MESSAGEjjPN6client10ChunkSliceEEEEvDpOT_(L$poptgepsqueezed148,LmergedArray,0,LmergedArray,1,LmergedArray,2,L$poptgepsqueezed147,0);
				Lmergedload2=Larg1.fileOffset;
				LmergedArray[0]=Lmergedload2;
				L$poptgepsqueezed147=L$poptgepsqueezed139.a9;
				tmp6=L$poptgepsqueezed147.a1;
				Lgeptoindexphi3=L$poptgepsqueezed147.a1o|0;
				L$poptgepsqueezed148=L$poptgepsqueezed147.a2.a0;
				Lgeptoindex14=L$poptgepsqueezed147.a2.a0o|0;
				if(Lgeptoindexphi3<Lgeptoindex14){
					tmp6[Lgeptoindexphi3]=Lmergedload2;
					L$poptgepsqueezed147.a1=tmp6;
					L$poptgepsqueezed147.a1o=Lgeptoindexphi3+1|0;
				}else __ZNSt6vectorIjSaIjEE24__emplace_back_slow_pathIJjEEEvDpOT_(L$poptgepsqueezed147,LmergedArray,0);
				Lmergedload2=L$poptgepsqueezed139.i11|0;
				if((Lmergedload2&255)===0)break a;
				LmergedArray=__ZN7CheerpX5Linux6eventsE[2];
				if(LmergedArray!==null){
					L$poptgepsqueezed147="wait";
					__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(LmergedArray,L$poptgepsqueezed147);
					Lmergedload2=L$poptgepsqueezed139.i11|0;
				}
				L$poptgepsqueezed139.i11=Lmergedload2&65280;
				LmergedArray=L$poptgepsqueezed139.a7;
				LmergedArray.i1=65536;
				L$poptgepsqueezed147=LmergedArray.a0;
				Lmergedload2=LmergedArray.a0o|0;
				LmergedArray.a0=nullArray;
				LmergedArray.a0o=0;
				LmergedArray.a2=null;
				L$poptgepsqueezed147[Lmergedload2].a0(L$poptgepsqueezed147,Lmergedload2);
				break a;
			}
			___assert_fail(_$pstr$p17$p149,0,_$pstr$p15$p124,0,275,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
			;
		}
		___assert_fail(_$pstr$p16$p148,0,_$pstr$p15$p124,0,274,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
		;
		case 82:
		L$poptgepsqueezed139=__ZN11CheerpXBase13getDeviceByIdEj(Larg1.fd);
		if(L$poptgepsqueezed139!==null){
			Lmergedload2=Larg1.fileOffset;
			LmergedArray[0]=Lmergedload2;
			tmp6=Larg1.slices[0];
			L$poptgepsqueezed147[0]=tmp6;
			L$poptgepsqueezed148=L$poptgepsqueezed139.a10;
			tmp8=L$poptgepsqueezed148.a0;
			Lgeptoindexphi3=L$poptgepsqueezed148.a0o|0;
			tmp10=L$poptgepsqueezed148.a1;
			Lgeptoindex14=L$poptgepsqueezed148.a1o|0;
			{
				if(tmp8!==tmp10||Lgeptoindexphi3!==Lgeptoindex14){
					Lgeptoindexphi=0;
					while(1){
						if((tmp8[Lgeptoindexphi3+Lgeptoindexphi|0].i2|0)===(Lmergedload2|0)){
							Lmergedload2=tmp8[Lgeptoindexphi3+Lgeptoindexphi|0].a3.bufOffset;
							if((Lmergedload2|0)===((tmp6.bufOffset)|0)){
								Lmergedload2=tmp8[Lgeptoindexphi3+Lgeptoindexphi|0].a3.len;
								if((Lmergedload2|0)===((tmp6.len)|0))break a;
								___assert_fail(_$pstr$p20$p154,0,_$pstr$p15$p124,0,305,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
								;
							}
							___assert_fail(_$pstr$p19$p153,0,_$pstr$p15$p124,0,304,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
							;
						}
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if(tmp8!==tmp10||(Lgeptoindexphi3+Lgeptoindexphi|0)!==Lgeptoindex14)continue;
						break;
					}
				}
				if(((Larg1.slices.length)|0)!==1)___assert_fail(_$pstr$p17$p149,0,_$pstr$p15$p124,0,309,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
				;
				Lgeptoindexphi3=Larg1.replyType;
				LmergedArray[1]=Lgeptoindexphi3;
				Lgeptoindex14=Larg1.tid;
				LmergedArray[2]=Lgeptoindex14;
				tmp8=L$poptgepsqueezed148.a1;
				Lgeptoindexphi=L$poptgepsqueezed148.a1o|0;
				tmp10=L$poptgepsqueezed148.a2.a0;
				Lgeptoindexphi7=L$poptgepsqueezed148.a2.a0o|0;
				if(Lgeptoindexphi<Lgeptoindexphi7){
					tmp8[Lgeptoindexphi].i0=Lgeptoindexphi3;
					tmp8[Lgeptoindexphi].i1=Lgeptoindex14;
					tmp8[Lgeptoindexphi].i2=Lmergedload2;
					tmp8[Lgeptoindexphi].a3=tmp6;
					L$poptgepsqueezed148.a1=tmp8;
					L$poptgepsqueezed148.a1o=Lgeptoindexphi+1|0;
				}else __ZNSt6vectorIN7CheerpX13OverlayDevice2OpESaIS2_EE24__emplace_back_slow_pathIJ12CORE_MESSAGEjRjRPN6client10ChunkSliceEEEEvDpOT_(L$poptgepsqueezed148,LmergedArray,1,LmergedArray,2,LmergedArray,0,L$poptgepsqueezed147,0);
				Lmergedload2=L$poptgepsqueezed139.i11|0;
				if((Lmergedload2&255)!==0){
					tmp6=__ZN7CheerpX5Linux6eventsE[2];
					if(tmp6!==null){
						L$poptgepsqueezed148="wait";
						__ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(tmp6,L$poptgepsqueezed148);
						Lmergedload2=L$poptgepsqueezed139.i11|0;
					}
					L$poptgepsqueezed139.i11=Lmergedload2&65280;
					L$poptgepsqueezed139=L$poptgepsqueezed139.a7;
					L$poptgepsqueezed139.i1=65536;
					tmp6=L$poptgepsqueezed139.a0;
					Lmergedload2=L$poptgepsqueezed139.a0o|0;
					L$poptgepsqueezed139.a0=nullArray;
					L$poptgepsqueezed139.a0o=0;
					L$poptgepsqueezed139.a2=null;
					tmp6[Lmergedload2].a0(tmp6,Lmergedload2);
				}
			}
			break a;
		}
		___assert_fail(_$pstr$p16$p148,0,_$pstr$p15$p124,0,290,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
		;
		case 55:
		Lmergedload2=Larg1.index;
		if(Lmergedload2>>>0<(Larg0.a28.length)>>>0){
			LmergedArray=Larg0.a28;
			L$poptgepsqueezed147=LmergedArray[0+Lmergedload2|0];
			if(L$poptgepsqueezed147!==null){
				LmergedArray[0+Lmergedload2|0]=null;
				L$poptgepsqueezed147({status:(Larg1.value)});
				break a;
			}
			___assert_fail(_$pstr$p22$p156,0,_$pstr$p15$p124,0,325,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
			;
		}
		___assert_fail(_$pstr$p21$p155,0,_$pstr$p15$p124,0,323,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
		;
		case 34:
		LmergedArray=Larg0.a49;
		L$poptgepsqueezed147=LmergedArray.a0;
		Lgeptoindex14=LmergedArray.a0o|0;
		L$poptgepsqueezed139=LmergedArray.a1;
		Lmergedload2=LmergedArray.a1o|0;
		if(L$poptgepsqueezed147!==L$poptgepsqueezed139||Lgeptoindex14!==Lmergedload2){
			Lgeptoindexphi3=0;
			while(1){
				Lmergedload2=L$poptgepsqueezed147[Lgeptoindex14+Lgeptoindexphi3|0].i0|0;
				if((Lmergedload2|0)===((Larg1.tid)|0)){
					L$poptgepsqueezed139=L$poptgepsqueezed147[Lgeptoindex14+Lgeptoindexphi3|0].a1;
					tmp6=LmergedArray.a0;
					Lmergedload2=LmergedArray.a0o|0;
					Lgeptoindexphi3=(__imul(Lgeptoindex14+Lgeptoindexphi3|0,8))-(__imul(Lmergedload2,8))>>3;
					Lgeptoindex14=Lgeptoindexphi3+1|0;
					L$poptgepsqueezed147=LmergedArray.a1;
					Lgeptoindexphi=LmergedArray.a1o|0;
					if(tmp6===L$poptgepsqueezed147&&(Lmergedload2+Lgeptoindex14|0)===Lgeptoindexphi){
						Lgeptoindexphi7=Lgeptoindexphi3;
					}else{
						Lgeptoindexphi7=Lgeptoindexphi3;
						while(1){
							tmp6[Lmergedload2+Lgeptoindexphi7|0].i0=tmp6[Lmergedload2+Lgeptoindex14|0].i0|0;
							tmp6[Lmergedload2+Lgeptoindexphi7|0].a1=tmp6[Lmergedload2+Lgeptoindex14|0].a1;
							Lgeptoindex14=Lgeptoindex14+1|0;
							Lgeptoindexphi7=Lgeptoindexphi7+1|0;
							if(tmp6!==L$poptgepsqueezed147||(Lmergedload2+Lgeptoindex14|0)!==Lgeptoindexphi)continue;
							break;
						}
					}
					LmergedArray.a1=tmp6;
					LmergedArray.a1o=(Lmergedload2+Lgeptoindexphi3|0)+((__imul(Lmergedload2+Lgeptoindexphi7|0,8))-(__imul(Lmergedload2+Lgeptoindexphi3|0,8))>>3)|0;
					tmp6=(Larg1.value);
					L$poptgepsqueezed147=L$poptgepsqueezed139.a1;
					L$poptgepsqueezed147.i0=256;
					L$poptgepsqueezed147.a1=tmp6;
					tmp6=L$poptgepsqueezed139.a0;
					Lmergedload2=L$poptgepsqueezed139.a0o|0;
					L$poptgepsqueezed139.a0=nullArray;
					L$poptgepsqueezed139.a0o=0;
					L$poptgepsqueezed139.a2=null;
					tmp6[Lmergedload2].a0(tmp6,Lmergedload2);
					break a;
				}
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				L$poptgepsqueezed139=LmergedArray.a1;
				Lmergedload2=LmergedArray.a1o|0;
				if(L$poptgepsqueezed147!==L$poptgepsqueezed139||(Lgeptoindex14+Lgeptoindexphi3|0)!==Lmergedload2)continue;
				break;
			}
		}
		___assert_fail(_$pstr$p61,0,_$pstr$p15$p124,0,349,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
		;
		case 53:
		LmergedArray=Larg1.arg1;
		Lmergedload2=Larg1.arg2;
		L$poptgepsqueezed147=Larg0.a27;
		if(L$poptgepsqueezed147!==null){
			__ZN11CXUIConsole13processBufferEPN6client10Uint8ArrayEjjj(L$poptgepsqueezed147,LmergedArray,LmergedArray.length,Lmergedload2);
			__ZN11CXUIConsole5flushEv(Larg0.a27);
			break a;
		}
		___assert_fail(_$pstr$p23$p157,0,_$pstr$p15$p124,0,356,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
		;
		case 29:
		Lmergedload2=Larg1.arg1;
		LmergedArray=Larg0.a27;
		if(LmergedArray!==null){
			LmergedArray=LmergedArray.a4;
			if(LmergedArray===null)break a;
			LmergedArray(Lmergedload2);
			break a;
		}
		___assert_fail(_$pstr$p23$p157,0,_$pstr$p15$p124,0,364,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
		;
		case 72:
		Lmergedload2=Larg1.width;
		Lmergedload2=__imul(Lmergedload2<<2,Larg1.height)|0;
		if((Lmergedload2|0)!==0){
			LmergedArray=Larg0.a32;
			LmergedArray.width=(+((Larg1.width)>>>0));
			LmergedArray=Larg0.a32;
			LmergedArray.height=(+((Larg1.height)>>>0));
			LmergedArray=HEAP8.buffer;
			Larg0.a30=new Uint8Array(LmergedArray,(+((Larg1.addr)>>>0)),(+(Lmergedload2>>>0)));
			Lmergedload2=Larg1.width;
			LmergedArray=new ImageData((+(Lmergedload2>>>0)),(+((Larg1.height)>>>0)));
			Larg0.a29=LmergedArray;
			LmergedArray=LmergedArray.data.buffer;
			Larg0.a31=new Uint8Array(LmergedArray);
			break a;
		}
		___assert_fail(_$pstr$p24$p158,0,_$pstr$p15$p124,0,371,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
		;
		case 74:
		Larg0.a30=null;
		Larg0.a29=null;
		Larg0.a31=null;
		break a;
		case 75:
		Lmergedload2=Larg0.a31.length;
		LmergedArray=Larg0.a30;
		L$poptgepsqueezed147=Larg0.a31;
		if((Lmergedload2|0)!==0){
			Lgeptoindexphi3=0;
			while(1){
				Lgeptoindex14=Lgeptoindexphi3+2|0;
				L$poptgepsqueezed147[0+Lgeptoindexphi3|0]=LmergedArray[0+Lgeptoindex14|0]|0;
				Lgeptoindexphi=Lgeptoindexphi3+1|0;
				L$poptgepsqueezed147[0+Lgeptoindexphi|0]=LmergedArray[0+Lgeptoindexphi|0]|0;
				L$poptgepsqueezed147[0+Lgeptoindex14|0]=LmergedArray[0+Lgeptoindexphi3|0]|0;
				L$poptgepsqueezed147[0+(Lgeptoindexphi3+3|0)|0]=255;
				Lgeptoindexphi3=Lgeptoindexphi3+4|0;
				if(Lgeptoindexphi3>>>0<Lmergedload2>>>0)continue;
				break;
			}
		}
		Larg0.a33.putImageData(Larg0.a29,0,0);
		break a;
		case 77:
		Lmergedload2=Larg1.pid;
		LmergedArray=Larg0.a43.a1;
		L$poptgepsqueezed147=LmergedArray.a0;
		if(L$poptgepsqueezed147!==null){
			L$poptgepsqueezed139=L$poptgepsqueezed147;
			L$poptgepsqueezed147=LmergedArray;
			while(1){
				if(L$poptgepsqueezed139.a4.i0>>>0<Lmergedload2>>>0){
					L$poptgepsqueezed139=L$poptgepsqueezed139.a1;
				}else{
					L$poptgepsqueezed147=L$poptgepsqueezed139;
					L$poptgepsqueezed139=L$poptgepsqueezed139.a0;
				}
				if(L$poptgepsqueezed139!==null){
					L$poptgepsqueezed139=L$poptgepsqueezed139;
					continue;
				}
				break;
			}
			if(L$poptgepsqueezed147!==LmergedArray){
				LmergedArray=L$poptgepsqueezed147.a4;
				if(Lmergedload2>>>0>=LmergedArray.i0>>>0){
					LmergedArray=LmergedArray.a1;
					Lmergedload2=Larg1.value;
					LmergedArray=LmergedArray.a1[Lmergedload2];
					L$poptgepsqueezed147=undefined;
					if(LmergedArray===null)break a;
					if(LmergedArray===L$poptgepsqueezed147)break a;
					LmergedArray();
					break a;
				}
			}
		}
		___assert_fail(_$pstr$p25$p159,0,_$pstr$p15$p124,0,410,___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE,0);
		;
		case 88:
		LmergedArray={a0:null};
		__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_(LmergedArray,Larg0,Larg1);
		break a;
		case 89:
		Lmergedload2=Larg1.localPort;
		Larg1.tid;
		LmergedArray=__ZL22uint32ToClientStringIPj(Larg1.addr);
		tmp6=Larg1.arg1;
		L$poptgepsqueezed147=new Object();
		L$poptgepsqueezed147.localPort=Lmergedload2;
		LmergedArray=Larg0.a47.TCPServerSocket(LmergedArray,L$poptgepsqueezed147);
		if(LmergedArray===null)break a;
		L$poptgepsqueezed147=new constructor__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_$pFrame().a;
		L$poptgepsqueezed139=L$poptgepsqueezed147[0];
		L$poptgepsqueezed139.a0=__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_$presume;
		L$poptgepsqueezed139.a1=__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_$pdestroy;
		L$poptgepsqueezed139.i12=Lmergedload2;
		L$poptgepsqueezed139.a11=tmp6;
		L$poptgepsqueezed139.a10=LmergedArray;
		L$poptgepsqueezed139.a9=Larg0;
		tmp6=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
		LmergedArray.closed.catch(tmp6);
		tmp6=__ZZ9catchNullIN6client23TCPServerSocketOpenInfoEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
		tmp6=LmergedArray.opened.catch(tmp6);
		L$poptgepsqueezed139.a13=tmp6;
		L$poptgepsqueezed148=L$poptgepsqueezed139.a3;
		L$poptgepsqueezed148.a0=tmp6;
		L$poptgepsqueezed139.i7=0;
		L$poptgepsqueezed139=new Uint8Array(1);
		L$poptgepsqueezed139[0]=0;
		L$poptgepsqueezed148.a2=L$poptgepsqueezed139;
		LmergedArray=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		LmergedArray[0].a0=L$poptgepsqueezed148;
		LmergedArray[0].a1.a0=L$poptgepsqueezed147;
		LmergedArray[0].a1.a0o=0;
		LmergedArray[0].a2=L$poptgepsqueezed139;
		L$poptgepsqueezed148=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client23TCPServerSocketOpenInfoEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,LmergedArray[0]);
		tmp6.then(L$poptgepsqueezed148);
		break a;
		case 90:
		Lmergedload2=Larg1.localPort;
		tmp6=Larg1.arg1;
		LmergedArray="0.0.0.0";
		L$poptgepsqueezed147=new Object();
		L$poptgepsqueezed147.localPort=Lmergedload2;
		L$poptgepsqueezed147.localAddress=LmergedArray;
		LmergedArray=Larg0.a47.UDPSocket(L$poptgepsqueezed147);
		if(LmergedArray===null)break a;
		L$poptgepsqueezed147=new constructor__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS0_NS1_9UDPSocketENS1_11MessagePortEEE6ThreadPT_PT0_PT1_$pFrame().a;
		L$poptgepsqueezed139=L$poptgepsqueezed147[0];
		L$poptgepsqueezed139.a0=__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS0_NS1_9UDPSocketENS1_11MessagePortEEE6ThreadPT_PT0_PT1_$presume;
		L$poptgepsqueezed139.a1=__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS0_NS1_9UDPSocketENS1_11MessagePortEEE6ThreadPT_PT0_PT1_$pdestroy;
		L$poptgepsqueezed139.a10=tmp6;
		L$poptgepsqueezed139.a9=LmergedArray;
		tmp6=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
		LmergedArray.closed.catch(tmp6);
		tmp6=__ZZ9catchNullIN6client17UDPSocketOpenInfoEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
		tmp6=LmergedArray.opened.catch(tmp6);
		L$poptgepsqueezed139.a11=tmp6;
		L$poptgepsqueezed148=L$poptgepsqueezed139.a3;
		L$poptgepsqueezed148.a0=tmp6;
		L$poptgepsqueezed139.i6=0;
		L$poptgepsqueezed139=new Uint8Array(1);
		L$poptgepsqueezed139[0]=0;
		L$poptgepsqueezed148.a2=L$poptgepsqueezed139;
		LmergedArray=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		LmergedArray[0].a0=L$poptgepsqueezed148;
		LmergedArray[0].a1.a0=L$poptgepsqueezed147;
		LmergedArray[0].a1.a0o=0;
		LmergedArray[0].a2=L$poptgepsqueezed139;
		L$poptgepsqueezed148=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client17UDPSocketOpenInfoEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,LmergedArray[0]);
		tmp6.then(L$poptgepsqueezed148);
		break a;
		case 91:
		LmergedArray=Larg1.arg1;
		L$poptgepsqueezed147=Larg0.a40;
		if(L$poptgepsqueezed147===null)break a;
		L$poptgepsqueezed147(LmergedArray);
		break a;
		case 58:
		Lmergedload2=Larg1.eventType;
		LmergedArray=__ZN7CheerpX5Linux6eventsE[Lmergedload2];
		if(LmergedArray===null)break a;
		L$poptgepsqueezed148=Larg1.value;
		if((LmergedArray.i0|0)===1){
			if(((L$poptgepsqueezed148|0)|0)===1){
				L$poptgepsqueezed147="ready";
				L$poptgepsqueezed147=L$poptgepsqueezed147;
			}else{
				L$poptgepsqueezed147="wait";
				L$poptgepsqueezed147=L$poptgepsqueezed147;
			}
		}else L$poptgepsqueezed147=L$poptgepsqueezed148;
		LmergedArray=LmergedArray.a1;
		tmp6=LmergedArray.a0;
		Lmergedload2=LmergedArray.a0o|0;
		L$poptgepsqueezed139=LmergedArray.a1;
		Lgeptoindexphi3=LmergedArray.a1o|0;
		if(tmp6!==L$poptgepsqueezed139||Lmergedload2!==Lgeptoindexphi3){
			Lgeptoindex14=0;
			while(1){
				tmp6[Lmergedload2+Lgeptoindex14|0](L$poptgepsqueezed147);
				Lgeptoindex14=Lgeptoindex14+1|0;
				if(tmp6!==L$poptgepsqueezed139||(Lmergedload2+Lgeptoindex14|0)!==Lgeptoindexphi3)continue;
				break;
			}
		}
		break a;
		default:
		__ZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageE(Larg0,Larg1);
	}
}
function __ZN7CheerpX5Linux12MessageQueue4pushEPN6client11CoreMessageE(Larg0,Larg1){
	var tmp0=0,L$poptgep4$poptgep$poptgep5=null,tmp2=null,L$ppre2=0,L$ppre3_0=null,L$ppre3_1=0,L$ppre=0;
	tmp2=Larg0.a2;
	L$ppre2=Larg0.a2o|0;
	L$ppre3_0=Larg0.a1;
	L$ppre3_1=Larg0.a1o|0;
	L$ppre=(__imul(L$ppre3_1,4));
	L$ppre2=(__imul(L$ppre2,4));
	if((L$ppre2|0)===(L$ppre|0)){
		tmp0=0;
	}else{
		tmp0=(L$ppre2-L$ppre<<8)-1|0;
	}
	L$ppre=Larg0.i5|0;
	L$ppre2=L$ppre+(Larg0.i4|0)|0;
	if((tmp0|0)===(L$ppre2|0)){
		__ZNSt5dequeIPN6client11CoreMessageESaIS2_EE19__add_back_capacityEv(Larg0);
		L$ppre=Larg0.i5|0;
		L$ppre2=Larg0.i4|0;
		L$ppre3_0=Larg0.a1;
		L$ppre3_1=Larg0.a1o|0;
		L$ppre2=L$ppre2+L$ppre|0;
	}
	L$ppre3_0=L$ppre3_0[L$ppre3_1+(L$ppre2>>>10)|0];
	L$ppre3_0.d[L$ppre3_0.o+(L$ppre2&1023)|0]=Larg1;
	Larg0.i5=L$ppre+1|0;
	if((L$ppre|0)===0){
		L$ppre3_0=Larg0.a7;
		tmp2=L$ppre3_0.a0;
		L$ppre2=L$ppre3_0.a0o|0;
		if(tmp2!==nullArray||L$ppre2!==0){
			L$poptgep4$poptgep$poptgep5=L$ppre3_0.a1;
			L$poptgep4$poptgep$poptgep5.i0=256;
			L$poptgep4$poptgep$poptgep5.i1=0;
			L$ppre3_0.a0=nullArray;
			L$ppre3_0.a0o=0;
			L$ppre3_0.a2=null;
			tmp2[L$ppre2].a0(tmp2,L$ppre2);
		}
	}
}
function __ZNSt6vectorIN7CheerpX13OverlayDevice2OpESaIS2_EE24__emplace_back_slow_pathIJ12CORE_MESSAGEjjPN6client10ChunkSliceEEEEvDpOT_(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	var tmp0=null,tmp1=0,L$poptgepsqueezed10=null,tmp3=0,L$poptgepsqueezed15=null,tmp5=0,tmp6=0;
	tmp0={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp0={a0:null}}};
	L$poptgepsqueezed10=Larg0.a1;
	tmp3=Larg0.a1o|0;
	L$poptgepsqueezed15=Larg0.a0;
	tmp5=Larg0.a0o|0;
	tmp5=(__imul(tmp5,16));
	tmp3=(__imul(tmp3,16))-tmp5>>4;
	tmp6=tmp3+1|0;
	if(tmp6>>>0>268435455)_abort();
	;
	L$poptgepsqueezed15=Larg0.a2;
	L$poptgepsqueezed10=L$poptgepsqueezed15.a0;
	tmp1=L$poptgepsqueezed15.a0o|0;
	tmp5=(__imul(tmp1,16))-tmp5|0;
	if(tmp5>>>0<2147483632){
		tmp5>>>=3;
		tmp5=tmp5>>>0>tmp6>>>0?tmp5|0:tmp6|0;
	}else{
		tmp5=268435455;
	}
	L$poptgepsqueezed10=tmp0.a3;
	L$poptgepsqueezed10.a1.a0=L$poptgepsqueezed15;
	L$poptgepsqueezed15=createArray_struct$p_ZN7CheerpX13OverlayDevice2OpE((tmp5<<4)/16|0);
	tmp0.a0=L$poptgepsqueezed15[0];
	tmp0.a1=L$poptgepsqueezed15;
	tmp0.a1o=0+tmp3|0;
	L$poptgepsqueezed10.a0=L$poptgepsqueezed15;
	L$poptgepsqueezed10.a0o=0+tmp5|0;
	tmp5=Larg2[Marg2]|0;
	tmp6=Larg3[Marg3]|0;
	L$poptgepsqueezed10=Larg4[Marg4];
	L$poptgepsqueezed15[tmp3].i0=Larg1[Marg1]|0;
	L$poptgepsqueezed15[tmp3].i1=tmp5;
	L$poptgepsqueezed15[tmp3].i2=tmp6;
	L$poptgepsqueezed15[tmp3].a3=L$poptgepsqueezed10;
	tmp0.a2=L$poptgepsqueezed15;
	tmp0.a2o=(0+tmp3|0)+1|0;
	__ZNSt6vectorIN7CheerpX13OverlayDevice2OpESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,tmp0);
}
function __ZNSt6vectorIjSaIjEE24__emplace_back_slow_pathIJjEEEvDpOT_(Larg0,Larg1,Marg1){
	var tmp0=null,tmp1=0,tmp2=0,L$poptgepsqueezed7=null,tmp4=0,L$poptgepsqueezed12=null,tmp6=0;
	tmp0={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp0={a0:null}}};
	L$poptgepsqueezed7=Larg0.a1;
	tmp4=Larg0.a1o|0;
	L$poptgepsqueezed12=Larg0.a0;
	tmp6=Larg0.a0o|0;
	tmp6=(__imul(tmp6,4));
	tmp4=(__imul(tmp4,4))-tmp6>>2;
	tmp1=tmp4+1|0;
	if(tmp1>>>0>1073741823)_abort();
	;
	L$poptgepsqueezed12=Larg0.a2;
	L$poptgepsqueezed7=L$poptgepsqueezed12.a0;
	tmp2=L$poptgepsqueezed12.a0o|0;
	tmp6=(__imul(tmp2,4))-tmp6|0;
	if(tmp6>>>0<2147483644){
		tmp6>>>=1;
		tmp6=tmp6>>>0>tmp1>>>0?tmp6|0:tmp1|0;
	}else{
		tmp6=1073741823;
	}
	L$poptgepsqueezed7=tmp0.a3;
	L$poptgepsqueezed7.a1.a0=L$poptgepsqueezed12;
	if((tmp6|0)!==0)L$poptgepsqueezed12=new Int32Array((tmp6<<2)/4|0);
	else{
		L$poptgepsqueezed12=nullArray;
	}
	tmp0.a0=L$poptgepsqueezed12[0];
	tmp0.a1=L$poptgepsqueezed12;
	tmp0.a1o=0+tmp4|0;
	L$poptgepsqueezed7.a0=L$poptgepsqueezed12;
	L$poptgepsqueezed7.a0o=0+tmp6|0;
	L$poptgepsqueezed12[tmp4]=Larg1[Marg1]|0;
	tmp0.a2=L$poptgepsqueezed12;
	tmp0.a2o=(0+tmp4|0)+1|0;
	__ZNSt6vectorIjSaIjEE26__swap_out_circular_bufferERSt14__split_bufferIjRS0_E(Larg0,tmp0);
}
function __ZN7CheerpX5Linux14EventCallbacks13dispatchEventERKN6client4_AnyE(Larg0,Larg1){
	var L$poptgep$poptgep3$poptgepsqueezed=null,tmp1=null,tmp2=0,tmp3=null,tmp4=0,tmp5=null,Lgeptoindexphi=0;
	if((Larg0.i0|0)===1){
		if(((Larg1|0)|0)===1){
			tmp5="ready";
			tmp5=tmp5;
		}else{
			tmp5="wait";
			tmp5=tmp5;
		}
	}else tmp5=Larg1;
	L$poptgep$poptgep3$poptgepsqueezed=Larg0.a1;
	tmp1=L$poptgep$poptgep3$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep3$poptgepsqueezed.a0o|0;
	tmp3=L$poptgep$poptgep3$poptgepsqueezed.a1;
	tmp4=L$poptgep$poptgep3$poptgepsqueezed.a1o|0;
	if(tmp1!==tmp3||tmp2!==tmp4){
		Lgeptoindexphi=0;
		while(1){
			tmp1[tmp2+Lgeptoindexphi|0](tmp5);
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if(tmp1!==tmp3||(tmp2+Lgeptoindexphi|0)!==tmp4)continue;
			break;
		}
	}
}
function __ZNSt6vectorIN7CheerpX13OverlayDevice2OpESaIS2_EE24__emplace_back_slow_pathIJ12CORE_MESSAGEjRjRPN6client10ChunkSliceEEEEvDpOT_(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3,Larg4,Marg4){
	var tmp0=null,tmp1=0,L$poptgepsqueezed10=null,tmp3=0,L$poptgepsqueezed15=null,tmp5=0,tmp6=0;
	tmp0={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp0={a0:null}}};
	L$poptgepsqueezed10=Larg0.a1;
	tmp3=Larg0.a1o|0;
	L$poptgepsqueezed15=Larg0.a0;
	tmp5=Larg0.a0o|0;
	tmp5=(__imul(tmp5,16));
	tmp3=(__imul(tmp3,16))-tmp5>>4;
	tmp6=tmp3+1|0;
	if(tmp6>>>0>268435455)_abort();
	;
	L$poptgepsqueezed15=Larg0.a2;
	L$poptgepsqueezed10=L$poptgepsqueezed15.a0;
	tmp1=L$poptgepsqueezed15.a0o|0;
	tmp5=(__imul(tmp1,16))-tmp5|0;
	if(tmp5>>>0<2147483632){
		tmp5>>>=3;
		tmp5=tmp5>>>0>tmp6>>>0?tmp5|0:tmp6|0;
	}else{
		tmp5=268435455;
	}
	L$poptgepsqueezed10=tmp0.a3;
	L$poptgepsqueezed10.a1.a0=L$poptgepsqueezed15;
	L$poptgepsqueezed15=createArray_struct$p_ZN7CheerpX13OverlayDevice2OpE((tmp5<<4)/16|0);
	tmp0.a0=L$poptgepsqueezed15[0];
	tmp0.a1=L$poptgepsqueezed15;
	tmp0.a1o=0+tmp3|0;
	L$poptgepsqueezed10.a0=L$poptgepsqueezed15;
	L$poptgepsqueezed10.a0o=0+tmp5|0;
	tmp5=Larg2[Marg2]|0;
	tmp6=Larg3[Marg3]|0;
	L$poptgepsqueezed10=Larg4[Marg4];
	L$poptgepsqueezed15[tmp3].i0=Larg1[Marg1]|0;
	L$poptgepsqueezed15[tmp3].i1=tmp5;
	L$poptgepsqueezed15[tmp3].i2=tmp6;
	L$poptgepsqueezed15[tmp3].a3=L$poptgepsqueezed10;
	tmp0.a2=L$poptgepsqueezed15;
	tmp0.a2o=(0+tmp3|0)+1|0;
	__ZNSt6vectorIN7CheerpX13OverlayDevice2OpESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,tmp0);
}
function __ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,tmp4=null,tmp5=null,L$poptgepsqueezed16=null;
	tmp3=new constructor__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_$pFrame().a;
	tmp4=tmp3[0];
	tmp4.a0=__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_$presume;
	tmp4.a1=__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_$pdestroy;
	tmp4.a8=Larg2;
	tmp4.a7=Larg1;
	tmp5=tmp4.a2.a[tmp4.a2.o-1];
	Larg0.a0=tmp5;
	tmp0=Larg2.addr;
	Larg2.localPort;
	tmp1=Larg2.port;
	Larg2.tid;
	tmp4.a9=Larg2.arg1;
	tmp5=__ZL22uint32ToClientStringIPj(tmp0);
	tmp5=Larg1.a47.TCPSocket(tmp5,tmp1);
	tmp4.a10=tmp5;
	if(tmp5!==null){
		L$poptgepsqueezed16=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
		tmp5.closed.catch(L$poptgepsqueezed16);
		L$poptgepsqueezed16=__ZZ9catchNullIN6client17TCPSocketOpenInfoEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
		tmp2=tmp5.opened.catch(L$poptgepsqueezed16);
		tmp4.a11=tmp2;
		L$poptgepsqueezed16=tmp4.a3;
		L$poptgepsqueezed16.a0=tmp2;
		tmp4.i5=0;
		tmp4=new Uint8Array(1);
		tmp4[0]=0;
		L$poptgepsqueezed16.a2=tmp4;
		tmp5=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		tmp5[0].a0=L$poptgepsqueezed16;
		tmp5[0].a1.a0=tmp3;
		tmp5[0].a1.a0o=0;
		tmp5[0].a2=tmp4;
		L$poptgepsqueezed16=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client17TCPSocketOpenInfoEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp5[0]);
		tmp2.then(L$poptgepsqueezed16);
	}else{
		tmp3={type:88,tid:(Larg2.tid),arg0: -101};
		Larg1.a6.postMessage(tmp3);
	}
}
function __ZL22uint32ToClientStringIPj(Larg0){
	var tmp0=null;
	tmp0=String(Larg0&255);
	tmp0=tmp0.concat(".").concat(Larg0>>>8&255);
	tmp0=tmp0.concat(".").concat(Larg0>>>16&255);
	return tmp0.concat(".").concat(Larg0>>>24);
}
function __ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_$presume(Larg0,Marg0){
	var tmp0=0,L$poptgepsqueezed65=null,L$poptgepsqueezed66=null,tmp3=null,tmp4=null,tmp5=null,L$poptgepsqueezed48=null,tmp7=null;
	tmp0=Larg0[Marg0].i7|0;
	L$poptgepsqueezed65=Larg0[Marg0].a5;
	a:if(tmp0<<30>-1073741824){
		L$poptgepsqueezed66=Larg0[Marg0].a4;
		if((tmp0&3)!==0){
			tmp3=L$poptgepsqueezed66.a1;
			tmp4=L$poptgepsqueezed66.a2;
			if(tmp4!==nullArray||0!==0)tmp4[0]=1;
			tmp4=tmp3;
			if(tmp4.done){
				L$poptgepsqueezed66=Larg0[Marg0].a10.close();
				Larg0[Marg0].a16=L$poptgepsqueezed66;
				L$poptgepsqueezed65.a0=L$poptgepsqueezed66;
				Larg0[Marg0].i7=2;
				tmp3=new Uint8Array(1);
				tmp3[0]=0;
				L$poptgepsqueezed65.a2=tmp3;
				tmp4=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
				tmp4[0].a0=L$poptgepsqueezed65;
				tmp4[0].a1.a0=Larg0;
				tmp4[0].a1.a0o=Marg0;
				tmp4[0].a2=tmp3;
				tmp3=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp4[0]);
				L$poptgepsqueezed66.then(tmp3);
				break a;
			}
			L$poptgepsqueezed65=new constructor__ZZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_ENKUlSA_SC_SE_SF_E_clIS0_S6_NS1_25_ReadableStreamReadResultIPNS1_9TCPSocketEEEjEES8_SA_SC_SE_SF_$pFrame().a;
			tmp0=Larg0[Marg0].i12|0;
			tmp5=Larg0[Marg0].a10;
			L$poptgepsqueezed48=Larg0[Marg0].a9;
			tmp7=L$poptgepsqueezed65[0];
			tmp7.a0=__ZZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_ENKUlSA_SC_SE_SF_E_clIS0_S6_NS1_25_ReadableStreamReadResultIPNS1_9TCPSocketEEEjEES8_SA_SC_SE_SF_$presume;
			tmp7.a1=__ZZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_ENKUlSA_SC_SE_SF_E_clIS0_S6_NS1_25_ReadableStreamReadResultIPNS1_9TCPSocketEEEjEES8_SA_SC_SE_SF_$pdestroy;
			tmp7.i10=tmp0;
			tmp7.a9=tmp5;
			tmp7.a8=L$poptgepsqueezed48;
			tmp5=tmp7.a2.a[tmp7.a2.o-1];
			Larg0[Marg0].a6.a0=tmp5;
			tmp4=tmp4.value;
			tmp7.a11=tmp4;
			tmp5=__ZZ9catchNullIN6client17TCPSocketOpenInfoEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
			tmp5=tmp4.opened.catch(tmp5);
			tmp7.a12=tmp5;
			L$poptgepsqueezed48=tmp7.a3;
			L$poptgepsqueezed48.a0=tmp5;
			tmp7.i6=0;
			tmp7=new Uint8Array(1);
			tmp7[0]=0;
			L$poptgepsqueezed48.a2=tmp7;
			tmp4=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
			tmp4[0].a0=L$poptgepsqueezed48;
			tmp4[0].a1.a0=L$poptgepsqueezed65;
			tmp4[0].a1.a0o=0;
			tmp4[0].a2=tmp7;
			L$poptgepsqueezed48=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client17TCPSocketOpenInfoEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp4[0]);
			tmp5.then(L$poptgepsqueezed48);
		}else{
			L$poptgepsqueezed65=Larg0[Marg0].a3;
			tmp3=L$poptgepsqueezed65.a1;
			L$poptgepsqueezed65=L$poptgepsqueezed65.a2;
			if(L$poptgepsqueezed65!==nullArray||0!==0)L$poptgepsqueezed65[0]=1;
			if(tmp3===null)break a;
			L$poptgepsqueezed65=Larg0[Marg0].a11;
			tmp3=tmp3.readable.getReader();
			Larg0[Marg0].a14=tmp3;
			tmp4=[null];
			tmp4[0]=tmp3;
			tmp3=cheerpCreateClosureSplit(__ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS4_NS5_15TCPServerSocketENS5_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_EUlPNS5_12MessageEventIPNS5_10Uint8ArrayEEEE_JSO_EEEvSE_DpT0_,tmp4,0);
			L$poptgepsqueezed65.onmessage=tmp3;
		}
		Larg0[Marg0].a15=tmp3;
		L$poptgepsqueezed65=Larg0[Marg0].a14.read();
		L$poptgepsqueezed66.a2=nullArray;
		L$poptgepsqueezed66.a0=L$poptgepsqueezed65;
		Larg0[Marg0].i7=1;
		tmp3=new Uint8Array(1);
		tmp3[0]=0;
		L$poptgepsqueezed66.a2=tmp3;
		tmp4=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		tmp4[0].a0=L$poptgepsqueezed66;
		tmp4[0].a1.a0=Larg0;
		tmp4[0].a1.a0o=Marg0;
		tmp4[0].a2=tmp3;
		tmp3=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp4[0]);
		L$poptgepsqueezed65.then(tmp3);
	}else{
		L$poptgepsqueezed65=L$poptgepsqueezed65.a2;
		if(L$poptgepsqueezed65!==nullArray||0!==0)L$poptgepsqueezed65[0]=1;
		Larg0[Marg0].a11.onmessage=null;
	}
}
function __ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	tmp0=Larg0.i7|0;
	a:{
		if(tmp0<<30>-1073741824){
			if((tmp0&3)!==0){
				tmp1=Larg0.a4.a2;
				if(tmp1===nullArray&&0===0)break a;
			}else{
				tmp1=Larg0.a3.a2;
				if(tmp1===nullArray&&0===0)break a;
			}
		}else{
			tmp1=Larg0.a5.a2;
			if(tmp1===nullArray&&0===0)break a;
		}
		tmp1[0]=1;
	}
}
function __ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv(){
	return null;
}
function __ZZ9catchNullIN6client23TCPServerSocketOpenInfoEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv(){
	return null;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client23TCPServerSocketOpenInfoEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a2;
	if((tmp1[0]&255)===0){
		tmp1=Larg0.a0;
		tmp1.a1=Larg1;
		tmp1.a2=nullArray;
		tmp1=Larg0.a1.a0;
		tmp0=Larg0.a1.a0o|0;
		tmp1[tmp0].a0(tmp1,tmp0);
	}
}
function __ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS0_NS1_9UDPSocketENS1_11MessagePortEEE6ThreadPT_PT0_PT1_$presume(Larg0,Marg0){
	var tmp0=-0.,tmp1=0,L$poptgepsqueezed45=null,L$poptgepsqueezed46=null,tmp4=null,tmp5=null,tmp6=null,tmp7=0,tmp8=0,tmp9=null;
	tmp1=Larg0[Marg0].i6|0;
	L$poptgepsqueezed45=Larg0[Marg0].a5;
	a:if(tmp1<<30>-1073741824){
		L$poptgepsqueezed46=Larg0[Marg0].a4;
		b:{
			if((tmp1&3)!==0){
				tmp4=L$poptgepsqueezed46.a1;
				tmp5=L$poptgepsqueezed46.a2;
				if(tmp5!==nullArray||0!==0)tmp5[0]=1;
				if(tmp4!==null)if(!(tmp4.done)){
					L$poptgepsqueezed45=tmp4.value;
					tmp5=L$poptgepsqueezed45.data;
					tmp1=L$poptgepsqueezed45.remotePort;
					L$poptgepsqueezed45=L$poptgepsqueezed45.remoteAddress;
					tmp6=".";
					L$poptgepsqueezed45=L$poptgepsqueezed45.split(tmp6);
					if(((L$poptgepsqueezed45.length)|0)>0){
						tmp8=0;
						tmp7=0;
						while(1){
							tmp6=L$poptgepsqueezed45[0+tmp7|0];
							tmp0=+parseInt(tmp6);
							tmp8|=(~~tmp0<<(tmp7<<3));
							tmp7=tmp7+1|0;
							if((tmp7|0)<((L$poptgepsqueezed45.length)|0))continue;
							break;
						}
					}else{
						tmp8=0;
					}
					tmp9=Larg0[Marg0].a10;
					tmp5={data: tmp5, addr: tmp8, port:tmp1};
					L$poptgepsqueezed45=new Array();
					+L$poptgepsqueezed45.push(tmp5.data.buffer);
					tmp6=Larg0[Marg0].a8[0];
					Larg0[Marg0].a8[0]=tmp5;
					tmp9.postMessage(tmp5,L$poptgepsqueezed45);
					break b;
				}
				L$poptgepsqueezed46=Larg0[Marg0].a13;
				tmp4=Larg0[Marg0].a9;
				Larg0[Marg0].a12.releaseLock();
				L$poptgepsqueezed46.releaseLock();
				L$poptgepsqueezed46=tmp4.close();
				Larg0[Marg0].a15=L$poptgepsqueezed46;
				L$poptgepsqueezed45.a0=L$poptgepsqueezed46;
				Larg0[Marg0].i6=2;
				tmp4=new Uint8Array(1);
				tmp4[0]=0;
				L$poptgepsqueezed45.a2=tmp4;
				tmp5=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
				tmp5[0].a0=L$poptgepsqueezed45;
				tmp5[0].a1.a0=Larg0;
				tmp5[0].a1.a0o=Marg0;
				tmp5[0].a2=tmp4;
				tmp4=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp5[0]);
				L$poptgepsqueezed46.then(tmp4);
				break a;
			}
			L$poptgepsqueezed45=Larg0[Marg0].a3;
			tmp4=L$poptgepsqueezed45.a1;
			L$poptgepsqueezed45=L$poptgepsqueezed45.a2;
			if(L$poptgepsqueezed45!==nullArray||0!==0)L$poptgepsqueezed45[0]=1;
			if(tmp4===null)break a;
			tmp9=Larg0[Marg0].a10;
			tmp5=tmp4.readable.getReader();
			Larg0[Marg0].a12=tmp5;
			tmp4=tmp4.writable.getWriter();
			Larg0[Marg0].a13=tmp4;
			L$poptgepsqueezed45=[{a0:null,a1:null}];
			L$poptgepsqueezed45[0].a0=tmp4;
			L$poptgepsqueezed45[0].a1=tmp5;
			tmp5=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS4_NS5_9UDPSocketENS5_11MessagePortEEE6ThreadPT_PT0_PT1_EUlPNS5_12MessageEventIPNS5_13PacketMessageEEEE_JSN_EEEvSE_DpT0_,L$poptgepsqueezed45[0]);
			tmp9.onmessage=tmp5;
		}
		Larg0[Marg0].a14=tmp4;
		L$poptgepsqueezed45=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
		L$poptgepsqueezed45=Larg0[Marg0].a12.read().catch(L$poptgepsqueezed45);
		L$poptgepsqueezed46.a2=nullArray;
		L$poptgepsqueezed46.a0=L$poptgepsqueezed45;
		Larg0[Marg0].i6=1;
		tmp4=new Uint8Array(1);
		tmp4[0]=0;
		L$poptgepsqueezed46.a2=tmp4;
		tmp5=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		tmp5[0].a0=L$poptgepsqueezed46;
		tmp5[0].a1.a0=Larg0;
		tmp5[0].a1.a0o=Marg0;
		tmp5[0].a2=tmp4;
		tmp4=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp5[0]);
		L$poptgepsqueezed45.then(tmp4);
	}else{
		L$poptgepsqueezed45=L$poptgepsqueezed45.a2;
		if(L$poptgepsqueezed45!==nullArray||0!==0)L$poptgepsqueezed45[0]=1;
	}
}
function __ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS0_NS1_9UDPSocketENS1_11MessagePortEEE6ThreadPT_PT0_PT1_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	tmp0=Larg0.i6|0;
	a:{
		if(tmp0<<30>-1073741824){
			if((tmp0&3)!==0){
				tmp1=Larg0.a4.a2;
				if(tmp1===nullArray&&0===0)break a;
			}else{
				tmp1=Larg0.a3.a2;
				if(tmp1===nullArray&&0===0)break a;
			}
		}else{
			tmp1=Larg0.a5.a2;
			if(tmp1===nullArray&&0===0)break a;
		}
		tmp1[0]=1;
	}
}
function __ZZ9catchNullIN6client17UDPSocketOpenInfoEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv(){
	return null;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client17UDPSocketOpenInfoEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a2;
	if((tmp1[0]&255)===0){
		tmp1=Larg0.a0;
		tmp1.a1=Larg1;
		tmp1.a2=nullArray;
		tmp1=Larg0.a1.a0;
		tmp0=Larg0.a1.a0o|0;
		tmp1[tmp0].a0(tmp1,tmp0);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS4_NS5_9UDPSocketENS5_11MessagePortEEE6ThreadPT_PT0_PT1_EUlPNS5_12MessageEventIPNS5_13PacketMessageEEEE_JSN_EEEvSE_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp2=Larg1.data;
	if(tmp2!==null){
		tmp0=tmp2.data;
		tmp1=__ZL22uint32ToClientStringIPj(tmp2.addr);
		tmp2={data: tmp0, remoteAddress: tmp1, remotePort: (tmp2.port)};
		Larg0.a0.write(tmp2);
	}else{
		Larg0.a1.releaseLock();
		Larg0.a0.releaseLock();
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS4_NS5_15TCPServerSocketENS5_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_EUlPNS5_12MessageEventIPNS5_10Uint8ArrayEEEE_JSO_EEEvSE_DpT0_(Larg0,Marg0,Larg1){
	if(Larg1.data===null){
		Larg0[Marg0].cancel();
		Larg0[Marg0].releaseLock();
	}
}
function __ZZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_ENKUlSA_SC_SE_SF_E_clIS0_S6_NS1_25_ReadableStreamReadResultIPNS1_9TCPSocketEEEjEES8_SA_SC_SE_SF_$presume(Larg0,Marg0){
	var tmp0=-0.,tmp1=0,L$ppre13_1=0,L$poptgepsqueezed17=null,L$ppre13_0=null,L$poptgep$poptgep3$poptgepsqueezed=null,tmp6=null,tmp7=null,tmp8=0;
	L$ppre13_1=Larg0[Marg0].i6|0;
	L$poptgepsqueezed17=Larg0[Marg0].a5;
	a:{
		if(L$ppre13_1<<30>-1073741824){
			L$ppre13_0=Larg0[Marg0].a4;
			if((L$ppre13_1&3)!==0){
				L$poptgep$poptgep3$poptgepsqueezed=L$ppre13_0.a0;
				L$ppre13_1=L$ppre13_0.a0o|0;
				L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed[L$ppre13_1];
			}else{
				L$poptgep$poptgep3$poptgepsqueezed=Larg0[Marg0].a3;
				tmp6=L$poptgep$poptgep3$poptgepsqueezed.a1;
				Larg0[Marg0].a13=tmp6;
				L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed.a2;
				if(L$poptgep$poptgep3$poptgepsqueezed!==nullArray||0!==0)L$poptgep$poptgep3$poptgepsqueezed[0]=1;
				if(tmp6===null)___assert_fail(_$pstr$p80$p163,0,_$pstr$p15$p124,0,490,___func__$p_ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE,0);
				;
				L$poptgep$poptgep3$poptgepsqueezed=tmp6.remoteAddress;
				tmp7=".";
				L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed.split(tmp7);
				if(((L$poptgep$poptgep3$poptgepsqueezed.length)|0)>0){
					L$ppre13_1=0;
					tmp8=0;
					while(1){
						tmp7=L$poptgep$poptgep3$poptgepsqueezed[0+tmp8|0];
						tmp0=+parseInt(tmp7);
						L$ppre13_1|=(~~tmp0<<(tmp8<<3));
						tmp8=tmp8+1|0;
						if((tmp8|0)<((L$poptgep$poptgep3$poptgepsqueezed.length)|0))continue;
						break;
					}
				}else{
					L$ppre13_1=0;
				}
				tmp8=Larg0[Marg0].i10|0;
				L$poptgep$poptgep3$poptgepsqueezed=Larg0[Marg0].a8;
				tmp1=L$poptgep$poptgep3$poptgepsqueezed.i42|0;
				tmp6={type:83,tid:tmp1,addr:L$ppre13_1, port: (tmp6.remotePort), localPort: tmp8};
				__ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb(L$ppre13_0,L$poptgep$poptgep3$poptgepsqueezed,L$poptgep$poptgep3$poptgepsqueezed.i42|0,tmp6,0);
				L$poptgep$poptgep3$poptgepsqueezed=L$ppre13_0.a0;
				L$ppre13_1=L$ppre13_0.a0o|0;
				if(L$poptgep$poptgep3$poptgepsqueezed!==nullArray||L$ppre13_1!==0){
					if(L$poptgep$poptgep3$poptgepsqueezed[L$ppre13_1].a0!==null){
						Larg0[Marg0].i6=1;
						L$poptgepsqueezed17=L$poptgep$poptgep3$poptgepsqueezed[L$ppre13_1].a[L$poptgep$poptgep3$poptgepsqueezed[L$ppre13_1].o- -1];
						L$poptgepsqueezed17.a0=Larg0;
						L$poptgepsqueezed17.a0o=Marg0;
						break a;
					}
					L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed[L$ppre13_1];
				}else{
					L$poptgep$poptgep3$poptgepsqueezed=null;
				}
			}
			L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed.a[L$poptgep$poptgep3$poptgepsqueezed.o- -1];
			L$poptgep$poptgep3$poptgepsqueezed=L$poptgep$poptgep3$poptgepsqueezed.a1.a1;
			tmp6=L$ppre13_0.a0;
			L$ppre13_1=L$ppre13_0.a0o|0;
			if(tmp6!==nullArray||L$ppre13_1!==0)tmp6[L$ppre13_1].a1(tmp6,L$ppre13_1);
			if(L$poptgep$poptgep3$poptgepsqueezed===null){
				Larg0[Marg0].a9.close();
				break a;
			}
			__ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE(L$poptgepsqueezed17,L$poptgep$poptgep3$poptgepsqueezed,Larg0[Marg0].a11,Larg0[Marg0].a13);
			L$ppre13_0=L$poptgepsqueezed17.a0;
			L$ppre13_1=L$poptgepsqueezed17.a0o|0;
			if(L$ppre13_0===nullArray&&L$ppre13_1===0)break a;
			if(L$ppre13_0[L$ppre13_1].a0!==null){
				Larg0[Marg0].i6=2;
				L$poptgepsqueezed17=L$ppre13_0[L$ppre13_1].a[L$ppre13_0[L$ppre13_1].o- -1];
				L$poptgepsqueezed17.a0=Larg0;
				L$poptgepsqueezed17.a0o=Marg0;
				break a;
			}
			L$ppre13_1=L$ppre13_1;
			L$poptgepsqueezed17=L$ppre13_0;
		}else{
			L$ppre13_0=L$poptgepsqueezed17.a0;
			L$ppre13_1=L$poptgepsqueezed17.a0o|0;
			if(L$ppre13_0===nullArray&&L$ppre13_1===0)break a;
			L$ppre13_1=L$ppre13_1;
			L$poptgepsqueezed17=L$ppre13_0;
		}
		L$poptgepsqueezed17[L$ppre13_1].a1(L$poptgepsqueezed17,L$ppre13_1);
	}
}
function __ZZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_ENKUlSA_SC_SE_SF_E_clIS0_S6_NS1_25_ReadableStreamReadResultIPNS1_9TCPSocketEEEjEES8_SA_SC_SE_SF_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	tmp0=Larg0.i6|0;
	if(tmp0<<30>-1073741824){
		if((tmp0&3)!==0){
			tmp1=Larg0.a4.a0;
			tmp0=Larg0.a4.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		}else{
			tmp1=Larg0.a3.a2;
			if(tmp1!==nullArray||0!==0)tmp1[0]=1;
		}
	}else{
		tmp1=Larg0.a5.a0;
		tmp0=Larg0.a5.a0o|0;
		if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
	}
}
function __ZZ9catchNullIN6client17TCPSocketOpenInfoEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv(){
	return null;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client17TCPSocketOpenInfoEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=Larg0.a2;
	if((tmp1[0]&255)===0){
		tmp1=Larg0.a0;
		tmp1.a1=Larg1;
		tmp1.a2=nullArray;
		tmp1=Larg0.a1.a0;
		tmp0=Larg0.a1.a0o|0;
		tmp1[tmp0].a0(tmp1,tmp0);
	}
}
function __ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0,Lgeptoindexphi3=0,Lgeptoindex=0,Lgeptoindex4=0,L$poptgepsqueezed27=null,L$poptgep15$poptgep$poptgepsqueezed=null,tmp9=0,tmp10=null,tmp11=0,tmp12=null,Lgeptoindexphi=0,tmp14=0;
	tmp0=create__ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb$pFrame({a0:null,a1:null,a2:tmp0={a0:nullArray,a0o:0,a1:{i0:0,a1:null}},a3:tmp0={a0:null,a1:null},i4:0,a5:[0],a6:null}).a;
	tmp1=tmp0[0];
	tmp1.a0=__ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb$presume;
	tmp1.a1=__ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb$pdestroy;
	L$poptgepsqueezed27=tmp1.a2;
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed27.a1.i0=0;
	L$poptgep15$poptgep$poptgepsqueezed=L$poptgepsqueezed27.a;
	tmp9=L$poptgepsqueezed27.o-1;
	Larg0.a0=L$poptgep15$poptgep$poptgepsqueezed;
	Larg0.a0o=tmp9;
	if(Larg4){
		L$poptgepsqueezed27=HEAP32;
		tmp9=Larg1.i7|0;
		L$poptgepsqueezed27[0+tmp9|0]=-2;
	}
	Larg1.a6.postMessage(Larg3);
	L$poptgepsqueezed27={a0:nullArray,a0o:0,a1:{i0:0,a1:null},a2:null};
	L$poptgepsqueezed27.a0=nullArray;
	L$poptgepsqueezed27.a0o=0;
	L$poptgepsqueezed27.a1.i0=0;
	L$poptgepsqueezed27.a2=null;
	L$poptgep15$poptgep$poptgepsqueezed=Larg1.a49;
	tmp10=L$poptgep15$poptgep$poptgepsqueezed.a1;
	tmp11=L$poptgep15$poptgep$poptgepsqueezed.a1o|0;
	tmp12=L$poptgep15$poptgep$poptgepsqueezed.a2.a0;
	Lgeptoindexphi=L$poptgep15$poptgep$poptgepsqueezed.a2.a0o|0;
	if(tmp11<Lgeptoindexphi){
		tmp10[tmp11].i0=Larg2;
		tmp10[tmp11].a1=L$poptgepsqueezed27;
		L$poptgep15$poptgep$poptgepsqueezed.a1=tmp10;
		L$poptgep15$poptgep$poptgepsqueezed.a1o=tmp11+1|0;
		tmp10=tmp10[tmp11];
	}else{
		tmp2=L$poptgep15$poptgep$poptgepsqueezed.a0;
		tmp9=L$poptgep15$poptgep$poptgepsqueezed.a0o|0;
		tmp9=(__imul(tmp9,8));
		tmp11=(__imul(tmp11,8))-tmp9>>3;
		tmp14=tmp11+1|0;
		if(tmp14>>>0>536870911)_abort();
		;
		tmp9=(__imul(Lgeptoindexphi,8))-tmp9|0;
		if(tmp9>>>0<2147483640){
			tmp9>>>=2;
			tmp9=tmp9>>>0>tmp14>>>0?tmp9|0:tmp14|0;
		}else{
			tmp9=536870911;
		}
		tmp12=createArray_struct$p_ZSt4pairIjP9SuspenderIPN6client6ObjectEEE((tmp9<<3)/8|0);
		tmp12[tmp11].i0=Larg2;
		tmp12[tmp11].a1=L$poptgepsqueezed27;
		L$poptgepsqueezed27=L$poptgep15$poptgep$poptgepsqueezed.a0;
		tmp14=L$poptgep15$poptgep$poptgepsqueezed.a0o|0;
		tmp10=L$poptgep15$poptgep$poptgepsqueezed.a1;
		tmp3=L$poptgep15$poptgep$poptgepsqueezed.a1o|0;
		if(tmp10===L$poptgepsqueezed27&&tmp3===tmp14){
			L$poptgep15$poptgep$poptgepsqueezed.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a0o=0+tmp11|0;
			L$poptgep15$poptgep$poptgepsqueezed.a1=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a1o=(0+tmp11|0)+1|0;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0o=0+tmp9|0;
			tmp10=tmp12[tmp11];
		}else{
			Lgeptoindexphi=tmp11;
			Lgeptoindexphi3=0;
			while(1){
				Lgeptoindex=Lgeptoindexphi-1|0;
				Lgeptoindex4=Lgeptoindexphi3-1|0;
				tmp12[Lgeptoindex].i0=tmp10[tmp3+Lgeptoindex4|0].i0|0;
				tmp12[(0+Lgeptoindexphi|0)+ -1|0].a1=tmp10[(tmp3+Lgeptoindexphi3|0)+ -1|0].a1;
				if(tmp10!==L$poptgepsqueezed27||(tmp3+Lgeptoindex4|0)!==tmp14){
					Lgeptoindexphi3=Lgeptoindex4;
					Lgeptoindexphi=Lgeptoindex;
					continue;
				}
				break;
			}
			L$poptgep15$poptgep$poptgepsqueezed.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a0o=0+Lgeptoindex|0;
			L$poptgep15$poptgep$poptgepsqueezed.a1=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a1o=(0+tmp11|0)+1|0;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0=tmp12;
			L$poptgep15$poptgep$poptgepsqueezed.a2.a0o=0+tmp9|0;
			tmp10=tmp12[tmp11];
		}
	}
	L$poptgepsqueezed27=tmp10.a1;
	L$poptgep15$poptgep$poptgepsqueezed=tmp1.a3;
	L$poptgep15$poptgep$poptgepsqueezed.a0=L$poptgepsqueezed27;
	if(L$poptgepsqueezed27.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
	;
	L$poptgepsqueezed27.a2=L$poptgep15$poptgep$poptgepsqueezed;
	tmp1.i4=0;
	L$poptgepsqueezed27.a0=tmp0;
	L$poptgepsqueezed27.a0o=0;
}
function __ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=null,L$poptgepsqueezed65=null,L$poptgepsqueezed70=null,tmp5=0,L$poptgepsqueezed51=null,tmp7=null,tmp8=null,tmp9=null;
	tmp0=new constructor__ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE$pFrame().a;
	tmp2=tmp0[0];
	tmp2.a0=__ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE$presume;
	tmp2.a1=__ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE$pdestroy;
	tmp2.a4=Larg2;
	tmp2.a3=Larg1;
	L$poptgepsqueezed65=tmp2.a2;
	L$poptgepsqueezed65.a0=nullArray;
	L$poptgepsqueezed65.a0o=0;
	L$poptgepsqueezed70=L$poptgepsqueezed65.a;
	tmp5=L$poptgepsqueezed65.o-1;
	Larg0.a0=L$poptgepsqueezed70;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed65=Larg3.readable.getReader();
	tmp2.a5=L$poptgepsqueezed65;
	tmp2.a6=Larg3.writable.getWriter();
	L$poptgepsqueezed70=tmp2.a11;
	L$poptgepsqueezed70.a0=nullArray;
	L$poptgepsqueezed70.a0o=0;
	L$poptgepsqueezed70.a1.i0=0;
	L$poptgepsqueezed70.a2=null;
	L$poptgepsqueezed51=new Array();
	tmp2.a7=L$poptgepsqueezed51;
	tmp7=[{a0:null,a1:null,a2:null,a3:null}];
	tmp7[0].a0=L$poptgepsqueezed51;
	tmp7[0].a1=L$poptgepsqueezed70;
	tmp7[0].a2=L$poptgepsqueezed65;
	tmp7[0].a3=Larg2;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS5_9TCPSocketEPNS5_17TCPSocketOpenInfoEE3$_0JPNS5_12MessageEventIPNS5_10Uint8ArrayEEEEEEvPT_DpT0_,tmp7[0]);
	Larg1.onmessage=tmp7;
	tmp7=new constructor__ZZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoEENK3$_1clINS1_27ReadableStreamDefaultReaderIPNS1_4_AnyEEES2_NS1_6TArrayIPNS1_10Uint8ArrayEEE9SuspenderIiEEE4TaskIvEPT_PT0_PT1_RT2_$pFrame().a;
	tmp8=tmp7[0];
	tmp8.a0=__ZZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoEENK3$_1clINS1_27ReadableStreamDefaultReaderIPNS1_4_AnyEEES2_NS1_6TArrayIPNS1_10Uint8ArrayEEE9SuspenderIiEEE4TaskIvEPT_PT0_PT1_RT2_$presume;
	tmp8.a1=__ZZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoEENK3$_1clINS1_27ReadableStreamDefaultReaderIPNS1_4_AnyEEES2_NS1_6TArrayIPNS1_10Uint8ArrayEEE9SuspenderIiEEE4TaskIvEPT_PT0_PT1_RT2_$pdestroy;
	tmp8.a8=L$poptgepsqueezed70;
	tmp8.a7=L$poptgepsqueezed51;
	tmp8.a6=Larg1;
	tmp8.a5=L$poptgepsqueezed65;
	L$poptgepsqueezed65=tmp8.a2;
	L$poptgepsqueezed65.a0=nullArray;
	L$poptgepsqueezed65.a0o=0;
	L$poptgepsqueezed51=L$poptgepsqueezed65.a;
	tmp5=L$poptgepsqueezed65.o-1;
	tmp2.a17.a0=L$poptgepsqueezed51;
	tmp2.a17.a0o=tmp5;
	L$poptgepsqueezed65=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
	tmp9=tmp8.a5.read().catch(L$poptgepsqueezed65);
	L$poptgepsqueezed51=tmp8.a12;
	L$poptgepsqueezed51.a2=nullArray;
	L$poptgepsqueezed51.a0=tmp9;
	tmp8.i14=0;
	tmp9=new Uint8Array(1);
	tmp9[0]=0;
	L$poptgepsqueezed51.a2=tmp9;
	tmp8=L$poptgepsqueezed51.a0;
	tmp1=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
	tmp1[0].a0=L$poptgepsqueezed51;
	tmp1[0].a1.a0=tmp7;
	tmp1[0].a1.a0o=0;
	tmp1[0].a2=tmp9;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp1[0]);
	tmp8.then(tmp7);
	if(((tmp2.a7.length)|0)!==0){
		if(((tmp2.a7.length)|0)<=0)___assert_fail(_$pstr$p27$p164,0,_$pstr$p15$p124,0,637,___func__$p_ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE,0);
		;
		tmp9=tmp2.a7.shift();
		L$poptgepsqueezed51=tmp2.a6;
		if(tmp9!==null){
			L$poptgepsqueezed65=L$poptgepsqueezed51.write(tmp9).catch(L$poptgepsqueezed65);
			L$poptgepsqueezed70=tmp2.a13;
			L$poptgepsqueezed70.a2=nullArray;
			L$poptgepsqueezed70.a0=L$poptgepsqueezed65;
			tmp2.i18=2;
			L$poptgepsqueezed65=new Uint8Array(1);
			L$poptgepsqueezed65[0]=0;
			L$poptgepsqueezed70.a2=L$poptgepsqueezed65;
			L$poptgepsqueezed51=L$poptgepsqueezed70.a0;
			tmp2=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
			tmp2[0].a0=L$poptgepsqueezed70;
			tmp2[0].a1.a0=tmp0;
			tmp2[0].a1.a0o=0;
			tmp2[0].a2=L$poptgepsqueezed65;
			L$poptgepsqueezed65=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp2[0]);
			L$poptgepsqueezed51.then(L$poptgepsqueezed65);
		}else{
			L$poptgepsqueezed51.releaseLock();
			L$poptgepsqueezed65=L$poptgepsqueezed51.close().catch(L$poptgepsqueezed65);
			L$poptgepsqueezed70=tmp2.a12;
			L$poptgepsqueezed70.a2=nullArray;
			L$poptgepsqueezed70.a0=L$poptgepsqueezed65;
			tmp2.i18=1;
			L$poptgepsqueezed65=new Uint8Array(1);
			L$poptgepsqueezed65[0]=0;
			L$poptgepsqueezed70.a2=L$poptgepsqueezed65;
			L$poptgepsqueezed51=L$poptgepsqueezed70.a0;
			tmp2=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
			tmp2[0].a0=L$poptgepsqueezed70;
			tmp2[0].a1.a0=tmp0;
			tmp2[0].a1.a0o=0;
			tmp2[0].a2=L$poptgepsqueezed65;
			L$poptgepsqueezed65=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp2[0]);
			L$poptgepsqueezed51.then(L$poptgepsqueezed65);
		}
	}else{
		L$poptgepsqueezed65=tmp2.a16;
		L$poptgepsqueezed65.a0=L$poptgepsqueezed70;
		if(L$poptgepsqueezed70.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
		;
		L$poptgepsqueezed70.a2=L$poptgepsqueezed65;
		tmp2.i18=0;
		L$poptgepsqueezed70.a0=tmp0;
		L$poptgepsqueezed70.a0o=0;
	}
}
function __ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE$presume(Larg0,Marg0){
	var tmp0=0,L$poptgepsqueezed63=null,L$poptgepsqueezed61=null,L$poptgepsqueezed64=null,L$poptgepsqueezed65=null;
	tmp0=Larg0[Marg0].i18|0;
	L$poptgepsqueezed63=Larg0[Marg0].a14;
	a:if((tmp0&7)<3){
		L$poptgepsqueezed61=Larg0[Marg0].a16;
		L$poptgepsqueezed64=Larg0[Marg0].a13;
		L$poptgepsqueezed65=Larg0[Marg0].a12;
		if((tmp0&7)!==0){
			if((tmp0&7)===1){
				L$poptgepsqueezed61=L$poptgepsqueezed65.a2;
				if(L$poptgepsqueezed61!==nullArray||0!==0)L$poptgepsqueezed61[0]=1;
				L$poptgepsqueezed61=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
				L$poptgepsqueezed61=Larg0[Marg0].a5.cancel().catch(L$poptgepsqueezed61);
				Larg0[Marg0].a8=L$poptgepsqueezed61;
				L$poptgepsqueezed63.a0=L$poptgepsqueezed61;
				Larg0[Marg0].i18=3;
				L$poptgepsqueezed64=new Uint8Array(1);
				L$poptgepsqueezed64[0]=0;
				L$poptgepsqueezed63.a2=L$poptgepsqueezed64;
				L$poptgepsqueezed65=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
				L$poptgepsqueezed65[0].a0=L$poptgepsqueezed63;
				L$poptgepsqueezed65[0].a1.a0=Larg0;
				L$poptgepsqueezed65[0].a1.a0o=Marg0;
				L$poptgepsqueezed65[0].a2=L$poptgepsqueezed64;
				L$poptgepsqueezed64=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,L$poptgepsqueezed65[0]);
				L$poptgepsqueezed61.then(L$poptgepsqueezed64);
				break a;
			}
			L$poptgepsqueezed63=L$poptgepsqueezed64.a2;
			if(L$poptgepsqueezed63!==nullArray||0!==0)L$poptgepsqueezed63[0]=1;
			L$poptgepsqueezed63=Larg0[Marg0].a7;
			if(((L$poptgepsqueezed63.length)|0)===0){
				L$poptgepsqueezed63=Larg0[Marg0].a11;
				L$poptgepsqueezed61.a0=L$poptgepsqueezed63;
				if(L$poptgepsqueezed63.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
				;
				L$poptgepsqueezed63.a2=L$poptgepsqueezed61;
				Larg0[Marg0].i18=0;
				L$poptgepsqueezed63.a0=Larg0;
				L$poptgepsqueezed63.a0o=Marg0;
				break a;
			}
			L$poptgepsqueezed63=L$poptgepsqueezed63;
		}else{
			L$poptgepsqueezed63=L$poptgepsqueezed61.a0;
			tmp0=L$poptgepsqueezed63.a1.i0|0;
			if((tmp0&65535)>=256)L$poptgepsqueezed63.a1.i0=tmp0&255;
			L$poptgepsqueezed63.a0=nullArray;
			L$poptgepsqueezed63.a0o=0;
			L$poptgepsqueezed63=Larg0[Marg0].a7;
			L$poptgepsqueezed63=L$poptgepsqueezed63;
		}
		if(((L$poptgepsqueezed63.length)|0)<=0)___assert_fail(_$pstr$p27$p164,0,_$pstr$p15$p124,0,637,___func__$p_ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE,0);
		;
		L$poptgepsqueezed63=L$poptgepsqueezed63.shift();
		L$poptgepsqueezed61=Larg0[Marg0].a6;
		if(L$poptgepsqueezed63!==null){
			L$poptgepsqueezed65=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
			L$poptgepsqueezed63=L$poptgepsqueezed61.write(L$poptgepsqueezed63).catch(L$poptgepsqueezed65);
			L$poptgepsqueezed64.a2=nullArray;
			L$poptgepsqueezed64.a0=L$poptgepsqueezed63;
			Larg0[Marg0].i18=2;
			L$poptgepsqueezed61=new Uint8Array(1);
			L$poptgepsqueezed61[0]=0;
			L$poptgepsqueezed64.a2=L$poptgepsqueezed61;
			L$poptgepsqueezed65=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
			L$poptgepsqueezed65[0].a0=L$poptgepsqueezed64;
			L$poptgepsqueezed65[0].a1.a0=Larg0;
			L$poptgepsqueezed65[0].a1.a0o=Marg0;
			L$poptgepsqueezed65[0].a2=L$poptgepsqueezed61;
			L$poptgepsqueezed61=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,L$poptgepsqueezed65[0]);
			L$poptgepsqueezed63.then(L$poptgepsqueezed61);
		}else{
			L$poptgepsqueezed61.releaseLock();
			L$poptgepsqueezed64=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
			L$poptgepsqueezed63=L$poptgepsqueezed61.close().catch(L$poptgepsqueezed64);
			L$poptgepsqueezed65.a2=nullArray;
			L$poptgepsqueezed65.a0=L$poptgepsqueezed63;
			Larg0[Marg0].i18=1;
			L$poptgepsqueezed61=new Uint8Array(1);
			L$poptgepsqueezed61[0]=0;
			L$poptgepsqueezed65.a2=L$poptgepsqueezed61;
			L$poptgepsqueezed64=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
			L$poptgepsqueezed64[0].a0=L$poptgepsqueezed65;
			L$poptgepsqueezed64[0].a1.a0=Larg0;
			L$poptgepsqueezed64[0].a1.a0o=Marg0;
			L$poptgepsqueezed64[0].a2=L$poptgepsqueezed61;
			L$poptgepsqueezed61=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,L$poptgepsqueezed64[0]);
			L$poptgepsqueezed63.then(L$poptgepsqueezed61);
		}
	}else{
		L$poptgepsqueezed61=Larg0[Marg0].a15;
		if((tmp0&7)===4){
			L$poptgepsqueezed63=L$poptgepsqueezed61.a2;
			if(L$poptgepsqueezed63!==nullArray||0!==0)L$poptgepsqueezed63[0]=1;
			Larg0[Marg0].a3.onmessage=null;
			L$poptgepsqueezed63=Larg0[Marg0].a17.a0;
			tmp0=Larg0[Marg0].a17.a0o|0;
			if(L$poptgepsqueezed63!==nullArray||tmp0!==0)L$poptgepsqueezed63[tmp0].a1(L$poptgepsqueezed63,tmp0);
			L$poptgepsqueezed63=Larg0[Marg0].a2;
			Larg0[Marg0].a10=L$poptgepsqueezed63;
			Larg0[Marg0].a0=null;
			L$poptgepsqueezed61=L$poptgepsqueezed63.a0;
			tmp0=L$poptgepsqueezed63.a0o|0;
			(L$poptgepsqueezed61!==nullArray||tmp0!==0?L$poptgepsqueezed61:_NoopCoro$pFrame$pConst$p118)[L$poptgepsqueezed61!==nullArray||tmp0!==0?tmp0:$NoopCoro$pFrame$pConst$p118].a0((L$poptgepsqueezed61!==nullArray||tmp0!==0?L$poptgepsqueezed61:_NoopCoro$pFrame$pConst$p118),L$poptgepsqueezed61!==nullArray||tmp0!==0?tmp0:$NoopCoro$pFrame$pConst$p118);
		}else{
			L$poptgepsqueezed64=L$poptgepsqueezed63.a2;
			if(L$poptgepsqueezed64!==nullArray||0!==0)L$poptgepsqueezed64[0]=1;
			L$poptgepsqueezed64=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
			L$poptgepsqueezed64=Larg0[Marg0].a4.close().catch(L$poptgepsqueezed64);
			Larg0[Marg0].a9=L$poptgepsqueezed64;
			L$poptgepsqueezed61.a0=L$poptgepsqueezed64;
			Larg0[Marg0].i18=4;
			L$poptgepsqueezed63=new Uint8Array(1);
			L$poptgepsqueezed63[0]=0;
			L$poptgepsqueezed61.a2=L$poptgepsqueezed63;
			L$poptgepsqueezed65=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
			L$poptgepsqueezed65[0].a0=L$poptgepsqueezed61;
			L$poptgepsqueezed65[0].a1.a0=Larg0;
			L$poptgepsqueezed65[0].a1.a0o=Marg0;
			L$poptgepsqueezed65[0].a2=L$poptgepsqueezed63;
			L$poptgepsqueezed63=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,L$poptgepsqueezed65[0]);
			L$poptgepsqueezed64.then(L$poptgepsqueezed63);
		}
	}
}
function __ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.i18|0;
		if((tmp0&7)<3){
			if((tmp0&7)!==0){
				if((tmp0&7)===1){
					tmp1=Larg0.a12.a2;
					if(tmp1!==nullArray||0!==0)tmp1[0]=1;
				}else{
					tmp1=Larg0.a13.a2;
					if(tmp1!==nullArray||0!==0)tmp1[0]=1;
				}
			}else{
				tmp1=Larg0.a16.a0;
				if(tmp1!==null){
					tmp1.a0=nullArray;
					tmp1.a0o=0;
				}
			}
		}else if((tmp0&7)===4){
			tmp1=Larg0.a15.a2;
			if(tmp1!==nullArray||0!==0)tmp1[0]=1;
		}else{
			tmp1=Larg0.a14.a2;
			if(tmp1!==nullArray||0!==0)tmp1[0]=1;
		}
		tmp1=Larg0.a17.a0;
		tmp0=Larg0.a17.a0o|0;
		if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS5_9TCPSocketEPNS5_17TCPSocketOpenInfoEE3$_0JPNS5_12MessageEventIPNS5_10Uint8ArrayEEEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=0,L$poptgep2$poptgep$poptgepsqueezed=null,tmp3=null;
	tmp3=Larg0.a0;
	+tmp3.push(Larg1.data);
	tmp3=Larg0.a1;
	tmp0=tmp3.a0;
	tmp1=tmp3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0){
		L$poptgep2$poptgep$poptgepsqueezed=tmp3.a1;
		L$poptgep2$poptgep$poptgepsqueezed.i0=256;
		L$poptgep2$poptgep$poptgepsqueezed.i1=0;
		tmp3.a0=nullArray;
		tmp3.a0o=0;
		tmp3.a2=null;
		tmp0[tmp1].a0(tmp0,tmp1);
	}
}
function __ZZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoEENK3$_1clINS1_27ReadableStreamDefaultReaderIPNS1_4_AnyEEES2_NS1_6TArrayIPNS1_10Uint8ArrayEEE9SuspenderIiEEE4TaskIvEPT_PT0_PT1_RT2_$presume(Larg0,Marg0){
	var L$poptgepsqueezed41=null,L$poptgepsqueezed42=null,tmp2=0,L$poptgep19$poptgep20$poptgepsqueezed=null,tmp4=null;
	L$poptgepsqueezed41=Larg0[Marg0].a13;
	a:if((Larg0[Marg0].i14&3)!==0){
		L$poptgepsqueezed41=L$poptgepsqueezed41.a2;
		if(L$poptgepsqueezed41!==nullArray||0!==0)L$poptgepsqueezed41[0]=1;
		L$poptgepsqueezed41=Larg0[Marg0].a8;
		+Larg0[Marg0].a7.push(null);
		L$poptgepsqueezed42=L$poptgepsqueezed41.a0;
		tmp2=L$poptgepsqueezed41.a0o|0;
		if(L$poptgepsqueezed42!==nullArray||tmp2!==0){
			L$poptgep19$poptgep20$poptgepsqueezed=L$poptgepsqueezed41.a1;
			L$poptgep19$poptgep20$poptgepsqueezed.i0=256;
			L$poptgep19$poptgep20$poptgepsqueezed.i1=0;
			L$poptgepsqueezed41.a0=nullArray;
			L$poptgepsqueezed41.a0o=0;
			L$poptgepsqueezed41.a2=null;
			L$poptgepsqueezed42[tmp2].a0(L$poptgepsqueezed42,tmp2);
		}
		L$poptgepsqueezed41=Larg0[Marg0].a2;
		Larg0[Marg0].a11=L$poptgepsqueezed41;
		Larg0[Marg0].a0=null;
		L$poptgepsqueezed42=L$poptgepsqueezed41.a0;
		tmp2=L$poptgepsqueezed41.a0o|0;
		(L$poptgepsqueezed42!==nullArray||tmp2!==0?L$poptgepsqueezed42:_NoopCoro$pFrame$pConst$p118)[L$poptgepsqueezed42!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst$p118].a0((L$poptgepsqueezed42!==nullArray||tmp2!==0?L$poptgepsqueezed42:_NoopCoro$pFrame$pConst$p118),L$poptgepsqueezed42!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst$p118);
	}else{
		L$poptgepsqueezed42=Larg0[Marg0].a12;
		L$poptgep19$poptgep20$poptgepsqueezed=L$poptgepsqueezed42.a1;
		Larg0[Marg0].a10=L$poptgep19$poptgep20$poptgepsqueezed;
		tmp4=L$poptgepsqueezed42.a2;
		if(tmp4!==nullArray||0!==0)tmp4[0]=1;
		if(L$poptgep19$poptgep20$poptgepsqueezed!==null)if(!(L$poptgep19$poptgep20$poptgepsqueezed.done)){
			tmp4=Larg0[Marg0].a6;
			L$poptgep19$poptgep20$poptgepsqueezed=L$poptgep19$poptgep20$poptgepsqueezed.value;
			L$poptgepsqueezed41=Larg0[Marg0].a3[0];
			Larg0[Marg0].a3[0]=L$poptgep19$poptgep20$poptgepsqueezed;
			tmp4.postMessage(L$poptgep19$poptgep20$poptgepsqueezed);
			Larg0[Marg0].a9=Larg0[Marg0].a10;
			L$poptgepsqueezed41=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
			L$poptgepsqueezed41=Larg0[Marg0].a5.read().catch(L$poptgepsqueezed41);
			L$poptgepsqueezed42.a2=nullArray;
			L$poptgepsqueezed42.a0=L$poptgepsqueezed41;
			Larg0[Marg0].i14=0;
			L$poptgep19$poptgep20$poptgepsqueezed=new Uint8Array(1);
			L$poptgep19$poptgep20$poptgepsqueezed[0]=0;
			L$poptgepsqueezed42.a2=L$poptgep19$poptgep20$poptgepsqueezed;
			tmp4=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
			tmp4[0].a0=L$poptgepsqueezed42;
			tmp4[0].a1.a0=Larg0;
			tmp4[0].a1.a0o=Marg0;
			tmp4[0].a2=L$poptgep19$poptgep20$poptgepsqueezed;
			L$poptgep19$poptgep20$poptgepsqueezed=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp4[0]);
			L$poptgepsqueezed41.then(L$poptgep19$poptgep20$poptgepsqueezed);
			break a;
		}
		L$poptgepsqueezed42=Larg0[Marg0].a6;
		tmp4=Larg0[Marg0].a5;
		L$poptgep19$poptgep20$poptgepsqueezed=Larg0[Marg0].a4[0];
		Larg0[Marg0].a4[0]=nullObj;
		L$poptgepsqueezed42.postMessage(null);
		tmp4.releaseLock();
		L$poptgepsqueezed42=__ZZ9catchNullIN6client4_AnyEEPNS0_7PromiseIPT_EES6_ENUlvE_8__invokeEv;
		L$poptgepsqueezed42=tmp4.cancel().catch(L$poptgepsqueezed42);
		L$poptgepsqueezed41.a2=nullArray;
		L$poptgepsqueezed41.a0=L$poptgepsqueezed42;
		Larg0[Marg0].i14=1;
		L$poptgep19$poptgep20$poptgepsqueezed=new Uint8Array(1);
		L$poptgep19$poptgep20$poptgepsqueezed[0]=0;
		L$poptgepsqueezed41.a2=L$poptgep19$poptgep20$poptgepsqueezed;
		tmp4=[{a0:null,a1:{a0:nullArray,a0o:0},a2:nullArray}];
		tmp4[0].a0=L$poptgepsqueezed41;
		tmp4[0].a1.a0=Larg0;
		tmp4[0].a1.a0o=Marg0;
		tmp4[0].a2=L$poptgep19$poptgep20$poptgepsqueezed;
		L$poptgep19$poptgep20$poptgepsqueezed=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp4[0]);
		L$poptgepsqueezed42.then(L$poptgep19$poptgep20$poptgepsqueezed);
	}
}
function __ZZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoEENK3$_1clINS1_27ReadableStreamDefaultReaderIPNS1_4_AnyEEES2_NS1_6TArrayIPNS1_10Uint8ArrayEEE9SuspenderIiEEE4TaskIvEPT_PT0_PT1_RT2_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	a:if(Larg0.a0!==null){
		if((Larg0.i14&3)!==0){
			tmp0=Larg0.a13.a2;
			if(tmp0===nullArray&&0===0)break a;
		}else{
			Larg0.a10=Larg0.a9;
			tmp0=Larg0.a12.a2;
			if(tmp0===nullArray&&0===0)break a;
		}
		tmp0[0]=1;
	}
}
function __ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed14=null,tmp1=null,tmp2=null,tmp3=0;
	L$poptgepsqueezed14=Larg0.a3.a0;
	tmp1=L$poptgepsqueezed14.a1;
	tmp2=tmp1.a1;
	tmp3=tmp1.i0|0;
	if((tmp3&65535)>=256)tmp1.i0=tmp3&255;
	L$poptgepsqueezed14.a0=nullArray;
	L$poptgepsqueezed14.a0o=0;
	L$poptgepsqueezed14=Larg0.a2;
	tmp1=L$poptgepsqueezed14.a1;
	if(tmp2!==null){
		tmp2=tmp2;
		tmp1.i0=256;
		tmp1.a1=tmp2;
	}else{
		tmp3=tmp1.i0|0;
		tmp1.a1=null;
		if((tmp3&65535)<256)tmp1.i0=tmp3|256;
	}
	Larg0.a6=L$poptgepsqueezed14;
	Larg0.a0=null;
	tmp1=L$poptgepsqueezed14.a0;
	tmp3=L$poptgepsqueezed14.a0o|0;
	(tmp1!==nullArray||tmp3!==0?tmp1:_NoopCoro$pFrame$pConst$p118)[tmp1!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118].a0((tmp1!==nullArray||tmp3!==0?tmp1:_NoopCoro$pFrame$pConst$p118),tmp1!==nullArray||tmp3!==0?tmp3:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		if(tmp0!==null){
			tmp0.a0=nullArray;
			tmp0.a0o=0;
		}
	}
}
function __ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_$presume(Larg0,Marg0){
	var tmp0=null,tmp1=null,L$poptgepsqueezed12=null,L$poptgep$poptgep2$poptgepsqueezed=null,L$ppre_0=0;
	L$poptgepsqueezed12=Larg0[Marg0].a4;
	a:{
		if(Larg0[Marg0].i5|0){
			L$poptgep$poptgep2$poptgepsqueezed=L$poptgepsqueezed12.a0;
			L$ppre_0=L$poptgepsqueezed12.a0o|0;
			if(L$poptgep$poptgep2$poptgepsqueezed===nullArray&&L$ppre_0===0)break a;
			L$poptgepsqueezed12=L$poptgep$poptgep2$poptgepsqueezed;
			L$ppre_0=L$ppre_0;
		}else{
			L$poptgep$poptgep2$poptgepsqueezed=Larg0[Marg0].a3;
			tmp0=L$poptgep$poptgep2$poptgepsqueezed.a1;
			L$poptgep$poptgep2$poptgepsqueezed=L$poptgep$poptgep2$poptgepsqueezed.a2;
			if(L$poptgep$poptgep2$poptgepsqueezed!==nullArray||0!==0)L$poptgep$poptgep2$poptgepsqueezed[0]=1;
			L$poptgep$poptgep2$poptgepsqueezed=Larg0[Marg0].a7;
			L$ppre_0=tmp0===null?1:0;
			tmp1={type:88,tid:(Larg0[Marg0].a8.tid),arg0:(L$ppre_0? -111|0:0|0)};
			L$poptgep$poptgep2$poptgepsqueezed.a6.postMessage(tmp1);
			if(L$ppre_0)break a;
			__ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE(L$poptgepsqueezed12,Larg0[Marg0].a9,Larg0[Marg0].a10,tmp0);
			L$poptgep$poptgep2$poptgepsqueezed=L$poptgepsqueezed12.a0;
			L$ppre_0=L$poptgepsqueezed12.a0o|0;
			if(L$poptgep$poptgep2$poptgepsqueezed===nullArray&&L$ppre_0===0)break a;
			if(L$poptgep$poptgep2$poptgepsqueezed[L$ppre_0].a0!==null){
				Larg0[Marg0].i5=1;
				L$poptgepsqueezed12=L$poptgep$poptgep2$poptgepsqueezed[L$ppre_0].a[L$poptgep$poptgep2$poptgepsqueezed[L$ppre_0].o- -1];
				L$poptgepsqueezed12.a0=Larg0;
				L$poptgepsqueezed12.a0o=Marg0;
				break a;
			}
			L$poptgepsqueezed12=L$poptgep$poptgep2$poptgepsqueezed;
			L$ppre_0=L$ppre_0;
		}
		L$poptgepsqueezed12[L$ppre_0].a1(L$poptgepsqueezed12,L$ppre_0);
	}
}
function __ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null;
	if(Larg0.i5|0){
		tmp1=Larg0.a4.a0;
		tmp0=Larg0.a4.a0o|0;
		if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
	}else{
		tmp1=Larg0.a3.a2;
		if(tmp1!==nullArray||0!==0)tmp1[0]=1;
	}
}
function __ZNSt6vectorIN7CheerpX13OverlayDevice2OpESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,Lgeptoindexphi=0,tmp5=0,Lgeptoindexphi1=0,Lgeptoindex18=0,Lgeptoindex16=0;
	tmp2=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp3=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	Lgeptoindexphi=(__imul(Lgeptoindexphi,16))-(__imul(tmp0,16))|0;
	tmp3=Larg1.a1;
	tmp5=Larg1.a1o|0;
	tmp1=-(Lgeptoindexphi>>4)|0;
	if(Lgeptoindexphi>>>0>=16){
		Lgeptoindexphi1=Lgeptoindexphi>>>4;
		Lgeptoindex18=tmp1+Lgeptoindexphi1|0;
		if(tmp0<(tmp5+tmp1|0))while(1){
			Lgeptoindexphi=Lgeptoindexphi1-1|0;
			Lgeptoindex16=Lgeptoindex18-1|0;
			tmp3[tmp5+Lgeptoindex16|0].i0=tmp2[tmp0+Lgeptoindexphi|0].i0|0;
			tmp3[(tmp5+Lgeptoindex18|0)+ -1|0].i1=tmp2[(tmp0+Lgeptoindexphi1|0)+ -1|0].i1|0;
			tmp3[(tmp5+Lgeptoindex18|0)+ -1|0].i2=tmp2[(tmp0+Lgeptoindexphi1|0)+ -1|0].i2|0;
			tmp3[(tmp5+Lgeptoindex18|0)+ -1|0].a3=tmp2[(tmp0+Lgeptoindexphi1|0)+ -1|0].a3;
			if(tmp3!==tmp3||(tmp5+tmp1|0)!==(tmp5+Lgeptoindex16|0)){
				Lgeptoindexphi1=Lgeptoindexphi;
				Lgeptoindex18=Lgeptoindex16;
				continue;
			}
			break;
		}
		else{
			Lgeptoindex16=Lgeptoindexphi-16|0;
			if((Lgeptoindex16&16|0)!==0){
				Lgeptoindexphi1=tmp1;
				Lgeptoindexphi=0;
			}else{
				tmp3[tmp5+tmp1|0].i0=tmp2[tmp0].i0|0;
				tmp3[tmp5+tmp1|0].i1=tmp2[tmp0].i1|0;
				tmp3[tmp5+tmp1|0].i2=tmp2[tmp0].i2|0;
				tmp3[tmp5+tmp1|0].a3=tmp2[tmp0].a3;
				Lgeptoindexphi1=tmp1+1|0;
				Lgeptoindexphi=1;
			}
			if(Lgeptoindex16>>>0>=16)while(1){
				tmp3[tmp5+Lgeptoindexphi1|0].i0=tmp2[tmp0+Lgeptoindexphi|0].i0|0;
				tmp3[tmp5+Lgeptoindexphi1|0].i1=tmp2[tmp0+Lgeptoindexphi|0].i1|0;
				tmp3[tmp5+Lgeptoindexphi1|0].i2=tmp2[tmp0+Lgeptoindexphi|0].i2|0;
				tmp3[tmp5+Lgeptoindexphi1|0].a3=tmp2[tmp0+Lgeptoindexphi|0].a3;
				tmp3[(tmp5+Lgeptoindexphi1|0)+1|0].i0=tmp2[(tmp0+Lgeptoindexphi|0)+1|0].i0|0;
				tmp3[(tmp5+Lgeptoindexphi1|0)+1|0].i1=tmp2[(tmp0+Lgeptoindexphi|0)+1|0].i1|0;
				tmp3[(tmp5+Lgeptoindexphi1|0)+1|0].i2=tmp2[(tmp0+Lgeptoindexphi|0)+1|0].i2|0;
				tmp3[(tmp5+Lgeptoindexphi1|0)+1|0].a3=tmp2[(tmp0+Lgeptoindexphi|0)+1|0].a3;
				Lgeptoindexphi1=Lgeptoindexphi1+2|0;
				if(tmp3!==tmp3||(tmp5+Lgeptoindex18|0)!==(tmp5+Lgeptoindexphi1|0)){
					Lgeptoindexphi=Lgeptoindexphi+2|0;
					continue;
				}
				break;
			}
		}
	}
	Larg1.a1=tmp3;
	Larg1.a1o=tmp5+(tmp1<<4>>4)|0;
	tmp2=Larg0.a0;
	Lgeptoindexphi=Larg0.a0o|0;
	Larg0.a0=tmp3;
	Larg0.a0o=tmp5+(tmp1<<4>>4)|0;
	Larg1.a1=tmp2;
	Larg1.a1o=Lgeptoindexphi;
	tmp2=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	tmp3=Larg1.a2;
	tmp5=Larg1.a2o|0;
	Larg0.a1=tmp3;
	Larg0.a1o=tmp5;
	Larg1.a2=tmp2;
	Larg1.a2o=Lgeptoindexphi;
	tmp2=Larg0.a2.a0;
	Lgeptoindexphi=Larg0.a2.a0o|0;
	tmp3=Larg1.a3.a0;
	tmp5=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp3;
	Larg0.a2.a0o=tmp5;
	Larg1.a3.a0=tmp2;
	Larg1.a3.a0o=Lgeptoindexphi;
	tmp2=Larg1.a1;
	Lgeptoindexphi=Larg1.a1o|0;
	Larg1.a0=tmp2[Lgeptoindexphi];
}
function __ZNSt6vectorIjSaIjEE26__swap_out_circular_bufferERSt14__split_bufferIjRS0_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,Lgeptoindexphi=0,tmp5=0,Lgeptoindexphi3=0,Lgeptoindex18=0,tmp8=0,Lxtraiter=0,Lprol$piter=0;
	tmp2=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp3=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	Lgeptoindexphi=(__imul(Lgeptoindexphi,4))-(__imul(tmp0,4))|0;
	tmp3=Larg1.a1;
	tmp5=Larg1.a1o|0;
	tmp1=-(Lgeptoindexphi>>2)|0;
	if(Lgeptoindexphi>>>0>=4){
		Lgeptoindexphi3=Lgeptoindexphi>>>2;
		Lgeptoindex18=tmp1+Lgeptoindexphi3|0;
		if(tmp0<(tmp5+tmp1|0)){
			tmp8=Lgeptoindexphi-4|0;
			Lgeptoindexphi=(tmp8>>>2)+1&3;
			if((Lgeptoindexphi|0)!==0){
				Lxtraiter=0;
				while(1){
					Lgeptoindexphi3=Lgeptoindexphi3-1|0;
					Lgeptoindex18=Lgeptoindex18-1|0;
					tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0]|0;
					Lxtraiter=Lxtraiter+1|0;
					if((Lxtraiter|0)!==(Lgeptoindexphi|0))continue;
					break;
				}
			}
			if(tmp8>>>0>=12)while(1){
				tmp3[(tmp5+Lgeptoindex18|0)+ -1|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -1|0]|0;
				tmp3[(tmp5+Lgeptoindex18|0)+ -2|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -2|0]|0;
				tmp3[(tmp5+Lgeptoindex18|0)+ -3|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -3|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3-4|0;
				Lgeptoindex18=Lgeptoindex18-4|0;
				tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0]|0;
				if(tmp3!==tmp3||(tmp5+tmp1|0)!==(tmp5+Lgeptoindex18|0))continue;
				break;
			}
		}else{
			tmp8=Lgeptoindexphi-4|0;
			Lxtraiter=(tmp8>>>2)+1&7;
			if((Lxtraiter|0)!==0){
				Lgeptoindexphi3=tmp1;
				Lprol$piter=0;
				Lgeptoindexphi=0;
				while(1){
					tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0]|0;
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=tmp1;
				Lgeptoindexphi=0;
			}
			if(tmp8>>>0>=28)while(1){
				tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+1|0]=tmp2[(tmp0+Lgeptoindexphi|0)+1|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+2|0]=tmp2[(tmp0+Lgeptoindexphi|0)+2|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+3|0]=tmp2[(tmp0+Lgeptoindexphi|0)+3|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+4|0]=tmp2[(tmp0+Lgeptoindexphi|0)+4|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+5|0]=tmp2[(tmp0+Lgeptoindexphi|0)+5|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+6|0]=tmp2[(tmp0+Lgeptoindexphi|0)+6|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+7|0]=tmp2[(tmp0+Lgeptoindexphi|0)+7|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp3!==tmp3||(tmp5+Lgeptoindex18|0)!==(tmp5+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
	}
	Larg1.a1=tmp3;
	Larg1.a1o=tmp5+(tmp1<<2>>2)|0;
	tmp2=Larg0.a0;
	Lgeptoindexphi=Larg0.a0o|0;
	Larg0.a0=tmp3;
	Larg0.a0o=tmp5+(tmp1<<2>>2)|0;
	Larg1.a1=tmp2;
	Larg1.a1o=Lgeptoindexphi;
	tmp2=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	tmp3=Larg1.a2;
	tmp5=Larg1.a2o|0;
	Larg0.a1=tmp3;
	Larg0.a1o=tmp5;
	Larg1.a2=tmp2;
	Larg1.a2o=Lgeptoindexphi;
	tmp2=Larg0.a2.a0;
	Lgeptoindexphi=Larg0.a2.a0o|0;
	tmp3=Larg1.a3.a0;
	tmp5=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp3;
	Larg0.a2.a0o=tmp5;
	Larg1.a3.a0=tmp2;
	Larg1.a3.a0o=Lgeptoindexphi;
	tmp2=Larg1.a1;
	Lgeptoindexphi=Larg1.a1o|0;
	Larg1.a0=tmp2[Lgeptoindexphi];
}
function __ZNSt5dequeIPN6client11CoreMessageESaIS2_EE19__add_back_capacityEv(Larg0){
	var L$poptgepsqueezed14=null,tmp1=0,tmp2=0,tmp3=0,tmp4=null,L$poptgepsqueezed10=null,tmp6=null,Lgeptoindexphi=0,tmp8=null,tmp9=0;
	tmp3=Larg0.i4|0;
	tmp4=[nullObj];
	if(tmp3>>>0>1023){
		Larg0.i4=tmp3-1024|0;
		L$poptgepsqueezed10=Larg0.a1;
		tmp3=Larg0.a1o|0;
		tmp6=L$poptgepsqueezed10[tmp3];
		tmp4[0]=tmp6;
		Larg0.a1=L$poptgepsqueezed10;
		Larg0.a1o=tmp3+1|0;
		__ZNSt14__split_bufferIPPN6client11CoreMessageESaIS3_EE9push_backB7v160000ERKS3_(Larg0,tmp4,0);
	}else{
		L$poptgepsqueezed10=Larg0.a2;
		tmp3=Larg0.a2o|0;
		tmp6=Larg0.a1;
		Lgeptoindexphi=Larg0.a1o|0;
		tmp3=(__imul(tmp3,4));
		Lgeptoindexphi=tmp3-(__imul(Lgeptoindexphi,4))|0;
		L$poptgepsqueezed14=Larg0.a3;
		tmp8=L$poptgepsqueezed14.a0;
		tmp9=L$poptgepsqueezed14.a0o|0;
		L$poptgepsqueezed10=Larg0.a0;
		tmp1=(__imul(0,4));
		tmp9=(__imul(tmp9,4));
		tmp2=tmp9-tmp1|0;
		if(Lgeptoindexphi>>>0<tmp2>>>0){
			if((tmp9|0)===(tmp3|0)){
				L$poptgepsqueezed10=createPointerArray([],0,1024,nullObj);
				tmp4[0]={d:L$poptgepsqueezed10,o:0};
				__ZNSt14__split_bufferIPPN6client11CoreMessageESaIS3_EE10push_frontEOS3_(Larg0,tmp4,0);
				L$poptgepsqueezed10=Larg0.a1;
				tmp3=Larg0.a1o|0;
				tmp6=L$poptgepsqueezed10[tmp3];
				tmp4[0]=tmp6;
				Larg0.a1=L$poptgepsqueezed10;
				Larg0.a1o=tmp3+1|0;
				__ZNSt14__split_bufferIPPN6client11CoreMessageESaIS3_EE9push_backB7v160000ERKS3_(Larg0,tmp4,0);
			}else{
				L$poptgepsqueezed10=createPointerArray([],0,1024,nullObj);
				tmp4[0]={d:L$poptgepsqueezed10,o:0};
				__ZNSt14__split_bufferIPPN6client11CoreMessageESaIS3_EE9push_backEOS3_(Larg0,tmp4,0);
			}
		}else{
			tmp8={a0:nullArray,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp8={a0:null}}};
			tmp3=(tmp9|0)===(tmp1|0)?1|0:tmp2>>1|0;
			L$poptgepsqueezed10=tmp8.a3;
			L$poptgepsqueezed10.a1.a0=L$poptgepsqueezed14;
			if(tmp3>>>0>1073741823)__ZSt28__throw_bad_array_new_lengthB7v160000v();
			;
			tmp6=createPointerArray([],0,(tmp3<<2)/4|0,null);
			tmp8.a0=tmp6;
			tmp8.a2=tmp6;
			tmp8.a2o=0+(Lgeptoindexphi>>2)|0;
			tmp8.a1=tmp6;
			tmp8.a1o=0+(Lgeptoindexphi>>2)|0;
			L$poptgepsqueezed10.a0=tmp6;
			L$poptgepsqueezed10.a0o=0+tmp3|0;
			tmp6=createPointerArray([],0,1024,nullObj);
			tmp4[0]={d:tmp6,o:0};
			__ZNSt14__split_bufferIPPN6client11CoreMessageERSaIS3_EE9push_backEOS3_(tmp8,tmp4,0);
			tmp6=Larg0.a2;
			tmp3=Larg0.a2o|0;
			tmp4=Larg0.a1;
			Lgeptoindexphi=Larg0.a1o|0;
			if(tmp6!==tmp4||tmp3!==Lgeptoindexphi){
				Lgeptoindexphi=0;
				while(1){
					Lgeptoindexphi=Lgeptoindexphi-1|0;
					__ZNSt14__split_bufferIPPN6client11CoreMessageERSaIS3_EE10push_frontERKS3_(tmp8,tmp6,tmp3+Lgeptoindexphi|0);
					tmp4=Larg0.a1;
					tmp9=Larg0.a1o|0;
					if(tmp6!==tmp4||(tmp3+Lgeptoindexphi|0)!==tmp9)continue;
					break;
				}
			}
			tmp6=tmp8.a0;
			Larg0.a0=tmp6;
			tmp6=tmp8.a1;
			tmp3=tmp8.a1o|0;
			Larg0.a1=tmp6;
			Larg0.a1o=tmp3;
			tmp6=tmp8.a2;
			tmp3=tmp8.a2o|0;
			Larg0.a2=tmp6;
			Larg0.a2o=tmp3;
			tmp6=L$poptgepsqueezed10.a0;
			tmp3=L$poptgepsqueezed10.a0o|0;
			L$poptgepsqueezed14.a0=tmp6;
			L$poptgepsqueezed14.a0o=tmp3;
		}
	}
}
function __ZNSt14__split_bufferIPPN6client11CoreMessageESaIS3_EE9push_backB7v160000ERKS3_(Larg0,Larg1,Marg1){
	var tmp0=null,Lxtraiter=0,tmp2=null,tmp3=0,tmp4=null,Lgeptoindexphi3=0,Lgeptoindexphi=0,Lgeptoindex19=0,Lgeptoindexphi26=0,Lgeptoindex41=0,tmp10=0,Lprol$piter=0;
	tmp0=Larg0.a2;
	Lxtraiter=Larg0.a2o|0;
	tmp2=Larg0.a3.a0;
	tmp3=Larg0.a3.a0o|0;
	if(tmp0===tmp2&&Lxtraiter===tmp3){
		tmp2=Larg0.a1;
		tmp3=Larg0.a1o|0;
		tmp4=Larg0.a0;
		Lgeptoindexphi3=(__imul(0,4));
		if(tmp3>0){
			Lgeptoindexphi=(__imul(tmp3,4));
			Lgeptoindexphi3=Lgeptoindexphi-Lgeptoindexphi3|0;
			Lgeptoindex19=((Lgeptoindexphi3>>2)+1|0)/-2|0;
			Lgeptoindexphi=(__imul(Lxtraiter,4))-Lgeptoindexphi|0;
			if(Lgeptoindexphi>>>0>=4){
				Lgeptoindexphi26=Lgeptoindexphi>>>2;
				Lgeptoindex41=Lgeptoindex19+Lgeptoindexphi26|0;
				if((Lgeptoindexphi3|0)<-8){
					tmp10=Lgeptoindexphi-4|0;
					Lgeptoindexphi3=(tmp10>>>2)+1&3;
					if((Lgeptoindexphi3|0)!==0){
						Lxtraiter=0;
						while(1){
							Lgeptoindexphi26=Lgeptoindexphi26-1|0;
							Lgeptoindex41=Lgeptoindex41-1|0;
							tmp4=tmp2[tmp3+Lgeptoindexphi26|0];
							tmp2[tmp3+Lgeptoindex41|0]=tmp4;
							Lxtraiter=Lxtraiter+1|0;
							if((Lxtraiter|0)!==(Lgeptoindexphi3|0))continue;
							break;
						}
					}
					if(tmp10>>>0>=12)while(1){
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -1|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -1|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -2|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -2|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -3|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -3|0]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26-4|0;
						Lgeptoindex41=Lgeptoindex41-4|0;
						tmp4=tmp2[tmp3+Lgeptoindexphi26|0];
						tmp2[tmp3+Lgeptoindex41|0]=tmp4;
						if(tmp2!==tmp2||(tmp3+Lgeptoindex19|0)!==(tmp3+Lgeptoindex41|0))continue;
						break;
					}
				}else{
					tmp10=Lgeptoindexphi-4|0;
					Lxtraiter=(tmp10>>>2)+1&7;
					if((Lxtraiter|0)!==0){
						Lgeptoindexphi26=Lgeptoindex19;
						Lprol$piter=0;
						Lgeptoindexphi3=0;
						while(1){
							tmp4=tmp2[tmp3+Lgeptoindexphi3|0];
							tmp2[tmp3+Lgeptoindexphi26|0]=tmp4;
							Lprol$piter=Lprol$piter+1|0;
							Lgeptoindexphi26=Lgeptoindexphi26+1|0;
							Lgeptoindexphi3=Lgeptoindexphi3+1|0;
							if((Lprol$piter|0)!==(Lxtraiter|0))continue;
							break;
						}
					}else{
						Lgeptoindexphi26=Lgeptoindex19;
						Lgeptoindexphi3=0;
					}
					if(tmp10>>>0>=28)while(1){
						tmp4=tmp2[tmp3+Lgeptoindexphi3|0];
						tmp2[tmp3+Lgeptoindexphi26|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+1|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+1|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+2|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+2|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+3|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+3|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+4|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+4|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+5|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+5|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+6|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+6|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+7|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+7|0]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26+8|0;
						if(tmp2!==tmp2||(tmp3+Lgeptoindex41|0)!==(tmp3+Lgeptoindexphi26|0)){
							Lgeptoindexphi3=Lgeptoindexphi3+8|0;
							continue;
						}
						break;
					}
				}
			}
			Larg0.a2=tmp2;
			Larg0.a2o=(tmp3+Lgeptoindex19|0)+(Lgeptoindexphi>>2)|0;
			tmp4=Larg0.a1;
			Lgeptoindexphi3=Larg0.a1o|0;
			Larg0.a1=tmp4;
			Larg0.a1o=Lgeptoindexphi3+Lgeptoindex19|0;
			tmp0=tmp2;
			Lxtraiter=(tmp3+Lgeptoindex19|0)+(Lgeptoindexphi>>2)|0;
		}else{
			tmp3=(__imul(Lxtraiter,4));
			Lxtraiter=(tmp3|0)===(Lgeptoindexphi3|0)?1|0:tmp3-Lgeptoindexphi3>>1|0;
			if(Lxtraiter>>>0>1073741823)__ZSt28__throw_bad_array_new_lengthB7v160000v();
			;
			tmp0=createPointerArray([],0,(Lxtraiter<<2)/4|0,null);
			tmp3=Lxtraiter>>>2;
			tmp2=Larg0.a1;
			Lgeptoindex41=Larg0.a1o|0;
			tmp4=Larg0.a2;
			Lgeptoindexphi=Larg0.a2o|0;
			tmp10=(__imul(Lgeptoindex41,4));
			Lgeptoindexphi=(__imul(Lgeptoindexphi,4));
			Lgeptoindexphi3=Lgeptoindexphi-tmp10|0;
			Lgeptoindex19=tmp3+(Lgeptoindexphi3>>2)|0;
			if((Lgeptoindexphi|0)===(tmp10|0)){
				Lgeptoindex19=tmp3;
			}else{
				Lprol$piter=Lgeptoindexphi3-4|0;
				tmp10=(Lprol$piter>>>2)+1&7;
				if((tmp10|0)!==0){
					Lgeptoindexphi=tmp3;
					Lgeptoindexphi26=0;
					Lgeptoindexphi3=0;
					while(1){
						tmp4=tmp2[Lgeptoindex41+Lgeptoindexphi3|0];
						tmp0[Lgeptoindexphi]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26+1|0;
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if((Lgeptoindexphi26|0)!==(tmp10|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi=tmp3;
					Lgeptoindexphi3=0;
				}
				if(Lprol$piter>>>0>=28)while(1){
					tmp4=tmp2[Lgeptoindex41+Lgeptoindexphi3|0];
					tmp0[Lgeptoindexphi]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+1|0];
					tmp0[(0+Lgeptoindexphi|0)+1|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+2|0];
					tmp0[(0+Lgeptoindexphi|0)+2|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+3|0];
					tmp0[(0+Lgeptoindexphi|0)+3|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+4|0];
					tmp0[(0+Lgeptoindexphi|0)+4|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+5|0];
					tmp0[(0+Lgeptoindexphi|0)+5|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+6|0];
					tmp0[(0+Lgeptoindexphi|0)+6|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+7|0];
					tmp0[(0+Lgeptoindexphi|0)+7|0]=tmp4;
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					if(tmp0!==tmp0||(0+Lgeptoindexphi|0)!==(0+Lgeptoindex19|0)){
						Lgeptoindexphi3=Lgeptoindexphi3+8|0;
						continue;
					}
					break;
				}
			}
			Larg0.a0=tmp0;
			Larg0.a1=tmp0;
			Larg0.a1o=0+tmp3|0;
			Larg0.a2=tmp0;
			Larg0.a2o=0+Lgeptoindex19|0;
			Larg0.a3.a0=tmp0;
			Larg0.a3.a0o=0+Lxtraiter|0;
			Lxtraiter=0+Lgeptoindex19|0;
			tmp0=tmp0;
		}
	}
	tmp2=Larg1[Marg1];
	tmp0[Lxtraiter]=tmp2;
	tmp0=Larg0.a2;
	Lxtraiter=Larg0.a2o|0;
	Larg0.a2=tmp0;
	Larg0.a2o=Lxtraiter+1|0;
}
function __ZNSt14__split_bufferIPPN6client11CoreMessageESaIS3_EE9push_backEOS3_(Larg0,Larg1,Marg1){
	var tmp0=null,Lxtraiter=0,tmp2=null,tmp3=0,tmp4=null,Lgeptoindexphi3=0,Lgeptoindexphi=0,Lgeptoindex19=0,Lgeptoindexphi26=0,Lgeptoindex41=0,tmp10=0,Lprol$piter=0;
	tmp0=Larg0.a2;
	Lxtraiter=Larg0.a2o|0;
	tmp2=Larg0.a3.a0;
	tmp3=Larg0.a3.a0o|0;
	if(tmp0===tmp2&&Lxtraiter===tmp3){
		tmp2=Larg0.a1;
		tmp3=Larg0.a1o|0;
		tmp4=Larg0.a0;
		Lgeptoindexphi3=(__imul(0,4));
		if(tmp3>0){
			Lgeptoindexphi=(__imul(tmp3,4));
			Lgeptoindexphi3=Lgeptoindexphi-Lgeptoindexphi3|0;
			Lgeptoindex19=((Lgeptoindexphi3>>2)+1|0)/-2|0;
			Lgeptoindexphi=(__imul(Lxtraiter,4))-Lgeptoindexphi|0;
			if(Lgeptoindexphi>>>0>=4){
				Lgeptoindexphi26=Lgeptoindexphi>>>2;
				Lgeptoindex41=Lgeptoindex19+Lgeptoindexphi26|0;
				if((Lgeptoindexphi3|0)<-8){
					tmp10=Lgeptoindexphi-4|0;
					Lgeptoindexphi3=(tmp10>>>2)+1&3;
					if((Lgeptoindexphi3|0)!==0){
						Lxtraiter=0;
						while(1){
							Lgeptoindexphi26=Lgeptoindexphi26-1|0;
							Lgeptoindex41=Lgeptoindex41-1|0;
							tmp4=tmp2[tmp3+Lgeptoindexphi26|0];
							tmp2[tmp3+Lgeptoindex41|0]=tmp4;
							Lxtraiter=Lxtraiter+1|0;
							if((Lxtraiter|0)!==(Lgeptoindexphi3|0))continue;
							break;
						}
					}
					if(tmp10>>>0>=12)while(1){
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -1|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -1|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -2|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -2|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -3|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -3|0]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26-4|0;
						Lgeptoindex41=Lgeptoindex41-4|0;
						tmp4=tmp2[tmp3+Lgeptoindexphi26|0];
						tmp2[tmp3+Lgeptoindex41|0]=tmp4;
						if(tmp2!==tmp2||(tmp3+Lgeptoindex19|0)!==(tmp3+Lgeptoindex41|0))continue;
						break;
					}
				}else{
					tmp10=Lgeptoindexphi-4|0;
					Lxtraiter=(tmp10>>>2)+1&7;
					if((Lxtraiter|0)!==0){
						Lgeptoindexphi26=Lgeptoindex19;
						Lprol$piter=0;
						Lgeptoindexphi3=0;
						while(1){
							tmp4=tmp2[tmp3+Lgeptoindexphi3|0];
							tmp2[tmp3+Lgeptoindexphi26|0]=tmp4;
							Lprol$piter=Lprol$piter+1|0;
							Lgeptoindexphi26=Lgeptoindexphi26+1|0;
							Lgeptoindexphi3=Lgeptoindexphi3+1|0;
							if((Lprol$piter|0)!==(Lxtraiter|0))continue;
							break;
						}
					}else{
						Lgeptoindexphi26=Lgeptoindex19;
						Lgeptoindexphi3=0;
					}
					if(tmp10>>>0>=28)while(1){
						tmp4=tmp2[tmp3+Lgeptoindexphi3|0];
						tmp2[tmp3+Lgeptoindexphi26|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+1|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+1|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+2|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+2|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+3|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+3|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+4|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+4|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+5|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+5|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+6|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+6|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+7|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+7|0]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26+8|0;
						if(tmp2!==tmp2||(tmp3+Lgeptoindex41|0)!==(tmp3+Lgeptoindexphi26|0)){
							Lgeptoindexphi3=Lgeptoindexphi3+8|0;
							continue;
						}
						break;
					}
				}
			}
			Larg0.a2=tmp2;
			Larg0.a2o=(tmp3+Lgeptoindex19|0)+(Lgeptoindexphi>>2)|0;
			tmp4=Larg0.a1;
			Lgeptoindexphi3=Larg0.a1o|0;
			Larg0.a1=tmp4;
			Larg0.a1o=Lgeptoindexphi3+Lgeptoindex19|0;
			tmp0=tmp2;
			Lxtraiter=(tmp3+Lgeptoindex19|0)+(Lgeptoindexphi>>2)|0;
		}else{
			tmp3=(__imul(Lxtraiter,4));
			Lxtraiter=(tmp3|0)===(Lgeptoindexphi3|0)?1|0:tmp3-Lgeptoindexphi3>>1|0;
			if(Lxtraiter>>>0>1073741823)__ZSt28__throw_bad_array_new_lengthB7v160000v();
			;
			tmp0=createPointerArray([],0,(Lxtraiter<<2)/4|0,null);
			tmp3=Lxtraiter>>>2;
			tmp2=Larg0.a1;
			Lgeptoindex41=Larg0.a1o|0;
			tmp4=Larg0.a2;
			Lgeptoindexphi=Larg0.a2o|0;
			tmp10=(__imul(Lgeptoindex41,4));
			Lgeptoindexphi=(__imul(Lgeptoindexphi,4));
			Lgeptoindexphi3=Lgeptoindexphi-tmp10|0;
			Lgeptoindex19=tmp3+(Lgeptoindexphi3>>2)|0;
			if((Lgeptoindexphi|0)===(tmp10|0)){
				Lgeptoindex19=tmp3;
			}else{
				Lprol$piter=Lgeptoindexphi3-4|0;
				tmp10=(Lprol$piter>>>2)+1&7;
				if((tmp10|0)!==0){
					Lgeptoindexphi=tmp3;
					Lgeptoindexphi26=0;
					Lgeptoindexphi3=0;
					while(1){
						tmp4=tmp2[Lgeptoindex41+Lgeptoindexphi3|0];
						tmp0[Lgeptoindexphi]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26+1|0;
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if((Lgeptoindexphi26|0)!==(tmp10|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi=tmp3;
					Lgeptoindexphi3=0;
				}
				if(Lprol$piter>>>0>=28)while(1){
					tmp4=tmp2[Lgeptoindex41+Lgeptoindexphi3|0];
					tmp0[Lgeptoindexphi]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+1|0];
					tmp0[(0+Lgeptoindexphi|0)+1|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+2|0];
					tmp0[(0+Lgeptoindexphi|0)+2|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+3|0];
					tmp0[(0+Lgeptoindexphi|0)+3|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+4|0];
					tmp0[(0+Lgeptoindexphi|0)+4|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+5|0];
					tmp0[(0+Lgeptoindexphi|0)+5|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+6|0];
					tmp0[(0+Lgeptoindexphi|0)+6|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+7|0];
					tmp0[(0+Lgeptoindexphi|0)+7|0]=tmp4;
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					if(tmp0!==tmp0||(0+Lgeptoindexphi|0)!==(0+Lgeptoindex19|0)){
						Lgeptoindexphi3=Lgeptoindexphi3+8|0;
						continue;
					}
					break;
				}
			}
			Larg0.a0=tmp0;
			Larg0.a1=tmp0;
			Larg0.a1o=0+tmp3|0;
			Larg0.a2=tmp0;
			Larg0.a2o=0+Lgeptoindex19|0;
			Larg0.a3.a0=tmp0;
			Larg0.a3.a0o=0+Lxtraiter|0;
			Lxtraiter=0+Lgeptoindex19|0;
			tmp0=tmp0;
		}
	}
	tmp2=Larg1[Marg1];
	tmp0[Lxtraiter]=tmp2;
	tmp0=Larg0.a2;
	Lxtraiter=Larg0.a2o|0;
	Larg0.a2=tmp0;
	Larg0.a2o=Lxtraiter+1|0;
}
function __ZNSt14__split_bufferIPPN6client11CoreMessageESaIS3_EE10push_frontEOS3_(Larg0,Larg1,Marg1){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=null,Lgeptoindex=0,Lgeptoindexphi7=0,tmp7=0,Lgeptoindex23=0,Lgeptoindex45=0,Lprol$piter=0,Lprol$piter31=0,Lxtraiter=0;
	tmp0=Larg0.a1;
	tmp1=Larg0.a1o|0;
	tmp2=Larg0.a0;
	if(tmp0===tmp2&&tmp1===0){
		tmp2=Larg0.a2;
		tmp3=Larg0.a2o|0;
		tmp4=Larg0.a3.a0;
		Lgeptoindex=Larg0.a3.a0o|0;
		Lgeptoindexphi7=(__imul(Lgeptoindex,4));
		if(tmp3<Lgeptoindex){
			Lgeptoindex=(__imul(tmp3,4));
			tmp7=((Lgeptoindexphi7-Lgeptoindex>>2)+1|0)/2|0;
			Lgeptoindexphi7=(__imul(tmp1,4));
			if((Lgeptoindex|0)===(Lgeptoindexphi7|0)){
				tmp1=tmp3;
				tmp4=tmp2;
				Lgeptoindex=tmp7;
			}else{
				Lgeptoindex23=Lgeptoindex-Lgeptoindexphi7|0;
				Lgeptoindex=tmp7+(-(Lgeptoindex23>>2)|0)|0;
				if(Lgeptoindex23>>>0>=4){
					Lgeptoindexphi7=Lgeptoindex23>>>2;
					Lgeptoindex45=Lgeptoindex+Lgeptoindexphi7|0;
					if(tmp1<(tmp3+Lgeptoindex|0)){
						Lgeptoindex23=Lgeptoindex23-4|0;
						Lprol$piter=(Lgeptoindex23>>>2)+1&3;
						if((Lprol$piter|0)!==0){
							Lprol$piter31=0;
							while(1){
								Lgeptoindexphi7=Lgeptoindexphi7-1|0;
								Lgeptoindex45=Lgeptoindex45-1|0;
								tmp4=tmp0[tmp1+Lgeptoindexphi7|0];
								tmp2[tmp3+Lgeptoindex45|0]=tmp4;
								Lprol$piter31=Lprol$piter31+1|0;
								if((Lprol$piter31|0)!==(Lprol$piter|0))continue;
								break;
							}
						}
						if(Lgeptoindex23>>>0>=12)while(1){
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+ -1|0];
							tmp2[(tmp3+Lgeptoindex45|0)+ -1|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+ -2|0];
							tmp2[(tmp3+Lgeptoindex45|0)+ -2|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+ -3|0];
							tmp2[(tmp3+Lgeptoindex45|0)+ -3|0]=tmp4;
							Lgeptoindexphi7=Lgeptoindexphi7-4|0;
							Lgeptoindex45=Lgeptoindex45-4|0;
							tmp4=tmp0[tmp1+Lgeptoindexphi7|0];
							tmp2[tmp3+Lgeptoindex45|0]=tmp4;
							if(tmp2!==tmp2||(tmp3+Lgeptoindex|0)!==(tmp3+Lgeptoindex45|0))continue;
							break;
						}
					}else{
						Lprol$piter31=Lgeptoindex23-4|0;
						Lxtraiter=(Lprol$piter31>>>2)+1&7;
						if((Lxtraiter|0)!==0){
							Lgeptoindex23=Lgeptoindex;
							Lprol$piter=0;
							Lgeptoindexphi7=0;
							while(1){
								tmp4=tmp0[tmp1+Lgeptoindexphi7|0];
								tmp2[tmp3+Lgeptoindex23|0]=tmp4;
								Lprol$piter=Lprol$piter+1|0;
								Lgeptoindex23=Lgeptoindex23+1|0;
								Lgeptoindexphi7=Lgeptoindexphi7+1|0;
								if((Lprol$piter|0)!==(Lxtraiter|0))continue;
								break;
							}
						}else{
							Lgeptoindex23=Lgeptoindex;
							Lgeptoindexphi7=0;
						}
						if(Lprol$piter31>>>0>=28)while(1){
							tmp4=tmp0[tmp1+Lgeptoindexphi7|0];
							tmp2[tmp3+Lgeptoindex23|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+1|0];
							tmp2[(tmp3+Lgeptoindex23|0)+1|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+2|0];
							tmp2[(tmp3+Lgeptoindex23|0)+2|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+3|0];
							tmp2[(tmp3+Lgeptoindex23|0)+3|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+4|0];
							tmp2[(tmp3+Lgeptoindex23|0)+4|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+5|0];
							tmp2[(tmp3+Lgeptoindex23|0)+5|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+6|0];
							tmp2[(tmp3+Lgeptoindex23|0)+6|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+7|0];
							tmp2[(tmp3+Lgeptoindex23|0)+7|0]=tmp4;
							Lgeptoindex23=Lgeptoindex23+8|0;
							if(tmp2!==tmp2||(tmp3+Lgeptoindex45|0)!==(tmp3+Lgeptoindex23|0)){
								Lgeptoindexphi7=Lgeptoindexphi7+8|0;
								continue;
							}
							break;
						}
					}
				}
				tmp4=Larg0.a2;
				tmp1=Larg0.a2o|0;
			}
			Larg0.a1=tmp2;
			Larg0.a1o=(tmp3+tmp7|0)+((__imul(tmp3+Lgeptoindex|0,4))-(__imul(tmp3+tmp7|0,4))>>2)|0;
			Larg0.a2=tmp4;
			Larg0.a2o=tmp1+tmp7|0;
			tmp0=tmp2;
			tmp1=(tmp3+tmp7|0)+((__imul(tmp3+Lgeptoindex|0,4))-(__imul(tmp3+tmp7|0,4))>>2)|0;
		}else{
			tmp1=(__imul(tmp1,4));
			tmp1=(Lgeptoindexphi7|0)===(tmp1|0)?1|0:Lgeptoindexphi7-tmp1>>1|0;
			if(tmp1>>>0>1073741823)__ZSt28__throw_bad_array_new_lengthB7v160000v();
			;
			tmp0=createPointerArray([],0,(tmp1<<2)/4|0,null);
			tmp3=tmp1+3>>>2;
			tmp2=Larg0.a1;
			tmp7=Larg0.a1o|0;
			tmp4=Larg0.a2;
			Lgeptoindex=Larg0.a2o|0;
			Lprol$piter=(__imul(tmp7,4));
			Lgeptoindex=(__imul(Lgeptoindex,4));
			Lgeptoindexphi7=Lgeptoindex-Lprol$piter|0;
			Lgeptoindex23=tmp3+(Lgeptoindexphi7>>2)|0;
			if((Lgeptoindex|0)===(Lprol$piter|0)){
				Lgeptoindex23=tmp3;
			}else{
				Lprol$piter31=Lgeptoindexphi7-4|0;
				Lprol$piter=(Lprol$piter31>>>2)+1&7;
				if((Lprol$piter|0)!==0){
					Lgeptoindex=tmp3;
					Lxtraiter=0;
					Lgeptoindexphi7=0;
					while(1){
						tmp4=tmp2[tmp7+Lgeptoindexphi7|0];
						tmp0[Lgeptoindex]=tmp4;
						Lxtraiter=Lxtraiter+1|0;
						Lgeptoindexphi7=Lgeptoindexphi7+1|0;
						Lgeptoindex=Lgeptoindex+1|0;
						if((Lxtraiter|0)!==(Lprol$piter|0))continue;
						break;
					}
				}else{
					Lgeptoindex=tmp3;
					Lgeptoindexphi7=0;
				}
				if(Lprol$piter31>>>0>=28)while(1){
					tmp4=tmp2[tmp7+Lgeptoindexphi7|0];
					tmp0[Lgeptoindex]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+1|0];
					tmp0[(0+Lgeptoindex|0)+1|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+2|0];
					tmp0[(0+Lgeptoindex|0)+2|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+3|0];
					tmp0[(0+Lgeptoindex|0)+3|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+4|0];
					tmp0[(0+Lgeptoindex|0)+4|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+5|0];
					tmp0[(0+Lgeptoindex|0)+5|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+6|0];
					tmp0[(0+Lgeptoindex|0)+6|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+7|0];
					tmp0[(0+Lgeptoindex|0)+7|0]=tmp4;
					Lgeptoindex=Lgeptoindex+8|0;
					if(tmp0!==tmp0||(0+Lgeptoindex|0)!==(0+Lgeptoindex23|0)){
						Lgeptoindexphi7=Lgeptoindexphi7+8|0;
						continue;
					}
					break;
				}
			}
			Larg0.a0=tmp0;
			Larg0.a1=tmp0;
			Larg0.a1o=0+tmp3|0;
			Larg0.a2=tmp0;
			Larg0.a2o=0+Lgeptoindex23|0;
			Larg0.a3.a0=tmp0;
			Larg0.a3.a0o=0+tmp1|0;
			tmp1=0+tmp3|0;
			tmp0=tmp0;
		}
	}
	tmp2=Larg1[Marg1];
	tmp0[tmp1+ -1|0]=tmp2;
	tmp0=Larg0.a1;
	tmp1=Larg0.a1o|0;
	Larg0.a1=tmp0;
	Larg0.a1o=tmp1+ -1|0;
}
function __ZSt28__throw_bad_array_new_lengthB7v160000v(){
	_abort();
	;
}
function __ZNSt14__split_bufferIPPN6client11CoreMessageERSaIS3_EE9push_backEOS3_(Larg0,Larg1,Marg1){
	var tmp0=null,Lxtraiter=0,tmp2=null,tmp3=0,tmp4=null,Lgeptoindexphi3=0,Lgeptoindexphi=0,Lgeptoindex19=0,Lgeptoindexphi26=0,Lgeptoindex41=0,tmp10=0,Lprol$piter=0;
	tmp0=Larg0.a2;
	Lxtraiter=Larg0.a2o|0;
	tmp2=Larg0.a3.a0;
	tmp3=Larg0.a3.a0o|0;
	if(tmp0===tmp2&&Lxtraiter===tmp3){
		tmp2=Larg0.a1;
		tmp3=Larg0.a1o|0;
		tmp4=Larg0.a0;
		Lgeptoindexphi3=(__imul(0,4));
		if(tmp3>0){
			Lgeptoindexphi=(__imul(tmp3,4));
			Lgeptoindexphi3=Lgeptoindexphi-Lgeptoindexphi3|0;
			Lgeptoindex19=((Lgeptoindexphi3>>2)+1|0)/-2|0;
			Lgeptoindexphi=(__imul(Lxtraiter,4))-Lgeptoindexphi|0;
			if(Lgeptoindexphi>>>0>=4){
				Lgeptoindexphi26=Lgeptoindexphi>>>2;
				Lgeptoindex41=Lgeptoindex19+Lgeptoindexphi26|0;
				if((Lgeptoindexphi3|0)<-8){
					tmp10=Lgeptoindexphi-4|0;
					Lgeptoindexphi3=(tmp10>>>2)+1&3;
					if((Lgeptoindexphi3|0)!==0){
						Lxtraiter=0;
						while(1){
							Lgeptoindexphi26=Lgeptoindexphi26-1|0;
							Lgeptoindex41=Lgeptoindex41-1|0;
							tmp4=tmp2[tmp3+Lgeptoindexphi26|0];
							tmp2[tmp3+Lgeptoindex41|0]=tmp4;
							Lxtraiter=Lxtraiter+1|0;
							if((Lxtraiter|0)!==(Lgeptoindexphi3|0))continue;
							break;
						}
					}
					if(tmp10>>>0>=12)while(1){
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -1|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -1|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -2|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -2|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi26|0)+ -3|0];
						tmp2[(tmp3+Lgeptoindex41|0)+ -3|0]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26-4|0;
						Lgeptoindex41=Lgeptoindex41-4|0;
						tmp4=tmp2[tmp3+Lgeptoindexphi26|0];
						tmp2[tmp3+Lgeptoindex41|0]=tmp4;
						if(tmp2!==tmp2||(tmp3+Lgeptoindex19|0)!==(tmp3+Lgeptoindex41|0))continue;
						break;
					}
				}else{
					tmp10=Lgeptoindexphi-4|0;
					Lxtraiter=(tmp10>>>2)+1&7;
					if((Lxtraiter|0)!==0){
						Lgeptoindexphi26=Lgeptoindex19;
						Lprol$piter=0;
						Lgeptoindexphi3=0;
						while(1){
							tmp4=tmp2[tmp3+Lgeptoindexphi3|0];
							tmp2[tmp3+Lgeptoindexphi26|0]=tmp4;
							Lprol$piter=Lprol$piter+1|0;
							Lgeptoindexphi26=Lgeptoindexphi26+1|0;
							Lgeptoindexphi3=Lgeptoindexphi3+1|0;
							if((Lprol$piter|0)!==(Lxtraiter|0))continue;
							break;
						}
					}else{
						Lgeptoindexphi26=Lgeptoindex19;
						Lgeptoindexphi3=0;
					}
					if(tmp10>>>0>=28)while(1){
						tmp4=tmp2[tmp3+Lgeptoindexphi3|0];
						tmp2[tmp3+Lgeptoindexphi26|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+1|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+1|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+2|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+2|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+3|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+3|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+4|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+4|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+5|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+5|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+6|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+6|0]=tmp4;
						tmp4=tmp2[(tmp3+Lgeptoindexphi3|0)+7|0];
						tmp2[(tmp3+Lgeptoindexphi26|0)+7|0]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26+8|0;
						if(tmp2!==tmp2||(tmp3+Lgeptoindex41|0)!==(tmp3+Lgeptoindexphi26|0)){
							Lgeptoindexphi3=Lgeptoindexphi3+8|0;
							continue;
						}
						break;
					}
				}
			}
			Larg0.a2=tmp2;
			Larg0.a2o=(tmp3+Lgeptoindex19|0)+(Lgeptoindexphi>>2)|0;
			tmp4=Larg0.a1;
			Lgeptoindexphi3=Larg0.a1o|0;
			Larg0.a1=tmp4;
			Larg0.a1o=Lgeptoindexphi3+Lgeptoindex19|0;
			tmp0=tmp2;
			Lxtraiter=(tmp3+Lgeptoindex19|0)+(Lgeptoindexphi>>2)|0;
		}else{
			tmp3=(__imul(Lxtraiter,4));
			Lxtraiter=(tmp3|0)===(Lgeptoindexphi3|0)?1|0:tmp3-Lgeptoindexphi3>>1|0;
			if(Lxtraiter>>>0>1073741823)__ZSt28__throw_bad_array_new_lengthB7v160000v();
			;
			tmp0=createPointerArray([],0,(Lxtraiter<<2)/4|0,null);
			tmp3=Lxtraiter>>>2;
			tmp2=Larg0.a1;
			Lgeptoindex41=Larg0.a1o|0;
			tmp4=Larg0.a2;
			Lgeptoindexphi=Larg0.a2o|0;
			tmp10=(__imul(Lgeptoindex41,4));
			Lgeptoindexphi=(__imul(Lgeptoindexphi,4));
			Lgeptoindexphi3=Lgeptoindexphi-tmp10|0;
			Lgeptoindex19=tmp3+(Lgeptoindexphi3>>2)|0;
			if((Lgeptoindexphi|0)===(tmp10|0)){
				Lgeptoindex19=tmp3;
			}else{
				Lprol$piter=Lgeptoindexphi3-4|0;
				tmp10=(Lprol$piter>>>2)+1&7;
				if((tmp10|0)!==0){
					Lgeptoindexphi=tmp3;
					Lgeptoindexphi26=0;
					Lgeptoindexphi3=0;
					while(1){
						tmp4=tmp2[Lgeptoindex41+Lgeptoindexphi3|0];
						tmp0[Lgeptoindexphi]=tmp4;
						Lgeptoindexphi26=Lgeptoindexphi26+1|0;
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if((Lgeptoindexphi26|0)!==(tmp10|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi=tmp3;
					Lgeptoindexphi3=0;
				}
				if(Lprol$piter>>>0>=28)while(1){
					tmp4=tmp2[Lgeptoindex41+Lgeptoindexphi3|0];
					tmp0[Lgeptoindexphi]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+1|0];
					tmp0[(0+Lgeptoindexphi|0)+1|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+2|0];
					tmp0[(0+Lgeptoindexphi|0)+2|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+3|0];
					tmp0[(0+Lgeptoindexphi|0)+3|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+4|0];
					tmp0[(0+Lgeptoindexphi|0)+4|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+5|0];
					tmp0[(0+Lgeptoindexphi|0)+5|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+6|0];
					tmp0[(0+Lgeptoindexphi|0)+6|0]=tmp4;
					tmp4=tmp2[(Lgeptoindex41+Lgeptoindexphi3|0)+7|0];
					tmp0[(0+Lgeptoindexphi|0)+7|0]=tmp4;
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					if(tmp0!==tmp0||(0+Lgeptoindexphi|0)!==(0+Lgeptoindex19|0)){
						Lgeptoindexphi3=Lgeptoindexphi3+8|0;
						continue;
					}
					break;
				}
			}
			Larg0.a0=tmp0;
			Larg0.a1=tmp0;
			Larg0.a1o=0+tmp3|0;
			Larg0.a2=tmp0;
			Larg0.a2o=0+Lgeptoindex19|0;
			Larg0.a3.a0=tmp0;
			Larg0.a3.a0o=0+Lxtraiter|0;
			Lxtraiter=0+Lgeptoindex19|0;
			tmp0=tmp0;
		}
	}
	tmp2=Larg1[Marg1];
	tmp0[Lxtraiter]=tmp2;
	tmp0=Larg0.a2;
	Lxtraiter=Larg0.a2o|0;
	Larg0.a2=tmp0;
	Larg0.a2o=Lxtraiter+1|0;
}
function __ZNSt14__split_bufferIPPN6client11CoreMessageERSaIS3_EE10push_frontERKS3_(Larg0,Larg1,Marg1){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=null,Lgeptoindex=0,Lgeptoindexphi7=0,tmp7=0,Lgeptoindex23=0,Lgeptoindex45=0,Lprol$piter=0,Lprol$piter31=0,Lxtraiter=0;
	tmp0=Larg0.a1;
	tmp1=Larg0.a1o|0;
	tmp2=Larg0.a0;
	if(tmp0===tmp2&&tmp1===0){
		tmp2=Larg0.a2;
		tmp3=Larg0.a2o|0;
		tmp4=Larg0.a3.a0;
		Lgeptoindex=Larg0.a3.a0o|0;
		Lgeptoindexphi7=(__imul(Lgeptoindex,4));
		if(tmp3<Lgeptoindex){
			Lgeptoindex=(__imul(tmp3,4));
			tmp7=((Lgeptoindexphi7-Lgeptoindex>>2)+1|0)/2|0;
			Lgeptoindexphi7=(__imul(tmp1,4));
			if((Lgeptoindex|0)===(Lgeptoindexphi7|0)){
				tmp1=tmp3;
				tmp4=tmp2;
				Lgeptoindex=tmp7;
			}else{
				Lgeptoindex23=Lgeptoindex-Lgeptoindexphi7|0;
				Lgeptoindex=tmp7+(-(Lgeptoindex23>>2)|0)|0;
				if(Lgeptoindex23>>>0>=4){
					Lgeptoindexphi7=Lgeptoindex23>>>2;
					Lgeptoindex45=Lgeptoindex+Lgeptoindexphi7|0;
					if(tmp1<(tmp3+Lgeptoindex|0)){
						Lgeptoindex23=Lgeptoindex23-4|0;
						Lprol$piter=(Lgeptoindex23>>>2)+1&3;
						if((Lprol$piter|0)!==0){
							Lprol$piter31=0;
							while(1){
								Lgeptoindexphi7=Lgeptoindexphi7-1|0;
								Lgeptoindex45=Lgeptoindex45-1|0;
								tmp4=tmp0[tmp1+Lgeptoindexphi7|0];
								tmp2[tmp3+Lgeptoindex45|0]=tmp4;
								Lprol$piter31=Lprol$piter31+1|0;
								if((Lprol$piter31|0)!==(Lprol$piter|0))continue;
								break;
							}
						}
						if(Lgeptoindex23>>>0>=12)while(1){
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+ -1|0];
							tmp2[(tmp3+Lgeptoindex45|0)+ -1|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+ -2|0];
							tmp2[(tmp3+Lgeptoindex45|0)+ -2|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+ -3|0];
							tmp2[(tmp3+Lgeptoindex45|0)+ -3|0]=tmp4;
							Lgeptoindexphi7=Lgeptoindexphi7-4|0;
							Lgeptoindex45=Lgeptoindex45-4|0;
							tmp4=tmp0[tmp1+Lgeptoindexphi7|0];
							tmp2[tmp3+Lgeptoindex45|0]=tmp4;
							if(tmp2!==tmp2||(tmp3+Lgeptoindex|0)!==(tmp3+Lgeptoindex45|0))continue;
							break;
						}
					}else{
						Lprol$piter31=Lgeptoindex23-4|0;
						Lxtraiter=(Lprol$piter31>>>2)+1&7;
						if((Lxtraiter|0)!==0){
							Lgeptoindex23=Lgeptoindex;
							Lprol$piter=0;
							Lgeptoindexphi7=0;
							while(1){
								tmp4=tmp0[tmp1+Lgeptoindexphi7|0];
								tmp2[tmp3+Lgeptoindex23|0]=tmp4;
								Lprol$piter=Lprol$piter+1|0;
								Lgeptoindex23=Lgeptoindex23+1|0;
								Lgeptoindexphi7=Lgeptoindexphi7+1|0;
								if((Lprol$piter|0)!==(Lxtraiter|0))continue;
								break;
							}
						}else{
							Lgeptoindex23=Lgeptoindex;
							Lgeptoindexphi7=0;
						}
						if(Lprol$piter31>>>0>=28)while(1){
							tmp4=tmp0[tmp1+Lgeptoindexphi7|0];
							tmp2[tmp3+Lgeptoindex23|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+1|0];
							tmp2[(tmp3+Lgeptoindex23|0)+1|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+2|0];
							tmp2[(tmp3+Lgeptoindex23|0)+2|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+3|0];
							tmp2[(tmp3+Lgeptoindex23|0)+3|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+4|0];
							tmp2[(tmp3+Lgeptoindex23|0)+4|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+5|0];
							tmp2[(tmp3+Lgeptoindex23|0)+5|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+6|0];
							tmp2[(tmp3+Lgeptoindex23|0)+6|0]=tmp4;
							tmp4=tmp0[(tmp1+Lgeptoindexphi7|0)+7|0];
							tmp2[(tmp3+Lgeptoindex23|0)+7|0]=tmp4;
							Lgeptoindex23=Lgeptoindex23+8|0;
							if(tmp2!==tmp2||(tmp3+Lgeptoindex45|0)!==(tmp3+Lgeptoindex23|0)){
								Lgeptoindexphi7=Lgeptoindexphi7+8|0;
								continue;
							}
							break;
						}
					}
				}
				tmp4=Larg0.a2;
				tmp1=Larg0.a2o|0;
			}
			Larg0.a1=tmp2;
			Larg0.a1o=(tmp3+tmp7|0)+((__imul(tmp3+Lgeptoindex|0,4))-(__imul(tmp3+tmp7|0,4))>>2)|0;
			Larg0.a2=tmp4;
			Larg0.a2o=tmp1+tmp7|0;
			tmp0=tmp2;
			tmp1=(tmp3+tmp7|0)+((__imul(tmp3+Lgeptoindex|0,4))-(__imul(tmp3+tmp7|0,4))>>2)|0;
		}else{
			tmp1=(__imul(tmp1,4));
			tmp1=(Lgeptoindexphi7|0)===(tmp1|0)?1|0:Lgeptoindexphi7-tmp1>>1|0;
			if(tmp1>>>0>1073741823)__ZSt28__throw_bad_array_new_lengthB7v160000v();
			;
			tmp0=createPointerArray([],0,(tmp1<<2)/4|0,null);
			tmp3=tmp1+3>>>2;
			tmp2=Larg0.a1;
			tmp7=Larg0.a1o|0;
			tmp4=Larg0.a2;
			Lgeptoindex=Larg0.a2o|0;
			Lprol$piter=(__imul(tmp7,4));
			Lgeptoindex=(__imul(Lgeptoindex,4));
			Lgeptoindexphi7=Lgeptoindex-Lprol$piter|0;
			Lgeptoindex23=tmp3+(Lgeptoindexphi7>>2)|0;
			if((Lgeptoindex|0)===(Lprol$piter|0)){
				Lgeptoindex23=tmp3;
			}else{
				Lprol$piter31=Lgeptoindexphi7-4|0;
				Lprol$piter=(Lprol$piter31>>>2)+1&7;
				if((Lprol$piter|0)!==0){
					Lgeptoindex=tmp3;
					Lxtraiter=0;
					Lgeptoindexphi7=0;
					while(1){
						tmp4=tmp2[tmp7+Lgeptoindexphi7|0];
						tmp0[Lgeptoindex]=tmp4;
						Lxtraiter=Lxtraiter+1|0;
						Lgeptoindexphi7=Lgeptoindexphi7+1|0;
						Lgeptoindex=Lgeptoindex+1|0;
						if((Lxtraiter|0)!==(Lprol$piter|0))continue;
						break;
					}
				}else{
					Lgeptoindex=tmp3;
					Lgeptoindexphi7=0;
				}
				if(Lprol$piter31>>>0>=28)while(1){
					tmp4=tmp2[tmp7+Lgeptoindexphi7|0];
					tmp0[Lgeptoindex]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+1|0];
					tmp0[(0+Lgeptoindex|0)+1|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+2|0];
					tmp0[(0+Lgeptoindex|0)+2|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+3|0];
					tmp0[(0+Lgeptoindex|0)+3|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+4|0];
					tmp0[(0+Lgeptoindex|0)+4|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+5|0];
					tmp0[(0+Lgeptoindex|0)+5|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+6|0];
					tmp0[(0+Lgeptoindex|0)+6|0]=tmp4;
					tmp4=tmp2[(tmp7+Lgeptoindexphi7|0)+7|0];
					tmp0[(0+Lgeptoindex|0)+7|0]=tmp4;
					Lgeptoindex=Lgeptoindex+8|0;
					if(tmp0!==tmp0||(0+Lgeptoindex|0)!==(0+Lgeptoindex23|0)){
						Lgeptoindexphi7=Lgeptoindexphi7+8|0;
						continue;
					}
					break;
				}
			}
			Larg0.a0=tmp0;
			Larg0.a1=tmp0;
			Larg0.a1o=0+tmp3|0;
			Larg0.a2=tmp0;
			Larg0.a2o=0+Lgeptoindex23|0;
			Larg0.a3.a0=tmp0;
			Larg0.a3.a0o=0+tmp1|0;
			tmp1=0+tmp3|0;
			tmp0=tmp0;
		}
	}
	tmp2=Larg1[Marg1];
	tmp0[tmp1+ -1|0]=tmp2;
	tmp0=Larg0.a1;
	tmp1=Larg0.a1o|0;
	Larg0.a1=tmp0;
	Larg0.a1o=tmp1+ -1|0;
}
function __ZN7CheerpX5Linux14EventCallbacks18getEventTypeByNameERKN6client6StringE(Larg0){
	var tmp0=null,tmp1=-0.;
	tmp0="processCreated";
	tmp1=+Larg0.localeCompare(tmp0);
	if(tmp1===0)return 0|0;
	tmp0="cpuActivity";
	tmp1=+Larg0.localeCompare(tmp0);
	if(tmp1===0)return 1|0;
	tmp0="diskActivity";
	tmp1=+Larg0.localeCompare(tmp0);
	if(tmp1===0)return 2|0;
	tmp0="diskLatency";
	tmp1=+Larg0.localeCompare(tmp0);
	if(tmp1===0)return 3|0;
	console.warn("Invalid event:",Larg0);
	return 4|0;
}
function __ZN7CheerpX5Linux14EventCallbacks14removeCallbackEPN6client13EventListenerE(Larg0,Larg1){
	var L$poptgep$poptgep$poptgepsqueezed=null,tmp1=null,tmp2=0,tmp3=0,Lxtraiter=0,L$ppre_0=null,tmp6=0,Lgeptoindexphi=0,Lgeptoindex6=0,Lgeptoindexphi9=0,Lprol$piter=0;
	L$poptgep$poptgep$poptgepsqueezed=Larg0.a1;
	tmp1=L$poptgep$poptgep$poptgepsqueezed.a0;
	tmp2=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
	L$ppre_0=L$poptgep$poptgep$poptgepsqueezed.a1;
	tmp6=L$poptgep$poptgep$poptgepsqueezed.a1o|0;
	if(tmp1===L$ppre_0&&tmp2===tmp6)return (tmp1===tmp1&&tmp2===tmp2?1:0)|0;
	Lgeptoindexphi=0;
	while(1){
		if(tmp1[tmp2+Lgeptoindexphi|0]===Larg1){
			Lgeptoindexphi=(__imul(tmp2+Lgeptoindexphi|0,4))-(__imul(tmp2,4))>>2;
			Lgeptoindex6=Lgeptoindexphi+1|0;
			tmp6=(__imul(tmp6,4))-(__imul(tmp2+Lgeptoindex6|0,4))|0;
			if(tmp6>>>0<4){
				L$ppre_0=tmp1;
				Lgeptoindex6=tmp2;
			}else{
				tmp3=tmp6-4|0;
				Lxtraiter=(tmp3>>>2)+1&7;
				if((Lxtraiter|0)!==0){
					Lgeptoindexphi9=Lgeptoindexphi;
					Lprol$piter=0;
					while(1){
						tmp1[tmp2+Lgeptoindexphi9|0]=tmp1[tmp2+Lgeptoindex6|0];
						Lprol$piter=Lprol$piter+1|0;
						Lgeptoindexphi9=Lgeptoindexphi9+1|0;
						Lgeptoindex6=Lgeptoindex6+1|0;
						if((Lprol$piter|0)!==(Lxtraiter|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi9=Lgeptoindexphi;
				}
				if(tmp3>>>0>=28)while(1){
					tmp1[tmp2+Lgeptoindexphi9|0]=tmp1[tmp2+Lgeptoindex6|0];
					tmp1[(tmp2+Lgeptoindexphi9|0)+1|0]=tmp1[(tmp2+Lgeptoindex6|0)+1|0];
					tmp1[(tmp2+Lgeptoindexphi9|0)+2|0]=tmp1[(tmp2+Lgeptoindex6|0)+2|0];
					tmp1[(tmp2+Lgeptoindexphi9|0)+3|0]=tmp1[(tmp2+Lgeptoindex6|0)+3|0];
					tmp1[(tmp2+Lgeptoindexphi9|0)+4|0]=tmp1[(tmp2+Lgeptoindex6|0)+4|0];
					tmp1[(tmp2+Lgeptoindexphi9|0)+5|0]=tmp1[(tmp2+Lgeptoindex6|0)+5|0];
					tmp1[(tmp2+Lgeptoindexphi9|0)+6|0]=tmp1[(tmp2+Lgeptoindex6|0)+6|0];
					tmp1[(tmp2+Lgeptoindexphi9|0)+7|0]=tmp1[(tmp2+Lgeptoindex6|0)+7|0];
					Lgeptoindexphi9=Lgeptoindexphi9+8|0;
					if(tmp1!==tmp1||((tmp2+Lgeptoindexphi|0)+(tmp6>>>2)|0)!==(tmp2+Lgeptoindexphi9|0)){
						Lgeptoindex6=Lgeptoindex6+8|0;
						continue;
					}
					break;
				}
				L$ppre_0=L$poptgep$poptgep$poptgepsqueezed.a0;
				Lgeptoindex6=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
			}
			L$poptgep$poptgep$poptgepsqueezed.a1=tmp1;
			L$poptgep$poptgep$poptgepsqueezed.a1o=(tmp2+Lgeptoindexphi|0)+(tmp6>>2)|0;
			return (L$ppre_0===tmp1&&Lgeptoindex6===((tmp2+Lgeptoindexphi|0)+(tmp6>>2)|0)?1:0)|0;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(tmp1!==L$ppre_0||(tmp2+Lgeptoindexphi|0)!==tmp6)continue;
		break;
	}
	return (tmp1===L$ppre_0&&tmp2===tmp6?1:0)|0;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux18setActivateConsoleEPFvjEE3$_0JjEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=Larg0.a0.a27;
	tmp1={type:38,value:Larg1};
	tmp0.a1.a6.postMessage(tmp1);
}
function __ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=null,L$poptgepsqueezed26=null,tmp4=null,tmp5=0,tmp6=0;
	tmp1=new constructor__ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_$pFrame().a;
	tmp2=tmp1[0];
	tmp2.a0=__ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_$presume;
	tmp2.a1=__ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_$pdestroy;
	tmp2.a8=Larg3;
	tmp2.a7=Larg2;
	tmp2.a6=Larg1;
	L$poptgepsqueezed26=tmp2.a2.a[tmp2.a2.o-1];
	Larg0.a0=L$poptgepsqueezed26;
	L$poptgepsqueezed26=tmp2.a3;
	__ZN7CheerpX5Linux28requestCreateExternalProcessEv(L$poptgepsqueezed26,Larg1);
	tmp4=L$poptgepsqueezed26.a0;
	tmp5=L$poptgepsqueezed26.a0o|0;
	a:{
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp2.i4=0;
			tmp2=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp2.a0=tmp1;
			tmp2.a0o=0;
			break a;
		}
		tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
		tmp5=tmp4.a1.i1|0;
		tmp2.i9=tmp5;
		tmp4=L$poptgepsqueezed26.a0;
		tmp6=L$poptgepsqueezed26.a0o|0;
		if(tmp4!==nullArray||tmp6!==0)tmp4[tmp6].a1(tmp4,tmp6);
		__ZN7CheerpX5Linux13requestSocketEjiii(L$poptgepsqueezed26,tmp2.a6,tmp5);
		tmp4=L$poptgepsqueezed26.a0;
		tmp5=L$poptgepsqueezed26.a0o|0;
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp2.i4=1;
			tmp2=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp2.a0=tmp1;
			tmp2.a0o=0;
			break a;
		}
		tmp4=tmp4[tmp5].a[tmp4[tmp5].o- -1];
		tmp5=tmp4.a1.i1|0;
		tmp2.i10=tmp5;
		tmp4=L$poptgepsqueezed26.a0;
		tmp6=L$poptgepsqueezed26.a0o|0;
		if(tmp4!==nullArray||tmp6!==0)tmp4[tmp6].a1(tmp4,tmp6);
		tmp6=tmp2.i9|0;
		tmp4=tmp2.a8;
		tmp0=tmp2.a6;
		__ZN7CheerpX5Linux11requestBindEjjPhj(L$poptgepsqueezed26,tmp0,tmp6,tmp5,tmp4,0,tmp4.length);
		tmp4=L$poptgepsqueezed26.a0;
		tmp5=L$poptgepsqueezed26.a0o|0;
		if(tmp4!==nullArray||tmp5!==0)if(tmp4[tmp5].a0!==null){
			tmp2.i4=2;
			tmp2=tmp4[tmp5].a[tmp4[tmp5].o- -1];
			tmp2.a0=tmp1;
			tmp2.a0o=0;
			break a;
		}
		tmp4=L$poptgepsqueezed26.a0;
		tmp5=L$poptgepsqueezed26.a0o|0;
		if(tmp4!==nullArray||tmp5!==0)tmp4[tmp5].a1(tmp4,tmp5);
		tmp5=tmp2.i10|0;
		tmp6=tmp2.i9|0;
		L$poptgepsqueezed26=tmp2.a7;
		tmp2=tmp2.a6;
		tmp1={i0:0,i1:0,a2:null};
		tmp1.i0=tmp6;
		tmp1.i1=tmp5;
		tmp1.a2=tmp2;
		L$poptgepsqueezed26(CheerpX.Linux.wrap(Object.create(CheerpX.UnixListener.prototype,{this:{value:tmp1}})));
	}
}
function __ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_$presume(Larg0,Marg0){
	var L$ppre11_1=0,L$poptgepsqueezed20=null,L$ppre11_0=null,tmp3=0,tmp4=null;
	L$ppre11_1=Larg0[Marg0].i4|0;
	L$poptgepsqueezed20=Larg0[Marg0].a3;
	a:{
		if(L$ppre11_1<<30>-1073741824){
			L$ppre11_0=L$poptgepsqueezed20.a0;
			tmp3=L$poptgepsqueezed20.a0o|0;
			if((L$ppre11_1&3)!==0){
				L$ppre11_0=L$ppre11_0[tmp3];
			}else{
				L$ppre11_0=L$ppre11_0[tmp3].a[L$ppre11_0[tmp3].o- -1];
				L$ppre11_1=L$ppre11_0.a1.i1|0;
				Larg0[Marg0].i9=L$ppre11_1;
				L$ppre11_0=L$poptgepsqueezed20.a0;
				tmp3=L$poptgepsqueezed20.a0o|0;
				if(L$ppre11_0!==nullArray||tmp3!==0)L$ppre11_0[tmp3].a1(L$ppre11_0,tmp3);
				__ZN7CheerpX5Linux13requestSocketEjiii(L$poptgepsqueezed20,Larg0[Marg0].a6,L$ppre11_1);
				L$ppre11_0=L$poptgepsqueezed20.a0;
				L$ppre11_1=L$poptgepsqueezed20.a0o|0;
				if(L$ppre11_0!==nullArray||L$ppre11_1!==0){
					if(L$ppre11_0[L$ppre11_1].a0!==null){
						Larg0[Marg0].i4=1;
						L$poptgepsqueezed20=L$ppre11_0[L$ppre11_1].a[L$ppre11_0[L$ppre11_1].o- -1];
						L$poptgepsqueezed20.a0=Larg0;
						L$poptgepsqueezed20.a0o=Marg0;
						break a;
					}
					L$ppre11_0=L$ppre11_0[L$ppre11_1];
				}else{
					L$ppre11_0=null;
				}
			}
			L$ppre11_0=L$ppre11_0.a[L$ppre11_0.o- -1];
			L$ppre11_1=L$ppre11_0.a1.i1|0;
			Larg0[Marg0].i10=L$ppre11_1;
			L$ppre11_0=L$poptgepsqueezed20.a0;
			tmp3=L$poptgepsqueezed20.a0o|0;
			if(L$ppre11_0!==nullArray||tmp3!==0)L$ppre11_0[tmp3].a1(L$ppre11_0,tmp3);
			tmp3=Larg0[Marg0].i9|0;
			L$ppre11_0=Larg0[Marg0].a8;
			tmp4=Larg0[Marg0].a6;
			__ZN7CheerpX5Linux11requestBindEjjPhj(L$poptgepsqueezed20,tmp4,tmp3,L$ppre11_1,L$ppre11_0,0,L$ppre11_0.length);
			L$ppre11_0=L$poptgepsqueezed20.a0;
			L$ppre11_1=L$poptgepsqueezed20.a0o|0;
			if(L$ppre11_0!==nullArray||L$ppre11_1!==0){
				if(L$ppre11_0[L$ppre11_1].a0!==null){
					Larg0[Marg0].i4=2;
					L$poptgepsqueezed20=L$ppre11_0[L$ppre11_1].a[L$ppre11_0[L$ppre11_1].o- -1];
					L$poptgepsqueezed20.a0=Larg0;
					L$poptgepsqueezed20.a0o=Marg0;
					break a;
				}
				L$ppre11_0=L$ppre11_0[L$ppre11_1];
			}else{
				L$ppre11_0=null;
			}
		}else{
			L$ppre11_0=L$poptgepsqueezed20.a0;
			L$ppre11_1=L$poptgepsqueezed20.a0o|0;
			L$ppre11_0=L$ppre11_0[L$ppre11_1];
		}
		L$ppre11_0=L$poptgepsqueezed20.a0;
		L$ppre11_1=L$poptgepsqueezed20.a0o|0;
		if(L$ppre11_0!==nullArray||L$ppre11_1!==0)L$ppre11_0[L$ppre11_1].a1(L$ppre11_0,L$ppre11_1);
		L$ppre11_1=Larg0[Marg0].i10|0;
		tmp3=Larg0[Marg0].i9|0;
		L$poptgepsqueezed20=Larg0[Marg0].a7;
		L$ppre11_0=Larg0[Marg0].a6;
		tmp4={i0:0,i1:0,a2:null};
		tmp4.i0=tmp3;
		tmp4.i1=L$ppre11_1;
		tmp4.a2=L$ppre11_0;
		L$poptgepsqueezed20(CheerpX.Linux.wrap(Object.create(CheerpX.UnixListener.prototype,{this:{value:tmp4}})));
	}
}
function __ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed2=null,tmp1=null,tmp2=0;
	L$poptgepsqueezed2=Larg0.a3;
	a:{
		if(Larg0.i4<<30>-1073741824){
			tmp1=L$poptgepsqueezed2.a0;
			tmp2=L$poptgepsqueezed2.a0o|0;
			if(tmp1===nullArray&&tmp2===0)break a;
		}else{
			tmp1=L$poptgepsqueezed2.a0;
			tmp2=L$poptgepsqueezed2.a0o|0;
			if(tmp1===nullArray&&tmp2===0)break a;
		}
		tmp1[tmp2].a1(tmp1,tmp2);
	}
}
function __ZN7CheerpX5Linux13requestSocketEjiii(Larg0,Larg1,Larg2){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed9=null,tmp5=0,tmp6=null;
	tmp2=create__ZN7CheerpX5Linux13requestSocketEjiii$pFrame({a0:null,a1:null,a2:tmp2={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:{a0:nullArray,a0o:0},i4:0,a5:tmp2=[0],a6:null}).a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux13requestSocketEjiii$presume;
	tmp3.a1=__ZN7CheerpX5Linux13requestSocketEjiii$pdestroy;
	L$poptgepsqueezed8=tmp3.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	L$poptgepsqueezed9=L$poptgepsqueezed8.a;
	tmp5=L$poptgepsqueezed8.o-1;
	Larg0.a0=L$poptgepsqueezed9;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed9=tmp3.a3;
	__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb(L$poptgepsqueezed9,Larg1,Larg2,{type:35,tid:Larg2,arg0:1,arg1:1,arg2:0},1);
	tmp6=L$poptgepsqueezed9.a0;
	tmp5=L$poptgepsqueezed9.a0o|0;
	a:{
		if(tmp6!==nullArray||tmp5!==0)if(tmp6[tmp5].a0!==null){
			tmp3.i4=0;
			tmp3=tmp6[tmp5].a[tmp6[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp6=tmp6[tmp5].a[tmp6[tmp5].o- -1];
		tmp5=tmp6.a1.i1|0;
		tmp1.i0=256;
		tmp1.i1=tmp5;
		tmp6=L$poptgepsqueezed9.a0;
		tmp5=L$poptgepsqueezed9.a0o|0;
		if(tmp6!==nullArray||tmp5!==0)tmp6[tmp5].a1(tmp6,tmp5);
		tmp3.a6=L$poptgepsqueezed8;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed8.a0;
		tmp5=L$poptgepsqueezed8.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux11requestBindEjjPhj(Larg0,Larg1,Larg2,Larg3,Larg4,Marg4,Larg5){
	var L$poptgepsqueezed8=null,tmp1=null,L$poptgepsqueezed9=null,tmp3=null,tmp4=null,tmp5=null,tmp6=0;
	tmp3=create__ZN7CheerpX5Linux11requestBindEjjPhj$pFrame({a0:null,a1:null,a2:tmp3={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:{a0:nullArray,a0o:0},i4:0,a5:tmp3=[0],a6:null}).a;
	tmp4=tmp3[0];
	tmp4.a0=__ZN7CheerpX5Linux11requestBindEjjPhj$presume;
	tmp4.a1=__ZN7CheerpX5Linux11requestBindEjjPhj$pdestroy;
	L$poptgepsqueezed8=tmp4.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	tmp5=L$poptgepsqueezed8.a;
	tmp6=L$poptgepsqueezed8.o-1;
	Larg0.a0=tmp5;
	Larg0.a0o=tmp6;
	tmp6=Marg4;
	tmp5=Larg4;
	L$poptgepsqueezed9=tmp4.a3;
	__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb(L$poptgepsqueezed9,Larg1,Larg2,{type:36,tid:Larg2,arg0:Larg3,arg1:tmp5.subarray((+(tmp6>>>0)),(+(tmp6+Larg5>>>0)))},1);
	tmp5=L$poptgepsqueezed9.a0;
	tmp6=L$poptgepsqueezed9.a0o|0;
	a:{
		if(tmp5!==nullArray||tmp6!==0)if(tmp5[tmp6].a0!==null){
			tmp4.i4=0;
			tmp4=tmp5[tmp6].a[tmp5[tmp6].o- -1];
			tmp4.a0=tmp3;
			tmp4.a0o=0;
			break a;
		}
		tmp5=tmp5[tmp6].a[tmp5[tmp6].o- -1];
		tmp6=tmp5.a1.i1|0;
		tmp1.i0=256;
		tmp1.i1=tmp6;
		tmp5=L$poptgepsqueezed9.a0;
		tmp6=L$poptgepsqueezed9.a0o|0;
		if(tmp5!==nullArray||tmp6!==0)tmp5[tmp6].a1(tmp5,tmp6);
		tmp4.a6=L$poptgepsqueezed8;
		tmp4.a0=null;
		tmp3=L$poptgepsqueezed8.a0;
		tmp6=L$poptgepsqueezed8.a0o|0;
		(tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst$p118)[tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst$p118].a0((tmp3!==nullArray||tmp6!==0?tmp3:_NoopCoro$pFrame$pConst$p118),tmp3!==nullArray||tmp6!==0?tmp6:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux11requestBindEjjPhj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep2$poptgep=null;
	L$poptgepsqueezed5=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	L$poptgepsqueezed5=L$poptgepsqueezed5[tmp1].a[L$poptgepsqueezed5[tmp1].o- -1];
	tmp1=L$poptgepsqueezed5.a1.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.i1=tmp1;
	L$poptgep$poptgep2$poptgep=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0)L$poptgep$poptgep2$poptgep[tmp1].a1(L$poptgep$poptgep2$poptgep,tmp1);
	Larg0.a6=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118)[L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118),L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux11requestBindEjjPhj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux13requestSocketEjiii$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep2$poptgep=null;
	L$poptgepsqueezed5=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	L$poptgepsqueezed5=L$poptgepsqueezed5[tmp1].a[L$poptgepsqueezed5[tmp1].o- -1];
	tmp1=L$poptgepsqueezed5.a1.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.i1=tmp1;
	L$poptgep$poptgep2$poptgep=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0)L$poptgep$poptgep2$poptgep[tmp1].a1(L$poptgep$poptgep2$poptgep,tmp1);
	Larg0.a6=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118)[L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118),L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux13requestSocketEjiii$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux16setCustomConsoleEPFvPN6client10Uint8ArrayEjEjjE3$_0JjjEEEvPT_DpT0_(Larg0,Larg1,Larg2){
	__ZN11CXUIConsole12queueKeyCodeEjj(Larg0.a0.a27,Larg1,Larg2);
}
function __ZNSt6vectorIPN6client13EventListenerESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,Lgeptoindexphi=0,tmp5=0,Lgeptoindexphi3=0,Lgeptoindex18=0,tmp8=0,Lxtraiter=0,Lprol$piter=0;
	tmp2=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp3=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	Lgeptoindexphi=(__imul(Lgeptoindexphi,4))-(__imul(tmp0,4))|0;
	tmp3=Larg1.a1;
	tmp5=Larg1.a1o|0;
	tmp1=-(Lgeptoindexphi>>2)|0;
	if(Lgeptoindexphi>>>0>=4){
		Lgeptoindexphi3=Lgeptoindexphi>>>2;
		Lgeptoindex18=tmp1+Lgeptoindexphi3|0;
		if(tmp0<(tmp5+tmp1|0)){
			tmp8=Lgeptoindexphi-4|0;
			Lgeptoindexphi=(tmp8>>>2)+1&3;
			if((Lgeptoindexphi|0)!==0){
				Lxtraiter=0;
				while(1){
					Lgeptoindexphi3=Lgeptoindexphi3-1|0;
					Lgeptoindex18=Lgeptoindex18-1|0;
					tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0];
					Lxtraiter=Lxtraiter+1|0;
					if((Lxtraiter|0)!==(Lgeptoindexphi|0))continue;
					break;
				}
			}
			if(tmp8>>>0>=12)while(1){
				tmp3[(tmp5+Lgeptoindex18|0)+ -1|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -1|0];
				tmp3[(tmp5+Lgeptoindex18|0)+ -2|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -2|0];
				tmp3[(tmp5+Lgeptoindex18|0)+ -3|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -3|0];
				Lgeptoindexphi3=Lgeptoindexphi3-4|0;
				Lgeptoindex18=Lgeptoindex18-4|0;
				tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0];
				if(tmp3!==tmp3||(tmp5+tmp1|0)!==(tmp5+Lgeptoindex18|0))continue;
				break;
			}
		}else{
			tmp8=Lgeptoindexphi-4|0;
			Lxtraiter=(tmp8>>>2)+1&7;
			if((Lxtraiter|0)!==0){
				Lgeptoindexphi3=tmp1;
				Lprol$piter=0;
				Lgeptoindexphi=0;
				while(1){
					tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0];
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=tmp1;
				Lgeptoindexphi=0;
			}
			if(tmp8>>>0>=28)while(1){
				tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+1|0]=tmp2[(tmp0+Lgeptoindexphi|0)+1|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+2|0]=tmp2[(tmp0+Lgeptoindexphi|0)+2|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+3|0]=tmp2[(tmp0+Lgeptoindexphi|0)+3|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+4|0]=tmp2[(tmp0+Lgeptoindexphi|0)+4|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+5|0]=tmp2[(tmp0+Lgeptoindexphi|0)+5|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+6|0]=tmp2[(tmp0+Lgeptoindexphi|0)+6|0];
				tmp3[(tmp5+Lgeptoindexphi3|0)+7|0]=tmp2[(tmp0+Lgeptoindexphi|0)+7|0];
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp3!==tmp3||(tmp5+Lgeptoindex18|0)!==(tmp5+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
	}
	Larg1.a1=tmp3;
	Larg1.a1o=tmp5+(tmp1<<2>>2)|0;
	tmp2=Larg0.a0;
	Lgeptoindexphi=Larg0.a0o|0;
	Larg0.a0=tmp3;
	Larg0.a0o=tmp5+(tmp1<<2>>2)|0;
	Larg1.a1=tmp2;
	Larg1.a1o=Lgeptoindexphi;
	tmp2=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	tmp3=Larg1.a2;
	tmp5=Larg1.a2o|0;
	Larg0.a1=tmp3;
	Larg0.a1o=tmp5;
	Larg1.a2=tmp2;
	Larg1.a2o=Lgeptoindexphi;
	tmp2=Larg0.a2.a0;
	Lgeptoindexphi=Larg0.a2.a0o|0;
	tmp3=Larg1.a3.a0;
	tmp5=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp3;
	Larg0.a2.a0o=tmp5;
	Larg1.a3.a0=tmp2;
	Larg1.a3.a0o=Lgeptoindexphi;
	tmp2=Larg1.a1;
	Lgeptoindexphi=Larg1.a1o|0;
	Larg1.a0=tmp2[Lgeptoindexphi];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_0JPNS5_10MouseEventEEEEvPT_DpT0_(Larg0,Larg1){
	__ZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjENK3$_0clEPNS1_10MouseEventE(Larg0,Larg1);
}
function __ZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjEN3$_18__invokeEPNS1_5EventE(Larg0){
	Larg0.preventDefault();
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_2JPNS5_10TouchEventEEEEvPT_DpT0_(Larg0,Larg1){
	__ZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjENK3$_2clEPNS1_10TouchEventE(Larg0,Larg1);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_3JPNS5_10MouseEventEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=-0.,tmp2=-0.,tmp3=null,tmp4=null;
	tmp0=Larg0.a0;
	tmp1=+Larg1.pageX;
	tmp2=+Larg1.pageY;
	tmp3=tmp0.a34.style;
	tmp4=String(~~tmp1);
	tmp4=tmp4.concat("px");
	tmp3.left=tmp4;
	tmp3=tmp0.a34.style;
	tmp4=String(~~tmp2);
	tmp4=tmp4.concat("px");
	tmp3.top=tmp4;
	tmp0.a34.focus();
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_4JPNS5_13KeyboardEventEEEEvPT_DpT0_(Larg0,Larg1){
	__ZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjENK3$_4clEPNS1_13KeyboardEventE(Larg0,Larg1);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjE3$_5JPNS5_13KeyboardEventEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=-0.,L$poptgep$poptgep$poptgepsqueezed=null,tmp2=null,tmp3=0,tmp4=0,Lxtraiter=0,tmp6=null,tmp7=null,Lgeptoindex6=0,tmp9=null,tmp10=0,tmp11=0,Lgeptoindexphi=0,Lprol$piter=0;
	tmp6=Larg0.a0;
	tmp0=+Larg1.keyCode;
	L$poptgep$poptgep$poptgepsqueezed=tmp6.a39;
	tmp7=L$poptgep$poptgep$poptgepsqueezed.a0;
	Lgeptoindex6=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
	tmp9=L$poptgep$poptgep$poptgepsqueezed.a1;
	tmp10=L$poptgep$poptgep$poptgepsqueezed.a1o|0;
	if(tmp7!==tmp9||Lgeptoindex6!==tmp10){
		tmp11=~~tmp0;
		Lgeptoindexphi=0;
		while(1){
			if((tmp7[Lgeptoindex6+Lgeptoindexphi|0].i0&65535)===(tmp11&65535)){
				if(tmp7!==tmp9||(Lgeptoindex6+Lgeptoindexphi|0)!==tmp10){
					tmp9={type:94,value:0,keyCode:tmp11,timeStamp: +tmp7[Lgeptoindex6+Lgeptoindexphi|0].d1};
					tmp2=HEAP32;
					tmp10=tmp6.i7|0;
					tmp2[0+tmp10|0]=-2;
					tmp6.a6.postMessage(tmp9);
					tmp6=L$poptgep$poptgep$poptgepsqueezed.a0;
					tmp10=L$poptgep$poptgep$poptgepsqueezed.a0o|0;
					tmp11=((__imul(Lgeptoindex6+Lgeptoindexphi|0,11))-(__imul(tmp10,11))|0)/11|0;
					Lgeptoindex6=tmp11+1|0;
					tmp7=L$poptgep$poptgep$poptgepsqueezed.a1;
					Lgeptoindexphi=L$poptgep$poptgep$poptgepsqueezed.a1o|0;
					tmp3=(__imul(Lgeptoindexphi,11))-(__imul(tmp10+Lgeptoindex6|0,11))|0;
					if(tmp3>>>0>=11){
						tmp4=(tmp3>>>0)/11|0;
						Lxtraiter=tmp4&3;
						if((Lxtraiter|0)!==0){
							Lgeptoindexphi=tmp11;
							Lprol$piter=0;
							while(1){
								tmp6[tmp10+Lgeptoindexphi|0].i0=tmp6[tmp10+Lgeptoindex6|0].i0|0;
								tmp6[tmp10+Lgeptoindexphi|0].d1=+tmp6[tmp10+Lgeptoindex6|0].d1;
								Lprol$piter=Lprol$piter+1|0;
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								Lgeptoindex6=Lgeptoindex6+1|0;
								if((Lprol$piter|0)!==(Lxtraiter|0))continue;
								break;
							}
						}else{
							Lgeptoindexphi=tmp11;
						}
						if(tmp4-1>>>0>=3)while(1){
							tmp6[tmp10+Lgeptoindexphi|0].i0=tmp6[tmp10+Lgeptoindex6|0].i0|0;
							tmp6[tmp10+Lgeptoindexphi|0].d1=+tmp6[tmp10+Lgeptoindex6|0].d1;
							tmp6[(tmp10+Lgeptoindexphi|0)+1|0].i0=tmp6[(tmp10+Lgeptoindex6|0)+1|0].i0|0;
							tmp6[(tmp10+Lgeptoindexphi|0)+1|0].d1=+tmp6[(tmp10+Lgeptoindex6|0)+1|0].d1;
							tmp6[(tmp10+Lgeptoindexphi|0)+2|0].i0=tmp6[(tmp10+Lgeptoindex6|0)+2|0].i0|0;
							tmp6[(tmp10+Lgeptoindexphi|0)+2|0].d1=+tmp6[(tmp10+Lgeptoindex6|0)+2|0].d1;
							tmp6[(tmp10+Lgeptoindexphi|0)+3|0].i0=tmp6[(tmp10+Lgeptoindex6|0)+3|0].i0|0;
							tmp6[(tmp10+Lgeptoindexphi|0)+3|0].d1=+tmp6[(tmp10+Lgeptoindex6|0)+3|0].d1;
							Lgeptoindexphi=Lgeptoindexphi+4|0;
							if(tmp6!==tmp6||((tmp10+tmp11|0)+tmp4|0)!==(tmp10+Lgeptoindexphi|0)){
								Lgeptoindex6=Lgeptoindex6+4|0;
								continue;
							}
							break;
						}
					}
					L$poptgep$poptgep$poptgepsqueezed.a1=tmp6;
					L$poptgep$poptgep$poptgepsqueezed.a1o=(tmp10+tmp11|0)+((tmp3|0)/11|0)|0;
				}
			}else{
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(tmp7!==tmp9||(Lgeptoindex6+Lgeptoindexphi|0)!==tmp10)continue;
			}
			break;
		}
	}
}
function __ZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjENK3$_4clEPNS1_13KeyboardEventE(Larg0,Larg1){
	var tmp0=-0.,tmp1=null,tmp2=0,tmp3=null,tmp4=null,tmp5=0,L$poptgepsqueezed17=null,tmp7=null,tmp8=-0.,L$poptgepsqueezed11=null,tmp10=0,tmp11=0;
	L$poptgepsqueezed17=Larg0.a0;
	tmp7=[{a0:null}];
	tmp7[0].a0=L$poptgepsqueezed17;
	tmp7=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjENK3$_4clEPNS5_13KeyboardEventEEUlvE_JEEEvPT_DpT0_,tmp7[0]);
	+setTimeout(tmp7,0);
	tmp0=+Larg1.keyCode;
	tmp8=+Larg1.timeStamp;
	L$poptgepsqueezed17=L$poptgepsqueezed17.a39;
	L$poptgepsqueezed11=L$poptgepsqueezed17.a1;
	tmp10=L$poptgepsqueezed17.a1o|0;
	tmp7=L$poptgepsqueezed17.a2;
	tmp1=tmp7.a0;
	tmp2=tmp7.a0o|0;
	tmp8+= +Larg0.d1;
	if(tmp10<tmp2){
		L$poptgepsqueezed11[tmp10].i0=~~tmp0&65535;
		L$poptgepsqueezed11[tmp10].d1=tmp8;
		L$poptgepsqueezed17.a1=L$poptgepsqueezed11;
		L$poptgepsqueezed17.a1o=tmp10+1|0;
	}else{
		tmp3={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp3={a0:null}}};
		tmp4=L$poptgepsqueezed17.a0;
		tmp11=L$poptgepsqueezed17.a0o|0;
		tmp11=(__imul(tmp11,11));
		tmp10=((__imul(tmp10,11))-tmp11|0)/11|0;
		tmp5=tmp10+1|0;
		if(tmp5>>>0>390451572)_abort();
		;
		tmp11=((__imul(tmp2,11))-tmp11|0)/11|0;
		if(tmp11>>>0<195225786){
			tmp11<<=1;
			tmp11=tmp11>>>0>tmp5>>>0?tmp11|0:tmp5|0;
		}else{
			tmp11=390451572;
		}
		L$poptgepsqueezed11=tmp3.a3;
		L$poptgepsqueezed11.a1.a0=tmp7;
		tmp7=createArray_struct$p_ZN7CheerpX5Linux8KeyEventE((__imul(tmp11,11)|0)/11|0);
		tmp3.a0=tmp7[0];
		tmp3.a1=tmp7;
		tmp3.a1o=0+tmp10|0;
		L$poptgepsqueezed11.a0=tmp7;
		L$poptgepsqueezed11.a0o=0+tmp11|0;
		tmp7[tmp10].i0=~~tmp0&65535;
		tmp7[tmp10].d1=tmp8;
		tmp3.a2=tmp7;
		tmp3.a2o=(0+tmp10|0)+1|0;
		__ZNSt6vectorIN7CheerpX5Linux8KeyEventESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(L$poptgepsqueezed17,tmp3);
	}
	if( +Larg1.keyCode===9)Larg1.preventDefault();
	a:{
		if(!(Larg1.altKey))if(!(Larg1.ctrlKey))break a;
		Larg1.preventDefault();
	}
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjENK3$_4clEPNS5_13KeyboardEventEEUlvE_JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a0;
	tmp1=tmp0.a39.a0;
	tmp2=tmp0.a39.a0o|0;
	__ZN7CheerpX5Linux14flushKeyEventsEd(tmp0,+tmp1[tmp2].d1);
}
function __ZNSt6vectorIN7CheerpX5Linux8KeyEventESaIS2_EE26__swap_out_circular_bufferERSt14__split_bufferIS2_RS3_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,Lxtraiter=0,tmp3=null,tmp4=null,Lprol$piter=0,tmp6=0,Lgeptoindex29=0,Lgeptoindex16=0,Lgeptoindexphi3=0,Lgeptoindexphi=0;
	tmp3=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp4=Larg0.a1;
	Lprol$piter=Larg0.a1o|0;
	Lprol$piter=(__imul(Lprol$piter,11))-(__imul(tmp0,11))|0;
	tmp4=Larg1.a1;
	tmp6=Larg1.a1o|0;
	tmp1=(Lprol$piter|0)/-11|0;
	if(Lprol$piter>>>0>=11){
		Lgeptoindex29=(Lprol$piter>>>0)/11|0;
		Lgeptoindex16=tmp1+Lgeptoindex29|0;
		if(tmp0<(tmp6+tmp1|0)){
			if((Lgeptoindex29&1|0)!==0){
				Lgeptoindexphi3=Lgeptoindex29-1|0;
				Lgeptoindexphi=Lgeptoindex16-1|0;
				tmp4[tmp6+Lgeptoindexphi|0].i0=tmp3[tmp0+Lgeptoindexphi3|0].i0|0;
				tmp4[(tmp6+Lgeptoindex16|0)+ -1|0].d1=+tmp3[(tmp0+Lgeptoindex29|0)+ -1|0].d1;
			}else{
				Lgeptoindexphi3=Lgeptoindex29;
				Lgeptoindexphi=Lgeptoindex16;
			}
			if(Lprol$piter-11>>>0>=11)while(1){
				tmp4[(tmp6+Lgeptoindexphi|0)+ -1|0].i0=tmp3[(tmp0+Lgeptoindexphi3|0)+ -1|0].i0|0;
				tmp4[(tmp6+Lgeptoindexphi|0)+ -1|0].d1=+tmp3[(tmp0+Lgeptoindexphi3|0)+ -1|0].d1;
				Lgeptoindex29=Lgeptoindexphi3-2|0;
				Lgeptoindex16=Lgeptoindexphi-2|0;
				tmp4[tmp6+Lgeptoindex16|0].i0=tmp3[tmp0+Lgeptoindex29|0].i0|0;
				tmp4[(tmp6+Lgeptoindexphi|0)+ -2|0].d1=+tmp3[(tmp0+Lgeptoindexphi3|0)+ -2|0].d1;
				if(tmp4!==tmp4||(tmp6+tmp1|0)!==(tmp6+Lgeptoindex16|0)){
					Lgeptoindexphi3=Lgeptoindex29;
					Lgeptoindexphi=Lgeptoindex16;
					continue;
				}
				break;
			}
		}else{
			Lxtraiter=Lgeptoindex29&3;
			if((Lxtraiter|0)!==0){
				Lgeptoindexphi3=tmp1;
				Lprol$piter=0;
				Lgeptoindexphi=0;
				while(1){
					tmp4[tmp6+Lgeptoindexphi3|0].i0=tmp3[tmp0+Lgeptoindexphi|0].i0|0;
					tmp4[tmp6+Lgeptoindexphi3|0].d1=+tmp3[tmp0+Lgeptoindexphi|0].d1;
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=tmp1;
				Lgeptoindexphi=0;
			}
			if(Lgeptoindex29-1>>>0>=3)while(1){
				tmp4[tmp6+Lgeptoindexphi3|0].i0=tmp3[tmp0+Lgeptoindexphi|0].i0|0;
				tmp4[tmp6+Lgeptoindexphi3|0].d1=+tmp3[tmp0+Lgeptoindexphi|0].d1;
				tmp4[(tmp6+Lgeptoindexphi3|0)+1|0].i0=tmp3[(tmp0+Lgeptoindexphi|0)+1|0].i0|0;
				tmp4[(tmp6+Lgeptoindexphi3|0)+1|0].d1=+tmp3[(tmp0+Lgeptoindexphi|0)+1|0].d1;
				tmp4[(tmp6+Lgeptoindexphi3|0)+2|0].i0=tmp3[(tmp0+Lgeptoindexphi|0)+2|0].i0|0;
				tmp4[(tmp6+Lgeptoindexphi3|0)+2|0].d1=+tmp3[(tmp0+Lgeptoindexphi|0)+2|0].d1;
				tmp4[(tmp6+Lgeptoindexphi3|0)+3|0].i0=tmp3[(tmp0+Lgeptoindexphi|0)+3|0].i0|0;
				tmp4[(tmp6+Lgeptoindexphi3|0)+3|0].d1=+tmp3[(tmp0+Lgeptoindexphi|0)+3|0].d1;
				Lgeptoindexphi3=Lgeptoindexphi3+4|0;
				if(tmp4!==tmp4||(tmp6+Lgeptoindex16|0)!==(tmp6+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+4|0;
					continue;
				}
				break;
			}
		}
	}
	Larg1.a1=tmp4;
	Larg1.a1o=tmp6+tmp1|0;
	tmp3=Larg0.a0;
	Lprol$piter=Larg0.a0o|0;
	Larg0.a0=tmp4;
	Larg0.a0o=tmp6+tmp1|0;
	Larg1.a1=tmp3;
	Larg1.a1o=Lprol$piter;
	tmp3=Larg0.a1;
	Lprol$piter=Larg0.a1o|0;
	tmp4=Larg1.a2;
	tmp6=Larg1.a2o|0;
	Larg0.a1=tmp4;
	Larg0.a1o=tmp6;
	Larg1.a2=tmp3;
	Larg1.a2o=Lprol$piter;
	tmp3=Larg0.a2.a0;
	Lprol$piter=Larg0.a2.a0o|0;
	tmp4=Larg1.a3.a0;
	tmp6=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp4;
	Larg0.a2.a0o=tmp6;
	Larg1.a3.a0=tmp3;
	Larg1.a3.a0o=Lprol$piter;
	tmp3=Larg1.a1;
	Lprol$piter=Larg1.a1o|0;
	Larg1.a0=tmp3[Lprol$piter];
}
function __ZN7CheerpX5Linux14flushKeyEventsEd(Larg0,Larg1){
	var tmp0=0,Lxtraiter=0,L$ppre_0=null,L$poptgep$poptgep67$poptgepsqueezed=null,tmp4=null,Lgeptoindex47=0,Lgeptoindexphi=0,Lgeptoindexphi7=0,Lgeptoindexphi17=0,Lgeptoindexphi3=0,tmp10=null,Lgeptoindex29=0,Lprol$piter=0;
	L$ppre_0=Larg0.a34.value;
	L$poptgep$poptgep67$poptgepsqueezed=Larg0.a34;
	tmp4="_";
	L$poptgep$poptgep67$poptgepsqueezed.value=tmp4;
	Larg0.a34.selectionStart=1;
	Larg0.a34.selectionEnd=1;
	L$poptgep$poptgep67$poptgepsqueezed=Larg0.a39;
	a:{
		b:{
			if(((L$ppre_0.length)|0)===2){
				Lgeptoindex47=L$ppre_0.charCodeAt(1);
				if(Lgeptoindex47>>>0>=33)if(Lgeptoindex47>>>0<48){
					Lgeptoindex47=__ZZN7CheerpX5Linux14flushKeyEventsEdE6table1[Lgeptoindex47-33|0]|0;
					Lgeptoindex47=Lgeptoindex47;
				}else if(Lgeptoindex47>>>0>=58)if(Lgeptoindex47>>>0<65){
					Lgeptoindex47=__ZZN7CheerpX5Linux14flushKeyEventsEdE6table2[Lgeptoindex47-58|0]|0;
					Lgeptoindex47=Lgeptoindex47;
				}else if(Lgeptoindex47>>>0<91){
					Lgeptoindex47|=32768;
				}else if(Lgeptoindex47>>>0<97){
					Lgeptoindex47=__ZZN7CheerpX5Linux14flushKeyEventsEdE6table3[Lgeptoindex47-91|0]|0;
					Lgeptoindex47=Lgeptoindex47;
				}else if(Lgeptoindex47>>>0<123){
					Lgeptoindex47=Lgeptoindex47-32|0;
				}else{
					if(Lgeptoindex47>>>0>=127){
						tmp4=L$poptgep$poptgep67$poptgepsqueezed.a0;
						Lgeptoindex47=L$poptgep$poptgep67$poptgepsqueezed.a0o|0;
						L$poptgep$poptgep67$poptgepsqueezed.a1=tmp4;
						L$poptgep$poptgep67$poptgepsqueezed.a1o=Lgeptoindex47;
						break a;
					}
					Lgeptoindex47=__ZZN7CheerpX5Linux14flushKeyEventsEdE6table4[Lgeptoindex47-123|0]|0;
					Lgeptoindex47=Lgeptoindex47;
				}
				Lgeptoindexphi=Lgeptoindex47&32768;
				Lgeptoindexphi7=Lgeptoindexphi>>>15;
				if((Lgeptoindexphi|0)!==0){
					tmp4=L$poptgep$poptgep67$poptgepsqueezed.a0;
					Lgeptoindexphi=L$poptgep$poptgep67$poptgepsqueezed.a0o|0;
					L$ppre_0=L$poptgep$poptgep67$poptgepsqueezed.a1;
					Lgeptoindexphi17=L$poptgep$poptgep67$poptgepsqueezed.a1o|0;
					if(tmp4===L$ppre_0&&Lgeptoindexphi===Lgeptoindexphi17){
						tmp4=tmp4[Lgeptoindexphi];
					}else{
						Lgeptoindexphi3=0;
						while(1){
							if((tmp4[Lgeptoindexphi+Lgeptoindexphi3|0].i0&65535)===16){
								tmp4=tmp4[Lgeptoindexphi+Lgeptoindexphi3|0];
							}else{
								Lgeptoindexphi3=Lgeptoindexphi3+1|0;
								if(tmp4!==L$ppre_0||(Lgeptoindexphi+Lgeptoindexphi3|0)!==Lgeptoindexphi17)continue;
								tmp4=L$ppre_0[Lgeptoindexphi17];
							}
							break;
						}
					}
					Lgeptoindexphi7=tmp4===L$ppre_0[Lgeptoindexphi17]?Lgeptoindexphi7|0:0|0;
				}
				Lgeptoindex47&= -32769;
				if((Lgeptoindexphi7&1)!==0){
					tmp4={type:94,value:1,keyCode:16,timeStamp:Larg1};
					L$ppre_0=HEAP32;
					Lgeptoindexphi7=Larg0.i7|0;
					L$ppre_0[0+Lgeptoindexphi7|0]=-2;
					Larg0.a6.postMessage(tmp4);
					tmp4={type:94,value:1,keyCode:Lgeptoindex47,timeStamp:Larg1};
					L$ppre_0=HEAP32;
					Lgeptoindexphi7=Larg0.i7|0;
					L$ppre_0[0+Lgeptoindexphi7|0]=-2;
					Larg0.a6.postMessage(tmp4);
					tmp4={type:94,value:0,keyCode:Lgeptoindex47,timeStamp:Larg1};
					L$ppre_0=HEAP32;
					Lgeptoindex47=Larg0.i7|0;
					L$ppre_0[0+Lgeptoindex47|0]=-2;
					Larg0.a6.postMessage(tmp4);
					tmp4={type:94,value:0,keyCode:16,timeStamp:Larg1};
					break b;
				}
			}else if(((L$ppre_0.length)|0)!==0){
				tmp4=L$poptgep$poptgep67$poptgepsqueezed.a0;
				Lgeptoindex47=L$poptgep$poptgep67$poptgepsqueezed.a0o|0;
				L$ppre_0=L$poptgep$poptgep67$poptgepsqueezed.a1;
				Lgeptoindexphi=L$poptgep$poptgep67$poptgepsqueezed.a1o|0;
				if(tmp4===L$ppre_0&&Lgeptoindex47===Lgeptoindexphi)break a;
				Lgeptoindexphi=0;
				while(1){
					L$ppre_0={type:94,value:1,keyCode:(tmp4[Lgeptoindex47+Lgeptoindexphi|0].i0|0),timeStamp: +tmp4[Lgeptoindex47+Lgeptoindexphi|0].d1};
					tmp10=HEAP32;
					Lgeptoindexphi7=Larg0.i7|0;
					tmp10[0+Lgeptoindexphi7|0]=-2;
					Larg0.a6.postMessage(L$ppre_0);
					tmp4[Lgeptoindex47+Lgeptoindexphi|0].i0=tmp4[Lgeptoindex47+Lgeptoindexphi|0].i0&65535|65536;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					L$ppre_0=L$poptgep$poptgep67$poptgepsqueezed.a1;
					Lgeptoindexphi7=L$poptgep$poptgep67$poptgepsqueezed.a1o|0;
					if(tmp4===L$ppre_0&&(Lgeptoindex47+Lgeptoindexphi|0)===Lgeptoindexphi7)break a;
					continue;
				}
			}else{
				Lgeptoindex47=8;
			}
			tmp4={type:94,value:1,keyCode:Lgeptoindex47,timeStamp:Larg1};
			L$ppre_0=HEAP32;
			Lgeptoindexphi7=Larg0.i7|0;
			L$ppre_0[0+Lgeptoindexphi7|0]=-2;
			Larg0.a6.postMessage(tmp4);
			tmp4={type:94,value:0,keyCode:Lgeptoindex47,timeStamp:Larg1};
		}
		L$ppre_0=HEAP32;
		Lgeptoindex47=Larg0.i7|0;
		L$ppre_0[0+Lgeptoindex47|0]=-2;
		Larg0.a6.postMessage(tmp4);
		tmp4=L$poptgep$poptgep67$poptgepsqueezed.a0;
		Lgeptoindex47=L$poptgep$poptgep67$poptgepsqueezed.a0o|0;
		L$ppre_0=L$poptgep$poptgep67$poptgepsqueezed.a1;
		Lgeptoindexphi=L$poptgep$poptgep67$poptgepsqueezed.a1o|0;
		if(tmp4!==L$ppre_0||Lgeptoindex47!==Lgeptoindexphi){
			Lgeptoindexphi7=0;
			while(1){
				if((tmp4[Lgeptoindex47+Lgeptoindexphi7|0].i0&16777215)<65536){
					if(tmp4!==L$ppre_0||(Lgeptoindex47+Lgeptoindexphi7|0)!==Lgeptoindexphi){
						Lgeptoindexphi3=Lgeptoindexphi7+1|0;
						if(tmp4!==L$ppre_0||(Lgeptoindex47+Lgeptoindexphi3|0)!==Lgeptoindexphi){
							Lgeptoindexphi17=Lgeptoindexphi7;
							while(1){
								if((tmp4[(Lgeptoindex47+Lgeptoindexphi17|0)+1|0].i0&16777215)>=65536){
									tmp4[Lgeptoindex47+Lgeptoindexphi7|0].i0=tmp4[Lgeptoindex47+Lgeptoindexphi3|0].i0|0;
									tmp4[Lgeptoindex47+Lgeptoindexphi7|0].d1=+tmp4[Lgeptoindex47+Lgeptoindexphi3|0].d1;
									Lgeptoindexphi7=Lgeptoindexphi7+1|0;
								}
								Lgeptoindexphi17=Lgeptoindexphi3+1|0;
								if(tmp4!==L$ppre_0||(Lgeptoindex47+Lgeptoindexphi17|0)!==Lgeptoindexphi){
									tmp0=Lgeptoindexphi3;
									Lgeptoindexphi3=Lgeptoindexphi17;
									Lgeptoindexphi17=tmp0;
									continue;
								}
								break;
							}
							L$ppre_0=L$poptgep$poptgep67$poptgepsqueezed.a1;
							Lgeptoindexphi=L$poptgep$poptgep67$poptgepsqueezed.a1o|0;
						}
						if(tmp4!==L$ppre_0||(Lgeptoindex47+Lgeptoindexphi7|0)!==Lgeptoindexphi){
							tmp10=L$poptgep$poptgep67$poptgepsqueezed.a0;
							Lgeptoindexphi3=L$poptgep$poptgep67$poptgepsqueezed.a0o|0;
							Lgeptoindexphi7=(__imul(Lgeptoindex47+Lgeptoindexphi7|0,11));
							tmp0=(Lgeptoindexphi7-(__imul(Lgeptoindexphi3,11))|0)/11|0;
							Lgeptoindexphi=(__imul(Lgeptoindexphi,11));
							Lgeptoindexphi17=Lgeptoindexphi-Lgeptoindexphi7|0;
							Lgeptoindex29=tmp0+((Lgeptoindexphi17|0)/11|0)|0;
							Lgeptoindexphi=Lgeptoindexphi-(__imul(Lgeptoindexphi3+Lgeptoindex29|0,11))|0;
							if(Lgeptoindexphi>>>0>=11){
								Lgeptoindexphi7=(Lgeptoindexphi>>>0)/11|0;
								Lgeptoindex47=tmp0+Lgeptoindexphi7|0;
								if((Lgeptoindexphi17|0)<0){
									Lgeptoindexphi17=Lgeptoindex29+Lgeptoindexphi7|0;
									if((Lgeptoindexphi7&1|0)!==0){
										Lgeptoindexphi7=Lgeptoindexphi17-1|0;
										Lgeptoindex29=Lgeptoindex47-1|0;
										tmp10[Lgeptoindexphi3+Lgeptoindex29|0].i0=tmp10[Lgeptoindexphi3+Lgeptoindexphi7|0].i0|0;
										tmp10[(Lgeptoindexphi3+Lgeptoindex47|0)+ -1|0].d1=+tmp10[(Lgeptoindexphi3+Lgeptoindexphi17|0)+ -1|0].d1;
									}else{
										Lgeptoindexphi7=Lgeptoindexphi17;
										Lgeptoindex29=Lgeptoindex47;
									}
									if(Lgeptoindexphi-11>>>0>=11)while(1){
										tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+ -1|0].i0=tmp10[(Lgeptoindexphi3+Lgeptoindexphi7|0)+ -1|0].i0|0;
										tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+ -1|0].d1=+tmp10[(Lgeptoindexphi3+Lgeptoindexphi7|0)+ -1|0].d1;
										Lgeptoindex47=Lgeptoindexphi7-2|0;
										Lgeptoindexphi17=Lgeptoindex29-2|0;
										tmp10[Lgeptoindexphi3+Lgeptoindexphi17|0].i0=tmp10[Lgeptoindexphi3+Lgeptoindex47|0].i0|0;
										tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+ -2|0].d1=+tmp10[(Lgeptoindexphi3+Lgeptoindexphi7|0)+ -2|0].d1;
										if(tmp10!==tmp10||(Lgeptoindexphi3+tmp0|0)!==(Lgeptoindexphi3+Lgeptoindexphi17|0)){
											Lgeptoindexphi7=Lgeptoindex47;
											Lgeptoindex29=Lgeptoindexphi17;
											continue;
										}
										break;
									}
								}else{
									Lxtraiter=Lgeptoindexphi7&3;
									if((Lxtraiter|0)!==0){
										Lgeptoindexphi17=tmp0;
										Lprol$piter=0;
										while(1){
											tmp10[Lgeptoindexphi3+Lgeptoindexphi17|0].i0=tmp10[Lgeptoindexphi3+Lgeptoindex29|0].i0|0;
											tmp10[Lgeptoindexphi3+Lgeptoindexphi17|0].d1=+tmp10[Lgeptoindexphi3+Lgeptoindex29|0].d1;
											Lprol$piter=Lprol$piter+1|0;
											Lgeptoindexphi17=Lgeptoindexphi17+1|0;
											Lgeptoindex29=Lgeptoindex29+1|0;
											if((Lprol$piter|0)!==(Lxtraiter|0))continue;
											break;
										}
									}else{
										Lgeptoindexphi17=tmp0;
									}
									if(Lgeptoindexphi7-1>>>0>=3)while(1){
										tmp10[Lgeptoindexphi3+Lgeptoindexphi17|0].i0=tmp10[Lgeptoindexphi3+Lgeptoindex29|0].i0|0;
										tmp10[Lgeptoindexphi3+Lgeptoindexphi17|0].d1=+tmp10[Lgeptoindexphi3+Lgeptoindex29|0].d1;
										tmp10[(Lgeptoindexphi3+Lgeptoindexphi17|0)+1|0].i0=tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+1|0].i0|0;
										tmp10[(Lgeptoindexphi3+Lgeptoindexphi17|0)+1|0].d1=+tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+1|0].d1;
										tmp10[(Lgeptoindexphi3+Lgeptoindexphi17|0)+2|0].i0=tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+2|0].i0|0;
										tmp10[(Lgeptoindexphi3+Lgeptoindexphi17|0)+2|0].d1=+tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+2|0].d1;
										tmp10[(Lgeptoindexphi3+Lgeptoindexphi17|0)+3|0].i0=tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+3|0].i0|0;
										tmp10[(Lgeptoindexphi3+Lgeptoindexphi17|0)+3|0].d1=+tmp10[(Lgeptoindexphi3+Lgeptoindex29|0)+3|0].d1;
										Lgeptoindexphi17=Lgeptoindexphi17+4|0;
										if(tmp10!==tmp10||(Lgeptoindexphi3+Lgeptoindex47|0)!==(Lgeptoindexphi3+Lgeptoindexphi17|0)){
											Lgeptoindex29=Lgeptoindex29+4|0;
											continue;
										}
										break;
									}
								}
							}
							L$poptgep$poptgep67$poptgepsqueezed.a1=tmp10;
							L$poptgep$poptgep67$poptgepsqueezed.a1o=(Lgeptoindexphi3+tmp0|0)+((Lgeptoindexphi|0)/11|0)|0;
						}
					}
				}else{
					Lgeptoindexphi7=Lgeptoindexphi7+1|0;
					if(tmp4!==L$ppre_0||(Lgeptoindex47+Lgeptoindexphi7|0)!==Lgeptoindexphi)continue;
				}
				break;
			}
		}
	}
}
function __ZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjENK3$_2clEPNS1_10TouchEventE(Larg0,Larg1){
	var tmp0=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=null,tmp6=-0.,tmp7=-0.,tmp8=null,tmp9=-0.,tmp10=0;
	tmp0=Larg0.a0;
	tmp5=Larg1.currentTarget.getBoundingClientRect();
	tmp6=+tmp5.left;
	tmp7=+tmp5.top;
	tmp8=Larg1.changedTouches;
	tmp8=tmp8[0];
	tmp1=+tmp8.clientX;
	tmp2=+tmp8.clientY;
	tmp3=+tmp5.right;
	tmp4=+tmp5.bottom;
	tmp5=Larg1.type;
	tmp8="touchmove";
	tmp9=+tmp5.localeCompare(tmp8);
	if(tmp9===0){
		tmp10=0;
	}else{
		tmp5=Larg1.type;
		tmp8="touchstart";
		tmp9=+tmp5.localeCompare(tmp8);
		if(tmp9===0){
			tmp10=1;
		}else{
			tmp5=Larg1.type;
			tmp8="touchend";
			+tmp5.localeCompare(tmp8);
			tmp10=2;
		}
	}
	tmp9=(+(~~tmp7|0));
	tmp6=(+(~~tmp6|0));
	tmp7=+Larg1.timeStamp;
	tmp5={type:76,value:tmp10,x:((~~(tmp1-tmp6)<<14|0)/(~~(tmp3-tmp6)|0)|0),y:((~~(tmp2-tmp9)<<14|0)/(~~(tmp4-tmp9)|0)|0),timeStamp:(tmp7+ +Larg0.d1)};
	tmp8=HEAP32;
	tmp10=tmp0.i7|0;
	tmp8[0+tmp10|0]=-2;
	tmp0.a6.postMessage(tmp5);
}
function __ZZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjjENK3$_0clEPNS1_10MouseEventE(Larg0,Larg1){
	var tmp0=null,tmp1=-0.,tmp2=-0.,tmp3=-0.,tmp4=-0.,tmp5=-0.,tmp6=null,tmp7=-0.,tmp8=-0.,tmp9=null,tmp10=-0.,tmp11=0;
	tmp0=Larg0.a0;
	tmp6=Larg1.currentTarget.getBoundingClientRect();
	tmp7=+tmp6.left;
	tmp8=+tmp6.top;
	tmp1=+Larg1.clientX;
	tmp2=+Larg1.clientY;
	tmp3=+tmp6.right;
	tmp4=+tmp6.bottom;
	tmp6=Larg1.type;
	tmp9="mousemove";
	tmp10=+tmp6.localeCompare(tmp9);
	if(tmp10===0){
		tmp11=0;
	}else{
		tmp6=Larg1.type;
		tmp9="mousedown";
		tmp10=+tmp6.localeCompare(tmp9);
		if(tmp10===0){
			tmp11=1;
		}else{
			tmp6=Larg1.type;
			tmp9="mouseup";
			+tmp6.localeCompare(tmp9);
			tmp11=2;
		}
	}
	tmp5=(+(~~tmp8|0));
	tmp7=(+(~~tmp7|0));
	tmp8=+Larg1.button;
	tmp10=+Larg1.timeStamp;
	tmp6={type:76,value:tmp11,button:~~tmp8,x:((~~(tmp1-tmp7)<<14|0)/(~~(tmp3-tmp7)|0)|0),y:((~~(tmp2-tmp5)<<14|0)/(~~(tmp4-tmp5)|0)|0),timeStamp:(tmp10+ +Larg0.d1)};
	tmp9=HEAP32;
	tmp11=tmp0.i7|0;
	tmp9[0+tmp11|0]=-2;
	tmp0.a6.postMessage(tmp6);
}
function __ZZN7CheerpX12UnixListener6acceptEvENKUlPT_T0_E_clIS0_PFvPN6client6ObjectEEEE6ThreadS2_S3_$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0,tmp2=null;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	tmp2=tmp0[tmp1].a[tmp0[tmp1].o- -1];
	tmp2=tmp2.a1.a1;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	Larg0.a6(tmp2);
}
function __ZZN7CheerpX12UnixListener6acceptEvENKUlPT_T0_E_clIS0_PFvPN6client6ObjectEEEE6ThreadS2_S3_$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
}
function __ZN7CheerpX5Linux13requestAcceptEjj(Larg0,Larg1,Larg2,Larg3){
	var L$poptgepsqueezed14=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed15=null,tmp5=0,tmp6=null,tmp7=0;
	tmp2=new constructor__ZN7CheerpX5Linux13requestAcceptEjj$pFrame().a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux13requestAcceptEjj$presume;
	tmp3.a1=__ZN7CheerpX5Linux13requestAcceptEjj$pdestroy;
	tmp3.i7=Larg2;
	tmp3.a6=Larg1;
	L$poptgepsqueezed14=tmp3.a2;
	L$poptgepsqueezed14.a0=nullArray;
	L$poptgepsqueezed14.a0o=0;
	tmp1=L$poptgepsqueezed14.a1;
	tmp1.i0=0;
	L$poptgepsqueezed15=L$poptgepsqueezed14.a;
	tmp5=L$poptgepsqueezed14.o-1;
	Larg0.a0=L$poptgepsqueezed15;
	Larg0.a0o=tmp5;
	L$poptgepsqueezed15=tmp3.a3;
	__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb(L$poptgepsqueezed15,Larg1,Larg2,{type:37,tid:Larg2,arg0:Larg3,arg1:null},1);
	tmp6=L$poptgepsqueezed15.a0;
	tmp5=L$poptgepsqueezed15.a0o|0;
	a:{
		if(tmp6!==nullArray||tmp5!==0)if(tmp6[tmp5].a0!==null){
			tmp3.i4=0;
			tmp3=tmp6[tmp5].a[tmp6[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp6=tmp6[tmp5].a[tmp6[tmp5].o- -1];
		tmp5=tmp6.a1.i1|0;
		tmp6=L$poptgepsqueezed15.a0;
		tmp7=L$poptgepsqueezed15.a0o|0;
		if(tmp6!==nullArray||tmp7!==0)tmp6[tmp7].a1(tmp6,tmp7);
		tmp7=tmp3.i7|0;
		tmp6=tmp3.a6;
		__ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb(L$poptgepsqueezed15,tmp6,tmp7,{type:52,tid:tmp7,value:tmp5},1);
		tmp6=L$poptgepsqueezed15.a0;
		tmp5=L$poptgepsqueezed15.a0o|0;
		if(tmp6!==nullArray||tmp5!==0)if(tmp6[tmp5].a0!==null){
			tmp3.i4=1;
			tmp3=tmp6[tmp5].a[tmp6[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp6=tmp6[tmp5].a[tmp6[tmp5].o- -1];
		tmp6=tmp6.a1.a1;
		tmp2=L$poptgepsqueezed15.a0;
		tmp5=L$poptgepsqueezed15.a0o|0;
		if(tmp2!==nullArray||tmp5!==0)tmp2[tmp5].a1(tmp2,tmp5);
		tmp1.i0=256;
		tmp1.a1=tmp6;
		tmp3.a8=L$poptgepsqueezed14;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed14.a0;
		tmp5=L$poptgepsqueezed14.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux13requestAcceptEjj$presume(Larg0,Marg0){
	var L$poptgepsqueezed12=null,L$ppre_0=null,L$ppre_1=0,L$poptgepsqueezed11=null,tmp4=0;
	L$poptgepsqueezed12=Larg0[Marg0].a3;
	a:{
		if((Larg0[Marg0].i4&3)!==0){
			L$ppre_0=L$poptgepsqueezed12.a0;
			L$ppre_1=L$poptgepsqueezed12.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1];
		}else{
			L$ppre_0=L$poptgepsqueezed12.a0;
			L$ppre_1=L$poptgepsqueezed12.a0o|0;
			L$ppre_0=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
			L$ppre_1=L$ppre_0.a1.i1|0;
			L$ppre_0=L$poptgepsqueezed12.a0;
			tmp4=L$poptgepsqueezed12.a0o|0;
			if(L$ppre_0!==nullArray||tmp4!==0)L$ppre_0[tmp4].a1(L$ppre_0,tmp4);
			tmp4=Larg0[Marg0].i7|0;
			L$ppre_0=Larg0[Marg0].a6;
			__ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb(L$poptgepsqueezed12,L$ppre_0,tmp4,{type:52,tid:tmp4,value:L$ppre_1},1);
			L$ppre_0=L$poptgepsqueezed12.a0;
			L$ppre_1=L$poptgepsqueezed12.a0o|0;
			if(L$ppre_0!==nullArray||L$ppre_1!==0){
				if(L$ppre_0[L$ppre_1].a0!==null){
					Larg0[Marg0].i4=1;
					L$poptgepsqueezed12=L$ppre_0[L$ppre_1].a[L$ppre_0[L$ppre_1].o- -1];
					L$poptgepsqueezed12.a0=Larg0;
					L$poptgepsqueezed12.a0o=Marg0;
					break a;
				}
				L$ppre_0=L$ppre_0[L$ppre_1];
			}else{
				L$ppre_0=null;
			}
		}
		L$ppre_0=L$ppre_0.a[L$ppre_0.o- -1];
		L$ppre_0=L$ppre_0.a1.a1;
		L$poptgepsqueezed11=L$poptgepsqueezed12.a0;
		L$ppre_1=L$poptgepsqueezed12.a0o|0;
		if(L$poptgepsqueezed11!==nullArray||L$ppre_1!==0)L$poptgepsqueezed11[L$ppre_1].a1(L$poptgepsqueezed11,L$ppre_1);
		L$poptgepsqueezed11=Larg0[Marg0].a2;
		L$poptgepsqueezed12=L$poptgepsqueezed11.a1;
		L$poptgepsqueezed12.i0=256;
		L$poptgepsqueezed12.a1=L$ppre_0;
		Larg0[Marg0].a8=L$poptgepsqueezed11;
		Larg0[Marg0].a0=null;
		L$poptgepsqueezed12=L$poptgepsqueezed11.a0;
		L$ppre_1=L$poptgepsqueezed11.a0o|0;
		(L$poptgepsqueezed12!==nullArray||L$ppre_1!==0?L$poptgepsqueezed12:_NoopCoro$pFrame$pConst$p118)[L$poptgepsqueezed12!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118].a0((L$poptgepsqueezed12!==nullArray||L$ppre_1!==0?L$poptgepsqueezed12:_NoopCoro$pFrame$pConst$p118),L$poptgepsqueezed12!==nullArray||L$ppre_1!==0?L$ppre_1:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux13requestAcceptEjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed3=null,tmp1=null,tmp2=0;
	a:if(Larg0.a0!==null){
		L$poptgepsqueezed3=Larg0.a3;
		if((Larg0.i4&3)!==0){
			tmp1=L$poptgepsqueezed3.a0;
			tmp2=L$poptgepsqueezed3.a0o|0;
			if(tmp1===nullArray&&tmp2===0)break a;
		}else{
			tmp1=L$poptgepsqueezed3.a0;
			tmp2=L$poptgepsqueezed3.a0o|0;
			if(tmp1===nullArray&&tmp2===0)break a;
		}
		tmp1[tmp2].a1(tmp1,tmp2);
	}
}
function __ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6){
	var L$poptgepsqueezed50=null,L$ppre$mphi_0=null,tmp2=null,L$poptgepsqueezed55=null,L$ppre$mphi_1=0,L$poptgepsqueezed56=null,tmp6=null,L$poptgepsqueezed57=null,Lgeptoindexphi=0,L$pidx=0;
	L$ppre$mphi_0=new constructor__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE$pFrame().a;
	tmp2=L$ppre$mphi_0[0];
	tmp2.a0=__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE$presume;
	tmp2.a1=__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE$pdestroy;
	tmp2.a8=Larg6;
	tmp2.i7=Larg5;
	tmp2.a6=Larg4;
	tmp2.i5=Larg3;
	tmp2.a4=Larg2;
	tmp2.a3=Larg1;
	L$poptgepsqueezed50=tmp2.a2;
	L$poptgepsqueezed50.a0=nullArray;
	L$poptgepsqueezed50.a0o=0;
	L$poptgepsqueezed55=L$poptgepsqueezed50.a;
	L$ppre$mphi_1=L$poptgepsqueezed50.o-1;
	Larg0.a0=L$poptgepsqueezed55;
	Larg0.a0o=L$ppre$mphi_1;
	L$poptgepsqueezed55="/".concat(Larg3);
	tmp2.a9=L$poptgepsqueezed55;
	L$poptgepsqueezed56=Larg1.a6;
	tmp6="r";
	tmp2.a10=tmp6;
	L$poptgepsqueezed57=tmp2.a16;
	__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed57,L$poptgepsqueezed56,L$poptgepsqueezed55,tmp6,0,0);
	L$poptgepsqueezed55=L$poptgepsqueezed57.a0;
	L$ppre$mphi_1=L$poptgepsqueezed57.a0o|0;
	a:{
		if(L$poptgepsqueezed55!==nullArray||L$ppre$mphi_1!==0)if(L$poptgepsqueezed55[L$ppre$mphi_1].a0!==null){
			tmp2.i23=0;
			tmp2=L$poptgepsqueezed55[L$ppre$mphi_1].a[L$poptgepsqueezed55[L$ppre$mphi_1].o- -1];
			tmp2.a0=L$ppre$mphi_0;
			tmp2.a0o=0;
			break a;
		}
		L$poptgepsqueezed55=L$poptgepsqueezed55[L$ppre$mphi_1].a[L$poptgepsqueezed55[L$ppre$mphi_1].o- -1];
		L$ppre$mphi_1=L$poptgepsqueezed55.a1.i1|0;
		tmp2.i11=L$ppre$mphi_1;
		L$poptgepsqueezed55=L$poptgepsqueezed57.a0;
		Lgeptoindexphi=L$poptgepsqueezed57.a0o|0;
		if(L$poptgepsqueezed55!==nullArray||Lgeptoindexphi!==0)L$poptgepsqueezed55[Lgeptoindexphi].a1(L$poptgepsqueezed55,Lgeptoindexphi);
		L$poptgepsqueezed55=tmp2.a10;
		L$poptgepsqueezed56=tmp2.a9;
		b:{
			if((L$ppre$mphi_1|0)>-1){
				L$poptgepsqueezed55=tmp2.a6;
				if(L$poptgepsqueezed55===null)___assert_fail(_$pstr$p37$p196,0,_$pstr$p15$p124,0,816,___func__$p_ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE,0);
				;
				L$poptgepsqueezed56=tmp2.a17;
				__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(L$poptgepsqueezed56,L$ppre$mphi_1,L$poptgepsqueezed55,tmp2.i7|0,131072);
				L$poptgepsqueezed55=L$poptgepsqueezed56.a0;
				L$ppre$mphi_1=L$poptgepsqueezed56.a0o|0;
				if(L$poptgepsqueezed55!==nullArray||L$ppre$mphi_1!==0)if(L$poptgepsqueezed55[L$ppre$mphi_1].a0!==null){
					tmp2.i23=1;
					tmp2=L$poptgepsqueezed55[L$ppre$mphi_1].a[L$poptgepsqueezed55[L$ppre$mphi_1].o- -1];
					tmp2.a0=L$ppre$mphi_0;
					tmp2.a0o=0;
					break a;
				}
				L$poptgepsqueezed55=L$poptgepsqueezed56.a0;
				L$ppre$mphi_1=L$poptgepsqueezed56.a0o|0;
				if(L$poptgepsqueezed55!==nullArray||L$ppre$mphi_1!==0)L$poptgepsqueezed55[L$ppre$mphi_1].a1(L$poptgepsqueezed55,L$ppre$mphi_1);
				L$poptgepsqueezed55=tmp2.a8;
				if(L$poptgepsqueezed55!==null)tmp2.a4.a6.postMessage(L$poptgepsqueezed55);
				L$poptgepsqueezed55=tmp2.a18;
				__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed55,tmp2.i11|0);
				L$poptgepsqueezed56=L$poptgepsqueezed55.a0;
				L$ppre$mphi_1=L$poptgepsqueezed55.a0o|0;
				if(L$poptgepsqueezed56===nullArray&&L$ppre$mphi_1===0)break b;
				if(L$poptgepsqueezed56[L$ppre$mphi_1].a0!==null){
					tmp2.i23=2;
					tmp2=L$poptgepsqueezed56[L$ppre$mphi_1].a[L$poptgepsqueezed56[L$ppre$mphi_1].o- -1];
					tmp2.a0=L$ppre$mphi_0;
					tmp2.a0o=0;
					break a;
				}
				L$ppre$mphi_0=L$poptgepsqueezed56;
				L$ppre$mphi_1=L$ppre$mphi_1;
			}else{
				L$poptgepsqueezed55=tmp2.a19;
				__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj(L$poptgepsqueezed55,tmp2.a3.a5,tmp2.a4,tmp2.i5<<17,131072);
				L$poptgepsqueezed56=L$poptgepsqueezed55.a0;
				L$ppre$mphi_1=L$poptgepsqueezed55.a0o|0;
				if(L$poptgepsqueezed56!==nullArray||L$ppre$mphi_1!==0)if(L$poptgepsqueezed56[L$ppre$mphi_1].a0!==null){
					tmp2.i23=3;
					tmp2=L$poptgepsqueezed56[L$ppre$mphi_1].a[L$poptgepsqueezed56[L$ppre$mphi_1].o- -1];
					tmp2.a0=L$ppre$mphi_0;
					tmp2.a0o=0;
					break a;
				}
				L$poptgepsqueezed56=L$poptgepsqueezed56[L$ppre$mphi_1].a[L$poptgepsqueezed56[L$ppre$mphi_1].o- -1];
				L$poptgepsqueezed56=L$poptgepsqueezed56.a1.a1;
				tmp2.a12=L$poptgepsqueezed56;
				tmp6=L$poptgepsqueezed55.a0;
				L$ppre$mphi_1=L$poptgepsqueezed55.a0o|0;
				if(tmp6!==nullArray||L$ppre$mphi_1!==0)tmp6[L$ppre$mphi_1].a1(tmp6,L$ppre$mphi_1);
				if(((L$poptgepsqueezed56.length)|0)!==131072)___assert_fail(_$pstr$p38$p197,0,_$pstr$p15$p124,0,825,___func__$p_ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE,0);
				;
				tmp6=tmp2.a6;
				if(tmp6!==null){
					L$ppre$mphi_1=tmp2.i7|0;
					L$pidx=0;
					Lgeptoindexphi=0;
					while(1){
						tmp6[L$ppre$mphi_1+L$pidx|0]=L$poptgepsqueezed56[0+Lgeptoindexphi|0]|0;
						tmp6[L$ppre$mphi_1+(L$pidx+1|0)|0]=L$poptgepsqueezed56[(0+Lgeptoindexphi|0)+1|0]|0;
						tmp6[L$ppre$mphi_1+(L$pidx+2|0)|0]=L$poptgepsqueezed56[(0+Lgeptoindexphi|0)+2|0]|0;
						tmp6[L$ppre$mphi_1+(L$pidx+3|0)|0]=L$poptgepsqueezed56[(0+Lgeptoindexphi|0)+3|0]|0;
						L$pidx=L$pidx+4|0;
						if((L$pidx|0)!==131072){
							Lgeptoindexphi=Lgeptoindexphi+4|0;
							continue;
						}
						break;
					}
				}
				L$poptgepsqueezed55=tmp2.a8;
				if(L$poptgepsqueezed55!==null)tmp2.a4.a6.postMessage(L$poptgepsqueezed55);
				L$poptgepsqueezed55=tmp2.a9;
				L$poptgepsqueezed56=tmp2.a3.a6;
				tmp6="w";
				tmp2.a13=tmp6;
				L$poptgepsqueezed57=tmp2.a20;
				__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed57,L$poptgepsqueezed56,L$poptgepsqueezed55,tmp6,0,0);
				L$poptgepsqueezed55=L$poptgepsqueezed57.a0;
				L$ppre$mphi_1=L$poptgepsqueezed57.a0o|0;
				if(L$poptgepsqueezed55!==nullArray||L$ppre$mphi_1!==0)if(L$poptgepsqueezed55[L$ppre$mphi_1].a0!==null){
					tmp2.i23=4;
					tmp2=L$poptgepsqueezed55[L$ppre$mphi_1].a[L$poptgepsqueezed55[L$ppre$mphi_1].o- -1];
					tmp2.a0=L$ppre$mphi_0;
					tmp2.a0o=0;
					break a;
				}
				L$poptgepsqueezed55=L$poptgepsqueezed55[L$ppre$mphi_1].a[L$poptgepsqueezed55[L$ppre$mphi_1].o- -1];
				L$ppre$mphi_1=L$poptgepsqueezed55.a1.i1|0;
				tmp2.i14=L$ppre$mphi_1;
				L$poptgepsqueezed55=L$poptgepsqueezed57.a0;
				Lgeptoindexphi=L$poptgepsqueezed57.a0o|0;
				if(L$poptgepsqueezed55!==nullArray||Lgeptoindexphi!==0)L$poptgepsqueezed55[Lgeptoindexphi].a1(L$poptgepsqueezed55,Lgeptoindexphi);
				L$poptgepsqueezed55=tmp2.a13;
				L$poptgepsqueezed56=tmp2.a9;
				if((L$ppre$mphi_1|0)<=-1)___assert_fail(_$pstr$p40$p198,0,_$pstr$p15$p124,0,836,___func__$p_ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE,0);
				;
				L$poptgepsqueezed55=tmp2.a21;
				__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed55,L$ppre$mphi_1,tmp2.a12,0,131072);
				L$poptgepsqueezed56=L$poptgepsqueezed55.a0;
				L$ppre$mphi_1=L$poptgepsqueezed55.a0o|0;
				if(L$poptgepsqueezed56!==nullArray||L$ppre$mphi_1!==0)if(L$poptgepsqueezed56[L$ppre$mphi_1].a0!==null){
					tmp2.i23=5;
					tmp2=L$poptgepsqueezed56[L$ppre$mphi_1].a[L$poptgepsqueezed56[L$ppre$mphi_1].o- -1];
					tmp2.a0=L$ppre$mphi_0;
					tmp2.a0o=0;
					break a;
				}
				L$poptgepsqueezed56=L$poptgepsqueezed55.a0;
				L$ppre$mphi_1=L$poptgepsqueezed55.a0o|0;
				if(L$poptgepsqueezed56!==nullArray||L$ppre$mphi_1!==0)L$poptgepsqueezed56[L$ppre$mphi_1].a1(L$poptgepsqueezed56,L$ppre$mphi_1);
				L$poptgepsqueezed55=tmp2.a22;
				__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed55,tmp2.i14|0);
				L$poptgepsqueezed56=L$poptgepsqueezed55.a0;
				L$ppre$mphi_1=L$poptgepsqueezed55.a0o|0;
				if(L$poptgepsqueezed56===nullArray&&L$ppre$mphi_1===0)break b;
				if(L$poptgepsqueezed56[L$ppre$mphi_1].a0!==null){
					tmp2.i23=6;
					tmp2=L$poptgepsqueezed56[L$ppre$mphi_1].a[L$poptgepsqueezed56[L$ppre$mphi_1].o- -1];
					tmp2.a0=L$ppre$mphi_0;
					tmp2.a0o=0;
					break a;
				}
				L$ppre$mphi_0=L$poptgepsqueezed56;
				L$ppre$mphi_1=L$ppre$mphi_1;
			}
			L$ppre$mphi_0[L$ppre$mphi_1].a1(L$ppre$mphi_0,L$ppre$mphi_1);
		}
		tmp2.a15=L$poptgepsqueezed50;
		tmp2.a0=null;
		L$ppre$mphi_0=L$poptgepsqueezed50.a0;
		L$ppre$mphi_1=L$poptgepsqueezed50.a0o|0;
		(L$ppre$mphi_0!==nullArray||L$ppre$mphi_1!==0?L$ppre$mphi_0:_NoopCoro$pFrame$pConst$p118)[L$ppre$mphi_0!==nullArray||L$ppre$mphi_1!==0?L$ppre$mphi_1:$NoopCoro$pFrame$pConst$p118].a0((L$ppre$mphi_0!==nullArray||L$ppre$mphi_1!==0?L$ppre$mphi_0:_NoopCoro$pFrame$pConst$p118),L$ppre$mphi_0!==nullArray||L$ppre$mphi_1!==0?L$ppre$mphi_1:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE$presume(Larg0,Marg0){
	var tmp0=null,L$ppre46_0=0,L$poptgepsqueezed60=null,L$poptgepsqueezed61=null,L$poptgepsqueezed62=null,L$poptgepsqueezed63=null,L$ppre39_0=null,L$poptgepsqueezed65=null,tmp8=null,Lgeptoindexphi=0,L$pidx=0;
	L$ppre46_0=Larg0[Marg0].i23|0;
	L$poptgepsqueezed60=Larg0[Marg0].a22;
	L$poptgepsqueezed61=Larg0[Marg0].a21;
	L$poptgepsqueezed62=Larg0[Marg0].a20;
	a:{
		b:{
			c:{
				d:{
					if(L$ppre46_0<<29>-536870912){
						L$poptgepsqueezed63=Larg0[Marg0].a19;
						L$ppre39_0=Larg0[Marg0].a18;
						e:{
							if((L$ppre46_0&7)<2){
								L$poptgepsqueezed65=Larg0[Marg0].a17;
								if((L$ppre46_0&7)!==0){
									L$poptgepsqueezed60=L$poptgepsqueezed65.a0;
									L$ppre46_0=L$poptgepsqueezed65.a0o|0;
									L$poptgepsqueezed60=L$poptgepsqueezed60[L$ppre46_0];
								}else{
									tmp8=Larg0[Marg0].a16.a0;
									L$ppre46_0=Larg0[Marg0].a16.a0o|0;
									tmp8=tmp8[L$ppre46_0].a[tmp8[L$ppre46_0].o- -1];
									L$ppre46_0=tmp8.a1.i1|0;
									Larg0[Marg0].i11=L$ppre46_0;
									tmp8=Larg0[Marg0].a16.a0;
									Lgeptoindexphi=Larg0[Marg0].a16.a0o|0;
									if(tmp8!==nullArray||Lgeptoindexphi!==0)tmp8[Lgeptoindexphi].a1(tmp8,Lgeptoindexphi);
									tmp8=Larg0[Marg0].a10;
									tmp0=Larg0[Marg0].a9;
									if((L$ppre46_0|0)<=-1){
										__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj(L$poptgepsqueezed63,Larg0[Marg0].a3.a5,Larg0[Marg0].a4,Larg0[Marg0].i5<<17,131072);
										L$ppre39_0=L$poptgepsqueezed63.a0;
										L$ppre46_0=L$poptgepsqueezed63.a0o|0;
										if(L$ppre39_0!==nullArray||L$ppre46_0!==0){
											if(L$ppre39_0[L$ppre46_0].a0!==null){
												Larg0[Marg0].i23=3;
												L$poptgepsqueezed60=L$ppre39_0[L$ppre46_0].a[L$ppre39_0[L$ppre46_0].o- -1];
												L$poptgepsqueezed60.a0=Larg0;
												L$poptgepsqueezed60.a0o=Marg0;
												break a;
											}
											L$ppre39_0=L$ppre39_0[L$ppre46_0];
											break e;
										}
										L$ppre39_0=null;
										break e;
									}
									L$poptgepsqueezed60=Larg0[Marg0].a6;
									if(L$poptgepsqueezed60===null)___assert_fail(_$pstr$p37$p196,0,_$pstr$p15$p124,0,816,___func__$p_ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE,0);
									;
									__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii(L$poptgepsqueezed65,L$ppre46_0,L$poptgepsqueezed60,Larg0[Marg0].i7|0,131072);
									L$poptgepsqueezed60=L$poptgepsqueezed65.a0;
									L$ppre46_0=L$poptgepsqueezed65.a0o|0;
									if(L$poptgepsqueezed60!==nullArray||L$ppre46_0!==0){
										if(L$poptgepsqueezed60[L$ppre46_0].a0!==null){
											Larg0[Marg0].i23=1;
											L$poptgepsqueezed60=L$poptgepsqueezed60[L$ppre46_0].a[L$poptgepsqueezed60[L$ppre46_0].o- -1];
											L$poptgepsqueezed60.a0=Larg0;
											L$poptgepsqueezed60.a0o=Marg0;
											break a;
										}
										L$poptgepsqueezed60=L$poptgepsqueezed60[L$ppre46_0];
									}else{
										L$poptgepsqueezed60=null;
									}
								}
								L$poptgepsqueezed60=L$poptgepsqueezed65.a0;
								L$ppre46_0=L$poptgepsqueezed65.a0o|0;
								if(L$poptgepsqueezed60!==nullArray||L$ppre46_0!==0)L$poptgepsqueezed60[L$ppre46_0].a1(L$poptgepsqueezed60,L$ppre46_0);
								L$poptgepsqueezed60=Larg0[Marg0].a8;
								if(L$poptgepsqueezed60!==null)Larg0[Marg0].a4.a6.postMessage(L$poptgepsqueezed60);
								__ZN7CheerpX14CheerpOSDevice5closeEi(L$ppre39_0,Larg0[Marg0].i11|0);
								L$poptgepsqueezed60=L$ppre39_0.a0;
								L$ppre46_0=L$ppre39_0.a0o|0;
								if(L$poptgepsqueezed60===nullArray&&L$ppre46_0===0)break b;
								if(L$poptgepsqueezed60[L$ppre46_0].a0!==null){
									Larg0[Marg0].i23=2;
									L$poptgepsqueezed60=L$poptgepsqueezed60[L$ppre46_0].a[L$poptgepsqueezed60[L$ppre46_0].o- -1];
									L$poptgepsqueezed60.a0=Larg0;
									L$poptgepsqueezed60.a0o=Marg0;
									break a;
								}
								L$ppre39_0=L$poptgepsqueezed60;
								break c;
							}
							if((L$ppre46_0&7)===2){
								L$poptgepsqueezed60=L$ppre39_0.a0;
								L$ppre46_0=L$ppre39_0.a0o|0;
								if(L$poptgepsqueezed60===nullArray&&L$ppre46_0===0)break b;
								L$ppre39_0=L$poptgepsqueezed60;
								break c;
							}
							L$ppre39_0=L$poptgepsqueezed63.a0;
							L$ppre46_0=L$poptgepsqueezed63.a0o|0;
							L$ppre39_0=L$ppre39_0[L$ppre46_0];
						}
						L$ppre39_0=L$ppre39_0.a[L$ppre39_0.o- -1];
						L$ppre39_0=L$ppre39_0.a1.a1;
						Larg0[Marg0].a12=L$ppre39_0;
						L$poptgepsqueezed65=L$poptgepsqueezed63.a0;
						L$ppre46_0=L$poptgepsqueezed63.a0o|0;
						if(L$poptgepsqueezed65!==nullArray||L$ppre46_0!==0)L$poptgepsqueezed65[L$ppre46_0].a1(L$poptgepsqueezed65,L$ppre46_0);
						if(((L$ppre39_0.length)|0)!==131072)___assert_fail(_$pstr$p38$p197,0,_$pstr$p15$p124,0,825,___func__$p_ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE,0);
						;
						L$poptgepsqueezed65=Larg0[Marg0].a6;
						if(L$poptgepsqueezed65!==null){
							L$ppre46_0=Larg0[Marg0].i7|0;
							L$pidx=0;
							Lgeptoindexphi=0;
							while(1){
								L$poptgepsqueezed65[L$ppre46_0+L$pidx|0]=L$ppre39_0[0+Lgeptoindexphi|0]|0;
								L$poptgepsqueezed65[L$ppre46_0+(L$pidx+1|0)|0]=L$ppre39_0[(0+Lgeptoindexphi|0)+1|0]|0;
								L$poptgepsqueezed65[L$ppre46_0+(L$pidx+2|0)|0]=L$ppre39_0[(0+Lgeptoindexphi|0)+2|0]|0;
								L$poptgepsqueezed65[L$ppre46_0+(L$pidx+3|0)|0]=L$ppre39_0[(0+Lgeptoindexphi|0)+3|0]|0;
								L$pidx=L$pidx+4|0;
								if((L$pidx|0)!==131072){
									Lgeptoindexphi=Lgeptoindexphi+4|0;
									continue;
								}
								break;
							}
						}
						L$poptgepsqueezed63=Larg0[Marg0].a8;
						if(L$poptgepsqueezed63!==null)Larg0[Marg0].a4.a6.postMessage(L$poptgepsqueezed63);
						L$poptgepsqueezed63=Larg0[Marg0].a9;
						L$ppre39_0=Larg0[Marg0].a3.a6;
						L$poptgepsqueezed65="w";
						Larg0[Marg0].a13=L$poptgepsqueezed65;
						__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed62,L$ppre39_0,L$poptgepsqueezed63,L$poptgepsqueezed65,0,0);
						L$poptgepsqueezed63=L$poptgepsqueezed62.a0;
						L$ppre46_0=L$poptgepsqueezed62.a0o|0;
						if(L$poptgepsqueezed63!==nullArray||L$ppre46_0!==0){
							if(L$poptgepsqueezed63[L$ppre46_0].a0!==null){
								Larg0[Marg0].i23=4;
								L$poptgepsqueezed60=L$poptgepsqueezed63[L$ppre46_0].a[L$poptgepsqueezed63[L$ppre46_0].o- -1];
								L$poptgepsqueezed60.a0=Larg0;
								L$poptgepsqueezed60.a0o=Marg0;
								break a;
							}
							L$poptgepsqueezed63=L$poptgepsqueezed63[L$ppre46_0];
						}else{
							L$poptgepsqueezed63=null;
						}
					}else{
						if((L$ppre46_0&7)>=6){
							L$ppre39_0=L$poptgepsqueezed60.a0;
							L$ppre46_0=L$poptgepsqueezed60.a0o|0;
							if(L$ppre39_0!==nullArray||L$ppre46_0!==0)break c;
							break b;
						}
						if((L$ppre46_0&7)!==4){
							L$poptgepsqueezed62=L$poptgepsqueezed61.a0;
							L$ppre46_0=L$poptgepsqueezed61.a0o|0;
							L$poptgepsqueezed62=L$poptgepsqueezed62[L$ppre46_0];
							break d;
						}
						L$poptgepsqueezed63=L$poptgepsqueezed62.a0;
						L$ppre46_0=L$poptgepsqueezed62.a0o|0;
						L$poptgepsqueezed63=L$poptgepsqueezed63[L$ppre46_0];
					}
					L$poptgepsqueezed63=L$poptgepsqueezed63.a[L$poptgepsqueezed63.o- -1];
					L$ppre46_0=L$poptgepsqueezed63.a1.i1|0;
					Larg0[Marg0].i14=L$ppre46_0;
					L$poptgepsqueezed63=L$poptgepsqueezed62.a0;
					Lgeptoindexphi=L$poptgepsqueezed62.a0o|0;
					if(L$poptgepsqueezed63!==nullArray||Lgeptoindexphi!==0)L$poptgepsqueezed63[Lgeptoindexphi].a1(L$poptgepsqueezed63,Lgeptoindexphi);
					L$poptgepsqueezed62=Larg0[Marg0].a13;
					L$poptgepsqueezed63=Larg0[Marg0].a9;
					if((L$ppre46_0|0)<=-1)___assert_fail(_$pstr$p40$p198,0,_$pstr$p15$p124,0,836,___func__$p_ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE,0);
					;
					__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed61,L$ppre46_0,Larg0[Marg0].a12,0,131072);
					L$poptgepsqueezed62=L$poptgepsqueezed61.a0;
					L$ppre46_0=L$poptgepsqueezed61.a0o|0;
					if(L$poptgepsqueezed62!==nullArray||L$ppre46_0!==0){
						if(L$poptgepsqueezed62[L$ppre46_0].a0!==null){
							Larg0[Marg0].i23=5;
							L$poptgepsqueezed60=L$poptgepsqueezed62[L$ppre46_0].a[L$poptgepsqueezed62[L$ppre46_0].o- -1];
							L$poptgepsqueezed60.a0=Larg0;
							L$poptgepsqueezed60.a0o=Marg0;
							break a;
						}
						L$poptgepsqueezed62=L$poptgepsqueezed62[L$ppre46_0];
					}else{
						L$poptgepsqueezed62=null;
					}
				}
				L$poptgepsqueezed62=L$poptgepsqueezed61.a0;
				L$ppre46_0=L$poptgepsqueezed61.a0o|0;
				if(L$poptgepsqueezed62!==nullArray||L$ppre46_0!==0)L$poptgepsqueezed62[L$ppre46_0].a1(L$poptgepsqueezed62,L$ppre46_0);
				__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed60,Larg0[Marg0].i14|0);
				L$ppre39_0=L$poptgepsqueezed60.a0;
				L$ppre46_0=L$poptgepsqueezed60.a0o|0;
				if(L$ppre39_0===nullArray&&L$ppre46_0===0)break b;
				if(L$ppre39_0[L$ppre46_0].a0!==null){
					Larg0[Marg0].i23=6;
					L$poptgepsqueezed60=L$ppre39_0[L$ppre46_0].a[L$ppre39_0[L$ppre46_0].o- -1];
					L$poptgepsqueezed60.a0=Larg0;
					L$poptgepsqueezed60.a0o=Marg0;
					break a;
				}
			}
			L$ppre39_0[L$ppre46_0].a1(L$ppre39_0,L$ppre46_0);
		}
		L$poptgepsqueezed60=Larg0[Marg0].a2;
		Larg0[Marg0].a15=L$poptgepsqueezed60;
		Larg0[Marg0].a0=null;
		L$poptgepsqueezed61=L$poptgepsqueezed60.a0;
		L$ppre46_0=L$poptgepsqueezed60.a0o|0;
		(L$poptgepsqueezed61!==nullArray||L$ppre46_0!==0?L$poptgepsqueezed61:_NoopCoro$pFrame$pConst$p118)[L$poptgepsqueezed61!==nullArray||L$ppre46_0!==0?L$ppre46_0:$NoopCoro$pFrame$pConst$p118].a0((L$poptgepsqueezed61!==nullArray||L$ppre46_0!==0?L$poptgepsqueezed61:_NoopCoro$pFrame$pConst$p118),L$poptgepsqueezed61!==nullArray||L$ppre46_0!==0?L$ppre46_0:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=0,tmp1=null,tmp2=null;
	if(Larg0.a0!==null){
		tmp0=Larg0.i23|0;
		if(tmp0<<29>-536870912){
			if((tmp0&7)<2){
				if((tmp0&7)!==0){
					tmp1=Larg0.a17.a0;
					tmp0=Larg0.a17.a0o|0;
					if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
				}else{
					tmp1=Larg0.a16.a0;
					tmp0=Larg0.a16.a0o|0;
					if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
					tmp1=Larg0.a10;
					tmp2=Larg0.a9;
				}
			}else if((tmp0&7)===2){
				tmp1=Larg0.a18.a0;
				tmp0=Larg0.a18.a0o|0;
				if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
			}else{
				tmp1=Larg0.a19.a0;
				tmp0=Larg0.a19.a0o|0;
				if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
			}
		}else if((tmp0&7)<6){
			if((tmp0&7)===4){
				Larg0.i14=Larg0.i11|0;
				tmp1=Larg0.a20.a0;
				tmp0=Larg0.a20.a0o|0;
				if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
				tmp1=Larg0.a13;
				tmp2=Larg0.a9;
			}else{
				tmp1=Larg0.a21.a0;
				tmp0=Larg0.a21.a0o|0;
				if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
			}
		}else{
			tmp1=Larg0.a22.a0;
			tmp0=Larg0.a22.a0o|0;
			if(tmp1!==nullArray||tmp0!==0)tmp1[tmp0].a1(tmp1,tmp0);
		}
	}
}
function __ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,L$poptgepsqueezed227=null,L$poptgepsqueezed228=null,L$poptgepsqueezed229=null,L$poptgepsqueezed230=null,L$poptgepsqueezed231=null,L$poptgepsqueezed232=null,L$poptgepsqueezed233=null,tmp9=0,L$poptgep$poptgep70$poptgepsqueezed=null,L$poptgepsqueezed226=null,L$pbe=null,L$pbe147=null,L$pbe148=null,L$poptgep93$poptgep97$poptgepsqueezed=null,L$poptgep93$poptgep$poptgepsqueezed=null,L$pbe151=0,tmp18=null,tmp19=null,Lgeptoindex20=0,tmp21=0,Lxtraiter182=0,Lgeptoindexphi=0,tmp24=0,Lgeptoindexphi8=0,tmp26=0;
	tmp0=new constructor__ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE$pFrame().a;
	tmp1=tmp0[0];
	tmp1.a0=__ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE$presume;
	tmp1.a1=__ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE$pdestroy;
	tmp1.a17=Larg2;
	tmp1.a16=Larg1;
	L$poptgep$poptgep70$poptgepsqueezed=tmp1.a2.a[tmp1.a2.o-1];
	Larg0.a0=L$poptgep$poptgep70$poptgepsqueezed;
	L$poptgepsqueezed226=tmp1.a12;
	L$poptgepsqueezed227=tmp1.a11;
	L$poptgepsqueezed228=tmp1.a10;
	L$poptgepsqueezed229=tmp1.a9;
	L$poptgepsqueezed230=tmp1.a8;
	L$poptgepsqueezed231=tmp1.a7;
	L$poptgepsqueezed232=tmp1.a6;
	L$poptgepsqueezed233=tmp1.a5;
	while(1){
		tmp1.i24=L$pbe151;
		tmp1.a23=L$poptgep93$poptgep$poptgepsqueezed;
		tmp1.a22=L$poptgep93$poptgep97$poptgepsqueezed;
		tmp1.a21=L$pbe148;
		tmp1.a20=L$pbe147;
		tmp1.a19=L$poptgep$poptgep70$poptgepsqueezed;
		tmp1.a18=L$pbe;
		L$poptgep$poptgep70$poptgepsqueezed=tmp1.a16;
		L$poptgep93$poptgep$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed.a8;
		tmp18=L$poptgep93$poptgep$poptgepsqueezed.a0;
		L$pbe151=L$poptgep93$poptgep$poptgepsqueezed.a0o|0;
		tmp19=L$poptgep93$poptgep$poptgepsqueezed.a1;
		Lgeptoindex20=L$poptgep93$poptgep$poptgepsqueezed.a1o|0;
		if(tmp18===tmp19&&L$pbe151===Lgeptoindex20){
			L$poptgep93$poptgep$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed.a9;
			tmp18=L$poptgep93$poptgep$poptgepsqueezed.a0;
			L$pbe151=L$poptgep93$poptgep$poptgepsqueezed.a0o|0;
			tmp19=L$poptgep93$poptgep$poptgepsqueezed.a1;
			tmp21=L$poptgep93$poptgep$poptgepsqueezed.a1o|0;
			if(tmp18===tmp19&&L$pbe151===tmp21){
				L$poptgep93$poptgep97$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed.a10;
				L$poptgep93$poptgep$poptgepsqueezed=L$poptgep93$poptgep97$poptgepsqueezed.a0;
				L$pbe151=L$poptgep93$poptgep97$poptgepsqueezed.a0o|0;
				L$pbe=L$poptgep93$poptgep97$poptgepsqueezed.a1;
				Lxtraiter182=L$poptgep93$poptgep97$poptgepsqueezed.a1o|0;
				if(L$poptgep93$poptgep$poptgepsqueezed===L$pbe&&L$pbe151===Lxtraiter182){
					L$poptgep93$poptgep$poptgepsqueezed=__ZN7CheerpX5Linux6eventsE[2];
					if(L$poptgep93$poptgep$poptgepsqueezed!==null){
						L$poptgep$poptgep70$poptgepsqueezed=tmp1.a15[0];
						tmp18="ready";
						tmp1.a15[0]=tmp18;
						if((L$poptgep93$poptgep$poptgepsqueezed.i0|0)===1){
							if(((tmp18|0)|0)===1){
								tmp19="ready";
								tmp19=tmp19;
							}else{
								tmp19="wait";
								tmp19=tmp19;
							}
						}else tmp19=tmp18;
						L$poptgep93$poptgep$poptgepsqueezed=L$poptgep93$poptgep$poptgepsqueezed.a1;
						L$poptgep$poptgep70$poptgepsqueezed=L$poptgep93$poptgep$poptgepsqueezed.a0;
						L$pbe151=L$poptgep93$poptgep$poptgepsqueezed.a0o|0;
						L$poptgep93$poptgep97$poptgepsqueezed=L$poptgep93$poptgep$poptgepsqueezed.a1;
						Lgeptoindex20=L$poptgep93$poptgep$poptgepsqueezed.a1o|0;
						if(L$poptgep$poptgep70$poptgepsqueezed!==L$poptgep93$poptgep97$poptgepsqueezed||L$pbe151!==Lgeptoindex20){
							Lgeptoindexphi=0;
							while(1){
								L$poptgep$poptgep70$poptgepsqueezed[L$pbe151+Lgeptoindexphi|0](tmp19);
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								if(L$poptgep$poptgep70$poptgepsqueezed!==L$poptgep93$poptgep97$poptgepsqueezed||(L$pbe151+Lgeptoindexphi|0)!==Lgeptoindex20)continue;
								break;
							}
						}
						L$poptgep$poptgep70$poptgepsqueezed=tmp1.a16;
					}
					__ZN7CheerpX5Linux18checkPendingWritesEv(tmp1.a17);
					L$poptgep$poptgep70$poptgepsqueezed.i11=L$poptgep$poptgep70$poptgepsqueezed.i11&65280|1;
					L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed.a7;
					L$poptgepsqueezed226=tmp1.a4;
					L$poptgepsqueezed226.a0=L$poptgep$poptgep70$poptgepsqueezed;
					if(L$poptgep$poptgep70$poptgepsqueezed.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
					;
					L$poptgep$poptgep70$poptgepsqueezed.a2=L$poptgepsqueezed226;
					tmp1.i13=8;
					L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
					L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
					break;
				}
				L$poptgep$poptgep70$poptgepsqueezed.i11=L$poptgep$poptgep70$poptgepsqueezed.i11&255|256;
				L$poptgep$poptgep70$poptgepsqueezed=tmp1.a3;
				L$poptgep$poptgep70$poptgepsqueezed.i0=L$poptgep93$poptgep$poptgepsqueezed[L$pbe151].i0|0;
				L$poptgep$poptgep70$poptgepsqueezed.i1=L$poptgep93$poptgep$poptgepsqueezed[L$pbe151].i1|0;
				Lxtraiter182=L$poptgep93$poptgep$poptgepsqueezed[L$pbe151].i2|0;
				L$poptgep$poptgep70$poptgepsqueezed.i2=Lxtraiter182;
				L$poptgep$poptgep70$poptgepsqueezed.a3=L$poptgep93$poptgep$poptgepsqueezed[L$pbe151].a3;
				L$pbe=L$poptgep93$poptgep97$poptgepsqueezed.a0;
				tmp24=L$poptgep93$poptgep97$poptgepsqueezed.a0o|0;
				L$pbe151=(__imul(L$pbe151,16))-(__imul(tmp24,16))>>4;
				Lgeptoindex20=L$pbe151+1|0;
				L$poptgep93$poptgep$poptgepsqueezed=L$poptgep93$poptgep97$poptgepsqueezed.a1;
				Lgeptoindexphi=L$poptgep93$poptgep97$poptgepsqueezed.a1o|0;
				Lgeptoindexphi=(__imul(Lgeptoindexphi,16))-(__imul(tmp24+Lgeptoindex20|0,16))|0;
				if(Lgeptoindexphi>>>0>=16){
					Lxtraiter182=Lgeptoindexphi-16|0;
					if((Lxtraiter182&16|0)!==0){
						Lgeptoindexphi8=L$pbe151;
					}else{
						L$pbe[tmp24+L$pbe151|0].i0=L$pbe[tmp24+Lgeptoindex20|0].i0|0;
						L$pbe[tmp24+L$pbe151|0].i1=L$pbe[tmp24+Lgeptoindex20|0].i1|0;
						L$pbe[tmp24+L$pbe151|0].i2=L$pbe[tmp24+Lgeptoindex20|0].i2|0;
						L$pbe[tmp24+L$pbe151|0].a3=L$pbe[tmp24+Lgeptoindex20|0].a3;
						Lgeptoindexphi8=Lgeptoindex20;
						Lgeptoindex20=Lgeptoindex20+1|0;
					}
					if(Lxtraiter182>>>0>=16)while(1){
						L$pbe[tmp24+Lgeptoindexphi8|0].i0=L$pbe[tmp24+Lgeptoindex20|0].i0|0;
						L$pbe[tmp24+Lgeptoindexphi8|0].i1=L$pbe[tmp24+Lgeptoindex20|0].i1|0;
						L$pbe[tmp24+Lgeptoindexphi8|0].i2=L$pbe[tmp24+Lgeptoindex20|0].i2|0;
						L$pbe[tmp24+Lgeptoindexphi8|0].a3=L$pbe[tmp24+Lgeptoindex20|0].a3;
						L$pbe[(tmp24+Lgeptoindexphi8|0)+1|0].i0=L$pbe[(tmp24+Lgeptoindex20|0)+1|0].i0|0;
						L$pbe[(tmp24+Lgeptoindexphi8|0)+1|0].i1=L$pbe[(tmp24+Lgeptoindex20|0)+1|0].i1|0;
						L$pbe[(tmp24+Lgeptoindexphi8|0)+1|0].i2=L$pbe[(tmp24+Lgeptoindex20|0)+1|0].i2|0;
						L$pbe[(tmp24+Lgeptoindexphi8|0)+1|0].a3=L$pbe[(tmp24+Lgeptoindex20|0)+1|0].a3;
						Lgeptoindexphi8=Lgeptoindexphi8+2|0;
						if(L$pbe!==L$pbe||((tmp24+L$pbe151|0)+(Lgeptoindexphi>>>4)|0)!==(tmp24+Lgeptoindexphi8|0)){
							Lgeptoindex20=Lgeptoindex20+2|0;
							continue;
						}
						break;
					}
					Lxtraiter182=L$poptgep$poptgep70$poptgepsqueezed.i2|0;
				}
				L$poptgep93$poptgep97$poptgepsqueezed.a1=L$pbe;
				L$poptgep93$poptgep97$poptgepsqueezed.a1o=(tmp24+L$pbe151|0)+(Lgeptoindexphi>>4)|0;
				if((Lxtraiter182&131071|0)!==0)___assert_fail(_$pstr$p41$p201,0,_$pstr$p15$p124,0,910,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
				;
				L$pbe=tmp1.a16;
				L$poptgep93$poptgep97$poptgepsqueezed="/".concat(Lxtraiter182>>>17);
				tmp1.a32=L$poptgep93$poptgep97$poptgepsqueezed;
				L$pbe=L$pbe.a6;
				L$pbe147="w";
				tmp1.a33=L$pbe147;
				__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed228,L$pbe,L$poptgep93$poptgep97$poptgepsqueezed,L$pbe147,0,0);
				L$pbe=L$poptgepsqueezed228.a0;
				L$pbe151=L$poptgepsqueezed228.a0o|0;
				if(L$pbe!==nullArray||L$pbe151!==0)if(L$pbe[L$pbe151].a0!==null){
					tmp1.i13=5;
					L$poptgep$poptgep70$poptgepsqueezed=L$pbe[L$pbe151].a[L$pbe[L$pbe151].o- -1];
					L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
					L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
					break;
				}
				L$pbe=L$pbe[L$pbe151].a[L$pbe[L$pbe151].o- -1];
				L$pbe151=L$pbe.a1.i1|0;
				tmp1.i34=L$pbe151;
				L$pbe=L$poptgepsqueezed228.a0;
				Lgeptoindex20=L$poptgepsqueezed228.a0o|0;
				if(L$pbe!==nullArray||Lgeptoindex20!==0)L$pbe[Lgeptoindex20].a1(L$pbe,Lgeptoindex20);
				L$pbe=tmp1.a33;
				L$pbe147=tmp1.a32;
				if((L$pbe151|0)<=-1)___assert_fail(_$pstr$p40$p198,0,_$pstr$p15$p124,0,915,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
				;
				L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed.a3;
				Lgeptoindex20=L$poptgep$poptgep70$poptgepsqueezed.len;
				Lgeptoindexphi=L$poptgep$poptgep70$poptgepsqueezed.bufOffset;
				if((Lgeptoindex20|0)!==131072)___assert_fail(_$pstr$p42$p202,0,_$pstr$p15$p124,0,918,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
				;
				__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed227,L$pbe151,HEAP8,Lgeptoindexphi,131072);
				L$poptgep$poptgep70$poptgepsqueezed=L$poptgepsqueezed227.a0;
				L$pbe151=L$poptgepsqueezed227.a0o|0;
				if(L$poptgep$poptgep70$poptgepsqueezed!==nullArray||L$pbe151!==0)if(L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a0!==null){
					tmp1.i13=6;
					L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
					L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
					L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
					break;
				}
				L$poptgep$poptgep70$poptgepsqueezed=L$poptgepsqueezed227.a0;
				L$pbe151=L$poptgepsqueezed227.a0o|0;
				if(L$poptgep$poptgep70$poptgepsqueezed!==nullArray||L$pbe151!==0)L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a1(L$poptgep$poptgep70$poptgepsqueezed,L$pbe151);
				__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed226,tmp1.i34|0);
				L$poptgep$poptgep70$poptgepsqueezed=L$poptgepsqueezed226.a0;
				L$pbe151=L$poptgepsqueezed226.a0o|0;
				if(L$poptgep$poptgep70$poptgepsqueezed!==nullArray||L$pbe151!==0){
					if(L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a0!==null){
						tmp1.i13=7;
						L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
						L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
						L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
						break;
					}
					L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a1(L$poptgep$poptgep70$poptgepsqueezed,L$pbe151);
				}
				L$poptgep$poptgep70$poptgepsqueezed=tmp1.a16;
				L$poptgep$poptgep70$poptgepsqueezed.i11=L$poptgep$poptgep70$poptgepsqueezed.i11&255;
				L$poptgep$poptgep70$poptgepsqueezed=tmp1.a19;
				L$pbe=tmp1.a18;
				L$pbe147=tmp1.a32;
				L$pbe148=tmp1.a33;
				L$poptgep93$poptgep97$poptgepsqueezed=tmp1.a22;
				L$poptgep93$poptgep$poptgepsqueezed=tmp1.a23;
				L$pbe151=tmp1.i34|0;
			}else{
				tmp21=tmp18[L$pbe151]|0;
				tmp1.i25=tmp21;
				L$poptgep$poptgep70$poptgepsqueezed=L$poptgep93$poptgep$poptgepsqueezed.a0;
				tmp9=L$poptgep93$poptgep$poptgepsqueezed.a0o|0;
				L$pbe151=(__imul(L$pbe151,4))-(__imul(tmp9,4))>>2;
				Lgeptoindex20=L$pbe151+1|0;
				tmp18=L$poptgep93$poptgep$poptgepsqueezed.a1;
				tmp24=L$poptgep93$poptgep$poptgepsqueezed.a1o|0;
				tmp26=(__imul(tmp24,4))-(__imul(tmp9+Lgeptoindex20|0,4))|0;
				if(tmp26>>>0>=4){
					tmp24=tmp26-4|0;
					Lxtraiter182=(tmp24>>>2)+1&7;
					if((Lxtraiter182|0)!==0){
						Lgeptoindexphi=L$pbe151;
						Lgeptoindexphi8=0;
						while(1){
							L$poptgep$poptgep70$poptgepsqueezed[tmp9+Lgeptoindexphi|0]=L$poptgep$poptgep70$poptgepsqueezed[tmp9+Lgeptoindex20|0]|0;
							Lgeptoindexphi8=Lgeptoindexphi8+1|0;
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							Lgeptoindex20=Lgeptoindex20+1|0;
							if((Lgeptoindexphi8|0)!==(Lxtraiter182|0))continue;
							break;
						}
					}else{
						Lgeptoindexphi=L$pbe151;
					}
					if(tmp24>>>0>=28)while(1){
						L$poptgep$poptgep70$poptgepsqueezed[tmp9+Lgeptoindexphi|0]=L$poptgep$poptgep70$poptgepsqueezed[tmp9+Lgeptoindex20|0]|0;
						L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindexphi|0)+1|0]=L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindex20|0)+1|0]|0;
						L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindexphi|0)+2|0]=L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindex20|0)+2|0]|0;
						L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindexphi|0)+3|0]=L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindex20|0)+3|0]|0;
						L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindexphi|0)+4|0]=L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindex20|0)+4|0]|0;
						L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindexphi|0)+5|0]=L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindex20|0)+5|0]|0;
						L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindexphi|0)+6|0]=L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindex20|0)+6|0]|0;
						L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindexphi|0)+7|0]=L$poptgep$poptgep70$poptgepsqueezed[(tmp9+Lgeptoindex20|0)+7|0]|0;
						Lgeptoindexphi=Lgeptoindexphi+8|0;
						if(L$poptgep$poptgep70$poptgepsqueezed!==L$poptgep$poptgep70$poptgepsqueezed||((tmp9+L$pbe151|0)+(tmp26>>>2)|0)!==(tmp9+Lgeptoindexphi|0)){
							Lgeptoindex20=Lgeptoindex20+8|0;
							continue;
						}
						break;
					}
				}
				L$poptgep93$poptgep$poptgepsqueezed.a1=L$poptgep$poptgep70$poptgepsqueezed;
				L$poptgep93$poptgep$poptgepsqueezed.a1o=(tmp9+L$pbe151|0)+(tmp26>>2)|0;
				if((tmp21&131071|0)!==0)___assert_fail(_$pstr$p43$p203,0,_$pstr$p15$p124,0,872,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
				;
				L$poptgep$poptgep70$poptgepsqueezed=tmp1.a16;
				if(tmp21>>>0<L$poptgep$poptgep70$poptgepsqueezed.i3>>>0){
					L$poptgep93$poptgep97$poptgepsqueezed="/".concat((tmp21>>>17)+1|0);
					tmp1.a26=L$poptgep93$poptgep97$poptgepsqueezed;
					L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed.a6;
					__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed232,L$poptgep$poptgep70$poptgepsqueezed,L$poptgep93$poptgep97$poptgepsqueezed);
					L$poptgep$poptgep70$poptgepsqueezed=L$poptgepsqueezed232.a0;
					L$pbe151=L$poptgepsqueezed232.a0o|0;
					if(L$poptgep$poptgep70$poptgepsqueezed!==nullArray||L$pbe151!==0)if(L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a0!==null){
						tmp1.i13=1;
						L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
						L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
						L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
						break;
					}
					L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
					L$poptgep93$poptgep97$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed.a1.a1;
					tmp1.a27=L$poptgep93$poptgep97$poptgepsqueezed;
					L$pbe=L$poptgepsqueezed232.a0;
					L$pbe151=L$poptgepsqueezed232.a0o|0;
					if(L$pbe!==nullArray||L$pbe151!==0)L$pbe[L$pbe151].a1(L$pbe,L$pbe151);
					L$pbe=tmp1.a26;
					if(((L$poptgep93$poptgep97$poptgepsqueezed.permType)|0)===0){
						__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(L$poptgepsqueezed231,tmp1.a16,tmp1.a17,(tmp1.i25>>>17)+1|0,null,0,null);
						L$poptgep$poptgep70$poptgepsqueezed=L$poptgepsqueezed231.a0;
						L$pbe151=L$poptgepsqueezed231.a0o|0;
						if(L$poptgep$poptgep70$poptgepsqueezed!==nullArray||L$pbe151!==0){
							if(L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a0!==null){
								tmp1.i13=2;
								L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
								L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
								L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
								break;
							}
							L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a1(L$poptgep$poptgep70$poptgepsqueezed,L$pbe151);
						}
						L$poptgep$poptgep70$poptgepsqueezed=tmp1.a19;
						L$pbe=tmp1.a26;
						L$pbe147=tmp1.a20;
						L$pbe148=tmp1.a21;
						L$poptgep93$poptgep97$poptgepsqueezed=tmp1.a27;
						L$poptgep93$poptgep$poptgepsqueezed=tmp1.a23;
						L$pbe151=tmp1.i24|0;
						continue;
					}
					L$pbe=tmp1.a26;
				}
				tmp1.a29=L$poptgep93$poptgep97$poptgepsqueezed;
				tmp1.a28=L$pbe;
				L$pbe151=tmp1.i25|0;
				if((L$pbe151|0)!==0){
					L$poptgep$poptgep70$poptgepsqueezed=tmp1.a19;
					L$pbe=tmp1.a16;
					L$pbe147="/".concat((L$pbe151>>>17)-1|0);
					tmp1.a30=L$pbe147;
					L$pbe=L$pbe.a6;
					__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed230,L$pbe,L$pbe147);
					L$poptgep$poptgep70$poptgepsqueezed=L$poptgepsqueezed230.a0;
					L$pbe151=L$poptgepsqueezed230.a0o|0;
					if(L$poptgep$poptgep70$poptgepsqueezed!==nullArray||L$pbe151!==0)if(L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a0!==null){
						tmp1.i13=3;
						L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
						L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
						L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
						break;
					}
					L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
					L$poptgep93$poptgep$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed.a1.a1;
					tmp1.a31=L$poptgep93$poptgep$poptgepsqueezed;
					L$pbe=L$poptgepsqueezed230.a0;
					L$pbe151=L$poptgepsqueezed230.a0o|0;
					if(L$pbe!==nullArray||L$pbe151!==0)L$pbe[L$pbe151].a1(L$pbe,L$pbe151);
					L$pbe=tmp1.a30;
					if(((L$poptgep93$poptgep$poptgepsqueezed.permType)|0)!==0){
						L$poptgep$poptgep70$poptgepsqueezed=tmp1.a30;
						L$pbe=tmp1.a28;
						L$pbe147=tmp1.a20;
						L$pbe148=tmp1.a21;
						L$poptgep93$poptgep97$poptgepsqueezed=tmp1.a29;
						L$pbe151=tmp1.i24|0;
					}else{
						__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(L$poptgepsqueezed229,tmp1.a16,tmp1.a17,(tmp1.i25>>>17)-1|0,null,0,null);
						L$poptgep$poptgep70$poptgepsqueezed=L$poptgepsqueezed229.a0;
						L$pbe151=L$poptgepsqueezed229.a0o|0;
						if(L$poptgep$poptgep70$poptgepsqueezed!==nullArray||L$pbe151!==0){
							if(L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a0!==null){
								tmp1.i13=4;
								L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
								L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
								L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
								break;
							}
							L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a1(L$poptgep$poptgep70$poptgepsqueezed,L$pbe151);
						}
						L$poptgep$poptgep70$poptgepsqueezed=tmp1.a30;
						L$pbe=tmp1.a28;
						L$pbe147=tmp1.a20;
						L$pbe148=tmp1.a21;
						L$poptgep93$poptgep97$poptgepsqueezed=tmp1.a29;
						L$poptgep93$poptgep$poptgepsqueezed=tmp1.a31;
						L$pbe151=tmp1.i24|0;
					}
				}else{
					L$poptgep$poptgep70$poptgepsqueezed=tmp1.a19;
					L$pbe147=tmp1.a20;
					L$pbe148=tmp1.a21;
					L$poptgep93$poptgep$poptgepsqueezed=tmp1.a23;
					L$pbe151=tmp1.i24|0;
				}
			}
		}else{
			tmp24=tmp18[L$pbe151].i0|0;
			tmp26=tmp18[L$pbe151].i1|0;
			tmp21=tmp18[L$pbe151].i2|0;
			L$poptgep$poptgep70$poptgepsqueezed=tmp18[L$pbe151].a3;
			Lgeptoindexphi8=(__imul(Lgeptoindex20,16))-(__imul(L$pbe151+1|0,16))|0;
			if(Lgeptoindexphi8>>>0>=16){
				Lxtraiter182=Lgeptoindexphi8-16|0;
				if((Lxtraiter182&16|0)!==0){
					Lgeptoindex20=0;
					Lgeptoindexphi=1;
				}else{
					tmp18[L$pbe151].i0=tmp18[L$pbe151+1|0].i0|0;
					tmp18[L$pbe151].i1=tmp18[L$pbe151+1|0].i1|0;
					tmp18[L$pbe151].i2=tmp18[L$pbe151+1|0].i2|0;
					tmp18[L$pbe151].a3=tmp18[L$pbe151+1|0].a3;
					Lgeptoindex20=1;
					Lgeptoindexphi=2;
				}
				if(Lxtraiter182>>>0>=16)while(1){
					tmp18[L$pbe151+Lgeptoindex20|0].i0=tmp18[L$pbe151+Lgeptoindexphi|0].i0|0;
					tmp18[L$pbe151+Lgeptoindex20|0].i1=tmp18[L$pbe151+Lgeptoindexphi|0].i1|0;
					tmp18[L$pbe151+Lgeptoindex20|0].i2=tmp18[L$pbe151+Lgeptoindexphi|0].i2|0;
					tmp18[L$pbe151+Lgeptoindex20|0].a3=tmp18[L$pbe151+Lgeptoindexphi|0].a3;
					tmp18[(L$pbe151+Lgeptoindex20|0)+1|0].i0=tmp18[(L$pbe151+Lgeptoindexphi|0)+1|0].i0|0;
					tmp18[(L$pbe151+Lgeptoindex20|0)+1|0].i1=tmp18[(L$pbe151+Lgeptoindexphi|0)+1|0].i1|0;
					tmp18[(L$pbe151+Lgeptoindex20|0)+1|0].i2=tmp18[(L$pbe151+Lgeptoindexphi|0)+1|0].i2|0;
					tmp18[(L$pbe151+Lgeptoindex20|0)+1|0].a3=tmp18[(L$pbe151+Lgeptoindexphi|0)+1|0].a3;
					Lgeptoindex20=Lgeptoindex20+2|0;
					if(tmp18!==tmp18||(L$pbe151+(Lgeptoindexphi8>>>4)|0)!==(L$pbe151+Lgeptoindex20|0)){
						Lgeptoindexphi=Lgeptoindexphi+2|0;
						continue;
					}
					break;
				}
			}
			L$poptgep93$poptgep$poptgepsqueezed.a1=tmp18;
			L$poptgep93$poptgep$poptgepsqueezed.a1o=L$pbe151+(Lgeptoindexphi8>>4)|0;
			if((tmp21&131071|0)!==0)___assert_fail(_$pstr$p41$p201,0,_$pstr$p15$p124,0,857,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
			;
			L$pbe151=L$poptgep$poptgep70$poptgepsqueezed.len;
			Lgeptoindex20=L$poptgep$poptgep70$poptgepsqueezed.bufOffset;
			if((L$pbe151|0)!==131072)___assert_fail(_$pstr$p42$p202,0,_$pstr$p15$p124,0,861,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
			;
			L$poptgep$poptgep70$poptgepsqueezed=tmp1.a17;
			L$pbe=tmp1.a16;
			L$pbe147={type:tmp24,tid:tmp26};
			__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(L$poptgepsqueezed233,L$pbe,L$poptgep$poptgep70$poptgepsqueezed,tmp21>>>17,HEAP8,Lgeptoindex20,L$pbe147);
			L$poptgep$poptgep70$poptgepsqueezed=L$poptgepsqueezed233.a0;
			L$pbe151=L$poptgepsqueezed233.a0o|0;
			if(L$poptgep$poptgep70$poptgepsqueezed!==nullArray||L$pbe151!==0){
				if(L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a0!==null){
					tmp1.i13=0;
					L$poptgep$poptgep70$poptgepsqueezed=L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a[L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].o- -1];
					L$poptgep$poptgep70$poptgepsqueezed.a0=tmp0;
					L$poptgep$poptgep70$poptgepsqueezed.a0o=0;
					break;
				}
				L$poptgep$poptgep70$poptgepsqueezed[L$pbe151].a1(L$poptgep$poptgep70$poptgepsqueezed,L$pbe151);
			}
			L$poptgep$poptgep70$poptgepsqueezed=tmp1.a19;
			L$pbe=tmp1.a18;
			L$pbe147=tmp1.a20;
			L$pbe148=tmp1.a21;
			L$poptgep93$poptgep97$poptgepsqueezed=tmp1.a22;
			L$poptgep93$poptgep$poptgepsqueezed=tmp1.a23;
			L$pbe151=tmp1.i24|0;
		}
		continue;
	}
}
function __ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE$presume(Larg0,Marg0){
	var L$poptgepsqueezed348=null,L$poptgepsqueezed349=null,L$poptgepsqueezed350=null,L$poptgepsqueezed352=null,L$ppre$mphi112$pdispatch_0=null,L$ppre$mphi112$pdispatch_1=0,L$ppre$mphi110$pdispatch_0=null,L$ppre$mphi110$pdispatch_1=0,L$ppre$mphi$pdispatch_0=null,L$ppre$mphi$pdispatch_1=0,tmp10=0,tmp11=0,L$poptgepsqueezed343=null,L$poptgepsqueezed344=null,L$poptgepsqueezed345=null,L$poptgepsqueezed346=null,L$poptgepsqueezed347=null,L$ppre54_0=null,L$ppre54_1=0,L$ppre78_1=0,L$ppre62_0=null,L$ppre58_0=null,L$ppre78_0=null,L$ppre74_0=null,L$pdispatch20=0,L$ppre70_0=null,L$pdispatch22=null,L$pdispatch23=null,L$pdispatch24=null,L$pdispatch25=null,L$pdispatch26=null,tmp31=null,L$poptgep170$poptgep$poptgepsqueezed=null,Lgeptoindex31=0,Lgeptoindex47=0,L$poptgep$poptgep132$poptgepsqueezed=null,tmp36=null,Lgeptoindexphi50=0,Lprol$piter=0,Lgeptoindexphi35=0,tmp40=0;
	L$poptgepsqueezed343=Larg0[Marg0].a12;
	L$poptgepsqueezed344=Larg0[Marg0].a11;
	L$poptgepsqueezed345=Larg0[Marg0].a10;
	L$poptgepsqueezed346=Larg0[Marg0].a9;
	L$poptgepsqueezed347=Larg0[Marg0].a8;
	L$poptgepsqueezed348=Larg0[Marg0].a7;
	L$poptgepsqueezed349=Larg0[Marg0].a6;
	L$poptgepsqueezed350=Larg0[Marg0].a5;
	L$poptgepsqueezed352=Larg0[Marg0].a4;
	switch(Larg0[Marg0].i13&15){
		case 0:
		L$ppre54_0=L$poptgepsqueezed350.a0;
		L$ppre54_1=L$poptgepsqueezed350.a0o|0;
		L$ppre78_1=10;
		break;
		case 1:
		L$ppre58_0=L$poptgepsqueezed349.a0;
		L$ppre78_1=L$poptgepsqueezed349.a0o|0;
		L$ppre58_0=L$ppre58_0[L$ppre78_1];
		L$ppre78_1=4;
		break;
		case 2:
		L$ppre70_0=L$poptgepsqueezed348.a0;
		L$ppre78_1=L$poptgepsqueezed348.a0o|0;
		if(L$ppre70_0!==nullArray||L$ppre78_1!==0){
			L$ppre$mphi110$pdispatch_0=L$ppre70_0;
			L$ppre$mphi110$pdispatch_1=L$ppre78_1;
			L$ppre78_1=2;
			break;
		}
		L$ppre78_1=3;
		break;
		case 3:
		L$ppre62_0=L$poptgepsqueezed347.a0;
		L$ppre78_1=L$poptgepsqueezed347.a0o|0;
		L$ppre62_0=L$ppre62_0[L$ppre78_1];
		L$ppre78_1=1;
		break;
		case 4:
		L$ppre70_0=L$poptgepsqueezed346.a0;
		L$ppre78_1=L$poptgepsqueezed346.a0o|0;
		if(L$ppre70_0!==nullArray||L$ppre78_1!==0){
			L$ppre$mphi112$pdispatch_0=L$ppre70_0;
			L$ppre$mphi112$pdispatch_1=L$ppre78_1;
			L$ppre78_1=-1;
			break;
		}
		L$ppre78_1=0;
		break;
		case 5:
		L$ppre74_0=L$poptgepsqueezed345.a0;
		L$ppre78_1=L$poptgepsqueezed345.a0o|0;
		L$ppre74_0=L$ppre74_0[L$ppre78_1];
		L$ppre78_1=8;
		break;
		case 6:
		L$ppre78_0=L$poptgepsqueezed344.a0;
		L$ppre78_1=L$poptgepsqueezed344.a0o|0;
		L$ppre78_0=L$ppre78_0[L$ppre78_1];
		L$ppre78_1=7;
		break;
		case 7:
		L$ppre70_0=L$poptgepsqueezed343.a0;
		L$ppre78_1=L$poptgepsqueezed343.a0o|0;
		if(L$ppre70_0!==nullArray||L$ppre78_1!==0){
			L$ppre$mphi$pdispatch_0=L$ppre70_0;
			L$ppre$mphi$pdispatch_1=L$ppre78_1;
			L$ppre78_1=5;
			break;
		}
		L$ppre78_1=6;
		break;
		case 8:
		L$ppre54_0=L$poptgepsqueezed352.a0;
		L$ppre78_1=L$ppre54_0.i1|0;
		a:{
			if((L$ppre78_1&16777215)>=65536){
				L$ppre54_0.i1=L$ppre78_1&65535;
				L$ppre54_0=L$poptgepsqueezed352.a0;
				if(L$ppre54_0===null)break a;
			}
			L$ppre54_0.a0=nullArray;
			L$ppre54_0.a0o=0;
		}
		L$pdispatch20=Larg0[Marg0].i24|0;
		L$ppre70_0=Larg0[Marg0].a23;
		L$pdispatch22=Larg0[Marg0].a22;
		L$pdispatch23=Larg0[Marg0].a21;
		L$pdispatch24=Larg0[Marg0].a20;
		L$pdispatch25=Larg0[Marg0].a19;
		L$pdispatch26=Larg0[Marg0].a18;
		L$ppre78_1=9;
		break;
		default:
		;
	}
	a:{
		b:while(1){
			switch(L$ppre78_1|0){
				case 0:
				L$ppre70_0=Larg0[Marg0].a31;
				L$pdispatch25=Larg0[Marg0].a30;
				L$pdispatch22=Larg0[Marg0].a29;
				L$pdispatch26=Larg0[Marg0].a28;
				L$pdispatch20=Larg0[Marg0].i24|0;
				L$pdispatch23=Larg0[Marg0].a21;
				L$pdispatch24=Larg0[Marg0].a20;
				L$ppre78_1=9;
				continue b;
				case 1:
				tmp31=L$ppre62_0.a[L$ppre62_0.o- -1];
				L$poptgep170$poptgep$poptgepsqueezed=tmp31.a1.a1;
				Larg0[Marg0].a31=L$poptgep170$poptgep$poptgepsqueezed;
				tmp31=L$poptgepsqueezed347.a0;
				L$ppre78_1=L$poptgepsqueezed347.a0o|0;
				if(tmp31!==nullArray||L$ppre78_1!==0)tmp31[L$ppre78_1].a1(tmp31,L$ppre78_1);
				tmp31=Larg0[Marg0].a30;
				if(((L$poptgep170$poptgep$poptgepsqueezed.permType)|0)!==0){
					L$pdispatch25=Larg0[Marg0].a30;
					L$pdispatch22=Larg0[Marg0].a29;
					L$pdispatch26=Larg0[Marg0].a28;
					L$pdispatch20=Larg0[Marg0].i24|0;
					L$pdispatch23=Larg0[Marg0].a21;
					L$pdispatch24=Larg0[Marg0].a20;
					L$ppre70_0=L$poptgep170$poptgep$poptgepsqueezed;
					L$ppre78_1=9;
					continue b;
				}
				__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(L$poptgepsqueezed346,Larg0[Marg0].a16,Larg0[Marg0].a17,(Larg0[Marg0].i25>>>17)-1|0,null,0,null);
				tmp31=L$poptgepsqueezed346.a0;
				L$ppre78_1=L$poptgepsqueezed346.a0o|0;
				if(tmp31!==nullArray||L$ppre78_1!==0){
					if(tmp31[L$ppre78_1].a0!==null){
						Larg0[Marg0].i13=4;
						L$ppre70_0=tmp31[L$ppre78_1].a[tmp31[L$ppre78_1].o- -1];
						L$ppre70_0.a0=Larg0;
						L$ppre70_0.a0o=Marg0;
						break a;
					}
					L$ppre$mphi112$pdispatch_0=tmp31;
					L$ppre$mphi112$pdispatch_1=L$ppre78_1;
					L$ppre78_1=-1;
					continue b;
				}
				L$ppre78_1=0;
				continue b;
				case 2:
				L$ppre$mphi110$pdispatch_0[L$ppre$mphi110$pdispatch_1].a1(L$ppre$mphi110$pdispatch_0,L$ppre$mphi110$pdispatch_1);
				L$ppre78_1=3;
				continue b;
				case 3:
				L$pdispatch22=Larg0[Marg0].a27;
				L$pdispatch26=Larg0[Marg0].a26;
				L$pdispatch20=Larg0[Marg0].i24|0;
				L$ppre70_0=Larg0[Marg0].a23;
				L$pdispatch23=Larg0[Marg0].a21;
				L$pdispatch24=Larg0[Marg0].a20;
				L$pdispatch25=Larg0[Marg0].a19;
				L$ppre78_1=9;
				continue b;
				case 4:
				tmp31=L$ppre58_0.a[L$ppre58_0.o- -1];
				tmp31=tmp31.a1.a1;
				Larg0[Marg0].a27=tmp31;
				L$poptgep170$poptgep$poptgepsqueezed=L$poptgepsqueezed349.a0;
				L$ppre78_1=L$poptgepsqueezed349.a0o|0;
				if(L$poptgep170$poptgep$poptgepsqueezed!==nullArray||L$ppre78_1!==0)L$poptgep170$poptgep$poptgepsqueezed[L$ppre78_1].a1(L$poptgep170$poptgep$poptgepsqueezed,L$ppre78_1);
				L$poptgep170$poptgep$poptgepsqueezed=Larg0[Marg0].a26;
				if(((tmp31.permType)|0)!==0){
					L$poptgep170$poptgep$poptgepsqueezed=Larg0[Marg0].a26;
					break;
				}
				__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(L$poptgepsqueezed348,Larg0[Marg0].a16,Larg0[Marg0].a17,(Larg0[Marg0].i25>>>17)+1|0,null,0,null);
				tmp31=L$poptgepsqueezed348.a0;
				L$ppre78_1=L$poptgepsqueezed348.a0o|0;
				if(tmp31!==nullArray||L$ppre78_1!==0){
					if(tmp31[L$ppre78_1].a0!==null){
						Larg0[Marg0].i13=2;
						L$ppre70_0=tmp31[L$ppre78_1].a[tmp31[L$ppre78_1].o- -1];
						L$ppre70_0.a0=Larg0;
						L$ppre70_0.a0o=Marg0;
						break a;
					}
					L$ppre$mphi110$pdispatch_0=tmp31;
					L$ppre$mphi110$pdispatch_1=L$ppre78_1;
					L$ppre78_1=2;
					continue b;
				}
				L$ppre78_1=3;
				continue b;
				case 5:
				L$ppre$mphi$pdispatch_0[L$ppre$mphi$pdispatch_1].a1(L$ppre$mphi$pdispatch_0,L$ppre$mphi$pdispatch_1);
				L$ppre78_1=6;
				continue b;
				case 6:
				L$ppre70_0=Larg0[Marg0].a16;
				L$ppre70_0.i11=L$ppre70_0.i11&255;
				L$pdispatch20=Larg0[Marg0].i34|0;
				L$pdispatch23=Larg0[Marg0].a33;
				L$pdispatch24=Larg0[Marg0].a32;
				L$ppre70_0=Larg0[Marg0].a23;
				L$pdispatch22=Larg0[Marg0].a22;
				L$pdispatch25=Larg0[Marg0].a19;
				L$pdispatch26=Larg0[Marg0].a18;
				L$ppre78_1=9;
				continue b;
				case 7:
				tmp31=L$poptgepsqueezed344.a0;
				L$ppre78_1=L$poptgepsqueezed344.a0o|0;
				if(tmp31!==nullArray||L$ppre78_1!==0)tmp31[L$ppre78_1].a1(tmp31,L$ppre78_1);
				__ZN7CheerpX14CheerpOSDevice5closeEi(L$poptgepsqueezed343,Larg0[Marg0].i34|0);
				tmp31=L$poptgepsqueezed343.a0;
				L$ppre78_1=L$poptgepsqueezed343.a0o|0;
				if(tmp31!==nullArray||L$ppre78_1!==0){
					if(tmp31[L$ppre78_1].a0!==null){
						Larg0[Marg0].i13=7;
						L$ppre70_0=tmp31[L$ppre78_1].a[tmp31[L$ppre78_1].o- -1];
						L$ppre70_0.a0=Larg0;
						L$ppre70_0.a0o=Marg0;
						break a;
					}
					L$ppre$mphi$pdispatch_0=tmp31;
					L$ppre$mphi$pdispatch_1=L$ppre78_1;
					L$ppre78_1=5;
					continue b;
				}
				L$ppre78_1=6;
				continue b;
				case 8:
				tmp31=L$ppre74_0.a[L$ppre74_0.o- -1];
				L$ppre78_1=tmp31.a1.i1|0;
				Larg0[Marg0].i34=L$ppre78_1;
				tmp31=L$poptgepsqueezed345.a0;
				Lgeptoindex31=L$poptgepsqueezed345.a0o|0;
				if(tmp31!==nullArray||Lgeptoindex31!==0)tmp31[Lgeptoindex31].a1(tmp31,Lgeptoindex31);
				L$ppre78_0=Larg0[Marg0].a33;
				tmp31=Larg0[Marg0].a32;
				if((L$ppre78_1|0)>-1){
					tmp31=Larg0[Marg0].a3.a3;
					Lgeptoindex31=tmp31.len;
					Lgeptoindex47=tmp31.bufOffset;
					if((Lgeptoindex31|0)===131072){
						__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii(L$poptgepsqueezed344,L$ppre78_1,HEAP8,Lgeptoindex47,131072);
						L$ppre78_0=L$poptgepsqueezed344.a0;
						L$ppre78_1=L$poptgepsqueezed344.a0o|0;
						if(L$ppre78_0!==nullArray||L$ppre78_1!==0){
							if(L$ppre78_0[L$ppre78_1].a0!==null){
								Larg0[Marg0].i13=6;
								L$ppre70_0=L$ppre78_0[L$ppre78_1].a[L$ppre78_0[L$ppre78_1].o- -1];
								L$ppre70_0.a0=Larg0;
								L$ppre70_0.a0o=Marg0;
								break a;
							}
							L$ppre78_0=L$ppre78_0[L$ppre78_1];
							L$ppre78_1=7;
							continue b;
						}
						L$ppre78_0=null;
						L$ppre78_1=7;
						continue b;
					}
					___assert_fail(_$pstr$p42$p202,0,_$pstr$p15$p124,0,918,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
					;
				}
				___assert_fail(_$pstr$p40$p198,0,_$pstr$p15$p124,0,915,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
				;
				case 9:
				Larg0[Marg0].i24=L$pdispatch20;
				Larg0[Marg0].a23=L$ppre70_0;
				Larg0[Marg0].a22=L$pdispatch22;
				Larg0[Marg0].a21=L$pdispatch23;
				Larg0[Marg0].a20=L$pdispatch24;
				Larg0[Marg0].a19=L$pdispatch25;
				Larg0[Marg0].a18=L$pdispatch26;
				tmp31=Larg0[Marg0].a16;
				L$poptgep170$poptgep$poptgepsqueezed=tmp31.a8;
				L$poptgep$poptgep132$poptgepsqueezed=L$poptgep170$poptgep$poptgepsqueezed.a0;
				Lgeptoindex31=L$poptgep170$poptgep$poptgepsqueezed.a0o|0;
				tmp36=L$poptgep170$poptgep$poptgepsqueezed.a1;
				Lgeptoindex47=L$poptgep170$poptgep$poptgepsqueezed.a1o|0;
				if(L$poptgep$poptgep132$poptgepsqueezed===tmp36&&Lgeptoindex31===Lgeptoindex47){
					L$poptgep170$poptgep$poptgepsqueezed=tmp31.a9;
					L$poptgep$poptgep132$poptgepsqueezed=L$poptgep170$poptgep$poptgepsqueezed.a0;
					Lgeptoindex31=L$poptgep170$poptgep$poptgepsqueezed.a0o|0;
					tmp36=L$poptgep170$poptgep$poptgepsqueezed.a1;
					L$ppre78_1=L$poptgep170$poptgep$poptgepsqueezed.a1o|0;
					if(L$poptgep$poptgep132$poptgepsqueezed===tmp36&&Lgeptoindex31===L$ppre78_1){
						L$ppre74_0=tmp31.a10;
						L$poptgep170$poptgep$poptgepsqueezed=L$ppre74_0.a0;
						L$ppre78_1=L$ppre74_0.a0o|0;
						L$poptgep$poptgep132$poptgepsqueezed=L$ppre74_0.a1;
						Lgeptoindexphi50=L$ppre74_0.a1o|0;
						if(L$poptgep170$poptgep$poptgepsqueezed===L$poptgep$poptgep132$poptgepsqueezed&&L$ppre78_1===Lgeptoindexphi50){
							L$poptgepsqueezed343=__ZN7CheerpX5Linux6eventsE[2];
							if(L$poptgepsqueezed343!==null){
								L$poptgepsqueezed344=Larg0[Marg0].a15[0];
								L$poptgepsqueezed345="ready";
								Larg0[Marg0].a15[0]=L$poptgepsqueezed345;
								if((L$poptgepsqueezed343.i0|0)===1){
									if(((L$poptgepsqueezed345|0)|0)===1){
										L$poptgepsqueezed344="ready";
										L$poptgepsqueezed344=L$poptgepsqueezed344;
									}else{
										L$poptgepsqueezed344="wait";
										L$poptgepsqueezed344=L$poptgepsqueezed344;
									}
								}else L$poptgepsqueezed344=L$poptgepsqueezed345;
								L$poptgepsqueezed343=L$poptgepsqueezed343.a1;
								L$poptgepsqueezed346=L$poptgepsqueezed343.a0;
								L$ppre54_1=L$poptgepsqueezed343.a0o|0;
								L$poptgepsqueezed347=L$poptgepsqueezed343.a1;
								L$ppre78_1=L$poptgepsqueezed343.a1o|0;
								if(L$poptgepsqueezed346!==L$poptgepsqueezed347||L$ppre54_1!==L$ppre78_1){
									Lgeptoindex31=0;
									while(1){
										L$poptgepsqueezed346[L$ppre54_1+Lgeptoindex31|0](L$poptgepsqueezed344);
										Lgeptoindex31=Lgeptoindex31+1|0;
										if(L$poptgepsqueezed346!==L$poptgepsqueezed347||(L$ppre54_1+Lgeptoindex31|0)!==L$ppre78_1)continue;
										break;
									}
								}
								tmp31=Larg0[Marg0].a16;
							}
							__ZN7CheerpX5Linux18checkPendingWritesEv(Larg0[Marg0].a17);
							tmp31.i11=tmp31.i11&65280|1;
							L$ppre70_0=tmp31.a7;
							L$poptgepsqueezed352.a0=L$ppre70_0;
							if(L$ppre70_0.a2!==null)___assert_fail(_$pstr$p75$p120,0,_$pstr$p76$p121,0,25,___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_,0);
							;
							L$ppre70_0.a2=L$poptgepsqueezed352;
							Larg0[Marg0].i13=8;
							L$ppre70_0.a0=Larg0;
							L$ppre70_0.a0o=Marg0;
							break a;
						}
						tmp31.i11=tmp31.i11&255|256;
						L$poptgep$poptgep132$poptgepsqueezed=Larg0[Marg0].a3;
						L$poptgep$poptgep132$poptgepsqueezed.i0=L$poptgep170$poptgep$poptgepsqueezed[L$ppre78_1].i0|0;
						L$poptgep$poptgep132$poptgepsqueezed.i1=L$poptgep170$poptgep$poptgepsqueezed[L$ppre78_1].i1|0;
						Lgeptoindexphi50=L$poptgep170$poptgep$poptgepsqueezed[L$ppre78_1].i2|0;
						L$poptgep$poptgep132$poptgepsqueezed.i2=Lgeptoindexphi50;
						L$poptgep$poptgep132$poptgepsqueezed.a3=L$poptgep170$poptgep$poptgepsqueezed[L$ppre78_1].a3;
						tmp36=L$ppre74_0.a0;
						Lprol$piter=L$ppre74_0.a0o|0;
						L$ppre78_1=(__imul(L$ppre78_1,16))-(__imul(Lprol$piter,16))>>4;
						Lgeptoindex31=L$ppre78_1+1|0;
						L$poptgep170$poptgep$poptgepsqueezed=L$ppre74_0.a1;
						Lgeptoindex47=L$ppre74_0.a1o|0;
						Lgeptoindex47=(__imul(Lgeptoindex47,16))-(__imul(Lprol$piter+Lgeptoindex31|0,16))|0;
						if(Lgeptoindex47>>>0>=16){
							Lgeptoindexphi50=Lgeptoindex47-16|0;
							if((Lgeptoindexphi50&16|0)!==0){
								Lgeptoindexphi35=L$ppre78_1;
							}else{
								tmp36[Lprol$piter+L$ppre78_1|0].i0=tmp36[Lprol$piter+Lgeptoindex31|0].i0|0;
								tmp36[Lprol$piter+L$ppre78_1|0].i1=tmp36[Lprol$piter+Lgeptoindex31|0].i1|0;
								tmp36[Lprol$piter+L$ppre78_1|0].i2=tmp36[Lprol$piter+Lgeptoindex31|0].i2|0;
								tmp36[Lprol$piter+L$ppre78_1|0].a3=tmp36[Lprol$piter+Lgeptoindex31|0].a3;
								Lgeptoindexphi35=Lgeptoindex31;
								Lgeptoindex31=Lgeptoindex31+1|0;
							}
							if(Lgeptoindexphi50>>>0>=16)while(1){
								tmp36[Lprol$piter+Lgeptoindexphi35|0].i0=tmp36[Lprol$piter+Lgeptoindex31|0].i0|0;
								tmp36[Lprol$piter+Lgeptoindexphi35|0].i1=tmp36[Lprol$piter+Lgeptoindex31|0].i1|0;
								tmp36[Lprol$piter+Lgeptoindexphi35|0].i2=tmp36[Lprol$piter+Lgeptoindex31|0].i2|0;
								tmp36[Lprol$piter+Lgeptoindexphi35|0].a3=tmp36[Lprol$piter+Lgeptoindex31|0].a3;
								tmp36[(Lprol$piter+Lgeptoindexphi35|0)+1|0].i0=tmp36[(Lprol$piter+Lgeptoindex31|0)+1|0].i0|0;
								tmp36[(Lprol$piter+Lgeptoindexphi35|0)+1|0].i1=tmp36[(Lprol$piter+Lgeptoindex31|0)+1|0].i1|0;
								tmp36[(Lprol$piter+Lgeptoindexphi35|0)+1|0].i2=tmp36[(Lprol$piter+Lgeptoindex31|0)+1|0].i2|0;
								tmp36[(Lprol$piter+Lgeptoindexphi35|0)+1|0].a3=tmp36[(Lprol$piter+Lgeptoindex31|0)+1|0].a3;
								Lgeptoindexphi35=Lgeptoindexphi35+2|0;
								if(tmp36!==tmp36||((Lprol$piter+L$ppre78_1|0)+(Lgeptoindex47>>>4)|0)!==(Lprol$piter+Lgeptoindexphi35|0)){
									Lgeptoindex31=Lgeptoindex31+2|0;
									continue;
								}
								break;
							}
							Lgeptoindexphi50=L$poptgep$poptgep132$poptgepsqueezed.i2|0;
						}
						L$ppre74_0.a1=tmp36;
						L$ppre74_0.a1o=(Lprol$piter+L$ppre78_1|0)+(Lgeptoindex47>>4)|0;
						if((Lgeptoindexphi50&131071|0)!==0)___assert_fail(_$pstr$p41$p201,0,_$pstr$p15$p124,0,910,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
						;
						L$ppre74_0=Larg0[Marg0].a16;
						tmp31="/".concat(Lgeptoindexphi50>>>17);
						Larg0[Marg0].a32=tmp31;
						L$ppre74_0=L$ppre74_0.a6;
						L$poptgep170$poptgep$poptgepsqueezed="w";
						Larg0[Marg0].a33=L$poptgep170$poptgep$poptgepsqueezed;
						__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii(L$poptgepsqueezed345,L$ppre74_0,tmp31,L$poptgep170$poptgep$poptgepsqueezed,0,0);
						L$ppre74_0=L$poptgepsqueezed345.a0;
						L$ppre78_1=L$poptgepsqueezed345.a0o|0;
						if(L$ppre74_0!==nullArray||L$ppre78_1!==0){
							if(L$ppre74_0[L$ppre78_1].a0!==null){
								Larg0[Marg0].i13=5;
								L$ppre70_0=L$ppre74_0[L$ppre78_1].a[L$ppre74_0[L$ppre78_1].o- -1];
								L$ppre70_0.a0=Larg0;
								L$ppre70_0.a0o=Marg0;
								break a;
							}
							L$ppre74_0=L$ppre74_0[L$ppre78_1];
							L$ppre78_1=8;
							continue b;
						}
						L$ppre74_0=null;
						L$ppre78_1=8;
						continue b;
					}
					L$ppre78_1=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31]|0;
					Larg0[Marg0].i25=L$ppre78_1;
					tmp36=L$poptgep170$poptgep$poptgepsqueezed.a0;
					tmp10=L$poptgep170$poptgep$poptgepsqueezed.a0o|0;
					Lgeptoindex31=(__imul(Lgeptoindex31,4))-(__imul(tmp10,4))>>2;
					Lgeptoindex47=Lgeptoindex31+1|0;
					L$poptgep$poptgep132$poptgepsqueezed=L$poptgep170$poptgep$poptgepsqueezed.a1;
					Lgeptoindexphi35=L$poptgep170$poptgep$poptgepsqueezed.a1o|0;
					tmp11=(__imul(Lgeptoindexphi35,4))-(__imul(tmp10+Lgeptoindex47|0,4))|0;
					if(tmp11>>>0>=4){
						tmp40=tmp11-4|0;
						Lgeptoindexphi35=(tmp40>>>2)+1&7;
						if((Lgeptoindexphi35|0)!==0){
							Lgeptoindexphi50=Lgeptoindex31;
							Lprol$piter=0;
							while(1){
								tmp36[tmp10+Lgeptoindexphi50|0]=tmp36[tmp10+Lgeptoindex47|0]|0;
								Lprol$piter=Lprol$piter+1|0;
								Lgeptoindexphi50=Lgeptoindexphi50+1|0;
								Lgeptoindex47=Lgeptoindex47+1|0;
								if((Lprol$piter|0)!==(Lgeptoindexphi35|0))continue;
								break;
							}
						}else{
							Lgeptoindexphi50=Lgeptoindex31;
						}
						if(tmp40>>>0>=28)while(1){
							tmp36[tmp10+Lgeptoindexphi50|0]=tmp36[tmp10+Lgeptoindex47|0]|0;
							tmp36[(tmp10+Lgeptoindexphi50|0)+1|0]=tmp36[(tmp10+Lgeptoindex47|0)+1|0]|0;
							tmp36[(tmp10+Lgeptoindexphi50|0)+2|0]=tmp36[(tmp10+Lgeptoindex47|0)+2|0]|0;
							tmp36[(tmp10+Lgeptoindexphi50|0)+3|0]=tmp36[(tmp10+Lgeptoindex47|0)+3|0]|0;
							tmp36[(tmp10+Lgeptoindexphi50|0)+4|0]=tmp36[(tmp10+Lgeptoindex47|0)+4|0]|0;
							tmp36[(tmp10+Lgeptoindexphi50|0)+5|0]=tmp36[(tmp10+Lgeptoindex47|0)+5|0]|0;
							tmp36[(tmp10+Lgeptoindexphi50|0)+6|0]=tmp36[(tmp10+Lgeptoindex47|0)+6|0]|0;
							tmp36[(tmp10+Lgeptoindexphi50|0)+7|0]=tmp36[(tmp10+Lgeptoindex47|0)+7|0]|0;
							Lgeptoindexphi50=Lgeptoindexphi50+8|0;
							if(tmp36!==tmp36||((tmp10+Lgeptoindex31|0)+(tmp11>>>2)|0)!==(tmp10+Lgeptoindexphi50|0)){
								Lgeptoindex47=Lgeptoindex47+8|0;
								continue;
							}
							break;
						}
					}
					L$poptgep170$poptgep$poptgepsqueezed.a1=tmp36;
					L$poptgep170$poptgep$poptgepsqueezed.a1o=(tmp10+Lgeptoindex31|0)+(tmp11>>2)|0;
					if((L$ppre78_1&131071|0)!==0)___assert_fail(_$pstr$p43$p203,0,_$pstr$p15$p124,0,872,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
					;
					tmp31=Larg0[Marg0].a16;
					if(L$ppre78_1>>>0<tmp31.i3>>>0){
						L$ppre58_0="/".concat((L$ppre78_1>>>17)+1|0);
						Larg0[Marg0].a26=L$ppre58_0;
						tmp31=tmp31.a6;
						__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed349,tmp31,L$ppre58_0);
						L$ppre58_0=L$poptgepsqueezed349.a0;
						L$ppre78_1=L$poptgepsqueezed349.a0o|0;
						if(L$ppre58_0!==nullArray||L$ppre78_1!==0){
							if(L$ppre58_0[L$ppre78_1].a0!==null){
								Larg0[Marg0].i13=1;
								L$ppre70_0=L$ppre58_0[L$ppre78_1].a[L$ppre58_0[L$ppre78_1].o- -1];
								L$ppre70_0.a0=Larg0;
								L$ppre70_0.a0o=Marg0;
								break a;
							}
							L$ppre58_0=L$ppre58_0[L$ppre78_1];
							L$ppre78_1=4;
							continue b;
						}
						L$ppre58_0=null;
						L$ppre78_1=4;
						continue b;
					}
					tmp31=L$pdispatch22;
					L$poptgep170$poptgep$poptgepsqueezed=L$pdispatch26;
					break;
				}
				L$ppre54_1=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31].i0|0;
				L$ppre78_1=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31].i1|0;
				Lgeptoindexphi50=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31].i2|0;
				tmp31=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31].a3;
				Lgeptoindex47=(__imul(Lgeptoindex47,16))-(__imul(Lgeptoindex31+1|0,16))|0;
				if(Lgeptoindex47>>>0>=16){
					tmp40=Lgeptoindex47-16|0;
					if((tmp40&16|0)!==0){
						Lprol$piter=0;
						Lgeptoindexphi35=1;
					}else{
						L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31].i0=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+1|0].i0|0;
						L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31].i1=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+1|0].i1|0;
						L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31].i2=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+1|0].i2|0;
						L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31].a3=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+1|0].a3;
						Lprol$piter=1;
						Lgeptoindexphi35=2;
					}
					if(tmp40>>>0>=16)while(1){
						L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+Lprol$piter|0].i0=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+Lgeptoindexphi35|0].i0|0;
						L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+Lprol$piter|0].i1=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+Lgeptoindexphi35|0].i1|0;
						L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+Lprol$piter|0].i2=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+Lgeptoindexphi35|0].i2|0;
						L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+Lprol$piter|0].a3=L$poptgep$poptgep132$poptgepsqueezed[Lgeptoindex31+Lgeptoindexphi35|0].a3;
						L$poptgep$poptgep132$poptgepsqueezed[(Lgeptoindex31+Lprol$piter|0)+1|0].i0=L$poptgep$poptgep132$poptgepsqueezed[(Lgeptoindex31+Lgeptoindexphi35|0)+1|0].i0|0;
						L$poptgep$poptgep132$poptgepsqueezed[(Lgeptoindex31+Lprol$piter|0)+1|0].i1=L$poptgep$poptgep132$poptgepsqueezed[(Lgeptoindex31+Lgeptoindexphi35|0)+1|0].i1|0;
						L$poptgep$poptgep132$poptgepsqueezed[(Lgeptoindex31+Lprol$piter|0)+1|0].i2=L$poptgep$poptgep132$poptgepsqueezed[(Lgeptoindex31+Lgeptoindexphi35|0)+1|0].i2|0;
						L$poptgep$poptgep132$poptgepsqueezed[(Lgeptoindex31+Lprol$piter|0)+1|0].a3=L$poptgep$poptgep132$poptgepsqueezed[(Lgeptoindex31+Lgeptoindexphi35|0)+1|0].a3;
						Lprol$piter=Lprol$piter+2|0;
						if(L$poptgep$poptgep132$poptgepsqueezed!==L$poptgep$poptgep132$poptgepsqueezed||(Lgeptoindex31+(Lgeptoindex47>>>4)|0)!==(Lgeptoindex31+Lprol$piter|0)){
							Lgeptoindexphi35=Lgeptoindexphi35+2|0;
							continue;
						}
						break;
					}
				}
				L$poptgep170$poptgep$poptgepsqueezed.a1=L$poptgep$poptgep132$poptgepsqueezed;
				L$poptgep170$poptgep$poptgepsqueezed.a1o=Lgeptoindex31+(Lgeptoindex47>>4)|0;
				if((Lgeptoindexphi50&131071|0)!==0)___assert_fail(_$pstr$p41$p201,0,_$pstr$p15$p124,0,857,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
				;
				Lgeptoindex31=tmp31.len;
				Lgeptoindex47=tmp31.bufOffset;
				if((Lgeptoindex31|0)===131072){
					L$ppre54_0=Larg0[Marg0].a17;
					L$poptgep170$poptgep$poptgepsqueezed=Larg0[Marg0].a16;
					tmp31={type:L$ppre54_1,tid:L$ppre78_1};
					__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE(L$poptgepsqueezed350,L$poptgep170$poptgep$poptgepsqueezed,L$ppre54_0,Lgeptoindexphi50>>>17,HEAP8,Lgeptoindex47,tmp31);
					L$ppre54_0=L$poptgepsqueezed350.a0;
					L$ppre54_1=L$poptgepsqueezed350.a0o|0;
					if(L$ppre54_0!==nullArray||L$ppre54_1!==0){
						if(L$ppre54_0[L$ppre54_1].a0!==null){
							Larg0[Marg0].i13=0;
							L$ppre70_0=L$ppre54_0[L$ppre54_1].a[L$ppre54_0[L$ppre54_1].o- -1];
							L$ppre70_0.a0=Larg0;
							L$ppre70_0.a0o=Marg0;
							break a;
						}
						L$ppre78_1=10;
						continue b;
					}
					L$ppre54_1=0;
					L$ppre54_0=nullArray;
					L$ppre78_1=10;
					continue b;
				}
				___assert_fail(_$pstr$p42$p202,0,_$pstr$p15$p124,0,861,___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE,0);
				;
				case 10:
				if(L$ppre54_0!==nullArray||L$ppre54_1!==0)L$ppre54_0[L$ppre54_1].a1(L$ppre54_0,L$ppre54_1);
				L$pdispatch20=Larg0[Marg0].i24|0;
				L$ppre70_0=Larg0[Marg0].a23;
				L$pdispatch22=Larg0[Marg0].a22;
				L$pdispatch23=Larg0[Marg0].a21;
				L$pdispatch24=Larg0[Marg0].a20;
				L$pdispatch25=Larg0[Marg0].a19;
				L$pdispatch26=Larg0[Marg0].a18;
				L$ppre78_1=9;
				continue b;
				default:
				L$ppre$mphi112$pdispatch_0[L$ppre$mphi112$pdispatch_1].a1(L$ppre$mphi112$pdispatch_0,L$ppre$mphi112$pdispatch_1);
				L$ppre78_1=0;
				continue b;
			}
			Larg0[Marg0].a29=tmp31;
			Larg0[Marg0].a28=L$poptgep170$poptgep$poptgepsqueezed;
			L$ppre78_1=Larg0[Marg0].i25|0;
			if((L$ppre78_1|0)===0){
				L$pdispatch20=Larg0[Marg0].i24|0;
				L$ppre70_0=Larg0[Marg0].a23;
				L$pdispatch23=Larg0[Marg0].a21;
				L$pdispatch24=Larg0[Marg0].a20;
				L$pdispatch25=Larg0[Marg0].a19;
				L$pdispatch22=tmp31;
				L$pdispatch26=L$poptgep170$poptgep$poptgepsqueezed;
				L$ppre78_1=9;
				continue b;
			}
			L$ppre62_0=Larg0[Marg0].a19;
			L$poptgep170$poptgep$poptgepsqueezed=Larg0[Marg0].a16;
			tmp31="/".concat((L$ppre78_1>>>17)-1|0);
			Larg0[Marg0].a30=tmp31;
			L$poptgep170$poptgep$poptgepsqueezed=L$poptgep170$poptgep$poptgepsqueezed.a6;
			__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE(L$poptgepsqueezed347,L$poptgep170$poptgep$poptgepsqueezed,tmp31);
			L$ppre62_0=L$poptgepsqueezed347.a0;
			L$ppre78_1=L$poptgepsqueezed347.a0o|0;
			if(L$ppre62_0===nullArray&&L$ppre78_1===0){
				L$ppre62_0=null;
				L$ppre78_1=1;
				continue b;
			}
			if(L$ppre62_0[L$ppre78_1].a0===null){
				L$ppre62_0=L$ppre62_0[L$ppre78_1];
				L$ppre78_1=1;
				continue b;
			}
			break;
		}
		Larg0[Marg0].i13=3;
		L$ppre70_0=L$ppre62_0[L$ppre78_1].a[L$ppre62_0[L$ppre78_1].o- -1];
		L$ppre70_0.a0=Larg0;
		L$ppre70_0.a0o=Marg0;
	}
}
function __ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=null,tmp2=0;
	switch(Larg0.i13&15){
		case 0:
		tmp1=Larg0.a5.a0;
		tmp2=Larg0.a5.a0o|0;
		if(tmp1===nullArray&&tmp2===0)break;
		tmp1[tmp2].a1(tmp1,tmp2);
		break;
		case 1:
		Larg0.a27=Larg0.a22;
		tmp1=Larg0.a6.a0;
		tmp2=Larg0.a6.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
		tmp1=Larg0.a26;
		break;
		case 2:
		tmp1=Larg0.a7.a0;
		tmp2=Larg0.a7.a0o|0;
		if(tmp1===nullArray&&tmp2===0)break;
		tmp1[tmp2].a1(tmp1,tmp2);
		break;
		case 3:
		Larg0.a31=Larg0.a23;
		tmp1=Larg0.a8.a0;
		tmp2=Larg0.a8.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
		tmp1=Larg0.a30;
		break;
		case 4:
		tmp1=Larg0.a9.a0;
		tmp2=Larg0.a9.a0o|0;
		if(tmp1===nullArray&&tmp2===0)break;
		tmp1[tmp2].a1(tmp1,tmp2);
		break;
		case 5:
		Larg0.i34=Larg0.i24|0;
		tmp1=Larg0.a10.a0;
		tmp2=Larg0.a10.a0o|0;
		if(tmp1!==nullArray||tmp2!==0)tmp1[tmp2].a1(tmp1,tmp2);
		tmp1=Larg0.a33;
		tmp0=Larg0.a32;
		break;
		case 6:
		tmp1=Larg0.a11.a0;
		tmp2=Larg0.a11.a0o|0;
		if(tmp1===nullArray&&tmp2===0)break;
		tmp1[tmp2].a1(tmp1,tmp2);
		break;
		case 7:
		tmp1=Larg0.a12.a0;
		tmp2=Larg0.a12.a0o|0;
		if(tmp1===nullArray&&tmp2===0)break;
		tmp1[tmp2].a1(tmp1,tmp2);
		break;
		case 8:
		tmp1=Larg0.a4.a0;
		if(tmp1===null)break;
		tmp1.a0=nullArray;
		tmp1.a0o=0;
		break;
		default:
		;
	}
}
function __ZN7CheerpX5Linux13requestDeviceEjj(Larg0,Larg1,Larg2,Larg3){
	var L$poptgepsqueezed7=null,tmp1=null,tmp2=null,L$poptgepsqueezed8=null,tmp4=0,tmp5=null;
	tmp1=create__ZN7CheerpX5Linux13requestDeviceEjj$pFrame({a0:null,a1:null,a2:{a0:nullArray,a0o:0},a3:null,a4:tmp1={a0:nullArray,a0o:0},i5:0}).a;
	tmp2=tmp1[0];
	tmp2.a0=__ZN7CheerpX5Linux13requestDeviceEjj$presume;
	tmp2.a1=__ZN7CheerpX5Linux13requestDeviceEjj$pdestroy;
	L$poptgepsqueezed7=tmp2.a2;
	L$poptgepsqueezed7.a0=nullArray;
	L$poptgepsqueezed7.a0o=0;
	L$poptgepsqueezed8=L$poptgepsqueezed7.a;
	tmp4=L$poptgepsqueezed7.o-1;
	Larg0.a0=L$poptgepsqueezed8;
	Larg0.a0o=tmp4;
	tmp4=Larg1.i42|0;
	L$poptgepsqueezed8=tmp2.a4;
	__ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b(L$poptgepsqueezed8,Larg1,tmp4,{type:81,tid:tmp4,devId:Larg2,len:Larg3});
	tmp5=L$poptgepsqueezed8.a0;
	tmp4=L$poptgepsqueezed8.a0o|0;
	a:{
		if(tmp5!==nullArray||tmp4!==0)if(tmp5[tmp4].a0!==null){
			tmp2.i5=0;
			tmp2=tmp5[tmp4].a[tmp5[tmp4].o- -1];
			tmp2.a0=tmp1;
			tmp2.a0o=0;
			break a;
		}
		tmp5=L$poptgepsqueezed8.a0;
		tmp4=L$poptgepsqueezed8.a0o|0;
		if(tmp5!==nullArray||tmp4!==0)tmp5[tmp4].a1(tmp5,tmp4);
		tmp2.a3=L$poptgepsqueezed7;
		tmp2.a0=null;
		tmp1=L$poptgepsqueezed7.a0;
		tmp4=L$poptgepsqueezed7.a0o|0;
		(tmp1!==nullArray||tmp4!==0?tmp1:_NoopCoro$pFrame$pConst$p118)[tmp1!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p118].a0((tmp1!==nullArray||tmp4!==0?tmp1:_NoopCoro$pFrame$pConst$p118),tmp1!==nullArray||tmp4!==0?tmp4:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux13requestDeviceEjj$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,L$poptgepsqueezed4=null,tmp2=0;
	L$poptgepsqueezed4=Larg0.a4.a0;
	tmp2=Larg0.a4.a0o|0;
	L$poptgepsqueezed4=Larg0.a4.a0;
	tmp2=Larg0.a4.a0o|0;
	if(L$poptgepsqueezed4!==nullArray||tmp2!==0)L$poptgepsqueezed4[tmp2].a1(L$poptgepsqueezed4,tmp2);
	L$poptgepsqueezed4=Larg0.a2;
	Larg0.a3=L$poptgepsqueezed4;
	Larg0.a0=null;
	tmp0=L$poptgepsqueezed4.a0;
	tmp2=L$poptgepsqueezed4.a0o|0;
	(tmp0!==nullArray||tmp2!==0?tmp0:_NoopCoro$pFrame$pConst$p118)[tmp0!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst$p118].a0((tmp0!==nullArray||tmp2!==0?tmp0:_NoopCoro$pFrame$pConst$p118),tmp0!==nullArray||tmp2!==0?tmp2:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux13requestDeviceEjj$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a4.a0;
		tmp1=Larg0.a4.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN7CheerpX5Linux17requestCreateFileEjRKN6client6StringE(Larg0,Larg1,Larg2,Larg3){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed9=null,tmp5=0,tmp6=null;
	tmp2=create__ZN7CheerpX5Linux17requestCreateFileEjRKN6client6StringE$pFrame({a0:null,a1:null,a2:tmp2={a0:nullArray,a0o:0,a1:{i0:0,i1:0}},a3:{a0:nullArray,a0o:0},i4:0,a5:tmp2=[0],a6:null}).a;
	tmp3=tmp2[0];
	tmp3.a0=__ZN7CheerpX5Linux17requestCreateFileEjRKN6client6StringE$presume;
	tmp3.a1=__ZN7CheerpX5Linux17requestCreateFileEjRKN6client6StringE$pdestroy;
	L$poptgepsqueezed8=tmp3.a2;
	L$poptgepsqueezed8.a0=nullArray;
	L$poptgepsqueezed8.a0o=0;
	tmp1=L$poptgepsqueezed8.a1;
	tmp1.i0=0;
	L$poptgepsqueezed9=L$poptgepsqueezed8.a;
	tmp5=L$poptgepsqueezed8.o-1;
	Larg0.a0=L$poptgepsqueezed9;
	Larg0.a0o=tmp5;
	tmp5=Larg1.i42|0;
	L$poptgepsqueezed9=tmp3.a3;
	__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb(L$poptgepsqueezed9,Larg1,tmp5,{type:96,tid:tmp5,devId:Larg2,path:Larg3},0);
	tmp6=L$poptgepsqueezed9.a0;
	tmp5=L$poptgepsqueezed9.a0o|0;
	a:{
		if(tmp6!==nullArray||tmp5!==0)if(tmp6[tmp5].a0!==null){
			tmp3.i4=0;
			tmp3=tmp6[tmp5].a[tmp6[tmp5].o- -1];
			tmp3.a0=tmp2;
			tmp3.a0o=0;
			break a;
		}
		tmp6=tmp6[tmp5].a[tmp6[tmp5].o- -1];
		tmp5=tmp6.a1.i1|0;
		tmp1.i0=256;
		tmp1.i1=tmp5;
		tmp6=L$poptgepsqueezed9.a0;
		tmp5=L$poptgepsqueezed9.a0o|0;
		if(tmp6!==nullArray||tmp5!==0)tmp6[tmp5].a1(tmp6,tmp5);
		tmp3.a6=L$poptgepsqueezed8;
		tmp3.a0=null;
		tmp2=L$poptgepsqueezed8.a0;
		tmp5=L$poptgepsqueezed8.a0o|0;
		(tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118)[tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118].a0((tmp2!==nullArray||tmp5!==0?tmp2:_NoopCoro$pFrame$pConst$p118),tmp2!==nullArray||tmp5!==0?tmp5:$NoopCoro$pFrame$pConst$p118);
	}
}
function __ZN7CheerpX5Linux17requestCreateFileEjRKN6client6StringE$presume(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var L$poptgepsqueezed5=null,tmp1=0,L$poptgep$poptgep2$poptgep=null;
	L$poptgepsqueezed5=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	L$poptgepsqueezed5=L$poptgepsqueezed5[tmp1].a[L$poptgepsqueezed5[tmp1].o- -1];
	tmp1=L$poptgepsqueezed5.a1.i1|0;
	L$poptgepsqueezed5=Larg0.a2;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a1;
	L$poptgep$poptgep2$poptgep.i0=256;
	L$poptgep$poptgep2$poptgep.i1=tmp1;
	L$poptgep$poptgep2$poptgep=Larg0.a3.a0;
	tmp1=Larg0.a3.a0o|0;
	if(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0)L$poptgep$poptgep2$poptgep[tmp1].a1(L$poptgep$poptgep2$poptgep,tmp1);
	Larg0.a6=L$poptgepsqueezed5;
	Larg0.a0=null;
	L$poptgep$poptgep2$poptgep=L$poptgepsqueezed5.a0;
	tmp1=L$poptgepsqueezed5.a0o|0;
	(L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118)[L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118].a0((L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?L$poptgep$poptgep2$poptgep:_NoopCoro$pFrame$pConst$p118),L$poptgep$poptgep2$poptgep!==nullArray||tmp1!==0?tmp1:$NoopCoro$pFrame$pConst$p118);
}
function __ZN7CheerpX5Linux17requestCreateFileEjRKN6client6StringE$pdestroy(Larg0,Marg0){
	Larg0=Larg0[Marg0];
	var tmp0=null,tmp1=0;
	if(Larg0.a0!==null){
		tmp0=Larg0.a3.a0;
		tmp1=Larg0.a3.a0o|0;
		if(tmp0!==nullArray||tmp1!==0)tmp0[tmp1].a1(tmp0,tmp1);
	}
}
function __ZN11CXUIConsole4Line8truncateEj(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,tmp4=0,Lxtraiter=0,tmp6=0,Lgeptoindexphi5=0,Lgeptoindex2=0,Lgeptoindex22=0,Lprol$piter=0;
	tmp0=Larg0.a1;
	Lxtraiter=Larg0.a1o|0;
	tmp1=Larg0.a0;
	tmp2=Larg0.a0o|0;
	tmp6=(__imul(Lxtraiter,2));
	if(tmp6-(__imul(tmp2,2))>>1>>>0<Larg1>>>0)___assert_fail(_$pstr$p209,0,_$pstr$p1$p210,0,10,___func__$p_ZN11CXUIConsole4Line8truncateEj,0);
	;
	if(tmp1!==tmp0||(tmp2+Larg1|0)!==Lxtraiter){
		tmp3=Larg1<<1>>1;
		Lgeptoindexphi5=tmp6-(__imul(tmp2+Larg1|0,2))|0;
		Lgeptoindex2=tmp3+(Lgeptoindexphi5>>1)|0;
		tmp6=tmp6-(__imul(tmp2+Lgeptoindex2|0,2))|0;
		if(tmp6>>>0>=2){
			Lxtraiter=tmp6>>>1;
			Lgeptoindex22=tmp3+Lxtraiter|0;
			if((Lgeptoindexphi5|0)<0){
				Lgeptoindexphi5=Lgeptoindex2+Lxtraiter|0;
				Lprol$piter=tmp6-2|0;
				Lgeptoindex2=(Lprol$piter>>>1)+1&3;
				if((Lgeptoindex2|0)!==0){
					Lxtraiter=0;
					while(1){
						Lgeptoindexphi5=Lgeptoindexphi5-1|0;
						Lgeptoindex22=Lgeptoindex22-1|0;
						tmp1[tmp2+Lgeptoindex22|0]=tmp1[tmp2+Lgeptoindexphi5|0]|0;
						Lxtraiter=Lxtraiter+1|0;
						if((Lxtraiter|0)!==(Lgeptoindex2|0))continue;
						break;
					}
				}
				if(Lprol$piter>>>0>=6)while(1){
					tmp1[(tmp2+Lgeptoindex22|0)+ -1|0]=tmp1[(tmp2+Lgeptoindexphi5|0)+ -1|0]|0;
					tmp1[(tmp2+Lgeptoindex22|0)+ -2|0]=tmp1[(tmp2+Lgeptoindexphi5|0)+ -2|0]|0;
					tmp1[(tmp2+Lgeptoindex22|0)+ -3|0]=tmp1[(tmp2+Lgeptoindexphi5|0)+ -3|0]|0;
					Lgeptoindexphi5=Lgeptoindexphi5-4|0;
					Lgeptoindex22=Lgeptoindex22-4|0;
					tmp1[tmp2+Lgeptoindex22|0]=tmp1[tmp2+Lgeptoindexphi5|0]|0;
					if(tmp1!==tmp1||(tmp2+tmp3|0)!==(tmp2+Lgeptoindex22|0))continue;
					break;
				}
			}else{
				tmp4=tmp6-2|0;
				Lxtraiter=(tmp4>>>1)+1&7;
				if((Lxtraiter|0)!==0){
					Lgeptoindexphi5=tmp3;
					Lprol$piter=0;
					while(1){
						tmp1[tmp2+Lgeptoindexphi5|0]=tmp1[tmp2+Lgeptoindex2|0]|0;
						Lprol$piter=Lprol$piter+1|0;
						Lgeptoindexphi5=Lgeptoindexphi5+1|0;
						Lgeptoindex2=Lgeptoindex2+1|0;
						if((Lprol$piter|0)!==(Lxtraiter|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi5=tmp3;
				}
				if(tmp4>>>0>=14)while(1){
					tmp1[tmp2+Lgeptoindexphi5|0]=tmp1[tmp2+Lgeptoindex2|0]|0;
					tmp1[(tmp2+Lgeptoindexphi5|0)+1|0]=tmp1[(tmp2+Lgeptoindex2|0)+1|0]|0;
					tmp1[(tmp2+Lgeptoindexphi5|0)+2|0]=tmp1[(tmp2+Lgeptoindex2|0)+2|0]|0;
					tmp1[(tmp2+Lgeptoindexphi5|0)+3|0]=tmp1[(tmp2+Lgeptoindex2|0)+3|0]|0;
					tmp1[(tmp2+Lgeptoindexphi5|0)+4|0]=tmp1[(tmp2+Lgeptoindex2|0)+4|0]|0;
					tmp1[(tmp2+Lgeptoindexphi5|0)+5|0]=tmp1[(tmp2+Lgeptoindex2|0)+5|0]|0;
					tmp1[(tmp2+Lgeptoindexphi5|0)+6|0]=tmp1[(tmp2+Lgeptoindex2|0)+6|0]|0;
					tmp1[(tmp2+Lgeptoindexphi5|0)+7|0]=tmp1[(tmp2+Lgeptoindex2|0)+7|0]|0;
					Lgeptoindexphi5=Lgeptoindexphi5+8|0;
					if(tmp1!==tmp1||(tmp2+Lgeptoindex22|0)!==(tmp2+Lgeptoindexphi5|0)){
						Lgeptoindex2=Lgeptoindex2+8|0;
						continue;
					}
					break;
				}
			}
		}
		Larg0.a1=tmp1;
		Larg0.a1o=(tmp2+tmp3|0)+(tmp6>>1)|0;
	}
	Larg0.i4=1;
}
function __ZNK11CXUIConsole4Line9getStringEv(Larg0){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=null,tmp4=0,tmp5=null,tmp6=0,tmp7=0;
	tmp0={i0:0,i1:0,a2:nullArray};
	tmp0.i0=0;
	tmp0.i1=0;
	tmp0.a2=nullArray;
	tmp3=Larg0.a1;
	tmp4=Larg0.a1o|0;
	tmp5=Larg0.a0;
	tmp6=Larg0.a0o|0;
	__ZNSs7reserveEj(tmp0,(__imul(tmp4,2))-(__imul(tmp6,2))>>1);
	tmp5=Larg0.a1;
	tmp6=Larg0.a1o|0;
	tmp3=Larg0.a0;
	tmp4=Larg0.a0o|0;
	if(((__imul(tmp6,2))|0)!==((__imul(tmp4,2))|0)){
		tmp6=0;
		while(1){
			__ZNSs9push_backEc(tmp0,(tmp3[tmp4+tmp6|0]&65535)>>>8);
			tmp5=Larg0.a1;
			tmp7=Larg0.a1o|0;
			tmp3=Larg0.a0;
			tmp4=Larg0.a0o|0;
			tmp6=tmp6+1|0;
			if(tmp6>>>0<(__imul(tmp7,2))-(__imul(tmp4,2))>>1>>>0)continue;
			break;
		}
	}
	tmp3=tmp0.a2;
	tmp4=tmp0.i1|0;
	tmp5=String();
	if((tmp4|0)===0)return tmp5;
	tmp6=0;
	while(1){
		tmp1=tmp3[tmp6]|0;
		if((tmp1&255)!==0){
			tmp2=tmp1&255;
			if(tmp1<<24>-16777216){
				tmp7=tmp2;
			}else if((tmp1&255)<192){
				tmp7=(tmp2&63)+(tmp7<<6)|0;
			}else if((tmp1&255)<224){
				tmp7=tmp2&31;
			}else if((tmp1&255)<240){
				tmp7=tmp2&15;
			}else{
				tmp7=tmp2&7;
			}
			tmp6=tmp6+1|0;
			a:{
				if((tmp6|0)!==(tmp4|0))if((tmp3[tmp6]&192)===128)break a;
				if(tmp7>>>0<65536)tmp5=tmp5.concat(String.fromCharCode(tmp7));
				else{
					tmp5=tmp5.concat(String.fromCharCode(tmp7-65536>>>10|55296));
					tmp5=tmp5.concat(String.fromCharCode(tmp7&1023|56320));
				}
			}
			if((tmp6|0)!==(tmp4|0))continue;
			return tmp5;
		}
		break;
	}
	return tmp5;
}
function __ZN11CXUIConsole4Line7writeAtEjhh(Larg0,Larg1,Larg2,Larg3){
	var tmp0=0,tmp1=null,L$poptgepsqueezed27=null,L$poptgepsqueezed22=null,L$ppre_0=0,L$poptgepsqueezed28=null,tmp6=0,L$ppre$mphi37=0,L$ppre$mphi38=0,tmp9=null;
	L$poptgepsqueezed22=Larg0.a1;
	L$ppre_0=Larg0.a1o|0;
	L$poptgepsqueezed28=Larg0.a0;
	tmp6=Larg0.a0o|0;
	L$ppre$mphi37=(__imul(tmp6,2));
	L$ppre$mphi38=(__imul(L$ppre_0,2))-L$ppre$mphi37|0;
	tmp0=L$ppre$mphi38>>1;
	if(tmp0>>>0>Larg1>>>0)L$poptgepsqueezed28[tmp6+Larg1|0]=((Larg2&255)<<8)+(Larg3&255)|0;
	else{
		tmp1={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp1={a0:null}}};
		if(tmp0>>>0<Larg1>>>0){
			L$poptgepsqueezed27=Larg0.a2;
			while(1){
				tmp9=L$poptgepsqueezed27.a0;
				L$ppre$mphi37=L$poptgepsqueezed27.a0o|0;
				if(L$ppre_0<L$ppre$mphi37){
					L$poptgepsqueezed22[L$ppre_0]=8193;
					Larg0.a1=L$poptgepsqueezed22;
					Larg0.a1o=L$ppre_0+1|0;
					L$poptgepsqueezed22=L$poptgepsqueezed22;
					L$ppre_0=L$ppre_0+1|0;
				}else{
					tmp6=(__imul(tmp6,2));
					L$ppre_0=(__imul(L$ppre_0,2))-tmp6|0;
					if((L$ppre_0|0)<-2)_abort();
					;
					L$ppre$mphi37=(__imul(L$ppre$mphi37,2))-tmp6|0;
					L$ppre_0>>=1;
					tmp6=L$ppre_0+1|0;
					tmp6=L$ppre$mphi37>>>0<2147483646?(L$ppre$mphi37>>>0>tmp6>>>0?L$ppre$mphi37|0:tmp6|0)|0:2147483647|0;
					L$poptgepsqueezed22=tmp1.a3;
					L$poptgepsqueezed22.a1.a0=L$poptgepsqueezed27;
					if((tmp6|0)!==0){
						if((tmp6|0)<0)__ZSt28__throw_bad_array_new_lengthB7v160000v();
						;
						L$poptgepsqueezed28=new Uint16Array((tmp6<<1)/2|0);
						tmp1.a0=L$poptgepsqueezed28[0];
					}else{
						tmp1.a0=null;
						L$poptgepsqueezed28=nullArray;
					}
					tmp1.a1=L$poptgepsqueezed28;
					tmp1.a1o=0+L$ppre_0|0;
					L$poptgepsqueezed22.a0=L$poptgepsqueezed28;
					L$poptgepsqueezed22.a0o=0+tmp6|0;
					L$poptgepsqueezed28[L$ppre_0]=8193;
					tmp1.a2=L$poptgepsqueezed28;
					tmp1.a2o=(0+L$ppre_0|0)+1|0;
					__ZNSt6vectorIN11CXUIConsole4CharESaIS1_EE26__swap_out_circular_bufferERSt14__split_bufferIS1_RS2_E(Larg0,tmp1);
					L$poptgepsqueezed22=Larg0.a1;
					L$ppre_0=Larg0.a1o|0;
				}
				L$poptgepsqueezed28=Larg0.a0;
				tmp6=Larg0.a0o|0;
				L$ppre$mphi37=(__imul(tmp6,2));
				L$ppre$mphi38=(__imul(L$ppre_0,2))-L$ppre$mphi37|0;
				if(L$ppre$mphi38>>1>>>0<Larg1>>>0)continue;
				break;
			}
		}
		if((L$ppre$mphi38>>1|0)!==(Larg1|0))___assert_fail(_$pstr$p2$p211,0,_$pstr$p1$p210,0,35,___func__$p_ZN11CXUIConsole4Line7writeAtEjhh,0);
		;
		L$poptgepsqueezed28=Larg0.a2;
		tmp9=L$poptgepsqueezed28.a0;
		tmp6=L$poptgepsqueezed28.a0o|0;
		if(L$ppre_0<tmp6){
			L$poptgepsqueezed22[L$ppre_0]=((Larg2&255)<<8)+(Larg3&255)|0;
			Larg0.a1=L$poptgepsqueezed22;
			Larg0.a1o=L$ppre_0+1|0;
		}else{
			if((L$ppre$mphi38|0)<-2)_abort();
			;
			tmp6=(__imul(tmp6,2))-L$ppre$mphi37|0;
			L$ppre_0=Larg1+1|0;
			L$ppre_0=tmp6>>>0<2147483646?(tmp6>>>0>L$ppre_0>>>0?tmp6|0:L$ppre_0|0)|0:2147483647|0;
			L$poptgepsqueezed22=tmp1.a3;
			L$poptgepsqueezed22.a1.a0=L$poptgepsqueezed28;
			if((L$ppre_0|0)!==0){
				if((L$ppre_0|0)<0)__ZSt28__throw_bad_array_new_lengthB7v160000v();
				;
				L$poptgepsqueezed28=new Uint16Array((L$ppre_0<<1)/2|0);
				tmp1.a0=L$poptgepsqueezed28[0];
			}else{
				tmp1.a0=null;
				L$poptgepsqueezed28=nullArray;
			}
			tmp1.a1=L$poptgepsqueezed28;
			tmp1.a1o=0+Larg1|0;
			L$poptgepsqueezed22.a0=L$poptgepsqueezed28;
			L$poptgepsqueezed22.a0o=0+L$ppre_0|0;
			L$poptgepsqueezed28[Larg1]=((Larg2&255)<<8)+(Larg3&255)|0;
			tmp1.a2=L$poptgepsqueezed28;
			tmp1.a2o=(0+Larg1|0)+1|0;
			__ZNSt6vectorIN11CXUIConsole4CharESaIS1_EE26__swap_out_circular_bufferERSt14__split_bufferIS1_RS2_E(Larg0,tmp1);
		}
	}
	Larg0.i4=1;
}
function __ZNSt6vectorIN11CXUIConsole4CharESaIS1_EE26__swap_out_circular_bufferERSt14__split_bufferIS1_RS2_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,Lgeptoindexphi=0,tmp5=0,Lgeptoindexphi3=0,Lgeptoindex18=0,tmp8=0,Lxtraiter=0,Lprol$piter=0;
	tmp2=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp3=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	Lgeptoindexphi=(__imul(Lgeptoindexphi,2))-(__imul(tmp0,2))|0;
	tmp3=Larg1.a1;
	tmp5=Larg1.a1o|0;
	tmp1=-(Lgeptoindexphi>>1)|0;
	if(Lgeptoindexphi>>>0>=2){
		Lgeptoindexphi3=Lgeptoindexphi>>>1;
		Lgeptoindex18=tmp1+Lgeptoindexphi3|0;
		if(tmp0<(tmp5+tmp1|0)){
			tmp8=Lgeptoindexphi-2|0;
			Lgeptoindexphi=(tmp8>>>1)+1&3;
			if((Lgeptoindexphi|0)!==0){
				Lxtraiter=0;
				while(1){
					Lgeptoindexphi3=Lgeptoindexphi3-1|0;
					Lgeptoindex18=Lgeptoindex18-1|0;
					tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0]|0;
					Lxtraiter=Lxtraiter+1|0;
					if((Lxtraiter|0)!==(Lgeptoindexphi|0))continue;
					break;
				}
			}
			if(tmp8>>>0>=6)while(1){
				tmp3[(tmp5+Lgeptoindex18|0)+ -1|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -1|0]|0;
				tmp3[(tmp5+Lgeptoindex18|0)+ -2|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -2|0]|0;
				tmp3[(tmp5+Lgeptoindex18|0)+ -3|0]=tmp2[(tmp0+Lgeptoindexphi3|0)+ -3|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3-4|0;
				Lgeptoindex18=Lgeptoindex18-4|0;
				tmp3[tmp5+Lgeptoindex18|0]=tmp2[tmp0+Lgeptoindexphi3|0]|0;
				if(tmp3!==tmp3||(tmp5+tmp1|0)!==(tmp5+Lgeptoindex18|0))continue;
				break;
			}
		}else{
			tmp8=Lgeptoindexphi-2|0;
			Lxtraiter=(tmp8>>>1)+1&7;
			if((Lxtraiter|0)!==0){
				Lgeptoindexphi3=tmp1;
				Lprol$piter=0;
				Lgeptoindexphi=0;
				while(1){
					tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0]|0;
					Lprol$piter=Lprol$piter+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter|0)!==(Lxtraiter|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=tmp1;
				Lgeptoindexphi=0;
			}
			if(tmp8>>>0>=14)while(1){
				tmp3[tmp5+Lgeptoindexphi3|0]=tmp2[tmp0+Lgeptoindexphi|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+1|0]=tmp2[(tmp0+Lgeptoindexphi|0)+1|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+2|0]=tmp2[(tmp0+Lgeptoindexphi|0)+2|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+3|0]=tmp2[(tmp0+Lgeptoindexphi|0)+3|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+4|0]=tmp2[(tmp0+Lgeptoindexphi|0)+4|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+5|0]=tmp2[(tmp0+Lgeptoindexphi|0)+5|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+6|0]=tmp2[(tmp0+Lgeptoindexphi|0)+6|0]|0;
				tmp3[(tmp5+Lgeptoindexphi3|0)+7|0]=tmp2[(tmp0+Lgeptoindexphi|0)+7|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp3!==tmp3||(tmp5+Lgeptoindex18|0)!==(tmp5+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
	}
	Larg1.a1=tmp3;
	Larg1.a1o=tmp5+(tmp1<<1>>1)|0;
	tmp2=Larg0.a0;
	Lgeptoindexphi=Larg0.a0o|0;
	Larg0.a0=tmp3;
	Larg0.a0o=tmp5+(tmp1<<1>>1)|0;
	Larg1.a1=tmp2;
	Larg1.a1o=Lgeptoindexphi;
	tmp2=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	tmp3=Larg1.a2;
	tmp5=Larg1.a2o|0;
	Larg0.a1=tmp3;
	Larg0.a1o=tmp5;
	Larg1.a2=tmp2;
	Larg1.a2o=Lgeptoindexphi;
	tmp2=Larg0.a2.a0;
	Lgeptoindexphi=Larg0.a2.a0o|0;
	tmp3=Larg1.a3.a0;
	tmp5=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp3;
	Larg0.a2.a0o=tmp5;
	Larg1.a3.a0=tmp2;
	Larg1.a3.a0o=Lgeptoindexphi;
	tmp2=Larg1.a1;
	Lgeptoindexphi=Larg1.a1o|0;
	Larg1.a0=tmp2[Lgeptoindexphi];
}
function __ZN11CXUIConsole7getLineEj(Larg0,Larg1){
	var L$poptgepsqueezed9=null,tmp1=null,tmp2=0,tmp3=0,tmp4=null,tmp5=null,tmp6=0,L$ppre_0=null,L$ppre_1=0,Lgeptoindexphi=0;
	L$poptgepsqueezed9=Larg0.a9;
	L$ppre_0=L$poptgepsqueezed9.a1;
	L$ppre_1=L$poptgepsqueezed9.a1o|0;
	tmp1=L$poptgepsqueezed9.a0;
	tmp2=L$poptgepsqueezed9.a0o|0;
	Lgeptoindexphi=((__imul(L$ppre_1,17))-(__imul(tmp2,17))|0)/17|0;
	if(Lgeptoindexphi>>>0>Larg1>>>0)return tmp1[tmp2+Larg1|0];
	tmp3=Larg1+1|0;
	if(tmp3>>>0>Lgeptoindexphi>>>0){
		__ZNSt6vectorIN11CXUIConsole4LineESaIS1_EE8__appendEj(L$poptgepsqueezed9,tmp3-Lgeptoindexphi|0);
		L$ppre_0=L$poptgepsqueezed9.a0;
		L$ppre_1=L$poptgepsqueezed9.a0o|0;
		return L$ppre_0[L$ppre_1+Larg1|0];
	}
	if(tmp3>>>0<Lgeptoindexphi>>>0){
		if(L$ppre_0!==tmp1||L$ppre_1!==(tmp2+tmp3|0)){
			Lgeptoindexphi=0;
			while(1){
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				tmp4=L$ppre_0[L$ppre_1+Lgeptoindexphi|0];
				tmp5=tmp4.a0;
				tmp6=tmp4.a0o|0;
				if(tmp5!==nullArray||tmp6!==0){
					tmp4.a1=tmp5;
					tmp4.a1o=tmp6;
				}
				if(L$ppre_0!==tmp1||(L$ppre_1+Lgeptoindexphi|0)!==(tmp2+tmp3|0))continue;
				break;
			}
		}
		L$poptgepsqueezed9.a1=tmp1;
		L$poptgepsqueezed9.a1o=tmp2+tmp3|0;
		return tmp1[tmp2+Larg1|0];
	}
	return tmp1[tmp2+Larg1|0];
}
function __ZNSt6vectorIN11CXUIConsole4LineESaIS1_EE8__appendEj(Larg0,Larg1){
	var tmp0=null,tmp1=null,L$poptgepsqueezed84=null,tmp3=null,Lgeptoindexphi=0,L$poptgepsqueezed66=null,tmp6=0,Lgeptoindexphi13=0,tmp8=0;
	L$poptgepsqueezed84=Larg0.a2;
	tmp3=L$poptgepsqueezed84.a0;
	Lgeptoindexphi=L$poptgepsqueezed84.a0o|0;
	L$poptgepsqueezed66=Larg0.a1;
	tmp6=Larg0.a1o|0;
	Lgeptoindexphi13=(__imul(tmp6,17));
	tmp8=(__imul(Lgeptoindexphi,17));
	if((tmp8-Lgeptoindexphi13|0)/17>>>0<Larg1>>>0){
		tmp3={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp3={a0:null}}};
		L$poptgepsqueezed66=Larg0.a0;
		Lgeptoindexphi=Larg0.a0o|0;
		Lgeptoindexphi=(__imul(Lgeptoindexphi,17));
		Lgeptoindexphi13=(Lgeptoindexphi13-Lgeptoindexphi|0)/17|0;
		tmp6=Lgeptoindexphi13+Larg1|0;
		if(tmp6>>>0>252645135)_abort();
		;
		Lgeptoindexphi=(tmp8-Lgeptoindexphi|0)/17|0;
		if(Lgeptoindexphi>>>0<126322567){
			Lgeptoindexphi<<=1;
			Lgeptoindexphi=Lgeptoindexphi>>>0>tmp6>>>0?Lgeptoindexphi|0:tmp6|0;
		}else{
			Lgeptoindexphi=252645135;
		}
		L$poptgepsqueezed66=tmp3.a3;
		L$poptgepsqueezed66.a1.a0=L$poptgepsqueezed84;
		if((Lgeptoindexphi|0)!==0)L$poptgepsqueezed84=createArray_struct$p_ZN11CXUIConsole4LineE((__imul(Lgeptoindexphi,17)|0)/17|0);
		else{
			L$poptgepsqueezed84=nullArray;
		}
		tmp3.a0=L$poptgepsqueezed84[0];
		tmp3.a1=L$poptgepsqueezed84;
		tmp3.a1o=0+Lgeptoindexphi13|0;
		L$poptgepsqueezed66.a0=L$poptgepsqueezed84;
		L$poptgepsqueezed66.a0o=0+Lgeptoindexphi|0;
		if((Larg1&1|0)!==0){
			L$poptgepsqueezed66=L$poptgepsqueezed84[Lgeptoindexphi13];
			L$poptgepsqueezed66.a0=nullArray;
			L$poptgepsqueezed66.a0o=0;
			L$poptgepsqueezed66.a1=nullArray;
			L$poptgepsqueezed66.a1o=0;
			L$poptgepsqueezed66.a2.a0=nullArray;
			L$poptgepsqueezed66.a2.a0o=0;
			L$poptgepsqueezed84[Lgeptoindexphi13].a3=null;
			L$poptgepsqueezed84[Lgeptoindexphi13].i4=0;
			Lgeptoindexphi=1;
		}else{
			Lgeptoindexphi=0;
		}
		if((Larg1|0)!==1)while(1){
			L$poptgepsqueezed66=L$poptgepsqueezed84[(0+Lgeptoindexphi13|0)+Lgeptoindexphi|0];
			L$poptgepsqueezed66.a0=nullArray;
			L$poptgepsqueezed66.a0o=0;
			L$poptgepsqueezed66.a1=nullArray;
			L$poptgepsqueezed66.a1o=0;
			L$poptgepsqueezed66.a2.a0=nullArray;
			L$poptgepsqueezed66.a2.a0o=0;
			L$poptgepsqueezed84[(0+Lgeptoindexphi13|0)+Lgeptoindexphi|0].a3=null;
			L$poptgepsqueezed84[(0+Lgeptoindexphi13|0)+Lgeptoindexphi|0].i4=0;
			L$poptgepsqueezed66=L$poptgepsqueezed84[((0+Lgeptoindexphi13|0)+Lgeptoindexphi|0)+1|0];
			L$poptgepsqueezed66.a0=nullArray;
			L$poptgepsqueezed66.a0o=0;
			L$poptgepsqueezed66.a1=nullArray;
			L$poptgepsqueezed66.a1o=0;
			L$poptgepsqueezed66.a2.a0=nullArray;
			L$poptgepsqueezed66.a2.a0o=0;
			L$poptgepsqueezed84[((0+Lgeptoindexphi13|0)+Lgeptoindexphi|0)+1|0].a3=null;
			L$poptgepsqueezed84[((0+Lgeptoindexphi13|0)+Lgeptoindexphi|0)+1|0].i4=0;
			Lgeptoindexphi=Lgeptoindexphi+2|0;
			if(L$poptgepsqueezed84!==L$poptgepsqueezed84||((0+Lgeptoindexphi13|0)+Lgeptoindexphi|0)!==((0+Lgeptoindexphi13|0)+Larg1|0))continue;
			break;
		}
		tmp3.a2=L$poptgepsqueezed84;
		tmp3.a2o=(0+Lgeptoindexphi13|0)+Larg1|0;
		__ZNSt6vectorIN11CXUIConsole4LineESaIS1_EE26__swap_out_circular_bufferERSt14__split_bufferIS1_RS2_E(Larg0,tmp3);
		L$poptgepsqueezed66=tmp3.a1;
		Lgeptoindexphi=tmp3.a1o|0;
		L$poptgepsqueezed84=tmp3.a2;
		tmp6=tmp3.a2o|0;
		if(L$poptgepsqueezed84!==L$poptgepsqueezed66||tmp6!==Lgeptoindexphi){
			Lgeptoindexphi13=0;
			while(1){
				Lgeptoindexphi13=Lgeptoindexphi13-1|0;
				tmp0=L$poptgepsqueezed84[tmp6+Lgeptoindexphi13|0];
				tmp1=tmp0.a0;
				tmp8=tmp0.a0o|0;
				if(tmp1!==nullArray||tmp8!==0){
					tmp0.a1=tmp1;
					tmp0.a1o=tmp8;
				}
				if(L$poptgepsqueezed84!==L$poptgepsqueezed66||(tmp6+Lgeptoindexphi13|0)!==Lgeptoindexphi)continue;
				break;
			}
		}
	}else{
		if((Larg1|0)!==0){
			if((Larg1&1|0)!==0){
				L$poptgepsqueezed66[tmp6].a0=nullArray;
				L$poptgepsqueezed66[tmp6].a0o=0;
				L$poptgepsqueezed66[tmp6].a1=nullArray;
				L$poptgepsqueezed66[tmp6].a1o=0;
				L$poptgepsqueezed66[tmp6].a2.a0=nullArray;
				L$poptgepsqueezed66[tmp6].a2.a0o=0;
				L$poptgepsqueezed66[tmp6].a3=null;
				L$poptgepsqueezed66[tmp6].i4=0;
				Lgeptoindexphi=1;
			}else{
				Lgeptoindexphi=0;
			}
			if((Larg1|0)===1){
				Lgeptoindexphi=Larg1;
			}else{
				while(1){
					L$poptgepsqueezed84=L$poptgepsqueezed66[tmp6+Lgeptoindexphi|0];
					L$poptgepsqueezed84.a0=nullArray;
					L$poptgepsqueezed84.a0o=0;
					L$poptgepsqueezed84.a1=nullArray;
					L$poptgepsqueezed84.a1o=0;
					L$poptgepsqueezed84.a2.a0=nullArray;
					L$poptgepsqueezed84.a2.a0o=0;
					L$poptgepsqueezed66[tmp6+Lgeptoindexphi|0].a3=null;
					L$poptgepsqueezed66[tmp6+Lgeptoindexphi|0].i4=0;
					L$poptgepsqueezed84=L$poptgepsqueezed66[(tmp6+Lgeptoindexphi|0)+1|0];
					L$poptgepsqueezed84.a0=nullArray;
					L$poptgepsqueezed84.a0o=0;
					L$poptgepsqueezed84.a1=nullArray;
					L$poptgepsqueezed84.a1o=0;
					L$poptgepsqueezed84.a2.a0=nullArray;
					L$poptgepsqueezed84.a2.a0o=0;
					L$poptgepsqueezed66[(tmp6+Lgeptoindexphi|0)+1|0].a3=null;
					L$poptgepsqueezed66[(tmp6+Lgeptoindexphi|0)+1|0].i4=0;
					Lgeptoindexphi=Lgeptoindexphi+2|0;
					if(L$poptgepsqueezed66!==L$poptgepsqueezed66||(tmp6+Lgeptoindexphi|0)!==(tmp6+Larg1|0))continue;
					break;
				}
				Lgeptoindexphi=Larg1;
			}
		}else{
			Lgeptoindexphi=0;
		}
		Larg0.a1=L$poptgepsqueezed66;
		Larg0.a1o=tmp6+Lgeptoindexphi|0;
	}
}
function __ZNSt6vectorIN11CXUIConsole4LineESaIS1_EE26__swap_out_circular_bufferERSt14__split_bufferIS1_RS2_E(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=0,Lgeptoindex4=0,tmp5=null,tmp6=null,tmp7=null,tmp8=null,Lgeptoindex=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,tmp12=null,tmp13=0;
	tmp7=Larg0.a0;
	tmp0=Larg0.a0o|0;
	tmp8=Larg0.a1;
	tmp1=Larg0.a1o|0;
	tmp2=Larg1.a1;
	tmp3=Larg1.a1o|0;
	if(tmp8===tmp7&&tmp1===tmp0){
		Lgeptoindex=0;
	}else{
		Lgeptoindexphi3=0;
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindex=Lgeptoindexphi-1|0;
			Lgeptoindex4=Lgeptoindexphi3-1|0;
			tmp5=tmp2[tmp3+Lgeptoindex|0];
			tmp6=tmp8[tmp1+Lgeptoindex4|0];
			tmp5.a0=nullArray;
			tmp5.a0o=0;
			tmp5.a1=nullArray;
			tmp5.a1o=0;
			tmp5.a2.a0=nullArray;
			tmp5.a2.a0o=0;
			tmp12=tmp6.a0;
			tmp13=tmp6.a0o|0;
			tmp5.a0=tmp12;
			tmp5.a0o=tmp13;
			tmp12=tmp6.a1;
			tmp13=tmp6.a1o|0;
			tmp5.a1=tmp12;
			tmp5.a1o=tmp13;
			tmp12=tmp6.a2.a0;
			tmp13=tmp6.a2.a0o|0;
			tmp5.a2.a0=tmp12;
			tmp5.a2.a0o=tmp13;
			tmp6.a2.a0=nullArray;
			tmp6.a2.a0o=0;
			tmp6.a1=nullArray;
			tmp6.a1o=0;
			tmp6.a0=nullArray;
			tmp6.a0o=0;
			tmp2[(tmp3+Lgeptoindexphi|0)+ -1|0].a3=tmp8[(tmp1+Lgeptoindexphi3|0)+ -1|0].a3;
			tmp2[(tmp3+Lgeptoindexphi|0)+ -1|0].i4=tmp8[(tmp1+Lgeptoindexphi3|0)+ -1|0].i4|0;
			if(tmp8!==tmp7||(tmp1+Lgeptoindex4|0)!==tmp0){
				Lgeptoindexphi=Lgeptoindex;
				Lgeptoindexphi3=Lgeptoindex4;
				continue;
			}
			break;
		}
	}
	Larg1.a1=tmp2;
	Larg1.a1o=tmp3+Lgeptoindex|0;
	tmp7=Larg0.a0;
	Lgeptoindexphi=Larg0.a0o|0;
	Larg0.a0=tmp2;
	Larg0.a0o=tmp3+Lgeptoindex|0;
	Larg1.a1=tmp7;
	Larg1.a1o=Lgeptoindexphi;
	tmp7=Larg0.a1;
	Lgeptoindexphi=Larg0.a1o|0;
	tmp8=Larg1.a2;
	Lgeptoindexphi3=Larg1.a2o|0;
	Larg0.a1=tmp8;
	Larg0.a1o=Lgeptoindexphi3;
	Larg1.a2=tmp7;
	Larg1.a2o=Lgeptoindexphi;
	tmp7=Larg0.a2.a0;
	Lgeptoindexphi=Larg0.a2.a0o|0;
	tmp8=Larg1.a3.a0;
	Lgeptoindexphi3=Larg1.a3.a0o|0;
	Larg0.a2.a0=tmp8;
	Larg0.a2.a0o=Lgeptoindexphi3;
	Larg1.a3.a0=tmp7;
	Larg1.a3.a0o=Lgeptoindexphi;
	tmp7=Larg1.a1;
	Lgeptoindexphi=Larg1.a1o|0;
	Larg1.a0=tmp7[Lgeptoindexphi];
}
function __ZN11CXUIConsole7newLineEv(Larg0){
	var tmp0=null,L$poptgepsqueezed39=null,L$ppre12_1=0,L$poptgepsqueezed44=null,L$ppre12_0=null,L$ppre_0=null,tmp6=0,L$ppre13_0=null,tmp8=null,L$ppre13_1=0,Lgeptoindexphi3=0,tmp11=null,L$ppre_1=0,Lgeptoindexphi=0;
	if(Larg0.a2===null){
		L$ppre12_1=Larg0.i6|0;
		L$poptgepsqueezed44=Larg0.a9;
		L$ppre12_0=L$poptgepsqueezed44.a1;
		tmp6=L$poptgepsqueezed44.a1o|0;
		L$ppre_0=L$poptgepsqueezed44.a0;
		L$ppre_1=L$poptgepsqueezed44.a0o|0;
		Lgeptoindexphi=((__imul(tmp6,17))-(__imul(L$ppre_1,17))|0)/17|0;
		if(Lgeptoindexphi>>>0<=L$ppre12_1>>>0){
			L$ppre13_1=L$ppre12_1+1|0;
			if(L$ppre13_1>>>0>Lgeptoindexphi>>>0){
				__ZNSt6vectorIN11CXUIConsole4LineESaIS1_EE8__appendEj(L$poptgepsqueezed44,L$ppre13_1-Lgeptoindexphi|0);
				L$ppre_0=L$poptgepsqueezed44.a0;
				L$ppre_1=L$poptgepsqueezed44.a0o|0;
			}else if(L$ppre13_1>>>0<Lgeptoindexphi>>>0){
				if(L$ppre12_0!==L$ppre_0||tmp6!==(L$ppre_1+L$ppre13_1|0)){
					Lgeptoindexphi=0;
					while(1){
						Lgeptoindexphi=Lgeptoindexphi-1|0;
						L$ppre13_0=L$ppre12_0[tmp6+Lgeptoindexphi|0];
						tmp8=L$ppre13_0.a0;
						Lgeptoindexphi3=L$ppre13_0.a0o|0;
						if(tmp8!==nullArray||Lgeptoindexphi3!==0){
							L$ppre13_0.a1=tmp8;
							L$ppre13_0.a1o=Lgeptoindexphi3;
						}
						if(L$ppre12_0!==L$ppre_0||(tmp6+Lgeptoindexphi|0)!==(L$ppre_1+L$ppre13_1|0))continue;
						break;
					}
				}
				L$poptgepsqueezed44.a1=L$ppre_0;
				L$poptgepsqueezed44.a1o=L$ppre_1+L$ppre13_1|0;
			}
		}
		console.log(__ZNK11CXUIConsole4Line9getStringEv(L$ppre_0[L$ppre_1+L$ppre12_1|0]));
	}
	Larg0.i5=0;
	L$ppre12_1=(Larg0.i6|0)+1|0;
	Larg0.i6=L$ppre12_1;
	if(L$ppre12_1>>>0>24){
		L$poptgepsqueezed44=Larg0.a9;
		L$ppre12_0=L$poptgepsqueezed44.a1;
		L$ppre12_1=L$poptgepsqueezed44.a1o|0;
		while(1){
			L$ppre_0=L$poptgepsqueezed44.a0;
			tmp6=L$poptgepsqueezed44.a0o|0;
			if(L$ppre_0===L$ppre12_0&&tmp6===L$ppre12_1)___assert_fail(_$pstr$p3$p212,0,_$pstr$p1$p210,0,61,___func__$p_ZN11CXUIConsole7newLineEv,0);
			;
			L$ppre13_0=Larg0.a2;
			if(L$ppre13_0!==null){
				tmp8=L$ppre_0[tmp6].a3;
				if(tmp8!==null){
					L$ppre13_0.removeChild(tmp8);
					L$ppre13_0=L$poptgepsqueezed44.a0;
					L$ppre13_1=L$poptgepsqueezed44.a0o|0;
					L$ppre12_0=L$poptgepsqueezed44.a1;
					L$ppre12_1=L$poptgepsqueezed44.a1o|0;
				}else{
					L$ppre13_0=L$ppre_0;
					L$ppre13_1=tmp6;
				}
			}else{
				L$ppre13_0=L$ppre_0;
				L$ppre13_1=tmp6;
			}
			if(L$ppre13_0===L$ppre12_0&&((L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+1|0)===L$ppre12_1){
				Lgeptoindexphi3=0;
			}else{
				L$ppre_1=1;
				Lgeptoindexphi3=0;
				while(1){
					tmp8=L$ppre13_0[(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+Lgeptoindexphi3|0];
					tmp0=L$ppre13_0[(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+L$ppre_1|0];
					tmp11=tmp8.a0;
					Lgeptoindexphi=tmp8.a0o|0;
					L$poptgepsqueezed39=tmp8.a2;
					if(tmp11!==nullArray||Lgeptoindexphi!==0){
						L$poptgepsqueezed39.a0=nullArray;
						L$poptgepsqueezed39.a0o=0;
					}
					tmp11=tmp0.a0;
					Lgeptoindexphi=tmp0.a0o|0;
					tmp8.a0=tmp11;
					tmp8.a0o=Lgeptoindexphi;
					tmp11=tmp0.a1;
					Lgeptoindexphi=tmp0.a1o|0;
					tmp8.a1=tmp11;
					tmp8.a1o=Lgeptoindexphi;
					tmp8=tmp0.a2.a0;
					Lgeptoindexphi=tmp0.a2.a0o|0;
					L$poptgepsqueezed39.a0=tmp8;
					L$poptgepsqueezed39.a0o=Lgeptoindexphi;
					tmp0.a2.a0=nullArray;
					tmp0.a2.a0o=0;
					tmp0.a1=nullArray;
					tmp0.a1o=0;
					tmp0.a0=nullArray;
					tmp0.a0o=0;
					L$ppre13_0[(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+Lgeptoindexphi3|0].a3=L$ppre13_0[(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+L$ppre_1|0].a3;
					L$ppre13_0[(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+Lgeptoindexphi3|0].i4=L$ppre13_0[(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+L$ppre_1|0].i4|0;
					L$ppre_1=L$ppre_1+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					if(L$ppre13_0!==L$ppre12_0||((L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+L$ppre_1|0)!==L$ppre12_1)continue;
					break;
				}
				L$ppre12_0=L$poptgepsqueezed44.a1;
				L$ppre12_1=L$poptgepsqueezed44.a1o|0;
			}
			if(L$ppre12_0!==L$ppre13_0||L$ppre12_1!==((L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+(((__imul((L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+Lgeptoindexphi3|0,17))-(__imul(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0,17))|0)/17|0)|0))while(1){
				tmp11=L$ppre12_0[L$ppre12_1+ -1|0];
				tmp8=tmp11.a0;
				L$ppre_1=tmp11.a0o|0;
				if(tmp8!==nullArray||L$ppre_1!==0){
					tmp11.a1=tmp8;
					tmp11.a1o=L$ppre_1;
				}
				if(L$ppre12_0!==L$ppre13_0||(L$ppre12_1+ -1|0)!==((L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+(((__imul((L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+Lgeptoindexphi3|0,17))-(__imul(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0,17))|0)/17|0)|0)){
					L$ppre12_1=L$ppre12_1+ -1|0;
					L$ppre12_0=L$ppre12_0;
					continue;
				}
				break;
			}
			L$poptgepsqueezed44.a1=L$ppre13_0;
			L$poptgepsqueezed44.a1o=(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+(((__imul((L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+Lgeptoindexphi3|0,17))-(__imul(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0,17))|0)/17|0)|0;
			L$ppre12_1=(Larg0.i6|0)-1|0;
			Larg0.i6=L$ppre12_1;
			if(L$ppre12_1>>>0>24){
				L$ppre12_1=(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+(((__imul((L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0)+Lgeptoindexphi3|0,17))-(__imul(L$ppre13_1+(((__imul(tmp6,17))-(__imul(L$ppre13_1,17))|0)/17|0)|0,17))|0)/17|0)|0;
				L$ppre12_0=L$ppre13_0;
				continue;
			}
			break;
		}
	}
}
function __ZN11CXUIConsole4Line7addSpanEPN6client6StringEh(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp1="span";
	tmp0=document.createElement(tmp1);
	a:if((Larg2&254)===2){
		tmp2=tmp0.style;
		if((Larg2&255)===2){
			tmp1="yellow";
			tmp2.color=tmp1;
		}else{
			tmp1="green";
			tmp2.color=tmp1;
		}
	}else if((Larg2&255)===4){
		tmp2=tmp0.style;
		tmp1="cyan";
		tmp2.color=tmp1;
	}else{
		if((Larg2&255)!==5)break a;
		tmp2=tmp0.style;
		tmp1="gray";
		tmp2.color=tmp1;
	}
	tmp0.textContent=Larg1;
	Larg0.a3.appendChild(tmp0);
}
function __ZN11CXUIConsole4Line6renderEPN6client7ElementES3_(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=null,tmp2=0,tmp3=null,tmp4=0,tmp5=null,tmp6=0;
	if(Larg0.a3===null){
		tmp1="p";
		Larg0.a3=document.createElement(tmp1);
		tmp1=Larg0.a3.style;
		tmp3="0";
		tmp1.margin=tmp3;
		tmp1=Larg0.a3.style;
		tmp3="1em";
		tmp1.height=tmp3;
		tmp1=Larg0.a3;
		if(Larg2!==null)Larg1.insertBefore(tmp1,Larg2.nextSibling);
		else Larg1.appendChild(tmp1);
	}
	if((Larg0.i4&255)!==0){
		Larg0.i4=0;
		tmp1=Larg0.a3.firstChild;
		if(tmp1!==null)while(1){
			if(tmp1!==null){
				Larg0.a3.removeChild(tmp1);
				tmp1=Larg0.a3.firstChild;
				if(tmp1!==null)continue;
			}
			break;
		}
		tmp1=Larg0.a0;
		tmp2=Larg0.a0o|0;
		tmp3=Larg0.a1;
		tmp4=Larg0.a1o|0;
		if(tmp1===tmp3&&tmp2===tmp4)return Larg0.a3;
		tmp1=String.fromCharCode((tmp1[tmp2]&65535)>>>8);
		tmp5=Larg0.a0;
		tmp2=Larg0.a0o|0;
		tmp4=tmp5[tmp2]|0;
		tmp3=Larg0.a1;
		tmp6=Larg0.a1o|0;
		if((__imul(tmp6,2))-(__imul(tmp2,2))>>>0>2){
			tmp6=1;
			while(1){
				tmp3=String.fromCharCode((tmp5[tmp2+tmp6|0]&65535)>>>8);
				if((tmp4&255)===(tmp5[tmp2+tmp6|0]&255))tmp1=tmp1.concat(tmp3);
				else{
					__ZN11CXUIConsole4Line7addSpanEPN6client6StringEh(Larg0,tmp1,tmp4);
					tmp4=tmp5[tmp2+tmp6|0]|0;
					tmp1=tmp3;
				}
				tmp3=Larg0.a1;
				tmp0=Larg0.a1o|0;
				tmp5=Larg0.a0;
				tmp2=Larg0.a0o|0;
				tmp6=tmp6+1|0;
				if(tmp6>>>0<(__imul(tmp0,2))-(__imul(tmp2,2))>>1>>>0)continue;
				break;
			}
		}
		__ZN11CXUIConsole4Line7addSpanEPN6client6StringEh(Larg0,tmp1,tmp4);
		return Larg0.a3;
	}
	return Larg0.a3;
}
function __ZN11CXUIConsole12processPlainEh(Larg0,Larg1){
	var L$poptgepsqueezed17=null,tmp1=null,tmp2=0,tmp3=0,tmp4=null,tmp5=null,tmp6=0,tmp7=0,L$ppre_0=null,L$ppre_1=0,Lgeptoindexphi=0;
	if((Larg1+249&255)<2){
		if((Larg1&255)!==7){
			tmp7=Larg0.i5|0;
			if((tmp7|0)===0)___assert_fail(_$pstr$p12$p221,0,_$pstr$p1$p210,0,145,___func__$p_ZN11CXUIConsole12processPlainEh,0);
			;
			Larg0.i5=tmp7-1|0;
		}
	}else if(((Larg1^1)+245&255)<2){
		if((Larg1&255)===10)__ZN11CXUIConsole7newLineEv(Larg0);
		else Larg0.i5=0;
	}else if((Larg1&255)===27)Larg0.i0=1;
	else{
		tmp7=Larg0.i6|0;
		L$poptgepsqueezed17=Larg0.a9;
		tmp1=L$poptgepsqueezed17.a1;
		tmp2=L$poptgepsqueezed17.a1o|0;
		L$ppre_0=L$poptgepsqueezed17.a0;
		L$ppre_1=L$poptgepsqueezed17.a0o|0;
		Lgeptoindexphi=((__imul(tmp2,17))-(__imul(L$ppre_1,17))|0)/17|0;
		if(Lgeptoindexphi>>>0<=tmp7>>>0){
			tmp3=tmp7+1|0;
			if(tmp3>>>0>Lgeptoindexphi>>>0){
				__ZNSt6vectorIN11CXUIConsole4LineESaIS1_EE8__appendEj(L$poptgepsqueezed17,tmp3-Lgeptoindexphi|0);
				L$ppre_0=L$poptgepsqueezed17.a0;
				L$ppre_1=L$poptgepsqueezed17.a0o|0;
			}else if(tmp3>>>0<Lgeptoindexphi>>>0){
				if(tmp1!==L$ppre_0||tmp2!==(L$ppre_1+tmp3|0)){
					Lgeptoindexphi=0;
					while(1){
						Lgeptoindexphi=Lgeptoindexphi-1|0;
						tmp4=tmp1[tmp2+Lgeptoindexphi|0];
						tmp5=tmp4.a0;
						tmp6=tmp4.a0o|0;
						if(tmp5!==nullArray||tmp6!==0){
							tmp4.a1=tmp5;
							tmp4.a1o=tmp6;
						}
						if(tmp1!==L$ppre_0||(tmp2+Lgeptoindexphi|0)!==(L$ppre_1+tmp3|0))continue;
						break;
					}
				}
				L$poptgepsqueezed17.a1=L$ppre_0;
				L$poptgepsqueezed17.a1o=L$ppre_1+tmp3|0;
			}
		}
		Larg0.i8=Larg1;
		__ZN11CXUIConsole4Line7writeAtEjhh(L$ppre_0[L$ppre_1+tmp7|0],Larg0.i5|0,Larg1,Larg0.i7|0);
		tmp7=(Larg0.i5|0)+1|0;
		Larg0.i5=tmp7;
		if(tmp7>>>0>79)__ZN11CXUIConsole7newLineEv(Larg0);
	}
}
function __ZN11CXUIConsole8applySGREj(Larg0){
	var tmp0=0;
	tmp0=Larg0.a10[0]|0;
	if((tmp0& -2|0)===32){
		if((tmp0|0)===32)Larg0.i7=3;
		else Larg0.i7=2;
	}else if((tmp0^1)-37>>>0<2){
		if((tmp0|0)===36)Larg0.i7=4;
		else Larg0.i7=1;
	}else if((tmp0|0)===90)Larg0.i7=5;
	else ___printf(_$pstr$p13$p222,0,tmp0);
}
function __ZN11CXUIConsole13processBufferEPN6client10Uint8ArrayEjjj(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0;
	tmp0=Larg0.a3;
	if(tmp0!==null)tmp0(Larg1.subarray(0,(+(Larg2>>>0))),Larg3);
	else if((Larg2|0)!==0){
		tmp1=0;
		while(1){
			__ZN11CXUIConsole11processCharEhj(Larg0,Larg1[0+tmp1|0]|0,Larg3);
			tmp1=tmp1+1|0;
			if((tmp1|0)!==(Larg2|0))continue;
			break;
		}
	}
}
function __ZN11CXUIConsole11processCharEhj(Larg0,Larg1,Larg2){
	var tmp0=0,L$poptgep$poptgep22$poptgepsqueezed=null,tmp2=0,tmp3=null,tmp4=null,tmp5=0,Lgeptoindexphi=0;
	a:if(Larg0.a3!==null){
		L$poptgep$poptgep22$poptgepsqueezed=new Uint8Array(1);
		L$poptgep$poptgep22$poptgepsqueezed[0]=Larg1;
		Larg0.a3(L$poptgep$poptgep22$poptgepsqueezed,Larg2);
	}else{
		tmp2=Larg0.i0|0;
		if(tmp2>>>0<2){
			if((tmp2|0)!==0){
				if((Larg1&255)===91)Larg0.i0=2;
				else{
					___printf(_$pstr$p14$p225,0,Larg1&255);
					Larg0.i0=0;
				}
			}else __ZN11CXUIConsole12processPlainEh(Larg0,Larg1);
		}else{
			if((tmp2|0)!==2)___assert_fail(_$pstr$p61,0,_$pstr$p1$p210,0,329,___func__$p_ZN11CXUIConsole11processCharEhj,0);
			;
			tmp2=Larg1&255;
			if((Larg1+208&255)<10)Larg0.a10[0]=(tmp2-48|0)+(__imul(Larg0.a10[0]|0,10)|0)|0;
			else{
				switch(Larg1&255){
					case 71:
					L$poptgep$poptgep22$poptgepsqueezed=Larg0.a11;
					tmp3=L$poptgep$poptgep22$poptgepsqueezed.a0;
					tmp2=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
					tmp4=L$poptgep$poptgep22$poptgepsqueezed.a1;
					tmp5=L$poptgep$poptgep22$poptgepsqueezed.a1o|0;
					if(tmp3===tmp4&&tmp2===tmp5){
						tmp2=Larg0.a10[0]|0;
						if((tmp2|0)!==0){
							Larg0.i5=tmp2-1|0;
							Larg0.a10[0]=0;
							Larg0.i0=0;
							break a;
						}
						___assert_fail(_$pstr$p16$p227,0,_$pstr$p1$p210,0,243,___func__$p_ZN11CXUIConsole11processCharEhj,0);
						;
					}
					___assert_fail(_$pstr$p15$p226,0,_$pstr$p1$p210,0,241,___func__$p_ZN11CXUIConsole11processCharEhj,0);
					;
					case 74:
					L$poptgep$poptgep22$poptgepsqueezed=Larg0.a11;
					tmp3=L$poptgep$poptgep22$poptgepsqueezed.a0;
					tmp2=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
					tmp4=L$poptgep$poptgep22$poptgepsqueezed.a1;
					tmp5=L$poptgep$poptgep22$poptgepsqueezed.a1o|0;
					if(tmp3===tmp4&&tmp2===tmp5){
						if((Larg0.a10[0]|0)!==0)___assert_fail(_$pstr$p17$p228,0,_$pstr$p1$p210,0,251,___func__$p_ZN11CXUIConsole11processCharEhj,0);
						;
						L$poptgep$poptgep22$poptgepsqueezed=Larg0.a9;
						tmp3=L$poptgep$poptgep22$poptgepsqueezed.a1;
						tmp2=L$poptgep$poptgep22$poptgepsqueezed.a1o|0;
						tmp4=L$poptgep$poptgep22$poptgepsqueezed.a0;
						tmp5=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
						Lgeptoindexphi=Larg0.i6|0;
						if(((__imul(tmp2,17))-(__imul(tmp5,17))|0)/17>>>0>Lgeptoindexphi+1>>>0)___assert_fail(_$pstr$p18$p229,0,_$pstr$p1$p210,0,253,___func__$p_ZN11CXUIConsole11processCharEhj,0);
						;
						L$poptgep$poptgep22$poptgepsqueezed=__ZN11CXUIConsole7getLineEj(Larg0,Lgeptoindexphi);
						__ZN11CXUIConsole4Line8truncateEj(L$poptgep$poptgep22$poptgepsqueezed,Larg0.i5|0);
						Larg0.a10[0]=0;
						Larg0.i0=0;
						break a;
					}
					___assert_fail(_$pstr$p15$p226,0,_$pstr$p1$p210,0,250,___func__$p_ZN11CXUIConsole11processCharEhj,0);
					;
					case 109:
					L$poptgep$poptgep22$poptgepsqueezed=Larg0.a11;
					tmp3=L$poptgep$poptgep22$poptgepsqueezed.a0;
					tmp2=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
					tmp4=L$poptgep$poptgep22$poptgepsqueezed.a1;
					tmp5=L$poptgep$poptgep22$poptgepsqueezed.a1o|0;
					if(tmp3!==tmp4||tmp2!==tmp5){
						Lgeptoindexphi=0;
						while(1){
							tmp0=Larg0.a10[0]|0;
							if((tmp0& -2|0)===32){
								if((tmp0|0)===32)Larg0.i7=3;
								else Larg0.i7=2;
							}else if((tmp0^1)-37>>>0<2){
								if((tmp0|0)===36)Larg0.i7=4;
								else Larg0.i7=1;
							}else if((tmp0|0)===90)Larg0.i7=5;
							else ___printf(_$pstr$p13$p222,0,tmp0);
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							if(tmp3!==tmp4||(tmp2+Lgeptoindexphi|0)!==tmp5)continue;
							break;
						}
					}
					__ZN11CXUIConsole8applySGREj(Larg0);
					Larg0.a10[0]=0;
					tmp3=L$poptgep$poptgep22$poptgepsqueezed.a0;
					tmp2=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
					L$poptgep$poptgep22$poptgepsqueezed.a1=tmp3;
					L$poptgep$poptgep22$poptgepsqueezed.a1o=tmp2;
					Larg0.i0=0;
					break a;
					case 72:
					L$poptgep$poptgep22$poptgepsqueezed=Larg0.a11;
					tmp3=L$poptgep$poptgep22$poptgepsqueezed.a1;
					tmp2=L$poptgep$poptgep22$poptgepsqueezed.a1o|0;
					tmp4=L$poptgep$poptgep22$poptgepsqueezed.a0;
					Lgeptoindexphi=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
					if(((__imul(tmp2,4))-(__imul(Lgeptoindexphi,4))|0)===4){
						tmp2=tmp4[Lgeptoindexphi]|0;
					}else{
						if(tmp4!==tmp3||Lgeptoindexphi!==tmp2)___assert_fail(_$pstr$p15$p226,0,_$pstr$p1$p210,0,274,___func__$p_ZN11CXUIConsole11processCharEhj,0);
						;
						tmp2=1;
					}
					tmp5=Larg0.a10[0]|0;
					Larg0.i5=(tmp5|0)!==0?tmp5-1|0:0|0;
					Larg0.i6=(tmp2|0)!==0?tmp2-1|0:0|0;
					Larg0.a10[0]=0;
					L$poptgep$poptgep22$poptgepsqueezed.a1=tmp4;
					L$poptgep$poptgep22$poptgepsqueezed.a1o=Lgeptoindexphi;
					Larg0.i0=0;
					break a;
					case 98:
					L$poptgep$poptgep22$poptgepsqueezed=Larg0.a11;
					tmp3=L$poptgep$poptgep22$poptgepsqueezed.a0;
					tmp2=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
					tmp4=L$poptgep$poptgep22$poptgepsqueezed.a1;
					tmp5=L$poptgep$poptgep22$poptgepsqueezed.a1o|0;
					if(tmp3!==tmp4||tmp2!==tmp5)___assert_fail(_$pstr$p15$p226,0,_$pstr$p1$p210,0,289,___func__$p_ZN11CXUIConsole11processCharEhj,0);
					;
					tmp2=Larg0.a10[0]|0;
					Larg0.a10[0]=0;
					Larg0.i0=0;
					if((tmp2|0)===0)break a;
					tmp5=0;
					while(1){
						__ZN11CXUIConsole11processCharEhj(Larg0,Larg0.i8|0,Larg2);
						tmp5=tmp5+1|0;
						if((tmp5|0)===(tmp2|0))break a;
						continue;
					}
					case 100:
					L$poptgep$poptgep22$poptgepsqueezed=Larg0.a11;
					tmp3=L$poptgep$poptgep22$poptgepsqueezed.a0;
					tmp2=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
					tmp4=L$poptgep$poptgep22$poptgepsqueezed.a1;
					tmp5=L$poptgep$poptgep22$poptgepsqueezed.a1o|0;
					if(tmp3===tmp4&&tmp2===tmp5){
						tmp2=Larg0.a10[0]|0;
						Larg0.i6=(tmp2|0)!==0?tmp2-1|0:0|0;
						Larg0.a10[0]=0;
						Larg0.i0=0;
						break a;
					}
					___assert_fail(_$pstr$p15$p226,0,_$pstr$p1$p210,0,301,___func__$p_ZN11CXUIConsole11processCharEhj,0);
					;
					case 66:
					L$poptgep$poptgep22$poptgepsqueezed=Larg0.a11;
					tmp3=L$poptgep$poptgep22$poptgepsqueezed.a0;
					tmp2=L$poptgep$poptgep22$poptgepsqueezed.a0o|0;
					tmp4=L$poptgep$poptgep22$poptgepsqueezed.a1;
					tmp5=L$poptgep$poptgep22$poptgepsqueezed.a1o|0;
					if(tmp3===tmp4&&tmp2===tmp5){
						tmp2=Larg0.a10[0]|0;
						Larg0.i6=(Larg0.i6|0)+((tmp2|0)!==0?tmp2|0:1|0)|0;
						Larg0.a10[0]=0;
						Larg0.i0=0;
						break a;
					}
					___assert_fail(_$pstr$p15$p226,0,_$pstr$p1$p210,0,310,___func__$p_ZN11CXUIConsole11processCharEhj,0);
					;
					case 59:
					__ZNSt6vectorIjSaIjEE9push_backB7v160000ERKj(Larg0.a11,Larg0.a10,0);
					Larg0.a10[0]=0;
					break a;
					default:
					___printf(_$pstr$p19$p230,0,tmp2);
					Larg0.i0=0;
				}
			}
		}
	}
}
function __ZNSt6vectorIjSaIjEE9push_backB7v160000ERKj(Larg0,Larg1,Marg1){
	var tmp0=null,tmp1=0,L$poptgepsqueezed7=null,tmp3=0,L$poptgepsqueezed11=null,tmp5=null,tmp6=0;
	L$poptgepsqueezed7=Larg0.a1;
	tmp3=Larg0.a1o|0;
	L$poptgepsqueezed11=Larg0.a2;
	tmp5=L$poptgepsqueezed11.a0;
	tmp6=L$poptgepsqueezed11.a0o|0;
	if(L$poptgepsqueezed7===tmp5&&tmp3===tmp6){
		tmp5={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:tmp5={a0:null}}};
		tmp0=Larg0.a0;
		tmp6=Larg0.a0o|0;
		tmp3=(__imul(tmp3,4))-(__imul(tmp6,4))|0;
		tmp1=tmp3>>2;
		tmp6=tmp1+1|0;
		if(tmp6>>>0>1073741823)_abort();
		;
		if(tmp3>>>0<2147483644){
			tmp3>>>=1;
			tmp3=tmp3>>>0>tmp6>>>0?tmp3|0:tmp6|0;
		}else{
			tmp3=1073741823;
		}
		L$poptgepsqueezed7=tmp5.a3;
		L$poptgepsqueezed7.a1.a0=L$poptgepsqueezed11;
		if((tmp3|0)!==0)L$poptgepsqueezed11=new Int32Array((tmp3<<2)/4|0);
		else{
			L$poptgepsqueezed11=nullArray;
		}
		tmp5.a0=L$poptgepsqueezed11[0];
		tmp5.a1=L$poptgepsqueezed11;
		tmp5.a1o=0+tmp1|0;
		L$poptgepsqueezed7.a0=L$poptgepsqueezed11;
		L$poptgepsqueezed7.a0o=0+tmp3|0;
		L$poptgepsqueezed11[tmp1]=Larg1[Marg1]|0;
		tmp5.a2=L$poptgepsqueezed11;
		tmp5.a2o=(0+tmp1|0)+1|0;
		__ZNSt6vectorIjSaIjEE26__swap_out_circular_bufferERSt14__split_bufferIjRS0_E(Larg0,tmp5);
	}else{
		L$poptgepsqueezed7[tmp3]=Larg1[Marg1]|0;
		Larg0.a1=L$poptgepsqueezed7;
		Larg0.a1o=tmp3+1|0;
	}
}
function __ZN11CXUIConsole12queueKeyCodeEjj(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	if(Larg1>>>0<65536){
		tmp0={type:56,value:Larg1,arg1:Larg2};
		tmp1=Larg0.a1;
		tmp2=HEAP32;
		tmp3=tmp1.i7|0;
		tmp2[0+tmp3|0]=-2;
		tmp1.a6.postMessage(tmp0);
		return;
	}
	___assert_fail(_$pstr$p21$p234,0,_$pstr$p1$p210,0,335,___func__$p_ZN11CXUIConsole12queueKeyCodeEjj,0);
	;
}
function __ZN11CXUIConsole10setElementEPN6client11HTMLElementE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	if(Larg0.a3!==null)___assert_fail(_$pstr$p22$p237,0,_$pstr$p1$p210,0,344,___func__$p_ZN11CXUIConsole10setElementEPN6client11HTMLElementE,0);
	;
	Larg0.a2=Larg1;
	tmp0="tabindex";
	tmp1="0";
	Larg1.setAttribute(tmp0,tmp1);
	tmp0=Larg1.style;
	tmp1="0";
	tmp0.outline=tmp1;
	tmp1="rgb(10,10,10)";
	tmp0.background=tmp1;
	tmp1="rgb(250,250,250)";
	tmp0.color=tmp1;
	Larg1.focus();
	tmp0="keypress";
	tmp1=[{a0:null}];
	tmp1[0].a0=Larg0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CXUIConsole10setElementEPN6client11HTMLElementEE3$_0JPNS4_13KeyboardEventEEEEvPT_DpT0_,tmp1[0]);
	Larg1.addEventListener(tmp0,tmp1);
	tmp0="keydown";
	tmp1=[{a0:null}];
	tmp1[0].a0=Larg0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN11CXUIConsole10setElementEPN6client11HTMLElementEE3$_1JPNS4_13KeyboardEventEEEEvPT_DpT0_,tmp1[0]);
	Larg1.addEventListener(tmp0,tmp1);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CXUIConsole10setElementEPN6client11HTMLElementEE3$_0JPNS4_13KeyboardEventEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp2=Larg0.a0;
	tmp3=~~ +Larg1.keyCode;
	if(tmp3>>>0<65536){
		tmp0={type:56,value:tmp3,arg1:0};
		tmp2=tmp2.a1;
		tmp1=HEAP32;
		tmp3=tmp2.i7|0;
		tmp1[0+tmp3|0]=-2;
		tmp2.a6.postMessage(tmp0);
		Larg1.preventDefault();
		return;
	}
	___assert_fail(_$pstr$p21$p234,0,_$pstr$p1$p210,0,335,___func__$p_ZN11CXUIConsole12queueKeyCodeEjj,0);
	;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN11CXUIConsole10setElementEPN6client11HTMLElementEE3$_1JPNS4_13KeyboardEventEEEEvPT_DpT0_(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null;
	tmp3=Larg0.a0;
	if((~~ +Larg1.keyCode|0)===8){
		tmp0={type:56,value:8,arg1:0};
		tmp3=tmp3.a1;
		tmp1=HEAP32;
		tmp2=tmp3.i7|0;
		tmp1[0+tmp2|0]=-2;
		tmp3.a6.postMessage(tmp0);
		Larg1.preventDefault();
	}
}
function __ZN11CXUIConsole5flushEv(Larg0){
	var L$poptgep$poptgep1$poptgepsqueezed=null,tmp1=null,tmp2=0,tmp3=null,tmp4=0,tmp5=null,tmp6=0;
	if(Larg0.a2!==null){
		L$poptgep$poptgep1$poptgepsqueezed=Larg0.a9;
		tmp3=L$poptgep$poptgep1$poptgepsqueezed.a1;
		tmp4=L$poptgep$poptgep1$poptgepsqueezed.a1o|0;
		tmp5=L$poptgep$poptgep1$poptgepsqueezed.a0;
		tmp6=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
		if(((__imul(tmp4,17))|0)!==((__imul(tmp6,17))|0)){
			tmp3=null;
			tmp4=0;
			while(1){
				tmp3=__ZN11CXUIConsole4Line6renderEPN6client7ElementES3_(tmp5[tmp6+tmp4|0],Larg0.a2,tmp3);
				tmp1=L$poptgep$poptgep1$poptgepsqueezed.a1;
				tmp2=L$poptgep$poptgep1$poptgepsqueezed.a1o|0;
				tmp5=L$poptgep$poptgep1$poptgepsqueezed.a0;
				tmp6=L$poptgep$poptgep1$poptgepsqueezed.a0o|0;
				tmp4=tmp4+1|0;
				if(tmp4>>>0<((__imul(tmp2,17))-(__imul(tmp6,17))|0)/17>>>0)continue;
				break;
			}
		}
	}
}
function __Z11padHexValuePcjj(Larg0,Marg0,Larg1){
	var tmp0=0;
	tmp0=Larg1&15;
	Larg0[Marg0+5|0]=(tmp0>>>0<10?48|0:87|0)+tmp0|0;
	tmp0=Larg1>>>4&15;
	Larg0[Marg0+4|0]=(tmp0>>>0<10?48|0:87|0)+tmp0|0;
	tmp0=Larg1>>>8&15;
	Larg0[Marg0+3|0]=(tmp0>>>0<10?48|0:87|0)+tmp0|0;
	tmp0=Larg1>>>12&15;
	Larg0[Marg0+2|0]=(tmp0>>>0<10?48|0:87|0)+tmp0|0;
	tmp0=Larg1>>>16&15;
	Larg0[Marg0+1|0]=(tmp0>>>0<10?48|0:87|0)+tmp0|0;
	tmp0=Larg1>>>20&15;
	Larg0[Marg0]=(tmp0>>>0<10?48|0:87|0)+tmp0|0;
}
function __ZN9VGAOutput10initializeEPhR9VGAShared(Larg0,Marg0,Larg1){
	var tmp0=null;
	if(__ZN9VGAOutput8instanceE!==null)___assert_fail(_$pstr$p258,0,_$pstr$p1$p259,0,12,___func__$p_ZN9VGAOutput10initializeEPhR9VGAShared,0);
	;
	tmp0=new constructor_struct$p_Z9VGAOutput();
	__ZN9VGAOutputC2EPhR9VGAShared(tmp0,Larg0,Marg0,Larg1);
	__ZN9VGAOutput8instanceE=tmp0;
}
function __ZN9VGAOutputC2EPhR9VGAShared(Larg0,Larg1,Marg1,Larg2){
	var tmp0=0,tmp1=null,tmp2=null;
	Larg0.a0=Larg1;
	Larg0.a0o=Marg1;
	Larg0.a1=null;
	Larg0.a2=nullArray;
	Larg0.a2o=0;
	Larg0.a3=null;
	Larg0.a4=null;
	Larg0.i5=0;
	Larg0.i6=0;
	Larg0.i7=0;
	Larg0.a8=Larg2;
	tmp1="canvas";
	Larg0.a4=document.createElement(tmp1);
	Larg0.a4.width=800;
	Larg0.a4.height=600;
	tmp1=document.body;
	tmp1.appendChild(Larg0.a4);
	tmp1=Larg0.a4;
	tmp2="2d";
	Larg0.a3=tmp1.getContext(tmp2);
	Larg0.i6=~~ +Larg0.a4.width;
	tmp0=~~ +Larg0.a4.height;
	Larg0.i7=tmp0;
	tmp1=Larg0.a3.getImageData(0,0,(+(Larg0.i6|0)),(+(tmp0|0)));
	Larg0.a1=tmp1;
	tmp1=tmp1.data.buffer;
	tmp2=new Int32Array(tmp1);
	Larg0.a2=tmp2;
	Larg0.a2o=0;
	tmp1=__ZN9VGAOutput13handleRafTextEv;
	Larg0.i5=~~ +requestAnimationFrame(tmp1);
}
function __ZN9VGAOutput13handleRafTextEv(){
	__ZN9VGAOutput17handleRafImplTextEv(__ZN9VGAOutput8instanceE);
}
function __ZN9VGAOutput17handleRafImplTextEv(Larg0){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=0,L$poptgep9$poptgep15$poptgepsqueezed=null,L$poptgep9$poptgep12$poptgepsqueezed=null,tmp7=0,tmp8=0,tmp9=0,tmp10=0,tmp11=0,tmp12=null,tmp13=null,tmp14=0,tmp15=null,L$punr=0,tmp17=0,Lniter=0,Llcmp$pmod$pnot=0,tmp20=0,tmp21=0,tmp22=0,tmp23=0,Lunroll_iter=0,tmp25=0,tmp26=0,tmp27=0,tmp28=0,tmp29=0;
	tmp13=Larg0.a8;
	tmp14=tmp13.i4|0;
	tmp15=Larg0.a0;
	L$punr=Larg0.a0o|0;
	tmp17=tmp13.i3|0;
	Lniter=Larg0.i6|0;
	tmp0=tmp14>>>16;
	tmp1=tmp0&255;
	tmp2=__imul(Lniter,tmp1)|0;
	tmp3=tmp14>>>24;
	Llcmp$pmod$pnot=tmp1-(__imul(tmp2,tmp3)|0)|0;
	tmp4=tmp2-tmp1|0;
	tmp20=__imul(Lniter,(Larg0.i7|0)/(tmp3|0)|0)|0;
	if((tmp20|0)>0){
		L$poptgep9$poptgep15$poptgepsqueezed=tmp13.a2;
		L$poptgep9$poptgep12$poptgepsqueezed=tmp13.a1;
		tmp21=(tmp14&65536|0)!==0?1:0;
		tmp22=tmp14>>>0<16777216?1:0;
		tmp7=(tmp0&255)!==0?1:0;
		tmp8=(tmp0&255)===1?1:0;
		tmp9=tmp0&254;
		tmp14=0;
		Lunroll_iter=0;
		tmp23=0;
		while(1){
			tmp10=tmp15[(L$punr+(tmp17>>>16)|0)+tmp23|0]|0;
			tmp25=tmp15[((L$punr+(tmp17>>>16)|0)+65536|0)+tmp23|0]&255;
			tmp26=L$poptgep9$poptgep12$poptgepsqueezed[tmp25&15]|0;
			tmp11=L$poptgep9$poptgep15$poptgepsqueezed[tmp26]|0;
			tmp25=L$poptgep9$poptgep12$poptgepsqueezed[tmp25>>>4]|0;
			tmp25=L$poptgep9$poptgep15$poptgepsqueezed[tmp25]|0;
			if(!(tmp22)){
				tmp26=0;
				while(1){
					if(tmp7){
						tmp27=tmp15[((L$punr+131072|0)+((tmp10&255)<<5)|0)+tmp26|0]&255;
						tmp12=Larg0.a2;
						tmp28=Larg0.a2o|0;
						if(tmp8){
							Lniter=128;
						}else{
							tmp29=0;
							Lniter=128;
							while(1){
								tmp12[tmp28+Lunroll_iter|0]=(Lniter&tmp27|0)!==0?tmp11|0:tmp25|0;
								tmp12[tmp28+(Lunroll_iter+1|0)|0]=(Lniter>>>1&tmp27|0)!==0?tmp11|0:tmp25|0;
								tmp29=tmp29+2|0;
								Lniter>>>=2;
								Lunroll_iter=Lunroll_iter+2|0;
								if((tmp29|0)!==(tmp9|0))continue;
								break;
							}
							tmp29=Lunroll_iter;
						}
						if(tmp21){
							tmp12[tmp28+Lunroll_iter|0]=(Lniter&tmp27|0)!==0?tmp11|0:tmp25|0;
							Lunroll_iter=Lunroll_iter+1|0;
						}else{
							Lunroll_iter=tmp29;
						}
					}
					Lunroll_iter=Lunroll_iter+tmp4|0;
					tmp26=tmp26+1|0;
					if((tmp26|0)!==(tmp3|0))continue;
					break;
				}
				Lniter=Larg0.i6|0;
			}
			tmp14=tmp14+1|0;
			if((tmp14|0)===(Lniter|0)){
				Lunroll_iter=Lunroll_iter-tmp4|0;
				tmp14=0;
			}else{
				Lunroll_iter=Llcmp$pmod$pnot+Lunroll_iter|0;
			}
			tmp23=tmp23+1|0;
			if((tmp23|0)!==(tmp20|0))continue;
			break;
		}
	}
	tmp14=tmp13.i0|0;
	if((tmp14&65280|0)!==0){
		if((tmp14&16|0)!==0){
			tmp21=tmp13.i3&65535;
			L$punr=tmp15[((L$punr+(tmp17>>>16)|0)+65536|0)+tmp21|0]|0;
			L$punr=tmp13.a1[L$punr&15]|0;
			tmp17=tmp13.a2[L$punr]|0;
			tmp25=tmp14>>>24;
			L$punr=tmp14>>>16;
			if((tmp25&255)<(L$punr&255)){
				Lniter=tmp14;
			}else{
				L$punr&=255;
				tmp25=(tmp25+1|0)-L$punr|0;
				tmp26=(tmp0&255)!==0?1:0;
				tmp27=(tmp0&255)<4?1:0;
				tmp28=tmp0&3;
				tmp29=(tmp28|0)!==0?1:0;
				tmp20=(tmp0&252)-4|0;
				Lunroll_iter=(tmp20>>>2)+1|0;
				Llcmp$pmod$pnot=(Lunroll_iter&1|0)!==0?1:0;
				Lunroll_iter&= -2;
				tmp20=(tmp20|0)!==0?1:0;
				L$punr=(__imul((__imul(__imul((tmp21|0)/(Lniter|0)|0,tmp3-1|0)|0,Lniter)|0)+tmp21|0,tmp1)|0)+(__imul(L$punr,tmp2)|0)|0;
				tmp21=0;
				while(1){
					if(tmp26){
						tmp15=Larg0.a2;
						tmp22=Larg0.a2o|0;
						if(!(tmp27)){
							if(tmp20){
								Lniter=0;
								while(1){
									tmp15[tmp22+L$punr|0]=tmp17;
									tmp15[tmp22+(L$punr+1|0)|0]=tmp17;
									tmp15[tmp22+(L$punr+2|0)|0]=tmp17;
									tmp15[tmp22+(L$punr+3|0)|0]=tmp17;
									tmp15[tmp22+(L$punr+4|0)|0]=tmp17;
									tmp15[tmp22+(L$punr+5|0)|0]=tmp17;
									tmp15[tmp22+(L$punr+6|0)|0]=tmp17;
									tmp15[tmp22+(L$punr+7|0)|0]=tmp17;
									Lniter=Lniter+2|0;
									L$punr=L$punr+8|0;
									if((Lniter|0)!==(Lunroll_iter|0))continue;
									break;
								}
								Lniter=L$punr;
							}
							if(Llcmp$pmod$pnot){
								tmp15[tmp22+L$punr|0]=tmp17;
								tmp15[tmp22+(L$punr+1|0)|0]=tmp17;
								tmp15[tmp22+(L$punr+2|0)|0]=tmp17;
								tmp15[tmp22+(L$punr+3|0)|0]=tmp17;
								Lniter=L$punr+4|0;
								L$punr=Lniter;
							}else{
								L$punr=Lniter;
							}
						}
						if(tmp29){
							Lniter=0;
							while(1){
								tmp15[tmp22+L$punr|0]=tmp17;
								Lniter=Lniter+1|0;
								L$punr=L$punr+1|0;
								if((Lniter|0)!==(tmp28|0))continue;
								break;
							}
						}else{
							L$punr=Lniter;
						}
					}
					tmp21=tmp21+1|0;
					if((tmp21|0)!==(tmp25|0)){
						L$punr=L$punr+tmp4|0;
						continue;
					}
					break;
				}
				Lniter=tmp13.i0|0;
			}
		}else{
			Lniter=tmp14;
		}
	}else{
		Lniter=tmp14;
	}
	tmp13.i0=Lniter& -256|tmp14+1&255;
	Larg0.a3.putImageData(Larg0.a1,0,0);
	tmp13=__ZN9VGAOutput13handleRafTextEv;
	Larg0.i5=~~ +requestAnimationFrame(tmp13);
}
function __ZN9VGAOutput24handleRafImplGraphicsCgaEv(Larg0){
	var tmp0=null,tmp1=0,tmp2=null,L$poptgep29$poptgep48$poptgepsqueezed=null,L$poptgep29$poptgep32$poptgepsqueezed=null,Lgeptoindexphi8=0,Lgeptoindexphi17=0,tmp7=null,tmp8=0,tmp9=0,tmp10=0,Lgeptoindexphi6=0,Lgeptoindexphi14=0,tmp13=0,tmp14=0,Lgeptoindexphi=0,Lgeptoindexphi2=0,tmp17=0,tmp18=0,tmp19=0;
	tmp7=Larg0.a8;
	tmp8=Larg0.i6|0;
	tmp9=tmp7.i4|0;
	tmp10=Larg0.i7|0;
	if((tmp10|0)>0){
		tmp0=Larg0.a0;
		tmp1=Larg0.a0o|0;
		Lgeptoindexphi6=tmp7.i3>>>16;
		tmp8=__imul(tmp9>>>16&255,tmp8)|0;
		tmp9=(tmp8|0)>0?1:0;
		Lgeptoindexphi14=Lgeptoindexphi6+65536|0;
		tmp14=0;
		tmp13=0;
		while(1){
			if(tmp9){
				tmp2=Larg0.a2;
				tmp10=Larg0.a2o|0;
				L$poptgep29$poptgep48$poptgepsqueezed=tmp7.a1;
				L$poptgep29$poptgep32$poptgepsqueezed=tmp7.a2;
				Lgeptoindexphi8=Lgeptoindexphi6;
				Lgeptoindexphi17=Lgeptoindexphi14;
				Lgeptoindexphi=0;
				while(1){
					Lgeptoindexphi2=tmp0[tmp1+Lgeptoindexphi8|0]|0;
					tmp17=L$poptgep29$poptgep48$poptgepsqueezed[(Lgeptoindexphi2&255)>>>6]|0;
					tmp2[tmp10+tmp13|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp17]|0;
					tmp17=L$poptgep29$poptgep48$poptgepsqueezed[(Lgeptoindexphi2&255)>>>4&3]|0;
					tmp2[tmp10+(tmp13+1|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp17]|0;
					tmp17=L$poptgep29$poptgep48$poptgepsqueezed[(Lgeptoindexphi2&255)>>>2&3]|0;
					tmp2[tmp10+(tmp13+2|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp17]|0;
					Lgeptoindexphi2=L$poptgep29$poptgep48$poptgepsqueezed[Lgeptoindexphi2&3]|0;
					tmp2[tmp10+(tmp13+3|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[Lgeptoindexphi2]|0;
					Lgeptoindexphi2=tmp0[tmp1+Lgeptoindexphi17|0]|0;
					tmp17=L$poptgep29$poptgep48$poptgepsqueezed[(Lgeptoindexphi2&255)>>>6]|0;
					tmp2[tmp10+(tmp13+4|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp17]|0;
					tmp17=L$poptgep29$poptgep48$poptgepsqueezed[(Lgeptoindexphi2&255)>>>4&3]|0;
					tmp2[tmp10+(tmp13+5|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp17]|0;
					tmp17=L$poptgep29$poptgep48$poptgepsqueezed[(Lgeptoindexphi2&255)>>>2&3]|0;
					tmp2[tmp10+(tmp13+6|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp17]|0;
					Lgeptoindexphi2=L$poptgep29$poptgep48$poptgepsqueezed[Lgeptoindexphi2&3]|0;
					tmp2[tmp10+(tmp13+7|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[Lgeptoindexphi2]|0;
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					tmp13=tmp13+8|0;
					if((Lgeptoindexphi|0)<(tmp8|0)){
						Lgeptoindexphi8=Lgeptoindexphi8+1|0;
						Lgeptoindexphi17=Lgeptoindexphi17+1|0;
						continue;
					}
					break;
				}
				tmp17=0;
				Lgeptoindexphi2=0;
				Lgeptoindexphi=0;
				while(1){
					tmp18=tmp0[((tmp1+Lgeptoindexphi6|0)+4096|0)+Lgeptoindexphi|0]|0;
					tmp19=L$poptgep29$poptgep48$poptgepsqueezed[(tmp18&255)>>>6]|0;
					tmp2[tmp10+tmp13|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep29$poptgep48$poptgepsqueezed[(tmp18&255)>>>4&3]|0;
					tmp2[tmp10+(tmp13+1|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep29$poptgep48$poptgepsqueezed[(tmp18&255)>>>2&3]|0;
					tmp2[tmp10+(tmp13+2|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp19]|0;
					tmp18=L$poptgep29$poptgep48$poptgepsqueezed[tmp18&3]|0;
					tmp2[tmp10+(tmp13+3|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp18]|0;
					tmp18=tmp0[((tmp1+Lgeptoindexphi14|0)+4096|0)+Lgeptoindexphi2|0]|0;
					tmp19=L$poptgep29$poptgep48$poptgepsqueezed[(tmp18&255)>>>6]|0;
					tmp2[tmp10+(tmp13+4|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep29$poptgep48$poptgepsqueezed[(tmp18&255)>>>4&3]|0;
					tmp2[tmp10+(tmp13+5|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep29$poptgep48$poptgepsqueezed[(tmp18&255)>>>2&3]|0;
					tmp2[tmp10+(tmp13+6|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp19]|0;
					tmp18=L$poptgep29$poptgep48$poptgepsqueezed[tmp18&3]|0;
					tmp2[tmp10+(tmp13+7|0)|0]=L$poptgep29$poptgep32$poptgepsqueezed[tmp18]|0;
					tmp17=tmp17+8|0;
					tmp13=tmp13+8|0;
					if((tmp17|0)<(tmp8|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						Lgeptoindexphi2=Lgeptoindexphi2+1|0;
						continue;
					}
					break;
				}
				tmp10=Larg0.i7|0;
				Lgeptoindexphi6=Lgeptoindexphi8+1|0;
				Lgeptoindexphi14=Lgeptoindexphi17+1|0;
			}
			tmp14=tmp14+2|0;
			if((tmp14|0)<(tmp10|0))continue;
			break;
		}
	}
	tmp8=tmp7.i0|0;
	tmp7.i0=tmp8+1&255|tmp8& -256;
	Larg0.a3.putImageData(Larg0.a1,0,0);
	tmp7=__ZN9VGAOutput20handleRafGraphicsCgaEv;
	Larg0.i5=~~ +requestAnimationFrame(tmp7);
}
function __ZN9VGAOutput20handleRafGraphicsCgaEv(){
	__ZN9VGAOutput24handleRafImplGraphicsCgaEv(__ZN9VGAOutput8instanceE);
}
function __ZN9VGAOutput27handleRafImplGraphicsPlanarEv(Larg0){
	var tmp0=null,tmp1=0,Lgeptoindexphi2=0,Lgeptoindexphi6=0,Lgeptoindexphi10=0,tmp5=null,L$poptgep21$poptgep32$poptgepsqueezed=null,L$poptgep21$poptgep24$poptgepsqueezed=null,tmp8=0,tmp9=0,tmp10=0,tmp11=null,tmp12=0,tmp13=0,Lgeptoindexphi=0,tmp15=0,tmp16=0,tmp17=0,tmp18=0,tmp19=0;
	tmp11=Larg0.a8;
	tmp12=tmp11.i4|0;
	tmp13=Larg0.i7|0;
	if((tmp13|0)>0){
		tmp0=Larg0.a0;
		tmp1=Larg0.a0o|0;
		Lgeptoindexphi=tmp11.i3>>>16;
		tmp12&=65535;
		Lgeptoindexphi10=Lgeptoindexphi+196608|0;
		Lgeptoindexphi6=Lgeptoindexphi+131072|0;
		Lgeptoindexphi2=Lgeptoindexphi+65536|0;
		tmp15=Larg0.i6|0;
		tmp17=0;
		tmp16=0;
		while(1){
			if((tmp15|0)>0){
				tmp5=Larg0.a2;
				tmp13=Larg0.a2o|0;
				L$poptgep21$poptgep32$poptgepsqueezed=tmp11.a1;
				L$poptgep21$poptgep24$poptgepsqueezed=tmp11.a2;
				tmp18=0;
				while(1){
					tmp15=tmp0[(tmp1+Lgeptoindexphi|0)+tmp18|0]|0;
					tmp8=tmp0[(tmp1+Lgeptoindexphi2|0)+tmp18|0]|0;
					tmp9=tmp0[(tmp1+Lgeptoindexphi6|0)+tmp18|0]|0;
					tmp10=tmp0[(tmp1+Lgeptoindexphi10|0)+tmp18|0]|0;
					tmp19=L$poptgep21$poptgep32$poptgepsqueezed[(tmp8&255)>>>6&2|(tmp15&255)>>>7|(tmp9&255)>>>5&4|(tmp10&255)>>>4&8]|0;
					tmp5[tmp13+tmp16|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep21$poptgep32$poptgepsqueezed[(tmp8&255)>>>5&2|(tmp15&255)>>>6&1|(tmp9&255)>>>4&4|(tmp10&255)>>>3&8]|0;
					tmp5[tmp13+(tmp16+1|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep21$poptgep32$poptgepsqueezed[(tmp8&255)>>>4&2|(tmp15&255)>>>5&1|(tmp9&255)>>>3&4|(tmp10&255)>>>2&8]|0;
					tmp5[tmp13+(tmp16+2|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep21$poptgep32$poptgepsqueezed[(tmp8&255)>>>3&2|(tmp15&255)>>>4&1|(tmp9&255)>>>2&4|(tmp10&255)>>>1&8]|0;
					tmp5[tmp13+(tmp16+3|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep21$poptgep32$poptgepsqueezed[(tmp8&255)>>>2&2|(tmp15&255)>>>3&1|(tmp9&255)>>>1&4|tmp10&8]|0;
					tmp5[tmp13+(tmp16+4|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep21$poptgep32$poptgepsqueezed[(tmp8&255)>>>1&2|(tmp15&255)>>>2&1|tmp9&4|tmp10<<1&8]|0;
					tmp5[tmp13+(tmp16+5|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp19]|0;
					tmp19=L$poptgep21$poptgep32$poptgepsqueezed[tmp8&2|(tmp15&255)>>>1&1|tmp9<<1&4|tmp10<<2&8]|0;
					tmp5[tmp13+(tmp16+6|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp19]|0;
					tmp15=L$poptgep21$poptgep32$poptgepsqueezed[tmp8<<1&2|tmp15&1|tmp9<<2&4|tmp10<<3&8]|0;
					tmp5[tmp13+(tmp16+7|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp15]|0;
					tmp15=Larg0.i6|0;
					tmp18=tmp18+1|0;
					tmp16=tmp16+8|0;
					if((tmp18|0)<(tmp15|0))continue;
					break;
				}
				tmp13=Larg0.i7|0;
			}
			tmp17=tmp17+1|0;
			if((tmp17|0)<(tmp13|0)){
				Lgeptoindexphi2=Lgeptoindexphi2+tmp12|0;
				Lgeptoindexphi6=Lgeptoindexphi6+tmp12|0;
				Lgeptoindexphi10=Lgeptoindexphi10+tmp12|0;
				Lgeptoindexphi=Lgeptoindexphi+tmp12|0;
				continue;
			}
			break;
		}
	}
	tmp12=tmp11.i0|0;
	tmp11.i0=tmp12+1&255|tmp12& -256;
	Larg0.a3.putImageData(Larg0.a1,0,0);
	tmp11=__ZN9VGAOutput23handleRafGraphicsPlanarEv;
	Larg0.i5=~~ +requestAnimationFrame(tmp11);
}
function __ZN9VGAOutput23handleRafGraphicsPlanarEv(){
	__ZN9VGAOutput27handleRafImplGraphicsPlanarEv(__ZN9VGAOutput8instanceE);
}
function __ZN9VGAOutput25handleRafImplGraphics8BitEv(Larg0){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=0,Lgeptoindexphi2=0,Lgeptoindexphi6=0,Lgeptoindexphi10=0,tmp7=null,tmp8=0,L$poptgep21$poptgep24$poptgepsqueezed=null,tmp10=0,tmp11=0,tmp12=0,tmp13=null,tmp14=0,tmp15=0,Lgeptoindexphi=0,tmp17=0,tmp18=0,tmp19=0,tmp20=0;
	tmp13=Larg0.a8;
	tmp14=tmp13.i4|0;
	tmp15=Larg0.i7|0;
	if((tmp15|0)>0){
		tmp0=Larg0.a0;
		tmp1=Larg0.a0o|0;
		tmp2=tmp14>>>0<16777216?1:0;
		tmp3=tmp14>>>24;
		Lgeptoindexphi=tmp13.i3>>>16;
		tmp14&=65535;
		Lgeptoindexphi10=Lgeptoindexphi+196608|0;
		Lgeptoindexphi6=Lgeptoindexphi+131072|0;
		Lgeptoindexphi2=Lgeptoindexphi+65536|0;
		tmp18=0;
		tmp17=0;
		while(1){
			if(!(tmp2)){
				tmp15=Larg0.i6|0;
				tmp19=0;
				while(1){
					if((tmp15|0)>0){
						tmp7=Larg0.a2;
						tmp8=Larg0.a2o|0;
						L$poptgep21$poptgep24$poptgepsqueezed=tmp13.a2;
						tmp20=0;
						while(1){
							tmp15=tmp0[(tmp1+Lgeptoindexphi|0)+tmp20|0]|0;
							tmp10=tmp0[(tmp1+Lgeptoindexphi2|0)+tmp20|0]|0;
							tmp11=tmp0[(tmp1+Lgeptoindexphi6|0)+tmp20|0]|0;
							tmp12=tmp0[(tmp1+Lgeptoindexphi10|0)+tmp20|0]|0;
							tmp7[tmp8+tmp17|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp15&255]|0;
							tmp7[tmp8+(tmp17+1|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp15&255]|0;
							tmp7[tmp8+(tmp17+2|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp10&255]|0;
							tmp7[tmp8+(tmp17+3|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp10&255]|0;
							tmp7[tmp8+(tmp17+4|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp11&255]|0;
							tmp7[tmp8+(tmp17+5|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp11&255]|0;
							tmp7[tmp8+(tmp17+6|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp12&255]|0;
							tmp7[tmp8+(tmp17+7|0)|0]=L$poptgep21$poptgep24$poptgepsqueezed[tmp12&255]|0;
							tmp15=Larg0.i6|0;
							tmp20=tmp20+1|0;
							tmp17=tmp17+8|0;
							if((tmp20|0)<(tmp15|0))continue;
							break;
						}
					}
					tmp19=tmp19+1|0;
					if((tmp19|0)!==(tmp3|0))continue;
					break;
				}
				tmp15=Larg0.i7|0;
			}
			tmp18=tmp18+1|0;
			if((tmp18|0)<(tmp15|0)){
				Lgeptoindexphi2=Lgeptoindexphi2+tmp14|0;
				Lgeptoindexphi6=Lgeptoindexphi6+tmp14|0;
				Lgeptoindexphi10=Lgeptoindexphi10+tmp14|0;
				Lgeptoindexphi=Lgeptoindexphi+tmp14|0;
				continue;
			}
			break;
		}
	}
	tmp14=tmp13.i0|0;
	tmp13.i0=tmp14+1&255|tmp14& -256;
	Larg0.a3.putImageData(Larg0.a1,0,0);
	tmp13=__ZN9VGAOutput21handleRafGraphics8BitEv;
	Larg0.i5=~~ +requestAnimationFrame(tmp13);
}
function __ZN9VGAOutput21handleRafGraphics8BitEv(){
	__ZN9VGAOutput25handleRafImplGraphics8BitEv(__ZN9VGAOutput8instanceE);
}
function __ZN9VGAOutput16updateCanvasSizeEv(Larg0){
	var tmp0=0,tmp1=-0.,tmp2=0,tmp3=null,tmp4=null,tmp5=null;
	tmp0=__imul(Larg0.a8.i4>>>16&255,Larg0.i6|0)|0;
	tmp1=(+(tmp0>>>0));
	Larg0.a4.width=tmp1;
	Larg0.a4.height=(+(Larg0.i7|0));
	tmp2=Larg0.i7|0;
	tmp3=Larg0.a4.style;
	tmp4=String((tmp0|0)===320?640|0:tmp0|0);
	tmp5=tmp4.concat("px");
	tmp3.width=tmp5;
	tmp3=Larg0.a4.style;
	tmp4=String(tmp2<<((tmp0|0)===320?1:0));
	tmp5=tmp4.concat("px");
	tmp3.height=tmp5;
	tmp2=Larg0.i7|0;
	if((tmp0|0)!==0)if((tmp2|0)!==0){
		tmp3=Larg0.a3.getImageData(0,0,tmp1,(+(tmp2|0)));
		Larg0.a1=tmp3;
		tmp3=tmp3.data.buffer;
		tmp4=new Int32Array(tmp3);
		Larg0.a2=tmp4;
		Larg0.a2o=0;
	}
}
function __ZN9VGAOutput13setRenderModeE15VGA_RENDER_MODE(Larg0){
	var tmp0=null,tmp1=null;
	tmp0=__ZN9VGAOutput8instanceE;
	cancelAnimationFrame((+(tmp0.i5>>>0)));
	if(Larg0>>>0<2){
		if((Larg0|0)!==0){
			tmp1=__ZN9VGAOutput20handleRafGraphicsCgaEv;
			tmp0.i5=~~ +requestAnimationFrame(tmp1);
		}else{
			tmp1=__ZN9VGAOutput13handleRafTextEv;
			tmp0.i5=~~ +requestAnimationFrame(tmp1);
		}
	}else if((Larg0|0)===2){
		tmp1=__ZN9VGAOutput23handleRafGraphicsPlanarEv;
		tmp0.i5=~~ +requestAnimationFrame(tmp1);
	}else if((Larg0|0)===3){
		tmp1=__ZN9VGAOutput21handleRafGraphics8BitEv;
		tmp0.i5=~~ +requestAnimationFrame(tmp1);
	}
}
function ___stdio_close(Larg0){
	var tmp0=0;
	tmp0=Larg0.i15|0;
	if((_aio_fd_cnt|0)!==0){
		___dummy_thread.i7=2;
		___aio_get_queue(tmp0);
	}
	return 0|0;
}
function ___stdio_write(Larg0,Larg1,Marg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=0,L$poptgep$poptgep5$poptgepsqueezed=null,tmp4=0,tmp5=0,tmp6=0,Lgeptoindexphi1=0,tmp8=0;
	tmp0=[{a0:nullArray,a0o:0,i1:0},{a0:nullArray,a0o:0,i1:0}];
	L$poptgep$poptgep5$poptgepsqueezed=Larg0.a7;
	tmp4=Larg0.a7o|0;
	tmp0[0].a0=L$poptgep$poptgep5$poptgepsqueezed;
	tmp0[0].a0o=tmp4;
	tmp1=Larg0.a5;
	tmp5=Larg0.a5o|0;
	tmp5=(tmp5)-(tmp4)|0;
	tmp0[0].i1=tmp5;
	L$poptgep$poptgep5$poptgepsqueezed=tmp0[1];
	L$poptgep$poptgep5$poptgepsqueezed.a0=Larg1;
	L$poptgep$poptgep5$poptgepsqueezed.a0o=Marg1;
	L$poptgep$poptgep5$poptgepsqueezed.i1=Larg2;
	tmp4=___syscall_writev(tmp0,0,2)|0;
	if(tmp4>>>0>4294963200){
		___dummy_thread.i7=-tmp4|0;
		tmp4=-1;
	}
	tmp5=tmp5+Larg2|0;
	if((tmp5|0)!==(tmp4|0)){
		Lgeptoindexphi1=0;
		tmp6=2;
		while(1){
			if((tmp4|0)<0){
				Larg0.a4=nullArray;
				Larg0.a4o=0;
				Larg0.a7=nullArray;
				Larg0.a7o=0;
				Larg0.a5=nullArray;
				Larg0.a5o=0;
				Larg0.i0=Larg0.i0|32;
				if((tmp6|0)===2)return 0|0;
				tmp4=tmp0[Lgeptoindexphi1].i1|0;
				return Larg2-tmp4|0;
			}
			tmp5=tmp5-tmp4|0;
			tmp8=tmp0[Lgeptoindexphi1].i1|0;
			if(tmp4>>>0>tmp8>>>0){
				tmp4=tmp4-tmp8|0;
				tmp8=tmp0[(0+Lgeptoindexphi1|0)+1|0].i1|0;
				Lgeptoindexphi1=Lgeptoindexphi1+1|0;
				tmp6=tmp6-1|0;
			}
			L$poptgep$poptgep5$poptgepsqueezed=tmp0[Lgeptoindexphi1].a0;
			tmp2=tmp0[Lgeptoindexphi1].a0o|0;
			tmp0[Lgeptoindexphi1].a0=L$poptgep$poptgep5$poptgepsqueezed;
			tmp0[Lgeptoindexphi1].a0o=tmp2+tmp4|0;
			tmp0[Lgeptoindexphi1].i1=tmp8-tmp4|0;
			tmp4=___syscall_writev(tmp0,0+Lgeptoindexphi1|0,tmp6)|0;
			if(tmp4>>>0>4294963200){
				___dummy_thread.i7=-tmp4|0;
				tmp4=-1;
			}
			if((tmp5|0)!==(tmp4|0))continue;
			break;
		}
	}
	L$poptgep$poptgep5$poptgepsqueezed=Larg0.a11;
	tmp4=Larg0.a11o|0;
	tmp5=Larg0.i12|0;
	Larg0.a4=L$poptgep$poptgep5$poptgepsqueezed;
	Larg0.a4o=tmp4+tmp5|0;
	Larg0.a7=L$poptgep$poptgep5$poptgepsqueezed;
	Larg0.a7o=tmp4;
	Larg0.a5=L$poptgep$poptgep5$poptgepsqueezed;
	Larg0.a5o=tmp4;
	return Larg2|0;
}
function ___stdio_seek(Larg0,L$plow,L$phigh,Larg3){
	_cheerpSretSlot=-1;
	return  -1|0;
}
function ___aio_get_queue(Larg0){
	var tmp0=0;
	if((Larg0|0)<0)___dummy_thread.i7=9;
	else{
		___pthread_rwlock_timedrdlock();
		tmp0=_maplock.a0[8]|0;
		_maplock.a0[8]=((((tmp0&2147483647)-1073741825|0)^1073741822)+2& -3|0)!==0?tmp0-1|0:0|0;
	}
}
function ___pthread_rwlock_timedrdlock(){
	var L$psink13=0,tmp1=0;
	L$psink13=_maplock.a0[8]|0;
	tmp1=L$psink13&2147483647;
	a:if((tmp1|0)!==2147483646){
		if((tmp1|0)===2147483647){
			L$psink13=100;
			while(1){
				if((L$psink13|0)!==0)if((_maplock.a0[8]|0)!==0)if((_maplock.a0[9]|0)===0){
					L$psink13=L$psink13-1|0;
					continue;
				}
				break;
			}
			L$psink13=_maplock.a0[8]|0;
			tmp1=L$psink13&2147483647;
			if((tmp1|0)===2147483646)break a;
			if((tmp1|0)===2147483647)while(1){
				L$psink13=_maplock.a0[8]|0;
				if((L$psink13&2147483647|0)===2147483647){
					tmp1=_maplock.a0[9]|0;
					_maplock.a0[8]=L$psink13| -2147483648;
					L$psink13=___dummy_thread.i10|0;
					___dummy_thread.i10=L$psink13&16776960|1;
					if((L$psink13&255)<=2)___dummy_thread.i10=L$psink13;
					_maplock.a0[9]=tmp1;
				}
				L$psink13=_maplock.a0[8]|0;
				tmp1=L$psink13&2147483647;
				if((tmp1|0)===2147483646)break a;
				if((tmp1|0)===2147483647)continue;
				break;
			}
		}
		_maplock.a0[8]=L$psink13+1|0;
	}
}
function ___stdout_write(Larg0,Larg1,Marg1,Larg2){
	Larg0.a9=___stdio_write;
	return (___stdio_write(Larg0,Larg1,Marg1,Larg2)|0)|0;
}
function __ZN10__cxxabiv117__class_type_infoD2Ev(Larg0){
}
function __ZN10__cxxabiv117__class_type_infoD0Ev(Larg0){
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev(Larg0){
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev(Larg0){
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb(Larg0,Larg1,Larg2,Marg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a1;
	tmp1=Larg1.a1;
	if(tmp0===tmp1&&0===0)return 1|0;
	tmp0=Larg1.a0;
	tmp2=Larg1.o|0;
	tmp2=___dynamic_cast(tmp2+1|0,tmp0.a0)|0;
	if((tmp2|0)===-2147483648)return 0|0;
	if((tmp2|0)!==0)tmp0=Larg1.a[Larg1.o-tmp2];
	else{
		tmp0=Larg1;
	}
	if(tmp0!==null){
		tmp1=new constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE();
		tmp1.a0=tmp0;
		tmp1.i1=0;
		tmp1.a2=Larg0;
		tmp1.i3=0;
		tmp1.a4=tmp0;
		tmp1.i5=-1;
		tmp1.i6=0;
		tmp1.i7=0;
		tmp1.i8=0;
		tmp1.i9=0;
		tmp1.i10=0;
		tmp1.i11=0;
		tmp1.i12=0;
		tmp1.i13=0;
		tmp1.i15=0;
		tmp1.i14=1;
		tmp0.a0.a8(tmp0,tmp1,Larg2[Marg2]|0,1);
		tmp2=tmp1.i8|0;
		if((tmp2|0)===1)Larg2[Marg2]=tmp1.i6|0;
		return ((tmp2|0)===1?1:0)|0;
	}
	return 0|0;
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=0,tmp1=null,Lmergedinsert=0,tmp3=null,tmp4=0,Lgeptoindexphi4=0,Lgeptoindexphi=0;
	tmp1=Larg1.a2;
	a:{
		if(Larg5){
			if(Larg0!==tmp1){
				tmp3=Larg0.a1;
				tmp1=tmp1.a1;
				tmp4=tmp3[0]|0;
				Lmergedinsert=tmp1[0]|0;
				Lgeptoindexphi4=(tmp4&255)!==(Lmergedinsert&255)?1:0;
				if((tmp4&255)!==0)if(!(Lgeptoindexphi4)){
					Lgeptoindexphi4=0;
					Lgeptoindexphi=0;
					while(1){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						Lgeptoindexphi4=Lgeptoindexphi4+1|0;
						tmp4=tmp3[Lgeptoindexphi]|0;
						Lmergedinsert=tmp1[Lgeptoindexphi4]|0;
						tmp0=(tmp4&255)!==(Lmergedinsert&255)?1:0;
						if((tmp4&255)!==0)if(!(tmp0))continue;
						break;
					}
				}
				if((tmp4&255)!==(Lmergedinsert&255))break a;
			}
		}else{
			tmp3=Larg0.a1;
			tmp1=tmp1.a1;
			if(tmp3!==tmp1||0!==0)break a;
		}
		Lmergedinsert=Larg1.i15&16711935|256;
		Larg1.i15=Lmergedinsert;
		if((Larg1.i1|0)===(Larg3|0)){
			Larg1.i15=Lmergedinsert&16711936|1;
			Lmergedinsert=Larg1.i6|0;
			if((Lmergedinsert|0)!==0){
				if((Lmergedinsert|0)===(Larg2|0)){
					Lmergedinsert=Larg1.i8|0;
					if((Lmergedinsert|0)===2){
						Larg1.i8=Larg4;
						Lmergedinsert=Larg4;
					}
					if(((Larg1.i14|0)^1|Lmergedinsert^1|0)===0)Larg1.i15=65793;
				}else{
					Larg1.i11=(Larg1.i11|0)+1|0;
					Larg1.i15=65793;
				}
			}else{
				Larg1.i6=Larg2;
				Larg1.i8=Larg4;
				Larg1.i11=1;
				if((Larg4^1|(Larg1.i14|0)^1|0)===0)Larg1.i15=65793;
			}
		}
	}
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=0,tmp4=0,Lgeptoindexphi14=0,Lgeptoindexphi6=0,Lgeptoindexphi=0;
	tmp1=Larg1.a2;
	a:{
		b:{
			if(Larg4){
				if(Larg0===tmp1)break b;
				tmp2=Larg0.a1;
				tmp1=tmp1.a1;
				tmp3=tmp2[0]|0;
				tmp4=tmp1[0]|0;
				Lgeptoindexphi14=(tmp3&255)!==(tmp4&255)?1:0;
				if((tmp3&255)===0){
					Lgeptoindexphi14=tmp3;
				}else if(Lgeptoindexphi14){
					Lgeptoindexphi14=tmp3;
				}else{
					Lgeptoindexphi6=0;
					Lgeptoindexphi=0;
					while(1){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						Lgeptoindexphi6=Lgeptoindexphi6+1|0;
						Lgeptoindexphi14=tmp2[Lgeptoindexphi]|0;
						tmp4=tmp1[Lgeptoindexphi6]|0;
						tmp0=(Lgeptoindexphi14&255)!==(tmp4&255)?1:0;
						if((Lgeptoindexphi14&255)!==0)if(!(tmp0))continue;
						break;
					}
				}
				if((Lgeptoindexphi14&255)===(tmp4&255))break b;
				tmp1=Larg1.a0;
				if(Larg0!==tmp1){
					tmp1=tmp1.a1;
					tmp4=tmp1[0]|0;
					Lgeptoindexphi14=(tmp3&255)!==(tmp4&255)?1:0;
					if((tmp3&255)!==0)if(!(Lgeptoindexphi14)){
						Lgeptoindexphi14=0;
						Lgeptoindexphi6=0;
						while(1){
							Lgeptoindexphi6=Lgeptoindexphi6+1|0;
							Lgeptoindexphi14=Lgeptoindexphi14+1|0;
							tmp3=tmp2[Lgeptoindexphi6]|0;
							tmp4=tmp1[Lgeptoindexphi14]|0;
							Lgeptoindexphi=(tmp3&255)!==(tmp4&255)?1:0;
							if((tmp3&255)!==0)if(!(Lgeptoindexphi))continue;
							break;
						}
					}
					if((tmp3&255)!==(tmp4&255))break a;
				}
			}else{
				tmp2=Larg0.a1;
				tmp1=tmp1.a1;
				if(tmp2===tmp1&&0===0)break b;
				tmp1=Larg1.a0.a1;
				if(tmp2!==tmp1||0!==0)break a;
			}
			if((Larg1.i6|0)!==(Larg2|0))if((Larg1.i7|0)!==(Larg2|0)){
				Larg1.i10=Larg3;
				Larg1.i7=Larg2;
				Larg1.i12=(Larg1.i12|0)+1|0;
				if((Larg1.i11|0)===1)if((Larg1.i8|0)===2)Larg1.i15=Larg1.i15&65535|65536;
				Larg1.i13=4;
				break a;
			}
			if((Larg3|0)!==1)break a;
			Larg1.i10=1;
			break a;
		}
		if((Larg1.i1|0)===(Larg2|0))if((Larg1.i9|0)!==1)Larg1.i9=Larg3;
	}
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a1;
	tmp1=Larg1.a2.a1;
	if(tmp0===tmp1&&0===0){
		tmp2=Larg1.i6|0;
		if((tmp2|0)!==0){
			if((tmp2|0)===(Larg2|0)){
				if((Larg1.i8|0)===2)Larg1.i8=Larg3;
			}else{
				Larg1.i11=(Larg1.i11|0)+1|0;
				Larg1.i8=2;
				Larg1.i15=Larg1.i15&65535|65536;
			}
		}else{
			Larg1.i6=Larg2;
			Larg1.i8=Larg3;
			Larg1.i11=1;
		}
	}
}
function ___dynamic_cast(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=new constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE();
	tmp0.a0=__ZTIN10__cxxabiv117__class_type_infoE;
	tmp0.i1=Larg0;
	tmp0.a2=__ZTIN10__cxxabiv116__shim_type_infoE;
	tmp0.i3=1;
	tmp0.a4=Larg1;
	tmp0.i5=0;
	tmp0.i6=0;
	tmp0.i7=0;
	tmp0.i8=0;
	tmp0.i9=0;
	tmp0.i10=0;
	tmp0.i11=0;
	tmp0.i12=0;
	tmp0.i13=0;
	tmp0.i14=0;
	tmp0.i15=0;
	tmp1=Larg1.a1;
	a:if(tmp1===__ZTSN10__cxxabiv117__class_type_infoE&&0===0){
		tmp0.i14=1;
		Larg1.a0.a6(Larg1,tmp0,1,1,1,0);
		if((tmp0.i8|0)===1)return Larg0-1|0;
	}else{
		Larg1.a0.a7(Larg1,tmp0,1,1,0);
		tmp2=tmp0.i11|0;
		if((tmp2|0)!==0){
			if((tmp2|0)!==1)break a;
			if((tmp0.i8|0)!==1)if((tmp0.i12|(tmp0.i9|0)^1|(tmp0.i10|0)^1|0)!==0)break a;
			tmp2=tmp0.i6|0;
		}else{
			if(((tmp0.i12|0)^1|(tmp0.i9|0)^1|(tmp0.i10|0)^1|0)!==0)break a;
			tmp2=tmp0.i7|0;
		}
		if((tmp2|0)!==-2147483648)return Larg0-tmp2|0;
	}
	return  -2147483648|0;
}
function __ZN10__cxxabiv120__si_class_type_infoD2Ev(Larg0){
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev(Larg0){
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=0,tmp1=null,Lmergedinsert=0,tmp3=null,tmp4=0,Lgeptoindexphi4=0,Lgeptoindexphi=0;
	tmp1=Larg1.a2;
	a:{
		b:{
			if(Larg5){
				if(Larg0!==tmp1){
					tmp3=Larg0.a1;
					tmp1=tmp1.a1;
					tmp4=tmp3[0]|0;
					Lmergedinsert=tmp1[0]|0;
					Lgeptoindexphi4=(tmp4&255)!==(Lmergedinsert&255)?1:0;
					if((tmp4&255)!==0)if(!(Lgeptoindexphi4)){
						Lgeptoindexphi4=0;
						Lgeptoindexphi=0;
						while(1){
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							Lgeptoindexphi4=Lgeptoindexphi4+1|0;
							tmp4=tmp3[Lgeptoindexphi]|0;
							Lmergedinsert=tmp1[Lgeptoindexphi4]|0;
							tmp0=(tmp4&255)!==(Lmergedinsert&255)?1:0;
							if((tmp4&255)!==0)if(!(tmp0))continue;
							break;
						}
					}
					if((tmp4&255)!==(Lmergedinsert&255))break b;
				}
			}else{
				tmp3=Larg0.a1;
				tmp1=tmp1.a1;
				if(tmp3!==tmp1||0!==0)break b;
			}
			Lmergedinsert=Larg1.i15&16711935|256;
			Larg1.i15=Lmergedinsert;
			if((Larg1.i1|0)!==(Larg3|0))break a;
			Larg1.i15=Lmergedinsert&16711936|1;
			Lmergedinsert=Larg1.i6|0;
			if((Lmergedinsert|0)!==0){
				if((Lmergedinsert|0)===(Larg2|0)){
					Lmergedinsert=Larg1.i8|0;
					if((Lmergedinsert|0)===2){
						Larg1.i8=Larg4;
						Lmergedinsert=Larg4;
					}
					if(((Larg1.i14|0)^1|Lmergedinsert^1|0)!==0)break a;
					Larg1.i15=65793;
					break a;
				}
				Larg1.i11=(Larg1.i11|0)+1|0;
				Larg1.i15=65793;
				break a;
			}
			Larg1.i6=Larg2;
			Larg1.i8=Larg4;
			Larg1.i11=1;
			if((Larg4^1|(Larg1.i14|0)^1|0)!==0)break a;
			Larg1.i15=65793;
			break a;
		}
		tmp1=Larg0.a2;
		tmp1.a0.a6(tmp1,Larg1,Larg2,Larg3,Larg4,Larg5);
	}
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=0,tmp4=0,Lgeptoindexphi14=0,Lgeptoindexphi6=0,Lgeptoindexphi=0;
	tmp1=Larg1.a2;
	a:{
		b:{
			c:{
				if(Larg4){
					if(Larg0===tmp1)break b;
					tmp2=Larg0.a1;
					tmp1=tmp1.a1;
					tmp3=tmp2[0]|0;
					tmp4=tmp1[0]|0;
					Lgeptoindexphi14=(tmp3&255)!==(tmp4&255)?1:0;
					if((tmp3&255)===0){
						Lgeptoindexphi14=tmp3;
					}else if(Lgeptoindexphi14){
						Lgeptoindexphi14=tmp3;
					}else{
						Lgeptoindexphi6=0;
						Lgeptoindexphi=0;
						while(1){
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							Lgeptoindexphi6=Lgeptoindexphi6+1|0;
							Lgeptoindexphi14=tmp2[Lgeptoindexphi]|0;
							tmp4=tmp1[Lgeptoindexphi6]|0;
							tmp0=(Lgeptoindexphi14&255)!==(tmp4&255)?1:0;
							if((Lgeptoindexphi14&255)!==0)if(!(tmp0))continue;
							break;
						}
					}
					if((Lgeptoindexphi14&255)===(tmp4&255))break b;
					tmp1=Larg1.a0;
					if(Larg0!==tmp1){
						tmp1=tmp1.a1;
						tmp4=tmp1[0]|0;
						Lgeptoindexphi14=(tmp3&255)!==(tmp4&255)?1:0;
						if((tmp3&255)!==0)if(!(Lgeptoindexphi14)){
							Lgeptoindexphi14=0;
							Lgeptoindexphi6=0;
							while(1){
								Lgeptoindexphi6=Lgeptoindexphi6+1|0;
								Lgeptoindexphi14=Lgeptoindexphi14+1|0;
								tmp3=tmp2[Lgeptoindexphi6]|0;
								tmp4=tmp1[Lgeptoindexphi14]|0;
								Lgeptoindexphi=(tmp3&255)!==(tmp4&255)?1:0;
								if((tmp3&255)!==0)if(!(Lgeptoindexphi))continue;
								break;
							}
						}
						if((tmp3&255)!==(tmp4&255))break c;
					}
				}else{
					tmp2=Larg0.a1;
					tmp1=tmp1.a1;
					if(tmp2===tmp1&&0===0)break b;
					tmp1=Larg1.a0.a1;
					if(tmp2!==tmp1||0!==0)break c;
				}
				if((Larg1.i6|0)!==(Larg2|0))if((Larg1.i7|0)!==(Larg2|0)){
					Larg1.i10=Larg3;
					if((Larg1.i13|0)!==4){
						Larg1.i15=Larg1.i15&16711680;
						tmp1=Larg0.a2;
						tmp1.a0.a6(tmp1,Larg1,Larg2,Larg2,1,Larg4);
						tmp3=Larg1.i15|0;
						if((tmp3&65280)!==0){
							Larg1.i13=3;
							if((tmp3&255)!==0)break a;
						}else Larg1.i13=4;
					}
					Larg1.i7=Larg2;
					Larg1.i12=(Larg1.i12|0)+1|0;
					if((Larg1.i11|0)!==1)break a;
					if((Larg1.i8|0)!==2)break a;
					Larg1.i15=Larg1.i15&65535|65536;
					break a;
				}
				if((Larg3|0)!==1)break a;
				Larg1.i10=1;
				break a;
			}
			tmp1=Larg0.a2;
			tmp1.a0.a7(tmp1,Larg1,Larg2,Larg3,Larg4);
			break a;
		}
		if((Larg1.i1|0)===(Larg2|0))if((Larg1.i9|0)!==1)Larg1.i9=Larg3;
	}
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp2=Larg0.a1;
	tmp0=Larg1.a2.a1;
	if(tmp2===tmp0&&0===0){
		tmp1=Larg1.i6|0;
		if((tmp1|0)!==0){
			if((tmp1|0)===(Larg2|0)){
				if((Larg1.i8|0)===2)Larg1.i8=Larg3;
			}else{
				Larg1.i11=(Larg1.i11|0)+1|0;
				Larg1.i8=2;
				Larg1.i15=Larg1.i15&65535|65536;
			}
		}else{
			Larg1.i6=Larg2;
			Larg1.i8=Larg3;
			Larg1.i11=1;
		}
	}else{
		tmp2=Larg0.a2;
		tmp2.a0.a8(tmp2,Larg1,Larg2,Larg3);
	}
}
function __ZNKSt11logic_error4whatEv(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1.a0;
	return null;
}
function __ZNSt11logic_errorD0Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function __ZNSt11logic_errorD2Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function ___cxa_pure_virtual(){
	_abort();
	;
}
function _abort(){
	___syscall_tkill();
	;
}
function __ZNSs9__grow_byEjjjjjj(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=0,Lprol$piter13=0,Lxtraiter11=0,Lgeptoindexphi3=0,Lgeptoindexphi=0;
	if((Larg1|0)===2147483631)__ZNKSs20__throw_length_errorB7v160000Ev();
	;
	tmp0=Larg0.a2;
	if(Larg1>>>0<1073741799){
		tmp2=Larg1<<1;
		Lprol$piter13=Larg1+1|0;
		tmp2=((Lprol$piter13>>>0>tmp2>>>0?Lprol$piter13|0:tmp2|0)& -16)+16|0;
	}else{
		tmp2=2147483631;
	}
	tmp1=new Uint8Array(tmp2/1|0);
	if((Larg3|0)!==0){
		Lprol$piter13=0<0?1:0;
		if(((0+Larg3|0)|0)!==((0)|0))if(Lprol$piter13){
			Lxtraiter11=Larg3&3;
			if((Lxtraiter11|0)!==0){
				Lgeptoindexphi=0;
				Lgeptoindexphi3=Larg3;
				Lprol$piter13=Larg3;
				while(1){
					Lprol$piter13=Lprol$piter13-1|0;
					Lgeptoindexphi3=Lgeptoindexphi3-1|0;
					tmp1[Lgeptoindexphi3]=tmp0[Lprol$piter13]|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lgeptoindexphi|0)!==(Lxtraiter11|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=Larg3;
				Lprol$piter13=Larg3;
			}
			if(Larg3>>>0>=4)while(1){
				tmp1[(0+Lgeptoindexphi3|0)+ -1|0]=tmp0[(0+Lprol$piter13|0)+ -1|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+ -2|0]=tmp0[(0+Lprol$piter13|0)+ -2|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+ -3|0]=tmp0[(0+Lprol$piter13|0)+ -3|0]|0;
				Lprol$piter13=Lprol$piter13-4|0;
				Lgeptoindexphi3=Lgeptoindexphi3-4|0;
				tmp1[Lgeptoindexphi3]=tmp0[Lprol$piter13]|0;
				if(tmp1!==tmp1||0!==(0+Lgeptoindexphi3|0))continue;
				break;
			}
		}else{
			Lxtraiter11=Larg3&7;
			if((Lxtraiter11|0)!==0){
				Lprol$piter13=0;
				Lgeptoindexphi3=0;
				Lgeptoindexphi=0;
				while(1){
					tmp1[Lgeptoindexphi3]=tmp0[Lgeptoindexphi]|0;
					Lprol$piter13=Lprol$piter13+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter13|0)!==(Lxtraiter11|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=0;
				Lgeptoindexphi=0;
			}
			if(Larg3>>>0>=8)while(1){
				tmp1[Lgeptoindexphi3]=tmp0[Lgeptoindexphi]|0;
				tmp1[(0+Lgeptoindexphi3|0)+1|0]=tmp0[(0+Lgeptoindexphi|0)+1|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+2|0]=tmp0[(0+Lgeptoindexphi|0)+2|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+3|0]=tmp0[(0+Lgeptoindexphi|0)+3|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+4|0]=tmp0[(0+Lgeptoindexphi|0)+4|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+5|0]=tmp0[(0+Lgeptoindexphi|0)+5|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+6|0]=tmp0[(0+Lgeptoindexphi|0)+6|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+7|0]=tmp0[(0+Lgeptoindexphi|0)+7|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp1!==tmp1||(0+Larg3|0)!==(0+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
	}
	if((Larg2|0)!==(Larg3|0)){
		Lprol$piter13=0<0?1:0;
		if(((0+Larg2|0)|0)!==((0+Larg3|0)|0))if(Lprol$piter13){
			Lxtraiter11=Larg2-Larg3&3;
			if((Lxtraiter11|0)!==0){
				Lgeptoindexphi=0;
				Lgeptoindexphi3=Larg2;
				Lprol$piter13=Larg2;
				while(1){
					Lprol$piter13=Lprol$piter13-1|0;
					Lgeptoindexphi3=Lgeptoindexphi3-1|0;
					tmp1[Lgeptoindexphi3]=tmp0[Lprol$piter13]|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lgeptoindexphi|0)!==(Lxtraiter11|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=Larg2;
				Lprol$piter13=Larg2;
			}
			if((Larg3^ -1)+Larg2>>>0>=3)while(1){
				tmp1[(0+Lgeptoindexphi3|0)+ -1|0]=tmp0[(0+Lprol$piter13|0)+ -1|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+ -2|0]=tmp0[(0+Lprol$piter13|0)+ -2|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+ -3|0]=tmp0[(0+Lprol$piter13|0)+ -3|0]|0;
				Lprol$piter13=Lprol$piter13-4|0;
				Lgeptoindexphi3=Lgeptoindexphi3-4|0;
				tmp1[Lgeptoindexphi3]=tmp0[Lprol$piter13]|0;
				if(tmp1!==tmp1||(0+Larg3|0)!==(0+Lgeptoindexphi3|0))continue;
				break;
			}
		}else{
			Lxtraiter11=Larg2-Larg3&7;
			if((Lxtraiter11|0)!==0){
				Lprol$piter13=0;
				Lgeptoindexphi3=Larg3;
				Lgeptoindexphi=Larg3;
				while(1){
					tmp1[Lgeptoindexphi3]=tmp0[Lgeptoindexphi]|0;
					Lprol$piter13=Lprol$piter13+1|0;
					Lgeptoindexphi3=Lgeptoindexphi3+1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					if((Lprol$piter13|0)!==(Lxtraiter11|0))continue;
					break;
				}
			}else{
				Lgeptoindexphi3=Larg3;
				Lgeptoindexphi=Larg3;
			}
			if((Larg3^ -1)+Larg2>>>0>=7)while(1){
				tmp1[Lgeptoindexphi3]=tmp0[Lgeptoindexphi]|0;
				tmp1[(0+Lgeptoindexphi3|0)+1|0]=tmp0[(0+Lgeptoindexphi|0)+1|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+2|0]=tmp0[(0+Lgeptoindexphi|0)+2|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+3|0]=tmp0[(0+Lgeptoindexphi|0)+3|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+4|0]=tmp0[(0+Lgeptoindexphi|0)+4|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+5|0]=tmp0[(0+Lgeptoindexphi|0)+5|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+6|0]=tmp0[(0+Lgeptoindexphi|0)+6|0]|0;
				tmp1[(0+Lgeptoindexphi3|0)+7|0]=tmp0[(0+Lgeptoindexphi|0)+7|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp1!==tmp1||(0+Larg2|0)!==(0+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
	}
	Larg0.a2=tmp1;
	Larg0.i0=(tmp2<<1)+1|0;
}
function __ZNKSs20__throw_length_errorB7v160000Ev(){
	__ZSt20__throw_length_errorB7v160000PKc();
	;
}
function __ZSt20__throw_length_errorB7v160000PKc(){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:{a0:nullObj}}];
	tmp1=tmp0[0];
	__ZNSt12length_errorC2B7v160000EPKc(tmp1);
	_____cxa_throw(tmp0);
	;
}
function __ZNSt12length_errorC2B7v160000EPKc(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=new DataView(new ArrayBuffer(((25)+ 7) & (~7)));
	tmp0.setInt32(0+__imul(0,12),12,true);
	tmp0.setInt32(4+__imul(0,12),12,true);
	tmp0.setInt32(8+__imul(0,12),0,true);
	tmp0.setInt8(12+__imul(0,12),98);
	tmp0.setInt8(1*1+12+__imul(0,12),97);
	tmp0.setInt8(2*1+12+__imul(0,12),115);
	tmp0.setInt8(3*1+12+__imul(0,12),105);
	tmp0.setInt8(4*1+12+__imul(0,12),99);
	tmp0.setInt8(5*1+12+__imul(0,12),95);
	tmp0.setInt8(6*1+12+__imul(0,12),115);
	tmp0.setInt8(7*1+12+__imul(0,12),116);
	tmp0.setInt8(8*1+12+__imul(0,12),114);
	tmp0.setInt8(9*1+12+__imul(0,12),105);
	tmp0.setInt8(10*1+12+__imul(0,12),110);
	tmp0.setInt8(11*1+12+__imul(0,12),103);
	tmp0.setInt8(12*1+12+__imul(0,12),0);
	Larg0.a1.a0=tmp0;
	Larg0.a0=__ZTVSt12length_error;
}
function __ExThunk__ZNSt12length_errorD1Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function _____cxa_throw(Larg0){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=[nullObj];
	tmp0[0]={d:Larg0,o:0};
	tmp1=[null];
	tmp1[0]=__ZTISt12length_error;
	tmp2=[null];
	tmp2[0]=__ExThunk__ZNSt12length_errorD1Ev;
	__ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(__ZN10__cxxabiv19Exception8allocateIJRPvRPSt9type_infoRPFvS2_EEEEPS0_DpOT_(tmp0,0,tmp1,0,tmp2,0));
	;
}
function __ZN10__cxxabiv19Exception8allocateIJRPvRPSt9type_infoRPFvS2_EEEEPS0_DpOT_(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp1=__ZZN10__cxxabiv19Exception9allocatorEvE6result;
	if(tmp1!==null)return __ZN10__cxxabiv111IdAllocatorINS_9ExceptionEE8allocateIJRPvRPSt9type_infoRPFvS4_EEEEPS1_DpOT_(tmp1,Larg0,Marg0,Larg1,Marg1,Larg2,Marg2);
	tmp1={a0:nullArray,a1:nullArray,i2:0};
	tmp1.i2=16;
	tmp2=createArray_struct$p_ZN10__cxxabiv19ExceptionE(16);
	tmp1.a0=tmp2;
	tmp0=tmp1.i2|0;
	tmp2=new Uint8Array(tmp0/1|0);
	tmp1.a1=tmp2;
	__ZZN10__cxxabiv19Exception9allocatorEvE6result=tmp1;
	return __ZN10__cxxabiv111IdAllocatorINS_9ExceptionEE8allocateIJRPvRPSt9type_infoRPFvS4_EEEEPS1_DpOT_(tmp1,Larg0,Marg0,Larg1,Marg1,Larg2,Marg2);
}
function __ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(Larg0){
	var tmp0=null,tmp1=null;
	tmp1=Larg0.a4.a1;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(tmp1,0);
	tmp0=new CheerpException(tmp1);
	Larg0.a0=tmp0;
	throw tmp0;
	;
}
function __ZN10__cxxabiv111IdAllocatorINS_9ExceptionEE8allocateIJRPvRPSt9type_infoRPFvS4_EEEEPS1_DpOT_(Larg0,Larg1,Marg1,Larg2,Marg2,Larg3,Marg3){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=null,tmp7=0;
	tmp5=Larg0.i2|0;
	a:{
		b:{
			if((tmp5|0)>1){
				tmp6=Larg0.a1;
				tmp7=1;
				while(1){
					if((tmp6[tmp7]&255)!==0){
						tmp7=tmp7+1|0;
						if((tmp7|0)===(tmp5|0))break b;
						continue;
					}
					break;
				}
			}else{
				tmp7=1;
			}
			if((tmp7|0)!==(tmp5|0)){
				tmp6=Larg0.a1;
				tmp5=tmp7;
				break a;
			}
		}
		Larg0.i2=tmp5<<1;
		tmp6=Larg0.a0;
		tmp7=__imul(tmp5,88)|0;
		if(tmp6!==nullArray||0!==0)tmp6=resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp6,tmp6.length,tmp7/44|0);
		else tmp6=createArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp7/44|0);
		Larg0.a0=tmp6;
		tmp7=Larg0.i2|0;
		tmp6=Larg0.a1;
		if(tmp6!==nullArray||0!==0)tmp6=(function(){var __old__=tmp6;
			var __ret__=new Uint8Array(tmp7/1|0);
			__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
			return __ret__;})();
		else tmp6=new Uint8Array(tmp7/1|0);
		Larg0.a1=tmp6;
	}
	tmp0=Larg0.a0;
	tmp1=Larg1[Marg1];
	tmp2=Larg2[Marg2];
	tmp3=Larg3[Marg3];
	tmp4=tmp1.d;
	tmp7=tmp1.o;
	tmp0[tmp5].a1=tmp4;
	tmp0[tmp5].i2=tmp7;
	tmp0[tmp5].a3=null;
	tmp0[tmp5].a4=tmp2;
	tmp0[tmp5].a5=tmp3;
	tmp0[tmp5].i6=1;
	tmp0[tmp5].i7=0;
	tmp0[tmp5].a9=null;
	tmp0[tmp5].a10=null;
	tmp6[tmp5]=1;
	return tmp0[tmp5];
}
function __ZNSt12length_errorD2Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function __ZNSt12length_errorD0Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function ___fwritex(Larg0,Marg0,Larg1,Larg2){
	var tmp0=0,tmp1=null,Lgeptoindexphi=0,L$ppre_0=null,L$ppre_1=0,tmp5=0;
	tmp1=Larg2.a4;
	Lgeptoindexphi=Larg2.a4o|0;
	a:{
		if(tmp1===nullArray&&Lgeptoindexphi===0){
			if(((___towrite(Larg2)|0)|0)!==0)break a;
			tmp1=Larg2.a4;
			Lgeptoindexphi=Larg2.a4o|0;
		}
		L$ppre_0=Larg2.a5;
		L$ppre_1=Larg2.a5o|0;
		if((Lgeptoindexphi)-(L$ppre_1)>>>0<Larg1>>>0)Larg2.a9(Larg2,Larg0,Marg0,Larg1)|0;
		else{
			if((Larg2.i20|0)>-1){
				Lgeptoindexphi=Larg1;
				while(1){
					if((Lgeptoindexphi|0)!==0){
						tmp5=Lgeptoindexphi-1|0;
						if((Larg0[Marg0+tmp5|0]&255)!==10){
							Lgeptoindexphi=tmp5;
							continue;
						}
						if((Larg2.a9(Larg2,Larg0,Marg0,Lgeptoindexphi)|0)>>>0<Lgeptoindexphi>>>0)break a;
						L$ppre_0=Larg2.a5;
						L$ppre_1=Larg2.a5o|0;
						tmp5=Larg1-Lgeptoindexphi|0;
					}else{
						Lgeptoindexphi=0;
						tmp5=Larg1;
					}
					break;
				}
			}else{
				Lgeptoindexphi=0;
				tmp5=Larg1;
			}
			if((tmp5|0)!==0){
				tmp0=L$ppre_1;
				tmp1=L$ppre_0;
				while(1){
					tmp1[tmp0]=Larg0[Marg0+Lgeptoindexphi|0]|0;
					if(L$ppre_0!==tmp1||(L$ppre_1+tmp5|0)!==(tmp0+1|0)){
						tmp0=tmp0+1|0;
						tmp1=tmp1;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
				L$ppre_0=Larg2.a5;
				L$ppre_1=Larg2.a5o|0;
			}
			Larg2.a5=L$ppre_0;
			Larg2.a5o=L$ppre_1+tmp5|0;
		}
	}
}
function ___lockfile(Larg0){
	var tmp0=0,L$ppn3$pph=0,L$pph=0;
	L$ppn3$pph=Larg0.i19|0;
	tmp0=___dummy_thread.i6|0;
	if((L$ppn3$pph& -1073741825|0)===(tmp0|0))return 0|0;
	L$pph=(L$ppn3$pph|0)===0?tmp0|0:L$ppn3$pph|0;
	Larg0.i19=L$pph;
	if((L$ppn3$pph|0)===0)return 1|0;
	Larg0.i19=(L$pph|0)===0?tmp0|1073741824|0:L$pph|0;
	if((L$pph|0)===0)return 1|0;
	while(1){
		if((L$ppn3$pph&1073741824|0)!==0){
			L$ppn3$pph=L$pph;
			continue;
		}
		L$pph=(L$pph|0)===(L$ppn3$pph|0)?L$ppn3$pph|1073741824|0:L$pph|0;
		L$ppn3$pph=L$pph;
		continue;
	}
}
function ___towrite(Larg0){
	var tmp0=null,tmp1=0,tmp2=0;
	tmp2=Larg0.i18|0;
	Larg0.i18=tmp2-1|tmp2;
	tmp2=Larg0.i0|0;
	if((tmp2&8|0)!==0){
		Larg0.i0=tmp2|32;
		return  -1|0;
	}
	Larg0.a2=nullArray;
	Larg0.a1=nullArray;
	tmp0=Larg0.a11;
	tmp2=Larg0.a11o|0;
	Larg0.a7=tmp0;
	Larg0.a7o=tmp2;
	Larg0.a5=tmp0;
	Larg0.a5o=tmp2;
	tmp1=Larg0.i12|0;
	Larg0.a4=tmp0;
	Larg0.a4o=tmp2+tmp1|0;
	return 0|0;
}
function _fflush(){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=0,tmp4=null;
	if((___stdout_FILE.i19|0)>-1)tmp1=___lockfile(___stdout_FILE)|0;
	else{
		tmp1=0;
	}
	tmp2=___stdout_FILE.a5;
	tmp3=___stdout_FILE.a5o|0;
	tmp4=___stdout_FILE.a7;
	tmp0=___stdout_FILE.a7o|0;
	a:{
		b:{
			if(tmp2!==tmp4||tmp3!==tmp0){
				___stdout_FILE.a9(___stdout_FILE,nullArray,0,0)|0;
				tmp2=___stdout_FILE.a5;
				tmp3=___stdout_FILE.a5o|0;
				if(tmp2===nullArray&&tmp3===0){
					if((tmp1|0)!==0)break b;
					break a;
				}
			}
			tmp2=___stdout_FILE.a1;
			tmp4=___stdout_FILE.a2;
			if(tmp2!==tmp4||0!==0){
				tmp3=(0)-(0)|0;
				___stdout_FILE.a10(___stdout_FILE,tmp3,tmp3>>31,1)|0;
			}
			___stdout_FILE.a4=nullArray;
			___stdout_FILE.a4o=0;
			___stdout_FILE.a7=nullArray;
			___stdout_FILE.a7o=0;
			___stdout_FILE.a5=nullArray;
			___stdout_FILE.a5o=0;
			___stdout_FILE.a2=nullArray;
			___stdout_FILE.a1=nullArray;
			if((tmp1|0)===0)break a;
		}
		___stdout_FILE.i19=0;
	}
}
function __ZNSsC2ERKSs(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null,Lprol$piter=0,Lxtraiter=0,Lgeptoindexphi3=0,Lgeptoindexphi=0;
	tmp0=Larg1.a2;
	tmp1=Larg1.i1|0;
	if(tmp1>>>0>2147483631)__ZNKSs20__throw_length_errorB7v160000Ev();
	;
	Lprol$piter=(tmp1& -16)+16|0;
	tmp2=new Uint8Array(Lprol$piter/1|0);
	Larg0.a2=tmp2;
	Larg0.i0=(Lprol$piter<<1)+1|0;
	Larg0.i1=tmp1;
	Lprol$piter=0>0?1:0;
	if(((0+tmp1|0)|0)!==((0)|0))if((tmp1|0)!==0)if(Lprol$piter){
		Lxtraiter=tmp1&3;
		if((Lxtraiter|0)!==0){
			Lprol$piter=tmp1;
			Lgeptoindexphi3=tmp1;
			Lgeptoindexphi=0;
			while(1){
				Lprol$piter=Lprol$piter-1|0;
				Lgeptoindexphi3=Lgeptoindexphi3-1|0;
				tmp2[Lgeptoindexphi3]=tmp0[Lprol$piter]|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if((Lgeptoindexphi|0)!==(Lxtraiter|0))continue;
				break;
			}
		}else{
			Lprol$piter=tmp1;
			Lgeptoindexphi3=tmp1;
		}
		if(tmp1-1>>>0>=3)while(1){
			tmp2[(0+Lgeptoindexphi3|0)+ -1|0]=tmp0[(0+Lprol$piter|0)+ -1|0]|0;
			tmp2[(0+Lgeptoindexphi3|0)+ -2|0]=tmp0[(0+Lprol$piter|0)+ -2|0]|0;
			tmp2[(0+Lgeptoindexphi3|0)+ -3|0]=tmp0[(0+Lprol$piter|0)+ -3|0]|0;
			Lprol$piter=Lprol$piter-4|0;
			Lgeptoindexphi3=Lgeptoindexphi3-4|0;
			tmp2[Lgeptoindexphi3]=tmp0[Lprol$piter]|0;
			if(tmp2!==tmp2||0!==(0+Lgeptoindexphi3|0))continue;
			break;
		}
	}else{
		Lxtraiter=tmp1&7;
		if((Lxtraiter|0)!==0){
			Lprol$piter=0;
			Lgeptoindexphi3=0;
			Lgeptoindexphi=0;
			while(1){
				tmp2[Lgeptoindexphi3]=tmp0[Lgeptoindexphi]|0;
				Lprol$piter=Lprol$piter+1|0;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if((Lprol$piter|0)!==(Lxtraiter|0))continue;
				break;
			}
		}else{
			Lgeptoindexphi3=0;
			Lgeptoindexphi=0;
		}
		if(tmp1-1>>>0>=7)while(1){
			tmp2[Lgeptoindexphi3]=tmp0[Lgeptoindexphi]|0;
			tmp2[(0+Lgeptoindexphi3|0)+1|0]=tmp0[(0+Lgeptoindexphi|0)+1|0]|0;
			tmp2[(0+Lgeptoindexphi3|0)+2|0]=tmp0[(0+Lgeptoindexphi|0)+2|0]|0;
			tmp2[(0+Lgeptoindexphi3|0)+3|0]=tmp0[(0+Lgeptoindexphi|0)+3|0]|0;
			tmp2[(0+Lgeptoindexphi3|0)+4|0]=tmp0[(0+Lgeptoindexphi|0)+4|0]|0;
			tmp2[(0+Lgeptoindexphi3|0)+5|0]=tmp0[(0+Lgeptoindexphi|0)+5|0]|0;
			tmp2[(0+Lgeptoindexphi3|0)+6|0]=tmp0[(0+Lgeptoindexphi|0)+6|0]|0;
			tmp2[(0+Lgeptoindexphi3|0)+7|0]=tmp0[(0+Lgeptoindexphi|0)+7|0]|0;
			Lgeptoindexphi3=Lgeptoindexphi3+8|0;
			if(tmp2!==tmp2||(0+tmp1|0)!==(0+Lgeptoindexphi3|0)){
				Lgeptoindexphi=Lgeptoindexphi+8|0;
				continue;
			}
			break;
		}
	}
	tmp2[tmp1]=0;
}
function ___vfprintf(Larg0,Larg1,Marg1,Larg2,Marg2){
	Larg2={d:Larg2,o:Marg2};
	var LmergedArray=null,tmp1=null,tmp2=null,tmp3=0,tmp4=0,Lgeptoindexphi=0,Lallocadecay1=null,tmp7=null,tmp8=0;
	LmergedArray=[nullObj,nullObj];
	LmergedArray[0]=Larg2;
	tmp1=new Int32Array(10);
	Lgeptoindexphi=0;
	while(1){
		tmp1[Lgeptoindexphi]=0;
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(tmp1!==tmp1||10!==(0+Lgeptoindexphi|0))continue;
		break;
	}
	Lallocadecay1=createArray_struct$p_Z3arg(10);
	Lallocadecay1=Lallocadecay1[0];
	tmp2=new Uint8Array(80);
	LmergedArray[1]={d:LmergedArray[0].d,o:LmergedArray[0].o};
	if(((_printf_core(null,Larg1,Marg1,LmergedArray[1],Lallocadecay1,tmp1[0])|0)|0)>=0){
		if((Larg0.i19|0)>-1)Lgeptoindexphi=___lockfile(Larg0)|0;
		else{
			Lgeptoindexphi=0;
		}
		tmp3=Larg0.i0|0;
		if((Larg0.i18|0)<1)Larg0.i0=tmp3& -33;
		if((Larg0.i12|0)!==0){
			tmp7=Larg0.a4;
			tmp8=Larg0.a4o|0;
			tmp4=tmp7===nullArray&&tmp8===0?1:0;
			tmp8=0;
			tmp7=nullArray;
		}else{
			tmp7=Larg0.a11;
			tmp8=Larg0.a11o|0;
			Larg0.a11=tmp2;
			Larg0.a11o=0;
			Larg0.i12=80;
			Larg0.a4=nullArray;
			Larg0.a4o=0;
			Larg0.a7=nullArray;
			Larg0.a7o=0;
			Larg0.a5=nullArray;
			Larg0.a5o=0;
			tmp4=1;
		}
		a:{
			if(tmp4)if(((___towrite(Larg0)|0)|0)!==0)break a;
			_printf_core(Larg0,Larg1,Marg1,LmergedArray[1],Lallocadecay1,tmp1[0])|0;
		}
		if(tmp7!==nullArray||tmp8!==0){
			Larg0.a9(Larg0,nullArray,0,0)|0;
			Larg0.a11=tmp7;
			Larg0.a11o=tmp8;
			Larg0.i12=0;
			Larg0.a4=nullArray;
			Larg0.a4o=0;
			Larg0.a7=nullArray;
			Larg0.a7o=0;
			Larg0.a5=nullArray;
			Larg0.a5o=0;
		}
		Larg0.i0=Larg0.i0|tmp3&32;
		if((Lgeptoindexphi|0)!==0)Larg0.i19=0;
	}
	LmergedArray[1]=null;
}
function _printf_core(Larg0,Larg1,Marg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=null,tmp2=0,Lgeptoindexphi10=0,Lgeptoindexphi15=0,tmp5=0,tmp6=0,Lgeptoindexphi=0,tmp8=0,tmp9=null,LsubSel=0,L$poptgep35$poptgep$poptgepsqueezed=null,Lsmax_select5=0,tmp13=0;
	tmp0={a0:new Int32Array(2),d1:-0.,a2:nullArray,a2o:0};
	tmp1=new Uint8Array(40);
	tmp2=Larg0===null?1:0;
	tmp5=0;
	Lgeptoindexphi15=0;
	Lgeptoindexphi10=0;
	a:while(1){
		while(1){
			if((Lgeptoindexphi15|0)<=(2147483647-tmp5|0)){
				tmp5=tmp5+Lgeptoindexphi15|0;
				tmp6=Larg1[Marg1+Lgeptoindexphi10|0]|0;
				if((tmp6&255)===0)return (tmp2?0|0:tmp5|0)|0;
				Lgeptoindexphi=Lgeptoindexphi10;
				while(1){
					if((tmp6&255)!==0)if((tmp6&255)!==37){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						tmp6=Larg1[Marg1+Lgeptoindexphi|0]|0;
						continue;
					}
					break;
				}
				Lgeptoindexphi15=(Marg1+Lgeptoindexphi|0)-(Marg1+Lgeptoindexphi10|0)|0;
				tmp6=2147483647-tmp5|0;
				if((Lgeptoindexphi15|0)<=(tmp6|0)){
					if(!(tmp2))if((Larg0.i0&32|0)===0)___fwritex(Larg1,Marg1+Lgeptoindexphi10|0,Lgeptoindexphi15,Larg0);
					if((Lgeptoindexphi15|0)!==0){
						Lgeptoindexphi10=Lgeptoindexphi;
						continue;
					}
					if(tmp2)return 0|0;
					tmp8=Larg1[(Marg1+Lgeptoindexphi|0)+1|0]|0;
					_pop_arg(tmp0,_states$p805[(tmp8<<24>>24)-65|0]|0,Larg2);
					tmp8=Larg1[(Marg1+Lgeptoindexphi|0)+1|0]<<24>>24;
					if((tmp8|0)===99){
						tmp1[39]=tmp0.a0[0]|0;
						Lgeptoindexphi10=39;
						tmp9=tmp1;
						LsubSel=40;
						L$poptgep35$poptgep$poptgepsqueezed=tmp1;
						tmp8=0;
						Lgeptoindexphi15=1;
					}else if(((tmp8-103|0)^2)+1>>>0<=1){
						L$poptgep35$poptgep$poptgepsqueezed=tmp0.a0;
						Lgeptoindexphi10=L$poptgep35$poptgep$poptgepsqueezed[0]|0;
						LsubSel=L$poptgep35$poptgep$poptgepsqueezed[1]|0;
						if((LsubSel|0)<0){
							LsubSel=(Lgeptoindexphi10|0)!==0?LsubSel^ -1|0:-LsubSel|0;
							Lgeptoindexphi10=-Lgeptoindexphi10|0;
							L$poptgep35$poptgep$poptgepsqueezed[0]=Lgeptoindexphi10;
							L$poptgep35$poptgep$poptgepsqueezed[1]=LsubSel;
							tmp8=1;
						}else{
							tmp8=0;
						}
						if((LsubSel|0)!==0){
							Lsmax_select5=Lgeptoindexphi10;
							Lgeptoindexphi15=0;
							while(1){
								Lgeptoindexphi10=___udivti3(Lsmax_select5,LsubSel,10)|0;
								tmp13=_cheerpSretSlot|0;
								Lgeptoindexphi15=Lgeptoindexphi15-1|0;
								tmp1[40+Lgeptoindexphi15|0]=((__imul(Lgeptoindexphi10,246)|0)+Lsmax_select5|0)+48|0;
								if(LsubSel>>>0>9){
									LsubSel=tmp13;
									Lsmax_select5=Lgeptoindexphi10;
									continue;
								}
								break;
							}
						}else{
							Lgeptoindexphi15=0;
						}
						if((Lgeptoindexphi10|0)!==0)while(1){
							LsubSel=(Lgeptoindexphi10>>>0)/10|0;
							Lgeptoindexphi15=Lgeptoindexphi15-1|0;
							tmp1[40+Lgeptoindexphi15|0]=((__imul(LsubSel,246)|0)+Lgeptoindexphi10|0)+48|0;
							if(Lgeptoindexphi10>>>0>=10){
								Lgeptoindexphi10=LsubSel;
								continue;
							}
							break;
						}
						if(0)break a;
						if(1){
							LsubSel=((40)-(40+Lgeptoindexphi15|0)|0)+((L$poptgep35$poptgep$poptgepsqueezed[1]|L$poptgep35$poptgep$poptgepsqueezed[0]|0)===0?1:0)|0;
							L$poptgep35$poptgep$poptgepsqueezed=tmp1;
							Lgeptoindexphi10=40+Lgeptoindexphi15|0;
							Lgeptoindexphi15=(LsubSel|0)>-1?LsubSel|0: -1|0;
							LsubSel=40;
							tmp9=tmp1;
						}else{
							Lgeptoindexphi10=40;
							tmp9=tmp1;
							LsubSel=40;
							L$poptgep35$poptgep$poptgepsqueezed=tmp1;
							Lgeptoindexphi15=0;
						}
					}else{
						tmp9=tmp0.a2;
						tmp8=tmp0.a2o|0;
						L$poptgep35$poptgep$poptgepsqueezed=tmp9!==nullArray||tmp8!==0?tmp9:_$pstr$p2$p809;
						Lgeptoindexphi10=tmp9!==nullArray||tmp8!==0?tmp8:0;
						if(0){
							Lgeptoindexphi15=0;
						}else{
							tmp8=2147483647;
							LsubSel=0;
							while(1){
								if((L$poptgep35$poptgep$poptgepsqueezed[Lgeptoindexphi10+LsubSel|0]&255)!==0){
									tmp8=tmp8-1|0;
									if((tmp8|0)!==0){
										LsubSel=LsubSel+1|0;
										continue;
									}
									Lgeptoindexphi15=2147483647;
								}else{
									Lgeptoindexphi15=(Lgeptoindexphi10+LsubSel|0)-(Lgeptoindexphi10)|0;
								}
								break;
							}
						}
						if((L$poptgep35$poptgep$poptgepsqueezed[Lgeptoindexphi10+Lgeptoindexphi15|0]&255)!==0)break a;
						LsubSel=Lgeptoindexphi10+Lgeptoindexphi15|0;
						tmp9=L$poptgep35$poptgep$poptgepsqueezed;
						tmp8=0;
					}
					LsubSel=(LsubSel)-(Lgeptoindexphi10)|0;
					Lsmax_select5=(Lgeptoindexphi15|0)>(LsubSel|0)?Lgeptoindexphi15|0:LsubSel|0;
					if((Lsmax_select5|0)<=(2147483647-tmp8|0)){
						tmp13=Lsmax_select5+tmp8|0;
						Lgeptoindexphi15=(tmp13|0)>0?tmp13|0:0|0;
						if((Lgeptoindexphi15|0)<=(tmp6|0)){
							_pad$p792(Larg0,32,Lgeptoindexphi15,tmp13,0);
							if((Larg0.i0&32|0)===0)___fwritex(_$pstr$p790,0,tmp8,Larg0);
							_pad$p792(Larg0,48,Lgeptoindexphi15,tmp13,65536);
							_pad$p792(Larg0,48,Lsmax_select5,LsubSel,0);
							if((Larg0.i0&32|0)===0)___fwritex(L$poptgep35$poptgep$poptgepsqueezed,Lgeptoindexphi10,LsubSel,Larg0);
							_pad$p792(Larg0,32,Lgeptoindexphi15,tmp13,8192);
							Lgeptoindexphi10=Lgeptoindexphi+2|0;
							continue a;
						}
					}
				}
			}
			break;
		}
		break;
	}
	___dummy_thread.i7=75;
	return  -1|0;
}
function _pop_arg(Larg0,Larg1,Larg2){
	var L$poptgep26$poptgep$poptgepsqueezed=null,L$poptgep$poptgep$poptgepsqueezed=null,Lsext44=0,tmp3=0,tmp4=-0.;
	switch(Larg1|0){
		case 9:
		L$poptgep$poptgep$poptgepsqueezed=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep$poptgep$poptgepsqueezed===0?nullObj:L$poptgep$poptgep$poptgepsqueezed;
		Larg0.a2=L$poptgep$poptgep$poptgepsqueezed.d;
		Larg0.a2o=L$poptgep$poptgep$poptgepsqueezed.o;
		break;
		case 10:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=Lsext44>>31;
		break;
		case 11:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=0;
		break;
		case 13:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=Lsext44>>31;
		break;
		case 14:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=0;
		break;
		case 12:
		Lsext44=handleVAArg(Larg2);
		tmp3=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=tmp3;
		break;
		case 15:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		Lsext44<<=16;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44>>16;
		L$poptgep$poptgep$poptgepsqueezed[1]=Lsext44>>31;
		break;
		case 16:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44&65535;
		L$poptgep$poptgep$poptgepsqueezed[1]=0;
		break;
		case 17:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		Lsext44<<=24;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44>>24;
		L$poptgep$poptgep$poptgepsqueezed[1]=Lsext44>>31;
		break;
		case 18:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44&255;
		L$poptgep$poptgep$poptgepsqueezed[1]=0;
		break;
		case 19:
		Lsext44=handleVAArg(Larg2);
		tmp3=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=tmp3;
		break;
		case 20:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=0;
		break;
		case 21:
		Lsext44=handleVAArg(Larg2);
		tmp3=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=tmp3;
		break;
		case 22:
		Lsext44=handleVAArg(Larg2);
		tmp3=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=tmp3;
		break;
		case 23:
		Lsext44=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep$poptgep$poptgepsqueezed[0]=Lsext44;
		L$poptgep$poptgep$poptgepsqueezed[1]=Lsext44>>31;
		break;
		case 24:
		L$poptgep$poptgep$poptgepsqueezed=handleVAArg(Larg2);
		L$poptgep$poptgep$poptgepsqueezed=L$poptgep$poptgep$poptgepsqueezed===0?nullObj:L$poptgep$poptgep$poptgepsqueezed;
		L$poptgep26$poptgep$poptgepsqueezed=Larg0.a0;
		L$poptgep26$poptgep$poptgepsqueezed[0]=(L$poptgep$poptgep$poptgepsqueezed.o);
		L$poptgep26$poptgep$poptgepsqueezed[1]=0;
		break;
		case 25:
		tmp4=handleVAArg(Larg2);
		Larg0.d1=tmp4;
		break;
		case 26:
		tmp4=handleVAArg(Larg2);
		Larg0.d1=tmp4;
		break;
		default:
	}
}
function _pad$p792(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,Lsmin_select=0,tmp2=0,Lgeptoindexphi=0;
	tmp0=new Uint8Array(256);
	if((Larg2|0)>(Larg3|0))if((Larg4&73728|0)===0){
		tmp2=Larg2-Larg3|0;
		Lsmin_select=tmp2>>>0<256?tmp2|0:256|0;
		if((Lsmin_select|0)!==0){
			Lgeptoindexphi=0;
			while(1){
				tmp0[Lgeptoindexphi]=Larg1;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if(tmp0!==tmp0||Lsmin_select!==(0+Lgeptoindexphi|0))continue;
				break;
			}
		}
		if(tmp2>>>0>255)while(1){
			if((Larg0.i0&32|0)===0)___fwritex(tmp0,0,256,Larg0);
			tmp2=tmp2-256|0;
			if(tmp2>>>0>255)continue;
			break;
		}
		if((Larg0.i0&32|0)===0)___fwritex(tmp0,0,tmp2,Larg0);
	}
}
function ___assert_fail(Larg0,Marg0,Larg1,Marg1,Larg2,Larg3,Marg3){
	Larg0={d:Larg0,o:Marg0};
	Larg1={d:Larg1,o:Marg1};
	Larg3={d:Larg3,o:Marg3};
	_fflush();
	___fprintf(null,nullObj,Larg0,Larg1,Larg3,Larg2);
	_abort();
	;
}
function ___fprintf(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[nullObj];
	tmp0[0]={d:arguments,o:___fprintf.length};
	tmp1=tmp0[0];
	___vfprintf(___stderr_FILE,_$pstr$p105,0,tmp1.d,tmp1.o);
	tmp0[0]=null;
}
function ___printf(Larg0,Marg0){
	var tmp0=null,tmp1=null;
	tmp0=[nullObj];
	tmp0[0]={d:arguments,o:___printf.length};
	tmp1=tmp0[0];
	___vfprintf(___stdout_FILE,Larg0,Marg0,tmp1.d,tmp1.o);
	tmp0[0]=null;
}
function ___cheerp_init_tls(){
	var tmp0=null,tmp1=0;
	tmp0=_main_tls$p1.a1;
	tmp1=_main_tls$p1.a1o|0;
	if(tmp0===nullArray&&tmp1===0){
		tmp1=___tlsImage|0;
		_main_tls$p1.a1=nullArray;
		_main_tls$p1.a1o=tmp1>>0;
		tmp1=___tlsImageSize|0;
		_main_tls$p1.i3=tmp1;
		_main_tls$p1.i2=___tlsImageSize|0;
		_main_tls$p1.i4=16;
		_main_tls$p1.i5=tmp1;
		___libc.i6=1;
		___libc.a3=_main_tls$p1;
		___libc.i5=16;
		___libc.i4=tmp1+135|0;
		___dummy_thread.a0=___dummy_thread;
		___libc.i0=___libc.i0& -256|1;
		___dummy_thread.i8=2;
		___dummy_thread.i6=1;
		___dummy_thread.a22=___libc.a8[0];
		___dummy_thread.a19.a0[0]={d:___dummy_thread.a19.a0,o:0};
		___dummy_thread.i4=0;
		___dummy_thread.a2=___dummy_thread;
		___dummy_thread.a3=___dummy_thread;
	}
}
function __ZNSs7reserveEj(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,tmp4=0,Lprol$piter=0,Lgeptoindexphi15=0,Lgeptoindexphi=0,Lxtraiter=0,Lgeptoindexphi3=0;
	if(Larg1>>>0>2147483631)__ZNKSs20__throw_length_errorB7v160000Ev();
	;
	tmp2=Larg0.i0|0;
	if(tmp2>>>0<2){
		tmp3=0;
	}else{
		tmp3=(tmp2>>>1)-1|0;
	}
	a:if(tmp3>>>0<Larg1>>>0){
		tmp3=Larg0.i1|0;
		tmp4=(tmp3>>>0>Larg1>>>0?tmp3|0:Larg1|0)& -16;
		if(tmp2>>>0>=2)if((tmp4|0)===((tmp2>>>1)-16|0))break a;
		tmp4=tmp4+16|0;
		tmp0=new Uint8Array(tmp4/1|0);
		tmp1=Larg0.a2;
		if(tmp1!==nullArray||0!==0){
			tmp2=Larg0.i1|0;
			Lprol$piter=0<0?1:0;
			Lgeptoindexphi15=tmp2+1|0;
			if(((0+Lgeptoindexphi15|0)|0)!==((0)|0))if((Lgeptoindexphi15|0)!==0)if(Lprol$piter){
				Lgeptoindexphi=Lgeptoindexphi15&3;
				if((Lgeptoindexphi|0)!==0){
					Lprol$piter=Lgeptoindexphi15;
					Lxtraiter=0;
					while(1){
						Lprol$piter=Lprol$piter-1|0;
						Lgeptoindexphi15=Lgeptoindexphi15-1|0;
						tmp0[Lgeptoindexphi15]=tmp1[Lprol$piter]|0;
						Lxtraiter=Lxtraiter+1|0;
						if((Lxtraiter|0)!==(Lgeptoindexphi|0))continue;
						break;
					}
				}else{
					Lprol$piter=Lgeptoindexphi15;
				}
				if(tmp2>>>0>=3)while(1){
					tmp0[(0+Lgeptoindexphi15|0)+ -1|0]=tmp1[(0+Lprol$piter|0)+ -1|0]|0;
					tmp0[(0+Lgeptoindexphi15|0)+ -2|0]=tmp1[(0+Lprol$piter|0)+ -2|0]|0;
					tmp0[(0+Lgeptoindexphi15|0)+ -3|0]=tmp1[(0+Lprol$piter|0)+ -3|0]|0;
					Lprol$piter=Lprol$piter-4|0;
					Lgeptoindexphi15=Lgeptoindexphi15-4|0;
					tmp0[Lgeptoindexphi15]=tmp1[Lprol$piter]|0;
					if(tmp0!==tmp0||0!==(0+Lgeptoindexphi15|0))continue;
					break;
				}
			}else{
				Lxtraiter=Lgeptoindexphi15&7;
				if((Lxtraiter|0)!==0){
					Lprol$piter=0;
					Lgeptoindexphi3=0;
					Lgeptoindexphi=0;
					while(1){
						tmp0[Lgeptoindexphi3]=tmp1[Lgeptoindexphi]|0;
						Lprol$piter=Lprol$piter+1|0;
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if((Lprol$piter|0)!==(Lxtraiter|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi3=0;
					Lgeptoindexphi=0;
				}
				if(tmp2>>>0>=7)while(1){
					tmp0[Lgeptoindexphi3]=tmp1[Lgeptoindexphi]|0;
					tmp0[(0+Lgeptoindexphi3|0)+1|0]=tmp1[(0+Lgeptoindexphi|0)+1|0]|0;
					tmp0[(0+Lgeptoindexphi3|0)+2|0]=tmp1[(0+Lgeptoindexphi|0)+2|0]|0;
					tmp0[(0+Lgeptoindexphi3|0)+3|0]=tmp1[(0+Lgeptoindexphi|0)+3|0]|0;
					tmp0[(0+Lgeptoindexphi3|0)+4|0]=tmp1[(0+Lgeptoindexphi|0)+4|0]|0;
					tmp0[(0+Lgeptoindexphi3|0)+5|0]=tmp1[(0+Lgeptoindexphi|0)+5|0]|0;
					tmp0[(0+Lgeptoindexphi3|0)+6|0]=tmp1[(0+Lgeptoindexphi|0)+6|0]|0;
					tmp0[(0+Lgeptoindexphi3|0)+7|0]=tmp1[(0+Lgeptoindexphi|0)+7|0]|0;
					Lgeptoindexphi3=Lgeptoindexphi3+8|0;
					if(tmp0!==tmp0||(0+Lgeptoindexphi15|0)!==(0+Lgeptoindexphi3|0)){
						Lgeptoindexphi=Lgeptoindexphi+8|0;
						continue;
					}
					break;
				}
			}
		}
		Larg0.i0=(tmp4<<1)+1|0;
		Larg0.i1=tmp3;
		Larg0.a2=tmp0;
	}
}
function __ZNSs9push_backEc(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=0;
	tmp2=Larg0.i0|0;
	if(tmp2>>>0<2){
		tmp2=0;
	}else{
		tmp2=(tmp2>>>1)-1|0;
	}
	tmp0=Larg0.i1|0;
	if((tmp0|0)===(tmp2|0))__ZNSs9__grow_byEjjjjjj(Larg0,tmp2,tmp2,tmp2);
	tmp1=Larg0.a2;
	Larg0.i1=tmp0+1|0;
	tmp1[tmp0]=Larg1;
	tmp1[(0+tmp0|0)+1|0]=0;
}
function ___syscall_tkill(){
	___syscall_exit();
	;
}
function ___syscall_exit(){
	__ZN12_GLOBAL__N_111raiseSignalEv();
	;
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
function ___syscall_main_environ(){
	var tmp0=0,tmp1=0,tmp2=0;
	tmp1=__ZL8buf_size|0;
	tmp2=0;
	while(1){
		tmp0=65536-tmp1|0;
		tmp1=__ZL8read_envPcjj(__ZL16argv_environ_buf,tmp1,tmp0,tmp2)|0;
		if((tmp1|0)!==0){
			if(tmp1>>>0>tmp0>>>0)_abort();
			;
			tmp1=(__ZL8buf_size|0)+tmp1|0;
			__ZL8buf_size=tmp1;
			tmp2=tmp2+1|0;
			if((tmp2|0)!==64)continue;
			_abort();
			;
		}
		break;
	}
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
function ___syscall_writev(Larg0,Marg0,Larg1){
	return (__ZN12_GLOBAL__N_117do_syscall_writevEPK5iovecl(Larg0,Marg0,Larg1)|0)|0;
}
function __ZN12_GLOBAL__N_117do_syscall_writevEPK5iovecl(Larg0,Marg0,Larg1){
	var tmp0=null,tmp1=null,L$plcssa=0,tmp3=0,tmp4=0,tmp5=0,tmp6=0;
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
			tmp4=Larg0[Marg0+tmp3|0].i1|0;
			if((tmp4|0)!==0){
				L$plcssa=tmp4+L$plcssa|0;
				tmp0=Larg0[Marg0+tmp3|0].a0;
				tmp5=Larg0[Marg0+tmp3|0].a0o|0;
				if((tmp4|0)>0){
					tmp6=0;
					while(1){
						__ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h(tmp1,0,tmp0[tmp5+tmp6|0]|0);
						tmp6=tmp6+1|0;
						if((tmp6|0)!==(tmp4|0))continue;
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
			tmp4=oSlot;
			console.log(tmp1[tmp4]);
			tmp6=tmp5+1|0;
			if((tmp6|0)!==(tmp3|0)){
				tmp4=tmp6;
				tmp6=tmp5;
				tmp5=tmp4;
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
	var tmp0=0,L$psink=0,tmp2=0;
	L$psink=__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining|0;
	tmp2=Larg1&255;
	a:if((Larg1&255)<192){
		if((L$psink|0)===0){
			if(Larg1<<24<=-16777216)___assert_fail(_$pstr$p4$p427,0,_$pstr$p2$p13,0,79,___func__$p_ZN11CXUIConsole11processCharEhj,0);
			;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp2;
		}else{
			if((tmp2&192|0)!==128)___assert_fail(_$pstr$p1$p12,0,_$pstr$p2$p13,0,65,___func__$p_ZN11CXUIConsole11processCharEhj,0);
			;
			tmp2=(__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint<<6)+(tmp2&63)|0;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp2;
			L$psink=L$psink-1|0;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=L$psink;
			if((L$psink|0)!==0)break a;
		}
		__ZN12_GLOBAL__N_119CheerpStringBuilder15outputCodepointEj(Larg0,Marg0,tmp2);
	}else{
		if((L$psink|0)!==0)___assert_fail(_$pstr$p5$p428,0,_$pstr$p2$p13,0,90,___func__$p_ZN11CXUIConsole11processCharEhj,0);
		;
		if((Larg1&255)<224){
			tmp0=31;
			L$psink=1;
		}else{
			tmp0=(Larg1&255)<240?15|0:7|0;
			L$psink=(Larg1&255)<240?2|0:3|0;
		}
		__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=L$psink;
		__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp0&tmp2;
	}
}
function __ZN12_GLOBAL__N_119CheerpStringBuilder9getStringEv(Larg0,Marg0){
	return Larg0[Marg0];
}
function __ZN6client6TArrayIPNS_6StringEEixEd(Larg0,Larg1){
	oSlot=0+~~Larg1|0;
	return Larg0;
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
function _divmodti4(L$plow,L$phigh,L$plow1){
	var tmp0=0,tmp1=0,L$plcssa17=0,L$plcssa18=0,L$plcssa19=0,L$plcssa20=0,L$pnot12=0,tmp7=0,tmp8=0,tmp9=0;
	a:{
		if((L$phigh|0)!==0){
			L$plcssa20=1;
			L$plcssa19=0;
			L$plcssa18=L$plow1;
			L$plcssa17=0;
		}else{
			if(L$plow1>>>0>=L$plow>>>0){
				L$plcssa17=0;
				L$plcssa18=L$plow1;
				L$plcssa19=0;
				L$plcssa20=1;
				break a;
			}
			L$plcssa20=1;
			L$plcssa19=0;
			L$plcssa18=L$plow1;
			L$plcssa17=0;
		}
		while(1){
			L$plcssa17=(L$plcssa17<<1)+(L$plcssa18>>>31)|0;
			L$plcssa19=(L$plcssa19<<1)+(L$plcssa20>>>31)|0;
			L$plcssa20<<=1;
			L$pnot12=(L$plcssa19|L$plcssa20|0)!==0?1:0;
			L$plcssa18<<=1;
			if(L$plcssa17>>>0>=L$phigh>>>0){
				if(L$plcssa18>>>0>=L$plow>>>0)break a;
				if((L$plcssa17|0)!==(L$phigh|0))break a;
			}
			if(L$pnot12)if((L$plcssa17|0)>-1)continue;
			break;
		}
	}
	if((L$plcssa19|L$plcssa20|0)===0){
		_cheerpSretSlot=0;
		return 0|0;
	}
	L$pnot12=L$plow;
	tmp9=L$phigh;
	tmp8=0;
	tmp7=0;
	while(1){
		tmp0=L$pnot12>>>0>=L$plcssa18>>>0?1:0;
		tmp1=(tmp9|0)===(L$plcssa17|0)?1:0;
		a:{
			if(tmp9>>>0<=L$plcssa17>>>0){
				if(!(tmp0))break a;
				if(!(tmp1))break a;
			}
			tmp9=(tmp9-L$plcssa17|0)+((L$pnot12>>>0<L$plcssa18>>>0?1:0)<<31>>31)|0;
			L$pnot12=L$pnot12-L$plcssa18|0;
			tmp7|=L$plcssa19;
			tmp8|=L$plcssa20;
		}
		L$plcssa20=(L$plcssa19<<31)+(L$plcssa20>>>1)|0;
		L$plcssa18=(L$plcssa17<<31)+(L$plcssa18>>>1)|0;
		L$plcssa19>>>=1;
		if((L$plcssa19|L$plcssa20|0)!==0){
			L$plcssa17>>>=1;
			continue;
		}
		break;
	}
	_cheerpSretSlot=tmp7;
	return tmp8|0;
}
function ___udivti3(L$plow,L$phigh,L$plow1){
	return (_divmodti4(L$plow,L$phigh,L$plow1)|0)|0;
}
function __start(){
	___cheerp_init_tls();
	___syscall_main_environ();
	__ZN7CheerpX14CheerpOSDevice7fdDescsE=new Array();
}
var __ZN7CheerpX14CheerpOSDevice7fdDescsE=null;
var __ZL8buf_size=0;
var __ZL16argv_environ_buf=new Uint8Array(65536);
var __ZGVZL8read_envPcjjE14client_environ=0;
var __ZZL8read_envPcjjE14client_environ=null;
var _main_tls$p1={a0:null,a1:nullArray,a1o:0,i2:0,i3:0,i4:0,i5:0};
var ___tlsImage=0;
var ___tlsImageSize=1048584;
var ___libc=new constructor_struct$p_Z6__libc();
var ___c_locale=[null,null,null,null,null,null];
var ___dummy_thread={a0:null,a1:null,a2:null,a3:null,i4:0,i5:0,i6:0,i7:0,i8:0,i9:0,i10:0,a11:null,i12:0,a13:null,i14:0,i15:0,a16:null,a17:null,a18:null,a19:{a0:[nullObj],i1:0,a2:null},i20:0,i21:0,a22:___c_locale[0],a23:[0],a24:null,a25:null};
var __ZN7CheerpX5Linux6eventsE=[null,null,null,null];
var _NoopCoro$pFrame$pConst$p118=[{a0:___NoopCoro_ResumeDestroy$p119,a1:___NoopCoro_ResumeDestroy$p119}];
var $NoopCoro$pFrame$pConst$p118=0;
var HEAP32=null;
var _$pstr$p75$p120=new Uint8Array([115,45,62,97,32,61,61,32,110,117,108,108,112,116,114,0]);
var _$pstr$p76$p121=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,99,104,101,101,114,112,111,115,47,99,111,114,111,47,115,117,115,112,101,110,100,101,114,46,104,0]);
var ___func__$p_ZN9SuspenderIjE7AwaiterC2EPS0_=new Uint8Array([65,119,97,105,116,101,114,0]);
var _buf$p768=new Uint8Array(8);
var ___stderr_FILE={i0:5,a1:nullArray,a2:nullArray,a3:___stdio_close,a4:nullArray,a4o:0,a5:nullArray,a5o:0,a6:null,a7:nullArray,a7o:0,a8:null,a9:___stdio_write,a10:___stdio_seek,a11:_buf$p768,a11o:8,i12:0,a13:null,a14:null,i15:2,i16:0,i17:0,i18:0,i19:-1,i20:-1,a21:null,a22:new Int32Array(6),a23:null,a24:null,a25:null,a26:null,a27:null,a28:null};
var _$pstr$p105=new Uint8Array([65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,32,40,37,115,58,32,37,115,58,32,37,100,41,10,0]);
var _states$p805=new Uint8Array([25,0,10,0,25,25,25,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,25,0,17,10,25,25,25,3,10,7,0,1,27,9,11,24,0,0,9,6,11,0,0,11,0,6,25,0,0,0,25,25,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,25,0,10,13,25,25,25,0,13,0,0,2,0,9,14,0,0,0,9,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,19,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,4,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,17,0,0,0,0,17,0,0,0,0,9,18,0,0,0,0,0,18,0,0,18,0,0,26,0,0,0,26,26,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,26,26,26,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,23,0,0,0,0,9,20,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,21,0,0,0,0,9,22,0,0,0,0,0,22,0,0,22,0,0]);
var _cheerpSretSlot=0;
var _$pstr$p2$p809=new Uint8Array([40,110,117,108,108,41,0]);
var _$pstr$p790=new Uint8Array([45,43,32,32,32,48,88,48,120,0]);
var __ZGVZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=0;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=null;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=0;
var _$pstr$p1$p12=new Uint8Array([40,99,104,32,38,32,49,57,50,41,32,61,61,32,49,50,56,0]);
var _$pstr$p2$p13=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,99,104,101,101,114,112,47,99,104,101,101,114,112,45,108,105,98,115,47,115,121,115,116,101,109,47,98,114,111,119,115,101,114,46,99,112,112,0]);
var ___func__$p_ZN11CXUIConsole11processCharEhj=new Uint8Array([112,114,111,99,101,115,115,67,104,97,114,0]);
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=0;
var _$pstr$p4$p427=new Uint8Array([99,104,32,60,32,49,50,56,117,0]);
var _$pstr$p5$p428=new Uint8Array([114,101,109,97,105,110,105,110,103,32,61,61,32,48,0]);
var _aio_fd_cnt=0;
var _maplock={a0:new Int32Array(16),a1:[nullObj,nullObj,nullObj,nullObj,nullObj,nullObj,nullObj,nullObj]};
var _buf$p778=new Uint8Array(1032);
var ___stdout_FILE={i0:5,a1:nullArray,a2:nullArray,a3:___stdio_close,a4:nullArray,a4o:0,a5:nullArray,a5o:0,a6:null,a7:nullArray,a7o:0,a8:null,a9:___stdout_write,a10:___stdio_seek,a11:_buf$p778,a11o:8,i12:1024,a13:null,a14:null,i15:1,i16:0,i17:0,i18:0,i19:-1,i20:10,a21:null,a22:new Int32Array(6),a23:null,a24:null,a25:null,a26:null,a27:null,a28:null};
var _$pstr$p61=new Uint8Array([102,97,108,115,101,0]);
var _$pstr$p81$p123=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,99,120,117,105,97,112,112,46,104,0]);
var ___func__$p_ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb=new Uint8Array([112,111,115,116,82,101,113,117,101,115,116,0]);
var _$pstr$p28$p245=new Uint8Array([101,108,101,109,101,110,116,32,61,61,32,110,117,108,108,112,116,114,0]);
var _$pstr$p1$p210=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,99,120,117,105,99,111,110,115,111,108,101,46,99,112,112,0]);
var ___func__$p_ZN11CXUIConsole19setActivateCallbackEPFvjE=new Uint8Array([115,101,116,65,99,116,105,118,97,116,101,67,97,108,108,98,97,99,107,0]);
var ___func__$p_ZN11CXUIConsole16setWriteCallbackEPFvPN6client10Uint8ArrayEjE=new Uint8Array([115,101,116,87,114,105,116,101,67,97,108,108,98,97,99,107,0]);
var _$pstr$p21$p234=new Uint8Array([107,101,121,67,111,100,101,32,60,32,48,120,49,48,48,48,48,0]);
var ___func__$p_ZN11CXUIConsole12queueKeyCodeEjj=new Uint8Array([113,117,101,117,101,75,101,121,67,111,100,101,0]);
var __ZZN7CheerpX5Linux14flushKeyEventsEdE6table1=new Uint16Array([32817,32990,32819,32820,32821,32823,222,32825,32816,32824,32955,188,189,190,191]);
var __ZZN7CheerpX5Linux14flushKeyEventsEdE6table2=new Uint16Array([32954,186,32956,187,32958,32959,32818]);
var __ZZN7CheerpX5Linux14flushKeyEventsEdE6table3=new Uint16Array([219,220,221,32822,32957,192]);
var __ZZN7CheerpX5Linux14flushKeyEventsEdE6table4=new Uint16Array([32987,32988,32989,32960]);
var _$pstr$p22$p237=new Uint8Array([119,114,105,116,101,70,117,110,99,32,61,61,32,110,117,108,108,112,116,114,0]);
var ___func__$p_ZN11CXUIConsole10setElementEPN6client11HTMLElementE=new Uint8Array([115,101,116,69,108,101,109,101,110,116,0]);
var _$pstr$p15$p124=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,99,120,117,105,97,112,112,46,99,112,112,0]);
var ___func__$p_ZN7CheerpX5Linux3runEPN6client6StringEPNS1_6TArrayIS3_EEPNS1_12RunOptionalsE=new Uint8Array([114,117,110,0]);
var _$pstr$p10$p142=new Uint8Array([73,103,110,111,114,105,110,103,32,105,110,118,97,108,105,100,32,39,109,111,117,110,116,115,39,32,112,97,114,97,109,101,116,101,114,115,44,32,102,105,114,115,116,32,101,110,116,114,121,32,105,115,32,110,111,116,32,116,104,101,32,114,111,111,116,0]);
var _$pstr$p11$p143=new Uint8Array([73,103,110,111,114,105,110,103,32,105,110,118,97,108,105,100,32,48,45,108,101,110,103,116,104,32,39,109,111,117,110,116,115,39,32,112,97,114,97,109,101,116,101,114,0]);
var _$pstr$p78$p146=new Uint8Array([108,97,115,116,83,108,97,115,104,32,62,61,32,48,0]);
var ___func__$p_ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE=new Uint8Array([111,112,101,114,97,116,111,114,40,41,0]);
var _$pstr$p79$p147=new Uint8Array([100,105,114,0]);
var _$pstr$p6=new Uint8Array([47,0]);
var __ZN11CheerpXBase13cheerpOSStateE=0;
var __ZN11CheerpXBase22waitingForCheerpOSListE=null;
var _$pstr$p6$p34=new Uint8Array([99,120,83,116,97,114,116,32,62,32,48,0]);
var _$pstr$p1$p35=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,99,120,117,105,46,99,112,112,0]);
var ___func__$p_Z13getCheerpXUrlv=new Uint8Array([103,101,116,67,104,101,101,114,112,88,85,114,108,0]);
var _$pstr$p11$p40=new Uint8Array([117,114,108,83,116,97,114,116,32,62,32,48,0]);
var __ZTVN7CheerpX9IDBDeviceE={a0:null,a1:__ZN7CheerpX6Device17isWebCheerpDeviceEv,a2:__ZN7CheerpX6Device3runEPNS_5LinuxE,a3:__ZNK7CheerpX6Device16hasPendingWritesEv};
var __ZN7CheerpX6Device9lastDevIdE=1;
var __ZN11CheerpXBase7devicesE={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
var __ZTVN7CheerpX9WebDeviceE={a0:null,a1:__ZN7CheerpX9WebDevice17isWebCheerpDeviceEv,a2:__ZN7CheerpX6Device3runEPNS_5LinuxE,a3:__ZNK7CheerpX6Device16hasPendingWritesEv};
var _NoopCoro$pFrame$pConst=[{a0:___NoopCoro_ResumeDestroy,a1:___NoopCoro_ResumeDestroy}];
var $NoopCoro$pFrame$pConst=0;
var __ZTSN10__cxxabiv120__si_class_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTSN10__cxxabiv117__class_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTSN10__cxxabiv116__shim_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTVN10__cxxabiv117__class_type_infoE={a0:undefined,a1:__ZN10__cxxabiv117__class_type_infoD2Ev,a2:__ZN10__cxxabiv117__class_type_infoD0Ev,a3:__ZNK10__cxxabiv116__shim_type_info5noop1Ev,a4:__ZNK10__cxxabiv116__shim_type_info5noop2Ev,a5:__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb,a6:__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib,a7:__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib,a8:__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli};
var __ZTSSt9type_info=new Uint8Array([83,116,57,116,121,112,101,95,105,110,102,111,0]);
var __ZTISt9type_info={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt9type_info};
var __ZTIN10__cxxabiv116__shim_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv116__shim_type_infoE,a2:__ZTISt9type_info};
var __ZTIN10__cxxabiv117__class_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv117__class_type_infoE,a2:__ZTIN10__cxxabiv116__shim_type_infoE};
__ZTVN10__cxxabiv117__class_type_infoE.a0=__ZTIN10__cxxabiv117__class_type_infoE;
var __ZTIN10__cxxabiv120__si_class_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv120__si_class_type_infoE,a2:__ZTIN10__cxxabiv117__class_type_infoE};
var __ZTVN10__cxxabiv120__si_class_type_infoE={a0:__ZTIN10__cxxabiv120__si_class_type_infoE,a1:__ZN10__cxxabiv120__si_class_type_infoD2Ev,a2:__ZN10__cxxabiv120__si_class_type_infoD0Ev,a3:__ZNK10__cxxabiv116__shim_type_info5noop1Ev,a4:__ZNK10__cxxabiv116__shim_type_info5noop2Ev,a5:__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb,a6:__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib,a7:__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib,a8:__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli};
__ZTIN10__cxxabiv116__shim_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTIN10__cxxabiv117__class_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTIN10__cxxabiv120__si_class_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
var __ZTSSt12length_error=new Uint8Array([83,116,49,50,108,101,110,103,116,104,95,101,114,114,111,114,0]);
var __ZTSSt11logic_error=new Uint8Array([83,116,49,49,108,111,103,105,99,95,101,114,114,111,114,0]);
var __ZTSSt9exception=new Uint8Array([83,116,57,101,120,99,101,112,116,105,111,110,0]);
var __ZTISt9exception={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt9exception};
var __ZTISt11logic_error={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt11logic_error,a2:__ZTISt9exception};
var __ZTISt12length_error={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt12length_error,a2:__ZTISt11logic_error};
var __ZZN10__cxxabiv19Exception9allocatorEvE6result=null;
var __ZTVSt11logic_error={a0:__ZTISt11logic_error,a1:__ZNSt11logic_errorD2Ev,a2:__ZNSt11logic_errorD0Ev,a3:__ZNKSt11logic_error4whatEv};
var __ZTVSt12length_error={a0:__ZTISt12length_error,a1:__ZNSt12length_errorD2Ev,a2:__ZNSt12length_errorD0Ev,a3:__ZNKSt11logic_error4whatEv};
var __ZTVN7CheerpX5LinuxE={a0:null,a1:__ZN7CheerpX5Linux12cheerpOSInitEv};
var _$pstr$p16$p148=new Uint8Array([100,0]);
var ___func__$p_ZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageE=new Uint8Array([104,97,110,100,108,101,67,111,114,101,77,101,115,115,97,103,101,0]);
var _$pstr$p17$p149=new Uint8Array([109,45,62,103,101,116,95,115,108,105,99,101,115,40,41,46,103,101,116,95,108,101,110,103,116,104,40,41,32,61,61,32,49,0]);
var _$pstr$p19$p153=new Uint8Array([111,112,46,115,108,105,99,101,45,62,103,101,116,95,98,117,102,79,102,102,115,101,116,40,41,32,61,61,32,115,108,105,99,101,45,62,103,101,116,95,98,117,102,79,102,102,115,101,116,40,41,0]);
var _$pstr$p20$p154=new Uint8Array([111,112,46,115,108,105,99,101,45,62,103,101,116,95,108,101,110,40,41,32,61,61,32,115,108,105,99,101,45,62,103,101,116,95,108,101,110,40,41,0]);
var _$pstr$p21$p155=new Uint8Array([112,101,110,100,105,110,103,83,108,111,116,32,60,32,112,101,110,100,105,110,103,80,114,111,109,105,115,101,115,45,62,103,101,116,95,108,101,110,103,116,104,40,41,0]);
var _$pstr$p22$p156=new Uint8Array([102,0]);
var _$pstr$p23$p157=new Uint8Array([99,111,110,115,111,108,101,0]);
var _$pstr$p24$p158=new Uint8Array([98,117,102,83,105,122,101,0]);
var HEAP8=null;
var _$pstr$p25$p159=new Uint8Array([105,116,32,33,61,32,101,120,116,101,114,110,97,108,80,114,111,99,101,115,115,77,97,112,46,101,110,100,40,41,0]);
var HEAP16=null;
var _$pstr$p89=new Uint8Array([116,32,61,61,32,76,73,78,85,88,95,67,84,88,95,84,72,82,69,65,68,0]);
var _$pstr$p90=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,99,120,117,105,98,97,115,101,46,104,0]);
var ___func__$p_ZN11CheerpXBase11ContextDataC2E12CONTEXT_TYPEj9DBG_STATE=new Uint8Array([67,111,110,116,101,120,116,68,97,116,97,0]);
var _$pstr$p91=new Uint8Array([84,104,114,101,97,100,32,45,32,0]);
var _$pstr$p88=new Uint8Array([67,112,117,32,45,32,0]);
var _$pstr$p80$p163=new Uint8Array([111,112,101,110,82,101,115,117,108,116,0]);
var _$pstr$p27$p164=new Uint8Array([113,117,101,117,101,45,62,103,101,116,95,108,101,110,103,116,104,40,41,32,62,32,48,0]);
var ___func__$p_ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE=new Uint8Array([100,105,114,101,99,116,83,111,99,107,101,116,71,108,117,101,0]);
var _$pstr$p14$p225=new Uint8Array([84,79,68,79,58,32,83,117,112,112,111,114,116,32,101,115,99,97,112,101,32,99,111,100,101,32,37,99,10,0]);
var _$pstr$p15$p226=new Uint8Array([112,114,101,118,67,83,73,80,97,114,97,109,46,101,109,112,116,121,40,41,0]);
var _$pstr$p16$p227=new Uint8Array([99,117,114,67,83,73,80,97,114,97,109,32,62,32,48,0]);
var _$pstr$p17$p228=new Uint8Array([99,117,114,67,83,73,80,97,114,97,109,32,61,61,32,48,0]);
var _$pstr$p18$p229=new Uint8Array([108,105,110,101,115,46,115,105,122,101,40,41,32,60,61,32,99,117,114,115,111,114,89,32,43,32,49,0]);
var _$pstr$p13$p222=new Uint8Array([84,79,68,79,58,32,83,117,112,112,111,114,116,32,83,71,82,32,37,105,10,0]);
var _$pstr$p19$p230=new Uint8Array([84,79,68,79,58,32,83,117,112,112,111,114,116,32,67,83,73,32,112,97,114,97,109,32,37,99,10,0]);
var _$pstr$p209=new Uint8Array([99,104,97,114,115,46,115,105,122,101,40,41,32,62,61,32,110,101,119,76,101,110,0]);
var ___func__$p_ZN11CXUIConsole4Line8truncateEj=new Uint8Array([116,114,117,110,99,97,116,101,0]);
var _$pstr$p12$p221=new Uint8Array([99,117,114,115,111,114,88,32,62,32,48,0]);
var ___func__$p_ZN11CXUIConsole12processPlainEh=new Uint8Array([112,114,111,99,101,115,115,80,108,97,105,110,0]);
var _$pstr$p2$p211=new Uint8Array([112,111,115,32,61,61,32,99,104,97,114,115,46,115,105,122,101,40,41,0]);
var ___func__$p_ZN11CXUIConsole4Line7writeAtEjhh=new Uint8Array([119,114,105,116,101,65,116,0]);
var _$pstr$p3$p212=new Uint8Array([33,108,105,110,101,115,46,101,109,112,116,121,40,41,0]);
var ___func__$p_ZN11CXUIConsole7newLineEv=new Uint8Array([110,101,119,76,105,110,101,0]);
var _$pstr$p63=new Uint8Array([105,100,32,62,32,48,32,38,38,32,105,100,32,60,61,32,100,101,118,105,99,101,115,46,115,105,122,101,40,41,0]);
var ___func__$p_ZN11CheerpXBase13getDeviceByIdEj=new Uint8Array([103,101,116,68,101,118,105,99,101,66,121,73,100,0]);
var _$pstr$p2$p64=new Uint8Array([100,45,62,100,101,118,73,100,32,61,61,32,105,100,0]);
var _$pstr$p113=new Uint8Array([80,97,114,101,110,116,32,100,105,114,101,99,116,111,114,121,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,0]);
var _$pstr$p1$p114=new Uint8Array([68,101,118,105,99,101,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,46,0]);
var _$pstr$p5$p117=new Uint8Array([67,111,117,108,100,32,110,111,116,32,109,111,117,110,116,32,70,83,32,116,121,112,101,58,32,37,115,44,32,109,111,117,110,116,32,112,97,116,104,58,32,37,115,46,32,37,115,10,0]);
var _$pstr$p3$p116=new Uint8Array([73,110,118,97,108,105,100,32,100,105,115,107,32,105,109,97,103,101,46,0]);
var _$pstr$p4$p112=new Uint8Array([85,110,107,110,111,119,110,32,114,101,97,115,111,110,46,0]);
var _$pstr$p2$p115=new Uint8Array([85,110,115,117,112,112,111,114,116,101,100,32,116,121,112,101,46,0]);
var ___func__$p_ZN7CheerpX5Linux13runFSRequestsEv=new Uint8Array([114,117,110,70,83,82,101,113,117,101,115,116,115,0]);
var _$pstr$p35$p125=new Uint8Array([100,101,118,45,62,116,121,112,101,32,61,61,32,68,101,118,105,99,101,58,58,84,89,80,69,58,58,67,72,69,69,82,80,79,83,0]);
var ___func__$p_ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj=new Uint8Array([114,117,110,70,83,85,110,108,105,110,107,82,101,113,117,101,115,116,0]);
var ___func__$p_ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_=new Uint8Array([114,117,110,70,83,82,101,110,97,109,101,82,101,113,117,101,115,116,0]);
var ___func__$p_ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj=new Uint8Array([114,117,110,70,83,67,97,99,104,101,76,105,115,116,82,101,113,117,101,115,116,0]);
var ___func__$p_ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj=new Uint8Array([114,117,110,70,83,67,97,99,104,101,78,111,100,101,82,101,113,117,101,115,116,0]);
var _$pstr$p30$p126=new Uint8Array([112,97,114,101,110,116,0]);
var ___func__$p_ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_=new Uint8Array([114,117,110,70,83,76,105,110,107,82,101,113,117,101,115,116,0]);
var _$pstr$p45$p127=new Uint8Array([112,101,114,109,84,121,112,101,0]);
var ___func__$p_ZN7CheerpX5Linux18runFSFchmodRequestE12CORE_MESSAGEjjj=new Uint8Array([114,117,110,70,83,70,99,104,109,111,100,82,101,113,117,101,115,116,0]);
var ___func__$p_ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj=new Uint8Array([114,117,110,70,83,83,112,101,99,105,97,108,70,105,108,101,82,101,113,117,101,115,116,0]);
var _$pstr$p50$p129=new Uint8Array([102,100,73,32,62,61,32,48,0]);
var _$pstr$p48$p130=new Uint8Array([102,111,108,100,101,114,0]);
var ___func__$p_ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj=new Uint8Array([114,117,110,70,83,77,107,100,105,114,82,101,113,117,101,115,116,0]);
var ___func__$p_ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj=new Uint8Array([114,117,110,70,83,79,112,101,110,82,101,113,117,101,115,116,0]);
var _$pstr$p46$p131=new Uint8Array([114,43,0]);
var _$pstr$p7=new Uint8Array([119,0]);
var _$pstr$p10=new Uint8Array([114,0]);
var _$pstr$p47$p134=new Uint8Array([33,105,115,82,101,97,100,79,110,108,121,0]);
var __ZTV11CheerpXBase={a0:null,a1:__ZN11CheerpXBase12cheerpOSInitEv};
var __ZTVN7CheerpX6SystemE={a0:null,a1:__ZN7CheerpX6System12cheerpOSInitEv};
var __ZN9VGAOutput8instanceE=null;
var _$pstr$p45$p65=new Uint8Array([100,101,118,45,62,116,121,112,101,32,61,61,32,68,101,118,105,99,101,58,58,84,89,80,69,58,58,66,76,79,67,75,0]);
var ___func__$p_ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj=new Uint8Array([114,117,110,73,79,87,114,105,116,101,82,101,113,117,101,115,116,0]);
var ___func__$p_ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj=new Uint8Array([114,117,110,73,79,82,101,97,100,82,101,113,117,101,115,116,0]);
var _$pstr$p258=new Uint8Array([105,110,115,116,97,110,99,101,32,61,61,32,110,117,108,108,112,116,114,0]);
var _$pstr$p1$p259=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,100,101,118,105,99,101,115,47,118,103,97,111,117,116,46,99,112,112,0]);
var ___func__$p_ZN9VGAOutput10initializeEPhR9VGAShared=new Uint8Array([105,110,105,116,105,97,108,105,122,101,0]);
var _NoopCoro$pFrame$pConst$p14=[{a0:___NoopCoro_ResumeDestroy$p15,a1:___NoopCoro_ResumeDestroy$p15}];
var $NoopCoro$pFrame$pConst$p14=0;
var _$pstr$p101=new Uint8Array([100,98,103,67,117,114,67,116,120,32,38,38,32,40,100,98,103,67,117,114,67,116,120,45,62,115,116,97,116,101,32,61,61,32,68,66,71,95,68,69,84,65,84,67,72,69,68,32,124,124,32,100,98,103,67,117,114,67,116,120,45,62,115,116,97,116,101,32,61,61,32,68,66,71,95,83,84,79,80,80,69,68,41,0]);
var _$pstr$p100=new Uint8Array([100,98,103,67,117,114,67,116,120,32,38,38,32,100,98,103,67,117,114,67,116,120,45,62,115,116,97,116,101,32,61,61,32,68,66,71,95,83,84,79,80,80,69,68,0]);
var _$pstr$p34$p95=new Uint8Array([98,105,111,115,68,101,118,105,99,101,45,62,116,121,112,101,32,61,61,32,67,104,101,101,114,112,88,58,58,68,101,118,105,99,101,58,58,66,76,79,67,75,0]);
var ___func__$p_ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE=new Uint8Array([114,117,110,73,109,112,108,0]);
var _$pstr$p35$p96=new Uint8Array([118,103,97,66,105,111,115,68,101,118,105,99,101,45,62,116,121,112,101,32,61,61,32,67,104,101,101,114,112,88,58,58,68,101,118,105,99,101,58,58,66,76,79,67,75,0]);
var _$pstr$p94=new Uint8Array([102,108,112,45,62,116,121,112,101,32,33,61,32,67,104,101,101,114,112,88,58,58,68,101,118,105,99,101,58,58,67,72,69,69,82,80,79,83,0]);
var __ZTVN7CheerpX10FileDeviceE={a0:null,a1:__ZN7CheerpX6Device17isWebCheerpDeviceEv,a2:__ZN7CheerpX6Device3runEPNS_5LinuxE,a3:__ZNK7CheerpX6Device16hasPendingWritesEv,a4:__ZN7CheerpX10FileDevice11getPermTypeEv,a5:__ZN7CheerpX11BlockDevice12requestBytesEP11CheerpXBasejj,a6:__ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,a7:__ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj};
var _$pstr$p13=new Uint8Array([100,111,110,101,66,121,116,101,115,32,61,61,32,108,101,110,0]);
var _$pstr$p9=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,99,120,117,105,100,101,118,105,99,101,115,46,99,112,112,0]);
var ___func__$p_ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj=new Uint8Array([119,114,105,116,101,0]);
var ___func__$p_ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj=new Uint8Array([114,101,97,100,0]);
var _$pstr$p62=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,99,120,117,105,100,101,118,105,99,101,115,46,104,0]);
var ___func__$p_ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj=new Uint8Array([114,101,113,117,101,115,116,66,121,116,101,115,0]);
var _$pstr$p37$p196=new Uint8Array([98,117,102,0]);
var ___func__$p_ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE=new Uint8Array([114,101,97,100,67,104,117,110,107,0]);
var _$pstr$p38$p197=new Uint8Array([117,105,110,116,51,50,95,116,40,117,56,45,62,103,101,116,95,108,101,110,103,116,104,40,41,41,32,61,61,32,67,72,85,78,75,95,83,73,90,69,0]);
var _$pstr$p40$p198=new Uint8Array([102,100,32,62,61,32,48,0]);
var __ZTVN7CheerpX13OverlayDeviceE={a0:null,a1:__ZN7CheerpX6Device17isWebCheerpDeviceEv,a2:__ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE,a3:__ZNK7CheerpX13OverlayDevice16hasPendingWritesEv,a4:__ZN7CheerpX13OverlayDevice11getPermTypeEv,a5:__ZN7CheerpX11BlockDevice12requestBytesEP11CheerpXBasejj,a6:__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,a7:__ZN7CheerpX11BlockDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj};
var _$pstr$p41$p201=new Uint8Array([40,111,112,46,102,105,108,101,79,102,102,115,101,116,32,37,32,67,72,85,78,75,95,83,73,90,69,41,32,61,61,32,48,0]);
var ___func__$p_ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE=new Uint8Array([114,117,110,79,112,101,114,97,116,105,111,110,115,0]);
var _$pstr$p42$p202=new Uint8Array([98,117,102,76,101,110,32,61,61,32,67,72,85,78,75,95,83,73,90,69,0]);
var _$pstr$p43$p203=new Uint8Array([40,102,105,108,101,79,102,102,115,101,116,32,37,32,67,72,85,78,75,95,83,73,90,69,41,32,61,61,32,48,0]);
var _$pstr$p5=new Uint8Array([67,108,101,97,114,105,110,103,32,108,111,99,97,108,32,99,97,99,104,101,32,102,111,114,32,100,101,118,105,99,101,58,32,37,115,10,0]);
var __ZTVN7CheerpX12GitHubDeviceE={a0:null,a1:__ZN7CheerpX6Device17isWebCheerpDeviceEv,a2:__ZN7CheerpX6Device3runEPNS_5LinuxE,a3:__ZNK7CheerpX6Device16hasPendingWritesEv,a4:__ZN7CheerpX12GitHubDevice11getPermTypeEv,a5:__ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj,a6:__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,a7:__ZN7CheerpX11BlockDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj};
var _$pstr$p22=new Uint8Array([40,115,116,97,114,116,32,37,32,79,118,101,114,108,97,121,68,101,118,105,99,101,58,58,67,72,85,78,75,95,83,73,90,69,41,32,61,61,32,48,0]);
var __ZTVN7CheerpX11CloudDeviceE={a0:null,a1:__ZN7CheerpX6Device17isWebCheerpDeviceEv,a2:__ZN7CheerpX6Device3runEPNS_5LinuxE,a3:__ZNK7CheerpX6Device16hasPendingWritesEv,a4:__ZN7CheerpX11CloudDevice11getPermTypeEv,a5:__ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj,a6:__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,a7:__ZN7CheerpX11BlockDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj};
var __ZTVN7CheerpX15HttpBytesDeviceE={a0:null,a1:__ZN7CheerpX6Device17isWebCheerpDeviceEv,a2:__ZN7CheerpX6Device3runEPNS_5LinuxE,a3:__ZNK7CheerpX6Device16hasPendingWritesEv,a4:__ZN7CheerpX15HttpBytesDevice11getPermTypeEv,a5:__ZN7CheerpX15HttpBytesDevice12requestBytesEP11CheerpXBasejj,a6:__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,a7:__ZN7CheerpX11BlockDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj};
var __ZTVN7CheerpX10DataDeviceE={a0:null,a1:__ZN7CheerpX6Device17isWebCheerpDeviceEv,a2:__ZN7CheerpX10DataDevice3runEPNS_5LinuxE,a3:__ZNK7CheerpX6Device16hasPendingWritesEv};
var __ZTVN7CheerpX11BlockDeviceE={a0:null,a1:__ZN7CheerpX6Device17isWebCheerpDeviceEv,a2:__ZN7CheerpX6Device3runEPNS_5LinuxE,a3:__ZNK7CheerpX6Device16hasPendingWritesEv,a4:___cxa_pure_virtual,a5:__ZN7CheerpX11BlockDevice12requestBytesEP11CheerpXBasejj,a6:__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj,a7:__ZN7CheerpX11BlockDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj};
function constructor__ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=new Uint8Array(2);
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	create__ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(this)}
function constructor__ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=null;
	this.a4=null;
	this.i5=0;
	this.a6=null;
	this.a7=null;
	this.i8=0;
	this.a9=null;
	this.i10=0;
	this.a11={a0:nullArray,a0o:0};
	this.a12={a0:nullArray,a0o:0};
	this.a13={a0:nullArray,a0o:0};
	this.i14=0;
	create__ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj$pFrame(this)}
function constructor__ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.a4={a0:nullArray,a0o:0};
	this.i5=0;
	this.a6=new Uint8Array(2);
	this.a7=null;
	this.a8=null;
	this.a9=null;
	create__ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE$pFrame(this)}
function constructor__ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=new Uint8Array(2);
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	create__ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(this)}
function constructor__ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={i0:0,a1:null,a2:{a0:nullArray,a0o:0}};
	this.a4={a0:nullArray,a0o:0};
	this.i5=0;
	this.a6=[0];
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12=null;
	this.a13=null;
	create__ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(this)}
function constructor__ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=new Uint8Array(2);
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	create__ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(this)}
function constructor__ZN7CheerpX9IDBDevice10clearCacheEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.i6=0;
	this.a7=null;
	this.a8=null;
	this.a9={a0:nullArray,a0o:0};
	this.a10={a0:nullArray,a0o:0};
	this.i11=0;
	create__ZN7CheerpX9IDBDevice10clearCacheEv$pFrame(this)}
function constructor__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0,a1:{i0:0,i1:0}};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=[0];
	this.i6=0;
	this.a7=null;
	this.i8=0;
	this.a9=null;
	create__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(this)}
function constructor__ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.a4={a0:nullArray,a0o:0};
	this.a5={a0:nullArray,a0o:0};
	this.a6={a0:nullArray,a0o:0};
	this.i7=0;
	this.a8=new Uint8Array(2);
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12=null;
	this.a13=null;
	this.a14=null;
	this.a15=null;
	this.a16=null;
	create__ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE$pFrame(this)}
function constructor__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0,a1:{i0:0,a1:null}};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=[0];
	this.d6=-0.;
	this.a7=null;
	this.a8=null;
	create__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj$pFrame(this)}
function constructor__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.a4=null;
	this.i5=0;
	this.a6=null;
	this.i7=0;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.i11=0;
	this.a12=null;
	this.a13=null;
	this.i14=0;
	this.a15=null;
	this.a16={a0:nullArray,a0o:0};
	this.a17={a0:nullArray,a0o:0};
	this.a18={a0:nullArray,a0o:0};
	this.a19={a0:nullArray,a0o:0};
	this.a20={a0:nullArray,a0o:0};
	this.a21={a0:nullArray,a0o:0};
	this.a22={a0:nullArray,a0o:0};
	this.i23=0;
	create__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE$pFrame(this)}
function constructor__ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0,a1:{i0:0,i1:0}};
	this.a3={a0:nullArray,a0o:0};
	this.a4={a0:nullArray,a0o:0};
	this.i5=0;
	this.a6=[0];
	this.i7=0;
	this.i8=0;
	this.a9=null;
	this.i10=0;
	this.a11=null;
	this.a12=null;
	this.a13=null;
	create__ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(this)}
function constructor__ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0,a1:{i0:0,i1:0}};
	this.a3={a0:nullArray,a0o:0};
	this.a4={a0:nullArray,a0o:0};
	this.a5={a0:nullArray,a0o:0};
	this.i6=0;
	this.a7=[0];
	this.i8=0;
	this.i9=0;
	this.a10=null;
	this.i11=0;
	this.a12=null;
	this.a13=null;
	this.i14=0;
	this.a15=null;
	create__ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(this)}
function constructor__ZN7CheerpX10FileDevice8dumpImplEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.a4={a0:nullArray,a0o:0};
	this.i5=0;
	this.a6=new Uint8Array(2);
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	create__ZN7CheerpX10FileDevice8dumpImplEv$pFrame(this)}
function constructor__ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.a4={a0:nullArray,a0o:0};
	this.a5={a0:nullArray,a0o:0};
	this.a6={a0:nullArray,a0o:0};
	this.a7={a0:nullArray,a0o:0};
	this.a8={a0:nullArray,a0o:0};
	this.i9=0;
	this.i10=0;
	this.a11=[0];
	this.a12=null;
	this.a13=null;
	this.a14=null;
	this.a15=null;
	this.a16=null;
	this.a17=null;
	this.i18=0;
	this.a19=null;
	this.i20=0;
	this.a21=null;
	this.i22=0;
	this.i23=0;
	create__ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE$pFrame(this)}
function constructor__ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null};
	this.a4={a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null};
	this.a5={a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null};
	this.a6={a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null};
	this.a7={a0:null,a1:null};
	this.a8={a0:null,a1:null};
	this.a9={a0:null,a1:null};
	this.a10={a0:null,a1:null};
	this.a11={a0:nullArray,a0o:0};
	this.a12={a0:nullArray,a0o:0};
	this.a13={a0:nullArray,a0o:0};
	this.a14=new Uint8Array(2);
	this.i15=0;
	this.a16=[null];
	this.a17=null;
	this.a18=null;
	this.a19=null;
	this.a20=null;
	this.a21=null;
	this.i22=0;
	this.a23=null;
	this.i24=0;
	this.i25=0;
	this.a26=null;
	this.a27=null;
	this.a28=null;
	this.a29=null;
	this.i30=0;
	this.a31=null;
	this.a32=null;
	this.a33={i0:0};
	create__ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE$pFrame(this)}
function constructor__ZN7CheerpX13OverlayDevice8dumpImplEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=new Uint8Array(2);
	this.a6=null;
	this.a7=null;
	this.i8=0;
	this.i9=0;
	this.a10=null;
	create__ZN7CheerpX13OverlayDevice8dumpImplEv$pFrame(this)}
function constructor__ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={i0:0,i1:0,i2:0,a3:null};
	this.a4={a0:null,a1:null};
	this.a5={a0:nullArray,a0o:0};
	this.a6={a0:nullArray,a0o:0};
	this.a7={a0:nullArray,a0o:0};
	this.a8={a0:nullArray,a0o:0};
	this.a9={a0:nullArray,a0o:0};
	this.a10={a0:nullArray,a0o:0};
	this.a11={a0:nullArray,a0o:0};
	this.a12={a0:nullArray,a0o:0};
	this.i13=0;
	this.a14=new Uint8Array(2);
	this.a15=[null];
	this.a16=null;
	this.a17=null;
	this.a18=null;
	this.a19=null;
	this.a20=null;
	this.a21=null;
	this.a22=null;
	this.a23=null;
	this.i24=0;
	this.i25=0;
	this.a26=null;
	this.a27=null;
	this.a28=null;
	this.a29=null;
	this.a30=null;
	this.a31=null;
	this.a32=null;
	this.a33=null;
	this.i34=0;
	create__ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE$pFrame(this)}
function constructor__ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9={a0:nullArray,a0o:0};
	this.i10=0;
	create__ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_$pFrame(this)}
function constructor__ZN7CheerpX5Linux12cheerpOSInitEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0,a1:{i0:0,a1:null}};
	this.a3={i0:0,i1:0,a2:nullArray};
	this.a4={a0:null};
	this.a5={a0:nullArray,a0o:0};
	this.i6=0;
	this.a7=[0];
	this.a8=null;
	this.a9=null;
	this.i10=0;
	this.a11=nullArray;
	this.a11o=0;
	this.a12=null;
	create__ZN7CheerpX5Linux12cheerpOSInitEv$pFrame(this)}
function constructor__ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=[null];
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9={a0:null,a1:null,a2:null};
	this.a10={a0:null,a1:null,a2:nullArray};
	this.a11={a0:null,a1:null,a2:nullArray};
	this.a12={a0:nullArray,a0o:0};
	this.i13=0;
	create__ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_$pFrame(this)}
function constructor__ZZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoEENK3$_1clINS1_27ReadableStreamDefaultReaderIPNS1_4_AnyEEES2_NS1_6TArrayIPNS1_10Uint8ArrayEEE9SuspenderIiEEE4TaskIvEPT_PT0_PT1_RT2_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=[null];
	this.a4=[null];
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12={a0:null,a1:null,a2:nullArray};
	this.a13={a0:null,a1:null,a2:nullArray};
	this.i14=0;
	create__ZZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoEENK3$_1clINS1_27ReadableStreamDefaultReaderIPNS1_4_AnyEEES2_NS1_6TArrayIPNS1_10Uint8ArrayEEE9SuspenderIiEEE4TaskIvEPT_PT0_PT1_RT2_$pFrame(this)}
function constructor__ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.a6=null;
	this.a7={a0:nullArray,a0o:0};
	this.i8=0;
	create__ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj$pFrame(this)}
function constructor_struct$p_Z6__libc(){
	this.i0=0;
	this.i1=0;
	this.a2=null;
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.a8=[null,null,null,null,null,null];
}
function constructor__ZN7CheerpX9WebDevice14createInternalERKN6client6StringE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0,a1:{i0:0,a1:null}};
	this.a3={a0:null,a1:null,a2:nullArray};
	this.i4=0;
	this.a5=[0];
	this.a6=null;
	this.a7=null;
	this.a8=null;
	create__ZN7CheerpX9WebDevice14createInternalERKN6client6StringE$pFrame(this)}
function constructor__ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.i9=0;
	this.a10=null;
	this.a11=null;
	this.a12=null;
	this.a13={a0:nullArray,a0o:0};
	this.a14={a0:nullArray,a0o:0};
	this.i15=0;
	create__ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj$pFrame(this)}
function constructor__ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=[null];
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8={a0:null,a1:null,a2:nullArray};
	this.a9={a0:null,a1:null,a2:nullArray};
	this.i10=0;
	create__ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE$pFrame(this)}
function constructor_class$p_ZN7CheerpX6SystemE(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.i7=0;
	this.i8=0;
	this.a9=null;
	this.a10=null;
	this.a11=[null];
	this.a12=null;
	this.a13=null;
	this.a14=null;
	this.a15=null;
	this.a16=null;
	this.a17=null;
	this.a18=null;
	this.a19=null;
	this.a20=null;
	this.a21=null;
	this.a22=null;
	this.a23=null;
	this.a24={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a25={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a26=null;
}
function constructor__ZN7CheerpX5Linux13requestAcceptEjj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0,a1:{i0:0,a1:null}};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=[0];
	this.a6=null;
	this.i7=0;
	this.a8=null;
	create__ZN7CheerpX5Linux13requestAcceptEjj$pFrame(this)}
function constructor_class$p_ZN7CheerpX5LinuxE(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.i7=0;
	this.i8=0;
	this.a9=null;
	this.a10=null;
	this.a11=[null];
	this.a12=null;
	this.a13=null;
	this.a14=null;
	this.a15=null;
	this.a16=null;
	this.a17=null;
	this.a18=null;
	this.a19=null;
	this.a20=null;
	this.a21=null;
	this.a22=null;
	this.a23=null;
	this.a24={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a25={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a26=null;
	this.a27=null;
	this.a28=null;
	this.a29=null;
	this.a30=null;
	this.a31=null;
	this.a32=null;
	this.a33=null;
	this.a34=null;
	this.a35=null;
	this.a36=null;
	this.a37=null;
	this.a38=null;
	this.a39={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a40=null;
	this.a41={a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null,a3:{a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:null},i4:0,i5:0}};
	this.i42=0;
	this.a43={a0:null,a1:{a0:null},i2:0};
	this.a44={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a45={a0:nullArray,a1:null,a2:{a0:null}};
	this.a46={a0:nullArray,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0},i4:0,i5:0,i6:0,a7:{a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null}};
	this.a47=null;
	this.a48={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a49={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
}
function constructor__ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6={a0:nullArray,a0o:0};
	this.a7={a0:null};
	this.i8=0;
	create__ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE$pFrame(this)}
function constructor__ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=new Uint8Array(2);
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.i9=0;
	this.i10=0;
	create__ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_$pFrame(this)}
function constructor__ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.i6=0;
	this.a7=null;
	this.i8=0;
	this.i9=0;
	this.i10=0;
	this.i11=0;
	this.a12=null;
	this.a13={a0:nullArray,a0o:0};
	this.i14=0;
	create__ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pFrame(this)}
function constructor__ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0,a1:{i0:0,a1:null}};
	this.a3={i0:0,a1:null,a2:{a0:nullArray,a0o:0}};
	this.a4={i0:0,a1:null,a2:{a0:nullArray,a0o:0}};
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12={a0:nullArray,a0o:0};
	this.i13=0;
	create__ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj$pFrame(this)}
function constructor__ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:null,a1:null,a2:nullArray};
	this.a4={a0:null,a1:null,a2:nullArray};
	this.i5=0;
	this.a6=new Uint8Array(2);
	this.a7=null;
	this.a8=null;
	this.i9=0;
	this.a10=null;
	this.i11=0;
	this.a12=null;
	this.a13=null;
	this.a14=null;
	create__ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE$pFrame(this)}
function constructor__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:null,a1:null,a2:nullArray};
	this.a4={a0:null,a1:null,a2:nullArray};
	this.a5={a0:null,a1:null,a2:nullArray};
	this.a6={a0:null};
	this.i7=0;
	this.a8=new Uint8Array(2);
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.i12=0;
	this.a13=null;
	this.a14=null;
	this.a15=null;
	this.a16=null;
	create__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_$pFrame(this)}
function constructor__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS0_NS1_9UDPSocketENS1_11MessagePortEEE6ThreadPT_PT0_PT1_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:null,a1:null,a2:nullArray};
	this.a4={a0:null,a1:null,a2:nullArray};
	this.a5={a0:null,a1:null,a2:nullArray};
	this.i6=0;
	this.a7=new Uint8Array(2);
	this.a8=[null];
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12=null;
	this.a13=null;
	this.a14=null;
	this.a15=null;
	create__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS0_NS1_9UDPSocketENS1_11MessagePortEEE6ThreadPT_PT0_PT1_$pFrame(this)}
function constructor_class$p_ZN7CheerpX13OverlayDeviceE(){
	this.a0=null;
	this.i1=0;
	this.i2=0;
	this.i3=0;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7={a0:nullArray,a0o:0,i1:0,a2:null};
	this.a8={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a9={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a10={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.i11=0;
}
function constructor__ZN7CheerpX5Linux13runFSRequestsEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=new Uint8Array(2);
	this.a6=null;
	this.a7=null;
	this.a8=null;
	create__ZN7CheerpX5Linux13runFSRequestsEv$pFrame(this)}
function constructor_struct$p_Z9__pthread(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.i9=0;
	this.i10=0;
	this.a11=null;
	this.i12=0;
	this.a13=null;
	this.i14=0;
	this.i15=0;
	this.a16=null;
	this.a17=null;
	this.a18=null;
	this.a19={a0:[nullObj],i1:0,a2:null};
	this.i20=0;
	this.i21=0;
	this.a22=null;
	this.a23=[0];
	this.a24=null;
	this.a25=null;
}
function constructor__ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:nullArray,a0o:0};
	this.i4=0;
	this.a5=new Uint8Array(2);
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	create__ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E$pFrame(this)}
function constructor__ZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:null,a1:null,a2:nullArray};
	this.a4={a0:null,a1:null,a2:nullArray};
	this.i5=0;
	this.a6=new Uint8Array(2);
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12=null;
	create__ZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEv$pFrame(this)}
function constructor__ZZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_ENKUlSA_SC_SE_SF_E_clIS0_S6_NS1_25_ReadableStreamReadResultIPNS1_9TCPSocketEEEjEES8_SA_SC_SE_SF_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:null,a1:null,a2:nullArray};
	this.a4={a0:nullArray,a0o:0};
	this.a5={a0:nullArray,a0o:0};
	this.i6=0;
	this.a7=new Uint8Array(2);
	this.a8=null;
	this.a9=null;
	this.i10=0;
	this.a11=null;
	this.a12=null;
	this.a13=null;
	create__ZZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_ENKUlSA_SC_SE_SF_E_clIS0_S6_NS1_25_ReadableStreamReadResultIPNS1_9TCPSocketEEEjEES8_SA_SC_SE_SF_$pFrame(this)}
function constructor__ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11={a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null};
	this.a12={a0:null,a1:null,a2:nullArray};
	this.a13={a0:null,a1:null,a2:nullArray};
	this.a14={a0:null,a1:null,a2:nullArray};
	this.a15={a0:null,a1:null,a2:nullArray};
	this.a16={a0:null,a1:null};
	this.a17={a0:nullArray,a0o:0};
	this.i18=0;
	create__ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE$pFrame(this)}
function constructor__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:null,a1:null,a2:nullArray};
	this.a4={a0:nullArray,a0o:0};
	this.i5=0;
	this.a6=new Uint8Array(2);
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	create__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_$pFrame(this)}
function constructor_struct$p_Z8_IO_FILE(){
	this.i0=0;
	this.a1=nullArray;
	this.a2=nullArray;
	this.a3=null;
	this.a4=nullArray;
	this.a4o=0;
	this.a5=nullArray;
	this.a5o=0;
	this.a6=null;
	this.a7=nullArray;
	this.a7o=0;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=nullArray;
	this.a11o=0;
	this.i12=0;
	this.a13=null;
	this.a14=null;
	this.i15=0;
	this.i16=0;
	this.i17=0;
	this.i18=0;
	this.i19=0;
	this.i20=0;
	this.a21=null;
	this.a22=new Int32Array(6);
	this.a23=null;
	this.a24=null;
	this.a25=null;
	this.a26=null;
	this.a27=null;
	this.a28=null;
}
function constructor__ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.a8=null;
	this.i9=0;
	this.i10=0;
	this.i11=0;
	this.a12=null;
	this.i13=0;
	this.i14=0;
	this.i15=0;
	this.a16=null;
	this.a17={a0:nullArray,a0o:0};
	this.a18={a0:nullArray,a0o:0};
	this.i19=0;
	create__ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj$pFrame(this)}
function constructor__ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.a6=null;
	this.i7=0;
	this.i8=0;
	this.a9=null;
	this.a10=null;
	this.a11={a0:nullArray,a0o:0};
	this.i12=0;
	create__ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj$pFrame(this)}
function constructor__ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:null,a1:null,a2:nullArray};
	this.i4=0;
	this.a5=new Uint8Array(2);
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	create__ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E$pFrame(this)}
function constructor_class$p_Z11CXUIConsole(){
	this.i0=0;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.a9={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
	this.a10=[0];
	this.a11={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};
}
function constructor__ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9={a0:nullArray,a0o:0};
	this.a10={a0:nullArray,a0o:0};
	this.i11=0;
	create__ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj$pFrame(this)}
function constructor__ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8={a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null};
	this.a9={a0:nullArray,a0o:0,a1:{i0:0,i1:0},a2:null};
	this.a10={a0:null,a1:null};
	this.a11={a0:null,a1:null};
	this.a12={a0:nullArray,a0o:0};
	this.i13=0;
	create__ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE$pFrame(this)}
function constructor_struct$p_ZN10__cxxabiv19ExceptionE(){
	this.a0=null;
	this.a1=null;
	this.i2=0;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.i6=0;
	this.i7=0;
	this.a8=null;
	this.a9=null;
	this.a10=null;
}
function constructor__ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.a6=null;
	this.a7=null;
	this.a8=null;
	this.a9={a0:nullArray,a0o:0};
	this.i10=0;
	create__ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_$pFrame(this)}
function constructor__ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.a6=null;
	this.i7=0;
	this.i8=0;
	this.a9=null;
	this.a10={a0:nullArray,a0o:0};
	this.i11=0;
	create__ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj$pFrame(this)}
function constructor__ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12={a0:nullArray,a0o:0};
	this.i13=0;
	create__ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj$pFrame(this)}
function constructor__ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:nullArray,a0o:0};
	this.a3=null;
	this.i4=0;
	this.i5=0;
	this.i6=0;
	this.a7=null;
	this.i8=0;
	this.i9=0;
	this.i10=0;
	this.i11=0;
	this.a12=null;
	this.a13={a0:nullArray,a0o:0};
	this.i14=0;
	create__ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pFrame(this)}
function constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE(){
	this.a0=null;
	this.i1=0;
	this.a2=null;
	this.i3=0;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.i9=0;
	this.i10=0;
	this.i11=0;
	this.i12=0;
	this.i13=0;
	this.i14=0;
	this.i15=0;
}
function construct_literal318(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
}
function constructor_struct$p_Z9VGAOutput(){
	this.a0=nullArray;
	this.a0o=0;
	this.a1=null;
	this.a2=nullArray;
	this.a2o=0;
	this.a3=null;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.a8=null;
}
function create__ZZN7CheerpX10DataDevice6createEvENK3$_0clEPFvPN6client6ObjectEEPFvRKNS2_6StringEE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_ENK3$_0clEPNS_5LinuxES4_S4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX9IDBDevice5resetEvENK3$_0clEPS0_PFvPN6client6ObjectEE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX9IDBDevice8dumpImplEPN6client6StringE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX9WebDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX15HttpBytesDevice12requestBytesEP11CheerpXBasejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX11CloudDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX15HttpBytesDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX11CloudDevice11getPermTypeEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX11CloudDevice12requestBytesEP11CheerpXBasejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX12GitHubDevice11getPermTypeEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX12GitHubDevice12requestBytesEP11CheerpXBasejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	a[2]=null;
	a[3]=obj.a4;
	obj.a4.o=3;
	obj.a4.a=a;
	a[4]=null;
	a[5]=null;
	a[6]=null;
	return obj;}
function create__ZZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceEENK3$_0clES2_S4_PFvPN6client6ObjectEEPFvRKNS6_6StringEE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX9IDBDevice10clearCacheEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX13OverlayDevice3runEPNS_5LinuxE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux13requestDeviceEjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX13OverlayDevice13runOperationsEPNS_5LinuxE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX13OverlayDevice11getPermTypeEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZNK7CheerpX13OverlayDevice9readChunkEP11CheerpXBasejPN6client10Uint8ArrayEjPNS3_6ObjectE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX11BlockDevice29requestBytesAndMeasureLatencyEP11CheerpXBasejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX10FileDevice11getPermTypeEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX10FileDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux21runFSCacheListRequestE12CORE_MESSAGEjPN6client6StringEjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux18runFSRenameRequestE12CORE_MESSAGEjjPN6client6StringES4_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX9IDBDevice6createEPN6client6StringEENK3$_0clES3_PFvPNS1_6ObjectEEPFvRKS2_E$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux23runFSSpecialFileRequestEPN6client6StringEj12CORE_MESSAGEjPNS1_6ObjectEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX10FileDevice5writeEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_1clIS0_NS1_15TCPServerSocketENS1_11MessagePortEjEE6ThreadPT_PT0_PT1_T2_ENKUlSA_SC_SE_SF_E_clIS0_S6_NS1_25_ReadableStreamReadResultIPNS1_9TCPSocketEEEjEES8_SA_SC_SE_SF_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoEENK3$_1clINS1_27ReadableStreamDefaultReaderIPNS1_4_AnyEEES2_NS1_6TArrayIPNS1_10Uint8ArrayEEE9SuspenderIiEEE4TaskIvEPT_PT0_PT1_RT2_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux12MessageQueue3popEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice6unlinkERKN6client6StringE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX11BlockDevice7sendXhrEPN6client14XMLHttpRequestE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice4statERKN6client6StringE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux16directSocketGlueEPN6client11MessagePortEPNS1_9TCPSocketEPNS1_17TCPSocketOpenInfoE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX10DataDevice3runEPNS_5LinuxE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX12GitHubDevice6createERKN6client6StringEENK3$_0clES4_PFvPNS1_6ObjectEEPFvS4_E$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux11postRequestIjEE4TaskIT_EiPN6client6ObjectEb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice4readEiPN6client10Uint8ArrayEii$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_2clIS0_NS1_9UDPSocketENS1_11MessagePortEEE6ThreadPT_PT0_PT1_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX11BlockDevice4readEP11CheerpXBasejjPN6client10Uint8ArrayEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringEENK3$_0clES2_S6_PFvPNS3_6ObjectEEPFvS6_E$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux17runFSMkdirRequestEPN6client6StringEj12CORE_MESSAGEjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux18runFSUnlinkRequestE12CORE_MESSAGEjPN6client6StringEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN11CheerpXBase21handleCoreMessageBaseEPN6client11CoreMessageEENK3$_1clEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux28requestCreateExternalProcessEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux13requestAcceptEjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux16runFSLinkRequestE12CORE_MESSAGEjjPN6client6StringES4_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN11CheerpXBase12cheerpOSInitEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux12requestMountERKSsS2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX5Linux18createUnixListenerEPN6client6StringEENK3$_0clIPFvPNS1_6ObjectEENS1_10Uint8ArrayEEE6ThreadPS0_T_PT0_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice4openERKN6client6StringES4_ii$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX12UnixListener6acceptEvENKUlPT_T0_E_clIS0_PFvPN6client6ObjectEEEE6ThreadS2_S3_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux17runFSCloseRequestE12CORE_MESSAGEjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice6renameERKN6client6StringES4_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux11requestBindEjjPhj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX9WebDevice14createInternalERKN6client6StringE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux13requestSocketEjiii$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux11postRequestI12MOUNT_RESULTEE4TaskIT_EiPN6client6ObjectEb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_ENK3$_0clES2_S2_PFvPNS0_6ObjectEEPFvRKNS0_6StringEE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN11CheerpXBase10coreWorkerERKN6client6StringE12CORE_MESSAGE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice9createDirERKN6client6StringEjii$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux21runFSCacheNodeRequestE12CORE_MESSAGEjPN6client6StringEjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux17runFSWriteRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice4linkERKN6client6StringES4_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice5closeEi$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX15HttpBytesDevice11getPermTypeEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice5writeEiPN6client10Uint8ArrayEii$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux17requestCreateFileEjRKN6client6StringE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux16runFSReadRequestE12CORE_MESSAGEjjjPKN6client6TArrayIPNS2_10ChunkSliceEEE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX13OverlayDevice8dumpImplEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux13runFSRequestsEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux16runFSOpenRequestEPN6client6StringEj12CORE_MESSAGEjjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX6System12cheerpOSInitEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX6Device3runEPNS_5LinuxE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux11postRequestIPN6client6ObjectEEE4TaskIT_EiS4_b$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice9listFilesERKN6client6StringE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux14requestAppInitEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX9IDBDevice14readFileAsBlobEPN6client6StringE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux12cheerpOSInitEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX6System17runIOWriteRequestEPS0_jjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX5Linux6createEPN6client14LinuxOptionalsEENK3$_0clIS0_NS1_7PromiseIPNS1_16NetworkInterfaceEEEEEPNS6_IPNS1_4_AnyEEEPT_PT0_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX6System16runIOReadRequestEPS0_jjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX5Linux17handleCoreMessageEPN6client11CoreMessageEENK3$_0clIS0_EE6ThreadPT_S3_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX14CheerpOSDevice11getFileBlobEjRKN6client6StringE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX5Linux11postRequestIPN6client11MessagePortEEE4TaskIT_EiPNS2_6ObjectEb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN11CheerpXBase16cheerpOsInitImplEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN7CheerpX6System7runImplEPS0_PN6client19SystemConfigurationEENK3$_0clES1_jPNS2_19FloppyConfigurationE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CheerpX10FileDevice8dumpImplEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function createArray_struct$p_ZN7CheerpX13OverlayDevice2OpE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={i0:0,i1:0,i2:0,a3:null};
	return r;
}
function createArray_struct$p_Z13HudGlobalStat(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={a0:null,a1:nullArray,a1o:0,i2:0,i3:0,a4:null};
	return r;
}
function createArray_struct$p_ZN10__cxxabiv19ExceptionE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]=new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function createArray_struct$p_ZN7CheerpX5Linux10MountPointE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={i0:0,i1:0,a2:nullArray,a3:null,a4:{i0:0,i1:0,a2:nullArray}};
	return r;
}
function createArray_struct$p_ZN7CheerpX5Linux8KeyEventE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={i0:0,d1:-0.};
	return r;
}
function createArray_struct$p_ZN11CXUIConsole4LineE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0},a3:null,i4:0};
	return r;
}
function createArray_struct$p_Z3arg(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={a0:new Int32Array(2),d1:-0.,a2:nullArray,a2o:0};
	return r;
}
function createArray_struct$p_ZSt4pairIjP9SuspenderIPN6client6ObjectEEE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={i0:0,a1:null};
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
function handleVAArg(ptr){var ret=ptr.d[ptr.o];ptr.o++;return ret;}
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
var CheerpX={
	BlockDevice:null,
	CheerpOSDevice:null,
	CloudDevice:null,
	DataDevice:null,
	Device:null,
	DirectSocketsNetwork:null,
	DummyNetwork:null,
	FileDevice:null,
	GitHubDevice:null,
	HttpBytesDevice:null,
	IDBDevice:null,
	Linux:null,
	OverlayDevice:null,
	System:null,
	TailscaleNetwork:null,
	UnixListener:null,
	WebDevice:null,
	copyFile:null,
};
CheerpX.BlockDevice={};
CheerpX.CheerpOSDevice={};
CheerpX.CloudDevice={};
CheerpX.DataDevice={};
CheerpX.Device={};
CheerpX.DirectSocketsNetwork={};
CheerpX.DummyNetwork={};
CheerpX.FileDevice={};
CheerpX.GitHubDevice={};
CheerpX.HttpBytesDevice={};
CheerpX.IDBDevice={};
CheerpX.Linux={};
CheerpX.OverlayDevice={};
CheerpX.System={};
CheerpX.TailscaleNetwork={};
CheerpX.UnixListener={};
CheerpX.WebDevice={};
CheerpX.copyFile={};
var CheerpXProcess={};
export default function(tmp1){
	CHEERP_ENV=(typeof tmp1 == 'undefined' ? null : tmp1.env) || null;
	CHEERP_ARGV=(typeof tmp1 == 'undefined' ? null : tmp1.argv) || null;
	return Promise.resolve().then(_=>{
		CheerpX.BlockDevice=function (){
			throw new Error("Class/Struct CheerpX.BlockDevice is abstract");
		};
		CheerpX.BlockDevice.prototype.delete=function(){
			return __ZN7CheerpX11BlockDevice6deleteEv(this.this);
		};
		CheerpX.CheerpOSDevice=function (){
			this.this=__ZN7CheerpX14CheerpOSDevice3newEv();
		};
		CheerpX.CheerpOSDevice.prototype.delete=function(){
			return __ZN7CheerpX14CheerpOSDevice6deleteEv(this.this);
		};
		CheerpX.CloudDevice=function (){
			throw new Error("Class/Struct CheerpX.CloudDevice do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.CloudDevice.create=__ZN7CheerpX11CloudDevice6createERKN6client6StringE;
		CheerpX.CloudDevice.prototype.delete=function(){
			return __ZN7CheerpX11CloudDevice6deleteEv(this.this);
		};
		CheerpX.DataDevice=function (){
			throw new Error("Class/Struct CheerpX.DataDevice do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.DataDevice.create=__ZN7CheerpX10DataDevice6createEv;
		CheerpX.DataDevice.prototype.delete=function(){
			return __ZN7CheerpX10DataDevice6deleteEv(this.this);
		};
		CheerpX.DataDevice.prototype.writeFile=function(a0,a1){
			return __ZN7CheerpX10DataDevice9writeFileERKN6client6StringES4_(this.this,a0,a1);
		};
		CheerpX.Device=function (a0){
			this.this=__ZN7CheerpX6Device3newENS0_4TYPEE(a0);
		};
		CheerpX.Device.prototype.delete=function(){
			return __ZN7CheerpX6Device6deleteEv(this.this);
		};
		CheerpX.Device.wrap=__ZN7CheerpX6Device4wrapEPN6client6ObjectE;
		CheerpX.DirectSocketsNetwork=__ZN7CheerpX20DirectSocketsNetworkEv;
		CheerpX.DummyNetwork=__ZN7CheerpX12DummyNetworkEv;
		CheerpX.FileDevice=function (){
			throw new Error("Class/Struct CheerpX.FileDevice do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.FileDevice.create=function(a0,a1){
			return __ZN7CheerpX10FileDevice6createEPNS_14CheerpOSDeviceERKN6client6StringE(a0.this,a1);
		};
		CheerpX.FileDevice.prototype.delete=function(){
			return __ZN7CheerpX10FileDevice6deleteEv(this.this);
		};
		CheerpX.FileDevice.prototype.dumpDevice=function(){
			return __ZN7CheerpX10FileDevice10dumpDeviceEv(this.this);
		};
		CheerpX.GitHubDevice=function (){
			throw new Error("Class/Struct CheerpX.GitHubDevice do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.GitHubDevice.create=__ZN7CheerpX12GitHubDevice6createERKN6client6StringE;
		CheerpX.GitHubDevice.prototype.delete=function(){
			return __ZN7CheerpX12GitHubDevice6deleteEv(this.this);
		};
		CheerpX.HttpBytesDevice=function (){
			throw new Error("Class/Struct CheerpX.HttpBytesDevice do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.HttpBytesDevice.create=__ZN7CheerpX15HttpBytesDevice6createERKN6client6StringE;
		CheerpX.HttpBytesDevice.prototype.delete=function(){
			return __ZN7CheerpX15HttpBytesDevice6deleteEv(this.this);
		};
		CheerpX.IDBDevice=function (){
			throw new Error("Class/Struct CheerpX.IDBDevice do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.IDBDevice.create=__ZN7CheerpX9IDBDevice6createEPN6client6StringE;
		CheerpX.IDBDevice.prototype.createEmptyFile=function(a0,a1){
			return __ZN7CheerpX9IDBDevice15createEmptyFileEPN6client6StringEj(this.this,a0,a1);
		};
		CheerpX.IDBDevice.prototype.delete=function(){
			return __ZN7CheerpX9IDBDevice6deleteEv(this.this);
		};
		CheerpX.IDBDevice.prototype.dumpFile=function(a0){
			return __ZN7CheerpX9IDBDevice8dumpFileEPN6client6StringE(this.this,a0);
		};
		CheerpX.IDBDevice.prototype.readFileAsBlob=function(a0){
			return __ZN7CheerpX9IDBDevice14readFileAsBlobEPN6client6StringE(this.this,a0);
		};
		CheerpX.IDBDevice.prototype.reset=function(){
			return __ZN7CheerpX9IDBDevice5resetEv(this.this);
		};
		CheerpX.Linux=function (){
			throw new Error("Class/Struct CheerpX.Linux do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.Linux.create=__ZN7CheerpX5Linux6createEPN6client14LinuxOptionalsE;
		CheerpX.Linux.prototype.createHud=function(){
			return __ZN7CheerpX5Linux9createHudEv(this.this);
		};
		CheerpX.Linux.prototype.createUnixListener=function(a0){
			return __ZN7CheerpX5Linux18createUnixListenerEPN6client6StringE(this.this,a0);
		};
		CheerpX.Linux.prototype.delete=function(){
			return __ZN7CheerpX5Linux6deleteEv(this.this);
		};
		CheerpX.Linux.prototype.flushIO=function(){
			return __ZN7CheerpX5Linux7flushIOEv(this.this);
		};
		CheerpX.Linux.prototype.networkLogin=function(){
			return __ZN7CheerpX5Linux12networkLoginEv(this.this);
		};
		CheerpX.Linux.prototype.registerCallback=function(a0,a1){
			return __ZN7CheerpX5Linux16registerCallbackERKN6client6StringEPNS1_13EventListenerE(this.this,a0,a1);
		};
		CheerpX.Linux.prototype.run=function(a0,a1,a2){
			return __ZN7CheerpX5Linux3runEPN6client6StringEPNS1_6TArrayIS3_EEPNS1_12RunOptionalsE(this.this,a0,a1,a2);
		};
		CheerpX.Linux.prototype.setActivateConsole=function(a0){
			return __ZN7CheerpX5Linux18setActivateConsoleEPFvjE(this.this,a0);
		};
		CheerpX.Linux.prototype.setConsole=function(a0){
			return __ZN7CheerpX5Linux10setConsoleEPN6client11HTMLElementE(this.this,a0);
		};
		CheerpX.Linux.prototype.setCustomConsole=function(a0,a1,a2){
			return __ZN7CheerpX5Linux16setCustomConsoleEPFvPN6client10Uint8ArrayEjEjj(this.this,a0,a1,a2);
		};
		CheerpX.Linux.prototype.setJITErrorCallback=function(a0){
			return __ZN7CheerpX5Linux19setJITErrorCallbackEPFvPN6client6StringEE(this.this,a0);
		};
		CheerpX.Linux.prototype.setKmsCanvas=function(a0,a1,a2){
			return __ZN7CheerpX5Linux12setKmsCanvasEPN6client17HTMLCanvasElementEjj(this.this,a0,a1,a2);
		};
		CheerpX.Linux.prototype.setOffscreenCanvasCallback=function(a0){
			return __ZN7CheerpX5Linux26setOffscreenCanvasCallbackEPN6client13EventListenerE(this.this,a0);
		};
		CheerpX.Linux.prototype.unregisterCallback=function(a0,a1){
			return __ZN7CheerpX5Linux18unregisterCallbackERKN6client6StringEPNS1_13EventListenerE(this.this,a0,a1);
		};
		CheerpX.Linux.wrap=__ZN7CheerpX5Linux4wrapEPN6client6ObjectE;
		CheerpX.OverlayDevice=function (){
			throw new Error("Class/Struct CheerpX.OverlayDevice do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.OverlayDevice.create=function(a0,a1){
			return __ZN7CheerpX13OverlayDevice6createEPNS_11BlockDeviceEPNS_9IDBDeviceE(a0.this,a1.this);
		};
		CheerpX.OverlayDevice.prototype.delete=function(){
			return __ZN7CheerpX13OverlayDevice6deleteEv(this.this);
		};
		CheerpX.OverlayDevice.prototype.dumpDevice=function(){
			return __ZN7CheerpX13OverlayDevice10dumpDeviceEv(this.this);
		};
		CheerpX.System=function (){
			this.this=__ZN7CheerpX6System3newEv();
		};
		CheerpX.System.create=__ZN7CheerpX6System6createEv;
		CheerpX.System.prototype.createHud=function(){
			return __ZN7CheerpX6System9createHudEv(this.this);
		};
		CheerpX.System.prototype.delete=function(){
			return __ZN7CheerpX6System6deleteEv(this.this);
		};
		CheerpX.System.prototype.run=function(a0){
			return __ZN7CheerpX6System3runEPN6client19SystemConfigurationE(this.this,a0);
		};
		CheerpX.System.wrap=__ZN7CheerpX6System4wrapEPN6client6ObjectE;
		CheerpX.TailscaleNetwork=__ZN7CheerpX16TailscaleNetworkEPN6client6ObjectE;
		CheerpX.UnixListener=function (){
			throw new Error("Class/Struct CheerpX.UnixListener do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.UnixListener.prototype.accept=function(){
			return __ZN7CheerpX12UnixListener6acceptEv(this.this);
		};
		CheerpX.UnixListener.prototype.close=function(){
			return __ZN7CheerpX12UnixListener5closeEv(this.this);
		};
		CheerpX.WebDevice=function (){
			throw new Error("Class/Struct CheerpX.WebDevice do not have a [[cheerp::jsexport]]-ed constructor");
		};
		CheerpX.WebDevice.create=__ZN7CheerpX9WebDevice6createERKN6client6StringE;
		CheerpX.WebDevice.prototype.delete=function(){
			return __ZN7CheerpX9WebDevice6deleteEv(this.this);
		};
		CheerpX.copyFile=__ZN7CheerpX8copyFileEPN6client13CopyOptionalsES2_;
		CheerpXProcess=function (a0){
			this.this=__ZN14CheerpXProcess3newEj(a0);
		};
		CheerpXProcess.prototype.delete=function(){
			return __ZN14CheerpXProcess6deleteEv(this.this);
		};
		CheerpXProcess.prototype.setSignalHandlers=function(a0){
			return __ZN14CheerpXProcess17setSignalHandlersEPN6client14SignalHandlersE(this.this,a0);
		};
		Object.setPrototypeOf(CheerpX.BlockDevice.prototype,CheerpX.Device.prototype);
		Object.setPrototypeOf(CheerpX.CheerpOSDevice.prototype,CheerpX.Device.prototype);
		Object.setPrototypeOf(CheerpX.CloudDevice.prototype,CheerpX.BlockDevice.prototype);
		Object.setPrototypeOf(CheerpX.DataDevice.prototype,CheerpX.CheerpOSDevice.prototype);
		Object.setPrototypeOf(CheerpX.FileDevice.prototype,CheerpX.BlockDevice.prototype);
		Object.setPrototypeOf(CheerpX.GitHubDevice.prototype,CheerpX.BlockDevice.prototype);
		Object.setPrototypeOf(CheerpX.HttpBytesDevice.prototype,CheerpX.BlockDevice.prototype);
		Object.setPrototypeOf(CheerpX.IDBDevice.prototype,CheerpX.CheerpOSDevice.prototype);
		Object.setPrototypeOf(CheerpX.OverlayDevice.prototype,CheerpX.BlockDevice.prototype);
		Object.setPrototypeOf(CheerpX.WebDevice.prototype,CheerpX.CheerpOSDevice.prototype);
		__start();
		var __export={
			CheerpX:CheerpX,
			CheerpXProcess:CheerpXProcess,
		};
		return __export;
	});
}
