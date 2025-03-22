(function(J,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("react"),require("stateshot"),require("use-image"),require("react-konva"),require("konva"),require("@emotion/styled"),require("@emotion/react"),require("react-dom"),require("react-konva-utils")):typeof define=="function"&&define.amd?define(["exports","react","stateshot","use-image","react-konva","konva","@emotion/styled","@emotion/react","react-dom","react-konva-utils"],s):(J=typeof globalThis<"u"?globalThis:J||self,s(J["react-mobile-image-editor"]={},J.react,J.stateshot,J.useImage,J.reactKonva,J.Konva,J.styled,J.react,J["react-dom"],J.reactKonvaUtils))})(this,function(J,s,ft,ht,X,gt,K,Le,pt,vt){"use strict";function xt(t){const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const a in t)if(a!=="default"){const n=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(l,a,n.get?n:{enumerable:!0,get:()=>t[a]})}}return l.default=t,Object.freeze(l)}const H=xt(s);var Re={},wt={get exports(){return Re},set exports(t){Re=t}},ke={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function mt(){if(Ne)return ke;Ne=1;var t=s,l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function R(S,v,D){var m,u={},f=null,A=null;D!==void 0&&(f=""+D),v.key!==void 0&&(f=""+v.key),v.ref!==void 0&&(A=v.ref);for(m in v)n.call(v,m)&&!E.hasOwnProperty(m)&&(u[m]=v[m]);if(S&&S.defaultProps)for(m in v=S.defaultProps,v)u[m]===void 0&&(u[m]=v[m]);return{$$typeof:l,type:S,key:f,ref:A,props:u,_owner:o.current}}return ke.Fragment=a,ke.jsx=R,ke.jsxs=R,ke}var Pe={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function Ct(){return Ue||(Ue=1,process.env.NODE_ENV!=="production"&&function(){var t=s,l=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),S=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),C=Symbol.iterator,F="@@iterator";function $(e){if(e===null||typeof e!="object")return null;var r=C&&e[C]||e[F];return typeof r=="function"?r:null}var b=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function P(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),w=1;w<r;w++)i[w-1]=arguments[w];W("error",e,i)}}function W(e,r,i){{var w=b.ReactDebugCurrentFrame,O=w.getStackAddendum();O!==""&&(r+="%s",i=i.concat([O]));var I=i.map(function(_){return String(_)});I.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,I)}}var k=!1,x=!1,Z=!1,ae=!1,ve=!1,xe;xe=Symbol.for("react.module.reference");function de(e){return!!(typeof e=="string"||typeof e=="function"||e===n||e===E||ve||e===o||e===D||e===m||ae||e===A||k||x||Z||typeof e=="object"&&e!==null&&(e.$$typeof===f||e.$$typeof===u||e.$$typeof===R||e.$$typeof===S||e.$$typeof===v||e.$$typeof===xe||e.getModuleId!==void 0))}function ne(e,r,i){var w=e.displayName;if(w)return w;var O=r.displayName||r.name||"";return O!==""?i+"("+O+")":i}function fe(e){return e.displayName||"Context"}function G(e){if(e==null)return null;if(typeof e.tag=="number"&&P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case n:return"Fragment";case a:return"Portal";case E:return"Profiler";case o:return"StrictMode";case D:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case S:var r=e;return fe(r)+".Consumer";case R:var i=e;return fe(i._context)+".Provider";case v:return ne(e,e.render,"ForwardRef");case u:var w=e.displayName||null;return w!==null?w:G(e.type)||"Memo";case f:{var O=e,I=O._payload,_=O._init;try{return G(_(I))}catch{return null}}}return null}var ie=Object.assign,Y=0,we,h,g,z,y,T,re;function he(){}he.__reactDisabledLog=!0;function oe(){{if(Y===0){we=console.log,h=console.info,g=console.warn,z=console.error,y=console.group,T=console.groupCollapsed,re=console.groupEnd;var e={configurable:!0,enumerable:!0,value:he,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function le(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:ie({},e,{value:we}),info:ie({},e,{value:h}),warn:ie({},e,{value:g}),error:ie({},e,{value:z}),group:ie({},e,{value:y}),groupCollapsed:ie({},e,{value:T}),groupEnd:ie({},e,{value:re})})}Y<0&&P("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var U=b.ReactCurrentDispatcher,ge;function pe(e,r,i){{if(ge===void 0)try{throw Error()}catch(O){var w=O.stack.trim().match(/\n( *(at )?)/);ge=w&&w[1]||""}return`
`+ge+e}}var ce=!1,ue;{var me=typeof WeakMap=="function"?WeakMap:Map;ue=new me}function ye(e,r){if(!e||ce)return"";{var i=ue.get(e);if(i!==void 0)return i}var w;ce=!0;var O=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var I;I=U.current,U.current=null,oe();try{if(r){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(te){w=te}Reflect.construct(e,[],_)}else{try{_.call()}catch(te){w=te}e.call(_.prototype)}}else{try{throw Error()}catch(te){w=te}e()}}catch(te){if(te&&w&&typeof te.stack=="string"){for(var L=te.stack.split(`
`),Q=w.stack.split(`
`),B=L.length-1,V=Q.length-1;B>=1&&V>=0&&L[B]!==Q[V];)V--;for(;B>=1&&V>=0;B--,V--)if(L[B]!==Q[V]){if(B!==1||V!==1)do if(B--,V--,V<0||L[B]!==Q[V]){var se=`
`+L[B].replace(" at new "," at ");return e.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",e.displayName)),typeof e=="function"&&ue.set(e,se),se}while(B>=1&&V>=0);break}}}finally{ce=!1,U.current=I,le(),Error.prepareStackTrace=O}var Se=e?e.displayName||e.name:"",Ce=Se?pe(Se):"";return typeof e=="function"&&ue.set(e,Ce),Ce}function $e(e,r,i){return ye(e,!1)}function d(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function c(e,r,i){if(e==null)return"";if(typeof e=="function")return ye(e,d(e));if(typeof e=="string")return pe(e);switch(e){case D:return pe("Suspense");case m:return pe("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return $e(e.render);case u:return c(e.type,r,i);case f:{var w=e,O=w._payload,I=w._init;try{return c(I(O),r,i)}catch{}}}return""}var M=Object.prototype.hasOwnProperty,j={},q=b.ReactDebugCurrentFrame;function N(e){if(e){var r=e._owner,i=c(e.type,e._source,r?r.type:null);q.setExtraStackFrame(i)}else q.setExtraStackFrame(null)}function Me(e,r,i,w,O){{var I=Function.call.bind(M);for(var _ in e)if(I(e,_)){var L=void 0;try{if(typeof e[_]!="function"){var Q=Error((w||"React class")+": "+i+" type `"+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[_]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Q.name="Invariant Violation",Q}L=e[_](r,_,w,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(B){L=B}L&&!(L instanceof Error)&&(N(O),P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",w||"React class",i,_,typeof L),N(null)),L instanceof Error&&!(L.message in j)&&(j[L.message]=!0,N(O),P("Failed %s type: %s",i,L.message),N(null))}}}var Oe=Array.isArray;function Te(e){return Oe(e)}function We(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function Ie(e){try{return tt(e),!1}catch{return!0}}function tt(e){return""+e}function nt(e){if(Ie(e))return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",We(e)),tt(e)}var De=b.ReactCurrentOwner,en={key:!0,ref:!0,__self:!0,__source:!0},rt,ot,Ye;Ye={};function tn(e){if(M.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function nn(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rn(e,r){if(typeof e.ref=="string"&&De.current&&r&&De.current.stateNode!==r){var i=G(De.current.type);Ye[i]||(P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',G(De.current.type),e.ref),Ye[i]=!0)}}function on(e,r){{var i=function(){rt||(rt=!0,P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function sn(e,r){{var i=function(){ot||(ot=!0,P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var an=function(e,r,i,w,O,I,_){var L={$$typeof:l,type:e,key:r,ref:i,props:_,_owner:I};return L._store={},Object.defineProperty(L._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(L,"_self",{configurable:!1,enumerable:!1,writable:!1,value:w}),Object.defineProperty(L,"_source",{configurable:!1,enumerable:!1,writable:!1,value:O}),Object.freeze&&(Object.freeze(L.props),Object.freeze(L)),L};function ln(e,r,i,w,O){{var I,_={},L=null,Q=null;i!==void 0&&(nt(i),L=""+i),nn(r)&&(nt(r.key),L=""+r.key),tn(r)&&(Q=r.ref,rn(r,O));for(I in r)M.call(r,I)&&!en.hasOwnProperty(I)&&(_[I]=r[I]);if(e&&e.defaultProps){var B=e.defaultProps;for(I in B)_[I]===void 0&&(_[I]=B[I])}if(L||Q){var V=typeof e=="function"?e.displayName||e.name||"Unknown":e;L&&on(_,V),Q&&sn(_,V)}return an(e,L,Q,O,w,De.current,_)}}var ze=b.ReactCurrentOwner,it=b.ReactDebugCurrentFrame;function Ee(e){if(e){var r=e._owner,i=c(e.type,e._source,r?r.type:null);it.setExtraStackFrame(i)}else it.setExtraStackFrame(null)}var Be;Be=!1;function Xe(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function st(){{if(ze.current){var e=G(ze.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function cn(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),i=e.lineNumber;return`

Check your code at `+r+":"+i+"."}return""}}var at={};function un(e){{var r=st();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function lt(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=un(r);if(at[i])return;at[i]=!0;var w="";e&&e._owner&&e._owner!==ze.current&&(w=" It was passed a child from "+G(e._owner.type)+"."),Ee(e),P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,w),Ee(null)}}function ct(e,r){{if(typeof e!="object")return;if(Te(e))for(var i=0;i<e.length;i++){var w=e[i];Xe(w)&&lt(w,r)}else if(Xe(e))e._store&&(e._store.validated=!0);else if(e){var O=$(e);if(typeof O=="function"&&O!==e.entries)for(var I=O.call(e),_;!(_=I.next()).done;)Xe(_.value)&&lt(_.value,r)}}}function dn(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===v||r.$$typeof===u))i=r.propTypes;else return;if(i){var w=G(r);Me(i,e.props,"prop",w,e)}else if(r.PropTypes!==void 0&&!Be){Be=!0;var O=G(r);P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",O||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function fn(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var w=r[i];if(w!=="children"&&w!=="key"){Ee(e),P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",w),Ee(null);break}}e.ref!==null&&(Ee(e),P("Invalid attribute `ref` supplied to `React.Fragment`."),Ee(null))}}var ut={};function dt(e,r,i,w,O,I){{var _=de(e);if(!_){var L="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(L+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Q=cn(O);Q?L+=Q:L+=st();var B;e===null?B="null":Te(e)?B="array":e!==void 0&&e.$$typeof===l?(B="<"+(G(e.type)||"Unknown")+" />",L=" Did you accidentally export a JSX literal instead of a component?"):B=typeof e,P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",B,L)}var V=ln(e,r,i,O,I);if(V==null)return V;if(_){var se=r.children;if(se!==void 0)if(w)if(Te(se)){for(var Se=0;Se<se.length;Se++)ct(se[Se],e);Object.freeze&&Object.freeze(se)}else P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ct(se,e)}if(M.call(r,"key")){var Ce=G(e),te=Object.keys(r).filter(function(wn){return wn!=="key"}),Ve=te.length>0?"{key: someKey, "+te.join(": ..., ")+": ...}":"{key: someKey}";if(!ut[Ce+Ve]){var xn=te.length>0?"{"+te.join(": ..., ")+": ...}":"{}";P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ve,Ce,xn,Ce),ut[Ce+Ve]=!0}}return e===n?fn(V):dn(V),V}}function hn(e,r,i){return dt(e,r,i,!0)}function gn(e,r,i){return dt(e,r,i,!1)}var pn=gn,vn=hn;Pe.Fragment=n,Pe.jsx=pn,Pe.jsxs=vn}()),Pe}(function(t){process.env.NODE_ENV==="production"?t.exports=mt():t.exports=Ct()})(wt);const bt=Re.Fragment,p=Re.jsx,ee=Re.jsxs,He=s.createContext({width:0,height:0,pencilConfig:{stroke:"#df4b26",strokeWidth:5,lineCap:"round",lineJoin:"round"},blurConfig:{stroke:"#fff",strokeWidth:40,lineCap:"round",lineJoin:"round"},textConfig:{fill:"#df4b26",fontSize:30,width:300},editorColors:["#FF2A1A","#000000","#999999","#FF9416","#F7673D","#F9CA5A","#19A049","#24A8D0"],activeTool:null,changeColor:()=>{},handleSelectTool:()=>{}}),be=()=>s.useContext(He),yt=({width:t=0,height:l=0,editorColors:a=["#FF2A1A","#000000","#999999","#FF9416","#F7673D","#F9CA5A","#19A049","#24A8D0"],blurConfig:n={stroke:"#eaeaeaeb",strokeWidth:30,lineCap:"round",lineJoin:"round"},children:o})=>{const[E,R]=s.useState({stroke:a[0],strokeWidth:5,lineCap:"round",lineJoin:"round"}),[S,v]=s.useState({fontSize:30,fill:a[0],wrap:"word",width:t*.9}),[D,m]=s.useState(null),u=A=>{m(C=>C===A?null:A)},f=A=>{R(C=>({...Object.assign(C,{stroke:A})})),v(C=>({...Object.assign(C,{fill:A})}))};return p(He.Provider,{value:{width:t,height:l,pencilConfig:E,blurConfig:n,textConfig:S,editorColors:a,activeTool:D,changeColor:f,handleSelectTool:u},children:o})},Ae=(t,l,a,n)=>{const o=t/l,E=a/n;return o<E?[o*n,n]:[a,1/o*a]},Ze=(t,l,a)=>{const n=a*(Math.PI/180),o=t*Math.cos(n)-l*Math.sin(n),E=t*Math.sin(n)+l*Math.cos(n);return[o,E]},Ge=(t,l)=>Math.sqrt(Math.pow(l.x-t.x,2)+Math.pow(l.y-t.y,2)),Tt=(t,l)=>({x:(t.x+l.x)/2,y:(t.y+l.y)/2}),qe=(t,l,a)=>{switch(a/90%4+1){case 1:return[t,l];case 2:return[l,-t];case 3:return[-t,-l];case 4:return[-l,t];default:return[t,l]}},Et=(t,l,a)=>{const n=document.createElement("canvas");n.width=l,n.height=a;const o=n.getContext("2d");return o.drawImage(t,0,0,l,a),o.getImageData(0,0,l,a)},Je=s.createContext({image:null,group:{width:0,height:0,x:0,y:0,rotation:0},clipRect:{width:0,height:0,x:0,y:0},texts:[],lines:[],blurs:[],setLines:()=>{},setTexts:()=>{},setImage:()=>{},setGroup:()=>{},setBlurs:()=>{},redo:()=>{},undo:()=>{}}),je=()=>s.useContext(Je),St=({children:t,image:l})=>{const{width:a,height:n}=be(),[o,E]=s.useState({group:{width:0,height:0,x:0,y:0,rotation:0},clipRect:{width:0,height:0,x:0,y:0},lines:[],texts:[],blurs:[]}),[R,S]=s.useState(!1),v=s.useRef(o);v.current=o;const[D,m]=ht(l),u=k=>{E(k),v.current=k},f=s.useRef(),A=k=>{var x;(x=f.current)==null||x.pushSync({...v.current,lines:k(v.current.lines)})},C=k=>{var x;(x=f.current)==null||x.pushSync({...v.current,blurs:k(v.current.blurs)})},F=k=>{var x;(x=f.current)==null||x.pushSync({...v.current,texts:k(v.current.texts)})},$=(k,x)=>{var Z;(Z=f.current)==null||Z.pushSync({...v.current,clipRect:Object.assign({},v.current.clipRect,k),group:Object.assign({},v.current.group,{rotation:x})})},b=k=>{var x;(x=f.current)==null||x.pushSync({...v.current,group:Object.assign({},v.current.group,k)})},P=()=>{var k,x;(k=f.current)!=null&&k.hasRedo&&((x=f.current)==null||x.redo().get())},W=()=>{var k,x;(k=f.current)!=null&&k.hasUndo&&((x=f.current)==null||x.undo().get())};return s.useLayoutEffect(()=>{if(m==="loaded"&&D){const[k,x]=Ae(D.width,D.height,a,n);f.current=new ft.History({initialState:{...v.current,image:D,group:{width:k,height:x,x:0,y:0,rotation:0},clipRect:{width:k,height:x,x:0,y:0}},delay:0,onChange:u}),E(Z=>({...Z,group:{width:k,height:x,x:0,y:0,rotation:0},clipRect:{width:k,height:x,x:0,y:0}})),S(!0)}},[m]),p(Je.Provider,{value:{...o,image:D,setGroup:b,setLines:A,setBlurs:C,setTexts:F,setImage:$,redo:P,undo:W},children:R&&t})},Lt=[{icon:p(t=>H.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},H.createElement("path",{d:"M2.6291474,37.1542473 C2.9932144,37.5181419 3.53021322,37.645505 4.0308053,37.4817524 L17.4131966,33.8993297 C17.4131966,33.8993297 17.5042133,33.8629403 17.5315183,33.8538429 C17.7681619,33.7537718 17.9501954,33.5718245 17.9501954,33.5718245 L34.7520665,16.6052398 C34.7611681,16.5870451 33.1513228,18.3974222 35.1161335,16.186761 C35.8169624,15.3589008 37.3005354,13.3301883 37.3370253,10.5281998 C37.3460438,8.71782408 36.6088081,6.66181954 34.7520665,4.81505444 C32.9044265,2.95009459 30.847448,2.213208 29.0362148,2.22222222 C25.4137483,2.26779219 23.0746179,4.73317815 22.9562961,4.81505444 L6.14532327,21.7816392 C6.14532327,21.7816392 5.94508643,21.999976 5.86317135,22.200118 C5.84496798,22.2456049 5.81766296,22.3183838 5.81766296,22.3183838 L2.29238543,35.7623504 C2.12855527,36.2536081 2.25597869,36.7903527 2.6291474,37.1542473 Z M6.13205996,32.2561442 C6.13205996,32.2561442 6.7113846,32.12009 7.10863582,32.5191822 C7.4810588,32.8910636 7.4810588,33.4806316 7.4810588,33.4806316 L5.54445923,34.1881132 L6.13205996,32.2561442 Z M8.81716912,26.1591263 L12.1091434,27.6061887 L13.5568913,30.9026087 L9.65217723,32.2055653 C9.51401044,31.8092744 9.27972757,31.3169129 8.88324892,30.9146175 C8.45072674,30.4762958 7.92809578,30.260137 7.48956636,30.1460533 L8.81716912,26.1591263 Z M31.825925,8.12414251 C33.2973685,9.58179838 33.3085455,11.9563025 31.8508896,13.4277459 C31.8252594,13.4536186 31.7992536,13.4791166 31.7728806,13.5042317 L16.9707393,27.6003858 L15.361832,24.3334134 L11.7499499,22.3126037 L26.3187959,8.10275617 C27.8529745,6.60638208 30.3034146,6.6158981 31.825925,8.12414251 Z",id:"Shape",fillRule:"nonzero"})),{}),name:"Pencil"},{icon:p(t=>H.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 41 40",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},H.createElement("path",{d:"M14.0136054,25.4618474 L11.4739229,31.2851406 C10.6273578,33.0968408 9.53893333,34.2614878 8.20861678,34.7791165 C7.24111383,35.2967451 5.24566893,35.5555556 2.22222222,35.5555556 C2.58503583,35.0379269 3.1897161,33.8732799 4.03628118,32.0615797 C4.64097052,30.8969152 5.12471474,29.9910786 5.48752834,29.3440428 L16.1904762,3.33333333 L23.6281179,3.52744311 L34.6938776,29.5381526 C35.177629,31.0910386 35.9637134,32.7086038 37.0521542,34.3908969 C37.2940299,35.0379327 37.535902,35.4261484 37.7777778,35.5555556 C33.907766,35.5555556 31.5495129,35.3614477 30.7029478,34.9732262 C29.614507,34.4555976 28.5865506,32.9027349 27.6190476,30.3145917 L25.8049887,25.4618474 L14.0136054,25.4618474 Z M25.0793651,23.5207497 L20,9.9330656 L14.5578231,23.5207497 L25.0793651,23.5207497 Z",id:"A\\u5907\\u4EFD",fillRule:"nonzero"})),{}),name:"Words"},{icon:p(t=>H.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},H.createElement("polygon",{id:"\\u8DEF\\u5F84",fillRule:"nonzero",points:"12.4894587 12.4501424 12.4894587 3.33333333 7.93105415 3.33333333 7.93105415 7.89173791 3.37264957 7.89173791 3.37264957 12.4501424 7.93105415 12.4501424 7.93105415 31.5954416 27.0763533 31.5954416 27.0763533 27.0370371 12.4894587 27.0370371"}),H.createElement("polygon",{id:"\\u8DEF\\u5F84",fillRule:"nonzero",points:"38.0165242 27.0370371 33.4581197 27.0370371 33.4581197 7.89173791 14.3128205 7.89173791 14.3128205 12.4501424 28.8997151 12.4501424 28.8997151 36.1538462 33.4581197 36.1538462 33.4581197 31.5954416 38.0165242 31.5954416"})),{}),name:"Cut"},{icon:p(t=>H.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 41 40",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},H.createElement("path",{d:"M19.5555556,8.44444444 L30.6666667,8.44444444 L30.6666667,19.5555556 L19.5555556,19.5555556 L19.5555556,8.44444444 Z M8.44444444,19.5555556 L19.5555556,19.5555556 L19.5555556,30.6666667 L8.44444444,30.6666667 L8.44444444,19.5555556 Z",id:"\\u5F62\\u72B6",fillRule:"nonzero"}),H.createElement("path",{d:"M31.1111111,37.7777778 L8.88888889,37.7777778 C5.20699056,37.7777778 2.22222222,34.7930094 2.22222222,31.1111111 L2.22222222,8.88888889 C2.22222222,5.20699056 5.20699056,2.22222222 8.88888889,2.22222222 L31.1111111,2.22222222 C34.7930094,2.22222222 37.7777778,5.20699056 37.7777778,8.88888889 L37.7777778,31.1111111 C37.7777778,34.7930094 34.7930094,37.7777778 31.1111111,37.7777778 Z M7.96296296,5.55555556 C6.63338857,5.55555556 5.55555556,6.63338857 5.55555556,7.96296296 L5.55555556,32.037037 C5.55555556,33.3666114 6.63338857,34.4444444 7.96296296,34.4444444 L32.037037,34.4444444 C33.3666114,34.4444444 34.4444444,33.3666114 34.4444444,32.037037 L34.4444444,7.96296296 C34.4444444,6.63338857 33.3666114,5.55555556 32.037037,5.55555556 L7.96296296,5.55555556 Z",id:"\\u5F62\\u72B6",fillRule:"nonzero"})),{}),name:"Blur"},{icon:p(t=>H.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},H.createElement("path",{d:"M17.5779596,8.54958017 L17.5779596,9.78258063 C17.5779596,10.8408584 18.4358632,11.6987621 19.494141,11.6987621 C20.5524188,11.6987621 21.4103224,10.8408584 21.4103224,9.78258063 L21.4103224,4.72371845 C21.4103224,3.496419 20.4153996,2.50149623 19.1881002,2.50149623 C18.5763176,2.50149623 17.9915961,2.75371146 17.5717539,3.19869512 L3.2331148,18.3959752 C2.0630494,19.6361077 2.0174257,21.5592807 3.12736825,22.8535021 L15.8639539,37.7046866 C16.6629229,38.6363048 18.065841,38.7438383 18.9974592,37.9448694 C19.4897309,37.5226902 19.7730202,36.9065365 19.7730202,36.2580253 L19.7730202,25.2321054 L19.7730202,25.2321054 C23.2058426,25.6262204 26.0618735,26.3972435 28.3411128,27.5451747 C28.3411128,27.5451747 28.3411128,27.5451747 28.3411128,27.5451747 C30.4830369,28.6239474 33.0939274,27.7620931 34.1727002,25.620169 C34.9201963,24.1360011 34.7551232,22.3553848 33.7475296,21.0339235 C33.0553456,20.1261947 32.2868819,19.29897 31.4421037,18.5522758 C28.2479816,15.7290114 24.3482408,13.9602893 19.742881,13.2461093 C18.8736739,13.111306 18.0597695,13.7066674 17.9249762,14.5758761 C17.9124536,14.6566279 17.9061644,14.7382238 17.9061644,14.8199408 C17.9061644,15.7914187 18.6317736,16.609832 19.5962554,16.726211 C22.0019735,17.0164528 24.3663523,17.8958982 26.6893918,19.3645475 C29.5542619,21.1757476 31.6020001,23.472523 32.8326067,26.2548737 C29.0492033,24.5029085 25.9618566,23.3648044 23.5705665,22.8405615 C22.0855021,22.5149906 20.6358973,22.2470078 19.2217523,22.0366132 C18.0078183,21.856015 16.8773204,22.6936906 16.696713,23.9076233 C16.680606,24.0158849 16.6725195,24.1251885 16.6725195,24.2346417 L16.6725195,33.6727049 L16.6725195,33.6727049 L7.30858708,22.4534377 C6.59165669,21.5944573 6.62515013,20.3364185 7.3867707,19.5168025 L17.5779596,8.54958017 L17.5779596,8.54958017 Z",id:"Path-9"})),{}),name:"Recall"}],Rt=K.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 20px;
  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);
`,kt=K.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
`,Pt=s.memo(K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    fill: #fff;
  }
  ${t=>t.isActive&&Le.css`
      color: #0096ff;
      background: #e6f5ff;
      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
      border-radius: 5px;
      border: 1px solid #0096ff;
      svg {
        fill: #0096ff;
      }
    `}
`),_t=K.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  ${t=>Le.css`
      background: ${t.color};
      box-shadow: ${t.color===t.currentColor?"0px 0px 4px 0px #0096ff":"none"};
      border: ${t.color===t.currentColor?"1px solid #0096FF;":"1px solid #FFFFFF"};
    `}
`,Ft=K.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
`,Mt=({children:t,onSelect:l})=>{const{activeTool:a,pencilConfig:n,editorColors:o,handleSelectTool:E,changeColor:R}=be(),{undo:S}=je(),v=s.useMemo(()=>["Pencil"].includes(a),[a]),D=m=>{switch(m){case"Recall":S();break;case"Words":E("Words");break;case"Cut":E(m);break;default:E(m)}l==null||l()};return ee(Rt,{children:[v&&p(Ft,{children:o==null?void 0:o.map(m=>p(_t,{color:m,currentColor:n.stroke,onClick:()=>R(m)},m))}),!["Words","Cut"].includes(a)&&p(kt,{children:Lt.map(m=>ee(Pt,{onClick:()=>D(m.name),isActive:m.name===a,children:[m.icon,p("span",{children:m.name})]},m.name))}),t]})},_e=10,Fe=10,Qe=({tile:t})=>{if(t.isFilled,!t.color){const R=t.data.length;let S=0,v=0,D=0,m=0;for(let f=0;f<R;f+=4)S+=t.data[f],v+=t.data[f+1],D+=t.data[f+2],m+=t.data[f+3];const u=R/4;t.color={r:Math.round(S/u),g:Math.round(v/u),b:Math.round(D/u),a:Math.round(m/u)}}const l=t.color,a=t.column*Fe,n=t.row*_e,o=t.pixelWidth,E=t.pixelHeight;return p(X.Rect,{globalCompositeOperation:"source-over",x:a,y:n,width:o,height:E,fill:`rgba(${l.r}, ${l.g}, ${l.b}, ${l.a/255})`})},Ke=({currentBlur:t=[]})=>{const{width:l,height:a}=be(),{image:n,group:o,blurs:E}=je(),R=s.useRef([]),S=Math.ceil(a/_e),v=Math.ceil(l/Fe),[D,m]=s.useState(!1),u=(C,F,$)=>{const b=[];let P=Math.max(0,Math.floor(F/_e)-Math.floor($/2));const W=Math.max(0,Math.floor(C/Fe)-Math.floor($/2)),k=Math.min(S,P+$),x=Math.min(v,W+$);for(;P<k;){let Z=W;for(;Z<x;)b.push(R.current[P*v+Z]),Z+=1;P+=1}return b},f=s.useMemo(()=>{const C=[];return D&&t.forEach(F=>{C.push(...u(F.x,F.y,5))}),C},[t,D]),A=s.useMemo(()=>{const C=[];return D&&E.forEach(F=>{F.forEach($=>{C.push(...u($.x,$.y,5))})}),C},[E,D]);return s.useEffect(()=>{const C=Et(n,o.width,o.height);for(let F=0;F<S;F++)for(let $=0;$<v;$++){const b={row:F,column:$,pixelWidth:Fe,pixelHeight:_e,data:[]};let P=[];const W=(l*_e*b.row+b.column*Fe)*4,k=b.pixelHeight;for(let x=0;x<k;x++){const Z=W+l*4*x;P=[...P,...C.data.slice(Z,Z+b.pixelWidth*4)]}b.data=P,R.current.push(b)}m(!0)},[n]),ee(bt,{children:[f.length>0&&p(X.Group,{children:f.map((C,F)=>C&&p(Qe,{tile:C},`${F}-${C.row}-${C.column}`))}),A.length>0&&p(X.Group,{children:A.map((C,F)=>C&&p(Qe,{tile:C},`${F}-${C.row}-${C.column}`))})]})},Ot=t=>{const[l,a]=s.useState({width:window.innerWidth,height:window.innerHeight});return s.useEffect(()=>{var o,E;const n=()=>{window.visualViewport&&a({width:window.visualViewport.width,height:window.visualViewport.height})};return(o=window.visualViewport)==null||o.addEventListener("resize",n),(E=window.visualViewport)==null||E.addEventListener("scroll",n),()=>{var R,S;(R=window.visualViewport)==null||R.removeEventListener("resize",n),(S=window.visualViewport)==null||S.removeEventListener("scroll",n)}},[]),s.useEffect(()=>{t==null||t()},[l]),l},Dt=t=>Le.css`
  background: ${t.color};
  box-shadow: ${t.color===t.currentColor?"0px 0px 4px 0px rgba(0,150,255,1)":"none"};
  border: ${t.color===t.currentColor?"1px solid #0096FF;":"1px solid #FFFFFF"};
`,jt=K.div`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: #fff;
  background: #fff;
  box-sizing: border-box;
  ${Dt}
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);
    content: '';
  }
`,It=t=>Le.css`
  transform: translateY(calc(${t.viewprotHeight-20}px - 100%));
`,At=K.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  transition: transform 0.2s ease;
  ${It}
`,$t=K.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 100px 15px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
`,Wt=K.textarea`
  width: 100%;
  height: 105px;
  padding: 0 12px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);
  border-radius: 8px;
  border: 1px solid #38a1f6;
  resize: none;
  font-size: 30px;
  font-weight: 500;
  color: #222222;
  line-height: 42px;
`,Yt=K.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  box-sizing: border-box;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: '';
      transform: translate(-50%, -50%);
    }
  }
