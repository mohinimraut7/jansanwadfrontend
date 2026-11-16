(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(d){if(d.ep)return;d.ep=!0;const p=s(d);fetch(d.href,p)}})();function Ox(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ku={exports:{}},ro={};var Xh;function L2(){if(Xh)return ro;Xh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(l,d,p){var f=null;if(p!==void 0&&(f=""+p),d.key!==void 0&&(f=""+d.key),"key"in d){p={};for(var h in d)h!=="key"&&(p[h]=d[h])}else p=d;return d=p.ref,{$$typeof:n,type:l,key:f,ref:d!==void 0?d:null,props:p}}return ro.Fragment=o,ro.jsx=s,ro.jsxs=s,ro}var Jh;function U2(){return Jh||(Jh=1,ku.exports=L2()),ku.exports}var a=U2(),Nu={exports:{}},Ae={};var Qh;function F2(){if(Qh)return Ae;Qh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),T=Symbol.iterator;function R(j){return j===null||typeof j!="object"?null:(j=T&&j[T]||j["@@iterator"],typeof j=="function"?j:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,M={};function E(j,C,q){this.props=j,this.context=C,this.refs=M,this.updater=q||k}E.prototype.isReactComponent={},E.prototype.setState=function(j,C){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,C,"setState")},E.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function S(){}S.prototype=E.prototype;function A(j,C,q){this.props=j,this.context=C,this.refs=M,this.updater=q||k}var P=A.prototype=new S;P.constructor=A,z(P,E.prototype),P.isPureReactComponent=!0;var X=Array.isArray;function D(){}var W={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function de(j,C,q){var oe=q.ref;return{$$typeof:n,type:j,key:C,ref:oe!==void 0?oe:null,props:q}}function he(j,C){return de(j.type,C,j.props)}function J(j){return typeof j=="object"&&j!==null&&j.$$typeof===n}function pe(j){var C={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(q){return C[q]})}var $=/\/+/g;function me(j,C){return typeof j=="object"&&j!==null&&j.key!=null?pe(""+j.key):C.toString(36)}function we(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(D,D):(j.status="pending",j.then(function(C){j.status==="pending"&&(j.status="fulfilled",j.value=C)},function(C){j.status==="pending"&&(j.status="rejected",j.reason=C)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function F(j,C,q,oe,I){var ge=typeof j;(ge==="undefined"||ge==="boolean")&&(j=null);var be=!1;if(j===null)be=!0;else switch(ge){case"bigint":case"string":case"number":be=!0;break;case"object":switch(j.$$typeof){case n:case o:be=!0;break;case y:return be=j._init,F(be(j._payload),C,q,oe,I)}}if(be)return I=I(j),be=oe===""?"."+me(j,0):oe,X(I)?(q="",be!=null&&(q=be.replace($,"$&/")+"/"),F(I,C,q,"",function(Ke){return Ke})):I!=null&&(J(I)&&(I=he(I,q+(I.key==null||j&&j.key===I.key?"":(""+I.key).replace($,"$&/")+"/")+be)),C.push(I)),1;be=0;var ke=oe===""?".":oe+":";if(X(j))for(var Ce=0;Ce<j.length;Ce++)oe=j[Ce],ge=ke+me(oe,Ce),be+=F(oe,C,q,ge,I);else if(Ce=R(j),typeof Ce=="function")for(j=Ce.call(j),Ce=0;!(oe=j.next()).done;)oe=oe.value,ge=ke+me(oe,Ce++),be+=F(oe,C,q,ge,I);else if(ge==="object"){if(typeof j.then=="function")return F(we(j),C,q,oe,I);throw C=String(j),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return be}function ie(j,C,q){if(j==null)return j;var oe=[],I=0;return F(j,oe,"","",function(ge){return C.call(q,ge,I++)}),oe}function fe(j){if(j._status===-1){var C=j._result;C=C(),C.then(function(q){(j._status===0||j._status===-1)&&(j._status=1,j._result=q)},function(q){(j._status===0||j._status===-1)&&(j._status=2,j._result=q)}),j._status===-1&&(j._status=0,j._result=C)}if(j._status===1)return j._result.default;throw j._result}var K=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},B={map:ie,forEach:function(j,C,q){ie(j,function(){C.apply(this,arguments)},q)},count:function(j){var C=0;return ie(j,function(){C++}),C},toArray:function(j){return ie(j,function(C){return C})||[]},only:function(j){if(!J(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return Ae.Activity=v,Ae.Children=B,Ae.Component=E,Ae.Fragment=s,Ae.Profiler=d,Ae.PureComponent=A,Ae.StrictMode=l,Ae.Suspense=x,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(j){return W.H.useMemoCache(j)}},Ae.cache=function(j){return function(){return j.apply(null,arguments)}},Ae.cacheSignal=function(){return null},Ae.cloneElement=function(j,C,q){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var oe=z({},j.props),I=j.key;if(C!=null)for(ge in C.key!==void 0&&(I=""+C.key),C)!V.call(C,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&C.ref===void 0||(oe[ge]=C[ge]);var ge=arguments.length-2;if(ge===1)oe.children=q;else if(1<ge){for(var be=Array(ge),ke=0;ke<ge;ke++)be[ke]=arguments[ke+2];oe.children=be}return de(j.type,I,oe)},Ae.createContext=function(j){return j={$$typeof:f,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:p,_context:j},j},Ae.createElement=function(j,C,q){var oe,I={},ge=null;if(C!=null)for(oe in C.key!==void 0&&(ge=""+C.key),C)V.call(C,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(I[oe]=C[oe]);var be=arguments.length-2;if(be===1)I.children=q;else if(1<be){for(var ke=Array(be),Ce=0;Ce<be;Ce++)ke[Ce]=arguments[Ce+2];I.children=ke}if(j&&j.defaultProps)for(oe in be=j.defaultProps,be)I[oe]===void 0&&(I[oe]=be[oe]);return de(j,ge,I)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(j){return{$$typeof:h,render:j}},Ae.isValidElement=J,Ae.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:fe}},Ae.memo=function(j,C){return{$$typeof:g,type:j,compare:C===void 0?null:C}},Ae.startTransition=function(j){var C=W.T,q={};W.T=q;try{var oe=j(),I=W.S;I!==null&&I(q,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(D,K)}catch(ge){K(ge)}finally{C!==null&&q.types!==null&&(C.types=q.types),W.T=C}},Ae.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Ae.use=function(j){return W.H.use(j)},Ae.useActionState=function(j,C,q){return W.H.useActionState(j,C,q)},Ae.useCallback=function(j,C){return W.H.useCallback(j,C)},Ae.useContext=function(j){return W.H.useContext(j)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(j,C){return W.H.useDeferredValue(j,C)},Ae.useEffect=function(j,C){return W.H.useEffect(j,C)},Ae.useEffectEvent=function(j){return W.H.useEffectEvent(j)},Ae.useId=function(){return W.H.useId()},Ae.useImperativeHandle=function(j,C,q){return W.H.useImperativeHandle(j,C,q)},Ae.useInsertionEffect=function(j,C){return W.H.useInsertionEffect(j,C)},Ae.useLayoutEffect=function(j,C){return W.H.useLayoutEffect(j,C)},Ae.useMemo=function(j,C){return W.H.useMemo(j,C)},Ae.useOptimistic=function(j,C){return W.H.useOptimistic(j,C)},Ae.useReducer=function(j,C,q){return W.H.useReducer(j,C,q)},Ae.useRef=function(j){return W.H.useRef(j)},Ae.useState=function(j){return W.H.useState(j)},Ae.useSyncExternalStore=function(j,C,q){return W.H.useSyncExternalStore(j,C,q)},Ae.useTransition=function(){return W.H.useTransition()},Ae.version="19.2.3",Ae}var Zh;function Yl(){return Zh||(Zh=1,Nu.exports=F2()),Nu.exports}var b=Yl();const We=Ox(b);var Cu={exports:{}},oo={},Tu={exports:{}},zu={};var Kh;function W2(){return Kh||(Kh=1,(function(n){function o(F,ie){var fe=F.length;F.push(ie);e:for(;0<fe;){var K=fe-1>>>1,B=F[K];if(0<d(B,ie))F[K]=ie,F[fe]=B,fe=K;else break e}}function s(F){return F.length===0?null:F[0]}function l(F){if(F.length===0)return null;var ie=F[0],fe=F.pop();if(fe!==ie){F[0]=fe;e:for(var K=0,B=F.length,j=B>>>1;K<j;){var C=2*(K+1)-1,q=F[C],oe=C+1,I=F[oe];if(0>d(q,fe))oe<B&&0>d(I,q)?(F[K]=I,F[oe]=fe,K=oe):(F[K]=q,F[C]=fe,K=C);else if(oe<B&&0>d(I,fe))F[K]=I,F[oe]=fe,K=oe;else break e}}return ie}function d(F,ie){var fe=F.sortIndex-ie.sortIndex;return fe!==0?fe:F.id-ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var x=[],g=[],y=1,v=null,T=3,R=!1,k=!1,z=!1,M=!1,E=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var ie=s(g);ie!==null;){if(ie.callback===null)l(g);else if(ie.startTime<=F)l(g),ie.sortIndex=ie.expirationTime,o(x,ie);else break;ie=s(g)}}function X(F){if(z=!1,P(F),!k)if(s(x)!==null)k=!0,D||(D=!0,pe());else{var ie=s(g);ie!==null&&we(X,ie.startTime-F)}}var D=!1,W=-1,V=5,de=-1;function he(){return M?!0:!(n.unstable_now()-de<V)}function J(){if(M=!1,D){var F=n.unstable_now();de=F;var ie=!0;try{e:{k=!1,z&&(z=!1,S(W),W=-1),R=!0;var fe=T;try{t:{for(P(F),v=s(x);v!==null&&!(v.expirationTime>F&&he());){var K=v.callback;if(typeof K=="function"){v.callback=null,T=v.priorityLevel;var B=K(v.expirationTime<=F);if(F=n.unstable_now(),typeof B=="function"){v.callback=B,P(F),ie=!0;break t}v===s(x)&&l(x),P(F)}else l(x);v=s(x)}if(v!==null)ie=!0;else{var j=s(g);j!==null&&we(X,j.startTime-F),ie=!1}}break e}finally{v=null,T=fe,R=!1}ie=void 0}}finally{ie?pe():D=!1}}}var pe;if(typeof A=="function")pe=function(){A(J)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,me=$.port2;$.port1.onmessage=J,pe=function(){me.postMessage(null)}}else pe=function(){E(J,0)};function we(F,ie){W=E(function(){F(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(F){switch(T){case 1:case 2:case 3:var ie=3;break;default:ie=T}var fe=T;T=ie;try{return F()}finally{T=fe}},n.unstable_requestPaint=function(){M=!0},n.unstable_runWithPriority=function(F,ie){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var fe=T;T=F;try{return ie()}finally{T=fe}},n.unstable_scheduleCallback=function(F,ie,fe){var K=n.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?K+fe:K):fe=K,F){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=fe+B,F={id:y++,callback:ie,priorityLevel:F,startTime:fe,expirationTime:B,sortIndex:-1},fe>K?(F.sortIndex=fe,o(g,F),s(x)===null&&F===s(g)&&(z?(S(W),W=-1):z=!0,we(X,fe-K))):(F.sortIndex=B,o(x,F),k||R||(k=!0,D||(D=!0,pe()))),F},n.unstable_shouldYield=he,n.unstable_wrapCallback=function(F){var ie=T;return function(){var fe=T;T=ie;try{return F.apply(this,arguments)}finally{T=fe}}}})(zu)),zu}var e0;function H2(){return e0||(e0=1,Tu.exports=W2()),Tu.exports}var Au={exports:{}},Et={};var t0;function P2(){if(t0)return Et;t0=1;var n=Yl();function o(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(x,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:v==null?null:""+v,children:x,containerInfo:g,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Et.createPortal=function(x,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return p(x,g,null,y)},Et.flushSync=function(x){var g=f.T,y=l.p;try{if(f.T=null,l.p=2,x)return x()}finally{f.T=g,l.p=y,l.d.f()}},Et.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(x,g))},Et.prefetchDNS=function(x){typeof x=="string"&&l.d.D(x)},Et.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var y=g.as,v=h(y,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?l.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:T,fetchPriority:R}):y==="script"&&l.d.X(x,{crossOrigin:v,integrity:T,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Et.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);l.d.M(x,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(x)},Et.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=h(y,g.crossOrigin);l.d.L(x,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Et.preloadModule=function(x,g){if(typeof x=="string")if(g){var y=h(g.as,g.crossOrigin);l.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(x)},Et.requestFormReset=function(x){l.d.r(x)},Et.unstable_batchedUpdates=function(x,g){return x(g)},Et.useFormState=function(x,g,y){return f.H.useFormState(x,g,y)},Et.useFormStatus=function(){return f.H.useHostTransitionStatus()},Et.version="19.2.3",Et}var a0;function $2(){if(a0)return Au.exports;a0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Au.exports=P2(),Au.exports}var n0;function I2(){if(n0)return oo;n0=1;var n=H2(),o=Yl(),s=$2();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(l(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(l(188));return t!==e?null:e}for(var i=e,r=t;;){var c=i.return;if(c===null)break;var u=c.alternate;if(u===null){if(r=c.return,r!==null){i=r;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===i)return x(c),e;if(u===r)return x(c),t;u=u.sibling}throw Error(l(188))}if(i.return!==r.return)i=c,r=u;else{for(var m=!1,w=c.child;w;){if(w===i){m=!0,i=c,r=u;break}if(w===r){m=!0,r=c,i=u;break}w=w.sibling}if(!m){for(w=u.child;w;){if(w===i){m=!0,i=u,r=c;break}if(w===r){m=!0,r=u,i=c;break}w=w.sibling}if(!m)throw Error(l(189))}}if(i.alternate!==r)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),A=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case E:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case D:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case A:return e.displayName||"Context";case S:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case V:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var we=Array.isArray,F=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},K=[],B=-1;function j(e){return{current:e}}function C(e){0>B||(e.current=K[B],K[B]=null,B--)}function q(e,t){B++,K[B]=e.current,e.current=t}var oe=j(null),I=j(null),ge=j(null),be=j(null);function ke(e,t){switch(q(ge,t),q(I,e),q(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bh(t),e=yh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(oe),q(oe,e)}function Ce(){C(oe),C(I),C(ge)}function Ke(e){e.memoizedState!==null&&q(be,e);var t=oe.current,i=yh(t,e.type);t!==i&&(q(I,e),q(oe,i))}function et(e){I.current===e&&(C(oe),C(I)),be.current===e&&(C(be),to._currentValue=fe)}var Gt,Lt;function se(e){if(Gt===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Gt=t&&t[1]||"",Lt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gt+e+Lt}var je=!1;function G(e,t){if(!e||je)return"";je=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var ue=function(){throw Error()};if(Object.defineProperty(ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ue,[])}catch(ae){var ee=ae}Reflect.construct(e,[],ue)}else{try{ue.call()}catch(ae){ee=ae}e.call(ue.prototype)}}else{try{throw Error()}catch(ae){ee=ae}(ue=e())&&typeof ue.catch=="function"&&ue.catch(function(){})}}catch(ae){if(ae&&ee&&typeof ae.stack=="string")return[ae.stack,ee.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),m=u[0],w=u[1];if(m&&w){var _=m.split(`
`),Z=w.split(`
`);for(c=r=0;r<_.length&&!_[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(r===_.length||c===Z.length)for(r=_.length-1,c=Z.length-1;1<=r&&0<=c&&_[r]!==Z[c];)c--;for(;1<=r&&0<=c;r--,c--)if(_[r]!==Z[c]){if(r!==1||c!==1)do if(r--,c--,0>c||_[r]!==Z[c]){var re=`
`+_[r].replace(" at new "," at ");return e.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",e.displayName)),re}while(1<=r&&0<=c);break}}}finally{je=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?se(i):""}function O(e,t){switch(e.tag){case 26:case 27:case 5:return se(e.type);case 16:return se("Lazy");case 13:return e.child!==t&&t!==null?se("Suspense Fallback"):se("Suspense");case 19:return se("SuspenseList");case 0:case 15:return G(e.type,!1);case 11:return G(e.type.render,!1);case 1:return G(e.type,!0);case 31:return se("Activity");default:return""}}function L(e){try{var t="",i=null;do t+=O(e,i),i=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ne=Object.prototype.hasOwnProperty,ce=n.unstable_scheduleCallback,xe=n.unstable_cancelCallback,Ie=n.unstable_shouldYield,bt=n.unstable_requestPaint,Ze=n.unstable_now,Rt=n.unstable_getCurrentPriorityLevel,St=n.unstable_ImmediatePriority,ze=n.unstable_UserBlockingPriority,nt=n.unstable_NormalPriority,Ln=n.unstable_LowPriority,gi=n.unstable_IdlePriority,Na=n.log,Un=n.unstable_setDisableYieldValue,Fn=null,pt=null;function ln(e){if(typeof Na=="function"&&Un(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(Fn,e)}catch{}}var Xt=Math.clz32?Math.clz32:S1,j1=Math.log,w1=Math.LN2;function S1(e){return e>>>=0,e===0?32:31-(j1(e)/w1|0)|0}var Po=256,$o=262144,Io=4194304;function Wn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yo(e,t,i){var r=e.pendingLanes;if(r===0)return 0;var c=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~u,r!==0?c=Wn(r):(m&=w,m!==0?c=Wn(m):i||(i=w&~e,i!==0&&(c=Wn(i))))):(w=r&~u,w!==0?c=Wn(w):m!==0?c=Wn(m):i||(i=r&~e,i!==0&&(c=Wn(i)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,i=t&-t,u>=i||u===32&&(i&4194048)!==0)?t:c}function gr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function k1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zp(){var e=Io;return Io<<=1,(Io&62914560)===0&&(Io=4194304),e}function pc(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function mr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function N1(e,t,i,r,c,u){var m=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var w=e.entanglements,_=e.expirationTimes,Z=e.hiddenUpdates;for(i=m&~i;0<i;){var re=31-Xt(i),ue=1<<re;w[re]=0,_[re]=-1;var ee=Z[re];if(ee!==null)for(Z[re]=null,re=0;re<ee.length;re++){var ae=ee[re];ae!==null&&(ae.lane&=-536870913)}i&=~ue}r!==0&&Kp(e,r,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Kp(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Xt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|i&261930}function ef(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-Xt(i),c=1<<r;c&t|e[r]&t&&(e[r]|=t),i&=~c}}function tf(e,t){var i=t&-t;return i=(i&42)!==0?1:fc(i),(i&(e.suspendedLanes|t))!==0?0:i}function fc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function af(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:Ph(e.type))}function nf(e,t){var i=ie.p;try{return ie.p=e,t()}finally{ie.p=i}}var cn=Math.random().toString(36).slice(2),kt="__reactFiber$"+cn,Ut="__reactProps$"+cn,mi="__reactContainer$"+cn,mc="__reactEvents$"+cn,C1="__reactListeners$"+cn,T1="__reactHandles$"+cn,rf="__reactResources$"+cn,hr="__reactMarker$"+cn;function hc(e){delete e[kt],delete e[Ut],delete e[mc],delete e[C1],delete e[T1]}function hi(e){var t=e[kt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[mi]||i[kt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Ch(e);e!==null;){if(i=e[kt])return i;e=Ch(e)}return t}e=i,i=e.parentNode}return null}function xi(e){if(e=e[kt]||e[mi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function bi(e){var t=e[rf];return t||(t=e[rf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function jt(e){e[hr]=!0}var of=new Set,sf={};function Hn(e,t){yi(e,t),yi(e+"Capture",t)}function yi(e,t){for(sf[e]=t,e=0;e<t.length;e++)of.add(t[e])}var z1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lf={},cf={};function A1(e){return ne.call(cf,e)?!0:ne.call(lf,e)?!1:z1.test(e)?cf[e]=!0:(lf[e]=!0,!1)}function Vo(e,t,i){if(A1(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function qo(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function Oa(e,t,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+r)}}function oa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E1(e,t,i){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(m){i=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xc(e){if(!e._valueTracker){var t=df(e)?"checked":"value";e._valueTracker=E1(e,t,""+e[t])}}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=df(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}function Go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var D1=/[\n"\\]/g;function sa(e){return e.replace(D1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bc(e,t,i,r,c,u,m,w){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+oa(t)):e.value!==""+oa(t)&&(e.value=""+oa(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?yc(e,m,oa(t)):i!=null?yc(e,m,oa(i)):r!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+oa(w):e.removeAttribute("name")}function pf(e,t,i,r,c,u,m,w){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){xc(e);return}i=i!=null?""+oa(i):"",t=t!=null?""+oa(t):i,w||t===e.value||(e.value=t),e.defaultValue=t}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),xc(e)}function yc(e,t,i){t==="number"&&Go(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function vi(e,t,i,r){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&r&&(e[i].defaultSelected=!0)}else{for(i=""+oa(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ff(e,t,i){if(t!=null&&(t=""+oa(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+oa(i):""}function gf(e,t,i,r){if(t==null){if(r!=null){if(i!=null)throw Error(l(92));if(we(r)){if(1<r.length)throw Error(l(93));r=r[0]}i=r}i==null&&(i=""),t=i}i=oa(t),e.defaultValue=i,r=e.textContent,r===i&&r!==""&&r!==null&&(e.value=r),xc(e)}function ji(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var R1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mf(e,t,i){var r=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,i):typeof i!="number"||i===0||R1.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function hf(e,t,i){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in t)r=t[c],t.hasOwnProperty(c)&&i[c]!==r&&mf(e,c,r)}else for(var u in t)t.hasOwnProperty(u)&&mf(e,u,t[u])}function vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return O1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var jc=null;function wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,Si=null;function xf(e){var t=xi(e);if(t&&(e=t.stateNode)){var i=e[Ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(bc(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+sa(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var c=r[Ut]||null;if(!c)throw Error(l(90));bc(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<i.length;t++)r=i[t],r.form===e.form&&uf(r)}break e;case"textarea":ff(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&vi(e,!!i.multiple,t,!1)}}}var Sc=!1;function bf(e,t,i){if(Sc)return e(t,i);Sc=!0;try{var r=e(t);return r}finally{if(Sc=!1,(wi!==null||Si!==null)&&(Bs(),wi&&(t=wi,e=Si,Si=wi=null,xf(t),e)))for(t=0;t<e.length;t++)xf(e[t])}}function br(e,t){var i=e.stateNode;if(i===null)return null;var r=i[Ut]||null;if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(l(231,t,typeof i));return i}var Ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(Ba)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){kc=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{kc=!1}var dn=null,Nc=null,Jo=null;function yf(){if(Jo)return Jo;var e,t=Nc,i=t.length,r,c="value"in dn?dn.value:dn.textContent,u=c.length;for(e=0;e<i&&t[e]===c[e];e++);var m=i-e;for(r=1;r<=m&&t[i-r]===c[u-r];r++);return Jo=c.slice(e,1<r?1-r:void 0)}function Qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function vf(){return!1}function Ft(e){function t(i,r,c,u,m){this._reactName=i,this._targetInst=c,this.type=r,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(i=e[w],this[w]=i?i(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zo:vf,this.isPropagationStopped=vf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=Ft(Pn),vr=v({},Pn,{view:0,detail:0}),_1=Ft(vr),Cc,Tc,jr,es=v({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Cc=e.screenX-jr.screenX,Tc=e.screenY-jr.screenY):Tc=Cc=0,jr=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),jf=Ft(es),B1=v({},es,{dataTransfer:0}),L1=Ft(B1),U1=v({},vr,{relatedTarget:0}),zc=Ft(U1),F1=v({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),W1=Ft(F1),H1=v({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P1=Ft(H1),$1=v({},Pn,{data:0}),wf=Ft($1),I1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V1[e])?!!t[e]:!1}function Ac(){return q1}var G1=v({},vr,{key:function(e){if(e.key){var t=I1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),X1=Ft(G1),J1=v({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=Ft(J1),Q1=v({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),Z1=Ft(Q1),K1=v({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=Ft(K1),ty=v({},es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Ft(ty),ny=v({},Pn,{newState:0,oldState:0}),iy=Ft(ny),ry=[9,13,27,32],Ec=Ba&&"CompositionEvent"in window,wr=null;Ba&&"documentMode"in document&&(wr=document.documentMode);var oy=Ba&&"TextEvent"in window&&!wr,kf=Ba&&(!Ec||wr&&8<wr&&11>=wr),Nf=" ",Cf=!1;function Tf(e,t){switch(e){case"keyup":return ry.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ki=!1;function sy(e,t){switch(e){case"compositionend":return zf(t);case"keypress":return t.which!==32?null:(Cf=!0,Nf);case"textInput":return e=t.data,e===Nf&&Cf?null:e;default:return null}}function ly(e,t){if(ki)return e==="compositionend"||!Ec&&Tf(e,t)?(e=yf(),Jo=Nc=dn=null,ki=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kf&&t.locale!=="ko"?null:t.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cy[e.type]:t==="textarea"}function Ef(e,t,i,r){wi?Si?Si.push(r):Si=[r]:wi=r,t=$s(t,"onChange"),0<t.length&&(i=new Ko("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var Sr=null,kr=null;function dy(e){ph(e,0)}function ts(e){var t=xr(e);if(uf(t))return e}function Df(e,t){if(e==="change")return t}var Rf=!1;if(Ba){var Dc;if(Ba){var Rc="oninput"in document;if(!Rc){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),Rc=typeof Mf.oninput=="function"}Dc=Rc}else Dc=!1;Rf=Dc&&(!document.documentMode||9<document.documentMode)}function Of(){Sr&&(Sr.detachEvent("onpropertychange",_f),kr=Sr=null)}function _f(e){if(e.propertyName==="value"&&ts(kr)){var t=[];Ef(t,kr,e,wc(e)),bf(dy,t)}}function uy(e,t,i){e==="focusin"?(Of(),Sr=t,kr=i,Sr.attachEvent("onpropertychange",_f)):e==="focusout"&&Of()}function py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ts(kr)}function fy(e,t){if(e==="click")return ts(t)}function gy(e,t){if(e==="input"||e==="change")return ts(t)}function my(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:my;function Nr(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var c=i[r];if(!ne.call(t,c)||!Jt(e[c],t[c]))return!1}return!0}function Bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var i=Bf(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Bf(i)}}function Uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ff(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Go(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Go(e.document)}return t}function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hy=Ba&&"documentMode"in document&&11>=document.documentMode,Ni=null,Oc=null,Cr=null,_c=!1;function Wf(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;_c||Ni==null||Ni!==Go(r)||(r=Ni,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&Nr(Cr,r)||(Cr=r,r=$s(Oc,"onSelect"),0<r.length&&(t=new Ko("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=Ni)))}function $n(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Ci={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionrun:$n("Transition","TransitionRun"),transitionstart:$n("Transition","TransitionStart"),transitioncancel:$n("Transition","TransitionCancel"),transitionend:$n("Transition","TransitionEnd")},Bc={},Hf={};Ba&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function In(e){if(Bc[e])return Bc[e];if(!Ci[e])return e;var t=Ci[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Hf)return Bc[e]=t[i];return e}var Pf=In("animationend"),$f=In("animationiteration"),If=In("animationstart"),xy=In("transitionrun"),by=In("transitionstart"),yy=In("transitioncancel"),Yf=In("transitionend"),Vf=new Map,Lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lc.push("scrollEnd");function ya(e,t){Vf.set(e,t),Hn(t,[e])}var as=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},la=[],Ti=0,Uc=0;function ns(){for(var e=Ti,t=Uc=Ti=0;t<e;){var i=la[t];la[t++]=null;var r=la[t];la[t++]=null;var c=la[t];la[t++]=null;var u=la[t];if(la[t++]=null,r!==null&&c!==null){var m=r.pending;m===null?c.next=c:(c.next=m.next,m.next=c),r.pending=c}u!==0&&qf(i,c,u)}}function is(e,t,i,r){la[Ti++]=e,la[Ti++]=t,la[Ti++]=i,la[Ti++]=r,Uc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Fc(e,t,i,r){return is(e,t,i,r),rs(e)}function Yn(e,t){return is(e,null,null,t),rs(e)}function qf(e,t,i){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i);for(var c=!1,u=e.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-Xt(i),e=u.hiddenUpdates,r=e[c],r===null?e[c]=[t]:r.push(t),t.lane=i|536870912),u):null}function rs(e){if(50<Gr)throw Gr=0,Gd=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zi={};function vy(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,i,r){return new vy(e,t,i,r)}function Wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function La(e,t){var i=e.alternate;return i===null?(i=Qt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Gf(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function os(e,t,i,r,c,u){var m=0;if(r=e,typeof e=="function")Wc(e)&&(m=1);else if(typeof e=="string")m=N2(e,i,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=Qt(31,i,t,c),e.elementType=de,e.lanes=u,e;case z:return Vn(i.children,c,u,t);case M:m=8,c|=24;break;case E:return e=Qt(12,i,t,c|2),e.elementType=E,e.lanes=u,e;case X:return e=Qt(13,i,t,c),e.elementType=X,e.lanes=u,e;case D:return e=Qt(19,i,t,c),e.elementType=D,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:m=10;break e;case S:m=9;break e;case P:m=11;break e;case W:m=14;break e;case V:m=16,r=null;break e}m=29,i=Error(l(130,e===null?"null":typeof e,"")),r=null}return t=Qt(m,i,t,c),t.elementType=e,t.type=r,t.lanes=u,t}function Vn(e,t,i,r){return e=Qt(7,e,r,t),e.lanes=i,e}function Hc(e,t,i){return e=Qt(6,e,null,t),e.lanes=i,e}function Xf(e){var t=Qt(18,null,null,0);return t.stateNode=e,t}function Pc(e,t,i){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jf=new WeakMap;function ca(e,t){if(typeof e=="object"&&e!==null){var i=Jf.get(e);return i!==void 0?i:(t={value:e,source:t,stack:L(t)},Jf.set(e,t),t)}return{value:e,source:t,stack:L(t)}}var Ai=[],Ei=0,ss=null,Tr=0,da=[],ua=0,un=null,Ca=1,Ta="";function Ua(e,t){Ai[Ei++]=Tr,Ai[Ei++]=ss,ss=e,Tr=t}function Qf(e,t,i){da[ua++]=Ca,da[ua++]=Ta,da[ua++]=un,un=e;var r=Ca;e=Ta;var c=32-Xt(r)-1;r&=~(1<<c),i+=1;var u=32-Xt(t)+c;if(30<u){var m=c-c%5;u=(r&(1<<m)-1).toString(32),r>>=m,c-=m,Ca=1<<32-Xt(t)+c|i<<c|r,Ta=u+e}else Ca=1<<u|i<<c|r,Ta=e}function $c(e){e.return!==null&&(Ua(e,1),Qf(e,1,0))}function Ic(e){for(;e===ss;)ss=Ai[--Ei],Ai[Ei]=null,Tr=Ai[--Ei],Ai[Ei]=null;for(;e===un;)un=da[--ua],da[ua]=null,Ta=da[--ua],da[ua]=null,Ca=da[--ua],da[ua]=null}function Zf(e,t){da[ua++]=Ca,da[ua++]=Ta,da[ua++]=un,Ca=t.id,Ta=t.overflow,un=e}var Nt=null,tt=null,Fe=!1,pn=null,pa=!1,Yc=Error(l(519));function fn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zr(ca(t,e)),Yc}function Kf(e){var t=e.stateNode,i=e.type,r=e.memoizedProps;switch(t[kt]=e,t[Ut]=r,i){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(i=0;i<Jr.length;i++)_e(Jr[i],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),pf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),gf(t,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||r.suppressHydrationWarning===!0||hh(t.textContent,i)?(r.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),r.onScroll!=null&&_e("scroll",t),r.onScrollEnd!=null&&_e("scrollend",t),r.onClick!=null&&(t.onclick=_a),t=!0):t=!1,t||fn(e,!0)}function eg(e){for(Nt=e.return;Nt;)switch(Nt.tag){case 5:case 31:case 13:pa=!1;return;case 27:case 3:pa=!0;return;default:Nt=Nt.return}}function Di(e){if(e!==Nt)return!1;if(!Fe)return eg(e),Fe=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||cu(e.type,e.memoizedProps)),i=!i),i&&tt&&fn(e),eg(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));tt=Nh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));tt=Nh(e)}else t===27?(t=tt,Tn(e.type)?(e=gu,gu=null,tt=e):tt=t):tt=Nt?ga(e.stateNode.nextSibling):null;return!0}function qn(){tt=Nt=null,Fe=!1}function Vc(){var e=pn;return e!==null&&($t===null?$t=e:$t.push.apply($t,e),pn=null),e}function zr(e){pn===null?pn=[e]:pn.push(e)}var qc=j(null),Gn=null,Fa=null;function gn(e,t,i){q(qc,t._currentValue),t._currentValue=i}function Wa(e){e._currentValue=qc.current,C(qc)}function Gc(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function Xc(e,t,i,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var m=c.child;u=u.firstContext;e:for(;u!==null;){var w=u;u=c;for(var _=0;_<t.length;_++)if(w.context===t[_]){u.lanes|=i,w=u.alternate,w!==null&&(w.lanes|=i),Gc(u.return,i,e),r||(m=null);break e}u=w.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(l(341));m.lanes|=i,u=m.alternate,u!==null&&(u.lanes|=i),Gc(m,i,e),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===e){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function Ri(e,t,i,r){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(l(387));if(m=m.memoizedProps,m!==null){var w=c.type;Jt(c.pendingProps.value,m.value)||(e!==null?e.push(w):e=[w])}}else if(c===be.current){if(m=c.alternate,m===null)throw Error(l(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(to):e=[to])}c=c.return}e!==null&&Xc(t,e,i,r),t.flags|=262144}function ls(e){for(e=e.firstContext;e!==null;){if(!Jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xn(e){Gn=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return tg(Gn,e)}function cs(e,t){return Gn===null&&Xn(e),tg(e,t)}function tg(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},Fa===null){if(e===null)throw Error(l(308));Fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Fa=Fa.next=t;return i}var jy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},wy=n.unstable_scheduleCallback,Sy=n.unstable_NormalPriority,ft={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new jy,data:new Map,refCount:0}}function Ar(e){e.refCount--,e.refCount===0&&wy(Sy,function(){e.controller.abort()})}var Er=null,Qc=0,Mi=0,Oi=null;function ky(e,t){if(Er===null){var i=Er=[];Qc=0,Mi=eu(),Oi={status:"pending",value:void 0,then:function(r){i.push(r)}}}return Qc++,t.then(ag,ag),t}function ag(){if(--Qc===0&&Er!==null){Oi!==null&&(Oi.status="fulfilled");var e=Er;Er=null,Mi=0,Oi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ny(e,t){var i=[],r={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var c=0;c<i.length;c++)(0,i[c])(t)},function(c){for(r.status="rejected",r.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),r}var ng=F.S;F.S=function(e,t){Wm=Ze(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ky(e,t),ng!==null&&ng(e,t)};var Jn=j(null);function Zc(){var e=Jn.current;return e!==null?e:Je.pooledCache}function ds(e,t){t===null?q(Jn,Jn.current):q(Jn,t.pool)}function ig(){var e=Zc();return e===null?null:{parent:ft._currentValue,pool:e}}var _i=Error(l(460)),Kc=Error(l(474)),us=Error(l(542)),ps={then:function(){}};function rg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function og(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(_a,_a),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lg(e),e;default:if(typeof t.status=="string")t.then(_a,_a);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=r}},function(r){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lg(e),e}throw Zn=t,_i}}function Qn(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Zn=i,_i):i}}var Zn=null;function sg(){if(Zn===null)throw Error(l(459));var e=Zn;return Zn=null,e}function lg(e){if(e===_i||e===us)throw Error(l(483))}var Bi=null,Dr=0;function fs(e){var t=Dr;return Dr+=1,Bi===null&&(Bi=[]),og(Bi,e,t)}function Rr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gs(e,t){throw t.$$typeof===T?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cg(e){function t(Y,U){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[U],Y.flags|=16):Q.push(U)}}function i(Y,U){if(!e)return null;for(;U!==null;)t(Y,U),U=U.sibling;return null}function r(Y){for(var U=new Map;Y!==null;)Y.key!==null?U.set(Y.key,Y):U.set(Y.index,Y),Y=Y.sibling;return U}function c(Y,U){return Y=La(Y,U),Y.index=0,Y.sibling=null,Y}function u(Y,U,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<U?(Y.flags|=67108866,U):Q):(Y.flags|=67108866,U)):(Y.flags|=1048576,U)}function m(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,U,Q,le){return U===null||U.tag!==6?(U=Hc(Q,Y.mode,le),U.return=Y,U):(U=c(U,Q),U.return=Y,U)}function _(Y,U,Q,le){var Ne=Q.type;return Ne===z?re(Y,U,Q.props.children,le,Q.key):U!==null&&(U.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===V&&Qn(Ne)===U.type)?(U=c(U,Q.props),Rr(U,Q),U.return=Y,U):(U=os(Q.type,Q.key,Q.props,null,Y.mode,le),Rr(U,Q),U.return=Y,U)}function Z(Y,U,Q,le){return U===null||U.tag!==4||U.stateNode.containerInfo!==Q.containerInfo||U.stateNode.implementation!==Q.implementation?(U=Pc(Q,Y.mode,le),U.return=Y,U):(U=c(U,Q.children||[]),U.return=Y,U)}function re(Y,U,Q,le,Ne){return U===null||U.tag!==7?(U=Vn(Q,Y.mode,le,Ne),U.return=Y,U):(U=c(U,Q),U.return=Y,U)}function ue(Y,U,Q){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Hc(""+U,Y.mode,Q),U.return=Y,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case R:return Q=os(U.type,U.key,U.props,null,Y.mode,Q),Rr(Q,U),Q.return=Y,Q;case k:return U=Pc(U,Y.mode,Q),U.return=Y,U;case V:return U=Qn(U),ue(Y,U,Q)}if(we(U)||pe(U))return U=Vn(U,Y.mode,Q,null),U.return=Y,U;if(typeof U.then=="function")return ue(Y,fs(U),Q);if(U.$$typeof===A)return ue(Y,cs(Y,U),Q);gs(Y,U)}return null}function ee(Y,U,Q,le){var Ne=U!==null?U.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ne!==null?null:w(Y,U,""+Q,le);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case R:return Q.key===Ne?_(Y,U,Q,le):null;case k:return Q.key===Ne?Z(Y,U,Q,le):null;case V:return Q=Qn(Q),ee(Y,U,Q,le)}if(we(Q)||pe(Q))return Ne!==null?null:re(Y,U,Q,le,null);if(typeof Q.then=="function")return ee(Y,U,fs(Q),le);if(Q.$$typeof===A)return ee(Y,U,cs(Y,Q),le);gs(Y,Q)}return null}function ae(Y,U,Q,le,Ne){if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return Y=Y.get(Q)||null,w(U,Y,""+le,Ne);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case R:return Y=Y.get(le.key===null?Q:le.key)||null,_(U,Y,le,Ne);case k:return Y=Y.get(le.key===null?Q:le.key)||null,Z(U,Y,le,Ne);case V:return le=Qn(le),ae(Y,U,Q,le,Ne)}if(we(le)||pe(le))return Y=Y.get(Q)||null,re(U,Y,le,Ne,null);if(typeof le.then=="function")return ae(Y,U,Q,fs(le),Ne);if(le.$$typeof===A)return ae(Y,U,Q,cs(U,le),Ne);gs(U,le)}return null}function ve(Y,U,Q,le){for(var Ne=null,He=null,Se=U,Re=U=0,Le=null;Se!==null&&Re<Q.length;Re++){Se.index>Re?(Le=Se,Se=null):Le=Se.sibling;var Pe=ee(Y,Se,Q[Re],le);if(Pe===null){Se===null&&(Se=Le);break}e&&Se&&Pe.alternate===null&&t(Y,Se),U=u(Pe,U,Re),He===null?Ne=Pe:He.sibling=Pe,He=Pe,Se=Le}if(Re===Q.length)return i(Y,Se),Fe&&Ua(Y,Re),Ne;if(Se===null){for(;Re<Q.length;Re++)Se=ue(Y,Q[Re],le),Se!==null&&(U=u(Se,U,Re),He===null?Ne=Se:He.sibling=Se,He=Se);return Fe&&Ua(Y,Re),Ne}for(Se=r(Se);Re<Q.length;Re++)Le=ae(Se,Y,Re,Q[Re],le),Le!==null&&(e&&Le.alternate!==null&&Se.delete(Le.key===null?Re:Le.key),U=u(Le,U,Re),He===null?Ne=Le:He.sibling=Le,He=Le);return e&&Se.forEach(function(Rn){return t(Y,Rn)}),Fe&&Ua(Y,Re),Ne}function Te(Y,U,Q,le){if(Q==null)throw Error(l(151));for(var Ne=null,He=null,Se=U,Re=U=0,Le=null,Pe=Q.next();Se!==null&&!Pe.done;Re++,Pe=Q.next()){Se.index>Re?(Le=Se,Se=null):Le=Se.sibling;var Rn=ee(Y,Se,Pe.value,le);if(Rn===null){Se===null&&(Se=Le);break}e&&Se&&Rn.alternate===null&&t(Y,Se),U=u(Rn,U,Re),He===null?Ne=Rn:He.sibling=Rn,He=Rn,Se=Le}if(Pe.done)return i(Y,Se),Fe&&Ua(Y,Re),Ne;if(Se===null){for(;!Pe.done;Re++,Pe=Q.next())Pe=ue(Y,Pe.value,le),Pe!==null&&(U=u(Pe,U,Re),He===null?Ne=Pe:He.sibling=Pe,He=Pe);return Fe&&Ua(Y,Re),Ne}for(Se=r(Se);!Pe.done;Re++,Pe=Q.next())Pe=ae(Se,Y,Re,Pe.value,le),Pe!==null&&(e&&Pe.alternate!==null&&Se.delete(Pe.key===null?Re:Pe.key),U=u(Pe,U,Re),He===null?Ne=Pe:He.sibling=Pe,He=Pe);return e&&Se.forEach(function(B2){return t(Y,B2)}),Fe&&Ua(Y,Re),Ne}function Xe(Y,U,Q,le){if(typeof Q=="object"&&Q!==null&&Q.type===z&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case R:e:{for(var Ne=Q.key;U!==null;){if(U.key===Ne){if(Ne=Q.type,Ne===z){if(U.tag===7){i(Y,U.sibling),le=c(U,Q.props.children),le.return=Y,Y=le;break e}}else if(U.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===V&&Qn(Ne)===U.type){i(Y,U.sibling),le=c(U,Q.props),Rr(le,Q),le.return=Y,Y=le;break e}i(Y,U);break}else t(Y,U);U=U.sibling}Q.type===z?(le=Vn(Q.props.children,Y.mode,le,Q.key),le.return=Y,Y=le):(le=os(Q.type,Q.key,Q.props,null,Y.mode,le),Rr(le,Q),le.return=Y,Y=le)}return m(Y);case k:e:{for(Ne=Q.key;U!==null;){if(U.key===Ne)if(U.tag===4&&U.stateNode.containerInfo===Q.containerInfo&&U.stateNode.implementation===Q.implementation){i(Y,U.sibling),le=c(U,Q.children||[]),le.return=Y,Y=le;break e}else{i(Y,U);break}else t(Y,U);U=U.sibling}le=Pc(Q,Y.mode,le),le.return=Y,Y=le}return m(Y);case V:return Q=Qn(Q),Xe(Y,U,Q,le)}if(we(Q))return ve(Y,U,Q,le);if(pe(Q)){if(Ne=pe(Q),typeof Ne!="function")throw Error(l(150));return Q=Ne.call(Q),Te(Y,U,Q,le)}if(typeof Q.then=="function")return Xe(Y,U,fs(Q),le);if(Q.$$typeof===A)return Xe(Y,U,cs(Y,Q),le);gs(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,U!==null&&U.tag===6?(i(Y,U.sibling),le=c(U,Q),le.return=Y,Y=le):(i(Y,U),le=Hc(Q,Y.mode,le),le.return=Y,Y=le),m(Y)):i(Y,U)}return function(Y,U,Q,le){try{Dr=0;var Ne=Xe(Y,U,Q,le);return Bi=null,Ne}catch(Se){if(Se===_i||Se===us)throw Se;var He=Qt(29,Se,null,Y.mode);return He.lanes=le,He.return=Y,He}}}var Kn=cg(!0),dg=cg(!1),mn=!1;function ed(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($e&2)!==0){var c=r.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),r.pending=t,t=rs(e),qf(e,null,i),t}return is(e,r,t,i),rs(e)}function Mr(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,ef(e,i)}}function ad(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var c=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?c=u=m:u=u.next=m,i=i.next}while(i!==null);u===null?c=u=t:u=u.next=t}else c=u=t;i={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var nd=!1;function Or(){if(nd){var e=Oi;if(e!==null)throw e}}function _r(e,t,i,r){nd=!1;var c=e.updateQueue;mn=!1;var u=c.firstBaseUpdate,m=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var _=w,Z=_.next;_.next=null,m===null?u=Z:m.next=Z,m=_;var re=e.alternate;re!==null&&(re=re.updateQueue,w=re.lastBaseUpdate,w!==m&&(w===null?re.firstBaseUpdate=Z:w.next=Z,re.lastBaseUpdate=_))}if(u!==null){var ue=c.baseState;m=0,re=Z=_=null,w=u;do{var ee=w.lane&-536870913,ae=ee!==w.lane;if(ae?(Be&ee)===ee:(r&ee)===ee){ee!==0&&ee===Mi&&(nd=!0),re!==null&&(re=re.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ve=e,Te=w;ee=t;var Xe=i;switch(Te.tag){case 1:if(ve=Te.payload,typeof ve=="function"){ue=ve.call(Xe,ue,ee);break e}ue=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Te.payload,ee=typeof ve=="function"?ve.call(Xe,ue,ee):ve,ee==null)break e;ue=v({},ue,ee);break e;case 2:mn=!0}}ee=w.callback,ee!==null&&(e.flags|=64,ae&&(e.flags|=8192),ae=c.callbacks,ae===null?c.callbacks=[ee]:ae.push(ee))}else ae={lane:ee,tag:w.tag,payload:w.payload,callback:w.callback,next:null},re===null?(Z=re=ae,_=ue):re=re.next=ae,m|=ee;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;ae=w,w=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);re===null&&(_=ue),c.baseState=_,c.firstBaseUpdate=Z,c.lastBaseUpdate=re,u===null&&(c.shared.lanes=0),wn|=m,e.lanes=m,e.memoizedState=ue}}function ug(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function pg(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)ug(i[e],t)}var Li=j(null),ms=j(0);function fg(e,t){e=Xa,q(ms,e),q(Li,t),Xa=e|t.baseLanes}function id(){q(ms,Xa),q(Li,Li.current)}function rd(){Xa=ms.current,C(Li),C(ms)}var Zt=j(null),fa=null;function bn(e){var t=e.alternate;q(dt,dt.current&1),q(Zt,e),fa===null&&(t===null||Li.current!==null||t.memoizedState!==null)&&(fa=e)}function od(e){q(dt,dt.current),q(Zt,e),fa===null&&(fa=e)}function gg(e){e.tag===22?(q(dt,dt.current),q(Zt,e),fa===null&&(fa=e)):yn()}function yn(){q(dt,dt.current),q(Zt,Zt.current)}function Kt(e){C(Zt),fa===e&&(fa=null),C(dt)}var dt=j(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||pu(i)||fu(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=0,Ee=null,qe=null,gt=null,xs=!1,Ui=!1,ei=!1,bs=0,Br=0,Fi=null,Cy=0;function st(){throw Error(l(321))}function sd(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Jt(e[i],t[i]))return!1;return!0}function ld(e,t,i,r,c,u){return Ha=u,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?Qg:Sd,ei=!1,u=i(r,c),ei=!1,Ui&&(u=hg(t,i,r,c)),mg(e),u}function mg(e){F.H=Fr;var t=qe!==null&&qe.next!==null;if(Ha=0,gt=qe=Ee=null,xs=!1,Br=0,Fi=null,t)throw Error(l(300));e===null||mt||(e=e.dependencies,e!==null&&ls(e)&&(mt=!0))}function hg(e,t,i,r){Ee=e;var c=0;do{if(Ui&&(Fi=null),Br=0,Ui=!1,25<=c)throw Error(l(301));if(c+=1,gt=qe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}F.H=Zg,u=t(i,r)}while(Ui);return u}function Ty(){var e=F.H,t=e.useState()[0];return t=typeof t.then=="function"?Lr(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(Ee.flags|=1024),t}function cd(){var e=bs!==0;return bs=0,e}function dd(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function ud(e){if(xs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xs=!1}Ha=0,gt=qe=Ee=null,Ui=!1,Br=bs=0,Fi=null}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ee.memoizedState=gt=e:gt=gt.next=e,gt}function ut(){if(qe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=gt===null?Ee.memoizedState:gt.next;if(t!==null)gt=t,qe=e;else{if(e===null)throw Ee.alternate===null?Error(l(467)):Error(l(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},gt===null?Ee.memoizedState=gt=e:gt=gt.next=e}return gt}function ys(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lr(e){var t=Br;return Br+=1,Fi===null&&(Fi=[]),e=og(Fi,e,t),t=Ee,(gt===null?t.memoizedState:gt.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?Qg:Sd),e}function vs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Lr(e);if(e.$$typeof===A)return Ct(e)}throw Error(l(438,String(e)))}function pd(e){var t=null,i=Ee.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var r=Ee.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=ys(),Ee.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),r=0;r<e;r++)i[r]=he;return t.index++,i}function Pa(e,t){return typeof t=="function"?t(e):t}function js(e){var t=ut();return fd(t,qe,e)}function fd(e,t,i){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=i;var c=e.baseQueue,u=r.pending;if(u!==null){if(c!==null){var m=c.next;c.next=u.next,u.next=m}t.baseQueue=c=u,r.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var w=m=null,_=null,Z=t,re=!1;do{var ue=Z.lane&-536870913;if(ue!==Z.lane?(Be&ue)===ue:(Ha&ue)===ue){var ee=Z.revertLane;if(ee===0)_!==null&&(_=_.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ue===Mi&&(re=!0);else if((Ha&ee)===ee){Z=Z.next,ee===Mi&&(re=!0);continue}else ue={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},_===null?(w=_=ue,m=u):_=_.next=ue,Ee.lanes|=ee,wn|=ee;ue=Z.action,ei&&i(u,ue),u=Z.hasEagerState?Z.eagerState:i(u,ue)}else ee={lane:ue,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},_===null?(w=_=ee,m=u):_=_.next=ee,Ee.lanes|=ue,wn|=ue;Z=Z.next}while(Z!==null&&Z!==t);if(_===null?m=u:_.next=w,!Jt(u,e.memoizedState)&&(mt=!0,re&&(i=Oi,i!==null)))throw i;e.memoizedState=u,e.baseState=m,e.baseQueue=_,r.lastRenderedState=u}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function gd(e){var t=ut(),i=t.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var r=i.dispatch,c=i.pending,u=t.memoizedState;if(c!==null){i.pending=null;var m=c=c.next;do u=e(u,m.action),m=m.next;while(m!==c);Jt(u,t.memoizedState)||(mt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,r]}function xg(e,t,i){var r=Ee,c=ut(),u=Fe;if(u){if(i===void 0)throw Error(l(407));i=i()}else i=t();var m=!Jt((qe||c).memoizedState,i);if(m&&(c.memoizedState=i,mt=!0),c=c.queue,xd(vg.bind(null,r,c,e),[e]),c.getSnapshot!==t||m||gt!==null&&gt.memoizedState.tag&1){if(r.flags|=2048,Wi(9,{destroy:void 0},yg.bind(null,r,c,i,t),null),Je===null)throw Error(l(349));u||(Ha&127)!==0||bg(r,t,i)}return i}function bg(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ee.updateQueue,t===null?(t=ys(),Ee.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function yg(e,t,i,r){t.value=i,t.getSnapshot=r,jg(t)&&wg(e)}function vg(e,t,i){return i(function(){jg(t)&&wg(e)})}function jg(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Jt(e,i)}catch{return!0}}function wg(e){var t=Yn(e,2);t!==null&&It(t,e,2)}function md(e){var t=Mt();if(typeof e=="function"){var i=e;if(e=i(),ei){ln(!0);try{i()}finally{ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t}function Sg(e,t,i,r){return e.baseState=i,fd(e,qe,typeof r=="function"?r:Pa)}function zy(e,t,i,r,c){if(ks(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};F.T!==null?i(!0):u.isTransition=!1,r(u),i=t.pending,i===null?(u.next=t.pending=u,kg(t,u)):(u.next=i.next,t.pending=i.next=u)}}function kg(e,t){var i=t.action,r=t.payload,c=e.state;if(t.isTransition){var u=F.T,m={};F.T=m;try{var w=i(c,r),_=F.S;_!==null&&_(m,w),Ng(e,t,w)}catch(Z){hd(e,t,Z)}finally{u!==null&&m.types!==null&&(u.types=m.types),F.T=u}}else try{u=i(c,r),Ng(e,t,u)}catch(Z){hd(e,t,Z)}}function Ng(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Cg(e,t,r)},function(r){return hd(e,t,r)}):Cg(e,t,i)}function Cg(e,t,i){t.status="fulfilled",t.value=i,Tg(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,kg(e,i)))}function hd(e,t,i){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=i,Tg(t),t=t.next;while(t!==r)}e.action=null}function Tg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zg(e,t){return t}function Ag(e,t){if(Fe){var i=Je.formState;if(i!==null){e:{var r=Ee;if(Fe){if(tt){t:{for(var c=tt,u=pa;c.nodeType!==8;){if(!u){c=null;break t}if(c=ga(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){tt=ga(c.nextSibling),r=c.data==="F!";break e}}fn(r)}r=!1}r&&(t=i[0])}}return i=Mt(),i.memoizedState=i.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zg,lastRenderedState:t},i.queue=r,i=Gg.bind(null,Ee,r),r.dispatch=i,r=md(!1),u=wd.bind(null,Ee,!1,r.queue),r=Mt(),c={state:t,dispatch:null,action:e,pending:null},r.queue=c,i=zy.bind(null,Ee,c,u,i),c.dispatch=i,r.memoizedState=e,[t,i,!1]}function Eg(e){var t=ut();return Dg(t,qe,e)}function Dg(e,t,i){if(t=fd(e,t,zg)[0],e=js(Pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Lr(t)}catch(m){throw m===_i?us:m}else r=t;t=ut();var c=t.queue,u=c.dispatch;return i!==t.memoizedState&&(Ee.flags|=2048,Wi(9,{destroy:void 0},Ay.bind(null,c,i),null)),[r,u,e]}function Ay(e,t){e.action=t}function Rg(e){var t=ut(),i=qe;if(i!==null)return Dg(t,i,e);ut(),t=t.memoizedState,i=ut();var r=i.queue.dispatch;return i.memoizedState=e,[t,r,!1]}function Wi(e,t,i,r){return e={tag:e,create:i,deps:r,inst:t,next:null},t=Ee.updateQueue,t===null&&(t=ys(),Ee.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e),e}function Mg(){return ut().memoizedState}function ws(e,t,i,r){var c=Mt();Ee.flags|=e,c.memoizedState=Wi(1|t,{destroy:void 0},i,r===void 0?null:r)}function Ss(e,t,i,r){var c=ut();r=r===void 0?null:r;var u=c.memoizedState.inst;qe!==null&&r!==null&&sd(r,qe.memoizedState.deps)?c.memoizedState=Wi(t,u,i,r):(Ee.flags|=e,c.memoizedState=Wi(1|t,u,i,r))}function Og(e,t){ws(8390656,8,e,t)}function xd(e,t){Ss(2048,8,e,t)}function Ey(e){Ee.flags|=4;var t=Ee.updateQueue;if(t===null)t=ys(),Ee.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function _g(e){var t=ut().memoizedState;return Ey({ref:t,nextImpl:e}),function(){if(($e&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Bg(e,t){return Ss(4,2,e,t)}function Lg(e,t){return Ss(4,4,e,t)}function Ug(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fg(e,t,i){i=i!=null?i.concat([e]):null,Ss(4,4,Ug.bind(null,t,e),i)}function bd(){}function Wg(e,t){var i=ut();t=t===void 0?null:t;var r=i.memoizedState;return t!==null&&sd(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function Hg(e,t){var i=ut();t=t===void 0?null:t;var r=i.memoizedState;if(t!==null&&sd(t,r[1]))return r[0];if(r=e(),ei){ln(!0);try{e()}finally{ln(!1)}}return i.memoizedState=[r,t],r}function yd(e,t,i){return i===void 0||(Ha&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=Pm(),Ee.lanes|=e,wn|=e,i)}function Pg(e,t,i,r){return Jt(i,t)?i:Li.current!==null?(e=yd(e,i,r),Jt(e,t)||(mt=!0),e):(Ha&42)===0||(Ha&1073741824)!==0&&(Be&261930)===0?(mt=!0,e.memoizedState=i):(e=Pm(),Ee.lanes|=e,wn|=e,t)}function $g(e,t,i,r,c){var u=ie.p;ie.p=u!==0&&8>u?u:8;var m=F.T,w={};F.T=w,wd(e,!1,t,i);try{var _=c(),Z=F.S;if(Z!==null&&Z(w,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var re=Ny(_,r);Ur(e,t,re,aa(e))}else Ur(e,t,r,aa(e))}catch(ue){Ur(e,t,{then:function(){},status:"rejected",reason:ue},aa())}finally{ie.p=u,m!==null&&w.types!==null&&(m.types=w.types),F.T=m}}function Dy(){}function vd(e,t,i,r){if(e.tag!==5)throw Error(l(476));var c=Ig(e).queue;$g(e,c,t,fe,i===null?Dy:function(){return Yg(e),i(r)})}function Ig(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:fe},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yg(e){var t=Ig(e);t.next===null&&(t=e.alternate.memoizedState),Ur(e,t.next.queue,{},aa())}function jd(){return Ct(to)}function Vg(){return ut().memoizedState}function qg(){return ut().memoizedState}function Ry(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=aa();e=hn(i);var r=xn(t,e,i);r!==null&&(It(r,t,i),Mr(r,t,i)),t={cache:Jc()},e.payload=t;return}t=t.return}}function My(e,t,i){var r=aa();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ks(e)?Xg(t,i):(i=Fc(e,t,i,r),i!==null&&(It(i,e,r),Jg(i,t,r)))}function Gg(e,t,i){var r=aa();Ur(e,t,i,r)}function Ur(e,t,i,r){var c={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ks(e))Xg(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,w=u(m,i);if(c.hasEagerState=!0,c.eagerState=w,Jt(w,m))return is(e,t,c,0),Je===null&&ns(),!1}catch{}if(i=Fc(e,t,c,r),i!==null)return It(i,e,r),Jg(i,t,r),!0}return!1}function wd(e,t,i,r){if(r={lane:2,revertLane:eu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(l(479))}else t=Fc(e,i,r,2),t!==null&&It(t,e,2)}function ks(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Xg(e,t){Ui=xs=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Jg(e,t,i){if((i&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,ef(e,i)}}var Fr={readContext:Ct,use:vs,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};Fr.useEffectEvent=st;var Qg={readContext:Ct,use:vs,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Og,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,ws(4194308,4,Ug.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){ws(4,2,e,t)},useMemo:function(e,t){var i=Mt();t=t===void 0?null:t;var r=e();if(ei){ln(!0);try{e()}finally{ln(!1)}}return i.memoizedState=[r,t],r},useReducer:function(e,t,i){var r=Mt();if(i!==void 0){var c=i(t);if(ei){ln(!0);try{i(t)}finally{ln(!1)}}}else c=t;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=My.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:function(e){e=md(e);var t=e.queue,i=Gg.bind(null,Ee,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:bd,useDeferredValue:function(e,t){var i=Mt();return yd(i,e,t)},useTransition:function(){var e=md(!1);return e=$g.bind(null,Ee,e.queue,!0,!1),Mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var r=Ee,c=Mt();if(Fe){if(i===void 0)throw Error(l(407));i=i()}else{if(i=t(),Je===null)throw Error(l(349));(Be&127)!==0||bg(r,t,i)}c.memoizedState=i;var u={value:i,getSnapshot:t};return c.queue=u,Og(vg.bind(null,r,u,e),[e]),r.flags|=2048,Wi(9,{destroy:void 0},yg.bind(null,r,u,i,t),null),i},useId:function(){var e=Mt(),t=Je.identifierPrefix;if(Fe){var i=Ta,r=Ca;i=(r&~(1<<32-Xt(r)-1)).toString(32)+i,t="_"+t+"R_"+i,i=bs++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=Cy++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jd,useFormState:Ag,useActionState:Ag,useOptimistic:function(e){var t=Mt();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=wd.bind(null,Ee,!0,i),i.dispatch=t,[e,t]},useMemoCache:pd,useCacheRefresh:function(){return Mt().memoizedState=Ry.bind(null,Ee)},useEffectEvent:function(e){var t=Mt(),i={impl:e};return t.memoizedState=i,function(){if(($e&2)!==0)throw Error(l(440));return i.impl.apply(void 0,arguments)}}},Sd={readContext:Ct,use:vs,useCallback:Wg,useContext:Ct,useEffect:xd,useImperativeHandle:Fg,useInsertionEffect:Bg,useLayoutEffect:Lg,useMemo:Hg,useReducer:js,useRef:Mg,useState:function(){return js(Pa)},useDebugValue:bd,useDeferredValue:function(e,t){var i=ut();return Pg(i,qe.memoizedState,e,t)},useTransition:function(){var e=js(Pa)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Lr(e),t]},useSyncExternalStore:xg,useId:Vg,useHostTransitionStatus:jd,useFormState:Eg,useActionState:Eg,useOptimistic:function(e,t){var i=ut();return Sg(i,qe,e,t)},useMemoCache:pd,useCacheRefresh:qg};Sd.useEffectEvent=_g;var Zg={readContext:Ct,use:vs,useCallback:Wg,useContext:Ct,useEffect:xd,useImperativeHandle:Fg,useInsertionEffect:Bg,useLayoutEffect:Lg,useMemo:Hg,useReducer:gd,useRef:Mg,useState:function(){return gd(Pa)},useDebugValue:bd,useDeferredValue:function(e,t){var i=ut();return qe===null?yd(i,e,t):Pg(i,qe.memoizedState,e,t)},useTransition:function(){var e=gd(Pa)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Lr(e),t]},useSyncExternalStore:xg,useId:Vg,useHostTransitionStatus:jd,useFormState:Rg,useActionState:Rg,useOptimistic:function(e,t){var i=ut();return qe!==null?Sg(i,qe,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:pd,useCacheRefresh:qg};Zg.useEffectEvent=_g;function kd(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:v({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Nd={enqueueSetState:function(e,t,i){e=e._reactInternals;var r=aa(),c=hn(r);c.payload=t,i!=null&&(c.callback=i),t=xn(e,c,r),t!==null&&(It(t,e,r),Mr(t,e,r))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=aa(),c=hn(r);c.tag=1,c.payload=t,i!=null&&(c.callback=i),t=xn(e,c,r),t!==null&&(It(t,e,r),Mr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=aa(),r=hn(i);r.tag=2,t!=null&&(r.callback=t),t=xn(e,r,i),t!==null&&(It(t,e,i),Mr(t,e,i))}};function Kg(e,t,i,r,c,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,m):t.prototype&&t.prototype.isPureReactComponent?!Nr(i,r)||!Nr(c,u):!0}function em(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&Nd.enqueueReplaceState(t,t.state,null)}function ti(e,t){var i=t;if("ref"in t){i={};for(var r in t)r!=="ref"&&(i[r]=t[r])}if(e=e.defaultProps){i===t&&(i=v({},i));for(var c in e)i[c]===void 0&&(i[c]=e[c])}return i}function tm(e){as(e)}function am(e){console.error(e)}function nm(e){as(e)}function Ns(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function im(e,t,i){try{var r=e.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Cd(e,t,i){return i=hn(i),i.tag=3,i.payload={element:null},i.callback=function(){Ns(e,t)},i}function rm(e){return e=hn(e),e.tag=3,e}function om(e,t,i,r){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;e.payload=function(){return c(u)},e.callback=function(){im(t,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){im(t,i,r),typeof c!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function Oy(e,t,i,r,c){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=i.alternate,t!==null&&Ri(t,i,c,!0),i=Zt.current,i!==null){switch(i.tag){case 31:case 13:return fa===null?Ls():i.alternate===null&&lt===0&&(lt=3),i.flags&=-257,i.flags|=65536,i.lanes=c,r===ps?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([r]):t.add(r),Qd(e,r,c)),!1;case 22:return i.flags|=65536,r===ps?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([r]):i.add(r)),Qd(e,r,c)),!1}throw Error(l(435,i.tag))}return Qd(e,r,c),Ls(),!1}if(Fe)return t=Zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,r!==Yc&&(e=Error(l(422),{cause:r}),zr(ca(e,i)))):(r!==Yc&&(t=Error(l(423),{cause:r}),zr(ca(t,i))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ca(r,i),c=Cd(e.stateNode,r,c),ad(e,c),lt!==4&&(lt=2)),!1;var u=Error(l(520),{cause:r});if(u=ca(u,i),qr===null?qr=[u]:qr.push(u),lt!==4&&(lt=2),t===null)return!0;r=ca(r,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=c&-c,i.lanes|=e,e=Cd(i.stateNode,r,e),ad(i,e),!1;case 1:if(t=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Sn===null||!Sn.has(u))))return i.flags|=65536,c&=-c,i.lanes|=c,c=rm(c),om(c,e,i,r),ad(i,c),!1}i=i.return}while(i!==null);return!1}var Td=Error(l(461)),mt=!1;function Tt(e,t,i,r){t.child=e===null?dg(t,null,i,r):Kn(t,e.child,i,r)}function sm(e,t,i,r,c){i=i.render;var u=t.ref;if("ref"in r){var m={};for(var w in r)w!=="ref"&&(m[w]=r[w])}else m=r;return Xn(t),r=ld(e,t,i,m,u,c),w=cd(),e!==null&&!mt?(dd(e,t,c),$a(e,t,c)):(Fe&&w&&$c(t),t.flags|=1,Tt(e,t,r,c),t.child)}function lm(e,t,i,r,c){if(e===null){var u=i.type;return typeof u=="function"&&!Wc(u)&&u.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=u,cm(e,t,u,r,c)):(e=os(i.type,null,r,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!_d(e,c)){var m=u.memoizedProps;if(i=i.compare,i=i!==null?i:Nr,i(m,r)&&e.ref===t.ref)return $a(e,t,c)}return t.flags|=1,e=La(u,r),e.ref=t.ref,e.return=t,t.child=e}function cm(e,t,i,r,c){if(e!==null){var u=e.memoizedProps;if(Nr(u,r)&&e.ref===t.ref)if(mt=!1,t.pendingProps=r=u,_d(e,c))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,$a(e,t,c)}return zd(e,t,i,r,c)}function dm(e,t,i,r){var c=r.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~u}else r=0,t.child=null;return um(e,t,u,i,r)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ds(t,u!==null?u.cachePool:null),u!==null?fg(t,u):id(),gg(t);else return r=t.lanes=536870912,um(e,t,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(ds(t,u.cachePool),fg(t,u),yn(),t.memoizedState=null):(e!==null&&ds(t,null),id(),yn());return Tt(e,t,c,i),t.child}function Wr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function um(e,t,i,r,c){var u=Zc();return u=u===null?null:{parent:ft._currentValue,pool:u},t.memoizedState={baseLanes:i,cachePool:u},e!==null&&ds(t,null),id(),gg(t),e!==null&&Ri(e,t,r,!0),t.childLanes=c,null}function Cs(e,t){return t=zs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pm(e,t,i){return Kn(t,e.child,null,i),e=Cs(t,t.pendingProps),e.flags|=2,Kt(t),t.memoizedState=null,e}function _y(e,t,i){var r=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Fe){if(r.mode==="hidden")return e=Cs(t,r),t.lanes=536870912,Wr(null,e);if(od(t),(e=tt)?(e=kh(e,pa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:un!==null?{id:Ca,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},i=Xf(e),i.return=t,t.child=i,Nt=t,tt=null)):e=null,e===null)throw fn(t);return t.lanes=536870912,null}return Cs(t,r)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(od(t),c)if(t.flags&256)t.flags&=-257,t=pm(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(mt||Ri(e,t,i,!1),c=(i&e.childLanes)!==0,mt||c){if(r=Je,r!==null&&(m=tf(r,i),m!==0&&m!==u.retryLane))throw u.retryLane=m,Yn(e,m),It(r,e,m),Td;Ls(),t=pm(e,t,i)}else e=u.treeContext,tt=ga(m.nextSibling),Nt=t,Fe=!0,pn=null,pa=!1,e!==null&&Zf(t,e),t=Cs(t,r),t.flags|=4096;return t}return e=La(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ts(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function zd(e,t,i,r,c){return Xn(t),i=ld(e,t,i,r,void 0,c),r=cd(),e!==null&&!mt?(dd(e,t,c),$a(e,t,c)):(Fe&&r&&$c(t),t.flags|=1,Tt(e,t,i,c),t.child)}function fm(e,t,i,r,c,u){return Xn(t),t.updateQueue=null,i=hg(t,r,i,c),mg(e),r=cd(),e!==null&&!mt?(dd(e,t,u),$a(e,t,u)):(Fe&&r&&$c(t),t.flags|=1,Tt(e,t,i,u),t.child)}function gm(e,t,i,r,c){if(Xn(t),t.stateNode===null){var u=zi,m=i.contextType;typeof m=="object"&&m!==null&&(u=Ct(m)),u=new i(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Nd,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},ed(t),m=i.contextType,u.context=typeof m=="object"&&m!==null?Ct(m):zi,u.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(kd(t,i,m,r),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Nd.enqueueReplaceState(u,u.state,null),_r(t,r,u,c),Or(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var w=t.memoizedProps,_=ti(i,w);u.props=_;var Z=u.context,re=i.contextType;m=zi,typeof re=="object"&&re!==null&&(m=Ct(re));var ue=i.getDerivedStateFromProps;re=typeof ue=="function"||typeof u.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,re||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(w||Z!==m)&&em(t,u,r,m),mn=!1;var ee=t.memoizedState;u.state=ee,_r(t,r,u,c),Or(),Z=t.memoizedState,w||ee!==Z||mn?(typeof ue=="function"&&(kd(t,i,ue,r),Z=t.memoizedState),(_=mn||Kg(t,i,_,r,ee,Z,m))?(re||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=Z),u.props=r,u.state=Z,u.context=m,r=_):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,td(e,t),m=t.memoizedProps,re=ti(i,m),u.props=re,ue=t.pendingProps,ee=u.context,Z=i.contextType,_=zi,typeof Z=="object"&&Z!==null&&(_=Ct(Z)),w=i.getDerivedStateFromProps,(Z=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==ue||ee!==_)&&em(t,u,r,_),mn=!1,ee=t.memoizedState,u.state=ee,_r(t,r,u,c),Or();var ae=t.memoizedState;m!==ue||ee!==ae||mn||e!==null&&e.dependencies!==null&&ls(e.dependencies)?(typeof w=="function"&&(kd(t,i,w,r),ae=t.memoizedState),(re=mn||Kg(t,i,re,r,ee,ae,_)||e!==null&&e.dependencies!==null&&ls(e.dependencies))?(Z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ae,_),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ae,_)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ae),u.props=r,u.state=ae,u.context=_,r=re):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,Ts(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=Kn(t,e.child,null,c),t.child=Kn(t,null,i,c)):Tt(e,t,i,c),t.memoizedState=u.state,e=t.child):e=$a(e,t,c),e}function mm(e,t,i,r){return qn(),t.flags|=256,Tt(e,t,i,r),t.child}var Ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ed(e){return{baseLanes:e,cachePool:ig()}}function Dd(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=ta),e}function hm(e,t,i){var r=t.pendingProps,c=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(dt.current&2)!==0),m&&(c=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Fe){if(c?bn(t):yn(),(e=tt)?(e=kh(e,pa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:un!==null?{id:Ca,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},i=Xf(e),i.return=t,t.child=i,Nt=t,tt=null)):e=null,e===null)throw fn(t);return fu(e)?t.lanes=32:t.lanes=536870912,null}var w=r.children;return r=r.fallback,c?(yn(),c=t.mode,w=zs({mode:"hidden",children:w},c),r=Vn(r,c,i,null),w.return=t,r.return=t,w.sibling=r,t.child=w,r=t.child,r.memoizedState=Ed(i),r.childLanes=Dd(e,m,i),t.memoizedState=Ad,Wr(null,r)):(bn(t),Rd(t,w))}var _=e.memoizedState;if(_!==null&&(w=_.dehydrated,w!==null)){if(u)t.flags&256?(bn(t),t.flags&=-257,t=Md(e,t,i)):t.memoizedState!==null?(yn(),t.child=e.child,t.flags|=128,t=null):(yn(),w=r.fallback,c=t.mode,r=zs({mode:"visible",children:r.children},c),w=Vn(w,c,i,null),w.flags|=2,r.return=t,w.return=t,r.sibling=w,t.child=r,Kn(t,e.child,null,i),r=t.child,r.memoizedState=Ed(i),r.childLanes=Dd(e,m,i),t.memoizedState=Ad,t=Wr(null,r));else if(bn(t),fu(w)){if(m=w.nextSibling&&w.nextSibling.dataset,m)var Z=m.dgst;m=Z,r=Error(l(419)),r.stack="",r.digest=m,zr({value:r,source:null,stack:null}),t=Md(e,t,i)}else if(mt||Ri(e,t,i,!1),m=(i&e.childLanes)!==0,mt||m){if(m=Je,m!==null&&(r=tf(m,i),r!==0&&r!==_.retryLane))throw _.retryLane=r,Yn(e,r),It(m,e,r),Td;pu(w)||Ls(),t=Md(e,t,i)}else pu(w)?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,tt=ga(w.nextSibling),Nt=t,Fe=!0,pn=null,pa=!1,e!==null&&Zf(t,e),t=Rd(t,r.children),t.flags|=4096);return t}return c?(yn(),w=r.fallback,c=t.mode,_=e.child,Z=_.sibling,r=La(_,{mode:"hidden",children:r.children}),r.subtreeFlags=_.subtreeFlags&65011712,Z!==null?w=La(Z,w):(w=Vn(w,c,i,null),w.flags|=2),w.return=t,r.return=t,r.sibling=w,t.child=r,Wr(null,r),r=t.child,w=e.child.memoizedState,w===null?w=Ed(i):(c=w.cachePool,c!==null?(_=ft._currentValue,c=c.parent!==_?{parent:_,pool:_}:c):c=ig(),w={baseLanes:w.baseLanes|i,cachePool:c}),r.memoizedState=w,r.childLanes=Dd(e,m,i),t.memoizedState=Ad,Wr(e.child,r)):(bn(t),i=e.child,e=i.sibling,i=La(i,{mode:"visible",children:r.children}),i.return=t,i.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=i,t.memoizedState=null,i)}function Rd(e,t){return t=zs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zs(e,t){return e=Qt(22,e,null,t),e.lanes=0,e}function Md(e,t,i){return Kn(t,e.child,null,i),e=Rd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xm(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gc(e.return,t,i)}function Od(e,t,i,r,c,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:c,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=c,m.treeForkCount=u)}function bm(e,t,i){var r=t.pendingProps,c=r.revealOrder,u=r.tail;r=r.children;var m=dt.current,w=(m&2)!==0;if(w?(m=m&1|2,t.flags|=128):m&=1,q(dt,m),Tt(e,t,r,i),r=Fe?Tr:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xm(e,i,t);else if(e.tag===19)xm(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&hs(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Od(t,!1,c,i,u,r);break;case"backwards":case"unstable_legacy-backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&hs(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Od(t,!0,i,null,u,r);break;case"together":Od(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function $a(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(Ri(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,i=La(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=La(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function _d(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ls(e)))}function By(e,t,i){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),gn(t,ft,e.memoizedState.cache),qn();break;case 27:case 5:Ke(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:gn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,od(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(bn(t),t.flags|=128,null):(i&t.child.childLanes)!==0?hm(e,t,i):(bn(t),e=$a(e,t,i),e!==null?e.sibling:null);bn(t);break;case 19:var c=(e.flags&128)!==0;if(r=(i&t.childLanes)!==0,r||(Ri(e,t,i,!1),r=(i&t.childLanes)!==0),c){if(r)return bm(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),q(dt,dt.current),r)break;return null;case 22:return t.lanes=0,dm(e,t,i,t.pendingProps);case 24:gn(t,ft,e.memoizedState.cache)}return $a(e,t,i)}function ym(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!_d(e,i)&&(t.flags&128)===0)return mt=!1,By(e,t,i);mt=(e.flags&131072)!==0}else mt=!1,Fe&&(t.flags&1048576)!==0&&Qf(t,Tr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Qn(t.elementType),t.type=e,typeof e=="function")Wc(e)?(r=ti(e,r),t.tag=1,t=gm(null,t,e,r,i)):(t.tag=0,t=zd(null,t,e,r,i));else{if(e!=null){var c=e.$$typeof;if(c===P){t.tag=11,t=sm(null,t,e,r,i);break e}else if(c===W){t.tag=14,t=lm(null,t,e,r,i);break e}}throw t=me(e)||e,Error(l(306,t,""))}}return t;case 0:return zd(e,t,t.type,t.pendingProps,i);case 1:return r=t.type,c=ti(r,t.pendingProps),gm(e,t,r,c,i);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(l(387));r=t.pendingProps;var u=t.memoizedState;c=u.element,td(e,t),_r(t,r,null,i);var m=t.memoizedState;if(r=m.cache,gn(t,ft,r),r!==u.cache&&Xc(t,[ft],i,!0),Or(),r=m.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=mm(e,t,r,i);break e}else if(r!==c){c=ca(Error(l(424)),t),zr(c),t=mm(e,t,r,i);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,tt=ga(e.firstChild),Nt=t,Fe=!0,pn=null,pa=!0,i=dg(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(qn(),r===c){t=$a(e,t,i);break e}Tt(e,t,r,i)}t=t.child}return t;case 26:return Ts(e,t),e===null?(i=Eh(t.type,null,t.pendingProps,null))?t.memoizedState=i:Fe||(i=t.type,e=t.pendingProps,r=Is(ge.current).createElement(i),r[kt]=t,r[Ut]=e,zt(r,i,e),jt(r),t.stateNode=r):t.memoizedState=Eh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ke(t),e===null&&Fe&&(r=t.stateNode=Th(t.type,t.pendingProps,ge.current),Nt=t,pa=!0,c=tt,Tn(t.type)?(gu=c,tt=ga(r.firstChild)):tt=c),Tt(e,t,t.pendingProps.children,i),Ts(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Fe&&((c=r=tt)&&(r=p2(r,t.type,t.pendingProps,pa),r!==null?(t.stateNode=r,Nt=t,tt=ga(r.firstChild),pa=!1,c=!0):c=!1),c||fn(t)),Ke(t),c=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,r=u.children,cu(c,u)?r=null:m!==null&&cu(c,m)&&(t.flags|=32),t.memoizedState!==null&&(c=ld(e,t,Ty,null,null,i),to._currentValue=c),Ts(e,t),Tt(e,t,r,i),t.child;case 6:return e===null&&Fe&&((e=i=tt)&&(i=f2(i,t.pendingProps,pa),i!==null?(t.stateNode=i,Nt=t,tt=null,e=!0):e=!1),e||fn(t)),null;case 13:return hm(e,t,i);case 4:return ke(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,i):Tt(e,t,r,i),t.child;case 11:return sm(e,t,t.type,t.pendingProps,i);case 7:return Tt(e,t,t.pendingProps,i),t.child;case 8:return Tt(e,t,t.pendingProps.children,i),t.child;case 12:return Tt(e,t,t.pendingProps.children,i),t.child;case 10:return r=t.pendingProps,gn(t,t.type,r.value),Tt(e,t,r.children,i),t.child;case 9:return c=t.type._context,r=t.pendingProps.children,Xn(t),c=Ct(c),r=r(c),t.flags|=1,Tt(e,t,r,i),t.child;case 14:return lm(e,t,t.type,t.pendingProps,i);case 15:return cm(e,t,t.type,t.pendingProps,i);case 19:return bm(e,t,i);case 31:return _y(e,t,i);case 22:return dm(e,t,i,t.pendingProps);case 24:return Xn(t),r=Ct(ft),e===null?(c=Zc(),c===null&&(c=Je,u=Jc(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=i),c=u),t.memoizedState={parent:r,cache:c},ed(t),gn(t,ft,c)):((e.lanes&i)!==0&&(td(e,t),_r(t,null,null,i),Or()),c=e.memoizedState,u=t.memoizedState,c.parent!==r?(c={parent:r,cache:r},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),gn(t,ft,r)):(r=u.cache,gn(t,ft,r),r!==c.cache&&Xc(t,[ft],i,!0))),Tt(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Ia(e){e.flags|=4}function Bd(e,t,i,r,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Vm())e.flags|=8192;else throw Zn=ps,Kc}else e.flags&=-16777217}function vm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_h(t))if(Vm())e.flags|=8192;else throw Zn=ps,Kc}function As(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zp():536870912,e.lanes|=t,Ii|=t)}function Hr(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function Ly(e,t,i){var r=t.pendingProps;switch(Ic(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return i=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Wa(ft),Ce(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Di(t)?Ia(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vc())),at(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(Ia(t),u!==null?(at(t),vm(t,u)):(at(t),Bd(t,c,null,r,i))):u?u!==e.memoizedState?(Ia(t),at(t),vm(t,u)):(at(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ia(t),at(t),Bd(t,c,e,r,i)),null;case 27:if(et(t),i=ge.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ia(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return at(t),null}e=oe.current,Di(t)?Kf(t):(e=Th(c,r,i),t.stateNode=e,Ia(t))}return at(t),null;case 5:if(et(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ia(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return at(t),null}if(u=oe.current,Di(t))Kf(t);else{var m=Is(ge.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?m.createElement(c,{is:r.is}):m.createElement(c)}}u[kt]=t,u[Ut]=r;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(zt(u,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ia(t)}}return at(t),Bd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ia(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(e=ge.current,Di(t)){if(e=t.stateNode,i=t.memoizedProps,r=null,c=Nt,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[kt]=t,e=!!(e.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||hh(e.nodeValue,i)),e||fn(t,!0)}else e=Is(e).createTextNode(r),e[kt]=t,t.stateNode=e}return at(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(r=Di(t),i!==null){if(e===null){if(!r)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[kt]=t}else qn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),e=!1}else i=Vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(Kt(t),t):(Kt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return at(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[kt]=t}else qn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),c=!1}else c=Vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Kt(t),t):(Kt(t),null)}return Kt(t),(t.flags&128)!==0?(t.lanes=i,t):(i=r!==null,e=e!==null&&e.memoizedState!==null,i&&(r=t.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==c&&(r.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),As(t,t.updateQueue),at(t),null);case 4:return Ce(),e===null&&iu(t.stateNode.containerInfo),at(t),null;case 10:return Wa(t.type),at(t),null;case 19:if(C(dt),r=t.memoizedState,r===null)return at(t),null;if(c=(t.flags&128)!==0,u=r.rendering,u===null)if(c)Hr(r,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=hs(e),u!==null){for(t.flags|=128,Hr(r,!1),e=u.updateQueue,t.updateQueue=e,As(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Gf(i,e),i=i.sibling;return q(dt,dt.current&1|2),Fe&&Ua(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ze()>Os&&(t.flags|=128,c=!0,Hr(r,!1),t.lanes=4194304)}else{if(!c)if(e=hs(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,As(t,e),Hr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Fe)return at(t),null}else 2*Ze()-r.renderingStartTime>Os&&i!==536870912&&(t.flags|=128,c=!0,Hr(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ze(),e.sibling=null,i=dt.current,q(dt,c?i&1|2:i&1),Fe&&Ua(t,r.treeForkCount),e):(at(t),null);case 22:case 23:return Kt(t),rd(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(i&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),i=t.updateQueue,i!==null&&As(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==i&&(t.flags|=2048),e!==null&&C(Jn),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Wa(ft),at(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Uy(e,t){switch(Ic(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wa(ft),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return et(t),null;case 31:if(t.memoizedState!==null){if(Kt(t),t.alternate===null)throw Error(l(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Kt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(dt),null;case 4:return Ce(),null;case 10:return Wa(t.type),null;case 22:case 23:return Kt(t),rd(),e!==null&&C(Jn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wa(ft),null;case 25:return null;default:return null}}function jm(e,t){switch(Ic(t),t.tag){case 3:Wa(ft),Ce();break;case 26:case 27:case 5:et(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&Kt(t);break;case 13:Kt(t);break;case 19:C(dt);break;case 10:Wa(t.type);break;case 22:case 23:Kt(t),rd(),e!==null&&C(Jn);break;case 24:Wa(ft)}}function Pr(e,t){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){r=void 0;var u=i.create,m=i.inst;r=u(),m.destroy=r}i=i.next}while(i!==c)}}catch(w){Ve(t,t.return,w)}}function vn(e,t,i){try{var r=t.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var u=c.next;r=u;do{if((r.tag&e)===e){var m=r.inst,w=m.destroy;if(w!==void 0){m.destroy=void 0,c=t;var _=i,Z=w;try{Z()}catch(re){Ve(c,_,re)}}}r=r.next}while(r!==u)}}catch(re){Ve(t,t.return,re)}}function wm(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{pg(t,i)}catch(r){Ve(e,e.return,r)}}}function Sm(e,t,i){i.props=ti(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(r){Ve(e,t,r)}}function $r(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof i=="function"?e.refCleanup=i(r):i.current=r}}catch(c){Ve(e,t,c)}}function za(e,t){var i=e.ref,r=e.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(c){Ve(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){Ve(e,t,c)}else i.current=null}function km(e){var t=e.type,i=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break e;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(c){Ve(e,e.return,c)}}function Ld(e,t,i){try{var r=e.stateNode;o2(r,e.type,i,t),r[Ut]=t}catch(c){Ve(e,e.return,c)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tn(e.type)||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fd(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=_a));else if(r!==4&&(r===27&&Tn(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Fd(e,t,i),e=e.sibling;e!==null;)Fd(e,t,i),e=e.sibling}function Es(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(r!==4&&(r===27&&Tn(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Es(e,t,i),e=e.sibling;e!==null;)Es(e,t,i),e=e.sibling}function Cm(e){var t=e.stateNode,i=e.memoizedProps;try{for(var r=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);zt(t,r,i),t[kt]=e,t[Ut]=i}catch(u){Ve(e,e.return,u)}}var Ya=!1,ht=!1,Wd=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,wt=null;function Fy(e,t){if(e=e.containerInfo,su=Qs,e=Ff(e),Mc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var c=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var m=0,w=-1,_=-1,Z=0,re=0,ue=e,ee=null;t:for(;;){for(var ae;ue!==i||c!==0&&ue.nodeType!==3||(w=m+c),ue!==u||r!==0&&ue.nodeType!==3||(_=m+r),ue.nodeType===3&&(m+=ue.nodeValue.length),(ae=ue.firstChild)!==null;)ee=ue,ue=ae;for(;;){if(ue===e)break t;if(ee===i&&++Z===c&&(w=m),ee===u&&++re===r&&(_=m),(ae=ue.nextSibling)!==null)break;ue=ee,ee=ue.parentNode}ue=ae}i=w===-1||_===-1?null:{start:w,end:_}}else i=null}i=i||{start:0,end:0}}else i=null;for(lu={focusedElem:e,selectionRange:i},Qs=!1,wt=t;wt!==null;)if(t=wt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,wt=e;else for(;wt!==null;){switch(t=wt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)c=e[i],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,i=t,c=u.memoizedProps,u=u.memoizedState,r=i.stateNode;try{var ve=ti(i.type,c);e=r.getSnapshotBeforeUpdate(ve,u),r.__reactInternalSnapshotBeforeUpdate=e}catch(Te){Ve(i,i.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)uu(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,wt=e;break}wt=t.return}}function zm(e,t,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:qa(e,i),r&4&&Pr(5,i);break;case 1:if(qa(e,i),r&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(m){Ve(i,i.return,m)}else{var c=ti(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ve(i,i.return,m)}}r&64&&wm(i),r&512&&$r(i,i.return);break;case 3:if(qa(e,i),r&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{pg(e,t)}catch(m){Ve(i,i.return,m)}}break;case 27:t===null&&r&4&&Cm(i);case 26:case 5:qa(e,i),t===null&&r&4&&km(i),r&512&&$r(i,i.return);break;case 12:qa(e,i);break;case 31:qa(e,i),r&4&&Dm(e,i);break;case 13:qa(e,i),r&4&&Rm(e,i),r&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Gy.bind(null,i),g2(e,i))));break;case 22:if(r=i.memoizedState!==null||Ya,!r){t=t!==null&&t.memoizedState!==null||ht,c=Ya;var u=ht;Ya=r,(ht=t)&&!u?Ga(e,i,(i.subtreeFlags&8772)!==0):qa(e,i),Ya=c,ht=u}break;case 30:break;default:qa(e,i)}}function Am(e){var t=e.alternate;t!==null&&(e.alternate=null,Am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var it=null,Wt=!1;function Va(e,t,i){for(i=i.child;i!==null;)Em(e,t,i),i=i.sibling}function Em(e,t,i){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Fn,i)}catch{}switch(i.tag){case 26:ht||za(i,t),Va(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:ht||za(i,t);var r=it,c=Wt;Tn(i.type)&&(it=i.stateNode,Wt=!1),Va(e,t,i),Zr(i.stateNode),it=r,Wt=c;break;case 5:ht||za(i,t);case 6:if(r=it,c=Wt,it=null,Va(e,t,i),it=r,Wt=c,it!==null)if(Wt)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(i.stateNode)}catch(u){Ve(i,t,u)}else try{it.removeChild(i.stateNode)}catch(u){Ve(i,t,u)}break;case 18:it!==null&&(Wt?(e=it,wh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Zi(e)):wh(it,i.stateNode));break;case 4:r=it,c=Wt,it=i.stateNode.containerInfo,Wt=!0,Va(e,t,i),it=r,Wt=c;break;case 0:case 11:case 14:case 15:vn(2,i,t),ht||vn(4,i,t),Va(e,t,i);break;case 1:ht||(za(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"&&Sm(i,t,r)),Va(e,t,i);break;case 21:Va(e,t,i);break;case 22:ht=(r=ht)||i.memoizedState!==null,Va(e,t,i),ht=r;break;default:Va(e,t,i)}}function Dm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zi(e)}catch(i){Ve(t,t.return,i)}}}function Rm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zi(e)}catch(i){Ve(t,t.return,i)}}function Wy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tm),t;default:throw Error(l(435,e.tag))}}function Ds(e,t){var i=Wy(e);t.forEach(function(r){if(!i.has(r)){i.add(r);var c=Xy.bind(null,e,r);r.then(c,c)}})}function Ht(e,t){var i=t.deletions;if(i!==null)for(var r=0;r<i.length;r++){var c=i[r],u=e,m=t,w=m;e:for(;w!==null;){switch(w.tag){case 27:if(Tn(w.type)){it=w.stateNode,Wt=!1;break e}break;case 5:it=w.stateNode,Wt=!1;break e;case 3:case 4:it=w.stateNode.containerInfo,Wt=!0;break e}w=w.return}if(it===null)throw Error(l(160));Em(u,m,c),it=null,Wt=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mm(t,e),t=t.sibling}var va=null;function Mm(e,t){var i=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ht(t,e),Pt(e),r&4&&(vn(3,e,e.return),Pr(3,e),vn(5,e,e.return));break;case 1:Ht(t,e),Pt(e),r&512&&(ht||i===null||za(i,i.return)),r&64&&Ya&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?r:i.concat(r))));break;case 26:var c=va;if(Ht(t,e),Pt(e),r&512&&(ht||i===null||za(i,i.return)),r&4){var u=i!==null?i.memoizedState:null;if(r=e.memoizedState,i===null)if(r===null)if(e.stateNode===null){e:{r=e.type,i=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":u=c.getElementsByTagName("title")[0],(!u||u[hr]||u[kt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(r),c.head.insertBefore(u,c.querySelector("head > title"))),zt(u,r,i),u[kt]=e,jt(u),r=u;break e;case"link":var m=Mh("link","href",c).get(r+(i.href||""));if(m){for(var w=0;w<m.length;w++)if(u=m[w],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){m.splice(w,1);break t}}u=c.createElement(r),zt(u,r,i),c.head.appendChild(u);break;case"meta":if(m=Mh("meta","content",c).get(r+(i.content||""))){for(w=0;w<m.length;w++)if(u=m[w],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){m.splice(w,1);break t}}u=c.createElement(r),zt(u,r,i),c.head.appendChild(u);break;default:throw Error(l(468,r))}u[kt]=e,jt(u),r=u}e.stateNode=r}else Oh(c,e.type,e.stateNode);else e.stateNode=Rh(c,r,e.memoizedProps);else u!==r?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,r===null?Oh(c,e.type,e.stateNode):Rh(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Ld(e,e.memoizedProps,i.memoizedProps)}break;case 27:Ht(t,e),Pt(e),r&512&&(ht||i===null||za(i,i.return)),i!==null&&r&4&&Ld(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Ht(t,e),Pt(e),r&512&&(ht||i===null||za(i,i.return)),e.flags&32){c=e.stateNode;try{ji(c,"")}catch(ve){Ve(e,e.return,ve)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Ld(e,c,i!==null?i.memoizedProps:c)),r&1024&&(Wd=!0);break;case 6:if(Ht(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,i=e.stateNode;try{i.nodeValue=r}catch(ve){Ve(e,e.return,ve)}}break;case 3:if(qs=null,c=va,va=Ys(t.containerInfo),Ht(t,e),va=c,Pt(e),r&4&&i!==null&&i.memoizedState.isDehydrated)try{Zi(t.containerInfo)}catch(ve){Ve(e,e.return,ve)}Wd&&(Wd=!1,Om(e));break;case 4:r=va,va=Ys(e.stateNode.containerInfo),Ht(t,e),Pt(e),va=r;break;case 12:Ht(t,e),Pt(e);break;case 31:Ht(t,e),Pt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ds(e,r)));break;case 13:Ht(t,e),Pt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ms=Ze()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ds(e,r)));break;case 22:c=e.memoizedState!==null;var _=i!==null&&i.memoizedState!==null,Z=Ya,re=ht;if(Ya=Z||c,ht=re||_,Ht(t,e),ht=re,Ya=Z,Pt(e),r&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(i===null||_||Ya||ht||ai(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){_=i=t;try{if(u=_.stateNode,c)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{w=_.stateNode;var ue=_.memoizedProps.style,ee=ue!=null&&ue.hasOwnProperty("display")?ue.display:null;w.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(ve){Ve(_,_.return,ve)}}}else if(t.tag===6){if(i===null){_=t;try{_.stateNode.nodeValue=c?"":_.memoizedProps}catch(ve){Ve(_,_.return,ve)}}}else if(t.tag===18){if(i===null){_=t;try{var ae=_.stateNode;c?Sh(ae,!0):Sh(_.stateNode,!1)}catch(ve){Ve(_,_.return,ve)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(i=r.retryQueue,i!==null&&(r.retryQueue=null,Ds(e,i))));break;case 19:Ht(t,e),Pt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ds(e,r)));break;case 30:break;case 21:break;default:Ht(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{for(var i,r=e.return;r!==null;){if(Nm(r)){i=r;break}r=r.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var c=i.stateNode,u=Ud(e);Es(e,u,c);break;case 5:var m=i.stateNode;i.flags&32&&(ji(m,""),i.flags&=-33);var w=Ud(e);Es(e,w,m);break;case 3:case 4:var _=i.stateNode.containerInfo,Z=Ud(e);Fd(e,Z,_);break;default:throw Error(l(161))}}catch(re){Ve(e,e.return,re)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Om(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zm(e,t.alternate,t),t=t.sibling}function ai(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vn(4,t,t.return),ai(t);break;case 1:za(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Sm(t,t.return,i),ai(t);break;case 27:Zr(t.stateNode);case 26:case 5:za(t,t.return),ai(t);break;case 22:t.memoizedState===null&&ai(t);break;case 30:ai(t);break;default:ai(t)}e=e.sibling}}function Ga(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,c=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:Ga(c,u,i),Pr(4,u);break;case 1:if(Ga(c,u,i),r=u,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Z){Ve(r,r.return,Z)}if(r=u,c=r.updateQueue,c!==null){var w=r.stateNode;try{var _=c.shared.hiddenCallbacks;if(_!==null)for(c.shared.hiddenCallbacks=null,c=0;c<_.length;c++)ug(_[c],w)}catch(Z){Ve(r,r.return,Z)}}i&&m&64&&wm(u),$r(u,u.return);break;case 27:Cm(u);case 26:case 5:Ga(c,u,i),i&&r===null&&m&4&&km(u),$r(u,u.return);break;case 12:Ga(c,u,i);break;case 31:Ga(c,u,i),i&&m&4&&Dm(c,u);break;case 13:Ga(c,u,i),i&&m&4&&Rm(c,u);break;case 22:u.memoizedState===null&&Ga(c,u,i),$r(u,u.return);break;case 30:break;default:Ga(c,u,i)}t=t.sibling}}function Hd(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Ar(i))}function Pd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ar(e))}function ja(e,t,i,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_m(e,t,i,r),t=t.sibling}function _m(e,t,i,r){var c=t.flags;switch(t.tag){case 0:case 11:case 15:ja(e,t,i,r),c&2048&&Pr(9,t);break;case 1:ja(e,t,i,r);break;case 3:ja(e,t,i,r),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ar(e)));break;case 12:if(c&2048){ja(e,t,i,r),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,w=u.onPostCommit;typeof w=="function"&&w(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Ve(t,t.return,_)}}else ja(e,t,i,r);break;case 31:ja(e,t,i,r);break;case 13:ja(e,t,i,r);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?ja(e,t,i,r):Ir(e,t):u._visibility&2?ja(e,t,i,r):(u._visibility|=2,Hi(e,t,i,r,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Hd(m,t);break;case 24:ja(e,t,i,r),c&2048&&Pd(t.alternate,t);break;default:ja(e,t,i,r)}}function Hi(e,t,i,r,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,w=i,_=r,Z=m.flags;switch(m.tag){case 0:case 11:case 15:Hi(u,m,w,_,c),Pr(8,m);break;case 23:break;case 22:var re=m.stateNode;m.memoizedState!==null?re._visibility&2?Hi(u,m,w,_,c):Ir(u,m):(re._visibility|=2,Hi(u,m,w,_,c)),c&&Z&2048&&Hd(m.alternate,m);break;case 24:Hi(u,m,w,_,c),c&&Z&2048&&Pd(m.alternate,m);break;default:Hi(u,m,w,_,c)}t=t.sibling}}function Ir(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,r=t,c=r.flags;switch(r.tag){case 22:Ir(i,r),c&2048&&Hd(r.alternate,r);break;case 24:Ir(i,r),c&2048&&Pd(r.alternate,r);break;default:Ir(i,r)}t=t.sibling}}var Yr=8192;function Pi(e,t,i){if(e.subtreeFlags&Yr)for(e=e.child;e!==null;)Bm(e,t,i),e=e.sibling}function Bm(e,t,i){switch(e.tag){case 26:Pi(e,t,i),e.flags&Yr&&e.memoizedState!==null&&C2(i,va,e.memoizedState,e.memoizedProps);break;case 5:Pi(e,t,i);break;case 3:case 4:var r=va;va=Ys(e.stateNode.containerInfo),Pi(e,t,i),va=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Yr,Yr=16777216,Pi(e,t,i),Yr=r):Pi(e,t,i));break;default:Pi(e,t,i)}}function Lm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];wt=r,Fm(r,e)}Lm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 0:case 11:case 15:Vr(e),e.flags&2048&&vn(9,e,e.return);break;case 3:Vr(e);break;case 12:Vr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rs(e)):Vr(e);break;default:Vr(e)}}function Rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];wt=r,Fm(r,e)}Lm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vn(8,t,t.return),Rs(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,Rs(t));break;default:Rs(t)}e=e.sibling}}function Fm(e,t){for(;wt!==null;){var i=wt;switch(i.tag){case 0:case 11:case 15:vn(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ar(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,wt=r;else e:for(i=e;wt!==null;){r=wt;var c=r.sibling,u=r.return;if(Am(r),r===i){wt=null;break e}if(c!==null){c.return=u,wt=c;break e}wt=u}}}var Hy={getCacheForType:function(e){var t=Ct(ft),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return Ct(ft).controller.signal}},Py=typeof WeakMap=="function"?WeakMap:Map,$e=0,Je=null,Oe=null,Be=0,Ye=0,ea=null,jn=!1,$i=!1,$d=!1,Xa=0,lt=0,wn=0,ni=0,Id=0,ta=0,Ii=0,qr=null,$t=null,Yd=!1,Ms=0,Wm=0,Os=1/0,_s=null,Sn=null,yt=0,kn=null,Yi=null,Ja=0,Vd=0,qd=null,Hm=null,Gr=0,Gd=null;function aa(){return($e&2)!==0&&Be!==0?Be&-Be:F.T!==null?eu():af()}function Pm(){if(ta===0)if((Be&536870912)===0||Fe){var e=$o;$o<<=1,($o&3932160)===0&&($o=262144),ta=e}else ta=536870912;return e=Zt.current,e!==null&&(e.flags|=32),ta}function It(e,t,i){(e===Je&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Vi(e,0),Nn(e,Be,ta,!1)),mr(e,i),(($e&2)===0||e!==Je)&&(e===Je&&(($e&2)===0&&(ni|=i),lt===4&&Nn(e,Be,ta,!1)),Aa(e))}function $m(e,t,i){if(($e&6)!==0)throw Error(l(327));var r=!i&&(t&127)===0&&(t&e.expiredLanes)===0||gr(e,t),c=r?Yy(e,t):Jd(e,t,!0),u=r;do{if(c===0){$i&&!r&&Nn(e,t,0,!1);break}else{if(i=e.current.alternate,u&&!$y(i)){c=Jd(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var w=e;c=qr;var _=w.current.memoizedState.isDehydrated;if(_&&(Vi(w,m).flags|=256),m=Jd(w,m,!1),m!==2){if($d&&!_){w.errorRecoveryDisabledLanes|=u,ni|=u,c=4;break e}u=$t,$t=c,u!==null&&($t===null?$t=u:$t.push.apply($t,u))}c=m}if(u=!1,c!==2)continue}}if(c===1){Vi(e,0),Nn(e,t,0,!0);break}e:{switch(r=e,u=c,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Nn(r,t,ta,!jn);break e;case 2:$t=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=Ms+300-Ze(),10<c)){if(Nn(r,t,ta,!jn),Yo(r,0,!0)!==0)break e;Ja=t,r.timeoutHandle=vh(Im.bind(null,r,i,$t,_s,Yd,t,ta,ni,Ii,jn,u,"Throttled",-0,0),c);break e}Im(r,i,$t,_s,Yd,t,ta,ni,Ii,jn,u,null,-0,0)}}break}while(!0);Aa(e)}function Im(e,t,i,r,c,u,m,w,_,Z,re,ue,ee,ae){if(e.timeoutHandle=-1,ue=t.subtreeFlags,ue&8192||(ue&16785408)===16785408){ue={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},Bm(t,u,ue);var ve=(u&62914560)===u?Ms-Ze():(u&4194048)===u?Wm-Ze():0;if(ve=T2(ue,ve),ve!==null){Ja=u,e.cancelPendingCommit=ve(Zm.bind(null,e,t,u,i,r,c,m,w,_,re,ue,null,ee,ae)),Nn(e,u,m,!Z);return}}Zm(e,t,u,i,r,c,m,w,_)}function $y(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var c=i[r],u=c.getSnapshot;c=c.value;try{if(!Jt(u(),c))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t,i,r){t&=~Id,t&=~ni,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var c=t;0<c;){var u=31-Xt(c),m=1<<u;r[u]=-1,c&=~m}i!==0&&Kp(e,i,t)}function Bs(){return($e&6)===0?(Xr(0),!1):!0}function Xd(){if(Oe!==null){if(Ye===0)var e=Oe.return;else e=Oe,Fa=Gn=null,ud(e),Bi=null,Dr=0,e=Oe;for(;e!==null;)jm(e.alternate,e),e=e.return;Oe=null}}function Vi(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,c2(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Ja=0,Xd(),Je=e,Oe=i=La(e.current,null),Be=t,Ye=0,ea=null,jn=!1,$i=gr(e,t),$d=!1,Ii=ta=Id=ni=wn=lt=0,$t=qr=null,Yd=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var c=31-Xt(r),u=1<<c;t|=e[c],r&=~u}return Xa=t,ns(),i}function Ym(e,t){Ee=null,F.H=Fr,t===_i||t===us?(t=sg(),Ye=3):t===Kc?(t=sg(),Ye=4):Ye=t===Td?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ea=t,Oe===null&&(lt=1,Ns(e,ca(t,e.current)))}function Vm(){var e=Zt.current;return e===null?!0:(Be&4194048)===Be?fa===null:(Be&62914560)===Be||(Be&536870912)!==0?e===fa:!1}function qm(){var e=F.H;return F.H=Fr,e===null?Fr:e}function Gm(){var e=F.A;return F.A=Hy,e}function Ls(){lt=4,jn||(Be&4194048)!==Be&&Zt.current!==null||($i=!0),(wn&134217727)===0&&(ni&134217727)===0||Je===null||Nn(Je,Be,ta,!1)}function Jd(e,t,i){var r=$e;$e|=2;var c=qm(),u=Gm();(Je!==e||Be!==t)&&(_s=null,Vi(e,t)),t=!1;var m=lt;e:do try{if(Ye!==0&&Oe!==null){var w=Oe,_=ea;switch(Ye){case 8:Xd(),m=6;break e;case 3:case 2:case 9:case 6:Zt.current===null&&(t=!0);var Z=Ye;if(Ye=0,ea=null,qi(e,w,_,Z),i&&$i){m=0;break e}break;default:Z=Ye,Ye=0,ea=null,qi(e,w,_,Z)}}Iy(),m=lt;break}catch(re){Ym(e,re)}while(!0);return t&&e.shellSuspendCounter++,Fa=Gn=null,$e=r,F.H=c,F.A=u,Oe===null&&(Je=null,Be=0,ns()),m}function Iy(){for(;Oe!==null;)Xm(Oe)}function Yy(e,t){var i=$e;$e|=2;var r=qm(),c=Gm();Je!==e||Be!==t?(_s=null,Os=Ze()+500,Vi(e,t)):$i=gr(e,t);e:do try{if(Ye!==0&&Oe!==null){t=Oe;var u=ea;t:switch(Ye){case 1:Ye=0,ea=null,qi(e,t,u,1);break;case 2:case 9:if(rg(u)){Ye=0,ea=null,Jm(t);break}t=function(){Ye!==2&&Ye!==9||Je!==e||(Ye=7),Aa(e)},u.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:rg(u)?(Ye=0,ea=null,Jm(t)):(Ye=0,ea=null,qi(e,t,u,7));break;case 5:var m=null;switch(Oe.tag){case 26:m=Oe.memoizedState;case 5:case 27:var w=Oe;if(m?_h(m):w.stateNode.complete){Ye=0,ea=null;var _=w.sibling;if(_!==null)Oe=_;else{var Z=w.return;Z!==null?(Oe=Z,Us(Z)):Oe=null}break t}}Ye=0,ea=null,qi(e,t,u,5);break;case 6:Ye=0,ea=null,qi(e,t,u,6);break;case 8:Xd(),lt=6;break e;default:throw Error(l(462))}}Vy();break}catch(re){Ym(e,re)}while(!0);return Fa=Gn=null,F.H=r,F.A=c,$e=i,Oe!==null?0:(Je=null,Be=0,ns(),lt)}function Vy(){for(;Oe!==null&&!Ie();)Xm(Oe)}function Xm(e){var t=ym(e.alternate,e,Xa);e.memoizedProps=e.pendingProps,t===null?Us(e):Oe=t}function Jm(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=fm(i,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=fm(i,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:ud(t);default:jm(i,t),t=Oe=Gf(t,Xa),t=ym(i,t,Xa)}e.memoizedProps=e.pendingProps,t===null?Us(e):Oe=t}function qi(e,t,i,r){Fa=Gn=null,ud(t),Bi=null,Dr=0;var c=t.return;try{if(Oy(e,c,t,i,Be)){lt=1,Ns(e,ca(i,e.current)),Oe=null;return}}catch(u){if(c!==null)throw Oe=c,u;lt=1,Ns(e,ca(i,e.current)),Oe=null;return}t.flags&32768?(Fe||r===1?e=!0:$i||(Be&536870912)!==0?e=!1:(jn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Zt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Qm(t,e)):Us(t)}function Us(e){var t=e;do{if((t.flags&32768)!==0){Qm(t,jn);return}e=t.return;var i=Ly(t.alternate,t,Xa);if(i!==null){Oe=i;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);lt===0&&(lt=5)}function Qm(e,t){do{var i=Uy(e.alternate,e);if(i!==null){i.flags&=32767,Oe=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){Oe=e;return}Oe=e=i}while(e!==null);lt=6,Oe=null}function Zm(e,t,i,r,c,u,m,w,_){e.cancelPendingCommit=null;do Fs();while(yt!==0);if(($e&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=Uc,N1(e,i,u,m,w,_),e===Je&&(Oe=Je=null,Be=0),Yi=t,kn=e,Ja=i,Vd=u,qd=c,Hm=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jy(nt,function(){return nh(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,c=ie.p,ie.p=2,m=$e,$e|=4;try{Fy(e,t,i)}finally{$e=m,ie.p=c,F.T=r}}yt=1,Km(),eh(),th()}}function Km(){if(yt===1){yt=0;var e=kn,t=Yi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=F.T,F.T=null;var r=ie.p;ie.p=2;var c=$e;$e|=4;try{Mm(t,e);var u=lu,m=Ff(e.containerInfo),w=u.focusedElem,_=u.selectionRange;if(m!==w&&w&&w.ownerDocument&&Uf(w.ownerDocument.documentElement,w)){if(_!==null&&Mc(w)){var Z=_.start,re=_.end;if(re===void 0&&(re=Z),"selectionStart"in w)w.selectionStart=Z,w.selectionEnd=Math.min(re,w.value.length);else{var ue=w.ownerDocument||document,ee=ue&&ue.defaultView||window;if(ee.getSelection){var ae=ee.getSelection(),ve=w.textContent.length,Te=Math.min(_.start,ve),Xe=_.end===void 0?Te:Math.min(_.end,ve);!ae.extend&&Te>Xe&&(m=Xe,Xe=Te,Te=m);var Y=Lf(w,Te),U=Lf(w,Xe);if(Y&&U&&(ae.rangeCount!==1||ae.anchorNode!==Y.node||ae.anchorOffset!==Y.offset||ae.focusNode!==U.node||ae.focusOffset!==U.offset)){var Q=ue.createRange();Q.setStart(Y.node,Y.offset),ae.removeAllRanges(),Te>Xe?(ae.addRange(Q),ae.extend(U.node,U.offset)):(Q.setEnd(U.node,U.offset),ae.addRange(Q))}}}}for(ue=[],ae=w;ae=ae.parentNode;)ae.nodeType===1&&ue.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ue.length;w++){var le=ue[w];le.element.scrollLeft=le.left,le.element.scrollTop=le.top}}Qs=!!su,lu=su=null}finally{$e=c,ie.p=r,F.T=i}}e.current=t,yt=2}}function eh(){if(yt===2){yt=0;var e=kn,t=Yi,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=F.T,F.T=null;var r=ie.p;ie.p=2;var c=$e;$e|=4;try{zm(e,t.alternate,t)}finally{$e=c,ie.p=r,F.T=i}}yt=3}}function th(){if(yt===4||yt===3){yt=0,bt();var e=kn,t=Yi,i=Ja,r=Hm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,Yi=kn=null,ah(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Sn=null),gc(i),t=t.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Fn,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=F.T,c=ie.p,ie.p=2,F.T=null;try{for(var u=e.onRecoverableError,m=0;m<r.length;m++){var w=r[m];u(w.value,{componentStack:w.stack})}}finally{F.T=t,ie.p=c}}(Ja&3)!==0&&Fs(),Aa(e),c=e.pendingLanes,(i&261930)!==0&&(c&42)!==0?e===Gd?Gr++:(Gr=0,Gd=e):Gr=0,Xr(0)}}function ah(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ar(t)))}function Fs(){return Km(),eh(),th(),nh()}function nh(){if(yt!==5)return!1;var e=kn,t=Vd;Vd=0;var i=gc(Ja),r=F.T,c=ie.p;try{ie.p=32>i?32:i,F.T=null,i=qd,qd=null;var u=kn,m=Ja;if(yt=0,Yi=kn=null,Ja=0,($e&6)!==0)throw Error(l(331));var w=$e;if($e|=4,Um(u.current),_m(u,u.current,m,i),$e=w,Xr(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Fn,u)}catch{}return!0}finally{ie.p=c,F.T=r,ah(e,t)}}function ih(e,t,i){t=ca(i,t),t=Cd(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(mr(e,2),Aa(e))}function Ve(e,t,i){if(e.tag===3)ih(e,e,i);else for(;t!==null;){if(t.tag===3){ih(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=ca(i,e),i=rm(2),r=xn(t,i,2),r!==null&&(om(i,r,t,e),mr(r,2),Aa(r));break}}t=t.return}}function Qd(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new Py;var c=new Set;r.set(t,c)}else c=r.get(t),c===void 0&&(c=new Set,r.set(t,c));c.has(i)||($d=!0,c.add(i),e=qy.bind(null,e,t,i),t.then(e,e))}function qy(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Je===e&&(Be&i)===i&&(lt===4||lt===3&&(Be&62914560)===Be&&300>Ze()-Ms?($e&2)===0&&Vi(e,0):Id|=i,Ii===Be&&(Ii=0)),Aa(e)}function rh(e,t){t===0&&(t=Zp()),e=Yn(e,t),e!==null&&(mr(e,t),Aa(e))}function Gy(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),rh(e,i)}function Xy(e,t){var i=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(t),rh(e,i)}function Jy(e,t){return ce(e,t)}var Ws=null,Gi=null,Zd=!1,Hs=!1,Kd=!1,Cn=0;function Aa(e){e!==Gi&&e.next===null&&(Gi===null?Ws=Gi=e:Gi=Gi.next=e),Hs=!0,Zd||(Zd=!0,Zy())}function Xr(e,t){if(!Kd&&Hs){Kd=!0;do for(var i=!1,r=Ws;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var u=0;else{var m=r.suspendedLanes,w=r.pingedLanes;u=(1<<31-Xt(42|e)+1)-1,u&=c&~(m&~w),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,ch(r,u))}else u=Be,u=Yo(r,r===Je?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||gr(r,u)||(i=!0,ch(r,u));r=r.next}while(i);Kd=!1}}function Qy(){oh()}function oh(){Hs=Zd=!1;var e=0;Cn!==0&&l2()&&(e=Cn);for(var t=Ze(),i=null,r=Ws;r!==null;){var c=r.next,u=sh(r,t);u===0?(r.next=null,i===null?Ws=c:i.next=c,c===null&&(Gi=i)):(i=r,(e!==0||(u&3)!==0)&&(Hs=!0)),r=c}yt!==0&&yt!==5||Xr(e),Cn!==0&&(Cn=0)}function sh(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Xt(u),w=1<<m,_=c[m];_===-1?((w&i)===0||(w&r)!==0)&&(c[m]=k1(w,t)):_<=t&&(e.expiredLanes|=w),u&=~w}if(t=Je,i=Be,i=Yo(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,i===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&xe(r),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||gr(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(r!==null&&xe(r),gc(i)){case 2:case 8:i=ze;break;case 32:i=nt;break;case 268435456:i=gi;break;default:i=nt}return r=lh.bind(null,e),i=ce(i,r),e.callbackPriority=t,e.callbackNode=i,t}return r!==null&&r!==null&&xe(r),e.callbackPriority=2,e.callbackNode=null,2}function lh(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Fs()&&e.callbackNode!==i)return null;var r=Be;return r=Yo(e,e===Je?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:($m(e,r,t),sh(e,Ze()),e.callbackNode!=null&&e.callbackNode===i?lh.bind(null,e):null)}function ch(e,t){if(Fs())return null;$m(e,t,!0)}function Zy(){d2(function(){($e&6)!==0?ce(St,Qy):oh()})}function eu(){if(Cn===0){var e=Mi;e===0&&(e=Po,Po<<=1,(Po&261888)===0&&(Po=256)),Cn=e}return Cn}function dh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function uh(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function Ky(e,t,i,r,c){if(t==="submit"&&i&&i.stateNode===c){var u=dh((c[Ut]||null).action),m=r.submitter;m&&(t=(t=m[Ut]||null)?dh(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var w=new Ko("action","action",null,r,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Cn!==0){var _=m?uh(c,m):new FormData(c);vd(i,{pending:!0,data:_,method:c.method,action:u},null,_)}}else typeof u=="function"&&(w.preventDefault(),_=m?uh(c,m):new FormData(c),vd(i,{pending:!0,data:_,method:c.method,action:u},u,_))},currentTarget:c}]})}}for(var tu=0;tu<Lc.length;tu++){var au=Lc[tu],e2=au.toLowerCase(),t2=au[0].toUpperCase()+au.slice(1);ya(e2,"on"+t2)}ya(Pf,"onAnimationEnd"),ya($f,"onAnimationIteration"),ya(If,"onAnimationStart"),ya("dblclick","onDoubleClick"),ya("focusin","onFocus"),ya("focusout","onBlur"),ya(xy,"onTransitionRun"),ya(by,"onTransitionStart"),ya(yy,"onTransitionCancel"),ya(Yf,"onTransitionEnd"),yi("onMouseEnter",["mouseout","mouseover"]),yi("onMouseLeave",["mouseout","mouseover"]),yi("onPointerEnter",["pointerout","pointerover"]),yi("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jr));function ph(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],c=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var m=r.length-1;0<=m;m--){var w=r[m],_=w.instance,Z=w.currentTarget;if(w=w.listener,_!==u&&c.isPropagationStopped())break e;u=w,c.currentTarget=Z;try{u(c)}catch(re){as(re)}c.currentTarget=null,u=_}else for(m=0;m<r.length;m++){if(w=r[m],_=w.instance,Z=w.currentTarget,w=w.listener,_!==u&&c.isPropagationStopped())break e;u=w,c.currentTarget=Z;try{u(c)}catch(re){as(re)}c.currentTarget=null,u=_}}}}function _e(e,t){var i=t[mc];i===void 0&&(i=t[mc]=new Set);var r=e+"__bubble";i.has(r)||(fh(t,e,2,!1),i.add(r))}function nu(e,t,i){var r=0;t&&(r|=4),fh(i,e,r,t)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function iu(e){if(!e[Ps]){e[Ps]=!0,of.forEach(function(i){i!=="selectionchange"&&(a2.has(i)||nu(i,!1,e),nu(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ps]||(t[Ps]=!0,nu("selectionchange",!1,t))}}function fh(e,t,i,r){switch(Ph(t)){case 2:var c=E2;break;case 8:c=D2;break;default:c=yu}i=c.bind(null,t,i,e),c=void 0,!kc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function ru(e,t,i,r,c){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var w=r.stateNode.containerInfo;if(w===c)break;if(m===4)for(m=r.return;m!==null;){var _=m.tag;if((_===3||_===4)&&m.stateNode.containerInfo===c)return;m=m.return}for(;w!==null;){if(m=hi(w),m===null)return;if(_=m.tag,_===5||_===6||_===26||_===27){r=u=m;continue e}w=w.parentNode}}r=r.return}bf(function(){var Z=u,re=wc(i),ue=[];e:{var ee=Vf.get(e);if(ee!==void 0){var ae=Ko,ve=e;switch(e){case"keypress":if(Qo(i)===0)break e;case"keydown":case"keyup":ae=X1;break;case"focusin":ve="focus",ae=zc;break;case"focusout":ve="blur",ae=zc;break;case"beforeblur":case"afterblur":ae=zc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=L1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=Z1;break;case Pf:case $f:case If:ae=W1;break;case Yf:ae=ey;break;case"scroll":case"scrollend":ae=_1;break;case"wheel":ae=ay;break;case"copy":case"cut":case"paste":ae=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=Sf;break;case"toggle":case"beforetoggle":ae=iy}var Te=(t&4)!==0,Xe=!Te&&(e==="scroll"||e==="scrollend"),Y=Te?ee!==null?ee+"Capture":null:ee;Te=[];for(var U=Z,Q;U!==null;){var le=U;if(Q=le.stateNode,le=le.tag,le!==5&&le!==26&&le!==27||Q===null||Y===null||(le=br(U,Y),le!=null&&Te.push(Qr(U,le,Q))),Xe)break;U=U.return}0<Te.length&&(ee=new ae(ee,ve,null,i,re),ue.push({event:ee,listeners:Te}))}}if((t&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",ae=e==="mouseout"||e==="pointerout",ee&&i!==jc&&(ve=i.relatedTarget||i.fromElement)&&(hi(ve)||ve[mi]))break e;if((ae||ee)&&(ee=re.window===re?re:(ee=re.ownerDocument)?ee.defaultView||ee.parentWindow:window,ae?(ve=i.relatedTarget||i.toElement,ae=Z,ve=ve?hi(ve):null,ve!==null&&(Xe=p(ve),Te=ve.tag,ve!==Xe||Te!==5&&Te!==27&&Te!==6)&&(ve=null)):(ae=null,ve=Z),ae!==ve)){if(Te=jf,le="onMouseLeave",Y="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Te=Sf,le="onPointerLeave",Y="onPointerEnter",U="pointer"),Xe=ae==null?ee:xr(ae),Q=ve==null?ee:xr(ve),ee=new Te(le,U+"leave",ae,i,re),ee.target=Xe,ee.relatedTarget=Q,le=null,hi(re)===Z&&(Te=new Te(Y,U+"enter",ve,i,re),Te.target=Q,Te.relatedTarget=Xe,le=Te),Xe=le,ae&&ve)t:{for(Te=n2,Y=ae,U=ve,Q=0,le=Y;le;le=Te(le))Q++;le=0;for(var Ne=U;Ne;Ne=Te(Ne))le++;for(;0<Q-le;)Y=Te(Y),Q--;for(;0<le-Q;)U=Te(U),le--;for(;Q--;){if(Y===U||U!==null&&Y===U.alternate){Te=Y;break t}Y=Te(Y),U=Te(U)}Te=null}else Te=null;ae!==null&&gh(ue,ee,ae,Te,!1),ve!==null&&Xe!==null&&gh(ue,Xe,ve,Te,!0)}}e:{if(ee=Z?xr(Z):window,ae=ee.nodeName&&ee.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ee.type==="file")var He=Df;else if(Af(ee))if(Rf)He=gy;else{He=py;var Se=uy}else ae=ee.nodeName,!ae||ae.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?Z&&vc(Z.elementType)&&(He=Df):He=fy;if(He&&(He=He(e,Z))){Ef(ue,He,i,re);break e}Se&&Se(e,ee,Z),e==="focusout"&&Z&&ee.type==="number"&&Z.memoizedProps.value!=null&&yc(ee,"number",ee.value)}switch(Se=Z?xr(Z):window,e){case"focusin":(Af(Se)||Se.contentEditable==="true")&&(Ni=Se,Oc=Z,Cr=null);break;case"focusout":Cr=Oc=Ni=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,Wf(ue,i,re);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":Wf(ue,i,re)}var Re;if(Ec)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else ki?Tf(e,i)&&(Le="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Le="onCompositionStart");Le&&(kf&&i.locale!=="ko"&&(ki||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&ki&&(Re=yf()):(dn=re,Nc="value"in dn?dn.value:dn.textContent,ki=!0)),Se=$s(Z,Le),0<Se.length&&(Le=new wf(Le,e,null,i,re),ue.push({event:Le,listeners:Se}),Re?Le.data=Re:(Re=zf(i),Re!==null&&(Le.data=Re)))),(Re=oy?sy(e,i):ly(e,i))&&(Le=$s(Z,"onBeforeInput"),0<Le.length&&(Se=new wf("onBeforeInput","beforeinput",null,i,re),ue.push({event:Se,listeners:Le}),Se.data=Re)),Ky(ue,e,Z,i,re)}ph(ue,t)})}function Qr(e,t,i){return{instance:e,listener:t,currentTarget:i}}function $s(e,t){for(var i=t+"Capture",r=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=br(e,i),c!=null&&r.unshift(Qr(e,c,u)),c=br(e,t),c!=null&&r.push(Qr(e,c,u))),e.tag===3)return r;e=e.return}return[]}function n2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gh(e,t,i,r,c){for(var u=t._reactName,m=[];i!==null&&i!==r;){var w=i,_=w.alternate,Z=w.stateNode;if(w=w.tag,_!==null&&_===r)break;w!==5&&w!==26&&w!==27||Z===null||(_=Z,c?(Z=br(i,u),Z!=null&&m.unshift(Qr(i,Z,_))):c||(Z=br(i,u),Z!=null&&m.push(Qr(i,Z,_)))),i=i.return}m.length!==0&&e.push({event:t,listeners:m})}var i2=/\r\n?/g,r2=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace(i2,`
`).replace(r2,"")}function hh(e,t){return t=mh(t),mh(e)===t}function Ge(e,t,i,r,c,u){switch(i){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||ji(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&ji(e,""+r);break;case"className":qo(e,"class",r);break;case"tabIndex":qo(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":qo(e,i,r);break;case"style":hf(e,r,u);break;case"data":if(t!=="object"){qo(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=Xo(""+r),e.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(t!=="input"&&Ge(e,t,"name",c.name,c,null),Ge(e,t,"formEncType",c.formEncType,c,null),Ge(e,t,"formMethod",c.formMethod,c,null),Ge(e,t,"formTarget",c.formTarget,c,null)):(Ge(e,t,"encType",c.encType,c,null),Ge(e,t,"method",c.method,c,null),Ge(e,t,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=Xo(""+r),e.setAttribute(i,r);break;case"onClick":r!=null&&(e.onclick=_a);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}i=Xo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""+r):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":r===!0?e.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(i,r):e.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(i):e.setAttribute(i,r);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Vo(e,"popover",r);break;case"xlinkActuate":Oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Oa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Oa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Oa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Oa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Vo(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=M1.get(i)||i,Vo(e,i,r))}}function ou(e,t,i,r,c,u){switch(i){case"style":hf(e,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"children":typeof r=="string"?ji(e,r):(typeof r=="number"||typeof r=="bigint")&&ji(e,""+r);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"onClick":r!=null&&(e.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sf.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),t=i.slice(2,c?i.length-7:void 0),u=e[Ut]||null,u=u!=null?u[i]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof r=="function")){typeof u!="function"&&u!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,r,c);break e}i in e?e[i]=r:r===!0?e.setAttribute(i,""):Vo(e,i,r)}}}function zt(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var r=!1,c=!1,u;for(u in i)if(i.hasOwnProperty(u)){var m=i[u];if(m!=null)switch(u){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ge(e,t,u,m,i,null)}}c&&Ge(e,t,"srcSet",i.srcSet,i,null),r&&Ge(e,t,"src",i.src,i,null);return;case"input":_e("invalid",e);var w=u=m=c=null,_=null,Z=null;for(r in i)if(i.hasOwnProperty(r)){var re=i[r];if(re!=null)switch(r){case"name":c=re;break;case"type":m=re;break;case"checked":_=re;break;case"defaultChecked":Z=re;break;case"value":u=re;break;case"defaultValue":w=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(l(137,t));break;default:Ge(e,t,r,re,i,null)}}pf(e,u,w,_,Z,m,c,!1);return;case"select":_e("invalid",e),r=m=u=null;for(c in i)if(i.hasOwnProperty(c)&&(w=i[c],w!=null))switch(c){case"value":u=w;break;case"defaultValue":m=w;break;case"multiple":r=w;default:Ge(e,t,c,w,i,null)}t=u,i=m,e.multiple=!!r,t!=null?vi(e,!!r,t,!1):i!=null&&vi(e,!!r,i,!0);return;case"textarea":_e("invalid",e),u=c=r=null;for(m in i)if(i.hasOwnProperty(m)&&(w=i[m],w!=null))switch(m){case"value":r=w;break;case"defaultValue":c=w;break;case"children":u=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(91));break;default:Ge(e,t,m,w,i,null)}gf(e,r,c,u);return;case"option":for(_ in i)i.hasOwnProperty(_)&&(r=i[_],r!=null)&&(_==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(e,t,_,r,i,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(r=0;r<Jr.length;r++)_e(Jr[r],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in i)if(i.hasOwnProperty(Z)&&(r=i[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ge(e,t,Z,r,i,null)}return;default:if(vc(t)){for(re in i)i.hasOwnProperty(re)&&(r=i[re],r!==void 0&&ou(e,t,re,r,i,void 0));return}}for(w in i)i.hasOwnProperty(w)&&(r=i[w],r!=null&&Ge(e,t,w,r,i,null))}function o2(e,t,i,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,m=null,w=null,_=null,Z=null,re=null;for(ae in i){var ue=i[ae];if(i.hasOwnProperty(ae)&&ue!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":_=ue;default:r.hasOwnProperty(ae)||Ge(e,t,ae,null,r,ue)}}for(var ee in r){var ae=r[ee];if(ue=i[ee],r.hasOwnProperty(ee)&&(ae!=null||ue!=null))switch(ee){case"type":u=ae;break;case"name":c=ae;break;case"checked":Z=ae;break;case"defaultChecked":re=ae;break;case"value":m=ae;break;case"defaultValue":w=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(l(137,t));break;default:ae!==ue&&Ge(e,t,ee,ae,r,ue)}}bc(e,m,w,_,Z,re,u,c);return;case"select":ae=m=w=ee=null;for(u in i)if(_=i[u],i.hasOwnProperty(u)&&_!=null)switch(u){case"value":break;case"multiple":ae=_;default:r.hasOwnProperty(u)||Ge(e,t,u,null,r,_)}for(c in r)if(u=r[c],_=i[c],r.hasOwnProperty(c)&&(u!=null||_!=null))switch(c){case"value":ee=u;break;case"defaultValue":w=u;break;case"multiple":m=u;default:u!==_&&Ge(e,t,c,u,r,_)}t=w,i=m,r=ae,ee!=null?vi(e,!!i,ee,!1):!!r!=!!i&&(t!=null?vi(e,!!i,t,!0):vi(e,!!i,i?[]:"",!1));return;case"textarea":ae=ee=null;for(w in i)if(c=i[w],i.hasOwnProperty(w)&&c!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ge(e,t,w,null,r,c)}for(m in r)if(c=r[m],u=i[m],r.hasOwnProperty(m)&&(c!=null||u!=null))switch(m){case"value":ee=c;break;case"defaultValue":ae=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==u&&Ge(e,t,m,c,r,u)}ff(e,ee,ae);return;case"option":for(var ve in i)ee=i[ve],i.hasOwnProperty(ve)&&ee!=null&&!r.hasOwnProperty(ve)&&(ve==="selected"?e.selected=!1:Ge(e,t,ve,null,r,ee));for(_ in r)ee=r[_],ae=i[_],r.hasOwnProperty(_)&&ee!==ae&&(ee!=null||ae!=null)&&(_==="selected"?e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Ge(e,t,_,ee,r,ae));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in i)ee=i[Te],i.hasOwnProperty(Te)&&ee!=null&&!r.hasOwnProperty(Te)&&Ge(e,t,Te,null,r,ee);for(Z in r)if(ee=r[Z],ae=i[Z],r.hasOwnProperty(Z)&&ee!==ae&&(ee!=null||ae!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(l(137,t));break;default:Ge(e,t,Z,ee,r,ae)}return;default:if(vc(t)){for(var Xe in i)ee=i[Xe],i.hasOwnProperty(Xe)&&ee!==void 0&&!r.hasOwnProperty(Xe)&&ou(e,t,Xe,void 0,r,ee);for(re in r)ee=r[re],ae=i[re],!r.hasOwnProperty(re)||ee===ae||ee===void 0&&ae===void 0||ou(e,t,re,ee,r,ae);return}}for(var Y in i)ee=i[Y],i.hasOwnProperty(Y)&&ee!=null&&!r.hasOwnProperty(Y)&&Ge(e,t,Y,null,r,ee);for(ue in r)ee=r[ue],ae=i[ue],!r.hasOwnProperty(ue)||ee===ae||ee==null&&ae==null||Ge(e,t,ue,ee,r,ae)}function xh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function s2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var c=i[r],u=c.transferSize,m=c.initiatorType,w=c.duration;if(u&&w&&xh(m)){for(m=0,w=c.responseEnd,r+=1;r<i.length;r++){var _=i[r],Z=_.startTime;if(Z>w)break;var re=_.transferSize,ue=_.initiatorType;re&&xh(ue)&&(_=_.responseEnd,m+=re*(_<w?1:(w-Z)/(_-Z)))}if(--r,t+=8*(u+m)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var su=null,lu=null;function Is(e){return e.nodeType===9?e:e.ownerDocument}function bh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var du=null;function l2(){var e=window.event;return e&&e.type==="popstate"?e===du?!1:(du=e,!0):(du=null,!1)}var vh=typeof setTimeout=="function"?setTimeout:void 0,c2=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,d2=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(e){return jh.resolve(null).then(e).catch(u2)}:vh;function u2(e){setTimeout(function(){throw e})}function Tn(e){return e==="head"}function wh(e,t){var i=t,r=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"||i==="/&"){if(r===0){e.removeChild(c),Zi(t);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Zr(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Zr(i);for(var u=i.firstChild;u;){var m=u.nextSibling,w=u.nodeName;u[hr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=m}}else i==="body"&&Zr(e.ownerDocument.body);i=c}while(i);Zi(t)}function Sh(e,t){var i=e;e=0;do{var r=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=r}while(i)}function uu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":uu(i),hc(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function p2(e,t,i,r){for(;e.nodeType===1;){var c=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[hr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ga(e.nextSibling),e===null)break}return null}function f2(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ga(e.nextSibling),e===null))return null;return e}function kh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ga(e.nextSibling),e===null))return null;return e}function pu(e){return e.data==="$?"||e.data==="$~"}function fu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function g2(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var r=function(){t(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ga(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var gu=null;function Nh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return ga(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Th(e,t,i){switch(t=Is(i),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Zr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hc(e)}var ma=new Map,zh=new Set;function Ys(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qa=ie.d;ie.d={f:m2,r:h2,D:x2,C:b2,L:y2,m:v2,X:w2,S:j2,M:S2};function m2(){var e=Qa.f(),t=Bs();return e||t}function h2(e){var t=xi(e);t!==null&&t.tag===5&&t.type==="form"?Yg(t):Qa.r(e)}var Xi=typeof document>"u"?null:document;function Ah(e,t,i){var r=Xi;if(r&&typeof t=="string"&&t){var c=sa(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),zh.has(c)||(zh.add(c),e={rel:e,crossOrigin:i,href:t},r.querySelector(c)===null&&(t=r.createElement("link"),zt(t,"link",e),jt(t),r.head.appendChild(t)))}}function x2(e){Qa.D(e),Ah("dns-prefetch",e,null)}function b2(e,t){Qa.C(e,t),Ah("preconnect",e,t)}function y2(e,t,i){Qa.L(e,t,i);var r=Xi;if(r&&e&&t){var c='link[rel="preload"][as="'+sa(t)+'"]';t==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+sa(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+sa(i.imageSizes)+'"]')):c+='[href="'+sa(e)+'"]';var u=c;switch(t){case"style":u=Ji(e);break;case"script":u=Qi(e)}ma.has(u)||(e=v({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),ma.set(u,e),r.querySelector(c)!==null||t==="style"&&r.querySelector(Kr(u))||t==="script"&&r.querySelector(eo(u))||(t=r.createElement("link"),zt(t,"link",e),jt(t),r.head.appendChild(t)))}}function v2(e,t){Qa.m(e,t);var i=Xi;if(i&&e){var r=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+sa(r)+'"][href="'+sa(e)+'"]',u=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Qi(e)}if(!ma.has(u)&&(e=v({rel:"modulepreload",href:e},t),ma.set(u,e),i.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(eo(u)))return}r=i.createElement("link"),zt(r,"link",e),jt(r),i.head.appendChild(r)}}}function j2(e,t,i){Qa.S(e,t,i);var r=Xi;if(r&&e){var c=bi(r).hoistableStyles,u=Ji(e);t=t||"default";var m=c.get(u);if(!m){var w={loading:0,preload:null};if(m=r.querySelector(Kr(u)))w.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},i),(i=ma.get(u))&&mu(e,i);var _=m=r.createElement("link");jt(_),zt(_,"link",e),_._p=new Promise(function(Z,re){_.onload=Z,_.onerror=re}),_.addEventListener("load",function(){w.loading|=1}),_.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Vs(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:w},c.set(u,m)}}}function w2(e,t){Qa.X(e,t);var i=Xi;if(i&&e){var r=bi(i).hoistableScripts,c=Qi(e),u=r.get(c);u||(u=i.querySelector(eo(c)),u||(e=v({src:e,async:!0},t),(t=ma.get(c))&&hu(e,t),u=i.createElement("script"),jt(u),zt(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function S2(e,t){Qa.M(e,t);var i=Xi;if(i&&e){var r=bi(i).hoistableScripts,c=Qi(e),u=r.get(c);u||(u=i.querySelector(eo(c)),u||(e=v({src:e,async:!0,type:"module"},t),(t=ma.get(c))&&hu(e,t),u=i.createElement("script"),jt(u),zt(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function Eh(e,t,i,r){var c=(c=ge.current)?Ys(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=Ji(i.href),i=bi(c).hoistableStyles,r=i.get(t),r||(r={type:"style",instance:null,count:0,state:null},i.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ji(i.href);var u=bi(c).hoistableStyles,m=u.get(e);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=c.querySelector(Kr(e)))&&!u._p&&(m.instance=u,m.state.loading=5),ma.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},ma.set(e,i),u||k2(c,e,i,m.state))),t&&r===null)throw Error(l(528,""));return m}if(t&&r!==null)throw Error(l(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qi(i),i=bi(c).hoistableScripts,r=i.get(t),r||(r={type:"script",instance:null,count:0,state:null},i.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ji(e){return'href="'+sa(e)+'"'}function Kr(e){return'link[rel="stylesheet"]['+e+"]"}function Dh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function k2(e,t,i,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),zt(t,"link",i),jt(t),e.head.appendChild(t))}function Qi(e){return'[src="'+sa(e)+'"]'}function eo(e){return"script[async]"+e}function Rh(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+sa(i.href)+'"]');if(r)return t.instance=r,jt(r),r;var c=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),jt(r),zt(r,"style",c),Vs(r,i.precedence,e),t.instance=r;case"stylesheet":c=Ji(i.href);var u=e.querySelector(Kr(c));if(u)return t.state.loading|=4,t.instance=u,jt(u),u;r=Dh(i),(c=ma.get(c))&&mu(r,c),u=(e.ownerDocument||e).createElement("link"),jt(u);var m=u;return m._p=new Promise(function(w,_){m.onload=w,m.onerror=_}),zt(u,"link",r),t.state.loading|=4,Vs(u,i.precedence,e),t.instance=u;case"script":return u=Qi(i.src),(c=e.querySelector(eo(u)))?(t.instance=c,jt(c),c):(r=i,(c=ma.get(u))&&(r=v({},i),hu(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),jt(c),zt(c,"link",r),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Vs(r,i.precedence,e));return t.instance}function Vs(e,t,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,u=c,m=0;m<r.length;m++){var w=r[m];if(w.dataset.precedence===t)u=w;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qs=null;function Mh(e,t,i){if(qs===null){var r=new Map,c=qs=new Map;c.set(i,r)}else c=qs,r=c.get(i),r||(r=new Map,c.set(i,r));if(r.has(e))return r;for(r.set(e,null),i=i.getElementsByTagName(e),c=0;c<i.length;c++){var u=i[c];if(!(u[hr]||u[kt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var w=r.get(m);w?w.push(u):r.set(m,[u])}}return r}function Oh(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function N2(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _h(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function C2(e,t,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Ji(r.href),u=t.querySelector(Kr(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gs.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=u,jt(u);return}u=t.ownerDocument||t,r=Dh(r),(c=ma.get(c))&&mu(r,c),u=u.createElement("link"),jt(u);var m=u;m._p=new Promise(function(w,_){m.onload=w,m.onerror=_}),zt(u,"link",r),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Gs.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var xu=0;function T2(e,t){return e.stylesheets&&e.count===0&&Js(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var r=setTimeout(function(){if(e.stylesheets&&Js(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&xu===0&&(xu=62500*s2());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Js(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>xu?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Gs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Js(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xs=null;function Js(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xs=new Map,t.forEach(z2,e),Xs=null,Gs.call(e))}function z2(e,t){if(!(t.state.loading&4)){var i=Xs.get(e);if(i)var r=i.get(null);else{i=new Map,Xs.set(e,i);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var m=c[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}c=t.instance,m=c.getAttribute("data-precedence"),u=i.get(m)||r,u===r&&i.set(null,c),i.set(m,c),this.count++,r=Gs.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var to={$$typeof:A,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function A2(e,t,i,r,c,u,m,w,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.hiddenUpdates=pc(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Bh(e,t,i,r,c,u,m,w,_,Z,re,ue){return e=new A2(e,t,i,m,_,Z,re,ue,w),t=1,u===!0&&(t|=24),u=Qt(3,null,null,t),e.current=u,u.stateNode=e,t=Jc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:t},ed(u),e}function Lh(e){return e?(e=zi,e):zi}function Uh(e,t,i,r,c,u){c=Lh(c),r.context===null?r.context=c:r.pendingContext=c,r=hn(t),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=xn(e,r,t),i!==null&&(It(i,e,t),Mr(i,e,t))}function Fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function bu(e,t){Fh(e,t),(e=e.alternate)&&Fh(e,t)}function Wh(e){if(e.tag===13||e.tag===31){var t=Yn(e,67108864);t!==null&&It(t,e,67108864),bu(e,67108864)}}function Hh(e){if(e.tag===13||e.tag===31){var t=aa();t=fc(t);var i=Yn(e,t);i!==null&&It(i,e,t),bu(e,t)}}var Qs=!0;function E2(e,t,i,r){var c=F.T;F.T=null;var u=ie.p;try{ie.p=2,yu(e,t,i,r)}finally{ie.p=u,F.T=c}}function D2(e,t,i,r){var c=F.T;F.T=null;var u=ie.p;try{ie.p=8,yu(e,t,i,r)}finally{ie.p=u,F.T=c}}function yu(e,t,i,r){if(Qs){var c=vu(r);if(c===null)ru(e,t,r,Zs,i),$h(e,r);else if(M2(c,e,t,i,r))r.stopPropagation();else if($h(e,r),t&4&&-1<R2.indexOf(e)){for(;c!==null;){var u=xi(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Wn(u.pendingLanes);if(m!==0){var w=u;for(w.pendingLanes|=2,w.entangledLanes|=2;m;){var _=1<<31-Xt(m);w.entanglements[1]|=_,m&=~_}Aa(u),($e&6)===0&&(Os=Ze()+500,Xr(0))}}break;case 31:case 13:w=Yn(u,2),w!==null&&It(w,u,2),Bs(),bu(u,2)}if(u=vu(r),u===null&&ru(e,t,r,Zs,i),u===c)break;c=u}c!==null&&r.stopPropagation()}else ru(e,t,r,null,i)}}function vu(e){return e=wc(e),ju(e)}var Zs=null;function ju(e){if(Zs=null,e=hi(e),e!==null){var t=p(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=f(t),e!==null)return e;e=null}else if(i===31){if(e=h(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zs=e,null}function Ph(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case St:return 2;case ze:return 8;case nt:case Ln:return 32;case gi:return 268435456;default:return 32}default:return 32}}var wu=!1,zn=null,An=null,En=null,ao=new Map,no=new Map,Dn=[],R2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $h(e,t){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function io(e,t,i,r,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[c]},t!==null&&(t=xi(t),t!==null&&Wh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function M2(e,t,i,r,c){switch(t){case"focusin":return zn=io(zn,e,t,i,r,c),!0;case"dragenter":return An=io(An,e,t,i,r,c),!0;case"mouseover":return En=io(En,e,t,i,r,c),!0;case"pointerover":var u=c.pointerId;return ao.set(u,io(ao.get(u)||null,e,t,i,r,c)),!0;case"gotpointercapture":return u=c.pointerId,no.set(u,io(no.get(u)||null,e,t,i,r,c)),!0}return!1}function Ih(e){var t=hi(e.target);if(t!==null){var i=p(t);if(i!==null){if(t=i.tag,t===13){if(t=f(i),t!==null){e.blockedOn=t,nf(e.priority,function(){Hh(i)});return}}else if(t===31){if(t=h(i),t!==null){e.blockedOn=t,nf(e.priority,function(){Hh(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=vu(e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);jc=r,i.target.dispatchEvent(r),jc=null}else return t=xi(i),t!==null&&Wh(t),e.blockedOn=i,!1;t.shift()}return!0}function Yh(e,t,i){Ks(e)&&i.delete(t)}function O2(){wu=!1,zn!==null&&Ks(zn)&&(zn=null),An!==null&&Ks(An)&&(An=null),En!==null&&Ks(En)&&(En=null),ao.forEach(Yh),no.forEach(Yh)}function el(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,O2)))}var tl=null;function Vh(e){tl!==e&&(tl=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){tl===e&&(tl=null);for(var t=0;t<e.length;t+=3){var i=e[t],r=e[t+1],c=e[t+2];if(typeof r!="function"){if(ju(r||i)===null)continue;break}var u=xi(i);u!==null&&(e.splice(t,3),t-=3,vd(u,{pending:!0,data:c,method:i.method,action:r},r,c))}}))}function Zi(e){function t(_){return el(_,e)}zn!==null&&el(zn,e),An!==null&&el(An,e),En!==null&&el(En,e),ao.forEach(t),no.forEach(t);for(var i=0;i<Dn.length;i++){var r=Dn[i];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Dn.length&&(i=Dn[0],i.blockedOn===null);)Ih(i),i.blockedOn===null&&Dn.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var c=i[r],u=i[r+1],m=c[Ut]||null;if(typeof u=="function")m||Vh(i);else if(m){var w=null;if(u&&u.hasAttribute("formAction")){if(c=u,m=u[Ut]||null)w=m.formAction;else if(ju(c)!==null)continue}else w=m.action;typeof w=="function"?i[r+1]=w:(i.splice(r,3),r-=3),Vh(i)}}}function qh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return c=m})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Su(e){this._internalRoot=e}al.prototype.render=Su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var i=t.current,r=aa();Uh(i,r,e,t,null,null)},al.prototype.unmount=Su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Uh(e.current,2,null,e,null,null),Bs(),t[mi]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var t=af();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Dn.length&&t!==0&&t<Dn[i].priority;i++);Dn.splice(i,0,e),i===0&&Ih(e)}};var Gh=o.version;if(Gh!=="19.2.3")throw Error(l(527,Gh,"19.2.3"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var _2={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Fn=nl.inject(_2),pt=nl}catch{}}return oo.createRoot=function(e,t){if(!d(e))throw Error(l(299));var i=!1,r="",c=tm,u=am,m=nm;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Bh(e,1,!1,null,null,i,r,null,c,u,m,qh),e[mi]=t.current,iu(e),new Su(t)},oo.hydrateRoot=function(e,t,i){if(!d(e))throw Error(l(299));var r=!1,c="",u=tm,m=am,w=nm,_=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(w=i.onRecoverableError),i.formState!==void 0&&(_=i.formState)),t=Bh(e,1,!0,t,i??null,r,c,_,u,m,w,qh),t.context=Lh(null),i=t.current,r=aa(),r=fc(r),c=hn(r),c.callback=null,xn(i,c,r),i=r,t.current.lanes=i,mr(t,i),Aa(t),e[mi]=t.current,iu(e),new al(t)},oo.version="19.2.3",oo}var i0;function Y2(){if(i0)return Cu.exports;i0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Cu.exports=I2(),Cu.exports}var V2=Y2();const q2=Ox(V2);var r0="popstate";function G2(n={}){function o(l,d){let{pathname:p,search:f,hash:h}=l.location;return ep("",{pathname:p,search:f,hash:h},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(l,d){return typeof d=="string"?d:vo(d)}return J2(o,s,null,n)}function rt(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function xa(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function X2(){return Math.random().toString(36).substring(2,10)}function o0(n,o){return{usr:n.state,key:n.key,idx:o}}function ep(n,o,s=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?cr(o):o,state:s,key:o&&o.key||l||X2()}}function vo({pathname:n="/",search:o="",hash:s=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function cr(n){let o={};if(n){let s=n.indexOf("#");s>=0&&(o.hash=n.substring(s),n=n.substring(0,s));let l=n.indexOf("?");l>=0&&(o.search=n.substring(l),n=n.substring(0,l)),n&&(o.pathname=n)}return o}function J2(n,o,s,l={}){let{window:d=document.defaultView,v5Compat:p=!1}=l,f=d.history,h="POP",x=null,g=y();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function y(){return(f.state||{idx:null}).idx}function v(){h="POP";let M=y(),E=M==null?null:M-g;g=M,x&&x({action:h,location:z.location,delta:E})}function T(M,E){h="PUSH";let S=ep(z.location,M,E);g=y()+1;let A=o0(S,g),P=z.createHref(S);try{f.pushState(A,"",P)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;d.location.assign(P)}p&&x&&x({action:h,location:z.location,delta:1})}function R(M,E){h="REPLACE";let S=ep(z.location,M,E);g=y();let A=o0(S,g),P=z.createHref(S);f.replaceState(A,"",P),p&&x&&x({action:h,location:z.location,delta:0})}function k(M){return Q2(M)}let z={get action(){return h},get location(){return n(d,f)},listen(M){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(r0,v),x=M,()=>{d.removeEventListener(r0,v),x=null}},createHref(M){return o(d,M)},createURL:k,encodeLocation(M){let E=k(M);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:T,replace:R,go(M){return f.go(M)}};return z}function Q2(n,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),rt(s,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:vo(n);return l=l.replace(/ $/,"%20"),!o&&l.startsWith("//")&&(l=s+l),new URL(l,s)}function _x(n,o,s="/"){return Z2(n,o,s,!1)}function Z2(n,o,s,l){let d=typeof o=="string"?cr(o):o,p=nn(d.pathname||"/",s);if(p==null)return null;let f=Bx(n);K2(f);let h=null;for(let x=0;h==null&&x<f.length;++x){let g=dv(p);h=lv(f[x],g,l)}return h}function Bx(n,o=[],s=[],l="",d=!1){let p=(f,h,x=d,g)=>{let y={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(l)&&x)return;rt(y.relativePath.startsWith(l),`Absolute route path "${y.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(l.length)}let v=tn([l,y.relativePath]),T=s.concat(y);f.children&&f.children.length>0&&(rt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Bx(f.children,o,T,v,x)),!(f.path==null&&!f.index)&&o.push({path:v,score:ov(v,f.index),routesMeta:T})};return n.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))p(f,h);else for(let x of Lx(f.path))p(f,h,!0,x)}),o}function Lx(n){let o=n.split("/");if(o.length===0)return[];let[s,...l]=o,d=s.endsWith("?"),p=s.replace(/\?$/,"");if(l.length===0)return d?[p,""]:[p];let f=Lx(l.join("/")),h=[];return h.push(...f.map(x=>x===""?p:[p,x].join("/"))),d&&h.push(...f),h.map(x=>n.startsWith("/")&&x===""?"/":x)}function K2(n){n.sort((o,s)=>o.score!==s.score?s.score-o.score:sv(o.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var ev=/^:[\w-]+$/,tv=3,av=2,nv=1,iv=10,rv=-2,s0=n=>n==="*";function ov(n,o){let s=n.split("/"),l=s.length;return s.some(s0)&&(l+=rv),o&&(l+=av),s.filter(d=>!s0(d)).reduce((d,p)=>d+(ev.test(p)?tv:p===""?nv:iv),l)}function sv(n,o){return n.length===o.length&&n.slice(0,-1).every((l,d)=>l===o[d])?n[n.length-1]-o[o.length-1]:0}function lv(n,o,s=!1){let{routesMeta:l}=n,d={},p="/",f=[];for(let h=0;h<l.length;++h){let x=l[h],g=h===l.length-1,y=p==="/"?o:o.slice(p.length)||"/",v=kl({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},y),T=x.route;if(!v&&g&&s&&!l[l.length-1].route.index&&(v=kl({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},y)),!v)return null;Object.assign(d,v.params),f.push({params:d,pathname:tn([p,v.pathname]),pathnameBase:gv(tn([p,v.pathnameBase])),route:T}),v.pathnameBase!=="/"&&(p=tn([p,v.pathnameBase]))}return f}function kl(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,l]=cv(n.path,n.caseSensitive,n.end),d=o.match(s);if(!d)return null;let p=d[0],f=p.replace(/(.)\/+$/,"$1"),h=d.slice(1);return{params:l.reduce((g,{paramName:y,isOptional:v},T)=>{if(y==="*"){let k=h[T]||"";f=p.slice(0,p.length-k.length).replace(/(.)\/+$/,"$1")}const R=h[T];return v&&!R?g[y]=void 0:g[y]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:f,pattern:n}}function cv(n,o=!1,s=!0){xa(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],d="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,x)=>(l.push({paramName:h,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),d+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":n!==""&&n!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),l]}function dv(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return xa(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function nn(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,l=n.charAt(s);return l&&l!=="/"?null:n.slice(s)||"/"}var Ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uv=n=>Ux.test(n);function pv(n,o="/"){let{pathname:s,search:l="",hash:d=""}=typeof n=="string"?cr(n):n,p;if(s)if(uv(s))p=s;else{if(s.includes("//")){let f=s;s=s.replace(/\/\/+/g,"/"),xa(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${s}`)}s.startsWith("/")?p=l0(s.substring(1),"/"):p=l0(s,o)}else p=o;return{pathname:p,search:mv(l),hash:hv(d)}}function l0(n,o){let s=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Eu(n,o,s,l){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fv(n){return n.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Rp(n){let o=fv(n);return o.map((s,l)=>l===o.length-1?s.pathname:s.pathnameBase)}function Mp(n,o,s,l=!1){let d;typeof n=="string"?d=cr(n):(d={...n},rt(!d.pathname||!d.pathname.includes("?"),Eu("?","pathname","search",d)),rt(!d.pathname||!d.pathname.includes("#"),Eu("#","pathname","hash",d)),rt(!d.search||!d.search.includes("#"),Eu("#","search","hash",d)));let p=n===""||d.pathname==="",f=p?"/":d.pathname,h;if(f==null)h=s;else{let v=o.length-1;if(!l&&f.startsWith("..")){let T=f.split("/");for(;T[0]==="..";)T.shift(),v-=1;d.pathname=T.join("/")}h=v>=0?o[v]:"/"}let x=pv(d,h),g=f&&f!=="/"&&f.endsWith("/"),y=(p||f===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(g||y)&&(x.pathname+="/"),x}var tn=n=>n.join("/").replace(/\/\/+/g,"/"),gv=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),mv=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,hv=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,xv=class{constructor(n,o,s,l=!1){this.status=n,this.statusText=o||"",this.internal=l,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function bv(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function yv(n){return n.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Wx(n,o){let s=n;if(typeof s!="string"||!Ux.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let l=s,d=!1;if(Fx)try{let p=new URL(window.location.href),f=s.startsWith("//")?new URL(p.protocol+s):new URL(s),h=nn(f.pathname,o);f.origin===p.origin&&h!=null?s=h+f.search+f.hash:d=!0}catch{xa(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:d,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Hx=["POST","PUT","PATCH","DELETE"];new Set(Hx);var vv=["GET",...Hx];new Set(vv);var dr=b.createContext(null);dr.displayName="DataRouter";var Vl=b.createContext(null);Vl.displayName="DataRouterState";var jv=b.createContext(!1),Px=b.createContext({isTransitioning:!1});Px.displayName="ViewTransition";var wv=b.createContext(new Map);wv.displayName="Fetchers";var Sv=b.createContext(null);Sv.displayName="Await";var ra=b.createContext(null);ra.displayName="Navigation";var Eo=b.createContext(null);Eo.displayName="Location";var ba=b.createContext({outlet:null,matches:[],isDataRoute:!1});ba.displayName="Route";var Op=b.createContext(null);Op.displayName="RouteError";var $x="REACT_ROUTER_ERROR",kv="REDIRECT",Nv="ROUTE_ERROR_RESPONSE";function Cv(n){if(n.startsWith(`${$x}:${kv}:{`))try{let o=JSON.parse(n.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Tv(n){if(n.startsWith(`${$x}:${Nv}:{`))try{let o=JSON.parse(n.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new xv(o.status,o.statusText,o.data)}catch{}}function zv(n,{relative:o}={}){rt(ur(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=b.useContext(ra),{hash:d,pathname:p,search:f}=Do(n,{relative:o}),h=p;return s!=="/"&&(h=p==="/"?s:tn([s,p])),l.createHref({pathname:h,search:f,hash:d})}function ur(){return b.useContext(Eo)!=null}function Ma(){return rt(ur(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Eo).location}var Ix="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yx(n){b.useContext(ra).static||b.useLayoutEffect(n)}function vt(){let{isDataRoute:n}=b.useContext(ba);return n?Iv():Av()}function Av(){rt(ur(),"useNavigate() may be used only in the context of a <Router> component.");let n=b.useContext(dr),{basename:o,navigator:s}=b.useContext(ra),{matches:l}=b.useContext(ba),{pathname:d}=Ma(),p=JSON.stringify(Rp(l)),f=b.useRef(!1);return Yx(()=>{f.current=!0}),b.useCallback((x,g={})=>{if(xa(f.current,Ix),!f.current)return;if(typeof x=="number"){s.go(x);return}let y=Mp(x,JSON.parse(p),d,g.relative==="path");n==null&&o!=="/"&&(y.pathname=y.pathname==="/"?o:tn([o,y.pathname])),(g.replace?s.replace:s.push)(y,g.state,g)},[o,s,p,d,n])}var Ev=b.createContext(null);function Dv(n){let o=b.useContext(ba).outlet;return b.useMemo(()=>o&&b.createElement(Ev.Provider,{value:n},o),[o,n])}function Rv(){let{matches:n}=b.useContext(ba),o=n[n.length-1];return o?o.params:{}}function Do(n,{relative:o}={}){let{matches:s}=b.useContext(ba),{pathname:l}=Ma(),d=JSON.stringify(Rp(s));return b.useMemo(()=>Mp(n,JSON.parse(d),l,o==="path"),[n,d,l,o])}function Mv(n,o){return Vx(n,o)}function Vx(n,o,s,l,d){rt(ur(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=b.useContext(ra),{matches:f}=b.useContext(ba),h=f[f.length-1],x=h?h.params:{},g=h?h.pathname:"/",y=h?h.pathnameBase:"/",v=h&&h.route;{let S=v&&v.path||"";Gx(g,!v||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let T=Ma(),R;if(o){let S=typeof o=="string"?cr(o):o;rt(y==="/"||S.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${S.pathname}" was given in the \`location\` prop.`),R=S}else R=T;let k=R.pathname||"/",z=k;if(y!=="/"){let S=y.replace(/^\//,"").split("/");z="/"+k.replace(/^\//,"").split("/").slice(S.length).join("/")}let M=_x(n,{pathname:z});xa(v||M!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),xa(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=Uv(M&&M.map(S=>Object.assign({},S,{params:Object.assign({},x,S.params),pathname:tn([y,p.encodeLocation?p.encodeLocation(S.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?y:tn([y,p.encodeLocation?p.encodeLocation(S.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),f,s,l,d);return o&&E?b.createElement(Eo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},E):E}function Ov(){let n=$v(),o=bv(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:l},p={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},o),s?b.createElement("pre",{style:d},s):null,f)}var _v=b.createElement(Ov,null),qx=class extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){this.props.onError?this.props.onError(n,o):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const s=Tv(n.digest);s&&(n=s)}let o=n!==void 0?b.createElement(ba.Provider,{value:this.props.routeContext},b.createElement(Op.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?b.createElement(Bv,{error:n},o):o}};qx.contextType=jv;var Du=new WeakMap;function Bv({children:n,error:o}){let{basename:s}=b.useContext(ra);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let l=Cv(o.digest);if(l){let d=Du.get(o);if(d)throw d;let p=Wx(l.location,s);if(Fx&&!Du.get(o))if(p.isExternal||l.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:l.replace}));throw Du.set(o,f),f}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return n}function Lv({routeContext:n,match:o,children:s}){let l=b.useContext(dr);return l&&l.static&&l.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=o.route.id),b.createElement(ba.Provider,{value:n},s)}function Uv(n,o=[],s=null,l=null,d=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let p=n,f=s?.errors;if(f!=null){let y=p.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);rt(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),p=p.slice(0,Math.min(p.length,y+1))}let h=!1,x=-1;if(s)for(let y=0;y<p.length;y++){let v=p[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(x=y),v.route.id){let{loaderData:T,errors:R}=s,k=v.route.loader&&!T.hasOwnProperty(v.route.id)&&(!R||R[v.route.id]===void 0);if(v.route.lazy||k){h=!0,x>=0?p=p.slice(0,x+1):p=[p[0]];break}}}let g=s&&l?(y,v)=>{l(y,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:yv(s.matches),errorInfo:v})}:void 0;return p.reduceRight((y,v,T)=>{let R,k=!1,z=null,M=null;s&&(R=f&&v.route.id?f[v.route.id]:void 0,z=v.route.errorElement||_v,h&&(x<0&&T===0?(Gx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,M=null):x===T&&(k=!0,M=v.route.hydrateFallbackElement||null)));let E=o.concat(p.slice(0,T+1)),S=()=>{let A;return R?A=z:k?A=M:v.route.Component?A=b.createElement(v.route.Component,null):v.route.element?A=v.route.element:A=y,b.createElement(Lv,{match:v,routeContext:{outlet:y,matches:E,isDataRoute:s!=null},children:A})};return s&&(v.route.ErrorBoundary||v.route.errorElement||T===0)?b.createElement(qx,{location:s.location,revalidation:s.revalidation,component:z,error:R,children:S(),routeContext:{outlet:null,matches:E,isDataRoute:!0},onError:g}):S()},null)}function _p(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fv(n){let o=b.useContext(dr);return rt(o,_p(n)),o}function Wv(n){let o=b.useContext(Vl);return rt(o,_p(n)),o}function Hv(n){let o=b.useContext(ba);return rt(o,_p(n)),o}function Bp(n){let o=Hv(n),s=o.matches[o.matches.length-1];return rt(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function Pv(){return Bp("useRouteId")}function $v(){let n=b.useContext(Op),o=Wv("useRouteError"),s=Bp("useRouteError");return n!==void 0?n:o.errors?.[s]}function Iv(){let{router:n}=Fv("useNavigate"),o=Bp("useNavigate"),s=b.useRef(!1);return Yx(()=>{s.current=!0}),b.useCallback(async(d,p={})=>{xa(s.current,Ix),s.current&&(typeof d=="number"?await n.navigate(d):await n.navigate(d,{fromRouteId:o,...p}))},[n,o])}var c0={};function Gx(n,o,s){!o&&!c0[n]&&(c0[n]=!0,xa(!1,s))}b.memo(Yv);function Yv({routes:n,future:o,state:s,onError:l}){return Vx(n,void 0,s,l,o)}function Lp({to:n,replace:o,state:s,relative:l}){rt(ur(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=b.useContext(ra);xa(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=b.useContext(ba),{pathname:f}=Ma(),h=vt(),x=Mp(n,Rp(p),f,l==="path"),g=JSON.stringify(x);return b.useEffect(()=>{h(JSON.parse(g),{replace:o,state:s,relative:l})},[h,g,l,o,s]),null}function Vv(n){return Dv(n.context)}function ot(n){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qv({basename:n="/",children:o=null,location:s,navigationType:l="POP",navigator:d,static:p=!1,unstable_useTransitions:f}){rt(!ur(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),x=b.useMemo(()=>({basename:h,navigator:d,static:p,unstable_useTransitions:f,future:{}}),[h,d,p,f]);typeof s=="string"&&(s=cr(s));let{pathname:g="/",search:y="",hash:v="",state:T=null,key:R="default"}=s,k=b.useMemo(()=>{let z=nn(g,h);return z==null?null:{location:{pathname:z,search:y,hash:v,state:T,key:R},navigationType:l}},[h,g,y,v,T,R,l]);return xa(k!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:b.createElement(ra.Provider,{value:x},b.createElement(Eo.Provider,{children:o,value:k}))}function Gv({children:n,location:o}){return Mv(tp(n),o)}function tp(n,o=[]){let s=[];return b.Children.forEach(n,(l,d)=>{if(!b.isValidElement(l))return;let p=[...o,d];if(l.type===b.Fragment){s.push.apply(s,tp(l.props.children,p));return}rt(l.type===ot,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||p.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=tp(l.props.children,p)),s.push(f)}),s}var hl="get",xl="application/x-www-form-urlencoded";function ql(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function Xv(n){return ql(n)&&n.tagName.toLowerCase()==="button"}function Jv(n){return ql(n)&&n.tagName.toLowerCase()==="form"}function Qv(n){return ql(n)&&n.tagName.toLowerCase()==="input"}function Zv(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Kv(n,o){return n.button===0&&(!o||o==="_self")&&!Zv(n)}var il=null;function ej(){if(il===null)try{new FormData(document.createElement("form"),0),il=!1}catch{il=!0}return il}var tj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ru(n){return n!=null&&!tj.has(n)?(xa(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xl}"`),null):n}function aj(n,o){let s,l,d,p,f;if(Jv(n)){let h=n.getAttribute("action");l=h?nn(h,o):null,s=n.getAttribute("method")||hl,d=Ru(n.getAttribute("enctype"))||xl,p=new FormData(n)}else if(Xv(n)||Qv(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=n.getAttribute("formaction")||h.getAttribute("action");if(l=x?nn(x,o):null,s=n.getAttribute("formmethod")||h.getAttribute("method")||hl,d=Ru(n.getAttribute("formenctype"))||Ru(h.getAttribute("enctype"))||xl,p=new FormData(h,n),!ej()){let{name:g,type:y,value:v}=n;if(y==="image"){let T=g?`${g}.`:"";p.append(`${T}x`,"0"),p.append(`${T}y`,"0")}else g&&p.append(g,v)}}else{if(ql(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=hl,l=null,d=xl,f=n}return p&&d==="text/plain"&&(f=p,p=void 0),{action:l,method:s.toLowerCase(),encType:d,formData:p,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Up(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function nj(n,o,s,l){let d=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${l}`:d.pathname=`${d.pathname}.${l}`:d.pathname==="/"?d.pathname=`_root.${l}`:o&&nn(d.pathname,o)==="/"?d.pathname=`${o.replace(/\/$/,"")}/_root.${l}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${l}`,d}async function ij(n,o){if(n.id in o)return o[n.id];try{let s=await import(n.module);return o[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rj(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function oj(n,o,s){let l=await Promise.all(n.map(async d=>{let p=o.routes[d.route.id];if(p){let f=await ij(p,s);return f.links?f.links():[]}return[]}));return dj(l.flat(1).filter(rj).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function d0(n,o,s,l,d,p){let f=(x,g)=>s[g]?x.route.id!==s[g].route.id:!0,h=(x,g)=>s[g].pathname!==x.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==x.params["*"];return p==="assets"?o.filter((x,g)=>f(x,g)||h(x,g)):p==="data"?o.filter((x,g)=>{let y=l.routes[x.route.id];if(!y||!y.hasLoader)return!1;if(f(x,g)||h(x,g))return!0;if(x.route.shouldRevalidate){let v=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function sj(n,o,{includeHydrateFallback:s}={}){return lj(n.map(l=>{let d=o.routes[l.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function lj(n){return[...new Set(n)]}function cj(n){let o={},s=Object.keys(n).sort();for(let l of s)o[l]=n[l];return o}function dj(n,o){let s=new Set;return new Set(o),n.reduce((l,d)=>{let p=JSON.stringify(cj(d));return s.has(p)||(s.add(p),l.push({key:p,link:d})),l},[])}function Xx(){let n=b.useContext(dr);return Up(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function uj(){let n=b.useContext(Vl);return Up(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Fp=b.createContext(void 0);Fp.displayName="FrameworkContext";function Jx(){let n=b.useContext(Fp);return Up(n,"You must render this element inside a <HydratedRouter> element"),n}function pj(n,o){let s=b.useContext(Fp),[l,d]=b.useState(!1),[p,f]=b.useState(!1),{onFocus:h,onBlur:x,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=o,T=b.useRef(null);b.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let z=E=>{E.forEach(S=>{f(S.isIntersecting)})},M=new IntersectionObserver(z,{threshold:.5});return T.current&&M.observe(T.current),()=>{M.disconnect()}}},[n]),b.useEffect(()=>{if(l){let z=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(z)}}},[l]);let R=()=>{d(!0)},k=()=>{d(!1),f(!1)};return s?n!=="intent"?[p,T,{}]:[p,T,{onFocus:so(h,R),onBlur:so(x,k),onMouseEnter:so(g,R),onMouseLeave:so(y,k),onTouchStart:so(v,R)}]:[!1,T,{}]}function so(n,o){return s=>{n&&n(s),s.defaultPrevented||o(s)}}function fj({page:n,...o}){let{router:s}=Xx(),l=b.useMemo(()=>_x(s.routes,n,s.basename),[s.routes,n,s.basename]);return l?b.createElement(mj,{page:n,matches:l,...o}):null}function gj(n){let{manifest:o,routeModules:s}=Jx(),[l,d]=b.useState([]);return b.useEffect(()=>{let p=!1;return oj(n,o,s).then(f=>{p||d(f)}),()=>{p=!0}},[n,o,s]),l}function mj({page:n,matches:o,...s}){let l=Ma(),{future:d,manifest:p,routeModules:f}=Jx(),{basename:h}=Xx(),{loaderData:x,matches:g}=uj(),y=b.useMemo(()=>d0(n,o,g,p,l,"data"),[n,o,g,p,l]),v=b.useMemo(()=>d0(n,o,g,p,l,"assets"),[n,o,g,p,l]),T=b.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let z=new Set,M=!1;if(o.forEach(S=>{let A=p.routes[S.route.id];!A||!A.hasLoader||(!y.some(P=>P.route.id===S.route.id)&&S.route.id in x&&f[S.route.id]?.shouldRevalidate||A.hasClientLoader?M=!0:z.add(S.route.id))}),z.size===0)return[];let E=nj(n,h,d.unstable_trailingSlashAwareDataRequests,"data");return M&&z.size>0&&E.searchParams.set("_routes",o.filter(S=>z.has(S.route.id)).map(S=>S.route.id).join(",")),[E.pathname+E.search]},[h,d.unstable_trailingSlashAwareDataRequests,x,l,p,y,o,n,f]),R=b.useMemo(()=>sj(v,p),[v,p]),k=gj(v);return b.createElement(b.Fragment,null,T.map(z=>b.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...s})),R.map(z=>b.createElement("link",{key:z,rel:"modulepreload",href:z,...s})),k.map(({key:z,link:M})=>b.createElement("link",{key:z,nonce:s.nonce,...M})))}function hj(...n){return o=>{n.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var xj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xj&&(window.__reactRouterVersion="7.12.0")}catch{}function bj({basename:n,children:o,unstable_useTransitions:s,window:l}){let d=b.useRef();d.current==null&&(d.current=G2({window:l,v5Compat:!0}));let p=d.current,[f,h]=b.useState({action:p.action,location:p.location}),x=b.useCallback(g=>{s===!1?h(g):b.startTransition(()=>h(g))},[s]);return b.useLayoutEffect(()=>p.listen(x),[p,x]),b.createElement(qv,{basename:n,children:o,location:f.location,navigationType:f.action,navigator:p,unstable_useTransitions:s})}var Qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nl=b.forwardRef(function({onClick:o,discover:s="render",prefetch:l="none",relative:d,reloadDocument:p,replace:f,state:h,target:x,to:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:T,...R},k){let{basename:z,unstable_useTransitions:M}=b.useContext(ra),E=typeof g=="string"&&Qx.test(g),S=Wx(g,z);g=S.to;let A=zv(g,{relative:d}),[P,X,D]=pj(l,R),W=jj(g,{replace:f,state:h,target:x,preventScrollReset:y,relative:d,viewTransition:v,unstable_defaultShouldRevalidate:T,unstable_useTransitions:M});function V(he){o&&o(he),he.defaultPrevented||W(he)}let de=b.createElement("a",{...R,...D,href:S.absoluteURL||A,onClick:S.isExternal||p?o:V,ref:hj(k,X),target:x,"data-discover":!E&&s==="render"?"true":void 0});return P&&!E?b.createElement(b.Fragment,null,de,b.createElement(fj,{page:A})):de});Nl.displayName="Link";var Yt=b.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:l="",end:d=!1,style:p,to:f,viewTransition:h,children:x,...g},y){let v=Do(f,{relative:g.relative}),T=Ma(),R=b.useContext(Vl),{navigator:k,basename:z}=b.useContext(ra),M=R!=null&&Cj(v)&&h===!0,E=k.encodeLocation?k.encodeLocation(v).pathname:v.pathname,S=T.pathname,A=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;s||(S=S.toLowerCase(),A=A?A.toLowerCase():null,E=E.toLowerCase()),A&&z&&(A=nn(A,z)||A);const P=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let X=S===E||!d&&S.startsWith(E)&&S.charAt(P)==="/",D=A!=null&&(A===E||!d&&A.startsWith(E)&&A.charAt(E.length)==="/"),W={isActive:X,isPending:D,isTransitioning:M},V=X?o:void 0,de;typeof l=="function"?de=l(W):de=[l,X?"active":null,D?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let he=typeof p=="function"?p(W):p;return b.createElement(Nl,{...g,"aria-current":V,className:de,ref:y,style:he,to:f,viewTransition:h},typeof x=="function"?x(W):x)});Yt.displayName="NavLink";var yj=b.forwardRef(({discover:n="render",fetcherKey:o,navigate:s,reloadDocument:l,replace:d,state:p,method:f=hl,action:h,onSubmit:x,relative:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:T,...R},k)=>{let{unstable_useTransitions:z}=b.useContext(ra),M=kj(),E=Nj(h,{relative:g}),S=f.toLowerCase()==="get"?"get":"post",A=typeof h=="string"&&Qx.test(h),P=X=>{if(x&&x(X),X.defaultPrevented)return;X.preventDefault();let D=X.nativeEvent.submitter,W=D?.getAttribute("formmethod")||f,V=()=>M(D||X.currentTarget,{fetcherKey:o,method:W,navigate:s,replace:d,state:p,relative:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:T});z&&s!==!1?b.startTransition(()=>V()):V()};return b.createElement("form",{ref:k,method:S,action:E,onSubmit:l?x:P,...R,"data-discover":!A&&n==="render"?"true":void 0})});yj.displayName="Form";function vj(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zx(n){let o=b.useContext(dr);return rt(o,vj(n)),o}function jj(n,{target:o,replace:s,state:l,preventScrollReset:d,relative:p,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:x}={}){let g=vt(),y=Ma(),v=Do(n,{relative:p});return b.useCallback(T=>{if(Kv(T,o)){T.preventDefault();let R=s!==void 0?s:vo(y)===vo(v),k=()=>g(n,{replace:R,state:l,preventScrollReset:d,relative:p,viewTransition:f,unstable_defaultShouldRevalidate:h});x?b.startTransition(()=>k()):k()}},[y,g,v,s,l,o,n,d,p,f,h,x])}var wj=0,Sj=()=>`__${String(++wj)}__`;function kj(){let{router:n}=Zx("useSubmit"),{basename:o}=b.useContext(ra),s=Pv(),l=n.fetch,d=n.navigate;return b.useCallback(async(p,f={})=>{let{action:h,method:x,encType:g,formData:y,body:v}=aj(p,o);if(f.navigate===!1){let T=f.fetcherKey||Sj();await l(T,s,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:v,formMethod:f.method||x,formEncType:f.encType||g,flushSync:f.flushSync})}else await d(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:v,formMethod:f.method||x,formEncType:f.encType||g,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,d,o,s])}function Nj(n,{relative:o}={}){let{basename:s}=b.useContext(ra),l=b.useContext(ba);rt(l,"useFormAction must be used inside a RouteContext");let[d]=l.matches.slice(-1),p={...Do(n||".",{relative:o})},f=Ma();if(n==null){p.search=f.search;let h=new URLSearchParams(p.search),x=h.getAll("index");if(x.some(y=>y==="")){h.delete("index"),x.filter(v=>v).forEach(v=>h.append("index",v));let y=h.toString();p.search=y?`?${y}`:""}}return(!n||n===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:tn([s,p.pathname])),vo(p)}function Cj(n,{relative:o}={}){let s=b.useContext(Px);rt(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Zx("useViewTransitionState"),d=Do(n,{relative:o});if(!s.isTransitioning)return!1;let p=nn(s.currentLocation.pathname,l)||s.currentLocation.pathname,f=nn(s.nextLocation.pathname,l)||s.nextLocation.pathname;return kl(d.pathname,f)!=null||kl(d.pathname,p)!=null}var Mu={exports:{}},Ou={};var u0;function Tj(){if(u0)return Ou;u0=1;var n=Yl();function o(x,g){return x===g&&(x!==0||1/x===1/g)||x!==x&&g!==g}var s=typeof Object.is=="function"?Object.is:o,l=n.useSyncExternalStore,d=n.useRef,p=n.useEffect,f=n.useMemo,h=n.useDebugValue;return Ou.useSyncExternalStoreWithSelector=function(x,g,y,v,T){var R=d(null);if(R.current===null){var k={hasValue:!1,value:null};R.current=k}else k=R.current;R=f(function(){function M(X){if(!E){if(E=!0,S=X,X=v(X),T!==void 0&&k.hasValue){var D=k.value;if(T(D,X))return A=D}return A=X}if(D=A,s(S,X))return D;var W=v(X);return T!==void 0&&T(D,W)?(S=X,D):(S=X,A=W)}var E=!1,S,A,P=y===void 0?null:y;return[function(){return M(g())},P===null?void 0:function(){return M(P())}]},[g,y,v,T]);var z=l(x,R[0],R[1]);return p(function(){k.hasValue=!0,k.value=z},[z]),h(z),z},Ou}var p0;function zj(){return p0||(p0=1,Mu.exports=Tj()),Mu.exports}var Aj=zj();function Ej(n){n()}function Dj(){let n=null,o=null;return{clear(){n=null,o=null},notify(){Ej(()=>{let s=n;for(;s;)s.callback(),s=s.next})},get(){const s=[];let l=n;for(;l;)s.push(l),l=l.next;return s},subscribe(s){let l=!0;const d=o={callback:s,next:null,prev:o};return d.prev?d.prev.next=d:n=d,function(){!l||n===null||(l=!1,d.next?d.next.prev=d.prev:o=d.prev,d.prev?d.prev.next=d.next:n=d.next)}}}}var f0={notify(){},get:()=>[]};function Rj(n,o){let s,l=f0,d=0,p=!1;function f(z){y();const M=l.subscribe(z);let E=!1;return()=>{E||(E=!0,M(),v())}}function h(){l.notify()}function x(){k.onStateChange&&k.onStateChange()}function g(){return p}function y(){d++,s||(s=n.subscribe(x),l=Dj())}function v(){d--,s&&d===0&&(s(),s=void 0,l.clear(),l=f0)}function T(){p||(p=!0,y())}function R(){p&&(p=!1,v())}const k={addNestedSub:f,notifyNestedSubs:h,handleChangeWrapper:x,isSubscribed:g,trySubscribe:T,tryUnsubscribe:R,getListeners:()=>l};return k}var Mj=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Oj=Mj(),_j=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Bj=_j(),Lj=()=>Oj||Bj?b.useLayoutEffect:b.useEffect,Uj=Lj(),Fj=Symbol.for("react-redux-context"),Wj=typeof globalThis<"u"?globalThis:{};function Hj(){if(!b.createContext)return{};const n=Wj[Fj]??=new Map;let o=n.get(b.createContext);return o||(o=b.createContext(null),n.set(b.createContext,o)),o}var _n=Hj();function Pj(n){const{children:o,context:s,serverState:l,store:d}=n,p=b.useMemo(()=>{const x=Rj(d);return{store:d,subscription:x,getServerState:l?()=>l:void 0}},[d,l]),f=b.useMemo(()=>d.getState(),[d]);Uj(()=>{const{subscription:x}=p;return x.onStateChange=x.notifyNestedSubs,x.trySubscribe(),f!==d.getState()&&x.notifyNestedSubs(),()=>{x.tryUnsubscribe(),x.onStateChange=void 0}},[p,f]);const h=s||_n;return b.createElement(h.Provider,{value:p},o)}var $j=Pj;function Wp(n=_n){return function(){return b.useContext(n)}}var Kx=Wp();function eb(n=_n){const o=n===_n?Kx:Wp(n),s=()=>{const{store:l}=o();return l};return Object.assign(s,{withTypes:()=>s}),s}var Ij=eb();function Yj(n=_n){const o=n===_n?Ij:eb(n),s=()=>o().dispatch;return Object.assign(s,{withTypes:()=>s}),s}var Ro=Yj(),Vj=(n,o)=>n===o;function qj(n=_n){const o=n===_n?Kx:Wp(n),s=(l,d={})=>{const{equalityFn:p=Vj}=typeof d=="function"?{equalityFn:d}:d,f=o(),{store:h,subscription:x,getServerState:g}=f;b.useRef(!0);const y=b.useCallback({[l.name](T){return l(T)}}[l.name],[l]),v=Aj.useSyncExternalStoreWithSelector(x.addNestedSub,h.getState,g||h.getState,y,p);return b.useDebugValue(v),v};return Object.assign(s,{withTypes:()=>s}),s}var Gl=qj();function At(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var Gj=typeof Symbol=="function"&&Symbol.observable||"@@observable",g0=Gj,_u=()=>Math.random().toString(36).substring(7).split("").join("."),Xj={INIT:`@@redux/INIT${_u()}`,REPLACE:`@@redux/REPLACE${_u()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${_u()}`},Cl=Xj;function Hp(n){if(typeof n!="object"||n===null)return!1;let o=n;for(;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return Object.getPrototypeOf(n)===o||Object.getPrototypeOf(n)===null}function tb(n,o,s){if(typeof n!="function")throw new Error(At(2));if(typeof o=="function"&&typeof s=="function"||typeof s=="function"&&typeof arguments[3]=="function")throw new Error(At(0));if(typeof o=="function"&&typeof s>"u"&&(s=o,o=void 0),typeof s<"u"){if(typeof s!="function")throw new Error(At(1));return s(tb)(n,o)}let l=n,d=o,p=new Map,f=p,h=0,x=!1;function g(){f===p&&(f=new Map,p.forEach((M,E)=>{f.set(E,M)}))}function y(){if(x)throw new Error(At(3));return d}function v(M){if(typeof M!="function")throw new Error(At(4));if(x)throw new Error(At(5));let E=!0;g();const S=h++;return f.set(S,M),function(){if(E){if(x)throw new Error(At(6));E=!1,g(),f.delete(S),p=null}}}function T(M){if(!Hp(M))throw new Error(At(7));if(typeof M.type>"u")throw new Error(At(8));if(typeof M.type!="string")throw new Error(At(17));if(x)throw new Error(At(9));try{x=!0,d=l(d,M)}finally{x=!1}return(p=f).forEach(S=>{S()}),M}function R(M){if(typeof M!="function")throw new Error(At(10));l=M,T({type:Cl.REPLACE})}function k(){const M=v;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(At(11));function S(){const P=E;P.next&&P.next(y())}return S(),{unsubscribe:M(S)}},[g0](){return this}}}return T({type:Cl.INIT}),{dispatch:T,subscribe:v,getState:y,replaceReducer:R,[g0]:k}}function Jj(n){Object.keys(n).forEach(o=>{const s=n[o];if(typeof s(void 0,{type:Cl.INIT})>"u")throw new Error(At(12));if(typeof s(void 0,{type:Cl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(At(13))})}function Qj(n){const o=Object.keys(n),s={};for(let p=0;p<o.length;p++){const f=o[p];typeof n[f]=="function"&&(s[f]=n[f])}const l=Object.keys(s);let d;try{Jj(s)}catch(p){d=p}return function(f={},h){if(d)throw d;let x=!1;const g={};for(let y=0;y<l.length;y++){const v=l[y],T=s[v],R=f[v],k=T(R,h);if(typeof k>"u")throw h&&h.type,new Error(At(14));g[v]=k,x=x||k!==R}return x=x||l.length!==Object.keys(f).length,x?g:f}}function Tl(...n){return n.length===0?o=>o:n.length===1?n[0]:n.reduce((o,s)=>(...l)=>o(s(...l)))}function Zj(...n){return o=>(s,l)=>{const d=o(s,l);let p=()=>{throw new Error(At(15))};const f={getState:d.getState,dispatch:(x,...g)=>p(x,...g)},h=n.map(x=>x(f));return p=Tl(...h)(d.dispatch),{...d,dispatch:p}}}function Kj(n){return Hp(n)&&"type"in n&&typeof n.type=="string"}var ab=Symbol.for("immer-nothing"),m0=Symbol.for("immer-draftable"),Bt=Symbol.for("immer-state");function wa(n,...o){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var ia=Object,or=ia.getPrototypeOf,zl="constructor",Xl="prototype",ap="configurable",Al="enumerable",bl="writable",jo="value",rn=n=>!!n&&!!n[Bt];function Sa(n){return n?nb(n)||Ql(n)||!!n[m0]||!!n[zl]?.[m0]||Zl(n)||Kl(n):!1}var e5=ia[Xl][zl].toString(),h0=new WeakMap;function nb(n){if(!n||!Pp(n))return!1;const o=or(n);if(o===null||o===ia[Xl])return!0;const s=ia.hasOwnProperty.call(o,zl)&&o[zl];if(s===Object)return!0;if(!er(s))return!1;let l=h0.get(s);return l===void 0&&(l=Function.toString.call(s),h0.set(s,l)),l===e5}function Jl(n,o,s=!0){Mo(n)===0?(s?Reflect.ownKeys(n):ia.keys(n)).forEach(d=>{o(d,n[d],n)}):n.forEach((l,d)=>o(d,l,n))}function Mo(n){const o=n[Bt];return o?o.type_:Ql(n)?1:Zl(n)?2:Kl(n)?3:0}var x0=(n,o,s=Mo(n))=>s===2?n.has(o):ia[Xl].hasOwnProperty.call(n,o),np=(n,o,s=Mo(n))=>s===2?n.get(o):n[o],El=(n,o,s,l=Mo(n))=>{l===2?n.set(o,s):l===3?n.add(s):n[o]=s};function t5(n,o){return n===o?n!==0||1/n===1/o:n!==n&&o!==o}var Ql=Array.isArray,Zl=n=>n instanceof Map,Kl=n=>n instanceof Set,Pp=n=>typeof n=="object",er=n=>typeof n=="function",Bu=n=>typeof n=="boolean";function a5(n){const o=+n;return Number.isInteger(o)&&String(o)===n}var Ka=n=>n.copy_||n.base_,$p=n=>n.modified_?n.copy_:n.base_;function ip(n,o){if(Zl(n))return new Map(n);if(Kl(n))return new Set(n);if(Ql(n))return Array[Xl].slice.call(n);const s=nb(n);if(o===!0||o==="class_only"&&!s){const l=ia.getOwnPropertyDescriptors(n);delete l[Bt];let d=Reflect.ownKeys(l);for(let p=0;p<d.length;p++){const f=d[p],h=l[f];h[bl]===!1&&(h[bl]=!0,h[ap]=!0),(h.get||h.set)&&(l[f]={[ap]:!0,[bl]:!0,[Al]:h[Al],[jo]:n[f]})}return ia.create(or(n),l)}else{const l=or(n);if(l!==null&&s)return{...n};const d=ia.create(l);return ia.assign(d,n)}}function Ip(n,o=!1){return ec(n)||rn(n)||!Sa(n)||(Mo(n)>1&&ia.defineProperties(n,{set:rl,add:rl,clear:rl,delete:rl}),ia.freeze(n),o&&Jl(n,(s,l)=>{Ip(l,!0)},!1)),n}function n5(){wa(2)}var rl={[jo]:n5};function ec(n){return n===null||!Pp(n)?!0:ia.isFrozen(n)}var Dl="MapSet",rp="Patches",b0="ArrayMethods",ib={};function di(n){const o=ib[n];return o||wa(0,n),o}var y0=n=>!!ib[n],wo,rb=()=>wo,i5=(n,o)=>({drafts_:[],parent_:n,immer_:o,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:y0(Dl)?di(Dl):void 0,arrayMethodsPlugin_:y0(b0)?di(b0):void 0});function v0(n,o){o&&(n.patchPlugin_=di(rp),n.patches_=[],n.inversePatches_=[],n.patchListener_=o)}function op(n){sp(n),n.drafts_.forEach(r5),n.drafts_=null}function sp(n){n===wo&&(wo=n.parent_)}var j0=n=>wo=i5(wo,n);function r5(n){const o=n[Bt];o.type_===0||o.type_===1?o.revoke_():o.revoked_=!0}function w0(n,o){o.unfinalizedDrafts_=o.drafts_.length;const s=o.drafts_[0];if(n!==void 0&&n!==s){s[Bt].modified_&&(op(o),wa(4)),Sa(n)&&(n=S0(o,n));const{patchPlugin_:d}=o;d&&d.generateReplacementPatches_(s[Bt].base_,n,o)}else n=S0(o,s);return o5(o,n,!0),op(o),o.patches_&&o.patchListener_(o.patches_,o.inversePatches_),n!==ab?n:void 0}function S0(n,o){if(ec(o))return o;const s=o[Bt];if(!s)return Rl(o,n.handledSet_,n);if(!tc(s,n))return o;if(!s.modified_)return s.base_;if(!s.finalized_){const{callbacks_:l}=s;if(l)for(;l.length>0;)l.pop()(n);lb(s,n)}return s.copy_}function o5(n,o,s=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Ip(o,s)}function ob(n){n.finalized_=!0,n.scope_.unfinalizedDrafts_--}var tc=(n,o)=>n.scope_===o,s5=[];function sb(n,o,s,l){const d=Ka(n),p=n.type_;if(l!==void 0&&np(d,l,p)===o){El(d,l,s,p);return}if(!n.draftLocations_){const h=n.draftLocations_=new Map;Jl(d,(x,g)=>{if(rn(g)){const y=h.get(g)||[];y.push(x),h.set(g,y)}})}const f=n.draftLocations_.get(o)??s5;for(const h of f)El(d,h,s,p)}function l5(n,o,s){n.callbacks_.push(function(d){const p=o;if(!p||!tc(p,d))return;d.mapSetPlugin_?.fixSetContents(p);const f=$p(p);sb(n,p.draft_??p,f,s),lb(p,d)})}function lb(n,o){if(n.modified_&&!n.finalized_&&(n.type_===3||n.type_===1&&n.allIndicesReassigned_||(n.assigned_?.size??0)>0)){const{patchPlugin_:l}=o;if(l){const d=l.getPath(n);d&&l.generatePatches_(n,d,o)}ob(n)}}function c5(n,o,s){const{scope_:l}=n;if(rn(s)){const d=s[Bt];tc(d,l)&&d.callbacks_.push(function(){yl(n);const f=$p(d);sb(n,s,f,o)})}else Sa(s)&&n.callbacks_.push(function(){const p=Ka(n);n.type_===3?p.has(s)&&Rl(s,l.handledSet_,l):np(p,o,n.type_)===s&&l.drafts_.length>1&&(n.assigned_.get(o)??!1)===!0&&n.copy_&&Rl(np(n.copy_,o,n.type_),l.handledSet_,l)})}function Rl(n,o,s){return!s.immer_.autoFreeze_&&s.unfinalizedDrafts_<1||rn(n)||o.has(n)||!Sa(n)||ec(n)||(o.add(n),Jl(n,(l,d)=>{if(rn(d)){const p=d[Bt];if(tc(p,s)){const f=$p(p);El(n,l,f,n.type_),ob(p)}}else Sa(d)&&Rl(d,o,s)})),n}function d5(n,o){const s=Ql(n),l={type_:s?1:0,scope_:o?o.scope_:rb(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:o,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let d=l,p=Ml;s&&(d=[l],p=So);const{revoke:f,proxy:h}=Proxy.revocable(d,p);return l.draft_=h,l.revoke_=f,[h,l]}var Ml={get(n,o){if(o===Bt)return n;let s=n.scope_.arrayMethodsPlugin_;const l=n.type_===1&&typeof o=="string";if(l&&s?.isArrayOperationMethod(o))return s.createMethodInterceptor(n,o);const d=Ka(n);if(!x0(d,o,n.type_))return u5(n,d,o);const p=d[o];if(n.finalized_||!Sa(p)||l&&n.operationMethod&&s?.isMutatingArrayMethod(n.operationMethod)&&a5(o))return p;if(p===Lu(n.base_,o)){yl(n);const f=n.type_===1?+o:o,h=cp(n.scope_,p,n,f);return n.copy_[f]=h}return p},has(n,o){return o in Ka(n)},ownKeys(n){return Reflect.ownKeys(Ka(n))},set(n,o,s){const l=cb(Ka(n),o);if(l?.set)return l.set.call(n.draft_,s),!0;if(!n.modified_){const d=Lu(Ka(n),o),p=d?.[Bt];if(p&&p.base_===s)return n.copy_[o]=s,n.assigned_.set(o,!1),!0;if(t5(s,d)&&(s!==void 0||x0(n.base_,o,n.type_)))return!0;yl(n),lp(n)}return n.copy_[o]===s&&(s!==void 0||o in n.copy_)||Number.isNaN(s)&&Number.isNaN(n.copy_[o])||(n.copy_[o]=s,n.assigned_.set(o,!0),c5(n,o,s)),!0},deleteProperty(n,o){return yl(n),Lu(n.base_,o)!==void 0||o in n.base_?(n.assigned_.set(o,!1),lp(n)):n.assigned_.delete(o),n.copy_&&delete n.copy_[o],!0},getOwnPropertyDescriptor(n,o){const s=Ka(n),l=Reflect.getOwnPropertyDescriptor(s,o);return l&&{[bl]:!0,[ap]:n.type_!==1||o!=="length",[Al]:l[Al],[jo]:s[o]}},defineProperty(){wa(11)},getPrototypeOf(n){return or(n.base_)},setPrototypeOf(){wa(12)}},So={};for(let n in Ml){let o=Ml[n];So[n]=function(){const s=arguments;return s[0]=s[0][0],o.apply(this,s)}}So.deleteProperty=function(n,o){return So.set.call(this,n,o,void 0)};So.set=function(n,o,s){return Ml.set.call(this,n[0],o,s,n[0])};function Lu(n,o){const s=n[Bt];return(s?Ka(s):n)[o]}function u5(n,o,s){const l=cb(o,s);return l?jo in l?l[jo]:l.get?.call(n.draft_):void 0}function cb(n,o){if(!(o in n))return;let s=or(n);for(;s;){const l=Object.getOwnPropertyDescriptor(s,o);if(l)return l;s=or(s)}}function lp(n){n.modified_||(n.modified_=!0,n.parent_&&lp(n.parent_))}function yl(n){n.copy_||(n.assigned_=new Map,n.copy_=ip(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var p5=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(o,s,l)=>{if(er(o)&&!er(s)){const p=s;s=o;const f=this;return function(x=p,...g){return f.produce(x,y=>s.call(this,y,...g))}}er(s)||wa(6),l!==void 0&&!er(l)&&wa(7);let d;if(Sa(o)){const p=j0(this),f=cp(p,o,void 0);let h=!0;try{d=s(f),h=!1}finally{h?op(p):sp(p)}return v0(p,l),w0(d,p)}else if(!o||!Pp(o)){if(d=s(o),d===void 0&&(d=o),d===ab&&(d=void 0),this.autoFreeze_&&Ip(d,!0),l){const p=[],f=[];di(rp).generateReplacementPatches_(o,d,{patches_:p,inversePatches_:f}),l(p,f)}return d}else wa(1,o)},this.produceWithPatches=(o,s)=>{if(er(o))return(f,...h)=>this.produceWithPatches(f,x=>o(x,...h));let l,d;return[this.produce(o,s,(f,h)=>{l=f,d=h}),l,d]},Bu(n?.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),Bu(n?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(n.useStrictShallowCopy),Bu(n?.useStrictIteration)&&this.setUseStrictIteration(n.useStrictIteration)}createDraft(n){Sa(n)||wa(8),rn(n)&&(n=f5(n));const o=j0(this),s=cp(o,n,void 0);return s[Bt].isManual_=!0,sp(o),s}finishDraft(n,o){const s=n&&n[Bt];(!s||!s.isManual_)&&wa(9);const{scope_:l}=s;return v0(l,o),w0(void 0,l)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}setUseStrictIteration(n){this.useStrictIteration_=n}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(n,o){let s;for(s=o.length-1;s>=0;s--){const d=o[s];if(d.path.length===0&&d.op==="replace"){n=d.value;break}}s>-1&&(o=o.slice(s+1));const l=di(rp).applyPatches_;return rn(n)?l(n,o):this.produce(n,d=>l(d,o))}};function cp(n,o,s,l){const[d,p]=Zl(o)?di(Dl).proxyMap_(o,s):Kl(o)?di(Dl).proxySet_(o,s):d5(o,s);return(s?.scope_??rb()).drafts_.push(d),p.callbacks_=s?.callbacks_??[],p.key_=l,s&&l!==void 0?l5(s,p,l):p.callbacks_.push(function(x){x.mapSetPlugin_?.fixSetContents(p);const{patchPlugin_:g}=x;p.modified_&&g&&g.generatePatches_(p,[],x)}),d}function f5(n){return rn(n)||wa(10,n),db(n)}function db(n){if(!Sa(n)||ec(n))return n;const o=n[Bt];let s,l=!0;if(o){if(!o.modified_)return o.base_;o.finalized_=!0,s=ip(n,o.scope_.immer_.useStrictShallowCopy_),l=o.scope_.immer_.shouldUseStrictIteration()}else s=ip(n,!0);return Jl(s,(d,p)=>{El(s,d,db(p))},l),o&&(o.finalized_=!1),s}var g5=new p5,ub=g5.produce;function pb(n){return({dispatch:s,getState:l})=>d=>p=>typeof p=="function"?p(s,l,n):d(p)}var m5=pb(),h5=pb,x5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Tl:Tl.apply(null,arguments)};function k0(n,o){function s(...l){if(o){let d=o(...l);if(!d)throw new Error(an(0));return{type:n,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:n,payload:l[0]}}return s.toString=()=>`${n}`,s.type=n,s.match=l=>Kj(l)&&l.type===n,s}var fb=class ho extends Array{constructor(...o){super(...o),Object.setPrototypeOf(this,ho.prototype)}static get[Symbol.species](){return ho}concat(...o){return super.concat.apply(this,o)}prepend(...o){return o.length===1&&Array.isArray(o[0])?new ho(...o[0].concat(this)):new ho(...o.concat(this))}};function N0(n){return Sa(n)?ub(n,()=>{}):n}function ol(n,o,s){return n.has(o)?n.get(o):n.set(o,s(o)).get(o)}function b5(n){return typeof n=="boolean"}var y5=()=>function(o){const{thunk:s=!0,immutableCheck:l=!0,serializableCheck:d=!0,actionCreatorCheck:p=!0}=o??{};let f=new fb;return s&&(b5(s)?f.push(m5):f.push(h5(s.extraArgument))),f},v5="RTK_autoBatch",C0=n=>o=>{setTimeout(o,n)},j5=(n={type:"raf"})=>o=>(...s)=>{const l=o(...s);let d=!0,p=!1,f=!1;const h=new Set,x=n.type==="tick"?queueMicrotask:n.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:C0(10):n.type==="callback"?n.queueNotification:C0(n.timeout),g=()=>{f=!1,p&&(p=!1,h.forEach(y=>y()))};return Object.assign({},l,{subscribe(y){const v=()=>d&&y(),T=l.subscribe(v);return h.add(y),()=>{T(),h.delete(y)}},dispatch(y){try{return d=!y?.meta?.[v5],p=!d,p&&(f||(f=!0,x(g))),l.dispatch(y)}finally{d=!0}}})},w5=n=>function(s){const{autoBatch:l=!0}=s??{};let d=new fb(n);return l&&d.push(j5(typeof l=="object"?l:void 0)),d};function S5(n){const o=y5(),{reducer:s=void 0,middleware:l,devTools:d=!0,preloadedState:p=void 0,enhancers:f=void 0}=n||{};let h;if(typeof s=="function")h=s;else if(Hp(s))h=Qj(s);else throw new Error(an(1));let x;typeof l=="function"?x=l(o):x=o();let g=Tl;d&&(g=x5({trace:!1,...typeof d=="object"&&d}));const y=Zj(...x),v=w5(y);let T=typeof f=="function"?f(v):v();const R=g(...T);return tb(h,p,R)}function gb(n){const o={},s=[];let l;const d={addCase(p,f){const h=typeof p=="string"?p:p.type;if(!h)throw new Error(an(28));if(h in o)throw new Error(an(29));return o[h]=f,d},addAsyncThunk(p,f){return f.pending&&(o[p.pending.type]=f.pending),f.rejected&&(o[p.rejected.type]=f.rejected),f.fulfilled&&(o[p.fulfilled.type]=f.fulfilled),f.settled&&s.push({matcher:p.settled,reducer:f.settled}),d},addMatcher(p,f){return s.push({matcher:p,reducer:f}),d},addDefaultCase(p){return l=p,d}};return n(d),[o,s,l]}function k5(n){return typeof n=="function"}function N5(n,o){let[s,l,d]=gb(o),p;if(k5(n))p=()=>N0(n());else{const h=N0(n);p=()=>h}function f(h=p(),x){let g=[s[x.type],...l.filter(({matcher:y})=>y(x)).map(({reducer:y})=>y)];return g.filter(y=>!!y).length===0&&(g=[d]),g.reduce((y,v)=>{if(v)if(rn(y)){const R=v(y,x);return R===void 0?y:R}else{if(Sa(y))return ub(y,T=>v(T,x));{const T=v(y,x);if(T===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return T}}return y},h)}return f.getInitialState=p,f}var C5=Symbol.for("rtk-slice-createasyncthunk");function T5(n,o){return`${n}/${o}`}function z5({creators:n}={}){const o=n?.asyncThunk?.[C5];return function(l){const{name:d,reducerPath:p=d}=l;if(!d)throw new Error(an(11));const f=(typeof l.reducers=="function"?l.reducers(D5()):l.reducers)||{},h=Object.keys(f),x={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},g={addCase(A,P){const X=typeof A=="string"?A:A.type;if(!X)throw new Error(an(12));if(X in x.sliceCaseReducersByType)throw new Error(an(13));return x.sliceCaseReducersByType[X]=P,g},addMatcher(A,P){return x.sliceMatchers.push({matcher:A,reducer:P}),g},exposeAction(A,P){return x.actionCreators[A]=P,g},exposeCaseReducer(A,P){return x.sliceCaseReducersByName[A]=P,g}};h.forEach(A=>{const P=f[A],X={reducerName:A,type:T5(d,A),createNotation:typeof l.reducers=="function"};M5(P)?_5(X,P,g,o):R5(X,P,g)});function y(){const[A={},P=[],X=void 0]=typeof l.extraReducers=="function"?gb(l.extraReducers):[l.extraReducers],D={...A,...x.sliceCaseReducersByType};return N5(l.initialState,W=>{for(let V in D)W.addCase(V,D[V]);for(let V of x.sliceMatchers)W.addMatcher(V.matcher,V.reducer);for(let V of P)W.addMatcher(V.matcher,V.reducer);X&&W.addDefaultCase(X)})}const v=A=>A,T=new Map,R=new WeakMap;let k;function z(A,P){return k||(k=y()),k(A,P)}function M(){return k||(k=y()),k.getInitialState()}function E(A,P=!1){function X(W){let V=W[A];return typeof V>"u"&&P&&(V=ol(R,X,M)),V}function D(W=v){const V=ol(T,P,()=>new WeakMap);return ol(V,W,()=>{const de={};for(const[he,J]of Object.entries(l.selectors??{}))de[he]=A5(J,W,()=>ol(R,W,M),P);return de})}return{reducerPath:A,getSelectors:D,get selectors(){return D(X)},selectSlice:X}}const S={name:d,reducer:z,actions:x.actionCreators,caseReducers:x.sliceCaseReducersByName,getInitialState:M,...E(p),injectInto(A,{reducerPath:P,...X}={}){const D=P??p;return A.inject({reducerPath:D,reducer:z},X),{...S,...E(D,!0)}}};return S}}function A5(n,o,s,l){function d(p,...f){let h=o(p);return typeof h>"u"&&l&&(h=s()),n(h,...f)}return d.unwrapped=n,d}var E5=z5();function D5(){function n(o,s){return{_reducerDefinitionType:"asyncThunk",payloadCreator:o,...s}}return n.withTypes=()=>n,{reducer(o){return Object.assign({[o.name](...s){return o(...s)}}[o.name],{_reducerDefinitionType:"reducer"})},preparedReducer(o,s){return{_reducerDefinitionType:"reducerWithPrepare",prepare:o,reducer:s}},asyncThunk:n}}function R5({type:n,reducerName:o,createNotation:s},l,d){let p,f;if("reducer"in l){if(s&&!O5(l))throw new Error(an(17));p=l.reducer,f=l.prepare}else p=l;d.addCase(n,p).exposeCaseReducer(o,p).exposeAction(o,f?k0(n,f):k0(n))}function M5(n){return n._reducerDefinitionType==="asyncThunk"}function O5(n){return n._reducerDefinitionType==="reducerWithPrepare"}function _5({type:n,reducerName:o},s,l,d){if(!d)throw new Error(an(18));const{payloadCreator:p,fulfilled:f,pending:h,rejected:x,settled:g,options:y}=s,v=d(n,p,y);l.exposeAction(o,v),f&&l.addCase(v.fulfilled,f),h&&l.addCase(v.pending,h),x&&l.addCase(v.rejected,x),g&&l.addMatcher(v.settled,g),l.exposeCaseReducer(o,{fulfilled:f||sl,pending:h||sl,rejected:x||sl,settled:g||sl})}function sl(){}function an(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}const B5={user:null,isLoggedIn:!1},mb=E5({name:"auth",initialState:B5,reducers:{loginSuccess:(n,o)=>{n.user=o.payload,n.isLoggedIn=!0},logout:n=>{n.user=null,n.isLoggedIn=!1,localStorage.removeItem("authUser"),localStorage.removeItem("token"),localStorage.removeItem("userRole")}}}),{loginSuccess:Ol,logout:hb}=mb.actions,L5=mb.reducer,Bn="/assets/vvcmclogo-C6hbLrf7.jpg",ko="/assets/ajivir5-DJJi1rt9.jpeg",Oo="/assets/bg1-BQodPINJ.jpeg";function xb(n,o){return function(){return n.apply(o,arguments)}}const{toString:U5}=Object.prototype,{getPrototypeOf:Yp}=Object,{iterator:ac,toStringTag:bb}=Symbol,nc=(n=>o=>{const s=U5.call(o);return n[s]||(n[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),ka=n=>(n=n.toLowerCase(),o=>nc(o)===n),ic=n=>o=>typeof o===n,{isArray:pr}=Array,sr=ic("undefined");function _o(n){return n!==null&&!sr(n)&&n.constructor!==null&&!sr(n.constructor)&&Vt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const yb=ka("ArrayBuffer");function F5(n){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(n):o=n&&n.buffer&&yb(n.buffer),o}const W5=ic("string"),Vt=ic("function"),vb=ic("number"),Bo=n=>n!==null&&typeof n=="object",H5=n=>n===!0||n===!1,vl=n=>{if(nc(n)!=="object")return!1;const o=Yp(n);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(bb in n)&&!(ac in n)},P5=n=>{if(!Bo(n)||_o(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},$5=ka("Date"),I5=ka("File"),Y5=ka("Blob"),V5=ka("FileList"),q5=n=>Bo(n)&&Vt(n.pipe),G5=n=>{let o;return n&&(typeof FormData=="function"&&n instanceof FormData||Vt(n.append)&&((o=nc(n))==="formdata"||o==="object"&&Vt(n.toString)&&n.toString()==="[object FormData]"))},X5=ka("URLSearchParams"),[J5,Q5,Z5,K5]=["ReadableStream","Request","Response","Headers"].map(ka),ew=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Lo(n,o,{allOwnKeys:s=!1}={}){if(n===null||typeof n>"u")return;let l,d;if(typeof n!="object"&&(n=[n]),pr(n))for(l=0,d=n.length;l<d;l++)o.call(null,n[l],l,n);else{if(_o(n))return;const p=s?Object.getOwnPropertyNames(n):Object.keys(n),f=p.length;let h;for(l=0;l<f;l++)h=p[l],o.call(null,n[h],h,n)}}function jb(n,o){if(_o(n))return null;o=o.toLowerCase();const s=Object.keys(n);let l=s.length,d;for(;l-- >0;)if(d=s[l],o===d.toLowerCase())return d;return null}const ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wb=n=>!sr(n)&&n!==ri;function dp(){const{caseless:n,skipUndefined:o}=wb(this)&&this||{},s={},l=(d,p)=>{const f=n&&jb(s,p)||p;vl(s[f])&&vl(d)?s[f]=dp(s[f],d):vl(d)?s[f]=dp({},d):pr(d)?s[f]=d.slice():(!o||!sr(d))&&(s[f]=d)};for(let d=0,p=arguments.length;d<p;d++)arguments[d]&&Lo(arguments[d],l);return s}const tw=(n,o,s,{allOwnKeys:l}={})=>(Lo(o,(d,p)=>{s&&Vt(d)?n[p]=xb(d,s):n[p]=d},{allOwnKeys:l}),n),aw=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),nw=(n,o,s,l)=>{n.prototype=Object.create(o.prototype,l),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:o.prototype}),s&&Object.assign(n.prototype,s)},iw=(n,o,s,l)=>{let d,p,f;const h={};if(o=o||{},n==null)return o;do{for(d=Object.getOwnPropertyNames(n),p=d.length;p-- >0;)f=d[p],(!l||l(f,n,o))&&!h[f]&&(o[f]=n[f],h[f]=!0);n=s!==!1&&Yp(n)}while(n&&(!s||s(n,o))&&n!==Object.prototype);return o},rw=(n,o,s)=>{n=String(n),(s===void 0||s>n.length)&&(s=n.length),s-=o.length;const l=n.indexOf(o,s);return l!==-1&&l===s},ow=n=>{if(!n)return null;if(pr(n))return n;let o=n.length;if(!vb(o))return null;const s=new Array(o);for(;o-- >0;)s[o]=n[o];return s},sw=(n=>o=>n&&o instanceof n)(typeof Uint8Array<"u"&&Yp(Uint8Array)),lw=(n,o)=>{const l=(n&&n[ac]).call(n);let d;for(;(d=l.next())&&!d.done;){const p=d.value;o.call(n,p[0],p[1])}},cw=(n,o)=>{let s;const l=[];for(;(s=n.exec(o))!==null;)l.push(s);return l},dw=ka("HTMLFormElement"),uw=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,l,d){return l.toUpperCase()+d}),T0=(({hasOwnProperty:n})=>(o,s)=>n.call(o,s))(Object.prototype),pw=ka("RegExp"),Sb=(n,o)=>{const s=Object.getOwnPropertyDescriptors(n),l={};Lo(s,(d,p)=>{let f;(f=o(d,p,n))!==!1&&(l[p]=f||d)}),Object.defineProperties(n,l)},fw=n=>{Sb(n,(o,s)=>{if(Vt(n)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const l=n[s];if(Vt(l)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},gw=(n,o)=>{const s={},l=d=>{d.forEach(p=>{s[p]=!0})};return pr(n)?l(n):l(String(n).split(o)),s},mw=()=>{},hw=(n,o)=>n!=null&&Number.isFinite(n=+n)?n:o;function xw(n){return!!(n&&Vt(n.append)&&n[bb]==="FormData"&&n[ac])}const bw=n=>{const o=new Array(10),s=(l,d)=>{if(Bo(l)){if(o.indexOf(l)>=0)return;if(_o(l))return l;if(!("toJSON"in l)){o[d]=l;const p=pr(l)?[]:{};return Lo(l,(f,h)=>{const x=s(f,d+1);!sr(x)&&(p[h]=x)}),o[d]=void 0,p}}return l};return s(n,0)},yw=ka("AsyncFunction"),vw=n=>n&&(Bo(n)||Vt(n))&&Vt(n.then)&&Vt(n.catch),kb=((n,o)=>n?setImmediate:o?((s,l)=>(ri.addEventListener("message",({source:d,data:p})=>{d===ri&&p===s&&l.length&&l.shift()()},!1),d=>{l.push(d),ri.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",Vt(ri.postMessage)),jw=typeof queueMicrotask<"u"?queueMicrotask.bind(ri):typeof process<"u"&&process.nextTick||kb,ww=n=>n!=null&&Vt(n[ac]),te={isArray:pr,isArrayBuffer:yb,isBuffer:_o,isFormData:G5,isArrayBufferView:F5,isString:W5,isNumber:vb,isBoolean:H5,isObject:Bo,isPlainObject:vl,isEmptyObject:P5,isReadableStream:J5,isRequest:Q5,isResponse:Z5,isHeaders:K5,isUndefined:sr,isDate:$5,isFile:I5,isBlob:Y5,isRegExp:pw,isFunction:Vt,isStream:q5,isURLSearchParams:X5,isTypedArray:sw,isFileList:V5,forEach:Lo,merge:dp,extend:tw,trim:ew,stripBOM:aw,inherits:nw,toFlatObject:iw,kindOf:nc,kindOfTest:ka,endsWith:rw,toArray:ow,forEachEntry:lw,matchAll:cw,isHTMLForm:dw,hasOwnProperty:T0,hasOwnProp:T0,reduceDescriptors:Sb,freezeMethods:fw,toObjectSet:gw,toCamelCase:uw,noop:mw,toFiniteNumber:hw,findKey:jb,global:ri,isContextDefined:wb,isSpecCompliantForm:xw,toJSONObject:bw,isAsyncFn:yw,isThenable:vw,setImmediate:kb,asap:jw,isIterable:ww};function De(n,o,s,l,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",o&&(this.code=o),s&&(this.config=s),l&&(this.request=l),d&&(this.response=d,this.status=d.status?d.status:null)}te.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.status}}});const Nb=De.prototype,Cb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Cb[n]={value:n}});Object.defineProperties(De,Cb);Object.defineProperty(Nb,"isAxiosError",{value:!0});De.from=(n,o,s,l,d,p)=>{const f=Object.create(Nb);te.toFlatObject(n,f,function(y){return y!==Error.prototype},g=>g!=="isAxiosError");const h=n&&n.message?n.message:"Error",x=o==null&&n?n.code:o;return De.call(f,h,x,s,l,d),n&&f.cause==null&&Object.defineProperty(f,"cause",{value:n,configurable:!0}),f.name=n&&n.name||"Error",p&&Object.assign(f,p),f};const Sw=null;function up(n){return te.isPlainObject(n)||te.isArray(n)}function Tb(n){return te.endsWith(n,"[]")?n.slice(0,-2):n}function z0(n,o,s){return n?n.concat(o).map(function(d,p){return d=Tb(d),!s&&p?"["+d+"]":d}).join(s?".":""):o}function kw(n){return te.isArray(n)&&!n.some(up)}const Nw=te.toFlatObject(te,{},null,function(o){return/^is[A-Z]/.test(o)});function rc(n,o,s){if(!te.isObject(n))throw new TypeError("target must be an object");o=o||new FormData,s=te.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(z,M){return!te.isUndefined(M[z])});const l=s.metaTokens,d=s.visitor||y,p=s.dots,f=s.indexes,x=(s.Blob||typeof Blob<"u"&&Blob)&&te.isSpecCompliantForm(o);if(!te.isFunction(d))throw new TypeError("visitor must be a function");function g(k){if(k===null)return"";if(te.isDate(k))return k.toISOString();if(te.isBoolean(k))return k.toString();if(!x&&te.isBlob(k))throw new De("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(k)||te.isTypedArray(k)?x&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function y(k,z,M){let E=k;if(k&&!M&&typeof k=="object"){if(te.endsWith(z,"{}"))z=l?z:z.slice(0,-2),k=JSON.stringify(k);else if(te.isArray(k)&&kw(k)||(te.isFileList(k)||te.endsWith(z,"[]"))&&(E=te.toArray(k)))return z=Tb(z),E.forEach(function(A,P){!(te.isUndefined(A)||A===null)&&o.append(f===!0?z0([z],P,p):f===null?z:z+"[]",g(A))}),!1}return up(k)?!0:(o.append(z0(M,z,p),g(k)),!1)}const v=[],T=Object.assign(Nw,{defaultVisitor:y,convertValue:g,isVisitable:up});function R(k,z){if(!te.isUndefined(k)){if(v.indexOf(k)!==-1)throw Error("Circular reference detected in "+z.join("."));v.push(k),te.forEach(k,function(E,S){(!(te.isUndefined(E)||E===null)&&d.call(o,E,te.isString(S)?S.trim():S,z,T))===!0&&R(E,z?z.concat(S):[S])}),v.pop()}}if(!te.isObject(n))throw new TypeError("data must be an object");return R(n),o}function A0(n){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(l){return o[l]})}function Vp(n,o){this._pairs=[],n&&rc(n,this,o)}const zb=Vp.prototype;zb.append=function(o,s){this._pairs.push([o,s])};zb.toString=function(o){const s=o?function(l){return o.call(this,l,A0)}:A0;return this._pairs.map(function(d){return s(d[0])+"="+s(d[1])},"").join("&")};function Cw(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ab(n,o,s){if(!o)return n;const l=s&&s.encode||Cw;te.isFunction(s)&&(s={serialize:s});const d=s&&s.serialize;let p;if(d?p=d(o,s):p=te.isURLSearchParams(o)?o.toString():new Vp(o,s).toString(l),p){const f=n.indexOf("#");f!==-1&&(n=n.slice(0,f)),n+=(n.indexOf("?")===-1?"?":"&")+p}return n}class E0{constructor(){this.handlers=[]}use(o,s,l){return this.handlers.push({fulfilled:o,rejected:s,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){te.forEach(this.handlers,function(l){l!==null&&o(l)})}}const Eb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tw=typeof URLSearchParams<"u"?URLSearchParams:Vp,zw=typeof FormData<"u"?FormData:null,Aw=typeof Blob<"u"?Blob:null,Ew={isBrowser:!0,classes:{URLSearchParams:Tw,FormData:zw,Blob:Aw},protocols:["http","https","file","blob","url","data"]},qp=typeof window<"u"&&typeof document<"u",pp=typeof navigator=="object"&&navigator||void 0,Dw=qp&&(!pp||["ReactNative","NativeScript","NS"].indexOf(pp.product)<0),Rw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Mw=qp&&window.location.href||"http://localhost",Ow=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qp,hasStandardBrowserEnv:Dw,hasStandardBrowserWebWorkerEnv:Rw,navigator:pp,origin:Mw},Symbol.toStringTag,{value:"Module"})),Dt={...Ow,...Ew};function _w(n,o){return rc(n,new Dt.classes.URLSearchParams,{visitor:function(s,l,d,p){return Dt.isNode&&te.isBuffer(s)?(this.append(l,s.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...o})}function Bw(n){return te.matchAll(/\w+|\[(\w*)]/g,n).map(o=>o[0]==="[]"?"":o[1]||o[0])}function Lw(n){const o={},s=Object.keys(n);let l;const d=s.length;let p;for(l=0;l<d;l++)p=s[l],o[p]=n[p];return o}function Db(n){function o(s,l,d,p){let f=s[p++];if(f==="__proto__")return!0;const h=Number.isFinite(+f),x=p>=s.length;return f=!f&&te.isArray(d)?d.length:f,x?(te.hasOwnProp(d,f)?d[f]=[d[f],l]:d[f]=l,!h):((!d[f]||!te.isObject(d[f]))&&(d[f]=[]),o(s,l,d[f],p)&&te.isArray(d[f])&&(d[f]=Lw(d[f])),!h)}if(te.isFormData(n)&&te.isFunction(n.entries)){const s={};return te.forEachEntry(n,(l,d)=>{o(Bw(l),d,s,0)}),s}return null}function Uw(n,o,s){if(te.isString(n))try{return(o||JSON.parse)(n),te.trim(n)}catch(l){if(l.name!=="SyntaxError")throw l}return(s||JSON.stringify)(n)}const Uo={transitional:Eb,adapter:["xhr","http","fetch"],transformRequest:[function(o,s){const l=s.getContentType()||"",d=l.indexOf("application/json")>-1,p=te.isObject(o);if(p&&te.isHTMLForm(o)&&(o=new FormData(o)),te.isFormData(o))return d?JSON.stringify(Db(o)):o;if(te.isArrayBuffer(o)||te.isBuffer(o)||te.isStream(o)||te.isFile(o)||te.isBlob(o)||te.isReadableStream(o))return o;if(te.isArrayBufferView(o))return o.buffer;if(te.isURLSearchParams(o))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let h;if(p){if(l.indexOf("application/x-www-form-urlencoded")>-1)return _w(o,this.formSerializer).toString();if((h=te.isFileList(o))||l.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return rc(h?{"files[]":o}:o,x&&new x,this.formSerializer)}}return p||d?(s.setContentType("application/json",!1),Uw(o)):o}],transformResponse:[function(o){const s=this.transitional||Uo.transitional,l=s&&s.forcedJSONParsing,d=this.responseType==="json";if(te.isResponse(o)||te.isReadableStream(o))return o;if(o&&te.isString(o)&&(l&&!this.responseType||d)){const f=!(s&&s.silentJSONParsing)&&d;try{return JSON.parse(o,this.parseReviver)}catch(h){if(f)throw h.name==="SyntaxError"?De.from(h,De.ERR_BAD_RESPONSE,this,null,this.response):h}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};te.forEach(["delete","get","head","post","put","patch"],n=>{Uo.headers[n]={}});const Fw=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ww=n=>{const o={};let s,l,d;return n&&n.split(`
`).forEach(function(f){d=f.indexOf(":"),s=f.substring(0,d).trim().toLowerCase(),l=f.substring(d+1).trim(),!(!s||o[s]&&Fw[s])&&(s==="set-cookie"?o[s]?o[s].push(l):o[s]=[l]:o[s]=o[s]?o[s]+", "+l:l)}),o},D0=Symbol("internals");function lo(n){return n&&String(n).trim().toLowerCase()}function jl(n){return n===!1||n==null?n:te.isArray(n)?n.map(jl):String(n)}function Hw(n){const o=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=s.exec(n);)o[l[1]]=l[2];return o}const Pw=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Uu(n,o,s,l,d){if(te.isFunction(l))return l.call(this,o,s);if(d&&(o=s),!!te.isString(o)){if(te.isString(l))return o.indexOf(l)!==-1;if(te.isRegExp(l))return l.test(o)}}function $w(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,s,l)=>s.toUpperCase()+l)}function Iw(n,o){const s=te.toCamelCase(" "+o);["get","set","has"].forEach(l=>{Object.defineProperty(n,l+s,{value:function(d,p,f){return this[l].call(this,o,d,p,f)},configurable:!0})})}let qt=class{constructor(o){o&&this.set(o)}set(o,s,l){const d=this;function p(h,x,g){const y=lo(x);if(!y)throw new Error("header name must be a non-empty string");const v=te.findKey(d,y);(!v||d[v]===void 0||g===!0||g===void 0&&d[v]!==!1)&&(d[v||x]=jl(h))}const f=(h,x)=>te.forEach(h,(g,y)=>p(g,y,x));if(te.isPlainObject(o)||o instanceof this.constructor)f(o,s);else if(te.isString(o)&&(o=o.trim())&&!Pw(o))f(Ww(o),s);else if(te.isObject(o)&&te.isIterable(o)){let h={},x,g;for(const y of o){if(!te.isArray(y))throw TypeError("Object iterator must return a key-value pair");h[g=y[0]]=(x=h[g])?te.isArray(x)?[...x,y[1]]:[x,y[1]]:y[1]}f(h,s)}else o!=null&&p(s,o,l);return this}get(o,s){if(o=lo(o),o){const l=te.findKey(this,o);if(l){const d=this[l];if(!s)return d;if(s===!0)return Hw(d);if(te.isFunction(s))return s.call(this,d,l);if(te.isRegExp(s))return s.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,s){if(o=lo(o),o){const l=te.findKey(this,o);return!!(l&&this[l]!==void 0&&(!s||Uu(this,this[l],l,s)))}return!1}delete(o,s){const l=this;let d=!1;function p(f){if(f=lo(f),f){const h=te.findKey(l,f);h&&(!s||Uu(l,l[h],h,s))&&(delete l[h],d=!0)}}return te.isArray(o)?o.forEach(p):p(o),d}clear(o){const s=Object.keys(this);let l=s.length,d=!1;for(;l--;){const p=s[l];(!o||Uu(this,this[p],p,o,!0))&&(delete this[p],d=!0)}return d}normalize(o){const s=this,l={};return te.forEach(this,(d,p)=>{const f=te.findKey(l,p);if(f){s[f]=jl(d),delete s[p];return}const h=o?$w(p):String(p).trim();h!==p&&delete s[p],s[h]=jl(d),l[h]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const s=Object.create(null);return te.forEach(this,(l,d)=>{l!=null&&l!==!1&&(s[d]=o&&te.isArray(l)?l.join(", "):l)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,s])=>o+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...s){const l=new this(o);return s.forEach(d=>l.set(d)),l}static accessor(o){const l=(this[D0]=this[D0]={accessors:{}}).accessors,d=this.prototype;function p(f){const h=lo(f);l[h]||(Iw(d,f),l[h]=!0)}return te.isArray(o)?o.forEach(p):p(o),this}};qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);te.reduceDescriptors(qt.prototype,({value:n},o)=>{let s=o[0].toUpperCase()+o.slice(1);return{get:()=>n,set(l){this[s]=l}}});te.freezeMethods(qt);function Fu(n,o){const s=this||Uo,l=o||s,d=qt.from(l.headers);let p=l.data;return te.forEach(n,function(h){p=h.call(s,p,d.normalize(),o?o.status:void 0)}),d.normalize(),p}function Rb(n){return!!(n&&n.__CANCEL__)}function fr(n,o,s){De.call(this,n??"canceled",De.ERR_CANCELED,o,s),this.name="CanceledError"}te.inherits(fr,De,{__CANCEL__:!0});function Mb(n,o,s){const l=s.config.validateStatus;!s.status||!l||l(s.status)?n(s):o(new De("Request failed with status code "+s.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function Yw(n){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return o&&o[1]||""}function Vw(n,o){n=n||10;const s=new Array(n),l=new Array(n);let d=0,p=0,f;return o=o!==void 0?o:1e3,function(x){const g=Date.now(),y=l[p];f||(f=g),s[d]=x,l[d]=g;let v=p,T=0;for(;v!==d;)T+=s[v++],v=v%n;if(d=(d+1)%n,d===p&&(p=(p+1)%n),g-f<o)return;const R=y&&g-y;return R?Math.round(T*1e3/R):void 0}}function qw(n,o){let s=0,l=1e3/o,d,p;const f=(g,y=Date.now())=>{s=y,d=null,p&&(clearTimeout(p),p=null),n(...g)};return[(...g)=>{const y=Date.now(),v=y-s;v>=l?f(g,y):(d=g,p||(p=setTimeout(()=>{p=null,f(d)},l-v)))},()=>d&&f(d)]}const _l=(n,o,s=3)=>{let l=0;const d=Vw(50,250);return qw(p=>{const f=p.loaded,h=p.lengthComputable?p.total:void 0,x=f-l,g=d(x),y=f<=h;l=f;const v={loaded:f,total:h,progress:h?f/h:void 0,bytes:x,rate:g||void 0,estimated:g&&h&&y?(h-f)/g:void 0,event:p,lengthComputable:h!=null,[o?"download":"upload"]:!0};n(v)},s)},R0=(n,o)=>{const s=n!=null;return[l=>o[0]({lengthComputable:s,total:n,loaded:l}),o[1]]},M0=n=>(...o)=>te.asap(()=>n(...o)),Gw=Dt.hasStandardBrowserEnv?((n,o)=>s=>(s=new URL(s,Dt.origin),n.protocol===s.protocol&&n.host===s.host&&(o||n.port===s.port)))(new URL(Dt.origin),Dt.navigator&&/(msie|trident)/i.test(Dt.navigator.userAgent)):()=>!0,Xw=Dt.hasStandardBrowserEnv?{write(n,o,s,l,d,p,f){if(typeof document>"u")return;const h=[`${n}=${encodeURIComponent(o)}`];te.isNumber(s)&&h.push(`expires=${new Date(s).toUTCString()}`),te.isString(l)&&h.push(`path=${l}`),te.isString(d)&&h.push(`domain=${d}`),p===!0&&h.push("secure"),te.isString(f)&&h.push(`SameSite=${f}`),document.cookie=h.join("; ")},read(n){if(typeof document>"u")return null;const o=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return o?decodeURIComponent(o[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Jw(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Qw(n,o){return o?n.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):n}function Ob(n,o,s){let l=!Jw(o);return n&&(l||s==!1)?Qw(n,o):o}const O0=n=>n instanceof qt?{...n}:n;function ui(n,o){o=o||{};const s={};function l(g,y,v,T){return te.isPlainObject(g)&&te.isPlainObject(y)?te.merge.call({caseless:T},g,y):te.isPlainObject(y)?te.merge({},y):te.isArray(y)?y.slice():y}function d(g,y,v,T){if(te.isUndefined(y)){if(!te.isUndefined(g))return l(void 0,g,v,T)}else return l(g,y,v,T)}function p(g,y){if(!te.isUndefined(y))return l(void 0,y)}function f(g,y){if(te.isUndefined(y)){if(!te.isUndefined(g))return l(void 0,g)}else return l(void 0,y)}function h(g,y,v){if(v in o)return l(g,y);if(v in n)return l(void 0,g)}const x={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:h,headers:(g,y,v)=>d(O0(g),O0(y),v,!0)};return te.forEach(Object.keys({...n,...o}),function(y){const v=x[y]||d,T=v(n[y],o[y],y);te.isUndefined(T)&&v!==h||(s[y]=T)}),s}const _b=n=>{const o=ui({},n);let{data:s,withXSRFToken:l,xsrfHeaderName:d,xsrfCookieName:p,headers:f,auth:h}=o;if(o.headers=f=qt.from(f),o.url=Ab(Ob(o.baseURL,o.url,o.allowAbsoluteUrls),n.params,n.paramsSerializer),h&&f.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):""))),te.isFormData(s)){if(Dt.hasStandardBrowserEnv||Dt.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if(te.isFunction(s.getHeaders)){const x=s.getHeaders(),g=["content-type","content-length"];Object.entries(x).forEach(([y,v])=>{g.includes(y.toLowerCase())&&f.set(y,v)})}}if(Dt.hasStandardBrowserEnv&&(l&&te.isFunction(l)&&(l=l(o)),l||l!==!1&&Gw(o.url))){const x=d&&p&&Xw.read(p);x&&f.set(d,x)}return o},Zw=typeof XMLHttpRequest<"u",Kw=Zw&&function(n){return new Promise(function(s,l){const d=_b(n);let p=d.data;const f=qt.from(d.headers).normalize();let{responseType:h,onUploadProgress:x,onDownloadProgress:g}=d,y,v,T,R,k;function z(){R&&R(),k&&k(),d.cancelToken&&d.cancelToken.unsubscribe(y),d.signal&&d.signal.removeEventListener("abort",y)}let M=new XMLHttpRequest;M.open(d.method.toUpperCase(),d.url,!0),M.timeout=d.timeout;function E(){if(!M)return;const A=qt.from("getAllResponseHeaders"in M&&M.getAllResponseHeaders()),X={data:!h||h==="text"||h==="json"?M.responseText:M.response,status:M.status,statusText:M.statusText,headers:A,config:n,request:M};Mb(function(W){s(W),z()},function(W){l(W),z()},X),M=null}"onloadend"in M?M.onloadend=E:M.onreadystatechange=function(){!M||M.readyState!==4||M.status===0&&!(M.responseURL&&M.responseURL.indexOf("file:")===0)||setTimeout(E)},M.onabort=function(){M&&(l(new De("Request aborted",De.ECONNABORTED,n,M)),M=null)},M.onerror=function(P){const X=P&&P.message?P.message:"Network Error",D=new De(X,De.ERR_NETWORK,n,M);D.event=P||null,l(D),M=null},M.ontimeout=function(){let P=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const X=d.transitional||Eb;d.timeoutErrorMessage&&(P=d.timeoutErrorMessage),l(new De(P,X.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,n,M)),M=null},p===void 0&&f.setContentType(null),"setRequestHeader"in M&&te.forEach(f.toJSON(),function(P,X){M.setRequestHeader(X,P)}),te.isUndefined(d.withCredentials)||(M.withCredentials=!!d.withCredentials),h&&h!=="json"&&(M.responseType=d.responseType),g&&([T,k]=_l(g,!0),M.addEventListener("progress",T)),x&&M.upload&&([v,R]=_l(x),M.upload.addEventListener("progress",v),M.upload.addEventListener("loadend",R)),(d.cancelToken||d.signal)&&(y=A=>{M&&(l(!A||A.type?new fr(null,n,M):A),M.abort(),M=null)},d.cancelToken&&d.cancelToken.subscribe(y),d.signal&&(d.signal.aborted?y():d.signal.addEventListener("abort",y)));const S=Yw(d.url);if(S&&Dt.protocols.indexOf(S)===-1){l(new De("Unsupported protocol "+S+":",De.ERR_BAD_REQUEST,n));return}M.send(p||null)})},eS=(n,o)=>{const{length:s}=n=n?n.filter(Boolean):[];if(o||s){let l=new AbortController,d;const p=function(g){if(!d){d=!0,h();const y=g instanceof Error?g:this.reason;l.abort(y instanceof De?y:new fr(y instanceof Error?y.message:y))}};let f=o&&setTimeout(()=>{f=null,p(new De(`timeout ${o} of ms exceeded`,De.ETIMEDOUT))},o);const h=()=>{n&&(f&&clearTimeout(f),f=null,n.forEach(g=>{g.unsubscribe?g.unsubscribe(p):g.removeEventListener("abort",p)}),n=null)};n.forEach(g=>g.addEventListener("abort",p));const{signal:x}=l;return x.unsubscribe=()=>te.asap(h),x}},tS=function*(n,o){let s=n.byteLength;if(s<o){yield n;return}let l=0,d;for(;l<s;)d=l+o,yield n.slice(l,d),l=d},aS=async function*(n,o){for await(const s of nS(n))yield*tS(s,o)},nS=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const o=n.getReader();try{for(;;){const{done:s,value:l}=await o.read();if(s)break;yield l}}finally{await o.cancel()}},_0=(n,o,s,l)=>{const d=aS(n,o);let p=0,f,h=x=>{f||(f=!0,l&&l(x))};return new ReadableStream({async pull(x){try{const{done:g,value:y}=await d.next();if(g){h(),x.close();return}let v=y.byteLength;if(s){let T=p+=v;s(T)}x.enqueue(new Uint8Array(y))}catch(g){throw h(g),g}},cancel(x){return h(x),d.return()}},{highWaterMark:2})},B0=64*1024,{isFunction:ll}=te,iS=(({Request:n,Response:o})=>({Request:n,Response:o}))(te.global),{ReadableStream:L0,TextEncoder:U0}=te.global,F0=(n,...o)=>{try{return!!n(...o)}catch{return!1}},rS=n=>{n=te.merge.call({skipUndefined:!0},iS,n);const{fetch:o,Request:s,Response:l}=n,d=o?ll(o):typeof fetch=="function",p=ll(s),f=ll(l);if(!d)return!1;const h=d&&ll(L0),x=d&&(typeof U0=="function"?(k=>z=>k.encode(z))(new U0):async k=>new Uint8Array(await new s(k).arrayBuffer())),g=p&&h&&F0(()=>{let k=!1;const z=new s(Dt.origin,{body:new L0,method:"POST",get duplex(){return k=!0,"half"}}).headers.has("Content-Type");return k&&!z}),y=f&&h&&F0(()=>te.isReadableStream(new l("").body)),v={stream:y&&(k=>k.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(k=>{!v[k]&&(v[k]=(z,M)=>{let E=z&&z[k];if(E)return E.call(z);throw new De(`Response type '${k}' is not supported`,De.ERR_NOT_SUPPORT,M)})});const T=async k=>{if(k==null)return 0;if(te.isBlob(k))return k.size;if(te.isSpecCompliantForm(k))return(await new s(Dt.origin,{method:"POST",body:k}).arrayBuffer()).byteLength;if(te.isArrayBufferView(k)||te.isArrayBuffer(k))return k.byteLength;if(te.isURLSearchParams(k)&&(k=k+""),te.isString(k))return(await x(k)).byteLength},R=async(k,z)=>{const M=te.toFiniteNumber(k.getContentLength());return M??T(z)};return async k=>{let{url:z,method:M,data:E,signal:S,cancelToken:A,timeout:P,onDownloadProgress:X,onUploadProgress:D,responseType:W,headers:V,withCredentials:de="same-origin",fetchOptions:he}=_b(k),J=o||fetch;W=W?(W+"").toLowerCase():"text";let pe=eS([S,A&&A.toAbortSignal()],P),$=null;const me=pe&&pe.unsubscribe&&(()=>{pe.unsubscribe()});let we;try{if(D&&g&&M!=="get"&&M!=="head"&&(we=await R(V,E))!==0){let j=new s(z,{method:"POST",body:E,duplex:"half"}),C;if(te.isFormData(E)&&(C=j.headers.get("content-type"))&&V.setContentType(C),j.body){const[q,oe]=R0(we,_l(M0(D)));E=_0(j.body,B0,q,oe)}}te.isString(de)||(de=de?"include":"omit");const F=p&&"credentials"in s.prototype,ie={...he,signal:pe,method:M.toUpperCase(),headers:V.normalize().toJSON(),body:E,duplex:"half",credentials:F?de:void 0};$=p&&new s(z,ie);let fe=await(p?J($,he):J(z,ie));const K=y&&(W==="stream"||W==="response");if(y&&(X||K&&me)){const j={};["status","statusText","headers"].forEach(I=>{j[I]=fe[I]});const C=te.toFiniteNumber(fe.headers.get("content-length")),[q,oe]=X&&R0(C,_l(M0(X),!0))||[];fe=new l(_0(fe.body,B0,q,()=>{oe&&oe(),me&&me()}),j)}W=W||"text";let B=await v[te.findKey(v,W)||"text"](fe,k);return!K&&me&&me(),await new Promise((j,C)=>{Mb(j,C,{data:B,headers:qt.from(fe.headers),status:fe.status,statusText:fe.statusText,config:k,request:$})})}catch(F){throw me&&me(),F&&F.name==="TypeError"&&/Load failed|fetch/i.test(F.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,k,$),{cause:F.cause||F}):De.from(F,F&&F.code,k,$)}}},oS=new Map,Bb=n=>{let o=n&&n.env||{};const{fetch:s,Request:l,Response:d}=o,p=[l,d,s];let f=p.length,h=f,x,g,y=oS;for(;h--;)x=p[h],g=y.get(x),g===void 0&&y.set(x,g=h?new Map:rS(o)),y=g;return g};Bb();const Gp={http:Sw,xhr:Kw,fetch:{get:Bb}};te.forEach(Gp,(n,o)=>{if(n){try{Object.defineProperty(n,"name",{value:o})}catch{}Object.defineProperty(n,"adapterName",{value:o})}});const W0=n=>`- ${n}`,sS=n=>te.isFunction(n)||n===null||n===!1;function lS(n,o){n=te.isArray(n)?n:[n];const{length:s}=n;let l,d;const p={};for(let f=0;f<s;f++){l=n[f];let h;if(d=l,!sS(l)&&(d=Gp[(h=String(l)).toLowerCase()],d===void 0))throw new De(`Unknown adapter '${h}'`);if(d&&(te.isFunction(d)||(d=d.get(o))))break;p[h||"#"+f]=d}if(!d){const f=Object.entries(p).map(([x,g])=>`adapter ${x} `+(g===!1?"is not supported by the environment":"is not available in the build"));let h=s?f.length>1?`since :
`+f.map(W0).join(`
`):" "+W0(f[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return d}const Lb={getAdapter:lS,adapters:Gp};function Wu(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new fr(null,n)}function H0(n){return Wu(n),n.headers=qt.from(n.headers),n.data=Fu.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Lb.getAdapter(n.adapter||Uo.adapter,n)(n).then(function(l){return Wu(n),l.data=Fu.call(n,n.transformResponse,l),l.headers=qt.from(l.headers),l},function(l){return Rb(l)||(Wu(n),l&&l.response&&(l.response.data=Fu.call(n,n.transformResponse,l.response),l.response.headers=qt.from(l.response.headers))),Promise.reject(l)})}const Ub="1.13.2",oc={};["object","boolean","number","function","string","symbol"].forEach((n,o)=>{oc[n]=function(l){return typeof l===n||"a"+(o<1?"n ":" ")+n}});const P0={};oc.transitional=function(o,s,l){function d(p,f){return"[Axios v"+Ub+"] Transitional option '"+p+"'"+f+(l?". "+l:"")}return(p,f,h)=>{if(o===!1)throw new De(d(f," has been removed"+(s?" in "+s:"")),De.ERR_DEPRECATED);return s&&!P0[f]&&(P0[f]=!0,console.warn(d(f," has been deprecated since v"+s+" and will be removed in the near future"))),o?o(p,f,h):!0}};oc.spelling=function(o){return(s,l)=>(console.warn(`${l} is likely a misspelling of ${o}`),!0)};function cS(n,o,s){if(typeof n!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const l=Object.keys(n);let d=l.length;for(;d-- >0;){const p=l[d],f=o[p];if(f){const h=n[p],x=h===void 0||f(h,p,n);if(x!==!0)throw new De("option "+p+" must be "+x,De.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new De("Unknown option "+p,De.ERR_BAD_OPTION)}}const wl={assertOptions:cS,validators:oc},Ea=wl.validators;let li=class{constructor(o){this.defaults=o||{},this.interceptors={request:new E0,response:new E0}}async request(o,s){try{return await this._request(o,s)}catch(l){if(l instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const p=d.stack?d.stack.replace(/^.+\n/,""):"";try{l.stack?p&&!String(l.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+p):l.stack=p}catch{}}throw l}}_request(o,s){typeof o=="string"?(s=s||{},s.url=o):s=o||{},s=ui(this.defaults,s);const{transitional:l,paramsSerializer:d,headers:p}=s;l!==void 0&&wl.assertOptions(l,{silentJSONParsing:Ea.transitional(Ea.boolean),forcedJSONParsing:Ea.transitional(Ea.boolean),clarifyTimeoutError:Ea.transitional(Ea.boolean)},!1),d!=null&&(te.isFunction(d)?s.paramsSerializer={serialize:d}:wl.assertOptions(d,{encode:Ea.function,serialize:Ea.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),wl.assertOptions(s,{baseUrl:Ea.spelling("baseURL"),withXsrfToken:Ea.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let f=p&&te.merge(p.common,p[s.method]);p&&te.forEach(["delete","get","head","post","put","patch","common"],k=>{delete p[k]}),s.headers=qt.concat(f,p);const h=[];let x=!0;this.interceptors.request.forEach(function(z){typeof z.runWhen=="function"&&z.runWhen(s)===!1||(x=x&&z.synchronous,h.unshift(z.fulfilled,z.rejected))});const g=[];this.interceptors.response.forEach(function(z){g.push(z.fulfilled,z.rejected)});let y,v=0,T;if(!x){const k=[H0.bind(this),void 0];for(k.unshift(...h),k.push(...g),T=k.length,y=Promise.resolve(s);v<T;)y=y.then(k[v++],k[v++]);return y}T=h.length;let R=s;for(;v<T;){const k=h[v++],z=h[v++];try{R=k(R)}catch(M){z.call(this,M);break}}try{y=H0.call(this,R)}catch(k){return Promise.reject(k)}for(v=0,T=g.length;v<T;)y=y.then(g[v++],g[v++]);return y}getUri(o){o=ui(this.defaults,o);const s=Ob(o.baseURL,o.url,o.allowAbsoluteUrls);return Ab(s,o.params,o.paramsSerializer)}};te.forEach(["delete","get","head","options"],function(o){li.prototype[o]=function(s,l){return this.request(ui(l||{},{method:o,url:s,data:(l||{}).data}))}});te.forEach(["post","put","patch"],function(o){function s(l){return function(p,f,h){return this.request(ui(h||{},{method:o,headers:l?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}li.prototype[o]=s(),li.prototype[o+"Form"]=s(!0)});let dS=class Fb{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(p){s=p});const l=this;this.promise.then(d=>{if(!l._listeners)return;let p=l._listeners.length;for(;p-- >0;)l._listeners[p](d);l._listeners=null}),this.promise.then=d=>{let p;const f=new Promise(h=>{l.subscribe(h),p=h}).then(d);return f.cancel=function(){l.unsubscribe(p)},f},o(function(p,f,h){l.reason||(l.reason=new fr(p,f,h),s(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const s=this._listeners.indexOf(o);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const o=new AbortController,s=l=>{o.abort(l)};return this.subscribe(s),o.signal.unsubscribe=()=>this.unsubscribe(s),o.signal}static source(){let o;return{token:new Fb(function(d){o=d}),cancel:o}}};function uS(n){return function(s){return n.apply(null,s)}}function pS(n){return te.isObject(n)&&n.isAxiosError===!0}const fp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(fp).forEach(([n,o])=>{fp[o]=n});function Wb(n){const o=new li(n),s=xb(li.prototype.request,o);return te.extend(s,li.prototype,o,{allOwnKeys:!0}),te.extend(s,o,null,{allOwnKeys:!0}),s.create=function(d){return Wb(ui(n,d))},s}const Qe=Wb(Uo);Qe.Axios=li;Qe.CanceledError=fr;Qe.CancelToken=dS;Qe.isCancel=Rb;Qe.VERSION=Ub;Qe.toFormData=rc;Qe.AxiosError=De;Qe.Cancel=Qe.CanceledError;Qe.all=function(o){return Promise.all(o)};Qe.spread=uS;Qe.isAxiosError=pS;Qe.mergeConfig=ui;Qe.AxiosHeaders=qt;Qe.formToJSON=n=>Db(te.isHTMLForm(n)?new FormData(n):n);Qe.getAdapter=Lb.getAdapter;Qe.HttpStatusCode=fp;Qe.default=Qe;const{Axios:I8,AxiosError:Y8,CanceledError:V8,isCancel:q8,CancelToken:G8,VERSION:X8,all:J8,Cancel:Q8,isAxiosError:Z8,spread:K8,toFormData:ek,AxiosHeaders:tk,HttpStatusCode:ak,formToJSON:nk,getAdapter:ik,mergeConfig:rk}=Qe,Ue=Qe.create({baseURL:"https://jansamvad.saavi.co.in/api"});Ue.interceptors.request.use(n=>{const o=localStorage.getItem("token");return o&&(n.headers.Authorization=`Bearer ${o}`),n});function Hb(){return a.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center z-50",children:a.jsxs("div",{className:"relative mb-4",children:[a.jsx("div",{className:"h-14 w-14 rounded-full border-4 border-blue-200"}),a.jsx("div",{className:"h-14 w-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin absolute top-0 left-0"})]})})}function Pb(n){var o,s,l="";if(typeof n=="string"||typeof n=="number")l+=n;else if(typeof n=="object")if(Array.isArray(n)){var d=n.length;for(o=0;o<d;o++)n[o]&&(s=Pb(n[o]))&&(l&&(l+=" "),l+=s)}else for(s in n)n[s]&&(l&&(l+=" "),l+=s);return l}function ci(){for(var n,o,s=0,l="",d=arguments.length;s<d;s++)(n=arguments[s])&&(o=Pb(n))&&(l&&(l+=" "),l+=o);return l}function fS(n){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}fS(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Fo=n=>typeof n=="number"&&!isNaN(n),pi=n=>typeof n=="string",on=n=>typeof n=="function",gS=n=>pi(n)||Fo(n),gp=n=>pi(n)||on(n)?n:null,mS=(n,o)=>n===!1||Fo(n)&&n>0?n:o,mp=n=>b.isValidElement(n)||pi(n)||on(n)||Fo(n);function hS(n,o,s=300){let{scrollHeight:l,style:d}=n;requestAnimationFrame(()=>{d.minHeight="initial",d.height=l+"px",d.transition=`all ${s}ms`,requestAnimationFrame(()=>{d.height="0",d.padding="0",d.margin="0",setTimeout(o,s)})})}function xS({enter:n,exit:o,appendPosition:s=!1,collapse:l=!0,collapseDuration:d=300}){return function({children:p,position:f,preventExitTransition:h,done:x,nodeRef:g,isIn:y,playToast:v}){let T=s?`${n}--${f}`:n,R=s?`${o}--${f}`:o,k=b.useRef(0);return b.useLayoutEffect(()=>{let z=g.current,M=T.split(" "),E=S=>{S.target===g.current&&(v(),z.removeEventListener("animationend",E),z.removeEventListener("animationcancel",E),k.current===0&&S.type!=="animationcancel"&&z.classList.remove(...M))};z.classList.add(...M),z.addEventListener("animationend",E),z.addEventListener("animationcancel",E)},[]),b.useEffect(()=>{let z=g.current,M=()=>{z.removeEventListener("animationend",M),l?hS(z,x,d):x()};y||(h?M():(k.current=1,z.className+=` ${R}`,z.addEventListener("animationend",M)))},[y]),We.createElement(We.Fragment,null,p)}}function $0(n,o){return{content:$b(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:o}}function $b(n,o,s=!1){return b.isValidElement(n)&&!pi(n.type)?b.cloneElement(n,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:s}):on(n)?n({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:s}):n}function bS({closeToast:n,theme:o,ariaLabel:s="close"}){return We.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:l=>{l.stopPropagation(),n(!0)},"aria-label":s},We.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},We.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function yS({delay:n,isRunning:o,closeToast:s,type:l="default",hide:d,className:p,controlledProgress:f,progress:h,rtl:x,isIn:g,theme:y}){let v=d||f&&h===0,T={animationDuration:`${n}ms`,animationPlayState:o?"running":"paused"};f&&(T.transform=`scaleX(${h})`);let R=ci("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${l}`,{"Toastify__progress-bar--rtl":x}),k=on(p)?p({rtl:x,type:l,defaultClassName:R}):ci(R,p),z={[f&&h>=1?"onTransitionEnd":"onAnimationEnd"]:f&&h<1?null:()=>{g&&s()}};return We.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},We.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${l}`}),We.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:k,style:T,...z}))}var vS=1,Ib=()=>`${vS++}`;function jS(n,o,s){let l=1,d=0,p=[],f=[],h=o,x=new Map,g=new Set,y=S=>(g.add(S),()=>g.delete(S)),v=()=>{f=Array.from(x.values()),g.forEach(S=>S())},T=({containerId:S,toastId:A,updateId:P})=>{let X=S?S!==n:n!==1,D=x.has(A)&&P==null;return X||D},R=(S,A)=>{x.forEach(P=>{var X;(A==null||A===P.props.toastId)&&((X=P.toggle)==null||X.call(P,S))})},k=S=>{var A,P;(P=(A=S.props)==null?void 0:A.onClose)==null||P.call(A,S.removalReason),S.isActive=!1},z=S=>{if(S==null)x.forEach(k);else{let A=x.get(S);A&&k(A)}v()},M=()=>{d-=p.length,p=[]},E=S=>{var A,P;let{toastId:X,updateId:D}=S.props,W=D==null;S.staleId&&x.delete(S.staleId),S.isActive=!0,x.set(X,S),v(),s($0(S,W?"added":"updated")),W&&((P=(A=S.props).onOpen)==null||P.call(A))};return{id:n,props:h,observe:y,toggle:R,removeToast:z,toasts:x,clearQueue:M,buildToast:(S,A)=>{if(T(A))return;let{toastId:P,updateId:X,data:D,staleId:W,delay:V}=A,de=X==null;de&&d++;let he={...h,style:h.toastStyle,key:l++,...Object.fromEntries(Object.entries(A).filter(([pe,$])=>$!=null)),toastId:P,updateId:X,data:D,isIn:!1,className:gp(A.className||h.toastClassName),progressClassName:gp(A.progressClassName||h.progressClassName),autoClose:A.isLoading?!1:mS(A.autoClose,h.autoClose),closeToast(pe){x.get(P).removalReason=pe,z(P)},deleteToast(){let pe=x.get(P);if(pe!=null){if(s($0(pe,"removed")),x.delete(P),d--,d<0&&(d=0),p.length>0){E(p.shift());return}v()}}};he.closeButton=h.closeButton,A.closeButton===!1||mp(A.closeButton)?he.closeButton=A.closeButton:A.closeButton===!0&&(he.closeButton=mp(h.closeButton)?h.closeButton:!0);let J={content:S,props:he,staleId:W};h.limit&&h.limit>0&&d>h.limit&&de?p.push(J):Fo(V)?setTimeout(()=>{E(J)},V):E(J)},setProps(S){h=S},setToggle:(S,A)=>{let P=x.get(S);P&&(P.toggle=A)},isToastActive:S=>{var A;return(A=x.get(S))==null?void 0:A.isActive},getSnapshot:()=>f}}var _t=new Map,No=[],hp=new Set,wS=n=>hp.forEach(o=>o(n)),Yb=()=>_t.size>0;function SS(){No.forEach(n=>qb(n.content,n.options)),No=[]}var kS=(n,{containerId:o})=>{var s;return(s=_t.get(o||1))==null?void 0:s.toasts.get(n)};function Vb(n,o){var s;if(o)return!!((s=_t.get(o))!=null&&s.isToastActive(n));let l=!1;return _t.forEach(d=>{d.isToastActive(n)&&(l=!0)}),l}function NS(n){if(!Yb()){No=No.filter(o=>n!=null&&o.options.toastId!==n);return}if(n==null||gS(n))_t.forEach(o=>{o.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let o=_t.get(n.containerId);o?o.removeToast(n.id):_t.forEach(s=>{s.removeToast(n.id)})}}var CS=(n={})=>{_t.forEach(o=>{o.props.limit&&(!n.containerId||o.id===n.containerId)&&o.clearQueue()})};function qb(n,o){mp(n)&&(Yb()||No.push({content:n,options:o}),_t.forEach(s=>{s.buildToast(n,o)}))}function TS(n){var o;(o=_t.get(n.containerId||1))==null||o.setToggle(n.id,n.fn)}function Gb(n,o){_t.forEach(s=>{(o==null||!(o!=null&&o.containerId)||o?.containerId===s.id)&&s.toggle(n,o?.id)})}function zS(n){let o=n.containerId||1;return{subscribe(s){let l=jS(o,n,wS);_t.set(o,l);let d=l.observe(s);return SS(),()=>{d(),_t.delete(o)}},setProps(s){var l;(l=_t.get(o))==null||l.setProps(s)},getSnapshot(){var s;return(s=_t.get(o))==null?void 0:s.getSnapshot()}}}function AS(n){return hp.add(n),()=>{hp.delete(n)}}function ES(n){return n&&(pi(n.toastId)||Fo(n.toastId))?n.toastId:Ib()}function Wo(n,o){return qb(n,o),o.toastId}function sc(n,o){return{...o,type:o&&o.type||n,toastId:ES(o)}}function lc(n){return(o,s)=>Wo(o,sc(n,s))}function ye(n,o){return Wo(n,sc("default",o))}ye.loading=(n,o)=>Wo(n,sc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o}));function DS(n,{pending:o,error:s,success:l},d){let p;o&&(p=pi(o)?ye.loading(o,d):ye.loading(o.render,{...d,...o}));let f={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(g,y,v)=>{if(y==null){ye.dismiss(p);return}let T={type:g,...f,...d,data:v},R=pi(y)?{render:y}:y;return p?ye.update(p,{...T,...R}):ye(R.render,{...T,...R}),v},x=on(n)?n():n;return x.then(g=>h("success",l,g)).catch(g=>h("error",s,g)),x}ye.promise=DS;ye.success=lc("success");ye.info=lc("info");ye.error=lc("error");ye.warning=lc("warning");ye.warn=ye.warning;ye.dark=(n,o)=>Wo(n,sc("default",{theme:"dark",...o}));function RS(n){NS(n)}ye.dismiss=RS;ye.clearWaitingQueue=CS;ye.isActive=Vb;ye.update=(n,o={})=>{let s=kS(n,o);if(s){let{props:l,content:d}=s,p={delay:100,...l,...o,toastId:o.toastId||n,updateId:Ib()};p.toastId!==n&&(p.staleId=n);let f=p.render||d;delete p.render,Wo(f,p)}};ye.done=n=>{ye.update(n,{progress:1})};ye.onChange=AS;ye.play=n=>Gb(!0,n);ye.pause=n=>Gb(!1,n);function MS(n){var o;let{subscribe:s,getSnapshot:l,setProps:d}=b.useRef(zS(n)).current;d(n);let p=(o=b.useSyncExternalStore(s,l,l))==null?void 0:o.slice();function f(h){if(!p)return[];let x=new Map;return n.newestOnTop&&p.reverse(),p.forEach(g=>{let{position:y}=g.props;x.has(y)||x.set(y,[]),x.get(y).push(g)}),Array.from(x,g=>h(g[0],g[1]))}return{getToastToRender:f,isToastActive:Vb,count:p?.length}}function OS(n){let[o,s]=b.useState(!1),[l,d]=b.useState(!1),p=b.useRef(null),f=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:x,closeToast:g,onClick:y,closeOnClick:v}=n;TS({id:n.toastId,containerId:n.containerId,fn:s}),b.useEffect(()=>{if(n.pauseOnFocusLoss)return T(),()=>{R()}},[n.pauseOnFocusLoss]);function T(){document.hasFocus()||E(),window.addEventListener("focus",M),window.addEventListener("blur",E)}function R(){window.removeEventListener("focus",M),window.removeEventListener("blur",E)}function k(W){if(n.draggable===!0||n.draggable===W.pointerType){S();let V=p.current;f.canCloseOnClick=!0,f.canDrag=!0,V.style.transition="none",n.draggableDirection==="x"?(f.start=W.clientX,f.removalDistance=V.offsetWidth*(n.draggablePercent/100)):(f.start=W.clientY,f.removalDistance=V.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function z(W){let{top:V,bottom:de,left:he,right:J}=p.current.getBoundingClientRect();W.nativeEvent.type!=="touchend"&&n.pauseOnHover&&W.clientX>=he&&W.clientX<=J&&W.clientY>=V&&W.clientY<=de?E():M()}function M(){s(!0)}function E(){s(!1)}function S(){f.didMove=!1,document.addEventListener("pointermove",P),document.addEventListener("pointerup",X)}function A(){document.removeEventListener("pointermove",P),document.removeEventListener("pointerup",X)}function P(W){let V=p.current;if(f.canDrag&&V){f.didMove=!0,o&&E(),n.draggableDirection==="x"?f.delta=W.clientX-f.start:f.delta=W.clientY-f.start,f.start!==W.clientX&&(f.canCloseOnClick=!1);let de=n.draggableDirection==="x"?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;V.style.transform=`translate3d(${de},0)`,V.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}}function X(){A();let W=p.current;if(f.canDrag&&f.didMove&&W){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance){d(!0),n.closeToast(!0),n.collapseAll();return}W.style.transition="transform 0.2s, opacity 0.2s",W.style.removeProperty("transform"),W.style.removeProperty("opacity")}}let D={onPointerDown:k,onPointerUp:z};return h&&x&&(D.onMouseEnter=E,n.stacked||(D.onMouseLeave=M)),v&&(D.onClick=W=>{y&&y(W),f.canCloseOnClick&&g(!0)}),{playToast:M,pauseToast:E,isRunning:o,preventExitTransition:l,toastRef:p,eventHandlers:D}}var _S=typeof window<"u"?b.useLayoutEffect:b.useEffect,cc=({theme:n,type:o,isLoading:s,...l})=>We.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...l});function BS(n){return We.createElement(cc,{...n},We.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function LS(n){return We.createElement(cc,{...n},We.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function US(n){return We.createElement(cc,{...n},We.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function FS(n){return We.createElement(cc,{...n},We.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function WS(){return We.createElement("div",{className:"Toastify__spinner"})}var xp={info:LS,warning:BS,success:US,error:FS,spinner:WS},HS=n=>n in xp;function PS({theme:n,type:o,isLoading:s,icon:l}){let d=null,p={theme:n,type:o};return l===!1||(on(l)?d=l({...p,isLoading:s}):b.isValidElement(l)?d=b.cloneElement(l,p):s?d=xp.spinner():HS(o)&&(d=xp[o](p))),d}var $S=n=>{let{isRunning:o,preventExitTransition:s,toastRef:l,eventHandlers:d,playToast:p}=OS(n),{closeButton:f,children:h,autoClose:x,onClick:g,type:y,hideProgressBar:v,closeToast:T,transition:R,position:k,className:z,style:M,progressClassName:E,updateId:S,role:A,progress:P,rtl:X,toastId:D,deleteToast:W,isIn:V,isLoading:de,closeOnClick:he,theme:J,ariaLabel:pe}=n,$=ci("Toastify__toast",`Toastify__toast-theme--${J}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":X},{"Toastify__toast--close-on-click":he}),me=on(z)?z({rtl:X,position:k,type:y,defaultClassName:$}):ci($,z),we=PS(n),F=!!P||!x,ie={closeToast:T,type:y,theme:J},fe=null;return f===!1||(on(f)?fe=f(ie):b.isValidElement(f)?fe=b.cloneElement(f,ie):fe=bS(ie)),We.createElement(R,{isIn:V,done:W,position:k,preventExitTransition:s,nodeRef:l,playToast:p},We.createElement("div",{id:D,tabIndex:0,onClick:g,"data-in":V,className:me,...d,style:M,ref:l,...V&&{role:A,"aria-label":pe}},we!=null&&We.createElement("div",{className:ci("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!de})},we),$b(h,n,!o),fe,!n.customProgressBar&&We.createElement(yS,{...S&&!F?{key:`p-${S}`}:{},rtl:X,theme:J,delay:x,isRunning:o,isIn:V,closeToast:T,hide:v,type:y,className:E,controlledProgress:F,progress:P||0})))},IS=(n,o=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:o}),YS=xS(IS("bounce",!0)),VS={position:"top-right",transition:YS,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function qS(n){let o={...VS,...n},s=n.stacked,[l,d]=b.useState(!0),p=b.useRef(null),{getToastToRender:f,isToastActive:h,count:x}=MS(o),{className:g,style:y,rtl:v,containerId:T,hotKeys:R}=o;function k(M){let E=ci("Toastify__toast-container",`Toastify__toast-container--${M}`,{"Toastify__toast-container--rtl":v});return on(g)?g({position:M,rtl:v,defaultClassName:E}):ci(E,gp(g))}function z(){s&&(d(!0),ye.play())}return _S(()=>{var M;if(s){let E=p.current.querySelectorAll('[data-in="true"]'),S=12,A=(M=o.position)==null?void 0:M.includes("top"),P=0,X=0;Array.from(E).reverse().forEach((D,W)=>{let V=D;V.classList.add("Toastify__toast--stacked"),W>0&&(V.dataset.collapsed=`${l}`),V.dataset.pos||(V.dataset.pos=A?"top":"bot");let de=P*(l?.2:1)+(l?0:S*W);V.style.setProperty("--y",`${A?de:de*-1}px`),V.style.setProperty("--g",`${S}`),V.style.setProperty("--s",`${1-(l?X:0)}`),P+=V.offsetHeight,X+=.025})}},[l,x,s]),b.useEffect(()=>{function M(E){var S;let A=p.current;R(E)&&((S=A.querySelector('[tabIndex="0"]'))==null||S.focus(),d(!1),ye.pause()),E.key==="Escape"&&(document.activeElement===A||A!=null&&A.contains(document.activeElement))&&(d(!0),ye.play())}return document.addEventListener("keydown",M),()=>{document.removeEventListener("keydown",M)}},[R]),We.createElement("section",{ref:p,className:"Toastify",id:T,onMouseEnter:()=>{s&&(d(!1),ye.pause())},onMouseLeave:z,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":o["aria-label"]},f((M,E)=>{let S=E.length?{...y}:{...y,pointerEvents:"none"};return We.createElement("div",{tabIndex:-1,className:k(M),"data-stacked":s,style:S,key:`c-${M}`},E.map(({content:A,props:P})=>We.createElement($S,{...P,stacked:s,collapseAll:z,isIn:h(P.toastId,P.containerId),key:`t-${P.key}`},A)))}))}function GS(){const n=Ro(),o=vt(),[s,l]=b.useState({userName:"",password:""}),[d,p]=b.useState(!1),[f,h]=b.useState(!1),[x,g]=b.useState("mobile"),y=new URLSearchParams(window.location.search).get("mobile")||"",[v,T]=b.useState(y?"otp":"password"),[R,k]=b.useState(y),[z,M]=b.useState(["","","","","",""]),[E,S]=b.useState(""),[A,P]=b.useState(0),[X,D]=b.useState(!1),[W,V]=b.useState(!1),de=b.useRef([]);b.useEffect(()=>{y&&y.length===10&&setTimeout(()=>{$()},800)},[]),b.useEffect(()=>{if(A<=0){D(!0);return}const K=setTimeout(()=>P(B=>B-1),1e3);return()=>clearTimeout(K)},[A]);const he=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,J=K=>l({...s,[K.target.name]:K.target.value}),pe=async K=>{if(K.preventDefault(),!s.userName.trim()){ye.error("Please enter your username.");return}if(!s.password){ye.error("Please enter your password.");return}try{p(!0);const j=(await Ue.post("/login",{userName:s.userName,password:s.password})).data;if(!j.success){ye.error(j.message);return}const C={id:j.user.id,fullName:j.user.fullName,userName:j.user.userName,role:j.user.role,departmentName:j.user.departmentName,office:j.user.office,departmentCategory:j.user.departmentCategory,isStandingCommitteeMember:!!j.user.isStandingCommitteeMember,isGeneralBodyMember:j.user.isGeneralBodyMember!==!1,wardNo:j.user.wardNo,designation:j.user.designation};j.token&&localStorage.setItem("token",j.token),n(Ol(C)),localStorage.setItem("authUser",JSON.stringify(C)),localStorage.setItem("userRole",j.user.role),ye.success("Login successful ✅"),o("/dashboard")}catch(B){const j=B?.response?.data?.message||"Server error. Backend चालू आहे का?";ye.error(j)}finally{p(!1)}},$=async()=>{const K=R.trim();if(!/^[0-9]{10}$/.test(K)){ye.error("Please enter a valid 10-digit mobile number.");return}V(!0);try{const j=(await Ue.post("/sendOtp",{mobileNo:K})).data;if(!j.success){ye.error(j.message||"Failed to send OTP. Please try again.");return}const C=j.otp;S(C),P(60),D(!1),M(["","","","","",""]),ye.success(`OTP has been sent to ******${K.slice(-3)} via WhatsApp.`),g("otp"),setTimeout(()=>de.current[0]?.focus(),120)}catch(B){const j=B?.response?.data?.message||"Server error ❌";ye.error(j)}finally{V(!1)}},me=(K,B)=>{if(!/^[0-9]?$/.test(B))return;const j=[...z];j[K]=B,M(j),B&&K<5&&de.current[K+1]?.focus()},we=(K,B)=>{B.key==="Backspace"&&!z[K]&&K>0&&de.current[K-1]?.focus()},F=K=>{K.preventDefault();const B=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...z];B.split("").forEach((C,q)=>{j[q]=C}),M(j),de.current[Math.min(B.length,5)]?.focus()},ie=async()=>{const K=z.join("");if(K.length<6){ye.error("Please enter the 6-digit OTP.");return}if(A<=0){ye.error("OTP has expired. Please request a new OTP.");return}if(K!==E){ye.error("❌ Invalid OTP. Please try again."),M(["","","","","",""]),de.current[0]?.focus();return}try{V(!0);const j=(await Ue.post("/loginByMobile",{mobileNo:R.trim()})).data;if(!j.success){ye.error(j.message||"Mobile number नोंदणीकृत नाही");return}const C={id:j.user.id,fullName:j.user.fullName,userName:j.user.userName,role:j.user.role,departmentName:j.user.departmentName,office:j.user.office,departmentCategory:j.user.departmentCategory,isStandingCommitteeMember:!!j.user.isStandingCommitteeMember,isGeneralBodyMember:j.user.isGeneralBodyMember!==!1,wardNo:j.user.wardNo,designation:j.user.designation};j.token&&localStorage.setItem("token",j.token),n(Ol(C)),localStorage.setItem("authUser",JSON.stringify(C)),localStorage.setItem("userRole",j.user.role),ye.success("✅ Login यशस्वी!"),o("/dashboard")}catch(B){const j=B?.response?.data?.message||"Server error";ye.error(j)}finally{V(!1)}},fe=K=>{T(K),g("mobile"),M(["","","","","",""]),k(K==="otp"?y:""),P(0)};return a.jsxs(a.Fragment,{children:[(d||W)&&a.jsx(Hb,{}),a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --teal:       #4CABC1;
          --teal-dark:  #49ACC3;
          --gold:       #CA9D28;
          --gold-light: #CE9A54;
          --cream:      #F5E7C2;
          --green:      #66A962;
          --deep:       #187480;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .lp-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .lp-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: 68% center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .lp-root:hover .lp-bg { transform: scale(1.02); }

        .lp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(24,116,128,0.45) 0%,
            rgba(73,172,195,0.38) 30%,
            rgba(24,116,128,0.60) 60%,
            rgba(12,70,80,0.82) 100%
          );
        }

        /* Multi-color top stripe */
        .lp-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%,
            var(--gold-light) 22%,
            var(--teal) 45%,
            var(--teal-dark) 65%,
            var(--green) 85%,
            var(--cream) 100%
          );
          z-index: 20;
        }

        /* ── WRAPPER ── */
        .lp-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: stretch;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.52),
            0 0 0 1px rgba(202,157,40,0.20),
            inset 0 1px 0 rgba(245,231,194,0.07);
          animation: wrapperIn .5s cubic-bezier(.22,.9,.36,1) both;
        }
        @keyframes wrapperIn {
          from { opacity:0; transform:translateY(26px) scale(0.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        /* ── LEFT CARD ── */
        .lp-card {
          width: 410px;
          background: linear-gradient(
            160deg,
            rgba(12,68,80,0.80) 0%,
            rgba(24,116,128,0.62) 50%,
            rgba(12,68,80,0.85) 100%
          );
          backdrop-filter: blur(38px) saturate(2);
          -webkit-backdrop-filter: blur(38px) saturate(2);
          border: 1px solid rgba(76,171,193,0.20);
          border-right: 1px solid rgba(202,157,40,0.18);
          padding: 34px 32px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .lp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .lp-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
        }
        .lp-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .lp-logo-img {
          width: 54px; height: 54px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow:
            0 0 0 3px rgba(202,157,40,0.15),
            0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .lp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .lp-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .lp-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 17px;
          font-weight: 500;
          color: rgba(245,231,194,0.72);
          letter-spacing: 0.4px;
        }

        /* ── TABS ── */
        .lp-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 22px;
          background: rgba(0,0,0,0.34);
          border-radius: 14px;
          padding: 4px;
          border: 1px solid rgba(76,171,193,0.16);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.22);
        }
        .lp-tab {
          flex: 1;
          padding: 9px 0;
          border: none;
          border-radius: 11px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: all .25s;
          color: rgba(245,231,194,0.48);
          background: transparent;
          letter-spacing: 0.2px;
        }
        .lp-tab.active {
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          box-shadow:
            0 2px 14px rgba(76,171,193,0.42),
            inset 0 1px 0 rgba(245,231,194,0.14);
          font-weight: 700;
        }
        .lp-tab:not(.active):hover {
          color: var(--cream);
          background: rgba(76,171,193,0.12);
        }

        /* ── FORM ── */
        .lp-ftitle {
          font-size: 21px;
          font-weight: 700;
          color: var(--cream);
          margin-bottom: 18px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.3px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }

        .lp-fld { margin-bottom: 14px; }

        .lp-flbl {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          color: rgba(245,231,194,0.72);
          margin-bottom: 7px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .lp-fwrap { position: relative; }

        .lp-finput {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 12px;
          font-size: 14px;
          color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          outline: none;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .lp-finput:focus {
          background: rgba(24,116,128,0.62);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .lp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 13px; }
        .lp-finput.has-icon { padding-left: 42px; }

        .lp-ficon {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          pointer-events: none;
          opacity: 0.48;
        }
        .lp-pbtn {
          position: absolute;
          right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; font-size: 15px;
          color: rgba(245,231,194,0.42);
          padding: 0; display: flex; align-items: center;
          transition: color .2s;
        }
        .lp-pbtn:hover { color: var(--cream); }

        .lp-prefix {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 12px; font-weight: 700;
          color: rgba(245,231,194,0.68);
          pointer-events: none; white-space: nowrap;
        }
        .lp-finput.with-prefix { padding-left: 74px; }

        /* ── BUTTONS ── */
        .lp-sbtn {
          width: 100%;
          padding: 13px;
          margin-top: 6px;
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          font-size: 13px; font-weight: 800;
          letter-spacing: 1.5px;
          border: none; border-radius: 12px;
          cursor: pointer; transition: all 0.22s;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(76,171,193,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
          font-family: 'Outfit', sans-serif;
          text-transform: uppercase;
        }
        .lp-sbtn::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .lp-sbtn::after {
          content: '';
          position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg);
          transition: left 0.55s ease;
        }
        .lp-sbtn:hover::after { left: 140%; }
        .lp-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(76,171,193,0.52);
        }
        .lp-sbtn:active:not(:disabled) { transform: translateY(0); }
        .lp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .lp-sbtn.orange {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          box-shadow: 0 4px 20px rgba(202,157,40,0.40);
        }
        .lp-sbtn.orange:hover:not(:disabled) {
          background: linear-gradient(135deg, #b5841f 0%, var(--gold) 100%);
          box-shadow: 0 10px 28px rgba(202,157,40,0.52);
        }

        .lp-sbtn.green {
          background: linear-gradient(135deg, #4e9148 0%, var(--green) 100%);
          box-shadow: 0 4px 20px rgba(102,169,98,0.40);
        }
        .lp-sbtn.green:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7a39 0%, #4e9148 100%);
          box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }

        /* ── OTP boxes ── */
        .otp-row {
          display: flex; gap: 8px;
          justify-content: center; margin-bottom: 16px;
        }
        .otp-box {
          width: 46px; height: 52px;
          border: 1px solid rgba(76,171,193,0.22);
          border-radius: 12px;
          font-size: 22px; font-weight: 800;
          text-align: center;
          color: var(--cream);
          font-family: 'Outfit', sans-serif;
          outline: none;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          transition: all .18s;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06);
        }
        .otp-box:focus {
          background: rgba(24,116,128,0.65);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.20);
          color: #fff;
        }
        .otp-box:not(:placeholder-shown) {
          background: rgba(24,116,128,0.55);
          border-color: var(--green);
          box-shadow: 0 0 0 2px rgba(102,169,98,0.28);
        }

        /* ── Timer & resend ── */
        .otp-timer {
          text-align: center; font-size: 12px;
          color: rgba(245,231,194,0.60);
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .otp-timer strong { font-size: 13.5px; }
        .resend-btn {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px; font-weight: 700;
          cursor: pointer; transition: all .2s;
        }
        .resend-btn:disabled { color: rgba(245,231,194,0.22); cursor: not-allowed; }
        .resend-btn:not(:disabled) { color: var(--gold-light); }
        .resend-btn:not(:disabled):hover { color: var(--gold); text-decoration: underline; }

        /* ── Back button ── */
        .otp-back {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 600;
          color: rgba(245,231,194,0.52);
          cursor: pointer;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 14px; padding: 0;
          transition: color .2s;
        }
        .otp-back:hover { color: var(--teal); }

        /* ── OR divider ── */
        .lp-or {
          display: flex; align-items: center;
          gap: 10px; margin: 16px 0 0;
        }
        .lp-orl { flex: 1; height: 1px; background: rgba(202,157,40,0.18); }
        .lp-or span {
          font-size: 10.5px; color: rgba(245,231,194,0.36);
          letter-spacing: 0.8px; text-transform: uppercase;
        }

        /* ── Register link ── */
        .lp-reg {
          margin-top: 12px; text-align: center;
          font-size: 13px; color: rgba(245,231,194,0.58);
          font-family: 'Outfit', sans-serif;
        }
        .lp-reg a {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px;
          padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light);
          transition: all .2s;
        }
        .lp-reg a:hover { color: var(--gold-light); border-color: var(--gold); }

        /* ── Card footer ── */
        .lp-cfooter {
          margin-top: auto; padding-top: 16px;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center;
          justify-content: center; gap: 7px;
        }
        .lp-cfdot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: dotPulse 2.5s infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.7); }
        }
        .lp-cfooter span {
          font-size: 10.5px; color: rgba(245,231,194,0.28);
          letter-spacing: 0.3px;
        }

        /* ══════════════════════════════════════
           MAYOR PANEL
        ══════════════════════════════════════ */
        .lp-mayor-panel {
          width: 300px;
          background: linear-gradient(
            155deg,
            var(--teal-dark) 0%,
            var(--deep) 38%,
            #0b5e6b 72%,
            #093e4a 100%
          );
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 26px;
          position: relative; overflow: hidden;
        }

        /* Animated gold shimmer top */
        .lp-mayor-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg,
            var(--gold), var(--gold-light), var(--cream),
            var(--gold-light), var(--gold)
          );
          background-size: 250%;
          animation: shimmerBar 3.5s linear infinite;
        }
        @keyframes shimmerBar {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        /* Soft radial glow behind photo */
        .lp-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .lp-mp-icon {
          position: absolute; font-size: 30px;
          opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: opacity .35s;
        }
        .lp-mayor-panel:hover .lp-mp-icon { opacity: 0.24; }
        .lp-mp-icon.tl { top: 26px;  left: 20px; }
        .lp-mp-icon.tr { top: 26px;  right: 20px; }
        .lp-mp-icon.bl { bottom: 48px; left: 20px; }
        .lp-mp-icon.br { bottom: 48px; right: 20px; }

        /* Mayor photo */
        .lp-mayor-photo-wrap {
          position: relative; margin-bottom: 20px; z-index: 2;
        }
        .lp-mayor-ring {
          width: 152px; height: 152px;
          border-radius: 50%; padding: 5px;
          background: conic-gradient(
            var(--gold) 0deg,
            var(--gold-light) 90deg,
            var(--cream) 180deg,
            var(--gold-light) 260deg,
            var(--gold) 360deg
          );
          box-shadow:
            0 8px 36px rgba(0,0,0,0.38),
            0 0 0 3px rgba(202,157,40,0.18);
        }
        .lp-mayor-photo {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92);
          display: block;
        }
        .lp-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28);
          border: 2px solid rgba(255,255,255,0.95);
        }

        .lp-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700;
          color: #fff; text-align: center;
          margin-bottom: 6px;
          text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .lp-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px;
          color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 22px; z-index: 2; position: relative;
        }

        .lp-mayor-bar-wrap {
          width: 110px; height: 5px;
          background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden;
          z-index: 2; position: relative;
        }
        .lp-mayor-bar {
          width: 55%; height: 100%;
          background: linear-gradient(90deg, var(--green), #7dd87a);
          border-radius: 999px;
          box-shadow: 0 0 10px rgba(102,169,98,0.65);
          animation: barGlow 2.5s ease-in-out infinite;
        }
        @keyframes barGlow {
          0%,100% { opacity:1; }
          50% { opacity:0.60; }
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .28s ease both; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .lp-mayor-panel { display: none; }
          .lp-card {
            border-right: 1px solid rgba(76,171,193,0.20);
            border-radius: 24px; width: 92%; max-width: 410px;
          }
          .lp-wrapper { border-radius: 24px; }
        }
      `}),a.jsxs("div",{className:"lp-root",children:[a.jsx("div",{className:"lp-bg",style:{backgroundImage:`url(${Oo})`}}),a.jsx("div",{className:"lp-overlay"}),a.jsx("div",{className:"lp-stripe"}),a.jsxs("div",{className:"lp-wrapper",children:[a.jsxs("div",{className:"lp-card",children:[a.jsxs("div",{className:"lp-logo-row",children:[a.jsx("img",{src:Bn,alt:"VVCMC",className:"lp-logo-img"}),a.jsxs("div",{className:"lp-logo-texts",children:[a.jsx("div",{className:"lp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"lp-logo-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"lp-tabs",children:[a.jsx("button",{className:`lp-tab ${v==="password"?"active":""}`,onClick:()=>fe("password"),children:"🔒 Password Login"}),a.jsx("button",{className:`lp-tab ${v==="otp"?"active":""}`,onClick:()=>fe("otp"),children:"📱 OTP Login"})]}),v==="password"&&a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"lp-ftitle",children:"Sign In to Continue"}),a.jsxs("form",{onSubmit:pe,children:[a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Username"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-ficon",children:"👤"}),a.jsx("input",{className:"lp-finput has-icon",name:"userName",placeholder:"Enter your username",value:s.userName,onChange:J,autoComplete:"username"})]})]}),a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Password"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-ficon",children:"🔒"}),a.jsx("input",{className:"lp-finput has-icon",type:f?"text":"password",name:"password",placeholder:"Enter your password",value:s.password,onChange:J,autoComplete:"current-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"lp-pbtn",onClick:()=>h(!f),tabIndex:-1,children:f?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"lp-sbtn",children:"SIGN IN →"})]}),a.jsxs("div",{className:"lp-or",children:[a.jsx("div",{className:"lp-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"lp-orl"})]}),a.jsxs("p",{className:"lp-reg",children:["Don't have an account?",a.jsx(Nl,{to:"/register",children:"Create account"})]})]}),v==="otp"&&a.jsxs("div",{className:"fade-up",children:[x==="mobile"&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"lp-ftitle",children:"Mobile OTP Login"}),a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-prefix",children:"🇮🇳 +91"}),a.jsx("input",{className:"lp-finput with-prefix",type:"tel",maxLength:10,placeholder:"Enter mobile number",value:R,onChange:K=>k(K.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:K=>K.key==="Enter"&&$()})]})]}),a.jsx("button",{className:"lp-sbtn orange",onClick:$,disabled:R.length!==10||W,children:W?"⏳ Sending...":"Send OTP →"}),a.jsxs("div",{className:"lp-or",children:[a.jsx("div",{className:"lp-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"lp-orl"})]}),a.jsxs("p",{className:"lp-reg",children:["Don't have an account?",a.jsx(Nl,{to:"/register",children:"Create account"})]})]}),x==="otp"&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{g("mobile"),M(["","","","","",""])},children:"← Back"}),a.jsx("p",{className:"lp-ftitle",children:"Verify OTP"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",R.slice(-3)]})," OTP has been sent to"]}),a.jsx("div",{className:"otp-row",onPaste:F,children:z.map((K,B)=>a.jsx("input",{ref:j=>de.current[B]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>me(B,j.target.value),onKeyDown:j=>we(B,j)},B))}),a.jsxs("div",{className:"otp-timer",children:[A>0?a.jsxs(a.Fragment,{children:["OTP expires in:"," ",a.jsx("strong",{style:{color:A<=15?"#ff6b6b":"#CE9A54"},children:he(A)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP has expired!"}),a.jsxs("div",{style:{marginTop:6},children:["Didn't receive the OTP?"," ",a.jsx("button",{className:"resend-btn",onClick:$,disabled:!X,children:"Resend OTP"})]})]}),a.jsx("button",{className:"lp-sbtn green",onClick:ie,disabled:z.join("").length<6||W,children:W?"⏳ Verifying...":"✅ Verify & Login"})]})]}),a.jsxs("div",{className:"lp-cfooter",children:[a.jsx("div",{className:"lp-cfdot"}),a.jsx("span",{children:"Secure Government Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"lp-mayor-panel",children:[a.jsx("span",{className:"lp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"lp-mp-icon tr",children:"🏥"}),a.jsx("span",{className:"lp-mp-icon bl",children:"🏗️"}),a.jsx("span",{className:"lp-mp-icon br",children:"🏢"}),a.jsxs("div",{className:"lp-mayor-photo-wrap",children:[a.jsx("div",{className:"lp-mayor-ring",children:a.jsx("img",{src:ko,alt:"Mayor",className:"lp-mayor-photo"})}),a.jsx("div",{className:"lp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"lp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"lp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"lp-mayor-bar-wrap",children:a.jsx("div",{className:"lp-mayor-bar"})})]})]})]})]})}const Ot=Qe.create({baseURL:"https://jansamvad.saavi.co.in/api",headers:{"Content-Type":"application/json"}});Ot.interceptors.request.use(n=>(n.data instanceof FormData&&delete n.headers["Content-Type"],n));const Xb="/assets/logo2new-CpqCFyo_.jpeg";function XS(){const n=vt(),[o,s]=b.useState("password"),[l,d]=b.useState({username:"",password:""}),[p,f]=b.useState(!1),[h,x]=b.useState(""),[g,y]=b.useState(!1),[v,T]=b.useState("mobile"),[R,k]=b.useState(""),[z,M]=b.useState(["","","","","",""]),[E,S]=b.useState(""),[A,P]=b.useState(0),[X,D]=b.useState(!1),[W,V]=b.useState(!1),de=b.useRef([]),he=K=>B=>d(j=>({...j,[K]:B.target.value}));b.useEffect(()=>{if(A<=0){D(!0);return}const K=setTimeout(()=>P(B=>B-1),1e3);return()=>clearTimeout(K)},[A]);const J=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,pe=async K=>{if(K.preventDefault(),x(""),!l.username||!l.password){x("Please fill in all required fields. ❌");return}try{f(!0);const B=await Ot.post("/citizen/login",{username:l.username.trim(),password:l.password});if(!B.data.success){x(B.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(B.data.citizen)),localStorage.setItem("citizenToken",B.data.token||""),n("/my-appointments")}catch(B){x(B?.response?.data?.message||"Server Error ❌")}finally{f(!1)}},$=async()=>{const K=R.trim();if(!/^[0-9]{10}$/.test(K)){x("Please enter a valid mobile number.");return}x(""),V(!0);try{const q=await Ot.post("/citizen/check-mobile",{mobileNo:K});if(!q.data.success){x(q.data.message||"Mobile number is not registered. ❌"),V(!1);return}}catch(q){x(q?.response?.data?.message||"Mobile number is not registered. Please register first."),V(!1);return}const B=Math.floor(1e5+Math.random()*9e5).toString();S(B),P(60),D(!1),M(["","","","","",""]);const j=`Dear Citizen, Your OTP for VVCMC Jan Samvaad Portal login is ${B}. This OTP is valid for 60 seconds. Do not share this OTP with anyone. SAAVI INFINET`,C=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379315&number=${K}&message=${j}`;fetch(C,{method:"GET",mode:"no-cors"}).catch(()=>{}),T("otp"),V(!1),setTimeout(()=>de.current[0]?.focus(),120)},me=async()=>{const K=z.join("");if(K.length<6){x("Please enter the 6-digit OTP.");return}if(A<=0){x("OTP has expired. Please request a new OTP.");return}if(K!==E){x("❌ Invalid OTP. Please try again."),M(["","","","","",""]),setTimeout(()=>de.current[0]?.focus(),50);return}try{V(!0),x("");const B=await Ot.post("/citizen/citizenLoginByMobile",{mobileNo:R.trim()});if(!B.data.success){x(B.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(B.data.citizen)),localStorage.setItem("citizenToken",B.data.token||""),n("/my-appointments")}catch(B){x(B?.response?.data?.message||"Server Error ❌")}finally{V(!1)}},we=(K,B)=>{if(!/^[0-9]?$/.test(B))return;const j=[...z];j[K]=B,M(j),B&&K<5&&de.current[K+1]?.focus()},F=(K,B)=>{B.key==="Backspace"&&!z[K]&&K>0&&de.current[K-1]?.focus()},ie=K=>{K.preventDefault();const B=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...z];B.split("").forEach((C,q)=>{j[q]=C}),M(j),de.current[Math.min(B.length,5)]?.focus()},fe=K=>{s(K),x(""),T("mobile"),M(["","","","","",""]),k(""),P(0),y(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --teal:       #4CABC1;
          --teal-dark:  #49ACC3;
          --gold:       #CA9D28;
          --gold-light: #CE9A54;
          --cream:      #F5E7C2;
          --green:      #66A962;
          --deep:       #187480;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cl-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .cl-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .cl-root:hover .cl-bg { transform: scale(1.02); }

        .cl-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(24,116,128,0.45) 0%,
            rgba(73,172,195,0.38) 30%,
            rgba(24,116,128,0.60) 60%,
            rgba(12,70,80,0.82) 100%
          );
        }

        .cl-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%,
            var(--gold-light) 22%,
            var(--teal) 45%,
            var(--teal-dark) 65%,
            var(--green) 85%,
            var(--cream) 100%
          );
          z-index: 20;
        }

        /* ── WRAPPER ── */
        .cl-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: stretch;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.52),
            0 0 0 1px rgba(202,157,40,0.20),
            inset 0 1px 0 rgba(245,231,194,0.07);
          animation: wrapperIn .5s cubic-bezier(.22,.9,.36,1) both;
        }
        @keyframes wrapperIn {
          from { opacity:0; transform:translateY(26px) scale(0.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        /* ── LEFT CARD ── */
        .cl-card {
          width: 410px;
          background: linear-gradient(
            160deg,
            rgba(12,68,80,0.80) 0%,
            rgba(24,116,128,0.62) 50%,
            rgba(12,68,80,0.85) 100%
          );
          backdrop-filter: blur(38px) saturate(2);
          -webkit-backdrop-filter: blur(38px) saturate(2);
          border: 1px solid rgba(76,171,193,0.20);
          border-right: 1px solid rgba(202,157,40,0.18);
          padding: 34px 32px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .cl-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .cl-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
        }
        .cl-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .cl-logo-img {
          width: 54px; height: 54px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow:
            0 0 0 3px rgba(202,157,40,0.15),
            0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .cl-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .cl-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .cl-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(245,231,194,0.60);
          letter-spacing: 0.4px;
        }

        /* ── Page title ── */
        .cl-page-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--cream);
          margin-bottom: 4px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.5px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }
        .cl-page-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          color: rgba(245,231,194,0.55);
          margin-bottom: 18px;
        }

        /* ── TABS ── */
        .cl-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 18px;
          background: rgba(0,0,0,0.34);
          border-radius: 14px;
          padding: 4px;
          border: 1px solid rgba(76,171,193,0.16);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.22);
        }
        .cl-tab {
          flex: 1;
          padding: 9px 0;
          border: none;
          border-radius: 11px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: all .25s;
          color: rgba(245,231,194,0.48);
          background: transparent;
          letter-spacing: 0.2px;
        }
        .cl-tab.active {
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          box-shadow:
            0 2px 14px rgba(76,171,193,0.42),
            inset 0 1px 0 rgba(245,231,194,0.14);
          font-weight: 700;
        }
        .cl-tab:not(.active):hover {
          color: var(--cream);
          background: rgba(76,171,193,0.12);
        }

        /* ── ERROR BOX ── */
        .cl-error {
          background: rgba(220,38,38,0.18);
          border: 1px solid rgba(220,38,38,0.38);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 12.5px;
          color: #fca5a5;
          margin-bottom: 14px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
        }

        /* ── FORM FIELDS ── */
        .cl-fld { margin-bottom: 14px; }

        .cl-flbl {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          color: rgba(245,231,194,0.72);
          margin-bottom: 7px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .cl-fwrap { position: relative; }

        .cl-finput {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 12px;
          font-size: 14px;
          color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          outline: none;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .cl-finput:focus {
          background: rgba(24,116,128,0.62);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .cl-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 13px; font-family: 'Tiro Devanagari Marathi', serif; }
        .cl-finput.has-icon { padding-left: 42px; }

        .cl-ficon {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          pointer-events: none;
          opacity: 0.48;
        }
        .cl-pbtn {
          position: absolute;
          right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; font-size: 15px;
          color: rgba(245,231,194,0.42);
          padding: 0; display: flex; align-items: center;
          transition: color .2s;
        }
        .cl-pbtn:hover { color: var(--cream); }

        .cl-prefix {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 12px; font-weight: 700;
          color: rgba(245,231,194,0.68);
          pointer-events: none; white-space: nowrap;
        }
        .cl-finput.with-prefix { padding-left: 74px; }

        /* ── BUTTONS ── */
        .cl-sbtn {
          width: 100%;
          padding: 13px;
          margin-top: 6px;
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          font-size: 13px; font-weight: 800;
          letter-spacing: 1.5px;
          border: none; border-radius: 12px;
          cursor: pointer; transition: all 0.22s;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(76,171,193,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
          font-family: 'Outfit', sans-serif;
          text-transform: uppercase;
        }
        .cl-sbtn::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .cl-sbtn::after {
          content: '';
          position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg);
          transition: left 0.55s ease;
        }
        .cl-sbtn:hover::after { left: 140%; }
        .cl-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(76,171,193,0.52);
        }
        .cl-sbtn:active:not(:disabled) { transform: translateY(0); }
        .cl-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .cl-sbtn.orange {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          box-shadow: 0 4px 20px rgba(202,157,40,0.40);
        }
        .cl-sbtn.orange:hover:not(:disabled) {
          background: linear-gradient(135deg, #b5841f 0%, var(--gold) 100%);
          box-shadow: 0 10px 28px rgba(202,157,40,0.52);
        }

        .cl-sbtn.green {
          background: linear-gradient(135deg, #4e9148 0%, var(--green) 100%);
          box-shadow: 0 4px 20px rgba(102,169,98,0.40);
        }
        .cl-sbtn.green:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7a39 0%, #4e9148 100%);
          box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }

        /* ── OTP boxes ── */
        .otp-row {
          display: flex; gap: 8px;
          justify-content: center; margin-bottom: 16px;
        }
        .otp-box {
          width: 46px; height: 52px;
          border: 1px solid rgba(76,171,193,0.22);
          border-radius: 12px;
          font-size: 22px; font-weight: 800;
          text-align: center;
          color: var(--cream);
          font-family: 'Outfit', sans-serif;
          outline: none;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          transition: all .18s;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06);
        }
        .otp-box:focus {
          background: rgba(24,116,128,0.65);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.20);
          color: #fff;
        }
        .otp-box:not(:placeholder-shown) {
          background: rgba(24,116,128,0.55);
          border-color: var(--green);
          box-shadow: 0 0 0 2px rgba(102,169,98,0.28);
        }

        /* ── Timer & resend ── */
        .otp-timer {
          text-align: center; font-size: 12px;
          color: rgba(245,231,194,0.60);
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .otp-timer strong { font-size: 13.5px; }
        .resend-btn {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px; font-weight: 700;
          cursor: pointer; transition: all .2s;
        }
        .resend-btn:disabled { color: rgba(245,231,194,0.22); cursor: not-allowed; }
        .resend-btn:not(:disabled) { color: var(--gold-light); }
        .resend-btn:not(:disabled):hover { color: var(--gold); text-decoration: underline; }

        /* ── Back button ── */
        .otp-back {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 600;
          color: rgba(245,231,194,0.52);
          cursor: pointer;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 14px; padding: 0;
          transition: color .2s;
        }
        .otp-back:hover { color: var(--teal); }

        /* ── OR divider ── */
        .cl-or {
          display: flex; align-items: center;
          gap: 10px; margin: 16px 0 0;
        }
        .cl-orl { flex: 1; height: 1px; background: rgba(202,157,40,0.18); }
        .cl-or span {
          font-size: 10.5px; color: rgba(245,231,194,0.36);
          letter-spacing: 0.8px; text-transform: uppercase;
        }

        /* ── Register link ── */
        .cl-reg {
          margin-top: 12px; text-align: center;
          font-size: 13px; color: rgba(245,231,194,0.58);
          font-family: 'Outfit', sans-serif;
        }
        .cl-reg a, .cl-reg span.cl-link {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px;
          padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light);
          transition: all .2s;
          cursor: pointer;
        }
        .cl-reg a:hover, .cl-reg span.cl-link:hover { color: var(--gold-light); border-color: var(--gold); }

        /* ── Card footer ── */
        .cl-cfooter {
          margin-top: auto; padding-top: 16px;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center;
          justify-content: center; gap: 7px;
        }
        .cl-cfdot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: dotPulse 2.5s infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.7); }
        }
        .cl-cfooter span {
          font-size: 10.5px; color: rgba(245,231,194,0.28);
          letter-spacing: 0.3px;
        }

        /* ══════════════════════════════════════
           MAYOR PANEL
        ══════════════════════════════════════ */
        .cl-mayor-panel {
          width: 300px;
          background: linear-gradient(
            155deg,
            var(--teal-dark) 0%,
            var(--deep) 38%,
            #0b5e6b 72%,
            #093e4a 100%
          );
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 26px;
          position: relative; overflow: hidden;
        }

        .cl-mayor-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg,
            var(--gold), var(--gold-light), var(--cream),
            var(--gold-light), var(--gold)
          );
          background-size: 250%;
          animation: shimmerBar 3.5s linear infinite;
        }
        @keyframes shimmerBar {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        .cl-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .cl-mp-icon {
          position: absolute; font-size: 30px;
          opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: opacity .35s;
        }
        .cl-mayor-panel:hover .cl-mp-icon { opacity: 0.24; }
        .cl-mp-icon.tl { top: 26px;  left: 20px; }
        .cl-mp-icon.tr { top: 26px;  right: 20px; }
        .cl-mp-icon.bl { bottom: 48px; left: 20px; }
        .cl-mp-icon.br { bottom: 48px; right: 20px; }

        .cl-mayor-photo-wrap {
          position: relative; margin-bottom: 20px; z-index: 2;
        }
        .cl-mayor-ring {
          width: 152px; height: 152px;
          border-radius: 50%; padding: 5px;
          background: conic-gradient(
            var(--gold) 0deg,
            var(--gold-light) 90deg,
            var(--cream) 180deg,
            var(--gold-light) 260deg,
            var(--gold) 360deg
          );
          box-shadow:
            0 8px 36px rgba(0,0,0,0.38),
            0 0 0 3px rgba(202,157,40,0.18);
        }
        .cl-mayor-photo {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92);
          display: block;
        }
        .cl-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28);
          border: 2px solid rgba(255,255,255,0.95);
        }

        .cl-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700;
          color: #fff; text-align: center;
          margin-bottom: 6px;
          text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .cl-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px;
          color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 22px; z-index: 2; position: relative;
        }

        .cl-mayor-bar-wrap {
          width: 110px; height: 5px;
          background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden;
          z-index: 2; position: relative;
        }
        .cl-mayor-bar {
          width: 65%; height: 100%;
          background: linear-gradient(90deg, var(--green), #7dd87a);
          border-radius: 999px;
          box-shadow: 0 0 10px rgba(102,169,98,0.65);
          animation: barGlow 2.5s ease-in-out infinite;
        }
        @keyframes barGlow {
          0%,100% { opacity:1; }
          50% { opacity:0.60; }
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .28s ease both; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .cl-mayor-panel { display: none; }
          .cl-card {
            border-right: 1px solid rgba(76,171,193,0.20);
            border-radius: 24px; width: 92%; max-width: 410px;
          }
          .cl-wrapper { border-radius: 24px; }
        }
      `}),a.jsxs("div",{className:"cl-root",children:[a.jsx("div",{className:"cl-bg",style:{backgroundImage:`url(${Oo})`}}),a.jsx("div",{className:"cl-overlay"}),a.jsx("div",{className:"cl-stripe"}),a.jsxs("div",{className:"cl-wrapper",children:[a.jsxs("div",{className:"cl-card",children:[a.jsxs("div",{className:"cl-logo-row",children:[a.jsx("img",{src:Xb,alt:"VVCMC",className:"cl-logo-img"}),a.jsxs("div",{className:"cl-logo-texts",children:[a.jsx("div",{className:"cl-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"cl-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),a.jsx("p",{className:"cl-page-title",children:"Welcome Back"}),a.jsx("p",{className:"cl-page-sub",children:"Sign in to the Mayor Appointment Portal."}),a.jsxs("div",{className:"cl-tabs",children:[a.jsx("button",{className:`cl-tab ${o==="password"?"active":""}`,onClick:()=>fe("password"),children:"🔒 Password Login"}),a.jsx("button",{className:`cl-tab ${o==="otp"?"active":""}`,onClick:()=>fe("otp"),children:"📱 OTP Login"})]}),h&&a.jsxs("div",{className:"cl-error",children:["⚠️ ",h]}),o==="password"&&a.jsxs("div",{className:"fade-up",children:[a.jsxs("form",{onSubmit:pe,children:[a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Username"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-ficon",children:"👤"}),a.jsx("input",{className:"cl-finput has-icon",type:"text",placeholder:"Enter your username",value:l.username,onChange:he("username"),autoComplete:"username",autoFocus:!0})]})]}),a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Password"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-ficon",children:"🔒"}),a.jsx("input",{className:"cl-finput has-icon",type:g?"text":"password",placeholder:"Enter your password",value:l.password,onChange:he("password"),autoComplete:"current-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"cl-pbtn",onClick:()=>y(!g),tabIndex:-1,children:g?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"cl-sbtn",disabled:p||!l.username||!l.password,children:p?"⏳ Logging in...":"🔐 SIGN IN →"})]}),a.jsxs("div",{className:"cl-or",children:[a.jsx("div",{className:"cl-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"cl-orl"})]}),a.jsxs("p",{className:"cl-reg",children:["Don't have an account?",a.jsx("span",{className:"cl-link",onClick:()=>n("/citizen-registration"),children:"Register"})]})]}),o==="otp"&&a.jsxs("div",{className:"fade-up",children:[v==="mobile"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-prefix",children:"🇮🇳 +91"}),a.jsx("input",{className:"cl-finput with-prefix",type:"tel",maxLength:10,placeholder:"Enter 10-digit mobile number",value:R,onChange:K=>k(K.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:K=>K.key==="Enter"&&$(),autoFocus:!0})]})]}),a.jsx("button",{className:"cl-sbtn orange",onClick:$,disabled:R.length!==10||W,children:W?"⏳ Sending...":"Send OTP →"}),a.jsxs("div",{className:"cl-or",children:[a.jsx("div",{className:"cl-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"cl-orl"})]}),a.jsxs("p",{className:"cl-reg",children:["Account नाही?",a.jsx("span",{className:"cl-link",onClick:()=>n("/register"),children:"Register करा"})]})]}),v==="otp"&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{T("mobile"),M(["","","","","",""]),x("")},children:"← मागे जा"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",R.slice(-3)]})," ","OTP has been sent to"]}),a.jsx("div",{className:"otp-row",onPaste:ie,children:z.map((K,B)=>a.jsx("input",{ref:j=>de.current[B]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>we(B,j.target.value),onKeyDown:j=>F(B,j)},B))}),a.jsxs("div",{className:"otp-timer",children:[A>0?a.jsxs(a.Fragment,{children:["OTP expires in:"," ",a.jsx("strong",{style:{color:A<=15?"#ff6b6b":"#CE9A54"},children:J(A)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP has expired!"}),a.jsxs("div",{style:{marginTop:6},children:["Didn't receive the OTP?"," ",a.jsx("button",{className:"resend-btn",onClick:$,disabled:!X,children:"Resend OTP"})]})]}),a.jsx("button",{className:"cl-sbtn green",onClick:me,disabled:z.join("").length<6||W,children:W?"⏳ Verifying...":"✅ Verify & Login"})]})]}),a.jsxs("div",{className:"cl-cfooter",children:[a.jsx("div",{className:"cl-cfdot"}),a.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"cl-mayor-panel",children:[a.jsx("span",{className:"cl-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"cl-mp-icon tr",children:"🤝"}),a.jsx("span",{className:"cl-mp-icon bl",children:"🏢"}),a.jsx("span",{className:"cl-mp-icon br",children:"🏙️"}),a.jsx("div",{className:"cl-mayor-photo-wrap",children:a.jsx("div",{className:"cl-mayor-ring",children:a.jsx("img",{src:ko,alt:"Mayor",className:"cl-mayor-photo"})})}),a.jsx("p",{className:"cl-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"cl-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"cl-mayor-bar-wrap",children:a.jsx("div",{className:"cl-mayor-bar"})})]})]})]})]})}function JS(){const n=vt();return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Outfit:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --teal: #4CABC1; --teal-dark: #49ACC3;
          --gold: #CA9D28; --gold-light: #CE9A54;
          --cream: #F5E7C2; --green: #66A962;
        }

        .ps-root {
          min-height: 100vh; width: 100%;
          position: relative; display: flex;
          align-items: center; justify-content: center;
          font-family: 'Outfit', sans-serif; overflow: hidden;
        }

        .ps-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: 68% center;
          filter: brightness(0.62) saturate(1.15);
          transition: transform 14s ease;
        }
        .ps-root:hover .ps-bg { transform: scale(1.03); }

        /* Richer overlay — same teal/dark tones */
        .ps-overlay {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% -10%, rgba(76,171,193,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 50% 70% at 100% 100%, rgba(202,157,40,0.12) 0%, transparent 55%),
            linear-gradient(150deg,
              rgba(10,55,65,0.68) 0%,
              rgba(20,90,105,0.52) 40%,
              rgba(8,40,50,0.80) 100%);
        }

        /* Top accent stripe */
        .ps-stripe {
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%, var(--gold-light) 22%, var(--teal) 45%,
            var(--teal-dark) 65%, var(--green) 85%, var(--cream) 100%);
          z-index: 20;
        }

        /* Subtle corner glow orbs */
        .ps-glow-tl {
          position: absolute; top: -120px; left: -120px;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.14) 0%, transparent 70%);
          pointer-events: none; z-index: 5;
        }
        .ps-glow-br {
          position: absolute; bottom: -120px; right: -120px;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(202,157,40,0.12) 0%, transparent 70%);
          pointer-events: none; z-index: 5;
        }

        /* Floating dots decoration */
        .ps-dots {
          position: absolute; inset: 0; pointer-events: none; z-index: 4;
          background-image:
            radial-gradient(circle, rgba(76,171,193,0.18) 1px, transparent 1px),
            radial-gradient(circle, rgba(202,157,40,0.12) 1px, transparent 1px);
          background-size: 48px 48px, 72px 72px;
          background-position: 0 0, 24px 24px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        .ps-box {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; gap: 34px;
          animation: wrapIn .55s cubic-bezier(.22,.9,.36,1) both;
        }
        @keyframes wrapIn {
          from { opacity:0; transform:translateY(28px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        /* ── Header ── */
        .ps-header {
          display: flex; flex-direction: column;
          align-items: center; gap: 14px; text-align: center;
        }

        /* Logo — layered rings */
  /* ps-logo-wrap */
.ps-logo-wrap {
  width: 100px; height: 100px;
  border-radius: 50%;
  padding: 4px;
  background: conic-gradient(
    #4CABC1 0deg,
    #66A962 80deg,
    #F5E7C2 150deg,
    #CE9A54 220deg,
    #CA9D28 280deg,
    #CE9A54 320deg,
    #4CABC1 360deg
  );
  box-shadow: 0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(76,171,193,0.20);
}

/* ps-logo-img */
.ps-logo-img {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
.ps-logo-ring1 {
  position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(#CA9D28 0deg,#CE9A54 90deg,#F5E7C2 180deg,#CE9A54 260deg,#CA9D28 360deg);
  animation: spinSlow 24s linear infinite;
  padding: 3px;
}
.ps-logo-ring2 {
  position: absolute; inset: 3px; border-radius: 50%;
  background: rgba(8,40,50,0.90);
}



        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Title */
        .ps-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 27px; font-weight: 700; color: var(--cream);
          text-shadow: 0 2px 18px rgba(0,0,0,0.38);
          line-height: 1.25;
        }
        .ps-title-jan {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; color: var(--gold-light);
          text-shadow: 0 2px 14px rgba(202,157,40,0.35);
          margin-top: 3px;
        }
        .ps-hr {
          width: 110px; height: 1.5px; margin: 8px auto;
          background: linear-gradient(90deg, transparent, var(--gold-light), var(--teal), transparent);
          opacity: 0.6;
        }
        .ps-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 19px; color: rgba(255,255,255,0.52);
          letter-spacing: 0.4px;
        }

        /* ── Cards ── */
        .ps-cards {
          display: flex; gap: 22px;
          flex-wrap: wrap; justify-content: center;
          align-items: stretch;
        }

        .ps-card {
          width: 248px; min-height: 316px;
          border-radius: 22px;
          padding: 34px 22px 26px;
          display: flex; flex-direction: column;
          align-items: center; gap: 12px;
          cursor: pointer;
          transition: transform .28s cubic-bezier(.22,.9,.36,1), box-shadow .28s ease, border-color .28s ease;
          position: relative; overflow: hidden;
          animation: cardIn .65s cubic-bezier(.22,.9,.36,1) both;
        }
        .ps-card:nth-child(1) { animation-delay: .1s; }
        .ps-card:nth-child(2) { animation-delay: .2s; }
        @keyframes cardIn {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Glass background */
        .ps-card.admin {
          // background: linear-gradient(155deg,
          //   rgba(30,80,35,0.62) 0%,
          //   rgba(12,50,18,0.78) 100%);
          // backdrop-filter: blur(30px);
          // border: 1.5px solid rgba(202,157,40,0.28);
          // box-shadow:
          //   0 20px 56px rgba(0,0,0,0.42),
          //   inset 0 1px 0 rgba(202,157,40,0.18),
          //   inset 0 -1px 0 rgba(0,0,0,0.20);

           background: linear-gradient(155deg,
            rgba(12,65,85,0.62) 0%,
            rgba(6,38,58,0.78) 100%);
          backdrop-filter: blur(30px);
          border: 1.5px solid rgba(76,171,193,0.28);
          box-shadow:
            0 20px 56px rgba(0,0,0,0.42),
            inset 0 1px 0 rgba(76,171,193,0.18),
            inset 0 -1px 0 rgba(0,0,0,0.20);
        }
        .ps-card.citizen {
          background: linear-gradient(155deg,
            rgba(12,65,85,0.62) 0%,
            rgba(6,38,58,0.78) 100%);
          backdrop-filter: blur(30px);
          border: 1.5px solid rgba(76,171,193,0.28);
          box-shadow:
            0 20px 56px rgba(0,0,0,0.42),
            inset 0 1px 0 rgba(76,171,193,0.18),
            inset 0 -1px 0 rgba(0,0,0,0.20);
        }

        /* Top bar */
        .ps-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          border-radius: 22px 22px 0 0;
        }
        .ps-card.admin::before  { background: linear-gradient(90deg,#CA9D28,#F5E7C2,#CE9A54); }
        .ps-card.citizen::before { background: linear-gradient(90deg,#4CABC1,#66A962,#4CABC1); }

        /* Inner glow blob */
        .ps-card::after {
          content: ''; position: absolute;
          top: -30px; left: 50%; transform: translateX(-50%);
          width: 150px; height: 150px; border-radius: 50%;
          opacity: 0.08; pointer-events: none; transition: opacity .3s;
          filter: blur(20px);
        }
        .ps-card.admin::after   { background: #CA9D28; }
        .ps-card.citizen::after { background: #4CABC1; }

        .ps-card:hover { transform: translateY(-10px) scale(1.025); }
        .ps-card.admin:hover {
          box-shadow: 0 32px 80px rgba(0,0,0,0.50),
            0 0 0 1px rgba(202,157,40,0.45),
            0 0 40px rgba(202,157,40,0.15),
            inset 0 1px 0 rgba(202,157,40,0.30);
          border-color: rgba(202,157,40,0.55);
        }
        .ps-card.citizen:hover {
          box-shadow: 0 32px 80px rgba(0,0,0,0.50),
            0 0 0 1px rgba(76,171,193,0.45),
            0 0 40px rgba(76,171,193,0.15),
            inset 0 1px 0 rgba(76,171,193,0.30);
          border-color: rgba(76,171,193,0.55);
        }
        .ps-card:hover::after { opacity: 0.16; }

        /* Icon */
        .ps-icon-wrap {
          width: 74px; height: 74px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 31px; position: relative; z-index: 2;
          transition: transform .28s cubic-bezier(.22,.9,.36,1), box-shadow .28s;
        }
        .ps-card.admin .ps-icon-wrap {
          background: linear-gradient(135deg, #CA9D28, #CE9A54, #F5E7C2);
          box-shadow: 0 8px 24px rgba(202,157,40,0.50), 0 0 0 5px rgba(202,157,40,0.10);
        }
        .ps-card.citizen .ps-icon-wrap {
          background: linear-gradient(135deg, #4CABC1, #49ACC3, #66A962);
          box-shadow: 0 8px 24px rgba(76,171,193,0.50), 0 0 0 5px rgba(76,171,193,0.10);
        }
        .ps-card:hover .ps-icon-wrap {
          transform: translateY(-4px) scale(1.08);
        }
        .ps-card.admin:hover .ps-icon-wrap {
          box-shadow: 0 14px 36px rgba(202,157,40,0.60), 0 0 0 5px rgba(202,157,40,0.18);
        }
        .ps-card.citizen:hover .ps-icon-wrap {
          box-shadow: 0 14px 36px rgba(76,171,193,0.60), 0 0 0 5px rgba(76,171,193,0.18);
        }

        .ps-card-title {
          font-family: 'Outfit', sans-serif;
          font-size: 17px; font-weight: 800;
          color: var(--cream); text-align: center;
          letter-spacing: 0.2px; position: relative; z-index: 2;
        }
        .ps-card-sep {
          width: 36px; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.35), transparent);
        }
        .ps-card-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          // font-size: 12.5px; color: rgba(245,231,194,0.52);
          font-size: 15px; color: rgba(255,255,255,0.52);
          text-align: center; line-height: 1.7;
          position: relative; z-index: 2; flex: 1;
        }

        /* Button */
        .ps-card-btn {
          margin-top: auto; padding: 12px 0;
          border: none; border-radius: 13px;
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 800;
          letter-spacing: 0.9px; text-transform: uppercase;
          cursor: pointer; width: 100%; color: #fff;
          position: relative; z-index: 2;
          transition: transform .20s, filter .20s, box-shadow .20s;
        }
        .ps-card.admin .ps-card-btn {
          background: linear-gradient(135deg,#CA9D28,#CE9A54);
          box-shadow: 0 4px 18px rgba(202,157,40,0.45);
        }
        .ps-card.citizen .ps-card-btn {
          background: linear-gradient(135deg,#4CABC1,#49ACC3);
          box-shadow: 0 4px 18px rgba(76,171,193,0.45);
        }
        .ps-card-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.12);
        }
        .ps-card-btn:active { transform: translateY(0); filter: brightness(0.94); }

        /* Footer */
        .ps-footer {
          font-size: 11px; color: rgba(245,231,194,0.24);
          font-family: 'Outfit', sans-serif;
          display: flex; align-items: center; gap: 8px;
        }
        .ps-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #66A962; box-shadow: 0 0 7px #66A962;
          animation: pulse 2.5s infinite;
        }
        @keyframes pulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.35;transform:scale(1.8)}
        }

        @media(max-width:560px){
          .ps-cards { flex-direction:column; align-items:center; }
          .ps-card  { width:88vw; max-width:300px; }
          .ps-title { font-size:21px; }
          .ps-title-jan { font-size:18px; }
        }
      `}),a.jsxs("div",{className:"ps-root",children:[a.jsx("div",{className:"ps-bg",style:{backgroundImage:`url(${Oo})`}}),a.jsx("div",{className:"ps-overlay"}),a.jsx("div",{className:"ps-stripe"}),a.jsx("div",{className:"ps-glow-tl"}),a.jsx("div",{className:"ps-glow-br"}),a.jsx("div",{className:"ps-dots"}),a.jsxs("div",{className:"ps-box",children:[a.jsxs("div",{className:"ps-header",children:[a.jsx("div",{className:"ps-logo-wrap",children:a.jsx("img",{className:"ps-logo-img",src:Bn,alt:"VVCMC"})}),a.jsxs("div",{children:[a.jsx("div",{className:"ps-title",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"ps-title-jan",children:"जन संवाद"}),a.jsx("div",{className:"ps-hr"}),a.jsx("div",{className:"ps-sub",children:"Please select a portal to log in."})]})]}),a.jsxs("div",{className:"ps-cards",children:[a.jsxs("div",{className:"ps-card admin",onClick:()=>n("/admin-login"),children:[a.jsx("div",{className:"ps-icon-wrap",children:"🏛️"}),a.jsx("div",{className:"ps-card-title",children:"Official Login"}),a.jsx("div",{className:"ps-card-sep"}),a.jsx("div",{className:"ps-card-sub",children:"For Municipal Corporation Officers, Employees, and Administrative Staff."}),a.jsx("button",{className:"ps-card-btn",children:"Official Login →"})]}),a.jsxs("div",{className:"ps-card citizen",onClick:()=>n("/citizen-login"),children:[a.jsx("div",{className:"ps-icon-wrap",children:"👤"}),a.jsx("div",{className:"ps-card-title",children:"Citizen Login"}),a.jsx("div",{className:"ps-card-sep"}),a.jsx("div",{className:"ps-card-sub",children:"For Citizens — To Book an Appointment with the Mayor."}),a.jsx("button",{className:"ps-card-btn",children:"Citizen Login →"})]})]}),a.jsxs("div",{className:"ps-footer",children:[a.jsx("div",{className:"ps-dot"}),"Secure Government Portal · All rights reserved"]})]})]})]})}function QS(){const n=Ro(),o=vt(),[s,l]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:""}),[d,p]=b.useState(!1),[f,h]=b.useState(!1),[x,g]=b.useState(!1);b.useEffect(()=>{const R=setTimeout(()=>g(!0),60);return()=>clearTimeout(R)},[]);const y=R=>l({...s,[R.target.name]:R.target.value}),v=async R=>{if(R.preventDefault(),!s.fullName||!s.userName||!s.mobileNumber||!s.email||!s.password){ye.error("All fields required ❌");return}try{p(!0);const z=(await Ue.post("/register",s)).data;if(!z.success){ye.error(z.message);return}n(Ol(z.user)),localStorage.setItem("authUser",JSON.stringify(z.user)),ye.success("Registration Success ✅"),o("/dashboard")}catch(k){ye.error(k?.response?.data?.message||"Server Error ❌")}finally{p(!1)}},T=s.fullName&&s.userName&&s.mobileNumber&&s.email&&s.password;return a.jsxs(a.Fragment,{children:[d&&a.jsx(Hb,{}),a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --teal:       #4CABC1;
          --teal-dark:  #49ACC3;
          --gold:       #CA9D28;
          --gold-light: #CE9A54;
          --cream:      #F5E7C2;
          --green:      #66A962;
          --deep:       #187480;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ROOT — always centered ── */
        .rp-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .rp-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: left center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .rp-root:hover .rp-bg { transform: scale(1.02); }

        .rp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(24,116,128,0.45) 0%,
            rgba(73,172,195,0.38) 30%,
            rgba(24,116,128,0.60) 60%,
            rgba(12,70,80,0.82) 100%
          );
        }

        .rp-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%, var(--gold-light) 22%,
            var(--teal) 45%, var(--teal-dark) 65%,
            var(--green) 85%, var(--cream) 100%
          );
          z-index: 20;
        }

        /* ── WRAPPER ── */
        .rp-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: stretch;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.52),
            0 0 0 1px rgba(202,157,40,0.20),
            inset 0 1px 0 rgba(245,231,194,0.07);
          /* JS-driven: transition from off-right to center */
          transition: transform 0.85s cubic-bezier(0.22, 0.9, 0.36, 1),
                      opacity   0.60s ease;
        }

        /* ── LEFT CARD ── */
        .rp-card {
          width: 410px;
          background: linear-gradient(
            160deg,
            rgba(12,68,80,0.80) 0%,
            rgba(24,116,128,0.62) 50%,
            rgba(12,68,80,0.85) 100%
          );
          backdrop-filter: blur(38px) saturate(2);
          -webkit-backdrop-filter: blur(38px) saturate(2);
          border: 1px solid rgba(76,171,193,0.20);
          border-right: 1px solid rgba(202,157,40,0.18);
          padding: 28px 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .rp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .rp-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
        }
        .rp-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .rp-logo-img {
          width: 54px; height: 54px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow: 0 0 0 3px rgba(202,157,40,0.15), 0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .rp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .rp-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px; font-weight: 700;
          color: var(--gold-light); line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .rp-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px; font-weight: 500;
          color: rgba(245,231,194,0.72); letter-spacing: 0.4px;
        }

        .rp-ftitle {
          font-size: 21px; font-weight: 700;
          color: var(--cream); margin-bottom: 16px;
          font-family: 'Outfit', sans-serif; letter-spacing: -0.3px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }

        .rp-fld { margin-bottom: 12px; }

        .rp-flbl {
          display: block; font-size: 11.5px; font-weight: 700;
          color: rgba(245,231,194,0.72); margin-bottom: 6px;
          font-family: 'Outfit', sans-serif; letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .rp-fwrap { position: relative; }

        .rp-finput {
          width: 100%; padding: 11px 16px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 12px; font-size: 13.5px; color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          outline: none; transition: all 0.2s; font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .rp-finput:focus {
          background: rgba(24,116,128,0.62); border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .rp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 12.5px; }
        .rp-finput.has-icon { padding-left: 42px; }

        .rp-ficon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%); font-size: 15px;
          pointer-events: none; opacity: 0.48;
        }
        .rp-pbtn {
          position: absolute; right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer; font-size: 15px;
          color: rgba(245,231,194,0.42); padding: 0;
          display: flex; align-items: center; transition: color .2s;
        }
        .rp-pbtn:hover { color: var(--cream); }

        .rp-sbtn {
          width: 100%; padding: 13px; margin-top: 8px;
          background: linear-gradient(135deg, var(--green) 0%, #4e9148 100%);
          color: #fff; font-size: 13px; font-weight: 800; letter-spacing: 1.5px;
          border: none; border-radius: 12px; cursor: pointer; transition: all 0.22s;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(102,169,98,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
          font-family: 'Outfit', sans-serif; text-transform: uppercase;
        }
        .rp-sbtn::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .rp-sbtn::after {
          content: ''; position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg); transition: left 0.55s ease;
        }
        .rp-sbtn:hover::after { left: 140%; }
        .rp-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7a39 0%, var(--green) 100%);
          transform: translateY(-2px); box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }
        .rp-sbtn:active:not(:disabled) { transform: translateY(0); }
        .rp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .rp-signin {
          margin-top: 12px; text-align: center; font-size: 13px;
          color: rgba(245,231,194,0.58); font-family: 'Outfit', sans-serif;
        }
        .rp-signin a {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px; padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light); transition: all .2s; cursor: pointer;
        }
        .rp-signin a:hover { color: var(--gold-light); border-color: var(--gold); }

        .rp-cfooter {
          margin-top: auto; padding-top: 14px;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center; justify-content: center; gap: 7px;
        }
        .rp-cfdot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green); box-shadow: 0 0 8px var(--green);
          animation: dotPulse 2.5s infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.7); }
        }
        .rp-cfooter span { font-size: 10.5px; color: rgba(245,231,194,0.28); letter-spacing: 0.3px; }

        /* ══════════════ MAYOR PANEL ══════════════ */
        .rp-mayor-panel {
          width: 300px;
          background: linear-gradient(155deg, var(--teal-dark) 0%, var(--deep) 38%, #0b5e6b 72%, #093e4a 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 26px;
          position: relative; overflow: hidden;
          /* JS-driven slide from top-right */
          transition: transform 0.80s cubic-bezier(0.22, 0.9, 0.36, 1) 0.10s,
                      opacity   0.65s ease 0.10s;
        }

        .rp-mayor-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--cream), var(--gold-light), var(--gold));
          background-size: 250%;
          animation: shimmerBar 3.5s linear infinite;
        }
        @keyframes shimmerBar {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        .rp-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px; border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .rp-mp-icon {
          position: absolute; font-size: 30px; opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); transition: opacity .35s;
        }
        .rp-mayor-panel:hover .rp-mp-icon { opacity: 0.24; }
        .rp-mp-icon.tl { top: 26px;  left: 20px; }
        .rp-mp-icon.tr { top: 26px;  right: 20px; }
        .rp-mp-icon.bl { bottom: 48px; left: 20px; }
        .rp-mp-icon.br { bottom: 48px; right: 20px; }

        .rp-mayor-photo-wrap { position: relative; margin-bottom: 20px; z-index: 2; }
        .rp-mayor-ring {
          width: 152px; height: 152px; border-radius: 50%; padding: 5px;
          background: conic-gradient(var(--gold) 0deg, var(--gold-light) 90deg, var(--cream) 180deg, var(--gold-light) 260deg, var(--gold) 360deg);
          box-shadow: 0 8px 36px rgba(0,0,0,0.38), 0 0 0 3px rgba(202,157,40,0.18);
        }
        .rp-mayor-photo {
          width: 100%; height: 100%; border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92); display: block;
        }
        .rp-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center; font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28); border: 2px solid rgba(255,255,255,0.95);
        }

        .rp-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700; color: #fff; text-align: center;
          margin-bottom: 6px; text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .rp-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px; color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 22px; z-index: 2; position: relative;
        }

        .rp-mayor-bar-wrap {
          width: 110px; height: 5px; background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden; z-index: 2; position: relative;
        }
        .rp-mayor-bar {
          width: 55%; height: 100%;
          background: linear-gradient(90deg, var(--green), #7dd87a);
          border-radius: 999px; box-shadow: 0 0 10px rgba(102,169,98,0.65);
          animation: barGlow 2.5s ease-in-out infinite;
        }
        @keyframes barGlow { 0%,100% { opacity:1; } 50% { opacity:0.60; } }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .28s ease both; }

        @media (max-width: 768px) {
          .rp-mayor-panel { display: none; }
          .rp-card { border-right: 1px solid rgba(76,171,193,0.20); border-radius: 24px; width: 92%; max-width: 410px; }
          .rp-wrapper { border-radius: 24px; }
        }
      `}),a.jsxs("div",{className:"rp-root",children:[a.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${Oo})`}}),a.jsx("div",{className:"rp-overlay"}),a.jsx("div",{className:"rp-stripe"}),a.jsxs("div",{className:"rp-wrapper",style:{opacity:x?1:0,transform:x?"translateX(0)":"translateX(160px)"},children:[a.jsxs("div",{className:"rp-card",children:[a.jsxs("div",{className:"rp-logo-row",children:[a.jsx("img",{src:Bn,alt:"VVCMC",className:"rp-logo-img"}),a.jsxs("div",{className:"rp-logo-texts",children:[a.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-logo-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"rp-ftitle",children:"Create Account"}),a.jsxs("form",{onSubmit:v,children:[a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Full Name"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"👤"}),a.jsx("input",{className:"rp-finput has-icon",type:"text",name:"fullName",placeholder:"Enter your full name",value:s.fullName,onChange:y,autoComplete:"name"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Username"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🪪"}),a.jsx("input",{className:"rp-finput has-icon",type:"text",name:"userName",placeholder:"Enter your username",value:s.userName,onChange:y,autoComplete:"username"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📱"}),a.jsx("input",{className:"rp-finput has-icon",type:"tel",name:"mobileNumber",placeholder:"Enter your mobile number",maxLength:10,value:s.mobileNumber,onChange:y})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Email"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"✉️"}),a.jsx("input",{className:"rp-finput has-icon",type:"email",name:"email",placeholder:"Enter your email",value:s.email,onChange:y,autoComplete:"email"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Password"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔒"}),a.jsx("input",{className:"rp-finput has-icon",type:f?"text":"password",name:"password",placeholder:"Enter your password",value:s.password,onChange:y,autoComplete:"new-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>h(!f),tabIndex:-1,children:f?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"rp-sbtn",disabled:!T||d,children:d?"⏳ Creating...":"CREATE ACCOUNT →"})]}),a.jsxs("p",{className:"rp-signin",children:["Already have an account?",a.jsx("a",{onClick:()=>o("/login"),children:"Sign in"})]})]}),a.jsxs("div",{className:"rp-cfooter",children:[a.jsx("div",{className:"rp-cfdot"}),a.jsx("span",{children:"Secure Government Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"rp-mayor-panel",style:{opacity:x?1:0,transform:x?"translate(0, 0)":"translate(80px, -60px)"},children:[a.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"rp-mp-icon tr",children:"🏥"}),a.jsx("span",{className:"rp-mp-icon bl",children:"🏗️"}),a.jsx("span",{className:"rp-mp-icon br",children:"🏢"}),a.jsxs("div",{className:"rp-mayor-photo-wrap",children:[a.jsx("div",{className:"rp-mayor-ring",children:a.jsx("img",{src:ko,alt:"Mayor",className:"rp-mayor-photo"})}),a.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-mayor-bar-wrap",children:a.jsx("div",{className:"rp-mayor-bar"})})]})]})]})]})}const ZS="http://localhost:5000",N={teal:"#087E91",tealDeep:"#0A93A8",tealDark:"#0A6B7B",cyan:"#27AEC0",gold:"#F6A021",goldDeep:"#E08A12",sage:"#4CAF50",cream:"#FDF3DC",card1From:"#0B8CA0",card1To:"#27AEC0",card2From:"#F08A00",card2To:"#F6B13A",card3From:"#3B9B40",card3To:"#66BB6A",card5From:"#087E91",card5To:"#27AEC0",white:"#ffffff",text:"#123F4B",ink:"#123F4B",ink2:"#2C5F6C",muted:"#5F7C88",border:"#E3EEF0",soft:"#F6FBFC",head:"#E8F4F6",red:"#D9534F"},xt="Poppins,Inter,'Segoe UI',sans-serif",cl=[N.teal,N.gold,N.sage,N.tealDeep,N.goldDeep,N.tealDark,N.gold,N.teal],ha={background:N.white,borderRadius:16,border:`1px solid ${N.border}`,boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 8px 24px rgba(18,63,75,.06)"},bp={padding:"12px 14px",textAlign:"left",color:N.ink,fontWeight:700,fontSize:11,whiteSpace:"nowrap",letterSpacing:.8,textTransform:"uppercase",background:N.head,fontFamily:xt},Hu=(n,o)=>({background:`linear-gradient(135deg,${n},${o})`,color:"#fff",border:"none",borderRadius:12,padding:"10px 18px",fontSize:13,fontWeight:600,cursor:"pointer",boxShadow:`0 6px 16px ${n}47`,transition:"transform .2s, box-shadow .2s, filter .2s"}),nr={background:N.white,border:`1px solid ${N.border}`,borderRadius:12,padding:"9px 16px",fontSize:13,fontWeight:600,color:N.ink,cursor:"pointer",boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 4px 12px rgba(18,63,75,.05)",display:"inline-flex",alignItems:"center",gap:6,transition:"all .2s"},Jb={display:"flex",alignItems:"center",gap:8,fontSize:11,fontWeight:700,letterSpacing:".25em",textTransform:"uppercase",color:N.gold},Qb=a.jsx("span",{style:{width:16,height:2,borderRadius:2,background:N.gold}}),oi=({c:n,s:o=8})=>a.jsx("span",{style:{width:o,height:o,borderRadius:"50%",background:n,display:"inline-block",flexShrink:0}});function KS(n,o=900){const[s,l]=b.useState(0);return b.useEffect(()=>{const d=Number(n)||0;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){l(d);return}let p,f;const h=x=>{f=f||x;const g=Math.min((x-f)/o,1);l(Math.round(d*g)),g<1&&(p=requestAnimationFrame(h))};return p=requestAnimationFrame(h),()=>cancelAnimationFrame(p)},[n,o]),s}function ii({icon:n,children:o,size:s=16,color:l=N.teal}){return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,minWidth:0},children:[n&&a.jsx("span",{style:{width:36,height:36,borderRadius:12,background:`${l}16`,border:`1px solid ${l}2e`,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0},children:n}),a.jsx("span",{style:{fontSize:s,fontWeight:600,color:N.ink,fontFamily:xt},children:o})]})}const e4=["Super Admin","Guardian Minister","Mayor","Admin"],t4=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}},I0={pending:{bg:"#FBF0DC",color:"#A8741F",border:"#F3DDAE",dot:"#F6A021",label:"Pending"},approved:{bg:"#E4F3E8",color:"#2E7D4F",border:"#BFE2CB",dot:"#4CAF50",label:"Approved"},rejected:{bg:"#FBE7E4",color:"#C0392B",border:"#F3C4BD",dot:"#D9534F",label:"Rejected"},"in progress":{bg:"#DDF3F7",color:"#0A6B7B",border:"#B5E3EB",dot:"#27AEC0",label:"In Progress"},resolved:{bg:"#E4F3E8",color:"#2E7D4F",border:"#BFE2CB",dot:"#4CAF50",label:"Resolved"}},Zb=n=>I0[(n||"pending").toLowerCase()]||I0.pending;function a4({color:n="#fff",data:o=[30,45,35,60,40,70,55],w:s=90,h:l=36}){const d=Math.max(...o),p=Math.min(...o),f=o.map((x,g)=>`${g/(o.length-1)*s},${l-(x-p)/(d-p+1)*(l-4)-2}`).join(" "),h=`sg${n.replace("#","")}`;return a.jsxs("svg",{width:s,height:l,viewBox:`0 0 ${s} ${l}`,style:{opacity:.9,display:"block"},children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:n,stopOpacity:".45"}),a.jsx("stop",{offset:"100%",stopColor:n,stopOpacity:"0"})]})}),a.jsx("polygon",{points:`0,${l} ${f} ${s},${l}`,fill:`url(#${h})`}),a.jsx("polyline",{points:f,fill:"none",stroke:n,strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function n4({label:n,value:o,sub:s,from:l,to:d,spark:p,dark:f=!1,delay:h=0}){const x=KS(typeof o=="number"?o:0),g=typeof o=="number"?x:o;return a.jsxs("div",{className:"dc hov",style:{animationDelay:`${h}s`,borderRadius:18,background:`linear-gradient(135deg,${l},${d})`,padding:"20px 22px",boxShadow:`0 10px 24px ${l}47`,position:"relative",overflow:"hidden",minHeight:128},children:[a.jsx("div",{style:{position:"absolute",top:-50,right:-40,width:150,height:150,borderRadius:"50%",background:"rgba(255,255,255,0.16)"}}),a.jsx("div",{style:{position:"absolute",bottom:-40,left:-30,width:90,height:90,borderRadius:"50%",background:"rgba(255,255,255,0.10)"}}),a.jsxs("div",{style:{position:"relative",zIndex:1},children:[a.jsx("div",{style:{fontSize:12,fontWeight:600,color:f?"#7a5a1c":"rgba(255,255,255,.95)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:4},children:n}),a.jsx("div",{style:{fontFamily:xt,fontSize:40,fontWeight:700,color:f?N.tealDark:"#fff",lineHeight:1.15,fontVariantNumeric:"tabular-nums"},children:g}),s&&a.jsx("div",{style:{fontSize:11,color:f?"#8a6830":"rgba(255,255,255,.85)",fontWeight:600,marginTop:4},children:s})]}),a.jsx("div",{style:{position:"absolute",right:16,bottom:14,zIndex:1},children:a.jsx(a4,{color:f?"#9a7828":"#fff",data:p,w:120,h:46})})]})}function i4({pct:n=0}){const s=2*Math.PI*50,l=n/100*s;return a.jsxs("svg",{width:128,height:128,viewBox:"0 0 128 128",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"donutGrad",x1:"0",y1:"0",x2:"1",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:N.cyan}),a.jsx("stop",{offset:"100%",stopColor:N.teal})]})}),a.jsx("circle",{cx:64,cy:64,r:50,fill:"none",stroke:N.border,strokeWidth:13}),a.jsx("circle",{cx:64,cy:64,r:50,fill:"none",stroke:"url(#donutGrad)",strokeWidth:13,strokeDasharray:`${l} ${s-l}`,strokeLinecap:"round",transform:"rotate(-90 64 64)",style:{transition:"stroke-dasharray 1s ease"}}),a.jsxs("text",{x:64,y:62,textAnchor:"middle",fontSize:24,fontWeight:700,fill:N.ink,fontFamily:xt,children:[n,"%"]}),a.jsx("text",{x:64,y:78,textAnchor:"middle",fontSize:9.5,fill:N.muted,fontWeight:600,letterSpacing:1.2,children:"RESOLVED"})]})}function r4({data:n=[],color:o=N.teal}){const s=Math.max(...n,1);return a.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:48},children:n.map((l,d)=>a.jsx("div",{style:{flex:1,borderRadius:"6px 6px 2px 2px",minHeight:5,background:d===n.length-1?`linear-gradient(180deg,${N.cyan},${N.teal})`:"#BDE6EC",height:`${l/s*100}%`,transition:"height .6s ease"}},d))})}function Kb({name:n="",size:o=28,color:s=N.teal}){const l=n.split(" ").filter(Boolean).map(d=>d[0]).join("").slice(0,2).toUpperCase()||"?";return a.jsx("div",{style:{width:o,height:o,borderRadius:"50%",background:`linear-gradient(135deg,${s},${s}cc)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:o*.34,fontWeight:700,flexShrink:0,border:"2px solid #fff",boxShadow:`0 2px 8px ${s}44`},children:l})}function Y0(n="08:00 AM"){if(!n)return 0;const[o,s]=(n||"08:00 AM").split(" "),[l,d]=(o||"08:00").split(":").map(Number);let p=l||8;return s==="PM"&&p!==12&&(p+=12),s==="AM"&&p===12&&(p=0),Math.max(0,p*60+(d||0)-480)}function o4(n){const o=new Date(n),s=o.getDay(),l=s===0?-6:1-s,d=new Date(o);return d.setDate(o.getDate()+l),Array.from({length:7},(p,f)=>{const h=new Date(d);return h.setDate(d.getDate()+f),h})}function V0(n,o){return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()&&n.getDate()===o.getDate()}const s4=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function l4({appt:n,color:o,onClose:s,anchorRect:l}){const d=Zb(n.status),p=b.useRef(null),[f,h]=b.useState({top:0,left:0,ready:!1}),x=252,g=b.useCallback(()=>{if(!l||!p.current)return;const y=p.current.offsetHeight||320,v=window.innerWidth,T=window.innerHeight,R=10;let k=l.right+8;k+x>v-R&&(k=l.left-x-8),k=Math.max(R,Math.min(k,v-x-R));let z=l.top;z+y>T-R&&(z=T-y-R),z=Math.max(R,z),h({top:z,left:k,ready:!0})},[l]);return b.useEffect(()=>{const y=requestAnimationFrame(g);return()=>cancelAnimationFrame(y)},[g]),b.useEffect(()=>(window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)),[g]),b.useEffect(()=>{const y=v=>{p.current&&!p.current.contains(v.target)&&s()};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[s]),b.useEffect(()=>{let y;const v=()=>{clearTimeout(y),y=setTimeout(s,120)};return window.addEventListener("scroll",v,!0),()=>{window.removeEventListener("scroll",v,!0),clearTimeout(y)}},[s]),b.useEffect(()=>{const y=v=>{v.key==="Escape"&&s()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[s]),a.jsxs("div",{ref:p,style:{position:"fixed",top:f.top,left:f.left,opacity:f.ready?1:0,transition:"opacity .1s",zIndex:99999,width:x,background:N.white,borderRadius:16,boxShadow:"0 12px 40px rgba(18,63,75,0.22), 0 2px 8px rgba(18,63,75,0.08)",border:`1px solid ${N.border}`,overflow:"hidden",animation:"popIn .15s cubic-bezier(.34,1.4,.64,1)"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg,${o},${o}dd)`,padding:"12px 13px 11px",display:"flex",alignItems:"center",gap:10},children:[a.jsx(Kb,{name:n.fullName,size:36,color:o}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:13.5,fontWeight:700,color:"#fff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.fullName||"—"}),a.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.85)",marginTop:2,fontWeight:500},children:n.slotTime||"—"})]}),a.jsx("button",{onClick:y=>{y.stopPropagation(),s()},"aria-label":"Close",style:{background:"rgba(255,255,255,0.22)",border:"none",borderRadius:"50%",width:24,height:24,cursor:"pointer",color:"#fff",fontSize:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1},children:"✕"})]}),a.jsxs("div",{style:{padding:"11px 14px 12px"},children:[a.jsx(co,{icon:"📱",val:n.mobileNumber||"—",bold:!0}),a.jsx(co,{icon:"📍",val:`Ward: ${n.ward||"—"}`}),n.purpose&&a.jsx(co,{icon:"🎯",val:n.purpose.slice(0,44)+(n.purpose.length>44?"…":"")}),a.jsx(co,{icon:"👥",val:`Visitors: ${n.numberOfVisitors||1}`}),n.preferredDate&&a.jsx(co,{icon:"📅",val:new Date(n.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}),a.jsx("div",{style:{marginTop:8,marginBottom:8},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,background:d.bg,color:d.color,border:`1px solid ${d.border}`,padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:700},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:d.dot,display:"inline-block"}}),d.label]})}),(n.tokenId||n._id)&&a.jsxs("div",{style:{fontSize:10,color:N.muted,fontWeight:500,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["Token: ",n.tokenId||n._id?.slice(-12)||"—"]}),a.jsx("div",{style:{borderTop:`1px solid ${N.border}`,marginTop:10,paddingTop:8,display:"flex",justifyContent:"flex-end"},children:a.jsx("span",{style:{fontSize:12,color:N.teal,fontWeight:700,cursor:"pointer"},children:"View Details ↗"})})]})]})}function co({icon:n,val:o,bold:s=!1}){return a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{fontSize:13,flexShrink:0,marginTop:1},children:n}),a.jsx("span",{style:{fontSize:12,fontWeight:s?600:500,color:s?N.text:N.muted,lineHeight:1.4},children:o})]})}function q0({appt:n,color:o}){const[s,l]=b.useState(null),d=b.useRef(null),p=!!s,f=b.useCallback(g=>{if(g.stopPropagation(),p){l(null);return}const y=d.current?.getBoundingClientRect();y&&l({...y})},[p]),h=b.useCallback(()=>l(null),[]),x=p?`0 6px 18px ${o}40`:"0 1px 2px rgba(18,63,75,.04), 0 4px 10px rgba(18,63,75,.06)";return a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:d,onClick:f,style:{background:p?`${o}14`:N.white,border:`1px solid ${p?o:o+"40"}`,borderLeft:`3px solid ${o}`,borderRadius:"4px 10px 10px 4px",padding:"6px 9px",cursor:"pointer",marginBottom:4,userSelect:"none",transition:"all .2s",boxShadow:x},onMouseEnter:g=>{g.currentTarget.style.background=`${o}12`,g.currentTarget.style.borderColor=o,g.currentTarget.style.transform="translateY(-1px)",g.currentTarget.style.boxShadow=`0 6px 18px ${o}40`},onMouseLeave:g=>{g.currentTarget.style.background=p?`${o}14`:N.white,g.currentTarget.style.borderColor=p?o:`${o}40`,g.currentTarget.style.borderLeftColor=o,g.currentTarget.style.transform="none",g.currentTarget.style.boxShadow=x},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[a.jsx(Kb,{name:n.fullName,size:22,color:o}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:N.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.fullName||"—"}),a.jsxs("div",{style:{fontSize:10,fontWeight:600,color:o,marginTop:1,display:"flex",alignItems:"center",gap:5},children:[n.slotTime||"—",a.jsx("span",{style:{width:6,height:6,borderRadius:"50%",flexShrink:0,background:Zb(n.status).dot,display:"inline-block"}})]})]})]})}),p&&a.jsx(l4,{appt:n,color:o,onClose:h,anchorRect:s})]})}function c4({appointments:n=[],mayorSlots:o=[],loading:s=!1}){const[l,d]=b.useState("week"),[p,f]=b.useState(new Date),[h,x]=b.useState(""),g=o4(p),y=new Date,v=n.filter(D=>{if(!h)return!0;const W=h.toLowerCase();return(D.fullName||"").toLowerCase().includes(W)||(D.purpose||"").toLowerCase().includes(W)||(D.ward||"").toLowerCase().includes(W)||(D.mobileNumber||"").includes(W)}),T=D=>`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}-${String(D.getDate()).padStart(2,"0")}`,R=D=>v.filter(W=>(W.preferredDate||"").slice(0,10)===T(D)),k=T(y),z=v.filter(D=>(D.preferredDate||"").slice(0,10)===k),M=v.filter(D=>(D.status||"").toLowerCase()==="approved").length,E=v.filter(D=>(D.status||"").toLowerCase()==="pending").length,S=g[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"}),A=Array.from({length:10},(D,W)=>8+W),P=D=>D<12?`${D} AM`:D===12?"12 PM":`${D-12} PM`,X={background:N.white,border:`1px solid ${N.border}`,borderRadius:10,width:34,height:34,cursor:"pointer",fontSize:15,color:N.tealDark,fontWeight:700,boxShadow:"0 1px 4px rgba(18,63,75,0.06)",transition:"all .2s"};return a.jsxs("div",{className:"dc",style:{animationDelay:".3s",...ha,overflow:"hidden",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{padding:"20px 22px 12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14,gap:10,flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:Jb,children:[Qb,"Today's appointments"]}),a.jsx("p",{style:{margin:"6px 0 0",fontFamily:xt,fontSize:22,color:N.ink,fontWeight:700},children:y.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})})]}),a.jsxs("div",{style:{background:`linear-gradient(135deg,${N.teal},${N.cyan})`,color:"#fff",fontSize:12.5,fontWeight:600,padding:"7px 16px",borderRadius:22,boxShadow:`0 6px 16px ${N.teal}47`,whiteSpace:"nowrap"},children:[v.length," All Appointments"]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("span",{style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:12,color:N.muted},children:"🔍"}),a.jsx("input",{value:h,onChange:D=>x(D.target.value),placeholder:"Search…","aria-label":"Search appointments",style:{border:"1px solid transparent",borderRadius:12,padding:"8px 12px 8px 30px",fontSize:12.5,color:N.text,outline:"none",background:"#EEF6F8",width:160,fontFamily:"inherit",transition:"all .2s"}})]}),a.jsx("div",{style:{display:"flex",background:"#EEF6F8",borderRadius:12,padding:3},children:["Day","Week"].map(D=>a.jsx("button",{onClick:()=>d(D.toLowerCase()),style:{padding:"6px 16px",borderRadius:9,border:"none",background:l===D.toLowerCase()?N.white:"transparent",color:l===D.toLowerCase()?N.teal:N.muted,fontSize:12.5,fontWeight:600,cursor:"pointer",transition:"all .2s",boxShadow:l===D.toLowerCase()?"0 1px 4px rgba(18,63,75,.12)":"none"},children:D},D))})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8},children:[l==="week"?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("button",{className:"gbtn","aria-label":"Previous week",onClick:()=>{const D=new Date(p);D.setDate(D.getDate()-7),f(D)},style:X,children:"‹"}),a.jsx("span",{style:{fontSize:13,fontWeight:600,color:N.ink,minWidth:140,textAlign:"center",border:`1px solid ${N.border}`,borderRadius:10,padding:"7px 12px",background:N.white},children:S}),a.jsx("button",{className:"gbtn","aria-label":"Next week",onClick:()=>{const D=new Date(p);D.setDate(D.getDate()+7),f(D)},style:X,children:"›"})]}):a.jsx("div",{}),a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[{l:"Today",v:z.length,c:N.teal},{l:"Approved",v:M,c:N.sage},{l:"Pending",v:E,c:N.goldDeep}].map(({l:D,v:W,c:V})=>a.jsxs("span",{style:{background:`${V}14`,border:`1px solid ${V}40`,borderRadius:20,padding:"4px 12px",fontSize:11.5,fontWeight:600,color:V,whiteSpace:"nowrap"},children:[W," ",D]},D))})]})]}),o.length>0&&a.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",padding:"8px 22px",background:`${N.cream}88`,borderTop:`1px solid ${N.border}`,borderBottom:`1px solid ${N.border}`},children:[a.jsx("span",{style:{fontSize:10,fontWeight:700,color:N.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"},children:"Mayor Available:"}),o.map((D,W)=>a.jsxs("span",{style:{fontSize:10.5,fontWeight:600,color:N.tealDark,background:`${N.teal}1a`,border:`1px solid ${N.teal}33`,borderRadius:20,padding:"2px 10px"},children:[D.start," – ",D.end]},W))]}),s?a.jsxs("div",{style:{textAlign:"center",padding:"48px 0",color:N.muted},children:[a.jsx("div",{style:{width:28,height:28,border:`3px solid ${N.border}`,borderTopColor:N.teal,borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}),"Loading appointments…"]}):l==="week"?a.jsx("div",{style:{padding:"0 18px 12px"},children:a.jsx("div",{style:{overflowX:"auto",overflowY:"auto",maxHeight:380,border:`1px solid ${N.border}`,borderRadius:14},children:a.jsxs("div",{style:{minWidth:560},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"56px repeat(7,1fr)",borderBottom:`1px solid ${N.border}`,background:N.soft,position:"sticky",top:0,zIndex:4},children:[a.jsx("div",{style:{borderRight:`1px solid ${N.border}`}}),g.map((D,W)=>{const V=V0(D,y),de=R(D).length;return a.jsxs("div",{style:{padding:"9px 3px",textAlign:"center",borderRight:W<6?`1px solid ${N.border}`:void 0,background:V?`${N.cyan}1a`:"transparent"},children:[a.jsx("div",{style:{fontSize:11,fontWeight:600,color:V?N.tealDark:N.muted,letterSpacing:.3},children:s4[W]}),a.jsx("div",{style:{width:32,height:32,borderRadius:"50%",margin:"3px auto 0",background:V?`linear-gradient(135deg,${N.teal},${N.cyan})`:"transparent",boxShadow:V?`0 4px 12px ${N.teal}55`:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,fontFamily:xt,color:V?"#fff":N.ink},children:D.getDate()}),de>0&&a.jsx("div",{style:{marginTop:3,fontSize:9,fontWeight:700,color:V?"#fff":N.tealDark,background:V?`${N.teal}cc`:`${N.teal}1c`,borderRadius:20,padding:"1px 6px",display:"inline-block"},children:de})]},W)})]}),A.map(D=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"56px repeat(7,1fr)",borderBottom:`1px solid ${N.border}`,minHeight:56},children:[a.jsx("div",{style:{borderRight:`1px solid ${N.border}`,padding:"6px 7px 0 0",textAlign:"right",fontSize:10.5,fontWeight:600,color:N.muted,background:N.white,position:"sticky",left:0,zIndex:2},children:P(D)}),g.map((W,V)=>{const de=V0(W,y),he=R(W).filter(J=>{const pe=Y0(J.slotTime||"");return pe>=(D-8)*60&&pe<(D-8+1)*60});return a.jsx("div",{style:{borderRight:V<6?`1px solid ${N.border}`:void 0,padding:"4px 4px",background:de?`${N.cyan}0d`:"transparent"},children:he.map((J,pe)=>{const $=v.indexOf(J);return a.jsx(q0,{appt:J,color:cl[$%cl.length]},pe)})},V)})]},D))]})})}):a.jsx("div",{style:{overflowY:"auto",maxHeight:380},children:z.length===0?a.jsxs("div",{style:{textAlign:"center",padding:"44px 0",color:N.muted},children:[a.jsx("div",{style:{width:56,height:56,borderRadius:16,background:`${N.teal}14`,margin:"0 auto 10px",display:"grid",placeItems:"center",fontSize:26},children:"📅"}),a.jsx("div",{style:{fontWeight:600,fontSize:14,color:N.text,marginBottom:3},children:"No appointments today"}),a.jsx("div",{style:{fontSize:12.5},children:"Switch to Week view to browse other days."})]}):a.jsx("div",{style:{padding:"8px 22px"},children:A.map(D=>{const W=D<12?`${D}:00 AM`:D===12?"12:00 PM":`${D-12}:00 PM`,V=z.filter(de=>{const he=Y0(de.slotTime||"");return he>=(D-8)*60&&he<(D-8+1)*60});return a.jsxs("div",{style:{display:"flex",gap:12,marginBottom:V.length?8:2},children:[a.jsx("div",{style:{width:60,fontSize:10.5,fontWeight:V.length?700:500,color:V.length?N.teal:N.muted,textAlign:"right",paddingTop:5,flexShrink:0,fontFamily:"monospace"},children:W}),a.jsx("div",{style:{flex:1,borderTop:V.length?"none":`1px solid ${N.border}`,paddingTop:V.length?0:5},children:V.length>0&&a.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(V.length,3)},1fr)`,gap:6},children:V.map((de,he)=>{const J=v.indexOf(de);return a.jsx(q0,{appt:de,color:cl[J%cl.length]},he)})})})]},D)})})}),a.jsxs("div",{style:{borderTop:`1px solid ${N.border}`,padding:"10px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",background:N.white,flexWrap:"wrap",gap:4,marginTop:"auto"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:N.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 6px ${N.sage}`}}),a.jsx("span",{style:{fontSize:11,color:N.muted,fontWeight:600},children:"Live · 8:00 AM – 6:00 PM"})]}),a.jsxs("span",{style:{fontSize:11,color:N.muted,fontWeight:500},children:[v.length," total appointments"]})]})]})}function Pu({value:n,max:o,color:s,height:l=6}){const d=o>0?Math.round(n/o*100):0;return a.jsx("div",{style:{height:l,borderRadius:99,background:N.border,overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",width:`${d}%`,background:`linear-gradient(90deg,${s},${s}cc)`,borderRadius:99,transition:"width 1s cubic-bezier(.2,.7,.2,1)"}})})}function xo({icon:n="◎",title:o,hint:s,skeleton:l=!1}){return a.jsxs("div",{style:{textAlign:"center",padding:"30px 12px",color:N.muted},children:[a.jsx("div",{style:{width:52,height:52,borderRadius:14,background:`${N.teal}14`,margin:"0 auto 10px",display:"grid",placeItems:"center",fontSize:22},children:n}),a.jsx("div",{style:{fontWeight:600,color:N.ink,fontSize:14},children:o}),s&&a.jsx("div",{style:{fontSize:12.5,marginTop:2},children:s}),l&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sk",style:{width:"60%"}}),a.jsx("div",{className:"sk",style:{width:"40%"}})]})]})}const d4={Approved:{bg:"#E4F3E8",color:"#2E7D4F"},Rejected:{bg:"#FBE7E4",color:"#C0392B"},"On-Hold":{bg:"#FBF0DC",color:"#A8741F"},Postponed:{bg:"#DDF3F7",color:"#0A6B7B"},"Not Conducted":{bg:"#EEF2F3",color:"#5F7C88"}},u4=[{k:"all",l:"All"},{k:"progress",l:"In Progress"},{k:"done",l:"Completed"},{k:"notstart",l:"Not Started"}];function p4(n){const o=n.subjects||[],s=o.length,l=o.filter(x=>x.actionTaken&&String(x.actionTaken).trim()!=="").length,d=o.filter(x=>x.decisionInMeeting&&!(x.actionTaken&&String(x.actionTaken).trim()!=="")).length,p=s-l-d,f=s>0?Math.round(l/s*100):0;return{total:s,action:l,decided:d,pending:p,pct:f,status:s===0?"empty":f===100?"done":l===0&&d===0?"notstart":"progress"}}const f4={done:{l:"Completed",bg:"#E4F3E8",color:"#2E7D4F"},progress:{l:"In Progress",bg:"#DDF3F7",color:"#0A6B7B"},notstart:{l:"Not Started",bg:"#FBF0DC",color:"#A8741F"},empty:{l:"No Subjects",bg:"#EEF2F3",color:"#5F7C88"}};function g4({action:n,decided:o,total:s,height:l=10}){const d=p=>s>0?`${p/s*100}%`:"0%";return a.jsxs("div",{style:{display:"flex",height:l,borderRadius:99,background:N.border,overflow:"hidden"},children:[a.jsx("div",{title:`Action taken: ${n}`,style:{width:d(n),background:`linear-gradient(90deg,${N.teal},${N.cyan})`,transition:"width 1s cubic-bezier(.2,.7,.2,1)"}}),a.jsx("div",{title:`Decided, action pending: ${o}`,style:{width:d(o),background:`${N.gold}cc`,transition:"width 1s cubic-bezier(.2,.7,.2,1)"}})]})}function m4({meetings:n=[],scopeLabel:o,onOpen:s}){const[l,d]=b.useState("all"),[p,f]=b.useState(""),[h,x]=b.useState(null),[g,y]=b.useState(!1),v=n.map(E=>({m:E,p:p4(E)})),T={all:v.length,progress:v.filter(E=>E.p.status==="progress").length,done:v.filter(E=>E.p.status==="done").length,notstart:v.filter(E=>E.p.status==="notstart").length},R=p.trim().toLowerCase(),k=v.filter(E=>l==="all"||E.p.status===l).filter(E=>!R||(E.m.meetingNumber||"").toLowerCase().includes(R)||(E.m.meetingType||"").toLowerCase().includes(R)||(E.m.subjects||[]).some(S=>(S.subjectName||"").toLowerCase().includes(R)||(S.subjectId||"").toLowerCase().includes(R))),z=g?k:k.slice(0,2),M=E=>E?new Date(E).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—";return a.jsxs("div",{className:"pnl",style:{...ha,padding:"22px",marginBottom:18},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10,flexWrap:"wrap",marginBottom:14},children:[a.jsxs("div",{children:[a.jsx(ii,{icon:"📈",children:"Meeting-wise Subject Progress"}),a.jsx("p",{style:{margin:"6px 0 0 48px",fontSize:12.5,color:N.muted},children:o||"Progress = subjects with action taken"})]}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx("span",{style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:12,color:N.muted},children:"🔍"}),a.jsx("input",{value:p,onChange:E=>f(E.target.value),placeholder:"Meeting / subject…","aria-label":"Search meetings",style:{border:"1px solid transparent",borderRadius:12,padding:"8px 12px 8px 30px",fontSize:12.5,color:N.text,outline:"none",background:"#EEF6F8",width:200,fontFamily:"inherit"}})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap",marginBottom:14},children:[a.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:u4.map(({k:E,l:S})=>a.jsxs("button",{onClick:()=>{d(E),y(!1)},style:{border:`1px solid ${l===E?"transparent":N.border}`,background:l===E?`linear-gradient(135deg,${N.teal},${N.cyan})`:N.white,color:l===E?"#fff":N.ink2,borderRadius:20,padding:"6px 14px",fontSize:12.5,fontWeight:600,cursor:"pointer",transition:"all .2s",boxShadow:l===E?`0 4px 12px ${N.teal}47`:"none"},children:[S," ",a.jsxs("span",{style:{opacity:.8},children:["(",T[E],")"]})]},E))}),a.jsxs("div",{style:{display:"flex",gap:12,fontSize:11.5,color:N.muted,fontWeight:600,flexWrap:"wrap"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(oi,{c:N.teal}),"Action taken"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(oi,{c:N.gold}),"Decided, action pending"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(oi,{c:N.border}),"Decision pending"]})]})]}),k.length===0?a.jsx(xo,{icon:"🏛",title:v.length?"No meetings match this filter":"No meetings to show yet",hint:v.length?"Try another filter or search.":"Meetings and their subjects will appear here."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:z.map(({m:E,p:S})=>{const A=f4[S.status],P=h===E._id;return a.jsxs("div",{style:{border:`1px solid ${P?N.teal+"66":N.border}`,borderRadius:14,background:P?N.soft:N.white,transition:"all .2s"},children:[a.jsxs("div",{onClick:()=>x(P?null:E._id),role:"button",tabIndex:0,onKeyDown:X=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),x(P?null:E._id))},style:{padding:"14px 16px",cursor:"pointer",display:"grid",gridTemplateColumns:"minmax(0,1.3fr) minmax(0,2fr) auto",gap:16,alignItems:"center"},className:"mp-row",children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[a.jsx("span",{style:{fontFamily:xt,fontSize:14.5,fontWeight:700,color:N.ink},children:E.meetingNumber||"—"}),a.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"2px 9px",borderRadius:20,background:E.meetingType==="Standing Committee"?`${N.gold}1f`:`${N.teal}14`,color:E.meetingType==="Standing Committee"?"#A8741F":N.tealDark},children:E.meetingType||"—"})]}),a.jsxs("div",{style:{fontSize:12,color:N.muted,marginTop:3},children:["📅 ",M(E.meetingDate),E.meetingTime?` · ${E.meetingTime} ${E.meetingAmpm||""}`:""," · ",S.total," subject",S.total===1?"":"s"]})]}),a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11.5,color:N.muted,fontWeight:600,marginBottom:6,gap:8},children:[a.jsxs("span",{children:[S.action,"/",S.total," action taken"]}),a.jsxs("span",{style:{color:N.teal,fontWeight:700,fontSize:13},children:[S.pct,"%"]})]}),a.jsx(g4,{action:S.action,decided:S.decided,total:S.total})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"flex-end"},children:[a.jsx("span",{style:{fontSize:11,fontWeight:600,padding:"3px 10px",borderRadius:20,background:A.bg,color:A.color,whiteSpace:"nowrap"},children:A.l}),a.jsx("span",{"aria-hidden":"true",style:{color:N.muted,fontSize:12,transform:P?"rotate(180deg)":"none",transition:"transform .2s"},children:"▾"})]})]}),P&&a.jsxs("div",{style:{padding:"0 16px 14px"},children:[S.total===0?a.jsx("div",{style:{fontSize:12.5,color:N.muted,padding:"8px 2px"},children:"No subjects added to this meeting yet."}):a.jsx("div",{style:{overflowX:"auto",border:`1px solid ${N.border}`,borderRadius:12,background:N.white},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12.5},children:[a.jsx("thead",{children:a.jsx("tr",{children:["Subject ID","Subject","Type","Decision","Tagged To","Action Taken"].map(X=>a.jsx("th",{style:{...bp,padding:"10px 12px",fontSize:10.5},children:X},X))})}),a.jsx("tbody",{children:(E.subjects||[]).map((X,D)=>{const W=d4[X.decisionInMeeting],V=X.actionTaken&&String(X.actionTaken).trim()!=="";return a.jsxs("tr",{style:{borderTop:`1px solid ${N.border}`},children:[a.jsx("td",{style:{padding:"10px 12px",fontFamily:"monospace",fontSize:11.5,color:N.teal,fontWeight:700,whiteSpace:"nowrap"},children:X.subjectId||"—"}),a.jsx("td",{style:{padding:"10px 12px",color:N.ink,fontWeight:500,minWidth:180},children:X.subjectName||"—"}),a.jsx("td",{style:{padding:"10px 12px",color:N.muted,whiteSpace:"nowrap"},children:X.subjectType||"—"}),a.jsx("td",{style:{padding:"10px 12px"},children:W?a.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,background:W.bg,color:W.color,whiteSpace:"nowrap"},children:X.decisionInMeeting}):a.jsx("span",{style:{fontSize:11.5,color:N.muted},children:"Pending"})}),a.jsx("td",{style:{padding:"10px 12px",color:N.muted,maxWidth:220},children:(X.tagTo||[]).length?(X.tagTo||[]).join(", "):"—"}),a.jsx("td",{style:{padding:"10px 12px",minWidth:140},children:V?a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,fontSize:12,fontWeight:600,color:"#2E7D4F"},children:["✓ ",X.actionTaken]}):a.jsx("span",{style:{fontSize:11.5,color:N.muted},children:"Not yet"})})]},X._id||D)})})]})}),a.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:a.jsx("button",{className:"gbtn",onClick:()=>s(E),style:{...nr,padding:"6px 14px",fontSize:12.5},children:"Open meeting ↗"})})]})]},E._id)})}),k.length>2&&a.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:14},children:a.jsx("button",{className:"gbtn",onClick:()=>y(E=>!E),style:nr,children:g?"Show less":`Show all ${k.length} meetings`})})]})}function h4(){const n=vt(),{user:o}=Gl(G=>G.auth),[s,l]=b.useState({total:0,pending:0,resolved:0,inProgress:0}),[d,p]=b.useState([]),[f,h]=b.useState({}),[x,g]=b.useState([4,7,5,9,12,8,15]),[y,v]=b.useState(!0),[T,R]=b.useState("all"),[k,z]=b.useState([]),[M,E]=b.useState(!0),[S,A]=b.useState([]),[P,X]=b.useState(0),[D,W]=b.useState({totalMeetings:0,totalSubjects:0,approved:0,rejected:0,onHold:0,postponed:0,notConducted:0,actionTakenSubjects:0,subjectsByType:{General:0,Administrative:0,Contract:0},actionProgress:{},departmentStats:{}}),[V,de]=b.useState(!0),[he,J]=b.useState([]),[pe,$]=b.useState(null),me=t4(),we=me?.role||"",F=me?.departmentName||"",ie=e4.includes(we),fe=["corporator","ward councillor"].includes(String(we||"").toLowerCase()),K=ie||fe,B=b.useCallback(async()=>{v(!0);try{let O=(await Ue.get("/inwardAll")).data?.data||[];if(!ie&&F&&(O=O.filter(ce=>ce.mainDepartment&&ce.mainDepartment===F||ce.departmentName&&ce.departmentName===F||Array.isArray(ce.departments)&&ce.departments.includes(F))),l({total:O.length,pending:O.filter(ce=>ce.status==="Pending").length,resolved:O.filter(ce=>ce.status==="Resolved").length,inProgress:O.filter(ce=>ce.status==="In Progress").length}),ie){const ce={};O.forEach(xe=>{xe.taluka&&(ce[xe.taluka]=(ce[xe.taluka]||0)+1)}),h(ce)}const L=Date.now(),ne=Array(7).fill(0);O.forEach(ce=>{const xe=Math.floor((L-new Date(ce.createdAt))/864e5);xe>=0&&xe<7&&ne[6-xe]++}),g(ne.map(ce=>ce||Math.floor(2+Math.random()*6))),p(O.slice(0,8))}catch(G){console.error(G)}finally{v(!1)}},[ie,F]),j=b.useCallback(async()=>{if(!ie){E(!1);return}E(!0);try{const G=await Ot.get("/citizen/admin/all-appointments");G.data.success&&z(G.data.appointments||[])}catch(G){console.error(G),z([])}finally{E(!1)}},[ie]),C=b.useCallback(async()=>{if(ie)try{const G=await Qe.get(`${ZS}/api/availability/get`);if(G.data.success){const O=new Date().toISOString().slice(0,10),L=G.data.data.find(ne=>ne.date===O);A(L?.timeSlots||[])}}catch(G){console.error(G)}},[ie]),q=b.useCallback(async()=>{de(!0);try{let G=[];try{const ze=await Ue.get("/meetingProgress");G=ze.data?.data||[],$(ze.data?.scope||null)}catch(ze){console.warn("meetingProgress unavailable, falling back to /getMeetings",ze?.response?.status);const Ln=(await Ue.get("/getMeetings")).data?.data||[],gi=fe?[...me?.isGeneralBodyMember!==!1?["General Body"]:[],...me?.isStandingCommitteeMember?["Standing Committee"]:[]]:null;G=ie?Ln:fe?Ln.filter(Na=>gi.includes(Na.meetingType)):F?Ln.map(Na=>({...Na,subjects:(Na.subjects||[]).filter(Un=>Array.isArray(Un.tagTo)&&Un.tagTo.includes(F))})).filter(Na=>Na.subjects.length>0):[],$(null)}J(G);const O=[];G.forEach(ze=>{(ze.subjects||[]).forEach(nt=>{O.push({...nt,meetingNumber:ze.meetingNumber})})});const L=O.filter(ze=>ze.decisionInMeeting==="Approved").length,ne=O.filter(ze=>ze.decisionInMeeting==="Rejected").length,ce=O.filter(ze=>ze.decisionInMeeting==="On-Hold").length,xe=O.filter(ze=>ze.decisionInMeeting==="Postponed").length,Ie=O.filter(ze=>ze.decisionInMeeting==="Not Conducted").length,bt=O.filter(ze=>ze.actionTaken&&ze.actionTaken!=="").length,Ze={General:O.filter(ze=>ze.subjectType==="General").length,Administrative:O.filter(ze=>ze.subjectType==="Administrative and Financial Approval").length,Contract:O.filter(ze=>ze.subjectType==="Contract Approval").length},Rt={};O.forEach(ze=>{ze.actionTaken&&(Rt[ze.actionTaken]=(Rt[ze.actionTaken]||0)+1)});const St={};O.forEach(ze=>{(ze.tagTo||[]).forEach(nt=>{!K&&nt!==F||(St[nt]||(St[nt]={total:0,approved:0,actionTaken:0}),St[nt].total++,ze.decisionInMeeting==="Approved"&&St[nt].approved++,ze.actionTaken&&St[nt].actionTaken++)})}),W({totalMeetings:G.length,totalSubjects:O.length,approved:L,rejected:ne,onHold:ce,postponed:xe,notConducted:Ie,actionTakenSubjects:bt,subjectsByType:Ze,actionProgress:Rt,departmentStats:St})}catch(G){console.error(G)}finally{de(!1)}},[ie,fe,K,F]);b.useEffect(()=>{B(),j(),C(),q();const G=setInterval(()=>X(Math.floor(12+Math.random()*8)),4e3);return X(Math.floor(12+Math.random()*8)),()=>clearInterval(G)},[B,j,C,q]);const oe=s.total>0?Math.round(s.resolved/s.total*100):0,I={Pending:"#A8741F",Resolved:"#2E7D4F","In Progress":N.tealDark,Rejected:"#C0392B"},ge={Pending:"#FBF0DC",Resolved:"#E4F3E8","In Progress":"#DDF3F7",Rejected:"#FBE7E4"},be=T==="all"?d:d.filter(G=>G.status===T),ke=[{l:"General",v:D.subjectsByType.General,c:N.teal,icon:"📄"},{l:"Administrative & Financial",v:D.subjectsByType.Administrative,c:N.goldDeep,icon:"💰"},{l:"Contract Approval",v:D.subjectsByType.Contract,c:N.sage,icon:"📝"}],Ce=()=>ke.map(({l:G,v:O,c:L,icon:ne},ce)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:ce<ke.length-1?`1px solid ${N.border}`:"none"},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:12,background:`${L}14`,border:`1px solid ${L}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,flexShrink:0},children:ne}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:12.5,fontWeight:500,color:N.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginBottom:1},children:G}),a.jsx("div",{style:{fontFamily:xt,fontSize:24,fontWeight:700,color:L,lineHeight:1.1},children:O})]}),a.jsxs("div",{style:{fontSize:11,fontWeight:600,color:L,background:`${L}16`,padding:"3px 10px",borderRadius:20,flexShrink:0},children:[D.totalSubjects>0?Math.round(O/D.totalSubjects*100):0,"%"]})]},G)),Ke=new Date().getHours()<12?"morning":new Date().getHours()<17?"afternoon":"evening",et=pe?.meetingTypes||[...me?.isGeneralBodyMember!==!1?["General Body"]:[],...me?.isStandingCommitteeMember?["Standing Committee"]:[]],Gt=pe?.wardNo||me?.wardNo,Lt=fe?`${pe?.designation||me?.designation||"corporator"}${Gt?` · Ward ${Gt}`:""} · ${et.join(" + ")||"No committee"}`:!ie&&F?F:null,se=(G=11)=>Lt?a.jsx("span",{style:{marginLeft:8,background:`${N.teal}18`,color:N.tealDark,border:`1px solid ${N.teal}33`,borderRadius:20,padding:"2px 11px",fontSize:G,fontWeight:600},children:Lt}):null,je=ie?"All meetings · progress = subjects with action taken":fe?et.length?`${et.join(" + ")} meetings · all departments`:"General Body / Standing Committee सदस्य नाही":F?`Subjects tagged to ${F}`:"Meetings assigned to you";return a.jsxs("div",{style:{minHeight:"100vh",position:"relative",overflow:"hidden",background:"linear-gradient(to bottom,#F1F7F8,#FFFFFF 60%,#EAF5F7)",fontFamily:"Inter,'Segoe UI',sans-serif",color:N.text},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');
        @keyframes fadeUp {from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes popIn  {from{opacity:0;transform:scale(.92) translateY(-4px)}to{opacity:1;transform:none}}
        @keyframes pulse  {0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes spin   {to{transform:rotate(360deg)}}
        @keyframes shimmer{to{background-position:-200% 0}}
        .dc{animation:fadeUp .5s ease both;}
        .hov{transition:transform .3s ease, box-shadow .3s ease;}
        .hov:hover{transform:translateY(-3px);}
        .pnl{transition:transform .3s ease, box-shadow .3s ease;}
        .pnl:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(18,63,75,.12)!important;}
        .pbtn:hover{transform:translateY(-1px);filter:brightness(1.07);}
        .pbtn:active,.gbtn:active{opacity:.9;}
        .gbtn:hover{border-color:${N.teal}!important;color:${N.tealDark}!important;}
        .tbl-row:hover,.tbl-row:hover td{background:${N.soft}!important;cursor:pointer;}
        .sk{height:10px;border-radius:6px;margin:8px auto;background:linear-gradient(90deg,${N.head},${N.border},${N.head});background-size:200% 100%;animation:shimmer 1.4s infinite;}
        button:focus-visible,input:focus-visible{outline:2px solid ${N.teal};outline-offset:2px;}
        input:focus{border-color:${N.teal}!important;box-shadow:0 0 0 4px rgba(8,126,145,.15);}
        ::-webkit-scrollbar{width:6px;height:6px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:#cfe2e7;border-radius:99px;}
        *{box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        .dash-grid-4    {display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
        .dash-grid-cal  {display:grid;grid-template-columns:2.3fr 1fr;gap:18px;}
        .dash-grid-track{display:grid;grid-template-columns:1fr 2.3fr;gap:18px;}
        .mtg-grid-3     {display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;}
        .mp-row:hover   {background:${N.soft};border-radius:14px;}
        @media(max-width:800px){ .mp-row{grid-template-columns:1fr!important;gap:10px!important;} .mp-row > div:last-child{justify-content:flex-start!important;} }
        @media(max-width:1100px){
          .dash-grid-cal  {grid-template-columns:1fr!important;}
          .dash-grid-track{grid-template-columns:1fr!important;}
          .mtg-grid-3     {grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:800px){
          .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:12px!important;}
          .mtg-grid-3 {grid-template-columns:1fr!important;}
        }
        @media(max-width:480px){
          .dash-grid-4{grid-template-columns:1fr!important;}
          .dash-pad{padding:12px 10px!important;}
        }
        @media (prefers-reduced-motion: reduce){
          *,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important;}
        }
      `}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",width:340,height:340,left:-120,top:-100,borderRadius:"50%",background:"rgba(39,174,192,.14)",filter:"blur(80px)",pointerEvents:"none"}}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",width:300,height:300,right:-100,bottom:80,borderRadius:"50%",background:"rgba(246,160,33,.10)",filter:"blur(80px)",pointerEvents:"none"}}),a.jsxs("div",{className:"dash-pad",style:{padding:"22px 26px",maxWidth:1440,margin:"0 auto",position:"relative",zIndex:1},children:[a.jsx("div",{style:{height:2,background:`linear-gradient(90deg,${N.teal},${N.gold})`,borderRadius:99,marginBottom:22}}),a.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:24,flexWrap:"wrap",gap:10},children:[a.jsxs("div",{className:"dc",children:[a.jsxs("div",{style:Jb,children:[Qb,"Analytic overview"]}),a.jsxs("h2",{style:{margin:"6px 0 0",fontFamily:xt,fontSize:30,fontWeight:700,color:N.ink,lineHeight:1.2},children:["Good ",Ke,", ",a.jsx("span",{style:{color:N.teal},children:o?.fullName?.split(" ")[0]||"Admin"})]}),a.jsx("div",{style:{width:64,height:4,borderRadius:4,background:N.gold,margin:"10px 0 6px"}}),a.jsxs("p",{style:{margin:0,fontSize:14,color:N.muted,lineHeight:1.6},children:["Here's where your meetings and applications stand today.",se(11)]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsx("button",{className:"gbtn",onClick:()=>{B(),j(),C(),q()},style:nr,children:"↻ Refresh"}),a.jsx("div",{style:{...nr,cursor:"default"},children:"This year ▾"})]})]}),y?a.jsx("div",{style:{textAlign:"center",padding:80,color:N.teal,fontWeight:600,fontSize:14},children:"Loading dashboard…"}):a.jsxs(a.Fragment,{children:[!V&&a.jsxs("div",{className:"dc",style:{animationDelay:"0s",marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18,flexWrap:"wrap",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,minWidth:0},children:[a.jsx("span",{style:{width:46,height:46,borderRadius:14,background:N.white,border:`1px solid ${N.border}`,boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 6px 16px rgba(18,63,75,.07)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0},children:"🏛"}),a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("div",{style:{fontFamily:xt,fontSize:20,fontWeight:700,color:N.ink},children:["Meeting ",a.jsx("span",{style:{color:N.teal},children:"Proceedings"})," Analytics"]}),a.jsxs("p",{style:{margin:"2px 0 0",fontSize:13,color:N.muted},children:["Sabha Kamkaj — Subject wise progress tracking",se(10.5)]})]})]}),a.jsx("button",{className:"pbtn",onClick:()=>n("/meetings"),style:Hu(N.teal,N.cyan),children:"View Meetings →"})]}),a.jsx("div",{className:"dash-grid-4",style:{marginBottom:18},children:[{label:"TOTAL MEETINGS",value:D.totalMeetings,from:N.card1From,to:N.card1To,spark:[2,3,1,4,2,5,3]},{label:"TOTAL SUBJECTS",value:D.totalSubjects,from:N.card2From,to:N.card2To,spark:[5,8,6,10,7,12,9]},{label:"APPROVED",value:D.approved,from:N.card3From,to:N.card3To,spark:[3,5,4,7,5,9,7]},{label:"ACTION TAKEN",value:D.actionTakenSubjects,from:N.card5From,to:N.card5To,spark:[1,2,2,4,3,5,4]}].map((G,O)=>a.jsx(n4,{label:G.label,value:G.value,from:G.from,to:G.to,spark:G.spark,delay:O*.06},O))}),a.jsx(m4,{meetings:he,scopeLabel:je,onOpen:G=>n(`/proceedingsmeeting/${G._id}`)}),K?a.jsxs("div",{className:"mtg-grid-3",style:{marginBottom:18},children:[a.jsxs("div",{className:"pnl",style:{...ha,padding:"22px"},children:[a.jsx("div",{style:{marginBottom:18},children:a.jsx(ii,{icon:"📊",children:"Decision Breakdown"})}),[{l:"Approved",v:D.approved,c:N.sage},{l:"Rejected",v:D.rejected,c:N.red},{l:"On-Hold",v:D.onHold,c:N.gold},{l:"Postponed",v:D.postponed,c:N.cyan},{l:"Not Conducted",v:D.notConducted,c:N.teal}].map(({l:G,v:O,c:L})=>{const ne=D.totalSubjects>0?Math.round(O/D.totalSubjects*100):0;return a.jsxs("div",{style:{marginBottom:14},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:13.5,fontWeight:500,color:N.ink},children:G}),a.jsxs("span",{style:{fontSize:13.5,fontWeight:700,color:L},children:[O," ",a.jsxs("span",{style:{color:N.muted,fontWeight:500,fontSize:12},children:["(",ne,"%)"]})]})]}),a.jsx(Pu,{value:O,max:D.totalSubjects,color:L})]},G)})]}),a.jsxs("div",{className:"pnl",style:{...ha,padding:"22px"},children:[a.jsx("div",{style:{marginBottom:18},children:a.jsx(ii,{icon:"⚡",color:N.gold,children:"Action Taken Progress"})}),Object.keys(D.actionProgress).length===0?a.jsx(xo,{icon:"⚡",title:"No action taken yet",hint:"Open a subject to record its next step."}):Object.entries(D.actionProgress).sort((G,O)=>O[1]-G[1]).map(([G,O],L)=>{const ne=[N.teal,N.gold,N.sage,N.cyan,N.goldDeep,N.tealDark],ce=ne[L%ne.length];return a.jsxs("div",{style:{marginBottom:14},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:13.5,fontWeight:500,color:N.ink,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:180},children:G}),a.jsx("span",{style:{fontSize:13.5,fontWeight:700,color:ce,flexShrink:0,marginLeft:6},children:O})]}),a.jsx(Pu,{value:O,max:D.totalSubjects,color:ce})]},G)})]}),a.jsxs("div",{className:"pnl",style:{...ha,padding:"22px"},children:[a.jsx("div",{style:{marginBottom:6},children:a.jsx(ii,{icon:"📋",children:"Subject Type Breakdown"})}),Ce()]})]}):a.jsx("div",{style:{marginBottom:18},children:a.jsxs("div",{className:"pnl",style:{...ha,padding:"22px",maxWidth:480},children:[a.jsx("div",{style:{marginBottom:6},children:a.jsx(ii,{icon:"📋",children:"Subject Type Breakdown"})}),Ce()]})}),K&&Object.keys(D.departmentStats).length>0&&a.jsxs("div",{className:"pnl",style:{...ha,padding:"22px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:8,flexWrap:"wrap"},children:[a.jsx(ii,{icon:"🏢",color:N.gold,children:"Department-wise Subject Progress"}),a.jsxs("span",{style:{fontSize:12.5,color:N.muted,fontWeight:500},children:[Object.keys(D.departmentStats).length," departments"]})]}),a.jsx("div",{style:{overflowX:"auto",borderRadius:12},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[a.jsx("thead",{children:a.jsx("tr",{children:["Department","Total Subjects","Approved","Action Taken","Completion"].map((G,O,L)=>a.jsx("th",{style:{...bp,borderTopLeftRadius:O===0?12:0,borderBottomLeftRadius:O===0?12:0,borderTopRightRadius:O===L.length-1?12:0,borderBottomRightRadius:O===L.length-1?12:0},children:G},G))})}),a.jsx("tbody",{children:Object.entries(D.departmentStats).sort((G,O)=>O[1].total-G[1].total).map(([G,O],L)=>{const ne=[N.teal,N.gold,N.sage,N.cyan,N.goldDeep,N.tealDark],ce=ne[L%ne.length],xe=O.total>0?Math.round(O.actionTaken/O.total*100):0;return a.jsxs("tr",{style:{borderBottom:`1px solid ${N.border}`,transition:"background .2s"},onMouseEnter:Ie=>Ie.currentTarget.style.background=N.soft,onMouseLeave:Ie=>Ie.currentTarget.style.background="transparent",children:[a.jsx("td",{style:{padding:"14px"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[a.jsx("div",{style:{width:9,height:9,borderRadius:"50%",background:ce,flexShrink:0}}),a.jsx("span",{style:{fontWeight:600,color:N.ink,fontSize:13.5},children:G})]})}),a.jsx("td",{style:{padding:"14px"},children:a.jsx("span",{style:{fontWeight:700,color:ce,fontSize:14},children:O.total})}),a.jsx("td",{style:{padding:"14px"},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,background:"#E4F3E8",color:"#2E7D4F",padding:"3px 11px",borderRadius:20,fontSize:12,fontWeight:600},children:["✓ ",O.approved]})}),a.jsx("td",{style:{padding:"14px"},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,background:"#DDF3F7",color:N.tealDark,padding:"3px 11px",borderRadius:20,fontSize:12,fontWeight:600},children:["⚡ ",O.actionTaken]})}),a.jsx("td",{style:{padding:"14px",minWidth:160},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{flex:1,height:8,borderRadius:99,background:N.border,overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",width:`${xe}%`,background:`linear-gradient(90deg,${N.teal},${N.cyan})`,borderRadius:99,transition:"width 1s ease"}})}),a.jsxs("span",{style:{fontSize:12.5,fontWeight:700,color:N.teal,minWidth:36,textAlign:"right"},children:[xe,"%"]})]})})]},G)})})]})})]}),!K&&F&&D.departmentStats[F]&&a.jsxs("div",{className:"pnl",style:{...ha,padding:"22px"},children:[a.jsx("div",{style:{marginBottom:16},children:a.jsx(ii,{icon:"🏢",color:N.gold,children:"Your Department Progress"})}),(()=>{const G=D.departmentStats[F],O=G.total>0?Math.round(G.actionTaken/G.total*100):0;return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{marginBottom:14,padding:"10px 14px",background:`${N.teal}10`,border:`1px solid ${N.teal}30`,borderRadius:12,fontSize:13.5,fontWeight:600,color:N.tealDark},children:F}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:16},children:[{l:"Total Subjects",v:G.total,c:N.teal,icon:"📋"},{l:"Approved",v:G.approved,c:N.sage,icon:"✅"},{l:"Action Taken",v:G.actionTaken,c:N.goldDeep,icon:"⚡"}].map(({l:L,v:ne,c:ce,icon:xe})=>a.jsxs("div",{style:{textAlign:"center",padding:"16px 10px",background:`${ce}10`,border:`1px solid ${ce}30`,borderRadius:14},children:[a.jsx("div",{style:{fontSize:22,marginBottom:5},children:xe}),a.jsx("div",{style:{fontFamily:xt,fontSize:24,fontWeight:700,color:ce},children:ne}),a.jsx("div",{style:{fontSize:10.5,fontWeight:600,color:N.muted,marginTop:3,textTransform:"uppercase",letterSpacing:.6},children:L})]},L))}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:13.5,fontWeight:500,color:N.ink},children:"Completion Rate"}),a.jsxs("span",{style:{fontSize:13.5,fontWeight:700,color:N.teal},children:[O,"%"]})]}),a.jsx(Pu,{value:G.actionTaken,max:G.total,color:N.teal,height:8})]})]})})()]}),!K&&F&&!D.departmentStats[F]&&D.totalSubjects===0&&a.jsx("div",{style:{...ha},children:a.jsx(xo,{icon:"🏛",title:"No meeting subjects assigned yet",hint:a.jsxs(a.Fragment,{children:["Subjects tagged to ",a.jsx("strong",{children:F})," will appear here."]})})})]}),ie&&a.jsxs("div",{className:"dash-grid-cal",style:{marginBottom:20},children:[a.jsx(c4,{appointments:k,mayorSlots:S,loading:M}),a.jsxs("div",{className:"dc",style:{animationDelay:".37s",...ha,padding:"20px",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[a.jsx("h3",{style:{margin:0,fontFamily:xt,fontSize:18,fontWeight:700,color:N.ink},children:"Status"}),a.jsx("div",{style:{...nr,cursor:"default",padding:"4px 12px",fontSize:11.5},children:"Today ▾"})]}),a.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2px 0 14px"},children:a.jsx(i4,{pct:oe})}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16},children:[{l:"BOOKED",v:s.total,c:N.teal},{l:"PROGRESS",v:s.inProgress,c:N.goldDeep},{l:"PENDING",v:s.pending,c:N.red}].map(({l:G,v:O,c:L})=>a.jsxs("div",{style:{textAlign:"center",padding:"11px 4px",background:`${L}10`,borderRadius:12,border:`1px solid ${L}2e`},children:[a.jsx("div",{style:{fontFamily:xt,fontSize:20,fontWeight:700,color:L},children:O}),a.jsx("div",{style:{fontSize:9,fontWeight:600,color:N.muted,letterSpacing:.8,textTransform:"uppercase",marginTop:2},children:G})]},G))}),a.jsxs("div",{style:{borderTop:`1px solid ${N.border}`,paddingTop:14,marginBottom:14},children:[a.jsx("div",{style:{fontFamily:xt,fontSize:14,fontWeight:600,color:N.ink,marginBottom:8},children:"📅 Appointments"}),[{l:"Total",v:k.length,c:N.teal},{l:"Approved",v:k.filter(G=>(G.status||"").toLowerCase()==="approved").length,c:N.sage},{l:"Pending",v:k.filter(G=>(G.status||"").toLowerCase()==="pending").length,c:N.goldDeep},{l:"In Progress",v:k.filter(G=>(G.status||"").toLowerCase()==="in progress").length,c:N.cyan}].map(({l:G,v:O,c:L})=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"4px 0"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8,fontSize:12.5,color:N.ink2,fontWeight:500},children:[a.jsx(oi,{c:L,s:8}),G]}),a.jsx("span",{style:{fontSize:13,fontWeight:700,color:L},children:O})]},G))]}),S.length>0&&a.jsxs("div",{style:{borderTop:`1px solid ${N.border}`,paddingTop:12,marginBottom:14},children:[a.jsx("div",{style:{fontFamily:xt,fontSize:14,fontWeight:600,color:N.ink,marginBottom:6},children:"🏛 Mayor Today"}),S.map((G,O)=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",fontSize:12.5,color:N.muted,fontWeight:500},children:[a.jsxs("span",{children:["Slot ",O+1]}),a.jsxs("span",{style:{color:N.tealDark,fontWeight:600},children:[G.start," – ",G.end]})]},O))]}),a.jsxs("div",{style:{borderTop:`1px solid ${N.border}`,paddingTop:14,marginTop:"auto"},children:[a.jsx("div",{style:{fontFamily:xt,fontSize:14,fontWeight:600,color:N.ink,marginBottom:10},children:"📈 Weekly Trend"}),a.jsx(r4,{data:x,color:N.teal}),a.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:5,gap:6},children:["M","T","W","T","F","S","S"].map((G,O)=>a.jsx("span",{style:{fontSize:10.5,color:N.muted,flex:1,textAlign:"center",fontWeight:500},children:G},O))})]})]})]}),ie&&a.jsxs("div",{className:"dash-grid-track",style:{marginBottom:20},children:[a.jsxs("div",{className:"dc pnl",style:{animationDelay:".44s",...ha,padding:"22px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[a.jsxs("h3",{style:{margin:0,fontFamily:xt,fontSize:18,fontWeight:700,color:N.ink,display:"flex",alignItems:"center",gap:8},children:[a.jsx(oi,{c:N.gold}),"Tracking"]}),a.jsx("div",{style:{...nr,cursor:"default",padding:"4px 12px",fontSize:11.5},children:"This year ▾"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 14px",background:N.head,borderRadius:12,marginBottom:6},children:[a.jsx("span",{style:{fontFamily:xt,fontSize:11,fontWeight:700,color:N.ink,textTransform:"uppercase",letterSpacing:.8},children:"Region"}),a.jsx("span",{style:{fontFamily:xt,fontSize:11,fontWeight:700,color:N.ink,textTransform:"uppercase",letterSpacing:.8},children:"Amount"})]}),Object.entries(f).sort((G,O)=>O[1]-G[1]).slice(0,6).map(([G,O],L)=>{const ne=[N.teal,N.gold,N.sage,N.cyan,N.goldDeep,N.tealDark],ce=ne[L%ne.length];return a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:`1px solid ${N.border}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx(oi,{c:ce}),a.jsx("span",{style:{fontSize:13.5,fontWeight:500,color:N.text},children:G})]}),a.jsx("span",{style:{fontSize:13.5,fontWeight:700,color:ce},children:O})]},G)}),!Object.keys(f).length&&a.jsx(xo,{title:"No regional data yet",hint:"Counts appear once inward applications are tracked.",skeleton:!0})]}),a.jsxs("div",{className:"dc pnl",style:{animationDelay:".51s",...ha,padding:"22px",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:8},children:[a.jsxs("div",{children:[a.jsxs("h3",{style:{margin:0,fontFamily:xt,fontSize:18,fontWeight:700,color:N.ink,display:"flex",alignItems:"center",gap:8},children:[a.jsx(oi,{c:N.gold}),"Recent Applications"]}),a.jsx("p",{style:{margin:"3px 0 0 16px",fontSize:12.5,color:N.muted},children:"Latest inward complaints"})]}),a.jsx("div",{style:{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"},children:["all","Pending","Resolved","In Progress"].map(G=>a.jsx("button",{onClick:()=>R(G),style:{border:`1px solid ${T===G?"transparent":N.border}`,background:T===G?`linear-gradient(135deg,${N.teal},${N.cyan})`:N.white,color:T===G?"#fff":N.ink2,borderRadius:20,padding:"6px 14px",fontSize:12.5,fontWeight:600,cursor:"pointer",boxShadow:T===G?`0 4px 12px ${N.teal}47`:"none",transition:"all .2s"},children:G==="all"?"All":G},G))})]}),a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12.5},children:[a.jsx("thead",{children:a.jsx("tr",{children:["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map((G,O,L)=>a.jsx("th",{style:{...bp,borderTopLeftRadius:O===0?12:0,borderBottomLeftRadius:O===0?12:0,borderTopRightRadius:O===L.length-1?12:0,borderBottomRightRadius:O===L.length-1?12:0},children:G},G))})}),a.jsx("tbody",{children:be.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,children:a.jsx(xo,{icon:"▣",title:"No applications yet",hint:"New inward complaints will show up here.",skeleton:!0})})}):be.map((G,O)=>a.jsxs("tr",{className:"tbl-row",onClick:()=>n("/allapplication"),style:{borderBottom:`1px solid ${N.border}`,transition:"background .2s"},children:[a.jsx("td",{style:{padding:"11px 14px",color:N.teal,fontWeight:700,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:11.5},children:G.inwardNo||"—"}),a.jsx("td",{style:{padding:"11px 14px",fontWeight:600,color:N.text},children:G.fullName||"—"}),a.jsx("td",{style:{padding:"11px 14px",color:N.muted,maxWidth:150,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:G.subject||"—"}),a.jsx("td",{style:{padding:"11px 14px",color:N.muted},children:G.taluka||"—"}),a.jsx("td",{style:{padding:"11px 14px",color:N.muted,whiteSpace:"nowrap"},children:G.mainDepartment||"—"}),a.jsx("td",{style:{padding:"11px 14px"},children:a.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,background:G.priority==="Emergency"?"#FBE7E4":G.priority==="Urgent"?"#FBF0DC":"#E4F3E8",color:G.priority==="Emergency"?"#C0392B":G.priority==="Urgent"?"#A8741F":"#2E7D4F"},children:G.priority||"Normal"})}),a.jsx("td",{style:{padding:"11px 14px"},children:a.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,background:ge[G.status]||`${N.border}`,color:I[G.status]||N.muted},children:G.status||"—"})}),a.jsx("td",{style:{padding:"11px 14px",color:N.muted,whiteSpace:"nowrap",fontSize:11.5},children:G.submissionDate||(G.createdAt?new Date(G.createdAt).toLocaleDateString("en-IN"):"—")})]},O))})]})}),a.jsxs("div",{style:{marginTop:"auto",paddingTop:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8},children:[a.jsxs("span",{style:{fontSize:12.5,color:N.muted},children:["Showing ",be.length," of ",s.total]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{className:"pbtn",onClick:()=>n("/allapplication"),style:Hu(N.teal,N.cyan),children:"All Applications →"}),a.jsx("button",{className:"pbtn",onClick:()=>n("/applicationcitizens"),style:{...Hu(N.gold,N.gold),color:"#3A2600",boxShadow:`0 6px 16px ${N.gold}4d`},children:"Citizen Appts →"})]})]})]})]}),a.jsxs("div",{style:{textAlign:"center",color:N.muted,fontSize:12,padding:"20px 0 6px"},children:["© ",new Date().getFullYear()," Vasai-Virar City Municipal Corporation · Janata Darbar System",a.jsx("span",{style:{margin:"0 8px",color:N.gold},children:"◆"}),"स्थापना : ३ जुलै २००९"]})]})]})]})}var e1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},G0=We.createContext&&We.createContext(e1),x4=["attr","size","title"];function b4(n,o){if(n==null)return{};var s=y4(n,o),l,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(d=0;d<p.length;d++)l=p[d],!(o.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(s[l]=n[l])}return s}function y4(n,o){if(n==null)return{};var s={};for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){if(o.indexOf(l)>=0)continue;s[l]=n[l]}return s}function Bl(){return Bl=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(n[l]=s[l])}return n},Bl.apply(this,arguments)}function X0(n,o){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);o&&(l=l.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),s.push.apply(s,l)}return s}function Ll(n){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?X0(Object(s),!0).forEach(function(l){v4(n,l,s[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):X0(Object(s)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(s,l))})}return n}function v4(n,o,s){return o=j4(o),o in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s,n}function j4(n){var o=w4(n,"string");return typeof o=="symbol"?o:o+""}function w4(n,o){if(typeof n!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var l=s.call(n,o);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function t1(n){return n&&n.map((o,s)=>We.createElement(o.tag,Ll({key:s},o.attr),t1(o.child)))}function ct(n){return o=>We.createElement(S4,Bl({attr:Ll({},n.attr)},o),t1(n.child))}function S4(n){var o=s=>{var{attr:l,size:d,title:p}=n,f=b4(n,x4),h=d||s.size||"1em",x;return s.className&&(x=s.className),n.className&&(x=(x?x+" ":"")+n.className),We.createElement("svg",Bl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,l,f,{className:x,style:Ll(Ll({color:n.color||s.color},s.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),p&&We.createElement("title",null,p),n.children)};return G0!==void 0?We.createElement(G0.Consumer,null,s=>o(s)):o(e1)}function k4(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(n)}function Ra(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(n)}function N4(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(n)}function C4(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(n)}function T4(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(n)}function Co(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(n)}function z4(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 14 4 9 9 4"},child:[]},{tag:"path",attr:{d:"M20 20v-7a4 4 0 0 0-4-4H4"},child:[]}]})(n)}function A4(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(n)}function yp(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(n)}function vp(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(n)}function bo(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(n)}function E4(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(n)}function J0(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(n)}function jp(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(n)}function Xp(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}function a1(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(n)}function Ho(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(n)}function To(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(n)}function wp(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(n)}function Q0(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"},child:[]},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"},child:[]}]})(n)}function Z0(n){return ct({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(n)}const n1=b.createContext();function D4({children:n}){const[o,s]=b.useState("open");return a.jsx(n1.Provider,{value:{mode:o,setMode:s},children:n})}function i1(){return b.useContext(n1)}const K0=[["Vasai-Virar City Municipal Corporation","वसई-विरार शहर महानगरपालिका","Vasai Virar City Municipal Corporation"],["Jan Samvad","जन संवाद","Jan Samvaad"],["VVCMC — Jan Samvad","वविशम — जन संवाद"],["Vasai-Virar City Municipal Corporation, Jan Samvad","वसई-विरार शहर महानगरपालिका, जन संवाद"],["Jan Samvad · Citizen Portal","जन संवाद · नागरिक पोर्टल","जन संवाद · Citizen Portal"],["Jan Samvad - Applications","जन संवाद - अर्ज","जन संवाद - Applications"],["Public Relations – Application Form","जनसंपर्क – अर्ज नमुना","जनसंपर्क – Application Form"],["ADMIN PANEL · VVCMC","प्रशासन पॅनेल · वविशम"],["Admin Panel","प्रशासन पॅनेल"],["Vasai-Virar City","वसई-विरार शहर"],["Vasai-Virar City Municipal Corporation · Janata Darbar System","वसई-विरार शहर महानगरपालिका · जनता दरबार प्रणाली"],["Vasai-Virar City Municipal Corporation. All rights reserved","वसई-विरार शहर महानगरपालिका. सर्व हक्क राखीव"],["Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad","वसई विरार शहर महानगरपालिका (वविशम) साठी डिझाइन व विकसित — जन संवाद"],["Secure Citizen Portal · All rights reserved","सुरक्षित नागरिक पोर्टल · सर्व हक्क राखीव"],["Secure Government Portal · All rights reserved","सुरक्षित शासकीय पोर्टल · सर्व हक्क राखीव"],["Secure Government Portal","सुरक्षित शासकीय पोर्टल"],["Hon. Mayor","मा. महापौर","मा. महापौर"],["Hon. Mayor Shri. Ajiv Patil","मा. महापौर श्री. अजीव पाटील"],["Hon. Mayor, Vasai Virar City Municipal Corporation","मा. महापौर, वसई विरार शहर महानगरपालिका"],["Hon. Shri. Ajiv Patil","मा. श्री.अजीव पाटील"],["Shri. Ajiv Patil","श्री. अजीव पाटील"],["Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेब","Repected Mayor Ajiv Patil Sir"],["Approved by Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेबांनी मंजूर केले"],["Rejected by Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेबांनी नाकारले"],["Established : 3 July 2009","स्थापना : ३ जुलै २००९"],["Mayor","महापौर"],["Deputy Mayor","उपमहापौर"],["Mayor Today","आज महापौर"],["Mayor's Office Latest Updates & Activities","महापौर कार्यालयाच्या ताज्या घडामोडी व उपक्रम"],["Latest news from the Mayor's office","महापौर कार्यालयाच्या ताज्या बातम्या"],["Latest News","ताज्या बातम्या"],["Currently Ongoing","सध्या सुरू"],["Home","मुख्यपृष्ठ"],["My Appointments","माझ्या भेटी"],["View My Appointments","माझ्या भेटी बघा","My Appointments बघा"],["Book","बुक करा"],["Book Appointment","भेट बुक करा","Appointment बुक करा"],["Login","लॉगिन"],["Logout","लॉगआउट"],["Register","नोंदणी करा","Register करा","नोंदणी करा"],["Dashboard","डॅशबोर्ड"],["Notifications","सूचना"],["Help","मदत"],["Settings","सेटिंग्ज"],["Back","मागे"],["Go Back","मागे जा","मागे जा"],["Back to Meetings","सभांकडे परत"],["Back to Top","वर जा"],["Collapse sidebar","साइडबार लहान करा"],["Hide sidebar","साइडबार लपवा"],["Open sidebar","साइडबार उघडा"],["All Category","सर्व वर्ग"],["Search here","येथे शोधा"],["Search","शोधा"],["Prev","मागील"],["Next","पुढील"],["Previous week","मागील आठवडा"],["Next week","पुढील आठवडा"],["Contact Us","संपर्क करा"],["Follow Us","आम्हाला फॉलो करा"],["Site Map","साइट नकाशा"],["Helpline","हेल्पलाइन"],["WhatsApp Chatbot","व्हॉट्सअ‍ॅप चॅटबॉट"],["Virat Nagar, Near MHADA Colony","विराट नगर, म्हाडा कॉलनीजवळ"],["Virar West. PIN: 401303","विरार पश्चिम. पिन: ४०१३०३"],["Book an appointment easily","भेट सहज बुक करा","Appointment सहज बुक करा"],["How does it work","कसे काम करते"],["Book a meeting with the Mayor in 4 steps.","४ टप्प्यांमध्ये महापौरांची भेट बुक करा."],["Get Started — Register","सुरुवात करा — नोंदणी"],["Register to book a Mayor appointment","महापौर भेट बुक करण्यासाठी नोंदणी करा","Mayor Appointment बुक करण्यासाठी register करा"],["Create an account using your mobile number","मोबाईल नंबर वापरून खाते तयार करा","Mobile number वापरून account तयार करा"],["Choose from the available dates and time slots of the Hon. Mayor","मा. महापौर यांच्या उपलब्ध तारखा आणि वेळांमधून निवडा","मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"],["Fill in details","तपशील भरा"],["Give reason for visit, number of visitors and photo","भेटीचे कारण, अभ्यागत संख्या आणि फोटो द्या","भेटीचे कारण, visitors संख्या आणि photo द्या"],["You will get a confirmation token and QR code — show it on the day of the visit","पुष्टी टोकन आणि QR कोड मिळेल — भेटीच्या दिवशी दाखवा","Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"],["Get Token","टोकन मिळवा"],["Choose Date","तारीख निवडा"],["A platform created to take citizens' problems and suggestions directly to Hon. Mayor Shri. Ajiv Patil","नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"],["Since taking charge as Mayor on 3 February 2026, Hon. Mayor Shri. Ajiv Patil has set up this Jan Samvad platform to communicate directly with citizens. This transparent, simple and fast online medium has been created so that citizens' problems, suggestions and complaints reach the Mayor directly.","३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."],["For the citizens, by the citizens — committed to transparent, fast and digital public services","नागरिकांसाठी, नागरिकांकडून — पारदर्शक, जलद आणि डिजिटल लोकसेवेसाठी कटिबद्ध"],["Ongoing Projects","चालू प्रकल्प"],["Important ongoing projects of Vasai-Virar Municipal Corporation","वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"],["Progress","प्रगती"],["In progress","सुरू आहे","सुरू आहे"],["Citizen Participation","नागरिक सहभाग"],["By increasing active participation of citizens, their opinions and suggestions are becoming important in city development.","नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."],["Safe & Clean City","सुरक्षित व स्वच्छ शहर"],["The city is being made more liveable through safety, cleanliness and eco-friendly initiatives.","सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."],["Vasai Smart City Project","वसई स्मार्ट सिटी प्रकल्प"],["Under the Vasai Smart City project, emphasis is on digital, safe and well-equipped development of the city.","वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."],["Green Vasai-Virar — Tree Plantation Drive","हरित वसई-विरार — वृक्षारोपण मोहीम"],["Resolution to plant 5 lakh trees in the corporation area. The project aims to develop gardens, plant trees on both sides of roads and maintain environmental balance.","महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट."],["24×7 Water Supply Scheme — Vasai Division","24×7 पाणीपुरवठा योजना — वसई विभाग"],["Laying new water lines, renewing old pipelines and building new water tanks to provide 24-hour clean water to citizens of Vasai division.","वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे."],["Naringi Flyover Project Inspection","नारंगी उड्डाणपूल प्रकल्प पाहणी"],["Hon. Mayor Shri. Ajiv Patil personally inspected the work of the flyover at Naringi. During the inspection, he discussed the progress and difficulties of the work with the concerned officials, railway officials, contractors and sub-contractors, and gave instructions to speed up the work.","नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या."],["Open for traffic by end of March 2026","मार्च २०२६ अखेर वाहतुकीसाठी खुले"],["Discussion on forming committees","समिती गठनाबाबत चर्चा"],["Discussion is ongoing on important subjects of the Standing Committee and on forming ward committees.","स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे."],["Mayor and Corporators Meeting","महापौर व नगर सेवक बैठक"],["Daily Garbage Collection & Cleanliness Meeting","दैनंदिन कचरा संकलन व स्वच्छता बैठक"],["Road Repair & Infrastructure Planning Meeting","रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक"],["Road Repair & Construction","रस्ते दुरुस्ती व बांधकाम"],["Garbage Collection & Segregation","कचरा संकलन व वर्गीकरण"],["Gutter & Drain Cleaning","गटार व नाले साफसफाई"],["Footpath Construction Planning","फुटपाथ उभारणी नियोजन"],["Compost Production Technology Exhibition","खत निर्मिती तंत्रज्ञान प्रदर्शन"],["Solid Waste Management Exhibition","घनकचरा व्यवस्थापन प्रदर्शन"],["Inauguration of Solid Waste Management Camp-Exhibition","घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन"],["Camp Exhibition","शिबिर प्रदर्शन"],["Cleanliness Review","स्वच्छता आढावा"],["Road Development","रस्ते विकास"],["Electricity Development","वीज विकास"],["MSEDCL Vasai Circle Review Meeting","MSEDCL वसई मंडळ आढावा बैठक"],["MSEDCL Development Works Review","MSEDCL विकास कामे आढावा"],["Trees to be planted","झाडे लावणार"],["Beneficiary Families","लाभार्थी कुटुंबे"],["Citizens","नागरिक","नागरिक"],["Environment","पर्यावरण"],["Water Supply","पाणीपुरवठा"],["Infrastructure","पायाभूत सुविधा"],["Administration","प्रशासन","प्रशासन"],["Crore","कोटी"],["Lakh","लाख"],["Vasai-Virar City Municipal Corporation Mayor, Health, Virar City, Improvement Meeting, Office Vice President","वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"],["January","जानेवारी"],["February","फेब्रुवारी"],["March","मार्च"],["April","एप्रिल"],["May","मे"],["June","जून"],["July","जुलै"],["August","ऑगस्ट"],["September","सप्टेंबर"],["October","ऑक्टोबर"],["November","नोव्हेंबर"],["December","डिसेंबर"],["August 2025","ऑगस्ट 2025"],["December 2025","डिसेंबर 2025"],["March 2026","मार्च 2026"],["10 March 2026","१० मार्च २०२६"],["11 March 2026","११ मार्च २०२६"],["28 February 2026","२८ फेब्रुवारी २०२६"],["5 March 2026","५ मार्च २०२६"],["Mon","सोम"],["Tue","मंगळ"],["Wed","बुध"],["Thu","गुरु"],["Fri","शुक्र"],["Sat","शनि"],["Sun","रवि"],["Today","आज"],["Day","दिवस"],["Week","आठवडा"],["This year","हे वर्ष"],["Date","दिनांक"],["Time","वेळ"],["Official Login","अधिकारी लॉगिन"],["Citizen Login","नागरिक लॉगिन"],["For Citizens — To Book an Appointment with the Mayor.","नागरिकांसाठी — महापौरांची भेट बुक करण्यासाठी."],["For Municipal Corporation Officers, Employees, and Administrative Staff.","महानगरपालिका अधिकारी, कर्मचारी आणि प्रशासकीय कर्मचाऱ्यांसाठी."],["Welcome Back","पुन्हा स्वागत आहे"],["Sign in","साइन इन"],["SIGN IN","साइन इन"],["Sign In to Continue","पुढे जाण्यासाठी साइन इन करा"],["Sign in to the Mayor Appointment Portal.","महापौर भेट पोर्टलवर साइन इन करा."],["Continue","पुढे चला"],["Login now","लॉगिन करा","Login करा"],["Logging in","लॉगिन होत आहे"],["Login successful","लॉगिन यशस्वी","Login यशस्वी"],["Login failed","लॉगिन अयशस्वी"],["Redirecting to login page","लॉगिन पेजवर जात आहे","Login page वर redirect होत आहे"],["Username","वापरकर्ता नाव"],["User Name","वापरकर्ता नाव"],["Password","पासवर्ड"],["Confirm Password","पासवर्डची पुष्टी करा"],["Re-enter password","पासवर्ड परत टाका","Password परत टाका"],["Password Login","पासवर्ड लॉगिन"],["OTP Login","OTP लॉगिन"],["Mobile OTP Login","मोबाईल OTP लॉगिन"],["Send OTP","OTP पाठवा"],["Send OTP & Register","OTP पाठवा व नोंदणी करा"],["Sending OTP","OTP पाठवत आहे"],["Verify OTP","OTP पडताळा"],["Verifying","पडताळणी सुरू"],["Verify & Login","पडताळा व लॉगिन करा"],["Verify & Register","पडताळा व नोंदणी करा"],["Resend OTP","OTP पुन्हा पाठवा"],["Did not receive OTP","OTP मिळाला नाही"],["Didn't receive the OTP","OTP मिळाला नाही"],["OTP expired","OTP ची मुदत संपली"],["OTP has expired","OTP ची मुदत संपली आहे"],["OTP expires in","OTP ची मुदत संपेल"],["OTP has been sent to","OTP पाठवला आहे"],["OTP sent to","OTP पाठवला"],["Invalid OTP. Please try again.","चुकीचा OTP. कृपया पुन्हा प्रयत्न करा."],["Enter 6 digit OTP","६ अंकी OTP टाका"],["Your OTP will be sent to your registered mobile number","तुमचा OTP नोंदणीकृत मोबाईल नंबरवर पाठवला जाईल"],["via WhatsApp","व्हॉट्सअ‍ॅपद्वारे"],["Create account","खाते तयार करा","Account तयार करा"],["Create Account","खाते तयार करा"],["Don't have an account","खाते नाही","Account नाही"],["Already have an account","आधीच खाते आहे"],["Registering","नोंदणी सुरू आहे"],["Registration successful","नोंदणी यशस्वी"],["Registration Success","नोंदणी यशस्वी"],["Registration failed","नोंदणी अयशस्वी"],["Mobile number is not registered.","मोबाईल नंबर नोंदणीकृत नाही."],["Mobile number not registered","मोबाईल नंबर नोंदणीकृत नाही","Mobile number नोंदणीकृत नाही"],["Mobile number must be 10 digits","मोबाईल नंबर १० अंकी असावा"],["Password must be at least 6 characters","पासवर्ड किमान ६ अक्षरांचा असावा"],["Passwords do not match","पासवर्ड जुळत नाहीत"],["Min. 6 characters","किमान ६ अक्षरे"],["Minimum 6 characters","किमान 6 अक्षरे","किमान 6 characters"],["characters","अक्षरे"],["Enter 10-digit mobile number","१० अंकी मोबाईल नंबर टाका"],["digit mobile","अंकी मोबाईल"],["digit mobile number","अंकी मोबाईल नंबर"],["Enter email","ईमेल टाका"],["Enter full name","पूर्ण नाव टाका"],["Enter mobile number","मोबाईल नंबर टाका"],["Enter name","नाव टाका"],["Enter order number","आदेश क्रमांक टाका"],["Enter password","पासवर्ड टाका"],["Enter total revenue","एकूण महसूल टाका"],["Enter username","वापरकर्ता नाव टाका"],["Enter valid amount","योग्य रक्कम टाका"],["Enter your email","तुमचा ईमेल टाका"],["Enter your full name","तुमचे पूर्ण नाव टाका"],["Enter your mobile number","तुमचा मोबाईल नंबर टाका"],["Enter your password","तुमचा पासवर्ड टाका"],["Enter your username","तुमचे वापरकर्ता नाव टाका"],["Your full name","आपले पूर्ण नाव","आपले पूर्ण नाव"],["Full address","पूर्ण पत्ता","पूर्ण पत्ता"],["Get SMS notification","SMS द्वारे सूचना मिळवा","SMS द्वारे notification मिळवा"],["Full Name","पूर्ण नाव"],["Name","नाव"],["Mobile","मोबाईल"],["Mobile number","मोबाईल नंबर"],["Mobile Number","मोबाईल नंबर"],["Email","ईमेल"],["Email (optional)","ईमेल (ऐच्छिक)"],["Email Address","ईमेल पत्ता"],["Address","पत्ता"],["Pincode","पिनकोड"],["Ward","प्रभाग"],["Ward No","प्रभाग क्रमांक"],["Ward seat no","प्रभाग जागा क्रमांक"],["ward councillor","प्रभाग नगरसेवक"],["Select Ward","प्रभाग निवडा"],["Ward A","प्रभाग A"],["Ward B","प्रभाग B"],["Ward C","प्रभाग C"],["Ward D","प्रभाग D"],["Ward E","प्रभाग E"],["Ward F","प्रभाग F"],["Ward G","प्रभाग G"],["Ward H","प्रभाग H"],["Ward I","प्रभाग I"],["Ward J","प्रभाग J"],["Ward-A","प्रभाग-A"],["Ward-B","प्रभाग-B"],["Ward-C","प्रभाग-C"],["Ward-D","प्रभाग-D"],["Ward-E","प्रभाग-E"],["Ward-F","प्रभाग-F"],["Ward-G","प्रभाग-G"],["Ward-H","प्रभाग-H"],["Ward-I","प्रभाग-I"],["Taluka","तालुका"],["District","जिल्हा"],["Region","विभाग"],["Designation","पदनाम"],["Role","भूमिका"],["Department","विभाग"],["Departments","विभाग"],["departments","विभाग"],["Department Name","विभागाचे नाव"],["Main Department","मुख्य विभाग"],["Sub Department","उप विभाग"],["Select","निवडा"],["Select Department","विभाग निवडा"],["Select Role","भूमिका निवडा"],["Select Type","प्रकार निवडा"],["Select Decision","निर्णय निवडा"],["Select Financial Year","आर्थिक वर्ष निवडा"],["Select Time Slot","वेळ निवडा"],["Type","प्रकार"],["Category","वर्ग"],["Priority","प्राधान्य"],["Change Priority","प्राधान्य बदला","Priority बदला"],["Status","स्थिती"],["Change Status","स्थिती बदला","Status बदला"],["Update Status","स्थिती अद्ययावत करा"],["Description","वर्णन"],["Details","तपशील"],["Purpose","उद्देश"],["Purpose / Subject","उद्देश / विषय"],["Subject","विषय"],["subject","विषय"],["Subjects","विषय"],["Document","दस्तऐवज"],["Documents","दस्तऐवज"],["File","फाईल"],["Image","प्रतिमा"],["Image File","प्रतिमा फाईल"],["Photo","फोटो"],["Amount","रक्कम"],["Total","एकूण"],["Number","क्रमांक"],["Identity","ओळख"],["Company","कंपनी"],["Individual","वैयक्तिक"],["Other","इतर"],["Office","कार्यालय"],["Officer","अधिकारी"],["Citizen","नागरिक"],["User","वापरकर्ता"],["Users","वापरकर्ते"],["users","वापरकर्ते"],["Admin","प्रशासक"],["Admin User","प्रशासक वापरकर्ता"],["Super Admin","सुपर प्रशासक"],["Department User","विभाग वापरकर्ता"],["Personal Details","वैयक्तिक तपशील"],["Personal Info","वैयक्तिक माहिती"],["Personal Information","वैयक्तिक माहिती"],["Created At","तयार दिनांक"],["Updated At","अद्ययावत दिनांक"],["Joined","सामील दिनांक"],["ID","आयडी"],["Sr. No","अ.क्र"],["Show","दाखवा"],["Show all","सर्व दाखवा"],["Show less","कमी दाखवा"],["Showing","दाखवत आहे"],["Rows per page","प्रति पान ओळी"],["of","पैकी"],["to","ते"],["or","किंवा"],["more","अधिक"],["results","निकाल"],["selected","निवडले"],["Records","नोंदी"],["Replies","उत्तरे"],["Yes","होय"],["No","नाही"],["Not yet","अजून नाही"],["All","सर्व"],["Auto","स्वयं"],["Auto Generated","स्वयं निर्मित"],["Good","शुभ"],["Hello","नमस्कार"],["Dear","प्रिय"],["Dear Citizen","प्रिय नागरिक"],["Important Notice","महत्त्वाची सूचना","महत्त्वाची सूचना"],["Save","जतन करा"],["Save Changes","बदल जतन करा"],["Saving","जतन होत आहे"],["Cancel","रद्द करा"],["Close","बंद करा"],["Delete","हटवा"],["Yes, Delete","होय, हटवा"],["Deleting","हटवत आहे"],["Edit","संपादित करा"],["Update","अद्ययावत करा"],["View","पहा"],["View Details","तपशील पहा"],["View File","फाईल पहा"],["View Document","दस्तऐवज पहा"],["Doc","दस्तऐवज"],["Download","डाउनलोड करा","Download करा"],["Download below","खाली डाउनलोड करा","खाली download करा"],["Download failed","डाउनलोड अयशस्वी"],["Export CSV","CSV निर्यात करा"],["Refresh","रिफ्रेश करा"],["Reset","रीसेट करा"],["Fetch","मिळवा"],["Add","जोडा"],["Adding","जोडत आहे"],["Open Form","फॉर्म उघडा"],["Clear Filters","फिल्टर काढा"],["CLEAR","साफ करा"],["Submit Application","अर्ज सादर करा"],["Submit Appointment","भेट विनंती सादर करा"],["Submitting","सादर करत आहे"],["Review & Submit","तपासा व सादर करा"],["Verify all information and submit","सर्व माहिती तपासा आणि सादर करा","सर्व माहिती verify करा आणि submit करा"],["Choose File","फाईल निवडा"],["Choose Files","फाईल्स निवडा"],["No file chosen","कोणतीही फाईल निवडली नाही"],["No files","फाईल्स नाहीत"],["Upload Photo","फोटो अपलोड करा"],["Change Photo","फोटो बदला","Photo बदला"],["Upload Attachment","संलग्नक अपलोड करा"],["Upload Document to Submit","सादर करण्यासाठी दस्तऐवज अपलोड करा"],["Upload Excel File","Excel फाईल अपलोड करा"],["Attach document","दस्तऐवज जोडा"],["Camera","कॅमेरा"],["Use Camera","कॅमेरा वापरा"],["Use Webcam","वेबकॅम वापरा"],["Capture Photo","फोटो घ्या"],["Upload or use camera","अपलोड करा किंवा कॅमेरा वापरा","Upload करा किंवा camera वापरा"],["Provide photo by upload or camera","अपलोड किंवा कॅमेरा वापरून फोटो द्या","Upload किंवा camera वापरून photo द्या"],["Use Upload/Camera below only if you want to change it","बदलायचा असेल तरच खाली अपलोड/कॅमेरा वापरा","बदलायचा असेल तरच खाली Upload/Camera वापरा"],['Click "Change Photo" to change','बदलण्यासाठी "फोटो बदला" वर क्लिक करा','Click "Photo बदला" to change'],['Click "Upload Photo" to change','बदलण्यासाठी "फोटो अपलोड करा" वर क्लिक करा'],["Photo selected","फोटो निवडला"],["New photo selected","नवीन फोटो निवडला","नवीन Photo निवडला"],["This will be used instead of the old photo","हा जुन्या फोटोऐवजी वापरला जाईल","हा जुन्या photo ऐवजी वापरला जाईल"],["Use this photo","हाच फोटो वापरा","हाच फोटो वापरा"],["Photo from previous visit is available","मागील भेटीचा फोटो उपलब्ध आहे","मागील भेटीचा फोटो उपलब्ध आहे"],["Citizen's photo","नागरिकाचा फोटो","Citizen चा photo"],["Photo received from token","टोकनवरून फोटो मिळाला","Token वरून Photo मिळाला"],["Visitor Photo","अभ्यागत फोटो"],["File Selected","फाईल निवडली"],["Preview not available","पूर्वावलोकन उपलब्ध नाही","Preview उपलब्ध नाही"],["Maximum 12 files allowed","जास्तीत जास्त १२ फाईल्स परवानगी"],["PDF, Word, Excel, PNG, JPG — max 12, optional","PDF, Word, Excel, PNG, JPG — कमाल १२, ऐच्छिक"],["PDF, DOC, or Image","PDF, DOC किंवा प्रतिमा"],["PDF Document","PDF दस्तऐवज"],["Word Document","Word दस्तऐवज"],["Excel / Spreadsheet","Excel / स्प्रेडशीट"],["Existing Files","विद्यमान फाईल्स"],["Size","आकार"],["Duration","कालावधी"],["Pending","प्रलंबित"],["Approved","मंजूर"],["Rejected","नाकारले"],["Rejected by Admin","प्रशासकाने नाकारले"],["Cancelled","रद्द"],["Completed","पूर्ण"],["Resolved","निकाली"],["Expired","मुदत संपली"],["Failed","अयशस्वी"],["In Progress","प्रगतीपथावर"],["Not Started","सुरू नाही"],["Not Conducted","घेतली नाही"],["On-Hold","स्थगित"],["Postponed","पुढे ढकलले"],["Follow Up","पाठपुरावा"],["Booked","बुक केले"],["Available","उपलब्ध"],["available","उपलब्ध"],["High","उच्च"],["Medium","मध्यम"],["Low","कमी"],["Normal","सामान्य"],["Urgent","तातडीचे"],["Emergency","आणीबाणी"],["Pending — Admin approval is awaited","प्रलंबित — प्रशासक मंजुरी बाकी आहे","Pending — Admin approval बाकी आहे"],["Pending — Awaiting Mayor's Approval","प्रलंबित — महापौरांच्या मंजुरीची प्रतीक्षा"],["Pending (Activities)","प्रलंबित (उपक्रम)"],["Pending Amount","प्रलंबित रक्कम"],["Remaining","उर्वरित"],["Allocated","वाटप"],["Utilized","वापरले"],["Appointment","भेट"],["Appointments","भेटी"],["All Appointments","सर्व भेटी"],["New Appointment","नवीन भेट"],["Appointment Details","भेटीचा तपशील"],["Appointment Booked","भेट बुक झाली"],["Appointment Scheduling","भेट वेळापत्रक"],["Appointment Applications","भेट अर्ज"],["Applications For Appointment","भेटीसाठी अर्ज"],["Today's appointments","आजच्या भेटी"],["No appointments today","आज कोणत्याही भेटी नाहीत"],["No appointments","कोणत्याही भेटी नाहीत","कोणतेही appointments नाहीत"],["appointments found","भेटी सापडल्या"],["total appointments","एकूण भेटी"],["Loading appointments","भेटी लोड होत आहेत","Appointments लोड होत आहेत"],["all your appointments are here.","तुमच्या सर्व भेटी येथे आहेत."],["Book your first appointment to get started.","सुरुवात करण्यासाठी तुमची पहिली भेट बुक करा."],["Your appointment has been booked successfully","तुमची भेट यशस्वीरित्या बुक झाली आहे","तुमची appointment successfully book झाली आहे"],["Your appointment time","तुमची भेटीची वेळ","तुमचा appointment time"],["Booking failed","बुकिंग अयशस्वी"],["Booked On","बुक दिनांक"],["Preferred Date","पसंतीची तारीख"],["Available Dates","उपलब्ध तारखा"],["Allowed Date Range","परवानगी असलेली तारीख श्रेणी"],["To choose a date","तारीख निवडण्यासाठी","Date निवडण्यासाठी"],["Select Date","तारीख निवडा","Date Select करा"],["Select Time Slot","वेळ स्लॉट निवडा","Time Slot Select करा"],["Select 15-Minute Appointment Slot","१५ मिनिटांचा भेट स्लॉट निवडा","15-Minute Appointment Slot निवडा"],["Select 15-minute slot","१५ मिनिटांचा स्लॉट निवडा","15-minute slot निवडा"],["Select Start Time","सुरुवातीची वेळ निवडा","Start Time निवडा"],["Select End Time","समाप्तीची वेळ निवडा","End Time निवडा"],["Select Start Time!","सुरुवातीची वेळ निवडा!","Start Time select करा!"],["Select End Time!","समाप्तीची वेळ निवडा!","End Time select करा!"],["Select date first","आधी तारीख निवडा","आधी date select करा"],["Please select a date!","कृपया तारीख निवडा!","कृपया date select करा!"],["Select your preferred date, time slot, and 15-minute appointment window","तुमची पसंतीची तारीख, वेळ स्लॉट आणि १५ मिनिटांची भेट वेळ निवडा"],["Choose a date from the available dates above → choose time slot → choose 15-minute window","वरील उपलब्ध तारखांमधून तारीख निवडा → वेळ स्लॉट निवडा → १५ मिनिटांची वेळ निवडा","वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा"],["No dates available at the moment","सध्या कोणत्याही तारखा उपलब्ध नाहीत","सध्या कोणत्याही dates available नाहीत"],["Wait for admin to add availability","प्रशासकाकडून उपलब्धता जोडली जाण्याची वाट पाहा","Admin कडून availability add होण्याची वाट पाहा"],["Time Slot","वेळ स्लॉट"],["Time Slots","वेळ स्लॉट"],["TIME SLOTS","वेळ स्लॉट"],["Slot","स्लॉट"],["slot","स्लॉट"],["SLOT PREVIEW","स्लॉट पूर्वावलोकन"],["slots available","स्लॉट उपलब्ध"],["Slots loading","स्लॉट लोड होत आहेत"],["Start Time","सुरुवातीची वेळ"],["End Time","समाप्तीची वेळ"],["My Time","माझी वेळ"],["Your Time","तुमची वेळ"],["Mayor Available","महापौर उपलब्ध"],["Available | Booked |","उपलब्ध | बुक |"],["The slot you selected was just booked. Please choose another slot.","तुम्ही निवडलेला स्लॉट आत्ताच बुक झाला. कृपया दुसरा स्लॉट निवडा.","तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा."],["All 15-minute appointments for this slot are full. Please choose another slot.","या स्लॉटसाठी सर्व १५ मिनिटांच्या भेटी भरल्या आहेत. कृपया दुसरा स्लॉट निवडा.","या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा."],["This slot was just booked by someone else. Please choose another slot.","हा स्लॉट आत्ताच दुसऱ्याने बुक केला. कृपया दुसरा स्लॉट निवडा.","हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा."],["This slot is already booked. Please choose another.","हा स्लॉट आधीच बुक झाला आहे. कृपया दुसरा निवडा.","हा slot आधीच book झाला आहे. कृपया दुसरा निवडा."],["After submission, the appointment will be confirmed after Admin approval.","सादर केल्यानंतर प्रशासकाच्या मंजुरीनंतर भेट निश्चित होईल.","Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."],["Arrive on time on the day of the visit. The visit will not happen without token confirmation. Admin approval is required to confirm the appointment. For any difficulty contact the VVCMC office.","भेटीच्या दिवशी वेळेवर या. टोकन निश्चित झाल्याशिवाय भेट होणार नाही. भेट निश्चित होण्यासाठी प्रशासक मंजुरी आवश्यक आहे. कोणत्याही अडचणीसाठी वविशम कार्यालयाशी संपर्क करा.","भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."],["In order to process your appointment, all fields marked with an asterisk (*) are required.","तुमची भेट प्रक्रिया करण्यासाठी तारांकित (*) सर्व माहिती आवश्यक आहे."],["Provide details about your visit to the Mayor","महापौरांच्या भेटीबद्दल तपशील द्या"],["Write the reason for meeting the Mayor in detail — state your problem clearly","महापौरांना भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा","Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा"],["Reason for Visit","भेटीचे कारण"],["Visit Details","भेटीचा तपशील"],["Visit Information","भेटीची माहिती"],["Visit Number","भेट क्रमांक"],["Visited Before","आधी भेट दिली"],["Have you visited before","तुम्ही आधी भेट दिली आहे का"],["Number of Visitors","अभ्यागतांची संख्या"],["Visitors","अभ्यागत"],["existing visitor","जुने अभ्यागत"],["new visitor","नवीन अभ्यागत"],["last visit","शेवटची भेट"],["This citizen's","हे या नागरिकाचे","हे या नागरिकाचे"],["This will be this citizen's first visit","हे या नागरिकाचे पहिले भेट असेल","हे या नागरिकाचे पहिले भेट असेल"],["visit will be","वे भेट असेल","वे भेट असेल"],["Auto-filled from previous visit","मागील भेटीवरून स्वयं भरले","मागील भेटीवरून auto-filled"],["Already have token? (Has the citizen taken an appointment before?)","आधीच टोकन आहे? (नागरिकाने आधी भेट घेतली आहे का?)","Already have token? (Citizen ने आधी appointment घेतली आहे का?)"],["Do you have a token","टोकन आहे का","Token आहे का"],["Token","टोकन"],["Token ID","टोकन आयडी"],["Token No","टोकन क्रमांक"],["Token Number","टोकन क्रमांक"],["Token / Inward No","टोकन / आवक क्रमांक"],["Pre-filled from token","टोकनवरून आधीच भरले"],["Fetch Token first.","आधी टोकन मिळवा.","आधी Token Fetch करा."],["Please enter Token Number.","कृपया टोकन क्रमांक टाका.","कृपया Token Number टाका."],["Token not found","टोकन सापडले नाही","Token सापडले नाही"],["Token No not found","टोकन क्रमांक सापडला नाही","Token No सापडले नाही"],["Error while fetching token","टोकन मिळवताना त्रुटी आली","Token fetch करताना error आला"],["Citizen found","नागरिक सापडला","Citizen सापडला"],["Citizen Appointment not found","नागरिकाची भेट सापडली नाही","Citizen Appointment सापडले नाही"],["A blank form will open. Citizen's information will have to be filled manually.","रिकामा फॉर्म उघडेल. नागरिकाची माहिती स्वतः भरावी लागेल.","रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल."],["QR Code","QR कोड"],["QR Code — show on the day of the visit","QR कोड — भेटीच्या दिवशी दाखवा","QR Code — भेटीच्या दिवशी दाखवा"],["Information is loading","माहिती लोड होत आहे","माहिती लोड होत आहे"],["Camera access denied. Give browser permission.","कॅमेरा परवानगी नाकारली. ब्राउझर परवानगी द्या.","Camera access denied. Browser permission द्या."],["Application Form","अर्ज नमुना"],["Application Detail","अर्ज तपशील"],["Application Details","अर्ज तपशील"],["Application Records","अर्ज नोंदी"],["Applications","अर्ज"],["applications","अर्ज"],["All Applications","सर्व अर्ज"],["New Application","नवीन अर्ज"],["Recent Applications","अलीकडील अर्ज"],["Applicant","अर्जदार"],["Application submitted successfully! Token Number","अर्ज यशस्वीरित्या सादर झाला! टोकन क्रमांक"],["Loading applications","अर्ज लोड होत आहेत"],["No applications yet","अद्याप कोणतेही अर्ज नाहीत"],["No matching applications found.","जुळणारे अर्ज सापडले नाहीत."],["Error fetching applications","अर्ज मिळवताना त्रुटी"],["Citizen Details","नागरिक तपशील"],["Citizen Appts","नागरिक भेटी"],["Complaint","तक्रार"],["Complaint Subject","तक्रारीचा विषय"],["Complaint Description","तक्रारीचे वर्णन"],["Latest inward complaints","नवीन आवक तक्रारी"],["New inward complaints will show up here.","नवीन आवक तक्रारी येथे दिसतील."],["Counts appear once inward applications are tracked.","आवक अर्ज नोंदवल्यानंतर संख्या दिसेल."],["Inward No","आवक क्रमांक"],["CitizenBridge — Inward Records · All citizen appointment requests","CitizenBridge — आवक नोंदी · सर्व नागरिक भेट विनंत्या"],["Submitted By","सादरकर्ता"],["Submitted On","सादर दिनांक"],["Assign to Department","विभागाकडे सोपवा"],["Tag To","यांच्याकडे टॅग करा"],["Tag To (Authority)","यांच्याकडे टॅग करा (प्राधिकारी)"],["Tagged To","टॅग केलेले"],["Subjects tagged to","यांच्याकडे टॅग केलेले विषय"],["Click any row to view full details","पूर्ण तपशील पाहण्यासाठी कोणत्याही ओळीवर क्लिक करा"],["Click any row to view full details & reply","पूर्ण तपशील व उत्तरासाठी कोणत्याही ओळीवर क्लिक करा"],["Search by name, inward no, subject","नाव, आवक क्रमांक, विषयानुसार शोधा"],["Search by name, token ID, mobile, purpose, ward","नाव, टोकन आयडी, मोबाईल, उद्देश, प्रभागानुसार शोधा"],["Search by name, username, mobile, email","नाव, वापरकर्ता नाव, मोबाईल, ईमेलनुसार शोधा"],["Search by name, ward, mobile, designation","नाव, प्रभाग, मोबाईल, पदनामानुसार शोधा"],["Search by date","तारखेनुसार शोधा"],["Search subject ID","विषय आयडी शोधा"],["Search appointment","भेट शोधा"],["Search appointments","भेटी शोधा"],["Search meeting no","सभा क्रमांक शोधा"],["Search meetings","सभा शोधा"],["Search Order No","आदेश क्रमांक शोधा"],["Try a different filter or search term.","वेगळा फिल्टर किंवा शोध शब्द वापरा."],["Try another filter or search.","दुसरा फिल्टर किंवा शोध वापरा."],["No records found","कोणत्याही नोंदी सापडल्या नाहीत"],["Reply","उत्तर"],["Send Reply","उत्तर पाठवा"],["Reply Message","उत्तर संदेश"],["Reply Document","उत्तर दस्तऐवज"],["Attach Reply Document","उत्तर दस्तऐवज जोडा"],["Reply to Application","अर्जाला उत्तर द्या"],["Reply / Note to Citizen","नागरिकाला उत्तर / टीप"],["Reply By","उत्तरदाता"],["Write a reply message to the applicant","अर्जदाराला उत्तर संदेश लिहा","Applicant ला reply message लिहा"],["Please write a reply message.","कृपया उत्तर संदेश लिहा.","कृपया reply message लिहा."],["Reply sent successfully!","उत्तर यशस्वीरित्या पाठवले!","Reply यशस्वीरित्या पाठवली!"],["Error while sending reply","उत्तर पाठवताना त्रुटी आली","Reply पाठवताना error आला"],["Reply error","उत्तर त्रुटी"],["Write a note or reply that will be sent to the citizen as acknowledgement","नागरिकाला पोचपावती म्हणून पाठवली जाणारी टीप किंवा उत्तर लिहा"],["Saving will update the citizen's application status and send an acknowledgement notification automatically.","जतन केल्यावर नागरिकाच्या अर्जाची स्थिती अद्ययावत होईल आणि पोचपावती सूचना आपोआप पाठवली जाईल."],["Save & Notify Citizen","जतन करा व नागरिकाला कळवा"],["& citizen notified!","व नागरिकाला कळवले!"],["Status updated to","स्थिती अद्ययावत केली"],["Document from Admin","प्रशासकाकडून दस्तऐवज"],["Admin Note","प्रशासक टीप"],["SMS sent to","SMS पाठवला"],["WhatsApp sent to","व्हॉट्सअ‍ॅप पाठवला"],["SMS error for","SMS त्रुटी"],["SMS error","SMS त्रुटी"],["Error for","त्रुटी"],["Invalid mobile","चुकीचा मोबाईल"],["Availability","उपलब्धता"],["Mayor Availability","महापौर उपलब्धता"],["Set Mayor Availability","महापौर उपलब्धता ठरवा"],["Availability Details","उपलब्धता तपशील"],["Availability Records","उपलब्धता नोंदी"],["Add Availability","उपलब्धता जोडा"],["Manage Mayor's available dates and time slots","महापौरांच्या उपलब्ध तारखा व वेळ स्लॉट व्यवस्थापित करा","Mayor च्या available dates व time slots manage करा"],["Add Slot","स्लॉट जोडा"],["Remove slot","स्लॉट काढा"],["Slot removed.","स्लॉट काढला."],["Availability removed.","उपलब्धता काढली."],["Delete Availability","उपलब्धता हटवायची"],["all availability will be removed.","ची सर्व उपलब्धता काढली जाईल.","ची सर्व availability remove होईल."],["Existing slots","विद्यमान स्लॉट"],["No availability records found.","कोणत्याही उपलब्धता नोंदी सापडल्या नाहीत."],["Loading availability","उपलब्धता लोड होत आहे"],["Failed to load availability data","उपलब्धता माहिती लोड करण्यात अयशस्वी"],["Failed to add slot","स्लॉट जोडण्यात अयशस्वी"],["Failed to remove slot","स्लॉट काढण्यात अयशस्वी"],["Switch to Week view to browse other days.","इतर दिवस पाहण्यासाठी आठवडा दृश्य निवडा."],["Live · 8:00 AM – 6:00 PM","थेट · सकाळी 8:00 – सायं 6:00"],["Meeting","सभा"],["Meetings","सभा"],["Create Meeting","सभा तयार करा"],["Edit Meeting","सभा संपादित करा"],["Delete Meeting","सभा हटवायची"],["Meeting created","सभा तयार झाली"],["Meeting updated","सभा अद्ययावत झाली"],["Meeting deleted","सभा हटवली"],["Meeting Date","सभेचा दिनांक"],["Meeting Time","सभेची वेळ"],["Meeting No","सभा क्रमांक"],["Meeting Number","सभा क्रमांक"],["Meeting Proceedings","सभा कामकाज"],["Meeting Subjects","सभा विषय"],["Type Of Meeting","सभेचा प्रकार"],["Meeting / subject","सभा / विषय"],["Open meeting","सभा उघडा"],["View Meetings","सभा पहा"],["Meetings assigned to you","तुम्हाला सोपवलेल्या सभा"],["Meetings and their subjects will appear here.","सभा व त्यांचे विषय येथे दिसतील."],["meetings · all departments","सभा · सर्व विभाग"],["All meetings · progress = subjects with action taken","सर्व सभा · प्रगती = कार्यवाही झालेले विषय"],["Progress = subjects with action taken","प्रगती = कार्यवाही झालेले विषय"],["No meetings match this filter","या फिल्टरशी जुळणाऱ्या सभा नाहीत"],["No meetings to show yet","अद्याप दाखवण्यासाठी सभा नाहीत"],["No meeting available","कोणतीही सभा उपलब्ध नाही","कोणतीही meeting उपलब्ध नाही"],["No meeting subjects assigned yet","अद्याप कोणतेही सभा विषय सोपवलेले नाहीत"],["Click on the meeting number from the Meetings page","सभा पेजवरून सभा क्रमांकावर क्लिक करा","Meetings page वरून meeting number वर click करा"],["After saving the meeting, click on the Meeting Number and add Subjects","सभा जतन केल्यावर सभा क्रमांकावर क्लिक करून विषय जोडा","Meeting save केल्यावर Meeting Number वर click करून Subjects add करा"],["Click to view/add subjects","विषय पाहण्यासाठी/जोडण्यासाठी क्लिक करा"],["tap → subjects","टॅप करा → विषय"],["Manage Sabha Kamkaj","सभा कामकाज व्यवस्थापित करा","Sabha Kamkaj manage करा"],["Sabha Kamkaj — Subject wise progress tracking","सभा कामकाज — विषयनिहाय प्रगती मागोवा"],["— subjects of all departments of the selected meetings will appear on the dashboard","— निवडलेल्या सभांचे सर्व विभागांचे विषय डॅशबोर्डवर दिसतील","— निवडलेल्या सभांचे सर्व विभागांचे विषय dashboard वर दिसतील"],["General Body","महासभा"],["General Body (महासभा)","महासभा (General Body)"],["Standing Committee","स्थायी समिती"],["Standing Committee (स्थायी समिती)","स्थायी समिती (Standing Committee)"],["Standing Committee Chairman","स्थायी समिती सभापती"],["Not a member of General Body / Standing Committee","महासभा / स्थायी समिती सदस्य नाही","General Body / Standing Committee सदस्य नाही"],["No committee","समिती नाही"],["General","सर्वसाधारण"],["Administrative","प्रशासकीय"],["Administrative & Financial","प्रशासकीय व आर्थिक"],["Administrative and Financial Approval","प्रशासकीय व आर्थिक मान्यता"],["Contract Approval","करार मान्यता"],["Nivida Samiti Rate Approval","निविदा समिती दर मान्यता"],["Prashaskiy","प्रशासकीय"],["Samvida","संविदा"],["Agenda","कार्यसूची"],["Decision","निर्णय"],["Decision In Meeting","सभेतील निर्णय"],["Decision Breakdown","निर्णय विभागणी"],["Decision pending","निर्णय प्रलंबित"],["Decided, action pending","निर्णय झाला, कार्यवाही प्रलंबित"],["Proceedings","कामकाज"],["Subject ID","विषय आयडी"],["Subject Name","विषयाचे नाव"],["Subject Type","विषय प्रकार"],["Subject Type Breakdown","विषय प्रकार विभागणी"],["Add Subject","विषय जोडा"],["Edit Subject","विषय संपादित करा"],["Update Subject","विषय अद्ययावत करा"],["Delete Subject","विषय हटवायचा"],["Subject added","विषय जोडला"],["Subject updated","विषय अद्ययावत झाला"],["Subject deleted","विषय हटवला"],["Subject ID missing","विषय आयडी नाही"],["Subject Name is required","विषयाचे नाव आवश्यक आहे"],["Enter subject name","विषयाचे नाव टाका","Subject name टाका"],["No Subjects","विषय नाहीत"],["No subjects","कोणतेही विषय नाहीत","कोणतेही subjects नाहीत"],["No subject found","कोणताही विषय सापडला नाही","कोणताही subject सापडला नाही"],["Search a different Subject ID","वेगळा विषय आयडी शोधा","वेगळा Subject ID search करा"],["No subjects added to this meeting yet.","या सभेत अद्याप विषय जोडलेले नाहीत."],["Add subjects using the + Add Subject button","+ विषय जोडा बटण वापरून विषय जोडा","Add Subject button वापरून subjects add करा"],["Failed to load subjects","विषय लोड करण्यात अयशस्वी"],["Total Subjects","एकूण विषय"],["TOTAL MEETINGS","एकूण सभा"],["Department-wise Subject Progress","विभागनिहाय विषय प्रगती"],["Meeting-wise Subject Progress","सभानिहाय विषय प्रगती"],["Your Department Progress","तुमच्या विभागाची प्रगती"],["Action","कार्यवाही"],["Actions","क्रिया"],["Action taken","केलेली कार्यवाही"],["action taken","केलेली कार्यवाही"],["Action Taken Progress","कार्यवाही प्रगती"],["Action Taken saved","केलेली कार्यवाही जतन झाली"],["Save Action Taken","केलेली कार्यवाही जतन करा"],["No action taken yet","अद्याप कार्यवाही नाही"],["Open a subject to record its next step.","पुढील टप्पा नोंदवण्यासाठी विषय उघडा."],["Completion","पूर्तता"],["Completion Rate","पूर्तता दर"],["Here's where your meetings and applications stand today.","तुमच्या सभा आणि अर्जांची आजची स्थिती येथे आहे."],["Record Meeting","सभा रेकॉर्ड करा"],["Record Meeting — available at scheduled meeting time","सभा रेकॉर्ड करा — नियोजित सभेच्या वेळी उपलब्ध"],["Hide Recorder","रेकॉर्डर लपवा"],["Start Session","सत्र सुरू करा"],["Stop Session","सत्र थांबवा"],["Session ended.","सत्र संपले."],["Audio Recording (optional)","ऑडिओ रेकॉर्डिंग (ऐच्छिक)"],["Audio Recording ON","ऑडिओ रेकॉर्डिंग सुरू"],["Upload Meeting Recording (optional)","सभेचे रेकॉर्डिंग अपलोड करा (ऐच्छिक)"],["Recording saved","रेकॉर्डिंग जतन झाले"],["Recording ready","रेकॉर्डिंग तयार"],["Auto-recording saved","स्वयं-रेकॉर्डिंग जतन झाले"],["Waiting for someone to speak","कोणी बोलण्याची प्रतीक्षा"],["Waiting","प्रतीक्षा"],["Speaking","बोलत आहे"],["Silence","शांतता"],["Microphone Not Found","मायक्रोफोन सापडला नाही"],["Microphone Permission Denied","मायक्रोफोन परवानगी नाकारली"],["Microphone Could Not Start — Refresh page","मायक्रोफोन सुरू झाला नाही — पेज रिफ्रेश करा"],["1st Envelope Opened","पहिला लिफाफा उघडला"],["2nd Envelope Opened","दुसरा लिफाफा उघडला"],["Ghoshwara Ready","घोषवारा तयार"],["LOI Issued","LOI जारी"],["SD Submitted","SD सादर"],["Tender Floated","निविदा प्रसिद्ध"],["Work Order Issued","कार्यादेश जारी"],["Work Started","काम सुरू"],["Work Progress - Financial Progress","कामाची प्रगती - आर्थिक प्रगती"],["Work Progress - Physical Progress","कामाची प्रगती - भौतिक प्रगती"],["Tracking","मागोवा"],["Weekly Trend","साप्ताहिक कल"],["Analytics","विश्लेषण"],["Analytic overview","विश्लेषण आढावा"],["No regional data yet","अद्याप प्रादेशिक माहिती नाही"],["will appear here.","येथे दिसतील."],["User Management","वापरकर्ता व्यवस्थापन"],["Janata Darbar — User Management","जनता दरबार — वापरकर्ता व्यवस्थापन"],["All Users","सर्व वापरकर्ते"],["All Roles","सर्व भूमिका"],["Add User","वापरकर्ता जोडा"],["Add New User","नवीन वापरकर्ता जोडा"],["Edit User","वापरकर्ता संपादित करा"],["User Detail","वापरकर्ता तपशील"],["User Added Successfully","वापरकर्ता यशस्वीरित्या जोडला"],["User Updated Successfully","वापरकर्ता यशस्वीरित्या अद्ययावत झाला"],["Loading users","वापरकर्ते लोड होत आहेत"],["No users found","वापरकर्ते सापडले नाहीत"],["No users found for department","या विभागासाठी वापरकर्ते सापडले नाहीत"],["Users fetch failed","वापरकर्ते मिळवण्यात अयशस्वी"],["Error while fetching users","वापरकर्ते मिळवताना त्रुटी आली","Users fetch करताना error आला"],["Corporator","नगरसेवक"],["Corporators","नगरसेवक"],["corporators","नगरसेवक"],["Corporators / Nagarsevak","नगरसेवक / Corporators","Corporators / नगरसेवक"],["Add Corporator","नगरसेवक जोडा"],["Name of corporator","नगरसेवकाचे नाव"],["Names of corporators","नगरसेवकांची नावे"],["Corporator Added Successfully","नगरसेवक यशस्वीरित्या जोडला"],["Corporator Updated Successfully","नगरसेवक यशस्वीरित्या अद्ययावत झाला"],["Loading corporators","नगरसेवक लोड होत आहेत"],["Corporators fetch failed","नगरसेवक मिळवण्यात अयशस्वी"],["Error while fetching corporators","नगरसेवक मिळवताना त्रुटी आली","Corporators fetch करताना error आला"],['No corporators found — click on "+ Add Corporator"','नगरसेवक सापडले नाहीत — "+ नगरसेवक जोडा" वर क्लिक करा','No corporators found — "+ Add Corporator" वर click करा'],["Corporators & Office Bearers","नगरसेवक व पदाधिकारी"],["Office Bearers","पदाधिकारी"],["Dy. Mayor","उपमहापौर"],["Standing Chairman","स्थायी समिती सभापती"],["Not assigned","नियुक्त नाही"],["Member","सदस्य"],["Members","सदस्य"],["Add Member","सदस्य जोडा"],["Member Added Successfully","सदस्य यशस्वीरित्या जोडला"],["Member Updated Successfully","सदस्य यशस्वीरित्या अद्ययावत झाला"],["Loading members","सदस्य लोड होत आहेत"],["Members fetch failed","सदस्य मिळवण्यात अयशस्वी"],["Error while fetching members","सदस्य मिळवताना त्रुटी आली"],['No members found — click on "+ Add Member"','सदस्य सापडले नाहीत — "+ सदस्य जोडा" वर क्लिक करा'],["e.g. 1A","उदा. 1A"],["10 digit mobile number","१० अंकी मोबाईल नंबर"],["Deleted Successfully","यशस्वीरित्या हटवले"],["Do you want to delete","हटवायचे आहे का","ला delete करायचे आहे का"],["This record will be permanently deleted. Are you sure?","ही नोंद कायमची हटवली जाईल. खात्री आहे का?","He record permanently delete होईल. Sure aahes ka?"],["This subject will be permanently deleted.","हा विषय कायमचा हटवला जाईल.","He subject permanently delete होईल."],["Leader of House","सभागृह नेते"],["Leader of Opposition","विरोधी पक्षनेते"],["Municipal Commissioner","महानगरपालिका आयुक्त"],["Additional Commissioner","अतिरिक्त आयुक्त"],["Secretary","सचिव"],["Collector","जिल्हाधिकारी"],["Collector Office","जिल्हाधिकारी कार्यालय"],["Deputy Collector","उपजिल्हाधिकारी"],["CEO","मुख्य कार्यकारी अधिकारी"],["Deputy CEO","उप मुख्य कार्यकारी अधिकारी"],["Chief Officer","मुख्याधिकारी"],["Deputy Chief Officer","उप मुख्याधिकारी"],["Guardian Minister","पालकमंत्री"],["Gram Sevak","ग्रामसेवक"],["Sarpanch","सरपंच"],["Grampanchayat","ग्रामपंचायत"],["Municipal Corporation","महानगरपालिका"],["Corporation / NagarPalika","महानगरपालिका / नगरपालिका"],["Mahanagarpalika Office","महानगरपालिका कार्यालय"],["Head Office","मुख्य कार्यालय"],["Main Office","मुख्य कार्यालय"],["NGO","स्वयंसेवी संस्था"],["Palghar","पालघर"],["Vasai","वसई"],["Dahanu","डहाणू"],["Jawhar","जव्हार"],["Mokhada","मोखाडा"],["Talasari","तलासरी"],["Vikramgad","विक्रमगड"],["Wada","वाडा"],["Accounts & Finance","लेखा व वित्त"],["Finance & Accounts","वित्त व लेखा"],["Finance & Audit","वित्त व लेखापरीक्षण"],["Agriculture & Allied","कृषी व संलग्न"],["Agriculture & Allied Services","कृषी व संलग्न सेवा"],["Disaster Management","आपत्ती व्यवस्थापन"],["Education","शिक्षण"],["Engineering & Works","अभियांत्रिकी व बांधकाम"],["Governance & Law","प्रशासन व कायदा"],["Health","आरोग्य"],["Health & Sanitation","आरोग्य व स्वच्छता"],["Health & Social Welfare","आरोग्य व समाजकल्याण"],["Health & Welfare","आरोग्य व कल्याण"],["Infrastructure & Utilities","पायाभूत सुविधा व सेवा"],["Legal Department","विधी विभाग"],["Office & Workflow","कार्यालय व कार्यपद्धती"],["Planning & Statistics","नियोजन व सांख्यिकी"],["Revenue & Tax","महसूल व कर"],["Rural & Development","ग्रामीण व विकास"],["Rural Development","ग्रामविकास"],["Social Welfare","समाजकल्याण"],["Supply & Control","पुरवठा व नियंत्रण"],["Supply & Food","पुरवठा व अन्न"],["Village Development","गाव विकास"],["Water & Sanitation","पाणी व स्वच्छता"],["Water & Sewerage","पाणी व मलनिःसारण"],["IT DEPARTMENT","माहिती तंत्रज्ञान विभाग"],["Accounting Department HO","लेखा विभाग मु.का."],["Accounting Department, (A) HO","लेखा विभाग, (अ) मु.का."],["Advertisement Tax Department HO","जाहिरात कर विभाग मु.का."],["Audit Department HO","लेखापरीक्षण विभाग मु.का."],["Birth and Death Department HO","जन्म व मृत्यू विभाग मु.का."],["Commissioner Office HO","आयुक्त कार्यालय मु.का."],["Construction department HO","बांधकाम विभाग मु.का."],["Department of Hygiene Disorder Management HO","स्वच्छता व्यवस्थापन विभाग मु.का."],["Disaster Management Departmengt HO","आपत्ती व्यवस्थापन विभाग मु.का."],["Diwabatti Department HO","दिवाबत्ती विभाग मु.का."],["Environment / Tree Authority / Forests / Parks Department / Election Department / Census Department HO","पर्यावरण / वृक्ष प्राधिकरण / वने / उद्यान विभाग / निवडणूक विभाग / जनगणना विभाग मु.का."],["Establishment Department HO","आस्थापना विभाग मु.का."],["Fire Brigade Department HO","अग्निशमन विभाग मु.का."],["General Administration Department / Records Department HO","सामान्य प्रशासन विभाग / अभिलेख विभाग मु.का."],["Handicapped welfare Department HO","दिव्यांग कल्याण विभाग मु.का."],["Health Department HO","आरोग्य विभाग मु.का."],["Inward-out Department HO","आवक-जावक विभाग मु.का."],["Library department HO","ग्रंथालय विभाग मु.का."],["Local Body Tax Department HO","स्थानिक संस्था कर विभाग मु.का."],["Market Recovery Department HO","बाजार वसुली विभाग मु.का."],["Marriage Registration Department HO","विवाह नोंदणी विभाग मु.का."],["Medical Health Department HO","वैद्यकीय आरोग्य विभाग मु.का."],["Meeting Department HO","सभा विभाग मु.का."],["Mud and Bhuibhade Department HO","माती व भुईभाडे विभाग मु.का."],["Naharkat / License Certificates Department HO","ना-हरकत / परवाना प्रमाणपत्र विभाग मु.का."],["Nulm department / hawker policy department HO","NULM विभाग / फेरीवाला धोरण विभाग मु.का."],["Satellite City Department HO","उपनगर विभाग मु.का."],["Special Planning Authority Department HO","विशेष नियोजन प्राधिकरण विभाग मु.का."],["Tax department HO","कर विभाग मु.का."],["Town Planning Department HO","नगररचना विभाग मु.का."],["Transportation / Vehicle Department HO","परिवहन / वाहन विभाग मु.का."],["Unauthorized Construction Committee HO","अनधिकृत बांधकाम समिती मु.का."],["Unauthorized Construction Department HO","अनधिकृत बांधकाम विभाग मु.का."],["Water Supply Department HO","पाणीपुरवठा विभाग मु.का."],["Women and Child welfare Department HO","महिला व बालकल्याण विभाग मु.का."],["Revenue Allocation","महसूल वाटप"],["Super Admin – Revenue Allocation","सुपर प्रशासक – महसूल वाटप"],["Add Revenue","महसूल जोडा"],["Save Revenue","महसूल जतन करा"],["Total Revenue","एकूण महसूल"],["Revenue Activity","महसूल उपक्रम"],["Add Revenue Activity","महसूल उपक्रम जोडा"],["Revenue Doc","महसूल दस्तऐवज"],["Revenue added successfully","महसूल यशस्वीरित्या जोडला"],["No revenue found","महसूल सापडला नाही"],["Matched revenue","जुळलेला महसूल"],["Add Activity","उपक्रम जोडा"],["Save Activity","उपक्रम जतन करा"],["Activity History","उपक्रम इतिहास"],["Activity added successfully","उपक्रम यशस्वीरित्या जोडला"],["Activity saved successfully","उपक्रम यशस्वीरित्या जतन झाला"],["No activities found","उपक्रम सापडले नाहीत"],["Error fetching activities","उपक्रम मिळवताना त्रुटी"],["Failed to add activity","उपक्रम जोडण्यात अयशस्वी"],["Failed to save activity","उपक्रम जतन करण्यात अयशस्वी"],["Add Disbursement","वितरण जोडा"],["Disburse Amount","वितरित रक्कम"],["Disburse Amt","वितरित रक्कम"],["Amount exceeds pending","रक्कम प्रलंबित रकमेपेक्षा जास्त आहे"],["Amount Sanctioned (₹)","मंजूर रक्कम (₹)"],["Sanctioned","मंजूर"],["Sanctioned Amt","मंजूर रक्कम"],["Sanctioned Order Date","मंजुरी आदेश दिनांक"],["Sanctioned Order No","मंजुरी आदेश क्रमांक"],["Add sanctioned & expenditure details","मंजूर व खर्च तपशील जोडा"],["Record sanctioned & spent details","मंजूर व खर्च झालेले तपशील नोंदवा"],["Order Date","आदेश दिनांक"],["Order No","आदेश क्रमांक"],["Financial Year","आर्थिक वर्ष"],["FY","आ.व."],["Financial year & role wise consolidated report","आर्थिक वर्ष व भूमिकानिहाय एकत्रित अहवाल"],["Bill","बिल"],["Bill / UC Upload","बिल / UC अपलोड"],["Resolved By","निकाली काढणारे"],["Resolved On","निकाली दिनांक"],["Resolved Role","निकाली काढणाऱ्याची भूमिका"],["Loading","लोड होत आहे"],["Loading dashboard","डॅशबोर्ड लोड होत आहे"],["Loading departments","विभाग लोड होत आहेत"],["Creating","तयार होत आहे"],["Sending","पाठवत आहे"],["added successfully","यशस्वीरित्या जोडले"],["Something went wrong","काहीतरी चूक झाली"],["Server error","सर्व्हर त्रुटी"],["Server error. Is the backend running?","सर्व्हर त्रुटी. बॅकएंड चालू आहे का?","Server error. Backend चालू आहे का?"],["All fields required","सर्व माहिती आवश्यक"],["Fill all fields","सर्व माहिती भरा","सर्व fields भरा"],["Fill all required fields","सर्व आवश्यक माहिती भरा","All required fields fill करा"],["All required fields must be filled","सर्व आवश्यक माहिती भरली पाहिजे"],["Required fields missing: Full Name, Mobile, and Subject are required","आवश्यक माहिती अपूर्ण: पूर्ण नाव, मोबाईल आणि विषय आवश्यक आहेत"],["Failed to fetch","मिळवण्यात अयशस्वी"],["Failed to save","जतन करण्यात अयशस्वी"],["Failed to update","अद्ययावत करण्यात अयशस्वी"],["Failed to delete","हटवण्यात अयशस्वी"],["Save failed","जतन अयशस्वी"],["Update failed","अद्ययावत अयशस्वी"],["Delete failed","हटवणे अयशस्वी"],["Department fetch error","विभाग मिळवताना त्रुटी"],["Camera access denied. Please allow camera permission.","कॅमेरा परवानगी नाकारली. कृपया कॅमेरा परवानगी द्या."],["Document file is required. Please upload a file before submitting.","दस्तऐवज फाईल आवश्यक आहे. सादर करण्यापूर्वी कृपया फाईल अपलोड करा."],["Failed to send OTP. Please try again.","OTP पाठवण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा."],["Financial year not found. Please add revenue first.","आर्थिक वर्ष सापडले नाही. कृपया आधी महसूल जोडा."],["Mobile number is not registered. Please register first.","मोबाईल नंबर नोंदणीकृत नाही. कृपया आधी नोंदणी करा."],["OTP expired! Please resend","OTP ची मुदत संपली! कृपया पुन्हा पाठवा"],["OTP has expired. Please request a new OTP.","OTP ची मुदत संपली आहे. कृपया नवीन OTP मागवा."],["Please enter a valid 10-digit mobile number.","कृपया योग्य १० अंकी मोबाईल नंबर टाका."],["Please enter a valid mobile number.","कृपया योग्य मोबाईल नंबर टाका."],["Please enter the 6-digit OTP.","कृपया ६ अंकी OTP टाका."],["Please enter your password.","कृपया तुमचा पासवर्ड टाका."],["Please enter your username.","कृपया तुमचे वापरकर्ता नाव टाका."],["Please fill all required fields","कृपया सर्व आवश्यक माहिती भरा"],["Please fill in all required fields.","कृपया सर्व आवश्यक माहिती भरा."],["Please fill required fields","कृपया आवश्यक माहिती भरा"],["Please login to the portal using OTP Login","कृपया OTP लॉगिन वापरून पोर्टलवर लॉगिन करा"],["Please provide your basic details to proceed","पुढे जाण्यासाठी कृपया तुमची मूलभूत माहिती द्या"],["Please select a portal to log in.","लॉगिन करण्यासाठी कृपया पोर्टल निवडा."],["Please select Financial Year","कृपया आर्थिक वर्ष निवडा"],["Please select Order Date","कृपया आदेश दिनांक निवडा"],["Please upload a file to proceed with submission","सादर करण्यासाठी कृपया फाईल अपलोड करा"],["Please upload Bill / UC document","कृपया बिल / UC दस्तऐवज अपलोड करा"],["Please upload or capture a clear photo for identification at the Mayor's office","महापौर कार्यालयात ओळखीसाठी कृपया स्पष्ट फोटो अपलोड करा किंवा काढा"],["Server Error. Please try again","सर्व्हर त्रुटी. कृपया पुन्हा प्रयत्न करा"],["Wrong OTP! Please try again","चुकीचा OTP! कृपया पुन्हा प्रयत्न करा"],["This mobile number is already registered. Please Login.","हा मोबाईल नंबर आधीच नोंदणीकृत आहे. कृपया लॉगिन करा.","हा mobile number already registered आहे ❌ Please Login करा."],["morning","सकाळ"],["afternoon","दुपार"],["evening","संध्याकाळ"],["Appointment Time","भेटीची वेळ","APPOINTMENT_TIME"],["Saturday","शनिवार"],["Sunday","रविवार"],["Monday","सोमवार"],["Tuesday","मंगळवार"],["Wednesday","बुधवार"],["Thursday","गुरुवार"],["Friday","शुक्रवार"]],r1="appLang",o1=["en","mr"],ex="en",s1=["placeholder","title","alt","aria-label"],l1="[data-no-translate], script, style, noscript, textarea, code, pre, [contenteditable='true']",tx="(?:[^\\p{L}\\p{M}]|[\\uFE0E\\uFE0F\\u200D\\u20E3])*",R4=new RegExp("^("+tx+")([\\s\\S]*?)("+tx+")$","u"),tr=n=>{const o=R4.exec(n);return o?[o[1],o[2],o[3]]:["",n,""]},Ul=n=>n.replace(/\s+/g," ").trim().toLowerCase(),ax=n=>/[A-Z]/.test(n)&&!/[a-z]/.test(n),Fl=new Map,Sp=new Map;(()=>{const n=(o,s,l)=>{const d=Ul(tr(o)[1]);d&&!Fl.has(d)&&Fl.set(d,s);const p=Ul(o);p&&!Sp.has(p)&&Sp.set(p,l)};K0.forEach(o=>{const s=[tr(o[0])[1],tr(o[1])[1]],l=[o[0],o[1]];o.forEach((d,p)=>p<2&&n(d,s,l))}),K0.forEach(o=>{const s=[tr(o[0])[1],tr(o[1])[1]];o.slice(2).forEach(l=>n(l,s,[o[0],o[1]]))})})();let zo=(()=>{try{const n=localStorage.getItem(r1);return o1.includes(n)?n:ex}catch{return ex}})();const c1=()=>zo,M4=["January","February","March","April","May","June","July","August","September","October","November","December","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],O4={jan:"जाने",feb:"फेब्रु",mar:"मार्च",apr:"एप्रि",jun:"जून",jul:"जुलै",aug:"ऑग",sep:"सप्टें",oct:"ऑक्टो",nov:"नोव्हें",dec:"डिसें"},$u=new RegExp("\\b("+M4.join("|")+")\\b","g");function _4(n,o){return o!=="mr"||!/\d/.test(n)||!$u.test(n)?null:($u.lastIndex=0,n.replace($u,l=>{const d=Fl.get(l.toLowerCase());return d?d[1]:O4[l.toLowerCase()]||l}).replace(/\b(AM|PM)\b/g,l=>l==="AM"?"सकाळी":"सायं"))}function fi(n,o=zo){if(n==null||typeof n!="string"||!/[\p{L}]/u.test(n))return n;const s=o==="mr"?1:0,l=Sp.get(Ul(n));if(l&&l[s]){const g=n.match(/^\s*/)[0],y=n.match(/\s*$/)[0];let v=l[s];return o==="en"&&ax(n)&&(v=v.toUpperCase()),g+v+y}const[d,p,f]=tr(n);if(!p)return n;const h=Fl.get(Ul(p));if(!h)return _4(n,o)??n;let x=h[s];return x?(o==="en"&&ax(p)&&(x=x.toUpperCase()),d+x+f):n}const Iu=n=>typeof n=="string"?String(fi(n)).split(`
`).map(o=>fi(o)).join(`
`):n,Sl=new WeakMap,nx=new WeakMap,Jp=n=>!n||n.closest&&n.closest(l1);function B4(n){const o=Sl.get(n);return o&&n.nodeValue===o.applied?o.orig:n.nodeValue}function L4(n){if(n.hasAttribute("value")&&!n.hasAttribute("data-i18n-autovalue"))return;const o=Array.from(n.childNodes).map(s=>s.nodeType===3?B4(s):s.textContent).join("").replace(/\s+/g," ").trim();n.getAttribute("value")!==o&&(n.setAttribute("value",o),n.setAttribute("data-i18n-autovalue",""))}function kp(n){const o=n.parentElement;if(Jp(o))return;let s=Sl.get(n);(!s||n.nodeValue!==s.applied)&&(s={orig:n.nodeValue}),o.tagName==="OPTION"&&(Sl.set(n,{orig:s.orig,applied:n.nodeValue}),L4(o));const l=fi(s.orig);s.applied=l,Sl.set(n,s),n.nodeValue!==l&&(n.nodeValue=l)}function Np(n){if(Jp(n))return;let o=nx.get(n);const s=s1.slice();n.tagName==="INPUT"&&/^(button|submit|reset)$/i.test(n.type)&&s.push("value");for(const l of s){if(!n.hasAttribute(l))continue;const d=n.getAttribute(l);o||(o={},nx.set(n,o));let p=o[l];(!p||d!==p.applied)&&(p={orig:d});const f=fi(p.orig);p.applied=f,o[l]=p,d!==f&&n.setAttribute(l,f)}}function Cp(n){if(!n)return;if(n.nodeType===3){kp(n);return}if(n.nodeType!==1&&n.nodeType!==11)return;if(n.nodeType===1){if(Jp(n))return;Np(n)}const o=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:l=>l.nodeType===1&&l.matches(l1)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let s=o.nextNode();for(;s;)s.nodeType===3?kp(s):Np(s),s=o.nextNode()}let Yu=null,dl=null;function Tp(){(Yu===null||document.title!==dl)&&(Yu=document.title),dl=fi(Yu),document.title!==dl&&(document.title=dl)}let ix=!1;function U4(){if(ix||typeof window>"u")return;ix=!0;const{alert:n,confirm:o,prompt:s}=window;window.alert=p=>n.call(window,Iu(p)),window.confirm=p=>o.call(window,Iu(p)),window.prompt=(p,f)=>s.call(window,Iu(p),f),document.documentElement.lang=zo;const l=document.createElement("style");l.setAttribute("data-i18n",""),l.textContent='html[lang="mr"] body *{letter-spacing:normal !important;}',document.head.appendChild(l);const d=()=>{Cp(document.body),Tp(),new MutationObserver(f=>{for(const h of f)h.type==="characterData"?kp(h.target):h.type==="attributes"?Np(h.target):h.addedNodes.forEach(Cp)}).observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[...s1,"value"]});const p=document.querySelector("title");p&&new MutationObserver(Tp).observe(p,{childList:!0,characterData:!0,subtree:!0})};document.body?d():document.addEventListener("DOMContentLoaded",d)}function rx(n){if(!(!o1.includes(n)||n===zo)){zo=n;try{localStorage.setItem(r1,n)}catch{}document.documentElement.lang=n,Cp(document.body),Tp(),window.dispatchEvent(new CustomEvent("app-langchange",{detail:n}))}}function F4(){const[n,o]=b.useState(c1());return b.useEffect(()=>{const s=l=>o(l.detail);return window.addEventListener("app-langchange",s),()=>window.removeEventListener("app-langchange",s)},[]),n}function Wl({variant:n="dark",style:o}){const s=F4(),l=n==="dark",d={display:"inline-flex",alignItems:"center",padding:3,borderRadius:50,border:l?"1.5px solid rgba(202,157,40,0.75)":"1px solid #E5EEEE",background:l?"rgba(255,255,255,0.08)":"#F1F7F8",flexShrink:0,gap:2,...o},p=f=>({border:"none",cursor:"pointer",borderRadius:50,padding:"6px 12px",fontSize:12.5,fontWeight:700,lineHeight:1.2,whiteSpace:"nowrap",fontFamily:"'Plus Jakarta Sans','Noto Sans Devanagari','Montserrat',sans-serif",transition:"all 0.25s ease",background:f?l?"#CA9D28":"#087F8C":"transparent",color:f?l?"#114e59":"#FFFFFF":l?"rgba(245,231,194,0.88)":"#087F8C"});return a.jsxs("div",{"data-no-translate":!0,style:d,role:"group","aria-label":"Language / भाषा",children:[a.jsx("button",{type:"button",style:p(s==="en"),onClick:()=>rx("en"),"aria-pressed":s==="en",children:"EN"}),a.jsx("button",{type:"button",style:p(s==="mr"),onClick:()=>rx("mr"),"aria-pressed":s==="mr",children:"मराठी"})]})}const ir="#FFFFFF",Vu="#F1F7F8",uo="#E5EEEE",Za="#087F8C",W4="#0d4f5c",po="#D8B66A",ul="#1a3a40",pl="#8AA5AB";function H4({name:n}){const o=(n||"A").split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase();return a.jsx("div",{className:"nb-avatar",style:{width:38,height:38,borderRadius:"50%",background:Za,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13.5,fontWeight:700,color:ir,flexShrink:0,fontFamily:"'Montserrat','Segoe UI',sans-serif",cursor:"pointer",border:`2px solid ${ir}`,userSelect:"none"},children:o})}const P4=()=>{const{user:n}=Gl(v=>v.auth),o=Ro(),s=vt(),{mode:l}=i1(),d=l==="hidden",[p,f]=b.useState(!1),[h,x]=b.useState(16),g=b.useRef(null);b.useEffect(()=>{const v=setInterval(()=>x(Math.floor(12+Math.random()*8)),4e3);return()=>clearInterval(v)},[]),b.useEffect(()=>{const v=T=>{g.current&&!g.current.contains(T.target)&&f(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]);const y=()=>{o(hb()),s("/login")};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Noto+Sans+Devanagari:wght@600;700&display=swap');

        .nb-wrap {
          background: ${ir};
          height: 60px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 0 24px;
          gap: 14px;
          border-bottom: 1px solid ${uo};
          box-shadow: 0 1px 4px rgba(8,127,140,0.05);
          font-family: 'Montserrat','Segoe UI',sans-serif;
          position: relative;
          z-index: 40;
        }

        .nb-search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 40px;
          box-sizing: border-box;
          background: ${Vu};
          border: 1px solid ${uo};
          border-radius: 10px;
          padding: 0 14px;
          flex: 0 1 420px;
          min-width: 0;
          transition: border-color 200ms ease, box-shadow 200ms ease, background 200ms ease;
        }
        .nb-search-box:hover { border-color: #D5E4E6; }
        .nb-search-box:focus-within {
          background: ${ir};
          border-color: ${Za};
          box-shadow: 0 0 0 3px rgba(8,127,140,0.10);
        }
        .nb-search-input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 13px;
          font-weight: 500;
          color: ${ul};
          font-family: 'Montserrat','Segoe UI',sans-serif;
          width: 100%;
          min-width: 0;
          height: 100%;
        }
        .nb-search-input::placeholder { color: ${pl}; font-weight: 500; }

        .nb-category-btn {
          display: flex; align-items: center; gap: 4px;
          background: transparent; border: none; cursor: pointer;
          color: ${Za}; font-size: 12.5px; font-weight: 600;
          font-family: 'Montserrat','Segoe UI',sans-serif;
          padding: 0; white-space: nowrap; flex-shrink: 0;
          transition: color 200ms ease;
        }
        .nb-category-btn:hover { color: ${po}; }

        .nb-sep { width: 1px; height: 18px; background: ${uo}; flex-shrink: 0; }

        .nb-online {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600;
          color: ${ul};
          white-space: nowrap;
          font-family: 'Montserrat','Segoe UI',sans-serif;
        }
        .nb-online-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #66A962;
          box-shadow: 0 0 6px #66A96288;
          animation: nb-pulse 2s infinite;
          flex-shrink: 0;
        }
        @keyframes nb-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

        .nb-avatar-wrap {
          position: relative;
          display: flex; align-items: center;
          flex-shrink: 0;
        }
        .nb-avatar {
          box-shadow: 0 0 0 1px ${po}, 0 2px 6px rgba(8,127,140,0.18);
          transition: box-shadow 200ms ease;
        }
        .nb-avatar:hover {
          box-shadow: 0 0 0 1px ${po}, 0 4px 12px rgba(8,127,140,0.28);
        }

        .nb-dropdown {
          position: absolute; top: calc(100% + 10px); right: 0;
          background: ${ir};
          border: 1px solid ${uo};
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(8,127,140,0.10);
          min-width: 210px;
          z-index: 100;
          overflow: hidden;
          animation: nb-drop 200ms ease;
        }
        @keyframes nb-drop { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:none} }

        .nb-dropdown-user {
          padding: 14px 16px 12px;
          border-bottom: 1px solid ${uo};
          border-top: 2px solid ${po};
          background: ${Vu};
        }
        .nb-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 16px;
          font-size: 13px; font-weight: 500;
          color: ${ul};
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease;
          font-family: 'Montserrat','Segoe UI',sans-serif;
        }
        .nb-dropdown-item:hover { background: ${Vu}; color: ${Za}; }
        .nb-dropdown-item.danger { color: #d9534f; }
        .nb-dropdown-item.danger:hover { background: #fdf0f0; color: #d9534f; }

        .nb-brand-block {
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
          animation: nb-drop 200ms ease;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nb-wrap { padding: 0 18px; gap: 12px; }
          .nb-search-box { flex-basis: 340px; }
        }
        @media (max-width: 767px) {
          /* room for the fixed "open sidebar" button at top-left */
          .nb-wrap { padding: 0 12px 0 52px; gap: 10px; }
          .nb-search-box { flex: 1 1 auto; padding: 0 10px; gap: 8px; }
          .nb-brand-block { display: none; }
        }
      `}),a.jsxs("div",{className:"nb-wrap",children:[d&&a.jsxs("div",{className:"nb-brand-block",style:{marginRight:8},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:10,flexShrink:0,background:ir,overflow:"hidden",border:`1px solid ${po}`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 6px rgba(8,127,140,0.10)"},children:a.jsx("img",{src:Bn,alt:"जन संवाद",style:{width:"100%",height:"100%",objectFit:"cover"},onError:v=>{v.target.style.display="none",v.target.parentNode.innerHTML='<span style="font-size:22px">⚖️</span>'}})}),a.jsxs("div",{style:{lineHeight:1.25},children:[a.jsx("div",{style:{fontSize:14,fontWeight:700,color:Za,fontFamily:"'Noto Sans Devanagari','Montserrat',sans-serif",letterSpacing:.1,whiteSpace:"nowrap"},children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{style:{fontSize:19,fontWeight:700,color:W4,fontFamily:"'Noto Sans Devanagari','Montserrat',sans-serif",letterSpacing:.2,lineHeight:1.15,whiteSpace:"nowrap"},children:"जन संवाद"}),a.jsx("div",{style:{fontSize:9,fontWeight:600,color:pl,letterSpacing:1.4,textTransform:"uppercase",marginTop:1,whiteSpace:"nowrap"},children:"ADMIN PANEL · VVCMC"})]}),a.jsx("div",{className:"nb-sep",style:{margin:"0 8px 0 14px",height:32}})]}),a.jsxs("div",{className:"nb-search-box",children:[a.jsx(Ho,{size:15,color:Za,style:{flexShrink:0}}),a.jsx("div",{className:"nb-sep"}),a.jsxs("button",{className:"nb-category-btn",children:["All Category ",a.jsx(N4,{size:12})]}),a.jsx("div",{className:"nb-sep"}),a.jsx("input",{className:"nb-search-input",placeholder:"Search here…"})]}),a.jsx("div",{style:{flex:1}}),a.jsx("div",{className:"nb-sep"}),a.jsx(Wl,{variant:"light"}),a.jsx("div",{className:"nb-sep"}),a.jsxs("div",{className:"nb-avatar-wrap",ref:g,children:[a.jsx("div",{onClick:()=>f(v=>!v),children:a.jsx(H4,{name:n?.fullName||n?.userName||"Admin User"})}),p&&a.jsxs("div",{className:"nb-dropdown",children:[a.jsxs("div",{className:"nb-dropdown-user",children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:ul},children:n?.fullName||n?.userName||"Admin User"}),a.jsx("div",{style:{fontSize:11,color:pl,fontWeight:500,marginTop:2},children:n?.role||"Admin"}),n?.departmentName&&a.jsxs("div",{style:{fontSize:11,color:pl,fontWeight:500,marginTop:1},children:["Dept: ",a.jsx("span",{style:{color:Za,fontWeight:600},children:n.departmentName})]})]}),a.jsxs("div",{className:"nb-dropdown-item",children:[a.jsx(k4,{size:14,color:Za}),"Notifications"]}),a.jsxs("div",{className:"nb-dropdown-item",children:[a.jsx(E4,{size:14,color:Za}),"Help"]}),a.jsxs("div",{className:"nb-dropdown-item danger",onClick:y,children:[a.jsx(jp,{size:14}),"Logout"]})]})]})]})]})},ox="#187484",$4="#0d4f5c",na="#CE9A54",Ki=["Super Admin","Guardian Minister","Mayor","Admin"];function I4(){const n=Ro(),o=vt(),{user:s}=Gl(T=>T.auth),{mode:l,setMode:d}=i1(),[p,f]=b.useState(window.innerWidth<768);if(b.useEffect(()=>{const T=()=>f(window.innerWidth<768);return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]),!s)return null;const h=()=>{n(hb()),o("/login")},x=()=>d("open"),g=()=>d("collapsed"),y=l==="open",v=!y;return a.jsxs(a.Fragment,{children:[p&&y&&a.jsx("div",{onClick:g,style:{position:"fixed",inset:0,zIndex:90}}),a.jsxs("aside",{style:{width:y?230:64,minHeight:"100vh",background:`linear-gradient(175deg, ${ox} 0%, ${$4} 100%)`,display:"flex",flexDirection:"column",transition:"width 0.3s ease",overflow:"visible",boxShadow:"4px 0 24px rgba(13,79,92,0.35)",position:p?"fixed":"relative",top:0,left:0,zIndex:p?100:"auto",height:p?"100vh":"auto",flexShrink:0,fontFamily:"'Montserrat','Noto Sans Devanagari','Segoe UI',sans-serif"},children:[a.jsx("div",{style:{position:"absolute",top:-40,right:-40,width:130,height:130,borderRadius:"50%",background:"rgba(255,255,255,0.06)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:120,left:-30,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:-20,right:-20,width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.05)",pointerEvents:"none"}}),a.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');

          .sb-link {
            display: flex; align-items: center; gap: 12px;
            border-radius: 12px;
            // padding: 10px 16px;
            // margin: 2px 10px;

            padding: 10px 16px 10px 11px;  /* left padding 16 → 11px */
            margin: 2px 10px 2px 5px;
            text-decoration: none; color: #D1E5E9;
            font-size: 14px; font-weight: 500;
            font-family: 'Montserrat','Segoe UI',sans-serif;
            transition: all 200ms ease; border-left: 3px solid transparent;
            white-space: nowrap; overflow: hidden;
          }
          .sb-link:hover  { background: rgba(255,255,255,0.10); color:#FFFFFF; }
          .sb-link.active {
            background: rgba(255,255,255,0.16); color:#FFFFFF;
            font-size: 14px; font-weight:700;
            border-left: 3px solid ${na};
            box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.14);
          }
          .sb-link .sb-label {
            display: block; max-width: 150px; min-width: 0;
            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
          }
          .sb-link .sb-icon        { flex-shrink:0; opacity:0.8; color:inherit; transition: all 200ms ease; }
          .sb-link:hover .sb-icon,
          .sb-link.active .sb-icon { opacity:1; color:#FFFFFF; }

          .sb-link-collapsed {
            display: flex; align-items: center; justify-content: center;
            padding: 10px 0; border-radius: 12px; margin: 2px 8px;
            text-decoration: none; color: #D1E5E9;
            transition: all 200ms ease; border-left: 3px solid transparent;
          }
          .sb-link-collapsed:hover  { background: rgba(255,255,255,0.10); color:#FFFFFF; }
          .sb-link-collapsed.active {
            background: rgba(255,255,255,0.16); color:#FFFFFF;
            border-left: 3px solid ${na};
            box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.14);
          }

          .sb-pill-btn {
            position: absolute; top: 50%; right: -14px;
            transform: translateY(-50%);
            width: 28px; height: 28px; border-radius: 50%;
            background: ${ox};
            border: 2px solid rgba(255,255,255,0.3);
            box-shadow: 0 2px 10px rgba(13,79,92,0.5);
            color: #fff; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: background 0.2s; z-index: 60;
          }
          .sb-pill-btn:hover { background: ${na}; border-color: ${na}; }
        `}),y&&a.jsx("button",{className:"sb-pill-btn",onClick:g,title:"Collapse sidebar",children:a.jsx(C4,{size:14})}),v&&a.jsx("button",{className:"sb-pill-btn",onClick:x,title:"Expand sidebar",children:a.jsx(T4,{size:14})}),y?a.jsxs("div",{style:{padding:"24px 18px 18px",paddingTop:p?"46px":"24px",display:"flex",flexDirection:"column",alignItems:"center",gap:6,overflow:"hidden"},children:[a.jsxs("div",{style:{color:`${na}dd`,fontSize:15,fontWeight:700,fontFamily:"'Montserrat','Noto Sans Devanagari',sans-serif",whiteSpace:"nowrap",letterSpacing:.1,lineHeight:1.3,textAlign:"center"},children:["वसई-विरार शहर",a.jsx("br",{}),"महानगरपालिका"]}),a.jsx("div",{style:{color:"#fff",fontSize:21,fontWeight:800,fontFamily:"'Montserrat','Noto Sans Devanagari',sans-serif",whiteSpace:"nowrap",letterSpacing:.3,lineHeight:1,textShadow:`0 2px 10px ${na}55`,textAlign:"center"},children:"जन संवाद"}),a.jsx("div",{style:{width:140,height:140,borderRadius:"5%",background:`linear-gradient(135deg,${na},#b8832e)`,boxShadow:`0 4px 14px ${na}88`,overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("img",{src:Bn,alt:"VVCMC",style:{width:"100%",height:"100%",objectFit:"cover"},onError:T=>{T.target.style.display="none",T.target.parentNode.innerHTML='<span style="font-size:24px">⚖️</span>'}})})]}):a.jsx("div",{style:{width:"100%",padding:"20px 0",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("div",{style:{width:40,height:40,borderRadius:10,background:`linear-gradient(135deg,${na},#b8832e)`,boxShadow:`0 4px 14px ${na}77`,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("img",{src:Bn,alt:"जन संवाद",style:{width:"100%",height:"100%",objectFit:"cover"},onError:T=>{T.target.style.display="none",T.target.parentNode.innerHTML='<span style="font-size:18px">⚖️</span>'}})})}),a.jsx("div",{style:{margin:"0 16px 10px",borderTop:"1px solid rgba(255,255,255,0.1)"}}),a.jsx("nav",{style:{flex:1,display:"flex",flexDirection:"column",gap:2,paddingTop:4,overflowY:"auto",overflowX:"hidden"},children:y?a.jsxs(a.Fragment,{children:[a.jsxs(Yt,{to:"/dashboard",title:"Dashboard",className:({isActive:T})=>`sb-link${T?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(J0,{size:18})}),a.jsx("span",{className:"sb-label",children:"Dashboard"})]}),a.jsxs(Yt,{to:"/meetings",title:"Meetings",className:({isActive:T})=>`sb-link${T?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(Ra,{size:18})}),a.jsx("span",{className:"sb-label",children:"Meetings"})]}),Ki.includes(s?.role)&&a.jsxs(Yt,{to:"/availability",title:"Availability",className:({isActive:T})=>`sb-link${T?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(Ra,{size:18})}),a.jsx("span",{className:"sb-label",children:"Availability"})]}),a.jsxs(Yt,{to:"/allapplication",title:"Applications",className:({isActive:T})=>`sb-link${T?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(bo,{size:18})}),a.jsx("span",{className:"sb-label",children:"Applications"})]}),Ki.includes(s?.role)&&a.jsxs(Yt,{to:"/allapplicationcitizens",title:"Appointment Applications",className:({isActive:T})=>`sb-link${T?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(bo,{size:18})}),a.jsx("span",{className:"sb-label",children:"Appointment Applications"})]}),Ki.includes(s?.role)&&a.jsxs(Yt,{to:"/users",title:"Users",className:({isActive:T})=>`sb-link${T?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(Z0,{size:18})}),a.jsx("span",{className:"sb-label",children:"Users"})]}),Ki.includes(s?.role)&&a.jsxs(Yt,{to:"/corporators",title:"Corporators & Office Bearers",className:({isActive:T})=>`sb-link${T?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(wp,{size:18})}),a.jsx("span",{className:"sb-label",style:{whiteSpace:"normal",lineHeight:1.25},children:"Corporators & Office Bearers"})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Yt,{to:"/dashboard",className:({isActive:T})=>`sb-link-collapsed${T?" active":""}`,children:a.jsx(J0,{size:18})}),a.jsx(Yt,{to:"/availability",className:({isActive:T})=>`sb-link-collapsed${T?" active":""}`,children:a.jsx(Ra,{size:18})}),a.jsx(Yt,{to:"/allapplication",className:({isActive:T})=>`sb-link-collapsed${T?" active":""}`,children:a.jsx(bo,{size:18})}),a.jsx(Yt,{to:"/allapplicationcitizens",className:({isActive:T})=>`sb-link-collapsed${T?" active":""}`,children:a.jsx(bo,{size:18})}),Ki.includes(s?.role)&&a.jsx(Yt,{to:"/users",className:({isActive:T})=>`sb-link-collapsed${T?" active":""}`,children:a.jsx(Z0,{size:18})}),Ki.includes(s?.role)&&a.jsx(Yt,{to:"/corporators",title:"Corporators & Office Bearers",className:({isActive:T})=>`sb-link-collapsed${T?" active":""}`,children:a.jsx(wp,{size:18})})]})}),a.jsxs("div",{style:{marginTop:"auto"},children:[a.jsx("div",{style:{margin:"6px 16px",borderTop:"1px solid rgba(255,255,255,0.1)"}}),a.jsx("div",{style:{padding:y?"10px 16px 20px":"10px 0 20px"},children:y?a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",flexShrink:0,background:`linear-gradient(135deg,${na},#b8832e)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:900,boxShadow:`0 3px 10px ${na}66`,fontFamily:"'Montserrat',sans-serif"},children:(s?.fullName||s?.userName||"A")[0].toUpperCase()}),a.jsxs("div",{style:{overflow:"hidden"},children:[a.jsx("div",{style:{color:"#fff",fontSize:14,fontWeight:700,lineHeight:1.2,fontFamily:"'Montserrat',sans-serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:130},children:s?.fullName||s?.userName||"Admin User"}),a.jsx("div",{style:{color:"#B8D5DB",fontSize:11,fontWeight:500,fontFamily:"'Montserrat',sans-serif"},children:s?.role})]})]}),s?.departmentName&&a.jsxs("div",{style:{fontSize:10.5,color:"rgba(255,255,255,0.45)",fontWeight:600,marginBottom:10,paddingLeft:2},children:["Dept: ",a.jsx("span",{style:{color:"rgba(255,255,255,0.75)",fontWeight:700},children:s.departmentName})]}),p&&a.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10},children:a.jsx(Wl,{variant:"dark"})}),a.jsxs("button",{onClick:h,style:{width:"100%",background:"rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.85)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"8px",fontSize:12,fontWeight:600,cursor:"pointer",letterSpacing:.8,textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",gap:7,transition:"all 200ms ease",fontFamily:"'Montserrat',sans-serif"},onMouseEnter:T=>{T.currentTarget.style.background="rgba(220,50,50,0.3)",T.currentTarget.style.borderColor="rgba(220,50,50,0.4)"},onMouseLeave:T=>{T.currentTarget.style.background="rgba(255,255,255,0.1)",T.currentTarget.style.borderColor="rgba(255,255,255,0.2)"},children:[a.jsx(jp,{size:13})," Logout"]})]}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:`linear-gradient(135deg,${na},#b8832e)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:900},children:(s?.fullName||s?.userName||"A")[0].toUpperCase()}),a.jsx("button",{onClick:h,style:{background:"transparent",border:"none",cursor:"pointer",color:"rgba(255,255,255,0.5)",padding:6,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 200ms ease"},onMouseEnter:T=>T.currentTarget.style.color="#fff",onMouseLeave:T=>T.currentTarget.style.color="rgba(255,255,255,0.5)",children:a.jsx(jp,{size:17})})]})})]})]})]})}function Y4(){return a.jsx(D4,{children:a.jsxs("div",{style:{display:"flex",minHeight:"100vh",position:"relative"},children:[a.jsx("div",{style:{position:"sticky",top:0,height:"100vh",zIndex:50,flexShrink:0},children:a.jsx(I4,{})}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[a.jsx("div",{style:{position:"sticky",top:0,zIndex:40},className:"hidden md:block",children:a.jsx(P4,{})}),a.jsx("div",{style:{flex:1,overflowY:"auto",background:"#f3f4f6"},children:a.jsx(Vv,{})})]})]})})}const sx={"Guardian Minister Office":"Guardian Minister","Collector Office":"Collector","Zilla Parishad Office":"CEO","Mahanagarpalika Office":"Municipal Commissioner","Nagar Palika Office":"Chief Officer","Grampanchayat Office":"Sarpanch"},lx={"Guardian Minister Office":{},"Collector Office":{Administrative:"Deputy Collector","Health & Social Welfare":"Deputy Collector","Rural & Development":"Deputy Collector","Infrastructure & Utilities":"Deputy Collector","Supply & Control":"Deputy Collector","Governance & Law":"Deputy Collector",Education:"Deputy Collector","Finance & Audit":"Deputy Collector"},"Zilla Parishad Office":{"Rural Development":"Deputy CEO",Education:"Deputy CEO",Health:"Deputy CEO","Agriculture & Allied Services":"Deputy CEO","Water & Sanitation":"Deputy CEO","Social Welfare":"Deputy CEO","Engineering & Works":"Deputy CEO","Finance & Accounts":"Deputy CEO","Planning & Statistics":"Deputy CEO","Supply & Food":"Deputy CEO"},"Mahanagarpalika Office":{"Revenue & Tax":"Additional Commissioner","Health & Sanitation":"Additional Commissioner","Water & Sewerage":"Additional Commissioner","Engineering & Works":"Additional Commissioner",Administration:"Additional Commissioner","Accounts & Finance":"Additional Commissioner"},"Nagar Palika Office":{"Revenue & Tax":"Deputy Chief Officer","Health & Sanitation":"Deputy Chief Officer","Water & Sewerage":"Deputy Chief Officer","Engineering & Works":"Deputy Chief Officer",Administration:"Deputy Chief Officer","Accounts & Finance":"Deputy Chief Officer"},"Grampanchayat Office":{Administration:"Gram Sevak","Water & Sanitation":"Gram Sevak","Village Development":"Gram Sevak","Health & Welfare":"Gram Sevak","Agriculture & Allied":"Gram Sevak","Finance & Accounts":"Gram Sevak"}},V4={"Guardian Minister Office":[],"Collector Office":["Administrative","Health & Social Welfare","Rural & Development","Infrastructure & Utilities","Supply & Control","Governance & Law","Education","Finance & Audit"],"Zilla Parishad Office":["Rural Development","Education","Health","Agriculture & Allied Services","Water & Sanitation","Social Welfare","Engineering & Works","Finance & Accounts","Planning & Statistics","Supply & Food"],"Mahanagarpalika Office":["Revenue & Tax","Health & Sanitation","Water & Sewerage","Engineering & Works","Administration","Accounts & Finance"],"Nagar Palika Office":["Revenue & Tax","Health & Sanitation","Water & Sewerage","Engineering & Works","Administration","Accounts & Finance"],"Grampanchayat Office":["Administration","Water & Sanitation","Village Development","Health & Welfare","Agriculture & Allied","Finance & Accounts"]},fl=({label:n,name:o,value:s,onChange:l,type:d="text"})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:n}),a.jsx("input",{type:d,name:o,value:s,onChange:l,className:"w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"})]}),cx=({label:n,name:o,value:s,onChange:l})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:n}),a.jsx("textarea",{name:o,value:s,onChange:l,rows:"3",className:"w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"})]}),qu=({label:n,name:o,value:s,onChange:l,options:d,disabled:p=!1})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:n}),a.jsxs("select",{name:o,value:s,onChange:l,disabled:p,className:`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${p?"bg-gray-100 cursor-not-allowed":""}`,children:[a.jsxs("option",{value:"",children:["Select ",n]}),d.map((f,h)=>a.jsx("option",{value:f,children:f},h))]})]}),dx=({title:n})=>a.jsx("div",{className:"mb-4 mt-6 first:mt-0",children:a.jsx("h3",{className:"text-sm font-semibold text-blue-700 uppercase tracking-wider border-b border-blue-100 pb-2",children:n})});function Gu(n){const o=new Date().toISOString().split("T")[0];return{inwardNo:(()=>{const l=new Date;return`JD/${l.getFullYear()}/${String(l.getMonth()+1).padStart(2,"0")}/${String(l.getDate()).padStart(2,"0")}/${Math.floor(100+Math.random()*900)}`})(),submissionDate:o,fullName:n?.fullName||"",mobile:n?.mobile||"",email:n?.email||"",address:n?.address||"",pincode:n?.pincode||"",wardNo:n?.wardNo||"",ward:n?.ward||n?.wardNo||"",existingPhotoUrl:n?.visitorPhoto||"",category:"",identityType:"",identityNumber:"",taluka:"",district:"",subject:"",description:"",office:"Mahanagarpalika Office",mainDepartment:"",subDepartment:"",priority:"Normal",tagTo:[],followUp:"Yes",documents:null,status:"Pending",visitorPhoto:null,photoPreview:null}}function d1({onClose:n,prefillData:o}){const s=vt(),l=n||(()=>s(-1)),[d,p]=b.useState(!1),[f,h]=b.useState(""),x=b.useRef(null),g=b.useRef(null),y=b.useRef(null),v=b.useRef(null),T=b.useRef(null),R=b.useRef(null),[k,z]=b.useState(!1),[M,E]=b.useState(""),[S,A]=b.useState(()=>Gu(o));b.useEffect(()=>{o&&A(Gu(o))},[]);const[P,X]=b.useState([]),[D,W]=b.useState([]);b.useEffect(()=>{(async()=>{try{const j=await Ue.get("/getUsers");if(console.log("res>>>>>>>>",j.data),j.data.success){const C=j.data.users;W(C);const q=[...new Set(j.data.users.map(oe=>oe.departmentName).filter(Boolean))];X(q)}}catch(j){console.error("Department fetch error:",j)}})()},[]);const V=["Ward-A","Ward-B","Ward-C","Ward-D","Ward-E","Ward-F","Ward-G","Ward-H","Ward-I","General"],de=B=>{const{name:j,value:C}=B.target;A({...S,[j]:C})},he=B=>{const{value:j,checked:C}=B.target;if(C){const q=sx[S.office],oe=lx[S.office]?.[S.mainDepartment],I=j===oe&&q&&q!==j?[q]:[],ge=[...new Set([...S.tagTo,...I,j])];A({...S,tagTo:ge})}else A({...S,tagTo:S.tagTo.filter(q=>q!==j)})},J=async()=>{h("");try{const B=await navigator.mediaDevices.getUserMedia({video:!0});y.current=B,p(!0),setTimeout(()=>{x.current&&(x.current.srcObject=B,x.current.play())},100)}catch{h("Camera access denied. Please allow camera permission.")}},pe=()=>{const B=x.current,j=g.current;!B||!j||(j.width=B.videoWidth,j.height=B.videoHeight,j.getContext("2d").drawImage(B,0,0),j.toBlob(C=>{const q=new File([C],`captured-photo-${Date.now()}.jpg`,{type:"image/jpeg"});A({...S,documents:q}),$()},"image/jpeg"))},$=()=>{y.current&&(y.current.getTracks().forEach(B=>B.stop()),y.current=null),p(!1)},me=async()=>{E("");try{const B=await navigator.mediaDevices.getUserMedia({video:!0});R.current=B,z(!0),setTimeout(()=>{v.current&&(v.current.srcObject=B,v.current.play())},100)}catch{E("Camera access denied. Please allow camera permission.")}},we=()=>{const B=v.current,j=T.current;!B||!j||(j.width=B.videoWidth,j.height=B.videoHeight,j.getContext("2d").drawImage(B,0,0),j.toBlob(C=>{const q=new File([C],`visitor-photo-${Date.now()}.jpg`,{type:"image/jpeg"}),oe=URL.createObjectURL(C);A(I=>({...I,visitorPhoto:q,photoPreview:oe})),F()},"image/jpeg"))},F=()=>{R.current&&(R.current.getTracks().forEach(B=>B.stop()),R.current=null),z(!1)},ie=(B,j)=>{const C="https://jansamvad.saavi.co.in";B.forEach(q=>{const oe=D.filter(I=>I.departmentName===q&&I.mobileNumber);oe.length!==0&&oe.forEach(I=>{const ge=I.mobileNumber.replace(/\D/g,"");if(ge.length<10)return;const be=`******${ge.slice(-4)}`;Ue.post("/sendWhatsApp",{mobile:ge,userName:I.userName||"Officer",tokenNo:j,deptName:q,portalLink:C,displayMobile:be}).then(ke=>console.log(`✅ WhatsApp sent to ${I.fullName}`,ke.data)).catch(ke=>console.error(`❌ Error for ${I.fullName}`,ke))})})},fe=(B,j)=>{const C="https://jansamvad.saavi.co.in";B.forEach(q=>{const oe=D.filter(I=>I.departmentName===q&&I.mobileNumber);if(oe.length===0){console.warn(`No users found for department: ${q}`);return}oe.forEach(I=>{const ge=I.mobileNumber.replace(/\D/g,""),be=I.userName;if(ge.length<10){console.warn(`Invalid mobile: ${I.fullName}`);return}const ke=`******${ge.slice(-4)}`,Ce=`Hello ${be}, A new complaint has been assigned to you. Token No: ${j} Department: ${q} Please login to the portal using OTP Login: ${C} Your OTP will be sent to your registered mobile number ${ke}. Note: Do not Register. Use OTP Login only. SAAVI INFINET`,Ke=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379323&number=${ge}&message=${encodeURIComponent(Ce)}`;fetch(Ke,{method:"GET",mode:"no-cors"}).then(()=>console.log(`✅ SMS sent to ${I.fullName} (${ke})`)).catch(et=>console.error(`❌ SMS error for ${I.fullName}:`,et))})})},K=async B=>{B.preventDefault();try{if(!S.fullName||!S.mobile||!S.subject){ye.error("Required fields missing: Full Name, Mobile, and Subject are required");return}if(!S.documents){ye.error("Document file is required. Please upload a file before submitting.");return}const j=localStorage.getItem("authUser"),C=j?JSON.parse(j):null,q=new FormData;Object.keys(S).forEach(be=>{be==="documents"||be==="visitorPhoto"||be==="photoPreview"||(Array.isArray(S[be])?q.append(be,JSON.stringify(S[be])):S[be]!==null&&S[be]!==void 0&&q.append(be,S[be]))}),S.documents&&q.append("documents",S.documents),S.visitorPhoto&&typeof S.visitorPhoto!="string"&&q.append("visitorPhoto",S.visitorPhoto),C&&(q.append("submittedById",C.id||""),q.append("submittedByName",C.fullName||""),q.append("submittedByRole",C.role||""),q.append("submittedByUserName",C.userName||""),q.append("submittedByDept",C.departmentName||"")),o?._tokenId&&q.append("existingTokenNo",o._tokenId);const I=(await Ue.post("/inwardAdd",q,{headers:{"Content-Type":"multipart/form-data"}})).data;if(!I.success){ye.error(I.message||"Something went wrong");return}const ge=o?._tokenId||I.tokenNo;ye.success(`✅ Application submitted successfully!
Token Number: ${ge}`),n&&n(),S.tagTo.length>0&&(fe(S.tagTo,ge),ie(S.tagTo,ge)),A(Gu(null))}catch(j){alert(j?.response?.data?.message||"Server Error")}};return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",children:a.jsxs("div",{className:"bg-white shadow-2xl rounded-xl w-full max-w-3xl max-h-[95vh] flex flex-col",children:[a.jsxs("div",{className:"px-8 py-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold text-gray-800",children:"Application Form"}),o&&a.jsxs("p",{className:"text-xs text-blue-600 font-semibold mt-0.5",children:["✅ Pre-filled from token: ",a.jsx("span",{className:"font-bold",children:o._tokenId})]})]}),a.jsx("button",{onClick:l,className:"w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors text-sm",children:"✕"})]}),a.jsx("div",{className:"px-8 py-6 overflow-y-auto flex-1",children:a.jsxs("form",{onSubmit:K,children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6",children:[a.jsx(fl,{label:"Mobile",name:"mobile",value:S.mobile,onChange:de}),a.jsx(fl,{label:"Full Name",name:"fullName",value:S.fullName,onChange:de}),a.jsx(fl,{label:"Email",name:"email",value:S.email,onChange:de}),a.jsx(qu,{label:"Category",name:"category",value:S.category,onChange:de,options:["Company","NGO","Individual","Other"]})]}),a.jsx(cx,{label:"Address",name:"address",value:S.address,onChange:de}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6",children:a.jsx(qu,{label:"Ward",name:"ward",value:S.ward,onChange:de,options:V})}),a.jsx(fl,{label:"Complaint Subject",name:"subject",value:S.subject,onChange:de}),a.jsx(cx,{label:"Complaint Description",name:"description",value:S.description,onChange:de}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-2",children:"Assign to Department"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50",children:P.map((B,j)=>a.jsxs("label",{className:"flex items-center gap-2 bg-white p-2 rounded-lg border cursor-pointer hover:bg-blue-50 text-sm",children:[a.jsx("input",{type:"checkbox",value:B,checked:S.tagTo.includes(B),onChange:he,className:"accent-blue-600 w-4 h-4"}),a.jsx("span",{children:B})]},j))})]}),(S.mainDepartment||(V4[S.office]||[]).length===0)&&a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-2",children:"Tag To (Authority)"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[sx[S.office],lx[S.office]?.[S.mainDepartment]].filter(Boolean).filter((B,j,C)=>C.indexOf(B)===j).map((B,j)=>a.jsxs("label",{className:"flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border cursor-pointer hover:bg-blue-50",children:[a.jsx("input",{type:"checkbox",value:B,checked:S.tagTo.includes(B),onChange:he,className:"accent-blue-600 w-4 h-4"}),a.jsx("span",{className:"text-sm",children:B})]},j))})]}),a.jsx(qu,{label:"Priority",name:"priority",value:S.priority,onChange:de,options:["Low","Medium","High"]}),a.jsx(dx,{title:"Visitor Photo"}),S.existingPhotoUrl&&!S.photoPreview&&a.jsxs("div",{className:"mb-4 p-4 border-2 border-green-300 rounded-lg bg-green-50 text-center",children:[a.jsx("p",{className:"text-xs font-semibold text-green-700 uppercase tracking-widest mb-2",children:"✅ Token वरून Photo मिळाला"}),a.jsx("img",{src:S.existingPhotoUrl.startsWith("http")?S.existingPhotoUrl:`${Ue.defaults.baseURL?.replace("/api","")||""}/${S.existingPhotoUrl.replace(/\\/g,"/")}`,alt:"existing visitor",className:"w-24 h-24 rounded-full object-cover border-4 border-green-400 mx-auto mb-2 shadow-md",onError:B=>{B.target.style.display="none"}}),a.jsx("p",{className:"text-green-700 text-sm font-semibold",children:"Citizen चा photo"}),a.jsx("p",{className:"text-gray-400 text-xs mt-1",children:"बदलायचा असेल तरच खाली Upload/Camera वापरा"})]}),a.jsxs("div",{className:"flex gap-3 mb-4",children:[a.jsxs("label",{className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition",children:["📁 ",S.existingPhotoUrl?"Photo बदला":"Upload Photo",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:B=>{const j=B.target.files[0];j&&A(C=>({...C,visitorPhoto:j,photoPreview:URL.createObjectURL(j)}))}})]}),a.jsx("button",{type:"button",onClick:me,className:"flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-700 bg-white text-sm font-semibold rounded-lg hover:bg-blue-50 transition",children:"📷 Use Camera"})]}),k?a.jsxs("div",{className:"mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black",children:[a.jsx("button",{type:"button",onClick:F,className:"absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg",children:"✕"}),a.jsx("video",{ref:v,autoPlay:!0,playsInline:!0,className:"w-full",style:{maxHeight:"300px",objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:T,className:"hidden"}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center",children:a.jsx("button",{type:"button",onClick:we,className:"px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg",children:"📸 Capture Photo"})})]}):S.photoPreview?a.jsxs("div",{className:"mb-4 p-4 border-2 border-blue-300 rounded-lg bg-blue-50 text-center",children:[a.jsx("img",{src:S.photoPreview,alt:"new visitor",className:"w-24 h-24 rounded-full object-cover border-4 border-blue-400 mx-auto mb-2 shadow-md"}),a.jsx("p",{className:"text-blue-700 text-sm font-semibold",children:"✅ नवीन Photo निवडला"}),a.jsx("p",{className:"text-gray-400 text-xs mt-1",children:S.existingPhotoUrl?"हा जुन्या photo ऐवजी वापरला जाईल":'Click "Photo बदला" to change'})]}):S.existingPhotoUrl?null:a.jsxs("div",{className:"mb-4 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 text-center",children:[a.jsx("div",{className:"text-4xl mb-2 text-blue-300",children:"📷"}),a.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"Upload करा किंवा camera वापरा"})]}),M&&a.jsx("p",{className:"text-red-600 text-xs mb-2",children:M}),a.jsx(dx,{title:"Documents"}),d?a.jsxs("div",{className:"mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black",children:[a.jsx("button",{type:"button",onClick:$,className:"absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg",children:"✕"}),a.jsx("video",{ref:x,autoPlay:!0,playsInline:!0,className:"w-full",style:{maxHeight:"360px",objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:g,className:"hidden"}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center",children:a.jsx("button",{type:"button",onClick:pe,className:"px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg",children:"📸 Capture Photo"})})]}):a.jsx("div",{className:"mb-4 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50",children:a.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-3",children:[a.jsx("input",{type:"file",onChange:B=>A(j=>({...j,documents:B.target.files[0]})),className:"flex-1 text-sm"}),a.jsx("button",{type:"button",onClick:J,className:"flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 whitespace-nowrap",children:"📷 Camera"})]})}),f&&a.jsx("p",{className:"text-red-600 text-xs mb-2",children:f}),S.documents?a.jsxs("div",{className:"bg-green-50 border border-green-300 rounded-lg p-3 mb-4",children:[a.jsxs("p",{className:"text-green-800 text-sm font-medium",children:["✅ File Selected: ",S.documents.name]}),a.jsxs("p",{className:"text-green-700 text-xs",children:["Size: ",(S.documents.size/1024).toFixed(2)," KB"]})]}):a.jsx("div",{className:"bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4",children:a.jsx("p",{className:"text-yellow-800 text-sm",children:"Please upload a file to proceed with submission"})}),a.jsx("div",{className:"pt-2 pb-2",children:a.jsx("button",{type:"submit",disabled:!S.documents,className:`w-full py-3 rounded-lg text-white font-semibold text-sm transition ${S.documents?"bg-green-600 hover:bg-green-700 cursor-pointer":"bg-gray-300 cursor-not-allowed opacity-60"}`,children:S.documents?"✔ Submit Application":"Upload Document to Submit"})})]})})]})})}const H={bg:"#f0f4f0",white:"#fff",dark:"#1a4a2e",green:"#1a7a4a",greenLight:"#e8f5ee",greenBadge:"#d4edda",greenBorder:"#c8e0cc",muted:"#5a7a6a",rowHover:"#f8fdf8",rowBorder:"#eef4ee",red:"#c0392b",redLight:"#fdecea"},ux={Pending:{bg:"#fff8e1",color:"#b26a00",border:"#ffe082",dot:"#f59e0b",label:"Pending"},Resolved:{bg:H.greenLight,color:H.green,border:"#a8d5b5",dot:"#22c55e",label:"Resolved"},Rejected:{bg:H.redLight,color:H.red,border:"#f5c6cb",dot:H.red,label:"Rejected"},"In Progress":{bg:"#e8f0fe",color:"#1a4a8a",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"}};function dc(n){return ux[n]||ux.Pending}const Hl={Normal:{color:H.muted,bg:"#f0f4f0",border:H.greenBorder},Urgent:{color:"#b26a00",bg:"#fff8e1",border:"#ffe082"},Emergency:{color:H.red,bg:H.redLight,border:"#f5c6cb"},High:{color:H.red,bg:H.redLight,border:"#f5c6cb"}},px=["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];function u1(n){let o=0;for(let s=0;s<(n||"").length;s++)o=n.charCodeAt(s)+((o<<5)-o);return px[Math.abs(o)%px.length]}function p1(n){return n?n.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2):"?"}function Qp(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"}function f1({status:n}){const o=dc(n);return a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:700,background:o.bg,color:o.color,border:`1px solid ${o.border}`,whiteSpace:"nowrap"},children:[a.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:o.dot,display:"inline-block"}}),o.label]})}function g1({priority:n}){const o=Hl[n]||Hl.Normal;return a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 9px",borderRadius:8,fontSize:11,fontWeight:700,background:o.bg,color:o.color,border:`1px solid ${o.border}`},children:[n==="Urgent"||n==="Emergency"||n==="High"?"🔴":"⚪"," ",n]})}function q4({app:n,onReply:o,onView:s}){dc(n.status);const l=u1(n.fullName);return a.jsxs("div",{style:{background:H.white,borderRadius:12,border:`1.5px solid ${H.greenBorder}`,padding:"14px 16px",marginBottom:10,boxShadow:"0 1px 6px rgba(0,0,0,0.06)"},onClick:()=>s(n),children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:l,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:14,flexShrink:0},children:p1(n.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:14,fontWeight:700,color:H.dark},children:n.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:12,color:H.muted},children:n.mobile||"—"})]})]}),a.jsx(f1,{status:n.status})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8,flexWrap:"wrap"},children:[a.jsx("span",{style:{background:H.greenLight,color:H.green,borderRadius:6,padding:"2px 9px",fontSize:11,fontWeight:700,fontFamily:"monospace"},children:n.tokenNo||"—"}),n.status!=="Resolved"&&n.priority&&a.jsx(g1,{priority:n.priority})]}),n.subject&&a.jsx("p",{style:{margin:"0 0 8px",fontSize:13,color:H.dark,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.subject}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"3px 10px",fontSize:11,color:H.muted,marginBottom:12},children:[n.mainDepartment&&a.jsxs("span",{children:["🏢 ",n.mainDepartment]}),n.submissionDate&&a.jsxs("span",{children:["📅 ",Qp(n.submissionDate)]}),n.submittedByName&&a.jsxs("span",{children:["👤 ",n.submittedByName]})]}),a.jsxs("div",{style:{display:"flex",gap:8},onClick:d=>d.stopPropagation(),children:[a.jsx("button",{onClick:()=>o(n),style:{flex:1,background:H.greenLight,border:`1.5px solid ${H.green}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:H.green,fontSize:13,fontWeight:700},children:"📨 Reply"}),a.jsx("button",{onClick:()=>s(n),style:{flex:1,background:"#f8fdf8",border:`1.5px solid ${H.greenBorder}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:H.dark,fontSize:13,fontWeight:600},children:"👁 View"}),n.documents&&a.jsx("a",{href:n.documents,target:"_blank",rel:"noreferrer",style:{flex:1,background:H.greenLight,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:H.green,fontSize:13,fontWeight:600,textDecoration:"none",textAlign:"center"},children:"📄 Doc"})]})]})}function G4({onClose:n,onProceed:o}){const[s,l]=b.useState(null),[d,p]=b.useState(""),[f,h]=b.useState(!1),[x,g]=b.useState(""),[y,v]=b.useState(null),T=async()=>{if(!d.trim()){g("कृपया Token Number टाका.");return}h(!0),g(""),v(null);try{const k=await Ue.get(`/citizen/appointment/token/${d.trim()}`);k.data.success&&k.data.appointment?v(k.data.appointment):g("Token सापडले नाही ❌")}catch(k){g(k?.response?.data?.message||"Token fetch करताना error आला ❌")}finally{h(!1)}},R=()=>{if(s==="yes"){if(!y){g("आधी Token Fetch करा.");return}o(y)}else o(null)};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)",padding:16},children:a.jsxs("div",{style:{background:H.white,borderRadius:16,width:"100%",maxWidth:440,maxHeight:"92vh",overflowY:"auto",boxShadow:"0 8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:`2px solid ${H.greenBadge}`,background:H.greenLight,borderRadius:"16px 16px 0 0"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:H.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"New Application"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:18,fontWeight:700,color:H.dark},children:"Token आहे का?"})]}),a.jsx("button",{onClick:n,style:{background:H.white,border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18,color:H.dark},children:"✕"})]}),a.jsxs("div",{style:{padding:20},children:[a.jsx("p",{style:{margin:"0 0 14px",fontSize:13,fontWeight:600,color:H.muted},children:"Already have token? (Citizen ने आधी appointment घेतली आहे का?)"}),a.jsx("div",{style:{display:"flex",gap:10,marginBottom:16},children:[["yes","✅ Yes"],["no","❌ No"]].map(([k,z])=>a.jsx("button",{onClick:()=>{l(k),g(""),v(null),p("")},style:{flex:1,padding:"10px 0",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",border:`1.5px solid ${H.greenBorder}`,transition:"all .15s",background:s===k?k==="yes"?H.green:H.dark:H.white,color:s===k?"#fff":H.muted},children:z},k))}),s==="yes"&&a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:.4},children:"Token Number"}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("input",{type:"text",placeholder:"e.g. VVCMC-20260323-0008",value:d,onChange:k=>{p(k.target.value),g(""),v(null)},onKeyDown:k=>{k.key==="Enter"&&T()},style:{flex:1,padding:"9px 12px",fontSize:13,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,outline:"none",color:H.dark,background:"#f8fdf8",fontFamily:"'Segoe UI', sans-serif",minWidth:0}}),a.jsx("button",{onClick:T,disabled:f,style:{padding:"9px 14px",background:f?"#888":H.green,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:f?"not-allowed":"pointer",flexShrink:0},children:f?"...":"🔍 Fetch"})]}),x&&a.jsx("p",{style:{color:H.red,fontSize:12,marginTop:6,fontWeight:600},children:x}),y&&a.jsxs("div",{style:{marginTop:12,background:H.greenLight,border:`1.5px solid ${H.greenBorder}`,borderRadius:10,padding:"12px 14px"},children:[a.jsx("p",{style:{fontSize:11,fontWeight:700,color:H.green,textTransform:"uppercase",letterSpacing:1,marginBottom:8},children:"✅ Citizen सापडला"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px 14px",fontSize:12},children:[["Name",y.fullName],["Mobile",y.mobileNumber],["Token",y.tokenId],["Ward",y.ward],["Date",y.preferredDate],["Slot",y.microSlot||y.slotTime]].map(([k,z])=>a.jsxs("div",{children:[a.jsx("span",{style:{color:H.muted,fontSize:11},children:k}),a.jsx("p",{style:{margin:"2px 0 0",fontWeight:700,color:H.dark},children:z||"--"})]},k))})]})]}),s==="no"&&a.jsx("div",{style:{background:"#f8fdf8",border:`1.5px solid ${H.greenBorder}`,borderRadius:10,padding:"12px 14px",fontSize:13,color:H.muted,marginBottom:14},children:"📝 रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल."}),s!==null&&a.jsxs("div",{style:{display:"flex",gap:10,marginTop:8},children:[a.jsx("button",{onClick:n,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"11px 0",fontWeight:600,cursor:"pointer",color:H.dark,fontSize:13},children:"Cancel"}),a.jsx("button",{onClick:R,disabled:s==="yes"&&!y,style:{flex:2,background:s==="yes"&&!y?"#888":H.green,color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:s==="yes"&&!y?"not-allowed":"pointer",fontSize:13},children:"➕ Open Form"})]})]})]})})}function X4({record:n,onClose:o,onSubmit:s}){const[l,d]=b.useState(""),[p,f]=b.useState(n.status||"Pending"),[h,x]=b.useState(n.priority||"Normal"),[g,y]=b.useState(!1),[v,T]=b.useState(null);if(!n)return null;const R=async()=>{if(!l.trim()){alert("कृपया reply message लिहा.");return}y(!0),await s({applicationId:n._id,replyMessage:l,status:p,priority:h,replyDocument:v}),y(!1)};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,0.45)"},onClick:o,children:a.jsxs("div",{style:{background:H.white,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:640,maxHeight:"95vh",overflowY:"auto",boxShadow:"0 -8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:k=>k.stopPropagation(),children:[a.jsx("div",{style:{width:40,height:4,borderRadius:2,background:H.greenBorder,margin:"10px auto 0"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:`2px solid ${H.greenBadge}`,background:H.greenLight},children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx("p",{style:{margin:0,fontSize:11,color:H.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Reply to Application"}),a.jsxs("h3",{style:{margin:"3px 0 0",fontSize:15,fontWeight:700,color:H.dark,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[n.tokenNo," — ",n.fullName]})]}),a.jsx("button",{onClick:o,style:{background:H.white,border:"none",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:16,color:H.dark,flexShrink:0,marginLeft:10},children:"✕"})]}),a.jsxs("div",{style:{padding:"16px 20px"},children:[a.jsx("div",{style:{border:`1.5px solid ${H.greenBorder}`,borderRadius:10,overflow:"hidden",marginBottom:16},children:[["Applicant",n.fullName],["Mobile",n.mobile],["Subject",n.subject],["Office",n.office],["Submitted By",n.submittedByName+(n.submittedByRole?` (${n.submittedByRole})`:"")],["Submitted On",n.submissionDate?new Date(n.submissionDate).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"]].filter(([,k])=>k).map(([k,z])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"7px 14px",borderBottom:`1px solid ${H.rowBorder}`,fontSize:13,gap:8},children:[a.jsx("span",{style:{color:H.muted,fontWeight:600,flexShrink:0,minWidth:100},children:k}),a.jsx("span",{style:{color:H.dark,fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:z})]},k))}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Status बदला"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["Pending","In Progress","Resolved","Rejected"].map(k=>{const z=dc(k),M=p===k;return a.jsxs("button",{onClick:()=>f(k),style:{padding:"6px 14px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",border:`1.5px solid ${M?z.border:H.greenBorder}`,background:M?z.bg:"#f8fdf8",color:M?z.color:H.muted,transition:"all .15s"},children:[a.jsx("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",background:M?z.dot:"#a8c8b0",marginRight:4,verticalAlign:"middle"}}),k]},k)})})]}),p!=="Resolved"&&a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Priority बदला"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["Normal","High","Urgent","Emergency"].map(k=>{const z=Hl[k]||Hl.Normal,M=h===k;return a.jsxs("button",{onClick:()=>x(k),style:{padding:"6px 12px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",border:`1.5px solid ${M?z.border:H.greenBorder}`,background:M?z.bg:"#f8fdf8",color:M?z.color:H.muted,transition:"all .15s"},children:[k==="Normal"?"⚪":"🔴"," ",k]},k)})})]}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsxs("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:["Reply Message ",a.jsx("span",{style:{color:H.red},children:"*"})]}),a.jsx("textarea",{rows:4,placeholder:"Applicant ला reply message लिहा...",value:l,onChange:k=>d(k.target.value),style:{width:"100%",padding:"10px 14px",fontSize:13,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,outline:"none",fontFamily:"'Segoe UI', sans-serif",resize:"vertical",boxSizing:"border-box",color:H.dark,background:"#f8fdf8"},onFocus:k=>k.target.style.borderColor=H.green,onBlur:k=>k.target.style.borderColor=H.greenBorder}),a.jsxs("p",{style:{fontSize:11,color:H.muted,textAlign:"right",margin:"4px 0 0"},children:[l.length," characters"]})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsxs("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:["Reply Document ",a.jsx("span",{style:{color:H.muted,fontWeight:400,fontSize:11},children:"(Optional)"})]}),a.jsxs("div",{style:{border:`2px dashed ${H.greenBorder}`,borderRadius:10,padding:14,background:"#f8fdf8"},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:10,cursor:"pointer",flexWrap:"wrap"},children:[a.jsxs("span",{style:{padding:"7px 14px",background:H.green,color:"#fff",fontSize:12,fontWeight:700,borderRadius:8,whiteSpace:"nowrap"},children:["📎 Choose File",a.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.jpg,.jpeg,.png",style:{display:"none"},onChange:k=>T(k.target.files[0]||null)})]}),a.jsx("span",{style:{fontSize:13,color:H.muted,wordBreak:"break-all"},children:v?v.name:"PDF, DOC, or Image"})]}),v&&a.jsxs("div",{style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"space-between",background:H.white,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,padding:"8px 12px"},children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("p",{style:{margin:0,fontSize:12,fontWeight:700,color:H.green,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["✅ ",v.name]}),a.jsxs("p",{style:{margin:0,fontSize:11,color:H.muted},children:[(v.size/1024).toFixed(1)," KB"]})]}),a.jsx("button",{onClick:()=>T(null),style:{background:"none",border:"none",cursor:"pointer",color:H.red,fontSize:18,fontWeight:700,flexShrink:0,marginLeft:8},children:"✕"})]})]})]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{onClick:o,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:H.dark,fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:R,disabled:g,style:{flex:2,background:g?"#888":H.green,color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:g?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:g?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:13,height:13,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"Sending…"]}):"📨 Send Reply"})]})]})]})})}function J4({record:n,onClose:o}){if(!n)return null;const s=({label:d,value:p})=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 14px",borderBottom:`1px solid ${H.rowBorder}`,fontSize:13,gap:8},children:[a.jsx("span",{style:{color:H.muted,fontWeight:600,flexShrink:0,minWidth:110},children:d}),a.jsx("span",{style:{color:H.dark,fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:p||"--"})]}),l=({title:d})=>a.jsx("div",{style:{padding:"8px 14px 6px",background:H.greenLight,borderBottom:`1px solid ${H.greenBorder}`},children:a.jsx("span",{style:{fontSize:11,fontWeight:700,color:H.green,textTransform:"uppercase",letterSpacing:1},children:d})});return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,0.45)"},onClick:o,children:a.jsxs("div",{style:{background:H.white,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:640,maxHeight:"95vh",overflowY:"auto",boxShadow:"0 -8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:d=>d.stopPropagation(),children:[a.jsx("div",{style:{width:40,height:4,borderRadius:2,background:H.greenBorder,margin:"10px auto 0"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:`2px solid ${H.greenBadge}`,background:H.greenLight},children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:H.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Application Detail"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:16,fontWeight:700,color:H.dark},children:n.tokenNo})]}),a.jsx("button",{onClick:o,style:{background:H.white,border:"none",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:16,color:H.dark},children:"✕"})]}),a.jsxs("div",{style:{padding:"0 0 20px"},children:[[["Citizen Details",[["Full Name",n.fullName],["Mobile",n.mobile],["Email",n.email],["Category",n.category],["Ward No",n.wardNo],["Address",n.address],["Pincode",n.pincode],["Taluka",n.taluka],["District",n.district]]],["Identity",[["Type",n.identityType],["Number",n.identityNumber]]],["Complaint",[["Subject",n.subject],["Description",n.description]]],["Office & Workflow",[["Office",n.office],["Main Department",n.mainDepartment],["Sub Department",n.subDepartment],...n.status!=="Resolved"?[["Priority",n.priority]]:[],["Tag To",Array.isArray(n.tagTo)?n.tagTo.join(", "):n.tagTo],["Follow Up",n.followUp],["Status",n.status],["Submitted On",Qp(n.submissionDate)],...n.status==="Resolved"?(()=>{const d=n.replies?.find(p=>p.status==="Resolved");return d?[["Resolved By",d.repliedByName],["Resolved Role",d.repliedByRole],["Resolved On",d.createdAt?new Date(d.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"]]:[]})():[]]]].map(([d,p])=>a.jsxs("div",{style:{border:`1.5px solid ${H.greenBorder}`,borderRadius:10,overflow:"hidden",margin:"14px 16px 0"},children:[a.jsx(l,{title:d}),p.filter(([,f])=>f).map(([f,h])=>a.jsx(s,{label:f,value:h},f))]},d)),n.documents&&a.jsxs("div",{style:{margin:"14px 16px 0",padding:"12px 14px",background:H.greenLight,border:`1.5px solid ${H.greenBorder}`,borderRadius:10},children:[a.jsx("p",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:H.green,textTransform:"uppercase",letterSpacing:1},children:"Document"}),a.jsx("a",{href:n.documents,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 14px",background:H.green,color:"#fff",borderRadius:8,fontSize:13,fontWeight:600,textDecoration:"none"},children:"📄 View Document"})]}),n.replies&&n.replies.length>0&&a.jsxs("div",{style:{margin:"14px 16px 0"},children:[a.jsxs("p",{style:{fontSize:11,fontWeight:700,color:H.green,textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:["Replies (",n.replies.length,")"]}),n.replies.map((d,p)=>{const f=dc(d.status),h=d.status==="Resolved";return a.jsxs("div",{style:{borderRadius:10,border:`1.5px solid ${h?"#a8d5b5":H.greenBorder}`,padding:"12px 14px",background:h?H.greenLight:"#f8fdf8",marginBottom:8},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:6},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:h?H.green:"#6366f1",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:11,fontWeight:700},children:d.repliedByName?d.repliedByName.split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase():"?"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:H.dark},children:d.repliedByName||"—"}),d.repliedByRole&&a.jsx("div",{style:{fontSize:11,color:H.green,fontWeight:600},children:d.repliedByRole})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[d.status&&a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:700,background:f.bg,color:f.color,border:`1px solid ${f.border}`},children:[a.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:f.dot}}),d.status]}),a.jsx("span",{style:{fontSize:11,color:H.muted},children:d.createdAt?new Date(d.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""})]})]}),a.jsx("p",{style:{fontSize:13,color:h?H.green:H.dark,margin:0,paddingLeft:36},children:d.replyMessage})]},p)})]})]})]})})}function fx({page:n,totalPages:o,total:s,limit:l,onPageChange:d,onLimitChange:p}){if(o<=1&&s<=10)return null;const f=[],h=2,x=Math.max(1,n-h),g=Math.min(o,n+h);x>1&&(f.push(1),x>2&&f.push("..."));for(let v=x;v<=g;v++)f.push(v);g<o&&(g<o-1&&f.push("..."),f.push(o));const y={padding:"6px 12px",borderRadius:7,fontSize:13,fontWeight:600,cursor:"pointer",border:`1.5px solid ${H.greenBorder}`,transition:"all .15s",minWidth:36,textAlign:"center"};return a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",borderTop:`1px solid ${H.rowBorder}`,flexWrap:"wrap",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{fontSize:12,color:H.muted,fontWeight:600,whiteSpace:"nowrap"},children:"Rows per page:"}),a.jsx("select",{value:l,onChange:v=>p(Number(v.target.value)),style:{padding:"5px 10px",fontSize:13,border:`1.5px solid ${H.greenBorder}`,borderRadius:7,outline:"none",color:H.dark,background:H.white,cursor:"pointer",fontFamily:"'Segoe UI', sans-serif"},children:[10,20,50,100].map(v=>a.jsx("option",{value:v,children:v},v))}),a.jsxs("span",{style:{fontSize:12,color:H.muted,whiteSpace:"nowrap"},children:["of ",a.jsx("strong",{style:{color:H.dark},children:s})]})]}),o>1&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[a.jsx("button",{onClick:()=>d(n-1),disabled:n===1,style:{...y,background:n===1?"#f0f4f0":H.white,color:n===1?"#aaa":H.green,cursor:n===1?"not-allowed":"pointer"},children:"‹ Prev"}),f.map((v,T)=>v==="..."?a.jsx("span",{style:{padding:"6px 4px",fontSize:13,color:H.muted},children:"…"},`dot-${T}`):a.jsx("button",{onClick:()=>d(v),style:{...y,background:v===n?H.green:H.white,color:v===n?"#fff":H.dark,border:`1.5px solid ${v===n?H.green:H.greenBorder}`},children:v},v)),a.jsx("button",{onClick:()=>d(n+1),disabled:n===o,style:{...y,background:n===o?"#f0f4f0":H.white,color:n===o?"#aaa":H.green,cursor:n===o?"not-allowed":"pointer"},children:"Next ›"})]})]})}function Q4(){const[n,o]=b.useState([]),[s,l]=b.useState(!0),[d,p]=b.useState(""),[f,h]=b.useState("All"),[x,g]=b.useState(null),[y,v]=b.useState(null),[T,R]=b.useState(!1),[k,z]=b.useState(!1),[M,E]=b.useState(null),[S,A]=b.useState(null),[P,X]=b.useState(1),[D,W]=b.useState(1),[V,de]=b.useState(0),[he,J]=b.useState(20);vt();const pe=(C,q="success")=>{A({msg:C,type:q}),setTimeout(()=>A(null),3500)};b.useEffect(()=>{$(1,20)},[]);const $=async(C=P,q=he)=>{try{l(!0);const oe=localStorage.getItem("authUser"),I=oe?JSON.parse(oe):null,ge=await Ue.get("/getAllApplications",{params:{role:I?.role,userId:I?.id,userOffice:I?.office,userDepartmentCategory:I?.departmentCategory,userDepartmentName:I?.departmentName,page:C,limit:q}});ge.data.success&&(o(ge.data.data||[]),de(ge.data.total||0),W(ge.data.totalPages||1),X(C))}catch(oe){console.error("Error fetching applications:",oe)}finally{l(!1)}},me=C=>{C<1||C>D||($(C,he),window.scrollTo({top:0,behavior:"smooth"}))},we=C=>{J(C),$(1,C),window.scrollTo({top:0,behavior:"smooth"})},F=()=>R(!0),ie=C=>{if(R(!1),C){const q=oe=>oe?oe.replace(/Ward\s+/i,"Ward-"):"";E({fullName:C.fullName||"",mobile:C.mobileNumber||"",email:C.email||"",address:C.address||"",pincode:C.pincode||"",wardNo:C.ward||"",ward:q(C.ward),visitorPhoto:C.visitorPhoto||"",_tokenId:C.tokenId||"",_citizenId:C.citizenId||"",_preferredDate:C.preferredDate||"",_slotTime:C.slotTime||"",_microSlot:C.microSlot||""})}else E(null);z(!0)},fe=()=>{z(!1),E(null),$(P,he)},K=async({applicationId:C,replyMessage:q,status:oe,priority:I,replyDocument:ge})=>{try{const be=localStorage.getItem("authUser"),ke=be?JSON.parse(be):null,Ce=ke?.submittedByName||ke?.name||ke?.fullName||"",Ke=ke?.submittedByRole||ke?.role||"",et=ke?.submittedById||ke?.id||"",Lt=n.find(L=>L._id===C)?.tokenNo;if(!Lt){pe("Token No सापडले नाही ❌","error");return}const se=await Ue.get(`/citizen/appointment/token/${Lt}`).catch(()=>null);if(!se?.data?.appointment?._id){pe("Citizen Appointment सापडले नाही ❌","error");return}const je=se.data.appointment._id,G=new FormData;G.append("status",oe.toLowerCase()),G.append("adminNote",q),G.append("replyMessage",q),G.append("priority",I),G.append("repliedBy",et),G.append("repliedByName",Ce),G.append("repliedByRole",Ke),ge&&G.append("replyDocument",ge),await Ue.patch(`/citizen/admin/update-status/${je}`,G,{headers:{"Content-Type":"multipart/form-data"}});const O={replyMessage:q,status:oe,priority:I,repliedBy:et,repliedByName:Ce,repliedByRole:Ke,createdAt:new Date().toISOString()};o(L=>L.map(ne=>ne._id===C?{...ne,status:oe,priority:I,replies:[...ne.replies||[],O]}:ne)),pe("Reply यशस्वीरित्या पाठवली! ✅"),v(null)}catch(be){console.error("Reply error:",be),pe(be?.response?.data?.message||"Reply पाठवताना error आला ❌","error")}},B=n.filter(C=>{const q=!d||C.fullName?.toLowerCase().includes(d.toLowerCase())||C.inwardNo?.toLowerCase().includes(d.toLowerCase())||C.subject?.toLowerCase().includes(d.toLowerCase())||C.mobile?.includes(d),oe=f==="All"||C.status===f;return q&&oe}),j=["All","Pending","In Progress","Resolved","Rejected"].map(C=>({label:C,count:C==="All"?V:n.filter(q=>q.status===C).length}));return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:H.bg,minHeight:"100vh",padding:"16px"},children:[a.jsx("style",{children:`
        @keyframes fadeIn { from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)} }
        @keyframes spin { to{transform:rotate(360deg)} }

        /* Desktop: show table, hide cards */
        .desk-table { display: block; }
        .mob-cards   { display: none; }

        @media (max-width: 768px) {
          /* Switch table → cards */
          .desk-table { display: none !important; }
          .mob-cards  { display: block !important; }

          /* Header stacks vertically */
          .hdr-row   { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .hdr-btns  { width: 100%; display: flex !important; gap: 8px; }
          .hdr-btns button { flex: 1; }

          /* Filter bar stacks */
          .flt-bar   { flex-direction: column !important; gap: 10px !important; }
          .flt-tabs  { overflow-x: auto !important; flex-wrap: nowrap !important; padding-bottom: 4px; -webkit-overflow-scrolling: touch; }
          .flt-tabs::-webkit-scrollbar { height: 3px; }
          .flt-tabs::-webkit-scrollbar-thumb { background: #c8e0cc; border-radius: 2px; }

          /* Search full width */
          .srch-wrap { width: 100% !important; }

          /* Toast full-width on mobile */
          .toast-box { left: 12px !important; right: 12px !important; }
        }

        @media (max-width: 480px) {
          .page-title { font-size: 20px !important; }
        }
      `}),S&&a.jsx("div",{className:"toast-box",style:{position:"fixed",top:16,right:16,zIndex:9999,background:S.type==="success"?H.green:H.red,color:"#fff",padding:"12px 18px",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:S.msg}),a.jsxs("div",{className:"hdr-row",style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18},children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"page-title",style:{margin:0,fontSize:24,fontWeight:700,color:H.dark,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:["Applications",a.jsx("span",{style:{background:H.greenBadge,color:H.green,borderRadius:20,padding:"2px 10px",fontSize:13,fontWeight:700},children:V})]}),a.jsx("p",{style:{margin:"4px 0 0",color:H.muted,fontSize:13},children:"जन संवाद - Applications"})]}),a.jsxs("div",{className:"hdr-btns",style:{display:"flex",gap:10},children:[a.jsx("button",{onClick:()=>$(P,he),style:{background:H.white,color:H.green,border:`2px solid ${H.green}`,borderRadius:8,padding:"9px 16px",fontWeight:600,fontSize:13,cursor:"pointer"},children:"🔄 Refresh"}),a.jsx("button",{onClick:F,style:{background:H.green,color:"#fff",border:"none",borderRadius:8,padding:"9px 16px",fontWeight:600,fontSize:13,cursor:"pointer"},children:"➕ Add"})]})]}),a.jsx("div",{style:{background:H.white,borderRadius:12,padding:"12px 16px",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"},children:a.jsxs("div",{className:"flt-bar",style:{display:"flex",alignItems:"center",gap:10},children:[a.jsxs("div",{className:"srch-wrap",style:{position:"relative",flex:1},children:[a.jsx("span",{style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:14,color:H.muted},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, inward no, subject...",value:d,onChange:C=>p(C.target.value),style:{width:"100%",padding:"9px 12px 9px 32px",fontSize:13,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,outline:"none",color:H.dark,background:"#f8fdf8",boxSizing:"border-box",fontFamily:"'Segoe UI', sans-serif"}})]}),a.jsx("div",{className:"flt-tabs",style:{display:"flex",gap:6,flexWrap:"wrap"},children:j.map(({label:C,count:q})=>a.jsxs("button",{onClick:()=>h(C),style:{padding:"7px 14px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",border:f===C?"none":`1.5px solid ${H.greenBorder}`,background:f===C?H.green:H.white,color:f===C?"#fff":H.muted,transition:"all .15s",whiteSpace:"nowrap"},children:[C," ",a.jsx("span",{style:{marginLeft:4,fontSize:11,fontWeight:700,background:f===C?"rgba(255,255,255,0.25)":H.greenBadge,color:f===C?"#fff":H.green,padding:"1px 6px",borderRadius:10},children:q})]},C))})]})}),a.jsxs("div",{className:"desk-table",style:{background:H.white,borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflowX:"auto"},children:[a.jsx("div",{style:{display:"flex",alignItems:"center",padding:"14px 20px 12px",borderBottom:`2px solid ${H.greenBadge}`},children:a.jsxs("h3",{style:{margin:0,fontSize:16,fontWeight:700,color:H.dark},children:["Application Records",a.jsx("span",{style:{background:H.greenBadge,color:H.green,borderRadius:20,padding:"2px 10px",fontSize:12,marginLeft:8},children:V})]})}),s?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:1200},children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:"#f0f7f2"},children:["Reply","#","Applicant","Token No","Status","Subject","Department","Priority","Date","Submitted By","Reply By","Document"].map(C=>a.jsx("th",{style:{padding:"12px 14px",textAlign:"left",fontSize:12,fontWeight:700,color:H.dark,borderBottom:`2px solid ${H.greenBadge}`,whiteSpace:"nowrap"},children:C},C))})}),a.jsx("tbody",{children:B.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:12,style:{textAlign:"center",padding:48,color:"#888",fontSize:14},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📭"}),d?"No matching applications found.":"No applications yet."]})}):B.map((C,q)=>a.jsxs("tr",{style:{borderBottom:`1px solid ${H.rowBorder}`,cursor:"pointer"},onMouseOver:oe=>oe.currentTarget.style.background=H.rowHover,onMouseOut:oe=>oe.currentTarget.style.background="transparent",onClick:()=>g(C),children:[a.jsx("td",{style:{padding:"10px 12px"},onClick:oe=>oe.stopPropagation(),children:a.jsx("button",{onClick:()=>v(C),style:{background:H.greenLight,border:`1.5px solid ${H.green}`,borderRadius:7,padding:"5px 11px",cursor:"pointer",color:H.green,fontSize:12,fontWeight:700},children:"📨 Reply"})}),a.jsx("td",{style:{padding:"10px 12px",fontSize:13,color:"#888"},children:(P-1)*he+q+1}),a.jsx("td",{style:{padding:"10px 12px",minWidth:160},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:u1(C.fullName),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:12,flexShrink:0},children:p1(C.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:13,fontWeight:700,color:H.dark},children:C.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:11,color:H.muted},children:C.mobile})]})]})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsx("span",{style:{background:H.greenLight,color:H.green,borderRadius:6,padding:"2px 9px",fontSize:14,fontWeight:700,fontFamily:"monospace",whiteSpace:"nowrap"},children:C.tokenNo||"—"})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsx(f1,{status:C.status})}),a.jsx("td",{style:{padding:"10px 12px",maxWidth:180},children:a.jsx("span",{style:{display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:170,fontSize:13,color:H.dark},title:C.subject,children:C.subject||"—"})}),a.jsxs("td",{style:{padding:"10px 12px",maxWidth:160},children:[a.jsx("div",{style:{fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:150,color:H.dark},children:C.mainDepartment||"—"}),C.subDepartment&&a.jsx("div",{style:{fontSize:11,color:H.muted,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:150},children:C.subDepartment})]}),a.jsx("td",{style:{padding:"10px 12px"},children:C.status!=="Resolved"?a.jsx(g1,{priority:C.priority}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px",whiteSpace:"nowrap",fontSize:12,color:H.muted},children:Qp(C.submissionDate)}),a.jsx("td",{style:{padding:"10px 12px",minWidth:130},children:C.submittedByName?a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:H.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:120},children:C.submittedByName}),C.submittedByRole&&a.jsx("div",{style:{fontSize:11,color:H.muted},children:C.submittedByRole})]}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px",minWidth:130},children:C.replies&&C.replies.length>0?(()=>{const oe=C.replies[0],I=oe.status==="Resolved",ge=C.replies.length-1;return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:I?"#22c55e":"#6366f1",display:"inline-block",flexShrink:0}}),a.jsx("div",{style:{fontSize:12,fontWeight:700,color:I?H.green:H.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:110},children:oe.repliedByName||"—"})]}),oe.repliedByRole&&a.jsx("div",{style:{fontSize:11,color:H.muted,paddingLeft:12},children:oe.repliedByRole}),ge>0&&a.jsxs("div",{style:{fontSize:11,color:"#6366f1",fontWeight:700,paddingLeft:12},children:["+",ge," more"]})]})})():a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px"},onClick:oe=>oe.stopPropagation(),children:C.documents?a.jsx("a",{href:C.documents,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:4,color:H.green,fontSize:12,fontWeight:600,padding:"4px 8px",borderRadius:6,background:H.greenLight,textDecoration:"none"},children:"📄 View"}):a.jsx("span",{style:{color:"#ccc"},children:"—"})})]},C._id))})]}),!s&&a.jsx(fx,{page:P,totalPages:D,total:V,limit:he,onPageChange:me,onLimitChange:we})]}),a.jsx("div",{className:"mob-cards",children:s?a.jsxs("div",{style:{textAlign:"center",padding:48,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):B.length===0?a.jsxs("div",{style:{textAlign:"center",padding:48,color:"#888"},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📭"}),d?"No matching applications found.":"No applications yet."]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{fontSize:12,color:H.muted,marginBottom:10,padding:"0 2px"},children:["Showing ",a.jsxs("strong",{style:{color:H.dark},children:[(P-1)*he+1,"–",Math.min(P*he,V)]})," of ",a.jsx("strong",{style:{color:H.dark},children:V})," applications"]}),B.map((C,q)=>a.jsx(q4,{app:C,index:q,onReply:oe=>v(oe),onView:oe=>g(oe)},C._id||q)),a.jsx(fx,{page:P,totalPages:D,total:V,limit:he,onPageChange:me,onLimitChange:we})]})}),x&&a.jsx(J4,{record:x,onClose:()=>g(null)}),y&&a.jsx(X4,{record:y,onClose:()=>v(null),onSubmit:K}),T&&a.jsx(G4,{onClose:()=>R(!1),onProceed:ie}),k&&a.jsx(d1,{onClose:fe,prefillData:M})]})}const Me={primary:"#1a5c45",primaryLight:"#e8f5f0",primaryBorder:"#b2d8cc",primaryMid:"#2d7a5f"},gx=["#1a5c45","#2d7a5f","#3a9b76","#0d4f5c","#1e7a6e","#256b4a","#4a9e7c","#1b6b52"],Z4=["General Administration Department / Records Department HO","Satellite City Department HO","Establishment Department HO","Accounting Department HO","Construction department HO","Inward-out Department HO","Birth and Death Department HO","Marriage Registration Department HO","Commissioner Office HO","Tax department HO","Water Supply Department HO","Advertisement Tax Department HO","Mud and Bhuibhade Department HO","Naharkat / License Certificates Department HO","Market Recovery Department HO","Unauthorized Construction Committee HO","Accounting Department, (A) HO","Unauthorized Construction Department HO","Health Department HO","Meeting Department HO","Nulm department / hawker policy department HO","Library department HO","Local Body Tax Department HO","Diwabatti Department HO","Town Planning Department HO","Environment / Tree Authority / Forests / Parks Department / Election Department / Census Department HO","Audit Department HO","IT DEPARTMENT","Department of Hygiene Disorder Management HO","Fire Brigade Department HO","Legal Department","Transportation / Vehicle Department HO","Medical Health Department HO","Women and Child welfare Department HO","Handicapped welfare Department HO","Disaster Management Departmengt HO","Special Planning Authority Department HO"],K4=[{value:"Super Admin",label:"Super Admin"},{value:"Admin",label:"Admin"},{value:"Mayor",label:"Mayor"},{value:"Guardian Minister",label:"Guardian Minister"},{value:"Department User",label:"Department User"}],sn=n=>["corporator","ward councillor"].includes(String(n||"").trim().toLowerCase()),Ao=n=>String(n||"").trim().toLowerCase()==="corporator"?"corporator":n,e8=["corporator","Mayor","Deputy Mayor","Standing Committee Chairman","Leader of House","Leader of Opposition"];function mx({label:n,value:o,onChange:s}){const l=(d,p)=>a.jsx("button",{type:"button",onClick:()=>s(d),style:{flex:1,padding:"7px 0",borderRadius:6,fontSize:".8rem",fontWeight:600,cursor:"pointer",border:`1px solid ${o===d?Me.primary:Me.primaryBorder}`,background:o===d?Me.primary:"#fff",color:o===d?"#fff":Me.primary},children:p});return a.jsxs("div",{style:{flex:1,minWidth:150},children:[a.jsx("label",{style:si,children:n}),a.jsxs("div",{style:{display:"flex",gap:6},children:[l(!0,"Yes"),l(!1,"No")]})]})}function m1({form:n,setForm:o,handleChange:s}){const l=sn(n.role),d=p=>{const f=p.target.value;o({...n,role:f,...sn(f)?{departmentName:"",designation:Ao(n.designation)||"corporator",isGeneralBodyMember:n.isGeneralBodyMember!==!1}:{isStandingCommitteeMember:!1,isGeneralBodyMember:!0,wardNo:"",designation:""}})};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:yo,children:[a.jsx("label",{style:si,children:"Role"}),a.jsxs("select",{name:"role",value:n.role,onChange:d,style:{...rr,cursor:"pointer"},children:[a.jsx("option",{value:"",children:"-- Select Role --"}),K4.map(p=>a.jsx("option",{value:p.value,children:p.label},p.value))]})]}),l?a.jsxs("div",{style:{...yo,background:Me.primaryLight,display:"flex",flexDirection:"column",gap:10},children:[a.jsxs("div",{style:{fontSize:".75rem",color:"#5a8a74",fontWeight:600},children:["Category: ",a.jsx("span",{style:{color:"#1a2e25"},children:"All"})," — निवडलेल्या सभांचे सर्व विभागांचे विषय dashboard वर दिसतील"]}),a.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[a.jsxs("div",{style:{flex:"0 0 110px"},children:[a.jsx("label",{style:si,children:"Ward No."}),a.jsx("input",{name:"wardNo",value:n.wardNo||"",onChange:s,placeholder:"e.g. 1A",style:{...rr,background:"#fff",border:`1px solid ${Me.primaryBorder}`,borderRadius:6,padding:"7px 10px"}})]}),a.jsxs("div",{style:{flex:1,minWidth:160},children:[a.jsx("label",{style:si,children:"Designation"}),a.jsx("select",{name:"designation",value:Ao(n.designation)||"corporator",onChange:s,style:{...rr,background:"#fff",border:`1px solid ${Me.primaryBorder}`,borderRadius:6,padding:"7px 10px",cursor:"pointer"},children:e8.map(p=>a.jsx("option",{value:p,children:p},p))})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[a.jsx(mx,{label:"General Body (महासभा)",value:n.isGeneralBodyMember!==!1,onChange:p=>o({...n,isGeneralBodyMember:p})}),a.jsx(mx,{label:"Standing Committee (स्थायी समिती)",value:!!n.isStandingCommitteeMember,onChange:p=>o({...n,isStandingCommitteeMember:p})})]})]}):a.jsxs("div",{style:yo,children:[a.jsx("label",{style:si,children:"Department Name"}),a.jsxs("select",{name:"departmentName",value:n.departmentName,onChange:s,style:{...rr,cursor:"pointer"},children:[a.jsx("option",{value:"",children:"-- Select Department --"}),Z4.map(p=>a.jsx("option",{value:p,children:p},p))]})]})]})}function t8(n){return n?.role?sn(n.role)?`${Ao(n.designation)||"corporator"}${n.wardNo?` · Ward ${n.wardNo}`:""}`:n.role:"—"}function a8({name:n="",index:o}){const s=n.split(" ").map(l=>l[0]).join("").slice(0,2).toUpperCase()||"?";return a.jsx("div",{style:{width:36,height:36,borderRadius:"50%",backgroundColor:gx[o%gx.length],display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".8125rem",fontWeight:700,flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,.2)",border:"2px solid #fff"},children:s})}function zp(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}const yo={border:"1px solid #d1e8df",borderRadius:8,padding:"10px 14px",transition:"border-color .2s",backgroundColor:"#fff"},si={display:"block",fontSize:".75rem",color:"#5a8a74",marginBottom:3,fontWeight:600,letterSpacing:".02em"},rr={width:"100%",outline:"none",fontSize:".875rem",color:"#1a2e25",background:"transparent",border:"none",fontFamily:"inherit"};function n8({user:n,onClose:o}){return n?a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:480,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Me.primary} 0%, ${Me.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Detail"}),a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:n.fullName})]}),a.jsx("button",{onClick:o,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:24},children:a.jsx("div",{style:{background:Me.primaryLight,borderRadius:10,padding:"14px 18px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px 24px"},children:[["Full Name",n.fullName],["Username",n.userName],["Mobile Number",n.mobileNumber],["Email",n.email],["Role",n.role||"—"],...sn(n.role)?[["Ward No.",n.wardNo||"—"],["Designation",Ao(n.designation)||"corporator"],["General Body",n.isGeneralBodyMember!==!1?"Yes":"No"],["Standing Committee",n.isStandingCommitteeMember?"Yes":"No"]]:[],["Department",sn(n.role)?"All":n.departmentName],["Created At",zp(n.createdAt)],["Updated At",zp(n.updatedAt)]].map(([s,l])=>a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"#5a8a74",marginBottom:2,fontWeight:600},children:s}),a.jsx("p",{style:{fontSize:".875rem",color:"#1a2e25",fontWeight:500,margin:0},children:l||"—"})]},s))})})]})}):null}function i8({user:n,onClose:o,onSuccess:s}){const[l,d]=b.useState(!1),[p,f]=b.useState({fullName:n.fullName||"",userName:n.userName||"",mobileNumber:n.mobileNumber||"",email:n.email||"",password:n.password||"",departmentName:n.departmentName||"",role:sn(n.role)?"corporator":n.role||"",isStandingCommitteeMember:!!n.isStandingCommitteeMember,isGeneralBodyMember:n.isGeneralBodyMember!==!1,wardNo:n.wardNo||"",designation:Ao(n.designation)||(sn(n.role)?"corporator":"")}),h=y=>f({...p,[y.target.name]:y.target.value}),x=async y=>{if(y.preventDefault(),!p.fullName||!p.userName||!p.mobileNumber||!p.email){ye.warn("All required fields fill करा ❌");return}try{d(!0);const v=await Ue.patch(`/users/${n._id}`,p);if(!v.data.success){ye.error(v.data.message||"Update failed ❌");return}ye.success("User Updated Successfully ✅"),s(),o()}catch(v){ye.error(v?.response?.data?.message||"Server Error ❌")}finally{d(!1)}},g=p.fullName&&p.userName&&p.mobileNumber&&p.email&&!l;return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Me.primary} 0%, ${Me.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Management"}),a.jsxs("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:["Edit User — ",n.fullName]})]}),a.jsx("button",{onClick:o,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:"24px 28px"},children:a.jsxs("form",{onSubmit:x,style:{display:"flex",flexDirection:"column",gap:12},children:[[{label:"Full Name",name:"fullName",type:"text",ph:"Enter full name"},{label:"Username",name:"userName",type:"text",ph:"Enter username"},{label:"Mobile Number",name:"mobileNumber",type:"tel",ph:"Enter mobile number"},{label:"Email",name:"email",type:"email",ph:"Enter email"}].map(({label:y,name:v,type:T,ph:R})=>a.jsxs("div",{style:yo,children:[a.jsx("label",{style:si,children:y}),a.jsx("input",{type:T,name:v,value:p[v],onChange:h,placeholder:R,style:rr,maxLength:v==="mobileNumber"?10:void 0})]},v)),a.jsx(m1,{form:p,setForm:f,handleChange:h}),a.jsxs("div",{style:{display:"flex",gap:10,paddingTop:4},children:[a.jsx("button",{type:"button",onClick:o,style:{flex:1,padding:"11px 0",borderRadius:8,border:`1px solid ${Me.primaryBorder}`,background:"#fff",color:Me.primary,fontWeight:600,fontSize:".875rem",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"submit",disabled:!g,style:{flex:1,padding:"11px 0",borderRadius:8,border:"none",background:g?Me.primary:"#ccc",color:"#fff",fontWeight:600,fontSize:".875rem",cursor:g?"pointer":"not-allowed",opacity:g?1:.65},children:l?"Saving...":"💾 Save Changes"})]})]})})]})})}function r8({onClose:n,onSuccess:o}){const[s,l]=b.useState(!1),[d,p]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:"",departmentName:"",role:"",isStandingCommitteeMember:!1,isGeneralBodyMember:!0,wardNo:"",designation:""}),f=g=>p({...d,[g.target.name]:g.target.value}),h=async g=>{if(g.preventDefault(),!d.fullName||!d.userName||!d.mobileNumber||!d.email||!d.password){ye.warn("All fields required ❌");return}try{l(!0);const y=await Ue.post("/register",d);if(!y.data.success){ye.error(y.data.message||"Registration failed ❌");return}ye.success("User Added Successfully ✅"),o(),n()}catch(y){ye.error(y?.response?.data?.message||"Server Error ❌")}finally{l(!1)}},x=!d.fullName||!d.userName||!d.mobileNumber||!d.email||!d.password||s;return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Me.primary} 0%, ${Me.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Management"}),a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:"Add New User"})]}),a.jsx("button",{onClick:n,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:"24px 28px"},children:a.jsxs("form",{onSubmit:h,style:{display:"flex",flexDirection:"column",gap:12},children:[[{label:"Full Name",name:"fullName",type:"text",ph:"Enter full name"},{label:"Username",name:"userName",type:"text",ph:"Enter username"},{label:"Mobile Number",name:"mobileNumber",type:"tel",ph:"Enter mobile number"},{label:"Email",name:"email",type:"email",ph:"Enter email"},{label:"Password",name:"password",type:"password",ph:"Enter password"}].map(({label:g,name:y,type:v,ph:T})=>a.jsxs("div",{style:yo,children:[a.jsx("label",{style:si,children:g}),a.jsx("input",{type:v,name:y,value:d[y],onChange:f,placeholder:T,style:rr,maxLength:y==="mobileNumber"?10:void 0})]},y)),a.jsx(m1,{form:d,setForm:p,handleChange:f}),a.jsxs("div",{style:{display:"flex",gap:10,paddingTop:4},children:[a.jsx("button",{type:"button",onClick:n,style:{flex:1,padding:"11px 0",borderRadius:8,border:`1px solid ${Me.primaryBorder}`,background:"#fff",color:Me.primary,fontWeight:600,fontSize:".875rem",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"submit",disabled:x,style:{flex:1,padding:"11px 0",borderRadius:8,border:"none",background:x?"#ccc":Me.primary,color:"#fff",fontWeight:600,fontSize:".875rem",cursor:x?"not-allowed":"pointer",opacity:x?.65:1},children:s?"Creating...":"+ Add User"})]})]})})]})})}function o8(){const[n,o]=b.useState([]),[s,l]=b.useState(!0),[d,p]=b.useState(""),[f,h]=b.useState(null),[x,g]=b.useState(!1),[y,v]=b.useState(null),[T,R]=b.useState(null);b.useEffect(()=>{k()},[]);const k=async()=>{try{l(!0);const S=await Ue.get("/getUsers");S.data.success?o(S.data.users||[]):ye.error(S.data.message||"Users fetch failed ❌")}catch{ye.error("Users fetch करताना error आला ❌")}finally{l(!1)}},z=async(S,A,P)=>{if(S.stopPropagation(),!!window.confirm(`"${P}" ला delete करायचे आहे का?`))try{v(A);const X=await Ue.delete(`/deleteUser/${A}`);X.data.success?(o(D=>D.filter(W=>W._id!==A)),ye.success(`"${P}" Deleted Successfully ✅`)):ye.error(X.data.message||"Delete failed ❌")}catch(X){ye.error(X?.response?.data?.message||"Server Error ❌")}finally{v(null)}},M=n.filter(S=>!sn(S.role)),E=M.filter(S=>!d||S.fullName?.toLowerCase().includes(d.toLowerCase())||S.userName?.toLowerCase().includes(d.toLowerCase())||S.mobileNumber?.includes(d)||S.email?.toLowerCase().includes(d.toLowerCase())||S.role?.toLowerCase().includes(d.toLowerCase())||S.wardNo?.toLowerCase().includes(d.toLowerCase()));return a.jsxs("div",{style:{minHeight:"100vh",background:"#f0f7f4",padding:24},children:[a.jsx("style",{children:`
        @keyframes uspin { to { transform:rotate(360deg) } }
        .u-tr:hover { background: #e8f5f0 !important; }
        .u-del-btn:hover:not(:disabled) { background:#fee2e2 !important; border-color:#f87171 !important; }
        .u-edit-btn:hover { background:#d1fae5 !important; border-color:#6ee7b7 !important; }
        .u-ref-btn:hover { background:#e8f5f0 !important; color:#1a5c45 !important; border-color:#b2d8cc !important; }
        .u-add-btn:hover { background:#154d3a !important; }
        .u-search-input:focus { border-color: #1a5c45 !important; box-shadow: 0 0 0 3px rgba(26,92,69,.12) !important; }
      `}),a.jsxs("div",{style:{maxWidth:1280,margin:"0 auto"},children:[a.jsxs("div",{style:{marginBottom:24},children:[a.jsxs("h1",{style:{fontSize:"1.6rem",fontWeight:800,color:"#1a2e25",margin:0,display:"flex",alignItems:"center",gap:12},children:["All Users",a.jsx("span",{style:{fontSize:".8125rem",fontWeight:700,color:Me.primary,background:Me.primaryLight,border:`1px solid ${Me.primaryBorder}`,padding:"2px 10px",borderRadius:20},children:M.length})]}),a.jsx("p",{style:{color:"#5a8a74",fontSize:".9rem",fontWeight:500,marginTop:4},children:"Janata Darbar — User Management"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:16,flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative",flex:"1 1 300px",maxWidth:480},children:[a.jsx("span",{style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:"#5a8a74",fontSize:".9rem"},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, username, mobile, email...",value:d,onChange:S=>p(S.target.value),className:"u-search-input",style:{width:"100%",paddingLeft:36,paddingRight:14,paddingTop:9,paddingBottom:9,fontSize:".875rem",border:`1px solid ${Me.primaryBorder}`,borderRadius:8,outline:"none",background:"#fff",color:"#1a2e25",transition:"border-color .2s, box-shadow .2s",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{display:"flex",gap:10,flexShrink:0},children:[a.jsx("button",{onClick:k,className:"u-ref-btn",style:{display:"flex",alignItems:"center",gap:6,padding:"9px 16px",border:`1px solid ${Me.primaryBorder}`,borderRadius:8,background:"#fff",color:"#3a6b57",fontWeight:600,fontSize:".8125rem",cursor:"pointer",transition:"all .15s"},children:"🔄 Refresh"}),a.jsx("button",{onClick:()=>g(!0),className:"u-add-btn",style:{display:"flex",alignItems:"center",gap:6,padding:"9px 18px",border:"none",borderRadius:8,background:Me.primary,color:"#fff",fontWeight:600,fontSize:".8125rem",cursor:"pointer",transition:"background .15s"},children:"+ Add User"})]})]}),a.jsxs("div",{style:{background:"#fff",border:`1px solid ${Me.primaryBorder}`,borderRadius:10,overflow:"hidden",boxShadow:"0 2px 8px rgba(26,92,69,.08)"},children:[a.jsx("style",{children:`
            .u-th { padding:0 16px; height:50px; font-weight:600; font-size:.8rem; color:${Me.primary}; text-align:left; white-space:nowrap; background:${Me.primaryLight}; border-bottom:1px solid ${Me.primaryBorder}; letter-spacing:.04em; text-transform:uppercase; }
            .u-tr { border-bottom:1px solid #e8f2ee; cursor:pointer; transition:background .12s; }
            .u-tr:last-child { border-bottom:none; }
            .u-td { padding:0 16px; height:54px; vertical-align:middle; font-size:.875rem; }
            .u-mono { display:inline-block; padding:2px 8px; background:${Me.primaryLight}; border:1px solid ${Me.primaryBorder}; border-radius:4px; font-family:monospace; font-size:.8rem; color:${Me.primary}; font-weight:600; }
            .u-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:46px; border-top:1px solid ${Me.primaryBorder}; background:${Me.primaryLight}; font-size:.8125rem; color:${Me.primaryMid}; }
            .u-del-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #fca5a5; background:#fff5f5; color:#dc2626; cursor:pointer; transition:all .15s; }
            .u-del-btn:disabled { opacity:.5; cursor:not-allowed; }
            .u-edit-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #6ee7b7; background:#f0fdf4; color:#065f46; cursor:pointer; transition:all .15s; }
          `}),a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{children:["#","User","Username","Mobile","Email","Role","Department","Joined","Action"].map(S=>a.jsx("th",{className:"u-th",children:S},S))})}),a.jsx("tbody",{children:s?a.jsx("tr",{children:a.jsxs("td",{colSpan:9,style:{textAlign:"center",padding:"64px 0",color:"#5a8a74"},children:[a.jsx("div",{style:{width:32,height:32,margin:"0 auto 12px",border:`3px solid ${Me.primaryBorder}`,borderTopColor:Me.primary,borderRadius:"50%",animation:"uspin .8s linear infinite"}}),a.jsx("div",{style:{fontWeight:500},children:"Loading users…"})]})}):E.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:9,style:{textAlign:"center",padding:"64px 0",color:"#5a8a74"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:8},children:"👤"}),a.jsx("div",{style:{fontWeight:500},children:"No users found"})]})}):E.map((S,A)=>a.jsxs("tr",{className:"u-tr",style:{background:A%2===0?"#fff":"#fafcfb"},onClick:()=>h(S),children:[a.jsx("td",{className:"u-td",style:{color:"#5a8a74",width:50,fontWeight:600},children:A+1}),a.jsx("td",{className:"u-td",style:{minWidth:180},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(a8,{name:S.fullName,index:A}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:".875rem",fontWeight:600,color:"#1a2e25",lineHeight:1.3},children:S.fullName}),a.jsxs("div",{style:{fontSize:".72rem",color:"#5a8a74",marginTop:1},children:["ID: ",S._id?.slice(-6)]})]})]})}),a.jsx("td",{className:"u-td",style:{width:140},children:a.jsxs("span",{className:"u-mono",children:["@",S.userName]})}),a.jsx("td",{className:"u-td",style:{width:140},children:a.jsx("div",{style:{fontSize:".875rem",color:"#2d5a45"},children:S.mobileNumber||"—"})}),a.jsx("td",{className:"u-td",style:{minWidth:180},children:a.jsx("div",{style:{fontSize:".875rem",color:"#2d5a45",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:200},children:S.email||"—"})}),a.jsx("td",{className:"u-td",style:{minWidth:150},children:a.jsx("div",{style:{fontSize:".8rem",color:"#2d5a45",whiteSpace:"nowrap"},children:S.role?t8(S):a.jsx("span",{style:{color:"#a0c4b5"},children:"—"})})}),a.jsx("td",{className:"u-td",style:{minWidth:200},children:a.jsx("div",{style:{fontSize:".8rem",color:"#2d5a45",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:220},title:S.departmentName||"—",children:sn(S.role)?"All":S.departmentName||a.jsx("span",{style:{color:"#a0c4b5"},children:"—"})})}),a.jsx("td",{className:"u-td",style:{width:120,whiteSpace:"nowrap",color:"#3a6b57",fontSize:".8125rem"},children:zp(S.createdAt)}),a.jsx("td",{className:"u-td",style:{width:160},onClick:P=>P.stopPropagation(),children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("button",{className:"u-edit-btn",onClick:P=>{P.stopPropagation(),R(S)},children:"✏️ Edit"}),a.jsx("button",{className:"u-del-btn",disabled:y===S._id,onClick:P=>z(P,S._id,S.fullName),children:y===S._id?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:11,height:11,border:"2px solid #fca5a5",borderTopColor:"#dc2626",borderRadius:"50%",display:"inline-block",animation:"uspin .7s linear infinite"}}),"Deleting…"]}):a.jsx(a.Fragment,{children:"🗑️ Delete"})})]})})]},S._id))})]})}),!s&&E.length>0&&a.jsxs("div",{className:"u-footer",children:[a.jsxs("span",{children:["Showing ",a.jsx("strong",{style:{color:Me.primary},children:E.length})," of ",a.jsx("strong",{style:{color:Me.primary},children:M.length})," users"]}),a.jsx("span",{style:{color:"#5a8a74",fontSize:".8rem"},children:"👆 Click any row to view full details"})]})]})]}),f&&a.jsx(n8,{user:f,onClose:()=>h(null)}),x&&a.jsx(r8,{onClose:()=>g(!1),onSuccess:k}),T&&a.jsx(i8,{user:T,onClose:()=>R(null),onSuccess:k})]})}const Ap=(n,o)=>c1()==="mr"?o:n,en={primary:"#1a5c45",primaryBorder:"#b2d8cc",primaryMid:"#2d7a5f"},lr="corporator",s8=n=>["corporator","ward councillor"].includes(String(n||"").trim().toLowerCase()),h1=n=>String(n||"").trim().toLowerCase()===lr?lr:n||"",x1=[{value:"corporator",label:"Corporator",color:"#2d5a45",bg:"transparent",bd:"transparent"},{value:"Mayor",label:"Mayor",color:"#8a5a00",bg:"#fff6e0",bd:"#f2d48a"},{value:"Deputy Mayor",label:"Dy. Mayor",color:"#5b3fa0",bg:"#f2edff",bd:"#cfc2f2"},{value:"Standing Committee Chairman",label:"Standing Chairman",color:"#0b6177",bg:"#e6f6fa",bd:"#a9dbe6"}],b1=["Mayor","Deputy Mayor","Standing Committee Chairman"],uc=n=>x1.find(o=>o.value===(h1(n)||lr)),Pl=n=>uc(n)?.label||n||"Corporator",l8=n=>{const o=uc(n);return!o||o.value===lr?a.jsx("span",{style:{color:"#2d5a45"},children:Pl(n)}):a.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:20,fontSize:".78rem",fontWeight:700,color:o.color,background:o.bg,border:`1px solid ${o.bd}`,whiteSpace:"nowrap"},children:o.label})},fo={border:"1px solid #d1e8df",borderRadius:8,padding:"10px 14px",transition:"border-color .2s",backgroundColor:"#fff"},ar={display:"block",fontSize:".75rem",color:"#5a8a74",marginBottom:3,fontWeight:600,letterSpacing:".02em"},c8={width:"100%",outline:"none",fontSize:".875rem",color:"#1a2e25",background:"transparent",border:"none",fontFamily:"inherit"};function hx({label:n,value:o,onChange:s}){const l=(d,p)=>a.jsx("button",{type:"button",onClick:()=>s(d),style:{flex:1,padding:"7px 0",borderRadius:6,fontSize:".8rem",fontWeight:600,cursor:"pointer",border:`1px solid ${o===d?en.primary:en.primaryBorder}`,background:o===d?en.primary:"#fff",color:o===d?"#fff":en.primary},children:p});return a.jsxs("div",{style:{flex:1,minWidth:150},children:[a.jsx("label",{style:ar,children:n}),a.jsxs("div",{style:{display:"flex",gap:6},children:[l(!0,"Yes"),l(!1,"No")]})]})}const xx=n=>a.jsx("span",{style:{display:"inline-block",minWidth:44,textAlign:"center",padding:"3px 10px",borderRadius:20,fontSize:".78rem",fontWeight:700,background:n?"#e6f6ec":"#fdeeee",color:n?"#1f7a45":"#c0392b",border:`1px solid ${n?"#b7e2c6":"#f3c4bd"}`},children:n?"Yes":"No"});function bx({corporator:n,allUsers:o=[],onClose:s,onSuccess:l}){const d=!!n,[p,f]=b.useState(!1),[h,x]=b.useState({wardNo:n?.wardNo||"",fullName:n?.fullName||"",mobileNumber:n?.mobileNumber||"",designation:h1(n?.designation)||lr,isGeneralBodyMember:n?n.isGeneralBodyMember!==!1:!0,isStandingCommitteeMember:n?!!n.isStandingCommitteeMember:!1,password:""}),g=k=>x({...h,[k.target.name]:k.target.value}),y=/^\d{10}$/.test(h.mobileNumber.trim()),v=h.wardNo.trim()&&h.fullName.trim()&&y&&(d||h.password)&&!p,T=async k=>{if(k.preventDefault(),!v){ye.warn("Please fill all required fields ❌");return}if(b1.includes(h.designation)){const E=o.find(S=>S._id!==n?._id&&S.designation===h.designation);if(E){const S=Pl(h.designation);ye.warn(Ap(`${S} is already assigned to "${E.fullName}". Change their designation first ❌`,`${fi(S,"mr")} पद आधीच "${E.fullName}" यांच्याकडे आहे. आधी त्यांचे पदनाम बदला ❌`));return}}const z=h.mobileNumber.trim(),M={role:lr,wardNo:h.wardNo.trim(),fullName:h.fullName.trim(),mobileNumber:z,designation:h.designation,isGeneralBodyMember:h.isGeneralBodyMember,isStandingCommitteeMember:h.isStandingCommitteeMember};try{f(!0);let E;if(d){const S={...M};(!n.userName||n.userName===n.mobileNumber)&&(S.userName=z),E=await Ue.patch(`/users/${n._id}`,S)}else E=await Ue.post("/register",{...M,userName:z,password:h.password});if(!E.data.success){ye.error(E.data.message||"Save failed ❌");return}ye.success(d?"Member Updated Successfully ✅":"Member Added Successfully ✅"),l(),s()}catch(E){ye.error(E?.response?.data?.message||"Server Error ❌")}finally{f(!1)}},R={...c8};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${en.primary} 0%, ${en.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"Corporators & Office Bearers"}),a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:d?a.jsxs(a.Fragment,{children:["Edit — ",a.jsx("span",{"data-no-translate":!0,children:n.fullName})]}):"Add Member"})]}),a.jsx("button",{onClick:s,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:"24px 28px"},children:a.jsxs("form",{onSubmit:T,style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[a.jsxs("div",{style:{...fo,flex:"0 0 130px"},children:[a.jsx("label",{style:ar,children:"Ward seat no."}),a.jsx("input",{name:"wardNo",value:h.wardNo,onChange:g,placeholder:"e.g. 1A",style:R})]}),a.jsxs("div",{style:{...fo,flex:1,minWidth:180},children:[a.jsx("label",{style:ar,children:"Name"}),a.jsx("input",{name:"fullName",value:h.fullName,onChange:g,placeholder:"Enter full name",style:R})]})]}),a.jsxs("div",{style:fo,children:[a.jsx("label",{style:ar,children:"Mobile number"}),a.jsx("input",{type:"tel",name:"mobileNumber",value:h.mobileNumber,onChange:g,placeholder:"10 digit mobile number",maxLength:10,style:R})]}),a.jsxs("div",{style:fo,children:[a.jsx("label",{style:ar,children:"Designation"}),a.jsxs("select",{name:"designation",value:h.designation,onChange:g,style:{...R,cursor:"pointer"},children:[x1.map(k=>a.jsx("option",{value:k.value,children:k.label},k.value)),!uc(h.designation)&&a.jsx("option",{value:h.designation,children:h.designation})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[a.jsx(hx,{label:"General Body",value:h.isGeneralBodyMember,onChange:k=>x({...h,isGeneralBodyMember:k})}),a.jsx(hx,{label:"Standing Committee",value:h.isStandingCommitteeMember,onChange:k=>x({...h,isStandingCommitteeMember:k})})]}),!d&&a.jsxs("div",{style:fo,children:[a.jsx("label",{style:ar,children:"Password"}),a.jsx("input",{type:"password",name:"password",value:h.password,onChange:g,placeholder:"Enter password",style:R})]}),a.jsxs("div",{style:{display:"flex",gap:10,paddingTop:4},children:[a.jsx("button",{type:"button",onClick:s,style:{flex:1,padding:"11px 0",borderRadius:8,border:`1px solid ${en.primaryBorder}`,background:"#fff",color:en.primary,fontWeight:600,fontSize:".875rem",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"submit",disabled:!v,style:{flex:1,padding:"11px 0",borderRadius:8,border:"none",background:v?en.primary:"#ccc",color:"#fff",fontWeight:600,fontSize:".875rem",cursor:v?"pointer":"not-allowed",opacity:v?1:.65},children:p?"Saving...":d?"💾 Save Changes":"+ Add Member"})]})]})})]})})}function d8(){const[n,o]=b.useState([]),[s,l]=b.useState(!0),[d,p]=b.useState(""),[f,h]=b.useState(!1),[x,g]=b.useState(null),[y,v]=b.useState(null);b.useEffect(()=>{T()},[]);const T=async()=>{try{l(!0);const A=await Ue.get("/getUsers");A.data.success?o((A.data.users||[]).filter(P=>s8(P.role))):ye.error(A.data.message||"Members fetch failed ❌")}catch{ye.error("Error while fetching members ❌")}finally{l(!1)}},R=async A=>{if(window.confirm(Ap(`Do you want to delete "${A.fullName}"?`,`"${A.fullName}" यांना हटवायचे आहे का?`)))try{v(A._id);const P=await Ue.delete(`/deleteUser/${A._id}`);P.data.success?(o(X=>X.filter(D=>D._id!==A._id)),ye.success(Ap(`"${A.fullName}" deleted successfully ✅`,`"${A.fullName}" यशस्वीरित्या हटवले ✅`))):ye.error(P.data.message||"Delete failed ❌")}catch(P){ye.error(P?.response?.data?.message||"Server Error ❌")}finally{v(null)}},k=d.trim().toLowerCase(),z=n.filter(A=>!k||A.fullName?.toLowerCase().includes(k)||A.mobileNumber?.includes(k)||String(A.wardNo||"").toLowerCase().includes(k)||Pl(A.designation).toLowerCase().includes(k)||String(fi(Pl(A.designation),"mr")).includes(k)).sort((A,P)=>String(A.wardNo||"").localeCompare(String(P.wardNo||""),"en",{numeric:!0})),M=n.filter(A=>A.isGeneralBodyMember!==!1).length,E=n.filter(A=>A.isStandingCommitteeMember).length,S=b1.map(A=>({...uc(A),holder:n.find(P=>P.designation===A)}));return a.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(180deg, #F0F7F7 0%, #EAF4F5 100%)",padding:24},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes cspin { to { transform:rotate(360deg) } }
        .c-body, .c-body * { font-family:'Nunito Sans', sans-serif; box-sizing:border-box; }
        .c-head { display:flex; align-items:center; gap:14px; }
        .c-head-icon { width:54px; height:54px; border-radius:14px; background:#fff; color:#187484; display:flex; align-items:center; justify-content:center; border:1px solid #E3EFF0; box-shadow:0 4px 14px rgba(13,79,92,0.10); flex-shrink:0; }
        .c-count { font-size:.8125rem; font-weight:800; color:#0d4f5c; background:#E3F4F1; padding:3px 11px; border-radius:20px; }
        .c-card { background:#fff; border:1px solid #E3EFF0; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(13,79,92,0.06); padding:16px; }
        .c-table { width:100%; border-collapse:separate; border-spacing:0; min-width:980px; }
        .c-th { padding:0 16px; height:50px; font-weight:800; font-size:.78rem; color:#0d4f5c; text-align:left; white-space:nowrap; background:#E4F1F2; letter-spacing:.06em; text-transform:uppercase; }
        .c-th:first-child { border-radius:10px 0 0 10px; }
        .c-th:last-child  { border-radius:0 10px 10px 0; }
        .c-tr { transition:background .12s; }
        .c-tr td { border-bottom:1px solid #EEF5F6; }
        .c-tr:last-child td { border-bottom:none; }
        .c-tr:hover td { background:#F3FAFA !important; }
        .c-td { padding:0 16px; height:58px; vertical-align:middle; font-size:.875rem; color:#24424a; }
        .c-mono { display:inline-block; padding:4px 11px; background:#E3F4F1; border-radius:8px; font-size:.8rem; color:#0d4f5c; font-weight:800; letter-spacing:.3px; }
        .c-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:46px; margin-top:8px; border-radius:10px; background:#F2F9F9; font-size:.8125rem; color:#5f7f86; }
        .c-edit-btn { display:inline-flex; align-items:center; gap:6px; padding:7px 14px; border-radius:8px; font-size:.8rem; font-weight:700; border:1px solid #D3E4F8; background:#E8F1FD; color:#1F5FAD; cursor:pointer; transition:background .15s; }
        .c-edit-btn:hover { background:#D7E8FB !important; }
        .c-del-btn { display:inline-flex; align-items:center; gap:6px; padding:7px 14px; border-radius:8px; font-size:.8rem; font-weight:700; border:1px solid #F8D5D9; background:#FDECEE; color:#C62F3B; cursor:pointer; transition:background .15s; }
        .c-del-btn:hover:not(:disabled) { background:#FBDADE !important; }
        .c-del-btn:disabled { opacity:.5; cursor:not-allowed; }
        .c-ref-btn { display:inline-flex; align-items:center; gap:7px; padding:10px 18px; border:1.5px solid #BFDDE1; border-radius:12px; background:#fff; color:#187484; font-weight:800; font-size:.8125rem; cursor:pointer; box-shadow:0 2px 8px rgba(13,79,92,0.06); transition:background .15s, border-color .15s; }
        .c-ref-btn:hover { background:#F2F9F9 !important; border-color:#187484 !important; }
        .c-add-btn { display:inline-flex; align-items:center; gap:7px; padding:10px 20px; border:none; border-radius:12px; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); color:#fff; font-weight:800; font-size:.8125rem; cursor:pointer; box-shadow:0 6px 16px rgba(24,116,132,0.28); transition:transform .15s, box-shadow .15s; }
        .c-add-btn:hover { transform:translateY(-1px); box-shadow:0 8px 20px rgba(24,116,132,0.36); }
        .c-search-input { width:100%; padding:10px 14px 10px 38px; font-size:.875rem; border:1px solid #D6E9EB; border-radius:12px; outline:none; background:#F2F9F9; color:#24424a; transition:border-color .2s, box-shadow .2s, background .2s; }
        .c-search-input::placeholder { color:#8AA6AB; }
        .c-search-input:focus { border-color:#187484 !important; background:#fff; box-shadow:0 0 0 3px rgba(24,116,132,.12) !important; }
        @media (max-width:640px) { .c-title { font-size:1.3rem !important; } .c-head-icon { width:46px; height:46px; } }
      `}),a.jsxs("div",{className:"c-body",style:{maxWidth:1280,margin:"0 auto"},children:[a.jsxs("div",{className:"c-head",style:{marginBottom:20},children:[a.jsx("div",{className:"c-head-icon",children:a.jsx(wp,{size:24})}),a.jsxs("div",{children:[a.jsxs("h1",{className:"c-title",style:{fontSize:"1.6rem",fontWeight:800,color:"#0d4f5c",margin:0,display:"flex",alignItems:"center",gap:12,letterSpacing:"-0.3px"},children:["Corporators & Office Bearers",a.jsx("span",{className:"c-count",children:n.length})]}),a.jsxs("p",{style:{color:"#5f7f86",fontSize:".9rem",fontWeight:500,margin:"4px 0 0"},children:["General Body ",a.jsx("strong",{style:{color:"#187484"},children:M})," · Standing Committee ",a.jsx("strong",{style:{color:"#187484"},children:E})]}),!s&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10},children:S.map(A=>a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:20,fontSize:".8rem",background:A.bg,border:`1px solid ${A.bd}`,color:A.color},children:[a.jsx("span",{style:{fontWeight:800},children:A.label}),a.jsx("span",{children:":"}),A.holder?a.jsx("span",{"data-no-translate":!0,style:{fontWeight:600,color:"#24424a"},children:A.holder.fullName}):a.jsx("span",{style:{fontWeight:500,color:"#8AA6AB",fontStyle:"italic"},children:"Not assigned"})]},A.value))})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:16,flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative",flex:"1 1 300px",maxWidth:480},children:[a.jsx(Ho,{size:16,style:{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:"#187484",pointerEvents:"none"}}),a.jsx("input",{type:"text",placeholder:"Search by name, ward, mobile, designation...",value:d,onChange:A=>p(A.target.value),className:"c-search-input"})]}),a.jsxs("div",{style:{display:"flex",gap:10,flexShrink:0},children:[a.jsxs("button",{onClick:T,className:"c-ref-btn",children:[a.jsx(a1,{size:15})," Refresh"]}),a.jsxs("button",{onClick:()=>h(!0),className:"c-add-btn",children:[a.jsx(Xp,{size:16})," Add Member"]})]})]}),a.jsxs("div",{className:"c-card",children:[a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{className:"c-table",children:[a.jsx("thead",{children:a.jsx("tr",{children:["Sr. No.","Ward seat no.","Name","Mobile number","Designation","General Body","Standing Committee","Action"].map(A=>a.jsx("th",{className:"c-th",children:A},A))})}),a.jsx("tbody",{children:s?a.jsx("tr",{children:a.jsxs("td",{colSpan:8,style:{textAlign:"center",padding:"64px 0",color:"#5f7f86"},children:[a.jsx("div",{style:{width:32,height:32,margin:"0 auto 12px",border:"3px solid #BFDDE1",borderTopColor:"#187484",borderRadius:"50%",animation:"cspin .8s linear infinite"}}),a.jsx("div",{style:{fontWeight:500},children:"Loading members…"})]})}):z.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:8,style:{textAlign:"center",padding:"64px 0",color:"#5f7f86"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:8},children:"🏛"}),a.jsx("div",{style:{fontWeight:500},children:'No members found — click on "+ Add Member"'})]})}):z.map((A,P)=>a.jsxs("tr",{className:"c-tr",children:[a.jsx("td",{className:"c-td",style:{width:70,fontWeight:700,color:"#5f7f86"},children:P+1}),a.jsx("td",{className:"c-td",style:{width:120},children:a.jsx("span",{className:"c-mono",children:A.wardNo||"—"})}),a.jsx("td",{className:"c-td",style:{minWidth:200,fontWeight:700,color:"#0d4f5c"},"data-no-translate":!0,children:A.fullName||"—"}),a.jsx("td",{className:"c-td",style:{width:140},children:A.mobileNumber||"—"}),a.jsx("td",{className:"c-td",style:{minWidth:140},children:l8(A.designation)}),a.jsx("td",{className:"c-td",style:{width:120},children:xx(A.isGeneralBodyMember!==!1)}),a.jsx("td",{className:"c-td",style:{width:150},children:xx(!!A.isStandingCommitteeMember)}),a.jsx("td",{className:"c-td",style:{width:200},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsxs("button",{className:"c-edit-btn",onClick:()=>g(A),children:[a.jsx(yp,{size:14})," Edit"]}),a.jsx("button",{className:"c-del-btn",disabled:y===A._id,onClick:()=>R(A),children:y===A._id?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:11,height:11,border:"2px solid #fca5a5",borderTopColor:"#dc2626",borderRadius:"50%",display:"inline-block",animation:"cspin .7s linear infinite"}}),"Deleting…"]}):a.jsxs(a.Fragment,{children:[a.jsx(To,{size:14})," Delete"]})})]})})]},A._id))})]})}),!s&&z.length>0&&a.jsx("div",{className:"c-footer",children:a.jsxs("span",{children:["Showing ",a.jsx("strong",{style:{color:"#187484"},children:z.length})," of ",a.jsx("strong",{style:{color:"#187484"},children:n.length})," members"]})})]})]}),f&&a.jsx(bx,{allUsers:n,onClose:()=>h(!1),onSuccess:T}),x&&a.jsx(bx,{corporator:x,allUsers:n,onClose:()=>g(null),onSuccess:T})]})}const gl="https://jansamvad.saavi.co.in",u8=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],p8=["January","February","March","April","May","June","July","August","September","October","November","December"],$l=[];for(let n=7;n<=20;n++)$l.push(`${String(n).padStart(2,"0")}:00`),n<20&&$l.push(`${String(n).padStart(2,"0")}:30`);function f8(n,o){return new Date(n,o+1,0).getDate()}function g8(n,o){let s=new Date(n,o,1).getDay();return s===0?6:s-1}function m8(n,o,s){return`${n}-${String(o+1).padStart(2,"0")}-${String(s).padStart(2,"0")}`}function go(n){return new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function Il(n){const[o,s]=n.split(":").map(Number);return o*60+s}function yx(n,o){const s=Il(o)-Il(n);return`${Math.floor(s/60)}h${s%60>0?" "+s%60+"m":""}`}function h8(){const n=new Date,[o,s]=b.useState([]),[l,d]=b.useState(!0),[p,f]=b.useState(!1),[h,x]=b.useState(""),[g,y]=b.useState(null),[v,T]=b.useState(null),[R,k]=b.useState(null),[z,M]=b.useState(!1),[E,S]=b.useState(n.getFullYear()),[A,P]=b.useState(n.getMonth()),[X,D]=b.useState(null),[W,V]=b.useState(""),[de,he]=b.useState(""),[J,pe]=b.useState(window.innerWidth<640);b.useEffect(()=>{const I=()=>pe(window.innerWidth<640);return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]);const $=(I,ge="success")=>{y({msg:I,type:ge}),setTimeout(()=>y(null),3500)},me=async()=>{try{d(!0);const I=await Qe.get(`${gl}/api/availability/get`);I.data.success&&s(I.data.data)}catch{$("Failed to load availability data","error")}finally{d(!1)}};b.useEffect(()=>{me()},[]);const we=new Set(o.map(I=>I.date)),F=W?$l.filter(I=>Il(I)>Il(W)):[],ie=async()=>{if(!X)return $("कृपया date select करा!","error");if(!W)return $("Start Time select करा!","error");if(!de)return $("End Time select करा!","error");try{f(!0),(await Qe.post(`${gl}/api/availability/add-slot`,{date:X,start:W,end:de})).data.success&&($(`Slot ${W}–${de} added successfully!`),await me(),V(""),he(""),D(null),M(!1))}catch(I){$(I.response?.data?.message||"Failed to add slot","error")}finally{f(!1)}},fe=async(I,ge)=>{try{(await Qe.delete(`${gl}/api/availability/delete-slot/${I}`,{data:{slotIndex:ge}})).data.success&&($("Slot removed.","error"),await me())}catch{$("Failed to remove slot","error")}},K=async I=>{try{(await Qe.delete(`${gl}/api/availability/delete/${I}`)).data.success&&($("Availability removed.","error"),k(null),await me())}catch{$("Failed to delete","error")}},B=()=>{const I=["Date,Start Time,End Time,Status",...o.flatMap(Ce=>Ce.timeSlots.map(Ke=>`"${go(Ce.date)}","${Ke.start}","${Ke.end}","${Ce.status}"`))].join(`
`),ge=new Blob([I],{type:"text/csv"}),be=URL.createObjectURL(ge),ke=document.createElement("a");ke.href=be,ke.download="mayor_availability.csv",ke.click()},j=o.filter(I=>go(I.date).toLowerCase().includes(h.toLowerCase())),C=()=>{A===0?(P(11),S(I=>I-1)):P(I=>I-1)},q=()=>{A===11?(P(0),S(I=>I+1)):P(I=>I+1)},oe={border:"1.5px solid #c8e0cc",borderRadius:8,padding:"10px 12px",fontSize:14,color:"#1a4a2e",background:"#f8fdf8",outline:"none",cursor:"pointer",width:"100%",fontWeight:600};return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:"linear-gradient(180deg, #F0F7F7 0%, #EAF4F5 100%)",minHeight:"100vh",padding:J?"16px 12px":"24px"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        .avail-table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .avail-table { width: 100%; border-collapse: separate; border-spacing: 0; min-width: 720px; }
        .avail-card { background:#fff; border:1px solid #E3EFF0; border-radius:14px; padding:14px; margin-bottom:12px; box-shadow:0 2px 10px rgba(13,79,92,0.05); }
        .avail-card-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; }
        .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        @media (max-width: 639px) {
          .modal-grid { grid-template-columns: 1fr; gap: 20px; }
        }

        /* ── Body redesign (matches Meetings / Dashboard) ── */
        .av-body, .av-body * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
        .av-eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
        .av-eyebrow-line { height:2px; background:#E9A23B; border-radius:2px; }
        .av-eyebrow-text { font-size:12.5px; font-weight:800; letter-spacing:1.4px; color:#E08A1E; text-transform:uppercase; white-space:nowrap; }
        .av-head { display:flex; align-items:center; gap:14px; margin-bottom:18px; }
        .av-head-icon { width:54px; height:54px; border-radius:14px; background:#fff; color:#187484; display:flex; align-items:center; justify-content:center; border:1px solid #E3EFF0; box-shadow:0 4px 14px rgba(13,79,92,0.10); flex-shrink:0; }
        .av-title { margin:0 0 3px; font-size:26px; font-weight:800; color:#0d4f5c; letter-spacing:-0.3px; line-height:1.2; }
        .av-subtitle { margin:0; font-size:13.5px; font-weight:500; color:#5f7f86; }
        .av-btn-add { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:12px; padding:11px 22px; cursor:pointer; box-shadow:0 6px 16px rgba(24,116,132,0.28); transition:transform .15s, box-shadow .15s; }
        .av-btn-add:hover { transform:translateY(-1px); box-shadow:0 8px 20px rgba(24,116,132,0.36); }
        .av-btn-export { display:inline-flex; align-items:center; justify-content:center; gap:8px; font-size:14px; font-weight:800; color:#187484; background:#fff; border:1.5px solid #BFDDE1; border-radius:12px; padding:10px 20px; cursor:pointer; box-shadow:0 2px 8px rgba(13,79,92,0.06); transition:background .15s, border-color .15s; }
        .av-btn-export:hover { background:#F2F9F9; border-color:#187484; }
        .av-records-card { background:#fff; border:1px solid #E3EFF0; border-radius:16px; box-shadow:0 4px 20px rgba(13,79,92,0.06); }
        .av-section-title { margin:0; font-size:17px; font-weight:800; color:#0d4f5c; display:flex; align-items:center; gap:10px; }
        .av-section-bar { width:4px; height:22px; border-radius:3px; background:#E9A23B; display:inline-block; }
        .av-count { background:#E3F4F1; color:#0d4f5c; border-radius:20px; padding:2px 10px; font-size:13px; font-weight:800; }
        .av-search-wrap { position:relative; }
        .av-search-icon { position:absolute; left:13px; top:50%; transform:translateY(-50%); color:#187484; pointer-events:none; }
        .av-search { font-size:13.5px; font-weight:500; color:#24424a; background:#F2F9F9; border:1px solid #D6E9EB; border-radius:12px; padding:10px 14px 10px 38px; outline:none; transition:border-color .2s, box-shadow .2s, background .2s; }
        .av-search::placeholder { color:#8AA6AB; }
        .av-search:focus { border-color:#187484; background:#fff; box-shadow:0 0 0 3px rgba(24,116,132,0.12); }
        .avail-table th { padding:13px 16px; text-align:left; font-size:12.5px; font-weight:800; color:#0d4f5c; background:#E4F1F2; text-transform:uppercase; letter-spacing:0.6px; white-space:nowrap; }
        .avail-table th:first-child { border-radius:10px 0 0 10px; }
        .avail-table th:last-child  { border-radius:0 10px 10px 0; }
        .avail-table td { padding:12px 16px; border-bottom:1px solid #EEF5F6; vertical-align:middle; font-size:14px; color:#24424a; }
        .avail-table tbody tr { transition:background .15s; }
        .avail-table tbody tr:hover td { background:#F3FAFA; }
        .avail-table tbody tr:last-child td { border-bottom:none; }
        .av-date-badge { display:inline-flex; align-items:center; gap:8px; background:#EEF6F8; color:#0d4f5c; font-size:13.5px; font-weight:800; padding:6px 12px; border-radius:8px; white-space:nowrap; }
        .av-date-badge svg { color:#187484; flex-shrink:0; }
        .av-slot { display:inline-flex; align-items:center; gap:6px; background:#EEF6F8; color:#24424a; border:1px solid #DCEBEE; border-radius:8px; padding:5px 10px; font-size:12.5px; font-weight:700; white-space:nowrap; }
        .av-slot svg { color:#187484; }
        .av-slot-x { cursor:pointer; color:#C62F3B; font-weight:800; font-size:15px; line-height:1; margin-left:2px; }
        .av-slot-x:hover { color:#8f1d27; }
        .av-status { display:inline-flex; align-items:center; gap:5px; background:#E3F4F1; color:#0d6b5c; border-radius:20px; padding:5px 12px; font-size:12px; font-weight:800; white-space:nowrap; }
        .av-btn-view { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:8px; padding:7px 14px; cursor:pointer; box-shadow:0 3px 10px rgba(24,116,132,0.22); transition:filter .15s, transform .15s; }
        .av-btn-view:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .av-btn-delete { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:13px; font-weight:700; background:#FDECEE; color:#C62F3B; border:1px solid #F8D5D9; border-radius:8px; padding:7px 14px; cursor:pointer; transition:background .15s; }
        .av-btn-delete:hover { background:#FBDADE; }
        @media (max-width: 639px) { .av-title { font-size:21px; } .av-head-icon { width:46px; height:46px; } }
      `}),g&&a.jsx("div",{style:{position:"fixed",top:20,right:J?12:20,left:J?12:"auto",zIndex:9999,background:g.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"12px 20px",borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:g.msg}),a.jsxs("div",{className:"av-body",children:[a.jsxs("div",{style:{marginBottom:20},children:[a.jsxs("div",{className:"av-head",children:[a.jsx("div",{className:"av-head-icon",children:a.jsx(Ra,{size:J?21:24})}),a.jsxs("div",{children:[a.jsx("h1",{className:"av-title",children:"Mayor Availability"}),a.jsx("p",{className:"av-subtitle",children:"Mayor च्या available dates व time slots manage करा"})]})]}),a.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[a.jsxs("button",{className:"av-btn-add",onClick:()=>{D(null),V(""),he(""),S(n.getFullYear()),P(n.getMonth()),M(!0)},style:{flex:J?1:"none"},children:[a.jsx(Xp,{size:17})," Add Availability"]}),a.jsxs("button",{onClick:B,className:"av-btn-export",style:{flex:J?1:"none"},children:[a.jsx(A4,{size:16})," Export CSV"]})]})]}),a.jsxs("div",{className:"av-records-card",style:{padding:J?14:22},children:[a.jsxs("div",{style:{display:"flex",alignItems:J?"stretch":"center",flexDirection:J?"column":"row",justifyContent:"space-between",marginBottom:16,gap:12},children:[a.jsxs("h3",{className:"av-section-title",children:[a.jsx("span",{className:"av-section-bar"}),"Availability Records",a.jsx("span",{className:"av-count",children:o.length})]}),a.jsxs("div",{className:"av-search-wrap",style:{width:J?"100%":"auto"},children:[a.jsx(Ho,{className:"av-search-icon",size:16}),a.jsx("input",{type:"text",className:"av-search",placeholder:"Search by date...",value:h,onChange:I=>x(I.target.value),style:{width:J?"100%":300}})]})]}),l?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#5f7f86"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading availability..."]}):J?a.jsx("div",{children:j.length===0?a.jsx("div",{style:{textAlign:"center",padding:40,color:"#5f7f86",fontSize:14},children:"No availability records found."}):j.map((I,ge)=>{const be=new Date(I.date+"T00:00:00");return a.jsxs("div",{className:"avail-card",children:[a.jsxs("div",{className:"avail-card-row",children:[a.jsxs("div",{children:[a.jsxs("span",{className:"av-date-badge",children:[a.jsx(Ra,{size:14}),be.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})]}),a.jsx("div",{style:{fontSize:12,color:"#5f7f86",marginTop:6,fontWeight:600},children:be.toLocaleDateString("en-IN",{weekday:"long"})})]}),a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:a.jsxs("span",{className:"av-status",style:{fontSize:11},children:["✓ ",I.status]})})]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:I.timeSlots.map((ke,Ce)=>a.jsxs("span",{className:"av-slot",children:[a.jsx(Co,{size:13})," ",ke.start," – ",ke.end,a.jsx("span",{onClick:()=>fe(I._id,Ce),title:"Remove slot",className:"av-slot-x",children:"×"})]},Ce))}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsxs("button",{onClick:()=>T(I),className:"av-btn-view",style:{flex:1},children:[a.jsx(vp,{size:15})," View"]}),a.jsxs("button",{onClick:()=>k(I),className:"av-btn-delete",style:{flex:1},children:[a.jsx(To,{size:14})," Delete"]})]})]},I._id)})}):a.jsx("div",{className:"avail-table-wrap",children:a.jsxs("table",{className:"avail-table",children:[a.jsx("thead",{children:a.jsx("tr",{children:["#","Date","Day","Time Slots","Status","Actions"].map(I=>a.jsx("th",{children:I},I))})}),a.jsx("tbody",{children:j.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:40,color:"#5f7f86",fontSize:14},children:"No availability records found."})}):j.map((I,ge)=>{const be=new Date(I.date+"T00:00:00");return a.jsxs("tr",{children:[a.jsx("td",{style:{fontSize:13.5,color:"#5f7f86",fontWeight:700},children:ge+1}),a.jsx("td",{children:a.jsxs("span",{className:"av-date-badge",children:[a.jsx(Ra,{size:15}),be.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})]})}),a.jsx("td",{style:{fontSize:13.5,color:"#5f7f86",fontWeight:600},children:be.toLocaleDateString("en-IN",{weekday:"long"})}),a.jsx("td",{children:a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:I.timeSlots.map((ke,Ce)=>a.jsxs("span",{className:"av-slot",children:[a.jsx(Co,{size:14})," ",ke.start," – ",ke.end,a.jsx("span",{onClick:()=>fe(I._id,Ce),title:"Remove slot",className:"av-slot-x",children:"×"})]},Ce))})}),a.jsx("td",{children:a.jsxs("span",{className:"av-status",children:["✓ ",I.status]})}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>T(I),className:"av-btn-view",title:"View",style:{padding:"8px 11px"},children:a.jsx(vp,{size:15})}),a.jsx("button",{onClick:()=>k(I),className:"av-btn-delete",title:"Delete",style:{padding:"8px 11px"},children:a.jsx(To,{size:15})})]})})]},I._id)})})]})})]})]}),z&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:J?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:J?20:32,width:"100%",maxWidth:740,boxShadow:"0 8px 48px rgba(0,0,0,0.2)",maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{style:{margin:0,fontSize:J?16:20,fontWeight:700,color:"#1a4a2e"},children:"📅 Set Mayor Availability"}),a.jsx("button",{onClick:()=>M(!1),style:{background:"#f0f4f0",border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18},children:"✕"})]}),a.jsxs("div",{className:"modal-grid",children:[a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 14px",fontSize:14,fontWeight:700,color:"#1a4a2e"},children:"① Date Select करा"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[a.jsx("button",{onClick:C,style:{background:"#f0f4f0",border:"none",borderRadius:6,width:32,height:32,cursor:"pointer",fontSize:16},children:"←"}),a.jsxs("span",{style:{fontWeight:700,fontSize:15,color:"#1a4a2e"},children:[p8[A]," ",E]}),a.jsx("button",{onClick:q,style:{background:"#f0f4f0",border:"none",borderRadius:6,width:32,height:32,cursor:"pointer",fontSize:16},children:"→"})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:3,marginBottom:6},children:u8.map(I=>a.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:700,color:"#5a7a6a"},children:I},I))}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:3},children:[Array(g8(E,A)).fill(null).map((I,ge)=>a.jsx("div",{},"e"+ge)),Array(f8(E,A)).fill(null).map((I,ge)=>{const be=ge+1,ke=m8(E,A,be),Ce=X===ke,Ke=we.has(ke),et=new Date(ke)<new Date(n.toDateString());return a.jsxs("button",{onClick:()=>{et||(D(ke),V(""),he(""))},style:{border:"none",borderRadius:7,padding:"7px 0",cursor:et?"not-allowed":"pointer",fontWeight:Ce?700:500,fontSize:12,background:Ce?"#1a7a4a":Ke?"#d4edda":"#f8faf8",color:Ce?"#fff":Ke?"#1a7a4a":et?"#ccc":"#1a4a2e",position:"relative",transition:"all 0.15s"},children:[be,Ke&&!Ce&&a.jsx("span",{style:{position:"absolute",bottom:2,left:"50%",transform:"translateX(-50%)",width:4,height:4,borderRadius:"50%",background:"#1a7a4a",display:"block"}})]},be)})]}),X&&a.jsxs("div",{style:{marginTop:12,padding:"9px 12px",background:"#e8f5ee",borderRadius:8,fontSize:12,color:"#1a4a2e",fontWeight:600},children:["✓ ",go(X)]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 14px",fontSize:14,fontWeight:700,color:"#1a4a2e"},children:"② Time Slot Select करा"}),X?a.jsxs(a.Fragment,{children:[o.find(I=>I.date===X)?.timeSlots.length>0&&a.jsxs("div",{style:{marginBottom:14,padding:"10px 12px",background:"#fff8e1",borderRadius:8,fontSize:12,color:"#b26a00"},children:[a.jsx("strong",{children:"⚠ Existing slots:"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginTop:5},children:o.find(I=>I.date===X)?.timeSlots.map((I,ge)=>a.jsxs("span",{style:{background:"#ffe082",color:"#7a4a00",borderRadius:6,padding:"3px 8px",fontSize:12,fontWeight:600},children:[I.start," – ",I.end]},ge))})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",display:"block",marginBottom:6},children:"START TIME"}),a.jsxs("select",{value:W,onChange:I=>{V(I.target.value),he("")},style:oe,children:[a.jsx("option",{value:"",children:"-- Start Time निवडा --"}),$l.slice(0,-1).map(I=>a.jsx("option",{value:I,children:I},I))]})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",display:"block",marginBottom:6},children:"END TIME"}),a.jsxs("select",{value:de,onChange:I=>he(I.target.value),style:{...oe,opacity:W?1:.5,cursor:W?"pointer":"not-allowed"},disabled:!W,children:[a.jsx("option",{value:"",children:"-- End Time निवडा --"}),F.map(I=>a.jsx("option",{value:I,children:I},I))]})]}),W&&de&&a.jsxs("div",{style:{padding:"14px 16px",background:"#e8f5ee",borderRadius:10,border:"2px solid #1a7a4a"},children:[a.jsx("div",{style:{fontSize:11,color:"#5a7a6a",fontWeight:700,marginBottom:4,letterSpacing:1},children:"SLOT PREVIEW"}),a.jsxs("div",{style:{fontSize:J?16:20,fontWeight:700,color:"#1a4a2e"},children:["🕐 ",W," → ",de]}),a.jsxs("div",{style:{fontSize:12,color:"#5a7a6a",marginTop:4},children:["Duration: ",yx(W,de)]})]})]}):a.jsx("div",{style:{background:"#f8faf8",borderRadius:10,padding:24,textAlign:"center",color:"#aaa",fontSize:13,border:"2px dashed #d0e0d0"},children:"← आधी date select करा"})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,marginTop:24},children:[a.jsx("button",{onClick:()=>M(!1),style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e",fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:ie,disabled:p,style:{flex:2,background:p?"#888":"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:p?"not-allowed":"pointer",fontSize:14},children:p?"Adding...":"+ Add Slot"})]})]})}),v&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:J?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:J?20:32,width:"100%",maxWidth:420,boxShadow:"0 8px 40px rgba(0,0,0,0.2)"},children:[a.jsx("h3",{style:{margin:"0 0 20px",color:"#1a4a2e",fontSize:J?16:18},children:"📅 Availability Details"}),a.jsxs("div",{style:{marginBottom:12},children:[a.jsx("span",{style:{fontSize:12,color:"#888",fontWeight:600},children:"DATE"}),a.jsx("p",{style:{margin:"4px 0 0",fontWeight:700,color:"#1a4a2e",fontSize:J?13:15},children:go(v.date)})]}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("span",{style:{fontSize:12,color:"#888",fontWeight:600},children:"TIME SLOTS"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:8},children:v.timeSlots.map((I,ge)=>a.jsxs("div",{style:{background:"#e8f5ee",borderRadius:8,padding:"10px 14px",display:"flex",alignItems:"center",gap:10},children:[a.jsx("span",{style:{fontSize:16},children:"🕐"}),a.jsxs("span",{style:{fontWeight:700,color:"#1a4a2e",fontSize:J?13:15},children:[I.start," – ",I.end]}),a.jsx("span",{style:{fontSize:12,color:"#5a7a6a",marginLeft:"auto"},children:yx(I.start,I.end)})]},ge))})]}),a.jsx("button",{onClick:()=>T(null),style:{width:"100%",background:"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:"pointer",fontSize:14},children:"Close"})]})}),R&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:J?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:J?20:32,width:"100%",maxWidth:380,boxShadow:"0 8px 40px rgba(0,0,0,0.2)",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:12},children:"🗑"}),a.jsx("h3",{style:{margin:"0 0 8px",color:"#1a4a2e",fontSize:J?16:18},children:"Delete Availability?"}),a.jsxs("p",{style:{color:"#666",fontSize:J?13:14,marginBottom:24},children:[a.jsx("strong",{children:go(R.date)})," ची सर्व availability remove होईल."]}),a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("button",{onClick:()=>k(null),style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"11px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e"},children:"Cancel"}),a.jsx("button",{onClick:()=>K(R._id),style:{flex:1,background:"#c0392b",color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:"pointer"},children:"Delete"})]})]})})]})}function Ep(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function x8(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function b8(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function y1(n){return n?n.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2):"?"}const vx=["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];function v1(n){let o=0;for(let s=0;s<(n||"").length;s++)o=n.charCodeAt(s)+((o<<5)-o);return vx[Math.abs(o)%vx.length]}const jx={pending:{bg:"#fff8e1",color:"#b26a00",border:"#ffe082",dot:"#f59e0b",label:"Pending"},approved:{bg:"#d4edda",color:"#1a7a4a",border:"#a8d5b5",dot:"#1a7a4a",label:"Approved"},rejected:{bg:"#fdecea",color:"#c0392b",border:"#f5c6cb",dot:"#c0392b",label:"Rejected"},"in progress":{bg:"#e8f0fe",color:"#1a4a8a",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},resolved:{bg:"#e8f5ee",color:"#1a4a2e",border:"#a8d5b5",dot:"#22c55e",label:"Resolved"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",dot:"#9ca3af",label:"Expired"}};function Dp(n){return jx[(n||"pending").toLowerCase()]||jx.pending}function y8({appt:n,onClose:o,onRefresh:s,showToast:l}){const[d,p]=b.useState(n.adminNote||""),[f,h]=b.useState(n.status||"pending"),[x,g]=b.useState(!1),[y,v]=b.useState(null),T=async()=>{try{g(!0);const R=new FormData;R.append("status",f),R.append("adminNote",d),y&&R.append("replyDocument",y),await Ot.patch(`/citizen/admin/update-status/${n._id}`,R,{headers:{"Content-Type":"multipart/form-data"}});const k=n.mobileNumber?.replace(/\D/g,"").slice(-10),z="Jan Samvaad",M="VVCMC",E="VVCMCJS",S="Vasai Virar City Municipal Corporation",A=n.fullName,P=n.microStart,X=n.microEnd,D=n.tokenId,W={pending:"Pending — Awaiting Mayor's Approval",approved:"Approved by Respected Mayor Ajiv Patil Sir",rejected:"Rejected by Respected Mayor Ajiv Patil Sir",cancelled:"Cancelled"}[f]||f;if(k){console.log("mobile>>>>",k,z,M,"Repected Mayor Ajiv Patil Sir",E,n.preferredDate,Ep(n.preferredDate),n.microSlot,n.slotTime,n.tokenId);const de=`Dear ${n.fullName}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been updated. Appointment Status: ${W} Date: ${Ep(n.preferredDate)} Time Slot: ${P} - ${X} Token No: ${D} Please carry this Token No on your visit day. SAAVI INFINET`,he=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379326&number=${k}&message=${encodeURIComponent(de)}`;fetch(he,{method:"GET",mode:"no-cors"}).catch(()=>{})}l(`Status updated to "${f}" & citizen notified!`,"success"),s(),o()}catch(R){l(R?.response?.data?.message||"Update failed","error")}finally{g(!1)}};return Dp(f),a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:o,children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,width:"100%",maxWidth:560,maxHeight:"92vh",overflowY:"auto",boxShadow:"0 8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:R=>R.stopPropagation(),children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 28px",borderBottom:"2px solid #d4edda",background:"#f0f7f2",borderRadius:"16px 16px 0 0"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:v1(n.fullName),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:16},children:y1(n.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:"#5a7a6a",fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Application Details"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:18,fontWeight:700,color:"#1a4a2e"},children:n.tokenId||n._id?.slice(-8)})]})]}),a.jsx("button",{onClick:o,style:{background:"#e8f5ee",border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18,color:"#1a4a2e"},children:"✕"})]}),a.jsxs("div",{style:{padding:"22px 28px"},children:[n.visitorPhoto&&a.jsx("div",{style:{textAlign:"center",marginBottom:16},children:a.jsx("img",{src:n.visitorPhoto.startsWith("http")?n.visitorPhoto:`http://localhost:5000/${n.visitorPhoto}`,alt:"visitor",style:{width:80,height:80,borderRadius:"50%",objectFit:"cover",border:"3px solid #1a7a4a"}})}),a.jsx("div",{style:{border:"1.5px solid #d4edda",borderRadius:10,overflow:"hidden",marginBottom:16},children:[["Applicant",n.fullName],["Mobile",n.mobileNumber],["Email",n.email||"—"],["Ward",n.ward||"—"],["Address",n.address||"—"],["Preferred Date",b8(n.preferredDate)],["Time Slot",n.slotTime||"—"],["Visitors",n.numberOfVisitors],["Visited Before",n.visitedBefore?"Yes":"No"],["Purpose",n.purpose],["Submitted On",x8(n.createdAt)]].filter(([,R])=>R).map(([R,k])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 14px",borderBottom:"1px solid #eef4ee",fontSize:13},children:[a.jsx("span",{style:{color:"#5a7a6a",fontWeight:600,flexShrink:0,width:130},children:R}),a.jsx("span",{style:{color:"#1a4a2e",fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:k})]},R))}),n.qrCode&&a.jsxs("div",{style:{textAlign:"center",padding:"12px 0 8px",borderTop:"1px solid #eef4ee",marginBottom:12},children:[a.jsx("p",{style:{fontSize:11,color:"#5a7a6a",marginBottom:6,fontWeight:600},children:"QR Code"}),a.jsx("img",{src:n.qrCode,alt:"QR",style:{width:110,height:110}})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Update Status"}),a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["pending","approved","rejected"].map(R=>{const k=Dp(R),z=f===R;return a.jsxs("button",{onClick:()=>h(R),style:{padding:"6px 16px",borderRadius:20,border:`1.5px solid ${z?k.border:"#c8e0cc"}`,background:z?k.bg:"#f8fdf8",color:z?k.color:"#5a7a6a",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"},children:[a.jsx("span",{style:{display:"inline-block",width:7,height:7,borderRadius:"50%",background:z?k.dot:"#a8c8b0",marginRight:5,verticalAlign:"middle"}}),k.label]},R)})})]}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Reply / Note to Citizen"}),a.jsx("textarea",{value:d,onChange:R=>p(R.target.value),placeholder:"Write a note or reply that will be sent to the citizen as acknowledgement...",rows:4,style:{width:"100%",padding:"10px 14px",fontSize:13,border:"1.5px solid #c8e0cc",borderRadius:8,outline:"none",fontFamily:"'Segoe UI', sans-serif",resize:"vertical",boxSizing:"border-box",color:"#1a4a2e",background:"#f8fdf8",transition:"border-color .15s"},onFocus:R=>R.target.style.borderColor="#1a7a4a",onBlur:R=>R.target.style.borderColor="#c8e0cc"})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Attach Reply Document"}),a.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png,.webp",onChange:R=>v(R.target.files[0]),style:{border:"1.5px solid #c8e0cc",borderRadius:8,padding:"8px 12px",fontSize:13,color:"#1a4a2e",background:"#f8fdf8",width:"100%",boxSizing:"border-box"}})]}),a.jsx("div",{style:{background:"#e8f5ee",border:"1.5px solid #a8d5b5",borderRadius:8,padding:"10px 14px",marginBottom:16,fontSize:12,color:"#1a4a2e"},children:"ℹ️ Saving will update the citizen's application status and send an acknowledgement notification automatically."}),a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("button",{onClick:o,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e",fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:T,disabled:x,style:{flex:2,background:x?"#888":"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:x?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:x?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:13,height:13,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Saving..."]}):"✔ Save & Notify Citizen"})]})]})]})})}function v8(){const[n,o]=b.useState([]),[s,l]=b.useState(!0),[d,p]=b.useState(""),[f,h]=b.useState("all"),[x,g]=b.useState(null),[y,v]=b.useState(null),[T,R]=b.useState([]),[k,z]=b.useState(!1),M=(D,W="success")=>{v({msg:D,type:W}),setTimeout(()=>v(null),3500)},E=async()=>{try{l(!0);const D=await Ot.get("/citizen/admin/all-appointments");D.data.success&&o(D.data.appointments||[])}catch{}finally{l(!1)}};b.useEffect(()=>{E()},[]);const S={all:n.length,pending:n.filter(D=>D.status?.toLowerCase()==="pending").length,"in progress":n.filter(D=>D.status?.toLowerCase()==="in progress").length,approved:n.filter(D=>D.status?.toLowerCase()==="approved").length,rejected:n.filter(D=>D.status?.toLowerCase()==="rejected").length,resolved:n.filter(D=>D.status?.toLowerCase()==="resolved").length},A=n.filter(D=>{const W=f==="all"||D.status?.toLowerCase()===f,V=d.toLowerCase(),de=!V||D.fullName?.toLowerCase().includes(V)||D.tokenId?.toLowerCase().includes(V)||D.purpose?.toLowerCase().includes(V)||D.mobileNumber?.includes(V)||D.ward?.toLowerCase().includes(V);return W&&de}),P=()=>{k?(R([]),z(!1)):(R(A.map((D,W)=>W)),z(!0))},X=D=>R(W=>W.includes(D)?W.filter(V=>V!==D):[...W,D]);return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:"linear-gradient(180deg, #F0F7F7 0%, #EAF4F5 100%)",minHeight:"100vh",padding:"24px"},children:[y&&a.jsx("div",{style:{position:"fixed",top:20,right:20,zIndex:9999,background:y.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"12px 20px",borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:y.msg}),a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
        .ac-body, .ac-body * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
        .ac-head-icon { width:54px; height:54px; border-radius:14px; background:#fff; color:#187484; display:flex; align-items:center; justify-content:center; border:1px solid #E3EFF0; box-shadow:0 4px 14px rgba(13,79,92,0.10); flex-shrink:0; }
        .ac-count { background:#E3F4F1; color:#0d4f5c; border-radius:20px; padding:3px 11px; font-size:13px; font-weight:800; }
        .ac-ref-btn { display:inline-flex; align-items:center; gap:7px; background:#fff; color:#187484; border:1.5px solid #BFDDE1; border-radius:12px; padding:10px 20px; font-weight:800; font-size:14px; cursor:pointer; box-shadow:0 2px 8px rgba(13,79,92,0.06); transition:background .15s, border-color .15s; }
        .ac-ref-btn:hover { background:#F2F9F9; border-color:#187484; }
        .ac-search { width:100%; padding:11px 14px 11px 40px; font-size:13.5px; border:1px solid #D6E9EB; border-radius:12px; outline:none; background:#fff; color:#24424a; transition:border-color .2s, box-shadow .2s; }
        .ac-search::placeholder { color:#8AA6AB; }
        .ac-search:focus { border-color:#187484; box-shadow:0 0 0 3px rgba(24,116,132,0.12); }
        .ac-tab { padding:7px 18px; border-radius:20px; font-size:13px; font-weight:700; cursor:pointer; border:1px solid #D6E9EB; background:#fff; color:#3d6870; transition:all .15s; }
        .ac-tab:hover { border-color:#187484; color:#187484; }
        .ac-tab.active { border-color:transparent; color:#fff; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); box-shadow:0 4px 12px rgba(24,116,132,0.25); }
        .ac-card { background:#fff; border:1px solid #E3EFF0; border-radius:16px; box-shadow:0 4px 20px rgba(13,79,92,0.06); overflow-x:auto; }
        .ac-table thead th:nth-child(1) { border-radius:10px 0 0 10px; }
        .ac-table thead th:last-child  { border-radius:0 10px 10px 0; }
        .ac-table tbody tr td { border-bottom:1px solid #EEF5F6; }
        .ac-table tbody tr:last-child td { border-bottom:none; }
        .ac-reply-btn { display:inline-flex; align-items:center; gap:5px; background:linear-gradient(135deg,#1f8a9b 0%,#187484 55%,#0d4f5c 100%); border:none; border-radius:8px; padding:6px 13px; cursor:pointer; color:#fff; font-size:12px; font-weight:700; box-shadow:0 3px 10px rgba(24,116,132,0.22); transition:filter .15s; }
        .ac-reply-btn:hover { filter:brightness(1.08); }
      `}),a.jsxs("div",{className:"ac-body",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[a.jsx("div",{className:"ac-head-icon",children:a.jsx(bo,{size:24})}),a.jsxs("div",{children:[a.jsxs("h1",{style:{margin:0,fontSize:26,fontWeight:800,color:"#0d4f5c",display:"flex",alignItems:"center",gap:10,letterSpacing:"-0.3px"},children:["Applications For Appointment",a.jsx("span",{className:"ac-count",children:n.length})]}),a.jsx("p",{style:{margin:"4px 0 0",color:"#5f7f86",fontSize:13.5,fontWeight:500},children:"CitizenBridge — Inward Records · All citizen appointment requests"})]})]}),a.jsxs("button",{onClick:E,className:"ac-ref-btn",children:[a.jsx(a1,{size:15})," Refresh"]})]}),a.jsxs("div",{style:{position:"relative",marginBottom:16},children:[a.jsx(Ho,{size:16,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"#187484",pointerEvents:"none"}}),a.jsx("input",{type:"text",className:"ac-search",placeholder:"Search by name, token ID, mobile, purpose, ward...",value:d,onChange:D=>p(D.target.value)})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap"},children:[[{key:"all",label:"All",count:S.all},{key:"pending",label:"Pending",count:S.pending},{key:"in progress",label:"In Progress",count:S["in progress"]},{key:"approved",label:"Approved",count:S.approved},{key:"resolved",label:"Resolved",count:S.resolved},{key:"rejected",label:"Rejected",count:S.rejected}].map(D=>a.jsxs("button",{onClick:()=>{h(D.key),R([]),z(!1)},className:`ac-tab${f===D.key?" active":""}`,children:[D.label," ",D.count]},D.key)),f!=="all"&&a.jsx("button",{onClick:()=>h("all"),style:{marginLeft:"auto",fontSize:12,color:"#187484",background:"none",border:"none",cursor:"pointer",fontWeight:800},children:"CLEAR"})]}),a.jsxs("div",{className:"ac-card",children:[a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 22px 12px"},children:a.jsxs("h3",{style:{margin:0,fontSize:17,fontWeight:800,color:"#0d4f5c",display:"flex",alignItems:"center",gap:10},children:[a.jsx("span",{style:{width:4,height:22,borderRadius:3,background:"#E9A23B",display:"inline-block"}}),"Application Records",a.jsx("span",{className:"ac-count",children:n.length})]})}),s?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#5f7f86"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):a.jsx("div",{style:{padding:"0 16px 6px"},children:a.jsxs("table",{className:"ac-table",style:{width:"100%",borderCollapse:"separate",borderSpacing:0,minWidth:1100},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:wx,children:a.jsx("input",{type:"checkbox",checked:k,onChange:P,style:{width:15,height:15,cursor:"pointer",accentColor:"#187484"}})}),["Reply","#","Applicant","Token / Inward No","Purpose / Subject","Status","Date","Slot",""].map(D=>a.jsx("th",{style:wx,children:D},D))]})}),a.jsx("tbody",{children:A.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:10,style:{textAlign:"center",padding:48,color:"#5f7f86",fontSize:14},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📋"}),d?"No matching applications found.":"No applications yet."]})}):A.map((D,W)=>{const V=Dp(D.status),de=T.includes(W),he=v1(D.fullName);return a.jsxs("tr",{style:{background:de?"#E9F5F6":"transparent",cursor:"pointer",transition:"background .15s"},onMouseOver:J=>{de||(J.currentTarget.style.background="#F3FAFA")},onMouseOut:J=>{J.currentTarget.style.background=de?"#E9F5F6":"transparent"},onClick:()=>g(D),children:[a.jsx("td",{style:Da,onClick:J=>J.stopPropagation(),children:a.jsx("input",{type:"checkbox",checked:de,onChange:()=>X(W),style:{width:15,height:15,cursor:"pointer",accentColor:"#187484"}})}),a.jsx("td",{style:Da,onClick:J=>J.stopPropagation(),children:a.jsxs("button",{onClick:()=>g(D),className:"ac-reply-btn",children:[a.jsx(z4,{size:13})," Reply"]})}),a.jsx("td",{style:{...Da,color:"#5f7f86",fontSize:13.5,fontWeight:700},children:W+1}),a.jsx("td",{style:Da,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:he,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:13,flexShrink:0},children:y1(D.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:13.5,fontWeight:800,color:"#0d4f5c"},children:D.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:11.5,color:"#5f7f86"},children:D.mobileNumber||"—"})]})]})}),a.jsx("td",{style:Da,children:a.jsx("span",{style:{background:"#E3F4F1",color:"#0d4f5c",borderRadius:8,padding:"5px 11px",fontSize:12.5,fontWeight:800,whiteSpace:"nowrap"},children:D.tokenId||D._id?.slice(-10)||"—"})}),a.jsx("td",{style:{...Da,maxWidth:240},children:a.jsx("span",{style:{fontSize:13.5,color:"#24424a",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block"},title:D.purpose,children:D.purpose?.length>50?D.purpose.slice(0,50)+"…":D.purpose||"—"})}),a.jsx("td",{style:Da,children:a.jsxs("span",{style:{background:V.bg,color:V.color,border:`1px solid ${V.border}`,borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,display:"inline-flex",alignItems:"center",gap:5,whiteSpace:"nowrap"},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:V.dot,display:"inline-block"}}),V.label]})}),a.jsx("td",{style:Da,children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#EEF6F8",color:"#24424a",borderRadius:8,padding:"5px 11px",fontSize:12.5,fontWeight:700,whiteSpace:"nowrap"},children:[a.jsx(Ra,{size:13,color:"#187484"}),Ep(D.preferredDate)]})}),a.jsx("td",{style:Da,children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7,fontSize:12.5,color:"#24424a",background:"#EEF6F8",padding:"5px 11px",borderRadius:8,fontWeight:700,whiteSpace:"nowrap"},children:[a.jsx(Co,{size:13,color:"#187484"}),D.slotTime||"—"]})}),a.jsx("td",{style:{...Da,fontSize:12.5,color:"#5f7f86",fontWeight:600},children:D.ward||"—"})]},D._id||W)})})]})}),!s&&A.length>0&&a.jsxs("div",{style:{margin:"6px 16px 16px",padding:"11px 16px",borderRadius:10,background:"#F2F9F9",fontSize:12.5,color:"#5f7f86",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8},children:[a.jsxs("span",{children:["Showing ",a.jsx("strong",{style:{color:"#187484"},children:A.length})," of ",a.jsx("strong",{style:{color:"#187484"},children:n.length})," applications",T.length>0&&a.jsxs("span",{style:{color:"#187484",fontWeight:700},children:[" · ",T.length," selected"]})]}),a.jsx("span",{children:"💡 Click any row to view full details & reply"})]})]})]}),x&&a.jsx(y8,{appt:x,onClose:()=>g(null),onRefresh:E,showToast:M}),a.jsx("style",{children:"@keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } } @keyframes spin { to { transform: rotate(360deg); } }"})]})}const wx={padding:"13px 14px",textAlign:"left",fontSize:12.5,fontWeight:800,color:"#0d4f5c",background:"#E4F1F2",whiteSpace:"nowrap",textTransform:"uppercase",letterSpacing:.6},Da={padding:"12px 14px",fontSize:14,color:"#24424a",verticalAlign:"middle"},Sx=["Super Admin","Guardian Minister","Mayor","Admin"],kx=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}};function j8(n,o,s,l){if(!n||!o||!s)return!1;const d=new Date,[p,f,h]=n.split("-").map(Number);let x=parseInt(o,10);l==="PM"&&x!==12&&(x+=12),l==="AM"&&x===12&&(x=0);const g=new Date(p,f-1,h,x,parseInt(s,10),0);return d>=g}function w8({onDecisionExtracted:n,onTranscriptUpdate:o,onRecordingReady:s}){const[l,d]=b.useState(!1),[p,f]=b.useState(!1),[h,x]=b.useState(!1),[g,y]=b.useState(""),[v,T]=b.useState(!1),[R,k]=b.useState(null),[z,M]=b.useState(null),E=b.useRef(null),S=b.useRef(null),A=b.useRef(null),P=b.useRef([]),X=b.useRef(null),D=b.useRef(null),W=b.useRef(!1),V=-42,de=2e3,he=me=>{const we=new(window.AudioContext||window.webkitAudioContext),F=we.createAnalyser();F.fftSize=512,we.createMediaStreamSource(me).connect(F),E.current=we;const ie=new Uint8Array(F.frequencyBinCount),fe=()=>{X.current=requestAnimationFrame(fe),F.getByteFrequencyData(ie);const K=ie.reduce((C,q)=>C+q,0)/ie.length,j=(K===0?-1/0:20*Math.log10(K/255))>V;j!==W.current&&(W.current=j,f(j),j?(clearTimeout(D.current),y("🗣️ Speaking...")):(y("🤫 Silence..."),D.current=setTimeout(()=>{W.current||y("👂 Waiting...")},de)))};fe()},J=async()=>{M(null);try{const me=await navigator.mediaDevices.getUserMedia({audio:!0});if(S.current=me,he(me),h){P.current=[],T(!1),k(null);const we=new MediaRecorder(me);we.ondataavailable=F=>{F.data.size>0&&P.current.push(F.data)},we.onstop=()=>{const F=new Blob(P.current,{type:"audio/webm"}),ie=URL.createObjectURL(F);k(ie),T(!0),s?.(ie)},we.start(),A.current=we}d(!0),y("👂 Waiting for someone to speak...")}catch(me){const we=me?.name==="NotAllowedError"||me?.name==="PermissionDeniedError",F=me?.name==="NotFoundError";M(F?"notfound":we?"denied":"other"),y("")}},pe=()=>{cancelAnimationFrame(X.current),clearTimeout(D.current),E.current?.close(),S.current?.getTracks().forEach(me=>me.stop()),A.current?.state==="recording"&&A.current.stop(),W.current=!1,f(!1),d(!1),y("⏹️ Session ended.")},$=()=>{pe(),k(null),T(!1),y("")};return a.jsxs("div",{className:"mr-wrap",children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14,marginBottom:12},children:[a.jsx("div",{className:`mr-vad-ring ${p?"speaking":""}`,children:p?"🗣️":l?"👂":"🎙️"}),a.jsxs("div",{style:{flex:1},children:[a.jsxs("label",{className:"mr-toggle",children:[a.jsx("input",{type:"checkbox",checked:h,onChange:me=>x(me.target.checked),disabled:l,style:{display:"none"}}),a.jsx("div",{className:`mr-toggle-track ${h?"on":""}`,children:a.jsx("div",{className:"mr-toggle-thumb"})}),a.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#3a6b50"},children:h?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"mr-rec-dot"}),"Audio Recording ON"]}):"Audio Recording (optional)"})]}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[l?a.jsx("button",{className:"mr-btn mr-btn-grey",onClick:pe,children:"⏹ Stop Session"}):a.jsx("button",{className:"mr-btn mr-btn-green",onClick:J,children:"▶ Start Session"}),a.jsx("button",{className:"mr-btn mr-btn-red",onClick:$,disabled:l,children:"🔄 Reset"})]})]})]}),z&&a.jsxs("div",{style:{background:z==="notfound"?"#fff8e1":"#fdecea",border:`1.5px solid ${z==="notfound"?"#ffe082":"#f5c6c2"}`,borderRadius:10,padding:"12px 14px",marginBottom:12,fontSize:13,fontWeight:500,color:"#3a2a2a"},children:[z==="denied"&&a.jsx("div",{style:{fontWeight:800,color:"#c0392b"},children:"🚫 Microphone Permission Denied"}),z==="notfound"&&a.jsx("div",{style:{fontWeight:800,color:"#b07a00"},children:"🎤 Microphone Not Found"}),z==="other"&&a.jsx("div",{style:{fontWeight:800,color:"#c0392b"},children:"❌ Microphone Could Not Start — Refresh page"})]}),a.jsx("div",{style:{fontSize:12,fontWeight:600,color:"#7a9a88",minHeight:16,marginBottom:10},children:g}),v&&R&&a.jsxs("div",{style:{marginTop:10,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#1a4a2e"},children:"🔴 Recording ready:"}),a.jsx("a",{href:R,download:"meeting-recording.webm",className:"mr-btn mr-btn-teal",style:{textDecoration:"none"},children:"⬇ Download"}),a.jsx("audio",{controls:!0,src:R,style:{height:32,flex:1,minWidth:120}})]})]})}function S8(){const n=vt(),[o,s]=b.useState([]),[l,d]=b.useState(""),[p,f]=b.useState(!1),[h,x]=b.useState(null),[g,y]=b.useState(!1),[v,T]=b.useState(null),[R,k]=b.useState(null),[z,M]=b.useState(window.innerWidth<640),[E,S]=b.useState(!1),A=b.useRef(null),[P,X]=b.useState(null),[D,W]=b.useState(null),V=b.useRef(""),[de,he]=b.useState([]),[J,pe]=b.useState([]),[$,me]=b.useState(null),F=kx()?.role||"",ie=Sx.includes(F);b.useEffect(()=>{const O=()=>M(window.innerWidth<640);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]);const fe=O=>{const L=new Date,ne=L.getFullYear(),ce=L.toLocaleString("en-US",{month:"short"}).toUpperCase(),xe=String(L.getDate()).padStart(2,"0"),Ie=String((O?.length??0)+1).padStart(4,"0");return`MTG-${ne}-${ce}-${xe}-${Ie}`},K={meetingNumber:"",meetingType:"",meetingDate:"",meetingHour:"",meetingMinute:"",meetingAmpm:"AM"},[B,j]=b.useState(K),C=j8(B.meetingDate,B.meetingHour,B.meetingMinute,B.meetingAmpm),q=(O,L="success")=>{x({msg:O,type:L}),setTimeout(()=>x(null),3e3)},oe=O=>{if(!O)return"-";const[L,ne]=O.split(":");let ce=parseInt(L,10);const xe=ce>=12?"PM":"AM";return ce=ce%12||12,`${ce}:${ne} ${xe}`},I=async(O="")=>{try{y(!0);const L=O?{search:O}:{},ce=(await Ue.get("/getMeetings",{params:L})).data;if(ce.success){const xe=kx(),Ie=xe?.role||"",bt=xe?.departmentName||"",Ze=Sx.includes(Ie),Rt=ce.data||[];if(Ze)s(Rt);else if(["corporator","ward councillor"].includes(Ie.toLowerCase()))s(Rt);else{const St=Rt.filter(ze=>Array.isArray(ze.subjects)&&ze.subjects.some(nt=>Array.isArray(nt.tagTo)&&nt.tagTo.includes(bt)));s(St)}}else q(ce.message||"Failed to fetch","error")}catch{q("Server error.","error")}finally{y(!1)}};b.useEffect(()=>{I()},[]),b.useEffect(()=>{const O=setTimeout(()=>I(l),400);return()=>clearTimeout(O)},[l]);const ge=O=>j({...B,[O.target.name]:O.target.value}),be=async()=>{T(null),S(!1),A.current=null,X(null),W(null),V.current="",he([]),pe([]),f(!0);try{const L=(await Ue.get("/getNextMeetingId")).data;j({...K,meetingNumber:L.success?L.meetingId:fe(o)})}catch{j({...K,meetingNumber:fe(o)})}},ke=O=>{T(O._id),j({meetingNumber:O.meetingNumber,meetingType:O.meetingType,meetingDate:O.meetingDate?O.meetingDate.slice(0,10):"",meetingHour:O.meetingTime?(()=>{const L=parseInt(O.meetingTime.split(":")[0],10);return String(L%12||12).padStart(2,"0")})():"",meetingMinute:O.meetingTime?O.meetingTime.split(":")[1]:"",meetingAmpm:O.meetingTime&&parseInt(O.meetingTime.split(":")[0],10)>=12?"PM":"AM"}),S(!1),V.current=O.aiExtractedDecision||"",A.current=O.meetingRecording||null,X(O.meetingRecording||null),W(null),he([]),pe(O.agendaFiles||[]),f(!0)},Ce=()=>{if(!B.meetingHour||!B.meetingMinute)return"";let O=parseInt(B.meetingHour,10);return B.meetingAmpm==="PM"&&O!==12&&(O+=12),B.meetingAmpm==="AM"&&O===12&&(O=0),`${String(O).padStart(2,"0")}:${B.meetingMinute}`},Ke=async()=>{try{y(!0);const O=new FormData;O.append("meetingNumber",B.meetingNumber),O.append("meetingType",B.meetingType),B.meetingDate&&O.append("meetingDate",B.meetingDate),Ce()&&O.append("meetingTime",Ce()),de.forEach(ce=>O.append("agendaFiles",ce));const ne=(await Ue.post("/createMeeting",O)).data;ne.success?(f(!1),q("Meeting created!"),I(l)):q(ne.message||"Failed","error")}catch{q("Server error.","error")}finally{y(!1)}},et=async()=>{try{y(!0);const O=new FormData;O.append("meetingNumber",B.meetingNumber),O.append("meetingType",B.meetingType),B.meetingDate&&O.append("meetingDate",B.meetingDate),Ce()&&O.append("meetingTime",Ce());const L=V.current?.trim();L&&O.append("aiExtractedDecision",L),O.append("existingAgendaFiles",JSON.stringify(J)),de.forEach(Ie=>O.append("agendaFiles",Ie)),D&&O.append("meetingRecording",D);const ne=A.current;if(ne&&ne.startsWith("blob:"))try{const bt=await(await fetch(ne)).blob();O.append("meetingRecordingBlob",new File([bt],"auto-recording.webm",{type:"audio/webm"}))}catch{}else ne&&!D&&O.append("existingRecordingUrl",ne);const xe=(await Ue.put(`/updateMeeting/${v}`,O)).data;xe.success?(f(!1),T(null),q("Meeting updated!"),I(l)):q(xe.message||"Failed","error")}catch{q("Server error.","error")}finally{y(!1)}},Gt=()=>{if(!B.meetingNumber||!B.meetingType){q("Please fill required fields","error");return}v?et():Ke()},Lt=async O=>{try{y(!0);const ne=(await Ue.delete(`/deleteMeeting/${O}`)).data;ne.success?(k(null),q("Meeting deleted!"),I(l)):q(ne.message||"Failed","error")}catch{q("Server error.","error")}finally{y(!1)}},se=O=>{n(`/proceedingsmeeting/${O._id}`,{state:{meetingNumber:O.meetingNumber,meetingType:O.meetingType,meetingDate:O.meetingDate||null,meetingTime:O.meetingTime||null}})},je=O=>{const L=O.match(/\.pdf$/i),ne=O.match(/\.(doc|docx)$/i),ce=O.match(/\.(xls|xlsx)$/i),xe=O.match(/\.(png|jpg|jpeg|gif|webp)$/i);return{type:L?"pdf":ne?"doc":ce?"xl":xe?"img":"other",icon:L?"📄":ne?"📝":ce?"📊":xe?"🖼️":"📁",label:L?"PDF":ne?"DOC":ce?"Excel":xe?"Image":"File"}},G=async O=>{const{type:L}=je(O),ne=O.split("/").pop()?.split("?")[0]||"Document";if(L==="img"){me({url:O,name:ne,type:L});return}try{const xe=(await Ue.post("/getSignedFileUrl",{fileUrl:O})).data;xe.success?me({url:xe.url,name:ne,type:L}):me({url:O,name:ne,type:L})}catch{me({url:O,name:ne,type:L})}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
        .pm-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
        .pm-table tbody tr { transition: background 0.15s; }
        .pm-table tbody tr:hover td { background: #F3FAFA; }
        .meeting-no-link { display: inline-block; background: #E3F4F1; color: #0d4f5c; font-weight: 800; font-size: 13px; padding: 5px 12px; border-radius: 8px; letter-spacing: 0.3px; cursor: pointer; text-decoration: underline; text-underline-offset: 3px; transition: background 0.15s, color 0.15s; }
        .meeting-no-link:hover { background: #187484; color: #fff; }
        .time-badge, .date-badge { display: inline-flex; align-items: center; gap: 8px; background: #EEF6F8; color: #24424a; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 8px; white-space: nowrap; }
        .time-badge svg, .date-badge svg { color: #187484; flex-shrink: 0; }
        .pm-table { width: 100%; min-width: 860px; border-collapse: separate; border-spacing: 0; }
        .pm-table th { font-size: 12.5px; font-weight: 800; color: #0d4f5c; padding: 13px 16px; text-align: left; background: #E4F1F2; white-space: nowrap; text-transform: uppercase; letter-spacing: 0.6px; }
        .pm-table th:first-child { border-radius: 10px 0 0 10px; }
        .pm-table th:last-child  { border-radius: 0 10px 10px 0; }
        .pm-table td { font-size: 14px; font-weight: 500; color: #24424a; padding: 12px 16px; border-bottom: 1px solid #EEF5F6; vertical-align: middle; }
        .pm-table tbody tr:last-child td { border-bottom: none; }
        .pm-table td:first-child { color: #5f7f86; font-weight: 700; font-size: 13.5px; }
        .pm-search-wrap { position: relative; }
        .pm-search-icon { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); color: #187484; pointer-events: none; }
        .pm-search { font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500; color: #24424a; background: #F2F9F9; border: 1px solid #D6E9EB; border-radius: 12px; padding: 10px 14px 10px 38px; outline: none; transition: border-color 0.2s, box-shadow 0.2s, background 0.2s; }
        .pm-search::placeholder { color: #8AA6AB; }
        .pm-search:focus { border-color: #187484; background: #fff; box-shadow: 0 0 0 3px rgba(24,116,132,0.12); }
        .pm-input { font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500; width: 100%; padding: 10px 12px; border-radius: 8px; border: 1.5px solid #c8e0cc; outline: none; color: #2d3d35; transition: border-color 0.2s; }
        .pm-input:focus { border-color: #1a7a4a; }
        .pm-input-readonly { font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 700; width: 100%; padding: 10px 12px; border-radius: 8px; border: 1.5px solid #a8d5b5; outline: none; color: #1a4a2e; background: #f0f9f3; cursor: not-allowed; letter-spacing: 0.3px; }
        .pm-label { font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 700; color: #5a7a6a; margin-bottom: 4px; display: block; }
        .pm-auto-badge { display: inline-block; background: #d4edda; color: #1a6640; font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 20px; margin-left: 6px; letter-spacing: 0.4px; text-transform: uppercase; vertical-align: middle; }
        .pm-btn-primary { font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 700; background: #1a7a4a; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; letter-spacing: 0.2px; transition: background 0.15s; }
        .pm-btn-primary:hover { background: #155e39; }
        .pm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
        .pm-btn-cancel { font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 600; background: #eef2ee; color: #4a6a5a; border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; }
        .pm-btn-cancel:hover { background: #e0e8e2; }
        .pm-actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        .pm-btn-view { font-family: 'Nunito Sans', sans-serif; display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #1f8a9b 0%, #187484 55%, #0d4f5c 100%); border: none; border-radius: 8px; padding: 7px 14px; cursor: pointer; box-shadow: 0 3px 10px rgba(24,116,132,0.22); transition: filter 0.15s, transform 0.15s; }
        .pm-btn-view:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .pm-btn-edit { font-family: 'Nunito Sans', sans-serif; display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; background: #E8F1FD; color: #1F5FAD; border: 1px solid #D3E4F8; border-radius: 8px; padding: 7px 14px; cursor: pointer; transition: background 0.15s; }
        .pm-btn-edit:hover { background: #D7E8FB; }
        .pm-btn-delete { font-family: 'Nunito Sans', sans-serif; display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; background: #FDECEE; color: #C62F3B; border: 1px solid #F8D5D9; border-radius: 8px; padding: 7px 14px; cursor: pointer; transition: background 0.15s; }
        .pm-btn-delete:hover { background: #FBDADE; }
        .pm-card { border: 1px solid #E3EFF0; border-radius: 14px; padding: 14px; background: #fff; margin-bottom: 12px; cursor: pointer; box-shadow: 0 2px 10px rgba(13,79,92,0.05); transition: box-shadow 0.15s, border-color 0.15s; }
        .pm-card:hover { box-shadow: 0 4px 16px rgba(13,79,92,0.10); border-color: #BFDDE1; }
        .pm-card-row { display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 500; padding: 6px 0; border-bottom: 1px solid #EEF5F6; color: #24424a; }
        .pm-card-label { color: #5f7f86; font-weight: 700; min-width: 110px; font-size: 12.5px; }
        .pm-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .pm-eyebrow-line { height: 2px; background: #E9A23B; border-radius: 2px; }
        .pm-eyebrow-text { font-size: 12.5px; font-weight: 800; letter-spacing: 1.4px; color: #E08A1E; text-transform: uppercase; white-space: nowrap; }
        .pm-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .pm-head-icon { width: 54px; height: 54px; border-radius: 14px; background: #fff; color: #187484; display: flex; align-items: center; justify-content: center; border: 1px solid #E3EFF0; box-shadow: 0 4px 14px rgba(13,79,92,0.10); flex-shrink: 0; }
        .pm-title { font-size: 26px; font-weight: 800; color: #0d4f5c; margin: 0 0 3px 0; letter-spacing: -0.3px; line-height: 1.2; }
        .pm-subtitle { font-size: 13.5px; font-weight: 500; color: #5f7f86; margin: 0; }
        .pm-section-title { font-size: 17px; font-weight: 800; color: #0d4f5c; margin: 0; display: flex; align-items: center; gap: 10px; }
        .pm-section-bar { width: 4px; height: 22px; border-radius: 3px; background: #E9A23B; display: inline-block; }
        .pm-records-card { background: #fff; border: 1px solid #E3EFF0; border-radius: 16px; box-shadow: 0 4px 20px rgba(13,79,92,0.06); overflow-x: auto; }
        .pm-btn-create { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 800; background: linear-gradient(135deg, #1f8a9b 0%, #187484 55%, #0d4f5c 100%); border-radius: 12px; padding: 11px 22px; box-shadow: 0 6px 16px rgba(24,116,132,0.28); transition: transform 0.15s, box-shadow 0.15s; }
        .pm-btn-create:hover { background: linear-gradient(135deg, #1f8a9b 0%, #187484 55%, #0d4f5c 100%); transform: translateY(-1px); box-shadow: 0 8px 20px rgba(24,116,132,0.36); }
        @media (max-width: 640px) { .pm-title { font-size: 21px; } .pm-head-icon { width: 46px; height: 46px; } }
        .pm-modal-title { font-size: 17px; font-weight: 800; color: #1a4a2e; margin: 0; }
        .pm-delete-title { font-size: 17px; font-weight: 700; color: #1a4a2e; margin-bottom: 6px; }
        .pm-delete-sub { font-size: 13.5px; color: #8a9a90; margin-bottom: 20px; font-weight: 500; }
        .pm-click-hint { font-size: 11px; color: #8aaa95; font-weight: 500; margin-left: 6px; font-style: italic; }
        .pm-file-btn { display: inline-flex; align-items: center; justify-content: center; background: #e8f4fd; color: #1a6aaa; border: 1px solid #b8d8f0; border-radius: 6px; padding: 5px 9px; font-size: 14px; cursor: pointer; transition: background 0.15s; }
        .pm-file-btn:hover { background: #cce5f8; }
        .mr-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
        .mr-vad-ring { width: 56px; height: 56px; border-radius: 50%; border: 3px solid #d6ede0; display: flex; align-items: center; justify-content: center; font-size: 22px; background: #f7fbf8; flex-shrink: 0; transition: border-color 0.25s, background 0.25s; }
        .mr-vad-ring.speaking { border-color: #1a7a4a; background: #e6f4ec; animation: mrRingPulse 1s ease-in-out infinite; }
        @keyframes mrRingPulse { 0%,100% { box-shadow: 0 0 0 4px rgba(26,122,74,0.18); } 50% { box-shadow: 0 0 0 9px rgba(26,122,74,0.22); } }
        .mr-rec-dot { display: inline-block; width: 8px; height: 8px; background: #e53935; border-radius: 50%; animation: mrRecPulse 1s infinite; margin-right: 5px; vertical-align: middle; }
        @keyframes mrRecPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.25; } }
        .mr-btn { font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 13px; border: none; border-radius: 8px; padding: 8px 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; transition: background 0.15s; }
        .mr-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .mr-btn-green { background: #1a7a4a; color: #fff; } .mr-btn-green:hover:not(:disabled) { background: #155e39; }
        .mr-btn-grey  { background: #eef2ee; color: #4a6a5a; } .mr-btn-grey:hover:not(:disabled) { background: #e0e8e2; }
        .mr-btn-red   { background: #fdecea; color: #c0392b; } .mr-btn-red:hover:not(:disabled) { background: #fbd0cc; }
        .mr-btn-teal  { background: #e0f7f4; color: #00695c; } .mr-btn-teal:hover:not(:disabled) { background: #b2ebf2; }
        .mr-toggle { display: inline-flex; align-items: center; gap: 8px; background: #f0f7f2; border-radius: 8px; padding: 7px 12px; cursor: pointer; user-select: none; margin-bottom: 8px; }
        .mr-toggle-track { width: 36px; height: 20px; border-radius: 20px; background: #c8d8c8; position: relative; transition: background 0.2s; flex-shrink: 0; }
        .mr-toggle-track.on { background: #1a7a4a; }
        .mr-toggle-thumb { width: 16px; height: 16px; border-radius: 50%; background: #fff; position: absolute; top: 2px; left: 2px; transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
        .mr-toggle-track.on .mr-toggle-thumb { transform: translateX(16px); }
        .pm-recorder-toggle { display: flex; align-items: center; gap: 8px; font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700; background: #f0f7f2; color: #1a5a38; border: 1.5px solid #c8e0cc; border-radius: 8px; padding: 8px 14px; cursor: pointer; transition: background 0.15s; }
        .pm-recorder-toggle:hover { background: #e4f2e8; border-color: #1a7a4a; }
        .pm-recorder-toggle.active { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; }
        .pm-recorder-section { border: 1.5px solid #d6ede0; border-radius: 10px; padding: 14px; background: #f7fbf8; margin-top: 8px; }
        .pm-recording-locked { border: 1.5px dashed #e0c99a; border-radius: 8px; padding: 12px 14px; background: #fffbf2; display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; color: #9a7a30; }

/* ── Viewer Modal ── */
.vm-overlay{position:fixed;inset:0;
background:rgba(220,235,225,0.40);

display:flex;justify-content:center;align-items:center;z-index:3000;padding:12px;}
.vm-box{background:#fff;border-radius:12px;display:flex;flex-direction:column;overflow:hidden;
box-shadow:0 8px 32px rgba(26,122,74,0.13),0 2px 8px rgba(0,0,0,0.08);border:1.5px solid #d6ede0;}
.vm-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1.5px solid #eef7f2;background:#fff;flex-shrink:0;flex-wrap:wrap;gap:10px;}
.vm-title{display:flex;align-items:center;gap:12px;min-width:0;color:red}
.vm-icon-bg{width:40px;height:40px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0;}
.vm-icon-bg.pdf{background:#fff2f2;border:1px solid #ffd5d5;}
.vm-icon-bg.doc{background:#eef4ff;border:1px solid #c8d9f8;}
.vm-icon-bg.xl{background:#edfff5;border:1px solid #b8e8cc;}
.vm-icon-bg.img{background:#fff8ee;border:1px solid #ffdca8;}
.vm-icon-bg.other{background:#f0f7f2;border:1px solid #c8e0cc;}
.vm-name{font-size:14px;font-weight:700;color:#1a2e22;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.vm-sub{font-size:11.5px;color:#8aaa95;margin-top:2px;font-weight:600;display:flex;align-items:center;gap:5px;}
.vm-sub-dot{width:5px;height:5px;border-radius:50%;display:inline-block;flex-shrink:0;}
.vm-sub-dot.pdf{background:#e05555;}
.vm-sub-dot.doc{background:#4a7adc;}
.vm-sub-dot.xl{background:#1a7a4a;}
.vm-sub-dot.img{background:#e8a030;}
.vm-sub-dot.other{background:#9ab5a0;}
.vm-actions{display:flex;gap:8px;align-items:center;flex-shrink:0;}
.vm-dl-btn{font-family:'Nunito Sans',sans-serif;font-size:13px;font-weight:700;background:#1a7a4a;color:#fff;border:none;border-radius:8px;padding:8px 16px;text-decoration:none;display:inline-flex;align-items:center;gap:6px;cursor:pointer;transition:background 0.15s;}
.vm-dl-btn:hover{background:#155e39;}
.vm-close-btn{font-family:'Nunito Sans',sans-serif;background:#f0f7f2;color:#3a6b50;border:1.5px solid #c8e0cc;border-radius:8px;width:36px;height:36px;cursor:pointer;font-size:17px;font-weight:700;display:flex;align-items:center;justify-content:center;transition:background 0.15s,color 0.15s,border-color 0.15s;}
.vm-close-btn:hover{background:#fdecea;color:#c0392b;border-color:#f5c6c2;}
.vm-body{flex:1;overflow:hidden;background:#fff;position:relative;}
.vm-iframe{width:100%;height:100%;border:none;display:block;}
.vm-img-wrap{width:100%;height:100%;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;}
.vm-img-wrap img{max-width:100%;height:auto;border-radius:8px;}
.vm-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;}
.vm-empty-icon{font-size:48px;}
.vm-empty-title{font-size:14px;font-weight:700;color:#1a4a2e;margin:0;}
.vm-empty-sub{font-size:12px;color:#9ab5a0;margin:0;font-weight:500;}


     
      `}),a.jsxs("div",{className:"pm-wrap",style:{background:"linear-gradient(180deg, #F0F7F7 0%, #EAF4F5 100%)",minHeight:"100vh",padding:z?12:24},children:[h&&a.jsx("div",{style:{position:"fixed",top:16,right:16,left:z?16:"auto",background:h.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"10px 18px",borderRadius:8,fontWeight:700,fontSize:13.5,zIndex:9999,fontFamily:"'Nunito Sans', sans-serif"},children:h.msg}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsxs("div",{className:"pm-eyebrow",children:[a.jsx("span",{className:"pm-eyebrow-line",style:{width:28}}),a.jsx("span",{className:"pm-eyebrow-text",children:"Analytic Overview"}),a.jsx("span",{className:"pm-eyebrow-line",style:{flex:1}})]}),a.jsxs("div",{className:"pm-head",children:[a.jsx("div",{className:"pm-head-icon",children:a.jsx(Ra,{size:z?21:24})}),a.jsxs("div",{children:[a.jsx("h1",{className:"pm-title",children:"Meeting Proceedings"}),ie&&a.jsx("p",{className:"pm-subtitle",children:"Sabha Kamkaj manage करा"})]})]}),ie&&a.jsxs("button",{className:"pm-btn-primary pm-btn-create",onClick:be,children:[a.jsx(Xp,{size:17})," Create Meeting"]})]}),a.jsxs("div",{className:"pm-records-card",style:{padding:z?14:22},children:[a.jsxs("div",{style:{display:"flex",flexDirection:z?"column":"row",justifyContent:"space-between",alignItems:z?"stretch":"center",gap:12,marginBottom:16},children:[a.jsxs("h3",{className:"pm-section-title",children:[a.jsx("span",{className:"pm-section-bar"}),"Records (",o.length,")"]}),a.jsxs("div",{className:"pm-search-wrap",style:{width:z?"100%":"auto"},children:[a.jsx(Ho,{className:"pm-search-icon",size:16}),a.jsx("input",{className:"pm-search",placeholder:"Search meeting no...",value:l,onChange:O=>d(O.target.value),style:{width:z?"100%":300}})]})]}),z?a.jsx("div",{children:g?a.jsx("div",{style:{textAlign:"center",padding:20,color:"#5f7f86"},children:"Loading..."}):o.length===0?a.jsx("div",{style:{textAlign:"center",padding:20,color:"#5f7f86"},children:"No records found"}):o.map((O,L)=>a.jsxs("div",{className:"pm-card",onClick:()=>se(O),children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:8},children:[a.jsxs("span",{style:{fontWeight:800,color:"#0d4f5c",fontSize:14},children:["#",L+1," —"," ",a.jsx("span",{style:{background:"#E3F4F1",color:"#0d4f5c",fontWeight:800,fontSize:12.5,padding:"4px 10px",borderRadius:8},children:O.meetingNumber}),a.jsx("span",{className:"pm-click-hint",children:"tap → subjects"})]}),a.jsxs("div",{style:{display:"flex",gap:6},onClick:ne=>ne.stopPropagation(),children:[Array.isArray(O.agendaFiles)&&O.agendaFiles.length>0&&a.jsx("div",{style:{display:"flex",gap:4},children:O.agendaFiles.map((ne,ce)=>{const{icon:xe}=je(ne);return a.jsx("button",{className:"pm-file-btn",title:`View File ${ce+1}`,onClick:()=>G(ne),children:xe},ce)})}),ie&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"pm-btn-edit",title:"Edit",onClick:()=>ke(O),style:{padding:"7px 10px"},children:a.jsx(yp,{size:14})}),a.jsx("button",{className:"pm-btn-delete",title:"Delete",onClick:()=>k(O._id),style:{padding:"7px 10px"},children:a.jsx(To,{size:14})})]})]})]}),a.jsxs("div",{className:"pm-card-row",children:[a.jsx("span",{className:"pm-card-label",children:"Type"}),a.jsx("span",{children:O.meetingType||"-"})]}),a.jsxs("div",{className:"pm-card-row",children:[a.jsx("span",{className:"pm-card-label",children:"Date"}),a.jsxs("span",{className:"date-badge",children:[a.jsx(Ra,{size:14}),O.meetingDate?new Date(O.meetingDate).toLocaleDateString("en-IN"):"-"]})]}),a.jsxs("div",{className:"pm-card-row",style:{borderBottom:"none"},children:[a.jsx("span",{className:"pm-card-label",children:"Time"}),a.jsxs("span",{className:"time-badge",children:[a.jsx(Co,{size:14}),oe(O.meetingTime)]})]})]},O._id))}):a.jsxs("table",{className:"pm-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[["#","Meeting No","Type","Date","Time"].map(O=>a.jsx("th",{children:O},O)),ie&&a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:g?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:24,color:"#5f7f86"},children:"Loading..."})}):o.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:24,color:"#5f7f86"},children:"No records found"})}):o.map((O,L)=>a.jsxs("tr",{children:[a.jsx("td",{children:L+1}),a.jsx("td",{children:a.jsx("span",{className:"meeting-no-link",onClick:()=>se(O),title:"Click to view/add subjects",children:O.meetingNumber})}),a.jsx("td",{children:O.meetingType}),a.jsx("td",{children:a.jsxs("span",{className:"date-badge",children:[a.jsx(Ra,{size:15}),O.meetingDate?new Date(O.meetingDate).toLocaleDateString("en-IN"):"-"]})}),a.jsx("td",{children:a.jsxs("span",{className:"time-badge",children:[a.jsx(Co,{size:15}),oe(O.meetingTime)]})}),ie&&a.jsx("td",{children:a.jsxs("div",{className:"pm-actions",children:[Array.isArray(O.agendaFiles)&&O.agendaFiles.length>0&&a.jsx("div",{style:{display:"flex",gap:4},children:O.agendaFiles.map((ne,ce)=>{const{icon:xe}=je(ne);return a.jsx("button",{className:"pm-file-btn",title:`View File ${ce+1}`,onClick:()=>G(ne),children:xe},ce)})}),a.jsxs("button",{className:"pm-btn-view",onClick:()=>se(O),children:[a.jsx(vp,{size:15})," View"]}),a.jsxs("button",{className:"pm-btn-edit",onClick:()=>ke(O),children:[a.jsx(yp,{size:14})," Edit"]}),a.jsxs("button",{className:"pm-btn-delete",onClick:()=>k(O._id),children:[a.jsx(To,{size:14})," Delete"]})]})})]},O._id))})]})]}),p&&a.jsx("div",{style:Nx,children:a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?16:25,width:z?"95%":"60%",maxWidth:680,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{className:"pm-modal-title",children:v?"Edit Meeting":"Create Meeting"}),a.jsx("button",{onClick:()=>f(!1),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:z?"1fr":"1fr 1fr",gap:14},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsxs("label",{className:"pm-label",children:["Meeting Number ",a.jsx("span",{className:"pm-auto-badge",children:"Auto Generated"})]}),a.jsx("input",{className:"pm-input-readonly",value:B.meetingNumber,readOnly:!0})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Type Of Meeting"}),a.jsxs("select",{className:"pm-input",name:"meetingType",value:B.meetingType,onChange:ge,children:[a.jsx("option",{value:"",children:"Select Type"}),a.jsx("option",{children:"General Body"}),a.jsx("option",{children:"Standing Committee"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Meeting Date"}),a.jsx("input",{className:"pm-input",name:"meetingDate",type:"date",value:B.meetingDate,onChange:ge})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Meeting Time"}),a.jsxs("div",{style:{display:"flex",gap:6},children:[a.jsxs("select",{className:"pm-input",name:"meetingHour",value:B.meetingHour,onChange:ge,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"",children:"HH"}),Array.from({length:12},(O,L)=>String(L+1).padStart(2,"0")).map(O=>a.jsx("option",{value:O,children:O},O))]}),a.jsxs("select",{className:"pm-input",name:"meetingMinute",value:B.meetingMinute,onChange:ge,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"",children:"MM"}),["00","05","10","15","20","25","30","35","40","45","50","55"].map(O=>a.jsx("option",{value:O,children:O},O))]}),a.jsxs("select",{className:"pm-input",name:"meetingAmpm",value:B.meetingAmpm,onChange:ge,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"AM",children:"AM"}),a.jsx("option",{value:"PM",children:"PM"})]})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsxs("label",{className:"pm-label",children:["Agenda",a.jsx("span",{style:{fontSize:11,color:"#8a9a90",fontWeight:500,marginLeft:6},children:"(PDF, Word, Excel, PNG, JPG — max 12, optional)"})]}),a.jsxs("div",{style:{border:"1.5px dashed #c8e0cc",borderRadius:8,padding:"10px 14px",background:"#f7fbf8"},children:[J.length>0&&a.jsxs("div",{style:{marginBottom:8},children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",marginBottom:4},children:"Existing Files:"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:J.map((O,L)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,background:"#e6f4ec",borderRadius:6,padding:"3px 8px"},children:[a.jsxs("button",{onClick:()=>G(O),style:{background:"none",border:"none",cursor:"pointer",fontSize:12,fontWeight:600,color:"#1a6640",padding:0,display:"flex",alignItems:"center",gap:4},children:[je(O).icon," File ",L+1]}),a.jsx("button",{onClick:()=>pe(ne=>ne.filter((ce,xe)=>xe!==L)),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:4,padding:"1px 5px",cursor:"pointer",fontSize:11,fontWeight:700},children:"✕"})]},L))})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsxs("label",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:13,fontWeight:700,background:"#e6f4ec",color:"#1a6640",border:"1.5px solid #c8e0cc",borderRadius:7,padding:"6px 14px",cursor:"pointer"},children:["📁 Choose Files",a.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,image/png,image/jpeg",style:{display:"none"},onChange:O=>{const L=Array.from(O.target.files);if(J.length+de.length+L.length>12){q("Maximum 12 files allowed!","error");return}he(ce=>[...ce,...L]),O.target.value=""}})]}),a.jsxs("span",{style:{fontSize:12,color:"#8a9a90"},children:[J.length+de.length,"/12 files"]})]}),de.length>0&&a.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6},children:de.map((O,L)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,background:"#fff8e1",border:"1px solid #ffe082",borderRadius:6,padding:"3px 8px"},children:[a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#7a5a00"},children:["📄 ",O.name]}),a.jsx("button",{onClick:()=>he(ne=>ne.filter((ce,xe)=>xe!==L)),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:4,padding:"1px 5px",cursor:"pointer",fontSize:11,fontWeight:700},children:"✕"})]},L))})]})]}),v&&(C?a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{gridColumn:z?"1":"span 2"},children:[a.jsxs("button",{className:`pm-recorder-toggle ${E?"active":""}`,onClick:()=>S(O=>!O),type:"button",children:["🎙️ ",E?"Hide Recorder":"Record Meeting"]}),E&&a.jsx("div",{className:"pm-recorder-section",children:a.jsx(w8,{onRecordingReady:O=>{A.current=O,X(O),q("Recording saved! 🔴")},onDecisionExtracted:O=>{V.current=O?.trim()||""},onTranscriptUpdate:()=>{}})})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"pm-label",children:"Upload Meeting Recording (optional)"}),a.jsxs("div",{style:{border:"1.5px dashed #c8e0cc",borderRadius:8,padding:"10px 14px",background:"#f7fbf8",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[a.jsxs("label",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:13,fontWeight:700,background:"#e6f4ec",color:"#1a6640",border:"1.5px solid #c8e0cc",borderRadius:7,padding:"6px 14px",cursor:"pointer"},children:["📁 Choose File",a.jsx("input",{type:"file",accept:"audio/*,video/webm",style:{display:"none"},onChange:O=>{const L=O.target.files[0];L&&W(L)}})]}),D?a.jsxs("span",{style:{fontSize:12.5,fontWeight:600,color:"#1a4a2e"},children:["🎵 ",D.name," ",a.jsx("button",{onClick:()=>W(null),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:5,padding:"2px 6px",cursor:"pointer",fontSize:11,fontWeight:700,marginLeft:6},children:"✕"})]}):P?a.jsx("span",{style:{fontSize:12.5,fontWeight:600,color:"#1a4a2e"},children:"🔴 Auto-recording saved"}):a.jsx("span",{style:{fontSize:12.5,color:"#9ab5a0"},children:"No file chosen"})]})]})]}):a.jsx("div",{style:{gridColumn:z?"1":"span 2"},children:a.jsxs("div",{className:"pm-recording-locked",children:["🔒 Record Meeting — available at scheduled meeting time",B.meetingDate&&B.meetingHour&&a.jsxs("span",{style:{color:"#b07a00",marginLeft:4},children:["(",B.meetingDate," ",B.meetingHour,":",B.meetingMinute||"00"," ",B.meetingAmpm,")"]})]})}))]}),!v&&a.jsx("div",{style:{marginTop:14,background:"#f0f9f3",border:"1px solid #c8e0cc",borderRadius:8,padding:"10px 14px",fontSize:12.5,color:"#3a6b50",fontWeight:600},children:"💡 Meeting save केल्यावर Meeting Number वर click करून Subjects add करा"}),a.jsxs("div",{style:{display:"flex",gap:10,marginTop:22},children:[a.jsx("button",{className:"pm-btn-cancel",onClick:()=>f(!1),children:"Cancel"}),a.jsx("button",{className:"pm-btn-primary",onClick:Gt,disabled:g,children:g?"Saving...":v?"Update":"Save"})]})]})}),R&&a.jsx("div",{style:Nx,children:a.jsxs("div",{style:{background:"#fff",padding:28,borderRadius:12,maxWidth:380,width:z?"90%":"100%",textAlign:"center"},children:[a.jsx("p",{className:"pm-delete-title",children:"Delete Meeting?"}),a.jsx("p",{className:"pm-delete-sub",children:"He record permanently delete होईल. Sure aahes ka?"}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[a.jsx("button",{className:"pm-btn-cancel",onClick:()=>k(null),children:"Cancel"}),a.jsx("button",{className:"pm-btn-primary",style:{background:"#c0392b"},onClick:()=>Lt(R),disabled:g,children:g?"Deleting...":"Yes, Delete"})]})]})}),$&&a.jsx("div",{className:"vm-overlay",onClick:()=>me(null),children:a.jsxs("div",{className:"vm-box",style:{width:z?"99%":"86%",maxWidth:1020,height:z?"97vh":"90vh"},onClick:O=>O.stopPropagation(),children:[a.jsxs("div",{className:"vm-header",children:[a.jsxs("div",{className:"vm-title",children:[a.jsx("div",{className:"vm-icon-wrap",children:$.type==="pdf"?"📄":$.type==="doc"?"📝":$.type==="xl"?"📊":$.type==="img"?"🖼️":"📁"}),a.jsxs("div",{children:[a.jsx("div",{className:"vm-name",style:{maxWidth:z?160:440},children:$.name}),a.jsx("div",{className:"vm-sub",children:$.type==="pdf"?"PDF Document":$.type==="doc"?"Word Document":$.type==="xl"?"Excel / Spreadsheet":$.type==="img"?"Image File":"Document"})]})]}),a.jsxs("div",{className:"vm-actions",children:[a.jsx("a",{href:$.url,download:$.name,target:"_blank",rel:"noreferrer",className:"vm-dl-btn",children:"⬇ Download"}),a.jsx("button",{className:"vm-close-btn",onClick:()=>me(null),children:"✕"})]})]}),a.jsxs("div",{className:"vm-body",children:[$.type==="img"&&a.jsx("div",{className:"vm-img-wrap",children:a.jsx("img",{src:$.url,alt:$.name})}),$.type==="pdf"&&a.jsx("iframe",{className:"vm-iframe",src:`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent($.url)}`,title:$.name,allow:"fullscreen"},$.url),$.type==="doc"&&a.jsx("iframe",{className:"vm-iframe",src:`https://docs.google.com/viewer?url=${encodeURIComponent($.url)}&embedded=true`,title:$.name,allow:"fullscreen"},$.url),$.type==="xl"&&a.jsx("iframe",{className:"vm-iframe",src:`https://docs.google.com/viewer?url=${encodeURIComponent($.url)}&embedded=true`,title:$.name,allow:"fullscreen"},$.url),$.type==="other"&&a.jsxs("div",{className:"vm-empty",children:[a.jsx("span",{children:"📁"}),a.jsx("p",{children:"Preview उपलब्ध नाही"}),a.jsx("small",{children:"खाली download करा"}),a.jsx("a",{href:$.url,download:$.name,target:"_blank",rel:"noreferrer",className:"vm-dl-btn",style:{marginTop:8},children:"⬇ Download करा"})]})]})]})})]})]})}const Nx={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:16},Cx=["Super Admin","Guardian Minister","Mayor","Admin"],Tx=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}},mo=(n,o)=>n?`${n}-SUB-${String(o+1).padStart(2,"0")}`:`SUB-${String(o+1).padStart(2,"0")}`,zx=({val:n})=>{const s={Approved:{bg:"#e6f4ec",color:"#1a6640"},Rejected:{bg:"#fdecea",color:"#c0392b"},"On-Hold":{bg:"#fff8e1",color:"#b07a00"},"Not Conducted":{bg:"#f3f3f3",color:"#6a6a6a"},Postponed:{bg:"#eee8ff",color:"#6a3ab0"}}[n]||{bg:"#f3f3f3",color:"#aaa"};return a.jsx("span",{style:{display:"inline-block",fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:s.bg,color:s.color,whiteSpace:"nowrap"},children:n||"-"})};function Xu(){const{meetingId:n}=Rv(),o=Ma(),s=vt(),[l,d]=b.useState(o.state?{meetingNumber:o.state.meetingNumber||null,meetingType:o.state.meetingType||null,meetingDate:o.state.meetingDate||null,meetingTime:o.state.meetingTime||null}:null),[p,f]=b.useState(n||null),[h,x]=b.useState(""),[g,y]=b.useState([]),[v,T]=b.useState(!1),[R,k]=b.useState(null),[z,M]=b.useState(window.innerWidth<640),[E,S]=b.useState([]),[A,P]=b.useState(!1),[X,D]=b.useState(null),W={subjectName:"",subjectType:"",decisionInMeeting:"",tagTo:[]},[V,de]=b.useState(W),[he,J]=b.useState(null),[pe,$]=b.useState(null),[me,we]=b.useState(""),[F,ie]=b.useState(!1),fe=Tx(),K=fe?.role||"",B=Cx.includes(K);b.useEffect(()=>{const se=()=>M(window.innerWidth<640);return window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)},[]),b.useEffect(()=>{(async()=>{try{const je=await Ue.get("/getUsers");if(je.data.success){const G=[...new Set(je.data.users.map(O=>O.departmentName).filter(Boolean))];S(G)}}catch{}})()},[]);const j=async se=>{if(se)try{T(!0);const G=(await Ue.get("/getMeetings")).data;if(G.success){const O=Tx(),L=O?.role||"",ne=O?.departmentName||"",ce=Cx.includes(L),xe=G.data.find(Ie=>Ie._id===se);if(xe){d({meetingNumber:xe.meetingNumber||null,meetingType:xe.meetingType||null,meetingDate:xe.meetingDate||null,meetingTime:xe.meetingTime||null});const Ie=Array.isArray(xe.subjects)?xe.subjects:[];if(ce)y(Ie);else if(["corporator","ward councillor"].includes(L.toLowerCase()))y(Ie);else{const bt=Ie.filter(Ze=>Array.isArray(Ze.tagTo)&&Ze.tagTo.includes(ne));y(bt)}}}}catch{C("Failed to load subjects","error")}finally{T(!1)}};b.useEffect(()=>{p&&j(p)},[p]);const C=(se,je="success")=>{k({msg:se,type:je}),setTimeout(()=>k(null),3e3)},q=se=>se?new Date(se).toLocaleDateString("en-IN"):"-",oe=se=>{if(!se)return"-";const[je,G]=se.split(":");let O=parseInt(je,10);const L=O>=12?"PM":"AM";return O=O%12||12,`${O}:${G} ${L}`},I=g.filter(se=>!h||(se.subjectId||"").toLowerCase().includes(h.toLowerCase())),ge=()=>{D(null),de(W),P(!0)},be=(se,je)=>{D(je),de({subjectName:se.subjectName||"",subjectType:se.subjectType||"",decisionInMeeting:se.decisionInMeeting||"",tagTo:Array.isArray(se.tagTo)?se.tagTo:[]}),P(!0)},ke=async()=>{if(!V.subjectName.trim()){C("Subject Name is required","error");return}try{if(T(!0),X!==null){const se=g[X]?.subjectId;if(!se){C("Subject ID missing","error");return}const je=new FormData;je.append("subjectName",V.subjectName),je.append("subjectType",V.subjectType||""),je.append("decisionInMeeting",V.decisionInMeeting||""),je.append("tagTo",JSON.stringify(V.tagTo));const O=(await Ue.put(`/updateMeeting/updateSubject/${se}`,je)).data;O.success?(C("Subject updated!"),P(!1),j(p)):C(O.message||"Failed to update","error")}else{const se={subjectId:mo(l?.meetingNumber,g.length),subjectName:V.subjectName,subjectType:V.subjectType,decisionInMeeting:V.decisionInMeeting,tagTo:V.tagTo},je=[...g,se],G=new FormData;G.append("subjects",JSON.stringify(je)),l?.meetingNumber&&G.append("meetingNumber",l.meetingNumber),l?.meetingType&&G.append("meetingType",l.meetingType),l?.meetingDate&&G.append("meetingDate",l.meetingDate),l?.meetingTime&&G.append("meetingTime",l.meetingTime);const L=(await Ue.put(`/updateMeeting/${p}`,G)).data;L.success?(C("Subject added!"),P(!1),j(p)):C(L.message||"Failed to save","error")}}catch{C("Server error","error")}finally{T(!1)}},Ce=async se=>{try{T(!0);const je=g.filter((ne,ce)=>ce!==se),G=new FormData;G.append("subjects",JSON.stringify(je)),l?.meetingNumber&&G.append("meetingNumber",l.meetingNumber),l?.meetingType&&G.append("meetingType",l.meetingType),l?.meetingDate&&G.append("meetingDate",l.meetingDate),l?.meetingTime&&G.append("meetingTime",l.meetingTime);const L=(await Ue.put(`/updateMeeting/${p}`,G)).data;L.success?(C("Subject deleted!"),J(null),j(p)):C(L.message||"Failed","error")}catch{C("Server error","error")}finally{T(!1)}},Ke=se=>{de(je=>({...je,tagTo:je.tagTo.includes(se)?je.tagTo.filter(G=>G!==se):[...je.tagTo,se]}))},et=se=>se==="Administrative and Financial Approval"?["Tender Floated","1st Envelope Opened","2nd Envelope Opened","Nivida Samiti Rate Approval","Ghoshwara Ready"]:se==="Contract Approval"?["LOI Issued","SD Submitted","Work Order Issued","Work Started","Work Progress - Physical Progress","Work Progress - Financial Progress"]:["Yes","No"],Gt=se=>{$(se),we(se.actionTaken||"")},Lt=async()=>{if(pe)try{ie(!0);const se=pe;if(!se.subjectId){C("Subject ID missing","error");return}const je=new FormData;je.append("subjectName",se.subjectName||""),je.append("subjectType",se.subjectType||""),je.append("decisionInMeeting",se.decisionInMeeting||""),je.append("tagTo",JSON.stringify(se.tagTo||[])),je.append("actionTaken",me);const O=(await Ue.put(`/updateMeeting/updateSubject/${se.subjectId}`,je)).data;O.success?(C("Action Taken saved!"),$(null),j(p)):C(O.message||"Failed","error")}catch{C("Server error","error")}finally{ie(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
        .sms-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }

        .sms-title      { font-size: 22px; font-weight: 800; color: #1a4a2e; margin: 0 0 3px; letter-spacing: -0.3px; }
        .sms-subtitle   { font-size: 13px; font-weight: 500; color: #7a9a88; margin: 0 0 16px; }

        .sms-meeting-card {
          background: #fff; border: 1.5px solid #d6ede0; border-radius: 12px;
          padding: 14px 18px; margin-bottom: 18px;
          display: flex; flex-wrap: wrap; gap: 18px; align-items: center;
        }
        .sms-meeting-chip { display: flex; flex-direction: column; gap: 2px; }
        .sms-chip-label { font-size: 10.5px; font-weight: 800; color: #8aaa95; text-transform: uppercase; letter-spacing: 0.5px; }
        .sms-chip-value { font-size: 14px; font-weight: 700; color: #1a4a2e; }
        .sms-chip-badge {
          display: inline-block; background: #e6f4ec; color: #1a6640;
          font-weight: 700; font-size: 13px; padding: 3px 10px; border-radius: 6px;
        }

        .sms-search-input {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #2d3d35; border: 1.5px solid #c8e0cc; border-radius: 8px;
          padding: 9px 13px; outline: none; transition: border-color 0.2s; width: 260px;
        }
        .sms-search-input:focus { border-color: #1a7a4a; }

        .sms-table th {
          font-size: 12.5px; font-weight: 700; color: #3a6b50;
          padding: 10px 14px; text-align: left; background: #f0f7f2;
          border-bottom: 2px solid #d6ede0; white-space: nowrap;
        }
        .sms-table td {
          font-size: 13px; font-weight: 500; color: #2d3d35;
          padding: 11px 14px; border-bottom: 1px solid #eef4ee; vertical-align: middle;
        }
        .sms-table tbody tr:hover { background: #f4faf6; }
        .sms-table td:first-child { color: #8aaa95; font-weight: 600; font-size: 12.5px; }

        .sms-sub-id {
          display: inline-block; background: #eaf3fb; color: #1565a8;
          font-weight: 700; font-size: 11.5px; padding: 2px 8px;
          border-radius: 5px; letter-spacing: 0.2px; font-family: monospace;
        }

        .sms-type-pill {
          display: inline-block; background: #f3f0ff; color: #6a3ab0;
          font-size: 11.5px; font-weight: 600; padding: 2px 8px; border-radius: 20px;
        }

        .sms-dept-chips { display: flex; flex-wrap: wrap; gap: 4px; }
        .sms-dept-chip {
          background: #e6f4ec; color: #1a6640; font-size: 11px;
          font-weight: 700; padding: 2px 7px; border-radius: 5px;
        }

        .sms-btn-primary {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 700;
          background: #1a7a4a; color: #fff; border: none; border-radius: 8px;
          padding: 10px 20px; cursor: pointer; transition: background 0.15s;
        }
        .sms-btn-primary:hover { background: #155e39; }
        .sms-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

        .sms-btn-cancel {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 600;
          background: #eef2ee; color: #4a6a5a; border: none; border-radius: 8px;
          padding: 10px 20px; cursor: pointer;
        }
        .sms-btn-cancel:hover { background: #e0e8e2; }

        .sms-btn-edit {
          font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 600;
          background: #e8f4fd; color: #1a6aaa; border: none; border-radius: 6px;
          padding: 5px 10px; cursor: pointer;
        }
        .sms-btn-edit:hover { background: #d0e8f8; }

        .sms-btn-delete {
          font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 600;
          background: #fdecea; color: #c0392b; border: none; border-radius: 6px;
          padding: 5px 10px; cursor: pointer;
        }
        .sms-btn-delete:hover { background: #fad4d0; }

        .sms-input {
          font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          width: 100%; padding: 10px 12px; border-radius: 8px;
          border: 1.5px solid #c8e0cc; outline: none; color: #2d3d35; transition: border-color 0.2s;
        }
        .sms-input:focus { border-color: #1a7a4a; }
        .sms-input-readonly {
          font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
          width: 100%; padding: 10px 12px; border-radius: 8px;
          border: 1.5px solid #a8d5b5; outline: none;
          color: #1a4a2e; background: #f0f9f3; cursor: not-allowed;
          letter-spacing: 0.2px; font-family: monospace;
        }
        .sms-label {
          font-family: 'Nunito Sans', sans-serif; font-size: 12px; font-weight: 700;
          color: #5a7a6a; margin-bottom: 4px; display: block;
        }
        .sms-auto-badge {
          display: inline-block; background: #d4edda; color: #1a6640;
          font-size: 10px; font-weight: 800; padding: 2px 7px;
          border-radius: 20px; margin-left: 6px; text-transform: uppercase;
        }

        .sms-dept-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 6px;
          max-height: 180px; overflow-y: auto;
          border: 1.5px solid #c8e0cc; border-radius: 8px; padding: 10px; background: #f7fbf8;
        }
        @media (max-width: 480px) { .sms-dept-grid { grid-template-columns: 1fr; } }
        .sms-dept-item {
          display: flex; align-items: center; gap: 8px;
          background: #fff; padding: 8px 10px; border-radius: 7px;
          border: 1.5px solid #e0ede5; cursor: pointer;
          font-size: 13px; font-weight: 500; color: #2d3d35; transition: border-color 0.15s, background 0.15s;
        }
        .sms-dept-item:hover { background: #f0f7f2; border-color: #1a7a4a; }
        .sms-dept-item.checked { background: #e6f4ec; border-color: #1a7a4a; color: #1a4a2e; font-weight: 700; }
        .sms-dept-item input[type="checkbox"] { accent-color: #1a7a4a; width: 15px; height: 15px; flex-shrink: 0; }

        .sms-card {
          border: 1px solid #e0ede5; border-radius: 10px;
          padding: 13px; background: #f9fdf9; margin-bottom: 10px;
        }
        .sms-card-row {
          display: flex; justify-content: space-between; font-size: 13px;
          font-weight: 500; padding: 5px 0; border-bottom: 1px solid #eef4ee; color: #2d3d35;
        }
        .sms-card-row:last-child { border-bottom: none; }
        .sms-card-label { color: #5a7a6a; font-weight: 700; min-width: 110px; font-size: 12px; }

        .sms-empty {
          text-align: center; padding: 40px 20px; color: #8a9a90;
          font-size: 14px; font-weight: 500;
        }
        .sms-empty-icon { font-size: 36px; margin-bottom: 10px; }

        .sms-back-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Nunito Sans', sans-serif; font-size: 13px; font-weight: 700;
          color: #3a6b50; background: #f0f7f2; border: 1.5px solid #c8e0cc;
          border-radius: 8px; padding: 6px 14px; cursor: pointer; margin-bottom: 14px;
          text-decoration: none; transition: background 0.15s;
        }
        .sms-back-btn:hover { background: #e4f2e8; border-color: #1a7a4a; }
      `}),a.jsxs("div",{className:"sms-wrap",style:{background:"#f0f4f0",minHeight:"100vh",padding:z?12:24},children:[R&&a.jsx("div",{style:{position:"fixed",top:16,right:16,left:z?16:"auto",background:R.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"10px 18px",borderRadius:8,fontWeight:700,fontSize:13.5,zIndex:9999},children:R.msg}),a.jsx("button",{className:"sms-back-btn",onClick:()=>s("/meetings"),children:"← Back to Meetings"}),a.jsx("h1",{className:"sms-title",children:"Meeting Subjects"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18,flexWrap:"wrap"},children:[a.jsx("input",{className:"sms-search-input",placeholder:"🔍 Search subject ID...",value:h,onChange:se=>x(se.target.value)}),p&&B&&a.jsx("button",{className:"sms-btn-primary",onClick:ge,style:{display:"flex",alignItems:"center",gap:6},children:"+ Add Subject"})]}),l&&p&&a.jsxs("div",{className:"sms-meeting-card",children:[a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Meeting No"}),a.jsx("span",{className:"sms-chip-badge",children:l.meetingNumber})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Type"}),a.jsx("span",{className:"sms-chip-value",children:l.meetingType||"-"})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Date"}),a.jsx("span",{className:"sms-chip-value",children:q(l.meetingDate)})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Time"}),a.jsx("span",{className:"sms-chip-value",children:oe(l.meetingTime)})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Subjects"}),a.jsx("span",{className:"sms-chip-value",style:{color:"#1a7a4a",fontWeight:800},children:I.length})]})]}),p?a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?12:20,overflowX:"auto"},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},children:a.jsxs("h3",{style:{fontSize:15,fontWeight:800,color:"#1a4a2e",margin:0},children:["Subjects (",I.length,")"]})}),v?a.jsx("div",{style:{textAlign:"center",padding:24,color:"#8a9a90"},children:"Loading..."}):I.length===0?a.jsxs("div",{className:"sms-empty",children:[a.jsx("div",{className:"sms-empty-icon",children:"📋"}),a.jsx("div",{children:h?"कोणताही subject सापडला नाही":"कोणतेही subjects नाहीत"}),a.jsx("div",{style:{fontSize:12,color:"#aaa",marginTop:4},children:h?"वेगळा Subject ID search करा":"+ Add Subject button वापरून subjects add करा"})]}):z?a.jsx("div",{children:I.map((se,je)=>{const G=g.indexOf(se);return a.jsxs("div",{className:"sms-card",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[a.jsx("span",{className:"sms-sub-id",children:se.subjectId||mo(l?.meetingNumber,G)}),a.jsxs("div",{style:{display:"flex",gap:5},children:[a.jsx("button",{className:"sms-btn-edit",onClick:()=>be(se,G),children:"✏️"}),a.jsx("button",{className:"sms-btn-delete",onClick:()=>J(G),children:"🗑️"})]})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Subject Name"}),a.jsx("span",{style:{fontWeight:600},children:se.subjectName||"-"})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Subject Type"}),a.jsx("span",{className:"sms-type-pill",children:se.subjectType||"-"})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Decision"}),a.jsx(zx,{val:se.decisionInMeeting})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Action Taken"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"},children:[se.actionTaken&&a.jsx("span",{style:{background:se.actionTaken==="Yes"?"#e6f4ec":se.actionTaken==="No"?"#fdecea":"#f0f0ff",color:se.actionTaken==="Yes"?"#1a6640":se.actionTaken==="No"?"#c0392b":"#3a3ab0",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20},children:se.actionTaken}),Array.isArray(se.tagTo)&&se.tagTo.includes(fe?.departmentName)&&a.jsx("button",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:11.5,fontWeight:700,background:"#fff8e1",color:"#b07a00",border:"1.5px solid #ffe082",borderRadius:6,padding:"3px 8px",cursor:"pointer"},onClick:()=>Gt(se),children:"⚡ Action"})]})]}),Array.isArray(se.tagTo)&&se.tagTo.length>0&&a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Departments"}),a.jsx("div",{className:"sms-dept-chips",children:se.tagTo.map((O,L)=>a.jsx("span",{className:"sms-dept-chip",children:O},L))})]})]},je)})}):a.jsxs("table",{className:"sms-table",style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{children:["#","Subject ID","Subject Name","Subject Type","Decision","Departments","Action Taken","Actions"].map(se=>a.jsx("th",{children:se},se))})}),a.jsx("tbody",{children:I.map((se,je)=>{const G=g.indexOf(se);return a.jsxs("tr",{children:[a.jsx("td",{children:je+1}),a.jsx("td",{children:a.jsx("span",{className:"sms-sub-id",children:se.subjectId||mo(l?.meetingNumber,G)})}),a.jsx("td",{style:{maxWidth:260,fontWeight:600},children:se.subjectName||"-"}),a.jsx("td",{children:a.jsx("span",{className:"sms-type-pill",children:se.subjectType||"-"})}),a.jsx("td",{children:a.jsx(zx,{val:se.decisionInMeeting})}),a.jsx("td",{style:{maxWidth:180},children:Array.isArray(se.tagTo)&&se.tagTo.length>0?a.jsx("div",{className:"sms-dept-chips",children:se.tagTo.map((O,L)=>a.jsx("span",{className:"sms-dept-chip",children:O},L))}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{maxWidth:260,fontWeight:600},children:se.actionTaken||"-"}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",gap:6},children:[a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-start"},children:Array.isArray(se.tagTo)&&se.tagTo.includes(fe?.departmentName)&&a.jsx("button",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:11.5,fontWeight:700,background:"#fff8e1",color:"#b07a00",border:"1.5px solid #ffe082",borderRadius:6,padding:"3px 10px",cursor:"pointer",whiteSpace:"nowrap"},onClick:()=>Gt(se),children:"⚡ Action"})}),B&&a.jsx("button",{className:"sms-btn-edit",onClick:()=>be(se,G),children:"✏️ Edit"}),B&&a.jsx("button",{className:"sms-btn-delete",onClick:()=>J(G),children:"🗑️ Delete"})]})})]},je)})})]})]}):a.jsx("div",{style:{background:"#fff",borderRadius:12,padding:20},children:a.jsxs("div",{className:"sms-empty",children:[a.jsx("div",{className:"sms-empty-icon",children:"🔍"}),a.jsx("div",{children:"कोणतीही meeting उपलब्ध नाही"}),a.jsx("div",{style:{fontSize:12,color:"#aaa",marginTop:4},children:"Meetings page वरून meeting number वर click करा"})]})}),A&&a.jsx("div",{style:Ju,children:a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?16:25,width:z?"95%":"65%",maxWidth:720,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{style:{fontSize:17,fontWeight:800,color:"#1a4a2e",margin:0},children:X===null?"Add Subject":"Edit Subject"}),a.jsx("button",{onClick:()=>P(!1),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:z?"1fr":"1fr 1fr",gap:14},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsxs("label",{className:"sms-label",children:["Subject ID",a.jsx("span",{className:"sms-auto-badge",children:"Auto"})]}),a.jsx("input",{className:"sms-input-readonly",value:X!==null?g[X]?.subjectId||mo(l?.meetingNumber,X):mo(l?.meetingNumber,g.length),readOnly:!0})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"sms-label",children:"Subject Type"}),a.jsxs("select",{className:"sms-input",value:V.subjectType,onChange:se=>de(je=>({...je,subjectType:se.target.value})),children:[a.jsx("option",{value:"",children:"Select Type"}),a.jsx("option",{children:"General"}),a.jsx("option",{children:"Administrative and Financial Approval"}),a.jsx("option",{children:"Contract Approval"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsxs("label",{className:"sms-label",children:["Subject Name ",a.jsx("span",{style:{color:"#c0392b"},children:"*"})]}),a.jsx("input",{className:"sms-input",placeholder:"Subject name टाका...",value:V.subjectName,onChange:se=>de(je=>({...je,subjectName:se.target.value}))})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"sms-label",children:"Decision In Meeting"}),a.jsxs("select",{className:"sms-input",value:V.decisionInMeeting,onChange:se=>de(je=>({...je,decisionInMeeting:se.target.value,tagTo:se.target.value!=="Approved"?[]:je.tagTo})),children:[a.jsx("option",{value:"",children:"Select Decision"}),a.jsx("option",{value:"Approved",children:"Approved"}),a.jsx("option",{value:"Rejected",children:"Rejected"}),a.jsx("option",{value:"On-Hold",children:"On-Hold"}),a.jsx("option",{value:"Not Conducted",children:"Not Conducted"}),a.jsx("option",{value:"Postponed",children:"Postponed"})]})]}),V.decisionInMeeting==="Approved"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"sms-label",style:{marginBottom:8},children:"Assign to Department"}),a.jsx("div",{className:"sms-dept-grid",children:E.length===0?a.jsx("div",{style:{gridColumn:"span 2",textAlign:"center",color:"#8a9a90",fontSize:13,padding:10},children:"Loading departments..."}):E.map((se,je)=>a.jsxs("label",{className:`sms-dept-item ${V.tagTo.includes(se)?"checked":""}`,children:[a.jsx("input",{type:"checkbox",checked:V.tagTo.includes(se),onChange:()=>Ke(se)}),a.jsx("span",{children:se})]},je))}),V.tagTo.length>0&&a.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:5},children:V.tagTo.map((se,je)=>a.jsxs("span",{style:{background:"#e6f4ec",color:"#1a6640",fontSize:11.5,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid #a8d5b5"},children:["✅ ",se]},je))})]})]}),a.jsxs("div",{style:{display:"flex",gap:10,marginTop:22},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>P(!1),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",onClick:ke,disabled:v,children:v?"Saving...":X===null?"Add Subject":"Update Subject"})]})]})}),he!==null&&a.jsx("div",{style:Ju,children:a.jsxs("div",{style:{background:"#fff",padding:28,borderRadius:12,maxWidth:380,width:z?"90%":"100%",textAlign:"center"},children:[a.jsx("p",{style:{fontSize:17,fontWeight:700,color:"#1a4a2e",marginBottom:6},children:"Delete Subject?"}),a.jsx("p",{style:{fontSize:13.5,color:"#8a9a90",marginBottom:20,fontWeight:500},children:"He subject permanently delete होईल."}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>J(null),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",style:{background:"#c0392b"},onClick:()=>Ce(he),disabled:v,children:v?"Deleting...":"Yes, Delete"})]})]})}),pe&&a.jsx("div",{style:Ju,children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:z?18:28,width:z?"95%":"480px",maxWidth:520,boxShadow:"0 8px 32px rgba(0,0,0,0.12)"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("span",{style:{fontSize:22},children:"⚡"}),a.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#1a4a2e",margin:0},children:"Action Taken"})]}),a.jsx("button",{onClick:()=>$(null),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{background:"#f7fbf8",border:"1.5px solid #d6ede0",borderRadius:10,padding:"12px 16px",marginBottom:18,display:"flex",flexDirection:"column",gap:8},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Meeting No"}),a.jsx("span",{style:{background:"#e6f4ec",color:"#1a6640",fontWeight:700,fontSize:12.5,padding:"2px 10px",borderRadius:6},children:l?.meetingNumber||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject ID"}),a.jsx("span",{style:{background:"#eaf3fb",color:"#1565a8",fontWeight:700,fontSize:12,padding:"2px 8px",borderRadius:5,fontFamily:"monospace"},children:pe.subjectId||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject Name"}),a.jsx("span",{style:{fontWeight:600,color:"#2d3d35",maxWidth:220,textAlign:"right"},children:pe.subjectName||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject Type"}),a.jsx("span",{style:{background:"#f3f0ff",color:"#6a3ab0",fontSize:11.5,fontWeight:600,padding:"2px 8px",borderRadius:20},children:pe.subjectType||"General"})]})]}),a.jsxs("div",{style:{marginBottom:22},children:[a.jsxs("label",{className:"sms-label",style:{marginBottom:6},children:["Action Taken",a.jsx("span",{style:{display:"inline-block",background:"#fff8e1",color:"#b07a00",fontSize:10,fontWeight:800,padding:"2px 7px",borderRadius:20,marginLeft:6,textTransform:"uppercase"},children:pe.subjectType==="Administrative and Financial Approval"?"Prashaskiy":pe.subjectType==="Contract Approval"?"Samvida":"General"})]}),a.jsxs("select",{className:"sms-input",value:me,onChange:se=>we(se.target.value),children:[a.jsx("option",{value:"",children:"-- Select --"}),et(pe.subjectType).map((se,je)=>a.jsx("option",{value:se,children:se},je))]}),me&&a.jsx("div",{style:{marginTop:10},children:a.jsxs("span",{style:{background:me==="Yes"?"#e6f4ec":me==="No"?"#fdecea":"#f0f0ff",color:me==="Yes"?"#1a6640":me==="No"?"#c0392b":"#3a3ab0",fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:20},children:["✅ ",me]})})]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>$(null),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",onClick:Lt,disabled:F||!me,children:F?"Saving...":"Save Action Taken"})]})]})})]})]})}const Ju={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:16};function k8(n){return ct({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"},child:[]}]})(n)}const N8="/assets/ajivsir8-CVMwJ6TC.jpeg",C8="/assets/ajivsir1-DtAuu40c.jpeg",T8="/assets/meeting2-BpgpR0FZ.jpeg",z8="/assets/tree-BGxUfGTP.jfif",A8="/assets/pani3-tuXII5q-.jpg",E8="/assets/narangibridgeahani-Ct7_szRG.jpeg";function Qu({src:n,style:o,loop:s=!0}){const l=b.useRef(null);return b.useEffect(()=>{let d;const p=()=>{window.lottie&&l.current&&(l.current.innerHTML="",d=window.lottie.loadAnimation({container:l.current,renderer:"svg",loop:s,autoplay:!0,path:n}))};if(window.lottie)p();else{const f=document.createElement("script");f.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js",f.onload=p,document.head.appendChild(f)}return()=>d&&d.destroy()},[n]),a.jsx("div",{ref:l,style:o})}function Ax(){const n=vt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),s=b.useRef(null),[l,d]=b.useState(0),[p,f]=b.useState(!0),[h,x]=We.useState(0),[g,y]=We.useState(!0),v=[{icon:"🌉",tag:"पायाभूत सुविधा",title:"नारंगी उड्डाणपूल प्रकल्प पाहणी",desc:"नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 42 कोटी",deadline:"डिसेंबर 2025",stat:"",statLbl:"मार्च २०२६ अखेर वाहतुकीसाठी खुले",accent:"#51ABAC",bgimg:E8},{icon:"🏛️",tag:"प्रशासन",title:"समिती गठनाबाबत चर्चा",desc:"स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"",statLbl:"",accent:"#028945",bgimg:T8},{icon:"💧",tag:"पाणीपुरवठा",title:"24×7 पाणीपुरवठा योजना — वसई विभाग",desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"1.2 लाख",statLbl:"लाभार्थी कुटुंबे",accent:"#028945",bgimg:A8},{icon:"🌳",tag:"पर्यावरण",title:"हरित वसई-विरार — वृक्षारोपण मोहीम",desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 8 कोटी",deadline:"ऑगस्ट 2025",stat:"5 लाख",statLbl:"झाडे लावणार",accent:"#028945",bgimg:z8}];b.useEffect(()=>{if(!p)return;const E=setInterval(()=>{d(S=>(S+1)%v.length)},4e3);return()=>clearInterval(E)},[p,v.length]),b.useEffect(()=>{if(!g)return;const E=setInterval(()=>{x(S=>S>=z?0:S+1)},5e3);return()=>clearInterval(E)},[g]),b.useEffect(()=>{if(!s.current)return;const E=s.current,S=(E.offsetWidth-40)/3;E.scrollTo({left:h*(S+20),behavior:"smooth"})},[h]);const T=[{icon:a.jsx(Q0,{size:32,color:"#fff"}),lottie:"https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json",title:"नोंदणी करा",desc:"Mobile number वापरून account तयार करा."},{lottie:"https://assets4.lottiefiles.com/packages/lf20_tljjahng.json",title:"तारीख निवडा",desc:"मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"},{lottie:"https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json",title:"तपशील भरा",desc:"भेटीचे कारण, visitors संख्या आणि photo द्या"},{lottie:"https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title:"टोकन मिळवा",desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"}],R=v[l],k=[{tag:"🌿 शिबिर प्रदर्शन",title:"घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन",rows:["घनकचरा व्यवस्थापन प्रदर्शन","खत निर्मिती तंत्रज्ञान प्रदर्शन"],date:"२८ फेब्रुवारी २०२६",accent:"#4CABC1",bg:"linear-gradient(160deg,#b8e2ec 0%,#d0eff7 40%,#aad8e8 100%)",dotColors:["#4CABC1","#66A962"]},{tag:"🧹 स्वच्छता आढावा",title:"दैनंदिन कचरा संकलन व स्वच्छता बैठक",rows:["कचरा संकलन व वर्गीकरण","गटार व नाले साफसफाई"],date:"११ मार्च २०२६",accent:"#66A962",bg:"linear-gradient(160deg,#b5d9b3 0%,#d2edd0 40%,#a8cfaa 100%)",dotColors:["#66A962","#CA9D28"]},{tag:"🛣️ रस्ते विकास",title:"रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक",rows:["रस्ते दुरुस्ती व बांधकाम","फुटपाथ उभारणी नियोजन"],date:"१० मार्च २०२६",accent:"#CA9D28",bg:"linear-gradient(160deg,#f0d6a8 0%,#f7e6c2 40%,#e8c87a 100%)",dotColors:["#CA9D28","#CE9A54"]},{tag:"⚡ वीज विकास",title:"MSEDCL वसई मंडळ आढावा बैठक",rows:["MSEDCL विकास कामे आढावा","महापौर व नगर सेवक बैठक"],date:"५ मार्च २०२६",accent:"#49ACC3",bg:"linear-gradient(160deg,#a8d4dc 0%,#c8e8f0 40%,#8ec4d0 100%)",dotColors:["#49ACC3","#187480"]}],z=1,M=Math.min(h,z);return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

        /* ══ HERO ══ */
        .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 72px; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background-image:url(${N8}); background-size:cover; background-position:left; background-repeat:no-repeat; z-index:0; }
        .hero::after { content:''; position:absolute; inset:0; background:rgba(40,120,120,0.72); z-index:1; }
        .hero > * { position:relative; z-index:2; }
        .hero-orbit { position:absolute; inset:0; z-index:2; pointer-events:none; }
        .hero-float { position:absolute; background:rgba(208,154,80,0.92); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; box-shadow:0 4px 20px rgba(0,0,0,0.25); animation:floatBob 3s ease-in-out infinite; }
        .hero-float.f1{width:52px;height:52px;top:28%;left:8%;animation-delay:0s}
        .hero-float.f2{width:44px;height:44px;top:60%;left:16%;animation-delay:0.7s}
        .hero-float.f3{width:52px;height:52px;top:22%;right:8%;animation-delay:1.1s}
        .hero-float.f4{width:44px;height:44px;top:58%;right:14%;animation-delay:0.4s}
        @keyframes floatBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .hero-jansanwad { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(52px,10vw,96px); font-weight:800; color:#F5D87A; line-height:1.05; margin-bottom:18px; text-shadow:0 4px 32px rgba(0,0,0,0.3),0 2px 8px rgba(0,0,0,0.2); letter-spacing:-1px; }
        .hero-title-underline { width:80px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A,#D09A50); border-radius:2px; margin:0 auto 22px; animation:shimmer 2.5s ease-in-out infinite; }
        @keyframes shimmer{0%,100%{opacity:1}50%{opacity:0.6}}
        .hero-desc { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(14px,2.2vw,19px); font-weight:600; color:rgba(255,255,255,0.93); max-width:620px; margin:0 auto 40px; line-height:1.7; text-shadow:0 2px 12px rgba(0,0,0,0.25); }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .hero-btn-primary { padding:14px 36px; border-radius:12px; border:none; background:#028945; color:#fff; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; box-shadow:0 4px 20px rgba(2,137,69,0.45); }
        .hero-btn-primary:hover { background:#016d38; transform:translateY(-2px); }
        .hero-btn-outline { padding:14px 36px; border-radius:12px; border:2px solid rgba(245,216,122,0.85); background:transparent; color:#F5D87A; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; }
        .hero-btn-outline:hover { background:rgba(245,216,122,0.15); transform:translateY(-2px); }

        /* ══ HOW IT WORKS ══ */
        .hiw-section { padding:72px 24px 80px; background:#ffffff; position:relative; }
        .hiw-section::before { content:''; position:absolute; inset:0; background-image:radial-gradient(circle at 15% 50%,rgba(81,171,172,0.06) 0%,transparent 55%),radial-gradient(circle at 85% 20%,rgba(2,137,69,0.05) 0%,transparent 50%); pointer-events:none; }
        .hiw-inner { max-width:1080px; margin:0 auto; position:relative; z-index:1; }
        .hiw-header { text-align:center; margin-bottom:52px; }
        .hiw-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4.5vw,44px); font-weight:800; color:#1a1a1a; margin-bottom:12px; line-height:1.2; }
        .hiw-title-bar { width:64px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A); border-radius:2px; margin:0 auto 14px; }
        .hiw-sub { font-family:'DM Sans',sans-serif; color:#6b7280; font-size:15px; }
        .hiw-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; align-items:stretch; }
        .hiw-grid-wrap { position:relative; }
        .hiw-connector { position:absolute; top:52px; left:calc(12.5% + 20px); right:calc(12.5% + 20px); height:2px; background:linear-gradient(90deg,rgba(81,171,172,0.3),rgba(81,171,172,0.6),rgba(81,171,172,0.3)); z-index:0; pointer-events:none; }
        .hiw-card { background:#ffffff; border-radius:20px; padding:36px 22px 28px; text-align:center; border:1.5px solid rgba(81,171,172,0.18); box-shadow:0 4px 24px rgba(81,171,172,0.10),0 1px 4px rgba(0,0,0,0.04); transition:transform .25s,box-shadow .25s,border-color .25s; position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; }
        .hiw-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,var(--teal),var(--green)); border-radius:20px 20px 0 0; }
        .hiw-card:hover { transform:translateY(-8px); box-shadow:0 16px 40px rgba(81,171,172,0.22),0 4px 12px rgba(0,0,0,0.06); border-color:rgba(81,171,172,0.4); }
        .hiw-icon-wrap { width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#51ABAC,#028945); display:flex; align-items:center; justify-content:center; margin:0 auto 20px; box-shadow:0 6px 20px rgba(81,171,172,0.35); flex-shrink:0; }
        .hiw-num { position:absolute; top:14px; right:16px; width:26px; height:26px; border-radius:50%; background:linear-gradient(135deg,var(--teal),var(--green)); color:#fff; font-size:11px; font-weight:800; font-family:'DM Sans',sans-serif; display:flex; align-items:center; justify-content:center; }
        .hiw-step-title { font-family:'DM Sans',sans-serif; font-weight:700; color:#1a4a2e; font-size:15px; margin-bottom:10px; line-height:1.3; }
        .hiw-step-desc { font-family:'DM Sans',sans-serif; font-size:13px; color:#6b7280; line-height:1.65; flex:1; }

        /* ══ MAYOR SECTION ══ */
        .mayor-section {
          width: 100%;
          display: flex;
          align-items: stretch;
          min-height: 480px;
          overflow: hidden;
        }

        /* ── LEFT PANEL ── */
        .mayor-left {
          flex: 0 0 42%;
          background: #f5ead8;
          padding: 60px 52px 60px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .mayor-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(200,160,80,0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        .mayor-heading-line1 {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 800;
          color: #1a5050;
          line-height: 1.15;
          margin: 0 0 2px 0;
          position: relative;
          z-index: 1;
        }
        .mayor-heading-line2 {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 800;
          color: #C8922A;
          line-height: 1.15;
          margin: 0 0 28px 0;
          position: relative;
          z-index: 1;
        }
        .mayor-bio {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13.5px;
          color: #3a3a3a;
          line-height: 1.9;
          margin-bottom: 36px;
          max-width: 400px;
          position: relative;
          z-index: 1;
        }
        .mayor-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 8px;
          border: none;
          background: #028945;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all .2s;
          box-shadow: 0 4px 16px rgba(2,137,69,0.35);
          width: fit-content;
          position: relative;
          z-index: 1;
        }
        .mayor-btn-primary:hover { background:#016d38; transform:translateY(-2px); box-shadow:0 8px 22px rgba(2,137,69,0.45); }

        /* ── RIGHT PANEL ── */
        .mayor-right {
          flex: 1;
          background: linear-gradient(145deg, #1e7a7a 0%, #155e5e 40%, #0d4040 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          min-height: 480px;
        }
        .mayor-right::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #C9963A 20%, #e8b84b 60%, transparent 100%);
          z-index: 4;
        }

        /* Decorations */
        .mayor-chevrons { position:absolute; top:0; right:0; width:200px; height:200px; pointer-events:none; z-index:2; }
        .mayor-diamond-tl { position:absolute; top:18%; left:6%; pointer-events:none; z-index:2; }
        .mayor-diamond-mid { position:absolute; top:48%; left:3%; pointer-events:none; z-index:2; }
        .mayor-gold-tri { position:absolute; bottom:0; right:0; pointer-events:none; z-index:2; }
        .mayor-sparkle { position:absolute; bottom:12%; right:2%; pointer-events:none; z-index:3; }
        .mayor-phone-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(81,200,200,0.15) 0%, transparent 65%);
          pointer-events: none; z-index: 1;
        }

        /* Content wrap */
        .mayor-content-wrap {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        /* Brand row */
        .mayor-brand-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.18);
          width: 100%;
          justify-content: center;
        }
        .mayor-brand-logo-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        }
        .mayor-brand-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mayor-brand-text {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px;
          font-weight: 700;
          color: rgba(255,255,255,0.95);
          line-height: 1.5;
          max-width: 260px;
        }

        /* Bottom row */
        .mayor-bottom-row {
          display: flex;
          align-items: center;
          gap: 18px;
          width: 100%;
          justify-content: center;
        }

        /* Data columns */
        .mayor-data-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 120px;
          flex-shrink: 0;
        }
        .mayor-data-col-head {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 9.5px;
          font-weight: 700;
          color: #F5D87A;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(245,216,122,0.35);
          padding-bottom: 5px;
          margin-bottom: 2px;
        }
        .mayor-data-text {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 10px;
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          padding: 7px 9px;
          background: rgba(255,255,255,0.07);
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* Center phone area */
        .mayor-phone-center {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        /* Bubbles */
        .mayor-bubbles-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-shrink: 0;
          z-index: 4;
        }
        .mayor-bubble-item {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.12);
          animation: mBob 3.5s ease-in-out infinite;
          cursor: default;
        }
        .mayor-bubble-item:nth-child(1){animation-delay:0s}
        .mayor-bubble-item:nth-child(2){animation-delay:0.75s}
        .mayor-bubble-item:nth-child(3){animation-delay:1.5s}
        @keyframes mBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        /* Phone mockup */
        .mayor-phone-wrap { position:relative; z-index:4; flex-shrink:0; }
        .mayor-phone {
          width: 195px;
          background: #051515;
          border-radius: 34px;
          padding: 8px;
          position: relative;
          box-shadow:
            0 0 0 2px rgba(100,210,210,0.5),
            0 0 0 5px rgba(81,171,172,0.12),
            0 28px 70px rgba(0,0,0,0.55),
            0 6px 20px rgba(0,0,0,0.3);
          transform: rotate(-2deg);
        }
        .mayor-phone::before {
          content: '';
          position: absolute;
          top: 14px; left: 50%;
          transform: translateX(-50%);
          width: 44px; height: 5px;
          background: #051515;
          border-radius: 3px;
          z-index: 5;
        }
        .mayor-phone-inner { border-radius:28px; overflow:hidden; background:#fff; }
        .mayor-phone-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .mayor-phone-badge { padding:10px 12px 12px; background:#fff; border-top:1px solid #f0f0f0; }
        .mayor-phone-badge-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11px;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.4;
        }
        .mayor-phone-badge-title {
          font-size: 9px;
          color: #51ABAC;
          font-weight: 700;
          margin-top: 2px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

       
       /* ══ PROJECTS ══ */
.projects-section {
  padding: 80px 32px;
  background: linear-gradient(160deg, #eef8f4 0%, #FFFCF2 50%, #fff 100%);
  position: relative;
  overflow: hidden;
}

/* Decorative background blobs */
.projects-section::before {
  content: '';
  position: absolute;
  top: -80px; left: -80px;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(76,171,193,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.projects-section::after {
  content: '';
  position: absolute;
  bottom: -60px; right: -60px;
  width: 280px; height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(202,157,40,0.10) 0%, transparent 70%);
  pointer-events: none;
}

.projects-inner { max-width:1060px; margin:0 auto; position:relative; z-index:1; }

.section-header { text-align:center; margin-bottom:48px; }
.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, rgba(76,171,193,0.15), rgba(202,157,40,0.12));
  color: #187480;
  font-size: 12px; font-weight: 700;
  padding: 6px 18px; border-radius: 999px;
  margin-bottom: 14px; letter-spacing: 0.6px; text-transform: uppercase;
  border: 1px solid rgba(76,171,193,0.3);
}
.section-title {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(28px,4vw,42px); font-weight: 800;
  color: #1a4a2e; margin-bottom: 8px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.section-sub { color: #6b7280; font-size: 15px; }

/* ── CARD ── */
.proj-card {
  display: flex;
  border-radius: 28px;
  overflow: hidden;
  box-shadow:
    0 4px 0 0 rgba(76,171,193,0.35),
    0 16px 56px rgba(0,0,0,0.10),
    0 4px 16px rgba(0,0,0,0.06);
  min-height: 320px;
  transition: box-shadow .35s, transform .35s;
  background: #fff;
  border: 1.5px solid rgba(76,171,193,0.18);
}
.proj-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 4px 0 0 rgba(76,171,193,0.5),
    0 28px 72px rgba(0,0,0,0.14),
    0 8px 24px rgba(0,0,0,0.08);
}

.proj-left {
  flex: 1; padding: 44px 48px;
  display: flex; flex-direction: column; justify-content: center;
  border-radius: 28px 0 0 28px;
  background-size: cover; background-position: top; background-repeat: no-repeat;
}

.proj-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 700;
  padding: 5px 16px; border-radius: 999px;
  text-transform: uppercase; letter-spacing: 0.6px;
  margin-bottom: 16px; width: fit-content;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.proj-title {
  font-family: 'Tiro Devanagari Marathi', serif;
  font-size: clamp(18px,2.4vw,26px); font-weight: 800;
  color: #1a1a1a; margin-bottom: 14px; line-height: 1.35;
}

.proj-desc {
  font-family: 'Tiro Devanagari Marathi', serif;
  font-size: 13.5px; color: #555;
  line-height: 1.85; margin-bottom: 24px; max-width: 480px;
}

.proj-progress-row { display:flex; justify-content:space-between; margin-bottom:8px; }
.proj-progress-lbl { font-size:12px; font-weight:700; color:#4b5563; letter-spacing:0.3px; }
.proj-progress-pct { font-size:13px; font-weight:800; }

.proj-bar {
  height: 12px;
  background: rgba(0,0,0,0.06);
  border-radius: 999px; overflow: hidden;
  margin-bottom: 22px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.08);
}
.proj-bar-fill {
  height: 100%; border-radius: 999px;
  transition: width 0.7s cubic-bezier(0.22,1,0.36,1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  position: relative;
}
/* shimmer on bar */
.proj-bar-fill::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: barShimmer 2s ease-in-out infinite;
  border-radius: 999px;
}
@keyframes barShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

.proj-meta { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
.proj-meta-item {
  font-size: 12.5px; color: #6b7280;
  display: flex; align-items: center; gap: 5px;
  background: rgba(0,0,0,0.04);
  padding: 4px 10px; border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.06);
}
.proj-meta-item strong { color:#1a1a1a; }

.proj-chip {
  font-size: 11px; font-weight: 700;
  padding: 5px 14px; border-radius: 999px; text-transform: uppercase;
  letter-spacing: 0.4px;
}
.chip-ongoing  { background: rgba(102,169,98,0.15); color:#1a7a40; border:1px solid rgba(102,169,98,0.3); }
.chip-planning { background: rgba(202,157,40,0.15); color:#8a6010; border:1px solid rgba(202,157,40,0.3); }

/* ── RIGHT PANEL ── */
.proj-right {
  width: 230px; flex-shrink: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 16px; padding: 36px 20px;
  border-radius: 0 28px 28px 0;
  transition: background 0.5s;
  position: relative; overflow: hidden;
}
/* diagonal pattern overlay */
.proj-right::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px,
    transparent 1px, transparent 18px
  );
  pointer-events: none;
}
/* sparkle top-right */
.proj-right::after {
  content: '✦';
  position: absolute; top: 16px; right: 18px;
  font-size: 18px; color: rgba(255,255,255,0.35);
  pointer-events: none;
}

.proj-icon {
  font-size: 68px; line-height: 1;
  filter: drop-shadow(0 6px 16px rgba(0,0,0,0.2));
  animation: iconFloat 3s ease-in-out infinite;
}
@keyframes iconFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

.proj-stat-num {
  font-family: 'Crimson Pro', serif;
  font-size: 40px; font-weight: 800; color: #fff;
  text-align: center; line-height: 1;
  text-shadow: 0 2px 12px rgba(0,0,0,0.2);
}
.proj-stat-lbl {
  font-size: 11px; color: rgba(255,255,255,0.88);
  font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.5px; text-align: center;
  line-height: 1.5;
}

/* ── NAV ── */
.proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:32px; }

.proj-btn {
  width: 44px; height: 44px; border-radius: 50%;
  border: 1.5px solid rgba(76,171,193,0.35);
  background: rgba(255,255,255,0.9);
  color: #187480; font-size: 20px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s;
  box-shadow: 0 2px 12px rgba(76,171,193,0.15);
  backdrop-filter: blur(4px);
}
.proj-btn:hover {
  background: linear-gradient(135deg, #4CABC1, #187480);
  color: #fff; border-color: transparent;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(76,171,193,0.35);
}

.proj-dots { display:flex; gap:7px; align-items:center; }
.proj-dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: rgba(76,171,193,0.25); border: none;
  cursor: pointer; padding: 0; transition: all .3s;
}
.proj-dot.active {
  background: linear-gradient(135deg, #4CABC1, #CA9D28);
  width: 28px; border-radius: 5px;
  box-shadow: 0 2px 8px rgba(76,171,193,0.4);
}

.proj-counter {
  font-size: 12px; font-weight: 700;
  color: #187480; font-family: 'DM Sans', sans-serif;
  background: rgba(76,171,193,0.1);
  padding: 3px 10px; border-radius: 20px;
  border: 1px solid rgba(76,171,193,0.2);
}

        /* ══ NOTICE ══ */
        .notice{background:linear-gradient(135deg,#fef9c3,#fef3c7);border:1px solid #fde68a;border-radius:16px;padding:24px 28px;margin:40px auto;display:flex;gap:16px;align-items:flex-start;max-width:1036px}
        .notice-icon{font-size:28px;flex-shrink:0}
        .notice-title{font-weight:700;color:#92400e;font-size:15px;margin-bottom:6px}
        .notice-text{font-size:13px;color:#a16207;line-height:1.6}

        /* ══ CTA ══ */
        // .cta{background:linear-gradient(135deg,var(--green) 0%,#014d28 100%);color:#fff;padding:72px 32px;text-align:center;position:relative;overflow:hidden}
        // .cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(76,171,191,0.25) 0%,transparent 65%);pointer-events:none}
        // .cta-inner{position:relative;z-index:1}
        // .cta-title{font-family:'Crimson Pro',serif;font-size:clamp(28px,4vw,40px);font-weight:800;margin-bottom:12px}
        // .cta-sub{color:rgba(255,255,255,0.8);font-size:16px;margin-bottom:36px}
        // .cta-btn{padding:15px 48px;border-radius:14px;border:none;background:#fff;color:var(--green);font-weight:800;font-size:16px;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,0.18);transition:all .2s}
        // .cta-btn:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,0,0,0.25)}

        /* ══ RESPONSIVE ══ */
        @media(max-width:1100px){
          .mayor-data-col{width:100px}
          .mayor-data-text{font-size:9.5px}
          .mayor-brand-text{font-size:13px}
          .mayor-phone{width:175px}
          .mayor-phone-img{height:210px}
        }
        @media(max-width:1024px){
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:20px}
          .hiw-connector{display:none}
          .mayor-left{padding:48px 36px 48px 40px}
        }
        @media(max-width:900px){
          .mayor-data-col:last-child{display:none}
        }
        @media(max-width:768px){
          .hero{min-height:calc(100svh - 64px);padding:60px 20px 56px}
          .hero-float.f1,.hero-float.f2{left:3%}
          .hero-float.f3,.hero-float.f4{right:3%}
          .hero-float.f1,.hero-float.f3{width:40px;height:40px;font-size:15px}
          .hero-float.f2,.hero-float.f4{width:36px;height:36px;font-size:13px}
          .hiw-section{padding:52px 16px 60px}
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:16px}
          .hiw-card{padding:28px 16px 22px}
          .hiw-icon-wrap{width:60px;height:60px}
          .mayor-section{flex-direction:column}
          .mayor-left{flex:0 0 auto;width:100%;padding:44px 28px}
          .mayor-right{flex:0 0 auto;width:100%;min-height:460px;padding:36px 16px}
          .mayor-data-col:last-child{display:flex}
          .mayor-data-col{width:90px}
          .proj-card{flex-direction:column}
          .proj-left{border-radius:24px 24px 0 0;border-right:1px solid rgba(81,171,172,0.12);border-bottom:none;padding:28px 24px}
          .proj-right{width:100%;border-radius:0 0 24px 24px;flex-direction:row;justify-content:center;gap:24px;padding:20px 24px}
          .notice{margin:24px 16px}
        }
        @media(max-width:480px){
          .hero{padding:48px 16px 48px}
          .hero-btns{flex-direction:column;align-items:center}
          .hero-btn-primary,.hero-btn-outline{width:100%;max-width:300px;text-align:center}
          .hiw-section{padding:44px 14px 52px}
          .hiw-grid{grid-template-columns:1fr;gap:14px}
          .hiw-connector{display:none}
          .hiw-title{font-size:26px}
          .mayor-left{padding:36px 20px}
          .mayor-heading-line1,.mayor-heading-line2{font-size:clamp(26px,7.5vw,40px)}
          .mayor-btn-primary{width:100%;justify-content:center}
          .mayor-bottom-row{flex-direction:column;align-items:center}
          .mayor-data-col{display:none}
          .mayor-phone{width:155px;transform:none}
          .mayor-phone-img{height:190px}
          .mayor-bubble-item{width:48px;height:48px}
          .mayor-brand-text{font-size:12px;max-width:200px}
          .mayor-brand-logo-wrap{width:46px;height:46px}
          .proj-right{flex-direction:column;gap:12px}
          .proj-stat-num{font-size:28px}
        }
        @media(max-width:360px){
          .hero-jansanwad{font-size:40px}
          .hero-float{display:none}
        }

        /* ══ NEWS SLIDER ══ */
        /* ══ STAGGERED CARD ANIMATION ══ */

/* ══ NEWS SLIDER ══ */
/* ══ STAGGERED CARD ANIMATION ══ */

@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.news-card {
  animation: cardSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Staggered delays - each card appears 1 second after the previous */
.news-card:nth-child(1) { animation-delay: 0s;    }
.news-card:nth-child(2) { animation-delay: 1s;    }
.news-card:nth-child(3) { animation-delay: 2s;    }
.news-card:nth-child(4) { animation-delay: 3s;    }

        .news-section { background:#F4E7BE; padding:72px 32px 80px; position:relative; overflow:hidden; }
        .news-section::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 15% 60%,rgba(76,171,193,0.08) 0%,transparent 50%),radial-gradient(circle at 85% 20%,rgba(102,169,98,0.07) 0%,transparent 50%); pointer-events:none; }
        .news-inner { max-width:1060px; margin:0 auto; position:relative; z-index:1; }
        .news-header { text-align:center; margin-bottom:48px; }
        .news-section-tag { display:inline-block; background:rgba(202,157,40,0.15); color:#8a6010; font-size:12px; font-weight:700; padding:5px 16px; border-radius:999px; margin-bottom:14px; letter-spacing:0.6px; text-transform:uppercase; }
        .news-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4vw,40px); font-weight:800; color:#1a3a2a; margin-bottom:8px; }
        .news-title-bar { width:64px; height:4px; background:linear-gradient(90deg,#CA9D28,#F5D87A); border-radius:2px; margin:0 auto 10px; }
        .news-sub { color:#7a6535; font-size:15px; }
       .news-viewport { overflow-x:scroll; scrollbar-width:none; -ms-overflow-style:none; }
.news-viewport::-webkit-scrollbar { display:none; }
/* REPLACE current .news-track — remove transition and will-change */
.news-track { display:flex; gap:20px; }
        .news-card { flex:0 0 calc(33.333% - 14px); border-radius:24px; overflow:hidden; position:relative; cursor:pointer; transition:transform .35s,box-shadow .35s; display:flex; flex-direction:column; min-height:300px; box-shadow:0 4px 20px rgba(0,0,0,0.07); }
        .news-card:hover { transform:translateY(-8px); box-shadow:0 20px 48px rgba(0,0,0,0.13); }
        .news-card::before { content:''; position:absolute; width:110px; height:110px; border-radius:20px; top:8px; right:-18px; opacity:0.18; filter:blur(3px); transform:rotate(15deg); background:var(--nc-accent); }
        .news-card::after { content:''; position:absolute; width:72px; height:72px; border-radius:14px; top:52px; right:18px; opacity:0.12; filter:blur(4px); transform:rotate(8deg); background:var(--nc-accent); }
        .nc-widget { margin:20px 20px 0; background:rgba(255,255,255,0.82); border-radius:16px; padding:14px 16px 16px; backdrop-filter:blur(8px); position:relative; z-index:2; box-shadow:0 4px 20px rgba(0,0,0,0.08); flex-shrink:0; }
        .nc-widget-day { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; color:#1a2a2a; line-height:1; margin-bottom:12px; }
        .nc-widget-rows { display:flex; flex-direction:column; gap:8px; }
        .nc-widget-row { display:flex; align-items:center; gap:8px; font-family:'DM Sans',sans-serif; font-size:16px; font-weight:600; color:#2a3a3a; }
        .nc-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
        .nc-caption { margin-top:auto; padding:16px 20px 20px; position:relative; z-index:2; }
        .nc-tag { display:inline-flex; align-items:center; gap:5px; background:rgba(255,255,255,0.55); border:1px solid rgba(255,255,255,0.8); color:#1a3a3a; font-size:10px; font-weight:700; padding:3px 10px; border-radius:20px; margin-bottom:9px; letter-spacing:.5px; text-transform:uppercase; backdrop-filter:blur(4px); font-family:'DM Sans',sans-serif; }
        .nc-title { font-family:'Tiro Devanagari Marathi',serif; font-size:14.5px; font-weight:700; color:#1a2a2a; line-height:1.45; margin-bottom:10px; }
        .nc-date-row { display:flex; align-items:center; justify-content:space-between; }
        .nc-date { font-family:'DM Sans',sans-serif; font-size:11px; font-weight:700; color:#3a2a0a; opacity:0.65; display:flex; align-items:center; gap:5px; }
        .nc-arrow { width:30px; height:30px; background:rgba(255,255,255,0.7); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; color:#1a3a3a; transition:background .2s,transform .2s; border:1px solid rgba(255,255,255,0.9); }
        .news-card:hover .nc-arrow { background:#fff; transform:translateX(3px); }
        .news-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:32px; }
        .news-btn { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(26,42,42,0.2); background:rgba(255,255,255,0.7); color:#1a2a2a; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06); backdrop-filter:blur(4px); }
        .news-btn:hover { border-color:#CA9D28; color:#CA9D28; background:rgba(255,255,255,0.95); }
        .news-dots { display:flex; gap:7px; align-items:center; }
        .news-dot { width:9px; height:9px; border-radius:50%; background:rgba(26,42,42,0.2); border:none; cursor:pointer; padding:0; transition:all .25s; }
        .news-dot.active { background:#CA9D28; width:26px; border-radius:5px; }
        .news-counter { font-size:12px; font-weight:600; color:#9ca3af; font-family:'DM Sans',sans-serif; }
        /* ══ NEWS SLIDER — MOBILE RESPONSIVE ══ */
@media(max-width: 900px) {
  .news-section { padding: 56px 24px 64px; }
  .news-card { flex: 0 0 calc(50% - 10px); }
}

@media(max-width: 600px) {
  .news-section { padding: 48px 16px 56px; }
  .news-title { font-size: 22px; }
  .news-sub { font-size: 13px; }
  .news-header { margin-bottom: 32px; }

  /* Single card — full width on mobile */
  .news-card { flex: 0 0 calc(100% - 0px); min-height: 260px; }

  .nc-widget { margin: 16px 16px 0; padding: 12px 14px 14px; }
  .nc-widget-day { font-size: 26px; margin-bottom: 10px; }
  .nc-widget-row { font-size: 11px; }

  .nc-caption { padding: 14px 16px 16px; }
  .nc-title { font-size: 13.5px; }
  .nc-date { font-size: 10.5px; }
  .nc-arrow { width: 26px; height: 26px; font-size: 12px; }

  .news-nav { gap: 10px; margin-top: 24px; }
  .news-btn { width: 38px; height: 38px; font-size: 18px; }
  .news-counter { font-size: 11px; }
}

@media(max-width: 400px) {
  .news-section { padding: 40px 12px 48px; }
  .news-title { font-size: 20px; }
  .news-card { border-radius: 18px; }
  .nc-widget { border-radius: 12px; }
}

      `}),a.jsxs("div",{className:"home-root",children:[a.jsxs("div",{className:"hero",children:[a.jsxs("div",{className:"hero-orbit","aria-hidden":"true",children:[a.jsx("div",{className:"hero-float f1",children:"📅"}),a.jsx("div",{className:"hero-float f2",children:"👥"}),a.jsx("div",{className:"hero-float f3",children:"📅"}),a.jsx("div",{className:"hero-float f4",children:"👤"})]}),a.jsx("h1",{className:"hero-jansanwad",children:"जन संवाद"}),a.jsx("div",{className:"hero-title-underline"}),a.jsx("p",{className:"hero-desc",children:"नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"}),a.jsx("div",{className:"hero-btns",children:o?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"hero-btn-primary",onClick:()=>n("/book-appointment"),children:"📅 Book Appointment"}),a.jsx("button",{className:"hero-btn-outline",onClick:()=>n("/my-appointments"),children:"📋 My Appointments"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"hero-btn-primary",onClick:()=>n("/register"),children:"🚀 Get Started — Register"}),a.jsx("button",{className:"hero-btn-outline",onClick:()=>n("/login"),children:"Login करा"})]})})]}),a.jsx("div",{className:"hiw-section",children:a.jsxs("div",{className:"hiw-inner",children:[a.jsxs("div",{className:"hiw-header",children:[a.jsx("h2",{className:"hiw-title",children:"कसे काम करते?"}),a.jsx("div",{className:"hiw-title-bar"}),a.jsx("p",{className:"hiw-sub",children:"४ टप्प्यांमध्ये महापौरांची भेट बुक करा."})]}),a.jsxs("div",{className:"hiw-grid-wrap",children:[a.jsx("div",{className:"hiw-connector","aria-hidden":"true"}),a.jsx("div",{className:"hiw-grid",children:T.map((E,S)=>a.jsxs("div",{className:"hiw-card",children:[a.jsx("div",{className:"hiw-num",children:S+1}),a.jsx("div",{className:"hiw-icon-wrap",children:S===0?a.jsx(Q0,{size:32,color:"#fff"}):S===3?a.jsx(k8,{size:34,color:"#fff"}):a.jsx(Qu,{src:E.lottie,style:{width:44,height:44}})}),a.jsx("div",{className:"hiw-step-title",children:E.title}),a.jsx("div",{className:"hiw-step-desc",children:E.desc})]},S))})]})]})}),a.jsxs("div",{className:"mayor-section",children:[a.jsxs("div",{className:"mayor-left",children:[a.jsx("p",{className:"mayor-heading-line1",children:"मा. महापौर"}),a.jsx("p",{className:"mayor-heading-line2",children:"श्री. अजीव पाटील"}),a.jsx("p",{className:"mayor-bio",children:"३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."}),a.jsx("button",{className:"mayor-btn-primary",onClick:()=>n(o?"/book-appointment":"/register"),children:"📅 Appointment बुक करा"})]}),a.jsxs("div",{className:"mayor-right",children:[a.jsx("div",{className:"mayor-chevrons","aria-hidden":"true",children:a.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",children:[a.jsxs("g",{opacity:"0.2",stroke:"#7edede",strokeWidth:"1.4",fill:"none",children:[a.jsx("polyline",{points:"160,8 178,26 160,44"}),a.jsx("polyline",{points:"142,8 160,26 142,44"}),a.jsx("polyline",{points:"124,8 142,26 124,44"}),a.jsx("polyline",{points:"160,44 178,62 160,80"}),a.jsx("polyline",{points:"142,44 160,62 142,80"}),a.jsx("polyline",{points:"124,44 142,62 124,80"}),a.jsx("polyline",{points:"168,80 186,98 168,116"}),a.jsx("polyline",{points:"150,80 168,98 150,116"}),a.jsx("polyline",{points:"168,116 186,134 168,152"}),a.jsx("polyline",{points:"150,116 168,134 150,152"})]}),a.jsx("circle",{cx:"182",cy:"18",r:"16",fill:"rgba(81,200,200,0.3)",stroke:"rgba(81,200,200,0.4)",strokeWidth:"1"}),a.jsx("rect",{x:"108",y:"4",width:"10",height:"10",rx:"1",transform:"rotate(45 113 9)",fill:"#7edede",opacity:"0.3"})]})}),a.jsx("div",{className:"mayor-diamond-tl","aria-hidden":"true",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:a.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",transform:"rotate(45 8 8)",fill:"#7edede",opacity:"0.45"})})}),a.jsx("div",{className:"mayor-diamond-mid","aria-hidden":"true",children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:a.jsx("rect",{x:"1.5",y:"1.5",width:"9",height:"9",rx:"1",transform:"rotate(45 6 6)",fill:"#c9a040",opacity:"0.4"})})}),a.jsx("div",{className:"mayor-gold-tri","aria-hidden":"true",children:a.jsxs("svg",{width:"160",height:"110",viewBox:"0 0 160 110",fill:"none",children:[a.jsx("polygon",{points:"160,110 160,0 50,110",fill:"#C9963A",opacity:"0.25"}),a.jsx("polygon",{points:"160,110 160,40 95,110",fill:"#e8b84b",opacity:"0.18"})]})}),a.jsx("div",{className:"mayor-sparkle","aria-hidden":"true",children:a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:a.jsx("path",{d:"M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z",fill:"white",opacity:"0.7"})})}),a.jsx("div",{className:"mayor-phone-glow","aria-hidden":"true"}),a.jsxs("div",{className:"mayor-content-wrap",children:[a.jsxs("div",{className:"mayor-brand-row",children:[a.jsx("div",{className:"mayor-brand-logo-wrap",children:a.jsx("img",{src:Xb,alt:"VVCMC Logo"})}),a.jsx("div",{className:"mayor-brand-text",children:"वसई-विरार शहर महानगरपालिका, जन संवाद"})]}),a.jsxs("div",{className:"mayor-bottom-row",children:[a.jsxs("div",{className:"mayor-data-col",children:[a.jsx("div",{className:"mayor-data-col-head",children:"नागरिक सहभाग"}),a.jsx("div",{className:"mayor-data-text",children:"नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."}),a.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"वसई स्मार्ट सिटी प्रकल्प"}),a.jsx("div",{className:"mayor-data-text",children:"वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."})]}),a.jsxs("div",{className:"mayor-phone-center",children:[a.jsxs("div",{className:"mayor-bubbles-col",children:[a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("rect",{x:"4",y:"4",width:"18",height:"13",rx:"3",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M8 20 L8 17",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",strokeLinecap:"round"}),a.jsx("path",{d:"M7 7h12M7 10h8M7 13h10",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",strokeLinecap:"round"}),a.jsx("circle",{cx:"19",cy:"6",r:"4",fill:"#028945",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),a.jsx("path",{d:"M17 6h4M19 4v4",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})}),a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("polyline",{points:"5,19 10,12 15,15 21,7",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),a.jsx("polyline",{points:"17,7 21,7 21,11",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),a.jsx("line",{x1:"5",y1:"21",x2:"21",y2:"21",stroke:"rgba(255,255,255,0.45)",strokeWidth:"1.2",strokeLinecap:"round"})]})}),a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("circle",{cx:"13",cy:"8",r:"3.2",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M7 21 C7 16.5 19 16.5 19 21",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),a.jsx("circle",{cx:"6.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),a.jsx("path",{d:"M3 20 C3 16.8 10 16.8 10 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),a.jsx("circle",{cx:"19.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),a.jsx("path",{d:"M16 20 C16 16.8 23 16.8 23 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),a.jsx("path",{d:"M10 22.5 Q13 25 16 22.5",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1",strokeLinecap:"round",fill:"none"})]})})]}),a.jsx("div",{className:"mayor-phone-wrap",children:a.jsx("div",{className:"mayor-phone",children:a.jsxs("div",{className:"mayor-phone-inner",children:[a.jsx("img",{src:C8,alt:"मा. महापौर श्री. अजीव पाटील",className:"mayor-phone-img"}),a.jsxs("div",{className:"mayor-phone-badge",children:[a.jsx("div",{className:"mayor-phone-badge-name",children:"मा. महापौर श्री. अजीव पाटील"}),a.jsx("div",{className:"mayor-phone-badge-title",children:"वसई-विरार शहर महानगरपालिका"})]})]})})})]}),a.jsxs("div",{className:"mayor-data-col",children:[a.jsx("div",{className:"mayor-data-col-head",children:"पायाभूत सुविधा"}),a.jsx("div",{className:"mayor-data-text",children:"वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"}),a.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"सुरक्षित व स्वच्छ शहर"}),a.jsx("div",{className:"mayor-data-text",children:"सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."})]})]})]})]})]}),a.jsx("div",{className:"projects-section",style:{backgroundColor:"#F9FCFB"},children:a.jsxs("div",{className:"projects-inner",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-tag",children:"✦ सध्या सुरू"}),a.jsx("h2",{className:"section-title",children:"चालू प्रकल्प"}),a.jsx("p",{className:"section-sub",children:"वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"})]}),a.jsxs("div",{className:"proj-card",onMouseEnter:()=>f(!1),onMouseLeave:()=>f(!0),style:R.bgimg?{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${R.accent}99 100%), url(${R.bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[a.jsxs("div",{className:"proj-left",style:{background:"transparent",border:R.bgimg?"none":"1px solid rgba(81,171,172,0.12)",borderRight:"none"},children:[a.jsxs("div",{className:"proj-tag",style:{background:`${R.accent}18`,color:R.accent},children:[R.icon," ",R.tag]}),a.jsx("div",{className:"proj-title",children:R.title}),a.jsx("p",{className:"proj-desc",children:R.desc}),a.jsxs("div",{className:"proj-progress-row",children:[a.jsx("span",{className:"proj-progress-lbl",children:"प्रगती"}),a.jsx("span",{className:"proj-progress-pct",style:{color:R.accent},children:R.progress})]}),a.jsx("div",{className:"proj-bar",children:a.jsx("div",{className:"proj-bar-fill",style:{width:`${R.progress}%`,background:`linear-gradient(90deg,${R.accent}88,${R.accent})`}})}),a.jsxs("div",{className:"proj-meta",children:[a.jsxs("div",{className:"proj-meta-item",children:["💰 ",a.jsx("strong",{children:R.budget})]}),a.jsxs("div",{className:"proj-meta-item",children:["📅 ",a.jsx("strong",{children:R.deadline})]}),a.jsx("span",{className:`proj-chip ${R.status==="ongoing"?"chip-ongoing":"chip-planning"}`,children:R.statusLabel})]})]}),a.jsxs("div",{className:"proj-right",style:{background:`linear-gradient(160deg,${R.accent},${R.accent}bb)`},children:[a.jsx("div",{className:"proj-icon",children:R.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"proj-stat-num",children:R.stat}),a.jsx("div",{className:"proj-stat-lbl",children:R.statLbl})]})]})]}),a.jsxs("div",{className:"proj-nav",children:[a.jsx("button",{className:"proj-btn",onClick:()=>{f(!1),d(E=>(E-1+v.length)%v.length)},children:"‹"}),a.jsx("div",{className:"proj-dots",children:v.map((E,S)=>a.jsx("button",{className:`proj-dot${l===S?" active":""}`,onClick:()=>{f(!1),d(S)}},S))}),a.jsxs("span",{className:"proj-counter",children:[l+1," / ",v.length]}),a.jsx("button",{className:"proj-btn",onClick:()=>{f(!1),d(E=>(E+1)%v.length)},children:"›"})]})]})}),a.jsxs("div",{className:"notice",children:[a.jsx("span",{className:"notice-icon",children:"⚠️"}),a.jsxs("div",{children:[a.jsx("div",{className:"notice-title",children:"महत्त्वाची सूचना"}),a.jsx("div",{className:"notice-text",children:"भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."})]})]}),a.jsxs("div",{className:"cta",children:[a.jsx(Qu,{src:"https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",style:{position:"absolute",left:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}}),a.jsx(Qu,{src:"https://assets9.lottiefiles.com/packages/lf20_touohxv0.json",style:{position:"absolute",right:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}})]}),a.jsx("div",{className:"news-section",children:a.jsxs("div",{className:"news-inner",children:[a.jsxs("div",{className:"news-header",children:[a.jsx("div",{className:"news-section-tag",children:"✦ ताज्या बातम्या"}),a.jsx("h2",{className:"news-title",children:"महापौर कार्यालयाच्या ताज्या बातम्या"}),a.jsx("div",{className:"news-title-bar"}),a.jsx("p",{className:"news-sub",children:"Mayor's Office Latest Updates & Activities"})]}),a.jsx("div",{className:"news-viewport",ref:s,onMouseEnter:()=>y(!1),onMouseLeave:()=>y(!0),children:a.jsx("div",{className:"news-track",children:k.map((E,S)=>a.jsxs("div",{className:"news-card",style:{background:E.bg,"--nc-accent":E.accent},children:[a.jsxs("div",{className:"nc-widget",children:[a.jsx("div",{className:"nc-widget-day",children:E.day}),a.jsx("div",{className:"nc-widget-rows",children:E.rows.map((A,P)=>a.jsxs("div",{className:"nc-widget-row",children:[a.jsx("span",{className:"nc-dot",style:{background:E.dotColors[P]}}),A]},P))})]}),a.jsxs("div",{className:"nc-caption",children:[a.jsx("div",{className:"nc-tag",children:E.tag}),a.jsx("div",{className:"nc-title",children:E.title}),a.jsxs("div",{className:"nc-date-row",children:[a.jsxs("div",{className:"nc-date",children:["📅 ",E.date]}),a.jsx("div",{className:"nc-arrow",children:"→"})]})]})]},S))},h)}),a.jsxs("div",{className:"news-nav",children:[a.jsx("button",{className:"news-btn",onClick:()=>{y(!1),x(E=>Math.max(0,E-1))},children:"‹"}),a.jsx("div",{className:"news-dots",children:Array.from({length:2}).map((E,S)=>a.jsx("button",{className:`news-dot${M===S?" active":""}`,onClick:()=>{y(!1),x(S)}},S))}),a.jsxs("span",{className:"news-counter",children:[M+1," / 2"]}),a.jsx("button",{className:"news-btn",onClick:()=>{y(!1),x(E=>Math.min(z,E+1))},children:"›"})]})]})})]})]})}function Mn(){const n=vt(),o=new Date().getFullYear(),s=()=>window.scrollTo({top:0,behavior:"smooth"});return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --foot-bg:    #0d2e2a;
          --foot-line:  rgba(81,171,172,0.18);
          --gold:       #F5E6BF;
          --teal:       #51ABAC;
          --gold-strip: #D09A50;
        }

        /* ══ FOOTER WRAPPER ═══════════════════════════════════ */
        .footer {
          background: var(--foot-bg);
          color: rgba(255,255,255,0.82);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* top teal accent line */
        .footer::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--teal) 30%, var(--gold-strip) 70%, transparent 100%);
        }

        /* diagonal line texture */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            linear-gradient(135deg, rgba(81,171,172,0.04) 0%, transparent 50%),
            repeating-linear-gradient(
              135deg,
              transparent 0px, transparent 80px,
              rgba(81,171,172,0.04) 80px, rgba(81,171,172,0.04) 81px
            );
          pointer-events: none;
          z-index: 0;
        }

        /* ══ BODY GRID — 3 columns ════════════════════════════ */
        .footer-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 68px 48px 48px;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.15fr;
          gap: 56px;
        }

        /* ── Col 1: Brand + Address ── */
        .footer-logo-row {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 22px;
        }
        .cn-logo-wrap {
          width: 62px; height: 62px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid rgba(81,171,172,0.45);
          box-shadow: 0 0 0 4px rgba(81,171,172,0.1);
        }
        .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .footer-brand-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 19px; font-weight: 700;
          color: var(--gold); line-height: 1.35;
        }
        .footer-brand-sub {
          font-size: 11px; color: var(--teal);
          letter-spacing: 1.2px; text-transform: uppercase;
          font-weight: 600; margin-top: 4px;
        }

        .footer-tagline {
          font-size: 15px; color: rgba(255,255,255,0.58);
          line-height: 1.85; margin-bottom: 26px;
          max-width: 310px;
          border-left: 2px solid rgba(81,171,172,0.35);
          padding-left: 14px;
        }

        .footer-address { margin-bottom: 22px; }
        .footer-address-title {
          font-size: 11.5px; font-weight: 700; color: var(--teal);
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 10px;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-address-title::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(81,171,172,0.25);
        }
        .footer-address-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: rgba(255,255,255,0.72);
          line-height: 1.9;
        }

        .footer-contacts { display: flex; flex-direction: column; gap: 10px; }
        .footer-contact-row {
          display: flex; align-items: flex-start; gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(81,171,172,0.1);
          border-radius: 10px;
          padding: 9px 12px;
        }
        .footer-contact-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
        .footer-contact-label {
          color: rgba(255,255,255,0.42); font-size: 11.5px;
          margin-bottom: 2px; font-weight: 500;
        }
        .footer-contact-num {
          font-size: 14.5px; color: rgba(255,255,255,0.82);
          font-weight: 500;
        }

        /* ── Col 2 & 3: Titles ── */
        .footer-col-title {
          font-size: 13.5px; font-weight: 700; color: #fff;
          letter-spacing: 0.5px; margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--foot-line);
          display: flex; align-items: center; gap: 8px;
        }
        .footer-col-title-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--teal); flex-shrink: 0;
        }

        /* ── Nav Links ── */
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 4px; padding: 0; margin: 0; }
        .footer-links li a,
        .footer-links li button {
          font-size: 15px; color: rgba(255,255,255,0.62);
          text-decoration: none; background: none; border: none;
          cursor: pointer; padding: 7px 10px;
          transition: color .18s, background .18s, padding-left .18s;
          display: flex; align-items: center; gap: 8px;
          border-radius: 8px; width: 100%;
          font-family: 'DM Sans', sans-serif;
        }
        .footer-links li a:hover,
        .footer-links li button:hover {
          color: var(--teal);
          background: rgba(81,171,172,0.08);
          padding-left: 14px;
        }
        .footer-links li a::before,
        .footer-links li button::before {
          content: '›'; color: var(--teal); font-size: 18px; line-height: 1;
        }

        /* ── Social ── */
        .footer-social { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }
        .footer-social-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid rgba(81,171,172,0.3);
          background: rgba(81,171,172,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.65); font-size: 16px;
          cursor: pointer; transition: all .2s; text-decoration: none;
        }
        .footer-social-btn:hover {
          background: var(--teal); color: #fff;
          border-color: var(--teal);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(81,171,172,0.35);
        }

        /* ── WhatsApp Chip ── */
        .footer-whatsapp-chip {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(37,211,102,0.1);
          border: 1px solid rgba(37,211,102,0.28);
          border-radius: 999px; padding: 10px 18px;
          font-size: 14.5px; color: #25d366; font-weight: 600;
          text-decoration: none; transition: all .2s;
          margin-bottom: 18px; width: fit-content;
        }
        .footer-whatsapp-chip:hover {
          background: rgba(37,211,102,0.2);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37,211,102,0.2);
        }

        /* ══ DIVIDER ══════════════════════════════════════════ */
        .footer-divider {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          height: 1px; background: var(--foot-line);
          margin-left: 48px; margin-right: 48px;
        }

        /* ══ FOOTER BOTTOM ════════════════════════════════════ */
        .footer-bottom {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 22px 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 13px; color: rgba(255,255,255,0.4);
        }
        .footer-back-top {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(81,171,172,0.35);
          background: transparent;
          border-radius: 999px; padding: 9px 22px;
          font-size: 12.5px; font-weight: 700; color: var(--teal);
          cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
          text-transform: uppercase; font-family: 'DM Sans', sans-serif;
        }
        .footer-back-top:hover {
          background: rgba(81,171,172,0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(81,171,172,0.2);
        }
        .footer-back-top svg { transition: transform .2s; }
        .footer-back-top:hover svg { transform: translateY(-3px); }

        /* ══ GOLD STRIP ════════════════════════════════════════ */
        .footer-gold-strip {
          background: var(--gold-strip);
          text-align: center; padding: 9px 24px;
          font-size: 12px; color: rgba(0,0,0,0.55);
          font-weight: 600; letter-spacing: 0.4px;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media(max-width:1024px){
          .footer-body { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media(max-width:640px){
          .footer-body { grid-template-columns: 1fr; padding: 48px 24px 32px; }
          .footer-bottom { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .footer-divider { margin-left: 24px; margin-right: 24px; }
        }
      `}),a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer-body",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsxs("div",{className:"footer-logo-row",children:[a.jsx("div",{className:"cn-logo-wrap",children:a.jsx("img",{src:Bn,alt:"VVCMC"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-brand-name",children:["Vasai-Virar City",a.jsx("br",{}),"Municipal Corporation"]}),a.jsx("div",{className:"footer-brand-sub",children:"VVCMC — Jan Samvad"})]})]}),a.jsx("p",{className:"footer-tagline",children:"For the citizens, by the citizens — committed to transparent, fast and digital public services."}),a.jsxs("div",{className:"footer-address",children:[a.jsx("div",{className:"footer-address-title",children:"Head Office"}),a.jsxs("div",{className:"footer-address-text",children:["Virat Nagar, Near MHADA Colony,",a.jsx("br",{}),"Virar West. PIN: 401303"]})]}),a.jsxs("div",{className:"footer-contacts",children:[a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"📞"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Main Office"}),a.jsx("div",{className:"footer-contact-num",children:"0250-6630000"})]})]}),a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"🚨"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Disaster Management"}),a.jsx("div",{className:"footer-contact-num",children:"0250-2334546 / 0250-2334547"})]})]}),a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"📱"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Helpline"}),a.jsx("div",{className:"footer-contact-num",children:"7058911125 / 7058991430 / 8446427643"})]})]})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-col-title",children:[a.jsx("span",{className:"footer-col-title-dot"}),"Site Map"]}),a.jsxs("ul",{className:"footer-links",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/"),children:"Home"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/book-appointment"),children:"Book Appointment"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/my-appointments"),children:"My Appointments"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/register"),children:"Register"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/login"),children:"Login"})})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-col-title",children:[a.jsx("span",{className:"footer-col-title-dot"}),"Contact Us"]}),a.jsxs("a",{className:"footer-whatsapp-chip",href:"https://wa.me/919665877727",target:"_blank",rel:"noreferrer",children:[a.jsx("span",{children:"💬"})," WhatsApp Chatbot"]}),a.jsxs("div",{className:"footer-contact-row",style:{marginBottom:"20px"},children:[a.jsx("span",{className:"footer-contact-icon",children:"💬"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"WhatsApp"}),a.jsx("div",{className:"footer-contact-num",children:"9665877727"})]})]}),a.jsxs("div",{className:"footer-col-title",style:{marginTop:"20px"},children:[a.jsx("span",{className:"footer-col-title-dot"}),"Follow Us"]}),a.jsxs("div",{className:"footer-social",children:[a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Facebook",children:"𝑓"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Twitter",children:"𝕏"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Instagram",children:"◎"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"YouTube",children:"▶"})]})]})]}),a.jsx("div",{className:"footer-divider"}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"footer-copy",children:["© ",o," Vasai-Virar City Municipal Corporation. All rights reserved."]}),a.jsxs("button",{className:"footer-back-top",onClick:s,children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M6 10V2M6 2L2 6M6 2L10 6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Top"]})]}),a.jsx("div",{className:"footer-gold-strip",children:"Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad"})]})]})}function On(){const n=vt(),o=Ma(),[s,l]=b.useState(!1),[d,p]=b.useState(!1),f=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})();b.useEffect(()=>{const g=()=>p(window.scrollY>20);return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const h=()=>{localStorage.removeItem("citizenUser"),n("/login"),l(!1)},x=g=>o.pathname===g;return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

        .cn-outer {
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .cn-outer.scrolled { padding: 6px 20px; }

        /* ── Main pill navbar ── */
        .cn-nav {
          background: linear-gradient(135deg, #187484 0%, #114e59 100%);
          padding: 0 16px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          border-radius: 100px;
          width: 97%;
          max-width: 1300px;
          border: 2px solid rgba(202,157,40,0.5);
          box-shadow: 0 10px 36px rgba(0,0,0,0.3);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          overflow: visible;
        }
        .cn-outer.scrolled .cn-nav {
          height: 70px;
          width: 93%;
        }

        /* ── Brand pill — large protruding left section ── */
        .cn-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          cursor: pointer;
          background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
          border: 2.5px solid rgba(202,157,40,0.75);
          border-radius: 100px;
          /* big protrusion top and bottom */
          padding: 10px 32px 10px 10px;
          margin-left: -3px;
          height: 110px;
          box-shadow:
            0 10px 30px rgba(0,0,0,0.4),
            0 0 0 5px rgba(202,157,40,0.1),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: all 0.3s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .cn-outer.scrolled .cn-brand {
          height: 86px;
          padding: 8px 26px 8px 8px;
          gap: 14px;
        }
        .cn-brand:hover {
          background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
          box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
          transform: translateY(-2px);
        }

        /* ── Logo — VERY BIG ── */
        .cn-logo-wrap {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          overflow: hidden;
          border: 3.5px solid #CA9D28;
          background: #fff;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow:
            0 0 0 5px rgba(202,157,40,0.2),
            0 0 0 8px rgba(202,157,40,0.07),
            0 6px 20px rgba(0,0,0,0.35);
        }
        .cn-outer.scrolled .cn-logo-wrap {
          width: 66px;
          height: 66px;
        }
        .cn-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Brand text ── */
        .cn-brand-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        /* "वसई-विरार शहर महानगरपालिका" — very large bold */
        .cn-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          white-space: nowrap;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

        /* "जन संवाद" — large bold golden */
        .cn-brand-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 20px;
          font-weight: 700;
          color: #F5C030;
          line-height: 1.2;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
        }
        .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

        /* ── Nav Links ── */
        .cn-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cn-link {
          padding: 9px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          color: rgba(245,231,194,0.88);
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
        .cn-link.active {
          background: #CA9D28;
          color: #114e59;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(202,157,40,0.35);
        }

        .cn-citizen-name {
          font-size: 14px;
          color: #F5E7C2;
          font-weight: 700;
          padding: 0 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }

        /* ── Buttons ── */
        .cn-btn-solid {
          padding: 9px 24px;
          border-radius: 50px;
          border: none;
          background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
          color: #1a3a44;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(202,157,40,0.3);
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .cn-btn-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(202,157,40,0.5);
          filter: brightness(1.1);
        }
        .cn-btn-outline {
          padding: 9px 22px;
          border-radius: 50px;
          border: 1.5px solid #CA9D28;
          background: transparent;
          color: #CA9D28;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

        .cn-btn-danger {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(248,113,113,0.5);
          background: rgba(248,113,113,0.1);
          color: #f87171;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

        /* ── Hamburger ── */
        .cn-ham {
          display: none;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid #CA9D28;
          color: #CA9D28;
          font-size: 20px;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 50px;
          margin-right: 4px;
          flex-shrink: 0;
        }

                /* ── Language toggle (mobile menu) ── */
        .cn-lang-mobile { display: flex; justify-content: center; padding: 2px 0 6px; }

        /* ── Mobile dropdown ── */
        .cn-mobile-menu {
          display: none;
          position: fixed;
          top: 112px;
          left: 16px;
          right: 16px;
          background: #187484;
          z-index: 999;
          padding: 14px;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          flex-direction: column;
          gap: 8px;
          border: 1.5px solid #CA9D28;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cn-mobile-menu.open { display: flex; }
        .cn-mobile-link {
          padding: 12px 20px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          color: #F5E7C2;
          background: rgba(255,255,255,0.05);
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
        .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

        /* ── Responsive ── */
        @media(max-width:960px){
          .cn-links { display: none; }
          .cn-ham { display: block; }
          .cn-nav { width: 96%; height: 80px; }
          .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
          .cn-logo-wrap { width: 72px; height: 72px; }
          .cn-brand-name { font-size: 19px; }
          .cn-brand-sub { font-size: 16px; }
        }
        @media(max-width:640px){
          .cn-outer { padding: 8px 10px; }
          .cn-nav { width: 100%; height: 72px; }
          .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
          .cn-logo-wrap { width: 62px; height: 62px; }
          .cn-brand-name { font-size: 16px; }
          .cn-brand-sub { font-size: 14px; }
        }
        @media(max-width:420px){
          .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
          .cn-logo-wrap { width: 54px; height: 54px; }
          .cn-brand-name { font-size: 14px; }
          .cn-brand-sub { font-size: 12px; }
        }
      `}),a.jsx("div",{className:`cn-outer${d?" scrolled":""}`,children:a.jsxs("nav",{className:"cn-nav",children:[a.jsxs("div",{className:"cn-brand",onClick:()=>n("/"),children:[a.jsx("div",{className:"cn-logo-wrap",children:a.jsx("img",{src:Bn,alt:"VVCMC"})}),a.jsxs("div",{className:"cn-brand-text",children:[a.jsx("span",{className:"cn-brand-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("span",{className:"cn-brand-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"cn-links",children:[a.jsx(Wl,{variant:"dark"}),a.jsx("button",{className:`cn-link${x("/")?" active":""}`,onClick:()=>n("/"),children:"Home"}),f&&a.jsx("button",{className:`cn-link${x("/my-appointments")?" active":""}`,onClick:()=>n("/my-appointments"),children:"My Appointments"}),f?a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"cn-citizen-name",children:["👋 ",f.fullName?.split(" ")[0]]}),a.jsx("button",{className:"cn-btn-solid",onClick:()=>n("/book-appointment"),children:"+ Book"}),a.jsx("button",{className:"cn-btn-danger",onClick:h,title:"Logout",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M18.36 6.64A9 9 0 1 1 5.64 6.64"}),a.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-btn-outline",onClick:()=>n("/login"),children:"Login"}),a.jsx("button",{className:"cn-btn-solid",onClick:()=>n("/register"),children:"Register"})]})]}),a.jsx("button",{className:"cn-ham",onClick:()=>l(g=>!g),children:s?"✕":"☰"})]})}),a.jsxs("div",{className:`cn-mobile-menu${s?" open":""}`,children:[a.jsx("div",{className:"cn-lang-mobile",children:a.jsx(Wl,{variant:"dark"})}),a.jsx("button",{className:`cn-mobile-link${x("/")?" active":""}`,onClick:()=>{n("/"),l(!1)},children:"🏠 Home"}),f&&a.jsx("button",{className:`cn-mobile-link${x("/my-appointments")?" active":""}`,onClick:()=>{n("/my-appointments"),l(!1)},children:"📅 My Appointments"}),f?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-mobile-link",style:{color:"#CA9D28"},onClick:()=>{n("/book-appointment"),l(!1)},children:"+ Book Appointment"}),a.jsx("button",{className:"cn-mobile-link",style:{color:"#f87171"},onClick:h,children:"🚪 Logout"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-mobile-link",onClick:()=>{n("/login"),l(!1)},children:"🔐 Login"}),a.jsx("button",{className:"cn-mobile-link",onClick:()=>{n("/register"),l(!1)},children:"📝 Register"})]})]})]})}const Zu=[{label:"Personal Details",icon:"👤"},{label:"Appointment",icon:"📅"},{label:"Details",icon:"ℹ️"},{label:"Photo",icon:"📷"},{label:"Review & Submit",icon:"📋"}];function ml(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—"}function Ku(n){if(!n)return[];const o=n.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);if(!o)return[];const s=parseInt(o[1]),l=parseInt(o[2]),d=parseInt(o[3]),p=parseInt(o[4]),f=[];let h=s*60+l;const x=d*60+p;for(;h+15<=x;){const g=String(Math.floor(h/60)).padStart(2,"0"),y=String(h%60).padStart(2,"0"),v=String(Math.floor((h+15)/60)).padStart(2,"0"),T=String((h+15)%60).padStart(2,"0");f.push(`${g}:${y} - ${v}:${T}`),h+=15}return f}function D8(){const n=vt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[s,l]=b.useState(0),[d,p]=b.useState(!1),[f,h]=b.useState([]),[x,g]=b.useState(null),[y,v]=b.useState(null),[T,R]=b.useState("forward"),[k,z]=b.useState([]),[M,E]=b.useState(!1),[S,A]=b.useState(!1),[P,X]=b.useState(!1),[D,W]=b.useState(!1),[V,de]=b.useState(null),[he,J]=b.useState(null),pe=(L,ne="success")=>{g({msg:L,type:ne}),setTimeout(()=>g(null),3500)},[$,me]=b.useState({username:o?.username||"",fullName:o?.fullName||"",mobileNumber:o?.mobileNumber||"",email:o?.email||"",address:"",pincode:"",preferredDate:"",slotTime:"",slotStart:"",slotEnd:"",microSlot:"",purpose:"",numberOfVisitors:"1",visitedBefore:!1,ward:"",visitorPhoto:null,photoPreview:null}),we=L=>ne=>me(ce=>({...ce,[L]:ne.target.value})),F=b.useRef("");b.useEffect(()=>{F.current=$.microSlot},[$.microSlot]),b.useEffect(()=>{if(!o?._id)return;(async()=>{try{X(!0);const ne=await Ot.get(`/citizen/by-id/${o._id}`);if(ne.data?.success&&ne.data?.citizen){const ce=ne.data.citizen;me(xe=>({...xe,username:ce.username||xe.username,fullName:ce.fullName||xe.fullName,mobileNumber:ce.mobileNumber||xe.mobileNumber,email:ce.email||xe.email,pincode:ce.pincode||xe.pincode,address:ce.address||xe.address,ward:ne.data.lastWard||xe.ward})),ne.data.lastPhoto&&J(ne.data.lastPhoto),de(ne.data.nextVisitNumber),W(!0)}}catch{}finally{X(!1)}})()},[]),b.useEffect(()=>{Ot.get("/availability/get").then(L=>{L.data&&h(Array.isArray(L.data)?L.data:L.data.data||[])}).catch(()=>{})},[]);const ie=L=>(L||"").replace(/\s*-\s*/g,"-").trim(),fe=L=>{if(L?.success===!1)return new Set;const ne=L?.data?.slots||L?.slots||[];return new Set(ne.filter(ce=>ce.booked).map(ce=>ie(ce.microSlot)))},K=async(L,ne,ce,xe)=>{try{const Ie=L.replace(/ /g,"%20"),bt=ne.replace(/ /g,"%20"),Ze=await Ot.get(`/citizen/micro-slots?date=${Ie}&slotTime=${bt}`),Rt=fe(Ze.data),St=ce.map(ze=>({...ze,booked:Rt.has(ie(ze.microSlot))}));return z(St),A(St.length>0&&St.every(ze=>ze.booked)),xe&&Rt.has(ie(xe))&&(pe("⚠️ तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा.","error"),me(ze=>({...ze,microSlot:""}))),Rt}catch{return new Set}};b.useEffect(()=>{if(s!==1||!$.preferredDate||!$.slotTime){(!$.preferredDate||!$.slotTime)&&(z([]),A(!1));return}let L=!1;const ne=$.preferredDate,ce=$.slotTime,xe=Ku(ce).map(bt=>({microSlot:bt,booked:!1}));z(xe),A(!1),E(!0),K(ne,ce,xe,F.current).finally(()=>{L||E(!1)});const Ie=setInterval(()=>{if(L)return;const bt=Ku(ce).map(Ze=>({microSlot:Ze,booked:!1}));K(ne,ce,bt,F.current)},3e4);return()=>{L=!0,clearInterval(Ie)}},[$.preferredDate,$.slotTime,s]);const B=b.useRef(null),j=b.useRef(null),C=b.useRef(null),[q,oe]=b.useState(!1),[I,ge]=b.useState(""),be=async()=>{ge("");try{const L=await navigator.mediaDevices.getUserMedia({video:!0});C.current=L,oe(!0),setTimeout(()=>{B.current&&(B.current.srcObject=L,B.current.play())},100)}catch{ge("Camera access denied. Browser permission द्या.")}},ke=()=>{const L=B.current,ne=j.current;!L||!ne||(ne.width=L.videoWidth,ne.height=L.videoHeight,ne.getContext("2d").drawImage(L,0,0),ne.toBlob(ce=>{const xe=new File([ce],`photo-${Date.now()}.jpg`,{type:"image/jpeg"}),Ie=URL.createObjectURL(ce);me(bt=>({...bt,visitorPhoto:xe,photoPreview:Ie})),Ce()},"image/jpeg"))},Ce=()=>{C.current&&(C.current.getTracks().forEach(L=>L.stop()),C.current=null),oe(!1)},Ke=new Date().toISOString().split("T")[0],et=f.filter(L=>L.date>=Ke),Lt=et.find(L=>L.date===$.preferredDate)?.timeSlots||[],se=s===0?!$.fullName||!$.mobileNumber||!$.address:s===1?!$.preferredDate||!$.slotTime||!$.microSlot:s===2?!$.purpose||!$.ward:s===3?!$.visitorPhoto:!1,je=()=>{R("forward"),l(L=>L+1)},G=()=>{R("back"),l(L=>L-1)},O=async()=>{if(!o){n("/login");return}try{p(!0);try{const nt=Ku($.slotTime).map(pt=>({microSlot:pt,booked:!1})),Ln=$.preferredDate.replace(/ /g,"%20"),gi=$.slotTime.replace(/ /g,"%20"),Na=await Ot.get(`/citizen/micro-slots?date=${Ln}&slotTime=${gi}`),Un=fe(Na.data),Fn=nt.map(pt=>({...pt,booked:Un.has(ie(pt.microSlot))}));if(z(Fn),Un.has(ie($.microSlot))){pe("❌ हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा.","error"),me(pt=>({...pt,microSlot:""})),p(!1);return}}catch{}const L=o?._id&&o._id!=="undefined"?o._id:"",ne=new FormData;ne.append("citizenId",L),ne.append("fullName",$.fullName),ne.append("mobileNumber",$.mobileNumber),ne.append("email",$.email||""),ne.append("address",$.address),ne.append("pincode",$.pincode||""),ne.append("preferredDate",$.preferredDate),ne.append("slotTime",$.slotTime),ne.append("microSlot",$.microSlot),ne.append("purpose",$.purpose),ne.append("numberOfVisitors",$.numberOfVisitors),ne.append("visitedBefore",String($.visitedBefore)),ne.append("ward",$.ward),ne.append("submittedById",L),ne.append("submittedByName",o.fullName||""),$.visitorPhoto&&ne.append("visitorPhoto",$.visitorPhoto);const ce=await Ot.post("/citizen/book-appointment",ne,{headers:{"Content-Type":void 0}});if(!ce.data.success){pe(ce.data.message||"Booking failed ❌","error");return}const xe=ce.data.data,Ie=xe.mobileNumber||$.mobileNumber,bt=xe.fullName||$.fullName,Ze=nt=>nt?new Date(nt+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—",Rt={pending:"Pending — Awaiting Mayor's Approval",approved:"Approved by Respected Mayor Ajiv Patil Sir",rejected:"Rejected by Admin",cancelled:"Cancelled"}[xe.status]||xe.status,St=`Dear ${bt}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been successfully booked. Appointment Status: ${Rt} Date: ${Ze(xe.preferredDate)} Time Slot: ${xe.microSlot} Token No: ${xe.tokenId} Please carry this Token No on your visit day. SAAVI INFINET`,ze=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379324&number=${Ie}&message=${encodeURIComponent(St)}`;fetch(ze,{method:"GET",mode:"no-cors"}).then(()=>console.log(`✅ SMS sent to ${Ie}`)).catch(nt=>console.error("SMS error:",nt)),v(xe)}catch(L){pe(L?.response?.data?.message||"Server Error ❌","error")}finally{p(!1)}};return y?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
          @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        `}),a.jsx("div",{className:"book-root",children:a.jsxs("div",{style:{background:"#fff",borderRadius:20,padding:"48px 40px",maxWidth:520,width:"100%",textAlign:"center",boxShadow:"0 8px 40px rgba(76,171,193,0.18)",border:"1.5px solid #b2e4ee",animation:"fadeUpIn .5s ease"},children:[a.jsx("div",{style:{width:90,height:90,borderRadius:"50%",background:"linear-gradient(135deg,#4CABC1,#66A962)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,margin:"0 auto 20px",animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both",boxShadow:"0 8px 24px rgba(76,171,193,0.35)"},children:"✅"}),a.jsx("h2",{style:{fontSize:26,fontWeight:800,color:"#187488",marginBottom:8,fontFamily:"'Plus Jakarta Sans',sans-serif",background:"linear-gradient(135deg,#4CABC1,#66A962)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Appointment Booked!"}),a.jsx("p",{style:{color:"#4a5568",marginBottom:24,fontSize:14,fontWeight:500},children:"तुमची appointment successfully book झाली आहे"}),a.jsx("div",{style:{background:"linear-gradient(135deg,#f0faf9,#f5fef5)",border:"1.5px solid #b2e4ee",borderRadius:12,padding:"20px 24px",marginBottom:24,textAlign:"left"},children:[["Token ID",y.tokenId],["Date",ml(y.preferredDate)],["Slot",y.slotTime],["Your Time",y.microSlot||"—"],["Status","⏳ Pending — Admin approval बाकी आहे"]].map(([L,ne])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid #d4eff5",fontSize:13},children:[a.jsx("span",{style:{color:"#5a7a88",fontWeight:600},children:L}),a.jsx("span",{style:{color:"#187488",fontWeight:700},children:ne})]},L))}),y.qrCode&&a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("p",{style:{fontSize:12,color:"#6b7280",marginBottom:8,fontWeight:600},children:"QR Code — भेटीच्या दिवशी दाखवा"}),a.jsx("img",{src:y.qrCode,alt:"QR",style:{width:130,height:130}})]}),a.jsx("button",{onClick:()=>n("/my-appointments"),style:{width:"100%",padding:"13px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#4CABC1,#49ACC3)",color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)",transition:"transform .15s"},onMouseEnter:L=>L.target.style.transform="translateY(-1px)",onMouseLeave:L=>L.target.style.transform="none",children:"📋 My Appointments बघा"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; }

        :root {
          --teal:    #3a9aaf;
          --teal2:   #2e8a9e;
          --teal-dk: #1d6e80;
          --gold:    #C9963A;
          --gold2:   #b8851f;
          --gold-lt: #e8c47a;
          --green:   #5a9656;
          --cream:   #F5E7C2;
          --cream2:  #fdf6e3;
          --text-hd: #2c4a2e;
          --text-bd: #3a3a2a;
          --text-sm: #5a5a3a;
          --border:  #d4b870;
          --bg-form: #fdf8ee;
        }

        .book-root {
          min-height: calc(100vh - 64px);
          background: #f0ece0;
          padding: 32px 24px;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }

        .book-wrapper {
          width: 90%;
          margin: 0 auto;
          background: var(--cream2);
          border-radius: 14px;
          box-shadow: 0 6px 40px rgba(0,0,0,0.15);
          border: 1.5px solid #c8b870;
          overflow: hidden;
        }

        .book-titlebar {
          padding: 26px 40px 0;
          border-bottom: 2px solid #c8b870;
          background: linear-gradient(135deg, #3a9aaf 0%, #2a7a8e 100%);
        }
        .book-titlebar h1 {
          font-size: 22px; font-weight: 800; color: #ffffff;
          margin: 0 0 20px; position: relative; display: inline-block;
          text-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .book-titlebar h1::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 48px; height: 3px; background: var(--gold); border-radius: 2px;
        }

        .stepper { display: flex; gap: 6px; padding-bottom: 0; }
        .step-tab {
          display: flex; align-items: center; gap: 8px; padding: 10px 20px;
          font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.65);
          border-bottom: 3px solid transparent; cursor: default; white-space: nowrap;
          transition: all .25s; margin-bottom: -2px; border-radius: 8px 8px 0 0;
          background: rgba(255,255,255,0.1);
        }
        .step-tab.done   { background: rgba(255,255,255,0.15); color: #c8e8d0; }
        .step-tab.active { background: var(--cream); color: var(--teal-dk); border-bottom-color: var(--gold); }
        .step-dot {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; flex-shrink: 0; transition: all .25s;
        }
        .step-dot.done    { background: var(--green); color: #fff; }
        .step-dot.active  { background: var(--gold); color: #fff; box-shadow: 0 2px 8px rgba(201,150,58,0.5); }
        .step-dot.pending { background: rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); }

        .book-body { padding: 32px 40px 0; background: var(--cream2); }
        .section-title { font-size: 17px; font-weight: 800; color: var(--text-hd); margin: 0 0 5px; }
        .section-sub   { font-size: 13px; color: var(--text-sm); font-weight: 500; margin: 0 0 24px; }

        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 13px; font-weight: 700; color: var(--text-hd); margin-bottom: 7px; }
        .field label .req { color: #c0392b; margin-left: 2px; }

        .f-input {
          width: 100%; padding: 11px 14px; font-size: 14px; font-weight: 500;
          border: 1.5px solid var(--border); border-radius: 8px; outline: none;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          box-sizing: border-box; transition: border-color .18s, box-shadow .18s;
          background: #fffef8; color: var(--text-bd);
        }
        .f-input:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(58,154,175,0.14); background: #fff; }
        .f-input::placeholder { color: #b0a070; font-weight: 400; }

        .f-grid-2     { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 20px; }
        .f-grid-2-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
        @media(max-width:640px){ .f-grid-2{ grid-template-columns:1fr; } .f-grid-2-col{ grid-template-columns:1fr; } }

        .date-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px,1fr)); gap: 10px; }
        .date-btn {
          padding: 11px 14px; border-radius: 8px; cursor: pointer; font-weight: 700;
          font-size: 13px; border: 1.5px solid var(--border); background: #fffef8;
          color: var(--text-bd); transition: all .18s; text-align: left;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .date-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); box-shadow: 0 3px 10px rgba(58,154,175,0.15); }
        .date-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 3px 10px rgba(58,154,175,0.2); font-weight: 800; }
        .date-btn .sub  { font-size: 11.5px; color: #8a7a50; font-weight: 500; margin-top: 3px; }

        .slot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 10px; }
        .slot-btn {
          padding: 10px 12px; border-radius: 8px; cursor: pointer; font-weight: 700;
          font-size: 12.5px; border: 1.5px solid var(--border); background: #fffef8;
          color: var(--text-bd); transition: all .18s;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .slot-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); }
        .slot-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 2px 8px rgba(58,154,175,0.2); font-weight: 800; }

        .info-box { background: #edf6f9; border: 1.5px solid #8acada; border-radius: 8px; padding: 11px 16px; font-size: 13px; font-weight: 600; color: #1a5f7a; margin-bottom: 16px; }
        .selected-box { background: #eaf7ee; border: 1.5px solid #7ec89a; border-radius: 8px; padding: 11px 16px; font-weight: 700; color: #1a5e2a; font-size: 13px; margin-bottom: 16px; }
        .empty-box { background: linear-gradient(135deg,#fffbeb,#fef3c7); border: 1.5px solid #e8c070; border-radius: 10px; padding: 28px; text-align: center; margin-bottom: 16px; }

        .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media(max-width:640px){ .review-grid{ grid-template-columns:1fr; } }
        .review-card { background: #fffef5; border: 1.5px solid #d4c070; border-radius: 10px; padding: 16px 18px; }
        .review-card-title { font-size: 11.5px; font-weight: 800; color: var(--teal-dk); text-transform: uppercase; letter-spacing: .8px; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
        .review-card-title::before { content:''; display:inline-block; width:14px; height:3px; background:var(--gold); border-radius:2px; }
        .review-row { display:flex; justify-content:space-between; padding:7px 0; border-bottom:1px solid #e8dfa0; font-size:13.5px; }
        .review-row:last-child { border-bottom:none; }
        .review-key { color:#6a5a30; font-weight:600; }
        .review-val { color:var(--text-hd); font-weight:700; text-align:right; max-width:55%; word-break:break-word; }

        .form-note { font-size:12.5px; color:#7a6a3a; font-weight:500; margin:12px 0 0; }

        .book-nav {
          display: flex; justify-content: flex-end; align-items: center; gap: 12px;
          padding: 24px 40px 32px; border-top: 1.5px solid #d4c070; margin-top: 28px; background: #fdf8ee;
        }
        .nav-cancel { padding: 11px 30px; border-radius: 8px; border: 1.5px solid #c0a850; background: #fffef0; color: var(--text-sm); font-weight: 700; font-size: 13.5px; cursor: pointer; font-family: 'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; transition: all .18s; }
        .nav-cancel:hover { background:#f5edd0; border-color:var(--gold); color:var(--gold2); }
        .nav-continue { padding: 11px 34px; border-radius: 8px; border: none; background: linear-gradient(135deg,#3a9aaf,#2e8a9e); color: #fff; font-weight: 800; font-size: 13.5px; cursor: pointer; font-family: 'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; display: flex; align-items: center; gap: 7px; transition: all .2s; box-shadow: 0 4px 14px rgba(58,154,175,0.4); letter-spacing: 0.2px; }
        .nav-continue:hover:not(:disabled) { background:linear-gradient(135deg,#2e8a9e,#1d6e80); transform:translateY(-1px); box-shadow:0 6px 18px rgba(58,154,175,0.45); }
        .nav-continue:disabled { background:#c8c0a0; cursor:not-allowed; box-shadow:none; color:#888070; }

        .step-progress-bar  { height:4px; background:#e8dfa0; }
        .step-progress-fill { height:100%; background:linear-gradient(90deg,var(--teal),var(--gold)); transition:width .4s cubic-bezier(.4,0,.2,1); }

        @keyframes slideInForward { from{opacity:0;transform:translateX(28px)} to{opacity:1;transform:none} }
        @keyframes slideInBack    { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:none} }
        .step-body-forward { animation: slideInForward .3s cubic-bezier(.4,0,.2,1) both; }
        .step-body-back    { animation: slideInBack    .3s cubic-bezier(.4,0,.2,1) both; }

        .toast { position:fixed; top:80px; right:20px; z-index:9999; padding:12px 24px; border-radius:10px; font-weight:700; font-size:14px; color:#fff; box-shadow:0 6px 24px rgba(0,0,0,0.18); animation:toastIn .3s; font-family:'Plus Jakarta Sans',sans-serif; }
        @keyframes toastIn { from{opacity:0;transform:translateY(-10px) scale(.95)} to{opacity:1;transform:none} }
        @keyframes spin     { to{transform:rotate(360deg)} }

        .photo-btn-primary { padding:11px 24px; border-radius:8px; background:linear-gradient(135deg,#3a9aaf,#2e8a9e); color:#fff; font-weight:700; font-size:13.5px; cursor:pointer; font-family:'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; border:none; box-shadow:0 3px 10px rgba(58,154,175,0.3); transition:all .18s; }
        .photo-btn-primary:hover { transform:translateY(-1px); box-shadow:0 5px 14px rgba(58,154,175,0.4); }
        .photo-btn-secondary { padding:11px 24px; border-radius:8px; border:1.5px solid var(--teal); background:#fffef8; color:var(--teal-dk); font-weight:700; font-size:13.5px; cursor:pointer; font-family:'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; transition:all .18s; }
        .photo-btn-secondary:hover { background:#dff2f6; }

        .radio-group { display:flex; gap:16px; margin-top:8px; }
        .radio-label { display:flex; align-items:center; gap:8px; cursor:pointer; font-size:14px; font-weight:700; color:var(--text-bd); padding:8px 20px; border-radius:8px; border:1.5px solid var(--border); background:#fffef8; transition:all .15s; }
        .radio-label.selected { border-color:var(--teal); background:#dff2f6; color:var(--teal-dk); }
        .radio-label input { accentColor:var(--teal); width:15px; height:15px; }

        .visit-badge { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#1d6e80,#3a9aaf); color:#fff; padding:10px 18px; border-radius:10px; font-size:13.5px; font-weight:700; margin-top:4px; box-shadow:0 3px 12px rgba(58,154,175,0.35); letter-spacing:0.2px; }
        .visit-badge .badge-number { background:var(--gold); color:#fff; font-size:15px; font-weight:800; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 6px rgba(201,150,58,0.5); flex-shrink:0; }

        .last-photo-hint { display:flex; align-items:center; gap:10px; background:#edf9f0; border:1.5px solid #7ec89a; border-radius:10px; padding:10px 14px; margin-bottom:14px; font-size:13px; font-weight:600; color:#1a5e2a; }
      `}),x&&a.jsx("div",{className:"toast",style:{background:x.type==="success"?"var(--teal)":"#dc2626"},children:x.msg}),a.jsx("div",{className:"book-root",children:a.jsxs("div",{className:"book-wrapper",children:[a.jsxs("div",{className:"book-titlebar",children:[a.jsx("h1",{children:"जनसंपर्क – Application Form"}),a.jsx("div",{className:"stepper",children:Zu.map((L,ne)=>{const ce=ne<s?"done":ne===s?"active":"pending";return a.jsxs("div",{className:`step-tab ${ce}`,children:[a.jsx("div",{className:`step-dot ${ce}`,children:ce==="done"?"✓":ne+1}),L.label]},ne)})})]}),a.jsx("div",{className:"step-progress-bar",children:a.jsx("div",{className:"step-progress-fill",style:{width:`${(s+1)/Zu.length*100}%`}})}),a.jsx("div",{className:"book-body",children:a.jsxs("div",{className:T==="forward"?"step-body-forward":"step-body-back",children:[s===0&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Personal Information"}),a.jsx("p",{className:"section-sub",children:"Please provide your basic details to proceed"}),P&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--teal)",fontSize:13,fontWeight:600,marginBottom:16},children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"माहिती लोड होत आहे..."]}),D&&V!==null&&a.jsxs("div",{className:"visit-badge",style:{marginBottom:20,display:"inline-flex"},children:[a.jsx("span",{className:"badge-number",children:V}),a.jsx("span",{children:V===1?"हे या नागरिकाचे पहिले भेट असेल 🎉":`हे या नागरिकाचे ${V}वे भेट असेल`})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"User Name"}),a.jsx("input",{className:"f-input",value:$.username,onChange:we("username"),placeholder:"Username"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Full Name ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",value:$.fullName,onChange:we("fullName"),placeholder:"आपले पूर्ण नाव"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Mobile Number ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",type:"tel",value:$.mobileNumber,onChange:we("mobileNumber"),maxLength:10,placeholder:"10 digit mobile"})]})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Email Address"}),a.jsx("input",{className:"f-input",type:"email",value:$.email,onChange:we("email"),placeholder:"Email (optional)"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Pincode"}),a.jsx("input",{className:"f-input",value:$.pincode,onChange:we("pincode"),maxLength:6,placeholder:"Pincode"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Address ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",value:$.address,onChange:we("address"),placeholder:"पूर्ण पत्ता"})]})]}),a.jsx("p",{className:"form-note",children:"* In order to process your appointment, all fields marked with an asterisk (*) are required."})]}),s===1&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Appointment Scheduling"}),a.jsx("p",{className:"section-sub",children:"Select your preferred date, time slot, and 15-minute appointment window"}),et.length===0?a.jsxs("div",{className:"empty-box",children:[a.jsx("div",{style:{fontSize:36,marginBottom:8},children:"📅"}),a.jsx("p",{style:{color:"#92400e",fontWeight:700,margin:"0 0 4px",fontSize:15},children:"सध्या कोणत्याही dates available नाहीत"}),a.jsx("p",{style:{color:"#a16207",fontSize:13.5,margin:0,fontWeight:500},children:"Admin कडून availability add होण्याची वाट पाहा"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Available Dates ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"date-grid",children:et.map((L,ne)=>a.jsxs("button",{type:"button",className:`date-btn${$.preferredDate===L.date?" sel":""}`,onClick:()=>me(ce=>({...ce,preferredDate:L.date,slotTime:"",slotStart:"",slotEnd:"",microSlot:""})),children:["📅 ",ml(L.date),a.jsxs("div",{className:"sub",children:[L.timeSlots?.length," slot",L.timeSlots?.length!==1?"s":""," available"]})]},ne))})]}),$.preferredDate&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Select Time Slot ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"slot-grid",children:Lt.map((L,ne)=>{const ce=`${L.start} - ${L.end}`;return a.jsxs("button",{type:"button",className:`slot-btn${$.slotTime===ce?" sel":""}`,onClick:()=>me(xe=>({...xe,slotTime:ce,slotStart:L.start,slotEnd:L.end,microSlot:""})),children:["⏰ ",ce]},ne)})})]}),$.preferredDate&&$.slotTime&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["15-Minute Appointment Slot निवडा ",a.jsx("span",{className:"req",children:"*"})]}),M?a.jsxs("div",{style:{color:"var(--teal)",fontSize:13,fontWeight:600,padding:"12px 0",display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"Slots loading..."]}):S?a.jsx("div",{style:{background:"#fee2e2",border:"1.5px solid #f87171",borderRadius:8,padding:"12px 16px",color:"#dc2626",fontWeight:700,fontSize:13},children:"❌ या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा."}):a.jsxs(a.Fragment,{children:[a.jsxs("select",{className:"f-input",style:{cursor:"pointer"},value:$.microSlot,onChange:L=>{const ne=L.target.value;if(k.find(xe=>xe.microSlot===ne)?.booked){pe("❌ हा slot आधीच book झाला आहे. कृपया दुसरा निवडा.","error");return}me(xe=>({...xe,microSlot:ne}))},children:[a.jsx("option",{value:"",children:"-- 15-minute slot निवडा --"}),k.map(L=>a.jsxs("option",{value:L.microSlot,disabled:L.booked,children:[L.booked?"🔴":"🟢"," ",L.microSlot,L.booked?" (Booked)":""]},L.microSlot))]}),k.length>0&&a.jsxs("p",{style:{fontSize:12,color:"var(--text-sm)",marginTop:8,fontWeight:500},children:["🟢 Available  |  🔴 Booked  | ",a.jsx("strong",{children:k.filter(L=>!L.booked).length})," of ",a.jsx("strong",{children:k.length})," slots available"]}),$.microSlot&&a.jsxs("div",{className:"selected-box",style:{marginTop:10,marginBottom:0},children:["✅ तुमचा appointment time: ",a.jsx("strong",{children:$.microSlot})]})]})]}),$.preferredDate&&$.slotTime&&$.microSlot&&a.jsxs("div",{className:"selected-box",children:["📅 ",ml($.preferredDate),"  |  ⏰ ",$.slotTime,"  |  🕐 ",$.microSlot]})]}),a.jsxs("div",{className:"info-box",children:["ℹ️ ",a.jsx("strong",{children:"Date निवडण्यासाठी:"})," वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा"]})]}),s===2&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Visit Information"}),a.jsx("p",{className:"section-sub",children:"Provide details about your visit to the Mayor"}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Reason for Visit ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("textarea",{className:"f-input",rows:4,value:$.purpose,onChange:we("purpose"),placeholder:"Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा",style:{resize:"vertical"}})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Number of Visitors ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",type:"number",min:"1",max:"10",value:$.numberOfVisitors,onChange:we("numberOfVisitors")})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Ward ",a.jsx("span",{className:"req",children:"*"})]}),a.jsxs("select",{className:"f-input",value:$.ward,onChange:we("ward"),style:{cursor:"pointer"},children:[a.jsx("option",{value:"",children:"Select Ward"}),["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(L=>a.jsx("option",{children:L},L))]}),$.ward&&D&&a.jsx("p",{style:{fontSize:12,color:"#16a34a",fontWeight:600,marginTop:4},children:"✅ मागील भेटीवरून auto-filled"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Have you visited before? ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"radio-group",children:["No","Yes"].map(L=>a.jsxs("label",{className:`radio-label${$.visitedBefore===(L==="Yes")?" selected":""}`,children:[a.jsx("input",{type:"radio",name:"vb",value:L,checked:$.visitedBefore===(L==="Yes"),onChange:()=>me(ne=>({...ne,visitedBefore:L==="Yes"})),style:{accentColor:"var(--teal)",width:15,height:15}}),L]},L))})]})]})]}),s===3&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Visitor Photo"}),a.jsx("p",{className:"section-sub",children:"Please upload or capture a clear photo for identification at the Mayor's office"}),he&&!$.photoPreview&&a.jsxs("div",{className:"last-photo-hint",children:[a.jsx("img",{src:`${he}`,alt:"last visit",style:{width:48,height:48,borderRadius:"50%",objectFit:"cover",border:"2px solid #7ec89a",flexShrink:0},onError:L=>{L.target.style.display="none"}}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontWeight:700,fontSize:13},children:"मागील भेटीचा फोटो उपलब्ध आहे"}),a.jsx("button",{type:"button",style:{marginTop:4,fontSize:12,color:"var(--teal)",fontWeight:700,background:"none",border:"none",cursor:"pointer",padding:0,textDecoration:"underline"},onClick:()=>{me(L=>({...L,photoPreview:he,visitorPhoto:he}))},children:"हाच फोटो वापरा ↗"})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,marginBottom:20},children:[a.jsxs("label",{className:"photo-btn-primary",children:["📁 Upload Photo",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:L=>{const ne=L.target.files[0];ne&&me(ce=>({...ce,visitorPhoto:ne,photoPreview:URL.createObjectURL(ne)}))}})]}),a.jsx("button",{type:"button",onClick:be,className:"photo-btn-secondary",children:"📷 Use Webcam"})]}),q?a.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",border:"2px solid var(--border)",marginBottom:16},children:[a.jsx("button",{type:"button",onClick:Ce,style:{position:"absolute",top:10,right:10,zIndex:10,width:30,height:30,borderRadius:"50%",background:"#ef4444",color:"#fff",border:"none",cursor:"pointer",fontWeight:800},children:"✕"}),a.jsx("video",{ref:B,autoPlay:!0,playsInline:!0,style:{width:"100%",maxHeight:340,objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:j,style:{display:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:16,background:"linear-gradient(transparent,rgba(0,0,0,0.55))",display:"flex",justifyContent:"center"},children:a.jsx("button",{type:"button",onClick:ke,style:{padding:"11px 30px",borderRadius:9,border:"none",background:"linear-gradient(135deg,var(--teal),var(--green))",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)"},children:"📸 Capture Photo"})})]}):a.jsx("div",{style:{border:"2.5px dashed #b2d8e4",borderRadius:14,padding:36,textAlign:"center",background:"linear-gradient(135deg,#f7fcfe,#f5fef5)",marginBottom:16,transition:"all .2s"},children:$.photoPreview?a.jsxs(a.Fragment,{children:[a.jsx("img",{src:$.photoPreview,alt:"preview",style:{width:110,height:110,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginBottom:14,boxShadow:"0 4px 20px rgba(76,171,193,0.3)"}}),a.jsx("p",{style:{color:"var(--green)",fontWeight:700,fontSize:14,margin:"0 0 4px"},children:"✅ Photo selected"}),a.jsx("p",{style:{color:"#6a9aaa",fontSize:12.5,margin:0,fontWeight:500},children:'Click "Upload Photo" to change'})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{fontSize:44,marginBottom:12,color:"#b2d8e4"},children:"📷"}),a.jsx("p",{style:{color:"#6a9aaa",fontSize:14,margin:0,fontWeight:600},children:"Upload किंवा camera वापरून photo द्या"})]})}),I&&a.jsx("p",{style:{color:"#ef4444",fontSize:13,marginTop:4,fontWeight:600},children:I})]}),s===4&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Review & Submit"}),a.jsx("p",{className:"section-sub",children:"सर्व माहिती verify करा आणि submit करा"}),a.jsxs("div",{className:"review-grid",children:[[{title:"Personal Info",rows:[["Name",$.fullName],["Mobile",$.mobileNumber],["Email",$.email||"—"],["Address",$.address],["Pincode",$.pincode||"—"]]},{title:"Appointment",rows:[["Date",ml($.preferredDate)],["Slot",$.slotTime],["My Time",$.microSlot]]},{title:"Visit Details",rows:[["Purpose",$.purpose],["Visitors",$.numberOfVisitors],["Visited Before",$.visitedBefore?"Yes":"No"],["Ward",$.ward],...V!==null?[["Visit Number",`#${V}`]]:[]]}].map((L,ne)=>a.jsxs("div",{className:"review-card",style:{animationDelay:`${ne*80}ms`},children:[a.jsx("div",{className:"review-card-title",children:L.title}),L.rows.map(([ce,xe])=>a.jsxs("div",{className:"review-row",children:[a.jsx("span",{className:"review-key",children:ce}),a.jsx("span",{className:"review-val",children:xe})]},ce))]},ne)),$.photoPreview&&a.jsxs("div",{className:"review-card",style:{textAlign:"center"},children:[a.jsx("div",{className:"review-card-title",children:"Visitor Photo"}),a.jsx("img",{src:$.photoPreview,alt:"v",style:{width:88,height:88,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginTop:8,boxShadow:"0 4px 16px rgba(76,171,193,0.25)"}})]})]}),a.jsx("div",{style:{background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",borderRadius:10,padding:"13px 18px",margin:"16px 0 0",fontSize:13.5,color:"#92400e",fontWeight:600},children:"⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."})]})]},s)}),a.jsxs("div",{className:"book-nav",children:[a.jsx("button",{className:"nav-cancel",onClick:()=>s>0?G():n(-1),children:s>0?"← Back":"CANCEL"}),s<Zu.length-1?a.jsx("button",{className:"nav-continue",disabled:se,onClick:je,children:"CONTINUE →"}):a.jsx("button",{className:"nav-continue",disabled:d,onClick:O,children:d?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Submitting..."]}):"✔ Submit Appointment"})]})]})})]})}function R8(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function M8(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function O8(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}const Ex={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",label:"⏳ Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",label:"✅ Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",label:"❌ Rejected"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",label:"🕰️ Expired"}};function Dx({name:n,photo:o,size:s=40}){const[l,d]=b.useState(!1),p=n?n.split(" ").map(g=>g[0]).join("").toUpperCase().slice(0,2):"?",f=["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"],h=n?n.charCodeAt(0)%f.length:0,x=o?o.startsWith("http")?o.replace("http://localhost:5000","https://jansamvad.saavi.co.in"):`https://jansamvad.saavi.co.in/${o}`:null;return x&&!l?a.jsx("img",{src:x,alt:n,onError:()=>d(!0),style:{width:s,height:s,borderRadius:"50%",objectFit:"cover",border:"2px solid #e2e8f0",flexShrink:0}}):a.jsx("div",{style:{width:s,height:s,borderRadius:"50%",background:f[h],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:s*.35,fontWeight:700,fontFamily:"'DM Sans',sans-serif",flexShrink:0,border:"2px solid rgba(255,255,255,0.3)"},children:p})}function _8({appt:n,onView:o}){const[s,l]=b.useState(!1),d=b.useRef();return b.useEffect(()=>{const p=f=>{d.current&&!d.current.contains(f.target)&&l(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]),a.jsxs("div",{ref:d,style:{position:"relative",display:"flex",justifyContent:"center"},children:[a.jsx("button",{onClick:p=>{p.stopPropagation(),l(f=>!f)},style:{background:"none",border:"1px solid #e2e8f0",cursor:"pointer",padding:"4px 8px",borderRadius:6,color:"#6b7280",fontSize:18,lineHeight:1,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:p=>{p.target.style.borderColor="#16a34a",p.target.style.color="#16a34a"},onMouseLeave:p=>{p.target.style.borderColor="#e2e8f0",p.target.style.color="#6b7280"},title:"Actions",children:"⋮"}),s&&a.jsx("div",{style:{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:100,minWidth:150,overflow:"hidden"},children:a.jsx("button",{onClick:p=>{p.stopPropagation(),o(n),l(!1)},style:{display:"block",width:"100%",padding:"10px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:13,color:"#374151",fontFamily:"'DM Sans',sans-serif",fontWeight:500},onMouseEnter:p=>p.target.style.background="#f9fafb",onMouseLeave:p=>p.target.style.background="none",children:"👁 View Details"})})]})}const B8=[10,25,50],Rx="160px 1fr 130px 200px 150px 60px";function L8(){const n=vt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[s,l]=b.useState([]),[d,p]=b.useState(!0),[f,h]=b.useState(null),[x,g]=b.useState("all"),[y,v]=b.useState([]),[T,R]=b.useState(!1),[k,z]=b.useState(""),[M,E]=b.useState(1),[S,A]=b.useState(10);b.useEffect(()=>{if(!o){n("/login");return}P()},[]);const P=async()=>{try{p(!0);const J=await Ot.get("/citizen/my-appointments",{params:{citizenId:o._id,mobileNumber:o.mobileNumber}});J.data.success&&l(J.data.appointments||[])}catch{}finally{p(!1)}},X=s.filter(J=>x==="all"||J.status===x).filter(J=>{if(!k)return!0;const pe=k.toLowerCase();return J.tokenId?.toLowerCase().includes(pe)||J.purpose?.toLowerCase().includes(pe)||J.fullName?.toLowerCase().includes(pe)}),D=Math.max(1,Math.ceil(X.length/S)),W=X.slice((M-1)*S,M*S),V=J=>Ex[J?.toLowerCase()]||Ex.pending,de=()=>D<=5?Array.from({length:D},(J,pe)=>pe+1):M<=3?[1,2,3,"...",D]:M>=D-2?[1,"...",D-2,D-1,D]:[1,"...",M-1,M,M+1,"...",D],he=()=>h(null);return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&family=Mukta:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

        .ma-root {
          min-height: calc(100vh - 64px);
          background: #f0ece0;
          padding: 32px 24px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
        }

        /* ── inner 90% centered ── */
        .ma-inner {
          width: 95%;
          max-width: 95%;
          margin: 0 auto;
        }

        /* ── Header ── */
        .ma-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 14px;
        }
        .ma-title {
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #2c4a2e;
          letter-spacing: 0px;
          line-height: 1.3;
        }
        .ma-sub {
          font-size: 14px;
          color: #5a5a3a;
          margin-top: 5px;
          font-weight: 500;
        }
        .ma-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .ma-icon-btn {
          width: 42px; height: 42px;
          border-radius: 10px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
          transition: all .15s;
          color: #3a3a2a;
        }
        .ma-icon-btn:hover { border-color: #3a9aaf; background: #edf9fc; color: #1d6e80; }
        .ma-book-btn {
          padding: 11px 22px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #3a9aaf, #2e8a9e);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          display: flex; align-items: center; gap: 7px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          transition: all .2s;
          white-space: nowrap;
          box-shadow: 0 3px 12px rgba(58,154,175,0.35);
        }
        .ma-book-btn:hover { background: linear-gradient(135deg, #2e8a9e, #1d6e80); transform: translateY(-1px); box-shadow: 0 5px 16px rgba(58,154,175,0.45); }

        /* ── Search ── */
        .search-wrap { position: relative; }
        .search-input {
          height: 42px;
          padding: 0 16px 0 40px;
          border: 1.5px solid #d4b870;
          border-radius: 10px;
          font-size: 13px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          background: #fffef8;
          outline: none;
          width: 240px;
          transition: border-color .2s, box-shadow .2s;
          color: #3a3a2a;
        }
        .search-input:focus { border-color: #3a9aaf; box-shadow: 0 0 0 3px rgba(58,154,175,0.12); }
        .search-icon {
          position: absolute; left: 12px; top: 50%;
          transform: translateY(-50%);
          color: #a09060; font-size: 15px; pointer-events: none;
        }

        /* ── Filter row ── */
        .filter-search-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .filter-tabs { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .filter-label { font-size: 12px; font-weight: 700; color: #6a5a30; text-transform: uppercase; letter-spacing: .5px; }
        .ftab {
          padding: 7px 18px;
          border-radius: 20px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all .15s;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          color: #5a5a3a;
        }
        .ftab:hover { border-color: #3a9aaf; color: #1d6e80; background: #edf9fc; }
        .ftab.active { background: linear-gradient(135deg, #3a9aaf, #2e8a9e); border-color: #3a9aaf; color: #fff; }

        /* ── Table card ── */
        .table-card {
          background: #fffef8;
          border-radius: 14px;
          border: 1.5px solid #d4b870;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          width: 100%;
        }

        /* ── FIX: Horizontal scroll wrapper for small screens ── */
        .table-scroll-wrapper {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .table-scroll-inner {
          min-width: 780px;
        }

        /* ── Table header ── */
        .tbl-head {
          display: grid;
          grid-template-columns: ${Rx};
          align-items: center;
          padding: 0 24px;
          background: linear-gradient(135deg, #3a9aaf, #2a7a8e);
          min-height: 52px;
          width: 100%;
        }
        .tbl-head-cell {
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: .8px;
          display: flex;
          align-items: center;
          gap: 5px;
          user-select: none;
        }
        .sort-icon { font-size: 11px; opacity: .7; cursor: pointer; }

        /* ── Table rows — same grid ── */
        .tbl-row {
          display: grid;
          grid-template-columns: ${Rx};
          align-items: center;
          padding: 0 24px;
          min-height: 72px;
          border-bottom: 1px solid #e8dfa0;
          cursor: pointer;
          transition: background .12s;
          width: 100%;
        }
        .tbl-row:last-child { border-bottom: none; }
        .tbl-row:hover { background: #fdf8ee; }
        .tbl-row.row-checked { background: #edf9fc; }

        /* ── Cells ── */
        .cell-token {
          font-size: 13px;
          font-weight: 700;
          color: #2c4a2e;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          letter-spacing: -0.2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cell-purpose-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-right: 16px;
          overflow: hidden;
          min-width: 0;
        }
        .cell-purpose-text { overflow: hidden; min-width: 0; }
        .cell-purpose-text .purpose-title {
          font-size: 15px;
          font-weight: 700;
          color: #2c3e28;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.3;
        }
        .cell-purpose-text .purpose-sub {
          font-size: 12px;
          color: #8a7a50;
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cell-date {
          font-size: 14px;
          font-weight: 600;
          color: #3a3a2a;
        }
        .cell-slot {
          font-size: 13px;
          color: #3a3a2a;
          font-weight: 500;
        }
        .status-badge {
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          border: 1.5px solid;
        }

        /* ── Footer ── */
        .tbl-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          border-top: 1px solid #e8dfa0;
          flex-wrap: wrap;
          gap: 10px;
          background: #fffef8;
          border-radius: 0 0 14px 14px;
          width: 100%;
        }
        .footer-left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #6a5a30;
          font-weight: 500;
        }
        .page-size-select {
          height: 32px;
          padding: 0 8px;
          border: 1.5px solid #d4b870;
          border-radius: 8px;
          font-size: 13px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          background: #fffef8;
          cursor: pointer;
          outline: none;
          color: #3a3a2a;
          font-weight: 600;
        }
        .pagination { display: flex; align-items: center; gap: 6px; }
        .pg-btn {
          width: 34px; height: 34px;
          border-radius: 8px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          color: #3a3a2a;
          transition: all .15s;
          display: flex; align-items: center; justify-content: center;
        }
        .pg-btn:hover:not(:disabled):not(.pg-ellipsis) { border-color: #3a9aaf; color: #1d6e80; background: #edf9fc; }
        .pg-btn.active { background: linear-gradient(135deg, #3a9aaf, #2e8a9e); border-color: #3a9aaf; color: #fff; }
        .pg-btn:disabled { opacity: .4; cursor: not-allowed; }
        .pg-btn.pg-ellipsis { border-color: transparent; background: none; cursor: default; pointer-events: none; }
        .pg-arrow { font-size: 16px; }

        /* ── Empty ── */
        .empty-box { padding: 64px 32px; text-align: center; }

        /* ── FIX: Modal overlay — sits below navbar (64px) and scrolls within remaining viewport ── */
        .modal-overlay {
          position: fixed;
          top: 64px;        /* offset for navbar height */
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15,23,42,0.6);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          backdrop-filter: blur(4px);
          overflow-y: auto;  /* allow scroll if modal is taller than remaining space */
        }
        .modal-card {
          background: #fffef8;
          border-radius: 18px;
          width: 100%;
          max-width: 500px;
          max-height: calc(100vh - 96px); /* viewport minus navbar (64px) minus some padding (32px) */
          overflow-y: auto;
          box-shadow: 0 24px 64px rgba(0,0,0,0.25);
          border: 1.5px solid #d4b870;
          position: relative; /* ensure it stacks correctly above overlay */
        }
        .modal-header {
          background: linear-gradient(135deg, #3a9aaf 0%, #2a7a8e 60%, #C9963A 100%);
          padding: 22px 24px;
          color: #fff;
          border-radius: 18px 18px 0 0;
          display: flex; justify-content: space-between; align-items: center;
        }
        /* ── FIX: Close button — explicit type, pointer-events ensured ── */
        .modal-close {
          background: rgba(255,255,255,0.15);
          border: none;
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background .15s;
          flex-shrink: 0;
          pointer-events: all;
          line-height: 1;
          padding: 0;
        }
        .modal-close:hover { background: rgba(255,255,255,0.3); }
        .modal-body { padding: 24px; }
        .modal-row {
          display: flex; justify-content: space-between;
          padding: 10px 0; border-bottom: 1px solid #e8dfa0;
          font-size: 13px;
        }
        .modal-row:last-child { border-bottom: none; }
        .modal-key { color: #7a6a3a; font-weight: 600; }
        .modal-val { color: #2c3e28; font-weight: 700; text-align: right; max-width: 60%; word-break: break-word; }

        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }
        .tbl-row { animation: fadeIn .2s ease both; }
      `}),a.jsx("div",{className:"ma-root",children:a.jsxs("div",{className:"ma-inner",children:[a.jsxs("div",{className:"ma-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"ma-title",children:"My Appointments"}),a.jsxs("p",{className:"ma-sub",children:["Hello,",o?.fullName||`Citizen  ${o?.citizenId||""}`," 👋 — all your appointments are here."]})]}),a.jsxs("div",{className:"ma-actions",children:[a.jsx("button",{className:"ma-icon-btn",title:"Refresh",onClick:P,children:"↻"}),a.jsxs("button",{className:"ma-book-btn",onClick:()=>n("/book-appointment"),children:[a.jsx("span",{style:{fontSize:18,lineHeight:1},children:"+"})," New Appointment"]})]})]}),a.jsxs("div",{className:"filter-search-row",children:[a.jsxs("div",{className:"filter-tabs",children:[a.jsx("span",{className:"filter-label",children:"Status"}),[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"approved",label:"Approved"},{key:"rejected",label:"Rejected"},{key:"expired",label:"Expired"}].map(J=>a.jsxs("button",{className:`ftab${x===J.key?" active":""}`,onClick:()=>{g(J.key),v([]),R(!1),E(1)},children:[J.label," (",J.key==="all"?s.length:s.filter(pe=>pe.status===J.key).length,")"]},J.key))]}),a.jsxs("div",{className:"search-wrap",children:[a.jsx("span",{className:"search-icon",children:"🔍"}),a.jsx("input",{className:"search-input",type:"text",placeholder:"Search appointment",value:k,onChange:J=>{z(J.target.value),E(1)}})]})]}),a.jsxs("div",{className:"table-card",children:[a.jsx("div",{className:"table-scroll-wrapper",children:a.jsxs("div",{className:"table-scroll-inner",children:[a.jsxs("div",{className:"tbl-head",children:[a.jsxs("div",{className:"tbl-head-cell",children:["# TOKEN ID ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"PURPOSE"}),a.jsxs("div",{className:"tbl-head-cell",children:["DATE ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"SLOT"}),a.jsx("div",{className:"tbl-head-cell",children:"APPOINTMENT_TIME"}),a.jsxs("div",{className:"tbl-head-cell",children:["STATUS ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"ACTIONS"})]}),d?a.jsxs("div",{style:{textAlign:"center",padding:"56px 0"},children:[a.jsx("div",{style:{width:34,height:34,border:"3px solid #e2e8f0",borderTopColor:"#16a34a",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 14px"}}),a.jsx("p",{style:{color:"#94a3b8",fontSize:14},children:"Appointments लोड होत आहेत..."})]}):W.length===0?a.jsxs("div",{className:"empty-box",children:[a.jsx("div",{style:{fontSize:48,marginBottom:14},children:"📅"}),a.jsx("p",{style:{color:"#374151",fontWeight:700,fontSize:16,marginBottom:6},children:x==="all"&&!k?"कोणतेही appointments नाहीत":`No ${x!=="all"?x:""} appointments found`}),a.jsx("p",{style:{color:"#94a3b8",fontSize:14,marginBottom:20},children:x==="all"&&!k?"Book your first appointment to get started.":"Try a different filter or search term."}),x==="all"&&!k&&a.jsx("button",{className:"ma-book-btn",style:{margin:"0 auto",display:"inline-flex"},onClick:()=>n("/book-appointment"),children:"+ Book Appointment"})]}):W.map((J,pe)=>{const $=V(J.status),me=y.includes(pe),we=J.purpose?J.purpose.length>40?J.purpose.slice(0,40)+"…":J.purpose:"—";return a.jsxs("div",{className:`tbl-row${me?" row-checked":""}`,style:{animationDelay:`${pe*40}ms`},onClick:()=>h(J),children:[a.jsx("div",{className:"cell-token",children:J.tokenId||"—"}),a.jsxs("div",{className:"cell-purpose-wrap",children:[a.jsx(Dx,{name:J.fullName,photo:J.visitorPhoto,size:38}),a.jsxs("div",{className:"cell-purpose-text",children:[a.jsx("div",{className:"purpose-title",children:we}),a.jsx("div",{className:"purpose-sub",children:J.fullName||"नागरिक"})]})]}),a.jsx("div",{className:"cell-date",children:M8(J.preferredDate)}),a.jsx("div",{className:"cell-slot",children:J.slotTime||"—"}),a.jsx("div",{className:"cell-slot",children:J.microSlot||"—"}),a.jsx("div",{children:a.jsx("span",{className:"status-badge",style:{background:$.bg,color:$.color,borderColor:$.border},children:$.label})}),a.jsx("div",{onClick:F=>F.stopPropagation(),children:a.jsx(_8,{appt:J,onView:h})})]},pe)})]})}),!d&&X.length>0&&a.jsxs("div",{className:"tbl-footer",children:[a.jsxs("div",{className:"footer-left",children:[a.jsx("span",{children:"Show"}),a.jsx("select",{className:"page-size-select",value:S,onChange:J=>{A(Number(J.target.value)),E(1)},children:B8.map(J=>a.jsx("option",{value:J,children:J},J))}),a.jsxs("span",{children:["of ",a.jsx("strong",{children:X.length})," results"]}),y.length>0&&a.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:["· ",y.length," selected"]})]}),a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"pg-btn",onClick:()=>E(J=>Math.max(1,J-1)),disabled:M===1,children:a.jsx("span",{className:"pg-arrow",children:"‹"})}),de().map((J,pe)=>J==="..."?a.jsx("button",{className:"pg-btn pg-ellipsis",children:"…"},`ell-${pe}`):a.jsx("button",{className:`pg-btn${M===J?" active":""}`,onClick:()=>E(J),children:J},J)),a.jsx("button",{className:"pg-btn",onClick:()=>E(J=>Math.min(D,J+1)),disabled:M===D,children:a.jsx("span",{className:"pg-arrow",children:"›"})})]})]})]})]})}),f&&a.jsx("div",{className:"modal-overlay",onClick:he,children:a.jsxs("div",{className:"modal-card",onClick:J=>J.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:10,opacity:.6,textTransform:"uppercase",letterSpacing:1},children:"Appointment Details"}),a.jsx("h3",{style:{margin:"4px 0 0",fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"},children:f.tokenId})]}),a.jsx("button",{type:"button",className:"modal-close",onClick:he,children:"✕"})]}),a.jsxs("div",{className:"modal-body",children:[a.jsx("div",{style:{textAlign:"center",marginBottom:20},children:a.jsx(Dx,{name:f.fullName,photo:f.visitorPhoto,size:80})}),(()=>{const J=V(f.status);return a.jsx("div",{style:{textAlign:"center",marginBottom:16},children:a.jsx("span",{className:"status-badge",style:{background:J.bg,color:J.color,borderColor:J.border,fontSize:13,padding:"6px 20px"},children:J.label})})})(),[["Name",f.fullName],["Mobile",f.mobileNumber],["Email",f.email||"—"],["Address",f.address||"—"],["Date",R8(f.preferredDate)],["Slot",f.slotTime],["Purpose",f.purpose],["Visitors",f.numberOfVisitors],["Visited Before",f.visitedBefore?"Yes":"No"],["Ward",f.ward||"—"],["Booked On",O8(f.createdAt)]].map(([J,pe])=>pe?a.jsxs("div",{className:"modal-row",children:[a.jsx("span",{className:"modal-key",children:J}),a.jsx("span",{className:"modal-val",children:pe})]},J):null),f.adminNote&&a.jsxs("div",{style:{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:13,color:"#92400e"},children:[a.jsx("strong",{children:"Admin Note:"})," ",f.adminNote]}),f.replyDocument&&a.jsxs("div",{style:{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:13},children:[a.jsx("p",{style:{color:"#166534",fontWeight:700,margin:"0 0 6px"},children:"📎 Document from Admin"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("button",{onClick:()=>{if(f.replyDocument?.toLowerCase().includes(".pdf")||f.replyDocument?.toLowerCase().includes("inward_pdf")){const pe=`https://docs.google.com/gview?url=${encodeURIComponent(f.replyDocument)}&embedded=true`;window.open(pe,"_blank")}else window.open(f.replyDocument,"_blank")},style:{color:"#16a34a",fontWeight:600,fontSize:13,background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0},children:"📄 View Document"}),a.jsx("button",{onClick:async()=>{try{const pe=await(await fetch(f.replyDocument)).blob(),$=f.replyDocument?.toLowerCase().includes(".pdf")||f.replyDocument?.toLowerCase().includes("inward_pdf"),me=new Blob([pe],{type:$?"application/pdf":pe.type}),we=window.URL.createObjectURL(me),F=document.createElement("a");F.href=we,F.download=$?"document.pdf":"document",document.body.appendChild(F),F.click(),document.body.removeChild(F),window.URL.revokeObjectURL(we)}catch(J){console.error("Download failed",J)}},style:{color:"#64748b",background:"none",border:"none",cursor:"pointer",fontSize:16},title:"Download",children:"⬇"})]})]}),f.qrCode&&a.jsxs("div",{style:{textAlign:"center",marginTop:20,paddingTop:16,borderTop:"1px solid #f1f5f9"},children:[a.jsx("p",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"QR Code — भेटीच्या दिवशी दाखवा"}),a.jsx("img",{src:f.qrCode,alt:"QR",style:{width:130,height:130}})]})]})]})})]})}function U8(){const n=vt(),[o,s]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",address:"",pincode:"",password:"",confirmPassword:""}),[l,d]=b.useState(!1),[p,f]=b.useState(""),[h,x]=b.useState(!1),[g,y]=b.useState(!1),[v,T]=b.useState(!1),[R,k]=b.useState(!1),[z,M]=b.useState("form"),[E,S]=b.useState(["","","","","",""]),[A,P]=b.useState(""),[X,D]=b.useState(0),[W,V]=b.useState(!1),[de,he]=b.useState(!1),J=b.useRef([]),pe=K=>B=>s(j=>({...j,[K]:B.target.value}));b.useEffect(()=>{const K=setTimeout(()=>k(!0),60);return()=>clearTimeout(K)},[]),b.useEffect(()=>{if(X<=0){V(!0);return}const K=setTimeout(()=>D(B=>B-1),1e3);return()=>clearTimeout(K)},[X]);const $=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,me=async K=>{if(K&&K.preventDefault&&K.preventDefault(),f(""),!o.fullName||!o.mobileNumber||!o.password){f("All required fields must be filled ❌");return}if(!/^\d{10}$/.test(o.mobileNumber)){f("Mobile number must be 10 digits ❌");return}if(o.password.length<6){f("Password must be at least 6 characters ❌");return}if(o.password!==o.confirmPassword){f("Passwords do not match ❌");return}try{if(he(!0),(await Ot.post("/citizen/check-mobile",{mobileNo:o.mobileNumber})).data.success){f("हा mobile number already registered आहे ❌ Please Login करा."),he(!1);return}}catch(q){if(q?.response?.status!==404){f("Server Error. Please try again ❌"),he(!1);return}}const B=Math.floor(1e5+Math.random()*9e5).toString();P(B),D(60),V(!1),S(["","","","","",""]);const j=`Dear Citizen ${B} is OTP for VVCMC Jan Samvaad Portal login for citizen registration.VVCMC SAAVI INFINET`,C=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379312&number=${o.mobileNumber}&message=${encodeURIComponent(j)}`;fetch(C,{method:"GET",mode:"no-cors"}).catch(()=>{}),M("otp"),he(!1),setTimeout(()=>J.current[0]?.focus(),120)},we=async()=>{const K=E.join("");if(K.length<6){f("Enter 6 digit OTP ❌");return}if(X<=0){f("OTP expired! Please resend ❌");return}if(K!==A){f("Wrong OTP! Please try again ❌"),S(["","","","","",""]),setTimeout(()=>J.current[0]?.focus(),50);return}try{d(!0),f("");const B=await Ot.post("/citizen/register",{fullName:o.fullName,userName:o.userName,mobileNumber:o.mobileNumber,address:o.address,pincode:o.pincode,email:o.email,password:o.password});if(!B.data.success){f(B.data.message||"Registration failed ❌");return}x(!0),setTimeout(()=>n("/citizen-login"),2e3)}catch(B){f(B?.response?.data?.message||"Server Error ❌")}finally{d(!1)}},F=(K,B)=>{if(!/^[0-9]?$/.test(B))return;const j=[...E];j[K]=B,S(j),B&&K<5&&J.current[K+1]?.focus()},ie=(K,B)=>{B.key==="Backspace"&&!E[K]&&K>0&&J.current[K-1]?.focus()},fe=K=>{K.preventDefault();const B=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...E];B.split("").forEach((C,q)=>{j[q]=C}),S(j),J.current[Math.min(B.length,5)]?.focus()};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --teal:       #4CABC1;
          --teal-dark:  #49ACC3;
          --gold:       #CA9D28;
          --gold-light: #CE9A54;
          --cream:      #F5E7C2;
          --green:      #66A962;
          --deep:       #187480;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .rp-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          padding: 24px 0;
        }

        .rp-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .rp-root:hover .rp-bg { transform: scale(1.02); }

        .rp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(24,116,128,0.45) 0%,
            rgba(73,172,195,0.38) 30%,
            rgba(24,116,128,0.60) 60%,
            rgba(12,70,80,0.82) 100%
          );
        }

        .rp-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%, var(--gold-light) 22%,
            var(--teal) 45%, var(--teal-dark) 65%,
            var(--green) 85%, var(--cream) 100%
          );
          z-index: 20;
        }

        /* ── WRAPPER ── */
        .rp-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: stretch;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.52),
            0 0 0 1px rgba(202,157,40,0.20),
            inset 0 1px 0 rgba(245,231,194,0.07);
          transition: transform 0.85s cubic-bezier(0.22,0.9,0.36,1),
                      opacity   0.60s ease;
        }

        /* ── LEFT CARD ── */
        .rp-card {
          width: 500px;
          background: linear-gradient(
            160deg,
            rgba(12,68,80,0.80) 0%,
            rgba(24,116,128,0.62) 50%,
            rgba(12,68,80,0.85) 100%
          );
          backdrop-filter: blur(38px) saturate(2);
          -webkit-backdrop-filter: blur(38px) saturate(2);
          border: 1px solid rgba(76,171,193,0.20);
          border-right: 1px solid rgba(202,157,40,0.18);
          padding: 28px 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-y: auto;
          max-height: 96vh;
        }
        .rp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .rp-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
          flex-shrink: 0;
        }
        .rp-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .rp-logo-img {
          width: 50px; height: 50px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow: 0 0 0 3px rgba(202,157,40,0.15), 0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .rp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .rp-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px; font-weight: 700;
          color: var(--gold-light); line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .rp-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px; font-weight: 500;
          color: rgba(245,231,194,0.60); letter-spacing: 0.4px;
        }

        /* Page heading */
        .rp-page-title {
          font-size: 24px; font-weight: 800;
          color: var(--cream); margin-bottom: 2px;
          font-family: 'Outfit', sans-serif; letter-spacing: -0.5px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }
        .rp-page-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          color: rgba(245,231,194,0.52);
          margin-bottom: 16px;
        }

        /* ── ERROR / SUCCESS boxes ── */
        .rp-error {
          background: rgba(220,38,38,0.18);
          border: 1px solid rgba(220,38,38,0.38);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 12.5px;
          color: #fca5a5;
          margin-bottom: 14px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
        }
        .rp-success {
          background: rgba(102,169,98,0.18);
          border: 1px solid rgba(102,169,98,0.40);
          border-radius: 12px;
          padding: 20px;
          font-size: 14px;
          color: #86efac;
          font-weight: 600;
          text-align: center;
          margin-bottom: 16px;
          font-family: 'Outfit', sans-serif;
        }

        /* ── 2-column grid ── */
        .rp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 16px;
        }
        .rp-fld      { margin-bottom: 12px; }
        .rp-fld.full { grid-column: 1 / -1; }

        .rp-flbl {
          display: block; font-size: 11px; font-weight: 700;
          color: rgba(245,231,194,0.72); margin-bottom: 6px;
          font-family: 'Outfit', sans-serif; letter-spacing: 0.8px;
          text-transform: uppercase;
        }
        .rp-req { color: #fca5a5; margin-left: 2px; }

        .rp-fwrap { position: relative; }

        .rp-finput {
          width: 100%;
          padding: 10px 14px 10px 40px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 10px;
          font-size: 13px; color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          outline: none; transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .rp-finput:focus {
          background: rgba(24,116,128,0.62);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .rp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 12px; font-family: 'Tiro Devanagari Marathi', serif; }
        .rp-finput.no-icon { padding-left: 14px; }

        .rp-ficon {
          position: absolute; left: 12px; top: 50%;
          transform: translateY(-50%); font-size: 14px;
          pointer-events: none; opacity: 0.48;
        }
        .rp-pbtn {
          position: absolute; right: 11px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer; font-size: 14px;
          color: rgba(245,231,194,0.42); padding: 0;
          display: flex; align-items: center; transition: color .2s;
        }
        .rp-pbtn:hover { color: var(--cream); }

        .rp-input-hint {
          font-size: 10.5px;
          color: rgba(245,231,194,0.32);
          margin-top: 4px;
          font-family: 'Outfit', sans-serif;
        }

        /* ── BUTTONS ── */
        .rp-sbtn {
          width: 100%; padding: 13px; margin-top: 6px;
          background: linear-gradient(135deg, var(--green) 0%, #4e9148 100%);
          color: #fff; font-size: 13px; font-weight: 800; letter-spacing: 1.2px;
          border: none; border-radius: 12px; cursor: pointer; transition: all 0.22s;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(102,169,98,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
          font-family: 'Outfit', sans-serif; text-transform: uppercase;
        }
        .rp-sbtn::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .rp-sbtn::after {
          content: ''; position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg); transition: left 0.55s ease;
        }
        .rp-sbtn:hover::after { left: 140%; }
        .rp-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7a39 0%, var(--green) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }
        .rp-sbtn:active:not(:disabled) { transform: translateY(0); }
        .rp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .rp-sbtn.teal {
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          box-shadow: 0 4px 20px rgba(76,171,193,0.42);
        }
        .rp-sbtn.teal:hover:not(:disabled) {
          background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
          box-shadow: 0 10px 28px rgba(76,171,193,0.52);
        }

        /* ── OTP boxes ── */
        .otp-row {
          display: flex; gap: 8px;
          justify-content: center; margin-bottom: 16px;
        }
        .otp-box {
          width: 46px; height: 52px;
          border: 1px solid rgba(76,171,193,0.22);
          border-radius: 12px;
          font-size: 22px; font-weight: 800;
          text-align: center;
          color: var(--cream);
          font-family: 'Outfit', sans-serif;
          outline: none;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          transition: all .18s;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06);
        }
        .otp-box:focus {
          background: rgba(24,116,128,0.65);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.20);
          color: #fff;
        }
        .otp-box:not(:placeholder-shown) {
          background: rgba(24,116,128,0.55);
          border-color: var(--green);
          box-shadow: 0 0 0 2px rgba(102,169,98,0.28);
        }

        /* Timer */
        .otp-timer {
          text-align: center; font-size: 12px;
          color: rgba(245,231,194,0.60);
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .otp-timer strong { font-size: 13.5px; }
        .resend-btn {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px; font-weight: 700;
          cursor: pointer; transition: all .2s;
        }
        .resend-btn:disabled { color: rgba(245,231,194,0.22); cursor: not-allowed; }
        .resend-btn:not(:disabled) { color: var(--gold-light); }
        .resend-btn:not(:disabled):hover { color: var(--gold); text-decoration: underline; }

        /* Back btn */
        .otp-back {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 600;
          color: rgba(245,231,194,0.52);
          cursor: pointer;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 14px; padding: 0;
          transition: color .2s;
        }
        .otp-back:hover { color: var(--teal); }

        /* Footer */
        .rp-signin {
          margin-top: 14px; text-align: center; font-size: 13px;
          color: rgba(245,231,194,0.58); font-family: 'Outfit', sans-serif;
        }
        .rp-signin span.rp-link {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px; padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light); transition: all .2s; cursor: pointer;
        }
        .rp-signin span.rp-link:hover { color: var(--gold-light); border-color: var(--gold); }

        .rp-cfooter {
          margin-top: auto; padding-top: 14px; flex-shrink: 0;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center; justify-content: center; gap: 7px;
        }
        .rp-cfdot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green); box-shadow: 0 0 8px var(--green);
          animation: dotPulse 2.5s infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.7); }
        }
        .rp-cfooter span { font-size: 10.5px; color: rgba(245,231,194,0.28); letter-spacing: 0.3px; }

        /* ══════════════ MAYOR PANEL ══════════════ */
        .rp-mayor-panel {
          width: 300px;
          background: linear-gradient(155deg, var(--teal-dark) 0%, var(--deep) 38%, #0b5e6b 72%, #093e4a 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 26px;
          position: relative; overflow: hidden;
          transition: transform 0.80s cubic-bezier(0.22,0.9,0.36,1) 0.10s,
                      opacity   0.65s ease 0.10s;
        }

        .rp-mayor-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--cream), var(--gold-light), var(--gold));
          background-size: 250%;
          animation: shimmerBar 3.5s linear infinite;
        }
        @keyframes shimmerBar {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        .rp-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px; border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .rp-mp-icon {
          position: absolute; font-size: 30px; opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); transition: opacity .35s;
        }
        .rp-mayor-panel:hover .rp-mp-icon { opacity: 0.24; }
        .rp-mp-icon.tl { top: 26px;  left: 20px; }
        .rp-mp-icon.tr { top: 26px;  right: 20px; }
        .rp-mp-icon.bl { bottom: 48px; left: 20px; }
        .rp-mp-icon.br { bottom: 48px; right: 20px; }

        .rp-mayor-photo-wrap { position: relative; margin-bottom: 20px; z-index: 2; }
        .rp-mayor-ring {
          width: 152px; height: 152px; border-radius: 50%; padding: 5px;
          background: conic-gradient(var(--gold) 0deg, var(--gold-light) 90deg, var(--cream) 180deg, var(--gold-light) 260deg, var(--gold) 360deg);
          box-shadow: 0 8px 36px rgba(0,0,0,0.38), 0 0 0 3px rgba(202,157,40,0.18);
        }
        .rp-mayor-photo {
          width: 100%; height: 100%; border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92); display: block;
        }
        .rp-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center; font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28); border: 2px solid rgba(255,255,255,0.95);
        }

        .rp-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700; color: #fff; text-align: center;
          margin-bottom: 6px; text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .rp-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px; color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 18px; z-index: 2; position: relative;
        }

        /* Info card in mayor panel */
        .rp-mayor-info {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 14px 16px;
          width: 100%;
          z-index: 2; position: relative;
        }
        .rp-mayor-info-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 12.5px;
          color: rgba(245,231,194,0.88);
          font-family: 'Tiro Devanagari Marathi', serif;
          padding: 7px 0;
        }
        .rp-mayor-info-item:not(:last-child) {
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }
        .rp-mayor-info-icon { font-size: 17px; flex-shrink: 0; }

        .rp-mayor-bar-wrap {
          width: 110px; height: 5px; background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden; z-index: 2; position: relative;
          margin-bottom: 18px;
        }
        .rp-mayor-bar {
          width: 65%; height: 100%;
          background: linear-gradient(90deg, var(--green), #7dd87a);
          border-radius: 999px; box-shadow: 0 0 10px rgba(102,169,98,0.65);
          animation: barGlow 2.5s ease-in-out infinite;
        }
        @keyframes barGlow { 0%,100% { opacity:1; } 50% { opacity:0.60; } }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .28s ease both; }

        @media (max-width: 768px) {
          .rp-mayor-panel { display: none; }
          .rp-card { border-right: 1px solid rgba(76,171,193,0.20); border-radius: 24px; width: 92%; max-width: 500px; }
          .rp-wrapper { border-radius: 24px; }
          .rp-grid { grid-template-columns: 1fr; }
          .rp-fld.full { grid-column: 1; }
        }
      `}),a.jsxs("div",{className:"rp-root",children:[a.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${Oo})`}}),a.jsx("div",{className:"rp-overlay"}),a.jsx("div",{className:"rp-stripe"}),a.jsxs("div",{className:"rp-wrapper",style:{opacity:R?1:0,transform:R?"translateX(0)":"translateX(160px)"},children:[a.jsxs("div",{className:"rp-card",children:[a.jsxs("div",{className:"rp-logo-row",children:[a.jsx("img",{src:ko,alt:"VVCMC",className:"rp-logo-img",style:{objectPosition:"top center"}}),a.jsxs("div",{className:"rp-logo-texts",children:[a.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"rp-page-title",children:"Account तयार करा"}),a.jsx("p",{className:"rp-page-sub",children:"Mayor Appointment बुक करण्यासाठी register करा"}),h?a.jsxs("div",{className:"rp-success",children:["✅ Registration successful!",a.jsx("br",{}),a.jsx("span",{style:{fontSize:13,fontWeight:400,opacity:.8},children:"Login page वर redirect होत आहे..."})]}):z==="otp"?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{M("form"),S(["","","","","",""]),f("")},children:"← Go Back"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:["OTP sent to"," ",a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",o.mobileNumber.slice(-3)]})]}),p&&a.jsxs("div",{className:"rp-error",children:["⚠️ ",p]}),a.jsx("div",{className:"otp-row",onPaste:fe,children:E.map((K,B)=>a.jsx("input",{ref:j=>J.current[B]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>F(B,j.target.value),onKeyDown:j=>ie(B,j)},B))}),a.jsxs("div",{className:"otp-timer",children:[X>0?a.jsxs(a.Fragment,{children:["OTP expires in:"," ",a.jsx("strong",{style:{color:X<=15?"#ff6b6b":"#CE9A54"},children:$(X)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP expired!"}),a.jsxs("div",{style:{marginTop:6},children:["Did not receive OTP?"," ",a.jsx("button",{className:"resend-btn",onClick:me,disabled:!W,children:"Resend OTP"})]})]}),a.jsx("button",{className:"rp-sbtn teal",onClick:we,disabled:E.join("").length<6||l,children:l?"⏳ Registering...":"✅ Verify & Register"})]}):a.jsxs(a.Fragment,{children:[p&&a.jsxs("div",{className:"rp-error",children:["⚠️ ",p]}),a.jsxs("form",{onSubmit:me,children:[a.jsxs("div",{className:"rp-grid",children:[a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Full Name ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"👤"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"आपले पूर्ण नाव",value:o.fullName,onChange:pe("fullName"),autoFocus:!0})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"User Name"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🪪"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Username",value:o.userName,onChange:pe("userName")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Mobile Number ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📱"}),a.jsx("input",{className:"rp-finput",type:"tel",placeholder:"10 digit mobile",value:o.mobileNumber,onChange:pe("mobileNumber"),maxLength:10})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Email"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"✉️"}),a.jsx("input",{className:"rp-finput",type:"email",placeholder:"Email (optional)",value:o.email,onChange:pe("email")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Address"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🏠"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Address",value:o.address,onChange:pe("address")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Pincode"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📍"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Pincode",value:o.pincode,onChange:pe("pincode"),maxLength:6})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Password ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔒"}),a.jsx("input",{className:"rp-finput",type:g?"text":"password",placeholder:"Min. 6 characters",value:o.password,onChange:pe("password"),style:{paddingRight:38}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>y(!g),tabIndex:-1,children:g?"🙈":"👁️"})]}),a.jsx("div",{className:"rp-input-hint",children:"किमान 6 characters"})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Confirm Password ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔐"}),a.jsx("input",{className:"rp-finput",type:v?"text":"password",placeholder:"Password परत टाका",value:o.confirmPassword,onChange:pe("confirmPassword"),style:{paddingRight:38}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>T(!v),tabIndex:-1,children:v?"🙈":"👁️"})]})]})]}),a.jsx("button",{type:"submit",className:"rp-sbtn",disabled:de||!o.fullName||!o.mobileNumber||!o.password||!o.confirmPassword,children:de?"⏳ Sending OTP...":"📱 Send OTP & Register"})]}),a.jsxs("p",{className:"rp-signin",children:["Already have an account?",a.jsx("span",{className:"rp-link",onClick:()=>n("/login"),children:"Login"})]})]})]}),a.jsxs("div",{className:"rp-cfooter",children:[a.jsx("div",{className:"rp-cfdot"}),a.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"rp-mayor-panel",style:{opacity:R?1:0,transform:R?"translate(0,0)":"translate(80px,-60px)"},children:[a.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"rp-mp-icon tr",children:"🤝"}),a.jsx("span",{className:"rp-mp-icon bl",children:"🏢"}),a.jsx("span",{className:"rp-mp-icon br",children:"🏙️"}),a.jsxs("div",{className:"rp-mayor-photo-wrap",children:[a.jsx("div",{className:"rp-mayor-ring",children:a.jsx("img",{src:ko,alt:"Mayor",className:"rp-mayor-photo"})}),a.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-mayor-bar-wrap",children:a.jsx("div",{className:"rp-mayor-bar"})}),a.jsxs("div",{className:"rp-mayor-info",children:[a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"📅"}),a.jsx("span",{children:"Appointment सहज बुक करा"})]}),a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"🔔"}),a.jsx("span",{children:"SMS द्वारे notification मिळवा"})]}),a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"🛡️"}),a.jsx("span",{children:"Secure Government Portal"})]})]})]})]})]})]})}function Mx({children:n}){return localStorage.getItem("citizenUser")?n:a.jsx(Lp,{to:"/citizen-login",replace:!0})}function F8(){const{isLoggedIn:n}=Gl(s=>s.auth),o=localStorage.getItem("authUser");return n||o?a.jsx(Y4,{}):a.jsx(Lp,{to:"/login",replace:!0})}function W8(){const n=Ro();return b.useEffect(()=>{const o=localStorage.getItem("authUser");o&&n(Ol(JSON.parse(o)))},[n]),a.jsxs(a.Fragment,{children:[a.jsx(qS,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),a.jsxs(Gv,{children:[a.jsx(ot,{path:"/",element:a.jsxs(a.Fragment,{children:[a.jsx(On,{}),a.jsx(Ax,{}),a.jsx(Mn,{})]})}),a.jsx(ot,{path:"/home",element:a.jsxs(a.Fragment,{children:[a.jsx(On,{}),a.jsx(Ax,{}),a.jsx(Mn,{})]})}),a.jsx(ot,{path:"/login",element:a.jsxs(a.Fragment,{children:[a.jsx(On,{}),a.jsx(JS,{}),a.jsx(Mn,{})]})}),a.jsx(ot,{path:"/admin-login",element:a.jsxs(a.Fragment,{children:[a.jsx(On,{}),a.jsx(GS,{}),a.jsx(Mn,{})]})}),a.jsx(ot,{path:"/citizen-login",element:a.jsxs(a.Fragment,{children:[a.jsx(On,{}),a.jsx(XS,{}),a.jsx(Mn,{})]})}),a.jsx(ot,{path:"/citizen-registration",element:a.jsxs(a.Fragment,{children:[a.jsx(On,{}),a.jsx(U8,{}),a.jsx(Mn,{})]})}),a.jsx(ot,{path:"/register",element:a.jsx(QS,{})}),a.jsx(ot,{path:"/book-appointment",element:a.jsx(Mx,{children:a.jsxs(a.Fragment,{children:[a.jsx(On,{}),a.jsx(D8,{}),a.jsx(Mn,{})]})})}),a.jsx(ot,{path:"/my-appointments",element:a.jsx(Mx,{children:a.jsxs(a.Fragment,{children:[a.jsx(On,{}),a.jsx(L8,{}),a.jsx(Mn,{})]})})}),a.jsxs(ot,{element:a.jsx(F8,{}),children:[a.jsx(ot,{path:"/dashboard",element:a.jsx(h4,{})}),a.jsx(ot,{path:"/meetings",element:a.jsx(S8,{})}),a.jsx(ot,{path:"/meetingsubjects",element:a.jsx(Xu,{})}),a.jsx(ot,{path:"/proceedingsmeeting/:meetingId",element:a.jsx(Xu,{})}),a.jsx(ot,{path:"/proceedingsmeeting",element:a.jsx(Xu,{})}),a.jsx(ot,{path:"/allapplication",element:a.jsx(Q4,{})}),a.jsx(ot,{path:"/allapplicationcitizens",element:a.jsx(v8,{})}),a.jsx(ot,{path:"/availability",element:a.jsx(h8,{})}),a.jsx(ot,{path:"/Jansanwadappform",element:a.jsx(d1,{})}),a.jsx(ot,{path:"/users",element:a.jsx(o8,{})}),a.jsx(ot,{path:"/corporators",element:a.jsx(d8,{})})]}),a.jsx(ot,{path:"*",element:a.jsx(Lp,{to:"/",replace:!0})})]})]})}const H8=S5({reducer:{auth:L5}});U4();q2.createRoot(document.getElementById("root")).render(a.jsx(We.StrictMode,{children:a.jsx($j,{store:H8,children:a.jsx(bj,{children:a.jsx(W8,{})})})}));
