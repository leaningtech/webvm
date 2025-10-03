"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
var CHEERP_ENV=null,CHEERP_ARGV=null;
function __ZN16TailscaleNetwork9TCPSocketEPN6client6StringEj(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null;
	if(Larg0.a0!==null){
		tmp0={a0:null,a1:null,a2:null,a3:null,a4:null,a5:null,i6:0};
		__ZN16TailscaleNetwork10TCPWrapperC2EPS_(tmp0,Larg0);
		tmp2={a0:null};
		__ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj(tmp2,tmp0,Larg0,Larg1,Larg2);
		tmp2=tmp0.a1.promise;
		tmp1=tmp0.a2.promise;
		return {opened :tmp2, closed :tmp1, close :tmp0.a5};
	}
	return null;
}
function __ZN16TailscaleNetwork15TCPServerSocketEPN6client6StringEPNS0_22TCPServerSocketOptionsE(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null;
	tmp3=undefined;
	if(Larg0.a0!==null){
		if(tmp3===Larg2)return null;
		if(Larg2.hasOwnProperty("localPort")){
			tmp0=Larg2.localPort;
			tmp3={a0:null,a1:null,a2:null,a3:null,a4:null,a5:null,i6:0};
			__ZN16TailscaleNetwork10TCPWrapperC2EPS_(tmp3,Larg0);
			__ZN16TailscaleNetwork10TCPWrapper6listenEPS_PN6client6StringEj(tmp3,Larg0,Larg1,tmp0);
			tmp1=tmp3.a1.promise;
			tmp2=tmp3.a2.promise;
			return {opened :tmp1, closed :tmp2, close :tmp3.a5};
		}
		return null;
	}
	return null;
}
function __ZN16TailscaleNetwork9UDPSocketEPN6client16UDPSocketOptionsE(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null;
	tmp3=undefined;
	if(Larg0.a0!==null){
		if(tmp3===Larg1)return null;
		if(Larg1.hasOwnProperty("localPort")){
			tmp0=Larg1.localPort;
			tmp3={a0:null,a1:null,a2:null,a3:null,a4:null,a5:null,i6:0};
			__ZN16TailscaleNetwork10UDPWrapperC2EPS_(tmp3,Larg0);
			__ZN16TailscaleNetwork10UDPWrapper4bindEPS_j(tmp3,Larg0,tmp0);
			tmp1=tmp3.a1.promise;
			tmp2=tmp3.a2.promise;
			return {opened :tmp1, closed :tmp2, close :tmp3.a5};
		}
		return null;
	}
	return null;
}
function __ZN16TailscaleNetwork2upEv(Larg0){
	var tmp0=null,L$poptgepsqueezed8=null,tmp2=null,tmp3=null;
	tmp2=new constructor__ZN16TailscaleNetwork2upEv$pFrame();
	tmp3=tmp2;
	tmp3.a0=__ZN16TailscaleNetwork2upEv$presume;
	tmp3.a1=__ZN16TailscaleNetwork2upEv$pdestroy;
	tmp3.a3=Larg0;
	tmp0=__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEv(tmp3.a2);
	L$poptgepsqueezed8=tmp3.a5;
	__ZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed8,tmp3.a3.a1);
	tmp3.i8=1;
	tmp3={a0:null};
	__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEE12from_addressB7v160000EPv(tmp3,tmp2);
	tmp2={a0:null};
	__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEEcvS_IvEB7v160000Ev(tmp2,tmp3);
	__ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed8,tmp2);
	return tmp0;
}
function __ZN16TailscaleNetwork3newEPN6client6ObjectE(Larg0){
	var tmp0=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN16TailscaleNetworkC1EPN6client6ObjectE(tmp0,Larg0);
	return tmp0;
}
function __ZN16TailscaleNetwork6deleteEv(Larg0){
}
function __ZN16TailscaleNetworkC1EPN6client6ObjectE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null;
	Larg0.a0=null;
	tmp1=__ZN6client20PromiseWithResolversIPNS_4_AnyEE6createEv();
	Larg0.a2=tmp1.promise;
	tmp2=Larg1["stateUpdateCb"];
	tmp0={a0:null,a1:null};
	tmp0.a0=tmp1;
	tmp0.a1=tmp2;
	tmp1=__ZN6cheerp8CallbackIZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_EEPNS2_13EventListenerEOT_(tmp0);
	Larg1["stateUpdateCb"]=tmp1;
	tmp1=import('./tailscale_tun_auto.js');
	tmp2={a0:null,a1:null};
	tmp2.a0=Larg0;
	tmp2.a1=Larg1;
	Larg0.a1=tmp1.then(__ZN6cheerp8CallbackIZN16TailscaleNetworkC1EPN6client6ObjectEEUlPNS2_13IPNetworkConfEE_EEPNS2_13EventListenerEOT_(tmp2));
}
function __ZN6client20PromiseWithResolversIPNS_4_AnyEE6createEv(){
	return Promise.withResolvers();
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	var tmp0=0,tmp1=0,tmp2=null;
	tmp2=String();
	tmp0=0;
	while(1){
		tmp1=Larg0[Marg0+tmp0|0]|0;
		if((tmp1&255)!==0){
			tmp2=tmp2.concat(String.fromCharCode(tmp1&255));
			tmp0=tmp0+1|0;
			continue;
		}
		break;
	}
	return tmp2;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS6_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS6_Efp_EEEOS6_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFviEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFviEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetworkC1EPN6client6ObjectEEUlPNS2_13IPNetworkConfEE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetworkC1EPN6client6ObjectEEUlPNS2_13IPNetworkConfEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS8_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS8_Efp_EEEOS8_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_9IPNetworkEEEPNS1_13IPNetworkConfEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_9IPNetworkEEEPNS1_13IPNetworkConfEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIZN16TailscaleNetworkC1EPN6client6ObjectEEUlPNS2_13IPNetworkConfEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS8_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS8_Efp_EEEOS8_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetworkC1EPN6client6ObjectEEUlPNS2_13IPNetworkConfEE_MS7_KFPNS2_7PromiseIPNS2_9IPNetworkEEES6_EE12make_closureEOS7_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_9IPNetworkEEEPNS1_13IPNetworkConfEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_9IPNetworkEEEPNS1_13IPNetworkConfEEE14deleter_helperEPNSA_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_9IPNetworkEEEPNS1_13IPNetworkConfEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_9IPNetworkEEEPNS1_13IPNetworkConfEEE14deleter_helperEPNSA_13DeleterHelperE(Larg0){
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
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetworkC1EPN6client6ObjectEEUlPNS2_13IPNetworkConfEE_MS7_KFPNS2_7PromiseIPNS2_9IPNetworkEEES6_EE12make_closureEOS7_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_9IPNetworkEEEPNS1_13IPNetworkConfEEEC2IZN16TailscaleNetworkC1EPNS1_6ObjectEEUlS8_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISG_PS9_EE5valueEvE4typeEPNSJ_IXntsrNSA_13_must_destroyISG_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_9IPNetworkEEEPNS1_13IPNetworkConfEEEC2IZN16TailscaleNetworkC1EPNS1_6ObjectEEUlS8_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISG_PS9_EE5valueEvE4typeEPNSJ_IXntsrNSA_13_must_destroyISG_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:null}];
	tmp0[0].a0=Larg1.a0;
	tmp0[0].a1=Larg1.a1;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_9IPNetworkEEEE6invokeIZN16TailscaleNetworkC1EPNS1_6ObjectEEUlPNS1_13IPNetworkConfEE_JSD_EEES6_PT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_9IPNetworkEEEE6invokeIZN16TailscaleNetworkC1EPNS1_6ObjectEEUlPNS1_13IPNetworkConfEE_JSD_EEES6_PT_DpT0_(Larg0,Larg1){
	return __ZZN16TailscaleNetworkC1EPN6client6ObjectEENKUlPNS0_13IPNetworkConfEE_clES4_(Larg0,Larg1);
}
function __ZZN16TailscaleNetworkC1EPN6client6ObjectEENKUlPNS0_13IPNetworkConfEE_clES4_(Larg0,Larg1){
	return Larg1.autoConf(Larg0.a1);
}
function __ZN6cheerp12make_closureIZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS6_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS6_Efp_EEEOS6_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_MS5_KFviEE12make_closureEOS5_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFviEEcvPN6client13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFviEE14deleter_helperEPNS2_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFviEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFviEE14deleter_helperEPNS2_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_MS5_KFviEE12make_closureEOS5_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFviEEC2IZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS9_PS1_EE5valueEvE4typeEPNSC_IXntsrNS2_13_must_destroyIS9_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFviEEC2IZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS9_PS1_EE5valueEvE4typeEPNSC_IXntsrNS2_13_must_destroyIS9_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:null}];
	tmp0[0].a0=Larg1.a0;
	tmp0[0].a1=Larg1.a1;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_JiEEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetworkC1EPN6client6ObjectEEUliE_JiEEEvPT_DpT0_(Larg0,Larg1){
	__ZZN16TailscaleNetworkC1EPN6client6ObjectEENKUliE_clEi(Larg0,Larg1);
}
function __ZZN16TailscaleNetworkC1EPN6client6ObjectEENKUliE_clEi(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0.call(null,Larg1);
	if((Larg1|0)===6)Larg0.a0.resolve.call(null);
}
function __ZN16TailscaleNetwork2upEv$presume(Larg0){
	var tmp0=0,L$poptgepsqueezed15=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed16=null;
	tmp0=Larg0.i8|0;
	L$poptgepsqueezed15=Larg0.a6;
	tmp2={a0:null};
	tmp3={a0:null};
	if((tmp0&7)<2){
		L$poptgepsqueezed16=Larg0.a5;
		if((tmp0&7)!==0){
			tmp4=__ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEENK15promise_awaiter12await_resumeEv(L$poptgepsqueezed16);
			Larg0.a4=tmp4;
			__ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed16);
			__ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed15,tmp4.up());
			Larg0.i8=2;
			__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEE12from_addressB7v160000EPv(tmp2,Larg0);
			__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEEcvS_IvEB7v160000Ev(tmp3,tmp2);
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed15,tmp3);
		}else{
			__ZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed16,Larg0.a3.a1);
			Larg0.i8=1;
			__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEE12from_addressB7v160000EPv(tmp2,Larg0);
			__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEEcvS_IvEB7v160000Ev(tmp3,tmp2);
			__ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed16,tmp3);
		}
	}else{
		L$poptgepsqueezed16=Larg0.a7;
		if((tmp0&7)===2){
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed15);
			__ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed16,Larg0.a3.a2);
			Larg0.i8=3;
			__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEE12from_addressB7v160000EPv(tmp2,Larg0);
			__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEEcvS_IvEB7v160000Ev(tmp3,tmp2);
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed16,tmp3);
		}else{
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed16);
			Larg0.a3.a0=Larg0.a4;
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJR16TailscaleNetworkEE12promise_type12return_valueES3_(Larg0.a2);
		}
	}
}
function __ZN16TailscaleNetwork2upEv$pdestroy(Larg0){
	var tmp0=0;
	tmp0=Larg0.i8|0;
	if(Larg0.a0!==null)if((tmp0&7)<2){
		if((tmp0&7)!==0)__ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0.a5);
	}else if((tmp0&7)===2)__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0.a6);
	else __ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0.a7);
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	return new Promise(_cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(tmp0));
}
function __ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEEcvS_IvEB7v160000Ev(Larg0,Larg1){
	__ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEE7addressB7v160000Ev(Larg1));
}
function __ZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EE(Larg0,Larg1){
	__ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiterC2EPNS3_IS2_EE(Larg0,Larg1);
}
function __ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=new Uint8Array(1);
	tmp0[0]=0;
	Larg0.a2=tmp0;
	tmp1=Larg0.a0;
	tmp2={a0:null,a1:{a0:null},a2:nullArray};
	tmp2.a0=Larg0;
	tmp2.a1.a0=Larg1.a0;
	tmp2.a2=tmp0;
	tmp1.then(_cheerpCreate_ZN6client9_FunctionIFPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEPNS_9IPNetworkEEEC2IZZawISA_EDaRNS_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlSA_E_vEEOSG_(tmp2));
}
function __ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEENK15promise_awaiter12await_resumeEv(Larg0){
	return Larg0.a1;
}
function __ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a2;
	if(tmp0!==nullArray||0!==0)tmp0[0]=1;
}
function __ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(Larg0,Larg1){
	__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterC2EPNS3_IS2_EE(Larg0,Larg1);
}
function __ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=new Uint8Array(1);
	tmp0[0]=0;
	Larg0.a2=tmp0;
	tmp1=Larg0.a0;
	tmp2={a0:null,a1:{a0:null},a2:nullArray};
	tmp2.a0=Larg0;
	tmp2.a1.a0=Larg1.a0;
	tmp2.a2=tmp0;
	tmp1.then(_cheerpCreate_ZN6client9_FunctionIFPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEES3_EEC2IZZawIS3_EDaRNS_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS3_E_vEEOSE_(tmp2));
}
function __ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a2;
	if(tmp0!==nullArray||0!==0)tmp0[0]=1;
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJR16TailscaleNetworkEE12promise_type12return_valueES3_(Larg0){
	Larg0.a0.call(null,null);
}
function _cheerpCreate_ZN6client9_FunctionIFPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEES3_EEC2IZZawIS3_EDaRNS_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS3_E_vEEOSE_(Larg0){
	return __ZN6cheerp8CallbackIRZZawIPN6client4_AnyEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_EEPNS2_13EventListenerEOS6_(Larg0);
}
function __ZN6cheerp8CallbackIRZZawIPN6client4_AnyEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_EEPNS2_13EventListenerEOS6_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZZawIPN6client4_AnyEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_EEDTclsr13ClosureHelperIS6_DTadsr6cheerp7utility16remove_referenceIS6_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS6_Efp_EEEOS6_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client4_AnyEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client4_AnyEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZZawIPN6client4_AnyEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_EEDTclsr13ClosureHelperIS6_DTadsr6cheerp7utility16remove_referenceIS6_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS6_Efp_EEEOS6_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZZawIPN6client4_AnyEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_MSC_KFvS4_EE12make_closureESD_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client4_AnyEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvPN6client4_AnyEEE14deleter_helperEPNS5_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFvPN6client4_AnyEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFvPN6client4_AnyEEE14deleter_helperEPNS5_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIRZZawIPN6client4_AnyEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_MSC_KFvS4_EE12make_closureESD_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client4_AnyEEEC2IRZZawIS3_EDaRNS1_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS3_E_EEOS9_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS9_PS4_EE5valueEvE4typeEPNSJ_IXntsrNS5_13_must_destroyIS9_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client4_AnyEEEC2IRZZawIS3_EDaRNS1_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS3_E_EEOS9_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS9_PS4_EE5valueEvE4typeEPNSJ_IXntsrNS5_13_must_destroyIS9_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:{a0:null},a2:nullArray}];
	tmp0[0].a0=Larg1.a0;
	tmp0[0].a1.a0=Larg1.a1.a0;
	tmp1=Larg1.a2;
	tmp0[0].a2=tmp1;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client4_AnyEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	__ZZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEENKUlS2_E_clES2_(Larg0,Larg1);
}
function __ZZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEENKUlS2_E_clES2_(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a2;
	if((tmp0[0]&1)===0){
		tmp0=Larg0.a0;
		tmp0.a1=Larg1;
		tmp0.a2=nullArray;
		__ZNKSt16coroutine_handleIvE6resumeB7v160000Ev(Larg0.a1);
	}
}
function __ZNKSt16coroutine_handleIvE6resumeB7v160000Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a0;
	tmp0.a0(tmp0);
}
function __ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterC2EPNS3_IS2_EE(Larg0,Larg1){
	Larg0.a2=nullArray;
	Larg0.a0=Larg1;
}
function _cheerpCreate_ZN6client9_FunctionIFPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEPNS_9IPNetworkEEEC2IZZawISA_EDaRNS_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlSA_E_vEEOSG_(Larg0){
	return __ZN6cheerp8CallbackIRZZawIPN6client9IPNetworkEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_EEPNS2_13EventListenerEOS6_(Larg0);
}
function __ZN6cheerp8CallbackIRZZawIPN6client9IPNetworkEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_EEPNS2_13EventListenerEOS6_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZZawIPN6client9IPNetworkEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_EEDTclsr13ClosureHelperIS6_DTadsr6cheerp7utility16remove_referenceIS6_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS6_Efp_EEEOS6_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client9IPNetworkEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client9IPNetworkEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZZawIPN6client9IPNetworkEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_EEDTclsr13ClosureHelperIS6_DTadsr6cheerp7utility16remove_referenceIS6_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS6_Efp_EEEOS6_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZZawIPN6client9IPNetworkEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_MSC_KFvS4_EE12make_closureESD_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client9IPNetworkEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvPN6client9IPNetworkEEE14deleter_helperEPNS5_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFvPN6client9IPNetworkEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFvPN6client9IPNetworkEEE14deleter_helperEPNS5_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIRZZawIPN6client9IPNetworkEEDaRNS2_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS4_E_MSC_KFvS4_EE12make_closureESD_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client9IPNetworkEEEC2IRZZawIS3_EDaRNS1_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS3_E_EEOS9_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS9_PS4_EE5valueEvE4typeEPNSJ_IXntsrNS5_13_must_destroyIS9_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client9IPNetworkEEEC2IRZZawIS3_EDaRNS1_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS3_E_EEOS9_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS9_PS4_EE5valueEvE4typeEPNSJ_IXntsrNS5_13_must_destroyIS9_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:{a0:null},a2:nullArray}];
	tmp0[0].a0=Larg1.a0;
	tmp0[0].a1.a0=Larg1.a1.a0;
	tmp1=Larg1.a2;
	tmp0[0].a2=tmp1;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client9IPNetworkEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIPN6client9IPNetworkEEDaRNS4_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUlS6_E_JS6_EEEvPS8_DpT0_(Larg0,Larg1){
	__ZZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEENKUlS2_E_clES2_(Larg0,Larg1);
}
function __ZZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEENKUlS2_E_clES2_(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a2;
	if((tmp0[0]&1)===0){
		tmp0=Larg0.a0;
		tmp0.a1=Larg1;
		tmp0.a2=nullArray;
		__ZNKSt16coroutine_handleIvE6resumeB7v160000Ev(Larg0.a1);
	}
}
function __ZZawIPN6client9IPNetworkEEDaRNS0_7PromiseIT_EEEN15promise_awaiterC2EPNS3_IS2_EE(Larg0,Larg1){
	Larg0.a2=nullArray;
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_typeEE7addressB7v160000Ev(Larg0){
	return Larg0.a0;
}
function __ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function _cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(Larg0){
	return __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0);
}
function __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISG_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISG_Efp_EEEOSG_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client8FunctionEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISG_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISG_Efp_EEEOSG_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSE_KFvSD_EE12make_closureESF_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvPN6client8FunctionEEE14deleter_helperEPNS5_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEE14deleter_helperEPNS5_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSE_KFvSD_EE12make_closureESF_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISJ_PS4_EE5valueEvE4typeEPNSM_IXntsrNS5_13_must_destroyISJ_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISJ_PS4_EE5valueEvE4typeEPNSM_IXntsrNS5_13_must_destroyISJ_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSF_EEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSF_EEEvPT_DpT0_(Larg0,Larg1){
	__ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESB_(Larg0,Larg1);
}
function __ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJR16TailscaleNetworkEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESB_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZN16TailscaleNetwork10UDPWrapperC2EPS_(Larg0,Larg1){
	__ZN16TailscaleNetwork10UDPWrapperC2EPN6client11IPUDPSocketE(Larg0,__ZN16TailscaleNetwork10UDPWrapper10makeSocketEPS_(Larg1));
}
function __ZN16TailscaleNetwork10UDPWrapper4bindEPS_j(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null;
	if(((Larg0.a0.bind(Larg2))|0)!==0){
		tmp0=new Error("Cannot bind");
		Larg0.a1.reject.call(null,tmp0);
		__ZN16TailscaleNetwork10UDPWrapper5closeEPN6client5ErrorE(Larg0,tmp0);
	}else{
		tmp0=_cheerpCreate_ZN6client16UnderlyingSourceIPNS_10UDPMessageEEC2Ev();
		tmp1={a0:null,a1:null};
		tmp1.a0=Larg1;
		tmp1.a1=Larg0;
		tmp0.pull=__ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client31ReadableStreamDefaultControllerIPNS4_10UDPMessageEEEE_EEPNS4_13EventListenerEOT_(tmp1);
		tmp1={a0:null};
		tmp1.a0=Larg0;
		tmp0.cancel=__ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE_EEPN6client13EventListenerEOT_(tmp1);
		Larg0.a3=new ReadableStream(tmp0);
		tmp0=_cheerpCreate_ZN6client14UnderlyingSinkIPNS_10UDPMessageEEC2Ev();
		tmp1={a0:null,a1:null};
		tmp1.a0=Larg1;
		tmp1.a1=Larg0;
		tmp0.write=__ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client10UDPMessageEPNS4_31WritableStreamDefaultControllerEE_EEPNS4_13EventListenerEOT_(tmp1);
		tmp1={a0:null};
		tmp1.a0=Larg0;
		tmp0.close=__ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE0_EEPN6client13EventListenerEOT_(tmp1);
		tmp1={a0:null};
		tmp1.a0=Larg0;
		tmp0.abort=__ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE1_EEPN6client13EventListenerEOT_(tmp1);
		Larg0.a4=new WritableStream(tmp0);
		tmp0="0.0.0.0";
		tmp1=Larg0.a1.resolve;
		tmp1.call(null,{readable :Larg0.a3, writable :Larg0.a4, localAddress :tmp0, localPort :Larg2});
	}
}
function __ZN16TailscaleNetwork10UDPWrapper5closeEPN6client5ErrorE(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a0;
	if(tmp0!==null){
		tmp0.close();
		Larg0.i6=257;
		tmp0=Larg0.a2;
		if(Larg1!==null)tmp0.reject.call(null,Larg1);
		else tmp0.resolve.call(null);
		Larg0.a0.delete();
		Larg0.a0=null;
	}
}
function _cheerpCreate_ZN6client16UnderlyingSourceIPNS_10UDPMessageEEC2Ev(){
	return new Object();
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client31ReadableStreamDefaultControllerIPNS4_10UDPMessageEEEE_EEPNS4_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client31ReadableStreamDefaultControllerIPNS4_10UDPMessageEEEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISB_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISB_Efp_EEEOSB_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE_EEPN6client13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS5_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS5_Efp_EEEOS5_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvvEED2Ev(tmp0);
	return tmp1;
}
function _cheerpCreate_ZN6client14UnderlyingSinkIPNS_10UDPMessageEEC2Ev(){
	return new Object();
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client10UDPMessageEPNS4_31WritableStreamDefaultControllerEE_EEPNS4_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client10UDPMessageEPNS4_31WritableStreamDefaultControllerEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISA_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISA_Efp_EEEOSA_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client10UDPMessageEPNS1_31WritableStreamDefaultControllerEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client10UDPMessageEPNS1_31WritableStreamDefaultControllerEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE0_EEPN6client13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE0_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS5_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS5_Efp_EEEOS5_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvvEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE1_EEPN6client13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE1_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS5_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS5_Efp_EEEOS5_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvvEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE1_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS5_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS5_Efp_EEEOS5_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE1_MS4_KFvvEE12make_closureEOS4_(Larg0,Larg1);
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
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE1_MS4_KFvvEE12make_closureEOS4_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPS4_jEUlvE1_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS8_PS1_EE5valueEvE4typeEPNSB_IXntsrNS2_13_must_destroyIS8_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPS4_jEUlvE1_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS8_PS1_EE5valueEvE4typeEPNSB_IXntsrNS2_13_must_destroyIS8_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS3_jEUlvE1_JEEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS3_jEUlvE1_JEEEvPT_DpT0_(Larg0){
	__ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlvE1_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlvE1_clEv(Larg0){
	__ZN16TailscaleNetwork10UDPWrapper9doCloseTxEv(Larg0.a0);
}
function __ZN16TailscaleNetwork10UDPWrapper9doCloseTxEv(Larg0){
	var Lmergedload=0;
	Lmergedload=Larg0.i6|0;
	Larg0.i6=Lmergedload&65280|1;
	if((Lmergedload&256)!==0)__ZN16TailscaleNetwork10UDPWrapper5closeEPN6client5ErrorE(Larg0,null);
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE0_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS5_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS5_Efp_EEEOS5_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE0_MS4_KFvvEE12make_closureEOS4_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE0_MS4_KFvvEE12make_closureEOS4_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPS4_jEUlvE0_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS8_PS1_EE5valueEvE4typeEPNSB_IXntsrNS2_13_must_destroyIS8_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPS4_jEUlvE0_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS8_PS1_EE5valueEvE4typeEPNSB_IXntsrNS2_13_must_destroyIS8_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS3_jEUlvE0_JEEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS3_jEUlvE0_JEEEvPT_DpT0_(Larg0){
	__ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlvE0_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlvE0_clEv(Larg0){
	__ZN16TailscaleNetwork10UDPWrapper9doCloseTxEv(Larg0.a0);
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client10UDPMessageEPNS4_31WritableStreamDefaultControllerEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISA_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISA_Efp_EEEOSA_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client10UDPMessageEPNS4_31WritableStreamDefaultControllerEE_MS9_KFvS6_S8_EE12make_closureEOS9_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client10UDPMessageEPNS1_31WritableStreamDefaultControllerEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFvPN6client10UDPMessageEPNS1_31WritableStreamDefaultControllerEEE14deleter_helperEPNS7_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFvPN6client10UDPMessageEPNS1_31WritableStreamDefaultControllerEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFvPN6client10UDPMessageEPNS1_31WritableStreamDefaultControllerEEE14deleter_helperEPNS7_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client10UDPMessageEPNS4_31WritableStreamDefaultControllerEE_MS9_KFvS6_S8_EE12make_closureEOS9_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client10UDPMessageEPNS1_31WritableStreamDefaultControllerEEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPS9_jEUlS3_S5_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISD_PS6_EE5valueEvE4typeEPNSG_IXntsrNS7_13_must_destroyISD_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client10UDPMessageEPNS1_31WritableStreamDefaultControllerEEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPS9_jEUlS3_S5_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISD_PS6_EE5valueEvE4typeEPNSG_IXntsrNS7_13_must_destroyISD_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:null}];
	tmp0[0].a0=Larg1.a0;
	tmp0[0].a1=Larg1.a1;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS3_jEUlPN6client10UDPMessageEPNS6_31WritableStreamDefaultControllerEE_JS8_SA_EEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS3_jEUlPN6client10UDPMessageEPNS6_31WritableStreamDefaultControllerEE_JS8_SA_EEEvPT_DpT0_(Larg0,Larg1,Larg2){
	__ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlPN6client10UDPMessageEPNS2_31WritableStreamDefaultControllerEE_clES4_S6_(Larg0,Larg1,Larg2);
}
function __ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlPN6client10UDPMessageEPNS2_31WritableStreamDefaultControllerEE_clES4_S6_(Larg0,Larg1,Larg2){
	__ZN16TailscaleNetwork10UDPWrapper5writeEPS_PN6client10UDPMessageEPNS2_31WritableStreamDefaultControllerE(Larg0.a1,Larg0.a0,Larg1,Larg2);
}
function __ZN16TailscaleNetwork10UDPWrapper5writeEPS_PN6client10UDPMessageEPNS2_31WritableStreamDefaultControllerE(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=Larg0.a0;
	tmp1=Larg2.data;
	tmp2=Larg1.a0;
	tmp3=tmp2.parseIP(Larg2.remoteAddress);
	if(((tmp0.sendto(tmp1,tmp3,Larg2.remotePort))|0)<0){
		Larg3.error("Error on write");
		__ZN16TailscaleNetwork10UDPWrapper5closeEPN6client5ErrorE(Larg0,new Error("Error on write"));
	}
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS5_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS5_Efp_EEEOS5_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE_MS4_KFvvEE12make_closureEOS4_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlvE_MS4_KFvvEE12make_closureEOS4_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPS4_jEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS8_PS1_EE5valueEvE4typeEPNSB_IXntsrNS2_13_must_destroyIS8_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPS4_jEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS8_PS1_EE5valueEvE4typeEPNSB_IXntsrNS2_13_must_destroyIS8_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS3_jEUlvE_JEEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS3_jEUlvE_JEEEvPT_DpT0_(Larg0){
	__ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlvE_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlvE_clEv(Larg0){
	__ZN16TailscaleNetwork10UDPWrapper9doCloseRxEv(Larg0.a0);
}
function __ZN16TailscaleNetwork10UDPWrapper9doCloseRxEv(Larg0){
	var Lmergedload=0;
	Lmergedload=Larg0.i6|0;
	Larg0.i6=Lmergedload&255|256;
	if((Lmergedload&1)!==0)__ZN16TailscaleNetwork10UDPWrapper5closeEPN6client5ErrorE(Larg0,null);
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client31ReadableStreamDefaultControllerIPNS4_10UDPMessageEEEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISB_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISB_Efp_EEEOSB_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client31ReadableStreamDefaultControllerIPNS4_10UDPMessageEEEE_MSA_KFPNS4_7PromiseIPNS4_4_AnyEEES9_EE12make_closureEOSA_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE14deleter_helperEPNSD_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE14deleter_helperEPNSD_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapper4bindEPS1_jEUlPN6client31ReadableStreamDefaultControllerIPNS4_10UDPMessageEEEE_MSA_KFPNS4_7PromiseIPNS4_4_AnyEEES9_EE12make_closureEOSA_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPSF_jEUlSB_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISJ_PSC_EE5valueEvE4typeEPNSM_IXntsrNSD_13_must_destroyISJ_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEEC2IZN16TailscaleNetwork10UDPWrapper4bindEPSF_jEUlSB_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISJ_PSC_EE5valueEvE4typeEPNSM_IXntsrNSD_13_must_destroyISJ_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:null}];
	tmp0[0].a0=Larg1.a0;
	tmp0[0].a1=Larg1.a1;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS9_jEUlPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEE_JSG_EEES6_PT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10UDPWrapper4bindEPS9_jEUlPNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEE_JSG_EEES6_PT_DpT0_(Larg0,Larg1){
	return __ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlPN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEEE_clES7_(Larg0,Larg1);
}
function __ZZN16TailscaleNetwork10UDPWrapper4bindEPS_jENKUlPN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEEE_clES7_(Larg0,Larg1){
	return __ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE(Larg0.a1,Larg0.a0,Larg1);
}
function __ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null,L$poptgepsqueezed16=null,tmp4=null,tmp5=0,tmp6=null;
	tmp1=new constructor__ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE$pFrame();
	tmp2=tmp1;
	tmp2.a0=__ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE$presume;
	tmp2.a1=__ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE$pdestroy;
	tmp2.a7=Larg2;
	tmp2.a6=Larg1;
	tmp2.a5=Larg0;
	L$poptgepsqueezed16=tmp2.a2;
	tmp0=__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type17get_return_objectEv(L$poptgepsqueezed16);
	tmp2.a4=new Uint8Array(1500);
	tmp2.a3=_cheerpCreate_ZN6client10IPAddrInfoC2Ev();
	tmp4=tmp2.a5.a0;
	tmp5=tmp2.a4.length;
	tmp5=tmp4.recv(tmp2.a4,0,tmp5,tmp2.a3);
	tmp2.i8=tmp5;
	if((tmp5|0)===-11){
		L$poptgepsqueezed16=tmp2.a9;
		__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed16,tmp2.a5.a0.waitIncoming());
		tmp2.i10=1;
		tmp2={a0:null};
		__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_typeEE12from_addressB7v160000EPv(tmp2,tmp1);
		tmp1={a0:null};
		__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_typeEEcvS_IvEB7v160000Ev(tmp1,tmp2);
		__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed16,tmp1);
	}else{
		tmp1=tmp2.a7;
		if((tmp5|0)<1){
			tmp4=tmp2.a5;
			tmp6="Error on read";
			tmp1.error(tmp6);
			tmp1="Error on read";
			__ZN16TailscaleNetwork10UDPWrapper5closeEPN6client5ErrorE(tmp4,new Error(tmp1));
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type12return_valueES3_(L$poptgepsqueezed16);
		}else{
			tmp4=tmp2.a6;
			tmp6=_cheerpCreate_ZN6client10UDPMessageC2Ev();
			tmp6.data=tmp2.a4.subarray(0,(+(tmp5|0)));
			tmp4=tmp4.a0;
			tmp6.remoteAddress=tmp4.dumpIP(tmp2.a3.addr);
			tmp6.remotePort=tmp2.a3.port;
			tmp1.enqueue(tmp6);
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type12return_valueES3_(L$poptgepsqueezed16);
		}
	}
	return tmp0;
}
function __ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE$presume(Larg0){
	var L$poptgepsqueezed16=null,tmp1=0,L$poptgepsqueezed15=null,tmp3=null,tmp4=null,tmp5=null;
	L$poptgepsqueezed16=Larg0.a9;
	a:{
		b:{
			if((Larg0.i10&3)!==0){
				tmp1=__ZZawIiEDaRN6client7PromiseIT_EEENK15promise_awaiter12await_resumeEv(L$poptgepsqueezed16)|0;
				__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed16);
				if((tmp1|0)!==0)break b;
				tmp3=Larg0.a3;
				tmp4=Larg0.a4;
			}else{
				tmp4=new Uint8Array(1500);
				Larg0.a4=tmp4;
				tmp3=_cheerpCreate_ZN6client10IPAddrInfoC2Ev();
				Larg0.a3=tmp3;
			}
			tmp5=Larg0.a5;
			L$poptgepsqueezed15=tmp5.a0;
			tmp1=L$poptgepsqueezed15.recv(tmp4,0,tmp4.length,tmp3);
			Larg0.i8=tmp1;
			if((tmp1|0)===-11){
				__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed16,tmp5.a0.waitIncoming());
				Larg0.i10=1;
				tmp3={a0:null};
				__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_typeEE12from_addressB7v160000EPv(tmp3,Larg0);
				tmp4={a0:null};
				__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_typeEEcvS_IvEB7v160000Ev(tmp4,tmp3);
				__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed16,tmp4);
				break a;
			}
		}
		L$poptgepsqueezed16=Larg0.a7;
		L$poptgepsqueezed15=Larg0.a2;
		if((tmp1|0)<1){
			tmp3=Larg0.a5;
			tmp4="Error on read";
			L$poptgepsqueezed16.error(tmp4);
			L$poptgepsqueezed16="Error on read";
			__ZN16TailscaleNetwork10UDPWrapper5closeEPN6client5ErrorE(tmp3,new Error(L$poptgepsqueezed16));
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type12return_valueES3_(L$poptgepsqueezed15);
		}else{
			tmp3=Larg0.a6;
			tmp5=_cheerpCreate_ZN6client10UDPMessageC2Ev();
			tmp5.data=Larg0.a4.subarray(0,(+(tmp1|0)));
			tmp3=tmp3.a0;
			tmp4=Larg0.a3;
			tmp5.remoteAddress=tmp3.dumpIP(tmp4.addr);
			tmp5.remotePort=tmp4.port;
			L$poptgepsqueezed16.enqueue(tmp5);
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type12return_valueES3_(L$poptgepsqueezed15);
		}
	}
}
function __ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE$pdestroy(Larg0){
	var tmp0=0;
	tmp0=Larg0.i10|0;
	if(Larg0.a0!==null)if((tmp0&3)!==0)__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0.a9);
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type17get_return_objectEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	return new Promise(_cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRN16TailscaleNetwork10UDPWrapperEPSM_PNS_31ReadableStreamDefaultControllerIPNS_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(tmp0));
}
function __ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_typeEE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_typeEEcvS_IvEB7v160000Ev(Larg0,Larg1){
	__ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_typeEE7addressB7v160000Ev(Larg1));
}
function _cheerpCreate_ZN6client10IPAddrInfoC2Ev(){
	return new Object();
}
function __ZawIiEDaRN6client7PromiseIT_EE(Larg0,Larg1){
	__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterC2EPNS1_IiEE(Larg0,Larg1);
}
function __ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=new Uint8Array(1);
	tmp0[0]=0;
	Larg0.a2=tmp0;
	tmp1=Larg0.a0;
	tmp2={a0:null,a1:{a0:null},a2:nullArray};
	tmp2.a0=Larg0;
	tmp2.a1.a0=Larg1.a0;
	tmp2.a2=tmp0;
	tmp1.then(_cheerpCreate_ZN6client9_FunctionIFPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEiEEC2IZZawIiEDaRNS_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_vEEOSE_(tmp2));
}
function __ZZawIiEDaRN6client7PromiseIT_EEENK15promise_awaiter12await_resumeEv(Larg0){
	return Larg0.i1|0;
}
function __ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a2;
	if(tmp0!==nullArray||0!==0)tmp0[0]=1;
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type12return_valueES3_(Larg0){
	Larg0.a0.call(null,null);
}
function _cheerpCreate_ZN6client10UDPMessageC2Ev(){
	return new Object();
}
function _cheerpCreate_ZN6client9_FunctionIFPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEiEEC2IZZawIiEDaRNS_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_vEEOSE_(Larg0){
	return __ZN6cheerp8CallbackIRZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_EEPNS2_13EventListenerEOS4_(Larg0);
}
function __ZN6cheerp8CallbackIRZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_EEPNS2_13EventListenerEOS4_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_EEDTclsr13ClosureHelperIS4_DTadsr6cheerp7utility16remove_referenceIS4_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS4_Efp_EEEOS4_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFviEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFviEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_EEDTclsr13ClosureHelperIS4_DTadsr6cheerp7utility16remove_referenceIS4_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS4_Efp_EEEOS4_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_MSA_KFviEE12make_closureESB_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIRZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_MSA_KFviEE12make_closureESB_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFviEEC2IRZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_EEOS7_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS7_PS1_EE5valueEvE4typeEPNSH_IXntsrNS2_13_must_destroyIS7_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFviEEC2IRZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_EEOS7_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleIS7_PS1_EE5valueEvE4typeEPNSH_IXntsrNS2_13_must_destroyIS7_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:{a0:null},a2:nullArray}];
	tmp0[0].a0=Larg1.a0;
	tmp0[0].a1.a0=Larg1.a1.a0;
	tmp1=Larg1.a2;
	tmp0[0].a2=tmp1;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_JiEEEvPS6_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEEUliE_JiEEEvPS6_DpT0_(Larg0,Larg1){
	__ZZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEENKUliE_clEi(Larg0,Larg1);
}
function __ZZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvEENKUliE_clEi(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a2;
	if((tmp0[0]&1)===0){
		tmp0=Larg0.a0;
		tmp0.i1=Larg1;
		tmp0.a2=nullArray;
		__ZNKSt16coroutine_handleIvE6resumeB7v160000Ev(Larg0.a1);
	}
}
function __ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterC2EPNS1_IiEE(Larg0,Larg1){
	Larg0.a2=nullArray;
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_typeEE7addressB7v160000Ev(Larg0){
	return Larg0.a0;
}
function _cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRN16TailscaleNetwork10UDPWrapperEPSM_PNS_31ReadableStreamDefaultControllerIPNS_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(Larg0){
	return __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0);
}
function __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISN_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISN_Efp_EEEOSN_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client8FunctionEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISN_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISN_Efp_EEEOSN_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSL_KFvSK_EE12make_closureESM_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSL_KFvSK_EE12make_closureESM_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPSD_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISQ_PS4_EE5valueEvE4typeEPNST_IXntsrNS5_13_must_destroyISQ_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPSD_PNS1_31ReadableStreamDefaultControllerIPNS1_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISQ_PS4_EE5valueEvE4typeEPNST_IXntsrNS5_13_must_destroyISQ_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPSA_PNS4_31ReadableStreamDefaultControllerIPNS4_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSM_EEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPSA_PNS4_31ReadableStreamDefaultControllerIPNS4_10UDPMessageEEEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSM_EEEvPT_DpT0_(Larg0,Larg1){
	__ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESI_(Larg0,Larg1);
}
function __ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10UDPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_10UDPMessageEEEEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESI_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZN16TailscaleNetwork10UDPWrapper10makeSocketEPS_(Larg0){
	return new Larg0.a0.udpSocket();
}
function __ZN16TailscaleNetwork10UDPWrapperC2EPN6client11IPUDPSocketE(Larg0,Larg1){
	var tmp0=null;
	Larg0.a0=Larg1;
	Larg0.a1=__ZN6client20PromiseWithResolversIPNS_6ObjectEE6createEv();
	Larg0.a2=__ZN6client20PromiseWithResolversIPNS_4_AnyEE6createEv();
	Larg0.a3=null;
	Larg0.a4=null;
	Larg0.i6=0;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	Larg0.a5=__ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEEUlvE_EEPNS3_13EventListenerEOT_(tmp0);
}
function __ZN6client20PromiseWithResolversIPNS_6ObjectEE6createEv(){
	return Promise.withResolvers();
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEEUlvE_EEPNS3_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEEUlvE_MS6_KFPNS3_7PromiseIPNS3_4_AnyEEEvEE12make_closureEOS6_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEE14deleter_helperEPNS8_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEE14deleter_helperEPNS8_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEEUlvE_MS6_KFPNS3_7PromiseIPNS3_4_AnyEEEvEE12make_closureEOS6_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEEC2IZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISF_PS7_EE5valueEvE4typeEPNSI_IXntsrNS8_13_must_destroyISF_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEEC2IZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISF_PS7_EE5valueEvE4typeEPNSI_IXntsrNS8_13_must_destroyISF_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_JEEES6_PT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_JEEES6_PT_DpT0_(Larg0){
	return __ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv(Larg0){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null;
	tmp1=Larg0.a0;
	tmp2=new constructor__ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv$pFrame();
	tmp3=tmp2;
	tmp3.a0=__ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv$presume;
	tmp3.a1=__ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv$pdestroy;
	tmp3.a3=tmp1;
	tmp1=__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS0_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEv(tmp3.a2);
	L$poptgepsqueezed8=tmp3.a4;
	__ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed8,tmp3.a3.a3.cancel());
	tmp3.i6=1;
	tmp3={a0:null};
	__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEE12from_addressB7v160000EPv(tmp3,tmp2);
	tmp2={a0:null};
	__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEEcvS_IvEB7v160000Ev(tmp2,tmp3);
	__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed8,tmp2);
	return tmp1;
}
function __ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv$presume(Larg0){
	var tmp0=0,L$poptgepsqueezed7=null,L$poptgepsqueezed8=null,tmp3=null,tmp4=null;
	tmp0=Larg0.i6|0;
	L$poptgepsqueezed7=Larg0.a5;
	if(tmp0<<30>-1073741824){
		L$poptgepsqueezed8=Larg0.a4;
		tmp3={a0:null};
		tmp4={a0:null};
		if((tmp0&3)!==0){
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed8);
			__ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed7,Larg0.a3.a4.abort());
			Larg0.i6=2;
			__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEE12from_addressB7v160000EPv(tmp3,Larg0);
			__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEEcvS_IvEB7v160000Ev(tmp4,tmp3);
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed7,tmp4);
		}else{
			__ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed8,Larg0.a3.a3.cancel());
			Larg0.i6=1;
			__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEE12from_addressB7v160000EPv(tmp3,Larg0);
			__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEEcvS_IvEB7v160000Ev(tmp4,tmp3);
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed8,tmp4);
		}
	}else{
		__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed7);
		__ZN16TailscaleNetwork10UDPWrapper5closeEPN6client5ErrorE(Larg0.a3,null);
		__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS0_11IPUDPSocketEEUlvE_EE12promise_type12return_valueES3_(Larg0.a2);
	}
}
function __ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv$pdestroy(Larg0){
	var tmp0=0,L$psink=null;
	tmp0=Larg0.i6|0;
	a:if(Larg0.a0!==null){
		if(tmp0<<30>-1073741824){
			if((tmp0&3)===0)break a;
			L$psink=Larg0.a4;
		}else{
			L$psink=Larg0.a5;
		}
		__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$psink);
	}
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS0_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	return new Promise(_cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(tmp0));
}
function __ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEEcvS_IvEB7v160000Ev(Larg0,Larg1){
	__ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEE7addressB7v160000Ev(Larg1));
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS0_11IPUDPSocketEEUlvE_EE12promise_type12return_valueES3_(Larg0){
	Larg0.a0.call(null,null);
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_typeEE7addressB7v160000Ev(Larg0){
	return Larg0.a0;
}
function _cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(Larg0){
	return __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS2_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0);
}
function __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS2_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS2_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISL_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISL_Efp_EEEOSL_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client8FunctionEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS2_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISL_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISL_Efp_EEEOSL_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS2_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSJ_KFvSI_EE12make_closureESK_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS2_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSJ_KFvSI_EE12make_closureESK_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISO_PS4_EE5valueEvE4typeEPNSR_IXntsrNS5_13_must_destroyISO_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS1_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISO_PS4_EE5valueEvE4typeEPNSR_IXntsrNS5_13_must_destroyISO_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS4_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSK_EEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS4_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSK_EEEvPT_DpT0_(Larg0,Larg1){
	__ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS0_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESG_(Larg0,Larg1);
}
function __ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10UDPWrapperC1EPNS0_11IPUDPSocketEEUlvE_EE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESG_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZN16TailscaleNetwork10TCPWrapperC2EPS_(Larg0,Larg1){
	__ZN16TailscaleNetwork10TCPWrapperC2EPN6client11IPTCPSocketE(Larg0,__ZN16TailscaleNetwork10TCPWrapper10makeSocketEPS_(Larg1));
}
function __ZN16TailscaleNetwork10TCPWrapper6listenEPS_PN6client6StringEj(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null;
	if(((Larg0.a0.bind(Larg3))|0)!==0){
		tmp0=new Error("Cannot bind");
		Larg0.a1.reject.call(null,tmp0);
		__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(Larg0,tmp0);
	}else{
		Larg0.a0.listen();
		tmp0=_cheerpCreate_ZN6client16UnderlyingSourceIPNS_6ObjectEEC2Ev();
		tmp1={a0:null,a1:null,i2:0};
		tmp1.a0=Larg0;
		tmp1.a1=Larg1;
		tmp1.i2=Larg3;
		tmp0.pull=__ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlPNS4_31ReadableStreamDefaultControllerIPNS4_6ObjectEEEE_EEPNS4_13EventListenerEOT_(tmp1);
		tmp1={a0:null};
		tmp1.a0=Larg0;
		tmp0.cancel=__ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlvE_EEPNS4_13EventListenerEOT_(tmp1);
		Larg0.a3=new ReadableStream(tmp0);
		tmp0=Larg0.a1.resolve;
		tmp0.call(null,{readable :Larg0.a3, localAddress :Larg2, localPort :Larg3});
	}
}
function __ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg0.a0;
	if(tmp0!==null){
		tmp0.close();
		Larg0.i6=257;
		tmp0=Larg0.a2;
		if(Larg1!==null)tmp0.reject.call(null,Larg1);
		else tmp0.resolve.call(null);
		Larg0.a0.delete();
		Larg0.a0=null;
	}
}
function _cheerpCreate_ZN6client16UnderlyingSourceIPNS_6ObjectEEC2Ev(){
	return new Object();
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlPNS4_31ReadableStreamDefaultControllerIPNS4_6ObjectEEEE_EEPNS4_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlPNS4_31ReadableStreamDefaultControllerIPNS4_6ObjectEEEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISD_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISD_Efp_EEEOSD_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlvE_EEPNS4_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS8_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS8_Efp_EEEOS8_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvvEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS8_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS8_Efp_EEEOS8_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlvE_MS7_KFvvEE12make_closureEOS7_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlvE_MS7_KFvvEE12make_closureEOS7_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10TCPWrapper6listenEPS4_PN6client6StringEjEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISB_PS1_EE5valueEvE4typeEPNSE_IXntsrNS2_13_must_destroyISB_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10TCPWrapper6listenEPS4_PN6client6StringEjEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISB_PS1_EE5valueEvE4typeEPNSE_IXntsrNS2_13_must_destroyISB_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10TCPWrapper6listenEPS3_PN6client6StringEjEUlvE_JEEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10TCPWrapper6listenEPS3_PN6client6StringEjEUlvE_JEEEvPT_DpT0_(Larg0){
	__ZZN16TailscaleNetwork10TCPWrapper6listenEPS_PN6client6StringEjENKUlvE_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10TCPWrapper6listenEPS_PN6client6StringEjENKUlvE_clEv(Larg0){
	__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(Larg0.a0,null);
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlPNS4_31ReadableStreamDefaultControllerIPNS4_6ObjectEEEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISD_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISD_Efp_EEEOSD_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlPNS4_31ReadableStreamDefaultControllerIPNS4_6ObjectEEEE_MSC_KFPNS4_7PromiseIPNS4_4_AnyEEESB_EE12make_closureEOSC_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEEE14deleter_helperEPNSD_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEEE14deleter_helperEPNSD_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper6listenEPS1_PN6client6StringEjEUlPNS4_31ReadableStreamDefaultControllerIPNS4_6ObjectEEEE_MSC_KFPNS4_7PromiseIPNS4_4_AnyEEESB_EE12make_closureEOSC_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEEEC2IZN16TailscaleNetwork10TCPWrapper6listenEPSF_PNS1_6StringEjEUlSB_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISL_PSC_EE5valueEvE4typeEPNSO_IXntsrNSD_13_must_destroyISL_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEEEC2IZN16TailscaleNetwork10TCPWrapper6listenEPSF_PNS1_6StringEjEUlSB_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISL_PSC_EE5valueEvE4typeEPNSO_IXntsrNSD_13_must_destroyISL_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:null,i2:0}];
	tmp0[0].a0=Larg1.a0;
	tmp0[0].a1=Larg1.a1;
	tmp0[0].i2=Larg1.i2|0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10TCPWrapper6listenEPS9_PNS1_6StringEjEUlPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEE_JSI_EEES6_PT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10TCPWrapper6listenEPS9_PNS1_6StringEjEUlPNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEE_JSI_EEES6_PT_DpT0_(Larg0,Larg1){
	return __ZZN16TailscaleNetwork10TCPWrapper6listenEPS_PN6client6StringEjENKUlPNS2_31ReadableStreamDefaultControllerIPNS2_6ObjectEEEE_clES9_(Larg0,Larg1);
}
function __ZZN16TailscaleNetwork10TCPWrapper6listenEPS_PN6client6StringEjENKUlPNS2_31ReadableStreamDefaultControllerIPNS2_6ObjectEEEE_clES9_(Larg0,Larg1){
	return __ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi(Larg0.a0,Larg0.a1,Larg1,Larg0.i2|0);
}
function __ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed20=null,tmp6=null;
	tmp3=new constructor__ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi$pFrame();
	tmp4=tmp3;
	tmp4.a0=__ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi$presume;
	tmp4.a1=__ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi$pdestroy;
	tmp4.i6=Larg3;
	tmp4.a5=Larg2;
	tmp4.a4=Larg1;
	tmp4.a3=Larg0;
	L$poptgepsqueezed20=tmp4.a2;
	tmp0=__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_6ObjectEEEiEE12promise_type17get_return_objectEv(L$poptgepsqueezed20);
	tmp6=tmp4.a3.a0.accept();
	if(tmp6!==null){
		tmp1=tmp4.i6|0;
		tmp3=tmp4.a5;
		tmp4=tmp4.a4;
		tmp2={a0:null,a1:null,a2:null,a3:null,a4:null,a5:null,i6:0};
		__ZN16TailscaleNetwork10TCPWrapperC2EPN6client11IPTCPSocketE(tmp2,tmp6.socket);
		tmp4=tmp4.a0;
		tmp4=tmp4.dumpIP(tmp6.addr);
		__ZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjj(tmp2,tmp4,tmp6.port,tmp1);
		tmp4=tmp2.a1.promise;
		tmp6=tmp2.a2.promise;
		tmp3.enqueue({opened :tmp4, closed :tmp6, close :tmp2.a5});
		__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_6ObjectEEEiEE12promise_type12return_valueES3_(L$poptgepsqueezed20);
	}else{
		L$poptgepsqueezed20=tmp4.a8;
		__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed20,tmp4.a3.a0.waitIncoming());
		tmp4.i9=1;
		tmp4={a0:null};
		__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_typeEE12from_addressB7v160000EPv(tmp4,tmp3);
		tmp3={a0:null};
		__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_typeEEcvS_IvEB7v160000Ev(tmp3,tmp4);
		__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed20,tmp3);
	}
	return tmp0;
}
function __ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi$presume(Larg0){
	var L$poptgepsqueezed21=null,L$poptgepsqueezed22=null,tmp2=0,tmp3=null,tmp4=null,tmp5=null;
	L$poptgepsqueezed21=Larg0.a2;
	L$poptgepsqueezed22=Larg0.a8;
	a:{
		if((Larg0.i9&3)!==0){
			tmp2=__ZZawIiEDaRN6client7PromiseIT_EEENK15promise_awaiter12await_resumeEv(L$poptgepsqueezed22)|0;
			__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed22);
			if((tmp2|0)<0){
				L$poptgepsqueezed22=Larg0.a5;
				tmp3=Larg0.a3;
				tmp4="Error on accept";
				L$poptgepsqueezed22.error(tmp4);
				L$poptgepsqueezed22="Error on accept";
				__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp3,new Error(L$poptgepsqueezed22));
				__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_6ObjectEEEiEE12promise_type12return_valueES3_(L$poptgepsqueezed21);
				break a;
			}
		}
		Larg0.i7=tmp2;
		tmp4=Larg0.a3;
		tmp5=tmp4.a0.accept();
		if(tmp5!==null){
			tmp2=Larg0.i6|0;
			L$poptgepsqueezed22=Larg0.a5;
			tmp4=Larg0.a4;
			tmp3={a0:null,a1:null,a2:null,a3:null,a4:null,a5:null,i6:0};
			__ZN16TailscaleNetwork10TCPWrapperC2EPN6client11IPTCPSocketE(tmp3,tmp5.socket);
			tmp4=tmp4.a0;
			tmp4=tmp4.dumpIP(tmp5.addr);
			__ZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjj(tmp3,tmp4,tmp5.port,tmp2);
			tmp4=tmp3.a1.promise;
			tmp5=tmp3.a2.promise;
			L$poptgepsqueezed22.enqueue({opened :tmp4, closed :tmp5, close :tmp3.a5});
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_6ObjectEEEiEE12promise_type12return_valueES3_(L$poptgepsqueezed21);
		}else{
			__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed22,tmp4.a0.waitIncoming());
			Larg0.i9=1;
			L$poptgepsqueezed21={a0:null};
			__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_typeEE12from_addressB7v160000EPv(L$poptgepsqueezed21,Larg0);
			tmp4={a0:null};
			__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_typeEEcvS_IvEB7v160000Ev(tmp4,L$poptgepsqueezed21);
			__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed22,tmp4);
		}
	}
}
function __ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi$pdestroy(Larg0){
	var tmp0=0;
	tmp0=Larg0.i9|0;
	if(Larg0.a0!==null)if((tmp0&3)!==0)__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0.a8);
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_6ObjectEEEiEE12promise_type17get_return_objectEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	return new Promise(_cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRN16TailscaleNetwork10TCPWrapperEPSM_PNS_31ReadableStreamDefaultControllerIPNS_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(tmp0));
}
function __ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_typeEE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_typeEEcvS_IvEB7v160000Ev(Larg0,Larg1){
	__ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_typeEE7addressB7v160000Ev(Larg1));
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_6ObjectEEEiEE12promise_type12return_valueES3_(Larg0){
	Larg0.a0.call(null,null);
}
function __ZN16TailscaleNetwork10TCPWrapperC2EPN6client11IPTCPSocketE(Larg0,Larg1){
	var tmp0=null;
	Larg0.a0=Larg1;
	Larg0.a1=__ZN6client20PromiseWithResolversIPNS_6ObjectEE6createEv();
	Larg0.a2=__ZN6client20PromiseWithResolversIPNS_4_AnyEE6createEv();
	Larg0.a3=null;
	Larg0.a4=null;
	Larg0.i6=0;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	Larg0.a5=__ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEEUlvE_EEPNS3_13EventListenerEOT_(tmp0);
}
function __ZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjj(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null;
	tmp0=_cheerpCreate_ZN6client16UnderlyingSourceIPNS_6ObjectEEC2Ev();
	tmp1={a0:null};
	tmp1.a0=Larg0;
	tmp0.pull=__ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_28ReadableByteStreamControllerEE_EEPNS3_13EventListenerEOT_(tmp1);
	tmp1={a0:null};
	tmp1.a0=Larg0;
	tmp0.cancel=__ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_EEPNS3_13EventListenerEOT_(tmp1);
	tmp0.type="bytes";
	tmp0.autoAllocateChunkSize=1500;
	Larg0.a3=new ReadableStream(tmp0);
	tmp0=_cheerpCreate_ZN6client14UnderlyingSinkIPNS_10Uint8ArrayEEC2Ev();
	tmp1={a0:null};
	tmp1.a0=Larg0;
	tmp0.write=__ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_10Uint8ArrayEPNS3_31WritableStreamDefaultControllerEE_EEPNS3_13EventListenerEOT_(tmp1);
	tmp1={a0:null};
	tmp1.a0=Larg0;
	tmp0.close=__ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_EEPNS3_13EventListenerEOT_(tmp1);
	tmp1={a0:null};
	tmp1.a0=Larg0;
	tmp0.abort=__ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_EEPNS3_13EventListenerEOT_(tmp1);
	Larg0.a4=new WritableStream(tmp0);
	tmp0="0.0.0.0";
	tmp1=Larg0.a1.resolve;
	tmp1.call(null,{readable :Larg0.a3, writable :Larg0.a4, remoteAddress :Larg1, localAddress :tmp0, remotePort :Larg2, localPort :Larg3});
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_28ReadableByteStreamControllerEE_EEPNS3_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_28ReadableByteStreamControllerEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS9_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS9_Efp_EEEOS9_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_28ReadableByteStreamControllerEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_28ReadableByteStreamControllerEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_EEPNS3_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvvEED2Ev(tmp0);
	return tmp1;
}
function _cheerpCreate_ZN6client14UnderlyingSinkIPNS_10Uint8ArrayEEC2Ev(){
	return new Object();
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_10Uint8ArrayEPNS3_31WritableStreamDefaultControllerEE_EEPNS3_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_10Uint8ArrayEPNS3_31WritableStreamDefaultControllerEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISB_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISB_Efp_EEEOSB_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_EEPNS3_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvvEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_EEPNS3_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvvEEcvPN6client13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvvEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_MS6_KFvvEE12make_closureEOS6_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_MS6_KFvvEE12make_closureEOS6_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISA_PS1_EE5valueEvE4typeEPNSD_IXntsrNS2_13_must_destroyISA_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISA_PS1_EE5valueEvE4typeEPNSD_IXntsrNS2_13_must_destroyISA_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_JEEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE1_JEEEvPT_DpT0_(Larg0){
	__ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlvE1_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlvE1_clEv(Larg0){
	__ZN16TailscaleNetwork10TCPWrapper12doShutdownTxEv(Larg0.a0);
}
function __ZN16TailscaleNetwork10TCPWrapper12doShutdownTxEv(Larg0){
	var tmp0=null,Lmergedinsert=0;
	Lmergedinsert=Larg0.i6&255|256;
	Larg0.i6=Lmergedinsert;
	tmp0=Larg0.a0;
	if(tmp0!==null){
		tmp0.shutdownTx();
		Lmergedinsert=Larg0.i6|0;
	}
	if((Lmergedinsert&1)!==0)__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(Larg0,null);
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_MS6_KFvvEE12make_closureEOS6_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_MS6_KFvvEE12make_closureEOS6_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISA_PS1_EE5valueEvE4typeEPNSD_IXntsrNS2_13_must_destroyISA_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISA_PS1_EE5valueEvE4typeEPNSD_IXntsrNS2_13_must_destroyISA_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_JEEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE0_JEEEvPT_DpT0_(Larg0){
	__ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlvE0_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlvE0_clEv(Larg0){
	__ZN16TailscaleNetwork10TCPWrapper12doShutdownTxEv(Larg0.a0);
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_10Uint8ArrayEPNS3_31WritableStreamDefaultControllerEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISB_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISB_Efp_EEEOSB_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_10Uint8ArrayEPNS3_31WritableStreamDefaultControllerEE_MSA_KFPNS3_7PromiseIPNS3_4_AnyEEES7_S9_EE12make_closureEOSA_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE14deleter_helperEPNSC_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE14deleter_helperEPNSC_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_10Uint8ArrayEPNS3_31WritableStreamDefaultControllerEE_MSA_KFPNS3_7PromiseIPNS3_4_AnyEEES7_S9_EE12make_closureEOSA_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPNS1_6StringEjjEUlS8_SA_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISJ_PSB_EE5valueEvE4typeEPNSM_IXntsrNSC_13_must_destroyISJ_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPNS1_6StringEjjEUlS8_SA_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISJ_PSB_EE5valueEvE4typeEPNSM_IXntsrNSC_13_must_destroyISJ_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPNS1_6StringEjjEUlPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEE_JSE_SG_EEES6_PT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPNS1_6StringEjjEUlPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEE_JSE_SG_EEES6_PT_DpT0_(Larg0,Larg1,Larg2){
	return __ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEE_clES5_S7_(Larg0,Larg1,Larg2);
}
function __ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEE_clES5_S7_(Larg0,Larg1,Larg2){
	return __ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE(Larg0.a0,Larg1,Larg2);
}
function __ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,L$poptgepsqueezed17=null,tmp5=0,tmp6=0;
	tmp2=new constructor__ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE$pFrame();
	tmp3=tmp2;
	tmp3.a0=__ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE$presume;
	tmp3.a1=__ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE$pdestroy;
	tmp3.a5=Larg2;
	tmp3.a4=Larg1;
	tmp3.a3=Larg0;
	L$poptgepsqueezed17=tmp3.a2;
	tmp0=__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEv(L$poptgepsqueezed17);
	tmp5=tmp3.a4.length;
	tmp3.i6=tmp5;
	tmp3.i7=0;
	a:{
		if((tmp5|0)!==0){
			tmp6=0;
			while(1){
				tmp5=tmp3.a3.a0.send(tmp3.a4,tmp6,tmp5-tmp6|0);
				tmp3.i8=tmp5;
				if((tmp5|0)===-11){
					L$poptgepsqueezed17=tmp3.a9;
					__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed17,tmp3.a3.a0.waitOutgoing());
					tmp3.i10=1;
					tmp3={a0:null};
					__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_typeEE12from_addressB7v160000EPv(tmp3,tmp2);
					tmp2={a0:null};
					__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_typeEEcvS_IvEB7v160000Ev(tmp2,tmp3);
					__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed17,tmp2);
					break a;
				}
				if((tmp5|0)<0){
					tmp2=tmp3.a5;
					tmp3=tmp3.a3;
					tmp1="Error on write";
					tmp2.error(tmp1);
					tmp2="Error on write";
					__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp3,new Error(tmp2));
					__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed17);
					break a;
				}
				tmp6=(tmp3.i7|0)+tmp5|0;
				tmp3.i7=tmp6;
				tmp5=tmp3.i6|0;
				if(tmp5>>>0>tmp6>>>0)continue;
				break;
			}
		}
		__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed17);
	}
	return tmp0;
}
function __ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE$presume(Larg0){
	var L$pdispatch8=0,tmp1=null,L$poptgepsqueezed32=null,L$poptgepsqueezed33=null,L$pdispatch6=0,Llabel=0,L$pdispatch=0,L$ppre=0,tmp8=null;
	L$poptgepsqueezed32=Larg0.a2;
	L$poptgepsqueezed33=Larg0.a9;
	if((Larg0.i10&3)!==0){
		L$pdispatch6=__ZZawIiEDaRN6client7PromiseIT_EEENK15promise_awaiter12await_resumeEv(L$poptgepsqueezed33)|0;
		__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed33);
		if((L$pdispatch6|0)!==0){
			Llabel=0;
		}else{
			L$pdispatch=Larg0.i7|0;
			Llabel=-1;
		}
	}else{
		L$ppre=Larg0.a4.length;
		Larg0.i6=L$ppre;
		L$pdispatch8=0;
		Llabel=1;
	}
	a:while(1){
		switch(Llabel|0){
			case 0:
			if((L$pdispatch6|0)<0){
				L$poptgepsqueezed33=Larg0.a5;
				tmp1=Larg0.a3;
				tmp8="Error on write";
				L$poptgepsqueezed33.error(tmp8);
				L$poptgepsqueezed33="Error on write";
				__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp1,new Error(L$poptgepsqueezed33));
				__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed32);
				break a;
			}
			Llabel=Larg0.i7|0;
			L$pdispatch=Llabel+L$pdispatch6|0;
			Llabel=-1;
			continue a;
			case 1:
			Larg0.i7=L$pdispatch8;
			if(L$ppre>>>0>L$pdispatch8>>>0){
				tmp8=Larg0.a3;
				L$pdispatch6=tmp8.a0.send(Larg0.a4,L$pdispatch8,L$ppre-L$pdispatch8|0);
				Larg0.i8=L$pdispatch6;
				if((L$pdispatch6|0)===-11){
					__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed33,tmp8.a0.waitOutgoing());
					Larg0.i10=1;
					L$poptgepsqueezed32={a0:null};
					__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_typeEE12from_addressB7v160000EPv(L$poptgepsqueezed32,Larg0);
					tmp8={a0:null};
					__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_typeEEcvS_IvEB7v160000Ev(tmp8,L$poptgepsqueezed32);
					__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed33,tmp8);
					break a;
				}
				Llabel=0;
				continue a;
			}
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed32);
			break a;
			default:
			L$ppre=Larg0.i6|0;
			L$pdispatch8=L$pdispatch;
			Llabel=1;
			continue a;
		}
		break;
	}
}
function __ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE$pdestroy(Larg0){
	var tmp0=0;
	tmp0=Larg0.i10|0;
	if(Larg0.a0!==null)if((tmp0&3)!==0)__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0.a9);
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	return new Promise(_cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRN16TailscaleNetwork10TCPWrapperEPNS_10Uint8ArrayEPNS_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(tmp0));
}
function __ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_typeEE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_typeEEcvS_IvEB7v160000Ev(Larg0,Larg1){
	__ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_typeEE7addressB7v160000Ev(Larg1));
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type12return_valueES3_(Larg0){
	Larg0.a0.call(null,null);
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_typeEE7addressB7v160000Ev(Larg0){
	return Larg0.a0;
}
function _cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRN16TailscaleNetwork10TCPWrapperEPNS_10Uint8ArrayEPNS_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(Larg0){
	return __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_10Uint8ArrayEPNS2_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0);
}
function __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_10Uint8ArrayEPNS2_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_10Uint8ArrayEPNS2_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISL_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISL_Efp_EEEOSL_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client8FunctionEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_10Uint8ArrayEPNS2_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISL_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISL_Efp_EEEOSL_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_10Uint8ArrayEPNS2_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSJ_KFvSI_EE12make_closureESK_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_10Uint8ArrayEPNS2_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSJ_KFvSI_EE12make_closureESK_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISO_PS4_EE5valueEvE4typeEPNSR_IXntsrNS5_13_must_destroyISO_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_10Uint8ArrayEPNS1_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISO_PS4_EE5valueEvE4typeEPNSR_IXntsrNS5_13_must_destroyISO_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS4_10Uint8ArrayEPNS4_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSK_EEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS4_10Uint8ArrayEPNS4_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSK_EEEvPT_DpT0_(Larg0,Larg1){
	__ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESG_(Larg0,Larg1);
}
function __ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_10Uint8ArrayEPNS0_31WritableStreamDefaultControllerEEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESG_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_MS6_KFvvEE12make_closureEOS6_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_MS6_KFvvEE12make_closureEOS6_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISA_PS1_EE5valueEvE4typeEPNSD_IXntsrNS2_13_must_destroyISA_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvvEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISA_PS1_EE5valueEvE4typeEPNSD_IXntsrNS2_13_must_destroyISA_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_JEEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlvE_JEEEvPT_DpT0_(Larg0){
	__ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlvE_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlvE_clEv(Larg0){
	__ZN16TailscaleNetwork10TCPWrapper12doShutdownRxEv(Larg0.a0);
}
function __ZN16TailscaleNetwork10TCPWrapper12doShutdownRxEv(Larg0){
	var tmp0=null,Lmergedinsert=0;
	Lmergedinsert=Larg0.i6&65280|1;
	Larg0.i6=Lmergedinsert;
	tmp0=Larg0.a0;
	if(tmp0!==null){
		tmp0.shutdownRx();
		Lmergedinsert=Larg0.i6|0;
	}
	if((Lmergedinsert&256)!==0)__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(Larg0,null);
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_28ReadableByteStreamControllerEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS9_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS9_Efp_EEEOS9_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_28ReadableByteStreamControllerEE_MS8_KFPNS3_7PromiseIPNS3_4_AnyEEES7_EE12make_closureEOS8_(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_28ReadableByteStreamControllerEEEcvPNS1_13EventListenerEEv(Larg0){
	var tmp0=null;
	if(Larg0.a1!==null){
		tmp0=[{a0:null,a1:null}];
		tmp0[0].a0=Larg0.a1;
		tmp0[0].a1=Larg0.a2;
		tmp0=cheerpCreateClosure(__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_28ReadableByteStreamControllerEEE14deleter_helperEPNSA_13DeleterHelperE,tmp0[0]);
		__ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE3addEPS2_PNS1_6ObjectE(Larg0.a0,tmp0);
		Larg0.a1=null;
	}
	return Larg0.a0;
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_28ReadableByteStreamControllerEEED2Ev(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null)tmp0(Larg0.a2);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_28ReadableByteStreamControllerEEE14deleter_helperEPNSA_13DeleterHelperE(Larg0){
	Larg0.a0(Larg0.a1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjEUlPNS3_28ReadableByteStreamControllerEE_MS8_KFPNS3_7PromiseIPNS3_4_AnyEEES7_EE12make_closureEOS8_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_28ReadableByteStreamControllerEEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPNS1_6StringEjjEUlS8_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISH_PS9_EE5valueEvE4typeEPNSK_IXntsrNSA_13_must_destroyISH_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEPNS1_28ReadableByteStreamControllerEEEC2IZN16TailscaleNetwork10TCPWrapper11setupClientEPNS1_6StringEjjEUlS8_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISH_PS9_EE5valueEvE4typeEPNSK_IXntsrNSA_13_must_destroyISH_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPNS1_6StringEjjEUlPNS1_28ReadableByteStreamControllerEE_JSE_EEES6_PT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10TCPWrapper11setupClientEPNS1_6StringEjjEUlPNS1_28ReadableByteStreamControllerEE_JSE_EEES6_PT_DpT0_(Larg0,Larg1){
	return __ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlPNS1_28ReadableByteStreamControllerEE_clES5_(Larg0,Larg1);
}
function __ZZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjjENKUlPNS1_28ReadableByteStreamControllerEE_clES5_(Larg0,Larg1){
	return __ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE(Larg0.a0,Larg1);
}
function __ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE(Larg0,Larg1){
	var tmp0=null,tmp1=-0.,tmp2=null,tmp3=null,L$poptgepsqueezed14=null,tmp5=null,tmp6=null,tmp7=0;
	tmp2=new constructor__ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE$pFrame();
	tmp3=tmp2;
	tmp3.a0=__ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE$presume;
	tmp3.a1=__ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE$pdestroy;
	tmp3.a5=Larg1;
	tmp3.a4=Larg0;
	L$poptgepsqueezed14=tmp3.a2;
	tmp0=__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEv(L$poptgepsqueezed14);
	tmp5=tmp3.a5.byobRequest.view;
	tmp6=tmp5.buffer;
	tmp1=+tmp5.byteOffset;
	tmp3.a3=new Uint8Array(tmp6,tmp1,+tmp5.byteLength);
	tmp5=tmp3.a4.a0;
	tmp7=tmp3.a3.length;
	tmp7=tmp5.recv(tmp3.a3,0,tmp7);
	tmp3.i6=tmp7;
	if((tmp7|0)===-11){
		L$poptgepsqueezed14=tmp3.a7;
		__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed14,tmp3.a4.a0.waitIncoming());
		tmp3.i8=1;
		tmp3={a0:null};
		__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_typeEE12from_addressB7v160000EPv(tmp3,tmp2);
		tmp2={a0:null};
		__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_typeEEcvS_IvEB7v160000Ev(tmp2,tmp3);
		__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed14,tmp2);
	}else if((tmp7|0)!==0){
		tmp2=tmp3.a5;
		if((tmp7|0)<0){
			tmp5=tmp3.a4;
			tmp6="Error on read";
			tmp2.error(tmp6);
			tmp2="Error on read";
			__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp5,new Error(tmp2));
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed14);
		}else{
			tmp2.byobRequest.respond((+(tmp7|0)));
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed14);
		}
	}else{
		tmp2=tmp3.a4;
		tmp3.a5.close();
		__ZN16TailscaleNetwork10TCPWrapper12doShutdownRxEv(tmp2);
		__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed14);
	}
	return tmp0;
}
function __ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE$presume(Larg0){
	var tmp0=null,tmp1=-0.,L$poptgepsqueezed17=null,L$poptgepsqueezed18=null,tmp4=0,tmp5=null,tmp6=null;
	L$poptgepsqueezed17=Larg0.a2;
	L$poptgepsqueezed18=Larg0.a7;
	a:{
		b:{
			if((Larg0.i8&3)!==0){
				tmp4=__ZZawIiEDaRN6client7PromiseIT_EEENK15promise_awaiter12await_resumeEv(L$poptgepsqueezed18)|0;
				__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed18);
				if((tmp4|0)!==0)break b;
			}else{
				tmp6=Larg0.a5.byobRequest.view;
				tmp5=tmp6.buffer;
				tmp1=+tmp6.byteOffset;
				Larg0.a3=new Uint8Array(tmp5,tmp1,+tmp6.byteLength);
			}
			tmp6=Larg0.a4;
			tmp5=tmp6.a0;
			tmp0=Larg0.a3;
			tmp4=tmp5.recv(tmp0,0,tmp0.length);
			Larg0.i6=tmp4;
			if((tmp4|0)===-11){
				__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed18,tmp6.a0.waitIncoming());
				Larg0.i8=1;
				L$poptgepsqueezed17={a0:null};
				__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_typeEE12from_addressB7v160000EPv(L$poptgepsqueezed17,Larg0);
				tmp6={a0:null};
				__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_typeEEcvS_IvEB7v160000Ev(tmp6,L$poptgepsqueezed17);
				__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed18,tmp6);
				break a;
			}
			if((tmp4|0)===0){
				Larg0.a5.close();
				__ZN16TailscaleNetwork10TCPWrapper12doShutdownRxEv(tmp6);
				__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed17);
				break a;
			}
		}
		L$poptgepsqueezed18=Larg0.a5;
		if((tmp4|0)<0){
			tmp5=Larg0.a4;
			tmp6="Error on read";
			L$poptgepsqueezed18.error(tmp6);
			L$poptgepsqueezed18="Error on read";
			__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp5,new Error(L$poptgepsqueezed18));
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed17);
		}else{
			L$poptgepsqueezed18.byobRequest.respond((+(tmp4|0)));
			__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type12return_valueES3_(L$poptgepsqueezed17);
		}
	}
}
function __ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE$pdestroy(Larg0){
	var tmp0=0;
	tmp0=Larg0.i8|0;
	if(Larg0.a0!==null)if((tmp0&3)!==0)__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0.a7);
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	return new Promise(_cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRN16TailscaleNetwork10TCPWrapperEPNS_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(tmp0));
}
function __ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_typeEE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_typeEEcvS_IvEB7v160000Ev(Larg0,Larg1){
	__ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_typeEE7addressB7v160000Ev(Larg1));
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type12return_valueES3_(Larg0){
	Larg0.a0.call(null,null);
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_typeEE7addressB7v160000Ev(Larg0){
	return Larg0.a0;
}
function _cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRN16TailscaleNetwork10TCPWrapperEPNS_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(Larg0){
	return __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0);
}
function __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISJ_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISJ_Efp_EEEOSJ_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client8FunctionEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISJ_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISJ_Efp_EEEOSJ_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSH_KFvSG_EE12make_closureESI_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS2_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSH_KFvSG_EE12make_closureESI_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISM_PS4_EE5valueEvE4typeEPNSP_IXntsrNS5_13_must_destroyISM_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS1_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISM_PS4_EE5valueEvE4typeEPNSP_IXntsrNS5_13_must_destroyISM_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS4_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSI_EEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS4_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSI_EEEvPT_DpT0_(Larg0,Larg1){
	__ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESE_(Larg0,Larg1);
}
function __ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPNS0_28ReadableByteStreamControllerEEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESE_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZN6cheerp8CallbackIZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEEUlvE_EEPNS3_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEEUlvE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceIS7_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardIS7_Efp_EEEOS7_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEEUlvE_MS6_KFPNS3_7PromiseIPNS3_4_AnyEEEvEE12make_closureEOS6_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEEUlvE_MS6_KFPNS3_7PromiseIPNS3_4_AnyEEEvEE12make_closureEOS6_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEEC2IZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISF_PS7_EE5valueEvE4typeEPNSI_IXntsrNS8_13_must_destroyISF_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFPN6client7PromiseIPNS1_4_AnyEEEvEEC2IZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISF_PS7_EE5valueEvE4typeEPNSI_IXntsrNS8_13_must_destroyISF_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_JEEES6_PT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIPN6client7PromiseIPNS1_4_AnyEEEE6invokeIZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_JEEES6_PT_DpT0_(Larg0){
	return __ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv(Larg0);
}
function __ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv(Larg0){
	var L$poptgepsqueezed8=null,tmp1=null,tmp2=null,tmp3=null;
	tmp1=Larg0.a0;
	tmp2=new constructor__ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv$pFrame();
	tmp3=tmp2;
	tmp3.a0=__ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv$presume;
	tmp3.a1=__ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv$pdestroy;
	tmp3.a3=tmp1;
	tmp1=__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS0_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEv(tmp3.a2);
	L$poptgepsqueezed8=tmp3.a4;
	__ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed8,tmp3.a3.a3.cancel());
	tmp3.i6=1;
	tmp3={a0:null};
	__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEE12from_addressB7v160000EPv(tmp3,tmp2);
	tmp2={a0:null};
	__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEEcvS_IvEB7v160000Ev(tmp2,tmp3);
	__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed8,tmp2);
	return tmp1;
}
function __ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv$presume(Larg0){
	var tmp0=0,L$poptgepsqueezed7=null,tmp2=null,tmp3=null,tmp4=null,L$poptgepsqueezed8=null;
	tmp0=Larg0.i6|0;
	L$poptgepsqueezed7=Larg0.a5;
	a:{
		if(tmp0<<30>-1073741824){
			L$poptgepsqueezed8=Larg0.a4;
			tmp2={a0:null};
			tmp3={a0:null};
			if((tmp0&3)===0){
				__ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed8,Larg0.a3.a3.cancel());
				Larg0.i6=1;
				__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEE12from_addressB7v160000EPv(tmp2,Larg0);
				__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEEcvS_IvEB7v160000Ev(tmp3,tmp2);
				__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed8,tmp3);
				break a;
			}
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed8);
			L$poptgepsqueezed8=Larg0.a3;
			tmp4=L$poptgepsqueezed8.a4;
			if(tmp4!==null){
				__ZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EE(L$poptgepsqueezed7,tmp4.abort());
				Larg0.i6=2;
				__ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEE12from_addressB7v160000EPv(tmp2,Larg0);
				__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEEcvS_IvEB7v160000Ev(tmp3,tmp2);
				__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed7,tmp3);
				break a;
			}
		}else{
			__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed7);
			L$poptgepsqueezed8=Larg0.a3;
		}
		__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(L$poptgepsqueezed8,null);
		__ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS0_11IPTCPSocketEEUlvE_EE12promise_type12return_valueES3_(Larg0.a2);
	}
}
function __ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv$pdestroy(Larg0){
	var tmp0=0,L$psink=null;
	tmp0=Larg0.i6|0;
	a:if(Larg0.a0!==null){
		if(tmp0<<30>-1073741824){
			if((tmp0&3)===0)break a;
			L$psink=Larg0.a4;
		}else{
			L$psink=Larg0.a5;
		}
		__ZZawIPN6client4_AnyEEDaRNS0_7PromiseIT_EEEN15promise_awaiterD2Ev(L$psink);
	}
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS0_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEv(Larg0){
	var tmp0=null;
	tmp0={a0:null};
	tmp0.a0=Larg0;
	return new Promise(_cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(tmp0));
}
function __ZNSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEEcvS_IvEB7v160000Ev(Larg0,Larg1){
	__ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,__ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEE7addressB7v160000Ev(Larg1));
}
function __ZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS0_11IPTCPSocketEEUlvE_EE12promise_type12return_valueES3_(Larg0){
	Larg0.a0.call(null,null);
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_typeEE7addressB7v160000Ev(Larg0){
	return Larg0.a0;
}
function _cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(Larg0){
	return __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS2_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0);
}
function __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS2_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS2_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISL_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISL_Efp_EEEOSL_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client8FunctionEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS2_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISL_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISL_Efp_EEEOSL_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS2_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSJ_KFvSI_EE12make_closureESK_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS2_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSJ_KFvSI_EE12make_closureESK_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISO_PS4_EE5valueEvE4typeEPNSR_IXntsrNS5_13_must_destroyISO_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS1_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISO_PS4_EE5valueEvE4typeEPNSR_IXntsrNS5_13_must_destroyISO_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS4_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSK_EEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS4_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSK_EEEvPT_DpT0_(Larg0,Larg1){
	__ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS0_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESG_(Larg0,Larg1);
}
function __ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRKZN16TailscaleNetwork10TCPWrapperC1EPNS0_11IPTCPSocketEEUlvE_EE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESG_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZNKSt16coroutine_handleINSt16coroutine_traitsIPN6client7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS7_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_typeEE7addressB7v160000Ev(Larg0){
	return Larg0.a0;
}
function _cheerpCreate_ZN6client9_FunctionIFvPNS0_IFvPNS_6_UnionIJPNS_4_AnyEPNS_11PromiseLikeIS3_EEEEEEEEPNS0_IFvS3_EEEEEC2IZNSt16coroutine_traitsIPNS_7PromiseIS3_EEJRN16TailscaleNetwork10TCPWrapperEPSM_PNS_31ReadableStreamDefaultControllerIPNS_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS_8FunctionEE_vEEOT_(Larg0){
	return __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0);
}
function __ZN6cheerp8CallbackIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEPNS2_13EventListenerEOT_(Larg0){
	var tmp0=null,tmp1=null;
	tmp0={a0:null,a1:null,a2:null};
	__ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISN_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISN_Efp_EEEOSN_(tmp0,Larg0);
	tmp1=__ZN6cheerp7ClosureIFvPN6client8FunctionEEEcvPNS1_13EventListenerEEv(tmp0);
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEED2Ev(tmp0);
	return tmp1;
}
function __ZN6cheerp12make_closureIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_EEDTclsr13ClosureHelperIT_DTadsr6cheerp7utility16remove_referenceISN_E4typeEonclEEE12make_closureclgssr6cheerp7utilityE7forwardISN_Efp_EEEOSN_(Larg0,Larg1){
	__ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSL_KFvSK_EE12make_closureESM_(Larg0,Larg1);
}
function __ZN6cheerp13ClosureHelperIRZNSt16coroutine_traitsIPN6client7PromiseIPNS2_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS8_PNS2_31ReadableStreamDefaultControllerIPNS2_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS2_8FunctionEE_MSL_KFvSK_EE12make_closureESM_(Larg0,Larg1){
	__ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPSD_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISQ_PS4_EE5valueEvE4typeEPNST_IXntsrNS5_13_must_destroyISQ_EE5valueEvE4typeE(Larg0,Larg1);
}
function __ZN6cheerp7ClosureIFvPN6client8FunctionEEEC2IRZNSt16coroutine_traitsIPNS1_7PromiseIPNS1_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPSD_PNS1_31ReadableStreamDefaultControllerIPNS1_6ObjectEEEiEE12promise_type17get_return_objectEvEUlS3_E_EEOT_PNS_7utility9enable_ifIXntsr6cheerp7utility14is_convertibleISQ_PS4_EE5valueEvE4typeEPNST_IXntsrNS5_13_must_destroyISQ_EE5valueEvE4typeE(Larg0,Larg1){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null}];
	tmp0[0].a0=Larg1.a0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPSA_PNS4_31ReadableStreamDefaultControllerIPNS4_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSM_EEEvPT_DpT0_,tmp0[0]);
	Larg0.a0=tmp1;
	Larg0.a1=null;
	Larg0.a2=tmp0[0];
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZNSt16coroutine_traitsIPN6client7PromiseIPNS4_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPSA_PNS4_31ReadableStreamDefaultControllerIPNS4_6ObjectEEEiEE12promise_type17get_return_objectEvEUlPNS4_8FunctionEE_JSM_EEEvPT_DpT0_(Larg0,Larg1){
	__ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_6ObjectEEEiEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESI_(Larg0,Larg1);
}
function __ZZNSt16coroutine_traitsIPN6client7PromiseIPNS0_4_AnyEEEJRN16TailscaleNetwork10TCPWrapperEPS6_PNS0_31ReadableStreamDefaultControllerIPNS0_6ObjectEEEiEE12promise_type17get_return_objectEvENKUlPNS0_8FunctionEE_clESI_(Larg0,Larg1){
	Larg0.a0.a0=Larg1;
}
function __ZN16TailscaleNetwork10TCPWrapper10makeSocketEPS_(Larg0){
	return new Larg0.a0.tcpSocket();
}
function __ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var L$poptgepsqueezed20=null,tmp1=null,tmp2=null,tmp3=null,tmp4=0;
	tmp1=new constructor__ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj$pFrame();
	tmp2=tmp1;
	tmp2.a0=__ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj$presume;
	tmp2.a1=__ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj$pdestroy;
	tmp2.i10=Larg4;
	tmp2.a9=Larg3;
	tmp2.a8=Larg2;
	tmp2.a7=Larg1;
	__ZN6Thread12promise_type17get_return_objectEv(Larg0,tmp2.a2);
	tmp3=tmp2.a7;
	tmp4=tmp2.a8.a0.parseIP(tmp2.a9);
	if(((tmp3.a0.bind(0))|0)!==0){
		tmp3=tmp2.a7;
		tmp1="Cannot bind";
		tmp2=new Error(tmp1);
		tmp3.a1.reject.call(null,tmp2);
		__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp3,tmp2);
	}else{
		tmp4=tmp2.a7.a0.connect(tmp4,tmp2.i10|0);
		tmp2.i11=tmp4;
		tmp3=tmp2.a7;
		if((tmp4|0)!==0){
			tmp1="Connection failed";
			tmp2=new Error(tmp1);
			tmp3.a1.reject.call(null,tmp2);
			__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp3,tmp2);
		}else{
			L$poptgepsqueezed20=tmp2.a3;
			__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed20,tmp3.a0.waitOutgoing());
			tmp2.i4=1;
			tmp3={a0:null};
			__ZNSt16coroutine_handleIN6Thread12promise_typeEE12from_addressB7v160000EPv(tmp3,tmp1);
			tmp1={a0:null};
			__ZNKSt16coroutine_handleIN6Thread12promise_typeEEcvS_IvEB7v160000Ev(tmp1,tmp3);
			__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed20,tmp1);
		}
	}
}
function __ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj$presume(Larg0){
	var L$poptgepsqueezed22=null,tmp1=0,tmp2=null,tmp3=null;
	L$poptgepsqueezed22=Larg0.a3;
	if((Larg0.i4&3)!==0){
		tmp1=__ZZawIiEDaRN6client7PromiseIT_EEENK15promise_awaiter12await_resumeEv(L$poptgepsqueezed22)|0;
		__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(L$poptgepsqueezed22);
		if((tmp1|0)!==0){
			L$poptgepsqueezed22=Larg0.a7;
			tmp2="Connection rejected";
			tmp3=new Error(tmp2);
			L$poptgepsqueezed22.a1.reject.call(null,tmp3);
			__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(L$poptgepsqueezed22,tmp3);
		}else __ZN16TailscaleNetwork10TCPWrapper11setupClientEPN6client6StringEjj(Larg0.a7,Larg0.a9,Larg0.i10|0,0);
	}else{
		tmp2=Larg0.a7;
		tmp1=Larg0.a8.a0.parseIP(Larg0.a9);
		if(((tmp2.a0.bind(0))|0)!==0){
			L$poptgepsqueezed22="Cannot bind";
			tmp3=new Error(L$poptgepsqueezed22);
			tmp2.a1.reject.call(null,tmp3);
			__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp2,tmp3);
		}else{
			tmp1=tmp2.a0.connect(tmp1,Larg0.i10|0);
			Larg0.i11=tmp1;
			if((tmp1|0)!==0){
				L$poptgepsqueezed22="Connection failed";
				tmp3=new Error(L$poptgepsqueezed22);
				tmp2.a1.reject.call(null,tmp3);
				__ZN16TailscaleNetwork10TCPWrapper5closeEPN6client5ErrorE(tmp2,tmp3);
			}else{
				__ZawIiEDaRN6client7PromiseIT_EE(L$poptgepsqueezed22,tmp2.a0.waitOutgoing());
				Larg0.i4=1;
				tmp2={a0:null};
				__ZNSt16coroutine_handleIN6Thread12promise_typeEE12from_addressB7v160000EPv(tmp2,Larg0);
				tmp3={a0:null};
				__ZNKSt16coroutine_handleIN6Thread12promise_typeEEcvS_IvEB7v160000Ev(tmp3,tmp2);
				__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiter13await_suspendESt16coroutine_handleIvE(L$poptgepsqueezed22,tmp3);
			}
		}
	}
}
function __ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj$pdestroy(Larg0){
	var tmp0=0;
	tmp0=Larg0.i4|0;
	if(Larg0.a0!==null)if((tmp0&3)!==0)__ZZawIiEDaRN6client7PromiseIT_EEEN15promise_awaiterD2Ev(Larg0.a3);
}
function __ZN6Thread12promise_type17get_return_objectEv(Larg0,Larg1){
	var tmp0=null;
	tmp0={a0:null};
	__ZNSt16coroutine_handleIN6Thread12promise_typeEE12from_promiseB7v160000ERS1_(tmp0,Larg1);
	__ZN6ThreadC2ESt16coroutine_handleINS_12promise_typeEE(Larg0,tmp0);
}
function __ZNSt16coroutine_handleIN6Thread12promise_typeEE12from_addressB7v160000EPv(Larg0,Larg1){
	Larg0.a0=Larg1;
}
function __ZNKSt16coroutine_handleIN6Thread12promise_typeEEcvS_IvEB7v160000Ev(Larg0,Larg1){
	__ZNSt16coroutine_handleIvE12from_addressB7v160000EPv(Larg0,__ZNKSt16coroutine_handleIN6Thread12promise_typeEE7addressB7v160000Ev(Larg1));
}
function __ZNKSt16coroutine_handleIN6Thread12promise_typeEE7addressB7v160000Ev(Larg0){
	return Larg0.a0;
}
function __ZNSt16coroutine_handleIN6Thread12promise_typeEE12from_promiseB7v160000ERS1_(Larg0,Larg1){
	var tmp0=null;
	tmp0=Larg1.a[Larg1.o-1];
	Larg0.a0=tmp0;
}
function __ZN6ThreadC2ESt16coroutine_handleINS_12promise_typeEE(Larg0,Larg1){
	Larg0.a0=Larg1.a0;
}
function _abort(){
	___syscall_tkill();
	;
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
		___dummy_thread.a19.a0=___dummy_thread.a19.a0;
		___dummy_thread.i4=0;
		___dummy_thread.a2=___dummy_thread;
		___dummy_thread.a3=___dummy_thread;
	}
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
function __start(){
	___cheerp_init_tls();
	___syscall_main_environ();
}
var __ZL8buf_size=0;
var __ZL16argv_environ_buf=new Uint8Array(65536);
var __ZGVZL8read_envPcjjE14client_environ=0;
var __ZZL8read_envPcjjE14client_environ=null;
var _main_tls$p1={a0:null,a1:nullArray,a1o:0,i2:0,i3:0,i4:0,i5:0};
var ___tlsImage=0;
var ___tlsImageSize=1048584;
var ___libc=new constructor_struct$p_Z6__libc();
var ___c_locale=[null,null,null,null,null,null];
var ___dummy_thread={a0:null,a1:null,a2:null,a3:null,i4:0,i5:0,i6:0,i7:0,i8:0,i9:0,i10:0,a11:null,i12:0,a13:null,i14:0,i15:0,a16:null,a17:null,a18:null,a19:{a0:null,i1:0,a2:null},i20:0,i21:0,a22:___c_locale[0],a23:[0],a24:null,a25:null};
var __ZN6cheerp20EscapedResourcesListIN6client13EventListenerEE9resourcesE=null;
function constructor__ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={i0:0};
	this.a3={a0:null,i1:0,a2:nullArray};
	this.i4=0;
	this.a5={i0:0};
	this.a6={i0:0};
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.i10=0;
	this.i11=0;
	create__ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj$pFrame(this)}