`,zt=({defaultWord:t="",onDone:l,onCancel:a})=>{const n=s.useRef(null),o=Ot(()=>{var u;(u=n.current)==null||u.focus()}),{editorColors:E,textConfig:R,changeColor:S}=be(),v=u=>{u.stopPropagation(),a==null||a()},D=u=>{u.stopPropagation(),l==null||l(n.current.value)},m=(u,f)=>{var A;u.preventDefault(),u.stopPropagation(),S(f),(A=n.current)==null||A.focus()};return s.useEffect(()=>{var u;(u=n.current)==null||u.focus(),n.current.value=t},[]),pt.createPortal(ee($t,{onClick:u=>u.stopPropagation(),children:[ee(Yt,{children:[p("div",{onClick:v,children:"Cancel"}),p("div",{onClick:D,children:"Done"})]}),p(Wt,{ref:n,autoComplete:"off",wrap:"hard",style:{color:R.fill}}),p(At,{viewprotHeight:o.height,children:E==null?void 0:E.map(u=>p(jt,{color:u,currentColor:R.fill,onClick:f=>m(f,u)},u))})]}),document.body)},Bt=t=>H.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},H.createElement("path",{d:"M5.18286303,19.7599081 L30.5474794,19.7599081 C31.1080723,19.7599081 31.6457047,19.9826027 32.0421038,20.3790017 C32.4385028,20.7754008 32.6611974,21.3130332 32.6611974,21.8736261 L32.6611974,40.8970884 C32.6611974,42.0644626 31.7148536,43.0108064 30.5474794,43.0108064 L5.18286303,43.0108064 C4.01548881,43.0108064 3.06914498,42.0644626 3.06914498,40.8970884 L3.06914498,21.8736261 C3.06914498,21.3130332 3.29183964,20.7754008 3.68823867,20.3790017 C4.08463769,19.9826027 4.62227015,19.7599081 5.18286303,19.7599081 L5.18286303,19.7599081 Z M7.29658108,23.9873441 L7.29658108,38.7833703 L28.4337613,38.7833703 L28.4337613,23.9873441 L7.29658108,23.9873441 Z",id:"\\u5F62\\u72B6",fill:"#FFFFFF",fillRule:"nonzero"}),H.createElement("path",{d:"M26.0389188,13.171449 L26.0389188,16.3779592 C26.0389188,16.5380827 25.9484507,16.6844632 25.8052319,16.7560726 C25.6620132,16.827682 25.4906279,16.8122282 25.3625291,16.7161541 L18.0342686,11.2204872 C17.9278193,11.1406503 17.8651712,11.015354 17.8651712,10.8822923 C17.8651712,10.7492307 17.9278193,10.6239344 18.0342686,10.5440974 L25.3625291,5.04843056 C25.4906279,4.95235648 25.6620132,4.93690268 25.8052319,5.00851207 C25.9484507,5.08012147 26.0389188,5.226502 26.0389188,5.38662547 L26.0389188,8.94401291 C36.5395083,8.95218005 45.0475851,17.4668826 45.0475851,27.9674752 C45.0475851,28.722711 44.6448536,29.4206271 43.9908195,29.7982784 C43.3367854,30.1759296 42.5309487,30.1759296 41.8769146,29.7982784 C41.2228805,29.4206271 40.8200334,28.722711 40.820149,27.9674752 C40.8201531,19.8016303 34.2047597,13.1796148 26.0389188,13.171449 Z",id:"\\u8DEF\\u5F84",fill:"#FFFFFF",fillRule:"nonzero"})),et=["top-left","top-center","top-right","middle-left","middle-right","bottom-left","bottom-center","bottom-right"],Xt=()=>{const t=s.useRef({}),l=a=>{for(let n of et){const o=a.findOne(`.${n}`);o==null||o.fillPriority("pattern"),o==null||o.fillPatternRepeat("no-repeat"),o==null||o.fillPatternImage(t.current[n]),o==null||o.strokeEnabled(!1)}a==null||a.getLayer().batchDraw()};return s.useLayoutEffect(()=>{for(let a of et)t.current[a]=Vt(a)},[]),l},Vt=(t,l="#0096FF")=>{const a=document.createElement("canvas");a.width=24,a.height=24;const n=a.getContext("2d");switch(n.fillStyle=l,n.lineCap="round",n.beginPath(),t){case"top-left":n.lineTo(10,10),n.lineTo(24,10),n.lineTo(24,12),n.lineTo(12,12),n.lineTo(12,24),n.lineTo(10,24);break;case"top-center":n.lineTo(0,14),n.lineTo(24,14),n.lineTo(24,12),n.lineTo(0,12);break;case"top-right":n.lineTo(0,10),n.lineTo(14,10),n.lineTo(14,24),n.lineTo(12,24),n.lineTo(12,12),n.lineTo(0,12);break;case"bottom-center":n.lineTo(0,10),n.lineTo(24,10),n.lineTo(24,12),n.lineTo(0,12);break;case"middle-left":n.lineTo(12,0),n.lineTo(12,24),n.lineTo(14,24),n.lineTo(14,0);break;case"middle-right":n.lineTo(12,0),n.lineTo(12,24),n.lineTo(10,24),n.lineTo(10,0);break;case"bottom-left":n.lineTo(12,0),n.lineTo(12,12),n.lineTo(24,12),n.lineTo(24,14),n.lineTo(10,14),n.lineTo(10,0);break;case"bottom-right":n.lineTo(12,12),n.lineTo(12,0),n.lineTo(14,0),n.lineTo(14,14),n.lineTo(0,14),n.lineTo(0,12);break}return n.closePath(),n.fill(),a},Nt=K.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
`,Ut=K.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  box-sizing: border-box;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: "";
      transform: translate(-50%, -50%);
    }
  }
