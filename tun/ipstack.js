"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var JX=Math.imul;var JY=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function Kn(p){return (typeof self==='object')?fetch(p).then(r=>r.arrayBuffer()):new Promise((y,n)=>{import('fs').then(r=>r.readFile(p,(e,d)=>{if(e)n(e);else y(d);}));});}var Kf=1048576|0;var CHEERP_ENV=null,CHEERP_ARGV=null;function Fm(){Fh();}function Fl(){Fi();}function Fk(){c0=Fj();}function Fj(){return new Array();}function Fi(){var g=null;g=new Uint8Array(16);cA=g;dK=16;g=I_(16);cB=g;}function Fh(){var g=null;g=new Uint8Array(16);ch=g;dJ=16;g=I9(16);ci=g;}function JD(){var i=null,g=0;i=rD();g=oSlot;oSlot=g;return i;}function Fb(g,h){rE(g,h);}function JC(o,p,m,k,i){var g=0;g=en(m)|0;o[p].a1=i;g=sr(ek(o,p)|0,o[p].a0|0,g,k)|0;if((g|0)!==0)h_(o[p],g);return g|0;}function JB(i,j,g){i[j].a2=g;yD(ek(i,j)|0,i[j].a0|0);}function JE(x,v){var o=null,m=null,k=0,t=null,s=null,q=0,g=0,i=0;o=cD();m=-32+o|0;bc(m);k=16+m|0;jw(k,v.length);if(((v.length)|0)>0){g=0;while(1){t=jv(v,(+(g|0)));i=oSlot;s=a;q=ju(k,g)|0;s[q]=t[i]|0;g=g+1|0;if((g|0)<((v.length)|0))continue;break;}}g=x.a0|0;i=m|0;fE(i,k);g=yF(g,i)|0;dA(i);dA(k);bc(o);return g|0;}function JA(g,h){Fb(g,h);}function Jz(g){n0(g.a0|0);}function Jy(g){nZ(g.a0|0);}function Jx(i,g){return (oz(i.a0|0,g)|0)<<24>>24|0;}function Jw(k,l,i){var g=0;g=ou(k[l].a0|0)|0;if((g&255)===0){k[l].a3=i;zC(ek(k,l)|0,k[l].a0|0);}return g<<24>>24|0;}function Jv(g){jy(g);}function Ju(){var i=null,g=0;i=zG();g=oSlot;oSlot=g;return i;}function Fa(g,h){zH(g,h);}function Jt(i,g){return (w7(i.a1|0,g)|0)<<24>>24|0;}function Js(i,j,g){i[j].a0=g;wb(iN(i,j)|0,i[j].a1|0);}function Jr(z,y,x,v){var o=null,i=0,t=0,s=null,q=0,k=null,m=0,g=0;o=cD();k=-16+o|0;bc(k);m=en(x)|0;i=k|0;jw(i,y.length);if(((y.length)|0)>0){g=0;while(1){k=jv(y,(+(g|0)));t=oSlot;s=a;q=ju(i,g)|0;s[q]=k[t]|0;g=g+1|0;if((g|0)<((y.length)|0))continue;break;}}m=Ai(z.a1|0,i,m,v)|0;dA(i);bc(o);return m|0;}function Jq(g,h){Fa(g,h);}function Jp(g){jx(g);}function E$(i){var g=0;g=i.a0|0;if((g|0)!=(0|0))xg(g);}function jy(g){E$(g);}function Aj(i){var g=0;g=i.a1|0;if((g|0)!=(0|0))w3(g);}function jx(g){Aj(g);}function jv(i,g){oSlot=0+~~g|0;return i;}function iN(g,h){var i=null;if(g!==nullArray||h!==0){i=cB;return (JX(h,8))-(JX(0,8))>>3|0;}return  -1|0;}function z7(o,m,n,k,i,g){var t=0,s=null,q=0;t=en(i)|0;s=z6(o);q=oSlot;z5(s[q],m,n,k,t,g);}function z6(i){var k=0,g=null;k=dK|0;if((i|0)>-1){if((k|0)>(i|0)){g=cA;if((g[i]&1)!==0){g=cB;oSlot=0+i|0;return g;}oSlot=0;return nullArray;}oSlot=0;return nullArray;}oSlot=0;return nullArray;}function z5(o,m,n,k,i,g){var s=0,q=null;s=jp(m,n)|0;a:{if((k|0)!==0)if(!(s)){q=d8(m,n,k);o.a0(q,i,g);break a;}o.a0(null,i,g);}}function jp(g,h){var i=0;i=(g.buffer===__heap);if(i){i=h;return ((i|0)===0?1:0)|0;}return 0|0;}function d8(k,l,i){var m=0,g=null;m=l;g=k;g=g;if((i|0)!==0){if((m|0)===0)if(((g.length)|0)===(i|0))return g;return g.subarray((+(m>>>0)),(+(m+i>>>0)));}if((m|0)===0)return g;return g.subarray((+(m>>>0)));}function zH(k,l){var i=0,g=null;i=iN(k,l)|0;g=cB;jx(g[i]);g=cA;g[i]=0;}function zG(){var g=0,k=null,i=null;g=zF()|0;k=cB;zE(k[g]);i=cA;i[g]=1;oSlot=0+g|0;return k;}function zF(){var k=0,i=null,g=0;k=dK|0;a:{if((k|0)>1){i=cA;g=1;while(1){if((i[g]&1)!==0){g=g+1|0;if((g|0)===(k|0))break a;continue;}break;}}else{g=1;}if((g|0)!==(k|0))return g|0;}g=k<<1;dK=g;i=cB;if(i!==nullArray||0!==0)i=Jb(i,i.length,g/8|0);else i=I_(g/8|0);cB=i;g=dK|0;i=cA;if(i!==nullArray||0!==0)i=(function(){var __old__=i;var __ret__=new Uint8Array(g/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else i=new Uint8Array(g/1|0);cA=i;return k|0;}function zE(g){var k=null,i=0;k=a;i=c9(32)|0;xe(i|0);g.a1=(i|0);}function ek(g,h){var i=null;if(g!==nullArray||h!==0){i=ci;return (JX(h,16))-(JX(0,16))>>4|0;}return  -1|0;}function ze(o,m,k,i,g){var s=null,q=0;s=fH(o);q=oSlot;zd(s[q],m|0,k,i,g);}function fH(g){var k=0,i=null;k=dJ|0;if((g|0)>-1){if((k|0)>(g|0)){i=ch;if((i[g]&1)!==0){i=ci;oSlot=0+g|0;return i;}oSlot=0;return nullArray;}oSlot=0;return nullArray;}oSlot=0;return nullArray;}function zd(o,m,k,i,g){var t=null,s=null,q=0;t=[0];t[0]=(m|0);s=v6(t,0);q=oSlot;o.a3(Object.create(IpStack.TCPSocket.prototype,{this:{value:{d:s,o:q}}}),k,i,g<<24>>24);}function v6(i,j){var g=0,m=null,k=null;g=iM()|0;m=ci;v4(m[g],i[j]|0);k=ch;k[g]=1;oSlot=0+g|0;return m;}function iM(){var k=0,i=null,g=0;k=dJ|0;a:{if((k|0)>1){i=ch;g=1;while(1){if((i[g]&1)!==0){g=g+1|0;if((g|0)===(k|0))break a;continue;}break;}}else{g=1;}if((g|0)!==(k|0))return g|0;}g=k<<1;dJ=g;i=ci;if(i!==nullArray||0!==0)i=Ja(i,i.length,g/16|0);else i=I9(g/16|0);ci=i;g=dJ|0;i=ch;if(i!==nullArray||0!==0)i=(function(){var __old__=i;var __ret__=new Uint8Array(g/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else i=new Uint8Array(g/1|0);ch=i;return k|0;}function v4(i,g){i.a0=(g|0);i.a1=null;i.a2=null;}function yj(k,i,j,g){var o=null,m=0;o=fH(k);m=oSlot;yi(o[m],i,j,g);}function yi(k,i,j,g){var o=0,m=null;o=jp(i,j)|0;a:{if((g|0)!==0)if(!(o)){m=d8(i,j,g);k.a2(m);break a;}k.a2(null);}}function h_(i,g){var k=null;k=i.a1;i.a1=null;k(g);}function r5(i,g){var m=null,k=0;m=fH(i);k=oSlot;h_(m[k],g);}function rE(k,l){var i=0,g=null;i=ek(k,l)|0;g=ci;jy(g[i]);g=ch;g[i]=0;}function rD(){var g=0,k=null,i=null;g=iM()|0;k=ci;rC(k[g]);i=ch;i[g]=1;oSlot=0+g|0;return k;}function rC(g){var k=null,i=0;k=a;i=c9(96)|0;o2(i|0);g.a0=(i|0);g.a1=null;g.a2=null;}function rB(k){var i=null,g=null;i=hY();g=hY();k.a0=new Promise(function(__f,__r){i.inner=__f;g.inner=__r;});;k.a1=i.inner;k.a2=g.inner;}function hY(){return new Object();}function fd(){return ~~ +performance.now()|0;}function ry(i,j,g){var k=null;k=new Uint8Array(d8(i,j,g));i9(k);}function rw(){+setInterval(rv(),10);}function rv(){var g=null,i=null;g={a0:null,a1:null,a2:null};rt(g);i=rs(g);rr(g);return i;}function rt(g){rl(g);}function rs(i){var g=null;if(i.a1!==null){g=[{a0:null,a1:null}];g[0].a0=i.a1;g[0].a1=i.a2;g=Kc(rp,g[0]);rn(i.a0,g);i.a1=null;}return i.a0;}function rr(i){var g=null;g=i.a1;if(g!==null)g(i.a2);}function rp(g){g.a0(g.a1);}function rn(k,i){var g=null;g=jD;if(g!==null){g.set(k,i);return;}g=new Map();jD=g;g.set(k,i);}function rl(g){rk(g);}function rk(g){var i=null;i=ri;g.a0=i;g.a1=null;g.a2=null;}function ri(){rh();}function rh(){ww();}function Jn(g){rg();pa();o_();}function Jm(B){var x=null,g=null,v=0,q=0,t=null,z=0,y=null,o=null,i=0,k=0,m=0,s=null;x=cD();g=-104+x|0;bc(g);v=88+g|0;cJ(v,B.localIp);q=72+g|0;qj(q);o=B.ipMap;if(o!==undefined){t=Object.keys(o);if(((t.length)|0)>0){i=56+g|0;k=40+g|0;m=0;while(1){s=e5(t,(+(m|0)));z=oSlot;s=s[z];y=o[s];cJ(i,s);cJ(k,y);qf(32+g|0,q,i,k);bH(k);bH(i);m=m+1|0;if((m|0)<((t.length)|0))continue;break;}}}i=16+g|0;hx(i);o=B.dnsIp;if(undefined!==o){k=g|0;cJ(k,B.dnsIp);qe(i,k)|0;bH(k);}rd(v,q,i);bH(i);qd(q);bH(v);bc(x);}function cJ(i,g){pj(i|0,g);}function e5(i,g){oSlot=0+~~g|0;return i;}function pj(q,o){var m=0,k=0,g=0,i=0;hx(q|0);m=o.length;if((m|0)!==0){k=0;while(1){i=o.charCodeAt((+(k>>>0)));if(i-57344>>>0<4294965248){g=i;}else if(i>>>0<56320){g=i<<10&1047552;}else{g=(i&1023|g)+65536|0;}k=k+1|0;a:{if((k|0)!==(m|0))if((i&56320|0)===55296)break a;if(g>>>0<128){i=g;}else if(g>>>0<2048){ck(q|0,g>>>6|192);i=g&63|128;}else if(g>>>0<65536){ck(q|0,g>>>12|224);ck(q|0,g>>>6&63|128);i=g&63|128;}else{ck(q|0,g>>>18|240);ck(q|0,g>>>12&63|128);ck(q|0,g>>>6&63|128);i=g&63|128;}ck(q|0,i);}if((k|0)!==(m|0))continue;break;}}}function Jl(){ql();}function Jk(o){var k=0,g=0,m=0,i=null;k=o.length;g=a8(0,k)|0;if((g|0)!=(0|0)){i=a;m=c[4+g>>2]|0;i=d8(i,m,k);i.set(o);ph(g);}}function Jj(g){i9=g;}function Ji(o){var k=null,i=null,g=0,m=0;k=cD();i=-16+k|0;bc(i);g=i|0;cJ(g,o);m=o5(g)|0;bH(g);bc(k);return m|0;}function Jh(x){var t=null,s=0,v=0,k=0,o=0,q=null,g=null,m=0,i=0;t=cD();q=-16+t|0;bc(q);s=q|0;o4(s,x);q=a;v=co(s)|0;g=String();m=0;while(1){k=q[v+m|0]|0;if((k&255)!==0){o=k&255;if(k<<24>-16777216){i=o;}else if((k&255)<192){i=(o&63)+(i<<6)|0;}else if((k&255)<224){i=o&31;}else if((k&255)<240){i=o&15;}else{i=o&7;}m=m+1|0;a:{if((m|0)!==-1)if((q[v+m|0]&192)===128)break a;if(i>>>0<65536)g=g.concat(String.fromCharCode(i));else{g=g.concat(String.fromCharCode(i-65536>>>10|55296));g=g.concat(String.fromCharCode(i&1023|56320));}}if((m|0)!==-1)continue;bH(s);bc(t);return g;}break;}bH(s);bc(t);return g;}function hh(i,g){var o=null,m=0,k=null;k=c0;o=hg(k,(+(i|0)));m=oSlot;k=o[m];o[m]=null;k(g);}function hg(i,g){oSlot=0+~~g|0;return i;}function Jg(t){var m=null,k=0,s=null,q=null,o=0,g=null,i=0;m=cD();g=-16+m|0;bc(g);k=g|0;cJ(k,t);g={a0:null,a1:null,a2:null};rB(g);i=c0.indexOf(null);if((i|0)<0){i=c0.length;+c0.push(g.a1);}else{s=c0;q=hg(s,(+(i|0)));o=oSlot;q[o]=g.a1;}pf(k,i);g=g.a0;bH(k);bc(m);return g;}function tF(o,m,k){var i=null,g=null;g=[0];g[0]=(m|0);i=new Int32Array(2);i[0]=k;i[1]=o;g=tE(i,1,g,0,i,0);tD(g);;}function tE(o,p,m,n,k,l){var q=0,g=null,i=null;g=l9;if(g!==null)return ii(g,o,p,m,n,k,l);g={a0:nullArray,a1:nullArray,i2:0};g.i2=16;i=I8(16);g.a0=i;q=g.i2|0;i=new Uint8Array(q/1|0);g.a1=i;l9=g;return ii(g,o,p,m,n,k,l);}function tD(k){var o=0,m=0,i=null,g=null;o=k.a4|0;g=a;m=c[4+o>>2]|0;g=fh(g,m);i=new CheerpException(g);k.a0=i;throw i;;}function fh(q,r){var k=0,o=0,g=null,m=0,i=0;g=String();m=0;while(1){k=q[r+m|0]|0;if((k&255)!==0){o=k&255;if(k<<24>-16777216){i=o;}else if((k&255)<192){i=(o&63)+(i<<6)|0;}else if((k&255)<224){i=o&31;}else if((k&255)<240){i=o&15;}else{i=o&7;}m=m+1|0;a:{if((m|0)!==-1)if((q[r+m|0]&192)===128)break a;if(i>>>0<65536)g=g.concat(String.fromCharCode(i));else{g=g.concat(String.fromCharCode(i-65536>>>10|55296));g=g.concat(String.fromCharCode(i&1023|56320));}}if((m|0)!==-1)continue;return g;}break;}return g;}function ii(s,q,r,o,p,m,n){var x=null,v=0,t=0,k=0,g=null,i=0;k=s.i2|0;a:{b:{if((k|0)>1){g=s.a1;i=1;while(1){if((g[i]&255)!==0){i=i+1|0;if((i|0)===(k|0))break b;continue;}break;}}else{i=1;}if((i|0)!==(k|0)){g=s.a1;k=i;break a;}}s.i2=k<<1;g=s.a0;i=JX(k,96)|0;if(g!==nullArray||0!==0)g=I$(g,g.length,i/48|0);else g=I8(i/48|0);s.a0=g;i=s.i2|0;g=s.a1;if(g!==nullArray||0!==0)g=(function(){var __old__=g;var __ret__=new Uint8Array(i/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else g=new Uint8Array(i/1|0);s.a1=g;}x=s.a0;i=q[r]|0;v=o[p]|0;t=m[n]|0;x[k].a1=null;x[k].i2=i;x[k].a3=null;x[k].a4=v;x[k].a5=null;x[k].i6=t;x[k].i7=1;x[k].i8=0;x[k].a10=null;x[k].a11=null;g[k]=1;return x[k];}function mU(){throw new Error('Cheerp: Signal raised');;}function mT(o){var m=null,i=null,k=null,g=0;m=mR();i=(typeof process == 'undefined' ? [] : process.argv) || [];if(((i.length)|0)!==0){g=0;while(1){k=i[(+(g>>>0))];if(k.startsWith(o))+m.push(k.substr((+((o.length)|0))));g=g+1|0;if(g>>>0<(i.length)>>>0)continue;break;}}return m;}function gR(o,p,m,k,i){var g=0;if((k.length)>>>0>i>>>0){g=mS(o,p,m,k[(+(i>>>0))])|0;if(g>>>0<m>>>0)o[p+g|0]=0;return g+1|0;}return 0|0;}function mS(v,w,t,s){var q=0,o=0,k=0,i=0,m=0,g=0;q=s.length;if((q|0)===0)return 0|0;m=0;i=0;k=0;while(1){g=s.charCodeAt((+(i>>>0)));a:{if((g& -2048|0)===55296){o=i+1|0;if(o>>>0<q>>>0){i=s.charCodeAt((+(o>>>0)));g=((i|g)&1023)+65536|0;i=o;}else{g=-1;}}else if(g>>>0>1114111){g=-1;}else{if(g>>>0<128){if(m>>>0<t>>>0){v[w+k|0]=g;k=k+1|0;g=1;break a;}g=1;break a;}if(g>>>0<2048){if(m+1>>>0<t>>>0){v[w+k|0]=g>>>6|192;v[(w+k|0)+1|0]=g&63|128;k=k+2|0;g=2;break a;}g=2;break a;}if(g>>>0<65536){if(m+2>>>0<t>>>0){v[w+k|0]=g>>>12|224;v[(w+k|0)+1|0]=g>>>6&63|128;v[(w+k|0)+2|0]=g&63|128;k=k+3|0;g=3;break a;}g=3;break a;}}if(m+3>>>0<t>>>0){v[w+k|0]=g>>>18|240;v[(w+k|0)+1|0]=g>>>12&63|128;v[(w+k|0)+2|0]=g>>>6&63|128;v[(w+k|0)+3|0]=g&63|128;k=k+4|0;g=4;}else{g=4;}}m=m+g|0;i=i+1|0;if(i>>>0<q>>>0)continue;break;}return m|0;}function mR(){return new Array();}function mM(m,n,k,i){var g=null;if(kW|0)return (gR(m,n,k,kV,i)|0)|0;g=CHEERP_ENV;if(g!==null)g=CHEERP_ENV;else g=mT("--cheerp-env=");kV=g;kW=1;return (gR(m,n,k,g,i)|0)|0;}function mJ(v,t){var i=null,s=null,o=0,m=0,g=0,k=0,q=0;if(l8|0){i=gA;}else{i=String();gA=i;l8=1;}s=[null];mI(s,0,i);if((t|0)>0){m=0;o=0;while(1){g=(m<<3)+v|0;k=c[4+g>>2]|0;if((k|0)!==0){o=k+o|0;i=a;q=c[g>>2]|0;if((k|0)>0){g=0;while(1){mH(s,0,i[q+g|0]|0);g=g+1|0;if((g|0)!==(k|0))continue;break;}}}m=m+1|0;if((m|0)!==(t|0))continue;break;}}else{o=0;}i=mG(s,0);i=i.split("\n");m=i.length;if((m|0)>1){q=0;k=1;while(1){s=e5(i,(+(q|0)));g=oSlot;console.log(s[g]);q=k+1|0;if((q|0)!==(m|0)){g=q;q=k;k=g;continue;}break;}}s=e5(i,(+(m-1|0)));k=oSlot;gA=s[k];return o|0;}function mI(i,j,g){i[j]=g;}function mH(q,r,o){var m=null,k=null,s=0,i=0,g=0;i=gz|0;g=o&255;m=1069936|0;k=1069924|0;a:if((o&255)<192){if((i|0)===0){if(o<<24<=-16777216)dQ(1069912|0,m,79,k);;eG=g;}else{if((g&192|0)!==128)dQ(1069992|0,m,65,k);;g=(eG<<6)+(g&63)|0;eG=g;i=i-1|0;gz=i;if((i|0)!==0)break a;}mE(q,r,g);}else{if((i|0)!==0)dQ(1069896|0,m,90,k);;if((o&255)<224){s=31;i=1;}else{s=(o&255)<240?15|0:7|0;i=(o&255)<240?2|0:3|0;}gz=i;eG=s&g;}}function mG(g,h){return g[h];}function mE(k,l,i){var g=null;a:{if(i>>>0<65536){if((i|0)===0)break a;g=k[l];g=g.concat(String.fromCharCode(i));}else{g=k[l];g=g.concat(String.fromCharCode((i-65536>>>10)+55296|0));k[l]=g;g=g.concat(String.fromCharCode((i&1023)+56320|0));}k[l]=g;}}function mv(k,i,g){return (mM(a,k>>0,i,g)|0)|0;}function mu(o,m,k,i,g){z7(o,a,m>>0,k,i,g);}function mt(k,i,g){yj(k,a,i>>0,g);}function ms(i,g){ry(a,i>>0,g);}var c0=null;var cA=nullArray;var dK=0;var cB=nullArray;var ch=nullArray;var dJ=0;var ci=nullArray;var l9=null;var l8=0;var gA=null;var gz=0;var eG=0;var kW=0;var kV=null;var i9=null;var jD=null;function I5(){this.a0=null;this.a1=null;this.i2=0;this.a3=null;this.a4=0;this.a5=null;this.i6=0;this.i7=0;this.i8=0;this.a9=null;this.a10=null;this.a11=null;}function I8(e){var r=[];for(var i=0;i<e;i++)r[i]=new I5();return r;}function I9(e){var r=[];for(var i=0;i<e;i++)r[i]={a0:0,a1:null,a2:null,a3:null};return r;}function I_(e){var r=[];for(var i=0;i<e;i++)r[i]={a0:null,a1:0};return r;}function Ja(r,s,e){for(var i=s;i<e;i++)r[i]={a0:0,a1:null,a2:null,a3:null};return r;}function Jb(r,s,e){for(var i=s;i<e;i++)r[i]={a0:null,a1:0};return r;}function I$(r,s,e){for(var i=s;i<e;i++)r[i]=new I5();return r;}function Kc(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}function Kd(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}function CheerpException(m){var instance=new Error('Uncaught C++ exception: '+m);instance.name='CheerpException';Object.setPrototypeOf(instance,Object.getPrototypeOf(this));if(Error.captureStackTrace){Error.captureStackTrace(instance, CheerpException);}return instance;}CheerpException.prototype=Object.create(Error.prototype);function Kh(pages){try{var ret=KC.grow(pages);__heap=KC.buffer;Ki(__heap);return ret;}catch(e){return -1;}}var IpStack={TCPSocket:null,UDPSocket:null,down:null,dumpIP:null,init:null,input:null,output:null,parseIP:null,resolve:null,up:null,};var a=null,c=null,__asm=null,__heap=null;function Kj(){throw new Error('this should be unreachable');};var KC=new WebAssembly.Memory({initial:30,maximum:2048});var mD=null;var dQ=null;var pf=null;var bH=null;var hx=null;var ck=null;var o4=null;var co=null;var o5=null;var w3=null;var en=null;var jw=null;var ju=null;var Ai=null;var dA=null;var wb=null;var w7=null;var c9=null;var xe=null;var xg=null;var ou=null;var zC=null;var oz=null;var nZ=null;var n0=null;var fE=null;var yF=null;var yD=null;var sr=null;var o2=null;var a8=null;var ph=null;var ql=null;var qj=null;var qf=null;var qe=null;var rd=null;var qd=null;var rg=null;var pa=null;var o_=null;var ww=null;var cD=null;var bc=null;IpStack.TCPSocket=Kj;IpStack.UDPSocket=Kj;IpStack.down=Kj;IpStack.dumpIP=Kj;IpStack.init=Kj;IpStack.input=Kj;IpStack.output=Kj;IpStack.parseIP=Kj;IpStack.resolve=Kj;IpStack.up=Kj;export default function(g){CHEERP_ENV=(typeof g == 'undefined' ? null : g.env) || null;CHEERP_ARGV=(typeof g == 'undefined' ? null : g.argv) || null;return ((g&&g.buffer)?Promise.resolve(g.buffer):Kn((g&&g.absPath)?g.absPath:new URL('ipstack.wasm', import.meta.url))).then(g=>WebAssembly.instantiate(g,{i:{KC:KC,Fm:Fm,Fl:Fl,Fk:Fk,tF:tF,mJ:mJ,mU:mU,ms:ms,hh:hh,mt:mt,m0:Kj,ze:ze,fd:fd,mu:mu,r5:r5,rw:rw,mv:mv,Kh:Kh,}})).then(g=>{__asm=g.instance.exports;__heap=KC.buffer;Ki(__heap);mD=__asm.mD;dQ=__asm.dQ;pf=__asm.pf;bH=__asm.bH;hx=__asm.hx;ck=__asm.ck;o4=__asm.o4;co=__asm.co;o5=__asm.o5;w3=__asm.w3;en=__asm.en;jw=__asm.jw;ju=__asm.ju;Ai=__asm.Ai;dA=__asm.dA;wb=__asm.wb;w7=__asm.w7;c9=__asm.c9;xe=__asm.xe;xg=__asm.xg;ou=__asm.ou;zC=__asm.zC;oz=__asm.oz;nZ=__asm.nZ;n0=__asm.n0;fE=__asm.fE;yF=__asm.yF;yD=__asm.yD;sr=__asm.sr;o2=__asm.o2;a8=__asm.a8;ph=__asm.ph;ql=__asm.ql;qj=__asm.qj;qf=__asm.qf;qe=__asm.qe;rd=__asm.rd;qd=__asm.qd;rg=__asm.rg;pa=__asm.pa;o_=__asm.o_;ww=__asm.ww;cD=__asm.cD;bc=__asm.bc;IpStack.TCPSocket=function (){throw new Error("Class/Struct IpStack.TCPSocket do not have a [[cheerp::jsexport]]-ed constructor");};IpStack.TCPSocket.prototype.bind=function(a0){return Jx(this.this.d[this.this.o],a0);};IpStack.TCPSocket.prototype.close=function(){return JA(this.this.d,this.this.o);};IpStack.TCPSocket.prototype.connect=function(a0,a1,a2){return JC(this.this.d,this.this.o,a0,a1,a2);};IpStack.TCPSocket.create=function(){return Object.create(IpStack.TCPSocket.prototype,{this:{value:{d:JD(),o:oSlot}}});};IpStack.TCPSocket.prototype.delete=function(){return Jv(this.this.d[this.this.o]);};IpStack.TCPSocket.prototype.dispose=function(){return Fb(this.this.d,this.this.o);};IpStack.TCPSocket.prototype.listen=function(a0){return Jw(this.this.d,this.this.o,a0);};IpStack.TCPSocket.prototype.recv=function(a0){return JB(this.this.d,this.this.o,a0);};IpStack.TCPSocket.prototype.send=function(a0){return JE(this.this.d[this.this.o],a0);};IpStack.TCPSocket.prototype.shutdownRx=function(){return Jy(this.this.d[this.this.o]);};IpStack.TCPSocket.prototype.shutdownTx=function(){return Jz(this.this.d[this.this.o]);};IpStack.UDPSocket=function (){throw new Error("Class/Struct IpStack.UDPSocket do not have a [[cheerp::jsexport]]-ed constructor");};IpStack.UDPSocket.prototype.bind=function(a0){return Jt(this.this.d[this.this.o],a0);};IpStack.UDPSocket.prototype.close=function(){return Jq(this.this.d,this.this.o);};IpStack.UDPSocket.create=function(){return Object.create(IpStack.UDPSocket.prototype,{this:{value:{d:Ju(),o:oSlot}}});};IpStack.UDPSocket.prototype.delete=function(){return Jp(this.this.d[this.this.o]);};IpStack.UDPSocket.prototype.dispose=function(){return Fa(this.this.d,this.this.o);};IpStack.UDPSocket.prototype.recv=function(a0){return Js(this.this.d,this.this.o,a0);};IpStack.UDPSocket.prototype.sendto=function(a0,a1,a2){return Jr(this.this.d[this.this.o],a0,a1,a2);};IpStack.down=Jl;IpStack.dumpIP=Jh;IpStack.init=Jn;IpStack.input=Jk;IpStack.output=Jj;IpStack.parseIP=Ji;IpStack.resolve=Jg;IpStack.up=Jm;__asm.mD();var Kk={IpStack:IpStack,};return Kk;});}function Ki(g){a=new Uint8Array(g);c=new Int32Array(g);}