function constructor__ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.i6=0;
	this.a7={a0:null,i1:0,a2:nullArray};
	this.i8=0;
	this.a9={i0:0};
	this.a10={i0:0};
	create__ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE$pFrame(this)}
function constructor__ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.a9={a0:null,i1:0,a2:nullArray};
	this.i10=0;
	this.a11={i0:0};
	this.a12={i0:0};
	create__ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE$pFrame(this)}
function constructor__ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=null;
	this.a4={a0:null,a1:null,a2:nullArray};
	this.a5={a0:null,a1:null,a2:nullArray};
	this.i6=0;
	this.a7={i0:0};
	this.a8={i0:0};
	create__ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv$pFrame(this)}
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
	this.a19={a0:null,i1:0,a2:null};
	this.i20=0;
	this.i21=0;
	this.a22=null;
	this.a23=[0];
	this.a24=null;
	this.a25=null;
}
function constructor__ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=null;
	this.a4={a0:null,a1:null,a2:nullArray};
	this.a5={a0:null,a1:null,a2:nullArray};
	this.i6=0;
	this.a7={i0:0};
	this.a8={i0:0};
	create__ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv$pFrame(this)}
function constructor__ZN16TailscaleNetwork2upEv$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=null;
	this.a4=null;
	this.a5={a0:null,a1:null,a2:nullArray};
	this.a6={a0:null,a1:null,a2:nullArray};
	this.a7={a0:null,a1:null,a2:nullArray};
	this.i8=0;
	this.a9={i0:0};
	this.a10={i0:0};
	create__ZN16TailscaleNetwork2upEv$pFrame(this)}
