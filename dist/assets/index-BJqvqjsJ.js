(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="160",cr={ROTATE:0,DOLLY:1,PAN:2},hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lf=0,nc=1,cf=2,uu=1,Ml=2,Qn=3,si=0,Ot=1,En=2,Si=0,Br=1,Un=2,ic=3,rc=4,hf=5,Hi=100,uf=101,df=102,sc=103,ac=104,ff=200,pf=201,mf=202,gf=203,Vo=204,Wo=205,_f=206,vf=207,xf=208,Mf=209,yf=210,Sf=211,Ef=212,Tf=213,bf=214,wf=0,Af=1,Cf=2,Ea=3,Rf=4,Pf=5,Lf=6,Df=7,yl=0,If=1,Uf=2,Ei=0,Nf=1,Of=2,Ff=3,Sl=4,zf=5,Bf=6,du=300,Wr=301,Xr=302,Xo=303,qo=304,Oa=306,Yo=1e3,Dn=1001,jo=1002,Yt=1003,oc=1004,ja=1005,Sn=1006,Gf=1007,ys=1008,Ti=1009,kf=1010,Hf=1011,El=1012,fu=1013,_i=1014,vi=1015,Ss=1016,pu=1017,mu=1018,Yi=1020,Vf=1021,In=1023,Wf=1024,Xf=1025,ji=1026,qr=1027,qf=1028,gu=1029,Yf=1030,_u=1031,vu=1033,$a=33776,Ka=33777,Za=33778,Ja=33779,lc=35840,cc=35841,hc=35842,uc=35843,xu=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,_c=37811,vc=37812,xc=37813,Mc=37814,yc=37815,Sc=37816,Ec=37817,Tc=37818,bc=37819,wc=37820,Ac=37821,Qa=36492,Cc=36494,Rc=36495,jf=36283,Pc=36284,Lc=36285,Dc=36286,Mu=3e3,$i=3001,$f=3200,Kf=3201,Tl=0,Zf=1,Tn="",Nt="srgb",ai="srgb-linear",bl="display-p3",Fa="display-p3-linear",Ta="linear",dt="srgb",ba="rec709",wa="p3",ur=7680,Ic=519,Jf=512,Qf=513,ep=514,yu=515,tp=516,np=517,ip=518,rp=519,$o=35044,sp=35048,Uc="300 es",Ko=1035,ii=2e3,Aa=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gs=Math.PI/180,Zo=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function ap(i,e){return(i%e+e)%e}function eo(i,e,t){return(1-t)*i+t*e}function Nc(i){return(i&i-1)===0&&i!==0}function Jo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const op={DEG2RAD:gs};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=r[0],m=r[3],p=r[6],M=r[1],v=r[4],y=r[7],b=r[2],E=r[5],T=r[8];return s[0]=o*g+a*M+l*b,s[3]=o*m+a*v+l*E,s[6]=o*p+a*y+l*T,s[1]=c*g+h*M+u*b,s[4]=c*m+h*v+u*E,s[7]=c*p+h*y+u*T,s[2]=d*g+f*M+_*b,s[5]=d*m+f*v+_*E,s[8]=d*p+f*y+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,_=t*u+n*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new Ke;function Su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){const i=Es("canvas");return i.style.display="block",i}const Oc={};function _s(i){i in Oc||(Oc[i]=!0,console.warn(i))}const Fc=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zc=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Os={[ai]:{transfer:Ta,primaries:ba,toReference:i=>i,fromReference:i=>i},[Nt]:{transfer:dt,primaries:ba,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fa]:{transfer:Ta,primaries:wa,toReference:i=>i.applyMatrix3(zc),fromReference:i=>i.applyMatrix3(Fc)},[bl]:{transfer:dt,primaries:wa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zc),fromReference:i=>i.applyMatrix3(Fc).convertLinearToSRGB()}},cp=new Set([ai,Fa]),it={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Os[e].toReference,r=Os[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Os[i].primaries},getTransfer:function(i){return i===Tn?Ta:Os[i].transfer}};function Gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let dr;class Eu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dr===void 0&&(dr=Es("canvas")),dr.width=e.width,dr.height=e.height;const n=dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gr(t[n]/255)*255):t[n]=Gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class Tu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(io(r[o].image)):s.push(io(r[o]))}else s=io(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let up=0;class $t extends rr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Dn,r=Dn,s=Sn,o=ys,a=In,l=Ti,c=$t.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=bi(),this.name="",this.source=new Tu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$i?Nt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yo:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yo:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?$i:Mu}set encoding(e){_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?Nt:Tn}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=du;$t.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(f+1)/2,b=(p+1)/2,E=(h+d)/4,T=(u+g)/4,L=(_+m)/4;return v>y&&v>b?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=E/n,s=T/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=E/r,s=L/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=T/s,r=L/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dp extends rr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(_s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$i?Nt:Tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $t(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends dp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bu extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fp extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*g,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),E=Math.atan2(b,p*M);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const y=a*M;if(l=l*m+d*y,c=c*m+f*y,h=h*m+_*y,u=u*m+g*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),f=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new P,Bc=new tr;class sr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),zs.subVectors(this.max,ns),fr.subVectors(e.a,ns),pr.subVectors(e.b,ns),mr.subVectors(e.c,ns),ui.subVectors(pr,fr),di.subVectors(mr,pr),Ui.subVectors(fr,mr);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ui.z,Ui.y,ui.z,0,-ui.x,di.z,0,-di.x,Ui.z,0,-Ui.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ui.y,Ui.x,0];return!so(t,fr,pr,mr,zs)||(t=[1,0,0,0,1,0,0,0,1],!so(t,fr,pr,mr,zs))?!1:(Bs.crossVectors(ui,di),t=[Bs.x,Bs.y,Bs.z],so(t,fr,pr,mr,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,Fs=new sr,fr=new P,pr=new P,mr=new P,ui=new P,di=new P,Ui=new P,ns=new P,zs=new P,Bs=new P,Ni=new P;function so(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ni.fromArray(i,s);const a=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pp=new sr,is=new P,ao=new P;class ar{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(is,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(ao)),this.expandByPoint(is.copy(e.center).sub(ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new P,oo=new P,Gs=new P,fi=new P,lo=new P,ks=new P,co=new P;class Ds{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){oo.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(oo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=fi.dot(this.direction),l=-fi.dot(Gs),c=fi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oo).addScaledVector(Gs,d),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),r=$n.dot($n)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,r,s){lo.subVectors(t,e),ks.subVectors(n,e),co.crossVectors(lo,ks);let o=this.direction.dot(co),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(ks.crossVectors(fi,ks));if(l<0)return null;const c=a*this.direction.dot(lo.cross(fi));if(c<0||l+c>o)return null;const h=-a*fi.dot(co);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,s,o,a,l,c,h,u,d,f,_,g,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,d,f,_,g,m)}set(e,t,n,r,s,o,a,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),o=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,gp)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),pi.crossVectors(n,ln),pi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),pi.crossVectors(n,ln)),pi.normalize(),Hs.crossVectors(ln,pi),r[0]=pi.x,r[4]=Hs.x,r[8]=ln.x,r[1]=pi.y,r[5]=Hs.y,r[9]=ln.y,r[2]=pi.z,r[6]=Hs.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],v=n[7],y=n[11],b=n[15],E=r[0],T=r[4],L=r[8],x=r[12],w=r[1],N=r[5],O=r[9],$=r[13],I=r[2],z=r[6],U=r[10],q=r[14],X=r[3],Y=r[7],K=r[11],ee=r[15];return s[0]=o*E+a*w+l*I+c*X,s[4]=o*T+a*N+l*z+c*Y,s[8]=o*L+a*O+l*U+c*K,s[12]=o*x+a*$+l*q+c*ee,s[1]=h*E+u*w+d*I+f*X,s[5]=h*T+u*N+d*z+f*Y,s[9]=h*L+u*O+d*U+f*K,s[13]=h*x+u*$+d*q+f*ee,s[2]=_*E+g*w+m*I+p*X,s[6]=_*T+g*N+m*z+p*Y,s[10]=_*L+g*O+m*U+p*K,s[14]=_*x+g*$+m*q+p*ee,s[3]=M*E+v*w+y*I+b*X,s[7]=M*T+v*N+y*z+b*Y,s[11]=M*L+v*O+y*U+b*K,s[15]=M*x+v*$+y*q+b*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*f-n*l*f)+g*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-r*a*h-t*l*u+t*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,v=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,y=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,b=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,E=t*M+n*v+r*y+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=M*T,e[1]=(g*d*s-u*m*s-g*r*f+n*m*f+u*r*p-n*d*p)*T,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*T,e[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*f-n*l*f)*T,e[4]=v*T,e[5]=(h*m*s-_*d*s+_*r*f-t*m*f-h*r*p+t*d*p)*T,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*f+t*l*f)*T,e[8]=y*T,e[9]=(_*u*s-h*g*s-_*n*f+t*g*f+h*n*p-t*u*p)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=b*T,e[13]=(h*g*r-_*u*r+_*n*d-t*g*d-h*n*m+t*u*m)*T,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,_=s*u,g=o*h,m=o*u,p=a*u,M=l*c,v=l*h,y=l*u,b=n.x,E=n.y,T=n.z;return r[0]=(1-(g+p))*b,r[1]=(f+y)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(f-y)*E,r[5]=(1-(d+p))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(_+v)*T,r[9]=(m-M)*T,r[10]=(1-(d+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=gr.set(r[0],r[1],r[2]).length();const o=gr.set(r[4],r[5],r[6]).length(),a=gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/s,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ii){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let f,_;if(a===ii)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Aa)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ii){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),d=(t+e)*c,f=(n+r)*h;let _,g;if(a===ii)_=(o+s)*u,g=-2*u;else if(a===Aa)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gr=new P,Pn=new tt,mp=new P(0,0,0),gp=new P(1,1,1),pi=new P,Hs=new P,ln=new P,Gc=new tt,kc=new tr;class za{constructor(e=0,t=0,n=0,r=za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kc.setFromEuler(this),this.setFromQuaternion(kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}za.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _p=0;const Hc=new P,_r=new tr,Kn=new tt,Vs=new P,rs=new P,vp=new P,xp=new tr,Vc=new P(1,0,0),Wc=new P(0,1,0),Xc=new P(0,0,1),Mp={type:"added"},yp={type:"removed"};class St extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new P,t=new za,n=new tr,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ke}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(rs,Vs,this.up):Kn.lookAt(Vs,rs,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),_r.setFromRotationMatrix(Kn),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new P,Zn=new P,ho=new P,Jn=new P,vr=new P,xr=new P,qc=new P,uo=new P,fo=new P,po=new P;let Ws=!1;class un{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ln.subVectors(r,t),Zn.subVectors(n,t),ho.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(Zn),l=Ln.dot(ho),c=Zn.dot(Zn),h=Zn.dot(ho),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,n,r,s,o,a,l){return Ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ws=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),Zn.subVectors(e,t),Ln.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Ln.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ws=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;vr.subVectors(r,n),xr.subVectors(s,n),uo.subVectors(e,n);const l=vr.dot(uo),c=xr.dot(uo);if(l<=0&&c<=0)return t.copy(n);fo.subVectors(e,r);const h=vr.dot(fo),u=xr.dot(fo);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vr,o);po.subVectors(e,s);const f=vr.dot(po),_=xr.dot(po);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(xr,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return qc.subVectors(s,r),a=(u-h)/(u-h+(f-_)),t.copy(r).addScaledVector(qc,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(vr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=ap(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=mo(o,s,e+1/3),this.g=mo(o,s,e),this.b=mo(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=wu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return it.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Lt(Gt.r*255,0,255))*65536+Math.round(Lt(Gt.g*255,0,255))*256+Math.round(Lt(Gt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Nt){it.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Xs);const n=eo(mi.h,Xs.h,t),r=eo(mi.s,Xs.s,t),s=eo(mi.l,Xs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ge;Ge.NAMES=wu;let Sp=0;class ci extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Br,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Wo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cn extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new P,qs=new Ne;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),e}}class Au extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cu extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ep=0;const Mn=new tt,go=new St,Mr=new P,cn=new sr,ss=new sr,Pt=new P;class At extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?Cu:Au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,ss.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,ss.max),cn.expandByPoint(Pt)):(cn.expandByPoint(ss.min),cn.expandByPoint(ss.max))}cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),Pt.add(Mr)),r=Math.max(r,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new P,h[w]=new P;const u=new P,d=new P,f=new P,_=new Ne,g=new Ne,m=new Ne,p=new P,M=new P;function v(w,N,O){u.fromArray(r,w*3),d.fromArray(r,N*3),f.fromArray(r,O*3),_.fromArray(o,w*2),g.fromArray(o,N*2),m.fromArray(o,O*2),d.sub(u),f.sub(u),g.sub(_),m.sub(_);const $=1/(g.x*m.y-m.x*g.y);isFinite($)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar($),M.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar($),c[w].add(p),c[N].add(p),c[O].add(p),h[w].add(M),h[N].add(M),h[O].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,N=y.length;w<N;++w){const O=y[w],$=O.start,I=O.count;for(let z=$,U=$+I;z<U;z+=3)v(n[z+0],n[z+1],n[z+2])}const b=new P,E=new P,T=new P,L=new P;function x(w){T.fromArray(s,w*3),L.copy(T);const N=c[w];b.copy(N),b.sub(T.multiplyScalar(T.dot(N))).normalize(),E.crossVectors(L,N);const $=E.dot(h[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=$}for(let w=0,N=y.length;w<N;++w){const O=y[w],$=O.start,I=O.count;for(let z=$,U=$+I;z<U;z+=3)x(n[z+0]),x(n[z+1]),x(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yc=new tt,Oi=new Ds,Ys=new ar,jc=new P,yr=new P,Sr=new P,Er=new P,_o=new P,js=new P,$s=new Ne,Ks=new Ne,Zs=new Ne,$c=new P,Kc=new P,Zc=new P,Js=new P,Qs=new P;class nt extends St{constructor(e=new At,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(_o.fromBufferAttribute(u,e),o?js.addScaledVector(_o,h):js.addScaledVector(_o.sub(t),h))}t.add(js)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Ys.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Ys,jc)===null||Oi.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Yc.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Yc),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=v;y<b;y+=3){const E=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);r=ea(this,p,e,n,c,h,u,E,T,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=ea(this,o,e,n,c,h,u,M,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=v;y<b;y+=3){const E=y,T=y+1,L=y+2;r=ea(this,p,e,n,c,h,u,E,T,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,v=m+1,y=m+2;r=ea(this,o,e,n,c,h,u,M,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Tp(i,e,t,n,r,s,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===si,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:i}}function ea(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,yr),i.getVertexPosition(l,Sr),i.getVertexPosition(c,Er);const h=Tp(i,e,t,n,yr,Sr,Er,Js);if(h){r&&($s.fromBufferAttribute(r,a),Ks.fromBufferAttribute(r,l),Zs.fromBufferAttribute(r,c),h.uv=un.getInterpolation(Js,yr,Sr,Er,$s,Ks,Zs,new Ne)),s&&($s.fromBufferAttribute(s,a),Ks.fromBufferAttribute(s,l),Zs.fromBufferAttribute(s,c),h.uv1=un.getInterpolation(Js,yr,Sr,Er,$s,Ks,Zs,new Ne),h.uv2=h.uv1),o&&($c.fromBufferAttribute(o,a),Kc.fromBufferAttribute(o,l),Zc.fromBufferAttribute(o,c),h.normal=un.getInterpolation(Js,yr,Sr,Er,$c,Kc,Zc,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};un.getNormal(yr,Sr,Er,u.normal),h.face=u}return h}class Vn extends At{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function _(g,m,p,M,v,y,b,E,T,L,x){const w=y/T,N=b/L,O=y/2,$=b/2,I=E/2,z=T+1,U=L+1;let q=0,X=0;const Y=new P;for(let K=0;K<U;K++){const ee=K*N-$;for(let J=0;J<z;J++){const W=J*w-O;Y[g]=W*M,Y[m]=ee*v,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(J/T),u.push(1-K/L),q+=1}}for(let K=0;K<L;K++)for(let ee=0;ee<T;ee++){const J=d+ee+z*K,W=d+ee+z*(K+1),Z=d+(ee+1)+z*(K+1),j=d+(ee+1)+z*K;l.push(J,W,j),l.push(W,Z,j),X+=6}a.addGroup(f,X,x),f+=X,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Yr(i[t]);for(const r in n)e[r]=n[r]}return e}function bp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ru(i){return i.getRenderTarget()===null?i.outputColorSpace:it.workingColorSpace}const wp={clone:Yr,merge:qt};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pu extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends Pu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,br=1;class Rp extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Tr,br,e,t);r.layers=this.layers,this.add(r);const s=new Qt(Tr,br,e,t);s.layers=this.layers,this.add(s);const o=new Qt(Tr,br,e,t);o.layers=this.layers,this.add(o);const a=new Qt(Tr,br,e,t);a.layers=this.layers,this.add(a);const l=new Qt(Tr,br,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Tr,br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Lu extends $t{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pp extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(_s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$i?Nt:Tn),this.texture=new Lu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vn(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Si});s.uniforms.tEquirect.value=t;const o=new nt(r,s),a=t.minFilter;return t.minFilter===ys&&(t.minFilter=Sn),new Rp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const vo=new P,Lp=new P,Dp=new Ke;class gi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vo.subVectors(n,t).cross(Lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dp.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new ar,ta=new P;class Al{constructor(e=new gi,t=new gi,n=new gi,r=new gi,s=new gi,o=new gi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],f=r[8],_=r[9],g=r[10],m=r[11],p=r[12],M=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,m-f,y-p).normalize(),n[1].setComponents(l+s,d+c,m+f,y+p).normalize(),n[2].setComponents(l+o,d+h,m+_,y+M).normalize(),n[3].setComponents(l-o,d-h,m-_,y-M).normalize(),n[4].setComponents(l-a,d-u,m-g,y-v).normalize(),t===ii)n[5].setComponents(l+a,d+u,m+g,y+v).normalize();else if(t===Aa)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ta.x=r.normal.x>0?e.max.x:e.min.x,ta.y=r.normal.y>0?e.max.y:e.min.y,ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ip(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,d=c.usage,f=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,h,u){const d=h.array,f=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,r(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ba extends At{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let v=0;v<c;v++){const y=v*u-s;_.push(y,-M,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,y=M+c*(p+1),b=M+1+c*(p+1),E=M+1+c*p;f.push(v,y,E),f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.widthSegments,e.heightSegments)}}var Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,jp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,im=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,dm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
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
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Um=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$m=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
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
}`,G0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,k0=`#define DISTANCE
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
}`,H0=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
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
}`,j0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$0=`#define LAMBERT
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
}`,K0=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Z0=`#define MATCAP
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
}`,J0=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Q0=`#define NORMAL
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
}`,eg=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
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
}`,ng=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ig=`#define STANDARD
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
}`,rg=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sg=`#define TOON
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
}`,ag=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,og=`uniform float size;
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
}`,lg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,dg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ye={alphahash_fragment:Up,alphahash_pars_fragment:Np,alphamap_fragment:Op,alphamap_pars_fragment:Fp,alphatest_fragment:zp,alphatest_pars_fragment:Bp,aomap_fragment:Gp,aomap_pars_fragment:kp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:jp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Jp,color_fragment:Qp,color_pars_fragment:em,color_pars_vertex:tm,color_vertex:nm,common:im,cube_uv_reflection_fragment:rm,defaultnormal_vertex:sm,displacementmap_pars_vertex:am,displacementmap_vertex:om,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Am,envmap_vertex:gm,fog_vertex:_m,fog_pars_vertex:vm,fog_fragment:xm,fog_pars_fragment:Mm,gradientmap_pars_fragment:ym,lightmap_fragment:Sm,lightmap_pars_fragment:Em,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:bm,lights_pars_begin:wm,lights_toon_fragment:Cm,lights_toon_pars_fragment:Rm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Dm,lights_physical_pars_fragment:Im,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Om,logdepthbuf_fragment:Fm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Gm,map_fragment:km,map_pars_fragment:Hm,map_particle_fragment:Vm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphcolor_vertex:Ym,morphnormal_vertex:jm,morphtarget_pars_vertex:$m,morphtarget_vertex:Km,normal_fragment_begin:Zm,normal_fragment_maps:Jm,normal_pars_fragment:Qm,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:a0,opaque_fragment:o0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:_0,shadowmask_pars_fragment:v0,skinbase_vertex:x0,skinning_pars_vertex:M0,skinning_vertex:y0,skinnormal_vertex:S0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:b0,tonemapping_pars_fragment:w0,transmission_fragment:A0,transmission_pars_fragment:C0,uv_pars_fragment:R0,uv_pars_vertex:P0,uv_vertex:L0,worldpos_vertex:D0,background_vert:I0,background_frag:U0,backgroundCube_vert:N0,backgroundCube_frag:O0,cube_vert:F0,cube_frag:z0,depth_vert:B0,depth_frag:G0,distanceRGBA_vert:k0,distanceRGBA_frag:H0,equirect_vert:V0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:j0,meshlambert_vert:$0,meshlambert_frag:K0,meshmatcap_vert:Z0,meshmatcap_frag:J0,meshnormal_vert:Q0,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:rg,meshtoon_vert:sg,meshtoon_frag:ag,points_vert:og,points_frag:lg,shadow_vert:cg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},ve={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:qt([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:qt([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:qt([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:qt([ve.common,ve.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:qt([ve.lights,ve.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Bn.physical={uniforms:qt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const na={r:0,b:0,g:0};function fg(i,e,t,n,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(m,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Oa)?(h===void 0&&(h=new nt(new Vn(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Yr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=it.getTransfer(v.colorSpace)!==dt,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new nt(new Ba(2,2),new Ci({name:"BackgroundMaterial",uniforms:Yr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=it.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(na,Ru(i)),n.buffers.color.setClear(na.r,na.g,na.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function pg(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(I,z,U,q,X){let Y=!1;if(o){const K=g(q,U,z);c!==K&&(c=K,f(c.object)),Y=p(I,q,U,X),Y&&M(I,q,U,X)}else{const K=z.wireframe===!0;(c.geometry!==q.id||c.program!==U.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=U.id,c.wireframe=K,Y=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,L(I,z,U,q),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?i.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?i.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,z,U){const q=U.wireframe===!0;let X=a[I.id];X===void 0&&(X={},a[I.id]=X);let Y=X[z.id];Y===void 0&&(Y={},X[z.id]=Y);let K=Y[q];return K===void 0&&(K=m(d()),Y[q]=K),K}function m(I){const z=[],U=[],q=[];for(let X=0;X<r;X++)z[X]=0,U[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:U,attributeDivisors:q,object:I,attributes:{},index:null}}function p(I,z,U,q){const X=c.attributes,Y=z.attributes;let K=0;const ee=U.getAttributes();for(const J in ee)if(ee[J].location>=0){const Z=X[J];let j=Y[J];if(j===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),Z===void 0||Z.attribute!==j||j&&Z.data!==j.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function M(I,z,U,q){const X={},Y=z.attributes;let K=0;const ee=U.getAttributes();for(const J in ee)if(ee[J].location>=0){let Z=Y[J];Z===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const j={};j.attribute=Z,Z&&Z.data&&(j.data=Z.data),X[J]=j,K++}c.attributes=X,c.attributesNum=K,c.index=q}function v(){const I=c.newAttributes;for(let z=0,U=I.length;z<U;z++)I[z]=0}function y(I){b(I,0)}function b(I,z){const U=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;U[I]=1,q[I]===0&&(i.enableVertexAttribArray(I),q[I]=1),X[I]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),X[I]=z)}function E(){const I=c.newAttributes,z=c.enabledAttributes;for(let U=0,q=z.length;U<q;U++)z[U]!==I[U]&&(i.disableVertexAttribArray(U),z[U]=0)}function T(I,z,U,q,X,Y,K){K===!0?i.vertexAttribIPointer(I,z,U,X,Y):i.vertexAttribPointer(I,z,U,q,X,Y)}function L(I,z,U,q){if(n.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=q.attributes,Y=U.getAttributes(),K=z.defaultAttributeValues;for(const ee in Y){const J=Y[ee];if(J.location>=0){let W=X[ee];if(W===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const Z=W.normalized,j=W.itemSize,oe=t.get(W);if(oe===void 0)continue;const fe=oe.buffer,xe=oe.type,Ae=oe.bytesPerElement,Me=n.isWebGL2===!0&&(xe===i.INT||xe===i.UNSIGNED_INT||W.gpuType===fu);if(W.isInterleavedBufferAttribute){const Oe=W.data,G=Oe.stride,$e=W.offset;if(Oe.isInstancedInterleavedBuffer){for(let he=0;he<J.locationSize;he++)b(J.location+he,Oe.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let he=0;he<J.locationSize;he++)y(J.location+he);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let he=0;he<J.locationSize;he++)T(J.location+he,j/J.locationSize,xe,Z,G*Ae,($e+j/J.locationSize*he)*Ae,Me)}else{if(W.isInstancedBufferAttribute){for(let Oe=0;Oe<J.locationSize;Oe++)b(J.location+Oe,W.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Oe=0;Oe<J.locationSize;Oe++)y(J.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Oe=0;Oe<J.locationSize;Oe++)T(J.location+Oe,j/J.locationSize,xe,Z,j*Ae,j/J.locationSize*Oe*Ae,Me)}}else if(K!==void 0){const Z=K[ee];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(J.location,Z);break;case 3:i.vertexAttrib3fv(J.location,Z);break;case 4:i.vertexAttrib4fv(J.location,Z);break;default:i.vertexAttrib1fv(J.location,Z)}}}}E()}function x(){O();for(const I in a){const z=a[I];for(const U in z){const q=z[U];for(const X in q)_(q[X].object),delete q[X];delete z[U]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;const z=a[I.id];for(const U in z){const q=z[U];for(const X in q)_(q[X].object),delete q[X];delete z[U]}delete a[I.id]}function N(I){for(const z in a){const U=a[z];if(U[I.id]===void 0)continue;const q=U[I.id];for(const X in q)_(q[X].object),delete q[X];delete U[I.id]}}function O(){$(),h=!0,c!==l&&(c=l,f(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:$,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function mg(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,u){i.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,d){if(d===0)return;let f,_;if(r)f=i,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,h,u,d),t.update(u,s,d)}function c(h,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function gg(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),b=v&&y,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:E}}function _g(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new gi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||r;return r=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,v=M*4;let y=p.clippingState||null;l.value=y,y=h(_,d,v,f);for(let b=0;b!==v;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==g;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function vg(i){let e=new WeakMap;function t(o,a){return a===Xo?o.mapping=Wr:a===qo&&(o.mapping=Xr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xo||a===qo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pp(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Iu extends Pu{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=4,Jc=[.125,.215,.35,.446,.526,.582],Vi=20,xo=new Iu,Qc=new Ge;let Mo=null,yo=0,So=0;const Gi=(1+Math.sqrt(5))/2,wr=1/Gi,eh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Gi,wr),new P(0,Gi,-wr),new P(wr,0,Gi),new P(-wr,0,Gi),new P(Gi,wr,0),new P(-Gi,wr,0)];class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,yo,So),e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ss,format:In,colorSpace:ai,depthBuffer:!1},r=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(s)),this._blurMaterial=Mg(s,e,t)}return r}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,r){const a=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qc),h.toneMapping=Ei,h.autoClear=!1;const f=new Cn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new nt(new Vn,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Qc),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;ia(r,M*v,p>2?v:0,v,v),h.setRenderTarget(r),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Wr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eh[(r-1)%eh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new nt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Vi;m>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let M=0;for(let T=0;T<Vi;++T){const L=T/g,x=Math.exp(-L*L/2);p.push(x),T===0?M+=x:T<m&&(M+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const y=this._sizeLods[r],b=3*y*(r>v-Nr?r-v+Nr:0),E=4*(this._cubeSize-y);ia(t,b,E,3*y,2*y),l.setRenderTarget(t),l.render(u,xo)}}function xg(i){const e=[],t=[],n=[];let r=i;const s=i-Nr+1+Jc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Nr?l=Jc[o-i+Nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),v=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,L=E>2?0:-1,x=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];M.set(x,g*_*E),v.set(d,m*_*E);const w=[E,E,E,E,E,E];y.set(w,p*_*E)}const b=new At;b.setAttribute("position",new Kt(M,g)),b.setAttribute("uv",new Kt(v,m)),b.setAttribute("faceIndex",new Kt(y,p)),e.push(b),r>Nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nh(i,e,t){const n=new er(i,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Mg(i,e,t){const n=new Float32Array(Vi),r=new P(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ih(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function rh(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function yg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xo||l===qo,h=l===Wr||l===Xr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new th(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new th(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Eg(i,e,t,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let v=0,y=M.length;v<y;v+=3){const b=M[v+0],E=M[v+1],T=M[v+2];d.push(b,E,E,T,T,b)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const b=v+0,E=v+1,T=v+2;d.push(b,E,E,T,T,b)}}else return;const m=new(Su(d)?Cu:Au)(d,1);m.version=g;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Tg(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,_){i.drawElements(s,_,a,f*l),t.update(_,s,1)}function u(f,_,g){if(g===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,a,f*l,g),t.update(_,s,g)}function d(f,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,_[p]);else{m.multiDrawElementsWEBGL(s,_,0,a,f,0,g);let p=0;for(let M=0;M<g;M++)p+=_[M];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function bg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wg(i,e){return i[0]-e[0]}function Ag(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Cg(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(h);if(m===void 0||m.count!==g){let z=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var f=z;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),b===!0&&(x=3);let w=h.attributes.position.count*x,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const O=new Float32Array(w*N*4*g),$=new bu(O,w,N,g);$.type=vi,$.needsUpdate=!0;const I=x*4;for(let U=0;U<g;U++){const q=E[U],X=T[U],Y=L[U],K=w*N*4*U;for(let ee=0;ee<q.count;ee++){const J=ee*I;v===!0&&(o.fromBufferAttribute(q,ee),O[K+J+0]=o.x,O[K+J+1]=o.y,O[K+J+2]=o.z,O[K+J+3]=0),y===!0&&(o.fromBufferAttribute(X,ee),O[K+J+4]=o.x,O[K+J+5]=o.y,O[K+J+6]=o.z,O[K+J+7]=0),b===!0&&(o.fromBufferAttribute(Y,ee),O[K+J+8]=o.x,O[K+J+9]=o.y,O[K+J+10]=o.z,O[K+J+11]=Y.itemSize===4?o.w:1)}}m={count:g,texture:$,size:new Ne(w,N)},s.set(h,m),h.addEventListener("dispose",z)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const M=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<_;y++){const b=g[y];b[0]=y,b[1]=d[y]}g.sort(Ag);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(wg);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const b=a[y],E=b[0],T=b[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&h.getAttribute("morphTarget"+y)!==m[E]&&h.setAttribute("morphTarget"+y,m[E]),p&&h.getAttribute("morphNormal"+y)!==p[E]&&h.setAttribute("morphNormal"+y,p[E]),r[y]=T,M+=T):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const v=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Rg(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Uu extends $t{constructor(e,t,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:ji,h!==ji&&h!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=_i),n===void 0&&h===qr&&(n=Yi),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nu=new $t,Ou=new Uu(1,1);Ou.compareFunction=yu;const Fu=new bu,zu=new fp,Bu=new Lu,sh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=sh[r];if(s===void 0&&(s=new Float32Array(r),sh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),Rt(t,n)}}function Ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),Rt(t,n)}}function Og(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),Rt(t,n)}}function Fg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function Xg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ou:Nu;t.setTexture2D(e||s,r)}function qg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zu,r)}function Yg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bu,r)}function jg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fu,r)}function $g(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ig;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return zg;case 35668:case 35672:return Bg;case 35669:case 35673:return Gg;case 5125:return kg;case 36294:return Hg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return jg}}function Kg(i,e){i.uniform1fv(this.addr,e)}function Zg(i,e){const t=es(e,this.size,2);i.uniform2fv(this.addr,t)}function Jg(i,e){const t=es(e,this.size,3);i.uniform3fv(this.addr,t)}function Qg(i,e){const t=es(e,this.size,4);i.uniform4fv(this.addr,t)}function e_(i,e){const t=es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t_(i,e){const t=es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n_(i,e){const t=es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i_(i,e){i.uniform1iv(this.addr,e)}function r_(i,e){i.uniform2iv(this.addr,e)}function s_(i,e){i.uniform3iv(this.addr,e)}function a_(i,e){i.uniform4iv(this.addr,e)}function o_(i,e){i.uniform1uiv(this.addr,e)}function l_(i,e){i.uniform2uiv(this.addr,e)}function c_(i,e){i.uniform3uiv(this.addr,e)}function h_(i,e){i.uniform4uiv(this.addr,e)}function u_(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Nu,s[o])}function d_(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zu,s[o])}function f_(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Bu,s[o])}function p_(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fu,s[o])}function m_(i){switch(i){case 5126:return Kg;case 35664:return Zg;case 35665:return Jg;case 35666:return Qg;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$g(t.type)}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function hh(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){const n=i.name,r=n.length;for(Eo.lastIndex=0;;){const s=Eo.exec(n),o=Eo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hh(t,c===void 0?new g_(a,i,e):new __(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new v_(a),hh(t,u)),t=u}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);x_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function uh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const M_=37297;let y_=0;function S_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function E_(i){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(i);let n;switch(e===t?n="":e===wa&&t===ba?n="LinearDisplayP3ToLinearSRGB":e===ba&&t===wa&&(n="LinearSRGBToLinearDisplayP3"),i){case ai:case Fa:return[n,"LinearTransferOETF"];case Nt:case bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function dh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+S_(i.getShaderSource(e),o)}else return r}function T_(i,e){const t=E_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b_(i,e){let t;switch(e){case Nf:t="Linear";break;case Of:t="Reinhard";break;case Ff:t="OptimizedCineon";break;case Sl:t="ACESFilmic";break;case Bf:t="AgX";break;case zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function w_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function A_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Or).join(`
`)}function C_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Or(i){return i!==""}function fh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(i){return i.replace(P_,D_)}const L_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function D_(i,e){let t=Ye[e];if(t===void 0){const n=L_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace(I_,U_)}function U_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function O_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function B_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function G_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=N_(t),c=O_(t),h=F_(t),u=z_(t),d=B_(t),f=t.isWebGL2?"":w_(t),_=A_(t),g=C_(s),m=r.createProgram();let p,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),M.length>0&&(M+=`
`)):(p=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),M=[f,gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ei?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=Qo(o),o=fh(o,t),o=ph(o,t),a=Qo(a),a=fh(a,t),a=ph(a,t),o=mh(o),a=mh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=v+p+o,b=v+M+a,E=uh(r,r.VERTEX_SHADER,y),T=uh(r,r.FRAGMENT_SHADER,b);r.attachShader(m,E),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(O){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(E).trim(),z=r.getShaderInfoLog(T).trim();let U=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,E,T);else{const X=dh(r,E,"vertex"),Y=dh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+X+`
`+Y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(I===""||z==="")&&(q=!1);q&&(O.diagnostics={runnable:U,programLog:$,vertexShader:{log:I,prefix:p},fragmentShader:{log:z,prefix:M}})}r.deleteShader(E),r.deleteShader(T),x=new _a(r,m),w=R_(r,m)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,M_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=T,this}let k_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V_(e),t.set(e,n)),n}}class V_{constructor(e){this.id=k_++,this.code=e,this.usedTimes=0}}function W_(i,e,t,n,r,s,o){const a=new wl,l=new H_,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function m(x,w,N,O,$){const I=O.fog,z=$.geometry,U=x.isMeshStandardMaterial?O.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),X=q&&q.mapping===Oa?q.image.height:null,Y=_[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=K!==void 0?K.length:0;let J=0;z.morphAttributes.position!==void 0&&(J=1),z.morphAttributes.normal!==void 0&&(J=2),z.morphAttributes.color!==void 0&&(J=3);let W,Z,j,oe;if(Y){const Qe=Bn[Y];W=Qe.vertexShader,Z=Qe.fragmentShader}else W=x.vertexShader,Z=x.fragmentShader,l.update(x),j=l.getVertexShaderID(x),oe=l.getFragmentShaderID(x);const fe=i.getRenderTarget(),xe=$.isInstancedMesh===!0,Ae=$.isBatchedMesh===!0,Me=!!x.map,Oe=!!x.matcap,G=!!q,$e=!!x.aoMap,he=!!x.lightMap,ye=!!x.bumpMap,pe=!!x.normalMap,Pe=!!x.displacementMap,Se=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,F=x.anisotropy>0,te=x.clearcoat>0,ne=x.iridescence>0,Q=x.sheen>0,ue=x.transmission>0,ce=F&&!!x.anisotropyMap,de=te&&!!x.clearcoatMap,be=te&&!!x.clearcoatNormalMap,Le=te&&!!x.clearcoatRoughnessMap,ie=ne&&!!x.iridescenceMap,Ve=ne&&!!x.iridescenceThicknessMap,Ie=Q&&!!x.sheenColorMap,we=Q&&!!x.sheenRoughnessMap,Te=!!x.specularMap,ge=!!x.specularColorMap,R=!!x.specularIntensityMap,se=ue&&!!x.transmissionMap,Ce=ue&&!!x.thicknessMap,_e=!!x.gradientMap,re=!!x.alphaMap,D=x.alphaTest>0,le=!!x.alphaHash,me=!!x.extensions,De=!!z.attributes.uv1,Re=!!z.attributes.uv2,Be=!!z.attributes.uv3;let Fe=Ei;return x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Fe=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:Z,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ae,instancing:xe,instancingColor:xe&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ai,map:Me,matcap:Oe,envMap:G,envMapMode:G&&q.mapping,envMapCubeUVHeight:X,aoMap:$e,lightMap:he,bumpMap:ye,normalMap:pe,displacementMap:d&&Pe,emissiveMap:Se,normalMapObjectSpace:pe&&x.normalMapType===Zf,normalMapTangentSpace:pe&&x.normalMapType===Tl,metalnessMap:A,roughnessMap:S,anisotropy:F,anisotropyMap:ce,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:be,clearcoatRoughnessMap:Le,iridescence:ne,iridescenceMap:ie,iridescenceThicknessMap:Ve,sheen:Q,sheenColorMap:Ie,sheenRoughnessMap:we,specularMap:Te,specularColorMap:ge,specularIntensityMap:R,transmission:ue,transmissionMap:se,thicknessMap:Ce,gradientMap:_e,opaque:x.transparent===!1&&x.blending===Br,alphaMap:re,alphaTest:D,alphaHash:le,combine:x.combine,mapUv:Me&&g(x.map.channel),aoMapUv:$e&&g(x.aoMap.channel),lightMapUv:he&&g(x.lightMap.channel),bumpMapUv:ye&&g(x.bumpMap.channel),normalMapUv:pe&&g(x.normalMap.channel),displacementMapUv:Pe&&g(x.displacementMap.channel),emissiveMapUv:Se&&g(x.emissiveMap.channel),metalnessMapUv:A&&g(x.metalnessMap.channel),roughnessMapUv:S&&g(x.roughnessMap.channel),anisotropyMapUv:ce&&g(x.anisotropyMap.channel),clearcoatMapUv:de&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(x.sheenRoughnessMap.channel),specularMapUv:Te&&g(x.specularMap.channel),specularColorMapUv:ge&&g(x.specularColorMap.channel),specularIntensityMapUv:R&&g(x.specularIntensityMap.channel),transmissionMapUv:se&&g(x.transmissionMap.channel),thicknessMapUv:Ce&&g(x.thicknessMap.channel),alphaMapUv:re&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(pe||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Re,vertexUv3s:Be,pointsUvs:$.isPoints===!0&&!!z.attributes.uv&&(Me||re),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===En,flipSided:x.side===Ot,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:me&&x.extensions.derivatives===!0,extensionFragDepth:me&&x.extensions.fragDepth===!0,extensionDrawBuffers:me&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)w.push(N),w.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(M(w,x),v(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function M(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function y(x){const w=_[x.type];let N;if(w){const O=Bn[w];N=wp.clone(O.uniforms)}else N=x.uniforms;return N}function b(x,w){let N;for(let O=0,$=c.length;O<$;O++){const I=c[O];if(I.cacheKey===w){N=I,++N.usedTimes;break}}return N===void 0&&(N=new G_(i,w,x,s),c.push(N)),N}function E(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:L}}function X_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,f,_,g,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||q_),n.length>1&&n.sort(d||_h),r.length>1&&r.sort(d||_h)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Y_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new vh,i.set(n,[o])):r>=s.length?(o=new vh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function j_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ge};break;case"SpotLight":t={position:new P,direction:new P,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function $_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let K_=0;function Z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J_(i,e){const t=new j_,n=$_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);const s=new P,o=new tt,a=new tt;function l(h,u){let d=0,f=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let g=0,m=0,p=0,M=0,v=0,y=0,b=0,E=0,T=0,L=0,x=0;h.sort(Z_);const w=u===!0?Math.PI:1;for(let O=0,$=h.length;O<$;O++){const I=h[O],z=I.color,U=I.intensity,q=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=z.r*U*w,f+=z.g*U*w,_+=z.b*U*w;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(I.sh.coefficients[Y],U);x++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const K=I.shadow,ee=n.get(I);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,r.directionalShadow[g]=ee,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=I.shadow.matrix,y++}r.directional[g]=Y,g++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(z).multiplyScalar(U*w),Y.distance=q,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,r.spot[p]=Y;const K=I.shadow;if(I.map&&(r.spotLightMap[T]=I.map,T++,K.updateMatrices(I),I.castShadow&&L++),r.spotLightMatrix[p]=K.matrix,I.castShadow){const ee=n.get(I);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,r.spotShadow[p]=ee,r.spotShadowMap[p]=X,E++}p++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(z).multiplyScalar(U),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=Y,M++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*w),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const K=I.shadow,ee=n.get(I);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=I.shadow.matrix,b++}r.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(U*w),Y.groundColor.copy(I.groundColor).multiplyScalar(U*w),r.hemi[v]=Y,v++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=_;const N=r.hash;(N.directionalLength!==g||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==M||N.hemiLength!==v||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==E||N.numSpotMaps!==T||N.numLightProbes!==x)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=E+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=x,N.directionalLength=g,N.pointLength=m,N.spotLength=p,N.rectAreaLength=M,N.hemiLength=v,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=E,N.numSpotMaps=T,N.numLightProbes=x,r.version=K_++)}function c(h,u){let d=0,f=0,_=0,g=0,m=0;const p=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const y=h[M];if(y.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(y.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function xh(i,e){const t=new J_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Q_(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new xh(i,e),t.set(s,[l])):o>=a.length?(l=new xh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class ev extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tv extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
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
}`;function rv(i,e,t){let n=new Al;const r=new Ne,s=new Ne,o=new ft,a=new ev({depthPacking:Kf}),l=new tv,c={},h=t.maxTextureSize,u={[si]:Ot,[Ot]:si,[En]:En},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new At;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new nt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let p=this.type;this.render=function(E,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const x=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Si),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const $=p!==Qn&&this.type===Qn,I=p===Qn&&this.type!==Qn;for(let z=0,U=E.length;z<U;z++){const q=E[z],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Y=X.getFrameExtents();if(r.multiply(Y),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||$===!0||I===!0){const ee=this.type!==Qn?{minFilter:Yt,magFilter:Yt}:{};X.map!==null&&X.map.dispose(),X.map=new er(r.x,r.y,ee),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const K=X.getViewportCount();for(let ee=0;ee<K;ee++){const J=X.getViewport(ee);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),O.viewport(o),X.updateMatrices(q,ee),n=X.getFrustum(),y(T,L,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Qn&&M(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,w,N)};function M(E,T){const L=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new er(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,L,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,L,f,g,null)}function v(E,T,L,x){let w=null;const N=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)w=N;else if(w=L.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=w.uuid,$=T.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let z=I[$];z===void 0&&(z=w.clone(),I[$]=z,T.addEventListener("dispose",b)),w=z}if(w.visible=T.visible,w.wireframe=T.wireframe,x===Qn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=i.properties.get(w);O.light=L}return w}function y(E,T,L,x,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Qn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const $=e.update(E),I=E.material;if(Array.isArray(I)){const z=$.groups;for(let U=0,q=z.length;U<q;U++){const X=z[U],Y=I[X.materialIndex];if(Y&&Y.visible){const K=v(E,Y,x,w);E.onBeforeShadow(i,E,T,L,$,K,X),i.renderBufferDirect(L,null,$,K,E,X),E.onAfterShadow(i,E,T,L,$,K,X)}}}else if(I.visible){const z=v(E,I,x,w);E.onBeforeShadow(i,E,T,L,$,z,null),i.renderBufferDirect(L,null,$,z,E,null),E.onAfterShadow(i,E,T,L,$,z,null)}}const O=E.children;for(let $=0,I=O.length;$<I;$++)y(O[$],T,L,x,w)}function b(E){E.target.removeEventListener("dispose",b);for(const L in c){const x=c[L],w=E.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}function sv(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const le=new ft;let me=null;const De=new ft(0,0,0,0);return{setMask:function(Re){me!==Re&&!D&&(i.colorMask(Re,Re,Re,Re),me=Re)},setLocked:function(Re){D=Re},setClear:function(Re,Be,Fe,Ze,Qe){Qe===!0&&(Re*=Ze,Be*=Ze,Fe*=Ze),le.set(Re,Be,Fe,Ze),De.equals(le)===!1&&(i.clearColor(Re,Be,Fe,Ze),De.copy(le))},reset:function(){D=!1,me=null,De.set(-1,0,0,0)}}}function s(){let D=!1,le=null,me=null,De=null;return{setTest:function(Re){Re?Ae(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Re){le!==Re&&!D&&(i.depthMask(Re),le=Re)},setFunc:function(Re){if(me!==Re){switch(Re){case wf:i.depthFunc(i.NEVER);break;case Af:i.depthFunc(i.ALWAYS);break;case Cf:i.depthFunc(i.LESS);break;case Ea:i.depthFunc(i.LEQUAL);break;case Rf:i.depthFunc(i.EQUAL);break;case Pf:i.depthFunc(i.GEQUAL);break;case Lf:i.depthFunc(i.GREATER);break;case Df:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Re}},setLocked:function(Re){D=Re},setClear:function(Re){De!==Re&&(i.clearDepth(Re),De=Re)},reset:function(){D=!1,le=null,me=null,De=null}}}function o(){let D=!1,le=null,me=null,De=null,Re=null,Be=null,Fe=null,Ze=null,Qe=null;return{setTest:function(ae){D||(ae?Ae(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(ae){le!==ae&&!D&&(i.stencilMask(ae),le=ae)},setFunc:function(ae,je,rt){(me!==ae||De!==je||Re!==rt)&&(i.stencilFunc(ae,je,rt),me=ae,De=je,Re=rt)},setOp:function(ae,je,rt){(Be!==ae||Fe!==je||Ze!==rt)&&(i.stencilOp(ae,je,rt),Be=ae,Fe=je,Ze=rt)},setLocked:function(ae){D=ae},setClear:function(ae){Qe!==ae&&(i.clearStencil(ae),Qe=ae)},reset:function(){D=!1,le=null,me=null,De=null,Re=null,Be=null,Fe=null,Ze=null,Qe=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,y=null,b=null,E=null,T=null,L=null,x=new Ge(0,0,0),w=0,N=!1,O=null,$=null,I=null,z=null,U=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=Y>=2);let ee=null,J={};const W=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),j=new ft().fromArray(W),oe=new ft().fromArray(Z);function fe(D,le,me,De){const Re=new Uint8Array(4),Be=i.createTexture();i.bindTexture(D,Be),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<me;Fe++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(le+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Be}const xe={};xe[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xe[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(i.DEPTH_TEST),l.setFunc(Ea),Se(!1),A(nc),Ae(i.CULL_FACE),pe(Si);function Ae(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Me(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Oe(D,le){return f[D]!==le?(i.bindFramebuffer(D,le),f[D]=le,n&&(D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function G(D,le){let me=g,De=!1;if(D)if(me=_.get(le),me===void 0&&(me=[],_.set(le,me)),D.isWebGLMultipleRenderTargets){const Re=D.texture;if(me.length!==Re.length||me[0]!==i.COLOR_ATTACHMENT0){for(let Be=0,Fe=Re.length;Be<Fe;Be++)me[Be]=i.COLOR_ATTACHMENT0+Be;me.length=Re.length,De=!0}}else me[0]!==i.COLOR_ATTACHMENT0&&(me[0]=i.COLOR_ATTACHMENT0,De=!0);else me[0]!==i.BACK&&(me[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function $e(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const he={[Hi]:i.FUNC_ADD,[uf]:i.FUNC_SUBTRACT,[df]:i.FUNC_REVERSE_SUBTRACT};if(n)he[sc]=i.MIN,he[ac]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(he[sc]=D.MIN_EXT,he[ac]=D.MAX_EXT)}const ye={[ff]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[yf]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[_f]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[Mf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[Sf]:i.CONSTANT_COLOR,[Ef]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(D,le,me,De,Re,Be,Fe,Ze,Qe,ae){if(D===Si){p===!0&&(Me(i.BLEND),p=!1);return}if(p===!1&&(Ae(i.BLEND),p=!0),D!==hf){if(D!==M||ae!==N){if((v!==Hi||E!==Hi)&&(i.blendEquation(i.FUNC_ADD),v=Hi,E=Hi),ae)switch(D){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,b=null,T=null,L=null,x.set(0,0,0),w=0,M=D,N=ae}return}Re=Re||le,Be=Be||me,Fe=Fe||De,(le!==v||Re!==E)&&(i.blendEquationSeparate(he[le],he[Re]),v=le,E=Re),(me!==y||De!==b||Be!==T||Fe!==L)&&(i.blendFuncSeparate(ye[me],ye[De],ye[Be],ye[Fe]),y=me,b=De,T=Be,L=Fe),(Ze.equals(x)===!1||Qe!==w)&&(i.blendColor(Ze.r,Ze.g,Ze.b,Qe),x.copy(Ze),w=Qe),M=D,N=!1}function Pe(D,le){D.side===En?Me(i.CULL_FACE):Ae(i.CULL_FACE);let me=D.side===Ot;le&&(me=!me),Se(me),D.blending===Br&&D.transparent===!1?pe(Si):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const De=D.stencilWrite;c.setTest(De),De&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),F(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function A(D){D!==lf?(Ae(i.CULL_FACE),D!==$&&(D===nc?i.cullFace(i.BACK):D===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),$=D}function S(D){D!==I&&(X&&i.lineWidth(D),I=D)}function F(D,le,me){D?(Ae(i.POLYGON_OFFSET_FILL),(z!==le||U!==me)&&(i.polygonOffset(le,me),z=le,U=me)):Me(i.POLYGON_OFFSET_FILL)}function te(D){D?Ae(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function ne(D){D===void 0&&(D=i.TEXTURE0+q-1),ee!==D&&(i.activeTexture(D),ee=D)}function Q(D,le,me){me===void 0&&(ee===null?me=i.TEXTURE0+q-1:me=ee);let De=J[me];De===void 0&&(De={type:void 0,texture:void 0},J[me]=De),(De.type!==D||De.texture!==le)&&(ee!==me&&(i.activeTexture(me),ee=me),i.bindTexture(D,le||xe[D]),De.type=D,De.texture=le)}function ue(){const D=J[ee];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(D){j.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),j.copy(D))}function se(D){oe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),oe.copy(D))}function Ce(D,le){let me=u.get(le);me===void 0&&(me=new WeakMap,u.set(le,me));let De=me.get(D);De===void 0&&(De=i.getUniformBlockIndex(le,D.name),me.set(D,De))}function _e(D,le){const De=u.get(le).get(D);h.get(le)!==De&&(i.uniformBlockBinding(le,De,D.__bindingPointIndex),h.set(le,De))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ee=null,J={},f={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,y=null,b=null,E=null,T=null,L=null,x=new Ge(0,0,0),w=0,N=!1,O=null,$=null,I=null,z=null,U=null,j.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ae,disable:Me,bindFramebuffer:Oe,drawBuffers:G,useProgram:$e,setBlending:pe,setMaterial:Pe,setFlipSided:Se,setCullFace:A,setLineWidth:S,setPolygonOffset:F,setScissorTest:te,activeTexture:ne,bindTexture:Q,unbindTexture:ue,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:Te,texImage3D:ge,updateUBOMapping:Ce,uniformBlockBinding:_e,texStorage2D:Ie,texStorage3D:we,texSubImage2D:be,texSubImage3D:Le,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ve,scissor:R,viewport:se,reset:re}}function av(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return f?new OffscreenCanvas(A,S):Es("canvas")}function g(A,S,F,te){let ne=1;if((A.width>te||A.height>te)&&(ne=te/Math.max(A.width,A.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Q=S?Jo:Math.floor,ue=Q(ne*A.width),ce=Q(ne*A.height);u===void 0&&(u=_(ue,ce));const de=F?_(ue,ce):u;return de.width=ue,de.height=ce,de.getContext("2d").drawImage(A,0,0,ue,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ue+"x"+ce+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Nc(A.width)&&Nc(A.height)}function p(A){return a?!1:A.wrapS!==Dn||A.wrapT!==Dn||A.minFilter!==Yt&&A.minFilter!==Sn}function M(A,S){return A.generateMipmaps&&S&&A.minFilter!==Yt&&A.minFilter!==Sn}function v(A){i.generateMipmap(A)}function y(A,S,F,te,ne=!1){if(a===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=S;if(S===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),S===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RGBA){const ue=ne?Ta:it.getTransfer(te);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=ue===dt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(A,S,F){return M(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){return A===Yt||A===oc||A===ja?i.NEAREST:i.LINEAR}function T(A){const S=A.target;S.removeEventListener("dispose",T),x(S),S.isVideoTexture&&h.delete(S)}function L(A){const S=A.target;S.removeEventListener("dispose",L),N(S)}function x(A){const S=n.get(A);if(S.__webglInit===void 0)return;const F=A.source,te=d.get(F);if(te){const ne=te[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(A),Object.keys(te).length===0&&d.delete(F)}n.remove(A)}function w(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const F=A.source,te=d.get(F);delete te[S.__cacheKey],o.memory.textures--}function N(A){const S=A.texture,F=n.get(A),te=n.get(S);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(F.__webglFramebuffer[ne]))for(let Q=0;Q<F.__webglFramebuffer[ne].length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[ne][Q]);else i.deleteFramebuffer(F.__webglFramebuffer[ne]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ne])}else{if(Array.isArray(F.__webglFramebuffer))for(let ne=0;ne<F.__webglFramebuffer.length;ne++)i.deleteFramebuffer(F.__webglFramebuffer[ne]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ne=0;ne<F.__webglColorRenderbuffer.length;ne++)F.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ne]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,Q=S.length;ne<Q;ne++){const ue=n.get(S[ne]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(A)}let O=0;function $(){O=0}function I(){const A=O;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){const F=n.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,A,S);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function q(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){j(F,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function X(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){j(F,A,S);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function Y(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){oe(F,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}const K={[Yo]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},ee={[Yt]:i.NEAREST,[oc]:i.NEAREST_MIPMAP_NEAREST,[ja]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Gf]:i.LINEAR_MIPMAP_NEAREST,[ys]:i.LINEAR_MIPMAP_LINEAR},J={[Jf]:i.NEVER,[rp]:i.ALWAYS,[Qf]:i.LESS,[yu]:i.LEQUAL,[ep]:i.EQUAL,[ip]:i.GEQUAL,[tp]:i.GREATER,[np]:i.NOTEQUAL};function W(A,S,F){if(F?(i.texParameteri(A,i.TEXTURE_WRAP_S,K[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ee[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ee[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Dn||S.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,E(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==Yt&&S.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Yt||S.minFilter!==ja&&S.minFilter!==ys||S.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ss&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Z(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const te=S.source;let ne=d.get(te);ne===void 0&&(ne={},d.set(te,ne));const Q=z(S);if(Q!==A.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ne[Q].usedTimes++;const ue=ne[A.__cacheKey];ue!==void 0&&(ne[A.__cacheKey].usedTimes--,ue.usedTimes===0&&w(S)),A.__cacheKey=Q,A.__webglTexture=ne[Q].texture}return F}function j(A,S,F){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);const ne=Z(A,S),Q=S.source;t.bindTexture(te,A.__webglTexture,i.TEXTURE0+F);const ue=n.get(Q);if(Q.version!==ue.__version||ne===!0){t.activeTexture(i.TEXTURE0+F);const ce=it.getPrimaries(it.workingColorSpace),de=S.colorSpace===Tn?null:it.getPrimaries(S.colorSpace),be=S.colorSpace===Tn||ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Le=p(S)&&m(S.image)===!1;let ie=g(S.image,Le,!1,r.maxTextureSize);ie=Se(S,ie);const Ve=m(ie)||a,Ie=s.convert(S.format,S.colorSpace);let we=s.convert(S.type),Te=y(S.internalFormat,Ie,we,S.colorSpace,S.isVideoTexture);W(te,S,Ve);let ge;const R=S.mipmaps,se=a&&S.isVideoTexture!==!0&&Te!==xu,Ce=ue.__version===void 0||ne===!0,_e=b(S,ie,Ve);if(S.isDepthTexture)Te=i.DEPTH_COMPONENT,a?S.type===vi?Te=i.DEPTH_COMPONENT32F:S.type===_i?Te=i.DEPTH_COMPONENT24:S.type===Yi?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:S.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ji&&Te===i.DEPTH_COMPONENT&&S.type!==El&&S.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_i,we=s.convert(S.type)),S.format===qr&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,S.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Yi,we=s.convert(S.type))),Ce&&(se?t.texStorage2D(i.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Te,ie.width,ie.height,0,Ie,we,null));else if(S.isDataTexture)if(R.length>0&&Ve){se&&Ce&&t.texStorage2D(i.TEXTURE_2D,_e,Te,R[0].width,R[0].height);for(let re=0,D=R.length;re<D;re++)ge=R[re],se?t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,Ie,we,ge.data):t.texImage2D(i.TEXTURE_2D,re,Te,ge.width,ge.height,0,Ie,we,ge.data);S.generateMipmaps=!1}else se?(Ce&&t.texStorage2D(i.TEXTURE_2D,_e,Te,ie.width,ie.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Ie,we,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Te,ie.width,ie.height,0,Ie,we,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){se&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Te,R[0].width,R[0].height,ie.depth);for(let re=0,D=R.length;re<D;re++)ge=R[re],S.format!==In?Ie!==null?se?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ie.depth,Ie,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Te,ge.width,ge.height,ie.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ie.depth,Ie,we,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Te,ge.width,ge.height,ie.depth,0,Ie,we,ge.data)}else{se&&Ce&&t.texStorage2D(i.TEXTURE_2D,_e,Te,R[0].width,R[0].height);for(let re=0,D=R.length;re<D;re++)ge=R[re],S.format!==In?Ie!==null?se?t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,Ie,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,Ie,we,ge.data):t.texImage2D(i.TEXTURE_2D,re,Te,ge.width,ge.height,0,Ie,we,ge.data)}else if(S.isDataArrayTexture)se?(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Te,ie.width,ie.height,ie.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ie,we,ie.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,Ie,we,ie.data);else if(S.isData3DTexture)se?(Ce&&t.texStorage3D(i.TEXTURE_3D,_e,Te,ie.width,ie.height,ie.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ie,we,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,Ie,we,ie.data);else if(S.isFramebufferTexture){if(Ce)if(se)t.texStorage2D(i.TEXTURE_2D,_e,Te,ie.width,ie.height);else{let re=ie.width,D=ie.height;for(let le=0;le<_e;le++)t.texImage2D(i.TEXTURE_2D,le,Te,re,D,0,Ie,we,null),re>>=1,D>>=1}}else if(R.length>0&&Ve){se&&Ce&&t.texStorage2D(i.TEXTURE_2D,_e,Te,R[0].width,R[0].height);for(let re=0,D=R.length;re<D;re++)ge=R[re],se?t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ie,we,ge):t.texImage2D(i.TEXTURE_2D,re,Te,Ie,we,ge);S.generateMipmaps=!1}else se?(Ce&&t.texStorage2D(i.TEXTURE_2D,_e,Te,ie.width,ie.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,we,ie)):t.texImage2D(i.TEXTURE_2D,0,Te,Ie,we,ie);M(S,Ve)&&v(te),ue.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function oe(A,S,F){if(S.image.length!==6)return;const te=Z(A,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const Q=n.get(ne);if(ne.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+F);const ue=it.getPrimaries(it.workingColorSpace),ce=S.colorSpace===Tn?null:it.getPrimaries(S.colorSpace),de=S.colorSpace===Tn||ue===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,Le=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let re=0;re<6;re++)!be&&!Le?ie[re]=g(S.image[re],!1,!0,r.maxCubemapSize):ie[re]=Le?S.image[re].image:S.image[re],ie[re]=Se(S,ie[re]);const Ve=ie[0],Ie=m(Ve)||a,we=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),ge=y(S.internalFormat,we,Te,S.colorSpace),R=a&&S.isVideoTexture!==!0,se=Q.__version===void 0||te===!0;let Ce=b(S,Ve,Ie);W(i.TEXTURE_CUBE_MAP,S,Ie);let _e;if(be){R&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ge,Ve.width,Ve.height);for(let re=0;re<6;re++){_e=ie[re].mipmaps;for(let D=0;D<_e.length;D++){const le=_e[D];S.format!==In?we!==null?R?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,D,0,0,le.width,le.height,we,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,D,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,D,0,0,le.width,le.height,we,Te,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,D,ge,le.width,le.height,0,we,Te,le.data)}}}else{_e=S.mipmaps,R&&se&&(_e.length>0&&Ce++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ge,ie[0].width,ie[0].height));for(let re=0;re<6;re++)if(Le){R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ie[re].width,ie[re].height,we,Te,ie[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,ie[re].width,ie[re].height,0,we,Te,ie[re].data);for(let D=0;D<_e.length;D++){const me=_e[D].image[re].image;R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,D+1,0,0,me.width,me.height,we,Te,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,D+1,ge,me.width,me.height,0,we,Te,me.data)}}else{R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,we,Te,ie[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,we,Te,ie[re]);for(let D=0;D<_e.length;D++){const le=_e[D];R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,D+1,0,0,we,Te,le.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,D+1,ge,we,Te,le.image[re])}}}M(S,Ie)&&v(i.TEXTURE_CUBE_MAP),Q.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function fe(A,S,F,te,ne,Q){const ue=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),de=y(F.internalFormat,ue,ce,F.colorSpace);if(!n.get(S).__hasExternalTextures){const Le=Math.max(1,S.width>>Q),ie=Math.max(1,S.height>>Q);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Q,de,Le,ie,S.depth,0,ue,ce,null):t.texImage2D(ne,Q,de,Le,ie,0,ue,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),pe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ne,n.get(F).__webglTexture,0,ye(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ne,n.get(F).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(A,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let te=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||pe(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===vi?te=i.DEPTH_COMPONENT32F:ne.type===_i&&(te=i.DEPTH_COMPONENT24));const Q=ye(S);pe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,te,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,te,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const te=ye(S);F&&pe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):pe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<te.length;ne++){const Q=te[ne],ue=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),de=y(Q.internalFormat,ue,ce,Q.colorSpace),be=ye(S);F&&pe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,de,S.width,S.height):pe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ne=ye(S);if(S.depthTexture.format===ji)pe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===qr)pe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Me(A){const S=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ae(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=i.createRenderbuffer(),xe(S.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),xe(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(A,S,F){const te=n.get(A);S!==void 0&&fe(te.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Me(A)}function G(A){const S=A.texture,F=n.get(A),te=n.get(S);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,Q=A.isWebGLMultipleRenderTargets===!0,ue=m(A)||a;if(ne){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let de=0;de<S.mipmaps.length;de++)F.__webglFramebuffer[ce][de]=i.createFramebuffer()}else F.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)F.__webglFramebuffer[ce]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Q)if(r.drawBuffers){const ce=A.texture;for(let de=0,be=ce.length;de<be;de++){const Le=n.get(ce[de]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&pe(A)===!1){const ce=Q?S:[S];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const be=ce[de];F.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const Le=s.convert(be.format,be.colorSpace),ie=s.convert(be.type),Ve=y(be.internalFormat,Le,ie,be.colorSpace,A.isXRRenderTarget===!0),Ie=ye(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,F.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),W(i.TEXTURE_CUBE_MAP,S,ue);for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)fe(F.__webglFramebuffer[ce][de],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else fe(F.__webglFramebuffer[ce],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(S,ue)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ce=A.texture;for(let de=0,be=ce.length;de<be;de++){const Le=ce[de],ie=n.get(Le);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),W(i.TEXTURE_2D,Le,ue),fe(F.__webglFramebuffer,A,Le,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),M(Le,ue)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),W(ce,S,ue),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)fe(F.__webglFramebuffer[de],A,S,i.COLOR_ATTACHMENT0,ce,de);else fe(F.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ce,0);M(S,ue)&&v(ce),t.unbindTexture()}A.depthBuffer&&Me(A)}function $e(A){const S=m(A)||a,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ne=F.length;te<ne;te++){const Q=F[te];if(M(Q,S)){const ue=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(Q).__webglTexture;t.bindTexture(ue,ce),v(ue),t.unbindTexture()}}}function he(A){if(a&&A.samples>0&&pe(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,te=A.height;let ne=i.COLOR_BUFFER_BIT;const Q=[],ue=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(A),de=A.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<S.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<S.length;be++){Q.push(i.COLOR_ATTACHMENT0+be),A.depthBuffer&&Q.push(ue);const Le=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Le===!1&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[be]),Le===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ue])),de){const ie=n.get(S[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,F,te,0,0,F,te,ne,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<S.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const Le=n.get(S[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function ye(A){return Math.min(r.maxSamples,A.samples)}function pe(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Se(A,S){const F=A.colorSpace,te=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ko||F!==ai&&F!==Tn&&(it.getTransfer(F)===dt?a===!1?e.has("EXT_sRGB")===!0&&te===In?(A.format=Ko,A.minFilter=Sn,A.generateMipmaps=!1):S=Eu.sRGBToLinear(S):(te!==In||ne!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=I,this.resetTextureUnits=$,this.setTexture2D=U,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Oe,this.setupRenderTarget=G,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=pe}function ov(i,e,t){const n=t.isWebGL2;function r(s,o=Tn){let a;const l=it.getTransfer(o);if(s===Ti)return i.UNSIGNED_BYTE;if(s===pu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===mu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===kf)return i.BYTE;if(s===Hf)return i.SHORT;if(s===El)return i.UNSIGNED_SHORT;if(s===fu)return i.INT;if(s===_i)return i.UNSIGNED_INT;if(s===vi)return i.FLOAT;if(s===Ss)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vf)return i.ALPHA;if(s===In)return i.RGBA;if(s===Wf)return i.LUMINANCE;if(s===Xf)return i.LUMINANCE_ALPHA;if(s===ji)return i.DEPTH_COMPONENT;if(s===qr)return i.DEPTH_STENCIL;if(s===Ko)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===qf)return i.RED;if(s===gu)return i.RED_INTEGER;if(s===Yf)return i.RG;if(s===_u)return i.RG_INTEGER;if(s===vu)return i.RGBA_INTEGER;if(s===$a||s===Ka||s===Za||s===Ja)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lc||s===cc||s===hc||s===uc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===lc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dc||s===fc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===dc)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===fc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===Mc||s===yc||s===Sc||s===Ec||s===Tc||s===bc||s===wc||s===Ac)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===pc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_c)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ec)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ac)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qa||s===Cc||s===Rc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qa)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jf||s===Pc||s===Lc||s===Dc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Qa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Pc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class lv extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hv extends rr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const M=[],v=[],y=new Ne;let b=null;const E=new Qt;E.layers.enable(1),E.viewport=new ft;const T=new Qt;T.layers.enable(2),T.viewport=new ft;const L=[E,T],x=new lv;x.layers.enable(1),x.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=M[W];return Z===void 0&&(Z=new To,M[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=M[W];return Z===void 0&&(Z=new To,M[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=M[W];return Z===void 0&&(Z=new To,M[W]=Z),Z.getHandSpace()};function O(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const j=M[Z];j!==void 0&&(j.update(W.inputSource,W.frame,c||o),j.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",I);for(let W=0;W<M.length;W++){const Z=v[W];Z!==null&&(v[W]=null,M[W].disconnect(Z))}w=null,N=null,e.setRenderTarget(m),f=null,d=null,u=null,r=null,p=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new er(f.framebufferWidth,f.framebufferHeight,{format:In,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,j=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?qr:ji,j=g.stencil?Yi:_i);const fe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new er(d.textureWidth,d.textureHeight,{format:In,type:Ti,depthTexture:new Uu(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const xe=e.properties.get(p);xe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(W){for(let Z=0;Z<W.removed.length;Z++){const j=W.removed[Z],oe=v.indexOf(j);oe>=0&&(v[oe]=null,M[oe].disconnect(j))}for(let Z=0;Z<W.added.length;Z++){const j=W.added[Z];let oe=v.indexOf(j);if(oe===-1){for(let xe=0;xe<M.length;xe++)if(xe>=v.length){v.push(j),oe=xe;break}else if(v[xe]===null){v[xe]=j,oe=xe;break}if(oe===-1)break}const fe=M[oe];fe&&fe.connect(j)}}const z=new P,U=new P;function q(W,Z,j){z.setFromMatrixPosition(Z.matrixWorld),U.setFromMatrixPosition(j.matrixWorld);const oe=z.distanceTo(U),fe=Z.projectionMatrix.elements,xe=j.projectionMatrix.elements,Ae=fe[14]/(fe[10]-1),Me=fe[14]/(fe[10]+1),Oe=(fe[9]+1)/fe[5],G=(fe[9]-1)/fe[5],$e=(fe[8]-1)/fe[0],he=(xe[8]+1)/xe[0],ye=Ae*$e,pe=Ae*he,Pe=oe/(-$e+he),Se=Pe*-$e;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Se),W.translateZ(Pe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const A=Ae+Pe,S=Me+Pe,F=ye-Se,te=pe+(oe-Se),ne=Oe*Me/S*A,Q=G*Me/S*A;W.projectionMatrix.makePerspective(F,te,ne,Q,A,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.near=T.near=E.near=W.near,x.far=T.far=E.far=W.far,(w!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,N=x.far);const Z=W.parent,j=x.cameras;X(x,Z);for(let oe=0;oe<j.length;oe++)X(j[oe],Z);j.length===2?q(x,E,T):x.projectionMatrix.copy(E.projectionMatrix),Y(W,x,Z)};function Y(W,Z,j){j===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(j.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let K=null;function ee(W,Z){if(h=Z.getViewerPose(c||o),_=Z,h!==null){const j=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let oe=!1;j.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let fe=0;fe<j.length;fe++){const xe=j[fe];let Ae=null;if(f!==null)Ae=f.getViewport(xe);else{const Oe=u.getViewSubImage(d,xe);Ae=Oe.viewport,fe===0&&(e.setRenderTargetTextures(p,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(p))}let Me=L[fe];Me===void 0&&(Me=new Qt,Me.layers.enable(fe),Me.viewport=new ft,L[fe]=Me),Me.matrix.fromArray(xe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(xe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(x.matrix.copy(Me.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Me)}}for(let j=0;j<M.length;j++){const oe=v[j],fe=M[j];oe!==null&&fe!==void 0&&fe.update(oe,Z,c||o)}K&&K(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const J=new Du;J.setAnimationLoop(ee),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function uv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ru(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dv(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=r[M.id];y===void 0&&(_(M),y=h(M),r[M.id]=y,M.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(M,b);const E=e.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function h(M){const v=u();M.__bindingPointIndex=v;const y=i.createBuffer(),b=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=r[M.id],y=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const L=Array.isArray(y[E])?y[E]:[y[E]];for(let x=0,w=L.length;x<w;x++){const N=L[x];if(f(N,E,x,b)===!0){const O=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let z=0;z<$.length;z++){const U=$[z],q=g(U);typeof U=="number"||typeof U=="boolean"?(N.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,O+I,N.__data)):U.isMatrix3?(N.__data[0]=U.elements[0],N.__data[1]=U.elements[1],N.__data[2]=U.elements[2],N.__data[3]=0,N.__data[4]=U.elements[3],N.__data[5]=U.elements[4],N.__data[6]=U.elements[5],N.__data[7]=0,N.__data[8]=U.elements[6],N.__data[9]=U.elements[7],N.__data[10]=U.elements[8],N.__data[11]=0):(U.toArray(N.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,y,b){const E=M.value,T=v+"_"+y;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:b[T]=E.clone(),!0;{const L=b[T];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return b[T]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function _(M){const v=M.uniforms;let y=0;const b=16;for(let T=0,L=v.length;T<L;T++){const x=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,N=x.length;w<N;w++){const O=x[w],$=Array.isArray(O.value)?O.value:[O.value];for(let I=0,z=$.length;I<z;I++){const U=$[I],q=g(U),X=y%b;X!==0&&b-X<q.boundary&&(y+=b-X),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=q.storage}}}const E=y%b;return E>0&&(y+=b-E),M.__size=y,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Rl{constructor(e={}){const{canvas:t=lp(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const v=this;let y=!1,b=0,E=0,T=null,L=-1,x=null;const w=new ft,N=new ft;let O=null;const $=new Ge(0);let I=0,z=t.width,U=t.height,q=1,X=null,Y=null;const K=new ft(0,0,z,U),ee=new ft(0,0,z,U);let J=!1;const W=new Al;let Z=!1,j=!1,oe=null;const fe=new tt,xe=new Ne,Ae=new P,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return T===null?q:1}let G=n;function $e(C,B){for(let H=0;H<C.length;H++){const V=C[H],k=t.getContext(V,B);if(k!==null)return k}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",le,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),G=$e(B,C),G===null)throw $e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let he,ye,pe,Pe,Se,A,S,F,te,ne,Q,ue,ce,de,be,Le,ie,Ve,Ie,we,Te,ge,R,se;function Ce(){he=new Sg(G),ye=new gg(G,he,e),he.init(ye),ge=new ov(G,he,ye),pe=new sv(G,he,ye),Pe=new bg(G),Se=new X_,A=new av(G,he,pe,Se,ye,ge,Pe),S=new vg(v),F=new yg(v),te=new Ip(G,ye),R=new pg(G,he,te,ye),ne=new Eg(G,te,Pe,R),Q=new Rg(G,ne,te,Pe),Ie=new Cg(G,ye,A),Le=new _g(Se),ue=new W_(v,S,F,he,ye,R,Le),ce=new uv(v,Se),de=new Y_,be=new Q_(he,ye),Ve=new fg(v,S,F,pe,Q,d,l),ie=new rv(v,Q,ye),se=new dv(G,Pe,ye,pe),we=new mg(G,he,Pe,ye),Te=new Tg(G,he,Pe,ye),Pe.programs=ue.programs,v.capabilities=ye,v.extensions=he,v.properties=Se,v.renderLists=de,v.shadowMap=ie,v.state=pe,v.info=Pe}Ce();const _e=new hv(v,G);this.xr=_e,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=he.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=he.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(z,U,!1))},this.getSize=function(C){return C.set(z,U)},this.setSize=function(C,B,H=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,U=B,t.width=Math.floor(C*q),t.height=Math.floor(B*q),H===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(z*q,U*q).floor()},this.setDrawingBufferSize=function(C,B,H){z=C,U=B,q=H,t.width=Math.floor(C*H),t.height=Math.floor(B*H),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,B,H,V){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,B,H,V),pe.viewport(w.copy(K).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,B,H,V){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,B,H,V),pe.scissor(N.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){pe.setScissorTest(J=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(C=!0,B=!0,H=!0){let V=0;if(C){let k=!1;if(T!==null){const Ee=T.texture.format;k=Ee===vu||Ee===_u||Ee===gu}if(k){const Ee=T.texture.type,Ue=Ee===Ti||Ee===_i||Ee===El||Ee===Yi||Ee===pu||Ee===mu,ze=Ve.getClearColor(),ke=Ve.getClearAlpha(),Xe=ze.r,He=ze.g,We=ze.b;Ue?(f[0]=Xe,f[1]=He,f[2]=We,f[3]=ke,G.clearBufferuiv(G.COLOR,0,f)):(_[0]=Xe,_[1]=He,_[2]=We,_[3]=ke,G.clearBufferiv(G.COLOR,0,_))}else V|=G.COLOR_BUFFER_BIT}B&&(V|=G.DEPTH_BUFFER_BIT),H&&(V|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),be.dispose(),Se.dispose(),S.dispose(),F.dispose(),Q.dispose(),R.dispose(),se.dispose(),ue.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Qe),_e.removeEventListener("sessionend",ae),oe&&(oe.dispose(),oe=null),je.stop()};function re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Pe.autoReset,B=ie.enabled,H=ie.autoUpdate,V=ie.needsUpdate,k=ie.type;Ce(),Pe.autoReset=C,ie.enabled=B,ie.autoUpdate=H,ie.needsUpdate=V,ie.type=k}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function me(C){const B=C.target;B.removeEventListener("dispose",me),De(B)}function De(C){Re(C),Se.remove(C)}function Re(C){const B=Se.get(C).programs;B!==void 0&&(B.forEach(function(H){ue.releaseProgram(H)}),C.isShaderMaterial&&ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,H,V,k,Ee){B===null&&(B=Me);const Ue=k.isMesh&&k.matrixWorld.determinant()<0,ze=an(C,B,H,V,k);pe.setMaterial(V,Ue);let ke=H.index,Xe=1;if(V.wireframe===!0){if(ke=ne.getWireframeAttribute(H),ke===void 0)return;Xe=2}const He=H.drawRange,We=H.attributes.position;let ut=He.start*Xe,It=(He.start+He.count)*Xe;Ee!==null&&(ut=Math.max(ut,Ee.start*Xe),It=Math.min(It,(Ee.start+Ee.count)*Xe)),ke!==null?(ut=Math.max(ut,0),It=Math.min(It,ke.count)):We!=null&&(ut=Math.max(ut,0),It=Math.min(It,We.count));const ct=It-ut;if(ct<0||ct===1/0)return;R.setup(k,V,ze,H,ke);let Ut,st=we;if(ke!==null&&(Ut=te.get(ke),st=Te,st.setIndex(Ut)),k.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*Oe()),st.setMode(G.LINES)):st.setMode(G.TRIANGLES);else if(k.isLine){let qe=V.linewidth;qe===void 0&&(qe=1),pe.setLineWidth(qe*Oe()),k.isLineSegments?st.setMode(G.LINES):k.isLineLoop?st.setMode(G.LINE_LOOP):st.setMode(G.LINE_STRIP)}else k.isPoints?st.setMode(G.POINTS):k.isSprite&&st.setMode(G.TRIANGLES);if(k.isBatchedMesh)st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)st.renderInstances(ut,ct,k.count);else if(H.isInstancedBufferGeometry){const qe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Di=Math.min(H.instanceCount,qe);st.renderInstances(ut,ct,Di)}else st.render(ut,ct)};function Be(C,B,H){C.transparent===!0&&C.side===En&&C.forceSinglePass===!1?(C.side=Ot,C.needsUpdate=!0,Fn(C,B,H),C.side=si,C.needsUpdate=!0,Fn(C,B,H),C.side=En):Fn(C,B,H)}this.compile=function(C,B,H=null){H===null&&(H=C),m=be.get(H),m.init(),M.push(m),H.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),C!==H&&C.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(v._useLegacyLights);const V=new Set;return C.traverse(function(k){const Ee=k.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){const ze=Ee[Ue];Be(ze,H,k),V.add(ze)}else Be(Ee,H,k),V.add(Ee)}),M.pop(),m=null,V},this.compileAsync=function(C,B,H=null){const V=this.compile(C,B,H);return new Promise(k=>{function Ee(){if(V.forEach(function(Ue){Se.get(Ue).currentProgram.isReady()&&V.delete(Ue)}),V.size===0){k(C);return}setTimeout(Ee,10)}he.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Fe=null;function Ze(C){Fe&&Fe(C)}function Qe(){je.stop()}function ae(){je.start()}const je=new Du;je.setAnimationLoop(Ze),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(C){Fe=C,_e.setAnimationLoop(C),C===null?je.stop():je.start()},_e.addEventListener("sessionstart",Qe),_e.addEventListener("sessionend",ae),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,B,T),m=be.get(C,M.length),m.init(),M.push(m),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(fe),j=this.localClippingEnabled,Z=Le.init(this.clippingPlanes,j),g=de.get(C,p.length),g.init(),p.push(g),rt(C,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(X,Y),this.info.render.frame++,Z===!0&&Le.beginShadows();const H=m.state.shadowsArray;if(ie.render(H,C,B),Z===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(g,C),m.setupLights(v._useLegacyLights),B.isArrayCamera){const V=B.cameras;for(let k=0,Ee=V.length;k<Ee;k++){const Ue=V[k];vn(g,C,Ue,Ue.viewport)}}else vn(g,C,B);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,B),R.resetDefaultState(),L=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function rt(C,B,H,V){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)H=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){V&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);const Ue=Q.update(C),ze=C.material;ze.visible&&g.push(C,Ue,ze,H,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Ue=Q.update(C),ze=C.material;if(V&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ae.copy(Ue.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(fe)),Array.isArray(ze)){const ke=Ue.groups;for(let Xe=0,He=ke.length;Xe<He;Xe++){const We=ke[Xe],ut=ze[We.materialIndex];ut&&ut.visible&&g.push(C,Ue,ut,H,Ae.z,We)}}else ze.visible&&g.push(C,Ue,ze,H,Ae.z,null)}}const Ee=C.children;for(let Ue=0,ze=Ee.length;Ue<ze;Ue++)rt(Ee[Ue],B,H,V)}function vn(C,B,H,V){const k=C.opaque,Ee=C.transmissive,Ue=C.transparent;m.setupLightsView(H),Z===!0&&Le.setGlobalState(v.clippingPlanes,H),Ee.length>0&&et(k,Ee,B,H),V&&pe.viewport(w.copy(V)),k.length>0&&On(k,B,H),Ee.length>0&&On(Ee,B,H),Ue.length>0&&On(Ue,B,H),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function et(C,B,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const Ee=ye.isWebGL2;oe===null&&(oe=new er(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Ss:Ti,minFilter:ys,samples:Ee?4:0})),v.getDrawingBufferSize(xe),Ee?oe.setSize(xe.x,xe.y):oe.setSize(Jo(xe.x),Jo(xe.y));const Ue=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor($),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const ze=v.toneMapping;v.toneMapping=Ei,On(C,H,V),A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe);let ke=!1;for(let Xe=0,He=B.length;Xe<He;Xe++){const We=B[Xe],ut=We.object,It=We.geometry,ct=We.material,Ut=We.group;if(ct.side===En&&ut.layers.test(V.layers)){const st=ct.side;ct.side=Ot,ct.needsUpdate=!0,Xn(ut,H,V,It,ct,Ut),ct.side=st,ct.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe)),v.setRenderTarget(Ue),v.setClearColor($,I),v.toneMapping=ze}function On(C,B,H){const V=B.isScene===!0?B.overrideMaterial:null;for(let k=0,Ee=C.length;k<Ee;k++){const Ue=C[k],ze=Ue.object,ke=Ue.geometry,Xe=V===null?Ue.material:V,He=Ue.group;ze.layers.test(H.layers)&&Xn(ze,B,H,ke,Xe,He)}}function Xn(C,B,H,V,k,Ee){C.onBeforeRender(v,B,H,V,k,Ee),C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(v,B,H,V,C,Ee),k.transparent===!0&&k.side===En&&k.forceSinglePass===!1?(k.side=Ot,k.needsUpdate=!0,v.renderBufferDirect(H,B,V,k,C,Ee),k.side=si,k.needsUpdate=!0,v.renderBufferDirect(H,B,V,k,C,Ee),k.side=En):v.renderBufferDirect(H,B,V,k,C,Ee),C.onAfterRender(v,B,H,V,k,Ee)}function Fn(C,B,H){B.isScene!==!0&&(B=Me);const V=Se.get(C),k=m.state.lights,Ee=m.state.shadowsArray,Ue=k.state.version,ze=ue.getParameters(C,k.state,Ee,B,H),ke=ue.getProgramCacheKey(ze);let Xe=V.programs;V.environment=C.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(C.isMeshStandardMaterial?F:S).get(C.envMap||V.environment),Xe===void 0&&(C.addEventListener("dispose",me),Xe=new Map,V.programs=Xe);let He=Xe.get(ke);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===Ue)return xn(C,ze),He}else ze.uniforms=ue.getUniforms(C),C.onBuild(H,ze,v),C.onBeforeCompile(ze,v),He=ue.acquireProgram(ze,ke),Xe.set(ke,He),V.uniforms=ze.uniforms;const We=V.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Le.uniform),xn(C,ze),V.needsLights=Zt(C),V.lightsStateVersion=Ue,V.needsLights&&(We.ambientLightColor.value=k.state.ambient,We.lightProbe.value=k.state.probe,We.directionalLights.value=k.state.directional,We.directionalLightShadows.value=k.state.directionalShadow,We.spotLights.value=k.state.spot,We.spotLightShadows.value=k.state.spotShadow,We.rectAreaLights.value=k.state.rectArea,We.ltc_1.value=k.state.rectAreaLTC1,We.ltc_2.value=k.state.rectAreaLTC2,We.pointLights.value=k.state.point,We.pointLightShadows.value=k.state.pointShadow,We.hemisphereLights.value=k.state.hemi,We.directionalShadowMap.value=k.state.directionalShadowMap,We.directionalShadowMatrix.value=k.state.directionalShadowMatrix,We.spotShadowMap.value=k.state.spotShadowMap,We.spotLightMatrix.value=k.state.spotLightMatrix,We.spotLightMap.value=k.state.spotLightMap,We.pointShadowMap.value=k.state.pointShadowMap,We.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=He,V.uniformsList=null,He}function hi(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=_a.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function xn(C,B){const H=Se.get(C);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function an(C,B,H,V,k){B.isScene!==!0&&(B=Me),A.resetTextureUnits();const Ee=B.fog,Ue=V.isMeshStandardMaterial?B.environment:null,ze=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ai,ke=(V.isMeshStandardMaterial?F:S).get(V.envMap||Ue),Xe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),We=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,It=!!H.morphAttributes.color;let ct=Ei;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ct=v.toneMapping);const Ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=Ut!==void 0?Ut.length:0,qe=Se.get(V),Di=m.state.lights;if(Z===!0&&(j===!0||C!==x)){const zt=C===x&&V.id===L;Le.setState(V,C,zt)}let ht=!1;V.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Di.state.version||qe.outputColorSpace!==ze||k.isBatchedMesh&&qe.batching===!1||!k.isBatchedMesh&&qe.batching===!0||k.isInstancedMesh&&qe.instancing===!1||!k.isInstancedMesh&&qe.instancing===!0||k.isSkinnedMesh&&qe.skinning===!1||!k.isSkinnedMesh&&qe.skinning===!0||k.isInstancedMesh&&qe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qe.instancingColor===!1&&k.instanceColor!==null||qe.envMap!==ke||V.fog===!0&&qe.fog!==Ee||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Le.numPlanes||qe.numIntersection!==Le.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==He||qe.morphTargets!==We||qe.morphNormals!==ut||qe.morphColors!==It||qe.toneMapping!==ct||ye.isWebGL2===!0&&qe.morphTargetsCount!==st)&&(ht=!0):(ht=!0,qe.__version=V.version);let Jt=qe.currentProgram;ht===!0&&(Jt=Fn(V,B,k));let lr=!1,qn=!1,Yn=!1;const Mt=Jt.getUniforms(),on=qe.uniforms;if(pe.useProgram(Jt.program)&&(lr=!0,qn=!0,Yn=!0),V.id!==L&&(L=V.id,qn=!0),lr||x!==C){Mt.setValue(G,"projectionMatrix",C.projectionMatrix),Mt.setValue(G,"viewMatrix",C.matrixWorldInverse);const zt=Mt.map.cameraPosition;zt!==void 0&&zt.setValue(G,Ae.setFromMatrixPosition(C.matrixWorld)),ye.logarithmicDepthBuffer&&Mt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),x!==C&&(x=C,qn=!0,Yn=!0)}if(k.isSkinnedMesh){Mt.setOptional(G,k,"bindMatrix"),Mt.setOptional(G,k,"bindMatrixInverse");const zt=k.skeleton;zt&&(ye.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Mt.setValue(G,"boneTexture",zt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Mt.setOptional(G,k,"batchingTexture"),Mt.setValue(G,"batchingTexture",k._matricesTexture,A));const Ii=H.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0&&ye.isWebGL2===!0)&&Ie.update(k,H,Jt),(qn||qe.receiveShadow!==k.receiveShadow)&&(qe.receiveShadow=k.receiveShadow,Mt.setValue(G,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(on.envMap.value=ke,on.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),qn&&(Mt.setValue(G,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&xt(on,Yn),Ee&&V.fog===!0&&ce.refreshFogUniforms(on,Ee),ce.refreshMaterialUniforms(on,V,q,U,oe),_a.upload(G,hi(qe),on,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_a.upload(G,hi(qe),on,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mt.setValue(G,"center",k.center),Mt.setValue(G,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(G,"normalMatrix",k.normalMatrix),Mt.setValue(G,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const zt=V.uniformsGroups;for(let ts=0,Ya=zt.length;ts<Ya;ts++)if(ye.isWebGL2){const Ns=zt[ts];se.update(Ns,Jt),se.bind(Ns,Jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jt}function xt(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Zt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,B,H){Se.get(C.texture).__webglTexture=B,Se.get(C.depthTexture).__webglTexture=H;const V=Se.get(C);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const H=Se.get(C);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,H=0){T=C,b=B,E=H;let V=!0,k=null,Ee=!1,Ue=!1;if(C){const ke=Se.get(C);ke.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(G.FRAMEBUFFER,null),V=!1):ke.__webglFramebuffer===void 0?A.setupRenderTarget(C):ke.__hasExternalTextures&&A.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const He=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[B])?k=He[B][H]:k=He[B],Ee=!0):ye.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?k=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[H]:k=He,w.copy(C.viewport),N.copy(C.scissor),O=C.scissorTest}else w.copy(K).multiplyScalar(q).floor(),N.copy(ee).multiplyScalar(q).floor(),O=J;if(pe.bindFramebuffer(G.FRAMEBUFFER,k)&&ye.drawBuffers&&V&&pe.drawBuffers(C,k),pe.viewport(w),pe.scissor(N),pe.setScissorTest(O),Ee){const ke=Se.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,ke.__webglTexture,H)}else if(Ue){const ke=Se.get(C.texture),Xe=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,H||0,Xe)}L=-1},this.readRenderTargetPixels=function(C,B,H,V,k,Ee,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){pe.bindFramebuffer(G.FRAMEBUFFER,ze);try{const ke=C.texture,Xe=ke.format,He=ke.type;if(Xe!==In&&ge.convert(Xe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=He===Ss&&(he.has("EXT_color_buffer_half_float")||ye.isWebGL2&&he.has("EXT_color_buffer_float"));if(He!==Ti&&ge.convert(He)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===vi&&(ye.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-V&&H>=0&&H<=C.height-k&&G.readPixels(B,H,V,k,ge.convert(Xe),ge.convert(He),Ee)}finally{const ke=T!==null?Se.get(T).__webglFramebuffer:null;pe.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(C,B,H=0){const V=Math.pow(2,-H),k=Math.floor(B.image.width*V),Ee=Math.floor(B.image.height*V);A.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,H,0,0,C.x,C.y,k,Ee),pe.unbindTexture()},this.copyTextureToTexture=function(C,B,H,V=0){const k=B.image.width,Ee=B.image.height,Ue=ge.convert(H.format),ze=ge.convert(H.type);A.setTexture2D(H,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,V,C.x,C.y,k,Ee,Ue,ze,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,V,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Ue,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,V,C.x,C.y,Ue,ze,B.image),V===0&&H.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,B,H,V,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=C.max.x-C.min.x+1,Ue=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,ke=ge.convert(V.format),Xe=ge.convert(V.type);let He;if(V.isData3DTexture)A.setTexture3D(V,0),He=G.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),He=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);const We=G.getParameter(G.UNPACK_ROW_LENGTH),ut=G.getParameter(G.UNPACK_IMAGE_HEIGHT),It=G.getParameter(G.UNPACK_SKIP_PIXELS),ct=G.getParameter(G.UNPACK_SKIP_ROWS),Ut=G.getParameter(G.UNPACK_SKIP_IMAGES),st=H.isCompressedTexture?H.mipmaps[k]:H.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,st.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,st.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),H.isDataTexture||H.isData3DTexture?G.texSubImage3D(He,k,B.x,B.y,B.z,Ee,Ue,ze,ke,Xe,st.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(He,k,B.x,B.y,B.z,Ee,Ue,ze,ke,st.data)):G.texSubImage3D(He,k,B.x,B.y,B.z,Ee,Ue,ze,ke,Xe,st),G.pixelStorei(G.UNPACK_ROW_LENGTH,We),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ut),G.pixelStorei(G.UNPACK_SKIP_PIXELS,It),G.pixelStorei(G.UNPACK_SKIP_ROWS,ct),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ut),k===0&&V.generateMipmaps&&G.generateMipmap(He),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){b=0,E=0,T=null,pe.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bl?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Fa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?$i:Mu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?Nt:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class fv extends Rl{}fv.prototype.isWebGL1Renderer=!0;class ka{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new ka(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gu extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class pv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new P;class Ca{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ca(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ku extends ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ar;const as=new P,Cr=new P,Rr=new P,Pr=new Ne,os=new Ne,Hu=new tt,ra=new P,ls=new P,sa=new P,Mh=new Ne,bo=new Ne,yh=new Ne;class mv extends St{constructor(e=new ku){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pv(t,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new Ca(n,3,0,!1)),Ar.setAttribute("uv",new Ca(n,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),Hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Rr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;aa(ra.set(-.5,-.5,0),Rr,o,Cr,r,s),aa(ls.set(.5,-.5,0),Rr,o,Cr,r,s),aa(sa.set(.5,.5,0),Rr,o,Cr,r,s),Mh.set(0,0),bo.set(1,0),yh.set(1,1);let a=e.ray.intersectTriangle(ra,ls,sa,!1,as);if(a===null&&(aa(ls.set(-.5,.5,0),Rr,o,Cr,r,s),bo.set(0,1),a=e.ray.intersectTriangle(ra,sa,ls,!1,as),a===null))return;const l=e.ray.origin.distanceTo(as);l<e.near||l>e.far||t.push({distance:l,point:as.clone(),uv:un.getInterpolation(as,ra,ls,sa,Mh,bo,yh,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function aa(i,e,t,n,r,s){Pr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(os.x=s*Pr.x-r*Pr.y,os.y=r*Pr.x+s*Pr.y):os.copy(Pr),i.copy(e),i.x+=os.x,i.y+=os.y,i.applyMatrix4(Hu)}class Sh extends Kt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lr=new tt,Eh=new tt,oa=[],Th=new sr,gv=new tt,cs=new nt,hs=new ar;class _v extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,gv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Lr),Th.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(Th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Lr),hs.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Lr),Eh.multiplyMatrices(n,Lr),cs.matrixWorld=Eh,cs.raycast(e,oa);for(let o=0,a=oa.length;o<a;o++){const l=oa[o];l.instanceId=s,l.object=this,t.push(l)}oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bh=new P,wh=new P,Ah=new tt,wo=new Ds,la=new ar;class Ha extends St{constructor(e=new At,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)bh.fromBufferAttribute(t,r-1),wh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=bh.distanceTo(wh);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),la.radius+=s,e.ray.intersectsSphere(la)===!1)return;Ah.copy(r).invert(),wo.copy(e.ray).applyMatrix4(Ah);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let v=p,y=M-1;v<y;v+=f){const b=_.getX(v),E=_.getX(v+1);if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,E),wo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let v=p,y=M-1;v<y;v+=f){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),wo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ch=new P,Rh=new P;class Pl extends Ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ch.fromBufferAttribute(t,r),Rh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ch.distanceTo(Rh);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ll extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ph=new tt,el=new Ds,ca=new ar,ha=new P;class Vu extends St{constructor(e=new At,t=new Ll){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),ca.radius+=s,e.ray.intersectsSphere(ca)===!1)return;Ph.copy(r).invert(),el.copy(e.ray).applyMatrix4(Ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);ha.fromBufferAttribute(u,m),Lh(ha,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)ha.fromBufferAttribute(u,_),Lh(ha,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lh(i,e,t,n,r,s,o){const a=el.distanceSqToPoint(i);if(a<t){const l=new P;el.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ur extends $t{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vv{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ne:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,r=[],s=[],o=[],a=new P,l=new tt;for(let f=0;f<=e;f++){const _=f/e;r[f]=this.getTangentAt(_,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Lt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Lt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Dl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const ua=new P,Ao=new Dl,Co=new Dl,Ro=new Dl;class xv extends vv{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ua.subVectors(r[0],r[1]).add(r[0]),c=ua);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ua.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ua),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ao.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),Co.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),Ro.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Co.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ro.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ao.calc(l),Co.calc(l),Ro.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Is extends At{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new P,y=new P,b=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],y),f(t[E+2],b),l(v,y,b,M)}function l(M,v,y,b){const E=b+1,T=[];for(let L=0;L<=E;L++){T[L]=[];const x=M.clone().lerp(y,L/E),w=v.clone().lerp(y,L/E),N=E-L;for(let O=0;O<=N;O++)O===0&&L===E?T[L][O]=x:T[L][O]=x.clone().lerp(w,O/N)}for(let L=0;L<E;L++)for(let x=0;x<2*(E-L)-1;x++){const w=Math.floor(x/2);x%2===0?(d(T[L][w+1]),d(T[L+1][w]),d(T[L][w])):(d(T[L][w+1]),d(T[L+1][w+1]),d(T[L+1][w]))}}function c(M){const v=new P;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(M),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const M=new P;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];const y=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(y,1-b)}_(),u()}function u(){for(let M=0;M<o.length;M+=6){const v=o[M+0],y=o[M+2],b=o[M+4],E=Math.max(v,y,b),T=Math.min(v,y,b);E>.9&&T<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,v){const y=M*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const M=new P,v=new P,y=new P,b=new P,E=new Ne,T=new Ne,L=new Ne;for(let x=0,w=0;x<s.length;x+=9,w+=6){M.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),y.set(s[x+6],s[x+7],s[x+8]),E.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),L.set(o[w+4],o[w+5]),b.copy(M).add(v).add(y).divideScalar(3);const N=m(b);g(E,w+0,M,N),g(T,w+2,v,N),g(L,w+4,y,N)}}function g(M,v,y,b){b<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.vertices,e.indices,e.radius,e.details)}}class Il extends Is{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Il(e.radius,e.detail)}}const da=new P,fa=new P,Po=new P,pa=new un;class Wu extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(gs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=pa;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),pa.getNormal(Po),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const v=(M+1)%3,y=u[M],b=u[v],E=pa[h[M]],T=pa[h[v]],L=`${y}_${b}`,x=`${b}_${y}`;x in d&&d[x]?(Po.dot(d[x].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(T.x,T.y,T.z)),d[x]=null):L in d||(d[L]={index0:c[M],index1:c[v],normal:Po.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];da.fromBufferAttribute(a,g),fa.fromBufferAttribute(a,m),f.push(da.x,da.y,da.z),f.push(fa.x,fa.y,fa.z)}this.setAttribute("position",new wt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ul extends Is{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ul(e.radius,e.detail)}}class Nl extends Is{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nl(e.radius,e.detail)}}class kt extends At{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const E=b/t;u.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+y,1-v),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const v=h[p][M+1],y=h[p][M],b=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&f.push(v,y,E),(p!==n-1||l<Math.PI)&&f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mv extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tl extends Mv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class va extends ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Dh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yv{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const Sv=new yv;class Ol{constructor(e){this.manager=e!==void 0?e:Sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ev extends Ol{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Dh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Es("img");function l(){h(),Dh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Tv extends Ol{constructor(e){super(e)}load(e,t,n,r){const s=new $t,o=new Ev(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Va extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Xu extends Va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Lo=new tt,Ih=new P,Uh=new P;class qu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nh=new tt,us=new P,Do=new P;class bv extends qu{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),Do.copy(n.position),Do.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Do),n.updateMatrixWorld(),r.makeTranslation(-us.x,-us.y,-us.z),Nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh)}}class Yu extends Va{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new bv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wv extends qu{constructor(){super(new Iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xa extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new wv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ju extends Va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Av{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Oh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oh(){return(typeof performance>"u"?Date:performance).now()}class $u{constructor(e,t,n=0,r=1/0){this.ray=new Ds(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return nl(e,this,n,t),n.sort(Fh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)nl(e[r],this,n,t);return n.sort(Fh),n}}function Fh(i,e){return i.distance-e.distance}function nl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)nl(r[s],e,t,!0)}}class zh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cv extends Pl{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ge(n),r=new Ge(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,_=-a;d<=t;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const g=d===s?n:r;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const h=new At;h.setAttribute("position",new wt(l,3)),h.setAttribute("color",new wt(c,3));const u=new nr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);const Bh={type:"change"},Io={type:"start"},Gh={type:"end"},ma=new Ds,kh=new gi,Rv=Math.cos(70*op.DEG2RAD);class Ku extends rr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:hr.ROTATE,TWO:hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",be),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bh),n.update(),s=r.NONE},this.update=function(){const R=new P,se=new tr().setFromUnitVectors(e.up,new P(0,1,0)),Ce=se.clone().invert(),_e=new P,re=new tr,D=new P,le=2*Math.PI;return function(De=null){const Re=n.object.position;R.copy(Re).sub(n.target),R.applyQuaternion(se),a.setFromVector3(R),n.autoRotate&&s===r.NONE&&O(w(De)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Be=n.minAzimuthAngle,Fe=n.maxAzimuthAngle;isFinite(Be)&&isFinite(Fe)&&(Be<-Math.PI?Be+=le:Be>Math.PI&&(Be-=le),Fe<-Math.PI?Fe+=le:Fe>Math.PI&&(Fe-=le),Be<=Fe?a.theta=Math.max(Be,Math.min(Fe,a.theta)):a.theta=a.theta>(Be+Fe)/2?Math.max(Be,a.theta):Math.min(Fe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*c),R.setFromSpherical(a),R.applyQuaternion(Ce),Re.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ze=!1;if(n.zoomToCursor&&E){let Qe=null;if(n.object.isPerspectiveCamera){const ae=R.length();Qe=K(ae*c);const je=ae-Qe;n.object.position.addScaledVector(y,je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ae=new P(b.x,b.y,0);ae.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ze=!0;const je=new P(b.x,b.y,0);je.unproject(n.object),n.object.position.sub(je).add(ae),n.object.updateMatrixWorld(),Qe=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Qe).add(n.object.position):(ma.origin.copy(n.object.position),ma.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ma.direction))<Rv?e.lookAt(n.target):(kh.setFromNormalAndCoplanarPoint(n.object.up,n.target),ma.intersectPlane(kh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ze=!0);return c=1,E=!1,Ze||_e.distanceToSquared(n.object.position)>o||8*(1-re.dot(n.object.quaternion))>o||D.distanceToSquared(n.target)>0?(n.dispatchEvent(Bh),_e.copy(n.object.position),re.copy(n.object.quaternion),D.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ve),n.domElement.removeEventListener("pointerdown",A),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",be),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new zh,l=new zh;let c=1;const h=new P,u=new Ne,d=new Ne,f=new Ne,_=new Ne,g=new Ne,m=new Ne,p=new Ne,M=new Ne,v=new Ne,y=new P,b=new Ne;let E=!1;const T=[],L={};let x=!1;function w(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function N(R){const se=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*se)}function O(R){l.theta-=R}function $(R){l.phi-=R}const I=function(){const R=new P;return function(Ce,_e){R.setFromMatrixColumn(_e,0),R.multiplyScalar(-Ce),h.add(R)}}(),z=function(){const R=new P;return function(Ce,_e){n.screenSpacePanning===!0?R.setFromMatrixColumn(_e,1):(R.setFromMatrixColumn(_e,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(Ce),h.add(R)}}(),U=function(){const R=new P;return function(Ce,_e){const re=n.domElement;if(n.object.isPerspectiveCamera){const D=n.object.position;R.copy(D).sub(n.target);let le=R.length();le*=Math.tan(n.object.fov/2*Math.PI/180),I(2*Ce*le/re.clientHeight,n.object.matrix),z(2*_e*le/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(Ce*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),z(_e*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(R,se){if(!n.zoomToCursor)return;E=!0;const Ce=n.domElement.getBoundingClientRect(),_e=R-Ce.left,re=se-Ce.top,D=Ce.width,le=Ce.height;b.x=_e/D*2-1,b.y=-(re/le)*2+1,y.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function ee(R){u.set(R.clientX,R.clientY)}function J(R){Y(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function W(R){_.set(R.clientX,R.clientY)}function Z(R){d.set(R.clientX,R.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const se=n.domElement;O(2*Math.PI*f.x/se.clientHeight),$(2*Math.PI*f.y/se.clientHeight),u.copy(d),n.update()}function j(R){M.set(R.clientX,R.clientY),v.subVectors(M,p),v.y>0?q(N(v.y)):v.y<0&&X(N(v.y)),p.copy(M),n.update()}function oe(R){g.set(R.clientX,R.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),U(m.x,m.y),_.copy(g),n.update()}function fe(R){Y(R.clientX,R.clientY),R.deltaY<0?X(N(R.deltaY)):R.deltaY>0&&q(N(R.deltaY)),n.update()}function xe(R){let se=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),se=!0;break}se&&(R.preventDefault(),n.update())}function Ae(R){if(T.length===1)u.set(R.pageX,R.pageY);else{const se=ge(R),Ce=.5*(R.pageX+se.x),_e=.5*(R.pageY+se.y);u.set(Ce,_e)}}function Me(R){if(T.length===1)_.set(R.pageX,R.pageY);else{const se=ge(R),Ce=.5*(R.pageX+se.x),_e=.5*(R.pageY+se.y);_.set(Ce,_e)}}function Oe(R){const se=ge(R),Ce=R.pageX-se.x,_e=R.pageY-se.y,re=Math.sqrt(Ce*Ce+_e*_e);p.set(0,re)}function G(R){n.enableZoom&&Oe(R),n.enablePan&&Me(R)}function $e(R){n.enableZoom&&Oe(R),n.enableRotate&&Ae(R)}function he(R){if(T.length==1)d.set(R.pageX,R.pageY);else{const Ce=ge(R),_e=.5*(R.pageX+Ce.x),re=.5*(R.pageY+Ce.y);d.set(_e,re)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const se=n.domElement;O(2*Math.PI*f.x/se.clientHeight),$(2*Math.PI*f.y/se.clientHeight),u.copy(d)}function ye(R){if(T.length===1)g.set(R.pageX,R.pageY);else{const se=ge(R),Ce=.5*(R.pageX+se.x),_e=.5*(R.pageY+se.y);g.set(Ce,_e)}m.subVectors(g,_).multiplyScalar(n.panSpeed),U(m.x,m.y),_.copy(g)}function pe(R){const se=ge(R),Ce=R.pageX-se.x,_e=R.pageY-se.y,re=Math.sqrt(Ce*Ce+_e*_e);M.set(0,re),v.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),q(v.y),p.copy(M);const D=(R.pageX+se.x)*.5,le=(R.pageY+se.y)*.5;Y(D,le)}function Pe(R){n.enableZoom&&pe(R),n.enablePan&&ye(R)}function Se(R){n.enableZoom&&pe(R),n.enableRotate&&he(R)}function A(R){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",F)),Ie(R),R.pointerType==="touch"?Le(R):te(R))}function S(R){n.enabled!==!1&&(R.pointerType==="touch"?ie(R):ne(R))}function F(R){we(R),T.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(Gh),s=r.NONE}function te(R){let se;switch(R.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case cr.DOLLY:if(n.enableZoom===!1)return;J(R),s=r.DOLLY;break;case cr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;W(R),s=r.PAN}else{if(n.enableRotate===!1)return;ee(R),s=r.ROTATE}break;case cr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ee(R),s=r.ROTATE}else{if(n.enablePan===!1)return;W(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Io)}function ne(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Z(R);break;case r.DOLLY:if(n.enableZoom===!1)return;j(R);break;case r.PAN:if(n.enablePan===!1)return;oe(R);break}}function Q(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(Io),fe(ue(R)),n.dispatchEvent(Gh))}function ue(R){const se=R.deltaMode,Ce={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(se){case 1:Ce.deltaY*=16;break;case 2:Ce.deltaY*=100;break}return R.ctrlKey&&!x&&(Ce.deltaY*=10),Ce}function ce(R){R.key==="Control"&&(x=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(R){R.key==="Control"&&(x=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function be(R){n.enabled===!1||n.enablePan===!1||xe(R)}function Le(R){switch(Te(R),T.length){case 1:switch(n.touches.ONE){case hr.ROTATE:if(n.enableRotate===!1)return;Ae(R),s=r.TOUCH_ROTATE;break;case hr.PAN:if(n.enablePan===!1)return;Me(R),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case hr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(R),s=r.TOUCH_DOLLY_PAN;break;case hr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$e(R),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Io)}function ie(R){switch(Te(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ye(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(R),n.update();break;default:s=r.NONE}}function Ve(R){n.enabled!==!1&&R.preventDefault()}function Ie(R){T.push(R.pointerId)}function we(R){delete L[R.pointerId];for(let se=0;se<T.length;se++)if(T[se]==R.pointerId){T.splice(se,1);return}}function Te(R){let se=L[R.pointerId];se===void 0&&(se=new Ne,L[R.pointerId]=se),se.set(R.pageX,R.pageY)}function ge(R){const se=R.pointerId===T[0]?T[1]:T[0];return L[se]}n.domElement.addEventListener("contextmenu",Ve),n.domElement.addEventListener("pointerdown",A),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",Q,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var Wt=Math.PI,mt=Wt*2,fs=Wt/180,Pv=180/Wt,Lv=1440,Dv=398600.8,dn=6378.135,ri=60/Math.sqrt(dn*dn*dn/Dv),Uo=dn*ri/60,Iv=1/ri,Wi=.001082616,Uv=-253881e-11,Nv=-165597e-11,Xi=Uv/Wi,Ts=2/3;function Ov(i,e){for(var t=[31,i%4===0?29:28,31,30,31,30,31,31,30,31,30,31],n=Math.floor(e),r=1,s=0;n>s+t[r-1]&&r<12;)s+=t[r-1],r+=1;var o=r,a=n-s,l=(e-n)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),u=(l-h)*60;return{mon:o,day:a,hr:c,minute:h,sec:u}}function Hh(i,e,t,n,r,s){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*i-Math.floor(7*(i+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+s/60+r)/60+n)/24}function Fl(i,e,t,n,r,s,o){if(i instanceof Date){var a=i;return Hh(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return Hh(i,e,t,n,r,s,o)}function Zu(i,e){var t=i.e3,n=i.ee2,r=i.peo,s=i.pgho,o=i.pho,a=i.pinco,l=i.plo,c=i.se2,h=i.se3,u=i.sgh2,d=i.sgh3,f=i.sgh4,_=i.sh2,g=i.sh3,m=i.si2,p=i.si3,M=i.sl2,v=i.sl3,y=i.sl4,b=i.t,E=i.xgh2,T=i.xgh3,L=i.xgh4,x=i.xh2,w=i.xh3,N=i.xi2,O=i.xi3,$=i.xl2,I=i.xl3,z=i.xl4,U=i.zmol,q=i.zmos,X=e.init,Y=e.opsmode,K=e.ep,ee=e.inclp,J=e.nodep,W=e.argpp,Z=e.mp,j,oe,fe,xe,Ae,Me,Oe,G,$e,he,ye,pe,Pe,Se,A,S,F,te,ne,Q,ue,ce=119459e-10,de=.01675,be=.00015835218,Le=.0549;ue=q+ce*b,X==="y"&&(ue=q),Q=ue+2*de*Math.sin(ue),F=Math.sin(Q),he=.5*F*F-.25,ye=-.5*F*Math.cos(Q);var ie=c*he+h*ye,Ve=m*he+p*ye,Ie=M*he+v*ye+y*F,we=u*he+d*ye+f*F,Te=_*he+g*ye;ue=U+be*b,X==="y"&&(ue=U),Q=ue+2*Le*Math.sin(ue),F=Math.sin(Q),he=.5*F*F-.25,ye=-.5*F*Math.cos(Q);var ge=n*he+t*ye,R=N*he+O*ye,se=$*he+I*ye+z*F,Ce=E*he+T*ye+L*F,_e=x*he+w*ye;return pe=ie+ge,A=Ve+R,S=Ie+se,Pe=we+Ce,Se=Te+_e,X==="n"&&(pe-=r,A-=a,S-=l,Pe-=s,Se-=o,ee+=A,K+=pe,xe=Math.sin(ee),fe=Math.cos(ee),ee>=.2?(Se/=xe,Pe-=fe*Se,W+=Pe,J+=Se,Z+=S):(Me=Math.sin(J),Ae=Math.cos(J),j=xe*Me,oe=xe*Ae,Oe=Se*Ae+A*fe*Me,G=-Se*Me+A*fe*Ae,j+=Oe,oe+=G,J%=mt,J<0&&Y==="a"&&(J+=mt),te=Z+W+fe*J,$e=S+Pe-A*J*xe,te+=$e,ne=J,J=Math.atan2(j,oe),J<0&&Y==="a"&&(J+=mt),Math.abs(ne-J)>Wt&&(J<ne?J+=mt:J-=mt),Z+=S,W=te-Z-fe*J)),{ep:K,inclp:ee,nodep:J,argpp:W,mp:Z}}function Fv(i){var e=i.epoch,t=i.ep,n=i.argpp,r=i.tc,s=i.inclp,o=i.nodep,a=i.np,l,c,h,u,d,f,_,g,m,p,M,v,y,b,E,T,L,x,w,N,O,$,I,z,U,q,X,Y,K,ee,J,W,Z,j,oe,fe,xe,Ae,Me,Oe,G,$e,he,ye,pe,Pe,Se,A,S,F,te,ne,Q,ue,ce,de,be,Le,ie,Ve,Ie,we,Te,ge=.01675,R=.0549,se=29864797e-13,Ce=47968065e-14,_e=.39785416,re=.91744867,D=.1945905,le=-.98088458,me=a,De=t,Re=Math.sin(o),Be=Math.cos(o),Fe=Math.sin(n),Ze=Math.cos(n),Qe=Math.sin(s),ae=Math.cos(s),je=De*De,rt=1-je,vn=Math.sqrt(rt),et=0,On=0,Xn=0,Fn=0,hi=0,xn=e+18261.5+r/1440,an=(4.523602-.00092422029*xn)%mt,xt=Math.sin(an),Zt=Math.cos(an),C=.91375164-.03568096*Zt,B=Math.sqrt(1-C*C),H=.089683511*xt/B,V=Math.sqrt(1-H*H),k=5.8351514+.001944368*xn,Ee=.39785416*xt/B,Ue=V*Zt+.91744867*H*xt;Ee=Math.atan2(Ee,Ue),Ee+=k-an;var ze=Math.cos(Ee),ke=Math.sin(Ee);N=D,O=le,z=re,U=_e,$=Be,I=Re,M=se;for(var Xe=1/me,He=0;He<2;)He+=1,l=N*$+O*z*I,h=-O*$+N*z*I,_=-N*I+O*z*$,g=O*U,m=O*I+N*z*$,p=N*U,c=ae*_+Qe*g,u=ae*m+Qe*p,d=-Qe*_+ae*g,f=-Qe*m+ae*p,v=l*Ze+c*Fe,y=h*Ze+u*Fe,b=-l*Fe+c*Ze,E=-h*Fe+u*Ze,T=d*Fe,L=f*Fe,x=d*Ze,w=f*Ze,Ie=12*v*v-3*b*b,we=24*v*y-6*b*E,Te=12*y*y-3*E*E,ne=3*(l*l+c*c)+Ie*je,Q=6*(l*h+c*u)+we*je,ue=3*(h*h+u*u)+Te*je,ce=-6*l*d+je*(-24*v*x-6*b*T),de=-6*(l*f+h*d)+je*(-24*(y*x+v*w)+-6*(b*L+E*T)),be=-6*h*f+je*(-24*y*w-6*E*L),Le=6*c*d+je*(24*v*T-6*b*x),ie=6*(u*d+c*f)+je*(24*(y*T+v*L)-6*(E*x+b*w)),Ve=6*u*f+je*(24*y*L-6*E*w),ne=ne+ne+rt*Ie,Q=Q+Q+rt*we,ue=ue+ue+rt*Te,Se=M*Xe,Pe=-.5*Se/vn,A=Se*vn,pe=-15*De*A,S=v*b+y*E,F=y*b+v*E,te=y*E-v*b,He===1&&(q=pe,X=Pe,Y=Se,K=A,ee=S,J=F,W=te,Z=ne,j=Q,oe=ue,fe=ce,xe=de,Ae=be,Me=Le,Oe=ie,G=Ve,$e=Ie,he=we,ye=Te,N=ze,O=ke,z=C,U=B,$=V*Be+H*Re,I=Re*V-Be*H,M=Ce);var We=(4.7199672+(.2299715*xn-k))%mt,ut=(6.2565837+.017201977*xn)%mt,It=2*q*J,ct=2*q*W,Ut=2*X*xe,st=2*X*(Ae-fe),qe=-2*Y*j,Di=-2*Y*(oe-Z),ht=-2*Y*(-21-9*je)*ge,Jt=2*K*he,lr=2*K*(ye-$e),qn=-18*K*ge,Yn=-2*X*Oe,Mt=-2*X*(G-Me),on=2*pe*F,Ii=2*pe*te,zt=2*Pe*de,ts=2*Pe*(be-ce),Ya=-2*Se*Q,Ns=-2*Se*(ue-ne),tf=-2*Se*(-21-9*je)*R,nf=2*A*we,rf=2*A*(Te-Ie),sf=-18*A*R,af=-2*Pe*ie,of=-2*Pe*(Ve-Le);return{snodm:Re,cnodm:Be,sinim:Qe,cosim:ae,sinomm:Fe,cosomm:Ze,day:xn,e3:Ii,ee2:on,em:De,emsq:je,gam:k,peo:et,pgho:Fn,pho:hi,pinco:On,plo:Xn,rtemsq:vn,se2:It,se3:ct,sgh2:Jt,sgh3:lr,sgh4:qn,sh2:Yn,sh3:Mt,si2:Ut,si3:st,sl2:qe,sl3:Di,sl4:ht,s1:pe,s2:Pe,s3:Se,s4:A,s5:S,s6:F,s7:te,ss1:q,ss2:X,ss3:Y,ss4:K,ss5:ee,ss6:J,ss7:W,sz1:Z,sz2:j,sz3:oe,sz11:fe,sz12:xe,sz13:Ae,sz21:Me,sz22:Oe,sz23:G,sz31:$e,sz32:he,sz33:ye,xgh2:nf,xgh3:rf,xgh4:sf,xh2:af,xh3:of,xi2:zt,xi3:ts,xl2:Ya,xl3:Ns,xl4:tf,nm:me,z1:ne,z2:Q,z3:ue,z11:ce,z12:de,z13:be,z21:Le,z22:ie,z23:Ve,z31:Ie,z32:we,z33:Te,zmol:We,zmos:ut}}function zv(i){var e=i.cosim,t=i.argpo,n=i.s1,r=i.s2,s=i.s3,o=i.s4,a=i.s5,l=i.sinim,c=i.ss1,h=i.ss2,u=i.ss3,d=i.ss4,f=i.ss5,_=i.sz1,g=i.sz3,m=i.sz11,p=i.sz13,M=i.sz21,v=i.sz23,y=i.sz31,b=i.sz33,E=i.t,T=i.tc,L=i.gsto,x=i.mo,w=i.mdot,N=i.no,O=i.nodeo,$=i.nodedot,I=i.xpidot,z=i.z1,U=i.z3,q=i.z11,X=i.z13,Y=i.z21,K=i.z23,ee=i.z31,J=i.z33,W=i.ecco,Z=i.eccsq,j=i.emsq,oe=i.em,fe=i.argpm,xe=i.inclm,Ae=i.mm,Me=i.nm,Oe=i.nodem,G=i.irez,$e=i.atime,he=i.d2201,ye=i.d2211,pe=i.d3210,Pe=i.d3222,Se=i.d4410,A=i.d4422,S=i.d5220,F=i.d5232,te=i.d5421,ne=i.d5433,Q=i.dedt,ue=i.didt,ce=i.dmdt,de=i.dnodt,be=i.domdt,Le=i.del1,ie=i.del2,Ve=i.del3,Ie=i.xfact,we=i.xlamo,Te=i.xli,ge=i.xni,R,se,Ce,_e,re,D,le,me,De,Re,Be,Fe,Ze,Qe,ae,je,rt,vn,et,On,Xn,Fn,hi,xn,an,xt,Zt,C,B,H,V,k,Ee=17891679e-13,Ue=21460748e-13,ze=22123015e-14,ke=17891679e-13,Xe=73636953e-16,He=21765803e-16,We=.0043752690880113,ut=37393792e-14,It=11428639e-14,ct=.00015835218,Ut=119459e-10;G=0,Me<.0052359877&&Me>.0034906585&&(G=1),Me>=.00826&&Me<=.00924&&oe>=.5&&(G=2);var st=c*Ut*f,qe=h*Ut*(m+p),Di=-Ut*u*(_+g-14-6*j),ht=d*Ut*(y+b-6),Jt=-Ut*h*(M+v);(xe<.052359877||xe>Wt-.052359877)&&(Jt=0),l!==0&&(Jt/=l);var lr=ht-e*Jt;Q=st+n*ct*a,ue=qe+r*ct*(q+X),ce=Di-ct*s*(z+U-14-6*j);var qn=o*ct*(ee+J-6),Yn=-ct*r*(Y+K);(xe<.052359877||xe>Wt-.052359877)&&(Yn=0),be=lr+qn,de=Jt,l!==0&&(be-=e/l*Yn,de+=Yn/l);var Mt=0,on=(L+T*We)%mt;if(oe+=Q*E,xe+=ue*E,fe+=be*E,Oe+=de*E,Ae+=ce*E,G!==0){if(H=Math.pow(Me/ri,Ts),G===2){V=e*e;var Ii=oe;oe=W;var zt=j;j=Z,k=oe*j,Qe=-.306-(oe-.64)*.44,oe<=.65?(ae=3.616-13.247*oe+16.29*j,rt=-19.302+117.39*oe-228.419*j+156.591*k,vn=-18.9068+109.7927*oe-214.6334*j+146.5816*k,et=-41.122+242.694*oe-471.094*j+313.953*k,On=-146.407+841.88*oe-1629.014*j+1083.435*k,Xn=-532.114+3017.977*oe-5740.032*j+3708.276*k):(ae=-72.099+331.819*oe-508.738*j+266.724*k,rt=-346.844+1582.851*oe-2415.925*j+1246.113*k,vn=-342.585+1554.908*oe-2366.899*j+1215.972*k,et=-1052.797+4758.686*oe-7193.992*j+3651.957*k,On=-3581.69+16178.11*oe-24462.77*j+12422.52*k,oe>.715?Xn=-5149.66+29936.92*oe-54087.36*j+31324.56*k:Xn=1464.74-4664.75*oe+3763.64*j),oe<.7?(xn=-919.2277+4988.61*oe-9064.77*j+5542.21*k,Fn=-822.71072+4568.6173*oe-8491.4146*j+5337.524*k,hi=-853.666+4690.25*oe-8624.77*j+5341.4*k):(xn=-37995.78+161616.52*oe-229838.2*j+109377.94*k,Fn=-51752.104+218913.95*oe-309468.16*j+146349.42*k,hi=-40023.88+170470.89*oe-242699.48*j+115605.82*k),an=l*l,R=.75*(1+2*e+V),se=1.5*an,_e=1.875*l*(1-2*e-3*V),re=-1.875*l*(1+2*e-3*V),le=35*an*R,me=39.375*an*an,De=9.84375*l*(an*(1-2*e-5*V)+.33333333*(-2+4*e+6*V)),Re=l*(4.92187512*an*(-2-4*e+10*V)+6.56250012*(1+2*e-3*V)),Be=29.53125*l*(2-8*e+V*(-12+8*e+10*V)),Fe=29.53125*l*(-2-8*e+V*(12+8*e-10*V)),C=Me*Me,B=H*H,Zt=3*C*B,xt=Zt*ke,he=xt*R*Qe,ye=xt*se*ae,Zt*=H,xt=Zt*ut,pe=xt*_e*rt,Pe=xt*re*vn,Zt*=H,xt=2*Zt*Xe,Se=xt*le*et,A=xt*me*On,Zt*=H,xt=Zt*It,S=xt*De*Xn,F=xt*Re*hi,xt=2*Zt*He,te=xt*Be*Fn,ne=xt*Fe*xn,we=(x+O+O-(on+on))%mt,Ie=w+ce+2*($+de-We)-N,oe=Ii,j=zt}G===1&&(Ze=1+j*(-2.5+.8125*j),rt=1+2*j,je=1+j*(-6+6.60937*j),R=.75*(1+e)*(1+e),Ce=.9375*l*l*(1+3*e)-.75*(1+e),D=1+e,D*=1.875*D*D,Le=3*Me*Me*H*H,ie=2*Le*R*Ze*Ee,Ve=3*Le*D*je*ze*H,Le=Le*Ce*rt*Ue*H,we=(x+O+t-on)%mt,Ie=w+I+ce+be+de-(N+We)),Te=we,ge=N,$e=0,Me=N+Mt}return{em:oe,argpm:fe,inclm:xe,mm:Ae,nm:Me,nodem:Oe,irez:G,atime:$e,d2201:he,d2211:ye,d3210:pe,d3222:Pe,d4410:Se,d4422:A,d5220:S,d5232:F,d5421:te,d5433:ne,dedt:Q,didt:ue,dmdt:ce,dndt:Mt,dnodt:de,domdt:be,del1:Le,del2:ie,del3:Ve,xfact:Ie,xlamo:we,xli:Te,xni:ge}}function Vh(i){var e=(i-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*fs/240%mt,t<0&&(t+=mt),t}function Ju(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?Vh(Fl.apply(void 0,arguments)):Vh.apply(void 0,arguments)}function Bv(i){var e=i.ecco,t=i.epoch,n=i.inclo,r=i.opsmode,s=i.no,o=e*e,a=1-o,l=Math.sqrt(a),c=Math.cos(n),h=c*c,u=Math.pow(ri/s,Ts),d=.75*Wi*(3*h-1)/(l*a),f=d/(u*u),_=u*(1-f*f-f*(1/3+134*f*f/81));f=d/(_*_),s/=1+f;var g=Math.pow(ri/s,Ts),m=Math.sin(n),p=g*a,M=1-5*h,v=-M-h-h,y=1/g,b=p*p,E=g*(1-e),T="n",L;if(r==="a"){var x=t-7305,w=Math.floor(x+1e-8),N=x-w,O=.017202791694070362,$=1.7321343856509375,I=5075514194322695e-30,z=O+mt;L=($+O*w+z*N+x*x*I)%mt,L<0&&(L+=mt)}else L=Ju(t+24332815e-1);return{no:s,method:T,ainv:y,ao:g,con41:v,con42:M,cosio:c,cosio2:h,eccsq:o,omeosq:a,posq:b,rp:E,rteosq:l,sinio:m,gsto:L}}function Gv(i){var e=i.irez,t=i.d2201,n=i.d2211,r=i.d3210,s=i.d3222,o=i.d4410,a=i.d4422,l=i.d5220,c=i.d5232,h=i.d5421,u=i.d5433,d=i.dedt,f=i.del1,_=i.del2,g=i.del3,m=i.didt,p=i.dmdt,M=i.dnodt,v=i.domdt,y=i.argpo,b=i.argpdot,E=i.t,T=i.tc,L=i.gsto,x=i.xfact,w=i.xlamo,N=i.no,O=i.atime,$=i.em,I=i.argpm,z=i.inclm,U=i.xli,q=i.mm,X=i.xni,Y=i.nodem,K=i.nm,ee=.13130908,J=2.8843198,W=.37448087,Z=5.7686396,j=.95240898,oe=1.8014998,fe=1.050833,xe=4.4108898,Ae=.0043752690880113,Me=720,Oe=-720,G=259200,$e,he,ye,pe,Pe,Se,A,S,F=0,te=0,ne=(L+T*Ae)%mt;if($+=d*E,z+=m*E,I+=v*E,Y+=M*E,q+=p*E,e!==0){(O===0||E*O<=0||Math.abs(E)<Math.abs(O))&&(O=0,X=N,U=w),E>0?$e=Me:$e=Oe;for(var Q=381;Q===381;)e!==2?(A=f*Math.sin(U-ee)+_*Math.sin(2*(U-J))+g*Math.sin(3*(U-W)),Pe=X+x,Se=f*Math.cos(U-ee)+2*_*Math.cos(2*(U-J))+3*g*Math.cos(3*(U-W)),Se*=Pe):(S=y+b*O,ye=S+S,he=U+U,A=t*Math.sin(ye+U-Z)+n*Math.sin(U-Z)+r*Math.sin(S+U-j)+s*Math.sin(-S+U-j)+o*Math.sin(ye+he-oe)+a*Math.sin(he-oe)+l*Math.sin(S+U-fe)+c*Math.sin(-S+U-fe)+h*Math.sin(S+he-xe)+u*Math.sin(-S+he-xe),Pe=X+x,Se=t*Math.cos(ye+U-Z)+n*Math.cos(U-Z)+r*Math.cos(S+U-j)+s*Math.cos(-S+U-j)+l*Math.cos(S+U-fe)+c*Math.cos(-S+U-fe)+2*(o*Math.cos(ye+he-oe)+a*Math.cos(he-oe)+h*Math.cos(S+he-xe)+u*Math.cos(-S+he-xe)),Se*=Pe),Math.abs(E-O)>=Me?Q=381:(te=E-O,Q=0),Q===381&&(U+=Pe*$e+A*G,X+=A*$e+Se*G,O+=$e);K=X+A*te+Se*te*te*.5,pe=U+Pe*te+A*te*te*.5,e!==1?(q=pe-2*Y+2*ne,F=K-N):(q=pe-Y-I+ne,F=K-N),K=N+F}return{atime:O,em:$,argpm:I,inclm:z,xli:U,mm:q,xni:X,nodem:Y,dndt:F,nm:K}}function Qu(i,e){var t,n,r,s,o,a,l,c,h,u,d,f,_,g,m,p,M,v,y,b,E,T,L,x,w,N,O,$=15e-13;i.t=e,i.error=0;var I=i.mo+i.mdot*i.t,z=i.argpo+i.argpdot*i.t,U=i.nodeo+i.nodedot*i.t;h=z,E=I;var q=i.t*i.t;if(L=U+i.nodecf*q,M=1-i.cc1*i.t,v=i.bstar*i.cc4*i.t,y=i.t2cof*q,i.isimp!==1){l=i.omgcof*i.t;var X=1+i.eta*Math.cos(I);a=i.xmcof*(X*X*X-i.delmo),p=l+a,E=I+p,h=z-p,f=q*i.t,_=f*i.t,M=M-i.d2*q-i.d3*f-i.d4*_,v+=i.bstar*i.cc5*(Math.sin(E)-i.sinmao),y=y+i.t3cof*f+_*(i.t4cof+i.t*i.t5cof)}T=i.no;var Y=i.ecco;if(b=i.inclo,i.method==="d"){g=i.t;var K={irez:i.irez,d2201:i.d2201,d2211:i.d2211,d3210:i.d3210,d3222:i.d3222,d4410:i.d4410,d4422:i.d4422,d5220:i.d5220,d5232:i.d5232,d5421:i.d5421,d5433:i.d5433,dedt:i.dedt,del1:i.del1,del2:i.del2,del3:i.del3,didt:i.didt,dmdt:i.dmdt,dnodt:i.dnodt,domdt:i.domdt,argpo:i.argpo,argpdot:i.argpdot,t:i.t,tc:g,gsto:i.gsto,xfact:i.xfact,xlamo:i.xlamo,no:i.no,atime:i.atime,em:Y,argpm:h,inclm:b,xli:i.xli,mm:E,xni:i.xni,nodem:L,nm:T},ee=Gv(K);Y=ee.em,h=ee.argpm,b=ee.inclm,E=ee.mm,L=ee.nodem,T=ee.nm}if(T<=0)return i.error=2,[!1,!1];var J=Math.pow(ri/T,Ts)*M*M;if(T=ri/Math.pow(J,1.5),Y-=v,Y>=1||Y<-.001)return i.error=1,[!1,!1];Y<1e-6&&(Y=1e-6),E+=i.no*y,w=E+h+L,L%=mt,h%=mt,w%=mt,E=(w-h-L)%mt;var W=Math.sin(b),Z=Math.cos(b),j=Y;if(x=b,u=h,O=L,N=E,s=W,r=Z,i.method==="d"){var oe={inclo:i.inclo,init:"n",ep:j,inclp:x,nodep:O,argpp:u,mp:N,opsmode:i.operationmode},fe=Zu(i,oe);if(j=fe.ep,O=fe.nodep,u=fe.argpp,N=fe.mp,x=fe.inclp,x<0&&(x=-x,O+=Wt,u-=Wt),j<0||j>1)return i.error=3,[!1,!1]}i.method==="d"&&(s=Math.sin(x),r=Math.cos(x),i.aycof=-.5*Xi*s,Math.abs(r+1)>15e-13?i.xlcof=-.25*Xi*s*(3+5*r)/(1+r):i.xlcof=-.25*Xi*s*(3+5*r)/$);var xe=j*Math.cos(u);p=1/(J*(1-j*j));var Ae=j*Math.sin(u)+p*i.aycof,Me=N+u+O+p*i.xlcof*xe,Oe=(Me-O)%mt;c=Oe,m=9999.9;for(var G=1;Math.abs(m)>=1e-12&&G<=10;)n=Math.sin(c),t=Math.cos(c),m=1-t*xe-n*Ae,m=(Oe-Ae*t+xe*n-c)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),c+=m,G+=1;var $e=xe*t+Ae*n,he=xe*n-Ae*t,ye=xe*xe+Ae*Ae,pe=J*(1-ye);if(pe<0)return i.error=4,[!1,!1];var Pe=J*(1-$e),Se=Math.sqrt(J)*he/Pe,A=Math.sqrt(pe)/Pe,S=Math.sqrt(1-ye);p=he/(1+S);var F=J/Pe*(n-Ae-xe*p),te=J/Pe*(t-xe+Ae*p);d=Math.atan2(F,te);var ne=(te+te)*F,Q=1-2*F*F;p=1/pe;var ue=.5*Wi*p,ce=ue*p;i.method==="d"&&(o=r*r,i.con41=3*o-1,i.x1mth2=1-o,i.x7thm1=7*o-1);var de=Pe*(1-1.5*ce*S*i.con41)+.5*ue*i.x1mth2*Q;if(de<1)return i.error=6,{position:!1,velocity:!1};d-=.25*ce*i.x7thm1*ne;var be=O+1.5*ce*r*ne,Le=x+1.5*ce*r*s*Q,ie=Se-T*ue*i.x1mth2*ne/ri,Ve=A+T*ue*(i.x1mth2*Q+1.5*i.con41)/ri,Ie=Math.sin(d),we=Math.cos(d),Te=Math.sin(be),ge=Math.cos(be),R=Math.sin(Le),se=Math.cos(Le),Ce=-Te*se,_e=ge*se,re=Ce*Ie+ge*we,D=_e*Ie+Te*we,le=R*Ie,me=Ce*we-ge*Ie,De=_e*we-Te*Ie,Re=R*we,Be={x:de*re*dn,y:de*D*dn,z:de*le*dn},Fe={x:(ie*re+Ve*me)*Uo,y:(ie*D+Ve*De)*Uo,z:(ie*le+Ve*Re)*Uo};return{position:Be,velocity:Fe}}function kv(i,e){var t=e.opsmode,n=e.epoch,r=e.xbstar,s=e.xecco,o=e.xargpo,a=e.xinclo,l=e.xmo,c=e.xno,h=e.xnodeo,u,d,f,_,g,m,p,M,v,y,b,E,T,L,x,w,N,O,$,I,z,U,q,X,Y,K,ee,J,W,Z,j,oe,fe,xe,Ae,Me,Oe,G,$e,he,ye,pe,Pe,Se,A,S,F,te,ne,Q,ue,ce,de,be,Le,ie,Ve=15e-13;i.isimp=0,i.method="n",i.aycof=0,i.con41=0,i.cc1=0,i.cc4=0,i.cc5=0,i.d2=0,i.d3=0,i.d4=0,i.delmo=0,i.eta=0,i.argpdot=0,i.omgcof=0,i.sinmao=0,i.t=0,i.t2cof=0,i.t3cof=0,i.t4cof=0,i.t5cof=0,i.x1mth2=0,i.x7thm1=0,i.mdot=0,i.nodedot=0,i.xlcof=0,i.xmcof=0,i.nodecf=0,i.irez=0,i.d2201=0,i.d2211=0,i.d3210=0,i.d3222=0,i.d4410=0,i.d4422=0,i.d5220=0,i.d5232=0,i.d5421=0,i.d5433=0,i.dedt=0,i.del1=0,i.del2=0,i.del3=0,i.didt=0,i.dmdt=0,i.dnodt=0,i.domdt=0,i.e3=0,i.ee2=0,i.peo=0,i.pgho=0,i.pho=0,i.pinco=0,i.plo=0,i.se2=0,i.se3=0,i.sgh2=0,i.sgh3=0,i.sgh4=0,i.sh2=0,i.sh3=0,i.si2=0,i.si3=0,i.sl2=0,i.sl3=0,i.sl4=0,i.gsto=0,i.xfact=0,i.xgh2=0,i.xgh3=0,i.xgh4=0,i.xh2=0,i.xh3=0,i.xi2=0,i.xi3=0,i.xl2=0,i.xl3=0,i.xl4=0,i.xlamo=0,i.zmol=0,i.zmos=0,i.atime=0,i.xli=0,i.xni=0,i.bstar=r,i.ecco=s,i.argpo=o,i.inclo=a,i.mo=l,i.no=c,i.nodeo=h,i.operationmode=t;var Ie=78/dn+1,we=42/dn,Te=we*we*we*we;i.init="y",i.t=0;var ge={ecco:i.ecco,epoch:n,inclo:i.inclo,no:i.no,method:i.method,opsmode:i.operationmode},R=Bv(ge),se=R.ao,Ce=R.con42,_e=R.cosio,re=R.cosio2,D=R.eccsq,le=R.omeosq,me=R.posq,De=R.rp,Re=R.rteosq,Be=R.sinio;if(i.no=R.no,i.con41=R.con41,i.gsto=R.gsto,i.a=Math.pow(i.no*Iv,-2/3),i.alta=i.a*(1+i.ecco)-1,i.altp=i.a*(1-i.ecco)-1,i.error=0,le>=0||i.no>=0){if(i.isimp=0,De<220/dn+1&&(i.isimp=1),ee=Ie,z=Te,O=(De-1)*dn,O<156){ee=O-78,O<98&&(ee=20);var Fe=(120-ee)/dn;z=Fe*Fe*Fe*Fe,ee=ee/dn+1}$=1/me,S=1/(se-ee),i.eta=se*i.ecco*S,E=i.eta*i.eta,b=i.ecco*i.eta,I=Math.abs(1-E),m=z*Math.pow(S,4),p=m/Math.pow(I,3.5),_=p*i.no*(se*(1+1.5*E+b*(4+E))+.375*Wi*S/I*i.con41*(8+3*E*(8+E))),i.cc1=i.bstar*_,g=0,i.ecco>1e-4&&(g=-2*m*S*Xi*i.no*Be/i.ecco),i.x1mth2=1-re,i.cc4=2*i.no*p*se*le*(i.eta*(2+.5*E)+i.ecco*(.5+2*E)-Wi*S/(se*I)*(-3*i.con41*(1-2*b+E*(1.5-.5*b))+.75*i.x1mth2*(2*E-b*(1+E))*Math.cos(2*i.argpo))),i.cc5=2*p*se*le*(1+2.75*(E+b)+b*E),M=re*re,Pe=1.5*Wi*$*i.no,Se=.5*Pe*Wi*$,A=-.46875*Nv*$*$*i.no,i.mdot=i.no+.5*Pe*Re*i.con41+.0625*Se*Re*(13-78*re+137*M),i.argpdot=-.5*Pe*Ce+.0625*Se*(7-114*re+395*M)+A*(3-36*re+49*M),te=-Pe*_e,i.nodedot=te+(.5*Se*(4-19*re)+2*A*(3-7*re))*_e,F=i.argpdot+i.nodedot,i.omgcof=i.bstar*g*Math.cos(i.argpo),i.xmcof=0,i.ecco>1e-4&&(i.xmcof=-Ts*m*i.bstar/b),i.nodecf=3.5*le*te*i.cc1,i.t2cof=1.5*i.cc1,Math.abs(_e+1)>15e-13?i.xlcof=-.25*Xi*Be*(3+5*_e)/(1+_e):i.xlcof=-.25*Xi*Be*(3+5*_e)/Ve,i.aycof=-.5*Xi*Be;var Ze=1+i.eta*Math.cos(i.mo);if(i.delmo=Ze*Ze*Ze,i.sinmao=Math.sin(i.mo),i.x7thm1=7*re-1,2*Wt/i.no>=225){i.method="d",i.isimp=1,ye=0,x=i.inclo;var Qe={epoch:n,ep:i.ecco,argpp:i.argpo,tc:ye,inclp:i.inclo,nodep:i.nodeo,np:i.no,e3:i.e3,ee2:i.ee2,peo:i.peo,pgho:i.pgho,pho:i.pho,pinco:i.pinco,plo:i.plo,se2:i.se2,se3:i.se3,sgh2:i.sgh2,sgh3:i.sgh3,sgh4:i.sgh4,sh2:i.sh2,sh3:i.sh3,si2:i.si2,si3:i.si3,sl2:i.sl2,sl3:i.sl3,sl4:i.sl4,xgh2:i.xgh2,xgh3:i.xgh3,xgh4:i.xgh4,xh2:i.xh2,xh3:i.xh3,xi2:i.xi2,xi3:i.xi3,xl2:i.xl2,xl3:i.xl3,xl4:i.xl4,zmol:i.zmol,zmos:i.zmos},ae=Fv(Qe);i.e3=ae.e3,i.ee2=ae.ee2,i.peo=ae.peo,i.pgho=ae.pgho,i.pho=ae.pho,i.pinco=ae.pinco,i.plo=ae.plo,i.se2=ae.se2,i.se3=ae.se3,i.sgh2=ae.sgh2,i.sgh3=ae.sgh3,i.sgh4=ae.sgh4,i.sh2=ae.sh2,i.sh3=ae.sh3,i.si2=ae.si2,i.si3=ae.si3,i.sl2=ae.sl2,i.sl3=ae.sl3,i.sl4=ae.sl4,d=ae.sinim,u=ae.cosim,v=ae.em,y=ae.emsq,U=ae.s1,q=ae.s2,X=ae.s3,Y=ae.s4,K=ae.s5,J=ae.ss1,W=ae.ss2,Z=ae.ss3,j=ae.ss4,oe=ae.ss5,fe=ae.sz1,xe=ae.sz3,Ae=ae.sz11,Me=ae.sz13,Oe=ae.sz21,G=ae.sz23,$e=ae.sz31,he=ae.sz33,i.xgh2=ae.xgh2,i.xgh3=ae.xgh3,i.xgh4=ae.xgh4,i.xh2=ae.xh2,i.xh3=ae.xh3,i.xi2=ae.xi2,i.xi3=ae.xi3,i.xl2=ae.xl2,i.xl3=ae.xl3,i.xl4=ae.xl4,i.zmol=ae.zmol,i.zmos=ae.zmos,N=ae.nm,ne=ae.z1,Q=ae.z3,ue=ae.z11,ce=ae.z13,de=ae.z21,be=ae.z23,Le=ae.z31,ie=ae.z33;var je={inclo:x,init:i.init,ep:i.ecco,inclp:i.inclo,nodep:i.nodeo,argpp:i.argpo,mp:i.mo,opsmode:i.operationmode},rt=Zu(i,je);i.ecco=rt.ep,i.inclo=rt.inclp,i.nodeo=rt.nodep,i.argpo=rt.argpp,i.mo=rt.mp,T=0,L=0,w=0;var vn={cosim:u,emsq:y,argpo:i.argpo,s1:U,s2:q,s3:X,s4:Y,s5:K,sinim:d,ss1:J,ss2:W,ss3:Z,ss4:j,ss5:oe,sz1:fe,sz3:xe,sz11:Ae,sz13:Me,sz21:Oe,sz23:G,sz31:$e,sz33:he,t:i.t,tc:ye,gsto:i.gsto,mo:i.mo,mdot:i.mdot,no:i.no,nodeo:i.nodeo,nodedot:i.nodedot,xpidot:F,z1:ne,z3:Q,z11:ue,z13:ce,z21:de,z23:be,z31:Le,z33:ie,ecco:i.ecco,eccsq:D,em:v,argpm:T,inclm:x,mm:w,nm:N,nodem:L,irez:i.irez,atime:i.atime,d2201:i.d2201,d2211:i.d2211,d3210:i.d3210,d3222:i.d3222,d4410:i.d4410,d4422:i.d4422,d5220:i.d5220,d5232:i.d5232,d5421:i.d5421,d5433:i.d5433,dedt:i.dedt,didt:i.didt,dmdt:i.dmdt,dnodt:i.dnodt,domdt:i.domdt,del1:i.del1,del2:i.del2,del3:i.del3,xfact:i.xfact,xlamo:i.xlamo,xli:i.xli,xni:i.xni},et=zv(vn);i.irez=et.irez,i.atime=et.atime,i.d2201=et.d2201,i.d2211=et.d2211,i.d3210=et.d3210,i.d3222=et.d3222,i.d4410=et.d4410,i.d4422=et.d4422,i.d5220=et.d5220,i.d5232=et.d5232,i.d5421=et.d5421,i.d5433=et.d5433,i.dedt=et.dedt,i.didt=et.didt,i.dmdt=et.dmdt,i.dnodt=et.dnodt,i.domdt=et.domdt,i.del1=et.del1,i.del2=et.del2,i.del3=et.del3,i.xfact=et.xfact,i.xlamo=et.xlamo,i.xli=et.xli,i.xni=et.xni}i.isimp!==1&&(f=i.cc1*i.cc1,i.d2=4*se*S*f,pe=i.d2*S*i.cc1/3,i.d3=(17*se+ee)*pe,i.d4=.5*pe*se*S*(221*se+31*ee)*i.cc1,i.t3cof=i.d2+2*f,i.t4cof=.25*(3*i.d3+i.cc1*(12*i.d2+10*f)),i.t5cof=.2*(3*i.d4+12*i.cc1*i.d3+6*i.d2*i.d2+15*f*(2*i.d2+f)))}Qu(i,0),i.init="n"}function Hv(i,e){var t="i",n=1440/(2*Wt),r=0,s={};s.error=0,s.satnum=i.substring(2,7),s.epochyr=parseInt(i.substring(18,20),10),s.epochdays=parseFloat(i.substring(20,32)),s.ndot=parseFloat(i.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(i.substring(44,50),10),"E").concat(i.substring(50,52))),s.bstar=parseFloat("".concat(i.substring(53,54),".").concat(parseInt(i.substring(54,59),10),"E").concat(i.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=n,s.inclo*=fs,s.nodeo*=fs,s.argpo*=fs,s.mo*=fs,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var o=Ov(r,s.epochdays),a=o.mon,l=o.day,c=o.hr,h=o.minute,u=o.sec;return s.jdsatepoch=Fl(r,a,l,c,h,u),kv(s,{opsmode:t,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function Vv(i){return Wv(i)||Xv(i)||qv(i)||Yv()}function Wv(i){if(Array.isArray(i))return il(i)}function Xv(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function qv(i,e){if(i){if(typeof i=="string")return il(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return il(i,e)}}function il(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Yv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jv(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];var n=e[0],r=Array.prototype.slice.call(e,1),s=Fl.apply(void 0,Vv(r)),o=(s-n.jdsatepoch)*Lv;return Qu(n,o)}function ed(i){return i*Pv}function $v(i){if(i<-Wt/2||i>Wt/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return ed(i)}function Kv(i){if(i<-Wt||i>Wt)throw new RangeError("Longitude radians must be in range [-pi; pi].");return ed(i)}function Zv(i,e){for(var t=6378.137,n=6356.7523142,r=Math.sqrt(i.x*i.x+i.y*i.y),s=(t-n)/t,o=2*s-s*s,a=Math.atan2(i.y,i.x)-e;a<-Wt;)a+=mt;for(;a>Wt;)a-=mt;for(var l=20,c=0,h=Math.atan2(i.z,Math.sqrt(i.x*i.x+i.y*i.y)),u;c<l;)u=1/Math.sqrt(1-o*(Math.sin(h)*Math.sin(h))),h=Math.atan2(i.z+t*u*o*Math.sin(h),r),c+=1;var d=r/Math.cos(h)-t*u;return{longitude:a,latitude:h,height:d}}function ei(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function td(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jr={duration:.5,overwrite:!1,delay:0},zl,Ft,pt,bn=1e8,lt=1/bn,rl=Math.PI*2,Jv=rl/4,Qv=0,nd=Math.sqrt,ex=Math.cos,tx=Math.sin,Dt=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},oi=function(e){return typeof e=="number"},Bl=function(e){return typeof e>"u"},Wn=function(e){return typeof e=="object"},en=function(e){return e!==!1},Gl=function(){return typeof window<"u"},ga=function(e){return vt(e)||Dt(e)},id=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,sl=/(?:-?\.?\d|\.)+/gi,rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,No=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,ad=/[^,'"\[\]\s]+/gi,nx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,zn,al,kl,gn={},Ra={},od,ld=function(e){return(Ra=$r(e,gn))&&sn},Hl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bs=function(e,t){return!t&&console.warn(e)},cd=function(e,t){return e&&(gn[e]=t)&&Ra&&(Ra[e]=t)||gn},ws=function(){return 0},ix={suppressEvents:!0,isStart:!0,kill:!1},Ma={suppressEvents:!0,kill:!1},rx={suppressEvents:!0},Vl={},wi=[],ol={},hd,hn={},Oo={},Wh=30,ya=[],Wl="",Xl=function(e){var t=e[0],n,r;if(Wn(t)||vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ya.length;r--&&!ya[r].targetTest(t););n=ya[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ud(e[r],n)))||e.splice(r,1);return e},Ki=function(e){return e._gsap||Xl(wn(e))[0]._gsap},ud=function(e,t,n){return(n=e[t])&&vt(n)?e[t]():Bl(n)&&e.getAttribute&&e.getAttribute(t)||n},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},kr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},sx=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Pa=function(){var e=wi.length,t=wi.slice(0),n,r;for(ol={},wi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ql=function(e){return!!(e._initted||e._startAt||e.add)},dd=function(e,t,n,r){wi.length&&!Ft&&Pa(),e.render(t,n,!!(Ft&&t<0&&ql(e))),wi.length&&!Ft&&Pa()},fd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ad).length<2?t:Dt(e)?e.trim():e},pd=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ax=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},$r=function(e,t){for(var n in t)e[n]=t[n];return e},Xh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},La=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},vs=function(e){var t=e.parent||gt,n=e.keyframes?ax(Vt(e.keyframes)):_n;if(en(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ox=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},md=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Wa=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ri=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},lx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ll=function(e,t,n,r){return e._startAt&&(Ft?e._startAt.revert(Ma):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cx=function i(e){return!e||e._ts&&i(e.parent)},qh=function(e){return e._repeat?Kr(e._tTime,e=e.duration()+e._rDelay)*e:0},Kr=function(e,t){var n=Math.floor(e=bt(e/t));return e&&n===e?n-1:n},Da=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xa=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},qa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xa(e),n._dirty||Zi(n,e)),e},gd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Da(e.rawTime(),t),(!t._dur||Us(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),Zi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Gn=function(e,t,n,r){return t.parent&&Ri(t),t._start=bt((oi(n)?n:n||e!==gt?yn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),md(e,t,"_first","_last",e._sort?"_start":0),cl(t)||(e._recent=t),r||gd(e,t),e._ts<0&&qa(e,e._tTime),e},_d=function(e,t){return(gn.ScrollTrigger||Hl("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},vd=function(e,t,n,r,s){if(jl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hd!==fn.frame)return wi.push(e),e._lazy=[s,r],1},hx=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},cl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ux=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&hx(e)&&!(!e._initted&&cl(e))||(e._ts<0||e._dp._ts<0)&&!cl(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Us(0,e._tDur,t),h=Kr(l,a),e._yoyo&&h&1&&(o=1-o),h!==Kr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ft||r||e._zTime===lt||!t&&e._zTime){if(!e._initted&&vd(e,t,r,n,l))return;for(u=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ll(e,t,n,!0),e._onUpdate&&!n&&pn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ri(e,1),!n&&!Ft&&(pn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dx=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Zr=function(e,t,n,r){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&qa(e,e._tTime=e._tDur*a),e.parent&&Xa(e),n||Zi(e.parent,e),e},Yh=function(e){return e instanceof jt?Zi(e):Zr(e,e._dur)},fx={_start:0,endTime:ws,totalDuration:ws},yn=function i(e,t,n){var r=e.labels,s=e._recent||fx,o=e.duration()>=bn?s.endTime(!1):e._dur,a,l,c;return Dt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Vt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},xs=function(e,t,n){var r=oi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=en(l.vars.inherit)&&l.parent;o.immediateRender=en(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Tt(t[0],o,t[s+1])},Li=function(e,t){return e||e===0?t(e):t},Us=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Dt(e)||!(t=nx.exec(e))?"":t[1]},px=function(e,t,n){return Li(n,function(r){return Us(e,t,r)})},hl=[].slice,xd=function(e,t){return e&&Wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wn(e[0]))&&!e.nodeType&&e!==zn},mx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Dt(r)&&!t||xd(r,1)?(s=n).push.apply(s,wn(r)):n.push(r)})||n},wn=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):Dt(e)&&!n&&(al||!Jr())?hl.call((t||kl).querySelectorAll(e),0):Vt(e)?mx(e,n):xd(e)?hl.call(e,0):e?[e]:[]},ul=function(e){return e=wn(e)[0]||bs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wn(t,n.querySelectorAll?n:n===e?bs("Invalid scope")||kl.createElement("div"):e)}},Md=function(e){return e.sort(function(){return .5-Math.random()})},yd=function(e){if(vt(e))return e;var t=Wn(e)?e:{each:e},n=Ji(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,h=r,u=r;return Dt(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],u=r[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,M,v,y,b,E,T,L,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,bn])[1],!x){for(T=-bn;T<(T=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=o[g]=[],p=l?Math.min(x,g)*h-.5:r%x,M=x===bn?0:l?g*u/x-.5:r/x|0,T=0,L=bn,E=0;E<g;E++)v=E%x-p,y=M-(E/x|0),m[E]=b=c?Math.abs(c==="y"?y:v):nd(v*v+y*y),b>T&&(T=b),b<L&&(L=b);r==="random"&&Md(m),m.max=T-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ht(t.amount||t.each)||0,n=n&&g<0?Ld(n):n}return g=(m[d]-m.min)/m.max||0,bt(m.b+(n?n(g):g)*m.v)+m.u}},dl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(oi(n)?0:Ht(n))}},Sd=function(e,t){var n=Vt(e),r,s;return!n&&Wn(e)&&(r=n=e.radius||bn,e.values?(e=wn(e.values),(s=!oi(e[0]))&&(r*=r)):e=dl(e.increment)),Li(t,n?vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=bn,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!r||c<=r?e[h]:o,s||h===o||oi(o)?h:h+Ht(o)}:dl(e))},Ed=function(e,t,n,r){return Li(Vt(e)?!t:n===!0?!!(n=0):!r,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},gx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},_x=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},vx=function(e,t,n){return bd(e,t,0,1,n)},Td=function(e,t,n){return Li(n,function(r){return e[~~t(r)]})},xx=function i(e,t,n){var r=t-e;return Vt(e)?Td(e,i(0,e.length),t):Li(n,function(s){return(r+(s-e)%r)%r+e})},Mx=function i(e,t,n){var r=t-e,s=r*2;return Vt(e)?Td(e,i(0,e.length-1),t):Li(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},As=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?ad:sl),n+=e.substr(t,r-t)+Ed(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},bd=function(e,t,n,r,s){var o=t-e,a=r-n;return Li(s,function(l){return n+((l-e)/o*a||0)})},yx=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Dt(e),a={},l,c,h,u,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(i(e[c-1],e[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=t}else r||(e=$r(Vt(e)?[]:{},e));if(!h){for(l in t)Yl.call(a,e,l,"get",t[l]);s=function(_){return Zl(_,a)||(o?e.p:e)}}}return Li(n,s)},jh=function(e,t,n){var r=e.labels,s=bn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},pn=function(e,t,n){var r=e.vars,s=r[t],o=pt,a=e._ctx,l,c,h;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&wi.length&&Pa(),a&&(pt=a),h=l?s.apply(c,l):s.call(c),pt=o,h},ps=function(e){return Ri(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&pn(e,"onInterrupt"),e},zr,wd=[],Ad=function(e){if(e)if(e=!e.name&&e.default||e,Gl()||e.headless){var t=e.name,n=vt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ws,render:Zl,add:Yl,kill:Fx,modifier:Ox,rawVars:0},o={targetTest:0,get:0,getSetter:Kl,aliases:{},register:0};if(Jr(),e!==r){if(hn[t])return;_n(r,_n(La(e,s),o)),$r(r.prototype,$r(s,La(e,o))),hn[r.prop=t]=r,e.targetTest&&(ya.push(r),Vl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cd(t,r),e.register&&e.register(sn,r,nn)}else wd.push(e)},at=255,ms={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},Fo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*at+.5|0},Cd=function(e,t,n){var r=e?oi(e)?[e>>16,e>>8&at,e&at]:0:ms.black,s,o,a,l,c,h,u,d,f,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ms[e])r=ms[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&at,r&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(sl),!t)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=Fo(l+1/3,s,o),r[1]=Fo(l,s,o),r[2]=Fo(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(rd),n&&r.length<4&&(r[3]=1),r}else r=e.match(sl)||ms.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/at,o=r[1]/at,a=r[2]/at,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},Rd=function(e){var t=[],n=[],r=-1;return e.split(Ai).forEach(function(s){var o=s.match(Fr)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},$h=function(e,t,n){var r="",s=(e+r).match(Ai),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Cd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Rd(e),l=n.c,l.join(r)!==h.c.join(r)))for(c=e.replace(Ai,"1").split(Fr),u=c.length-1;a<u;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Ai),u=c.length-1;a<u;a++)r+=c[a]+s[a];return r+c[u]},Ai=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ms)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Sx=/hsl[a]?\(/,Pd=function(e){var t=e.join(" "),n;if(Ai.lastIndex=0,Ai.test(t))return n=Sx.test(t),e[1]=$h(e[1],n),e[0]=$h(e[0],n,Rd(e[1])),!0},Cs,fn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,_=function g(m){var p=i()-r,M=m===!0,v,y,b,E;if((p>e||p<0)&&(n+=p-t),r+=p,b=r-n,v=b-o,(v>0||M)&&(E=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,o+=v+(v>=s?4:s-v),y=1),M||(l=c(g)),y)for(f=0;f<a.length;f++)a[f](b,d,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){od&&(!al&&Gl()&&(zn=al=window,kl=zn.document||{},gn.gsap=sn,(zn.gsapVersions||(zn.gsapVersions=[])).push(sn.version),ld(Ra||zn.GreenSockGlobals||!zn.gsap&&zn||{}),wd.forEach(Ad)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Cs=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Cs=0,c=ws},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,M){var v=p?function(y,b,E,T){m(y,b,E,T),u.remove(v)}:m;return u.remove(m),a[M?"unshift":"push"](v),Jr(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),Jr=function(){return!Cs&&fn.wake()},Je={},Ex=/^[\d.\-M][\d.\-,\s]/,Tx=/["']/g,bx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Tx,"").trim():+c,r=l.substr(a+1).trim();return t},wx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Ax=function(e){var t=(e+"").split("("),n=Je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[bx(t[1])]:wx(e).split(",").map(fd)):Je._CE&&Ex.test(e)?Je._CE("",e):n},Ld=function(e){return function(t){return 1-e(1-t)}},Dd=function i(e,t){for(var n=e._first,r;n;)n instanceof jt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Ji=function(e,t){return e&&(vt(e)?e:Je[e]||Ax(e))||t},or=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return tn(e,function(a){Je[a]=gn[a]=s,Je[o=a.toLowerCase()]=n;for(var l in s)Je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[a+"."+l]=s[l]}),s},Id=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zo=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/rl*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*tx((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Id(a);return s=rl/s,l.config=function(c,h){return i(e,c,h)},l},Bo=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Id(n);return r.config=function(s){return i(e,s)},r};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;or(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;or("Elastic",zo("in"),zo("out"),zo());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};or("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);or("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});or("Circ",function(i){return-(nd(1-i*i)-1)});or("Sine",function(i){return i===1?1:-ex(i*Jv)+1});or("Back",Bo("in"),Bo("out"),Bo());Je.SteppedEase=Je.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-lt;return function(a){return((r*Us(0,o,a)|0)+s)*n}}};jr.ease=Je["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Wl+=i+","+i+"Params,"});var Ud=function(e,t){this.id=Qv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ud,this.set=t?t.getSetter:Kl},Rs=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zr(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Cs||fn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Jr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(qa(this,n),!s._dp||s.parent||gd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Kr(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Da(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(Us(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Xa(this),lx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Gn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(en(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Da(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=rx);var r=Ft;return Ft=n,ql(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ft=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Yh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(yn(this,n),en(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,en(r)),this._dur||(this._zTime=-lt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-lt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=vt(n)?n:pd,a=function(){var c=r.then;r.then=null,vt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ps(this)},i}();_n(Rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var jt=function(i){td(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=en(n.sortChildren),gt&&Gn(n.parent||gt,ei(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_d(ei(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return xs(0,arguments,this),this},t.from=function(r,s,o){return xs(1,arguments,this),this},t.fromTo=function(r,s,o,a){return xs(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,vs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(r,s,yn(this,o),1),this},t.call=function(r,s,o){return Gn(this,Tt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Tt(r,o,yn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,vs(o).immediateRender=en(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},t.staggerFromTo=function(r,s,o,a,l,c,h,u){return a.startAt=o,vs(a).immediateRender=en(a.immediateRender),this.staggerTo(r,s,a,l,c,h,u)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:bt(r),u=this._zTime<0!=r<0&&(this._initted||!c),d,f,_,g,m,p,M,v,y,b,E,T;if(this!==gt&&h>l&&r>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),d=h,y=this._start,v=this._ts,p=!v,u&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=bt(h%m),h===l?(g=this._repeat,d=c):(b=bt(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=Kr(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),E&&g&1&&(d=c-d,T=1),g!==b&&!this._lock){var L=E&&b&1,x=L===(E&&g&1);if(g<b&&(L=!L),a=L?0:h%c?c:h,this._lock=1,this.render(a||(T?0:bt(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&pn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Dd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=dx(this,bt(a),bt(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!b&&(pn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&r>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=-lt);break}}f=_}else{f=this._last;for(var w=r<0?r:d;f;){if(_=f._prev,(f._act||w<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(w-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(w-f._start)*f._ts,s,o||Ft&&ql(f)),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=w?-lt:lt);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-lt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Xa(this),this.render(r,s,o);this._onUpdate&&!s&&pn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ri(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(pn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(oi(s)||(s=yn(this,s,r)),!(r instanceof Rs)){if(Vt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Dt(r))return this.addLabel(r,s);if(vt(r))r=Tt.delayedCall(0,r);else return this}return this!==r?Gn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-bn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Tt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Dt(r)?this.removeLabel(r):vt(r)?this.killTweensOf(r):(r.parent===this&&Wa(this,r),r===this._recent&&(this._recent=this._last),Zi(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=yn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Tt.delayedCall(0,s||ws,o);return a.data="isPause",this._hasPause=1,Gn(this,a,yn(this,r))},t.removePause=function(r){var s=this._first;for(r=yn(this,r);s;)s._start===r&&s.data==="isPause"&&Ri(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=wn(r),l=this._first,c=oi(s),h;l;)l instanceof Tt?sx(l._targets,a)&&(c?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=yn(o,r),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Tt.to(o,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||lt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Zr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,_n({startAt:{time:yn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),jh(this,yn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),jh(this,yn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Zi(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Zi(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=bn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Zr(o,o===gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(gt._ts&&(dd(gt,Da(r,gt)),hd=fn.frame),fn.frame>=Wh){Wh+=mn.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&mn.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},e}(Rs);_n(jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Cx=function(e,t,n,r,s,o,a){var l=new nn(this._pt,e,t,0,1,Gd,null,s),c=0,h=0,u,d,f,_,g,m,p,M;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=As(r)),o&&(M=[n,r],o(M,e,t),n=M[0],r=M[1]),d=n.match(No)||[];u=No.exec(r);)_=u[0],g=r.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?kr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=No.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(sd.test(r)||p)&&(l.e=0),this._pt=l,l},Yl=function(e,t,n,r,s,o,a,l,c,h){vt(r)&&(r=r(s||0,e,o));var u=e[t],d=n!=="get"?n:vt(u)?c?e[t.indexOf("set")||!vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=vt(u)?c?Ix:zd:$l,_;if(Dt(r)&&(~r.indexOf("random(")&&(r=As(r)),r.charAt(1)==="="&&(_=kr(d,r)+(Ht(d)||0),(_||_===0)&&(r=_))),!h||d!==r||fl)return!isNaN(d*r)&&r!==""?(_=new nn(this._pt,e,t,+d||0,r-(d||0),typeof u=="boolean"?Nx:Bd,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&Hl(t,r),Cx.call(this,e,t,d,r,f,l||mn.stringFilter,c))},Rx=function(e,t,n,r,s){if(vt(e)&&(e=Ms(e,s,t,n,r)),!Wn(e)||e.style&&e.nodeType||Vt(e)||id(e))return Dt(e)?Ms(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ms(e[a],s,t,n,r);return o},Nd=function(e,t,n,r,s,o){var a,l,c,h;if(hn[e]&&(a=new hn[e]).init(s,a.rawVars?t[e]:Rx(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==zr))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},xi,fl,jl=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,d=r.keyframes,f=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!zl,y=e.timeline,b,E,T,L,x,w,N,O,$,I,z,U,q;if(y&&(!d||!s)&&(s="none"),e._ease=Ji(s,jr.ease),e._yEase=u?Ld(Ji(u===!0?s:u,jr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(O=m[0]?Ki(m[0]).harness:0,U=O&&r[O.prop],b=La(r,Vl),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Ma:ix),g._lazy=0),o){if(Ri(e._startAt=Tt.set(m,_n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&en(l),startAt:null,delay:0,onUpdate:c&&function(){return pn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!a&&!f)&&e._startAt.revert(Ma),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),T=_n({overwrite:!1,data:"isFromStart",lazy:a&&!g&&en(l),immediateRender:a,stagger:0,parent:p},b),U&&(T[O.prop]=U),Ri(e._startAt=Tt.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(Ma):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&en(l)||l&&!_,E=0;E<m.length;E++){if(x=m[E],N=x._gsap||Xl(m)[E]._gsap,e._ptLookup[E]=I={},ol[N.id]&&wi.length&&Pa(),z=M===m?E:M.indexOf(x),O&&($=new O).init(x,U||b,e,z,M)!==!1&&(e._pt=L=new nn(e._pt,x,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(X){I[X]=L}),$.priority&&(w=1)),!O||U)for(T in b)hn[T]&&($=Nd(T,b,e,z,x,M))?$.priority&&(w=1):I[T]=L=Yl.call(e,x,T,"get",b[T],z,M,0,r.stringFilter);e._op&&e._op[E]&&e.kill(x,e._op[E]),v&&e._pt&&(xi=e,gt.killTweensOf(x,I,e.globalTime(t)),q=!e.parent,xi=0),e._pt&&l&&(ol[N.id]=1)}w&&kd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&y.render(bn,!0,!0)},Px=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return fl=1,e.vars[t]="+=0",jl(e,a),fl=0,l?bs(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=yt(n)+Ht(u.e)),u.b&&(u.b=h.s+Ht(u.b))},Lx=function(e,t){var n=e[0]?Ki(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=$r({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Dx=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Vt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ms=function(e,t,n,r,s){return vt(e)?e.call(t,n,r,s):Dt(e)&&~e.indexOf("random(")?As(e):e},Od=Wl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fd={};tn(Od+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Fd[i]=1});var Tt=function(i){td(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:vs(r))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||gt,v=(Vt(n)||id(n)?oi(n[0]):"length"in r)?[n]:wn(n),y,b,E,T,L,x,w,N;if(a._targets=v.length?Xl(v):bs("GSAP target "+n+" not found. https://gsap.com",!mn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||ga(c)||ga(h)){if(r=a.vars,y=a.timeline=new jt({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),y.kill(),y.parent=y._dp=ei(a),y._start=0,d||ga(c)||ga(h)){if(T=v.length,w=d&&yd(d),Wn(d))for(L in d)~Od.indexOf(L)&&(N||(N={}),N[L]=d[L]);for(b=0;b<T;b++)E=La(r,Fd),E.stagger=0,p&&(E.yoyoEase=p),N&&$r(E,N),x=v[b],E.duration=+Ms(c,ei(a),b,x,v),E.delay=(+Ms(h,ei(a),b,x,v)||0)-a._delay,!d&&T===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),y.to(x,E,w?w(b,x,v):0),y._ease=Je.none;y.duration()?c=h=0:a.timeline=0}else if(_){vs(_n(y.vars.defaults,{ease:"none"})),y._ease=Ji(_.ease||r.ease||"none");var O=0,$,I,z;if(Vt(_))_.forEach(function(U){return y.to(v,U,">")}),y.duration();else{E={};for(L in _)L==="ease"||L==="easeEach"||Dx(L,_[L],E,_.easeEach);for(L in E)for($=E[L].sort(function(U,q){return U.t-q.t}),O=0,b=0;b<$.length;b++)I=$[b],z={ease:I.e,duration:(I.t-(b?$[b-1].t:0))/100*c},z[L]=I.v,y.to(v,z,O),O+=z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return f===!0&&!zl&&(xi=ei(a),gt.killTweensOf(v),xi=0),Gn(M,ei(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(u||!c&&!_&&a._start===bt(M._time)&&en(u)&&cx(ei(a))&&M.data!=="nested")&&(a._tTime=-lt,a.render(Math.max(0,-h)||0)),m&&_d(ei(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,u=r>l-lt&&!h?l:r<lt?0:r,d,f,_,g,m,p,M,v,y;if(!c)ux(this,r,s,o);else if(u!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+r,s,o);if(d=bt(u%g),u===l?(_=this._repeat,d=c):(m=bt(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(y=this._yEase,d=c-d),m=Kr(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(v&&this._yEase&&Dd(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(bt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(vd(this,h?r:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!a&&u&&!s&&!m&&(pn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;v&&v.render(r<0?r:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&ll(this,r,s,o),pn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&pn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ll(this,r,!0,!0),(r||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ri(this,1),!s&&!(h&&!a)&&(u||a||p)&&(pn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Cs||fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||jl(this,c),h=this._ease(c/this._dur),Px(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(qa(this,0),this.parent||md(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ps(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ft),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xi&&xi.vars.overwrite!==!0)._first||ps(this),this.parent&&o!==this.timeline.totalDuration()&&Zr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?wn(r):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&ox(a,l))return s==="all"&&(this._pt=0),ps(this);for(u=this._op=this._op||[],s!=="all"&&(Dt(s)&&(g={},tn(s,function(M){return g[M]=1}),s=g),s=Lx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Wa(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ps(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return xs(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return xs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return gt.killTweensOf(r,s,o)},e}(Rs);_n(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(i){Tt[i]=function(){var e=new jt,t=hl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var $l=function(e,t,n){return e[t]=n},zd=function(e,t,n){return e[t](n)},Ix=function(e,t,n,r){return e[t](r.fp,n)},Ux=function(e,t,n){return e.setAttribute(t,n)},Kl=function(e,t){return vt(e[t])?zd:Bl(e[t])&&e.setAttribute?Ux:$l},Bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Nx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gd=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Zl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ox=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Fx=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Wa(this,t,"_pt"):t.dep||(n=1),t=r;return!n},zx=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},kd=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},nn=function(){function i(t,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Bd,this.d=l||this,this.set=c||$l,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=zx,this.m=n,this.mt=s,this.tween=r},i}();tn(Wl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Vl[i]=1});gn.TweenMax=gn.TweenLite=Tt;gn.TimelineLite=gn.TimelineMax=jt;gt=new jt({sortChildren:!1,defaults:jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mn.stringFilter=Pd;var Qi=[],Sa={},Bx=[],Kh=0,Gx=0,Go=function(e){return(Sa[e]||Bx).map(function(t){return t()})},pl=function(){var e=Date.now(),t=[];e-Kh>2&&(Go("matchMediaInit"),Qi.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=zn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Go("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Kh=e,Go("matchMedia"))},Hd=function(){function i(t,n){this.selector=n&&ul(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Gx++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){vt(n)&&(s=r,r=n,n=vt);var o=this,a=function(){var c=pt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=ul(s)),pt=o,u=r.apply(o,arguments),vt(u)&&o._r.push(u),pt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===vt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=pt;pt=null,n(this),pt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Tt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof jt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Tt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Qi.length;o--;)Qi[o].id===this.id&&Qi.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),kx=function(){function i(t){this.contexts=[],this.scope=t,pt&&pt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Wn(n)||(n={matches:n});var o=new Hd(0,s||this.scope),a=o.conditions={},l,c,h;pt&&!o.selector&&(o.selector=pt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=zn.matchMedia(n[c]),l&&(Qi.indexOf(o)<0&&Qi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(pl):l.addEventListener("change",pl)));return h&&r(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Ia={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Ad(r)})},timeline:function(e){return new jt(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Dt(e)&&(e=wn(e)[0]);var s=Ki(e||{}).get,o=n?pd:fd;return n==="native"&&(n=""),e&&(t?o((hn[t]&&hn[t].get||s)(e,t,n,r)):function(a,l,c){return o((hn[a]&&hn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wn(e),e.length>1){var r=e.map(function(h){return sn.quickSetter(h,t,n)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}e=e[0]||{};var o=hn[t],a=Ki(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;zr._pt=0,u.init(e,n?h+n:h,zr,0,[e]),u.render(1,u),zr._pt&&Zl(1,zr)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var r,s=sn.to(e,_n((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ji(e.ease,jr.ease)),Xh(jr,e||{})},config:function(e){return Xh(mn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!hn[a]&&!gn[a]&&bs(t+" effect requires "+a+" plugin.")}),Oo[t]=function(a,l,c){return n(wn(a),_n(l||{},s),c)},o&&(jt.prototype[t]=function(a,l,c){return this.add(Oo[t](a,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Je[e]=Ji(t)},parseEase:function(e,t){return arguments.length?Ji(e,t):Je},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jt(e),r,s;for(n.smoothChildTiming=en(e.smoothChildTiming),gt.remove(n),n._dp=0,n._time=n._tTime=gt._time,r=gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Tt&&r.vars.onComplete===r._targets[0]))&&Gn(n,r,r._start-r._delay),r=s;return Gn(gt,n,0),n},context:function(e,t){return e?new Hd(e,t):pt},matchMedia:function(e){return new kx(e)},matchMediaRefresh:function(){return Qi.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||pl()},addEventListener:function(e,t){var n=Sa[e]||(Sa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Sa[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:xx,wrapYoyo:Mx,distribute:yd,random:Ed,snap:Sd,normalize:vx,getUnit:Ht,clamp:px,splitColor:Cd,toArray:wn,selector:ul,mapRange:bd,pipe:gx,unitize:_x,interpolate:yx,shuffle:Md},install:ld,effects:Oo,ticker:fn,updateRoot:jt.updateRoot,plugins:hn,globalTimeline:gt,core:{PropTween:nn,globals:cd,Tween:Tt,Timeline:jt,Animation:Rs,getCache:Ki,_removeLinkedListItem:Wa,reverting:function(){return Ft},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return zl=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ia[i]=Tt[i]});fn.add(jt.updateRoot);zr=Ia.to({},{duration:0});var Hx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Vx=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Hx(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},ko=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Dt(s)&&(l={},tn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Vx(a,s)}}}},sn=Ia.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ft?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ko("roundProps",dl),ko("modifiers"),ko("snap",Sd))||Ia;Tt.version=jt.version=sn.version="3.13.0";od=1;Gl()&&Jr();Je.Power0;Je.Power1;Je.Power2;Je.Power3;Je.Power4;Je.Linear;Je.Quad;Je.Cubic;Je.Quart;Je.Quint;Je.Strong;Je.Elastic;Je.Back;Je.SteppedEase;Je.Bounce;Je.Sine;Je.Expo;Je.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zh,Mi,Hr,Jl,qi,Jh,Ql,Wx=function(){return typeof window<"u"},li={},ki=180/Math.PI,Vr=Math.PI/180,Dr=Math.atan2,Qh=1e8,ec=/([A-Z])/g,Xx=/(left|right|width|margin|padding|x)/i,qx=/[\s,\(]\S/,kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ml=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$x=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Vd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Kx=function(e,t,n){return e.style[t]=n},Zx=function(e,t,n){return e.style.setProperty(t,n)},Jx=function(e,t,n){return e._gsap[t]=n},Qx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},eM=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},tM=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},_t="transform",rn=_t+"Origin",nM=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in li&&s){if(this.tfm=this.tfm||{},e!=="transform")e=kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ti(r,a)}):this.tfm[e]=o.x?o[e]:ti(r,e),e===rn&&(this.tfm.zOrigin=o.zOrigin);else return kn.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(_t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(rn,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},Xd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iM=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ec,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ql(),(!s||!s.isStart)&&!n[_t]&&(Xd(n),r.zOrigin&&n[rn]&&(n[rn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qd=function(e,t){var n={target:e,props:[],revert:iM,save:nM};return e._gsap||sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Yd,gl=function(e,t){var n=Mi.createElementNS?Mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mi.createElement(e);return n&&n.style?n:Mi.createElement(e)},An=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ec,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Qr(t)||t,1)||""},eu="O,Moz,ms,Ms,Webkit".split(","),Qr=function(e,t,n){var r=t||qi,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(eu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?eu[o]:"")+e},_l=function(){Wx()&&window.document&&(Zh=window,Mi=Zh.document,Hr=Mi.documentElement,qi=gl("div")||{style:{}},gl("div"),_t=Qr(_t),rn=_t+"Origin",qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yd=!!Qr("perspective"),Ql=sn.core.reverting,Jl=1)},tu=function(e){var t=e.ownerSVGElement,n=gl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Hr.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Hr.removeChild(n),s},nu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},jd=function(e){var t,n;try{t=e.getBBox()}catch{t=tu(e),n=1}return t&&(t.width||t.height)||n||(t=tu(e)),t&&!t.width&&!t.x&&!t.y?{x:+nu(e,["x","cx","x1"])||0,y:+nu(e,["y","cy","y1"])||0,width:0,height:0}:t},$d=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&jd(e))},ir=function(e,t){if(t){var n=e.style,r;t in li&&t!==rn&&(t=_t),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(ec,"-$1").toLowerCase())):n.removeAttribute(t)}},yi=function(e,t,n,r,s,o){var a=new nn(e._pt,t,n,0,1,o?Wd:Vd);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},iu={deg:1,rad:1,turn:1},rM={grid:1,flex:1},Pi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=qi.style,l=Xx.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=r==="px",f=r==="%",_,g,m,p;if(r===o||!s||iu[r]||iu[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&$d(e),(f||o==="%")&&(li[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],yt(f?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Mi||!g.appendChild)&&(g=Mi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===fn.time&&!m.uncache)return yt(s/m.width*u);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=u+r,_=e[h],M?e.style[t]=M:ir(e,t)}else(f||o==="%")&&!rM[An(g,"display")]&&(a.position=An(e,"position")),g===e&&(a.position="static"),g.appendChild(qi),_=qi[h],g.removeChild(qi),a.position="absolute";return l&&f&&(m=Ki(g),m.time=fn.time,m.width=g[h]),yt(d?_*s/u:_&&s?u/_*s:0)},ti=function(e,t,n,r){var s;return Jl||_l(),t in kn&&t!=="transform"&&(t=kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),li[t]&&t!=="transform"?(s=Ls(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Na(An(e,rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ua[t]&&Ua[t](e,t,n)||An(e,t)||ud(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Pi(e,t,s,n)+n:s},sM=function(e,t,n,r){if(!n||n==="none"){var s=Qr(t,e,1),o=s&&An(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=An(e,"borderTopColor"))}var a=new nn(this._pt,e.style,t,0,1,Gd),l=0,c=0,h,u,d,f,_,g,m,p,M,v,y,b;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=An(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=An(e,t)||r,g?e.style[t]=g:ir(e,t)),h=[n,r],Pd(h),n=h[0],r=h[1],d=n.match(Fr)||[],b=r.match(Fr)||[],b.length){for(;u=Fr.exec(r);)m=u[0],M=r.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=kr(f,m)+y),p=parseFloat(m),v=m.substr((p+"").length),l=Fr.lastIndex-v.length,v||(v=v||mn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(f=Pi(e,t,g,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Wd:Vd;return sd.test(r)&&(a.e=0),this._pt=a,a},ru={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aM=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=ru[n]||n,t[1]=ru[r]||r,t.join(" ")},oM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],li[a]&&(l=1,a=a==="transformOrigin"?rn:_t),ir(n,a);l&&(ir(n,_t),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ls(n,1),o.uncache=1,Xd(r)))}},Ua={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new nn(e._pt,t,n,0,0,oM);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ps=[1,0,0,1,0,0],Kd={},Zd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},su=function(e){var t=An(e,_t);return Zd(t)?Ps:t.substr(7).match(rd).map(yt)},tc=function(e,t){var n=e._gsap||Ki(e),r=e.style,s=su(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ps:s):(s===Ps&&!e.offsetParent&&e!==Hr&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Hr.appendChild(e)),s=su(e),l?r.display=l:ir(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Hr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},vl=function(e,t,n,r,s,o){var a=e._gsap,l=s||tc(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],v=t.split(" "),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,E,T,L,x;n?l!==Ps&&(T=f*m-_*g)&&(L=y*(m/T)+b*(-g/T)+(g*M-m*p)/T,x=y*(-_/T)+b*(f/T)-(f*M-_*p)/T,y=L,b=x):(E=jd(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(v[1]||v[0]).indexOf("%")?b/100*E.height:b)),r||r!==!1&&a.smooth?(p=y-c,M=b-h,a.xOffset=u+(p*f+M*g)-p,a.yOffset=d+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[rn]="0px 0px",o&&(yi(o,a,"xOrigin",c,y),yi(o,a,"yOrigin",h,b),yi(o,a,"xOffset",u,a.xOffset),yi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Ls=function(e,t){var n=e._gsap||new Ud(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=An(e,rn)||"0",h,u,d,f,_,g,m,p,M,v,y,b,E,T,L,x,w,N,O,$,I,z,U,q,X,Y,K,ee,J,W,Z,j;return h=u=d=g=m=p=M=v=y=0,f=_=1,n.svg=!!(e.getCTM&&$d(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),T=tc(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),vl(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,E=n.yOrigin||0,T!==Ps&&(N=T[0],O=T[1],$=T[2],I=T[3],h=z=T[4],u=U=T[5],T.length===6?(f=Math.sqrt(N*N+O*O),_=Math.sqrt(I*I+$*$),g=N||O?Dr(O,N)*ki:0,M=$||I?Dr($,I)*ki+g:0,M&&(_*=Math.abs(Math.cos(M*Vr))),n.svg&&(h-=b-(b*N+E*$),u-=E-(b*O+E*I))):(j=T[6],W=T[7],K=T[8],ee=T[9],J=T[10],Z=T[11],h=T[12],u=T[13],d=T[14],L=Dr(j,J),m=L*ki,L&&(x=Math.cos(-L),w=Math.sin(-L),q=z*x+K*w,X=U*x+ee*w,Y=j*x+J*w,K=z*-w+K*x,ee=U*-w+ee*x,J=j*-w+J*x,Z=W*-w+Z*x,z=q,U=X,j=Y),L=Dr(-$,J),p=L*ki,L&&(x=Math.cos(-L),w=Math.sin(-L),q=N*x-K*w,X=O*x-ee*w,Y=$*x-J*w,Z=I*w+Z*x,N=q,O=X,$=Y),L=Dr(O,N),g=L*ki,L&&(x=Math.cos(L),w=Math.sin(L),q=N*x+O*w,X=z*x+U*w,O=O*x-N*w,U=U*x-z*w,N=q,z=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=yt(Math.sqrt(N*N+O*O+$*$)),_=yt(Math.sqrt(U*U+j*j)),L=Dr(z,U),M=Math.abs(L)>2e-4?L*ki:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zd(An(e,_t)),q&&e.setAttribute("transform",q))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=yt(f),n.scaleY=yt(_),n.rotation=yt(g)+a,n.rotationX=yt(m)+a,n.rotationY=yt(p)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[rn]=Na(c)),n.xOffset=n.yOffset=0,n.force3D=mn.force3D,n.renderTransform=n.svg?cM:Yd?Jd:lM,n.uncache=0,n},Na=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ho=function(e,t,n){var r=Ht(t);return yt(parseFloat(t)+parseFloat(Pi(e,"x",n+"px",r)))+r},lM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jd(e,t)},zi="0deg",ds="0px",Bi=") ",Jd=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(v&&(u!==zi||h!==zi)){var E=parseFloat(h)*Vr,T=Math.sin(E),L=Math.cos(E),x;E=parseFloat(u)*Vr,x=Math.cos(E),o=Ho(M,o,T*x*-v),a=Ho(M,a,-Math.sin(E)*-v),l=Ho(M,l,L*x*-v+v)}m!==ds&&(y+="perspective("+m+Bi),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(b||o!==ds||a!==ds||l!==ds)&&(y+=l!==ds||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Bi),c!==zi&&(y+="rotate("+c+Bi),h!==zi&&(y+="rotateY("+h+Bi),u!==zi&&(y+="rotateX("+u+Bi),(d!==zi||f!==zi)&&(y+="skew("+d+", "+f+Bi),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Bi),M.style[_t]=y||"translate(0, 0)"},cM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(o),y=parseFloat(a),b,E,T,L,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Vr,c*=Vr,b=Math.cos(l)*u,E=Math.sin(l)*u,T=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(h*=Vr,x=Math.tan(c-h),x=Math.sqrt(1+x*x),T*=x,L*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),b*=x,E*=x)),b=yt(b),E=yt(E),T=yt(T),L=yt(L)):(b=u,L=d,E=T=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Pi(f,"x",o,"px"),y=Pi(f,"y",a,"px")),(_||g||m||p)&&(v=yt(v+_-(_*b+g*T)+m),y=yt(y+g-(_*E+g*L)+p)),(r||s)&&(x=f.getBBox(),v=yt(v+r/100*x.width),y=yt(y+s/100*x.height)),x="matrix("+b+","+E+","+T+","+L+","+v+","+y+")",f.setAttribute("transform",x),M&&(f.style[_t]=x)},hM=function(e,t,n,r,s){var o=360,a=Dt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ki:1),c=l-r,h=r+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Qh)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Qh)%o-~~(c/o)*o)),e._pt=d=new nn(e._pt,t,n,r,c,Yx),d.e=h,d.u="deg",e._props.push(n),d},au=function(e,t){for(var n in t)e[n]=t[n];return e},uM=function(e,t,n){var r=au({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[_t]=t,a=Ls(n,1),ir(n,_t),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_t],o[_t]=t,a=Ls(n,1),o[_t]=c);for(l in li)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Ht(c),_=Ht(h),u=f!==_?Pi(n,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new nn(e._pt,a,l,u,d-u,ml),e._pt.u=_||0,e._props.push(l));au(a,r)};tn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Ua[e>1?"border"+i:i]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return ti(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var Qd={name:"css",register:_l,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,M,v,y,b,E,T,L;Jl||_l(),this.styles=this.styles||qd(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(hn[g]&&Nd(g,t,n,r,e,s)))){if(f=typeof h,_=Ua[g],f==="function"&&(h=h.call(n,r,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=As(h)),_)_(this,e,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Ai.lastIndex=0,Ai.test(c)||(m=Ht(c),p=Ht(h)),p?m!==p&&(c=Pi(e,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,r,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Dt(c)&&~c.indexOf("random(")&&(c=As(c)),Ht(c+"")||c==="auto"||(c+=mn.units[g]||Ht(ti(e,g))||""),(c+"").charAt(1)==="="&&(c=ti(e,g))):c=ti(e,g),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in kn&&(g==="autoAlpha"&&(d===1&&ti(e,"visibility")==="hidden"&&u&&(d=0),L.push("visibility",0,a.visibility),yi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=kn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in li,v){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=An(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ls(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new nn(this._pt,a,_t,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new nn(this._pt,b,"scaleY",b.scaleY,(M?kr(b.scaleY,M+u):u)-b.scaleY||0,ml),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(rn,0,a[rn]),h=aM(h),b.svg?vl(e,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&yi(this,b,"zOrigin",b.zOrigin,p),yi(this,a,g,Na(c),Na(h)));continue}else if(g==="svgOrigin"){vl(e,h,1,E,0,this);continue}else if(g in Kd){hM(this,b,g,d,M?kr(d,M+h):h);continue}else if(g==="smoothOrigin"){yi(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){uM(this,h,e);continue}}else g in a||(g=Qr(g)||g);if(v||(u||u===0)&&(d||d===0)&&!qx.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=Ht(h)||(g in mn.units?mn.units[g]:m),m!==p&&(d=Pi(e,g,c,p)),this._pt=new nn(this._pt,v?b:a,g,d,(M?kr(d,M+u):u)-d,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?$x:ml),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=jx);else if(g in a)sM.call(this,e,g,c,M?M+h:h);else if(g in e)this.add(e,g,c||e[g],M?M+h:h,r,s);else if(g!=="parseTransform"){Hl(g,h);continue}v||(g in a?L.push(g,0,a[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,c||e[g])),o.push(g)}}T&&kd(this)},render:function(e,t){if(t.tween._time||!Ql())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ti,aliases:kn,getSetter:function(e,t,n){var r=kn[t];return r&&r.indexOf(",")<0&&(t=r),t in li&&t!==rn&&(e._gsap.x||ti(e,"x"))?n&&Jh===n?t==="scale"?Qx:Jx:(Jh=n||{})&&(t==="scale"?eM:tM):e.style&&!Bl(e.style[t])?Kx:~t.indexOf("-")?Zx:Kl(e,t)},core:{_removeProperty:ir,_getMatrix:tc}};sn.utils.checkPrefix=Qr;sn.core.getStyleSaver=qd;(function(i,e,t,n){var r=tn(i+","+e+","+t,function(s){li[s]=1});tn(e,function(s){mn.units[s]="deg",Kd[s]=1}),kn[r[13]]=i+","+e,tn(n,function(s){var o=s.split(":");kn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){mn.units[i]="px"});sn.registerPlugin(Qd);var Hn=sn.registerPlugin(Qd)||sn;Hn.core.Tween;class ef{constructor(){this.satellites=[]}parse(e){this.satellites=[];const t=e.trim().split(`
`);for(let n=0;n<t.length;n+=3)if(n+2<t.length){const r=t[n].trim(),s=t[n+1].trim(),o=t[n+2].trim();if(this.isValidTLE(s,o))try{const a=Hv(s,o);if(a){const l={name:r,line1:s,line2:o,satrec:a,noradId:this.extractNoradId(s),inclination:this.extractInclination(o),eccentricity:this.extractEccentricity(o),meanMotion:this.extractMeanMotion(o),epochYear:this.extractEpochYear(s),epochDay:this.extractEpochDay(s),altitude:this.calculateAltitude(o),period:this.calculatePeriod(o)};this.satellites.push(l)}}catch(a){console.warn(`Failed to parse TLE for ${r}:`,a)}}return this.satellites}isValidTLE(e,t){return e.length>=69&&t.length>=69&&e[0]==="1"&&t[0]==="2"}extractNoradId(e){return e.substring(2,7).trim()}extractInclination(e){return parseFloat(e.substring(8,16))}extractEccentricity(e){return parseFloat("0."+e.substring(26,33))}extractMeanMotion(e){return parseFloat(e.substring(52,63))}extractEpochYear(e){let t=parseInt(e.substring(18,20));return t<57?2e3+t:1900+t}extractEpochDay(e){return parseFloat(e.substring(20,32))}calculateAltitude(e){const t=this.extractMeanMotion(e),n=6371,r=398600.4418,s=t*2*Math.PI/86400,o=Math.pow(r/(s*s),1/3);return Math.round(o-n)}calculatePeriod(e){const t=this.extractMeanMotion(e);return Math.round(1440/t)}propagateOrbit(e,t){try{const n=jv(e.satrec,t);if(n&&n.position){const r=Ju(t),s=Zv(n.position,r);return{position:n.position,velocity:n.velocity,latitude:$v(s.latitude),longitude:Kv(s.longitude),altitude:s.height,x:n.position.x,y:n.position.y,z:n.position.z}}}catch(n){console.warn(`Propagation failed for ${e.name}:`,n)}return null}calculateOrbitPath(e,t,n=100){const r=[],o=this.calculatePeriod(e.line2)*60*1e3/n;for(let a=0;a<n;a++){const l=new Date(t.getTime()+a*o),c=this.propagateOrbit(e,l);c&&r.push({x:c.x,y:c.y,z:c.z})}return r}}class dM{constructor(e){this.scene=e,this.earthGroup=new Nn,this.earthRadius=30,this.init()}init(){this.createEarthSphere(),this.createAtmosphere(),this.createClouds(),this.scene.add(this.earthGroup)}createEarthSphere(){const e=new kt(this.earthRadius,128,128);new Tv;const t=new tl({map:this.createEarthTexture(),bumpMap:this.createBumpTexture(),bumpScale:.8,specularMap:this.createSpecularTexture(),roughness:.7,metalness:.1,clearcoat:.3,clearcoatRoughness:.4});this.earthMesh=new nt(e,t),this.earthMesh.castShadow=!0,this.earthMesh.receiveShadow=!0,this.earthGroup.add(this.earthMesh),this.createNightLights()}createEarthTexture(){const e=document.createElement("canvas");e.width=4096,e.height=2048;const t=e.getContext("2d"),n=t.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);n.addColorStop(0,"#002040"),n.addColorStop(.5,"#003060"),n.addColorStop(1,"#001530"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height);for(let o=0;o<50;o++){const a=Math.random()*e.width,l=Math.random()*e.height,c=Math.random()*200+50,h=t.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(0, 30, 60, 0.3)"),h.addColorStop(1,"rgba(0, 30, 60, 0)"),t.fillStyle=h,t.fillRect(a-c,l-c,c*2,c*2)}const r=t.createLinearGradient(0,0,e.width,e.height);r.addColorStop(0,"#3a5f1f"),r.addColorStop(.5,"#2d5016"),r.addColorStop(1,"#234012"),t.fillStyle=r,t.beginPath(),t.ellipse(e.width*.52,e.height*.5,150,200,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(e.width*.25,e.height*.5,120,250,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(e.width*.7,e.height*.35,200,150,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(e.width*.75,e.height*.75,80,60,0,0,Math.PI*2),t.fill(),t.globalAlpha=.3;for(let o=0;o<1e3;o++){const a=Math.random()*e.width,l=Math.random()*e.height,c=Math.random()*3;t.fillStyle=Math.random()>.5?"#3d6828":"#1a3d5c",t.fillRect(a,l,c,c)}const s=new Ur(e);return s.needsUpdate=!0,s}createBumpTexture(){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,e.width,e.height);for(let r=0;r<500;r++){const s=Math.random()*e.width,o=Math.random()*e.height,a=Math.floor(Math.random()*100+100);t.fillStyle=`rgb(${a}, ${a}, ${a})`,t.beginPath(),t.arc(s,o,Math.random()*5,0,Math.PI*2),t.fill()}return new Ur(e)}createSpecularTexture(){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");return t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),t.fillStyle="#000000",t.beginPath(),t.ellipse(e.width*.52,e.height*.5,37,50,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(e.width*.25,e.height*.5,30,62,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(e.width*.7,e.height*.35,50,37,0,0,Math.PI*2),t.fill(),new Ur(e)}createNightLights(){const e=new kt(this.earthRadius+.1,64,64),t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d");n.fillStyle="black",n.fillRect(0,0,t.width,t.height);const r=[{x:.2,y:.35,size:3},{x:.15,y:.4,size:2.5},{x:.22,y:.38,size:2},{x:.51,y:.32,size:2.5},{x:.53,y:.33,size:2.5},{x:.55,y:.35,size:2},{x:.75,y:.4,size:3},{x:.72,y:.45,size:2.5},{x:.68,y:.5,size:2}];n.shadowBlur=10,n.shadowColor="#ffaa00",r.forEach(a=>{const l=n.createRadialGradient(a.x*t.width,a.y*t.height,0,a.x*t.width,a.y*t.height,a.size*5);l.addColorStop(0,"rgba(255, 200, 100, 1)"),l.addColorStop(.5,"rgba(255, 170, 0, 0.5)"),l.addColorStop(1,"rgba(255, 170, 0, 0)"),n.fillStyle=l,n.beginPath(),n.arc(a.x*t.width,a.y*t.height,a.size*5,0,Math.PI*2),n.fill()});const s=new Ur(t),o=new Cn({map:s,transparent:!0,opacity:.3,blending:Un,side:Ot});this.nightLights=new nt(e,o),this.earthGroup.add(this.nightLights)}createAtmosphere(){const e=new kt(this.earthRadius+1,64,64),t=new va({color:8961023,transparent:!0,opacity:.15,side:Ot,blending:Un}),n=new nt(e,t);this.earthGroup.add(n);const r=new kt(this.earthRadius+2,64,64),s=new va({color:4227327,transparent:!0,opacity:.08,side:Ot,blending:Un}),o=new nt(r,s);this.earthGroup.add(o);const a=new kt(this.earthRadius+4,64,64),l=new Ci({uniforms:{c:{value:.6},p:{value:4.5},glowColor:{value:new Ge(33023)},viewVector:{value:new P}},vertexShader:`
                uniform vec3 viewVector;
                varying float intensity;
                void main() {
                    vec3 vNormal = normalize(normalMatrix * normal);
                    vec3 vNormel = normalize(normalMatrix * viewVector);
                    intensity = pow(0.65 - dot(vNormal, vNormel), 2.0);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform vec3 glowColor;
                varying float intensity;
                void main() {
                    vec3 glow = glowColor * intensity;
                    gl_FragColor = vec4(glow, intensity * 0.5);
                }
            `,side:si,blending:Un,transparent:!0});this.glowMesh=new nt(a,l),this.earthGroup.add(this.glowMesh)}createClouds(){const e=new kt(this.earthRadius+1,64,64),t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d");n.fillStyle="transparent",n.fillRect(0,0,t.width,t.height),n.fillStyle="rgba(255, 255, 255, 0.3)";for(let o=0;o<50;o++){const a=Math.random()*t.width,l=Math.random()*t.height,c=Math.random()*100+50,h=Math.random()*30+10;n.save(),n.translate(a,l),n.rotate(Math.random()*Math.PI),n.beginPath(),n.ellipse(0,0,c,h,0,0,Math.PI*2),n.fill(),n.restore()}const r=new Ur(t),s=new va({map:r,transparent:!0,opacity:.4,side:En,depthWrite:!1});this.cloudsMesh=new nt(e,s),this.earthGroup.add(this.cloudsMesh)}update(e){this.earthMesh.rotation.y+=e*.05,this.nightLights.rotation.y=this.earthMesh.rotation.y,this.cloudsMesh.rotation.y+=e*.07,this.cloudsMesh.rotation.z+=e*.01,this.glowMesh&&this.glowMesh.material.uniforms&&(this.glowMesh.material.uniforms.viewVector.value=new P().subVectors(this.earthGroup.position,this.glowMesh.position))}getRadius(){return this.earthRadius}}class fM extends St{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ne(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ir=new P,ou=new tt,lu=new tt,cu=new P,hu=new P;class pM{constructor(e={}){const t=this;let n,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:r}},this.render=function(f,_){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),ou.copy(_.matrixWorldInverse),lu.multiplyMatrices(_.projectionMatrix,ou),c(f,f,_),d(f)},this.setSize=function(f,_){n=f,r=_,s=n/2,o=r/2,l.style.width=f+"px",l.style.height=_+"px"};function c(f,_,g){if(f.isCSS2DObject){Ir.setFromMatrixPosition(f.matrixWorld),Ir.applyMatrix4(lu);const m=f.visible===!0&&Ir.z>=-1&&Ir.z<=1&&f.layers.test(g.layers)===!0;if(f.element.style.display=m===!0?"":"none",m===!0){f.onBeforeRender(t,_,g);const M=f.element;M.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(Ir.x*s+s)+"px,"+(-Ir.y*o+o)+"px)",M.parentNode!==l&&l.appendChild(M),f.onAfterRender(t,_,g)}const p={distanceToCameraSquared:h(g,f)};a.objects.set(f,p)}for(let m=0,p=f.children.length;m<p;m++)c(f.children[m],_,g)}function h(f,_){return cu.setFromMatrixPosition(f.matrixWorld),hu.setFromMatrixPosition(_.matrixWorld),cu.distanceToSquared(hu)}function u(f){const _=[];return f.traverse(function(g){g.isCSS2DObject&&_.push(g)}),_}function d(f){const _=u(f).sort(function(m,p){if(m.renderOrder!==p.renderOrder)return p.renderOrder-m.renderOrder;const M=a.objects.get(m).distanceToCameraSquared,v=a.objects.get(p).distanceToCameraSquared;return M-v}),g=_.length;for(let m=0,p=_.length;m<p;m++)_[m].element.style.zIndex=g-m}}}class mM{constructor(e,t){this.scene=e,this.app=t,this.parser=new ef,this.debrisObjects=[],this.orbitLines=[],this.labels=[],this.debrisGroup=new Nn,this.orbitsGroup=new Nn,this.labelsGroup=new Nn,this.instancedMesh=null,this.debrisData=[],this.earthRadiusScale=30,this.orbitScale=.01,this.labelRenderer=null,this.init()}init(){this.scene.add(this.debrisGroup),this.scene.add(this.orbitsGroup),this.setupLabelRenderer()}setupLabelRenderer(){this.labelRenderer=new pM,this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0px",this.labelRenderer.domElement.style.pointerEvents="none",document.getElementById("canvas-container").appendChild(this.labelRenderer.domElement),window.addEventListener("resize",()=>{this.labelRenderer.setSize(window.innerWidth,window.innerHeight)})}clearDebris(){this.debrisGroup.clear(),this.orbitsGroup.clear(),this.labels.forEach(e=>{e.element&&e.element.parentNode&&e.element.parentNode.removeChild(e.element)}),this.debrisObjects=[],this.orbitLines=[],this.labels=[],this.debrisData=[]}addDebris(e){this.debrisData=e,e.length>100?this.createInstancedDebris(e):this.createIndividualDebris(e),e.forEach(t=>{this.createOrbitPath(t)})}createInstancedDebris(e){const t=new kt(.5,8,8),n=new Cn({color:16777215,transparent:!0,opacity:.8});this.instancedMesh=new _v(t,n,e.length),this.instancedMesh.instanceMatrix.setUsage(sp);const r=new tt;new Ge,e.forEach((s,o)=>{r.makeTranslation(0,0,0),this.instancedMesh.setMatrixAt(o,r);const a=this.getAltitudeColor(s.altitude);this.instancedMesh.setColorAt(o,a),s.instanceIndex=o}),this.instancedMesh.instanceMatrix.needsUpdate=!0,this.instancedMesh.instanceColor&&(this.instancedMesh.instanceColor.needsUpdate=!0),this.debrisGroup.add(this.instancedMesh)}createIndividualDebris(e){e.forEach(t=>{const n=this.getSatelliteSize(t),r=this.createSatelliteGeometry(t,n),s=this.getAltitudeColor(t.altitude),o=new va({color:s,emissive:s,emissiveIntensity:.3,metalness:.7,roughness:.3,transparent:!0,opacity:.95}),a=new nt(r,o);a.userData=t,a.castShadow=!0,a.receiveShadow=!0;const l=new Nn,c=new kt(n*1.2,16,16),h=new Cn({color:s,transparent:!0,opacity:.4,blending:Un}),u=new nt(c,h);l.add(u);const d=new kt(n*1.8,8,8),f=new Cn({color:s,transparent:!0,opacity:.15,blending:Un}),_=new nt(d,f);l.add(_);const g=new Yu(s,.5,n*5);l.add(g),a.add(l),this.debrisGroup.add(a),this.debrisObjects.push(a),this.createLabel(a,t)})}createLabel(e,t){const n=document.createElement("div");n.className="debris-label",n.textContent=t.name,n.style.cssText=`
            color: white;
            font-size: 10px;
            padding: 2px 6px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 3px;
            pointer-events: none;
            white-space: nowrap;
            display: none;
        `;const r=new fM(n);r.position.set(0,2,0),e.add(r),this.labels.push(r)}createOrbitPath(e){const t=this.parser.calculateOrbitPath(e,new Date,100);if(t.length>0){const n=new xv(t.map(c=>new P(c.x*this.orbitScale,c.y*this.orbitScale,c.z*this.orbitScale)));n.closed=!0;const r=n.getPoints(200),s=new At().setFromPoints(r),o=this.getAltitudeColor(e.altitude),a=new nr({color:o,transparent:!0,opacity:.3,blending:Un}),l=new Ha(s,a);l.userData=e,this.orbitsGroup.add(l),this.orbitLines.push(l)}}createSatelliteGeometry(e,t){const n=this.classifySatelliteType(e.name);return n==="debris"?new Ul(t,0):n==="station"?new Vn(t*1.5,t,t*2):new kt(t,24,24)}getSatelliteSize(e){const t=e.name.toUpperCase();return t.includes("ISS")||t.includes("TIANGONG")?2:t.includes("DEB")||t.includes("FRAGMENT")?.4:t.includes("STARLINK")||t.includes("ONEWEB")?.6:.8}classifySatelliteType(e){const t=e.toUpperCase();return t.includes("DEB")||t.includes("FRAGMENT")?"debris":t.includes("ISS")||t.includes("STATION")?"station":"satellite"}getAltitudeColor(e){return e<2e3?new Ge(16737894):e<35786?new Ge(16759603):e<36786?new Ge(3390463):new Ge(13395711)}update(e){if(this.instancedMesh){const t=new tt;this.debrisData.forEach((n,r)=>{const s=this.parser.propagateOrbit(n,e);s&&(t.makeTranslation(s.x*this.orbitScale,s.y*this.orbitScale,s.z*this.orbitScale),this.instancedMesh.setMatrixAt(r,t))}),this.instancedMesh.instanceMatrix.needsUpdate=!0}else this.debrisObjects.forEach(t=>{const n=this.parser.propagateOrbit(t.userData,e);n&&t.position.set(n.x*this.orbitScale,n.y*this.orbitScale,n.z*this.orbitScale)});this.labelRenderer&&this.app&&this.labelRenderer.render(this.scene,this.app.camera)}selectDebris(e){if(e.material){e.userData.originalEmissiveIntensity=e.material.emissiveIntensity,e.userData.originalScale=e.scale.clone(),e.material.emissiveIntensity=1.5,e.scale.multiplyScalar(1.5);const t=this.orbitLines.find(n=>n.userData.noradId===e.userData.noradId);t&&(t.material.opacity=.8)}}deselectDebris(e){if(e.material&&e.userData.originalEmissiveIntensity!==void 0){e.material.emissiveIntensity=e.userData.originalEmissiveIntensity,e.scale.copy(e.userData.originalScale);const t=this.orbitLines.find(n=>n.userData.noradId===e.userData.noradId);t&&(t.material.opacity=.3)}}toggleOrbits(e){this.orbitsGroup.visible=e}toggleLabels(e){this.labels.forEach(t=>{t.element&&(t.element.style.display=e?"block":"none")})}searchDebris(e){if(!e)return[];const t=e.toLowerCase(),n=[];return this.debrisObjects.forEach(r=>{const s=r.userData.name.toLowerCase(),o=r.userData.noradId;(s.includes(t)||o.includes(t))&&n.push(r)}),this.instancedMesh&&this.debrisData.forEach((r,s)=>{const o=r.name.toLowerCase(),a=r.noradId;if(o.includes(t)||a.includes(t)){const l={userData:r,position:new P,instanceIndex:s};n.push(l)}}),n}getDebrisObjects(){return this.debrisObjects}}class gM{constructor(e){this.app=e,this.infoPanel=document.getElementById("info-panel"),this.panelContent=document.getElementById("panel-content"),this.debrisName=document.getElementById("debris-name"),this.debrisCount=document.getElementById("debris-count"),this.timeDisplay=document.getElementById("time-display"),this.speedValue=document.getElementById("speed-value")}showDebrisInfo(e){this.debrisName.textContent=e.name;const t=this.calculateApogee(e.altitude,e.eccentricity),n=this.calculatePerigee(e.altitude,e.eccentricity),r=this.calculateOrbitalVelocity(e.altitude);this.panelContent.innerHTML=`
            <div class="info-group">
                <h4>Identification</h4>
                <div class="info-item">
                    <span class="info-label">NORAD ID:</span>
                    <span class="info-value">${e.noradId}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Name:</span>
                    <span class="info-value">${e.name}</span>
                </div>
            </div>
            
            <div class="info-group">
                <h4>Orbital Elements</h4>
                <div class="info-item">
                    <span class="info-label">Inclination:</span>
                    <span class="info-value">${e.inclination.toFixed(2)}°</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Eccentricity:</span>
                    <span class="info-value">${e.eccentricity.toFixed(6)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Mean Motion:</span>
                    <span class="info-value">${e.meanMotion.toFixed(4)} rev/day</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Period:</span>
                    <span class="info-value">${this.formatPeriod(e.period)}</span>
                </div>
            </div>
            
            <div class="info-group">
                <h4>Altitude Information</h4>
                <div class="info-item">
                    <span class="info-label">Mean Altitude:</span>
                    <span class="info-value">${Math.round(e.altitude)} km</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Apogee:</span>
                    <span class="info-value">${Math.round(t)} km</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Perigee:</span>
                    <span class="info-value">${Math.round(n)} km</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Velocity:</span>
                    <span class="info-value">${r.toFixed(2)} km/s</span>
                </div>
            </div>
            
            <div class="info-group">
                <h4>Epoch Data</h4>
                <div class="info-item">
                    <span class="info-label">Epoch Year:</span>
                    <span class="info-value">${e.epochYear}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Epoch Day:</span>
                    <span class="info-value">${e.epochDay.toFixed(6)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Age:</span>
                    <span class="info-value">${this.calculateTLEAge(e.epochYear,e.epochDay)}</span>
                </div>
            </div>
            
            <div class="info-group">
                <h4>Classification</h4>
                <div class="info-item">
                    <span class="info-label">Orbit Type:</span>
                    <span class="info-value">${this.classifyOrbit(e.altitude)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Object Type:</span>
                    <span class="info-value">${this.classifyObject(e.name)}</span>
                </div>
            </div>
        `,this.infoPanel.classList.add("active")}hideInfoPanel(){this.infoPanel.classList.remove("active")}updateDebrisCount(e){this.debrisCount.textContent=e.toLocaleString()}updateTime(e){const t=e.getUTCHours().toString().padStart(2,"0"),n=e.getUTCMinutes().toString().padStart(2,"0"),r=e.getUTCSeconds().toString().padStart(2,"0");this.timeDisplay.textContent=`${t}:${n}:${r} UTC`}updateSpeed(e){this.speedValue.textContent=`${e}x`}calculateApogee(e,t){return(e+6371)*(1+t)-6371}calculatePerigee(e,t){return(e+6371)*(1-t)-6371}calculateOrbitalVelocity(e){const n=398600.4418,r=6371+e;return Math.sqrt(n/r)}formatPeriod(e){const t=Math.floor(e/60),n=Math.floor(e%60),r=Math.floor(e*60%60);return t>0?`${t}h ${n}m ${r}s`:`${n}m ${r}s`}calculateTLEAge(e,t){const n=new Date(e,0,1);n.setDate(n.getDate()+t-1);const s=Math.floor((new Date-n)/(1e3*60*60*24));if(s<1)return"< 1 day";if(s===1)return"1 day";if(s<30)return`${s} days`;if(s<365){const o=Math.floor(s/30);return`${o} month${o>1?"s":""}`}else{const o=Math.floor(s/365);return`${o} year${o>1?"s":""}`}}classifyOrbit(e){return e<2e3?"Low Earth Orbit (LEO)":e<35786?"Medium Earth Orbit (MEO)":e>=35786&&e<=36786?"Geostationary Orbit (GEO)":"High Earth Orbit (HEO)"}classifyObject(e){const t=e.toUpperCase();return t.includes("DEB")||t.includes("DEBRIS")?"Debris Fragment":t.includes("R/B")||t.includes("ROCKET")?"Rocket Body":t.includes("ISS")||t.includes("STATION")?"Space Station":t.includes("STARLINK")||t.includes("ONEWEB")?"Communication Satellite":t.includes("GPS")||t.includes("GLONASS")||t.includes("GALILEO")?"Navigation Satellite":t.includes("COSMOS")||t.includes("USA")?"Military Satellite":t.includes("WEATHER")||t.includes("METEOSAT")||t.includes("GOES")?"Weather Satellite":t.includes("LANDSAT")||t.includes("SENTINEL")?"Earth Observation":t.includes("HUBBLE")||t.includes("SPITZER")?"Space Telescope":"Satellite"}}class _M{constructor(e,t,n,r){this.scene=e,this.camera=t,this.renderer=n,this.app=r,this.isSelecting=!1,this.selectionBox=null,this.selectionHelper=null,this.selectionBounds=null,this.startPoint=new P,this.endPoint=new P,this.raycaster=new $u,this.mouse=new Ne,this.init()}init(){this.createSelectionBox(),this.setupEventListeners()}createSelectionBox(){const e=new Vn(1,1,1),t=new Wu(e),n=new nr({color:65535,transparent:!0,opacity:1,linewidth:3});this.selectionBox=new Pl(t,n),this.selectionBox.visible=!1,this.scene.add(this.selectionBox);const r=new Cn({color:65535,transparent:!0,opacity:.2,side:En,depthWrite:!1,blending:Un});this.selectionHelper=new nt(e,r),this.selectionHelper.visible=!1,this.scene.add(this.selectionHelper),this.animateSelection()}setupEventListeners(){}enableSelection(){this.isSelecting=!0,document.body.style.cursor="crosshair",this.renderer.domElement.addEventListener("mousedown",this.onMouseDown.bind(this)),this.renderer.domElement.addEventListener("mousemove",this.onMouseMove.bind(this)),this.renderer.domElement.addEventListener("mouseup",this.onMouseUp.bind(this)),this.app.controls.enabled=!1}disableSelection(){this.isSelecting=!1,document.body.style.cursor="grab",this.renderer.domElement.removeEventListener("mousedown",this.onMouseDown.bind(this)),this.renderer.domElement.removeEventListener("mousemove",this.onMouseMove.bind(this)),this.renderer.domElement.removeEventListener("mouseup",this.onMouseUp.bind(this)),this.app.controls.enabled=!0}onMouseDown(e){if(!this.isSelecting)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=new kt(50,32,32),n=new Cn({visible:!1}),r=new nt(t,n);r.position.set(0,0,0);const s=this.raycaster.intersectObject(r);if(s.length>0)this.startPoint=s[0].point;else{const o=this.camera.position.distanceTo(new P(0,0,0)),a=this.camera.getWorldDirection(new P).normalize();this.startPoint=this.camera.position.clone().add(a.multiplyScalar(o*.3))}this.selectionBox.visible=!0,this.selectionHelper.visible=!0,this.updateSelectionBox()}onMouseMove(e){if(!this.isSelecting||!this.selectionBox.visible)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.camera.position.distanceTo(new P(0,0,0)),n=this.camera.getWorldDirection(new P).normalize();this.endPoint=this.camera.position.clone().add(n.multiplyScalar(t*.5));const r=new P().crossVectors(this.camera.up,n).normalize(),s=new P().crossVectors(n,r).normalize();this.endPoint.add(r.multiplyScalar(this.mouse.x*t*.2)),this.endPoint.add(s.multiplyScalar(this.mouse.y*t*.2)),this.updateSelectionBox()}onMouseUp(e){!this.isSelecting||!this.selectionBox.visible||(this.createSelectionBounds(),this.disableSelection(),this.app.onSpatialSelection&&this.app.onSpatialSelection(this.selectionBounds))}updateSelectionBox(){const e=this.startPoint.clone().add(this.endPoint).multiplyScalar(.5),t=new P;t.subVectors(this.endPoint,this.startPoint).abs(),t.x=Math.max(t.x,10),t.y=Math.max(t.y,10),t.z=Math.max(t.z,10),this.selectionBox.position.copy(e),this.selectionBox.scale.copy(t),this.selectionHelper.position.copy(e),this.selectionHelper.scale.copy(t)}createSelectionBounds(){if(!this.selectionBox.visible)return null;const e=this.selectionBox.position.clone(),t=this.selectionBox.scale.clone();return this.selectionBounds={center:e,size:t,min:new P(e.x-t.x/2,e.y-t.y/2,e.z-t.z/2),max:new P(e.x+t.x/2,e.y+t.y/2,e.z+t.z/2)},this.selectionBounds}clearSelection(){this.selectionBox.visible=!1,this.selectionHelper.visible=!1,this.selectionBounds=null,this.app.onSpatialSelectionCleared&&this.app.onSpatialSelectionCleared()}isPointInSelection(e){return this.selectionBounds?e.x>=this.selectionBounds.min.x&&e.x<=this.selectionBounds.max.x&&e.y>=this.selectionBounds.min.y&&e.y<=this.selectionBounds.max.y&&e.z>=this.selectionBounds.min.z&&e.z<=this.selectionBounds.max.z:!1}getSelectedSatellites(e,t){if(!this.selectionBounds)return[];const n=[];return e.debrisData.forEach(r=>{const s=e.parser.propagateOrbit(r,t);if(s){const o=new P(s.x*e.orbitScale,s.y*e.orbitScale,s.z*e.orbitScale);this.isPointInSelection(o)&&n.push({...r,currentPosition:o,realPosition:s})}}),n}animateToRegion(){if(!this.selectionBounds)return;const e=this.selectionBounds.center,t=this.selectionBounds.size,r=Math.max(t.x,t.y,t.z)*2,s=e.clone().sub(this.camera.position).normalize(),o=e.clone().sub(s.multiplyScalar(r));Hn.to(this.camera.position,{duration:2,x:o.x,y:o.y,z:o.z,ease:"power2.inOut"}),Hn.to(this.app.controls.target,{duration:2,x:e.x,y:e.y,z:e.z,ease:"power2.inOut"})}animateSelection(){const e=()=>{this.selectionBox&&this.selectionBox.visible&&(this.selectionBox.material.opacity=.5+Math.sin(Date.now()*.003)*.5,this.selectionBox.rotation.y+=.001,this.selectionHelper.rotation.y=this.selectionBox.rotation.y),requestAnimationFrame(e)};e()}highlightSelection(){}getSelectionInfo(){if(!this.selectionBounds)return null;const e=this.selectionBounds.size;return{center:this.selectionBounds.center,dimensions:{width:e.x.toFixed(1),height:e.y.toFixed(1),depth:e.z.toFixed(1)},volume:(e.x*e.y*e.z).toFixed(2)}}}class vM{constructor(){this.collisionThreshold=2,this.timeStep=60,this.analysisWindow=24*60*60,this.collisions=[]}analyzeCollisions(e,t,n=null){this.collisions=[];const r=new Date(t.getTime()+this.analysisWindow*1e3);console.log(`Analyzing collisions for ${e.length} satellites from ${t.toISOString()} to ${r.toISOString()}`);for(let s=0;s<e.length;s++)for(let o=s+1;o<e.length;o++){const a=this.analyzeCollisionPair(e[s],e[o],t,r,n);a&&this.collisions.push(a)}return this.collisions.sort((s,o)=>s.time-o.time),this.collisions}analyzeCollisionPair(e,t,n,r,s){let o=1/0,a=null,l=null;const c=(r-n)/1e3,h=Math.min(c/this.timeStep,1e3),u=c/h;for(let d=0;d<=h;d++){const f=new Date(n.getTime()+d*u*1e3),_=this.getSatellitePosition(e,f),g=this.getSatellitePosition(t,f);if(_&&g){if(s&&(!this.isPositionInBounds(_,s)||!this.isPositionInBounds(g,s)))continue;const m=this.calculateDistance(_,g);m<o&&(o=m,a=f,l={pos1:_.clone(),pos2:g.clone()})}}return o<this.collisionThreshold?{satellite1:e,satellite2:t,time:a,distance:o,positions:l,riskLevel:this.calculateRiskLevel(o),relativeVelocity:this.calculateRelativeVelocity(e,t,a)}:null}getSatellitePosition(e,t){try{if(window.orbitalApp&&window.orbitalApp.debrisManager){const n=window.orbitalApp.debrisManager.parser.propagateOrbit(e,t);if(n)return new P(n.x,n.y,n.z)}}catch(n){console.warn(`Failed to get position for ${e.name}:`,n)}return null}calculateDistance(e,t){return e.distanceTo(t)}isPositionInBounds(e,t){const n=e.clone().multiplyScalar(.01);return n.x>=t.min.x&&n.x<=t.max.x&&n.y>=t.min.y&&n.y<=t.max.y&&n.z>=t.min.z&&n.z<=t.max.z}calculateRiskLevel(e){return e<.5?"CRITICAL":e<1?"HIGH":e<1.5?"MEDIUM":"LOW"}calculateRelativeVelocity(e,t,n){const s=new Date(n.getTime()-5e3),o=new Date(n.getTime()+10*500),a=this.getSatellitePosition(e,s),l=this.getSatellitePosition(e,o),c=this.getSatellitePosition(t,s),h=this.getSatellitePosition(t,o);if(a&&l&&c&&h){const u=l.clone().sub(a).divideScalar(10),d=h.clone().sub(c).divideScalar(10);return u.sub(d).length()}return 0}getCollisionsByRisk(){const e={CRITICAL:[],HIGH:[],MEDIUM:[],LOW:[]};return this.collisions.forEach(t=>{e[t.riskLevel].push(t)}),e}getCollisionsInTimeWindow(e,t){return this.collisions.filter(n=>n.time>=e&&n.time<=t)}createCollisionVisualization(e,t){const n=new kt(1,16,16),r=new Cn({color:this.getRiskColor(t.riskLevel),emissive:this.getRiskColor(t.riskLevel),emissiveIntensity:.5,transparent:!0,opacity:.8}),s=new nt(n,r),o=new nt(n,r);s.position.copy(t.positions.pos1.multiplyScalar(.01)),o.position.copy(t.positions.pos2.multiplyScalar(.01));const a=[t.positions.pos1.clone().multiplyScalar(.01),t.positions.pos2.clone().multiplyScalar(.01)],l=new At().setFromPoints(a),c=new nr({color:this.getRiskColor(t.riskLevel),transparent:!0,opacity:.6,linewidth:3}),h=new Ha(l,c),u=new Nn;return u.add(s),u.add(o),u.add(h),u.userData={type:"collision",collision:t},e.add(u),u}getRiskColor(e){switch(e){case"CRITICAL":return 16711680;case"HIGH":return 16737792;case"MEDIUM":return 16755200;case"LOW":return 16776960;default:return 16777215}}generateCollisionReport(){const e=this.getCollisionsByRisk(),t=this.collisions.length;return{total:t,byRisk:{critical:e.CRITICAL.length,high:e.HIGH.length,medium:e.MEDIUM.length,low:e.LOW.length},timeRange:t>0?{first:this.collisions[0].time,last:this.collisions[this.collisions.length-1].time}:null,averageDistance:t>0?this.collisions.reduce((n,r)=>n+r.distance,0)/t:0,details:this.collisions}}setCollisionThreshold(e){this.collisionThreshold=e}setAnalysisWindow(e){this.analysisWindow=e*60*60}setTimeStep(e){this.timeStep=e}}class xM{constructor(e){this.app=e,this.isActive=!1,this.focusedScene=null,this.focusedCamera=null,this.focusedRenderer=null,this.focusedControls=null,this.focusedContainer=null,this.selectedRegion=null,this.satellitesInRegion=[],this.focusedDebris=[],this.gridHelper=null,this.boundingBox=null}enter(e,t){this.isActive||(this.isActive=!0,this.selectedRegion=e,this.satellitesInRegion=t,this.createFocusedContainer(),this.setupFocusedScene(),this.setupFocusedCamera(),this.setupFocusedRenderer(),this.setupFocusedControls(),this.setupFocusedLighting(),this.createBoundingBox(),this.createGridSystem(),this.addSatellitesToFocusedScene(),this.addReturnButton(),this.transitionToFocusedView(),this.animate())}createFocusedContainer(){this.focusedContainer=document.createElement("div"),this.focusedContainer.id="focused-view-container",this.focusedContainer.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            background: radial-gradient(ellipse at center, #0a0a1a 0%, #000005 100%);
            opacity: 0;
            pointer-events: none;
        `,document.body.appendChild(this.focusedContainer)}setupFocusedScene(){this.focusedScene=new Gu,this.focusedScene.fog=new ka(17,.002);const e=new At,t=5e3,n=new Float32Array(t*3);for(let o=0;o<t*3;o+=3)n[o]=(Math.random()-.5)*500,n[o+1]=(Math.random()-.5)*500,n[o+2]=(Math.random()-.5)*500;e.setAttribute("position",new Kt(n,3));const r=new Ll({color:16777215,size:.5,transparent:!0,opacity:.6,sizeAttenuation:!0}),s=new Vu(e,r);this.focusedScene.add(s)}setupFocusedCamera(){const e=window.innerWidth/window.innerHeight;this.focusedCamera=new Qt(60,e,.1,1e3);const t=this.selectedRegion.size,r=Math.max(t.x,t.y,t.z)*2.5;this.focusedCamera.position.set(r,r*.7,r),this.focusedCamera.lookAt(0,0,0)}setupFocusedRenderer(){this.focusedRenderer=new Rl({antialias:!0,alpha:!0}),this.focusedRenderer.setSize(window.innerWidth,window.innerHeight),this.focusedRenderer.setPixelRatio(window.devicePixelRatio),this.focusedRenderer.shadowMap.enabled=!0,this.focusedRenderer.shadowMap.type=Ml,this.focusedRenderer.toneMapping=Sl,this.focusedContainer.appendChild(this.focusedRenderer.domElement)}setupFocusedControls(){this.focusedControls=new Ku(this.focusedCamera,this.focusedRenderer.domElement),this.focusedControls.enableDamping=!0,this.focusedControls.dampingFactor=.05,this.focusedControls.rotateSpeed=.5,this.focusedControls.zoomSpeed=1.2,this.focusedControls.target.set(0,0,0)}setupFocusedLighting(){const e=new xa(16777215,1.5);e.position.set(50,50,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,this.focusedScene.add(e);const t=new ju(4210816,.5);this.focusedScene.add(t);const n=new Xu(33023,8256,.3);this.focusedScene.add(n);const r=new xa(65535,.3);r.position.set(-50,0,0),this.focusedScene.add(r);const s=new xa(16711935,.3);s.position.set(50,0,0),this.focusedScene.add(s)}createBoundingBox(){const e=this.selectedRegion.size,t=new Vn(e.x,e.y,e.z),n=new Wu(t),r=new nr({color:65535,transparent:!0,opacity:.3,linewidth:1});this.boundingBox=new Pl(n,r),this.focusedScene.add(this.boundingBox);const s=new kt(1,16,16),o=new Cn({color:65535,transparent:!0,opacity:.6});[new P(-e.x/2,-e.y/2,-e.z/2),new P(e.x/2,-e.y/2,-e.z/2),new P(-e.x/2,e.y/2,-e.z/2),new P(e.x/2,e.y/2,-e.z/2),new P(-e.x/2,-e.y/2,e.z/2),new P(e.x/2,-e.y/2,e.z/2),new P(-e.x/2,e.y/2,e.z/2),new P(e.x/2,e.y/2,e.z/2)].forEach(l=>{const c=new nt(s,o);c.position.copy(l),this.boundingBox.add(c)})}createGridSystem(){const e=this.selectedRegion.size,t=Math.max(e.x,e.y,e.z),n=new Cv(t*2,20,17476,8738);n.position.y=-e.y/2,this.focusedScene.add(n);const r=new Ba(t*2,t*2,20,20),s=new Cn({color:17476,transparent:!0,opacity:.05,wireframe:!0,side:En}),o=new nt(r,s);o.rotation.x=Math.PI/2,this.focusedScene.add(o);const a=new nt(r,s);a.position.z=-e.z/2,this.focusedScene.add(a)}addSatellitesToFocusedScene(){this.focusedDebris.forEach(e=>{this.focusedScene.remove(e)}),this.focusedDebris=[],this.satellitesInRegion.forEach(e=>{const t=this.createEnhancedSatellite(e),n=e.currentPosition.clone().sub(this.selectedRegion.center);t.position.copy(n),this.focusedScene.add(t),this.focusedDebris.push(t)}),this.createOrbitTrails()}createEnhancedSatellite(e){const t=new Nn;t.userData=e;const n=this.getSatelliteSize(e)*2,r=this.createDetailedGeometry(e,n),s=this.app.debrisManager.getAltitudeColor(e.altitude),o=new tl({color:s,metalness:.8,roughness:.2,emissive:s,emissiveIntensity:.2,clearcoat:1,clearcoatRoughness:.1}),a=new nt(r,o);a.castShadow=!0,a.receiveShadow=!0,t.add(a),e.name.toUpperCase().includes("DEB")||this.addSolarPanels(t,n,s);const l=new kt(n*1.5,16,16),c=new Cn({color:s,transparent:!0,opacity:.2,blending:Un}),h=new nt(l,c);return t.add(h),this.addSatelliteLabel(t,e),t}createDetailedGeometry(e,t){const n=e.name.toUpperCase();return n.includes("DEB")?new Il(t,0):n.includes("ISS")||n.includes("STATION")?new Vn(t*2,t,t*1.5):new Nl(t,2)}addSolarPanels(e,t,n){const r=new Vn(t*3,t*.1,t),s=new tl({color:51,metalness:.9,roughness:.1,emissive:n,emissiveIntensity:.1}),o=new nt(r,s);o.position.x=t*2,e.add(o);const a=new nt(r,s);a.position.x=-t*2,e.add(a)}addSatelliteLabel(e,t){const n=document.createElement("canvas");n.width=256,n.height=64;const r=n.getContext("2d");r.fillStyle="rgba(0, 0, 0, 0.7)",r.fillRect(0,0,256,64),r.fillStyle="#ffffff",r.font="16px Arial",r.fillText(t.name,10,25),r.fillStyle="#00ffff",r.font="12px Arial",r.fillText(`Alt: ${Math.round(t.altitude)} km`,10,45);const s=new Ur(n),o=new ku({map:s,transparent:!0}),a=new mv(o);a.scale.set(10,2.5,1),a.position.y=5,e.add(a)}createOrbitTrails(){this.focusedDebris.forEach(e=>{const t=new At,n=[];for(let o=0;o<=64;o++){const a=o/64*Math.PI*2,l=e.position.length();n.push(Math.cos(a)*l,e.position.y,Math.sin(a)*l)}t.setAttribute("position",new wt(n,3));const r=new nr({color:e.children[0].material.color,transparent:!0,opacity:.2}),s=new Ha(t,r);this.focusedScene.add(s)})}getSatelliteSize(e){const t=e.name.toUpperCase();return t.includes("ISS")||t.includes("TIANGONG")?3:t.includes("DEB")?.8:1.5}addReturnButton(){const e=document.createElement("button");e.innerHTML="← Return to Main View",e.style.cssText=`
            position: fixed;
            top: 30px;
            left: 30px;
            padding: 12px 24px;
            background: rgba(0, 217, 255, 0.2);
            border: 2px solid #00d9ff;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            z-index: 2001;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        `,e.onmouseover=()=>{e.style.background="rgba(0, 217, 255, 0.3)",e.style.transform="translateX(5px)"},e.onmouseout=()=>{e.style.background="rgba(0, 217, 255, 0.2)",e.style.transform="translateX(0)"},e.onclick=()=>this.exit(),this.focusedContainer.appendChild(e)}transitionToFocusedView(){document.querySelector(".toolbar").style.display="none",document.querySelector(".navbar").style.opacity="0.3",document.querySelector(".legend").style.display="none",Hn.to(this.focusedContainer.style,{opacity:1,duration:1.5,ease:"power2.inOut",onComplete:()=>{this.focusedContainer.style.pointerEvents="auto"}});const e=this.focusedCamera.position.clone();this.focusedCamera.position.multiplyScalar(3),Hn.to(this.focusedCamera.position,{x:e.x,y:e.y,z:e.z,duration:2,ease:"power3.out"})}exit(){this.isActive&&Hn.to(this.focusedContainer.style,{opacity:0,duration:1,ease:"power2.inOut",onComplete:()=>{this.focusedContainer.remove(),this.focusedContainer=null,this.focusedScene=null,this.focusedCamera=null,this.focusedRenderer=null,this.focusedControls=null,this.focusedDebris=[],this.isActive=!1,document.querySelector(".toolbar").style.display="",document.querySelector(".navbar").style.opacity="",document.querySelector(".legend").style.display=""}})}animate(){this.isActive&&(requestAnimationFrame(()=>this.animate()),this.focusedControls&&this.focusedControls.update(),this.focusedDebris.forEach((e,t)=>{if(e.rotation.y+=.001*(t%2===0?1:-1),e.rotation.x+=5e-4,this.app.isPlaying&&e.userData){const n=this.app.debrisManager.parser.propagateOrbit(e.userData,this.app.simulationTime);if(n){const s=new P(n.x*this.app.debrisManager.orbitScale,n.y*this.app.debrisManager.orbitScale,n.z*this.app.debrisManager.orbitScale).sub(this.selectedRegion.center);e.position.lerp(s,.1)}}}),this.boundingBox&&(this.boundingBox.rotation.y+=5e-4),this.focusedRenderer&&this.focusedScene&&this.focusedCamera&&this.focusedRenderer.render(this.focusedScene,this.focusedCamera))}onResize(){if(!this.isActive)return;const e=window.innerWidth,t=window.innerHeight;this.focusedCamera.aspect=e/t,this.focusedCamera.updateProjectionMatrix(),this.focusedRenderer.setSize(e,t)}}class MM{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.earth=null,this.debrisManager=null,this.uiController=null,this.spatialSelector=null,this.collisionDetector=null,this.focusedView=null,this.raycaster=new $u,this.mouse=new Ne,this.clock=new Av,this.isPlaying=!0,this.simulationSpeed=1,this.simulationTime=new Date,this.baseSimulationTime=new Date,this.timeOffset=0,this.selectedDebris=null,this.showOrbits=!0,this.showLabels=!0,this.collisionMarkers=[],this.init()}init(){this.setupScene(),this.setupCamera(),this.setupRenderer(),this.setupControls(),this.setupLighting(),this.createEarth(),this.setupDebrisManager(),this.setupSpatialSelector(),this.setupCollisionDetector(),this.setupUI(),this.setupEventListeners(),this.loadDefaultTLE(),this.animate(),window.orbitalApp=this,this.initializeTimeControls(),setTimeout(()=>{document.getElementById("loading-screen").classList.add("hidden")},2e3)}setupScene(){this.scene=new Gu;const e=new At,t=1e4,n=new Float32Array(t*3),r=new Float32Array(t*3);for(let a=0;a<t*3;a+=3){const l=2*Math.PI*Math.random(),c=Math.acos(2*Math.random()-1),h=800+Math.random()*200;n[a]=h*Math.sin(c)*Math.cos(l),n[a+1]=h*Math.sin(c)*Math.sin(l),n[a+2]=h*Math.cos(c);const u=.5+Math.random()*.5;r[a]=u,r[a+1]=u,r[a+2]=u}e.setAttribute("position",new Kt(n,3)),e.setAttribute("color",new Kt(r,3));const s=new Ll({size:.5,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!1}),o=new Vu(e,s);this.scene.add(o),this.scene.fog=new ka(0,8e-5)}setupCamera(){const e=window.innerWidth/window.innerHeight;this.camera=new Qt(45,e,.1,1e4),this.camera.position.set(0,100,200),this.camera.lookAt(0,0,0)}setupRenderer(){this.renderer=new Rl({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ml,this.renderer.toneMapping=Sl,this.renderer.toneMappingExposure=1.2,document.getElementById("canvas-container").appendChild(this.renderer.domElement)}setupControls(){this.controls=new Ku(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=50,this.controls.maxDistance=500,this.controls.rotateSpeed=.5,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.8}setupLighting(){const e=new xa(16777215,2);e.position.set(100,50,100),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=500,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,this.scene.add(e);const t=new ju(4210784,.5);this.scene.add(t);const n=new Xu(33023,32,.3);this.scene.add(n);const r=new Yu(4227327,.5,100);r.position.set(0,0,0),this.scene.add(r)}createEarth(){this.earth=new dM(this.scene)}setupDebrisManager(){this.debrisManager=new mM(this.scene,this)}setupSpatialSelector(){this.spatialSelector=new _M(this.scene,this.camera,this.renderer,this)}setupCollisionDetector(){this.collisionDetector=new vM,this.focusedView=new xM(this)}setupUI(){this.uiController=new gM(this)}initializeTimeControls(){const e=new Date,t=new Date(e.getTime()-e.getTimezoneOffset()*6e4);document.getElementById("simulation-date").value=t.toISOString().slice(0,16),document.getElementById("time-offset-value").textContent="+0 hours",document.querySelector('.time-preset-btn[data-offset="0"]').classList.add("active")}setupEventListeners(){window.addEventListener("resize",()=>this.onResize()),this.renderer.domElement.addEventListener("click",t=>this.onMouseClick(t)),this.renderer.domElement.addEventListener("mousemove",t=>this.onMouseMove(t)),document.getElementById("tle-upload").addEventListener("change",t=>this.handleFileUpload(t)),document.getElementById("reset-view").addEventListener("click",()=>this.resetView()),document.getElementById("toggle-orbits").addEventListener("click",()=>this.toggleOrbits()),document.getElementById("toggle-labels").addEventListener("click",()=>this.toggleLabels()),document.getElementById("toggle-fullscreen").addEventListener("click",()=>this.toggleFullscreen()),document.getElementById("play-pause").addEventListener("click",()=>this.togglePlayPause()),document.getElementById("speed-slider").addEventListener("input",t=>this.updateSpeed(t)),document.getElementById("panel-close").addEventListener("click",()=>this.uiController.hideInfoPanel()),document.getElementById("panel-minimize").addEventListener("click",()=>this.toggleInfoPanel()),document.getElementById("spatial-select").addEventListener("click",()=>this.enableSpatialSelection()),document.getElementById("clear-selection").addEventListener("click",()=>this.clearSpatialSelection()),document.getElementById("analyze-collisions").addEventListener("click",()=>this.analyzeCollisions()),document.getElementById("time-slider").addEventListener("input",t=>this.updateTimeOffset(t)),document.getElementById("simulation-date").addEventListener("change",t=>this.updateSimulationDate(t)),document.getElementById("time-panel-toggle").addEventListener("click",()=>this.toggleTimePanel()),document.getElementById("time-control-panel").addEventListener("click",t=>{t.target.closest(".time-control-panel").classList.contains("minimized")&&!t.target.closest(".panel-minimize")&&this.toggleTimePanel()}),document.getElementById("info-panel").addEventListener("click",t=>{t.target.closest(".info-panel").classList.contains("minimized")&&!t.target.closest(".panel-minimize")&&this.toggleInfoPanel()}),document.getElementById("analysis-panel").addEventListener("click",t=>{t.target.closest(".analysis-panel").classList.contains("minimized")&&!t.target.closest(".panel-minimize")&&this.toggleAnalysisPanel()}),document.getElementById("legend-panel").addEventListener("click",t=>{t.target.closest(".legend").classList.contains("minimized")&&!t.target.closest(".panel-minimize")&&this.toggleLegendPanel()}),document.querySelectorAll(".time-preset-btn").forEach(t=>{t.addEventListener("click",n=>{const r=parseInt(n.target.getAttribute("data-offset"));this.setTimeOffset(r)})});const e=document.getElementById("search-input");e.addEventListener("input",t=>this.handleSearch(t.target.value)),e.addEventListener("focus",()=>{e.value.length>0&&document.getElementById("search-results").classList.add("active")}),e.addEventListener("blur",()=>{setTimeout(()=>{document.getElementById("search-results").classList.remove("active")},200)})}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.focusedView&&this.focusedView.isActive&&this.focusedView.onResize()}onMouseClick(e){if(this.spatialSelector&&this.spatialSelector.isSelecting)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.params.Points.threshold=2;const t=[...this.debrisManager.getDebrisObjects(),this.debrisManager.debrisGroup],n=this.raycaster.intersectObjects(t,!0);if(n.length>0){let r=n[0].object;for(;r.parent&&!r.userData.name;)r=r.parent;r.userData&&r.userData.name&&this.selectDebris(r)}}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.intersectObjects(this.debrisManager.getDebrisObjects()).length>0?document.body.style.cursor="pointer":document.body.style.cursor="grab"}selectDebris(e){this.selectedDebris&&this.debrisManager.deselectDebris(this.selectedDebris),this.selectedDebris=e,this.debrisManager.selectDebris(e);const t=e.position.clone(),n=t.length(),r=Math.max(15,Math.min(50,n*.3)),s=t.clone().normalize(),o=new P(s.x*r,s.y*r+5,s.z*r),a=t.clone().add(o);Hn.to(this.camera.position,{duration:2,x:a.x,y:a.y,z:a.z,ease:"power3.inOut"}),Hn.to(this.controls.target,{duration:2,x:t.x,y:t.y,z:t.z,ease:"power3.inOut"}),this.uiController.showDebrisInfo(e.userData)}resetView(){Hn.to(this.camera.position,{duration:1.5,x:0,y:100,z:200,ease:"power2.inOut"}),Hn.to(this.controls.target,{duration:1.5,x:0,y:0,z:0,ease:"power2.inOut"}),this.selectedDebris&&(this.debrisManager.deselectDebris(this.selectedDebris),this.selectedDebris=null,this.uiController.hideInfoPanel())}toggleOrbits(){this.showOrbits=!this.showOrbits,this.debrisManager.toggleOrbits(this.showOrbits),document.getElementById("toggle-orbits").classList.toggle("active")}toggleLabels(){this.showLabels=!this.showLabels,this.debrisManager.toggleLabels(this.showLabels),document.getElementById("toggle-labels").classList.toggle("active")}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}togglePlayPause(){this.isPlaying=!this.isPlaying;const e=document.querySelector(".play-icon"),t=document.querySelector(".pause-icon");this.isPlaying?(e.classList.add("hidden"),t.classList.remove("hidden")):(e.classList.remove("hidden"),t.classList.add("hidden"))}updateSpeed(e){this.simulationSpeed=parseFloat(e.target.value),document.getElementById("speed-value").textContent=`${this.simulationSpeed}x`}handleSearch(e){const t=this.debrisManager.searchDebris(e),n=document.getElementById("search-results");if(e.length===0){n.classList.remove("active"),n.innerHTML="";return}if(n.classList.add("active"),n.innerHTML="",t.length===0){n.innerHTML='<div class="search-result-item">No results found</div>';return}t.slice(0,10).forEach(r=>{const s=document.createElement("div");s.className="search-result-item",s.innerHTML=`
                <div class="search-result-name">${r.userData.name}</div>
                <div class="search-result-id">NORAD ID: ${r.userData.noradId}</div>
            `,s.addEventListener("click",()=>{this.selectDebris(r),n.classList.remove("active"),document.getElementById("search-input").value=""}),n.appendChild(s)})}handleFileUpload(e){const t=e.target.files[0];if(t){const n=new FileReader;n.onload=r=>{const s=r.target.result;this.loadTLEData(s)},n.readAsText(t)}}loadTLEData(e){const n=new ef().parse(e);this.debrisManager.clearDebris(),this.debrisManager.addDebris(n),this.uiController.updateDebrisCount(n.length)}async loadDefaultTLE(){try{const t=await(await fetch("/sample-tle.txt")).text();this.loadTLEData(t)}catch{console.warn("Failed to load sample TLE file, using fallback data"),this.loadTLEData(`ISS (ZARYA)
1 25544U 98067A   24001.50000000  .00016717  00000-0  10270-3 0  9999
2 25544  51.6442 208.1234 0001234  72.1234 288.0123 15.54123456789012
COSMOS 2251 DEB
1 34427U 93036SX  24001.50000000  .00000123  00000-0  12345-4 0  9999
2 34427  74.0123 123.4567 0012345  90.1234 270.5678 14.34567890123456
STARLINK-1234
1 45678U 20012A   24001.50000000  .00001234  00000-0  23456-4 0  9999
2 45678  53.0123 234.5678 0001234 123.4567 236.7890 15.12345678901234
FENGYUN 1C DEB
1 29834U 99025DX  24001.50000000  .00000234  00000-0  34567-4 0  9999
2 29834  98.7654 345.6789 0023456 234.5678 125.4321 14.23456789012345
IRIDIUM 33 DEB
1 27432U 09002B   24001.50000000  .00000345  00000-0  45678-4 0  9999
2 27432  86.3987  45.6789 0012345 345.6789  14.3210 14.34567890123456`)}}enableSpatialSelection(){this.spatialSelector.enableSelection(),document.getElementById("spatial-select").classList.add("active")}clearSpatialSelection(){this.spatialSelector.clearSelection(),this.hideAnalysisPanel(),this.clearCollisionMarkers(),document.getElementById("spatial-select").classList.remove("active")}onSpatialSelection(e){console.log("Spatial selection created:",e),this.showAnalysisPanel(),this.updateSpatialAnalysis(),document.getElementById("spatial-select").classList.remove("active")}onSpatialSelectionCleared(){this.hideAnalysisPanel(),this.clearCollisionMarkers()}updateTimeOffset(e){this.timeOffset=parseInt(e.target.value),this.updateSimulationTime(),document.getElementById("time-offset-value").textContent=`${this.timeOffset>=0?"+":""}${this.timeOffset} hours`,document.querySelectorAll(".time-preset-btn").forEach(t=>{t.classList.remove("active"),parseInt(t.getAttribute("data-offset"))===this.timeOffset&&t.classList.add("active")}),this.updateSpatialAnalysis()}setTimeOffset(e){this.timeOffset=e,document.getElementById("time-slider").value=e,document.getElementById("time-offset-value").textContent=`${e>=0?"+":""}${e} hours`,document.querySelectorAll(".time-preset-btn").forEach(t=>{t.classList.remove("active"),parseInt(t.getAttribute("data-offset"))===e&&t.classList.add("active")}),this.updateSimulationTime(),this.updateSpatialAnalysis()}updateSimulationDate(e){this.baseSimulationTime=new Date(e.target.value),this.updateSimulationTime(),this.updateSpatialAnalysis()}updateSimulationTime(){this.simulationTime=new Date(this.baseSimulationTime.getTime()+this.timeOffset*60*60*1e3)}toggleTimePanel(){const e=document.getElementById("time-control-panel"),t=document.getElementById("time-panel-toggle");e.classList.toggle("minimized"),t.textContent=e.classList.contains("minimized")?"":"−"}toggleInfoPanel(){const e=document.getElementById("info-panel"),t=document.getElementById("panel-minimize");e.classList.toggle("minimized"),t.textContent=e.classList.contains("minimized")?"":"−"}showAnalysisPanel(){document.getElementById("analysis-panel").classList.add("active")}hideAnalysisPanel(){document.getElementById("analysis-panel").classList.remove("active")}toggleAnalysisPanel(){const e=document.getElementById("analysis-panel"),t=document.getElementById("analysis-panel-minimize");e.classList.toggle("minimized"),t.textContent=e.classList.contains("minimized")?"":"−"}toggleLegendPanel(){const e=document.getElementById("legend-panel"),t=document.getElementById("legend-minimize");e.classList.toggle("minimized"),t.textContent=e.classList.contains("minimized")?"":"−"}updateSpatialAnalysis(){if(!this.spatialSelector.selectionBounds)return;const e=this.spatialSelector.getSelectionInfo(),t=document.getElementById("region-info");e&&(t.innerHTML=`
                <p><strong>Center:</strong> (${e.center.x.toFixed(1)}, ${e.center.y.toFixed(1)}, ${e.center.z.toFixed(1)})</p>
                <p><strong>Dimensions:</strong> ${e.dimensions.width} × ${e.dimensions.height} × ${e.dimensions.depth}</p>
                <p><strong>Volume:</strong> ${e.volume} km³</p>
                <button id="enter-focused-view" onclick="window.orbitalApp.enterFocusedView()" style="
                    margin-top: 10px;
                    width: 100%;
                    padding: 8px;
                    background: linear-gradient(45deg, #00d9ff, #0080ff);
                    border: none;
                    border-radius: 6px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                ">Enter Focused View</button>
            `);const n=this.spatialSelector.getSelectedSatellites(this.debrisManager,this.simulationTime),r=document.getElementById("satellites-in-region");n.length===0?r.innerHTML='<p class="no-data">No satellites in selected region at current time</p>':r.innerHTML=n.map(s=>`
                <div class="satellite-item" onclick="window.orbitalApp.selectSatelliteByName('${s.name}')">
                    <div class="satellite-name">${s.name}</div>
                    <div class="satellite-details">
                        NORAD ID: ${s.noradId} | Alt: ${Math.round(s.altitude)} km
                    </div>
                </div>
            `).join("")}selectSatelliteByName(e){const t=this.debrisManager.debrisObjects.find(n=>n.userData.name===e);t&&this.selectDebris(t)}analyzeCollisions(){this.showAnalysisPanel(),this.spatialSelector.selectionBounds&&this.spatialSelector.animateToRegion()}enterFocusedView(){if(!this.spatialSelector.selectionBounds){alert("Please select a spatial region first");return}const e=this.spatialSelector.getSelectedSatellites(this.debrisManager,this.simulationTime);if(e.length===0){alert("No satellites in selected region");return}this.focusedView.enter(this.spatialSelector.selectionBounds,e)}runCollisionAnalysis(){const e=parseFloat(document.getElementById("collision-threshold").value),t=parseInt(document.getElementById("analysis-window").value);this.collisionDetector.setCollisionThreshold(e),this.collisionDetector.setAnalysisWindow(t);const n=document.getElementById("run-collision-analysis");n.disabled=!0,n.textContent="Analyzing...";const r=this.spatialSelector.selectionBounds?this.spatialSelector.getSelectedSatellites(this.debrisManager,this.simulationTime):this.debrisManager.debrisData;setTimeout(()=>{const s=this.collisionDetector.analyzeCollisions(r,this.simulationTime,this.spatialSelector.selectionBounds);this.displayCollisionResults(s),this.visualizeCollisions(s),n.disabled=!1,n.textContent="Run Analysis"},100)}displayCollisionResults(e){const t=document.getElementById("collision-results");if(e.length===0){t.innerHTML='<p class="no-data">No potential collisions detected</p>';return}const n=this.collisionDetector.generateCollisionReport();t.innerHTML=`
            <div class="collision-summary">
                <h5>Summary: ${n.total} potential collision${n.total>1?"s":""}</h5>
                <p>Critical: ${n.byRisk.critical} | High: ${n.byRisk.high} | 
                   Medium: ${n.byRisk.medium} | Low: ${n.byRisk.low}</p>
            </div>
            ${e.slice(0,10).map(r=>`
                <div class="collision-item ${r.riskLevel.toLowerCase()}">
                    <div class="collision-header">
                        <strong>${r.satellite1.name} ⚠️ ${r.satellite2.name}</strong>
                        <span class="collision-risk" style="background: ${this.getRiskColor(r.riskLevel)}">${r.riskLevel}</span>
                    </div>
                    <div class="collision-details">
                        Time: ${r.time.toISOString().replace("T"," ").slice(0,16)} UTC<br>
                        Distance: ${r.distance.toFixed(3)} km<br>
                        Relative Velocity: ${r.relativeVelocity.toFixed(2)} km/s
                    </div>
                </div>
            `).join("")}
            ${e.length>10?`<p class="no-data">... and ${e.length-10} more</p>`:""}
        `}getRiskColor(e){return{CRITICAL:"#ff0000",HIGH:"#ff6600",MEDIUM:"#ffaa00",LOW:"#ffff00"}[e]||"#ffffff"}visualizeCollisions(e){this.clearCollisionMarkers(),e.slice(0,20).forEach(t=>{const n=this.collisionDetector.createCollisionVisualization(this.scene,t);this.collisionMarkers.push(n)})}clearCollisionMarkers(){this.collisionMarkers.forEach(e=>{this.scene.remove(e)}),this.collisionMarkers=[]}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta();this.isPlaying&&(this.baseSimulationTime=new Date(this.baseSimulationTime.getTime()+e*1e3*this.simulationSpeed),this.updateSimulationTime(),this.uiController.updateTime(this.simulationTime),this.debrisManager.update(this.simulationTime),this.spatialSelector.selectionBounds&&this.updateSpatialAnalysis()),this.earth.update(e*this.simulationSpeed),this.controls.update(),this.renderer.render(this.scene,this.camera)}}document.addEventListener("DOMContentLoaded",()=>{new MM});
//# sourceMappingURL=index-BJqvqjsJ.js.map