`,Ht=({onCutDone:t})=>{const{image:l,texts:a,lines:n,group:o,clipRect:E}=je();let{width:R,height:S,handleSelectTool:v}=be();const D=Xt(),m=s.useRef(null),u=s.useRef(null),f=s.useRef(null),A=s.useRef(null),C=s.useRef(null),F=s.useRef(null),$=s.useRef(0),[b,P]=s.useState(E),[W,k]=s.useState(o.rotation),x=s.useMemo(()=>{const h=W/90%4+1;let g=[R,S*.8];h%2===0&&(g=[S*.8,R]);const[z]=Ae(b.width,b.height,...g);return z/b.width},[b,W]),[Z,ae]=s.useMemo(()=>{const h=R/2,g=S*.8/2,z=o.x+(b.x+b.width/2)*x,y=o.y+(b.y+b.height/2)*x,[T,re]=Ze(z,y,W),he=isNaN(z-h)?0:T-h,oe=isNaN(y-g)?0:re-g;return[he,oe]},[o,b,W,x]),ve=o.x-Z,xe=o.y-ae,de=s.useMemo(()=>{const h=document.createElement("canvas");h.width=b.width*x,h.height=b.height*x;const g=h.getContext("2d");return g.strokeStyle="#0096FF",g.lineWidth=1,g.lineCap="round",g.beginPath(),g.lineTo(0,h.height/3),g.lineTo(R,h.height/3),g.stroke(),g.beginPath(),g.lineTo(0,h.height/3*2),g.lineTo(R,h.height/3*2),g.stroke(),g.beginPath(),g.lineTo(h.width/3,0),g.lineTo(h.width/3,S),g.stroke(),g.beginPath(),g.lineTo(h.width/3*2,0),g.lineTo(h.width/3*2,S),g.stroke(),h},[b.width,b.height,W]),ne=()=>{var T,re;const h=A.current,g=h.scaleX(),z=h.scaleY(),y={width:h.width()*g,height:h.height()*z,x:+((T=h.position().x)==null?void 0:T.toFixed(5)),y:+((re=h.position().y)==null?void 0:re.toFixed(5))};h.scaleX(1),h.scaleY(1),y.x<0&&(y.width+=y.x,y.x=0,h.x(0)),y.y<0&&(y.height+=y.y,y.y=0,h.y(0)),y.x+y.width>o.width&&(y.width=o.width-y.x),y.y+y.height>o.height&&(y.height=o.height-y.y),y.height=y.height<0?-y.height:y.height,y.width=y.width<0?-y.width:y.width,P(y)},fe=()=>{t(b,W)},G=()=>{v(null)},ie=()=>{k(h=>h+90)},Y=h=>{var T,re,he;h.evt.preventDefault();const g=m.current,z=h.evt.touches[0],y=h.evt.touches[1];if(z&&y){(T=f.current)!=null&&T.isDragging()&&((re=f.current)==null||re.stopDrag());const oe={x:z.clientX,y:z.clientY},le={x:y.clientX,y:y.clientY},U=Tt(oe,le);if(!F.current){F.current=U;return}const ge=Ge(oe,le);$.current||($.current=ge);const pe={x:(U.x-g.x())/g.scaleX(),y:(U.y-g.y())/g.scaleX()},ce=g.scaleX()*(ge/$.current);g.scaleX(ce),g.scaleY(ce);let ue=U.x-F.current.x,me=U.y-F.current.y;[ue,me]=qe(ue,me,W);const ye={x:U.x-pe.x*ce+ue,y:U.y-pe.y*ce+me};g.position(ye),$.current=ge,F.current=U;return}if(z){if((he=C.current)!=null&&he.isTransforming())return;const oe={x:z.clientX,y:z.clientY};if(!F.current)return F.current=oe;let le=oe.x-F.current.x,U=oe.y-F.current.y;[le,U]=qe(le,U,W),g.move({x:le,y:U}),F.current=oe}},we=()=>{$.current=0,F.current=null;const h=A.current,g=m.current,z=g.scaleX(),y=g.scaleY(),T={width:h.width()/z,height:h.height()/y,x:(h.position().x-g.x())/z,y:(h.position().y-g.y())/y};g.scaleX(1),g.scaleY(1),g.position({x:0,y:0}),T.x<0&&(T.width+=T.x,T.x=0,h.x(0)),T.y<0&&(T.height+=T.y,T.y=0,h.y(0)),T.x+T.width>o.width&&(T.width=o.width-T.x),T.y+T.height>o.height&&(T.height=o.height-T.y),T.height=T.height<0?-T.height:T.height,T.width=T.width<0?-T.width:T.width,P(T)};return s.useLayoutEffect(()=>{var h;(h=C.current)==null||h.nodes([A.current]),D(C.current)},[]),ee(Nt,{children:[p(X.Stage,{ref:f,width:R,height:S,scale:{x:.96,y:.96},x:R*.02,y:S*.02,onTouchMove:Y,onTouchEnd:we,children:ee(X.Layer,{children:[ee(X.Group,{x:ve,y:xe,width:o.width,height:o.height,scaleX:x,scaleY:x,rotation:W,children:[ee(X.Group,{ref:m,children:[p(X.Image,{ref:u,image:l,width:o.width,height:o.height}),p(Ke,{},"clipBlur"),a.map((h,g)=>p(X.Text,{draggable:!0,...h},g)),n.map((h,g)=>p(X.Line,{...h},g))]}),p(X.Rect,{ref:A,x:b.x,y:b.y,width:b.width,height:b.height,fillPriority:"pattern",fillPatternImage:de,fillPatternRepeat:"no-repeat",fillPatternScale:{x:1/x,y:1/x},onTransformEnd:ne})]}),p(X.Transformer,{ref:C,rotateEnabled:!1,anchorSize:24})]})}),ee(Ut,{children:[p("div",{onClick:G,children:"Cancel"}),p("div",{onClick:ie,children:p(Bt,{})}),p("div",{onClick:fe,children:"Done"})]})]})},Zt=t=>H.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},H.createElement("path",{d:"M32.5688783,3 C33.3575889,3 33.9969652,3.64172519 33.9969652,4.43333333 L33.9969652,4.43333333 L33.9969652,8.01666667 L42.572627,8.01666667 C43.0828333,8.01692271 43.5541473,8.29035109 43.8090295,8.73395398 C44.0639117,9.17755688 44.0636395,9.72394046 43.8083154,10.1672873 C43.5529914,10.6106342 43.0814052,10.8835894 42.5711989,10.8833333 L42.5711989,10.8833333 L41.0659953,10.8833333 L37.5886037,42.1773 C37.3457385,44.3538608 35.5121996,46 33.3300486,46 L33.3300486,46 L14.6692372,46 C12.4873832,46 10.6542959,44.3536371 10.4121101,42.1773 L10.4121101,42.1773 L6.93471856,10.8833333 L5.42808689,10.8833333 C4.63937628,10.8833333 4,10.2416081 4,9.45 C4,8.65839186 4.63937628,8.01666667 5.42808689,8.01666667 L5.42808689,8.01666667 L14.0037487,8.01666667 L14.0037487,4.43333333 C14.0037487,3.64172519 14.643125,3 15.4318356,3 L15.4318356,3 Z M38.1926845,10.8833333 L9.80802939,10.8833333 L13.2497188,41.8591 C13.3304676,42.5847271 13.9417707,43.1333334 14.6692372,43.1333334 L14.6692372,43.1333334 L33.3314767,43.1333334 C34.0589432,43.1333334 34.6702463,42.5847271 34.7509951,41.8591 L34.7509951,41.8591 L38.1926845,10.8833333 Z M28.2846176,14.4265333 C29.0733282,14.4265333 29.7127045,15.0682585 29.7127045,15.8598667 L29.7127045,15.8598667 L29.7127045,36.9040667 C29.7127045,37.6956748 29.0733282,38.3374 28.2846176,38.3374 C27.495907,38.3374 26.8565307,37.6956748 26.8565307,36.9040667 L26.8565307,36.9040667 L26.8565307,15.8598667 C26.8565307,15.0682585 27.495907,14.4265333 28.2846176,14.4265333 Z M20.4301397,14.4265333 C21.2188503,14.4265333 21.8582266,15.0682585 21.8582266,15.8598667 L21.8582266,15.8598667 L21.8582266,36.9040667 C21.8582266,37.6956748 21.2188503,38.3374 20.4301397,38.3374 C19.6414291,38.3374 19.0020528,37.6956748 19.0020528,36.9040667 L19.0020528,36.9040667 L19.0020528,15.8598667 C19.0020528,15.0682585 19.6414291,14.4265333 20.4301397,14.4265333 Z M31.1407914,5.86666667 L16.8599225,5.86666667 L16.8599225,8.01666667 L31.1407914,8.01666667 L31.1407914,5.86666667 Z",fillRule:"nonzero"})),Gt=K.div`
  position: relative;
  background: #000;
