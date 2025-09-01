"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function fetchBuffer(p){
	var b=null;
	if(typeof self==='object')b=fetch(p).then(r=>r.arrayBuffer());
	else if(typeof require==='function'){
		p=require('path').join(__dirname, p);
		b=new Promise((y,n)=>{
			require('fs').readFile(p,(e,d)=>{
				if(e)n(e);
				else y(d);
			});
		});
	}else b=new Promise((y,n)=>{
		y(read(p,'binary'));
	});
	return b;
}
var __stackPtr=2097152|0;
function __ZN11CheerpXCore12scheduleImplEv(){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0;
	tmp3=HEAP32[829214]|0;
	tmp0=HEAP8[33+(HEAP32[16+tmp3>>2]|0)>>0]|0;
	tmp1=HEAP32[12+tmp3>>2]|0;
	__ZN8CoreData23writeGrpsToGlobalMemoryEv(tmp1|0);
	__ZN10SystemData13doPendingIrqsEP8CoreDataj(HEAP32[16+tmp3>>2]|0,tmp1|0,HEAP32[36+tmp1>>2]|0);
	tmp3=HEAP32[(HEAP32[472+tmp1>>2]|0)>>2]|0;
	tmp2=HEAP32[36+tmp1>>2]|0;
	if((tmp0&255)===16)__Z14caInterpFrom16P8CoreDataP12AddressSpacej(tmp1|0,tmp3,tmp2);
	else __Z12caInterpFromP8CoreDataP12AddressSpacej(tmp1|0,tmp3,tmp2);
	if((HEAP32[592+tmp1>>2]|0)!==0)___assert_fail(2136120|0,2120932|0,212,2136488|0);
	;
	__ZN8CoreData22readGrpsToGlobalMemoryEv(tmp1|0);
}
function __ZN11CheerpXCore8scheduleEv(){
	var tmp0=0,tmp1=0,tmp2=null;
	tmp1=2189416;
	HEAP8[27+tmp1>>0]=0;
	if((HEAP8[24+tmp1>>0]&255)!==0)HEAP8[26+tmp1>>0]=1;
	else{
		tmp1=HEAP32[829211]|0;
		if((tmp1|0)!==0){
			clearTimeout((+(tmp1>>>0)));
			HEAP32[829211]=0;
		}
		tmp1=__Z11getStackPtrv()|0;
		tmp2=__ZN11CheerpXCore12scheduleImplEv;
		try{tmp2()}catch(e){if(e!='CheerpJContinue')debugger};
		__Z11setStackPtrj(tmp1);
		tmp1=HEAP32[829214]|0;
		tmp0=HEAP32[592+(HEAP32[12+tmp1>>2]|0)>>2]|0;
		if((tmp0|0)!==0){
			if((tmp0|0)===1){
				tmp1=HEAP32[28+tmp1>>2]|0;
				if((tmp1|0)>-1){
					tmp2=__ZN11CheerpXCore13handleTimeoutEv;
					HEAP32[829211]=~~ +setTimeout(tmp2,(+(tmp1|0)));
				}
			}else debugger;
		}else __ZN12AddressSpace13scheduleLaterEv();
	}
}
function __ZN11CheerpXCore13handleTimeoutEv(){
	var tmp0=0;
	HEAP32[829211]=0;
	tmp0=HEAP32[12+(HEAP32[829214]|0)>>2]|0;
	if((HEAP32[592+tmp0>>2]|0)===1){
		__ZN7CoreCtx8setStateENS_5STATEE(tmp0,0);
		__ZN11CheerpXCore8scheduleEv();
		return;
	}
	___assert_fail(2136420|0,2120932|0,257,2136460|0);
	;
}
function __ZN11CheerpXCore16handleInitSystemEjjPN6client10Uint8ArrayES2_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,Lxtraiter=0,tmp3=null,tmp4=0,Lgeptoindex6=0,Lgeptoindexphi17=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,Lprol$piter=0;
	tmp3=HEAP8;
	tmp4=__ZN11CoreManagernwEj(32)|0;
	__ZN9SystemCtxC2Ev(tmp4|0);
	HEAP32[829214]=(tmp4|0);
	tmp4=HEAP32[tmp4>>2]|0;
	tmp3=2135700|0;
	tmp0=2120932|0;
	if((Larg1|0)===0)___assert_fail(2135684|0,tmp0,273,tmp3);
	;
	if(Larg2===null)___assert_fail(2135720|0,tmp0,276,tmp3);
	;
	if(Larg3===null)___assert_fail(2135736|0,tmp0,277,tmp3);
	;
	__ZN12AddressSpace17createMemoryChunkEjjj(tmp4,0,655360,1)|0;
	Lgeptoindex6=__ZN12AddressSpace17createMemoryChunkEjjj(tmp4,786432,(Larg1<<20)-786432|0,1)|0;
	tmp3=HEAP8;
	tmp1=HEAP32[Lgeptoindex6>>2]|0;
	Lgeptoindex6=1048576+(-(Larg2.length)|0)|0;
	Lgeptoindexphi17=Larg2.length;
	if((Lgeptoindexphi17|0)!==0){
		Lxtraiter=Lgeptoindexphi17&7;
		if((Lxtraiter|0)!==0){
			Lgeptoindexphi3=Lgeptoindex6;
			Lprol$piter=0;
			Lgeptoindexphi=0;
			while(1){
				tmp3[tmp1+Lgeptoindexphi3|0]=Larg2[0+Lgeptoindexphi|0]|0;
				Lprol$piter=Lprol$piter+1|0;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				if((Lprol$piter|0)!==(Lxtraiter|0))continue;
				break;
			}
		}else{
			Lgeptoindexphi3=Lgeptoindex6;
			Lgeptoindexphi=0;
		}
		if(Lgeptoindexphi17>>>0>=8)while(1){
			tmp3[tmp1+Lgeptoindexphi3|0]=Larg2[0+Lgeptoindexphi|0]|0;
			tmp3[(tmp1+Lgeptoindexphi3|0)+1|0]=Larg2[(0+Lgeptoindexphi|0)+1|0]|0;
			tmp3[(tmp1+Lgeptoindexphi3|0)+2|0]=Larg2[(0+Lgeptoindexphi|0)+2|0]|0;
			tmp3[(tmp1+Lgeptoindexphi3|0)+3|0]=Larg2[(0+Lgeptoindexphi|0)+3|0]|0;
			tmp3[(tmp1+Lgeptoindexphi3|0)+4|0]=Larg2[(0+Lgeptoindexphi|0)+4|0]|0;
			tmp3[(tmp1+Lgeptoindexphi3|0)+5|0]=Larg2[(0+Lgeptoindexphi|0)+5|0]|0;
			tmp3[(tmp1+Lgeptoindexphi3|0)+6|0]=Larg2[(0+Lgeptoindexphi|0)+6|0]|0;
			tmp3[(tmp1+Lgeptoindexphi3|0)+7|0]=Larg2[(0+Lgeptoindexphi|0)+7|0]|0;
			Lgeptoindexphi3=Lgeptoindexphi3+8|0;
			if(tmp3!==tmp3||((tmp1+Lgeptoindex6|0)+Lgeptoindexphi17|0)!==(tmp1+Lgeptoindexphi3|0)){
				Lgeptoindexphi=Lgeptoindexphi+8|0;
				continue;
			}
			break;
		}
	}
	tmp3=HEAP8;
	Lgeptoindex6=__Znwj(28)|0;
	__ZN10APICDeviceC2Ev(Lgeptoindex6|0);
	__ZN12AddressSpace17createMemoryChunkEjjP12MemoryBufferjP5InodejP15MemMappedDevice(tmp4,Lgeptoindex6|0);
	tmp4=__ZN12AddressSpace17createMemoryChunkEjjj(tmp4,-131072,131072,0)|0;
	tmp3=HEAP8;
	Lgeptoindexphi3=HEAP32[tmp4>>2]|0;
	tmp4=HEAP32[8+tmp4>>2]|0;
	Lgeptoindexphi17=0;
	Lgeptoindex6=0;
	while(1){
		tmp3[(Lgeptoindexphi3+tmp4|0)+Lgeptoindexphi17|0]=Larg2[0+Lgeptoindex6|0]|0;
		tmp3[(Lgeptoindexphi3+tmp4|0)+(Lgeptoindexphi17+1|0)|0]=Larg2[(0+Lgeptoindex6|0)+1|0]|0;
		tmp3[(Lgeptoindexphi3+tmp4|0)+(Lgeptoindexphi17+2|0)|0]=Larg2[(0+Lgeptoindex6|0)+2|0]|0;
		Lprol$piter=Lgeptoindexphi17+3|0;
		if((Lprol$piter|0)===131071){
			tmp4=__ZN12MemoryBuffer12allocateAnonEj((Larg3.length)+4095& -4096)|0;
			HEAP32[24+(HEAP32[829214]|0)>>2]=tmp4;
			tmp3=HEAP8;
			Lgeptoindexphi=HEAP32[4+tmp4>>2]|0;
			tmp4=Larg3.length;
			if((tmp4|0)!==0){
				Lgeptoindexphi3=tmp4&7;
				if((Lgeptoindexphi3|0)!==0){
					Lgeptoindex6=0;
					Lgeptoindexphi17=0;
					Lprol$piter=0;
					while(1){
						tmp3[Lgeptoindexphi+Lgeptoindexphi17|0]=Larg3[0+Lprol$piter|0]|0;
						Lgeptoindex6=Lgeptoindex6+1|0;
						Lgeptoindexphi17=Lgeptoindexphi17+1|0;
						Lprol$piter=Lprol$piter+1|0;
						if((Lgeptoindex6|0)!==(Lgeptoindexphi3|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi17=0;
					Lprol$piter=0;
				}
				if(tmp4>>>0>=8)while(1){
					tmp3[Lgeptoindexphi+Lgeptoindexphi17|0]=Larg3[0+Lprol$piter|0]|0;
					tmp3[(Lgeptoindexphi+Lgeptoindexphi17|0)+1|0]=Larg3[(0+Lprol$piter|0)+1|0]|0;
					tmp3[(Lgeptoindexphi+Lgeptoindexphi17|0)+2|0]=Larg3[(0+Lprol$piter|0)+2|0]|0;
					tmp3[(Lgeptoindexphi+Lgeptoindexphi17|0)+3|0]=Larg3[(0+Lprol$piter|0)+3|0]|0;
					tmp3[(Lgeptoindexphi+Lgeptoindexphi17|0)+4|0]=Larg3[(0+Lprol$piter|0)+4|0]|0;
					tmp3[(Lgeptoindexphi+Lgeptoindexphi17|0)+5|0]=Larg3[(0+Lprol$piter|0)+5|0]|0;
					tmp3[(Lgeptoindexphi+Lgeptoindexphi17|0)+6|0]=Larg3[(0+Lprol$piter|0)+6|0]|0;
					tmp3[(Lgeptoindexphi+Lgeptoindexphi17|0)+7|0]=Larg3[(0+Lprol$piter|0)+7|0]|0;
					Lgeptoindexphi17=Lgeptoindexphi17+8|0;
					if(tmp3!==tmp3||(Lgeptoindexphi+tmp4|0)!==(Lgeptoindexphi+Lgeptoindexphi17|0)){
						Lprol$piter=Lprol$piter+8|0;
						continue;
					}
					break;
				}
			}
			tmp4=__ZN12MemoryBuffer12allocateAnonEj(262144)|0;
			HEAP32[20+(HEAP32[829214]|0)>>2]=tmp4;
			tmp3=HEAP8;
			tmp4=__Znwj(1536)|0;
			Lgeptoindex6=HEAP32[829214]|0;
			__ZN10SystemDataC2EP8CoreDataP12AddressSpacejjd(tmp4|0,HEAP32[12+Lgeptoindex6>>2]|0,HEAP32[Lgeptoindex6>>2]|0,Larg0,Larg1,+HEAPF64[274179]);
			HEAP32[16+(HEAP32[829214]|0)>>2]=(tmp4|0);
			__ZN11MasterClock15initGlobalTimerEv();
			__ZN14AsmCompileBase10globalInitEv();
			__ZN16InterpPrimitives19InitializeMainTableILi32EEEvv();
			__ZN12AddressSpace15initializeCacheEv();
			tmp4=HEAP32[829214]|0;
			__ZN9VGADevice9setRomBufEP12MemoryBuffer(208+(HEAP32[16+tmp4>>2]|0)|0,HEAP32[24+tmp4>>2]|0);
			tmp4=HEAP32[829214]|0;
			__ZN9VGADevice9setRamBufEP12MemoryBuffer(208+(HEAP32[16+tmp4>>2]|0)|0,HEAP32[20+tmp4>>2]|0);
			Lgeptoindex6=HEAP32[20+tmp4>>2]|0;
			tmp3=HEAP8;
			Lgeptoindexphi17=HEAP32[4+Lgeptoindex6>>2]|0;
			Lgeptoindex6=Lgeptoindexphi17;
			tmp3={type:5,vgaRamOffset:Lgeptoindex6,vgaDevice:((352+(HEAP32[16+tmp4>>2]|0)|0)|0)};
			postMessage(tmp3);
			return;
		}
		tmp3[(Lgeptoindexphi3+tmp4|0)+Lprol$piter|0]=Larg2[(0+Lgeptoindex6|0)+3|0]|0;
		Lgeptoindex6=Lgeptoindex6+4|0;
		Lgeptoindexphi17=Lgeptoindexphi17+4|0;
		continue;
	}
}
function __ZN11CheerpXCore17handleStartSystemEv(){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp0=HEAP32[12+(HEAP32[829214]|0)>>2]|0;
	HEAP16[42+tmp0>>1]=61440;
	HEAP32[56+tmp0>>2]=-65536;
	HEAP32[36+tmp0>>2]=65520;
	HEAP32[76+tmp0>>2]=65535;
	tmp1=new MessageChannel();
	tmp2=__ZN11CheerpXCore8scheduleEv;
	tmp1.port2.onmessage=tmp2;
	__ZN12AddressSpace8selfPortE=tmp1.port1;
	__ZN7CoreCtx8setStateENS_5STATEE(HEAP32[12+(HEAP32[829214]|0)>>2]|0,0);
	if((HEAP32[592+(HEAP32[12+(HEAP32[829214]|0)>>2]|0)>>2]|0)!==0)___assert_fail(2135624|0,2120932|0,264,2135664|0);
	;
	__ZN11CheerpXCore8scheduleEv();
}
function __ZN11CheerpXCore13handleMessageEPN6client12MessageEventIPNS0_6ObjectEEE(Larg0){
	var tmp0=0;
	tmp0=2189416;
	if((HEAP32[tmp0>>2]|0)===-2)HEAP32[tmp0>>2]=0;
	a:{
		if((HEAP8[24+tmp0>>0]&255)!==0){
			HEAP8[24+tmp0>>0]=0;
			if((HEAP8[26+tmp0>>0]&255)!==0){
				HEAP8[26+tmp0>>0]=0;
				__ZN11CheerpXCore17handleMessageImplEPN6client11CoreMessageE(Larg0.data);
				__ZN8LinuxApp11scheduleAppEv();
				break a;
			}
		}
		__ZN11CheerpXCore17handleMessageImplEPN6client11CoreMessageE(Larg0.data);
	}
}
function __ZN11CheerpXCore17handleMessageImplEPN6client11CoreMessageE(Larg0){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=-0.,tmp4=null,tmp5=null,tmp6=null,Lgeptoindex17=null,L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=0,tmp9=0,tmp10=0,tmp11=0,Lxtraiter=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,Lprol$piter=0;
	LsavedStack=___getStackPtr();
	tmp4=-264+LsavedStack|0;
	___setStackPtr(tmp4);
	tmp5=2120932|0;
	tmp6=2120988|0;
	Lgeptoindex17=2121008|0;
	tmp1=2120096|0;
	a:switch((Larg0.type)|0){
		case 3:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.mhz;
		tmp9=Larg0.mem;
		tmp4=Larg0.bios;
		__ZN11CheerpXCore16handleInitSystemEjjPN6client10Uint8ArrayES2_(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,tmp4,Larg0.vgaBios);
		break a;
		case 4:
		__ZN11CheerpXCore17handleStartSystemEv();
		break a;
		case 9:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[16+(HEAP32[829214]|0)>>2]|0;
		__ZN10SystemData11scheduleIrqEjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,0,Larg0.value);
		__ZN7CoreCtx8setStateENS_5STATEE(HEAP32[12+(HEAP32[829214]|0)>>2]|0,0);
		__ZN11CheerpXCore8scheduleEv();
		break a;
		case 10:
		tmp4=2120916|0;
		if(((Larg0.diskType)|0)!==0){
			if(((Larg0.diskType)|0)===1){
				L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.index;
				if(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>>0<2){
					tmp9=HEAP32[16+(HEAP32[829214]|0)>>2]|0;
					tmp10=Larg0.devId;
					tmp11=Larg0.len;
					L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=(__imul(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,12)|0)+1452+tmp9|0;
					HEAP32[L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]=tmp10;
					HEAP32[4+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]=tmp11>>>9;
					HEAP8[8+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>0]=1;
					break a;
				}
				___assert_fail(tmp4,tmp5,377,tmp6);
				;
			}
			debugger;
			break a;
		}
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.index;
		if(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>>0<2){
			tmp9=HEAP32[16+(HEAP32[829214]|0)>>2]|0;
			tmp10=Larg0.devId;
			tmp11=Larg0.len;
			L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=(__imul(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,12)|0)+1452+tmp9|0;
			HEAP32[L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]=tmp10;
			HEAP32[4+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]=tmp11>>>9;
			HEAP8[8+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>0]=0;
			break a;
		}
		___assert_fail(tmp4,tmp5,370,tmp6);
		;
		case 41:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.index;
		if(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>>0<2){
			__ZN10SystemData13setFloppyTypeEiN6Floppy11FLOPPY_TYPEE(HEAP32[16+(HEAP32[829214]|0)>>2]|0,L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,__ZN6Floppy28getFloppyTypeFromImageLengthEj(Larg0.len)|0);
			break a;
		}
		___assert_fail(Lgeptoindex17,tmp5,388,tmp6);
		;
		case 45:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.index;
		if(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>>0<2){
			L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=(__imul(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,12)|0)+144+(HEAP32[16+(HEAP32[829214]|0)>>2]|0)|0;
			if(((__ZN6Floppy28getFloppyTypeFromImageLengthEj(Larg0.len)|0)|0)===(HEAP32[L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)){
				tmp9=Larg0.devId;
				tmp10=Larg0.writeProtected;
				tmp11=HEAP32[8+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
				HEAP32[8+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]=tmp9;
				HEAP8[7+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>0]=(tmp10|0)!==0?1:0;
				if((tmp11|0)===-1)break a;
				___assert_fail(2120244|0,tmp5,402,tmp6);
				;
			}
			___assert_fail(2121024|0,tmp5,399,tmp6);
			;
		}
		___assert_fail(Lgeptoindex17,tmp5,396,tmp6);
		;
		case 14:
		__ZN8Debugger9attachHudEv((__ZN8Debugger11getInstanceEv()|0)|0);
		tmp4={type:15, intWrapper: ((3247692|0)|0), statType: 0, statName: "ByteCode"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3247688|0)|0), statType: 0, statName: "JIT - Queue Length"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249920|0)|0), statType: 0, statName: "JIT - Cold"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249932|0)|0), statType: 0, statName: "JIT - Invalid"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3316848|0)|0), statType: 0, statName: "JIT - FP80 failed"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249924|0)|0), statType: 0, statName: "JIT - Rejected"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3245596|0)|0), statType: 0, statName: "JIT - Stub Recompile"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249928|0)|0), statType: 0, statName: "JIT - Pending / Queue"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249780|0)|0), statType: 0, statName: "JIT - Valid"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249916|0)|0), statType: 0, statName: "JIT - Re-enter"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3316860|0)|0), statType: 0, statName: "JIT - Exits"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3250272|0)|0), statType: 0, statName: "JIT - Call Failed"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3245628|0)|0), statType: 0, statName: "JIT - Dyn Call Helper"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3245624|0)|0), statType: 0, statName: "JIT - Stub Ready"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3316864|0)|0), statType: 0, statName: "JIT - Extra Line Flush"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249940|0)|0), statType: 0, statName: "JIT - Preserve Assumption Failed"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3245592|0)|0), statType: 0, statName: "JIT - Possible SMC"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249772|0)|0), statType: 0, statName: "JIT - Late Failures"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3245632|0)|0), statType: 0, statName: "JIT - Caller Pins Overflow"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3245616|0)|0), statType: 0, statName: "JIT - Ret Failed"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3249776|0)|0), statType: 0, statName: "JIT - Interp Reached"};
		postMessage(tmp4);
		tmp4={type:15, intWrapper: ((3316840|0)|0), statType: 0, statName: "JIT - Pinning Conflict"};
		postMessage(tmp4);
		break a;
		case 21:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp9=Larg0.fd;
		tmp10=Larg0.devId;
		tmp11=Larg0.inodeId;
		Lxtraiter=Larg0.permType;
		Lgeptoindexphi=Larg0.len;
		Lgeptoindexphi3=Larg0.lastModified;
		Lprol$piter=Larg0.uid;
		__ZN8LinuxApp18handleFsOpenResultEjijjjjjjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,tmp10,tmp11,Lxtraiter,Lgeptoindexphi,Lgeptoindexphi3,Lprol$piter,Larg0.gid);
		break a;
		case 71:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp4=Larg0.value;
		tmp9=Larg0.devId;
		tmp10=Larg0.inodeId;
		tmp11=Larg0.permType;
		Lxtraiter=Larg0.len;
		Lgeptoindexphi=Larg0.lastModified;
		Lgeptoindexphi3=Larg0.uid;
		__ZN8LinuxApp25handleFsSpecialFileResultEjPN6client6ObjectEjjjjjjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp4,tmp9,tmp10,tmp11,Lxtraiter,Lgeptoindexphi,Lgeptoindexphi3,Larg0.gid);
		break a;
		case 17:
		__ZN8LinuxApp19handleFsCloseResultEj(Larg0.value);
		break a;
		case 19:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp4=Larg0.path;
		tmp9=Larg0.devId;
		tmp10=Larg0.parentInodeId;
		tmp11=Larg0.inodeId;
		Lxtraiter=Larg0.permType;
		Lgeptoindexphi=Larg0.fileSize;
		Lgeptoindexphi3=Larg0.lastModified;
		Lprol$piter=Larg0.promoteReadToExec;
		tmp5=Larg0.value;
		tmp2=Larg0.uid;
		__ZN8LinuxApp23handleFsCacheNodeResultEjPN6client6StringEjjjjjjbPNS0_6ObjectEjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp4,tmp9,tmp10,tmp11,Lxtraiter,Lgeptoindexphi,Lgeptoindexphi3,(Lprol$piter|0)!==0?1:0,tmp5,tmp2,Larg0.gid);
		break a;
		case 85:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp9=Larg0.devId;
		__ZN8LinuxApp25handleFsResolveRootResultEjjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,Larg0.permType);
		break a;
		case 69:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp9=Larg0.devId;
		tmp10=Larg0.inodeId;
		__ZN8LinuxApp23handleFsCacheListResultEjjjRKN6client6TArrayIPNS0_6StringEEE(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,tmp10,Larg0.files);
		break a;
		case 25:
		if(((Larg0.value)|0)!==0){
			__ZN8LinuxApp23handleFsCacheDataResultEj(Larg0.tid);
			break a;
		}
		___assert_fail(2120036|0,tmp5,606,tmp6);
		;
		case 62:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		__ZN8LinuxApp21handleFsGenericResultEjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,Larg0.value);
		break a;
		case 60:
		__ZN8LinuxApp22handleDeviceReadResultEj(Larg0.tid);
		break a;
		case 59:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=248+tmp4|0;
		__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEEC2B7v160000Ev(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed);
		tmp9=232+tmp4|0;
		__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp9,Larg0.path);
		__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEE12emplace_backIJS5_EEERS5_DpOT_(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9);
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp9);
		if(((Larg0.args.length)|0)!==0){
			tmp9=216+tmp4|0;
			tmp10=0;
			while(1){
				__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp9,Larg0.args[(+(tmp10>>>0))]);
				__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEE12emplace_backIJS5_EEERS5_DpOT_(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9);
				__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp9);
				tmp10=tmp10+1|0;
				if(tmp10>>>0<(Larg0.args.length)>>>0)continue;
				break;
			}
		}
		tmp9=200+tmp4|0;
		__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEEC2B7v160000Ev(tmp9);
		if(((Larg0.env.length)|0)!==0){
			tmp10=184+tmp4|0;
			tmp11=0;
			while(1){
				tmp5=Larg0.env[(+(tmp11>>>0))];
				__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp10,tmp5);
				__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEE12emplace_backIJS5_EEERS5_DpOT_(tmp9,tmp10);
				__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp10);
				tmp11=tmp11+1|0;
				if(tmp11>>>0<(Larg0.env.length)>>>0)continue;
				break;
			}
		}
		tmp10=120+tmp4|0;
		b:{
			if((Larg0.handlers.length)>>>0<64){
				tmp11=Larg0.handlers.length;
				if((tmp11|0)===0)break b;
			}else{
				tmp11=64;
			}
			Lxtraiter=0;
			while(1){
				tmp5=Larg0.handlers;
				Lgeptoindexphi=tmp5[0+Lxtraiter|0]|0;
				tmp5=HEAP8;
				Lgeptoindexphi3=__ZNSt5arrayIhLj64EEixB7v160000Ej(tmp10,Lxtraiter)|0;
				tmp5[Lgeptoindexphi3]=Lgeptoindexphi;
				Lxtraiter=Lxtraiter+1|0;
				if((Lxtraiter|0)!==(tmp11|0))continue;
				break;
			}
		}
		tmp11=104+tmp4|0;
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000Ev(tmp11);
		if(Larg0.cwd!==null){
			Lxtraiter=88+tmp4|0;
			__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(Lxtraiter,Larg0.cwd);
			__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEaSB7v160000EOS4_(tmp11,Lxtraiter)|0;
			__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(Lxtraiter);
		}
		Lxtraiter=Larg0.tid;
		Lgeptoindexphi=Larg0.index;
		Lgeptoindexphi3=Larg0.uid;
		__ZN8LinuxApp17handleExecRequestEOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEES9_jjRKSt5arrayIhLj64EERKS6_jj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,Lxtraiter,Lgeptoindexphi,tmp10,tmp11,Lgeptoindexphi3,Larg0.gid);
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp11);
		__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEED2B7v160000Ev(tmp9);
		__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEED2B7v160000Ev(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed);
		break a;
		case 28:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8Debugger11getInstanceEv()|0;
		tmp9=Larg0.ctxType;
		__ZN8Debugger9attachCtxE12CONTEXT_TYPEj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,Larg0.value);
		break a;
		case 29:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8Debugger11getInstanceEv()|0;
		tmp9=Larg0.ctxType;
		if(!(__ZN8Debugger9detachCtxE12CONTEXT_TYPEj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,Larg0.value)|0))break a;
		__ZN12AddressSpace13scheduleLaterEv();
		break a;
		case 31:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8Debugger11getInstanceEv()|0;
		tmp9=Larg0.ctxType;
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8Debugger11getCtxForIdE12CONTEXT_TYPEj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,Larg0.value)|0;
		if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)==(0|0))break a;
		__ZN8Debugger11getInstanceEv()|0;
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[(HEAP32[472+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)>>2]|0;
		tmp4={type:33, text: __ZN8Debugger7disasAtEP12AddressSpacejjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,Larg0.addr,16)};
		postMessage(tmp4);
		break a;
		case 32:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8Debugger11getInstanceEv()|0;
		tmp9=Larg0.ctxType;
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8Debugger11getCtxForIdE12CONTEXT_TYPEj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,Larg0.value)|0;
		if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)==(0|0))break a;
		__ZN8Debugger11getInstanceEv()|0;
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[(HEAP32[472+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)>>2]|0;
		tmp4={type:33, text: __ZN8Debugger7disasAtEP12AddressSpacejjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,Larg0.addr,32)};
		postMessage(tmp4);
		break a;
		case 51:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8Debugger11getInstanceEv()|0;
		tmp9=Larg0.ctxType;
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8Debugger11getCtxForIdE12CONTEXT_TYPEj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,Larg0.value)|0;
		if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)==(0|0))break a;
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[(HEAP32[472+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)>>2]|0;
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN9HashTableI9CodeTraceE9findEntryEj(8+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0,Larg0.addr)|0;
		if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)==(0|0))break a;
		__ZN20WasmGeneratorUtility12dumpOneTraceEP12AddressSpaceP9CodeTrace(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed);
		break a;
		case 44:
		console.log("JIT bisecting not available");
		break a;
		case 78:
		console.log("JIT bisecting not available");
		break a;
		case 34:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=72+tmp4|0;
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000IDnEEPKc(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,2120056|0);
		tmp9=__ZN10ProcessCtx6createEPS_RKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE(0,L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed)|0;
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed);
		HEAP32[32+tmp9>>2]=2;
		tmp4={type:35, tid: -1, value: (HEAP32[436+(HEAP32[12+tmp9>>2]|0)>>2]|0)};
		postMessage(tmp4);
		break a;
		case 36:
		tmp9=Larg0.tid;
		tmp10=HEAP32[829209]|0;
		while(1){
			L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[12+tmp10>>2]|0;
			if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0))while(1){
				if((HEAP32[436+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)===(tmp9|0)){
					tmp9=HEAP32[472+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
					tmp10=Larg0.arg0;
					tmp11=Larg0.arg1;
					tmp9=__ZN8LinuxApp16handleSocketImplEP10ProcessCtxjjj(tmp9|0,tmp10,tmp11,Larg0.arg2)|0;
					tmp4=___getStackPtr();
					tmp5=-8+tmp4|0;
					___setStackPtr(tmp5);
					HEAP32[tmp5>>2]=tmp9;
					__ZN7CoreCtx3logEPKcz(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,2120068|0);
					___setStackPtr(tmp4);
					tmp4={type:35, tid:(Larg0.tid), value: tmp9};
					postMessage(tmp4);
					break a;
				}
				L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[488+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
				if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0))continue;
				break;
			}
			tmp10=HEAP32[92+tmp10>>2]|0;
			continue;
		}
		case 37:
		tmp10=Larg0.tid;
		tmp9=HEAP32[829209]|0;
		b:if((tmp9|0)!=(0|0)){
			while(1){
				L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[12+tmp9>>2]|0;
				if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0))while(1){
					if((HEAP32[436+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)===(tmp10|0))break b;
					L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[488+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
					if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0))continue;
					break;
				}
				tmp9=HEAP32[92+tmp9>>2]|0;
				if((tmp9|0)!=(0|0))continue;
				break;
			}
			L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=0|0;
		}else{
			L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=0|0;
		}
		tmp5=Larg0.arg1;
		tmp9=64+tmp4|0;
		__ZN12LinearBufferC2Ej(tmp9,tmp5.length);
		tmp10=__ZN12LinearBuffer9getBufferI16sockaddr_storageEEPT_v(tmp9)|0;
		tmp11=tmp5.length;
		tmp6=tmp11+tmp10|0;
		if((tmp11|0)!==0){
			Lxtraiter=tmp11&7;
			if((Lxtraiter|0)!==0){
				Lprol$piter=0;
				Lgeptoindexphi3=0;
				Lgeptoindexphi=0;
				while(1){
					HEAP8[Lgeptoindexphi3+tmp10>>0]=tmp5[0+Lgeptoindexphi|0]|0;
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
			if(tmp11>>>0>=8)while(1){
				Lgeptoindex17=Lgeptoindexphi3+tmp10|0;
				HEAP8[Lgeptoindex17>>0]=tmp5[0+Lgeptoindexphi|0]|0;
				HEAP8[1+Lgeptoindex17>>0]=tmp5[(0+Lgeptoindexphi|0)+1|0]|0;
				HEAP8[2+Lgeptoindex17>>0]=tmp5[(0+Lgeptoindexphi|0)+2|0]|0;
				HEAP8[3+Lgeptoindex17>>0]=tmp5[(0+Lgeptoindexphi|0)+3|0]|0;
				HEAP8[4+Lgeptoindex17>>0]=tmp5[(0+Lgeptoindexphi|0)+4|0]|0;
				HEAP8[5+Lgeptoindex17>>0]=tmp5[(0+Lgeptoindexphi|0)+5|0]|0;
				HEAP8[6+Lgeptoindex17>>0]=tmp5[(0+Lgeptoindexphi|0)+6|0]|0;
				HEAP8[7+Lgeptoindex17>>0]=tmp5[(0+Lgeptoindexphi|0)+7|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if((tmp6|0)!=(Lgeptoindexphi3+tmp10|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
		tmp10=Larg0.arg0;
		tmp11=56+tmp4|0;
		__ZN12LinearBufferC2EOS_(tmp11,tmp9);
		__ZN8LinuxApp17handleBindWrapperEP7CoreCtxj12LinearBuffer(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp10,tmp11);
		__ZN12LinearBufferD2Ev(tmp11);
		__ZN12LinearBufferD2Ev(tmp9);
		break a;
		case 38:
		tmp9=Larg0.tid;
		tmp10=HEAP32[829209]|0;
		while(1){
			L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[12+tmp10>>2]|0;
			if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0))while(1){
				if((HEAP32[436+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)===(tmp9|0)){
					tmp9=HEAP32[472+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
					tmp10=__ZNK10ProcessCtx11getFileDescEj(tmp9|0,Larg0.value)|0;
					if((tmp10|0)!=(0|0)){
						tmp10=HEAP32[tmp10>>2]|0;
						if((HEAP32[44+tmp10>>2]|0)===1){
							if(Larg0.arg1!==null)___assert_fail(2120152|0,tmp5,758,tmp6);
							;
							if(((__ZN5Inode10canReadFwdEv(tmp10)|0)|0)!==0){
								L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8LinuxApp12handleAcceptEP7CoreCtxP10SocketNode(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp10|0)|0;
								tmp10=48+tmp4|0;
								__ZN13FileDescEntryC2EP8FileDescj(tmp10,(__ZN8FileDesc3getEP5Inodej(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)|0)|0);
								L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN10ProcessCtx11addFileDescERK13FileDescEntryj(tmp9|0,tmp10,0)|0;
								tmp4={type:35, tid:(Larg0.tid), value: L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed};
								postMessage(tmp4);
								__ZN12AddressSpace13scheduleLaterEv();
								break a;
							}
							__ZN8LinuxApp16retryCoreMessageEP7CoreCtxPN6client11CoreMessageE(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,Larg0);
							__ZN16CoreInodeWatcher10addWatchedEP5Inode(552+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0,tmp10);
							break a;
						}
					}
					___assert_fail(tmp1,tmp5,755,tmp6);
					;
				}
				L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[488+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
				if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0))continue;
				break;
			}
			tmp10=HEAP32[92+tmp10>>2]|0;
			continue;
		}
		case 52:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp9=HEAP32[829209]|0;
		while(1){
			tmp10=HEAP32[12+tmp9>>2]|0;
			if((tmp10|0)!=(0|0))while(1){
				if((HEAP32[436+tmp10>>2]|0)===(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)){
					L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[472+tmp10>>2]|0;
					L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZNK10ProcessCtx11getFileDescEj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0,Larg0.value)|0;
					if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0)){
						L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
						if((HEAP32[44+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)===1){
							tmp4=__ZN18ExternalSocketNode15messageChannelsE;
							L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[88+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
							tmp4=tmp4[0+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0].port2;
							tmp5={type:35, tid:(Larg0.tid), value: tmp4};
							postMessage(tmp5,new Array(tmp4));
							break a;
						}
					}
					___assert_fail(tmp1,tmp5,778,tmp6);
					;
				}
				tmp10=HEAP32[488+tmp10>>2]|0;
				if((tmp10|0)!=(0|0))continue;
				break;
			}
			tmp9=HEAP32[92+tmp9>>2]|0;
			continue;
		}
		case 84:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp9=HEAP32[829209]|0;
		while(1){
			tmp10=HEAP32[12+tmp9>>2]|0;
			if((tmp10|0)!=(0|0))while(1){
				if((HEAP32[436+tmp10>>2]|0)===(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)){
					L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[472+tmp10>>2]|0;
					tmp9=Larg0.arg0;
					if(tmp9>>>0<(__ZNKSt6vectorI13FileDescEntry17TrackingAllocatorIS0_L7MEM_TAG1EEE4sizeB7v160000Ev(52+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)|0)>>>0){
						L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=(tmp9<<3)+(HEAP32[52+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)|0;
						tmp9=HEAP32[L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
						if((tmp9|0)!=(0|0)){
							__ZN8FileDesc6decRefEv(tmp9);
							__ZN13FileDescEntry5clearEv(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed);
							break a;
						}
						___assert_fail(2120232|0,tmp5,794,tmp6);
						;
					}
					___assert_fail(2120204|0,tmp5,792,tmp6);
					;
				}
				tmp10=HEAP32[488+tmp10>>2]|0;
				if((tmp10|0)!=(0|0))continue;
				break;
			}
			tmp9=HEAP32[92+tmp9>>2]|0;
			continue;
		}
		case 48:
		__ZN14AsmCompileBase19completeModuleAsyncEPN6client6ObjectE(Larg0.wasmModule);
		break a;
		case 40:
		__ZN17WasmGeneratorBase31completeInstructionsModuleAsyncEPN6client6ObjectE(Larg0.wasmModule);
		break a;
		case 49:
		console.profile('CX');
		break a;
		case 50:
		console.profileEnd('CX');
		debugger;
		break a;
		case 56:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=__ZN8LinuxApp14getConsoleNodeEj(Larg0.arg1)|0;
		__ZN12TerminalNode8pushCharEj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0,Larg0.value);
		__ZN12AddressSpace13scheduleLaterEv();
		break a;
		case 39:
		HEAP32[530060]=Larg0.value;
		break a;
		case 87:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.columns;
		tmp9=Larg0.rows;
		tmp10=2107720;
		HEAP16[2+tmp10>>1]=L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed;
		HEAP16[tmp10>>1]=tmp9;
		break a;
		case 95:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.width;
		__ZN7KmsNode7setSizeEjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,Larg0.height);
		break a;
		case 76:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.value;
		tmp9=Larg0.button;
		tmp10=Larg0.x;
		tmp11=Larg0.y;
		__ZN8LinuxApp13handleEvMouseE13EV_MOUSE_TYPEjiid(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,tmp10,tmp11,+Larg0.timeStamp);
		break a;
		case 94:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.value;
		tmp9=Larg0.keyCode;
		__ZN8LinuxApp11handleEvKeyE11EV_KEY_TYPEjd(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,+Larg0.timeStamp);
		break a;
		case 43:
		tmp4=new MessageChannel();
		tmp5=__ZN8LinuxApp11scheduleAppEv;
		tmp4.port2.onmessage=tmp5;
		__ZN12AddressSpace8selfPortE=tmp4.port1;
		__ZN8LinuxApp15setTimerHandlerEv();
		tmp3=+performance.timeOrigin;
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=~~(tmp3/1000);
		HEAP32[812484]=L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed;
		HEAP32[812565]=~~((tmp3-(+(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>>0))*1000)*1000);
		__ZN8LinuxApp14setTimezoneEnvEi(~~ +new Date().getTimezoneOffset());
		__ZN14AsmCompileBase10globalInitEv();
		__ZN16InterpPrimitives19InitializeMainTableILi32EEEvv();
		tmp4={type:35, tid:(Larg0.tid), value: 0};
		postMessage(tmp4);
		break a;
		case 16:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp9=32+tmp4|0;
		__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp9,Larg0.mountType);
		tmp10=16+tmp4|0;
		__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp10,Larg0.path);
		__ZN8LinuxApp18handleMountRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_j(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,tmp10,Larg0.devId);
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp10);
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp9);
		break a;
		case 81:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.devId;
		__ZN8LinuxApp19handleDeviceRequestEjj(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,Larg0.len);
		tmp4={type:35, tid:(Larg0.tid), value: 0};
		postMessage(tmp4);
		break a;
		case 83:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.localPort;
		__ZN8LinuxApp19handleConnectToPortEjj(Larg0.tid,L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed);
		break a;
		case 86:
		tmp4=__ZZN11CheerpXCore17handleMessageImplEPN6client11CoreMessageEEN3$_08__invokeEv;
		Larg0.value.onmessage=tmp4;
		break a;
		case 88:
		tmp10=Larg0.tid;
		tmp9=HEAP32[829209]|0;
		b:if((tmp9|0)!=(0|0)){
			while(1){
				L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[12+tmp9>>2]|0;
				if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0))while(1){
					if((HEAP32[436+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)===(tmp10|0))break b;
					L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[488+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0;
					if((L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0)!=(0|0))continue;
					break;
				}
				tmp9=HEAP32[92+tmp9>>2]|0;
				if((tmp9|0)!=(0|0))continue;
				break;
			}
			L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=0|0;
		}else{
			L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=0|0;
		}
		HEAP32[L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]=Larg0.arg0;
		if((HEAP32[592+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed>>2]|0)===1){
			__ZN7CoreCtx8setStateENS_5STATEE(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,0);
			__ZN12AddressSpace13scheduleLaterEv();
			break a;
		}
		___assert_fail(2120256|0,tmp5,922,tmp6);
		;
		case 92:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[16+(HEAP32[829214]|0)>>2]|0;
		__ZN13PS2Controller13handleKeyDownEj(76+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0,Larg0.value);
		__ZN12AddressSpace13scheduleLaterEv();
		break a;
		case 93:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=HEAP32[16+(HEAP32[829214]|0)>>2]|0;
		__ZN13PS2Controller11handleKeyUpEj(76+L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed|0,Larg0.value);
		__ZN12AddressSpace13scheduleLaterEv();
		break a;
		case 13:
		__ZN13IOTransaction6finishEv((Larg0.ioTransaction)|0);
		break a;
		case 57:
		__ZN13EventsHandler16registerCallbackE15CORE_EVENT_TYPE(Larg0.eventType);
		break a;
		case 80:
		__ZN13EventsHandler18unregisterCallbackE15CORE_EVENT_TYPE(Larg0.eventType);
		break a;
		case 96:
		L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed=Larg0.tid;
		tmp9=Larg0.devId;
		tmp10=tmp4|0;
		__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp10,Larg0.path);
		__ZN8LinuxApp18handleFsCreateFileEjjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE(L$poptgep$poptgep$poptgep$poptgep$poptgepsqueezed$poptgepsqueezed$poptgepsqueezed,tmp9,tmp10);
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp10);
		break a;
		default:
		debugger;
	}
	___setStackPtr(LsavedStack);
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
function __ZZN11CheerpXCore17handleMessageImplEPN6client11CoreMessageEEN3$_08__invokeEv(){
	__ZN12AddressSpace13scheduleLaterEv();
}
function __ZN11CheerpXCore10initializeEv(){
	var tmp0=null,tmp1=null;
	__ZN12AddressSpace15initializeCacheEv();
	tmp1="message";
	tmp0=__ZN11CheerpXCore13handleMessageEPN6client12MessageEventIPNS0_6ObjectEEE;
	addEventListener(tmp1,tmp0);
	HEAPF64[274179]=+performance.timeOrigin;
	tmp1=HEAP8;
	tmp1=tmp1.buffer;
	tmp1={type:0,buffer:tmp1,asyncPtrOffset:((2189416|0)|0),startRealTime: +HEAPF64[274179]};
	postMessage(tmp1);
}
function __ZZZN8LinuxApp20retryCoreMessageImplEP7CoreCtxiENK3$_0clES1_iEN9CheerpTmp3RunES1_i(Larg0){
	var tmp0=null;
	tmp0=__ZN8LinuxApp15pendingMessagesE;
	tmp0=tmp0[0+Larg0|0];
	if(tmp0!==null){
		__ZN11CheerpXCore17handleMessageImplEPN6client11CoreMessageE(tmp0);
		tmp0=__ZN8LinuxApp15pendingMessagesE;
		tmp0[0+Larg0|0]=null;
		return;
	}
	___assert_fail(2142836|0,2120932|0,1011,2142840|0);
	;
}
function __ZN14AsmCompileBase19completeModuleAsyncEPN6client6ObjectE(Larg0){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0,tmp4=0;
	tmp4=2189416;
	HEAP8[25+tmp4>>0]=0;
	HEAP32[20+tmp4>>2]=1;
	__ZN10BinaryCode10LinearCode10deallocateEv();
	__ZN14AsmCompileBase14completeModuleEPN6client6ObjectEP14CompiledModule(Larg0,HEAP32[811921]|0);
	HEAP32[811922]=__ZNKSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE4sizeB7v160000Ev(2194672|0)|0;
	__ZN14CompiledModule6decRefEv(HEAP32[811921]|0);
	HEAP32[811921]=0;
	tmp4=2194672;
	tmp0=HEAP32;
	tmp1=HEAP32[tmp4>>2]>>2|0;
	tmp2=HEAP32;
	tmp3=HEAP32[4+tmp4>>2]>>2|0;
	if(tmp0!==tmp2||tmp1!==tmp3)__ZN17WasmGeneratorBase20compilePendingTracesEb(0);
}
function __ZN14AsmCompileBase14completeModuleEPN6client6ObjectEP14CompiledModule(Larg0,Larg1){
	var LsavedStack=null,tmp1=null,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=0,tmp7=null,tmp8=null,tmp9=0,L$poptgepsqueezed25=0,tmp11=0,tmp12=null,tmp13=null,L$poptgepsqueezed24=0,tmp15=0,tmp16=0;
	LsavedStack=___getStackPtr();
	tmp7=-32+LsavedStack|0;
	___setStackPtr(tmp7);
	tmp1=2149948|0;
	tmp2=2147692|0;
	if((Larg1|0)!=(0|0)){
		tmp8=new WebAssembly.Instance(Larg0,__ZN17WasmGeneratorBase14moduleTemplateE);
		__ZN14CompiledModule15setWasmInstanceEPN6client11AsmInstanceE(Larg1|0,tmp8);
		tmp3=__asm;
		tmp4=tmp3.tbl;
		tmp8=tmp8.exports.tbl;
		tmp5=HEAP32[4+Larg1>>2]|0;
		tmp9=tmp8.length;
		L$poptgepsqueezed25=24+Larg1|0;
		tmp11=__ZNKSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE4sizeB7v160000Ev(L$poptgepsqueezed25)|0;
		if((tmp9|0)===(tmp11+8|0)){
			tmp12=tmp4.get(((1276|0)|0));
			tmp8.set(0,tmp4.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(0)|0));
			tmp8.set(1,tmp4.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(1)|0));
			tmp8.set(2,tmp4.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(2)|0));
			tmp8.set(3,tmp4.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(3)|0));
			tmp8.set(4,tmp4.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(4)|0));
			tmp8.set(5,tmp4.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(5)|0));
			tmp8.set(6,tmp4.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(6)|0));
			tmp8.set(7,tmp4.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(7)|0));
			tmp6=tmp11+(8-tmp5|0)|0;
			if(tmp6>>>0>8){
				tmp9=8;
				while(1){
					tmp13=HEAP32;
					tmp11=__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEEixB7v160000Em(L$poptgepsqueezed25,tmp9-8|0)>>2;
					tmp11=tmp13[tmp11]|0;
					if((tmp11|0)!=(0|0)){
						tmp11=HEAP32[32+tmp11>>2]|0;
						if((tmp11|0)>0)tmp13=tmp4.get(tmp11);
						else{
							tmp13=tmp12;
						}
						tmp8.set(tmp9,tmp13);
					}
					tmp9=tmp9+1|0;
					if((tmp9|0)!==(tmp6|0))continue;
					break;
				}
			}
			tmp9=24+tmp7|0;
			tmp11=16+tmp7|0;
			__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev(tmp11,L$poptgepsqueezed25);
			__ZNKSt11__wrap_iterIPP9CodeTraceEmiB7v160000El(tmp9,tmp11,tmp5);
			if((tmp5|0)!==0){
				L$poptgepsqueezed25=0;
				while(1){
					tmp12=HEAP32;
					tmp11=HEAP32[tmp9>>2]>>2|0;
					tmp11=tmp12[tmp11]|0;
					if((tmp11|0)!=(0|0)){
						L$poptgepsqueezed24=HEAP32[20+tmp11>>2]|0;
						HEAP32[24+L$poptgepsqueezed24>>2]=HEAP32[24+L$poptgepsqueezed24>>2]& -9;
						tmp12=tmp8.get(L$poptgepsqueezed25+tmp6|0);
						__ZN9CodeTrace10freeModuleEbbb(tmp11,0,0,0);
						L$poptgepsqueezed24=HEAP16[54+tmp11>>1]|0;
						if((L$poptgepsqueezed24&8)!==0){
							tmp15=L$poptgepsqueezed24&65527;
							HEAP16[54+tmp11>>1]=tmp15;
							if((HEAP32[32+tmp11>>2]|0)!==0)if((L$poptgepsqueezed24&4)===0){
								L$poptgepsqueezed24=HEAP32[20+tmp11>>2]|0;
								tmp16=HEAP32[24+L$poptgepsqueezed24>>2]|0;
								if((tmp16&1|0)===0){
									HEAP16[54+tmp11>>1]=tmp15|4;
									HEAP32[24+L$poptgepsqueezed24>>2]=tmp16|8;
									__ZN20WasmGeneratorUtility11insertTraceEP9CodeTrace(tmp11);
								}
							}
						}else{
							tmp16=HEAP32[811405]|0;
							if((tmp16|0)!=(0|0)){
								L$poptgepsqueezed24=HEAP32[tmp16>>2]|0;
								tmp15=L$poptgepsqueezed24+1|0;
								HEAP32[tmp16>>2]=tmp15;
								if((tmp15|0)===(HEAP32[4+tmp16>>2]|0)){
									HEAP32[811405]=(HEAP32[8+tmp16>>2]|0);
									__ZdlPv(tmp16|0);
								}
							}else{
								L$poptgepsqueezed24=tmp3.tbl.grow(1000);
								tmp13=HEAP8;
								tmp16=__Znwj(12)|0;
								__ZN14FreeTableEntryC2Ejj(tmp16|0,L$poptgepsqueezed24+1|0,L$poptgepsqueezed24+1000|0);
								HEAP32[811405]=(tmp16|0);
							}
							tmp4.set(L$poptgepsqueezed24,tmp12);
							__ZN9CodeTrace9setModuleEiP14CompiledModulePN6client6ObjectE(tmp11,L$poptgepsqueezed24,Larg1|0,tmp12);
						}
						HEAP16[16+tmp11>>1]=270;
						L$poptgepsqueezed24=88+tmp11|0;
						__ZN19RefCountedBufferPtraSERKS_(84+tmp11|0,L$poptgepsqueezed24);
						__ZN19RefCountedBufferPtraSEP16RefCountedBuffer(L$poptgepsqueezed24);
					}
					__ZNSt11__wrap_iterIPP9CodeTraceEppB7v160000Ev(tmp9)|0;
					L$poptgepsqueezed25=L$poptgepsqueezed25+1|0;
					if((L$poptgepsqueezed25|0)!==(tmp5|0))continue;
					break;
				}
			}
			tmp11=8+tmp7|0;
			__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev(tmp11);
			L$poptgepsqueezed25=tmp7|0;
			__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev(L$poptgepsqueezed25,2194672|0);
			tmp7=HEAP32;
			tmp16=HEAP32[tmp11>>2]>>2|0;
			tmp8=HEAP32;
			L$poptgepsqueezed24=HEAP32[L$poptgepsqueezed25>>2]>>2|0;
			if(tmp7!==tmp8||tmp16!==L$poptgepsqueezed24)while(1){
				tmp16=tmp7[tmp16]|0;
				if((tmp16|0)!=(0|0)){
					if((HEAP16[54+tmp16>>1]&4)===0)___assert_fail(2146940|0,tmp1,290,tmp2);
					;
					tmp15=HEAP32[20+tmp16>>2]|0;
					HEAP32[24+tmp15>>2]=HEAP32[24+tmp15>>2]|8;
					if((HEAP16[18+tmp16>>1]&65535)!==0)___assert_fail(2146764|0,tmp1,292,tmp2);
					;
				}
				__ZNSt11__wrap_iterIPP9CodeTraceEppB7v160000Ev(tmp11)|0;
				tmp7=HEAP32;
				tmp16=HEAP32[tmp11>>2]>>2|0;
				if(tmp7!==tmp8||tmp16!==L$poptgepsqueezed24)continue;
				break;
			}
			___setStackPtr(LsavedStack);
			return;
		}
		___assert_fail(2147708|0,tmp1,214,tmp2);
		;
	}
	___assert_fail(2147684|0,tmp1,207,tmp2);
	;
}
function __ZN14AsmCompileBase10globalInitEv(){
	var LsavedStack=null,tmp1=null,tmp2=0;
	LsavedStack=___getStackPtr();
	tmp1=-4360+LsavedStack|0;
	___setStackPtr(tmp1);
	__ZN17WasmGeneratorBase14moduleTemplateE={i:{m:__asm.memory}};
	tmp2=tmp1|0;
	__ZN13WasmGeneratorC2Ev(tmp2);
	__ZN13WasmGenerator14emitBaseHeaderEv(tmp2);
	__ZN13WasmGeneratorD2Ev(tmp2);
	__ZN17WasmGeneratorBase21checkWasmFeatureFlagsEv();
	__ZN14AsmCompileBase24importPlaceholderFuncObjE=__asm.tbl.get(((1276|0)|0));
	___setStackPtr(LsavedStack);
}
function __ZN9CodeTrace9setModuleEiP14CompiledModulePN6client6ObjectE(Larg0,Larg1,Larg2,Larg3){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=0,tmp4=0,tmp5=0;
	LsavedStack=___getStackPtr();
	tmp1=-16+LsavedStack|0;
	___setStackPtr(tmp1);
	if(((HEAP32[24+Larg0>>2]|0)|0)!=(0|0))___assert_fail(2146784|0,2167124|0,35,2146804|0);
	;
	HEAP32[24+Larg0>>2]=(Larg2|0);
	HEAP32[Larg2>>2]=(HEAP32[Larg2>>2]|0)+1|0;
	HEAP32[32+Larg0>>2]=Larg1;
	tmp2=8+tmp1|0;
	__ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev(tmp2,28+Larg0|0);
	tmp3=tmp1|0;
	__ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev(tmp3);
	tmp5=HEAP32[tmp2>>2]|0;
	tmp4=HEAP32[tmp3>>2]|0;
	if((tmp5|0)!=(tmp4|0))while(1){
		__ZN14CompiledModule19updateImportedTraceEP9CodeTracePN6client6ObjectE(HEAP32[4+tmp5>>2]|0,Larg0|0,Larg3);
		__ZNSt23__forward_list_iteratorIPSt19__forward_list_nodeIP14CompiledModulePvEEppB7v160000Ev(tmp2)|0;
		tmp5=HEAP32[tmp2>>2]|0;
		if((tmp5|0)!=(tmp4|0))continue;
		break;
	}
	___setStackPtr(LsavedStack);
}
function __ZN9CodeTrace14freeTableEntryEv(Larg0){
	var tmp0=null;
	tmp0=__asm.tbl;
	if(tmp0.get(HEAP32[32+Larg0>>2]|0)!==null){
		__ZN14AsmCompileBase14freeTableEntryEj(HEAP32[32+Larg0>>2]|0);
		tmp0.set(HEAP32[32+Larg0>>2]|0,null);
		return;
	}
	___assert_fail(2168888|0,2168924|0,5037,2168996|0);
	;
}
function __ZN9CodeTrace10freeModuleEbbb(Larg0,Larg1,Larg2,Larg3){
	var LsavedStack=null,tmp1=null,tmp2=null,tmp3=0,tmp4=0,tmp5=0,tmp6=0;
	LsavedStack=___getStackPtr();
	tmp1=-16+LsavedStack|0;
	___setStackPtr(tmp1);
	if(Larg3){
		tmp2=HEAP8;
		tmp5=HEAP32[68+Larg0>>2]|0;
		if(tmp2!==nullArray||tmp5!==0){
			HEAP16[54+Larg0>>1]=HEAP16[54+Larg0>>1]|2;
			__ZN9CodeTrace12freeWasmCodeEv(Larg0|0);
		}
	}
	if((HEAP32[32+Larg0>>2]|0)>0)__ZN9CodeTrace14freeTableEntryEv(Larg0|0);
	a:{
		if(!(Larg1)){
			tmp5=HEAP32[32+Larg0>>2]|0;
			if((tmp5|0)===-3)break a;
			if((tmp5|0)!==-1){
				if((HEAP16[54+Larg0>>1]&4)!==0){
					HEAP32[32+Larg0>>2]=-2;
					break a;
				}
				HEAP32[32+Larg0>>2]=0;
				break a;
			}
		}
		HEAP32[32+Larg0>>2]=-1;
	}
	tmp5=8+tmp1|0;
	__ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev(tmp5,28+Larg0|0);
	tmp3=tmp1|0;
	__ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev(tmp3);
	tmp6=HEAP32[tmp5>>2]|0;
	tmp4=HEAP32[tmp3>>2]|0;
	if((tmp6|0)!=(tmp4|0))while(1){
		__ZN14CompiledModule19updateImportedTraceEP9CodeTracePN6client6ObjectE(HEAP32[4+tmp6>>2]|0,Larg0|0,__ZN14AsmCompileBase24importPlaceholderFuncObjE);
		__ZNSt23__forward_list_iteratorIPSt19__forward_list_nodeIP14CompiledModulePvEEppB7v160000Ev(tmp5)|0;
		tmp6=HEAP32[tmp5>>2]|0;
		if((tmp6|0)!=(tmp4|0))continue;
		break;
	}
	if(Larg2){
		HEAP16[54+Larg0>>1]=HEAP16[54+Larg0>>1]|8;
		__ZN19RefCountedBufferPtraSEP16RefCountedBuffer(88+Larg0|0);
	}
	tmp5=HEAP32[24+Larg0>>2]|0;
	if((tmp5|0)!=(0|0)){
		__ZN14CompiledModule6decRefEv(tmp5);
		HEAP32[24+Larg0>>2]=0;
	}
	___setStackPtr(LsavedStack);
}
function __ZN6cheerpL8date_nowEv(){
	return +Date.now();
}
function __ZN13WasmGenerator23compileTracesModuleSyncEv(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0;
	LsavedStack=___getStackPtr();
	tmp3=-8+LsavedStack|0;
	___setStackPtr(tmp3);
	tmp1=tmp3|0;
	__ZNK10BinaryCode9getLinearEj(tmp1,4228+Larg0|0);
	tmp3=HEAP8;
	tmp4=__ZNK10BinaryCode10LinearCode6getBufEv(tmp1)|0;
	tmp2=tmp3;
	tmp4=tmp4;
	tmp3=new WebAssembly.Module(new Uint8Array(tmp2.subarray((+(tmp4>>>0)),(+((HEAP32[4236+Larg0>>2]|0)+tmp4>>>0)))));
	__ZN10BinaryCode10LinearCodeD2Ev(tmp1);
	__ZN14AsmCompileBase14completeModuleEPN6client6ObjectEP14CompiledModule(tmp3,HEAP32[4340+Larg0>>2]|0);
	___setStackPtr(LsavedStack);
}
function __ZN13WasmGenerator13compileModuleEPKhj(Larg0,Marg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp0=Marg0;
	tmp1={type:47, replyType: 48, start:tmp0, len:Larg1};
	postMessage(tmp1);
}
function __ZN13WasmGenerator8debuggerEj(Larg0){
	var tmp0=null,tmp1=null;
	tmp0=___getStackPtr();
	tmp1=-8+tmp0|0;
	___setStackPtr(tmp1);
	HEAP32[tmp1>>2]=Larg0;
	___printf(2164952|0);
	___setStackPtr(tmp0);
	debugger;
}
function __ZN14WriteToConsole2DoEPKc(Larg0,Marg0){
	var tmp0=null;
	tmp0="IP: ";
	console.log(tmp0.concat(_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0)));
}
function __ZN13WasmGenerator13getMemorySizeEv(){
	return ~~( +__asm.memory.buffer.byteLength*1.52587890625E-5)|0;
}
function __ZN13WasmGenerator28compileInterpreterModuleSyncEP25CompiledInterpreterModule(Larg0,Larg1){
	var LsavedStack=null,tmp1=null,tmp2=null,tmp3=0,tmp4=0;
	LsavedStack=___getStackPtr();
	tmp2=-8+LsavedStack|0;
	___setStackPtr(tmp2);
	tmp3=tmp2|0;
	__ZNK10BinaryCode9getLinearEj(tmp3,4228+Larg0|0);
	tmp2=HEAP8;
	tmp4=__ZNK10BinaryCode10LinearCode6getBufEv(tmp3)|0;
	tmp1=tmp2;
	tmp4=tmp4;
	tmp2=new WebAssembly.Module(new Uint8Array(tmp1.subarray((+(tmp4>>>0)),(+((HEAP32[4236+Larg0>>2]|0)+tmp4>>>0)))));
	__ZN10BinaryCode10LinearCodeD2Ev(tmp3);
	tmp3=__ZN25CompiledInterpreterModule23completeLastInstructionEPN6client6ObjectE(Larg1|0,tmp2)|0;
	___setStackPtr(LsavedStack);
	return tmp3|0;
}
function __ZN13WasmGenerator27compileDispatcherModuleSyncEjP22CompiledHandlersTables14MAIN_LOOP_TYPE(Larg0,Larg1,Larg2){
	var LsavedStack=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0;
	LsavedStack=___getStackPtr();
	tmp3=-8+LsavedStack|0;
	___setStackPtr(tmp3);
	tmp1=tmp3|0;
	__ZNK10BinaryCode9getLinearEj(tmp1,4228+Larg0|0);
	tmp3=HEAP8;
	tmp4=__ZNK10BinaryCode10LinearCode6getBufEv(tmp1)|0;
	tmp2=tmp3;
	tmp4=tmp4;
	tmp3=new WebAssembly.Module(new Uint8Array(tmp2.subarray((+(tmp4>>>0)),(+((HEAP32[4236+Larg0>>2]|0)+tmp4>>>0)))));
	__ZN10BinaryCode10LinearCodeD2Ev(tmp1);
	__ZN22CompiledHandlersTables24completeDispatcherModuleEjPN6client6ObjectE14MAIN_LOOP_TYPE(Larg1,tmp3,Larg2);
	___setStackPtr(LsavedStack);
}
function __ZN13WasmGenerator29compileInterpreterModuleAsyncEP25CompiledInterpreterModule(Larg0,Larg1){
	var LsavedStack=null,tmp1=0,tmp2=null,tmp3=0;
	LsavedStack=___getStackPtr();
	tmp2=-8+LsavedStack|0;
	___setStackPtr(tmp2);
	tmp3=tmp2|0;
	__ZNK10BinaryCode9getLinearEj(tmp3,4228+Larg0|0);
	tmp1=__ZN25CompiledInterpreterModule16addAggregateCodeEON10BinaryCode10LinearCodeE(Larg1|0,tmp3)|0;
	__ZN10BinaryCode10LinearCodeD2Ev(tmp3);
	tmp2=HEAP8;
	tmp3=__ZNK10BinaryCode10LinearCode6getBufEv(tmp1)|0;
	tmp3=tmp3;
	tmp2={type:47, replyType: 40, start:tmp3, len:(HEAP32[4236+Larg0>>2]|0)};
	postMessage(tmp2);
	___setStackPtr(LsavedStack);
}
function __ZN17WasmGeneratorBase8dumpFileEPKcPKhj(Larg0,Marg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp2=Larg0;
	tmp0=Marg0;
	tmp2=new Blob(new Array(new Uint8Array(tmp2.subarray((+(tmp0>>>0)),(+(tmp0+Larg1>>>0))))));
	tmp1=URL.createObjectURL(tmp2);
	tmp2={type:42, path:tmp1, value:"dump.wasm"};
	postMessage(tmp2);
}
function __ZN17WasmGeneratorBase31completeInstructionsModuleAsyncEPN6client6ObjectE(Larg0){
	var tmp0=0;
	tmp0=HEAP32[812440]|0;
	if((tmp0|0)!=(0|0)){
		__ZN25CompiledInterpreterModule16completeHandlersEPN6client6ObjectEjj(tmp0,Larg0,0,__ZNKSt6vectorIN25CompiledInterpreterModule11HandlerDataESaIS1_EE4sizeB7v160000Ev(tmp0|0)|0);
		tmp0=HEAP32[812440]|0;
		if((tmp0|0)!=(0|0)){
			__ZN25CompiledInterpreterModuleD2Ev(tmp0);
			__ZdlPv(tmp0|0);
		}
		HEAP32[812440]=0;
		return;
	}
	___assert_fail(2143556|0,2116236|0,510,2142844|0);
	;
}
function __ZN17WasmGeneratorBase21checkWasmFeatureFlagsEv(){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=null,tmp6=0,tmp7=null;
	LsavedStack=___getStackPtr();
	tmp5=-4400+LsavedStack|0;
	___setStackPtr(tmp5);
	tmp1=40+tmp5|0;
	__ZN13WasmGeneratorC2Ev(tmp1);
	__ZN13WasmGenerator17emitGenericHeaderEjjjj(tmp1,1,1,0,1);
	tmp2=24+tmp5|0;
	__ZN13WasmGenerator15emitCodeSectionEj(tmp2,tmp1,1);
	tmp3=8+tmp5|0;
	__ZN13WasmGenerator16emitFixableInt32Ev(tmp3,tmp1);
	__ZN13WasmGenerator17emitEmptyFunctionEv(tmp1);
	__ZN13WasmGenerator14controlFlowEndEv(tmp1);
	__ZN13WasmGenerator13FixupLocation6commitEv(tmp3);
	__ZN13WasmGenerator13FixupLocation6commitEv(tmp2);
	tmp4=tmp5|0;
	__ZNK10BinaryCode9getLinearEj(tmp4,4228+tmp1|0);
	tmp5=HEAP8;
	tmp6=__ZNK10BinaryCode10LinearCode6getBufEv(tmp4)|0;
	tmp7=tmp5;
	tmp6=tmp6;
	tmp5=new Uint8Array(tmp7.subarray((+(tmp6>>>0)),(+((HEAP32[4236+tmp1>>2]|0)+tmp6>>>0))));
	tmp6=WebAssembly.validate(tmp5);
	if(tmp6){
		tmp7=new WebAssembly.Module(tmp5);
		tmp5=new WebAssembly.Instance(tmp7,__ZN17WasmGeneratorBase14moduleTemplateE).exports.tbl;
		tmp7=tmp5.get(0);
		if(tmp7===null)___assert_fail(2143408|0,2116236|0,557,2143428|0);
		;
		tmp5.set(0,tmp7);
		if(tmp5.get(0)!==null)HEAP8[3245072]=1;
	}
	__ZN10BinaryCode10LinearCodeD2Ev(tmp4);
	__ZN13WasmGeneratorD2Ev(tmp1);
	___setStackPtr(LsavedStack);
}
function __ZN14CompiledModule17clearWasmInstanceEv(Larg0){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null;
	tmp0=HEAP32[20+Larg0>>2]|0;
	tmp1=2168836|0;
	tmp2=2166980|0;
	if((tmp0|0)!==0){
		tmp3=__ZN14CompiledModule9instancesE;
		if(tmp3[0+(tmp0-1|0)|0]!==null){
			tmp3[0+(tmp0-1|0)|0]=null;
			return;
		}
		___assert_fail(2168856|0,tmp2,181,tmp1);
		;
	}
	___assert_fail(2168824|0,tmp2,179,tmp1);
	;
}
function __ZN14CompiledModule15setWasmInstanceEPN6client11AsmInstanceE(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=__ZN14CompiledModule9instancesE;
	if(tmp1===null){
		tmp1=new Array();
		__ZN14CompiledModule9instancesE=tmp1;
		tmp1=tmp1;
	}
	tmp0=tmp1.indexOf(null);
	tmp1=__ZN14CompiledModule9instancesE;
	if((tmp0|0)>-1){
		tmp1[0+tmp0|0]=Larg1;
		HEAP32[20+Larg0>>2]=tmp0+1|0;
		return;
	}
	+tmp1.push(Larg1);
	HEAP32[20+Larg0>>2]=__ZN14CompiledModule9instancesE.length;
}
function __ZN14CompiledModule19updateImportedTraceEP9CodeTracePN6client6ObjectE(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=0,L$poptgepsqueezed2=0,tmp3=0,tmp4=null;
	L$poptgepsqueezed2=24+Larg0|0;
	tmp0=__ZNKSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE4sizeB7v160000Ev(L$poptgepsqueezed2)|0;
	if((tmp0|0)!==0){
		tmp3=0;
		while(1){
			tmp4=HEAP32;
			tmp1=__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEEixB7v160000Em(L$poptgepsqueezed2,tmp3)>>2;
			if(((tmp4[tmp1]|0)|0)==(Larg1|0)){
				L$poptgepsqueezed2=HEAP32[20+Larg0>>2]|0;
				if((L$poptgepsqueezed2|0)!==0){
					tmp4=__ZN14CompiledModule9instancesE;
					tmp4[0+(L$poptgepsqueezed2-1|0)|0].exports.tbl.set(tmp3+8|0,Larg2);
				}
			}else{
				tmp3=tmp3+1|0;
				if((tmp3|0)!==(tmp0|0))continue;
			}
			break;
		}
	}
}
function __ZN14CompiledModule18clearImportedTraceEP9CodeTrace(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,L$poptgepsqueezed2=0,tmp4=0,tmp5=null;
	L$poptgepsqueezed2=24+Larg0|0;
	tmp0=__ZNKSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE4sizeB7v160000Ev(L$poptgepsqueezed2)|0;
	if((tmp0|0)!==0){
		tmp4=0;
		while(1){
			tmp5=HEAP32;
			tmp1=__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEEixB7v160000Em(L$poptgepsqueezed2,tmp4)>>2;
			if(((tmp5[tmp1]|0)|0)==(Larg1|0)){
				tmp5[tmp1]=0;
				L$poptgepsqueezed2=HEAP32[20+Larg0>>2]|0;
				if((L$poptgepsqueezed2|0)!==0){
					tmp5=__ZN14AsmCompileBase24importPlaceholderFuncObjE;
					tmp2=__ZN14CompiledModule9instancesE;
					tmp2[0+(L$poptgepsqueezed2-1|0)|0].exports.tbl.set(tmp4+8|0,tmp5);
				}
			}else{
				tmp4=tmp4+1|0;
				if((tmp4|0)!==(tmp0|0))continue;
			}
			break;
		}
	}
}
function __ZNK25CompiledInterpreterModule11HandlerData14setAllHandlersEj(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=0,tmp6=0,tmp7=0;
	tmp0=__asm.tbl.get(Larg1);
	if(!(__ZNK24ImportantBitsForDispatch21doesMaskFitInTwoBytesEv(8+Larg0|0)|0))___assert_fail(2117912|0,2166980|0,251,2117964|0);
	;
	tmp6=HEAP32[8+Larg0>>2]|0;
	tmp1=HEAP16[6+Larg0>>1]&tmp6&65535;
	tmp6&=65535;
	tmp2=tmp6^ -1;
	tmp3=HEAP32[16+Larg0>>2]&65535;
	tmp4=(tmp3|0)!==0?HEAP32[24+Larg0>>2]&65535|0:1|0;
	tmp7=tmp1;
	while(1){
		if((tmp7&tmp3|0)!==(tmp4|0)){
			tmp5=HEAP16[4+Larg0>>1]|0;
			__ZN25CompiledInterpreterModule18handlersWasmTablesE[tmp5&65535].set(tmp7+8|0,tmp0);
		}
		tmp7=(tmp7|tmp6)+1&tmp2|tmp1;
		if(tmp7>>>0<65536)continue;
		break;
	}
}
function __ZN25CompiledInterpreterModule16completeHandlersEPN6client6ObjectEjj(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null,L$poptgep=0,tmp4=0,tmp5=0,tmp6=0,tmp7=0,tmp8=0,tmp9=null,tmp10=null,tmp11=0,tmp12=0,tmp13=0;
	tmp9=new WebAssembly.Instance(Larg1,__ZN17WasmGeneratorBase14moduleTemplateE);
	tmp0=__asm.tbl;
	tmp9=tmp9.exports.tbl;
	tmp1=8-Larg2|0;
	tmp2=2166980|0;
	tmp10=2117852|0;
	if(((tmp9.length)|0)!==(tmp1+Larg3|0))___assert_fail(2117776|0,tmp2,288,tmp10);
	;
	tmp9.set(0,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(9)|0));
	tmp9.set(1,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(1)|0));
	tmp9.set(2,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(2)|0));
	tmp9.set(3,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(3)|0));
	tmp9.set(4,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(4)|0));
	tmp9.set(5,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(5)|0));
	tmp9.set(6,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(6)|0));
	tmp9.set(7,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(7)|0));
	if(Larg3>>>0<=Larg2>>>0)___assert_fail(2117872|0,tmp2,298,tmp10);
	;
	if((__ZNKSt6vectorIN25CompiledInterpreterModule11HandlerDataESaIS1_EE4sizeB7v160000Ev(Larg0|0)|0)>>>0<Larg3>>>0)___assert_fail(2117888|0,tmp2,299,tmp10);
	;
	tmp11=Larg2;
	while(1){
		tmp10=tmp9.get(tmp11+tmp1|0);
		L$poptgep=(__imul(tmp11,56)|0)+(HEAP32[Larg0>>2]|0)|0;
		if(!(__ZNK24ImportantBitsForDispatch21doesMaskFitInTwoBytesEv(8+L$poptgep|0)|0))___assert_fail(2117912|0,tmp2,251,2117964|0);
		;
		tmp12=HEAP32[8+L$poptgep>>2]|0;
		tmp4=HEAP16[6+L$poptgep>>1]&tmp12&65535;
		tmp5=HEAP32[16+L$poptgep>>2]&65535;
		tmp6=(tmp5|0)!==0?HEAP32[24+L$poptgep>>2]&65535|0:1|0;
		tmp12&=65535;
		tmp7=tmp12^ -1;
		tmp13=tmp4;
		while(1){
			if((tmp13&tmp5|0)!==(tmp6|0)){
				tmp8=HEAP16[4+L$poptgep>>1]|0;
				__ZN25CompiledInterpreterModule18handlersWasmTablesE[tmp8&65535].set(tmp13+8|0,tmp10);
			}
			tmp13=(tmp13|tmp12)+1&tmp7|tmp4;
			if(tmp13>>>0<65536)continue;
			break;
		}
		tmp11=tmp11+1|0;
		if((tmp11|0)!==(Larg3|0))continue;
		return;
	}
}
function __ZN25CompiledInterpreterModule23completeLastInstructionEPN6client6ObjectE(Larg0,Larg1){
	var tmp0=0;
	tmp0=__ZNKSt6vectorIN25CompiledInterpreterModule11HandlerDataESaIS1_EE4sizeB7v160000Ev(Larg0|0)|0;
	__ZN25CompiledInterpreterModule16completeHandlersEPN6client6ObjectEjj(Larg0|0,Larg1,tmp0-1|0,tmp0);
	return ((__ZNKSt6vectorIN25CompiledInterpreterModule11HandlerDataESaIS1_EE4sizeB7v160000Ev(Larg0|0)|0)>>>0>100?1:0)|0;
}
function __ZN22CompiledHandlersTables21allocateTableInternalEjj14MAIN_LOOP_TYPE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=0;
	__ZN17WasmGeneratorBase23compileDispatcherModuleEjP22CompiledHandlersTables14MAIN_LOOP_TYPE(Larg0,Larg2);
	tmp1=__asm.tbl;
	tmp0=__ZN25CompiledInterpreterModule18handlersWasmTablesE[Larg0];
	tmp1=tmp1.get(Larg1);
	tmp2=0;
	while(1){
		tmp0.set(tmp2+8|0,tmp1);
		tmp2=tmp2+1|0;
		if((tmp2|0)!==65536)continue;
		break;
	}
}
function __ZN22CompiledHandlersTables24completeDispatcherModuleEjPN6client6ObjectE14MAIN_LOOP_TYPE(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp1=new WebAssembly.Instance(Larg1,__ZN17WasmGeneratorBase14moduleTemplateE);
	tmp0=__asm.tbl;
	tmp1=tmp1.exports.tbl;
	if(((tmp1.length)|0)===65544){
		tmp1.set(0,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(9)|0));
		tmp1.set(1,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(1)|0));
		tmp1.set(2,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(2)|0));
		tmp1.set(3,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(3)|0));
		tmp1.set(4,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(4)|0));
		tmp1.set(5,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(5)|0));
		tmp1.set(6,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(6)|0));
		tmp1.set(7,tmp0.get(__ZN17WasmGeneratorBase12getImportPtrE11WasmImports(7)|0));
		tmp2=tmp0.grow((Larg2|0)===2?4|0:5|0);
		tmp0.set(tmp2,tmp1.get(8));
		tmp0.set(tmp2+1|0,tmp1.get(9));
		tmp0.set(tmp2+2|0,tmp1.get(10));
		tmp0.set(tmp2+3|0,tmp1.get(11));
		HEAP32[(Larg0<<2)+8+2189656>>2]=tmp2;
		if((Larg2|0)!==2){
			tmp2=tmp2+4|0;
			tmp0.set(tmp2,tmp1.get(12));
			HEAP32[(Larg2<<2)+2189656>>2]=tmp2;
		}
		__ZN25CompiledInterpreterModule18handlersWasmTablesE[Larg0]=tmp1;
		return;
	}
	___assert_fail(2166908|0,2166980|0,418,2166700|0);
	;
}
function __ZN6cheerp11console_logIJPKcEEEvDpT_(Larg0,Marg0){
	console.log(_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0));
}
function __ZN6cheerpL8date_nowEv$p1295(){
	return +Date.now();
}
function __ZN8Debugger7disasAtEP12AddressSpacejjj(Larg0,Larg1,Larg2){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=0;
	LsavedStack=___getStackPtr();
	tmp1=-8+LsavedStack|0;
	___setStackPtr(tmp1);
	__ZN8Debugger11curDisasStrE=String();
	tmp2=__ZNK12AddressSpace12getChunkBaseEj(Larg0|0,Larg1)|0;
	if((tmp2|0)!=(0|0))if((HEAP32[4+tmp2>>2]&4|0)===0){
		tmp2=tmp1|0;
		HEAP8[4+tmp2>>0]=0;
		HEAP8[5+tmp2>>0]=Larg2;
		HEAP8[6+tmp2>>0]=Larg2;
		HEAP8[7+tmp2>>0]=Larg2&48;
		HEAP32[tmp2>>2]=Larg1;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,Larg1)|0;
		HEAP32[tmp2>>2]=tmp3;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		HEAP32[tmp2>>2]=tmp3;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		HEAP32[tmp2>>2]=tmp3;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		HEAP32[tmp2>>2]=tmp3;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		HEAP32[tmp2>>2]=tmp3;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		HEAP32[tmp2>>2]=tmp3;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		HEAP32[tmp2>>2]=tmp3;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		HEAP32[tmp2>>2]=tmp3;
		tmp3=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		HEAP32[tmp2>>2]=tmp3;
		__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,Larg0|0,tmp3)|0;
		tmp1=__ZN8Debugger11curDisasStrE;
		__ZN8Debugger11curDisasStrE=null;
		___setStackPtr(LsavedStack);
		return tmp1;
	}
	___assert_fail(2166728|0,2166756|0,1141,2166812|0);
	;
}
function __ZN8Debugger10appendInstEPKc(){
	var tmp0=null,tmp1=null;
	tmp0=__ZN8Debugger11curDisasStrE;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,3244440>>0);
	__ZN8Debugger11curDisasStrE=tmp0.concat(tmp1,"\n");
}
function __ZN8Debugger15registerContextEP7CoreCtx12CONTEXT_TYPEj(Larg0,Larg1,Larg2,Larg3){
	var LsavedStack=null,tmp1=0,tmp2=null;
	LsavedStack=___getStackPtr();
	tmp2=-16+LsavedStack|0;
	___setStackPtr(tmp2);
	tmp1=tmp2|0;
	__ZN11DebuggerCtxC2EP7CoreCtx12CONTEXT_TYPEj(tmp1,Larg1|0,Larg2,Larg3);
	__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE9push_backB7v160000EOS0_(Larg0|0,tmp1);
	if((HEAP8[16+Larg0>>0]&255)!==0){
		tmp2={type:26,ctxType:Larg2,value:Larg3,dbgState:(HEAP32[492+Larg1>>2]|0)};
		postMessage(tmp2);
	}
	___setStackPtr(LsavedStack);
}
function __ZN8Debugger21postUnregisterMessageE12CONTEXT_TYPEj(Larg0,Larg1){
	var tmp0=null;
	tmp0={type:46,ctxType:Larg0,value:Larg1};
	postMessage(tmp0);
}
function __ZN8Debugger9attachHudEv(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=0,tmp4=null,tmp5=0;
	LsavedStack=___getStackPtr();
	tmp4=-16+LsavedStack|0;
	___setStackPtr(tmp4);
	HEAP8[16+Larg0>>0]=1;
	tmp1=8+tmp4|0;
	__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE5beginB7v160000Ev(tmp1,Larg0|0);
	tmp2=tmp4|0;
	__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE3endB7v160000Ev(tmp2,Larg0|0);
	tmp5=HEAP32[tmp1>>2]|0;
	tmp3=HEAP32[tmp2>>2]|0;
	if((tmp5|0)!=(tmp3|0))while(1){
		tmp4={type:26,ctxType:(HEAP32[4+tmp5>>2]|0),value:(HEAP32[8+tmp5>>2]|0),dbgState:(HEAP32[492+(HEAP32[tmp5>>2]|0)>>2]|0)};
		postMessage(tmp4);
		__ZNSt11__wrap_iterIP11DebuggerCtxEppB7v160000Ev(tmp1)|0;
		tmp5=HEAP32[tmp1>>2]|0;
		if((tmp5|0)!=(tmp3|0))continue;
		break;
	}
	___setStackPtr(LsavedStack);
}
function __ZN8Debugger9attachCtxE12CONTEXT_TYPEj(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=null;
	tmp0=__ZN8Debugger11getCtxForIdE12CONTEXT_TYPEj(Larg0|0,Larg1,Larg2)|0;
	if((tmp0|0)!=(0|0)){
		if((HEAP32[492+tmp0>>2]|0)!==0)___assert_fail(2143672|0,2166756|0,1210,2143704|0);
		;
		HEAP32[492+tmp0>>2]=1;
		tmp1={type:27,ctxType:Larg1,value:Larg2,dbgState:1};
		postMessage(tmp1);
	}
}
function __ZN8Debugger9detachCtxE12CONTEXT_TYPEj(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=0,tmp2=null;
	tmp0=__ZN8Debugger11getCtxForIdE12CONTEXT_TYPEj(Larg0|0,Larg1,Larg2)|0;
	tmp1=(tmp0|0)==(0|0)?1:0;
	if(!(tmp1)){
		if((HEAP32[492+tmp0>>2]|0)!==1)___assert_fail(2143628|0,2166756|0,1222,2143660|0);
		;
		HEAP32[492+tmp0>>2]=0;
		tmp2={type:27,ctxType:Larg1,value:Larg2,dbgState:0};
		postMessage(tmp2);
	}
	return (tmp1^1?1:0)|0;
}
function _dbgDumpThreads(Larg0){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=null;
	tmp1=HEAP32[829209]|0;
	if((tmp1|0)!=(0|0))while(1){
		tmp2=HEAP32[8+tmp1>>2]|0;
		tmp3=HEAP32[32+tmp1>>2]|0;
		tmp4="Process";
		console.log(tmp4,tmp2,"State:",tmp3);
		tmp2=HEAP32[12+tmp1>>2]|0;
		if((tmp2|0)!=(0|0))while(1){
			tmp3=HEAP32[436+tmp2>>2]|0;
			tmp0=HEAP32[592+tmp2>>2]|0;
			tmp4="Thread";
			console.log(tmp4,tmp3,"State:",tmp0);
			tmp2=HEAP32[488+tmp2>>2]|0;
			if((tmp2|0)!=(0|0))continue;
			break;
		}
		tmp1=HEAP32[92+tmp1>>2]|0;
		if((tmp1|0)!=(0|0))continue;
		break;
	}
}
function _dbgDisassemblyAt(Larg0,Larg1,Larg2){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=0,tmp4=0,tmp5=0;
	LsavedStack=___getStackPtr();
	tmp1=-8+LsavedStack|0;
	___setStackPtr(tmp1);
	tmp3=HEAP32[829209]|0;
	if((tmp3|0)!=(0|0))while(1){
		if((HEAP32[8+tmp3>>2]|0)!==(Larg0|0)){
			tmp3=HEAP32[92+tmp3>>2]|0;
			if((tmp3|0)!=(0|0))continue;
			tmp3=0|0;
		}
		break;
	}
	else{
		tmp3=0|0;
	}
	__ZN8Debugger11getInstanceEv()|0;
	tmp3=HEAP32[tmp3>>2]|0;
	tmp2=tmp1|0;
	__ZN8Debugger11curDisasStrE=String();
	tmp4=__ZNK12AddressSpace12getChunkBaseEj(tmp3,Larg1)|0;
	if((tmp4|0)!=(0|0))if((HEAP32[4+tmp4>>2]&4|0)===0){
		HEAP8[4+tmp2>>0]=0;
		HEAP8[5+tmp2>>0]=32;
		HEAP8[6+tmp2>>0]=32;
		HEAP8[7+tmp2>>0]=32;
		if((Larg2|0)!==0){
			tmp5=Larg1;
			tmp4=0;
			while(1){
				HEAP32[tmp2>>2]=tmp5;
				tmp5=__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej(tmp2,tmp3,tmp5)|0;
				tmp4=tmp4+1|0;
				if((tmp4|0)!==(Larg2|0))continue;
				break;
			}
		}
		__ZN8Debugger11curDisasStrE=null;
		___setStackPtr(LsavedStack);
		return;
	}
	___assert_fail(2166728|0,2166756|0,1141,2166812|0);
	;
}
function _dbgDumpMem(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=null,tmp4=null,tmp5=0,tmp6=null,tmp7=0,tmp8=null;
	tmp5=HEAP32[829209]|0;
	if((tmp5|0)!=(0|0))while(1){
		if((HEAP32[8+tmp5>>2]|0)!==(Larg0|0)){
			tmp5=HEAP32[92+tmp5>>2]|0;
			if((tmp5|0)!=(0|0))continue;
			tmp5=0|0;
		}
		break;
	}
	else{
		tmp5=0|0;
	}
	tmp6=String();
	if((Larg2|0)===0){
		console.log(tmp6);
		return;
	}
	tmp7=0;
	while(1){
		tmp0=HEAP32[tmp5>>2]|0;
		tmp1=tmp7+Larg1|0;
		tmp8=HEAP32;
		tmp2=__ZN12AddressSpace19getTypedPtrFromAddrIjL18MEMORY_ACCESS_MODE1ELj2EEEPT_jjj(tmp0,tmp1)>>2;
		tmp3=__Z12getHexStringji(tmp1);
		tmp8=__Z12getHexStringji(tmp8[tmp2]|0);
		tmp4=":";
		tmp6=tmp6.concat(tmp3,tmp4,tmp8,"\n");
		tmp7=tmp7+4|0;
		if(tmp7>>>0<Larg2>>>0)continue;
		break;
	}
	console.log(tmp6);
}
function _dbgDumpAddressSpace(Larg0){
	var tmp0=0;
	tmp0=HEAP32[829209]|0;
	if((tmp0|0)!=(0|0))while(1){
		if((HEAP32[8+tmp0>>2]|0)!==(Larg0|0)){
			tmp0=HEAP32[92+tmp0>>2]|0;
			if((tmp0|0)!=(0|0))continue;
			tmp0=0|0;
		}
		break;
	}
	else{
		tmp0=0|0;
	}
	__ZNK12AddressSpace4dumpEv(HEAP32[tmp0>>2]|0);
	__ZNK12AddressSpace5checkEv(HEAP32[tmp0>>2]|0);
}
function __ZN11CoreManager26exitAndThrowNoAddressSpaceEv(){
	HEAP32[541764]=((3244552|0)|0);
	HEAP32[829215]=(HEAP32[829215]|0)+1|0;
	throw 'CheerpJContinue';
	;
}
function __ZN6cheerpL8date_nowEv$p1509(){
	return +Date.now();
}
function __Z12getHexStringji(Larg0){
	var tmp0=null,tmp1=null;
	tmp1=new Number((+(Larg0>>>0))).toString(16);
	tmp0="0";
	if(((tmp1.length)|0)>=0)return tmp1;
	while(1){
		tmp1=tmp0.concat(tmp1);
		if(((tmp1.length)|0)<0)continue;
		break;
	}
	return tmp1;
}
function __ZN10Graphics3D10deallocateEj(Larg0){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp1=__ZN10Graphics3D9allocatorE$p2|0;
	tmp0=__ZN10Graphics3D9allocatorE$p1;
	a:{
		if((Larg0|0)>-1)if((tmp1|0)>(Larg0|0))if((tmp0[Larg0]&255)!==0){
			tmp2=__ZN10Graphics3D9allocatorE$p0;
			tmp1=(__imul(Larg0,24)|0)/24|0;
			break a;
		}
		tmp2=__ZN10Graphics3D9allocatorE$p0;
		tmp1=-1;
	}
	tmp2=tmp2;
	tmp2[tmp1].a1=null;
	tmp2[tmp1].a2=null;
	tmp2[tmp1].a3=null;
	tmp2[tmp1].a4=null;
	tmp0[tmp1]=0;
}
function __ZN7KmsNode21postDumbBufferDestroyEv(){
	var tmp0=null;
	tmp0={type:74};
	postMessage(tmp0);
}
function __ZN7KmsNode21postDumbBufferScanoutEjjj(Larg0,Larg1,Larg2){
	var tmp0=null;
	tmp0={type:72,addr:Larg0,width:Larg1,height:Larg2};
	postMessage(tmp0);
}
function __ZN7KmsNode20postDumbBufferUpdateEv(){
	var tmp0=null;
	tmp0={type:75};
	postMessage(tmp0);
}
function __ZL16allocateGraphicsv(){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null;
	tmp3=__ZZL16allocateGraphicsvEN3$_08__invokeEPN6client11ImageBitmapE;
	tmp0=[null];
	tmp0[0]=tmp3;
	tmp3=__ZN11IdAllocatorI10Graphics3DE8allocateIJRPN6client13EventListenerEEEEPS0_DpOT_(tmp0,0);
	tmp1=oSlot;
	if(tmp3!==nullArray||tmp1!==0){
		tmp2=__ZN10Graphics3D9allocatorE$p0;
		return ((__imul(tmp1,24))-(__imul(0,24))|0)/24|0;
	}
	return  -1|0;
}
function __ZZL16allocateGraphicsvEN3$_08__invokeEPN6client11ImageBitmapE(Larg0){
	var tmp0=null;
	tmp0={type:91,arg1:Larg0};
	postMessage(tmp0,new Array(Larg0));
}
function __ZN11IdAllocatorI10Graphics3DE8allocateIJRPN6client13EventListenerEEEEPS0_DpOT_(Larg0,Marg0){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=0;
	tmp1=__ZN10Graphics3D9allocatorE$p2|0;
	a:{
		b:{
			if((tmp1|0)>1){
				tmp2=__ZN10Graphics3D9allocatorE$p1;
				tmp3=1;
				while(1){
					if((tmp2[tmp3]&255)!==0){
						tmp3=tmp3+1|0;
						if((tmp3|0)===(tmp1|0))break b;
						continue;
					}
					break;
				}
			}else{
				tmp3=1;
			}
			if((tmp3|0)!==(tmp1|0)){
				tmp1=tmp3;
				break a;
			}
		}
		tmp3=tmp1<<1;
		__ZN10Graphics3D9allocatorE$p2=tmp3;
		tmp2=__ZN10Graphics3D9allocatorE$p0;
		if(tmp2!==nullArray||0!==0)tmp2=resizeArray_class$p_Z10Graphics3D(tmp2,tmp2.length,tmp3/24|0);
		else tmp2=createArray_class$p_Z10Graphics3D(tmp3/24|0);
		__ZN10Graphics3D9allocatorE$p0=tmp2;
		tmp3=__ZN10Graphics3D9allocatorE$p2|0;
		tmp2=__ZN10Graphics3D9allocatorE$p1;
		if(tmp2!==nullArray||0!==0)tmp2=(function(){var __old__=tmp2;
			var __ret__=new Uint8Array(tmp3/1|0);
			__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
			return __ret__;})();
		else tmp2=new Uint8Array(tmp3/1|0);
		__ZN10Graphics3D9allocatorE$p1=tmp2;
	}
	tmp2=__ZN10Graphics3D9allocatorE$p0;
	tmp2[tmp1].a0=Larg0[Marg0];
	tmp2[tmp1].a1=null;
	tmp2[tmp1].a2=null;
	tmp2[tmp1].a3=new Array();
	tmp2[tmp1].a4=null;
	tmp2[tmp1].i5=0;
	tmp0=__ZN10Graphics3D9allocatorE$p1;
	tmp0[tmp1]=1;
	oSlot=0+tmp1|0;
	return tmp2;
}
function __ZN10Graphics3D10runCommandEjP13Graphics3DMsgRSt6vectorIhSaIhEES5_(Larg0,Larg1,Larg2,Larg3){
	var LsavedStack=null,tmp1=null,tmp2=null,tmp3=0,tmp4=null,tmp5=0,tmp6=null,tmp7=null,tmp8=null,tmp9=null,tmp10=null,tmp11=null,tmp12=-0.,Lxtraiter=0,L$punr=0,Lunroll_iter=0,Lniter=0,tmp17=0,tmp18=0;
	LsavedStack=___getStackPtr();
	tmp4=-16+LsavedStack|0;
	___setStackPtr(tmp4);
	tmp5=__ZN10Graphics3D9allocatorE$p2|0;
	if((Larg0|0)>-1){
		if((tmp5|0)>(Larg0|0)){
			tmp6=__ZN10Graphics3D9allocatorE$p1;
			if((tmp6[Larg0]&255)!==0){
				tmp6=__ZN10Graphics3D9allocatorE$p0;
				tmp6=tmp6[Larg0];
			}else{
				tmp6=null;
			}
		}else{
			tmp6=null;
		}
	}else{
		tmp6=null;
	}
	tmp7=tmp6.a2;
	tmp5=HEAP32[Larg1>>2]|0;
	tmp8=2146668|0;
	tmp9=2145836|0;
	tmp10=2145544|0;
	tmp11=2145588|0;
	tmp1=2145596|0;
	tmp2=2145652|0;
	switch(tmp5|0){
		case 2:
		tmp7=new OffscreenCanvas((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)));
		tmp6.a1=tmp7;
		tmp8={preserveDrawingBuffer:false,alpha:false,antialias:false};
		tmp9="webgl2";
		tmp6.a2=tmp7.getContext(tmp9,tmp8);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 5:
		tmp4="OffscreenCanvas";
		tmp6=self[tmp4];
		tmp5=__ZL7objTypePN6client6ObjectE(tmp6)|0;
		___setStackPtr(LsavedStack);
		return ((tmp5|0)!==4?1:0)|0;
		case 1:
		if((__ZN10Graphics3D7boundIdE|0)===(Larg0|0)){
			tmp7=tmp6.a1.transferToImageBitmap();
			tmp6.a0(tmp7);
			___setStackPtr(LsavedStack);
			return 0|0;
		}
		___setStackPtr(LsavedStack);
		return 0|0;
		case 4:
		tmp6.a1.width=(+(HEAP32[4+Larg1>>2]>>>0));
		tmp6.a1.height=(+(HEAP32[8+Larg1>>2]>>>0));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 0:
		__ZN10Graphics3D7boundIdE=Larg0;
		___setStackPtr(LsavedStack);
		return 0|0;
		case 16:
		tmp5=__ZN10Graphics3D9setMappedEPN6client6ObjectE(tmp6,tmp7.createShader((+(HEAP32[4+Larg1>>2]>>>0))))|0;
		___setStackPtr(LsavedStack);
		return tmp5|0;
		case 17:
		tmp8=__ZL5getAsIN6client6StringEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		tmp7.shaderSource(__ZN10Graphics3D9getMappedIN6client11WebGLShaderEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0),tmp8);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 18:
		tmp7.compileShader(__ZN10Graphics3D9getMappedIN6client11WebGLShaderEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 19:
		tmp6=__ZN10Graphics3D9getMappedIN6client11WebGLShaderEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp12=+tmp7.getShaderParameter(tmp6,(+(HEAP32[8+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return ~~tmp12|0;
		case 74:
		tmp7.deleteShader(__ZN10Graphics3D9getMappedIN6client11WebGLShaderEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0));
		tmp5=HEAP32[4+Larg1>>2]|0;
		tmp4=tmp6.a3;
		tmp4[0+(tmp5-1|0)|0]=null;
		___setStackPtr(LsavedStack);
		return 0|0;
		case 20:
		tmp5=__ZN10Graphics3D9setMappedEPN6client6ObjectE(tmp6,tmp7.createProgram())|0;
		___setStackPtr(LsavedStack);
		return tmp5|0;
		case 21:
		tmp8=__ZN10Graphics3D9getMappedIN6client11WebGLShaderEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp7.attachShader(__ZN10Graphics3D9getMappedIN6client12WebGLProgramEEEPT_j(tmp6,HEAP32[8+Larg1>>2]|0),tmp8);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 22:
		tmp8=__ZL5getAsIN6client6StringEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		tmp6=__ZN10Graphics3D9getMappedIN6client12WebGLProgramEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp7.bindAttribLocation(tmp6,(+(HEAP32[8+Larg1>>2]>>>0)),tmp8);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 23:
		tmp7.linkProgram(__ZN10Graphics3D9getMappedIN6client12WebGLProgramEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 24:
		tmp6=__ZN10Graphics3D9getMappedIN6client12WebGLProgramEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp12=+tmp7.getProgramParameter(tmp6,(+(HEAP32[8+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return ~~tmp12|0;
		case 25:
		tmp5=HEAP32[4+Larg1>>2]|0;
		if((tmp5|0)!==0)tmp6=__ZN10Graphics3D9getMappedIN6client12WebGLProgramEEEPT_j(tmp6,tmp5);
		else{
			tmp6=null;
		}
		tmp7.useProgram(tmp6);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 26:
		tmp8=__ZL5getAsIN6client6StringEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		tmp7=tmp7.getUniformLocation(__ZN10Graphics3D9getMappedIN6client12WebGLProgramEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0),tmp8);
		if(tmp7!==null){
			tmp5=__ZN10Graphics3D9setMappedEPN6client6ObjectE(tmp6,tmp7)|0;
			___setStackPtr(LsavedStack);
			return tmp5|0;
		}
		___setStackPtr(LsavedStack);
		return  -1|0;
		case 27:
		tmp6=__ZN10Graphics3D9getMappedIN6client20WebGLUniformLocationEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp7.uniform1i(tmp6,(+(HEAP32[8+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 55:
		tmp6=__ZN10Graphics3D9getMappedIN6client20WebGLUniformLocationEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp7.uniform2f(tmp6,+HEAPF32[8+Larg1>>2],+HEAPF32[12+Larg1>>2]);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 54:
		tmp6=__ZN10Graphics3D9getMappedIN6client20WebGLUniformLocationEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp7.uniform1f(tmp6,+HEAPF32[8+Larg1>>2]);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 29:
		tmp6=tmp7.getParameter((+(HEAP32[4+Larg1>>2]>>>0)));
		tmp5=__ZL7objTypePN6client6ObjectE(tmp6)|0;
		if((tmp5|0)===2){
			__ZNSt6vectorIhSaIhEE6resizeEj(Larg3|0,8);
			tmp7=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg3|0);
			tmp6=tmp6;
			if(((tmp6.length)|0)!==2)___assert_fail(2146644|0,tmp8,246,tmp9);
			;
			tmp7[0]=tmp6[0]|0;
			tmp7[0+1|0]=tmp6[0+1|0]|0;
		}else{
			if(tmp5>>>0>=2){
				console.log('unexpected parameter tmp6');
				___assert_fail(tmp10,tmp8,254,tmp9);
				;
			}
			__ZNSt6vectorIhSaIhEE6resizeEj(Larg3|0,4);
			tmp7=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg3|0);
			tmp7[0]=~~ +tmp6;
		}
		tmp5=__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev(Larg3|0)|0;
		___setStackPtr(LsavedStack);
		return tmp5|0;
		case 60:
		tmp7.activeTexture((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 65:
		tmp7.renderbufferStorage((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)),(+(HEAP32[16+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 66:
		tmp7.scissor((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)),(+(HEAP32[16+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 30:
		tmp5=HEAP32[4+Larg1>>2]<<2;
		__ZNSt6vectorIhSaIhEE6resizeEj(Larg3|0,tmp5);
		tmp8=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg3|0);
		if((HEAP32[4+Larg1>>2]|0)===0){
			___setStackPtr(LsavedStack);
			return tmp5|0;
		}
		Lxtraiter=0;
		while(1){
			tmp9=tmp7.createTexture();
			L$punr=tmp6.a3.indexOf(null);
			tmp10=tmp6.a3;
			if((L$punr|0)===-1){
				+tmp10.push(tmp9);
				L$punr=tmp6.a3.length;
			}else{
				tmp10[0+L$punr|0]=tmp9;
				L$punr=L$punr+1|0;
			}
			tmp8[0+Lxtraiter|0]=L$punr;
			Lxtraiter=Lxtraiter+1|0;
			if(Lxtraiter>>>0<HEAP32[4+Larg1>>2]>>>0)continue;
			break;
		}
		___setStackPtr(LsavedStack);
		return tmp5|0;
		case 33:
		tmp5=HEAP32[4+Larg1>>2]<<2;
		__ZNSt6vectorIhSaIhEE6resizeEj(Larg3|0,tmp5);
		tmp8=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg3|0);
		if((HEAP32[4+Larg1>>2]|0)===0){
			___setStackPtr(LsavedStack);
			return tmp5|0;
		}
		Lxtraiter=0;
		while(1){
			tmp9=tmp7.createBuffer();
			L$punr=tmp6.a3.indexOf(null);
			tmp10=tmp6.a3;
			if((L$punr|0)===-1){
				+tmp10.push(tmp9);
				L$punr=tmp6.a3.length;
			}else{
				tmp10[0+L$punr|0]=tmp9;
				L$punr=L$punr+1|0;
			}
			tmp8[0+Lxtraiter|0]=L$punr;
			Lxtraiter=Lxtraiter+1|0;
			if(Lxtraiter>>>0<HEAP32[4+Larg1>>2]>>>0)continue;
			break;
		}
		___setStackPtr(LsavedStack);
		return tmp5|0;
		case 34:
		tmp5=HEAP32[4+Larg1>>2]<<2;
		__ZNSt6vectorIhSaIhEE6resizeEj(Larg3|0,tmp5);
		tmp8=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg3|0);
		if((HEAP32[4+Larg1>>2]|0)===0){
			___setStackPtr(LsavedStack);
			return tmp5|0;
		}
		Lxtraiter=0;
		while(1){
			tmp9=tmp7.createFramebuffer();
			L$punr=tmp6.a3.indexOf(null);
			tmp10=tmp6.a3;
			if((L$punr|0)===-1){
				+tmp10.push(tmp9);
				L$punr=tmp6.a3.length;
			}else{
				tmp10[0+L$punr|0]=tmp9;
				L$punr=L$punr+1|0;
			}
			tmp8[0+Lxtraiter|0]=L$punr;
			Lxtraiter=Lxtraiter+1|0;
			if(Lxtraiter>>>0<HEAP32[4+Larg1>>2]>>>0)continue;
			break;
		}
		___setStackPtr(LsavedStack);
		return tmp5|0;
		case 35:
		tmp5=HEAP32[4+Larg1>>2]<<2;
		__ZNSt6vectorIhSaIhEE6resizeEj(Larg3|0,tmp5);
		tmp8=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg3|0);
		if((HEAP32[4+Larg1>>2]|0)===0){
			___setStackPtr(LsavedStack);
			return tmp5|0;
		}
		Lxtraiter=0;
		while(1){
			tmp9=tmp7.createRenderbuffer();
			L$punr=tmp6.a3.indexOf(null);
			tmp10=tmp6.a3;
			if((L$punr|0)===-1){
				+tmp10.push(tmp9);
				L$punr=tmp6.a3.length;
			}else{
				tmp10[0+L$punr|0]=tmp9;
				L$punr=L$punr+1|0;
			}
			tmp8[0+Lxtraiter|0]=L$punr;
			Lxtraiter=Lxtraiter+1|0;
			if(Lxtraiter>>>0<HEAP32[4+Larg1>>2]>>>0)continue;
			break;
		}
		___setStackPtr(LsavedStack);
		return tmp5|0;
		case 38:
		tmp12=+tmp7.checkFramebufferStatus((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return ~~tmp12|0;
		case 37:
		tmp6=__ZN10Graphics3D9getMappedIN6client17WebGLRenderbufferEEEPT_j(tmp6,HEAP32[16+Larg1>>2]|0);
		tmp7.framebufferRenderbuffer((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)),tmp6);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 36:
		tmp5=HEAP32[16+Larg1>>2]|0;
		if((tmp5|0)!==0){
			tmp6=tmp6.a3;
			tmp6=tmp6[0+(tmp5-1|0)|0];
			tmp6=tmp6;
		}else{
			tmp6=null;
		}
		tmp7.framebufferTexture2D((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)),tmp6,(+(HEAP32[20+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 31:
		tmp5=HEAP32[8+Larg1>>2]|0;
		a:{
			if((tmp5|0)!==0){
				tmp10=tmp6.a3;
				tmp10=tmp10[0+(tmp5-1|0)|0];
				if(tmp10!==null){
					tmp5=HEAP32[4+Larg1>>2]|0;
					tmp10=tmp10;
					break a;
				}
			}
			tmp10=tmp6.a4;
			if(tmp10===null){
				tmp6.i5=HEAP32[4+Larg1>>2]|0;
				tmp10=tmp7.createTexture();
				tmp6.a4=tmp10;
			}
			tmp5=tmp6.i5|0;
			if((tmp5|0)!==(HEAP32[4+Larg1>>2]|0))___assert_fail(2145552|0,tmp8,366,tmp9);
			;
		}
		tmp7.bindTexture((+(tmp5>>>0)),tmp10);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 39:
		tmp5=HEAP32[8+Larg1>>2]|0;
		if((tmp5|0)!==0){
			tmp6=tmp6.a3;
			tmp6=tmp6[0+(tmp5-1|0)|0];
			tmp6=tmp6;
		}else{
			tmp6=null;
		}
		tmp7.bindBuffer((+(HEAP32[4+Larg1>>2]>>>0)),tmp6);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 40:
		tmp6=__ZL5getAsIN6client10Uint8ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		tmp12=(+(HEAP32[4+Larg1>>2]>>>0));
		if(tmp6!==null){
			tmp7.bufferData(tmp12,tmp6,(+(HEAP32[8+Larg1>>2]>>>0)));
			___setStackPtr(LsavedStack);
			return 0|0;
		}
		tmp7.bufferData(tmp12,(+(HEAP32[12+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 41:
		tmp6=__ZL5getAsIN6client10Uint8ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		if(tmp6!==null){
			tmp7.bufferSubData((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),tmp6);
			___setStackPtr(LsavedStack);
			return 0|0;
		}
		console.log("null subdata");
		tmp7.bufferSubData((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),null);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 63:
		tmp5=HEAP32[8+Larg1>>2]|0;
		if((tmp5|0)!==0){
			tmp6=tmp6.a3;
			tmp6=tmp6[0+(tmp5-1|0)|0];
			tmp6=tmp6;
		}else{
			tmp6=null;
		}
		tmp7.bindFramebuffer((+(HEAP32[4+Larg1>>2]>>>0)),tmp6);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 64:
		tmp5=HEAP32[8+Larg1>>2]|0;
		if((tmp5|0)!==0)tmp6=__ZN10Graphics3D9getMappedIN6client17WebGLRenderbufferEEEPT_j(tmp6,tmp5);
		else{
			tmp6=null;
		}
		tmp7.bindRenderbuffer((+(HEAP32[4+Larg1>>2]>>>0)),tmp6);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 71:
		tmp7.texParameteri((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 42:
		tmp7.vertexAttribPointer((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)),!!((HEAP32[16+Larg1>>2]|0)!==0?1:0),(+(HEAP32[20+Larg1>>2]>>>0)),(+(HEAP32[24+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 43:
		tmp7.enableVertexAttribArray((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 44:
		tmp7.blendFunc((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 32:
		tmp6=__ZL5getAsIN6client10Uint8ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		if(tmp6!==null){
			tmp5=HEAP32[28+Larg1>>2]|0;
			if( +tmp7.UNSIGNED_BYTE===(+(tmp5>>>0))){
				tmp6=tmp6;
			}else{
				tmp5=HEAP32[28+Larg1>>2]|0;
				if(!( +tmp7.UNSIGNED_SHORT_4_4_4_4===(+(tmp5>>>0))))___assert_fail(tmp10,tmp8,456,tmp9);
				;
				tmp11=tmp6.buffer;
				tmp12=+tmp6.byteOffset;
				tmp6=new Uint16Array(tmp11,tmp12,(+(((tmp6.length)|0)/2|0)));
				tmp6=tmp6;
			}
		}else{
			tmp6=null;
		}
		tmp7.texImage2D((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]|0)),(+(HEAP32[12+Larg1>>2]|0)),(+(HEAP32[16+Larg1>>2]|0)),(+(HEAP32[20+Larg1>>2]|0)),0,(+(HEAP32[24+Larg1>>2]>>>0)),(+(HEAP32[28+Larg1>>2]>>>0)),tmp6);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 45:
		tmp6=__ZL5getAsIN6client10Uint8ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		tmp7.texSubImage2D((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]|0)),(+(HEAP32[12+Larg1>>2]>>>0)),(+(HEAP32[16+Larg1>>2]>>>0)),(+(HEAP32[20+Larg1>>2]|0)),(+(HEAP32[24+Larg1>>2]|0)),(+(HEAP32[28+Larg1>>2]>>>0)),(+(HEAP32[32+Larg1>>2]>>>0)),tmp6);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 70:
		tmp8=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		if(((tmp8.length)|0)===0){
			___setStackPtr(LsavedStack);
			return 0|0;
		}
		tmp5=0;
		while(1){
			Lxtraiter=tmp8[0+tmp5|0]|0;
			if((Lxtraiter|0)!==0){
				tmp9=tmp6.a3;
				tmp7.deleteTexture(tmp9[0+(Lxtraiter-1|0)|0]);
				Lxtraiter=tmp8[0+tmp5|0]|0;
				tmp9=tmp6.a3;
				tmp9[0+(Lxtraiter-1|0)|0]=null;
				tmp5=tmp5+1|0;
				if(tmp5>>>0<(tmp8.length)>>>0)continue;
				___setStackPtr(LsavedStack);
				return 0|0;
			}
			break;
		}
		___assert_fail(tmp11,tmp1,60,tmp2);
		;
		case 67:
		tmp8=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		if(((tmp8.length)|0)===0){
			___setStackPtr(LsavedStack);
			return 0|0;
		}
		tmp5=0;
		while(1){
			Lxtraiter=tmp8[0+tmp5|0]|0;
			if((Lxtraiter|0)!==0){
				tmp9=tmp6.a3;
				tmp7.deleteBuffer(tmp9[0+(Lxtraiter-1|0)|0]);
				Lxtraiter=tmp8[0+tmp5|0]|0;
				tmp9=tmp6.a3;
				tmp9[0+(Lxtraiter-1|0)|0]=null;
				tmp5=tmp5+1|0;
				if(tmp5>>>0<(tmp8.length)>>>0)continue;
				___setStackPtr(LsavedStack);
				return 0|0;
			}
			break;
		}
		___assert_fail(tmp11,tmp1,60,tmp2);
		;
		case 69:
		tmp8=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		if(((tmp8.length)|0)===0){
			___setStackPtr(LsavedStack);
			return 0|0;
		}
		tmp5=0;
		while(1){
			Lxtraiter=tmp8[0+tmp5|0]|0;
			if((Lxtraiter|0)!==0){
				tmp9=tmp6.a3;
				tmp7.deleteRenderbuffer(tmp9[0+(Lxtraiter-1|0)|0]);
				Lxtraiter=tmp8[0+tmp5|0]|0;
				tmp9=tmp6.a3;
				tmp9[0+(Lxtraiter-1|0)|0]=null;
				tmp5=tmp5+1|0;
				if(tmp5>>>0<(tmp8.length)>>>0)continue;
				___setStackPtr(LsavedStack);
				return 0|0;
			}
			break;
		}
		___assert_fail(tmp11,tmp1,60,tmp2);
		;
		case 68:
		tmp8=__ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		if(((tmp8.length)|0)===0){
			___setStackPtr(LsavedStack);
			return 0|0;
		}
		tmp5=0;
		while(1){
			Lxtraiter=tmp8[0+tmp5|0]|0;
			if((Lxtraiter|0)!==0){
				tmp9=tmp6.a3;
				tmp7.deleteFramebuffer(tmp9[0+(Lxtraiter-1|0)|0]);
				Lxtraiter=tmp8[0+tmp5|0]|0;
				tmp9=tmp6.a3;
				tmp9[0+(Lxtraiter-1|0)|0]=null;
				tmp5=tmp5+1|0;
				if(tmp5>>>0<(tmp8.length)>>>0)continue;
				___setStackPtr(LsavedStack);
				return 0|0;
			}
			break;
		}
		___assert_fail(tmp11,tmp1,60,tmp2);
		;
		case 61:
		tmp7.drawArrays((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 62:
		tmp7.drawElements((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)),(+(HEAP32[16+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 8:
		tmp7.cullFace((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 9:
		tmp7.depthFunc((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 10:
		tmp7.depthMask(!!((HEAP32[4+Larg1>>2]|0)!==0?1:0));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 12:
		tmp7.stencilFunc((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 13:
		tmp7.stencilOp((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 11:
		tmp7.stencilMask((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 14:
		tmp7.disableVertexAttribArray((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 6:
		tmp5=HEAP32[4+Larg1>>2]|0;
		if((tmp5|0)===7938)tmp6="OpenGL ES 2.0 Chromium";
		else if((tmp5|0)===7939)tmp6="";
		else{
			tmp6=tmp7.getParameter((+(tmp5>>>0)));
			tmp6=tmp6;
		}
		tmp5=tmp4|0;
		__ZNK6client6String6toUtf8Ev(tmp5,tmp6);
		Lxtraiter=HEAP32[4+tmp5>>2]|0;
		__ZNSt6vectorIhSaIhEE6resizeEj(Larg3|0,Lxtraiter);
		if((Lxtraiter|0)!==0){
			tmp4=HEAP8;
			tmp3=HEAP32[8+tmp5>>2]|0;
			if(Lxtraiter>>>0<4){
				L$punr=0;
			}else{
				Lunroll_iter=Lxtraiter& -4;
				Lniter=0;
				L$punr=0;
				while(1){
					tmp6=HEAP8;
					tmp17=HEAP32[Larg3>>2]|0;
					tmp6[tmp17+L$punr|0]=tmp4[tmp3+L$punr|0]|0;
					tmp17=L$punr+1|0;
					tmp6=HEAP8;
					tmp18=HEAP32[Larg3>>2]|0;
					tmp6[tmp18+tmp17|0]=tmp4[tmp3+tmp17|0]|0;
					tmp17=L$punr+2|0;
					tmp6=HEAP8;
					tmp18=HEAP32[Larg3>>2]|0;
					tmp6[tmp18+tmp17|0]=tmp4[tmp3+tmp17|0]|0;
					tmp17=L$punr+3|0;
					tmp6=HEAP8;
					tmp18=HEAP32[Larg3>>2]|0;
					tmp6[tmp18+tmp17|0]=tmp4[tmp3+tmp17|0]|0;
					Lniter=Lniter+4|0;
					L$punr=L$punr+4|0;
					if((Lniter|0)!==(Lunroll_iter|0))continue;
					break;
				}
			}
			Lxtraiter&=3;
			if((Lxtraiter|0)!==0){
				Lunroll_iter=0;
				while(1){
					tmp6=HEAP8;
					Lniter=HEAP32[Larg3>>2]|0;
					tmp6[Lniter+L$punr|0]=tmp4[tmp3+L$punr|0]|0;
					Lunroll_iter=Lunroll_iter+1|0;
					if((Lunroll_iter|0)!==(Lxtraiter|0)){
						L$punr=L$punr+1|0;
						continue;
					}
					break;
				}
			}
		}
		Lxtraiter=__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev(Larg3|0)|0;
		__ZNSsD2Ev(tmp5);
		___setStackPtr(LsavedStack);
		return Lxtraiter|0;
		case 73:
		tmp5=HEAP32[4+Larg1>>2]|0;
		tmp6=[null];
		tmp6[0]=HEAP32[8+Larg1>>2]|0;
		tmp6=tmp6[0];
		tmp7.pixelStorei((+(tmp5>>>0)),tmp6);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 46:
		tmp7.disable((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 52:
		tmp7.enable((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 47:
		tmp7.colorMask(!!((HEAP32[4+Larg1>>2]|0)!==0?1:0),!!((HEAP32[8+Larg1>>2]|0)!==0?1:0),!!((HEAP32[12+Larg1>>2]|0)!==0?1:0),!!((HEAP32[16+Larg1>>2]|0)!==0?1:0));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 49:
		tmp7.clearColor(+HEAPF32[4+Larg1>>2],+HEAPF32[8+Larg1>>2],+HEAPF32[12+Larg1>>2],+HEAPF32[16+Larg1>>2]);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 48:
		tmp7.clear((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 50:
		tmp7.clearDepth(+HEAPF32[4+Larg1>>2]);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 51:
		tmp7.clearStencil((+(HEAP32[4+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 53:
		tmp7.viewport((+(HEAP32[4+Larg1>>2]>>>0)),(+(HEAP32[8+Larg1>>2]>>>0)),(+(HEAP32[12+Larg1>>2]>>>0)),(+(HEAP32[16+Larg1>>2]>>>0)));
		___setStackPtr(LsavedStack);
		return 0|0;
		case 56:
		tmp6=__ZN10Graphics3D9getMappedIN6client20WebGLUniformLocationEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp7.uniform4f(tmp6,+HEAPF32[8+Larg1>>2],+HEAPF32[12+Larg1>>2],+HEAPF32[16+Larg1>>2],+HEAPF32[20+Larg1>>2]);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 57:
		if((HEAP32[8+Larg1>>2]<<4|0)===((__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev(Larg2|0)|0)|0)){
			tmp8=__ZL5getAsIN6client12Float32ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
			tmp7.uniform4fv(__ZN10Graphics3D9getMappedIN6client20WebGLUniformLocationEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0),tmp8);
			___setStackPtr(LsavedStack);
			return 0|0;
		}
		___assert_fail(2145664|0,tmp8,666,tmp9);
		;
		case 58:
		tmp8=__ZL5getAsIN6client12Float32ArrayEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		tmp6=__ZN10Graphics3D9getMappedIN6client20WebGLUniformLocationEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp7.uniformMatrix4fv(tmp6,!!((HEAP32[8+Larg1>>2]|0)!==0?1:0),tmp8);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 59:
		tmp7.vertexAttrib4f((+(HEAP32[4+Larg1>>2]>>>0)),+HEAPF32[8+Larg1>>2],+HEAPF32[12+Larg1>>2],+HEAPF32[16+Larg1>>2],+HEAPF32[20+Larg1>>2]);
		___setStackPtr(LsavedStack);
		return 0|0;
		case 15:
		tmp6=__ZN10Graphics3D9getMappedIN6client12WebGLProgramEEEPT_j(tmp6,HEAP32[4+Larg1>>2]|0);
		tmp8=__ZL5getAsIN6client6StringEEPT_RSt6vectorIhSaIhEE(Larg2|0);
		tmp12=+tmp7.getAttribLocation(tmp6,tmp8);
		___setStackPtr(LsavedStack);
		return ~~tmp12|0;
		case 28:
		tmp5=~~ +tmp7.getError();
		if((tmp5|0)!==0){
			console.warn("GLES2 ERROR:",tmp5);
			___assert_fail(tmp10,tmp8,700,tmp9);
			;
		}
		___setStackPtr(LsavedStack);
		return 0|0;
		case 72:
		tmp7.flush();
		___setStackPtr(LsavedStack);
		return 0|0;
		default:
		console.log("TODO: Offscreen ioctl ",tmp5);
		___assert_fail(tmp10,tmp8,715,tmp9);
		;
	}
}
function __ZL7objTypePN6client6ObjectE(Larg0){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=-0.;
	tmp0=(typeof Larg0);
	tmp2="number";
	tmp3=+tmp0.localeCompare(tmp2);
	if(tmp3===0)return 0|0;
	tmp2="boolean";
	tmp3=+tmp0.localeCompare(tmp2);
	if(tmp3===0)return 1|0;
	tmp2="undefined";
	tmp3=+tmp0.localeCompare(tmp2);
	if(tmp3===0)return 4|0;
	tmp2="object";
	tmp3=+tmp0.localeCompare(tmp2);
	if(tmp3===0){
		tmp1=(Larg0 instanceof Int32Array)|0;
		return ((tmp1&1)!==0?2|0:3|0)|0;
	}
	return 5|0;
}
function __ZN10Graphics3D9setMappedEPN6client6ObjectE(Larg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp0=Larg0.a3.indexOf(null);
	tmp1=Larg0.a3;
	if((tmp0|0)===-1){
		+tmp1.push(Larg1);
		return (Larg0.a3.length)|0;
	}
	tmp1[0+tmp0|0]=Larg1;
	return tmp0+1|0;
}
function __ZL5getAsIN6client6StringEEPT_RSt6vectorIhSaIhEE(Larg0){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=0,tmp4=null,tmp5=0,tmp6=0,tmp7=0;
	tmp0=HEAP8;
	tmp1=HEAP32[Larg0>>2]|0;
	tmp4=HEAP8;
	tmp5=HEAP32[4+Larg0>>2]|0;
	if(tmp0===tmp4&&tmp1===tmp5)return null;
	tmp5=__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev(Larg0|0)|0;
	tmp4=String();
	if((tmp5|0)===0)return tmp4;
	tmp6=0;
	while(1){
		tmp2=tmp0[tmp1+tmp6|0]|0;
		if((tmp2&255)!==0){
			tmp3=tmp2&255;
			if(tmp2<<24>-16777216){
				tmp7=tmp3;
			}else if((tmp2&255)<192){
				tmp7=(tmp3&63)+(tmp7<<6)|0;
			}else if((tmp2&255)<224){
				tmp7=tmp3&31;
			}else if((tmp2&255)<240){
				tmp7=tmp3&15;
			}else{
				tmp7=tmp3&7;
			}
			tmp6=tmp6+1|0;
			a:{
				if((tmp6|0)!==(tmp5|0))if((tmp0[tmp1+tmp6|0]&192)===128)break a;
				if(tmp7>>>0<65536)tmp4=tmp4.concat(String.fromCharCode(tmp7));
				else{
					tmp4=tmp4.concat(String.fromCharCode(tmp7-65536>>>10|55296));
					tmp4=tmp4.concat(String.fromCharCode(tmp7&1023|56320));
				}
			}
			if((tmp6|0)!==(tmp5|0))continue;
			return tmp4;
		}
		break;
	}
	return tmp4;
}
function __ZN10Graphics3D9getMappedIN6client11WebGLShaderEEEPT_j(Larg0,Larg1){
	var tmp0=null;
	if((Larg1|0)!==0){
		tmp0=Larg0.a3;
		return tmp0[0+(Larg1-1|0)|0];
	}
	___assert_fail(2145588|0,2145596|0,60,2145652|0);
	;
}
function __ZN10Graphics3D9getMappedIN6client12WebGLProgramEEEPT_j(Larg0,Larg1){
	var tmp0=null;
	if((Larg1|0)!==0){
		tmp0=Larg0.a3;
		return tmp0[0+(Larg1-1|0)|0];
	}
	___assert_fail(2145588|0,2145596|0,60,2145652|0);
	;
}
function __ZN10Graphics3D9getMappedIN6client20WebGLUniformLocationEEEPT_j(Larg0,Larg1){
	var tmp0=null;
	if((Larg1|0)!==0){
		tmp0=Larg0.a3;
		return tmp0[0+(Larg1-1|0)|0];
	}
	___assert_fail(2145588|0,2145596|0,60,2145652|0);
	;
}
function __ZL5getAsIN6client11Uint32ArrayEEPT_RSt6vectorIhSaIhEE(Larg0){
	var tmp0=0,tmp1=0,tmp2=-0.,tmp3=null,tmp4=null,tmp5=0;
	tmp3=HEAP8;
	tmp0=HEAP32[Larg0>>2]|0;
	tmp4=HEAP8;
	tmp5=HEAP32[4+Larg0>>2]|0;
	if(tmp3===tmp4&&tmp0===tmp5)return null;
	tmp5=__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev(Larg0|0)|0;
	tmp1=tmp0;
	tmp3=tmp3;
	tmp3=tmp3;
	a:if((tmp5|0)!==0){
		if((tmp1|0)===0)if(((tmp3.length)|0)===(tmp5|0))break a;
		tmp3=tmp3.subarray((+(tmp1>>>0)),(+(tmp1+tmp5>>>0)));
	}else if((tmp1|0)!==0)tmp3=tmp3.subarray((+(tmp1>>>0)));
	tmp4=tmp3.buffer;
	tmp2=+tmp3.byteOffset;
	tmp3=new Uint32Array(tmp4,tmp2,(+(((tmp3.length)|0)/4|0)));
	return tmp3;
}
function __ZN10Graphics3D9getMappedIN6client17WebGLRenderbufferEEEPT_j(Larg0,Larg1){
	var tmp0=null;
	if((Larg1|0)!==0){
		tmp0=Larg0.a3;
		return tmp0[0+(Larg1-1|0)|0];
	}
	___assert_fail(2145588|0,2145596|0,60,2145652|0);
	;
}
function __ZL5getAsIN6client10Uint8ArrayEEPT_RSt6vectorIhSaIhEE(Larg0){
	var tmp0=0,tmp1=null,tmp2=0,tmp3=null,tmp4=0;
	tmp3=HEAP8;
	tmp0=HEAP32[Larg0>>2]|0;
	tmp1=HEAP8;
	tmp4=HEAP32[4+Larg0>>2]|0;
	if(tmp3===tmp1&&tmp0===tmp4)return null;
	tmp4=__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev(Larg0|0)|0;
	tmp2=tmp0;
	tmp3=tmp3;
	tmp3=tmp3;
	if((tmp4|0)!==0){
		if((tmp2|0)===0)if(((tmp3.length)|0)===(tmp4|0))return tmp3;
		return tmp3.subarray((+(tmp2>>>0)),(+(tmp2+tmp4>>>0)));
	}
	if((tmp2|0)===0)return tmp3;
	return tmp3.subarray((+(tmp2>>>0)));
}
function __ZNK6client6String6toUtf8Ev(Larg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0;
	__ZNSsC2B7v160000Ev(Larg0|0);
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
					__ZNSs9push_backEc(Larg0|0,tmp2>>>6|192);
					tmp3=tmp2&63|128;
				}else if(tmp2>>>0<65536){
					__ZNSs9push_backEc(Larg0|0,tmp2>>>12|224);
					__ZNSs9push_backEc(Larg0|0,tmp2>>>6&63|128);
					tmp3=tmp2&63|128;
				}else{
					__ZNSs9push_backEc(Larg0|0,tmp2>>>18|240);
					__ZNSs9push_backEc(Larg0|0,tmp2>>>12&63|128);
					__ZNSs9push_backEc(Larg0|0,tmp2>>>6&63|128);
					tmp3=tmp2&63|128;
				}
				__ZNSs9push_backEc(Larg0|0,tmp3);
			}
			if((tmp1|0)!==(tmp0|0))continue;
			break;
		}
	}
}
function __ZL5getAsIN6client12Float32ArrayEEPT_RSt6vectorIhSaIhEE(Larg0){
	var tmp0=0,tmp1=0,tmp2=-0.,tmp3=null,tmp4=null,tmp5=0;
	tmp3=HEAP8;
	tmp0=HEAP32[Larg0>>2]|0;
	tmp4=HEAP8;
	tmp5=HEAP32[4+Larg0>>2]|0;
	if(tmp3===tmp4&&tmp0===tmp5)return null;
	tmp5=__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev(Larg0|0)|0;
	tmp1=tmp0;
	tmp3=tmp3;
	tmp3=tmp3;
	a:if((tmp5|0)!==0){
		if((tmp1|0)===0)if(((tmp3.length)|0)===(tmp5|0))break a;
		tmp3=tmp3.subarray((+(tmp1>>>0)),(+(tmp1+tmp5>>>0)));
	}else if((tmp1|0)!==0)tmp3=tmp3.subarray((+(tmp1>>>0)));
	tmp4=tmp3.buffer;
	tmp2=+tmp3.byteOffset;
	tmp3=new Float32Array(tmp4,tmp2,(+(((tmp3.length)|0)/4|0)));
	return tmp3;
}
function __ZN13IDEController12runAsyncReadEjj(Larg0,Larg1,Larg2){
	var tmp0=0,L$poptgepsqueezed=0,tmp2=null;
	__ZN13IDEController11resetBufferEj(Larg0|0,Larg2);
	tmp0=HEAP32[(__imul((HEAP8[86+Larg0>>0]&255)>>>4&1,12)|0)+48+Larg0>>2]|0;
	__ZN13IDEController16startTransactionEv(Larg0|0);
	L$poptgepsqueezed=32+Larg0|0;
	tmp2={type:11,devId:tmp0,start:Larg1,len:Larg2,ioTransaction:(L$poptgepsqueezed|0),value:(__ZNK13IOTransaction12getBufOffsetEv(L$poptgepsqueezed)|0)};
	postMessage(tmp2);
}
function __ZN13IDEController13runAsyncWriteEv(Larg0){
	var tmp0=0,tmp1=null,tmp2=0,tmp3=0,tmp4=0,L$poptgepsqueezed=0,tmp6=null,tmp7=0;
	tmp0=HEAP8[87+Larg0>>0]|0;
	tmp6=2132904|0;
	tmp1=2133084|0;
	if((tmp0&255)!==0){
		tmp7=HEAP8[86+Larg0>>0]|0;
		tmp2=tmp7&255;
		if((tmp2&64|0)!==0){
			tmp3=HEAP16[84+Larg0>>1]|0;
			tmp4=HEAP8[88+Larg0>>0]|0;
			tmp7=HEAP32[(__imul((tmp7&255)>>>4&1,12)|0)+48+Larg0>>2]|0;
			__ZN13IDEController16startTransactionEv(Larg0|0);
			L$poptgepsqueezed=32+Larg0|0;
			tmp6={type:12,devId:tmp7,start:((((tmp3&65535)<<8)+(tmp2<<24&251658240)|0)+(tmp4&255)<<9),len:((tmp0&255)<<9),ioTransaction:(L$poptgepsqueezed|0),value:(__ZNK13IOTransaction12getBufOffsetEv(L$poptgepsqueezed)|0)};
			postMessage(tmp6);
			return;
		}
		___assert_fail(2133100|0,tmp6,308,tmp1);
		;
	}
	___assert_fail(2133064|0,tmp6,306,tmp1);
	;
}
function __ZN13EventsHandler18dispatchEmptyEventE15CORE_EVENT_TYPE(){
	var tmp0=null;
	if((HEAP32[810850]&1|0)!==0){
		tmp0={type:58,eventType:0,value:null};
		postMessage(tmp0);
	}
}
function __ZN6cheerpL8date_nowEv$p1731(){
	return +Date.now();
}
function __ZN6cheerpL8date_nowEv$p1892(){
	return +Date.now();
}
function __ZN8LinuxApp14handleMmapReadEj12CORE_MESSAGES0_jjPhj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Marg5){
	var tmp0=0,tmp1=null;
	tmp1=new Array();
	tmp0=Marg5;
	+tmp1.push({bufOffset:tmp0,len:131072});
	tmp1={type:Larg1,replyType:Larg2,tid:Larg0,fd:Larg3,fileOffset:Larg4,slices:tmp1};
	postMessage(tmp1);
}
function __ZN11ChunksCache14postBlindWriteE12CORE_MESSAGEjjPhj(Larg0,Larg1,Larg2,Larg3,Marg3,Larg4){
	var tmp0=0,tmp1=null;
	tmp1=new Array();
	tmp0=Marg3;
	+tmp1.push({bufOffset:tmp0,len:Larg4});
	tmp1={type:Larg0,replyType:22,tid:0,fd:Larg1,fileOffset:Larg2,slices:tmp1};
	postMessage(tmp1);
}
function __ZN18CheerpOSFsProvider9CacheNode17postFsListRequestEjRK7InodeId(Larg0,Larg1,Larg2){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=0,tmp6=null,tmp7=null,tmp8=0,tmp9=0;
	LsavedStack=___getStackPtr();
	tmp6=-16+LsavedStack|0;
	___setStackPtr(tmp6);
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)===(Larg1|0)){
		tmp1=tmp6|0;
		__ZN10InodeCache14dirNameForNodeEPK9FileInodeP10FsProvider(tmp1,Larg0|0,HEAP32[92+Larg0>>2]|0);
		tmp6=HEAP8;
		tmp2=HEAP32[8+tmp1>>2]|0;
		tmp3=HEAP32[4+tmp1>>2]|0;
		tmp7=String();
		if((tmp3|0)!==0){
			tmp8=0;
			while(1){
				tmp4=tmp6[tmp2+tmp8|0]|0;
				if((tmp4&255)!==0){
					tmp5=tmp4&255;
					if(tmp4<<24>-16777216){
						tmp9=tmp5;
					}else if((tmp4&255)<192){
						tmp9=(tmp5&63)+(tmp9<<6)|0;
					}else if((tmp4&255)<224){
						tmp9=tmp5&31;
					}else if((tmp4&255)<240){
						tmp9=tmp5&15;
					}else{
						tmp9=tmp5&7;
					}
					tmp8=tmp8+1|0;
					a:{
						if((tmp8|0)!==(tmp3|0))if((tmp6[tmp2+tmp8|0]&192)===128)break a;
						if(tmp9>>>0<65536)tmp7=tmp7.concat(String.fromCharCode(tmp9));
						else{
							tmp7=tmp7.concat(String.fromCharCode(tmp9-65536>>>10|55296));
							tmp7=tmp7.concat(String.fromCharCode(tmp9&1023|56320));
						}
					}
					if((tmp8|0)!==(tmp3|0))continue;
				}
				break;
			}
		}
		__ZN5Inode6incRefEv(Larg0|0);
		tmp6={type:68,replyType:69,tid:Larg1,path:tmp7,devId:(HEAP32[Larg2>>2]|0),inodeId:(HEAP32[4+Larg2>>2]|0)};
		postMessage(tmp6);
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp1);
		___setStackPtr(LsavedStack);
		return;
	}
	___assert_fail(2145740|0,2116940|0,11625,2136156|0);
	;
}
function __ZN11ChunksCache20closeAndDestroyAsyncEv(Larg0){
	var tmp0=null;
	tmp0={type:23,replyType:17,fd:(HEAP32[Larg0>>2]|0),value:((Larg0|0)|0)};
	postMessage(tmp0);
}
function __ZN8LinuxApp19getProcessCtxForPidEj(Larg0){
	var tmp0=0;
	tmp0=HEAP32[829209]|0;
	if((tmp0|0)==(0|0))return 0|0;
	while(1){
		if((HEAP32[8+tmp0>>2]|0)===(Larg0|0))return tmp0|0;
		tmp0=HEAP32[92+tmp0>>2]|0;
		if((tmp0|0)!=(0|0))continue;
		break;
	}
	return 0|0;
}
function __ZZN18ExternalSocketNode12disconnectedEvEN9CheerpTmp3RunEPS_(Larg0){
	var tmp0=null,tmp1=0;
	tmp0=__ZN18ExternalSocketNode15messageChannelsE;
	tmp1=HEAP32[88+Larg0>>2]|0;
	tmp0[0+tmp1|0].port1.postMessage(null);
}
function __ZN18ExternalSocketNode18freeMessageChannelEj(Larg0){
	var tmp0=null;
	tmp0=__ZN18ExternalSocketNode15messageChannelsE;
	tmp0[0+Larg0|0].port1.postMessage(null);
	tmp0=__ZN18ExternalSocketNode15messageChannelsE;
	tmp0[0+Larg0|0].port1.onmessage=null;
	tmp0=__ZN18ExternalSocketNode15messageChannelsE;
	tmp0[0+Larg0|0]=null;
}
function __ZN8LinuxApp21runPreciseInterpreterEP7CoreCtx(Larg0){
	var tmp0=0,tmp1=0,tmp2=null;
	if(((HEAP32[811109]|0)|0)==(Larg0|0)){
		tmp0=HEAP32[(HEAP32[472+Larg0>>2]|0)>>2]|0;
		tmp1=__Z11getStackPtrv()|0;
		tmp2=[{a0:0,a1:0}];
		tmp2[0].a0=tmp0;
		tmp2[0].a1=(Larg0|0);
		tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN8LinuxApp21runPreciseInterpreterEP7CoreCtxE3$_0JEEEvPT_DpT0_,tmp2[0]);
		try{tmp2()}catch(e){if(e!='CheerpJContinue'){debugger;console.log('Unexpected exit',e.stack);}};
		__Z11setStackPtrj(tmp1);
		return;
	}
	___assert_fail(2117284|0,2116940|0,10844,2115580|0);
	;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN8LinuxApp21runPreciseInterpreterEP7CoreCtxE3$_0JEEEvPT_DpT0_(Larg0){
	__ZN8LinuxApp22preciseInterpreterImplEP12AddressSpaceP8CoreData(Larg0.a0|0,Larg0.a1|0);
	;
}
function __ZN11ConsoleNode16postConsoleWriteEPKhj(Larg0,Larg1,Marg1,Larg2){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp2=Larg1;
	tmp0=Marg1;
	tmp2=new Uint8Array(tmp2.subarray((+(tmp0>>>0)),(+(tmp0+Larg2>>>0))));
	tmp1={type:53,arg1:tmp2,arg2:(HEAP32[5272+Larg0>>2]|0)};
	postMessage(tmp1,new Array(tmp2.buffer));
}
function __ZN11ConsoleNode19postConsoleActivateEj(Larg0){
	var tmp0=null;
	tmp0={type:30,arg1:Larg0};
	postMessage(tmp0);
}
function __ZN18CheerpOSFsProvider20postCacheNodeRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEERK7InodeId12CORE_MESSAGE(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=null,tmp5=null,tmp6=0,tmp7=0;
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)===(Larg1|0)){
		tmp4=HEAP8;
		tmp0=HEAP32[8+Larg2>>2]|0;
		tmp1=HEAP32[4+Larg2>>2]|0;
		tmp5=String();
		if((tmp1|0)!==0){
			tmp6=0;
			while(1){
				tmp2=tmp4[tmp0+tmp6|0]|0;
				if((tmp2&255)!==0){
					tmp3=tmp2&255;
					if(tmp2<<24>-16777216){
						tmp7=tmp3;
					}else if((tmp2&255)<192){
						tmp7=(tmp3&63)+(tmp7<<6)|0;
					}else if((tmp2&255)<224){
						tmp7=tmp3&31;
					}else if((tmp2&255)<240){
						tmp7=tmp3&15;
					}else{
						tmp7=tmp3&7;
					}
					tmp6=tmp6+1|0;
					a:{
						if((tmp6|0)!==(tmp1|0))if((tmp4[tmp0+tmp6|0]&192)===128)break a;
						if(tmp7>>>0<65536)tmp5=tmp5.concat(String.fromCharCode(tmp7));
						else{
							tmp5=tmp5.concat(String.fromCharCode(tmp7-65536>>>10|55296));
							tmp5=tmp5.concat(String.fromCharCode(tmp7&1023|56320));
						}
					}
					if((tmp6|0)!==(tmp1|0))continue;
				}
				break;
			}
		}
		tmp4={type:18,replyType:Larg4,tid:Larg1,path:tmp5,devId:(HEAP32[36+Larg0>>2]|0),parentInodeId:(HEAP32[4+Larg3>>2]|0)};
		postMessage(tmp4);
		return;
	}
	___assert_fail(2145740|0,2116940|0,6360,2145520|0);
	;
}
function __ZN18CheerpOSFsProvider19postFsUnlinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=null,tmp5=null,tmp6=0,tmp7=0;
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)===(Larg1|0)){
		tmp4=HEAP8;
		tmp0=HEAP32[8+Larg2>>2]|0;
		tmp1=HEAP32[4+Larg2>>2]|0;
		tmp5=String();
		if((tmp1|0)!==0){
			tmp6=0;
			while(1){
				tmp2=tmp4[tmp0+tmp6|0]|0;
				if((tmp2&255)!==0){
					tmp3=tmp2&255;
					if(tmp2<<24>-16777216){
						tmp7=tmp3;
					}else if((tmp2&255)<192){
						tmp7=(tmp3&63)+(tmp7<<6)|0;
					}else if((tmp2&255)<224){
						tmp7=tmp3&31;
					}else if((tmp2&255)<240){
						tmp7=tmp3&15;
					}else{
						tmp7=tmp3&7;
					}
					tmp6=tmp6+1|0;
					a:{
						if((tmp6|0)!==(tmp1|0))if((tmp4[tmp0+tmp6|0]&192)===128)break a;
						if(tmp7>>>0<65536)tmp5=tmp5.concat(String.fromCharCode(tmp7));
						else{
							tmp5=tmp5.concat(String.fromCharCode(tmp7-65536>>>10|55296));
							tmp5=tmp5.concat(String.fromCharCode(tmp7&1023|56320));
						}
					}
					if((tmp6|0)!==(tmp1|0))continue;
				}
				break;
			}
		}
		tmp4={type:64,replyType:22,tid:Larg1,path:tmp5,devId:(HEAP32[36+Larg0>>2]|0)};
		postMessage(tmp4);
		return;
	}
	___assert_fail(2145740|0,2116940|0,6668,2145992|0);
	;
}
function __ZN18CheerpOSFsProvider19postFsRenameRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=null,tmp4=0,tmp5=0,tmp6=0,tmp7=0,tmp8=null;
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)===(Larg1|0)){
		tmp0=HEAP8;
		tmp1=HEAP32[8+Larg2>>2]|0;
		tmp2=HEAP32[4+Larg2>>2]|0;
		tmp3=String();
		if((tmp2|0)!==0){
			tmp4=0;
			while(1){
				tmp6=tmp0[tmp1+tmp4|0]|0;
				if((tmp6&255)!==0){
					tmp7=tmp6&255;
					if(tmp6<<24>-16777216){
						tmp5=tmp7;
					}else if((tmp6&255)<192){
						tmp5=(tmp7&63)+(tmp5<<6)|0;
					}else if((tmp6&255)<224){
						tmp5=tmp7&31;
					}else if((tmp6&255)<240){
						tmp5=tmp7&15;
					}else{
						tmp5=tmp7&7;
					}
					tmp4=tmp4+1|0;
					a:{
						if((tmp4|0)!==(tmp2|0))if((tmp0[tmp1+tmp4|0]&192)===128)break a;
						if(tmp5>>>0<65536)tmp3=tmp3.concat(String.fromCharCode(tmp5));
						else{
							tmp3=tmp3.concat(String.fromCharCode(tmp5-65536>>>10|55296));
							tmp3=tmp3.concat(String.fromCharCode(tmp5&1023|56320));
						}
					}
					if((tmp4|0)!==(tmp2|0))continue;
				}
				break;
			}
		}
		tmp0=HEAP8;
		tmp1=HEAP32[8+Larg3>>2]|0;
		tmp2=HEAP32[4+Larg3>>2]|0;
		tmp8=String();
		if((tmp2|0)!==0){
			tmp4=0;
			while(1){
				tmp6=tmp0[tmp1+tmp4|0]|0;
				if((tmp6&255)!==0){
					tmp7=tmp6&255;
					if(tmp6<<24>-16777216){
						tmp5=tmp7;
					}else if((tmp6&255)<192){
						tmp5=(tmp7&63)+(tmp5<<6)|0;
					}else if((tmp6&255)<224){
						tmp5=tmp7&31;
					}else if((tmp6&255)<240){
						tmp5=tmp7&15;
					}else{
						tmp5=tmp7&7;
					}
					tmp4=tmp4+1|0;
					a:{
						if((tmp4|0)!==(tmp2|0))if((tmp0[tmp1+tmp4|0]&192)===128)break a;
						if(tmp5>>>0<65536)tmp8=tmp8.concat(String.fromCharCode(tmp5));
						else{
							tmp8=tmp8.concat(String.fromCharCode(tmp5-65536>>>10|55296));
							tmp8=tmp8.concat(String.fromCharCode(tmp5&1023|56320));
						}
					}
					if((tmp4|0)!==(tmp2|0))continue;
				}
				break;
			}
		}
		tmp0={type:65,replyType:22,tid:Larg1,oldPath:tmp3,newPath:tmp8,devId:(HEAP32[36+Larg0>>2]|0)};
		postMessage(tmp0);
		return;
	}
	___assert_fail(2145740|0,2116940|0,6631,2146056|0);
	;
}
function __ZN18CheerpOSFsProvider17postFsLinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=0,tmp3=null,tmp4=0,tmp5=0,tmp6=0,tmp7=0,tmp8=null;
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)===(Larg1|0)){
		tmp0=HEAP8;
		tmp1=HEAP32[8+Larg2>>2]|0;
		tmp2=HEAP32[4+Larg2>>2]|0;
		tmp3=String();
		if((tmp2|0)!==0){
			tmp4=0;
			while(1){
				tmp6=tmp0[tmp1+tmp4|0]|0;
				if((tmp6&255)!==0){
					tmp7=tmp6&255;
					if(tmp6<<24>-16777216){
						tmp5=tmp7;
					}else if((tmp6&255)<192){
						tmp5=(tmp7&63)+(tmp5<<6)|0;
					}else if((tmp6&255)<224){
						tmp5=tmp7&31;
					}else if((tmp6&255)<240){
						tmp5=tmp7&15;
					}else{
						tmp5=tmp7&7;
					}
					tmp4=tmp4+1|0;
					a:{
						if((tmp4|0)!==(tmp2|0))if((tmp0[tmp1+tmp4|0]&192)===128)break a;
						if(tmp5>>>0<65536)tmp3=tmp3.concat(String.fromCharCode(tmp5));
						else{
							tmp3=tmp3.concat(String.fromCharCode(tmp5-65536>>>10|55296));
							tmp3=tmp3.concat(String.fromCharCode(tmp5&1023|56320));
						}
					}
					if((tmp4|0)!==(tmp2|0))continue;
				}
				break;
			}
		}
		tmp0=HEAP8;
		tmp1=HEAP32[8+Larg3>>2]|0;
		tmp2=HEAP32[4+Larg3>>2]|0;
		tmp8=String();
		if((tmp2|0)!==0){
			tmp4=0;
			while(1){
				tmp6=tmp0[tmp1+tmp4|0]|0;
				if((tmp6&255)!==0){
					tmp7=tmp6&255;
					if(tmp6<<24>-16777216){
						tmp5=tmp7;
					}else if((tmp6&255)<192){
						tmp5=(tmp7&63)+(tmp5<<6)|0;
					}else if((tmp6&255)<224){
						tmp5=tmp7&31;
					}else if((tmp6&255)<240){
						tmp5=tmp7&15;
					}else{
						tmp5=tmp7&7;
					}
					tmp4=tmp4+1|0;
					a:{
						if((tmp4|0)!==(tmp2|0))if((tmp0[tmp1+tmp4|0]&192)===128)break a;
						if(tmp5>>>0<65536)tmp8=tmp8.concat(String.fromCharCode(tmp5));
						else{
							tmp8=tmp8.concat(String.fromCharCode(tmp5-65536>>>10|55296));
							tmp8=tmp8.concat(String.fromCharCode(tmp5&1023|56320));
						}
					}
					if((tmp4|0)!==(tmp2|0))continue;
				}
				break;
			}
		}
		tmp0={type:63,replyType:62,tid:Larg1,devId:(HEAP32[36+Larg0>>2]|0),oldPath:tmp3,newPath:tmp8};
		postMessage(tmp0);
		return;
	}
	___assert_fail(2145740|0,2116940|0,6701,2146076|0);
	;
}
function __ZN18CheerpOSFsProvider20postFsSymlinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjPKcj(Larg0,Larg1,Larg2,Larg3,Marg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp6=0,tmp7=0;
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)!==(Larg0|0))___assert_fail(2145740|0,2116940|0,6760,2146096|0);
	;
	tmp2=HEAP8;
	tmp3=HEAP32[8+Larg1>>2]|0;
	tmp4=HEAP32[4+Larg1>>2]|0;
	tmp5=String();
	if((tmp4|0)!==0){
		tmp6=0;
		while(1){
			tmp0=tmp2[tmp3+tmp6|0]|0;
			if((tmp0&255)!==0){
				tmp1=tmp0&255;
				if(tmp0<<24>-16777216){
					tmp7=tmp1;
				}else if((tmp0&255)<192){
					tmp7=(tmp1&63)+(tmp7<<6)|0;
				}else if((tmp0&255)<224){
					tmp7=tmp1&31;
				}else if((tmp0&255)<240){
					tmp7=tmp1&15;
				}else{
					tmp7=tmp1&7;
				}
				tmp6=tmp6+1|0;
				a:{
					if((tmp6|0)!==(tmp4|0))if((tmp2[tmp3+tmp6|0]&192)===128)break a;
					if(tmp7>>>0<65536)tmp5=tmp5.concat(String.fromCharCode(tmp7));
					else{
						tmp5=tmp5.concat(String.fromCharCode(tmp7-65536>>>10|55296));
						tmp5=tmp5.concat(String.fromCharCode(tmp7&1023|56320));
					}
				}
				if((tmp6|0)!==(tmp4|0))continue;
			}
			break;
		}
	}
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(Larg3,Marg3);
	tmp3=HEAP32[829209]|0;
	while(1){
		tmp4=HEAP32[12+tmp3>>2]|0;
		if((tmp4|0)!=(0|0))while(1){
			if((HEAP32[436+tmp4>>2]|0)===(Larg0|0)){
				tmp3=HEAP32[472+tmp4>>2]|0;
				tmp2={type:70,replyType:71,tid:Larg0,path:tmp5,permType:Larg2,value:tmp2,devId:Larg4,uid:(HEAP32[9616+tmp3>>2]|0),gid:(HEAP32[9616+tmp3>>2]|0)};
				postMessage(tmp2);
				return;
			}
			tmp4=HEAP32[488+tmp4>>2]|0;
			if((tmp4|0)!=(0|0))continue;
			break;
		}
		tmp3=HEAP32[92+tmp3>>2]|0;
		continue;
	}
}
function __ZN18CheerpOSFsProvider19postFsSocketRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp6=0,tmp7=0;
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)!==(Larg0|0))___assert_fail(2145740|0,2116940|0,6734,2146132|0);
	;
	tmp2=HEAP8;
	tmp3=HEAP32[8+Larg1>>2]|0;
	tmp4=HEAP32[4+Larg1>>2]|0;
	tmp5=String();
	if((tmp4|0)!==0){
		tmp6=0;
		while(1){
			tmp0=tmp2[tmp3+tmp6|0]|0;
			if((tmp0&255)!==0){
				tmp1=tmp0&255;
				if(tmp0<<24>-16777216){
					tmp7=tmp1;
				}else if((tmp0&255)<192){
					tmp7=(tmp1&63)+(tmp7<<6)|0;
				}else if((tmp0&255)<224){
					tmp7=tmp1&31;
				}else if((tmp0&255)<240){
					tmp7=tmp1&15;
				}else{
					tmp7=tmp1&7;
				}
				tmp6=tmp6+1|0;
				a:{
					if((tmp6|0)!==(tmp4|0))if((tmp2[tmp3+tmp6|0]&192)===128)break a;
					if(tmp7>>>0<65536)tmp5=tmp5.concat(String.fromCharCode(tmp7));
					else{
						tmp5=tmp5.concat(String.fromCharCode(tmp7-65536>>>10|55296));
						tmp5=tmp5.concat(String.fromCharCode(tmp7&1023|56320));
					}
				}
				if((tmp6|0)!==(tmp4|0))continue;
			}
			break;
		}
	}
	tmp2=new Number((+(Larg3>>>0)));
	tmp3=HEAP32[829209]|0;
	while(1){
		tmp4=HEAP32[12+tmp3>>2]|0;
		if((tmp4|0)!=(0|0))while(1){
			if((HEAP32[436+tmp4>>2]|0)===(Larg0|0)){
				tmp3=HEAP32[472+tmp4>>2]|0;
				tmp2={type:70,replyType:71,tid:Larg0,path:tmp5,permType:Larg2,value:tmp2,devId:Larg4,uid:(HEAP32[9616+tmp3>>2]|0),gid:(HEAP32[9616+tmp3>>2]|0)};
				postMessage(tmp2);
				return;
			}
			tmp4=HEAP32[488+tmp4>>2]|0;
			if((tmp4|0)!=(0|0))continue;
			break;
		}
		tmp3=HEAP32[92+tmp3>>2]|0;
		continue;
	}
}
function __ZN18CheerpOSFsProvider18postFsMkdirRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=0,tmp1=0,tmp2=0,tmp3=0,tmp4=null,tmp5=null,tmp6=0,tmp7=0;
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)===(Larg1|0)){
		tmp4=HEAP8;
		tmp0=HEAP32[8+Larg2>>2]|0;
		tmp1=HEAP32[4+Larg2>>2]|0;
		tmp5=String();
		if((tmp1|0)!==0){
			tmp6=0;
			while(1){
				tmp2=tmp4[tmp0+tmp6|0]|0;
				if((tmp2&255)!==0){
					tmp3=tmp2&255;
					if(tmp2<<24>-16777216){
						tmp7=tmp3;
					}else if((tmp2&255)<192){
						tmp7=(tmp3&63)+(tmp7<<6)|0;
					}else if((tmp2&255)<224){
						tmp7=tmp3&31;
					}else if((tmp2&255)<240){
						tmp7=tmp3&15;
					}else{
						tmp7=tmp3&7;
					}
					tmp6=tmp6+1|0;
					a:{
						if((tmp6|0)!==(tmp1|0))if((tmp4[tmp0+tmp6|0]&192)===128)break a;
						if(tmp7>>>0<65536)tmp5=tmp5.concat(String.fromCharCode(tmp7));
						else{
							tmp5=tmp5.concat(String.fromCharCode(tmp7-65536>>>10|55296));
							tmp5=tmp5.concat(String.fromCharCode(tmp7&1023|56320));
						}
					}
					if((tmp6|0)!==(tmp1|0))continue;
				}
				break;
			}
		}
		tmp4={type:66,replyType:62,tid:Larg1,path:tmp5,permType:Larg3,devId:(HEAP32[36+Larg0>>2]|0),uid:Larg4,gid:Larg5};
		postMessage(tmp4);
		return;
	}
	___assert_fail(2145740|0,2116940|0,6710,2144456|0);
	;
}
function __ZNK18CheerpOSFsProvider19postFsFChmodRequestEjj(Larg0,Larg1){
	var tmp0=null;
	tmp0={type:61,replyType:22,tid:0,fd:Larg0,permType:Larg1};
	postMessage(tmp0);
}
function __ZN18CheerpOSFsProvider17postFsOpenRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=0,tmp4=0,tmp5=null,tmp6=0,tmp7=0;
	if((HEAP32[436+(HEAP32[811109]|0)>>2]|0)!==(Larg0|0))___assert_fail(2145740|0,2116940|0,6192,2145772|0);
	;
	tmp2=HEAP8;
	tmp3=HEAP32[8+Larg1>>2]|0;
	tmp4=HEAP32[4+Larg1>>2]|0;
	tmp5=String();
	if((tmp4|0)!==0){
		tmp6=0;
		while(1){
			tmp0=tmp2[tmp3+tmp6|0]|0;
			if((tmp0&255)!==0){
				tmp1=tmp0&255;
				if(tmp0<<24>-16777216){
					tmp7=tmp1;
				}else if((tmp0&255)<192){
					tmp7=(tmp1&63)+(tmp7<<6)|0;
				}else if((tmp0&255)<224){
					tmp7=tmp1&31;
				}else if((tmp0&255)<240){
					tmp7=tmp1&15;
				}else{
					tmp7=tmp1&7;
				}
				tmp6=tmp6+1|0;
				a:{
					if((tmp6|0)!==(tmp4|0))if((tmp2[tmp3+tmp6|0]&192)===128)break a;
					if(tmp7>>>0<65536)tmp5=tmp5.concat(String.fromCharCode(tmp7));
					else{
						tmp5=tmp5.concat(String.fromCharCode(tmp7-65536>>>10|55296));
						tmp5=tmp5.concat(String.fromCharCode(tmp7&1023|56320));
					}
				}
				if((tmp6|0)!==(tmp4|0))continue;
			}
			break;
		}
	}
	tmp3=HEAP32[829209]|0;
	while(1){
		tmp4=HEAP32[12+tmp3>>2]|0;
		if((tmp4|0)!=(0|0))while(1){
			if((HEAP32[436+tmp4>>2]|0)===(Larg0|0)){
				tmp3=HEAP32[472+tmp4>>2]|0;
				tmp2={type:20,replyType:21,tid:Larg0,path:tmp5,flags:Larg2,permType:Larg3,devId:Larg4,uid:(HEAP32[9616+tmp3>>2]|0),gid:(HEAP32[9628+tmp3>>2]|0)};
				postMessage(tmp2);
				return;
			}
			tmp4=HEAP32[488+tmp4>>2]|0;
			if((tmp4|0)!=(0|0))continue;
			break;
		}
		tmp3=HEAP32[92+tmp3>>2]|0;
		continue;
	}
}
function __ZN8LinuxApp35reducePriorityAndRescheduleIfNeededEP8CoreData(Larg0){
	var tmp0=0;
	tmp0=HEAP32[811109]|0;
	if((tmp0|0)==(Larg0|0)){
		if((HEAP32[500+tmp0>>2]|0)!==0){
			HEAP32[500+tmp0>>2]=0;
			__ZN11CoreManager12exitAndThrowEP8CoreDataNS_11EXIT_REASONE(Larg0|0);
			;
		}
		return;
	}
	___assert_fail(2130424|0,2116940|0,268,2130452|0);
	;
}
function __ZL9doUdpBindP14SocketNodeBase(Larg0){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp1=HEAP32[472+(HEAP32[811109]|0)>>2]|0;
	tmp1=__ZN18ExternalSocketNode3getI5DGRAMEEPS_bjjj(HEAP32[9616+tmp1>>2]|0,HEAP32[9628+tmp1>>2]|0,HEAP32[8+tmp1>>2]|0)|0;
	__ZN14SocketNodeBase7setPeerEPS_(tmp1|0,Larg0|0);
	__ZN14SocketNodeBase7setPeerEPS_(Larg0|0,tmp1|0);
	tmp2=__ZN18ExternalSocketNode15messageChannelsE;
	tmp1=HEAP32[88+tmp1>>2]|0;
	tmp2=tmp2[0+tmp1|0].port2;
	tmp0={type:90,localPort:(HEAP32[64+Larg0>>2]|0), arg1: tmp2};
	postMessage(tmp0,new Array(tmp2));
}
function __ZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEv(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=new MessageChannel();
	tmp1=tmp0.port1;
	tmp2=[{a0:0,a1:null}];
	tmp2[0].a0=(Larg0|0);
	tmp2[0].a1=tmp0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEvE3$_0JPN6client12MessageEventIPNS7_6ObjectEEEEEEvPT_DpT0_,tmp2[0]);
	tmp1.onmessage=tmp2;
	tmp3=__ZN18ExternalSocketNode15messageChannelsE.indexOf(null);
	tmp1=__ZN18ExternalSocketNode15messageChannelsE;
	if((tmp3|0)<0){
		tmp3=tmp1.length;
		+__ZN18ExternalSocketNode15messageChannelsE.push(tmp0);
		return tmp3|0;
	}
	tmp1[0+tmp3|0]=tmp0;
	return tmp3|0;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEvE3$_0JPN6client12MessageEventIPNS7_6ObjectEEEEEEvPT_DpT0_(Larg0,Larg1){
	__ZZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEvENK3$_0clEPN6client12MessageEventIPNS3_6ObjectEEE(Larg0.a0|0,Larg1);
}
function __ZZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEvENK3$_0clEPN6client12MessageEventIPNS3_6ObjectEEE(Larg0,Larg1){
	var LsavedStack=null,tmp1=0,tmp2=null,Lxtraiter=0,tmp4=null,tmp5=null,tmp6=null,tmp7=0,tmp8=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,Lprol$piter=0;
	LsavedStack=___getStackPtr();
	tmp4=-144+LsavedStack|0;
	___setStackPtr(tmp4);
	tmp5=Larg1.data;
	if(tmp5!==null){
		tmp6=tmp5.data;
		tmp1=136+tmp4|0;
		__ZN12LinearBufferC2Ej(tmp1,tmp6.length);
		tmp2=HEAP8;
		tmp7=__ZN12LinearBuffer9getBufferIhEEPT_v(tmp1)|0;
		tmp8=tmp6.length;
		if((tmp8|0)!==0){
			Lxtraiter=tmp8&7;
			if((Lxtraiter|0)!==0){
				Lprol$piter=0;
				Lgeptoindexphi3=0;
				Lgeptoindexphi=0;
				while(1){
					tmp2[tmp7+Lgeptoindexphi3|0]=tmp6[0+Lgeptoindexphi|0]|0;
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
			if(tmp8>>>0>=8)while(1){
				tmp2[tmp7+Lgeptoindexphi3|0]=tmp6[0+Lgeptoindexphi|0]|0;
				tmp2[(tmp7+Lgeptoindexphi3|0)+1|0]=tmp6[(0+Lgeptoindexphi|0)+1|0]|0;
				tmp2[(tmp7+Lgeptoindexphi3|0)+2|0]=tmp6[(0+Lgeptoindexphi|0)+2|0]|0;
				tmp2[(tmp7+Lgeptoindexphi3|0)+3|0]=tmp6[(0+Lgeptoindexphi|0)+3|0]|0;
				tmp2[(tmp7+Lgeptoindexphi3|0)+4|0]=tmp6[(0+Lgeptoindexphi|0)+4|0]|0;
				tmp2[(tmp7+Lgeptoindexphi3|0)+5|0]=tmp6[(0+Lgeptoindexphi|0)+5|0]|0;
				tmp2[(tmp7+Lgeptoindexphi3|0)+6|0]=tmp6[(0+Lgeptoindexphi|0)+6|0]|0;
				tmp2[(tmp7+Lgeptoindexphi3|0)+7|0]=tmp6[(0+Lgeptoindexphi|0)+7|0]|0;
				Lgeptoindexphi3=Lgeptoindexphi3+8|0;
				if(tmp2!==tmp2||(tmp7+tmp8|0)!==(tmp7+Lgeptoindexphi3|0)){
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					continue;
				}
				break;
			}
		}
		tmp7=tmp4|0;
		tmp8=tmp5.addr;
		__ZN14SocketNodeBase12PacketSourceC2Ejj(tmp7,tmp8,tmp5.port);
		__ZZZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEvENK3$_0clEPN6client12MessageEventIPNS3_6ObjectEEEEN10SendLinear3runEP14SocketNodeBaseRK12LinearBufferRKNSA_12PacketSourceE(HEAP32[72+Larg0>>2]|0,tmp1,tmp7);
		__ZN12LinearBufferD2Ev(tmp1);
	}else{
		console.warn("TODO close socket\n");
		__ZN18ExternalSocketNode11shutdownFwdEv(Larg0|0);
	}
	tmp4=[null];
	if((HEAP8[27+2189416>>0]&255)===0){
		HEAP8[27+2189416>>0]=1;
		tmp5=__ZN12AddressSpace8selfPortE;
		tmp4[0]=0;
		tmp6=tmp4[0];
		tmp5.postMessage(tmp6);
	}
	___setStackPtr(LsavedStack);
}
function __ZZN18ExternalSocketImplI5DGRAME16postIncomingDataEPKhjRKN14SocketNodeBase12PacketSourceEEN9CheerpTmp3RunEP18ExternalSocketNodeS3_jS7_(Larg0,Larg1,Marg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null;
	tmp1=Larg1;
	tmp2=Marg1;
	tmp1=new Uint8Array(tmp1.subarray((+(tmp2>>>0)),(+(tmp2+Larg2>>>0))));
	tmp2=HEAP16[2+Larg3>>1]|0;
	tmp0={addr:(HEAP32[4+Larg3>>2]|0),port:((tmp2<<8)+((tmp2&65535)>>>8)&65535),data:tmp1};
	tmp3=__ZN18ExternalSocketNode15messageChannelsE;
	tmp2=HEAP32[88+Larg0>>2]|0;
	tmp3=tmp3[0+tmp2|0].port1;
	tmp3.postMessage(tmp0,new Array(tmp1.buffer));
}
function __ZN18ExternalSocketImplI6STREAME22initMessageChannelImplEv(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=0;
	tmp0=new MessageChannel();
	tmp1=tmp0.port1;
	tmp2=[{a0:0,a1:null}];
	tmp2[0].a0=(Larg0|0);
	tmp2[0].a1=tmp0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN18ExternalSocketImplI6STREAME22initMessageChannelImplEvE3$_0JPN6client12MessageEventIPNS7_6ObjectEEEEEEvPT_DpT0_,tmp2[0]);
	tmp1.onmessage=tmp2;
	tmp3=__ZN18ExternalSocketNode15messageChannelsE.indexOf(null);
	tmp1=__ZN18ExternalSocketNode15messageChannelsE;
	if((tmp3|0)<0){
		tmp3=tmp1.length;
		+__ZN18ExternalSocketNode15messageChannelsE.push(tmp0);
		return tmp3|0;
	}
	tmp1[0+tmp3|0]=tmp0;
	return tmp3|0;
}
function __ZZN14InetSocketNodeI6STREAME9doConnectEP7CoreCtxPK16sockaddr_storagejEN9CheerpTmp3RunEP18ExternalSocketNodejS3_(Larg0,Larg1,Larg2){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp2=__ZN18ExternalSocketNode15messageChannelsE;
	tmp0=HEAP32[88+Larg0>>2]|0;
	tmp2=tmp2[0+tmp0|0].port2;
	tmp1={type:88, tid:(HEAP32[436+Larg2>>2]|0), localPort: Larg1, port: (HEAP32[64+Larg0>>2]|0), addr: (HEAP32[68+Larg0>>2]|0), arg1: tmp2};
	postMessage(tmp1,new Array(tmp2));
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN18ExternalSocketImplI6STREAME22initMessageChannelImplEvE3$_0JPN6client12MessageEventIPNS7_6ObjectEEEEEEvPT_DpT0_(Larg0,Larg1){
	__ZZN18ExternalSocketImplI6STREAME22initMessageChannelImplEvENK3$_0clEPN6client12MessageEventIPNS3_6ObjectEEE(Larg0.a0|0,Larg1);
}
function __ZZN18ExternalSocketImplI6STREAME22initMessageChannelImplEvENK3$_0clEPN6client12MessageEventIPNS3_6ObjectEEE(Larg0,Larg1){
	var LsavedStack=null,tmp1=0,tmp2=0,Lxtraiter=0,tmp4=null,tmp5=null,tmp6=null,tmp7=0,Lgeptoindexphi=0,Lgeptoindexphi3=0,Lprol$piter=0;
	LsavedStack=___getStackPtr();
	tmp5=-8+LsavedStack|0;
	___setStackPtr(tmp5);
	tmp6=Larg1.data;
	a:{
		if(tmp6!==null){
			tmp1=tmp5|0;
			__ZN12LinearBufferC2Ej(tmp1,tmp6.length);
			tmp5=HEAP8;
			tmp7=__ZN12LinearBuffer9getBufferIhEEPT_v(tmp1)|0;
			tmp2=tmp6.length;
			if((tmp2|0)!==0){
				Lxtraiter=tmp2&7;
				if((Lxtraiter|0)!==0){
					Lprol$piter=0;
					Lgeptoindexphi3=0;
					Lgeptoindexphi=0;
					while(1){
						tmp5[tmp7+Lgeptoindexphi3|0]=tmp6[0+Lgeptoindexphi|0]|0;
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
					tmp5[tmp7+Lgeptoindexphi3|0]=tmp6[0+Lgeptoindexphi|0]|0;
					tmp5[(tmp7+Lgeptoindexphi3|0)+1|0]=tmp6[(0+Lgeptoindexphi|0)+1|0]|0;
					tmp5[(tmp7+Lgeptoindexphi3|0)+2|0]=tmp6[(0+Lgeptoindexphi|0)+2|0]|0;
					tmp5[(tmp7+Lgeptoindexphi3|0)+3|0]=tmp6[(0+Lgeptoindexphi|0)+3|0]|0;
					tmp5[(tmp7+Lgeptoindexphi3|0)+4|0]=tmp6[(0+Lgeptoindexphi|0)+4|0]|0;
					tmp5[(tmp7+Lgeptoindexphi3|0)+5|0]=tmp6[(0+Lgeptoindexphi|0)+5|0]|0;
					tmp5[(tmp7+Lgeptoindexphi3|0)+6|0]=tmp6[(0+Lgeptoindexphi|0)+6|0]|0;
					tmp5[(tmp7+Lgeptoindexphi3|0)+7|0]=tmp6[(0+Lgeptoindexphi|0)+7|0]|0;
					Lgeptoindexphi3=Lgeptoindexphi3+8|0;
					if(tmp5!==tmp5||(tmp7+tmp2|0)!==(tmp7+Lgeptoindexphi3|0)){
						Lgeptoindexphi=Lgeptoindexphi+8|0;
						continue;
					}
					break;
				}
			}
			tmp7=__ZN8LinuxApp14handleSysWriteEP14SocketNodeBaseR12LinearBuffer(Larg0|0,tmp1)|0;
			if((tmp7|0)<0){
				__ZN12LinearBufferD2Ev(tmp1);
				break a;
			}
			if((tmp7|0)!==((tmp6.length)|0))___assert_fail(2121404|0,2116940|0,12172,2121368|0);
			;
			__ZN12LinearBufferD2Ev(tmp1);
		}else __ZN18ExternalSocketNode11shutdownFwdEv(Larg0|0);
		tmp5=[null];
		if((HEAP8[27+2189416>>0]&255)===0){
			HEAP8[27+2189416>>0]=1;
			tmp6=__ZN12AddressSpace8selfPortE;
			tmp5[0]=0;
			tmp4=tmp5[0];
			tmp6.postMessage(tmp4);
		}
	}
	___setStackPtr(LsavedStack);
}
function __ZZN18ExternalSocketImplI6STREAME16postIncomingDataEPKhjEN9CheerpTmp3RunEP18ExternalSocketNodeS3_j(Larg0,Larg1,Marg1,Larg2){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp0=Larg1;
	tmp1=Marg1;
	tmp0=new Uint8Array(tmp0.subarray((+(tmp1>>>0)),(+(tmp1+Larg2>>>0))));
	tmp2=__ZN18ExternalSocketNode15messageChannelsE;
	tmp1=HEAP32[88+Larg0>>2]|0;
	tmp2=tmp2[0+tmp1|0].port1;
	tmp2.postMessage(tmp0,new Array(tmp0.buffer));
}
function __ZN8LinuxApp9getRandomEPhj(Larg0,Marg0,Larg1){
	var Lsmin_select=0,tmp1=null,Lgeptoindex=0,Lxtraiter=0,Lgeptoindexphi=0,tmp5=0,Lgeptoindexphi3=0,Lprol$piter=0;
	if((Larg1|0)!==0){
		tmp5=Larg1;
		Lgeptoindexphi=0;
		while(1){
			Lsmin_select=tmp5>>>0<65536?tmp5|0:65536|0;
			tmp1=new Uint8Array((+(Lsmin_select>>>0)));
			crypto.getRandomValues(tmp1);
			Lgeptoindex=Lgeptoindexphi+Lsmin_select|0;
			if((Lsmin_select|0)!==0){
				Lxtraiter=Lsmin_select&7;
				if((Lxtraiter|0)!==0){
					Lprol$piter=0;
					Lgeptoindexphi3=0;
					while(1){
						Larg0[Marg0+Lgeptoindexphi|0]=tmp1[0+Lgeptoindexphi3|0]|0;
						Lprol$piter=Lprol$piter+1|0;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						if((Lprol$piter|0)!==(Lxtraiter|0))continue;
						break;
					}
				}else{
					Lgeptoindexphi3=0;
				}
				if(Lsmin_select>>>0>=8)while(1){
					Larg0[Marg0+Lgeptoindexphi|0]=tmp1[0+Lgeptoindexphi3|0]|0;
					Larg0[(Marg0+Lgeptoindexphi|0)+1|0]=tmp1[(0+Lgeptoindexphi3|0)+1|0]|0;
					Larg0[(Marg0+Lgeptoindexphi|0)+2|0]=tmp1[(0+Lgeptoindexphi3|0)+2|0]|0;
					Larg0[(Marg0+Lgeptoindexphi|0)+3|0]=tmp1[(0+Lgeptoindexphi3|0)+3|0]|0;
					Larg0[(Marg0+Lgeptoindexphi|0)+4|0]=tmp1[(0+Lgeptoindexphi3|0)+4|0]|0;
					Larg0[(Marg0+Lgeptoindexphi|0)+5|0]=tmp1[(0+Lgeptoindexphi3|0)+5|0]|0;
					Larg0[(Marg0+Lgeptoindexphi|0)+6|0]=tmp1[(0+Lgeptoindexphi3|0)+6|0]|0;
					Larg0[(Marg0+Lgeptoindexphi|0)+7|0]=tmp1[(0+Lgeptoindexphi3|0)+7|0]|0;
					Lgeptoindexphi=Lgeptoindexphi+8|0;
					if(Larg0!==Larg0||(Marg0+Lgeptoindex|0)!==(Marg0+Lgeptoindexphi|0)){
						Lgeptoindexphi3=Lgeptoindexphi3+8|0;
						continue;
					}
					break;
				}
			}
			tmp5=tmp5-Lsmin_select|0;
			if((tmp5|0)!==0){
				Lgeptoindexphi=Lgeptoindex;
				continue;
			}
			break;
		}
	}
}
function __ZN8LinuxApp15performance_nowEv(){
	return +performance.now();
}
function __ZN8LinuxApp24wakeThreadAndUpdateTimerEP7CoreCtx(Larg0){
	var tmp0=-0.,tmp1=-0.,tmp2=0,tmp3=0,tmp4=0,tmp5=null,tmp6=null;
	tmp4=HEAP32[811109]|0;
	tmp5=2116940|0;
	tmp6=2127832|0;
	if((tmp4|0)!=(0|0)){
		if((HEAP32[592+Larg0>>2]|0)-1>>>0<2){
			tmp0=+HEAPF64[520+tmp4>>3];
			tmp1=+HEAPF64[274179];
			tmp4=2189416;
			tmp2=HEAP32[12+tmp4>>2]|0;
			tmp3=~~(tmp0-tmp1);
			if(tmp2>>>0<tmp3>>>0)___assert_fail(2127936|0,tmp5,10318,tmp6);
			;
			if(tmp2-tmp3>>>0>50){
				tmp5=8+tmp4|0;
				tmp6=HEAP32;
				tmp4=(tmp5>>2);
				Atomics.store(tmp6,tmp4+1|0,tmp3+50|0);
				Atomics.store(tmp6,tmp4+2|0,0);
				if(((Atomics.notify(tmp6,tmp4,1))|0)===0){
					Atomics.store(tmp6,tmp4,1);
					Atomics.notify(tmp6,tmp4,1);
				}
			}
			__ZN7CoreCtx8setStateENS_5STATEE(Larg0|0,0);
			return;
		}
		___assert_fail(2127860|0,tmp5,10312,tmp6);
		;
	}
	___assert_fail(2127800|0,tmp5,10311,tmp6);
	;
}
function __ZN8LinuxApp12handleListenEP7CoreCtxP14SocketNodeBasej(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp1=HEAP32[472+Larg0>>2]|0;
	tmp1=__ZN18ExternalSocketNode3getI6STREAMEEPS_bjjj(HEAP32[9616+tmp1>>2]|0,HEAP32[9628+tmp1>>2]|0,HEAP32[8+tmp1>>2]|0)|0;
	__ZN14SocketNodeBase7setPeerEPS_(Larg1|0,tmp1|0);
	__ZN14SocketNodeBase7setPeerEPS_(tmp1|0,Larg1|0);
	tmp2=__ZN18ExternalSocketNode15messageChannelsE;
	tmp1=HEAP32[88+tmp1>>2]|0;
	tmp2=tmp2[0+tmp1|0].port2;
	tmp0={type:89,tid:(HEAP32[436+Larg0>>2]|0),localPort:(HEAP32[64+Larg1>>2]|0), arg1:tmp2};
	postMessage(tmp0,new Array(tmp2));
}
function __ZZN8LinuxApp10handleKillEP7CoreCtxEN9CheerpTmp3RunEjj(Larg0,Larg1){
	var tmp0=null;
	tmp0={type:77,pid:Larg0,value:Larg1};
	postMessage(tmp0);
}
function __ZN12AddressSpace13scheduleLaterEv(){
	var tmp0=null,tmp1=null;
	if((HEAP8[27+2189416>>0]&255)===0){
		HEAP8[27+2189416>>0]=1;
		tmp0=__ZN12AddressSpace8selfPortE;
		tmp1=[null];
		tmp1[0]=0;
		tmp1=tmp1[0];
		tmp0.postMessage(tmp1);
	}
}
function __ZN8LinuxApp21handleFsGenericResultEjj(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0;
	tmp1=HEAP32[829209]|0;
	tmp2=2116940|0;
	tmp3=2134452|0;
	if((tmp1|0)!=(0|0))while(1){
		tmp4=HEAP32[12+tmp1>>2]|0;
		if((tmp4|0)!=(0|0))while(1){
			if((HEAP32[436+tmp4>>2]|0)===(Larg0|0)){
				if((HEAP32[592+tmp4>>2]|0)===4){
					HEAP32[tmp4>>2]=Larg1;
					__ZN7CoreCtx8setStateENS_5STATEE(tmp4,0);
					HEAP32[548+tmp4>>2]=Larg1;
					tmp2=[null];
					if((HEAP8[27+2189416>>0]&255)===0){
						HEAP8[27+2189416>>0]=1;
						tmp3=__ZN12AddressSpace8selfPortE;
						tmp2[0]=0;
						tmp0=tmp2[0];
						tmp3.postMessage(tmp0);
					}
					return;
				}
				___assert_fail(2134388|0,tmp2,2045,tmp3);
				;
			}
			tmp4=HEAP32[488+tmp4>>2]|0;
			if((tmp4|0)!=(0|0))continue;
			break;
		}
		tmp1=HEAP32[92+tmp1>>2]|0;
		if((tmp1|0)!=(0|0))continue;
		break;
	}
	___assert_fail(2134448|0,tmp2,2044,tmp3);
	;
}
function __ZN8LinuxApp22postProcessExitMessageEjj(Larg0,Larg1){
	var tmp0=null;
	tmp0={type:55,index:Larg0,value:Larg1};
	postMessage(tmp0);
}
function __ZN8LinuxApp22handleDeviceReadResultEj(Larg0){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null,tmp4=0;
	tmp0=HEAP32[829209]|0;
	while(1){
		tmp4=HEAP32[12+tmp0>>2]|0;
		if((tmp4|0)!=(0|0))while(1){
			if((HEAP32[436+tmp4>>2]|0)===(Larg0|0)){
				if((HEAP32[592+tmp4>>2]|0)===4){
					__ZN7CoreCtx8setStateENS_5STATEE(tmp4,0);
					tmp1=[null];
					if((HEAP8[27+2189416>>0]&255)===0){
						HEAP8[27+2189416>>0]=1;
						tmp2=__ZN12AddressSpace8selfPortE;
						tmp1[0]=0;
						tmp3=tmp1[0];
						tmp2.postMessage(tmp3);
					}
					return;
				}
				___assert_fail(2134388|0,2116940|0,4264,2134424|0);
				;
			}
			tmp4=HEAP32[488+tmp4>>2]|0;
			if((tmp4|0)!=(0|0))continue;
			break;
		}
		tmp0=HEAP32[92+tmp0>>2]|0;
		continue;
	}
}
function __ZN8LinuxApp23handleFsCacheDataResultEj(Larg0){
	var tmp0=0,tmp1=null,tmp2=null,tmp3=null,tmp4=0;
	tmp0=HEAP32[829209]|0;
	while(1){
		tmp4=HEAP32[12+tmp0>>2]|0;
		if((tmp4|0)!=(0|0))while(1){
			if((HEAP32[436+tmp4>>2]|0)===(Larg0|0)){
				if((HEAP32[592+tmp4>>2]|0)===4){
					__ZN7CoreCtx8setStateENS_5STATEE(tmp4,0);
					tmp1=[null];
					if((HEAP8[27+2189416>>0]&255)===0){
						HEAP8[27+2189416>>0]=1;
						tmp2=__ZN12AddressSpace8selfPortE;
						tmp1[0]=0;
						tmp3=tmp1[0];
						tmp2.postMessage(tmp3);
					}
					return;
				}
				___assert_fail(2134388|0,2116940|0,4272,2134476|0);
				;
			}
			tmp4=HEAP32[488+tmp4>>2]|0;
			if((tmp4|0)!=(0|0))continue;
			break;
		}
		tmp0=HEAP32[92+tmp0>>2]|0;
		continue;
	}
}
function __ZN8LinuxApp23handleFsCacheNodeResultEjPN6client6StringEjjjjjjbPNS0_6ObjectEjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Larg7,Larg8,Larg9,Larg10,Larg11){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=null,tmp4=0,tmp5=0,tmp6=0,tmp7=-0.,tmp8=0,tmp9=null,tmp10=0,tmp11=0,tmp12=null,tmp13=0,tmp14=0,tmp15=0,tmp16=0,tmp17=0,tmp18=0,Lconv1=0,tmp20=0,tmp21=null;
	LsavedStack=___getStackPtr();
	tmp9=-104+LsavedStack|0;
	___setStackPtr(tmp9);
	tmp10=HEAP32[829209]|0;
	a:if((tmp10|0)!=(0|0)){
		while(1){
			tmp11=HEAP32[12+tmp10>>2]|0;
			if((tmp11|0)!=(0|0))while(1){
				if((HEAP32[436+tmp11>>2]|0)===(Larg0|0))break a;
				tmp11=HEAP32[488+tmp11>>2]|0;
				if((tmp11|0)!=(0|0))continue;
				break;
			}
			tmp10=HEAP32[92+tmp10>>2]|0;
			if((tmp10|0)!=(0|0))continue;
			break;
		}
		tmp11=0|0;
	}else{
		tmp11=0|0;
	}
	tmp10=88+tmp9|0;
	__ZN10FsProvider14PathComponentsC2Ev(tmp10);
	tmp1=72+tmp9|0;
	__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp1,Larg1);
	tmp2=__ZN8LinuxApp16getProviderForIdEj(Larg2)|0;
	tmp12=2116940|0;
	tmp3=2134680|0;
	if((HEAP32[44+tmp2>>2]|0)!==0)___assert_fail(2134568|0,tmp12,4292,tmp3);
	;
	tmp13=64+tmp9|0;
	__ZN9StringRefC2ERKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE(tmp13,tmp1);
	__ZN10FsProvider14PathComponents7addPathERK9StringRef(tmp10,tmp13);
	if((Larg5|0)!==0){
		if((Larg5&61440|0)===32768){
			if(Larg8){
				tmp4=Larg5>>>2&73|Larg5;
			}else{
				tmp4=Larg5;
			}
		}else{
			tmp4=Larg5;
		}
		tmp5=48+tmp9|0;
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000Ev(tmp5);
		tmp14=tmp4&61440;
		if((tmp14|0)===40960){
			tmp15=32+tmp9|0;
			__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp15,Larg9);
			__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEaSB7v160000EOS4_(tmp5,tmp15)|0;
			__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp15);
		}
		tmp15=24+tmp9|0;
		HEAP32[tmp15>>2]=Larg2;
		HEAP32[4+tmp15>>2]=Larg4;
		tmp13=16+tmp9|0;
		HEAP32[tmp13>>2]=0;
		HEAP32[4+tmp13>>2]=0;
		tmp16=HEAP32[4+tmp10>>2]|0;
		tmp17=((HEAP32[tmp10>>2]|0)|0)==(tmp16|0)?1:0;
		if(tmp17){
			if((Larg3|0)!==0)___assert_fail(2134324|0,tmp12,4327,tmp3);
			;
			tmp6=0;
			tmp18=0;
		}else{
			if((Larg3|0)===0)___assert_fail(2134716|0,tmp12,4331,tmp3);
			;
			HEAP32[tmp13>>2]=Larg2;
			HEAP32[4+tmp13>>2]=Larg3;
			tmp6=Larg2;
			tmp18=Larg3;
		}
		tmp7=+Date.now();
		Lconv1=~~((tmp7<0?-tmp7:tmp7)%4294967296);
		tmp8=tmp7<0?-Lconv1|0:Lconv1|0;
		tmp20=__ZN10InodeCache15lookupCacheNodeERK7InodeIdj(2191088|0,tmp15,tmp8)|0;
		if((tmp20|0)==(0|0)){
			Lconv1=8+tmp9|0;
			HEAP32[Lconv1>>2]=0;
			HEAP32[4+Lconv1>>2]=0;
			tmp20=tmp9|0;
			__ZN9StringRefC2ERKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE(tmp20,tmp5);
			if((tmp14|0)===16384){
				if((HEAP32[4+tmp5>>2]|0)!==0)___assert_fail(2134736|0,tmp12,4345,tmp3);
				;
				if(!(tmp17))__ZN9StringRefaSERKS_(tmp20,-8+tmp16|0)|0;
				HEAP32[Lconv1>>2]=tmp6;
				HEAP32[4+Lconv1>>2]=tmp18;
			}
			tmp14=__ZN18CheerpOSFsProvider9CacheNode3getEPS_RK7InodeIdS4_jjjRK9StringRefjjj(tmp2|0,Lconv1,tmp15,tmp4,Larg6,Larg7,tmp20,tmp8,Larg10,Larg11)|0;
			__ZN10InodeCache12addNodeToMapERK7InodeIdP9FileInode(tmp15,tmp14|0);
			tmp20=tmp14|0;
		}
		a:{
			if(tmp17){
				HEAP32[48+tmp2>>2]=tmp20;
				__ZN5Inode6incRefEv(tmp20|0);
			}else{
				tmp18=__ZN10InodeCache15lookupCacheNodeERK7InodeIdj(2191088|0,tmp13,tmp8)|0;
				if((tmp18|0)==(0|0))___assert_fail(2145892|0,tmp12,4365,tmp3);
				;
				__ZN5Inode6decRefEv(tmp18|0);
				__ZN10InodeCache13addCachedNodeEP9FileInodeRK9StringRefRK7InodeId(tmp18,-8+tmp16|0,tmp15);
				if((HEAP8[64+tmp18>>0]&255)===0){
					tmp9=HEAP32;
					tmp16=HEAP32[104+tmp18>>2]>>2|0;
					tmp21=HEAP32;
					tmp17=HEAP32[108+tmp18>>2]>>2|0;
					if(tmp9===tmp21&&tmp16===tmp17)___assert_fail(2134760|0,tmp12,4371,tmp3);
					;
					if((__ZNKSt6vectorIP6DEntry17TrackingAllocatorIS1_L7MEM_TAG8EEE4sizeB7v160000Ev(104+tmp18|0)|0)>>>0>3){
						__ZN5Inode6incRefEv(tmp18|0);
						tmp9=__ZN18CheerpOSFsProvider15buildStringPathERKN10FsProvider14PathComponentsEj(tmp10,(__ZNKSt6vectorI9StringRef17TrackingAllocatorIS0_L7MEM_TAG2EEE4sizeB7v160000Ev(tmp10|0)|0)-1|0);
						tmp9={type:68,replyType:69,tid:(HEAP32[436+tmp11>>2]|0),path:tmp9,devId:Larg2,inodeId:Larg3};
						postMessage(tmp9);
						break a;
					}
				}
			}
			if((HEAP32[592+tmp11>>2]|0)!==4)___assert_fail(2134388|0,tmp12,4380,tmp3);
			;
			__ZN7CoreCtx8setStateENS_5STATEE(tmp11,0);
			tmp9=[null];
			if((HEAP8[27+2189416>>0]&255)===0){
				HEAP8[27+2189416>>0]=1;
				tmp21=__ZN12AddressSpace8selfPortE;
				tmp9[0]=0;
				tmp12=tmp9[0];
				tmp21.postMessage(tmp12);
			}
		}
		__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp5);
	}else{
		if(((HEAP32[tmp10>>2]|0)|0)==((HEAP32[4+tmp10>>2]|0)|0))___assert_fail(2144652|0,tmp12,4299,2121368|0);
		;
		tmp9=__ZN18CheerpOSFsProvider15buildStringPathERKN10FsProvider14PathComponentsEj(tmp10,(__ZNKSt6vectorI9StringRef17TrackingAllocatorIS0_L7MEM_TAG2EEE4sizeB7v160000Ev(tmp10|0)|0)-1|0);
		tmp9={type:68,replyType:69,tid:(HEAP32[436+tmp11>>2]|0),path:tmp9,devId:Larg2,inodeId:Larg3};
		postMessage(tmp9);
	}
	__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp1);
	__ZN10FsProvider14PathComponentsD2Ev(tmp10);
	___setStackPtr(LsavedStack);
}
function __ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,Lxtraiter=0,L$punr=0,Lunroll_iter=0,Lniter=0,tmp7=0;
	tmp0=new TextEncoder().encode(Larg1);
	__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000Ev(Larg0|0);
	__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE6resizeB7v160000Em(Larg0|0,tmp0.length);
	Lxtraiter=HEAP32[4+Larg0>>2]|0;
	if((Lxtraiter|0)!==0){
		tmp1=HEAP8;
		tmp2=HEAP32[8+Larg0>>2]|0;
		if(Lxtraiter>>>0<4){
			L$punr=0;
		}else{
			Lunroll_iter=Lxtraiter& -4;
			Lniter=0;
			L$punr=0;
			while(1){
				tmp1[tmp2+L$punr|0]=tmp0[0+L$punr|0]|0;
				tmp7=L$punr+1|0;
				tmp1[tmp2+tmp7|0]=tmp0[0+tmp7|0]|0;
				tmp7=L$punr+2|0;
				tmp1[tmp2+tmp7|0]=tmp0[0+tmp7|0]|0;
				tmp7=L$punr+3|0;
				tmp1[tmp2+tmp7|0]=tmp0[0+tmp7|0]|0;
				Lniter=Lniter+4|0;
				L$punr=L$punr+4|0;
				if((Lniter|0)!==(Lunroll_iter|0))continue;
				break;
			}
		}
		Lxtraiter&=3;
		if((Lxtraiter|0)!==0){
			Lunroll_iter=0;
			while(1){
				tmp1[tmp2+L$punr|0]=tmp0[0+L$punr|0]|0;
				Lunroll_iter=Lunroll_iter+1|0;
				if((Lunroll_iter|0)!==(Lxtraiter|0)){
					L$punr=L$punr+1|0;
					continue;
				}
				break;
			}
		}
	}
}
function __ZN18CheerpOSFsProvider15buildStringPathERKN10FsProvider14PathComponentsEj(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,tmp4=0,tmp5=null,tmp6=0,L$poptgep=0,tmp8=null,tmp9=0,tmp10=0;
	tmp5=String();
	if((Larg1|0)===0)return tmp5;
	tmp0=String.fromCharCode(47);
	tmp6=0;
	while(1){
		L$poptgep=(tmp6<<3)+(HEAP32[Larg0>>2]|0)|0;
		tmp1=HEAP8;
		tmp2=HEAP32[L$poptgep>>2]|0;
		L$poptgep=HEAP32[4+L$poptgep>>2]|0;
		tmp8=String();
		if((L$poptgep|0)!==0){
			tmp9=0;
			while(1){
				tmp3=tmp1[tmp2+tmp9|0]|0;
				if((tmp3&255)!==0){
					tmp4=tmp3&255;
					if(tmp3<<24>-16777216){
						tmp10=tmp4;
					}else if((tmp3&255)<192){
						tmp10=(tmp4&63)+(tmp10<<6)|0;
					}else if((tmp3&255)<224){
						tmp10=tmp4&31;
					}else if((tmp3&255)<240){
						tmp10=tmp4&15;
					}else{
						tmp10=tmp4&7;
					}
					tmp9=tmp9+1|0;
					a:{
						if((tmp9|0)!==(L$poptgep|0))if((tmp1[tmp2+tmp9|0]&192)===128)break a;
						if(tmp10>>>0<65536)tmp8=tmp8.concat(String.fromCharCode(tmp10));
						else{
							tmp8=tmp8.concat(String.fromCharCode(tmp10-65536>>>10|55296));
							tmp8=tmp8.concat(String.fromCharCode(tmp10&1023|56320));
						}
					}
					if((tmp9|0)!==(L$poptgep|0))continue;
				}
				break;
			}
		}
		tmp5=tmp5.concat(tmp0,tmp8);
		tmp6=tmp6+1|0;
		if((tmp6|0)!==(Larg1|0))continue;
		break;
	}
	return tmp5;
}
function __ZN8LinuxApp25handleFsSpecialFileResultEjPN6client6ObjectEjjjjjjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Larg7,Larg8){
	var LsavedStack=null,tmp1=null,tmp2=-0.,tmp3=0,tmp4=0,tmp5=null,tmp6=0,tmp7=null,tmp8=null,tmp9=0,Lconv2=0,tmp11=0,tmp12=0;
	LsavedStack=___getStackPtr();
	tmp5=-40+LsavedStack|0;
	___setStackPtr(tmp5);
	tmp6=HEAP32[829209]|0;
	tmp7=2116940|0;
	tmp8=2136212|0;
	if((tmp6|0)!=(0|0))while(1){
		tmp9=HEAP32[12+tmp6>>2]|0;
		if((tmp9|0)!=(0|0))while(1){
			if((HEAP32[436+tmp9>>2]|0)===(Larg0|0)){
				tmp1=2136240|0;
				if((HEAP32[592+tmp9>>2]|0)===1){
					tmp6=32+tmp5|0;
					HEAP32[tmp6>>2]=Larg2;
					HEAP32[4+tmp6>>2]=Larg3;
					tmp2=+Date.now();
					Lconv2=~~((tmp2<0?-tmp2:tmp2)%4294967296);
					tmp11=tmp2<0?-Lconv2|0:Lconv2|0;
					tmp3=Larg4&61440;
					if((tmp3|0)===16384)___assert_fail(2136276|0,tmp7,4394,tmp8);
					;
					Lconv2=__ZN10InodeCache15lookupCacheNodeERK7InodeIdj(2191088|0,tmp6,tmp11)|0;
					if((Lconv2|0)==(0|0)){
						tmp4=__ZN8LinuxApp16getProviderForIdEj(Larg2)|0;
						if((HEAP32[44+tmp4>>2]|0)!==0)___assert_fail(2134568|0,tmp7,4400,tmp8);
						;
						tmp12=24+tmp5|0;
						HEAP32[tmp12>>2]=0;
						HEAP32[4+tmp12>>2]=0;
						Lconv2=16+tmp5|0;
						__ZN9StringRefC2EPKc(Lconv2);
						tmp11=__ZN18CheerpOSFsProvider9CacheNode3getEPS_RK7InodeIdS4_jjjRK9StringRefjjj(tmp4|0,tmp12,tmp6,Larg4,Larg5,Larg6,Lconv2,tmp11,Larg7,Larg8)|0;
						__ZN10InodeCache12addNodeToMapERK7InodeIdP9FileInode(tmp6,tmp11|0);
						Lconv2=tmp11|0;
					}
					if((tmp3&65535)===40960){
						if((HEAP32[72+Lconv2>>2]|0)!==0)___assert_fail(2136308|0,tmp7,4409,tmp8);
						;
						tmp12=tmp5|0;
						__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp12,Larg1);
						__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEaSB7v160000EOS4_(68+Lconv2|0,tmp12)|0;
						__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp12);
					}else{
						if((tmp3&65535)!==49152)___assert_fail(2113896|0,tmp7,4413,tmp8);
						;
						HEAP32[80+Lconv2>>2]=(~~ +Larg1|0);
					}
					if((HEAP32[592+tmp9>>2]|0)===1){
						HEAP32[tmp9>>2]=0;
						__ZN7CoreCtx8setStateENS_5STATEE(tmp9,0);
						tmp5=[null];
						if((HEAP8[27+2189416>>0]&255)===0){
							HEAP8[27+2189416>>0]=1;
							tmp7=__ZN12AddressSpace8selfPortE;
							tmp5[0]=0;
							tmp8=tmp5[0];
							tmp7.postMessage(tmp8);
						}
						___setStackPtr(LsavedStack);
						return;
					}
					___assert_fail(tmp1,tmp7,4414,tmp8);
					;
				}
				___assert_fail(tmp1,tmp7,4390,tmp8);
				;
			}
			tmp9=HEAP32[488+tmp9>>2]|0;
			if((tmp9|0)!=(0|0))continue;
			break;
		}
		tmp6=HEAP32[92+tmp6>>2]|0;
		if((tmp6|0)!=(0|0))continue;
		break;
	}
	___assert_fail(2134448|0,tmp7,4389,tmp8);
	;
}
function __ZN8LinuxApp25handleFsResolveRootResultEjjj(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0;
	tmp1=HEAP32[829209]|0;
	tmp2=2116940|0;
	tmp3=2134540|0;
	if((tmp1|0)!=(0|0))while(1){
		tmp4=HEAP32[12+tmp1>>2]|0;
		if((tmp4|0)!=(0|0))while(1){
			if((HEAP32[436+tmp4>>2]|0)===(Larg0|0)){
				tmp1=__ZN8LinuxApp16getProviderForIdEj(Larg1)|0;
				if((HEAP32[44+tmp1>>2]|0)!==0)___assert_fail(2134568|0,tmp2,4425,tmp3);
				;
				if((HEAP32[52+tmp1>>2]|0)!==0)___assert_fail(2134612|0,tmp2,4427,tmp3);
				;
				HEAP32[52+tmp1>>2]=(Larg2|0)!==0?1|0:2|0;
				if((HEAP32[592+tmp4>>2]|0)===4){
					__ZN7CoreCtx8setStateENS_5STATEE(tmp4,0);
					tmp2=[null];
					if((HEAP8[27+2189416>>0]&255)===0){
						HEAP8[27+2189416>>0]=1;
						tmp3=__ZN12AddressSpace8selfPortE;
						tmp2[0]=0;
						tmp0=tmp2[0];
						tmp3.postMessage(tmp0);
					}
					return;
				}
				___assert_fail(2134388|0,tmp2,4431,tmp3);
				;
			}
			tmp4=HEAP32[488+tmp4>>2]|0;
			if((tmp4|0)!=(0|0))continue;
			break;
		}
		tmp1=HEAP32[92+tmp1>>2]|0;
		if((tmp1|0)!=(0|0))continue;
		break;
	}
	___assert_fail(2134448|0,tmp2,4423,tmp3);
	;
}
function __ZN8LinuxApp23handleFsCacheListResultEjjjRKN6client6TArrayIPNS0_6StringEEE(Larg0,Larg1,Larg2,Larg3){
	var LsavedStack=null,tmp1=0,tmp2=null,tmp3=null,tmp4=null,tmp5=0,tmp6=0,tmp7=0;
	LsavedStack=___getStackPtr();
	tmp4=-32+LsavedStack|0;
	___setStackPtr(tmp4);
	tmp5=HEAP32[829209]|0;
	a:if((tmp5|0)!=(0|0)){
		while(1){
			tmp6=HEAP32[12+tmp5>>2]|0;
			if((tmp6|0)!=(0|0))while(1){
				if((HEAP32[436+tmp6>>2]|0)===(Larg0|0))break a;
				tmp6=HEAP32[488+tmp6>>2]|0;
				if((tmp6|0)!=(0|0))continue;
				break;
			}
			tmp5=HEAP32[92+tmp5>>2]|0;
			if((tmp5|0)!=(0|0))continue;
			break;
		}
		tmp6=0|0;
	}else{
		tmp6=0|0;
	}
	tmp5=16+tmp4|0;
	__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEEC2B7v160000Ev(tmp5);
	if(((Larg3.length)|0)!==0){
		tmp1=tmp4|0;
		tmp7=0;
		while(1){
			__ZN8LinuxApp27clientStringToTrackedStringERKN6client6StringE(tmp1,Larg3[(+(tmp7>>>0))]);
			__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEE12emplace_backIJS5_EEERS5_DpOT_(tmp5,tmp1);
			__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev(tmp1);
			tmp7=tmp7+1|0;
			if(tmp7>>>0<(Larg3.length)>>>0)continue;
			break;
		}
	}
	__ZN18CheerpOSFsProvider13listCacheNodeEjjOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEE(Larg1,Larg2,tmp5);
	if((HEAP32[592+tmp6>>2]|0)===4){
		__ZN7CoreCtx8setStateENS_5STATEE(tmp6,0);
		tmp4=[null];
		if((HEAP8[27+2189416>>0]&255)===0){
			HEAP8[27+2189416>>0]=1;
			tmp2=__ZN12AddressSpace8selfPortE;
			tmp4[0]=0;
			tmp3=tmp4[0];
			tmp2.postMessage(tmp3);
		}
		__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEED2B7v160000Ev(tmp5);
		___setStackPtr(LsavedStack);
		return;
	}
	___assert_fail(2134388|0,2116940|0,4445,2134500|0);
	;
}
function __ZN8LinuxApp18handleFsOpenResultEjijjjjjjj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5,Larg6,Larg7,Larg8){
	var LsavedStack=null,tmp1=null,tmp2=-0.,tmp3=0,tmp4=null,tmp5=0,tmp6=0,tmp7=null,tmp8=null,Lconv1=0,tmp10=0,tmp11=0;
	LsavedStack=___getStackPtr();
	tmp4=-24+LsavedStack|0;
	___setStackPtr(tmp4);
	tmp5=HEAP32[829209]|0;
	a:if((tmp5|0)!=(0|0)){
		while(1){
			tmp6=HEAP32[12+tmp5>>2]|0;
			if((tmp6|0)!=(0|0))while(1){
				if((HEAP32[436+tmp6>>2]|0)===(Larg0|0))break a;
				tmp6=HEAP32[488+tmp6>>2]|0;
				if((tmp6|0)!=(0|0))continue;
				break;
			}
			tmp5=HEAP32[92+tmp5>>2]|0;
			if((tmp5|0)!=(0|0))continue;
			break;
		}
		tmp6=0|0;
	}else{
		tmp6=0|0;
	}
	tmp7=2116940|0;
	tmp8=2134388|0;
	tmp1=2136336|0;
	if((HEAP32[592+tmp6>>2]|0)===4){
		if((Larg1|0)>-1){
			tmp5=16+tmp4|0;
			HEAP32[tmp5>>2]=Larg2;
			HEAP32[4+tmp5>>2]=Larg3;
			tmp2=+Date.now();
			Lconv1=~~((tmp2<0?-tmp2:tmp2)%4294967296);
			tmp10=tmp2<0?-Lconv1|0:Lconv1|0;
			if((Larg4&61440|0)===16384)___assert_fail(2136276|0,tmp7,8064,tmp1);
			;
			Lconv1=__ZN10InodeCache15lookupCacheNodeERK7InodeIdj(2191088|0,tmp5,tmp10)|0;
			if((Lconv1|0)==(0|0)){
				tmp3=__ZN8LinuxApp16getProviderForIdEj(Larg2)|0;
				if((HEAP32[44+tmp3>>2]|0)!==0)___assert_fail(2134568|0,tmp7,8070,tmp1);
				;
				tmp11=8+tmp4|0;
				HEAP32[tmp11>>2]=0;
				HEAP32[4+tmp11>>2]=0;
				Lconv1=tmp4|0;
				__ZN9StringRefC2EPKc(Lconv1);
				tmp10=__ZN18CheerpOSFsProvider9CacheNode3getEPS_RK7InodeIdS4_jjjRK9StringRefjjj(tmp3|0,tmp11,tmp5,Larg4,Larg5,Larg6,Lconv1,tmp10,Larg7,Larg8)|0;
				__ZN10InodeCache12addNodeToMapERK7InodeIdP9FileInode(tmp5,tmp10|0);
				Lconv1=tmp10|0;
			}
			if((HEAP32[44+(HEAP32[92+Lconv1>>2]|0)>>2]|0)!==0)___assert_fail(2136364|0,tmp7,8075,tmp1);
			;
			tmp4=HEAP8;
			tmp11=__Znwj(24)|0;
			__ZN11ChunksCacheC2Ej12CORE_MESSAGES0_(tmp11|0,Larg1);
			HEAP32[124+Lconv1>>2]=(tmp11|0);
			if((HEAP32[592+tmp6>>2]|0)===4){
				HEAP32[548+tmp6>>2]=0;
				__ZN7CoreCtx8setStateENS_5STATEE(tmp6,0);
				tmp4=[null];
				if((HEAP8[27+2189416>>0]&255)===0){
					HEAP8[27+2189416>>0]=1;
					tmp7=__ZN12AddressSpace8selfPortE;
					tmp4[0]=0;
					tmp8=tmp4[0];
					tmp7.postMessage(tmp8);
				}
				___setStackPtr(LsavedStack);
				return;
			}
			___assert_fail(tmp8,tmp7,8078,tmp1);
			;
		}
		___assert_fail(2136356|0,tmp7,8060,tmp1);
		;
	}
	___assert_fail(tmp8,tmp7,8059,tmp1);
	;
}
function __ZZZN8LinuxApp17handleBindWrapperEP7CoreCtxj12LinearBufferENK3$_0clES1_jS2_EN9CheerpTmp3RunEii(Larg0,Larg1){
	var tmp0=null;
	tmp0={type:35, tid:Larg0, value: Larg1};
	postMessage(tmp0);
}
function __ZN8LinuxApp14updateWakeTimeEddj(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=-0.;
	tmp3=Larg0+50;
	if(!(tmp3>Larg1))if(Larg2>>>0<=1){
		tmp3=Larg0+1000;
		if(tmp3>Larg1){
			tmp3=Larg1;
		}
	}
	tmp0=8+2189416|0;
	tmp1=HEAP32;
	tmp2=(tmp0>>2);
	Atomics.store(tmp1,tmp2+1|0,~~(tmp3- +HEAPF64[274179]));
	Atomics.store(tmp1,tmp2+2|0,0);
	if(((Atomics.notify(tmp1,tmp2,1))|0)===0){
		Atomics.store(tmp1,tmp2,1);
		Atomics.notify(tmp1,tmp2,1);
	}
}
function __ZN12AddressSpace17notifyWorkerClockEjb(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=8+2189416|0;
	tmp1=HEAP32;
	tmp2=(tmp0>>2);
	Atomics.store(tmp1,tmp2+1|0,Larg0);
	Atomics.store(tmp1,tmp2+2|0,Larg1?1:0);
	if(((Atomics.notify(tmp1,tmp2,1))|0)===0){
		Atomics.store(tmp1,tmp2,1);
		Atomics.notify(tmp1,tmp2,1);
	}
}
function __ZN8LinuxApp13postSysResultEjj(Larg0,Larg1){
	var tmp0=null;
	tmp0={type:35, tid:Larg0, value: Larg1};
	postMessage(tmp0);
}
function __ZZN8LinuxApp19handleConnectToPortEjjEN9CheerpTmp3RunEj(Larg0){
	var tmp0=null;
	tmp0={type:35, tid:Larg0, value: null};
	HEAP8[3244540]=1;
	postMessage(tmp0);
}
function __ZZZN8LinuxApp19handleConnectToPortEjjENK3$_0clEP7CoreCtxP18ExternalSocketNodeiEN9CheerpTmp3RunEjS4_(Larg0,Larg1){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp2=__ZN18ExternalSocketNode15messageChannelsE;
	tmp0=HEAP32[88+Larg1>>2]|0;
	tmp2=tmp2[0+tmp0|0].port2;
	tmp1={type:35, tid:Larg0, value: tmp2};
	postMessage(tmp1,new Array(tmp2));
}
function __ZZN8LinuxApp18handleFsCreateFileEjjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEEN9CheerpTmp3RunEjj(Larg0,Larg1){
	var tmp0=null;
	tmp0={type:35, tid:Larg0, value:Larg1};
	postMessage(tmp0);
}
function __ZN8LinuxApp14runInterpreterEP7CoreCtx(Larg0){
	var tmp0=0,tmp1=null,tmp2=null;
	if(((HEAP32[811109]|0)|0)==(Larg0|0)){
		tmp0=__Z11getStackPtrv()|0;
		tmp2=[{a0:0}];
		tmp2[0].a0=(Larg0|0);
		tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN8LinuxApp14runInterpreterEP7CoreCtxE3$_0JEEEvPT_DpT0_,tmp2[0]);
		tmp1=__ZZN8LinuxApp14runInterpreterEP7CoreCtxEN3$_18__invokeEv;
		try{tmp2()}catch(e){if(e!='CheerpJContinue'){debugger;console.log('Unexpected exit',e.stack);tmp1()}};
		__Z11setStackPtrj(tmp0);
		return;
	}
	___assert_fail(2117284|0,2116940|0,10855,2117340|0);
	;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN8LinuxApp14runInterpreterEP7CoreCtxE3$_0JEEEvPT_DpT0_(Larg0){
	var tmp0=0;
	tmp0=Larg0.a0|0;
	__Z12caInterpFromP8CoreDataP12AddressSpacej(tmp0|0,HEAP32[(HEAP32[472+tmp0>>2]|0)>>2]|0,HEAP32[36+tmp0>>2]|0);
}
function __ZZN8LinuxApp14runInterpreterEP7CoreCtxEN3$_18__invokeEv(){
	__Z8debuggerv();
}
function __ZN8LinuxApp11scheduleAppEv(){
	var tmp0=0,tmp1=null,tmp2=-0.,tmp3=0,Lconv2=0,tmp5=null,tmp6=null;
	HEAP8[3244540]=0;
	tmp0=2189416;
	HEAP8[27+tmp0>>0]=0;
	if((HEAP8[24+tmp0>>0]&255)!==0)HEAP8[26+tmp0>>0]=1;
	else{
		tmp2=+Date.now();
		__ZN8LinuxApp21cleanupExitingThreadsEv();
		tmp3=__ZN8LinuxApp12chooseThreadEd(tmp2)|0;
		Lconv2=~~((tmp2<0?-tmp2:tmp2)%4294967296);
		__ZN10InodeCache15freeExpiredNodeEj(tmp2<0?-Lconv2|0:Lconv2|0);
		if((tmp3|0)!=(0|0)){
			Lconv2=HEAP32[592+tmp3>>2]|0;
			if((Lconv2|0)!==0){
				tmp5=2116940|0;
				tmp6=2116996|0;
				if((Lconv2|0)!==2)___assert_fail(2116892|0,tmp5,11084,tmp6);
				;
				tmp2=+HEAPF64[512+tmp3>>3];
				if(tmp2===0)___assert_fail(2117020|0,tmp5,11085,tmp6);
				;
				tmp5=8+tmp0|0;
				tmp6=HEAP32;
				tmp3=(tmp5>>2);
				Atomics.store(tmp6,tmp3+1|0,~~(tmp2- +HEAPF64[274179]));
				Atomics.store(tmp6,tmp3+2|0,1);
				if(((Atomics.notify(tmp6,tmp3,1))|0)===0){
					Atomics.store(tmp6,tmp3,1);
					Atomics.notify(tmp6,tmp3,1);
				}
				tmp3=0;
				while(1){
					tmp3=__ZN17WasmGeneratorBase21compileOneTraceToWasmEj(tmp3)|0;
					if((tmp3|0)!==0)if((HEAP32[tmp0>>2]|0)>=0)continue;
					break;
				}
				if(HEAP8[3243404]|0){
					HEAP8[3243404]=0;
					if((HEAP32[810850]&2|0)!==0){
						tmp5={type:58,eventType:1,value:1};
						postMessage(tmp5);
					}
				}
			}else{
				a:{
					while(1){
						__ZN8LinuxApp15scheduleAppImplEP7CoreCtx(tmp3);
						tmp2=+Date.now();
						tmp2-= +HEAPF64[520+tmp3>>3];
						if(tmp2<50)if((HEAP32[592+tmp3>>2]|0)===0){
							if((HEAP8[25+tmp0>>0]&255)===0)continue;
							HEAP32[810852]=tmp3;
							break a;
						}
						break;
					}
					HEAPF64[504+tmp3>>3]=tmp2+ +HEAPF64[504+tmp3>>3];
				}
				__ZN17WasmGeneratorBase20compilePendingTracesEb(1);
				if(!(HEAP8[3243404]|0)){
					HEAP8[3243404]=1;
					if((HEAP32[810850]&2|0)!==0){
						tmp5={type:58,eventType:1,value:0};
						postMessage(tmp5);
					}
				}
				tmp5=[null];
				if((HEAP8[27+tmp0>>0]&255)===0){
					HEAP8[27+tmp0>>0]=1;
					tmp6=__ZN12AddressSpace8selfPortE;
					tmp5[0]=0;
					tmp1=tmp5[0];
					tmp6.postMessage(tmp1);
				}
			}
		}else{
			tmp3=0;
			while(1){
				tmp3=__ZN17WasmGeneratorBase21compileOneTraceToWasmEj(tmp3)|0;
				if((tmp3|0)!==0)if((HEAP32[tmp0>>2]|0)>=0)continue;
				break;
			}
			if(HEAP8[3243404]|0){
				HEAP8[3243404]=0;
				if((HEAP32[810850]&2|0)!==0){
					tmp5={type:58,eventType:1,value:1};
					postMessage(tmp5);
				}
			}
		}
	}
}
function __ZN8LinuxApp16retryCoreMessageEP7CoreCtxPN6client11CoreMessageE(Larg0,Larg1){
	var tmp0=null,tmp1=0;
	tmp0=__ZN8LinuxApp15pendingMessagesE;
	if(tmp0===null){
		tmp0=new Array();
		__ZN8LinuxApp15pendingMessagesE=tmp0;
		tmp0=tmp0;
	}
	tmp1=tmp0.indexOf(null);
	tmp0=__ZN8LinuxApp15pendingMessagesE;
	if((tmp1|0)<0){
		tmp1=tmp0.length;
		+__ZN8LinuxApp15pendingMessagesE.push(Larg1);
		__ZN8LinuxApp20retryCoreMessageImplEP7CoreCtxi(Larg0|0,tmp1);
		return;
	}
	tmp0[0+tmp1|0]=Larg1;
	__ZN8LinuxApp20retryCoreMessageImplEP7CoreCtxi(Larg0|0,tmp1);
}
function __ZN6cheerpL8date_nowEv$p2459(){
	return +Date.now();
}
function __ZN11MasterClock11realTimeoutEv(Larg0){
	var tmp0=0,tmp1=0;
	tmp1=__ZN11MasterClock14getMonotonicMsEv(Larg0|0)|0;
	__ZN11MasterClock14dispatchEventsEjj(Larg0|0,HEAP32[36+(HEAP32[12+(HEAP32[829214]|0)>>2]|0)>>2]|0,tmp1);
	tmp0=HEAP32[16+Larg0>>2]|0;
	if((tmp0|0)==((HEAP32[20+Larg0>>2]|0)|0)){
		console.log("Master clock: No events");
		return  -1|0;
	}
	tmp1=(HEAP32[tmp0>>2]|0)-tmp1|0;
	if((tmp1|0)>0)return tmp1|0;
	___assert_fail(2132788|0,2132804|0,47,2132864|0);
	;
}
function __ZZN4CMOS7getDataEvEN9CheerpTmp3RunEv(){
	return ~~ +new Date().getSeconds()|0;
}
function __ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_0v(){
	return ~~ +new Date().getMinutes()|0;
}
function __ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_1v(){
	return ~~ +new Date().getHours()|0;
}
function __ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_2v(){
	return ~~ +new Date().getDay()|0;
}
function __ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_3v(){
	return ~~ +new Date().getDate()|0;
}
function __ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_4v(){
	return ~~ +new Date().getMonth()|0;
}
function __ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_5v(){
	return ~~ +new Date().getFullYear()|0;
}
function __ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_6v(){
	return ~~ +new Date().getFullYear()|0;
}
function __ZN11MasterClock15performance_nowEv(){
	return +performance.now();
}
function __ZN6cheerpL8date_nowEv$p2546(){
	return +Date.now();
}
function __ZN9SystemCtx3RunEv(){
	__ZN11CoreManager12exitAndThrowEP8CoreDataNS_11EXIT_REASONE(HEAP32[12+(HEAP32[829214]|0)>>2]|0);
	;
}
function __ZN9VGADevice9setHeightEi(Larg0){
	var tmp0=null;
	tmp0={type:8, value: Larg0};
	postMessage(tmp0);
}
function __ZN9VGADevice13setRenderModeE15VGA_RENDER_MODE(Larg0){
	var tmp0=null;
	tmp0={type:6, value: Larg0};
	postMessage(tmp0);
}
function __ZN9VGADevice8setWidthEi(Larg0){
	var tmp0=null;
	tmp0={type:7, value: Larg0};
	postMessage(tmp0);
}
function __ZN6Floppy22scheduleAsyncReadWriteEv(Larg0){
	__ZN6Floppy17runAsyncReadWriteEPS_(Larg0|0);
}
function __ZN6Floppy17runAsyncReadWriteEPS_(Larg0){
	var tmp0=0,tmp1=0,L$poptgep$poptgep3$poptgepsqueezed=0,tmp3=0,tmp4=0,tmp5=0,tmp6=0,L$poptgepsqueezed26=0,tmp8=0,tmp9=null,L$poptgep$poptgep3$poptgep=0;
	tmp0=HEAP8[17+Larg0>>0]|0;
	if((tmp0&255)!==0){
		tmp1=HEAP8[16+Larg0>>0]|0;
		L$poptgep$poptgep3$poptgepsqueezed=20+Larg0|0;
		L$poptgep$poptgep3$poptgep=(__imul(HEAP8[18+Larg0>>0]&255,12)|0)+L$poptgep$poptgep3$poptgepsqueezed|0;
		tmp3=HEAP8[4+L$poptgep$poptgep3$poptgep>>0]|0;
		L$poptgep$poptgep3$poptgep=HEAP8[6+L$poptgep$poptgep3$poptgep>>0]|0;
		tmp4=HEAP8[15+Larg0>>0]|0;
		tmp5=HEAP32[48+Larg0>>2]|0;
		tmp6=HEAP8[3+tmp5>>0]|0;
		L$poptgepsqueezed26=52+Larg0|0;
		tmp8=(HEAP16[6+tmp5>>1]|0)+1&65535;
		__ZN13IOTransaction5startEP12AddressSpacejjb(L$poptgepsqueezed26,HEAP32[(HEAP32[829214]|0)>>2]|0,(HEAP8[2+tmp5>>0]&255)<<16|HEAP16[4+tmp5>>1]&65535,tmp8,((tmp6&12)===8?1:0)^1?1:0);
		HEAP8[12+Larg0>>0]=0;
		HEAP8[13+Larg0>>0]=7;
		HEAP8[4+Larg0>>0]=0;
		HEAP8[5+Larg0>>0]=0;
		HEAP8[6+Larg0>>0]=0;
		HEAP8[7+Larg0>>0]=0;
		HEAP8[8+Larg0>>0]=0;
		HEAP8[9+Larg0>>0]=0;
		HEAP8[10+Larg0>>0]=0;
		HEAP8[7+Larg0>>0]=HEAP8[16+Larg0>>0]|0;
		HEAP8[8+Larg0>>0]=HEAP8[15+Larg0>>0]|0;
		HEAP8[9+Larg0>>0]=(HEAP8[17+Larg0>>0]|0)+(tmp8+131071>>>9)|0;
		tmp9={type:((tmp6&12)===8?12|0:11|0),devId:(HEAP32[(__imul(HEAP8[18+Larg0>>0]&255,12)|0)+8+L$poptgep$poptgep3$poptgepsqueezed>>2]|0),start:(((__imul((__imul(tmp3&255,tmp1&255)|0)+(tmp4&255)|0,L$poptgep$poptgep3$poptgep&255)|0)+(tmp0&255)<<9)-512|0),len:tmp8,ioTransaction:(L$poptgepsqueezed26|0),value:(__ZNK13IOTransaction12getBufOffsetEv(L$poptgepsqueezed26)|0)};
		postMessage(tmp9);
		return;
	}
	___assert_fail(2133904|0,2136020|0,347,2133932|0);
	;
}
function __ZN13PS2Controller20mapKeyCodeToScanCodeEi(Larg0){
	var tmp0=0;
	tmp0=Larg0-48|0;
	if(tmp0>>>0<43)return HEAP8[tmp0+2121172>>0]|0;
	switch(Larg0|0){
		case 8:
		return 14|0;
		case 13:
		return 28|0;
		case 16:
		return 54|0;
		case 17:
		return 29|0;
		case 27:
		return 1|0;
		case 32:
		return 57|0;
		case 37:
		return 331|0;
		case 38:
		return 328|0;
		case 39:
		return 333|0;
		case 40:
		return 336|0;
		case 186:
		return 39|0;
		case 191:
		return 53|0;
		default:
		console.log("Support PS/2 scan code for keycode",Larg0);
		return 0|0;
	}
}
function __ZN13PS2Controller13handleKeyDownEj(Larg0,Larg1){
	var tmp0=0,L$poptgep$poptgep$poptgepsqueezed=null,tmp2=0;
	tmp0=__ZN13PS2Controller20mapKeyCodeToScanCodeEi(Larg1)|0;
	a:if((tmp0&65535)!==0){
		tmp2=HEAP8[9+Larg0>>0]|0;
		if((tmp0&65535)<256){
			tmp2=tmp2+1&7;
			if(tmp2===(HEAP8[8+Larg0>>0]&255))break a;
			HEAP8[(HEAP8[9+Larg0>>0]&255)+Larg0>>0]=tmp0;
			HEAP8[9+Larg0>>0]=tmp2;
		}else{
			if(((((tmp2&255)+8|0)-(HEAP8[8+Larg0>>0]&255)<<16>>16)%8&254)>5)break a;
			tmp2=HEAP8[9+Larg0>>0]|0;
			L$poptgep$poptgep$poptgepsqueezed=Larg0|0;
			HEAP8[(tmp2&255)+L$poptgep$poptgep$poptgepsqueezed>>0]=224;
			HEAP8[(tmp2+1&7)+L$poptgep$poptgep$poptgepsqueezed>>0]=tmp0;
			HEAP8[9+Larg0>>0]=tmp2+2&7;
		}
		__ZN10SystemData11scheduleIrqEjj(HEAP32[16+(HEAP32[829214]|0)>>2]|0,0,1);
		__ZN7CoreCtx8setStateENS_5STATEE(HEAP32[12+(HEAP32[829214]|0)>>2]|0,0);
	}
}
function __ZN13PS2Controller11handleKeyUpEj(Larg0,Larg1){
	var tmp0=0,tmp1=0,L$poptgep$poptgep$poptgepsqueezed=null,tmp3=0;
	tmp3=__ZN13PS2Controller20mapKeyCodeToScanCodeEi(Larg1)|0;
	a:if((tmp3&65535)!==0){
		tmp0=HEAP8[9+Larg0>>0]|0;
		tmp1=tmp3|128;
		if((tmp3&65535)<256){
			tmp3=tmp0+1&7;
			if(tmp3===(HEAP8[8+Larg0>>0]&255))break a;
			HEAP8[(HEAP8[9+Larg0>>0]&255)+Larg0>>0]=tmp1;
			HEAP8[9+Larg0>>0]=tmp3;
		}else{
			if(((((tmp0&255)+8|0)-(HEAP8[8+Larg0>>0]&255)<<16>>16)%8&254)>5)break a;
			tmp3=HEAP8[9+Larg0>>0]|0;
			L$poptgep$poptgep$poptgepsqueezed=Larg0|0;
			HEAP8[(tmp3&255)+L$poptgep$poptgep$poptgepsqueezed>>0]=224;
			HEAP8[(tmp3+1&7)+L$poptgep$poptgep$poptgepsqueezed>>0]=tmp1;
			HEAP8[9+Larg0>>0]=tmp3+2&7;
		}
		__ZN10SystemData11scheduleIrqEjj(HEAP32[16+(HEAP32[829214]|0)>>2]|0,0,1);
		__ZN7CoreCtx8setStateENS_5STATEE(HEAP32[12+(HEAP32[829214]|0)>>2]|0,0);
	}
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
	__ZN10__cxxabiv1L18uncaughtExceptionsE=(__ZN10__cxxabiv1L18uncaughtExceptionsE|0)+1|0;
	tmp0=Larg0.a4|0;
	tmp3=HEAP8;
	tmp1=HEAP32[4+tmp0>>2]|0;
	tmp3=_cheerpCreate_ZN6client6StringC2EPKc(tmp3,tmp1);
	tmp2=new CheerpException(tmp3);
	Larg0.a0=tmp2;
	throw tmp2;
	;
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
function ___cxa_uncaught_exceptions(){
	return __ZN10__cxxabiv1L18uncaughtExceptionsE|0;
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
	tmp0=typeof CHEERP_ENV == 'undefined' ? null : CHEERP_ENV;
	if(tmp0!==null)tmp0=typeof CHEERP_ENV == 'undefined' ? null : CHEERP_ENV;
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
	tmp0=2162512|0;
	tmp1=2162568|0;
	a:if((Larg1&255)<192){
		if((L$psink|0)===0){
			if(Larg1<<24<=-16777216)___assert_fail(2162580|0,tmp0,79,tmp1);
			;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp4;
		}else{
			if((tmp4&192|0)!==128)___assert_fail(2162492|0,tmp0,65,tmp1);
			;
			tmp4=(__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint<<6)+(tmp4&63)|0;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp4;
			L$psink=L$psink-1|0;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=L$psink;
			if((L$psink|0)!==0)break a;
		}
		__ZN12_GLOBAL__N_119CheerpStringBuilder15outputCodepointEj(Larg0,Marg0,tmp4);
	}else{
		if((L$psink|0)!==0)___assert_fail(2162436|0,tmp0,90,tmp1);
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
function __start(){
	var tmp0=0,tmp1=null;
	___memory_init();
	___cheerp_init_tls();
	___syscall_main_environ();
	__GLOBAL__I_000101();
	___ctor__ZN25CompiledInterpreterModule14handlersTablesE();
	tmp0=2189416;
	HEAP32[tmp0>>2]=0;
	HEAP32[4+tmp0>>2]=0;
	HEAP32[8+tmp0>>2]=0;
	HEAP32[12+tmp0>>2]=0;
	HEAP32[16+tmp0>>2]=0;
	HEAP32[20+tmp0>>2]=1;
	HEAP32[24+tmp0>>2]=0;
	tmp1=new Uint8Array(16);
	__ZN10Graphics3D9allocatorE$p1=tmp1;
	__ZN10Graphics3D9allocatorE$p2=16;
	tmp1=createArray_class$p_Z10Graphics3D(16);
	__ZN10Graphics3D9allocatorE$p0=tmp1;
	___ctor__ZN8LinuxApp16boundInetSocketsE();
	___ctor__ZN8LinuxApp16boundUnixSocketsE();
	___ctor__ZN8LinuxApp19boundNetlinkSocketsE();
	___ctor__ZN8LinuxApp12netlinkQueueE();
	___ctor__ZN8LinuxApp28boundNetlinkMulticastSocketsE();
	___ctor__ZN8LinuxApp11timezoneEnvE();
	___ctor__ZN8LinuxApp7evNodesE();
	___ctor__ZN8LinuxApp12blockDevicesE();
	___ctor__ZN8LinuxApp13providerIdMapE();
	___ctor__ZN8LinuxApp10inodeCacheE();
	__ZN18ExternalSocketNode15messageChannelsE=new Array();
}
function ___wrapper___ZL8read_envPcjj(Larg0,Larg1,Larg2){
	return (__ZL8read_envPcjj(HEAP8,Larg0>>0,Larg1,Larg2)|0)|0;
}
function ___wrapper___ZN14WriteToConsole2DoEPKc(Larg0){
	__ZN14WriteToConsole2DoEPKc(HEAP8,Larg0>>0);
}
function ___wrapper___ZN6cheerp11console_logIJPKcEEEvDpT_(Larg0){
	__ZN6cheerp11console_logIJPKcEEEvDpT_(HEAP8,Larg0>>0);
}
function ___wrapper___ZN13WasmGenerator13compileModuleEPKhj(Larg0,Larg1){
	__ZN13WasmGenerator13compileModuleEPKhj(HEAP8,Larg0>>0,Larg1);
}
function ___wrapper___ZZN18ExternalSocketImplI6STREAME16postIncomingDataEPKhjEN9CheerpTmp3RunEP18ExternalSocketNodeS3_j(Larg0,Larg1,Larg2){
	__ZZN18ExternalSocketImplI6STREAME16postIncomingDataEPKhjEN9CheerpTmp3RunEP18ExternalSocketNodeS3_j(Larg0|0,HEAP8,Larg1>>0,Larg2);
}
function ___wrapper___ZN8LinuxApp14handleMmapReadEj12CORE_MESSAGES0_jjPhj(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	__ZN8LinuxApp14handleMmapReadEj12CORE_MESSAGES0_jjPhj(Larg0,Larg1,Larg2,Larg3,Larg4,HEAP8,Larg5>>0);
}
function ___wrapper___ZN11ChunksCache14postBlindWriteE12CORE_MESSAGEjjPhj(Larg0,Larg1,Larg2,Larg3,Larg4){
	__ZN11ChunksCache14postBlindWriteE12CORE_MESSAGEjjPhj(Larg0,Larg1,Larg2,HEAP8,Larg3>>0,Larg4);
}
function ___wrapper___ZN8LinuxApp9getRandomEPhj(Larg0,Larg1){
	__ZN8LinuxApp9getRandomEPhj(HEAP8,Larg0>>0,Larg1);
}
function ___wrapper___ZN18CheerpOSFsProvider20postFsSymlinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjPKcj(Larg0,Larg1,Larg2,Larg3,Larg4){
	__ZN18CheerpOSFsProvider20postFsSymlinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjPKcj(Larg0,Larg1|0,Larg2,HEAP8,Larg3>>0,Larg4);
}
function ___wrapper___ZN11ConsoleNode16postConsoleWriteEPKhj(Larg0,Larg1,Larg2){
	__ZN11ConsoleNode16postConsoleWriteEPKhj(Larg0|0,HEAP8,Larg1>>0,Larg2);
}
function ___wrapper___ZZN18ExternalSocketImplI5DGRAME16postIncomingDataEPKhjRKN14SocketNodeBase12PacketSourceEEN9CheerpTmp3RunEP18ExternalSocketNodeS3_jS7_(Larg0,Larg1,Larg2,Larg3){
	__ZZN18ExternalSocketImplI5DGRAME16postIncomingDataEPKhjRKN14SocketNodeBase12PacketSourceEEN9CheerpTmp3RunEP18ExternalSocketNodeS3_jS7_(Larg0|0,HEAP8,Larg1>>0,Larg2,Larg3|0);
}
function ___wrapper___ZN17WasmGeneratorBase8dumpFileEPKcPKhj(Larg0,Larg1){
	__ZN17WasmGeneratorBase8dumpFileEPKcPKhj(HEAP8,Larg0>>0,Larg1);
}
var __ZN10Graphics3D9allocatorE$p1=nullArray;
var __ZN10Graphics3D9allocatorE$p2=0;
var __ZN10Graphics3D9allocatorE$p0=nullArray;
var __ZN18ExternalSocketNode15messageChannelsE=null;
var __ZN10__cxxabiv1L18uncaughtExceptionsE=0;
var __ZZN10__cxxabiv19Exception9allocatorEvE6result=null;
var __ZGVZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=0;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=null;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=0;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=0;
var __ZGVZL8read_envPcjjE14client_environ=0;
var __ZZL8read_envPcjjE14client_environ=null;
var __ZN8Debugger11curDisasStrE=null;
var __ZN25CompiledInterpreterModule18handlersWasmTablesE=createPointerArray([],0,72,null);
var __ZN17WasmGeneratorBase14moduleTemplateE=null;
var __ZN14AsmCompileBase24importPlaceholderFuncObjE=null;
var __ZN14CompiledModule9instancesE=null;
var __ZN12AddressSpace8selfPortE;
var __ZN10Graphics3D7boundIdE=0;
var __ZN8LinuxApp15pendingMessagesE=null;
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
function create__ZN18CheerpOSFsProvider9CacheNode11doListFilesEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjPFjP8CoreDataS6_jjRK9StringRefERj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider9CacheNode10doTruncateEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZNK18CheerpOSFsProvider9CacheNode13getBackingBufEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handleForkEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handleReadEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleCloseEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleChmodEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleWaitPidEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleAccessEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleUnlinkEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleMkdirEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handlePipeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI9cxTimeValEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleGetRUsageEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleSymlinkEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleMunmapEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleFchmodEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleStatFsEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16handleStatFsImplI6statfsEE4TaskIjEP7CoreCtxjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handleExitEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16handleSocketCallEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4ArgsEE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4ArgsL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_0EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_0L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_2EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_3L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handleLinkEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleRenameEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_4EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_5L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_6EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_6L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_7EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18partialWriteToAddrI16sockaddr_storageEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI6msghdrEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI6msghdrL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4CMsgL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIZNS_16handleSocketCallEP7CoreCtxE4CMsg_0EE4TaskIvER13CoreLockGuardI12AddressSpaceES2_jRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4CMsg_0L18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIZNS_16handleSocketCallEP7CoreCtxE8PipePairEE4TaskIvER13CoreLockGuardI12AddressSpaceES2_jRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIZNS_16handleSocketCallEP7CoreCtxE5ucredEE4TaskIvER13CoreLockGuardI12AddressSpaceES2_jRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args__13_EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args__14_L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args__16_EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args__16_L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp8waitImplEP7CoreCtxijbb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleCloneEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleNewUnameEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args__12_L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleLlseekEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIxL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleSelectEP7CoreCtxb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp19partialReadFromAddrI15__kernel_fd_setEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN8LinuxApp12handleSelectEP7CoreCtxbENK3$_0clER13CoreLockGuardI12AddressSpaceE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI9cxTimeValL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18partialWriteToAddrI15__kernel_fd_setEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleReadVEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args__15_EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleWriteVEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI5iovecL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16handleSchedYieldEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI20__kernel_sched_paramL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleNanoSleepEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handlePollEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN8LinuxApp10handlePollEP7CoreCtxENK3$_0clER13CoreLockGuardI12AddressSpaceE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI6pollfdL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E8PipePairL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI6pollfdEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI6pollfdL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handlePrctlEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp17handleRtSigReturnEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18sigReturnInternalsEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_9EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI11cxSigactionL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args__15_L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI11cxSigactionL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18partialWriteToAddrI7siginfoEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18handleRtSigSuspendEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args__13_L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIyEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIyL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleWriteEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handlePreadEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleGetRLimitEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13mmapInternalsEP7CoreCtxjjjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp17handleFtruncate64EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleStat64EP7CoreCtxb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleFstat64EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleChownEP7CoreCtxb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleGetGroupsEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleGetResGidEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp17handleRtSigActionEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16handleGetDents64EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI9user_descEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI9user_descEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14cloneInternalsEP7CoreCtxjjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleFutexEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIjEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIjL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleEPollCtlEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrISt5arrayIjLj3EEEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handlePwriteEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider7doChownEP7CoreCtxP9FileInodejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIhL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider7doMkdirEP7CoreCtxP9FileInodeRK9StringRefj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN8LinuxApp17handleExecRequestEOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEES9_jjRKSt5arrayIhLj64EERKS6_jjENK3$_0clEP7CoreCtxP10ProcessCtxS9_S9_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleSigReturnEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider12getRootInodeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider6doLinkEP7CoreCtxP9FileInodeS3_RK9StringRefS3_S6_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN19OffscreenCanvasNode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider6doFifoEP7CoreCtxP9FileInodeRK9StringRefj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalFsProvider7doChownEP7CoreCtxP9FileInodejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10ProcessCtx15acquireASLockRWEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN12TerminalNode16flushWriteBufferEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16DevPtsFsProvider6doOpenEP7CoreCtxRK20CachedNodeResolutionRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleUtimeNsAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7PtsNode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI9user_descL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8PtmxNode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10InodeCache8getInodeEP7CoreCtxRKN10FsProvider14PathComponentsEb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleGetResUidEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalFsProvider10checkMountEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16DevPtsFsProvider7doMkdirEP7CoreCtxP9FileInodeRK9StringRefj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleChdirEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalFsProvider15createFileInodeEP7CoreCtxR13CoreLockGuardIcEP9FileInodeRK9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_1EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args__10_EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI5DGRAME6doBindEP7CoreCtxP10ProcessCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider7doChmodEP7CoreCtxP9FileInodej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15stat64InternalsEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN25CheerpOSPreloadFsProvider12getRootInodeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9ProcInode11doListFilesEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjPFjP8CoreDataS5_jjRK9StringRefERj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_8L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider7doChownEP7CoreCtxP9FileInodejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleGetCwdEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handleBindEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider7doMkdirEP7CoreCtxP9FileInodeRK9StringRefj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider6doLinkEP7CoreCtxP9FileInodeS3_RK9StringRefS3_S6_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16DevPtsFsProvider10checkMountEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalFsProvider9doSymlinkEP7CoreCtxP9FileInodeRK9StringRefjPKc$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleWait4EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode16flushWriteBufferEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI5DGRAME11getPeerImplEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args__11_EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp24readNullTerminatedStringER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp19handleSymlinkAtImplEP7CoreCtxjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args__12_EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider6doFifoEP7CoreCtxP9FileInodeRK9StringRefj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider12createSocketEP7CoreCtxP9FileInodeRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16DevPtsFsProvider7doChmodEP7CoreCtxP9FileInodej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx11handleFaultER13CoreLockGuardI12AddressSpaceEj18MEMORY_ACCESS_MODE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider14findSpaceInDirEP7CoreCtxR10DeviceViewj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleMadviseEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI7cxIovecEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp19handleSetThreadAreaEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8NullNode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider12doUnixSocketEP7CoreCtxP9FileInodeRK9StringRefjP10SocketNode$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider12getRootInodeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp9handleBrkEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI6pollfdEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN19OffscreenCanvasNode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx23waitForFrontendResponseEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15unlinkInternalsEP7CoreCtxjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9Ext2Inode11doListFilesEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjPFjP8CoreDataS5_jjRK9StringRefERj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13pipeInternalsEP7CoreCtxjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp23handleSchedSetSchedulerEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider7doChmodEP7CoreCtxP9FileInodej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider15createFileInodeEP7CoreCtxR13CoreLockGuardIcEP9FileInodeRK9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13openInternalsEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14ProcFsProvider12getRootInodeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider8doUnlinkEP7CoreCtxP9FileInodeS3_RK9StringRefb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider12doUnixSocketEP7CoreCtxP9FileInodeRK9StringRefjP10SocketNode$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18getBoundUnixSocketEP7CoreCtxRKN10FsProvider14PathComponentsE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9Ext2Inode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18partialWriteToAddrI8cxRUsageEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI6STREAME11getPeerImplEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode7doWriteEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider13allocateBlockEP7CoreCtxR10DeviceViewjb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9FileInode11doListFilesEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjPFjP8CoreDataS5_jjRK9StringRefERj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode7doChmodEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp19handleRtSigProcMaskEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI9user_descL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalSocketNode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp20handleRtSigTimedWaitEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8CoreLockIcE6rwlockEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleSymlinkAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx5yieldEv$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider10unlinkImplEP7CoreCtxP9FileInodeR10DeviceViewS3_RK9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI9cxTimeValL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14dispatchSignalEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI19__kernel_itimerspecEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI11cxSigactionEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI6rlimitL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider15createFileInodeEP7CoreCtxR13CoreLockGuardIcEP9FileInodeRK9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_4L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handlePipe2EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN14Ext2FsProvider9freeInodeEP7CoreCtxP9FileInodeP5InodeENK3$_0clES1_PS_RSt3mapIjZNS_9freeInodeES1_S3_S5_E15FreedBlocksDataSt4lessIjE17TrackingAllocatorISt4pairIKjS9_EL7MEM_TAG2EEEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI19__kernel_itimerspecL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handleOpenEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handleTimeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalFsProvider12getRootInodeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleIoCtlEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN13SysFsProvider6doOpenEP7CoreCtxRK20CachedNodeResolutionRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider9freeInodeEP7CoreCtxP9FileInodeP5Inode$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider8doRenameEP7CoreCtxP9FileInodeS3_RK9StringRefS3_S3_S6_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZNK9Ext2Inode13getBackingBufEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14ProcFsProvider6doOpenEP7CoreCtxRK20CachedNodeResolutionRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI8sigeventEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleExitGroupEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp17mountStateMachineEP7CoreCtxR10MountState$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN15ElfLoadingState15runStateMachineEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN12SysDataInode7doWriteEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp17handleSendMsgImplER13CoreLockGuardI12AddressSpaceEP7CoreCtxjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleVForkEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIiEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14SocketNodeBase7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIZNS_15handleEPollWaitEP7CoreCtxE5EventEE4TaskIvER13CoreLockGuardI12AddressSpaceES2_jRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10RandomNode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode11doListFilesEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjPFjP8CoreDataS5_jjRK9StringRefERj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_1L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider26getInodeBitmapViewForGroupEP7CoreCtxP18Ext2GroupTableItem$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalFsProvider7doChmodEP7CoreCtxP9FileInodej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp19partialReadFromAddrISt5arrayIjLj24EEEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider6doOpenEP7CoreCtxRK20CachedNodeResolutionRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args__14_EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI6msghdrEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9FileInode7doWriteEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10FsProvider7doChmodEP7CoreCtxP9FileInodej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14SocketNodeBase16flushWriteBufferEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider12getInodeViewEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode8doStat64EP7CoreCtxR13CoreLockGuardI12AddressSpaceEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8CoreLockI12AddressSpaceE6rwlockEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10FsProvider7doChownEP7CoreCtxP9FileInodejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9Ext2Inode7doWriteEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN12TerminalNode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9Ext2Inode12cleanupInodeEP7CoreCtxP5Inode$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode10doTruncateEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16DevPtsFsProvider7doChownEP7CoreCtxP9FileInodejj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode6doReadEP7CoreCtxjR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13linkInternalsEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14SocketNodeBase7getPeerEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider6doOpenEP7CoreCtxRK20CachedNodeResolutionRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN11ChunksCache7getDataEP7CoreCtxjjRj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args__11_L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp21loadAddressSpaceRangeEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjj18MEMORY_ACCESS_MODE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN13SysFsProvider15createFileInodeEP7CoreCtxR13CoreLockGuardIcEP9FileInodeRK9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14ProcFsProvider15createFileInodeEP7CoreCtxR13CoreLockGuardIcEP9FileInodeRK9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14ProcFsProvider10checkMountEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN13SysFsProvider10checkMountEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleRmdirEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14InetSocketNodeI6STREAME9doConnectEP7CoreCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleStatFs64EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider21createOnDiskFileInodeEP7CoreCtxP9FileInodeRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create_class$p_ZSt18basic_stringstreamIcSt11char_traitsIcESaIcEE(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	a[2]=obj.a4;
	obj.a4.o=2;
	obj.a4.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI8rlimit64L18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider16lookupInodeInDirEP7CoreCtxP13Ext2InodeData9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI5iovecEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18getBoundUnixSocketEP7CoreCtxPK11sockaddr_unj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI7mmsghdrEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E5ucredL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14ProcFsProvider7doMkdirEP7CoreCtxP9FileInodeRK9StringRefj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI6STREAME7getPeerEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleOldMmapEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI6STREAME6doBindEP7CoreCtxP10ProcessCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN11ChunksCache8getChunkEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp22handleClockNanoSleep64EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_2L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16handleStatFsImplI8statfs64EE4TaskIjEP7CoreCtxjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN11BlockDevice7getViewEP7CoreCtxjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp20handleClockNanoSleepEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider9doSymlinkEP7CoreCtxP9FileInodeRK9StringRefjPKc$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider15doFsOpenRequestEP7CoreCtxRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14SocketNodeBase18copyIoVecsToBufferERSt6vectorIhSaIhEEP7CoreCtxR13CoreLockGuardI12AddressSpaceEP7cxIovecj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider10checkMountEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16handleSendToImplER13CoreLockGuardI12AddressSpaceEP7CoreCtxjjjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIhL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI8sigeventL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN5Inode12cleanupInodeEP7CoreCtxPS_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15accessInternalsEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9Ext2Inode12getHardLinksEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleFchownAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN13ProcFileInode7doWriteEP7CoreCtxR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider18blockInodeToGlobalEP7CoreCtxP13Ext2InodeDataj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider16lookupEntryInDirEP7CoreCtxP13Ext2InodeData9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp15handleEPollWaitEPS_E5EventL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args__10_L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx13waitForEventsEd$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN14Ext2FsProvider9freeInodeEP7CoreCtxP9FileInodeP5InodeENK3$_1clES1_PS_RSt3mapIjZNS_9freeInodeES1_S3_S5_E15FreedBlocksDataSt4lessIjE17TrackingAllocatorISt4pairIKjS9_EL7MEM_TAG2EEEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleFchmodAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider12getFreeInodeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI8rlimit64EE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider8doUnlinkEP7CoreCtxP9FileInodeS3_RK9StringRefb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN8LinuxApp19handleConnectToPortEjjENK3$_0clEP7CoreCtxP18ExternalSocketNodei$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider10checkMountEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16execStateMachineEP7CoreCtxR15ElfLoadingState$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9Ext2Inode10doTruncateEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16DevPtsFsProvider15createFileInodeEP7CoreCtxR13CoreLockGuardIcEP9FileInodeRK9StringRef$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN8LinuxApp17handleBindWrapperEP7CoreCtxj12LinearBufferENK3$_0clES1_jS2_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18nanoSleepInternalsI12cxTimeSpec64EE4TaskIjEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleRenameAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9Ext2Inode8doStat64EP7CoreCtxR13CoreLockGuardI12AddressSpaceEj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider9CacheNode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN12TerminalNode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider12getBlockViewEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10FsProvider6doOpenEP7CoreCtxRK20CachedNodeResolutionRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI6rlimitEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10InodeCache16resolveCacheNodeEP7CoreCtxRKN10FsProvider14PathComponentsEb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10MountState15runStateMachineEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI12cxTimeSpec64EE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI11cxSigactionEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9Ext2Inode6doReadEP7CoreCtxjR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN8LinuxApp18handleMountRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_jENK3$_0clEP7CoreCtxS7_S7_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN8LinuxApp20retryCoreMessageImplEP7CoreCtxiENK3$_0clES1_i$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN13SysFsProvider12getRootInodeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create_class$p_Z9EPollNode(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a12;
	obj.a12.o=1;
	obj.a12.a=a;
	return obj;}
function create__ZN8LinuxApp10handleBindEP10ProcessCtxP7CoreCtxjP16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalFsProvider6doOpenEP7CoreCtxRK20CachedNodeResolutionRK9StringRefjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14InetSocketNodeI5DGRAME9doConnectEP7CoreCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider12getFreeBlockEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN17NlRouteSocketNode9doSendMsgEP7CoreCtxR13CoreLockGuardI12AddressSpaceEP7cxIovecjOSt6vectorIN14SocketNodeBase7AuxDataE17TrackingAllocatorISA_L7MEM_TAG1EEERKNS9_12PacketSourceEPK6msghdr$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18handleGetTimeOfDayEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18NlUeventSocketNode9doSendMsgEP7CoreCtxR13CoreLockGuardI12AddressSpaceEP7cxIovecjOSt6vectorIN14SocketNodeBase7AuxDataE17TrackingAllocatorISA_L7MEM_TAG1EEERKNS9_12PacketSourceEPK6msghdr$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14InetSocketNodeI5DGRAME6doBindEP7CoreCtxP10ProcessCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14InetSocketNodeI5DGRAME9doSendMsgEP7CoreCtxR13CoreLockGuardI12AddressSpaceEP7cxIovecjOSt6vectorIN14SocketNodeBase7AuxDataE17TrackingAllocatorISC_L7MEM_TAG1EEERKNSB_12PacketSourceEPK6msghdr$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create_class$p_ZSt14basic_iostreamIcSt11char_traitsIcEE(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	a[2]=obj.a3;
	obj.a3.o=2;
	obj.a3.a=a;
	return obj;}
function create__ZN14InetSocketNodeI6STREAME6doBindEP7CoreCtxP10ProcessCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14InetSocketNodeI6STREAME9doSendMsgEP7CoreCtxR13CoreLockGuardI12AddressSpaceEP7cxIovecjOSt6vectorIN14SocketNodeBase7AuxDataE17TrackingAllocatorISC_L7MEM_TAG1EEERKNSB_12PacketSourceEPK6msghdr$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI6STREAME9doConnectEP7CoreCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI6STREAME9doSendMsgEP7CoreCtxR13CoreLockGuardI12AddressSpaceEP7cxIovecjOSt6vectorIN14SocketNodeBase7AuxDataE17TrackingAllocatorISC_L7MEM_TAG1EEERKNSB_12PacketSourceEPK6msghdr$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrI10cxTimeSpecEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider26getBlockBitmapViewForGroupEP7CoreCtxP18Ext2GroupTableItem$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10SocketImplI6STREAME6doReadEP7CoreCtxjR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_7L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI5DGRAME9doConnectEP7CoreCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI5DGRAME9doSendMsgEP7CoreCtxR13CoreLockGuardI12AddressSpaceEP7cxIovecjOSt6vectorIN14SocketNodeBase7AuxDataE17TrackingAllocatorISC_L7MEM_TAG1EEERKNSB_12PacketSourceEPK6msghdr$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10SocketImplI5DGRAME6doReadEP7CoreCtxjR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider9doSymlinkEP7CoreCtxP9FileInodeRK9StringRefjPKc$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp17handleClockGetResEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleEPollWaitEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp10handleMmapEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN13ProcFileInode6doReadEP7CoreCtxjR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI12cxTimeSpec64L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp17handleTimerCreateEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI7mmsghdrL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp19partialReadFromAddrI16sockaddr_storageEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleUnlinkAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleSendToEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14mkdirInternalsEP7CoreCtxjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleConnectEP7CoreCtxP10ProcessCtxjP16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI6msghdrL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp19partialReadFromAddrI12sockaddr_bufEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp16handleSocketCallEPS_E4Args_9L18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalSocketNode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx11handleFaultEj18MEMORY_ACCESS_MODE$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleConnectEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleMremapEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleOpenAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleGetRandomEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleExecveEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI7mmsghdrL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_8EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI7mmsghdrEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleFchownEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI7cxIovecL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIyL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleSendMMsgEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN17NetlinkSocketNode6doBindEP7CoreCtxP10ProcessCtxPK16sockaddr_storagej$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIjL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14handleReadLinkEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIjEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11handleMknodEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIZNS_16handleSocketCallEP7CoreCtxE4CMsgEE4TaskIvER13CoreLockGuardI12AddressSpaceES2_jRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN12CoreLockBase4lockEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp20handleNameToHandleAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN16DevPtsFsProvider12getRootInodeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18InternalFsProvider7doMkdirEP7CoreCtxP9FileInodeRK9StringRefj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handlePrlimit64EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp17readLinkInternalsEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_3EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create_class$p_Z11InotifyNode(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a18;
	obj.a18.o=1;
	obj.a18.a=a;
	a[2]=obj.a20;
	obj.a20.o=2;
	obj.a20.a=a;
	return obj;}
function create__ZN8LinuxApp15acceptInternalsEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI20__kernel_sched_paramEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8NullNode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16resolveCacheNodeEP7CoreCtxRKN10FsProvider14PathComponentsEb$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIZNS_13pipeInternalsEP7CoreCtxjjE4PipeEE4TaskIvER13CoreLockGuardI12AddressSpaceES2_jRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIZN8LinuxApp13pipeInternalsEPS_jjE4PipeL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI9cxTimeValEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIyEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9EventNode6doReadEP7CoreCtxjR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9FileInode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleFaccessAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14chmodInternalsEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp16handleReadLinkAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleLinkAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15renameInternalsEP7CoreCtxjjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14Ext2FsProvider8doRenameEP7CoreCtxP9FileInodeS3_RK9StringRefS3_S3_S6_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleFstatAt64EP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleSyscallEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN15ElfLoadingState7readAllEP7CoreCtxP8FileDescPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp13handleMkdirAtEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrISt5arrayIjLj3EEL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp14chownInternalsEP7CoreCtxjjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8FifoNode12cleanupInodeEP7CoreCtxP5Inode$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp15handleSetGroupsEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN9EventNode7doWriteEP7CoreCtxPKhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp21handleInotifyAddWatchEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp11writeToAddrIxEE4TaskIvER13CoreLockGuardI12AddressSpaceEP7CoreCtxjRKT_$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN10SocketImplI6STREAME9doSendMsgEP7CoreCtxR13CoreLockGuardI12AddressSpaceEP7cxIovecjOSt6vectorIN14SocketNodeBase7AuxDataE17TrackingAllocatorISC_L7MEM_TAG1EEERKNSB_12PacketSourceEPK6msghdr$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18handleTimerSetTimeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI10cxTimeSpecL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12handleUtimesEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN14UnixSocketNodeI5DGRAME7getPeerEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrI10cxTimeSpecL18MEMORY_ACCESS_MODE1ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrI10cxTimeSpecEE4TaskIT_ER13CoreLockGuardI12AddressSpaceEP7CoreCtxj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN18CheerpOSFsProvider9CacheNode6doReadEP7CoreCtxjPhjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp12readFromAddrIZNS_16handleSocketCallEP7CoreCtxE4Args_5EE4TaskIT_ER13CoreLockGuardI12AddressSpaceES2_j$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN12SysDataInode6doReadEP7CoreCtxjR13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18nanoSleepInternalsI10cxTimeSpecEE4TaskIjEP7CoreCtxjjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN8LinuxApp18handleClockGetTimeEP7CoreCtx$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZN7CoreCtx19getTypedPtrFromAddrIiL18MEMORY_ACCESS_MODE2ELj2EEE4TaskIPT_ER13CoreLockGuardI12AddressSpaceEjjj$pFrame(obj){
	var a=[];
	a[0]=obj;
	obj.o=0;
	obj.a=a;
	a[1]=obj.a2;
	obj.a2.o=1;
	obj.a2.a=a;
	return obj;}
function create__ZZN8LinuxApp15handleEPollWaitEP7CoreCtxENK3$_0clER13CoreLockGuardI12AddressSpaceE$pFrame(obj){
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
function createArray_class$p_Z10Graphics3D(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={a0:null,a1:null,a2:null,a3:null,a4:null,i5:0};
	return r;
}
function resizeArray_class$p_Z10Graphics3D(r,s,e){
	for(var i=s;i<e;i++)
	r[i]={a0:null,a1:null,a2:null,a3:null,a4:null,i5:0};
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
var HEAP8=null,HEAP16=null,HEAP32=null,HEAPF32=null,HEAPF64=null,__asm=null,__heap=null;function __dummy(){throw new Error('this should be unreachable');};
var memory=new WebAssembly.Memory({initial:16384,maximum:16384,shared:true});
var _cxCoreInit=null;
var _dumpValue=null;
var ___memory_init=null;
var ___cheerp_init_tls=null;
var ___syscall_main_environ=null;
var __GLOBAL__I_000101=null;
var ___ctor__ZN25CompiledInterpreterModule14handlersTablesE=null;
var ___ctor__ZN8LinuxApp16boundInetSocketsE=null;
var ___ctor__ZN8LinuxApp16boundUnixSocketsE=null;
var ___ctor__ZN8LinuxApp19boundNetlinkSocketsE=null;
var ___ctor__ZN8LinuxApp12netlinkQueueE=null;
var ___ctor__ZN8LinuxApp28boundNetlinkMulticastSocketsE=null;
var ___ctor__ZN8LinuxApp11timezoneEnvE=null;
var ___ctor__ZN8LinuxApp7evNodesE=null;
var ___ctor__ZN8LinuxApp12blockDevicesE=null;
var ___ctor__ZN8LinuxApp13providerIdMapE=null;
var ___ctor__ZN8LinuxApp10inodeCacheE=null;
var ___assert_fail=null;
var __ZNK12AddressSpace4dumpEv=null;
var __ZNK12AddressSpace5checkEv=null;
var __ZN12AddressSpace19getTypedPtrFromAddrIjL18MEMORY_ACCESS_MODE1ELj2EEEPT_jjj=null;
var __ZN8Debugger11getInstanceEv=null;
var __ZNK12AddressSpace12getChunkBaseEj=null;
var __Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej=null;
var __ZN17WasmGeneratorBase23compileDispatcherModuleEjP22CompiledHandlersTables14MAIN_LOOP_TYPE=null;
var __ZNK10BinaryCode9getLinearEj=null;
var __ZNK10BinaryCode10LinearCode6getBufEv=null;
var __ZN10BinaryCode10LinearCodeD2Ev=null;
var __ZN17WasmGeneratorBase12getImportPtrE11WasmImports=null;
var __ZN9CodeTrace12freeWasmCodeEv=null;
var __ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev=null;
var __ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev=null;
var __ZNSt23__forward_list_iteratorIPSt19__forward_list_nodeIP14CompiledModulePvEEppB7v160000Ev=null;
var __ZN19RefCountedBufferPtraSEP16RefCountedBuffer=null;
var __ZN14CompiledModule6decRefEv=null;
var __ZNKSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE4sizeB7v160000Ev=null;
var __ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEEixB7v160000Em=null;
var __ZN14AsmCompileBase14freeTableEntryEj=null;
var ___printf=null;
var __ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev=null;
var __ZNKSt11__wrap_iterIPP9CodeTraceEmiB7v160000El=null;
var __ZN20WasmGeneratorUtility11insertTraceEP9CodeTrace=null;
var __Znwj=null;
var __ZN14FreeTableEntryC2Ejj=null;
var __ZdlPv=null;
var __ZN19RefCountedBufferPtraSERKS_=null;
var __ZNSt11__wrap_iterIPP9CodeTraceEppB7v160000Ev=null;
var __ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev=null;
var __ZN25CompiledInterpreterModule16addAggregateCodeEON10BinaryCode10LinearCodeE=null;
var __ZNKSt6vectorIN25CompiledInterpreterModule11HandlerDataESaIS1_EE4sizeB7v160000Ev=null;
var __ZNK24ImportantBitsForDispatch21doesMaskFitInTwoBytesEv=null;
var __ZN12AddressSpace15initializeCacheEv=null;
var __ZN8LinuxApp21cleanupExitingThreadsEv=null;
var __ZN8LinuxApp12chooseThreadEd=null;
var __ZN10InodeCache15freeExpiredNodeEj=null;
var __ZN17WasmGeneratorBase21compileOneTraceToWasmEj=null;
var __ZN8LinuxApp15scheduleAppImplEP7CoreCtx=null;
var __ZN17WasmGeneratorBase20compilePendingTracesEb=null;
var __Z11getStackPtrv=null;
var __Z11setStackPtrj=null;
var __Z8debuggerv=null;
var __Z12caInterpFromP8CoreDataP12AddressSpacej=null;
var __ZN8LinuxApp22preciseInterpreterImplEP12AddressSpaceP8CoreData=null;
var __ZN10SystemData11scheduleIrqEjj=null;
var __ZN7CoreCtx8setStateENS_5STATEE=null;
var __ZN6Floppy28getFloppyTypeFromImageLengthEj=null;
var __ZN10SystemData13setFloppyTypeEiN6Floppy11FLOPPY_TYPEE=null;
var __ZN8LinuxApp19handleFsCloseResultEj=null;
var __ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEEC2B7v160000Ev=null;
var __ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEE12emplace_backIJS5_EEERS5_DpOT_=null;
var __ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev=null;
var __ZNSt5arrayIhLj64EEixB7v160000Ej=null;
var __ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000Ev=null;
var __ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEaSB7v160000EOS4_=null;
var __ZN8LinuxApp17handleExecRequestEOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEES9_jjRKSt5arrayIhLj64EERKS6_jj=null;
var __ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEED2B7v160000Ev=null;
var __ZN8Debugger11getCtxForIdE12CONTEXT_TYPEj=null;
var __ZN9HashTableI9CodeTraceE9findEntryEj=null;
var __ZN20WasmGeneratorUtility12dumpOneTraceEP12AddressSpaceP9CodeTrace=null;
var __ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000IDnEEPKc=null;
var __ZN10ProcessCtx6createEPS_RKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE=null;
var __ZN8LinuxApp16handleSocketImplEP10ProcessCtxjjj=null;
var __ZN7CoreCtx3logEPKcz=null;
var __ZN12LinearBufferC2Ej=null;
var __ZN12LinearBuffer9getBufferI16sockaddr_storageEEPT_v=null;
var __ZN12LinearBufferC2EOS_=null;
var __ZN8LinuxApp17handleBindWrapperEP7CoreCtxj12LinearBuffer=null;
var __ZN12LinearBufferD2Ev=null;
var __ZNK10ProcessCtx11getFileDescEj=null;
var __ZN5Inode10canReadFwdEv=null;
var __ZN16CoreInodeWatcher10addWatchedEP5Inode=null;
var __ZN8LinuxApp12handleAcceptEP7CoreCtxP10SocketNode=null;
var __ZN8FileDesc3getEP5Inodej=null;
var __ZN13FileDescEntryC2EP8FileDescj=null;
var __ZN10ProcessCtx11addFileDescERK13FileDescEntryj=null;
var __ZNKSt6vectorI13FileDescEntry17TrackingAllocatorIS0_L7MEM_TAG1EEE4sizeB7v160000Ev=null;
var __ZN8FileDesc6decRefEv=null;
var __ZN13FileDescEntry5clearEv=null;
var __ZN8LinuxApp14getConsoleNodeEj=null;
var __ZN12TerminalNode8pushCharEj=null;
var __ZN7KmsNode7setSizeEjj=null;
var __ZN8LinuxApp13handleEvMouseE13EV_MOUSE_TYPEjiid=null;
var __ZN8LinuxApp11handleEvKeyE11EV_KEY_TYPEjd=null;
var __ZN8LinuxApp15setTimerHandlerEv=null;
var __ZN8LinuxApp14setTimezoneEnvEi=null;
var __ZN16InterpPrimitives19InitializeMainTableILi32EEEvv=null;
var __ZN8LinuxApp18handleMountRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_j=null;
var __ZN8LinuxApp19handleDeviceRequestEjj=null;
var __ZN8LinuxApp19handleConnectToPortEjj=null;
var __ZN13IOTransaction6finishEv=null;
var __ZN13EventsHandler16registerCallbackE15CORE_EVENT_TYPE=null;
var __ZN13EventsHandler18unregisterCallbackE15CORE_EVENT_TYPE=null;
var __ZN8LinuxApp18handleFsCreateFileEjjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE=null;
var __ZN18ExternalSocketNode11shutdownFwdEv=null;
var __ZN12LinearBuffer9getBufferIhEEPT_v=null;
var __ZN8LinuxApp14handleSysWriteEP14SocketNodeBaseR12LinearBuffer=null;
var __ZNSt6vectorIhSaIhEE6resizeEj=null;
var __ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev=null;
var __ZNSsD2Ev=null;
var __ZNSsC2B7v160000Ev=null;
var __ZNSs9push_backEc=null;
var __ZN13WasmGeneratorC2Ev=null;
var __ZN13WasmGenerator14emitBaseHeaderEv=null;
var __ZN13WasmGeneratorD2Ev=null;
var __ZN13WasmGenerator17emitGenericHeaderEjjjj=null;
var __ZN13WasmGenerator15emitCodeSectionEj=null;
var __ZN13WasmGenerator16emitFixableInt32Ev=null;
var __ZN13WasmGenerator17emitEmptyFunctionEv=null;
var __ZN13WasmGenerator14controlFlowEndEv=null;
var __ZN13WasmGenerator13FixupLocation6commitEv=null;
var __ZN25CompiledInterpreterModuleD2Ev=null;
var __ZN10BinaryCode10LinearCode10deallocateEv=null;
var __ZN8LinuxApp20retryCoreMessageImplEP7CoreCtxi=null;
var __ZN18ExternalSocketNode3getI5DGRAMEEPS_bjjj=null;
var __ZN14SocketNodeBase7setPeerEPS_=null;
var __ZN14SocketNodeBase12PacketSourceC2Ejj=null;
var __ZZZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEvENK3$_0clEPN6client12MessageEventIPNS3_6ObjectEEEEN10SendLinear3runEP14SocketNodeBaseRK12LinearBufferRKNSA_12PacketSourceE=null;
var __ZN11DebuggerCtxC2EP7CoreCtx12CONTEXT_TYPEj=null;
var __ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE9push_backB7v160000EOS0_=null;
var __ZN11CoreManager12exitAndThrowEP8CoreDataNS_11EXIT_REASONE=null;
var __ZN18ExternalSocketNode3getI6STREAMEEPS_bjjj=null;
var __ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE6resizeB7v160000Em=null;
var __ZN18CheerpOSFsProvider13listCacheNodeEjjOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEE=null;
var __ZN8LinuxApp16getProviderForIdEj=null;
var __ZN10FsProvider14PathComponentsC2Ev=null;
var __ZN9StringRefC2ERKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE=null;
var __ZN10FsProvider14PathComponents7addPathERK9StringRef=null;
var __ZNKSt6vectorI9StringRef17TrackingAllocatorIS0_L7MEM_TAG2EEE4sizeB7v160000Ev=null;
var __ZN10InodeCache15lookupCacheNodeERK7InodeIdj=null;
var __ZN9StringRefaSERKS_=null;
var __ZN18CheerpOSFsProvider9CacheNode3getEPS_RK7InodeIdS4_jjjRK9StringRefjjj=null;
var __ZN10InodeCache12addNodeToMapERK7InodeIdP9FileInode=null;
var __ZN5Inode6incRefEv=null;
var __ZN5Inode6decRefEv=null;
var __ZN10InodeCache13addCachedNodeEP9FileInodeRK9StringRefRK7InodeId=null;
var __ZNKSt6vectorIP6DEntry17TrackingAllocatorIS1_L7MEM_TAG8EEE4sizeB7v160000Ev=null;
var __ZN10FsProvider14PathComponentsD2Ev=null;
var __ZN10InodeCache14dirNameForNodeEPK9FileInodeP10FsProvider=null;
var __ZN9StringRefC2EPKc=null;
var __ZN11ChunksCacheC2Ej12CORE_MESSAGES0_=null;
var __ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE5beginB7v160000Ev=null;
var __ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE3endB7v160000Ev=null;
var __ZNSt11__wrap_iterIP11DebuggerCtxEppB7v160000Ev=null;
var __ZN8CoreData23writeGrpsToGlobalMemoryEv=null;
var __ZN10SystemData13doPendingIrqsEP8CoreDataj=null;
var __Z14caInterpFrom16P8CoreDataP12AddressSpacej=null;
var __ZN8CoreData22readGrpsToGlobalMemoryEv=null;
var __ZN11CoreManagernwEj=null;
var __ZN9SystemCtxC2Ev=null;
var __ZN12AddressSpace17createMemoryChunkEjjj=null;
var __ZN10APICDeviceC2Ev=null;
var __ZN12AddressSpace17createMemoryChunkEjjP12MemoryBufferjP5InodejP15MemMappedDevice=null;
var __ZN12MemoryBuffer12allocateAnonEj=null;
var __ZN10SystemDataC2EP8CoreDataP12AddressSpacejjd=null;
var __ZN11MasterClock15initGlobalTimerEv=null;
var __ZN9VGADevice9setRomBufEP12MemoryBuffer=null;
var __ZN9VGADevice9setRamBufEP12MemoryBuffer=null;
var __ZN11MasterClock14getMonotonicMsEv=null;
var __ZN11MasterClock14dispatchEventsEjj=null;
var __ZN13IDEController16startTransactionEv=null;
var __ZNK13IOTransaction12getBufOffsetEv=null;
var __ZN13IDEController11resetBufferEj=null;
var __ZN13IOTransaction5startEP12AddressSpacejjb=null;
var ___getStackPtr=null;
var ___setStackPtr=null;
var cxCoreInit=__dummy;
var dbgDisassemblyAt=__dummy;
var dbgDumpAddressSpace=__dummy;
var dbgDumpMem=__dummy;
var dbgDumpThreads=__dummy;
var dumpValue=__dummy;
__dummy.promise=
fetchBuffer('cxcore.wasm').then(tmp0=>
WebAssembly.instantiate(tmp0,
{i:{
		memory:memory,
		___cxa_throw_wasm_adapter:___cxa_throw_wasm_adapter,
		__ZN12_GLOBAL__N_117do_syscall_writevEPK5iovecl:__ZN12_GLOBAL__N_117do_syscall_writevEPK5iovecl,
		__ZN12_GLOBAL__N_111raiseSignalEv:__ZN12_GLOBAL__N_111raiseSignalEv,
		___wrapper___ZN17WasmGeneratorBase8dumpFileEPKcPKhj:___wrapper___ZN17WasmGeneratorBase8dumpFileEPKcPKhj,
		__ZN22CompiledHandlersTables21allocateTableInternalEjj14MAIN_LOOP_TYPE:__ZN22CompiledHandlersTables21allocateTableInternalEjj14MAIN_LOOP_TYPE,
		__ZN13WasmGenerator27compileDispatcherModuleSyncEjP22CompiledHandlersTables14MAIN_LOOP_TYPE:__ZN13WasmGenerator27compileDispatcherModuleSyncEjP22CompiledHandlersTables14MAIN_LOOP_TYPE,
		__ZN9CodeTrace10freeModuleEbbb:__ZN9CodeTrace10freeModuleEbbb,
		__ZN14CompiledModule17clearWasmInstanceEv:__ZN14CompiledModule17clearWasmInstanceEv,
		__ZN13WasmGenerator8debuggerEj:__ZN13WasmGenerator8debuggerEj,
		___wrapper___ZZN18ExternalSocketImplI5DGRAME16postIncomingDataEPKhjRKN14SocketNodeBase12PacketSourceEEN9CheerpTmp3RunEP18ExternalSocketNodeS3_jS7_:___wrapper___ZZN18ExternalSocketImplI5DGRAME16postIncomingDataEPKhjRKN14SocketNodeBase12PacketSourceEEN9CheerpTmp3RunEP18ExternalSocketNodeS3_jS7_,
		__ZN8Debugger10appendInstEPKc:__ZN8Debugger10appendInstEPKc,
		___wrapper___ZN11ConsoleNode16postConsoleWriteEPKhj:___wrapper___ZN11ConsoleNode16postConsoleWriteEPKhj,
		__ZN6cheerpL8date_nowEv:__ZN6cheerpL8date_nowEv,
		__ZN12AddressSpace17notifyWorkerClockEjb:__ZN12AddressSpace17notifyWorkerClockEjb,
		__ZN13WasmGenerator23compileTracesModuleSyncEv:__ZN13WasmGenerator23compileTracesModuleSyncEv,
		___wrapper___ZN18CheerpOSFsProvider20postFsSymlinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjPKcj:___wrapper___ZN18CheerpOSFsProvider20postFsSymlinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjPKcj,
		__ZN6cheerpL8date_nowEv$p1509:__ZN6cheerpL8date_nowEv$p1509,
		__ZNK25CompiledInterpreterModule11HandlerData14setAllHandlersEj:__ZNK25CompiledInterpreterModule11HandlerData14setAllHandlersEj,
		__ZN13WasmGenerator28compileInterpreterModuleSyncEP25CompiledInterpreterModule:__ZN13WasmGenerator28compileInterpreterModuleSyncEP25CompiledInterpreterModule,
		__ZN13WasmGenerator29compileInterpreterModuleAsyncEP25CompiledInterpreterModule:__ZN13WasmGenerator29compileInterpreterModuleAsyncEP25CompiledInterpreterModule,
		__ZN11CheerpXCore10initializeEv:__ZN11CheerpXCore10initializeEv,
		__ZN8LinuxApp14runInterpreterEP7CoreCtx:__ZN8LinuxApp14runInterpreterEP7CoreCtx,
		__ZN6cheerpL8date_nowEv$p1295:__ZN6cheerpL8date_nowEv$p1295,
		__ZN14CompiledModule18clearImportedTraceEP9CodeTrace:__ZN14CompiledModule18clearImportedTraceEP9CodeTrace,
		__ZN8LinuxApp21runPreciseInterpreterEP7CoreCtx:__ZN8LinuxApp21runPreciseInterpreterEP7CoreCtx,
		__ZN8LinuxApp14updateWakeTimeEddj:__ZN8LinuxApp14updateWakeTimeEddj,
		__ZN8Debugger21postUnregisterMessageE12CONTEXT_TYPEj:__ZN8Debugger21postUnregisterMessageE12CONTEXT_TYPEj,
		__ZN8LinuxApp19getProcessCtxForPidEj:__ZN8LinuxApp19getProcessCtxForPidEj,
		__ZN8LinuxApp22postProcessExitMessageEjj:__ZN8LinuxApp22postProcessExitMessageEjj,
		__ZZN8LinuxApp18handleFsCreateFileEjjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEEN9CheerpTmp3RunEjj:__ZZN8LinuxApp18handleFsCreateFileEjjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEEN9CheerpTmp3RunEjj,
		__ZZN8LinuxApp19handleConnectToPortEjjEN9CheerpTmp3RunEj:__ZZN8LinuxApp19handleConnectToPortEjjEN9CheerpTmp3RunEj,
		__ZN18ExternalSocketImplI6STREAME22initMessageChannelImplEv:__ZN18ExternalSocketImplI6STREAME22initMessageChannelImplEv,
		__ZZZN8LinuxApp19handleConnectToPortEjjENK3$_0clEP7CoreCtxP18ExternalSocketNodeiEN9CheerpTmp3RunEjS4_:__ZZZN8LinuxApp19handleConnectToPortEjjENK3$_0clEP7CoreCtxP18ExternalSocketNodeiEN9CheerpTmp3RunEjS4_,
		__ZN12AddressSpace13scheduleLaterEv:__ZN12AddressSpace13scheduleLaterEv,
		___wrapper___ZN8LinuxApp9getRandomEPhj:___wrapper___ZN8LinuxApp9getRandomEPhj,
		__ZZN18ExternalSocketNode12disconnectedEvEN9CheerpTmp3RunEPS_:__ZZN18ExternalSocketNode12disconnectedEvEN9CheerpTmp3RunEPS_,
		__ZN18ExternalSocketNode18freeMessageChannelEj:__ZN18ExternalSocketNode18freeMessageChannelEj,
		__ZN8LinuxApp13postSysResultEjj:__ZN8LinuxApp13postSysResultEjj,
		__ZN6cheerpL8date_nowEv$p1892:__ZN6cheerpL8date_nowEv$p1892,
		___cxa_uncaught_exceptions:___cxa_uncaught_exceptions,
		___wrapper___ZN11ChunksCache14postBlindWriteE12CORE_MESSAGEjjPhj:___wrapper___ZN11ChunksCache14postBlindWriteE12CORE_MESSAGEjjPhj,
		__ZN6cheerpL8date_nowEv$p1731:__ZN6cheerpL8date_nowEv$p1731,
		___wrapper___ZN8LinuxApp14handleMmapReadEj12CORE_MESSAGES0_jjPhj:___wrapper___ZN8LinuxApp14handleMmapReadEj12CORE_MESSAGES0_jjPhj,
		__ZN7KmsNode21postDumbBufferDestroyEv:__ZN7KmsNode21postDumbBufferDestroyEv,
		__ZN7KmsNode21postDumbBufferScanoutEjjj:__ZN7KmsNode21postDumbBufferScanoutEjjj,
		__ZN7KmsNode20postDumbBufferUpdateEv:__ZN7KmsNode20postDumbBufferUpdateEv,
		___wrapper___ZZN18ExternalSocketImplI6STREAME16postIncomingDataEPKhjEN9CheerpTmp3RunEP18ExternalSocketNodeS3_j:___wrapper___ZZN18ExternalSocketImplI6STREAME16postIncomingDataEPKhjEN9CheerpTmp3RunEP18ExternalSocketNodeS3_j,
		__ZL16allocateGraphicsv:__ZL16allocateGraphicsv,
		__ZN10Graphics3D10runCommandEjP13Graphics3DMsgRSt6vectorIhSaIhEES5_:__ZN10Graphics3D10runCommandEjP13Graphics3DMsgRSt6vectorIhSaIhEES5_,
		__ZN10Graphics3D10deallocateEj:__ZN10Graphics3D10deallocateEj,
		__ZN18CheerpOSFsProvider17postFsOpenRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj:__ZN18CheerpOSFsProvider17postFsOpenRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj,
		__ZN18CheerpOSFsProvider20postCacheNodeRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEERK7InodeId12CORE_MESSAGE:__ZN18CheerpOSFsProvider20postCacheNodeRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEERK7InodeId12CORE_MESSAGE,
		__ZN18CheerpOSFsProvider19postFsUnlinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE:__ZN18CheerpOSFsProvider19postFsUnlinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE,
		__ZN18CheerpOSFsProvider19postFsRenameRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_:__ZN18CheerpOSFsProvider19postFsRenameRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_,
		__ZN18CheerpOSFsProvider17postFsLinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_:__ZN18CheerpOSFsProvider17postFsLinkRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_,
		___wrapper___ZN13WasmGenerator13compileModuleEPKhj:___wrapper___ZN13WasmGenerator13compileModuleEPKhj,
		__ZN18CheerpOSFsProvider19postFsSocketRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj:__ZN18CheerpOSFsProvider19postFsSocketRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj,
		__ZN18CheerpOSFsProvider18postFsMkdirRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj:__ZN18CheerpOSFsProvider18postFsMkdirRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEjjj,
		__ZNK18CheerpOSFsProvider19postFsFChmodRequestEjj:__ZNK18CheerpOSFsProvider19postFsFChmodRequestEjj,
		__ZN11ChunksCache20closeAndDestroyAsyncEv:__ZN11ChunksCache20closeAndDestroyAsyncEv,
		__ZN13WasmGenerator13getMemorySizeEv:__ZN13WasmGenerator13getMemorySizeEv,
		__ZN11CoreManager26exitAndThrowNoAddressSpaceEv:__ZN11CoreManager26exitAndThrowNoAddressSpaceEv,
		___wrapper___ZN6cheerp11console_logIJPKcEEEvDpT_:___wrapper___ZN6cheerp11console_logIJPKcEEEvDpT_,
		__ZN11ConsoleNode19postConsoleActivateEj:__ZN11ConsoleNode19postConsoleActivateEj,
		__ZZZN8LinuxApp20retryCoreMessageImplEP7CoreCtxiENK3$_0clES1_iEN9CheerpTmp3RunES1_i:__ZZZN8LinuxApp20retryCoreMessageImplEP7CoreCtxiENK3$_0clES1_iEN9CheerpTmp3RunES1_i,
		__ZZZN8LinuxApp17handleBindWrapperEP7CoreCtxj12LinearBufferENK3$_0clES1_jS2_EN9CheerpTmp3RunEii:__ZZZN8LinuxApp17handleBindWrapperEP7CoreCtxj12LinearBufferENK3$_0clES1_jS2_EN9CheerpTmp3RunEii,
		__ZL9doUdpBindP14SocketNodeBase:__ZL9doUdpBindP14SocketNodeBase,
		__ZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEv:__ZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEv,
		___wrapper___ZN14WriteToConsole2DoEPKc:___wrapper___ZN14WriteToConsole2DoEPKc,
		__ZZN14InetSocketNodeI6STREAME9doConnectEP7CoreCtxPK16sockaddr_storagejEN9CheerpTmp3RunEP18ExternalSocketNodejS3_:__ZZN14InetSocketNodeI6STREAME9doConnectEP7CoreCtxPK16sockaddr_storagejEN9CheerpTmp3RunEP18ExternalSocketNodejS3_,
		__ZN8Debugger15registerContextEP7CoreCtx12CONTEXT_TYPEj:__ZN8Debugger15registerContextEP7CoreCtx12CONTEXT_TYPEj,
		__ZN13EventsHandler18dispatchEmptyEventE15CORE_EVENT_TYPE:__ZN13EventsHandler18dispatchEmptyEventE15CORE_EVENT_TYPE,
		___wrapper___ZL8read_envPcjj:___wrapper___ZL8read_envPcjj,
		__ZN8LinuxApp35reducePriorityAndRescheduleIfNeededEP8CoreData:__ZN8LinuxApp35reducePriorityAndRescheduleIfNeededEP8CoreData,
		__ZN6client4Date3nowEv:Date.now,
		__ZN8LinuxApp15performance_nowEv:__ZN8LinuxApp15performance_nowEv,
		__ZN8LinuxApp24wakeThreadAndUpdateTimerEP7CoreCtx:__ZN8LinuxApp24wakeThreadAndUpdateTimerEP7CoreCtx,
		__ZN8LinuxApp12handleListenEP7CoreCtxP14SocketNodeBasej:__ZN8LinuxApp12handleListenEP7CoreCtxP14SocketNodeBasej,
		__ZZN8LinuxApp10handleKillEP7CoreCtxEN9CheerpTmp3RunEjj:__ZZN8LinuxApp10handleKillEP7CoreCtxEN9CheerpTmp3RunEjj,
		__ZN18CheerpOSFsProvider9CacheNode17postFsListRequestEjRK7InodeId:__ZN18CheerpOSFsProvider9CacheNode17postFsListRequestEjRK7InodeId,
		__ZN9SystemCtx3RunEv:__ZN9SystemCtx3RunEv,
		__ZN6cheerpL8date_nowEv$p2546:__ZN6cheerpL8date_nowEv$p2546,
		__ZN6cheerpL8date_nowEv$p2459:__ZN6cheerpL8date_nowEv$p2459,
		__ZZN4CMOS7getDataEvEN9CheerpTmp3RunEv:__ZZN4CMOS7getDataEvEN9CheerpTmp3RunEv,
		__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_0v:__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_0v,
		__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_1v:__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_1v,
		__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_2v:__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_2v,
		__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_3v:__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_3v,
		__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_4v:__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_4v,
		__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_5v:__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_5v,
		__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_6v:__ZZN4CMOS7getDataEvEN9CheerpTmp3RunE_6v,
		__ZN11MasterClock11realTimeoutEv:__ZN11MasterClock11realTimeoutEv,
		__ZN13IDEController12runAsyncReadEjj:__ZN13IDEController12runAsyncReadEjj,
		__ZN13IDEController13runAsyncWriteEv:__ZN13IDEController13runAsyncWriteEv,
		__ZN11MasterClock15performance_nowEv:__ZN11MasterClock15performance_nowEv,
		__ZN9VGADevice8setWidthEi:__ZN9VGADevice8setWidthEi,
		__ZN9VGADevice9setHeightEi:__ZN9VGADevice9setHeightEi,
		__ZN6Floppy22scheduleAsyncReadWriteEv:__ZN6Floppy22scheduleAsyncReadWriteEv,
		__ZN9VGADevice13setRenderModeE15VGA_RENDER_MODE:__ZN9VGADevice13setRenderModeE15VGA_RENDER_MODE,
		atan2:Math.atan2,
		pow:Math.pow,
		growLinearMemory:growLinearMemory,
	}})
).then(tmp0=>{
	__asm=tmp0.instance.exports;
	__heap=memory.buffer;
	assignHeaps(__heap);
	_cxCoreInit=__asm._cxCoreInit;
	_dumpValue=__asm._dumpValue;
	___memory_init=__asm.___memory_init;
	___cheerp_init_tls=__asm.___cheerp_init_tls;
	___syscall_main_environ=__asm.___syscall_main_environ;
	__GLOBAL__I_000101=__asm.__GLOBAL__I_000101;
	___ctor__ZN25CompiledInterpreterModule14handlersTablesE=__asm.___ctor__ZN25CompiledInterpreterModule14handlersTablesE;
	___ctor__ZN8LinuxApp16boundInetSocketsE=__asm.___ctor__ZN8LinuxApp16boundInetSocketsE;
	___ctor__ZN8LinuxApp16boundUnixSocketsE=__asm.___ctor__ZN8LinuxApp16boundUnixSocketsE;
	___ctor__ZN8LinuxApp19boundNetlinkSocketsE=__asm.___ctor__ZN8LinuxApp19boundNetlinkSocketsE;
	___ctor__ZN8LinuxApp12netlinkQueueE=__asm.___ctor__ZN8LinuxApp12netlinkQueueE;
	___ctor__ZN8LinuxApp28boundNetlinkMulticastSocketsE=__asm.___ctor__ZN8LinuxApp28boundNetlinkMulticastSocketsE;
	___ctor__ZN8LinuxApp11timezoneEnvE=__asm.___ctor__ZN8LinuxApp11timezoneEnvE;
	___ctor__ZN8LinuxApp7evNodesE=__asm.___ctor__ZN8LinuxApp7evNodesE;
	___ctor__ZN8LinuxApp12blockDevicesE=__asm.___ctor__ZN8LinuxApp12blockDevicesE;
	___ctor__ZN8LinuxApp13providerIdMapE=__asm.___ctor__ZN8LinuxApp13providerIdMapE;
	___ctor__ZN8LinuxApp10inodeCacheE=__asm.___ctor__ZN8LinuxApp10inodeCacheE;
	___assert_fail=__asm.___assert_fail;
	__ZNK12AddressSpace4dumpEv=__asm.__ZNK12AddressSpace4dumpEv;
	__ZNK12AddressSpace5checkEv=__asm.__ZNK12AddressSpace5checkEv;
	__ZN12AddressSpace19getTypedPtrFromAddrIjL18MEMORY_ACCESS_MODE1ELj2EEEPT_jjj=__asm.__ZN12AddressSpace19getTypedPtrFromAddrIjL18MEMORY_ACCESS_MODE1ELj2EEEPT_jjj;
	__ZN8Debugger11getInstanceEv=__asm.__ZN8Debugger11getInstanceEv;
	__ZNK12AddressSpace12getChunkBaseEj=__asm.__ZNK12AddressSpace12getChunkBaseEj;
	__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej=__asm.__Z15caInstX86RunOneI15DisasPrimitivesEjPT_P12AddressSpacej;
	__ZN17WasmGeneratorBase23compileDispatcherModuleEjP22CompiledHandlersTables14MAIN_LOOP_TYPE=__asm.__ZN17WasmGeneratorBase23compileDispatcherModuleEjP22CompiledHandlersTables14MAIN_LOOP_TYPE;
	__ZNK10BinaryCode9getLinearEj=__asm.__ZNK10BinaryCode9getLinearEj;
	__ZNK10BinaryCode10LinearCode6getBufEv=__asm.__ZNK10BinaryCode10LinearCode6getBufEv;
	__ZN10BinaryCode10LinearCodeD2Ev=__asm.__ZN10BinaryCode10LinearCodeD2Ev;
	__ZN17WasmGeneratorBase12getImportPtrE11WasmImports=__asm.__ZN17WasmGeneratorBase12getImportPtrE11WasmImports;
	__ZN9CodeTrace12freeWasmCodeEv=__asm.__ZN9CodeTrace12freeWasmCodeEv;
	__ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev=__asm.__ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev;
	__ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev=__asm.__ZNSt12forward_listIP14CompiledModule17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev;
	__ZNSt23__forward_list_iteratorIPSt19__forward_list_nodeIP14CompiledModulePvEEppB7v160000Ev=__asm.__ZNSt23__forward_list_iteratorIPSt19__forward_list_nodeIP14CompiledModulePvEEppB7v160000Ev;
	__ZN19RefCountedBufferPtraSEP16RefCountedBuffer=__asm.__ZN19RefCountedBufferPtraSEP16RefCountedBuffer;
	__ZN14CompiledModule6decRefEv=__asm.__ZN14CompiledModule6decRefEv;
	__ZNKSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE4sizeB7v160000Ev=__asm.__ZNKSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE4sizeB7v160000Ev;
	__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEEixB7v160000Em=__asm.__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEEixB7v160000Em;
	__ZN14AsmCompileBase14freeTableEntryEj=__asm.__ZN14AsmCompileBase14freeTableEntryEj;
	___printf=__asm.___printf;
	__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev=__asm.__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE3endB7v160000Ev;
	__ZNKSt11__wrap_iterIPP9CodeTraceEmiB7v160000El=__asm.__ZNKSt11__wrap_iterIPP9CodeTraceEmiB7v160000El;
	__ZN20WasmGeneratorUtility11insertTraceEP9CodeTrace=__asm.__ZN20WasmGeneratorUtility11insertTraceEP9CodeTrace;
	__Znwj=__asm.__Znwj;
	__ZN14FreeTableEntryC2Ejj=__asm.__ZN14FreeTableEntryC2Ejj;
	__ZdlPv=__asm.__ZdlPv;
	__ZN19RefCountedBufferPtraSERKS_=__asm.__ZN19RefCountedBufferPtraSERKS_;
	__ZNSt11__wrap_iterIPP9CodeTraceEppB7v160000Ev=__asm.__ZNSt11__wrap_iterIPP9CodeTraceEppB7v160000Ev;
	__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev=__asm.__ZNSt6vectorIP9CodeTrace17TrackingAllocatorIS1_L7MEM_TAG9EEE5beginB7v160000Ev;
	__ZN25CompiledInterpreterModule16addAggregateCodeEON10BinaryCode10LinearCodeE=__asm.__ZN25CompiledInterpreterModule16addAggregateCodeEON10BinaryCode10LinearCodeE;
	__ZNKSt6vectorIN25CompiledInterpreterModule11HandlerDataESaIS1_EE4sizeB7v160000Ev=__asm.__ZNKSt6vectorIN25CompiledInterpreterModule11HandlerDataESaIS1_EE4sizeB7v160000Ev;
	__ZNK24ImportantBitsForDispatch21doesMaskFitInTwoBytesEv=__asm.__ZNK24ImportantBitsForDispatch21doesMaskFitInTwoBytesEv;
	__ZN12AddressSpace15initializeCacheEv=__asm.__ZN12AddressSpace15initializeCacheEv;
	__ZN8LinuxApp21cleanupExitingThreadsEv=__asm.__ZN8LinuxApp21cleanupExitingThreadsEv;
	__ZN8LinuxApp12chooseThreadEd=__asm.__ZN8LinuxApp12chooseThreadEd;
	__ZN10InodeCache15freeExpiredNodeEj=__asm.__ZN10InodeCache15freeExpiredNodeEj;
	__ZN17WasmGeneratorBase21compileOneTraceToWasmEj=__asm.__ZN17WasmGeneratorBase21compileOneTraceToWasmEj;
	__ZN8LinuxApp15scheduleAppImplEP7CoreCtx=__asm.__ZN8LinuxApp15scheduleAppImplEP7CoreCtx;
	__ZN17WasmGeneratorBase20compilePendingTracesEb=__asm.__ZN17WasmGeneratorBase20compilePendingTracesEb;
	__Z11getStackPtrv=__asm.__Z11getStackPtrv;
	__Z11setStackPtrj=__asm.__Z11setStackPtrj;
	__Z8debuggerv=__asm.__Z8debuggerv;
	__Z12caInterpFromP8CoreDataP12AddressSpacej=__asm.__Z12caInterpFromP8CoreDataP12AddressSpacej;
	__ZN8LinuxApp22preciseInterpreterImplEP12AddressSpaceP8CoreData=__asm.__ZN8LinuxApp22preciseInterpreterImplEP12AddressSpaceP8CoreData;
	__ZN10SystemData11scheduleIrqEjj=__asm.__ZN10SystemData11scheduleIrqEjj;
	__ZN7CoreCtx8setStateENS_5STATEE=__asm.__ZN7CoreCtx8setStateENS_5STATEE;
	__ZN6Floppy28getFloppyTypeFromImageLengthEj=__asm.__ZN6Floppy28getFloppyTypeFromImageLengthEj;
	__ZN10SystemData13setFloppyTypeEiN6Floppy11FLOPPY_TYPEE=__asm.__ZN10SystemData13setFloppyTypeEiN6Floppy11FLOPPY_TYPEE;
	__ZN8LinuxApp19handleFsCloseResultEj=__asm.__ZN8LinuxApp19handleFsCloseResultEj;
	__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEEC2B7v160000Ev=__asm.__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEEC2B7v160000Ev;
	__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEE12emplace_backIJS5_EEERS5_DpOT_=__asm.__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEE12emplace_backIJS5_EEERS5_DpOT_;
	__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev=__asm.__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEED2Ev;
	__ZNSt5arrayIhLj64EEixB7v160000Ej=__asm.__ZNSt5arrayIhLj64EEixB7v160000Ej;
	__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000Ev=__asm.__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000Ev;
	__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEaSB7v160000EOS4_=__asm.__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEaSB7v160000EOS4_;
	__ZN8LinuxApp17handleExecRequestEOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEES9_jjRKSt5arrayIhLj64EERKS6_jj=__asm.__ZN8LinuxApp17handleExecRequestEOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEES9_jjRKSt5arrayIhLj64EERKS6_jj;
	__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEED2B7v160000Ev=__asm.__ZNSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES2_IS5_LS3_1EEED2B7v160000Ev;
	__ZN8Debugger11getCtxForIdE12CONTEXT_TYPEj=__asm.__ZN8Debugger11getCtxForIdE12CONTEXT_TYPEj;
	__ZN9HashTableI9CodeTraceE9findEntryEj=__asm.__ZN9HashTableI9CodeTraceE9findEntryEj;
	__ZN20WasmGeneratorUtility12dumpOneTraceEP12AddressSpaceP9CodeTrace=__asm.__ZN20WasmGeneratorUtility12dumpOneTraceEP12AddressSpaceP9CodeTrace;
	__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000IDnEEPKc=__asm.__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEEC2B7v160000IDnEEPKc;
	__ZN10ProcessCtx6createEPS_RKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE=__asm.__ZN10ProcessCtx6createEPS_RKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE;
	__ZN8LinuxApp16handleSocketImplEP10ProcessCtxjjj=__asm.__ZN8LinuxApp16handleSocketImplEP10ProcessCtxjjj;
	__ZN7CoreCtx3logEPKcz=__asm.__ZN7CoreCtx3logEPKcz;
	__ZN12LinearBufferC2Ej=__asm.__ZN12LinearBufferC2Ej;
	__ZN12LinearBuffer9getBufferI16sockaddr_storageEEPT_v=__asm.__ZN12LinearBuffer9getBufferI16sockaddr_storageEEPT_v;
	__ZN12LinearBufferC2EOS_=__asm.__ZN12LinearBufferC2EOS_;
	__ZN8LinuxApp17handleBindWrapperEP7CoreCtxj12LinearBuffer=__asm.__ZN8LinuxApp17handleBindWrapperEP7CoreCtxj12LinearBuffer;
	__ZN12LinearBufferD2Ev=__asm.__ZN12LinearBufferD2Ev;
	__ZNK10ProcessCtx11getFileDescEj=__asm.__ZNK10ProcessCtx11getFileDescEj;
	__ZN5Inode10canReadFwdEv=__asm.__ZN5Inode10canReadFwdEv;
	__ZN16CoreInodeWatcher10addWatchedEP5Inode=__asm.__ZN16CoreInodeWatcher10addWatchedEP5Inode;
	__ZN8LinuxApp12handleAcceptEP7CoreCtxP10SocketNode=__asm.__ZN8LinuxApp12handleAcceptEP7CoreCtxP10SocketNode;
	__ZN8FileDesc3getEP5Inodej=__asm.__ZN8FileDesc3getEP5Inodej;
	__ZN13FileDescEntryC2EP8FileDescj=__asm.__ZN13FileDescEntryC2EP8FileDescj;
	__ZN10ProcessCtx11addFileDescERK13FileDescEntryj=__asm.__ZN10ProcessCtx11addFileDescERK13FileDescEntryj;
	__ZNKSt6vectorI13FileDescEntry17TrackingAllocatorIS0_L7MEM_TAG1EEE4sizeB7v160000Ev=__asm.__ZNKSt6vectorI13FileDescEntry17TrackingAllocatorIS0_L7MEM_TAG1EEE4sizeB7v160000Ev;
	__ZN8FileDesc6decRefEv=__asm.__ZN8FileDesc6decRefEv;
	__ZN13FileDescEntry5clearEv=__asm.__ZN13FileDescEntry5clearEv;
	__ZN8LinuxApp14getConsoleNodeEj=__asm.__ZN8LinuxApp14getConsoleNodeEj;
	__ZN12TerminalNode8pushCharEj=__asm.__ZN12TerminalNode8pushCharEj;
	__ZN7KmsNode7setSizeEjj=__asm.__ZN7KmsNode7setSizeEjj;
	__ZN8LinuxApp13handleEvMouseE13EV_MOUSE_TYPEjiid=__asm.__ZN8LinuxApp13handleEvMouseE13EV_MOUSE_TYPEjiid;
	__ZN8LinuxApp11handleEvKeyE11EV_KEY_TYPEjd=__asm.__ZN8LinuxApp11handleEvKeyE11EV_KEY_TYPEjd;
	__ZN8LinuxApp15setTimerHandlerEv=__asm.__ZN8LinuxApp15setTimerHandlerEv;
	__ZN8LinuxApp14setTimezoneEnvEi=__asm.__ZN8LinuxApp14setTimezoneEnvEi;
	__ZN16InterpPrimitives19InitializeMainTableILi32EEEvv=__asm.__ZN16InterpPrimitives19InitializeMainTableILi32EEEvv;
	__ZN8LinuxApp18handleMountRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_j=__asm.__ZN8LinuxApp18handleMountRequestEjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES7_j;
	__ZN8LinuxApp19handleDeviceRequestEjj=__asm.__ZN8LinuxApp19handleDeviceRequestEjj;
	__ZN8LinuxApp19handleConnectToPortEjj=__asm.__ZN8LinuxApp19handleConnectToPortEjj;
	__ZN13IOTransaction6finishEv=__asm.__ZN13IOTransaction6finishEv;
	__ZN13EventsHandler16registerCallbackE15CORE_EVENT_TYPE=__asm.__ZN13EventsHandler16registerCallbackE15CORE_EVENT_TYPE;
	__ZN13EventsHandler18unregisterCallbackE15CORE_EVENT_TYPE=__asm.__ZN13EventsHandler18unregisterCallbackE15CORE_EVENT_TYPE;
	__ZN8LinuxApp18handleFsCreateFileEjjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE=__asm.__ZN8LinuxApp18handleFsCreateFileEjjRKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE;
	__ZN18ExternalSocketNode11shutdownFwdEv=__asm.__ZN18ExternalSocketNode11shutdownFwdEv;
	__ZN12LinearBuffer9getBufferIhEEPT_v=__asm.__ZN12LinearBuffer9getBufferIhEEPT_v;
	__ZN8LinuxApp14handleSysWriteEP14SocketNodeBaseR12LinearBuffer=__asm.__ZN8LinuxApp14handleSysWriteEP14SocketNodeBaseR12LinearBuffer;
	__ZNSt6vectorIhSaIhEE6resizeEj=__asm.__ZNSt6vectorIhSaIhEE6resizeEj;
	__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev=__asm.__ZNKSt6vectorIhSaIhEE4sizeB7v160000Ev;
	__ZNSsD2Ev=__asm.__ZNSsD2Ev;
	__ZNSsC2B7v160000Ev=__asm.__ZNSsC2B7v160000Ev;
	__ZNSs9push_backEc=__asm.__ZNSs9push_backEc;
	__ZN13WasmGeneratorC2Ev=__asm.__ZN13WasmGeneratorC2Ev;
	__ZN13WasmGenerator14emitBaseHeaderEv=__asm.__ZN13WasmGenerator14emitBaseHeaderEv;
	__ZN13WasmGeneratorD2Ev=__asm.__ZN13WasmGeneratorD2Ev;
	__ZN13WasmGenerator17emitGenericHeaderEjjjj=__asm.__ZN13WasmGenerator17emitGenericHeaderEjjjj;
	__ZN13WasmGenerator15emitCodeSectionEj=__asm.__ZN13WasmGenerator15emitCodeSectionEj;
	__ZN13WasmGenerator16emitFixableInt32Ev=__asm.__ZN13WasmGenerator16emitFixableInt32Ev;
	__ZN13WasmGenerator17emitEmptyFunctionEv=__asm.__ZN13WasmGenerator17emitEmptyFunctionEv;
	__ZN13WasmGenerator14controlFlowEndEv=__asm.__ZN13WasmGenerator14controlFlowEndEv;
	__ZN13WasmGenerator13FixupLocation6commitEv=__asm.__ZN13WasmGenerator13FixupLocation6commitEv;
	__ZN25CompiledInterpreterModuleD2Ev=__asm.__ZN25CompiledInterpreterModuleD2Ev;
	__ZN10BinaryCode10LinearCode10deallocateEv=__asm.__ZN10BinaryCode10LinearCode10deallocateEv;
	__ZN8LinuxApp20retryCoreMessageImplEP7CoreCtxi=__asm.__ZN8LinuxApp20retryCoreMessageImplEP7CoreCtxi;
	__ZN18ExternalSocketNode3getI5DGRAMEEPS_bjjj=__asm.__ZN18ExternalSocketNode3getI5DGRAMEEPS_bjjj;
	__ZN14SocketNodeBase7setPeerEPS_=__asm.__ZN14SocketNodeBase7setPeerEPS_;
	__ZN14SocketNodeBase12PacketSourceC2Ejj=__asm.__ZN14SocketNodeBase12PacketSourceC2Ejj;
	__ZZZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEvENK3$_0clEPN6client12MessageEventIPNS3_6ObjectEEEEN10SendLinear3runEP14SocketNodeBaseRK12LinearBufferRKNSA_12PacketSourceE=__asm.__ZZZN18ExternalSocketImplI5DGRAME22initMessageChannelImplEvENK3$_0clEPN6client12MessageEventIPNS3_6ObjectEEEEN10SendLinear3runEP14SocketNodeBaseRK12LinearBufferRKNSA_12PacketSourceE;
	__ZN11DebuggerCtxC2EP7CoreCtx12CONTEXT_TYPEj=__asm.__ZN11DebuggerCtxC2EP7CoreCtx12CONTEXT_TYPEj;
	__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE9push_backB7v160000EOS0_=__asm.__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE9push_backB7v160000EOS0_;
	__ZN11CoreManager12exitAndThrowEP8CoreDataNS_11EXIT_REASONE=__asm.__ZN11CoreManager12exitAndThrowEP8CoreDataNS_11EXIT_REASONE;
	__ZN18ExternalSocketNode3getI6STREAMEEPS_bjjj=__asm.__ZN18ExternalSocketNode3getI6STREAMEEPS_bjjj;
	__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE6resizeB7v160000Em=__asm.__ZNSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE6resizeB7v160000Em;
	__ZN18CheerpOSFsProvider13listCacheNodeEjjOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEE=__asm.__ZN18CheerpOSFsProvider13listCacheNodeEjjOSt6vectorISbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEES3_IS6_LS4_1EEE;
	__ZN8LinuxApp16getProviderForIdEj=__asm.__ZN8LinuxApp16getProviderForIdEj;
	__ZN10FsProvider14PathComponentsC2Ev=__asm.__ZN10FsProvider14PathComponentsC2Ev;
	__ZN9StringRefC2ERKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE=__asm.__ZN9StringRefC2ERKSbIcSt11char_traitsIcE17TrackingAllocatorIcL7MEM_TAG7EEE;
	__ZN10FsProvider14PathComponents7addPathERK9StringRef=__asm.__ZN10FsProvider14PathComponents7addPathERK9StringRef;
	__ZNKSt6vectorI9StringRef17TrackingAllocatorIS0_L7MEM_TAG2EEE4sizeB7v160000Ev=__asm.__ZNKSt6vectorI9StringRef17TrackingAllocatorIS0_L7MEM_TAG2EEE4sizeB7v160000Ev;
	__ZN10InodeCache15lookupCacheNodeERK7InodeIdj=__asm.__ZN10InodeCache15lookupCacheNodeERK7InodeIdj;
	__ZN9StringRefaSERKS_=__asm.__ZN9StringRefaSERKS_;
	__ZN18CheerpOSFsProvider9CacheNode3getEPS_RK7InodeIdS4_jjjRK9StringRefjjj=__asm.__ZN18CheerpOSFsProvider9CacheNode3getEPS_RK7InodeIdS4_jjjRK9StringRefjjj;
	__ZN10InodeCache12addNodeToMapERK7InodeIdP9FileInode=__asm.__ZN10InodeCache12addNodeToMapERK7InodeIdP9FileInode;
	__ZN5Inode6incRefEv=__asm.__ZN5Inode6incRefEv;
	__ZN5Inode6decRefEv=__asm.__ZN5Inode6decRefEv;
	__ZN10InodeCache13addCachedNodeEP9FileInodeRK9StringRefRK7InodeId=__asm.__ZN10InodeCache13addCachedNodeEP9FileInodeRK9StringRefRK7InodeId;
	__ZNKSt6vectorIP6DEntry17TrackingAllocatorIS1_L7MEM_TAG8EEE4sizeB7v160000Ev=__asm.__ZNKSt6vectorIP6DEntry17TrackingAllocatorIS1_L7MEM_TAG8EEE4sizeB7v160000Ev;
	__ZN10FsProvider14PathComponentsD2Ev=__asm.__ZN10FsProvider14PathComponentsD2Ev;
	__ZN10InodeCache14dirNameForNodeEPK9FileInodeP10FsProvider=__asm.__ZN10InodeCache14dirNameForNodeEPK9FileInodeP10FsProvider;
	__ZN9StringRefC2EPKc=__asm.__ZN9StringRefC2EPKc;
	__ZN11ChunksCacheC2Ej12CORE_MESSAGES0_=__asm.__ZN11ChunksCacheC2Ej12CORE_MESSAGES0_;
	__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE5beginB7v160000Ev=__asm.__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE5beginB7v160000Ev;
	__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE3endB7v160000Ev=__asm.__ZNSt6vectorI11DebuggerCtx17TrackingAllocatorIS0_L7MEM_TAG1EEE3endB7v160000Ev;
	__ZNSt11__wrap_iterIP11DebuggerCtxEppB7v160000Ev=__asm.__ZNSt11__wrap_iterIP11DebuggerCtxEppB7v160000Ev;
	__ZN8CoreData23writeGrpsToGlobalMemoryEv=__asm.__ZN8CoreData23writeGrpsToGlobalMemoryEv;
	__ZN10SystemData13doPendingIrqsEP8CoreDataj=__asm.__ZN10SystemData13doPendingIrqsEP8CoreDataj;
	__Z14caInterpFrom16P8CoreDataP12AddressSpacej=__asm.__Z14caInterpFrom16P8CoreDataP12AddressSpacej;
	__ZN8CoreData22readGrpsToGlobalMemoryEv=__asm.__ZN8CoreData22readGrpsToGlobalMemoryEv;
	__ZN11CoreManagernwEj=__asm.__ZN11CoreManagernwEj;
	__ZN9SystemCtxC2Ev=__asm.__ZN9SystemCtxC2Ev;
	__ZN12AddressSpace17createMemoryChunkEjjj=__asm.__ZN12AddressSpace17createMemoryChunkEjjj;
	__ZN10APICDeviceC2Ev=__asm.__ZN10APICDeviceC2Ev;
	__ZN12AddressSpace17createMemoryChunkEjjP12MemoryBufferjP5InodejP15MemMappedDevice=__asm.__ZN12AddressSpace17createMemoryChunkEjjP12MemoryBufferjP5InodejP15MemMappedDevice;
	__ZN12MemoryBuffer12allocateAnonEj=__asm.__ZN12MemoryBuffer12allocateAnonEj;
	__ZN10SystemDataC2EP8CoreDataP12AddressSpacejjd=__asm.__ZN10SystemDataC2EP8CoreDataP12AddressSpacejjd;
	__ZN11MasterClock15initGlobalTimerEv=__asm.__ZN11MasterClock15initGlobalTimerEv;
	__ZN9VGADevice9setRomBufEP12MemoryBuffer=__asm.__ZN9VGADevice9setRomBufEP12MemoryBuffer;
	__ZN9VGADevice9setRamBufEP12MemoryBuffer=__asm.__ZN9VGADevice9setRamBufEP12MemoryBuffer;
	__ZN11MasterClock14getMonotonicMsEv=__asm.__ZN11MasterClock14getMonotonicMsEv;
	__ZN11MasterClock14dispatchEventsEjj=__asm.__ZN11MasterClock14dispatchEventsEjj;
	__ZN13IDEController16startTransactionEv=__asm.__ZN13IDEController16startTransactionEv;
	__ZNK13IOTransaction12getBufOffsetEv=__asm.__ZNK13IOTransaction12getBufOffsetEv;
	__ZN13IDEController11resetBufferEj=__asm.__ZN13IDEController11resetBufferEj;
	__ZN13IOTransaction5startEP12AddressSpacejjb=__asm.__ZN13IOTransaction5startEP12AddressSpacejjb;
	___getStackPtr=__asm.___getStackPtr;
	___setStackPtr=__asm.___setStackPtr;
	cxCoreInit=_cxCoreInit;
	dbgDisassemblyAt=_dbgDisassemblyAt;
	dbgDumpAddressSpace=_dbgDumpAddressSpace;
	dbgDumpMem=_dbgDumpMem;
	dbgDumpThreads=_dbgDumpThreads;
	dumpValue=_dumpValue;
	cxCoreInit.promise=
	dbgDisassemblyAt.promise=
	dbgDumpAddressSpace.promise=
	dbgDumpMem.promise=
	dbgDumpThreads.promise=
	dumpValue.promise=
	Promise.resolve();
	__start();
});
function assignHeaps(tmp0){
	HEAP8=new Uint8Array(tmp0);
	HEAP16=new Uint16Array(tmp0);
	HEAP32=new Int32Array(tmp0);
	HEAPF32=new Float32Array(tmp0);
	HEAPF64=new Float64Array(tmp0);
}
