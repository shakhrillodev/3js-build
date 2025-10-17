(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const du="173",qs={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dE=0,Kd=1,pE=2,vm=1,xm=2,nr=3,Pr=0,zn=1,ir=2,Cr=0,Ys=1,Zd=2,jd=3,Jd=4,mE=5,Qr=100,gE=101,_E=102,vE=103,xE=104,yE=200,ME=201,EE=202,SE=203,bh=204,Ah=205,wE=206,bE=207,AE=208,TE=209,CE=210,RE=211,PE=212,LE=213,IE=214,Th=0,Ch=1,Rh=2,js=3,Ph=4,Lh=5,Ih=6,Dh=7,ym=0,DE=1,UE=2,Rr=0,NE=1,FE=2,OE=3,BE=4,zE=5,HE=6,VE=7,Mm=300,Js=301,Qs=302,Uh=303,Nh=304,bl=306,Fh=1e3,ns=1001,Oh=1002,Ei=1003,GE=1004,Ha=1005,Li=1006,zc=1007,is=1008,ar=1009,Em=1010,Sm=1011,Fo=1012,pu=1013,rs=1014,rr=1015,Ho=1016,mu=1017,gu=1018,to=1020,wm=35902,bm=1021,Am=1022,yi=1023,Tm=1024,Cm=1025,$s=1026,eo=1027,Rm=1028,_u=1029,Pm=1030,vu=1031,xu=1033,ml=33776,gl=33777,_l=33778,vl=33779,Bh=35840,zh=35841,Hh=35842,Vh=35843,Gh=36196,kh=37492,Wh=37496,Xh=37808,qh=37809,Yh=37810,$h=37811,Kh=37812,Zh=37813,jh=37814,Jh=37815,Qh=37816,tu=37817,eu=37818,nu=37819,iu=37820,ru=37821,xl=36492,su=36494,ou=36495,Lm=36283,au=36284,lu=36285,cu=36286,kE=3200,WE=3201,Im=0,XE=1,Tr="",Zn="srgb",no="srgb-linear",El="linear",Ue="srgb",As=7680,Qd=519,qE=512,YE=513,$E=514,Dm=515,KE=516,ZE=517,jE=518,JE=519,tp=35044,ep="300 es",sr=2e3,Sl=2001;class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=Math.PI/180,hu=180/Math.PI;function Vo(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[a&255]+En[a>>8&255]+En[a>>16&255]+En[a>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function ge(a,t,e){return Math.max(t,Math.min(e,a))}function QE(a,t){return(a%t+t)%t}function Hc(a,t,e){return(1-e)*a+e*t}function wo(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Fn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const tS={DEG2RAD:yl};class ae{constructor(t=0,e=0){ae.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,l=this.y-t.y;return this.x=s*n-l*r+t.x,this.y=s*r+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,r,s,l,c,u,f){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,l,c,u,f)}set(t,e,n,r,s,l,c,u,f){const d=this.elements;return d[0]=t,d[1]=r,d[2]=c,d[3]=e,d[4]=s,d[5]=u,d[6]=n,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,l=n[0],c=n[3],u=n[6],f=n[1],d=n[4],m=n[7],p=n[2],x=n[5],y=n[8],M=r[0],v=r[3],g=r[6],E=r[1],C=r[4],w=r[7],F=r[2],D=r[5],N=r[8];return s[0]=l*M+c*E+u*F,s[3]=l*v+c*C+u*D,s[6]=l*g+c*w+u*N,s[1]=f*M+d*E+m*F,s[4]=f*v+d*C+m*D,s[7]=f*g+d*w+m*N,s[2]=p*M+x*E+y*F,s[5]=p*v+x*C+y*D,s[8]=p*g+x*w+y*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],l=t[4],c=t[5],u=t[6],f=t[7],d=t[8];return e*l*d-e*c*f-n*s*d+n*c*u+r*s*f-r*l*u}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],l=t[4],c=t[5],u=t[6],f=t[7],d=t[8],m=d*l-c*f,p=c*u-d*s,x=f*s-l*u,y=e*m+n*p+r*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return t[0]=m*M,t[1]=(r*f-d*n)*M,t[2]=(c*n-r*l)*M,t[3]=p*M,t[4]=(d*e-r*u)*M,t[5]=(r*s-c*e)*M,t[6]=x*M,t[7]=(n*u-f*e)*M,t[8]=(l*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,l,c){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*l+f*c)+l+t,-r*f,r*u,-r*(-f*l+u*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Vc.makeScale(t,e)),this}rotate(t){return this.premultiply(Vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new oe;function Um(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Oo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function eS(){const a=Oo("canvas");return a.style.display="block",a}const np={};function Gs(a){a in np||(np[a]=!0,console.warn(a))}function nS(a,t,e){return new Promise(function(n,r){function s(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:r();break;case a.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function iS(a){const t=a.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rS(a){const t=a.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ip=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rp=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sS(){const a={enabled:!0,workingColorSpace:no,spaces:{},convert:function(r,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===Ue&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ue&&(r.r=Ks(r.r),r.g=Ks(r.g),r.b=Ks(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?El:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,l){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[no]:{primaries:t,whitePoint:n,transfer:El,toXYZ:ip,fromXYZ:rp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:n,transfer:Ue,toXYZ:ip,fromXYZ:rp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),a}const be=sS();function or(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ks(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ts;class oS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=Oo("canvas")),Ts.width=t.width,Ts.height=t.height;const n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=or(s[l]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(or(e[n]/255)*255):e[n]=or(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aS=0;class Nm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?s.push(Gc(r[l].image)):s.push(Gc(r[l]))}else s=Gc(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Gc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?oS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lS=0;class Hn extends cs{constructor(t=Hn.DEFAULT_IMAGE,e=Hn.DEFAULT_MAPPING,n=ns,r=ns,s=Li,l=is,c=yi,u=ar,f=Hn.DEFAULT_ANISOTROPY,d=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Vo(),this.name="",this.source=new Nm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=u,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fh:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fh:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Mm;Hn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,e=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*r+l[12]*s,this.y=l[1]*e+l[5]*n+l[9]*r+l[13]*s,this.z=l[2]*e+l[6]*n+l[10]*r+l[14]*s,this.w=l[3]*e+l[7]*n+l[11]*r+l[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const u=t.elements,f=u[0],d=u[4],m=u[8],p=u[1],x=u[5],y=u[9],M=u[2],v=u[6],g=u[10];if(Math.abs(d-p)<.01&&Math.abs(m-M)<.01&&Math.abs(y-v)<.01){if(Math.abs(d+p)<.1&&Math.abs(m+M)<.1&&Math.abs(y+v)<.1&&Math.abs(f+x+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(f+1)/2,w=(x+1)/2,F=(g+1)/2,D=(d+p)/4,N=(m+M)/4,V=(y+v)/4;return C>w&&C>F?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=D/n,s=N/n):w>F?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=D/r,s=V/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=N/s,r=V/s),this.set(n,r,s,e),this}let E=Math.sqrt((v-y)*(v-y)+(m-M)*(m-M)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(v-y)/E,this.y=(m-M)/E,this.z=(p-d)/E,this.w=Math.acos((f+x+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cS extends cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Hn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Nm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends cS{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fm extends Hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hS extends Hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let os=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,l,c){let u=n[r+0],f=n[r+1],d=n[r+2],m=n[r+3];const p=s[l+0],x=s[l+1],y=s[l+2],M=s[l+3];if(c===0){t[e+0]=u,t[e+1]=f,t[e+2]=d,t[e+3]=m;return}if(c===1){t[e+0]=p,t[e+1]=x,t[e+2]=y,t[e+3]=M;return}if(m!==M||u!==p||f!==x||d!==y){let v=1-c;const g=u*p+f*x+d*y+m*M,E=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const F=Math.sqrt(C),D=Math.atan2(F,g*E);v=Math.sin(v*D)/F,c=Math.sin(c*D)/F}const w=c*E;if(u=u*v+p*w,f=f*v+x*w,d=d*v+y*w,m=m*v+M*w,v===1-c){const F=1/Math.sqrt(u*u+f*f+d*d+m*m);u*=F,f*=F,d*=F,m*=F}}t[e]=u,t[e+1]=f,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,l){const c=n[r],u=n[r+1],f=n[r+2],d=n[r+3],m=s[l],p=s[l+1],x=s[l+2],y=s[l+3];return t[e]=c*y+d*m+u*x-f*p,t[e+1]=u*y+d*p+f*m-c*x,t[e+2]=f*y+d*x+c*p-u*m,t[e+3]=d*y-c*m-u*p-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,l=t._order,c=Math.cos,u=Math.sin,f=c(n/2),d=c(r/2),m=c(s/2),p=u(n/2),x=u(r/2),y=u(s/2);switch(l){case"XYZ":this._x=p*d*m+f*x*y,this._y=f*x*m-p*d*y,this._z=f*d*y+p*x*m,this._w=f*d*m-p*x*y;break;case"YXZ":this._x=p*d*m+f*x*y,this._y=f*x*m-p*d*y,this._z=f*d*y-p*x*m,this._w=f*d*m+p*x*y;break;case"ZXY":this._x=p*d*m-f*x*y,this._y=f*x*m+p*d*y,this._z=f*d*y+p*x*m,this._w=f*d*m-p*x*y;break;case"ZYX":this._x=p*d*m-f*x*y,this._y=f*x*m+p*d*y,this._z=f*d*y-p*x*m,this._w=f*d*m+p*x*y;break;case"YZX":this._x=p*d*m+f*x*y,this._y=f*x*m+p*d*y,this._z=f*d*y-p*x*m,this._w=f*d*m-p*x*y;break;case"XZY":this._x=p*d*m-f*x*y,this._y=f*x*m-p*d*y,this._z=f*d*y+p*x*m,this._w=f*d*m+p*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],l=e[1],c=e[5],u=e[9],f=e[2],d=e[6],m=e[10],p=n+c+m;if(p>0){const x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(d-u)*x,this._y=(s-f)*x,this._z=(l-r)*x}else if(n>c&&n>m){const x=2*Math.sqrt(1+n-c-m);this._w=(d-u)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(s+f)/x}else if(c>m){const x=2*Math.sqrt(1+c-n-m);this._w=(s-f)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(u+d)/x}else{const x=2*Math.sqrt(1+m-n-c);this._w=(l-r)/x,this._x=(s+f)/x,this._y=(u+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,l=t._w,c=e._x,u=e._y,f=e._z,d=e._w;return this._x=n*d+l*c+r*f-s*u,this._y=r*d+l*u+s*c-n*f,this._z=s*d+l*f+n*u-r*c,this._w=l*d-n*c-r*u-s*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,l=this._w;let c=l*t._w+n*t._x+r*t._y+s*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=n,this._y=r,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const x=1-e;return this._w=x*l+e*this._w,this._x=x*n+e*this._x,this._y=x*r+e*this._y,this._z=x*s+e*this._z,this.normalize(),this}const f=Math.sqrt(u),d=Math.atan2(f,c),m=Math.sin((1-e)*d)/f,p=Math.sin(e*d)/f;return this._w=l*m+this._w*p,this._x=n*m+this._x*p,this._y=r*m+this._y*p,this._z=s*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class Q{constructor(t=0,e=0,n=0){Q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,l=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*l,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*l,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,l=t.y,c=t.z,u=t.w,f=2*(l*r-c*n),d=2*(c*e-s*r),m=2*(s*n-l*e);return this.x=e+u*f+l*m-c*d,this.y=n+u*d+c*f-s*m,this.z=r+u*m+s*d-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,l=e.x,c=e.y,u=e.z;return this.x=r*u-s*c,this.y=s*l-n*u,this.z=n*c-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kc.copy(this).projectOnVector(t),this.sub(kc)}reflect(t){return this.sub(kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new Q,sp=new os;class Go{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=s.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,mi):mi.fromBufferAttribute(s,l),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(t.matrixWorld),this.union(Va)}const r=t.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),Ga.subVectors(this.max,bo),Cs.subVectors(t.a,bo),Rs.subVectors(t.b,bo),Ps.subVectors(t.c,bo),xr.subVectors(Rs,Cs),yr.subVectors(Ps,Rs),Xr.subVectors(Cs,Ps);let e=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Xr.z,Xr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Xr.z,0,-Xr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Xr.y,Xr.x,0];return!Wc(e,Cs,Rs,Ps,Ga)||(e=[1,0,0,0,1,0,0,0,1],!Wc(e,Cs,Rs,Ps,Ga))?!1:(ka.crossVectors(xr,yr),e=[ka.x,ka.y,ka.z],Wc(e,Cs,Rs,Ps,Ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],mi=new Q,Va=new Go,Cs=new Q,Rs=new Q,Ps=new Q,xr=new Q,yr=new Q,Xr=new Q,bo=new Q,Ga=new Q,ka=new Q,qr=new Q;function Wc(a,t,e,n,r){for(let s=0,l=a.length-3;s<=l;s+=3){qr.fromArray(a,s);const c=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),u=t.dot(qr),f=e.dot(qr),d=n.dot(qr);if(Math.max(-Math.max(u,f,d),Math.min(u,f,d))>c)return!1}return!0}const uS=new Go,Ao=new Q,Xc=new Q;let yu=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uS.setFromPoints(t).getCenter(n);let r=0;for(let s=0,l=t.length;s<l;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const e=Ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ao,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(Xc)),this.expandByPoint(Ao.copy(t.center).sub(Xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Yi=new Q,qc=new Q,Wa=new Q,Mr=new Q,Yc=new Q,Xa=new Q,$c=new Q;let Om=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){qc.copy(t).add(e).multiplyScalar(.5),Wa.copy(e).sub(t).normalize(),Mr.copy(this.origin).sub(qc);const s=t.distanceTo(e)*.5,l=-this.direction.dot(Wa),c=Mr.dot(this.direction),u=-Mr.dot(Wa),f=Mr.lengthSq(),d=Math.abs(1-l*l);let m,p,x,y;if(d>0)if(m=l*u-c,p=l*c-u,y=s*d,m>=0)if(p>=-y)if(p<=y){const M=1/d;m*=M,p*=M,x=m*(m+l*p+2*c)+p*(l*m+p+2*u)+f}else p=s,m=Math.max(0,-(l*p+c)),x=-m*m+p*(p+2*u)+f;else p=-s,m=Math.max(0,-(l*p+c)),x=-m*m+p*(p+2*u)+f;else p<=-y?(m=Math.max(0,-(-l*s+c)),p=m>0?-s:Math.min(Math.max(-s,-u),s),x=-m*m+p*(p+2*u)+f):p<=y?(m=0,p=Math.min(Math.max(-s,-u),s),x=p*(p+2*u)+f):(m=Math.max(0,-(l*s+c)),p=m>0?s:Math.min(Math.max(-s,-u),s),x=-m*m+p*(p+2*u)+f);else p=l>0?-s:s,m=Math.max(0,-(l*p+c)),x=-m*m+p*(p+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(qc).addScaledVector(Wa,p),x}intersectSphere(t,e){Yi.subVectors(t.center,this.origin);const n=Yi.dot(this.direction),r=Yi.dot(Yi)-n*n,s=t.radius*t.radius;if(r>s)return null;const l=Math.sqrt(s-r),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,l,c,u;const f=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,p=this.origin;return f>=0?(n=(t.min.x-p.x)*f,r=(t.max.x-p.x)*f):(n=(t.max.x-p.x)*f,r=(t.min.x-p.x)*f),d>=0?(s=(t.min.y-p.y)*d,l=(t.max.y-p.y)*d):(s=(t.max.y-p.y)*d,l=(t.min.y-p.y)*d),n>l||s>r||((s>n||isNaN(n))&&(n=s),(l<r||isNaN(r))&&(r=l),m>=0?(c=(t.min.z-p.z)*m,u=(t.max.z-p.z)*m):(c=(t.max.z-p.z)*m,u=(t.min.z-p.z)*m),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,n,r,s){Yc.subVectors(e,t),Xa.subVectors(n,t),$c.crossVectors(Yc,Xa);let l=this.direction.dot($c),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Mr.subVectors(this.origin,t);const u=c*this.direction.dot(Xa.crossVectors(Mr,Xa));if(u<0)return null;const f=c*this.direction.dot(Yc.cross(Mr));if(f<0||u+f>l)return null;const d=-c*Mr.dot($c);return d<0?null:this.at(d/l,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ze{constructor(t,e,n,r,s,l,c,u,f,d,m,p,x,y,M,v){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,l,c,u,f,d,m,p,x,y,M,v)}set(t,e,n,r,s,l,c,u,f,d,m,p,x,y,M,v){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=l,g[9]=c,g[13]=u,g[2]=f,g[6]=d,g[10]=m,g[14]=p,g[3]=x,g[7]=y,g[11]=M,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ls.setFromMatrixColumn(t,0).length(),s=1/Ls.setFromMatrixColumn(t,1).length(),l=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const p=l*d,x=l*m,y=c*d,M=c*m;e[0]=u*d,e[4]=-u*m,e[8]=f,e[1]=x+y*f,e[5]=p-M*f,e[9]=-c*u,e[2]=M-p*f,e[6]=y+x*f,e[10]=l*u}else if(t.order==="YXZ"){const p=u*d,x=u*m,y=f*d,M=f*m;e[0]=p+M*c,e[4]=y*c-x,e[8]=l*f,e[1]=l*m,e[5]=l*d,e[9]=-c,e[2]=x*c-y,e[6]=M+p*c,e[10]=l*u}else if(t.order==="ZXY"){const p=u*d,x=u*m,y=f*d,M=f*m;e[0]=p-M*c,e[4]=-l*m,e[8]=y+x*c,e[1]=x+y*c,e[5]=l*d,e[9]=M-p*c,e[2]=-l*f,e[6]=c,e[10]=l*u}else if(t.order==="ZYX"){const p=l*d,x=l*m,y=c*d,M=c*m;e[0]=u*d,e[4]=y*f-x,e[8]=p*f+M,e[1]=u*m,e[5]=M*f+p,e[9]=x*f-y,e[2]=-f,e[6]=c*u,e[10]=l*u}else if(t.order==="YZX"){const p=l*u,x=l*f,y=c*u,M=c*f;e[0]=u*d,e[4]=M-p*m,e[8]=y*m+x,e[1]=m,e[5]=l*d,e[9]=-c*d,e[2]=-f*d,e[6]=x*m+y,e[10]=p-M*m}else if(t.order==="XZY"){const p=l*u,x=l*f,y=c*u,M=c*f;e[0]=u*d,e[4]=-m,e[8]=f*d,e[1]=p*m+M,e[5]=l*d,e[9]=x*m-y,e[2]=y*m-x,e[6]=c*d,e[10]=M*m+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fS,t,dS)}lookAt(t,e,n){const r=this.elements;return $n.subVectors(t,e),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Er.crossVectors(n,$n),Er.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Er.crossVectors(n,$n)),Er.normalize(),qa.crossVectors($n,Er),r[0]=Er.x,r[4]=qa.x,r[8]=$n.x,r[1]=Er.y,r[5]=qa.y,r[9]=$n.y,r[2]=Er.z,r[6]=qa.z,r[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,l=n[0],c=n[4],u=n[8],f=n[12],d=n[1],m=n[5],p=n[9],x=n[13],y=n[2],M=n[6],v=n[10],g=n[14],E=n[3],C=n[7],w=n[11],F=n[15],D=r[0],N=r[4],V=r[8],I=r[12],A=r[1],B=r[5],tt=r[9],z=r[13],K=r[2],$=r[6],k=r[10],st=r[14],j=r[3],ut=r[7],yt=r[11],Mt=r[15];return s[0]=l*D+c*A+u*K+f*j,s[4]=l*N+c*B+u*$+f*ut,s[8]=l*V+c*tt+u*k+f*yt,s[12]=l*I+c*z+u*st+f*Mt,s[1]=d*D+m*A+p*K+x*j,s[5]=d*N+m*B+p*$+x*ut,s[9]=d*V+m*tt+p*k+x*yt,s[13]=d*I+m*z+p*st+x*Mt,s[2]=y*D+M*A+v*K+g*j,s[6]=y*N+M*B+v*$+g*ut,s[10]=y*V+M*tt+v*k+g*yt,s[14]=y*I+M*z+v*st+g*Mt,s[3]=E*D+C*A+w*K+F*j,s[7]=E*N+C*B+w*$+F*ut,s[11]=E*V+C*tt+w*k+F*yt,s[15]=E*I+C*z+w*st+F*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],l=t[1],c=t[5],u=t[9],f=t[13],d=t[2],m=t[6],p=t[10],x=t[14],y=t[3],M=t[7],v=t[11],g=t[15];return y*(+s*u*m-r*f*m-s*c*p+n*f*p+r*c*x-n*u*x)+M*(+e*u*x-e*f*p+s*l*p-r*l*x+r*f*d-s*u*d)+v*(+e*f*m-e*c*x-s*l*m+n*l*x+s*c*d-n*f*d)+g*(-r*c*d-e*u*m+e*c*p+r*l*m-n*l*p+n*u*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],l=t[4],c=t[5],u=t[6],f=t[7],d=t[8],m=t[9],p=t[10],x=t[11],y=t[12],M=t[13],v=t[14],g=t[15],E=m*v*f-M*p*f+M*u*x-c*v*x-m*u*g+c*p*g,C=y*p*f-d*v*f-y*u*x+l*v*x+d*u*g-l*p*g,w=d*M*f-y*m*f+y*c*x-l*M*x-d*c*g+l*m*g,F=y*m*u-d*M*u-y*c*p+l*M*p+d*c*v-l*m*v,D=e*E+n*C+r*w+s*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return t[0]=E*N,t[1]=(M*p*s-m*v*s-M*r*x+n*v*x+m*r*g-n*p*g)*N,t[2]=(c*v*s-M*u*s+M*r*f-n*v*f-c*r*g+n*u*g)*N,t[3]=(m*u*s-c*p*s-m*r*f+n*p*f+c*r*x-n*u*x)*N,t[4]=C*N,t[5]=(d*v*s-y*p*s+y*r*x-e*v*x-d*r*g+e*p*g)*N,t[6]=(y*u*s-l*v*s-y*r*f+e*v*f+l*r*g-e*u*g)*N,t[7]=(l*p*s-d*u*s+d*r*f-e*p*f-l*r*x+e*u*x)*N,t[8]=w*N,t[9]=(y*m*s-d*M*s-y*n*x+e*M*x+d*n*g-e*m*g)*N,t[10]=(l*M*s-y*c*s+y*n*f-e*M*f-l*n*g+e*c*g)*N,t[11]=(d*c*s-l*m*s-d*n*f+e*m*f+l*n*x-e*c*x)*N,t[12]=F*N,t[13]=(d*M*r-y*m*r+y*n*p-e*M*p-d*n*v+e*m*v)*N,t[14]=(y*c*r-l*M*r-y*n*u+e*M*u+l*n*v-e*c*v)*N,t[15]=(l*m*r-d*c*r+d*n*u-e*m*u-l*n*p+e*c*p)*N,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,l=t.x,c=t.y,u=t.z,f=s*l,d=s*c;return this.set(f*l+n,f*c-r*u,f*u+r*c,0,f*c+r*u,d*c+n,d*u-r*l,0,f*u-r*c,d*u+r*l,s*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,l){return this.set(1,n,s,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,l=e._y,c=e._z,u=e._w,f=s+s,d=l+l,m=c+c,p=s*f,x=s*d,y=s*m,M=l*d,v=l*m,g=c*m,E=u*f,C=u*d,w=u*m,F=n.x,D=n.y,N=n.z;return r[0]=(1-(M+g))*F,r[1]=(x+w)*F,r[2]=(y-C)*F,r[3]=0,r[4]=(x-w)*D,r[5]=(1-(p+g))*D,r[6]=(v+E)*D,r[7]=0,r[8]=(y+C)*N,r[9]=(v-E)*N,r[10]=(1-(p+M))*N,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ls.set(r[0],r[1],r[2]).length();const l=Ls.set(r[4],r[5],r[6]).length(),c=Ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],gi.copy(this);const f=1/s,d=1/l,m=1/c;return gi.elements[0]*=f,gi.elements[1]*=f,gi.elements[2]*=f,gi.elements[4]*=d,gi.elements[5]*=d,gi.elements[6]*=d,gi.elements[8]*=m,gi.elements[9]*=m,gi.elements[10]*=m,e.setFromRotationMatrix(gi),n.x=s,n.y=l,n.z=c,this}makePerspective(t,e,n,r,s,l,c=sr){const u=this.elements,f=2*s/(e-t),d=2*s/(n-r),m=(e+t)/(e-t),p=(n+r)/(n-r);let x,y;if(c===sr)x=-(l+s)/(l-s),y=-2*l*s/(l-s);else if(c===Sl)x=-l/(l-s),y=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,s,l,c=sr){const u=this.elements,f=1/(e-t),d=1/(n-r),m=1/(l-s),p=(e+t)*f,x=(n+r)*d;let y,M;if(c===sr)y=(l+s)*m,M=-2*m;else if(c===Sl)y=s*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-p,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-x,u[2]=0,u[6]=0,u[10]=M,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ls=new Q,gi=new Ze,fS=new Q(0,0,0),dS=new Q(1,1,1),Er=new Q,qa=new Q,$n=new Q,op=new Ze,ap=new os;class Ni{constructor(t=0,e=0,n=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],l=r[4],c=r[8],u=r[1],f=r[5],d=r[9],m=r[2],p=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return op.makeRotationFromQuaternion(t),this.setFromRotationMatrix(op,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ap.setFromEuler(this),this.setFromQuaternion(ap,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pS=0;const lp=new Q,Is=new os,$i=new Ze,Ya=new Q,To=new Q,mS=new Q,gS=new os,cp=new Q(1,0,0),hp=new Q(0,1,0),up=new Q(0,0,1),fp={type:"added"},_S={type:"removed"},Ds={type:"childadded",child:null},Kc={type:"childremoved",child:null};class wn extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Q,e=new Ni,n=new os,r=new Q(1,1,1);function s(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new oe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(cp,t)}rotateY(t){return this.rotateOnAxis(hp,t)}rotateZ(t){return this.rotateOnAxis(up,t)}translateOnAxis(t,e){return lp.copy(t).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cp,t)}translateY(t){return this.translateOnAxis(hp,t)}translateZ(t){return this.translateOnAxis(up,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ya.copy(t):Ya.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(To,Ya,this.up):$i.lookAt(Ya,To,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),Is.setFromRotationMatrix($i),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fp),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_S),Kc.child=t,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fp),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,mS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,gS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let f=0,d=u.length;f<d;f++){const m=u[f];s(t.shapes,m)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,f=this.material.length;u<f;u++)c.push(s(t.materials,this.material[u]));r.material=c}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(s(t.animations,u))}}if(e){const c=l(t.geometries),u=l(t.materials),f=l(t.textures),d=l(t.images),m=l(t.shapes),p=l(t.skeletons),x=l(t.animations),y=l(t.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(c){const u=[];for(const f in c){const d=c[f];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}wn.DEFAULT_UP=new Q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new Q,Ki=new Q,Zc=new Q,Zi=new Q,Us=new Q,Ns=new Q,dp=new Q,jc=new Q,Jc=new Q,Qc=new Q,th=new Ke,eh=new Ke,nh=new Ke;class xi{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),_i.subVectors(t,e),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){_i.subVectors(r,e),Ki.subVectors(n,e),Zc.subVectors(t,e);const l=_i.dot(_i),c=_i.dot(Ki),u=_i.dot(Zc),f=Ki.dot(Ki),d=Ki.dot(Zc),m=l*f-c*c;if(m===0)return s.set(0,0,0),null;const p=1/m,x=(f*u-c*d)*p,y=(l*d-c*u)*p;return s.set(1-x-y,y,x)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,n,r,s,l,c,u){return this.getBarycoord(t,e,n,r,Zi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Zi.x),u.addScaledVector(l,Zi.y),u.addScaledVector(c,Zi.z),u)}static getInterpolatedAttribute(t,e,n,r,s,l){return th.setScalar(0),eh.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(t,e),eh.fromBufferAttribute(t,n),nh.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(th,s.x),l.addScaledVector(eh,s.y),l.addScaledVector(nh,s.z),l}static isFrontFacing(t,e,n,r){return _i.subVectors(n,e),Ki.subVectors(t,e),_i.cross(Ki).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),_i.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return xi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let l,c;Us.subVectors(r,n),Ns.subVectors(s,n),jc.subVectors(t,n);const u=Us.dot(jc),f=Ns.dot(jc);if(u<=0&&f<=0)return e.copy(n);Jc.subVectors(t,r);const d=Us.dot(Jc),m=Ns.dot(Jc);if(d>=0&&m<=d)return e.copy(r);const p=u*m-d*f;if(p<=0&&u>=0&&d<=0)return l=u/(u-d),e.copy(n).addScaledVector(Us,l);Qc.subVectors(t,s);const x=Us.dot(Qc),y=Ns.dot(Qc);if(y>=0&&x<=y)return e.copy(s);const M=x*f-u*y;if(M<=0&&f>=0&&y<=0)return c=f/(f-y),e.copy(n).addScaledVector(Ns,c);const v=d*y-x*m;if(v<=0&&m-d>=0&&x-y>=0)return dp.subVectors(s,r),c=(m-d)/(m-d+(x-y)),e.copy(r).addScaledVector(dp,c);const g=1/(v+M+p);return l=M*g,c=p*g,e.copy(n).addScaledVector(Us,l).addScaledVector(Ns,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},$a={h:0,s:0,l:0};function ih(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=be.workingColorSpace){if(t=QE(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,l=2*n-s;this.r=ih(l,s,t+1/3),this.g=ih(l,s,t),this.b=ih(l,s,t-1/3)}return be.toWorkingColorSpace(this,r),this}setStyle(t,e=Zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){const n=zm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return be.fromWorkingColorSpace(Sn.copy(this),t),Math.round(ge(Sn.r*255,0,255))*65536+Math.round(ge(Sn.g*255,0,255))*256+Math.round(ge(Sn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,r=Sn.g,s=Sn.b,l=Math.max(n,r,s),c=Math.min(n,r,s);let u,f;const d=(c+l)/2;if(c===l)u=0,f=0;else{const m=l-c;switch(f=d<=.5?m/(l+c):m/(2-l-c),l){case n:u=(r-s)/m+(r<s?6:0);break;case r:u=(s-n)/m+2;break;case s:u=(n-r)/m+4;break}u/=6}return t.h=u,t.s=f,t.l=d,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Zn){be.fromWorkingColorSpace(Sn.copy(this),t);const e=Sn.r,n=Sn.g,r=Sn.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Sr),this.setHSL(Sr.h+t,Sr.s+e,Sr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sr),t.getHSL($a);const n=Hc(Sr.h,$a.h,e),r=Hc(Sr.s,$a.s,e),s=Hc(Sr.l,$a.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Re;Re.NAMES=zm;let vS=0,ko=class extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Ys,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Ah,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ah&&(n.blendDst=this.blendDst),this.blendEquation!==Qr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}if(e){const s=r(t.textures),l=r(t.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Hm extends ko{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new Q,Ka=new ae;let xS=0;class Ii{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tp,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ka.fromBufferAttribute(this,e),Ka.applyMatrix3(t),this.setXY(e,Ka.x,Ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array),r=Fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array),r=Fn(r,this.array),s=Fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tp&&(t.usage=this.usage),t}}class Vm extends Ii{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gm extends Ii{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Di extends Ii{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yS=0;const oi=new Ze,rh=new wn,Fs=new Q,Kn=new Go,Co=new Go,mn=new Q;class Dr extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Um(t)?Gm:Vm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new oe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,n){return oi.makeTranslation(t,e,n),this.applyMatrix4(oi),this}scale(t,e,n){return oi.makeScale(t,e,n),this.applyMatrix4(oi),this}lookAt(t){return rh.lookAt(t),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const l=t[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Di(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),e)for(let s=0,l=e.length;s<l;s++){const c=e[s];Co.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(Kn.min,Co.min),Kn.expandByPoint(mn),mn.addVectors(Kn.max,Co.max),Kn.expandByPoint(mn)):(Kn.expandByPoint(Co.min),Kn.expandByPoint(Co.max))}Kn.getCenter(n);let r=0;for(let s=0,l=t.count;s<l;s++)mn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(mn));if(e)for(let s=0,l=e.length;s<l;s++){const c=e[s],u=this.morphTargetsRelative;for(let f=0,d=c.count;f<d;f++)mn.fromBufferAttribute(c,f),u&&(Fs.fromBufferAttribute(t,f),mn.add(Fs)),r=Math.max(r,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],u=[];for(let V=0;V<n.count;V++)c[V]=new Q,u[V]=new Q;const f=new Q,d=new Q,m=new Q,p=new ae,x=new ae,y=new ae,M=new Q,v=new Q;function g(V,I,A){f.fromBufferAttribute(n,V),d.fromBufferAttribute(n,I),m.fromBufferAttribute(n,A),p.fromBufferAttribute(s,V),x.fromBufferAttribute(s,I),y.fromBufferAttribute(s,A),d.sub(f),m.sub(f),x.sub(p),y.sub(p);const B=1/(x.x*y.y-y.x*x.y);isFinite(B)&&(M.copy(d).multiplyScalar(y.y).addScaledVector(m,-x.y).multiplyScalar(B),v.copy(m).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(B),c[V].add(M),c[I].add(M),c[A].add(M),u[V].add(v),u[I].add(v),u[A].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let V=0,I=E.length;V<I;++V){const A=E[V],B=A.start,tt=A.count;for(let z=B,K=B+tt;z<K;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const C=new Q,w=new Q,F=new Q,D=new Q;function N(V){F.fromBufferAttribute(r,V),D.copy(F);const I=c[V];C.copy(I),C.sub(F.multiplyScalar(F.dot(I))).normalize(),w.crossVectors(D,I);const B=w.dot(u[V])<0?-1:1;l.setXYZW(V,C.x,C.y,C.z,B)}for(let V=0,I=E.length;V<I;++V){const A=E[V],B=A.start,tt=A.count;for(let z=B,K=B+tt;z<K;z+=3)N(t.getX(z+0)),N(t.getX(z+1)),N(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ii(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,x=n.count;p<x;p++)n.setXYZ(p,0,0,0);const r=new Q,s=new Q,l=new Q,c=new Q,u=new Q,f=new Q,d=new Q,m=new Q;if(t)for(let p=0,x=t.count;p<x;p+=3){const y=t.getX(p+0),M=t.getX(p+1),v=t.getX(p+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,M),l.fromBufferAttribute(e,v),d.subVectors(l,s),m.subVectors(r,s),d.cross(m),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,v),c.add(d),u.add(d),f.add(d),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(v,f.x,f.y,f.z)}else for(let p=0,x=e.count;p<x;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),l.fromBufferAttribute(e,p+2),d.subVectors(l,s),m.subVectors(r,s),d.cross(m),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(c,u){const f=c.array,d=c.itemSize,m=c.normalized,p=new f.constructor(u.length*d);let x=0,y=0;for(let M=0,v=u.length;M<v;M++){c.isInterleavedBufferAttribute?x=u[M]*c.data.stride+c.offset:x=u[M]*d;for(let g=0;g<d;g++)p[y++]=f[x++]}return new Ii(p,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Dr,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],f=t(u,n);e.setAttribute(c,f)}const s=this.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++){const p=f[d],x=t(p,n);u.push(x)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const f=n[u];t.data.attributes[u]=f.toJSON(t.data)}const r={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],d=[];for(let m=0,p=f.length;m<p;m++){const x=f[m];d.push(x.toJSON(t.data))}d.length>0&&(r[u]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(e))}const s=t.morphAttributes;for(const f in s){const d=[],m=s[f];for(let p=0,x=m.length;p<x;p++)d.push(m[p].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,d=l.length;f<d;f++){const m=l[f];this.addGroup(m.start,m.count,m.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pp=new Ze,Yr=new Om,Za=new yu,mp=new Q,ja=new Q,Ja=new Q,Qa=new Q,sh=new Q,tl=new Q,gp=new Q,el=new Q;class li extends wn{constructor(t=new Dr,e=new Hm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(s&&c){tl.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const d=c[u],m=s[u];d!==0&&(sh.fromBufferAttribute(m,t),l?tl.addScaledVector(sh,d):tl.addScaledVector(sh.sub(e),d))}e.add(tl)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Yr.copy(t.ray).recast(t.near),!(Za.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Za,mp)===null||Yr.origin.distanceToSquared(mp)>(t.far-t.near)**2))&&(pp.copy(s).invert(),Yr.copy(t.ray).applyMatrix4(pp),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,l=this.material,c=s.index,u=s.attributes.position,f=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,p=s.groups,x=s.drawRange;if(c!==null)if(Array.isArray(l))for(let y=0,M=p.length;y<M;y++){const v=p[y],g=l[v.materialIndex],E=Math.max(v.start,x.start),C=Math.min(c.count,Math.min(v.start+v.count,x.start+x.count));for(let w=E,F=C;w<F;w+=3){const D=c.getX(w),N=c.getX(w+1),V=c.getX(w+2);r=nl(this,g,t,n,f,d,m,D,N,V),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const y=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let v=y,g=M;v<g;v+=3){const E=c.getX(v),C=c.getX(v+1),w=c.getX(v+2);r=nl(this,l,t,n,f,d,m,E,C,w),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let y=0,M=p.length;y<M;y++){const v=p[y],g=l[v.materialIndex],E=Math.max(v.start,x.start),C=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let w=E,F=C;w<F;w+=3){const D=w,N=w+1,V=w+2;r=nl(this,g,t,n,f,d,m,D,N,V),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const y=Math.max(0,x.start),M=Math.min(u.count,x.start+x.count);for(let v=y,g=M;v<g;v+=3){const E=v,C=v+1,w=v+2;r=nl(this,l,t,n,f,d,m,E,C,w),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function MS(a,t,e,n,r,s,l,c){let u;if(t.side===zn?u=n.intersectTriangle(l,s,r,!0,c):u=n.intersectTriangle(r,s,l,t.side===Pr,c),u===null)return null;el.copy(c),el.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(el);return f<e.near||f>e.far?null:{distance:f,point:el.clone(),object:a}}function nl(a,t,e,n,r,s,l,c,u,f){a.getVertexPosition(c,ja),a.getVertexPosition(u,Ja),a.getVertexPosition(f,Qa);const d=MS(a,t,e,n,ja,Ja,Qa,gp);if(d){const m=new Q;xi.getBarycoord(gp,ja,Ja,Qa,m),r&&(d.uv=xi.getInterpolatedAttribute(r,c,u,f,m,new ae)),s&&(d.uv1=xi.getInterpolatedAttribute(s,c,u,f,m,new ae)),l&&(d.normal=xi.getInterpolatedAttribute(l,c,u,f,m,new Q),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:c,b:u,c:f,normal:new Q,materialIndex:0};xi.getNormal(ja,Ja,Qa,p.normal),d.face=p,d.barycoord=m}return d}class ro extends Dr{constructor(t=1,e=1,n=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:l};const c=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const u=[],f=[],d=[],m=[];let p=0,x=0;y("z","y","x",-1,-1,n,e,t,l,s,0),y("z","y","x",1,-1,n,e,-t,l,s,1),y("x","z","y",1,1,t,n,e,r,l,2),y("x","z","y",1,-1,t,n,-e,r,l,3),y("x","y","z",1,-1,t,e,n,r,s,4),y("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Di(f,3)),this.setAttribute("normal",new Di(d,3)),this.setAttribute("uv",new Di(m,2));function y(M,v,g,E,C,w,F,D,N,V,I){const A=w/N,B=F/V,tt=w/2,z=F/2,K=D/2,$=N+1,k=V+1;let st=0,j=0;const ut=new Q;for(let yt=0;yt<k;yt++){const Mt=yt*B-z;for(let xt=0;xt<$;xt++){const _e=xt*A-tt;ut[M]=_e*E,ut[v]=Mt*C,ut[g]=K,f.push(ut.x,ut.y,ut.z),ut[M]=0,ut[v]=0,ut[g]=D>0?1:-1,d.push(ut.x,ut.y,ut.z),m.push(xt/N),m.push(1-yt/V),st+=1}}for(let yt=0;yt<V;yt++)for(let Mt=0;Mt<N;Mt++){const xt=p+Mt+$*yt,_e=p+Mt+$*(yt+1),at=p+(Mt+1)+$*(yt+1),_t=p+(Mt+1)+$*yt;u.push(xt,_e,_t),u.push(_e,at,_t),j+=6}c.addGroup(x,j,I),x+=j,p+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function io(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const r=a[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Rn(a){const t={};for(let e=0;e<a.length;e++){const n=io(a[e]);for(const r in n)t[r]=n[r]}return t}function ES(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function km(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const SS={clone:io,merge:Rn};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends ko{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=ES(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wm extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=sr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new Q,_p=new ae,vp=new ae;class ai extends Wm{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wr.x,wr.y).multiplyScalar(-t/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-t/wr.z)}getViewSize(t,e){return this.getViewBounds(t,_p,vp),e.subVectors(vp,_p)}setViewOffset(t,e,n,r,s,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,f=l.fullHeight;s+=l.offsetX*r/u,e-=l.offsetY*n/f,r*=l.width/u,n*=l.height/f}const c=this.filmOffset;c!==0&&(s+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Os=-90,Bs=1;class AS extends wn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ai(Os,Bs,t,e);r.layers=this.layers,this.add(r);const s=new ai(Os,Bs,t,e);s.layers=this.layers,this.add(s);const l=new ai(Os,Bs,t,e);l.layers=this.layers,this.add(l);const c=new ai(Os,Bs,t,e);c.layers=this.layers,this.add(c);const u=new ai(Os,Bs,t,e);u.layers=this.layers,this.add(u);const f=new ai(Os,Bs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,l,c,u]=e;for(const f of e)this.remove(f);if(t===sr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,l,c,u,f,d]=this.children,m=t.getRenderTarget(),p=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,l),t.setRenderTarget(n,2,r),t.render(e,c),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(m,p,x),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Mu extends Hn{constructor(t,e,n,r,s,l,c,u,f,d){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,r,s,l,c,u,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class TS extends ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Mu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ro(5,5,5),s=new Lr({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Cr});s.uniforms.tEquirect.value=e;const l=new li(r,s),c=e.minFilter;return e.minFilter===is&&(e.minFilter=Li),new AS(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,r);t.setRenderTarget(s)}}class il extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CS={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,l=null;const c=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const M of t.hand.values()){const v=e.getJointPose(M,n),g=this._getHandJoint(f,M);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const d=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],p=d.position.distanceTo(m.position),x=.02,y=.005;f.inputState.pinching&&p>x+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&p<=x-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(CS)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new il;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class RS extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ah=new Q,PS=new Q,LS=new oe;let Ar=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ah.subVectors(n,e).cross(PS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ah),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||LS.getNormalMatrix(t),r=this.coplanarPoint(ah).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const $r=new yu,rl=new Q;class Eu{constructor(t=new Ar,e=new Ar,n=new Ar,r=new Ar,s=new Ar,l=new Ar){this.planes=[t,e,n,r,s,l]}set(t,e,n,r,s,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(r),c[4].copy(s),c[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sr){const n=this.planes,r=t.elements,s=r[0],l=r[1],c=r[2],u=r[3],f=r[4],d=r[5],m=r[6],p=r[7],x=r[8],y=r[9],M=r[10],v=r[11],g=r[12],E=r[13],C=r[14],w=r[15];if(n[0].setComponents(u-s,p-f,v-x,w-g).normalize(),n[1].setComponents(u+s,p+f,v+x,w+g).normalize(),n[2].setComponents(u+l,p+d,v+y,w+E).normalize(),n[3].setComponents(u-l,p-d,v-y,w-E).normalize(),n[4].setComponents(u-c,p-m,v-M,w-C).normalize(),e===sr)n[5].setComponents(u+c,p+m,v+M,w+C).normalize();else if(e===Sl)n[5].setComponents(c,m,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(t){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(t.matrixWorld),this.intersectsSphere($r)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(rl.x=r.normal.x>0?t.max.x:t.min.x,rl.y=r.normal.y>0?t.max.y:t.min.y,rl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xm extends Hn{constructor(t,e,n,r,s,l,c,u,f,d=$s){if(d!==$s&&d!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===$s&&(n=rs),n===void 0&&d===eo&&(n=to),super(null,r,s,l,c,u,d,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:Ei,this.minFilter=u!==void 0?u:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Wo extends Dr{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,l=e/2,c=Math.floor(n),u=Math.floor(r),f=c+1,d=u+1,m=t/c,p=e/u,x=[],y=[],M=[],v=[];for(let g=0;g<d;g++){const E=g*p-l;for(let C=0;C<f;C++){const w=C*m-s;y.push(w,-E,0),M.push(0,0,1),v.push(C/c),v.push(1-g/u)}}for(let g=0;g<u;g++)for(let E=0;E<c;E++){const C=E+f*g,w=E+f*(g+1),F=E+1+f*(g+1),D=E+1+f*g;x.push(C,w,D),x.push(w,F,D)}this.setIndex(x),this.setAttribute("position",new Di(y,3)),this.setAttribute("normal",new Di(M,3)),this.setAttribute("uv",new Di(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Su extends Dr{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(l+c,Math.PI);let f=0;const d=[],m=new Q,p=new Q,x=[],y=[],M=[],v=[];for(let g=0;g<=n;g++){const E=[],C=g/n;let w=0;g===0&&l===0?w=.5/e:g===n&&u===Math.PI&&(w=-.5/e);for(let F=0;F<=e;F++){const D=F/e;m.x=-t*Math.cos(r+D*s)*Math.sin(l+C*c),m.y=t*Math.cos(l+C*c),m.z=t*Math.sin(r+D*s)*Math.sin(l+C*c),y.push(m.x,m.y,m.z),p.copy(m).normalize(),M.push(p.x,p.y,p.z),v.push(D+w,1-C),E.push(f++)}d.push(E)}for(let g=0;g<n;g++)for(let E=0;E<e;E++){const C=d[g][E+1],w=d[g][E],F=d[g+1][E],D=d[g+1][E+1];(g!==0||l>0)&&x.push(C,w,D),(g!==n-1||u<Math.PI)&&x.push(w,F,D)}this.setIndex(x),this.setAttribute("position",new Di(y,3)),this.setAttribute("normal",new Di(M,3)),this.setAttribute("uv",new Di(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qm extends ko{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Im,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class IS extends ko{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DS extends ko{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xp={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class US{constructor(t,e,n){const r=this;let s=!1,l=0,c=0,u;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){c++,s===!1&&r.onStart!==void 0&&r.onStart(d,l,c),s=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,c),l===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,m){return f.push(d,m),this},this.removeHandler=function(d){const m=f.indexOf(d);return m!==-1&&f.splice(m,2),this},this.getHandler=function(d){for(let m=0,p=f.length;m<p;m+=2){const x=f[m],y=f[m+1];if(x.global&&(x.lastIndex=0),x.test(d))return y}return null}}}const NS=new US;class wu{constructor(t){this.manager=t!==void 0?t:NS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}wu.DEFAULT_MATERIAL_NAME="__DEFAULT";class FS extends wu{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,l=xp.get(t);if(l!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(l),s.manager.itemEnd(t)},0),l;const c=Oo("img");function u(){d(),xp.add(t,this),e&&e(this),s.manager.itemEnd(t)}function f(m){d(),r&&r(m),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){c.removeEventListener("load",u,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(t),c.src=t,c}}class OS extends wu{constructor(t){super(t)}load(t,e,n,r){const s=new Mu;s.colorSpace=Zn;const l=new FS(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let c=0;function u(f){l.load(t[f],function(d){s.images[f]=d,c++,c===6&&(s.needsUpdate=!0,e&&e(s))},void 0,r)}for(let f=0;f<t.length;++f)u(f);return s}}class Ym extends wn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const lh=new Ze,yp=new Q,Mp=new Q;class BS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eu,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yp.setFromMatrixPosition(t.matrixWorld),e.position.copy(yp),Mp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mp),e.updateMatrixWorld(),lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $m extends Wm{constructor(t=-1,e=1,n=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,l=n+t,c=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,l=s+f*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(s,l,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zS extends BS{constructor(){super(new $m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HS extends Ym{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new zS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class VS extends Ym{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class GS extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Ep{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kS extends cs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Sp(a,t,e,n){const r=WS(n);switch(e){case bm:return a*t;case Tm:return a*t;case Cm:return a*t*2;case Rm:return a*t/r.components*r.byteLength;case _u:return a*t/r.components*r.byteLength;case Pm:return a*t*2/r.components*r.byteLength;case vu:return a*t*2/r.components*r.byteLength;case Am:return a*t*3/r.components*r.byteLength;case yi:return a*t*4/r.components*r.byteLength;case xu:return a*t*4/r.components*r.byteLength;case ml:case gl:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case _l:case vl:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case zh:case Vh:return Math.max(a,16)*Math.max(t,8)/4;case Bh:case Hh:return Math.max(a,8)*Math.max(t,8)/2;case Gh:case kh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Wh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Qh:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case tu:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case eu:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case nu:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case iu:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case ru:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case xl:case su:case ou:return Math.ceil(a/4)*Math.ceil(t/4)*16;case Lm:case au:return Math.ceil(a/4)*Math.ceil(t/4)*8;case lu:case cu:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function WS(a){switch(a){case ar:case Em:return{byteLength:1,components:1};case Fo:case Sm:case Ho:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case rs:case pu:case rr:return{byteLength:4,components:1};case wm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Km(){let a=null,t=!1,e=null,n=null;function r(s,l){e(s,l),n=a.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(r),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function XS(a){const t=new WeakMap;function e(c,u){const f=c.array,d=c.usage,m=f.byteLength,p=a.createBuffer();a.bindBuffer(u,p),a.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=a.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=a.SHORT;else if(f instanceof Uint32Array)x=a.UNSIGNED_INT;else if(f instanceof Int32Array)x=a.INT;else if(f instanceof Int8Array)x=a.BYTE;else if(f instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,u,f){const d=u.array,m=u.updateRanges;if(a.bindBuffer(f,c),m.length===0)a.bufferSubData(f,0,d);else{m.sort((x,y)=>x.start-y.start);let p=0;for(let x=1;x<m.length;x++){const y=m[p],M=m[x];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++p,m[p]=M)}m.length=p+1;for(let x=0,y=m.length;x<y;x++){const M=m[x];a.bufferSubData(f,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=t.get(c);u&&(a.deleteBuffer(u.buffer),t.delete(c))}function l(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=t.get(c);(!d||d.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,u),f.version=c.version}}return{get:r,remove:s,update:l}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$S=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ow=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_w=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Aw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ow=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ww=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$w=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ub=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:qS,alphahash_pars_fragment:YS,alphamap_fragment:$S,alphamap_pars_fragment:KS,alphatest_fragment:ZS,alphatest_pars_fragment:jS,aomap_fragment:JS,aomap_pars_fragment:QS,batching_pars_vertex:tw,batching_vertex:ew,begin_vertex:nw,beginnormal_vertex:iw,bsdfs:rw,iridescence_fragment:sw,bumpmap_pars_fragment:ow,clipping_planes_fragment:aw,clipping_planes_pars_fragment:lw,clipping_planes_pars_vertex:cw,clipping_planes_vertex:hw,color_fragment:uw,color_pars_fragment:fw,color_pars_vertex:dw,color_vertex:pw,common:mw,cube_uv_reflection_fragment:gw,defaultnormal_vertex:_w,displacementmap_pars_vertex:vw,displacementmap_vertex:xw,emissivemap_fragment:yw,emissivemap_pars_fragment:Mw,colorspace_fragment:Ew,colorspace_pars_fragment:Sw,envmap_fragment:ww,envmap_common_pars_fragment:bw,envmap_pars_fragment:Aw,envmap_pars_vertex:Tw,envmap_physical_pars_fragment:Bw,envmap_vertex:Cw,fog_vertex:Rw,fog_pars_vertex:Pw,fog_fragment:Lw,fog_pars_fragment:Iw,gradientmap_pars_fragment:Dw,lightmap_pars_fragment:Uw,lights_lambert_fragment:Nw,lights_lambert_pars_fragment:Fw,lights_pars_begin:Ow,lights_toon_fragment:zw,lights_toon_pars_fragment:Hw,lights_phong_fragment:Vw,lights_phong_pars_fragment:Gw,lights_physical_fragment:kw,lights_physical_pars_fragment:Ww,lights_fragment_begin:Xw,lights_fragment_maps:qw,lights_fragment_end:Yw,logdepthbuf_fragment:$w,logdepthbuf_pars_fragment:Kw,logdepthbuf_pars_vertex:Zw,logdepthbuf_vertex:jw,map_fragment:Jw,map_pars_fragment:Qw,map_particle_fragment:tb,map_particle_pars_fragment:eb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ob,morphtarget_pars_vertex:ab,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:hb,normal_pars_fragment:ub,normal_pars_vertex:fb,normal_vertex:db,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:_b,iridescence_pars_fragment:vb,opaque_fragment:xb,packing:yb,premultiplied_alpha_fragment:Mb,project_vertex:Eb,dithering_fragment:Sb,dithering_pars_fragment:wb,roughnessmap_fragment:bb,roughnessmap_pars_fragment:Ab,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Cb,shadowmap_vertex:Rb,shadowmask_pars_fragment:Pb,skinbase_vertex:Lb,skinning_pars_vertex:Ib,skinning_vertex:Db,skinnormal_vertex:Ub,specularmap_fragment:Nb,specularmap_pars_fragment:Fb,tonemapping_fragment:Ob,tonemapping_pars_fragment:Bb,transmission_fragment:zb,transmission_pars_fragment:Hb,uv_pars_fragment:Vb,uv_pars_vertex:Gb,uv_vertex:kb,worldpos_vertex:Wb,background_vert:Xb,background_frag:qb,backgroundCube_vert:Yb,backgroundCube_frag:$b,cube_vert:Kb,cube_frag:Zb,depth_vert:jb,depth_frag:Jb,distanceRGBA_vert:Qb,distanceRGBA_frag:tA,equirect_vert:eA,equirect_frag:nA,linedashed_vert:iA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:aA,meshlambert_frag:lA,meshmatcap_vert:cA,meshmatcap_frag:hA,meshnormal_vert:uA,meshnormal_frag:fA,meshphong_vert:dA,meshphong_frag:pA,meshphysical_vert:mA,meshphysical_frag:gA,meshtoon_vert:_A,meshtoon_frag:vA,points_vert:xA,points_frag:yA,shadow_vert:MA,shadow_frag:EA,sprite_vert:SA,sprite_frag:wA},bt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ri={basic:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Rn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Rn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Rn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Rn([bt.points,bt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Rn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Rn([bt.common,bt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Rn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Rn([bt.sprite,bt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Rn([bt.common,bt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Rn([bt.lights,bt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ri.physical={uniforms:Rn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const sl={r:0,b:0,g:0},Kr=new Ni,bA=new Ze;function AA(a,t,e,n,r,s,l){const c=new Re(0);let u=s===!0?0:1,f,d,m=null,p=0,x=null;function y(C){let w=C.isScene===!0?C.background:null;return w&&w.isTexture&&(w=(C.backgroundBlurriness>0?e:t).get(w)),w}function M(C){let w=!1;const F=y(C);F===null?g(c,u):F&&F.isColor&&(g(F,1),w=!0);const D=a.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(a.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(C,w){const F=y(w);F&&(F.isCubeTexture||F.mapping===bl)?(d===void 0&&(d=new li(new ro(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:io(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Kr.copy(w.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),d.material.uniforms.envMap.value=F,d.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(bA.makeRotationFromEuler(Kr)),d.material.toneMapped=be.getTransfer(F.colorSpace)!==Ue,(m!==F||p!==F.version||x!==a.toneMapping)&&(d.material.needsUpdate=!0,m=F,p=F.version,x=a.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):F&&F.isTexture&&(f===void 0&&(f=new li(new Wo(2,2),new Lr({name:"BackgroundMaterial",uniforms:io(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=F,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=be.getTransfer(F.colorSpace)!==Ue,F.matrixAutoUpdate===!0&&F.updateMatrix(),f.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||p!==F.version||x!==a.toneMapping)&&(f.material.needsUpdate=!0,m=F,p=F.version,x=a.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null))}function g(C,w){C.getRGB(sl,km(a)),n.buffers.color.setClear(sl.r,sl.g,sl.b,w,l)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,w=1){c.set(C),u=w,g(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,g(c,u)},render:M,addToRenderList:v,dispose:E}}function TA(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,l=!1;function c(A,B,tt,z,K){let $=!1;const k=m(z,tt,B);s!==k&&(s=k,f(s.object)),$=x(A,z,tt,K),$&&y(A,z,tt,K),K!==null&&t.update(K,a.ELEMENT_ARRAY_BUFFER),($||l)&&(l=!1,w(A,B,tt,z),K!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function u(){return a.createVertexArray()}function f(A){return a.bindVertexArray(A)}function d(A){return a.deleteVertexArray(A)}function m(A,B,tt){const z=tt.wireframe===!0;let K=n[A.id];K===void 0&&(K={},n[A.id]=K);let $=K[B.id];$===void 0&&($={},K[B.id]=$);let k=$[z];return k===void 0&&(k=p(u()),$[z]=k),k}function p(A){const B=[],tt=[],z=[];for(let K=0;K<e;K++)B[K]=0,tt[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:tt,attributeDivisors:z,object:A,attributes:{},index:null}}function x(A,B,tt,z){const K=s.attributes,$=B.attributes;let k=0;const st=tt.getAttributes();for(const j in st)if(st[j].location>=0){const yt=K[j];let Mt=$[j];if(Mt===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(Mt=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(Mt=A.instanceColor)),yt===void 0||yt.attribute!==Mt||Mt&&yt.data!==Mt.data)return!0;k++}return s.attributesNum!==k||s.index!==z}function y(A,B,tt,z){const K={},$=B.attributes;let k=0;const st=tt.getAttributes();for(const j in st)if(st[j].location>=0){let yt=$[j];yt===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(yt=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(yt=A.instanceColor));const Mt={};Mt.attribute=yt,yt&&yt.data&&(Mt.data=yt.data),K[j]=Mt,k++}s.attributes=K,s.attributesNum=k,s.index=z}function M(){const A=s.newAttributes;for(let B=0,tt=A.length;B<tt;B++)A[B]=0}function v(A){g(A,0)}function g(A,B){const tt=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;tt[A]=1,z[A]===0&&(a.enableVertexAttribArray(A),z[A]=1),K[A]!==B&&(a.vertexAttribDivisor(A,B),K[A]=B)}function E(){const A=s.newAttributes,B=s.enabledAttributes;for(let tt=0,z=B.length;tt<z;tt++)B[tt]!==A[tt]&&(a.disableVertexAttribArray(tt),B[tt]=0)}function C(A,B,tt,z,K,$,k){k===!0?a.vertexAttribIPointer(A,B,tt,K,$):a.vertexAttribPointer(A,B,tt,z,K,$)}function w(A,B,tt,z){M();const K=z.attributes,$=tt.getAttributes(),k=B.defaultAttributeValues;for(const st in $){const j=$[st];if(j.location>=0){let ut=K[st];if(ut===void 0&&(st==="instanceMatrix"&&A.instanceMatrix&&(ut=A.instanceMatrix),st==="instanceColor"&&A.instanceColor&&(ut=A.instanceColor)),ut!==void 0){const yt=ut.normalized,Mt=ut.itemSize,xt=t.get(ut);if(xt===void 0)continue;const _e=xt.buffer,at=xt.type,_t=xt.bytesPerElement,Pt=at===a.INT||at===a.UNSIGNED_INT||ut.gpuType===pu;if(ut.isInterleavedBufferAttribute){const St=ut.data,Wt=St.stride,fe=ut.offset;if(St.isInstancedInterleavedBuffer){for(let jt=0;jt<j.locationSize;jt++)g(j.location+jt,St.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<j.locationSize;jt++)v(j.location+jt);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let jt=0;jt<j.locationSize;jt++)C(j.location+jt,Mt/j.locationSize,at,yt,Wt*_t,(fe+Mt/j.locationSize*jt)*_t,Pt)}else{if(ut.isInstancedBufferAttribute){for(let St=0;St<j.locationSize;St++)g(j.location+St,ut.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let St=0;St<j.locationSize;St++)v(j.location+St);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let St=0;St<j.locationSize;St++)C(j.location+St,Mt/j.locationSize,at,yt,Mt*_t,Mt/j.locationSize*St*_t,Pt)}}else if(k!==void 0){const yt=k[st];if(yt!==void 0)switch(yt.length){case 2:a.vertexAttrib2fv(j.location,yt);break;case 3:a.vertexAttrib3fv(j.location,yt);break;case 4:a.vertexAttrib4fv(j.location,yt);break;default:a.vertexAttrib1fv(j.location,yt)}}}}E()}function F(){V();for(const A in n){const B=n[A];for(const tt in B){const z=B[tt];for(const K in z)d(z[K].object),delete z[K];delete B[tt]}delete n[A]}}function D(A){if(n[A.id]===void 0)return;const B=n[A.id];for(const tt in B){const z=B[tt];for(const K in z)d(z[K].object),delete z[K];delete B[tt]}delete n[A.id]}function N(A){for(const B in n){const tt=n[B];if(tt[A.id]===void 0)continue;const z=tt[A.id];for(const K in z)d(z[K].object),delete z[K];delete tt[A.id]}}function V(){I(),l=!0,s!==r&&(s=r,f(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:V,resetDefaultState:I,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:v,disableUnusedAttributes:E}}function CA(a,t,e){let n;function r(f){n=f}function s(f,d){a.drawArrays(n,f,d),e.update(d,n,1)}function l(f,d,m){m!==0&&(a.drawArraysInstanced(n,f,d,m),e.update(d,n,m))}function c(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,m);let x=0;for(let y=0;y<m;y++)x+=d[y];e.update(x,n,1)}function u(f,d,m,p){if(m===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<f.length;y++)l(f[y],d[y],p[y]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,d,0,p,0,m);let y=0;for(let M=0;M<m;M++)y+=d[M]*p[M];e.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function RA(a,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");r=a.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(N){return!(N!==yi&&n.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const V=N===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==ar&&n.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==rr&&!V)}function u(N){if(N==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const d=u(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const m=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),y=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),E=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),w=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),F=y>0,D=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:m,reverseDepthBuffer:p,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:E,maxVaryings:C,maxFragmentUniforms:w,vertexTextures:F,maxSamples:D}}function PA(a){const t=this;let e=null,n=0,r=!1,s=!1;const l=new Ar,c=new oe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const x=m.length!==0||p||n!==0||r;return r=p,n=m.length,x},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,p){e=d(m,p,0)},this.setState=function(m,p,x){const y=m.clippingPlanes,M=m.clipIntersection,v=m.clipShadows,g=a.get(m);if(!r||y===null||y.length===0||s&&!v)s?d(null):f();else{const E=s?0:n,C=E*4;let w=g.clippingState||null;u.value=w,w=d(y,p,C,x);for(let F=0;F!==C;++F)w[F]=e[F];g.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,p,x,y){const M=m!==null?m.length:0;let v=null;if(M!==0){if(v=u.value,y!==!0||v===null){const g=x+M*4,E=p.matrixWorldInverse;c.getNormalMatrix(E),(v===null||v.length<g)&&(v=new Float32Array(g));for(let C=0,w=x;C!==M;++C,w+=4)l.copy(m[C]).applyMatrix4(E,c),l.normal.toArray(v,w),v[w+3]=l.constant}u.value=v,u.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,v}}function LA(a){let t=new WeakMap;function e(l,c){return c===Uh?l.mapping=Js:c===Nh&&(l.mapping=Qs),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Uh||c===Nh)if(t.has(l)){const u=t.get(l).texture;return e(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const f=new TS(u.height);return f.fromEquirectangularTexture(a,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ws=4,wp=[.125,.215,.35,.446,.526,.582],ts=20,ch=new $m,bp=new Re;let hh=null,uh=0,fh=0,dh=!1;const Jr=(1+Math.sqrt(5))/2,zs=1/Jr,Ap=[new Q(-Jr,zs,0),new Q(Jr,zs,0),new Q(-zs,0,Jr),new Q(zs,0,Jr),new Q(0,Jr,-zs),new Q(0,Jr,zs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Tp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,uh,fh),this._renderer.xr.enabled=dh,t.scissorTest=!1,ol(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ho,format:yi,colorSpace:no,depthBuffer:!1},r=Cp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IA(s)),this._blurMaterial=DA(s,t,e)}return r}_compileMaterial(t){const e=new li(this._lodPlanes[0],t);this._renderer.compile(e,ch)}_sceneToCubeUV(t,e,n,r){const c=new ai(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,p=d.toneMapping;d.getClearColor(bp),d.toneMapping=Rr,d.autoClear=!1;const x=new Hm({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),y=new li(new ro,x);let M=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,M=!0):(x.color.copy(bp),M=!0);for(let g=0;g<6;g++){const E=g%3;E===0?(c.up.set(0,u[g],0),c.lookAt(f[g],0,0)):E===1?(c.up.set(0,0,u[g]),c.lookAt(0,f[g],0)):(c.up.set(0,u[g],0),c.lookAt(0,0,f[g]));const C=this._cubeSize;ol(r,E*C,g>2?C:0,C,C),d.setRenderTarget(r),M&&d.render(y,c),d.render(t,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=m,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Js||t.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());const s=r?this._cubemapMaterial:this._equirectMaterial,l=new li(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=t;const u=this._cubeSize;ol(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,ch)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Ap[(r-s-1)%Ap.length];this._blur(t,s-1,s,l,c)}e.autoClear=n}_blur(t,e,n,r,s){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,r,"latitudinal",s),this._halfBlur(l,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,l,c){const u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new li(this._lodPlanes[r],f),p=f.uniforms,x=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*ts-1),M=s/y,v=isFinite(s)?1+Math.floor(d*M):ts;v>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ts}`);const g=[];let E=0;for(let N=0;N<ts;++N){const V=N/M,I=Math.exp(-V*V/2);g.push(I),N===0?E+=I:N<v&&(E+=2*I)}for(let N=0;N<g.length;N++)g[N]=g[N]/E;p.envMap.value=t.texture,p.samples.value=v,p.weights.value=g,p.latitudinal.value=l==="latitudinal",c&&(p.poleAxis.value=c);const{_lodMax:C}=this;p.dTheta.value=y,p.mipInt.value=C-n;const w=this._sizeLods[r],F=3*w*(r>C-Ws?r-C+Ws:0),D=4*(this._cubeSize-w);ol(e,F,D,3*w,2*w),u.setRenderTarget(e),u.render(m,ch)}}function IA(a){const t=[],e=[],n=[];let r=a;const s=a-Ws+1+wp.length;for(let l=0;l<s;l++){const c=Math.pow(2,r);e.push(c);let u=1/c;l>a-Ws?u=wp[l-a+Ws-1]:l===0&&(u=0),n.push(u);const f=1/(c-2),d=-f,m=1+f,p=[d,d,m,d,m,m,d,d,m,m,d,m],x=6,y=6,M=3,v=2,g=1,E=new Float32Array(M*y*x),C=new Float32Array(v*y*x),w=new Float32Array(g*y*x);for(let D=0;D<x;D++){const N=D%3*2/3-1,V=D>2?0:-1,I=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];E.set(I,M*y*D),C.set(p,v*y*D);const A=[D,D,D,D,D,D];w.set(A,g*y*D)}const F=new Dr;F.setAttribute("position",new Ii(E,M)),F.setAttribute("uv",new Ii(C,v)),F.setAttribute("faceIndex",new Ii(w,g)),t.push(F),r>Ws&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cp(a,t,e){const n=new ss(a,t,e);return n.texture.mapping=bl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ol(a,t,e,n,r){a.viewport.set(t,e,n,r),a.scissor.set(t,e,n,r)}function DA(a,t,e){const n=new Float32Array(ts),r=new Q(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Rp(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Pp(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UA(a){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const u=c.mapping,f=u===Uh||u===Nh,d=u===Js||u===Qs;if(f||d){let m=t.get(c);const p=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return e===null&&(e=new Tp(a)),m=f?e.fromEquirectangular(c,m):e.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),m.texture;if(m!==void 0)return m.texture;{const x=c.image;return f&&x&&x.height>0||d&&x&&r(x)?(e===null&&(e=new Tp(a)),m=f?e.fromEquirectangular(c):e.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),c.addEventListener("dispose",s),m.texture):null}}}return c}function r(c){let u=0;const f=6;for(let d=0;d<f;d++)c[d]!==void 0&&u++;return u===f}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function NA(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function FA(a,t,e,n){const r={},s=new WeakMap;function l(m){const p=m.target;p.index!==null&&t.remove(p.index);for(const y in p.attributes)t.remove(p.attributes[y]);p.removeEventListener("dispose",l),delete r[p.id];const x=s.get(p);x&&(t.remove(x),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(m,p){return r[p.id]===!0||(p.addEventListener("dispose",l),r[p.id]=!0,e.memory.geometries++),p}function u(m){const p=m.attributes;for(const x in p)t.update(p[x],a.ARRAY_BUFFER)}function f(m){const p=[],x=m.index,y=m.attributes.position;let M=0;if(x!==null){const E=x.array;M=x.version;for(let C=0,w=E.length;C<w;C+=3){const F=E[C+0],D=E[C+1],N=E[C+2];p.push(F,D,D,N,N,F)}}else if(y!==void 0){const E=y.array;M=y.version;for(let C=0,w=E.length/3-1;C<w;C+=3){const F=C+0,D=C+1,N=C+2;p.push(F,D,D,N,N,F)}}else return;const v=new(Um(p)?Gm:Vm)(p,1);v.version=M;const g=s.get(m);g&&t.remove(g),s.set(m,v)}function d(m){const p=s.get(m);if(p){const x=m.index;x!==null&&p.version<x.version&&f(m)}else f(m);return s.get(m)}return{get:c,update:u,getWireframeAttribute:d}}function OA(a,t,e){let n;function r(p){n=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function u(p,x){a.drawElements(n,x,s,p*l),e.update(x,n,1)}function f(p,x,y){y!==0&&(a.drawElementsInstanced(n,x,s,p*l,y),e.update(x,n,y))}function d(p,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,s,p,0,y);let v=0;for(let g=0;g<y;g++)v+=x[g];e.update(v,n,1)}function m(p,x,y,M){if(y===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<p.length;g++)f(p[g]/l,x[g],M[g]);else{v.multiDrawElementsInstancedWEBGL(n,x,0,s,p,0,M,0,y);let g=0;for(let E=0;E<y;E++)g+=x[E]*M[E];e.update(g,n,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function BA(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,c){switch(e.calls++,l){case a.TRIANGLES:e.triangles+=c*(s/3);break;case a.LINES:e.lines+=c*(s/2);break;case a.LINE_STRIP:e.lines+=c*(s-1);break;case a.LINE_LOOP:e.lines+=c*s;break;case a.POINTS:e.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function zA(a,t,e){const n=new WeakMap,r=new Ke;function s(l,c,u){const f=l.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=d!==void 0?d.length:0;let p=n.get(c);if(p===void 0||p.count!==m){let A=function(){V.dispose(),n.delete(c),c.removeEventListener("dispose",A)};var x=A;p!==void 0&&p.texture.dispose();const y=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let w=0;y===!0&&(w=1),M===!0&&(w=2),v===!0&&(w=3);let F=c.attributes.position.count*w,D=1;F>t.maxTextureSize&&(D=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const N=new Float32Array(F*D*4*m),V=new Fm(N,F,D,m);V.type=rr,V.needsUpdate=!0;const I=w*4;for(let B=0;B<m;B++){const tt=g[B],z=E[B],K=C[B],$=F*D*4*B;for(let k=0;k<tt.count;k++){const st=k*I;y===!0&&(r.fromBufferAttribute(tt,k),N[$+st+0]=r.x,N[$+st+1]=r.y,N[$+st+2]=r.z,N[$+st+3]=0),M===!0&&(r.fromBufferAttribute(z,k),N[$+st+4]=r.x,N[$+st+5]=r.y,N[$+st+6]=r.z,N[$+st+7]=0),v===!0&&(r.fromBufferAttribute(K,k),N[$+st+8]=r.x,N[$+st+9]=r.y,N[$+st+10]=r.z,N[$+st+11]=K.itemSize===4?r.w:1)}}p={count:m,texture:V,size:new ae(F,D)},n.set(c,p),c.addEventListener("dispose",A)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(a,"morphTexture",l.morphTexture,e);else{let y=0;for(let v=0;v<f.length;v++)y+=f[v];const M=c.morphTargetsRelative?1:1-y;u.getUniforms().setValue(a,"morphTargetBaseInfluence",M),u.getUniforms().setValue(a,"morphTargetInfluences",f)}u.getUniforms().setValue(a,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}return{update:s}}function HA(a,t,e,n){let r=new WeakMap;function s(u){const f=n.render.frame,d=u.geometry,m=t.get(u,d);if(r.get(m)!==f&&(t.update(m),r.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(e.update(u.instanceMatrix,a.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,a.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const p=u.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return m}function l(){r=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:s,dispose:l}}const Zm=new Hn,Lp=new Xm(1,1),jm=new Fm,Jm=new hS,Qm=new Mu,Ip=[],Dp=[],Up=new Float32Array(16),Np=new Float32Array(9),Fp=new Float32Array(4);function so(a,t,e){const n=a[0];if(n<=0||n>0)return a;const r=t*e;let s=Ip[r];if(s===void 0&&(s=new Float32Array(r),Ip[r]=s),t!==0){n.toArray(s,0);for(let l=1,c=0;l!==t;++l)c+=e,a[l].toArray(s,c)}return s}function cn(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function hn(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Al(a,t){let e=Dp[t];e===void 0&&(e=new Int32Array(t),Dp[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function VA(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function GA(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;a.uniform2fv(this.addr,t),hn(e,t)}}function kA(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;a.uniform3fv(this.addr,t),hn(e,t)}}function WA(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;a.uniform4fv(this.addr,t),hn(e,t)}}function XA(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Fp.set(n),a.uniformMatrix2fv(this.addr,!1,Fp),hn(e,n)}}function qA(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Np.set(n),a.uniformMatrix3fv(this.addr,!1,Np),hn(e,n)}}function YA(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Up.set(n),a.uniformMatrix4fv(this.addr,!1,Up),hn(e,n)}}function $A(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function KA(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;a.uniform2iv(this.addr,t),hn(e,t)}}function ZA(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;a.uniform3iv(this.addr,t),hn(e,t)}}function jA(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;a.uniform4iv(this.addr,t),hn(e,t)}}function JA(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function QA(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;a.uniform2uiv(this.addr,t),hn(e,t)}}function tT(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;a.uniform3uiv(this.addr,t),hn(e,t)}}function eT(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;a.uniform4uiv(this.addr,t),hn(e,t)}}function nT(a,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r);let s;this.type===a.SAMPLER_2D_SHADOW?(Lp.compareFunction=Dm,s=Lp):s=Zm,e.setTexture2D(t||s,r)}function iT(a,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Jm,r)}function rT(a,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Qm,r)}function sT(a,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||jm,r)}function oT(a){switch(a){case 5126:return VA;case 35664:return GA;case 35665:return kA;case 35666:return WA;case 35674:return XA;case 35675:return qA;case 35676:return YA;case 5124:case 35670:return $A;case 35667:case 35671:return KA;case 35668:case 35672:return ZA;case 35669:case 35673:return jA;case 5125:return JA;case 36294:return QA;case 36295:return tT;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return sT}}function aT(a,t){a.uniform1fv(this.addr,t)}function lT(a,t){const e=so(t,this.size,2);a.uniform2fv(this.addr,e)}function cT(a,t){const e=so(t,this.size,3);a.uniform3fv(this.addr,e)}function hT(a,t){const e=so(t,this.size,4);a.uniform4fv(this.addr,e)}function uT(a,t){const e=so(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function fT(a,t){const e=so(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function dT(a,t){const e=so(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function pT(a,t){a.uniform1iv(this.addr,t)}function mT(a,t){a.uniform2iv(this.addr,t)}function gT(a,t){a.uniform3iv(this.addr,t)}function _T(a,t){a.uniform4iv(this.addr,t)}function vT(a,t){a.uniform1uiv(this.addr,t)}function xT(a,t){a.uniform2uiv(this.addr,t)}function yT(a,t){a.uniform3uiv(this.addr,t)}function MT(a,t){a.uniform4uiv(this.addr,t)}function ET(a,t,e){const n=this.cache,r=t.length,s=Al(e,r);cn(n,s)||(a.uniform1iv(this.addr,s),hn(n,s));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||Zm,s[l])}function ST(a,t,e){const n=this.cache,r=t.length,s=Al(e,r);cn(n,s)||(a.uniform1iv(this.addr,s),hn(n,s));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||Jm,s[l])}function wT(a,t,e){const n=this.cache,r=t.length,s=Al(e,r);cn(n,s)||(a.uniform1iv(this.addr,s),hn(n,s));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||Qm,s[l])}function bT(a,t,e){const n=this.cache,r=t.length,s=Al(e,r);cn(n,s)||(a.uniform1iv(this.addr,s),hn(n,s));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||jm,s[l])}function AT(a){switch(a){case 5126:return aT;case 35664:return lT;case 35665:return cT;case 35666:return hT;case 35674:return uT;case 35675:return fT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return bT}}class TT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=oT(e.type)}}class CT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=AT(e.type)}}class RT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const c=r[s];c.setValue(t,e[c.id],n)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function Op(a,t){a.seq.push(t),a.map[t.id]=t}function PT(a,t,e){const n=a.name,r=n.length;for(ph.lastIndex=0;;){const s=ph.exec(n),l=ph.lastIndex;let c=s[1];const u=s[2]==="]",f=s[3];if(u&&(c=c|0),f===void 0||f==="["&&l+2===r){Op(e,f===void 0?new TT(c,a,t):new CT(c,a,t));break}else{let m=e.map[c];m===void 0&&(m=new RT(c),Op(e,m)),e=m}}}class Ml{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),l=t.getUniformLocation(e,s.name);PT(s,l,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,l=e.length;s!==l;++s){const c=e[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const l=t[r];l.id in e&&n.push(l)}return n}}function Bp(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}const LT=37297;let IT=0;function DT(a,t){const e=a.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let l=r;l<s;l++){const c=l+1;n.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return n.join(`
`)}const zp=new oe;function UT(a){be._getMatrix(zp,be.workingColorSpace,a);const t=`mat3( ${zp.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(a)){case El:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function Hp(a,t,e){const n=a.getShaderParameter(t,a.COMPILE_STATUS),r=a.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+DT(a.getShaderSource(t),l)}else return r}function NT(a,t){const e=UT(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function FT(a,t){let e;switch(t){case NE:e="Linear";break;case FE:e="Reinhard";break;case OE:e="Cineon";break;case BE:e="ACESFilmic";break;case HE:e="AgX";break;case VE:e="Neutral";break;case zE:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const al=new Q;function OT(){be.getLuminanceCoefficients(al);const a=al.x.toFixed(4),t=al.y.toFixed(4),e=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BT(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function zT(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function HT(a,t){const e={},n=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=a.getActiveAttrib(t,r),l=s.name;let c=1;s.type===a.FLOAT_MAT2&&(c=2),s.type===a.FLOAT_MAT3&&(c=3),s.type===a.FLOAT_MAT4&&(c=4),e[l]={type:s.type,location:a.getAttribLocation(t,l),locationSize:c}}return e}function Do(a){return a!==""}function Vp(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gp(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const VT=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(a){return a.replace(VT,kT)}const GT=new Map;function kT(a,t){let e=ce[t];if(e===void 0){const n=GT.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uu(e)}const WT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(a){return a.replace(WT,XT)}function XT(a,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wp(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qT(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===vm?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===xm?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===nr&&(t="SHADOWMAP_TYPE_VSM"),t}function YT(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Js:case Qs:t="ENVMAP_TYPE_CUBE";break;case bl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $T(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function KT(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ym:t="ENVMAP_BLENDING_MULTIPLY";break;case DE:t="ENVMAP_BLENDING_MIX";break;case UE:t="ENVMAP_BLENDING_ADD";break}return t}function ZT(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jT(a,t,e,n){const r=a.getContext(),s=e.defines;let l=e.vertexShader,c=e.fragmentShader;const u=qT(e),f=YT(e),d=$T(e),m=KT(e),p=ZT(e),x=BT(e),y=zT(s),M=r.createProgram();let v,g,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Do).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(v=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rr?"#define TONE_MAPPING":"",e.toneMapping!==Rr?ce.tonemapping_pars_fragment:"",e.toneMapping!==Rr?FT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,NT("linearToOutputTexel",e.outputColorSpace),OT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Do).join(`
`)),l=uu(l),l=Vp(l,e),l=Gp(l,e),c=uu(c),c=Vp(c,e),c=Gp(c,e),l=kp(l),c=kp(c),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=E+v+l,w=E+g+c,F=Bp(r,r.VERTEX_SHADER,C),D=Bp(r,r.FRAGMENT_SHADER,w);r.attachShader(M,F),r.attachShader(M,D),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function N(B){if(a.debug.checkShaderErrors){const tt=r.getProgramInfoLog(M).trim(),z=r.getShaderInfoLog(F).trim(),K=r.getShaderInfoLog(D).trim();let $=!0,k=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,M,F,D);else{const st=Hp(r,F,"vertex"),j=Hp(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+tt+`
`+st+`
`+j)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(z===""||K==="")&&(k=!1);k&&(B.diagnostics={runnable:$,programLog:tt,vertexShader:{log:z,prefix:v},fragmentShader:{log:K,prefix:g}})}r.deleteShader(F),r.deleteShader(D),V=new Ml(r,M),I=HT(r,M)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let I;this.getAttributes=function(){return I===void 0&&N(this),I};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(M,LT)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=IT++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=D,this}let JT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new t1(t),e.set(t,n)),n}}class t1{constructor(t){this.id=JT++,this.code=t,this.usedTimes=0}}function e1(a,t,e,n,r,s,l){const c=new Bm,u=new QT,f=new Set,d=[],m=r.logarithmicDepthBuffer,p=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(I){return f.add(I),I===0?"uv":`uv${I}`}function v(I,A,B,tt,z){const K=tt.fog,$=z.geometry,k=I.isMeshStandardMaterial?tt.environment:null,st=(I.isMeshStandardMaterial?e:t).get(I.envMap||k),j=st&&st.mapping===bl?st.image.height:null,ut=y[I.type];I.precision!==null&&(x=r.getMaxPrecision(I.precision),x!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",x,"instead."));const yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=yt!==void 0?yt.length:0;let xt=0;$.morphAttributes.position!==void 0&&(xt=1),$.morphAttributes.normal!==void 0&&(xt=2),$.morphAttributes.color!==void 0&&(xt=3);let _e,at,_t,Pt;if(ut){const Ae=Ri[ut];_e=Ae.vertexShader,at=Ae.fragmentShader}else _e=I.vertexShader,at=I.fragmentShader,u.update(I),_t=u.getVertexShaderID(I),Pt=u.getFragmentShaderID(I);const St=a.getRenderTarget(),Wt=a.state.buffers.depth.getReversed(),fe=z.isInstancedMesh===!0,jt=z.isBatchedMesh===!0,ze=!!I.map,Ie=!!I.matcap,de=!!st,H=!!I.aoMap,un=!!I.lightMap,ve=!!I.bumpMap,te=!!I.normalMap,Gt=!!I.displacementMap,Fe=!!I.emissiveMap,Ht=!!I.metalnessMap,U=!!I.roughnessMap,T=I.anisotropy>0,J=I.clearcoat>0,dt=I.dispersion>0,pt=I.iridescence>0,ct=I.sheen>0,zt=I.transmission>0,Et=T&&!!I.anisotropyMap,Lt=J&&!!I.clearcoatMap,pe=J&&!!I.clearcoatNormalMap,vt=J&&!!I.clearcoatRoughnessMap,Dt=pt&&!!I.iridescenceMap,qt=pt&&!!I.iridescenceThicknessMap,Zt=ct&&!!I.sheenColorMap,Ut=ct&&!!I.sheenRoughnessMap,ue=!!I.specularMap,ee=!!I.specularColorMap,De=!!I.specularIntensityMap,W=zt&&!!I.transmissionMap,At=zt&&!!I.thicknessMap,rt=!!I.gradientMap,ft=!!I.alphaMap,Rt=I.alphaTest>0,Ct=!!I.alphaHash,ie=!!I.extensions;let We=Rr;I.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(We=a.toneMapping);const nn={shaderID:ut,shaderType:I.type,shaderName:I.name,vertexShader:_e,fragmentShader:at,defines:I.defines,customVertexShaderID:_t,customFragmentShaderID:Pt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:x,batching:jt,batchingColor:jt&&z._colorsTexture!==null,instancing:fe,instancingColor:fe&&z.instanceColor!==null,instancingMorph:fe&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:St===null?a.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:no,alphaToCoverage:!!I.alphaToCoverage,map:ze,matcap:Ie,envMap:de,envMapMode:de&&st.mapping,envMapCubeUVHeight:j,aoMap:H,lightMap:un,bumpMap:ve,normalMap:te,displacementMap:p&&Gt,emissiveMap:Fe,normalMapObjectSpace:te&&I.normalMapType===XE,normalMapTangentSpace:te&&I.normalMapType===Im,metalnessMap:Ht,roughnessMap:U,anisotropy:T,anisotropyMap:Et,clearcoat:J,clearcoatMap:Lt,clearcoatNormalMap:pe,clearcoatRoughnessMap:vt,dispersion:dt,iridescence:pt,iridescenceMap:Dt,iridescenceThicknessMap:qt,sheen:ct,sheenColorMap:Zt,sheenRoughnessMap:Ut,specularMap:ue,specularColorMap:ee,specularIntensityMap:De,transmission:zt,transmissionMap:W,thicknessMap:At,gradientMap:rt,opaque:I.transparent===!1&&I.blending===Ys&&I.alphaToCoverage===!1,alphaMap:ft,alphaTest:Rt,alphaHash:Ct,combine:I.combine,mapUv:ze&&M(I.map.channel),aoMapUv:H&&M(I.aoMap.channel),lightMapUv:un&&M(I.lightMap.channel),bumpMapUv:ve&&M(I.bumpMap.channel),normalMapUv:te&&M(I.normalMap.channel),displacementMapUv:Gt&&M(I.displacementMap.channel),emissiveMapUv:Fe&&M(I.emissiveMap.channel),metalnessMapUv:Ht&&M(I.metalnessMap.channel),roughnessMapUv:U&&M(I.roughnessMap.channel),anisotropyMapUv:Et&&M(I.anisotropyMap.channel),clearcoatMapUv:Lt&&M(I.clearcoatMap.channel),clearcoatNormalMapUv:pe&&M(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&M(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&M(I.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&M(I.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&M(I.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&M(I.sheenRoughnessMap.channel),specularMapUv:ue&&M(I.specularMap.channel),specularColorMapUv:ee&&M(I.specularColorMap.channel),specularIntensityMapUv:De&&M(I.specularIntensityMap.channel),transmissionMapUv:W&&M(I.transmissionMap.channel),thicknessMapUv:At&&M(I.thicknessMap.channel),alphaMapUv:ft&&M(I.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(te||T),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(ze||ft),fog:!!K,useFog:I.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Wt,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:xt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:I.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:We,decodeVideoTexture:ze&&I.map.isVideoTexture===!0&&be.getTransfer(I.map.colorSpace)===Ue,decodeVideoTextureEmissive:Fe&&I.emissiveMap.isVideoTexture===!0&&be.getTransfer(I.emissiveMap.colorSpace)===Ue,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ir,flipSided:I.side===zn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:ie&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&I.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return nn.vertexUv1s=f.has(1),nn.vertexUv2s=f.has(2),nn.vertexUv3s=f.has(3),f.clear(),nn}function g(I){const A=[];if(I.shaderID?A.push(I.shaderID):(A.push(I.customVertexShaderID),A.push(I.customFragmentShaderID)),I.defines!==void 0)for(const B in I.defines)A.push(B),A.push(I.defines[B]);return I.isRawShaderMaterial===!1&&(E(A,I),C(A,I),A.push(a.outputColorSpace)),A.push(I.customProgramCacheKey),A.join()}function E(I,A){I.push(A.precision),I.push(A.outputColorSpace),I.push(A.envMapMode),I.push(A.envMapCubeUVHeight),I.push(A.mapUv),I.push(A.alphaMapUv),I.push(A.lightMapUv),I.push(A.aoMapUv),I.push(A.bumpMapUv),I.push(A.normalMapUv),I.push(A.displacementMapUv),I.push(A.emissiveMapUv),I.push(A.metalnessMapUv),I.push(A.roughnessMapUv),I.push(A.anisotropyMapUv),I.push(A.clearcoatMapUv),I.push(A.clearcoatNormalMapUv),I.push(A.clearcoatRoughnessMapUv),I.push(A.iridescenceMapUv),I.push(A.iridescenceThicknessMapUv),I.push(A.sheenColorMapUv),I.push(A.sheenRoughnessMapUv),I.push(A.specularMapUv),I.push(A.specularColorMapUv),I.push(A.specularIntensityMapUv),I.push(A.transmissionMapUv),I.push(A.thicknessMapUv),I.push(A.combine),I.push(A.fogExp2),I.push(A.sizeAttenuation),I.push(A.morphTargetsCount),I.push(A.morphAttributeCount),I.push(A.numDirLights),I.push(A.numPointLights),I.push(A.numSpotLights),I.push(A.numSpotLightMaps),I.push(A.numHemiLights),I.push(A.numRectAreaLights),I.push(A.numDirLightShadows),I.push(A.numPointLightShadows),I.push(A.numSpotLightShadows),I.push(A.numSpotLightShadowsWithMaps),I.push(A.numLightProbes),I.push(A.shadowMapType),I.push(A.toneMapping),I.push(A.numClippingPlanes),I.push(A.numClipIntersection),I.push(A.depthPacking)}function C(I,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),I.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),I.push(c.mask)}function w(I){const A=y[I.type];let B;if(A){const tt=Ri[A];B=SS.clone(tt.uniforms)}else B=I.uniforms;return B}function F(I,A){let B;for(let tt=0,z=d.length;tt<z;tt++){const K=d[tt];if(K.cacheKey===A){B=K,++B.usedTimes;break}}return B===void 0&&(B=new jT(a,A,I,s),d.push(B)),B}function D(I){if(--I.usedTimes===0){const A=d.indexOf(I);d[A]=d[d.length-1],d.pop(),I.destroy()}}function N(I){u.remove(I)}function V(){u.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:w,acquireProgram:F,releaseProgram:D,releaseShaderCache:N,programs:d,dispose:V}}function n1(){let a=new WeakMap;function t(l){return a.has(l)}function e(l){let c=a.get(l);return c===void 0&&(c={},a.set(l,c)),c}function n(l){a.delete(l)}function r(l,c,u){a.get(l)[c]=u}function s(){a=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function i1(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Xp(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function qp(){const a=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function l(m,p,x,y,M,v){let g=a[t];return g===void 0?(g={id:m.id,object:m,geometry:p,material:x,groupOrder:y,renderOrder:m.renderOrder,z:M,group:v},a[t]=g):(g.id=m.id,g.object=m,g.geometry=p,g.material=x,g.groupOrder=y,g.renderOrder=m.renderOrder,g.z=M,g.group=v),t++,g}function c(m,p,x,y,M,v){const g=l(m,p,x,y,M,v);x.transmission>0?n.push(g):x.transparent===!0?r.push(g):e.push(g)}function u(m,p,x,y,M,v){const g=l(m,p,x,y,M,v);x.transmission>0?n.unshift(g):x.transparent===!0?r.unshift(g):e.unshift(g)}function f(m,p){e.length>1&&e.sort(m||i1),n.length>1&&n.sort(p||Xp),r.length>1&&r.sort(p||Xp)}function d(){for(let m=t,p=a.length;m<p;m++){const x=a[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:d,sort:f}}function r1(){let a=new WeakMap;function t(n,r){const s=a.get(n);let l;return s===void 0?(l=new qp,a.set(n,[l])):r>=s.length?(l=new qp,s.push(l)):l=s[r],l}function e(){a=new WeakMap}return{get:t,dispose:e}}function s1(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Q,color:new Re};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":e={color:new Re,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[t.id]=e,e}}}function o1(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let a1=0;function l1(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function c1(a){const t=new s1,e=o1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new Q);const r=new Q,s=new Ze,l=new Ze;function c(f){let d=0,m=0,p=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let x=0,y=0,M=0,v=0,g=0,E=0,C=0,w=0,F=0,D=0,N=0;f.sort(l1);for(let I=0,A=f.length;I<A;I++){const B=f[I],tt=B.color,z=B.intensity,K=B.distance,$=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=tt.r*z,m+=tt.g*z,p+=tt.b*z;else if(B.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(B.sh.coefficients[k],z);N++}else if(B.isDirectionalLight){const k=t.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const st=B.shadow,j=e.get(B);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,n.directionalShadow[x]=j,n.directionalShadowMap[x]=$,n.directionalShadowMatrix[x]=B.shadow.matrix,E++}n.directional[x]=k,x++}else if(B.isSpotLight){const k=t.get(B);k.position.setFromMatrixPosition(B.matrixWorld),k.color.copy(tt).multiplyScalar(z),k.distance=K,k.coneCos=Math.cos(B.angle),k.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),k.decay=B.decay,n.spot[M]=k;const st=B.shadow;if(B.map&&(n.spotLightMap[F]=B.map,F++,st.updateMatrices(B),B.castShadow&&D++),n.spotLightMatrix[M]=st.matrix,B.castShadow){const j=e.get(B);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=$,w++}M++}else if(B.isRectAreaLight){const k=t.get(B);k.color.copy(tt).multiplyScalar(z),k.halfWidth.set(B.width*.5,0,0),k.halfHeight.set(0,B.height*.5,0),n.rectArea[v]=k,v++}else if(B.isPointLight){const k=t.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),k.distance=B.distance,k.decay=B.decay,B.castShadow){const st=B.shadow,j=e.get(B);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,j.shadowCameraNear=st.camera.near,j.shadowCameraFar=st.camera.far,n.pointShadow[y]=j,n.pointShadowMap[y]=$,n.pointShadowMatrix[y]=B.shadow.matrix,C++}n.point[y]=k,y++}else if(B.isHemisphereLight){const k=t.get(B);k.skyColor.copy(B.color).multiplyScalar(z),k.groundColor.copy(B.groundColor).multiplyScalar(z),n.hemi[g]=k,g++}}v>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=p;const V=n.hash;(V.directionalLength!==x||V.pointLength!==y||V.spotLength!==M||V.rectAreaLength!==v||V.hemiLength!==g||V.numDirectionalShadows!==E||V.numPointShadows!==C||V.numSpotShadows!==w||V.numSpotMaps!==F||V.numLightProbes!==N)&&(n.directional.length=x,n.spot.length=M,n.rectArea.length=v,n.point.length=y,n.hemi.length=g,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=w+F-D,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=N,V.directionalLength=x,V.pointLength=y,V.spotLength=M,V.rectAreaLength=v,V.hemiLength=g,V.numDirectionalShadows=E,V.numPointShadows=C,V.numSpotShadows=w,V.numSpotMaps=F,V.numLightProbes=N,n.version=a1++)}function u(f,d){let m=0,p=0,x=0,y=0,M=0;const v=d.matrixWorldInverse;for(let g=0,E=f.length;g<E;g++){const C=f[g];if(C.isDirectionalLight){const w=n.directional[m];w.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),m++}else if(C.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),x++}else if(C.isRectAreaLight){const w=n.rectArea[y];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(v),l.identity(),s.copy(C.matrixWorld),s.premultiply(v),l.extractRotation(s),w.halfWidth.set(C.width*.5,0,0),w.halfHeight.set(0,C.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),y++}else if(C.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(v),p++}else if(C.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(v),M++}}}return{setup:c,setupView:u,state:n}}function Yp(a){const t=new c1(a),e=[],n=[];function r(d){f.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:l}}function h1(a){let t=new WeakMap;function e(r,s=0){const l=t.get(r);let c;return l===void 0?(c=new Yp(a),t.set(r,[c])):s>=l.length?(c=new Yp(a),l.push(c)):c=l[s],c}function n(){t=new WeakMap}return{get:e,dispose:n}}const u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d1(a,t,e){let n=new Eu;const r=new ae,s=new ae,l=new Ke,c=new IS({depthPacking:WE}),u=new DS,f={},d=e.maxTextureSize,m={[Pr]:zn,[zn]:Pr,[ir]:ir},p=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:u1,fragmentShader:f1}),x=p.clone();x.defines.HORIZONTAL_PASS=1;const y=new Dr;y.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new li(y,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let g=this.type;this.render=function(D,N,V){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;const I=a.getRenderTarget(),A=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),tt=a.state;tt.setBlending(Cr),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const z=g!==nr&&this.type===nr,K=g===nr&&this.type!==nr;for(let $=0,k=D.length;$<k;$++){const st=D[$],j=st.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ut=j.getFrameExtents();if(r.multiply(ut),s.copy(j.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ut.x),r.x=s.x*ut.x,j.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ut.y),r.y=s.y*ut.y,j.mapSize.y=s.y)),j.map===null||z===!0||K===!0){const Mt=this.type!==nr?{minFilter:Ei,magFilter:Ei}:{};j.map!==null&&j.map.dispose(),j.map=new ss(r.x,r.y,Mt),j.map.texture.name=st.name+".shadowMap",j.camera.updateProjectionMatrix()}a.setRenderTarget(j.map),a.clear();const yt=j.getViewportCount();for(let Mt=0;Mt<yt;Mt++){const xt=j.getViewport(Mt);l.set(s.x*xt.x,s.y*xt.y,s.x*xt.z,s.y*xt.w),tt.viewport(l),j.updateMatrices(st,Mt),n=j.getFrustum(),w(N,V,j.camera,st,this.type)}j.isPointLightShadow!==!0&&this.type===nr&&E(j,V),j.needsUpdate=!1}g=this.type,v.needsUpdate=!1,a.setRenderTarget(I,A,B)};function E(D,N){const V=t.update(M);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ss(r.x,r.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,a.setRenderTarget(D.mapPass),a.clear(),a.renderBufferDirect(N,null,V,p,M,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,a.setRenderTarget(D.map),a.clear(),a.renderBufferDirect(N,null,V,x,M,null)}function C(D,N,V,I){let A=null;const B=V.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)A=B;else if(A=V.isPointLight===!0?u:c,a.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const tt=A.uuid,z=N.uuid;let K=f[tt];K===void 0&&(K={},f[tt]=K);let $=K[z];$===void 0&&($=A.clone(),K[z]=$,N.addEventListener("dispose",F)),A=$}if(A.visible=N.visible,A.wireframe=N.wireframe,I===nr?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:m[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const tt=a.properties.get(A);tt.light=V}return A}function w(D,N,V,I,A){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&A===nr)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,D.matrixWorld);const z=t.update(D),K=D.material;if(Array.isArray(K)){const $=z.groups;for(let k=0,st=$.length;k<st;k++){const j=$[k],ut=K[j.materialIndex];if(ut&&ut.visible){const yt=C(D,ut,I,A);D.onBeforeShadow(a,D,N,V,z,yt,j),a.renderBufferDirect(V,null,z,yt,D,j),D.onAfterShadow(a,D,N,V,z,yt,j)}}}else if(K.visible){const $=C(D,K,I,A);D.onBeforeShadow(a,D,N,V,z,$,null),a.renderBufferDirect(V,null,z,$,D,null),D.onAfterShadow(a,D,N,V,z,$,null)}}const tt=D.children;for(let z=0,K=tt.length;z<K;z++)w(tt[z],N,V,I,A)}function F(D){D.target.removeEventListener("dispose",F);for(const V in f){const I=f[V],A=D.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}const p1={[Th]:Ch,[Rh]:Ih,[Ph]:Dh,[js]:Lh,[Ch]:Th,[Ih]:Rh,[Dh]:Ph,[Lh]:js};function m1(a,t){function e(){let W=!1;const At=new Ke;let rt=null;const ft=new Ke(0,0,0,0);return{setMask:function(Rt){rt!==Rt&&!W&&(a.colorMask(Rt,Rt,Rt,Rt),rt=Rt)},setLocked:function(Rt){W=Rt},setClear:function(Rt,Ct,ie,We,nn){nn===!0&&(Rt*=We,Ct*=We,ie*=We),At.set(Rt,Ct,ie,We),ft.equals(At)===!1&&(a.clearColor(Rt,Ct,ie,We),ft.copy(At))},reset:function(){W=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let W=!1,At=!1,rt=null,ft=null,Rt=null;return{setReversed:function(Ct){if(At!==Ct){const ie=t.get("EXT_clip_control");At?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const We=Rt;Rt=null,this.setClear(We)}At=Ct},getReversed:function(){return At},setTest:function(Ct){Ct?St(a.DEPTH_TEST):Wt(a.DEPTH_TEST)},setMask:function(Ct){rt!==Ct&&!W&&(a.depthMask(Ct),rt=Ct)},setFunc:function(Ct){if(At&&(Ct=p1[Ct]),ft!==Ct){switch(Ct){case Th:a.depthFunc(a.NEVER);break;case Ch:a.depthFunc(a.ALWAYS);break;case Rh:a.depthFunc(a.LESS);break;case js:a.depthFunc(a.LEQUAL);break;case Ph:a.depthFunc(a.EQUAL);break;case Lh:a.depthFunc(a.GEQUAL);break;case Ih:a.depthFunc(a.GREATER);break;case Dh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ft=Ct}},setLocked:function(Ct){W=Ct},setClear:function(Ct){Rt!==Ct&&(At&&(Ct=1-Ct),a.clearDepth(Ct),Rt=Ct)},reset:function(){W=!1,rt=null,ft=null,Rt=null,At=!1}}}function r(){let W=!1,At=null,rt=null,ft=null,Rt=null,Ct=null,ie=null,We=null,nn=null;return{setTest:function(Ae){W||(Ae?St(a.STENCIL_TEST):Wt(a.STENCIL_TEST))},setMask:function(Ae){At!==Ae&&!W&&(a.stencilMask(Ae),At=Ae)},setFunc:function(Ae,Vn,ci){(rt!==Ae||ft!==Vn||Rt!==ci)&&(a.stencilFunc(Ae,Vn,ci),rt=Ae,ft=Vn,Rt=ci)},setOp:function(Ae,Vn,ci){(Ct!==Ae||ie!==Vn||We!==ci)&&(a.stencilOp(Ae,Vn,ci),Ct=Ae,ie=Vn,We=ci)},setLocked:function(Ae){W=Ae},setClear:function(Ae){nn!==Ae&&(a.clearStencil(Ae),nn=Ae)},reset:function(){W=!1,At=null,rt=null,ft=null,Rt=null,Ct=null,ie=null,We=null,nn=null}}}const s=new e,l=new n,c=new r,u=new WeakMap,f=new WeakMap;let d={},m={},p=new WeakMap,x=[],y=null,M=!1,v=null,g=null,E=null,C=null,w=null,F=null,D=null,N=new Re(0,0,0),V=0,I=!1,A=null,B=null,tt=null,z=null,K=null;const $=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,st=0;const j=a.getParameter(a.VERSION);j.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=st>=1):j.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=st>=2);let ut=null,yt={};const Mt=a.getParameter(a.SCISSOR_BOX),xt=a.getParameter(a.VIEWPORT),_e=new Ke().fromArray(Mt),at=new Ke().fromArray(xt);function _t(W,At,rt,ft){const Rt=new Uint8Array(4),Ct=a.createTexture();a.bindTexture(W,Ct),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ie=0;ie<rt;ie++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(At,0,a.RGBA,1,1,ft,0,a.RGBA,a.UNSIGNED_BYTE,Rt):a.texImage2D(At+ie,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Rt);return Ct}const Pt={};Pt[a.TEXTURE_2D]=_t(a.TEXTURE_2D,a.TEXTURE_2D,1),Pt[a.TEXTURE_CUBE_MAP]=_t(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[a.TEXTURE_2D_ARRAY]=_t(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Pt[a.TEXTURE_3D]=_t(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),St(a.DEPTH_TEST),l.setFunc(js),ve(!1),te(Kd),St(a.CULL_FACE),H(Cr);function St(W){d[W]!==!0&&(a.enable(W),d[W]=!0)}function Wt(W){d[W]!==!1&&(a.disable(W),d[W]=!1)}function fe(W,At){return m[W]!==At?(a.bindFramebuffer(W,At),m[W]=At,W===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=At),W===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=At),!0):!1}function jt(W,At){let rt=x,ft=!1;if(W){rt=p.get(At),rt===void 0&&(rt=[],p.set(At,rt));const Rt=W.textures;if(rt.length!==Rt.length||rt[0]!==a.COLOR_ATTACHMENT0){for(let Ct=0,ie=Rt.length;Ct<ie;Ct++)rt[Ct]=a.COLOR_ATTACHMENT0+Ct;rt.length=Rt.length,ft=!0}}else rt[0]!==a.BACK&&(rt[0]=a.BACK,ft=!0);ft&&a.drawBuffers(rt)}function ze(W){return y!==W?(a.useProgram(W),y=W,!0):!1}const Ie={[Qr]:a.FUNC_ADD,[gE]:a.FUNC_SUBTRACT,[_E]:a.FUNC_REVERSE_SUBTRACT};Ie[vE]=a.MIN,Ie[xE]=a.MAX;const de={[yE]:a.ZERO,[ME]:a.ONE,[EE]:a.SRC_COLOR,[bh]:a.SRC_ALPHA,[CE]:a.SRC_ALPHA_SATURATE,[AE]:a.DST_COLOR,[wE]:a.DST_ALPHA,[SE]:a.ONE_MINUS_SRC_COLOR,[Ah]:a.ONE_MINUS_SRC_ALPHA,[TE]:a.ONE_MINUS_DST_COLOR,[bE]:a.ONE_MINUS_DST_ALPHA,[RE]:a.CONSTANT_COLOR,[PE]:a.ONE_MINUS_CONSTANT_COLOR,[LE]:a.CONSTANT_ALPHA,[IE]:a.ONE_MINUS_CONSTANT_ALPHA};function H(W,At,rt,ft,Rt,Ct,ie,We,nn,Ae){if(W===Cr){M===!0&&(Wt(a.BLEND),M=!1);return}if(M===!1&&(St(a.BLEND),M=!0),W!==mE){if(W!==v||Ae!==I){if((g!==Qr||w!==Qr)&&(a.blendEquation(a.FUNC_ADD),g=Qr,w=Qr),Ae)switch(W){case Ys:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Zd:a.blendFunc(a.ONE,a.ONE);break;case jd:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Jd:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ys:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Zd:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case jd:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Jd:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}E=null,C=null,F=null,D=null,N.set(0,0,0),V=0,v=W,I=Ae}return}Rt=Rt||At,Ct=Ct||rt,ie=ie||ft,(At!==g||Rt!==w)&&(a.blendEquationSeparate(Ie[At],Ie[Rt]),g=At,w=Rt),(rt!==E||ft!==C||Ct!==F||ie!==D)&&(a.blendFuncSeparate(de[rt],de[ft],de[Ct],de[ie]),E=rt,C=ft,F=Ct,D=ie),(We.equals(N)===!1||nn!==V)&&(a.blendColor(We.r,We.g,We.b,nn),N.copy(We),V=nn),v=W,I=!1}function un(W,At){W.side===ir?Wt(a.CULL_FACE):St(a.CULL_FACE);let rt=W.side===zn;At&&(rt=!rt),ve(rt),W.blending===Ys&&W.transparent===!1?H(Cr):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),s.setMask(W.colorWrite);const ft=W.stencilWrite;c.setTest(ft),ft&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?St(a.SAMPLE_ALPHA_TO_COVERAGE):Wt(a.SAMPLE_ALPHA_TO_COVERAGE)}function ve(W){A!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),A=W)}function te(W){W!==dE?(St(a.CULL_FACE),W!==B&&(W===Kd?a.cullFace(a.BACK):W===pE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Wt(a.CULL_FACE),B=W}function Gt(W){W!==tt&&(k&&a.lineWidth(W),tt=W)}function Fe(W,At,rt){W?(St(a.POLYGON_OFFSET_FILL),(z!==At||K!==rt)&&(a.polygonOffset(At,rt),z=At,K=rt)):Wt(a.POLYGON_OFFSET_FILL)}function Ht(W){W?St(a.SCISSOR_TEST):Wt(a.SCISSOR_TEST)}function U(W){W===void 0&&(W=a.TEXTURE0+$-1),ut!==W&&(a.activeTexture(W),ut=W)}function T(W,At,rt){rt===void 0&&(ut===null?rt=a.TEXTURE0+$-1:rt=ut);let ft=yt[rt];ft===void 0&&(ft={type:void 0,texture:void 0},yt[rt]=ft),(ft.type!==W||ft.texture!==At)&&(ut!==rt&&(a.activeTexture(rt),ut=rt),a.bindTexture(W,At||Pt[W]),ft.type=W,ft.texture=At)}function J(){const W=yt[ut];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function dt(){try{a.compressedTexImage2D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{a.texSubImage2D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{a.texSubImage3D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{a.texStorage2D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{a.texStorage3D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{a.texImage2D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{a.texImage3D.apply(a,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(W){_e.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),_e.copy(W))}function Ut(W){at.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),at.copy(W))}function ue(W,At){let rt=f.get(At);rt===void 0&&(rt=new WeakMap,f.set(At,rt));let ft=rt.get(W);ft===void 0&&(ft=a.getUniformBlockIndex(At,W.name),rt.set(W,ft))}function ee(W,At){const ft=f.get(At).get(W);u.get(At)!==ft&&(a.uniformBlockBinding(At,ft,W.__bindingPointIndex),u.set(At,ft))}function De(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),l.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},ut=null,yt={},m={},p=new WeakMap,x=[],y=null,M=!1,v=null,g=null,E=null,C=null,w=null,F=null,D=null,N=new Re(0,0,0),V=0,I=!1,A=null,B=null,tt=null,z=null,K=null,_e.set(0,0,a.canvas.width,a.canvas.height),at.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:St,disable:Wt,bindFramebuffer:fe,drawBuffers:jt,useProgram:ze,setBlending:H,setMaterial:un,setFlipSided:ve,setCullFace:te,setLineWidth:Gt,setPolygonOffset:Fe,setScissorTest:Ht,activeTexture:U,bindTexture:T,unbindTexture:J,compressedTexImage2D:dt,compressedTexImage3D:pt,texImage2D:Dt,texImage3D:qt,updateUBOMapping:ue,uniformBlockBinding:ee,texStorage2D:pe,texStorage3D:vt,texSubImage2D:ct,texSubImage3D:zt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Lt,scissor:Zt,viewport:Ut,reset:De}}function g1(a,t,e,n,r,s,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ae,d=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,T){return x?new OffscreenCanvas(U,T):Oo("canvas")}function M(U,T,J){let dt=1;const pt=Ht(U);if((pt.width>J||pt.height>J)&&(dt=J/Math.max(pt.width,pt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ct=Math.floor(dt*pt.width),zt=Math.floor(dt*pt.height);m===void 0&&(m=y(ct,zt));const Et=T?y(ct,zt):m;return Et.width=ct,Et.height=zt,Et.getContext("2d").drawImage(U,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ct+"x"+zt+")."),Et}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),U;return U}function v(U){return U.generateMipmaps}function g(U){a.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(U,T,J,dt,pt=!1){if(U!==null){if(a[U]!==void 0)return a[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=T;if(T===a.RED&&(J===a.FLOAT&&(ct=a.R32F),J===a.HALF_FLOAT&&(ct=a.R16F),J===a.UNSIGNED_BYTE&&(ct=a.R8)),T===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(ct=a.R8UI),J===a.UNSIGNED_SHORT&&(ct=a.R16UI),J===a.UNSIGNED_INT&&(ct=a.R32UI),J===a.BYTE&&(ct=a.R8I),J===a.SHORT&&(ct=a.R16I),J===a.INT&&(ct=a.R32I)),T===a.RG&&(J===a.FLOAT&&(ct=a.RG32F),J===a.HALF_FLOAT&&(ct=a.RG16F),J===a.UNSIGNED_BYTE&&(ct=a.RG8)),T===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(ct=a.RG8UI),J===a.UNSIGNED_SHORT&&(ct=a.RG16UI),J===a.UNSIGNED_INT&&(ct=a.RG32UI),J===a.BYTE&&(ct=a.RG8I),J===a.SHORT&&(ct=a.RG16I),J===a.INT&&(ct=a.RG32I)),T===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(ct=a.RGB8UI),J===a.UNSIGNED_SHORT&&(ct=a.RGB16UI),J===a.UNSIGNED_INT&&(ct=a.RGB32UI),J===a.BYTE&&(ct=a.RGB8I),J===a.SHORT&&(ct=a.RGB16I),J===a.INT&&(ct=a.RGB32I)),T===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(ct=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(ct=a.RGBA16UI),J===a.UNSIGNED_INT&&(ct=a.RGBA32UI),J===a.BYTE&&(ct=a.RGBA8I),J===a.SHORT&&(ct=a.RGBA16I),J===a.INT&&(ct=a.RGBA32I)),T===a.RGB&&J===a.UNSIGNED_INT_5_9_9_9_REV&&(ct=a.RGB9_E5),T===a.RGBA){const zt=pt?El:be.getTransfer(dt);J===a.FLOAT&&(ct=a.RGBA32F),J===a.HALF_FLOAT&&(ct=a.RGBA16F),J===a.UNSIGNED_BYTE&&(ct=zt===Ue?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT_4_4_4_4&&(ct=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(ct=a.RGB5_A1)}return(ct===a.R16F||ct===a.R32F||ct===a.RG16F||ct===a.RG32F||ct===a.RGBA16F||ct===a.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(U,T){let J;return U?T===null||T===rs||T===to?J=a.DEPTH24_STENCIL8:T===rr?J=a.DEPTH32F_STENCIL8:T===Fo&&(J=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===rs||T===to?J=a.DEPTH_COMPONENT24:T===rr?J=a.DEPTH_COMPONENT32F:T===Fo&&(J=a.DEPTH_COMPONENT16),J}function F(U,T){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ei&&U.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function D(U){const T=U.target;T.removeEventListener("dispose",D),V(T),T.isVideoTexture&&d.delete(T)}function N(U){const T=U.target;T.removeEventListener("dispose",N),A(T)}function V(U){const T=n.get(U);if(T.__webglInit===void 0)return;const J=U.source,dt=p.get(J);if(dt){const pt=dt[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&I(U),Object.keys(dt).length===0&&p.delete(J)}n.remove(U)}function I(U){const T=n.get(U);a.deleteTexture(T.__webglTexture);const J=U.source,dt=p.get(J);delete dt[T.__cacheKey],l.memory.textures--}function A(U){const T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let pt=0;pt<T.__webglFramebuffer[dt].length;pt++)a.deleteFramebuffer(T.__webglFramebuffer[dt][pt]);else a.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)a.deleteFramebuffer(T.__webglFramebuffer[dt]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=U.textures;for(let dt=0,pt=J.length;dt<pt;dt++){const ct=n.get(J[dt]);ct.__webglTexture&&(a.deleteTexture(ct.__webglTexture),l.memory.textures--),n.remove(J[dt])}n.remove(U)}let B=0;function tt(){B=0}function z(){const U=B;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),B+=1,U}function K(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function $(U,T){const J=n.get(U);if(U.isVideoTexture&&Gt(U),U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(J,U,T);return}}e.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+T)}function k(U,T){const J=n.get(U);if(U.version>0&&J.__version!==U.version){at(J,U,T);return}e.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+T)}function st(U,T){const J=n.get(U);if(U.version>0&&J.__version!==U.version){at(J,U,T);return}e.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+T)}function j(U,T){const J=n.get(U);if(U.version>0&&J.__version!==U.version){_t(J,U,T);return}e.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+T)}const ut={[Fh]:a.REPEAT,[ns]:a.CLAMP_TO_EDGE,[Oh]:a.MIRRORED_REPEAT},yt={[Ei]:a.NEAREST,[GE]:a.NEAREST_MIPMAP_NEAREST,[Ha]:a.NEAREST_MIPMAP_LINEAR,[Li]:a.LINEAR,[zc]:a.LINEAR_MIPMAP_NEAREST,[is]:a.LINEAR_MIPMAP_LINEAR},Mt={[qE]:a.NEVER,[JE]:a.ALWAYS,[YE]:a.LESS,[Dm]:a.LEQUAL,[$E]:a.EQUAL,[jE]:a.GEQUAL,[KE]:a.GREATER,[ZE]:a.NOTEQUAL};function xt(U,T){if(T.type===rr&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===zc||T.magFilter===Ha||T.magFilter===is||T.minFilter===Li||T.minFilter===zc||T.minFilter===Ha||T.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,ut[T.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,ut[T.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,ut[T.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,yt[T.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Mt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==Ha&&T.minFilter!==is||T.type===rr&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");a.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function _e(U,T){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",D));const dt=T.source;let pt=p.get(dt);pt===void 0&&(pt={},p.set(dt,pt));const ct=K(T);if(ct!==U.__cacheKey){pt[ct]===void 0&&(pt[ct]={texture:a.createTexture(),usedTimes:0},l.memory.textures++,J=!0),pt[ct].usedTimes++;const zt=pt[U.__cacheKey];zt!==void 0&&(pt[U.__cacheKey].usedTimes--,zt.usedTimes===0&&I(T)),U.__cacheKey=ct,U.__webglTexture=pt[ct].texture}return J}function at(U,T,J){let dt=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=a.TEXTURE_3D);const pt=_e(U,T),ct=T.source;e.bindTexture(dt,U.__webglTexture,a.TEXTURE0+J);const zt=n.get(ct);if(ct.version!==zt.__version||pt===!0){e.activeTexture(a.TEXTURE0+J);const Et=be.getPrimaries(be.workingColorSpace),Lt=T.colorSpace===Tr?null:be.getPrimaries(T.colorSpace),pe=T.colorSpace===Tr||Et===Lt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let vt=M(T.image,!1,r.maxTextureSize);vt=Fe(T,vt);const Dt=s.convert(T.format,T.colorSpace),qt=s.convert(T.type);let Zt=C(T.internalFormat,Dt,qt,T.colorSpace,T.isVideoTexture);xt(dt,T);let Ut;const ue=T.mipmaps,ee=T.isVideoTexture!==!0,De=zt.__version===void 0||pt===!0,W=ct.dataReady,At=F(T,vt);if(T.isDepthTexture)Zt=w(T.format===eo,T.type),De&&(ee?e.texStorage2D(a.TEXTURE_2D,1,Zt,vt.width,vt.height):e.texImage2D(a.TEXTURE_2D,0,Zt,vt.width,vt.height,0,Dt,qt,null));else if(T.isDataTexture)if(ue.length>0){ee&&De&&e.texStorage2D(a.TEXTURE_2D,At,Zt,ue[0].width,ue[0].height);for(let rt=0,ft=ue.length;rt<ft;rt++)Ut=ue[rt],ee?W&&e.texSubImage2D(a.TEXTURE_2D,rt,0,0,Ut.width,Ut.height,Dt,qt,Ut.data):e.texImage2D(a.TEXTURE_2D,rt,Zt,Ut.width,Ut.height,0,Dt,qt,Ut.data);T.generateMipmaps=!1}else ee?(De&&e.texStorage2D(a.TEXTURE_2D,At,Zt,vt.width,vt.height),W&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,vt.width,vt.height,Dt,qt,vt.data)):e.texImage2D(a.TEXTURE_2D,0,Zt,vt.width,vt.height,0,Dt,qt,vt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&De&&e.texStorage3D(a.TEXTURE_2D_ARRAY,At,Zt,ue[0].width,ue[0].height,vt.depth);for(let rt=0,ft=ue.length;rt<ft;rt++)if(Ut=ue[rt],T.format!==yi)if(Dt!==null)if(ee){if(W)if(T.layerUpdates.size>0){const Rt=Sp(Ut.width,Ut.height,T.format,T.type);for(const Ct of T.layerUpdates){const ie=Ut.data.subarray(Ct*Rt/Ut.data.BYTES_PER_ELEMENT,(Ct+1)*Rt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,rt,0,0,Ct,Ut.width,Ut.height,1,Dt,ie)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,rt,0,0,0,Ut.width,Ut.height,vt.depth,Dt,Ut.data)}else e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,rt,Zt,Ut.width,Ut.height,vt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?W&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,rt,0,0,0,Ut.width,Ut.height,vt.depth,Dt,qt,Ut.data):e.texImage3D(a.TEXTURE_2D_ARRAY,rt,Zt,Ut.width,Ut.height,vt.depth,0,Dt,qt,Ut.data)}else{ee&&De&&e.texStorage2D(a.TEXTURE_2D,At,Zt,ue[0].width,ue[0].height);for(let rt=0,ft=ue.length;rt<ft;rt++)Ut=ue[rt],T.format!==yi?Dt!==null?ee?W&&e.compressedTexSubImage2D(a.TEXTURE_2D,rt,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(a.TEXTURE_2D,rt,Zt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?W&&e.texSubImage2D(a.TEXTURE_2D,rt,0,0,Ut.width,Ut.height,Dt,qt,Ut.data):e.texImage2D(a.TEXTURE_2D,rt,Zt,Ut.width,Ut.height,0,Dt,qt,Ut.data)}else if(T.isDataArrayTexture)if(ee){if(De&&e.texStorage3D(a.TEXTURE_2D_ARRAY,At,Zt,vt.width,vt.height,vt.depth),W)if(T.layerUpdates.size>0){const rt=Sp(vt.width,vt.height,T.format,T.type);for(const ft of T.layerUpdates){const Rt=vt.data.subarray(ft*rt/vt.data.BYTES_PER_ELEMENT,(ft+1)*rt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ft,vt.width,vt.height,1,Dt,qt,Rt)}T.clearLayerUpdates()}else e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Dt,qt,vt.data)}else e.texImage3D(a.TEXTURE_2D_ARRAY,0,Zt,vt.width,vt.height,vt.depth,0,Dt,qt,vt.data);else if(T.isData3DTexture)ee?(De&&e.texStorage3D(a.TEXTURE_3D,At,Zt,vt.width,vt.height,vt.depth),W&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Dt,qt,vt.data)):e.texImage3D(a.TEXTURE_3D,0,Zt,vt.width,vt.height,vt.depth,0,Dt,qt,vt.data);else if(T.isFramebufferTexture){if(De)if(ee)e.texStorage2D(a.TEXTURE_2D,At,Zt,vt.width,vt.height);else{let rt=vt.width,ft=vt.height;for(let Rt=0;Rt<At;Rt++)e.texImage2D(a.TEXTURE_2D,Rt,Zt,rt,ft,0,Dt,qt,null),rt>>=1,ft>>=1}}else if(ue.length>0){if(ee&&De){const rt=Ht(ue[0]);e.texStorage2D(a.TEXTURE_2D,At,Zt,rt.width,rt.height)}for(let rt=0,ft=ue.length;rt<ft;rt++)Ut=ue[rt],ee?W&&e.texSubImage2D(a.TEXTURE_2D,rt,0,0,Dt,qt,Ut):e.texImage2D(a.TEXTURE_2D,rt,Zt,Dt,qt,Ut);T.generateMipmaps=!1}else if(ee){if(De){const rt=Ht(vt);e.texStorage2D(a.TEXTURE_2D,At,Zt,rt.width,rt.height)}W&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,Dt,qt,vt)}else e.texImage2D(a.TEXTURE_2D,0,Zt,Dt,qt,vt);v(T)&&g(dt),zt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function _t(U,T,J){if(T.image.length!==6)return;const dt=_e(U,T),pt=T.source;e.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+J);const ct=n.get(pt);if(pt.version!==ct.__version||dt===!0){e.activeTexture(a.TEXTURE0+J);const zt=be.getPrimaries(be.workingColorSpace),Et=T.colorSpace===Tr?null:be.getPrimaries(T.colorSpace),Lt=T.colorSpace===Tr||zt===Et?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const pe=T.isCompressedTexture||T.image[0].isCompressedTexture,vt=T.image[0]&&T.image[0].isDataTexture,Dt=[];for(let ft=0;ft<6;ft++)!pe&&!vt?Dt[ft]=M(T.image[ft],!0,r.maxCubemapSize):Dt[ft]=vt?T.image[ft].image:T.image[ft],Dt[ft]=Fe(T,Dt[ft]);const qt=Dt[0],Zt=s.convert(T.format,T.colorSpace),Ut=s.convert(T.type),ue=C(T.internalFormat,Zt,Ut,T.colorSpace),ee=T.isVideoTexture!==!0,De=ct.__version===void 0||dt===!0,W=pt.dataReady;let At=F(T,qt);xt(a.TEXTURE_CUBE_MAP,T);let rt;if(pe){ee&&De&&e.texStorage2D(a.TEXTURE_CUBE_MAP,At,ue,qt.width,qt.height);for(let ft=0;ft<6;ft++){rt=Dt[ft].mipmaps;for(let Rt=0;Rt<rt.length;Rt++){const Ct=rt[Rt];T.format!==yi?Zt!==null?ee?W&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt,0,0,Ct.width,Ct.height,Zt,Ct.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt,ue,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?W&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt,0,0,Ct.width,Ct.height,Zt,Ut,Ct.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt,ue,Ct.width,Ct.height,0,Zt,Ut,Ct.data)}}}else{if(rt=T.mipmaps,ee&&De){rt.length>0&&At++;const ft=Ht(Dt[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,At,ue,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(vt){ee?W&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Dt[ft].width,Dt[ft].height,Zt,Ut,Dt[ft].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ue,Dt[ft].width,Dt[ft].height,0,Zt,Ut,Dt[ft].data);for(let Rt=0;Rt<rt.length;Rt++){const ie=rt[Rt].image[ft].image;ee?W&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt+1,0,0,ie.width,ie.height,Zt,Ut,ie.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt+1,ue,ie.width,ie.height,0,Zt,Ut,ie.data)}}else{ee?W&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Zt,Ut,Dt[ft]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ue,Zt,Ut,Dt[ft]);for(let Rt=0;Rt<rt.length;Rt++){const Ct=rt[Rt];ee?W&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt+1,0,0,Zt,Ut,Ct.image[ft]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt+1,ue,Zt,Ut,Ct.image[ft])}}}v(T)&&g(a.TEXTURE_CUBE_MAP),ct.__version=pt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Pt(U,T,J,dt,pt,ct){const zt=s.convert(J.format,J.colorSpace),Et=s.convert(J.type),Lt=C(J.internalFormat,zt,Et,J.colorSpace),pe=n.get(T),vt=n.get(J);if(vt.__renderTarget=T,!pe.__hasExternalTextures){const Dt=Math.max(1,T.width>>ct),qt=Math.max(1,T.height>>ct);pt===a.TEXTURE_3D||pt===a.TEXTURE_2D_ARRAY?e.texImage3D(pt,ct,Lt,Dt,qt,T.depth,0,zt,Et,null):e.texImage2D(pt,ct,Lt,Dt,qt,0,zt,Et,null)}e.bindFramebuffer(a.FRAMEBUFFER,U),te(T)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,dt,pt,vt.__webglTexture,0,ve(T)):(pt===a.TEXTURE_2D||pt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,dt,pt,vt.__webglTexture,ct),e.bindFramebuffer(a.FRAMEBUFFER,null)}function St(U,T,J){if(a.bindRenderbuffer(a.RENDERBUFFER,U),T.depthBuffer){const dt=T.depthTexture,pt=dt&&dt.isDepthTexture?dt.type:null,ct=w(T.stencilBuffer,pt),zt=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Et=ve(T);te(T)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Et,ct,T.width,T.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Et,ct,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,ct,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,zt,a.RENDERBUFFER,U)}else{const dt=T.textures;for(let pt=0;pt<dt.length;pt++){const ct=dt[pt],zt=s.convert(ct.format,ct.colorSpace),Et=s.convert(ct.type),Lt=C(ct.internalFormat,zt,Et,ct.colorSpace),pe=ve(T);J&&te(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,pe,Lt,T.width,T.height):te(T)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,pe,Lt,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Lt,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Wt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const pt=dt.__webglTexture,ct=ve(T);if(T.depthTexture.format===$s)te(T)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,pt,0,ct):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,pt,0);else if(T.depthTexture.format===eo)te(T)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,pt,0,ct):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function fe(U){const T=n.get(U),J=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",pt)};dt.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=dt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Wt(T.__webglFramebuffer,U)}else if(J){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=a.createRenderbuffer(),St(T.__webglDepthbuffer[dt],U,!1);else{const pt=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[dt];a.bindRenderbuffer(a.RENDERBUFFER,ct),a.framebufferRenderbuffer(a.FRAMEBUFFER,pt,a.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),St(T.__webglDepthbuffer,U,!1);else{const dt=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,pt),a.framebufferRenderbuffer(a.FRAMEBUFFER,dt,a.RENDERBUFFER,pt)}e.bindFramebuffer(a.FRAMEBUFFER,null)}function jt(U,T,J){const dt=n.get(U);T!==void 0&&Pt(dt.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&fe(U)}function ze(U){const T=U.texture,J=n.get(U),dt=n.get(T);U.addEventListener("dispose",N);const pt=U.textures,ct=U.isWebGLCubeRenderTarget===!0,zt=pt.length>1;if(zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=a.createTexture()),dt.__version=T.version,l.memory.textures++),ct){J.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Et]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)J.__webglFramebuffer[Et][Lt]=a.createFramebuffer()}else J.__webglFramebuffer[Et]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Et=0;Et<T.mipmaps.length;Et++)J.__webglFramebuffer[Et]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(zt)for(let Et=0,Lt=pt.length;Et<Lt;Et++){const pe=n.get(pt[Et]);pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture(),l.memory.textures++)}if(U.samples>0&&te(U)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Et=0;Et<pt.length;Et++){const Lt=pt[Et];J.__webglColorRenderbuffer[Et]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[Et]);const pe=s.convert(Lt.format,Lt.colorSpace),vt=s.convert(Lt.type),Dt=C(Lt.internalFormat,pe,vt,Lt.colorSpace,U.isXRRenderTarget===!0),qt=ve(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,qt,Dt,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Et,a.RENDERBUFFER,J.__webglColorRenderbuffer[Et])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),St(J.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ct){e.bindTexture(a.TEXTURE_CUBE_MAP,dt.__webglTexture),xt(a.TEXTURE_CUBE_MAP,T);for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)Pt(J.__webglFramebuffer[Et][Lt],U,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt);else Pt(J.__webglFramebuffer[Et],U,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);v(T)&&g(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Et=0,Lt=pt.length;Et<Lt;Et++){const pe=pt[Et],vt=n.get(pe);e.bindTexture(a.TEXTURE_2D,vt.__webglTexture),xt(a.TEXTURE_2D,pe),Pt(J.__webglFramebuffer,U,pe,a.COLOR_ATTACHMENT0+Et,a.TEXTURE_2D,0),v(pe)&&g(a.TEXTURE_2D)}e.unbindTexture()}else{let Et=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(Et,dt.__webglTexture),xt(Et,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)Pt(J.__webglFramebuffer[Lt],U,T,a.COLOR_ATTACHMENT0,Et,Lt);else Pt(J.__webglFramebuffer,U,T,a.COLOR_ATTACHMENT0,Et,0);v(T)&&g(Et),e.unbindTexture()}U.depthBuffer&&fe(U)}function Ie(U){const T=U.textures;for(let J=0,dt=T.length;J<dt;J++){const pt=T[J];if(v(pt)){const ct=E(U),zt=n.get(pt).__webglTexture;e.bindTexture(ct,zt),g(ct),e.unbindTexture()}}}const de=[],H=[];function un(U){if(U.samples>0){if(te(U)===!1){const T=U.textures,J=U.width,dt=U.height;let pt=a.COLOR_BUFFER_BIT;const ct=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,zt=n.get(U),Et=T.length>1;if(Et)for(let Lt=0;Lt<T.length;Lt++)e.bindFramebuffer(a.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Lt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,zt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Lt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pt|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pt|=a.STENCIL_BUFFER_BIT)),Et){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,zt.__webglColorRenderbuffer[Lt]);const pe=n.get(T[Lt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,pe,0)}a.blitFramebuffer(0,0,J,dt,0,0,J,dt,pt,a.NEAREST),u===!0&&(de.length=0,H.length=0,de.push(a.COLOR_ATTACHMENT0+Lt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(de.push(ct),H.push(ct),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,H)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Et)for(let Lt=0;Lt<T.length;Lt++){e.bindFramebuffer(a.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Lt,a.RENDERBUFFER,zt.__webglColorRenderbuffer[Lt]);const pe=n.get(T[Lt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,zt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Lt,a.TEXTURE_2D,pe,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){const T=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function ve(U){return Math.min(r.maxSamples,U.samples)}function te(U){const T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Gt(U){const T=l.render.frame;d.get(U)!==T&&(d.set(U,T),U.update())}function Fe(U,T){const J=U.colorSpace,dt=U.format,pt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==no&&J!==Tr&&(be.getTransfer(J)===Ue?(dt!==yi||pt!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Ht(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=z,this.resetTextureUnits=tt,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=st,this.setTextureCube=j,this.rebindTextures=jt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=te}function _1(a,t){function e(n,r=Tr){let s;const l=be.getTransfer(r);if(n===ar)return a.UNSIGNED_BYTE;if(n===mu)return a.UNSIGNED_SHORT_4_4_4_4;if(n===gu)return a.UNSIGNED_SHORT_5_5_5_1;if(n===wm)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Em)return a.BYTE;if(n===Sm)return a.SHORT;if(n===Fo)return a.UNSIGNED_SHORT;if(n===pu)return a.INT;if(n===rs)return a.UNSIGNED_INT;if(n===rr)return a.FLOAT;if(n===Ho)return a.HALF_FLOAT;if(n===bm)return a.ALPHA;if(n===Am)return a.RGB;if(n===yi)return a.RGBA;if(n===Tm)return a.LUMINANCE;if(n===Cm)return a.LUMINANCE_ALPHA;if(n===$s)return a.DEPTH_COMPONENT;if(n===eo)return a.DEPTH_STENCIL;if(n===Rm)return a.RED;if(n===_u)return a.RED_INTEGER;if(n===Pm)return a.RG;if(n===vu)return a.RG_INTEGER;if(n===xu)return a.RGBA_INTEGER;if(n===ml||n===gl||n===_l||n===vl)if(l===Ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bh||n===zh||n===Hh||n===Vh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gh||n===kh||n===Wh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Gh||n===kh)return l===Ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xh||n===qh||n===Yh||n===$h||n===Kh||n===Zh||n===jh||n===Jh||n===Qh||n===tu||n===eu||n===nu||n===iu||n===ru)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qh)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tu)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eu)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nu)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ru)return l===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xl||n===su||n===ou)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===xl)return l===Ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ou)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lm||n===au||n===lu||n===cu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:e}}const v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Hn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Lr({vertexShader:v1,fragmentShader:x1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new li(new Wo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M1 extends cs{constructor(t,e){super();const n=this;let r=null,s=1,l=null,c="local-floor",u=1,f=null,d=null,m=null,p=null,x=null,y=null;const M=new y1,v=e.getContextAttributes();let g=null,E=null;const C=[],w=[],F=new ae;let D=null;const N=new ai;N.viewport=new Ke;const V=new ai;V.viewport=new Ke;const I=[N,V],A=new GS;let B=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let _t=C[at];return _t===void 0&&(_t=new oh,C[at]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(at){let _t=C[at];return _t===void 0&&(_t=new oh,C[at]=_t),_t.getGripSpace()},this.getHand=function(at){let _t=C[at];return _t===void 0&&(_t=new oh,C[at]=_t),_t.getHandSpace()};function z(at){const _t=w.indexOf(at.inputSource);if(_t===-1)return;const Pt=C[_t];Pt!==void 0&&(Pt.update(at.inputSource,at.frame,f||l),Pt.dispatchEvent({type:at.type,data:at.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",$);for(let at=0;at<C.length;at++){const _t=w[at];_t!==null&&(w[at]=null,C[at].disconnect(_t))}B=null,tt=null,M.reset(),t.setRenderTarget(g),x=null,p=null,m=null,r=null,E=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){s=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){c=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(at){f=at},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(at){if(r=at,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,St=null,Wt=null;v.depth&&(Wt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=v.stencil?eo:$s,St=v.stencil?to:rs);const fe={colorFormat:e.RGBA8,depthFormat:Wt,scaleFactor:s};m=new XRWebGLBinding(r,e),p=m.createProjectionLayer(fe),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new ss(p.textureWidth,p.textureHeight,{format:yi,type:ar,depthTexture:new Xm(p.textureWidth,p.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}else{const Pt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,e,Pt),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),E=new ss(x.framebufferWidth,x.framebufferHeight,{format:yi,type:ar,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}E.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(c),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(at){for(let _t=0;_t<at.removed.length;_t++){const Pt=at.removed[_t],St=w.indexOf(Pt);St>=0&&(w[St]=null,C[St].disconnect(Pt))}for(let _t=0;_t<at.added.length;_t++){const Pt=at.added[_t];let St=w.indexOf(Pt);if(St===-1){for(let fe=0;fe<C.length;fe++)if(fe>=w.length){w.push(Pt),St=fe;break}else if(w[fe]===null){w[fe]=Pt,St=fe;break}if(St===-1)break}const Wt=C[St];Wt&&Wt.connect(Pt)}}const k=new Q,st=new Q;function j(at,_t,Pt){k.setFromMatrixPosition(_t.matrixWorld),st.setFromMatrixPosition(Pt.matrixWorld);const St=k.distanceTo(st),Wt=_t.projectionMatrix.elements,fe=Pt.projectionMatrix.elements,jt=Wt[14]/(Wt[10]-1),ze=Wt[14]/(Wt[10]+1),Ie=(Wt[9]+1)/Wt[5],de=(Wt[9]-1)/Wt[5],H=(Wt[8]-1)/Wt[0],un=(fe[8]+1)/fe[0],ve=jt*H,te=jt*un,Gt=St/(-H+un),Fe=Gt*-H;if(_t.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Fe),at.translateZ(Gt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Wt[10]===-1)at.projectionMatrix.copy(_t.projectionMatrix),at.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Ht=jt+Gt,U=ze+Gt,T=ve-Fe,J=te+(St-Fe),dt=Ie*ze/U*Ht,pt=de*ze/U*Ht;at.projectionMatrix.makePerspective(T,J,dt,pt,Ht,U),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function ut(at,_t){_t===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(_t.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(r===null)return;let _t=at.near,Pt=at.far;M.texture!==null&&(M.depthNear>0&&(_t=M.depthNear),M.depthFar>0&&(Pt=M.depthFar)),A.near=V.near=N.near=_t,A.far=V.far=N.far=Pt,(B!==A.near||tt!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,tt=A.far),N.layers.mask=at.layers.mask|2,V.layers.mask=at.layers.mask|4,A.layers.mask=N.layers.mask|V.layers.mask;const St=at.parent,Wt=A.cameras;ut(A,St);for(let fe=0;fe<Wt.length;fe++)ut(Wt[fe],St);Wt.length===2?j(A,N,V):A.projectionMatrix.copy(N.projectionMatrix),yt(at,A,St)};function yt(at,_t,Pt){Pt===null?at.matrix.copy(_t.matrixWorld):(at.matrix.copy(Pt.matrixWorld),at.matrix.invert(),at.matrix.multiply(_t.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(_t.projectionMatrix),at.projectionMatrixInverse.copy(_t.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=hu*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(p===null&&x===null))return u},this.setFoveation=function(at){u=at,p!==null&&(p.fixedFoveation=at),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let Mt=null;function xt(at,_t){if(d=_t.getViewerPose(f||l),y=_t,d!==null){const Pt=d.views;x!==null&&(t.setRenderTargetFramebuffer(E,x.framebuffer),t.setRenderTarget(E));let St=!1;Pt.length!==A.cameras.length&&(A.cameras.length=0,St=!0);for(let jt=0;jt<Pt.length;jt++){const ze=Pt[jt];let Ie=null;if(x!==null)Ie=x.getViewport(ze);else{const H=m.getViewSubImage(p,ze);Ie=H.viewport,jt===0&&(t.setRenderTargetTextures(E,H.colorTexture,p.ignoreDepthValues?void 0:H.depthStencilTexture),t.setRenderTarget(E))}let de=I[jt];de===void 0&&(de=new ai,de.layers.enable(jt),de.viewport=new Ke,I[jt]=de),de.matrix.fromArray(ze.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ze.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),jt===0&&(A.matrix.copy(de.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),St===!0&&A.cameras.push(de)}const Wt=r.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){const jt=m.getDepthInformation(Pt[0]);jt&&jt.isValid&&jt.texture&&M.init(t,jt,r.renderState)}}for(let Pt=0;Pt<C.length;Pt++){const St=w[Pt],Wt=C[Pt];St!==null&&Wt!==void 0&&Wt.update(St,_t,f||l)}Mt&&Mt(at,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),y=null}const _e=new Km;_e.setAnimationLoop(xt),this.setAnimationLoop=function(at){Mt=at},this.dispose=function(){}}}const Zr=new Ni,E1=new Ze;function S1(a,t){function e(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function n(v,g){g.color.getRGB(v.fogColor.value,km(a)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function r(v,g,E,C,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(v,g):g.isMeshToonMaterial?(s(v,g),m(v,g)):g.isMeshPhongMaterial?(s(v,g),d(v,g)):g.isMeshStandardMaterial?(s(v,g),p(v,g),g.isMeshPhysicalMaterial&&x(v,g,w)):g.isMeshMatcapMaterial?(s(v,g),y(v,g)):g.isMeshDepthMaterial?s(v,g):g.isMeshDistanceMaterial?(s(v,g),M(v,g)):g.isMeshNormalMaterial?s(v,g):g.isLineBasicMaterial?(l(v,g),g.isLineDashedMaterial&&c(v,g)):g.isPointsMaterial?u(v,g,E,C):g.isSpriteMaterial?f(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,e(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,e(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===zn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,e(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===zn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,e(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,e(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const E=t.get(g),C=E.envMap,w=E.envMapRotation;C&&(v.envMap.value=C,Zr.copy(w),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),v.envMapRotation.value.setFromMatrix4(E1.makeRotationFromEuler(Zr)),v.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,v.aoMapTransform))}function l(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,e(g.map,v.mapTransform))}function c(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function u(v,g,E,C){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*E,v.scale.value=C*.5,g.map&&(v.map.value=g.map,e(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,e(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function d(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function m(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function p(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function x(v,g,E){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,g){g.matcap&&(v.matcap.value=g.matcap)}function M(v,g){const E=t.get(g).light;v.referencePosition.value.setFromMatrixPosition(E.matrixWorld),v.nearDistance.value=E.shadow.camera.near,v.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function w1(a,t,e,n){let r={},s={},l=[];const c=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,C){const w=C.program;n.uniformBlockBinding(E,w)}function f(E,C){let w=r[E.id];w===void 0&&(y(E),w=d(E),r[E.id]=w,E.addEventListener("dispose",v));const F=C.program;n.updateUBOMapping(E,F);const D=t.render.frame;s[E.id]!==D&&(p(E),s[E.id]=D)}function d(E){const C=m();E.__bindingPointIndex=C;const w=a.createBuffer(),F=E.__size,D=E.usage;return a.bindBuffer(a.UNIFORM_BUFFER,w),a.bufferData(a.UNIFORM_BUFFER,F,D),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,w),w}function m(){for(let E=0;E<c;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const C=r[E.id],w=E.uniforms,F=E.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let D=0,N=w.length;D<N;D++){const V=Array.isArray(w[D])?w[D]:[w[D]];for(let I=0,A=V.length;I<A;I++){const B=V[I];if(x(B,D,I,F)===!0){const tt=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let K=0;for(let $=0;$<z.length;$++){const k=z[$],st=M(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,a.bufferSubData(a.UNIFORM_BUFFER,tt+K,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,K),K+=st.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,tt,B.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(E,C,w,F){const D=E.value,N=C+"_"+w;if(F[N]===void 0)return typeof D=="number"||typeof D=="boolean"?F[N]=D:F[N]=D.clone(),!0;{const V=F[N];if(typeof D=="number"||typeof D=="boolean"){if(V!==D)return F[N]=D,!0}else if(V.equals(D)===!1)return V.copy(D),!0}return!1}function y(E){const C=E.uniforms;let w=0;const F=16;for(let N=0,V=C.length;N<V;N++){const I=Array.isArray(C[N])?C[N]:[C[N]];for(let A=0,B=I.length;A<B;A++){const tt=I[A],z=Array.isArray(tt.value)?tt.value:[tt.value];for(let K=0,$=z.length;K<$;K++){const k=z[K],st=M(k),j=w%F,ut=j%st.boundary,yt=j+ut;w+=ut,yt!==0&&F-yt<st.storage&&(w+=F-yt),tt.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=w,w+=st.storage}}}const D=w%F;return D>0&&(w+=F-D),E.__size=w,E.__cache={},this}function M(E){const C={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(C.boundary=4,C.storage=4):E.isVector2?(C.boundary=8,C.storage=8):E.isVector3||E.isColor?(C.boundary=16,C.storage=12):E.isVector4?(C.boundary=16,C.storage=16):E.isMatrix3?(C.boundary=48,C.storage=48):E.isMatrix4?(C.boundary=64,C.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),C}function v(E){const C=E.target;C.removeEventListener("dispose",v);const w=l.indexOf(C.__bindingPointIndex);l.splice(w,1),a.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function g(){for(const E in r)a.deleteBuffer(r[E]);l=[],r={},s={}}return{bind:u,update:f,dispose:g}}class b1{constructor(t={}){const{canvas:e=eS(),context:n=null,depth:r=!0,stencil:s=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=l;const y=new Uint32Array(4),M=new Int32Array(4);let v=null,g=null;const E=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Rr,this.toneMappingExposure=1;const w=this;let F=!1,D=0,N=0,V=null,I=-1,A=null;const B=new Ke,tt=new Ke;let z=null;const K=new Re(0);let $=0,k=e.width,st=e.height,j=1,ut=null,yt=null;const Mt=new Ke(0,0,k,st),xt=new Ke(0,0,k,st);let _e=!1;const at=new Eu;let _t=!1,Pt=!1;this.transmissionResolutionScale=1;const St=new Ze,Wt=new Ze,fe=new Q,jt=new Ke,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function de(){return V===null?j:1}let H=n;function un(P,q){return e.getContext(P,q)}try{const P={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${du}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),H===null){const q="webgl2";if(H=un(q,P),H===null)throw un(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ve,te,Gt,Fe,Ht,U,T,J,dt,pt,ct,zt,Et,Lt,pe,vt,Dt,qt,Zt,Ut,ue,ee,De,W;function At(){ve=new NA(H),ve.init(),ee=new _1(H,ve),te=new RA(H,ve,t,ee),Gt=new m1(H,ve),te.reverseDepthBuffer&&p&&Gt.buffers.depth.setReversed(!0),Fe=new BA(H),Ht=new n1,U=new g1(H,ve,Gt,Ht,te,ee,Fe),T=new LA(w),J=new UA(w),dt=new XS(H),De=new TA(H,dt),pt=new FA(H,dt,Fe,De),ct=new HA(H,pt,dt,Fe),Zt=new zA(H,te,U),vt=new PA(Ht),zt=new e1(w,T,J,ve,te,De,vt),Et=new S1(w,Ht),Lt=new r1,pe=new h1(ve),qt=new AA(w,T,J,Gt,ct,x,u),Dt=new d1(w,ct,te),W=new w1(H,Fe,te,Gt),Ut=new CA(H,ve,Fe),ue=new OA(H,ve,Fe),Fe.programs=zt.programs,w.capabilities=te,w.extensions=ve,w.properties=Ht,w.renderLists=Lt,w.shadowMap=Dt,w.state=Gt,w.info=Fe}At();const rt=new M1(w,H);this.xr=rt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=ve.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ve.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(k,st,!1))},this.getSize=function(P){return P.set(k,st)},this.setSize=function(P,q,et=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,st=q,e.width=Math.floor(P*j),e.height=Math.floor(q*j),et===!0&&(e.style.width=P+"px",e.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(k*j,st*j).floor()},this.setDrawingBufferSize=function(P,q,et){k=P,st=q,j=et,e.width=Math.floor(P*et),e.height=Math.floor(q*et),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(Mt)},this.setViewport=function(P,q,et,nt){P.isVector4?Mt.set(P.x,P.y,P.z,P.w):Mt.set(P,q,et,nt),Gt.viewport(B.copy(Mt).multiplyScalar(j).round())},this.getScissor=function(P){return P.copy(xt)},this.setScissor=function(P,q,et,nt){P.isVector4?xt.set(P.x,P.y,P.z,P.w):xt.set(P,q,et,nt),Gt.scissor(tt.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(P){Gt.setScissorTest(_e=P)},this.setOpaqueSort=function(P){ut=P},this.setTransparentSort=function(P){yt=P},this.getClearColor=function(P){return P.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(P=!0,q=!0,et=!0){let nt=0;if(P){let Z=!1;if(V!==null){const gt=V.texture.format;Z=gt===xu||gt===vu||gt===_u}if(Z){const gt=V.texture.type,Tt=gt===ar||gt===rs||gt===Fo||gt===to||gt===mu||gt===gu,It=qt.getClearColor(),Ft=qt.getClearAlpha(),Jt=It.r,Qt=It.g,Xt=It.b;Tt?(y[0]=Jt,y[1]=Qt,y[2]=Xt,y[3]=Ft,H.clearBufferuiv(H.COLOR,0,y)):(M[0]=Jt,M[1]=Qt,M[2]=Xt,M[3]=Ft,H.clearBufferiv(H.COLOR,0,M))}else nt|=H.COLOR_BUFFER_BIT}q&&(nt|=H.DEPTH_BUFFER_BIT),et&&(nt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),qt.dispose(),Lt.dispose(),pe.dispose(),Ht.dispose(),T.dispose(),J.dispose(),ct.dispose(),De.dispose(),W.dispose(),zt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",hs),rt.removeEventListener("sessionend",$o),hi.stop()};function ft(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const P=Fe.autoReset,q=Dt.enabled,et=Dt.autoUpdate,nt=Dt.needsUpdate,Z=Dt.type;At(),Fe.autoReset=P,Dt.enabled=q,Dt.autoUpdate=et,Dt.needsUpdate=nt,Dt.type=Z}function Ct(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ie(P){const q=P.target;q.removeEventListener("dispose",ie),We(q)}function We(P){nn(P),Ht.remove(P)}function nn(P){const q=Ht.get(P).programs;q!==void 0&&(q.forEach(function(et){zt.releaseProgram(et)}),P.isShaderMaterial&&zt.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,et,nt,Z,gt){q===null&&(q=ze);const Tt=Z.isMesh&&Z.matrixWorld.determinant()<0,It=ta(P,q,et,nt,Z);Gt.setMaterial(nt,Tt);let Ft=et.index,Jt=1;if(nt.wireframe===!0){if(Ft=pt.getWireframeAttribute(et),Ft===void 0)return;Jt=2}const Qt=et.drawRange,Xt=et.attributes.position;let ye=Qt.start*Jt,we=(Qt.start+Qt.count)*Jt;gt!==null&&(ye=Math.max(ye,gt.start*Jt),we=Math.min(we,(gt.start+gt.count)*Jt)),Ft!==null?(ye=Math.max(ye,0),we=Math.min(we,Ft.count)):Xt!=null&&(ye=Math.max(ye,0),we=Math.min(we,Xt.count));const qe=we-ye;if(qe<0||qe===1/0)return;De.setup(Z,nt,It,et,Ft);let Ve,Me=Ut;if(Ft!==null&&(Ve=dt.get(Ft),Me=ue,Me.setIndex(Ve)),Z.isMesh)nt.wireframe===!0?(Gt.setLineWidth(nt.wireframeLinewidth*de()),Me.setMode(H.LINES)):Me.setMode(H.TRIANGLES);else if(Z.isLine){let kt=nt.linewidth;kt===void 0&&(kt=1),Gt.setLineWidth(kt*de()),Z.isLineSegments?Me.setMode(H.LINES):Z.isLineLoop?Me.setMode(H.LINE_LOOP):Me.setMode(H.LINE_STRIP)}else Z.isPoints?Me.setMode(H.POINTS):Z.isSprite&&Me.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Me.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))Me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const kt=Z._multiDrawStarts,rn=Z._multiDrawCounts,Se=Z._multiDrawCount,vn=Ft?dt.get(Ft).bytesPerElement:1,Fi=Ht.get(nt).currentProgram.getUniforms();for(let bn=0;bn<Se;bn++)Fi.setValue(H,"_gl_DrawID",bn),Me.render(kt[bn]/vn,rn[bn])}else if(Z.isInstancedMesh)Me.renderInstances(ye,qe,Z.count);else if(et.isInstancedBufferGeometry){const kt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,rn=Math.min(et.instanceCount,kt);Me.renderInstances(ye,qe,rn)}else Me.render(ye,qe)};function Ae(P,q,et){P.transparent===!0&&P.side===ir&&P.forceSinglePass===!1?(P.side=zn,P.needsUpdate=!0,fs(P,q,et),P.side=Pr,P.needsUpdate=!0,fs(P,q,et),P.side=ir):fs(P,q,et)}this.compile=function(P,q,et=null){et===null&&(et=P),g=pe.get(et),g.init(q),C.push(g),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),P!==et&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const nt=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const gt=Z.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){const It=gt[Tt];Ae(It,et,Z),nt.add(It)}else Ae(gt,et,Z),nt.add(gt)}),C.pop(),g=null,nt},this.compileAsync=function(P,q,et=null){const nt=this.compile(P,q,et);return new Promise(Z=>{function gt(){if(nt.forEach(function(Tt){Ht.get(Tt).currentProgram.isReady()&&nt.delete(Tt)}),nt.size===0){Z(P);return}setTimeout(gt,10)}ve.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Vn=null;function ci(P){Vn&&Vn(P)}function hs(){hi.stop()}function $o(){hi.start()}const hi=new Km;hi.setAnimationLoop(ci),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(P){Vn=P,rt.setAnimationLoop(P),P===null?hi.stop():hi.start()},rt.addEventListener("sessionstart",hs),rt.addEventListener("sessionend",$o),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(q),q=rt.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,q,V),g=pe.get(P,C.length),g.init(q),C.push(g),Wt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),at.setFromProjectionMatrix(Wt),Pt=this.localClippingEnabled,_t=vt.init(this.clippingPlanes,Pt),v=Lt.get(P,E.length),v.init(),E.push(v),rt.enabled===!0&&rt.isPresenting===!0){const gt=w.xr.getDepthSensingMesh();gt!==null&&ao(gt,q,-1/0,w.sortObjects)}ao(P,q,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(ut,yt),Ie=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ie&&qt.addToRenderList(v,P),this.info.render.frame++,_t===!0&&vt.beginShadows();const et=g.state.shadowsArray;Dt.render(et,P,q),_t===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=v.opaque,Z=v.transmissive;if(g.setupLights(),q.isArrayCamera){const gt=q.cameras;if(Z.length>0)for(let Tt=0,It=gt.length;Tt<It;Tt++){const Ft=gt[Tt];Zo(nt,Z,P,Ft)}Ie&&qt.render(P);for(let Tt=0,It=gt.length;Tt<It;Tt++){const Ft=gt[Tt];Ko(v,P,Ft,Ft.viewport)}}else Z.length>0&&Zo(nt,Z,P,q),Ie&&qt.render(P),Ko(v,P,q);V!==null&&N===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),P.isScene===!0&&P.onAfterRender(w,P,q),De.resetDefaultState(),I=-1,A=null,C.pop(),C.length>0?(g=C[C.length-1],_t===!0&&vt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function ao(P,q,et,nt){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)et=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||at.intersectsSprite(P)){nt&&jt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Wt);const Tt=ct.update(P),It=P.material;It.visible&&v.push(P,Tt,It,et,jt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||at.intersectsObject(P))){const Tt=ct.update(P),It=P.material;if(nt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),jt.copy(P.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),jt.copy(Tt.boundingSphere.center)),jt.applyMatrix4(P.matrixWorld).applyMatrix4(Wt)),Array.isArray(It)){const Ft=Tt.groups;for(let Jt=0,Qt=Ft.length;Jt<Qt;Jt++){const Xt=Ft[Jt],ye=It[Xt.materialIndex];ye&&ye.visible&&v.push(P,Tt,ye,et,jt.z,Xt)}}else It.visible&&v.push(P,Tt,It,et,jt.z,null)}}const gt=P.children;for(let Tt=0,It=gt.length;Tt<It;Tt++)ao(gt[Tt],q,et,nt)}function Ko(P,q,et,nt){const Z=P.opaque,gt=P.transmissive,Tt=P.transparent;g.setupLightsView(et),_t===!0&&vt.setGlobalState(w.clippingPlanes,et),nt&&Gt.viewport(B.copy(nt)),Z.length>0&&us(Z,q,et),gt.length>0&&us(gt,q,et),Tt.length>0&&us(Tt,q,et),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Zo(P,q,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[nt.id]===void 0&&(g.state.transmissionRenderTarget[nt.id]=new ss(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Ho:ar,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const gt=g.state.transmissionRenderTarget[nt.id],Tt=nt.viewport||B;gt.setSize(Tt.z*w.transmissionResolutionScale,Tt.w*w.transmissionResolutionScale);const It=w.getRenderTarget();w.setRenderTarget(gt),w.getClearColor(K),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),w.clear(),Ie&&qt.render(et);const Ft=w.toneMapping;w.toneMapping=Rr;const Jt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),g.setupLightsView(nt),_t===!0&&vt.setGlobalState(w.clippingPlanes,nt),us(P,et,nt),U.updateMultisampleRenderTarget(gt),U.updateRenderTargetMipmap(gt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Xt=0,ye=q.length;Xt<ye;Xt++){const we=q[Xt],qe=we.object,Ve=we.geometry,Me=we.material,kt=we.group;if(Me.side===ir&&qe.layers.test(nt.layers)){const rn=Me.side;Me.side=zn,Me.needsUpdate=!0,jo(qe,et,nt,Ve,Me,kt),Me.side=rn,Me.needsUpdate=!0,Qt=!0}}Qt===!0&&(U.updateMultisampleRenderTarget(gt),U.updateRenderTargetMipmap(gt))}w.setRenderTarget(It),w.setClearColor(K,$),Jt!==void 0&&(nt.viewport=Jt),w.toneMapping=Ft}function us(P,q,et){const nt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,gt=P.length;Z<gt;Z++){const Tt=P[Z],It=Tt.object,Ft=Tt.geometry,Jt=nt===null?Tt.material:nt,Qt=Tt.group;It.layers.test(et.layers)&&jo(It,q,et,Ft,Jt,Qt)}}function jo(P,q,et,nt,Z,gt){P.onBeforeRender(w,q,et,nt,Z,gt),P.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(w,q,et,nt,P,gt),Z.transparent===!0&&Z.side===ir&&Z.forceSinglePass===!1?(Z.side=zn,Z.needsUpdate=!0,w.renderBufferDirect(et,q,nt,Z,P,gt),Z.side=Pr,Z.needsUpdate=!0,w.renderBufferDirect(et,q,nt,Z,P,gt),Z.side=ir):w.renderBufferDirect(et,q,nt,Z,P,gt),P.onAfterRender(w,q,et,nt,Z,gt)}function fs(P,q,et){q.isScene!==!0&&(q=ze);const nt=Ht.get(P),Z=g.state.lights,gt=g.state.shadowsArray,Tt=Z.state.version,It=zt.getParameters(P,Z.state,gt,q,et),Ft=zt.getProgramCacheKey(It);let Jt=nt.programs;nt.environment=P.isMeshStandardMaterial?q.environment:null,nt.fog=q.fog,nt.envMap=(P.isMeshStandardMaterial?J:T).get(P.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Jt===void 0&&(P.addEventListener("dispose",ie),Jt=new Map,nt.programs=Jt);let Qt=Jt.get(Ft);if(Qt!==void 0){if(nt.currentProgram===Qt&&nt.lightsStateVersion===Tt)return Qo(P,It),Qt}else It.uniforms=zt.getUniforms(P),P.onBeforeCompile(It,w),Qt=zt.acquireProgram(It,Ft),Jt.set(Ft,Qt),nt.uniforms=It.uniforms;const Xt=nt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xt.clippingPlanes=vt.uniform),Qo(P,It),nt.needsLights=Rl(P),nt.lightsStateVersion=Tt,nt.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.directionalShadowMap.value=Z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotShadowMap.value=Z.state.spotShadowMap,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMap.value=Z.state.pointShadowMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=Qt,nt.uniformsList=null,Qt}function Jo(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=Ml.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Qo(P,q){const et=Ht.get(P);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.batchingColor=q.batchingColor,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.instancingMorph=q.instancingMorph,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function ta(P,q,et,nt,Z){q.isScene!==!0&&(q=ze),U.resetTextureUnits();const gt=q.fog,Tt=nt.isMeshStandardMaterial?q.environment:null,It=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:no,Ft=(nt.isMeshStandardMaterial?J:T).get(nt.envMap||Tt),Jt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Qt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Xt=!!et.morphAttributes.position,ye=!!et.morphAttributes.normal,we=!!et.morphAttributes.color;let qe=Rr;nt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(qe=w.toneMapping);const Ve=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Me=Ve!==void 0?Ve.length:0,kt=Ht.get(nt),rn=g.state.lights;if(_t===!0&&(Pt===!0||P!==A)){const fn=P===A&&nt.id===I;vt.setState(nt,P,fn)}let Se=!1;nt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==rn.state.version||kt.outputColorSpace!==It||Z.isBatchedMesh&&kt.batching===!1||!Z.isBatchedMesh&&kt.batching===!0||Z.isBatchedMesh&&kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&kt.instancing===!1||!Z.isInstancedMesh&&kt.instancing===!0||Z.isSkinnedMesh&&kt.skinning===!1||!Z.isSkinnedMesh&&kt.skinning===!0||Z.isInstancedMesh&&kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&kt.instancingMorph===!1&&Z.morphTexture!==null||kt.envMap!==Ft||nt.fog===!0&&kt.fog!==gt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==vt.numPlanes||kt.numIntersection!==vt.numIntersection)||kt.vertexAlphas!==Jt||kt.vertexTangents!==Qt||kt.morphTargets!==Xt||kt.morphNormals!==ye||kt.morphColors!==we||kt.toneMapping!==qe||kt.morphTargetsCount!==Me)&&(Se=!0):(Se=!0,kt.__version=nt.version);let vn=kt.currentProgram;Se===!0&&(vn=fs(nt,q,Z));let Fi=!1,bn=!1,cr=!1;const Oe=vn.getUniforms(),xn=kt.uniforms;if(Gt.useProgram(vn.program)&&(Fi=!0,bn=!0,cr=!0),nt.id!==I&&(I=nt.id,bn=!0),Fi||A!==P){Gt.buffers.depth.getReversed()?(St.copy(P.projectionMatrix),iS(St),rS(St),Oe.setValue(H,"projectionMatrix",St)):Oe.setValue(H,"projectionMatrix",P.projectionMatrix),Oe.setValue(H,"viewMatrix",P.matrixWorldInverse);const dn=Oe.map.cameraPosition;dn!==void 0&&dn.setValue(H,fe.setFromMatrixPosition(P.matrixWorld)),te.logarithmicDepthBuffer&&Oe.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Oe.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),A!==P&&(A=P,bn=!0,cr=!0)}if(Z.isSkinnedMesh){Oe.setOptional(H,Z,"bindMatrix"),Oe.setOptional(H,Z,"bindMatrixInverse");const fn=Z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Oe.setValue(H,"boneTexture",fn.boneTexture,U))}Z.isBatchedMesh&&(Oe.setOptional(H,Z,"batchingTexture"),Oe.setValue(H,"batchingTexture",Z._matricesTexture,U),Oe.setOptional(H,Z,"batchingIdTexture"),Oe.setValue(H,"batchingIdTexture",Z._indirectTexture,U),Oe.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Oe.setValue(H,"batchingColorTexture",Z._colorsTexture,U));const Pn=et.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Zt.update(Z,et,vn),(bn||kt.receiveShadow!==Z.receiveShadow)&&(kt.receiveShadow=Z.receiveShadow,Oe.setValue(H,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(xn.envMap.value=Ft,xn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&q.environment!==null&&(xn.envMapIntensity.value=q.environmentIntensity),bn&&(Oe.setValue(H,"toneMappingExposure",w.toneMappingExposure),kt.needsLights&&Cl(xn,cr),gt&&nt.fog===!0&&Et.refreshFogUniforms(xn,gt),Et.refreshMaterialUniforms(xn,nt,j,st,g.state.transmissionRenderTarget[P.id]),Ml.upload(H,Jo(kt),xn,U)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Ml.upload(H,Jo(kt),xn,U),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Oe.setValue(H,"center",Z.center),Oe.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Oe.setValue(H,"normalMatrix",Z.normalMatrix),Oe.setValue(H,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const fn=nt.uniformsGroups;for(let dn=0,Nr=fn.length;dn<Nr;dn++){const Ln=fn[dn];W.update(Ln,vn),W.bind(Ln,vn)}}return vn}function Cl(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Rl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,q,et){Ht.get(P.texture).__webglTexture=q,Ht.get(P.depthTexture).__webglTexture=et;const nt=Ht.get(P);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,q){const et=Ht.get(P);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0};const Pl=H.createFramebuffer();this.setRenderTarget=function(P,q=0,et=0){V=P,D=q,N=et;let nt=!0,Z=null,gt=!1,Tt=!1;if(P){const Ft=Ht.get(P);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(H.FRAMEBUFFER,null),nt=!1;else if(Ft.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Ft.__hasExternalTextures)U.rebindTextures(P,Ht.get(P.texture).__webglTexture,Ht.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xt=P.depthTexture;if(Ft.__boundDepthTexture!==Xt){if(Xt!==null&&Ht.has(Xt)&&(P.width!==Xt.image.width||P.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const Jt=P.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Tt=!0);const Qt=Ht.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qt[q])?Z=Qt[q][et]:Z=Qt[q],gt=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?Z=Ht.get(P).__webglMultisampledFramebuffer:Array.isArray(Qt)?Z=Qt[et]:Z=Qt,B.copy(P.viewport),tt.copy(P.scissor),z=P.scissorTest}else B.copy(Mt).multiplyScalar(j).floor(),tt.copy(xt).multiplyScalar(j).floor(),z=_e;if(et!==0&&(Z=Pl),Gt.bindFramebuffer(H.FRAMEBUFFER,Z)&&nt&&Gt.drawBuffers(P,Z),Gt.viewport(B),Gt.scissor(tt),Gt.setScissorTest(z),gt){const Ft=Ht.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,et)}else if(Tt){const Ft=Ht.get(P.texture),Jt=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.__webglTexture,et,Jt)}else if(P!==null&&et!==0){const Ft=Ht.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ft.__webglTexture,et)}I=-1},this.readRenderTargetPixels=function(P,q,et,nt,Z,gt,Tt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Ht.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Tt!==void 0&&(It=It[Tt]),It){Gt.bindFramebuffer(H.FRAMEBUFFER,It);try{const Ft=P.texture,Jt=Ft.format,Qt=Ft.type;if(!te.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-nt&&et>=0&&et<=P.height-Z&&H.readPixels(q,et,nt,Z,ee.convert(Jt),ee.convert(Qt),gt)}finally{const Ft=V!==null?Ht.get(V).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(P,q,et,nt,Z,gt,Tt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Ht.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Tt!==void 0&&(It=It[Tt]),It){const Ft=P.texture,Jt=Ft.format,Qt=Ft.type;if(!te.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=P.width-nt&&et>=0&&et<=P.height-Z){Gt.bindFramebuffer(H.FRAMEBUFFER,It);const Xt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xt),H.bufferData(H.PIXEL_PACK_BUFFER,gt.byteLength,H.STREAM_READ),H.readPixels(q,et,nt,Z,ee.convert(Jt),ee.convert(Qt),0);const ye=V!==null?Ht.get(V).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,ye);const we=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await nS(H,we,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,gt),H.deleteBuffer(Xt),H.deleteSync(we),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,q=null,et=0){P.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1]);const nt=Math.pow(2,-et),Z=Math.floor(P.image.width*nt),gt=Math.floor(P.image.height*nt),Tt=q!==null?q.x:0,It=q!==null?q.y:0;U.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,et,0,0,Tt,It,Z,gt),Gt.unbindTexture()};const Ll=H.createFramebuffer(),Il=H.createFramebuffer();this.copyTextureToTexture=function(P,q,et=null,nt=null,Z=0,gt=null){P.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,P=arguments[1],q=arguments[2],gt=arguments[3]||0,et=null),gt===null&&(Z!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=Z,Z=0):gt=0);let Tt,It,Ft,Jt,Qt,Xt,ye,we,qe;const Ve=P.isCompressedTexture?P.mipmaps[gt]:P.image;if(et!==null)Tt=et.max.x-et.min.x,It=et.max.y-et.min.y,Ft=et.isBox3?et.max.z-et.min.z:1,Jt=et.min.x,Qt=et.min.y,Xt=et.isBox3?et.min.z:0;else{const Pn=Math.pow(2,-Z);Tt=Math.floor(Ve.width*Pn),It=Math.floor(Ve.height*Pn),P.isDataArrayTexture?Ft=Ve.depth:P.isData3DTexture?Ft=Math.floor(Ve.depth*Pn):Ft=1,Jt=0,Qt=0,Xt=0}nt!==null?(ye=nt.x,we=nt.y,qe=nt.z):(ye=0,we=0,qe=0);const Me=ee.convert(q.format),kt=ee.convert(q.type);let rn;q.isData3DTexture?(U.setTexture3D(q,0),rn=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),rn=H.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),rn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Se=H.getParameter(H.UNPACK_ROW_LENGTH),vn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Fi=H.getParameter(H.UNPACK_SKIP_PIXELS),bn=H.getParameter(H.UNPACK_SKIP_ROWS),cr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ve.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt);const Oe=P.isDataArrayTexture||P.isData3DTexture,xn=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const Pn=Ht.get(P),fn=Ht.get(q),dn=Ht.get(Pn.__renderTarget),Nr=Ht.get(fn.__renderTarget);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,dn.__webglFramebuffer),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Ln=0;Ln<Ft;Ln++)Oe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.get(P).__webglTexture,Z,Xt+Ln),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.get(q).__webglTexture,gt,qe+Ln)),H.blitFramebuffer(Jt,Qt,Tt,It,ye,we,Tt,It,H.DEPTH_BUFFER_BIT,H.NEAREST);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||P.isRenderTargetTexture||Ht.has(P)){const Pn=Ht.get(P),fn=Ht.get(q);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,Ll),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Il);for(let dn=0;dn<Ft;dn++)Oe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,Z,Xt+dn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,Z),xn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,gt,qe+dn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,gt),Z!==0?H.blitFramebuffer(Jt,Qt,Tt,It,ye,we,Tt,It,H.COLOR_BUFFER_BIT,H.NEAREST):xn?H.copyTexSubImage3D(rn,gt,ye,we,qe+dn,Jt,Qt,Tt,It):H.copyTexSubImage2D(rn,gt,ye,we,Jt,Qt,Tt,It);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else xn?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(rn,gt,ye,we,qe,Tt,It,Ft,Me,kt,Ve.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(rn,gt,ye,we,qe,Tt,It,Ft,Me,Ve.data):H.texSubImage3D(rn,gt,ye,we,qe,Tt,It,Ft,Me,kt,Ve):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,gt,ye,we,Tt,It,Me,kt,Ve.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,gt,ye,we,Ve.width,Ve.height,Me,Ve.data):H.texSubImage2D(H.TEXTURE_2D,gt,ye,we,Tt,It,Me,kt,Ve);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Fi),H.pixelStorei(H.UNPACK_SKIP_ROWS,bn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,cr),gt===0&&q.generateMipmaps&&H.generateMipmap(rn),Gt.unbindTexture()},this.copyTextureToTexture3D=function(P,q,et=null,nt=null,Z=0){return P.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,P=arguments[2],q=arguments[3],Z=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,q,et,nt,Z)},this.initRenderTarget=function(P){Ht.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Gt.unbindTexture()},this.resetState=function(){D=0,N=0,V=null,Gt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}}class Mi{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,r=t.x,s=t.y,l=t.z;return e.x=n[0]*r+n[1]*s+n[2]*l,e.y=n[3]*r+n[4]*s+n[5]*l,e.z=n[6]*r+n[7]*s+n[8]*l,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Mi);const n=this.elements,r=t.elements,s=e.elements,l=n[0],c=n[1],u=n[2],f=n[3],d=n[4],m=n[5],p=n[6],x=n[7],y=n[8],M=r[0],v=r[1],g=r[2],E=r[3],C=r[4],w=r[5],F=r[6],D=r[7],N=r[8];return s[0]=l*M+c*E+u*F,s[1]=l*v+c*C+u*D,s[2]=l*g+c*w+u*N,s[3]=f*M+d*E+m*F,s[4]=f*v+d*C+m*D,s[5]=f*g+d*w+m*N,s[6]=p*M+x*E+y*F,s[7]=p*v+x*C+y*D,s[8]=p*g+x*w+y*N,e}scale(t,e){e===void 0&&(e=new Mi);const n=this.elements,r=e.elements;for(let s=0;s!==3;s++)r[3*s+0]=t.x*n[3*s+0],r[3*s+1]=t.y*n[3*s+1],r[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,r=4,s=[];let l,c;for(l=0;l<n*r;l++)s.push(0);for(l=0;l<3;l++)for(c=0;c<3;c++)s[l+r*c]=this.elements[l+3*c];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let u=3;const f=u;let d;const m=4;let p;do{if(l=f-u,s[l+r*l]===0){for(c=l+1;c<f;c++)if(s[l+r*c]!==0){d=m;do p=m-d,s[p+r*l]+=s[p+r*c];while(--d);break}}if(s[l+r*l]!==0)for(c=l+1;c<f;c++){const x=s[l+r*c]/s[l+r*l];d=m;do p=m-d,s[p+r*c]=p<=l?0:s[p+r*c]-s[p+r*l]*x;while(--d)}}while(--u);if(e.z=s[2*r+3]/s[2*r+2],e.y=(s[1*r+3]-s[1*r+2]*e.z)/s[1*r+1],e.x=(s[0*r+3]-s[0*r+2]*e.z-s[0*r+1]*e.y)/s[0*r+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Mi);const e=3,n=6,r=A1;let s,l;for(s=0;s<3;s++)for(l=0;l<3;l++)r[s+n*l]=this.elements[s+3*l];r[3+6*0]=1,r[3+6*1]=0,r[3+6*2]=0,r[4+6*0]=0,r[4+6*1]=1,r[4+6*2]=0,r[5+6*0]=0,r[5+6*1]=0,r[5+6*2]=1;let c=3;const u=c;let f;const d=n;let m;do{if(s=u-c,r[s+n*s]===0){for(l=s+1;l<u;l++)if(r[s+n*l]!==0){f=d;do m=d-f,r[m+n*s]+=r[m+n*l];while(--f);break}}if(r[s+n*s]!==0)for(l=s+1;l<u;l++){const p=r[s+n*l]/r[s+n*s];f=d;do m=d-f,r[m+n*l]=m<=s?0:r[m+n*l]-r[m+n*s]*p;while(--f)}}while(--c);s=2;do{l=s-1;do{const p=r[s+n*l]/r[s+n*s];f=n;do m=n-f,r[m+n*l]=r[m+n*l]-r[m+n*s]*p;while(--f)}while(l--)}while(--s);s=2;do{const p=1/r[s+n*s];f=n;do m=n-f,r[m+n*s]=r[m+n*s]*p;while(--f)}while(s--);s=2;do{l=2;do{if(m=r[e+l+n*s],isNaN(m)||m===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,l,m)}while(l--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,r=t.z,s=t.w,l=e+e,c=n+n,u=r+r,f=e*l,d=e*c,m=e*u,p=n*c,x=n*u,y=r*u,M=s*l,v=s*c,g=s*u,E=this.elements;return E[3*0+0]=1-(p+y),E[3*0+1]=d-g,E[3*0+2]=m+v,E[3*1+0]=d+g,E[3*1+1]=1-(f+y),E[3*1+2]=x-M,E[3*2+0]=m-v,E[3*2+1]=x+M,E[3*2+2]=1-(f+p),this}transpose(t){t===void 0&&(t=new Mi);const e=this.elements,n=t.elements;let r;return n[0]=e[0],n[4]=e[4],n[8]=e[8],r=e[1],n[1]=e[3],n[3]=r,r=e[2],n[2]=e[6],n[6]=r,r=e[5],n[5]=e[7],n[7]=r,t}}const A1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,r=t.y,s=t.z,l=this.x,c=this.y,u=this.z;return e.x=c*s-u*r,e.y=u*n-l*s,e.z=l*r-c*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Mi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,r=Math.sqrt(t*t+e*e+n*n);if(r>0){const s=1/r;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,r=this.z;let s=Math.sqrt(e*e+n*n+r*r);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=r*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,r=this.z,s=t.x,l=t.y,c=t.z;return Math.sqrt((s-e)*(s-e)+(l-n)*(l-n)+(c-r)*(c-r))}distanceSquared(t){const e=this.x,n=this.y,r=this.z,s=t.x,l=t.y,c=t.z;return(s-e)*(s-e)+(l-n)*(l-n)+(c-r)*(c-r)}scale(t,e){e===void 0&&(e=new b);const n=this.x,r=this.y,s=this.z;return e.x=t*n,e.y=t*r,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const r=T1,s=1/n;r.set(this.x*s,this.y*s,this.z*s);const l=C1;Math.abs(r.x)<.9?(l.set(1,0,0),r.cross(l,t)):(l.set(0,1,0),r.cross(l,t)),r.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const r=this.x,s=this.y,l=this.z;n.x=r+(t.x-r)*e,n.y=s+(t.y-s)*e,n.z=l+(t.z-l)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate($p),$p.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const T1=new b,C1=new b,$p=new b;class jn{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,r){const s=this.lowerBound,l=this.upperBound,c=n;s.copy(t[0]),c&&c.vmult(s,s),l.copy(s);for(let u=1;u<t.length;u++){let f=t[u];c&&(c.vmult(f,Kp),f=Kp),f.x>l.x&&(l.x=f.x),f.x<s.x&&(s.x=f.x),f.y>l.y&&(l.y=f.y),f.y<s.y&&(s.y=f.y),f.z>l.z&&(l.z=f.z),f.z<s.z&&(s.z=f.z)}return e&&(e.vadd(s,s),e.vadd(l,l)),r&&(s.x-=r,s.y-=r,s.z-=r,l.x+=r,l.y+=r,l.z+=r),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new jn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,r=t.lowerBound,s=t.upperBound,l=r.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,c=r.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,u=r.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return l&&c&&u}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,r=t.lowerBound,s=t.upperBound;return e.x<=r.x&&n.x>=s.x&&e.y<=r.y&&n.y>=s.y&&e.z<=r.z&&n.z>=s.z}getCorners(t,e,n,r,s,l,c,u){const f=this.lowerBound,d=this.upperBound;t.copy(f),e.set(d.x,f.y,f.z),n.set(d.x,d.y,f.z),r.set(f.x,d.y,d.z),s.set(d.x,f.y,d.z),l.set(f.x,d.y,f.z),c.set(f.x,f.y,d.z),u.copy(d)}toLocalFrame(t,e){const n=Zp,r=n[0],s=n[1],l=n[2],c=n[3],u=n[4],f=n[5],d=n[6],m=n[7];this.getCorners(r,s,l,c,u,f,d,m);for(let p=0;p!==8;p++){const x=n[p];t.pointToLocal(x,x)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Zp,r=n[0],s=n[1],l=n[2],c=n[3],u=n[4],f=n[5],d=n[6],m=n[7];this.getCorners(r,s,l,c,u,f,d,m);for(let p=0;p!==8;p++){const x=n[p];t.pointToWorld(x,x)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,r=1/e.x,s=1/e.y,l=1/e.z,c=(this.lowerBound.x-n.x)*r,u=(this.upperBound.x-n.x)*r,f=(this.lowerBound.y-n.y)*s,d=(this.upperBound.y-n.y)*s,m=(this.lowerBound.z-n.z)*l,p=(this.upperBound.z-n.z)*l,x=Math.max(Math.max(Math.min(c,u),Math.min(f,d)),Math.min(m,p)),y=Math.min(Math.min(Math.max(c,u),Math.max(f,d)),Math.max(m,p));return!(y<0||x>y)}}const Kp=new b,Zp=[new b,new b,new b,new b,new b,new b,new b,new b];class jp{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:r}=e;if(r>n){const s=r;r=n,n=s}return this.matrix[(n*(n+1)>>1)+r-1]}set(t,e,n){let{index:r}=t,{index:s}=e;if(s>r){const l=s;s=r,r=l}this.matrix[(r*(r+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class tg{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const r=n[t].indexOf(e);return r!==-1&&n[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let r=0,s=n.length;r<s;r++)n[r].call(this,t)}return this}}class en{constructor(t,e,n,r){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=1),this.x=t,this.y=e,this.z=n,this.w=r}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=R1,r=P1;t.tangents(n,r),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new en);const n=this.x,r=this.y,s=this.z,l=this.w,c=t.x,u=t.y,f=t.z,d=t.w;return e.x=n*d+l*c+r*f-s*u,e.y=r*d+l*u+s*c-n*f,e.z=s*d+l*f+n*u-r*c,e.w=l*d-n*c-r*u-s*f,e}inverse(t){t===void 0&&(t=new en);const e=this.x,n=this.y,r=this.z,s=this.w;this.conjugate(t);const l=1/(e*e+n*n+r*r+s*s);return t.x*=l,t.y*=l,t.z*=l,t.w*=l,t}conjugate(t){return t===void 0&&(t=new en),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,r=t.y,s=t.z,l=this.x,c=this.y,u=this.z,f=this.w,d=f*n+c*s-u*r,m=f*r+u*n-l*s,p=f*s+l*r-c*n,x=-l*n-c*r-u*s;return e.x=d*f+x*-l+m*-u-p*-c,e.y=m*f+x*-c+p*-l-d*-u,e.z=p*f+x*-u+d*-c-m*-l,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,r,s;const l=this.x,c=this.y,u=this.z,f=this.w;switch(e){case"YZX":const d=l*c+u*f;if(d>.499&&(n=2*Math.atan2(l,f),r=Math.PI/2,s=0),d<-.499&&(n=-2*Math.atan2(l,f),r=-Math.PI/2,s=0),n===void 0){const m=l*l,p=c*c,x=u*u;n=Math.atan2(2*c*f-2*l*u,1-2*p-2*x),r=Math.asin(2*d),s=Math.atan2(2*l*f-2*c*u,1-2*m-2*x)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=r,t.x=s}setFromEuler(t,e,n,r){r===void 0&&(r="XYZ");const s=Math.cos(t/2),l=Math.cos(e/2),c=Math.cos(n/2),u=Math.sin(t/2),f=Math.sin(e/2),d=Math.sin(n/2);return r==="XYZ"?(this.x=u*l*c+s*f*d,this.y=s*f*c-u*l*d,this.z=s*l*d+u*f*c,this.w=s*l*c-u*f*d):r==="YXZ"?(this.x=u*l*c+s*f*d,this.y=s*f*c-u*l*d,this.z=s*l*d-u*f*c,this.w=s*l*c+u*f*d):r==="ZXY"?(this.x=u*l*c-s*f*d,this.y=s*f*c+u*l*d,this.z=s*l*d+u*f*c,this.w=s*l*c-u*f*d):r==="ZYX"?(this.x=u*l*c-s*f*d,this.y=s*f*c+u*l*d,this.z=s*l*d-u*f*c,this.w=s*l*c+u*f*d):r==="YZX"?(this.x=u*l*c+s*f*d,this.y=s*f*c+u*l*d,this.z=s*l*d-u*f*c,this.w=s*l*c-u*f*d):r==="XZY"&&(this.x=u*l*c-s*f*d,this.y=s*f*c-u*l*d,this.z=s*l*d+u*f*c,this.w=s*l*c+u*f*d),this}clone(){return new en(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new en);const r=this.x,s=this.y,l=this.z,c=this.w;let u=t.x,f=t.y,d=t.z,m=t.w,p,x,y,M,v;return x=r*u+s*f+l*d+c*m,x<0&&(x=-x,u=-u,f=-f,d=-d,m=-m),1-x>1e-6?(p=Math.acos(x),y=Math.sin(p),M=Math.sin((1-e)*p)/y,v=Math.sin(e*p)/y):(M=1-e,v=e),n.x=M*r+v*u,n.y=M*s+v*f,n.z=M*l+v*d,n.w=M*c+v*m,n}integrate(t,e,n,r){r===void 0&&(r=new en);const s=t.x*n.x,l=t.y*n.y,c=t.z*n.z,u=this.x,f=this.y,d=this.z,m=this.w,p=e*.5;return r.x+=p*(s*m+l*d-c*f),r.y+=p*(l*m+c*u-s*d),r.z+=p*(c*m+s*f-l*u),r.w+=p*(-s*u-l*f-c*d),r}}const R1=new b,P1=new b,L1={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Ot{constructor(t){t===void 0&&(t={}),this.id=Ot.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Ot.idCounter=0;Ot.types=L1;class Ce{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new en,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ce.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ce.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,r){return r===void 0&&(r=new b),n.vsub(t,r),e.conjugate(Jp),Jp.vmult(r,r),r}static pointToWorldFrame(t,e,n,r){return r===void 0&&(r=new b),e.vmult(n,r),r.vadd(t,r),r}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,r){return r===void 0&&(r=new b),e.w*=-1,e.vmult(n,r),e.w*=-1,r}}const Jp=new en;class No extends Ot{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:r=[],axes:s,boundingSphereRadius:l}=t;super({type:Ot.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),l?this.boundingSphereRadius=l:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const r=new b;for(let s=0;s!==t.length;s++){const l=t[s],c=l.length;for(let u=0;u!==c;u++){const f=(u+1)%c;e[l[u]].vsub(e[l[f]],r),r.normalize();let d=!1;for(let m=0;m!==n.length;m++)if(n[m].almostEquals(r)||n[m].almostEquals(r)){d=!0;break}d||n.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let r=0;r<this.faces[t].length;r++)if(!this.vertices[this.faces[t][r]])throw new Error(`Vertex ${this.faces[t][r]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[t].length;r++)console.warn(`.vertices[${this.faces[t][r]}] = Vec3(${this.vertices[this.faces[t][r]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],r=this.vertices[n[0]],s=this.vertices[n[1]],l=this.vertices[n[2]];No.computeNormal(r,s,l,e)}static computeNormal(t,e,n,r){const s=new b,l=new b;e.vsub(t,l),n.vsub(e,s),s.cross(l,r),r.isZero()||r.normalize()}clipAgainstHull(t,e,n,r,s,l,c,u,f){const d=new b;let m=-1,p=-Number.MAX_VALUE;for(let y=0;y<n.faces.length;y++){d.copy(n.faceNormals[y]),s.vmult(d,d);const M=d.dot(l);M>p&&(p=M,m=y)}const x=[];for(let y=0;y<n.faces[m].length;y++){const M=n.vertices[n.faces[m][y]],v=new b;v.copy(M),s.vmult(v,v),r.vadd(v,v),x.push(v)}m>=0&&this.clipFaceAgainstHull(l,t,e,x,c,u,f)}findSeparatingAxis(t,e,n,r,s,l,c,u){const f=new b,d=new b,m=new b,p=new b,x=new b,y=new b;let M=Number.MAX_VALUE;const v=this;if(v.uniqueAxes)for(let g=0;g!==v.uniqueAxes.length;g++){n.vmult(v.uniqueAxes[g],f);const E=v.testSepAxis(f,t,e,n,r,s);if(E===!1)return!1;E<M&&(M=E,l.copy(f))}else{const g=c?c.length:v.faces.length;for(let E=0;E<g;E++){const C=c?c[E]:E;f.copy(v.faceNormals[C]),n.vmult(f,f);const w=v.testSepAxis(f,t,e,n,r,s);if(w===!1)return!1;w<M&&(M=w,l.copy(f))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],d);const E=v.testSepAxis(d,t,e,n,r,s);if(E===!1)return!1;E<M&&(M=E,l.copy(d))}else{const g=u?u.length:t.faces.length;for(let E=0;E<g;E++){const C=u?u[E]:E;d.copy(t.faceNormals[C]),s.vmult(d,d);const w=v.testSepAxis(d,t,e,n,r,s);if(w===!1)return!1;w<M&&(M=w,l.copy(d))}}for(let g=0;g!==v.uniqueEdges.length;g++){n.vmult(v.uniqueEdges[g],p);for(let E=0;E!==t.uniqueEdges.length;E++)if(s.vmult(t.uniqueEdges[E],x),p.cross(x,y),!y.almostZero()){y.normalize();const C=v.testSepAxis(y,t,e,n,r,s);if(C===!1)return!1;C<M&&(M=C,l.copy(y))}}return r.vsub(e,m),m.dot(l)>0&&l.negate(l),!0}testSepAxis(t,e,n,r,s,l){const c=this;No.project(c,t,n,r,mh),No.project(e,t,s,l,gh);const u=mh[0],f=mh[1],d=gh[0],m=gh[1];if(u<m||d<f)return!1;const p=u-m,x=d-f;return p<x?p:x}calculateLocalInertia(t,e){const n=new b,r=new b;this.computeLocalAABB(r,n);const s=n.x-r.x,l=n.y-r.y,c=n.z-r.z;e.x=1/12*t*(2*l*2*l+2*c*2*c),e.y=1/12*t*(2*s*2*s+2*c*2*c),e.z=1/12*t*(2*l*2*l+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],r=this.vertices[e[0]];return-n.dot(r)}clipFaceAgainstHull(t,e,n,r,s,l,c){const u=new b,f=new b,d=new b,m=new b,p=new b,x=new b,y=new b,M=new b,v=this,g=[],E=r,C=g;let w=-1,F=Number.MAX_VALUE;for(let A=0;A<v.faces.length;A++){u.copy(v.faceNormals[A]),n.vmult(u,u);const B=u.dot(t);B<F&&(F=B,w=A)}if(w<0)return;const D=v.faces[w];D.connectedFaces=[];for(let A=0;A<v.faces.length;A++)for(let B=0;B<v.faces[A].length;B++)D.indexOf(v.faces[A][B])!==-1&&A!==w&&D.connectedFaces.indexOf(A)===-1&&D.connectedFaces.push(A);const N=D.length;for(let A=0;A<N;A++){const B=v.vertices[D[A]],tt=v.vertices[D[(A+1)%N]];B.vsub(tt,f),d.copy(f),n.vmult(d,d),e.vadd(d,d),m.copy(this.faceNormals[w]),n.vmult(m,m),e.vadd(m,m),d.cross(m,p),p.negate(p),x.copy(B),n.vmult(x,x),e.vadd(x,x);const z=D.connectedFaces[A];y.copy(this.faceNormals[z]);const K=this.getPlaneConstantOfFace(z);M.copy(y),n.vmult(M,M);const $=K-M.dot(e);for(this.clipFaceAgainstPlane(E,C,M,$);E.length;)E.shift();for(;C.length;)E.push(C.shift())}y.copy(this.faceNormals[w]);const V=this.getPlaneConstantOfFace(w);M.copy(y),n.vmult(M,M);const I=V-M.dot(e);for(let A=0;A<E.length;A++){let B=M.dot(E[A])+I;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=l){const tt=E[A];if(B<=1e-6){const z={point:tt,normal:M,depth:B};c.push(z)}}}}clipFaceAgainstPlane(t,e,n,r){let s,l;const c=t.length;if(c<2)return e;let u=t[t.length-1],f=t[0];s=n.dot(u)+r;for(let d=0;d<c;d++){if(f=t[d],l=n.dot(f)+r,s<0)if(l<0){const m=new b;m.copy(f),e.push(m)}else{const m=new b;u.lerp(f,s/(s-l),m),e.push(m)}else if(l<0){const m=new b;u.lerp(f,s/(s-l),m),e.push(m),e.push(f)}u=f,s=l}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,r=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],r[s]),t.vadd(r[s],r[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const s=n[r];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,r=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],r[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const r=e[n].lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,r){const s=this.vertices;let l,c,u,f,d,m,p=new b;for(let x=0;x<s.length;x++){p.copy(s[x]),e.vmult(p,p),t.vadd(p,p);const y=p;(l===void 0||y.x<l)&&(l=y.x),(f===void 0||y.x>f)&&(f=y.x),(c===void 0||y.y<c)&&(c=y.y),(d===void 0||y.y>d)&&(d=y.y),(u===void 0||y.z<u)&&(u=y.z),(m===void 0||y.z>m)&&(m=y.z)}n.set(l,c,u),r.set(f,d,m)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,r=this.vertices;if(e){for(let s=0;s<n;s++){const l=r[s];e.vmult(l,l)}for(let s=0;s<this.faceNormals.length;s++){const l=this.faceNormals[s];e.vmult(l,l)}}if(t)for(let s=0;s<n;s++){const l=r[s];l.vadd(t,l)}}pointIsInside(t){const e=this.vertices,n=this.faces,r=this.faceNormals,s=new b;this.getAveragePointLocal(s);for(let l=0;l<this.faces.length;l++){let c=r[l];const u=e[n[l][0]],f=new b;t.vsub(u,f);const d=c.dot(f),m=new b;s.vsub(u,m);const p=c.dot(m);if(d<0&&p>0||d>0&&p<0)return!1}return-1}static project(t,e,n,r,s){const l=t.vertices.length,c=I1;let u=0,f=0;const d=D1,m=t.vertices;d.setZero(),Ce.vectorToLocalFrame(n,r,e,c),Ce.pointToLocalFrame(n,r,d,d);const p=d.dot(c);f=u=m[0].dot(c);for(let x=1;x<l;x++){const y=m[x].dot(c);y>u&&(u=y),y<f&&(f=y)}if(f-=p,u-=p,f>u){const x=f;f=u,u=x}s[0]=u,s[1]=f}}const mh=[],gh=[];new b;const I1=new b,D1=new b;class Tl extends Ot{constructor(t){super({type:Ot.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,r=b,s=[new r(-t,-e,-n),new r(t,-e,-n),new r(t,e,-n),new r(-t,e,-n),new r(-t,-e,n),new r(t,-e,n),new r(t,e,n),new r(-t,e,n)],l=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],c=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],u=new No({vertices:s,faces:l,axes:c});this.convexPolyhedronRepresentation=u,u.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),Tl.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const r=t;n.x=1/12*e*(2*r.y*2*r.y+2*r.z*2*r.z),n.y=1/12*e*(2*r.x*2*r.x+2*r.z*2*r.z),n.z=1/12*e*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(t,e){const n=t,r=this.halfExtents;if(n[0].set(r.x,0,0),n[1].set(0,r.y,0),n[2].set(0,0,r.z),n[3].set(-r.x,0,0),n[4].set(0,-r.y,0),n[5].set(0,0,-r.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const r=this.halfExtents,s=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let l=0;l<s.length;l++)br.set(s[l][0],s[l][1],s[l][2]),e.vmult(br,br),t.vadd(br,br),n(br.x,br.y,br.z)}calculateWorldAABB(t,e,n,r){const s=this.halfExtents;Ai[0].set(s.x,s.y,s.z),Ai[1].set(-s.x,s.y,s.z),Ai[2].set(-s.x,-s.y,s.z),Ai[3].set(-s.x,-s.y,-s.z),Ai[4].set(s.x,-s.y,-s.z),Ai[5].set(s.x,s.y,-s.z),Ai[6].set(-s.x,s.y,-s.z),Ai[7].set(s.x,-s.y,s.z);const l=Ai[0];e.vmult(l,l),t.vadd(l,l),r.copy(l),n.copy(l);for(let c=1;c<8;c++){const u=Ai[c];e.vmult(u,u),t.vadd(u,u);const f=u.x,d=u.y,m=u.z;f>r.x&&(r.x=f),d>r.y&&(r.y=d),m>r.z&&(r.z=m),f<n.x&&(n.x=f),d<n.y&&(n.y=d),m<n.z&&(n.z=m)}}}const br=new b,Ai=[new b,new b,new b,new b,new b,new b,new b,new b],Au={DYNAMIC:1,STATIC:2,KINEMATIC:4},Tu={AWAKE:0,SLEEPY:1,SLEEPING:2};class Bt extends tg{constructor(t){t===void 0&&(t={}),super(),this.id=Bt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Bt.STATIC:Bt.DYNAMIC,typeof t.type==typeof Bt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Bt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new en,this.initQuaternion=new en,this.previousQuaternion=new en,this.interpolatedQuaternion=new en,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Mi,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Mi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new jn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Bt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Bt.SLEEPING&&this.dispatchEvent(Bt.wakeupEvent)}sleep(){this.sleepState=Bt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;e===Bt.AWAKE&&n<r?(this.sleepState=Bt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Bt.sleepyEvent)):e===Bt.SLEEPY&&n>r?this.wakeUp():e===Bt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Bt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Bt.SLEEPING||this.type===Bt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const r=new b,s=new en;return e&&r.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(r),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let r=0;for(let s=0;s!==n;s++){const l=t[s];l.updateBoundingSphereRadius();const c=e[s].length(),u=l.boundingSphereRadius;c+u>r&&(r=c+u)}this.boundingRadius=r}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,r=t.length,s=U1,l=N1,c=this.quaternion,u=this.aabb,f=F1;for(let d=0;d!==r;d++){const m=t[d];c.vmult(e[d],s),s.vadd(this.position,s),c.mult(n[d],l),m.calculateWorldAABB(s,l,f.lowerBound,f.upperBound),d===0?u.copy(f):u.extend(f)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=O1,r=B1;n.setRotationFromQuaternion(this.quaternion),n.transpose(r),n.scale(e,n),n.mmult(r,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==Bt.DYNAMIC)return;this.sleepState===Bt.SLEEPING&&this.wakeUp();const n=z1;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==Bt.DYNAMIC)return;const n=H1,r=V1;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,r),this.applyForce(n,r)}applyTorque(t){this.type===Bt.DYNAMIC&&(this.sleepState===Bt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==Bt.DYNAMIC)return;this.sleepState===Bt.SLEEPING&&this.wakeUp();const n=e,r=G1;r.copy(t),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const s=k1;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==Bt.DYNAMIC)return;const n=W1,r=X1;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,r),this.applyImpulse(n,r)}updateMassProperties(){const t=q1;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Tl.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Bt.DYNAMIC||this.type===Bt.KINEMATIC)||this.sleepState===Bt.SLEEPING)return;const r=this.velocity,s=this.angularVelocity,l=this.position,c=this.force,u=this.torque,f=this.quaternion,d=this.invMass,m=this.invInertiaWorld,p=this.linearFactor,x=d*t;r.x+=c.x*x*p.x,r.y+=c.y*x*p.y,r.z+=c.z*x*p.z;const y=m.elements,M=this.angularFactor,v=u.x*M.x,g=u.y*M.y,E=u.z*M.z;s.x+=t*(y[0]*v+y[1]*g+y[2]*E),s.y+=t*(y[3]*v+y[4]*g+y[5]*E),s.z+=t*(y[6]*v+y[7]*g+y[8]*E),l.x+=r.x*t,l.y+=r.y*t,l.z+=r.z*t,f.integrate(this.angularVelocity,t,this.angularFactor,f),e&&(n?f.normalizeFast():f.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Bt.idCounter=0;Bt.COLLIDE_EVENT_NAME="collide";Bt.DYNAMIC=Au.DYNAMIC;Bt.STATIC=Au.STATIC;Bt.KINEMATIC=Au.KINEMATIC;Bt.AWAKE=Tu.AWAKE;Bt.SLEEPY=Tu.SLEEPY;Bt.SLEEPING=Tu.SLEEPING;Bt.wakeupEvent={type:"wakeup"};Bt.sleepyEvent={type:"sleepy"};Bt.sleepEvent={type:"sleep"};const U1=new b,N1=new en,F1=new jn,O1=new Mi,B1=new Mi;new Mi;const z1=new b,H1=new b,V1=new b,G1=new b,k1=new b,W1=new b,X1=new b,q1=new b;class eg{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Bt.STATIC)!==0||t.sleepState===Bt.SLEEPING)&&((e.type&Bt.STATIC)!==0||e.sleepState===Bt.SLEEPING))}intersectionTest(t,e,n,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,r):this.doBoundingSphereBroadphase(t,e,n,r)}doBoundingSphereBroadphase(t,e,n,r){const s=Y1;e.position.vsub(t.position,s);const l=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<l&&(n.push(t),r.push(e))}doBoundingBoxBroadphase(t,e,n,r){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),r.push(e))}makePairsUnique(t,e){const n=$1,r=K1,s=Z1,l=t.length;for(let c=0;c!==l;c++)r[c]=t[c],s[c]=e[c];t.length=0,e.length=0;for(let c=0;c!==l;c++){const u=r[c].id,f=s[c].id,d=u<f?`${u},${f}`:`${f},${u}`;n[d]=c,n.keys.push(d)}for(let c=0;c!==n.keys.length;c++){const u=n.keys.pop(),f=n[u];t.push(r[f]),e.push(s[f]),delete n[u]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const r=t.shapes[0],s=e.shapes[0];return Math.pow(r.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Y1=new b;new b;new en;new b;const $1={keys:[]},K1=[],Z1=[];new b;new b;new b;class j1 extends eg{constructor(){super()}collisionPairs(t,e,n){const r=t.bodies,s=r.length;let l,c;for(let u=0;u!==s;u++)for(let f=0;f!==u;f++)l=r[u],c=r[f],this.needBroadphaseCollision(l,c)&&this.intersectionTest(l,c,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let r=0;r<t.bodies.length;r++){const s=t.bodies[r];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class wl{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,r,s,l,c){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(r),this.shape=s,this.body=l,this.distance=c}}let ng,ig,rg,sg,og,ag,lg;const Cu={CLOSEST:1,ANY:2,ALL:4};ng=Ot.types.SPHERE;ig=Ot.types.PLANE;rg=Ot.types.BOX;sg=Ot.types.CYLINDER;og=Ot.types.CONVEXPOLYHEDRON;ag=Ot.types.HEIGHTFIELD;lg=Ot.types.TRIMESH;class tn{get[ng](){return this._intersectSphere}get[ig](){return this._intersectPlane}get[rg](){return this._intersectBox}get[sg](){return this._intersectConvex}get[og](){return this._intersectConvex}get[ag](){return this._intersectHeightfield}get[lg](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=tn.ANY,this.result=new wl,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||tn.ANY,this.result=e.result||new wl,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Qp),_h.length=0,t.broadphase.aabbQuery(t,Qp,_h),this.intersectBodies(_h),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=J1,s=Q1;for(let l=0,c=t.shapes.length;l<c;l++){const u=t.shapes[l];if(!(n&&!u.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[l],s),t.quaternion.vmult(t.shapeOffsets[l],r),r.vadd(t.position,r),this.intersectShape(u,s,r,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,r=t.length;!this.result.shouldStop&&n<r;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,r){const s=this.from;if(dC(s,this.direction,n)>t.boundingSphereRadius)return;const c=this[t.type];c&&c.call(this,t,e,n,r,t)}_intersectBox(t,e,n,r,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,r,s)}_intersectPlane(t,e,n,r,s){const l=this.from,c=this.to,u=this.direction,f=new b(0,0,1);e.vmult(f,f);const d=new b;l.vsub(n,d);const m=d.dot(f);c.vsub(n,d);const p=d.dot(f);if(m*p>0||l.distanceTo(c)<m)return;const x=f.dot(u);if(Math.abs(x)<this.precision)return;const y=new b,M=new b,v=new b;l.vsub(n,y);const g=-f.dot(y)/x;u.scale(g,M),l.vadd(M,v),this.reportIntersection(f,v,s,r,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,r=this.to,s=this.from;e.x=Math.min(r.x,s.x),e.y=Math.min(r.y,s.y),e.z=Math.min(r.z,s.z),n.x=Math.max(r.x,s.x),n.y=Math.max(r.y,s.y),n.z=Math.max(r.z,s.z)}_intersectHeightfield(t,e,n,r,s){t.data,t.elementSize;const l=tC;l.from.copy(this.from),l.to.copy(this.to),Ce.pointToLocalFrame(n,e,l.from,l.from),Ce.pointToLocalFrame(n,e,l.to,l.to),l.updateDirection();const c=eC;let u,f,d,m;u=f=0,d=m=t.data.length-1;const p=new jn;l.getAABB(p),t.getIndexOfPosition(p.lowerBound.x,p.lowerBound.y,c,!0),u=Math.max(u,c[0]),f=Math.max(f,c[1]),t.getIndexOfPosition(p.upperBound.x,p.upperBound.y,c,!0),d=Math.min(d,c[0]+1),m=Math.min(m,c[1]+1);for(let x=u;x<d;x++)for(let y=f;y<m;y++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(x,y,p),!!p.overlapsRay(l)){if(t.getConvexTrianglePillar(x,y,!1),Ce.pointToWorldFrame(n,e,t.pillarOffset,ll),this._intersectConvex(t.pillarConvex,e,ll,r,s,tm),this.result.shouldStop)return;t.getConvexTrianglePillar(x,y,!0),Ce.pointToWorldFrame(n,e,t.pillarOffset,ll),this._intersectConvex(t.pillarConvex,e,ll,r,s,tm)}}}_intersectSphere(t,e,n,r,s){const l=this.from,c=this.to,u=t.radius,f=(c.x-l.x)**2+(c.y-l.y)**2+(c.z-l.z)**2,d=2*((c.x-l.x)*(l.x-n.x)+(c.y-l.y)*(l.y-n.y)+(c.z-l.z)*(l.z-n.z)),m=(l.x-n.x)**2+(l.y-n.y)**2+(l.z-n.z)**2-u**2,p=d**2-4*f*m,x=nC,y=iC;if(!(p<0))if(p===0)l.lerp(c,p,x),x.vsub(n,y),y.normalize(),this.reportIntersection(y,x,s,r,-1);else{const M=(-d-Math.sqrt(p))/(2*f),v=(-d+Math.sqrt(p))/(2*f);if(M>=0&&M<=1&&(l.lerp(c,M,x),x.vsub(n,y),y.normalize(),this.reportIntersection(y,x,s,r,-1)),this.result.shouldStop)return;v>=0&&v<=1&&(l.lerp(c,v,x),x.vsub(n,y),y.normalize(),this.reportIntersection(y,x,s,r,-1))}}_intersectConvex(t,e,n,r,s,l){const c=rC,u=em,f=l&&l.faceList||null,d=t.faces,m=t.vertices,p=t.faceNormals,x=this.direction,y=this.from,M=this.to,v=y.distanceTo(M),g=f?f.length:d.length,E=this.result;for(let C=0;!E.shouldStop&&C<g;C++){const w=f?f[C]:C,F=d[w],D=p[w],N=e,V=n;u.copy(m[F[0]]),N.vmult(u,u),u.vadd(V,u),u.vsub(y,u),N.vmult(D,c);const I=x.dot(c);if(Math.abs(I)<this.precision)continue;const A=c.dot(u)/I;if(!(A<0)){x.scale(A,On),On.vadd(y,On),vi.copy(m[F[0]]),N.vmult(vi,vi),V.vadd(vi,vi);for(let B=1;!E.shouldStop&&B<F.length-1;B++){Ti.copy(m[F[B]]),Ci.copy(m[F[B+1]]),N.vmult(Ti,Ti),N.vmult(Ci,Ci),V.vadd(Ti,Ti),V.vadd(Ci,Ci);const tt=On.distanceTo(y);!(tn.pointInTriangle(On,vi,Ti,Ci)||tn.pointInTriangle(On,Ti,vi,Ci))||tt>v||this.reportIntersection(c,On,s,r,w)}}}}_intersectTrimesh(t,e,n,r,s,l){const c=sC,u=uC,f=fC,d=em,m=oC,p=aC,x=lC,y=hC,M=cC,v=t.indices;t.vertices;const g=this.from,E=this.to,C=this.direction;f.position.copy(n),f.quaternion.copy(e),Ce.vectorToLocalFrame(n,e,C,m),Ce.pointToLocalFrame(n,e,g,p),Ce.pointToLocalFrame(n,e,E,x),x.x*=t.scale.x,x.y*=t.scale.y,x.z*=t.scale.z,p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,x.vsub(p,m),m.normalize();const w=p.distanceSquared(x);t.tree.rayQuery(this,f,u);for(let F=0,D=u.length;!this.result.shouldStop&&F!==D;F++){const N=u[F];t.getNormal(N,c),t.getVertex(v[N*3],vi),vi.vsub(p,d);const V=m.dot(c),I=c.dot(d)/V;if(I<0)continue;m.scale(I,On),On.vadd(p,On),t.getVertex(v[N*3+1],Ti),t.getVertex(v[N*3+2],Ci);const A=On.distanceSquared(p);!(tn.pointInTriangle(On,Ti,vi,Ci)||tn.pointInTriangle(On,vi,Ti,Ci))||A>w||(Ce.vectorToWorldFrame(e,c,M),Ce.pointToWorldFrame(n,e,On,y),this.reportIntersection(M,y,s,r,N))}u.length=0}reportIntersection(t,e,n,r,s){const l=this.from,c=this.to,u=l.distanceTo(e),f=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(f.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case tn.ALL:this.hasHit=!0,f.set(l,c,t,e,n,r,u),f.hasHit=!0,this.callback(f);break;case tn.CLOSEST:(u<f.distance||!f.hasHit)&&(this.hasHit=!0,f.hasHit=!0,f.set(l,c,t,e,n,r,u));break;case tn.ANY:this.hasHit=!0,f.hasHit=!0,f.set(l,c,t,e,n,r,u),f.shouldStop=!0;break}}static pointInTriangle(t,e,n,r){r.vsub(e,es),n.vsub(e,Ro),t.vsub(e,vh);const s=es.dot(es),l=es.dot(Ro),c=es.dot(vh),u=Ro.dot(Ro),f=Ro.dot(vh);let d,m;return(d=u*c-l*f)>=0&&(m=s*f-l*c)>=0&&d+m<s*u-l*l}}tn.CLOSEST=Cu.CLOSEST;tn.ANY=Cu.ANY;tn.ALL=Cu.ALL;const Qp=new jn,_h=[],Ro=new b,vh=new b,J1=new b,Q1=new en,On=new b,vi=new b,Ti=new b,Ci=new b;new b;new wl;const tm={faceList:[0]},ll=new b,tC=new tn,eC=[],nC=new b,iC=new b,rC=new b;new b;new b;const em=new b,sC=new b,oC=new b,aC=new b,lC=new b,cC=new b,hC=new b;new jn;const uC=[],fC=new Ce,es=new b,cl=new b;function dC(a,t,e){e.vsub(a,es);const n=es.dot(t);return t.scale(n,cl),cl.vadd(a,cl),e.distanceTo(cl)}class Xs extends eg{static checkBounds(t,e,n){let r,s;n===0?(r=t.position.x,s=e.position.x):n===1?(r=t.position.y,s=e.position.y):n===2&&(r=t.position.z,s=e.position.z);const l=t.boundingRadius,c=e.boundingRadius,u=r+l;return s-c<u}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const r=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=r.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=r}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const r=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=r.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=r}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const r=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=r.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=r}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const r=e.indexOf(n.body);r!==-1&&e.splice(r,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const r=this.axisList,s=r.length,l=this.axisIndex;let c,u;for(this.dirty&&(this.sortList(),this.dirty=!1),c=0;c!==s;c++){const f=r[c];for(u=c+1;u<s;u++){const d=r[u];if(this.needBroadphaseCollision(f,d)){if(!Xs.checkBounds(f,d,l))break;this.intersectionTest(f,d,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let r=0;r!==n;r++){const s=t[r];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Xs.insertionSortX(t):e===1?Xs.insertionSortY(t):e===2&&Xs.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,r=0,s=0,l=0;const c=this.axisList,u=c.length,f=1/u;for(let x=0;x!==u;x++){const y=c[x],M=y.position.x;t+=M,e+=M*M;const v=y.position.y;n+=v,r+=v*v;const g=y.position.z;s+=g,l+=g*g}const d=e-t*t*f,m=r-n*n*f,p=l-s*s*f;d>m?d>p?this.axisIndex=0:this.axisIndex=2:m>p?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const r=this.axisIndex;let s="x";r===1&&(s="y"),r===2&&(s="z");const l=this.axisList;e.lowerBound[s],e.upperBound[s];for(let c=0;c<l.length;c++){const u=l[c];u.aabbNeedsUpdate&&u.updateAABB(),u.aabb.overlaps(e)&&n.push(u)}return n}}class pC{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class nm{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Xo{constructor(t,e,n,r){n===void 0&&(n=-1e6),r===void 0&&(r=1e6),this.id=Xo.idCounter++,this.minForce=n,this.maxForce=r,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new nm,this.jacobianElementB=new nm,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const r=e,s=t,l=n;this.a=4/(l*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(l*l*s*(1+4*r))}computeB(t,e,n){const r=this.computeGW(),s=this.computeGq(),l=this.computeGiMf();return-s*t-r*e-l*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,r=this.bj,s=n.position,l=r.position;return t.spatial.dot(s)+e.spatial.dot(l)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,r=this.bj,s=n.velocity,l=r.velocity,c=n.angularVelocity,u=r.angularVelocity;return t.multiplyVectors(s,c)+e.multiplyVectors(l,u)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,r=this.bj,s=n.vlambda,l=r.vlambda,c=n.wlambda,u=r.wlambda;return t.multiplyVectors(s,c)+e.multiplyVectors(l,u)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,r=this.bj,s=n.force,l=n.torque,c=r.force,u=r.torque,f=n.invMassSolve,d=r.invMassSolve;return s.scale(f,im),c.scale(d,rm),n.invInertiaWorldSolve.vmult(l,sm),r.invInertiaWorldSolve.vmult(u,om),t.multiplyVectors(im,sm)+e.multiplyVectors(rm,om)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,r=this.bj,s=n.invMassSolve,l=r.invMassSolve,c=n.invInertiaWorldSolve,u=r.invInertiaWorldSolve;let f=s+l;return c.vmult(t.rotational,hl),f+=hl.dot(t.rotational),u.vmult(e.rotational,hl),f+=hl.dot(e.rotational),f}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,r=this.bi,s=this.bj,l=mC;r.vlambda.addScaledVector(r.invMassSolve*t,e.spatial,r.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),r.invInertiaWorldSolve.vmult(e.rotational,l),r.wlambda.addScaledVector(t,l,r.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,l),s.wlambda.addScaledVector(t,l,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Xo.idCounter=0;const im=new b,rm=new b,sm=new b,om=new b,hl=new b,mC=new b;class gC extends Xo{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,r=this.bi,s=this.bj,l=this.ri,c=this.rj,u=_C,f=vC,d=r.velocity,m=r.angularVelocity;r.force,r.torque;const p=s.velocity,x=s.angularVelocity;s.force,s.torque;const y=xC,M=this.jacobianElementA,v=this.jacobianElementB,g=this.ni;l.cross(g,u),c.cross(g,f),g.negate(M.spatial),u.negate(M.rotational),v.spatial.copy(g),v.rotational.copy(f),y.copy(s.position),y.vadd(c,y),y.vsub(r.position,y),y.vsub(l,y);const E=g.dot(y),C=this.restitution+1,w=C*p.dot(g)-C*d.dot(g)+x.dot(f)-m.dot(u),F=this.computeGiMf();return-E*e-w*n-t*F}getImpactVelocityAlongNormal(){const t=yC,e=MC,n=EC,r=SC,s=wC;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(r,e),t.vsub(e,s),this.ni.dot(s)}}const _C=new b,vC=new b,xC=new b,yC=new b,MC=new b,EC=new b,SC=new b,wC=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class am extends Xo{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,r=this.rj,s=bC,l=AC,c=this.t;n.cross(c,s),r.cross(c,l);const u=this.jacobianElementA,f=this.jacobianElementB;c.negate(u.spatial),s.negate(u.rotational),f.spatial.copy(c),f.rotational.copy(l);const d=this.computeGW(),m=this.computeGiMf();return-d*e-t*m}}const bC=new b,AC=new b;class qo{constructor(t,e,n){n=pC.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=qo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}qo.idCounter=0;class Yo{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Yo.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Yo.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new tn;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class TC extends Ot{constructor(t){if(super({type:Ot.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new b);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,r){const s=this.radius,l=["x","y","z"];for(let c=0;c<l.length;c++){const u=l[c];n[u]=t[u]-s,r[u]=t[u]+s}}}new b;new b;new b;new b;new b;new b;new b;new b;new b;class CC extends Ot{constructor(){super({type:Ot.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,r){ji.set(0,0,1),e.vmult(ji,ji);const s=Number.MAX_VALUE;n.set(-s,-s,-s),r.set(s,s,s),ji.x===1?r.x=t.x:ji.x===-1&&(n.x=t.x),ji.y===1?r.y=t.y:ji.y===-1&&(n.y=t.y),ji.z===1?r.z=t.z:ji.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const ji=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new jn;new b;new jn;new b;new b;new b;new b;new b;new b;new b;new jn;new b;new Ce;new jn;class RC{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class PC extends RC{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const r=this.iterations,s=this.tolerance*this.tolerance,l=this.equations,c=l.length,u=e.bodies,f=u.length,d=t;let m,p,x,y,M,v;if(c!==0)for(let w=0;w!==f;w++)u[w].updateSolveMassProperties();const g=IC,E=DC,C=LC;g.length=c,E.length=c,C.length=c;for(let w=0;w!==c;w++){const F=l[w];C[w]=0,E[w]=F.computeB(d),g[w]=1/F.computeC()}if(c!==0){for(let D=0;D!==f;D++){const N=u[D],V=N.vlambda,I=N.wlambda;V.set(0,0,0),I.set(0,0,0)}for(n=0;n!==r;n++){y=0;for(let D=0;D!==c;D++){const N=l[D];m=E[D],p=g[D],v=C[D],M=N.computeGWlambda(),x=p*(m-M-N.eps*v),v+x<N.minForce?x=N.minForce-v:v+x>N.maxForce&&(x=N.maxForce-v),C[D]+=x,y+=x>0?x:-x,N.addToWlambda(x)}if(y*y<s)break}for(let D=0;D!==f;D++){const N=u[D],V=N.velocity,I=N.angularVelocity;N.vlambda.vmul(N.linearFactor,N.vlambda),V.vadd(N.vlambda,V),N.wlambda.vmul(N.angularFactor,N.wlambda),I.vadd(N.wlambda,I)}let w=l.length;const F=1/d;for(;w--;)l[w].multiplier=C[w]*F}return n}}const LC=[],IC=[],DC=[];class UC{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class NC extends UC{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const ke={sphereSphere:Ot.types.SPHERE,spherePlane:Ot.types.SPHERE|Ot.types.PLANE,boxBox:Ot.types.BOX|Ot.types.BOX,sphereBox:Ot.types.SPHERE|Ot.types.BOX,planeBox:Ot.types.PLANE|Ot.types.BOX,convexConvex:Ot.types.CONVEXPOLYHEDRON,sphereConvex:Ot.types.SPHERE|Ot.types.CONVEXPOLYHEDRON,planeConvex:Ot.types.PLANE|Ot.types.CONVEXPOLYHEDRON,boxConvex:Ot.types.BOX|Ot.types.CONVEXPOLYHEDRON,sphereHeightfield:Ot.types.SPHERE|Ot.types.HEIGHTFIELD,boxHeightfield:Ot.types.BOX|Ot.types.HEIGHTFIELD,convexHeightfield:Ot.types.CONVEXPOLYHEDRON|Ot.types.HEIGHTFIELD,sphereParticle:Ot.types.PARTICLE|Ot.types.SPHERE,planeParticle:Ot.types.PLANE|Ot.types.PARTICLE,boxParticle:Ot.types.BOX|Ot.types.PARTICLE,convexParticle:Ot.types.PARTICLE|Ot.types.CONVEXPOLYHEDRON,cylinderCylinder:Ot.types.CYLINDER,sphereCylinder:Ot.types.SPHERE|Ot.types.CYLINDER,planeCylinder:Ot.types.PLANE|Ot.types.CYLINDER,boxCylinder:Ot.types.BOX|Ot.types.CYLINDER,convexCylinder:Ot.types.CONVEXPOLYHEDRON|Ot.types.CYLINDER,heightfieldCylinder:Ot.types.HEIGHTFIELD|Ot.types.CYLINDER,particleCylinder:Ot.types.PARTICLE|Ot.types.CYLINDER,sphereTrimesh:Ot.types.SPHERE|Ot.types.TRIMESH,planeTrimesh:Ot.types.PLANE|Ot.types.TRIMESH};class FC{get[ke.sphereSphere](){return this.sphereSphere}get[ke.spherePlane](){return this.spherePlane}get[ke.boxBox](){return this.boxBox}get[ke.sphereBox](){return this.sphereBox}get[ke.planeBox](){return this.planeBox}get[ke.convexConvex](){return this.convexConvex}get[ke.sphereConvex](){return this.sphereConvex}get[ke.planeConvex](){return this.planeConvex}get[ke.boxConvex](){return this.boxConvex}get[ke.sphereHeightfield](){return this.sphereHeightfield}get[ke.boxHeightfield](){return this.boxHeightfield}get[ke.convexHeightfield](){return this.convexHeightfield}get[ke.sphereParticle](){return this.sphereParticle}get[ke.planeParticle](){return this.planeParticle}get[ke.boxParticle](){return this.boxParticle}get[ke.convexParticle](){return this.convexParticle}get[ke.cylinderCylinder](){return this.convexConvex}get[ke.sphereCylinder](){return this.sphereConvex}get[ke.planeCylinder](){return this.planeConvex}get[ke.boxCylinder](){return this.boxConvex}get[ke.convexCylinder](){return this.convexConvex}get[ke.heightfieldCylinder](){return this.heightfieldCylinder}get[ke.particleCylinder](){return this.particleCylinder}get[ke.sphereTrimesh](){return this.sphereTrimesh}get[ke.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new NC,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,r,s,l){let c;this.contactPointPool.length?(c=this.contactPointPool.pop(),c.bi=t,c.bj=e):c=new gC(t,e),c.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&r.collisionResponse;const u=this.currentContactMaterial;c.restitution=u.restitution,c.setSpookParams(u.contactEquationStiffness,u.contactEquationRelaxation,this.world.dt);const f=n.material||t.material,d=r.material||e.material;return f&&d&&f.restitution>=0&&d.restitution>=0&&(c.restitution=f.restitution*d.restitution),c.si=s||n,c.sj=l||r,c}createFrictionEquationsFromContact(t,e){const n=t.bi,r=t.bj,s=t.si,l=t.sj,c=this.world,u=this.currentContactMaterial;let f=u.friction;const d=s.material||n.material,m=l.material||r.material;if(d&&m&&d.friction>=0&&m.friction>=0&&(f=d.friction*m.friction),f>0){const p=f*(c.frictionGravity||c.gravity).length();let x=n.invMass+r.invMass;x>0&&(x=1/x);const y=this.frictionEquationPool,M=y.length?y.pop():new am(n,r,p*x),v=y.length?y.pop():new am(n,r,p*x);return M.bi=v.bi=n,M.bj=v.bj=r,M.minForce=v.minForce=-p*x,M.maxForce=v.maxForce=p*x,M.ri.copy(t.ri),M.rj.copy(t.rj),v.ri.copy(t.ri),v.rj.copy(t.rj),t.ni.tangents(M.t,v.t),M.setSpookParams(u.frictionEquationStiffness,u.frictionEquationRelaxation,c.dt),v.setSpookParams(u.frictionEquationStiffness,u.frictionEquationRelaxation,c.dt),M.enabled=v.enabled=t.enabled,e.push(M,v),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];jr.setZero(),Hs.setZero(),Vs.setZero();const s=e.bi;e.bj;for(let c=0;c!==t;c++)e=this.result[this.result.length-1-c],e.bi!==s?(jr.vadd(e.ni,jr),Hs.vadd(e.ri,Hs),Vs.vadd(e.rj,Vs)):(jr.vsub(e.ni,jr),Hs.vadd(e.rj,Hs),Vs.vadd(e.ri,Vs));const l=1/t;Hs.scale(l,n.ri),Vs.scale(l,n.rj),r.ri.copy(n.ri),r.rj.copy(n.rj),jr.normalize(),jr.tangents(n.t,r.t)}getContacts(t,e,n,r,s,l,c){this.contactPointPool=s,this.frictionEquationPool=c,this.result=r,this.frictionResult=l;const u=zC,f=HC,d=OC,m=BC;for(let p=0,x=t.length;p!==x;p++){const y=t[p],M=e[p];let v=null;y.material&&M.material&&(v=n.getContactMaterial(y.material,M.material)||null);const g=y.type&Bt.KINEMATIC&&M.type&Bt.STATIC||y.type&Bt.STATIC&&M.type&Bt.KINEMATIC||y.type&Bt.KINEMATIC&&M.type&Bt.KINEMATIC;for(let E=0;E<y.shapes.length;E++){y.quaternion.mult(y.shapeOrientations[E],u),y.quaternion.vmult(y.shapeOffsets[E],d),d.vadd(y.position,d);const C=y.shapes[E];for(let w=0;w<M.shapes.length;w++){M.quaternion.mult(M.shapeOrientations[w],f),M.quaternion.vmult(M.shapeOffsets[w],m),m.vadd(M.position,m);const F=M.shapes[w];if(!(C.collisionFilterMask&F.collisionFilterGroup&&F.collisionFilterMask&C.collisionFilterGroup)||d.distanceTo(m)>C.boundingSphereRadius+F.boundingSphereRadius)continue;let D=null;C.material&&F.material&&(D=n.getContactMaterial(C.material,F.material)||null),this.currentContactMaterial=D||v||n.defaultContactMaterial;const N=C.type|F.type,V=this[N];if(V){let I=!1;C.type<F.type?I=V.call(this,C,F,d,m,u,f,y,M,C,F,g):I=V.call(this,F,C,m,d,f,u,M,y,C,F,g),I&&g&&(n.shapeOverlapKeeper.set(C.id,F.id),n.bodyOverlapKeeper.set(y.id,M.id))}}}}}sphereSphere(t,e,n,r,s,l,c,u,f,d,m){if(m)return n.distanceSquared(r)<(t.radius+e.radius)**2;const p=this.createContactEquation(c,u,t,e,f,d);r.vsub(n,p.ni),p.ni.normalize(),p.ri.copy(p.ni),p.rj.copy(p.ni),p.ri.scale(t.radius,p.ri),p.rj.scale(-e.radius,p.rj),p.ri.vadd(n,p.ri),p.ri.vsub(c.position,p.ri),p.rj.vadd(r,p.rj),p.rj.vsub(u.position,p.rj),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}spherePlane(t,e,n,r,s,l,c,u,f,d,m){const p=this.createContactEquation(c,u,t,e,f,d);if(p.ni.set(0,0,1),l.vmult(p.ni,p.ni),p.ni.negate(p.ni),p.ni.normalize(),p.ni.scale(t.radius,p.ri),n.vsub(r,ul),p.ni.scale(p.ni.dot(ul),lm),ul.vsub(lm,p.rj),-ul.dot(p.ni)<=t.radius){if(m)return!0;const x=p.ri,y=p.rj;x.vadd(n,x),x.vsub(c.position,x),y.vadd(r,y),y.vsub(u.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxBox(t,e,n,r,s,l,c,u,f,d,m){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,r,s,l,c,u,t,e,m)}sphereBox(t,e,n,r,s,l,c,u,f,d,m){const p=this.v3pool,x=fR;n.vsub(r,fl),e.getSideNormals(x,l);const y=t.radius;let M=!1;const v=pR,g=mR,E=gR;let C=null,w=0,F=0,D=0,N=null;for(let k=0,st=x.length;k!==st&&M===!1;k++){const j=cR;j.copy(x[k]);const ut=j.length();j.normalize();const yt=fl.dot(j);if(yt<ut+y&&yt>0){const Mt=hR,xt=uR;Mt.copy(x[(k+1)%3]),xt.copy(x[(k+2)%3]);const _e=Mt.length(),at=xt.length();Mt.normalize(),xt.normalize();const _t=fl.dot(Mt),Pt=fl.dot(xt);if(_t<_e&&_t>-_e&&Pt<at&&Pt>-at){const St=Math.abs(yt-ut-y);if((N===null||St<N)&&(N=St,F=_t,D=Pt,C=ut,v.copy(j),g.copy(Mt),E.copy(xt),w++,m))return!0}}}if(w){M=!0;const k=this.createContactEquation(c,u,t,e,f,d);v.scale(-y,k.ri),k.ni.copy(v),k.ni.negate(k.ni),v.scale(C,v),g.scale(F,g),v.vadd(g,v),E.scale(D,E),v.vadd(E,k.rj),k.ri.vadd(n,k.ri),k.ri.vsub(c.position,k.ri),k.rj.vadd(r,k.rj),k.rj.vsub(u.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}let V=p.get();const I=dR;for(let k=0;k!==2&&!M;k++)for(let st=0;st!==2&&!M;st++)for(let j=0;j!==2&&!M;j++)if(V.set(0,0,0),k?V.vadd(x[0],V):V.vsub(x[0],V),st?V.vadd(x[1],V):V.vsub(x[1],V),j?V.vadd(x[2],V):V.vsub(x[2],V),r.vadd(V,I),I.vsub(n,I),I.lengthSquared()<y*y){if(m)return!0;M=!0;const ut=this.createContactEquation(c,u,t,e,f,d);ut.ri.copy(I),ut.ri.normalize(),ut.ni.copy(ut.ri),ut.ri.scale(y,ut.ri),ut.rj.copy(V),ut.ri.vadd(n,ut.ri),ut.ri.vsub(c.position,ut.ri),ut.rj.vadd(r,ut.rj),ut.rj.vsub(u.position,ut.rj),this.result.push(ut),this.createFrictionEquationsFromContact(ut,this.frictionResult)}p.release(V),V=null;const A=p.get(),B=p.get(),tt=p.get(),z=p.get(),K=p.get(),$=x.length;for(let k=0;k!==$&&!M;k++)for(let st=0;st!==$&&!M;st++)if(k%3!==st%3){x[st].cross(x[k],A),A.normalize(),x[k].vadd(x[st],B),tt.copy(n),tt.vsub(B,tt),tt.vsub(r,tt);const j=tt.dot(A);A.scale(j,z);let ut=0;for(;ut===k%3||ut===st%3;)ut++;K.copy(n),K.vsub(z,K),K.vsub(B,K),K.vsub(r,K);const yt=Math.abs(j),Mt=K.length();if(yt<x[ut].length()&&Mt<y){if(m)return!0;M=!0;const xt=this.createContactEquation(c,u,t,e,f,d);B.vadd(z,xt.rj),xt.rj.copy(xt.rj),K.negate(xt.ni),xt.ni.normalize(),xt.ri.copy(xt.rj),xt.ri.vadd(r,xt.ri),xt.ri.vsub(n,xt.ri),xt.ri.normalize(),xt.ri.scale(y,xt.ri),xt.ri.vadd(n,xt.ri),xt.ri.vsub(c.position,xt.ri),xt.rj.vadd(r,xt.rj),xt.rj.vsub(u.position,xt.rj),this.result.push(xt),this.createFrictionEquationsFromContact(xt,this.frictionResult)}}p.release(A,B,tt,z,K)}planeBox(t,e,n,r,s,l,c,u,f,d,m){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,r,s,l,c,u,t,e,m)}convexConvex(t,e,n,r,s,l,c,u,f,d,m,p,x){const y=LR;if(!(n.distanceTo(r)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,r,l,y,p,x)){const M=[],v=IR;t.clipAgainstHull(n,s,e,r,l,y,-100,100,M);let g=0;for(let E=0;E!==M.length;E++){if(m)return!0;const C=this.createContactEquation(c,u,t,e,f,d),w=C.ri,F=C.rj;y.negate(C.ni),M[E].normal.negate(v),v.scale(M[E].depth,v),M[E].point.vadd(v,w),F.copy(M[E].point),w.vsub(n,w),F.vsub(r,F),w.vadd(n,w),w.vsub(c.position,w),F.vadd(r,F),F.vsub(u.position,F),this.result.push(C),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(C,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,r,s,l,c,u,f,d,m){const p=this.v3pool;n.vsub(r,_R);const x=e.faceNormals,y=e.faces,M=e.vertices,v=t.radius;let g=!1;for(let E=0;E!==M.length;E++){const C=M[E],w=MR;l.vmult(C,w),r.vadd(w,w);const F=yR;if(w.vsub(n,F),F.lengthSquared()<v*v){if(m)return!0;g=!0;const D=this.createContactEquation(c,u,t,e,f,d);D.ri.copy(F),D.ri.normalize(),D.ni.copy(D.ri),D.ri.scale(v,D.ri),w.vsub(r,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(c.position,D.ri),D.rj.vadd(r,D.rj),D.rj.vsub(u.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);return}}for(let E=0,C=y.length;E!==C&&g===!1;E++){const w=x[E],F=y[E],D=ER;l.vmult(w,D);const N=SR;l.vmult(M[F[0]],N),N.vadd(r,N);const V=wR;D.scale(-v,V),n.vadd(V,V);const I=bR;V.vsub(N,I);const A=I.dot(D),B=AR;if(n.vsub(N,B),A<0&&B.dot(D)>0){const tt=[];for(let z=0,K=F.length;z!==K;z++){const $=p.get();l.vmult(M[F[z]],$),r.vadd($,$),tt.push($)}if(lR(tt,D,n)){if(m)return!0;g=!0;const z=this.createContactEquation(c,u,t,e,f,d);D.scale(-v,z.ri),D.negate(z.ni);const K=p.get();D.scale(-A,K);const $=p.get();D.scale(-v,$),n.vsub(r,z.rj),z.rj.vadd($,z.rj),z.rj.vadd(K,z.rj),z.rj.vadd(r,z.rj),z.rj.vsub(u.position,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(c.position,z.ri),p.release(K),p.release($),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let k=0,st=tt.length;k!==st;k++)p.release(tt[k]);return}else for(let z=0;z!==F.length;z++){const K=p.get(),$=p.get();l.vmult(M[F[(z+1)%F.length]],K),l.vmult(M[F[(z+2)%F.length]],$),r.vadd(K,K),r.vadd($,$);const k=vR;$.vsub(K,k);const st=xR;k.unit(st);const j=p.get(),ut=p.get();n.vsub(K,ut);const yt=ut.dot(st);st.scale(yt,j),j.vadd(K,j);const Mt=p.get();if(j.vsub(n,Mt),yt>0&&yt*yt<k.lengthSquared()&&Mt.lengthSquared()<v*v){if(m)return!0;const xt=this.createContactEquation(c,u,t,e,f,d);j.vsub(r,xt.rj),j.vsub(n,xt.ni),xt.ni.normalize(),xt.ni.scale(v,xt.ri),xt.rj.vadd(r,xt.rj),xt.rj.vsub(u.position,xt.rj),xt.ri.vadd(n,xt.ri),xt.ri.vsub(c.position,xt.ri),this.result.push(xt),this.createFrictionEquationsFromContact(xt,this.frictionResult);for(let _e=0,at=tt.length;_e!==at;_e++)p.release(tt[_e]);p.release(K),p.release($),p.release(j),p.release(Mt),p.release(ut);return}p.release(K),p.release($),p.release(j),p.release(Mt),p.release(ut)}for(let z=0,K=tt.length;z!==K;z++)p.release(tt[z])}}}planeConvex(t,e,n,r,s,l,c,u,f,d,m){const p=TR,x=CR;x.set(0,0,1),s.vmult(x,x);let y=0;const M=RR;for(let v=0;v!==e.vertices.length;v++)if(p.copy(e.vertices[v]),l.vmult(p,p),r.vadd(p,p),p.vsub(n,M),x.dot(M)<=0){if(m)return!0;const E=this.createContactEquation(c,u,t,e,f,d),C=PR;x.scale(x.dot(M),C),p.vsub(C,C),C.vsub(n,E.ri),E.ni.copy(x),p.vsub(r,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(c.position,E.ri),E.rj.vadd(r,E.rj),E.rj.vsub(u.position,E.rj),this.result.push(E),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(E,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}boxConvex(t,e,n,r,s,l,c,u,f,d,m){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,r,s,l,c,u,t,e,m)}sphereHeightfield(t,e,n,r,s,l,c,u,f,d,m){const p=e.data,x=t.radius,y=e.elementSize,M=WR,v=kR;Ce.pointToLocalFrame(r,l,n,v);let g=Math.floor((v.x-x)/y)-1,E=Math.ceil((v.x+x)/y)+1,C=Math.floor((v.y-x)/y)-1,w=Math.ceil((v.y+x)/y)+1;if(E<0||w<0||g>p.length||C>p[0].length)return;g<0&&(g=0),E<0&&(E=0),C<0&&(C=0),w<0&&(w=0),g>=p.length&&(g=p.length-1),E>=p.length&&(E=p.length-1),w>=p[0].length&&(w=p[0].length-1),C>=p[0].length&&(C=p[0].length-1);const F=[];e.getRectMinMax(g,C,E,w,F);const D=F[0],N=F[1];if(v.z-x>N||v.z+x<D)return;const V=this.result;for(let I=g;I<E;I++)for(let A=C;A<w;A++){const B=V.length;let tt=!1;if(e.getConvexTrianglePillar(I,A,!1),Ce.pointToWorldFrame(r,l,e.pillarOffset,M),n.distanceTo(M)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(tt=this.sphereConvex(t,e.pillarConvex,n,M,s,l,c,u,t,e,m)),m&&tt||(e.getConvexTrianglePillar(I,A,!0),Ce.pointToWorldFrame(r,l,e.pillarOffset,M),n.distanceTo(M)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(tt=this.sphereConvex(t,e.pillarConvex,n,M,s,l,c,u,t,e,m)),m&&tt))return!0;if(V.length-B>2)return}}boxHeightfield(t,e,n,r,s,l,c,u,f,d,m){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,r,s,l,c,u,t,e,m)}convexHeightfield(t,e,n,r,s,l,c,u,f,d,m){const p=e.data,x=e.elementSize,y=t.boundingSphereRadius,M=VR,v=GR,g=HR;Ce.pointToLocalFrame(r,l,n,g);let E=Math.floor((g.x-y)/x)-1,C=Math.ceil((g.x+y)/x)+1,w=Math.floor((g.y-y)/x)-1,F=Math.ceil((g.y+y)/x)+1;if(C<0||F<0||E>p.length||w>p[0].length)return;E<0&&(E=0),C<0&&(C=0),w<0&&(w=0),F<0&&(F=0),E>=p.length&&(E=p.length-1),C>=p.length&&(C=p.length-1),F>=p[0].length&&(F=p[0].length-1),w>=p[0].length&&(w=p[0].length-1);const D=[];e.getRectMinMax(E,w,C,F,D);const N=D[0],V=D[1];if(!(g.z-y>V||g.z+y<N))for(let I=E;I<C;I++)for(let A=w;A<F;A++){let B=!1;if(e.getConvexTrianglePillar(I,A,!1),Ce.pointToWorldFrame(r,l,e.pillarOffset,M),n.distanceTo(M)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,M,s,l,c,u,null,null,m,v,null)),m&&B||(e.getConvexTrianglePillar(I,A,!0),Ce.pointToWorldFrame(r,l,e.pillarOffset,M),n.distanceTo(M)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,M,s,l,c,u,null,null,m,v,null)),m&&B))return!0}}sphereParticle(t,e,n,r,s,l,c,u,f,d,m){const p=FR;if(p.set(0,0,1),r.vsub(n,p),p.lengthSquared()<=t.radius*t.radius){if(m)return!0;const y=this.createContactEquation(u,c,e,t,f,d);p.normalize(),y.rj.copy(p),y.rj.scale(t.radius,y.rj),y.ni.copy(p),y.ni.negate(y.ni),y.ri.set(0,0,0),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}planeParticle(t,e,n,r,s,l,c,u,f,d,m){const p=DR;p.set(0,0,1),c.quaternion.vmult(p,p);const x=UR;if(r.vsub(c.position,x),p.dot(x)<=0){if(m)return!0;const M=this.createContactEquation(u,c,e,t,f,d);M.ni.copy(p),M.ni.negate(M.ni),M.ri.set(0,0,0);const v=NR;p.scale(p.dot(r),v),r.vsub(v,v),M.rj.copy(v),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}boxParticle(t,e,n,r,s,l,c,u,f,d,m){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,r,s,l,c,u,t,e,m)}convexParticle(t,e,n,r,s,l,c,u,f,d,m){let p=-1;const x=BR,y=zR;let M=null;const v=OR;if(v.copy(r),v.vsub(n,v),s.conjugate(cm),cm.vmult(v,v),t.pointIsInside(v)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,E=t.faces.length;g!==E;g++){const C=[t.worldVertices[t.faces[g][0]]],w=t.worldFaceNormals[g];r.vsub(C[0],hm);const F=-w.dot(hm);if(M===null||Math.abs(F)<Math.abs(M)){if(m)return!0;M=F,p=g,x.copy(w)}}if(p!==-1){const g=this.createContactEquation(u,c,e,t,f,d);x.scale(M,y),y.vadd(r,y),y.vsub(n,y),g.rj.copy(y),x.negate(g.ni),g.ri.set(0,0,0);const E=g.ri,C=g.rj;E.vadd(r,E),E.vsub(u.position,E),C.vadd(n,C),C.vsub(c.position,C),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,r,s,l,c,u,f,d,m){return this.convexHeightfield(e,t,r,n,l,s,u,c,f,d,m)}particleCylinder(t,e,n,r,s,l,c,u,f,d,m){return this.convexParticle(e,t,r,n,l,s,u,c,f,d,m)}sphereTrimesh(t,e,n,r,s,l,c,u,f,d,m){const p=$C,x=KC,y=ZC,M=jC,v=JC,g=QC,E=iR,C=YC,w=XC,F=rR;Ce.pointToLocalFrame(r,l,n,v);const D=t.radius;E.lowerBound.set(v.x-D,v.y-D,v.z-D),E.upperBound.set(v.x+D,v.y+D,v.z+D),e.getTrianglesInAABB(E,F);const N=qC,V=t.radius*t.radius;for(let z=0;z<F.length;z++)for(let K=0;K<3;K++)if(e.getVertex(e.indices[F[z]*3+K],N),N.vsub(v,w),w.lengthSquared()<=V){if(C.copy(N),Ce.pointToWorldFrame(r,l,C,N),N.vsub(n,w),m)return!0;let $=this.createContactEquation(c,u,t,e,f,d);$.ni.copy(w),$.ni.normalize(),$.ri.copy($.ni),$.ri.scale(t.radius,$.ri),$.ri.vadd(n,$.ri),$.ri.vsub(c.position,$.ri),$.rj.copy(N),$.rj.vsub(u.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}for(let z=0;z<F.length;z++)for(let K=0;K<3;K++){e.getVertex(e.indices[F[z]*3+K],p),e.getVertex(e.indices[F[z]*3+(K+1)%3],x),x.vsub(p,y),v.vsub(x,g);const $=g.dot(y);v.vsub(p,g);let k=g.dot(y);if(k>0&&$<0&&(v.vsub(p,g),M.copy(y),M.normalize(),k=g.dot(M),M.scale(k,g),g.vadd(p,g),g.distanceTo(v)<t.radius)){if(m)return!0;const j=this.createContactEquation(c,u,t,e,f,d);g.vsub(v,j.ni),j.ni.normalize(),j.ni.scale(t.radius,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(c.position,j.ri),Ce.pointToWorldFrame(r,l,g,g),g.vsub(u.position,j.rj),Ce.vectorToWorldFrame(l,j.ni,j.ni),Ce.vectorToWorldFrame(l,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}const I=tR,A=eR,B=nR,tt=WC;for(let z=0,K=F.length;z!==K;z++){e.getTriangleVertices(F[z],I,A,B),e.getNormal(F[z],tt),v.vsub(I,g);let $=g.dot(tt);if(tt.scale($,g),v.vsub(g,g),$=g.distanceTo(v),tn.pointInTriangle(g,I,A,B)&&$<t.radius){if(m)return!0;let k=this.createContactEquation(c,u,t,e,f,d);g.vsub(v,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(c.position,k.ri),Ce.pointToWorldFrame(r,l,g,g),g.vsub(u.position,k.rj),Ce.vectorToWorldFrame(l,k.ni,k.ni),Ce.vectorToWorldFrame(l,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}F.length=0}planeTrimesh(t,e,n,r,s,l,c,u,f,d,m){const p=new b,x=VC;x.set(0,0,1),s.vmult(x,x);for(let y=0;y<e.vertices.length/3;y++){e.getVertex(y,p);const M=new b;M.copy(p),Ce.pointToWorldFrame(r,l,M,p);const v=GC;if(p.vsub(n,v),x.dot(v)<=0){if(m)return!0;const E=this.createContactEquation(c,u,t,e,f,d);E.ni.copy(x);const C=kC;x.scale(v.dot(x),C),p.vsub(C,C),E.ri.copy(C),E.ri.vsub(c.position,E.ri),E.rj.copy(p),E.rj.vsub(u.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult)}}}}const jr=new b,Hs=new b,Vs=new b,OC=new b,BC=new b,zC=new en,HC=new en,VC=new b,GC=new b,kC=new b,WC=new b,XC=new b;new b;const qC=new b,YC=new b,$C=new b,KC=new b,ZC=new b,jC=new b,JC=new b,QC=new b,tR=new b,eR=new b,nR=new b,iR=new jn,rR=[],ul=new b,lm=new b,sR=new b,oR=new b,aR=new b;function lR(a,t,e){let n=null;const r=a.length;for(let s=0;s!==r;s++){const l=a[s],c=sR;a[(s+1)%r].vsub(l,c);const u=oR;c.cross(t,u);const f=aR;e.vsub(l,f);const d=u.dot(f);if(n===null||d>0&&n===!0||d<=0&&n===!1){n===null&&(n=d>0);continue}else return!1}return!0}const fl=new b,cR=new b,hR=new b,uR=new b,fR=[new b,new b,new b,new b,new b,new b],dR=new b,pR=new b,mR=new b,gR=new b,_R=new b,vR=new b,xR=new b,yR=new b,MR=new b,ER=new b,SR=new b,wR=new b,bR=new b,AR=new b;new b;new b;const TR=new b,CR=new b,RR=new b,PR=new b,LR=new b,IR=new b,DR=new b,UR=new b,NR=new b,FR=new b,cm=new en,OR=new b;new b;const BR=new b,hm=new b,zR=new b,HR=new b,VR=new b,GR=[0],kR=new b,WR=new b;class um{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),r=this.current;let s=0;for(;n>r[s];)s++;if(n!==r[s]){for(let l=r.length-1;l>=s;l--)r[l+1]=r[l];r[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,r=this.previous,s=n.length,l=r.length;let c=0;for(let u=0;u<s;u++){let f=!1;const d=n[u];for(;d>r[c];)c++;f=d===r[c],f||fm(t,d)}c=0;for(let u=0;u<l;u++){let f=!1;const d=r[u];for(;d>n[c];)c++;f=n[c]===d,f||fm(e,d)}}}function fm(a,t){a.push((t&4294901760)>>16,t&65535)}const xh=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class XR{constructor(){this.data={keys:[]}}get(t,e){const n=xh(t,e);return this.data[n]}set(t,e,n){const r=xh(t,e);this.get(t,e)||this.data.keys.push(r),this.data[r]=n}delete(t,e){const n=xh(t,e),r=this.data.keys.indexOf(n);r!==-1&&this.data.keys.splice(r,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class qR extends tg{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new j1,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new PC,this.constraints=[],this.narrowphase=new FC(this),this.collisionMatrix=new jp,this.collisionMatrixPrevious=new jp,this.bodyOverlapKeeper=new um,this.shapeOverlapKeeper=new um,this.contactmaterials=[],this.contactMaterialTable=new XR,this.defaultMaterial=new Yo("default"),this.defaultContactMaterial=new qo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof wl?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,r){return n===void 0&&(n={}),n.mode=tn.ALL,n.from=t,n.to=e,n.callback=r,yh.intersectWorld(this,n)}raycastAny(t,e,n,r){return n===void 0&&(n={}),n.mode=tn.ANY,n.from=t,n.to=e,n.result=r,yh.intersectWorld(this,n)}raycastClosest(t,e,n,r){return n===void 0&&(n={}),n.mode=tn.CLOSEST,n.from=t,n.to=e,n.result=r,yh.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Bt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,r=n.indexOf(t);if(r!==-1){n.splice(r,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const r=e[n].shapes;for(let s=0;s<r.length;s++){const l=r[s];if(l.id===t)return l}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ln.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const r=n-this.lastCallTime;this.step(t,r,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const r=ln.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ln.now()-r>t*1e3)););this.accumulator=this.accumulator%t;const l=this.accumulator/t;for(let c=0;c!==this.bodies.length;c++){const u=this.bodies[c];u.previousPosition.lerp(u.position,l,u.interpolatedPosition),u.previousQuaternion.slerp(u.quaternion,l,u.interpolatedQuaternion),u.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=jR,r=JR,s=this.bodies.length,l=this.bodies,c=this.solver,u=this.gravity,f=this.doProfiling,d=this.profile,m=Bt.DYNAMIC;let p=-1/0;const x=this.constraints,y=ZR;u.length();const M=u.x,v=u.y,g=u.z;let E=0;for(f&&(p=ln.now()),E=0;E!==s;E++){const z=l[E];if(z.type===m){const K=z.force,$=z.mass;K.x+=$*M,K.y+=$*v,K.z+=$*g}}for(let z=0,K=this.subsystems.length;z!==K;z++)this.subsystems[z].update();f&&(p=ln.now()),n.length=0,r.length=0,this.broadphase.collisionPairs(this,n,r),f&&(d.broadphase=ln.now()-p);let C=x.length;for(E=0;E!==C;E++){const z=x[E];if(!z.collideConnected)for(let K=n.length-1;K>=0;K-=1)(z.bodyA===n[K]&&z.bodyB===r[K]||z.bodyB===n[K]&&z.bodyA===r[K])&&(n.splice(K,1),r.splice(K,1))}this.collisionMatrixTick(),f&&(p=ln.now());const w=KR,F=e.length;for(E=0;E!==F;E++)w.push(e[E]);e.length=0;const D=this.frictionEquations.length;for(E=0;E!==D;E++)y.push(this.frictionEquations[E]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,r,this,e,w,this.frictionEquations,y),f&&(d.narrowphase=ln.now()-p),f&&(p=ln.now()),E=0;E<this.frictionEquations.length;E++)c.addEquation(this.frictionEquations[E]);const N=e.length;for(let z=0;z!==N;z++){const K=e[z],$=K.bi,k=K.bj,st=K.si,j=K.sj;let ut;if($.material&&k.material?ut=this.getContactMaterial($.material,k.material)||this.defaultContactMaterial:ut=this.defaultContactMaterial,ut.friction,$.material&&k.material&&($.material.friction>=0&&k.material.friction>=0&&$.material.friction*k.material.friction,$.material.restitution>=0&&k.material.restitution>=0&&(K.restitution=$.material.restitution*k.material.restitution)),c.addEquation(K),$.allowSleep&&$.type===Bt.DYNAMIC&&$.sleepState===Bt.SLEEPING&&k.sleepState===Bt.AWAKE&&k.type!==Bt.STATIC){const yt=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),Mt=k.sleepSpeedLimit**2;yt>=Mt*2&&($.wakeUpAfterNarrowphase=!0)}if(k.allowSleep&&k.type===Bt.DYNAMIC&&k.sleepState===Bt.SLEEPING&&$.sleepState===Bt.AWAKE&&$.type!==Bt.STATIC){const yt=$.velocity.lengthSquared()+$.angularVelocity.lengthSquared(),Mt=$.sleepSpeedLimit**2;yt>=Mt*2&&(k.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set($,k,!0),this.collisionMatrixPrevious.get($,k)||(Po.body=k,Po.contact=K,$.dispatchEvent(Po),Po.body=$,k.dispatchEvent(Po)),this.bodyOverlapKeeper.set($.id,k.id),this.shapeOverlapKeeper.set(st.id,j.id)}for(this.emitContactEvents(),f&&(d.makeContactConstraints=ln.now()-p,p=ln.now()),E=0;E!==s;E++){const z=l[E];z.wakeUpAfterNarrowphase&&(z.wakeUp(),z.wakeUpAfterNarrowphase=!1)}for(C=x.length,E=0;E!==C;E++){const z=x[E];z.update();for(let K=0,$=z.equations.length;K!==$;K++){const k=z.equations[K];c.addEquation(k)}}c.solve(t,this),f&&(d.solve=ln.now()-p),c.removeAllEquations();const V=Math.pow;for(E=0;E!==s;E++){const z=l[E];if(z.type&m){const K=V(1-z.linearDamping,t),$=z.velocity;$.scale(K,$);const k=z.angularVelocity;if(k){const st=V(1-z.angularDamping,t);k.scale(st,k)}}}this.dispatchEvent($R),f&&(p=ln.now());const A=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(E=0;E!==s;E++)l[E].integrate(t,A,B);this.clearForces(),this.broadphase.dirty=!0,f&&(d.integrate=ln.now()-p),this.stepnumber+=1,this.dispatchEvent(YR);let tt=!0;if(this.allowSleep)for(tt=!1,E=0;E!==s;E++){const z=l[E];z.sleepTick(this.time),z.sleepState!==Bt.SLEEPING&&(tt=!0)}this.hasActiveBodies=tt}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ji,Qi),t){for(let s=0,l=Ji.length;s<l;s+=2)Lo.bodyA=this.getBodyById(Ji[s]),Lo.bodyB=this.getBodyById(Ji[s+1]),this.dispatchEvent(Lo);Lo.bodyA=Lo.bodyB=null}if(e){for(let s=0,l=Qi.length;s<l;s+=2)Io.bodyA=this.getBodyById(Qi[s]),Io.bodyB=this.getBodyById(Qi[s+1]),this.dispatchEvent(Io);Io.bodyA=Io.bodyB=null}Ji.length=Qi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((n||r)&&this.shapeOverlapKeeper.getDiff(Ji,Qi),n){for(let s=0,l=Ji.length;s<l;s+=2){const c=this.getShapeById(Ji[s]),u=this.getShapeById(Ji[s+1]);tr.shapeA=c,tr.shapeB=u,c&&(tr.bodyA=c.body),u&&(tr.bodyB=u.body),this.dispatchEvent(tr)}tr.bodyA=tr.bodyB=tr.shapeA=tr.shapeB=null}if(r){for(let s=0,l=Qi.length;s<l;s+=2){const c=this.getShapeById(Qi[s]),u=this.getShapeById(Qi[s+1]);er.shapeA=c,er.shapeB=u,c&&(er.bodyA=c.body),u&&(er.bodyB=u.body),this.dispatchEvent(er)}er.bodyA=er.bodyB=er.shapeA=er.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const r=t[n];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new jn;const yh=new tn,ln=globalThis.performance||{};if(!ln.now){let a=Date.now();ln.timing&&ln.timing.navigationStart&&(a=ln.timing.navigationStart),ln.now=()=>Date.now()-a}new b;const YR={type:"postStep"},$R={type:"preStep"},Po={type:Bt.COLLIDE_EVENT_NAME,body:null,contact:null},KR=[],ZR=[],jR=[],JR=[],Ji=[],Qi=[],Lo={type:"beginContact",bodyA:null,bodyB:null},Io={type:"endContact",bodyA:null,bodyB:null},tr={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},er={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},dm={type:"change"},Ru={type:"start"},cg={type:"end"},dl=new Om,pm=new Ar,QR=Math.cos(70*tS.DEG2RAD),an=new Q,Bn=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mh=1e-6;class tP extends kS{constructor(t,e=null){super(t,e),this.state=Ne.NONE,this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new os,this._lastTargetPosition=new Q,this._quat=new os().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ep,this._sphericalDelta=new Ep,this._scale=1,this._panOffset=new Q,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new Q,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nP.bind(this),this._onPointerDown=eP.bind(this),this._onPointerUp=iP.bind(this),this._onContextMenu=hP.bind(this),this._onMouseWheel=oP.bind(this),this._onKeyDown=aP.bind(this),this._onTouchStart=lP.bind(this),this._onTouchMove=cP.bind(this),this._onMouseDown=rP.bind(this),this._onMouseMove=sP.bind(this),this._interceptControlDown=uP.bind(this),this._interceptControlUp=fP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dm),this.update(),this.state=Ne.NONE}update(t=null){const e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),r<-Math.PI?r+=Bn:r>Math.PI&&(r-=Bn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=l!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=an.length();l=this._clampDistance(c*this._scale);const u=c-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const f=new Q(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),l=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(dl.origin.copy(this.object.position),dl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dl.direction))<QR?this.object.lookAt(this.target):(pm.setFromNormalAndCoplanarPoint(this.object.up,this.target),dl.intersectPlane(pm,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Mh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mh||this._lastTargetPosition.distanceToSquared(this.target)>Mh?(this.dispatchEvent(dm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Bn/60*this.autoRotateSpeed*t:Bn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;an.copy(r).sub(this.target);let s=an.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,l=n.width,c=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ae,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function eP(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function nP(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function iP(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cg),this.state=Ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rP(a){let t;switch(a.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Ne.DOLLY;break;case qs.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Ne.ROTATE}break;case qs.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Ne.PAN}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(Ru)}function sP(a){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function oP(a){this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE||(a.preventDefault(),this.dispatchEvent(Ru),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(cg))}function aP(a){this.enabled!==!1&&this._handleKeyDown(a)}function lP(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Ne.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Ne.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(Ru)}function cP(a){switch(this._trackPointer(a),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Ne.NONE}}function hP(a){this.enabled!==!1&&a.preventDefault()}function uP(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fP(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dP{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=Eh(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=pP.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=Eh()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(t){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:Eh())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Eh(){return performance.now()}function pP(){document.hidden===!1&&this.reset()}var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Uo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var mP=Uo.exports,mm;function gP(){return mm||(mm=1,function(a,t){(function(){var e,n="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",m=1,p=2,x=4,y=1,M=2,v=1,g=2,E=4,C=8,w=16,F=32,D=64,N=128,V=256,I=512,A=30,B="...",tt=800,z=16,K=1,$=2,k=3,st=1/0,j=9007199254740991,ut=17976931348623157e292,yt=NaN,Mt=4294967295,xt=Mt-1,_e=Mt>>>1,at=[["ary",N],["bind",v],["bindKey",g],["curry",C],["curryRight",w],["flip",I],["partial",F],["partialRight",D],["rearg",V]],_t="[object Arguments]",Pt="[object Array]",St="[object AsyncFunction]",Wt="[object Boolean]",fe="[object Date]",jt="[object DOMException]",ze="[object Error]",Ie="[object Function]",de="[object GeneratorFunction]",H="[object Map]",un="[object Number]",ve="[object Null]",te="[object Object]",Gt="[object Promise]",Fe="[object Proxy]",Ht="[object RegExp]",U="[object Set]",T="[object String]",J="[object Symbol]",dt="[object Undefined]",pt="[object WeakMap]",ct="[object WeakSet]",zt="[object ArrayBuffer]",Et="[object DataView]",Lt="[object Float32Array]",pe="[object Float64Array]",vt="[object Int8Array]",Dt="[object Int16Array]",qt="[object Int32Array]",Zt="[object Uint8Array]",Ut="[object Uint8ClampedArray]",ue="[object Uint16Array]",ee="[object Uint32Array]",De=/\b__p \+= '';/g,W=/\b(__p \+=) '' \+/g,At=/(__e\(.*?\)|\b__t\)) \+\n'';/g,rt=/&(?:amp|lt|gt|quot|#39);/g,ft=/[&<>"']/g,Rt=RegExp(rt.source),Ct=RegExp(ft.source),ie=/<%-([\s\S]+?)%>/g,We=/<%([\s\S]+?)%>/g,nn=/<%=([\s\S]+?)%>/g,Ae=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Vn=/^\w*$/,ci=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,hs=/[\\^$.*+?()[\]{}|]/g,$o=RegExp(hs.source),hi=/^\s+/,ao=/\s/,Ko=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Zo=/\{\n\/\* \[wrapped with (.+)\] \*/,us=/,? & /,jo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fs=/[()=,{}\[\]\/\s]/,Jo=/\\(\\)?/g,Qo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ta=/\w*$/,Cl=/^[-+]0x[0-9a-f]+$/i,Rl=/^0b[01]+$/i,Pl=/^\[object .+?Constructor\]$/,Ll=/^0o[0-7]+$/i,Il=/^(?:0|[1-9]\d*)$/,P=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,q=/($^)/,et=/['\n\r\u2028\u2029\\]/g,nt="\\ud800-\\udfff",Z="\\u0300-\\u036f",gt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",It=Z+gt+Tt,Ft="\\u2700-\\u27bf",Jt="a-z\\xdf-\\xf6\\xf8-\\xff",Qt="\\xac\\xb1\\xd7\\xf7",Xt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ye="\\u2000-\\u206f",we=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qe="A-Z\\xc0-\\xd6\\xd8-\\xde",Ve="\\ufe0e\\ufe0f",Me=Qt+Xt+ye+we,kt="['’]",rn="["+nt+"]",Se="["+Me+"]",vn="["+It+"]",Fi="\\d+",bn="["+Ft+"]",cr="["+Jt+"]",Oe="[^"+nt+Me+Fi+Ft+Jt+qe+"]",xn="\\ud83c[\\udffb-\\udfff]",Pn="(?:"+vn+"|"+xn+")",fn="[^"+nt+"]",dn="(?:\\ud83c[\\udde6-\\uddff]){2}",Nr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ln="["+qe+"]",Uu="\\u200d",Nu="(?:"+cr+"|"+Oe+")",gg="(?:"+Ln+"|"+Oe+")",Fu="(?:"+kt+"(?:d|ll|m|re|s|t|ve))?",Ou="(?:"+kt+"(?:D|LL|M|RE|S|T|VE))?",Bu=Pn+"?",zu="["+Ve+"]?",_g="(?:"+Uu+"(?:"+[fn,dn,Nr].join("|")+")"+zu+Bu+")*",vg="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xg="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Hu=zu+Bu+_g,yg="(?:"+[bn,dn,Nr].join("|")+")"+Hu,Mg="(?:"+[fn+vn+"?",vn,dn,Nr,rn].join("|")+")",Eg=RegExp(kt,"g"),Sg=RegExp(vn,"g"),Dl=RegExp(xn+"(?="+xn+")|"+Mg+Hu,"g"),wg=RegExp([Ln+"?"+cr+"+"+Fu+"(?="+[Se,Ln,"$"].join("|")+")",gg+"+"+Ou+"(?="+[Se,Ln+Nu,"$"].join("|")+")",Ln+"?"+Nu+"+"+Fu,Ln+"+"+Ou,xg,vg,Fi,yg].join("|"),"g"),bg=RegExp("["+Uu+nt+It+Ve+"]"),Ag=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Tg=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Cg=-1,Ge={};Ge[Lt]=Ge[pe]=Ge[vt]=Ge[Dt]=Ge[qt]=Ge[Zt]=Ge[Ut]=Ge[ue]=Ge[ee]=!0,Ge[_t]=Ge[Pt]=Ge[zt]=Ge[Wt]=Ge[Et]=Ge[fe]=Ge[ze]=Ge[Ie]=Ge[H]=Ge[un]=Ge[te]=Ge[Ht]=Ge[U]=Ge[T]=Ge[pt]=!1;var He={};He[_t]=He[Pt]=He[zt]=He[Et]=He[Wt]=He[fe]=He[Lt]=He[pe]=He[vt]=He[Dt]=He[qt]=He[H]=He[un]=He[te]=He[Ht]=He[U]=He[T]=He[J]=He[Zt]=He[Ut]=He[ue]=He[ee]=!0,He[ze]=He[Ie]=He[pt]=!1;var Rg={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Pg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lg={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ig={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dg=parseFloat,Ug=parseInt,Vu=typeof pl=="object"&&pl&&pl.Object===Object&&pl,Ng=typeof self=="object"&&self&&self.Object===Object&&self,gn=Vu||Ng||Function("return this")(),Ul=t&&!t.nodeType&&t,Fr=Ul&&!0&&a&&!a.nodeType&&a,Gu=Fr&&Fr.exports===Ul,Nl=Gu&&Vu.process,Jn=function(){try{var X=Fr&&Fr.require&&Fr.require("util").types;return X||Nl&&Nl.binding&&Nl.binding("util")}catch{}}(),ku=Jn&&Jn.isArrayBuffer,Wu=Jn&&Jn.isDate,Xu=Jn&&Jn.isMap,qu=Jn&&Jn.isRegExp,Yu=Jn&&Jn.isSet,$u=Jn&&Jn.isTypedArray;function Gn(X,ot,it){switch(it.length){case 0:return X.call(ot);case 1:return X.call(ot,it[0]);case 2:return X.call(ot,it[0],it[1]);case 3:return X.call(ot,it[0],it[1],it[2])}return X.apply(ot,it)}function Fg(X,ot,it,Nt){for(var ne=-1,Te=X==null?0:X.length;++ne<Te;){var sn=X[ne];ot(Nt,sn,it(sn),X)}return Nt}function Qn(X,ot){for(var it=-1,Nt=X==null?0:X.length;++it<Nt&&ot(X[it],it,X)!==!1;);return X}function Og(X,ot){for(var it=X==null?0:X.length;it--&&ot(X[it],it,X)!==!1;);return X}function Ku(X,ot){for(var it=-1,Nt=X==null?0:X.length;++it<Nt;)if(!ot(X[it],it,X))return!1;return!0}function hr(X,ot){for(var it=-1,Nt=X==null?0:X.length,ne=0,Te=[];++it<Nt;){var sn=X[it];ot(sn,it,X)&&(Te[ne++]=sn)}return Te}function ea(X,ot){var it=X==null?0:X.length;return!!it&&ds(X,ot,0)>-1}function Fl(X,ot,it){for(var Nt=-1,ne=X==null?0:X.length;++Nt<ne;)if(it(ot,X[Nt]))return!0;return!1}function Xe(X,ot){for(var it=-1,Nt=X==null?0:X.length,ne=Array(Nt);++it<Nt;)ne[it]=ot(X[it],it,X);return ne}function ur(X,ot){for(var it=-1,Nt=ot.length,ne=X.length;++it<Nt;)X[ne+it]=ot[it];return X}function Ol(X,ot,it,Nt){var ne=-1,Te=X==null?0:X.length;for(Nt&&Te&&(it=X[++ne]);++ne<Te;)it=ot(it,X[ne],ne,X);return it}function Bg(X,ot,it,Nt){var ne=X==null?0:X.length;for(Nt&&ne&&(it=X[--ne]);ne--;)it=ot(it,X[ne],ne,X);return it}function Bl(X,ot){for(var it=-1,Nt=X==null?0:X.length;++it<Nt;)if(ot(X[it],it,X))return!0;return!1}var zg=zl("length");function Hg(X){return X.split("")}function Vg(X){return X.match(jo)||[]}function Zu(X,ot,it){var Nt;return it(X,function(ne,Te,sn){if(ot(ne,Te,sn))return Nt=Te,!1}),Nt}function na(X,ot,it,Nt){for(var ne=X.length,Te=it+(Nt?1:-1);Nt?Te--:++Te<ne;)if(ot(X[Te],Te,X))return Te;return-1}function ds(X,ot,it){return ot===ot?Qg(X,ot,it):na(X,ju,it)}function Gg(X,ot,it,Nt){for(var ne=it-1,Te=X.length;++ne<Te;)if(Nt(X[ne],ot))return ne;return-1}function ju(X){return X!==X}function Ju(X,ot){var it=X==null?0:X.length;return it?Vl(X,ot)/it:yt}function zl(X){return function(ot){return ot==null?e:ot[X]}}function Hl(X){return function(ot){return X==null?e:X[ot]}}function Qu(X,ot,it,Nt,ne){return ne(X,function(Te,sn,Be){it=Nt?(Nt=!1,Te):ot(it,Te,sn,Be)}),it}function kg(X,ot){var it=X.length;for(X.sort(ot);it--;)X[it]=X[it].value;return X}function Vl(X,ot){for(var it,Nt=-1,ne=X.length;++Nt<ne;){var Te=ot(X[Nt]);Te!==e&&(it=it===e?Te:it+Te)}return it}function Gl(X,ot){for(var it=-1,Nt=Array(X);++it<X;)Nt[it]=ot(it);return Nt}function Wg(X,ot){return Xe(ot,function(it){return[it,X[it]]})}function tf(X){return X&&X.slice(0,sf(X)+1).replace(hi,"")}function kn(X){return function(ot){return X(ot)}}function kl(X,ot){return Xe(ot,function(it){return X[it]})}function lo(X,ot){return X.has(ot)}function ef(X,ot){for(var it=-1,Nt=X.length;++it<Nt&&ds(ot,X[it],0)>-1;);return it}function nf(X,ot){for(var it=X.length;it--&&ds(ot,X[it],0)>-1;);return it}function Xg(X,ot){for(var it=X.length,Nt=0;it--;)X[it]===ot&&++Nt;return Nt}var qg=Hl(Rg),Yg=Hl(Pg);function $g(X){return"\\"+Ig[X]}function Kg(X,ot){return X==null?e:X[ot]}function ps(X){return bg.test(X)}function Zg(X){return Ag.test(X)}function jg(X){for(var ot,it=[];!(ot=X.next()).done;)it.push(ot.value);return it}function Wl(X){var ot=-1,it=Array(X.size);return X.forEach(function(Nt,ne){it[++ot]=[ne,Nt]}),it}function rf(X,ot){return function(it){return X(ot(it))}}function fr(X,ot){for(var it=-1,Nt=X.length,ne=0,Te=[];++it<Nt;){var sn=X[it];(sn===ot||sn===d)&&(X[it]=d,Te[ne++]=it)}return Te}function ia(X){var ot=-1,it=Array(X.size);return X.forEach(function(Nt){it[++ot]=Nt}),it}function Jg(X){var ot=-1,it=Array(X.size);return X.forEach(function(Nt){it[++ot]=[Nt,Nt]}),it}function Qg(X,ot,it){for(var Nt=it-1,ne=X.length;++Nt<ne;)if(X[Nt]===ot)return Nt;return-1}function t_(X,ot,it){for(var Nt=it+1;Nt--;)if(X[Nt]===ot)return Nt;return Nt}function ms(X){return ps(X)?n_(X):zg(X)}function ui(X){return ps(X)?i_(X):Hg(X)}function sf(X){for(var ot=X.length;ot--&&ao.test(X.charAt(ot)););return ot}var e_=Hl(Lg);function n_(X){for(var ot=Dl.lastIndex=0;Dl.test(X);)++ot;return ot}function i_(X){return X.match(Dl)||[]}function r_(X){return X.match(wg)||[]}var s_=function X(ot){ot=ot==null?gn:gs.defaults(gn.Object(),ot,gs.pick(gn,Tg));var it=ot.Array,Nt=ot.Date,ne=ot.Error,Te=ot.Function,sn=ot.Math,Be=ot.Object,Xl=ot.RegExp,o_=ot.String,ti=ot.TypeError,ra=it.prototype,a_=Te.prototype,_s=Be.prototype,sa=ot["__core-js_shared__"],oa=a_.toString,Le=_s.hasOwnProperty,l_=0,of=function(){var i=/[^.]+$/.exec(sa&&sa.keys&&sa.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),aa=_s.toString,c_=oa.call(Be),h_=gn._,u_=Xl("^"+oa.call(Le).replace(hs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),la=Gu?ot.Buffer:e,dr=ot.Symbol,ca=ot.Uint8Array,af=la?la.allocUnsafe:e,ha=rf(Be.getPrototypeOf,Be),lf=Be.create,cf=_s.propertyIsEnumerable,ua=ra.splice,hf=dr?dr.isConcatSpreadable:e,co=dr?dr.iterator:e,Or=dr?dr.toStringTag:e,fa=function(){try{var i=Gr(Be,"defineProperty");return i({},"",{}),i}catch{}}(),f_=ot.clearTimeout!==gn.clearTimeout&&ot.clearTimeout,d_=Nt&&Nt.now!==gn.Date.now&&Nt.now,p_=ot.setTimeout!==gn.setTimeout&&ot.setTimeout,da=sn.ceil,pa=sn.floor,ql=Be.getOwnPropertySymbols,m_=la?la.isBuffer:e,uf=ot.isFinite,g_=ra.join,__=rf(Be.keys,Be),on=sn.max,yn=sn.min,v_=Nt.now,x_=ot.parseInt,ff=sn.random,y_=ra.reverse,Yl=Gr(ot,"DataView"),ho=Gr(ot,"Map"),$l=Gr(ot,"Promise"),vs=Gr(ot,"Set"),uo=Gr(ot,"WeakMap"),fo=Gr(Be,"create"),ma=uo&&new uo,xs={},M_=kr(Yl),E_=kr(ho),S_=kr($l),w_=kr(vs),b_=kr(uo),ga=dr?dr.prototype:e,po=ga?ga.valueOf:e,df=ga?ga.toString:e;function R(i){if($e(i)&&!re(i)&&!(i instanceof xe)){if(i instanceof ei)return i;if(Le.call(i,"__wrapped__"))return pd(i)}return new ei(i)}var ys=function(){function i(){}return function(o){if(!Ye(o))return{};if(lf)return lf(o);i.prototype=o;var h=new i;return i.prototype=e,h}}();function _a(){}function ei(i,o){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=e}R.templateSettings={escape:ie,evaluate:We,interpolate:nn,variable:"",imports:{_:R}},R.prototype=_a.prototype,R.prototype.constructor=R,ei.prototype=ys(_a.prototype),ei.prototype.constructor=ei;function xe(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Mt,this.__views__=[]}function A_(){var i=new xe(this.__wrapped__);return i.__actions__=In(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=In(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=In(this.__views__),i}function T_(){if(this.__filtered__){var i=new xe(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function C_(){var i=this.__wrapped__.value(),o=this.__dir__,h=re(i),_=o<0,S=h?i.length:0,L=Hv(0,S,this.__views__),O=L.start,G=L.end,Y=G-O,lt=_?G:O-1,ht=this.__iteratees__,mt=ht.length,wt=0,Vt=yn(Y,this.__takeCount__);if(!h||!_&&S==Y&&Vt==Y)return Of(i,this.__actions__);var $t=[];t:for(;Y--&&wt<Vt;){lt+=o;for(var le=-1,Kt=i[lt];++le<mt;){var me=ht[le],Ee=me.iteratee,qn=me.type,Cn=Ee(Kt);if(qn==$)Kt=Cn;else if(!Cn){if(qn==K)continue t;break t}}$t[wt++]=Kt}return $t}xe.prototype=ys(_a.prototype),xe.prototype.constructor=xe;function Br(i){var o=-1,h=i==null?0:i.length;for(this.clear();++o<h;){var _=i[o];this.set(_[0],_[1])}}function R_(){this.__data__=fo?fo(null):{},this.size=0}function P_(i){var o=this.has(i)&&delete this.__data__[i];return this.size-=o?1:0,o}function L_(i){var o=this.__data__;if(fo){var h=o[i];return h===u?e:h}return Le.call(o,i)?o[i]:e}function I_(i){var o=this.__data__;return fo?o[i]!==e:Le.call(o,i)}function D_(i,o){var h=this.__data__;return this.size+=this.has(i)?0:1,h[i]=fo&&o===e?u:o,this}Br.prototype.clear=R_,Br.prototype.delete=P_,Br.prototype.get=L_,Br.prototype.has=I_,Br.prototype.set=D_;function Oi(i){var o=-1,h=i==null?0:i.length;for(this.clear();++o<h;){var _=i[o];this.set(_[0],_[1])}}function U_(){this.__data__=[],this.size=0}function N_(i){var o=this.__data__,h=va(o,i);if(h<0)return!1;var _=o.length-1;return h==_?o.pop():ua.call(o,h,1),--this.size,!0}function F_(i){var o=this.__data__,h=va(o,i);return h<0?e:o[h][1]}function O_(i){return va(this.__data__,i)>-1}function B_(i,o){var h=this.__data__,_=va(h,i);return _<0?(++this.size,h.push([i,o])):h[_][1]=o,this}Oi.prototype.clear=U_,Oi.prototype.delete=N_,Oi.prototype.get=F_,Oi.prototype.has=O_,Oi.prototype.set=B_;function Bi(i){var o=-1,h=i==null?0:i.length;for(this.clear();++o<h;){var _=i[o];this.set(_[0],_[1])}}function z_(){this.size=0,this.__data__={hash:new Br,map:new(ho||Oi),string:new Br}}function H_(i){var o=Pa(this,i).delete(i);return this.size-=o?1:0,o}function V_(i){return Pa(this,i).get(i)}function G_(i){return Pa(this,i).has(i)}function k_(i,o){var h=Pa(this,i),_=h.size;return h.set(i,o),this.size+=h.size==_?0:1,this}Bi.prototype.clear=z_,Bi.prototype.delete=H_,Bi.prototype.get=V_,Bi.prototype.has=G_,Bi.prototype.set=k_;function zr(i){var o=-1,h=i==null?0:i.length;for(this.__data__=new Bi;++o<h;)this.add(i[o])}function W_(i){return this.__data__.set(i,u),this}function X_(i){return this.__data__.has(i)}zr.prototype.add=zr.prototype.push=W_,zr.prototype.has=X_;function fi(i){var o=this.__data__=new Oi(i);this.size=o.size}function q_(){this.__data__=new Oi,this.size=0}function Y_(i){var o=this.__data__,h=o.delete(i);return this.size=o.size,h}function $_(i){return this.__data__.get(i)}function K_(i){return this.__data__.has(i)}function Z_(i,o){var h=this.__data__;if(h instanceof Oi){var _=h.__data__;if(!ho||_.length<r-1)return _.push([i,o]),this.size=++h.size,this;h=this.__data__=new Bi(_)}return h.set(i,o),this.size=h.size,this}fi.prototype.clear=q_,fi.prototype.delete=Y_,fi.prototype.get=$_,fi.prototype.has=K_,fi.prototype.set=Z_;function pf(i,o){var h=re(i),_=!h&&Wr(i),S=!h&&!_&&vr(i),L=!h&&!_&&!S&&ws(i),O=h||_||S||L,G=O?Gl(i.length,o_):[],Y=G.length;for(var lt in i)(o||Le.call(i,lt))&&!(O&&(lt=="length"||S&&(lt=="offset"||lt=="parent")||L&&(lt=="buffer"||lt=="byteLength"||lt=="byteOffset")||Gi(lt,Y)))&&G.push(lt);return G}function mf(i){var o=i.length;return o?i[sc(0,o-1)]:e}function j_(i,o){return La(In(i),Hr(o,0,i.length))}function J_(i){return La(In(i))}function Kl(i,o,h){(h!==e&&!di(i[o],h)||h===e&&!(o in i))&&zi(i,o,h)}function mo(i,o,h){var _=i[o];(!(Le.call(i,o)&&di(_,h))||h===e&&!(o in i))&&zi(i,o,h)}function va(i,o){for(var h=i.length;h--;)if(di(i[h][0],o))return h;return-1}function Q_(i,o,h,_){return pr(i,function(S,L,O){o(_,S,h(S),O)}),_}function gf(i,o){return i&&wi(o,pn(o),i)}function tv(i,o){return i&&wi(o,Un(o),i)}function zi(i,o,h){o=="__proto__"&&fa?fa(i,o,{configurable:!0,enumerable:!0,value:h,writable:!0}):i[o]=h}function Zl(i,o){for(var h=-1,_=o.length,S=it(_),L=i==null;++h<_;)S[h]=L?e:Pc(i,o[h]);return S}function Hr(i,o,h){return i===i&&(h!==e&&(i=i<=h?i:h),o!==e&&(i=i>=o?i:o)),i}function ni(i,o,h,_,S,L){var O,G=o&m,Y=o&p,lt=o&x;if(h&&(O=S?h(i,_,S,L):h(i)),O!==e)return O;if(!Ye(i))return i;var ht=re(i);if(ht){if(O=Gv(i),!G)return In(i,O)}else{var mt=Mn(i),wt=mt==Ie||mt==de;if(vr(i))return Hf(i,G);if(mt==te||mt==_t||wt&&!S){if(O=Y||wt?{}:sd(i),!G)return Y?Lv(i,tv(O,i)):Pv(i,gf(O,i))}else{if(!He[mt])return S?i:{};O=kv(i,mt,G)}}L||(L=new fi);var Vt=L.get(i);if(Vt)return Vt;L.set(i,O),Ud(i)?i.forEach(function(Kt){O.add(ni(Kt,o,h,Kt,i,L))}):Id(i)&&i.forEach(function(Kt,me){O.set(me,ni(Kt,o,h,me,i,L))});var $t=lt?Y?gc:mc:Y?Un:pn,le=ht?e:$t(i);return Qn(le||i,function(Kt,me){le&&(me=Kt,Kt=i[me]),mo(O,me,ni(Kt,o,h,me,i,L))}),O}function ev(i){var o=pn(i);return function(h){return _f(h,i,o)}}function _f(i,o,h){var _=h.length;if(i==null)return!_;for(i=Be(i);_--;){var S=h[_],L=o[S],O=i[S];if(O===e&&!(S in i)||!L(O))return!1}return!0}function vf(i,o,h){if(typeof i!="function")throw new ti(l);return Eo(function(){i.apply(e,h)},o)}function go(i,o,h,_){var S=-1,L=ea,O=!0,G=i.length,Y=[],lt=o.length;if(!G)return Y;h&&(o=Xe(o,kn(h))),_?(L=Fl,O=!1):o.length>=r&&(L=lo,O=!1,o=new zr(o));t:for(;++S<G;){var ht=i[S],mt=h==null?ht:h(ht);if(ht=_||ht!==0?ht:0,O&&mt===mt){for(var wt=lt;wt--;)if(o[wt]===mt)continue t;Y.push(ht)}else L(o,mt,_)||Y.push(ht)}return Y}var pr=Xf(Si),xf=Xf(Jl,!0);function nv(i,o){var h=!0;return pr(i,function(_,S,L){return h=!!o(_,S,L),h}),h}function xa(i,o,h){for(var _=-1,S=i.length;++_<S;){var L=i[_],O=o(L);if(O!=null&&(G===e?O===O&&!Xn(O):h(O,G)))var G=O,Y=L}return Y}function iv(i,o,h,_){var S=i.length;for(h=se(h),h<0&&(h=-h>S?0:S+h),_=_===e||_>S?S:se(_),_<0&&(_+=S),_=h>_?0:Fd(_);h<_;)i[h++]=o;return i}function yf(i,o){var h=[];return pr(i,function(_,S,L){o(_,S,L)&&h.push(_)}),h}function _n(i,o,h,_,S){var L=-1,O=i.length;for(h||(h=Xv),S||(S=[]);++L<O;){var G=i[L];o>0&&h(G)?o>1?_n(G,o-1,h,_,S):ur(S,G):_||(S[S.length]=G)}return S}var jl=qf(),Mf=qf(!0);function Si(i,o){return i&&jl(i,o,pn)}function Jl(i,o){return i&&Mf(i,o,pn)}function ya(i,o){return hr(o,function(h){return ki(i[h])})}function Vr(i,o){o=gr(o,i);for(var h=0,_=o.length;i!=null&&h<_;)i=i[bi(o[h++])];return h&&h==_?i:e}function Ef(i,o,h){var _=o(i);return re(i)?_:ur(_,h(i))}function An(i){return i==null?i===e?dt:ve:Or&&Or in Be(i)?zv(i):Jv(i)}function Ql(i,o){return i>o}function rv(i,o){return i!=null&&Le.call(i,o)}function sv(i,o){return i!=null&&o in Be(i)}function ov(i,o,h){return i>=yn(o,h)&&i<on(o,h)}function tc(i,o,h){for(var _=h?Fl:ea,S=i[0].length,L=i.length,O=L,G=it(L),Y=1/0,lt=[];O--;){var ht=i[O];O&&o&&(ht=Xe(ht,kn(o))),Y=yn(ht.length,Y),G[O]=!h&&(o||S>=120&&ht.length>=120)?new zr(O&&ht):e}ht=i[0];var mt=-1,wt=G[0];t:for(;++mt<S&&lt.length<Y;){var Vt=ht[mt],$t=o?o(Vt):Vt;if(Vt=h||Vt!==0?Vt:0,!(wt?lo(wt,$t):_(lt,$t,h))){for(O=L;--O;){var le=G[O];if(!(le?lo(le,$t):_(i[O],$t,h)))continue t}wt&&wt.push($t),lt.push(Vt)}}return lt}function av(i,o,h,_){return Si(i,function(S,L,O){o(_,h(S),L,O)}),_}function _o(i,o,h){o=gr(o,i),i=cd(i,o);var _=i==null?i:i[bi(ri(o))];return _==null?e:Gn(_,i,h)}function Sf(i){return $e(i)&&An(i)==_t}function lv(i){return $e(i)&&An(i)==zt}function cv(i){return $e(i)&&An(i)==fe}function vo(i,o,h,_,S){return i===o?!0:i==null||o==null||!$e(i)&&!$e(o)?i!==i&&o!==o:hv(i,o,h,_,vo,S)}function hv(i,o,h,_,S,L){var O=re(i),G=re(o),Y=O?Pt:Mn(i),lt=G?Pt:Mn(o);Y=Y==_t?te:Y,lt=lt==_t?te:lt;var ht=Y==te,mt=lt==te,wt=Y==lt;if(wt&&vr(i)){if(!vr(o))return!1;O=!0,ht=!1}if(wt&&!ht)return L||(L=new fi),O||ws(i)?nd(i,o,h,_,S,L):Ov(i,o,Y,h,_,S,L);if(!(h&y)){var Vt=ht&&Le.call(i,"__wrapped__"),$t=mt&&Le.call(o,"__wrapped__");if(Vt||$t){var le=Vt?i.value():i,Kt=$t?o.value():o;return L||(L=new fi),S(le,Kt,h,_,L)}}return wt?(L||(L=new fi),Bv(i,o,h,_,S,L)):!1}function uv(i){return $e(i)&&Mn(i)==H}function ec(i,o,h,_){var S=h.length,L=S,O=!_;if(i==null)return!L;for(i=Be(i);S--;){var G=h[S];if(O&&G[2]?G[1]!==i[G[0]]:!(G[0]in i))return!1}for(;++S<L;){G=h[S];var Y=G[0],lt=i[Y],ht=G[1];if(O&&G[2]){if(lt===e&&!(Y in i))return!1}else{var mt=new fi;if(_)var wt=_(lt,ht,Y,i,o,mt);if(!(wt===e?vo(ht,lt,y|M,_,mt):wt))return!1}}return!0}function wf(i){if(!Ye(i)||Yv(i))return!1;var o=ki(i)?u_:Pl;return o.test(kr(i))}function fv(i){return $e(i)&&An(i)==Ht}function dv(i){return $e(i)&&Mn(i)==U}function pv(i){return $e(i)&&Oa(i.length)&&!!Ge[An(i)]}function bf(i){return typeof i=="function"?i:i==null?Nn:typeof i=="object"?re(i)?Cf(i[0],i[1]):Tf(i):Yd(i)}function nc(i){if(!Mo(i))return __(i);var o=[];for(var h in Be(i))Le.call(i,h)&&h!="constructor"&&o.push(h);return o}function mv(i){if(!Ye(i))return jv(i);var o=Mo(i),h=[];for(var _ in i)_=="constructor"&&(o||!Le.call(i,_))||h.push(_);return h}function ic(i,o){return i<o}function Af(i,o){var h=-1,_=Dn(i)?it(i.length):[];return pr(i,function(S,L,O){_[++h]=o(S,L,O)}),_}function Tf(i){var o=vc(i);return o.length==1&&o[0][2]?ad(o[0][0],o[0][1]):function(h){return h===i||ec(h,i,o)}}function Cf(i,o){return yc(i)&&od(o)?ad(bi(i),o):function(h){var _=Pc(h,i);return _===e&&_===o?Lc(h,i):vo(o,_,y|M)}}function Ma(i,o,h,_,S){i!==o&&jl(o,function(L,O){if(S||(S=new fi),Ye(L))gv(i,o,O,h,Ma,_,S);else{var G=_?_(Ec(i,O),L,O+"",i,o,S):e;G===e&&(G=L),Kl(i,O,G)}},Un)}function gv(i,o,h,_,S,L,O){var G=Ec(i,h),Y=Ec(o,h),lt=O.get(Y);if(lt){Kl(i,h,lt);return}var ht=L?L(G,Y,h+"",i,o,O):e,mt=ht===e;if(mt){var wt=re(Y),Vt=!wt&&vr(Y),$t=!wt&&!Vt&&ws(Y);ht=Y,wt||Vt||$t?re(G)?ht=G:je(G)?ht=In(G):Vt?(mt=!1,ht=Hf(Y,!0)):$t?(mt=!1,ht=Vf(Y,!0)):ht=[]:So(Y)||Wr(Y)?(ht=G,Wr(G)?ht=Od(G):(!Ye(G)||ki(G))&&(ht=sd(Y))):mt=!1}mt&&(O.set(Y,ht),S(ht,Y,_,L,O),O.delete(Y)),Kl(i,h,ht)}function Rf(i,o){var h=i.length;if(h)return o+=o<0?h:0,Gi(o,h)?i[o]:e}function Pf(i,o,h){o.length?o=Xe(o,function(L){return re(L)?function(O){return Vr(O,L.length===1?L[0]:L)}:L}):o=[Nn];var _=-1;o=Xe(o,kn(Yt()));var S=Af(i,function(L,O,G){var Y=Xe(o,function(lt){return lt(L)});return{criteria:Y,index:++_,value:L}});return kg(S,function(L,O){return Rv(L,O,h)})}function _v(i,o){return Lf(i,o,function(h,_){return Lc(i,_)})}function Lf(i,o,h){for(var _=-1,S=o.length,L={};++_<S;){var O=o[_],G=Vr(i,O);h(G,O)&&xo(L,gr(O,i),G)}return L}function vv(i){return function(o){return Vr(o,i)}}function rc(i,o,h,_){var S=_?Gg:ds,L=-1,O=o.length,G=i;for(i===o&&(o=In(o)),h&&(G=Xe(i,kn(h)));++L<O;)for(var Y=0,lt=o[L],ht=h?h(lt):lt;(Y=S(G,ht,Y,_))>-1;)G!==i&&ua.call(G,Y,1),ua.call(i,Y,1);return i}function If(i,o){for(var h=i?o.length:0,_=h-1;h--;){var S=o[h];if(h==_||S!==L){var L=S;Gi(S)?ua.call(i,S,1):lc(i,S)}}return i}function sc(i,o){return i+pa(ff()*(o-i+1))}function xv(i,o,h,_){for(var S=-1,L=on(da((o-i)/(h||1)),0),O=it(L);L--;)O[_?L:++S]=i,i+=h;return O}function oc(i,o){var h="";if(!i||o<1||o>j)return h;do o%2&&(h+=i),o=pa(o/2),o&&(i+=i);while(o);return h}function he(i,o){return Sc(ld(i,o,Nn),i+"")}function yv(i){return mf(bs(i))}function Mv(i,o){var h=bs(i);return La(h,Hr(o,0,h.length))}function xo(i,o,h,_){if(!Ye(i))return i;o=gr(o,i);for(var S=-1,L=o.length,O=L-1,G=i;G!=null&&++S<L;){var Y=bi(o[S]),lt=h;if(Y==="__proto__"||Y==="constructor"||Y==="prototype")return i;if(S!=O){var ht=G[Y];lt=_?_(ht,Y,G):e,lt===e&&(lt=Ye(ht)?ht:Gi(o[S+1])?[]:{})}mo(G,Y,lt),G=G[Y]}return i}var Df=ma?function(i,o){return ma.set(i,o),i}:Nn,Ev=fa?function(i,o){return fa(i,"toString",{configurable:!0,enumerable:!1,value:Dc(o),writable:!0})}:Nn;function Sv(i){return La(bs(i))}function ii(i,o,h){var _=-1,S=i.length;o<0&&(o=-o>S?0:S+o),h=h>S?S:h,h<0&&(h+=S),S=o>h?0:h-o>>>0,o>>>=0;for(var L=it(S);++_<S;)L[_]=i[_+o];return L}function wv(i,o){var h;return pr(i,function(_,S,L){return h=o(_,S,L),!h}),!!h}function Ea(i,o,h){var _=0,S=i==null?_:i.length;if(typeof o=="number"&&o===o&&S<=_e){for(;_<S;){var L=_+S>>>1,O=i[L];O!==null&&!Xn(O)&&(h?O<=o:O<o)?_=L+1:S=L}return S}return ac(i,o,Nn,h)}function ac(i,o,h,_){var S=0,L=i==null?0:i.length;if(L===0)return 0;o=h(o);for(var O=o!==o,G=o===null,Y=Xn(o),lt=o===e;S<L;){var ht=pa((S+L)/2),mt=h(i[ht]),wt=mt!==e,Vt=mt===null,$t=mt===mt,le=Xn(mt);if(O)var Kt=_||$t;else lt?Kt=$t&&(_||wt):G?Kt=$t&&wt&&(_||!Vt):Y?Kt=$t&&wt&&!Vt&&(_||!le):Vt||le?Kt=!1:Kt=_?mt<=o:mt<o;Kt?S=ht+1:L=ht}return yn(L,xt)}function Uf(i,o){for(var h=-1,_=i.length,S=0,L=[];++h<_;){var O=i[h],G=o?o(O):O;if(!h||!di(G,Y)){var Y=G;L[S++]=O===0?0:O}}return L}function Nf(i){return typeof i=="number"?i:Xn(i)?yt:+i}function Wn(i){if(typeof i=="string")return i;if(re(i))return Xe(i,Wn)+"";if(Xn(i))return df?df.call(i):"";var o=i+"";return o=="0"&&1/i==-1/0?"-0":o}function mr(i,o,h){var _=-1,S=ea,L=i.length,O=!0,G=[],Y=G;if(h)O=!1,S=Fl;else if(L>=r){var lt=o?null:Nv(i);if(lt)return ia(lt);O=!1,S=lo,Y=new zr}else Y=o?[]:G;t:for(;++_<L;){var ht=i[_],mt=o?o(ht):ht;if(ht=h||ht!==0?ht:0,O&&mt===mt){for(var wt=Y.length;wt--;)if(Y[wt]===mt)continue t;o&&Y.push(mt),G.push(ht)}else S(Y,mt,h)||(Y!==G&&Y.push(mt),G.push(ht))}return G}function lc(i,o){return o=gr(o,i),i=cd(i,o),i==null||delete i[bi(ri(o))]}function Ff(i,o,h,_){return xo(i,o,h(Vr(i,o)),_)}function Sa(i,o,h,_){for(var S=i.length,L=_?S:-1;(_?L--:++L<S)&&o(i[L],L,i););return h?ii(i,_?0:L,_?L+1:S):ii(i,_?L+1:0,_?S:L)}function Of(i,o){var h=i;return h instanceof xe&&(h=h.value()),Ol(o,function(_,S){return S.func.apply(S.thisArg,ur([_],S.args))},h)}function cc(i,o,h){var _=i.length;if(_<2)return _?mr(i[0]):[];for(var S=-1,L=it(_);++S<_;)for(var O=i[S],G=-1;++G<_;)G!=S&&(L[S]=go(L[S]||O,i[G],o,h));return mr(_n(L,1),o,h)}function Bf(i,o,h){for(var _=-1,S=i.length,L=o.length,O={};++_<S;){var G=_<L?o[_]:e;h(O,i[_],G)}return O}function hc(i){return je(i)?i:[]}function uc(i){return typeof i=="function"?i:Nn}function gr(i,o){return re(i)?i:yc(i,o)?[i]:dd(Pe(i))}var bv=he;function _r(i,o,h){var _=i.length;return h=h===e?_:h,!o&&h>=_?i:ii(i,o,h)}var zf=f_||function(i){return gn.clearTimeout(i)};function Hf(i,o){if(o)return i.slice();var h=i.length,_=af?af(h):new i.constructor(h);return i.copy(_),_}function fc(i){var o=new i.constructor(i.byteLength);return new ca(o).set(new ca(i)),o}function Av(i,o){var h=o?fc(i.buffer):i.buffer;return new i.constructor(h,i.byteOffset,i.byteLength)}function Tv(i){var o=new i.constructor(i.source,ta.exec(i));return o.lastIndex=i.lastIndex,o}function Cv(i){return po?Be(po.call(i)):{}}function Vf(i,o){var h=o?fc(i.buffer):i.buffer;return new i.constructor(h,i.byteOffset,i.length)}function Gf(i,o){if(i!==o){var h=i!==e,_=i===null,S=i===i,L=Xn(i),O=o!==e,G=o===null,Y=o===o,lt=Xn(o);if(!G&&!lt&&!L&&i>o||L&&O&&Y&&!G&&!lt||_&&O&&Y||!h&&Y||!S)return 1;if(!_&&!L&&!lt&&i<o||lt&&h&&S&&!_&&!L||G&&h&&S||!O&&S||!Y)return-1}return 0}function Rv(i,o,h){for(var _=-1,S=i.criteria,L=o.criteria,O=S.length,G=h.length;++_<O;){var Y=Gf(S[_],L[_]);if(Y){if(_>=G)return Y;var lt=h[_];return Y*(lt=="desc"?-1:1)}}return i.index-o.index}function kf(i,o,h,_){for(var S=-1,L=i.length,O=h.length,G=-1,Y=o.length,lt=on(L-O,0),ht=it(Y+lt),mt=!_;++G<Y;)ht[G]=o[G];for(;++S<O;)(mt||S<L)&&(ht[h[S]]=i[S]);for(;lt--;)ht[G++]=i[S++];return ht}function Wf(i,o,h,_){for(var S=-1,L=i.length,O=-1,G=h.length,Y=-1,lt=o.length,ht=on(L-G,0),mt=it(ht+lt),wt=!_;++S<ht;)mt[S]=i[S];for(var Vt=S;++Y<lt;)mt[Vt+Y]=o[Y];for(;++O<G;)(wt||S<L)&&(mt[Vt+h[O]]=i[S++]);return mt}function In(i,o){var h=-1,_=i.length;for(o||(o=it(_));++h<_;)o[h]=i[h];return o}function wi(i,o,h,_){var S=!h;h||(h={});for(var L=-1,O=o.length;++L<O;){var G=o[L],Y=_?_(h[G],i[G],G,h,i):e;Y===e&&(Y=i[G]),S?zi(h,G,Y):mo(h,G,Y)}return h}function Pv(i,o){return wi(i,xc(i),o)}function Lv(i,o){return wi(i,id(i),o)}function wa(i,o){return function(h,_){var S=re(h)?Fg:Q_,L=o?o():{};return S(h,i,Yt(_,2),L)}}function Ms(i){return he(function(o,h){var _=-1,S=h.length,L=S>1?h[S-1]:e,O=S>2?h[2]:e;for(L=i.length>3&&typeof L=="function"?(S--,L):e,O&&Tn(h[0],h[1],O)&&(L=S<3?e:L,S=1),o=Be(o);++_<S;){var G=h[_];G&&i(o,G,_,L)}return o})}function Xf(i,o){return function(h,_){if(h==null)return h;if(!Dn(h))return i(h,_);for(var S=h.length,L=o?S:-1,O=Be(h);(o?L--:++L<S)&&_(O[L],L,O)!==!1;);return h}}function qf(i){return function(o,h,_){for(var S=-1,L=Be(o),O=_(o),G=O.length;G--;){var Y=O[i?G:++S];if(h(L[Y],Y,L)===!1)break}return o}}function Iv(i,o,h){var _=o&v,S=yo(i);function L(){var O=this&&this!==gn&&this instanceof L?S:i;return O.apply(_?h:this,arguments)}return L}function Yf(i){return function(o){o=Pe(o);var h=ps(o)?ui(o):e,_=h?h[0]:o.charAt(0),S=h?_r(h,1).join(""):o.slice(1);return _[i]()+S}}function Es(i){return function(o){return Ol(Xd(Wd(o).replace(Eg,"")),i,"")}}function yo(i){return function(){var o=arguments;switch(o.length){case 0:return new i;case 1:return new i(o[0]);case 2:return new i(o[0],o[1]);case 3:return new i(o[0],o[1],o[2]);case 4:return new i(o[0],o[1],o[2],o[3]);case 5:return new i(o[0],o[1],o[2],o[3],o[4]);case 6:return new i(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new i(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var h=ys(i.prototype),_=i.apply(h,o);return Ye(_)?_:h}}function Dv(i,o,h){var _=yo(i);function S(){for(var L=arguments.length,O=it(L),G=L,Y=Ss(S);G--;)O[G]=arguments[G];var lt=L<3&&O[0]!==Y&&O[L-1]!==Y?[]:fr(O,Y);if(L-=lt.length,L<h)return Jf(i,o,ba,S.placeholder,e,O,lt,e,e,h-L);var ht=this&&this!==gn&&this instanceof S?_:i;return Gn(ht,this,O)}return S}function $f(i){return function(o,h,_){var S=Be(o);if(!Dn(o)){var L=Yt(h,3);o=pn(o),h=function(G){return L(S[G],G,S)}}var O=i(o,h,_);return O>-1?S[L?o[O]:O]:e}}function Kf(i){return Vi(function(o){var h=o.length,_=h,S=ei.prototype.thru;for(i&&o.reverse();_--;){var L=o[_];if(typeof L!="function")throw new ti(l);if(S&&!O&&Ra(L)=="wrapper")var O=new ei([],!0)}for(_=O?_:h;++_<h;){L=o[_];var G=Ra(L),Y=G=="wrapper"?_c(L):e;Y&&Mc(Y[0])&&Y[1]==(N|C|F|V)&&!Y[4].length&&Y[9]==1?O=O[Ra(Y[0])].apply(O,Y[3]):O=L.length==1&&Mc(L)?O[G]():O.thru(L)}return function(){var lt=arguments,ht=lt[0];if(O&&lt.length==1&&re(ht))return O.plant(ht).value();for(var mt=0,wt=h?o[mt].apply(this,lt):ht;++mt<h;)wt=o[mt].call(this,wt);return wt}})}function ba(i,o,h,_,S,L,O,G,Y,lt){var ht=o&N,mt=o&v,wt=o&g,Vt=o&(C|w),$t=o&I,le=wt?e:yo(i);function Kt(){for(var me=arguments.length,Ee=it(me),qn=me;qn--;)Ee[qn]=arguments[qn];if(Vt)var Cn=Ss(Kt),Yn=Xg(Ee,Cn);if(_&&(Ee=kf(Ee,_,S,Vt)),L&&(Ee=Wf(Ee,L,O,Vt)),me-=Yn,Vt&&me<lt){var Je=fr(Ee,Cn);return Jf(i,o,ba,Kt.placeholder,h,Ee,Je,G,Y,lt-me)}var pi=mt?h:this,Xi=wt?pi[i]:i;return me=Ee.length,G?Ee=Qv(Ee,G):$t&&me>1&&Ee.reverse(),ht&&Y<me&&(Ee.length=Y),this&&this!==gn&&this instanceof Kt&&(Xi=le||yo(Xi)),Xi.apply(pi,Ee)}return Kt}function Zf(i,o){return function(h,_){return av(h,i,o(_),{})}}function Aa(i,o){return function(h,_){var S;if(h===e&&_===e)return o;if(h!==e&&(S=h),_!==e){if(S===e)return _;typeof h=="string"||typeof _=="string"?(h=Wn(h),_=Wn(_)):(h=Nf(h),_=Nf(_)),S=i(h,_)}return S}}function dc(i){return Vi(function(o){return o=Xe(o,kn(Yt())),he(function(h){var _=this;return i(o,function(S){return Gn(S,_,h)})})})}function Ta(i,o){o=o===e?" ":Wn(o);var h=o.length;if(h<2)return h?oc(o,i):o;var _=oc(o,da(i/ms(o)));return ps(o)?_r(ui(_),0,i).join(""):_.slice(0,i)}function Uv(i,o,h,_){var S=o&v,L=yo(i);function O(){for(var G=-1,Y=arguments.length,lt=-1,ht=_.length,mt=it(ht+Y),wt=this&&this!==gn&&this instanceof O?L:i;++lt<ht;)mt[lt]=_[lt];for(;Y--;)mt[lt++]=arguments[++G];return Gn(wt,S?h:this,mt)}return O}function jf(i){return function(o,h,_){return _&&typeof _!="number"&&Tn(o,h,_)&&(h=_=e),o=Wi(o),h===e?(h=o,o=0):h=Wi(h),_=_===e?o<h?1:-1:Wi(_),xv(o,h,_,i)}}function Ca(i){return function(o,h){return typeof o=="string"&&typeof h=="string"||(o=si(o),h=si(h)),i(o,h)}}function Jf(i,o,h,_,S,L,O,G,Y,lt){var ht=o&C,mt=ht?O:e,wt=ht?e:O,Vt=ht?L:e,$t=ht?e:L;o|=ht?F:D,o&=~(ht?D:F),o&E||(o&=-4);var le=[i,o,S,Vt,mt,$t,wt,G,Y,lt],Kt=h.apply(e,le);return Mc(i)&&hd(Kt,le),Kt.placeholder=_,ud(Kt,i,o)}function pc(i){var o=sn[i];return function(h,_){if(h=si(h),_=_==null?0:yn(se(_),292),_&&uf(h)){var S=(Pe(h)+"e").split("e"),L=o(S[0]+"e"+(+S[1]+_));return S=(Pe(L)+"e").split("e"),+(S[0]+"e"+(+S[1]-_))}return o(h)}}var Nv=vs&&1/ia(new vs([,-0]))[1]==st?function(i){return new vs(i)}:Fc;function Qf(i){return function(o){var h=Mn(o);return h==H?Wl(o):h==U?Jg(o):Wg(o,i(o))}}function Hi(i,o,h,_,S,L,O,G){var Y=o&g;if(!Y&&typeof i!="function")throw new ti(l);var lt=_?_.length:0;if(lt||(o&=-97,_=S=e),O=O===e?O:on(se(O),0),G=G===e?G:se(G),lt-=S?S.length:0,o&D){var ht=_,mt=S;_=S=e}var wt=Y?e:_c(i),Vt=[i,o,h,_,S,ht,mt,L,O,G];if(wt&&Zv(Vt,wt),i=Vt[0],o=Vt[1],h=Vt[2],_=Vt[3],S=Vt[4],G=Vt[9]=Vt[9]===e?Y?0:i.length:on(Vt[9]-lt,0),!G&&o&(C|w)&&(o&=-25),!o||o==v)var $t=Iv(i,o,h);else o==C||o==w?$t=Dv(i,o,G):(o==F||o==(v|F))&&!S.length?$t=Uv(i,o,h,_):$t=ba.apply(e,Vt);var le=wt?Df:hd;return ud(le($t,Vt),i,o)}function td(i,o,h,_){return i===e||di(i,_s[h])&&!Le.call(_,h)?o:i}function ed(i,o,h,_,S,L){return Ye(i)&&Ye(o)&&(L.set(o,i),Ma(i,o,e,ed,L),L.delete(o)),i}function Fv(i){return So(i)?e:i}function nd(i,o,h,_,S,L){var O=h&y,G=i.length,Y=o.length;if(G!=Y&&!(O&&Y>G))return!1;var lt=L.get(i),ht=L.get(o);if(lt&&ht)return lt==o&&ht==i;var mt=-1,wt=!0,Vt=h&M?new zr:e;for(L.set(i,o),L.set(o,i);++mt<G;){var $t=i[mt],le=o[mt];if(_)var Kt=O?_(le,$t,mt,o,i,L):_($t,le,mt,i,o,L);if(Kt!==e){if(Kt)continue;wt=!1;break}if(Vt){if(!Bl(o,function(me,Ee){if(!lo(Vt,Ee)&&($t===me||S($t,me,h,_,L)))return Vt.push(Ee)})){wt=!1;break}}else if(!($t===le||S($t,le,h,_,L))){wt=!1;break}}return L.delete(i),L.delete(o),wt}function Ov(i,o,h,_,S,L,O){switch(h){case Et:if(i.byteLength!=o.byteLength||i.byteOffset!=o.byteOffset)return!1;i=i.buffer,o=o.buffer;case zt:return!(i.byteLength!=o.byteLength||!L(new ca(i),new ca(o)));case Wt:case fe:case un:return di(+i,+o);case ze:return i.name==o.name&&i.message==o.message;case Ht:case T:return i==o+"";case H:var G=Wl;case U:var Y=_&y;if(G||(G=ia),i.size!=o.size&&!Y)return!1;var lt=O.get(i);if(lt)return lt==o;_|=M,O.set(i,o);var ht=nd(G(i),G(o),_,S,L,O);return O.delete(i),ht;case J:if(po)return po.call(i)==po.call(o)}return!1}function Bv(i,o,h,_,S,L){var O=h&y,G=mc(i),Y=G.length,lt=mc(o),ht=lt.length;if(Y!=ht&&!O)return!1;for(var mt=Y;mt--;){var wt=G[mt];if(!(O?wt in o:Le.call(o,wt)))return!1}var Vt=L.get(i),$t=L.get(o);if(Vt&&$t)return Vt==o&&$t==i;var le=!0;L.set(i,o),L.set(o,i);for(var Kt=O;++mt<Y;){wt=G[mt];var me=i[wt],Ee=o[wt];if(_)var qn=O?_(Ee,me,wt,o,i,L):_(me,Ee,wt,i,o,L);if(!(qn===e?me===Ee||S(me,Ee,h,_,L):qn)){le=!1;break}Kt||(Kt=wt=="constructor")}if(le&&!Kt){var Cn=i.constructor,Yn=o.constructor;Cn!=Yn&&"constructor"in i&&"constructor"in o&&!(typeof Cn=="function"&&Cn instanceof Cn&&typeof Yn=="function"&&Yn instanceof Yn)&&(le=!1)}return L.delete(i),L.delete(o),le}function Vi(i){return Sc(ld(i,e,_d),i+"")}function mc(i){return Ef(i,pn,xc)}function gc(i){return Ef(i,Un,id)}var _c=ma?function(i){return ma.get(i)}:Fc;function Ra(i){for(var o=i.name+"",h=xs[o],_=Le.call(xs,o)?h.length:0;_--;){var S=h[_],L=S.func;if(L==null||L==i)return S.name}return o}function Ss(i){var o=Le.call(R,"placeholder")?R:i;return o.placeholder}function Yt(){var i=R.iteratee||Uc;return i=i===Uc?bf:i,arguments.length?i(arguments[0],arguments[1]):i}function Pa(i,o){var h=i.__data__;return qv(o)?h[typeof o=="string"?"string":"hash"]:h.map}function vc(i){for(var o=pn(i),h=o.length;h--;){var _=o[h],S=i[_];o[h]=[_,S,od(S)]}return o}function Gr(i,o){var h=Kg(i,o);return wf(h)?h:e}function zv(i){var o=Le.call(i,Or),h=i[Or];try{i[Or]=e;var _=!0}catch{}var S=aa.call(i);return _&&(o?i[Or]=h:delete i[Or]),S}var xc=ql?function(i){return i==null?[]:(i=Be(i),hr(ql(i),function(o){return cf.call(i,o)}))}:Oc,id=ql?function(i){for(var o=[];i;)ur(o,xc(i)),i=ha(i);return o}:Oc,Mn=An;(Yl&&Mn(new Yl(new ArrayBuffer(1)))!=Et||ho&&Mn(new ho)!=H||$l&&Mn($l.resolve())!=Gt||vs&&Mn(new vs)!=U||uo&&Mn(new uo)!=pt)&&(Mn=function(i){var o=An(i),h=o==te?i.constructor:e,_=h?kr(h):"";if(_)switch(_){case M_:return Et;case E_:return H;case S_:return Gt;case w_:return U;case b_:return pt}return o});function Hv(i,o,h){for(var _=-1,S=h.length;++_<S;){var L=h[_],O=L.size;switch(L.type){case"drop":i+=O;break;case"dropRight":o-=O;break;case"take":o=yn(o,i+O);break;case"takeRight":i=on(i,o-O);break}}return{start:i,end:o}}function Vv(i){var o=i.match(Zo);return o?o[1].split(us):[]}function rd(i,o,h){o=gr(o,i);for(var _=-1,S=o.length,L=!1;++_<S;){var O=bi(o[_]);if(!(L=i!=null&&h(i,O)))break;i=i[O]}return L||++_!=S?L:(S=i==null?0:i.length,!!S&&Oa(S)&&Gi(O,S)&&(re(i)||Wr(i)))}function Gv(i){var o=i.length,h=new i.constructor(o);return o&&typeof i[0]=="string"&&Le.call(i,"index")&&(h.index=i.index,h.input=i.input),h}function sd(i){return typeof i.constructor=="function"&&!Mo(i)?ys(ha(i)):{}}function kv(i,o,h){var _=i.constructor;switch(o){case zt:return fc(i);case Wt:case fe:return new _(+i);case Et:return Av(i,h);case Lt:case pe:case vt:case Dt:case qt:case Zt:case Ut:case ue:case ee:return Vf(i,h);case H:return new _;case un:case T:return new _(i);case Ht:return Tv(i);case U:return new _;case J:return Cv(i)}}function Wv(i,o){var h=o.length;if(!h)return i;var _=h-1;return o[_]=(h>1?"& ":"")+o[_],o=o.join(h>2?", ":" "),i.replace(Ko,`{
/* [wrapped with `+o+`] */
`)}function Xv(i){return re(i)||Wr(i)||!!(hf&&i&&i[hf])}function Gi(i,o){var h=typeof i;return o=o??j,!!o&&(h=="number"||h!="symbol"&&Il.test(i))&&i>-1&&i%1==0&&i<o}function Tn(i,o,h){if(!Ye(h))return!1;var _=typeof o;return(_=="number"?Dn(h)&&Gi(o,h.length):_=="string"&&o in h)?di(h[o],i):!1}function yc(i,o){if(re(i))return!1;var h=typeof i;return h=="number"||h=="symbol"||h=="boolean"||i==null||Xn(i)?!0:Vn.test(i)||!Ae.test(i)||o!=null&&i in Be(o)}function qv(i){var o=typeof i;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?i!=="__proto__":i===null}function Mc(i){var o=Ra(i),h=R[o];if(typeof h!="function"||!(o in xe.prototype))return!1;if(i===h)return!0;var _=_c(h);return!!_&&i===_[0]}function Yv(i){return!!of&&of in i}var $v=sa?ki:Bc;function Mo(i){var o=i&&i.constructor,h=typeof o=="function"&&o.prototype||_s;return i===h}function od(i){return i===i&&!Ye(i)}function ad(i,o){return function(h){return h==null?!1:h[i]===o&&(o!==e||i in Be(h))}}function Kv(i){var o=Na(i,function(_){return h.size===f&&h.clear(),_}),h=o.cache;return o}function Zv(i,o){var h=i[1],_=o[1],S=h|_,L=S<(v|g|N),O=_==N&&h==C||_==N&&h==V&&i[7].length<=o[8]||_==(N|V)&&o[7].length<=o[8]&&h==C;if(!(L||O))return i;_&v&&(i[2]=o[2],S|=h&v?0:E);var G=o[3];if(G){var Y=i[3];i[3]=Y?kf(Y,G,o[4]):G,i[4]=Y?fr(i[3],d):o[4]}return G=o[5],G&&(Y=i[5],i[5]=Y?Wf(Y,G,o[6]):G,i[6]=Y?fr(i[5],d):o[6]),G=o[7],G&&(i[7]=G),_&N&&(i[8]=i[8]==null?o[8]:yn(i[8],o[8])),i[9]==null&&(i[9]=o[9]),i[0]=o[0],i[1]=S,i}function jv(i){var o=[];if(i!=null)for(var h in Be(i))o.push(h);return o}function Jv(i){return aa.call(i)}function ld(i,o,h){return o=on(o===e?i.length-1:o,0),function(){for(var _=arguments,S=-1,L=on(_.length-o,0),O=it(L);++S<L;)O[S]=_[o+S];S=-1;for(var G=it(o+1);++S<o;)G[S]=_[S];return G[o]=h(O),Gn(i,this,G)}}function cd(i,o){return o.length<2?i:Vr(i,ii(o,0,-1))}function Qv(i,o){for(var h=i.length,_=yn(o.length,h),S=In(i);_--;){var L=o[_];i[_]=Gi(L,h)?S[L]:e}return i}function Ec(i,o){if(!(o==="constructor"&&typeof i[o]=="function")&&o!="__proto__")return i[o]}var hd=fd(Df),Eo=p_||function(i,o){return gn.setTimeout(i,o)},Sc=fd(Ev);function ud(i,o,h){var _=o+"";return Sc(i,Wv(_,t0(Vv(_),h)))}function fd(i){var o=0,h=0;return function(){var _=v_(),S=z-(_-h);if(h=_,S>0){if(++o>=tt)return arguments[0]}else o=0;return i.apply(e,arguments)}}function La(i,o){var h=-1,_=i.length,S=_-1;for(o=o===e?_:o;++h<o;){var L=sc(h,S),O=i[L];i[L]=i[h],i[h]=O}return i.length=o,i}var dd=Kv(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(ci,function(h,_,S,L){o.push(S?L.replace(Jo,"$1"):_||h)}),o});function bi(i){if(typeof i=="string"||Xn(i))return i;var o=i+"";return o=="0"&&1/i==-1/0?"-0":o}function kr(i){if(i!=null){try{return oa.call(i)}catch{}try{return i+""}catch{}}return""}function t0(i,o){return Qn(at,function(h){var _="_."+h[0];o&h[1]&&!ea(i,_)&&i.push(_)}),i.sort()}function pd(i){if(i instanceof xe)return i.clone();var o=new ei(i.__wrapped__,i.__chain__);return o.__actions__=In(i.__actions__),o.__index__=i.__index__,o.__values__=i.__values__,o}function e0(i,o,h){(h?Tn(i,o,h):o===e)?o=1:o=on(se(o),0);var _=i==null?0:i.length;if(!_||o<1)return[];for(var S=0,L=0,O=it(da(_/o));S<_;)O[L++]=ii(i,S,S+=o);return O}function n0(i){for(var o=-1,h=i==null?0:i.length,_=0,S=[];++o<h;){var L=i[o];L&&(S[_++]=L)}return S}function i0(){var i=arguments.length;if(!i)return[];for(var o=it(i-1),h=arguments[0],_=i;_--;)o[_-1]=arguments[_];return ur(re(h)?In(h):[h],_n(o,1))}var r0=he(function(i,o){return je(i)?go(i,_n(o,1,je,!0)):[]}),s0=he(function(i,o){var h=ri(o);return je(h)&&(h=e),je(i)?go(i,_n(o,1,je,!0),Yt(h,2)):[]}),o0=he(function(i,o){var h=ri(o);return je(h)&&(h=e),je(i)?go(i,_n(o,1,je,!0),e,h):[]});function a0(i,o,h){var _=i==null?0:i.length;return _?(o=h||o===e?1:se(o),ii(i,o<0?0:o,_)):[]}function l0(i,o,h){var _=i==null?0:i.length;return _?(o=h||o===e?1:se(o),o=_-o,ii(i,0,o<0?0:o)):[]}function c0(i,o){return i&&i.length?Sa(i,Yt(o,3),!0,!0):[]}function h0(i,o){return i&&i.length?Sa(i,Yt(o,3),!0):[]}function u0(i,o,h,_){var S=i==null?0:i.length;return S?(h&&typeof h!="number"&&Tn(i,o,h)&&(h=0,_=S),iv(i,o,h,_)):[]}function md(i,o,h){var _=i==null?0:i.length;if(!_)return-1;var S=h==null?0:se(h);return S<0&&(S=on(_+S,0)),na(i,Yt(o,3),S)}function gd(i,o,h){var _=i==null?0:i.length;if(!_)return-1;var S=_-1;return h!==e&&(S=se(h),S=h<0?on(_+S,0):yn(S,_-1)),na(i,Yt(o,3),S,!0)}function _d(i){var o=i==null?0:i.length;return o?_n(i,1):[]}function f0(i){var o=i==null?0:i.length;return o?_n(i,st):[]}function d0(i,o){var h=i==null?0:i.length;return h?(o=o===e?1:se(o),_n(i,o)):[]}function p0(i){for(var o=-1,h=i==null?0:i.length,_={};++o<h;){var S=i[o];_[S[0]]=S[1]}return _}function vd(i){return i&&i.length?i[0]:e}function m0(i,o,h){var _=i==null?0:i.length;if(!_)return-1;var S=h==null?0:se(h);return S<0&&(S=on(_+S,0)),ds(i,o,S)}function g0(i){var o=i==null?0:i.length;return o?ii(i,0,-1):[]}var _0=he(function(i){var o=Xe(i,hc);return o.length&&o[0]===i[0]?tc(o):[]}),v0=he(function(i){var o=ri(i),h=Xe(i,hc);return o===ri(h)?o=e:h.pop(),h.length&&h[0]===i[0]?tc(h,Yt(o,2)):[]}),x0=he(function(i){var o=ri(i),h=Xe(i,hc);return o=typeof o=="function"?o:e,o&&h.pop(),h.length&&h[0]===i[0]?tc(h,e,o):[]});function y0(i,o){return i==null?"":g_.call(i,o)}function ri(i){var o=i==null?0:i.length;return o?i[o-1]:e}function M0(i,o,h){var _=i==null?0:i.length;if(!_)return-1;var S=_;return h!==e&&(S=se(h),S=S<0?on(_+S,0):yn(S,_-1)),o===o?t_(i,o,S):na(i,ju,S,!0)}function E0(i,o){return i&&i.length?Rf(i,se(o)):e}var S0=he(xd);function xd(i,o){return i&&i.length&&o&&o.length?rc(i,o):i}function w0(i,o,h){return i&&i.length&&o&&o.length?rc(i,o,Yt(h,2)):i}function b0(i,o,h){return i&&i.length&&o&&o.length?rc(i,o,e,h):i}var A0=Vi(function(i,o){var h=i==null?0:i.length,_=Zl(i,o);return If(i,Xe(o,function(S){return Gi(S,h)?+S:S}).sort(Gf)),_});function T0(i,o){var h=[];if(!(i&&i.length))return h;var _=-1,S=[],L=i.length;for(o=Yt(o,3);++_<L;){var O=i[_];o(O,_,i)&&(h.push(O),S.push(_))}return If(i,S),h}function wc(i){return i==null?i:y_.call(i)}function C0(i,o,h){var _=i==null?0:i.length;return _?(h&&typeof h!="number"&&Tn(i,o,h)?(o=0,h=_):(o=o==null?0:se(o),h=h===e?_:se(h)),ii(i,o,h)):[]}function R0(i,o){return Ea(i,o)}function P0(i,o,h){return ac(i,o,Yt(h,2))}function L0(i,o){var h=i==null?0:i.length;if(h){var _=Ea(i,o);if(_<h&&di(i[_],o))return _}return-1}function I0(i,o){return Ea(i,o,!0)}function D0(i,o,h){return ac(i,o,Yt(h,2),!0)}function U0(i,o){var h=i==null?0:i.length;if(h){var _=Ea(i,o,!0)-1;if(di(i[_],o))return _}return-1}function N0(i){return i&&i.length?Uf(i):[]}function F0(i,o){return i&&i.length?Uf(i,Yt(o,2)):[]}function O0(i){var o=i==null?0:i.length;return o?ii(i,1,o):[]}function B0(i,o,h){return i&&i.length?(o=h||o===e?1:se(o),ii(i,0,o<0?0:o)):[]}function z0(i,o,h){var _=i==null?0:i.length;return _?(o=h||o===e?1:se(o),o=_-o,ii(i,o<0?0:o,_)):[]}function H0(i,o){return i&&i.length?Sa(i,Yt(o,3),!1,!0):[]}function V0(i,o){return i&&i.length?Sa(i,Yt(o,3)):[]}var G0=he(function(i){return mr(_n(i,1,je,!0))}),k0=he(function(i){var o=ri(i);return je(o)&&(o=e),mr(_n(i,1,je,!0),Yt(o,2))}),W0=he(function(i){var o=ri(i);return o=typeof o=="function"?o:e,mr(_n(i,1,je,!0),e,o)});function X0(i){return i&&i.length?mr(i):[]}function q0(i,o){return i&&i.length?mr(i,Yt(o,2)):[]}function Y0(i,o){return o=typeof o=="function"?o:e,i&&i.length?mr(i,e,o):[]}function bc(i){if(!(i&&i.length))return[];var o=0;return i=hr(i,function(h){if(je(h))return o=on(h.length,o),!0}),Gl(o,function(h){return Xe(i,zl(h))})}function yd(i,o){if(!(i&&i.length))return[];var h=bc(i);return o==null?h:Xe(h,function(_){return Gn(o,e,_)})}var $0=he(function(i,o){return je(i)?go(i,o):[]}),K0=he(function(i){return cc(hr(i,je))}),Z0=he(function(i){var o=ri(i);return je(o)&&(o=e),cc(hr(i,je),Yt(o,2))}),j0=he(function(i){var o=ri(i);return o=typeof o=="function"?o:e,cc(hr(i,je),e,o)}),J0=he(bc);function Q0(i,o){return Bf(i||[],o||[],mo)}function tx(i,o){return Bf(i||[],o||[],xo)}var ex=he(function(i){var o=i.length,h=o>1?i[o-1]:e;return h=typeof h=="function"?(i.pop(),h):e,yd(i,h)});function Md(i){var o=R(i);return o.__chain__=!0,o}function nx(i,o){return o(i),i}function Ia(i,o){return o(i)}var ix=Vi(function(i){var o=i.length,h=o?i[0]:0,_=this.__wrapped__,S=function(L){return Zl(L,i)};return o>1||this.__actions__.length||!(_ instanceof xe)||!Gi(h)?this.thru(S):(_=_.slice(h,+h+(o?1:0)),_.__actions__.push({func:Ia,args:[S],thisArg:e}),new ei(_,this.__chain__).thru(function(L){return o&&!L.length&&L.push(e),L}))});function rx(){return Md(this)}function sx(){return new ei(this.value(),this.__chain__)}function ox(){this.__values__===e&&(this.__values__=Nd(this.value()));var i=this.__index__>=this.__values__.length,o=i?e:this.__values__[this.__index__++];return{done:i,value:o}}function ax(){return this}function lx(i){for(var o,h=this;h instanceof _a;){var _=pd(h);_.__index__=0,_.__values__=e,o?S.__wrapped__=_:o=_;var S=_;h=h.__wrapped__}return S.__wrapped__=i,o}function cx(){var i=this.__wrapped__;if(i instanceof xe){var o=i;return this.__actions__.length&&(o=new xe(this)),o=o.reverse(),o.__actions__.push({func:Ia,args:[wc],thisArg:e}),new ei(o,this.__chain__)}return this.thru(wc)}function hx(){return Of(this.__wrapped__,this.__actions__)}var ux=wa(function(i,o,h){Le.call(i,h)?++i[h]:zi(i,h,1)});function fx(i,o,h){var _=re(i)?Ku:nv;return h&&Tn(i,o,h)&&(o=e),_(i,Yt(o,3))}function dx(i,o){var h=re(i)?hr:yf;return h(i,Yt(o,3))}var px=$f(md),mx=$f(gd);function gx(i,o){return _n(Da(i,o),1)}function _x(i,o){return _n(Da(i,o),st)}function vx(i,o,h){return h=h===e?1:se(h),_n(Da(i,o),h)}function Ed(i,o){var h=re(i)?Qn:pr;return h(i,Yt(o,3))}function Sd(i,o){var h=re(i)?Og:xf;return h(i,Yt(o,3))}var xx=wa(function(i,o,h){Le.call(i,h)?i[h].push(o):zi(i,h,[o])});function yx(i,o,h,_){i=Dn(i)?i:bs(i),h=h&&!_?se(h):0;var S=i.length;return h<0&&(h=on(S+h,0)),Ba(i)?h<=S&&i.indexOf(o,h)>-1:!!S&&ds(i,o,h)>-1}var Mx=he(function(i,o,h){var _=-1,S=typeof o=="function",L=Dn(i)?it(i.length):[];return pr(i,function(O){L[++_]=S?Gn(o,O,h):_o(O,o,h)}),L}),Ex=wa(function(i,o,h){zi(i,h,o)});function Da(i,o){var h=re(i)?Xe:Af;return h(i,Yt(o,3))}function Sx(i,o,h,_){return i==null?[]:(re(o)||(o=o==null?[]:[o]),h=_?e:h,re(h)||(h=h==null?[]:[h]),Pf(i,o,h))}var wx=wa(function(i,o,h){i[h?0:1].push(o)},function(){return[[],[]]});function bx(i,o,h){var _=re(i)?Ol:Qu,S=arguments.length<3;return _(i,Yt(o,4),h,S,pr)}function Ax(i,o,h){var _=re(i)?Bg:Qu,S=arguments.length<3;return _(i,Yt(o,4),h,S,xf)}function Tx(i,o){var h=re(i)?hr:yf;return h(i,Fa(Yt(o,3)))}function Cx(i){var o=re(i)?mf:yv;return o(i)}function Rx(i,o,h){(h?Tn(i,o,h):o===e)?o=1:o=se(o);var _=re(i)?j_:Mv;return _(i,o)}function Px(i){var o=re(i)?J_:Sv;return o(i)}function Lx(i){if(i==null)return 0;if(Dn(i))return Ba(i)?ms(i):i.length;var o=Mn(i);return o==H||o==U?i.size:nc(i).length}function Ix(i,o,h){var _=re(i)?Bl:wv;return h&&Tn(i,o,h)&&(o=e),_(i,Yt(o,3))}var Dx=he(function(i,o){if(i==null)return[];var h=o.length;return h>1&&Tn(i,o[0],o[1])?o=[]:h>2&&Tn(o[0],o[1],o[2])&&(o=[o[0]]),Pf(i,_n(o,1),[])}),Ua=d_||function(){return gn.Date.now()};function Ux(i,o){if(typeof o!="function")throw new ti(l);return i=se(i),function(){if(--i<1)return o.apply(this,arguments)}}function wd(i,o,h){return o=h?e:o,o=i&&o==null?i.length:o,Hi(i,N,e,e,e,e,o)}function bd(i,o){var h;if(typeof o!="function")throw new ti(l);return i=se(i),function(){return--i>0&&(h=o.apply(this,arguments)),i<=1&&(o=e),h}}var Ac=he(function(i,o,h){var _=v;if(h.length){var S=fr(h,Ss(Ac));_|=F}return Hi(i,_,o,h,S)}),Ad=he(function(i,o,h){var _=v|g;if(h.length){var S=fr(h,Ss(Ad));_|=F}return Hi(o,_,i,h,S)});function Td(i,o,h){o=h?e:o;var _=Hi(i,C,e,e,e,e,e,o);return _.placeholder=Td.placeholder,_}function Cd(i,o,h){o=h?e:o;var _=Hi(i,w,e,e,e,e,e,o);return _.placeholder=Cd.placeholder,_}function Rd(i,o,h){var _,S,L,O,G,Y,lt=0,ht=!1,mt=!1,wt=!0;if(typeof i!="function")throw new ti(l);o=si(o)||0,Ye(h)&&(ht=!!h.leading,mt="maxWait"in h,L=mt?on(si(h.maxWait)||0,o):L,wt="trailing"in h?!!h.trailing:wt);function Vt(Je){var pi=_,Xi=S;return _=S=e,lt=Je,O=i.apply(Xi,pi),O}function $t(Je){return lt=Je,G=Eo(me,o),ht?Vt(Je):O}function le(Je){var pi=Je-Y,Xi=Je-lt,$d=o-pi;return mt?yn($d,L-Xi):$d}function Kt(Je){var pi=Je-Y,Xi=Je-lt;return Y===e||pi>=o||pi<0||mt&&Xi>=L}function me(){var Je=Ua();if(Kt(Je))return Ee(Je);G=Eo(me,le(Je))}function Ee(Je){return G=e,wt&&_?Vt(Je):(_=S=e,O)}function qn(){G!==e&&zf(G),lt=0,_=Y=S=G=e}function Cn(){return G===e?O:Ee(Ua())}function Yn(){var Je=Ua(),pi=Kt(Je);if(_=arguments,S=this,Y=Je,pi){if(G===e)return $t(Y);if(mt)return zf(G),G=Eo(me,o),Vt(Y)}return G===e&&(G=Eo(me,o)),O}return Yn.cancel=qn,Yn.flush=Cn,Yn}var Nx=he(function(i,o){return vf(i,1,o)}),Fx=he(function(i,o,h){return vf(i,si(o)||0,h)});function Ox(i){return Hi(i,I)}function Na(i,o){if(typeof i!="function"||o!=null&&typeof o!="function")throw new ti(l);var h=function(){var _=arguments,S=o?o.apply(this,_):_[0],L=h.cache;if(L.has(S))return L.get(S);var O=i.apply(this,_);return h.cache=L.set(S,O)||L,O};return h.cache=new(Na.Cache||Bi),h}Na.Cache=Bi;function Fa(i){if(typeof i!="function")throw new ti(l);return function(){var o=arguments;switch(o.length){case 0:return!i.call(this);case 1:return!i.call(this,o[0]);case 2:return!i.call(this,o[0],o[1]);case 3:return!i.call(this,o[0],o[1],o[2])}return!i.apply(this,o)}}function Bx(i){return bd(2,i)}var zx=bv(function(i,o){o=o.length==1&&re(o[0])?Xe(o[0],kn(Yt())):Xe(_n(o,1),kn(Yt()));var h=o.length;return he(function(_){for(var S=-1,L=yn(_.length,h);++S<L;)_[S]=o[S].call(this,_[S]);return Gn(i,this,_)})}),Tc=he(function(i,o){var h=fr(o,Ss(Tc));return Hi(i,F,e,o,h)}),Pd=he(function(i,o){var h=fr(o,Ss(Pd));return Hi(i,D,e,o,h)}),Hx=Vi(function(i,o){return Hi(i,V,e,e,e,o)});function Vx(i,o){if(typeof i!="function")throw new ti(l);return o=o===e?o:se(o),he(i,o)}function Gx(i,o){if(typeof i!="function")throw new ti(l);return o=o==null?0:on(se(o),0),he(function(h){var _=h[o],S=_r(h,0,o);return _&&ur(S,_),Gn(i,this,S)})}function kx(i,o,h){var _=!0,S=!0;if(typeof i!="function")throw new ti(l);return Ye(h)&&(_="leading"in h?!!h.leading:_,S="trailing"in h?!!h.trailing:S),Rd(i,o,{leading:_,maxWait:o,trailing:S})}function Wx(i){return wd(i,1)}function Xx(i,o){return Tc(uc(o),i)}function qx(){if(!arguments.length)return[];var i=arguments[0];return re(i)?i:[i]}function Yx(i){return ni(i,x)}function $x(i,o){return o=typeof o=="function"?o:e,ni(i,x,o)}function Kx(i){return ni(i,m|x)}function Zx(i,o){return o=typeof o=="function"?o:e,ni(i,m|x,o)}function jx(i,o){return o==null||_f(i,o,pn(o))}function di(i,o){return i===o||i!==i&&o!==o}var Jx=Ca(Ql),Qx=Ca(function(i,o){return i>=o}),Wr=Sf(function(){return arguments}())?Sf:function(i){return $e(i)&&Le.call(i,"callee")&&!cf.call(i,"callee")},re=it.isArray,ty=ku?kn(ku):lv;function Dn(i){return i!=null&&Oa(i.length)&&!ki(i)}function je(i){return $e(i)&&Dn(i)}function ey(i){return i===!0||i===!1||$e(i)&&An(i)==Wt}var vr=m_||Bc,ny=Wu?kn(Wu):cv;function iy(i){return $e(i)&&i.nodeType===1&&!So(i)}function ry(i){if(i==null)return!0;if(Dn(i)&&(re(i)||typeof i=="string"||typeof i.splice=="function"||vr(i)||ws(i)||Wr(i)))return!i.length;var o=Mn(i);if(o==H||o==U)return!i.size;if(Mo(i))return!nc(i).length;for(var h in i)if(Le.call(i,h))return!1;return!0}function sy(i,o){return vo(i,o)}function oy(i,o,h){h=typeof h=="function"?h:e;var _=h?h(i,o):e;return _===e?vo(i,o,e,h):!!_}function Cc(i){if(!$e(i))return!1;var o=An(i);return o==ze||o==jt||typeof i.message=="string"&&typeof i.name=="string"&&!So(i)}function ay(i){return typeof i=="number"&&uf(i)}function ki(i){if(!Ye(i))return!1;var o=An(i);return o==Ie||o==de||o==St||o==Fe}function Ld(i){return typeof i=="number"&&i==se(i)}function Oa(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=j}function Ye(i){var o=typeof i;return i!=null&&(o=="object"||o=="function")}function $e(i){return i!=null&&typeof i=="object"}var Id=Xu?kn(Xu):uv;function ly(i,o){return i===o||ec(i,o,vc(o))}function cy(i,o,h){return h=typeof h=="function"?h:e,ec(i,o,vc(o),h)}function hy(i){return Dd(i)&&i!=+i}function uy(i){if($v(i))throw new ne(s);return wf(i)}function fy(i){return i===null}function dy(i){return i==null}function Dd(i){return typeof i=="number"||$e(i)&&An(i)==un}function So(i){if(!$e(i)||An(i)!=te)return!1;var o=ha(i);if(o===null)return!0;var h=Le.call(o,"constructor")&&o.constructor;return typeof h=="function"&&h instanceof h&&oa.call(h)==c_}var Rc=qu?kn(qu):fv;function py(i){return Ld(i)&&i>=-9007199254740991&&i<=j}var Ud=Yu?kn(Yu):dv;function Ba(i){return typeof i=="string"||!re(i)&&$e(i)&&An(i)==T}function Xn(i){return typeof i=="symbol"||$e(i)&&An(i)==J}var ws=$u?kn($u):pv;function my(i){return i===e}function gy(i){return $e(i)&&Mn(i)==pt}function _y(i){return $e(i)&&An(i)==ct}var vy=Ca(ic),xy=Ca(function(i,o){return i<=o});function Nd(i){if(!i)return[];if(Dn(i))return Ba(i)?ui(i):In(i);if(co&&i[co])return jg(i[co]());var o=Mn(i),h=o==H?Wl:o==U?ia:bs;return h(i)}function Wi(i){if(!i)return i===0?i:0;if(i=si(i),i===st||i===-1/0){var o=i<0?-1:1;return o*ut}return i===i?i:0}function se(i){var o=Wi(i),h=o%1;return o===o?h?o-h:o:0}function Fd(i){return i?Hr(se(i),0,Mt):0}function si(i){if(typeof i=="number")return i;if(Xn(i))return yt;if(Ye(i)){var o=typeof i.valueOf=="function"?i.valueOf():i;i=Ye(o)?o+"":o}if(typeof i!="string")return i===0?i:+i;i=tf(i);var h=Rl.test(i);return h||Ll.test(i)?Ug(i.slice(2),h?2:8):Cl.test(i)?yt:+i}function Od(i){return wi(i,Un(i))}function yy(i){return i?Hr(se(i),-9007199254740991,j):i===0?i:0}function Pe(i){return i==null?"":Wn(i)}var My=Ms(function(i,o){if(Mo(o)||Dn(o)){wi(o,pn(o),i);return}for(var h in o)Le.call(o,h)&&mo(i,h,o[h])}),Bd=Ms(function(i,o){wi(o,Un(o),i)}),za=Ms(function(i,o,h,_){wi(o,Un(o),i,_)}),Ey=Ms(function(i,o,h,_){wi(o,pn(o),i,_)}),Sy=Vi(Zl);function wy(i,o){var h=ys(i);return o==null?h:gf(h,o)}var by=he(function(i,o){i=Be(i);var h=-1,_=o.length,S=_>2?o[2]:e;for(S&&Tn(o[0],o[1],S)&&(_=1);++h<_;)for(var L=o[h],O=Un(L),G=-1,Y=O.length;++G<Y;){var lt=O[G],ht=i[lt];(ht===e||di(ht,_s[lt])&&!Le.call(i,lt))&&(i[lt]=L[lt])}return i}),Ay=he(function(i){return i.push(e,ed),Gn(zd,e,i)});function Ty(i,o){return Zu(i,Yt(o,3),Si)}function Cy(i,o){return Zu(i,Yt(o,3),Jl)}function Ry(i,o){return i==null?i:jl(i,Yt(o,3),Un)}function Py(i,o){return i==null?i:Mf(i,Yt(o,3),Un)}function Ly(i,o){return i&&Si(i,Yt(o,3))}function Iy(i,o){return i&&Jl(i,Yt(o,3))}function Dy(i){return i==null?[]:ya(i,pn(i))}function Uy(i){return i==null?[]:ya(i,Un(i))}function Pc(i,o,h){var _=i==null?e:Vr(i,o);return _===e?h:_}function Ny(i,o){return i!=null&&rd(i,o,rv)}function Lc(i,o){return i!=null&&rd(i,o,sv)}var Fy=Zf(function(i,o,h){o!=null&&typeof o.toString!="function"&&(o=aa.call(o)),i[o]=h},Dc(Nn)),Oy=Zf(function(i,o,h){o!=null&&typeof o.toString!="function"&&(o=aa.call(o)),Le.call(i,o)?i[o].push(h):i[o]=[h]},Yt),By=he(_o);function pn(i){return Dn(i)?pf(i):nc(i)}function Un(i){return Dn(i)?pf(i,!0):mv(i)}function zy(i,o){var h={};return o=Yt(o,3),Si(i,function(_,S,L){zi(h,o(_,S,L),_)}),h}function Hy(i,o){var h={};return o=Yt(o,3),Si(i,function(_,S,L){zi(h,S,o(_,S,L))}),h}var Vy=Ms(function(i,o,h){Ma(i,o,h)}),zd=Ms(function(i,o,h,_){Ma(i,o,h,_)}),Gy=Vi(function(i,o){var h={};if(i==null)return h;var _=!1;o=Xe(o,function(L){return L=gr(L,i),_||(_=L.length>1),L}),wi(i,gc(i),h),_&&(h=ni(h,m|p|x,Fv));for(var S=o.length;S--;)lc(h,o[S]);return h});function ky(i,o){return Hd(i,Fa(Yt(o)))}var Wy=Vi(function(i,o){return i==null?{}:_v(i,o)});function Hd(i,o){if(i==null)return{};var h=Xe(gc(i),function(_){return[_]});return o=Yt(o),Lf(i,h,function(_,S){return o(_,S[0])})}function Xy(i,o,h){o=gr(o,i);var _=-1,S=o.length;for(S||(S=1,i=e);++_<S;){var L=i==null?e:i[bi(o[_])];L===e&&(_=S,L=h),i=ki(L)?L.call(i):L}return i}function qy(i,o,h){return i==null?i:xo(i,o,h)}function Yy(i,o,h,_){return _=typeof _=="function"?_:e,i==null?i:xo(i,o,h,_)}var Vd=Qf(pn),Gd=Qf(Un);function $y(i,o,h){var _=re(i),S=_||vr(i)||ws(i);if(o=Yt(o,4),h==null){var L=i&&i.constructor;S?h=_?new L:[]:Ye(i)?h=ki(L)?ys(ha(i)):{}:h={}}return(S?Qn:Si)(i,function(O,G,Y){return o(h,O,G,Y)}),h}function Ky(i,o){return i==null?!0:lc(i,o)}function Zy(i,o,h){return i==null?i:Ff(i,o,uc(h))}function jy(i,o,h,_){return _=typeof _=="function"?_:e,i==null?i:Ff(i,o,uc(h),_)}function bs(i){return i==null?[]:kl(i,pn(i))}function Jy(i){return i==null?[]:kl(i,Un(i))}function Qy(i,o,h){return h===e&&(h=o,o=e),h!==e&&(h=si(h),h=h===h?h:0),o!==e&&(o=si(o),o=o===o?o:0),Hr(si(i),o,h)}function tM(i,o,h){return o=Wi(o),h===e?(h=o,o=0):h=Wi(h),i=si(i),ov(i,o,h)}function eM(i,o,h){if(h&&typeof h!="boolean"&&Tn(i,o,h)&&(o=h=e),h===e&&(typeof o=="boolean"?(h=o,o=e):typeof i=="boolean"&&(h=i,i=e)),i===e&&o===e?(i=0,o=1):(i=Wi(i),o===e?(o=i,i=0):o=Wi(o)),i>o){var _=i;i=o,o=_}if(h||i%1||o%1){var S=ff();return yn(i+S*(o-i+Dg("1e-"+((S+"").length-1))),o)}return sc(i,o)}var nM=Es(function(i,o,h){return o=o.toLowerCase(),i+(h?kd(o):o)});function kd(i){return Ic(Pe(i).toLowerCase())}function Wd(i){return i=Pe(i),i&&i.replace(P,qg).replace(Sg,"")}function iM(i,o,h){i=Pe(i),o=Wn(o);var _=i.length;h=h===e?_:Hr(se(h),0,_);var S=h;return h-=o.length,h>=0&&i.slice(h,S)==o}function rM(i){return i=Pe(i),i&&Ct.test(i)?i.replace(ft,Yg):i}function sM(i){return i=Pe(i),i&&$o.test(i)?i.replace(hs,"\\$&"):i}var oM=Es(function(i,o,h){return i+(h?"-":"")+o.toLowerCase()}),aM=Es(function(i,o,h){return i+(h?" ":"")+o.toLowerCase()}),lM=Yf("toLowerCase");function cM(i,o,h){i=Pe(i),o=se(o);var _=o?ms(i):0;if(!o||_>=o)return i;var S=(o-_)/2;return Ta(pa(S),h)+i+Ta(da(S),h)}function hM(i,o,h){i=Pe(i),o=se(o);var _=o?ms(i):0;return o&&_<o?i+Ta(o-_,h):i}function uM(i,o,h){i=Pe(i),o=se(o);var _=o?ms(i):0;return o&&_<o?Ta(o-_,h)+i:i}function fM(i,o,h){return h||o==null?o=0:o&&(o=+o),x_(Pe(i).replace(hi,""),o||0)}function dM(i,o,h){return(h?Tn(i,o,h):o===e)?o=1:o=se(o),oc(Pe(i),o)}function pM(){var i=arguments,o=Pe(i[0]);return i.length<3?o:o.replace(i[1],i[2])}var mM=Es(function(i,o,h){return i+(h?"_":"")+o.toLowerCase()});function gM(i,o,h){return h&&typeof h!="number"&&Tn(i,o,h)&&(o=h=e),h=h===e?Mt:h>>>0,h?(i=Pe(i),i&&(typeof o=="string"||o!=null&&!Rc(o))&&(o=Wn(o),!o&&ps(i))?_r(ui(i),0,h):i.split(o,h)):[]}var _M=Es(function(i,o,h){return i+(h?" ":"")+Ic(o)});function vM(i,o,h){return i=Pe(i),h=h==null?0:Hr(se(h),0,i.length),o=Wn(o),i.slice(h,h+o.length)==o}function xM(i,o,h){var _=R.templateSettings;h&&Tn(i,o,h)&&(o=e),i=Pe(i),o=za({},o,_,td);var S=za({},o.imports,_.imports,td),L=pn(S),O=kl(S,L),G,Y,lt=0,ht=o.interpolate||q,mt="__p += '",wt=Xl((o.escape||q).source+"|"+ht.source+"|"+(ht===nn?Qo:q).source+"|"+(o.evaluate||q).source+"|$","g"),Vt="//# sourceURL="+(Le.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Cg+"]")+`
`;i.replace(wt,function(Kt,me,Ee,qn,Cn,Yn){return Ee||(Ee=qn),mt+=i.slice(lt,Yn).replace(et,$g),me&&(G=!0,mt+=`' +
__e(`+me+`) +
'`),Cn&&(Y=!0,mt+=`';
`+Cn+`;
__p += '`),Ee&&(mt+=`' +
((__t = (`+Ee+`)) == null ? '' : __t) +
'`),lt=Yn+Kt.length,Kt}),mt+=`';
`;var $t=Le.call(o,"variable")&&o.variable;if(!$t)mt=`with (obj) {
`+mt+`
}
`;else if(fs.test($t))throw new ne(c);mt=(Y?mt.replace(De,""):mt).replace(W,"$1").replace(At,"$1;"),mt="function("+($t||"obj")+`) {
`+($t?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(Y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+mt+`return __p
}`;var le=qd(function(){return Te(L,Vt+"return "+mt).apply(e,O)});if(le.source=mt,Cc(le))throw le;return le}function yM(i){return Pe(i).toLowerCase()}function MM(i){return Pe(i).toUpperCase()}function EM(i,o,h){if(i=Pe(i),i&&(h||o===e))return tf(i);if(!i||!(o=Wn(o)))return i;var _=ui(i),S=ui(o),L=ef(_,S),O=nf(_,S)+1;return _r(_,L,O).join("")}function SM(i,o,h){if(i=Pe(i),i&&(h||o===e))return i.slice(0,sf(i)+1);if(!i||!(o=Wn(o)))return i;var _=ui(i),S=nf(_,ui(o))+1;return _r(_,0,S).join("")}function wM(i,o,h){if(i=Pe(i),i&&(h||o===e))return i.replace(hi,"");if(!i||!(o=Wn(o)))return i;var _=ui(i),S=ef(_,ui(o));return _r(_,S).join("")}function bM(i,o){var h=A,_=B;if(Ye(o)){var S="separator"in o?o.separator:S;h="length"in o?se(o.length):h,_="omission"in o?Wn(o.omission):_}i=Pe(i);var L=i.length;if(ps(i)){var O=ui(i);L=O.length}if(h>=L)return i;var G=h-ms(_);if(G<1)return _;var Y=O?_r(O,0,G).join(""):i.slice(0,G);if(S===e)return Y+_;if(O&&(G+=Y.length-G),Rc(S)){if(i.slice(G).search(S)){var lt,ht=Y;for(S.global||(S=Xl(S.source,Pe(ta.exec(S))+"g")),S.lastIndex=0;lt=S.exec(ht);)var mt=lt.index;Y=Y.slice(0,mt===e?G:mt)}}else if(i.indexOf(Wn(S),G)!=G){var wt=Y.lastIndexOf(S);wt>-1&&(Y=Y.slice(0,wt))}return Y+_}function AM(i){return i=Pe(i),i&&Rt.test(i)?i.replace(rt,e_):i}var TM=Es(function(i,o,h){return i+(h?" ":"")+o.toUpperCase()}),Ic=Yf("toUpperCase");function Xd(i,o,h){return i=Pe(i),o=h?e:o,o===e?Zg(i)?r_(i):Vg(i):i.match(o)||[]}var qd=he(function(i,o){try{return Gn(i,e,o)}catch(h){return Cc(h)?h:new ne(h)}}),CM=Vi(function(i,o){return Qn(o,function(h){h=bi(h),zi(i,h,Ac(i[h],i))}),i});function RM(i){var o=i==null?0:i.length,h=Yt();return i=o?Xe(i,function(_){if(typeof _[1]!="function")throw new ti(l);return[h(_[0]),_[1]]}):[],he(function(_){for(var S=-1;++S<o;){var L=i[S];if(Gn(L[0],this,_))return Gn(L[1],this,_)}})}function PM(i){return ev(ni(i,m))}function Dc(i){return function(){return i}}function LM(i,o){return i==null||i!==i?o:i}var IM=Kf(),DM=Kf(!0);function Nn(i){return i}function Uc(i){return bf(typeof i=="function"?i:ni(i,m))}function UM(i){return Tf(ni(i,m))}function NM(i,o){return Cf(i,ni(o,m))}var FM=he(function(i,o){return function(h){return _o(h,i,o)}}),OM=he(function(i,o){return function(h){return _o(i,h,o)}});function Nc(i,o,h){var _=pn(o),S=ya(o,_);h==null&&!(Ye(o)&&(S.length||!_.length))&&(h=o,o=i,i=this,S=ya(o,pn(o)));var L=!(Ye(h)&&"chain"in h)||!!h.chain,O=ki(i);return Qn(S,function(G){var Y=o[G];i[G]=Y,O&&(i.prototype[G]=function(){var lt=this.__chain__;if(L||lt){var ht=i(this.__wrapped__),mt=ht.__actions__=In(this.__actions__);return mt.push({func:Y,args:arguments,thisArg:i}),ht.__chain__=lt,ht}return Y.apply(i,ur([this.value()],arguments))})}),i}function BM(){return gn._===this&&(gn._=h_),this}function Fc(){}function zM(i){return i=se(i),he(function(o){return Rf(o,i)})}var HM=dc(Xe),VM=dc(Ku),GM=dc(Bl);function Yd(i){return yc(i)?zl(bi(i)):vv(i)}function kM(i){return function(o){return i==null?e:Vr(i,o)}}var WM=jf(),XM=jf(!0);function Oc(){return[]}function Bc(){return!1}function qM(){return{}}function YM(){return""}function $M(){return!0}function KM(i,o){if(i=se(i),i<1||i>j)return[];var h=Mt,_=yn(i,Mt);o=Yt(o),i-=Mt;for(var S=Gl(_,o);++h<i;)o(h);return S}function ZM(i){return re(i)?Xe(i,bi):Xn(i)?[i]:In(dd(Pe(i)))}function jM(i){var o=++l_;return Pe(i)+o}var JM=Aa(function(i,o){return i+o},0),QM=pc("ceil"),tE=Aa(function(i,o){return i/o},1),eE=pc("floor");function nE(i){return i&&i.length?xa(i,Nn,Ql):e}function iE(i,o){return i&&i.length?xa(i,Yt(o,2),Ql):e}function rE(i){return Ju(i,Nn)}function sE(i,o){return Ju(i,Yt(o,2))}function oE(i){return i&&i.length?xa(i,Nn,ic):e}function aE(i,o){return i&&i.length?xa(i,Yt(o,2),ic):e}var lE=Aa(function(i,o){return i*o},1),cE=pc("round"),hE=Aa(function(i,o){return i-o},0);function uE(i){return i&&i.length?Vl(i,Nn):0}function fE(i,o){return i&&i.length?Vl(i,Yt(o,2)):0}return R.after=Ux,R.ary=wd,R.assign=My,R.assignIn=Bd,R.assignInWith=za,R.assignWith=Ey,R.at=Sy,R.before=bd,R.bind=Ac,R.bindAll=CM,R.bindKey=Ad,R.castArray=qx,R.chain=Md,R.chunk=e0,R.compact=n0,R.concat=i0,R.cond=RM,R.conforms=PM,R.constant=Dc,R.countBy=ux,R.create=wy,R.curry=Td,R.curryRight=Cd,R.debounce=Rd,R.defaults=by,R.defaultsDeep=Ay,R.defer=Nx,R.delay=Fx,R.difference=r0,R.differenceBy=s0,R.differenceWith=o0,R.drop=a0,R.dropRight=l0,R.dropRightWhile=c0,R.dropWhile=h0,R.fill=u0,R.filter=dx,R.flatMap=gx,R.flatMapDeep=_x,R.flatMapDepth=vx,R.flatten=_d,R.flattenDeep=f0,R.flattenDepth=d0,R.flip=Ox,R.flow=IM,R.flowRight=DM,R.fromPairs=p0,R.functions=Dy,R.functionsIn=Uy,R.groupBy=xx,R.initial=g0,R.intersection=_0,R.intersectionBy=v0,R.intersectionWith=x0,R.invert=Fy,R.invertBy=Oy,R.invokeMap=Mx,R.iteratee=Uc,R.keyBy=Ex,R.keys=pn,R.keysIn=Un,R.map=Da,R.mapKeys=zy,R.mapValues=Hy,R.matches=UM,R.matchesProperty=NM,R.memoize=Na,R.merge=Vy,R.mergeWith=zd,R.method=FM,R.methodOf=OM,R.mixin=Nc,R.negate=Fa,R.nthArg=zM,R.omit=Gy,R.omitBy=ky,R.once=Bx,R.orderBy=Sx,R.over=HM,R.overArgs=zx,R.overEvery=VM,R.overSome=GM,R.partial=Tc,R.partialRight=Pd,R.partition=wx,R.pick=Wy,R.pickBy=Hd,R.property=Yd,R.propertyOf=kM,R.pull=S0,R.pullAll=xd,R.pullAllBy=w0,R.pullAllWith=b0,R.pullAt=A0,R.range=WM,R.rangeRight=XM,R.rearg=Hx,R.reject=Tx,R.remove=T0,R.rest=Vx,R.reverse=wc,R.sampleSize=Rx,R.set=qy,R.setWith=Yy,R.shuffle=Px,R.slice=C0,R.sortBy=Dx,R.sortedUniq=N0,R.sortedUniqBy=F0,R.split=gM,R.spread=Gx,R.tail=O0,R.take=B0,R.takeRight=z0,R.takeRightWhile=H0,R.takeWhile=V0,R.tap=nx,R.throttle=kx,R.thru=Ia,R.toArray=Nd,R.toPairs=Vd,R.toPairsIn=Gd,R.toPath=ZM,R.toPlainObject=Od,R.transform=$y,R.unary=Wx,R.union=G0,R.unionBy=k0,R.unionWith=W0,R.uniq=X0,R.uniqBy=q0,R.uniqWith=Y0,R.unset=Ky,R.unzip=bc,R.unzipWith=yd,R.update=Zy,R.updateWith=jy,R.values=bs,R.valuesIn=Jy,R.without=$0,R.words=Xd,R.wrap=Xx,R.xor=K0,R.xorBy=Z0,R.xorWith=j0,R.zip=J0,R.zipObject=Q0,R.zipObjectDeep=tx,R.zipWith=ex,R.entries=Vd,R.entriesIn=Gd,R.extend=Bd,R.extendWith=za,Nc(R,R),R.add=JM,R.attempt=qd,R.camelCase=nM,R.capitalize=kd,R.ceil=QM,R.clamp=Qy,R.clone=Yx,R.cloneDeep=Kx,R.cloneDeepWith=Zx,R.cloneWith=$x,R.conformsTo=jx,R.deburr=Wd,R.defaultTo=LM,R.divide=tE,R.endsWith=iM,R.eq=di,R.escape=rM,R.escapeRegExp=sM,R.every=fx,R.find=px,R.findIndex=md,R.findKey=Ty,R.findLast=mx,R.findLastIndex=gd,R.findLastKey=Cy,R.floor=eE,R.forEach=Ed,R.forEachRight=Sd,R.forIn=Ry,R.forInRight=Py,R.forOwn=Ly,R.forOwnRight=Iy,R.get=Pc,R.gt=Jx,R.gte=Qx,R.has=Ny,R.hasIn=Lc,R.head=vd,R.identity=Nn,R.includes=yx,R.indexOf=m0,R.inRange=tM,R.invoke=By,R.isArguments=Wr,R.isArray=re,R.isArrayBuffer=ty,R.isArrayLike=Dn,R.isArrayLikeObject=je,R.isBoolean=ey,R.isBuffer=vr,R.isDate=ny,R.isElement=iy,R.isEmpty=ry,R.isEqual=sy,R.isEqualWith=oy,R.isError=Cc,R.isFinite=ay,R.isFunction=ki,R.isInteger=Ld,R.isLength=Oa,R.isMap=Id,R.isMatch=ly,R.isMatchWith=cy,R.isNaN=hy,R.isNative=uy,R.isNil=dy,R.isNull=fy,R.isNumber=Dd,R.isObject=Ye,R.isObjectLike=$e,R.isPlainObject=So,R.isRegExp=Rc,R.isSafeInteger=py,R.isSet=Ud,R.isString=Ba,R.isSymbol=Xn,R.isTypedArray=ws,R.isUndefined=my,R.isWeakMap=gy,R.isWeakSet=_y,R.join=y0,R.kebabCase=oM,R.last=ri,R.lastIndexOf=M0,R.lowerCase=aM,R.lowerFirst=lM,R.lt=vy,R.lte=xy,R.max=nE,R.maxBy=iE,R.mean=rE,R.meanBy=sE,R.min=oE,R.minBy=aE,R.stubArray=Oc,R.stubFalse=Bc,R.stubObject=qM,R.stubString=YM,R.stubTrue=$M,R.multiply=lE,R.nth=E0,R.noConflict=BM,R.noop=Fc,R.now=Ua,R.pad=cM,R.padEnd=hM,R.padStart=uM,R.parseInt=fM,R.random=eM,R.reduce=bx,R.reduceRight=Ax,R.repeat=dM,R.replace=pM,R.result=Xy,R.round=cE,R.runInContext=X,R.sample=Cx,R.size=Lx,R.snakeCase=mM,R.some=Ix,R.sortedIndex=R0,R.sortedIndexBy=P0,R.sortedIndexOf=L0,R.sortedLastIndex=I0,R.sortedLastIndexBy=D0,R.sortedLastIndexOf=U0,R.startCase=_M,R.startsWith=vM,R.subtract=hE,R.sum=uE,R.sumBy=fE,R.template=xM,R.times=KM,R.toFinite=Wi,R.toInteger=se,R.toLength=Fd,R.toLower=yM,R.toNumber=si,R.toSafeInteger=yy,R.toString=Pe,R.toUpper=MM,R.trim=EM,R.trimEnd=SM,R.trimStart=wM,R.truncate=bM,R.unescape=AM,R.uniqueId=jM,R.upperCase=TM,R.upperFirst=Ic,R.each=Ed,R.eachRight=Sd,R.first=vd,Nc(R,function(){var i={};return Si(R,function(o,h){Le.call(R.prototype,h)||(i[h]=o)}),i}(),{chain:!1}),R.VERSION=n,Qn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){R[i].placeholder=R}),Qn(["drop","take"],function(i,o){xe.prototype[i]=function(h){h=h===e?1:on(se(h),0);var _=this.__filtered__&&!o?new xe(this):this.clone();return _.__filtered__?_.__takeCount__=yn(h,_.__takeCount__):_.__views__.push({size:yn(h,Mt),type:i+(_.__dir__<0?"Right":"")}),_},xe.prototype[i+"Right"]=function(h){return this.reverse()[i](h).reverse()}}),Qn(["filter","map","takeWhile"],function(i,o){var h=o+1,_=h==K||h==k;xe.prototype[i]=function(S){var L=this.clone();return L.__iteratees__.push({iteratee:Yt(S,3),type:h}),L.__filtered__=L.__filtered__||_,L}}),Qn(["head","last"],function(i,o){var h="take"+(o?"Right":"");xe.prototype[i]=function(){return this[h](1).value()[0]}}),Qn(["initial","tail"],function(i,o){var h="drop"+(o?"":"Right");xe.prototype[i]=function(){return this.__filtered__?new xe(this):this[h](1)}}),xe.prototype.compact=function(){return this.filter(Nn)},xe.prototype.find=function(i){return this.filter(i).head()},xe.prototype.findLast=function(i){return this.reverse().find(i)},xe.prototype.invokeMap=he(function(i,o){return typeof i=="function"?new xe(this):this.map(function(h){return _o(h,i,o)})}),xe.prototype.reject=function(i){return this.filter(Fa(Yt(i)))},xe.prototype.slice=function(i,o){i=se(i);var h=this;return h.__filtered__&&(i>0||o<0)?new xe(h):(i<0?h=h.takeRight(-i):i&&(h=h.drop(i)),o!==e&&(o=se(o),h=o<0?h.dropRight(-o):h.take(o-i)),h)},xe.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},xe.prototype.toArray=function(){return this.take(Mt)},Si(xe.prototype,function(i,o){var h=/^(?:filter|find|map|reject)|While$/.test(o),_=/^(?:head|last)$/.test(o),S=R[_?"take"+(o=="last"?"Right":""):o],L=_||/^find/.test(o);S&&(R.prototype[o]=function(){var O=this.__wrapped__,G=_?[1]:arguments,Y=O instanceof xe,lt=G[0],ht=Y||re(O),mt=function(me){var Ee=S.apply(R,ur([me],G));return _&&wt?Ee[0]:Ee};ht&&h&&typeof lt=="function"&&lt.length!=1&&(Y=ht=!1);var wt=this.__chain__,Vt=!!this.__actions__.length,$t=L&&!wt,le=Y&&!Vt;if(!L&&ht){O=le?O:new xe(this);var Kt=i.apply(O,G);return Kt.__actions__.push({func:Ia,args:[mt],thisArg:e}),new ei(Kt,wt)}return $t&&le?i.apply(this,G):(Kt=this.thru(mt),$t?_?Kt.value()[0]:Kt.value():Kt)})}),Qn(["pop","push","shift","sort","splice","unshift"],function(i){var o=ra[i],h=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",_=/^(?:pop|shift)$/.test(i);R.prototype[i]=function(){var S=arguments;if(_&&!this.__chain__){var L=this.value();return o.apply(re(L)?L:[],S)}return this[h](function(O){return o.apply(re(O)?O:[],S)})}}),Si(xe.prototype,function(i,o){var h=R[o];if(h){var _=h.name+"";Le.call(xs,_)||(xs[_]=[]),xs[_].push({name:o,func:h})}}),xs[ba(e,g).name]=[{name:"wrapper",func:e}],xe.prototype.clone=A_,xe.prototype.reverse=T_,xe.prototype.value=C_,R.prototype.at=ix,R.prototype.chain=rx,R.prototype.commit=sx,R.prototype.next=ox,R.prototype.plant=lx,R.prototype.reverse=cx,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=hx,R.prototype.first=R.prototype.head,co&&(R.prototype[co]=ax),R},gs=s_();Fr?((Fr.exports=gs)._=gs,Ul._=gs):gn._=gs}).call(mP)}(Uo,Uo.exports)),Uo.exports}var _P=gP();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Ui{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ui.nextNameID=Ui.nextNameID||0,this.$name.id=`lil-gui-name-${++Ui.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class vP extends Ui{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function fu(a){let t,e;return(t=a.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const xP={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:fu,toHexString:fu},Bo={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},yP={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,t,e=1){const n=Bo.fromHexString(a);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([a,t,e],n=1){n=255/n;const r=a*n<<16^t*n<<8^e*n<<0;return Bo.toHexString(r)}},MP={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,t,e=1){const n=Bo.fromHexString(a);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:a,g:t,b:e},n=1){n=255/n;const r=a*n<<16^t*n<<8^e*n<<0;return Bo.toHexString(r)}},EP=[xP,Bo,yP,MP];function SP(a){return EP.find(t=>t.match(a))}class wP extends Ui{constructor(t,e,n,r){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=SP(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=fu(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Sh extends Ui{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class bP extends Ui{constructor(t,e,n,r,s,l){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const c=l!==void 0;this.step(c?l:this._getImplicitStep(),c),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},n=E=>{const C=parseFloat(this.$input.value);isNaN(C)||(this._snapClampSetValue(C+E),this.$input.value=this.getValue())},r=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E)*-1))},s=E=>{this._inputFocused&&(E.preventDefault(),n(this._step*this._normalizeMouseWheel(E)))};let l=!1,c,u,f,d,m;const p=5,x=E=>{c=E.clientX,u=f=E.clientY,l=!0,d=this.getValue(),m=0,window.addEventListener("mousemove",y),window.addEventListener("mouseup",M)},y=E=>{if(l){const C=E.clientX-c,w=E.clientY-u;Math.abs(w)>p?(E.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(C)>p&&M()}if(!l){const C=E.clientY-f;m-=C*this._step*this._arrowKeyMultiplier(E),d+m>this._max?m=this._max-d:d+m<this._min&&(m=this._min-d),this._snapClampSetValue(d+m)}f=E.clientY},M=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",M)},v=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",x),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,E,C,w,F)=>(g-E)/(C-E)*(F-w)+w,e=g=>{const E=this.$slider.getBoundingClientRect();let C=t(g,E.left,E.right,this._min,this._max);this._snapClampSetValue(C)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=g=>{e(g.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let l=!1,c,u;const f=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),l=!1},d=g=>{g.touches.length>1||(this._hasScrollBar?(c=g.touches[0].clientX,u=g.touches[0].clientY,l=!0):f(g),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",p))},m=g=>{if(l){const E=g.touches[0].clientX-c,C=g.touches[0].clientY-u;Math.abs(E)>Math.abs(C)?f(g):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",p))}else g.preventDefault(),e(g.touches[0].clientX)},p=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",p)},x=this._callOnFinishChange.bind(this),y=400;let M;const v=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const C=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+C),this.$input.value=this.getValue(),clearTimeout(M),M=setTimeout(x,y)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",v,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class AP extends Ui{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class TP extends Ui{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var CP=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function RP(a){const t=document.createElement("style");t.innerHTML=a;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let gm=!1;class Pu{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:l=!1,injectStyles:c=!0,touchStyles:u=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),u&&this.domElement.classList.add("allow-touch-styles"),!gm&&c&&(RP(CP),gm=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=l}add(t,e,n,r,s){if(Object(n)===n)return new AP(this,t,e,n);const l=t[e];switch(typeof l){case"number":return new bP(this,t,e,n,r,s);case"boolean":return new vP(this,t,e);case"string":return new TP(this,t,e);case"function":return new Sh(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,l)}addColor(t,e,n=1){return new wP(this,t,e,n)}addFolder(t){const e=new Pu({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Sh||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Sh)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const hg=document.querySelector("canvas.webgl"),Pi={width:window.innerWidth,height:window.innerHeight},Ir=new qR({allowSleep:!0,gravity:new b(0,-9.81,0)});Ir.broadphase=new Xs(Ir);const Ur=new RS,PP=new VS(16777215,6);Ur.add(PP);const lr=new HS(16777215,3);lr.castShadow=!0;lr.shadow.mapSize.set(1024,1024);lr.shadow.camera.far=15;lr.shadow.camera.left=-7;lr.shadow.camera.top=7;lr.shadow.camera.right=7;lr.shadow.camera.bottom=-7;lr.position.set(5,5,5);Ur.add(lr);const as=new b1({canvas:hg});as.shadowMap.enabled=!0;as.shadowMap.type=xm;as.setSize(Pi.width,Pi.height);as.setPixelRatio(Math.min(window.devicePixelRatio,2));const ls=new ai(75,Pi.width/Pi.height,.01,100);ls.position.z=8;ls.position.y=3;Ur.add(ls);const ug=new tP(ls,hg);ug.enableDamping=!0;const Lu=new Pu;window.addEventListener("resize",()=>{Pi.width=window.innerWidth,Pi.height=window.innerHeight,ls.aspect=Pi.width/Pi.height,ls.updateProjectionMatrix(),as.setSize(Pi.width,Pi.height),as.setPixelRatio(Math.min(window.devicePixelRatio,2))});const wh=new Audio("/sounds/hit.mp3"),Iu=_P.debounce(a=>{wh.currentTime=0,wh.volume=Math.random(),a.contact.getImpactVelocityAlongNormal()<-1.5&&wh.play()},10),LP=new OS,IP=LP.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),Zs=[],zo=new Yo("somematerial"),DP=new qo(zo,zo,{friction:.1,restitution:.7});Ir.addContactMaterial(DP);const oo={},fg=new qm({metalness:.7,roughness:.4,envMap:IP,envMapIntensity:.2}),UP=new Su(1,32,32),dg=a=>{const t=new TC(a),e=new Bt({shape:t,mass:1,position:new b(0,5,0),material:zo});e.addEventListener("collide",Iu);const n=new li(UP,fg);n.scale.setScalar(a),n.castShadow=!0,Ur.add(n),Ir.addBody(e),Zs.push({body:e,mesh:n})},NP=new ro(1,1,1),FP=(a,t,e)=>{const n=new Tl(new b(a/2,t/2,e/2)),r=new Bt({shape:n,mass:1,position:new b(0,5,0),material:zo});r.addEventListener("collide",Iu);const s=new li(NP,fg);s.scale.set(a,t,e),s.castShadow=!0,Ur.add(s),Ir.addBody(r),Zs.push({body:r,mesh:s})};oo.sphereBuilder=()=>{dg(Math.random())};oo.boxBuilder=()=>{FP(Math.random(),Math.random(),Math.random())};oo.reset=()=>{Zs.map(({body:a,mesh:t})=>{Ir.removeBody(a),a.removeEventListener("collide",Iu),Ur.remove(t)}),Zs.splice(0,Zs.length)};Lu.add(oo,"sphereBuilder");Lu.add(oo,"boxBuilder");Lu.add(oo,"reset");const Du=new li(new Wo(10,10,10),new qm({color:"#777777"}));Du.receiveShadow=!0;Du.quaternion.setFromAxisAngle(new Q(-1,0,0),Math.PI*.5);const OP=new CC,pg=new Bt({shape:OP,mass:0,material:zo});pg.quaternion.setFromAxisAngle(new b(-1,0,0),Math.PI*.5);Ir.addBody(pg);Ur.add(Du);const _m=new dP;dg(1);const mg=()=>{_m.update(),ug.update(),Ir.step(1/60,_m.getDelta(),3),Zs.forEach(a=>{a.mesh.position.copy(a.body.position),a.mesh.quaternion.copy(a.body.quaternion)}),as.render(Ur,ls),window.requestAnimationFrame(mg)};mg();
