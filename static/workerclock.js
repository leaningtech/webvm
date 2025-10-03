"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function __Z9timerLoopv(){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,tmp4=-0.,tmp5=0,L$pbe=-0.,L$pbe1=0,tmp8=null;
	tmp0=[null];
	tmp1="timed-out";
	tmp2="not-equal";
	+Date.now();
	L$pbe=+Infinity;
	L$pbe1=0;
	while(1){
		tmp8=Atomics.wait(_flagBase,(_signalOffset|0)+2|0,0,L$pbe);
		if(tmp8===tmp2)Atomics.store(_flagBase,(_signalOffset|0)+2|0,0);
		L$pbe=+Date.now();
		if(tmp8===tmp1){
			if(L$pbe1){
				tmp8=_msgPort;
				tmp3=tmp0[0];
				tmp0[0]=nullObj;
				tmp8.postMessage(null);
			}
			Atomics.store(_flagBase,(_signalOffset|0)+1|0,~~(L$pbe- +_startRealTime));
			Atomics.store(_flagBase,_signalOffset|0,-1);
			L$pbe=+Infinity;
			L$pbe1=0;
		}else{
			L$pbe1=Atomics.load(_flagBase,(_signalOffset|0)+3|0);
			tmp4=+_startRealTime;
			tmp5=Atomics.load(_flagBase,(_signalOffset|0)+4|0);
			L$pbe=(+(L$pbe1-~~(L$pbe-tmp4)|0));
			L$pbe1=(tmp5|0)!==0?1:0;
		}
		continue;
	}
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
function __Z9onMessagePN6client12MessageEventIPNS_6ObjectEEE(Larg0){
	var tmp0=null,tmp1=null;
	tmp1=Larg0.data;
	if(((tmp1.kind)|0)===1){
		tmp0=tmp1.buffer;
		_flagBase=new Int32Array(tmp0);
		_signalOffset=(tmp1.basePtr)>>>2;
		_startRealTime=+tmp1.startRealTime;
		_msgPort=tmp1.port;
		tmp1=__Z9timerLoopv;
		+setTimeout(tmp1,0);
		return;
	}
	___assert_fail(_$pstr$p2,0,_$pstr$p3,0,83,___func__$p_Z9onMessagePN6client12MessageEventIPNS_6ObjectEEE,0);
	;
}
function __Z7webMainv(){
	var tmp0=null,tmp1=null;
	tmp0="message";
	tmp1=__Z9onMessagePN6client12MessageEventIPNS_6ObjectEEE;
	addEventListener(tmp0,tmp1);
	postMessage(null);
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
function _abort(){
	___syscall_tkill();
	;
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
function ___vfprintf(Larg0,Marg0){
	Larg0={d:Larg0,o:Marg0};
	var LmergedArray=null,tmp1=null,tmp2=null,tmp3=0,Lgeptoindexphi=0,Lallocadecay1=null,tmp6=null,tmp7=0;
	LmergedArray=[nullObj,nullObj];
	LmergedArray[0]=Larg0;
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
	if(((_printf_core(null,LmergedArray[1],Lallocadecay1,tmp1[0])|0)|0)>=0){
		if((___stderr_FILE.i19|0)>-1)Lgeptoindexphi=___lockfile(___stderr_FILE)|0;
		else{
			Lgeptoindexphi=0;
		}
		tmp3=___stderr_FILE.i0|0;
		if((___stderr_FILE.i18|0)<1)___stderr_FILE.i0=tmp3& -33;
		a:{
			b:{
				if((___stderr_FILE.i12|0)!==0){
					tmp6=___stderr_FILE.a4;
					tmp7=___stderr_FILE.a4o|0;
					if(tmp6!==nullArray||tmp7!==0){
						tmp7=0;
						tmp6=nullArray;
						break b;
					}
					tmp7=0;
					tmp6=nullArray;
				}else{
					tmp6=___stderr_FILE.a11;
					tmp7=___stderr_FILE.a11o|0;
					___stderr_FILE.a11=tmp2;
					___stderr_FILE.a11o=0;
					___stderr_FILE.i12=80;
					___stderr_FILE.a4=nullArray;
					___stderr_FILE.a4o=0;
					___stderr_FILE.a7=nullArray;
					___stderr_FILE.a7o=0;
					___stderr_FILE.a5=nullArray;
					___stderr_FILE.a5o=0;
				}
				if(((___towrite(___stderr_FILE)|0)|0)!==0)break a;
			}
			_printf_core(___stderr_FILE,LmergedArray[1],Lallocadecay1,tmp1[0])|0;
		}
		if(tmp6!==nullArray||tmp7!==0){
			___stderr_FILE.a9(___stderr_FILE,nullArray,0,0)|0;
			___stderr_FILE.a11=tmp6;
			___stderr_FILE.a11o=tmp7;
			___stderr_FILE.i12=0;
			___stderr_FILE.a4=nullArray;
			___stderr_FILE.a4o=0;
			___stderr_FILE.a7=nullArray;
			___stderr_FILE.a7o=0;
			___stderr_FILE.a5=nullArray;
			___stderr_FILE.a5o=0;
		}
		___stderr_FILE.i0=___stderr_FILE.i0|tmp3&32;
		if((Lgeptoindexphi|0)!==0)___stderr_FILE.i19=0;
	}
	LmergedArray[1]=null;
}
function _printf_core(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=0,Lgeptoindexphi8=0,Lsmax_select5=0,tmp5=0,tmp6=0,Lgeptoindexphi=0,tmp8=0,tmp9=null,L$poptgep32$poptgep$poptgepsqueezed=null,Lsub51=0,LsubSel=0,tmp13=0;
	tmp0={a0:new Int32Array(2),d1:-0.,a2:nullArray,a2o:0};
	tmp1=new Uint8Array(40);
	tmp2=Larg0===null?1:0;
	tmp5=0;
	Lsmax_select5=0;
	Lgeptoindexphi8=0;
	a:while(1){
		while(1){
			if((Lsmax_select5|0)<=(2147483647-tmp5|0)){
				tmp5=tmp5+Lsmax_select5|0;
				tmp6=_$pstr$p105[Lgeptoindexphi8]|0;
				if((tmp6&255)===0)return (tmp2?0|0:tmp5|0)|0;
				Lgeptoindexphi=Lgeptoindexphi8;
				while(1){
					if((tmp6&255)!==0)if((tmp6&255)!==37){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						tmp6=_$pstr$p105[Lgeptoindexphi]|0;
						continue;
					}
					break;
				}
				Lsmax_select5=(0+Lgeptoindexphi|0)-(0+Lgeptoindexphi8|0)|0;
				tmp6=2147483647-tmp5|0;
				if((Lsmax_select5|0)<=(tmp6|0)){
					if(!(tmp2))if((Larg0.i0&32|0)===0)___fwritex(_$pstr$p105,0+Lgeptoindexphi8|0,Lsmax_select5,Larg0);
					if((Lsmax_select5|0)!==0){
						Lgeptoindexphi8=Lgeptoindexphi;
						continue;
					}
					if(tmp2)return 0|0;
					tmp8=_$pstr$p105[(0+Lgeptoindexphi|0)+1|0]|0;
					_pop_arg(tmp0,_states$p805[(tmp8<<24>>24)-65|0]|0,Larg1);
					if((_$pstr$p105[(0+Lgeptoindexphi|0)+1|0]|0)===115){
						tmp9=tmp0.a2;
						tmp8=tmp0.a2o|0;
						L$poptgep32$poptgep$poptgepsqueezed=tmp9!==nullArray||tmp8!==0?tmp9:_$pstr$p2$p809;
						Lgeptoindexphi8=tmp9!==nullArray||tmp8!==0?tmp8:0;
						if(0){
							Lsmax_select5=0;
						}else{
							tmp8=2147483647;
							Lsub51=0;
							while(1){
								if((L$poptgep32$poptgep$poptgepsqueezed[Lgeptoindexphi8+Lsub51|0]&255)!==0){
									tmp8=tmp8-1|0;
									if((tmp8|0)!==0){
										Lsub51=Lsub51+1|0;
										continue;
									}
									Lsmax_select5=2147483647;
								}else{
									Lsmax_select5=(Lgeptoindexphi8+Lsub51|0)-(Lgeptoindexphi8)|0;
								}
								break;
							}
						}
						if((L$poptgep32$poptgep$poptgepsqueezed[Lgeptoindexphi8+Lsmax_select5|0]&255)!==0)break a;
						Lsub51=Lgeptoindexphi8+Lsmax_select5|0;
						tmp9=L$poptgep32$poptgep$poptgepsqueezed;
						tmp8=0;
					}else{
						L$poptgep32$poptgep$poptgepsqueezed=tmp0.a0;
						Lsub51=L$poptgep32$poptgep$poptgepsqueezed[0]|0;
						LsubSel=L$poptgep32$poptgep$poptgepsqueezed[1]|0;
						if((LsubSel|0)<0){
							LsubSel=(Lsub51|0)!==0?LsubSel^ -1|0:-LsubSel|0;
							Lsub51=-Lsub51|0;
							L$poptgep32$poptgep$poptgepsqueezed[0]=Lsub51;
							L$poptgep32$poptgep$poptgepsqueezed[1]=LsubSel;
							tmp8=1;
						}else{
							tmp8=0;
						}
						if((LsubSel|0)!==0){
							Lgeptoindexphi8=0;
							while(1){
								Lsmax_select5=___udivti3(Lsub51,LsubSel,10)|0;
								tmp13=_cheerpSretSlot|0;
								Lgeptoindexphi8=Lgeptoindexphi8-1|0;
								tmp1[40+Lgeptoindexphi8|0]=((__imul(Lsmax_select5,246)|0)+Lsub51|0)+48|0;
								if(LsubSel>>>0>9){
									Lsub51=Lsmax_select5;
									LsubSel=tmp13;
									continue;
								}
								break;
							}
							Lsub51=Lsmax_select5;
						}else{
							Lgeptoindexphi8=0;
						}
						if((Lsub51|0)!==0)while(1){
							LsubSel=(Lsub51>>>0)/10|0;
							Lgeptoindexphi8=Lgeptoindexphi8-1|0;
							tmp1[40+Lgeptoindexphi8|0]=((__imul(LsubSel,246)|0)+Lsub51|0)+48|0;
							if(Lsub51>>>0>=10){
								Lsub51=LsubSel;
								continue;
							}
							break;
						}
						if(0)break a;
						if(1){
							Lsub51=((40)-(40+Lgeptoindexphi8|0)|0)+((L$poptgep32$poptgep$poptgepsqueezed[1]|L$poptgep32$poptgep$poptgepsqueezed[0]|0)===0?1:0)|0;
							L$poptgep32$poptgep$poptgepsqueezed=tmp1;
							Lsmax_select5=(Lsub51|0)>-1?Lsub51|0: -1|0;
							Lgeptoindexphi8=40+Lgeptoindexphi8|0;
							Lsub51=40;
							tmp9=tmp1;
						}else{
							Lgeptoindexphi8=40;
							tmp9=tmp1;
							L$poptgep32$poptgep$poptgepsqueezed=tmp1;
							Lsub51=40;
							Lsmax_select5=0;
						}
					}
					Lsub51=(Lsub51)-(Lgeptoindexphi8)|0;
					LsubSel=(Lsmax_select5|0)>(Lsub51|0)?Lsmax_select5|0:Lsub51|0;
					if((LsubSel|0)<=(2147483647-tmp8|0)){
						tmp13=LsubSel+tmp8|0;
						Lsmax_select5=(tmp13|0)>0?tmp13|0:0|0;
						if((Lsmax_select5|0)<=(tmp6|0)){
							_pad$p792(Larg0,32,Lsmax_select5,tmp13,0);
							if((Larg0.i0&32|0)===0)___fwritex(_$pstr$p790,0,tmp8,Larg0);
							_pad$p792(Larg0,48,Lsmax_select5,tmp13,65536);
							_pad$p792(Larg0,48,LsubSel,Lsub51,0);
							if((Larg0.i0&32|0)===0)___fwritex(L$poptgep32$poptgep$poptgepsqueezed,Lgeptoindexphi8,Lsub51,Larg0);
							_pad$p792(Larg0,32,Lsmax_select5,tmp13,8192);
							Lgeptoindexphi8=Lgeptoindexphi+2|0;
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
	___vfprintf(tmp1.d,tmp1.o);
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
	tmp0=typeof CHEERP_ENV == 'undefined' ? null : CHEERP_ENV;
	if(tmp0!==null)tmp0=typeof CHEERP_ENV == 'undefined' ? null : CHEERP_ENV;
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
			if(Larg1<<24<=-16777216)___assert_fail(_$pstr$p4$p84,0,_$pstr$p2$p13,0,79,___func__$p_ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h,0);
			;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp2;
		}else{
			if((tmp2&192|0)!==128)___assert_fail(_$pstr$p1$p12,0,_$pstr$p2$p13,0,65,___func__$p_ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h,0);
			;
			tmp2=(__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint<<6)+(tmp2&63)|0;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=tmp2;
			L$psink=L$psink-1|0;
			__ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=L$psink;
			if((L$psink|0)!==0)break a;
		}
		__ZN12_GLOBAL__N_119CheerpStringBuilder15outputCodepointEj(Larg0,Marg0,tmp2);
	}else{
		if((L$psink|0)!==0)___assert_fail(_$pstr$p5,0,_$pstr$p2$p13,0,90,___func__$p_ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h,0);
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
	__Z7webMainv();
}
var _$pstr$p2=new Uint8Array([100,45,62,103,101,116,95,107,105,110,100,40,41,32,61,61,32,73,78,73,84,95,77,69,77,79,82,89,0]);
var _$pstr$p3=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,112,111,115,116,95,104,111,108,105,100,97,121,95,99,104,101,101,114,112,120,47,119,111,114,107,101,114,99,108,111,99,107,46,99,112,112,0]);
var ___func__$p_Z9onMessagePN6client12MessageEventIPNS_6ObjectEEE=new Uint8Array([111,110,77,101,115,115,97,103,101,0]);
var _flagBase=null;
var _signalOffset=0;
var _startRealTime=0;
var _msgPort=null;
var _buf$p768=new Uint8Array(8);
var ___stderr_FILE={i0:5,a1:nullArray,a2:nullArray,a3:___stdio_close,a4:nullArray,a4o:0,a5:nullArray,a5o:0,a6:null,a7:nullArray,a7o:0,a8:null,a9:___stdio_write,a10:___stdio_seek,a11:_buf$p768,a11o:8,i12:0,a13:null,a14:null,i15:2,i16:0,i17:0,i18:0,i19:-1,i20:-1,a21:null,a22:new Int32Array(6),a23:null,a24:null,a25:null,a26:null,a27:null,a28:null};
var ___c_locale=[null,null,null,null,null,null];
var ___dummy_thread={a0:null,a1:null,a2:null,a3:null,i4:0,i5:0,i6:0,i7:0,i8:0,i9:0,i10:0,a11:null,i12:0,a13:null,i14:0,i15:0,a16:null,a17:null,a18:null,a19:{a0:[nullObj],i1:0,a2:null},i20:0,i21:0,a22:___c_locale[0],a23:[0],a24:null,a25:null};
var _cheerpSretSlot=0;
var __ZGVZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=0;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE4curr=null;
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9remaining=0;
var _$pstr$p1$p12=new Uint8Array([40,99,104,32,38,32,49,57,50,41,32,61,61,32,49,50,56,0]);
var _$pstr$p2$p13=new Uint8Array([47,104,111,109,101,47,111,109,97,116,104,111,116,47,100,101,118,47,99,104,101,101,114,112,47,99,104,101,101,114,112,45,108,105,98,115,47,115,121,115,116,101,109,47,98,114,111,119,115,101,114,46,99,112,112,0]);
var ___func__$p_ZN12_GLOBAL__N_119CheerpStringBuilder11processCharERjS1_h=new Uint8Array([112,114,111,99,101,115,115,67,104,97,114,0]);
var __ZZN12_GLOBAL__N_117do_syscall_writevEPK5ioveclE9codepoint=0;
var _$pstr$p4$p84=new Uint8Array([99,104,32,60,32,49,50,56,117,0]);
var _$pstr$p5=new Uint8Array([114,101,109,97,105,110,105,110,103,32,61,61,32,48,0]);
var _aio_fd_cnt=0;
var _maplock={a0:new Int32Array(16),a1:[nullObj,nullObj,nullObj,nullObj,nullObj,nullObj,nullObj,nullObj]};
var _$pstr$p105=new Uint8Array([65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,32,40,37,115,58,32,37,115,58,32,37,100,41,10,0]);
var _states$p805=new Uint8Array([25,0,10,0,25,25,25,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,25,0,17,10,25,25,25,3,10,7,0,1,27,9,11,24,0,0,9,6,11,0,0,11,0,6,25,0,0,0,25,25,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,25,0,10,13,25,25,25,0,13,0,0,2,0,9,14,0,0,0,9,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,19,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,4,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,17,0,0,0,0,17,0,0,0,0,9,18,0,0,0,0,0,18,0,0,18,0,0,26,0,0,0,26,26,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,26,26,26,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,23,0,0,0,0,9,20,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,21,0,0,0,0,9,22,0,0,0,0,0,22,0,0,22,0,0]);
var _$pstr$p2$p809=new Uint8Array([40,110,117,108,108,41,0]);
var _$pstr$p790=new Uint8Array([45,43,32,32,32,48,88,48,120,0]);
var _buf$p778=new Uint8Array(1032);
var ___stdout_FILE={i0:5,a1:nullArray,a2:nullArray,a3:___stdio_close,a4:nullArray,a4o:0,a5:nullArray,a5o:0,a6:null,a7:nullArray,a7o:0,a8:null,a9:___stdout_write,a10:___stdio_seek,a11:_buf$p778,a11o:8,i12:1024,a13:null,a14:null,i15:1,i16:0,i17:0,i18:0,i19:-1,i20:10,a21:null,a22:new Int32Array(6),a23:null,a24:null,a25:null,a26:null,a27:null,a28:null};
var __ZL8buf_size=0;
var __ZL16argv_environ_buf=new Uint8Array(65536);
var __ZGVZL8read_envPcjjE14client_environ=0;
var __ZZL8read_envPcjjE14client_environ=null;
var _main_tls$p1={a0:null,a1:nullArray,a1o:0,i2:0,i3:0,i4:0,i5:0};
var ___tlsImage=0;
var ___tlsImageSize=1048584;
var ___libc=new constructor_struct$p_Z6__libc();
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
	this.a19={a0:[nullObj],i1:0,a2:null};
	this.i20=0;
	this.i21=0;
	this.a22=null;
	this.a23=[0];
	this.a24=null;
	this.a25=null;
}
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
function createArray_struct$p_Z3arg(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]={a0:new Int32Array(2),d1:-0.,a2:nullArray,a2o:0};
	return r;
}
function createPointerArray(r,s,e,v){for(var i=s;i<e;i++)r[i]=v;return r;}
function handleVAArg(ptr){var ret=ptr.d[ptr.o];ptr.o++;return ret;}
__start();