`,qt=K.div`
  ${t=>Le.css`
    --optaicy: ${t.deleteAreaStatus==="active"?.9:1};
    --fill-color: ${t.deleteAreaStatus==="active"?"#ff6650":"#0096ff"};
    --is-show: ${t.deleteAreaStatus==="none"?"none":"flex"};
  `}
  display: var(--is-show);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 80px;
  padding: 14px 0 15px;
  background: #e2f0fe;
  box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
  border-radius: 10px;
  border: 1px solid var(--fill-color);
  font-size: 14px;
  font-weight: 500;
  color: var(--fill-color);
  line-height: 20px;
  opacity: var(--optaicy);
  transition: all 0.1s ease;
  box-sizing: border-box;
  svg {
    width: 24px;
    height: 24px;
    fill: var(--fill-color);
    transition: inherit;
  }
`,Jt=s.forwardRef(({toolbarBottom:t},l)=>{const{width:a,height:n,activeTool:o,pencilConfig:E,textConfig:R,handleSelectTool:S}=be(),{image:v,texts:D,lines:m,group:u,clipRect:f,setLines:A,setTexts:C,setImage:F,setBlurs:$}=je(),[b,P]=s.useState([]),[W,k]=s.useState("none"),x=s.useRef(null),Z=s.useRef(null),ae=s.useRef(null),ve=s.useRef(null),xe=s.useRef(null),de=s.useRef(null),ne=s.useRef(null),fe=s.useRef(0),G=s.useRef(1),ie=s.useRef(null),Y=s.useMemo(()=>{const d=u.rotation/90%4+1;let c=[a,n*.8];d%2===0&&(c=[n*.8,a]);const[M]=Ae(f.width,f.height,...c);return M/f.width},[f,u.rotation]),[we,h]=s.useMemo(()=>{const d=a/2,c=n*.8/2,M=u.x+(f.x+f.width/2)*Y,j=u.y+(f.y+f.height/2)*Y,[q,N]=Ze(M,j,u.rotation),Me=isNaN(M-d)?0:q-d,Oe=isNaN(j-c)?0:N-c;return[Me,Oe]},[u,f,u.rotation,Y]),g=u.x-we,z=u.y-h,y=()=>{const d=ae.current,c=d.getRelativePointerPosition();o==="Pencil"?(de.current=new gt.Line({...E,strokeWidth:E.strokeWidth/Y,points:c?[c.x,c.y,c.x,c.y]:[]}),d.add(de.current)):o==="Blur"&&P(M=>[...M,c])},T=()=>{var M;const d=de.current,c=(M=ae.current)==null?void 0:M.getRelativePointerPosition();if(o==="Pencil"&&d){const j=d.points().concat([c.x,c.y]);d.points(j)}o==="Blur"&&b.length&&P(j=>[...j,c])},re=()=>{const d=de.current;o==="Pencil"&&d&&(A(c=>[...c,{...E,strokeWidth:E.strokeWidth/Y,points:d.points()}]),setTimeout(()=>{d.destroy(),de.current=null},50)),o==="Blur"&&($(c=>[...c,b]),P([]))},he=d=>{if(d){const c=R.fontSize/Y,M=R.width/Y,j=Math.min(M,d.length*c);C(q=>[...q,{...R,fontSize:c,text:d,align:"center",width:j,x:u.width/2,y:u.height/2,offsetX:j/2,offsetY:c/2,rotation:-u.rotation}]),S(null)}},oe=d=>{var N;const c=d.target,M=c.absolutePosition(),j=c.height(),q=(N=ie.current)==null?void 0:N.y();M.y>=q-j?k("active"):k("show")},le=d=>{var j;const c=d.target,M=c.attrs.id.slice(-1);switch(W){case"show":case"none":const q=c.position();C(N=>(N[M].x=q.x,N[M].y=q.y,N));break;case"active":C(N=>(N.splice(M,1),[...N]));break}k("none"),c==null||c.moveTo(ve.current),W==="active"&&((j=ne.current)==null||j.nodes([]))},U=()=>{var d;(d=ne.current)==null||d.nodes([])},ge=(d,c)=>{F(d,c),S(null)},pe=d=>{var c,M,j,q;["Blur","Pencil"].includes(o)?y():d.target.className==="Text"?(d.target.moveTo(ae.current),(c=ne.current)==null||c.nodes([d.target])):d.target===xe.current&&((j=(M=ne.current)==null?void 0:M.nodes()[0])==null||j.moveTo(ve.current),(q=ne.current)==null||q.nodes([]))},ce=d=>{var c;["Blur","Pencil"].includes(o)?y():d.target.className==="Text"&&(d.target.moveTo(ae.current),(c=ne.current)==null||c.nodes([d.target]))},ue=d=>{d.evt.preventDefault(),["Blur","Pencil"].includes(o)&&T()},me=d=>{var c,M;if(d.evt.preventDefault(),["Blur","Pencil"].includes(o))T();else if(d.evt.touches.length>1){const j=ne.current.nodes()[0];j.draggable(!1);const q=d.evt.touches[0],N=d.evt.touches[1];(c=x.current)!=null&&c.isDragging()&&((M=x.current)==null||M.stopDrag());const Me={x:q.clientX,y:q.clientY},Oe={x:N.clientX,y:N.clientY},Te=Ge(Me,Oe);fe.current||(fe.current=Te,G.current=j.scaleX());let We=(Te/fe.current-1)*.8+1;const Ie=G.current*We;j.scaleX(Ie),j.scaleY(Ie)}},ye=d=>{["Blur","Pencil"].includes(o)&&re()},$e=d=>{["Blur","Pencil"].includes(o)&&re();const c=ne.current.nodes()[0];if(c&&c.scaleX()>G.current){const M=c.attrs.id.slice(-1);C(j=>(j[M].scaleX=c.scaleX(),j[M].scaleY=c.scaleY(),[...j]))}c==null||c.draggable(!0),fe.current=0,G.current=1};return s.useEffect(()=>{var d;ie.current=(d=x.current)==null?void 0:d.findOne("#delete-area")},[]),s.useImperativeHandle(l,()=>({exportImage:()=>{var d;return(d=ae.current)==null?void 0:d.toDataURL({x:f.x*Y-we,y:f.y*Y-h,width:f.width*Y,height:f.height*Y})}}),[f]),ee(Gt,{style:{width:a,height:n},children:[p(X.Stage,{ref:x,width:a,height:n,onMouseDown:pe,onTouchStart:ce,onMouseMove:ue,onTouchMove:me,onMouseUp:ye,onTouchEnd:$e,children:ee(X.Layer,{ref:Z,children:[p(X.Group,{ref:ae,x:g,y:z,width:u.width,height:u.height,scale:{x:Y,y:Y},rotation:u.rotation,children:ee(X.Group,{ref:ve,clipX:f.x,clipY:f.y,clipHeight:f.height,clipWidth:f.width,children:[p(X.Image,{ref:xe,image:v,width:u.width,height:u.height}),p(Ke,{currentBlur:b}),D.map((d,c)=>s.createElement(X.Text,{...d,key:c,id:`text-${c}`,x:d.x,y:d.y,draggable:!0,onDragMove:oe,onDragEnd:le})),m.map((d,c)=>p(X.Line,{...d},c))]})}),p(vt.Html,{groupProps:{id:"delete-area",y:n-120,x:a/2-75,width:150,height:80},children:ee(qt,{deleteAreaStatus:W,children:[p(Zt,{}),p("div",{children:"Drag here to delete"})]})}),p(X.Transformer,{ref:ne,rotateEnabled:!1,resizeEnabled:!1,anchorStroke:"rgba(0,0,0,0)",anchorFill:"rgba(0,0,0,0)",borderStroke:"#ccc"})]})}),o==="Cut"&&p(Ht,{onCutDone:ge}),o==="Words"&&p(zt,{onDone:he,onCancel:()=>S(null)}),W==="none"&&p(Mt,{onSelect:U,children:t})]})}),Qt=()=>s.useRef({exportImage:()=>""}),Kt=s.forwardRef(({image:t,width:l=window.innerWidth,height:a=window.innerHeight,toolbarBottom:n},o)=>p(yt,{width:l,height:a,children:p(St,{image:t,children:p(Jt,{ref:o,toolbarBottom:n})})}));J.default=Kt,J.useExport=Qt,Object.defineProperties(J,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