function constructor__ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.i8=0;
	this.a9={a0:null,i1:0,a2:nullArray};
	this.i10=0;
	this.a11={i0:0};
	this.a12={i0:0};
	create__ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE$pFrame(this)}
function constructor__ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi$pFrame(){
	this.a0=null;
	this.a1=null;
	this.a2={a0:null};
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.i6=0;
	this.i7=0;
	this.a8={a0:null,i1:0,a2:nullArray};
	this.i9=0;
	this.a10={i0:0};
	this.a11={i0:0};
	create__ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi$pFrame(this)}
function create__ZN16TailscaleNetwork10TCPWrapper6acceptEPS_PN6client31ReadableStreamDefaultControllerIPNS2_6ObjectEEEi$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16TailscaleNetwork10TCPWrapper7connectEPS_PN6client6StringEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN16TailscaleNetwork10TCPWrapperC1EPN6client11IPTCPSocketEENKUlvE_clEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16TailscaleNetwork10TCPWrapper4readEPN6client28ReadableByteStreamControllerE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16TailscaleNetwork10TCPWrapper5writeEPN6client10Uint8ArrayEPNS1_31WritableStreamDefaultControllerE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN16TailscaleNetwork10UDPWrapperC1EPN6client11IPUDPSocketEENKUlvE_clEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16TailscaleNetwork10UDPWrapper4readEPS_PN6client31ReadableStreamDefaultControllerIPNS2_10UDPMessageEEE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16TailscaleNetwork2upEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function createPointerArray(r,s,e,v){for(var i=s;i<e;i++)r[i]=v;return r;}
function cheerpCreateClosure(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}
function cheerpCreateClosureSplit(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}
var TailscaleNetwork={};
export default function(tmp0){
	CHEERP_ENV=(typeof tmp0 == 'undefined' ? null : tmp0.env) || null;
	CHEERP_ARGV=(typeof tmp0 == 'undefined' ? null : tmp0.argv) || null;
	return Promise.resolve().then(_=>{
		TailscaleNetwork=function (a0){
			this.this=__ZN16TailscaleNetwork3newEPN6client6ObjectE(a0);
		};
		TailscaleNetwork.prototype.TCPServerSocket=function(a0,a1){
			return __ZN16TailscaleNetwork15TCPServerSocketEPN6client6StringEPNS0_22TCPServerSocketOptionsE(this.this,a0,a1);
		};
		TailscaleNetwork.prototype.TCPSocket=function(a0,a1){
			return __ZN16TailscaleNetwork9TCPSocketEPN6client6StringEj(this.this,a0,a1);
		};
		TailscaleNetwork.prototype.UDPSocket=function(a0){
			return __ZN16TailscaleNetwork9UDPSocketEPN6client16UDPSocketOptionsE(this.this,a0);
		};
		TailscaleNetwork.prototype.delete=function(){
			return __ZN16TailscaleNetwork6deleteEv(this.this);
		};
		TailscaleNetwork.prototype.up=function(){
			return __ZN16TailscaleNetwork2upEv(this.this);
		};
		__start();
		var __export={
			TailscaleNetwork:TailscaleNetwork,
		};
		return __export;
	});
}
