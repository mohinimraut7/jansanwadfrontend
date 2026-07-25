(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function l(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=l(u);fetch(u.href,f)}})();function Oh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gd={exports:{}},Hi={};var rm;function Ty(){if(rm)return Hi;rm=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(s,u,f){var p=null;if(f!==void 0&&(p=""+f),u.key!==void 0&&(p=""+u.key),"key"in u){f={};for(var x in u)x!=="key"&&(f[x]=u[x])}else f=u;return u=f.ref,{$$typeof:r,type:s,key:p,ref:u!==void 0?u:null,props:f}}return Hi.Fragment=o,Hi.jsx=l,Hi.jsxs=l,Hi}var im;function zy(){return im||(im=1,Gd.exports=Ty()),Gd.exports}var a=zy(),Xd={exports:{}},ze={};var om;function Ay(){if(om)return ze;om=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),M=Symbol.iterator;function A(j){return j===null||typeof j!="object"?null:(j=M&&j[M]||j["@@iterator"],typeof j=="function"?j:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,E={};function R(j,T,N){this.props=j,this.context=T,this.refs=E,this.updater=N||S}R.prototype.isReactComponent={},R.prototype.setState=function(j,T){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,T,"setState")},R.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function C(){}C.prototype=R.prototype;function B(j,T,N){this.props=j,this.context=T,this.refs=E,this.updater=N||S}var G=B.prototype=new C;G.constructor=B,z(G,R.prototype),G.isPureReactComponent=!0;var U=Array.isArray;function O(){}var $={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function ue(j,T,N){var Y=N.ref;return{$$typeof:r,type:j,key:T,ref:Y!==void 0?Y:null,props:N}}function ge(j,T){return ue(j.type,T,j.props)}function P(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function le(j){var T={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(N){return T[N]})}var H=/\/+/g;function me(j,T){return typeof j=="object"&&j!==null&&j.key!=null?le(""+j.key):T.toString(36)}function we(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(O,O):(j.status="pending",j.then(function(T){j.status==="pending"&&(j.status="fulfilled",j.value=T)},function(T){j.status==="pending"&&(j.status="rejected",j.reason=T)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function F(j,T,N,Y,D){var se=typeof j;(se==="undefined"||se==="boolean")&&(j=null);var fe=!1;if(j===null)fe=!0;else switch(se){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(j.$$typeof){case r:case o:fe=!0;break;case y:return fe=j._init,F(fe(j._payload),T,N,Y,D)}}if(fe)return D=D(j),fe=Y===""?"."+me(j,0):Y,U(D)?(N="",fe!=null&&(N=fe.replace(H,"$&/")+"/"),F(D,T,N,"",function(Qe){return Qe})):D!=null&&(P(D)&&(D=ge(D,N+(D.key==null||j&&j.key===D.key?"":(""+D.key).replace(H,"$&/")+"/")+fe)),T.push(D)),1;fe=0;var be=Y===""?".":Y+":";if(U(j))for(var Ne=0;Ne<j.length;Ne++)Y=j[Ne],se=be+me(Y,Ne),fe+=F(Y,T,N,se,D);else if(Ne=A(j),typeof Ne=="function")for(j=Ne.call(j),Ne=0;!(Y=j.next()).done;)Y=Y.value,se=be+me(Y,Ne++),fe+=F(Y,T,N,se,D);else if(se==="object"){if(typeof j.then=="function")return F(we(j),T,N,Y,D);throw T=String(j),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return fe}function ie(j,T,N){if(j==null)return j;var Y=[],D=0;return F(j,Y,"","",function(se){return T.call(N,se,D++)}),Y}function pe(j){if(j._status===-1){var T=j._result;T=T(),T.then(function(N){(j._status===0||j._status===-1)&&(j._status=1,j._result=N)},function(N){(j._status===0||j._status===-1)&&(j._status=2,j._result=N)}),j._status===-1&&(j._status=0,j._result=T)}if(j._status===1)return j._result.default;throw j._result}var K=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},L={map:ie,forEach:function(j,T,N){ie(j,function(){T.apply(this,arguments)},N)},count:function(j){var T=0;return ie(j,function(){T++}),T},toArray:function(j){return ie(j,function(T){return T})||[]},only:function(j){if(!P(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ze.Activity=v,ze.Children=L,ze.Component=R,ze.Fragment=l,ze.Profiler=u,ze.PureComponent=B,ze.StrictMode=s,ze.Suspense=h,ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ze.__COMPILER_RUNTIME={__proto__:null,c:function(j){return $.H.useMemoCache(j)}},ze.cache=function(j){return function(){return j.apply(null,arguments)}},ze.cacheSignal=function(){return null},ze.cloneElement=function(j,T,N){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Y=z({},j.props),D=j.key;if(T!=null)for(se in T.key!==void 0&&(D=""+T.key),T)!Q.call(T,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&T.ref===void 0||(Y[se]=T[se]);var se=arguments.length-2;if(se===1)Y.children=N;else if(1<se){for(var fe=Array(se),be=0;be<se;be++)fe[be]=arguments[be+2];Y.children=fe}return ue(j.type,D,Y)},ze.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},ze.createElement=function(j,T,N){var Y,D={},se=null;if(T!=null)for(Y in T.key!==void 0&&(se=""+T.key),T)Q.call(T,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(D[Y]=T[Y]);var fe=arguments.length-2;if(fe===1)D.children=N;else if(1<fe){for(var be=Array(fe),Ne=0;Ne<fe;Ne++)be[Ne]=arguments[Ne+2];D.children=be}if(j&&j.defaultProps)for(Y in fe=j.defaultProps,fe)D[Y]===void 0&&(D[Y]=fe[Y]);return ue(j,se,D)},ze.createRef=function(){return{current:null}},ze.forwardRef=function(j){return{$$typeof:x,render:j}},ze.isValidElement=P,ze.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:pe}},ze.memo=function(j,T){return{$$typeof:m,type:j,compare:T===void 0?null:T}},ze.startTransition=function(j){var T=$.T,N={};$.T=N;try{var Y=j(),D=$.S;D!==null&&D(N,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(O,K)}catch(se){K(se)}finally{T!==null&&N.types!==null&&(T.types=N.types),$.T=T}},ze.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ze.use=function(j){return $.H.use(j)},ze.useActionState=function(j,T,N){return $.H.useActionState(j,T,N)},ze.useCallback=function(j,T){return $.H.useCallback(j,T)},ze.useContext=function(j){return $.H.useContext(j)},ze.useDebugValue=function(){},ze.useDeferredValue=function(j,T){return $.H.useDeferredValue(j,T)},ze.useEffect=function(j,T){return $.H.useEffect(j,T)},ze.useEffectEvent=function(j){return $.H.useEffectEvent(j)},ze.useId=function(){return $.H.useId()},ze.useImperativeHandle=function(j,T,N){return $.H.useImperativeHandle(j,T,N)},ze.useInsertionEffect=function(j,T){return $.H.useInsertionEffect(j,T)},ze.useLayoutEffect=function(j,T){return $.H.useLayoutEffect(j,T)},ze.useMemo=function(j,T){return $.H.useMemo(j,T)},ze.useOptimistic=function(j,T){return $.H.useOptimistic(j,T)},ze.useReducer=function(j,T,N){return $.H.useReducer(j,T,N)},ze.useRef=function(j){return $.H.useRef(j)},ze.useState=function(j){return $.H.useState(j)},ze.useSyncExternalStore=function(j,T,N){return $.H.useSyncExternalStore(j,T,N)},ze.useTransition=function(){return $.H.useTransition()},ze.version="19.2.3",ze}var lm;function gs(){return lm||(lm=1,Xd.exports=Ay()),Xd.exports}var b=gs();const Le=Oh(b);var Qd={exports:{}},$i={},Jd={exports:{}},Zd={};var sm;function Ey(){return sm||(sm=1,(function(r){function o(F,ie){var pe=F.length;F.push(ie);e:for(;0<pe;){var K=pe-1>>>1,L=F[K];if(0<u(L,ie))F[K]=ie,F[pe]=L,pe=K;else break e}}function l(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var ie=F[0],pe=F.pop();if(pe!==ie){F[0]=pe;e:for(var K=0,L=F.length,j=L>>>1;K<j;){var T=2*(K+1)-1,N=F[T],Y=T+1,D=F[Y];if(0>u(N,pe))Y<L&&0>u(D,N)?(F[K]=D,F[Y]=pe,K=Y):(F[K]=N,F[T]=pe,K=T);else if(Y<L&&0>u(D,pe))F[K]=D,F[Y]=pe,K=Y;else break e}}return ie}function u(F,ie){var pe=F.sortIndex-ie.sortIndex;return pe!==0?pe:F.id-ie.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var p=Date,x=p.now();r.unstable_now=function(){return p.now()-x}}var h=[],m=[],y=1,v=null,M=3,A=!1,S=!1,z=!1,E=!1,R=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function G(F){for(var ie=l(m);ie!==null;){if(ie.callback===null)s(m);else if(ie.startTime<=F)s(m),ie.sortIndex=ie.expirationTime,o(h,ie);else break;ie=l(m)}}function U(F){if(z=!1,G(F),!S)if(l(h)!==null)S=!0,O||(O=!0,le());else{var ie=l(m);ie!==null&&we(U,ie.startTime-F)}}var O=!1,$=-1,Q=5,ue=-1;function ge(){return E?!0:!(r.unstable_now()-ue<Q)}function P(){if(E=!1,O){var F=r.unstable_now();ue=F;var ie=!0;try{e:{S=!1,z&&(z=!1,C($),$=-1),A=!0;var pe=M;try{t:{for(G(F),v=l(h);v!==null&&!(v.expirationTime>F&&ge());){var K=v.callback;if(typeof K=="function"){v.callback=null,M=v.priorityLevel;var L=K(v.expirationTime<=F);if(F=r.unstable_now(),typeof L=="function"){v.callback=L,G(F),ie=!0;break t}v===l(h)&&s(h),G(F)}else s(h);v=l(h)}if(v!==null)ie=!0;else{var j=l(m);j!==null&&we(U,j.startTime-F),ie=!1}}break e}finally{v=null,M=pe,A=!1}ie=void 0}}finally{ie?le():O=!1}}}var le;if(typeof B=="function")le=function(){B(P)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,me=H.port2;H.port1.onmessage=P,le=function(){me.postMessage(null)}}else le=function(){R(P,0)};function we(F,ie){$=R(function(){F(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_next=function(F){switch(M){case 1:case 2:case 3:var ie=3;break;default:ie=M}var pe=M;M=ie;try{return F()}finally{M=pe}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(F,ie){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var pe=M;M=F;try{return ie()}finally{M=pe}},r.unstable_scheduleCallback=function(F,ie,pe){var K=r.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?K+pe:K):pe=K,F){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=pe+L,F={id:y++,callback:ie,priorityLevel:F,startTime:pe,expirationTime:L,sortIndex:-1},pe>K?(F.sortIndex=pe,o(m,F),l(h)===null&&F===l(m)&&(z?(C($),$=-1):z=!0,we(U,pe-K))):(F.sortIndex=L,o(h,F),S||A||(S=!0,O||(O=!0,le()))),F},r.unstable_shouldYield=ge,r.unstable_wrapCallback=function(F){var ie=M;return function(){var pe=M;M=ie;try{return F.apply(this,arguments)}finally{M=pe}}}})(Zd)),Zd}var cm;function Ry(){return cm||(cm=1,Jd.exports=Ey()),Jd.exports}var Kd={exports:{}},Nt={};var dm;function Dy(){if(dm)return Nt;dm=1;var r=gs();function o(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,m,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:v==null?null:""+v,children:h,containerInfo:m,implementation:y}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nt.createPortal=function(h,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(o(299));return f(h,m,null,y)},Nt.flushSync=function(h){var m=p.T,y=s.p;try{if(p.T=null,s.p=2,h)return h()}finally{p.T=m,s.p=y,s.d.f()}},Nt.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(h,m))},Nt.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},Nt.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var y=m.as,v=x(y,m.crossOrigin),M=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:M,fetchPriority:A}):y==="script"&&s.d.X(h,{crossOrigin:v,integrity:M,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nt.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=x(m.as,m.crossOrigin);s.d.M(h,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(h)},Nt.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,v=x(y,m.crossOrigin);s.d.L(h,y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nt.preloadModule=function(h,m){if(typeof h=="string")if(m){var y=x(m.as,m.crossOrigin);s.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(h)},Nt.requestFormReset=function(h){s.d.r(h)},Nt.unstable_batchedUpdates=function(h,m){return h(m)},Nt.useFormState=function(h,m,y){return p.H.useFormState(h,m,y)},Nt.useFormStatus=function(){return p.H.useHostTransitionStatus()},Nt.version="19.2.3",Nt}var um;function _y(){if(um)return Kd.exports;um=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Kd.exports=Dy(),Kd.exports}var fm;function Oy(){if(fm)return $i;fm=1;var r=Ry(),o=gs(),l=_y();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(f(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var c=n.return;if(c===null)break;var d=c.alternate;if(d===null){if(i=c.return,i!==null){n=i;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===n)return h(c),e;if(d===i)return h(c),t;d=d.sibling}throw Error(s(188))}if(n.return!==i.return)n=c,i=d;else{for(var g=!1,w=c.child;w;){if(w===n){g=!0,n=c,i=d;break}if(w===i){g=!0,i=c,n=d;break}w=w.sibling}if(!g){for(w=d.child;w;){if(w===n){g=!0,n=d,i=c;break}if(w===i){g=!0,i=d,n=c;break}w=w.sibling}if(!g)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,M=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),B=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var H=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===H?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case R:return"Profiler";case E:return"StrictMode";case U:return"Suspense";case O:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case B:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var we=Array.isArray,F=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},K=[],L=-1;function j(e){return{current:e}}function T(e){0>L||(e.current=K[L],K[L]=null,L--)}function N(e,t){L++,K[L]=e.current,e.current=t}var Y=j(null),D=j(null),se=j(null),fe=j(null);function be(e,t){switch(N(se,t),N(D,e),N(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?T0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=T0(t),e=z0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(Y),N(Y,e)}function Ne(){T(Y),T(D),T(se)}function Qe(e){e.memoizedState!==null&&N(fe,e);var t=Y.current,n=z0(t,e.type);t!==n&&(N(D,e),N(Y,n))}function at(e){D.current===e&&(T(Y),T(D)),fe.current===e&&(T(fe),Bi._currentValue=pe)}var aa,Yt;function re(e){if(aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);aa=t&&t[1]||"",Yt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+aa+e+Yt}var ve=!1;function he(e,t){if(!e||ve)return"";ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(ae){var ee=ae}Reflect.construct(e,[],de)}else{try{de.call()}catch(ae){ee=ae}e.call(de.prototype)}}else{try{throw Error()}catch(ae){ee=ae}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(ae){if(ae&&ee&&typeof ae.stack=="string")return[ae.stack,ee.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),g=d[0],w=d[1];if(g&&w){var _=g.split(`
`),Z=w.split(`
`);for(c=i=0;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(i===_.length||c===Z.length)for(i=_.length-1,c=Z.length-1;1<=i&&0<=c&&_[i]!==Z[c];)c--;for(;1<=i&&0<=c;i--,c--)if(_[i]!==Z[c]){if(i!==1||c!==1)do if(i--,c--,0>c||_[i]!==Z[c]){var ne=`
`+_[i].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),ne}while(1<=i&&0<=c);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?re(n):""}function q(e,t){switch(e.tag){case 26:case 27:case 5:return re(e.type);case 16:return re("Lazy");case 13:return e.child!==t&&t!==null?re("Suspense Fallback"):re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return re("Activity");default:return""}}function X(e){try{var t="",n=null;do t+=q(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ce=Object.prototype.hasOwnProperty,xe=r.unstable_scheduleCallback,ye=r.unstable_cancelCallback,nt=r.unstable_shouldYield,bt=r.unstable_requestPaint,Ke=r.unstable_now,ja=r.unstable_getCurrentPriorityLevel,wa=r.unstable_ImmediatePriority,Rt=r.unstable_UserBlockingPriority,Dt=r.unstable_NormalPriority,Os=r.unstable_LowPriority,fo=r.unstable_IdlePriority,Ms=r.log,po=r.unstable_setDisableYieldValue,Rn=null,ct=null;function tn(e){if(typeof Ms=="function"&&po(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Rn,e)}catch{}}var Ft=Math.clz32?Math.clz32:pb,ub=Math.log,fb=Math.LN2;function pb(e){return e>>>=0,e===0?32:31-(ub(e)/fb|0)|0}var go=256,mo=262144,ho=4194304;function Dn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xo(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var c=0,d=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var w=i&134217727;return w!==0?(i=w&~d,i!==0?c=Dn(i):(g&=w,g!==0?c=Dn(g):n||(n=w&~e,n!==0&&(c=Dn(n))))):(w=i&~d,w!==0?c=Dn(w):g!==0?c=Dn(g):n||(n=i&~e,n!==0&&(c=Dn(n)))),c===0?0:t!==0&&t!==c&&(t&d)===0&&(d=c&-c,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:c}function Xr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sf(){var e=ho;return ho<<=1,(ho&62914560)===0&&(ho=4194304),e}function Bs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mb(e,t,n,i,c,d){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var w=e.entanglements,_=e.expirationTimes,Z=e.hiddenUpdates;for(n=g&~n;0<n;){var ne=31-Ft(n),de=1<<ne;w[ne]=0,_[ne]=-1;var ee=Z[ne];if(ee!==null)for(Z[ne]=null,ne=0;ne<ee.length;ne++){var ae=ee[ne];ae!==null&&(ae.lane&=-536870913)}n&=~de}i!==0&&cf(e,i,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(g&~t))}function cf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ft(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function df(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ft(n),c=1<<i;c&t|e[i]&t&&(e[i]|=t),n&=~c}}function uf(e,t){var n=t&-t;return n=(n&42)!==0?1:Ls(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ls(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Us(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ff(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:J0(e.type))}function pf(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var an=Math.random().toString(36).slice(2),yt="__reactFiber$"+an,_t="__reactProps$"+an,ar="__reactContainer$"+an,Ws="__reactEvents$"+an,hb="__reactListeners$"+an,xb="__reactHandles$"+an,gf="__reactResources$"+an,Jr="__reactMarker$"+an;function Hs(e){delete e[yt],delete e[_t],delete e[Ws],delete e[hb],delete e[xb]}function nr(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ar]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=M0(e);e!==null;){if(n=e[yt])return n;e=M0(e)}return t}e=n,n=e.parentNode}return null}function rr(e){if(e=e[yt]||e[ar]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ir(e){var t=e[gf];return t||(t=e[gf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ht(e){e[Jr]=!0}var mf=new Set,hf={};function _n(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(hf[e]=t,e=0;e<t.length;e++)mf.add(t[e])}var bb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xf={},bf={};function yb(e){return ce.call(bf,e)?!0:ce.call(xf,e)?!1:bb.test(e)?bf[e]=!0:(xf[e]=!0,!1)}function bo(e,t,n){if(yb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function yo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ea(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function na(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vb(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(g){n=""+g,d.call(this,g)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){if(!e._valueTracker){var t=yf(e)?"checked":"value";e._valueTracker=vb(e,t,""+e[t])}}function vf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=yf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jb=/[\n"\\]/g;function ra(e){return e.replace(jb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Is(e,t,n,i,c,d,g,w){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+na(t)):e.value!==""+na(t)&&(e.value=""+na(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Ys(e,g,na(t)):n!=null?Ys(e,g,na(n)):i!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+na(w):e.removeAttribute("name")}function jf(e,t,n,i,c,d,g,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){$s(e);return}n=n!=null?""+na(n):"",t=t!=null?""+na(t):n,w||t===e.value||(e.value=t),e.defaultValue=t}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=w?e.checked:!!i,e.defaultChecked=!!i,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),$s(e)}function Ys(e,t,n){t==="number"&&vo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function lr(e,t,n,i){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&i&&(e[n].defaultSelected=!0)}else{for(n=""+na(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function wf(e,t,n){if(t!=null&&(t=""+na(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+na(n):""}function Sf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(we(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=na(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),$s(e)}function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||wb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Nf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var c in t)i=t[c],t.hasOwnProperty(c)&&n[c]!==i&&kf(e,c,i)}else for(var d in t)t.hasOwnProperty(d)&&kf(e,d,t[d])}function Fs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(e){return kb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ra(){}var qs=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cr=null,dr=null;function Cf(e){var t=rr(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if(Is(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ra(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var c=i[_t]||null;if(!c)throw Error(s(90));Is(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&vf(i)}break e;case"textarea":wf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&lr(e,!!n.multiple,t,!1)}}}var Ps=!1;function Tf(e,t,n){if(Ps)return e(t,n);Ps=!0;try{var i=e(t);return i}finally{if(Ps=!1,(cr!==null||dr!==null)&&(sl(),cr&&(t=cr,e=dr,dr=cr=null,Cf(t),e)))for(t=0;t<e.length;t++)Cf(e[t])}}function Kr(e,t){var n=e.stateNode;if(n===null)return null;var i=n[_t]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gs=!1;if(Da)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Gs=!1}var nn=null,Xs=null,wo=null;function zf(){if(wo)return wo;var e,t=Xs,n=t.length,i,c="value"in nn?nn.value:nn.textContent,d=c.length;for(e=0;e<n&&t[e]===c[e];e++);var g=n-e;for(i=1;i<=g&&t[n-i]===c[d-i];i++);return wo=c.slice(e,1<i?1-i:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Af(){return!1}function Ot(e){function t(n,i,c,d,g){this._reactName=n,this._targetInst=c,this.type=i,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ko:Af,this.isPropagationStopped=Af,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=Ot(On),ti=v({},On,{view:0,detail:0}),Nb=Ot(ti),Qs,Js,ai,Co=v({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(Qs=e.screenX-ai.screenX,Js=e.screenY-ai.screenY):Js=Qs=0,ai=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:Js}}),Ef=Ot(Co),Cb=v({},Co,{dataTransfer:0}),Tb=Ot(Cb),zb=v({},ti,{relatedTarget:0}),Zs=Ot(zb),Ab=v({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Eb=Ot(Ab),Rb=v({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Db=Ot(Rb),_b=v({},On,{data:0}),Rf=Ot(_b),Ob={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bb[e])?!!t[e]:!1}function Ks(){return Lb}var Ub=v({},ti,{key:function(e){if(e.key){var t=Ob[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wb=Ot(Ub),Hb=v({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=Ot(Hb),$b=v({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),Ib=Ot($b),Yb=v({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fb=Ot(Yb),qb=v({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vb=Ot(qb),Pb=v({},On,{newState:0,oldState:0}),Gb=Ot(Pb),Xb=[9,13,27,32],ec=Da&&"CompositionEvent"in window,ni=null;Da&&"documentMode"in document&&(ni=document.documentMode);var Qb=Da&&"TextEvent"in window&&!ni,_f=Da&&(!ec||ni&&8<ni&&11>=ni),Of=" ",Mf=!1;function Bf(e,t){switch(e){case"keyup":return Xb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Jb(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(Mf=!0,Of);case"textInput":return e=t.data,e===Of&&Mf?null:e;default:return null}}function Zb(e,t){if(ur)return e==="compositionend"||!ec&&Bf(e,t)?(e=zf(),wo=Xs=nn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _f&&t.locale!=="ko"?null:t.data;default:return null}}var Kb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kb[e.type]:t==="textarea"}function Wf(e,t,n,i){cr?dr?dr.push(i):dr=[i]:cr=i,t=ml(t,"onChange"),0<t.length&&(n=new No("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ri=null,ii=null;function e1(e){j0(e,0)}function To(e){var t=Zr(e);if(vf(t))return e}function Hf(e,t){if(e==="change")return t}var $f=!1;if(Da){var tc;if(Da){var ac="oninput"in document;if(!ac){var If=document.createElement("div");If.setAttribute("oninput","return;"),ac=typeof If.oninput=="function"}tc=ac}else tc=!1;$f=tc&&(!document.documentMode||9<document.documentMode)}function Yf(){ri&&(ri.detachEvent("onpropertychange",Ff),ii=ri=null)}function Ff(e){if(e.propertyName==="value"&&To(ii)){var t=[];Wf(t,ii,e,Vs(e)),Tf(e1,t)}}function t1(e,t,n){e==="focusin"?(Yf(),ri=t,ii=n,ri.attachEvent("onpropertychange",Ff)):e==="focusout"&&Yf()}function a1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(ii)}function n1(e,t){if(e==="click")return To(t)}function r1(e,t){if(e==="input"||e==="change")return To(t)}function i1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:i1;function oi(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var c=n[i];if(!ce.call(t,c)||!qt(e[c],t[c]))return!1}return!0}function qf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vf(e,t){var n=qf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function Pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var o1=Da&&"documentMode"in document&&11>=document.documentMode,fr=null,rc=null,li=null,ic=!1;function Xf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ic||fr==null||fr!==vo(i)||(i=fr,"selectionStart"in i&&nc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),li&&oi(li,i)||(li=i,i=ml(rc,"onSelect"),0<i.length&&(t=new No("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=fr)))}function Mn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionrun:Mn("Transition","TransitionRun"),transitionstart:Mn("Transition","TransitionStart"),transitioncancel:Mn("Transition","TransitionCancel"),transitionend:Mn("Transition","TransitionEnd")},oc={},Qf={};Da&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Bn(e){if(oc[e])return oc[e];if(!pr[e])return e;var t=pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qf)return oc[e]=t[n];return e}var Jf=Bn("animationend"),Zf=Bn("animationiteration"),Kf=Bn("animationstart"),l1=Bn("transitionrun"),s1=Bn("transitionstart"),c1=Bn("transitioncancel"),ep=Bn("transitionend"),tp=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function ma(e,t){tp.set(e,t),_n(t,[e])}var zo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ia=[],gr=0,sc=0;function Ao(){for(var e=gr,t=sc=gr=0;t<e;){var n=ia[t];ia[t++]=null;var i=ia[t];ia[t++]=null;var c=ia[t];ia[t++]=null;var d=ia[t];if(ia[t++]=null,i!==null&&c!==null){var g=i.pending;g===null?c.next=c:(c.next=g.next,g.next=c),i.pending=c}d!==0&&ap(n,c,d)}}function Eo(e,t,n,i){ia[gr++]=e,ia[gr++]=t,ia[gr++]=n,ia[gr++]=i,sc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function cc(e,t,n,i){return Eo(e,t,n,i),Ro(e)}function Ln(e,t){return Eo(e,null,null,t),Ro(e)}function ap(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var c=!1,d=e.return;d!==null;)d.childLanes|=n,i=d.alternate,i!==null&&(i.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&t!==null&&(c=31-Ft(n),e=d.hiddenUpdates,i=e[c],i===null?e[c]=[t]:i.push(t),t.lane=n|536870912),d):null}function Ro(e){if(50<Ai)throw Ai=0,bd=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mr={};function d1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,i){return new d1(e,t,n,i)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function np(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Do(e,t,n,i,c,d){var g=0;if(i=e,typeof e=="function")dc(e)&&(g=1);else if(typeof e=="string")g=my(e,n,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=Vt(31,n,t,c),e.elementType=ue,e.lanes=d,e;case z:return Un(n.children,c,d,t);case E:g=8,c|=24;break;case R:return e=Vt(12,n,t,c|2),e.elementType=R,e.lanes=d,e;case U:return e=Vt(13,n,t,c),e.elementType=U,e.lanes=d,e;case O:return e=Vt(19,n,t,c),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:g=10;break e;case C:g=9;break e;case G:g=11;break e;case $:g=14;break e;case Q:g=16,i=null;break e}g=29,n=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=Vt(g,n,t,c),t.elementType=e,t.type=i,t.lanes=d,t}function Un(e,t,n,i){return e=Vt(7,e,i,t),e.lanes=n,e}function uc(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function rp(e){var t=Vt(18,null,null,0);return t.stateNode=e,t}function fc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ip=new WeakMap;function oa(e,t){if(typeof e=="object"&&e!==null){var n=ip.get(e);return n!==void 0?n:(t={value:e,source:t,stack:X(t)},ip.set(e,t),t)}return{value:e,source:t,stack:X(t)}}var hr=[],xr=0,_o=null,si=0,la=[],sa=0,rn=null,Sa=1,ka="";function Oa(e,t){hr[xr++]=si,hr[xr++]=_o,_o=e,si=t}function op(e,t,n){la[sa++]=Sa,la[sa++]=ka,la[sa++]=rn,rn=e;var i=Sa;e=ka;var c=32-Ft(i)-1;i&=~(1<<c),n+=1;var d=32-Ft(t)+c;if(30<d){var g=c-c%5;d=(i&(1<<g)-1).toString(32),i>>=g,c-=g,Sa=1<<32-Ft(t)+c|n<<c|i,ka=d+e}else Sa=1<<d|n<<c|i,ka=e}function pc(e){e.return!==null&&(Oa(e,1),op(e,1,0))}function gc(e){for(;e===_o;)_o=hr[--xr],hr[xr]=null,si=hr[--xr],hr[xr]=null;for(;e===rn;)rn=la[--sa],la[sa]=null,ka=la[--sa],la[sa]=null,Sa=la[--sa],la[sa]=null}function lp(e,t){la[sa++]=Sa,la[sa++]=ka,la[sa++]=rn,Sa=t.id,ka=t.overflow,rn=e}var vt=null,Je=null,Be=!1,on=null,ca=!1,mc=Error(s(519));function ln(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ci(oa(t,e)),mc}function sp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[yt]=e,t[_t]=i,n){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(n=0;n<Ri.length;n++)_e(Ri[n],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),jf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),Sf(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||N0(t.textContent,n)?(i.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),i.onScroll!=null&&_e("scroll",t),i.onScrollEnd!=null&&_e("scrollend",t),i.onClick!=null&&(t.onclick=Ra),t=!0):t=!1,t||ln(e,!0)}function cp(e){for(vt=e.return;vt;)switch(vt.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:vt=vt.return}}function br(e){if(e!==vt)return!1;if(!Be)return cp(e),Be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||_d(e.type,e.memoizedProps)),n=!n),n&&Je&&ln(e),cp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=O0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=O0(e)}else t===27?(t=Je,jn(e.type)?(e=Ud,Ud=null,Je=e):Je=t):Je=vt?ua(e.stateNode.nextSibling):null;return!0}function Wn(){Je=vt=null,Be=!1}function hc(){var e=on;return e!==null&&(Ut===null?Ut=e:Ut.push.apply(Ut,e),on=null),e}function ci(e){on===null?on=[e]:on.push(e)}var xc=j(null),Hn=null,Ma=null;function sn(e,t,n){N(xc,t._currentValue),t._currentValue=n}function Ba(e){e._currentValue=xc.current,T(xc)}function bc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function yc(e,t,n,i){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var g=c.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=c;for(var _=0;_<t.length;_++)if(w.context===t[_]){d.lanes|=n,w=d.alternate,w!==null&&(w.lanes|=n),bc(d.return,n,e),i||(g=null);break e}d=w.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=n,d=g.alternate,d!==null&&(d.lanes|=n),bc(g,n,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function yr(e,t,n,i){e=null;for(var c=t,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var w=c.type;qt(c.pendingProps.value,g.value)||(e!==null?e.push(w):e=[w])}}else if(c===fe.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Bi):e=[Bi])}c=c.return}e!==null&&yc(t,e,n,i),t.flags|=262144}function Oo(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $n(e){Hn=e,Ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function jt(e){return dp(Hn,e)}function Mo(e,t){return Hn===null&&$n(e),dp(e,t)}function dp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ma===null){if(e===null)throw Error(s(308));Ma=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ma=Ma.next=t;return n}var u1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},f1=r.unstable_scheduleCallback,p1=r.unstable_NormalPriority,dt={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vc(){return{controller:new u1,data:new Map,refCount:0}}function di(e){e.refCount--,e.refCount===0&&f1(p1,function(){e.controller.abort()})}var ui=null,jc=0,vr=0,jr=null;function g1(e,t){if(ui===null){var n=ui=[];jc=0,vr=kd(),jr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return jc++,t.then(up,up),t}function up(){if(--jc===0&&ui!==null){jr!==null&&(jr.status="fulfilled");var e=ui;ui=null,vr=0,jr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function m1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(i.status="rejected",i.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),i}var fp=F.S;F.S=function(e,t){Xg=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&g1(e,t),fp!==null&&fp(e,t)};var In=j(null);function wc(){var e=In.current;return e!==null?e:Ge.pooledCache}function Bo(e,t){t===null?N(In,In.current):N(In,t.pool)}function pp(){var e=wc();return e===null?null:{parent:dt._currentValue,pool:e}}var wr=Error(s(460)),Sc=Error(s(474)),Lo=Error(s(542)),Uo={then:function(){}};function gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ra,Ra),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xp(e),e;default:if(typeof t.status=="string")t.then(Ra,Ra);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=i}},function(i){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xp(e),e}throw Fn=t,wr}}function Yn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Fn=n,wr):n}}var Fn=null;function hp(){if(Fn===null)throw Error(s(459));var e=Fn;return Fn=null,e}function xp(e){if(e===wr||e===Lo)throw Error(s(483))}var Sr=null,fi=0;function Wo(e){var t=fi;return fi+=1,Sr===null&&(Sr=[]),mp(Sr,e,t)}function pi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ho(e,t){throw t.$$typeof===M?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bp(e){function t(V,W){if(e){var J=V.deletions;J===null?(V.deletions=[W],V.flags|=16):J.push(W)}}function n(V,W){if(!e)return null;for(;W!==null;)t(V,W),W=W.sibling;return null}function i(V){for(var W=new Map;V!==null;)V.key!==null?W.set(V.key,V):W.set(V.index,V),V=V.sibling;return W}function c(V,W){return V=_a(V,W),V.index=0,V.sibling=null,V}function d(V,W,J){return V.index=J,e?(J=V.alternate,J!==null?(J=J.index,J<W?(V.flags|=67108866,W):J):(V.flags|=67108866,W)):(V.flags|=1048576,W)}function g(V){return e&&V.alternate===null&&(V.flags|=67108866),V}function w(V,W,J,oe){return W===null||W.tag!==6?(W=uc(J,V.mode,oe),W.return=V,W):(W=c(W,J),W.return=V,W)}function _(V,W,J,oe){var Ce=J.type;return Ce===z?ne(V,W,J.props.children,oe,J.key):W!==null&&(W.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===Q&&Yn(Ce)===W.type)?(W=c(W,J.props),pi(W,J),W.return=V,W):(W=Do(J.type,J.key,J.props,null,V.mode,oe),pi(W,J),W.return=V,W)}function Z(V,W,J,oe){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=fc(J,V.mode,oe),W.return=V,W):(W=c(W,J.children||[]),W.return=V,W)}function ne(V,W,J,oe,Ce){return W===null||W.tag!==7?(W=Un(J,V.mode,oe,Ce),W.return=V,W):(W=c(W,J),W.return=V,W)}function de(V,W,J){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=uc(""+W,V.mode,J),W.return=V,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case A:return J=Do(W.type,W.key,W.props,null,V.mode,J),pi(J,W),J.return=V,J;case S:return W=fc(W,V.mode,J),W.return=V,W;case Q:return W=Yn(W),de(V,W,J)}if(we(W)||le(W))return W=Un(W,V.mode,J,null),W.return=V,W;if(typeof W.then=="function")return de(V,Wo(W),J);if(W.$$typeof===B)return de(V,Mo(V,W),J);Ho(V,W)}return null}function ee(V,W,J,oe){var Ce=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ce!==null?null:w(V,W,""+J,oe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case A:return J.key===Ce?_(V,W,J,oe):null;case S:return J.key===Ce?Z(V,W,J,oe):null;case Q:return J=Yn(J),ee(V,W,J,oe)}if(we(J)||le(J))return Ce!==null?null:ne(V,W,J,oe,null);if(typeof J.then=="function")return ee(V,W,Wo(J),oe);if(J.$$typeof===B)return ee(V,W,Mo(V,J),oe);Ho(V,J)}return null}function ae(V,W,J,oe,Ce){if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return V=V.get(J)||null,w(W,V,""+oe,Ce);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case A:return V=V.get(oe.key===null?J:oe.key)||null,_(W,V,oe,Ce);case S:return V=V.get(oe.key===null?J:oe.key)||null,Z(W,V,oe,Ce);case Q:return oe=Yn(oe),ae(V,W,J,oe,Ce)}if(we(oe)||le(oe))return V=V.get(J)||null,ne(W,V,oe,Ce,null);if(typeof oe.then=="function")return ae(V,W,J,Wo(oe),Ce);if(oe.$$typeof===B)return ae(V,W,J,Mo(W,oe),Ce);Ho(W,oe)}return null}function je(V,W,J,oe){for(var Ce=null,We=null,ke=W,Re=W=0,Me=null;ke!==null&&Re<J.length;Re++){ke.index>Re?(Me=ke,ke=null):Me=ke.sibling;var He=ee(V,ke,J[Re],oe);if(He===null){ke===null&&(ke=Me);break}e&&ke&&He.alternate===null&&t(V,ke),W=d(He,W,Re),We===null?Ce=He:We.sibling=He,We=He,ke=Me}if(Re===J.length)return n(V,ke),Be&&Oa(V,Re),Ce;if(ke===null){for(;Re<J.length;Re++)ke=de(V,J[Re],oe),ke!==null&&(W=d(ke,W,Re),We===null?Ce=ke:We.sibling=ke,We=ke);return Be&&Oa(V,Re),Ce}for(ke=i(ke);Re<J.length;Re++)Me=ae(ke,V,Re,J[Re],oe),Me!==null&&(e&&Me.alternate!==null&&ke.delete(Me.key===null?Re:Me.key),W=d(Me,W,Re),We===null?Ce=Me:We.sibling=Me,We=Me);return e&&ke.forEach(function(Cn){return t(V,Cn)}),Be&&Oa(V,Re),Ce}function Te(V,W,J,oe){if(J==null)throw Error(s(151));for(var Ce=null,We=null,ke=W,Re=W=0,Me=null,He=J.next();ke!==null&&!He.done;Re++,He=J.next()){ke.index>Re?(Me=ke,ke=null):Me=ke.sibling;var Cn=ee(V,ke,He.value,oe);if(Cn===null){ke===null&&(ke=Me);break}e&&ke&&Cn.alternate===null&&t(V,ke),W=d(Cn,W,Re),We===null?Ce=Cn:We.sibling=Cn,We=Cn,ke=Me}if(He.done)return n(V,ke),Be&&Oa(V,Re),Ce;if(ke===null){for(;!He.done;Re++,He=J.next())He=de(V,He.value,oe),He!==null&&(W=d(He,W,Re),We===null?Ce=He:We.sibling=He,We=He);return Be&&Oa(V,Re),Ce}for(ke=i(ke);!He.done;Re++,He=J.next())He=ae(ke,V,Re,He.value,oe),He!==null&&(e&&He.alternate!==null&&ke.delete(He.key===null?Re:He.key),W=d(He,W,Re),We===null?Ce=He:We.sibling=He,We=He);return e&&ke.forEach(function(Cy){return t(V,Cy)}),Be&&Oa(V,Re),Ce}function Pe(V,W,J,oe){if(typeof J=="object"&&J!==null&&J.type===z&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case A:e:{for(var Ce=J.key;W!==null;){if(W.key===Ce){if(Ce=J.type,Ce===z){if(W.tag===7){n(V,W.sibling),oe=c(W,J.props.children),oe.return=V,V=oe;break e}}else if(W.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===Q&&Yn(Ce)===W.type){n(V,W.sibling),oe=c(W,J.props),pi(oe,J),oe.return=V,V=oe;break e}n(V,W);break}else t(V,W);W=W.sibling}J.type===z?(oe=Un(J.props.children,V.mode,oe,J.key),oe.return=V,V=oe):(oe=Do(J.type,J.key,J.props,null,V.mode,oe),pi(oe,J),oe.return=V,V=oe)}return g(V);case S:e:{for(Ce=J.key;W!==null;){if(W.key===Ce)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){n(V,W.sibling),oe=c(W,J.children||[]),oe.return=V,V=oe;break e}else{n(V,W);break}else t(V,W);W=W.sibling}oe=fc(J,V.mode,oe),oe.return=V,V=oe}return g(V);case Q:return J=Yn(J),Pe(V,W,J,oe)}if(we(J))return je(V,W,J,oe);if(le(J)){if(Ce=le(J),typeof Ce!="function")throw Error(s(150));return J=Ce.call(J),Te(V,W,J,oe)}if(typeof J.then=="function")return Pe(V,W,Wo(J),oe);if(J.$$typeof===B)return Pe(V,W,Mo(V,J),oe);Ho(V,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,W!==null&&W.tag===6?(n(V,W.sibling),oe=c(W,J),oe.return=V,V=oe):(n(V,W),oe=uc(J,V.mode,oe),oe.return=V,V=oe),g(V)):n(V,W)}return function(V,W,J,oe){try{fi=0;var Ce=Pe(V,W,J,oe);return Sr=null,Ce}catch(ke){if(ke===wr||ke===Lo)throw ke;var We=Vt(29,ke,null,V.mode);return We.lanes=oe,We.return=V,We}}}var qn=bp(!0),yp=bp(!1),cn=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,($e&2)!==0){var c=i.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),i.pending=t,t=Ro(e),ap(e,null,n),t}return Eo(e,i,t,n),Ro(e)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,df(e,n)}}function Cc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var c=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?c=d=g:d=d.next=g,n=n.next}while(n!==null);d===null?c=d=t:d=d.next=t}else c=d=t;n={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Tc=!1;function mi(){if(Tc){var e=jr;if(e!==null)throw e}}function hi(e,t,n,i){Tc=!1;var c=e.updateQueue;cn=!1;var d=c.firstBaseUpdate,g=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var _=w,Z=_.next;_.next=null,g===null?d=Z:g.next=Z,g=_;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,w=ne.lastBaseUpdate,w!==g&&(w===null?ne.firstBaseUpdate=Z:w.next=Z,ne.lastBaseUpdate=_))}if(d!==null){var de=c.baseState;g=0,ne=Z=_=null,w=d;do{var ee=w.lane&-536870913,ae=ee!==w.lane;if(ae?(Oe&ee)===ee:(i&ee)===ee){ee!==0&&ee===vr&&(Tc=!0),ne!==null&&(ne=ne.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var je=e,Te=w;ee=t;var Pe=n;switch(Te.tag){case 1:if(je=Te.payload,typeof je=="function"){de=je.call(Pe,de,ee);break e}de=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Te.payload,ee=typeof je=="function"?je.call(Pe,de,ee):je,ee==null)break e;de=v({},de,ee);break e;case 2:cn=!0}}ee=w.callback,ee!==null&&(e.flags|=64,ae&&(e.flags|=8192),ae=c.callbacks,ae===null?c.callbacks=[ee]:ae.push(ee))}else ae={lane:ee,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ne===null?(Z=ne=ae,_=de):ne=ne.next=ae,g|=ee;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;ae=w,w=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);ne===null&&(_=de),c.baseState=_,c.firstBaseUpdate=Z,c.lastBaseUpdate=ne,d===null&&(c.shared.lanes=0),hn|=g,e.lanes=g,e.memoizedState=de}}function vp(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function jp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vp(n[e],t)}var kr=j(null),$o=j(0);function wp(e,t){e=qa,N($o,e),N(kr,t),qa=e|t.baseLanes}function zc(){N($o,qa),N(kr,kr.current)}function Ac(){qa=$o.current,T(kr),T($o)}var Pt=j(null),da=null;function fn(e){var t=e.alternate;N(lt,lt.current&1),N(Pt,e),da===null&&(t===null||kr.current!==null||t.memoizedState!==null)&&(da=e)}function Ec(e){N(lt,lt.current),N(Pt,e),da===null&&(da=e)}function Sp(e){e.tag===22?(N(lt,lt.current),N(Pt,e),da===null&&(da=e)):pn()}function pn(){N(lt,lt.current),N(Pt,Pt.current)}function Gt(e){T(Pt),da===e&&(da=null),T(lt)}var lt=j(0);function Io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bd(n)||Ld(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var La=0,Ae=null,qe=null,ut=null,Yo=!1,Nr=!1,Vn=!1,Fo=0,xi=0,Cr=null,h1=0;function rt(){throw Error(s(321))}function Rc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function Dc(e,t,n,i,c,d){return La=d,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?og:Pc,Vn=!1,d=n(i,c),Vn=!1,Nr&&(d=Np(t,n,i,c)),kp(e),d}function kp(e){F.H=vi;var t=qe!==null&&qe.next!==null;if(La=0,ut=qe=Ae=null,Yo=!1,xi=0,Cr=null,t)throw Error(s(300));e===null||ft||(e=e.dependencies,e!==null&&Oo(e)&&(ft=!0))}function Np(e,t,n,i){Ae=e;var c=0;do{if(Nr&&(Cr=null),xi=0,Nr=!1,25<=c)throw Error(s(301));if(c+=1,ut=qe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=lg,d=t(n,i)}while(Nr);return d}function x1(){var e=F.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(Ae.flags|=1024),t}function _c(){var e=Fo!==0;return Fo=0,e}function Oc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mc(e){if(Yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yo=!1}La=0,ut=qe=Ae=null,Nr=!1,xi=Fo=0,Cr=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ae.memoizedState=ut=e:ut=ut.next=e,ut}function st(){if(qe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=ut===null?Ae.memoizedState:ut.next;if(t!==null)ut=t,qe=e;else{if(e===null)throw Ae.alternate===null?Error(s(467)):Error(s(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ut===null?Ae.memoizedState=ut=e:ut=ut.next=e}return ut}function qo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=xi;return xi+=1,Cr===null&&(Cr=[]),e=mp(Cr,e,t),t=Ae,(ut===null?t.memoizedState:ut.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?og:Pc),e}function Vo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===B)return jt(e)}throw Error(s(438,String(e)))}function Bc(e){var t=null,n=Ae.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ae.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=qo(),Ae.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ge;return t.index++,n}function Ua(e,t){return typeof t=="function"?t(e):t}function Po(e){var t=st();return Lc(t,qe,e)}function Lc(e,t,n){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var c=e.baseQueue,d=i.pending;if(d!==null){if(c!==null){var g=c.next;c.next=d.next,d.next=g}t.baseQueue=c=d,i.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{t=c.next;var w=g=null,_=null,Z=t,ne=!1;do{var de=Z.lane&-536870913;if(de!==Z.lane?(Oe&de)===de:(La&de)===de){var ee=Z.revertLane;if(ee===0)_!==null&&(_=_.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),de===vr&&(ne=!0);else if((La&ee)===ee){Z=Z.next,ee===vr&&(ne=!0);continue}else de={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},_===null?(w=_=de,g=d):_=_.next=de,Ae.lanes|=ee,hn|=ee;de=Z.action,Vn&&n(d,de),d=Z.hasEagerState?Z.eagerState:n(d,de)}else ee={lane:de,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},_===null?(w=_=ee,g=d):_=_.next=ee,Ae.lanes|=de,hn|=de;Z=Z.next}while(Z!==null&&Z!==t);if(_===null?g=d:_.next=w,!qt(d,e.memoizedState)&&(ft=!0,ne&&(n=jr,n!==null)))throw n;e.memoizedState=d,e.baseState=g,e.baseQueue=_,i.lastRenderedState=d}return c===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Uc(e){var t=st(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,c=n.pending,d=t.memoizedState;if(c!==null){n.pending=null;var g=c=c.next;do d=e(d,g.action),g=g.next;while(g!==c);qt(d,t.memoizedState)||(ft=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,i]}function Cp(e,t,n){var i=Ae,c=st(),d=Be;if(d){if(n===void 0)throw Error(s(407));n=n()}else n=t();var g=!qt((qe||c).memoizedState,n);if(g&&(c.memoizedState=n,ft=!0),c=c.queue,$c(Ap.bind(null,i,c,e),[e]),c.getSnapshot!==t||g||ut!==null&&ut.memoizedState.tag&1){if(i.flags|=2048,Tr(9,{destroy:void 0},zp.bind(null,i,c,n,t),null),Ge===null)throw Error(s(349));d||(La&127)!==0||Tp(i,t,n)}return n}function Tp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t=qo(),Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zp(e,t,n,i){t.value=n,t.getSnapshot=i,Ep(t)&&Rp(e)}function Ap(e,t,n){return n(function(){Ep(t)&&Rp(e)})}function Ep(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function Rp(e){var t=Ln(e,2);t!==null&&Wt(t,e,2)}function Wc(e){var t=Tt();if(typeof e=="function"){var n=e;if(e=n(),Vn){tn(!0);try{n()}finally{tn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},t}function Dp(e,t,n,i){return e.baseState=n,Lc(e,qe,typeof i=="function"?i:Ua)}function b1(e,t,n,i,c){if(Qo(e))throw Error(s(485));if(e=t.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){d.listeners.push(g)}};F.T!==null?n(!0):d.isTransition=!1,i(d),n=t.pending,n===null?(d.next=t.pending=d,_p(t,d)):(d.next=n.next,t.pending=n.next=d)}}function _p(e,t){var n=t.action,i=t.payload,c=e.state;if(t.isTransition){var d=F.T,g={};F.T=g;try{var w=n(c,i),_=F.S;_!==null&&_(g,w),Op(e,t,w)}catch(Z){Hc(e,t,Z)}finally{d!==null&&g.types!==null&&(d.types=g.types),F.T=d}}else try{d=n(c,i),Op(e,t,d)}catch(Z){Hc(e,t,Z)}}function Op(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Mp(e,t,i)},function(i){return Hc(e,t,i)}):Mp(e,t,n)}function Mp(e,t,n){t.status="fulfilled",t.value=n,Bp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_p(e,n)))}function Hc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Bp(t),t=t.next;while(t!==i)}e.action=null}function Bp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Lp(e,t){return t}function Up(e,t){if(Be){var n=Ge.formState;if(n!==null){e:{var i=Ae;if(Be){if(Je){t:{for(var c=Je,d=ca;c.nodeType!==8;){if(!d){c=null;break t}if(c=ua(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Je=ua(c.nextSibling),i=c.data==="F!";break e}}ln(i)}i=!1}i&&(t=n[0])}}return n=Tt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lp,lastRenderedState:t},n.queue=i,n=ng.bind(null,Ae,i),i.dispatch=n,i=Wc(!1),d=Vc.bind(null,Ae,!1,i.queue),i=Tt(),c={state:t,dispatch:null,action:e,pending:null},i.queue=c,n=b1.bind(null,Ae,c,d,n),c.dispatch=n,i.memoizedState=e,[t,n,!1]}function Wp(e){var t=st();return Hp(t,qe,e)}function Hp(e,t,n){if(t=Lc(e,t,Lp)[0],e=Po(Ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=bi(t)}catch(g){throw g===wr?Lo:g}else i=t;t=st();var c=t.queue,d=c.dispatch;return n!==t.memoizedState&&(Ae.flags|=2048,Tr(9,{destroy:void 0},y1.bind(null,c,n),null)),[i,d,e]}function y1(e,t){e.action=t}function $p(e){var t=st(),n=qe;if(n!==null)return Hp(t,n,e);st(),t=t.memoizedState,n=st();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Tr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ae.updateQueue,t===null&&(t=qo(),Ae.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ip(){return st().memoizedState}function Go(e,t,n,i){var c=Tt();Ae.flags|=e,c.memoizedState=Tr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Xo(e,t,n,i){var c=st();i=i===void 0?null:i;var d=c.memoizedState.inst;qe!==null&&i!==null&&Rc(i,qe.memoizedState.deps)?c.memoizedState=Tr(t,d,n,i):(Ae.flags|=e,c.memoizedState=Tr(1|t,d,n,i))}function Yp(e,t){Go(8390656,8,e,t)}function $c(e,t){Xo(2048,8,e,t)}function v1(e){Ae.flags|=4;var t=Ae.updateQueue;if(t===null)t=qo(),Ae.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fp(e){var t=st().memoizedState;return v1({ref:t,nextImpl:e}),function(){if(($e&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function qp(e,t){return Xo(4,2,e,t)}function Vp(e,t){return Xo(4,4,e,t)}function Pp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gp(e,t,n){n=n!=null?n.concat([e]):null,Xo(4,4,Pp.bind(null,t,e),n)}function Ic(){}function Xp(e,t){var n=st();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Rc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Qp(e,t){var n=st();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Rc(t,i[1]))return i[0];if(i=e(),Vn){tn(!0);try{e()}finally{tn(!1)}}return n.memoizedState=[i,t],i}function Yc(e,t,n){return n===void 0||(La&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Jg(),Ae.lanes|=e,hn|=e,n)}function Jp(e,t,n,i){return qt(n,t)?n:kr.current!==null?(e=Yc(e,n,i),qt(e,t)||(ft=!0),e):(La&42)===0||(La&1073741824)!==0&&(Oe&261930)===0?(ft=!0,e.memoizedState=n):(e=Jg(),Ae.lanes|=e,hn|=e,t)}function Zp(e,t,n,i,c){var d=ie.p;ie.p=d!==0&&8>d?d:8;var g=F.T,w={};F.T=w,Vc(e,!1,t,n);try{var _=c(),Z=F.S;if(Z!==null&&Z(w,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var ne=m1(_,i);yi(e,t,ne,Jt(e))}else yi(e,t,i,Jt(e))}catch(de){yi(e,t,{then:function(){},status:"rejected",reason:de},Jt())}finally{ie.p=d,g!==null&&w.types!==null&&(g.types=w.types),F.T=g}}function j1(){}function Fc(e,t,n,i){if(e.tag!==5)throw Error(s(476));var c=Kp(e).queue;Zp(e,c,t,pe,n===null?j1:function(){return eg(e),n(i)})}function Kp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:pe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function eg(e){var t=Kp(e);t.next===null&&(t=e.alternate.memoizedState),yi(e,t.next.queue,{},Jt())}function qc(){return jt(Bi)}function tg(){return st().memoizedState}function ag(){return st().memoizedState}function w1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Jt();e=dn(n);var i=un(t,e,n);i!==null&&(Wt(i,t,n),gi(i,t,n)),t={cache:vc()},e.payload=t;return}t=t.return}}function S1(e,t,n){var i=Jt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qo(e)?rg(t,n):(n=cc(e,t,n,i),n!==null&&(Wt(n,e,i),ig(n,t,i)))}function ng(e,t,n){var i=Jt();yi(e,t,n,i)}function yi(e,t,n,i){var c={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))rg(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var g=t.lastRenderedState,w=d(g,n);if(c.hasEagerState=!0,c.eagerState=w,qt(w,g))return Eo(e,t,c,0),Ge===null&&Ao(),!1}catch{}if(n=cc(e,t,c,i),n!==null)return Wt(n,e,i),ig(n,t,i),!0}return!1}function Vc(e,t,n,i){if(i={lane:2,revertLane:kd(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Qo(e)){if(t)throw Error(s(479))}else t=cc(e,n,i,2),t!==null&&Wt(t,e,2)}function Qo(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function rg(e,t){Nr=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ig(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,df(e,n)}}var vi={readContext:jt,use:Vo,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt};vi.useEffectEvent=rt;var og={readContext:jt,use:Vo,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:Yp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Go(4194308,4,Pp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){Go(4,2,e,t)},useMemo:function(e,t){var n=Tt();t=t===void 0?null:t;var i=e();if(Vn){tn(!0);try{e()}finally{tn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Tt();if(n!==void 0){var c=n(t);if(Vn){tn(!0);try{n(t)}finally{tn(!1)}}}else c=t;return i.memoizedState=i.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},i.queue=e,e=e.dispatch=S1.bind(null,Ae,e),[i.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Wc(e);var t=e.queue,n=ng.bind(null,Ae,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ic,useDeferredValue:function(e,t){var n=Tt();return Yc(n,e,t)},useTransition:function(){var e=Wc(!1);return e=Zp.bind(null,Ae,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ae,c=Tt();if(Be){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ge===null)throw Error(s(349));(Oe&127)!==0||Tp(i,t,n)}c.memoizedState=n;var d={value:n,getSnapshot:t};return c.queue=d,Yp(Ap.bind(null,i,d,e),[e]),i.flags|=2048,Tr(9,{destroy:void 0},zp.bind(null,i,d,n,t),null),n},useId:function(){var e=Tt(),t=Ge.identifierPrefix;if(Be){var n=ka,i=Sa;n=(i&~(1<<32-Ft(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Fo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=h1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qc,useFormState:Up,useActionState:Up,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vc.bind(null,Ae,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bc,useCacheRefresh:function(){return Tt().memoizedState=w1.bind(null,Ae)},useEffectEvent:function(e){var t=Tt(),n={impl:e};return t.memoizedState=n,function(){if(($e&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Pc={readContext:jt,use:Vo,useCallback:Xp,useContext:jt,useEffect:$c,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Vp,useMemo:Qp,useReducer:Po,useRef:Ip,useState:function(){return Po(Ua)},useDebugValue:Ic,useDeferredValue:function(e,t){var n=st();return Jp(n,qe.memoizedState,e,t)},useTransition:function(){var e=Po(Ua)[0],t=st().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Cp,useId:tg,useHostTransitionStatus:qc,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,t){var n=st();return Dp(n,qe,e,t)},useMemoCache:Bc,useCacheRefresh:ag};Pc.useEffectEvent=Fp;var lg={readContext:jt,use:Vo,useCallback:Xp,useContext:jt,useEffect:$c,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Vp,useMemo:Qp,useReducer:Uc,useRef:Ip,useState:function(){return Uc(Ua)},useDebugValue:Ic,useDeferredValue:function(e,t){var n=st();return qe===null?Yc(n,e,t):Jp(n,qe.memoizedState,e,t)},useTransition:function(){var e=Uc(Ua)[0],t=st().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Cp,useId:tg,useHostTransitionStatus:qc,useFormState:$p,useActionState:$p,useOptimistic:function(e,t){var n=st();return qe!==null?Dp(n,qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bc,useCacheRefresh:ag};lg.useEffectEvent=Fp;function Gc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Jt(),c=dn(i);c.payload=t,n!=null&&(c.callback=n),t=un(e,c,i),t!==null&&(Wt(t,e,i),gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Jt(),c=dn(i);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=un(e,c,i),t!==null&&(Wt(t,e,i),gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Jt(),i=dn(n);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,n),t!==null&&(Wt(t,e,n),gi(t,e,n))}};function sg(e,t,n,i,c,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,g):t.prototype&&t.prototype.isPureReactComponent?!oi(n,i)||!oi(c,d):!0}function cg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Xc.enqueueReplaceState(t,t.state,null)}function Pn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function dg(e){zo(e)}function ug(e){console.error(e)}function fg(e){zo(e)}function Jo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function pg(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qc(e,t,n){return n=dn(n),n.tag=3,n.payload={element:null},n.callback=function(){Jo(e,t)},n}function gg(e){return e=dn(e),e.tag=3,e}function mg(e,t,n,i){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;e.payload=function(){return c(d)},e.callback=function(){pg(t,n,i)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){pg(t,n,i),typeof c!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})})}function k1(e,t,n,i,c){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&yr(t,n,c,!0),n=Pt.current,n!==null){switch(n.tag){case 31:case 13:return da===null?cl():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=c,i===Uo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),jd(e,i,c)),!1;case 22:return n.flags|=65536,i===Uo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),jd(e,i,c)),!1}throw Error(s(435,n.tag))}return jd(e,i,c),cl(),!1}if(Be)return t=Pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,i!==mc&&(e=Error(s(422),{cause:i}),ci(oa(e,n)))):(i!==mc&&(t=Error(s(423),{cause:i}),ci(oa(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,i=oa(i,n),c=Qc(e.stateNode,i,c),Cc(e,c),it!==4&&(it=2)),!1;var d=Error(s(520),{cause:i});if(d=oa(d,n),zi===null?zi=[d]:zi.push(d),it!==4&&(it=2),t===null)return!0;i=oa(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=Qc(n.stateNode,i,e),Cc(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xn===null||!xn.has(d))))return n.flags|=65536,c&=-c,n.lanes|=c,c=gg(c),mg(c,e,n,i),Cc(n,c),!1}n=n.return}while(n!==null);return!1}var Jc=Error(s(461)),ft=!1;function wt(e,t,n,i){t.child=e===null?yp(t,null,n,i):qn(t,e.child,n,i)}function hg(e,t,n,i,c){n=n.render;var d=t.ref;if("ref"in i){var g={};for(var w in i)w!=="ref"&&(g[w]=i[w])}else g=i;return $n(t),i=Dc(e,t,n,g,d,c),w=_c(),e!==null&&!ft?(Oc(e,t,c),Wa(e,t,c)):(Be&&w&&pc(t),t.flags|=1,wt(e,t,i,c),t.child)}function xg(e,t,n,i,c){if(e===null){var d=n.type;return typeof d=="function"&&!dc(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,bg(e,t,d,i,c)):(e=Do(n.type,null,i,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!id(e,c)){var g=d.memoizedProps;if(n=n.compare,n=n!==null?n:oi,n(g,i)&&e.ref===t.ref)return Wa(e,t,c)}return t.flags|=1,e=_a(d,i),e.ref=t.ref,e.return=t,t.child=e}function bg(e,t,n,i,c){if(e!==null){var d=e.memoizedProps;if(oi(d,i)&&e.ref===t.ref)if(ft=!1,t.pendingProps=i=d,id(e,c))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Wa(e,t,c)}return Zc(e,t,n,i,c)}function yg(e,t,n,i){var c=i.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|n:n,e!==null){for(i=t.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~d}else i=0,t.child=null;return vg(e,t,d,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bo(t,d!==null?d.cachePool:null),d!==null?wp(t,d):zc(),Sp(t);else return i=t.lanes=536870912,vg(e,t,d!==null?d.baseLanes|n:n,n,i)}else d!==null?(Bo(t,d.cachePool),wp(t,d),pn(),t.memoizedState=null):(e!==null&&Bo(t,null),zc(),pn());return wt(e,t,c,n),t.child}function ji(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vg(e,t,n,i,c){var d=wc();return d=d===null?null:{parent:dt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Bo(t,null),zc(),Sp(t),e!==null&&yr(e,t,i,!0),t.childLanes=c,null}function Zo(e,t){return t=el({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jg(e,t,n){return qn(t,e.child,null,n),e=Zo(t,t.pendingProps),e.flags|=2,Gt(t),t.memoizedState=null,e}function N1(e,t,n){var i=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Be){if(i.mode==="hidden")return e=Zo(t,i),t.lanes=536870912,ji(null,e);if(Ec(t),(e=Je)?(e=_0(e,ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rn!==null?{id:Sa,overflow:ka}:null,retryLane:536870912,hydrationErrors:null},n=rp(e),n.return=t,t.child=n,vt=t,Je=null)):e=null,e===null)throw ln(t);return t.lanes=536870912,null}return Zo(t,i)}var d=e.memoizedState;if(d!==null){var g=d.dehydrated;if(Ec(t),c)if(t.flags&256)t.flags&=-257,t=jg(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ft||yr(e,t,n,!1),c=(n&e.childLanes)!==0,ft||c){if(i=Ge,i!==null&&(g=uf(i,n),g!==0&&g!==d.retryLane))throw d.retryLane=g,Ln(e,g),Wt(i,e,g),Jc;cl(),t=jg(e,t,n)}else e=d.treeContext,Je=ua(g.nextSibling),vt=t,Be=!0,on=null,ca=!1,e!==null&&lp(t,e),t=Zo(t,i),t.flags|=4096;return t}return e=_a(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ko(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Zc(e,t,n,i,c){return $n(t),n=Dc(e,t,n,i,void 0,c),i=_c(),e!==null&&!ft?(Oc(e,t,c),Wa(e,t,c)):(Be&&i&&pc(t),t.flags|=1,wt(e,t,n,c),t.child)}function wg(e,t,n,i,c,d){return $n(t),t.updateQueue=null,n=Np(t,i,n,c),kp(e),i=_c(),e!==null&&!ft?(Oc(e,t,d),Wa(e,t,d)):(Be&&i&&pc(t),t.flags|=1,wt(e,t,n,d),t.child)}function Sg(e,t,n,i,c){if($n(t),t.stateNode===null){var d=mr,g=n.contextType;typeof g=="object"&&g!==null&&(d=jt(g)),d=new n(i,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Xc,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=i,d.state=t.memoizedState,d.refs={},kc(t),g=n.contextType,d.context=typeof g=="object"&&g!==null?jt(g):mr,d.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Gc(t,n,g,i),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(g=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),g!==d.state&&Xc.enqueueReplaceState(d,d.state,null),hi(t,i,d,c),mi(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){d=t.stateNode;var w=t.memoizedProps,_=Pn(n,w);d.props=_;var Z=d.context,ne=n.contextType;g=mr,typeof ne=="object"&&ne!==null&&(g=jt(ne));var de=n.getDerivedStateFromProps;ne=typeof de=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,ne||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||Z!==g)&&cg(t,d,i,g),cn=!1;var ee=t.memoizedState;d.state=ee,hi(t,i,d,c),mi(),Z=t.memoizedState,w||ee!==Z||cn?(typeof de=="function"&&(Gc(t,n,de,i),Z=t.memoizedState),(_=cn||sg(t,n,_,i,ee,Z,g))?(ne||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=Z),d.props=i,d.state=Z,d.context=g,i=_):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Nc(e,t),g=t.memoizedProps,ne=Pn(n,g),d.props=ne,de=t.pendingProps,ee=d.context,Z=n.contextType,_=mr,typeof Z=="object"&&Z!==null&&(_=jt(Z)),w=n.getDerivedStateFromProps,(Z=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==de||ee!==_)&&cg(t,d,i,_),cn=!1,ee=t.memoizedState,d.state=ee,hi(t,i,d,c),mi();var ae=t.memoizedState;g!==de||ee!==ae||cn||e!==null&&e.dependencies!==null&&Oo(e.dependencies)?(typeof w=="function"&&(Gc(t,n,w,i),ae=t.memoizedState),(ne=cn||sg(t,n,ne,i,ee,ae,_)||e!==null&&e.dependencies!==null&&Oo(e.dependencies))?(Z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,ae,_),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,ae,_)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=ae),d.props=i,d.state=ae,d.context=_,i=ne):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),i=!1)}return d=i,Ko(e,t),i=(t.flags&128)!==0,d||i?(d=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&i?(t.child=qn(t,e.child,null,c),t.child=qn(t,null,n,c)):wt(e,t,n,c),t.memoizedState=d.state,e=t.child):e=Wa(e,t,c),e}function kg(e,t,n,i){return Wn(),t.flags|=256,wt(e,t,n,i),t.child}var Kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(e){return{baseLanes:e,cachePool:pp()}}function td(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function Ng(e,t,n){var i=t.pendingProps,c=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),g&&(c=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Be){if(c?fn(t):pn(),(e=Je)?(e=_0(e,ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rn!==null?{id:Sa,overflow:ka}:null,retryLane:536870912,hydrationErrors:null},n=rp(e),n.return=t,t.child=n,vt=t,Je=null)):e=null,e===null)throw ln(t);return Ld(e)?t.lanes=32:t.lanes=536870912,null}var w=i.children;return i=i.fallback,c?(pn(),c=t.mode,w=el({mode:"hidden",children:w},c),i=Un(i,c,n,null),w.return=t,i.return=t,w.sibling=i,t.child=w,i=t.child,i.memoizedState=ed(n),i.childLanes=td(e,g,n),t.memoizedState=Kc,ji(null,i)):(fn(t),ad(t,w))}var _=e.memoizedState;if(_!==null&&(w=_.dehydrated,w!==null)){if(d)t.flags&256?(fn(t),t.flags&=-257,t=nd(e,t,n)):t.memoizedState!==null?(pn(),t.child=e.child,t.flags|=128,t=null):(pn(),w=i.fallback,c=t.mode,i=el({mode:"visible",children:i.children},c),w=Un(w,c,n,null),w.flags|=2,i.return=t,w.return=t,i.sibling=w,t.child=i,qn(t,e.child,null,n),i=t.child,i.memoizedState=ed(n),i.childLanes=td(e,g,n),t.memoizedState=Kc,t=ji(null,i));else if(fn(t),Ld(w)){if(g=w.nextSibling&&w.nextSibling.dataset,g)var Z=g.dgst;g=Z,i=Error(s(419)),i.stack="",i.digest=g,ci({value:i,source:null,stack:null}),t=nd(e,t,n)}else if(ft||yr(e,t,n,!1),g=(n&e.childLanes)!==0,ft||g){if(g=Ge,g!==null&&(i=uf(g,n),i!==0&&i!==_.retryLane))throw _.retryLane=i,Ln(e,i),Wt(g,e,i),Jc;Bd(w)||cl(),t=nd(e,t,n)}else Bd(w)?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,Je=ua(w.nextSibling),vt=t,Be=!0,on=null,ca=!1,e!==null&&lp(t,e),t=ad(t,i.children),t.flags|=4096);return t}return c?(pn(),w=i.fallback,c=t.mode,_=e.child,Z=_.sibling,i=_a(_,{mode:"hidden",children:i.children}),i.subtreeFlags=_.subtreeFlags&65011712,Z!==null?w=_a(Z,w):(w=Un(w,c,n,null),w.flags|=2),w.return=t,i.return=t,i.sibling=w,t.child=i,ji(null,i),i=t.child,w=e.child.memoizedState,w===null?w=ed(n):(c=w.cachePool,c!==null?(_=dt._currentValue,c=c.parent!==_?{parent:_,pool:_}:c):c=pp(),w={baseLanes:w.baseLanes|n,cachePool:c}),i.memoizedState=w,i.childLanes=td(e,g,n),t.memoizedState=Kc,ji(e.child,i)):(fn(t),n=e.child,e=n.sibling,n=_a(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function ad(e,t){return t=el({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function el(e,t){return e=Vt(22,e,null,t),e.lanes=0,e}function nd(e,t,n){return qn(t,e.child,null,n),e=ad(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cg(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bc(e.return,t,n)}function rd(e,t,n,i,c,d){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:c,treeForkCount:d}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=i,g.tail=n,g.tailMode=c,g.treeForkCount=d)}function Tg(e,t,n){var i=t.pendingProps,c=i.revealOrder,d=i.tail;i=i.children;var g=lt.current,w=(g&2)!==0;if(w?(g=g&1|2,t.flags|=128):g&=1,N(lt,g),wt(e,t,i,n),i=Be?si:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,n,t);else if(e.tag===19)Cg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&Io(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),rd(t,!1,c,n,d,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Io(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}rd(t,!0,n,null,d,i);break;case"together":rd(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Wa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(yr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=_a(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_a(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function id(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oo(e)))}function C1(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),sn(t,dt,e.memoizedState.cache),Wn();break;case 27:case 5:Qe(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:sn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ec(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ng(e,t,n):(fn(t),e=Wa(e,t,n),e!==null?e.sibling:null);fn(t);break;case 19:var c=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(yr(e,t,n,!1),i=(n&t.childLanes)!==0),c){if(i)return Tg(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),N(lt,lt.current),i)break;return null;case 22:return t.lanes=0,yg(e,t,n,t.pendingProps);case 24:sn(t,dt,e.memoizedState.cache)}return Wa(e,t,n)}function zg(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!id(e,n)&&(t.flags&128)===0)return ft=!1,C1(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,Be&&(t.flags&1048576)!==0&&op(t,si,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Yn(t.elementType),t.type=e,typeof e=="function")dc(e)?(i=Pn(e,i),t.tag=1,t=Sg(null,t,e,i,n)):(t.tag=0,t=Zc(null,t,e,i,n));else{if(e!=null){var c=e.$$typeof;if(c===G){t.tag=11,t=hg(null,t,e,i,n);break e}else if(c===$){t.tag=14,t=xg(null,t,e,i,n);break e}}throw t=me(e)||e,Error(s(306,t,""))}}return t;case 0:return Zc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,c=Pn(i,t.pendingProps),Sg(e,t,i,c,n);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var d=t.memoizedState;c=d.element,Nc(e,t),hi(t,i,null,n);var g=t.memoizedState;if(i=g.cache,sn(t,dt,i),i!==d.cache&&yc(t,[dt],n,!0),mi(),i=g.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=kg(e,t,i,n);break e}else if(i!==c){c=oa(Error(s(424)),t),ci(c),t=kg(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Je=ua(e.firstChild),vt=t,Be=!0,on=null,ca=!0,n=yp(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),i===c){t=Wa(e,t,n);break e}wt(e,t,i,n)}t=t.child}return t;case 26:return Ko(e,t),e===null?(n=W0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Be||(n=t.type,e=t.pendingProps,i=hl(se.current).createElement(n),i[yt]=t,i[_t]=e,St(i,n,e),ht(i),t.stateNode=i):t.memoizedState=W0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Qe(t),e===null&&Be&&(i=t.stateNode=B0(t.type,t.pendingProps,se.current),vt=t,ca=!0,c=Je,jn(t.type)?(Ud=c,Je=ua(i.firstChild)):Je=c),wt(e,t,t.pendingProps.children,n),Ko(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Be&&((c=i=Je)&&(i=ay(i,t.type,t.pendingProps,ca),i!==null?(t.stateNode=i,vt=t,Je=ua(i.firstChild),ca=!1,c=!0):c=!1),c||ln(t)),Qe(t),c=t.type,d=t.pendingProps,g=e!==null?e.memoizedProps:null,i=d.children,_d(c,d)?i=null:g!==null&&_d(c,g)&&(t.flags|=32),t.memoizedState!==null&&(c=Dc(e,t,x1,null,null,n),Bi._currentValue=c),Ko(e,t),wt(e,t,i,n),t.child;case 6:return e===null&&Be&&((e=n=Je)&&(n=ny(n,t.pendingProps,ca),n!==null?(t.stateNode=n,vt=t,Je=null,e=!0):e=!1),e||ln(t)),null;case 13:return Ng(e,t,n);case 4:return be(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=qn(t,null,i,n):wt(e,t,i,n),t.child;case 11:return hg(e,t,t.type,t.pendingProps,n);case 7:return wt(e,t,t.pendingProps,n),t.child;case 8:return wt(e,t,t.pendingProps.children,n),t.child;case 12:return wt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,sn(t,t.type,i.value),wt(e,t,i.children,n),t.child;case 9:return c=t.type._context,i=t.pendingProps.children,$n(t),c=jt(c),i=i(c),t.flags|=1,wt(e,t,i,n),t.child;case 14:return xg(e,t,t.type,t.pendingProps,n);case 15:return bg(e,t,t.type,t.pendingProps,n);case 19:return Tg(e,t,n);case 31:return N1(e,t,n);case 22:return yg(e,t,n,t.pendingProps);case 24:return $n(t),i=jt(dt),e===null?(c=wc(),c===null&&(c=Ge,d=vc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=n),c=d),t.memoizedState={parent:i,cache:c},kc(t),sn(t,dt,c)):((e.lanes&n)!==0&&(Nc(e,t),hi(t,null,null,n),mi()),c=e.memoizedState,d=t.memoizedState,c.parent!==i?(c={parent:i,cache:i},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),sn(t,dt,i)):(i=d.cache,sn(t,dt,i),i!==c.cache&&yc(t,[dt],n,!0))),wt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ha(e){e.flags|=4}function od(e,t,n,i,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(t0())e.flags|=8192;else throw Fn=Uo,Sc}else e.flags&=-16777217}function Ag(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!F0(t))if(t0())e.flags|=8192;else throw Fn=Uo,Sc}function tl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?sf():536870912,e.lanes|=t,Rr|=t)}function wi(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function T1(e,t,n){var i=t.pendingProps;switch(gc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ba(dt),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(br(t)?Ha(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hc())),Ze(t),null;case 26:var c=t.type,d=t.memoizedState;return e===null?(Ha(t),d!==null?(Ze(t),Ag(t,d)):(Ze(t),od(t,c,null,i,n))):d?d!==e.memoizedState?(Ha(t),Ze(t),Ag(t,d)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ha(t),Ze(t),od(t,c,e,i,n)),null;case 27:if(at(t),n=se.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ha(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ze(t),null}e=Y.current,br(t)?sp(t):(e=B0(c,i,n),t.stateNode=e,Ha(t))}return Ze(t),null;case 5:if(at(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ha(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ze(t),null}if(d=Y.current,br(t))sp(t);else{var g=hl(se.current);switch(d){case 1:d=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=g.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?g.createElement("select",{is:i.is}):g.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?g.createElement(c,{is:i.is}):g.createElement(c)}}d[yt]=t,d[_t]=i;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)d.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=d;e:switch(St(d,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ha(t)}}return Ze(t),od(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ha(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=se.current,br(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,c=vt,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}e[yt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||N0(e.nodeValue,n)),e||ln(t,!0)}else e=hl(e).createTextNode(i),e[yt]=t,t.stateNode=e}return Ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=br(t),n!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[yt]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else n=hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Gt(t),t):(Gt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=br(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[yt]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),c=!1}else c=hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Gt(t),t):(Gt(t),null)}return Gt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==c&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),tl(t,t.updateQueue),Ze(t),null);case 4:return Ne(),e===null&&zd(t.stateNode.containerInfo),Ze(t),null;case 10:return Ba(t.type),Ze(t),null;case 19:if(T(lt),i=t.memoizedState,i===null)return Ze(t),null;if(c=(t.flags&128)!==0,d=i.rendering,d===null)if(c)wi(i,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Io(e),d!==null){for(t.flags|=128,wi(i,!1),e=d.updateQueue,t.updateQueue=e,tl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)np(n,e),n=n.sibling;return N(lt,lt.current&1|2),Be&&Oa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ke()>ol&&(t.flags|=128,c=!0,wi(i,!1),t.lanes=4194304)}else{if(!c)if(e=Io(d),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,tl(t,e),wi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Be)return Ze(t),null}else 2*Ke()-i.renderingStartTime>ol&&n!==536870912&&(t.flags|=128,c=!0,wi(i,!1),t.lanes=4194304);i.isBackwards?(d.sibling=t.child,t.child=d):(e=i.last,e!==null?e.sibling=d:t.child=d,i.last=d)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ke(),e.sibling=null,n=lt.current,N(lt,c?n&1|2:n&1),Be&&Oa(t,i.treeForkCount),e):(Ze(t),null);case 22:case 23:return Gt(t),Ac(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),n=t.updateQueue,n!==null&&tl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&T(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ba(dt),Ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function z1(e,t){switch(gc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ba(dt),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return at(t),null;case 31:if(t.memoizedState!==null){if(Gt(t),t.alternate===null)throw Error(s(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(lt),null;case 4:return Ne(),null;case 10:return Ba(t.type),null;case 22:case 23:return Gt(t),Ac(),e!==null&&T(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ba(dt),null;case 25:return null;default:return null}}function Eg(e,t){switch(gc(t),t.tag){case 3:Ba(dt),Ne();break;case 26:case 27:case 5:at(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Gt(t);break;case 13:Gt(t);break;case 19:T(lt);break;case 10:Ba(t.type);break;case 22:case 23:Gt(t),Ac(),e!==null&&T(In);break;case 24:Ba(dt)}}function Si(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var c=i.next;n=c;do{if((n.tag&e)===e){i=void 0;var d=n.create,g=n.inst;i=d(),g.destroy=i}n=n.next}while(n!==c)}}catch(w){Fe(t,t.return,w)}}function gn(e,t,n){try{var i=t.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var d=c.next;i=d;do{if((i.tag&e)===e){var g=i.inst,w=g.destroy;if(w!==void 0){g.destroy=void 0,c=t;var _=n,Z=w;try{Z()}catch(ne){Fe(c,_,ne)}}}i=i.next}while(i!==d)}}catch(ne){Fe(t,t.return,ne)}}function Rg(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jp(t,n)}catch(i){Fe(e,e.return,i)}}}function Dg(e,t,n){n.props=Pn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Fe(e,t,i)}}function ki(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(c){Fe(e,t,c)}}function Na(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(c){Fe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Fe(e,t,c)}else n.current=null}function _g(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(c){Fe(e,e.return,c)}}function ld(e,t,n){try{var i=e.stateNode;Q1(i,e.type,n,t),i[_t]=t}catch(c){Fe(e,e.return,c)}}function Og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jn(e.type)||e.tag===4}function sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ra));else if(i!==4&&(i===27&&jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(cd(e,t,n),e=e.sibling;e!==null;)cd(e,t,n),e=e.sibling}function al(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function Mg(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);St(t,i,n),t[yt]=e,t[_t]=n}catch(d){Fe(e,e.return,d)}}var $a=!1,pt=!1,dd=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,xt=null;function A1(e,t){if(e=e.containerInfo,Rd=Sl,e=Gf(e),nc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var c=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var g=0,w=-1,_=-1,Z=0,ne=0,de=e,ee=null;t:for(;;){for(var ae;de!==n||c!==0&&de.nodeType!==3||(w=g+c),de!==d||i!==0&&de.nodeType!==3||(_=g+i),de.nodeType===3&&(g+=de.nodeValue.length),(ae=de.firstChild)!==null;)ee=de,de=ae;for(;;){if(de===e)break t;if(ee===n&&++Z===c&&(w=g),ee===d&&++ne===i&&(_=g),(ae=de.nextSibling)!==null)break;de=ee,ee=de.parentNode}de=ae}n=w===-1||_===-1?null:{start:w,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dd={focusedElem:e,selectionRange:n},Sl=!1,xt=t;xt!==null;)if(t=xt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xt=e;else for(;xt!==null;){switch(t=xt,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,c=d.memoizedProps,d=d.memoizedState,i=n.stateNode;try{var je=Pn(n.type,c);e=i.getSnapshotBeforeUpdate(je,d),i.__reactInternalSnapshotBeforeUpdate=e}catch(Te){Fe(n,n.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Md(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Md(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,xt=e;break}xt=t.return}}function Lg(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ya(e,n),i&4&&Si(5,n);break;case 1:if(Ya(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Fe(n,n.return,g)}else{var c=Pn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(n,n.return,g)}}i&64&&Rg(n),i&512&&ki(n,n.return);break;case 3:if(Ya(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jp(e,t)}catch(g){Fe(n,n.return,g)}}break;case 27:t===null&&i&4&&Mg(n);case 26:case 5:Ya(e,n),t===null&&i&4&&_g(n),i&512&&ki(n,n.return);break;case 12:Ya(e,n);break;case 31:Ya(e,n),i&4&&Hg(e,n);break;case 13:Ya(e,n),i&4&&$g(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=U1.bind(null,n),ry(e,n))));break;case 22:if(i=n.memoizedState!==null||$a,!i){t=t!==null&&t.memoizedState!==null||pt,c=$a;var d=pt;$a=i,(pt=t)&&!d?Fa(e,n,(n.subtreeFlags&8772)!==0):Ya(e,n),$a=c,pt=d}break;case 30:break;default:Ya(e,n)}}function Ug(e){var t=e.alternate;t!==null&&(e.alternate=null,Ug(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var et=null,Mt=!1;function Ia(e,t,n){for(n=n.child;n!==null;)Wg(e,t,n),n=n.sibling}function Wg(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Rn,n)}catch{}switch(n.tag){case 26:pt||Na(n,t),Ia(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:pt||Na(n,t);var i=et,c=Mt;jn(n.type)&&(et=n.stateNode,Mt=!1),Ia(e,t,n),_i(n.stateNode),et=i,Mt=c;break;case 5:pt||Na(n,t);case 6:if(i=et,c=Mt,et=null,Ia(e,t,n),et=i,Mt=c,et!==null)if(Mt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(n.stateNode)}catch(d){Fe(n,t,d)}else try{et.removeChild(n.stateNode)}catch(d){Fe(n,t,d)}break;case 18:et!==null&&(Mt?(e=et,R0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Wr(e)):R0(et,n.stateNode));break;case 4:i=et,c=Mt,et=n.stateNode.containerInfo,Mt=!0,Ia(e,t,n),et=i,Mt=c;break;case 0:case 11:case 14:case 15:gn(2,n,t),pt||gn(4,n,t),Ia(e,t,n);break;case 1:pt||(Na(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Dg(n,t,i)),Ia(e,t,n);break;case 21:Ia(e,t,n);break;case 22:pt=(i=pt)||n.memoizedState!==null,Ia(e,t,n),pt=i;break;default:Ia(e,t,n)}}function Hg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wr(e)}catch(n){Fe(t,t.return,n)}}}function $g(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wr(e)}catch(n){Fe(t,t.return,n)}}function E1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bg),t;default:throw Error(s(435,e.tag))}}function nl(e,t){var n=E1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var c=W1.bind(null,e,i);i.then(c,c)}})}function Bt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var c=n[i],d=e,g=t,w=g;e:for(;w!==null;){switch(w.tag){case 27:if(jn(w.type)){et=w.stateNode,Mt=!1;break e}break;case 5:et=w.stateNode,Mt=!1;break e;case 3:case 4:et=w.stateNode.containerInfo,Mt=!0;break e}w=w.return}if(et===null)throw Error(s(160));Wg(d,g,c),et=null,Mt=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ig(t,e),t=t.sibling}var ha=null;function Ig(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bt(t,e),Lt(e),i&4&&(gn(3,e,e.return),Si(3,e),gn(5,e,e.return));break;case 1:Bt(t,e),Lt(e),i&512&&(pt||n===null||Na(n,n.return)),i&64&&$a&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var c=ha;if(Bt(t,e),Lt(e),i&512&&(pt||n===null||Na(n,n.return)),i&4){var d=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(i){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Jr]||d[yt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(i),c.head.insertBefore(d,c.querySelector("head > title"))),St(d,i,n),d[yt]=e,ht(d),i=d;break e;case"link":var g=I0("link","href",c).get(i+(n.href||""));if(g){for(var w=0;w<g.length;w++)if(d=g[w],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(w,1);break t}}d=c.createElement(i),St(d,i,n),c.head.appendChild(d);break;case"meta":if(g=I0("meta","content",c).get(i+(n.content||""))){for(w=0;w<g.length;w++)if(d=g[w],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(w,1);break t}}d=c.createElement(i),St(d,i,n),c.head.appendChild(d);break;default:throw Error(s(468,i))}d[yt]=e,ht(d),i=d}e.stateNode=i}else Y0(c,e.type,e.stateNode);else e.stateNode=$0(c,i,e.memoizedProps);else d!==i?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,i===null?Y0(c,e.type,e.stateNode):$0(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ld(e,e.memoizedProps,n.memoizedProps)}break;case 27:Bt(t,e),Lt(e),i&512&&(pt||n===null||Na(n,n.return)),n!==null&&i&4&&ld(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Bt(t,e),Lt(e),i&512&&(pt||n===null||Na(n,n.return)),e.flags&32){c=e.stateNode;try{sr(c,"")}catch(je){Fe(e,e.return,je)}}i&4&&e.stateNode!=null&&(c=e.memoizedProps,ld(e,c,n!==null?n.memoizedProps:c)),i&1024&&(dd=!0);break;case 6:if(Bt(t,e),Lt(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(je){Fe(e,e.return,je)}}break;case 3:if(yl=null,c=ha,ha=xl(t.containerInfo),Bt(t,e),ha=c,Lt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(je){Fe(e,e.return,je)}dd&&(dd=!1,Yg(e));break;case 4:i=ha,ha=xl(e.stateNode.containerInfo),Bt(t,e),Lt(e),ha=i;break;case 12:Bt(t,e),Lt(e);break;case 31:Bt(t,e),Lt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,nl(e,i)));break;case 13:Bt(t,e),Lt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(il=Ke()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,nl(e,i)));break;case 22:c=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,Z=$a,ne=pt;if($a=Z||c,pt=ne||_,Bt(t,e),pt=ne,$a=Z,Lt(e),i&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||_||$a||pt||Gn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(d=_.stateNode,c)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{w=_.stateNode;var de=_.memoizedProps.style,ee=de!=null&&de.hasOwnProperty("display")?de.display:null;w.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(je){Fe(_,_.return,je)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=c?"":_.memoizedProps}catch(je){Fe(_,_.return,je)}}}else if(t.tag===18){if(n===null){_=t;try{var ae=_.stateNode;c?D0(ae,!0):D0(_.stateNode,!1)}catch(je){Fe(_,_.return,je)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,nl(e,n))));break;case 19:Bt(t,e),Lt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,nl(e,i)));break;case 30:break;case 21:break;default:Bt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Og(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var c=n.stateNode,d=sd(e);al(e,d,c);break;case 5:var g=n.stateNode;n.flags&32&&(sr(g,""),n.flags&=-33);var w=sd(e);al(e,w,g);break;case 3:case 4:var _=n.stateNode.containerInfo,Z=sd(e);cd(e,Z,_);break;default:throw Error(s(161))}}catch(ne){Fe(e,e.return,ne)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Yg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ya(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Lg(e,t.alternate,t),t=t.sibling}function Gn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:gn(4,t,t.return),Gn(t);break;case 1:Na(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Dg(t,t.return,n),Gn(t);break;case 27:_i(t.stateNode);case 26:case 5:Na(t,t.return),Gn(t);break;case 22:t.memoizedState===null&&Gn(t);break;case 30:Gn(t);break;default:Gn(t)}e=e.sibling}}function Fa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,c=e,d=t,g=d.flags;switch(d.tag){case 0:case 11:case 15:Fa(c,d,n),Si(4,d);break;case 1:if(Fa(c,d,n),i=d,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Z){Fe(i,i.return,Z)}if(i=d,c=i.updateQueue,c!==null){var w=i.stateNode;try{var _=c.shared.hiddenCallbacks;if(_!==null)for(c.shared.hiddenCallbacks=null,c=0;c<_.length;c++)vp(_[c],w)}catch(Z){Fe(i,i.return,Z)}}n&&g&64&&Rg(d),ki(d,d.return);break;case 27:Mg(d);case 26:case 5:Fa(c,d,n),n&&i===null&&g&4&&_g(d),ki(d,d.return);break;case 12:Fa(c,d,n);break;case 31:Fa(c,d,n),n&&g&4&&Hg(c,d);break;case 13:Fa(c,d,n),n&&g&4&&$g(c,d);break;case 22:d.memoizedState===null&&Fa(c,d,n),ki(d,d.return);break;case 30:break;default:Fa(c,d,n)}t=t.sibling}}function ud(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&di(n))}function fd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&di(e))}function xa(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fg(e,t,n,i),t=t.sibling}function Fg(e,t,n,i){var c=t.flags;switch(t.tag){case 0:case 11:case 15:xa(e,t,n,i),c&2048&&Si(9,t);break;case 1:xa(e,t,n,i);break;case 3:xa(e,t,n,i),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&di(e)));break;case 12:if(c&2048){xa(e,t,n,i),e=t.stateNode;try{var d=t.memoizedProps,g=d.id,w=d.onPostCommit;typeof w=="function"&&w(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Fe(t,t.return,_)}}else xa(e,t,n,i);break;case 31:xa(e,t,n,i);break;case 13:xa(e,t,n,i);break;case 23:break;case 22:d=t.stateNode,g=t.alternate,t.memoizedState!==null?d._visibility&2?xa(e,t,n,i):Ni(e,t):d._visibility&2?xa(e,t,n,i):(d._visibility|=2,zr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),c&2048&&ud(g,t);break;case 24:xa(e,t,n,i),c&2048&&fd(t.alternate,t);break;default:xa(e,t,n,i)}}function zr(e,t,n,i,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,g=t,w=n,_=i,Z=g.flags;switch(g.tag){case 0:case 11:case 15:zr(d,g,w,_,c),Si(8,g);break;case 23:break;case 22:var ne=g.stateNode;g.memoizedState!==null?ne._visibility&2?zr(d,g,w,_,c):Ni(d,g):(ne._visibility|=2,zr(d,g,w,_,c)),c&&Z&2048&&ud(g.alternate,g);break;case 24:zr(d,g,w,_,c),c&&Z&2048&&fd(g.alternate,g);break;default:zr(d,g,w,_,c)}t=t.sibling}}function Ni(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,c=i.flags;switch(i.tag){case 22:Ni(n,i),c&2048&&ud(i.alternate,i);break;case 24:Ni(n,i),c&2048&&fd(i.alternate,i);break;default:Ni(n,i)}t=t.sibling}}var Ci=8192;function Ar(e,t,n){if(e.subtreeFlags&Ci)for(e=e.child;e!==null;)qg(e,t,n),e=e.sibling}function qg(e,t,n){switch(e.tag){case 26:Ar(e,t,n),e.flags&Ci&&e.memoizedState!==null&&hy(n,ha,e.memoizedState,e.memoizedProps);break;case 5:Ar(e,t,n);break;case 3:case 4:var i=ha;ha=xl(e.stateNode.containerInfo),Ar(e,t,n),ha=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ci,Ci=16777216,Ar(e,t,n),Ci=i):Ar(e,t,n));break;default:Ar(e,t,n)}}function Vg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];xt=i,Gg(i,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pg(e),e=e.sibling}function Pg(e){switch(e.tag){case 0:case 11:case 15:Ti(e),e.flags&2048&&gn(9,e,e.return);break;case 3:Ti(e);break;case 12:Ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,rl(e)):Ti(e);break;default:Ti(e)}}function rl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];xt=i,Gg(i,e)}Vg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gn(8,t,t.return),rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,rl(t));break;default:rl(t)}e=e.sibling}}function Gg(e,t){for(;xt!==null;){var n=xt;switch(n.tag){case 0:case 11:case 15:gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:di(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,xt=i;else e:for(n=e;xt!==null;){i=xt;var c=i.sibling,d=i.return;if(Ug(i),i===n){xt=null;break e}if(c!==null){c.return=d,xt=c;break e}xt=d}}}var R1={getCacheForType:function(e){var t=jt(dt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return jt(dt).controller.signal}},D1=typeof WeakMap=="function"?WeakMap:Map,$e=0,Ge=null,De=null,Oe=0,Ye=0,Xt=null,mn=!1,Er=!1,pd=!1,qa=0,it=0,hn=0,Xn=0,gd=0,Qt=0,Rr=0,zi=null,Ut=null,md=!1,il=0,Xg=0,ol=1/0,ll=null,xn=null,gt=0,bn=null,Dr=null,Va=0,hd=0,xd=null,Qg=null,Ai=0,bd=null;function Jt(){return($e&2)!==0&&Oe!==0?Oe&-Oe:F.T!==null?kd():ff()}function Jg(){if(Qt===0)if((Oe&536870912)===0||Be){var e=mo;mo<<=1,(mo&3932160)===0&&(mo=262144),Qt=e}else Qt=536870912;return e=Pt.current,e!==null&&(e.flags|=32),Qt}function Wt(e,t,n){(e===Ge&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(_r(e,0),yn(e,Oe,Qt,!1)),Qr(e,n),(($e&2)===0||e!==Ge)&&(e===Ge&&(($e&2)===0&&(Xn|=n),it===4&&yn(e,Oe,Qt,!1)),Ca(e))}function Zg(e,t,n){if(($e&6)!==0)throw Error(s(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Xr(e,t),c=i?M1(e,t):vd(e,t,!0),d=i;do{if(c===0){Er&&!i&&yn(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!_1(n)){c=vd(e,t,!1),d=!1;continue}if(c===2){if(d=t,e.errorRecoveryDisabledLanes&d)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var w=e;c=zi;var _=w.current.memoizedState.isDehydrated;if(_&&(_r(w,g).flags|=256),g=vd(w,g,!1),g!==2){if(pd&&!_){w.errorRecoveryDisabledLanes|=d,Xn|=d,c=4;break e}d=Ut,Ut=c,d!==null&&(Ut===null?Ut=d:Ut.push.apply(Ut,d))}c=g}if(d=!1,c!==2)continue}}if(c===1){_r(e,0),yn(e,t,0,!0);break}e:{switch(i=e,d=c,d){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yn(i,t,Qt,!mn);break e;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(c=il+300-Ke(),10<c)){if(yn(i,t,Qt,!mn),xo(i,0,!0)!==0)break e;Va=t,i.timeoutHandle=A0(Kg.bind(null,i,n,Ut,ll,md,t,Qt,Xn,Rr,mn,d,"Throttled",-0,0),c);break e}Kg(i,n,Ut,ll,md,t,Qt,Xn,Rr,mn,d,null,-0,0)}}break}while(!0);Ca(e)}function Kg(e,t,n,i,c,d,g,w,_,Z,ne,de,ee,ae){if(e.timeoutHandle=-1,de=t.subtreeFlags,de&8192||(de&16785408)===16785408){de={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ra},qg(t,d,de);var je=(d&62914560)===d?il-Ke():(d&4194048)===d?Xg-Ke():0;if(je=xy(de,je),je!==null){Va=d,e.cancelPendingCommit=je(l0.bind(null,e,t,d,n,i,c,g,w,_,ne,de,null,ee,ae)),yn(e,d,g,!Z);return}}l0(e,t,d,n,i,c,g,w,_)}function _1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var c=n[i],d=c.getSnapshot;c=c.value;try{if(!qt(d(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t,n,i){t&=~gd,t&=~Xn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var c=t;0<c;){var d=31-Ft(c),g=1<<d;i[d]=-1,c&=~g}n!==0&&cf(e,n,t)}function sl(){return($e&6)===0?(Ei(0),!1):!0}function yd(){if(De!==null){if(Ye===0)var e=De.return;else e=De,Ma=Hn=null,Mc(e),Sr=null,fi=0,e=De;for(;e!==null;)Eg(e.alternate,e),e=e.return;De=null}}function _r(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,K1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Va=0,yd(),Ge=e,De=n=_a(e.current,null),Oe=t,Ye=0,Xt=null,mn=!1,Er=Xr(e,t),pd=!1,Rr=Qt=gd=Xn=hn=it=0,Ut=zi=null,md=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var c=31-Ft(i),d=1<<c;t|=e[c],i&=~d}return qa=t,Ao(),n}function e0(e,t){Ae=null,F.H=vi,t===wr||t===Lo?(t=hp(),Ye=3):t===Sc?(t=hp(),Ye=4):Ye=t===Jc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xt=t,De===null&&(it=1,Jo(e,oa(t,e.current)))}function t0(){var e=Pt.current;return e===null?!0:(Oe&4194048)===Oe?da===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===da:!1}function a0(){var e=F.H;return F.H=vi,e===null?vi:e}function n0(){var e=F.A;return F.A=R1,e}function cl(){it=4,mn||(Oe&4194048)!==Oe&&Pt.current!==null||(Er=!0),(hn&134217727)===0&&(Xn&134217727)===0||Ge===null||yn(Ge,Oe,Qt,!1)}function vd(e,t,n){var i=$e;$e|=2;var c=a0(),d=n0();(Ge!==e||Oe!==t)&&(ll=null,_r(e,t)),t=!1;var g=it;e:do try{if(Ye!==0&&De!==null){var w=De,_=Xt;switch(Ye){case 8:yd(),g=6;break e;case 3:case 2:case 9:case 6:Pt.current===null&&(t=!0);var Z=Ye;if(Ye=0,Xt=null,Or(e,w,_,Z),n&&Er){g=0;break e}break;default:Z=Ye,Ye=0,Xt=null,Or(e,w,_,Z)}}O1(),g=it;break}catch(ne){e0(e,ne)}while(!0);return t&&e.shellSuspendCounter++,Ma=Hn=null,$e=i,F.H=c,F.A=d,De===null&&(Ge=null,Oe=0,Ao()),g}function O1(){for(;De!==null;)r0(De)}function M1(e,t){var n=$e;$e|=2;var i=a0(),c=n0();Ge!==e||Oe!==t?(ll=null,ol=Ke()+500,_r(e,t)):Er=Xr(e,t);e:do try{if(Ye!==0&&De!==null){t=De;var d=Xt;t:switch(Ye){case 1:Ye=0,Xt=null,Or(e,t,d,1);break;case 2:case 9:if(gp(d)){Ye=0,Xt=null,i0(t);break}t=function(){Ye!==2&&Ye!==9||Ge!==e||(Ye=7),Ca(e)},d.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:gp(d)?(Ye=0,Xt=null,i0(t)):(Ye=0,Xt=null,Or(e,t,d,7));break;case 5:var g=null;switch(De.tag){case 26:g=De.memoizedState;case 5:case 27:var w=De;if(g?F0(g):w.stateNode.complete){Ye=0,Xt=null;var _=w.sibling;if(_!==null)De=_;else{var Z=w.return;Z!==null?(De=Z,dl(Z)):De=null}break t}}Ye=0,Xt=null,Or(e,t,d,5);break;case 6:Ye=0,Xt=null,Or(e,t,d,6);break;case 8:yd(),it=6;break e;default:throw Error(s(462))}}B1();break}catch(ne){e0(e,ne)}while(!0);return Ma=Hn=null,F.H=i,F.A=c,$e=n,De!==null?0:(Ge=null,Oe=0,Ao(),it)}function B1(){for(;De!==null&&!nt();)r0(De)}function r0(e){var t=zg(e.alternate,e,qa);e.memoizedProps=e.pendingProps,t===null?dl(e):De=t}function i0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wg(n,t,t.pendingProps,t.type,void 0,Oe);break;case 11:t=wg(n,t,t.pendingProps,t.type.render,t.ref,Oe);break;case 5:Mc(t);default:Eg(n,t),t=De=np(t,qa),t=zg(n,t,qa)}e.memoizedProps=e.pendingProps,t===null?dl(e):De=t}function Or(e,t,n,i){Ma=Hn=null,Mc(t),Sr=null,fi=0;var c=t.return;try{if(k1(e,c,t,n,Oe)){it=1,Jo(e,oa(n,e.current)),De=null;return}}catch(d){if(c!==null)throw De=c,d;it=1,Jo(e,oa(n,e.current)),De=null;return}t.flags&32768?(Be||i===1?e=!0:Er||(Oe&536870912)!==0?e=!1:(mn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Pt.current,i!==null&&i.tag===13&&(i.flags|=16384))),o0(t,e)):dl(t)}function dl(e){var t=e;do{if((t.flags&32768)!==0){o0(t,mn);return}e=t.return;var n=T1(t.alternate,t,qa);if(n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);it===0&&(it=5)}function o0(e,t){do{var n=z1(e.alternate,e);if(n!==null){n.flags&=32767,De=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){De=e;return}De=e=n}while(e!==null);it=6,De=null}function l0(e,t,n,i,c,d,g,w,_){e.cancelPendingCommit=null;do ul();while(gt!==0);if(($e&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(d=t.lanes|t.childLanes,d|=sc,mb(e,n,d,g,w,_),e===Ge&&(De=Ge=null,Oe=0),Dr=t,bn=e,Va=n,hd=d,xd=c,Qg=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,H1(Dt,function(){return f0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=F.T,F.T=null,c=ie.p,ie.p=2,g=$e,$e|=4;try{A1(e,t,n)}finally{$e=g,ie.p=c,F.T=i}}gt=1,s0(),c0(),d0()}}function s0(){if(gt===1){gt=0;var e=bn,t=Dr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=F.T,F.T=null;var i=ie.p;ie.p=2;var c=$e;$e|=4;try{Ig(t,e);var d=Dd,g=Gf(e.containerInfo),w=d.focusedElem,_=d.selectionRange;if(g!==w&&w&&w.ownerDocument&&Pf(w.ownerDocument.documentElement,w)){if(_!==null&&nc(w)){var Z=_.start,ne=_.end;if(ne===void 0&&(ne=Z),"selectionStart"in w)w.selectionStart=Z,w.selectionEnd=Math.min(ne,w.value.length);else{var de=w.ownerDocument||document,ee=de&&de.defaultView||window;if(ee.getSelection){var ae=ee.getSelection(),je=w.textContent.length,Te=Math.min(_.start,je),Pe=_.end===void 0?Te:Math.min(_.end,je);!ae.extend&&Te>Pe&&(g=Pe,Pe=Te,Te=g);var V=Vf(w,Te),W=Vf(w,Pe);if(V&&W&&(ae.rangeCount!==1||ae.anchorNode!==V.node||ae.anchorOffset!==V.offset||ae.focusNode!==W.node||ae.focusOffset!==W.offset)){var J=de.createRange();J.setStart(V.node,V.offset),ae.removeAllRanges(),Te>Pe?(ae.addRange(J),ae.extend(W.node,W.offset)):(J.setEnd(W.node,W.offset),ae.addRange(J))}}}}for(de=[],ae=w;ae=ae.parentNode;)ae.nodeType===1&&de.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<de.length;w++){var oe=de[w];oe.element.scrollLeft=oe.left,oe.element.scrollTop=oe.top}}Sl=!!Rd,Dd=Rd=null}finally{$e=c,ie.p=i,F.T=n}}e.current=t,gt=2}}function c0(){if(gt===2){gt=0;var e=bn,t=Dr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=F.T,F.T=null;var i=ie.p;ie.p=2;var c=$e;$e|=4;try{Lg(e,t.alternate,t)}finally{$e=c,ie.p=i,F.T=n}}gt=3}}function d0(){if(gt===4||gt===3){gt=0,bt();var e=bn,t=Dr,n=Va,i=Qg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?gt=5:(gt=0,Dr=bn=null,u0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(xn=null),Us(n),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Rn,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=F.T,c=ie.p,ie.p=2,F.T=null;try{for(var d=e.onRecoverableError,g=0;g<i.length;g++){var w=i[g];d(w.value,{componentStack:w.stack})}}finally{F.T=t,ie.p=c}}(Va&3)!==0&&ul(),Ca(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===bd?Ai++:(Ai=0,bd=e):Ai=0,Ei(0)}}function u0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,di(t)))}function ul(){return s0(),c0(),d0(),f0()}function f0(){if(gt!==5)return!1;var e=bn,t=hd;hd=0;var n=Us(Va),i=F.T,c=ie.p;try{ie.p=32>n?32:n,F.T=null,n=xd,xd=null;var d=bn,g=Va;if(gt=0,Dr=bn=null,Va=0,($e&6)!==0)throw Error(s(331));var w=$e;if($e|=4,Pg(d.current),Fg(d,d.current,g,n),$e=w,Ei(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Rn,d)}catch{}return!0}finally{ie.p=c,F.T=i,u0(e,t)}}function p0(e,t,n){t=oa(n,t),t=Qc(e.stateNode,t,2),e=un(e,t,2),e!==null&&(Qr(e,2),Ca(e))}function Fe(e,t,n){if(e.tag===3)p0(e,e,n);else for(;t!==null;){if(t.tag===3){p0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xn===null||!xn.has(i))){e=oa(n,e),n=gg(2),i=un(t,n,2),i!==null&&(mg(n,i,t,e),Qr(i,2),Ca(i));break}}t=t.return}}function jd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new D1;var c=new Set;i.set(t,c)}else c=i.get(t),c===void 0&&(c=new Set,i.set(t,c));c.has(n)||(pd=!0,c.add(n),e=L1.bind(null,e,t,n),t.then(e,e))}function L1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ge===e&&(Oe&n)===n&&(it===4||it===3&&(Oe&62914560)===Oe&&300>Ke()-il?($e&2)===0&&_r(e,0):gd|=n,Rr===Oe&&(Rr=0)),Ca(e)}function g0(e,t){t===0&&(t=sf()),e=Ln(e,t),e!==null&&(Qr(e,t),Ca(e))}function U1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),g0(e,n)}function W1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),g0(e,n)}function H1(e,t){return xe(e,t)}var fl=null,Mr=null,wd=!1,pl=!1,Sd=!1,vn=0;function Ca(e){e!==Mr&&e.next===null&&(Mr===null?fl=Mr=e:Mr=Mr.next=e),pl=!0,wd||(wd=!0,I1())}function Ei(e,t){if(!Sd&&pl){Sd=!0;do for(var n=!1,i=fl;i!==null;){if(e!==0){var c=i.pendingLanes;if(c===0)var d=0;else{var g=i.suspendedLanes,w=i.pingedLanes;d=(1<<31-Ft(42|e)+1)-1,d&=c&~(g&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,b0(i,d))}else d=Oe,d=xo(i,i===Ge?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||Xr(i,d)||(n=!0,b0(i,d));i=i.next}while(n);Sd=!1}}function $1(){m0()}function m0(){pl=wd=!1;var e=0;vn!==0&&Z1()&&(e=vn);for(var t=Ke(),n=null,i=fl;i!==null;){var c=i.next,d=h0(i,t);d===0?(i.next=null,n===null?fl=c:n.next=c,c===null&&(Mr=n)):(n=i,(e!==0||(d&3)!==0)&&(pl=!0)),i=c}gt!==0&&gt!==5||Ei(e),vn!==0&&(vn=0)}function h0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var g=31-Ft(d),w=1<<g,_=c[g];_===-1?((w&n)===0||(w&i)!==0)&&(c[g]=gb(w,t)):_<=t&&(e.expiredLanes|=w),d&=~w}if(t=Ge,n=Oe,n=xo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ye(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Xr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ye(i),Us(n)){case 2:case 8:n=Rt;break;case 32:n=Dt;break;case 268435456:n=fo;break;default:n=Dt}return i=x0.bind(null,e),n=xe(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ye(i),e.callbackPriority=2,e.callbackNode=null,2}function x0(e,t){if(gt!==0&&gt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ul()&&e.callbackNode!==n)return null;var i=Oe;return i=xo(e,e===Ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Zg(e,i,t),h0(e,Ke()),e.callbackNode!=null&&e.callbackNode===n?x0.bind(null,e):null)}function b0(e,t){if(ul())return null;Zg(e,t,!0)}function I1(){ey(function(){($e&6)!==0?xe(wa,$1):m0()})}function kd(){if(vn===0){var e=vr;e===0&&(e=go,go<<=1,(go&261888)===0&&(go=256)),vn=e}return vn}function y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jo(""+e)}function v0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Y1(e,t,n,i,c){if(t==="submit"&&n&&n.stateNode===c){var d=y0((c[_t]||null).action),g=i.submitter;g&&(t=(t=g[_t]||null)?y0(t.formAction):g.getAttribute("formAction"),t!==null&&(d=t,g=null));var w=new No("action","action",null,i,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(vn!==0){var _=g?v0(c,g):new FormData(c);Fc(n,{pending:!0,data:_,method:c.method,action:d},null,_)}}else typeof d=="function"&&(w.preventDefault(),_=g?v0(c,g):new FormData(c),Fc(n,{pending:!0,data:_,method:c.method,action:d},d,_))},currentTarget:c}]})}}for(var Nd=0;Nd<lc.length;Nd++){var Cd=lc[Nd],F1=Cd.toLowerCase(),q1=Cd[0].toUpperCase()+Cd.slice(1);ma(F1,"on"+q1)}ma(Jf,"onAnimationEnd"),ma(Zf,"onAnimationIteration"),ma(Kf,"onAnimationStart"),ma("dblclick","onDoubleClick"),ma("focusin","onFocus"),ma("focusout","onBlur"),ma(l1,"onTransitionRun"),ma(s1,"onTransitionStart"),ma(c1,"onTransitionCancel"),ma(ep,"onTransitionEnd"),or("onMouseEnter",["mouseout","mouseover"]),or("onMouseLeave",["mouseout","mouseover"]),or("onPointerEnter",["pointerout","pointerover"]),or("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ri));function j0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],c=i.event;i=i.listeners;e:{var d=void 0;if(t)for(var g=i.length-1;0<=g;g--){var w=i[g],_=w.instance,Z=w.currentTarget;if(w=w.listener,_!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=Z;try{d(c)}catch(ne){zo(ne)}c.currentTarget=null,d=_}else for(g=0;g<i.length;g++){if(w=i[g],_=w.instance,Z=w.currentTarget,w=w.listener,_!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=Z;try{d(c)}catch(ne){zo(ne)}c.currentTarget=null,d=_}}}}function _e(e,t){var n=t[Ws];n===void 0&&(n=t[Ws]=new Set);var i=e+"__bubble";n.has(i)||(w0(t,e,2,!1),n.add(i))}function Td(e,t,n){var i=0;t&&(i|=4),w0(n,e,i,t)}var gl="_reactListening"+Math.random().toString(36).slice(2);function zd(e){if(!e[gl]){e[gl]=!0,mf.forEach(function(n){n!=="selectionchange"&&(V1.has(n)||Td(n,!1,e),Td(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gl]||(t[gl]=!0,Td("selectionchange",!1,t))}}function w0(e,t,n,i){switch(J0(t)){case 2:var c=vy;break;case 8:c=jy;break;default:c=Yd}n=c.bind(null,t,n,e),c=void 0,!Gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function Ad(e,t,n,i,c){var d=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var w=i.stateNode.containerInfo;if(w===c)break;if(g===4)for(g=i.return;g!==null;){var _=g.tag;if((_===3||_===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;w!==null;){if(g=nr(w),g===null)return;if(_=g.tag,_===5||_===6||_===26||_===27){i=d=g;continue e}w=w.parentNode}}i=i.return}Tf(function(){var Z=d,ne=Vs(n),de=[];e:{var ee=tp.get(e);if(ee!==void 0){var ae=No,je=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":ae=Wb;break;case"focusin":je="focus",ae=Zs;break;case"focusout":je="blur",ae=Zs;break;case"beforeblur":case"afterblur":ae=Zs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=Ib;break;case Jf:case Zf:case Kf:ae=Eb;break;case ep:ae=Fb;break;case"scroll":case"scrollend":ae=Nb;break;case"wheel":ae=Vb;break;case"copy":case"cut":case"paste":ae=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=Df;break;case"toggle":case"beforetoggle":ae=Gb}var Te=(t&4)!==0,Pe=!Te&&(e==="scroll"||e==="scrollend"),V=Te?ee!==null?ee+"Capture":null:ee;Te=[];for(var W=Z,J;W!==null;){var oe=W;if(J=oe.stateNode,oe=oe.tag,oe!==5&&oe!==26&&oe!==27||J===null||V===null||(oe=Kr(W,V),oe!=null&&Te.push(Di(W,oe,J))),Pe)break;W=W.return}0<Te.length&&(ee=new ae(ee,je,null,n,ne),de.push({event:ee,listeners:Te}))}}if((t&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",ae=e==="mouseout"||e==="pointerout",ee&&n!==qs&&(je=n.relatedTarget||n.fromElement)&&(nr(je)||je[ar]))break e;if((ae||ee)&&(ee=ne.window===ne?ne:(ee=ne.ownerDocument)?ee.defaultView||ee.parentWindow:window,ae?(je=n.relatedTarget||n.toElement,ae=Z,je=je?nr(je):null,je!==null&&(Pe=f(je),Te=je.tag,je!==Pe||Te!==5&&Te!==27&&Te!==6)&&(je=null)):(ae=null,je=Z),ae!==je)){if(Te=Ef,oe="onMouseLeave",V="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(Te=Df,oe="onPointerLeave",V="onPointerEnter",W="pointer"),Pe=ae==null?ee:Zr(ae),J=je==null?ee:Zr(je),ee=new Te(oe,W+"leave",ae,n,ne),ee.target=Pe,ee.relatedTarget=J,oe=null,nr(ne)===Z&&(Te=new Te(V,W+"enter",je,n,ne),Te.target=J,Te.relatedTarget=Pe,oe=Te),Pe=oe,ae&&je)t:{for(Te=P1,V=ae,W=je,J=0,oe=V;oe;oe=Te(oe))J++;oe=0;for(var Ce=W;Ce;Ce=Te(Ce))oe++;for(;0<J-oe;)V=Te(V),J--;for(;0<oe-J;)W=Te(W),oe--;for(;J--;){if(V===W||W!==null&&V===W.alternate){Te=V;break t}V=Te(V),W=Te(W)}Te=null}else Te=null;ae!==null&&S0(de,ee,ae,Te,!1),je!==null&&Pe!==null&&S0(de,Pe,je,Te,!0)}}e:{if(ee=Z?Zr(Z):window,ae=ee.nodeName&&ee.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ee.type==="file")var We=Hf;else if(Uf(ee))if($f)We=r1;else{We=a1;var ke=t1}else ae=ee.nodeName,!ae||ae.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?Z&&Fs(Z.elementType)&&(We=Hf):We=n1;if(We&&(We=We(e,Z))){Wf(de,We,n,ne);break e}ke&&ke(e,ee,Z),e==="focusout"&&Z&&ee.type==="number"&&Z.memoizedProps.value!=null&&Ys(ee,"number",ee.value)}switch(ke=Z?Zr(Z):window,e){case"focusin":(Uf(ke)||ke.contentEditable==="true")&&(fr=ke,rc=Z,li=null);break;case"focusout":li=rc=fr=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,Xf(de,n,ne);break;case"selectionchange":if(o1)break;case"keydown":case"keyup":Xf(de,n,ne)}var Re;if(ec)e:{switch(e){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else ur?Bf(e,n)&&(Me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Me="onCompositionStart");Me&&(_f&&n.locale!=="ko"&&(ur||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&ur&&(Re=zf()):(nn=ne,Xs="value"in nn?nn.value:nn.textContent,ur=!0)),ke=ml(Z,Me),0<ke.length&&(Me=new Rf(Me,e,null,n,ne),de.push({event:Me,listeners:ke}),Re?Me.data=Re:(Re=Lf(n),Re!==null&&(Me.data=Re)))),(Re=Qb?Jb(e,n):Zb(e,n))&&(Me=ml(Z,"onBeforeInput"),0<Me.length&&(ke=new Rf("onBeforeInput","beforeinput",null,n,ne),de.push({event:ke,listeners:Me}),ke.data=Re)),Y1(de,e,Z,n,ne)}j0(de,t)})}function Di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ml(e,t){for(var n=t+"Capture",i=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Kr(e,n),c!=null&&i.unshift(Di(e,c,d)),c=Kr(e,t),c!=null&&i.push(Di(e,c,d))),e.tag===3)return i;e=e.return}return[]}function P1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S0(e,t,n,i,c){for(var d=t._reactName,g=[];n!==null&&n!==i;){var w=n,_=w.alternate,Z=w.stateNode;if(w=w.tag,_!==null&&_===i)break;w!==5&&w!==26&&w!==27||Z===null||(_=Z,c?(Z=Kr(n,d),Z!=null&&g.unshift(Di(n,Z,_))):c||(Z=Kr(n,d),Z!=null&&g.push(Di(n,Z,_)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var G1=/\r\n?/g,X1=/\u0000|\uFFFD/g;function k0(e){return(typeof e=="string"?e:""+e).replace(G1,`
`).replace(X1,"")}function N0(e,t){return t=k0(t),k0(e)===t}function Ve(e,t,n,i,c,d){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||sr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&sr(e,""+i);break;case"className":yo(e,"class",i);break;case"tabIndex":yo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":yo(e,n,i);break;case"style":Nf(e,i,d);break;case"data":if(t!=="object"){yo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jo(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&Ve(e,t,"name",c.name,c,null),Ve(e,t,"formEncType",c.formEncType,c,null),Ve(e,t,"formMethod",c.formMethod,c,null),Ve(e,t,"formTarget",c.formTarget,c,null)):(Ve(e,t,"encType",c.encType,c,null),Ve(e,t,"method",c.method,c,null),Ve(e,t,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jo(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ra);break;case"onScroll":i!=null&&_e("scroll",e);break;case"onScrollEnd":i!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=jo(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":_e("beforetoggle",e),_e("toggle",e),bo(e,"popover",i);break;case"xlinkActuate":Ea(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ea(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ea(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ea(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ea(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ea(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ea(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ea(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ea(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":bo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Sb.get(n)||n,bo(e,n,i))}}function Ed(e,t,n,i,c,d){switch(n){case"style":Nf(e,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof i=="string"?sr(e,i):(typeof i=="number"||typeof i=="bigint")&&sr(e,""+i);break;case"onScroll":i!=null&&_e("scroll",e);break;case"onScrollEnd":i!=null&&_e("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),d=e[_t]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,c),typeof i=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,c);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):bo(e,n,i)}}}function St(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var i=!1,c=!1,d;for(d in n)if(n.hasOwnProperty(d)){var g=n[d];if(g!=null)switch(d){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ve(e,t,d,g,n,null)}}c&&Ve(e,t,"srcSet",n.srcSet,n,null),i&&Ve(e,t,"src",n.src,n,null);return;case"input":_e("invalid",e);var w=d=g=c=null,_=null,Z=null;for(i in n)if(n.hasOwnProperty(i)){var ne=n[i];if(ne!=null)switch(i){case"name":c=ne;break;case"type":g=ne;break;case"checked":_=ne;break;case"defaultChecked":Z=ne;break;case"value":d=ne;break;case"defaultValue":w=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,t));break;default:Ve(e,t,i,ne,n,null)}}jf(e,d,w,_,Z,g,c,!1);return;case"select":_e("invalid",e),i=g=d=null;for(c in n)if(n.hasOwnProperty(c)&&(w=n[c],w!=null))switch(c){case"value":d=w;break;case"defaultValue":g=w;break;case"multiple":i=w;default:Ve(e,t,c,w,n,null)}t=d,n=g,e.multiple=!!i,t!=null?lr(e,!!i,t,!1):n!=null&&lr(e,!!i,n,!0);return;case"textarea":_e("invalid",e),d=c=i=null;for(g in n)if(n.hasOwnProperty(g)&&(w=n[g],w!=null))switch(g){case"value":i=w;break;case"defaultValue":c=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ve(e,t,g,w,n,null)}Sf(e,i,c,d);return;case"option":for(_ in n)n.hasOwnProperty(_)&&(i=n[_],i!=null)&&(_==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ve(e,t,_,i,n,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(i=0;i<Ri.length;i++)_e(Ri[i],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in n)if(n.hasOwnProperty(Z)&&(i=n[Z],i!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ve(e,t,Z,i,n,null)}return;default:if(Fs(t)){for(ne in n)n.hasOwnProperty(ne)&&(i=n[ne],i!==void 0&&Ed(e,t,ne,i,n,void 0));return}}for(w in n)n.hasOwnProperty(w)&&(i=n[w],i!=null&&Ve(e,t,w,i,n,null))}function Q1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,g=null,w=null,_=null,Z=null,ne=null;for(ae in n){var de=n[ae];if(n.hasOwnProperty(ae)&&de!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":_=de;default:i.hasOwnProperty(ae)||Ve(e,t,ae,null,i,de)}}for(var ee in i){var ae=i[ee];if(de=n[ee],i.hasOwnProperty(ee)&&(ae!=null||de!=null))switch(ee){case"type":d=ae;break;case"name":c=ae;break;case"checked":Z=ae;break;case"defaultChecked":ne=ae;break;case"value":g=ae;break;case"defaultValue":w=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,t));break;default:ae!==de&&Ve(e,t,ee,ae,i,de)}}Is(e,g,w,_,Z,ne,d,c);return;case"select":ae=g=w=ee=null;for(d in n)if(_=n[d],n.hasOwnProperty(d)&&_!=null)switch(d){case"value":break;case"multiple":ae=_;default:i.hasOwnProperty(d)||Ve(e,t,d,null,i,_)}for(c in i)if(d=i[c],_=n[c],i.hasOwnProperty(c)&&(d!=null||_!=null))switch(c){case"value":ee=d;break;case"defaultValue":w=d;break;case"multiple":g=d;default:d!==_&&Ve(e,t,c,d,i,_)}t=w,n=g,i=ae,ee!=null?lr(e,!!n,ee,!1):!!i!=!!n&&(t!=null?lr(e,!!n,t,!0):lr(e,!!n,n?[]:"",!1));return;case"textarea":ae=ee=null;for(w in n)if(c=n[w],n.hasOwnProperty(w)&&c!=null&&!i.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ve(e,t,w,null,i,c)}for(g in i)if(c=i[g],d=n[g],i.hasOwnProperty(g)&&(c!=null||d!=null))switch(g){case"value":ee=c;break;case"defaultValue":ae=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&Ve(e,t,g,c,i,d)}wf(e,ee,ae);return;case"option":for(var je in n)ee=n[je],n.hasOwnProperty(je)&&ee!=null&&!i.hasOwnProperty(je)&&(je==="selected"?e.selected=!1:Ve(e,t,je,null,i,ee));for(_ in i)ee=i[_],ae=n[_],i.hasOwnProperty(_)&&ee!==ae&&(ee!=null||ae!=null)&&(_==="selected"?e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Ve(e,t,_,ee,i,ae));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in n)ee=n[Te],n.hasOwnProperty(Te)&&ee!=null&&!i.hasOwnProperty(Te)&&Ve(e,t,Te,null,i,ee);for(Z in i)if(ee=i[Z],ae=n[Z],i.hasOwnProperty(Z)&&ee!==ae&&(ee!=null||ae!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,t));break;default:Ve(e,t,Z,ee,i,ae)}return;default:if(Fs(t)){for(var Pe in n)ee=n[Pe],n.hasOwnProperty(Pe)&&ee!==void 0&&!i.hasOwnProperty(Pe)&&Ed(e,t,Pe,void 0,i,ee);for(ne in i)ee=i[ne],ae=n[ne],!i.hasOwnProperty(ne)||ee===ae||ee===void 0&&ae===void 0||Ed(e,t,ne,ee,i,ae);return}}for(var V in n)ee=n[V],n.hasOwnProperty(V)&&ee!=null&&!i.hasOwnProperty(V)&&Ve(e,t,V,null,i,ee);for(de in i)ee=i[de],ae=n[de],!i.hasOwnProperty(de)||ee===ae||ee==null&&ae==null||Ve(e,t,de,ee,i,ae)}function C0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var c=n[i],d=c.transferSize,g=c.initiatorType,w=c.duration;if(d&&w&&C0(g)){for(g=0,w=c.responseEnd,i+=1;i<n.length;i++){var _=n[i],Z=_.startTime;if(Z>w)break;var ne=_.transferSize,de=_.initiatorType;ne&&C0(de)&&(_=_.responseEnd,g+=ne*(_<w?1:(w-Z)/(_-Z)))}if(--i,t+=8*(d+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rd=null,Dd=null;function hl(e){return e.nodeType===9?e:e.ownerDocument}function T0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _d(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Od=null;function Z1(){var e=window.event;return e&&e.type==="popstate"?e===Od?!1:(Od=e,!0):(Od=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,K1=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(ty)}:A0;function ty(e){setTimeout(function(){throw e})}function jn(e){return e==="head"}function R0(e,t){var n=t,i=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(c),Wr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")_i(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_i(n);for(var d=n.firstChild;d;){var g=d.nextSibling,w=d.nodeName;d[Jr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=g}}else n==="body"&&_i(e.ownerDocument.body);n=c}while(n);Wr(t)}function D0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Md(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Md(n),Hs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ay(e,t,n,i){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Jr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ua(e.nextSibling),e===null)break}return null}function ny(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ua(e.nextSibling),e===null))return null;return e}function _0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ua(e.nextSibling),e===null))return null;return e}function Bd(e){return e.data==="$?"||e.data==="$~"}function Ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ry(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ua(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ud=null;function O0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ua(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function M0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function B0(e,t,n){switch(t=hl(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _i(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hs(e)}var fa=new Map,L0=new Set;function xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pa=ie.d;ie.d={f:iy,r:oy,D:ly,C:sy,L:cy,m:dy,X:fy,S:uy,M:py};function iy(){var e=Pa.f(),t=sl();return e||t}function oy(e){var t=rr(e);t!==null&&t.tag===5&&t.type==="form"?eg(t):Pa.r(e)}var Br=typeof document>"u"?null:document;function U0(e,t,n){var i=Br;if(i&&typeof t=="string"&&t){var c=ra(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),L0.has(c)||(L0.add(c),e={rel:e,crossOrigin:n,href:t},i.querySelector(c)===null&&(t=i.createElement("link"),St(t,"link",e),ht(t),i.head.appendChild(t)))}}function ly(e){Pa.D(e),U0("dns-prefetch",e,null)}function sy(e,t){Pa.C(e,t),U0("preconnect",e,t)}function cy(e,t,n){Pa.L(e,t,n);var i=Br;if(i&&e&&t){var c='link[rel="preload"][as="'+ra(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+ra(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+ra(n.imageSizes)+'"]')):c+='[href="'+ra(e)+'"]';var d=c;switch(t){case"style":d=Lr(e);break;case"script":d=Ur(e)}fa.has(d)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),fa.set(d,e),i.querySelector(c)!==null||t==="style"&&i.querySelector(Oi(d))||t==="script"&&i.querySelector(Mi(d))||(t=i.createElement("link"),St(t,"link",e),ht(t),i.head.appendChild(t)))}}function dy(e,t){Pa.m(e,t);var n=Br;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+ra(i)+'"][href="'+ra(e)+'"]',d=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ur(e)}if(!fa.has(d)&&(e=v({rel:"modulepreload",href:e},t),fa.set(d,e),n.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Mi(d)))return}i=n.createElement("link"),St(i,"link",e),ht(i),n.head.appendChild(i)}}}function uy(e,t,n){Pa.S(e,t,n);var i=Br;if(i&&e){var c=ir(i).hoistableStyles,d=Lr(e);t=t||"default";var g=c.get(d);if(!g){var w={loading:0,preload:null};if(g=i.querySelector(Oi(d)))w.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=fa.get(d))&&Wd(e,n);var _=g=i.createElement("link");ht(_),St(_,"link",e),_._p=new Promise(function(Z,ne){_.onload=Z,_.onerror=ne}),_.addEventListener("load",function(){w.loading|=1}),_.addEventListener("error",function(){w.loading|=2}),w.loading|=4,bl(g,t,i)}g={type:"stylesheet",instance:g,count:1,state:w},c.set(d,g)}}}function fy(e,t){Pa.X(e,t);var n=Br;if(n&&e){var i=ir(n).hoistableScripts,c=Ur(e),d=i.get(c);d||(d=n.querySelector(Mi(c)),d||(e=v({src:e,async:!0},t),(t=fa.get(c))&&Hd(e,t),d=n.createElement("script"),ht(d),St(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function py(e,t){Pa.M(e,t);var n=Br;if(n&&e){var i=ir(n).hoistableScripts,c=Ur(e),d=i.get(c);d||(d=n.querySelector(Mi(c)),d||(e=v({src:e,async:!0,type:"module"},t),(t=fa.get(c))&&Hd(e,t),d=n.createElement("script"),ht(d),St(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function W0(e,t,n,i){var c=(c=se.current)?xl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Lr(n.href),n=ir(c).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Lr(n.href);var d=ir(c).hoistableStyles,g=d.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,g),(d=c.querySelector(Oi(e)))&&!d._p&&(g.instance=d,g.state.loading=5),fa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},fa.set(e,n),d||gy(c,e,n,g.state))),t&&i===null)throw Error(s(528,""));return g}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ur(n),n=ir(c).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Lr(e){return'href="'+ra(e)+'"'}function Oi(e){return'link[rel="stylesheet"]['+e+"]"}function H0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function gy(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),St(t,"link",n),ht(t),e.head.appendChild(t))}function Ur(e){return'[src="'+ra(e)+'"]'}function Mi(e){return"script[async]"+e}function $0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ra(n.href)+'"]');if(i)return t.instance=i,ht(i),i;var c=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ht(i),St(i,"style",c),bl(i,n.precedence,e),t.instance=i;case"stylesheet":c=Lr(n.href);var d=e.querySelector(Oi(c));if(d)return t.state.loading|=4,t.instance=d,ht(d),d;i=H0(n),(c=fa.get(c))&&Wd(i,c),d=(e.ownerDocument||e).createElement("link"),ht(d);var g=d;return g._p=new Promise(function(w,_){g.onload=w,g.onerror=_}),St(d,"link",i),t.state.loading|=4,bl(d,n.precedence,e),t.instance=d;case"script":return d=Ur(n.src),(c=e.querySelector(Mi(d)))?(t.instance=c,ht(c),c):(i=n,(c=fa.get(d))&&(i=v({},n),Hd(i,c)),e=e.ownerDocument||e,c=e.createElement("script"),ht(c),St(c,"link",i),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,bl(i,n.precedence,e));return t.instance}function bl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,d=c,g=0;g<i.length;g++){var w=i[g];if(w.dataset.precedence===t)d=w;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yl=null;function I0(e,t,n){if(yl===null){var i=new Map,c=yl=new Map;c.set(n,i)}else c=yl,i=c.get(n),i||(i=new Map,c.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var d=n[c];if(!(d[Jr]||d[yt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var g=d.getAttribute(t)||"";g=e+g;var w=i.get(g);w?w.push(d):i.set(g,[d])}}return i}function Y0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function my(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function F0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hy(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Lr(i.href),d=t.querySelector(Oi(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=d,ht(d);return}d=t.ownerDocument||t,i=H0(i),(c=fa.get(c))&&Wd(i,c),d=d.createElement("link"),ht(d);var g=d;g._p=new Promise(function(w,_){g.onload=w,g.onerror=_}),St(d,"link",i),n.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var $d=0;function xy(e,t){return e.stylesheets&&e.count===0&&wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&wl(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&$d===0&&($d=62500*J1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wl(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>$d?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jl=null;function wl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jl=new Map,t.forEach(by,e),jl=null,vl.call(e))}function by(e,t){if(!(t.state.loading&4)){var n=jl.get(e);if(n)var i=n.get(null);else{n=new Map,jl.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var g=c[d];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),i=g)}i&&n.set(null,i)}c=t.instance,g=c.getAttribute("data-precedence"),d=n.get(g)||i,d===i&&n.set(null,c),n.set(g,c),this.count++,i=vl.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Bi={$$typeof:B,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function yy(e,t,n,i,c,d,g,w,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bs(0),this.hiddenUpdates=Bs(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function q0(e,t,n,i,c,d,g,w,_,Z,ne,de){return e=new yy(e,t,n,g,_,Z,ne,de,w),t=1,d===!0&&(t|=24),d=Vt(3,null,null,t),e.current=d,d.stateNode=e,t=vc(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:i,isDehydrated:n,cache:t},kc(d),e}function V0(e){return e?(e=mr,e):mr}function P0(e,t,n,i,c,d){c=V0(c),i.context===null?i.context=c:i.pendingContext=c,i=dn(t),i.payload={element:n},d=d===void 0?null:d,d!==null&&(i.callback=d),n=un(e,i,t),n!==null&&(Wt(n,e,t),gi(n,e,t))}function G0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Id(e,t){G0(e,t),(e=e.alternate)&&G0(e,t)}function X0(e){if(e.tag===13||e.tag===31){var t=Ln(e,67108864);t!==null&&Wt(t,e,67108864),Id(e,67108864)}}function Q0(e){if(e.tag===13||e.tag===31){var t=Jt();t=Ls(t);var n=Ln(e,t);n!==null&&Wt(n,e,t),Id(e,t)}}var Sl=!0;function vy(e,t,n,i){var c=F.T;F.T=null;var d=ie.p;try{ie.p=2,Yd(e,t,n,i)}finally{ie.p=d,F.T=c}}function jy(e,t,n,i){var c=F.T;F.T=null;var d=ie.p;try{ie.p=8,Yd(e,t,n,i)}finally{ie.p=d,F.T=c}}function Yd(e,t,n,i){if(Sl){var c=Fd(i);if(c===null)Ad(e,t,i,kl,n),Z0(e,i);else if(Sy(c,e,t,n,i))i.stopPropagation();else if(Z0(e,i),t&4&&-1<wy.indexOf(e)){for(;c!==null;){var d=rr(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var g=Dn(d.pendingLanes);if(g!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;g;){var _=1<<31-Ft(g);w.entanglements[1]|=_,g&=~_}Ca(d),($e&6)===0&&(ol=Ke()+500,Ei(0))}}break;case 31:case 13:w=Ln(d,2),w!==null&&Wt(w,d,2),sl(),Id(d,2)}if(d=Fd(i),d===null&&Ad(e,t,i,kl,n),d===c)break;c=d}c!==null&&i.stopPropagation()}else Ad(e,t,i,null,n)}}function Fd(e){return e=Vs(e),qd(e)}var kl=null;function qd(e){if(kl=null,e=nr(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return kl=e,null}function J0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ja()){case wa:return 2;case Rt:return 8;case Dt:case Os:return 32;case fo:return 268435456;default:return 32}default:return 32}}var Vd=!1,wn=null,Sn=null,kn=null,Li=new Map,Ui=new Map,Nn=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(t.pointerId)}}function Wi(e,t,n,i,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:d,targetContainers:[c]},t!==null&&(t=rr(t),t!==null&&X0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Sy(e,t,n,i,c){switch(t){case"focusin":return wn=Wi(wn,e,t,n,i,c),!0;case"dragenter":return Sn=Wi(Sn,e,t,n,i,c),!0;case"mouseover":return kn=Wi(kn,e,t,n,i,c),!0;case"pointerover":var d=c.pointerId;return Li.set(d,Wi(Li.get(d)||null,e,t,n,i,c)),!0;case"gotpointercapture":return d=c.pointerId,Ui.set(d,Wi(Ui.get(d)||null,e,t,n,i,c)),!0}return!1}function K0(e){var t=nr(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,pf(e.priority,function(){Q0(n)});return}}else if(t===31){if(t=x(n),t!==null){e.blockedOn=t,pf(e.priority,function(){Q0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);qs=i,n.target.dispatchEvent(i),qs=null}else return t=rr(n),t!==null&&X0(t),e.blockedOn=n,!1;t.shift()}return!0}function em(e,t,n){Nl(e)&&n.delete(t)}function ky(){Vd=!1,wn!==null&&Nl(wn)&&(wn=null),Sn!==null&&Nl(Sn)&&(Sn=null),kn!==null&&Nl(kn)&&(kn=null),Li.forEach(em),Ui.forEach(em)}function Cl(e,t){e.blockedOn===t&&(e.blockedOn=null,Vd||(Vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ky)))}var Tl=null;function tm(e){Tl!==e&&(Tl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tl===e&&(Tl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],c=e[t+2];if(typeof i!="function"){if(qd(i||n)===null)continue;break}var d=rr(n);d!==null&&(e.splice(t,3),t-=3,Fc(d,{pending:!0,data:c,method:n.method,action:i},i,c))}}))}function Wr(e){function t(_){return Cl(_,e)}wn!==null&&Cl(wn,e),Sn!==null&&Cl(Sn,e),kn!==null&&Cl(kn,e),Li.forEach(t),Ui.forEach(t);for(var n=0;n<Nn.length;n++){var i=Nn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)K0(n),n.blockedOn===null&&Nn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var c=n[i],d=n[i+1],g=c[_t]||null;if(typeof d=="function")g||tm(n);else if(g){var w=null;if(d&&d.hasAttribute("formAction")){if(c=d,g=d[_t]||null)w=g.formAction;else if(qd(c)!==null)continue}else w=g.action;typeof w=="function"?n[i+1]=w:(n.splice(i,3),i-=3),tm(n)}}}function am(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Pd(e){this._internalRoot=e}zl.prototype.render=Pd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=Jt();P0(n,i,e,t,null,null)},zl.prototype.unmount=Pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;P0(e.current,2,null,e,null,null),sl(),t[ar]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&K0(e)}};var nm=o.version;if(nm!=="19.2.3")throw Error(s(527,nm,"19.2.3"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Ny={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Rn=Al.inject(Ny),ct=Al}catch{}}return $i.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,i="",c=dg,d=ug,g=fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=q0(e,1,!1,null,null,n,i,null,c,d,g,am),e[ar]=t.current,zd(e),new Pd(t)},$i.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var i=!1,c="",d=dg,g=ug,w=fg,_=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.formState!==void 0&&(_=n.formState)),t=q0(e,1,!0,t,n??null,i,c,_,d,g,w,am),t.context=V0(null),n=t.current,i=Jt(),i=Ls(i),c=dn(i),c.callback=null,un(n,c,i),n=i,t.current.lanes=n,Qr(t,n),Ca(t),e[ar]=t.current,zd(e),new zl(t)},$i.version="19.2.3",$i}var pm;function My(){if(pm)return Qd.exports;pm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Qd.exports=Oy(),Qd.exports}var By=My();const Ly=Oh(By);var gm="popstate";function Uy(r={}){function o(s,u){let{pathname:f,search:p,hash:x}=s.location;return ju("",{pathname:f,search:p,hash:x},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(s,u){return typeof u=="string"?u:Gi(u)}return Hy(o,l,null,r)}function tt(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function pa(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Wy(){return Math.random().toString(36).substring(2,10)}function mm(r,o){return{usr:r.state,key:r.key,idx:o}}function ju(r,o,l=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?Fr(o):o,state:l,key:o&&o.key||s||Wy()}}function Gi({pathname:r="/",search:o="",hash:l=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),l&&l!=="#"&&(r+=l.charAt(0)==="#"?l:"#"+l),r}function Fr(r){let o={};if(r){let l=r.indexOf("#");l>=0&&(o.hash=r.substring(l),r=r.substring(0,l));let s=r.indexOf("?");s>=0&&(o.search=r.substring(s),r=r.substring(0,s)),r&&(o.pathname=r)}return o}function Hy(r,o,l,s={}){let{window:u=document.defaultView,v5Compat:f=!1}=s,p=u.history,x="POP",h=null,m=y();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function y(){return(p.state||{idx:null}).idx}function v(){x="POP";let E=y(),R=E==null?null:E-m;m=E,h&&h({action:x,location:z.location,delta:R})}function M(E,R){x="PUSH";let C=ju(z.location,E,R);m=y()+1;let B=mm(C,m),G=z.createHref(C);try{p.pushState(B,"",G)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;u.location.assign(G)}f&&h&&h({action:x,location:z.location,delta:1})}function A(E,R){x="REPLACE";let C=ju(z.location,E,R);m=y();let B=mm(C,m),G=z.createHref(C);p.replaceState(B,"",G),f&&h&&h({action:x,location:z.location,delta:0})}function S(E){return $y(E)}let z={get action(){return x},get location(){return r(u,p)},listen(E){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(gm,v),h=E,()=>{u.removeEventListener(gm,v),h=null}},createHref(E){return o(u,E)},createURL:S,encodeLocation(E){let R=S(E);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:M,replace:A,go(E){return p.go(E)}};return z}function $y(r,o=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),tt(l,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Gi(r);return s=s.replace(/ $/,"%20"),!o&&s.startsWith("//")&&(s=l+s),new URL(s,l)}function Mh(r,o,l="/"){return Iy(r,o,l,!1)}function Iy(r,o,l,s){let u=typeof o=="string"?Fr(o):o,f=Za(u.pathname||"/",l);if(f==null)return null;let p=Bh(r);Yy(p);let x=null;for(let h=0;x==null&&h<p.length;++h){let m=e2(f);x=Zy(p[h],m,s)}return x}function Bh(r,o=[],l=[],s="",u=!1){let f=(p,x,h=u,m)=>{let y={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:x,route:p};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&h)return;tt(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let v=Qa([s,y.relativePath]),M=l.concat(y);p.children&&p.children.length>0&&(tt(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Bh(p.children,o,M,v,h)),!(p.path==null&&!p.index)&&o.push({path:v,score:Qy(v,p.index),routesMeta:M})};return r.forEach((p,x)=>{if(p.path===""||!p.path?.includes("?"))f(p,x);else for(let h of Lh(p.path))f(p,x,!0,h)}),o}function Lh(r){let o=r.split("/");if(o.length===0)return[];let[l,...s]=o,u=l.endsWith("?"),f=l.replace(/\?$/,"");if(s.length===0)return u?[f,""]:[f];let p=Lh(s.join("/")),x=[];return x.push(...p.map(h=>h===""?f:[f,h].join("/"))),u&&x.push(...p),x.map(h=>r.startsWith("/")&&h===""?"/":h)}function Yy(r){r.sort((o,l)=>o.score!==l.score?l.score-o.score:Jy(o.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}var Fy=/^:[\w-]+$/,qy=3,Vy=2,Py=1,Gy=10,Xy=-2,hm=r=>r==="*";function Qy(r,o){let l=r.split("/"),s=l.length;return l.some(hm)&&(s+=Xy),o&&(s+=Vy),l.filter(u=>!hm(u)).reduce((u,f)=>u+(Fy.test(f)?qy:f===""?Py:Gy),s)}function Jy(r,o){return r.length===o.length&&r.slice(0,-1).every((s,u)=>s===o[u])?r[r.length-1]-o[o.length-1]:0}function Zy(r,o,l=!1){let{routesMeta:s}=r,u={},f="/",p=[];for(let x=0;x<s.length;++x){let h=s[x],m=x===s.length-1,y=f==="/"?o:o.slice(f.length)||"/",v=Gl({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},y),M=h.route;if(!v&&m&&l&&!s[s.length-1].route.index&&(v=Gl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!v)return null;Object.assign(u,v.params),p.push({params:u,pathname:Qa([f,v.pathname]),pathnameBase:r2(Qa([f,v.pathnameBase])),route:M}),v.pathnameBase!=="/"&&(f=Qa([f,v.pathnameBase]))}return p}function Gl(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[l,s]=Ky(r.path,r.caseSensitive,r.end),u=o.match(l);if(!u)return null;let f=u[0],p=f.replace(/(.)\/+$/,"$1"),x=u.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:v},M)=>{if(y==="*"){let S=x[M]||"";p=f.slice(0,f.length-S.length).replace(/(.)\/+$/,"$1")}const A=x[M];return v&&!A?m[y]=void 0:m[y]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:p,pattern:r}}function Ky(r,o=!1,l=!0){pa(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,x,h)=>(s.push({paramName:x,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),s]}function e2(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return pa(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function Za(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let l=o.endsWith("/")?o.length-1:o.length,s=r.charAt(l);return s&&s!=="/"?null:r.slice(l)||"/"}var Uh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,t2=r=>Uh.test(r);function a2(r,o="/"){let{pathname:l,search:s="",hash:u=""}=typeof r=="string"?Fr(r):r,f;if(l)if(t2(l))f=l;else{if(l.includes("//")){let p=l;l=l.replace(/\/\/+/g,"/"),pa(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${l}`)}l.startsWith("/")?f=xm(l.substring(1),"/"):f=xm(l,o)}else f=o;return{pathname:f,search:i2(s),hash:o2(u)}}function xm(r,o){let l=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function eu(r,o,l,s){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function n2(r){return r.filter((o,l)=>l===0||o.route.path&&o.route.path.length>0)}function Yu(r){let o=n2(r);return o.map((l,s)=>s===o.length-1?l.pathname:l.pathnameBase)}function Fu(r,o,l,s=!1){let u;typeof r=="string"?u=Fr(r):(u={...r},tt(!u.pathname||!u.pathname.includes("?"),eu("?","pathname","search",u)),tt(!u.pathname||!u.pathname.includes("#"),eu("#","pathname","hash",u)),tt(!u.search||!u.search.includes("#"),eu("#","search","hash",u)));let f=r===""||u.pathname==="",p=f?"/":u.pathname,x;if(p==null)x=l;else{let v=o.length-1;if(!s&&p.startsWith("..")){let M=p.split("/");for(;M[0]==="..";)M.shift(),v-=1;u.pathname=M.join("/")}x=v>=0?o[v]:"/"}let h=a2(u,x),m=p&&p!=="/"&&p.endsWith("/"),y=(f||p===".")&&l.endsWith("/");return!h.pathname.endsWith("/")&&(m||y)&&(h.pathname+="/"),h}var Qa=r=>r.join("/").replace(/\/\/+/g,"/"),r2=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),i2=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,o2=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,l2=class{constructor(r,o,l,s=!1){this.status=r,this.statusText=o||"",this.internal=s,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function s2(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function c2(r){return r.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Wh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hh(r,o){let l=r;if(typeof l!="string"||!Uh.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let s=l,u=!1;if(Wh)try{let f=new URL(window.location.href),p=l.startsWith("//")?new URL(f.protocol+l):new URL(l),x=Za(p.pathname,o);p.origin===f.origin&&x!=null?l=x+p.search+p.hash:u=!0}catch{pa(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:u,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $h=["POST","PUT","PATCH","DELETE"];new Set($h);var d2=["GET",...$h];new Set(d2);var qr=b.createContext(null);qr.displayName="DataRouter";var ms=b.createContext(null);ms.displayName="DataRouterState";var u2=b.createContext(!1),Ih=b.createContext({isTransitioning:!1});Ih.displayName="ViewTransition";var f2=b.createContext(new Map);f2.displayName="Fetchers";var p2=b.createContext(null);p2.displayName="Await";var ea=b.createContext(null);ea.displayName="Navigation";var eo=b.createContext(null);eo.displayName="Location";var ga=b.createContext({outlet:null,matches:[],isDataRoute:!1});ga.displayName="Route";var qu=b.createContext(null);qu.displayName="RouteError";var Yh="REACT_ROUTER_ERROR",g2="REDIRECT",m2="ROUTE_ERROR_RESPONSE";function h2(r){if(r.startsWith(`${Yh}:${g2}:{`))try{let o=JSON.parse(r.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function x2(r){if(r.startsWith(`${Yh}:${m2}:{`))try{let o=JSON.parse(r.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new l2(o.status,o.statusText,o.data)}catch{}}function b2(r,{relative:o}={}){tt(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:s}=b.useContext(ea),{hash:u,pathname:f,search:p}=to(r,{relative:o}),x=f;return l!=="/"&&(x=f==="/"?l:Qa([l,f])),s.createHref({pathname:x,search:p,hash:u})}function Vr(){return b.useContext(eo)!=null}function Aa(){return tt(Vr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(eo).location}var Fh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qh(r){b.useContext(ea).static||b.useLayoutEffect(r)}function mt(){let{isDataRoute:r}=b.useContext(ga);return r?O2():y2()}function y2(){tt(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let r=b.useContext(qr),{basename:o,navigator:l}=b.useContext(ea),{matches:s}=b.useContext(ga),{pathname:u}=Aa(),f=JSON.stringify(Yu(s)),p=b.useRef(!1);return qh(()=>{p.current=!0}),b.useCallback((h,m={})=>{if(pa(p.current,Fh),!p.current)return;if(typeof h=="number"){l.go(h);return}let y=Fu(h,JSON.parse(f),u,m.relative==="path");r==null&&o!=="/"&&(y.pathname=y.pathname==="/"?o:Qa([o,y.pathname])),(m.replace?l.replace:l.push)(y,m.state,m)},[o,l,f,u,r])}var v2=b.createContext(null);function j2(r){let o=b.useContext(ga).outlet;return b.useMemo(()=>o&&b.createElement(v2.Provider,{value:r},o),[o,r])}function w2(){let{matches:r}=b.useContext(ga),o=r[r.length-1];return o?o.params:{}}function to(r,{relative:o}={}){let{matches:l}=b.useContext(ga),{pathname:s}=Aa(),u=JSON.stringify(Yu(l));return b.useMemo(()=>Fu(r,JSON.parse(u),s,o==="path"),[r,u,s,o])}function S2(r,o){return Vh(r,o)}function Vh(r,o,l,s,u){tt(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=b.useContext(ea),{matches:p}=b.useContext(ga),x=p[p.length-1],h=x?x.params:{},m=x?x.pathname:"/",y=x?x.pathnameBase:"/",v=x&&x.route;{let C=v&&v.path||"";Gh(m,!v||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let M=Aa(),A;if(o){let C=typeof o=="string"?Fr(o):o;tt(y==="/"||C.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${C.pathname}" was given in the \`location\` prop.`),A=C}else A=M;let S=A.pathname||"/",z=S;if(y!=="/"){let C=y.replace(/^\//,"").split("/");z="/"+S.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=Mh(r,{pathname:z});pa(v||E!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),pa(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=z2(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},h,C.params),pathname:Qa([y,f.encodeLocation?f.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?y:Qa([y,f.encodeLocation?f.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),p,l,s,u);return o&&R?b.createElement(eo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},R):R}function k2(){let r=_2(),o=s2(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),l=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",r),p=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},o),l?b.createElement("pre",{style:u},l):null,p)}var N2=b.createElement(k2,null),Ph=class extends b.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){this.props.onError?this.props.onError(r,o):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const l=x2(r.digest);l&&(r=l)}let o=r!==void 0?b.createElement(ga.Provider,{value:this.props.routeContext},b.createElement(qu.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?b.createElement(C2,{error:r},o):o}};Ph.contextType=u2;var tu=new WeakMap;function C2({children:r,error:o}){let{basename:l}=b.useContext(ea);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let s=h2(o.digest);if(s){let u=tu.get(o);if(u)throw u;let f=Hh(s.location,l);if(Wh&&!tu.get(o))if(f.isExternal||s.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:s.replace}));throw tu.set(o,p),p}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return r}function T2({routeContext:r,match:o,children:l}){let s=b.useContext(qr);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),b.createElement(ga.Provider,{value:r},l)}function z2(r,o=[],l=null,s=null,u=null){if(r==null){if(!l)return null;if(l.errors)r=l.matches;else if(o.length===0&&!l.initialized&&l.matches.length>0)r=l.matches;else return null}let f=r,p=l?.errors;if(p!=null){let y=f.findIndex(v=>v.route.id&&p?.[v.route.id]!==void 0);tt(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,y+1))}let x=!1,h=-1;if(l)for(let y=0;y<f.length;y++){let v=f[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=y),v.route.id){let{loaderData:M,errors:A}=l,S=v.route.loader&&!M.hasOwnProperty(v.route.id)&&(!A||A[v.route.id]===void 0);if(v.route.lazy||S){x=!0,h>=0?f=f.slice(0,h+1):f=[f[0]];break}}}let m=l&&s?(y,v)=>{s(y,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:c2(l.matches),errorInfo:v})}:void 0;return f.reduceRight((y,v,M)=>{let A,S=!1,z=null,E=null;l&&(A=p&&v.route.id?p[v.route.id]:void 0,z=v.route.errorElement||N2,x&&(h<0&&M===0?(Gh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):h===M&&(S=!0,E=v.route.hydrateFallbackElement||null)));let R=o.concat(f.slice(0,M+1)),C=()=>{let B;return A?B=z:S?B=E:v.route.Component?B=b.createElement(v.route.Component,null):v.route.element?B=v.route.element:B=y,b.createElement(T2,{match:v,routeContext:{outlet:y,matches:R,isDataRoute:l!=null},children:B})};return l&&(v.route.ErrorBoundary||v.route.errorElement||M===0)?b.createElement(Ph,{location:l.location,revalidation:l.revalidation,component:z,error:A,children:C(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:m}):C()},null)}function Vu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A2(r){let o=b.useContext(qr);return tt(o,Vu(r)),o}function E2(r){let o=b.useContext(ms);return tt(o,Vu(r)),o}function R2(r){let o=b.useContext(ga);return tt(o,Vu(r)),o}function Pu(r){let o=R2(r),l=o.matches[o.matches.length-1];return tt(l.route.id,`${r} can only be used on routes that contain a unique "id"`),l.route.id}function D2(){return Pu("useRouteId")}function _2(){let r=b.useContext(qu),o=E2("useRouteError"),l=Pu("useRouteError");return r!==void 0?r:o.errors?.[l]}function O2(){let{router:r}=A2("useNavigate"),o=Pu("useNavigate"),l=b.useRef(!1);return qh(()=>{l.current=!0}),b.useCallback(async(u,f={})=>{pa(l.current,Fh),l.current&&(typeof u=="number"?await r.navigate(u):await r.navigate(u,{fromRouteId:o,...f}))},[r,o])}var bm={};function Gh(r,o,l){!o&&!bm[r]&&(bm[r]=!0,pa(!1,l))}b.memo(M2);function M2({routes:r,future:o,state:l,onError:s}){return Vh(r,void 0,l,s,o)}function Gu({to:r,replace:o,state:l,relative:s}){tt(Vr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=b.useContext(ea);pa(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=b.useContext(ga),{pathname:p}=Aa(),x=mt(),h=Fu(r,Yu(f),p,s==="path"),m=JSON.stringify(h);return b.useEffect(()=>{x(JSON.parse(m),{replace:o,state:l,relative:s})},[x,m,s,o,l]),null}function B2(r){return j2(r.context)}function ot(r){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function L2({basename:r="/",children:o=null,location:l,navigationType:s="POP",navigator:u,static:f=!1,unstable_useTransitions:p}){tt(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=r.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:x,navigator:u,static:f,unstable_useTransitions:p,future:{}}),[x,u,f,p]);typeof l=="string"&&(l=Fr(l));let{pathname:m="/",search:y="",hash:v="",state:M=null,key:A="default"}=l,S=b.useMemo(()=>{let z=Za(m,x);return z==null?null:{location:{pathname:z,search:y,hash:v,state:M,key:A},navigationType:s}},[x,m,y,v,M,A,s]);return pa(S!=null,`<Router basename="${x}"> is not able to match the URL "${m}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:b.createElement(ea.Provider,{value:h},b.createElement(eo.Provider,{children:o,value:S}))}function U2({children:r,location:o}){return S2(wu(r),o)}function wu(r,o=[]){let l=[];return b.Children.forEach(r,(s,u)=>{if(!b.isValidElement(s))return;let f=[...o,u];if(s.type===b.Fragment){l.push.apply(l,wu(s.props.children,f));return}tt(s.type===ot,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=wu(s.props.children,f)),l.push(p)}),l}var $l="get",Il="application/x-www-form-urlencoded";function hs(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function W2(r){return hs(r)&&r.tagName.toLowerCase()==="button"}function H2(r){return hs(r)&&r.tagName.toLowerCase()==="form"}function $2(r){return hs(r)&&r.tagName.toLowerCase()==="input"}function I2(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Y2(r,o){return r.button===0&&(!o||o==="_self")&&!I2(r)}var El=null;function F2(){if(El===null)try{new FormData(document.createElement("form"),0),El=!1}catch{El=!0}return El}var q2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function au(r){return r!=null&&!q2.has(r)?(pa(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Il}"`),null):r}function V2(r,o){let l,s,u,f,p;if(H2(r)){let x=r.getAttribute("action");s=x?Za(x,o):null,l=r.getAttribute("method")||$l,u=au(r.getAttribute("enctype"))||Il,f=new FormData(r)}else if(W2(r)||$2(r)&&(r.type==="submit"||r.type==="image")){let x=r.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||x.getAttribute("action");if(s=h?Za(h,o):null,l=r.getAttribute("formmethod")||x.getAttribute("method")||$l,u=au(r.getAttribute("formenctype"))||au(x.getAttribute("enctype"))||Il,f=new FormData(x,r),!F2()){let{name:m,type:y,value:v}=r;if(y==="image"){let M=m?`${m}.`:"";f.append(`${M}x`,"0"),f.append(`${M}y`,"0")}else m&&f.append(m,v)}}else{if(hs(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=$l,s=null,u=Il,p=r}return f&&u==="text/plain"&&(p=f,f=void 0),{action:s,method:l.toLowerCase(),encType:u,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xu(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function P2(r,o,l,s){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return l?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${s}`:u.pathname=`${u.pathname}.${s}`:u.pathname==="/"?u.pathname=`_root.${s}`:o&&Za(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${s}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${s}`,u}async function G2(r,o){if(r.id in o)return o[r.id];try{let l=await import(r.module);return o[r.id]=l,l}catch(l){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function X2(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Q2(r,o,l){let s=await Promise.all(r.map(async u=>{let f=o.routes[u.route.id];if(f){let p=await G2(f,l);return p.links?p.links():[]}return[]}));return ev(s.flat(1).filter(X2).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function ym(r,o,l,s,u,f){let p=(h,m)=>l[m]?h.route.id!==l[m].route.id:!0,x=(h,m)=>l[m].pathname!==h.pathname||l[m].route.path?.endsWith("*")&&l[m].params["*"]!==h.params["*"];return f==="assets"?o.filter((h,m)=>p(h,m)||x(h,m)):f==="data"?o.filter((h,m)=>{let y=s.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(p(h,m)||x(h,m))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function J2(r,o,{includeHydrateFallback:l}={}){return Z2(r.map(s=>{let u=o.routes[s.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function Z2(r){return[...new Set(r)]}function K2(r){let o={},l=Object.keys(r).sort();for(let s of l)o[s]=r[s];return o}function ev(r,o){let l=new Set;return new Set(o),r.reduce((s,u)=>{let f=JSON.stringify(K2(u));return l.has(f)||(l.add(f),s.push({key:f,link:u})),s},[])}function Xh(){let r=b.useContext(qr);return Xu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function tv(){let r=b.useContext(ms);return Xu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Qu=b.createContext(void 0);Qu.displayName="FrameworkContext";function Qh(){let r=b.useContext(Qu);return Xu(r,"You must render this element inside a <HydratedRouter> element"),r}function av(r,o){let l=b.useContext(Qu),[s,u]=b.useState(!1),[f,p]=b.useState(!1),{onFocus:x,onBlur:h,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=o,M=b.useRef(null);b.useEffect(()=>{if(r==="render"&&p(!0),r==="viewport"){let z=R=>{R.forEach(C=>{p(C.isIntersecting)})},E=new IntersectionObserver(z,{threshold:.5});return M.current&&E.observe(M.current),()=>{E.disconnect()}}},[r]),b.useEffect(()=>{if(s){let z=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(z)}}},[s]);let A=()=>{u(!0)},S=()=>{u(!1),p(!1)};return l?r!=="intent"?[f,M,{}]:[f,M,{onFocus:Ii(x,A),onBlur:Ii(h,S),onMouseEnter:Ii(m,A),onMouseLeave:Ii(y,S),onTouchStart:Ii(v,A)}]:[!1,M,{}]}function Ii(r,o){return l=>{r&&r(l),l.defaultPrevented||o(l)}}function nv({page:r,...o}){let{router:l}=Xh(),s=b.useMemo(()=>Mh(l.routes,r,l.basename),[l.routes,r,l.basename]);return s?b.createElement(iv,{page:r,matches:s,...o}):null}function rv(r){let{manifest:o,routeModules:l}=Qh(),[s,u]=b.useState([]);return b.useEffect(()=>{let f=!1;return Q2(r,o,l).then(p=>{f||u(p)}),()=>{f=!0}},[r,o,l]),s}function iv({page:r,matches:o,...l}){let s=Aa(),{future:u,manifest:f,routeModules:p}=Qh(),{basename:x}=Xh(),{loaderData:h,matches:m}=tv(),y=b.useMemo(()=>ym(r,o,m,f,s,"data"),[r,o,m,f,s]),v=b.useMemo(()=>ym(r,o,m,f,s,"assets"),[r,o,m,f,s]),M=b.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let z=new Set,E=!1;if(o.forEach(C=>{let B=f.routes[C.route.id];!B||!B.hasLoader||(!y.some(G=>G.route.id===C.route.id)&&C.route.id in h&&p[C.route.id]?.shouldRevalidate||B.hasClientLoader?E=!0:z.add(C.route.id))}),z.size===0)return[];let R=P2(r,x,u.unstable_trailingSlashAwareDataRequests,"data");return E&&z.size>0&&R.searchParams.set("_routes",o.filter(C=>z.has(C.route.id)).map(C=>C.route.id).join(",")),[R.pathname+R.search]},[x,u.unstable_trailingSlashAwareDataRequests,h,s,f,y,o,r,p]),A=b.useMemo(()=>J2(v,f),[v,f]),S=rv(v);return b.createElement(b.Fragment,null,M.map(z=>b.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...l})),A.map(z=>b.createElement("link",{key:z,rel:"modulepreload",href:z,...l})),S.map(({key:z,link:E})=>b.createElement("link",{key:z,nonce:l.nonce,...E})))}function ov(...r){return o=>{r.forEach(l=>{typeof l=="function"?l(o):l!=null&&(l.current=o)})}}var lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lv&&(window.__reactRouterVersion="7.12.0")}catch{}function sv({basename:r,children:o,unstable_useTransitions:l,window:s}){let u=b.useRef();u.current==null&&(u.current=Uy({window:s,v5Compat:!0}));let f=u.current,[p,x]=b.useState({action:f.action,location:f.location}),h=b.useCallback(m=>{l===!1?x(m):b.startTransition(()=>x(m))},[l]);return b.useLayoutEffect(()=>f.listen(h),[f,h]),b.createElement(L2,{basename:r,children:o,location:p.location,navigationType:p.action,navigator:f,unstable_useTransitions:l})}var Jh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xl=b.forwardRef(function({onClick:o,discover:l="render",prefetch:s="none",relative:u,reloadDocument:f,replace:p,state:x,target:h,to:m,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:M,...A},S){let{basename:z,unstable_useTransitions:E}=b.useContext(ea),R=typeof m=="string"&&Jh.test(m),C=Hh(m,z);m=C.to;let B=b2(m,{relative:u}),[G,U,O]=av(s,A),$=uv(m,{replace:p,state:x,target:h,preventScrollReset:y,relative:u,viewTransition:v,unstable_defaultShouldRevalidate:M,unstable_useTransitions:E});function Q(ge){o&&o(ge),ge.defaultPrevented||$(ge)}let ue=b.createElement("a",{...A,...O,href:C.absoluteURL||B,onClick:C.isExternal||f?o:Q,ref:ov(S,U),target:h,"data-discover":!R&&l==="render"?"true":void 0});return G&&!R?b.createElement(b.Fragment,null,ue,b.createElement(nv,{page:B})):ue});Xl.displayName="Link";var Ht=b.forwardRef(function({"aria-current":o="page",caseSensitive:l=!1,className:s="",end:u=!1,style:f,to:p,viewTransition:x,children:h,...m},y){let v=to(p,{relative:m.relative}),M=Aa(),A=b.useContext(ms),{navigator:S,basename:z}=b.useContext(ea),E=A!=null&&hv(v)&&x===!0,R=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,C=M.pathname,B=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;l||(C=C.toLowerCase(),B=B?B.toLowerCase():null,R=R.toLowerCase()),B&&z&&(B=Za(B,z)||B);const G=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let U=C===R||!u&&C.startsWith(R)&&C.charAt(G)==="/",O=B!=null&&(B===R||!u&&B.startsWith(R)&&B.charAt(R.length)==="/"),$={isActive:U,isPending:O,isTransitioning:E},Q=U?o:void 0,ue;typeof s=="function"?ue=s($):ue=[s,U?"active":null,O?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let ge=typeof f=="function"?f($):f;return b.createElement(Xl,{...m,"aria-current":Q,className:ue,ref:y,style:ge,to:p,viewTransition:x},typeof h=="function"?h($):h)});Ht.displayName="NavLink";var cv=b.forwardRef(({discover:r="render",fetcherKey:o,navigate:l,reloadDocument:s,replace:u,state:f,method:p=$l,action:x,onSubmit:h,relative:m,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:M,...A},S)=>{let{unstable_useTransitions:z}=b.useContext(ea),E=gv(),R=mv(x,{relative:m}),C=p.toLowerCase()==="get"?"get":"post",B=typeof x=="string"&&Jh.test(x),G=U=>{if(h&&h(U),U.defaultPrevented)return;U.preventDefault();let O=U.nativeEvent.submitter,$=O?.getAttribute("formmethod")||p,Q=()=>E(O||U.currentTarget,{fetcherKey:o,method:$,navigate:l,replace:u,state:f,relative:m,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:M});z&&l!==!1?b.startTransition(()=>Q()):Q()};return b.createElement("form",{ref:S,method:C,action:R,onSubmit:s?h:G,...A,"data-discover":!B&&r==="render"?"true":void 0})});cv.displayName="Form";function dv(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zh(r){let o=b.useContext(qr);return tt(o,dv(r)),o}function uv(r,{target:o,replace:l,state:s,preventScrollReset:u,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:x,unstable_useTransitions:h}={}){let m=mt(),y=Aa(),v=to(r,{relative:f});return b.useCallback(M=>{if(Y2(M,o)){M.preventDefault();let A=l!==void 0?l:Gi(y)===Gi(v),S=()=>m(r,{replace:A,state:s,preventScrollReset:u,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:x});h?b.startTransition(()=>S()):S()}},[y,m,v,l,s,o,r,u,f,p,x,h])}var fv=0,pv=()=>`__${String(++fv)}__`;function gv(){let{router:r}=Zh("useSubmit"),{basename:o}=b.useContext(ea),l=D2(),s=r.fetch,u=r.navigate;return b.useCallback(async(f,p={})=>{let{action:x,method:h,encType:m,formData:y,body:v}=V2(f,o);if(p.navigate===!1){let M=p.fetcherKey||pv();await s(M,l,p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:v,formMethod:p.method||h,formEncType:p.encType||m,flushSync:p.flushSync})}else await u(p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:v,formMethod:p.method||h,formEncType:p.encType||m,replace:p.replace,state:p.state,fromRouteId:l,flushSync:p.flushSync,viewTransition:p.viewTransition})},[s,u,o,l])}function mv(r,{relative:o}={}){let{basename:l}=b.useContext(ea),s=b.useContext(ga);tt(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),f={...to(r||".",{relative:o})},p=Aa();if(r==null){f.search=p.search;let x=new URLSearchParams(f.search),h=x.getAll("index");if(h.some(y=>y==="")){x.delete("index"),h.filter(v=>v).forEach(v=>x.append("index",v));let y=x.toString();f.search=y?`?${y}`:""}}return(!r||r===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:Qa([l,f.pathname])),Gi(f)}function hv(r,{relative:o}={}){let l=b.useContext(Ih);tt(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Zh("useViewTransitionState"),u=to(r,{relative:o});if(!l.isTransitioning)return!1;let f=Za(l.currentLocation.pathname,s)||l.currentLocation.pathname,p=Za(l.nextLocation.pathname,s)||l.nextLocation.pathname;return Gl(u.pathname,p)!=null||Gl(u.pathname,f)!=null}var nu={exports:{}},ru={};var vm;function xv(){if(vm)return ru;vm=1;var r=gs();function o(h,m){return h===m&&(h!==0||1/h===1/m)||h!==h&&m!==m}var l=typeof Object.is=="function"?Object.is:o,s=r.useSyncExternalStore,u=r.useRef,f=r.useEffect,p=r.useMemo,x=r.useDebugValue;return ru.useSyncExternalStoreWithSelector=function(h,m,y,v,M){var A=u(null);if(A.current===null){var S={hasValue:!1,value:null};A.current=S}else S=A.current;A=p(function(){function E(U){if(!R){if(R=!0,C=U,U=v(U),M!==void 0&&S.hasValue){var O=S.value;if(M(O,U))return B=O}return B=U}if(O=B,l(C,U))return O;var $=v(U);return M!==void 0&&M(O,$)?(C=U,O):(C=U,B=$)}var R=!1,C,B,G=y===void 0?null:y;return[function(){return E(m())},G===null?void 0:function(){return E(G())}]},[m,y,v,M]);var z=s(h,A[0],A[1]);return f(function(){S.hasValue=!0,S.value=z},[z]),x(z),z},ru}var jm;function bv(){return jm||(jm=1,nu.exports=xv()),nu.exports}var yv=bv();function vv(r){r()}function jv(){let r=null,o=null;return{clear(){r=null,o=null},notify(){vv(()=>{let l=r;for(;l;)l.callback(),l=l.next})},get(){const l=[];let s=r;for(;s;)l.push(s),s=s.next;return l},subscribe(l){let s=!0;const u=o={callback:l,next:null,prev:o};return u.prev?u.prev.next=u:r=u,function(){!s||r===null||(s=!1,u.next?u.next.prev=u.prev:o=u.prev,u.prev?u.prev.next=u.next:r=u.next)}}}}var wm={notify(){},get:()=>[]};function wv(r,o){let l,s=wm,u=0,f=!1;function p(z){y();const E=s.subscribe(z);let R=!1;return()=>{R||(R=!0,E(),v())}}function x(){s.notify()}function h(){S.onStateChange&&S.onStateChange()}function m(){return f}function y(){u++,l||(l=r.subscribe(h),s=jv())}function v(){u--,l&&u===0&&(l(),l=void 0,s.clear(),s=wm)}function M(){f||(f=!0,y())}function A(){f&&(f=!1,v())}const S={addNestedSub:p,notifyNestedSubs:x,handleChangeWrapper:h,isSubscribed:m,trySubscribe:M,tryUnsubscribe:A,getListeners:()=>s};return S}var Sv=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kv=Sv(),Nv=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Cv=Nv(),Tv=()=>kv||Cv?b.useLayoutEffect:b.useEffect,zv=Tv(),Av=Symbol.for("react-redux-context"),Ev=typeof globalThis<"u"?globalThis:{};function Rv(){if(!b.createContext)return{};const r=Ev[Av]??=new Map;let o=r.get(b.createContext);return o||(o=b.createContext(null),r.set(b.createContext,o)),o}var An=Rv();function Dv(r){const{children:o,context:l,serverState:s,store:u}=r,f=b.useMemo(()=>{const h=wv(u);return{store:u,subscription:h,getServerState:s?()=>s:void 0}},[u,s]),p=b.useMemo(()=>u.getState(),[u]);zv(()=>{const{subscription:h}=f;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),p!==u.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[f,p]);const x=l||An;return b.createElement(x.Provider,{value:f},o)}var _v=Dv;function Ju(r=An){return function(){return b.useContext(r)}}var Kh=Ju();function ex(r=An){const o=r===An?Kh:Ju(r),l=()=>{const{store:s}=o();return s};return Object.assign(l,{withTypes:()=>l}),l}var Ov=ex();function Mv(r=An){const o=r===An?Ov:ex(r),l=()=>o().dispatch;return Object.assign(l,{withTypes:()=>l}),l}var ao=Mv(),Bv=(r,o)=>r===o;function Lv(r=An){const o=r===An?Kh:Ju(r),l=(s,u={})=>{const{equalityFn:f=Bv}=typeof u=="function"?{equalityFn:u}:u,p=o(),{store:x,subscription:h,getServerState:m}=p;b.useRef(!0);const y=b.useCallback({[s.name](M){return s(M)}}[s.name],[s]),v=yv.useSyncExternalStoreWithSelector(h.addNestedSub,x.getState,m||x.getState,y,f);return b.useDebugValue(v),v};return Object.assign(l,{withTypes:()=>l}),l}var xs=Lv();function kt(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var Uv=typeof Symbol=="function"&&Symbol.observable||"@@observable",Sm=Uv,iu=()=>Math.random().toString(36).substring(7).split("").join("."),Wv={INIT:`@@redux/INIT${iu()}`,REPLACE:`@@redux/REPLACE${iu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${iu()}`},Ql=Wv;function Zu(r){if(typeof r!="object"||r===null)return!1;let o=r;for(;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return Object.getPrototypeOf(r)===o||Object.getPrototypeOf(r)===null}function tx(r,o,l){if(typeof r!="function")throw new Error(kt(2));if(typeof o=="function"&&typeof l=="function"||typeof l=="function"&&typeof arguments[3]=="function")throw new Error(kt(0));if(typeof o=="function"&&typeof l>"u"&&(l=o,o=void 0),typeof l<"u"){if(typeof l!="function")throw new Error(kt(1));return l(tx)(r,o)}let s=r,u=o,f=new Map,p=f,x=0,h=!1;function m(){p===f&&(p=new Map,f.forEach((E,R)=>{p.set(R,E)}))}function y(){if(h)throw new Error(kt(3));return u}function v(E){if(typeof E!="function")throw new Error(kt(4));if(h)throw new Error(kt(5));let R=!0;m();const C=x++;return p.set(C,E),function(){if(R){if(h)throw new Error(kt(6));R=!1,m(),p.delete(C),f=null}}}function M(E){if(!Zu(E))throw new Error(kt(7));if(typeof E.type>"u")throw new Error(kt(8));if(typeof E.type!="string")throw new Error(kt(17));if(h)throw new Error(kt(9));try{h=!0,u=s(u,E)}finally{h=!1}return(f=p).forEach(C=>{C()}),E}function A(E){if(typeof E!="function")throw new Error(kt(10));s=E,M({type:Ql.REPLACE})}function S(){const E=v;return{subscribe(R){if(typeof R!="object"||R===null)throw new Error(kt(11));function C(){const G=R;G.next&&G.next(y())}return C(),{unsubscribe:E(C)}},[Sm](){return this}}}return M({type:Ql.INIT}),{dispatch:M,subscribe:v,getState:y,replaceReducer:A,[Sm]:S}}function Hv(r){Object.keys(r).forEach(o=>{const l=r[o];if(typeof l(void 0,{type:Ql.INIT})>"u")throw new Error(kt(12));if(typeof l(void 0,{type:Ql.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(kt(13))})}function $v(r){const o=Object.keys(r),l={};for(let f=0;f<o.length;f++){const p=o[f];typeof r[p]=="function"&&(l[p]=r[p])}const s=Object.keys(l);let u;try{Hv(l)}catch(f){u=f}return function(p={},x){if(u)throw u;let h=!1;const m={};for(let y=0;y<s.length;y++){const v=s[y],M=l[v],A=p[v],S=M(A,x);if(typeof S>"u")throw x&&x.type,new Error(kt(14));m[v]=S,h=h||S!==A}return h=h||s.length!==Object.keys(p).length,h?m:p}}function Jl(...r){return r.length===0?o=>o:r.length===1?r[0]:r.reduce((o,l)=>(...s)=>o(l(...s)))}function Iv(...r){return o=>(l,s)=>{const u=o(l,s);let f=()=>{throw new Error(kt(15))};const p={getState:u.getState,dispatch:(h,...m)=>f(h,...m)},x=r.map(h=>h(p));return f=Jl(...x)(u.dispatch),{...u,dispatch:f}}}function Yv(r){return Zu(r)&&"type"in r&&typeof r.type=="string"}var ax=Symbol.for("immer-nothing"),km=Symbol.for("immer-draftable"),Et=Symbol.for("immer-state");function ba(r,...o){throw new Error(`[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`)}var Kt=Object,Ir=Kt.getPrototypeOf,Zl="constructor",bs="prototype",Su="configurable",Kl="enumerable",Yl="writable",Xi="value",Ka=r=>!!r&&!!r[Et];function ya(r){return r?nx(r)||vs(r)||!!r[km]||!!r[Zl]?.[km]||js(r)||ws(r):!1}var Fv=Kt[bs][Zl].toString(),Nm=new WeakMap;function nx(r){if(!r||!Ku(r))return!1;const o=Ir(r);if(o===null||o===Kt[bs])return!0;const l=Kt.hasOwnProperty.call(o,Zl)&&o[Zl];if(l===Object)return!0;if(!$r(l))return!1;let s=Nm.get(l);return s===void 0&&(s=Function.toString.call(l),Nm.set(l,s)),s===Fv}function ys(r,o,l=!0){no(r)===0?(l?Reflect.ownKeys(r):Kt.keys(r)).forEach(u=>{o(u,r[u],r)}):r.forEach((s,u)=>o(u,s,r))}function no(r){const o=r[Et];return o?o.type_:vs(r)?1:js(r)?2:ws(r)?3:0}var Cm=(r,o,l=no(r))=>l===2?r.has(o):Kt[bs].hasOwnProperty.call(r,o),ku=(r,o,l=no(r))=>l===2?r.get(o):r[o],es=(r,o,l,s=no(r))=>{s===2?r.set(o,l):s===3?r.add(l):r[o]=l};function qv(r,o){return r===o?r!==0||1/r===1/o:r!==r&&o!==o}var vs=Array.isArray,js=r=>r instanceof Map,ws=r=>r instanceof Set,Ku=r=>typeof r=="object",$r=r=>typeof r=="function",ou=r=>typeof r=="boolean";function Vv(r){const o=+r;return Number.isInteger(o)&&String(o)===r}var Xa=r=>r.copy_||r.base_,ef=r=>r.modified_?r.copy_:r.base_;function Nu(r,o){if(js(r))return new Map(r);if(ws(r))return new Set(r);if(vs(r))return Array[bs].slice.call(r);const l=nx(r);if(o===!0||o==="class_only"&&!l){const s=Kt.getOwnPropertyDescriptors(r);delete s[Et];let u=Reflect.ownKeys(s);for(let f=0;f<u.length;f++){const p=u[f],x=s[p];x[Yl]===!1&&(x[Yl]=!0,x[Su]=!0),(x.get||x.set)&&(s[p]={[Su]:!0,[Yl]:!0,[Kl]:x[Kl],[Xi]:r[p]})}return Kt.create(Ir(r),s)}else{const s=Ir(r);if(s!==null&&l)return{...r};const u=Kt.create(s);return Kt.assign(u,r)}}function tf(r,o=!1){return Ss(r)||Ka(r)||!ya(r)||(no(r)>1&&Kt.defineProperties(r,{set:Rl,add:Rl,clear:Rl,delete:Rl}),Kt.freeze(r),o&&ys(r,(l,s)=>{tf(s,!0)},!1)),r}function Pv(){ba(2)}var Rl={[Xi]:Pv};function Ss(r){return r===null||!Ku(r)?!0:Kt.isFrozen(r)}var ts="MapSet",Cu="Patches",Tm="ArrayMethods",rx={};function Kn(r){const o=rx[r];return o||ba(0,r),o}var zm=r=>!!rx[r],Qi,ix=()=>Qi,Gv=(r,o)=>({drafts_:[],parent_:r,immer_:o,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:zm(ts)?Kn(ts):void 0,arrayMethodsPlugin_:zm(Tm)?Kn(Tm):void 0});function Am(r,o){o&&(r.patchPlugin_=Kn(Cu),r.patches_=[],r.inversePatches_=[],r.patchListener_=o)}function Tu(r){zu(r),r.drafts_.forEach(Xv),r.drafts_=null}function zu(r){r===Qi&&(Qi=r.parent_)}var Em=r=>Qi=Gv(Qi,r);function Xv(r){const o=r[Et];o.type_===0||o.type_===1?o.revoke_():o.revoked_=!0}function Rm(r,o){o.unfinalizedDrafts_=o.drafts_.length;const l=o.drafts_[0];if(r!==void 0&&r!==l){l[Et].modified_&&(Tu(o),ba(4)),ya(r)&&(r=Dm(o,r));const{patchPlugin_:u}=o;u&&u.generateReplacementPatches_(l[Et].base_,r,o)}else r=Dm(o,l);return Qv(o,r,!0),Tu(o),o.patches_&&o.patchListener_(o.patches_,o.inversePatches_),r!==ax?r:void 0}function Dm(r,o){if(Ss(o))return o;const l=o[Et];if(!l)return as(o,r.handledSet_,r);if(!ks(l,r))return o;if(!l.modified_)return l.base_;if(!l.finalized_){const{callbacks_:s}=l;if(s)for(;s.length>0;)s.pop()(r);sx(l,r)}return l.copy_}function Qv(r,o,l=!1){!r.parent_&&r.immer_.autoFreeze_&&r.canAutoFreeze_&&tf(o,l)}function ox(r){r.finalized_=!0,r.scope_.unfinalizedDrafts_--}var ks=(r,o)=>r.scope_===o,Jv=[];function lx(r,o,l,s){const u=Xa(r),f=r.type_;if(s!==void 0&&ku(u,s,f)===o){es(u,s,l,f);return}if(!r.draftLocations_){const x=r.draftLocations_=new Map;ys(u,(h,m)=>{if(Ka(m)){const y=x.get(m)||[];y.push(h),x.set(m,y)}})}const p=r.draftLocations_.get(o)??Jv;for(const x of p)es(u,x,l,f)}function Zv(r,o,l){r.callbacks_.push(function(u){const f=o;if(!f||!ks(f,u))return;u.mapSetPlugin_?.fixSetContents(f);const p=ef(f);lx(r,f.draft_??f,p,l),sx(f,u)})}function sx(r,o){if(r.modified_&&!r.finalized_&&(r.type_===3||r.type_===1&&r.allIndicesReassigned_||(r.assigned_?.size??0)>0)){const{patchPlugin_:s}=o;if(s){const u=s.getPath(r);u&&s.generatePatches_(r,u,o)}ox(r)}}function Kv(r,o,l){const{scope_:s}=r;if(Ka(l)){const u=l[Et];ks(u,s)&&u.callbacks_.push(function(){Fl(r);const p=ef(u);lx(r,l,p,o)})}else ya(l)&&r.callbacks_.push(function(){const f=Xa(r);r.type_===3?f.has(l)&&as(l,s.handledSet_,s):ku(f,o,r.type_)===l&&s.drafts_.length>1&&(r.assigned_.get(o)??!1)===!0&&r.copy_&&as(ku(r.copy_,o,r.type_),s.handledSet_,s)})}function as(r,o,l){return!l.immer_.autoFreeze_&&l.unfinalizedDrafts_<1||Ka(r)||o.has(r)||!ya(r)||Ss(r)||(o.add(r),ys(r,(s,u)=>{if(Ka(u)){const f=u[Et];if(ks(f,l)){const p=ef(f);es(r,s,p,r.type_),ox(f)}}else ya(u)&&as(u,o,l)})),r}function e5(r,o){const l=vs(r),s={type_:l?1:0,scope_:o?o.scope_:ix(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:o,base_:r,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let u=s,f=ns;l&&(u=[s],f=Ji);const{revoke:p,proxy:x}=Proxy.revocable(u,f);return s.draft_=x,s.revoke_=p,[x,s]}var ns={get(r,o){if(o===Et)return r;let l=r.scope_.arrayMethodsPlugin_;const s=r.type_===1&&typeof o=="string";if(s&&l?.isArrayOperationMethod(o))return l.createMethodInterceptor(r,o);const u=Xa(r);if(!Cm(u,o,r.type_))return t5(r,u,o);const f=u[o];if(r.finalized_||!ya(f)||s&&r.operationMethod&&l?.isMutatingArrayMethod(r.operationMethod)&&Vv(o))return f;if(f===lu(r.base_,o)){Fl(r);const p=r.type_===1?+o:o,x=Eu(r.scope_,f,r,p);return r.copy_[p]=x}return f},has(r,o){return o in Xa(r)},ownKeys(r){return Reflect.ownKeys(Xa(r))},set(r,o,l){const s=cx(Xa(r),o);if(s?.set)return s.set.call(r.draft_,l),!0;if(!r.modified_){const u=lu(Xa(r),o),f=u?.[Et];if(f&&f.base_===l)return r.copy_[o]=l,r.assigned_.set(o,!1),!0;if(qv(l,u)&&(l!==void 0||Cm(r.base_,o,r.type_)))return!0;Fl(r),Au(r)}return r.copy_[o]===l&&(l!==void 0||o in r.copy_)||Number.isNaN(l)&&Number.isNaN(r.copy_[o])||(r.copy_[o]=l,r.assigned_.set(o,!0),Kv(r,o,l)),!0},deleteProperty(r,o){return Fl(r),lu(r.base_,o)!==void 0||o in r.base_?(r.assigned_.set(o,!1),Au(r)):r.assigned_.delete(o),r.copy_&&delete r.copy_[o],!0},getOwnPropertyDescriptor(r,o){const l=Xa(r),s=Reflect.getOwnPropertyDescriptor(l,o);return s&&{[Yl]:!0,[Su]:r.type_!==1||o!=="length",[Kl]:s[Kl],[Xi]:l[o]}},defineProperty(){ba(11)},getPrototypeOf(r){return Ir(r.base_)},setPrototypeOf(){ba(12)}},Ji={};for(let r in ns){let o=ns[r];Ji[r]=function(){const l=arguments;return l[0]=l[0][0],o.apply(this,l)}}Ji.deleteProperty=function(r,o){return Ji.set.call(this,r,o,void 0)};Ji.set=function(r,o,l){return ns.set.call(this,r[0],o,l,r[0])};function lu(r,o){const l=r[Et];return(l?Xa(l):r)[o]}function t5(r,o,l){const s=cx(o,l);return s?Xi in s?s[Xi]:s.get?.call(r.draft_):void 0}function cx(r,o){if(!(o in r))return;let l=Ir(r);for(;l;){const s=Object.getOwnPropertyDescriptor(l,o);if(s)return s;l=Ir(l)}}function Au(r){r.modified_||(r.modified_=!0,r.parent_&&Au(r.parent_))}function Fl(r){r.copy_||(r.assigned_=new Map,r.copy_=Nu(r.base_,r.scope_.immer_.useStrictShallowCopy_))}var a5=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(o,l,s)=>{if($r(o)&&!$r(l)){const f=l;l=o;const p=this;return function(h=f,...m){return p.produce(h,y=>l.call(this,y,...m))}}$r(l)||ba(6),s!==void 0&&!$r(s)&&ba(7);let u;if(ya(o)){const f=Em(this),p=Eu(f,o,void 0);let x=!0;try{u=l(p),x=!1}finally{x?Tu(f):zu(f)}return Am(f,s),Rm(u,f)}else if(!o||!Ku(o)){if(u=l(o),u===void 0&&(u=o),u===ax&&(u=void 0),this.autoFreeze_&&tf(u,!0),s){const f=[],p=[];Kn(Cu).generateReplacementPatches_(o,u,{patches_:f,inversePatches_:p}),s(f,p)}return u}else ba(1,o)},this.produceWithPatches=(o,l)=>{if($r(o))return(p,...x)=>this.produceWithPatches(p,h=>o(h,...x));let s,u;return[this.produce(o,l,(p,x)=>{s=p,u=x}),s,u]},ou(r?.autoFreeze)&&this.setAutoFreeze(r.autoFreeze),ou(r?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(r.useStrictShallowCopy),ou(r?.useStrictIteration)&&this.setUseStrictIteration(r.useStrictIteration)}createDraft(r){ya(r)||ba(8),Ka(r)&&(r=n5(r));const o=Em(this),l=Eu(o,r,void 0);return l[Et].isManual_=!0,zu(o),l}finishDraft(r,o){const l=r&&r[Et];(!l||!l.isManual_)&&ba(9);const{scope_:s}=l;return Am(s,o),Rm(void 0,s)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}setUseStrictIteration(r){this.useStrictIteration_=r}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(r,o){let l;for(l=o.length-1;l>=0;l--){const u=o[l];if(u.path.length===0&&u.op==="replace"){r=u.value;break}}l>-1&&(o=o.slice(l+1));const s=Kn(Cu).applyPatches_;return Ka(r)?s(r,o):this.produce(r,u=>s(u,o))}};function Eu(r,o,l,s){const[u,f]=js(o)?Kn(ts).proxyMap_(o,l):ws(o)?Kn(ts).proxySet_(o,l):e5(o,l);return(l?.scope_??ix()).drafts_.push(u),f.callbacks_=l?.callbacks_??[],f.key_=s,l&&s!==void 0?Zv(l,f,s):f.callbacks_.push(function(h){h.mapSetPlugin_?.fixSetContents(f);const{patchPlugin_:m}=h;f.modified_&&m&&m.generatePatches_(f,[],h)}),u}function n5(r){return Ka(r)||ba(10,r),dx(r)}function dx(r){if(!ya(r)||Ss(r))return r;const o=r[Et];let l,s=!0;if(o){if(!o.modified_)return o.base_;o.finalized_=!0,l=Nu(r,o.scope_.immer_.useStrictShallowCopy_),s=o.scope_.immer_.shouldUseStrictIteration()}else l=Nu(r,!0);return ys(l,(u,f)=>{es(l,u,dx(f))},s),o&&(o.finalized_=!1),l}var r5=new a5,ux=r5.produce;function fx(r){return({dispatch:l,getState:s})=>u=>f=>typeof f=="function"?f(l,s,r):u(f)}var i5=fx(),o5=fx,l5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Jl:Jl.apply(null,arguments)};function _m(r,o){function l(...s){if(o){let u=o(...s);if(!u)throw new Error(Ja(0));return{type:r,payload:u.payload,..."meta"in u&&{meta:u.meta},..."error"in u&&{error:u.error}}}return{type:r,payload:s[0]}}return l.toString=()=>`${r}`,l.type=r,l.match=s=>Yv(s)&&s.type===r,l}var px=class Pi extends Array{constructor(...o){super(...o),Object.setPrototypeOf(this,Pi.prototype)}static get[Symbol.species](){return Pi}concat(...o){return super.concat.apply(this,o)}prepend(...o){return o.length===1&&Array.isArray(o[0])?new Pi(...o[0].concat(this)):new Pi(...o.concat(this))}};function Om(r){return ya(r)?ux(r,()=>{}):r}function Dl(r,o,l){return r.has(o)?r.get(o):r.set(o,l(o)).get(o)}function s5(r){return typeof r=="boolean"}var c5=()=>function(o){const{thunk:l=!0,immutableCheck:s=!0,serializableCheck:u=!0,actionCreatorCheck:f=!0}=o??{};let p=new px;return l&&(s5(l)?p.push(i5):p.push(o5(l.extraArgument))),p},d5="RTK_autoBatch",Mm=r=>o=>{setTimeout(o,r)},u5=(r={type:"raf"})=>o=>(...l)=>{const s=o(...l);let u=!0,f=!1,p=!1;const x=new Set,h=r.type==="tick"?queueMicrotask:r.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Mm(10):r.type==="callback"?r.queueNotification:Mm(r.timeout),m=()=>{p=!1,f&&(f=!1,x.forEach(y=>y()))};return Object.assign({},s,{subscribe(y){const v=()=>u&&y(),M=s.subscribe(v);return x.add(y),()=>{M(),x.delete(y)}},dispatch(y){try{return u=!y?.meta?.[d5],f=!u,f&&(p||(p=!0,h(m))),s.dispatch(y)}finally{u=!0}}})},f5=r=>function(l){const{autoBatch:s=!0}=l??{};let u=new px(r);return s&&u.push(u5(typeof s=="object"?s:void 0)),u};function p5(r){const o=c5(),{reducer:l=void 0,middleware:s,devTools:u=!0,preloadedState:f=void 0,enhancers:p=void 0}=r||{};let x;if(typeof l=="function")x=l;else if(Zu(l))x=$v(l);else throw new Error(Ja(1));let h;typeof s=="function"?h=s(o):h=o();let m=Jl;u&&(m=l5({trace:!1,...typeof u=="object"&&u}));const y=Iv(...h),v=f5(y);let M=typeof p=="function"?p(v):v();const A=m(...M);return tx(x,f,A)}function gx(r){const o={},l=[];let s;const u={addCase(f,p){const x=typeof f=="string"?f:f.type;if(!x)throw new Error(Ja(28));if(x in o)throw new Error(Ja(29));return o[x]=p,u},addAsyncThunk(f,p){return p.pending&&(o[f.pending.type]=p.pending),p.rejected&&(o[f.rejected.type]=p.rejected),p.fulfilled&&(o[f.fulfilled.type]=p.fulfilled),p.settled&&l.push({matcher:f.settled,reducer:p.settled}),u},addMatcher(f,p){return l.push({matcher:f,reducer:p}),u},addDefaultCase(f){return s=f,u}};return r(u),[o,l,s]}function g5(r){return typeof r=="function"}function m5(r,o){let[l,s,u]=gx(o),f;if(g5(r))f=()=>Om(r());else{const x=Om(r);f=()=>x}function p(x=f(),h){let m=[l[h.type],...s.filter(({matcher:y})=>y(h)).map(({reducer:y})=>y)];return m.filter(y=>!!y).length===0&&(m=[u]),m.reduce((y,v)=>{if(v)if(Ka(y)){const A=v(y,h);return A===void 0?y:A}else{if(ya(y))return ux(y,M=>v(M,h));{const M=v(y,h);if(M===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return M}}return y},x)}return p.getInitialState=f,p}var h5=Symbol.for("rtk-slice-createasyncthunk");function x5(r,o){return`${r}/${o}`}function b5({creators:r}={}){const o=r?.asyncThunk?.[h5];return function(s){const{name:u,reducerPath:f=u}=s;if(!u)throw new Error(Ja(11));const p=(typeof s.reducers=="function"?s.reducers(j5()):s.reducers)||{},x=Object.keys(p),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},m={addCase(B,G){const U=typeof B=="string"?B:B.type;if(!U)throw new Error(Ja(12));if(U in h.sliceCaseReducersByType)throw new Error(Ja(13));return h.sliceCaseReducersByType[U]=G,m},addMatcher(B,G){return h.sliceMatchers.push({matcher:B,reducer:G}),m},exposeAction(B,G){return h.actionCreators[B]=G,m},exposeCaseReducer(B,G){return h.sliceCaseReducersByName[B]=G,m}};x.forEach(B=>{const G=p[B],U={reducerName:B,type:x5(u,B),createNotation:typeof s.reducers=="function"};S5(G)?N5(U,G,m,o):w5(U,G,m)});function y(){const[B={},G=[],U=void 0]=typeof s.extraReducers=="function"?gx(s.extraReducers):[s.extraReducers],O={...B,...h.sliceCaseReducersByType};return m5(s.initialState,$=>{for(let Q in O)$.addCase(Q,O[Q]);for(let Q of h.sliceMatchers)$.addMatcher(Q.matcher,Q.reducer);for(let Q of G)$.addMatcher(Q.matcher,Q.reducer);U&&$.addDefaultCase(U)})}const v=B=>B,M=new Map,A=new WeakMap;let S;function z(B,G){return S||(S=y()),S(B,G)}function E(){return S||(S=y()),S.getInitialState()}function R(B,G=!1){function U($){let Q=$[B];return typeof Q>"u"&&G&&(Q=Dl(A,U,E)),Q}function O($=v){const Q=Dl(M,G,()=>new WeakMap);return Dl(Q,$,()=>{const ue={};for(const[ge,P]of Object.entries(s.selectors??{}))ue[ge]=y5(P,$,()=>Dl(A,$,E),G);return ue})}return{reducerPath:B,getSelectors:O,get selectors(){return O(U)},selectSlice:U}}const C={name:u,reducer:z,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:E,...R(f),injectInto(B,{reducerPath:G,...U}={}){const O=G??f;return B.inject({reducerPath:O,reducer:z},U),{...C,...R(O,!0)}}};return C}}function y5(r,o,l,s){function u(f,...p){let x=o(f);return typeof x>"u"&&s&&(x=l()),r(x,...p)}return u.unwrapped=r,u}var v5=b5();function j5(){function r(o,l){return{_reducerDefinitionType:"asyncThunk",payloadCreator:o,...l}}return r.withTypes=()=>r,{reducer(o){return Object.assign({[o.name](...l){return o(...l)}}[o.name],{_reducerDefinitionType:"reducer"})},preparedReducer(o,l){return{_reducerDefinitionType:"reducerWithPrepare",prepare:o,reducer:l}},asyncThunk:r}}function w5({type:r,reducerName:o,createNotation:l},s,u){let f,p;if("reducer"in s){if(l&&!k5(s))throw new Error(Ja(17));f=s.reducer,p=s.prepare}else f=s;u.addCase(r,f).exposeCaseReducer(o,f).exposeAction(o,p?_m(r,p):_m(r))}function S5(r){return r._reducerDefinitionType==="asyncThunk"}function k5(r){return r._reducerDefinitionType==="reducerWithPrepare"}function N5({type:r,reducerName:o},l,s,u){if(!u)throw new Error(Ja(18));const{payloadCreator:f,fulfilled:p,pending:x,rejected:h,settled:m,options:y}=l,v=u(r,f,y);s.exposeAction(o,v),p&&s.addCase(v.fulfilled,p),x&&s.addCase(v.pending,x),h&&s.addCase(v.rejected,h),m&&s.addMatcher(v.settled,m),s.exposeCaseReducer(o,{fulfilled:p||_l,pending:x||_l,rejected:h||_l,settled:m||_l})}function _l(){}function Ja(r){return`Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}const C5={user:null,isLoggedIn:!1},mx=v5({name:"auth",initialState:C5,reducers:{loginSuccess:(r,o)=>{r.user=o.payload,r.isLoggedIn=!0},logout:r=>{r.user=null,r.isLoggedIn=!1,localStorage.removeItem("authUser"),localStorage.removeItem("token"),localStorage.removeItem("userRole")}}}),{loginSuccess:rs,logout:hx}=mx.actions,T5=mx.reducer,En="/assets/vvcmclogo-C6hbLrf7.jpg",Zi="/assets/ajivir5-DJJi1rt9.jpeg",ro="/assets/bg1-BQodPINJ.jpeg";function xx(r,o){return function(){return r.apply(o,arguments)}}const{toString:z5}=Object.prototype,{getPrototypeOf:af}=Object,{iterator:Ns,toStringTag:bx}=Symbol,Cs=(r=>o=>{const l=z5.call(o);return r[l]||(r[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),va=r=>(r=r.toLowerCase(),o=>Cs(o)===r),Ts=r=>o=>typeof o===r,{isArray:Pr}=Array,Yr=Ts("undefined");function io(r){return r!==null&&!Yr(r)&&r.constructor!==null&&!Yr(r.constructor)&&$t(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const yx=va("ArrayBuffer");function A5(r){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(r):o=r&&r.buffer&&yx(r.buffer),o}const E5=Ts("string"),$t=Ts("function"),vx=Ts("number"),oo=r=>r!==null&&typeof r=="object",R5=r=>r===!0||r===!1,ql=r=>{if(Cs(r)!=="object")return!1;const o=af(r);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(bx in r)&&!(Ns in r)},D5=r=>{if(!oo(r)||io(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},_5=va("Date"),O5=va("File"),M5=va("Blob"),B5=va("FileList"),L5=r=>oo(r)&&$t(r.pipe),U5=r=>{let o;return r&&(typeof FormData=="function"&&r instanceof FormData||$t(r.append)&&((o=Cs(r))==="formdata"||o==="object"&&$t(r.toString)&&r.toString()==="[object FormData]"))},W5=va("URLSearchParams"),[H5,$5,I5,Y5]=["ReadableStream","Request","Response","Headers"].map(va),F5=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function lo(r,o,{allOwnKeys:l=!1}={}){if(r===null||typeof r>"u")return;let s,u;if(typeof r!="object"&&(r=[r]),Pr(r))for(s=0,u=r.length;s<u;s++)o.call(null,r[s],s,r);else{if(io(r))return;const f=l?Object.getOwnPropertyNames(r):Object.keys(r),p=f.length;let x;for(s=0;s<p;s++)x=f[s],o.call(null,r[x],x,r)}}function jx(r,o){if(io(r))return null;o=o.toLowerCase();const l=Object.keys(r);let s=l.length,u;for(;s-- >0;)if(u=l[s],o===u.toLowerCase())return u;return null}const Qn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wx=r=>!Yr(r)&&r!==Qn;function Ru(){const{caseless:r,skipUndefined:o}=wx(this)&&this||{},l={},s=(u,f)=>{const p=r&&jx(l,f)||f;ql(l[p])&&ql(u)?l[p]=Ru(l[p],u):ql(u)?l[p]=Ru({},u):Pr(u)?l[p]=u.slice():(!o||!Yr(u))&&(l[p]=u)};for(let u=0,f=arguments.length;u<f;u++)arguments[u]&&lo(arguments[u],s);return l}const q5=(r,o,l,{allOwnKeys:s}={})=>(lo(o,(u,f)=>{l&&$t(u)?r[f]=xx(u,l):r[f]=u},{allOwnKeys:s}),r),V5=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),P5=(r,o,l,s)=>{r.prototype=Object.create(o.prototype,s),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:o.prototype}),l&&Object.assign(r.prototype,l)},G5=(r,o,l,s)=>{let u,f,p;const x={};if(o=o||{},r==null)return o;do{for(u=Object.getOwnPropertyNames(r),f=u.length;f-- >0;)p=u[f],(!s||s(p,r,o))&&!x[p]&&(o[p]=r[p],x[p]=!0);r=l!==!1&&af(r)}while(r&&(!l||l(r,o))&&r!==Object.prototype);return o},X5=(r,o,l)=>{r=String(r),(l===void 0||l>r.length)&&(l=r.length),l-=o.length;const s=r.indexOf(o,l);return s!==-1&&s===l},Q5=r=>{if(!r)return null;if(Pr(r))return r;let o=r.length;if(!vx(o))return null;const l=new Array(o);for(;o-- >0;)l[o]=r[o];return l},J5=(r=>o=>r&&o instanceof r)(typeof Uint8Array<"u"&&af(Uint8Array)),Z5=(r,o)=>{const s=(r&&r[Ns]).call(r);let u;for(;(u=s.next())&&!u.done;){const f=u.value;o.call(r,f[0],f[1])}},K5=(r,o)=>{let l;const s=[];for(;(l=r.exec(o))!==null;)s.push(l);return s},ej=va("HTMLFormElement"),tj=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,s,u){return s.toUpperCase()+u}),Bm=(({hasOwnProperty:r})=>(o,l)=>r.call(o,l))(Object.prototype),aj=va("RegExp"),Sx=(r,o)=>{const l=Object.getOwnPropertyDescriptors(r),s={};lo(l,(u,f)=>{let p;(p=o(u,f,r))!==!1&&(s[f]=p||u)}),Object.defineProperties(r,s)},nj=r=>{Sx(r,(o,l)=>{if($t(r)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const s=r[l];if($t(s)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},rj=(r,o)=>{const l={},s=u=>{u.forEach(f=>{l[f]=!0})};return Pr(r)?s(r):s(String(r).split(o)),l},ij=()=>{},oj=(r,o)=>r!=null&&Number.isFinite(r=+r)?r:o;function lj(r){return!!(r&&$t(r.append)&&r[bx]==="FormData"&&r[Ns])}const sj=r=>{const o=new Array(10),l=(s,u)=>{if(oo(s)){if(o.indexOf(s)>=0)return;if(io(s))return s;if(!("toJSON"in s)){o[u]=s;const f=Pr(s)?[]:{};return lo(s,(p,x)=>{const h=l(p,u+1);!Yr(h)&&(f[x]=h)}),o[u]=void 0,f}}return s};return l(r,0)},cj=va("AsyncFunction"),dj=r=>r&&(oo(r)||$t(r))&&$t(r.then)&&$t(r.catch),kx=((r,o)=>r?setImmediate:o?((l,s)=>(Qn.addEventListener("message",({source:u,data:f})=>{u===Qn&&f===l&&s.length&&s.shift()()},!1),u=>{s.push(u),Qn.postMessage(l,"*")}))(`axios@${Math.random()}`,[]):l=>setTimeout(l))(typeof setImmediate=="function",$t(Qn.postMessage)),uj=typeof queueMicrotask<"u"?queueMicrotask.bind(Qn):typeof process<"u"&&process.nextTick||kx,fj=r=>r!=null&&$t(r[Ns]),te={isArray:Pr,isArrayBuffer:yx,isBuffer:io,isFormData:U5,isArrayBufferView:A5,isString:E5,isNumber:vx,isBoolean:R5,isObject:oo,isPlainObject:ql,isEmptyObject:D5,isReadableStream:H5,isRequest:$5,isResponse:I5,isHeaders:Y5,isUndefined:Yr,isDate:_5,isFile:O5,isBlob:M5,isRegExp:aj,isFunction:$t,isStream:L5,isURLSearchParams:W5,isTypedArray:J5,isFileList:B5,forEach:lo,merge:Ru,extend:q5,trim:F5,stripBOM:V5,inherits:P5,toFlatObject:G5,kindOf:Cs,kindOfTest:va,endsWith:X5,toArray:Q5,forEachEntry:Z5,matchAll:K5,isHTMLForm:ej,hasOwnProperty:Bm,hasOwnProp:Bm,reduceDescriptors:Sx,freezeMethods:nj,toObjectSet:rj,toCamelCase:tj,noop:ij,toFiniteNumber:oj,findKey:jx,global:Qn,isContextDefined:wx,isSpecCompliantForm:lj,toJSONObject:sj,isAsyncFn:cj,isThenable:dj,setImmediate:kx,asap:uj,isIterable:fj};function Ee(r,o,l,s,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",o&&(this.code=o),l&&(this.config=l),s&&(this.request=s),u&&(this.response=u,this.status=u.status?u.status:null)}te.inherits(Ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.status}}});const Nx=Ee.prototype,Cx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{Cx[r]={value:r}});Object.defineProperties(Ee,Cx);Object.defineProperty(Nx,"isAxiosError",{value:!0});Ee.from=(r,o,l,s,u,f)=>{const p=Object.create(Nx);te.toFlatObject(r,p,function(y){return y!==Error.prototype},m=>m!=="isAxiosError");const x=r&&r.message?r.message:"Error",h=o==null&&r?r.code:o;return Ee.call(p,x,h,l,s,u),r&&p.cause==null&&Object.defineProperty(p,"cause",{value:r,configurable:!0}),p.name=r&&r.name||"Error",f&&Object.assign(p,f),p};const pj=null;function Du(r){return te.isPlainObject(r)||te.isArray(r)}function Tx(r){return te.endsWith(r,"[]")?r.slice(0,-2):r}function Lm(r,o,l){return r?r.concat(o).map(function(u,f){return u=Tx(u),!l&&f?"["+u+"]":u}).join(l?".":""):o}function gj(r){return te.isArray(r)&&!r.some(Du)}const mj=te.toFlatObject(te,{},null,function(o){return/^is[A-Z]/.test(o)});function zs(r,o,l){if(!te.isObject(r))throw new TypeError("target must be an object");o=o||new FormData,l=te.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(z,E){return!te.isUndefined(E[z])});const s=l.metaTokens,u=l.visitor||y,f=l.dots,p=l.indexes,h=(l.Blob||typeof Blob<"u"&&Blob)&&te.isSpecCompliantForm(o);if(!te.isFunction(u))throw new TypeError("visitor must be a function");function m(S){if(S===null)return"";if(te.isDate(S))return S.toISOString();if(te.isBoolean(S))return S.toString();if(!h&&te.isBlob(S))throw new Ee("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(S)||te.isTypedArray(S)?h&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function y(S,z,E){let R=S;if(S&&!E&&typeof S=="object"){if(te.endsWith(z,"{}"))z=s?z:z.slice(0,-2),S=JSON.stringify(S);else if(te.isArray(S)&&gj(S)||(te.isFileList(S)||te.endsWith(z,"[]"))&&(R=te.toArray(S)))return z=Tx(z),R.forEach(function(B,G){!(te.isUndefined(B)||B===null)&&o.append(p===!0?Lm([z],G,f):p===null?z:z+"[]",m(B))}),!1}return Du(S)?!0:(o.append(Lm(E,z,f),m(S)),!1)}const v=[],M=Object.assign(mj,{defaultVisitor:y,convertValue:m,isVisitable:Du});function A(S,z){if(!te.isUndefined(S)){if(v.indexOf(S)!==-1)throw Error("Circular reference detected in "+z.join("."));v.push(S),te.forEach(S,function(R,C){(!(te.isUndefined(R)||R===null)&&u.call(o,R,te.isString(C)?C.trim():C,z,M))===!0&&A(R,z?z.concat(C):[C])}),v.pop()}}if(!te.isObject(r))throw new TypeError("data must be an object");return A(r),o}function Um(r){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(s){return o[s]})}function nf(r,o){this._pairs=[],r&&zs(r,this,o)}const zx=nf.prototype;zx.append=function(o,l){this._pairs.push([o,l])};zx.toString=function(o){const l=o?function(s){return o.call(this,s,Um)}:Um;return this._pairs.map(function(u){return l(u[0])+"="+l(u[1])},"").join("&")};function hj(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ax(r,o,l){if(!o)return r;const s=l&&l.encode||hj;te.isFunction(l)&&(l={serialize:l});const u=l&&l.serialize;let f;if(u?f=u(o,l):f=te.isURLSearchParams(o)?o.toString():new nf(o,l).toString(s),f){const p=r.indexOf("#");p!==-1&&(r=r.slice(0,p)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}class Wm{constructor(){this.handlers=[]}use(o,l,s){return this.handlers.push({fulfilled:o,rejected:l,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){te.forEach(this.handlers,function(s){s!==null&&o(s)})}}const Ex={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xj=typeof URLSearchParams<"u"?URLSearchParams:nf,bj=typeof FormData<"u"?FormData:null,yj=typeof Blob<"u"?Blob:null,vj={isBrowser:!0,classes:{URLSearchParams:xj,FormData:bj,Blob:yj},protocols:["http","https","file","blob","url","data"]},rf=typeof window<"u"&&typeof document<"u",_u=typeof navigator=="object"&&navigator||void 0,jj=rf&&(!_u||["ReactNative","NativeScript","NS"].indexOf(_u.product)<0),wj=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Sj=rf&&window.location.href||"http://localhost",kj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rf,hasStandardBrowserEnv:jj,hasStandardBrowserWebWorkerEnv:wj,navigator:_u,origin:Sj},Symbol.toStringTag,{value:"Module"})),Ct={...kj,...vj};function Nj(r,o){return zs(r,new Ct.classes.URLSearchParams,{visitor:function(l,s,u,f){return Ct.isNode&&te.isBuffer(l)?(this.append(s,l.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...o})}function Cj(r){return te.matchAll(/\w+|\[(\w*)]/g,r).map(o=>o[0]==="[]"?"":o[1]||o[0])}function Tj(r){const o={},l=Object.keys(r);let s;const u=l.length;let f;for(s=0;s<u;s++)f=l[s],o[f]=r[f];return o}function Rx(r){function o(l,s,u,f){let p=l[f++];if(p==="__proto__")return!0;const x=Number.isFinite(+p),h=f>=l.length;return p=!p&&te.isArray(u)?u.length:p,h?(te.hasOwnProp(u,p)?u[p]=[u[p],s]:u[p]=s,!x):((!u[p]||!te.isObject(u[p]))&&(u[p]=[]),o(l,s,u[p],f)&&te.isArray(u[p])&&(u[p]=Tj(u[p])),!x)}if(te.isFormData(r)&&te.isFunction(r.entries)){const l={};return te.forEachEntry(r,(s,u)=>{o(Cj(s),u,l,0)}),l}return null}function zj(r,o,l){if(te.isString(r))try{return(o||JSON.parse)(r),te.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(l||JSON.stringify)(r)}const so={transitional:Ex,adapter:["xhr","http","fetch"],transformRequest:[function(o,l){const s=l.getContentType()||"",u=s.indexOf("application/json")>-1,f=te.isObject(o);if(f&&te.isHTMLForm(o)&&(o=new FormData(o)),te.isFormData(o))return u?JSON.stringify(Rx(o)):o;if(te.isArrayBuffer(o)||te.isBuffer(o)||te.isStream(o)||te.isFile(o)||te.isBlob(o)||te.isReadableStream(o))return o;if(te.isArrayBufferView(o))return o.buffer;if(te.isURLSearchParams(o))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let x;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Nj(o,this.formSerializer).toString();if((x=te.isFileList(o))||s.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return zs(x?{"files[]":o}:o,h&&new h,this.formSerializer)}}return f||u?(l.setContentType("application/json",!1),zj(o)):o}],transformResponse:[function(o){const l=this.transitional||so.transitional,s=l&&l.forcedJSONParsing,u=this.responseType==="json";if(te.isResponse(o)||te.isReadableStream(o))return o;if(o&&te.isString(o)&&(s&&!this.responseType||u)){const p=!(l&&l.silentJSONParsing)&&u;try{return JSON.parse(o,this.parseReviver)}catch(x){if(p)throw x.name==="SyntaxError"?Ee.from(x,Ee.ERR_BAD_RESPONSE,this,null,this.response):x}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ct.classes.FormData,Blob:Ct.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};te.forEach(["delete","get","head","post","put","patch"],r=>{so.headers[r]={}});const Aj=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ej=r=>{const o={};let l,s,u;return r&&r.split(`
`).forEach(function(p){u=p.indexOf(":"),l=p.substring(0,u).trim().toLowerCase(),s=p.substring(u+1).trim(),!(!l||o[l]&&Aj[l])&&(l==="set-cookie"?o[l]?o[l].push(s):o[l]=[s]:o[l]=o[l]?o[l]+", "+s:s)}),o},Hm=Symbol("internals");function Yi(r){return r&&String(r).trim().toLowerCase()}function Vl(r){return r===!1||r==null?r:te.isArray(r)?r.map(Vl):String(r)}function Rj(r){const o=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=l.exec(r);)o[s[1]]=s[2];return o}const Dj=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function su(r,o,l,s,u){if(te.isFunction(s))return s.call(this,o,l);if(u&&(o=l),!!te.isString(o)){if(te.isString(s))return o.indexOf(s)!==-1;if(te.isRegExp(s))return s.test(o)}}function _j(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,l,s)=>l.toUpperCase()+s)}function Oj(r,o){const l=te.toCamelCase(" "+o);["get","set","has"].forEach(s=>{Object.defineProperty(r,s+l,{value:function(u,f,p){return this[s].call(this,o,u,f,p)},configurable:!0})})}let It=class{constructor(o){o&&this.set(o)}set(o,l,s){const u=this;function f(x,h,m){const y=Yi(h);if(!y)throw new Error("header name must be a non-empty string");const v=te.findKey(u,y);(!v||u[v]===void 0||m===!0||m===void 0&&u[v]!==!1)&&(u[v||h]=Vl(x))}const p=(x,h)=>te.forEach(x,(m,y)=>f(m,y,h));if(te.isPlainObject(o)||o instanceof this.constructor)p(o,l);else if(te.isString(o)&&(o=o.trim())&&!Dj(o))p(Ej(o),l);else if(te.isObject(o)&&te.isIterable(o)){let x={},h,m;for(const y of o){if(!te.isArray(y))throw TypeError("Object iterator must return a key-value pair");x[m=y[0]]=(h=x[m])?te.isArray(h)?[...h,y[1]]:[h,y[1]]:y[1]}p(x,l)}else o!=null&&f(l,o,s);return this}get(o,l){if(o=Yi(o),o){const s=te.findKey(this,o);if(s){const u=this[s];if(!l)return u;if(l===!0)return Rj(u);if(te.isFunction(l))return l.call(this,u,s);if(te.isRegExp(l))return l.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,l){if(o=Yi(o),o){const s=te.findKey(this,o);return!!(s&&this[s]!==void 0&&(!l||su(this,this[s],s,l)))}return!1}delete(o,l){const s=this;let u=!1;function f(p){if(p=Yi(p),p){const x=te.findKey(s,p);x&&(!l||su(s,s[x],x,l))&&(delete s[x],u=!0)}}return te.isArray(o)?o.forEach(f):f(o),u}clear(o){const l=Object.keys(this);let s=l.length,u=!1;for(;s--;){const f=l[s];(!o||su(this,this[f],f,o,!0))&&(delete this[f],u=!0)}return u}normalize(o){const l=this,s={};return te.forEach(this,(u,f)=>{const p=te.findKey(s,f);if(p){l[p]=Vl(u),delete l[f];return}const x=o?_j(f):String(f).trim();x!==f&&delete l[f],l[x]=Vl(u),s[x]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const l=Object.create(null);return te.forEach(this,(s,u)=>{s!=null&&s!==!1&&(l[u]=o&&te.isArray(s)?s.join(", "):s)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,l])=>o+": "+l).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...l){const s=new this(o);return l.forEach(u=>s.set(u)),s}static accessor(o){const s=(this[Hm]=this[Hm]={accessors:{}}).accessors,u=this.prototype;function f(p){const x=Yi(p);s[x]||(Oj(u,p),s[x]=!0)}return te.isArray(o)?o.forEach(f):f(o),this}};It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);te.reduceDescriptors(It.prototype,({value:r},o)=>{let l=o[0].toUpperCase()+o.slice(1);return{get:()=>r,set(s){this[l]=s}}});te.freezeMethods(It);function cu(r,o){const l=this||so,s=o||l,u=It.from(s.headers);let f=s.data;return te.forEach(r,function(x){f=x.call(l,f,u.normalize(),o?o.status:void 0)}),u.normalize(),f}function Dx(r){return!!(r&&r.__CANCEL__)}function Gr(r,o,l){Ee.call(this,r??"canceled",Ee.ERR_CANCELED,o,l),this.name="CanceledError"}te.inherits(Gr,Ee,{__CANCEL__:!0});function _x(r,o,l){const s=l.config.validateStatus;!l.status||!s||s(l.status)?r(l):o(new Ee("Request failed with status code "+l.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}function Mj(r){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return o&&o[1]||""}function Bj(r,o){r=r||10;const l=new Array(r),s=new Array(r);let u=0,f=0,p;return o=o!==void 0?o:1e3,function(h){const m=Date.now(),y=s[f];p||(p=m),l[u]=h,s[u]=m;let v=f,M=0;for(;v!==u;)M+=l[v++],v=v%r;if(u=(u+1)%r,u===f&&(f=(f+1)%r),m-p<o)return;const A=y&&m-y;return A?Math.round(M*1e3/A):void 0}}function Lj(r,o){let l=0,s=1e3/o,u,f;const p=(m,y=Date.now())=>{l=y,u=null,f&&(clearTimeout(f),f=null),r(...m)};return[(...m)=>{const y=Date.now(),v=y-l;v>=s?p(m,y):(u=m,f||(f=setTimeout(()=>{f=null,p(u)},s-v)))},()=>u&&p(u)]}const is=(r,o,l=3)=>{let s=0;const u=Bj(50,250);return Lj(f=>{const p=f.loaded,x=f.lengthComputable?f.total:void 0,h=p-s,m=u(h),y=p<=x;s=p;const v={loaded:p,total:x,progress:x?p/x:void 0,bytes:h,rate:m||void 0,estimated:m&&x&&y?(x-p)/m:void 0,event:f,lengthComputable:x!=null,[o?"download":"upload"]:!0};r(v)},l)},$m=(r,o)=>{const l=r!=null;return[s=>o[0]({lengthComputable:l,total:r,loaded:s}),o[1]]},Im=r=>(...o)=>te.asap(()=>r(...o)),Uj=Ct.hasStandardBrowserEnv?((r,o)=>l=>(l=new URL(l,Ct.origin),r.protocol===l.protocol&&r.host===l.host&&(o||r.port===l.port)))(new URL(Ct.origin),Ct.navigator&&/(msie|trident)/i.test(Ct.navigator.userAgent)):()=>!0,Wj=Ct.hasStandardBrowserEnv?{write(r,o,l,s,u,f,p){if(typeof document>"u")return;const x=[`${r}=${encodeURIComponent(o)}`];te.isNumber(l)&&x.push(`expires=${new Date(l).toUTCString()}`),te.isString(s)&&x.push(`path=${s}`),te.isString(u)&&x.push(`domain=${u}`),f===!0&&x.push("secure"),te.isString(p)&&x.push(`SameSite=${p}`),document.cookie=x.join("; ")},read(r){if(typeof document>"u")return null;const o=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return o?decodeURIComponent(o[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Hj(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function $j(r,o){return o?r.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):r}function Ox(r,o,l){let s=!Hj(o);return r&&(s||l==!1)?$j(r,o):o}const Ym=r=>r instanceof It?{...r}:r;function er(r,o){o=o||{};const l={};function s(m,y,v,M){return te.isPlainObject(m)&&te.isPlainObject(y)?te.merge.call({caseless:M},m,y):te.isPlainObject(y)?te.merge({},y):te.isArray(y)?y.slice():y}function u(m,y,v,M){if(te.isUndefined(y)){if(!te.isUndefined(m))return s(void 0,m,v,M)}else return s(m,y,v,M)}function f(m,y){if(!te.isUndefined(y))return s(void 0,y)}function p(m,y){if(te.isUndefined(y)){if(!te.isUndefined(m))return s(void 0,m)}else return s(void 0,y)}function x(m,y,v){if(v in o)return s(m,y);if(v in r)return s(void 0,m)}const h={url:f,method:f,data:f,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:x,headers:(m,y,v)=>u(Ym(m),Ym(y),v,!0)};return te.forEach(Object.keys({...r,...o}),function(y){const v=h[y]||u,M=v(r[y],o[y],y);te.isUndefined(M)&&v!==x||(l[y]=M)}),l}const Mx=r=>{const o=er({},r);let{data:l,withXSRFToken:s,xsrfHeaderName:u,xsrfCookieName:f,headers:p,auth:x}=o;if(o.headers=p=It.from(p),o.url=Ax(Ox(o.baseURL,o.url,o.allowAbsoluteUrls),r.params,r.paramsSerializer),x&&p.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),te.isFormData(l)){if(Ct.hasStandardBrowserEnv||Ct.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if(te.isFunction(l.getHeaders)){const h=l.getHeaders(),m=["content-type","content-length"];Object.entries(h).forEach(([y,v])=>{m.includes(y.toLowerCase())&&p.set(y,v)})}}if(Ct.hasStandardBrowserEnv&&(s&&te.isFunction(s)&&(s=s(o)),s||s!==!1&&Uj(o.url))){const h=u&&f&&Wj.read(f);h&&p.set(u,h)}return o},Ij=typeof XMLHttpRequest<"u",Yj=Ij&&function(r){return new Promise(function(l,s){const u=Mx(r);let f=u.data;const p=It.from(u.headers).normalize();let{responseType:x,onUploadProgress:h,onDownloadProgress:m}=u,y,v,M,A,S;function z(){A&&A(),S&&S(),u.cancelToken&&u.cancelToken.unsubscribe(y),u.signal&&u.signal.removeEventListener("abort",y)}let E=new XMLHttpRequest;E.open(u.method.toUpperCase(),u.url,!0),E.timeout=u.timeout;function R(){if(!E)return;const B=It.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),U={data:!x||x==="text"||x==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:B,config:r,request:E};_x(function($){l($),z()},function($){s($),z()},U),E=null}"onloadend"in E?E.onloadend=R:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(R)},E.onabort=function(){E&&(s(new Ee("Request aborted",Ee.ECONNABORTED,r,E)),E=null)},E.onerror=function(G){const U=G&&G.message?G.message:"Network Error",O=new Ee(U,Ee.ERR_NETWORK,r,E);O.event=G||null,s(O),E=null},E.ontimeout=function(){let G=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const U=u.transitional||Ex;u.timeoutErrorMessage&&(G=u.timeoutErrorMessage),s(new Ee(G,U.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,r,E)),E=null},f===void 0&&p.setContentType(null),"setRequestHeader"in E&&te.forEach(p.toJSON(),function(G,U){E.setRequestHeader(U,G)}),te.isUndefined(u.withCredentials)||(E.withCredentials=!!u.withCredentials),x&&x!=="json"&&(E.responseType=u.responseType),m&&([M,S]=is(m,!0),E.addEventListener("progress",M)),h&&E.upload&&([v,A]=is(h),E.upload.addEventListener("progress",v),E.upload.addEventListener("loadend",A)),(u.cancelToken||u.signal)&&(y=B=>{E&&(s(!B||B.type?new Gr(null,r,E):B),E.abort(),E=null)},u.cancelToken&&u.cancelToken.subscribe(y),u.signal&&(u.signal.aborted?y():u.signal.addEventListener("abort",y)));const C=Mj(u.url);if(C&&Ct.protocols.indexOf(C)===-1){s(new Ee("Unsupported protocol "+C+":",Ee.ERR_BAD_REQUEST,r));return}E.send(f||null)})},Fj=(r,o)=>{const{length:l}=r=r?r.filter(Boolean):[];if(o||l){let s=new AbortController,u;const f=function(m){if(!u){u=!0,x();const y=m instanceof Error?m:this.reason;s.abort(y instanceof Ee?y:new Gr(y instanceof Error?y.message:y))}};let p=o&&setTimeout(()=>{p=null,f(new Ee(`timeout ${o} of ms exceeded`,Ee.ETIMEDOUT))},o);const x=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(m=>{m.unsubscribe?m.unsubscribe(f):m.removeEventListener("abort",f)}),r=null)};r.forEach(m=>m.addEventListener("abort",f));const{signal:h}=s;return h.unsubscribe=()=>te.asap(x),h}},qj=function*(r,o){let l=r.byteLength;if(l<o){yield r;return}let s=0,u;for(;s<l;)u=s+o,yield r.slice(s,u),s=u},Vj=async function*(r,o){for await(const l of Pj(r))yield*qj(l,o)},Pj=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const o=r.getReader();try{for(;;){const{done:l,value:s}=await o.read();if(l)break;yield s}}finally{await o.cancel()}},Fm=(r,o,l,s)=>{const u=Vj(r,o);let f=0,p,x=h=>{p||(p=!0,s&&s(h))};return new ReadableStream({async pull(h){try{const{done:m,value:y}=await u.next();if(m){x(),h.close();return}let v=y.byteLength;if(l){let M=f+=v;l(M)}h.enqueue(new Uint8Array(y))}catch(m){throw x(m),m}},cancel(h){return x(h),u.return()}},{highWaterMark:2})},qm=64*1024,{isFunction:Ol}=te,Gj=(({Request:r,Response:o})=>({Request:r,Response:o}))(te.global),{ReadableStream:Vm,TextEncoder:Pm}=te.global,Gm=(r,...o)=>{try{return!!r(...o)}catch{return!1}},Xj=r=>{r=te.merge.call({skipUndefined:!0},Gj,r);const{fetch:o,Request:l,Response:s}=r,u=o?Ol(o):typeof fetch=="function",f=Ol(l),p=Ol(s);if(!u)return!1;const x=u&&Ol(Vm),h=u&&(typeof Pm=="function"?(S=>z=>S.encode(z))(new Pm):async S=>new Uint8Array(await new l(S).arrayBuffer())),m=f&&x&&Gm(()=>{let S=!1;const z=new l(Ct.origin,{body:new Vm,method:"POST",get duplex(){return S=!0,"half"}}).headers.has("Content-Type");return S&&!z}),y=p&&x&&Gm(()=>te.isReadableStream(new s("").body)),v={stream:y&&(S=>S.body)};u&&["text","arrayBuffer","blob","formData","stream"].forEach(S=>{!v[S]&&(v[S]=(z,E)=>{let R=z&&z[S];if(R)return R.call(z);throw new Ee(`Response type '${S}' is not supported`,Ee.ERR_NOT_SUPPORT,E)})});const M=async S=>{if(S==null)return 0;if(te.isBlob(S))return S.size;if(te.isSpecCompliantForm(S))return(await new l(Ct.origin,{method:"POST",body:S}).arrayBuffer()).byteLength;if(te.isArrayBufferView(S)||te.isArrayBuffer(S))return S.byteLength;if(te.isURLSearchParams(S)&&(S=S+""),te.isString(S))return(await h(S)).byteLength},A=async(S,z)=>{const E=te.toFiniteNumber(S.getContentLength());return E??M(z)};return async S=>{let{url:z,method:E,data:R,signal:C,cancelToken:B,timeout:G,onDownloadProgress:U,onUploadProgress:O,responseType:$,headers:Q,withCredentials:ue="same-origin",fetchOptions:ge}=Mx(S),P=o||fetch;$=$?($+"").toLowerCase():"text";let le=Fj([C,B&&B.toAbortSignal()],G),H=null;const me=le&&le.unsubscribe&&(()=>{le.unsubscribe()});let we;try{if(O&&m&&E!=="get"&&E!=="head"&&(we=await A(Q,R))!==0){let j=new l(z,{method:"POST",body:R,duplex:"half"}),T;if(te.isFormData(R)&&(T=j.headers.get("content-type"))&&Q.setContentType(T),j.body){const[N,Y]=$m(we,is(Im(O)));R=Fm(j.body,qm,N,Y)}}te.isString(ue)||(ue=ue?"include":"omit");const F=f&&"credentials"in l.prototype,ie={...ge,signal:le,method:E.toUpperCase(),headers:Q.normalize().toJSON(),body:R,duplex:"half",credentials:F?ue:void 0};H=f&&new l(z,ie);let pe=await(f?P(H,ge):P(z,ie));const K=y&&($==="stream"||$==="response");if(y&&(U||K&&me)){const j={};["status","statusText","headers"].forEach(D=>{j[D]=pe[D]});const T=te.toFiniteNumber(pe.headers.get("content-length")),[N,Y]=U&&$m(T,is(Im(U),!0))||[];pe=new s(Fm(pe.body,qm,N,()=>{Y&&Y(),me&&me()}),j)}$=$||"text";let L=await v[te.findKey(v,$)||"text"](pe,S);return!K&&me&&me(),await new Promise((j,T)=>{_x(j,T,{data:L,headers:It.from(pe.headers),status:pe.status,statusText:pe.statusText,config:S,request:H})})}catch(F){throw me&&me(),F&&F.name==="TypeError"&&/Load failed|fetch/i.test(F.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,S,H),{cause:F.cause||F}):Ee.from(F,F&&F.code,S,H)}}},Qj=new Map,Bx=r=>{let o=r&&r.env||{};const{fetch:l,Request:s,Response:u}=o,f=[s,u,l];let p=f.length,x=p,h,m,y=Qj;for(;x--;)h=f[x],m=y.get(h),m===void 0&&y.set(h,m=x?new Map:Xj(o)),y=m;return m};Bx();const of={http:pj,xhr:Yj,fetch:{get:Bx}};te.forEach(of,(r,o)=>{if(r){try{Object.defineProperty(r,"name",{value:o})}catch{}Object.defineProperty(r,"adapterName",{value:o})}});const Xm=r=>`- ${r}`,Jj=r=>te.isFunction(r)||r===null||r===!1;function Zj(r,o){r=te.isArray(r)?r:[r];const{length:l}=r;let s,u;const f={};for(let p=0;p<l;p++){s=r[p];let x;if(u=s,!Jj(s)&&(u=of[(x=String(s)).toLowerCase()],u===void 0))throw new Ee(`Unknown adapter '${x}'`);if(u&&(te.isFunction(u)||(u=u.get(o))))break;f[x||"#"+p]=u}if(!u){const p=Object.entries(f).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let x=l?p.length>1?`since :
`+p.map(Xm).join(`
`):" "+Xm(p[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+x,"ERR_NOT_SUPPORT")}return u}const Lx={getAdapter:Zj,adapters:of};function du(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Gr(null,r)}function Qm(r){return du(r),r.headers=It.from(r.headers),r.data=cu.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Lx.getAdapter(r.adapter||so.adapter,r)(r).then(function(s){return du(r),s.data=cu.call(r,r.transformResponse,s),s.headers=It.from(s.headers),s},function(s){return Dx(s)||(du(r),s&&s.response&&(s.response.data=cu.call(r,r.transformResponse,s.response),s.response.headers=It.from(s.response.headers))),Promise.reject(s)})}const Ux="1.13.2",As={};["object","boolean","number","function","string","symbol"].forEach((r,o)=>{As[r]=function(s){return typeof s===r||"a"+(o<1?"n ":" ")+r}});const Jm={};As.transitional=function(o,l,s){function u(f,p){return"[Axios v"+Ux+"] Transitional option '"+f+"'"+p+(s?". "+s:"")}return(f,p,x)=>{if(o===!1)throw new Ee(u(p," has been removed"+(l?" in "+l:"")),Ee.ERR_DEPRECATED);return l&&!Jm[p]&&(Jm[p]=!0,console.warn(u(p," has been deprecated since v"+l+" and will be removed in the near future"))),o?o(f,p,x):!0}};As.spelling=function(o){return(l,s)=>(console.warn(`${s} is likely a misspelling of ${o}`),!0)};function Kj(r,o,l){if(typeof r!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const s=Object.keys(r);let u=s.length;for(;u-- >0;){const f=s[u],p=o[f];if(p){const x=r[f],h=x===void 0||p(x,f,r);if(h!==!0)throw new Ee("option "+f+" must be "+h,Ee.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new Ee("Unknown option "+f,Ee.ERR_BAD_OPTION)}}const Pl={assertOptions:Kj,validators:As},Ta=Pl.validators;let Jn=class{constructor(o){this.defaults=o||{},this.interceptors={request:new Wm,response:new Wm}}async request(o,l){try{return await this._request(o,l)}catch(s){if(s instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const f=u.stack?u.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(o,l){typeof o=="string"?(l=l||{},l.url=o):l=o||{},l=er(this.defaults,l);const{transitional:s,paramsSerializer:u,headers:f}=l;s!==void 0&&Pl.assertOptions(s,{silentJSONParsing:Ta.transitional(Ta.boolean),forcedJSONParsing:Ta.transitional(Ta.boolean),clarifyTimeoutError:Ta.transitional(Ta.boolean)},!1),u!=null&&(te.isFunction(u)?l.paramsSerializer={serialize:u}:Pl.assertOptions(u,{encode:Ta.function,serialize:Ta.function},!0)),l.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?l.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:l.allowAbsoluteUrls=!0),Pl.assertOptions(l,{baseUrl:Ta.spelling("baseURL"),withXsrfToken:Ta.spelling("withXSRFToken")},!0),l.method=(l.method||this.defaults.method||"get").toLowerCase();let p=f&&te.merge(f.common,f[l.method]);f&&te.forEach(["delete","get","head","post","put","patch","common"],S=>{delete f[S]}),l.headers=It.concat(p,f);const x=[];let h=!0;this.interceptors.request.forEach(function(z){typeof z.runWhen=="function"&&z.runWhen(l)===!1||(h=h&&z.synchronous,x.unshift(z.fulfilled,z.rejected))});const m=[];this.interceptors.response.forEach(function(z){m.push(z.fulfilled,z.rejected)});let y,v=0,M;if(!h){const S=[Qm.bind(this),void 0];for(S.unshift(...x),S.push(...m),M=S.length,y=Promise.resolve(l);v<M;)y=y.then(S[v++],S[v++]);return y}M=x.length;let A=l;for(;v<M;){const S=x[v++],z=x[v++];try{A=S(A)}catch(E){z.call(this,E);break}}try{y=Qm.call(this,A)}catch(S){return Promise.reject(S)}for(v=0,M=m.length;v<M;)y=y.then(m[v++],m[v++]);return y}getUri(o){o=er(this.defaults,o);const l=Ox(o.baseURL,o.url,o.allowAbsoluteUrls);return Ax(l,o.params,o.paramsSerializer)}};te.forEach(["delete","get","head","options"],function(o){Jn.prototype[o]=function(l,s){return this.request(er(s||{},{method:o,url:l,data:(s||{}).data}))}});te.forEach(["post","put","patch"],function(o){function l(s){return function(f,p,x){return this.request(er(x||{},{method:o,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:p}))}}Jn.prototype[o]=l(),Jn.prototype[o+"Form"]=l(!0)});let ew=class Wx{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(f){l=f});const s=this;this.promise.then(u=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](u);s._listeners=null}),this.promise.then=u=>{let f;const p=new Promise(x=>{s.subscribe(x),f=x}).then(u);return p.cancel=function(){s.unsubscribe(f)},p},o(function(f,p,x){s.reason||(s.reason=new Gr(f,p,x),l(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const l=this._listeners.indexOf(o);l!==-1&&this._listeners.splice(l,1)}toAbortSignal(){const o=new AbortController,l=s=>{o.abort(s)};return this.subscribe(l),o.signal.unsubscribe=()=>this.unsubscribe(l),o.signal}static source(){let o;return{token:new Wx(function(u){o=u}),cancel:o}}};function tw(r){return function(l){return r.apply(null,l)}}function aw(r){return te.isObject(r)&&r.isAxiosError===!0}const Ou={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ou).forEach(([r,o])=>{Ou[o]=r});function Hx(r){const o=new Jn(r),l=xx(Jn.prototype.request,o);return te.extend(l,Jn.prototype,o,{allOwnKeys:!0}),te.extend(l,o,null,{allOwnKeys:!0}),l.create=function(u){return Hx(er(r,u))},l}const Xe=Hx(so);Xe.Axios=Jn;Xe.CanceledError=Gr;Xe.CancelToken=ew;Xe.isCancel=Dx;Xe.VERSION=Ux;Xe.toFormData=zs;Xe.AxiosError=Ee;Xe.Cancel=Xe.CanceledError;Xe.all=function(o){return Promise.all(o)};Xe.spread=tw;Xe.isAxiosError=aw;Xe.mergeConfig=er;Xe.AxiosHeaders=It;Xe.formToJSON=r=>Rx(te.isHTMLForm(r)?new FormData(r):r);Xe.getAdapter=Lx.getAdapter;Xe.HttpStatusCode=Ou;Xe.default=Xe;const{Axios:l4,AxiosError:s4,CanceledError:c4,isCancel:d4,CancelToken:u4,VERSION:f4,all:p4,Cancel:g4,isAxiosError:m4,spread:h4,toFormData:x4,AxiosHeaders:b4,HttpStatusCode:y4,formToJSON:v4,getAdapter:j4,mergeConfig:w4}=Xe,Ie=Xe.create({baseURL:"https://jansamvad.saavi.co.in/api"});Ie.interceptors.request.use(r=>{const o=localStorage.getItem("token");return o&&(r.headers.Authorization=`Bearer ${o}`),r});function $x(){return a.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center z-50",children:a.jsxs("div",{className:"relative mb-4",children:[a.jsx("div",{className:"h-14 w-14 rounded-full border-4 border-blue-200"}),a.jsx("div",{className:"h-14 w-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin absolute top-0 left-0"})]})})}function Ix(r){var o,l,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var u=r.length;for(o=0;o<u;o++)r[o]&&(l=Ix(r[o]))&&(s&&(s+=" "),s+=l)}else for(l in r)r[l]&&(s&&(s+=" "),s+=l);return s}function Zn(){for(var r,o,l=0,s="",u=arguments.length;l<u;l++)(r=arguments[l])&&(o=Ix(r))&&(s&&(s+=" "),s+=o);return s}function nw(r){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=r:l.appendChild(document.createTextNode(r))}nw(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var co=r=>typeof r=="number"&&!isNaN(r),tr=r=>typeof r=="string",en=r=>typeof r=="function",rw=r=>tr(r)||co(r),Mu=r=>tr(r)||en(r)?r:null,iw=(r,o)=>r===!1||co(r)&&r>0?r:o,Bu=r=>b.isValidElement(r)||tr(r)||en(r)||co(r);function ow(r,o,l=300){let{scrollHeight:s,style:u}=r;requestAnimationFrame(()=>{u.minHeight="initial",u.height=s+"px",u.transition=`all ${l}ms`,requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(o,l)})})}function lw({enter:r,exit:o,appendPosition:l=!1,collapse:s=!0,collapseDuration:u=300}){return function({children:f,position:p,preventExitTransition:x,done:h,nodeRef:m,isIn:y,playToast:v}){let M=l?`${r}--${p}`:r,A=l?`${o}--${p}`:o,S=b.useRef(0);return b.useLayoutEffect(()=>{let z=m.current,E=M.split(" "),R=C=>{C.target===m.current&&(v(),z.removeEventListener("animationend",R),z.removeEventListener("animationcancel",R),S.current===0&&C.type!=="animationcancel"&&z.classList.remove(...E))};z.classList.add(...E),z.addEventListener("animationend",R),z.addEventListener("animationcancel",R)},[]),b.useEffect(()=>{let z=m.current,E=()=>{z.removeEventListener("animationend",E),s?ow(z,h,u):h()};y||(x?E():(S.current=1,z.className+=` ${A}`,z.addEventListener("animationend",E)))},[y]),Le.createElement(Le.Fragment,null,f)}}function Zm(r,o){return{content:Yx(r.content,r.props),containerId:r.props.containerId,id:r.props.toastId,theme:r.props.theme,type:r.props.type,data:r.props.data||{},isLoading:r.props.isLoading,icon:r.props.icon,reason:r.removalReason,status:o}}function Yx(r,o,l=!1){return b.isValidElement(r)&&!tr(r.type)?b.cloneElement(r,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:l}):en(r)?r({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:l}):r}function sw({closeToast:r,theme:o,ariaLabel:l="close"}){return Le.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:s=>{s.stopPropagation(),r(!0)},"aria-label":l},Le.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Le.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function cw({delay:r,isRunning:o,closeToast:l,type:s="default",hide:u,className:f,controlledProgress:p,progress:x,rtl:h,isIn:m,theme:y}){let v=u||p&&x===0,M={animationDuration:`${r}ms`,animationPlayState:o?"running":"paused"};p&&(M.transform=`scaleX(${x})`);let A=Zn("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":h}),S=en(f)?f({rtl:h,type:s,defaultClassName:A}):Zn(A,f),z={[p&&x>=1?"onTransitionEnd":"onAnimationEnd"]:p&&x<1?null:()=>{m&&l()}};return Le.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},Le.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${s}`}),Le.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:S,style:M,...z}))}var dw=1,Fx=()=>`${dw++}`;function uw(r,o,l){let s=1,u=0,f=[],p=[],x=o,h=new Map,m=new Set,y=C=>(m.add(C),()=>m.delete(C)),v=()=>{p=Array.from(h.values()),m.forEach(C=>C())},M=({containerId:C,toastId:B,updateId:G})=>{let U=C?C!==r:r!==1,O=h.has(B)&&G==null;return U||O},A=(C,B)=>{h.forEach(G=>{var U;(B==null||B===G.props.toastId)&&((U=G.toggle)==null||U.call(G,C))})},S=C=>{var B,G;(G=(B=C.props)==null?void 0:B.onClose)==null||G.call(B,C.removalReason),C.isActive=!1},z=C=>{if(C==null)h.forEach(S);else{let B=h.get(C);B&&S(B)}v()},E=()=>{u-=f.length,f=[]},R=C=>{var B,G;let{toastId:U,updateId:O}=C.props,$=O==null;C.staleId&&h.delete(C.staleId),C.isActive=!0,h.set(U,C),v(),l(Zm(C,$?"added":"updated")),$&&((G=(B=C.props).onOpen)==null||G.call(B))};return{id:r,props:x,observe:y,toggle:A,removeToast:z,toasts:h,clearQueue:E,buildToast:(C,B)=>{if(M(B))return;let{toastId:G,updateId:U,data:O,staleId:$,delay:Q}=B,ue=U==null;ue&&u++;let ge={...x,style:x.toastStyle,key:s++,...Object.fromEntries(Object.entries(B).filter(([le,H])=>H!=null)),toastId:G,updateId:U,data:O,isIn:!1,className:Mu(B.className||x.toastClassName),progressClassName:Mu(B.progressClassName||x.progressClassName),autoClose:B.isLoading?!1:iw(B.autoClose,x.autoClose),closeToast(le){h.get(G).removalReason=le,z(G)},deleteToast(){let le=h.get(G);if(le!=null){if(l(Zm(le,"removed")),h.delete(G),u--,u<0&&(u=0),f.length>0){R(f.shift());return}v()}}};ge.closeButton=x.closeButton,B.closeButton===!1||Bu(B.closeButton)?ge.closeButton=B.closeButton:B.closeButton===!0&&(ge.closeButton=Bu(x.closeButton)?x.closeButton:!0);let P={content:C,props:ge,staleId:$};x.limit&&x.limit>0&&u>x.limit&&ue?f.push(P):co(Q)?setTimeout(()=>{R(P)},Q):R(P)},setProps(C){x=C},setToggle:(C,B)=>{let G=h.get(C);G&&(G.toggle=B)},isToastActive:C=>{var B;return(B=h.get(C))==null?void 0:B.isActive},getSnapshot:()=>p}}var At=new Map,Ki=[],Lu=new Set,fw=r=>Lu.forEach(o=>o(r)),qx=()=>At.size>0;function pw(){Ki.forEach(r=>Px(r.content,r.options)),Ki=[]}var gw=(r,{containerId:o})=>{var l;return(l=At.get(o||1))==null?void 0:l.toasts.get(r)};function Vx(r,o){var l;if(o)return!!((l=At.get(o))!=null&&l.isToastActive(r));let s=!1;return At.forEach(u=>{u.isToastActive(r)&&(s=!0)}),s}function mw(r){if(!qx()){Ki=Ki.filter(o=>r!=null&&o.options.toastId!==r);return}if(r==null||rw(r))At.forEach(o=>{o.removeToast(r)});else if(r&&("containerId"in r||"id"in r)){let o=At.get(r.containerId);o?o.removeToast(r.id):At.forEach(l=>{l.removeToast(r.id)})}}var hw=(r={})=>{At.forEach(o=>{o.props.limit&&(!r.containerId||o.id===r.containerId)&&o.clearQueue()})};function Px(r,o){Bu(r)&&(qx()||Ki.push({content:r,options:o}),At.forEach(l=>{l.buildToast(r,o)}))}function xw(r){var o;(o=At.get(r.containerId||1))==null||o.setToggle(r.id,r.fn)}function Gx(r,o){At.forEach(l=>{(o==null||!(o!=null&&o.containerId)||o?.containerId===l.id)&&l.toggle(r,o?.id)})}function bw(r){let o=r.containerId||1;return{subscribe(l){let s=uw(o,r,fw);At.set(o,s);let u=s.observe(l);return pw(),()=>{u(),At.delete(o)}},setProps(l){var s;(s=At.get(o))==null||s.setProps(l)},getSnapshot(){var l;return(l=At.get(o))==null?void 0:l.getSnapshot()}}}function yw(r){return Lu.add(r),()=>{Lu.delete(r)}}function vw(r){return r&&(tr(r.toastId)||co(r.toastId))?r.toastId:Fx()}function uo(r,o){return Px(r,o),o.toastId}function Es(r,o){return{...o,type:o&&o.type||r,toastId:vw(o)}}function Rs(r){return(o,l)=>uo(o,Es(r,l))}function Se(r,o){return uo(r,Es("default",o))}Se.loading=(r,o)=>uo(r,Es("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o}));function jw(r,{pending:o,error:l,success:s},u){let f;o&&(f=tr(o)?Se.loading(o,u):Se.loading(o.render,{...u,...o}));let p={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},x=(m,y,v)=>{if(y==null){Se.dismiss(f);return}let M={type:m,...p,...u,data:v},A=tr(y)?{render:y}:y;return f?Se.update(f,{...M,...A}):Se(A.render,{...M,...A}),v},h=en(r)?r():r;return h.then(m=>x("success",s,m)).catch(m=>x("error",l,m)),h}Se.promise=jw;Se.success=Rs("success");Se.info=Rs("info");Se.error=Rs("error");Se.warning=Rs("warning");Se.warn=Se.warning;Se.dark=(r,o)=>uo(r,Es("default",{theme:"dark",...o}));function ww(r){mw(r)}Se.dismiss=ww;Se.clearWaitingQueue=hw;Se.isActive=Vx;Se.update=(r,o={})=>{let l=gw(r,o);if(l){let{props:s,content:u}=l,f={delay:100,...s,...o,toastId:o.toastId||r,updateId:Fx()};f.toastId!==r&&(f.staleId=r);let p=f.render||u;delete f.render,uo(p,f)}};Se.done=r=>{Se.update(r,{progress:1})};Se.onChange=yw;Se.play=r=>Gx(!0,r);Se.pause=r=>Gx(!1,r);function Sw(r){var o;let{subscribe:l,getSnapshot:s,setProps:u}=b.useRef(bw(r)).current;u(r);let f=(o=b.useSyncExternalStore(l,s,s))==null?void 0:o.slice();function p(x){if(!f)return[];let h=new Map;return r.newestOnTop&&f.reverse(),f.forEach(m=>{let{position:y}=m.props;h.has(y)||h.set(y,[]),h.get(y).push(m)}),Array.from(h,m=>x(m[0],m[1]))}return{getToastToRender:p,isToastActive:Vx,count:f?.length}}function kw(r){let[o,l]=b.useState(!1),[s,u]=b.useState(!1),f=b.useRef(null),p=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:x,pauseOnHover:h,closeToast:m,onClick:y,closeOnClick:v}=r;xw({id:r.toastId,containerId:r.containerId,fn:l}),b.useEffect(()=>{if(r.pauseOnFocusLoss)return M(),()=>{A()}},[r.pauseOnFocusLoss]);function M(){document.hasFocus()||R(),window.addEventListener("focus",E),window.addEventListener("blur",R)}function A(){window.removeEventListener("focus",E),window.removeEventListener("blur",R)}function S($){if(r.draggable===!0||r.draggable===$.pointerType){C();let Q=f.current;p.canCloseOnClick=!0,p.canDrag=!0,Q.style.transition="none",r.draggableDirection==="x"?(p.start=$.clientX,p.removalDistance=Q.offsetWidth*(r.draggablePercent/100)):(p.start=$.clientY,p.removalDistance=Q.offsetHeight*(r.draggablePercent===80?r.draggablePercent*1.5:r.draggablePercent)/100)}}function z($){let{top:Q,bottom:ue,left:ge,right:P}=f.current.getBoundingClientRect();$.nativeEvent.type!=="touchend"&&r.pauseOnHover&&$.clientX>=ge&&$.clientX<=P&&$.clientY>=Q&&$.clientY<=ue?R():E()}function E(){l(!0)}function R(){l(!1)}function C(){p.didMove=!1,document.addEventListener("pointermove",G),document.addEventListener("pointerup",U)}function B(){document.removeEventListener("pointermove",G),document.removeEventListener("pointerup",U)}function G($){let Q=f.current;if(p.canDrag&&Q){p.didMove=!0,o&&R(),r.draggableDirection==="x"?p.delta=$.clientX-p.start:p.delta=$.clientY-p.start,p.start!==$.clientX&&(p.canCloseOnClick=!1);let ue=r.draggableDirection==="x"?`${p.delta}px, var(--y)`:`0, calc(${p.delta}px + var(--y))`;Q.style.transform=`translate3d(${ue},0)`,Q.style.opacity=`${1-Math.abs(p.delta/p.removalDistance)}`}}function U(){B();let $=f.current;if(p.canDrag&&p.didMove&&$){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance){u(!0),r.closeToast(!0),r.collapseAll();return}$.style.transition="transform 0.2s, opacity 0.2s",$.style.removeProperty("transform"),$.style.removeProperty("opacity")}}let O={onPointerDown:S,onPointerUp:z};return x&&h&&(O.onMouseEnter=R,r.stacked||(O.onMouseLeave=E)),v&&(O.onClick=$=>{y&&y($),p.canCloseOnClick&&m(!0)}),{playToast:E,pauseToast:R,isRunning:o,preventExitTransition:s,toastRef:f,eventHandlers:O}}var Nw=typeof window<"u"?b.useLayoutEffect:b.useEffect,Ds=({theme:r,type:o,isLoading:l,...s})=>Le.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:r==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s});function Cw(r){return Le.createElement(Ds,{...r},Le.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Tw(r){return Le.createElement(Ds,{...r},Le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function zw(r){return Le.createElement(Ds,{...r},Le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Aw(r){return Le.createElement(Ds,{...r},Le.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Ew(){return Le.createElement("div",{className:"Toastify__spinner"})}var Uu={info:Tw,warning:Cw,success:zw,error:Aw,spinner:Ew},Rw=r=>r in Uu;function Dw({theme:r,type:o,isLoading:l,icon:s}){let u=null,f={theme:r,type:o};return s===!1||(en(s)?u=s({...f,isLoading:l}):b.isValidElement(s)?u=b.cloneElement(s,f):l?u=Uu.spinner():Rw(o)&&(u=Uu[o](f))),u}var _w=r=>{let{isRunning:o,preventExitTransition:l,toastRef:s,eventHandlers:u,playToast:f}=kw(r),{closeButton:p,children:x,autoClose:h,onClick:m,type:y,hideProgressBar:v,closeToast:M,transition:A,position:S,className:z,style:E,progressClassName:R,updateId:C,role:B,progress:G,rtl:U,toastId:O,deleteToast:$,isIn:Q,isLoading:ue,closeOnClick:ge,theme:P,ariaLabel:le}=r,H=Zn("Toastify__toast",`Toastify__toast-theme--${P}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":U},{"Toastify__toast--close-on-click":ge}),me=en(z)?z({rtl:U,position:S,type:y,defaultClassName:H}):Zn(H,z),we=Dw(r),F=!!G||!h,ie={closeToast:M,type:y,theme:P},pe=null;return p===!1||(en(p)?pe=p(ie):b.isValidElement(p)?pe=b.cloneElement(p,ie):pe=sw(ie)),Le.createElement(A,{isIn:Q,done:$,position:S,preventExitTransition:l,nodeRef:s,playToast:f},Le.createElement("div",{id:O,tabIndex:0,onClick:m,"data-in":Q,className:me,...u,style:E,ref:s,...Q&&{role:B,"aria-label":le}},we!=null&&Le.createElement("div",{className:Zn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ue})},we),Yx(x,r,!o),pe,!r.customProgressBar&&Le.createElement(cw,{...C&&!F?{key:`p-${C}`}:{},rtl:U,theme:P,delay:h,isRunning:o,isIn:Q,closeToast:M,hide:v,type:y,className:R,controlledProgress:F,progress:G||0})))},Ow=(r,o=!1)=>({enter:`Toastify--animate Toastify__${r}-enter`,exit:`Toastify--animate Toastify__${r}-exit`,appendPosition:o}),Mw=lw(Ow("bounce",!0)),Bw={position:"top-right",transition:Mw,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:r=>r.altKey&&r.code==="KeyT"};function Lw(r){let o={...Bw,...r},l=r.stacked,[s,u]=b.useState(!0),f=b.useRef(null),{getToastToRender:p,isToastActive:x,count:h}=Sw(o),{className:m,style:y,rtl:v,containerId:M,hotKeys:A}=o;function S(E){let R=Zn("Toastify__toast-container",`Toastify__toast-container--${E}`,{"Toastify__toast-container--rtl":v});return en(m)?m({position:E,rtl:v,defaultClassName:R}):Zn(R,Mu(m))}function z(){l&&(u(!0),Se.play())}return Nw(()=>{var E;if(l){let R=f.current.querySelectorAll('[data-in="true"]'),C=12,B=(E=o.position)==null?void 0:E.includes("top"),G=0,U=0;Array.from(R).reverse().forEach((O,$)=>{let Q=O;Q.classList.add("Toastify__toast--stacked"),$>0&&(Q.dataset.collapsed=`${s}`),Q.dataset.pos||(Q.dataset.pos=B?"top":"bot");let ue=G*(s?.2:1)+(s?0:C*$);Q.style.setProperty("--y",`${B?ue:ue*-1}px`),Q.style.setProperty("--g",`${C}`),Q.style.setProperty("--s",`${1-(s?U:0)}`),G+=Q.offsetHeight,U+=.025})}},[s,h,l]),b.useEffect(()=>{function E(R){var C;let B=f.current;A(R)&&((C=B.querySelector('[tabIndex="0"]'))==null||C.focus(),u(!1),Se.pause()),R.key==="Escape"&&(document.activeElement===B||B!=null&&B.contains(document.activeElement))&&(u(!0),Se.play())}return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[A]),Le.createElement("section",{ref:f,className:"Toastify",id:M,onMouseEnter:()=>{l&&(u(!1),Se.pause())},onMouseLeave:z,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":o["aria-label"]},p((E,R)=>{let C=R.length?{...y}:{...y,pointerEvents:"none"};return Le.createElement("div",{tabIndex:-1,className:S(E),"data-stacked":l,style:C,key:`c-${E}`},R.map(({content:B,props:G})=>Le.createElement(_w,{...G,stacked:l,collapseAll:z,isIn:x(G.toastId,G.containerId),key:`t-${G.key}`},B)))}))}function Uw(){const r=ao(),o=mt(),[l,s]=b.useState({userName:"",password:""}),[u,f]=b.useState(!1),[p,x]=b.useState(!1),[h,m]=b.useState("mobile"),y=new URLSearchParams(window.location.search).get("mobile")||"",[v,M]=b.useState(y?"otp":"password"),[A,S]=b.useState(y),[z,E]=b.useState(["","","","","",""]),[R,C]=b.useState(""),[B,G]=b.useState(0),[U,O]=b.useState(!1),[$,Q]=b.useState(!1),ue=b.useRef([]);b.useEffect(()=>{y&&y.length===10&&setTimeout(()=>{H()},800)},[]),b.useEffect(()=>{if(B<=0){O(!0);return}const K=setTimeout(()=>G(L=>L-1),1e3);return()=>clearTimeout(K)},[B]);const ge=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,P=K=>s({...l,[K.target.name]:K.target.value}),le=async K=>{if(K.preventDefault(),!l.userName.trim()){Se.error("Username टाका ✅");return}if(!l.password){Se.error("Password टाका ✅");return}try{f(!0);const j=(await Ie.post("/login",{userName:l.userName,password:l.password})).data;if(!j.success){Se.error(j.message);return}const T={id:j.user.id,fullName:j.user.fullName,userName:j.user.userName,role:j.user.role,departmentName:j.user.departmentName,office:j.user.office,departmentCategory:j.user.departmentCategory};j.token&&localStorage.setItem("token",j.token),r(rs(T)),localStorage.setItem("authUser",JSON.stringify(T)),localStorage.setItem("userRole",j.user.role),Se.success("Login successful ✅"),o("/dashboard")}catch(L){const j=L?.response?.data?.message||"Server error. Backend चालू आहे का?";Se.error(j)}finally{f(!1)}},H=async()=>{const K=A.trim();if(!/^[0-9]{10}$/.test(K)){Se.error("10 अंकी valid mobile number टाका!");return}Q(!0);try{const j=(await Ie.post("/sendOtp",{mobileNo:K})).data;if(!j.success){Se.error(j.message||"OTP पाठवण्यात error");return}const T=j.otp;C(T),G(60),O(!1),E(["","","","","",""]),Se.success(`OTP पाठवला ******${K.slice(-3)} वर (WhatsApp)`),m("otp"),setTimeout(()=>ue.current[0]?.focus(),120)}catch(L){const j=L?.response?.data?.message||"Server error ❌";Se.error(j)}finally{Q(!1)}},me=(K,L)=>{if(!/^[0-9]?$/.test(L))return;const j=[...z];j[K]=L,E(j),L&&K<5&&ue.current[K+1]?.focus()},we=(K,L)=>{L.key==="Backspace"&&!z[K]&&K>0&&ue.current[K-1]?.focus()},F=K=>{K.preventDefault();const L=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...z];L.split("").forEach((T,N)=>{j[N]=T}),E(j),ue.current[Math.min(L.length,5)]?.focus()},ie=async()=>{const K=z.join("");if(K.length<6){Se.error("6 अंकी OTP टाका!");return}if(B<=0){Se.error("OTP expire झाला! पुन्हा पाठवा.");return}if(K!==R){Se.error("❌ चुकीचा OTP!"),E(["","","","","",""]),ue.current[0]?.focus();return}try{Q(!0);const j=(await Ie.post("/loginByMobile",{mobileNo:A.trim()})).data;if(!j.success){Se.error(j.message||"Mobile number नोंदणीकृत नाही");return}const T={id:j.user.id,fullName:j.user.fullName,userName:j.user.userName,role:j.user.role,departmentName:j.user.departmentName,office:j.user.office,departmentCategory:j.user.departmentCategory};j.token&&localStorage.setItem("token",j.token),r(rs(T)),localStorage.setItem("authUser",JSON.stringify(T)),localStorage.setItem("userRole",j.user.role),Se.success("✅ Login यशस्वी!"),o("/dashboard")}catch(L){const j=L?.response?.data?.message||"Server error";Se.error(j)}finally{Q(!1)}},pe=K=>{M(K),m("mobile"),E(["","","","","",""]),S(K==="otp"?y:""),G(0)};return a.jsxs(a.Fragment,{children:[(u||$)&&a.jsx($x,{}),a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"lp-root",children:[a.jsx("div",{className:"lp-bg",style:{backgroundImage:`url(${ro})`}}),a.jsx("div",{className:"lp-overlay"}),a.jsx("div",{className:"lp-stripe"}),a.jsxs("div",{className:"lp-wrapper",children:[a.jsxs("div",{className:"lp-card",children:[a.jsxs("div",{className:"lp-logo-row",children:[a.jsx("img",{src:En,alt:"VVCMC",className:"lp-logo-img"}),a.jsxs("div",{className:"lp-logo-texts",children:[a.jsx("div",{className:"lp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"lp-logo-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"lp-tabs",children:[a.jsx("button",{className:`lp-tab ${v==="password"?"active":""}`,onClick:()=>pe("password"),children:"🔒 Password Login"}),a.jsx("button",{className:`lp-tab ${v==="otp"?"active":""}`,onClick:()=>pe("otp"),children:"📱 OTP Login"})]}),v==="password"&&a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"lp-ftitle",children:"Sign In to Continue"}),a.jsxs("form",{onSubmit:le,children:[a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Username"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-ficon",children:"👤"}),a.jsx("input",{className:"lp-finput has-icon",name:"userName",placeholder:"Enter your username",value:l.userName,onChange:P,autoComplete:"username"})]})]}),a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Password"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-ficon",children:"🔒"}),a.jsx("input",{className:"lp-finput has-icon",type:p?"text":"password",name:"password",placeholder:"Enter your password",value:l.password,onChange:P,autoComplete:"current-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"lp-pbtn",onClick:()=>x(!p),tabIndex:-1,children:p?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"lp-sbtn",children:"SIGN IN →"})]}),a.jsxs("div",{className:"lp-or",children:[a.jsx("div",{className:"lp-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"lp-orl"})]}),a.jsxs("p",{className:"lp-reg",children:["Don't have an account?",a.jsx(Xl,{to:"/register",children:"Create account"})]})]}),v==="otp"&&a.jsxs("div",{className:"fade-up",children:[h==="mobile"&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"lp-ftitle",children:"Mobile OTP Login"}),a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-prefix",children:"🇮🇳 +91"}),a.jsx("input",{className:"lp-finput with-prefix",type:"tel",maxLength:10,placeholder:"10 अंकी नंबर",value:A,onChange:K=>S(K.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:K=>K.key==="Enter"&&H()})]})]}),a.jsx("button",{className:"lp-sbtn orange",onClick:H,disabled:A.length!==10||$,children:$?"⏳ पाठवत आहे...":"OTP पाठवा →"}),a.jsxs("div",{className:"lp-or",children:[a.jsx("div",{className:"lp-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"lp-orl"})]}),a.jsxs("p",{className:"lp-reg",children:["Don't have an account?",a.jsx(Xl,{to:"/register",children:"Create account"})]})]}),h==="otp"&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{m("mobile"),E(["","","","","",""])},children:"← मागे जा"}),a.jsx("p",{className:"lp-ftitle",children:"OTP व्हेरिफाय करा"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",A.slice(-3)]})," वर OTP पाठवला"]}),a.jsx("div",{className:"otp-row",onPaste:F,children:z.map((K,L)=>a.jsx("input",{ref:j=>ue.current[L]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>me(L,j.target.value),onKeyDown:j=>we(L,j)},L))}),a.jsxs("div",{className:"otp-timer",children:[B>0?a.jsxs(a.Fragment,{children:["OTP expire होईल:"," ",a.jsx("strong",{style:{color:B<=15?"#ff6b6b":"#CE9A54"},children:ge(B)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP expire झाला!"}),a.jsxs("div",{style:{marginTop:6},children:["OTP नाही मिळाला?"," ",a.jsx("button",{className:"resend-btn",onClick:H,disabled:!U,children:"पुन्हा पाठवा"})]})]}),a.jsx("button",{className:"lp-sbtn green",onClick:ie,disabled:z.join("").length<6||$,children:$?"⏳ Verifying...":"✅ Verify & Login"})]})]}),a.jsxs("div",{className:"lp-cfooter",children:[a.jsx("div",{className:"lp-cfdot"}),a.jsx("span",{children:"Secure Government Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"lp-mayor-panel",children:[a.jsx("span",{className:"lp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"lp-mp-icon tr",children:"🏥"}),a.jsx("span",{className:"lp-mp-icon bl",children:"🏗️"}),a.jsx("span",{className:"lp-mp-icon br",children:"🏢"}),a.jsxs("div",{className:"lp-mayor-photo-wrap",children:[a.jsx("div",{className:"lp-mayor-ring",children:a.jsx("img",{src:Zi,alt:"Mayor",className:"lp-mayor-photo"})}),a.jsx("div",{className:"lp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"lp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"lp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"lp-mayor-bar-wrap",children:a.jsx("div",{className:"lp-mayor-bar"})})]})]})]})]})}const zt=Xe.create({baseURL:"https://jansamvad.saavi.co.in/api",headers:{"Content-Type":"application/json"}});zt.interceptors.request.use(r=>(r.data instanceof FormData&&delete r.headers["Content-Type"],r));const Xx="/assets/logo2new-CpqCFyo_.jpeg";function Ww(){const r=mt(),[o,l]=b.useState("password"),[s,u]=b.useState({username:"",password:""}),[f,p]=b.useState(!1),[x,h]=b.useState(""),[m,y]=b.useState(!1),[v,M]=b.useState("mobile"),[A,S]=b.useState(""),[z,E]=b.useState(["","","","","",""]),[R,C]=b.useState(""),[B,G]=b.useState(0),[U,O]=b.useState(!1),[$,Q]=b.useState(!1),ue=b.useRef([]),ge=K=>L=>u(j=>({...j,[K]:L.target.value}));b.useEffect(()=>{if(B<=0){O(!0);return}const K=setTimeout(()=>G(L=>L-1),1e3);return()=>clearTimeout(K)},[B]);const P=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,le=async K=>{if(K.preventDefault(),h(""),!s.username||!s.password){h("सर्व fields भरा ❌");return}try{p(!0);const L=await zt.post("/citizen/login",{username:s.username.trim(),password:s.password});if(!L.data.success){h(L.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(L.data.citizen)),localStorage.setItem("citizenToken",L.data.token||""),r("/my-appointments")}catch(L){h(L?.response?.data?.message||"Server Error ❌")}finally{p(!1)}},H=async()=>{const K=A.trim();if(!/^[0-9]{10}$/.test(K)){h("10 digit valid mobile number enter करा!");return}h(""),Q(!0);try{const N=await zt.post("/citizen/check-mobile",{mobileNo:K});if(!N.data.success){h(N.data.message||"Mobile not registered ❌"),Q(!1);return}}catch(N){h(N?.response?.data?.message||"Mobile number not registered. Please Register first ❌"),Q(!1);return}const L=Math.floor(1e5+Math.random()*9e5).toString();C(L),G(60),O(!1),E(["","","","","",""]);const j=`Dear Citizen, Your OTP for VVCMC Jan Samvaad Portal login is ${L}. This OTP is valid for 60 seconds. Do not share this OTP with anyone. SAAVI INFINET`,T=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379315&number=${K}&message=${j}`;fetch(T,{method:"GET",mode:"no-cors"}).catch(()=>{}),M("otp"),Q(!1),setTimeout(()=>ue.current[0]?.focus(),120)},me=async()=>{const K=z.join("");if(K.length<6){h("6 अंकी OTP टाका!");return}if(B<=0){h("OTP expire झाला! पुन्हा पाठवा.");return}if(K!==R){h("❌ चुकीचा OTP! पुन्हा try करा."),E(["","","","","",""]),setTimeout(()=>ue.current[0]?.focus(),50);return}try{Q(!0),h("");const L=await zt.post("/citizen/citizenLoginByMobile",{mobileNo:A.trim()});if(!L.data.success){h(L.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(L.data.citizen)),localStorage.setItem("citizenToken",L.data.token||""),r("/my-appointments")}catch(L){h(L?.response?.data?.message||"Server Error ❌")}finally{Q(!1)}},we=(K,L)=>{if(!/^[0-9]?$/.test(L))return;const j=[...z];j[K]=L,E(j),L&&K<5&&ue.current[K+1]?.focus()},F=(K,L)=>{L.key==="Backspace"&&!z[K]&&K>0&&ue.current[K-1]?.focus()},ie=K=>{K.preventDefault();const L=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...z];L.split("").forEach((T,N)=>{j[N]=T}),E(j),ue.current[Math.min(L.length,5)]?.focus()},pe=K=>{l(K),h(""),M("mobile"),E(["","","","","",""]),S(""),G(0),y(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"cl-root",children:[a.jsx("div",{className:"cl-bg",style:{backgroundImage:`url(${ro})`}}),a.jsx("div",{className:"cl-overlay"}),a.jsx("div",{className:"cl-stripe"}),a.jsxs("div",{className:"cl-wrapper",children:[a.jsxs("div",{className:"cl-card",children:[a.jsxs("div",{className:"cl-logo-row",children:[a.jsx("img",{src:Xx,alt:"VVCMC",className:"cl-logo-img"}),a.jsxs("div",{className:"cl-logo-texts",children:[a.jsx("div",{className:"cl-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"cl-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),a.jsx("p",{className:"cl-page-title",children:"Welcome Back"}),a.jsx("p",{className:"cl-page-sub",children:"Mayor Appointment Portal वर login करा"}),a.jsxs("div",{className:"cl-tabs",children:[a.jsx("button",{className:`cl-tab ${o==="password"?"active":""}`,onClick:()=>pe("password"),children:"🔒 Password Login"}),a.jsx("button",{className:`cl-tab ${o==="otp"?"active":""}`,onClick:()=>pe("otp"),children:"📱 OTP Login"})]}),x&&a.jsxs("div",{className:"cl-error",children:["⚠️ ",x]}),o==="password"&&a.jsxs("div",{className:"fade-up",children:[a.jsxs("form",{onSubmit:le,children:[a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Username"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-ficon",children:"👤"}),a.jsx("input",{className:"cl-finput has-icon",type:"text",placeholder:"Username टाका",value:s.username,onChange:ge("username"),autoComplete:"username",autoFocus:!0})]})]}),a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Password"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-ficon",children:"🔒"}),a.jsx("input",{className:"cl-finput has-icon",type:m?"text":"password",placeholder:"Password टाका",value:s.password,onChange:ge("password"),autoComplete:"current-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"cl-pbtn",onClick:()=>y(!m),tabIndex:-1,children:m?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"cl-sbtn",disabled:f||!s.username||!s.password,children:f?"⏳ Logging in...":"🔐 SIGN IN →"})]}),a.jsxs("div",{className:"cl-or",children:[a.jsx("div",{className:"cl-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"cl-orl"})]}),a.jsxs("p",{className:"cl-reg",children:["Account नाही?",a.jsx("span",{className:"cl-link",onClick:()=>r("/citizen-registration"),children:"Register करा"})]})]}),o==="otp"&&a.jsxs("div",{className:"fade-up",children:[v==="mobile"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-prefix",children:"🇮🇳 +91"}),a.jsx("input",{className:"cl-finput with-prefix",type:"tel",maxLength:10,placeholder:"10 अंकी नंबर",value:A,onChange:K=>S(K.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:K=>K.key==="Enter"&&H(),autoFocus:!0})]})]}),a.jsx("button",{className:"cl-sbtn orange",onClick:H,disabled:A.length!==10||$,children:$?"⏳ पाठवत आहे...":"OTP पाठवा →"}),a.jsxs("div",{className:"cl-or",children:[a.jsx("div",{className:"cl-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"cl-orl"})]}),a.jsxs("p",{className:"cl-reg",children:["Account नाही?",a.jsx("span",{className:"cl-link",onClick:()=>r("/register"),children:"Register करा"})]})]}),v==="otp"&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{M("mobile"),E(["","","","","",""]),h("")},children:"← मागे जा"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",A.slice(-3)]})," ","वर OTP पाठवला"]}),a.jsx("div",{className:"otp-row",onPaste:ie,children:z.map((K,L)=>a.jsx("input",{ref:j=>ue.current[L]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>we(L,j.target.value),onKeyDown:j=>F(L,j)},L))}),a.jsxs("div",{className:"otp-timer",children:[B>0?a.jsxs(a.Fragment,{children:["OTP expire होईल:"," ",a.jsx("strong",{style:{color:B<=15?"#ff6b6b":"#CE9A54"},children:P(B)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP expire झाला!"}),a.jsxs("div",{style:{marginTop:6},children:["OTP नाही मिळाला?"," ",a.jsx("button",{className:"resend-btn",onClick:H,disabled:!U,children:"पुन्हा पाठवा"})]})]}),a.jsx("button",{className:"cl-sbtn green",onClick:me,disabled:z.join("").length<6||$,children:$?"⏳ Verifying...":"✅ Verify & Login"})]})]}),a.jsxs("div",{className:"cl-cfooter",children:[a.jsx("div",{className:"cl-cfdot"}),a.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"cl-mayor-panel",children:[a.jsx("span",{className:"cl-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"cl-mp-icon tr",children:"🤝"}),a.jsx("span",{className:"cl-mp-icon bl",children:"🏢"}),a.jsx("span",{className:"cl-mp-icon br",children:"🏙️"}),a.jsx("div",{className:"cl-mayor-photo-wrap",children:a.jsx("div",{className:"cl-mayor-ring",children:a.jsx("img",{src:Zi,alt:"Mayor",className:"cl-mayor-photo"})})}),a.jsx("p",{className:"cl-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"cl-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"cl-mayor-bar-wrap",children:a.jsx("div",{className:"cl-mayor-bar"})})]})]})]})]})}function Hw(){const r=mt();return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"ps-root",children:[a.jsx("div",{className:"ps-bg",style:{backgroundImage:`url(${ro})`}}),a.jsx("div",{className:"ps-overlay"}),a.jsx("div",{className:"ps-stripe"}),a.jsx("div",{className:"ps-glow-tl"}),a.jsx("div",{className:"ps-glow-br"}),a.jsx("div",{className:"ps-dots"}),a.jsxs("div",{className:"ps-box",children:[a.jsxs("div",{className:"ps-header",children:[a.jsx("div",{className:"ps-logo-wrap",children:a.jsx("img",{className:"ps-logo-img",src:En,alt:"VVCMC"})}),a.jsxs("div",{children:[a.jsx("div",{className:"ps-title",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"ps-title-jan",children:"जन संवाद"}),a.jsx("div",{className:"ps-hr"}),a.jsx("div",{className:"ps-sub",children:"Please select a portal to log in."})]})]}),a.jsxs("div",{className:"ps-cards",children:[a.jsxs("div",{className:"ps-card admin",onClick:()=>r("/admin-login"),children:[a.jsx("div",{className:"ps-icon-wrap",children:"🏛️"}),a.jsx("div",{className:"ps-card-title",children:"Official Login"}),a.jsx("div",{className:"ps-card-sep"}),a.jsx("div",{className:"ps-card-sub",children:"For Municipal Corporation Officers, Employees, and Administrative Staff."}),a.jsx("button",{className:"ps-card-btn",children:"Admin Login →"})]}),a.jsxs("div",{className:"ps-card citizen",onClick:()=>r("/citizen-login"),children:[a.jsx("div",{className:"ps-icon-wrap",children:"👤"}),a.jsx("div",{className:"ps-card-title",children:"Citizen Login"}),a.jsx("div",{className:"ps-card-sep"}),a.jsx("div",{className:"ps-card-sub",children:"For Citizens — To Book an Appointment with the Mayor."}),a.jsx("button",{className:"ps-card-btn",children:"Citizen Login →"})]})]}),a.jsxs("div",{className:"ps-footer",children:[a.jsx("div",{className:"ps-dot"}),"Secure Government Portal · All rights reserved"]})]})]})]})}function $w(){const r=ao(),o=mt(),[l,s]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:""}),[u,f]=b.useState(!1),[p,x]=b.useState(!1),[h,m]=b.useState(!1);b.useEffect(()=>{const A=setTimeout(()=>m(!0),60);return()=>clearTimeout(A)},[]);const y=A=>s({...l,[A.target.name]:A.target.value}),v=async A=>{if(A.preventDefault(),!l.fullName||!l.userName||!l.mobileNumber||!l.email||!l.password){Se.error("All fields required ❌");return}try{f(!0);const z=(await Ie.post("/register",l)).data;if(!z.success){Se.error(z.message);return}r(rs(z.user)),localStorage.setItem("authUser",JSON.stringify(z.user)),Se.success("Registration Success ✅"),o("/dashboard")}catch(S){Se.error(S?.response?.data?.message||"Server Error ❌")}finally{f(!1)}},M=l.fullName&&l.userName&&l.mobileNumber&&l.email&&l.password;return a.jsxs(a.Fragment,{children:[u&&a.jsx($x,{}),a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"rp-root",children:[a.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${ro})`}}),a.jsx("div",{className:"rp-overlay"}),a.jsx("div",{className:"rp-stripe"}),a.jsxs("div",{className:"rp-wrapper",style:{opacity:h?1:0,transform:h?"translateX(0)":"translateX(160px)"},children:[a.jsxs("div",{className:"rp-card",children:[a.jsxs("div",{className:"rp-logo-row",children:[a.jsx("img",{src:En,alt:"VVCMC",className:"rp-logo-img"}),a.jsxs("div",{className:"rp-logo-texts",children:[a.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-logo-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"rp-ftitle",children:"Create Account"}),a.jsxs("form",{onSubmit:v,children:[a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Full Name"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"👤"}),a.jsx("input",{className:"rp-finput has-icon",type:"text",name:"fullName",placeholder:"Enter your full name",value:l.fullName,onChange:y,autoComplete:"name"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Username"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🪪"}),a.jsx("input",{className:"rp-finput has-icon",type:"text",name:"userName",placeholder:"Enter your username",value:l.userName,onChange:y,autoComplete:"username"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📱"}),a.jsx("input",{className:"rp-finput has-icon",type:"tel",name:"mobileNumber",placeholder:"Enter your mobile number",maxLength:10,value:l.mobileNumber,onChange:y})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Email"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"✉️"}),a.jsx("input",{className:"rp-finput has-icon",type:"email",name:"email",placeholder:"Enter your email",value:l.email,onChange:y,autoComplete:"email"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Password"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔒"}),a.jsx("input",{className:"rp-finput has-icon",type:p?"text":"password",name:"password",placeholder:"Enter your password",value:l.password,onChange:y,autoComplete:"new-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>x(!p),tabIndex:-1,children:p?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"rp-sbtn",disabled:!M||u,children:u?"⏳ Creating...":"CREATE ACCOUNT →"})]}),a.jsxs("p",{className:"rp-signin",children:["Already have an account?",a.jsx("a",{onClick:()=>o("/login"),children:"Sign in"})]})]}),a.jsxs("div",{className:"rp-cfooter",children:[a.jsx("div",{className:"rp-cfdot"}),a.jsx("span",{children:"Secure Government Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"rp-mayor-panel",style:{opacity:h?1:0,transform:h?"translate(0, 0)":"translate(80px, -60px)"},children:[a.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"rp-mp-icon tr",children:"🏥"}),a.jsx("span",{className:"rp-mp-icon bl",children:"🏗️"}),a.jsx("span",{className:"rp-mp-icon br",children:"🏢"}),a.jsxs("div",{className:"rp-mayor-photo-wrap",children:[a.jsx("div",{className:"rp-mayor-ring",children:a.jsx("img",{src:Zi,alt:"Mayor",className:"rp-mayor-photo"})}),a.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-mayor-bar-wrap",children:a.jsx("div",{className:"rp-mayor-bar"})})]})]})]})]})}const Iw="http://localhost:5000",k={teal:"#4CABC1",tealDeep:"#49ACC3",tealDark:"#187484",gold:"#CE9A54",goldDeep:"#CA9D28",sage:"#66A962",cream:"#F5E7C2",card1From:"#4CABC1",card1To:"#49ACC3",card2From:"#CE9A54",card2To:"#CA9D28",card3From:"#66A962",card3To:"#4a8f47",card4From:"#F5E7C2",card4To:"#e0c98a",bg:"#f0f7f9",white:"#ffffff",text:"#1a3a40",muted:"#6b8f95",border:"#d8edf1"},Ml=[k.teal,k.gold,k.sage,k.tealDeep,k.goldDeep,k.tealDark,k.gold,k.teal],Yw=["Super Admin","Guardian Minister","Mayor","Admin"],Fw=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}},Km={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",dot:"#f59e0b",label:"Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",dot:"#16a34a",label:"Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",dot:"#ef4444",label:"Rejected"},"in progress":{bg:"#dbeafe",color:"#1e40af",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},resolved:{bg:"#f0fdf4",color:"#166534",border:"#bbf7d0",dot:"#22c55e",label:"Resolved"}},Qx=r=>Km[(r||"pending").toLowerCase()]||Km.pending;function eh({color:r="#fff",data:o=[30,45,35,60,40,70,55]}){const u=Math.max(...o),f=Math.min(...o),p=o.map((h,m)=>`${m/(o.length-1)*90},${36-(h-f)/(u-f+1)*32-2}`).join(" "),x=`sg${r.replace("#","")}`;return a.jsxs("svg",{width:90,height:36,viewBox:"0 0 90 36",style:{opacity:.75},children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:x,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:".45"}),a.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:"0"})]})}),a.jsx("polygon",{points:`0,36 ${p} 90,36`,fill:`url(#${x})`}),a.jsx("polyline",{points:p,fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function qw({pct:r=0}){const l=2*Math.PI*46,s=r/100*l;return a.jsxs("svg",{width:112,height:112,viewBox:"0 0 112 112",children:[a.jsx("circle",{cx:56,cy:56,r:46,fill:"none",stroke:k.border,strokeWidth:12}),a.jsx("circle",{cx:56,cy:56,r:46,fill:"none",stroke:k.teal,strokeWidth:12,strokeDasharray:`${s} ${l-s}`,strokeLinecap:"round",transform:"rotate(-90 56 56)",style:{transition:"stroke-dasharray 1s ease"}}),a.jsxs("text",{x:56,y:52,textAnchor:"middle",fontSize:20,fontWeight:900,fill:k.tealDark,children:[r,"%"]}),a.jsx("text",{x:56,y:66,textAnchor:"middle",fontSize:9,fill:k.muted,fontWeight:700,letterSpacing:.8,children:"RESOLVED"})]})}function Vw({data:r=[],color:o=k.teal}){const l=Math.max(...r,1);return a.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:3,height:38},children:r.map((s,u)=>a.jsx("div",{style:{flex:1,borderRadius:"3px 3px 0 0",minHeight:4,background:u===r.length-1?o:`${o}66`,height:`${s/l*100}%`}},u))})}function Jx({name:r="",size:o=28,color:l=k.teal}){const s=r.split(" ").filter(Boolean).map(u=>u[0]).join("").slice(0,2).toUpperCase()||"?";return a.jsx("div",{style:{width:o,height:o,borderRadius:"50%",background:`linear-gradient(135deg,${l},${l}cc)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:o*.34,fontWeight:800,flexShrink:0,border:"2.5px solid #fff",boxShadow:`0 2px 8px ${l}44`},children:s})}function th(r="08:00 AM"){if(!r)return 0;const[o,l]=(r||"08:00 AM").split(" "),[s,u]=(o||"08:00").split(":").map(Number);let f=s||8;return l==="PM"&&f!==12&&(f+=12),l==="AM"&&f===12&&(f=0),Math.max(0,f*60+(u||0)-480)}function Pw(r){const o=new Date(r),l=o.getDay(),s=l===0?-6:1-l,u=new Date(o);return u.setDate(o.getDate()+s),Array.from({length:7},(f,p)=>{const x=new Date(u);return x.setDate(u.getDate()+p),x})}function ah(r,o){return r.getFullYear()===o.getFullYear()&&r.getMonth()===o.getMonth()&&r.getDate()===o.getDate()}const Gw=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function Xw({appt:r,color:o,onClose:l,anchorRect:s}){const u=Qx(r.status),f=b.useRef(null),[p,x]=b.useState({top:0,left:0,ready:!1}),h=242,m=b.useCallback(()=>{if(!s||!f.current)return;const y=f.current.offsetHeight||320,v=window.innerWidth,M=window.innerHeight,A=10;let S=s.right+8;S+h>v-A&&(S=s.left-h-8),S=Math.max(A,Math.min(S,v-h-A));let z=s.top;z+y>M-A&&(z=M-y-A),z=Math.max(A,z),x({top:z,left:S,ready:!0})},[s]);return b.useEffect(()=>{const y=requestAnimationFrame(m);return()=>cancelAnimationFrame(y)},[m]),b.useEffect(()=>(window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[m]),b.useEffect(()=>{const y=v=>{f.current&&!f.current.contains(v.target)&&l()};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[l]),b.useEffect(()=>{let y;const v=()=>{clearTimeout(y),y=setTimeout(l,120)};return window.addEventListener("scroll",v,!0),()=>{window.removeEventListener("scroll",v,!0),clearTimeout(y)}},[l]),b.useEffect(()=>{const y=v=>{v.key==="Escape"&&l()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[l]),a.jsxs("div",{ref:f,style:{position:"fixed",top:p.top,left:p.left,opacity:p.ready?1:0,transition:"opacity .1s",zIndex:99999,width:h,background:k.white,borderRadius:14,boxShadow:"0 8px 36px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.10)",border:`1px solid ${k.border}`,overflow:"hidden",animation:"popIn .15s cubic-bezier(.34,1.4,.64,1)"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg,${o},${o}dd)`,padding:"11px 12px 10px",display:"flex",alignItems:"center",gap:10},children:[a.jsx(Jx,{name:r.fullName,size:36,color:o}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#fff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.fullName||"—"}),a.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.82)",marginTop:2,fontWeight:600},children:r.slotTime||"—"})]}),a.jsx("button",{onClick:y=>{y.stopPropagation(),l()},style:{background:"rgba(255,255,255,0.22)",border:"none",borderRadius:"50%",width:22,height:22,cursor:"pointer",color:"#fff",fontSize:13,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1},children:"✕"})]}),a.jsxs("div",{style:{padding:"10px 13px 12px"},children:[a.jsx(Fi,{icon:"📱",val:r.mobileNumber||"—",bold:!0}),a.jsx(Fi,{icon:"📍",val:`Ward: ${r.ward||"—"}`}),r.purpose&&a.jsx(Fi,{icon:"🎯",val:r.purpose.slice(0,44)+(r.purpose.length>44?"…":"")}),a.jsx(Fi,{icon:"👥",val:`Visitors: ${r.numberOfVisitors||1}`}),r.preferredDate&&a.jsx(Fi,{icon:"📅",val:new Date(r.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}),a.jsx("div",{style:{marginTop:8,marginBottom:8},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,background:u.bg,color:u.color,border:`1.5px solid ${u.border}`,padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:800},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:u.dot,display:"inline-block"}}),u.label]})}),(r.tokenId||r._id)&&a.jsxs("div",{style:{fontSize:9.5,color:k.muted,fontWeight:600,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["Token: ",r.tokenId||r._id?.slice(-12)||"—"]}),a.jsx("div",{style:{borderTop:`1px solid ${k.border}`,marginTop:10,paddingTop:8,display:"flex",justifyContent:"flex-end"},children:a.jsx("span",{style:{fontSize:11.5,color:k.teal,fontWeight:800,cursor:"pointer"},children:"View Details ↗"})})]})]})}function Fi({icon:r,val:o,bold:l=!1}){return a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{fontSize:13,flexShrink:0,marginTop:1},children:r}),a.jsx("span",{style:{fontSize:11.5,fontWeight:l?700:600,color:l?k.text:k.muted,lineHeight:1.4},children:o})]})}function nh({appt:r,color:o}){const[l,s]=b.useState(null),u=b.useRef(null),f=!!l,p=b.useCallback(h=>{if(h.stopPropagation(),f){s(null);return}const m=u.current?.getBoundingClientRect();m&&s({...m})},[f]),x=b.useCallback(()=>s(null),[]);return a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:u,onClick:p,style:{background:f?`${o}22`:`${o}14`,border:`1.5px solid ${f?o:o+"55"}`,borderLeft:`3px solid ${o}`,borderRadius:"0 8px 8px 0",padding:"5px 8px",cursor:"pointer",marginBottom:4,userSelect:"none",transition:"all .13s",boxShadow:f?`0 4px 14px ${o}33`:"none"},onMouseEnter:h=>{h.currentTarget.style.background=`${o}26`,h.currentTarget.style.borderColor=o,h.currentTarget.style.transform="translateY(-1px)",h.currentTarget.style.boxShadow=`0 4px 14px ${o}33`},onMouseLeave:h=>{h.currentTarget.style.background=f?`${o}22`:`${o}14`,h.currentTarget.style.borderColor=f?o:`${o}55`,h.currentTarget.style.borderLeftColor=o,h.currentTarget.style.transform="none",h.currentTarget.style.boxShadow=f?`0 4px 14px ${o}33`:"none"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(Jx,{name:r.fullName,size:20,color:o}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:10.5,fontWeight:800,color:k.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.fullName||"—"}),a.jsxs("div",{style:{fontSize:9,fontWeight:700,color:o,marginTop:1,display:"flex",alignItems:"center",gap:5},children:[r.slotTime||"—",a.jsx("span",{style:{width:5,height:5,borderRadius:"50%",flexShrink:0,background:Qx(r.status).dot,display:"inline-block"}})]})]})]})}),f&&a.jsx(Xw,{appt:r,color:o,onClose:x,anchorRect:l})]})}function Qw({appointments:r=[],mayorSlots:o=[],loading:l=!1}){const[s,u]=b.useState("week"),[f,p]=b.useState(new Date),[x,h]=b.useState(""),m=Pw(f),y=new Date,v=r.filter(U=>{if(!x)return!0;const O=x.toLowerCase();return(U.fullName||"").toLowerCase().includes(O)||(U.purpose||"").toLowerCase().includes(O)||(U.ward||"").toLowerCase().includes(O)||(U.mobileNumber||"").includes(O)}),M=U=>`${U.getFullYear()}-${String(U.getMonth()+1).padStart(2,"0")}-${String(U.getDate()).padStart(2,"0")}`,A=U=>v.filter(O=>(O.preferredDate||"").slice(0,10)===M(U)),S=M(y),z=v.filter(U=>(U.preferredDate||"").slice(0,10)===S),E=v.filter(U=>(U.status||"").toLowerCase()==="approved").length,R=v.filter(U=>(U.status||"").toLowerCase()==="pending").length,C=m[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"}),B=Array.from({length:10},(U,O)=>8+O),G=U=>U<12?`${U} AM`:U===12?"12 PM":`${U-12} PM`;return a.jsxs("div",{className:"dc",style:{animationDelay:".3s",background:k.white,borderRadius:16,overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.07)",border:`1px solid ${k.border}`,display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{padding:"13px 16px 10px",borderBottom:`1px solid ${k.border}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10,gap:8,flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{margin:0,fontSize:14,fontWeight:900,color:k.tealDark},children:"📅 Today's Appointments"}),a.jsx("p",{style:{margin:"2px 0 0",fontSize:10,color:k.muted,fontWeight:600},children:y.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})})]}),a.jsxs("div",{style:{background:`linear-gradient(135deg,${k.teal},${k.tealDark})`,color:"#fff",fontSize:12,fontWeight:900,padding:"3px 12px",borderRadius:20,boxShadow:`0 3px 10px ${k.teal}44`,whiteSpace:"nowrap"},children:[v.length," All Appointments"]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("span",{style:{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",fontSize:11,color:k.muted},children:"🔍"}),a.jsx("input",{value:x,onChange:U=>h(U.target.value),placeholder:"Search...",style:{border:`1.5px solid ${k.border}`,borderRadius:8,padding:"5px 10px 5px 26px",fontSize:11,color:k.text,outline:"none",background:k.bg,width:130,fontFamily:"inherit"}})]}),a.jsx("div",{style:{display:"flex",background:k.bg,border:`1px solid ${k.border}`,borderRadius:9,padding:2},children:["Day","Week"].map(U=>a.jsx("button",{onClick:()=>u(U.toLowerCase()),style:{padding:"4px 12px",borderRadius:7,border:"none",background:s===U.toLowerCase()?`linear-gradient(135deg,${k.teal},${k.tealDark})`:"transparent",color:s===U.toLowerCase()?"#fff":k.muted,fontSize:11,fontWeight:800,cursor:"pointer",transition:"all .15s"},children:U},U))})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:6},children:[s==="week"?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("button",{onClick:()=>{const U=new Date(f);U.setDate(U.getDate()-7),p(U)},style:{background:k.bg,border:`1px solid ${k.border}`,borderRadius:7,width:28,height:28,cursor:"pointer",fontSize:14,color:k.tealDark,fontWeight:800},children:"‹"}),a.jsx("span",{style:{fontSize:12,fontWeight:800,color:k.tealDark,minWidth:120,textAlign:"center"},children:C}),a.jsx("button",{onClick:()=>{const U=new Date(f);U.setDate(U.getDate()+7),p(U)},style:{background:k.bg,border:`1px solid ${k.border}`,borderRadius:7,width:28,height:28,cursor:"pointer",fontSize:14,color:k.tealDark,fontWeight:800},children:"›"})]}):a.jsx("div",{}),a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[{l:"Today",v:z.length,c:k.teal},{l:"Approved",v:E,c:k.sage},{l:"Pending",v:R,c:k.gold}].map(({l:U,v:O,c:$})=>a.jsxs("span",{style:{background:`${$}18`,border:`1px solid ${$}44`,borderRadius:20,padding:"2px 10px",fontSize:10,fontWeight:800,color:$,whiteSpace:"nowrap"},children:[O," ",U]},U))})]})]}),o.length>0&&a.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",padding:"5px 16px",background:`${k.cream}88`,borderBottom:`1px solid ${k.border}`},children:[a.jsx("span",{style:{fontSize:9,fontWeight:800,color:k.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"},children:"Mayor Available:"}),o.map((U,O)=>a.jsxs("span",{style:{fontSize:9.5,fontWeight:700,color:k.tealDark,background:`${k.teal}1a`,border:`1px solid ${k.teal}33`,borderRadius:20,padding:"2px 9px"},children:[U.start," – ",U.end]},O))]}),l?a.jsxs("div",{style:{textAlign:"center",padding:"48px 0",color:k.muted},children:[a.jsx("div",{style:{width:26,height:26,border:`3px solid ${k.border}`,borderTopColor:k.teal,borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}),"Loading appointments…"]}):s==="week"?a.jsx("div",{style:{overflowX:"auto",overflowY:"auto",maxHeight:380},children:a.jsxs("div",{style:{minWidth:560},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",borderBottom:`1.5px solid ${k.border}`,background:k.bg,position:"sticky",top:0,zIndex:4},children:[a.jsx("div",{style:{borderRight:`1px solid ${k.border}`}}),m.map((U,O)=>{const $=ah(U,y),Q=A(U).length;return a.jsxs("div",{style:{padding:"7px 3px",textAlign:"center",borderRight:O<6?`1px solid ${k.border}`:void 0,background:$?`${k.teal}0e`:"transparent"},children:[a.jsx("div",{style:{fontSize:9.5,fontWeight:700,color:$?k.teal:k.muted,letterSpacing:.4},children:Gw[O]}),a.jsx("div",{style:{width:27,height:27,borderRadius:"50%",margin:"2px auto 0",background:$?`linear-gradient(135deg,${k.teal},${k.tealDark})`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900,color:$?"#fff":k.text},children:U.getDate()}),Q>0&&a.jsx("div",{style:{marginTop:2,fontSize:8,fontWeight:800,color:$?"#fff":k.teal,background:$?`${k.teal}cc`:`${k.teal}18`,borderRadius:20,padding:"1px 5px",display:"inline-block"},children:Q})]},O)})]}),B.map(U=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"50px repeat(7,1fr)",borderBottom:`1px solid ${k.border}55`,minHeight:54},children:[a.jsx("div",{style:{borderRight:`1px solid ${k.border}`,padding:"4px 5px 0 0",textAlign:"right",fontSize:9,fontWeight:700,color:k.muted,background:k.bg,position:"sticky",left:0,zIndex:2},children:G(U)}),m.map((O,$)=>{const Q=ah(O,y),ue=A(O).filter(ge=>{const P=th(ge.slotTime||"");return P>=(U-8)*60&&P<(U-8+1)*60});return a.jsx("div",{style:{borderRight:$<6?`1px solid ${k.border}55`:void 0,padding:"3px 3px",background:Q?`${k.teal}05`:"transparent"},children:ue.map((ge,P)=>{const le=v.indexOf(ge);return a.jsx(nh,{appt:ge,color:Ml[le%Ml.length]},P)})},$)})]},U))]})}):a.jsx("div",{style:{overflowY:"auto",maxHeight:380},children:z.length===0?a.jsxs("div",{style:{textAlign:"center",padding:"44px 0",color:k.muted},children:[a.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📅"}),a.jsx("div",{style:{fontWeight:700,fontSize:13,color:k.text,marginBottom:3},children:"No appointments today"}),a.jsx("div",{style:{fontSize:11},children:"Switch to Week view to browse other days"})]}):a.jsx("div",{style:{padding:"8px 16px"},children:B.map(U=>{const O=U<12?`${U}:00 AM`:U===12?"12:00 PM":`${U-12}:00 PM`,$=z.filter(Q=>{const ue=th(Q.slotTime||"");return ue>=(U-8)*60&&ue<(U-8+1)*60});return a.jsxs("div",{style:{display:"flex",gap:10,marginBottom:$.length?8:2},children:[a.jsx("div",{style:{width:56,fontSize:9,fontWeight:$.length?800:600,color:$.length?k.teal:k.border,textAlign:"right",paddingTop:5,flexShrink:0,fontFamily:"monospace"},children:O}),a.jsx("div",{style:{flex:1,borderTop:$.length?"none":`1px solid ${k.border}33`,paddingTop:$.length?0:5},children:$.length>0&&a.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min($.length,3)},1fr)`,gap:6},children:$.map((Q,ue)=>{const ge=v.indexOf(Q);return a.jsx(nh,{appt:Q,color:Ml[ge%Ml.length]},ue)})})})]},U)})})}),a.jsxs("div",{style:{borderTop:`1px solid ${k.border}`,padding:"6px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",background:k.bg,flexWrap:"wrap",gap:4},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:k.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 6px ${k.sage}`}}),a.jsx("span",{style:{fontSize:9.5,color:k.muted,fontWeight:700},children:"Live · 8:00 AM – 6:00 PM"})]}),a.jsxs("span",{style:{fontSize:9.5,color:k.muted},children:[v.length," total appointments"]})]})]})}function rh({value:r,max:o,color:l}){const s=o>0?Math.round(r/o*100):0;return a.jsx("div",{style:{height:6,borderRadius:99,background:k.bg,overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",width:`${s}%`,background:l,borderRadius:99,transition:"width 1s ease"}})})}function Jw(){const r=mt(),{user:o}=xs(N=>N.auth),[l,s]=b.useState({total:0,pending:0,resolved:0,inProgress:0}),[u,f]=b.useState([]),[p,x]=b.useState({}),[h,m]=b.useState([4,7,5,9,12,8,15]),[y,v]=b.useState(!0),[M,A]=b.useState("all"),[S,z]=b.useState([]),[E,R]=b.useState(!0),[C,B]=b.useState([]),[G,U]=b.useState(0),[O,$]=b.useState({totalMeetings:0,totalSubjects:0,approved:0,rejected:0,onHold:0,postponed:0,notConducted:0,actionTakenSubjects:0,subjectsByType:{General:0,Administrative:0,Contract:0},actionProgress:{},departmentStats:{}}),[Q,ue]=b.useState(!0),ge=Fw(),P=ge?.role||"",le=ge?.departmentName||"",H=Yw.includes(P),me=b.useCallback(async()=>{v(!0);try{let Y=(await Ie.get("/inwardAll")).data?.data||[];if(!H&&le&&(Y=Y.filter(fe=>fe.mainDepartment&&fe.mainDepartment===le||fe.departmentName&&fe.departmentName===le||Array.isArray(fe.departments)&&fe.departments.includes(le))),s({total:Y.length,pending:Y.filter(fe=>fe.status==="Pending").length,resolved:Y.filter(fe=>fe.status==="Resolved").length,inProgress:Y.filter(fe=>fe.status==="In Progress").length}),H){const fe={};Y.forEach(be=>{be.taluka&&(fe[be.taluka]=(fe[be.taluka]||0)+1)}),x(fe)}const D=Date.now(),se=Array(7).fill(0);Y.forEach(fe=>{const be=Math.floor((D-new Date(fe.createdAt))/864e5);be>=0&&be<7&&se[6-be]++}),m(se.map(fe=>fe||Math.floor(2+Math.random()*6))),f(Y.slice(0,8))}catch(N){console.error(N)}finally{v(!1)}},[H,le]),we=b.useCallback(async()=>{if(!H){R(!1);return}R(!0);try{const N=await zt.get("/citizen/admin/all-appointments");N.data.success&&z(N.data.appointments||[])}catch(N){console.error(N),z([])}finally{R(!1)}},[H]),F=b.useCallback(async()=>{if(H)try{const N=await Xe.get(`${Iw}/api/availability/get`);if(N.data.success){const Y=new Date().toISOString().slice(0,10),D=N.data.data.find(se=>se.date===Y);B(D?.timeSlots||[])}}catch(N){console.error(N)}},[H]),ie=b.useCallback(async()=>{ue(!0);try{const Y=(await Ie.get("/getMeetings")).data?.data||[],D=[];Y.forEach(he=>{(he.subjects||[]).forEach(q=>{(H||Array.isArray(q.tagTo)&&q.tagTo.includes(le))&&D.push({...q,meetingNumber:he.meetingNumber})})});const se=H?Y:Y.filter(he=>(he.subjects||[]).some(q=>Array.isArray(q.tagTo)&&q.tagTo.includes(le))),fe=D.filter(he=>he.decisionInMeeting==="Approved").length,be=D.filter(he=>he.decisionInMeeting==="Rejected").length,Ne=D.filter(he=>he.decisionInMeeting==="On-Hold").length,Qe=D.filter(he=>he.decisionInMeeting==="Postponed").length,at=D.filter(he=>he.decisionInMeeting==="Not Conducted").length,aa=D.filter(he=>he.actionTaken&&he.actionTaken!=="").length,Yt={General:D.filter(he=>he.subjectType==="General").length,Administrative:D.filter(he=>he.subjectType==="Administrative and Financial Approval").length,Contract:D.filter(he=>he.subjectType==="Contract Approval").length},re={};D.forEach(he=>{he.actionTaken&&(re[he.actionTaken]=(re[he.actionTaken]||0)+1)});const ve={};D.forEach(he=>{(he.tagTo||[]).forEach(q=>{!H&&q!==le||(ve[q]||(ve[q]={total:0,approved:0,actionTaken:0}),ve[q].total++,he.decisionInMeeting==="Approved"&&ve[q].approved++,he.actionTaken&&ve[q].actionTaken++)})}),$({totalMeetings:se.length,totalSubjects:D.length,approved:fe,rejected:be,onHold:Ne,postponed:Qe,notConducted:at,actionTakenSubjects:aa,subjectsByType:Yt,actionProgress:re,departmentStats:ve})}catch(N){console.error(N)}finally{ue(!1)}},[H,le]);b.useEffect(()=>{me(),we(),F(),ie();const N=setInterval(()=>U(Math.floor(12+Math.random()*8)),4e3);return U(Math.floor(12+Math.random()*8)),()=>clearInterval(N)},[me,we,F,ie]);const pe=l.total>0?Math.round(l.resolved/l.total*100):0,K={Pending:k.gold,Resolved:k.sage,"In Progress":k.teal,Rejected:"#d9534f"},L={Pending:`${k.gold}22`,Resolved:`${k.sage}22`,"In Progress":`${k.teal}22`,Rejected:"#fde8e8"},j=M==="all"?u:u.filter(N=>N.status===M),T=[{label:"TOTAL APPLICATIONS",value:l.total.toLocaleString(),sub:"▲ 12% last week",from:k.card1From,to:k.card1To,spark:[40,55,45,70,60,85,75],dark:!1},{label:"PENDING",value:l.pending.toLocaleString(),sub:"▼ 5% last week",from:k.card2From,to:k.card2To,spark:[30,50,35,60,40,70,55],dark:!1},{label:"RESOLVED",value:l.resolved.toLocaleString(),sub:"▲ 8% last week",from:k.card3From,to:k.card3To,spark:[20,40,30,55,45,65,60],dark:!1},{label:"IN PROGRESS",value:l.inProgress.toLocaleString(),sub:"— ongoing",from:k.card4From,to:k.card4To,spark:[15,30,25,40,35,50,45],dark:!0}];return a.jsxs("div",{style:{minHeight:"100vh",background:k.bg,fontFamily:"'Nunito','Segoe UI',sans-serif"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
        @keyframes popIn  {from{opacity:0;transform:scale(.92) translateY(-4px)}to{opacity:1;transform:none}}
        @keyframes pulse  {0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes spin   {to{transform:rotate(360deg)}}
        .dc{animation:fadeUp .4s ease both;}
        .tbl-row:hover{background:${k.teal}12!important;cursor:pointer;}
        ::-webkit-scrollbar{width:5px;height:5px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:${k.border};border-radius:99px;}
        *{box-sizing:border-box;}
        .dash-grid-4    {display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
        .dash-grid-cal  {display:grid;grid-template-columns:1fr 288px;gap:18px;}
        .dash-grid-track{display:grid;grid-template-columns:260px 1fr;gap:18px;}
        .mtg-grid-3     {display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;}
        @media(max-width:1100px){
          .dash-grid-cal  {grid-template-columns:1fr!important;}
          .dash-grid-track{grid-template-columns:1fr!important;}
          .mtg-grid-3     {grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:800px){
          .dash-grid-4{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;}
          .mtg-grid-3 {grid-template-columns:1fr!important;}
        }
        @media(max-width:480px){
          .dash-grid-4{grid-template-columns:1fr!important;}
          .dash-pad{padding:12px 10px!important;}
        }
      `}),a.jsxs("div",{className:"dash-pad",style:{padding:"20px 24px",maxWidth:1440,margin:"0 auto"},children:[a.jsx("div",{style:{height:4,background:`linear-gradient(90deg,${k.tealDark},${k.teal},${k.gold},${k.goldDeep},${k.cream},${k.goldDeep},${k.teal})`,borderRadius:99,marginBottom:20}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{margin:0,fontSize:19,fontWeight:900,color:k.tealDark,letterSpacing:-.3},children:"Analytic Overview"}),a.jsxs("p",{style:{margin:"3px 0 0",fontSize:11,color:k.muted},children:["Good ",new Date().getHours()<12?"Morning":new Date().getHours()<17?"Afternoon":"Evening",", ",o?.fullName?.split(" ")[0]||"Admin"," 👋",!H&&le&&a.jsx("span",{style:{marginLeft:8,background:`${k.teal}18`,color:k.tealDark,border:`1px solid ${k.teal}33`,borderRadius:20,padding:"1px 10px",fontSize:10,fontWeight:800},children:le})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[a.jsx("button",{onClick:()=>{me(),we(),F(),ie()},style:{background:k.white,border:`1px solid ${k.border}`,borderRadius:9,padding:"6px 13px",fontSize:11,fontWeight:700,color:k.tealDark,cursor:"pointer"},children:"↻ Refresh"}),H&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:k.white,border:`1px solid ${k.border}`,borderRadius:10,padding:"6px 12px"},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:k.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 7px ${k.sage}`}}),a.jsxs("span",{style:{fontSize:11,fontWeight:700,color:k.tealDark},children:[G," Online"]})]}),a.jsx("div",{style:{background:k.white,border:`1px solid ${k.border}`,borderRadius:9,padding:"6px 12px",fontSize:11,fontWeight:700,color:k.tealDark},children:"THIS YEAR ▾"})]})]}),y?a.jsx("div",{style:{textAlign:"center",padding:80,color:k.teal,fontWeight:700},children:"Loading dashboard…"}):a.jsxs(a.Fragment,{children:[H&&a.jsx("div",{className:"dash-grid-4",style:{marginBottom:18},children:T.map((N,Y)=>a.jsxs("div",{className:"dc",style:{animationDelay:`${Y*.07}s`,borderRadius:16,background:`linear-gradient(135deg,${N.from},${N.to})`,padding:"16px 18px",boxShadow:`0 8px 28px ${N.from}55`,position:"relative",overflow:"hidden",minHeight:105},children:[a.jsx("div",{style:{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}),a.jsx("div",{style:{position:"absolute",bottom:-12,right:8,width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.09)"}}),a.jsx("div",{style:{fontSize:9,fontWeight:800,color:N.dark?"#6b5020":"rgba(255,255,255,.88)",letterSpacing:.9,textTransform:"uppercase",marginBottom:4},children:N.label}),a.jsx("div",{style:{fontSize:26,fontWeight:900,color:N.dark?k.tealDark:"#fff",letterSpacing:-1,marginBottom:2},children:N.value}),a.jsx("div",{style:{fontSize:9.5,color:N.dark?"#8a6830":"rgba(255,255,255,.72)",fontWeight:600,marginBottom:7},children:N.sub}),a.jsx(eh,{color:N.dark?"#9a7828":"#fff",data:N.spark})]},Y))}),H&&a.jsxs("div",{className:"dash-grid-cal",style:{marginBottom:18},children:[a.jsx(Qw,{appointments:S,mayorSlots:C,loading:E}),a.jsxs("div",{className:"dc",style:{animationDelay:".37s",background:k.white,borderRadius:16,padding:"16px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${k.border}`,display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[a.jsx("h3",{style:{margin:0,fontSize:13,fontWeight:900,color:k.tealDark},children:"Status"}),a.jsx("div",{style:{background:k.bg,border:`1px solid ${k.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:k.tealDark},children:"TODAY ▾"})]}),a.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2px 0 6px"},children:a.jsx(qw,{pct:pe})}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10},children:[{l:"BOOKED",v:l.total,c:k.teal},{l:"PROGRESS",v:l.inProgress,c:k.gold},{l:"PENDING",v:l.pending,c:"#d9534f"}].map(({l:N,v:Y,c:D})=>a.jsxs("div",{style:{textAlign:"center",padding:"8px 3px",background:k.bg,borderRadius:9,border:`1px solid ${k.border}`},children:[a.jsx("div",{style:{fontSize:15,fontWeight:900,color:D},children:Y}),a.jsx("div",{style:{fontSize:7,fontWeight:800,color:k.muted,letterSpacing:.4,textTransform:"uppercase",marginTop:2},children:N})]},N))}),a.jsxs("div",{style:{borderTop:`1px solid ${k.border}`,paddingTop:8,marginBottom:8},children:[a.jsx("div",{style:{fontSize:10,fontWeight:800,color:k.tealDark,marginBottom:6},children:"📅 Appointments"}),[{l:"Total",v:S.length,c:k.teal},{l:"Approved",v:S.filter(N=>(N.status||"").toLowerCase()==="approved").length,c:k.sage},{l:"Pending",v:S.filter(N=>(N.status||"").toLowerCase()==="pending").length,c:k.gold},{l:"In Progress",v:S.filter(N=>(N.status||"").toLowerCase()==="in progress").length,c:k.tealDeep}].map(({l:N,v:Y,c:D})=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"2.5px 0"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4,fontSize:9.5,color:k.muted,fontWeight:600},children:[a.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:D,display:"inline-block"}}),N]}),a.jsx("span",{style:{fontSize:10.5,fontWeight:800,color:D},children:Y})]},N))]}),C.length>0&&a.jsxs("div",{style:{borderTop:`1px solid ${k.border}`,paddingTop:7,marginBottom:8},children:[a.jsx("div",{style:{fontSize:10,fontWeight:800,color:k.tealDark,marginBottom:5},children:"🏛 Mayor Today"}),C.map((N,Y)=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0",fontSize:9.5,color:k.muted,fontWeight:600},children:[a.jsxs("span",{children:["Slot ",Y+1]}),a.jsxs("span",{style:{color:k.tealDark,fontWeight:800},children:[N.start," – ",N.end]})]},Y))]}),a.jsxs("div",{style:{borderTop:`1px solid ${k.border}`,paddingTop:8},children:[a.jsx("div",{style:{fontSize:10.5,fontWeight:800,color:k.tealDark,marginBottom:6},children:"📈 Weekly Trend"}),a.jsx(Vw,{data:h,color:k.teal}),a.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:["M","T","W","T","F","S","S"].map((N,Y)=>a.jsx("span",{style:{fontSize:8.5,color:k.muted,flex:1,textAlign:"center",fontWeight:700},children:N},Y))})]})]})]}),H&&a.jsxs("div",{className:"dash-grid-track",style:{marginBottom:18},children:[a.jsxs("div",{className:"dc",style:{animationDelay:".44s",background:k.white,borderRadius:16,padding:"18px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${k.border}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[a.jsx("h3",{style:{margin:0,fontSize:13,fontWeight:900,color:k.tealDark},children:"Tracking"}),a.jsx("div",{style:{background:k.bg,border:`1px solid ${k.border}`,borderRadius:7,padding:"3px 8px",fontSize:9.5,fontWeight:700,color:k.tealDark},children:"THIS YEAR ▾"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0 2px 7px",borderBottom:`1px solid ${k.border}`,marginBottom:5},children:[a.jsx("span",{style:{fontSize:9,fontWeight:800,color:k.muted,textTransform:"uppercase",letterSpacing:.5},children:"Region"}),a.jsx("span",{style:{fontSize:9,fontWeight:800,color:k.muted,textTransform:"uppercase",letterSpacing:.5},children:"Amount"})]}),Object.entries(p).sort((N,Y)=>Y[1]-N[1]).slice(0,6).map(([N,Y],D)=>{const se=[k.teal,k.gold,k.sage,k.tealDeep,k.goldDeep,k.tealDark],fe=se[D%se.length];return a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 2px",borderBottom:`1px solid ${k.border}55`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[a.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:fe}}),a.jsx("span",{style:{fontSize:11.5,fontWeight:600,color:k.text},children:N})]}),a.jsx("span",{style:{fontSize:11.5,fontWeight:800,color:fe},children:Y})]},N)}),!Object.keys(p).length&&a.jsx("div",{style:{textAlign:"center",color:k.muted,fontSize:12,padding:"18px 0"},children:"No data yet"})]}),a.jsxs("div",{className:"dc",style:{animationDelay:".51s",background:k.white,borderRadius:16,padding:"18px 20px",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",border:`1px solid ${k.border}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:8},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{margin:0,fontSize:14,fontWeight:900,color:k.tealDark},children:"Recent Applications"}),a.jsx("p",{style:{margin:"2px 0 0",fontSize:10,color:k.muted},children:"Latest inward complaints"})]}),a.jsx("div",{style:{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"},children:["all","Pending","Resolved","In Progress"].map(N=>a.jsx("button",{onClick:()=>A(N),style:{border:`1px solid ${M===N?k.teal:k.border}`,background:M===N?`linear-gradient(135deg,${k.teal},${k.tealDark})`:k.white,color:M===N?"#fff":k.muted,borderRadius:8,padding:"4px 11px",fontSize:10.5,fontWeight:700,cursor:"pointer",boxShadow:M===N?`0 4px 12px ${k.teal}44`:"none",transition:"all .2s"},children:N==="all"?"All":N},N))})]}),a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:11.5},children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:k.bg},children:["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map(N=>a.jsx("th",{style:{padding:"8px 10px",textAlign:"left",color:k.tealDark,fontWeight:800,fontSize:9.5,whiteSpace:"nowrap",letterSpacing:.3,textTransform:"uppercase",borderBottom:`2px solid ${k.border}`},children:N},N))})}),a.jsx("tbody",{children:j.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,style:{textAlign:"center",padding:28,color:k.muted},children:"No applications found"})}):j.map((N,Y)=>a.jsxs("tr",{className:"tbl-row",onClick:()=>r("/allapplication"),style:{borderBottom:`1px solid ${k.border}55`,transition:"background .15s"},children:[a.jsx("td",{style:{padding:"8px 10px",color:k.teal,fontWeight:800,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:10.5},children:N.inwardNo||"—"}),a.jsx("td",{style:{padding:"8px 10px",fontWeight:700,color:k.text},children:N.fullName||"—"}),a.jsx("td",{style:{padding:"8px 10px",color:k.muted,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:N.subject||"—"}),a.jsx("td",{style:{padding:"8px 10px",color:k.muted},children:N.taluka||"—"}),a.jsx("td",{style:{padding:"8px 10px",color:k.muted,whiteSpace:"nowrap"},children:N.mainDepartment||"—"}),a.jsx("td",{style:{padding:"8px 10px"},children:a.jsx("span",{style:{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,background:N.priority==="Emergency"?"#fde8e8":N.priority==="Urgent"?`${k.gold}22`:`${k.sage}22`,color:N.priority==="Emergency"?"#d9534f":N.priority==="Urgent"?k.goldDeep:k.sage,border:`1px solid ${N.priority==="Emergency"?"#f5c6c6":N.priority==="Urgent"?k.gold+"44":k.sage+"44"}`},children:N.priority||"Normal"})}),a.jsx("td",{style:{padding:"8px 10px"},children:a.jsx("span",{style:{fontSize:9.5,fontWeight:800,padding:"2px 8px",borderRadius:20,background:L[N.status]||`${k.border}55`,color:K[N.status]||k.muted,border:`1px solid ${K[N.status]||k.border}44`},children:N.status||"—"})}),a.jsx("td",{style:{padding:"8px 10px",color:k.muted,whiteSpace:"nowrap",fontSize:10.5},children:N.submissionDate||(N.createdAt?new Date(N.createdAt).toLocaleDateString("en-IN"):"—")})]},Y))})]})}),a.jsxs("div",{style:{marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8},children:[a.jsxs("span",{style:{fontSize:10.5,color:k.muted},children:["Showing ",j.length," of ",l.total]}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>r("/allapplication"),style:{background:`linear-gradient(135deg,${k.teal},${k.tealDark})`,color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${k.teal}55`},children:"All Applications →"}),a.jsx("button",{onClick:()=>r("/applicationcitizens"),style:{background:`linear-gradient(135deg,${k.gold},${k.goldDeep})`,color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${k.gold}55`},children:"Citizen Appts →"})]})]})]})]}),!Q&&a.jsxs("div",{className:"dc",style:{animationDelay:".58s",marginBottom:18},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:16},children:[a.jsx("div",{style:{flex:1,height:1.5,background:`linear-gradient(90deg,${k.teal},${k.border})`,borderRadius:99}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[a.jsx("span",{style:{fontSize:18},children:"🏛"}),a.jsx("span",{style:{fontSize:14,fontWeight:900,color:k.tealDark,whiteSpace:"nowrap"},children:"Meeting Proceedings Analytics"})]}),a.jsx("div",{style:{flex:1,height:1.5,background:`linear-gradient(90deg,${k.border},${k.teal})`,borderRadius:99}})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,flexWrap:"wrap",gap:8},children:[a.jsxs("p",{style:{margin:0,fontSize:10.5,color:k.muted,fontWeight:600},children:["Sabha Kamkaj — Subject wise progress tracking",!H&&le&&a.jsx("span",{style:{marginLeft:8,background:`${k.teal}18`,color:k.tealDark,border:`1px solid ${k.teal}33`,borderRadius:20,padding:"1px 10px",fontSize:10,fontWeight:800},children:le})]}),a.jsx("button",{onClick:()=>r("/meetings"),style:{background:`linear-gradient(135deg,${k.teal},${k.tealDark})`,color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",fontSize:11,fontWeight:800,cursor:"pointer",boxShadow:`0 4px 14px ${k.teal}55`},children:"View Meetings →"})]}),a.jsx("div",{className:"dash-grid-4",style:{marginBottom:16},children:[{label:"TOTAL MEETINGS",value:O.totalMeetings,from:k.card1From,to:k.card1To,spark:[2,3,1,4,2,5,3]},{label:"TOTAL SUBJECTS",value:O.totalSubjects,from:k.card2From,to:k.card2To,spark:[5,8,6,10,7,12,9]},{label:"APPROVED",value:O.approved,from:k.card3From,to:k.card3To,spark:[3,5,4,7,5,9,7]},{label:"ACTION TAKEN",value:O.actionTakenSubjects,from:k.tealDeep,to:k.tealDark,spark:[1,2,2,4,3,5,4]}].map((N,Y)=>a.jsxs("div",{style:{borderRadius:14,background:`linear-gradient(135deg,${N.from},${N.to})`,padding:"14px 16px",boxShadow:`0 6px 20px ${N.from}44`,position:"relative",overflow:"hidden",minHeight:90},children:[a.jsx("div",{style:{position:"absolute",top:-14,right:-14,width:60,height:60,borderRadius:"50%",background:"rgba(255,255,255,0.13)"}}),a.jsx("div",{style:{fontSize:9,fontWeight:800,color:"rgba(255,255,255,.85)",letterSpacing:.8,textTransform:"uppercase",marginBottom:4},children:N.label}),a.jsx("div",{style:{fontSize:28,fontWeight:900,color:"#fff",letterSpacing:-1,marginBottom:4},children:N.value}),a.jsx(eh,{color:"#fff",data:N.spark})]},Y))}),H?a.jsxs("div",{className:"mtg-grid-3",style:{marginBottom:14},children:[a.jsxs("div",{style:{background:k.white,borderRadius:14,padding:"16px",border:`1px solid ${k.border}`,boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[a.jsx("div",{style:{fontSize:11,fontWeight:900,color:k.tealDark,marginBottom:12},children:"📊 Decision Breakdown"}),[{l:"Approved",v:O.approved,c:k.sage},{l:"Rejected",v:O.rejected,c:"#d9534f"},{l:"On-Hold",v:O.onHold,c:k.gold},{l:"Postponed",v:O.postponed,c:k.tealDeep},{l:"Not Conducted",v:O.notConducted,c:k.muted}].map(({l:N,v:Y,c:D})=>{const se=O.totalSubjects>0?Math.round(Y/O.totalSubjects*100):0;return a.jsxs("div",{style:{marginBottom:10},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[a.jsx("span",{style:{fontSize:11,fontWeight:700,color:k.text},children:N}),a.jsxs("span",{style:{fontSize:11,fontWeight:800,color:D},children:[Y," ",a.jsxs("span",{style:{color:k.muted,fontWeight:600,fontSize:10},children:["(",se,"%)"]})]})]}),a.jsx(rh,{value:Y,max:O.totalSubjects,color:D})]},N)})]}),a.jsxs("div",{style:{background:k.white,borderRadius:14,padding:"16px",border:`1px solid ${k.border}`,boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[a.jsx("div",{style:{fontSize:11,fontWeight:900,color:k.tealDark,marginBottom:12},children:"⚡ Action Taken Progress"}),Object.keys(O.actionProgress).length===0?a.jsxs("div",{style:{textAlign:"center",color:k.muted,fontSize:11,padding:"24px 0"},children:[a.jsx("div",{style:{fontSize:28,marginBottom:8},children:"⚡"}),"No action taken yet"]}):Object.entries(O.actionProgress).sort((N,Y)=>Y[1]-N[1]).map(([N,Y],D)=>{const se=[k.teal,k.gold,k.sage,k.tealDeep,k.goldDeep,k.tealDark],fe=se[D%se.length];return a.jsxs("div",{style:{marginBottom:10},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[a.jsx("span",{style:{fontSize:10,fontWeight:700,color:k.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:140},children:N}),a.jsx("span",{style:{fontSize:11,fontWeight:800,color:fe,flexShrink:0,marginLeft:6},children:Y})]}),a.jsx(rh,{value:Y,max:O.totalSubjects,color:fe})]},N)})]}),a.jsxs("div",{style:{background:k.white,borderRadius:14,padding:"16px",border:`1px solid ${k.border}`,boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[a.jsx("div",{style:{fontSize:11,fontWeight:900,color:k.tealDark,marginBottom:12},children:"📋 Subject Type Breakdown"}),[{l:"General",v:O.subjectsByType.General,c:k.teal,icon:"📄"},{l:"Administrative & Financial",v:O.subjectsByType.Administrative,c:k.gold,icon:"💰"},{l:"Contract Approval",v:O.subjectsByType.Contract,c:k.sage,icon:"📝"}].map(({l:N,v:Y,c:D,icon:se})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:`1px solid ${k.border}55`},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:10,background:`${D}18`,border:`1.5px solid ${D}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0},children:se}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:10,fontWeight:700,color:k.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginBottom:2},children:N}),a.jsx("div",{style:{fontSize:20,fontWeight:900,color:D},children:Y})]}),a.jsxs("div",{style:{fontSize:9,fontWeight:800,color:D,background:`${D}18`,padding:"2px 8px",borderRadius:20,flexShrink:0},children:[O.totalSubjects>0?Math.round(Y/O.totalSubjects*100):0,"%"]})]},N))]})]}):a.jsx("div",{style:{marginBottom:14},children:a.jsxs("div",{style:{background:k.white,borderRadius:14,padding:"16px",border:`1px solid ${k.border}`,boxShadow:"0 2px 12px rgba(0,0,0,0.05)",maxWidth:480},children:[a.jsx("div",{style:{fontSize:11,fontWeight:900,color:k.tealDark,marginBottom:12},children:"📋 Subject Type Breakdown"}),[{l:"General",v:O.subjectsByType.General,c:k.teal,icon:"📄"},{l:"Administrative & Financial",v:O.subjectsByType.Administrative,c:k.gold,icon:"💰"},{l:"Contract Approval",v:O.subjectsByType.Contract,c:k.sage,icon:"📝"}].map(({l:N,v:Y,c:D,icon:se})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:`1px solid ${k.border}55`},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:10,background:`${D}18`,border:`1.5px solid ${D}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0},children:se}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:10,fontWeight:700,color:k.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginBottom:2},children:N}),a.jsx("div",{style:{fontSize:20,fontWeight:900,color:D},children:Y})]}),a.jsxs("div",{style:{fontSize:9,fontWeight:800,color:D,background:`${D}18`,padding:"2px 8px",borderRadius:20,flexShrink:0},children:[O.totalSubjects>0?Math.round(Y/O.totalSubjects*100):0,"%"]})]},N))]})}),H&&Object.keys(O.departmentStats).length>0&&a.jsxs("div",{style:{background:k.white,borderRadius:14,padding:"16px 18px",border:`1px solid ${k.border}`,boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[a.jsx("div",{style:{fontSize:11,fontWeight:900,color:k.tealDark},children:"🏢 Department-wise Subject Progress"}),a.jsxs("span",{style:{fontSize:9.5,color:k.muted,fontWeight:600},children:[Object.keys(O.departmentStats).length," departments"]})]}),a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:11.5},children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:k.bg},children:["Department","Total Subjects","Approved","Action Taken","Completion"].map(N=>a.jsx("th",{style:{padding:"8px 12px",textAlign:"left",color:k.tealDark,fontWeight:800,fontSize:9.5,whiteSpace:"nowrap",letterSpacing:.3,textTransform:"uppercase",borderBottom:`2px solid ${k.border}`},children:N},N))})}),a.jsx("tbody",{children:Object.entries(O.departmentStats).sort((N,Y)=>Y[1].total-N[1].total).map(([N,Y],D)=>{const se=[k.teal,k.gold,k.sage,k.tealDeep,k.goldDeep,k.tealDark],fe=se[D%se.length],be=Y.total>0?Math.round(Y.actionTaken/Y.total*100):0;return a.jsxs("tr",{style:{borderBottom:`1px solid ${k.border}55`,transition:"background .15s"},onMouseEnter:Ne=>Ne.currentTarget.style.background=`${k.teal}08`,onMouseLeave:Ne=>Ne.currentTarget.style.background="transparent",children:[a.jsx("td",{style:{padding:"10px 12px"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:fe,flexShrink:0}}),a.jsx("span",{style:{fontWeight:700,color:k.text,fontSize:12},children:N})]})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsx("span",{style:{fontWeight:800,color:fe,fontSize:13},children:Y.total})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,background:`${k.sage}18`,color:k.sage,border:`1px solid ${k.sage}33`,padding:"2px 8px",borderRadius:20,fontSize:10,fontWeight:800},children:["✓ ",Y.approved]})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,background:`${k.teal}18`,color:k.teal,border:`1px solid ${k.teal}33`,padding:"2px 8px",borderRadius:20,fontSize:10,fontWeight:800},children:["⚡ ",Y.actionTaken]})}),a.jsx("td",{style:{padding:"10px 12px",minWidth:120},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("div",{style:{flex:1,height:6,borderRadius:99,background:k.bg,overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",width:`${be}%`,background:fe,borderRadius:99,transition:"width 1s ease"}})}),a.jsxs("span",{style:{fontSize:10,fontWeight:800,color:fe,minWidth:30,textAlign:"right"},children:[be,"%"]})]})})]},N)})})]})})]}),!H&&le&&O.departmentStats[le]&&a.jsxs("div",{style:{background:k.white,borderRadius:14,padding:"16px 18px",border:`1px solid ${k.border}`,boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[a.jsx("div",{style:{fontSize:11,fontWeight:900,color:k.tealDark,marginBottom:14},children:"🏢 Your Department Progress"}),(()=>{const N=O.departmentStats[le],Y=N.total>0?Math.round(N.actionTaken/N.total*100):0;return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{marginBottom:14,padding:"8px 12px",background:`${k.teal}10`,border:`1.5px solid ${k.teal}30`,borderRadius:10,fontSize:12,fontWeight:800,color:k.tealDark},children:le}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:14},children:[{l:"Total Subjects",v:N.total,c:k.teal,icon:"📋"},{l:"Approved",v:N.approved,c:k.sage,icon:"✅"},{l:"Action Taken",v:N.actionTaken,c:k.gold,icon:"⚡"}].map(({l:D,v:se,c:fe,icon:be})=>a.jsxs("div",{style:{textAlign:"center",padding:"14px 10px",background:`${fe}10`,border:`1.5px solid ${fe}30`,borderRadius:12},children:[a.jsx("div",{style:{fontSize:22,marginBottom:5},children:be}),a.jsx("div",{style:{fontSize:22,fontWeight:900,color:fe},children:se}),a.jsx("div",{style:{fontSize:9.5,fontWeight:700,color:k.muted,marginTop:3,textTransform:"uppercase",letterSpacing:.4},children:D})]},D))}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:11,fontWeight:700,color:k.text},children:"Completion Rate"}),a.jsxs("span",{style:{fontSize:11,fontWeight:800,color:k.teal},children:[Y,"%"]})]}),a.jsx("div",{style:{height:8,borderRadius:99,background:k.bg,overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",width:`${Y}%`,background:`linear-gradient(90deg,${k.teal},${k.tealDark})`,borderRadius:99,transition:"width 1s ease"}})})]})]})})()]}),!H&&le&&!O.departmentStats[le]&&O.totalSubjects===0&&a.jsxs("div",{style:{background:k.white,borderRadius:14,padding:"32px 18px",border:`1px solid ${k.border}`,boxShadow:"0 2px 12px rgba(0,0,0,0.05)",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:8},children:"🏛"}),a.jsx("div",{style:{fontWeight:700,fontSize:13,color:k.text,marginBottom:4},children:"No meeting subjects assigned yet"}),a.jsxs("div",{style:{fontSize:11,color:k.muted},children:["Subjects tagged to ",a.jsx("strong",{children:le})," will appear here"]})]})]}),a.jsxs("div",{style:{textAlign:"center",color:k.muted,fontSize:10.5,padding:"12px 0 4px"},children:["© ",new Date().getFullYear()," Vasai-Virar City Municipal Corporation · Janata Darbar System",a.jsx("span",{style:{margin:"0 8px",color:k.gold},children:"◆"}),"स्थापना : ३ जुलै २००९"]})]})]})]})}var Zx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ih=Le.createContext&&Le.createContext(Zx),Zw=["attr","size","title"];function Kw(r,o){if(r==null)return{};var l=eS(r,o),s,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(u=0;u<f.length;u++)s=f[u],!(o.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(l[s]=r[s])}return l}function eS(r,o){if(r==null)return{};var l={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(o.indexOf(s)>=0)continue;l[s]=r[s]}return l}function os(){return os=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(r[s]=l[s])}return r},os.apply(this,arguments)}function oh(r,o){var l=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);o&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),l.push.apply(l,s)}return l}function ls(r){for(var o=1;o<arguments.length;o++){var l=arguments[o]!=null?arguments[o]:{};o%2?oh(Object(l),!0).forEach(function(s){tS(r,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):oh(Object(l)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(l,s))})}return r}function tS(r,o,l){return o=aS(o),o in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,r}function aS(r){var o=nS(r,"string");return typeof o=="symbol"?o:o+""}function nS(r,o){if(typeof r!="object"||!r)return r;var l=r[Symbol.toPrimitive];if(l!==void 0){var s=l.call(r,o);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function Kx(r){return r&&r.map((o,l)=>Le.createElement(o.tag,ls({key:l},o.attr),Kx(o.child)))}function ta(r){return o=>Le.createElement(rS,os({attr:ls({},r.attr)},o),Kx(r.child))}function rS(r){var o=l=>{var{attr:s,size:u,title:f}=r,p=Kw(r,Zw),x=u||l.size||"1em",h;return l.className&&(h=l.className),r.className&&(h=(h?h+" ":"")+r.className),Le.createElement("svg",os({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,s,p,{className:h,style:ls(ls({color:r.color||l.color},l.style),r.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),f&&Le.createElement("title",null,f),r.children)};return ih!==void 0?Le.createElement(ih.Consumer,null,l=>o(l)):o(Zx)}function iS(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(r)}function uu(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(r)}function oS(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(r)}function lS(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(r)}function sS(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(r)}function Bl(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(r)}function cS(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(r)}function lh(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(r)}function Wu(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(r)}function dS(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(r)}function sh(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(r)}function ch(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(r)}function uS(r){return ta({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(r)}const eb=b.createContext();function fS({children:r}){const[o,l]=b.useState("open");return a.jsx(eb.Provider,{value:{mode:o,setMode:l},children:r})}function tb(){return b.useContext(eb)}const Ga="#187484",ab="#0d4f5c",Hr="#CE9A54",fu="#CA9D28",pS="#F5E7C2";function gS({name:r}){const o=(r||"A").split(" ").map(l=>l[0]).join("").slice(0,2).toUpperCase();return a.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:`linear-gradient(135deg, ${Ga}, ${ab})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:900,color:"#fff",flexShrink:0,fontFamily:"'Nunito','Segoe UI',sans-serif",cursor:"pointer",boxShadow:`0 2px 8px ${Ga}55`},children:o})}const mS=()=>{const{user:r}=xs(v=>v.auth),o=ao(),l=mt(),{mode:s}=tb(),u=s==="hidden",[f,p]=b.useState(!1),[x,h]=b.useState(16),m=b.useRef(null);b.useEffect(()=>{const v=setInterval(()=>h(Math.floor(12+Math.random()*8)),4e3);return()=>clearInterval(v)},[]),b.useEffect(()=>{const v=M=>{m.current&&!m.current.contains(M.target)&&p(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]);const y=()=>{o(hx()),l("/login")};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;700;900&display=swap');

        .nb-wrap {
          background: #ffffff;
          height: 56px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          gap: 12px;
          border-bottom: 2px solid transparent;
          border-image: linear-gradient(90deg, transparent, ${Hr}, ${fu}, ${pS}, ${fu}, ${Hr}, transparent) 1;
          box-shadow: 0 2px 12px rgba(24,116,132,0.08);
          font-family: 'Nunito','Segoe UI',sans-serif;
          position: relative;
          z-index: 40;
        }

        .nb-search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f0f7f9;
          border: 1.5px solid #d8edf1;
          border-radius: 10px;
          padding: 7px 14px;
          min-width: 260px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .nb-search-box:focus-within {
          border-color: ${Ga};
          box-shadow: 0 0 0 3px ${Ga}18;
        }
        .nb-search-input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 13px;
          color: #1a3a40;
          font-family: 'Nunito','Segoe UI',sans-serif;
          width: 100%;
        }
        .nb-search-input::placeholder { color: #9bb5ba; font-weight: 500; }

        .nb-category-btn {
          display: flex; align-items: center; gap: 4px;
          background: transparent; border: none; cursor: pointer;
          color: #187484; font-size: 12px; font-weight: 700;
          font-family: 'Nunito','Segoe UI',sans-serif;
          padding: 0; white-space: nowrap;
        }
        .nb-category-btn:hover { color: ${fu}; }

        .nb-sep { width: 1px; height: 16px; background: #d8edf1; flex-shrink: 0; }

        .nb-online {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700;
          color: #1a3a40;
          white-space: nowrap;
          font-family: 'Nunito','Segoe UI',sans-serif;
        }
        .nb-online-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #66A962;
          box-shadow: 0 0 6px #66A96288;
          animation: nb-pulse 2s infinite;
          flex-shrink: 0;
        }
        @keyframes nb-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

        .nb-avatar-wrap { position: relative; }
        .nb-dropdown {
          position: absolute; top: calc(100% + 10px); right: 0;
          background: #fff;
          border: 1px solid #d8edf1;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(24,116,132,0.14);
          min-width: 200px;
          z-index: 100;
          overflow: hidden;
          animation: nb-drop .18s ease;
        }
        @keyframes nb-drop { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:none} }

        .nb-dropdown-user {
          padding: 14px 16px 12px;
          border-bottom: 1px solid #f0f7f9;
          background: linear-gradient(135deg, ${Ga}0a, ${Hr}0a);
        }
        .nb-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 16px;
          font-size: 13px; font-weight: 600;
          color: #1a3a40;
          cursor: pointer;
          transition: background 0.15s;
          font-family: 'Nunito','Segoe UI',sans-serif;
        }
        .nb-dropdown-item:hover { background: #f0f7f9; }
        .nb-dropdown-item.danger { color: #d9534f; }
        .nb-dropdown-item.danger:hover { background: #fde8e8; }

        .nb-brand-block {
          display: flex; align-items: center; gap: 10px;
          animation: nb-drop .25s ease;
        }
      `}),a.jsxs("div",{className:"nb-wrap",children:[u&&a.jsxs("div",{className:"nb-brand-block",style:{marginRight:16},children:[a.jsx("div",{style:{width:50,height:50,borderRadius:13,flexShrink:0,background:`linear-gradient(135deg, ${Hr}, #b8832e)`,overflow:"hidden",border:`2px solid ${Hr}88`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 14px ${Hr}66`},children:a.jsx("img",{src:En,alt:"जन संवाद",style:{width:"100%",height:"100%",objectFit:"cover"},onError:v=>{v.target.style.display="none",v.target.parentNode.innerHTML='<span style="font-size:22px">⚖️</span>'}})}),a.jsxs("div",{style:{lineHeight:1.25},children:[a.jsx("div",{style:{fontSize:15,fontWeight:900,color:Ga,fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif",letterSpacing:.2},children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{style:{fontSize:20,fontWeight:900,color:ab,fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif",letterSpacing:.4,lineHeight:1.1},children:"जन संवाद"}),a.jsx("div",{style:{fontSize:9,fontWeight:700,color:"#9bb5ba",letterSpacing:1.4,textTransform:"uppercase",marginTop:1},children:"ADMIN PANEL · VVCMC"})]}),a.jsx("div",{className:"nb-sep",style:{margin:"0 12px",height:40}})]}),a.jsxs("div",{className:"nb-search-box",children:[a.jsx(dS,{size:14,color:"#9bb5ba"}),a.jsx("div",{className:"nb-sep"}),a.jsxs("button",{className:"nb-category-btn",children:["All Category ",a.jsx(oS,{size:12})]}),a.jsx("div",{className:"nb-sep"}),a.jsx("input",{className:"nb-search-input",placeholder:"Search here…"})]}),a.jsx("div",{style:{flex:1}}),a.jsxs("div",{className:"nb-online",children:[a.jsx("span",{className:"nb-online-dot"}),x," Online"]}),a.jsx("div",{className:"nb-sep"}),a.jsxs("div",{className:"nb-avatar-wrap",ref:m,children:[a.jsx("div",{onClick:()=>p(v=>!v),children:a.jsx(gS,{name:r?.fullName||r?.userName||"Admin User"})}),f&&a.jsxs("div",{className:"nb-dropdown",children:[a.jsxs("div",{className:"nb-dropdown-user",children:[a.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#1a3a40"},children:r?.fullName||r?.userName||"Admin User"}),a.jsx("div",{style:{fontSize:11,color:"#9bb5ba",fontWeight:600,marginTop:2},children:r?.role||"Admin"}),r?.departmentName&&a.jsxs("div",{style:{fontSize:11,color:"#9bb5ba",fontWeight:600,marginTop:1},children:["Dept: ",a.jsx("span",{style:{color:Ga,fontWeight:700},children:r.departmentName})]})]}),a.jsxs("div",{className:"nb-dropdown-item",children:[a.jsx(iS,{size:14,color:Ga}),"Notifications"]}),a.jsxs("div",{className:"nb-dropdown-item",children:[a.jsx(cS,{size:14,color:Ga}),"Help"]}),a.jsxs("div",{className:"nb-dropdown-item danger",onClick:y,children:[a.jsx(Wu,{size:14}),"Logout"]})]})]})]})]})},pu="#187484",dh="#0d4f5c",Zt="#CE9A54",Ll=["Super Admin","Guardian Minister","Mayor","Admin"];function hS(){const r=ao(),o=mt(),{user:l}=xs(S=>S.auth),{mode:s,setMode:u}=tb(),[f,p]=b.useState(window.innerWidth<768);if(b.useEffect(()=>{const S=()=>p(window.innerWidth<768);return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),!l)return null;const x=()=>{r(hx()),o("/login")},h=()=>u("open"),m=()=>u("collapsed"),y=()=>u("hidden"),v=s==="open",M=s==="collapsed";return s==="hidden"?a.jsx("button",{onClick:h,title:"Open sidebar",style:{position:f?"fixed":"relative",top:f?0:"auto",left:f?0:"auto",alignSelf:"flex-start",margin:f?void 0:"2px 0 0 2px",zIndex:200,background:`linear-gradient(135deg, ${pu}, ${dh})`,color:"#fff",padding:"8px 10px",borderRadius:10,boxShadow:"0 4px 16px rgba(24,116,132,0.4)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40},children:a.jsx(sS,{size:18})}):a.jsxs(a.Fragment,{children:[f&&v&&a.jsx("div",{onClick:y,style:{position:"fixed",inset:0,zIndex:90}}),a.jsxs("aside",{style:{width:v?230:64,minHeight:"100vh",background:`linear-gradient(175deg, ${pu} 0%, ${dh} 100%)`,display:"flex",flexDirection:"column",transition:"width 0.3s ease",overflow:"visible",boxShadow:"4px 0 24px rgba(13,79,92,0.35)",position:f?"fixed":"relative",top:0,left:0,zIndex:f?100:"auto",height:f?"100vh":"auto",flexShrink:0},children:[a.jsx("div",{style:{position:"absolute",top:-40,right:-40,width:130,height:130,borderRadius:"50%",background:"rgba(255,255,255,0.06)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:120,left:-30,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:-20,right:-20,width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.05)",pointerEvents:"none"}}),a.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

          .sb-link {
            display: flex; align-items: center; gap: 12px;
            border-radius: 12px;
            // padding: 10px 16px;
            // margin: 2px 10px;

            padding: 10px 16px 10px 11px;  /* left padding 16 → 11px */
            margin: 2px 10px 2px 5px;
            text-decoration: none; color: rgba(255,255,255,0.72);
            font-size: 13.5px; font-weight: 600;
            font-family: 'Nunito','Segoe UI',sans-serif;
            transition: all 0.2s ease; border-left: 3px solid transparent;
            white-space: nowrap; overflow: hidden;
          }
          .sb-link:hover  { background: rgba(255,255,255,0.10); color:#fff; }
          .sb-link.active {
            background: rgba(255,255,255,0.16); color:#fff; font-weight:800;
            border-left: 3px solid ${Zt};
            box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
          }
          .sb-link .sb-icon        { flex-shrink:0; opacity:0.8; }
          .sb-link.active .sb-icon { opacity:1; }

          .sb-link-collapsed {
            display: flex; align-items: center; justify-content: center;
            padding: 10px 0; border-radius: 12px; margin: 2px 8px;
            text-decoration: none; color: rgba(255,255,255,0.72);
            transition: all 0.2s ease; border-left: 3px solid transparent;
          }
          .sb-link-collapsed:hover  { background: rgba(255,255,255,0.10); color:#fff; }
          .sb-link-collapsed.active {
            background: rgba(255,255,255,0.16); color:#fff;
            border-left: 3px solid ${Zt};
          }

          .sb-pill-btn {
            position: absolute; top: 50%; right: -14px;
            transform: translateY(-50%);
            width: 28px; height: 28px; border-radius: 50%;
            background: ${pu};
            border: 2px solid rgba(255,255,255,0.3);
            box-shadow: 0 2px 10px rgba(13,79,92,0.5);
            color: #fff; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: background 0.2s; z-index: 60;
          }
          .sb-pill-btn:hover { background: ${Zt}; border-color: ${Zt}; }
        `}),v&&a.jsx("button",{className:"sb-pill-btn",onClick:m,title:"Collapse sidebar",children:a.jsx(lS,{size:14})}),M&&a.jsx("button",{className:"sb-pill-btn",onClick:y,title:"Hide sidebar",children:a.jsx(uS,{size:14})}),v?a.jsxs("div",{style:{padding:"24px 18px 18px",paddingTop:f?"46px":"24px",display:"flex",flexDirection:"column",alignItems:"center",gap:6,overflow:"hidden"},children:[a.jsx("div",{style:{color:`${Zt}dd`,fontSize:15.5,fontWeight:800,fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif",whiteSpace:"nowrap",letterSpacing:.1,lineHeight:1.3},children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{style:{color:"#fff",fontSize:22,fontWeight:900,fontFamily:"'Noto Sans Devanagari','Nunito',sans-serif",whiteSpace:"nowrap",letterSpacing:.3,lineHeight:1,textShadow:`0 2px 10px ${Zt}55`,textAlign:"center"},children:"जन संवाद"}),a.jsx("div",{style:{width:140,height:140,borderRadius:"5%",background:`linear-gradient(135deg,${Zt},#b8832e)`,boxShadow:`0 4px 14px ${Zt}88`,overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("img",{src:En,alt:"VVCMC",style:{width:"100%",height:"100%",objectFit:"cover"},onError:S=>{S.target.style.display="none",S.target.parentNode.innerHTML='<span style="font-size:24px">⚖️</span>'}})})]}):a.jsx("div",{style:{width:"100%",padding:"20px 0",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("div",{style:{width:40,height:40,borderRadius:10,background:`linear-gradient(135deg,${Zt},#b8832e)`,boxShadow:`0 4px 14px ${Zt}77`,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("img",{src:En,alt:"जन संवाद",style:{width:"100%",height:"100%",objectFit:"cover"},onError:S=>{S.target.style.display="none",S.target.parentNode.innerHTML='<span style="font-size:18px">⚖️</span>'}})})}),a.jsx("div",{style:{margin:"0 16px 10px",borderTop:"1px solid rgba(255,255,255,0.1)"}}),a.jsx("nav",{style:{flex:1,display:"flex",flexDirection:"column",gap:2,paddingTop:4,overflowY:"auto",overflowX:"hidden"},children:v?a.jsxs(a.Fragment,{children:[a.jsxs(Ht,{to:"/dashboard",className:({isActive:S})=>`sb-link${S?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(lh,{size:18})}),a.jsx("span",{children:"Dashboard"})]}),a.jsxs(Ht,{to:"/meetings",className:({isActive:S})=>`sb-link${S?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(uu,{size:18})}),a.jsx("span",{children:"Meetings"})]}),Ll.includes(l?.role)&&a.jsxs(Ht,{to:"/availability",className:({isActive:S})=>`sb-link${S?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(uu,{size:18})}),a.jsx("span",{children:"Availability"})]}),a.jsxs(Ht,{to:"/allapplication",className:({isActive:S})=>`sb-link${S?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(Bl,{size:18})}),a.jsx("span",{children:"Applications"})]}),Ll.includes(l?.role)&&a.jsxs(Ht,{to:"/allapplicationcitizens",className:({isActive:S})=>`sb-link${S?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(Bl,{size:18})}),a.jsx("span",{children:"Appointment Applications"})]}),Ll.includes(l?.role)&&a.jsxs(Ht,{to:"/users",className:({isActive:S})=>`sb-link${S?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(ch,{size:18})}),a.jsx("span",{children:"Users"})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Ht,{to:"/dashboard",className:({isActive:S})=>`sb-link-collapsed${S?" active":""}`,children:a.jsx(lh,{size:18})}),a.jsx(Ht,{to:"/availability",className:({isActive:S})=>`sb-link-collapsed${S?" active":""}`,children:a.jsx(uu,{size:18})}),a.jsx(Ht,{to:"/allapplication",className:({isActive:S})=>`sb-link-collapsed${S?" active":""}`,children:a.jsx(Bl,{size:18})}),a.jsx(Ht,{to:"/allapplicationcitizens",className:({isActive:S})=>`sb-link-collapsed${S?" active":""}`,children:a.jsx(Bl,{size:18})}),Ll.includes(l?.role)&&a.jsx(Ht,{to:"/users",className:({isActive:S})=>`sb-link-collapsed${S?" active":""}`,children:a.jsx(ch,{size:18})})]})}),a.jsxs("div",{style:{marginTop:"auto"},children:[a.jsx("div",{style:{margin:"0 10px 4px"},children:v?a.jsxs(Ht,{to:"/settings",className:({isActive:S})=>`sb-link${S?" active":""}`,style:{margin:0},children:[a.jsx("span",{className:"sb-icon",children:a.jsx(sh,{size:18})}),a.jsx("span",{children:"Settings"})]}):a.jsx(Ht,{to:"/settings",className:({isActive:S})=>`sb-link-collapsed${S?" active":""}`,style:{margin:"2px 8px"},children:a.jsx(sh,{size:18})})}),a.jsx("div",{style:{margin:"6px 16px",borderTop:"1px solid rgba(255,255,255,0.1)"}}),a.jsx("div",{style:{padding:v?"10px 16px 20px":"10px 0 20px"},children:v?a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",flexShrink:0,background:`linear-gradient(135deg,${Zt},#b8832e)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:900,boxShadow:`0 3px 10px ${Zt}66`,fontFamily:"'Nunito',sans-serif"},children:(l?.fullName||l?.userName||"A")[0].toUpperCase()}),a.jsxs("div",{style:{overflow:"hidden"},children:[a.jsx("div",{style:{color:"#fff",fontSize:12.5,fontWeight:800,lineHeight:1.2,fontFamily:"'Nunito',sans-serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:130},children:l?.fullName||l?.userName||"Admin User"}),a.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:10.5,fontWeight:600},children:l?.role})]})]}),l?.departmentName&&a.jsxs("div",{style:{fontSize:10.5,color:"rgba(255,255,255,0.45)",fontWeight:600,marginBottom:10,paddingLeft:2},children:["Dept: ",a.jsx("span",{style:{color:"rgba(255,255,255,0.75)",fontWeight:700},children:l.departmentName})]}),a.jsxs("button",{onClick:x,style:{width:"100%",background:"rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.85)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"8px",fontSize:11,fontWeight:800,cursor:"pointer",letterSpacing:.8,textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",gap:7,transition:"all .2s",fontFamily:"'Nunito',sans-serif"},onMouseEnter:S=>{S.currentTarget.style.background="rgba(220,50,50,0.3)",S.currentTarget.style.borderColor="rgba(220,50,50,0.4)"},onMouseLeave:S=>{S.currentTarget.style.background="rgba(255,255,255,0.1)",S.currentTarget.style.borderColor="rgba(255,255,255,0.2)"},children:[a.jsx(Wu,{size:13})," Logout"]})]}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:`linear-gradient(135deg,${Zt},#b8832e)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:900},children:(l?.fullName||l?.userName||"A")[0].toUpperCase()}),a.jsx("button",{onClick:x,style:{background:"transparent",border:"none",cursor:"pointer",color:"rgba(255,255,255,0.5)",padding:6,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s"},onMouseEnter:S=>S.currentTarget.style.color="#fff",onMouseLeave:S=>S.currentTarget.style.color="rgba(255,255,255,0.5)",children:a.jsx(Wu,{size:17})})]})})]})]})]})}function xS(){return a.jsx(fS,{children:a.jsxs("div",{style:{display:"flex",minHeight:"100vh",position:"relative"},children:[a.jsx("div",{style:{position:"sticky",top:0,height:"100vh",zIndex:50,flexShrink:0},children:a.jsx(hS,{})}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[a.jsx("div",{style:{position:"sticky",top:0,zIndex:40},className:"hidden md:block",children:a.jsx(mS,{})}),a.jsx("div",{style:{flex:1,overflowY:"auto",background:"#f3f4f6"},children:a.jsx(B2,{})})]})]})})}const uh={"Guardian Minister Office":"Guardian Minister","Collector Office":"Collector","Zilla Parishad Office":"CEO","Mahanagarpalika Office":"Municipal Commissioner","Nagar Palika Office":"Chief Officer","Grampanchayat Office":"Sarpanch"},fh={"Guardian Minister Office":{},"Collector Office":{Administrative:"Deputy Collector","Health & Social Welfare":"Deputy Collector","Rural & Development":"Deputy Collector","Infrastructure & Utilities":"Deputy Collector","Supply & Control":"Deputy Collector","Governance & Law":"Deputy Collector",Education:"Deputy Collector","Finance & Audit":"Deputy Collector"},"Zilla Parishad Office":{"Rural Development":"Deputy CEO",Education:"Deputy CEO",Health:"Deputy CEO","Agriculture & Allied Services":"Deputy CEO","Water & Sanitation":"Deputy CEO","Social Welfare":"Deputy CEO","Engineering & Works":"Deputy CEO","Finance & Accounts":"Deputy CEO","Planning & Statistics":"Deputy CEO","Supply & Food":"Deputy CEO"},"Mahanagarpalika Office":{"Revenue & Tax":"Additional Commissioner","Health & Sanitation":"Additional Commissioner","Water & Sewerage":"Additional Commissioner","Engineering & Works":"Additional Commissioner",Administration:"Additional Commissioner","Accounts & Finance":"Additional Commissioner"},"Nagar Palika Office":{"Revenue & Tax":"Deputy Chief Officer","Health & Sanitation":"Deputy Chief Officer","Water & Sewerage":"Deputy Chief Officer","Engineering & Works":"Deputy Chief Officer",Administration:"Deputy Chief Officer","Accounts & Finance":"Deputy Chief Officer"},"Grampanchayat Office":{Administration:"Gram Sevak","Water & Sanitation":"Gram Sevak","Village Development":"Gram Sevak","Health & Welfare":"Gram Sevak","Agriculture & Allied":"Gram Sevak","Finance & Accounts":"Gram Sevak"}},bS={"Guardian Minister Office":[],"Collector Office":["Administrative","Health & Social Welfare","Rural & Development","Infrastructure & Utilities","Supply & Control","Governance & Law","Education","Finance & Audit"],"Zilla Parishad Office":["Rural Development","Education","Health","Agriculture & Allied Services","Water & Sanitation","Social Welfare","Engineering & Works","Finance & Accounts","Planning & Statistics","Supply & Food"],"Mahanagarpalika Office":["Revenue & Tax","Health & Sanitation","Water & Sewerage","Engineering & Works","Administration","Accounts & Finance"],"Nagar Palika Office":["Revenue & Tax","Health & Sanitation","Water & Sewerage","Engineering & Works","Administration","Accounts & Finance"],"Grampanchayat Office":["Administration","Water & Sanitation","Village Development","Health & Welfare","Agriculture & Allied","Finance & Accounts"]},Ul=({label:r,name:o,value:l,onChange:s,type:u="text"})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:r}),a.jsx("input",{type:u,name:o,value:l,onChange:s,className:"w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"})]}),ph=({label:r,name:o,value:l,onChange:s})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:r}),a.jsx("textarea",{name:o,value:l,onChange:s,rows:"3",className:"w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"})]}),gu=({label:r,name:o,value:l,onChange:s,options:u,disabled:f=!1})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:r}),a.jsxs("select",{name:o,value:l,onChange:s,disabled:f,className:`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${f?"bg-gray-100 cursor-not-allowed":""}`,children:[a.jsxs("option",{value:"",children:["Select ",r]}),u.map((p,x)=>a.jsx("option",{value:p,children:p},x))]})]}),gh=({title:r})=>a.jsx("div",{className:"mb-4 mt-6 first:mt-0",children:a.jsx("h3",{className:"text-sm font-semibold text-blue-700 uppercase tracking-wider border-b border-blue-100 pb-2",children:r})});function mu(r){const o=new Date().toISOString().split("T")[0];return{inwardNo:(()=>{const s=new Date;return`JD/${s.getFullYear()}/${String(s.getMonth()+1).padStart(2,"0")}/${String(s.getDate()).padStart(2,"0")}/${Math.floor(100+Math.random()*900)}`})(),submissionDate:o,fullName:r?.fullName||"",mobile:r?.mobile||"",email:r?.email||"",address:r?.address||"",pincode:r?.pincode||"",wardNo:r?.wardNo||"",ward:r?.ward||r?.wardNo||"",existingPhotoUrl:r?.visitorPhoto||"",category:"",identityType:"",identityNumber:"",taluka:"",district:"",subject:"",description:"",office:"Mahanagarpalika Office",mainDepartment:"",subDepartment:"",priority:"Normal",tagTo:[],followUp:"Yes",documents:null,status:"Pending",visitorPhoto:null,photoPreview:null}}function nb({onClose:r,prefillData:o}){const l=mt(),s=r||(()=>l(-1)),[u,f]=b.useState(!1),[p,x]=b.useState(""),h=b.useRef(null),m=b.useRef(null),y=b.useRef(null),v=b.useRef(null),M=b.useRef(null),A=b.useRef(null),[S,z]=b.useState(!1),[E,R]=b.useState(""),[C,B]=b.useState(()=>mu(o));b.useEffect(()=>{o&&B(mu(o))},[]);const[G,U]=b.useState([]),[O,$]=b.useState([]);b.useEffect(()=>{(async()=>{try{const j=await Ie.get("/getUsers");if(console.log("res>>>>>>>>",j.data),j.data.success){const T=j.data.users;$(T);const N=[...new Set(j.data.users.map(Y=>Y.departmentName).filter(Boolean))];U(N)}}catch(j){console.error("Department fetch error:",j)}})()},[]);const Q=["Ward-A","Ward-B","Ward-C","Ward-D","Ward-E","Ward-F","Ward-G","Ward-H","Ward-I","General"],ue=L=>{const{name:j,value:T}=L.target;B({...C,[j]:T})},ge=L=>{const{value:j,checked:T}=L.target;if(T){const N=uh[C.office],Y=fh[C.office]?.[C.mainDepartment],D=j===Y&&N&&N!==j?[N]:[],se=[...new Set([...C.tagTo,...D,j])];B({...C,tagTo:se})}else B({...C,tagTo:C.tagTo.filter(N=>N!==j)})},P=async()=>{x("");try{const L=await navigator.mediaDevices.getUserMedia({video:!0});y.current=L,f(!0),setTimeout(()=>{h.current&&(h.current.srcObject=L,h.current.play())},100)}catch{x("Camera access denied. Please allow camera permission.")}},le=()=>{const L=h.current,j=m.current;!L||!j||(j.width=L.videoWidth,j.height=L.videoHeight,j.getContext("2d").drawImage(L,0,0),j.toBlob(T=>{const N=new File([T],`captured-photo-${Date.now()}.jpg`,{type:"image/jpeg"});B({...C,documents:N}),H()},"image/jpeg"))},H=()=>{y.current&&(y.current.getTracks().forEach(L=>L.stop()),y.current=null),f(!1)},me=async()=>{R("");try{const L=await navigator.mediaDevices.getUserMedia({video:!0});A.current=L,z(!0),setTimeout(()=>{v.current&&(v.current.srcObject=L,v.current.play())},100)}catch{R("Camera access denied. Please allow camera permission.")}},we=()=>{const L=v.current,j=M.current;!L||!j||(j.width=L.videoWidth,j.height=L.videoHeight,j.getContext("2d").drawImage(L,0,0),j.toBlob(T=>{const N=new File([T],`visitor-photo-${Date.now()}.jpg`,{type:"image/jpeg"}),Y=URL.createObjectURL(T);B(D=>({...D,visitorPhoto:N,photoPreview:Y})),F()},"image/jpeg"))},F=()=>{A.current&&(A.current.getTracks().forEach(L=>L.stop()),A.current=null),z(!1)},ie=(L,j)=>{const T="https://jansamvad.saavi.co.in";L.forEach(N=>{const Y=O.filter(D=>D.departmentName===N&&D.mobileNumber);Y.length!==0&&Y.forEach(D=>{const se=D.mobileNumber.replace(/\D/g,"");if(se.length<10)return;const fe=`******${se.slice(-4)}`;Ie.post("/sendWhatsApp",{mobile:se,userName:D.userName||"Officer",tokenNo:j,deptName:N,portalLink:T,displayMobile:fe}).then(be=>console.log(`✅ WhatsApp sent to ${D.fullName}`,be.data)).catch(be=>console.error(`❌ Error for ${D.fullName}`,be))})})},pe=(L,j)=>{const T="https://jansamvad.saavi.co.in";L.forEach(N=>{const Y=O.filter(D=>D.departmentName===N&&D.mobileNumber);if(Y.length===0){console.warn(`No users found for department: ${N}`);return}Y.forEach(D=>{const se=D.mobileNumber.replace(/\D/g,""),fe=D.userName;if(se.length<10){console.warn(`Invalid mobile: ${D.fullName}`);return}const be=`******${se.slice(-4)}`,Ne=`Hello ${fe}, A new complaint has been assigned to you. Token No: ${j} Department: ${N} Please login to the portal using OTP Login: ${T} Your OTP will be sent to your registered mobile number ${be}. Note: Do not Register. Use OTP Login only. SAAVI INFINET`,Qe=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379323&number=${se}&message=${encodeURIComponent(Ne)}`;fetch(Qe,{method:"GET",mode:"no-cors"}).then(()=>console.log(`✅ SMS sent to ${D.fullName} (${be})`)).catch(at=>console.error(`❌ SMS error for ${D.fullName}:`,at))})})},K=async L=>{L.preventDefault();try{if(!C.fullName||!C.mobile||!C.subject){Se.error("Required fields missing: Full Name, Mobile, and Subject are required");return}if(!C.documents){Se.error("Document file is required. Please upload a file before submitting.");return}const j=localStorage.getItem("authUser"),T=j?JSON.parse(j):null,N=new FormData;Object.keys(C).forEach(fe=>{fe==="documents"||fe==="visitorPhoto"||fe==="photoPreview"||(Array.isArray(C[fe])?N.append(fe,JSON.stringify(C[fe])):C[fe]!==null&&C[fe]!==void 0&&N.append(fe,C[fe]))}),C.documents&&N.append("documents",C.documents),C.visitorPhoto&&typeof C.visitorPhoto!="string"&&N.append("visitorPhoto",C.visitorPhoto),T&&(N.append("submittedById",T.id||""),N.append("submittedByName",T.fullName||""),N.append("submittedByRole",T.role||""),N.append("submittedByUserName",T.userName||""),N.append("submittedByDept",T.departmentName||"")),o?._tokenId&&N.append("existingTokenNo",o._tokenId);const D=(await Ie.post("/inwardAdd",N,{headers:{"Content-Type":"multipart/form-data"}})).data;if(!D.success){Se.error(D.message||"Something went wrong");return}const se=o?._tokenId||D.tokenNo;Se.success(`✅ Application submitted successfully!
Token Number: ${se}`),r&&r(),C.tagTo.length>0&&(pe(C.tagTo,se),ie(C.tagTo,se)),B(mu(null))}catch(j){alert(j?.response?.data?.message||"Server Error")}};return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",children:a.jsxs("div",{className:"bg-white shadow-2xl rounded-xl w-full max-w-3xl max-h-[95vh] flex flex-col",children:[a.jsxs("div",{className:"px-8 py-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold text-gray-800",children:"Application Form"}),o&&a.jsxs("p",{className:"text-xs text-blue-600 font-semibold mt-0.5",children:["✅ Pre-filled from token: ",a.jsx("span",{className:"font-bold",children:o._tokenId})]})]}),a.jsx("button",{onClick:s,className:"w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors text-sm",children:"✕"})]}),a.jsx("div",{className:"px-8 py-6 overflow-y-auto flex-1",children:a.jsxs("form",{onSubmit:K,children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6",children:[a.jsx(Ul,{label:"Mobile",name:"mobile",value:C.mobile,onChange:ue}),a.jsx(Ul,{label:"Full Name",name:"fullName",value:C.fullName,onChange:ue}),a.jsx(Ul,{label:"Email",name:"email",value:C.email,onChange:ue}),a.jsx(gu,{label:"Category",name:"category",value:C.category,onChange:ue,options:["Company","NGO","Individual","Other"]})]}),a.jsx(ph,{label:"Address",name:"address",value:C.address,onChange:ue}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6",children:a.jsx(gu,{label:"Ward",name:"ward",value:C.ward,onChange:ue,options:Q})}),a.jsx(Ul,{label:"Complaint Subject",name:"subject",value:C.subject,onChange:ue}),a.jsx(ph,{label:"Complaint Description",name:"description",value:C.description,onChange:ue}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-2",children:"Assign to Department"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50",children:G.map((L,j)=>a.jsxs("label",{className:"flex items-center gap-2 bg-white p-2 rounded-lg border cursor-pointer hover:bg-blue-50 text-sm",children:[a.jsx("input",{type:"checkbox",value:L,checked:C.tagTo.includes(L),onChange:ge,className:"accent-blue-600 w-4 h-4"}),a.jsx("span",{children:L})]},j))})]}),(C.mainDepartment||(bS[C.office]||[]).length===0)&&a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-2",children:"Tag To (Authority)"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[uh[C.office],fh[C.office]?.[C.mainDepartment]].filter(Boolean).filter((L,j,T)=>T.indexOf(L)===j).map((L,j)=>a.jsxs("label",{className:"flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border cursor-pointer hover:bg-blue-50",children:[a.jsx("input",{type:"checkbox",value:L,checked:C.tagTo.includes(L),onChange:ge,className:"accent-blue-600 w-4 h-4"}),a.jsx("span",{className:"text-sm",children:L})]},j))})]}),a.jsx(gu,{label:"Priority",name:"priority",value:C.priority,onChange:ue,options:["Low","Medium","High"]}),a.jsx(gh,{title:"Visitor Photo"}),C.existingPhotoUrl&&!C.photoPreview&&a.jsxs("div",{className:"mb-4 p-4 border-2 border-green-300 rounded-lg bg-green-50 text-center",children:[a.jsx("p",{className:"text-xs font-semibold text-green-700 uppercase tracking-widest mb-2",children:"✅ Token वरून Photo मिळाला"}),a.jsx("img",{src:C.existingPhotoUrl.startsWith("http")?C.existingPhotoUrl:`${Ie.defaults.baseURL?.replace("/api","")||""}/${C.existingPhotoUrl.replace(/\\/g,"/")}`,alt:"existing visitor",className:"w-24 h-24 rounded-full object-cover border-4 border-green-400 mx-auto mb-2 shadow-md",onError:L=>{L.target.style.display="none"}}),a.jsx("p",{className:"text-green-700 text-sm font-semibold",children:"Citizen चा photo"}),a.jsx("p",{className:"text-gray-400 text-xs mt-1",children:"बदलायचा असेल तरच खाली Upload/Camera वापरा"})]}),a.jsxs("div",{className:"flex gap-3 mb-4",children:[a.jsxs("label",{className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition",children:["📁 ",C.existingPhotoUrl?"Photo बदला":"Upload Photo",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:L=>{const j=L.target.files[0];j&&B(T=>({...T,visitorPhoto:j,photoPreview:URL.createObjectURL(j)}))}})]}),a.jsx("button",{type:"button",onClick:me,className:"flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-700 bg-white text-sm font-semibold rounded-lg hover:bg-blue-50 transition",children:"📷 Use Camera"})]}),S?a.jsxs("div",{className:"mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black",children:[a.jsx("button",{type:"button",onClick:F,className:"absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg",children:"✕"}),a.jsx("video",{ref:v,autoPlay:!0,playsInline:!0,className:"w-full",style:{maxHeight:"300px",objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:M,className:"hidden"}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center",children:a.jsx("button",{type:"button",onClick:we,className:"px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg",children:"📸 Capture Photo"})})]}):C.photoPreview?a.jsxs("div",{className:"mb-4 p-4 border-2 border-blue-300 rounded-lg bg-blue-50 text-center",children:[a.jsx("img",{src:C.photoPreview,alt:"new visitor",className:"w-24 h-24 rounded-full object-cover border-4 border-blue-400 mx-auto mb-2 shadow-md"}),a.jsx("p",{className:"text-blue-700 text-sm font-semibold",children:"✅ नवीन Photo निवडला"}),a.jsx("p",{className:"text-gray-400 text-xs mt-1",children:C.existingPhotoUrl?"हा जुन्या photo ऐवजी वापरला जाईल":'Click "Photo बदला" to change'})]}):C.existingPhotoUrl?null:a.jsxs("div",{className:"mb-4 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 text-center",children:[a.jsx("div",{className:"text-4xl mb-2 text-blue-300",children:"📷"}),a.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"Upload करा किंवा camera वापरा"})]}),E&&a.jsx("p",{className:"text-red-600 text-xs mb-2",children:E}),a.jsx(gh,{title:"Documents"}),u?a.jsxs("div",{className:"mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black",children:[a.jsx("button",{type:"button",onClick:H,className:"absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg",children:"✕"}),a.jsx("video",{ref:h,autoPlay:!0,playsInline:!0,className:"w-full",style:{maxHeight:"360px",objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:m,className:"hidden"}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center",children:a.jsx("button",{type:"button",onClick:le,className:"px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg",children:"📸 Capture Photo"})})]}):a.jsx("div",{className:"mb-4 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50",children:a.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-3",children:[a.jsx("input",{type:"file",onChange:L=>B(j=>({...j,documents:L.target.files[0]})),className:"flex-1 text-sm"}),a.jsx("button",{type:"button",onClick:P,className:"flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 whitespace-nowrap",children:"📷 Camera"})]})}),p&&a.jsx("p",{className:"text-red-600 text-xs mb-2",children:p}),C.documents?a.jsxs("div",{className:"bg-green-50 border border-green-300 rounded-lg p-3 mb-4",children:[a.jsxs("p",{className:"text-green-800 text-sm font-medium",children:["✅ File Selected: ",C.documents.name]}),a.jsxs("p",{className:"text-green-700 text-xs",children:["Size: ",(C.documents.size/1024).toFixed(2)," KB"]})]}):a.jsx("div",{className:"bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4",children:a.jsx("p",{className:"text-yellow-800 text-sm",children:"Please upload a file to proceed with submission"})}),a.jsx("div",{className:"pt-2 pb-2",children:a.jsx("button",{type:"submit",disabled:!C.documents,className:`w-full py-3 rounded-lg text-white font-semibold text-sm transition ${C.documents?"bg-green-600 hover:bg-green-700 cursor-pointer":"bg-gray-300 cursor-not-allowed opacity-60"}`,children:C.documents?"✔ Submit Application":"Upload Document to Submit"})})]})})]})})}const I={bg:"#f0f4f0",white:"#fff",dark:"#1a4a2e",green:"#1a7a4a",greenLight:"#e8f5ee",greenBadge:"#d4edda",greenBorder:"#c8e0cc",muted:"#5a7a6a",rowHover:"#f8fdf8",rowBorder:"#eef4ee",red:"#c0392b",redLight:"#fdecea"},mh={Pending:{bg:"#fff8e1",color:"#b26a00",border:"#ffe082",dot:"#f59e0b",label:"Pending"},Resolved:{bg:I.greenLight,color:I.green,border:"#a8d5b5",dot:"#22c55e",label:"Resolved"},Rejected:{bg:I.redLight,color:I.red,border:"#f5c6cb",dot:I.red,label:"Rejected"},"In Progress":{bg:"#e8f0fe",color:"#1a4a8a",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"}};function _s(r){return mh[r]||mh.Pending}const ss={Normal:{color:I.muted,bg:"#f0f4f0",border:I.greenBorder},Urgent:{color:"#b26a00",bg:"#fff8e1",border:"#ffe082"},Emergency:{color:I.red,bg:I.redLight,border:"#f5c6cb"},High:{color:I.red,bg:I.redLight,border:"#f5c6cb"}},hh=["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];function rb(r){let o=0;for(let l=0;l<(r||"").length;l++)o=r.charCodeAt(l)+((o<<5)-o);return hh[Math.abs(o)%hh.length]}function ib(r){return r?r.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2):"?"}function lf(r){return r?new Date(r).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"}function ob({status:r}){const o=_s(r);return a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:700,background:o.bg,color:o.color,border:`1px solid ${o.border}`,whiteSpace:"nowrap"},children:[a.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:o.dot,display:"inline-block"}}),o.label]})}function lb({priority:r}){const o=ss[r]||ss.Normal;return a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 9px",borderRadius:8,fontSize:11,fontWeight:700,background:o.bg,color:o.color,border:`1px solid ${o.border}`},children:[r==="Urgent"||r==="Emergency"||r==="High"?"🔴":"⚪"," ",r]})}function yS({app:r,onReply:o,onView:l}){_s(r.status);const s=rb(r.fullName);return a.jsxs("div",{style:{background:I.white,borderRadius:12,border:`1.5px solid ${I.greenBorder}`,padding:"14px 16px",marginBottom:10,boxShadow:"0 1px 6px rgba(0,0,0,0.06)"},onClick:()=>l(r),children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:s,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:14,flexShrink:0},children:ib(r.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:14,fontWeight:700,color:I.dark},children:r.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:12,color:I.muted},children:r.mobile||"—"})]})]}),a.jsx(ob,{status:r.status})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8,flexWrap:"wrap"},children:[a.jsx("span",{style:{background:I.greenLight,color:I.green,borderRadius:6,padding:"2px 9px",fontSize:11,fontWeight:700,fontFamily:"monospace"},children:r.tokenNo||"—"}),r.status!=="Resolved"&&r.priority&&a.jsx(lb,{priority:r.priority})]}),r.subject&&a.jsx("p",{style:{margin:"0 0 8px",fontSize:13,color:I.dark,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.subject}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"3px 10px",fontSize:11,color:I.muted,marginBottom:12},children:[r.mainDepartment&&a.jsxs("span",{children:["🏢 ",r.mainDepartment]}),r.submissionDate&&a.jsxs("span",{children:["📅 ",lf(r.submissionDate)]}),r.submittedByName&&a.jsxs("span",{children:["👤 ",r.submittedByName]})]}),a.jsxs("div",{style:{display:"flex",gap:8},onClick:u=>u.stopPropagation(),children:[a.jsx("button",{onClick:()=>o(r),style:{flex:1,background:I.greenLight,border:`1.5px solid ${I.green}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:I.green,fontSize:13,fontWeight:700},children:"📨 Reply"}),a.jsx("button",{onClick:()=>l(r),style:{flex:1,background:"#f8fdf8",border:`1.5px solid ${I.greenBorder}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:I.dark,fontSize:13,fontWeight:600},children:"👁 View"}),r.documents&&a.jsx("a",{href:r.documents,target:"_blank",rel:"noreferrer",style:{flex:1,background:I.greenLight,border:`1.5px solid ${I.greenBorder}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:I.green,fontSize:13,fontWeight:600,textDecoration:"none",textAlign:"center"},children:"📄 Doc"})]})]})}function vS({onClose:r,onProceed:o}){const[l,s]=b.useState(null),[u,f]=b.useState(""),[p,x]=b.useState(!1),[h,m]=b.useState(""),[y,v]=b.useState(null),M=async()=>{if(!u.trim()){m("कृपया Token Number टाका.");return}x(!0),m(""),v(null);try{const S=await Ie.get(`/citizen/appointment/token/${u.trim()}`);S.data.success&&S.data.appointment?v(S.data.appointment):m("Token सापडले नाही ❌")}catch(S){m(S?.response?.data?.message||"Token fetch करताना error आला ❌")}finally{x(!1)}},A=()=>{if(l==="yes"){if(!y){m("आधी Token Fetch करा.");return}o(y)}else o(null)};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)",padding:16},children:a.jsxs("div",{style:{background:I.white,borderRadius:16,width:"100%",maxWidth:440,maxHeight:"92vh",overflowY:"auto",boxShadow:"0 8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:`2px solid ${I.greenBadge}`,background:I.greenLight,borderRadius:"16px 16px 0 0"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:I.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"New Application"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:18,fontWeight:700,color:I.dark},children:"Token आहे का?"})]}),a.jsx("button",{onClick:r,style:{background:I.white,border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18,color:I.dark},children:"✕"})]}),a.jsxs("div",{style:{padding:20},children:[a.jsx("p",{style:{margin:"0 0 14px",fontSize:13,fontWeight:600,color:I.muted},children:"Already have token? (Citizen ने आधी appointment घेतली आहे का?)"}),a.jsx("div",{style:{display:"flex",gap:10,marginBottom:16},children:[["yes","✅ Yes"],["no","❌ No"]].map(([S,z])=>a.jsx("button",{onClick:()=>{s(S),m(""),v(null),f("")},style:{flex:1,padding:"10px 0",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",border:`1.5px solid ${I.greenBorder}`,transition:"all .15s",background:l===S?S==="yes"?I.green:I.dark:I.white,color:l===S?"#fff":I.muted},children:z},S))}),l==="yes"&&a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:I.dark,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:.4},children:"Token Number"}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("input",{type:"text",placeholder:"e.g. VVCMC-20260323-0008",value:u,onChange:S=>{f(S.target.value),m(""),v(null)},onKeyDown:S=>{S.key==="Enter"&&M()},style:{flex:1,padding:"9px 12px",fontSize:13,border:`1.5px solid ${I.greenBorder}`,borderRadius:8,outline:"none",color:I.dark,background:"#f8fdf8",fontFamily:"'Segoe UI', sans-serif",minWidth:0}}),a.jsx("button",{onClick:M,disabled:p,style:{padding:"9px 14px",background:p?"#888":I.green,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:p?"not-allowed":"pointer",flexShrink:0},children:p?"...":"🔍 Fetch"})]}),h&&a.jsx("p",{style:{color:I.red,fontSize:12,marginTop:6,fontWeight:600},children:h}),y&&a.jsxs("div",{style:{marginTop:12,background:I.greenLight,border:`1.5px solid ${I.greenBorder}`,borderRadius:10,padding:"12px 14px"},children:[a.jsx("p",{style:{fontSize:11,fontWeight:700,color:I.green,textTransform:"uppercase",letterSpacing:1,marginBottom:8},children:"✅ Citizen सापडला"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px 14px",fontSize:12},children:[["Name",y.fullName],["Mobile",y.mobileNumber],["Token",y.tokenId],["Ward",y.ward],["Date",y.preferredDate],["Slot",y.microSlot||y.slotTime]].map(([S,z])=>a.jsxs("div",{children:[a.jsx("span",{style:{color:I.muted,fontSize:11},children:S}),a.jsx("p",{style:{margin:"2px 0 0",fontWeight:700,color:I.dark},children:z||"--"})]},S))})]})]}),l==="no"&&a.jsx("div",{style:{background:"#f8fdf8",border:`1.5px solid ${I.greenBorder}`,borderRadius:10,padding:"12px 14px",fontSize:13,color:I.muted,marginBottom:14},children:"📝 रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल."}),l!==null&&a.jsxs("div",{style:{display:"flex",gap:10,marginTop:8},children:[a.jsx("button",{onClick:r,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"11px 0",fontWeight:600,cursor:"pointer",color:I.dark,fontSize:13},children:"Cancel"}),a.jsx("button",{onClick:A,disabled:l==="yes"&&!y,style:{flex:2,background:l==="yes"&&!y?"#888":I.green,color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:l==="yes"&&!y?"not-allowed":"pointer",fontSize:13},children:"➕ Open Form"})]})]})]})})}function jS({record:r,onClose:o,onSubmit:l}){const[s,u]=b.useState(""),[f,p]=b.useState(r.status||"Pending"),[x,h]=b.useState(r.priority||"Normal"),[m,y]=b.useState(!1),[v,M]=b.useState(null);if(!r)return null;const A=async()=>{if(!s.trim()){alert("कृपया reply message लिहा.");return}y(!0),await l({applicationId:r._id,replyMessage:s,status:f,priority:x,replyDocument:v}),y(!1)};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,0.45)"},onClick:o,children:a.jsxs("div",{style:{background:I.white,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:640,maxHeight:"95vh",overflowY:"auto",boxShadow:"0 -8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:S=>S.stopPropagation(),children:[a.jsx("div",{style:{width:40,height:4,borderRadius:2,background:I.greenBorder,margin:"10px auto 0"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:`2px solid ${I.greenBadge}`,background:I.greenLight},children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx("p",{style:{margin:0,fontSize:11,color:I.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Reply to Application"}),a.jsxs("h3",{style:{margin:"3px 0 0",fontSize:15,fontWeight:700,color:I.dark,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[r.tokenNo," — ",r.fullName]})]}),a.jsx("button",{onClick:o,style:{background:I.white,border:"none",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:16,color:I.dark,flexShrink:0,marginLeft:10},children:"✕"})]}),a.jsxs("div",{style:{padding:"16px 20px"},children:[a.jsx("div",{style:{border:`1.5px solid ${I.greenBorder}`,borderRadius:10,overflow:"hidden",marginBottom:16},children:[["Applicant",r.fullName],["Mobile",r.mobile],["Subject",r.subject],["Office",r.office],["Submitted By",r.submittedByName+(r.submittedByRole?` (${r.submittedByRole})`:"")],["Submitted On",r.submissionDate?new Date(r.submissionDate).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"]].filter(([,S])=>S).map(([S,z])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"7px 14px",borderBottom:`1px solid ${I.rowBorder}`,fontSize:13,gap:8},children:[a.jsx("span",{style:{color:I.muted,fontWeight:600,flexShrink:0,minWidth:100},children:S}),a.jsx("span",{style:{color:I.dark,fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:z})]},S))}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:I.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Status बदला"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["Pending","In Progress","Resolved","Rejected"].map(S=>{const z=_s(S),E=f===S;return a.jsxs("button",{onClick:()=>p(S),style:{padding:"6px 14px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",border:`1.5px solid ${E?z.border:I.greenBorder}`,background:E?z.bg:"#f8fdf8",color:E?z.color:I.muted,transition:"all .15s"},children:[a.jsx("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",background:E?z.dot:"#a8c8b0",marginRight:4,verticalAlign:"middle"}}),S]},S)})})]}),f!=="Resolved"&&a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:I.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Priority बदला"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["Normal","High","Urgent","Emergency"].map(S=>{const z=ss[S]||ss.Normal,E=x===S;return a.jsxs("button",{onClick:()=>h(S),style:{padding:"6px 12px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",border:`1.5px solid ${E?z.border:I.greenBorder}`,background:E?z.bg:"#f8fdf8",color:E?z.color:I.muted,transition:"all .15s"},children:[S==="Normal"?"⚪":"🔴"," ",S]},S)})})]}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsxs("label",{style:{fontSize:12,fontWeight:700,color:I.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:["Reply Message ",a.jsx("span",{style:{color:I.red},children:"*"})]}),a.jsx("textarea",{rows:4,placeholder:"Applicant ला reply message लिहा...",value:s,onChange:S=>u(S.target.value),style:{width:"100%",padding:"10px 14px",fontSize:13,border:`1.5px solid ${I.greenBorder}`,borderRadius:8,outline:"none",fontFamily:"'Segoe UI', sans-serif",resize:"vertical",boxSizing:"border-box",color:I.dark,background:"#f8fdf8"},onFocus:S=>S.target.style.borderColor=I.green,onBlur:S=>S.target.style.borderColor=I.greenBorder}),a.jsxs("p",{style:{fontSize:11,color:I.muted,textAlign:"right",margin:"4px 0 0"},children:[s.length," characters"]})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsxs("label",{style:{fontSize:12,fontWeight:700,color:I.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:["Reply Document ",a.jsx("span",{style:{color:I.muted,fontWeight:400,fontSize:11},children:"(Optional)"})]}),a.jsxs("div",{style:{border:`2px dashed ${I.greenBorder}`,borderRadius:10,padding:14,background:"#f8fdf8"},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:10,cursor:"pointer",flexWrap:"wrap"},children:[a.jsxs("span",{style:{padding:"7px 14px",background:I.green,color:"#fff",fontSize:12,fontWeight:700,borderRadius:8,whiteSpace:"nowrap"},children:["📎 Choose File",a.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.jpg,.jpeg,.png",style:{display:"none"},onChange:S=>M(S.target.files[0]||null)})]}),a.jsx("span",{style:{fontSize:13,color:I.muted,wordBreak:"break-all"},children:v?v.name:"PDF, DOC, or Image"})]}),v&&a.jsxs("div",{style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"space-between",background:I.white,border:`1.5px solid ${I.greenBorder}`,borderRadius:8,padding:"8px 12px"},children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("p",{style:{margin:0,fontSize:12,fontWeight:700,color:I.green,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["✅ ",v.name]}),a.jsxs("p",{style:{margin:0,fontSize:11,color:I.muted},children:[(v.size/1024).toFixed(1)," KB"]})]}),a.jsx("button",{onClick:()=>M(null),style:{background:"none",border:"none",cursor:"pointer",color:I.red,fontSize:18,fontWeight:700,flexShrink:0,marginLeft:8},children:"✕"})]})]})]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{onClick:o,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:I.dark,fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:A,disabled:m,style:{flex:2,background:m?"#888":I.green,color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:m?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:m?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:13,height:13,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"Sending…"]}):"📨 Send Reply"})]})]})]})})}function wS({record:r,onClose:o}){if(!r)return null;const l=({label:u,value:f})=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 14px",borderBottom:`1px solid ${I.rowBorder}`,fontSize:13,gap:8},children:[a.jsx("span",{style:{color:I.muted,fontWeight:600,flexShrink:0,minWidth:110},children:u}),a.jsx("span",{style:{color:I.dark,fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:f||"--"})]}),s=({title:u})=>a.jsx("div",{style:{padding:"8px 14px 6px",background:I.greenLight,borderBottom:`1px solid ${I.greenBorder}`},children:a.jsx("span",{style:{fontSize:11,fontWeight:700,color:I.green,textTransform:"uppercase",letterSpacing:1},children:u})});return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,0.45)"},onClick:o,children:a.jsxs("div",{style:{background:I.white,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:640,maxHeight:"95vh",overflowY:"auto",boxShadow:"0 -8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:u=>u.stopPropagation(),children:[a.jsx("div",{style:{width:40,height:4,borderRadius:2,background:I.greenBorder,margin:"10px auto 0"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:`2px solid ${I.greenBadge}`,background:I.greenLight},children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:I.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Application Detail"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:16,fontWeight:700,color:I.dark},children:r.tokenNo})]}),a.jsx("button",{onClick:o,style:{background:I.white,border:"none",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:16,color:I.dark},children:"✕"})]}),a.jsxs("div",{style:{padding:"0 0 20px"},children:[[["Citizen Details",[["Full Name",r.fullName],["Mobile",r.mobile],["Email",r.email],["Category",r.category],["Ward No",r.wardNo],["Address",r.address],["Pincode",r.pincode],["Taluka",r.taluka],["District",r.district]]],["Identity",[["Type",r.identityType],["Number",r.identityNumber]]],["Complaint",[["Subject",r.subject],["Description",r.description]]],["Office & Workflow",[["Office",r.office],["Main Department",r.mainDepartment],["Sub Department",r.subDepartment],...r.status!=="Resolved"?[["Priority",r.priority]]:[],["Tag To",Array.isArray(r.tagTo)?r.tagTo.join(", "):r.tagTo],["Follow Up",r.followUp],["Status",r.status],["Submitted On",lf(r.submissionDate)],...r.status==="Resolved"?(()=>{const u=r.replies?.find(f=>f.status==="Resolved");return u?[["Resolved By",u.repliedByName],["Resolved Role",u.repliedByRole],["Resolved On",u.createdAt?new Date(u.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"]]:[]})():[]]]].map(([u,f])=>a.jsxs("div",{style:{border:`1.5px solid ${I.greenBorder}`,borderRadius:10,overflow:"hidden",margin:"14px 16px 0"},children:[a.jsx(s,{title:u}),f.filter(([,p])=>p).map(([p,x])=>a.jsx(l,{label:p,value:x},p))]},u)),r.documents&&a.jsxs("div",{style:{margin:"14px 16px 0",padding:"12px 14px",background:I.greenLight,border:`1.5px solid ${I.greenBorder}`,borderRadius:10},children:[a.jsx("p",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:I.green,textTransform:"uppercase",letterSpacing:1},children:"Document"}),a.jsx("a",{href:r.documents,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 14px",background:I.green,color:"#fff",borderRadius:8,fontSize:13,fontWeight:600,textDecoration:"none"},children:"📄 View Document"})]}),r.replies&&r.replies.length>0&&a.jsxs("div",{style:{margin:"14px 16px 0"},children:[a.jsxs("p",{style:{fontSize:11,fontWeight:700,color:I.green,textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:["Replies (",r.replies.length,")"]}),r.replies.map((u,f)=>{const p=_s(u.status),x=u.status==="Resolved";return a.jsxs("div",{style:{borderRadius:10,border:`1.5px solid ${x?"#a8d5b5":I.greenBorder}`,padding:"12px 14px",background:x?I.greenLight:"#f8fdf8",marginBottom:8},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:6},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:x?I.green:"#6366f1",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:11,fontWeight:700},children:u.repliedByName?u.repliedByName.split(" ").map(h=>h[0]).join("").slice(0,2).toUpperCase():"?"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:I.dark},children:u.repliedByName||"—"}),u.repliedByRole&&a.jsx("div",{style:{fontSize:11,color:I.green,fontWeight:600},children:u.repliedByRole})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[u.status&&a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:700,background:p.bg,color:p.color,border:`1px solid ${p.border}`},children:[a.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:p.dot}}),u.status]}),a.jsx("span",{style:{fontSize:11,color:I.muted},children:u.createdAt?new Date(u.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""})]})]}),a.jsx("p",{style:{fontSize:13,color:x?I.green:I.dark,margin:0,paddingLeft:36},children:u.replyMessage})]},f)})]})]})]})})}function xh({page:r,totalPages:o,total:l,limit:s,onPageChange:u,onLimitChange:f}){if(o<=1&&l<=10)return null;const p=[],x=2,h=Math.max(1,r-x),m=Math.min(o,r+x);h>1&&(p.push(1),h>2&&p.push("..."));for(let v=h;v<=m;v++)p.push(v);m<o&&(m<o-1&&p.push("..."),p.push(o));const y={padding:"6px 12px",borderRadius:7,fontSize:13,fontWeight:600,cursor:"pointer",border:`1.5px solid ${I.greenBorder}`,transition:"all .15s",minWidth:36,textAlign:"center"};return a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",borderTop:`1px solid ${I.rowBorder}`,flexWrap:"wrap",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{fontSize:12,color:I.muted,fontWeight:600,whiteSpace:"nowrap"},children:"Rows per page:"}),a.jsx("select",{value:s,onChange:v=>f(Number(v.target.value)),style:{padding:"5px 10px",fontSize:13,border:`1.5px solid ${I.greenBorder}`,borderRadius:7,outline:"none",color:I.dark,background:I.white,cursor:"pointer",fontFamily:"'Segoe UI', sans-serif"},children:[10,20,50,100].map(v=>a.jsx("option",{value:v,children:v},v))}),a.jsxs("span",{style:{fontSize:12,color:I.muted,whiteSpace:"nowrap"},children:["of ",a.jsx("strong",{style:{color:I.dark},children:l})]})]}),o>1&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[a.jsx("button",{onClick:()=>u(r-1),disabled:r===1,style:{...y,background:r===1?"#f0f4f0":I.white,color:r===1?"#aaa":I.green,cursor:r===1?"not-allowed":"pointer"},children:"‹ Prev"}),p.map((v,M)=>v==="..."?a.jsx("span",{style:{padding:"6px 4px",fontSize:13,color:I.muted},children:"…"},`dot-${M}`):a.jsx("button",{onClick:()=>u(v),style:{...y,background:v===r?I.green:I.white,color:v===r?"#fff":I.dark,border:`1.5px solid ${v===r?I.green:I.greenBorder}`},children:v},v)),a.jsx("button",{onClick:()=>u(r+1),disabled:r===o,style:{...y,background:r===o?"#f0f4f0":I.white,color:r===o?"#aaa":I.green,cursor:r===o?"not-allowed":"pointer"},children:"Next ›"})]})]})}function SS(){const[r,o]=b.useState([]),[l,s]=b.useState(!0),[u,f]=b.useState(""),[p,x]=b.useState("All"),[h,m]=b.useState(null),[y,v]=b.useState(null),[M,A]=b.useState(!1),[S,z]=b.useState(!1),[E,R]=b.useState(null),[C,B]=b.useState(null),[G,U]=b.useState(1),[O,$]=b.useState(1),[Q,ue]=b.useState(0),[ge,P]=b.useState(20);mt();const le=(T,N="success")=>{B({msg:T,type:N}),setTimeout(()=>B(null),3500)};b.useEffect(()=>{H(1,20)},[]);const H=async(T=G,N=ge)=>{try{s(!0);const Y=localStorage.getItem("authUser"),D=Y?JSON.parse(Y):null,se=await Ie.get("/getAllApplications",{params:{role:D?.role,userId:D?.id,userOffice:D?.office,userDepartmentCategory:D?.departmentCategory,userDepartmentName:D?.departmentName,page:T,limit:N}});se.data.success&&(o(se.data.data||[]),ue(se.data.total||0),$(se.data.totalPages||1),U(T))}catch(Y){console.error("Error fetching applications:",Y)}finally{s(!1)}},me=T=>{T<1||T>O||(H(T,ge),window.scrollTo({top:0,behavior:"smooth"}))},we=T=>{P(T),H(1,T),window.scrollTo({top:0,behavior:"smooth"})},F=()=>A(!0),ie=T=>{if(A(!1),T){const N=Y=>Y?Y.replace(/Ward\s+/i,"Ward-"):"";R({fullName:T.fullName||"",mobile:T.mobileNumber||"",email:T.email||"",address:T.address||"",pincode:T.pincode||"",wardNo:T.ward||"",ward:N(T.ward),visitorPhoto:T.visitorPhoto||"",_tokenId:T.tokenId||"",_citizenId:T.citizenId||"",_preferredDate:T.preferredDate||"",_slotTime:T.slotTime||"",_microSlot:T.microSlot||""})}else R(null);z(!0)},pe=()=>{z(!1),R(null),H(G,ge)},K=async({applicationId:T,replyMessage:N,status:Y,priority:D,replyDocument:se})=>{try{const fe=localStorage.getItem("authUser"),be=fe?JSON.parse(fe):null,Ne=be?.submittedByName||be?.name||be?.fullName||"",Qe=be?.submittedByRole||be?.role||"",at=be?.submittedById||be?.id||"",Yt=r.find(X=>X._id===T)?.tokenNo;if(!Yt){le("Token No सापडले नाही ❌","error");return}const re=await Ie.get(`/citizen/appointment/token/${Yt}`).catch(()=>null);if(!re?.data?.appointment?._id){le("Citizen Appointment सापडले नाही ❌","error");return}const ve=re.data.appointment._id,he=new FormData;he.append("status",Y.toLowerCase()),he.append("adminNote",N),he.append("replyMessage",N),he.append("priority",D),he.append("repliedBy",at),he.append("repliedByName",Ne),he.append("repliedByRole",Qe),se&&he.append("replyDocument",se),await Ie.patch(`/citizen/admin/update-status/${ve}`,he,{headers:{"Content-Type":"multipart/form-data"}});const q={replyMessage:N,status:Y,priority:D,repliedBy:at,repliedByName:Ne,repliedByRole:Qe,createdAt:new Date().toISOString()};o(X=>X.map(ce=>ce._id===T?{...ce,status:Y,priority:D,replies:[...ce.replies||[],q]}:ce)),le("Reply यशस्वीरित्या पाठवली! ✅"),v(null)}catch(fe){console.error("Reply error:",fe),le(fe?.response?.data?.message||"Reply पाठवताना error आला ❌","error")}},L=r.filter(T=>{const N=!u||T.fullName?.toLowerCase().includes(u.toLowerCase())||T.inwardNo?.toLowerCase().includes(u.toLowerCase())||T.subject?.toLowerCase().includes(u.toLowerCase())||T.mobile?.includes(u),Y=p==="All"||T.status===p;return N&&Y}),j=["All","Pending","In Progress","Resolved","Rejected"].map(T=>({label:T,count:T==="All"?Q:r.filter(N=>N.status===T).length}));return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:I.bg,minHeight:"100vh",padding:"16px"},children:[a.jsx("style",{children:`
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
      `}),C&&a.jsx("div",{className:"toast-box",style:{position:"fixed",top:16,right:16,zIndex:9999,background:C.type==="success"?I.green:I.red,color:"#fff",padding:"12px 18px",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:C.msg}),a.jsxs("div",{className:"hdr-row",style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18},children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"page-title",style:{margin:0,fontSize:24,fontWeight:700,color:I.dark,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:["Applications",a.jsx("span",{style:{background:I.greenBadge,color:I.green,borderRadius:20,padding:"2px 10px",fontSize:13,fontWeight:700},children:Q})]}),a.jsx("p",{style:{margin:"4px 0 0",color:I.muted,fontSize:13},children:"जन संवाद - Applications"})]}),a.jsxs("div",{className:"hdr-btns",style:{display:"flex",gap:10},children:[a.jsx("button",{onClick:()=>H(G,ge),style:{background:I.white,color:I.green,border:`2px solid ${I.green}`,borderRadius:8,padding:"9px 16px",fontWeight:600,fontSize:13,cursor:"pointer"},children:"🔄 Refresh"}),a.jsx("button",{onClick:F,style:{background:I.green,color:"#fff",border:"none",borderRadius:8,padding:"9px 16px",fontWeight:600,fontSize:13,cursor:"pointer"},children:"➕ Add"})]})]}),a.jsx("div",{style:{background:I.white,borderRadius:12,padding:"12px 16px",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"},children:a.jsxs("div",{className:"flt-bar",style:{display:"flex",alignItems:"center",gap:10},children:[a.jsxs("div",{className:"srch-wrap",style:{position:"relative",flex:1},children:[a.jsx("span",{style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:14,color:I.muted},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, inward no, subject...",value:u,onChange:T=>f(T.target.value),style:{width:"100%",padding:"9px 12px 9px 32px",fontSize:13,border:`1.5px solid ${I.greenBorder}`,borderRadius:8,outline:"none",color:I.dark,background:"#f8fdf8",boxSizing:"border-box",fontFamily:"'Segoe UI', sans-serif"}})]}),a.jsx("div",{className:"flt-tabs",style:{display:"flex",gap:6,flexWrap:"wrap"},children:j.map(({label:T,count:N})=>a.jsxs("button",{onClick:()=>x(T),style:{padding:"7px 14px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",border:p===T?"none":`1.5px solid ${I.greenBorder}`,background:p===T?I.green:I.white,color:p===T?"#fff":I.muted,transition:"all .15s",whiteSpace:"nowrap"},children:[T," ",a.jsx("span",{style:{marginLeft:4,fontSize:11,fontWeight:700,background:p===T?"rgba(255,255,255,0.25)":I.greenBadge,color:p===T?"#fff":I.green,padding:"1px 6px",borderRadius:10},children:N})]},T))})]})}),a.jsxs("div",{className:"desk-table",style:{background:I.white,borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflowX:"auto"},children:[a.jsx("div",{style:{display:"flex",alignItems:"center",padding:"14px 20px 12px",borderBottom:`2px solid ${I.greenBadge}`},children:a.jsxs("h3",{style:{margin:0,fontSize:16,fontWeight:700,color:I.dark},children:["Application Records",a.jsx("span",{style:{background:I.greenBadge,color:I.green,borderRadius:20,padding:"2px 10px",fontSize:12,marginLeft:8},children:Q})]})}),l?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:1200},children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:"#f0f7f2"},children:["Reply","#","Applicant","Token No","Status","Subject","Department","Priority","Date","Submitted By","Reply By","Document"].map(T=>a.jsx("th",{style:{padding:"12px 14px",textAlign:"left",fontSize:12,fontWeight:700,color:I.dark,borderBottom:`2px solid ${I.greenBadge}`,whiteSpace:"nowrap"},children:T},T))})}),a.jsx("tbody",{children:L.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:12,style:{textAlign:"center",padding:48,color:"#888",fontSize:14},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📭"}),u?"No matching applications found.":"No applications yet."]})}):L.map((T,N)=>a.jsxs("tr",{style:{borderBottom:`1px solid ${I.rowBorder}`,cursor:"pointer"},onMouseOver:Y=>Y.currentTarget.style.background=I.rowHover,onMouseOut:Y=>Y.currentTarget.style.background="transparent",onClick:()=>m(T),children:[a.jsx("td",{style:{padding:"10px 12px"},onClick:Y=>Y.stopPropagation(),children:a.jsx("button",{onClick:()=>v(T),style:{background:I.greenLight,border:`1.5px solid ${I.green}`,borderRadius:7,padding:"5px 11px",cursor:"pointer",color:I.green,fontSize:12,fontWeight:700},children:"📨 Reply"})}),a.jsx("td",{style:{padding:"10px 12px",fontSize:13,color:"#888"},children:(G-1)*ge+N+1}),a.jsx("td",{style:{padding:"10px 12px",minWidth:160},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:rb(T.fullName),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:12,flexShrink:0},children:ib(T.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:13,fontWeight:700,color:I.dark},children:T.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:11,color:I.muted},children:T.mobile})]})]})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsx("span",{style:{background:I.greenLight,color:I.green,borderRadius:6,padding:"2px 9px",fontSize:14,fontWeight:700,fontFamily:"monospace",whiteSpace:"nowrap"},children:T.tokenNo||"—"})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsx(ob,{status:T.status})}),a.jsx("td",{style:{padding:"10px 12px",maxWidth:180},children:a.jsx("span",{style:{display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:170,fontSize:13,color:I.dark},title:T.subject,children:T.subject||"—"})}),a.jsxs("td",{style:{padding:"10px 12px",maxWidth:160},children:[a.jsx("div",{style:{fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:150,color:I.dark},children:T.mainDepartment||"—"}),T.subDepartment&&a.jsx("div",{style:{fontSize:11,color:I.muted,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:150},children:T.subDepartment})]}),a.jsx("td",{style:{padding:"10px 12px"},children:T.status!=="Resolved"?a.jsx(lb,{priority:T.priority}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px",whiteSpace:"nowrap",fontSize:12,color:I.muted},children:lf(T.submissionDate)}),a.jsx("td",{style:{padding:"10px 12px",minWidth:130},children:T.submittedByName?a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:I.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:120},children:T.submittedByName}),T.submittedByRole&&a.jsx("div",{style:{fontSize:11,color:I.muted},children:T.submittedByRole})]}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px",minWidth:130},children:T.replies&&T.replies.length>0?(()=>{const Y=T.replies[0],D=Y.status==="Resolved",se=T.replies.length-1;return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:D?"#22c55e":"#6366f1",display:"inline-block",flexShrink:0}}),a.jsx("div",{style:{fontSize:12,fontWeight:700,color:D?I.green:I.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:110},children:Y.repliedByName||"—"})]}),Y.repliedByRole&&a.jsx("div",{style:{fontSize:11,color:I.muted,paddingLeft:12},children:Y.repliedByRole}),se>0&&a.jsxs("div",{style:{fontSize:11,color:"#6366f1",fontWeight:700,paddingLeft:12},children:["+",se," more"]})]})})():a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px"},onClick:Y=>Y.stopPropagation(),children:T.documents?a.jsx("a",{href:T.documents,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:4,color:I.green,fontSize:12,fontWeight:600,padding:"4px 8px",borderRadius:6,background:I.greenLight,textDecoration:"none"},children:"📄 View"}):a.jsx("span",{style:{color:"#ccc"},children:"—"})})]},T._id))})]}),!l&&a.jsx(xh,{page:G,totalPages:O,total:Q,limit:ge,onPageChange:me,onLimitChange:we})]}),a.jsx("div",{className:"mob-cards",children:l?a.jsxs("div",{style:{textAlign:"center",padding:48,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):L.length===0?a.jsxs("div",{style:{textAlign:"center",padding:48,color:"#888"},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📭"}),u?"No matching applications found.":"No applications yet."]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{fontSize:12,color:I.muted,marginBottom:10,padding:"0 2px"},children:["Showing ",a.jsxs("strong",{style:{color:I.dark},children:[(G-1)*ge+1,"–",Math.min(G*ge,Q)]})," of ",a.jsx("strong",{style:{color:I.dark},children:Q})," applications"]}),L.map((T,N)=>a.jsx(yS,{app:T,index:N,onReply:Y=>v(Y),onView:Y=>m(Y)},T._id||N)),a.jsx(xh,{page:G,totalPages:O,total:Q,limit:ge,onPageChange:me,onLimitChange:we})]})}),h&&a.jsx(wS,{record:h,onClose:()=>m(null)}),y&&a.jsx(jS,{record:y,onClose:()=>v(null),onSubmit:K}),M&&a.jsx(vS,{onClose:()=>A(!1),onProceed:ie}),S&&a.jsx(nb,{onClose:pe,prefillData:E})]})}const Ue={primary:"#1a5c45",primaryLight:"#e8f5f0",primaryBorder:"#b2d8cc",primaryMid:"#2d7a5f"},bh=["#1a5c45","#2d7a5f","#3a9b76","#0d4f5c","#1e7a6e","#256b4a","#4a9e7c","#1b6b52"],sb=["General Administration Department / Records Department HO","Satellite City Department HO","Establishment Department HO","Accounting Department HO","Construction department HO","Inward-out Department HO","Birth and Death Department HO","Marriage Registration Department HO","Commissioner Office HO","Tax department HO","Water Supply Department HO","Advertisement Tax Department HO","Mud and Bhuibhade Department HO","Naharkat / License Certificates Department HO","Market Recovery Department HO","Unauthorized Construction Committee HO","Accounting Department, (A) HO","Unauthorized Construction Department HO","Health Department HO","Meeting Department HO","Nulm department / hawker policy department HO","Library department HO","Local Body Tax Department HO","Diwabatti Department HO","Town Planning Department HO","Environment / Tree Authority / Forests / Parks Department / Election Department / Census Department HO","Audit Department HO","IT DEPARTMENT","Department of Hygiene Disorder Management HO","Fire Brigade Department HO","Legal Department","Transportation / Vehicle Department HO","Medical Health Department HO","Women and Child welfare Department HO","Handicapped welfare Department HO","Disaster Management Departmengt HO","Special Planning Authority Department HO"];function kS({name:r="",index:o}){const l=r.split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase()||"?";return a.jsx("div",{style:{width:36,height:36,borderRadius:"50%",backgroundColor:bh[o%bh.length],display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".8125rem",fontWeight:700,flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,.2)",border:"2px solid #fff"},children:l})}function Hu(r){return r?new Date(r).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}const cs={border:"1px solid #d1e8df",borderRadius:8,padding:"10px 14px",transition:"border-color .2s",backgroundColor:"#fff"},ds={display:"block",fontSize:".75rem",color:"#5a8a74",marginBottom:3,fontWeight:600,letterSpacing:".02em"},us={width:"100%",outline:"none",fontSize:".875rem",color:"#1a2e25",background:"transparent",border:"none",fontFamily:"inherit"};function NS({user:r,onClose:o}){return r?a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:480,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Ue.primary} 0%, ${Ue.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Detail"}),a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:r.fullName})]}),a.jsx("button",{onClick:o,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:24},children:a.jsx("div",{style:{background:Ue.primaryLight,borderRadius:10,padding:"14px 18px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px 24px"},children:[["Full Name",r.fullName],["Username",r.userName],["Mobile Number",r.mobileNumber],["Email",r.email],["Department",r.departmentName],["Created At",Hu(r.createdAt)],["Updated At",Hu(r.updatedAt)]].map(([l,s])=>a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"#5a8a74",marginBottom:2,fontWeight:600},children:l}),a.jsx("p",{style:{fontSize:".875rem",color:"#1a2e25",fontWeight:500,margin:0},children:s||"—"})]},l))})})]})}):null}function CS({user:r,onClose:o,onSuccess:l}){const[s,u]=b.useState(!1),[f,p]=b.useState({fullName:r.fullName||"",userName:r.userName||"",mobileNumber:r.mobileNumber||"",email:r.email||"",password:r.password||"",departmentName:r.departmentName||""}),x=y=>p({...f,[y.target.name]:y.target.value}),h=async y=>{if(y.preventDefault(),!f.fullName||!f.userName||!f.mobileNumber||!f.email){Se.warn("All required fields fill करा ❌");return}try{u(!0);const v=await Ie.patch(`/users/${r._id}`,f);if(!v.data.success){Se.error(v.data.message||"Update failed ❌");return}Se.success("User Updated Successfully ✅"),l(),o()}catch(v){Se.error(v?.response?.data?.message||"Server Error ❌")}finally{u(!1)}},m=f.fullName&&f.userName&&f.mobileNumber&&f.email&&!s;return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Ue.primary} 0%, ${Ue.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Management"}),a.jsxs("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:["Edit User — ",r.fullName]})]}),a.jsx("button",{onClick:o,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:"24px 28px"},children:a.jsxs("form",{onSubmit:h,style:{display:"flex",flexDirection:"column",gap:12},children:[[{label:"Full Name",name:"fullName",type:"text",ph:"Enter full name"},{label:"Username",name:"userName",type:"text",ph:"Enter username"},{label:"Mobile Number",name:"mobileNumber",type:"tel",ph:"Enter mobile number"},{label:"Email",name:"email",type:"email",ph:"Enter email"}].map(({label:y,name:v,type:M,ph:A})=>a.jsxs("div",{style:cs,children:[a.jsx("label",{style:ds,children:y}),a.jsx("input",{type:M,name:v,value:f[v],onChange:x,placeholder:A,style:us,maxLength:v==="mobileNumber"?10:void 0})]},v)),a.jsxs("div",{style:cs,children:[a.jsx("label",{style:ds,children:"Department Name"}),a.jsxs("select",{name:"departmentName",value:f.departmentName,onChange:x,style:{...us,cursor:"pointer"},children:[a.jsx("option",{value:"",children:"-- Select Department --"}),sb.map(y=>a.jsx("option",{value:y,children:y},y))]})]}),a.jsxs("div",{style:{display:"flex",gap:10,paddingTop:4},children:[a.jsx("button",{type:"button",onClick:o,style:{flex:1,padding:"11px 0",borderRadius:8,border:`1px solid ${Ue.primaryBorder}`,background:"#fff",color:Ue.primary,fontWeight:600,fontSize:".875rem",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"submit",disabled:!m,style:{flex:1,padding:"11px 0",borderRadius:8,border:"none",background:m?Ue.primary:"#ccc",color:"#fff",fontWeight:600,fontSize:".875rem",cursor:m?"pointer":"not-allowed",opacity:m?1:.65},children:s?"Saving...":"💾 Save Changes"})]})]})})]})})}function TS({onClose:r,onSuccess:o}){const[l,s]=b.useState(!1),[u,f]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:"",departmentName:""}),p=m=>f({...u,[m.target.name]:m.target.value}),x=async m=>{if(m.preventDefault(),!u.fullName||!u.userName||!u.mobileNumber||!u.email||!u.password){Se.warn("All fields required ❌");return}try{s(!0);const y=await Ie.post("/register",u);if(!y.data.success){Se.error(y.data.message||"Registration failed ❌");return}Se.success("User Added Successfully ✅"),o(),r()}catch(y){Se.error(y?.response?.data?.message||"Server Error ❌")}finally{s(!1)}},h=!u.fullName||!u.userName||!u.mobileNumber||!u.email||!u.password||l;return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Ue.primary} 0%, ${Ue.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Management"}),a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:"Add New User"})]}),a.jsx("button",{onClick:r,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:"24px 28px"},children:a.jsxs("form",{onSubmit:x,style:{display:"flex",flexDirection:"column",gap:12},children:[[{label:"Full Name",name:"fullName",type:"text",ph:"Enter full name"},{label:"Username",name:"userName",type:"text",ph:"Enter username"},{label:"Mobile Number",name:"mobileNumber",type:"tel",ph:"Enter mobile number"},{label:"Email",name:"email",type:"email",ph:"Enter email"},{label:"Password",name:"password",type:"password",ph:"Enter password"}].map(({label:m,name:y,type:v,ph:M})=>a.jsxs("div",{style:cs,children:[a.jsx("label",{style:ds,children:m}),a.jsx("input",{type:v,name:y,value:u[y],onChange:p,placeholder:M,style:us,maxLength:y==="mobileNumber"?10:void 0})]},y)),a.jsxs("div",{style:cs,children:[a.jsx("label",{style:ds,children:"Department Name"}),a.jsxs("select",{name:"departmentName",value:u.departmentName,onChange:p,style:{...us,cursor:"pointer"},children:[a.jsx("option",{value:"",children:"-- Select Department --"}),sb.map(m=>a.jsx("option",{value:m,children:m},m))]})]}),a.jsxs("div",{style:{display:"flex",gap:10,paddingTop:4},children:[a.jsx("button",{type:"button",onClick:r,style:{flex:1,padding:"11px 0",borderRadius:8,border:`1px solid ${Ue.primaryBorder}`,background:"#fff",color:Ue.primary,fontWeight:600,fontSize:".875rem",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"submit",disabled:h,style:{flex:1,padding:"11px 0",borderRadius:8,border:"none",background:h?"#ccc":Ue.primary,color:"#fff",fontWeight:600,fontSize:".875rem",cursor:h?"not-allowed":"pointer",opacity:h?.65:1},children:l?"Creating...":"+ Add User"})]})]})})]})})}function zS(){const[r,o]=b.useState([]),[l,s]=b.useState(!0),[u,f]=b.useState(""),[p,x]=b.useState(null),[h,m]=b.useState(!1),[y,v]=b.useState(null),[M,A]=b.useState(null);b.useEffect(()=>{S()},[]);const S=async()=>{try{s(!0);const R=await Ie.get("/getUsers");R.data.success?o(R.data.users||[]):Se.error(R.data.message||"Users fetch failed ❌")}catch{Se.error("Users fetch करताना error आला ❌")}finally{s(!1)}},z=async(R,C,B)=>{if(R.stopPropagation(),!!window.confirm(`"${B}" ला delete करायचे आहे का?`))try{v(C);const G=await Ie.delete(`/deleteUser/${C}`);G.data.success?(o(U=>U.filter(O=>O._id!==C)),Se.success(`"${B}" Deleted Successfully ✅`)):Se.error(G.data.message||"Delete failed ❌")}catch(G){Se.error(G?.response?.data?.message||"Server Error ❌")}finally{v(null)}},E=r.filter(R=>!u||R.fullName?.toLowerCase().includes(u.toLowerCase())||R.userName?.toLowerCase().includes(u.toLowerCase())||R.mobileNumber?.includes(u)||R.email?.toLowerCase().includes(u.toLowerCase()));return a.jsxs("div",{style:{minHeight:"100vh",background:"#f0f7f4",padding:24},children:[a.jsx("style",{children:`
        @keyframes uspin { to { transform:rotate(360deg) } }
        .u-tr:hover { background: #e8f5f0 !important; }
        .u-del-btn:hover:not(:disabled) { background:#fee2e2 !important; border-color:#f87171 !important; }
        .u-edit-btn:hover { background:#d1fae5 !important; border-color:#6ee7b7 !important; }
        .u-ref-btn:hover { background:#e8f5f0 !important; color:#1a5c45 !important; border-color:#b2d8cc !important; }
        .u-add-btn:hover { background:#154d3a !important; }
        .u-search-input:focus { border-color: #1a5c45 !important; box-shadow: 0 0 0 3px rgba(26,92,69,.12) !important; }
      `}),a.jsxs("div",{style:{maxWidth:1280,margin:"0 auto"},children:[a.jsxs("div",{style:{marginBottom:24},children:[a.jsxs("h1",{style:{fontSize:"1.6rem",fontWeight:800,color:"#1a2e25",margin:0,display:"flex",alignItems:"center",gap:12},children:["All Users",a.jsx("span",{style:{fontSize:".8125rem",fontWeight:700,color:Ue.primary,background:Ue.primaryLight,border:`1px solid ${Ue.primaryBorder}`,padding:"2px 10px",borderRadius:20},children:r.length})]}),a.jsx("p",{style:{color:"#5a8a74",fontSize:".9rem",fontWeight:500,marginTop:4},children:"Janata Darbar — User Management"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:16,flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative",flex:"1 1 300px",maxWidth:480},children:[a.jsx("span",{style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:"#5a8a74",fontSize:".9rem"},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, username, mobile, email...",value:u,onChange:R=>f(R.target.value),className:"u-search-input",style:{width:"100%",paddingLeft:36,paddingRight:14,paddingTop:9,paddingBottom:9,fontSize:".875rem",border:`1px solid ${Ue.primaryBorder}`,borderRadius:8,outline:"none",background:"#fff",color:"#1a2e25",transition:"border-color .2s, box-shadow .2s",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{display:"flex",gap:10,flexShrink:0},children:[a.jsx("button",{onClick:S,className:"u-ref-btn",style:{display:"flex",alignItems:"center",gap:6,padding:"9px 16px",border:`1px solid ${Ue.primaryBorder}`,borderRadius:8,background:"#fff",color:"#3a6b57",fontWeight:600,fontSize:".8125rem",cursor:"pointer",transition:"all .15s"},children:"🔄 Refresh"}),a.jsx("button",{onClick:()=>m(!0),className:"u-add-btn",style:{display:"flex",alignItems:"center",gap:6,padding:"9px 18px",border:"none",borderRadius:8,background:Ue.primary,color:"#fff",fontWeight:600,fontSize:".8125rem",cursor:"pointer",transition:"background .15s"},children:"+ Add User"})]})]}),a.jsxs("div",{style:{background:"#fff",border:`1px solid ${Ue.primaryBorder}`,borderRadius:10,overflow:"hidden",boxShadow:"0 2px 8px rgba(26,92,69,.08)"},children:[a.jsx("style",{children:`
            .u-th { padding:0 16px; height:50px; font-weight:600; font-size:.8rem; color:${Ue.primary}; text-align:left; white-space:nowrap; background:${Ue.primaryLight}; border-bottom:1px solid ${Ue.primaryBorder}; letter-spacing:.04em; text-transform:uppercase; }
            .u-tr { border-bottom:1px solid #e8f2ee; cursor:pointer; transition:background .12s; }
            .u-tr:last-child { border-bottom:none; }
            .u-td { padding:0 16px; height:54px; vertical-align:middle; font-size:.875rem; }
            .u-mono { display:inline-block; padding:2px 8px; background:${Ue.primaryLight}; border:1px solid ${Ue.primaryBorder}; border-radius:4px; font-family:monospace; font-size:.8rem; color:${Ue.primary}; font-weight:600; }
            .u-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:46px; border-top:1px solid ${Ue.primaryBorder}; background:${Ue.primaryLight}; font-size:.8125rem; color:${Ue.primaryMid}; }
            .u-del-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #fca5a5; background:#fff5f5; color:#dc2626; cursor:pointer; transition:all .15s; }
            .u-del-btn:disabled { opacity:.5; cursor:not-allowed; }
            .u-edit-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #6ee7b7; background:#f0fdf4; color:#065f46; cursor:pointer; transition:all .15s; }
          `}),a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{children:["#","User","Username","Mobile","Email","Department","Joined","Action"].map(R=>a.jsx("th",{className:"u-th",children:R},R))})}),a.jsx("tbody",{children:l?a.jsx("tr",{children:a.jsxs("td",{colSpan:8,style:{textAlign:"center",padding:"64px 0",color:"#5a8a74"},children:[a.jsx("div",{style:{width:32,height:32,margin:"0 auto 12px",border:`3px solid ${Ue.primaryBorder}`,borderTopColor:Ue.primary,borderRadius:"50%",animation:"uspin .8s linear infinite"}}),a.jsx("div",{style:{fontWeight:500},children:"Loading users…"})]})}):E.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:8,style:{textAlign:"center",padding:"64px 0",color:"#5a8a74"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:8},children:"👤"}),a.jsx("div",{style:{fontWeight:500},children:"No users found"})]})}):E.map((R,C)=>a.jsxs("tr",{className:"u-tr",style:{background:C%2===0?"#fff":"#fafcfb"},onClick:()=>x(R),children:[a.jsx("td",{className:"u-td",style:{color:"#5a8a74",width:50,fontWeight:600},children:C+1}),a.jsx("td",{className:"u-td",style:{minWidth:180},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(kS,{name:R.fullName,index:C}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:".875rem",fontWeight:600,color:"#1a2e25",lineHeight:1.3},children:R.fullName}),a.jsxs("div",{style:{fontSize:".72rem",color:"#5a8a74",marginTop:1},children:["ID: ",R._id?.slice(-6)]})]})]})}),a.jsx("td",{className:"u-td",style:{width:140},children:a.jsxs("span",{className:"u-mono",children:["@",R.userName]})}),a.jsx("td",{className:"u-td",style:{width:140},children:a.jsx("div",{style:{fontSize:".875rem",color:"#2d5a45"},children:R.mobileNumber||"—"})}),a.jsx("td",{className:"u-td",style:{minWidth:180},children:a.jsx("div",{style:{fontSize:".875rem",color:"#2d5a45",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:200},children:R.email||"—"})}),a.jsx("td",{className:"u-td",style:{minWidth:200},children:a.jsx("div",{style:{fontSize:".8rem",color:"#2d5a45",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:220},title:R.departmentName||"—",children:R.departmentName||a.jsx("span",{style:{color:"#a0c4b5"},children:"—"})})}),a.jsx("td",{className:"u-td",style:{width:120,whiteSpace:"nowrap",color:"#3a6b57",fontSize:".8125rem"},children:Hu(R.createdAt)}),a.jsx("td",{className:"u-td",style:{width:160},onClick:B=>B.stopPropagation(),children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("button",{className:"u-edit-btn",onClick:B=>{B.stopPropagation(),A(R)},children:"✏️ Edit"}),a.jsx("button",{className:"u-del-btn",disabled:y===R._id,onClick:B=>z(B,R._id,R.fullName),children:y===R._id?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:11,height:11,border:"2px solid #fca5a5",borderTopColor:"#dc2626",borderRadius:"50%",display:"inline-block",animation:"uspin .7s linear infinite"}}),"Deleting…"]}):a.jsx(a.Fragment,{children:"🗑️ Delete"})})]})})]},R._id))})]})}),!l&&E.length>0&&a.jsxs("div",{className:"u-footer",children:[a.jsxs("span",{children:["Showing ",a.jsx("strong",{style:{color:Ue.primary},children:E.length})," of ",a.jsx("strong",{style:{color:Ue.primary},children:r.length})," users"]}),a.jsx("span",{style:{color:"#5a8a74",fontSize:".8rem"},children:"👆 Click any row to view full details"})]})]})]}),p&&a.jsx(NS,{user:p,onClose:()=>x(null)}),h&&a.jsx(TS,{onClose:()=>m(!1),onSuccess:S}),M&&a.jsx(CS,{user:M,onClose:()=>A(null),onSuccess:S})]})}const Wl="https://jansamvad.saavi.co.in",AS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ES=["January","February","March","April","May","June","July","August","September","October","November","December"],fs=[];for(let r=7;r<=20;r++)fs.push(`${String(r).padStart(2,"0")}:00`),r<20&&fs.push(`${String(r).padStart(2,"0")}:30`);function RS(r,o){return new Date(r,o+1,0).getDate()}function DS(r,o){let l=new Date(r,o,1).getDay();return l===0?6:l-1}function _S(r,o,l){return`${r}-${String(o+1).padStart(2,"0")}-${String(l).padStart(2,"0")}`}function qi(r){return new Date(r+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function ps(r){const[o,l]=r.split(":").map(Number);return o*60+l}function yh(r,o){const l=ps(o)-ps(r);return`${Math.floor(l/60)}h${l%60>0?" "+l%60+"m":""}`}function OS(){const r=new Date,[o,l]=b.useState([]),[s,u]=b.useState(!0),[f,p]=b.useState(!1),[x,h]=b.useState(""),[m,y]=b.useState(null),[v,M]=b.useState(null),[A,S]=b.useState(null),[z,E]=b.useState(!1),[R,C]=b.useState(r.getFullYear()),[B,G]=b.useState(r.getMonth()),[U,O]=b.useState(null),[$,Q]=b.useState(""),[ue,ge]=b.useState(""),[P,le]=b.useState(window.innerWidth<640);b.useEffect(()=>{const D=()=>le(window.innerWidth<640);return window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const H=(D,se="success")=>{y({msg:D,type:se}),setTimeout(()=>y(null),3500)},me=async()=>{try{u(!0);const D=await Xe.get(`${Wl}/api/availability/get`);D.data.success&&l(D.data.data)}catch{H("Failed to load availability data","error")}finally{u(!1)}};b.useEffect(()=>{me()},[]);const we=new Set(o.map(D=>D.date)),F=$?fs.filter(D=>ps(D)>ps($)):[],ie=async()=>{if(!U)return H("कृपया date select करा!","error");if(!$)return H("Start Time select करा!","error");if(!ue)return H("End Time select करा!","error");try{p(!0),(await Xe.post(`${Wl}/api/availability/add-slot`,{date:U,start:$,end:ue})).data.success&&(H(`Slot ${$}–${ue} added successfully!`),await me(),Q(""),ge(""),O(null),E(!1))}catch(D){H(D.response?.data?.message||"Failed to add slot","error")}finally{p(!1)}},pe=async(D,se)=>{try{(await Xe.delete(`${Wl}/api/availability/delete-slot/${D}`,{data:{slotIndex:se}})).data.success&&(H("Slot removed.","error"),await me())}catch{H("Failed to remove slot","error")}},K=async D=>{try{(await Xe.delete(`${Wl}/api/availability/delete/${D}`)).data.success&&(H("Availability removed.","error"),S(null),await me())}catch{H("Failed to delete","error")}},L=()=>{const D=["Date,Start Time,End Time,Status",...o.flatMap(Ne=>Ne.timeSlots.map(Qe=>`"${qi(Ne.date)}","${Qe.start}","${Qe.end}","${Ne.status}"`))].join(`
`),se=new Blob([D],{type:"text/csv"}),fe=URL.createObjectURL(se),be=document.createElement("a");be.href=fe,be.download="mayor_availability.csv",be.click()},j=o.filter(D=>qi(D.date).toLowerCase().includes(x.toLowerCase())),T=()=>{B===0?(G(11),C(D=>D-1)):G(D=>D-1)},N=()=>{B===11?(G(0),C(D=>D+1)):G(D=>D+1)},Y={border:"1.5px solid #c8e0cc",borderRadius:8,padding:"10px 12px",fontSize:14,color:"#1a4a2e",background:"#f8fdf8",outline:"none",cursor:"pointer",width:"100%",fontWeight:600};return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:"#f0f4f0",minHeight:"100vh",padding:P?"16px 12px":"24px"},children:[a.jsx("style",{children:`
        @keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        .avail-table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .avail-table { width: 100%; border-collapse: collapse; min-width: 560px; }
        .avail-card { background:#fff; border-radius:10px; padding:14px; margin-bottom:12px; box-shadow:0 1px 6px rgba(0,0,0,0.07); }
        .avail-card-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; }
        .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        @media (max-width: 639px) {
          .modal-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}),m&&a.jsx("div",{style:{position:"fixed",top:20,right:P?12:20,left:P?12:"auto",zIndex:9999,background:m.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"12px 20px",borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:m.msg}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsxs("div",{style:{marginBottom:12},children:[a.jsx("h1",{style:{margin:0,fontSize:P?20:26,fontWeight:700,color:"#1a4a2e"},children:"Mayor Availability"}),a.jsx("p",{style:{margin:"4px 0 0",color:"#5a7a6a",fontSize:P?12:14},children:"Mayor च्या available dates व time slots manage करा"})]}),a.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[a.jsx("button",{onClick:()=>{O(null),Q(""),ge(""),C(r.getFullYear()),G(r.getMonth()),E(!0)},style:{background:"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:P?"9px 14px":"10px 20px",fontWeight:600,fontSize:P?13:14,cursor:"pointer",flex:P?1:"none"},children:"+ Add Availability"}),a.jsx("button",{onClick:L,style:{background:"#fff",color:"#1a7a4a",border:"2px solid #1a7a4a",borderRadius:8,padding:P?"9px 14px":"10px 20px",fontWeight:600,fontSize:P?13:14,cursor:"pointer",flex:P?1:"none"},children:"⬇ Export CSV"})]})]}),a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:P?14:24,boxShadow:"0 2px 12px rgba(0,0,0,0.07)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:10},children:[a.jsxs("h3",{style:{margin:0,fontSize:P?15:17,fontWeight:700,color:"#1a4a2e"},children:["Availability Records",a.jsx("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"2px 10px",fontSize:13,marginLeft:8},children:o.length})]}),a.jsx("input",{type:"text",placeholder:"🔍 Search by date...",value:x,onChange:D=>h(D.target.value),style:{border:"1.5px solid #d0e0d0",borderRadius:8,padding:"8px 14px",fontSize:13,outline:"none",width:P?"100%":220,color:"#1a4a2e"}})]}),s?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading availability..."]}):P?a.jsx("div",{children:j.length===0?a.jsx("div",{style:{textAlign:"center",padding:40,color:"#888",fontSize:14},children:"No availability records found."}):j.map((D,se)=>{const fe=new Date(D.date+"T00:00:00");return a.jsxs("div",{className:"avail-card",children:[a.jsxs("div",{className:"avail-card-row",children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#1a4a2e"},children:fe.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}),a.jsx("div",{style:{fontSize:12,color:"#5a7a6a",marginTop:2},children:fe.toLocaleDateString("en-IN",{weekday:"long"})})]}),a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:a.jsxs("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"4px 10px",fontSize:11,fontWeight:700},children:["✓ ",D.status]})})]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},children:D.timeSlots.map((be,Ne)=>a.jsxs("span",{style:{background:"#e8f5ee",color:"#1a7a4a",borderRadius:6,padding:"4px 10px",fontSize:12,fontWeight:600,display:"inline-flex",alignItems:"center",gap:5},children:["🕐 ",be.start," – ",be.end,a.jsx("span",{onClick:()=>pe(D._id,Ne),title:"Remove slot",style:{cursor:"pointer",color:"#c0392b",fontWeight:800,fontSize:15,lineHeight:1,marginLeft:2},children:"×"})]},Ne))}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>M(D),style:{flex:1,background:"#e8f5ee",border:"none",borderRadius:7,padding:"8px 0",cursor:"pointer",color:"#1a7a4a",fontSize:13,fontWeight:600},children:"👁 View"}),a.jsx("button",{onClick:()=>S(D),style:{flex:1,background:"#fdecea",border:"none",borderRadius:7,padding:"8px 0",cursor:"pointer",color:"#c0392b",fontSize:13,fontWeight:600},children:"🗑 Delete"})]})]},D._id)})}):a.jsx("div",{className:"avail-table-wrap",children:a.jsxs("table",{className:"avail-table",children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:"#f0f7f2"},children:["#","Date","Day","Time Slots","Status","Actions"].map(D=>a.jsx("th",{style:{padding:"12px 14px",textAlign:"left",fontSize:13,fontWeight:700,color:"#1a4a2e",borderBottom:"2px solid #d4edda"},children:D},D))})}),a.jsx("tbody",{children:j.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:40,color:"#888",fontSize:14},children:"No availability records found."})}):j.map((D,se)=>{const fe=new Date(D.date+"T00:00:00");return a.jsxs("tr",{style:{borderBottom:"1px solid #eef4ee"},onMouseOver:be=>be.currentTarget.style.background="#f8fdf8",onMouseOut:be=>be.currentTarget.style.background="transparent",children:[a.jsx("td",{style:{padding:"12px 14px",fontSize:13,color:"#888"},children:se+1}),a.jsx("td",{style:{padding:"12px 14px",fontSize:14,fontWeight:600,color:"#1a4a2e"},children:fe.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}),a.jsx("td",{style:{padding:"12px 14px",fontSize:13,color:"#5a7a6a"},children:fe.toLocaleDateString("en-IN",{weekday:"long"})}),a.jsx("td",{style:{padding:"12px 14px"},children:a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:D.timeSlots.map((be,Ne)=>a.jsxs("span",{style:{background:"#e8f5ee",color:"#1a7a4a",borderRadius:6,padding:"4px 10px",fontSize:12,fontWeight:600,display:"inline-flex",alignItems:"center",gap:5},children:["🕐 ",be.start," – ",be.end,a.jsx("span",{onClick:()=>pe(D._id,Ne),title:"Remove slot",style:{cursor:"pointer",color:"#c0392b",fontWeight:800,fontSize:15,lineHeight:1,marginLeft:2},children:"×"})]},Ne))})}),a.jsx("td",{style:{padding:"12px 14px"},children:a.jsxs("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700},children:["✓ ",D.status]})}),a.jsx("td",{style:{padding:"12px 14px"},children:a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>M(D),style:{background:"#e8f5ee",border:"none",borderRadius:7,padding:"7px 10px",cursor:"pointer",color:"#1a7a4a",fontSize:14},children:"👁"}),a.jsx("button",{onClick:()=>S(D),style:{background:"#fdecea",border:"none",borderRadius:7,padding:"7px 10px",cursor:"pointer",color:"#c0392b",fontSize:14},children:"🗑"})]})})]},D._id)})})]})})]}),z&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:P?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:P?20:32,width:"100%",maxWidth:740,boxShadow:"0 8px 48px rgba(0,0,0,0.2)",maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{style:{margin:0,fontSize:P?16:20,fontWeight:700,color:"#1a4a2e"},children:"📅 Set Mayor Availability"}),a.jsx("button",{onClick:()=>E(!1),style:{background:"#f0f4f0",border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18},children:"✕"})]}),a.jsxs("div",{className:"modal-grid",children:[a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 14px",fontSize:14,fontWeight:700,color:"#1a4a2e"},children:"① Date Select करा"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[a.jsx("button",{onClick:T,style:{background:"#f0f4f0",border:"none",borderRadius:6,width:32,height:32,cursor:"pointer",fontSize:16},children:"←"}),a.jsxs("span",{style:{fontWeight:700,fontSize:15,color:"#1a4a2e"},children:[ES[B]," ",R]}),a.jsx("button",{onClick:N,style:{background:"#f0f4f0",border:"none",borderRadius:6,width:32,height:32,cursor:"pointer",fontSize:16},children:"→"})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:3,marginBottom:6},children:AS.map(D=>a.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:700,color:"#5a7a6a"},children:D},D))}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:3},children:[Array(DS(R,B)).fill(null).map((D,se)=>a.jsx("div",{},"e"+se)),Array(RS(R,B)).fill(null).map((D,se)=>{const fe=se+1,be=_S(R,B,fe),Ne=U===be,Qe=we.has(be),at=new Date(be)<new Date(r.toDateString());return a.jsxs("button",{onClick:()=>{at||(O(be),Q(""),ge(""))},style:{border:"none",borderRadius:7,padding:"7px 0",cursor:at?"not-allowed":"pointer",fontWeight:Ne?700:500,fontSize:12,background:Ne?"#1a7a4a":Qe?"#d4edda":"#f8faf8",color:Ne?"#fff":Qe?"#1a7a4a":at?"#ccc":"#1a4a2e",position:"relative",transition:"all 0.15s"},children:[fe,Qe&&!Ne&&a.jsx("span",{style:{position:"absolute",bottom:2,left:"50%",transform:"translateX(-50%)",width:4,height:4,borderRadius:"50%",background:"#1a7a4a",display:"block"}})]},fe)})]}),U&&a.jsxs("div",{style:{marginTop:12,padding:"9px 12px",background:"#e8f5ee",borderRadius:8,fontSize:12,color:"#1a4a2e",fontWeight:600},children:["✓ ",qi(U)]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 14px",fontSize:14,fontWeight:700,color:"#1a4a2e"},children:"② Time Slot Select करा"}),U?a.jsxs(a.Fragment,{children:[o.find(D=>D.date===U)?.timeSlots.length>0&&a.jsxs("div",{style:{marginBottom:14,padding:"10px 12px",background:"#fff8e1",borderRadius:8,fontSize:12,color:"#b26a00"},children:[a.jsx("strong",{children:"⚠ Existing slots:"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginTop:5},children:o.find(D=>D.date===U)?.timeSlots.map((D,se)=>a.jsxs("span",{style:{background:"#ffe082",color:"#7a4a00",borderRadius:6,padding:"3px 8px",fontSize:12,fontWeight:600},children:[D.start," – ",D.end]},se))})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",display:"block",marginBottom:6},children:"START TIME"}),a.jsxs("select",{value:$,onChange:D=>{Q(D.target.value),ge("")},style:Y,children:[a.jsx("option",{value:"",children:"-- Start Time निवडा --"}),fs.slice(0,-1).map(D=>a.jsx("option",{value:D,children:D},D))]})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",display:"block",marginBottom:6},children:"END TIME"}),a.jsxs("select",{value:ue,onChange:D=>ge(D.target.value),style:{...Y,opacity:$?1:.5,cursor:$?"pointer":"not-allowed"},disabled:!$,children:[a.jsx("option",{value:"",children:"-- End Time निवडा --"}),F.map(D=>a.jsx("option",{value:D,children:D},D))]})]}),$&&ue&&a.jsxs("div",{style:{padding:"14px 16px",background:"#e8f5ee",borderRadius:10,border:"2px solid #1a7a4a"},children:[a.jsx("div",{style:{fontSize:11,color:"#5a7a6a",fontWeight:700,marginBottom:4,letterSpacing:1},children:"SLOT PREVIEW"}),a.jsxs("div",{style:{fontSize:P?16:20,fontWeight:700,color:"#1a4a2e"},children:["🕐 ",$," → ",ue]}),a.jsxs("div",{style:{fontSize:12,color:"#5a7a6a",marginTop:4},children:["Duration: ",yh($,ue)]})]})]}):a.jsx("div",{style:{background:"#f8faf8",borderRadius:10,padding:24,textAlign:"center",color:"#aaa",fontSize:13,border:"2px dashed #d0e0d0"},children:"← आधी date select करा"})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,marginTop:24},children:[a.jsx("button",{onClick:()=>E(!1),style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e",fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:ie,disabled:f,style:{flex:2,background:f?"#888":"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:f?"not-allowed":"pointer",fontSize:14},children:f?"Adding...":"+ Add Slot"})]})]})}),v&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:P?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:P?20:32,width:"100%",maxWidth:420,boxShadow:"0 8px 40px rgba(0,0,0,0.2)"},children:[a.jsx("h3",{style:{margin:"0 0 20px",color:"#1a4a2e",fontSize:P?16:18},children:"📅 Availability Details"}),a.jsxs("div",{style:{marginBottom:12},children:[a.jsx("span",{style:{fontSize:12,color:"#888",fontWeight:600},children:"DATE"}),a.jsx("p",{style:{margin:"4px 0 0",fontWeight:700,color:"#1a4a2e",fontSize:P?13:15},children:qi(v.date)})]}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("span",{style:{fontSize:12,color:"#888",fontWeight:600},children:"TIME SLOTS"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:8},children:v.timeSlots.map((D,se)=>a.jsxs("div",{style:{background:"#e8f5ee",borderRadius:8,padding:"10px 14px",display:"flex",alignItems:"center",gap:10},children:[a.jsx("span",{style:{fontSize:16},children:"🕐"}),a.jsxs("span",{style:{fontWeight:700,color:"#1a4a2e",fontSize:P?13:15},children:[D.start," – ",D.end]}),a.jsx("span",{style:{fontSize:12,color:"#5a7a6a",marginLeft:"auto"},children:yh(D.start,D.end)})]},se))})]}),a.jsx("button",{onClick:()=>M(null),style:{width:"100%",background:"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:"pointer",fontSize:14},children:"Close"})]})}),A&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:P?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:P?20:32,width:"100%",maxWidth:380,boxShadow:"0 8px 40px rgba(0,0,0,0.2)",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:12},children:"🗑"}),a.jsx("h3",{style:{margin:"0 0 8px",color:"#1a4a2e",fontSize:P?16:18},children:"Delete Availability?"}),a.jsxs("p",{style:{color:"#666",fontSize:P?13:14,marginBottom:24},children:[a.jsx("strong",{children:qi(A.date)})," ची सर्व availability remove होईल."]}),a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("button",{onClick:()=>S(null),style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"11px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e"},children:"Cancel"}),a.jsx("button",{onClick:()=>K(A._id),style:{flex:1,background:"#c0392b",color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:"pointer"},children:"Delete"})]})]})})]})}function $u(r){return r?new Date(r+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function MS(r){return r?new Date(r).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function BS(r){return r?new Date(r+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function cb(r){return r?r.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2):"?"}const vh=["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];function db(r){let o=0;for(let l=0;l<(r||"").length;l++)o=r.charCodeAt(l)+((o<<5)-o);return vh[Math.abs(o)%vh.length]}const jh={pending:{bg:"#fff8e1",color:"#b26a00",border:"#ffe082",dot:"#f59e0b",label:"Pending"},approved:{bg:"#d4edda",color:"#1a7a4a",border:"#a8d5b5",dot:"#1a7a4a",label:"Approved"},rejected:{bg:"#fdecea",color:"#c0392b",border:"#f5c6cb",dot:"#c0392b",label:"Rejected"},"in progress":{bg:"#e8f0fe",color:"#1a4a8a",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},resolved:{bg:"#e8f5ee",color:"#1a4a2e",border:"#a8d5b5",dot:"#22c55e",label:"Resolved"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",dot:"#9ca3af",label:"Expired"}};function Iu(r){return jh[(r||"pending").toLowerCase()]||jh.pending}function LS({appt:r,onClose:o,onRefresh:l,showToast:s}){const[u,f]=b.useState(r.adminNote||""),[p,x]=b.useState(r.status||"pending"),[h,m]=b.useState(!1),[y,v]=b.useState(null),M=async()=>{try{m(!0);const A=new FormData;A.append("status",p),A.append("adminNote",u),y&&A.append("replyDocument",y),await zt.patch(`/citizen/admin/update-status/${r._id}`,A,{headers:{"Content-Type":"multipart/form-data"}});const S=r.mobileNumber?.replace(/\D/g,"").slice(-10),z="Jan Samvaad",E="VVCMC",R="VVCMCJS",C="Vasai Virar City Municipal Corporation",B=r.fullName,G=r.microStart,U=r.microEnd,O=r.tokenId,$={pending:"Pending — Awaiting Mayor's Approval",approved:"Approved by Respected Mayor Ajiv Patil Sir",rejected:"Rejected by Respected Mayor Ajiv Patil Sir",cancelled:"Cancelled"}[p]||p;if(S){console.log("mobile>>>>",S,z,E,"Repected Mayor Ajiv Patil Sir",R,r.preferredDate,$u(r.preferredDate),r.microSlot,r.slotTime,r.tokenId);const ue=`Dear ${r.fullName}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been updated. Appointment Status: ${$} Date: ${$u(r.preferredDate)} Time Slot: ${G} - ${U} Token No: ${O} Please carry this Token No on your visit day. SAAVI INFINET`,ge=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379326&number=${S}&message=${encodeURIComponent(ue)}`;fetch(ge,{method:"GET",mode:"no-cors"}).catch(()=>{})}s(`Status updated to "${p}" & citizen notified!`,"success"),l(),o()}catch(A){s(A?.response?.data?.message||"Update failed","error")}finally{m(!1)}};return Iu(p),a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:o,children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,width:"100%",maxWidth:560,maxHeight:"92vh",overflowY:"auto",boxShadow:"0 8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 28px",borderBottom:"2px solid #d4edda",background:"#f0f7f2",borderRadius:"16px 16px 0 0"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:db(r.fullName),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:16},children:cb(r.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:"#5a7a6a",fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Application Details"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:18,fontWeight:700,color:"#1a4a2e"},children:r.tokenId||r._id?.slice(-8)})]})]}),a.jsx("button",{onClick:o,style:{background:"#e8f5ee",border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18,color:"#1a4a2e"},children:"✕"})]}),a.jsxs("div",{style:{padding:"22px 28px"},children:[r.visitorPhoto&&a.jsx("div",{style:{textAlign:"center",marginBottom:16},children:a.jsx("img",{src:r.visitorPhoto.startsWith("http")?r.visitorPhoto:`http://localhost:5000/${r.visitorPhoto}`,alt:"visitor",style:{width:80,height:80,borderRadius:"50%",objectFit:"cover",border:"3px solid #1a7a4a"}})}),a.jsx("div",{style:{border:"1.5px solid #d4edda",borderRadius:10,overflow:"hidden",marginBottom:16},children:[["Applicant",r.fullName],["Mobile",r.mobileNumber],["Email",r.email||"—"],["Ward",r.ward||"—"],["Address",r.address||"—"],["Preferred Date",BS(r.preferredDate)],["Time Slot",r.slotTime||"—"],["Visitors",r.numberOfVisitors],["Visited Before",r.visitedBefore?"Yes":"No"],["Purpose",r.purpose],["Submitted On",MS(r.createdAt)]].filter(([,A])=>A).map(([A,S])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 14px",borderBottom:"1px solid #eef4ee",fontSize:13},children:[a.jsx("span",{style:{color:"#5a7a6a",fontWeight:600,flexShrink:0,width:130},children:A}),a.jsx("span",{style:{color:"#1a4a2e",fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:S})]},A))}),r.qrCode&&a.jsxs("div",{style:{textAlign:"center",padding:"12px 0 8px",borderTop:"1px solid #eef4ee",marginBottom:12},children:[a.jsx("p",{style:{fontSize:11,color:"#5a7a6a",marginBottom:6,fontWeight:600},children:"QR Code"}),a.jsx("img",{src:r.qrCode,alt:"QR",style:{width:110,height:110}})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Update Status"}),a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["pending","approved","rejected"].map(A=>{const S=Iu(A),z=p===A;return a.jsxs("button",{onClick:()=>x(A),style:{padding:"6px 16px",borderRadius:20,border:`1.5px solid ${z?S.border:"#c8e0cc"}`,background:z?S.bg:"#f8fdf8",color:z?S.color:"#5a7a6a",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"},children:[a.jsx("span",{style:{display:"inline-block",width:7,height:7,borderRadius:"50%",background:z?S.dot:"#a8c8b0",marginRight:5,verticalAlign:"middle"}}),S.label]},A)})})]}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Reply / Note to Citizen"}),a.jsx("textarea",{value:u,onChange:A=>f(A.target.value),placeholder:"Write a note or reply that will be sent to the citizen as acknowledgement...",rows:4,style:{width:"100%",padding:"10px 14px",fontSize:13,border:"1.5px solid #c8e0cc",borderRadius:8,outline:"none",fontFamily:"'Segoe UI', sans-serif",resize:"vertical",boxSizing:"border-box",color:"#1a4a2e",background:"#f8fdf8",transition:"border-color .15s"},onFocus:A=>A.target.style.borderColor="#1a7a4a",onBlur:A=>A.target.style.borderColor="#c8e0cc"})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Attach Reply Document"}),a.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png,.webp",onChange:A=>v(A.target.files[0]),style:{border:"1.5px solid #c8e0cc",borderRadius:8,padding:"8px 12px",fontSize:13,color:"#1a4a2e",background:"#f8fdf8",width:"100%",boxSizing:"border-box"}})]}),a.jsx("div",{style:{background:"#e8f5ee",border:"1.5px solid #a8d5b5",borderRadius:8,padding:"10px 14px",marginBottom:16,fontSize:12,color:"#1a4a2e"},children:"ℹ️ Saving will update the citizen's application status and send an acknowledgement notification automatically."}),a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("button",{onClick:o,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e",fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:M,disabled:h,style:{flex:2,background:h?"#888":"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:h?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:h?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:13,height:13,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Saving..."]}):"✔ Save & Notify Citizen"})]})]})]})})}function US(){const[r,o]=b.useState([]),[l,s]=b.useState(!0),[u,f]=b.useState(""),[p,x]=b.useState("all"),[h,m]=b.useState(null),[y,v]=b.useState(null),[M,A]=b.useState([]),[S,z]=b.useState(!1),E=(O,$="success")=>{v({msg:O,type:$}),setTimeout(()=>v(null),3500)},R=async()=>{try{s(!0);const O=await zt.get("/citizen/admin/all-appointments");O.data.success&&o(O.data.appointments||[])}catch{}finally{s(!1)}};b.useEffect(()=>{R()},[]);const C={all:r.length,pending:r.filter(O=>O.status?.toLowerCase()==="pending").length,"in progress":r.filter(O=>O.status?.toLowerCase()==="in progress").length,approved:r.filter(O=>O.status?.toLowerCase()==="approved").length,rejected:r.filter(O=>O.status?.toLowerCase()==="rejected").length,resolved:r.filter(O=>O.status?.toLowerCase()==="resolved").length},B=r.filter(O=>{const $=p==="all"||O.status?.toLowerCase()===p,Q=u.toLowerCase(),ue=!Q||O.fullName?.toLowerCase().includes(Q)||O.tokenId?.toLowerCase().includes(Q)||O.purpose?.toLowerCase().includes(Q)||O.mobileNumber?.includes(Q)||O.ward?.toLowerCase().includes(Q);return $&&ue}),G=()=>{S?(A([]),z(!1)):(A(B.map((O,$)=>$)),z(!0))},U=O=>A($=>$.includes(O)?$.filter(Q=>Q!==O):[...$,O]);return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:"#f0f4f0",minHeight:"100vh",padding:"24px"},children:[y&&a.jsx("div",{style:{position:"fixed",top:20,right:20,zIndex:9999,background:y.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"12px 20px",borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:y.msg}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24},children:[a.jsxs("div",{children:[a.jsxs("h1",{style:{margin:0,fontSize:26,fontWeight:700,color:"#1a4a2e",display:"flex",alignItems:"center",gap:10},children:["Applications For Appointment",a.jsx("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"2px 10px",fontSize:13,fontWeight:700},children:r.length})]}),a.jsx("p",{style:{margin:"4px 0 0",color:"#5a7a6a",fontSize:14},children:"CitizenBridge — Inward Records · All citizen appointment requests"})]}),a.jsx("button",{onClick:R,style:{background:"#fff",color:"#1a7a4a",border:"2px solid #1a7a4a",borderRadius:8,padding:"10px 20px",fontWeight:600,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",gap:7},children:"↻ Refresh"})]}),a.jsxs("div",{style:{position:"relative",marginBottom:16},children:[a.jsx("span",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:15,color:"#5a7a6a"},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, token ID, mobile, purpose, ward...",value:u,onChange:O=>f(O.target.value),style:{width:"100%",padding:"10px 14px 10px 40px",fontSize:13,border:"1.5px solid #c8e0cc",borderRadius:8,outline:"none",fontFamily:"'Segoe UI', sans-serif",background:"#fff",color:"#1a4a2e",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap"},children:[[{key:"all",label:"All",count:C.all},{key:"pending",label:"Pending",count:C.pending},{key:"in progress",label:"In Progress",count:C["in progress"]},{key:"approved",label:"Approved",count:C.approved},{key:"resolved",label:"Resolved",count:C.resolved},{key:"rejected",label:"Rejected",count:C.rejected}].map(O=>a.jsxs("button",{onClick:()=>{x(O.key),A([]),z(!1)},style:{padding:"7px 18px",borderRadius:20,fontSize:13,fontWeight:600,cursor:"pointer",border:p===O.key?"none":"1.5px solid #c8e0cc",background:p===O.key?"#1a7a4a":"#fff",color:p===O.key?"#fff":"#5a7a6a",transition:"all .15s"},children:[O.label," ",O.count]},O.key)),p!=="all"&&a.jsx("button",{onClick:()=>x("all"),style:{marginLeft:"auto",fontSize:12,color:"#1a7a4a",background:"none",border:"none",cursor:"pointer",fontWeight:600},children:"CLEAR"})]}),a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:0,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflowX:"auto"},children:[a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px 12px",borderBottom:"2px solid #d4edda"},children:a.jsxs("h3",{style:{margin:0,fontSize:17,fontWeight:700,color:"#1a4a2e"},children:["Application Records",a.jsx("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"2px 10px",fontSize:13,marginLeft:8},children:r.length})]})}),l?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:1100},children:[a.jsx("thead",{children:a.jsxs("tr",{style:{background:"#f0f7f2"},children:[a.jsx("th",{style:wh,children:a.jsx("input",{type:"checkbox",checked:S,onChange:G,style:{width:15,height:15,cursor:"pointer",accentColor:"#1a7a4a"}})}),["Reply","#","Applicant","Token / Inward No","Purpose / Subject","Status","Date","Slot",""].map(O=>a.jsx("th",{style:wh,children:O},O))]})}),a.jsx("tbody",{children:B.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:10,style:{textAlign:"center",padding:48,color:"#888",fontSize:14},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📋"}),u?"No matching applications found.":"No applications yet."]})}):B.map((O,$)=>{const Q=Iu(O.status),ue=M.includes($),ge=db(O.fullName);return a.jsxs("tr",{style:{borderBottom:"1px solid #eef4ee",background:ue?"#f0f7f2":"transparent",cursor:"pointer"},onMouseOver:P=>{ue||(P.currentTarget.style.background="#f8fdf8")},onMouseOut:P=>{P.currentTarget.style.background=ue?"#f0f7f2":"transparent"},onClick:()=>m(O),children:[a.jsx("td",{style:za,onClick:P=>P.stopPropagation(),children:a.jsx("input",{type:"checkbox",checked:ue,onChange:()=>U($),style:{width:15,height:15,cursor:"pointer",accentColor:"#1a7a4a"}})}),a.jsx("td",{style:za,onClick:P=>P.stopPropagation(),children:a.jsx("button",{onClick:()=>m(O),style:{background:"#e8f5ee",border:"1.5px solid #1a7a4a",borderRadius:7,padding:"5px 12px",cursor:"pointer",color:"#1a7a4a",fontSize:12,fontWeight:700},children:"Reply"})}),a.jsx("td",{style:{...za,color:"#888",fontSize:13},children:$+1}),a.jsx("td",{style:za,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:ge,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:13,flexShrink:0},children:cb(O.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:13,fontWeight:700,color:"#1a4a2e"},children:O.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:11,color:"#5a7a6a"},children:O.mobileNumber||"—"})]})]})}),a.jsx("td",{style:za,children:a.jsx("span",{style:{background:"#e8f5ee",color:"#1a7a4a",borderRadius:6,padding:"3px 10px",fontSize:12,fontWeight:600},children:O.tokenId||O._id?.slice(-10)||"—"})}),a.jsx("td",{style:{...za,maxWidth:240},children:a.jsx("span",{style:{fontSize:13,color:"#1a4a2e",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block"},title:O.purpose,children:O.purpose?.length>50?O.purpose.slice(0,50)+"…":O.purpose||"—"})}),a.jsx("td",{style:za,children:a.jsxs("span",{style:{background:Q.bg,color:Q.color,border:`1px solid ${Q.border}`,borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,display:"inline-flex",alignItems:"center",gap:5,whiteSpace:"nowrap"},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:Q.dot,display:"inline-block"}}),Q.label]})}),a.jsx("td",{style:{...za,fontSize:12,color:"#5a7a6a"},children:$u(O.preferredDate)}),a.jsx("td",{style:za,children:a.jsx("span",{style:{fontSize:12,color:"#1a7a4a",background:"#e8f5ee",padding:"3px 10px",borderRadius:20,fontWeight:600,whiteSpace:"nowrap"},children:O.slotTime||"—"})}),a.jsx("td",{style:{...za,fontSize:12,color:"#5a7a6a"},children:O.ward||"—"})]},O._id||$)})})]}),!l&&B.length>0&&a.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #eef4ee",fontSize:12,color:"#5a7a6a",display:"flex",justifyContent:"space-between"},children:[a.jsxs("span",{children:["Showing ",a.jsx("strong",{style:{color:"#1a4a2e"},children:B.length})," of ",a.jsx("strong",{style:{color:"#1a4a2e"},children:r.length})," applications",M.length>0&&a.jsxs("span",{style:{color:"#1a7a4a",fontWeight:700},children:[" · ",M.length," selected"]})]}),a.jsx("span",{children:"💡 Click any row to view full details & reply"})]})]}),h&&a.jsx(LS,{appt:h,onClose:()=>m(null),onRefresh:R,showToast:E}),a.jsx("style",{children:"@keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } } @keyframes spin { to { transform: rotate(360deg); } }"})]})}const wh={padding:"12px 14px",textAlign:"left",fontSize:13,fontWeight:700,color:"#1a4a2e",borderBottom:"2px solid #d4edda",whiteSpace:"nowrap"},za={padding:"12px 14px",fontSize:14,color:"#1a4a2e"},Sh=["Super Admin","Guardian Minister","Mayor","Admin"],kh=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}};function WS(r,o,l,s){if(!r||!o||!l)return!1;const u=new Date,[f,p,x]=r.split("-").map(Number);let h=parseInt(o,10);s==="PM"&&h!==12&&(h+=12),s==="AM"&&h===12&&(h=0);const m=new Date(f,p-1,x,h,parseInt(l,10),0);return u>=m}function HS({onDecisionExtracted:r,onTranscriptUpdate:o,onRecordingReady:l}){const[s,u]=b.useState(!1),[f,p]=b.useState(!1),[x,h]=b.useState(!1),[m,y]=b.useState(""),[v,M]=b.useState(!1),[A,S]=b.useState(null),[z,E]=b.useState(null),R=b.useRef(null),C=b.useRef(null),B=b.useRef(null),G=b.useRef([]),U=b.useRef(null),O=b.useRef(null),$=b.useRef(!1),Q=-42,ue=2e3,ge=me=>{const we=new(window.AudioContext||window.webkitAudioContext),F=we.createAnalyser();F.fftSize=512,we.createMediaStreamSource(me).connect(F),R.current=we;const ie=new Uint8Array(F.frequencyBinCount),pe=()=>{U.current=requestAnimationFrame(pe),F.getByteFrequencyData(ie);const K=ie.reduce((T,N)=>T+N,0)/ie.length,j=(K===0?-1/0:20*Math.log10(K/255))>Q;j!==$.current&&($.current=j,p(j),j?(clearTimeout(O.current),y("🗣️ Speaking...")):(y("🤫 Silence..."),O.current=setTimeout(()=>{$.current||y("👂 Waiting...")},ue)))};pe()},P=async()=>{E(null);try{const me=await navigator.mediaDevices.getUserMedia({audio:!0});if(C.current=me,ge(me),x){G.current=[],M(!1),S(null);const we=new MediaRecorder(me);we.ondataavailable=F=>{F.data.size>0&&G.current.push(F.data)},we.onstop=()=>{const F=new Blob(G.current,{type:"audio/webm"}),ie=URL.createObjectURL(F);S(ie),M(!0),l?.(ie)},we.start(),B.current=we}u(!0),y("👂 Waiting for someone to speak...")}catch(me){const we=me?.name==="NotAllowedError"||me?.name==="PermissionDeniedError",F=me?.name==="NotFoundError";E(F?"notfound":we?"denied":"other"),y("")}},le=()=>{cancelAnimationFrame(U.current),clearTimeout(O.current),R.current?.close(),C.current?.getTracks().forEach(me=>me.stop()),B.current?.state==="recording"&&B.current.stop(),$.current=!1,p(!1),u(!1),y("⏹️ Session ended.")},H=()=>{le(),S(null),M(!1),y("")};return a.jsxs("div",{className:"mr-wrap",children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14,marginBottom:12},children:[a.jsx("div",{className:`mr-vad-ring ${f?"speaking":""}`,children:f?"🗣️":s?"👂":"🎙️"}),a.jsxs("div",{style:{flex:1},children:[a.jsxs("label",{className:"mr-toggle",children:[a.jsx("input",{type:"checkbox",checked:x,onChange:me=>h(me.target.checked),disabled:s,style:{display:"none"}}),a.jsx("div",{className:`mr-toggle-track ${x?"on":""}`,children:a.jsx("div",{className:"mr-toggle-thumb"})}),a.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#3a6b50"},children:x?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"mr-rec-dot"}),"Audio Recording ON"]}):"Audio Recording (optional)"})]}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[s?a.jsx("button",{className:"mr-btn mr-btn-grey",onClick:le,children:"⏹ Stop Session"}):a.jsx("button",{className:"mr-btn mr-btn-green",onClick:P,children:"▶ Start Session"}),a.jsx("button",{className:"mr-btn mr-btn-red",onClick:H,disabled:s,children:"🔄 Reset"})]})]})]}),z&&a.jsxs("div",{style:{background:z==="notfound"?"#fff8e1":"#fdecea",border:`1.5px solid ${z==="notfound"?"#ffe082":"#f5c6c2"}`,borderRadius:10,padding:"12px 14px",marginBottom:12,fontSize:13,fontWeight:500,color:"#3a2a2a"},children:[z==="denied"&&a.jsx("div",{style:{fontWeight:800,color:"#c0392b"},children:"🚫 Microphone Permission Denied"}),z==="notfound"&&a.jsx("div",{style:{fontWeight:800,color:"#b07a00"},children:"🎤 Microphone Not Found"}),z==="other"&&a.jsx("div",{style:{fontWeight:800,color:"#c0392b"},children:"❌ Microphone Could Not Start — Refresh page"})]}),a.jsx("div",{style:{fontSize:12,fontWeight:600,color:"#7a9a88",minHeight:16,marginBottom:10},children:m}),v&&A&&a.jsxs("div",{style:{marginTop:10,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#1a4a2e"},children:"🔴 Recording ready:"}),a.jsx("a",{href:A,download:"meeting-recording.webm",className:"mr-btn mr-btn-teal",style:{textDecoration:"none"},children:"⬇ Download"}),a.jsx("audio",{controls:!0,src:A,style:{height:32,flex:1,minWidth:120}})]})]})}function $S(){const r=mt(),[o,l]=b.useState([]),[s,u]=b.useState(""),[f,p]=b.useState(!1),[x,h]=b.useState(null),[m,y]=b.useState(!1),[v,M]=b.useState(null),[A,S]=b.useState(null),[z,E]=b.useState(window.innerWidth<640),[R,C]=b.useState(!1),B=b.useRef(null),[G,U]=b.useState(null),[O,$]=b.useState(null),Q=b.useRef(""),[ue,ge]=b.useState([]),[P,le]=b.useState([]),[H,me]=b.useState(null),F=kh()?.role||"",ie=Sh.includes(F);b.useEffect(()=>{const q=()=>E(window.innerWidth<640);return window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)},[]);const pe=q=>{const X=new Date,ce=X.getFullYear(),xe=X.toLocaleString("en-US",{month:"short"}).toUpperCase(),ye=String(X.getDate()).padStart(2,"0"),nt=String((q?.length??0)+1).padStart(4,"0");return`MTG-${ce}-${xe}-${ye}-${nt}`},K={meetingNumber:"",meetingType:"",meetingDate:"",meetingHour:"",meetingMinute:"",meetingAmpm:"AM"},[L,j]=b.useState(K),T=WS(L.meetingDate,L.meetingHour,L.meetingMinute,L.meetingAmpm),N=(q,X="success")=>{h({msg:q,type:X}),setTimeout(()=>h(null),3e3)},Y=q=>{if(!q)return"-";const[X,ce]=q.split(":");let xe=parseInt(X,10);const ye=xe>=12?"PM":"AM";return xe=xe%12||12,`${xe}:${ce} ${ye}`},D=async(q="")=>{try{y(!0);const X=q?{search:q}:{},xe=(await Ie.get("/getMeetings",{params:X})).data;if(xe.success){const ye=kh(),nt=ye?.role||"",bt=ye?.departmentName||"",Ke=Sh.includes(nt),ja=xe.data||[];if(Ke)l(ja);else{const wa=ja.filter(Rt=>Array.isArray(Rt.subjects)&&Rt.subjects.some(Dt=>Array.isArray(Dt.tagTo)&&Dt.tagTo.includes(bt)));l(wa)}}else N(xe.message||"Failed to fetch","error")}catch{N("Server error.","error")}finally{y(!1)}};b.useEffect(()=>{D()},[]),b.useEffect(()=>{const q=setTimeout(()=>D(s),400);return()=>clearTimeout(q)},[s]);const se=q=>j({...L,[q.target.name]:q.target.value}),fe=async()=>{M(null),C(!1),B.current=null,U(null),$(null),Q.current="",ge([]),le([]),p(!0);try{const X=(await Ie.get("/getNextMeetingId")).data;j({...K,meetingNumber:X.success?X.meetingId:pe(o)})}catch{j({...K,meetingNumber:pe(o)})}},be=q=>{M(q._id),j({meetingNumber:q.meetingNumber,meetingType:q.meetingType,meetingDate:q.meetingDate?q.meetingDate.slice(0,10):"",meetingHour:q.meetingTime?(()=>{const X=parseInt(q.meetingTime.split(":")[0],10);return String(X%12||12).padStart(2,"0")})():"",meetingMinute:q.meetingTime?q.meetingTime.split(":")[1]:"",meetingAmpm:q.meetingTime&&parseInt(q.meetingTime.split(":")[0],10)>=12?"PM":"AM"}),C(!1),Q.current=q.aiExtractedDecision||"",B.current=q.meetingRecording||null,U(q.meetingRecording||null),$(null),ge([]),le(q.agendaFiles||[]),p(!0)},Ne=()=>{if(!L.meetingHour||!L.meetingMinute)return"";let q=parseInt(L.meetingHour,10);return L.meetingAmpm==="PM"&&q!==12&&(q+=12),L.meetingAmpm==="AM"&&q===12&&(q=0),`${String(q).padStart(2,"0")}:${L.meetingMinute}`},Qe=async()=>{try{y(!0);const q=new FormData;q.append("meetingNumber",L.meetingNumber),q.append("meetingType",L.meetingType),L.meetingDate&&q.append("meetingDate",L.meetingDate),Ne()&&q.append("meetingTime",Ne()),ue.forEach(xe=>q.append("agendaFiles",xe));const ce=(await Ie.post("/createMeeting",q)).data;ce.success?(p(!1),N("Meeting created!"),D(s)):N(ce.message||"Failed","error")}catch{N("Server error.","error")}finally{y(!1)}},at=async()=>{try{y(!0);const q=new FormData;q.append("meetingNumber",L.meetingNumber),q.append("meetingType",L.meetingType),L.meetingDate&&q.append("meetingDate",L.meetingDate),Ne()&&q.append("meetingTime",Ne());const X=Q.current?.trim();X&&q.append("aiExtractedDecision",X),q.append("existingAgendaFiles",JSON.stringify(P)),ue.forEach(nt=>q.append("agendaFiles",nt)),O&&q.append("meetingRecording",O);const ce=B.current;if(ce&&ce.startsWith("blob:"))try{const bt=await(await fetch(ce)).blob();q.append("meetingRecordingBlob",new File([bt],"auto-recording.webm",{type:"audio/webm"}))}catch{}else ce&&!O&&q.append("existingRecordingUrl",ce);const ye=(await Ie.put(`/updateMeeting/${v}`,q)).data;ye.success?(p(!1),M(null),N("Meeting updated!"),D(s)):N(ye.message||"Failed","error")}catch{N("Server error.","error")}finally{y(!1)}},aa=()=>{if(!L.meetingNumber||!L.meetingType){N("Please fill required fields","error");return}v?at():Qe()},Yt=async q=>{try{y(!0);const ce=(await Ie.delete(`/deleteMeeting/${q}`)).data;ce.success?(S(null),N("Meeting deleted!"),D(s)):N(ce.message||"Failed","error")}catch{N("Server error.","error")}finally{y(!1)}},re=q=>{r(`/proceedingsmeeting/${q._id}`,{state:{meetingNumber:q.meetingNumber,meetingType:q.meetingType,meetingDate:q.meetingDate||null,meetingTime:q.meetingTime||null}})},ve=q=>{const X=q.match(/\.pdf$/i),ce=q.match(/\.(doc|docx)$/i),xe=q.match(/\.(xls|xlsx)$/i),ye=q.match(/\.(png|jpg|jpeg|gif|webp)$/i);return{type:X?"pdf":ce?"doc":xe?"xl":ye?"img":"other",icon:X?"📄":ce?"📝":xe?"📊":ye?"🖼️":"📁",label:X?"PDF":ce?"DOC":xe?"Excel":ye?"Image":"File"}},he=async q=>{const{type:X}=ve(q),ce=q.split("/").pop()?.split("?")[0]||"Document";if(X==="img"){me({url:q,name:ce,type:X});return}try{const ye=(await Ie.post("/getSignedFileUrl",{fileUrl:q})).data;ye.success?me({url:ye.url,name:ce,type:X}):me({url:q,name:ce,type:X})}catch{me({url:q,name:ce,type:X})}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');
        .pm-wrap * { font-family: 'Nunito Sans', sans-serif; box-sizing: border-box; }
        .pm-table tbody tr:hover { background: #f4faf6; }
        .meeting-no-link { display: inline-block; background: #e6f4ec; color: #1a6640; font-weight: 700; font-size: 12.5px; padding: 3px 10px; border-radius: 6px; letter-spacing: 0.3px; cursor: pointer; text-decoration: underline; text-underline-offset: 2px; transition: background 0.15s, color 0.15s; }
        .meeting-no-link:hover { background: #1a7a4a; color: #fff; }
        .time-badge { display: inline-block; background: #e6f4ec; color: #1a6640; font-size: 12.5px; font-weight: 700; padding: 3px 10px; border-radius: 6px; }
        .pm-table th { font-size: 13px; font-weight: 700; color: #3a6b50; padding: 11px 14px; text-align: left; background: #f0f7f2; border-bottom: 2px solid #d6ede0; white-space: nowrap; }
        .pm-table td { font-size: 13.5px; font-weight: 500; color: #2d3d35; padding: 11px 14px; border-bottom: 1px solid #eef4ee; vertical-align: middle; }
        .pm-table td:first-child { color: #8aaa95; font-weight: 600; font-size: 13px; }
        .pm-search { font-family: 'Nunito Sans', sans-serif; font-size: 13.5px; font-weight: 500; color: #2d3d35; border: 1.5px solid #c8e0cc; border-radius: 8px; padding: 8px 13px; outline: none; transition: border-color 0.2s; }
        .pm-search:focus { border-color: #1a7a4a; }
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
        .pm-btn-edit { font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600; background: #e8f4fd; color: #1a6aaa; border: none; border-radius: 6px; padding: 5px 11px; cursor: pointer; }
        .pm-btn-edit:hover { background: #d0e8f8; }
        .pm-btn-delete { font-family: 'Nunito Sans', sans-serif; font-size: 12.5px; font-weight: 600; background: #fdecea; color: #c0392b; border: none; border-radius: 6px; padding: 5px 11px; cursor: pointer; }
        .pm-btn-delete:hover { background: #fad4d0; }
        .pm-card { border: 1px solid #e0ede5; border-radius: 10px; padding: 13px; background: #f9fdf9; margin-bottom: 10px; cursor: pointer; transition: box-shadow 0.15s, border-color 0.15s; }
        .pm-card:hover { box-shadow: 0 2px 12px rgba(26,122,74,0.10); border-color: #b5d8c0; }
        .pm-card-row { display: flex; justify-content: space-between; font-size: 13px; font-weight: 500; padding: 4px 0; border-bottom: 1px solid #eef4ee; color: #2d3d35; }
        .pm-card-label { color: #5a7a6a; font-weight: 700; min-width: 110px; font-size: 12.5px; }
        .pm-title { font-size: 22px; font-weight: 800; color: #1a4a2e; margin: 0 0 3px 0; letter-spacing: -0.3px; }
        .pm-subtitle { font-size: 13px; font-weight: 500; color: #7a9a88; margin: 0 0 14px 0; }
        .pm-section-title { font-size: 15px; font-weight: 800; color: #1a4a2e; margin: 0; }
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


     
      `}),a.jsxs("div",{className:"pm-wrap",style:{background:"#f0f4f0",minHeight:"100vh",padding:z?12:24},children:[x&&a.jsx("div",{style:{position:"fixed",top:16,right:16,left:z?16:"auto",background:x.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"10px 18px",borderRadius:8,fontWeight:700,fontSize:13.5,zIndex:9999,fontFamily:"'Nunito Sans', sans-serif"},children:x.msg}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("h1",{className:"pm-title",children:"Meeting Proceedings"}),ie&&a.jsx("p",{className:"pm-subtitle",children:"Sabha Kamkaj manage करा"}),ie&&a.jsx("button",{className:"pm-btn-primary",onClick:fe,children:"+ Create Meeting"})]}),a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?12:20,overflowX:"auto"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:z?"column":"row",justifyContent:"space-between",alignItems:z?"flex-start":"center",gap:10,marginBottom:15},children:[a.jsxs("h3",{className:"pm-section-title",children:["Records (",o.length,")"]}),a.jsx("input",{className:"pm-search",placeholder:"Search meeting no...",value:s,onChange:q=>u(q.target.value),style:{width:z?"100%":"auto"}})]}),z?a.jsx("div",{children:m?a.jsx("div",{style:{textAlign:"center",padding:20,color:"#8a9a90"},children:"Loading..."}):o.length===0?a.jsx("div",{style:{textAlign:"center",padding:20,color:"#8a9a90"},children:"No records found"}):o.map((q,X)=>a.jsxs("div",{className:"pm-card",onClick:()=>re(q),children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[a.jsxs("span",{style:{fontWeight:800,color:"#1a4a2e",fontSize:14},children:["#",X+1," —"," ",a.jsx("span",{style:{background:"#e6f4ec",color:"#1a6640",fontWeight:700,fontSize:12.5,padding:"3px 10px",borderRadius:6},children:q.meetingNumber}),a.jsx("span",{className:"pm-click-hint",children:"tap → subjects"})]}),a.jsxs("div",{style:{display:"flex",gap:6},onClick:ce=>ce.stopPropagation(),children:[Array.isArray(q.agendaFiles)&&q.agendaFiles.length>0&&a.jsx("div",{style:{display:"flex",gap:4},children:q.agendaFiles.map((ce,xe)=>{const{icon:ye}=ve(ce);return a.jsx("button",{className:"pm-file-btn",title:`View File ${xe+1}`,onClick:()=>he(ce),children:ye},xe)})}),ie&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"pm-btn-edit",onClick:()=>be(q),children:"✏️"}),a.jsx("button",{className:"pm-btn-delete",onClick:()=>S(q._id),children:"🗑️"})]})]})]}),a.jsxs("div",{className:"pm-card-row",children:[a.jsx("span",{className:"pm-card-label",children:"Type"}),a.jsx("span",{children:q.meetingType||"-"})]}),a.jsxs("div",{className:"pm-card-row",children:[a.jsx("span",{className:"pm-card-label",children:"Date"}),a.jsx("span",{children:q.meetingDate?new Date(q.meetingDate).toLocaleDateString("en-IN"):"-"})]}),a.jsxs("div",{className:"pm-card-row",children:[a.jsx("span",{className:"pm-card-label",children:"Time"}),a.jsx("span",{className:"time-badge",children:Y(q.meetingTime)})]})]},q._id))}):a.jsxs("table",{className:"pm-table",style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[["#","Meeting No","Type","Date","Time"].map(q=>a.jsx("th",{children:q},q)),ie&&a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:m?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:24,color:"#8a9a90"},children:"Loading..."})}):o.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:24,color:"#8a9a90"},children:"No records found"})}):o.map((q,X)=>a.jsxs("tr",{children:[a.jsx("td",{children:X+1}),a.jsx("td",{children:a.jsx("span",{className:"meeting-no-link",onClick:()=>re(q),title:"Click to view/add subjects",children:q.meetingNumber})}),a.jsx("td",{children:q.meetingType}),a.jsx("td",{children:q.meetingDate?new Date(q.meetingDate).toLocaleDateString("en-IN"):"-"}),a.jsx("td",{children:a.jsx("span",{className:"time-badge",children:Y(q.meetingTime)})}),ie&&a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[Array.isArray(q.agendaFiles)&&q.agendaFiles.length>0&&a.jsx("div",{style:{display:"flex",gap:4},children:q.agendaFiles.map((ce,xe)=>{const{icon:ye}=ve(ce);return a.jsx("button",{className:"pm-file-btn",title:`View File ${xe+1}`,onClick:()=>he(ce),children:ye},xe)})}),a.jsx("button",{className:"pm-btn-edit",onClick:()=>be(q),children:"✏️ Edit"}),a.jsx("button",{className:"pm-btn-delete",onClick:()=>S(q._id),children:"🗑️ Delete"})]})})]},q._id))})]})]}),f&&a.jsx("div",{style:Nh,children:a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?16:25,width:z?"95%":"60%",maxWidth:680,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{className:"pm-modal-title",children:v?"Edit Meeting":"Create Meeting"}),a.jsx("button",{onClick:()=>p(!1),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:z?"1fr":"1fr 1fr",gap:14},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsxs("label",{className:"pm-label",children:["Meeting Number ",a.jsx("span",{className:"pm-auto-badge",children:"Auto Generated"})]}),a.jsx("input",{className:"pm-input-readonly",value:L.meetingNumber,readOnly:!0})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Type Of Meeting"}),a.jsxs("select",{className:"pm-input",name:"meetingType",value:L.meetingType,onChange:se,children:[a.jsx("option",{value:"",children:"Select Type"}),a.jsx("option",{children:"General Body"}),a.jsx("option",{children:"Standing Committee"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Meeting Date"}),a.jsx("input",{className:"pm-input",name:"meetingDate",type:"date",value:L.meetingDate,onChange:se})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Meeting Time"}),a.jsxs("div",{style:{display:"flex",gap:6},children:[a.jsxs("select",{className:"pm-input",name:"meetingHour",value:L.meetingHour,onChange:se,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"",children:"HH"}),Array.from({length:12},(q,X)=>String(X+1).padStart(2,"0")).map(q=>a.jsx("option",{value:q,children:q},q))]}),a.jsxs("select",{className:"pm-input",name:"meetingMinute",value:L.meetingMinute,onChange:se,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"",children:"MM"}),["00","05","10","15","20","25","30","35","40","45","50","55"].map(q=>a.jsx("option",{value:q,children:q},q))]}),a.jsxs("select",{className:"pm-input",name:"meetingAmpm",value:L.meetingAmpm,onChange:se,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"AM",children:"AM"}),a.jsx("option",{value:"PM",children:"PM"})]})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsxs("label",{className:"pm-label",children:["Agenda",a.jsx("span",{style:{fontSize:11,color:"#8a9a90",fontWeight:500,marginLeft:6},children:"(PDF, Word, Excel, PNG, JPG — max 12, optional)"})]}),a.jsxs("div",{style:{border:"1.5px dashed #c8e0cc",borderRadius:8,padding:"10px 14px",background:"#f7fbf8"},children:[P.length>0&&a.jsxs("div",{style:{marginBottom:8},children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",marginBottom:4},children:"Existing Files:"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:P.map((q,X)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,background:"#e6f4ec",borderRadius:6,padding:"3px 8px"},children:[a.jsxs("button",{onClick:()=>he(q),style:{background:"none",border:"none",cursor:"pointer",fontSize:12,fontWeight:600,color:"#1a6640",padding:0,display:"flex",alignItems:"center",gap:4},children:[ve(q).icon," File ",X+1]}),a.jsx("button",{onClick:()=>le(ce=>ce.filter((xe,ye)=>ye!==X)),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:4,padding:"1px 5px",cursor:"pointer",fontSize:11,fontWeight:700},children:"✕"})]},X))})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsxs("label",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:13,fontWeight:700,background:"#e6f4ec",color:"#1a6640",border:"1.5px solid #c8e0cc",borderRadius:7,padding:"6px 14px",cursor:"pointer"},children:["📁 Choose Files",a.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,image/png,image/jpeg",style:{display:"none"},onChange:q=>{const X=Array.from(q.target.files);if(P.length+ue.length+X.length>12){N("Maximum 12 files allowed!","error");return}ge(xe=>[...xe,...X]),q.target.value=""}})]}),a.jsxs("span",{style:{fontSize:12,color:"#8a9a90"},children:[P.length+ue.length,"/12 files"]})]}),ue.length>0&&a.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6},children:ue.map((q,X)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,background:"#fff8e1",border:"1px solid #ffe082",borderRadius:6,padding:"3px 8px"},children:[a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#7a5a00"},children:["📄 ",q.name]}),a.jsx("button",{onClick:()=>ge(ce=>ce.filter((xe,ye)=>ye!==X)),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:4,padding:"1px 5px",cursor:"pointer",fontSize:11,fontWeight:700},children:"✕"})]},X))})]})]}),v&&(T?a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{gridColumn:z?"1":"span 2"},children:[a.jsxs("button",{className:`pm-recorder-toggle ${R?"active":""}`,onClick:()=>C(q=>!q),type:"button",children:["🎙️ ",R?"Hide Recorder":"Record Meeting"]}),R&&a.jsx("div",{className:"pm-recorder-section",children:a.jsx(HS,{onRecordingReady:q=>{B.current=q,U(q),N("Recording saved! 🔴")},onDecisionExtracted:q=>{Q.current=q?.trim()||""},onTranscriptUpdate:()=>{}})})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"pm-label",children:"Upload Meeting Recording (optional)"}),a.jsxs("div",{style:{border:"1.5px dashed #c8e0cc",borderRadius:8,padding:"10px 14px",background:"#f7fbf8",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[a.jsxs("label",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:13,fontWeight:700,background:"#e6f4ec",color:"#1a6640",border:"1.5px solid #c8e0cc",borderRadius:7,padding:"6px 14px",cursor:"pointer"},children:["📁 Choose File",a.jsx("input",{type:"file",accept:"audio/*,video/webm",style:{display:"none"},onChange:q=>{const X=q.target.files[0];X&&$(X)}})]}),O?a.jsxs("span",{style:{fontSize:12.5,fontWeight:600,color:"#1a4a2e"},children:["🎵 ",O.name," ",a.jsx("button",{onClick:()=>$(null),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:5,padding:"2px 6px",cursor:"pointer",fontSize:11,fontWeight:700,marginLeft:6},children:"✕"})]}):G?a.jsx("span",{style:{fontSize:12.5,fontWeight:600,color:"#1a4a2e"},children:"🔴 Auto-recording saved"}):a.jsx("span",{style:{fontSize:12.5,color:"#9ab5a0"},children:"No file chosen"})]})]})]}):a.jsx("div",{style:{gridColumn:z?"1":"span 2"},children:a.jsxs("div",{className:"pm-recording-locked",children:["🔒 Record Meeting — available at scheduled meeting time",L.meetingDate&&L.meetingHour&&a.jsxs("span",{style:{color:"#b07a00",marginLeft:4},children:["(",L.meetingDate," ",L.meetingHour,":",L.meetingMinute||"00"," ",L.meetingAmpm,")"]})]})}))]}),!v&&a.jsx("div",{style:{marginTop:14,background:"#f0f9f3",border:"1px solid #c8e0cc",borderRadius:8,padding:"10px 14px",fontSize:12.5,color:"#3a6b50",fontWeight:600},children:"💡 Meeting save केल्यावर Meeting Number वर click करून Subjects add करा"}),a.jsxs("div",{style:{display:"flex",gap:10,marginTop:22},children:[a.jsx("button",{className:"pm-btn-cancel",onClick:()=>p(!1),children:"Cancel"}),a.jsx("button",{className:"pm-btn-primary",onClick:aa,disabled:m,children:m?"Saving...":v?"Update":"Save"})]})]})}),A&&a.jsx("div",{style:Nh,children:a.jsxs("div",{style:{background:"#fff",padding:28,borderRadius:12,maxWidth:380,width:z?"90%":"100%",textAlign:"center"},children:[a.jsx("p",{className:"pm-delete-title",children:"Delete Meeting?"}),a.jsx("p",{className:"pm-delete-sub",children:"He record permanently delete होईल. Sure aahes ka?"}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[a.jsx("button",{className:"pm-btn-cancel",onClick:()=>S(null),children:"Cancel"}),a.jsx("button",{className:"pm-btn-primary",style:{background:"#c0392b"},onClick:()=>Yt(A),disabled:m,children:m?"Deleting...":"Yes, Delete"})]})]})}),H&&a.jsx("div",{className:"vm-overlay",onClick:()=>me(null),children:a.jsxs("div",{className:"vm-box",style:{width:z?"99%":"86%",maxWidth:1020,height:z?"97vh":"90vh"},onClick:q=>q.stopPropagation(),children:[a.jsxs("div",{className:"vm-header",children:[a.jsxs("div",{className:"vm-title",children:[a.jsx("div",{className:"vm-icon-wrap",children:H.type==="pdf"?"📄":H.type==="doc"?"📝":H.type==="xl"?"📊":H.type==="img"?"🖼️":"📁"}),a.jsxs("div",{children:[a.jsx("div",{className:"vm-name",style:{maxWidth:z?160:440},children:H.name}),a.jsx("div",{className:"vm-sub",children:H.type==="pdf"?"PDF Document":H.type==="doc"?"Word Document":H.type==="xl"?"Excel / Spreadsheet":H.type==="img"?"Image File":"Document"})]})]}),a.jsxs("div",{className:"vm-actions",children:[a.jsx("a",{href:H.url,download:H.name,target:"_blank",rel:"noreferrer",className:"vm-dl-btn",children:"⬇ Download"}),a.jsx("button",{className:"vm-close-btn",onClick:()=>me(null),children:"✕"})]})]}),a.jsxs("div",{className:"vm-body",children:[H.type==="img"&&a.jsx("div",{className:"vm-img-wrap",children:a.jsx("img",{src:H.url,alt:H.name})}),H.type==="pdf"&&a.jsx("iframe",{className:"vm-iframe",src:`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(H.url)}`,title:H.name,allow:"fullscreen"},H.url),H.type==="doc"&&a.jsx("iframe",{className:"vm-iframe",src:`https://docs.google.com/viewer?url=${encodeURIComponent(H.url)}&embedded=true`,title:H.name,allow:"fullscreen"},H.url),H.type==="xl"&&a.jsx("iframe",{className:"vm-iframe",src:`https://docs.google.com/viewer?url=${encodeURIComponent(H.url)}&embedded=true`,title:H.name,allow:"fullscreen"},H.url),H.type==="other"&&a.jsxs("div",{className:"vm-empty",children:[a.jsx("span",{children:"📁"}),a.jsx("p",{children:"Preview उपलब्ध नाही"}),a.jsx("small",{children:"खाली download करा"}),a.jsx("a",{href:H.url,download:H.name,target:"_blank",rel:"noreferrer",className:"vm-dl-btn",style:{marginTop:8},children:"⬇ Download करा"})]})]})]})})]})]})}const Nh={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:16},Ch=["Super Admin","Guardian Minister","Mayor","Admin"],Th=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}},Vi=(r,o)=>r?`${r}-SUB-${String(o+1).padStart(2,"0")}`:`SUB-${String(o+1).padStart(2,"0")}`,zh=({val:r})=>{const l={Approved:{bg:"#e6f4ec",color:"#1a6640"},Rejected:{bg:"#fdecea",color:"#c0392b"},"On-Hold":{bg:"#fff8e1",color:"#b07a00"},"Not Conducted":{bg:"#f3f3f3",color:"#6a6a6a"},Postponed:{bg:"#eee8ff",color:"#6a3ab0"}}[r]||{bg:"#f3f3f3",color:"#aaa"};return a.jsx("span",{style:{display:"inline-block",fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:l.bg,color:l.color,whiteSpace:"nowrap"},children:r||"-"})};function hu(){const{meetingId:r}=w2(),o=Aa(),l=mt(),[s,u]=b.useState(o.state?{meetingNumber:o.state.meetingNumber||null,meetingType:o.state.meetingType||null,meetingDate:o.state.meetingDate||null,meetingTime:o.state.meetingTime||null}:null),[f,p]=b.useState(r||null),[x,h]=b.useState(""),[m,y]=b.useState([]),[v,M]=b.useState(!1),[A,S]=b.useState(null),[z,E]=b.useState(window.innerWidth<640),[R,C]=b.useState([]),[B,G]=b.useState(!1),[U,O]=b.useState(null),$={subjectName:"",subjectType:"",decisionInMeeting:"",tagTo:[]},[Q,ue]=b.useState($),[ge,P]=b.useState(null),[le,H]=b.useState(null),[me,we]=b.useState(""),[F,ie]=b.useState(!1),pe=Th(),K=pe?.role||"",L=Ch.includes(K);b.useEffect(()=>{const re=()=>E(window.innerWidth<640);return window.addEventListener("resize",re),()=>window.removeEventListener("resize",re)},[]),b.useEffect(()=>{(async()=>{try{const ve=await Ie.get("/getUsers");if(ve.data.success){const he=[...new Set(ve.data.users.map(q=>q.departmentName).filter(Boolean))];C(he)}}catch{}})()},[]);const j=async re=>{if(re)try{M(!0);const he=(await Ie.get("/getMeetings")).data;if(he.success){const q=Th(),X=q?.role||"",ce=q?.departmentName||"",xe=Ch.includes(X),ye=he.data.find(nt=>nt._id===re);if(ye){u({meetingNumber:ye.meetingNumber||null,meetingType:ye.meetingType||null,meetingDate:ye.meetingDate||null,meetingTime:ye.meetingTime||null});const nt=Array.isArray(ye.subjects)?ye.subjects:[];if(xe)y(nt);else{const bt=nt.filter(Ke=>Array.isArray(Ke.tagTo)&&Ke.tagTo.includes(ce));y(bt)}}}}catch{T("Failed to load subjects","error")}finally{M(!1)}};b.useEffect(()=>{f&&j(f)},[f]);const T=(re,ve="success")=>{S({msg:re,type:ve}),setTimeout(()=>S(null),3e3)},N=re=>re?new Date(re).toLocaleDateString("en-IN"):"-",Y=re=>{if(!re)return"-";const[ve,he]=re.split(":");let q=parseInt(ve,10);const X=q>=12?"PM":"AM";return q=q%12||12,`${q}:${he} ${X}`},D=m.filter(re=>!x||(re.subjectId||"").toLowerCase().includes(x.toLowerCase())),se=()=>{O(null),ue($),G(!0)},fe=(re,ve)=>{O(ve),ue({subjectName:re.subjectName||"",subjectType:re.subjectType||"",decisionInMeeting:re.decisionInMeeting||"",tagTo:Array.isArray(re.tagTo)?re.tagTo:[]}),G(!0)},be=async()=>{if(!Q.subjectName.trim()){T("Subject Name is required","error");return}try{if(M(!0),U!==null){const re=m[U]?.subjectId;if(!re){T("Subject ID missing","error");return}const ve=new FormData;ve.append("subjectName",Q.subjectName),ve.append("subjectType",Q.subjectType||""),ve.append("decisionInMeeting",Q.decisionInMeeting||""),ve.append("tagTo",JSON.stringify(Q.tagTo));const q=(await Ie.put(`/updateMeeting/updateSubject/${re}`,ve)).data;q.success?(T("Subject updated!"),G(!1),j(f)):T(q.message||"Failed to update","error")}else{const re={subjectId:Vi(s?.meetingNumber,m.length),subjectName:Q.subjectName,subjectType:Q.subjectType,decisionInMeeting:Q.decisionInMeeting,tagTo:Q.tagTo},ve=[...m,re],he=new FormData;he.append("subjects",JSON.stringify(ve)),s?.meetingNumber&&he.append("meetingNumber",s.meetingNumber),s?.meetingType&&he.append("meetingType",s.meetingType),s?.meetingDate&&he.append("meetingDate",s.meetingDate),s?.meetingTime&&he.append("meetingTime",s.meetingTime);const X=(await Ie.put(`/updateMeeting/${f}`,he)).data;X.success?(T("Subject added!"),G(!1),j(f)):T(X.message||"Failed to save","error")}}catch{T("Server error","error")}finally{M(!1)}},Ne=async re=>{try{M(!0);const ve=m.filter((ce,xe)=>xe!==re),he=new FormData;he.append("subjects",JSON.stringify(ve)),s?.meetingNumber&&he.append("meetingNumber",s.meetingNumber),s?.meetingType&&he.append("meetingType",s.meetingType),s?.meetingDate&&he.append("meetingDate",s.meetingDate),s?.meetingTime&&he.append("meetingTime",s.meetingTime);const X=(await Ie.put(`/updateMeeting/${f}`,he)).data;X.success?(T("Subject deleted!"),P(null),j(f)):T(X.message||"Failed","error")}catch{T("Server error","error")}finally{M(!1)}},Qe=re=>{ue(ve=>({...ve,tagTo:ve.tagTo.includes(re)?ve.tagTo.filter(he=>he!==re):[...ve.tagTo,re]}))},at=re=>re==="Administrative and Financial Approval"?["Tender Floated","1st Envelope Opened","2nd Envelope Opened","Nivida Samiti Rate Approval","Ghoshwara Ready"]:re==="Contract Approval"?["LOI Issued","SD Submitted","Work Order Issued","Work Started","Work Progress - Physical Progress","Work Progress - Financial Progress"]:["Yes","No"],aa=re=>{H(re),we(re.actionTaken||"")},Yt=async()=>{if(le)try{ie(!0);const re=le;if(!re.subjectId){T("Subject ID missing","error");return}const ve=new FormData;ve.append("subjectName",re.subjectName||""),ve.append("subjectType",re.subjectType||""),ve.append("decisionInMeeting",re.decisionInMeeting||""),ve.append("tagTo",JSON.stringify(re.tagTo||[])),ve.append("actionTaken",me);const q=(await Ie.put(`/updateMeeting/updateSubject/${re.subjectId}`,ve)).data;q.success?(T("Action Taken saved!"),H(null),j(f)):T(q.message||"Failed","error")}catch{T("Server error","error")}finally{ie(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"sms-wrap",style:{background:"#f0f4f0",minHeight:"100vh",padding:z?12:24},children:[A&&a.jsx("div",{style:{position:"fixed",top:16,right:16,left:z?16:"auto",background:A.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"10px 18px",borderRadius:8,fontWeight:700,fontSize:13.5,zIndex:9999},children:A.msg}),a.jsx("button",{className:"sms-back-btn",onClick:()=>l("/meetings"),children:"← Back to Meetings"}),a.jsx("h1",{className:"sms-title",children:"Meeting Subjects"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18,flexWrap:"wrap"},children:[a.jsx("input",{className:"sms-search-input",placeholder:"🔍 Search subject ID...",value:x,onChange:re=>h(re.target.value)}),f&&L&&a.jsx("button",{className:"sms-btn-primary",onClick:se,style:{display:"flex",alignItems:"center",gap:6},children:"+ Add Subject"})]}),s&&f&&a.jsxs("div",{className:"sms-meeting-card",children:[a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Meeting No"}),a.jsx("span",{className:"sms-chip-badge",children:s.meetingNumber})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Type"}),a.jsx("span",{className:"sms-chip-value",children:s.meetingType||"-"})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Date"}),a.jsx("span",{className:"sms-chip-value",children:N(s.meetingDate)})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Time"}),a.jsx("span",{className:"sms-chip-value",children:Y(s.meetingTime)})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Subjects"}),a.jsx("span",{className:"sms-chip-value",style:{color:"#1a7a4a",fontWeight:800},children:D.length})]})]}),f?a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?12:20,overflowX:"auto"},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},children:a.jsxs("h3",{style:{fontSize:15,fontWeight:800,color:"#1a4a2e",margin:0},children:["Subjects (",D.length,")"]})}),v?a.jsx("div",{style:{textAlign:"center",padding:24,color:"#8a9a90"},children:"Loading..."}):D.length===0?a.jsxs("div",{className:"sms-empty",children:[a.jsx("div",{className:"sms-empty-icon",children:"📋"}),a.jsx("div",{children:x?"कोणताही subject सापडला नाही":"कोणतेही subjects नाहीत"}),a.jsx("div",{style:{fontSize:12,color:"#aaa",marginTop:4},children:x?"वेगळा Subject ID search करा":"+ Add Subject button वापरून subjects add करा"})]}):z?a.jsx("div",{children:D.map((re,ve)=>{const he=m.indexOf(re);return a.jsxs("div",{className:"sms-card",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[a.jsx("span",{className:"sms-sub-id",children:re.subjectId||Vi(s?.meetingNumber,he)}),a.jsxs("div",{style:{display:"flex",gap:5},children:[a.jsx("button",{className:"sms-btn-edit",onClick:()=>fe(re,he),children:"✏️"}),a.jsx("button",{className:"sms-btn-delete",onClick:()=>P(he),children:"🗑️"})]})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Subject Name"}),a.jsx("span",{style:{fontWeight:600},children:re.subjectName||"-"})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Subject Type"}),a.jsx("span",{className:"sms-type-pill",children:re.subjectType||"-"})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Decision"}),a.jsx(zh,{val:re.decisionInMeeting})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Action Taken"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"},children:[re.actionTaken&&a.jsx("span",{style:{background:re.actionTaken==="Yes"?"#e6f4ec":re.actionTaken==="No"?"#fdecea":"#f0f0ff",color:re.actionTaken==="Yes"?"#1a6640":re.actionTaken==="No"?"#c0392b":"#3a3ab0",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20},children:re.actionTaken}),Array.isArray(re.tagTo)&&re.tagTo.includes(pe?.departmentName)&&a.jsx("button",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:11.5,fontWeight:700,background:"#fff8e1",color:"#b07a00",border:"1.5px solid #ffe082",borderRadius:6,padding:"3px 8px",cursor:"pointer"},onClick:()=>aa(re),children:"⚡ Action"})]})]}),Array.isArray(re.tagTo)&&re.tagTo.length>0&&a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Departments"}),a.jsx("div",{className:"sms-dept-chips",children:re.tagTo.map((q,X)=>a.jsx("span",{className:"sms-dept-chip",children:q},X))})]})]},ve)})}):a.jsxs("table",{className:"sms-table",style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{children:["#","Subject ID","Subject Name","Subject Type","Decision","Departments","Action Taken","Actions"].map(re=>a.jsx("th",{children:re},re))})}),a.jsx("tbody",{children:D.map((re,ve)=>{const he=m.indexOf(re);return a.jsxs("tr",{children:[a.jsx("td",{children:ve+1}),a.jsx("td",{children:a.jsx("span",{className:"sms-sub-id",children:re.subjectId||Vi(s?.meetingNumber,he)})}),a.jsx("td",{style:{maxWidth:260,fontWeight:600},children:re.subjectName||"-"}),a.jsx("td",{children:a.jsx("span",{className:"sms-type-pill",children:re.subjectType||"-"})}),a.jsx("td",{children:a.jsx(zh,{val:re.decisionInMeeting})}),a.jsx("td",{style:{maxWidth:180},children:Array.isArray(re.tagTo)&&re.tagTo.length>0?a.jsx("div",{className:"sms-dept-chips",children:re.tagTo.map((q,X)=>a.jsx("span",{className:"sms-dept-chip",children:q},X))}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{maxWidth:260,fontWeight:600},children:re.actionTaken||"-"}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",gap:6},children:[a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-start"},children:Array.isArray(re.tagTo)&&re.tagTo.includes(pe?.departmentName)&&a.jsx("button",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:11.5,fontWeight:700,background:"#fff8e1",color:"#b07a00",border:"1.5px solid #ffe082",borderRadius:6,padding:"3px 10px",cursor:"pointer",whiteSpace:"nowrap"},onClick:()=>aa(re),children:"⚡ Action"})}),L&&a.jsx("button",{className:"sms-btn-edit",onClick:()=>fe(re,he),children:"✏️ Edit"}),L&&a.jsx("button",{className:"sms-btn-delete",onClick:()=>P(he),children:"🗑️ Delete"})]})})]},ve)})})]})]}):a.jsx("div",{style:{background:"#fff",borderRadius:12,padding:20},children:a.jsxs("div",{className:"sms-empty",children:[a.jsx("div",{className:"sms-empty-icon",children:"🔍"}),a.jsx("div",{children:"कोणतीही meeting उपलब्ध नाही"}),a.jsx("div",{style:{fontSize:12,color:"#aaa",marginTop:4},children:"Meetings page वरून meeting number वर click करा"})]})}),B&&a.jsx("div",{style:xu,children:a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?16:25,width:z?"95%":"65%",maxWidth:720,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{style:{fontSize:17,fontWeight:800,color:"#1a4a2e",margin:0},children:U===null?"Add Subject":"Edit Subject"}),a.jsx("button",{onClick:()=>G(!1),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:z?"1fr":"1fr 1fr",gap:14},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsxs("label",{className:"sms-label",children:["Subject ID",a.jsx("span",{className:"sms-auto-badge",children:"Auto"})]}),a.jsx("input",{className:"sms-input-readonly",value:U!==null?m[U]?.subjectId||Vi(s?.meetingNumber,U):Vi(s?.meetingNumber,m.length),readOnly:!0})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"sms-label",children:"Subject Type"}),a.jsxs("select",{className:"sms-input",value:Q.subjectType,onChange:re=>ue(ve=>({...ve,subjectType:re.target.value})),children:[a.jsx("option",{value:"",children:"Select Type"}),a.jsx("option",{children:"General"}),a.jsx("option",{children:"Administrative and Financial Approval"}),a.jsx("option",{children:"Contract Approval"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsxs("label",{className:"sms-label",children:["Subject Name ",a.jsx("span",{style:{color:"#c0392b"},children:"*"})]}),a.jsx("input",{className:"sms-input",placeholder:"Subject name टाका...",value:Q.subjectName,onChange:re=>ue(ve=>({...ve,subjectName:re.target.value}))})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"sms-label",children:"Decision In Meeting"}),a.jsxs("select",{className:"sms-input",value:Q.decisionInMeeting,onChange:re=>ue(ve=>({...ve,decisionInMeeting:re.target.value,tagTo:re.target.value!=="Approved"?[]:ve.tagTo})),children:[a.jsx("option",{value:"",children:"Select Decision"}),a.jsx("option",{value:"Approved",children:"Approved"}),a.jsx("option",{value:"Rejected",children:"Rejected"}),a.jsx("option",{value:"On-Hold",children:"On-Hold"}),a.jsx("option",{value:"Not Conducted",children:"Not Conducted"}),a.jsx("option",{value:"Postponed",children:"Postponed"})]})]}),Q.decisionInMeeting==="Approved"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"sms-label",style:{marginBottom:8},children:"Assign to Department"}),a.jsx("div",{className:"sms-dept-grid",children:R.length===0?a.jsx("div",{style:{gridColumn:"span 2",textAlign:"center",color:"#8a9a90",fontSize:13,padding:10},children:"Loading departments..."}):R.map((re,ve)=>a.jsxs("label",{className:`sms-dept-item ${Q.tagTo.includes(re)?"checked":""}`,children:[a.jsx("input",{type:"checkbox",checked:Q.tagTo.includes(re),onChange:()=>Qe(re)}),a.jsx("span",{children:re})]},ve))}),Q.tagTo.length>0&&a.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:5},children:Q.tagTo.map((re,ve)=>a.jsxs("span",{style:{background:"#e6f4ec",color:"#1a6640",fontSize:11.5,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid #a8d5b5"},children:["✅ ",re]},ve))})]})]}),a.jsxs("div",{style:{display:"flex",gap:10,marginTop:22},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>G(!1),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",onClick:be,disabled:v,children:v?"Saving...":U===null?"Add Subject":"Update Subject"})]})]})}),ge!==null&&a.jsx("div",{style:xu,children:a.jsxs("div",{style:{background:"#fff",padding:28,borderRadius:12,maxWidth:380,width:z?"90%":"100%",textAlign:"center"},children:[a.jsx("p",{style:{fontSize:17,fontWeight:700,color:"#1a4a2e",marginBottom:6},children:"Delete Subject?"}),a.jsx("p",{style:{fontSize:13.5,color:"#8a9a90",marginBottom:20,fontWeight:500},children:"He subject permanently delete होईल."}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>P(null),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",style:{background:"#c0392b"},onClick:()=>Ne(ge),disabled:v,children:v?"Deleting...":"Yes, Delete"})]})]})}),le&&a.jsx("div",{style:xu,children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:z?18:28,width:z?"95%":"480px",maxWidth:520,boxShadow:"0 8px 32px rgba(0,0,0,0.12)"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("span",{style:{fontSize:22},children:"⚡"}),a.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#1a4a2e",margin:0},children:"Action Taken"})]}),a.jsx("button",{onClick:()=>H(null),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{background:"#f7fbf8",border:"1.5px solid #d6ede0",borderRadius:10,padding:"12px 16px",marginBottom:18,display:"flex",flexDirection:"column",gap:8},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Meeting No"}),a.jsx("span",{style:{background:"#e6f4ec",color:"#1a6640",fontWeight:700,fontSize:12.5,padding:"2px 10px",borderRadius:6},children:s?.meetingNumber||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject ID"}),a.jsx("span",{style:{background:"#eaf3fb",color:"#1565a8",fontWeight:700,fontSize:12,padding:"2px 8px",borderRadius:5,fontFamily:"monospace"},children:le.subjectId||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject Name"}),a.jsx("span",{style:{fontWeight:600,color:"#2d3d35",maxWidth:220,textAlign:"right"},children:le.subjectName||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject Type"}),a.jsx("span",{style:{background:"#f3f0ff",color:"#6a3ab0",fontSize:11.5,fontWeight:600,padding:"2px 8px",borderRadius:20},children:le.subjectType||"General"})]})]}),a.jsxs("div",{style:{marginBottom:22},children:[a.jsxs("label",{className:"sms-label",style:{marginBottom:6},children:["Action Taken",a.jsx("span",{style:{display:"inline-block",background:"#fff8e1",color:"#b07a00",fontSize:10,fontWeight:800,padding:"2px 7px",borderRadius:20,marginLeft:6,textTransform:"uppercase"},children:le.subjectType==="Administrative and Financial Approval"?"Prashaskiy":le.subjectType==="Contract Approval"?"Samvida":"General"})]}),a.jsxs("select",{className:"sms-input",value:me,onChange:re=>we(re.target.value),children:[a.jsx("option",{value:"",children:"-- Select --"}),at(le.subjectType).map((re,ve)=>a.jsx("option",{value:re,children:re},ve))]}),me&&a.jsx("div",{style:{marginTop:10},children:a.jsxs("span",{style:{background:me==="Yes"?"#e6f4ec":me==="No"?"#fdecea":"#f0f0ff",color:me==="Yes"?"#1a6640":me==="No"?"#c0392b":"#3a3ab0",fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:20},children:["✅ ",me]})})]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>H(null),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",onClick:Yt,disabled:F||!me,children:F?"Saving...":"Save Action Taken"})]})]})})]})]})}const xu={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:16},IS="/assets/ajivsir8-CVMwJ6TC.jpeg",YS="/assets/ajivsir1-DtAuu40c.jpeg",FS="/assets/meeting2-BpgpR0FZ.jpeg",qS="/assets/tree-BGxUfGTP.jfif",VS="/assets/pani3-tuXII5q-.jpg",PS="/assets/narangibridgeahani-Ct7_szRG.jpeg";function bu({src:r,style:o,loop:l=!0}){const s=b.useRef(null);return b.useEffect(()=>{let u;const f=()=>{window.lottie&&s.current&&(s.current.innerHTML="",u=window.lottie.loadAnimation({container:s.current,renderer:"svg",loop:l,autoplay:!0,path:r}))};if(window.lottie)f();else{const p=document.createElement("script");p.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js",p.onload=f,document.head.appendChild(p)}return()=>u&&u.destroy()},[r]),a.jsx("div",{ref:s,style:o})}function Ah(){const r=mt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),l=b.useRef(null),[s,u]=b.useState(0),[f,p]=b.useState(!0),[x,h]=Le.useState(0),[m,y]=Le.useState(!0),v=[{icon:"🌉",tag:"पायाभूत सुविधा",title:"नारंगी उड्डाणपूल प्रकल्प पाहणी",desc:"नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 42 कोटी",deadline:"डिसेंबर 2025",stat:"",statLbl:"मार्च २०२६ अखेर वाहतुकीसाठी खुले",accent:"#51ABAC",bgimg:PS},{icon:"🏛️",tag:"प्रशासन",title:"समिती गठनाबाबत चर्चा",desc:"स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"",statLbl:"",accent:"#028945",bgimg:FS},{icon:"💧",tag:"पाणीपुरवठा",title:"24×7 पाणीपुरवठा योजना — वसई विभाग",desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"1.2 लाख",statLbl:"लाभार्थी कुटुंबे",accent:"#028945",bgimg:VS},{icon:"🌳",tag:"पर्यावरण",title:"हरित वसई-विरार — वृक्षारोपण मोहीम",desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 8 कोटी",deadline:"ऑगस्ट 2025",stat:"5 लाख",statLbl:"झाडे लावणार",accent:"#028945",bgimg:qS}];b.useEffect(()=>{if(!f)return;const R=setInterval(()=>{u(C=>(C+1)%v.length)},4e3);return()=>clearInterval(R)},[f,v.length]),b.useEffect(()=>{if(!m)return;const R=setInterval(()=>{h(C=>C>=z?0:C+1)},5e3);return()=>clearInterval(R)},[m]),b.useEffect(()=>{if(!l.current)return;const R=l.current,C=(R.offsetWidth-40)/3;R.scrollTo({left:x*(C+20),behavior:"smooth"})},[x]);const M=[{lottie:"https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json",title:"नोंदणी करा",desc:"Mobile number वापरून account तयार करा."},{lottie:"https://assets4.lottiefiles.com/packages/lf20_tljjahng.json",title:"तारीख निवडा",desc:"मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"},{lottie:"https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json",title:"तपशील भरा",desc:"भेटीचे कारण, visitors संख्या आणि photo द्या"},{lottie:"https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title:"टोकन मिळवा",desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"}],A=v[s],S=[{tag:"🌿 शिबिर प्रदर्शन",title:"घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन",rows:["घनकचरा व्यवस्थापन प्रदर्शन","खत निर्मिती तंत्रज्ञान प्रदर्शन"],date:"२८ फेब्रुवारी २०२६",accent:"#4CABC1",bg:"linear-gradient(160deg,#b8e2ec 0%,#d0eff7 40%,#aad8e8 100%)",dotColors:["#4CABC1","#66A962"]},{tag:"🧹 स्वच्छता आढावा",title:"दैनंदिन कचरा संकलन व स्वच्छता बैठक",rows:["कचरा संकलन व वर्गीकरण","गटार व नाले साफसफाई"],date:"११ मार्च २०२६",accent:"#66A962",bg:"linear-gradient(160deg,#b5d9b3 0%,#d2edd0 40%,#a8cfaa 100%)",dotColors:["#66A962","#CA9D28"]},{tag:"🛣️ रस्ते विकास",title:"रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक",rows:["रस्ते दुरुस्ती व बांधकाम","फुटपाथ उभारणी नियोजन"],date:"१० मार्च २०२६",accent:"#CA9D28",bg:"linear-gradient(160deg,#f0d6a8 0%,#f7e6c2 40%,#e8c87a 100%)",dotColors:["#CA9D28","#CE9A54"]},{tag:"⚡ वीज विकास",title:"MSEDCL वसई मंडळ आढावा बैठक",rows:["MSEDCL विकास कामे आढावा","महापौर व नगर सेवक बैठक"],date:"५ मार्च २०२६",accent:"#49ACC3",bg:"linear-gradient(160deg,#a8d4dc 0%,#c8e8f0 40%,#8ec4d0 100%)",dotColors:["#49ACC3","#187480"]}],z=1,E=Math.min(x,z);return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

        /* ══ HERO ══ */
        .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 72px; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background-image:url(${IS}); background-size:cover; background-position:left; background-repeat:no-repeat; z-index:0; }
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

      `}),a.jsxs("div",{className:"home-root",children:[a.jsxs("div",{className:"hero",children:[a.jsxs("div",{className:"hero-orbit","aria-hidden":"true",children:[a.jsx("div",{className:"hero-float f1",children:"📅"}),a.jsx("div",{className:"hero-float f2",children:"👥"}),a.jsx("div",{className:"hero-float f3",children:"📅"}),a.jsx("div",{className:"hero-float f4",children:"👤"})]}),a.jsx("h1",{className:"hero-jansanwad",children:"जन संवाद"}),a.jsx("div",{className:"hero-title-underline"}),a.jsx("p",{className:"hero-desc",children:"नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"}),a.jsx("div",{className:"hero-btns",children:o?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"hero-btn-primary",onClick:()=>r("/book-appointment"),children:"📅 Book Appointment"}),a.jsx("button",{className:"hero-btn-outline",onClick:()=>r("/my-appointments"),children:"📋 My Appointments"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"hero-btn-primary",onClick:()=>r("/register"),children:"🚀 Get Started — Register"}),a.jsx("button",{className:"hero-btn-outline",onClick:()=>r("/login"),children:"Login करा"})]})})]}),a.jsx("div",{className:"hiw-section",children:a.jsxs("div",{className:"hiw-inner",children:[a.jsxs("div",{className:"hiw-header",children:[a.jsx("h2",{className:"hiw-title",children:"कसे काम करते?"}),a.jsx("div",{className:"hiw-title-bar"}),a.jsx("p",{className:"hiw-sub",children:"४ टप्प्यांमध्ये महापौरांची भेट बुक करा."})]}),a.jsxs("div",{className:"hiw-grid-wrap",children:[a.jsx("div",{className:"hiw-connector","aria-hidden":"true"}),a.jsx("div",{className:"hiw-grid",children:M.map((R,C)=>a.jsxs("div",{className:"hiw-card",children:[a.jsx("div",{className:"hiw-num",children:C+1}),a.jsx("div",{className:"hiw-icon-wrap",children:a.jsx(bu,{src:R.lottie,style:{width:44,height:44}})}),a.jsx("div",{className:"hiw-step-title",children:R.title}),a.jsx("div",{className:"hiw-step-desc",children:R.desc})]},C))})]})]})}),a.jsxs("div",{className:"mayor-section",children:[a.jsxs("div",{className:"mayor-left",children:[a.jsx("p",{className:"mayor-heading-line1",children:"मा. महापौर"}),a.jsx("p",{className:"mayor-heading-line2",children:"श्री. अजीव पाटील"}),a.jsx("p",{className:"mayor-bio",children:"३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."}),a.jsx("button",{className:"mayor-btn-primary",onClick:()=>r(o?"/book-appointment":"/register"),children:"📅 Appointment बुक करा"})]}),a.jsxs("div",{className:"mayor-right",children:[a.jsx("div",{className:"mayor-chevrons","aria-hidden":"true",children:a.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",children:[a.jsxs("g",{opacity:"0.2",stroke:"#7edede",strokeWidth:"1.4",fill:"none",children:[a.jsx("polyline",{points:"160,8 178,26 160,44"}),a.jsx("polyline",{points:"142,8 160,26 142,44"}),a.jsx("polyline",{points:"124,8 142,26 124,44"}),a.jsx("polyline",{points:"160,44 178,62 160,80"}),a.jsx("polyline",{points:"142,44 160,62 142,80"}),a.jsx("polyline",{points:"124,44 142,62 124,80"}),a.jsx("polyline",{points:"168,80 186,98 168,116"}),a.jsx("polyline",{points:"150,80 168,98 150,116"}),a.jsx("polyline",{points:"168,116 186,134 168,152"}),a.jsx("polyline",{points:"150,116 168,134 150,152"})]}),a.jsx("circle",{cx:"182",cy:"18",r:"16",fill:"rgba(81,200,200,0.3)",stroke:"rgba(81,200,200,0.4)",strokeWidth:"1"}),a.jsx("rect",{x:"108",y:"4",width:"10",height:"10",rx:"1",transform:"rotate(45 113 9)",fill:"#7edede",opacity:"0.3"})]})}),a.jsx("div",{className:"mayor-diamond-tl","aria-hidden":"true",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:a.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",transform:"rotate(45 8 8)",fill:"#7edede",opacity:"0.45"})})}),a.jsx("div",{className:"mayor-diamond-mid","aria-hidden":"true",children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:a.jsx("rect",{x:"1.5",y:"1.5",width:"9",height:"9",rx:"1",transform:"rotate(45 6 6)",fill:"#c9a040",opacity:"0.4"})})}),a.jsx("div",{className:"mayor-gold-tri","aria-hidden":"true",children:a.jsxs("svg",{width:"160",height:"110",viewBox:"0 0 160 110",fill:"none",children:[a.jsx("polygon",{points:"160,110 160,0 50,110",fill:"#C9963A",opacity:"0.25"}),a.jsx("polygon",{points:"160,110 160,40 95,110",fill:"#e8b84b",opacity:"0.18"})]})}),a.jsx("div",{className:"mayor-sparkle","aria-hidden":"true",children:a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:a.jsx("path",{d:"M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z",fill:"white",opacity:"0.7"})})}),a.jsx("div",{className:"mayor-phone-glow","aria-hidden":"true"}),a.jsxs("div",{className:"mayor-content-wrap",children:[a.jsxs("div",{className:"mayor-brand-row",children:[a.jsx("div",{className:"mayor-brand-logo-wrap",children:a.jsx("img",{src:Xx,alt:"VVCMC Logo"})}),a.jsx("div",{className:"mayor-brand-text",children:"वसई-विरार शहर महानगरपालिका, जन संवाद"})]}),a.jsxs("div",{className:"mayor-bottom-row",children:[a.jsxs("div",{className:"mayor-data-col",children:[a.jsx("div",{className:"mayor-data-col-head",children:"नागरिक सहभाग"}),a.jsx("div",{className:"mayor-data-text",children:"नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."}),a.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"वसई स्मार्ट सिटी प्रकल्प"}),a.jsx("div",{className:"mayor-data-text",children:"वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."})]}),a.jsxs("div",{className:"mayor-phone-center",children:[a.jsxs("div",{className:"mayor-bubbles-col",children:[a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("rect",{x:"4",y:"4",width:"18",height:"13",rx:"3",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M8 20 L8 17",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",strokeLinecap:"round"}),a.jsx("path",{d:"M7 7h12M7 10h8M7 13h10",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",strokeLinecap:"round"}),a.jsx("circle",{cx:"19",cy:"6",r:"4",fill:"#028945",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),a.jsx("path",{d:"M17 6h4M19 4v4",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})}),a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("polyline",{points:"5,19 10,12 15,15 21,7",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),a.jsx("polyline",{points:"17,7 21,7 21,11",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),a.jsx("line",{x1:"5",y1:"21",x2:"21",y2:"21",stroke:"rgba(255,255,255,0.45)",strokeWidth:"1.2",strokeLinecap:"round"})]})}),a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("circle",{cx:"13",cy:"8",r:"3.2",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M7 21 C7 16.5 19 16.5 19 21",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),a.jsx("circle",{cx:"6.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),a.jsx("path",{d:"M3 20 C3 16.8 10 16.8 10 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),a.jsx("circle",{cx:"19.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),a.jsx("path",{d:"M16 20 C16 16.8 23 16.8 23 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),a.jsx("path",{d:"M10 22.5 Q13 25 16 22.5",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1",strokeLinecap:"round",fill:"none"})]})})]}),a.jsx("div",{className:"mayor-phone-wrap",children:a.jsx("div",{className:"mayor-phone",children:a.jsxs("div",{className:"mayor-phone-inner",children:[a.jsx("img",{src:YS,alt:"मा. महापौर श्री. अजीव पाटील",className:"mayor-phone-img"}),a.jsxs("div",{className:"mayor-phone-badge",children:[a.jsx("div",{className:"mayor-phone-badge-name",children:"मा. महापौर श्री. अजीव पाटील"}),a.jsx("div",{className:"mayor-phone-badge-title",children:"वसई-विरार शहर महानगरपालिका"})]})]})})})]}),a.jsxs("div",{className:"mayor-data-col",children:[a.jsx("div",{className:"mayor-data-col-head",children:"पायाभूत सुविधा"}),a.jsx("div",{className:"mayor-data-text",children:"वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"}),a.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"सुरक्षित व स्वच्छ शहर"}),a.jsx("div",{className:"mayor-data-text",children:"सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."})]})]})]})]})]}),a.jsx("div",{className:"projects-section",style:{backgroundColor:"#F9FCFB"},children:a.jsxs("div",{className:"projects-inner",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-tag",children:"✦ सध्या सुरू"}),a.jsx("h2",{className:"section-title",children:"चालू प्रकल्प"}),a.jsx("p",{className:"section-sub",children:"वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"})]}),a.jsxs("div",{className:"proj-card",onMouseEnter:()=>p(!1),onMouseLeave:()=>p(!0),style:A.bgimg?{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${A.accent}99 100%), url(${A.bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[a.jsxs("div",{className:"proj-left",style:{background:"transparent",border:A.bgimg?"none":"1px solid rgba(81,171,172,0.12)",borderRight:"none"},children:[a.jsxs("div",{className:"proj-tag",style:{background:`${A.accent}18`,color:A.accent},children:[A.icon," ",A.tag]}),a.jsx("div",{className:"proj-title",children:A.title}),a.jsx("p",{className:"proj-desc",children:A.desc}),a.jsxs("div",{className:"proj-progress-row",children:[a.jsx("span",{className:"proj-progress-lbl",children:"प्रगती"}),a.jsx("span",{className:"proj-progress-pct",style:{color:A.accent},children:A.progress})]}),a.jsx("div",{className:"proj-bar",children:a.jsx("div",{className:"proj-bar-fill",style:{width:`${A.progress}%`,background:`linear-gradient(90deg,${A.accent}88,${A.accent})`}})}),a.jsxs("div",{className:"proj-meta",children:[a.jsxs("div",{className:"proj-meta-item",children:["💰 ",a.jsx("strong",{children:A.budget})]}),a.jsxs("div",{className:"proj-meta-item",children:["📅 ",a.jsx("strong",{children:A.deadline})]}),a.jsx("span",{className:`proj-chip ${A.status==="ongoing"?"chip-ongoing":"chip-planning"}`,children:A.statusLabel})]})]}),a.jsxs("div",{className:"proj-right",style:{background:`linear-gradient(160deg,${A.accent},${A.accent}bb)`},children:[a.jsx("div",{className:"proj-icon",children:A.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"proj-stat-num",children:A.stat}),a.jsx("div",{className:"proj-stat-lbl",children:A.statLbl})]})]})]}),a.jsxs("div",{className:"proj-nav",children:[a.jsx("button",{className:"proj-btn",onClick:()=>{p(!1),u(R=>(R-1+v.length)%v.length)},children:"‹"}),a.jsx("div",{className:"proj-dots",children:v.map((R,C)=>a.jsx("button",{className:`proj-dot${s===C?" active":""}`,onClick:()=>{p(!1),u(C)}},C))}),a.jsxs("span",{className:"proj-counter",children:[s+1," / ",v.length]}),a.jsx("button",{className:"proj-btn",onClick:()=>{p(!1),u(R=>(R+1)%v.length)},children:"›"})]})]})}),a.jsxs("div",{className:"notice",children:[a.jsx("span",{className:"notice-icon",children:"⚠️"}),a.jsxs("div",{children:[a.jsx("div",{className:"notice-title",children:"महत्त्वाची सूचना"}),a.jsx("div",{className:"notice-text",children:"भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."})]})]}),a.jsxs("div",{className:"cta",children:[a.jsx(bu,{src:"https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",style:{position:"absolute",left:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}}),a.jsx(bu,{src:"https://assets9.lottiefiles.com/packages/lf20_touohxv0.json",style:{position:"absolute",right:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}})]}),a.jsx("div",{className:"news-section",children:a.jsxs("div",{className:"news-inner",children:[a.jsxs("div",{className:"news-header",children:[a.jsx("div",{className:"news-section-tag",children:"✦ ताज्या बातम्या"}),a.jsx("h2",{className:"news-title",children:"महापौर कार्यालयाच्या ताज्या बातम्या"}),a.jsx("div",{className:"news-title-bar"}),a.jsx("p",{className:"news-sub",children:"Mayor's Office Latest Updates & Activities"})]}),a.jsx("div",{className:"news-viewport",ref:l,onMouseEnter:()=>y(!1),onMouseLeave:()=>y(!0),children:a.jsx("div",{className:"news-track",children:S.map((R,C)=>a.jsxs("div",{className:"news-card",style:{background:R.bg,"--nc-accent":R.accent},children:[a.jsxs("div",{className:"nc-widget",children:[a.jsx("div",{className:"nc-widget-day",children:R.day}),a.jsx("div",{className:"nc-widget-rows",children:R.rows.map((B,G)=>a.jsxs("div",{className:"nc-widget-row",children:[a.jsx("span",{className:"nc-dot",style:{background:R.dotColors[G]}}),B]},G))})]}),a.jsxs("div",{className:"nc-caption",children:[a.jsx("div",{className:"nc-tag",children:R.tag}),a.jsx("div",{className:"nc-title",children:R.title}),a.jsxs("div",{className:"nc-date-row",children:[a.jsxs("div",{className:"nc-date",children:["📅 ",R.date]}),a.jsx("div",{className:"nc-arrow",children:"→"})]})]})]},C))},x)}),a.jsxs("div",{className:"news-nav",children:[a.jsx("button",{className:"news-btn",onClick:()=>{y(!1),h(R=>Math.max(0,R-1))},children:"‹"}),a.jsx("div",{className:"news-dots",children:Array.from({length:2}).map((R,C)=>a.jsx("button",{className:`news-dot${E===C?" active":""}`,onClick:()=>{y(!1),h(C)}},C))}),a.jsxs("span",{className:"news-counter",children:[E+1," / 2"]}),a.jsx("button",{className:"news-btn",onClick:()=>{y(!1),h(R=>Math.min(z,R+1))},children:"›"})]})]})})]})]})}function Tn(){const r=mt(),o=new Date().getFullYear(),l=()=>window.scrollTo({top:0,behavior:"smooth"});return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer-body",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsxs("div",{className:"footer-logo-row",children:[a.jsx("div",{className:"cn-logo-wrap",children:a.jsx("img",{src:En,alt:"VVCMC"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-brand-name",children:["Vasai-Virar City",a.jsx("br",{}),"Municipal Corporation"]}),a.jsx("div",{className:"footer-brand-sub",children:"VVCMC — Jan Samvad"})]})]}),a.jsx("p",{className:"footer-tagline",children:"For the citizens, by the citizens — committed to transparent, fast and digital public services."}),a.jsxs("div",{className:"footer-address",children:[a.jsx("div",{className:"footer-address-title",children:"Head Office"}),a.jsxs("div",{className:"footer-address-text",children:["Virat Nagar, Near MHADA Colony,",a.jsx("br",{}),"Virar West. PIN: 401303"]})]}),a.jsxs("div",{className:"footer-contacts",children:[a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"📞"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Main Office"}),a.jsx("div",{className:"footer-contact-num",children:"0250-6630000"})]})]}),a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"🚨"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Disaster Management"}),a.jsx("div",{className:"footer-contact-num",children:"0250-2334546 / 0250-2334547"})]})]}),a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"📱"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Helpline"}),a.jsx("div",{className:"footer-contact-num",children:"7058911125 / 7058991430 / 8446427643"})]})]})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-col-title",children:[a.jsx("span",{className:"footer-col-title-dot"}),"Site Map"]}),a.jsxs("ul",{className:"footer-links",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>r("/"),children:"Home"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>r("/book-appointment"),children:"Book Appointment"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>r("/my-appointments"),children:"My Appointments"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>r("/register"),children:"Register"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>r("/login"),children:"Login"})})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-col-title",children:[a.jsx("span",{className:"footer-col-title-dot"}),"Contact Us"]}),a.jsxs("a",{className:"footer-whatsapp-chip",href:"https://wa.me/919665877727",target:"_blank",rel:"noreferrer",children:[a.jsx("span",{children:"💬"})," WhatsApp Chatbot"]}),a.jsxs("div",{className:"footer-contact-row",style:{marginBottom:"20px"},children:[a.jsx("span",{className:"footer-contact-icon",children:"💬"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"WhatsApp"}),a.jsx("div",{className:"footer-contact-num",children:"9665877727"})]})]}),a.jsxs("div",{className:"footer-col-title",style:{marginTop:"20px"},children:[a.jsx("span",{className:"footer-col-title-dot"}),"Follow Us"]}),a.jsxs("div",{className:"footer-social",children:[a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Facebook",children:"𝑓"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Twitter",children:"𝕏"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Instagram",children:"◎"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"YouTube",children:"▶"})]})]})]}),a.jsx("div",{className:"footer-divider"}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"footer-copy",children:["© ",o," Vasai-Virar City Municipal Corporation. All rights reserved."]}),a.jsxs("button",{className:"footer-back-top",onClick:l,children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M6 10V2M6 2L2 6M6 2L10 6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Top"]})]}),a.jsx("div",{className:"footer-gold-strip",children:"Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad"})]})]})}function zn(){const r=mt(),o=Aa(),[l,s]=b.useState(!1),[u,f]=b.useState(!1),p=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})();b.useEffect(()=>{const m=()=>f(window.scrollY>20);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const x=()=>{localStorage.removeItem("citizenUser"),r("/login"),s(!1)},h=m=>o.pathname===m;return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsx("div",{className:`cn-outer${u?" scrolled":""}`,children:a.jsxs("nav",{className:"cn-nav",children:[a.jsxs("div",{className:"cn-brand",onClick:()=>r("/"),children:[a.jsx("div",{className:"cn-logo-wrap",children:a.jsx("img",{src:En,alt:"VVCMC"})}),a.jsxs("div",{className:"cn-brand-text",children:[a.jsx("span",{className:"cn-brand-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("span",{className:"cn-brand-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"cn-links",children:[a.jsx("button",{className:`cn-link${h("/")?" active":""}`,onClick:()=>r("/"),children:"Home"}),p&&a.jsx("button",{className:`cn-link${h("/my-appointments")?" active":""}`,onClick:()=>r("/my-appointments"),children:"My Appointments"}),p?a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"cn-citizen-name",children:["👋 ",p.fullName?.split(" ")[0]]}),a.jsx("button",{className:"cn-btn-solid",onClick:()=>r("/book-appointment"),children:"+ Book"}),a.jsx("button",{className:"cn-btn-danger",onClick:x,title:"Logout",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M18.36 6.64A9 9 0 1 1 5.64 6.64"}),a.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-btn-outline",onClick:()=>r("/login"),children:"Login"}),a.jsx("button",{className:"cn-btn-solid",onClick:()=>r("/register"),children:"Register"})]})]}),a.jsx("button",{className:"cn-ham",onClick:()=>s(m=>!m),children:l?"✕":"☰"})]})}),a.jsxs("div",{className:`cn-mobile-menu${l?" open":""}`,children:[a.jsx("button",{className:`cn-mobile-link${h("/")?" active":""}`,onClick:()=>{r("/"),s(!1)},children:"🏠 Home"}),p&&a.jsx("button",{className:`cn-mobile-link${h("/my-appointments")?" active":""}`,onClick:()=>{r("/my-appointments"),s(!1)},children:"📅 My Appointments"}),p?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-mobile-link",style:{color:"#CA9D28"},onClick:()=>{r("/book-appointment"),s(!1)},children:"+ Book Appointment"}),a.jsx("button",{className:"cn-mobile-link",style:{color:"#f87171"},onClick:x,children:"🚪 Logout"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-mobile-link",onClick:()=>{r("/login"),s(!1)},children:"🔐 Login"}),a.jsx("button",{className:"cn-mobile-link",onClick:()=>{r("/register"),s(!1)},children:"📝 Register"})]})]})]})}const yu=[{label:"Personal Details",icon:"👤"},{label:"Appointment",icon:"📅"},{label:"Details",icon:"ℹ️"},{label:"Photo",icon:"📷"},{label:"Review & Submit",icon:"📋"}];function Hl(r){return r?new Date(r+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—"}function vu(r){if(!r)return[];const o=r.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);if(!o)return[];const l=parseInt(o[1]),s=parseInt(o[2]),u=parseInt(o[3]),f=parseInt(o[4]),p=[];let x=l*60+s;const h=u*60+f;for(;x+15<=h;){const m=String(Math.floor(x/60)).padStart(2,"0"),y=String(x%60).padStart(2,"0"),v=String(Math.floor((x+15)/60)).padStart(2,"0"),M=String((x+15)%60).padStart(2,"0");p.push(`${m}:${y} - ${v}:${M}`),x+=15}return p}function GS(){const r=mt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[l,s]=b.useState(0),[u,f]=b.useState(!1),[p,x]=b.useState([]),[h,m]=b.useState(null),[y,v]=b.useState(null),[M,A]=b.useState("forward"),[S,z]=b.useState([]),[E,R]=b.useState(!1),[C,B]=b.useState(!1),[G,U]=b.useState(!1),[O,$]=b.useState(!1),[Q,ue]=b.useState(null),[ge,P]=b.useState(null),le=(X,ce="success")=>{m({msg:X,type:ce}),setTimeout(()=>m(null),3500)},[H,me]=b.useState({username:o?.username||"",fullName:o?.fullName||"",mobileNumber:o?.mobileNumber||"",email:o?.email||"",address:"",pincode:"",preferredDate:"",slotTime:"",slotStart:"",slotEnd:"",microSlot:"",purpose:"",numberOfVisitors:"1",visitedBefore:!1,ward:"",visitorPhoto:null,photoPreview:null}),we=X=>ce=>me(xe=>({...xe,[X]:ce.target.value})),F=b.useRef("");b.useEffect(()=>{F.current=H.microSlot},[H.microSlot]),b.useEffect(()=>{if(!o?._id)return;(async()=>{try{U(!0);const ce=await zt.get(`/citizen/by-id/${o._id}`);if(ce.data?.success&&ce.data?.citizen){const xe=ce.data.citizen;me(ye=>({...ye,username:xe.username||ye.username,fullName:xe.fullName||ye.fullName,mobileNumber:xe.mobileNumber||ye.mobileNumber,email:xe.email||ye.email,pincode:xe.pincode||ye.pincode,address:xe.address||ye.address,ward:ce.data.lastWard||ye.ward})),ce.data.lastPhoto&&P(ce.data.lastPhoto),ue(ce.data.nextVisitNumber),$(!0)}}catch{}finally{U(!1)}})()},[]),b.useEffect(()=>{zt.get("/availability/get").then(X=>{X.data&&x(Array.isArray(X.data)?X.data:X.data.data||[])}).catch(()=>{})},[]);const ie=X=>(X||"").replace(/\s*-\s*/g,"-").trim(),pe=X=>{if(X?.success===!1)return new Set;const ce=X?.data?.slots||X?.slots||[];return new Set(ce.filter(xe=>xe.booked).map(xe=>ie(xe.microSlot)))},K=async(X,ce,xe,ye)=>{try{const nt=X.replace(/ /g,"%20"),bt=ce.replace(/ /g,"%20"),Ke=await zt.get(`/citizen/micro-slots?date=${nt}&slotTime=${bt}`),ja=pe(Ke.data),wa=xe.map(Rt=>({...Rt,booked:ja.has(ie(Rt.microSlot))}));return z(wa),B(wa.length>0&&wa.every(Rt=>Rt.booked)),ye&&ja.has(ie(ye))&&(le("⚠️ तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा.","error"),me(Rt=>({...Rt,microSlot:""}))),ja}catch{return new Set}};b.useEffect(()=>{if(l!==1||!H.preferredDate||!H.slotTime){(!H.preferredDate||!H.slotTime)&&(z([]),B(!1));return}let X=!1;const ce=H.preferredDate,xe=H.slotTime,ye=vu(xe).map(bt=>({microSlot:bt,booked:!1}));z(ye),B(!1),R(!0),K(ce,xe,ye,F.current).finally(()=>{X||R(!1)});const nt=setInterval(()=>{if(X)return;const bt=vu(xe).map(Ke=>({microSlot:Ke,booked:!1}));K(ce,xe,bt,F.current)},3e4);return()=>{X=!0,clearInterval(nt)}},[H.preferredDate,H.slotTime,l]);const L=b.useRef(null),j=b.useRef(null),T=b.useRef(null),[N,Y]=b.useState(!1),[D,se]=b.useState(""),fe=async()=>{se("");try{const X=await navigator.mediaDevices.getUserMedia({video:!0});T.current=X,Y(!0),setTimeout(()=>{L.current&&(L.current.srcObject=X,L.current.play())},100)}catch{se("Camera access denied. Browser permission द्या.")}},be=()=>{const X=L.current,ce=j.current;!X||!ce||(ce.width=X.videoWidth,ce.height=X.videoHeight,ce.getContext("2d").drawImage(X,0,0),ce.toBlob(xe=>{const ye=new File([xe],`photo-${Date.now()}.jpg`,{type:"image/jpeg"}),nt=URL.createObjectURL(xe);me(bt=>({...bt,visitorPhoto:ye,photoPreview:nt})),Ne()},"image/jpeg"))},Ne=()=>{T.current&&(T.current.getTracks().forEach(X=>X.stop()),T.current=null),Y(!1)},Qe=new Date().toISOString().split("T")[0],at=p.filter(X=>X.date>=Qe),Yt=at.find(X=>X.date===H.preferredDate)?.timeSlots||[],re=l===0?!H.fullName||!H.mobileNumber||!H.address:l===1?!H.preferredDate||!H.slotTime||!H.microSlot:l===2?!H.purpose||!H.ward:l===3?!H.visitorPhoto:!1,ve=()=>{A("forward"),s(X=>X+1)},he=()=>{A("back"),s(X=>X-1)},q=async()=>{if(!o){r("/login");return}try{f(!0);try{const Dt=vu(H.slotTime).map(ct=>({microSlot:ct,booked:!1})),Os=H.preferredDate.replace(/ /g,"%20"),fo=H.slotTime.replace(/ /g,"%20"),Ms=await zt.get(`/citizen/micro-slots?date=${Os}&slotTime=${fo}`),po=pe(Ms.data),Rn=Dt.map(ct=>({...ct,booked:po.has(ie(ct.microSlot))}));if(z(Rn),po.has(ie(H.microSlot))){le("❌ हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा.","error"),me(ct=>({...ct,microSlot:""})),f(!1);return}}catch{}const X=o?._id&&o._id!=="undefined"?o._id:"",ce=new FormData;ce.append("citizenId",X),ce.append("fullName",H.fullName),ce.append("mobileNumber",H.mobileNumber),ce.append("email",H.email||""),ce.append("address",H.address),ce.append("pincode",H.pincode||""),ce.append("preferredDate",H.preferredDate),ce.append("slotTime",H.slotTime),ce.append("microSlot",H.microSlot),ce.append("purpose",H.purpose),ce.append("numberOfVisitors",H.numberOfVisitors),ce.append("visitedBefore",String(H.visitedBefore)),ce.append("ward",H.ward),ce.append("submittedById",X),ce.append("submittedByName",o.fullName||""),H.visitorPhoto&&ce.append("visitorPhoto",H.visitorPhoto);const xe=await zt.post("/citizen/book-appointment",ce,{headers:{"Content-Type":void 0}});if(!xe.data.success){le(xe.data.message||"Booking failed ❌","error");return}const ye=xe.data.data,nt=ye.mobileNumber||H.mobileNumber,bt=ye.fullName||H.fullName,Ke=Dt=>Dt?new Date(Dt+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—",ja={pending:"Pending — Awaiting Mayor's Approval",approved:"Approved by Respected Mayor Ajiv Patil Sir",rejected:"Rejected by Admin",cancelled:"Cancelled"}[ye.status]||ye.status,wa=`Dear ${bt}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been successfully booked. Appointment Status: ${ja} Date: ${Ke(ye.preferredDate)} Time Slot: ${ye.microSlot} Token No: ${ye.tokenId} Please carry this Token No on your visit day. SAAVI INFINET`,Rt=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379324&number=${nt}&message=${encodeURIComponent(wa)}`;fetch(Rt,{method:"GET",mode:"no-cors"}).then(()=>console.log(`✅ SMS sent to ${nt}`)).catch(Dt=>console.error("SMS error:",Dt)),v(ye)}catch(X){le(X?.response?.data?.message||"Server Error ❌","error")}finally{f(!1)}};return y?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
          @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        `}),a.jsx("div",{className:"book-root",children:a.jsxs("div",{style:{background:"#fff",borderRadius:20,padding:"48px 40px",maxWidth:520,width:"100%",textAlign:"center",boxShadow:"0 8px 40px rgba(76,171,193,0.18)",border:"1.5px solid #b2e4ee",animation:"fadeUpIn .5s ease"},children:[a.jsx("div",{style:{width:90,height:90,borderRadius:"50%",background:"linear-gradient(135deg,#4CABC1,#66A962)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,margin:"0 auto 20px",animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both",boxShadow:"0 8px 24px rgba(76,171,193,0.35)"},children:"✅"}),a.jsx("h2",{style:{fontSize:26,fontWeight:800,color:"#187488",marginBottom:8,fontFamily:"'Plus Jakarta Sans',sans-serif",background:"linear-gradient(135deg,#4CABC1,#66A962)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Appointment Booked!"}),a.jsx("p",{style:{color:"#4a5568",marginBottom:24,fontSize:14,fontWeight:500},children:"तुमची appointment successfully book झाली आहे"}),a.jsx("div",{style:{background:"linear-gradient(135deg,#f0faf9,#f5fef5)",border:"1.5px solid #b2e4ee",borderRadius:12,padding:"20px 24px",marginBottom:24,textAlign:"left"},children:[["Token ID",y.tokenId],["Date",Hl(y.preferredDate)],["Slot",y.slotTime],["Your Time",y.microSlot||"—"],["Status","⏳ Pending — Admin approval बाकी आहे"]].map(([X,ce])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid #d4eff5",fontSize:13},children:[a.jsx("span",{style:{color:"#5a7a88",fontWeight:600},children:X}),a.jsx("span",{style:{color:"#187488",fontWeight:700},children:ce})]},X))}),y.qrCode&&a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("p",{style:{fontSize:12,color:"#6b7280",marginBottom:8,fontWeight:600},children:"QR Code — भेटीच्या दिवशी दाखवा"}),a.jsx("img",{src:y.qrCode,alt:"QR",style:{width:130,height:130}})]}),a.jsx("button",{onClick:()=>r("/my-appointments"),style:{width:"100%",padding:"13px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#4CABC1,#49ACC3)",color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)",transition:"transform .15s"},onMouseEnter:X=>X.target.style.transform="translateY(-1px)",onMouseLeave:X=>X.target.style.transform="none",children:"📋 My Appointments बघा"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),h&&a.jsx("div",{className:"toast",style:{background:h.type==="success"?"var(--teal)":"#dc2626"},children:h.msg}),a.jsx("div",{className:"book-root",children:a.jsxs("div",{className:"book-wrapper",children:[a.jsxs("div",{className:"book-titlebar",children:[a.jsx("h1",{children:"जनसंपर्क – Application Form"}),a.jsx("div",{className:"stepper",children:yu.map((X,ce)=>{const xe=ce<l?"done":ce===l?"active":"pending";return a.jsxs("div",{className:`step-tab ${xe}`,children:[a.jsx("div",{className:`step-dot ${xe}`,children:xe==="done"?"✓":ce+1}),X.label]},ce)})})]}),a.jsx("div",{className:"step-progress-bar",children:a.jsx("div",{className:"step-progress-fill",style:{width:`${(l+1)/yu.length*100}%`}})}),a.jsx("div",{className:"book-body",children:a.jsxs("div",{className:M==="forward"?"step-body-forward":"step-body-back",children:[l===0&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Personal Information"}),a.jsx("p",{className:"section-sub",children:"Please provide your basic details to proceed"}),G&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--teal)",fontSize:13,fontWeight:600,marginBottom:16},children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"माहिती लोड होत आहे..."]}),O&&Q!==null&&a.jsxs("div",{className:"visit-badge",style:{marginBottom:20,display:"inline-flex"},children:[a.jsx("span",{className:"badge-number",children:Q}),a.jsx("span",{children:Q===1?"हे या नागरिकाचे पहिले भेट असेल 🎉":`हे या नागरिकाचे ${Q}वे भेट असेल`})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"User Name"}),a.jsx("input",{className:"f-input",value:H.username,onChange:we("username"),placeholder:"Username"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Full Name ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",value:H.fullName,onChange:we("fullName"),placeholder:"आपले पूर्ण नाव"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Mobile Number ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",type:"tel",value:H.mobileNumber,onChange:we("mobileNumber"),maxLength:10,placeholder:"10 digit mobile"})]})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Email Address"}),a.jsx("input",{className:"f-input",type:"email",value:H.email,onChange:we("email"),placeholder:"Email (optional)"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Pincode"}),a.jsx("input",{className:"f-input",value:H.pincode,onChange:we("pincode"),maxLength:6,placeholder:"Pincode"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Address ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",value:H.address,onChange:we("address"),placeholder:"पूर्ण पत्ता"})]})]}),a.jsx("p",{className:"form-note",children:"* In order to process your appointment, all fields marked with an asterisk (*) are required."})]}),l===1&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Appointment Scheduling"}),a.jsx("p",{className:"section-sub",children:"Select your preferred date, time slot, and 15-minute appointment window"}),at.length===0?a.jsxs("div",{className:"empty-box",children:[a.jsx("div",{style:{fontSize:36,marginBottom:8},children:"📅"}),a.jsx("p",{style:{color:"#92400e",fontWeight:700,margin:"0 0 4px",fontSize:15},children:"सध्या कोणत्याही dates available नाहीत"}),a.jsx("p",{style:{color:"#a16207",fontSize:13.5,margin:0,fontWeight:500},children:"Admin कडून availability add होण्याची वाट पाहा"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Available Dates ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"date-grid",children:at.map((X,ce)=>a.jsxs("button",{type:"button",className:`date-btn${H.preferredDate===X.date?" sel":""}`,onClick:()=>me(xe=>({...xe,preferredDate:X.date,slotTime:"",slotStart:"",slotEnd:"",microSlot:""})),children:["📅 ",Hl(X.date),a.jsxs("div",{className:"sub",children:[X.timeSlots?.length," slot",X.timeSlots?.length!==1?"s":""," available"]})]},ce))})]}),H.preferredDate&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Select Time Slot ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"slot-grid",children:Yt.map((X,ce)=>{const xe=`${X.start} - ${X.end}`;return a.jsxs("button",{type:"button",className:`slot-btn${H.slotTime===xe?" sel":""}`,onClick:()=>me(ye=>({...ye,slotTime:xe,slotStart:X.start,slotEnd:X.end,microSlot:""})),children:["⏰ ",xe]},ce)})})]}),H.preferredDate&&H.slotTime&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["15-Minute Appointment Slot निवडा ",a.jsx("span",{className:"req",children:"*"})]}),E?a.jsxs("div",{style:{color:"var(--teal)",fontSize:13,fontWeight:600,padding:"12px 0",display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"Slots loading..."]}):C?a.jsx("div",{style:{background:"#fee2e2",border:"1.5px solid #f87171",borderRadius:8,padding:"12px 16px",color:"#dc2626",fontWeight:700,fontSize:13},children:"❌ या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा."}):a.jsxs(a.Fragment,{children:[a.jsxs("select",{className:"f-input",style:{cursor:"pointer"},value:H.microSlot,onChange:X=>{const ce=X.target.value;if(S.find(ye=>ye.microSlot===ce)?.booked){le("❌ हा slot आधीच book झाला आहे. कृपया दुसरा निवडा.","error");return}me(ye=>({...ye,microSlot:ce}))},children:[a.jsx("option",{value:"",children:"-- 15-minute slot निवडा --"}),S.map(X=>a.jsxs("option",{value:X.microSlot,disabled:X.booked,children:[X.booked?"🔴":"🟢"," ",X.microSlot,X.booked?" (Booked)":""]},X.microSlot))]}),S.length>0&&a.jsxs("p",{style:{fontSize:12,color:"var(--text-sm)",marginTop:8,fontWeight:500},children:["🟢 Available  |  🔴 Booked  | ",a.jsx("strong",{children:S.filter(X=>!X.booked).length})," of ",a.jsx("strong",{children:S.length})," slots available"]}),H.microSlot&&a.jsxs("div",{className:"selected-box",style:{marginTop:10,marginBottom:0},children:["✅ तुमचा appointment time: ",a.jsx("strong",{children:H.microSlot})]})]})]}),H.preferredDate&&H.slotTime&&H.microSlot&&a.jsxs("div",{className:"selected-box",children:["📅 ",Hl(H.preferredDate),"  |  ⏰ ",H.slotTime,"  |  🕐 ",H.microSlot]})]}),a.jsxs("div",{className:"info-box",children:["ℹ️ ",a.jsx("strong",{children:"Date निवडण्यासाठी:"})," वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा"]})]}),l===2&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Visit Information"}),a.jsx("p",{className:"section-sub",children:"Provide details about your visit to the Mayor"}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Reason for Visit ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("textarea",{className:"f-input",rows:4,value:H.purpose,onChange:we("purpose"),placeholder:"Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा",style:{resize:"vertical"}})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Number of Visitors ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",type:"number",min:"1",max:"10",value:H.numberOfVisitors,onChange:we("numberOfVisitors")})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Ward ",a.jsx("span",{className:"req",children:"*"})]}),a.jsxs("select",{className:"f-input",value:H.ward,onChange:we("ward"),style:{cursor:"pointer"},children:[a.jsx("option",{value:"",children:"Select Ward"}),["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(X=>a.jsx("option",{children:X},X))]}),H.ward&&O&&a.jsx("p",{style:{fontSize:12,color:"#16a34a",fontWeight:600,marginTop:4},children:"✅ मागील भेटीवरून auto-filled"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Have you visited before? ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"radio-group",children:["No","Yes"].map(X=>a.jsxs("label",{className:`radio-label${H.visitedBefore===(X==="Yes")?" selected":""}`,children:[a.jsx("input",{type:"radio",name:"vb",value:X,checked:H.visitedBefore===(X==="Yes"),onChange:()=>me(ce=>({...ce,visitedBefore:X==="Yes"})),style:{accentColor:"var(--teal)",width:15,height:15}}),X]},X))})]})]})]}),l===3&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Visitor Photo"}),a.jsx("p",{className:"section-sub",children:"Please upload or capture a clear photo for identification at the Mayor's office"}),ge&&!H.photoPreview&&a.jsxs("div",{className:"last-photo-hint",children:[a.jsx("img",{src:`${ge}`,alt:"last visit",style:{width:48,height:48,borderRadius:"50%",objectFit:"cover",border:"2px solid #7ec89a",flexShrink:0},onError:X=>{X.target.style.display="none"}}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontWeight:700,fontSize:13},children:"मागील भेटीचा फोटो उपलब्ध आहे"}),a.jsx("button",{type:"button",style:{marginTop:4,fontSize:12,color:"var(--teal)",fontWeight:700,background:"none",border:"none",cursor:"pointer",padding:0,textDecoration:"underline"},onClick:()=>{me(X=>({...X,photoPreview:ge,visitorPhoto:ge}))},children:"हाच फोटो वापरा ↗"})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,marginBottom:20},children:[a.jsxs("label",{className:"photo-btn-primary",children:["📁 Upload Photo",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:X=>{const ce=X.target.files[0];ce&&me(xe=>({...xe,visitorPhoto:ce,photoPreview:URL.createObjectURL(ce)}))}})]}),a.jsx("button",{type:"button",onClick:fe,className:"photo-btn-secondary",children:"📷 Use Webcam"})]}),N?a.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",border:"2px solid var(--border)",marginBottom:16},children:[a.jsx("button",{type:"button",onClick:Ne,style:{position:"absolute",top:10,right:10,zIndex:10,width:30,height:30,borderRadius:"50%",background:"#ef4444",color:"#fff",border:"none",cursor:"pointer",fontWeight:800},children:"✕"}),a.jsx("video",{ref:L,autoPlay:!0,playsInline:!0,style:{width:"100%",maxHeight:340,objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:j,style:{display:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:16,background:"linear-gradient(transparent,rgba(0,0,0,0.55))",display:"flex",justifyContent:"center"},children:a.jsx("button",{type:"button",onClick:be,style:{padding:"11px 30px",borderRadius:9,border:"none",background:"linear-gradient(135deg,var(--teal),var(--green))",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)"},children:"📸 Capture Photo"})})]}):a.jsx("div",{style:{border:"2.5px dashed #b2d8e4",borderRadius:14,padding:36,textAlign:"center",background:"linear-gradient(135deg,#f7fcfe,#f5fef5)",marginBottom:16,transition:"all .2s"},children:H.photoPreview?a.jsxs(a.Fragment,{children:[a.jsx("img",{src:H.photoPreview,alt:"preview",style:{width:110,height:110,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginBottom:14,boxShadow:"0 4px 20px rgba(76,171,193,0.3)"}}),a.jsx("p",{style:{color:"var(--green)",fontWeight:700,fontSize:14,margin:"0 0 4px"},children:"✅ Photo selected"}),a.jsx("p",{style:{color:"#6a9aaa",fontSize:12.5,margin:0,fontWeight:500},children:'Click "Upload Photo" to change'})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{fontSize:44,marginBottom:12,color:"#b2d8e4"},children:"📷"}),a.jsx("p",{style:{color:"#6a9aaa",fontSize:14,margin:0,fontWeight:600},children:"Upload किंवा camera वापरून photo द्या"})]})}),D&&a.jsx("p",{style:{color:"#ef4444",fontSize:13,marginTop:4,fontWeight:600},children:D})]}),l===4&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Review & Submit"}),a.jsx("p",{className:"section-sub",children:"सर्व माहिती verify करा आणि submit करा"}),a.jsxs("div",{className:"review-grid",children:[[{title:"Personal Info",rows:[["Name",H.fullName],["Mobile",H.mobileNumber],["Email",H.email||"—"],["Address",H.address],["Pincode",H.pincode||"—"]]},{title:"Appointment",rows:[["Date",Hl(H.preferredDate)],["Slot",H.slotTime],["My Time",H.microSlot]]},{title:"Visit Details",rows:[["Purpose",H.purpose],["Visitors",H.numberOfVisitors],["Visited Before",H.visitedBefore?"Yes":"No"],["Ward",H.ward],...Q!==null?[["Visit Number",`#${Q}`]]:[]]}].map((X,ce)=>a.jsxs("div",{className:"review-card",style:{animationDelay:`${ce*80}ms`},children:[a.jsx("div",{className:"review-card-title",children:X.title}),X.rows.map(([xe,ye])=>a.jsxs("div",{className:"review-row",children:[a.jsx("span",{className:"review-key",children:xe}),a.jsx("span",{className:"review-val",children:ye})]},xe))]},ce)),H.photoPreview&&a.jsxs("div",{className:"review-card",style:{textAlign:"center"},children:[a.jsx("div",{className:"review-card-title",children:"Visitor Photo"}),a.jsx("img",{src:H.photoPreview,alt:"v",style:{width:88,height:88,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginTop:8,boxShadow:"0 4px 16px rgba(76,171,193,0.25)"}})]})]}),a.jsx("div",{style:{background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",borderRadius:10,padding:"13px 18px",margin:"16px 0 0",fontSize:13.5,color:"#92400e",fontWeight:600},children:"⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."})]})]},l)}),a.jsxs("div",{className:"book-nav",children:[a.jsx("button",{className:"nav-cancel",onClick:()=>l>0?he():r(-1),children:l>0?"← Back":"CANCEL"}),l<yu.length-1?a.jsx("button",{className:"nav-continue",disabled:re,onClick:ve,children:"CONTINUE →"}):a.jsx("button",{className:"nav-continue",disabled:u,onClick:q,children:u?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Submitting..."]}):"✔ Submit Appointment"})]})]})})]})}function XS(r){return r?new Date(r+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function QS(r){return r?new Date(r+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function JS(r){return r?new Date(r).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}const Eh={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",label:"⏳ Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",label:"✅ Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",label:"❌ Rejected"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",label:"🕰️ Expired"}};function Rh({name:r,photo:o,size:l=40}){const[s,u]=b.useState(!1),f=r?r.split(" ").map(m=>m[0]).join("").toUpperCase().slice(0,2):"?",p=["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"],x=r?r.charCodeAt(0)%p.length:0,h=o?o.startsWith("http")?o.replace("http://localhost:5000","https://jansamvad.saavi.co.in"):`https://jansamvad.saavi.co.in/${o}`:null;return h&&!s?a.jsx("img",{src:h,alt:r,onError:()=>u(!0),style:{width:l,height:l,borderRadius:"50%",objectFit:"cover",border:"2px solid #e2e8f0",flexShrink:0}}):a.jsx("div",{style:{width:l,height:l,borderRadius:"50%",background:p[x],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:l*.35,fontWeight:700,fontFamily:"'DM Sans',sans-serif",flexShrink:0,border:"2px solid rgba(255,255,255,0.3)"},children:f})}function ZS({appt:r,onView:o}){const[l,s]=b.useState(!1),u=b.useRef();return b.useEffect(()=>{const f=p=>{u.current&&!u.current.contains(p.target)&&s(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]),a.jsxs("div",{ref:u,style:{position:"relative",display:"flex",justifyContent:"center"},children:[a.jsx("button",{onClick:f=>{f.stopPropagation(),s(p=>!p)},style:{background:"none",border:"1px solid #e2e8f0",cursor:"pointer",padding:"4px 8px",borderRadius:6,color:"#6b7280",fontSize:18,lineHeight:1,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:f=>{f.target.style.borderColor="#16a34a",f.target.style.color="#16a34a"},onMouseLeave:f=>{f.target.style.borderColor="#e2e8f0",f.target.style.color="#6b7280"},title:"Actions",children:"⋮"}),l&&a.jsx("div",{style:{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:100,minWidth:150,overflow:"hidden"},children:a.jsx("button",{onClick:f=>{f.stopPropagation(),o(r),s(!1)},style:{display:"block",width:"100%",padding:"10px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:13,color:"#374151",fontFamily:"'DM Sans',sans-serif",fontWeight:500},onMouseEnter:f=>f.target.style.background="#f9fafb",onMouseLeave:f=>f.target.style.background="none",children:"👁 View Details"})})]})}const KS=[10,25,50],Dh="160px 1fr 130px 200px 150px 60px";function e4(){const r=mt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[l,s]=b.useState([]),[u,f]=b.useState(!0),[p,x]=b.useState(null),[h,m]=b.useState("all"),[y,v]=b.useState([]),[M,A]=b.useState(!1),[S,z]=b.useState(""),[E,R]=b.useState(1),[C,B]=b.useState(10);b.useEffect(()=>{if(!o){r("/login");return}G()},[]);const G=async()=>{try{f(!0);const P=await zt.get("/citizen/my-appointments",{params:{citizenId:o._id,mobileNumber:o.mobileNumber}});P.data.success&&s(P.data.appointments||[])}catch{}finally{f(!1)}},U=l.filter(P=>h==="all"||P.status===h).filter(P=>{if(!S)return!0;const le=S.toLowerCase();return P.tokenId?.toLowerCase().includes(le)||P.purpose?.toLowerCase().includes(le)||P.fullName?.toLowerCase().includes(le)}),O=Math.max(1,Math.ceil(U.length/C)),$=U.slice((E-1)*C,E*C),Q=P=>Eh[P?.toLowerCase()]||Eh.pending,ue=()=>O<=5?Array.from({length:O},(P,le)=>le+1):E<=3?[1,2,3,"...",O]:E>=O-2?[1,"...",O-2,O-1,O]:[1,"...",E-1,E,E+1,"...",O],ge=()=>x(null);return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
          grid-template-columns: ${Dh};
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
          grid-template-columns: ${Dh};
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
      `}),a.jsx("div",{className:"ma-root",children:a.jsxs("div",{className:"ma-inner",children:[a.jsxs("div",{className:"ma-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"ma-title",children:"My Appointments"}),a.jsxs("p",{className:"ma-sub",children:["Hello,",o?.fullName||`Citizen  ${o?.citizenId||""}`," 👋 — all your appointments are here."]})]}),a.jsxs("div",{className:"ma-actions",children:[a.jsx("button",{className:"ma-icon-btn",title:"Refresh",onClick:G,children:"↻"}),a.jsxs("button",{className:"ma-book-btn",onClick:()=>r("/book-appointment"),children:[a.jsx("span",{style:{fontSize:18,lineHeight:1},children:"+"})," New Appointment"]})]})]}),a.jsxs("div",{className:"filter-search-row",children:[a.jsxs("div",{className:"filter-tabs",children:[a.jsx("span",{className:"filter-label",children:"Status"}),[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"approved",label:"Approved"},{key:"rejected",label:"Rejected"},{key:"expired",label:"Expired"}].map(P=>a.jsxs("button",{className:`ftab${h===P.key?" active":""}`,onClick:()=>{m(P.key),v([]),A(!1),R(1)},children:[P.label," (",P.key==="all"?l.length:l.filter(le=>le.status===P.key).length,")"]},P.key))]}),a.jsxs("div",{className:"search-wrap",children:[a.jsx("span",{className:"search-icon",children:"🔍"}),a.jsx("input",{className:"search-input",type:"text",placeholder:"Search appointment",value:S,onChange:P=>{z(P.target.value),R(1)}})]})]}),a.jsxs("div",{className:"table-card",children:[a.jsx("div",{className:"table-scroll-wrapper",children:a.jsxs("div",{className:"table-scroll-inner",children:[a.jsxs("div",{className:"tbl-head",children:[a.jsxs("div",{className:"tbl-head-cell",children:["# TOKEN ID ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"PURPOSE"}),a.jsxs("div",{className:"tbl-head-cell",children:["DATE ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"SLOT"}),a.jsx("div",{className:"tbl-head-cell",children:"APPOINTMENT_TIME"}),a.jsxs("div",{className:"tbl-head-cell",children:["STATUS ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"ACTIONS"})]}),u?a.jsxs("div",{style:{textAlign:"center",padding:"56px 0"},children:[a.jsx("div",{style:{width:34,height:34,border:"3px solid #e2e8f0",borderTopColor:"#16a34a",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 14px"}}),a.jsx("p",{style:{color:"#94a3b8",fontSize:14},children:"Appointments लोड होत आहेत..."})]}):$.length===0?a.jsxs("div",{className:"empty-box",children:[a.jsx("div",{style:{fontSize:48,marginBottom:14},children:"📅"}),a.jsx("p",{style:{color:"#374151",fontWeight:700,fontSize:16,marginBottom:6},children:h==="all"&&!S?"कोणतेही appointments नाहीत":`No ${h!=="all"?h:""} appointments found`}),a.jsx("p",{style:{color:"#94a3b8",fontSize:14,marginBottom:20},children:h==="all"&&!S?"Book your first appointment to get started.":"Try a different filter or search term."}),h==="all"&&!S&&a.jsx("button",{className:"ma-book-btn",style:{margin:"0 auto",display:"inline-flex"},onClick:()=>r("/book-appointment"),children:"+ Book Appointment"})]}):$.map((P,le)=>{const H=Q(P.status),me=y.includes(le),we=P.purpose?P.purpose.length>40?P.purpose.slice(0,40)+"…":P.purpose:"—";return a.jsxs("div",{className:`tbl-row${me?" row-checked":""}`,style:{animationDelay:`${le*40}ms`},onClick:()=>x(P),children:[a.jsx("div",{className:"cell-token",children:P.tokenId||"—"}),a.jsxs("div",{className:"cell-purpose-wrap",children:[a.jsx(Rh,{name:P.fullName,photo:P.visitorPhoto,size:38}),a.jsxs("div",{className:"cell-purpose-text",children:[a.jsx("div",{className:"purpose-title",children:we}),a.jsx("div",{className:"purpose-sub",children:P.fullName||"नागरिक"})]})]}),a.jsx("div",{className:"cell-date",children:QS(P.preferredDate)}),a.jsx("div",{className:"cell-slot",children:P.slotTime||"—"}),a.jsx("div",{className:"cell-slot",children:P.microSlot||"—"}),a.jsx("div",{children:a.jsx("span",{className:"status-badge",style:{background:H.bg,color:H.color,borderColor:H.border},children:H.label})}),a.jsx("div",{onClick:F=>F.stopPropagation(),children:a.jsx(ZS,{appt:P,onView:x})})]},le)})]})}),!u&&U.length>0&&a.jsxs("div",{className:"tbl-footer",children:[a.jsxs("div",{className:"footer-left",children:[a.jsx("span",{children:"Show"}),a.jsx("select",{className:"page-size-select",value:C,onChange:P=>{B(Number(P.target.value)),R(1)},children:KS.map(P=>a.jsx("option",{value:P,children:P},P))}),a.jsxs("span",{children:["of ",a.jsx("strong",{children:U.length})," results"]}),y.length>0&&a.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:["· ",y.length," selected"]})]}),a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"pg-btn",onClick:()=>R(P=>Math.max(1,P-1)),disabled:E===1,children:a.jsx("span",{className:"pg-arrow",children:"‹"})}),ue().map((P,le)=>P==="..."?a.jsx("button",{className:"pg-btn pg-ellipsis",children:"…"},`ell-${le}`):a.jsx("button",{className:`pg-btn${E===P?" active":""}`,onClick:()=>R(P),children:P},P)),a.jsx("button",{className:"pg-btn",onClick:()=>R(P=>Math.min(O,P+1)),disabled:E===O,children:a.jsx("span",{className:"pg-arrow",children:"›"})})]})]})]})]})}),p&&a.jsx("div",{className:"modal-overlay",onClick:ge,children:a.jsxs("div",{className:"modal-card",onClick:P=>P.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:10,opacity:.6,textTransform:"uppercase",letterSpacing:1},children:"Appointment Details"}),a.jsx("h3",{style:{margin:"4px 0 0",fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"},children:p.tokenId})]}),a.jsx("button",{type:"button",className:"modal-close",onClick:ge,children:"✕"})]}),a.jsxs("div",{className:"modal-body",children:[a.jsx("div",{style:{textAlign:"center",marginBottom:20},children:a.jsx(Rh,{name:p.fullName,photo:p.visitorPhoto,size:80})}),(()=>{const P=Q(p.status);return a.jsx("div",{style:{textAlign:"center",marginBottom:16},children:a.jsx("span",{className:"status-badge",style:{background:P.bg,color:P.color,borderColor:P.border,fontSize:13,padding:"6px 20px"},children:P.label})})})(),[["Name",p.fullName],["Mobile",p.mobileNumber],["Email",p.email||"—"],["Address",p.address||"—"],["Date",XS(p.preferredDate)],["Slot",p.slotTime],["Purpose",p.purpose],["Visitors",p.numberOfVisitors],["Visited Before",p.visitedBefore?"Yes":"No"],["Ward",p.ward||"—"],["Booked On",JS(p.createdAt)]].map(([P,le])=>le?a.jsxs("div",{className:"modal-row",children:[a.jsx("span",{className:"modal-key",children:P}),a.jsx("span",{className:"modal-val",children:le})]},P):null),p.adminNote&&a.jsxs("div",{style:{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:13,color:"#92400e"},children:[a.jsx("strong",{children:"Admin Note:"})," ",p.adminNote]}),p.replyDocument&&a.jsxs("div",{style:{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:13},children:[a.jsx("p",{style:{color:"#166534",fontWeight:700,margin:"0 0 6px"},children:"📎 Document from Admin"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("button",{onClick:()=>{if(p.replyDocument?.toLowerCase().includes(".pdf")||p.replyDocument?.toLowerCase().includes("inward_pdf")){const le=`https://docs.google.com/gview?url=${encodeURIComponent(p.replyDocument)}&embedded=true`;window.open(le,"_blank")}else window.open(p.replyDocument,"_blank")},style:{color:"#16a34a",fontWeight:600,fontSize:13,background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0},children:"📄 View Document"}),a.jsx("button",{onClick:async()=>{try{const le=await(await fetch(p.replyDocument)).blob(),H=p.replyDocument?.toLowerCase().includes(".pdf")||p.replyDocument?.toLowerCase().includes("inward_pdf"),me=new Blob([le],{type:H?"application/pdf":le.type}),we=window.URL.createObjectURL(me),F=document.createElement("a");F.href=we,F.download=H?"document.pdf":"document",document.body.appendChild(F),F.click(),document.body.removeChild(F),window.URL.revokeObjectURL(we)}catch(P){console.error("Download failed",P)}},style:{color:"#64748b",background:"none",border:"none",cursor:"pointer",fontSize:16},title:"Download",children:"⬇"})]})]}),p.qrCode&&a.jsxs("div",{style:{textAlign:"center",marginTop:20,paddingTop:16,borderTop:"1px solid #f1f5f9"},children:[a.jsx("p",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"QR Code — भेटीच्या दिवशी दाखवा"}),a.jsx("img",{src:p.qrCode,alt:"QR",style:{width:130,height:130}})]})]})]})})]})}function t4(){const r=mt(),[o,l]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",address:"",pincode:"",password:"",confirmPassword:""}),[s,u]=b.useState(!1),[f,p]=b.useState(""),[x,h]=b.useState(!1),[m,y]=b.useState(!1),[v,M]=b.useState(!1),[A,S]=b.useState(!1),[z,E]=b.useState("form"),[R,C]=b.useState(["","","","","",""]),[B,G]=b.useState(""),[U,O]=b.useState(0),[$,Q]=b.useState(!1),[ue,ge]=b.useState(!1),P=b.useRef([]),le=K=>L=>l(j=>({...j,[K]:L.target.value}));b.useEffect(()=>{const K=setTimeout(()=>S(!0),60);return()=>clearTimeout(K)},[]),b.useEffect(()=>{if(U<=0){Q(!0);return}const K=setTimeout(()=>O(L=>L-1),1e3);return()=>clearTimeout(K)},[U]);const H=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,me=async K=>{if(K&&K.preventDefault&&K.preventDefault(),p(""),!o.fullName||!o.mobileNumber||!o.password){p("All required fields must be filled ❌");return}if(!/^\d{10}$/.test(o.mobileNumber)){p("Mobile number must be 10 digits ❌");return}if(o.password.length<6){p("Password must be at least 6 characters ❌");return}if(o.password!==o.confirmPassword){p("Passwords do not match ❌");return}try{if(ge(!0),(await zt.post("/citizen/check-mobile",{mobileNo:o.mobileNumber})).data.success){p("हा mobile number already registered आहे ❌ Please Login करा."),ge(!1);return}}catch(N){if(N?.response?.status!==404){p("Server Error. Please try again ❌"),ge(!1);return}}const L=Math.floor(1e5+Math.random()*9e5).toString();G(L),O(60),Q(!1),C(["","","","","",""]);const j=`Dear Citizen ${L} is OTP for VVCMC Jan Samvaad Portal login for citizen registration.VVCMC SAAVI INFINET`,T=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379312&number=${o.mobileNumber}&message=${encodeURIComponent(j)}`;fetch(T,{method:"GET",mode:"no-cors"}).catch(()=>{}),E("otp"),ge(!1),setTimeout(()=>P.current[0]?.focus(),120)},we=async()=>{const K=R.join("");if(K.length<6){p("Enter 6 digit OTP ❌");return}if(U<=0){p("OTP expired! Please resend ❌");return}if(K!==B){p("Wrong OTP! Please try again ❌"),C(["","","","","",""]),setTimeout(()=>P.current[0]?.focus(),50);return}try{u(!0),p("");const L=await zt.post("/citizen/register",{fullName:o.fullName,userName:o.userName,mobileNumber:o.mobileNumber,address:o.address,pincode:o.pincode,email:o.email,password:o.password});if(!L.data.success){p(L.data.message||"Registration failed ❌");return}h(!0),setTimeout(()=>r("/citizen-login"),2e3)}catch(L){p(L?.response?.data?.message||"Server Error ❌")}finally{u(!1)}},F=(K,L)=>{if(!/^[0-9]?$/.test(L))return;const j=[...R];j[K]=L,C(j),L&&K<5&&P.current[K+1]?.focus()},ie=(K,L)=>{L.key==="Backspace"&&!R[K]&&K>0&&P.current[K-1]?.focus()},pe=K=>{K.preventDefault();const L=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...R];L.split("").forEach((T,N)=>{j[N]=T}),C(j),P.current[Math.min(L.length,5)]?.focus()};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"rp-root",children:[a.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${ro})`}}),a.jsx("div",{className:"rp-overlay"}),a.jsx("div",{className:"rp-stripe"}),a.jsxs("div",{className:"rp-wrapper",style:{opacity:A?1:0,transform:A?"translateX(0)":"translateX(160px)"},children:[a.jsxs("div",{className:"rp-card",children:[a.jsxs("div",{className:"rp-logo-row",children:[a.jsx("img",{src:Zi,alt:"VVCMC",className:"rp-logo-img",style:{objectPosition:"top center"}}),a.jsxs("div",{className:"rp-logo-texts",children:[a.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"rp-page-title",children:"Account तयार करा"}),a.jsx("p",{className:"rp-page-sub",children:"Mayor Appointment बुक करण्यासाठी register करा"}),x?a.jsxs("div",{className:"rp-success",children:["✅ Registration successful!",a.jsx("br",{}),a.jsx("span",{style:{fontSize:13,fontWeight:400,opacity:.8},children:"Login page वर redirect होत आहे..."})]}):z==="otp"?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{E("form"),C(["","","","","",""]),p("")},children:"← Go Back"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:["OTP sent to"," ",a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",o.mobileNumber.slice(-3)]})]}),f&&a.jsxs("div",{className:"rp-error",children:["⚠️ ",f]}),a.jsx("div",{className:"otp-row",onPaste:pe,children:R.map((K,L)=>a.jsx("input",{ref:j=>P.current[L]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>F(L,j.target.value),onKeyDown:j=>ie(L,j)},L))}),a.jsxs("div",{className:"otp-timer",children:[U>0?a.jsxs(a.Fragment,{children:["OTP expires in:"," ",a.jsx("strong",{style:{color:U<=15?"#ff6b6b":"#CE9A54"},children:H(U)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP expired!"}),a.jsxs("div",{style:{marginTop:6},children:["Did not receive OTP?"," ",a.jsx("button",{className:"resend-btn",onClick:me,disabled:!$,children:"Resend OTP"})]})]}),a.jsx("button",{className:"rp-sbtn teal",onClick:we,disabled:R.join("").length<6||s,children:s?"⏳ Registering...":"✅ Verify & Register"})]}):a.jsxs(a.Fragment,{children:[f&&a.jsxs("div",{className:"rp-error",children:["⚠️ ",f]}),a.jsxs("form",{onSubmit:me,children:[a.jsxs("div",{className:"rp-grid",children:[a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Full Name ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"👤"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"आपले पूर्ण नाव",value:o.fullName,onChange:le("fullName"),autoFocus:!0})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"User Name"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🪪"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Username",value:o.userName,onChange:le("userName")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Mobile Number ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📱"}),a.jsx("input",{className:"rp-finput",type:"tel",placeholder:"10 digit mobile",value:o.mobileNumber,onChange:le("mobileNumber"),maxLength:10})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Email"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"✉️"}),a.jsx("input",{className:"rp-finput",type:"email",placeholder:"Email (optional)",value:o.email,onChange:le("email")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Address"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🏠"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Address",value:o.address,onChange:le("address")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Pincode"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📍"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Pincode",value:o.pincode,onChange:le("pincode"),maxLength:6})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Password ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔒"}),a.jsx("input",{className:"rp-finput",type:m?"text":"password",placeholder:"Min. 6 characters",value:o.password,onChange:le("password"),style:{paddingRight:38}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>y(!m),tabIndex:-1,children:m?"🙈":"👁️"})]}),a.jsx("div",{className:"rp-input-hint",children:"किमान 6 characters"})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Confirm Password ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔐"}),a.jsx("input",{className:"rp-finput",type:v?"text":"password",placeholder:"Password परत टाका",value:o.confirmPassword,onChange:le("confirmPassword"),style:{paddingRight:38}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>M(!v),tabIndex:-1,children:v?"🙈":"👁️"})]})]})]}),a.jsx("button",{type:"submit",className:"rp-sbtn",disabled:ue||!o.fullName||!o.mobileNumber||!o.password||!o.confirmPassword,children:ue?"⏳ Sending OTP...":"📱 Send OTP & Register"})]}),a.jsxs("p",{className:"rp-signin",children:["Already have an account?",a.jsx("span",{className:"rp-link",onClick:()=>r("/login"),children:"Login"})]})]})]}),a.jsxs("div",{className:"rp-cfooter",children:[a.jsx("div",{className:"rp-cfdot"}),a.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"rp-mayor-panel",style:{opacity:A?1:0,transform:A?"translate(0,0)":"translate(80px,-60px)"},children:[a.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"rp-mp-icon tr",children:"🤝"}),a.jsx("span",{className:"rp-mp-icon bl",children:"🏢"}),a.jsx("span",{className:"rp-mp-icon br",children:"🏙️"}),a.jsxs("div",{className:"rp-mayor-photo-wrap",children:[a.jsx("div",{className:"rp-mayor-ring",children:a.jsx("img",{src:Zi,alt:"Mayor",className:"rp-mayor-photo"})}),a.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-mayor-bar-wrap",children:a.jsx("div",{className:"rp-mayor-bar"})}),a.jsxs("div",{className:"rp-mayor-info",children:[a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"📅"}),a.jsx("span",{children:"Appointment सहज बुक करा"})]}),a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"🔔"}),a.jsx("span",{children:"SMS द्वारे notification मिळवा"})]}),a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"🛡️"}),a.jsx("span",{children:"Secure Government Portal"})]})]})]})]})]})]})}function _h({children:r}){return localStorage.getItem("citizenUser")?r:a.jsx(Gu,{to:"/citizen-login",replace:!0})}function a4(){const{isLoggedIn:r}=xs(l=>l.auth),o=localStorage.getItem("authUser");return r||o?a.jsx(xS,{}):a.jsx(Gu,{to:"/login",replace:!0})}function n4(){const r=ao();return b.useEffect(()=>{const o=localStorage.getItem("authUser");o&&r(rs(JSON.parse(o)))},[r]),a.jsxs(a.Fragment,{children:[a.jsx(Lw,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),a.jsxs(U2,{children:[a.jsx(ot,{path:"/",element:a.jsxs(a.Fragment,{children:[a.jsx(zn,{}),a.jsx(Ah,{}),a.jsx(Tn,{})]})}),a.jsx(ot,{path:"/home",element:a.jsxs(a.Fragment,{children:[a.jsx(zn,{}),a.jsx(Ah,{}),a.jsx(Tn,{})]})}),a.jsx(ot,{path:"/login",element:a.jsxs(a.Fragment,{children:[a.jsx(zn,{}),a.jsx(Hw,{}),a.jsx(Tn,{})]})}),a.jsx(ot,{path:"/admin-login",element:a.jsxs(a.Fragment,{children:[a.jsx(zn,{}),a.jsx(Uw,{}),a.jsx(Tn,{})]})}),a.jsx(ot,{path:"/citizen-login",element:a.jsxs(a.Fragment,{children:[a.jsx(zn,{}),a.jsx(Ww,{}),a.jsx(Tn,{})]})}),a.jsx(ot,{path:"/citizen-registration",element:a.jsxs(a.Fragment,{children:[a.jsx(zn,{}),a.jsx(t4,{}),a.jsx(Tn,{})]})}),a.jsx(ot,{path:"/register",element:a.jsx($w,{})}),a.jsx(ot,{path:"/book-appointment",element:a.jsx(_h,{children:a.jsxs(a.Fragment,{children:[a.jsx(zn,{}),a.jsx(GS,{}),a.jsx(Tn,{})]})})}),a.jsx(ot,{path:"/my-appointments",element:a.jsx(_h,{children:a.jsxs(a.Fragment,{children:[a.jsx(zn,{}),a.jsx(e4,{}),a.jsx(Tn,{})]})})}),a.jsxs(ot,{element:a.jsx(a4,{}),children:[a.jsx(ot,{path:"/dashboard",element:a.jsx(Jw,{})}),a.jsx(ot,{path:"/meetings",element:a.jsx($S,{})}),a.jsx(ot,{path:"/meetingsubjects",element:a.jsx(hu,{})}),a.jsx(ot,{path:"/proceedingsmeeting/:meetingId",element:a.jsx(hu,{})}),a.jsx(ot,{path:"/proceedingsmeeting",element:a.jsx(hu,{})}),a.jsx(ot,{path:"/allapplication",element:a.jsx(SS,{})}),a.jsx(ot,{path:"/allapplicationcitizens",element:a.jsx(US,{})}),a.jsx(ot,{path:"/availability",element:a.jsx(OS,{})}),a.jsx(ot,{path:"/Jansanwadappform",element:a.jsx(nb,{})}),a.jsx(ot,{path:"/users",element:a.jsx(zS,{})})]}),a.jsx(ot,{path:"*",element:a.jsx(Gu,{to:"/",replace:!0})})]})]})}const r4=p5({reducer:{auth:T5}});Ly.createRoot(document.getElementById("root")).render(a.jsx(Le.StrictMode,{children:a.jsx(_v,{store:r4,children:a.jsx(sv,{children:a.jsx(n4,{})})})}));
