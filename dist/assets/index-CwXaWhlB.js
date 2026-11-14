(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();function Cx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bu={exports:{}},ao={};var Wh;function Cv(){if(Wh)return ao;Wh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(s,d,p){var f=null;if(p!==void 0&&(f=""+p),d.key!==void 0&&(f=""+d.key),"key"in d){p={};for(var x in d)x!=="key"&&(p[x]=d[x])}else p=d;return d=p.ref,{$$typeof:n,type:s,key:f,ref:d!==void 0?d:null,props:p}}return ao.Fragment=o,ao.jsx=l,ao.jsxs=l,ao}var Fh;function Tv(){return Fh||(Fh=1,bu.exports=Cv()),bu.exports}var a=Tv(),yu={exports:{}},Ae={};var Hh;function zv(){if(Hh)return Ae;Hh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),f=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),C=Symbol.iterator;function A(j){return j===null||typeof j!="object"?null:(j=C&&j[C]||j["@@iterator"],typeof j=="function"?j:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,D={};function R(j,T,q){this.props=j,this.context=T,this.refs=D,this.updater=q||k}R.prototype.isReactComponent={},R.prototype.setState=function(j,T){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,T,"setState")},R.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function w(){}w.prototype=R.prototype;function O(j,T,q){this.props=j,this.context=T,this.refs=D,this.updater=q||k}var Y=O.prototype=new w;Y.constructor=O,z(Y,R.prototype),Y.isPureReactComponent=!0;var J=Array.isArray;function E(){}var F={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function de(j,T,q){var oe=q.ref;return{$$typeof:n,type:j,key:T,ref:oe!==void 0?oe:null,props:q}}function he(j,T){return de(j.type,T,j.props)}function G(j){return typeof j=="object"&&j!==null&&j.$$typeof===n}function pe(j){var T={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(q){return T[q]})}var $=/\/+/g;function me(j,T){return typeof j=="object"&&j!==null&&j.key!=null?pe(""+j.key):T.toString(36)}function we(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(E,E):(j.status="pending",j.then(function(T){j.status==="pending"&&(j.status="fulfilled",j.value=T)},function(T){j.status==="pending"&&(j.status="rejected",j.reason=T)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function W(j,T,q,oe,P){var ge=typeof j;(ge==="undefined"||ge==="boolean")&&(j=null);var be=!1;if(j===null)be=!0;else switch(ge){case"bigint":case"string":case"number":be=!0;break;case"object":switch(j.$$typeof){case n:case o:be=!0;break;case y:return be=j._init,W(be(j._payload),T,q,oe,P)}}if(be)return P=P(j),be=oe===""?"."+me(j,0):oe,J(P)?(q="",be!=null&&(q=be.replace($,"$&/")+"/"),W(P,T,q,"",function(et){return et})):P!=null&&(G(P)&&(P=he(P,q+(P.key==null||j&&j.key===P.key?"":(""+P.key).replace($,"$&/")+"/")+be)),T.push(P)),1;be=0;var ke=oe===""?".":oe+":";if(J(j))for(var Ce=0;Ce<j.length;Ce++)oe=j[Ce],ge=ke+me(oe,Ce),be+=W(oe,T,q,ge,P);else if(Ce=A(j),typeof Ce=="function")for(j=Ce.call(j),Ce=0;!(oe=j.next()).done;)oe=oe.value,ge=ke+me(oe,Ce++),be+=W(oe,T,q,ge,P);else if(ge==="object"){if(typeof j.then=="function")return W(we(j),T,q,oe,P);throw T=String(j),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return be}function ie(j,T,q){if(j==null)return j;var oe=[],P=0;return W(j,oe,"","",function(ge){return T.call(q,ge,P++)}),oe}function fe(j){if(j._status===-1){var T=j._result;T=T(),T.then(function(q){(j._status===0||j._status===-1)&&(j._status=1,j._result=q)},function(q){(j._status===0||j._status===-1)&&(j._status=2,j._result=q)}),j._status===-1&&(j._status=0,j._result=T)}if(j._status===1)return j._result.default;throw j._result}var K=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},B={map:ie,forEach:function(j,T,q){ie(j,function(){T.apply(this,arguments)},q)},count:function(j){var T=0;return ie(j,function(){T++}),T},toArray:function(j){return ie(j,function(T){return T})||[]},only:function(j){if(!G(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return Ae.Activity=v,Ae.Children=B,Ae.Component=R,Ae.Fragment=l,Ae.Profiler=d,Ae.PureComponent=O,Ae.StrictMode=s,Ae.Suspense=h,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(j){return F.H.useMemoCache(j)}},Ae.cache=function(j){return function(){return j.apply(null,arguments)}},Ae.cacheSignal=function(){return null},Ae.cloneElement=function(j,T,q){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var oe=z({},j.props),P=j.key;if(T!=null)for(ge in T.key!==void 0&&(P=""+T.key),T)!V.call(T,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&T.ref===void 0||(oe[ge]=T[ge]);var ge=arguments.length-2;if(ge===1)oe.children=q;else if(1<ge){for(var be=Array(ge),ke=0;ke<ge;ke++)be[ke]=arguments[ke+2];oe.children=be}return de(j.type,P,oe)},Ae.createContext=function(j){return j={$$typeof:f,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:p,_context:j},j},Ae.createElement=function(j,T,q){var oe,P={},ge=null;if(T!=null)for(oe in T.key!==void 0&&(ge=""+T.key),T)V.call(T,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(P[oe]=T[oe]);var be=arguments.length-2;if(be===1)P.children=q;else if(1<be){for(var ke=Array(be),Ce=0;Ce<be;Ce++)ke[Ce]=arguments[Ce+2];P.children=ke}if(j&&j.defaultProps)for(oe in be=j.defaultProps,be)P[oe]===void 0&&(P[oe]=be[oe]);return de(j,ge,P)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(j){return{$$typeof:x,render:j}},Ae.isValidElement=G,Ae.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:fe}},Ae.memo=function(j,T){return{$$typeof:m,type:j,compare:T===void 0?null:T}},Ae.startTransition=function(j){var T=F.T,q={};F.T=q;try{var oe=j(),P=F.S;P!==null&&P(q,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(E,K)}catch(ge){K(ge)}finally{T!==null&&q.types!==null&&(T.types=q.types),F.T=T}},Ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Ae.use=function(j){return F.H.use(j)},Ae.useActionState=function(j,T,q){return F.H.useActionState(j,T,q)},Ae.useCallback=function(j,T){return F.H.useCallback(j,T)},Ae.useContext=function(j){return F.H.useContext(j)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(j,T){return F.H.useDeferredValue(j,T)},Ae.useEffect=function(j,T){return F.H.useEffect(j,T)},Ae.useEffectEvent=function(j){return F.H.useEffectEvent(j)},Ae.useId=function(){return F.H.useId()},Ae.useImperativeHandle=function(j,T,q){return F.H.useImperativeHandle(j,T,q)},Ae.useInsertionEffect=function(j,T){return F.H.useInsertionEffect(j,T)},Ae.useLayoutEffect=function(j,T){return F.H.useLayoutEffect(j,T)},Ae.useMemo=function(j,T){return F.H.useMemo(j,T)},Ae.useOptimistic=function(j,T){return F.H.useOptimistic(j,T)},Ae.useReducer=function(j,T,q){return F.H.useReducer(j,T,q)},Ae.useRef=function(j){return F.H.useRef(j)},Ae.useState=function(j){return F.H.useState(j)},Ae.useSyncExternalStore=function(j,T,q){return F.H.useSyncExternalStore(j,T,q)},Ae.useTransition=function(){return F.H.useTransition()},Ae.version="19.2.3",Ae}var $h;function Fs(){return $h||($h=1,yu.exports=zv()),yu.exports}var b=Fs();const Fe=Cx(b);var vu={exports:{}},no={},ju={exports:{}},wu={};var Ph;function Av(){return Ph||(Ph=1,(function(n){function o(W,ie){var fe=W.length;W.push(ie);e:for(;0<fe;){var K=fe-1>>>1,B=W[K];if(0<d(B,ie))W[K]=ie,W[fe]=B,fe=K;else break e}}function l(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var ie=W[0],fe=W.pop();if(fe!==ie){W[0]=fe;e:for(var K=0,B=W.length,j=B>>>1;K<j;){var T=2*(K+1)-1,q=W[T],oe=T+1,P=W[oe];if(0>d(q,fe))oe<B&&0>d(P,q)?(W[K]=P,W[oe]=fe,K=oe):(W[K]=q,W[T]=fe,K=T);else if(oe<B&&0>d(P,fe))W[K]=P,W[oe]=fe,K=oe;else break e}}return ie}function d(W,ie){var fe=W.sortIndex-ie.sortIndex;return fe!==0?fe:W.id-ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var f=Date,x=f.now();n.unstable_now=function(){return f.now()-x}}var h=[],m=[],y=1,v=null,C=3,A=!1,k=!1,z=!1,D=!1,R=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function Y(W){for(var ie=l(m);ie!==null;){if(ie.callback===null)s(m);else if(ie.startTime<=W)s(m),ie.sortIndex=ie.expirationTime,o(h,ie);else break;ie=l(m)}}function J(W){if(z=!1,Y(W),!k)if(l(h)!==null)k=!0,E||(E=!0,pe());else{var ie=l(m);ie!==null&&we(J,ie.startTime-W)}}var E=!1,F=-1,V=5,de=-1;function he(){return D?!0:!(n.unstable_now()-de<V)}function G(){if(D=!1,E){var W=n.unstable_now();de=W;var ie=!0;try{e:{k=!1,z&&(z=!1,w(F),F=-1),A=!0;var fe=C;try{t:{for(Y(W),v=l(h);v!==null&&!(v.expirationTime>W&&he());){var K=v.callback;if(typeof K=="function"){v.callback=null,C=v.priorityLevel;var B=K(v.expirationTime<=W);if(W=n.unstable_now(),typeof B=="function"){v.callback=B,Y(W),ie=!0;break t}v===l(h)&&s(h),Y(W)}else s(h);v=l(h)}if(v!==null)ie=!0;else{var j=l(m);j!==null&&we(J,j.startTime-W),ie=!1}}break e}finally{v=null,C=fe,A=!1}ie=void 0}}finally{ie?pe():E=!1}}}var pe;if(typeof O=="function")pe=function(){O(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,me=$.port2;$.port1.onmessage=G,pe=function(){me.postMessage(null)}}else pe=function(){R(G,0)};function we(W,ie){F=R(function(){W(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_next=function(W){switch(C){case 1:case 2:case 3:var ie=3;break;default:ie=C}var fe=C;C=ie;try{return W()}finally{C=fe}},n.unstable_requestPaint=function(){D=!0},n.unstable_runWithPriority=function(W,ie){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var fe=C;C=W;try{return ie()}finally{C=fe}},n.unstable_scheduleCallback=function(W,ie,fe){var K=n.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?K+fe:K):fe=K,W){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=fe+B,W={id:y++,callback:ie,priorityLevel:W,startTime:fe,expirationTime:B,sortIndex:-1},fe>K?(W.sortIndex=fe,o(m,W),l(h)===null&&W===l(m)&&(z?(w(F),F=-1):z=!0,we(J,fe-K))):(W.sortIndex=B,o(h,W),k||A||(k=!0,E||(E=!0,pe()))),W},n.unstable_shouldYield=he,n.unstable_wrapCallback=function(W){var ie=C;return function(){var fe=C;C=ie;try{return W.apply(this,arguments)}finally{C=fe}}}})(wu)),wu}var Ih;function Ev(){return Ih||(Ih=1,ju.exports=Av()),ju.exports}var Su={exports:{}},Et={};var Yh;function Rv(){if(Yh)return Et;Yh=1;var n=Fs();function o(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(h,m,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:v==null?null:""+v,children:h,containerInfo:m,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Et.createPortal=function(h,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(o(299));return p(h,m,null,y)},Et.flushSync=function(h){var m=f.T,y=s.p;try{if(f.T=null,s.p=2,h)return h()}finally{f.T=m,s.p=y,s.d.f()}},Et.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(h,m))},Et.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},Et.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var y=m.as,v=x(y,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:C,fetchPriority:A}):y==="script"&&s.d.X(h,{crossOrigin:v,integrity:C,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Et.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=x(m.as,m.crossOrigin);s.d.M(h,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(h)},Et.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,v=x(y,m.crossOrigin);s.d.L(h,y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Et.preloadModule=function(h,m){if(typeof h=="string")if(m){var y=x(m.as,m.crossOrigin);s.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(h)},Et.requestFormReset=function(h){s.d.r(h)},Et.unstable_batchedUpdates=function(h,m){return h(m)},Et.useFormState=function(h,m,y){return f.H.useFormState(h,m,y)},Et.useFormStatus=function(){return f.H.useHostTransitionStatus()},Et.version="19.2.3",Et}var Vh;function Dv(){if(Vh)return Su.exports;Vh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Su.exports=Rv(),Su.exports}var qh;function Mv(){if(qh)return no;qh=1;var n=Ev(),o=Fs(),l=Dv();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(p(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(s(188));return t!==e?null:e}for(var i=e,r=t;;){var c=i.return;if(c===null)break;var u=c.alternate;if(u===null){if(r=c.return,r!==null){i=r;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===i)return h(c),e;if(u===r)return h(c),t;u=u.sibling}throw Error(s(188))}if(i.return!==r.return)i=c,r=u;else{for(var g=!1,S=c.child;S;){if(S===i){g=!0,i=c,r=u;break}if(S===r){g=!0,r=c,i=u;break}S=S.sibling}if(!g){for(S=u.child;S;){if(S===i){g=!0,i=u,r=c;break}if(S===r){g=!0,r=u,i=c;break}S=S.sibling}if(!g)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),O=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case R:return"Profiler";case D:return"StrictMode";case J:return"Suspense";case E:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case O:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case V:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var we=Array.isArray,W=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},K=[],B=-1;function j(e){return{current:e}}function T(e){0>B||(e.current=K[B],K[B]=null,B--)}function q(e,t){B++,K[B]=e.current,e.current=t}var oe=j(null),P=j(null),ge=j(null),be=j(null);function ke(e,t){switch(q(ge,t),q(P,e),q(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sh(t),e=ch(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(oe),q(oe,e)}function Ce(){T(oe),T(P),T(ge)}function et(e){e.memoizedState!==null&&q(be,e);var t=oe.current,i=ch(t,e.type);t!==i&&(q(P,e),q(oe,i))}function tt(e){P.current===e&&(T(oe),T(P)),be.current===e&&(T(be),Zr._currentValue=fe)}var Xt,Lt;function le(e){if(Xt===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Xt=t&&t[1]||"",Lt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+e+Lt}var je=!1;function X(e,t){if(!e||je)return"";je=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var ue=function(){throw Error()};if(Object.defineProperty(ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ue,[])}catch(ae){var ee=ae}Reflect.construct(e,[],ue)}else{try{ue.call()}catch(ae){ee=ae}e.call(ue.prototype)}}else{try{throw Error()}catch(ae){ee=ae}(ue=e())&&typeof ue.catch=="function"&&ue.catch(function(){})}}catch(ae){if(ae&&ee&&typeof ae.stack=="string")return[ae.stack,ee.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],S=u[1];if(g&&S){var _=g.split(`
`),Z=S.split(`
`);for(c=r=0;r<_.length&&!_[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(r===_.length||c===Z.length)for(r=_.length-1,c=Z.length-1;1<=r&&0<=c&&_[r]!==Z[c];)c--;for(;1<=r&&0<=c;r--,c--)if(_[r]!==Z[c]){if(r!==1||c!==1)do if(r--,c--,0>c||_[r]!==Z[c]){var re=`
`+_[r].replace(" at new "," at ");return e.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",e.displayName)),re}while(1<=r&&0<=c);break}}}finally{je=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?le(i):""}function M(e,t){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==t&&t!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return X(e.type,!1);case 11:return X(e.type.render,!1);case 1:return X(e.type,!0);case 31:return le("Activity");default:return""}}function L(e){try{var t="",i=null;do t+=M(e,i),i=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ne=Object.prototype.hasOwnProperty,ce=n.unstable_scheduleCallback,xe=n.unstable_cancelCallback,Ye=n.unstable_shouldYield,bt=n.unstable_requestPaint,Ke=n.unstable_now,Dt=n.unstable_getCurrentPriorityLevel,St=n.unstable_ImmediatePriority,ze=n.unstable_UserBlockingPriority,it=n.unstable_NormalPriority,Bn=n.unstable_LowPriority,pi=n.unstable_IdlePriority,Ca=n.log,Ln=n.unstable_setDisableYieldValue,Un=null,pt=null;function ln(e){if(typeof Ca=="function"&&Ln(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(Un,e)}catch{}}var Jt=Math.clz32?Math.clz32:p1,d1=Math.log,u1=Math.LN2;function p1(e){return e>>>=0,e===0?32:31-(d1(e)/u1|0)|0}var Lo=256,Uo=262144,Wo=4194304;function Wn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fo(e,t,i){var r=e.pendingLanes;if(r===0)return 0;var c=0,u=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var S=r&134217727;return S!==0?(r=S&~u,r!==0?c=Wn(r):(g&=S,g!==0?c=Wn(g):i||(i=S&~e,i!==0&&(c=Wn(i))))):(S=r&~u,S!==0?c=Wn(S):g!==0?c=Wn(g):i||(i=r&~e,i!==0&&(c=Wn(i)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,i=t&-t,u>=i||u===32&&(i&4194048)!==0)?t:c}function ur(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function f1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $p(){var e=Wo;return Wo<<=1,(Wo&62914560)===0&&(Wo=4194304),e}function oc(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function pr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function g1(e,t,i,r,c,u){var g=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var S=e.entanglements,_=e.expirationTimes,Z=e.hiddenUpdates;for(i=g&~i;0<i;){var re=31-Jt(i),ue=1<<re;S[re]=0,_[re]=-1;var ee=Z[re];if(ee!==null)for(Z[re]=null,re=0;re<ee.length;re++){var ae=ee[re];ae!==null&&(ae.lane&=-536870913)}i&=~ue}r!==0&&Pp(e,r,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(g&~t))}function Pp(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Jt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|i&261930}function Ip(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-Jt(i),c=1<<r;c&t|e[r]&t&&(e[r]|=t),i&=~c}}function Yp(e,t){var i=t&-t;return i=(i&42)!==0?1:lc(i),(i&(e.suspendedLanes|t))!==0?0:i}function lc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vp(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:Dh(e.type))}function qp(e,t){var i=ie.p;try{return ie.p=e,t()}finally{ie.p=i}}var sn=Math.random().toString(36).slice(2),kt="__reactFiber$"+sn,Ut="__reactProps$"+sn,fi="__reactContainer$"+sn,cc="__reactEvents$"+sn,m1="__reactListeners$"+sn,h1="__reactHandles$"+sn,Gp="__reactResources$"+sn,fr="__reactMarker$"+sn;function dc(e){delete e[kt],delete e[Ut],delete e[cc],delete e[m1],delete e[h1]}function gi(e){var t=e[kt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[fi]||i[kt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=hh(e);e!==null;){if(i=e[kt])return i;e=hh(e)}return t}e=i,i=e.parentNode}return null}function mi(e){if(e=e[kt]||e[fi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function hi(e){var t=e[Gp];return t||(t=e[Gp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function jt(e){e[fr]=!0}var Xp=new Set,Jp={};function Fn(e,t){xi(e,t),xi(e+"Capture",t)}function xi(e,t){for(Jp[e]=t,e=0;e<t.length;e++)Xp.add(t[e])}var x1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qp={},Zp={};function b1(e){return ne.call(Zp,e)?!0:ne.call(Qp,e)?!1:x1.test(e)?Zp[e]=!0:(Qp[e]=!0,!1)}function Ho(e,t,i){if(b1(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function $o(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function Oa(e,t,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+r)}}function la(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function y1(e,t,i){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(g){i=""+g,u.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uc(e){if(!e._valueTracker){var t=Kp(e)?"checked":"value";e._valueTracker=y1(e,t,""+e[t])}}function ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=Kp(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}function Po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var v1=/[\n"\\]/g;function sa(e){return e.replace(v1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pc(e,t,i,r,c,u,g,S){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+la(t)):e.value!==""+la(t)&&(e.value=""+la(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?fc(e,g,la(t)):i!=null?fc(e,g,la(i)):r!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+la(S):e.removeAttribute("name")}function tf(e,t,i,r,c,u,g,S){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){uc(e);return}i=i!=null?""+la(i):"",t=t!=null?""+la(t):i,S||t===e.value||(e.value=t),e.defaultValue=t}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=S?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),uc(e)}function fc(e,t,i){t==="number"&&Po(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function bi(e,t,i,r){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&r&&(e[i].defaultSelected=!0)}else{for(i=""+la(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function af(e,t,i){if(t!=null&&(t=""+la(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+la(i):""}function nf(e,t,i,r){if(t==null){if(r!=null){if(i!=null)throw Error(s(92));if(we(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),t=i}i=la(t),e.defaultValue=i,r=e.textContent,r===i&&r!==""&&r!==null&&(e.value=r),uc(e)}function yi(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var j1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rf(e,t,i){var r=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,i):typeof i!="number"||i===0||j1.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function of(e,t,i){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in t)r=t[c],t.hasOwnProperty(c)&&i[c]!==r&&rf(e,c,r)}else for(var u in t)t.hasOwnProperty(u)&&rf(e,u,t[u])}function gc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),S1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return S1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var mc=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vi=null,ji=null;function lf(e){var t=mi(e);if(t&&(e=t.stateNode)){var i=e[Ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(pc(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+sa(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var c=r[Ut]||null;if(!c)throw Error(s(90));pc(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<i.length;t++)r=i[t],r.form===e.form&&ef(r)}break e;case"textarea":af(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&bi(e,!!i.multiple,t,!1)}}}var xc=!1;function sf(e,t,i){if(xc)return e(t,i);xc=!0;try{var r=e(t);return r}finally{if(xc=!1,(vi!==null||ji!==null)&&(Rl(),vi&&(t=vi,e=ji,ji=vi=null,lf(t),e)))for(t=0;t<e.length;t++)lf(e[t])}}function mr(e,t){var i=e.stateNode;if(i===null)return null;var r=i[Ut]||null;if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,t,typeof i));return i}var Ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=!1;if(Ba)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){bc=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{bc=!1}var cn=null,yc=null,Yo=null;function cf(){if(Yo)return Yo;var e,t=yc,i=t.length,r,c="value"in cn?cn.value:cn.textContent,u=c.length;for(e=0;e<i&&t[e]===c[e];e++);var g=i-e;for(r=1;r<=g&&t[i-r]===c[u-r];r++);return Yo=c.slice(e,1<r?1-r:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function df(){return!1}function Wt(e){function t(i,r,c,u,g){this._reactName=i,this._targetInst=c,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(i=e[S],this[S]=i?i(u):u[S]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?qo:df,this.isPropagationStopped=df,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Wt(Hn),xr=v({},Hn,{view:0,detail:0}),k1=Wt(xr),vc,jc,br,Xo=v({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(vc=e.screenX-br.screenX,jc=e.screenY-br.screenY):jc=vc=0,br=e),vc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),uf=Wt(Xo),N1=v({},Xo,{dataTransfer:0}),C1=Wt(N1),T1=v({},xr,{relatedTarget:0}),wc=Wt(T1),z1=v({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=Wt(z1),E1=v({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R1=Wt(E1),D1=v({},Hn,{data:0}),pf=Wt(D1),M1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_1[e])?!!t[e]:!1}function Sc(){return B1}var L1=v({},xr,{key:function(e){if(e.key){var t=M1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U1=Wt(L1),W1=v({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ff=Wt(W1),F1=v({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),H1=Wt(F1),$1=v({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),P1=Wt($1),I1=v({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y1=Wt(I1),V1=v({},Hn,{newState:0,oldState:0}),q1=Wt(V1),G1=[9,13,27,32],kc=Ba&&"CompositionEvent"in window,yr=null;Ba&&"documentMode"in document&&(yr=document.documentMode);var X1=Ba&&"TextEvent"in window&&!yr,gf=Ba&&(!kc||yr&&8<yr&&11>=yr),mf=" ",hf=!1;function xf(e,t){switch(e){case"keyup":return G1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wi=!1;function J1(e,t){switch(e){case"compositionend":return bf(t);case"keypress":return t.which!==32?null:(hf=!0,mf);case"textInput":return e=t.data,e===mf&&hf?null:e;default:return null}}function Q1(e,t){if(wi)return e==="compositionend"||!kc&&xf(e,t)?(e=cf(),Yo=yc=cn=null,wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gf&&t.locale!=="ko"?null:t.data;default:return null}}var Z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Z1[e.type]:t==="textarea"}function vf(e,t,i,r){vi?ji?ji.push(r):ji=[r]:vi=r,t=Ul(t,"onChange"),0<t.length&&(i=new Go("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var vr=null,jr=null;function K1(e){ah(e,0)}function Jo(e){var t=gr(e);if(ef(t))return e}function jf(e,t){if(e==="change")return t}var wf=!1;if(Ba){var Nc;if(Ba){var Cc="oninput"in document;if(!Cc){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),Cc=typeof Sf.oninput=="function"}Nc=Cc}else Nc=!1;wf=Nc&&(!document.documentMode||9<document.documentMode)}function kf(){vr&&(vr.detachEvent("onpropertychange",Nf),jr=vr=null)}function Nf(e){if(e.propertyName==="value"&&Jo(jr)){var t=[];vf(t,jr,e,hc(e)),sf(K1,t)}}function ey(e,t,i){e==="focusin"?(kf(),vr=t,jr=i,vr.attachEvent("onpropertychange",Nf)):e==="focusout"&&kf()}function ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(jr)}function ay(e,t){if(e==="click")return Jo(t)}function ny(e,t){if(e==="input"||e==="change")return Jo(t)}function iy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:iy;function wr(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var c=i[r];if(!ne.call(t,c)||!Qt(e[c],t[c]))return!1}return!0}function Cf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tf(e,t){var i=Cf(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Cf(i)}}function zf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Po(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Po(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ry=Ba&&"documentMode"in document&&11>=document.documentMode,Si=null,zc=null,Sr=null,Ac=!1;function Ef(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ac||Si==null||Si!==Po(r)||(r=Si,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&wr(Sr,r)||(Sr=r,r=Ul(zc,"onSelect"),0<r.length&&(t=new Go("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=Si)))}function $n(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ki={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionrun:$n("Transition","TransitionRun"),transitionstart:$n("Transition","TransitionStart"),transitioncancel:$n("Transition","TransitionCancel"),transitionend:$n("Transition","TransitionEnd")},Ec={},Rf={};Ba&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function Pn(e){if(Ec[e])return Ec[e];if(!ki[e])return e;var t=ki[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Rf)return Ec[e]=t[i];return e}var Df=Pn("animationend"),Mf=Pn("animationiteration"),Of=Pn("animationstart"),oy=Pn("transitionrun"),ly=Pn("transitionstart"),sy=Pn("transitioncancel"),_f=Pn("transitionend"),Bf=new Map,Rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rc.push("scrollEnd");function va(e,t){Bf.set(e,t),Fn(t,[e])}var Qo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ca=[],Ni=0,Dc=0;function Zo(){for(var e=Ni,t=Dc=Ni=0;t<e;){var i=ca[t];ca[t++]=null;var r=ca[t];ca[t++]=null;var c=ca[t];ca[t++]=null;var u=ca[t];if(ca[t++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}u!==0&&Lf(i,c,u)}}function Ko(e,t,i,r){ca[Ni++]=e,ca[Ni++]=t,ca[Ni++]=i,ca[Ni++]=r,Dc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Mc(e,t,i,r){return Ko(e,t,i,r),el(e)}function In(e,t){return Ko(e,null,null,t),el(e)}function Lf(e,t,i){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i);for(var c=!1,u=e.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-Jt(i),e=u.hiddenUpdates,r=e[c],r===null?e[c]=[t]:r.push(t),t.lane=i|536870912),u):null}function el(e){if(50<Yr)throw Yr=0,$d=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ci={};function cy(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,i,r){return new cy(e,t,i,r)}function Oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function La(e,t){var i=e.alternate;return i===null?(i=Zt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Uf(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tl(e,t,i,r,c,u){var g=0;if(r=e,typeof e=="function")Oc(e)&&(g=1);else if(typeof e=="string")g=gv(e,i,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=Zt(31,i,t,c),e.elementType=de,e.lanes=u,e;case z:return Yn(i.children,c,u,t);case D:g=8,c|=24;break;case R:return e=Zt(12,i,t,c|2),e.elementType=R,e.lanes=u,e;case J:return e=Zt(13,i,t,c),e.elementType=J,e.lanes=u,e;case E:return e=Zt(19,i,t,c),e.elementType=E,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:g=10;break e;case w:g=9;break e;case Y:g=11;break e;case F:g=14;break e;case V:g=16,r=null;break e}g=29,i=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=Zt(g,i,t,c),t.elementType=e,t.type=r,t.lanes=u,t}function Yn(e,t,i,r){return e=Zt(7,e,r,t),e.lanes=i,e}function _c(e,t,i){return e=Zt(6,e,null,t),e.lanes=i,e}function Wf(e){var t=Zt(18,null,null,0);return t.stateNode=e,t}function Bc(e,t,i){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ff=new WeakMap;function da(e,t){if(typeof e=="object"&&e!==null){var i=Ff.get(e);return i!==void 0?i:(t={value:e,source:t,stack:L(t)},Ff.set(e,t),t)}return{value:e,source:t,stack:L(t)}}var Ti=[],zi=0,al=null,kr=0,ua=[],pa=0,dn=null,Ta=1,za="";function Ua(e,t){Ti[zi++]=kr,Ti[zi++]=al,al=e,kr=t}function Hf(e,t,i){ua[pa++]=Ta,ua[pa++]=za,ua[pa++]=dn,dn=e;var r=Ta;e=za;var c=32-Jt(r)-1;r&=~(1<<c),i+=1;var u=32-Jt(t)+c;if(30<u){var g=c-c%5;u=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ta=1<<32-Jt(t)+c|i<<c|r,za=u+e}else Ta=1<<u|i<<c|r,za=e}function Lc(e){e.return!==null&&(Ua(e,1),Hf(e,1,0))}function Uc(e){for(;e===al;)al=Ti[--zi],Ti[zi]=null,kr=Ti[--zi],Ti[zi]=null;for(;e===dn;)dn=ua[--pa],ua[pa]=null,za=ua[--pa],ua[pa]=null,Ta=ua[--pa],ua[pa]=null}function $f(e,t){ua[pa++]=Ta,ua[pa++]=za,ua[pa++]=dn,Ta=t.id,za=t.overflow,dn=e}var Nt=null,at=null,We=!1,un=null,fa=!1,Wc=Error(s(519));function pn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nr(da(t,e)),Wc}function Pf(e){var t=e.stateNode,i=e.type,r=e.memoizedProps;switch(t[kt]=e,t[Ut]=r,i){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(i=0;i<qr.length;i++)_e(qr[i],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),tf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),nf(t,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||r.suppressHydrationWarning===!0||oh(t.textContent,i)?(r.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),r.onScroll!=null&&_e("scroll",t),r.onScrollEnd!=null&&_e("scrollend",t),r.onClick!=null&&(t.onclick=_a),t=!0):t=!1,t||pn(e,!0)}function If(e){for(Nt=e.return;Nt;)switch(Nt.tag){case 5:case 31:case 13:fa=!1;return;case 27:case 3:fa=!0;return;default:Nt=Nt.return}}function Ai(e){if(e!==Nt)return!1;if(!We)return If(e),We=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||nu(e.type,e.memoizedProps)),i=!i),i&&at&&pn(e),If(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));at=mh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));at=mh(e)}else t===27?(t=at,Cn(e.type)?(e=su,su=null,at=e):at=t):at=Nt?ma(e.stateNode.nextSibling):null;return!0}function Vn(){at=Nt=null,We=!1}function Fc(){var e=un;return e!==null&&(Pt===null?Pt=e:Pt.push.apply(Pt,e),un=null),e}function Nr(e){un===null?un=[e]:un.push(e)}var Hc=j(null),qn=null,Wa=null;function fn(e,t,i){q(Hc,t._currentValue),t._currentValue=i}function Fa(e){e._currentValue=Hc.current,T(Hc)}function $c(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function Pc(e,t,i,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var g=c.child;u=u.firstContext;e:for(;u!==null;){var S=u;u=c;for(var _=0;_<t.length;_++)if(S.context===t[_]){u.lanes|=i,S=u.alternate,S!==null&&(S.lanes|=i),$c(u.return,i,e),r||(g=null);break e}u=S.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=i,u=g.alternate,u!==null&&(u.lanes|=i),$c(g,i,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ei(e,t,i,r){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var S=c.type;Qt(c.pendingProps.value,g.value)||(e!==null?e.push(S):e=[S])}}else if(c===be.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Zr):e=[Zr])}c=c.return}e!==null&&Pc(t,e,i,r),t.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!Qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gn(e){qn=e,Wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return Yf(qn,e)}function il(e,t){return qn===null&&Gn(e),Yf(e,t)}function Yf(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},Wa===null){if(e===null)throw Error(s(308));Wa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wa=Wa.next=t;return i}var dy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},uy=n.unstable_scheduleCallback,py=n.unstable_NormalPriority,ft={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ic(){return{controller:new dy,data:new Map,refCount:0}}function Cr(e){e.refCount--,e.refCount===0&&uy(py,function(){e.controller.abort()})}var Tr=null,Yc=0,Ri=0,Di=null;function fy(e,t){if(Tr===null){var i=Tr=[];Yc=0,Ri=Gd(),Di={status:"pending",value:void 0,then:function(r){i.push(r)}}}return Yc++,t.then(Vf,Vf),t}function Vf(){if(--Yc===0&&Tr!==null){Di!==null&&(Di.status="fulfilled");var e=Tr;Tr=null,Ri=0,Di=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gy(e,t){var i=[],r={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var c=0;c<i.length;c++)(0,i[c])(t)},function(c){for(r.status="rejected",r.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),r}var qf=W.S;W.S=function(e,t){Em=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&fy(e,t),qf!==null&&qf(e,t)};var Xn=j(null);function Vc(){var e=Xn.current;return e!==null?e:Qe.pooledCache}function rl(e,t){t===null?q(Xn,Xn.current):q(Xn,t.pool)}function Gf(){var e=Vc();return e===null?null:{parent:ft._currentValue,pool:e}}var Mi=Error(s(460)),qc=Error(s(474)),ol=Error(s(542)),ll={then:function(){}};function Xf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jf(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(_a,_a),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zf(e),e;default:if(typeof t.status=="string")t.then(_a,_a);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=r}},function(r){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zf(e),e}throw Qn=t,Mi}}function Jn(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Qn=i,Mi):i}}var Qn=null;function Qf(){if(Qn===null)throw Error(s(459));var e=Qn;return Qn=null,e}function Zf(e){if(e===Mi||e===ol)throw Error(s(483))}var Oi=null,zr=0;function sl(e){var t=zr;return zr+=1,Oi===null&&(Oi=[]),Jf(Oi,e,t)}function Ar(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cl(e,t){throw t.$$typeof===C?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Kf(e){function t(I,U){if(e){var Q=I.deletions;Q===null?(I.deletions=[U],I.flags|=16):Q.push(U)}}function i(I,U){if(!e)return null;for(;U!==null;)t(I,U),U=U.sibling;return null}function r(I){for(var U=new Map;I!==null;)I.key!==null?U.set(I.key,I):U.set(I.index,I),I=I.sibling;return U}function c(I,U){return I=La(I,U),I.index=0,I.sibling=null,I}function u(I,U,Q){return I.index=Q,e?(Q=I.alternate,Q!==null?(Q=Q.index,Q<U?(I.flags|=67108866,U):Q):(I.flags|=67108866,U)):(I.flags|=1048576,U)}function g(I){return e&&I.alternate===null&&(I.flags|=67108866),I}function S(I,U,Q,se){return U===null||U.tag!==6?(U=_c(Q,I.mode,se),U.return=I,U):(U=c(U,Q),U.return=I,U)}function _(I,U,Q,se){var Ne=Q.type;return Ne===z?re(I,U,Q.props.children,se,Q.key):U!==null&&(U.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===V&&Jn(Ne)===U.type)?(U=c(U,Q.props),Ar(U,Q),U.return=I,U):(U=tl(Q.type,Q.key,Q.props,null,I.mode,se),Ar(U,Q),U.return=I,U)}function Z(I,U,Q,se){return U===null||U.tag!==4||U.stateNode.containerInfo!==Q.containerInfo||U.stateNode.implementation!==Q.implementation?(U=Bc(Q,I.mode,se),U.return=I,U):(U=c(U,Q.children||[]),U.return=I,U)}function re(I,U,Q,se,Ne){return U===null||U.tag!==7?(U=Yn(Q,I.mode,se,Ne),U.return=I,U):(U=c(U,Q),U.return=I,U)}function ue(I,U,Q){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=_c(""+U,I.mode,Q),U.return=I,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return Q=tl(U.type,U.key,U.props,null,I.mode,Q),Ar(Q,U),Q.return=I,Q;case k:return U=Bc(U,I.mode,Q),U.return=I,U;case V:return U=Jn(U),ue(I,U,Q)}if(we(U)||pe(U))return U=Yn(U,I.mode,Q,null),U.return=I,U;if(typeof U.then=="function")return ue(I,sl(U),Q);if(U.$$typeof===O)return ue(I,il(I,U),Q);cl(I,U)}return null}function ee(I,U,Q,se){var Ne=U!==null?U.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ne!==null?null:S(I,U,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case A:return Q.key===Ne?_(I,U,Q,se):null;case k:return Q.key===Ne?Z(I,U,Q,se):null;case V:return Q=Jn(Q),ee(I,U,Q,se)}if(we(Q)||pe(Q))return Ne!==null?null:re(I,U,Q,se,null);if(typeof Q.then=="function")return ee(I,U,sl(Q),se);if(Q.$$typeof===O)return ee(I,U,il(I,Q),se);cl(I,Q)}return null}function ae(I,U,Q,se,Ne){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return I=I.get(Q)||null,S(U,I,""+se,Ne);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case A:return I=I.get(se.key===null?Q:se.key)||null,_(U,I,se,Ne);case k:return I=I.get(se.key===null?Q:se.key)||null,Z(U,I,se,Ne);case V:return se=Jn(se),ae(I,U,Q,se,Ne)}if(we(se)||pe(se))return I=I.get(Q)||null,re(U,I,se,Ne,null);if(typeof se.then=="function")return ae(I,U,Q,sl(se),Ne);if(se.$$typeof===O)return ae(I,U,Q,il(U,se),Ne);cl(U,se)}return null}function ve(I,U,Q,se){for(var Ne=null,He=null,Se=U,De=U=0,Le=null;Se!==null&&De<Q.length;De++){Se.index>De?(Le=Se,Se=null):Le=Se.sibling;var $e=ee(I,Se,Q[De],se);if($e===null){Se===null&&(Se=Le);break}e&&Se&&$e.alternate===null&&t(I,Se),U=u($e,U,De),He===null?Ne=$e:He.sibling=$e,He=$e,Se=Le}if(De===Q.length)return i(I,Se),We&&Ua(I,De),Ne;if(Se===null){for(;De<Q.length;De++)Se=ue(I,Q[De],se),Se!==null&&(U=u(Se,U,De),He===null?Ne=Se:He.sibling=Se,He=Se);return We&&Ua(I,De),Ne}for(Se=r(Se);De<Q.length;De++)Le=ae(Se,I,De,Q[De],se),Le!==null&&(e&&Le.alternate!==null&&Se.delete(Le.key===null?De:Le.key),U=u(Le,U,De),He===null?Ne=Le:He.sibling=Le,He=Le);return e&&Se.forEach(function(Rn){return t(I,Rn)}),We&&Ua(I,De),Ne}function Te(I,U,Q,se){if(Q==null)throw Error(s(151));for(var Ne=null,He=null,Se=U,De=U=0,Le=null,$e=Q.next();Se!==null&&!$e.done;De++,$e=Q.next()){Se.index>De?(Le=Se,Se=null):Le=Se.sibling;var Rn=ee(I,Se,$e.value,se);if(Rn===null){Se===null&&(Se=Le);break}e&&Se&&Rn.alternate===null&&t(I,Se),U=u(Rn,U,De),He===null?Ne=Rn:He.sibling=Rn,He=Rn,Se=Le}if($e.done)return i(I,Se),We&&Ua(I,De),Ne;if(Se===null){for(;!$e.done;De++,$e=Q.next())$e=ue(I,$e.value,se),$e!==null&&(U=u($e,U,De),He===null?Ne=$e:He.sibling=$e,He=$e);return We&&Ua(I,De),Ne}for(Se=r(Se);!$e.done;De++,$e=Q.next())$e=ae(Se,I,De,$e.value,se),$e!==null&&(e&&$e.alternate!==null&&Se.delete($e.key===null?De:$e.key),U=u($e,U,De),He===null?Ne=$e:He.sibling=$e,He=$e);return e&&Se.forEach(function(Nv){return t(I,Nv)}),We&&Ua(I,De),Ne}function Je(I,U,Q,se){if(typeof Q=="object"&&Q!==null&&Q.type===z&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case A:e:{for(var Ne=Q.key;U!==null;){if(U.key===Ne){if(Ne=Q.type,Ne===z){if(U.tag===7){i(I,U.sibling),se=c(U,Q.props.children),se.return=I,I=se;break e}}else if(U.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===V&&Jn(Ne)===U.type){i(I,U.sibling),se=c(U,Q.props),Ar(se,Q),se.return=I,I=se;break e}i(I,U);break}else t(I,U);U=U.sibling}Q.type===z?(se=Yn(Q.props.children,I.mode,se,Q.key),se.return=I,I=se):(se=tl(Q.type,Q.key,Q.props,null,I.mode,se),Ar(se,Q),se.return=I,I=se)}return g(I);case k:e:{for(Ne=Q.key;U!==null;){if(U.key===Ne)if(U.tag===4&&U.stateNode.containerInfo===Q.containerInfo&&U.stateNode.implementation===Q.implementation){i(I,U.sibling),se=c(U,Q.children||[]),se.return=I,I=se;break e}else{i(I,U);break}else t(I,U);U=U.sibling}se=Bc(Q,I.mode,se),se.return=I,I=se}return g(I);case V:return Q=Jn(Q),Je(I,U,Q,se)}if(we(Q))return ve(I,U,Q,se);if(pe(Q)){if(Ne=pe(Q),typeof Ne!="function")throw Error(s(150));return Q=Ne.call(Q),Te(I,U,Q,se)}if(typeof Q.then=="function")return Je(I,U,sl(Q),se);if(Q.$$typeof===O)return Je(I,U,il(I,Q),se);cl(I,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,U!==null&&U.tag===6?(i(I,U.sibling),se=c(U,Q),se.return=I,I=se):(i(I,U),se=_c(Q,I.mode,se),se.return=I,I=se),g(I)):i(I,U)}return function(I,U,Q,se){try{zr=0;var Ne=Je(I,U,Q,se);return Oi=null,Ne}catch(Se){if(Se===Mi||Se===ol)throw Se;var He=Zt(29,Se,null,I.mode);return He.lanes=se,He.return=I,He}}}var Zn=Kf(!0),eg=Kf(!1),gn=!1;function Gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hn(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Pe&2)!==0){var c=r.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),r.pending=t,t=el(e),Lf(e,null,i),t}return Ko(e,r,t,i),el(e)}function Er(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,Ip(e,i)}}function Jc(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var c=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?c=u=g:u=u.next=g,i=i.next}while(i!==null);u===null?c=u=t:u=u.next=t}else c=u=t;i={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var Qc=!1;function Rr(){if(Qc){var e=Di;if(e!==null)throw e}}function Dr(e,t,i,r){Qc=!1;var c=e.updateQueue;gn=!1;var u=c.firstBaseUpdate,g=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var _=S,Z=_.next;_.next=null,g===null?u=Z:g.next=Z,g=_;var re=e.alternate;re!==null&&(re=re.updateQueue,S=re.lastBaseUpdate,S!==g&&(S===null?re.firstBaseUpdate=Z:S.next=Z,re.lastBaseUpdate=_))}if(u!==null){var ue=c.baseState;g=0,re=Z=_=null,S=u;do{var ee=S.lane&-536870913,ae=ee!==S.lane;if(ae?(Be&ee)===ee:(r&ee)===ee){ee!==0&&ee===Ri&&(Qc=!0),re!==null&&(re=re.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ve=e,Te=S;ee=t;var Je=i;switch(Te.tag){case 1:if(ve=Te.payload,typeof ve=="function"){ue=ve.call(Je,ue,ee);break e}ue=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Te.payload,ee=typeof ve=="function"?ve.call(Je,ue,ee):ve,ee==null)break e;ue=v({},ue,ee);break e;case 2:gn=!0}}ee=S.callback,ee!==null&&(e.flags|=64,ae&&(e.flags|=8192),ae=c.callbacks,ae===null?c.callbacks=[ee]:ae.push(ee))}else ae={lane:ee,tag:S.tag,payload:S.payload,callback:S.callback,next:null},re===null?(Z=re=ae,_=ue):re=re.next=ae,g|=ee;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;ae=S,S=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);re===null&&(_=ue),c.baseState=_,c.firstBaseUpdate=Z,c.lastBaseUpdate=re,u===null&&(c.shared.lanes=0),jn|=g,e.lanes=g,e.memoizedState=ue}}function tg(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function ag(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)tg(i[e],t)}var _i=j(null),dl=j(0);function ng(e,t){e=Xa,q(dl,e),q(_i,t),Xa=e|t.baseLanes}function Zc(){q(dl,Xa),q(_i,_i.current)}function Kc(){Xa=dl.current,T(_i),T(dl)}var Kt=j(null),ga=null;function xn(e){var t=e.alternate;q(dt,dt.current&1),q(Kt,e),ga===null&&(t===null||_i.current!==null||t.memoizedState!==null)&&(ga=e)}function ed(e){q(dt,dt.current),q(Kt,e),ga===null&&(ga=e)}function ig(e){e.tag===22?(q(dt,dt.current),q(Kt,e),ga===null&&(ga=e)):bn()}function bn(){q(dt,dt.current),q(Kt,Kt.current)}function ea(e){T(Kt),ga===e&&(ga=null),T(dt)}var dt=j(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||ou(i)||lu(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=0,Ee=null,Ge=null,gt=null,pl=!1,Bi=!1,Kn=!1,fl=0,Mr=0,Li=null,my=0;function st(){throw Error(s(321))}function td(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Qt(e[i],t[i]))return!1;return!0}function ad(e,t,i,r,c,u){return Ha=u,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,W.H=e===null||e.memoizedState===null?Hg:xd,Kn=!1,u=i(r,c),Kn=!1,Bi&&(u=og(t,i,r,c)),rg(e),u}function rg(e){W.H=Br;var t=Ge!==null&&Ge.next!==null;if(Ha=0,gt=Ge=Ee=null,pl=!1,Mr=0,Li=null,t)throw Error(s(300));e===null||mt||(e=e.dependencies,e!==null&&nl(e)&&(mt=!0))}function og(e,t,i,r){Ee=e;var c=0;do{if(Bi&&(Li=null),Mr=0,Bi=!1,25<=c)throw Error(s(301));if(c+=1,gt=Ge=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}W.H=$g,u=t(i,r)}while(Bi);return u}function hy(){var e=W.H,t=e.useState()[0];return t=typeof t.then=="function"?Or(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(Ee.flags|=1024),t}function nd(){var e=fl!==0;return fl=0,e}function id(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function rd(e){if(pl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pl=!1}Ha=0,gt=Ge=Ee=null,Bi=!1,Mr=fl=0,Li=null}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ee.memoizedState=gt=e:gt=gt.next=e,gt}function ut(){if(Ge===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=gt===null?Ee.memoizedState:gt.next;if(t!==null)gt=t,Ge=e;else{if(e===null)throw Ee.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},gt===null?Ee.memoizedState=gt=e:gt=gt.next=e}return gt}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Or(e){var t=Mr;return Mr+=1,Li===null&&(Li=[]),e=Jf(Li,e,t),t=Ee,(gt===null?t.memoizedState:gt.next)===null&&(t=t.alternate,W.H=t===null||t.memoizedState===null?Hg:xd),e}function ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Or(e);if(e.$$typeof===O)return Ct(e)}throw Error(s(438,String(e)))}function od(e){var t=null,i=Ee.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var r=Ee.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=gl(),Ee.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),r=0;r<e;r++)i[r]=he;return t.index++,i}function $a(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=ut();return ld(t,Ge,e)}function ld(e,t,i){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var c=e.baseQueue,u=r.pending;if(u!==null){if(c!==null){var g=c.next;c.next=u.next,u.next=g}t.baseQueue=c=u,r.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var S=g=null,_=null,Z=t,re=!1;do{var ue=Z.lane&-536870913;if(ue!==Z.lane?(Be&ue)===ue:(Ha&ue)===ue){var ee=Z.revertLane;if(ee===0)_!==null&&(_=_.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ue===Ri&&(re=!0);else if((Ha&ee)===ee){Z=Z.next,ee===Ri&&(re=!0);continue}else ue={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},_===null?(S=_=ue,g=u):_=_.next=ue,Ee.lanes|=ee,jn|=ee;ue=Z.action,Kn&&i(u,ue),u=Z.hasEagerState?Z.eagerState:i(u,ue)}else ee={lane:ue,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},_===null?(S=_=ee,g=u):_=_.next=ee,Ee.lanes|=ue,jn|=ue;Z=Z.next}while(Z!==null&&Z!==t);if(_===null?g=u:_.next=S,!Qt(u,e.memoizedState)&&(mt=!0,re&&(i=Di,i!==null)))throw i;e.memoizedState=u,e.baseState=g,e.baseQueue=_,r.lastRenderedState=u}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function sd(e){var t=ut(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var r=i.dispatch,c=i.pending,u=t.memoizedState;if(c!==null){i.pending=null;var g=c=c.next;do u=e(u,g.action),g=g.next;while(g!==c);Qt(u,t.memoizedState)||(mt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,r]}function lg(e,t,i){var r=Ee,c=ut(),u=We;if(u){if(i===void 0)throw Error(s(407));i=i()}else i=t();var g=!Qt((Ge||c).memoizedState,i);if(g&&(c.memoizedState=i,mt=!0),c=c.queue,ud(dg.bind(null,r,c,e),[e]),c.getSnapshot!==t||g||gt!==null&&gt.memoizedState.tag&1){if(r.flags|=2048,Ui(9,{destroy:void 0},cg.bind(null,r,c,i,t),null),Qe===null)throw Error(s(349));u||(Ha&127)!==0||sg(r,t,i)}return i}function sg(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ee.updateQueue,t===null?(t=gl(),Ee.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function cg(e,t,i,r){t.value=i,t.getSnapshot=r,ug(t)&&pg(e)}function dg(e,t,i){return i(function(){ug(t)&&pg(e)})}function ug(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Qt(e,i)}catch{return!0}}function pg(e){var t=In(e,2);t!==null&&It(t,e,2)}function cd(e){var t=Mt();if(typeof e=="function"){var i=e;if(e=i(),Kn){ln(!0);try{i()}finally{ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},t}function fg(e,t,i,r){return e.baseState=i,ld(e,Ge,typeof r=="function"?r:$a)}function xy(e,t,i,r,c){if(yl(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};W.T!==null?i(!0):u.isTransition=!1,r(u),i=t.pending,i===null?(u.next=t.pending=u,gg(t,u)):(u.next=i.next,t.pending=i.next=u)}}function gg(e,t){var i=t.action,r=t.payload,c=e.state;if(t.isTransition){var u=W.T,g={};W.T=g;try{var S=i(c,r),_=W.S;_!==null&&_(g,S),mg(e,t,S)}catch(Z){dd(e,t,Z)}finally{u!==null&&g.types!==null&&(u.types=g.types),W.T=u}}else try{u=i(c,r),mg(e,t,u)}catch(Z){dd(e,t,Z)}}function mg(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){hg(e,t,r)},function(r){return dd(e,t,r)}):hg(e,t,i)}function hg(e,t,i){t.status="fulfilled",t.value=i,xg(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,gg(e,i)))}function dd(e,t,i){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=i,xg(t),t=t.next;while(t!==r)}e.action=null}function xg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bg(e,t){return t}function yg(e,t){if(We){var i=Qe.formState;if(i!==null){e:{var r=Ee;if(We){if(at){t:{for(var c=at,u=fa;c.nodeType!==8;){if(!u){c=null;break t}if(c=ma(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){at=ma(c.nextSibling),r=c.data==="F!";break e}}pn(r)}r=!1}r&&(t=i[0])}}return i=Mt(),i.memoizedState=i.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bg,lastRenderedState:t},i.queue=r,i=Ug.bind(null,Ee,r),r.dispatch=i,r=cd(!1),u=hd.bind(null,Ee,!1,r.queue),r=Mt(),c={state:t,dispatch:null,action:e,pending:null},r.queue=c,i=xy.bind(null,Ee,c,u,i),c.dispatch=i,r.memoizedState=e,[t,i,!1]}function vg(e){var t=ut();return jg(t,Ge,e)}function jg(e,t,i){if(t=ld(e,t,bg)[0],e=hl($a)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Or(t)}catch(g){throw g===Mi?ol:g}else r=t;t=ut();var c=t.queue,u=c.dispatch;return i!==t.memoizedState&&(Ee.flags|=2048,Ui(9,{destroy:void 0},by.bind(null,c,i),null)),[r,u,e]}function by(e,t){e.action=t}function wg(e){var t=ut(),i=Ge;if(i!==null)return jg(t,i,e);ut(),t=t.memoizedState,i=ut();var r=i.queue.dispatch;return i.memoizedState=e,[t,r,!1]}function Ui(e,t,i,r){return e={tag:e,create:i,deps:r,inst:t,next:null},t=Ee.updateQueue,t===null&&(t=gl(),Ee.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e),e}function Sg(){return ut().memoizedState}function xl(e,t,i,r){var c=Mt();Ee.flags|=e,c.memoizedState=Ui(1|t,{destroy:void 0},i,r===void 0?null:r)}function bl(e,t,i,r){var c=ut();r=r===void 0?null:r;var u=c.memoizedState.inst;Ge!==null&&r!==null&&td(r,Ge.memoizedState.deps)?c.memoizedState=Ui(t,u,i,r):(Ee.flags|=e,c.memoizedState=Ui(1|t,u,i,r))}function kg(e,t){xl(8390656,8,e,t)}function ud(e,t){bl(2048,8,e,t)}function yy(e){Ee.flags|=4;var t=Ee.updateQueue;if(t===null)t=gl(),Ee.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function Ng(e){var t=ut().memoizedState;return yy({ref:t,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Cg(e,t){return bl(4,2,e,t)}function Tg(e,t){return bl(4,4,e,t)}function zg(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ag(e,t,i){i=i!=null?i.concat([e]):null,bl(4,4,zg.bind(null,t,e),i)}function pd(){}function Eg(e,t){var i=ut();t=t===void 0?null:t;var r=i.memoizedState;return t!==null&&td(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function Rg(e,t){var i=ut();t=t===void 0?null:t;var r=i.memoizedState;if(t!==null&&td(t,r[1]))return r[0];if(r=e(),Kn){ln(!0);try{e()}finally{ln(!1)}}return i.memoizedState=[r,t],r}function fd(e,t,i){return i===void 0||(Ha&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=Dm(),Ee.lanes|=e,jn|=e,i)}function Dg(e,t,i,r){return Qt(i,t)?i:_i.current!==null?(e=fd(e,i,r),Qt(e,t)||(mt=!0),e):(Ha&42)===0||(Ha&1073741824)!==0&&(Be&261930)===0?(mt=!0,e.memoizedState=i):(e=Dm(),Ee.lanes|=e,jn|=e,t)}function Mg(e,t,i,r,c){var u=ie.p;ie.p=u!==0&&8>u?u:8;var g=W.T,S={};W.T=S,hd(e,!1,t,i);try{var _=c(),Z=W.S;if(Z!==null&&Z(S,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var re=gy(_,r);_r(e,t,re,na(e))}else _r(e,t,r,na(e))}catch(ue){_r(e,t,{then:function(){},status:"rejected",reason:ue},na())}finally{ie.p=u,g!==null&&S.types!==null&&(g.types=S.types),W.T=g}}function vy(){}function gd(e,t,i,r){if(e.tag!==5)throw Error(s(476));var c=Og(e).queue;Mg(e,c,t,fe,i===null?vy:function(){return _g(e),i(r)})}function Og(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:fe},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _g(e){var t=Og(e);t.next===null&&(t=e.alternate.memoizedState),_r(e,t.next.queue,{},na())}function md(){return Ct(Zr)}function Bg(){return ut().memoizedState}function Lg(){return ut().memoizedState}function jy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=na();e=mn(i);var r=hn(t,e,i);r!==null&&(It(r,t,i),Er(r,t,i)),t={cache:Ic()},e.payload=t;return}t=t.return}}function wy(e,t,i){var r=na();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},yl(e)?Wg(t,i):(i=Mc(e,t,i,r),i!==null&&(It(i,e,r),Fg(i,t,r)))}function Ug(e,t,i){var r=na();_r(e,t,i,r)}function _r(e,t,i,r){var c={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(yl(e))Wg(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var g=t.lastRenderedState,S=u(g,i);if(c.hasEagerState=!0,c.eagerState=S,Qt(S,g))return Ko(e,t,c,0),Qe===null&&Zo(),!1}catch{}if(i=Mc(e,t,c,r),i!==null)return It(i,e,r),Fg(i,t,r),!0}return!1}function hd(e,t,i,r){if(r={lane:2,revertLane:Gd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yl(e)){if(t)throw Error(s(479))}else t=Mc(e,i,r,2),t!==null&&It(t,e,2)}function yl(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Wg(e,t){Bi=pl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Fg(e,t,i){if((i&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,Ip(e,i)}}var Br={readContext:Ct,use:ml,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};Br.useEffectEvent=st;var Hg={readContext:Ct,use:ml,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:kg,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,xl(4194308,4,zg.bind(null,t,e),i)},useLayoutEffect:function(e,t){return xl(4194308,4,e,t)},useInsertionEffect:function(e,t){xl(4,2,e,t)},useMemo:function(e,t){var i=Mt();t=t===void 0?null:t;var r=e();if(Kn){ln(!0);try{e()}finally{ln(!1)}}return i.memoizedState=[r,t],r},useReducer:function(e,t,i){var r=Mt();if(i!==void 0){var c=i(t);if(Kn){ln(!0);try{i(t)}finally{ln(!1)}}}else c=t;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=wy.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:function(e){e=cd(e);var t=e.queue,i=Ug.bind(null,Ee,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:pd,useDeferredValue:function(e,t){var i=Mt();return fd(i,e,t)},useTransition:function(){var e=cd(!1);return e=Mg.bind(null,Ee,e.queue,!0,!1),Mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var r=Ee,c=Mt();if(We){if(i===void 0)throw Error(s(407));i=i()}else{if(i=t(),Qe===null)throw Error(s(349));(Be&127)!==0||sg(r,t,i)}c.memoizedState=i;var u={value:i,getSnapshot:t};return c.queue=u,kg(dg.bind(null,r,u,e),[e]),r.flags|=2048,Ui(9,{destroy:void 0},cg.bind(null,r,u,i,t),null),i},useId:function(){var e=Mt(),t=Qe.identifierPrefix;if(We){var i=za,r=Ta;i=(r&~(1<<32-Jt(r)-1)).toString(32)+i,t="_"+t+"R_"+i,i=fl++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=my++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:md,useFormState:yg,useActionState:yg,useOptimistic:function(e){var t=Mt();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=hd.bind(null,Ee,!0,i),i.dispatch=t,[e,t]},useMemoCache:od,useCacheRefresh:function(){return Mt().memoizedState=jy.bind(null,Ee)},useEffectEvent:function(e){var t=Mt(),i={impl:e};return t.memoizedState=i,function(){if((Pe&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},xd={readContext:Ct,use:ml,useCallback:Eg,useContext:Ct,useEffect:ud,useImperativeHandle:Ag,useInsertionEffect:Cg,useLayoutEffect:Tg,useMemo:Rg,useReducer:hl,useRef:Sg,useState:function(){return hl($a)},useDebugValue:pd,useDeferredValue:function(e,t){var i=ut();return Dg(i,Ge.memoizedState,e,t)},useTransition:function(){var e=hl($a)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Or(e),t]},useSyncExternalStore:lg,useId:Bg,useHostTransitionStatus:md,useFormState:vg,useActionState:vg,useOptimistic:function(e,t){var i=ut();return fg(i,Ge,e,t)},useMemoCache:od,useCacheRefresh:Lg};xd.useEffectEvent=Ng;var $g={readContext:Ct,use:ml,useCallback:Eg,useContext:Ct,useEffect:ud,useImperativeHandle:Ag,useInsertionEffect:Cg,useLayoutEffect:Tg,useMemo:Rg,useReducer:sd,useRef:Sg,useState:function(){return sd($a)},useDebugValue:pd,useDeferredValue:function(e,t){var i=ut();return Ge===null?fd(i,e,t):Dg(i,Ge.memoizedState,e,t)},useTransition:function(){var e=sd($a)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Or(e),t]},useSyncExternalStore:lg,useId:Bg,useHostTransitionStatus:md,useFormState:wg,useActionState:wg,useOptimistic:function(e,t){var i=ut();return Ge!==null?fg(i,Ge,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:od,useCacheRefresh:Lg};$g.useEffectEvent=Ng;function bd(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:v({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var yd={enqueueSetState:function(e,t,i){e=e._reactInternals;var r=na(),c=mn(r);c.payload=t,i!=null&&(c.callback=i),t=hn(e,c,r),t!==null&&(It(t,e,r),Er(t,e,r))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=na(),c=mn(r);c.tag=1,c.payload=t,i!=null&&(c.callback=i),t=hn(e,c,r),t!==null&&(It(t,e,r),Er(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=na(),r=mn(i);r.tag=2,t!=null&&(r.callback=t),t=hn(e,r,i),t!==null&&(It(t,e,i),Er(t,e,i))}};function Pg(e,t,i,r,c,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,g):t.prototype&&t.prototype.isPureReactComponent?!wr(i,r)||!wr(c,u):!0}function Ig(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&yd.enqueueReplaceState(t,t.state,null)}function ei(e,t){var i=t;if("ref"in t){i={};for(var r in t)r!=="ref"&&(i[r]=t[r])}if(e=e.defaultProps){i===t&&(i=v({},i));for(var c in e)i[c]===void 0&&(i[c]=e[c])}return i}function Yg(e){Qo(e)}function Vg(e){console.error(e)}function qg(e){Qo(e)}function vl(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Gg(e,t,i){try{var r=e.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function vd(e,t,i){return i=mn(i),i.tag=3,i.payload={element:null},i.callback=function(){vl(e,t)},i}function Xg(e){return e=mn(e),e.tag=3,e}function Jg(e,t,i,r){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;e.payload=function(){return c(u)},e.callback=function(){Gg(t,i,r)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Gg(t,i,r),typeof c!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var S=r.stack;this.componentDidCatch(r.value,{componentStack:S!==null?S:""})})}function Sy(e,t,i,r,c){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=i.alternate,t!==null&&Ei(t,i,c,!0),i=Kt.current,i!==null){switch(i.tag){case 31:case 13:return ga===null?Dl():i.alternate===null&&ct===0&&(ct=3),i.flags&=-257,i.flags|=65536,i.lanes=c,r===ll?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([r]):t.add(r),Yd(e,r,c)),!1;case 22:return i.flags|=65536,r===ll?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([r]):i.add(r)),Yd(e,r,c)),!1}throw Error(s(435,i.tag))}return Yd(e,r,c),Dl(),!1}if(We)return t=Kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,r!==Wc&&(e=Error(s(422),{cause:r}),Nr(da(e,i)))):(r!==Wc&&(t=Error(s(423),{cause:r}),Nr(da(t,i))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=da(r,i),c=vd(e.stateNode,r,c),Jc(e,c),ct!==4&&(ct=2)),!1;var u=Error(s(520),{cause:r});if(u=da(u,i),Ir===null?Ir=[u]:Ir.push(u),ct!==4&&(ct=2),t===null)return!0;r=da(r,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=c&-c,i.lanes|=e,e=vd(i.stateNode,r,e),Jc(i,e),!1;case 1:if(t=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(wn===null||!wn.has(u))))return i.flags|=65536,c&=-c,i.lanes|=c,c=Xg(c),Jg(c,e,i,r),Jc(i,c),!1}i=i.return}while(i!==null);return!1}var jd=Error(s(461)),mt=!1;function Tt(e,t,i,r){t.child=e===null?eg(t,null,i,r):Zn(t,e.child,i,r)}function Qg(e,t,i,r,c){i=i.render;var u=t.ref;if("ref"in r){var g={};for(var S in r)S!=="ref"&&(g[S]=r[S])}else g=r;return Gn(t),r=ad(e,t,i,g,u,c),S=nd(),e!==null&&!mt?(id(e,t,c),Pa(e,t,c)):(We&&S&&Lc(t),t.flags|=1,Tt(e,t,r,c),t.child)}function Zg(e,t,i,r,c){if(e===null){var u=i.type;return typeof u=="function"&&!Oc(u)&&u.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=u,Kg(e,t,u,r,c)):(e=tl(i.type,null,r,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Ad(e,c)){var g=u.memoizedProps;if(i=i.compare,i=i!==null?i:wr,i(g,r)&&e.ref===t.ref)return Pa(e,t,c)}return t.flags|=1,e=La(u,r),e.ref=t.ref,e.return=t,t.child=e}function Kg(e,t,i,r,c){if(e!==null){var u=e.memoizedProps;if(wr(u,r)&&e.ref===t.ref)if(mt=!1,t.pendingProps=r=u,Ad(e,c))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,Pa(e,t,c)}return wd(e,t,i,r,c)}function em(e,t,i,r){var c=r.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~u}else r=0,t.child=null;return tm(e,t,u,i,r)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(t,u!==null?u.cachePool:null),u!==null?ng(t,u):Zc(),ig(t);else return r=t.lanes=536870912,tm(e,t,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(rl(t,u.cachePool),ng(t,u),bn(),t.memoizedState=null):(e!==null&&rl(t,null),Zc(),bn());return Tt(e,t,c,i),t.child}function Lr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tm(e,t,i,r,c){var u=Vc();return u=u===null?null:{parent:ft._currentValue,pool:u},t.memoizedState={baseLanes:i,cachePool:u},e!==null&&rl(t,null),Zc(),ig(t),e!==null&&Ei(e,t,r,!0),t.childLanes=c,null}function jl(e,t){return t=Sl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function am(e,t,i){return Zn(t,e.child,null,i),e=jl(t,t.pendingProps),e.flags|=2,ea(t),t.memoizedState=null,e}function ky(e,t,i){var r=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(We){if(r.mode==="hidden")return e=jl(t,r),t.lanes=536870912,Lr(null,e);if(ed(t),(e=at)?(e=gh(e,fa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:dn!==null?{id:Ta,overflow:za}:null,retryLane:536870912,hydrationErrors:null},i=Wf(e),i.return=t,t.child=i,Nt=t,at=null)):e=null,e===null)throw pn(t);return t.lanes=536870912,null}return jl(t,r)}var u=e.memoizedState;if(u!==null){var g=u.dehydrated;if(ed(t),c)if(t.flags&256)t.flags&=-257,t=am(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(mt||Ei(e,t,i,!1),c=(i&e.childLanes)!==0,mt||c){if(r=Qe,r!==null&&(g=Yp(r,i),g!==0&&g!==u.retryLane))throw u.retryLane=g,In(e,g),It(r,e,g),jd;Dl(),t=am(e,t,i)}else e=u.treeContext,at=ma(g.nextSibling),Nt=t,We=!0,un=null,fa=!1,e!==null&&$f(t,e),t=jl(t,r),t.flags|=4096;return t}return e=La(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wl(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function wd(e,t,i,r,c){return Gn(t),i=ad(e,t,i,r,void 0,c),r=nd(),e!==null&&!mt?(id(e,t,c),Pa(e,t,c)):(We&&r&&Lc(t),t.flags|=1,Tt(e,t,i,c),t.child)}function nm(e,t,i,r,c,u){return Gn(t),t.updateQueue=null,i=og(t,r,i,c),rg(e),r=nd(),e!==null&&!mt?(id(e,t,u),Pa(e,t,u)):(We&&r&&Lc(t),t.flags|=1,Tt(e,t,i,u),t.child)}function im(e,t,i,r,c){if(Gn(t),t.stateNode===null){var u=Ci,g=i.contextType;typeof g=="object"&&g!==null&&(u=Ct(g)),u=new i(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=yd,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},Gc(t),g=i.contextType,u.context=typeof g=="object"&&g!==null?Ct(g):Ci,u.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(bd(t,i,g,r),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&yd.enqueueReplaceState(u,u.state,null),Dr(t,r,u,c),Rr(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var S=t.memoizedProps,_=ei(i,S);u.props=_;var Z=u.context,re=i.contextType;g=Ci,typeof re=="object"&&re!==null&&(g=Ct(re));var ue=i.getDerivedStateFromProps;re=typeof ue=="function"||typeof u.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,re||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(S||Z!==g)&&Ig(t,u,r,g),gn=!1;var ee=t.memoizedState;u.state=ee,Dr(t,r,u,c),Rr(),Z=t.memoizedState,S||ee!==Z||gn?(typeof ue=="function"&&(bd(t,i,ue,r),Z=t.memoizedState),(_=gn||Pg(t,i,_,r,ee,Z,g))?(re||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=Z),u.props=r,u.state=Z,u.context=g,r=_):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Xc(e,t),g=t.memoizedProps,re=ei(i,g),u.props=re,ue=t.pendingProps,ee=u.context,Z=i.contextType,_=Ci,typeof Z=="object"&&Z!==null&&(_=Ct(Z)),S=i.getDerivedStateFromProps,(Z=typeof S=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==ue||ee!==_)&&Ig(t,u,r,_),gn=!1,ee=t.memoizedState,u.state=ee,Dr(t,r,u,c),Rr();var ae=t.memoizedState;g!==ue||ee!==ae||gn||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof S=="function"&&(bd(t,i,S,r),ae=t.memoizedState),(re=gn||Pg(t,i,re,r,ee,ae,_)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(Z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ae,_),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ae,_)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ae),u.props=r,u.state=ae,u.context=_,r=re):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,wl(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=Zn(t,e.child,null,c),t.child=Zn(t,null,i,c)):Tt(e,t,i,c),t.memoizedState=u.state,e=t.child):e=Pa(e,t,c),e}function rm(e,t,i,r){return Vn(),t.flags|=256,Tt(e,t,i,r),t.child}var Sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kd(e){return{baseLanes:e,cachePool:Gf()}}function Nd(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=aa),e}function om(e,t,i){var r=t.pendingProps,c=!1,u=(t.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(dt.current&2)!==0),g&&(c=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(We){if(c?xn(t):bn(),(e=at)?(e=gh(e,fa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:dn!==null?{id:Ta,overflow:za}:null,retryLane:536870912,hydrationErrors:null},i=Wf(e),i.return=t,t.child=i,Nt=t,at=null)):e=null,e===null)throw pn(t);return lu(e)?t.lanes=32:t.lanes=536870912,null}var S=r.children;return r=r.fallback,c?(bn(),c=t.mode,S=Sl({mode:"hidden",children:S},c),r=Yn(r,c,i,null),S.return=t,r.return=t,S.sibling=r,t.child=S,r=t.child,r.memoizedState=kd(i),r.childLanes=Nd(e,g,i),t.memoizedState=Sd,Lr(null,r)):(xn(t),Cd(t,S))}var _=e.memoizedState;if(_!==null&&(S=_.dehydrated,S!==null)){if(u)t.flags&256?(xn(t),t.flags&=-257,t=Td(e,t,i)):t.memoizedState!==null?(bn(),t.child=e.child,t.flags|=128,t=null):(bn(),S=r.fallback,c=t.mode,r=Sl({mode:"visible",children:r.children},c),S=Yn(S,c,i,null),S.flags|=2,r.return=t,S.return=t,r.sibling=S,t.child=r,Zn(t,e.child,null,i),r=t.child,r.memoizedState=kd(i),r.childLanes=Nd(e,g,i),t.memoizedState=Sd,t=Lr(null,r));else if(xn(t),lu(S)){if(g=S.nextSibling&&S.nextSibling.dataset,g)var Z=g.dgst;g=Z,r=Error(s(419)),r.stack="",r.digest=g,Nr({value:r,source:null,stack:null}),t=Td(e,t,i)}else if(mt||Ei(e,t,i,!1),g=(i&e.childLanes)!==0,mt||g){if(g=Qe,g!==null&&(r=Yp(g,i),r!==0&&r!==_.retryLane))throw _.retryLane=r,In(e,r),It(g,e,r),jd;ou(S)||Dl(),t=Td(e,t,i)}else ou(S)?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,at=ma(S.nextSibling),Nt=t,We=!0,un=null,fa=!1,e!==null&&$f(t,e),t=Cd(t,r.children),t.flags|=4096);return t}return c?(bn(),S=r.fallback,c=t.mode,_=e.child,Z=_.sibling,r=La(_,{mode:"hidden",children:r.children}),r.subtreeFlags=_.subtreeFlags&65011712,Z!==null?S=La(Z,S):(S=Yn(S,c,i,null),S.flags|=2),S.return=t,r.return=t,r.sibling=S,t.child=r,Lr(null,r),r=t.child,S=e.child.memoizedState,S===null?S=kd(i):(c=S.cachePool,c!==null?(_=ft._currentValue,c=c.parent!==_?{parent:_,pool:_}:c):c=Gf(),S={baseLanes:S.baseLanes|i,cachePool:c}),r.memoizedState=S,r.childLanes=Nd(e,g,i),t.memoizedState=Sd,Lr(e.child,r)):(xn(t),i=e.child,e=i.sibling,i=La(i,{mode:"visible",children:r.children}),i.return=t,i.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=i,t.memoizedState=null,i)}function Cd(e,t){return t=Sl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Sl(e,t){return e=Zt(22,e,null,t),e.lanes=0,e}function Td(e,t,i){return Zn(t,e.child,null,i),e=Cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lm(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$c(e.return,t,i)}function zd(e,t,i,r,c,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:c,treeForkCount:u}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=i,g.tailMode=c,g.treeForkCount=u)}function sm(e,t,i){var r=t.pendingProps,c=r.revealOrder,u=r.tail;r=r.children;var g=dt.current,S=(g&2)!==0;if(S?(g=g&1|2,t.flags|=128):g&=1,q(dt,g),Tt(e,t,r,i),r=We?kr:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lm(e,i,t);else if(e.tag===19)lm(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&ul(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),zd(t,!1,c,i,u,r);break;case"backwards":case"unstable_legacy-backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ul(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}zd(t,!0,i,null,u,r);break;case"together":zd(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Pa(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(Ei(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,i=La(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=La(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Ad(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function Ny(e,t,i){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),fn(t,ft,e.memoizedState.cache),Vn();break;case 27:case 5:et(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:fn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ed(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(xn(t),t.flags|=128,null):(i&t.child.childLanes)!==0?om(e,t,i):(xn(t),e=Pa(e,t,i),e!==null?e.sibling:null);xn(t);break;case 19:var c=(e.flags&128)!==0;if(r=(i&t.childLanes)!==0,r||(Ei(e,t,i,!1),r=(i&t.childLanes)!==0),c){if(r)return sm(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),q(dt,dt.current),r)break;return null;case 22:return t.lanes=0,em(e,t,i,t.pendingProps);case 24:fn(t,ft,e.memoizedState.cache)}return Pa(e,t,i)}function cm(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!Ad(e,i)&&(t.flags&128)===0)return mt=!1,Ny(e,t,i);mt=(e.flags&131072)!==0}else mt=!1,We&&(t.flags&1048576)!==0&&Hf(t,kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Jn(t.elementType),t.type=e,typeof e=="function")Oc(e)?(r=ei(e,r),t.tag=1,t=im(null,t,e,r,i)):(t.tag=0,t=wd(null,t,e,r,i));else{if(e!=null){var c=e.$$typeof;if(c===Y){t.tag=11,t=Qg(null,t,e,r,i);break e}else if(c===F){t.tag=14,t=Zg(null,t,e,r,i);break e}}throw t=me(e)||e,Error(s(306,t,""))}}return t;case 0:return wd(e,t,t.type,t.pendingProps,i);case 1:return r=t.type,c=ei(r,t.pendingProps),im(e,t,r,c,i);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var u=t.memoizedState;c=u.element,Xc(e,t),Dr(t,r,null,i);var g=t.memoizedState;if(r=g.cache,fn(t,ft,r),r!==u.cache&&Pc(t,[ft],i,!0),Rr(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=rm(e,t,r,i);break e}else if(r!==c){c=da(Error(s(424)),t),Nr(c),t=rm(e,t,r,i);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,at=ma(e.firstChild),Nt=t,We=!0,un=null,fa=!0,i=eg(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Vn(),r===c){t=Pa(e,t,i);break e}Tt(e,t,r,i)}t=t.child}return t;case 26:return wl(e,t),e===null?(i=vh(t.type,null,t.pendingProps,null))?t.memoizedState=i:We||(i=t.type,e=t.pendingProps,r=Wl(ge.current).createElement(i),r[kt]=t,r[Ut]=e,zt(r,i,e),jt(r),t.stateNode=r):t.memoizedState=vh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return et(t),e===null&&We&&(r=t.stateNode=xh(t.type,t.pendingProps,ge.current),Nt=t,fa=!0,c=at,Cn(t.type)?(su=c,at=ma(r.firstChild)):at=c),Tt(e,t,t.pendingProps.children,i),wl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&We&&((c=r=at)&&(r=tv(r,t.type,t.pendingProps,fa),r!==null?(t.stateNode=r,Nt=t,at=ma(r.firstChild),fa=!1,c=!0):c=!1),c||pn(t)),et(t),c=t.type,u=t.pendingProps,g=e!==null?e.memoizedProps:null,r=u.children,nu(c,u)?r=null:g!==null&&nu(c,g)&&(t.flags|=32),t.memoizedState!==null&&(c=ad(e,t,hy,null,null,i),Zr._currentValue=c),wl(e,t),Tt(e,t,r,i),t.child;case 6:return e===null&&We&&((e=i=at)&&(i=av(i,t.pendingProps,fa),i!==null?(t.stateNode=i,Nt=t,at=null,e=!0):e=!1),e||pn(t)),null;case 13:return om(e,t,i);case 4:return ke(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,i):Tt(e,t,r,i),t.child;case 11:return Qg(e,t,t.type,t.pendingProps,i);case 7:return Tt(e,t,t.pendingProps,i),t.child;case 8:return Tt(e,t,t.pendingProps.children,i),t.child;case 12:return Tt(e,t,t.pendingProps.children,i),t.child;case 10:return r=t.pendingProps,fn(t,t.type,r.value),Tt(e,t,r.children,i),t.child;case 9:return c=t.type._context,r=t.pendingProps.children,Gn(t),c=Ct(c),r=r(c),t.flags|=1,Tt(e,t,r,i),t.child;case 14:return Zg(e,t,t.type,t.pendingProps,i);case 15:return Kg(e,t,t.type,t.pendingProps,i);case 19:return sm(e,t,i);case 31:return ky(e,t,i);case 22:return em(e,t,i,t.pendingProps);case 24:return Gn(t),r=Ct(ft),e===null?(c=Vc(),c===null&&(c=Qe,u=Ic(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=i),c=u),t.memoizedState={parent:r,cache:c},Gc(t),fn(t,ft,c)):((e.lanes&i)!==0&&(Xc(e,t),Dr(t,null,null,i),Rr()),c=e.memoizedState,u=t.memoizedState,c.parent!==r?(c={parent:r,cache:r},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),fn(t,ft,r)):(r=u.cache,fn(t,ft,r),r!==c.cache&&Pc(t,[ft],i,!0))),Tt(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ia(e){e.flags|=4}function Ed(e,t,i,r,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Bm())e.flags|=8192;else throw Qn=ll,qc}else e.flags&=-16777217}function dm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Nh(t))if(Bm())e.flags|=8192;else throw Qn=ll,qc}function kl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$p():536870912,e.lanes|=t,$i|=t)}function Ur(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function Cy(e,t,i){var r=t.pendingProps;switch(Uc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return i=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Fa(ft),Ce(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ai(t)?Ia(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fc())),nt(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(Ia(t),u!==null?(nt(t),dm(t,u)):(nt(t),Ed(t,c,null,r,i))):u?u!==e.memoizedState?(Ia(t),nt(t),dm(t,u)):(nt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ia(t),nt(t),Ed(t,c,e,r,i)),null;case 27:if(tt(t),i=ge.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ia(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return nt(t),null}e=oe.current,Ai(t)?Pf(t):(e=xh(c,r,i),t.stateNode=e,Ia(t))}return nt(t),null;case 5:if(tt(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ia(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return nt(t),null}if(u=oe.current,Ai(t))Pf(t);else{var g=Wl(ge.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}u[kt]=t,u[Ut]=r;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=u;e:switch(zt(u,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ia(t)}}return nt(t),Ed(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ia(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=ge.current,Ai(t)){if(e=t.stateNode,i=t.memoizedProps,r=null,c=Nt,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[kt]=t,e=!!(e.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||oh(e.nodeValue,i)),e||pn(t,!0)}else e=Wl(e).createTextNode(r),e[kt]=t,t.stateNode=e}return nt(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ai(t),i!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[kt]=t}else Vn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),e=!1}else i=Fc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(ea(t),t):(ea(t),null);if((t.flags&128)!==0)throw Error(s(558))}return nt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ai(t),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[kt]=t}else Vn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),c=!1}else c=Fc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(ea(t),t):(ea(t),null)}return ea(t),(t.flags&128)!==0?(t.lanes=i,t):(i=r!==null,e=e!==null&&e.memoizedState!==null,i&&(r=t.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==c&&(r.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),kl(t,t.updateQueue),nt(t),null);case 4:return Ce(),e===null&&Zd(t.stateNode.containerInfo),nt(t),null;case 10:return Fa(t.type),nt(t),null;case 19:if(T(dt),r=t.memoizedState,r===null)return nt(t),null;if(c=(t.flags&128)!==0,u=r.rendering,u===null)if(c)Ur(r,!1);else{if(ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ul(e),u!==null){for(t.flags|=128,Ur(r,!1),e=u.updateQueue,t.updateQueue=e,kl(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Uf(i,e),i=i.sibling;return q(dt,dt.current&1|2),We&&Ua(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ke()>Al&&(t.flags|=128,c=!0,Ur(r,!1),t.lanes=4194304)}else{if(!c)if(e=ul(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,kl(t,e),Ur(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!We)return nt(t),null}else 2*Ke()-r.renderingStartTime>Al&&i!==536870912&&(t.flags|=128,c=!0,Ur(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ke(),e.sibling=null,i=dt.current,q(dt,c?i&1|2:i&1),We&&Ua(t,r.treeForkCount),e):(nt(t),null);case 22:case 23:return ea(t),Kc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(i&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),i=t.updateQueue,i!==null&&kl(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==i&&(t.flags|=2048),e!==null&&T(Xn),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Fa(ft),nt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Ty(e,t){switch(Uc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fa(ft),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return tt(t),null;case 31:if(t.memoizedState!==null){if(ea(t),t.alternate===null)throw Error(s(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ea(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(dt),null;case 4:return Ce(),null;case 10:return Fa(t.type),null;case 22:case 23:return ea(t),Kc(),e!==null&&T(Xn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Fa(ft),null;case 25:return null;default:return null}}function um(e,t){switch(Uc(t),t.tag){case 3:Fa(ft),Ce();break;case 26:case 27:case 5:tt(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&ea(t);break;case 13:ea(t);break;case 19:T(dt);break;case 10:Fa(t.type);break;case 22:case 23:ea(t),Kc(),e!==null&&T(Xn);break;case 24:Fa(ft)}}function Wr(e,t){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){r=void 0;var u=i.create,g=i.inst;r=u(),g.destroy=r}i=i.next}while(i!==c)}}catch(S){qe(t,t.return,S)}}function yn(e,t,i){try{var r=t.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var u=c.next;r=u;do{if((r.tag&e)===e){var g=r.inst,S=g.destroy;if(S!==void 0){g.destroy=void 0,c=t;var _=i,Z=S;try{Z()}catch(re){qe(c,_,re)}}}r=r.next}while(r!==u)}}catch(re){qe(t,t.return,re)}}function pm(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{ag(t,i)}catch(r){qe(e,e.return,r)}}}function fm(e,t,i){i.props=ei(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(r){qe(e,t,r)}}function Fr(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof i=="function"?e.refCleanup=i(r):i.current=r}}catch(c){qe(e,t,c)}}function Aa(e,t){var i=e.ref,r=e.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(c){qe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){qe(e,t,c)}else i.current=null}function gm(e){var t=e.type,i=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break e;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(c){qe(e,e.return,c)}}function Rd(e,t,i){try{var r=e.stateNode;Xy(r,e.type,i,t),r[Ut]=t}catch(c){qe(e,e.return,c)}}function mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function Dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=_a));else if(r!==4&&(r===27&&Cn(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Md(e,t,i),e=e.sibling;e!==null;)Md(e,t,i),e=e.sibling}function Nl(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(r!==4&&(r===27&&Cn(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Nl(e,t,i),e=e.sibling;e!==null;)Nl(e,t,i),e=e.sibling}function hm(e){var t=e.stateNode,i=e.memoizedProps;try{for(var r=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);zt(t,r,i),t[kt]=e,t[Ut]=i}catch(u){qe(e,e.return,u)}}var Ya=!1,ht=!1,Od=!1,xm=typeof WeakSet=="function"?WeakSet:Set,wt=null;function zy(e,t){if(e=e.containerInfo,tu=Vl,e=Af(e),Tc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var c=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var g=0,S=-1,_=-1,Z=0,re=0,ue=e,ee=null;t:for(;;){for(var ae;ue!==i||c!==0&&ue.nodeType!==3||(S=g+c),ue!==u||r!==0&&ue.nodeType!==3||(_=g+r),ue.nodeType===3&&(g+=ue.nodeValue.length),(ae=ue.firstChild)!==null;)ee=ue,ue=ae;for(;;){if(ue===e)break t;if(ee===i&&++Z===c&&(S=g),ee===u&&++re===r&&(_=g),(ae=ue.nextSibling)!==null)break;ue=ee,ee=ue.parentNode}ue=ae}i=S===-1||_===-1?null:{start:S,end:_}}else i=null}i=i||{start:0,end:0}}else i=null;for(au={focusedElem:e,selectionRange:i},Vl=!1,wt=t;wt!==null;)if(t=wt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,wt=e;else for(;wt!==null;){switch(t=wt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)c=e[i],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,i=t,c=u.memoizedProps,u=u.memoizedState,r=i.stateNode;try{var ve=ei(i.type,c);e=r.getSnapshotBeforeUpdate(ve,u),r.__reactInternalSnapshotBeforeUpdate=e}catch(Te){qe(i,i.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)ru(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ru(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,wt=e;break}wt=t.return}}function bm(e,t,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:qa(e,i),r&4&&Wr(5,i);break;case 1:if(qa(e,i),r&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(g){qe(i,i.return,g)}else{var c=ei(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){qe(i,i.return,g)}}r&64&&pm(i),r&512&&Fr(i,i.return);break;case 3:if(qa(e,i),r&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{ag(e,t)}catch(g){qe(i,i.return,g)}}break;case 27:t===null&&r&4&&hm(i);case 26:case 5:qa(e,i),t===null&&r&4&&gm(i),r&512&&Fr(i,i.return);break;case 12:qa(e,i);break;case 31:qa(e,i),r&4&&jm(e,i);break;case 13:qa(e,i),r&4&&wm(e,i),r&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Ly.bind(null,i),nv(e,i))));break;case 22:if(r=i.memoizedState!==null||Ya,!r){t=t!==null&&t.memoizedState!==null||ht,c=Ya;var u=ht;Ya=r,(ht=t)&&!u?Ga(e,i,(i.subtreeFlags&8772)!==0):qa(e,i),Ya=c,ht=u}break;case 30:break;default:qa(e,i)}}function ym(e){var t=e.alternate;t!==null&&(e.alternate=null,ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,Ft=!1;function Va(e,t,i){for(i=i.child;i!==null;)vm(e,t,i),i=i.sibling}function vm(e,t,i){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Un,i)}catch{}switch(i.tag){case 26:ht||Aa(i,t),Va(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:ht||Aa(i,t);var r=rt,c=Ft;Cn(i.type)&&(rt=i.stateNode,Ft=!1),Va(e,t,i),Xr(i.stateNode),rt=r,Ft=c;break;case 5:ht||Aa(i,t);case 6:if(r=rt,c=Ft,rt=null,Va(e,t,i),rt=r,Ft=c,rt!==null)if(Ft)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(i.stateNode)}catch(u){qe(i,t,u)}else try{rt.removeChild(i.stateNode)}catch(u){qe(i,t,u)}break;case 18:rt!==null&&(Ft?(e=rt,ph(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Ji(e)):ph(rt,i.stateNode));break;case 4:r=rt,c=Ft,rt=i.stateNode.containerInfo,Ft=!0,Va(e,t,i),rt=r,Ft=c;break;case 0:case 11:case 14:case 15:yn(2,i,t),ht||yn(4,i,t),Va(e,t,i);break;case 1:ht||(Aa(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"&&fm(i,t,r)),Va(e,t,i);break;case 21:Va(e,t,i);break;case 22:ht=(r=ht)||i.memoizedState!==null,Va(e,t,i),ht=r;break;default:Va(e,t,i)}}function jm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ji(e)}catch(i){qe(t,t.return,i)}}}function wm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ji(e)}catch(i){qe(t,t.return,i)}}function Ay(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xm),t;default:throw Error(s(435,e.tag))}}function Cl(e,t){var i=Ay(e);t.forEach(function(r){if(!i.has(r)){i.add(r);var c=Uy.bind(null,e,r);r.then(c,c)}})}function Ht(e,t){var i=t.deletions;if(i!==null)for(var r=0;r<i.length;r++){var c=i[r],u=e,g=t,S=g;e:for(;S!==null;){switch(S.tag){case 27:if(Cn(S.type)){rt=S.stateNode,Ft=!1;break e}break;case 5:rt=S.stateNode,Ft=!1;break e;case 3:case 4:rt=S.stateNode.containerInfo,Ft=!0;break e}S=S.return}if(rt===null)throw Error(s(160));vm(u,g,c),rt=null,Ft=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sm(t,e),t=t.sibling}var ja=null;function Sm(e,t){var i=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ht(t,e),$t(e),r&4&&(yn(3,e,e.return),Wr(3,e),yn(5,e,e.return));break;case 1:Ht(t,e),$t(e),r&512&&(ht||i===null||Aa(i,i.return)),r&64&&Ya&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?r:i.concat(r))));break;case 26:var c=ja;if(Ht(t,e),$t(e),r&512&&(ht||i===null||Aa(i,i.return)),r&4){var u=i!==null?i.memoizedState:null;if(r=e.memoizedState,i===null)if(r===null)if(e.stateNode===null){e:{r=e.type,i=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":u=c.getElementsByTagName("title")[0],(!u||u[fr]||u[kt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(r),c.head.insertBefore(u,c.querySelector("head > title"))),zt(u,r,i),u[kt]=e,jt(u),r=u;break e;case"link":var g=Sh("link","href",c).get(r+(i.href||""));if(g){for(var S=0;S<g.length;S++)if(u=g[S],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){g.splice(S,1);break t}}u=c.createElement(r),zt(u,r,i),c.head.appendChild(u);break;case"meta":if(g=Sh("meta","content",c).get(r+(i.content||""))){for(S=0;S<g.length;S++)if(u=g[S],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){g.splice(S,1);break t}}u=c.createElement(r),zt(u,r,i),c.head.appendChild(u);break;default:throw Error(s(468,r))}u[kt]=e,jt(u),r=u}e.stateNode=r}else kh(c,e.type,e.stateNode);else e.stateNode=wh(c,r,e.memoizedProps);else u!==r?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,r===null?kh(c,e.type,e.stateNode):wh(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Rd(e,e.memoizedProps,i.memoizedProps)}break;case 27:Ht(t,e),$t(e),r&512&&(ht||i===null||Aa(i,i.return)),i!==null&&r&4&&Rd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Ht(t,e),$t(e),r&512&&(ht||i===null||Aa(i,i.return)),e.flags&32){c=e.stateNode;try{yi(c,"")}catch(ve){qe(e,e.return,ve)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Rd(e,c,i!==null?i.memoizedProps:c)),r&1024&&(Od=!0);break;case 6:if(Ht(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,i=e.stateNode;try{i.nodeValue=r}catch(ve){qe(e,e.return,ve)}}break;case 3:if($l=null,c=ja,ja=Fl(t.containerInfo),Ht(t,e),ja=c,$t(e),r&4&&i!==null&&i.memoizedState.isDehydrated)try{Ji(t.containerInfo)}catch(ve){qe(e,e.return,ve)}Od&&(Od=!1,km(e));break;case 4:r=ja,ja=Fl(e.stateNode.containerInfo),Ht(t,e),$t(e),ja=r;break;case 12:Ht(t,e),$t(e);break;case 31:Ht(t,e),$t(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 13:Ht(t,e),$t(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(zl=Ke()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 22:c=e.memoizedState!==null;var _=i!==null&&i.memoizedState!==null,Z=Ya,re=ht;if(Ya=Z||c,ht=re||_,Ht(t,e),ht=re,Ya=Z,$t(e),r&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(i===null||_||Ya||ht||ti(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){_=i=t;try{if(u=_.stateNode,c)g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{S=_.stateNode;var ue=_.memoizedProps.style,ee=ue!=null&&ue.hasOwnProperty("display")?ue.display:null;S.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(ve){qe(_,_.return,ve)}}}else if(t.tag===6){if(i===null){_=t;try{_.stateNode.nodeValue=c?"":_.memoizedProps}catch(ve){qe(_,_.return,ve)}}}else if(t.tag===18){if(i===null){_=t;try{var ae=_.stateNode;c?fh(ae,!0):fh(_.stateNode,!1)}catch(ve){qe(_,_.return,ve)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(i=r.retryQueue,i!==null&&(r.retryQueue=null,Cl(e,i))));break;case 19:Ht(t,e),$t(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 30:break;case 21:break;default:Ht(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{for(var i,r=e.return;r!==null;){if(mm(r)){i=r;break}r=r.return}if(i==null)throw Error(s(160));switch(i.tag){case 27:var c=i.stateNode,u=Dd(e);Nl(e,u,c);break;case 5:var g=i.stateNode;i.flags&32&&(yi(g,""),i.flags&=-33);var S=Dd(e);Nl(e,S,g);break;case 3:case 4:var _=i.stateNode.containerInfo,Z=Dd(e);Md(e,Z,_);break;default:throw Error(s(161))}}catch(re){qe(e,e.return,re)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;km(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bm(e,t.alternate,t),t=t.sibling}function ti(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yn(4,t,t.return),ti(t);break;case 1:Aa(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&fm(t,t.return,i),ti(t);break;case 27:Xr(t.stateNode);case 26:case 5:Aa(t,t.return),ti(t);break;case 22:t.memoizedState===null&&ti(t);break;case 30:ti(t);break;default:ti(t)}e=e.sibling}}function Ga(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,c=e,u=t,g=u.flags;switch(u.tag){case 0:case 11:case 15:Ga(c,u,i),Wr(4,u);break;case 1:if(Ga(c,u,i),r=u,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Z){qe(r,r.return,Z)}if(r=u,c=r.updateQueue,c!==null){var S=r.stateNode;try{var _=c.shared.hiddenCallbacks;if(_!==null)for(c.shared.hiddenCallbacks=null,c=0;c<_.length;c++)tg(_[c],S)}catch(Z){qe(r,r.return,Z)}}i&&g&64&&pm(u),Fr(u,u.return);break;case 27:hm(u);case 26:case 5:Ga(c,u,i),i&&r===null&&g&4&&gm(u),Fr(u,u.return);break;case 12:Ga(c,u,i);break;case 31:Ga(c,u,i),i&&g&4&&jm(c,u);break;case 13:Ga(c,u,i),i&&g&4&&wm(c,u);break;case 22:u.memoizedState===null&&Ga(c,u,i),Fr(u,u.return);break;case 30:break;default:Ga(c,u,i)}t=t.sibling}}function _d(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Cr(i))}function Bd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e))}function wa(e,t,i,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nm(e,t,i,r),t=t.sibling}function Nm(e,t,i,r){var c=t.flags;switch(t.tag){case 0:case 11:case 15:wa(e,t,i,r),c&2048&&Wr(9,t);break;case 1:wa(e,t,i,r);break;case 3:wa(e,t,i,r),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e)));break;case 12:if(c&2048){wa(e,t,i,r),e=t.stateNode;try{var u=t.memoizedProps,g=u.id,S=u.onPostCommit;typeof S=="function"&&S(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){qe(t,t.return,_)}}else wa(e,t,i,r);break;case 31:wa(e,t,i,r);break;case 13:wa(e,t,i,r);break;case 23:break;case 22:u=t.stateNode,g=t.alternate,t.memoizedState!==null?u._visibility&2?wa(e,t,i,r):Hr(e,t):u._visibility&2?wa(e,t,i,r):(u._visibility|=2,Wi(e,t,i,r,(t.subtreeFlags&10256)!==0||!1)),c&2048&&_d(g,t);break;case 24:wa(e,t,i,r),c&2048&&Bd(t.alternate,t);break;default:wa(e,t,i,r)}}function Wi(e,t,i,r,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,g=t,S=i,_=r,Z=g.flags;switch(g.tag){case 0:case 11:case 15:Wi(u,g,S,_,c),Wr(8,g);break;case 23:break;case 22:var re=g.stateNode;g.memoizedState!==null?re._visibility&2?Wi(u,g,S,_,c):Hr(u,g):(re._visibility|=2,Wi(u,g,S,_,c)),c&&Z&2048&&_d(g.alternate,g);break;case 24:Wi(u,g,S,_,c),c&&Z&2048&&Bd(g.alternate,g);break;default:Wi(u,g,S,_,c)}t=t.sibling}}function Hr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,r=t,c=r.flags;switch(r.tag){case 22:Hr(i,r),c&2048&&_d(r.alternate,r);break;case 24:Hr(i,r),c&2048&&Bd(r.alternate,r);break;default:Hr(i,r)}t=t.sibling}}var $r=8192;function Fi(e,t,i){if(e.subtreeFlags&$r)for(e=e.child;e!==null;)Cm(e,t,i),e=e.sibling}function Cm(e,t,i){switch(e.tag){case 26:Fi(e,t,i),e.flags&$r&&e.memoizedState!==null&&mv(i,ja,e.memoizedState,e.memoizedProps);break;case 5:Fi(e,t,i);break;case 3:case 4:var r=ja;ja=Fl(e.stateNode.containerInfo),Fi(e,t,i),ja=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=$r,$r=16777216,Fi(e,t,i),$r=r):Fi(e,t,i));break;default:Fi(e,t,i)}}function Tm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];wt=r,Am(r,e)}Tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 0:case 11:case 15:Pr(e),e.flags&2048&&yn(9,e,e.return);break;case 3:Pr(e);break;case 12:Pr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tl(e)):Pr(e);break;default:Pr(e)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];wt=r,Am(r,e)}Tm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yn(8,t,t.return),Tl(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,Tl(t));break;default:Tl(t)}e=e.sibling}}function Am(e,t){for(;wt!==null;){var i=wt;switch(i.tag){case 0:case 11:case 15:yn(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Cr(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,wt=r;else e:for(i=e;wt!==null;){r=wt;var c=r.sibling,u=r.return;if(ym(r),r===i){wt=null;break e}if(c!==null){c.return=u,wt=c;break e}wt=u}}}var Ey={getCacheForType:function(e){var t=Ct(ft),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return Ct(ft).controller.signal}},Ry=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Qe=null,Oe=null,Be=0,Ve=0,ta=null,vn=!1,Hi=!1,Ld=!1,Xa=0,ct=0,jn=0,ai=0,Ud=0,aa=0,$i=0,Ir=null,Pt=null,Wd=!1,zl=0,Em=0,Al=1/0,El=null,wn=null,yt=0,Sn=null,Pi=null,Ja=0,Fd=0,Hd=null,Rm=null,Yr=0,$d=null;function na(){return(Pe&2)!==0&&Be!==0?Be&-Be:W.T!==null?Gd():Vp()}function Dm(){if(aa===0)if((Be&536870912)===0||We){var e=Uo;Uo<<=1,(Uo&3932160)===0&&(Uo=262144),aa=e}else aa=536870912;return e=Kt.current,e!==null&&(e.flags|=32),aa}function It(e,t,i){(e===Qe&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Ii(e,0),kn(e,Be,aa,!1)),pr(e,i),((Pe&2)===0||e!==Qe)&&(e===Qe&&((Pe&2)===0&&(ai|=i),ct===4&&kn(e,Be,aa,!1)),Ea(e))}function Mm(e,t,i){if((Pe&6)!==0)throw Error(s(327));var r=!i&&(t&127)===0&&(t&e.expiredLanes)===0||ur(e,t),c=r?Oy(e,t):Id(e,t,!0),u=r;do{if(c===0){Hi&&!r&&kn(e,t,0,!1);break}else{if(i=e.current.alternate,u&&!Dy(i)){c=Id(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var S=e;c=Ir;var _=S.current.memoizedState.isDehydrated;if(_&&(Ii(S,g).flags|=256),g=Id(S,g,!1),g!==2){if(Ld&&!_){S.errorRecoveryDisabledLanes|=u,ai|=u,c=4;break e}u=Pt,Pt=c,u!==null&&(Pt===null?Pt=u:Pt.push.apply(Pt,u))}c=g}if(u=!1,c!==2)continue}}if(c===1){Ii(e,0),kn(e,t,0,!0);break}e:{switch(r=e,u=c,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:kn(r,t,aa,!vn);break e;case 2:Pt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(c=zl+300-Ke(),10<c)){if(kn(r,t,aa,!vn),Fo(r,0,!0)!==0)break e;Ja=t,r.timeoutHandle=dh(Om.bind(null,r,i,Pt,El,Wd,t,aa,ai,$i,vn,u,"Throttled",-0,0),c);break e}Om(r,i,Pt,El,Wd,t,aa,ai,$i,vn,u,null,-0,0)}}break}while(!0);Ea(e)}function Om(e,t,i,r,c,u,g,S,_,Z,re,ue,ee,ae){if(e.timeoutHandle=-1,ue=t.subtreeFlags,ue&8192||(ue&16785408)===16785408){ue={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},Cm(t,u,ue);var ve=(u&62914560)===u?zl-Ke():(u&4194048)===u?Em-Ke():0;if(ve=hv(ue,ve),ve!==null){Ja=u,e.cancelPendingCommit=ve($m.bind(null,e,t,u,i,r,c,g,S,_,re,ue,null,ee,ae)),kn(e,u,g,!Z);return}}$m(e,t,u,i,r,c,g,S,_)}function Dy(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var c=i[r],u=c.getSnapshot;c=c.value;try{if(!Qt(u(),c))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,i,r){t&=~Ud,t&=~ai,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var c=t;0<c;){var u=31-Jt(c),g=1<<u;r[u]=-1,c&=~g}i!==0&&Pp(e,i,t)}function Rl(){return(Pe&6)===0?(Vr(0),!1):!0}function Pd(){if(Oe!==null){if(Ve===0)var e=Oe.return;else e=Oe,Wa=qn=null,rd(e),Oi=null,zr=0,e=Oe;for(;e!==null;)um(e.alternate,e),e=e.return;Oe=null}}function Ii(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Zy(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Ja=0,Pd(),Qe=e,Oe=i=La(e.current,null),Be=t,Ve=0,ta=null,vn=!1,Hi=ur(e,t),Ld=!1,$i=aa=Ud=ai=jn=ct=0,Pt=Ir=null,Wd=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var c=31-Jt(r),u=1<<c;t|=e[c],r&=~u}return Xa=t,Zo(),i}function _m(e,t){Ee=null,W.H=Br,t===Mi||t===ol?(t=Qf(),Ve=3):t===qc?(t=Qf(),Ve=4):Ve=t===jd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ta=t,Oe===null&&(ct=1,vl(e,da(t,e.current)))}function Bm(){var e=Kt.current;return e===null?!0:(Be&4194048)===Be?ga===null:(Be&62914560)===Be||(Be&536870912)!==0?e===ga:!1}function Lm(){var e=W.H;return W.H=Br,e===null?Br:e}function Um(){var e=W.A;return W.A=Ey,e}function Dl(){ct=4,vn||(Be&4194048)!==Be&&Kt.current!==null||(Hi=!0),(jn&134217727)===0&&(ai&134217727)===0||Qe===null||kn(Qe,Be,aa,!1)}function Id(e,t,i){var r=Pe;Pe|=2;var c=Lm(),u=Um();(Qe!==e||Be!==t)&&(El=null,Ii(e,t)),t=!1;var g=ct;e:do try{if(Ve!==0&&Oe!==null){var S=Oe,_=ta;switch(Ve){case 8:Pd(),g=6;break e;case 3:case 2:case 9:case 6:Kt.current===null&&(t=!0);var Z=Ve;if(Ve=0,ta=null,Yi(e,S,_,Z),i&&Hi){g=0;break e}break;default:Z=Ve,Ve=0,ta=null,Yi(e,S,_,Z)}}My(),g=ct;break}catch(re){_m(e,re)}while(!0);return t&&e.shellSuspendCounter++,Wa=qn=null,Pe=r,W.H=c,W.A=u,Oe===null&&(Qe=null,Be=0,Zo()),g}function My(){for(;Oe!==null;)Wm(Oe)}function Oy(e,t){var i=Pe;Pe|=2;var r=Lm(),c=Um();Qe!==e||Be!==t?(El=null,Al=Ke()+500,Ii(e,t)):Hi=ur(e,t);e:do try{if(Ve!==0&&Oe!==null){t=Oe;var u=ta;t:switch(Ve){case 1:Ve=0,ta=null,Yi(e,t,u,1);break;case 2:case 9:if(Xf(u)){Ve=0,ta=null,Fm(t);break}t=function(){Ve!==2&&Ve!==9||Qe!==e||(Ve=7),Ea(e)},u.then(t,t);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:Xf(u)?(Ve=0,ta=null,Fm(t)):(Ve=0,ta=null,Yi(e,t,u,7));break;case 5:var g=null;switch(Oe.tag){case 26:g=Oe.memoizedState;case 5:case 27:var S=Oe;if(g?Nh(g):S.stateNode.complete){Ve=0,ta=null;var _=S.sibling;if(_!==null)Oe=_;else{var Z=S.return;Z!==null?(Oe=Z,Ml(Z)):Oe=null}break t}}Ve=0,ta=null,Yi(e,t,u,5);break;case 6:Ve=0,ta=null,Yi(e,t,u,6);break;case 8:Pd(),ct=6;break e;default:throw Error(s(462))}}_y();break}catch(re){_m(e,re)}while(!0);return Wa=qn=null,W.H=r,W.A=c,Pe=i,Oe!==null?0:(Qe=null,Be=0,Zo(),ct)}function _y(){for(;Oe!==null&&!Ye();)Wm(Oe)}function Wm(e){var t=cm(e.alternate,e,Xa);e.memoizedProps=e.pendingProps,t===null?Ml(e):Oe=t}function Fm(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=nm(i,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=nm(i,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:rd(t);default:um(i,t),t=Oe=Uf(t,Xa),t=cm(i,t,Xa)}e.memoizedProps=e.pendingProps,t===null?Ml(e):Oe=t}function Yi(e,t,i,r){Wa=qn=null,rd(t),Oi=null,zr=0;var c=t.return;try{if(Sy(e,c,t,i,Be)){ct=1,vl(e,da(i,e.current)),Oe=null;return}}catch(u){if(c!==null)throw Oe=c,u;ct=1,vl(e,da(i,e.current)),Oe=null;return}t.flags&32768?(We||r===1?e=!0:Hi||(Be&536870912)!==0?e=!1:(vn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Kt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Hm(t,e)):Ml(t)}function Ml(e){var t=e;do{if((t.flags&32768)!==0){Hm(t,vn);return}e=t.return;var i=Cy(t.alternate,t,Xa);if(i!==null){Oe=i;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);ct===0&&(ct=5)}function Hm(e,t){do{var i=Ty(e.alternate,e);if(i!==null){i.flags&=32767,Oe=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){Oe=e;return}Oe=e=i}while(e!==null);ct=6,Oe=null}function $m(e,t,i,r,c,u,g,S,_){e.cancelPendingCommit=null;do Ol();while(yt!==0);if((Pe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Dc,g1(e,i,u,g,S,_),e===Qe&&(Oe=Qe=null,Be=0),Pi=t,Sn=e,Ja=i,Fd=u,Hd=c,Rm=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wy(it,function(){return qm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=W.T,W.T=null,c=ie.p,ie.p=2,g=Pe,Pe|=4;try{zy(e,t,i)}finally{Pe=g,ie.p=c,W.T=r}}yt=1,Pm(),Im(),Ym()}}function Pm(){if(yt===1){yt=0;var e=Sn,t=Pi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=W.T,W.T=null;var r=ie.p;ie.p=2;var c=Pe;Pe|=4;try{Sm(t,e);var u=au,g=Af(e.containerInfo),S=u.focusedElem,_=u.selectionRange;if(g!==S&&S&&S.ownerDocument&&zf(S.ownerDocument.documentElement,S)){if(_!==null&&Tc(S)){var Z=_.start,re=_.end;if(re===void 0&&(re=Z),"selectionStart"in S)S.selectionStart=Z,S.selectionEnd=Math.min(re,S.value.length);else{var ue=S.ownerDocument||document,ee=ue&&ue.defaultView||window;if(ee.getSelection){var ae=ee.getSelection(),ve=S.textContent.length,Te=Math.min(_.start,ve),Je=_.end===void 0?Te:Math.min(_.end,ve);!ae.extend&&Te>Je&&(g=Je,Je=Te,Te=g);var I=Tf(S,Te),U=Tf(S,Je);if(I&&U&&(ae.rangeCount!==1||ae.anchorNode!==I.node||ae.anchorOffset!==I.offset||ae.focusNode!==U.node||ae.focusOffset!==U.offset)){var Q=ue.createRange();Q.setStart(I.node,I.offset),ae.removeAllRanges(),Te>Je?(ae.addRange(Q),ae.extend(U.node,U.offset)):(Q.setEnd(U.node,U.offset),ae.addRange(Q))}}}}for(ue=[],ae=S;ae=ae.parentNode;)ae.nodeType===1&&ue.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ue.length;S++){var se=ue[S];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Vl=!!tu,au=tu=null}finally{Pe=c,ie.p=r,W.T=i}}e.current=t,yt=2}}function Im(){if(yt===2){yt=0;var e=Sn,t=Pi,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=W.T,W.T=null;var r=ie.p;ie.p=2;var c=Pe;Pe|=4;try{bm(e,t.alternate,t)}finally{Pe=c,ie.p=r,W.T=i}}yt=3}}function Ym(){if(yt===4||yt===3){yt=0,bt();var e=Sn,t=Pi,i=Ja,r=Rm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,Pi=Sn=null,Vm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(wn=null),sc(i),t=t.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Un,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=W.T,c=ie.p,ie.p=2,W.T=null;try{for(var u=e.onRecoverableError,g=0;g<r.length;g++){var S=r[g];u(S.value,{componentStack:S.stack})}}finally{W.T=t,ie.p=c}}(Ja&3)!==0&&Ol(),Ea(e),c=e.pendingLanes,(i&261930)!==0&&(c&42)!==0?e===$d?Yr++:(Yr=0,$d=e):Yr=0,Vr(0)}}function Vm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cr(t)))}function Ol(){return Pm(),Im(),Ym(),qm()}function qm(){if(yt!==5)return!1;var e=Sn,t=Fd;Fd=0;var i=sc(Ja),r=W.T,c=ie.p;try{ie.p=32>i?32:i,W.T=null,i=Hd,Hd=null;var u=Sn,g=Ja;if(yt=0,Pi=Sn=null,Ja=0,(Pe&6)!==0)throw Error(s(331));var S=Pe;if(Pe|=4,zm(u.current),Nm(u,u.current,g,i),Pe=S,Vr(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Un,u)}catch{}return!0}finally{ie.p=c,W.T=r,Vm(e,t)}}function Gm(e,t,i){t=da(i,t),t=vd(e.stateNode,t,2),e=hn(e,t,2),e!==null&&(pr(e,2),Ea(e))}function qe(e,t,i){if(e.tag===3)Gm(e,e,i);else for(;t!==null;){if(t.tag===3){Gm(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=da(i,e),i=Xg(2),r=hn(t,i,2),r!==null&&(Jg(i,r,t,e),pr(r,2),Ea(r));break}}t=t.return}}function Yd(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new Ry;var c=new Set;r.set(t,c)}else c=r.get(t),c===void 0&&(c=new Set,r.set(t,c));c.has(i)||(Ld=!0,c.add(i),e=By.bind(null,e,t,i),t.then(e,e))}function By(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Qe===e&&(Be&i)===i&&(ct===4||ct===3&&(Be&62914560)===Be&&300>Ke()-zl?(Pe&2)===0&&Ii(e,0):Ud|=i,$i===Be&&($i=0)),Ea(e)}function Xm(e,t){t===0&&(t=$p()),e=In(e,t),e!==null&&(pr(e,t),Ea(e))}function Ly(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Xm(e,i)}function Uy(e,t){var i=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),Xm(e,i)}function Wy(e,t){return ce(e,t)}var _l=null,Vi=null,Vd=!1,Bl=!1,qd=!1,Nn=0;function Ea(e){e!==Vi&&e.next===null&&(Vi===null?_l=Vi=e:Vi=Vi.next=e),Bl=!0,Vd||(Vd=!0,Hy())}function Vr(e,t){if(!qd&&Bl){qd=!0;do for(var i=!1,r=_l;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var u=0;else{var g=r.suspendedLanes,S=r.pingedLanes;u=(1<<31-Jt(42|e)+1)-1,u&=c&~(g&~S),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,Km(r,u))}else u=Be,u=Fo(r,r===Qe?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||ur(r,u)||(i=!0,Km(r,u));r=r.next}while(i);qd=!1}}function Fy(){Jm()}function Jm(){Bl=Vd=!1;var e=0;Nn!==0&&Qy()&&(e=Nn);for(var t=Ke(),i=null,r=_l;r!==null;){var c=r.next,u=Qm(r,t);u===0?(r.next=null,i===null?_l=c:i.next=c,c===null&&(Vi=i)):(i=r,(e!==0||(u&3)!==0)&&(Bl=!0)),r=c}yt!==0&&yt!==5||Vr(e),Nn!==0&&(Nn=0)}function Qm(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var g=31-Jt(u),S=1<<g,_=c[g];_===-1?((S&i)===0||(S&r)!==0)&&(c[g]=f1(S,t)):_<=t&&(e.expiredLanes|=S),u&=~S}if(t=Qe,i=Be,i=Fo(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,i===0||e===t&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&xe(r),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||ur(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(r!==null&&xe(r),sc(i)){case 2:case 8:i=ze;break;case 32:i=it;break;case 268435456:i=pi;break;default:i=it}return r=Zm.bind(null,e),i=ce(i,r),e.callbackPriority=t,e.callbackNode=i,t}return r!==null&&r!==null&&xe(r),e.callbackPriority=2,e.callbackNode=null,2}function Zm(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Ol()&&e.callbackNode!==i)return null;var r=Be;return r=Fo(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Mm(e,r,t),Qm(e,Ke()),e.callbackNode!=null&&e.callbackNode===i?Zm.bind(null,e):null)}function Km(e,t){if(Ol())return null;Mm(e,t,!0)}function Hy(){Ky(function(){(Pe&6)!==0?ce(St,Fy):Jm()})}function Gd(){if(Nn===0){var e=Ri;e===0&&(e=Lo,Lo<<=1,(Lo&261888)===0&&(Lo=256)),Nn=e}return Nn}function eh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function th(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function $y(e,t,i,r,c){if(t==="submit"&&i&&i.stateNode===c){var u=eh((c[Ut]||null).action),g=r.submitter;g&&(t=(t=g[Ut]||null)?eh(t.formAction):g.getAttribute("formAction"),t!==null&&(u=t,g=null));var S=new Go("action","action",null,r,c);e.push({event:S,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Nn!==0){var _=g?th(c,g):new FormData(c);gd(i,{pending:!0,data:_,method:c.method,action:u},null,_)}}else typeof u=="function"&&(S.preventDefault(),_=g?th(c,g):new FormData(c),gd(i,{pending:!0,data:_,method:c.method,action:u},u,_))},currentTarget:c}]})}}for(var Xd=0;Xd<Rc.length;Xd++){var Jd=Rc[Xd],Py=Jd.toLowerCase(),Iy=Jd[0].toUpperCase()+Jd.slice(1);va(Py,"on"+Iy)}va(Df,"onAnimationEnd"),va(Mf,"onAnimationIteration"),va(Of,"onAnimationStart"),va("dblclick","onDoubleClick"),va("focusin","onFocus"),va("focusout","onBlur"),va(oy,"onTransitionRun"),va(ly,"onTransitionStart"),va(sy,"onTransitionCancel"),va(_f,"onTransitionEnd"),xi("onMouseEnter",["mouseout","mouseover"]),xi("onMouseLeave",["mouseout","mouseover"]),xi("onPointerEnter",["pointerout","pointerover"]),xi("onPointerLeave",["pointerout","pointerover"]),Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qr));function ah(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],c=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var g=r.length-1;0<=g;g--){var S=r[g],_=S.instance,Z=S.currentTarget;if(S=S.listener,_!==u&&c.isPropagationStopped())break e;u=S,c.currentTarget=Z;try{u(c)}catch(re){Qo(re)}c.currentTarget=null,u=_}else for(g=0;g<r.length;g++){if(S=r[g],_=S.instance,Z=S.currentTarget,S=S.listener,_!==u&&c.isPropagationStopped())break e;u=S,c.currentTarget=Z;try{u(c)}catch(re){Qo(re)}c.currentTarget=null,u=_}}}}function _e(e,t){var i=t[cc];i===void 0&&(i=t[cc]=new Set);var r=e+"__bubble";i.has(r)||(nh(t,e,2,!1),i.add(r))}function Qd(e,t,i){var r=0;t&&(r|=4),nh(i,e,r,t)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function Zd(e){if(!e[Ll]){e[Ll]=!0,Xp.forEach(function(i){i!=="selectionchange"&&(Yy.has(i)||Qd(i,!1,e),Qd(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ll]||(t[Ll]=!0,Qd("selectionchange",!1,t))}}function nh(e,t,i,r){switch(Dh(t)){case 2:var c=yv;break;case 8:c=vv;break;default:c=fu}i=c.bind(null,t,i,e),c=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Kd(e,t,i,r,c){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var S=r.stateNode.containerInfo;if(S===c)break;if(g===4)for(g=r.return;g!==null;){var _=g.tag;if((_===3||_===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;S!==null;){if(g=gi(S),g===null)return;if(_=g.tag,_===5||_===6||_===26||_===27){r=u=g;continue e}S=S.parentNode}}r=r.return}sf(function(){var Z=u,re=hc(i),ue=[];e:{var ee=Bf.get(e);if(ee!==void 0){var ae=Go,ve=e;switch(e){case"keypress":if(Vo(i)===0)break e;case"keydown":case"keyup":ae=U1;break;case"focusin":ve="focus",ae=wc;break;case"focusout":ve="blur",ae=wc;break;case"beforeblur":case"afterblur":ae=wc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=H1;break;case Df:case Mf:case Of:ae=A1;break;case _f:ae=P1;break;case"scroll":case"scrollend":ae=k1;break;case"wheel":ae=Y1;break;case"copy":case"cut":case"paste":ae=R1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=ff;break;case"toggle":case"beforetoggle":ae=q1}var Te=(t&4)!==0,Je=!Te&&(e==="scroll"||e==="scrollend"),I=Te?ee!==null?ee+"Capture":null:ee;Te=[];for(var U=Z,Q;U!==null;){var se=U;if(Q=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Q===null||I===null||(se=mr(U,I),se!=null&&Te.push(Gr(U,se,Q))),Je)break;U=U.return}0<Te.length&&(ee=new ae(ee,ve,null,i,re),ue.push({event:ee,listeners:Te}))}}if((t&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",ae=e==="mouseout"||e==="pointerout",ee&&i!==mc&&(ve=i.relatedTarget||i.fromElement)&&(gi(ve)||ve[fi]))break e;if((ae||ee)&&(ee=re.window===re?re:(ee=re.ownerDocument)?ee.defaultView||ee.parentWindow:window,ae?(ve=i.relatedTarget||i.toElement,ae=Z,ve=ve?gi(ve):null,ve!==null&&(Je=p(ve),Te=ve.tag,ve!==Je||Te!==5&&Te!==27&&Te!==6)&&(ve=null)):(ae=null,ve=Z),ae!==ve)){if(Te=uf,se="onMouseLeave",I="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Te=ff,se="onPointerLeave",I="onPointerEnter",U="pointer"),Je=ae==null?ee:gr(ae),Q=ve==null?ee:gr(ve),ee=new Te(se,U+"leave",ae,i,re),ee.target=Je,ee.relatedTarget=Q,se=null,gi(re)===Z&&(Te=new Te(I,U+"enter",ve,i,re),Te.target=Q,Te.relatedTarget=Je,se=Te),Je=se,ae&&ve)t:{for(Te=Vy,I=ae,U=ve,Q=0,se=I;se;se=Te(se))Q++;se=0;for(var Ne=U;Ne;Ne=Te(Ne))se++;for(;0<Q-se;)I=Te(I),Q--;for(;0<se-Q;)U=Te(U),se--;for(;Q--;){if(I===U||U!==null&&I===U.alternate){Te=I;break t}I=Te(I),U=Te(U)}Te=null}else Te=null;ae!==null&&ih(ue,ee,ae,Te,!1),ve!==null&&Je!==null&&ih(ue,Je,ve,Te,!0)}}e:{if(ee=Z?gr(Z):window,ae=ee.nodeName&&ee.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ee.type==="file")var He=jf;else if(yf(ee))if(wf)He=ny;else{He=ty;var Se=ey}else ae=ee.nodeName,!ae||ae.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?Z&&gc(Z.elementType)&&(He=jf):He=ay;if(He&&(He=He(e,Z))){vf(ue,He,i,re);break e}Se&&Se(e,ee,Z),e==="focusout"&&Z&&ee.type==="number"&&Z.memoizedProps.value!=null&&fc(ee,"number",ee.value)}switch(Se=Z?gr(Z):window,e){case"focusin":(yf(Se)||Se.contentEditable==="true")&&(Si=Se,zc=Z,Sr=null);break;case"focusout":Sr=zc=Si=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Ef(ue,i,re);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Ef(ue,i,re)}var De;if(kc)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else wi?xf(e,i)&&(Le="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Le="onCompositionStart");Le&&(gf&&i.locale!=="ko"&&(wi||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&wi&&(De=cf()):(cn=re,yc="value"in cn?cn.value:cn.textContent,wi=!0)),Se=Ul(Z,Le),0<Se.length&&(Le=new pf(Le,e,null,i,re),ue.push({event:Le,listeners:Se}),De?Le.data=De:(De=bf(i),De!==null&&(Le.data=De)))),(De=X1?J1(e,i):Q1(e,i))&&(Le=Ul(Z,"onBeforeInput"),0<Le.length&&(Se=new pf("onBeforeInput","beforeinput",null,i,re),ue.push({event:Se,listeners:Le}),Se.data=De)),$y(ue,e,Z,i,re)}ah(ue,t)})}function Gr(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ul(e,t){for(var i=t+"Capture",r=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=mr(e,i),c!=null&&r.unshift(Gr(e,c,u)),c=mr(e,t),c!=null&&r.push(Gr(e,c,u))),e.tag===3)return r;e=e.return}return[]}function Vy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ih(e,t,i,r,c){for(var u=t._reactName,g=[];i!==null&&i!==r;){var S=i,_=S.alternate,Z=S.stateNode;if(S=S.tag,_!==null&&_===r)break;S!==5&&S!==26&&S!==27||Z===null||(_=Z,c?(Z=mr(i,u),Z!=null&&g.unshift(Gr(i,Z,_))):c||(Z=mr(i,u),Z!=null&&g.push(Gr(i,Z,_)))),i=i.return}g.length!==0&&e.push({event:t,listeners:g})}var qy=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function rh(e){return(typeof e=="string"?e:""+e).replace(qy,`
`).replace(Gy,"")}function oh(e,t){return t=rh(t),rh(e)===t}function Xe(e,t,i,r,c,u){switch(i){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||yi(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&yi(e,""+r);break;case"className":$o(e,"class",r);break;case"tabIndex":$o(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$o(e,i,r);break;case"style":of(e,r,u);break;case"data":if(t!=="object"){$o(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=Io(""+r),e.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(t!=="input"&&Xe(e,t,"name",c.name,c,null),Xe(e,t,"formEncType",c.formEncType,c,null),Xe(e,t,"formMethod",c.formMethod,c,null),Xe(e,t,"formTarget",c.formTarget,c,null)):(Xe(e,t,"encType",c.encType,c,null),Xe(e,t,"method",c.method,c,null),Xe(e,t,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=Io(""+r),e.setAttribute(i,r);break;case"onClick":r!=null&&(e.onclick=_a);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=i}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}i=Io(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""+r):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":r===!0?e.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(i,r):e.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(i):e.setAttribute(i,r);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Ho(e,"popover",r);break;case"xlinkActuate":Oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Oa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Oa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Oa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Oa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ho(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=w1.get(i)||i,Ho(e,i,r))}}function eu(e,t,i,r,c,u){switch(i){case"style":of(e,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=i}}break;case"children":typeof r=="string"?yi(e,r):(typeof r=="number"||typeof r=="bigint")&&yi(e,""+r);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"onClick":r!=null&&(e.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jp.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),t=i.slice(2,c?i.length-7:void 0),u=e[Ut]||null,u=u!=null?u[i]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof r=="function")){typeof u!="function"&&u!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,r,c);break e}i in e?e[i]=r:r===!0?e.setAttribute(i,""):Ho(e,i,r)}}}function zt(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var r=!1,c=!1,u;for(u in i)if(i.hasOwnProperty(u)){var g=i[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,u,g,i,null)}}c&&Xe(e,t,"srcSet",i.srcSet,i,null),r&&Xe(e,t,"src",i.src,i,null);return;case"input":_e("invalid",e);var S=u=g=c=null,_=null,Z=null;for(r in i)if(i.hasOwnProperty(r)){var re=i[r];if(re!=null)switch(r){case"name":c=re;break;case"type":g=re;break;case"checked":_=re;break;case"defaultChecked":Z=re;break;case"value":u=re;break;case"defaultValue":S=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,t));break;default:Xe(e,t,r,re,i,null)}}tf(e,u,S,_,Z,g,c,!1);return;case"select":_e("invalid",e),r=g=u=null;for(c in i)if(i.hasOwnProperty(c)&&(S=i[c],S!=null))switch(c){case"value":u=S;break;case"defaultValue":g=S;break;case"multiple":r=S;default:Xe(e,t,c,S,i,null)}t=u,i=g,e.multiple=!!r,t!=null?bi(e,!!r,t,!1):i!=null&&bi(e,!!r,i,!0);return;case"textarea":_e("invalid",e),u=c=r=null;for(g in i)if(i.hasOwnProperty(g)&&(S=i[g],S!=null))switch(g){case"value":r=S;break;case"defaultValue":c=S;break;case"children":u=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:Xe(e,t,g,S,i,null)}nf(e,r,c,u);return;case"option":for(_ in i)i.hasOwnProperty(_)&&(r=i[_],r!=null)&&(_==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Xe(e,t,_,r,i,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(r=0;r<qr.length;r++)_e(qr[r],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in i)if(i.hasOwnProperty(Z)&&(r=i[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,Z,r,i,null)}return;default:if(gc(t)){for(re in i)i.hasOwnProperty(re)&&(r=i[re],r!==void 0&&eu(e,t,re,r,i,void 0));return}}for(S in i)i.hasOwnProperty(S)&&(r=i[S],r!=null&&Xe(e,t,S,r,i,null))}function Xy(e,t,i,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,g=null,S=null,_=null,Z=null,re=null;for(ae in i){var ue=i[ae];if(i.hasOwnProperty(ae)&&ue!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":_=ue;default:r.hasOwnProperty(ae)||Xe(e,t,ae,null,r,ue)}}for(var ee in r){var ae=r[ee];if(ue=i[ee],r.hasOwnProperty(ee)&&(ae!=null||ue!=null))switch(ee){case"type":u=ae;break;case"name":c=ae;break;case"checked":Z=ae;break;case"defaultChecked":re=ae;break;case"value":g=ae;break;case"defaultValue":S=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,t));break;default:ae!==ue&&Xe(e,t,ee,ae,r,ue)}}pc(e,g,S,_,Z,re,u,c);return;case"select":ae=g=S=ee=null;for(u in i)if(_=i[u],i.hasOwnProperty(u)&&_!=null)switch(u){case"value":break;case"multiple":ae=_;default:r.hasOwnProperty(u)||Xe(e,t,u,null,r,_)}for(c in r)if(u=r[c],_=i[c],r.hasOwnProperty(c)&&(u!=null||_!=null))switch(c){case"value":ee=u;break;case"defaultValue":S=u;break;case"multiple":g=u;default:u!==_&&Xe(e,t,c,u,r,_)}t=S,i=g,r=ae,ee!=null?bi(e,!!i,ee,!1):!!r!=!!i&&(t!=null?bi(e,!!i,t,!0):bi(e,!!i,i?[]:"",!1));return;case"textarea":ae=ee=null;for(S in i)if(c=i[S],i.hasOwnProperty(S)&&c!=null&&!r.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Xe(e,t,S,null,r,c)}for(g in r)if(c=r[g],u=i[g],r.hasOwnProperty(g)&&(c!=null||u!=null))switch(g){case"value":ee=c;break;case"defaultValue":ae=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==u&&Xe(e,t,g,c,r,u)}af(e,ee,ae);return;case"option":for(var ve in i)ee=i[ve],i.hasOwnProperty(ve)&&ee!=null&&!r.hasOwnProperty(ve)&&(ve==="selected"?e.selected=!1:Xe(e,t,ve,null,r,ee));for(_ in r)ee=r[_],ae=i[_],r.hasOwnProperty(_)&&ee!==ae&&(ee!=null||ae!=null)&&(_==="selected"?e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Xe(e,t,_,ee,r,ae));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in i)ee=i[Te],i.hasOwnProperty(Te)&&ee!=null&&!r.hasOwnProperty(Te)&&Xe(e,t,Te,null,r,ee);for(Z in r)if(ee=r[Z],ae=i[Z],r.hasOwnProperty(Z)&&ee!==ae&&(ee!=null||ae!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,t));break;default:Xe(e,t,Z,ee,r,ae)}return;default:if(gc(t)){for(var Je in i)ee=i[Je],i.hasOwnProperty(Je)&&ee!==void 0&&!r.hasOwnProperty(Je)&&eu(e,t,Je,void 0,r,ee);for(re in r)ee=r[re],ae=i[re],!r.hasOwnProperty(re)||ee===ae||ee===void 0&&ae===void 0||eu(e,t,re,ee,r,ae);return}}for(var I in i)ee=i[I],i.hasOwnProperty(I)&&ee!=null&&!r.hasOwnProperty(I)&&Xe(e,t,I,null,r,ee);for(ue in r)ee=r[ue],ae=i[ue],!r.hasOwnProperty(ue)||ee===ae||ee==null&&ae==null||Xe(e,t,ue,ee,r,ae)}function lh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var c=i[r],u=c.transferSize,g=c.initiatorType,S=c.duration;if(u&&S&&lh(g)){for(g=0,S=c.responseEnd,r+=1;r<i.length;r++){var _=i[r],Z=_.startTime;if(Z>S)break;var re=_.transferSize,ue=_.initiatorType;re&&lh(ue)&&(_=_.responseEnd,g+=re*(_<S?1:(S-Z)/(_-Z)))}if(--r,t+=8*(u+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tu=null,au=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function sh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ch(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var iu=null;function Qy(){var e=window.event;return e&&e.type==="popstate"?e===iu?!1:(iu=e,!0):(iu=null,!1)}var dh=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(e){return uh.resolve(null).then(e).catch(ev)}:dh;function ev(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function ph(e,t){var i=t,r=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"||i==="/&"){if(r===0){e.removeChild(c),Ji(t);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Xr(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Xr(i);for(var u=i.firstChild;u;){var g=u.nextSibling,S=u.nodeName;u[fr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=g}}else i==="body"&&Xr(e.ownerDocument.body);i=c}while(i);Ji(t)}function fh(e,t){var i=e;e=0;do{var r=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=r}while(i)}function ru(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":ru(i),dc(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function tv(e,t,i,r){for(;e.nodeType===1;){var c=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[fr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ma(e.nextSibling),e===null)break}return null}function av(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ma(e.nextSibling),e===null))return null;return e}function gh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ma(e.nextSibling),e===null))return null;return e}function ou(e){return e.data==="$?"||e.data==="$~"}function lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nv(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var r=function(){t(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ma(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var su=null;function mh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return ma(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function xh(e,t,i){switch(t=Wl(i),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Xr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dc(e)}var ha=new Map,bh=new Set;function Fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qa=ie.d;ie.d={f:iv,r:rv,D:ov,C:lv,L:sv,m:cv,X:uv,S:dv,M:pv};function iv(){var e=Qa.f(),t=Rl();return e||t}function rv(e){var t=mi(e);t!==null&&t.tag===5&&t.type==="form"?_g(t):Qa.r(e)}var qi=typeof document>"u"?null:document;function yh(e,t,i){var r=qi;if(r&&typeof t=="string"&&t){var c=sa(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),bh.has(c)||(bh.add(c),e={rel:e,crossOrigin:i,href:t},r.querySelector(c)===null&&(t=r.createElement("link"),zt(t,"link",e),jt(t),r.head.appendChild(t)))}}function ov(e){Qa.D(e),yh("dns-prefetch",e,null)}function lv(e,t){Qa.C(e,t),yh("preconnect",e,t)}function sv(e,t,i){Qa.L(e,t,i);var r=qi;if(r&&e&&t){var c='link[rel="preload"][as="'+sa(t)+'"]';t==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+sa(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+sa(i.imageSizes)+'"]')):c+='[href="'+sa(e)+'"]';var u=c;switch(t){case"style":u=Gi(e);break;case"script":u=Xi(e)}ha.has(u)||(e=v({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),ha.set(u,e),r.querySelector(c)!==null||t==="style"&&r.querySelector(Jr(u))||t==="script"&&r.querySelector(Qr(u))||(t=r.createElement("link"),zt(t,"link",e),jt(t),r.head.appendChild(t)))}}function cv(e,t){Qa.m(e,t);var i=qi;if(i&&e){var r=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+sa(r)+'"][href="'+sa(e)+'"]',u=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Xi(e)}if(!ha.has(u)&&(e=v({rel:"modulepreload",href:e},t),ha.set(u,e),i.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Qr(u)))return}r=i.createElement("link"),zt(r,"link",e),jt(r),i.head.appendChild(r)}}}function dv(e,t,i){Qa.S(e,t,i);var r=qi;if(r&&e){var c=hi(r).hoistableStyles,u=Gi(e);t=t||"default";var g=c.get(u);if(!g){var S={loading:0,preload:null};if(g=r.querySelector(Jr(u)))S.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},i),(i=ha.get(u))&&cu(e,i);var _=g=r.createElement("link");jt(_),zt(_,"link",e),_._p=new Promise(function(Z,re){_.onload=Z,_.onerror=re}),_.addEventListener("load",function(){S.loading|=1}),_.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Hl(g,t,r)}g={type:"stylesheet",instance:g,count:1,state:S},c.set(u,g)}}}function uv(e,t){Qa.X(e,t);var i=qi;if(i&&e){var r=hi(i).hoistableScripts,c=Xi(e),u=r.get(c);u||(u=i.querySelector(Qr(c)),u||(e=v({src:e,async:!0},t),(t=ha.get(c))&&du(e,t),u=i.createElement("script"),jt(u),zt(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function pv(e,t){Qa.M(e,t);var i=qi;if(i&&e){var r=hi(i).hoistableScripts,c=Xi(e),u=r.get(c);u||(u=i.querySelector(Qr(c)),u||(e=v({src:e,async:!0,type:"module"},t),(t=ha.get(c))&&du(e,t),u=i.createElement("script"),jt(u),zt(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function vh(e,t,i,r){var c=(c=ge.current)?Fl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=Gi(i.href),i=hi(c).hoistableStyles,r=i.get(t),r||(r={type:"style",instance:null,count:0,state:null},i.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Gi(i.href);var u=hi(c).hoistableStyles,g=u.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,g),(u=c.querySelector(Jr(e)))&&!u._p&&(g.instance=u,g.state.loading=5),ha.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},ha.set(e,i),u||fv(c,e,i,g.state))),t&&r===null)throw Error(s(528,""));return g}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xi(i),i=hi(c).hoistableScripts,r=i.get(t),r||(r={type:"script",instance:null,count:0,state:null},i.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Gi(e){return'href="'+sa(e)+'"'}function Jr(e){return'link[rel="stylesheet"]['+e+"]"}function jh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function fv(e,t,i,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),zt(t,"link",i),jt(t),e.head.appendChild(t))}function Xi(e){return'[src="'+sa(e)+'"]'}function Qr(e){return"script[async]"+e}function wh(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+sa(i.href)+'"]');if(r)return t.instance=r,jt(r),r;var c=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),jt(r),zt(r,"style",c),Hl(r,i.precedence,e),t.instance=r;case"stylesheet":c=Gi(i.href);var u=e.querySelector(Jr(c));if(u)return t.state.loading|=4,t.instance=u,jt(u),u;r=jh(i),(c=ha.get(c))&&cu(r,c),u=(e.ownerDocument||e).createElement("link"),jt(u);var g=u;return g._p=new Promise(function(S,_){g.onload=S,g.onerror=_}),zt(u,"link",r),t.state.loading|=4,Hl(u,i.precedence,e),t.instance=u;case"script":return u=Xi(i.src),(c=e.querySelector(Qr(u)))?(t.instance=c,jt(c),c):(r=i,(c=ha.get(u))&&(r=v({},i),du(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),jt(c),zt(c,"link",r),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Hl(r,i.precedence,e));return t.instance}function Hl(e,t,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,u=c,g=0;g<r.length;g++){var S=r[g];if(S.dataset.precedence===t)u=S;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function cu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function du(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $l=null;function Sh(e,t,i){if($l===null){var r=new Map,c=$l=new Map;c.set(i,r)}else c=$l,r=c.get(i),r||(r=new Map,c.set(i,r));if(r.has(e))return r;for(r.set(e,null),i=i.getElementsByTagName(e),c=0;c<i.length;c++){var u=i[c];if(!(u[fr]||u[kt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(t)||"";g=e+g;var S=r.get(g);S?S.push(u):r.set(g,[u])}}return r}function kh(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function gv(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Nh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function mv(e,t,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Gi(r.href),u=t.querySelector(Jr(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Pl.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=u,jt(u);return}u=t.ownerDocument||t,r=jh(r),(c=ha.get(c))&&cu(r,c),u=u.createElement("link"),jt(u);var g=u;g._p=new Promise(function(S,_){g.onload=S,g.onerror=_}),zt(u,"link",r),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Pl.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var uu=0;function hv(e,t){return e.stylesheets&&e.count===0&&Yl(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var r=setTimeout(function(){if(e.stylesheets&&Yl(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&uu===0&&(uu=62500*Jy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yl(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>uu?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function Yl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,t.forEach(xv,e),Il=null,Pl.call(e))}function xv(e,t){if(!(t.state.loading&4)){var i=Il.get(e);if(i)var r=i.get(null);else{i=new Map,Il.set(e,i);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var g=c[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),r=g)}r&&i.set(null,r)}c=t.instance,g=c.getAttribute("data-precedence"),u=i.get(g)||r,u===r&&i.set(null,c),i.set(g,c),this.count++,r=Pl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Zr={$$typeof:O,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function bv(e,t,i,r,c,u,g,S,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.hiddenUpdates=oc(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Ch(e,t,i,r,c,u,g,S,_,Z,re,ue){return e=new bv(e,t,i,g,_,Z,re,ue,S),t=1,u===!0&&(t|=24),u=Zt(3,null,null,t),e.current=u,u.stateNode=e,t=Ic(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:t},Gc(u),e}function Th(e){return e?(e=Ci,e):Ci}function zh(e,t,i,r,c,u){c=Th(c),r.context===null?r.context=c:r.pendingContext=c,r=mn(t),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=hn(e,r,t),i!==null&&(It(i,e,t),Er(i,e,t))}function Ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function pu(e,t){Ah(e,t),(e=e.alternate)&&Ah(e,t)}function Eh(e){if(e.tag===13||e.tag===31){var t=In(e,67108864);t!==null&&It(t,e,67108864),pu(e,67108864)}}function Rh(e){if(e.tag===13||e.tag===31){var t=na();t=lc(t);var i=In(e,t);i!==null&&It(i,e,t),pu(e,t)}}var Vl=!0;function yv(e,t,i,r){var c=W.T;W.T=null;var u=ie.p;try{ie.p=2,fu(e,t,i,r)}finally{ie.p=u,W.T=c}}function vv(e,t,i,r){var c=W.T;W.T=null;var u=ie.p;try{ie.p=8,fu(e,t,i,r)}finally{ie.p=u,W.T=c}}function fu(e,t,i,r){if(Vl){var c=gu(r);if(c===null)Kd(e,t,r,ql,i),Mh(e,r);else if(wv(c,e,t,i,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jv.indexOf(e)){for(;c!==null;){var u=mi(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=Wn(u.pendingLanes);if(g!==0){var S=u;for(S.pendingLanes|=2,S.entangledLanes|=2;g;){var _=1<<31-Jt(g);S.entanglements[1]|=_,g&=~_}Ea(u),(Pe&6)===0&&(Al=Ke()+500,Vr(0))}}break;case 31:case 13:S=In(u,2),S!==null&&It(S,u,2),Rl(),pu(u,2)}if(u=gu(r),u===null&&Kd(e,t,r,ql,i),u===c)break;c=u}c!==null&&r.stopPropagation()}else Kd(e,t,r,null,i)}}function gu(e){return e=hc(e),mu(e)}var ql=null;function mu(e){if(ql=null,e=gi(e),e!==null){var t=p(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=f(t),e!==null)return e;e=null}else if(i===31){if(e=x(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ql=e,null}function Dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case St:return 2;case ze:return 8;case it:case Bn:return 32;case pi:return 268435456;default:return 32}default:return 32}}var hu=!1,Tn=null,zn=null,An=null,Kr=new Map,eo=new Map,En=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mh(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function to(e,t,i,r,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[c]},t!==null&&(t=mi(t),t!==null&&Eh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function wv(e,t,i,r,c){switch(t){case"focusin":return Tn=to(Tn,e,t,i,r,c),!0;case"dragenter":return zn=to(zn,e,t,i,r,c),!0;case"mouseover":return An=to(An,e,t,i,r,c),!0;case"pointerover":var u=c.pointerId;return Kr.set(u,to(Kr.get(u)||null,e,t,i,r,c)),!0;case"gotpointercapture":return u=c.pointerId,eo.set(u,to(eo.get(u)||null,e,t,i,r,c)),!0}return!1}function Oh(e){var t=gi(e.target);if(t!==null){var i=p(t);if(i!==null){if(t=i.tag,t===13){if(t=f(i),t!==null){e.blockedOn=t,qp(e.priority,function(){Rh(i)});return}}else if(t===31){if(t=x(i),t!==null){e.blockedOn=t,qp(e.priority,function(){Rh(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=gu(e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);mc=r,i.target.dispatchEvent(r),mc=null}else return t=mi(i),t!==null&&Eh(t),e.blockedOn=i,!1;t.shift()}return!0}function _h(e,t,i){Gl(e)&&i.delete(t)}function Sv(){hu=!1,Tn!==null&&Gl(Tn)&&(Tn=null),zn!==null&&Gl(zn)&&(zn=null),An!==null&&Gl(An)&&(An=null),Kr.forEach(_h),eo.forEach(_h)}function Xl(e,t){e.blockedOn===t&&(e.blockedOn=null,hu||(hu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Sv)))}var Jl=null;function Bh(e){Jl!==e&&(Jl=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Jl===e&&(Jl=null);for(var t=0;t<e.length;t+=3){var i=e[t],r=e[t+1],c=e[t+2];if(typeof r!="function"){if(mu(r||i)===null)continue;break}var u=mi(i);u!==null&&(e.splice(t,3),t-=3,gd(u,{pending:!0,data:c,method:i.method,action:r},r,c))}}))}function Ji(e){function t(_){return Xl(_,e)}Tn!==null&&Xl(Tn,e),zn!==null&&Xl(zn,e),An!==null&&Xl(An,e),Kr.forEach(t),eo.forEach(t);for(var i=0;i<En.length;i++){var r=En[i];r.blockedOn===e&&(r.blockedOn=null)}for(;0<En.length&&(i=En[0],i.blockedOn===null);)Oh(i),i.blockedOn===null&&En.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var c=i[r],u=i[r+1],g=c[Ut]||null;if(typeof u=="function")g||Bh(i);else if(g){var S=null;if(u&&u.hasAttribute("formAction")){if(c=u,g=u[Ut]||null)S=g.formAction;else if(mu(c)!==null)continue}else S=g.action;typeof S=="function"?i[r+1]=S:(i.splice(r,3),r-=3),Bh(i)}}}function Lh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function xu(e){this._internalRoot=e}Ql.prototype.render=xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var i=t.current,r=na();zh(i,r,e,t,null,null)},Ql.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zh(e.current,2,null,e,null,null),Rl(),t[fi]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vp();e={blockedOn:null,target:e,priority:t};for(var i=0;i<En.length&&t!==0&&t<En[i].priority;i++);En.splice(i,0,e),i===0&&Oh(e)}};var Uh=o.version;if(Uh!=="19.2.3")throw Error(s(527,Uh,"19.2.3"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var kv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Un=Zl.inject(kv),pt=Zl}catch{}}return no.createRoot=function(e,t){if(!d(e))throw Error(s(299));var i=!1,r="",c=Yg,u=Vg,g=qg;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=Ch(e,1,!1,null,null,i,r,null,c,u,g,Lh),e[fi]=t.current,Zd(e),new xu(t)},no.hydrateRoot=function(e,t,i){if(!d(e))throw Error(s(299));var r=!1,c="",u=Yg,g=Vg,S=qg,_=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.formState!==void 0&&(_=i.formState)),t=Ch(e,1,!0,t,i??null,r,c,_,u,g,S,Lh),t.context=Th(null),i=t.current,r=na(),r=lc(r),c=mn(r),c.callback=null,hn(i,c,r),i=r,t.current.lanes=i,pr(t,i),Ea(t),e[fi]=t.current,Zd(e),new Ql(t)},no.version="19.2.3",no}var Gh;function Ov(){if(Gh)return vu.exports;Gh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),vu.exports=Mv(),vu.exports}var _v=Ov();const Bv=Cx(_v);var Xh="popstate";function Lv(n={}){function o(s,d){let{pathname:p,search:f,hash:x}=s.location;return Xu("",{pathname:p,search:f,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function l(s,d){return typeof d=="string"?d:ho(d)}return Wv(o,l,null,n)}function ot(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function ba(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Uv(){return Math.random().toString(36).substring(2,10)}function Jh(n,o){return{usr:n.state,key:n.key,idx:o}}function Xu(n,o,l=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?or(o):o,state:l,key:o&&o.key||s||Uv()}}function ho({pathname:n="/",search:o="",hash:l=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function or(n){let o={};if(n){let l=n.indexOf("#");l>=0&&(o.hash=n.substring(l),n=n.substring(0,l));let s=n.indexOf("?");s>=0&&(o.search=n.substring(s),n=n.substring(0,s)),n&&(o.pathname=n)}return o}function Wv(n,o,l,s={}){let{window:d=document.defaultView,v5Compat:p=!1}=s,f=d.history,x="POP",h=null,m=y();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function y(){return(f.state||{idx:null}).idx}function v(){x="POP";let D=y(),R=D==null?null:D-m;m=D,h&&h({action:x,location:z.location,delta:R})}function C(D,R){x="PUSH";let w=Xu(z.location,D,R);m=y()+1;let O=Jh(w,m),Y=z.createHref(w);try{f.pushState(O,"",Y)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;d.location.assign(Y)}p&&h&&h({action:x,location:z.location,delta:1})}function A(D,R){x="REPLACE";let w=Xu(z.location,D,R);m=y();let O=Jh(w,m),Y=z.createHref(w);f.replaceState(O,"",Y),p&&h&&h({action:x,location:z.location,delta:0})}function k(D){return Fv(D)}let z={get action(){return x},get location(){return n(d,f)},listen(D){if(h)throw new Error("A history only accepts one active listener");return d.addEventListener(Xh,v),h=D,()=>{d.removeEventListener(Xh,v),h=null}},createHref(D){return o(d,D)},createURL:k,encodeLocation(D){let R=k(D);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:C,replace:A,go(D){return f.go(D)}};return z}function Fv(n,o=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),ot(l,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:ho(n);return s=s.replace(/ $/,"%20"),!o&&s.startsWith("//")&&(s=l+s),new URL(s,l)}function Tx(n,o,l="/"){return Hv(n,o,l,!1)}function Hv(n,o,l,s){let d=typeof o=="string"?or(o):o,p=an(d.pathname||"/",l);if(p==null)return null;let f=zx(n);$v(f);let x=null;for(let h=0;x==null&&h<f.length;++h){let m=Kv(p);x=Qv(f[h],m,s)}return x}function zx(n,o=[],l=[],s="",d=!1){let p=(f,x,h=d,m)=>{let y={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:x,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&h)return;ot(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let v=en([s,y.relativePath]),C=l.concat(y);f.children&&f.children.length>0&&(ot(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),zx(f.children,o,C,v,h)),!(f.path==null&&!f.index)&&o.push({path:v,score:Xv(v,f.index),routesMeta:C})};return n.forEach((f,x)=>{if(f.path===""||!f.path?.includes("?"))p(f,x);else for(let h of Ax(f.path))p(f,x,!0,h)}),o}function Ax(n){let o=n.split("/");if(o.length===0)return[];let[l,...s]=o,d=l.endsWith("?"),p=l.replace(/\?$/,"");if(s.length===0)return d?[p,""]:[p];let f=Ax(s.join("/")),x=[];return x.push(...f.map(h=>h===""?p:[p,h].join("/"))),d&&x.push(...f),x.map(h=>n.startsWith("/")&&h===""?"/":h)}function $v(n){n.sort((o,l)=>o.score!==l.score?l.score-o.score:Jv(o.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}var Pv=/^:[\w-]+$/,Iv=3,Yv=2,Vv=1,qv=10,Gv=-2,Qh=n=>n==="*";function Xv(n,o){let l=n.split("/"),s=l.length;return l.some(Qh)&&(s+=Gv),o&&(s+=Yv),l.filter(d=>!Qh(d)).reduce((d,p)=>d+(Pv.test(p)?Iv:p===""?Vv:qv),s)}function Jv(n,o){return n.length===o.length&&n.slice(0,-1).every((s,d)=>s===o[d])?n[n.length-1]-o[o.length-1]:0}function Qv(n,o,l=!1){let{routesMeta:s}=n,d={},p="/",f=[];for(let x=0;x<s.length;++x){let h=s[x],m=x===s.length-1,y=p==="/"?o:o.slice(p.length)||"/",v=vs({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},y),C=h.route;if(!v&&m&&l&&!s[s.length-1].route.index&&(v=vs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!v)return null;Object.assign(d,v.params),f.push({params:d,pathname:en([p,v.pathname]),pathnameBase:n2(en([p,v.pathnameBase])),route:C}),v.pathnameBase!=="/"&&(p=en([p,v.pathnameBase]))}return f}function vs(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,s]=Zv(n.path,n.caseSensitive,n.end),d=o.match(l);if(!d)return null;let p=d[0],f=p.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:v},C)=>{if(y==="*"){let k=x[C]||"";f=p.slice(0,p.length-k.length).replace(/(.)\/+$/,"$1")}const A=x[C];return v&&!A?m[y]=void 0:m[y]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:f,pattern:n}}function Zv(n,o=!1,l=!0){ba(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],d="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,x,h)=>(s.push({paramName:x,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),d+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?d+="\\/*$":n!==""&&n!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),s]}function Kv(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return ba(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function an(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let l=o.endsWith("/")?o.length-1:o.length,s=n.charAt(l);return s&&s!=="/"?null:n.slice(l)||"/"}var Ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e2=n=>Ex.test(n);function t2(n,o="/"){let{pathname:l,search:s="",hash:d=""}=typeof n=="string"?or(n):n,p;if(l)if(e2(l))p=l;else{if(l.includes("//")){let f=l;l=l.replace(/\/\/+/g,"/"),ba(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${l}`)}l.startsWith("/")?p=Zh(l.substring(1),"/"):p=Zh(l,o)}else p=o;return{pathname:p,search:i2(s),hash:r2(d)}}function Zh(n,o){let l=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(d=>{d===".."?l.length>1&&l.pop():d!=="."&&l.push(d)}),l.length>1?l.join("/"):"/"}function ku(n,o,l,s){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function a2(n){return n.filter((o,l)=>l===0||o.route.path&&o.route.path.length>0)}function Sp(n){let o=a2(n);return o.map((l,s)=>s===o.length-1?l.pathname:l.pathnameBase)}function kp(n,o,l,s=!1){let d;typeof n=="string"?d=or(n):(d={...n},ot(!d.pathname||!d.pathname.includes("?"),ku("?","pathname","search",d)),ot(!d.pathname||!d.pathname.includes("#"),ku("#","pathname","hash",d)),ot(!d.search||!d.search.includes("#"),ku("#","search","hash",d)));let p=n===""||d.pathname==="",f=p?"/":d.pathname,x;if(f==null)x=l;else{let v=o.length-1;if(!s&&f.startsWith("..")){let C=f.split("/");for(;C[0]==="..";)C.shift(),v-=1;d.pathname=C.join("/")}x=v>=0?o[v]:"/"}let h=t2(d,x),m=f&&f!=="/"&&f.endsWith("/"),y=(p||f===".")&&l.endsWith("/");return!h.pathname.endsWith("/")&&(m||y)&&(h.pathname+="/"),h}var en=n=>n.join("/").replace(/\/\/+/g,"/"),n2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),i2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,r2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,o2=class{constructor(n,o,l,s=!1){this.status=n,this.statusText=o||"",this.internal=s,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function l2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function s2(n){return n.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dx(n,o){let l=n;if(typeof l!="string"||!Ex.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let s=l,d=!1;if(Rx)try{let p=new URL(window.location.href),f=l.startsWith("//")?new URL(p.protocol+l):new URL(l),x=an(f.pathname,o);f.origin===p.origin&&x!=null?l=x+f.search+f.hash:d=!0}catch{ba(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:d,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mx=["POST","PUT","PATCH","DELETE"];new Set(Mx);var c2=["GET",...Mx];new Set(c2);var lr=b.createContext(null);lr.displayName="DataRouter";var Hs=b.createContext(null);Hs.displayName="DataRouterState";var d2=b.createContext(!1),Ox=b.createContext({isTransitioning:!1});Ox.displayName="ViewTransition";var u2=b.createContext(new Map);u2.displayName="Fetchers";var p2=b.createContext(null);p2.displayName="Await";var oa=b.createContext(null);oa.displayName="Navigation";var Co=b.createContext(null);Co.displayName="Location";var ya=b.createContext({outlet:null,matches:[],isDataRoute:!1});ya.displayName="Route";var Np=b.createContext(null);Np.displayName="RouteError";var _x="REACT_ROUTER_ERROR",f2="REDIRECT",g2="ROUTE_ERROR_RESPONSE";function m2(n){if(n.startsWith(`${_x}:${f2}:{`))try{let o=JSON.parse(n.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function h2(n){if(n.startsWith(`${_x}:${g2}:{`))try{let o=JSON.parse(n.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new o2(o.status,o.statusText,o.data)}catch{}}function x2(n,{relative:o}={}){ot(sr(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:s}=b.useContext(oa),{hash:d,pathname:p,search:f}=To(n,{relative:o}),x=p;return l!=="/"&&(x=p==="/"?l:en([l,p])),s.createHref({pathname:x,search:f,hash:d})}function sr(){return b.useContext(Co)!=null}function Ma(){return ot(sr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Co).location}var Bx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lx(n){b.useContext(oa).static||b.useLayoutEffect(n)}function vt(){let{isDataRoute:n}=b.useContext(ya);return n?M2():b2()}function b2(){ot(sr(),"useNavigate() may be used only in the context of a <Router> component.");let n=b.useContext(lr),{basename:o,navigator:l}=b.useContext(oa),{matches:s}=b.useContext(ya),{pathname:d}=Ma(),p=JSON.stringify(Sp(s)),f=b.useRef(!1);return Lx(()=>{f.current=!0}),b.useCallback((h,m={})=>{if(ba(f.current,Bx),!f.current)return;if(typeof h=="number"){l.go(h);return}let y=kp(h,JSON.parse(p),d,m.relative==="path");n==null&&o!=="/"&&(y.pathname=y.pathname==="/"?o:en([o,y.pathname])),(m.replace?l.replace:l.push)(y,m.state,m)},[o,l,p,d,n])}var y2=b.createContext(null);function v2(n){let o=b.useContext(ya).outlet;return b.useMemo(()=>o&&b.createElement(y2.Provider,{value:n},o),[o,n])}function j2(){let{matches:n}=b.useContext(ya),o=n[n.length-1];return o?o.params:{}}function To(n,{relative:o}={}){let{matches:l}=b.useContext(ya),{pathname:s}=Ma(),d=JSON.stringify(Sp(l));return b.useMemo(()=>kp(n,JSON.parse(d),s,o==="path"),[n,d,s,o])}function w2(n,o){return Ux(n,o)}function Ux(n,o,l,s,d){ot(sr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=b.useContext(oa),{matches:f}=b.useContext(ya),x=f[f.length-1],h=x?x.params:{},m=x?x.pathname:"/",y=x?x.pathnameBase:"/",v=x&&x.route;{let w=v&&v.path||"";Fx(m,!v||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let C=Ma(),A;if(o){let w=typeof o=="string"?or(o):o;ot(y==="/"||w.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${w.pathname}" was given in the \`location\` prop.`),A=w}else A=C;let k=A.pathname||"/",z=k;if(y!=="/"){let w=y.replace(/^\//,"").split("/");z="/"+k.replace(/^\//,"").split("/").slice(w.length).join("/")}let D=Tx(n,{pathname:z});ba(v||D!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),ba(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=T2(D&&D.map(w=>Object.assign({},w,{params:Object.assign({},h,w.params),pathname:en([y,p.encodeLocation?p.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?y:en([y,p.encodeLocation?p.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,l,s,d);return o&&R?b.createElement(Co.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},R):R}function S2(){let n=D2(),o=l2(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},p={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},o),l?b.createElement("pre",{style:d},l):null,f)}var k2=b.createElement(S2,null),Wx=class extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){this.props.onError?this.props.onError(n,o):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const l=h2(n.digest);l&&(n=l)}let o=n!==void 0?b.createElement(ya.Provider,{value:this.props.routeContext},b.createElement(Np.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?b.createElement(N2,{error:n},o):o}};Wx.contextType=d2;var Nu=new WeakMap;function N2({children:n,error:o}){let{basename:l}=b.useContext(oa);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let s=m2(o.digest);if(s){let d=Nu.get(o);if(d)throw d;let p=Dx(s.location,l);if(Rx&&!Nu.get(o))if(p.isExternal||s.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:s.replace}));throw Nu.set(o,f),f}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return n}function C2({routeContext:n,match:o,children:l}){let s=b.useContext(lr);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),b.createElement(ya.Provider,{value:n},l)}function T2(n,o=[],l=null,s=null,d=null){if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(o.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let p=n,f=l?.errors;if(f!=null){let y=p.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);ot(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),p=p.slice(0,Math.min(p.length,y+1))}let x=!1,h=-1;if(l)for(let y=0;y<p.length;y++){let v=p[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=y),v.route.id){let{loaderData:C,errors:A}=l,k=v.route.loader&&!C.hasOwnProperty(v.route.id)&&(!A||A[v.route.id]===void 0);if(v.route.lazy||k){x=!0,h>=0?p=p.slice(0,h+1):p=[p[0]];break}}}let m=l&&s?(y,v)=>{s(y,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:s2(l.matches),errorInfo:v})}:void 0;return p.reduceRight((y,v,C)=>{let A,k=!1,z=null,D=null;l&&(A=f&&v.route.id?f[v.route.id]:void 0,z=v.route.errorElement||k2,x&&(h<0&&C===0?(Fx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,D=null):h===C&&(k=!0,D=v.route.hydrateFallbackElement||null)));let R=o.concat(p.slice(0,C+1)),w=()=>{let O;return A?O=z:k?O=D:v.route.Component?O=b.createElement(v.route.Component,null):v.route.element?O=v.route.element:O=y,b.createElement(C2,{match:v,routeContext:{outlet:y,matches:R,isDataRoute:l!=null},children:O})};return l&&(v.route.ErrorBoundary||v.route.errorElement||C===0)?b.createElement(Wx,{location:l.location,revalidation:l.revalidation,component:z,error:A,children:w(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:m}):w()},null)}function Cp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z2(n){let o=b.useContext(lr);return ot(o,Cp(n)),o}function A2(n){let o=b.useContext(Hs);return ot(o,Cp(n)),o}function E2(n){let o=b.useContext(ya);return ot(o,Cp(n)),o}function Tp(n){let o=E2(n),l=o.matches[o.matches.length-1];return ot(l.route.id,`${n} can only be used on routes that contain a unique "id"`),l.route.id}function R2(){return Tp("useRouteId")}function D2(){let n=b.useContext(Np),o=A2("useRouteError"),l=Tp("useRouteError");return n!==void 0?n:o.errors?.[l]}function M2(){let{router:n}=z2("useNavigate"),o=Tp("useNavigate"),l=b.useRef(!1);return Lx(()=>{l.current=!0}),b.useCallback(async(d,p={})=>{ba(l.current,Bx),l.current&&(typeof d=="number"?await n.navigate(d):await n.navigate(d,{fromRouteId:o,...p}))},[n,o])}var Kh={};function Fx(n,o,l){!o&&!Kh[n]&&(Kh[n]=!0,ba(!1,l))}b.memo(O2);function O2({routes:n,future:o,state:l,onError:s}){return Ux(n,void 0,l,s,o)}function zp({to:n,replace:o,state:l,relative:s}){ot(sr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=b.useContext(oa);ba(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=b.useContext(ya),{pathname:f}=Ma(),x=vt(),h=kp(n,Sp(p),f,s==="path"),m=JSON.stringify(h);return b.useEffect(()=>{x(JSON.parse(m),{replace:o,state:l,relative:s})},[x,m,s,o,l]),null}function _2(n){return v2(n.context)}function lt(n){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function B2({basename:n="/",children:o=null,location:l,navigationType:s="POP",navigator:d,static:p=!1,unstable_useTransitions:f}){ot(!sr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=n.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:x,navigator:d,static:p,unstable_useTransitions:f,future:{}}),[x,d,p,f]);typeof l=="string"&&(l=or(l));let{pathname:m="/",search:y="",hash:v="",state:C=null,key:A="default"}=l,k=b.useMemo(()=>{let z=an(m,x);return z==null?null:{location:{pathname:z,search:y,hash:v,state:C,key:A},navigationType:s}},[x,m,y,v,C,A,s]);return ba(k!=null,`<Router basename="${x}"> is not able to match the URL "${m}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:b.createElement(oa.Provider,{value:h},b.createElement(Co.Provider,{children:o,value:k}))}function L2({children:n,location:o}){return w2(Ju(n),o)}function Ju(n,o=[]){let l=[];return b.Children.forEach(n,(s,d)=>{if(!b.isValidElement(s))return;let p=[...o,d];if(s.type===b.Fragment){l.push.apply(l,Ju(s.props.children,p));return}ot(s.type===lt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||p.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Ju(s.props.children,p)),l.push(f)}),l}var ps="get",fs="application/x-www-form-urlencoded";function $s(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function U2(n){return $s(n)&&n.tagName.toLowerCase()==="button"}function W2(n){return $s(n)&&n.tagName.toLowerCase()==="form"}function F2(n){return $s(n)&&n.tagName.toLowerCase()==="input"}function H2(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function $2(n,o){return n.button===0&&(!o||o==="_self")&&!H2(n)}var Kl=null;function P2(){if(Kl===null)try{new FormData(document.createElement("form"),0),Kl=!1}catch{Kl=!0}return Kl}var I2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cu(n){return n!=null&&!I2.has(n)?(ba(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fs}"`),null):n}function Y2(n,o){let l,s,d,p,f;if(W2(n)){let x=n.getAttribute("action");s=x?an(x,o):null,l=n.getAttribute("method")||ps,d=Cu(n.getAttribute("enctype"))||fs,p=new FormData(n)}else if(U2(n)||F2(n)&&(n.type==="submit"||n.type==="image")){let x=n.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||x.getAttribute("action");if(s=h?an(h,o):null,l=n.getAttribute("formmethod")||x.getAttribute("method")||ps,d=Cu(n.getAttribute("formenctype"))||Cu(x.getAttribute("enctype"))||fs,p=new FormData(x,n),!P2()){let{name:m,type:y,value:v}=n;if(y==="image"){let C=m?`${m}.`:"";p.append(`${C}x`,"0"),p.append(`${C}y`,"0")}else m&&p.append(m,v)}}else{if($s(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=ps,s=null,d=fs,f=n}return p&&d==="text/plain"&&(f=p,p=void 0),{action:s,method:l.toLowerCase(),encType:d,formData:p,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ap(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function V2(n,o,l,s){let d=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return l?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${s}`:d.pathname=`${d.pathname}.${s}`:d.pathname==="/"?d.pathname=`_root.${s}`:o&&an(d.pathname,o)==="/"?d.pathname=`${o.replace(/\/$/,"")}/_root.${s}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${s}`,d}async function q2(n,o){if(n.id in o)return o[n.id];try{let l=await import(n.module);return o[n.id]=l,l}catch(l){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function G2(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function X2(n,o,l){let s=await Promise.all(n.map(async d=>{let p=o.routes[d.route.id];if(p){let f=await q2(p,l);return f.links?f.links():[]}return[]}));return K2(s.flat(1).filter(G2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function e0(n,o,l,s,d,p){let f=(h,m)=>l[m]?h.route.id!==l[m].route.id:!0,x=(h,m)=>l[m].pathname!==h.pathname||l[m].route.path?.endsWith("*")&&l[m].params["*"]!==h.params["*"];return p==="assets"?o.filter((h,m)=>f(h,m)||x(h,m)):p==="data"?o.filter((h,m)=>{let y=s.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(f(h,m)||x(h,m))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function J2(n,o,{includeHydrateFallback:l}={}){return Q2(n.map(s=>{let d=o.routes[s.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),l&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function Q2(n){return[...new Set(n)]}function Z2(n){let o={},l=Object.keys(n).sort();for(let s of l)o[s]=n[s];return o}function K2(n,o){let l=new Set;return new Set(o),n.reduce((s,d)=>{let p=JSON.stringify(Z2(d));return l.has(p)||(l.add(p),s.push({key:p,link:d})),s},[])}function Hx(){let n=b.useContext(lr);return Ap(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ej(){let n=b.useContext(Hs);return Ap(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ep=b.createContext(void 0);Ep.displayName="FrameworkContext";function $x(){let n=b.useContext(Ep);return Ap(n,"You must render this element inside a <HydratedRouter> element"),n}function tj(n,o){let l=b.useContext(Ep),[s,d]=b.useState(!1),[p,f]=b.useState(!1),{onFocus:x,onBlur:h,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=o,C=b.useRef(null);b.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let z=R=>{R.forEach(w=>{f(w.isIntersecting)})},D=new IntersectionObserver(z,{threshold:.5});return C.current&&D.observe(C.current),()=>{D.disconnect()}}},[n]),b.useEffect(()=>{if(s){let z=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(z)}}},[s]);let A=()=>{d(!0)},k=()=>{d(!1),f(!1)};return l?n!=="intent"?[p,C,{}]:[p,C,{onFocus:io(x,A),onBlur:io(h,k),onMouseEnter:io(m,A),onMouseLeave:io(y,k),onTouchStart:io(v,A)}]:[!1,C,{}]}function io(n,o){return l=>{n&&n(l),l.defaultPrevented||o(l)}}function aj({page:n,...o}){let{router:l}=Hx(),s=b.useMemo(()=>Tx(l.routes,n,l.basename),[l.routes,n,l.basename]);return s?b.createElement(ij,{page:n,matches:s,...o}):null}function nj(n){let{manifest:o,routeModules:l}=$x(),[s,d]=b.useState([]);return b.useEffect(()=>{let p=!1;return X2(n,o,l).then(f=>{p||d(f)}),()=>{p=!0}},[n,o,l]),s}function ij({page:n,matches:o,...l}){let s=Ma(),{future:d,manifest:p,routeModules:f}=$x(),{basename:x}=Hx(),{loaderData:h,matches:m}=ej(),y=b.useMemo(()=>e0(n,o,m,p,s,"data"),[n,o,m,p,s]),v=b.useMemo(()=>e0(n,o,m,p,s,"assets"),[n,o,m,p,s]),C=b.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let z=new Set,D=!1;if(o.forEach(w=>{let O=p.routes[w.route.id];!O||!O.hasLoader||(!y.some(Y=>Y.route.id===w.route.id)&&w.route.id in h&&f[w.route.id]?.shouldRevalidate||O.hasClientLoader?D=!0:z.add(w.route.id))}),z.size===0)return[];let R=V2(n,x,d.unstable_trailingSlashAwareDataRequests,"data");return D&&z.size>0&&R.searchParams.set("_routes",o.filter(w=>z.has(w.route.id)).map(w=>w.route.id).join(",")),[R.pathname+R.search]},[x,d.unstable_trailingSlashAwareDataRequests,h,s,p,y,o,n,f]),A=b.useMemo(()=>J2(v,p),[v,p]),k=nj(v);return b.createElement(b.Fragment,null,C.map(z=>b.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...l})),A.map(z=>b.createElement("link",{key:z,rel:"modulepreload",href:z,...l})),k.map(({key:z,link:D})=>b.createElement("link",{key:z,nonce:l.nonce,...D})))}function rj(...n){return o=>{n.forEach(l=>{typeof l=="function"?l(o):l!=null&&(l.current=o)})}}var oj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{oj&&(window.__reactRouterVersion="7.12.0")}catch{}function lj({basename:n,children:o,unstable_useTransitions:l,window:s}){let d=b.useRef();d.current==null&&(d.current=Lv({window:s,v5Compat:!0}));let p=d.current,[f,x]=b.useState({action:p.action,location:p.location}),h=b.useCallback(m=>{l===!1?x(m):b.startTransition(()=>x(m))},[l]);return b.useLayoutEffect(()=>p.listen(h),[p,h]),b.createElement(B2,{basename:n,children:o,location:f.location,navigationType:f.action,navigator:p,unstable_useTransitions:l})}var Px=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,js=b.forwardRef(function({onClick:o,discover:l="render",prefetch:s="none",relative:d,reloadDocument:p,replace:f,state:x,target:h,to:m,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:C,...A},k){let{basename:z,unstable_useTransitions:D}=b.useContext(oa),R=typeof m=="string"&&Px.test(m),w=Dx(m,z);m=w.to;let O=x2(m,{relative:d}),[Y,J,E]=tj(s,A),F=dj(m,{replace:f,state:x,target:h,preventScrollReset:y,relative:d,viewTransition:v,unstable_defaultShouldRevalidate:C,unstable_useTransitions:D});function V(he){o&&o(he),he.defaultPrevented||F(he)}let de=b.createElement("a",{...A,...E,href:w.absoluteURL||O,onClick:w.isExternal||p?o:V,ref:rj(k,J),target:h,"data-discover":!R&&l==="render"?"true":void 0});return Y&&!R?b.createElement(b.Fragment,null,de,b.createElement(aj,{page:O})):de});js.displayName="Link";var Yt=b.forwardRef(function({"aria-current":o="page",caseSensitive:l=!1,className:s="",end:d=!1,style:p,to:f,viewTransition:x,children:h,...m},y){let v=To(f,{relative:m.relative}),C=Ma(),A=b.useContext(Hs),{navigator:k,basename:z}=b.useContext(oa),D=A!=null&&mj(v)&&x===!0,R=k.encodeLocation?k.encodeLocation(v).pathname:v.pathname,w=C.pathname,O=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;l||(w=w.toLowerCase(),O=O?O.toLowerCase():null,R=R.toLowerCase()),O&&z&&(O=an(O,z)||O);const Y=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let J=w===R||!d&&w.startsWith(R)&&w.charAt(Y)==="/",E=O!=null&&(O===R||!d&&O.startsWith(R)&&O.charAt(R.length)==="/"),F={isActive:J,isPending:E,isTransitioning:D},V=J?o:void 0,de;typeof s=="function"?de=s(F):de=[s,J?"active":null,E?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let he=typeof p=="function"?p(F):p;return b.createElement(js,{...m,"aria-current":V,className:de,ref:y,style:he,to:f,viewTransition:x},typeof h=="function"?h(F):h)});Yt.displayName="NavLink";var sj=b.forwardRef(({discover:n="render",fetcherKey:o,navigate:l,reloadDocument:s,replace:d,state:p,method:f=ps,action:x,onSubmit:h,relative:m,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:C,...A},k)=>{let{unstable_useTransitions:z}=b.useContext(oa),D=fj(),R=gj(x,{relative:m}),w=f.toLowerCase()==="get"?"get":"post",O=typeof x=="string"&&Px.test(x),Y=J=>{if(h&&h(J),J.defaultPrevented)return;J.preventDefault();let E=J.nativeEvent.submitter,F=E?.getAttribute("formmethod")||f,V=()=>D(E||J.currentTarget,{fetcherKey:o,method:F,navigate:l,replace:d,state:p,relative:m,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:C});z&&l!==!1?b.startTransition(()=>V()):V()};return b.createElement("form",{ref:k,method:w,action:R,onSubmit:s?h:Y,...A,"data-discover":!O&&n==="render"?"true":void 0})});sj.displayName="Form";function cj(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ix(n){let o=b.useContext(lr);return ot(o,cj(n)),o}function dj(n,{target:o,replace:l,state:s,preventScrollReset:d,relative:p,viewTransition:f,unstable_defaultShouldRevalidate:x,unstable_useTransitions:h}={}){let m=vt(),y=Ma(),v=To(n,{relative:p});return b.useCallback(C=>{if($2(C,o)){C.preventDefault();let A=l!==void 0?l:ho(y)===ho(v),k=()=>m(n,{replace:A,state:s,preventScrollReset:d,relative:p,viewTransition:f,unstable_defaultShouldRevalidate:x});h?b.startTransition(()=>k()):k()}},[y,m,v,l,s,o,n,d,p,f,x,h])}var uj=0,pj=()=>`__${String(++uj)}__`;function fj(){let{router:n}=Ix("useSubmit"),{basename:o}=b.useContext(oa),l=R2(),s=n.fetch,d=n.navigate;return b.useCallback(async(p,f={})=>{let{action:x,method:h,encType:m,formData:y,body:v}=Y2(p,o);if(f.navigate===!1){let C=f.fetcherKey||pj();await s(C,l,f.action||x,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:v,formMethod:f.method||h,formEncType:f.encType||m,flushSync:f.flushSync})}else await d(f.action||x,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:v,formMethod:f.method||h,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:l,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,d,o,l])}function gj(n,{relative:o}={}){let{basename:l}=b.useContext(oa),s=b.useContext(ya);ot(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),p={...To(n||".",{relative:o})},f=Ma();if(n==null){p.search=f.search;let x=new URLSearchParams(p.search),h=x.getAll("index");if(h.some(y=>y==="")){x.delete("index"),h.filter(v=>v).forEach(v=>x.append("index",v));let y=x.toString();p.search=y?`?${y}`:""}}return(!n||n===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(p.pathname=p.pathname==="/"?l:en([l,p.pathname])),ho(p)}function mj(n,{relative:o}={}){let l=b.useContext(Ox);ot(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ix("useViewTransitionState"),d=To(n,{relative:o});if(!l.isTransitioning)return!1;let p=an(l.currentLocation.pathname,s)||l.currentLocation.pathname,f=an(l.nextLocation.pathname,s)||l.nextLocation.pathname;return vs(d.pathname,f)!=null||vs(d.pathname,p)!=null}var Tu={exports:{}},zu={};var t0;function hj(){if(t0)return zu;t0=1;var n=Fs();function o(h,m){return h===m&&(h!==0||1/h===1/m)||h!==h&&m!==m}var l=typeof Object.is=="function"?Object.is:o,s=n.useSyncExternalStore,d=n.useRef,p=n.useEffect,f=n.useMemo,x=n.useDebugValue;return zu.useSyncExternalStoreWithSelector=function(h,m,y,v,C){var A=d(null);if(A.current===null){var k={hasValue:!1,value:null};A.current=k}else k=A.current;A=f(function(){function D(J){if(!R){if(R=!0,w=J,J=v(J),C!==void 0&&k.hasValue){var E=k.value;if(C(E,J))return O=E}return O=J}if(E=O,l(w,J))return E;var F=v(J);return C!==void 0&&C(E,F)?(w=J,E):(w=J,O=F)}var R=!1,w,O,Y=y===void 0?null:y;return[function(){return D(m())},Y===null?void 0:function(){return D(Y())}]},[m,y,v,C]);var z=s(h,A[0],A[1]);return p(function(){k.hasValue=!0,k.value=z},[z]),x(z),z},zu}var a0;function xj(){return a0||(a0=1,Tu.exports=hj()),Tu.exports}var bj=xj();function yj(n){n()}function vj(){let n=null,o=null;return{clear(){n=null,o=null},notify(){yj(()=>{let l=n;for(;l;)l.callback(),l=l.next})},get(){const l=[];let s=n;for(;s;)l.push(s),s=s.next;return l},subscribe(l){let s=!0;const d=o={callback:l,next:null,prev:o};return d.prev?d.prev.next=d:n=d,function(){!s||n===null||(s=!1,d.next?d.next.prev=d.prev:o=d.prev,d.prev?d.prev.next=d.next:n=d.next)}}}}var n0={notify(){},get:()=>[]};function jj(n,o){let l,s=n0,d=0,p=!1;function f(z){y();const D=s.subscribe(z);let R=!1;return()=>{R||(R=!0,D(),v())}}function x(){s.notify()}function h(){k.onStateChange&&k.onStateChange()}function m(){return p}function y(){d++,l||(l=n.subscribe(h),s=vj())}function v(){d--,l&&d===0&&(l(),l=void 0,s.clear(),s=n0)}function C(){p||(p=!0,y())}function A(){p&&(p=!1,v())}const k={addNestedSub:f,notifyNestedSubs:x,handleChangeWrapper:h,isSubscribed:m,trySubscribe:C,tryUnsubscribe:A,getListeners:()=>s};return k}var wj=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sj=wj(),kj=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Nj=kj(),Cj=()=>Sj||Nj?b.useLayoutEffect:b.useEffect,Tj=Cj(),zj=Symbol.for("react-redux-context"),Aj=typeof globalThis<"u"?globalThis:{};function Ej(){if(!b.createContext)return{};const n=Aj[zj]??=new Map;let o=n.get(b.createContext);return o||(o=b.createContext(null),n.set(b.createContext,o)),o}var On=Ej();function Rj(n){const{children:o,context:l,serverState:s,store:d}=n,p=b.useMemo(()=>{const h=jj(d);return{store:d,subscription:h,getServerState:s?()=>s:void 0}},[d,s]),f=b.useMemo(()=>d.getState(),[d]);Tj(()=>{const{subscription:h}=p;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),f!==d.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[p,f]);const x=l||On;return b.createElement(x.Provider,{value:p},o)}var Dj=Rj;function Rp(n=On){return function(){return b.useContext(n)}}var Yx=Rp();function Vx(n=On){const o=n===On?Yx:Rp(n),l=()=>{const{store:s}=o();return s};return Object.assign(l,{withTypes:()=>l}),l}var Mj=Vx();function Oj(n=On){const o=n===On?Mj:Vx(n),l=()=>o().dispatch;return Object.assign(l,{withTypes:()=>l}),l}var zo=Oj(),_j=(n,o)=>n===o;function Bj(n=On){const o=n===On?Yx:Rp(n),l=(s,d={})=>{const{equalityFn:p=_j}=typeof d=="function"?{equalityFn:d}:d,f=o(),{store:x,subscription:h,getServerState:m}=f;b.useRef(!0);const y=b.useCallback({[s.name](C){return s(C)}}[s.name],[s]),v=bj.useSyncExternalStoreWithSelector(h.addNestedSub,x.getState,m||x.getState,y,p);return b.useDebugValue(v),v};return Object.assign(l,{withTypes:()=>l}),l}var Ps=Bj();function At(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var Lj=typeof Symbol=="function"&&Symbol.observable||"@@observable",i0=Lj,Au=()=>Math.random().toString(36).substring(7).split("").join("."),Uj={INIT:`@@redux/INIT${Au()}`,REPLACE:`@@redux/REPLACE${Au()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Au()}`},ws=Uj;function Dp(n){if(typeof n!="object"||n===null)return!1;let o=n;for(;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return Object.getPrototypeOf(n)===o||Object.getPrototypeOf(n)===null}function qx(n,o,l){if(typeof n!="function")throw new Error(At(2));if(typeof o=="function"&&typeof l=="function"||typeof l=="function"&&typeof arguments[3]=="function")throw new Error(At(0));if(typeof o=="function"&&typeof l>"u"&&(l=o,o=void 0),typeof l<"u"){if(typeof l!="function")throw new Error(At(1));return l(qx)(n,o)}let s=n,d=o,p=new Map,f=p,x=0,h=!1;function m(){f===p&&(f=new Map,p.forEach((D,R)=>{f.set(R,D)}))}function y(){if(h)throw new Error(At(3));return d}function v(D){if(typeof D!="function")throw new Error(At(4));if(h)throw new Error(At(5));let R=!0;m();const w=x++;return f.set(w,D),function(){if(R){if(h)throw new Error(At(6));R=!1,m(),f.delete(w),p=null}}}function C(D){if(!Dp(D))throw new Error(At(7));if(typeof D.type>"u")throw new Error(At(8));if(typeof D.type!="string")throw new Error(At(17));if(h)throw new Error(At(9));try{h=!0,d=s(d,D)}finally{h=!1}return(p=f).forEach(w=>{w()}),D}function A(D){if(typeof D!="function")throw new Error(At(10));s=D,C({type:ws.REPLACE})}function k(){const D=v;return{subscribe(R){if(typeof R!="object"||R===null)throw new Error(At(11));function w(){const Y=R;Y.next&&Y.next(y())}return w(),{unsubscribe:D(w)}},[i0](){return this}}}return C({type:ws.INIT}),{dispatch:C,subscribe:v,getState:y,replaceReducer:A,[i0]:k}}function Wj(n){Object.keys(n).forEach(o=>{const l=n[o];if(typeof l(void 0,{type:ws.INIT})>"u")throw new Error(At(12));if(typeof l(void 0,{type:ws.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(At(13))})}function Fj(n){const o=Object.keys(n),l={};for(let p=0;p<o.length;p++){const f=o[p];typeof n[f]=="function"&&(l[f]=n[f])}const s=Object.keys(l);let d;try{Wj(l)}catch(p){d=p}return function(f={},x){if(d)throw d;let h=!1;const m={};for(let y=0;y<s.length;y++){const v=s[y],C=l[v],A=f[v],k=C(A,x);if(typeof k>"u")throw x&&x.type,new Error(At(14));m[v]=k,h=h||k!==A}return h=h||s.length!==Object.keys(f).length,h?m:f}}function Ss(...n){return n.length===0?o=>o:n.length===1?n[0]:n.reduce((o,l)=>(...s)=>o(l(...s)))}function Hj(...n){return o=>(l,s)=>{const d=o(l,s);let p=()=>{throw new Error(At(15))};const f={getState:d.getState,dispatch:(h,...m)=>p(h,...m)},x=n.map(h=>h(f));return p=Ss(...x)(d.dispatch),{...d,dispatch:p}}}function $j(n){return Dp(n)&&"type"in n&&typeof n.type=="string"}var Gx=Symbol.for("immer-nothing"),r0=Symbol.for("immer-draftable"),Bt=Symbol.for("immer-state");function Sa(n,...o){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var ra=Object,ir=ra.getPrototypeOf,ks="constructor",Is="prototype",Qu="configurable",Ns="enumerable",gs="writable",xo="value",nn=n=>!!n&&!!n[Bt];function ka(n){return n?Xx(n)||Vs(n)||!!n[r0]||!!n[ks]?.[r0]||qs(n)||Gs(n):!1}var Pj=ra[Is][ks].toString(),o0=new WeakMap;function Xx(n){if(!n||!Mp(n))return!1;const o=ir(n);if(o===null||o===ra[Is])return!0;const l=ra.hasOwnProperty.call(o,ks)&&o[ks];if(l===Object)return!0;if(!Zi(l))return!1;let s=o0.get(l);return s===void 0&&(s=Function.toString.call(l),o0.set(l,s)),s===Pj}function Ys(n,o,l=!0){Ao(n)===0?(l?Reflect.ownKeys(n):ra.keys(n)).forEach(d=>{o(d,n[d],n)}):n.forEach((s,d)=>o(d,s,n))}function Ao(n){const o=n[Bt];return o?o.type_:Vs(n)?1:qs(n)?2:Gs(n)?3:0}var l0=(n,o,l=Ao(n))=>l===2?n.has(o):ra[Is].hasOwnProperty.call(n,o),Zu=(n,o,l=Ao(n))=>l===2?n.get(o):n[o],Cs=(n,o,l,s=Ao(n))=>{s===2?n.set(o,l):s===3?n.add(l):n[o]=l};function Ij(n,o){return n===o?n!==0||1/n===1/o:n!==n&&o!==o}var Vs=Array.isArray,qs=n=>n instanceof Map,Gs=n=>n instanceof Set,Mp=n=>typeof n=="object",Zi=n=>typeof n=="function",Eu=n=>typeof n=="boolean";function Yj(n){const o=+n;return Number.isInteger(o)&&String(o)===n}var Ka=n=>n.copy_||n.base_,Op=n=>n.modified_?n.copy_:n.base_;function Ku(n,o){if(qs(n))return new Map(n);if(Gs(n))return new Set(n);if(Vs(n))return Array[Is].slice.call(n);const l=Xx(n);if(o===!0||o==="class_only"&&!l){const s=ra.getOwnPropertyDescriptors(n);delete s[Bt];let d=Reflect.ownKeys(s);for(let p=0;p<d.length;p++){const f=d[p],x=s[f];x[gs]===!1&&(x[gs]=!0,x[Qu]=!0),(x.get||x.set)&&(s[f]={[Qu]:!0,[gs]:!0,[Ns]:x[Ns],[xo]:n[f]})}return ra.create(ir(n),s)}else{const s=ir(n);if(s!==null&&l)return{...n};const d=ra.create(s);return ra.assign(d,n)}}function _p(n,o=!1){return Xs(n)||nn(n)||!ka(n)||(Ao(n)>1&&ra.defineProperties(n,{set:es,add:es,clear:es,delete:es}),ra.freeze(n),o&&Ys(n,(l,s)=>{_p(s,!0)},!1)),n}function Vj(){Sa(2)}var es={[xo]:Vj};function Xs(n){return n===null||!Mp(n)?!0:ra.isFrozen(n)}var Ts="MapSet",ep="Patches",s0="ArrayMethods",Jx={};function ci(n){const o=Jx[n];return o||Sa(0,n),o}var c0=n=>!!Jx[n],bo,Qx=()=>bo,qj=(n,o)=>({drafts_:[],parent_:n,immer_:o,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:c0(Ts)?ci(Ts):void 0,arrayMethodsPlugin_:c0(s0)?ci(s0):void 0});function d0(n,o){o&&(n.patchPlugin_=ci(ep),n.patches_=[],n.inversePatches_=[],n.patchListener_=o)}function tp(n){ap(n),n.drafts_.forEach(Gj),n.drafts_=null}function ap(n){n===bo&&(bo=n.parent_)}var u0=n=>bo=qj(bo,n);function Gj(n){const o=n[Bt];o.type_===0||o.type_===1?o.revoke_():o.revoked_=!0}function p0(n,o){o.unfinalizedDrafts_=o.drafts_.length;const l=o.drafts_[0];if(n!==void 0&&n!==l){l[Bt].modified_&&(tp(o),Sa(4)),ka(n)&&(n=f0(o,n));const{patchPlugin_:d}=o;d&&d.generateReplacementPatches_(l[Bt].base_,n,o)}else n=f0(o,l);return Xj(o,n,!0),tp(o),o.patches_&&o.patchListener_(o.patches_,o.inversePatches_),n!==Gx?n:void 0}function f0(n,o){if(Xs(o))return o;const l=o[Bt];if(!l)return zs(o,n.handledSet_,n);if(!Js(l,n))return o;if(!l.modified_)return l.base_;if(!l.finalized_){const{callbacks_:s}=l;if(s)for(;s.length>0;)s.pop()(n);eb(l,n)}return l.copy_}function Xj(n,o,l=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&_p(o,l)}function Zx(n){n.finalized_=!0,n.scope_.unfinalizedDrafts_--}var Js=(n,o)=>n.scope_===o,Jj=[];function Kx(n,o,l,s){const d=Ka(n),p=n.type_;if(s!==void 0&&Zu(d,s,p)===o){Cs(d,s,l,p);return}if(!n.draftLocations_){const x=n.draftLocations_=new Map;Ys(d,(h,m)=>{if(nn(m)){const y=x.get(m)||[];y.push(h),x.set(m,y)}})}const f=n.draftLocations_.get(o)??Jj;for(const x of f)Cs(d,x,l,p)}function Qj(n,o,l){n.callbacks_.push(function(d){const p=o;if(!p||!Js(p,d))return;d.mapSetPlugin_?.fixSetContents(p);const f=Op(p);Kx(n,p.draft_??p,f,l),eb(p,d)})}function eb(n,o){if(n.modified_&&!n.finalized_&&(n.type_===3||n.type_===1&&n.allIndicesReassigned_||(n.assigned_?.size??0)>0)){const{patchPlugin_:s}=o;if(s){const d=s.getPath(n);d&&s.generatePatches_(n,d,o)}Zx(n)}}function Zj(n,o,l){const{scope_:s}=n;if(nn(l)){const d=l[Bt];Js(d,s)&&d.callbacks_.push(function(){ms(n);const f=Op(d);Kx(n,l,f,o)})}else ka(l)&&n.callbacks_.push(function(){const p=Ka(n);n.type_===3?p.has(l)&&zs(l,s.handledSet_,s):Zu(p,o,n.type_)===l&&s.drafts_.length>1&&(n.assigned_.get(o)??!1)===!0&&n.copy_&&zs(Zu(n.copy_,o,n.type_),s.handledSet_,s)})}function zs(n,o,l){return!l.immer_.autoFreeze_&&l.unfinalizedDrafts_<1||nn(n)||o.has(n)||!ka(n)||Xs(n)||(o.add(n),Ys(n,(s,d)=>{if(nn(d)){const p=d[Bt];if(Js(p,l)){const f=Op(p);Cs(n,s,f,n.type_),Zx(p)}}else ka(d)&&zs(d,o,l)})),n}function Kj(n,o){const l=Vs(n),s={type_:l?1:0,scope_:o?o.scope_:Qx(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:o,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let d=s,p=As;l&&(d=[s],p=yo);const{revoke:f,proxy:x}=Proxy.revocable(d,p);return s.draft_=x,s.revoke_=f,[x,s]}var As={get(n,o){if(o===Bt)return n;let l=n.scope_.arrayMethodsPlugin_;const s=n.type_===1&&typeof o=="string";if(s&&l?.isArrayOperationMethod(o))return l.createMethodInterceptor(n,o);const d=Ka(n);if(!l0(d,o,n.type_))return e5(n,d,o);const p=d[o];if(n.finalized_||!ka(p)||s&&n.operationMethod&&l?.isMutatingArrayMethod(n.operationMethod)&&Yj(o))return p;if(p===Ru(n.base_,o)){ms(n);const f=n.type_===1?+o:o,x=ip(n.scope_,p,n,f);return n.copy_[f]=x}return p},has(n,o){return o in Ka(n)},ownKeys(n){return Reflect.ownKeys(Ka(n))},set(n,o,l){const s=tb(Ka(n),o);if(s?.set)return s.set.call(n.draft_,l),!0;if(!n.modified_){const d=Ru(Ka(n),o),p=d?.[Bt];if(p&&p.base_===l)return n.copy_[o]=l,n.assigned_.set(o,!1),!0;if(Ij(l,d)&&(l!==void 0||l0(n.base_,o,n.type_)))return!0;ms(n),np(n)}return n.copy_[o]===l&&(l!==void 0||o in n.copy_)||Number.isNaN(l)&&Number.isNaN(n.copy_[o])||(n.copy_[o]=l,n.assigned_.set(o,!0),Zj(n,o,l)),!0},deleteProperty(n,o){return ms(n),Ru(n.base_,o)!==void 0||o in n.base_?(n.assigned_.set(o,!1),np(n)):n.assigned_.delete(o),n.copy_&&delete n.copy_[o],!0},getOwnPropertyDescriptor(n,o){const l=Ka(n),s=Reflect.getOwnPropertyDescriptor(l,o);return s&&{[gs]:!0,[Qu]:n.type_!==1||o!=="length",[Ns]:s[Ns],[xo]:l[o]}},defineProperty(){Sa(11)},getPrototypeOf(n){return ir(n.base_)},setPrototypeOf(){Sa(12)}},yo={};for(let n in As){let o=As[n];yo[n]=function(){const l=arguments;return l[0]=l[0][0],o.apply(this,l)}}yo.deleteProperty=function(n,o){return yo.set.call(this,n,o,void 0)};yo.set=function(n,o,l){return As.set.call(this,n[0],o,l,n[0])};function Ru(n,o){const l=n[Bt];return(l?Ka(l):n)[o]}function e5(n,o,l){const s=tb(o,l);return s?xo in s?s[xo]:s.get?.call(n.draft_):void 0}function tb(n,o){if(!(o in n))return;let l=ir(n);for(;l;){const s=Object.getOwnPropertyDescriptor(l,o);if(s)return s;l=ir(l)}}function np(n){n.modified_||(n.modified_=!0,n.parent_&&np(n.parent_))}function ms(n){n.copy_||(n.assigned_=new Map,n.copy_=Ku(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var t5=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(o,l,s)=>{if(Zi(o)&&!Zi(l)){const p=l;l=o;const f=this;return function(h=p,...m){return f.produce(h,y=>l.call(this,y,...m))}}Zi(l)||Sa(6),s!==void 0&&!Zi(s)&&Sa(7);let d;if(ka(o)){const p=u0(this),f=ip(p,o,void 0);let x=!0;try{d=l(f),x=!1}finally{x?tp(p):ap(p)}return d0(p,s),p0(d,p)}else if(!o||!Mp(o)){if(d=l(o),d===void 0&&(d=o),d===Gx&&(d=void 0),this.autoFreeze_&&_p(d,!0),s){const p=[],f=[];ci(ep).generateReplacementPatches_(o,d,{patches_:p,inversePatches_:f}),s(p,f)}return d}else Sa(1,o)},this.produceWithPatches=(o,l)=>{if(Zi(o))return(f,...x)=>this.produceWithPatches(f,h=>o(h,...x));let s,d;return[this.produce(o,l,(f,x)=>{s=f,d=x}),s,d]},Eu(n?.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),Eu(n?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(n.useStrictShallowCopy),Eu(n?.useStrictIteration)&&this.setUseStrictIteration(n.useStrictIteration)}createDraft(n){ka(n)||Sa(8),nn(n)&&(n=a5(n));const o=u0(this),l=ip(o,n,void 0);return l[Bt].isManual_=!0,ap(o),l}finishDraft(n,o){const l=n&&n[Bt];(!l||!l.isManual_)&&Sa(9);const{scope_:s}=l;return d0(s,o),p0(void 0,s)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}setUseStrictIteration(n){this.useStrictIteration_=n}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(n,o){let l;for(l=o.length-1;l>=0;l--){const d=o[l];if(d.path.length===0&&d.op==="replace"){n=d.value;break}}l>-1&&(o=o.slice(l+1));const s=ci(ep).applyPatches_;return nn(n)?s(n,o):this.produce(n,d=>s(d,o))}};function ip(n,o,l,s){const[d,p]=qs(o)?ci(Ts).proxyMap_(o,l):Gs(o)?ci(Ts).proxySet_(o,l):Kj(o,l);return(l?.scope_??Qx()).drafts_.push(d),p.callbacks_=l?.callbacks_??[],p.key_=s,l&&s!==void 0?Qj(l,p,s):p.callbacks_.push(function(h){h.mapSetPlugin_?.fixSetContents(p);const{patchPlugin_:m}=h;p.modified_&&m&&m.generatePatches_(p,[],h)}),d}function a5(n){return nn(n)||Sa(10,n),ab(n)}function ab(n){if(!ka(n)||Xs(n))return n;const o=n[Bt];let l,s=!0;if(o){if(!o.modified_)return o.base_;o.finalized_=!0,l=Ku(n,o.scope_.immer_.useStrictShallowCopy_),s=o.scope_.immer_.shouldUseStrictIteration()}else l=Ku(n,!0);return Ys(l,(d,p)=>{Cs(l,d,ab(p))},s),o&&(o.finalized_=!1),l}var n5=new t5,nb=n5.produce;function ib(n){return({dispatch:l,getState:s})=>d=>p=>typeof p=="function"?p(l,s,n):d(p)}var i5=ib(),r5=ib,o5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ss:Ss.apply(null,arguments)};function g0(n,o){function l(...s){if(o){let d=o(...s);if(!d)throw new Error(tn(0));return{type:n,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:n,payload:s[0]}}return l.toString=()=>`${n}`,l.type=n,l.match=s=>$j(s)&&s.type===n,l}var rb=class fo extends Array{constructor(...o){super(...o),Object.setPrototypeOf(this,fo.prototype)}static get[Symbol.species](){return fo}concat(...o){return super.concat.apply(this,o)}prepend(...o){return o.length===1&&Array.isArray(o[0])?new fo(...o[0].concat(this)):new fo(...o.concat(this))}};function m0(n){return ka(n)?nb(n,()=>{}):n}function ts(n,o,l){return n.has(o)?n.get(o):n.set(o,l(o)).get(o)}function l5(n){return typeof n=="boolean"}var s5=()=>function(o){const{thunk:l=!0,immutableCheck:s=!0,serializableCheck:d=!0,actionCreatorCheck:p=!0}=o??{};let f=new rb;return l&&(l5(l)?f.push(i5):f.push(r5(l.extraArgument))),f},c5="RTK_autoBatch",h0=n=>o=>{setTimeout(o,n)},d5=(n={type:"raf"})=>o=>(...l)=>{const s=o(...l);let d=!0,p=!1,f=!1;const x=new Set,h=n.type==="tick"?queueMicrotask:n.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:h0(10):n.type==="callback"?n.queueNotification:h0(n.timeout),m=()=>{f=!1,p&&(p=!1,x.forEach(y=>y()))};return Object.assign({},s,{subscribe(y){const v=()=>d&&y(),C=s.subscribe(v);return x.add(y),()=>{C(),x.delete(y)}},dispatch(y){try{return d=!y?.meta?.[c5],p=!d,p&&(f||(f=!0,h(m))),s.dispatch(y)}finally{d=!0}}})},u5=n=>function(l){const{autoBatch:s=!0}=l??{};let d=new rb(n);return s&&d.push(d5(typeof s=="object"?s:void 0)),d};function p5(n){const o=s5(),{reducer:l=void 0,middleware:s,devTools:d=!0,preloadedState:p=void 0,enhancers:f=void 0}=n||{};let x;if(typeof l=="function")x=l;else if(Dp(l))x=Fj(l);else throw new Error(tn(1));let h;typeof s=="function"?h=s(o):h=o();let m=Ss;d&&(m=o5({trace:!1,...typeof d=="object"&&d}));const y=Hj(...h),v=u5(y);let C=typeof f=="function"?f(v):v();const A=m(...C);return qx(x,p,A)}function ob(n){const o={},l=[];let s;const d={addCase(p,f){const x=typeof p=="string"?p:p.type;if(!x)throw new Error(tn(28));if(x in o)throw new Error(tn(29));return o[x]=f,d},addAsyncThunk(p,f){return f.pending&&(o[p.pending.type]=f.pending),f.rejected&&(o[p.rejected.type]=f.rejected),f.fulfilled&&(o[p.fulfilled.type]=f.fulfilled),f.settled&&l.push({matcher:p.settled,reducer:f.settled}),d},addMatcher(p,f){return l.push({matcher:p,reducer:f}),d},addDefaultCase(p){return s=p,d}};return n(d),[o,l,s]}function f5(n){return typeof n=="function"}function g5(n,o){let[l,s,d]=ob(o),p;if(f5(n))p=()=>m0(n());else{const x=m0(n);p=()=>x}function f(x=p(),h){let m=[l[h.type],...s.filter(({matcher:y})=>y(h)).map(({reducer:y})=>y)];return m.filter(y=>!!y).length===0&&(m=[d]),m.reduce((y,v)=>{if(v)if(nn(y)){const A=v(y,h);return A===void 0?y:A}else{if(ka(y))return nb(y,C=>v(C,h));{const C=v(y,h);if(C===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return C}}return y},x)}return f.getInitialState=p,f}var m5=Symbol.for("rtk-slice-createasyncthunk");function h5(n,o){return`${n}/${o}`}function x5({creators:n}={}){const o=n?.asyncThunk?.[m5];return function(s){const{name:d,reducerPath:p=d}=s;if(!d)throw new Error(tn(11));const f=(typeof s.reducers=="function"?s.reducers(v5()):s.reducers)||{},x=Object.keys(f),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},m={addCase(O,Y){const J=typeof O=="string"?O:O.type;if(!J)throw new Error(tn(12));if(J in h.sliceCaseReducersByType)throw new Error(tn(13));return h.sliceCaseReducersByType[J]=Y,m},addMatcher(O,Y){return h.sliceMatchers.push({matcher:O,reducer:Y}),m},exposeAction(O,Y){return h.actionCreators[O]=Y,m},exposeCaseReducer(O,Y){return h.sliceCaseReducersByName[O]=Y,m}};x.forEach(O=>{const Y=f[O],J={reducerName:O,type:h5(d,O),createNotation:typeof s.reducers=="function"};w5(Y)?k5(J,Y,m,o):j5(J,Y,m)});function y(){const[O={},Y=[],J=void 0]=typeof s.extraReducers=="function"?ob(s.extraReducers):[s.extraReducers],E={...O,...h.sliceCaseReducersByType};return g5(s.initialState,F=>{for(let V in E)F.addCase(V,E[V]);for(let V of h.sliceMatchers)F.addMatcher(V.matcher,V.reducer);for(let V of Y)F.addMatcher(V.matcher,V.reducer);J&&F.addDefaultCase(J)})}const v=O=>O,C=new Map,A=new WeakMap;let k;function z(O,Y){return k||(k=y()),k(O,Y)}function D(){return k||(k=y()),k.getInitialState()}function R(O,Y=!1){function J(F){let V=F[O];return typeof V>"u"&&Y&&(V=ts(A,J,D)),V}function E(F=v){const V=ts(C,Y,()=>new WeakMap);return ts(V,F,()=>{const de={};for(const[he,G]of Object.entries(s.selectors??{}))de[he]=b5(G,F,()=>ts(A,F,D),Y);return de})}return{reducerPath:O,getSelectors:E,get selectors(){return E(J)},selectSlice:J}}const w={name:d,reducer:z,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:D,...R(p),injectInto(O,{reducerPath:Y,...J}={}){const E=Y??p;return O.inject({reducerPath:E,reducer:z},J),{...w,...R(E,!0)}}};return w}}function b5(n,o,l,s){function d(p,...f){let x=o(p);return typeof x>"u"&&s&&(x=l()),n(x,...f)}return d.unwrapped=n,d}var y5=x5();function v5(){function n(o,l){return{_reducerDefinitionType:"asyncThunk",payloadCreator:o,...l}}return n.withTypes=()=>n,{reducer(o){return Object.assign({[o.name](...l){return o(...l)}}[o.name],{_reducerDefinitionType:"reducer"})},preparedReducer(o,l){return{_reducerDefinitionType:"reducerWithPrepare",prepare:o,reducer:l}},asyncThunk:n}}function j5({type:n,reducerName:o,createNotation:l},s,d){let p,f;if("reducer"in s){if(l&&!S5(s))throw new Error(tn(17));p=s.reducer,f=s.prepare}else p=s;d.addCase(n,p).exposeCaseReducer(o,p).exposeAction(o,f?g0(n,f):g0(n))}function w5(n){return n._reducerDefinitionType==="asyncThunk"}function S5(n){return n._reducerDefinitionType==="reducerWithPrepare"}function k5({type:n,reducerName:o},l,s,d){if(!d)throw new Error(tn(18));const{payloadCreator:p,fulfilled:f,pending:x,rejected:h,settled:m,options:y}=l,v=d(n,p,y);s.exposeAction(o,v),f&&s.addCase(v.fulfilled,f),x&&s.addCase(v.pending,x),h&&s.addCase(v.rejected,h),m&&s.addMatcher(v.settled,m),s.exposeCaseReducer(o,{fulfilled:f||as,pending:x||as,rejected:h||as,settled:m||as})}function as(){}function tn(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}const N5={user:null,isLoggedIn:!1},lb=y5({name:"auth",initialState:N5,reducers:{loginSuccess:(n,o)=>{n.user=o.payload,n.isLoggedIn=!0},logout:n=>{n.user=null,n.isLoggedIn=!1,localStorage.removeItem("authUser"),localStorage.removeItem("token"),localStorage.removeItem("userRole")}}}),{loginSuccess:Es,logout:sb}=lb.actions,C5=lb.reducer,_n="/assets/vvcmclogo-C6hbLrf7.jpg",vo="/assets/ajivir5-DJJi1rt9.jpeg",Eo="/assets/bg1-BQodPINJ.jpeg";function cb(n,o){return function(){return n.apply(o,arguments)}}const{toString:T5}=Object.prototype,{getPrototypeOf:Bp}=Object,{iterator:Qs,toStringTag:db}=Symbol,Zs=(n=>o=>{const l=T5.call(o);return n[l]||(n[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),Na=n=>(n=n.toLowerCase(),o=>Zs(o)===n),Ks=n=>o=>typeof o===n,{isArray:cr}=Array,rr=Ks("undefined");function Ro(n){return n!==null&&!rr(n)&&n.constructor!==null&&!rr(n.constructor)&&Vt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const ub=Na("ArrayBuffer");function z5(n){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(n):o=n&&n.buffer&&ub(n.buffer),o}const A5=Ks("string"),Vt=Ks("function"),pb=Ks("number"),Do=n=>n!==null&&typeof n=="object",E5=n=>n===!0||n===!1,hs=n=>{if(Zs(n)!=="object")return!1;const o=Bp(n);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(db in n)&&!(Qs in n)},R5=n=>{if(!Do(n)||Ro(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},D5=Na("Date"),M5=Na("File"),O5=Na("Blob"),_5=Na("FileList"),B5=n=>Do(n)&&Vt(n.pipe),L5=n=>{let o;return n&&(typeof FormData=="function"&&n instanceof FormData||Vt(n.append)&&((o=Zs(n))==="formdata"||o==="object"&&Vt(n.toString)&&n.toString()==="[object FormData]"))},U5=Na("URLSearchParams"),[W5,F5,H5,$5]=["ReadableStream","Request","Response","Headers"].map(Na),P5=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mo(n,o,{allOwnKeys:l=!1}={}){if(n===null||typeof n>"u")return;let s,d;if(typeof n!="object"&&(n=[n]),cr(n))for(s=0,d=n.length;s<d;s++)o.call(null,n[s],s,n);else{if(Ro(n))return;const p=l?Object.getOwnPropertyNames(n):Object.keys(n),f=p.length;let x;for(s=0;s<f;s++)x=p[s],o.call(null,n[x],x,n)}}function fb(n,o){if(Ro(n))return null;o=o.toLowerCase();const l=Object.keys(n);let s=l.length,d;for(;s-- >0;)if(d=l[s],o===d.toLowerCase())return d;return null}const ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,gb=n=>!rr(n)&&n!==ii;function rp(){const{caseless:n,skipUndefined:o}=gb(this)&&this||{},l={},s=(d,p)=>{const f=n&&fb(l,p)||p;hs(l[f])&&hs(d)?l[f]=rp(l[f],d):hs(d)?l[f]=rp({},d):cr(d)?l[f]=d.slice():(!o||!rr(d))&&(l[f]=d)};for(let d=0,p=arguments.length;d<p;d++)arguments[d]&&Mo(arguments[d],s);return l}const I5=(n,o,l,{allOwnKeys:s}={})=>(Mo(o,(d,p)=>{l&&Vt(d)?n[p]=cb(d,l):n[p]=d},{allOwnKeys:s}),n),Y5=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),V5=(n,o,l,s)=>{n.prototype=Object.create(o.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:o.prototype}),l&&Object.assign(n.prototype,l)},q5=(n,o,l,s)=>{let d,p,f;const x={};if(o=o||{},n==null)return o;do{for(d=Object.getOwnPropertyNames(n),p=d.length;p-- >0;)f=d[p],(!s||s(f,n,o))&&!x[f]&&(o[f]=n[f],x[f]=!0);n=l!==!1&&Bp(n)}while(n&&(!l||l(n,o))&&n!==Object.prototype);return o},G5=(n,o,l)=>{n=String(n),(l===void 0||l>n.length)&&(l=n.length),l-=o.length;const s=n.indexOf(o,l);return s!==-1&&s===l},X5=n=>{if(!n)return null;if(cr(n))return n;let o=n.length;if(!pb(o))return null;const l=new Array(o);for(;o-- >0;)l[o]=n[o];return l},J5=(n=>o=>n&&o instanceof n)(typeof Uint8Array<"u"&&Bp(Uint8Array)),Q5=(n,o)=>{const s=(n&&n[Qs]).call(n);let d;for(;(d=s.next())&&!d.done;){const p=d.value;o.call(n,p[0],p[1])}},Z5=(n,o)=>{let l;const s=[];for(;(l=n.exec(o))!==null;)s.push(l);return s},K5=Na("HTMLFormElement"),ew=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,s,d){return s.toUpperCase()+d}),x0=(({hasOwnProperty:n})=>(o,l)=>n.call(o,l))(Object.prototype),tw=Na("RegExp"),mb=(n,o)=>{const l=Object.getOwnPropertyDescriptors(n),s={};Mo(l,(d,p)=>{let f;(f=o(d,p,n))!==!1&&(s[p]=f||d)}),Object.defineProperties(n,s)},aw=n=>{mb(n,(o,l)=>{if(Vt(n)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const s=n[l];if(Vt(s)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},nw=(n,o)=>{const l={},s=d=>{d.forEach(p=>{l[p]=!0})};return cr(n)?s(n):s(String(n).split(o)),l},iw=()=>{},rw=(n,o)=>n!=null&&Number.isFinite(n=+n)?n:o;function ow(n){return!!(n&&Vt(n.append)&&n[db]==="FormData"&&n[Qs])}const lw=n=>{const o=new Array(10),l=(s,d)=>{if(Do(s)){if(o.indexOf(s)>=0)return;if(Ro(s))return s;if(!("toJSON"in s)){o[d]=s;const p=cr(s)?[]:{};return Mo(s,(f,x)=>{const h=l(f,d+1);!rr(h)&&(p[x]=h)}),o[d]=void 0,p}}return s};return l(n,0)},sw=Na("AsyncFunction"),cw=n=>n&&(Do(n)||Vt(n))&&Vt(n.then)&&Vt(n.catch),hb=((n,o)=>n?setImmediate:o?((l,s)=>(ii.addEventListener("message",({source:d,data:p})=>{d===ii&&p===l&&s.length&&s.shift()()},!1),d=>{s.push(d),ii.postMessage(l,"*")}))(`axios@${Math.random()}`,[]):l=>setTimeout(l))(typeof setImmediate=="function",Vt(ii.postMessage)),dw=typeof queueMicrotask<"u"?queueMicrotask.bind(ii):typeof process<"u"&&process.nextTick||hb,uw=n=>n!=null&&Vt(n[Qs]),te={isArray:cr,isArrayBuffer:ub,isBuffer:Ro,isFormData:L5,isArrayBufferView:z5,isString:A5,isNumber:pb,isBoolean:E5,isObject:Do,isPlainObject:hs,isEmptyObject:R5,isReadableStream:W5,isRequest:F5,isResponse:H5,isHeaders:$5,isUndefined:rr,isDate:D5,isFile:M5,isBlob:O5,isRegExp:tw,isFunction:Vt,isStream:B5,isURLSearchParams:U5,isTypedArray:J5,isFileList:_5,forEach:Mo,merge:rp,extend:I5,trim:P5,stripBOM:Y5,inherits:V5,toFlatObject:q5,kindOf:Zs,kindOfTest:Na,endsWith:G5,toArray:X5,forEachEntry:Q5,matchAll:Z5,isHTMLForm:K5,hasOwnProperty:x0,hasOwnProp:x0,reduceDescriptors:mb,freezeMethods:aw,toObjectSet:nw,toCamelCase:ew,noop:iw,toFiniteNumber:rw,findKey:fb,global:ii,isContextDefined:gb,isSpecCompliantForm:ow,toJSONObject:lw,isAsyncFn:sw,isThenable:cw,setImmediate:hb,asap:dw,isIterable:uw};function Re(n,o,l,s,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",o&&(this.code=o),l&&(this.config=l),s&&(this.request=s),d&&(this.response=d,this.status=d.status?d.status:null)}te.inherits(Re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.status}}});const xb=Re.prototype,bb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{bb[n]={value:n}});Object.defineProperties(Re,bb);Object.defineProperty(xb,"isAxiosError",{value:!0});Re.from=(n,o,l,s,d,p)=>{const f=Object.create(xb);te.toFlatObject(n,f,function(y){return y!==Error.prototype},m=>m!=="isAxiosError");const x=n&&n.message?n.message:"Error",h=o==null&&n?n.code:o;return Re.call(f,x,h,l,s,d),n&&f.cause==null&&Object.defineProperty(f,"cause",{value:n,configurable:!0}),f.name=n&&n.name||"Error",p&&Object.assign(f,p),f};const pw=null;function op(n){return te.isPlainObject(n)||te.isArray(n)}function yb(n){return te.endsWith(n,"[]")?n.slice(0,-2):n}function b0(n,o,l){return n?n.concat(o).map(function(d,p){return d=yb(d),!l&&p?"["+d+"]":d}).join(l?".":""):o}function fw(n){return te.isArray(n)&&!n.some(op)}const gw=te.toFlatObject(te,{},null,function(o){return/^is[A-Z]/.test(o)});function ec(n,o,l){if(!te.isObject(n))throw new TypeError("target must be an object");o=o||new FormData,l=te.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(z,D){return!te.isUndefined(D[z])});const s=l.metaTokens,d=l.visitor||y,p=l.dots,f=l.indexes,h=(l.Blob||typeof Blob<"u"&&Blob)&&te.isSpecCompliantForm(o);if(!te.isFunction(d))throw new TypeError("visitor must be a function");function m(k){if(k===null)return"";if(te.isDate(k))return k.toISOString();if(te.isBoolean(k))return k.toString();if(!h&&te.isBlob(k))throw new Re("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(k)||te.isTypedArray(k)?h&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function y(k,z,D){let R=k;if(k&&!D&&typeof k=="object"){if(te.endsWith(z,"{}"))z=s?z:z.slice(0,-2),k=JSON.stringify(k);else if(te.isArray(k)&&fw(k)||(te.isFileList(k)||te.endsWith(z,"[]"))&&(R=te.toArray(k)))return z=yb(z),R.forEach(function(O,Y){!(te.isUndefined(O)||O===null)&&o.append(f===!0?b0([z],Y,p):f===null?z:z+"[]",m(O))}),!1}return op(k)?!0:(o.append(b0(D,z,p),m(k)),!1)}const v=[],C=Object.assign(gw,{defaultVisitor:y,convertValue:m,isVisitable:op});function A(k,z){if(!te.isUndefined(k)){if(v.indexOf(k)!==-1)throw Error("Circular reference detected in "+z.join("."));v.push(k),te.forEach(k,function(R,w){(!(te.isUndefined(R)||R===null)&&d.call(o,R,te.isString(w)?w.trim():w,z,C))===!0&&A(R,z?z.concat(w):[w])}),v.pop()}}if(!te.isObject(n))throw new TypeError("data must be an object");return A(n),o}function y0(n){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return o[s]})}function Lp(n,o){this._pairs=[],n&&ec(n,this,o)}const vb=Lp.prototype;vb.append=function(o,l){this._pairs.push([o,l])};vb.toString=function(o){const l=o?function(s){return o.call(this,s,y0)}:y0;return this._pairs.map(function(d){return l(d[0])+"="+l(d[1])},"").join("&")};function mw(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function jb(n,o,l){if(!o)return n;const s=l&&l.encode||mw;te.isFunction(l)&&(l={serialize:l});const d=l&&l.serialize;let p;if(d?p=d(o,l):p=te.isURLSearchParams(o)?o.toString():new Lp(o,l).toString(s),p){const f=n.indexOf("#");f!==-1&&(n=n.slice(0,f)),n+=(n.indexOf("?")===-1?"?":"&")+p}return n}class v0{constructor(){this.handlers=[]}use(o,l,s){return this.handlers.push({fulfilled:o,rejected:l,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){te.forEach(this.handlers,function(s){s!==null&&o(s)})}}const wb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hw=typeof URLSearchParams<"u"?URLSearchParams:Lp,xw=typeof FormData<"u"?FormData:null,bw=typeof Blob<"u"?Blob:null,yw={isBrowser:!0,classes:{URLSearchParams:hw,FormData:xw,Blob:bw},protocols:["http","https","file","blob","url","data"]},Up=typeof window<"u"&&typeof document<"u",lp=typeof navigator=="object"&&navigator||void 0,vw=Up&&(!lp||["ReactNative","NativeScript","NS"].indexOf(lp.product)<0),jw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ww=Up&&window.location.href||"http://localhost",Sw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Up,hasStandardBrowserEnv:vw,hasStandardBrowserWebWorkerEnv:jw,navigator:lp,origin:ww},Symbol.toStringTag,{value:"Module"})),Rt={...Sw,...yw};function kw(n,o){return ec(n,new Rt.classes.URLSearchParams,{visitor:function(l,s,d,p){return Rt.isNode&&te.isBuffer(l)?(this.append(s,l.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...o})}function Nw(n){return te.matchAll(/\w+|\[(\w*)]/g,n).map(o=>o[0]==="[]"?"":o[1]||o[0])}function Cw(n){const o={},l=Object.keys(n);let s;const d=l.length;let p;for(s=0;s<d;s++)p=l[s],o[p]=n[p];return o}function Sb(n){function o(l,s,d,p){let f=l[p++];if(f==="__proto__")return!0;const x=Number.isFinite(+f),h=p>=l.length;return f=!f&&te.isArray(d)?d.length:f,h?(te.hasOwnProp(d,f)?d[f]=[d[f],s]:d[f]=s,!x):((!d[f]||!te.isObject(d[f]))&&(d[f]=[]),o(l,s,d[f],p)&&te.isArray(d[f])&&(d[f]=Cw(d[f])),!x)}if(te.isFormData(n)&&te.isFunction(n.entries)){const l={};return te.forEachEntry(n,(s,d)=>{o(Nw(s),d,l,0)}),l}return null}function Tw(n,o,l){if(te.isString(n))try{return(o||JSON.parse)(n),te.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(l||JSON.stringify)(n)}const Oo={transitional:wb,adapter:["xhr","http","fetch"],transformRequest:[function(o,l){const s=l.getContentType()||"",d=s.indexOf("application/json")>-1,p=te.isObject(o);if(p&&te.isHTMLForm(o)&&(o=new FormData(o)),te.isFormData(o))return d?JSON.stringify(Sb(o)):o;if(te.isArrayBuffer(o)||te.isBuffer(o)||te.isStream(o)||te.isFile(o)||te.isBlob(o)||te.isReadableStream(o))return o;if(te.isArrayBufferView(o))return o.buffer;if(te.isURLSearchParams(o))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let x;if(p){if(s.indexOf("application/x-www-form-urlencoded")>-1)return kw(o,this.formSerializer).toString();if((x=te.isFileList(o))||s.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ec(x?{"files[]":o}:o,h&&new h,this.formSerializer)}}return p||d?(l.setContentType("application/json",!1),Tw(o)):o}],transformResponse:[function(o){const l=this.transitional||Oo.transitional,s=l&&l.forcedJSONParsing,d=this.responseType==="json";if(te.isResponse(o)||te.isReadableStream(o))return o;if(o&&te.isString(o)&&(s&&!this.responseType||d)){const f=!(l&&l.silentJSONParsing)&&d;try{return JSON.parse(o,this.parseReviver)}catch(x){if(f)throw x.name==="SyntaxError"?Re.from(x,Re.ERR_BAD_RESPONSE,this,null,this.response):x}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rt.classes.FormData,Blob:Rt.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};te.forEach(["delete","get","head","post","put","patch"],n=>{Oo.headers[n]={}});const zw=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Aw=n=>{const o={};let l,s,d;return n&&n.split(`
`).forEach(function(f){d=f.indexOf(":"),l=f.substring(0,d).trim().toLowerCase(),s=f.substring(d+1).trim(),!(!l||o[l]&&zw[l])&&(l==="set-cookie"?o[l]?o[l].push(s):o[l]=[s]:o[l]=o[l]?o[l]+", "+s:s)}),o},j0=Symbol("internals");function ro(n){return n&&String(n).trim().toLowerCase()}function xs(n){return n===!1||n==null?n:te.isArray(n)?n.map(xs):String(n)}function Ew(n){const o=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=l.exec(n);)o[s[1]]=s[2];return o}const Rw=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Du(n,o,l,s,d){if(te.isFunction(s))return s.call(this,o,l);if(d&&(o=l),!!te.isString(o)){if(te.isString(s))return o.indexOf(s)!==-1;if(te.isRegExp(s))return s.test(o)}}function Dw(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,l,s)=>l.toUpperCase()+s)}function Mw(n,o){const l=te.toCamelCase(" "+o);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+l,{value:function(d,p,f){return this[s].call(this,o,d,p,f)},configurable:!0})})}let qt=class{constructor(o){o&&this.set(o)}set(o,l,s){const d=this;function p(x,h,m){const y=ro(h);if(!y)throw new Error("header name must be a non-empty string");const v=te.findKey(d,y);(!v||d[v]===void 0||m===!0||m===void 0&&d[v]!==!1)&&(d[v||h]=xs(x))}const f=(x,h)=>te.forEach(x,(m,y)=>p(m,y,h));if(te.isPlainObject(o)||o instanceof this.constructor)f(o,l);else if(te.isString(o)&&(o=o.trim())&&!Rw(o))f(Aw(o),l);else if(te.isObject(o)&&te.isIterable(o)){let x={},h,m;for(const y of o){if(!te.isArray(y))throw TypeError("Object iterator must return a key-value pair");x[m=y[0]]=(h=x[m])?te.isArray(h)?[...h,y[1]]:[h,y[1]]:y[1]}f(x,l)}else o!=null&&p(l,o,s);return this}get(o,l){if(o=ro(o),o){const s=te.findKey(this,o);if(s){const d=this[s];if(!l)return d;if(l===!0)return Ew(d);if(te.isFunction(l))return l.call(this,d,s);if(te.isRegExp(l))return l.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,l){if(o=ro(o),o){const s=te.findKey(this,o);return!!(s&&this[s]!==void 0&&(!l||Du(this,this[s],s,l)))}return!1}delete(o,l){const s=this;let d=!1;function p(f){if(f=ro(f),f){const x=te.findKey(s,f);x&&(!l||Du(s,s[x],x,l))&&(delete s[x],d=!0)}}return te.isArray(o)?o.forEach(p):p(o),d}clear(o){const l=Object.keys(this);let s=l.length,d=!1;for(;s--;){const p=l[s];(!o||Du(this,this[p],p,o,!0))&&(delete this[p],d=!0)}return d}normalize(o){const l=this,s={};return te.forEach(this,(d,p)=>{const f=te.findKey(s,p);if(f){l[f]=xs(d),delete l[p];return}const x=o?Dw(p):String(p).trim();x!==p&&delete l[p],l[x]=xs(d),s[x]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const l=Object.create(null);return te.forEach(this,(s,d)=>{s!=null&&s!==!1&&(l[d]=o&&te.isArray(s)?s.join(", "):s)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,l])=>o+": "+l).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...l){const s=new this(o);return l.forEach(d=>s.set(d)),s}static accessor(o){const s=(this[j0]=this[j0]={accessors:{}}).accessors,d=this.prototype;function p(f){const x=ro(f);s[x]||(Mw(d,f),s[x]=!0)}return te.isArray(o)?o.forEach(p):p(o),this}};qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);te.reduceDescriptors(qt.prototype,({value:n},o)=>{let l=o[0].toUpperCase()+o.slice(1);return{get:()=>n,set(s){this[l]=s}}});te.freezeMethods(qt);function Mu(n,o){const l=this||Oo,s=o||l,d=qt.from(s.headers);let p=s.data;return te.forEach(n,function(x){p=x.call(l,p,d.normalize(),o?o.status:void 0)}),d.normalize(),p}function kb(n){return!!(n&&n.__CANCEL__)}function dr(n,o,l){Re.call(this,n??"canceled",Re.ERR_CANCELED,o,l),this.name="CanceledError"}te.inherits(dr,Re,{__CANCEL__:!0});function Nb(n,o,l){const s=l.config.validateStatus;!l.status||!s||s(l.status)?n(l):o(new Re("Request failed with status code "+l.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}function Ow(n){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return o&&o[1]||""}function _w(n,o){n=n||10;const l=new Array(n),s=new Array(n);let d=0,p=0,f;return o=o!==void 0?o:1e3,function(h){const m=Date.now(),y=s[p];f||(f=m),l[d]=h,s[d]=m;let v=p,C=0;for(;v!==d;)C+=l[v++],v=v%n;if(d=(d+1)%n,d===p&&(p=(p+1)%n),m-f<o)return;const A=y&&m-y;return A?Math.round(C*1e3/A):void 0}}function Bw(n,o){let l=0,s=1e3/o,d,p;const f=(m,y=Date.now())=>{l=y,d=null,p&&(clearTimeout(p),p=null),n(...m)};return[(...m)=>{const y=Date.now(),v=y-l;v>=s?f(m,y):(d=m,p||(p=setTimeout(()=>{p=null,f(d)},s-v)))},()=>d&&f(d)]}const Rs=(n,o,l=3)=>{let s=0;const d=_w(50,250);return Bw(p=>{const f=p.loaded,x=p.lengthComputable?p.total:void 0,h=f-s,m=d(h),y=f<=x;s=f;const v={loaded:f,total:x,progress:x?f/x:void 0,bytes:h,rate:m||void 0,estimated:m&&x&&y?(x-f)/m:void 0,event:p,lengthComputable:x!=null,[o?"download":"upload"]:!0};n(v)},l)},w0=(n,o)=>{const l=n!=null;return[s=>o[0]({lengthComputable:l,total:n,loaded:s}),o[1]]},S0=n=>(...o)=>te.asap(()=>n(...o)),Lw=Rt.hasStandardBrowserEnv?((n,o)=>l=>(l=new URL(l,Rt.origin),n.protocol===l.protocol&&n.host===l.host&&(o||n.port===l.port)))(new URL(Rt.origin),Rt.navigator&&/(msie|trident)/i.test(Rt.navigator.userAgent)):()=>!0,Uw=Rt.hasStandardBrowserEnv?{write(n,o,l,s,d,p,f){if(typeof document>"u")return;const x=[`${n}=${encodeURIComponent(o)}`];te.isNumber(l)&&x.push(`expires=${new Date(l).toUTCString()}`),te.isString(s)&&x.push(`path=${s}`),te.isString(d)&&x.push(`domain=${d}`),p===!0&&x.push("secure"),te.isString(f)&&x.push(`SameSite=${f}`),document.cookie=x.join("; ")},read(n){if(typeof document>"u")return null;const o=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return o?decodeURIComponent(o[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ww(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Fw(n,o){return o?n.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):n}function Cb(n,o,l){let s=!Ww(o);return n&&(s||l==!1)?Fw(n,o):o}const k0=n=>n instanceof qt?{...n}:n;function di(n,o){o=o||{};const l={};function s(m,y,v,C){return te.isPlainObject(m)&&te.isPlainObject(y)?te.merge.call({caseless:C},m,y):te.isPlainObject(y)?te.merge({},y):te.isArray(y)?y.slice():y}function d(m,y,v,C){if(te.isUndefined(y)){if(!te.isUndefined(m))return s(void 0,m,v,C)}else return s(m,y,v,C)}function p(m,y){if(!te.isUndefined(y))return s(void 0,y)}function f(m,y){if(te.isUndefined(y)){if(!te.isUndefined(m))return s(void 0,m)}else return s(void 0,y)}function x(m,y,v){if(v in o)return s(m,y);if(v in n)return s(void 0,m)}const h={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:x,headers:(m,y,v)=>d(k0(m),k0(y),v,!0)};return te.forEach(Object.keys({...n,...o}),function(y){const v=h[y]||d,C=v(n[y],o[y],y);te.isUndefined(C)&&v!==x||(l[y]=C)}),l}const Tb=n=>{const o=di({},n);let{data:l,withXSRFToken:s,xsrfHeaderName:d,xsrfCookieName:p,headers:f,auth:x}=o;if(o.headers=f=qt.from(f),o.url=jb(Cb(o.baseURL,o.url,o.allowAbsoluteUrls),n.params,n.paramsSerializer),x&&f.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),te.isFormData(l)){if(Rt.hasStandardBrowserEnv||Rt.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if(te.isFunction(l.getHeaders)){const h=l.getHeaders(),m=["content-type","content-length"];Object.entries(h).forEach(([y,v])=>{m.includes(y.toLowerCase())&&f.set(y,v)})}}if(Rt.hasStandardBrowserEnv&&(s&&te.isFunction(s)&&(s=s(o)),s||s!==!1&&Lw(o.url))){const h=d&&p&&Uw.read(p);h&&f.set(d,h)}return o},Hw=typeof XMLHttpRequest<"u",$w=Hw&&function(n){return new Promise(function(l,s){const d=Tb(n);let p=d.data;const f=qt.from(d.headers).normalize();let{responseType:x,onUploadProgress:h,onDownloadProgress:m}=d,y,v,C,A,k;function z(){A&&A(),k&&k(),d.cancelToken&&d.cancelToken.unsubscribe(y),d.signal&&d.signal.removeEventListener("abort",y)}let D=new XMLHttpRequest;D.open(d.method.toUpperCase(),d.url,!0),D.timeout=d.timeout;function R(){if(!D)return;const O=qt.from("getAllResponseHeaders"in D&&D.getAllResponseHeaders()),J={data:!x||x==="text"||x==="json"?D.responseText:D.response,status:D.status,statusText:D.statusText,headers:O,config:n,request:D};Nb(function(F){l(F),z()},function(F){s(F),z()},J),D=null}"onloadend"in D?D.onloadend=R:D.onreadystatechange=function(){!D||D.readyState!==4||D.status===0&&!(D.responseURL&&D.responseURL.indexOf("file:")===0)||setTimeout(R)},D.onabort=function(){D&&(s(new Re("Request aborted",Re.ECONNABORTED,n,D)),D=null)},D.onerror=function(Y){const J=Y&&Y.message?Y.message:"Network Error",E=new Re(J,Re.ERR_NETWORK,n,D);E.event=Y||null,s(E),D=null},D.ontimeout=function(){let Y=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const J=d.transitional||wb;d.timeoutErrorMessage&&(Y=d.timeoutErrorMessage),s(new Re(Y,J.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,n,D)),D=null},p===void 0&&f.setContentType(null),"setRequestHeader"in D&&te.forEach(f.toJSON(),function(Y,J){D.setRequestHeader(J,Y)}),te.isUndefined(d.withCredentials)||(D.withCredentials=!!d.withCredentials),x&&x!=="json"&&(D.responseType=d.responseType),m&&([C,k]=Rs(m,!0),D.addEventListener("progress",C)),h&&D.upload&&([v,A]=Rs(h),D.upload.addEventListener("progress",v),D.upload.addEventListener("loadend",A)),(d.cancelToken||d.signal)&&(y=O=>{D&&(s(!O||O.type?new dr(null,n,D):O),D.abort(),D=null)},d.cancelToken&&d.cancelToken.subscribe(y),d.signal&&(d.signal.aborted?y():d.signal.addEventListener("abort",y)));const w=Ow(d.url);if(w&&Rt.protocols.indexOf(w)===-1){s(new Re("Unsupported protocol "+w+":",Re.ERR_BAD_REQUEST,n));return}D.send(p||null)})},Pw=(n,o)=>{const{length:l}=n=n?n.filter(Boolean):[];if(o||l){let s=new AbortController,d;const p=function(m){if(!d){d=!0,x();const y=m instanceof Error?m:this.reason;s.abort(y instanceof Re?y:new dr(y instanceof Error?y.message:y))}};let f=o&&setTimeout(()=>{f=null,p(new Re(`timeout ${o} of ms exceeded`,Re.ETIMEDOUT))},o);const x=()=>{n&&(f&&clearTimeout(f),f=null,n.forEach(m=>{m.unsubscribe?m.unsubscribe(p):m.removeEventListener("abort",p)}),n=null)};n.forEach(m=>m.addEventListener("abort",p));const{signal:h}=s;return h.unsubscribe=()=>te.asap(x),h}},Iw=function*(n,o){let l=n.byteLength;if(l<o){yield n;return}let s=0,d;for(;s<l;)d=s+o,yield n.slice(s,d),s=d},Yw=async function*(n,o){for await(const l of Vw(n))yield*Iw(l,o)},Vw=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const o=n.getReader();try{for(;;){const{done:l,value:s}=await o.read();if(l)break;yield s}}finally{await o.cancel()}},N0=(n,o,l,s)=>{const d=Yw(n,o);let p=0,f,x=h=>{f||(f=!0,s&&s(h))};return new ReadableStream({async pull(h){try{const{done:m,value:y}=await d.next();if(m){x(),h.close();return}let v=y.byteLength;if(l){let C=p+=v;l(C)}h.enqueue(new Uint8Array(y))}catch(m){throw x(m),m}},cancel(h){return x(h),d.return()}},{highWaterMark:2})},C0=64*1024,{isFunction:ns}=te,qw=(({Request:n,Response:o})=>({Request:n,Response:o}))(te.global),{ReadableStream:T0,TextEncoder:z0}=te.global,A0=(n,...o)=>{try{return!!n(...o)}catch{return!1}},Gw=n=>{n=te.merge.call({skipUndefined:!0},qw,n);const{fetch:o,Request:l,Response:s}=n,d=o?ns(o):typeof fetch=="function",p=ns(l),f=ns(s);if(!d)return!1;const x=d&&ns(T0),h=d&&(typeof z0=="function"?(k=>z=>k.encode(z))(new z0):async k=>new Uint8Array(await new l(k).arrayBuffer())),m=p&&x&&A0(()=>{let k=!1;const z=new l(Rt.origin,{body:new T0,method:"POST",get duplex(){return k=!0,"half"}}).headers.has("Content-Type");return k&&!z}),y=f&&x&&A0(()=>te.isReadableStream(new s("").body)),v={stream:y&&(k=>k.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(k=>{!v[k]&&(v[k]=(z,D)=>{let R=z&&z[k];if(R)return R.call(z);throw new Re(`Response type '${k}' is not supported`,Re.ERR_NOT_SUPPORT,D)})});const C=async k=>{if(k==null)return 0;if(te.isBlob(k))return k.size;if(te.isSpecCompliantForm(k))return(await new l(Rt.origin,{method:"POST",body:k}).arrayBuffer()).byteLength;if(te.isArrayBufferView(k)||te.isArrayBuffer(k))return k.byteLength;if(te.isURLSearchParams(k)&&(k=k+""),te.isString(k))return(await h(k)).byteLength},A=async(k,z)=>{const D=te.toFiniteNumber(k.getContentLength());return D??C(z)};return async k=>{let{url:z,method:D,data:R,signal:w,cancelToken:O,timeout:Y,onDownloadProgress:J,onUploadProgress:E,responseType:F,headers:V,withCredentials:de="same-origin",fetchOptions:he}=Tb(k),G=o||fetch;F=F?(F+"").toLowerCase():"text";let pe=Pw([w,O&&O.toAbortSignal()],Y),$=null;const me=pe&&pe.unsubscribe&&(()=>{pe.unsubscribe()});let we;try{if(E&&m&&D!=="get"&&D!=="head"&&(we=await A(V,R))!==0){let j=new l(z,{method:"POST",body:R,duplex:"half"}),T;if(te.isFormData(R)&&(T=j.headers.get("content-type"))&&V.setContentType(T),j.body){const[q,oe]=w0(we,Rs(S0(E)));R=N0(j.body,C0,q,oe)}}te.isString(de)||(de=de?"include":"omit");const W=p&&"credentials"in l.prototype,ie={...he,signal:pe,method:D.toUpperCase(),headers:V.normalize().toJSON(),body:R,duplex:"half",credentials:W?de:void 0};$=p&&new l(z,ie);let fe=await(p?G($,he):G(z,ie));const K=y&&(F==="stream"||F==="response");if(y&&(J||K&&me)){const j={};["status","statusText","headers"].forEach(P=>{j[P]=fe[P]});const T=te.toFiniteNumber(fe.headers.get("content-length")),[q,oe]=J&&w0(T,Rs(S0(J),!0))||[];fe=new s(N0(fe.body,C0,q,()=>{oe&&oe(),me&&me()}),j)}F=F||"text";let B=await v[te.findKey(v,F)||"text"](fe,k);return!K&&me&&me(),await new Promise((j,T)=>{Nb(j,T,{data:B,headers:qt.from(fe.headers),status:fe.status,statusText:fe.statusText,config:k,request:$})})}catch(W){throw me&&me(),W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)?Object.assign(new Re("Network Error",Re.ERR_NETWORK,k,$),{cause:W.cause||W}):Re.from(W,W&&W.code,k,$)}}},Xw=new Map,zb=n=>{let o=n&&n.env||{};const{fetch:l,Request:s,Response:d}=o,p=[s,d,l];let f=p.length,x=f,h,m,y=Xw;for(;x--;)h=p[x],m=y.get(h),m===void 0&&y.set(h,m=x?new Map:Gw(o)),y=m;return m};zb();const Wp={http:pw,xhr:$w,fetch:{get:zb}};te.forEach(Wp,(n,o)=>{if(n){try{Object.defineProperty(n,"name",{value:o})}catch{}Object.defineProperty(n,"adapterName",{value:o})}});const E0=n=>`- ${n}`,Jw=n=>te.isFunction(n)||n===null||n===!1;function Qw(n,o){n=te.isArray(n)?n:[n];const{length:l}=n;let s,d;const p={};for(let f=0;f<l;f++){s=n[f];let x;if(d=s,!Jw(s)&&(d=Wp[(x=String(s)).toLowerCase()],d===void 0))throw new Re(`Unknown adapter '${x}'`);if(d&&(te.isFunction(d)||(d=d.get(o))))break;p[x||"#"+f]=d}if(!d){const f=Object.entries(p).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let x=l?f.length>1?`since :
`+f.map(E0).join(`
`):" "+E0(f[0]):"as no adapter specified";throw new Re("There is no suitable adapter to dispatch the request "+x,"ERR_NOT_SUPPORT")}return d}const Ab={getAdapter:Qw,adapters:Wp};function Ou(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new dr(null,n)}function R0(n){return Ou(n),n.headers=qt.from(n.headers),n.data=Mu.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Ab.getAdapter(n.adapter||Oo.adapter,n)(n).then(function(s){return Ou(n),s.data=Mu.call(n,n.transformResponse,s),s.headers=qt.from(s.headers),s},function(s){return kb(s)||(Ou(n),s&&s.response&&(s.response.data=Mu.call(n,n.transformResponse,s.response),s.response.headers=qt.from(s.response.headers))),Promise.reject(s)})}const Eb="1.13.2",tc={};["object","boolean","number","function","string","symbol"].forEach((n,o)=>{tc[n]=function(s){return typeof s===n||"a"+(o<1?"n ":" ")+n}});const D0={};tc.transitional=function(o,l,s){function d(p,f){return"[Axios v"+Eb+"] Transitional option '"+p+"'"+f+(s?". "+s:"")}return(p,f,x)=>{if(o===!1)throw new Re(d(f," has been removed"+(l?" in "+l:"")),Re.ERR_DEPRECATED);return l&&!D0[f]&&(D0[f]=!0,console.warn(d(f," has been deprecated since v"+l+" and will be removed in the near future"))),o?o(p,f,x):!0}};tc.spelling=function(o){return(l,s)=>(console.warn(`${s} is likely a misspelling of ${o}`),!0)};function Zw(n,o,l){if(typeof n!="object")throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let d=s.length;for(;d-- >0;){const p=s[d],f=o[p];if(f){const x=n[p],h=x===void 0||f(x,p,n);if(h!==!0)throw new Re("option "+p+" must be "+h,Re.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new Re("Unknown option "+p,Re.ERR_BAD_OPTION)}}const bs={assertOptions:Zw,validators:tc},Ra=bs.validators;let li=class{constructor(o){this.defaults=o||{},this.interceptors={request:new v0,response:new v0}}async request(o,l){try{return await this._request(o,l)}catch(s){if(s instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const p=d.stack?d.stack.replace(/^.+\n/,""):"";try{s.stack?p&&!String(s.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+p):s.stack=p}catch{}}throw s}}_request(o,l){typeof o=="string"?(l=l||{},l.url=o):l=o||{},l=di(this.defaults,l);const{transitional:s,paramsSerializer:d,headers:p}=l;s!==void 0&&bs.assertOptions(s,{silentJSONParsing:Ra.transitional(Ra.boolean),forcedJSONParsing:Ra.transitional(Ra.boolean),clarifyTimeoutError:Ra.transitional(Ra.boolean)},!1),d!=null&&(te.isFunction(d)?l.paramsSerializer={serialize:d}:bs.assertOptions(d,{encode:Ra.function,serialize:Ra.function},!0)),l.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?l.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:l.allowAbsoluteUrls=!0),bs.assertOptions(l,{baseUrl:Ra.spelling("baseURL"),withXsrfToken:Ra.spelling("withXSRFToken")},!0),l.method=(l.method||this.defaults.method||"get").toLowerCase();let f=p&&te.merge(p.common,p[l.method]);p&&te.forEach(["delete","get","head","post","put","patch","common"],k=>{delete p[k]}),l.headers=qt.concat(f,p);const x=[];let h=!0;this.interceptors.request.forEach(function(z){typeof z.runWhen=="function"&&z.runWhen(l)===!1||(h=h&&z.synchronous,x.unshift(z.fulfilled,z.rejected))});const m=[];this.interceptors.response.forEach(function(z){m.push(z.fulfilled,z.rejected)});let y,v=0,C;if(!h){const k=[R0.bind(this),void 0];for(k.unshift(...x),k.push(...m),C=k.length,y=Promise.resolve(l);v<C;)y=y.then(k[v++],k[v++]);return y}C=x.length;let A=l;for(;v<C;){const k=x[v++],z=x[v++];try{A=k(A)}catch(D){z.call(this,D);break}}try{y=R0.call(this,A)}catch(k){return Promise.reject(k)}for(v=0,C=m.length;v<C;)y=y.then(m[v++],m[v++]);return y}getUri(o){o=di(this.defaults,o);const l=Cb(o.baseURL,o.url,o.allowAbsoluteUrls);return jb(l,o.params,o.paramsSerializer)}};te.forEach(["delete","get","head","options"],function(o){li.prototype[o]=function(l,s){return this.request(di(s||{},{method:o,url:l,data:(s||{}).data}))}});te.forEach(["post","put","patch"],function(o){function l(s){return function(p,f,x){return this.request(di(x||{},{method:o,headers:s?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}li.prototype[o]=l(),li.prototype[o+"Form"]=l(!0)});let Kw=class Rb{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(p){l=p});const s=this;this.promise.then(d=>{if(!s._listeners)return;let p=s._listeners.length;for(;p-- >0;)s._listeners[p](d);s._listeners=null}),this.promise.then=d=>{let p;const f=new Promise(x=>{s.subscribe(x),p=x}).then(d);return f.cancel=function(){s.unsubscribe(p)},f},o(function(p,f,x){s.reason||(s.reason=new dr(p,f,x),l(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const l=this._listeners.indexOf(o);l!==-1&&this._listeners.splice(l,1)}toAbortSignal(){const o=new AbortController,l=s=>{o.abort(s)};return this.subscribe(l),o.signal.unsubscribe=()=>this.unsubscribe(l),o.signal}static source(){let o;return{token:new Rb(function(d){o=d}),cancel:o}}};function eS(n){return function(l){return n.apply(null,l)}}function tS(n){return te.isObject(n)&&n.isAxiosError===!0}const sp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(sp).forEach(([n,o])=>{sp[o]=n});function Db(n){const o=new li(n),l=cb(li.prototype.request,o);return te.extend(l,li.prototype,o,{allOwnKeys:!0}),te.extend(l,o,null,{allOwnKeys:!0}),l.create=function(d){return Db(di(n,d))},l}const Ze=Db(Oo);Ze.Axios=li;Ze.CanceledError=dr;Ze.CancelToken=Kw;Ze.isCancel=kb;Ze.VERSION=Eb;Ze.toFormData=ec;Ze.AxiosError=Re;Ze.Cancel=Ze.CanceledError;Ze.all=function(o){return Promise.all(o)};Ze.spread=eS;Ze.isAxiosError=tS;Ze.mergeConfig=di;Ze.AxiosHeaders=qt;Ze.formToJSON=n=>Sb(te.isHTMLForm(n)?new FormData(n):n);Ze.getAdapter=Ab.getAdapter;Ze.HttpStatusCode=sp;Ze.default=Ze;const{Axios:Dk,AxiosError:Mk,CanceledError:Ok,isCancel:_k,CancelToken:Bk,VERSION:Lk,all:Uk,Cancel:Wk,isAxiosError:Fk,spread:Hk,toFormData:$k,AxiosHeaders:Pk,HttpStatusCode:Ik,formToJSON:Yk,getAdapter:Vk,mergeConfig:qk}=Ze,Ue=Ze.create({baseURL:"https://jansamvad.saavi.co.in/api"});Ue.interceptors.request.use(n=>{const o=localStorage.getItem("token");return o&&(n.headers.Authorization=`Bearer ${o}`),n});function Mb(){return a.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center z-50",children:a.jsxs("div",{className:"relative mb-4",children:[a.jsx("div",{className:"h-14 w-14 rounded-full border-4 border-blue-200"}),a.jsx("div",{className:"h-14 w-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin absolute top-0 left-0"})]})})}function Ob(n){var o,l,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var d=n.length;for(o=0;o<d;o++)n[o]&&(l=Ob(n[o]))&&(s&&(s+=" "),s+=l)}else for(l in n)n[l]&&(s&&(s+=" "),s+=l);return s}function si(){for(var n,o,l=0,s="",d=arguments.length;l<d;l++)(n=arguments[l])&&(o=Ob(n))&&(s&&(s+=" "),s+=o);return s}function aS(n){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}aS(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var _o=n=>typeof n=="number"&&!isNaN(n),ui=n=>typeof n=="string",rn=n=>typeof n=="function",nS=n=>ui(n)||_o(n),cp=n=>ui(n)||rn(n)?n:null,iS=(n,o)=>n===!1||_o(n)&&n>0?n:o,dp=n=>b.isValidElement(n)||ui(n)||rn(n)||_o(n);function rS(n,o,l=300){let{scrollHeight:s,style:d}=n;requestAnimationFrame(()=>{d.minHeight="initial",d.height=s+"px",d.transition=`all ${l}ms`,requestAnimationFrame(()=>{d.height="0",d.padding="0",d.margin="0",setTimeout(o,l)})})}function oS({enter:n,exit:o,appendPosition:l=!1,collapse:s=!0,collapseDuration:d=300}){return function({children:p,position:f,preventExitTransition:x,done:h,nodeRef:m,isIn:y,playToast:v}){let C=l?`${n}--${f}`:n,A=l?`${o}--${f}`:o,k=b.useRef(0);return b.useLayoutEffect(()=>{let z=m.current,D=C.split(" "),R=w=>{w.target===m.current&&(v(),z.removeEventListener("animationend",R),z.removeEventListener("animationcancel",R),k.current===0&&w.type!=="animationcancel"&&z.classList.remove(...D))};z.classList.add(...D),z.addEventListener("animationend",R),z.addEventListener("animationcancel",R)},[]),b.useEffect(()=>{let z=m.current,D=()=>{z.removeEventListener("animationend",D),s?rS(z,h,d):h()};y||(x?D():(k.current=1,z.className+=` ${A}`,z.addEventListener("animationend",D)))},[y]),Fe.createElement(Fe.Fragment,null,p)}}function M0(n,o){return{content:_b(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:o}}function _b(n,o,l=!1){return b.isValidElement(n)&&!ui(n.type)?b.cloneElement(n,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:l}):rn(n)?n({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:l}):n}function lS({closeToast:n,theme:o,ariaLabel:l="close"}){return Fe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:s=>{s.stopPropagation(),n(!0)},"aria-label":l},Fe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Fe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function sS({delay:n,isRunning:o,closeToast:l,type:s="default",hide:d,className:p,controlledProgress:f,progress:x,rtl:h,isIn:m,theme:y}){let v=d||f&&x===0,C={animationDuration:`${n}ms`,animationPlayState:o?"running":"paused"};f&&(C.transform=`scaleX(${x})`);let A=si("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":h}),k=rn(p)?p({rtl:h,type:s,defaultClassName:A}):si(A,p),z={[f&&x>=1?"onTransitionEnd":"onAnimationEnd"]:f&&x<1?null:()=>{m&&l()}};return Fe.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},Fe.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${s}`}),Fe.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:k,style:C,...z}))}var cS=1,Bb=()=>`${cS++}`;function dS(n,o,l){let s=1,d=0,p=[],f=[],x=o,h=new Map,m=new Set,y=w=>(m.add(w),()=>m.delete(w)),v=()=>{f=Array.from(h.values()),m.forEach(w=>w())},C=({containerId:w,toastId:O,updateId:Y})=>{let J=w?w!==n:n!==1,E=h.has(O)&&Y==null;return J||E},A=(w,O)=>{h.forEach(Y=>{var J;(O==null||O===Y.props.toastId)&&((J=Y.toggle)==null||J.call(Y,w))})},k=w=>{var O,Y;(Y=(O=w.props)==null?void 0:O.onClose)==null||Y.call(O,w.removalReason),w.isActive=!1},z=w=>{if(w==null)h.forEach(k);else{let O=h.get(w);O&&k(O)}v()},D=()=>{d-=p.length,p=[]},R=w=>{var O,Y;let{toastId:J,updateId:E}=w.props,F=E==null;w.staleId&&h.delete(w.staleId),w.isActive=!0,h.set(J,w),v(),l(M0(w,F?"added":"updated")),F&&((Y=(O=w.props).onOpen)==null||Y.call(O))};return{id:n,props:x,observe:y,toggle:A,removeToast:z,toasts:h,clearQueue:D,buildToast:(w,O)=>{if(C(O))return;let{toastId:Y,updateId:J,data:E,staleId:F,delay:V}=O,de=J==null;de&&d++;let he={...x,style:x.toastStyle,key:s++,...Object.fromEntries(Object.entries(O).filter(([pe,$])=>$!=null)),toastId:Y,updateId:J,data:E,isIn:!1,className:cp(O.className||x.toastClassName),progressClassName:cp(O.progressClassName||x.progressClassName),autoClose:O.isLoading?!1:iS(O.autoClose,x.autoClose),closeToast(pe){h.get(Y).removalReason=pe,z(Y)},deleteToast(){let pe=h.get(Y);if(pe!=null){if(l(M0(pe,"removed")),h.delete(Y),d--,d<0&&(d=0),p.length>0){R(p.shift());return}v()}}};he.closeButton=x.closeButton,O.closeButton===!1||dp(O.closeButton)?he.closeButton=O.closeButton:O.closeButton===!0&&(he.closeButton=dp(x.closeButton)?x.closeButton:!0);let G={content:w,props:he,staleId:F};x.limit&&x.limit>0&&d>x.limit&&de?p.push(G):_o(V)?setTimeout(()=>{R(G)},V):R(G)},setProps(w){x=w},setToggle:(w,O)=>{let Y=h.get(w);Y&&(Y.toggle=O)},isToastActive:w=>{var O;return(O=h.get(w))==null?void 0:O.isActive},getSnapshot:()=>f}}var _t=new Map,jo=[],up=new Set,uS=n=>up.forEach(o=>o(n)),Lb=()=>_t.size>0;function pS(){jo.forEach(n=>Wb(n.content,n.options)),jo=[]}var fS=(n,{containerId:o})=>{var l;return(l=_t.get(o||1))==null?void 0:l.toasts.get(n)};function Ub(n,o){var l;if(o)return!!((l=_t.get(o))!=null&&l.isToastActive(n));let s=!1;return _t.forEach(d=>{d.isToastActive(n)&&(s=!0)}),s}function gS(n){if(!Lb()){jo=jo.filter(o=>n!=null&&o.options.toastId!==n);return}if(n==null||nS(n))_t.forEach(o=>{o.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let o=_t.get(n.containerId);o?o.removeToast(n.id):_t.forEach(l=>{l.removeToast(n.id)})}}var mS=(n={})=>{_t.forEach(o=>{o.props.limit&&(!n.containerId||o.id===n.containerId)&&o.clearQueue()})};function Wb(n,o){dp(n)&&(Lb()||jo.push({content:n,options:o}),_t.forEach(l=>{l.buildToast(n,o)}))}function hS(n){var o;(o=_t.get(n.containerId||1))==null||o.setToggle(n.id,n.fn)}function Fb(n,o){_t.forEach(l=>{(o==null||!(o!=null&&o.containerId)||o?.containerId===l.id)&&l.toggle(n,o?.id)})}function xS(n){let o=n.containerId||1;return{subscribe(l){let s=dS(o,n,uS);_t.set(o,s);let d=s.observe(l);return pS(),()=>{d(),_t.delete(o)}},setProps(l){var s;(s=_t.get(o))==null||s.setProps(l)},getSnapshot(){var l;return(l=_t.get(o))==null?void 0:l.getSnapshot()}}}function bS(n){return up.add(n),()=>{up.delete(n)}}function yS(n){return n&&(ui(n.toastId)||_o(n.toastId))?n.toastId:Bb()}function Bo(n,o){return Wb(n,o),o.toastId}function ac(n,o){return{...o,type:o&&o.type||n,toastId:yS(o)}}function nc(n){return(o,l)=>Bo(o,ac(n,l))}function ye(n,o){return Bo(n,ac("default",o))}ye.loading=(n,o)=>Bo(n,ac("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o}));function vS(n,{pending:o,error:l,success:s},d){let p;o&&(p=ui(o)?ye.loading(o,d):ye.loading(o.render,{...d,...o}));let f={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},x=(m,y,v)=>{if(y==null){ye.dismiss(p);return}let C={type:m,...f,...d,data:v},A=ui(y)?{render:y}:y;return p?ye.update(p,{...C,...A}):ye(A.render,{...C,...A}),v},h=rn(n)?n():n;return h.then(m=>x("success",s,m)).catch(m=>x("error",l,m)),h}ye.promise=vS;ye.success=nc("success");ye.info=nc("info");ye.error=nc("error");ye.warning=nc("warning");ye.warn=ye.warning;ye.dark=(n,o)=>Bo(n,ac("default",{theme:"dark",...o}));function jS(n){gS(n)}ye.dismiss=jS;ye.clearWaitingQueue=mS;ye.isActive=Ub;ye.update=(n,o={})=>{let l=fS(n,o);if(l){let{props:s,content:d}=l,p={delay:100,...s,...o,toastId:o.toastId||n,updateId:Bb()};p.toastId!==n&&(p.staleId=n);let f=p.render||d;delete p.render,Bo(f,p)}};ye.done=n=>{ye.update(n,{progress:1})};ye.onChange=bS;ye.play=n=>Fb(!0,n);ye.pause=n=>Fb(!1,n);function wS(n){var o;let{subscribe:l,getSnapshot:s,setProps:d}=b.useRef(xS(n)).current;d(n);let p=(o=b.useSyncExternalStore(l,s,s))==null?void 0:o.slice();function f(x){if(!p)return[];let h=new Map;return n.newestOnTop&&p.reverse(),p.forEach(m=>{let{position:y}=m.props;h.has(y)||h.set(y,[]),h.get(y).push(m)}),Array.from(h,m=>x(m[0],m[1]))}return{getToastToRender:f,isToastActive:Ub,count:p?.length}}function SS(n){let[o,l]=b.useState(!1),[s,d]=b.useState(!1),p=b.useRef(null),f=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:x,pauseOnHover:h,closeToast:m,onClick:y,closeOnClick:v}=n;hS({id:n.toastId,containerId:n.containerId,fn:l}),b.useEffect(()=>{if(n.pauseOnFocusLoss)return C(),()=>{A()}},[n.pauseOnFocusLoss]);function C(){document.hasFocus()||R(),window.addEventListener("focus",D),window.addEventListener("blur",R)}function A(){window.removeEventListener("focus",D),window.removeEventListener("blur",R)}function k(F){if(n.draggable===!0||n.draggable===F.pointerType){w();let V=p.current;f.canCloseOnClick=!0,f.canDrag=!0,V.style.transition="none",n.draggableDirection==="x"?(f.start=F.clientX,f.removalDistance=V.offsetWidth*(n.draggablePercent/100)):(f.start=F.clientY,f.removalDistance=V.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function z(F){let{top:V,bottom:de,left:he,right:G}=p.current.getBoundingClientRect();F.nativeEvent.type!=="touchend"&&n.pauseOnHover&&F.clientX>=he&&F.clientX<=G&&F.clientY>=V&&F.clientY<=de?R():D()}function D(){l(!0)}function R(){l(!1)}function w(){f.didMove=!1,document.addEventListener("pointermove",Y),document.addEventListener("pointerup",J)}function O(){document.removeEventListener("pointermove",Y),document.removeEventListener("pointerup",J)}function Y(F){let V=p.current;if(f.canDrag&&V){f.didMove=!0,o&&R(),n.draggableDirection==="x"?f.delta=F.clientX-f.start:f.delta=F.clientY-f.start,f.start!==F.clientX&&(f.canCloseOnClick=!1);let de=n.draggableDirection==="x"?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;V.style.transform=`translate3d(${de},0)`,V.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}}function J(){O();let F=p.current;if(f.canDrag&&f.didMove&&F){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance){d(!0),n.closeToast(!0),n.collapseAll();return}F.style.transition="transform 0.2s, opacity 0.2s",F.style.removeProperty("transform"),F.style.removeProperty("opacity")}}let E={onPointerDown:k,onPointerUp:z};return x&&h&&(E.onMouseEnter=R,n.stacked||(E.onMouseLeave=D)),v&&(E.onClick=F=>{y&&y(F),f.canCloseOnClick&&m(!0)}),{playToast:D,pauseToast:R,isRunning:o,preventExitTransition:s,toastRef:p,eventHandlers:E}}var kS=typeof window<"u"?b.useLayoutEffect:b.useEffect,ic=({theme:n,type:o,isLoading:l,...s})=>Fe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s});function NS(n){return Fe.createElement(ic,{...n},Fe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function CS(n){return Fe.createElement(ic,{...n},Fe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function TS(n){return Fe.createElement(ic,{...n},Fe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function zS(n){return Fe.createElement(ic,{...n},Fe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function AS(){return Fe.createElement("div",{className:"Toastify__spinner"})}var pp={info:CS,warning:NS,success:TS,error:zS,spinner:AS},ES=n=>n in pp;function RS({theme:n,type:o,isLoading:l,icon:s}){let d=null,p={theme:n,type:o};return s===!1||(rn(s)?d=s({...p,isLoading:l}):b.isValidElement(s)?d=b.cloneElement(s,p):l?d=pp.spinner():ES(o)&&(d=pp[o](p))),d}var DS=n=>{let{isRunning:o,preventExitTransition:l,toastRef:s,eventHandlers:d,playToast:p}=SS(n),{closeButton:f,children:x,autoClose:h,onClick:m,type:y,hideProgressBar:v,closeToast:C,transition:A,position:k,className:z,style:D,progressClassName:R,updateId:w,role:O,progress:Y,rtl:J,toastId:E,deleteToast:F,isIn:V,isLoading:de,closeOnClick:he,theme:G,ariaLabel:pe}=n,$=si("Toastify__toast",`Toastify__toast-theme--${G}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":J},{"Toastify__toast--close-on-click":he}),me=rn(z)?z({rtl:J,position:k,type:y,defaultClassName:$}):si($,z),we=RS(n),W=!!Y||!h,ie={closeToast:C,type:y,theme:G},fe=null;return f===!1||(rn(f)?fe=f(ie):b.isValidElement(f)?fe=b.cloneElement(f,ie):fe=lS(ie)),Fe.createElement(A,{isIn:V,done:F,position:k,preventExitTransition:l,nodeRef:s,playToast:p},Fe.createElement("div",{id:E,tabIndex:0,onClick:m,"data-in":V,className:me,...d,style:D,ref:s,...V&&{role:O,"aria-label":pe}},we!=null&&Fe.createElement("div",{className:si("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!de})},we),_b(x,n,!o),fe,!n.customProgressBar&&Fe.createElement(sS,{...w&&!W?{key:`p-${w}`}:{},rtl:J,theme:G,delay:h,isRunning:o,isIn:V,closeToast:C,hide:v,type:y,className:R,controlledProgress:W,progress:Y||0})))},MS=(n,o=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:o}),OS=oS(MS("bounce",!0)),_S={position:"top-right",transition:OS,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function BS(n){let o={..._S,...n},l=n.stacked,[s,d]=b.useState(!0),p=b.useRef(null),{getToastToRender:f,isToastActive:x,count:h}=wS(o),{className:m,style:y,rtl:v,containerId:C,hotKeys:A}=o;function k(D){let R=si("Toastify__toast-container",`Toastify__toast-container--${D}`,{"Toastify__toast-container--rtl":v});return rn(m)?m({position:D,rtl:v,defaultClassName:R}):si(R,cp(m))}function z(){l&&(d(!0),ye.play())}return kS(()=>{var D;if(l){let R=p.current.querySelectorAll('[data-in="true"]'),w=12,O=(D=o.position)==null?void 0:D.includes("top"),Y=0,J=0;Array.from(R).reverse().forEach((E,F)=>{let V=E;V.classList.add("Toastify__toast--stacked"),F>0&&(V.dataset.collapsed=`${s}`),V.dataset.pos||(V.dataset.pos=O?"top":"bot");let de=Y*(s?.2:1)+(s?0:w*F);V.style.setProperty("--y",`${O?de:de*-1}px`),V.style.setProperty("--g",`${w}`),V.style.setProperty("--s",`${1-(s?J:0)}`),Y+=V.offsetHeight,J+=.025})}},[s,h,l]),b.useEffect(()=>{function D(R){var w;let O=p.current;A(R)&&((w=O.querySelector('[tabIndex="0"]'))==null||w.focus(),d(!1),ye.pause()),R.key==="Escape"&&(document.activeElement===O||O!=null&&O.contains(document.activeElement))&&(d(!0),ye.play())}return document.addEventListener("keydown",D),()=>{document.removeEventListener("keydown",D)}},[A]),Fe.createElement("section",{ref:p,className:"Toastify",id:C,onMouseEnter:()=>{l&&(d(!1),ye.pause())},onMouseLeave:z,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":o["aria-label"]},f((D,R)=>{let w=R.length?{...y}:{...y,pointerEvents:"none"};return Fe.createElement("div",{tabIndex:-1,className:k(D),"data-stacked":l,style:w,key:`c-${D}`},R.map(({content:O,props:Y})=>Fe.createElement(DS,{...Y,stacked:l,collapseAll:z,isIn:x(Y.toastId,Y.containerId),key:`t-${Y.key}`},O)))}))}function LS(){const n=zo(),o=vt(),[l,s]=b.useState({userName:"",password:""}),[d,p]=b.useState(!1),[f,x]=b.useState(!1),[h,m]=b.useState("mobile"),y=new URLSearchParams(window.location.search).get("mobile")||"",[v,C]=b.useState(y?"otp":"password"),[A,k]=b.useState(y),[z,D]=b.useState(["","","","","",""]),[R,w]=b.useState(""),[O,Y]=b.useState(0),[J,E]=b.useState(!1),[F,V]=b.useState(!1),de=b.useRef([]);b.useEffect(()=>{y&&y.length===10&&setTimeout(()=>{$()},800)},[]),b.useEffect(()=>{if(O<=0){E(!0);return}const K=setTimeout(()=>Y(B=>B-1),1e3);return()=>clearTimeout(K)},[O]);const he=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,G=K=>s({...l,[K.target.name]:K.target.value}),pe=async K=>{if(K.preventDefault(),!l.userName.trim()){ye.error("Please enter your username.");return}if(!l.password){ye.error("Please enter your password.");return}try{p(!0);const j=(await Ue.post("/login",{userName:l.userName,password:l.password})).data;if(!j.success){ye.error(j.message);return}const T={id:j.user.id,fullName:j.user.fullName,userName:j.user.userName,role:j.user.role,departmentName:j.user.departmentName,office:j.user.office,departmentCategory:j.user.departmentCategory,isStandingCommitteeMember:!!j.user.isStandingCommitteeMember,isGeneralBodyMember:j.user.isGeneralBodyMember!==!1,wardNo:j.user.wardNo,designation:j.user.designation};j.token&&localStorage.setItem("token",j.token),n(Es(T)),localStorage.setItem("authUser",JSON.stringify(T)),localStorage.setItem("userRole",j.user.role),ye.success("Login successful ✅"),o("/dashboard")}catch(B){const j=B?.response?.data?.message||"Server error. Backend चालू आहे का?";ye.error(j)}finally{p(!1)}},$=async()=>{const K=A.trim();if(!/^[0-9]{10}$/.test(K)){ye.error("Please enter a valid 10-digit mobile number.");return}V(!0);try{const j=(await Ue.post("/sendOtp",{mobileNo:K})).data;if(!j.success){ye.error(j.message||"Failed to send OTP. Please try again.");return}const T=j.otp;w(T),Y(60),E(!1),D(["","","","","",""]),ye.success(`OTP has been sent to ******${K.slice(-3)} via WhatsApp.`),m("otp"),setTimeout(()=>de.current[0]?.focus(),120)}catch(B){const j=B?.response?.data?.message||"Server error ❌";ye.error(j)}finally{V(!1)}},me=(K,B)=>{if(!/^[0-9]?$/.test(B))return;const j=[...z];j[K]=B,D(j),B&&K<5&&de.current[K+1]?.focus()},we=(K,B)=>{B.key==="Backspace"&&!z[K]&&K>0&&de.current[K-1]?.focus()},W=K=>{K.preventDefault();const B=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...z];B.split("").forEach((T,q)=>{j[q]=T}),D(j),de.current[Math.min(B.length,5)]?.focus()},ie=async()=>{const K=z.join("");if(K.length<6){ye.error("Please enter the 6-digit OTP.");return}if(O<=0){ye.error("OTP has expired. Please request a new OTP.");return}if(K!==R){ye.error("❌ Invalid OTP. Please try again."),D(["","","","","",""]),de.current[0]?.focus();return}try{V(!0);const j=(await Ue.post("/loginByMobile",{mobileNo:A.trim()})).data;if(!j.success){ye.error(j.message||"Mobile number नोंदणीकृत नाही");return}const T={id:j.user.id,fullName:j.user.fullName,userName:j.user.userName,role:j.user.role,departmentName:j.user.departmentName,office:j.user.office,departmentCategory:j.user.departmentCategory,isStandingCommitteeMember:!!j.user.isStandingCommitteeMember,isGeneralBodyMember:j.user.isGeneralBodyMember!==!1,wardNo:j.user.wardNo,designation:j.user.designation};j.token&&localStorage.setItem("token",j.token),n(Es(T)),localStorage.setItem("authUser",JSON.stringify(T)),localStorage.setItem("userRole",j.user.role),ye.success("✅ Login यशस्वी!"),o("/dashboard")}catch(B){const j=B?.response?.data?.message||"Server error";ye.error(j)}finally{V(!1)}},fe=K=>{C(K),m("mobile"),D(["","","","","",""]),k(K==="otp"?y:""),Y(0)};return a.jsxs(a.Fragment,{children:[(d||F)&&a.jsx(Mb,{}),a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"lp-root",children:[a.jsx("div",{className:"lp-bg",style:{backgroundImage:`url(${Eo})`}}),a.jsx("div",{className:"lp-overlay"}),a.jsx("div",{className:"lp-stripe"}),a.jsxs("div",{className:"lp-wrapper",children:[a.jsxs("div",{className:"lp-card",children:[a.jsxs("div",{className:"lp-logo-row",children:[a.jsx("img",{src:_n,alt:"VVCMC",className:"lp-logo-img"}),a.jsxs("div",{className:"lp-logo-texts",children:[a.jsx("div",{className:"lp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"lp-logo-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"lp-tabs",children:[a.jsx("button",{className:`lp-tab ${v==="password"?"active":""}`,onClick:()=>fe("password"),children:"🔒 Password Login"}),a.jsx("button",{className:`lp-tab ${v==="otp"?"active":""}`,onClick:()=>fe("otp"),children:"📱 OTP Login"})]}),v==="password"&&a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"lp-ftitle",children:"Sign In to Continue"}),a.jsxs("form",{onSubmit:pe,children:[a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Username"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-ficon",children:"👤"}),a.jsx("input",{className:"lp-finput has-icon",name:"userName",placeholder:"Enter your username",value:l.userName,onChange:G,autoComplete:"username"})]})]}),a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Password"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-ficon",children:"🔒"}),a.jsx("input",{className:"lp-finput has-icon",type:f?"text":"password",name:"password",placeholder:"Enter your password",value:l.password,onChange:G,autoComplete:"current-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"lp-pbtn",onClick:()=>x(!f),tabIndex:-1,children:f?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"lp-sbtn",children:"SIGN IN →"})]}),a.jsxs("div",{className:"lp-or",children:[a.jsx("div",{className:"lp-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"lp-orl"})]}),a.jsxs("p",{className:"lp-reg",children:["Don't have an account?",a.jsx(js,{to:"/register",children:"Create account"})]})]}),v==="otp"&&a.jsxs("div",{className:"fade-up",children:[h==="mobile"&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"lp-ftitle",children:"Mobile OTP Login"}),a.jsxs("div",{className:"lp-fld",children:[a.jsx("label",{className:"lp-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"lp-fwrap",children:[a.jsx("span",{className:"lp-prefix",children:"🇮🇳 +91"}),a.jsx("input",{className:"lp-finput with-prefix",type:"tel",maxLength:10,placeholder:"Enter mobile number",value:A,onChange:K=>k(K.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:K=>K.key==="Enter"&&$()})]})]}),a.jsx("button",{className:"lp-sbtn orange",onClick:$,disabled:A.length!==10||F,children:F?"⏳ Sending...":"Send OTP →"}),a.jsxs("div",{className:"lp-or",children:[a.jsx("div",{className:"lp-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"lp-orl"})]}),a.jsxs("p",{className:"lp-reg",children:["Don't have an account?",a.jsx(js,{to:"/register",children:"Create account"})]})]}),h==="otp"&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{m("mobile"),D(["","","","","",""])},children:"← Back"}),a.jsx("p",{className:"lp-ftitle",children:"Verify OTP"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",A.slice(-3)]})," OTP has been sent to"]}),a.jsx("div",{className:"otp-row",onPaste:W,children:z.map((K,B)=>a.jsx("input",{ref:j=>de.current[B]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>me(B,j.target.value),onKeyDown:j=>we(B,j)},B))}),a.jsxs("div",{className:"otp-timer",children:[O>0?a.jsxs(a.Fragment,{children:["OTP expires in:"," ",a.jsx("strong",{style:{color:O<=15?"#ff6b6b":"#CE9A54"},children:he(O)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP has expired!"}),a.jsxs("div",{style:{marginTop:6},children:["Didn't receive the OTP?"," ",a.jsx("button",{className:"resend-btn",onClick:$,disabled:!J,children:"Resend OTP"})]})]}),a.jsx("button",{className:"lp-sbtn green",onClick:ie,disabled:z.join("").length<6||F,children:F?"⏳ Verifying...":"✅ Verify & Login"})]})]}),a.jsxs("div",{className:"lp-cfooter",children:[a.jsx("div",{className:"lp-cfdot"}),a.jsx("span",{children:"Secure Government Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"lp-mayor-panel",children:[a.jsx("span",{className:"lp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"lp-mp-icon tr",children:"🏥"}),a.jsx("span",{className:"lp-mp-icon bl",children:"🏗️"}),a.jsx("span",{className:"lp-mp-icon br",children:"🏢"}),a.jsxs("div",{className:"lp-mayor-photo-wrap",children:[a.jsx("div",{className:"lp-mayor-ring",children:a.jsx("img",{src:vo,alt:"Mayor",className:"lp-mayor-photo"})}),a.jsx("div",{className:"lp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"lp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"lp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"lp-mayor-bar-wrap",children:a.jsx("div",{className:"lp-mayor-bar"})})]})]})]})]})}const Ot=Ze.create({baseURL:"https://jansamvad.saavi.co.in/api",headers:{"Content-Type":"application/json"}});Ot.interceptors.request.use(n=>(n.data instanceof FormData&&delete n.headers["Content-Type"],n));const Hb="/assets/logo2new-CpqCFyo_.jpeg";function US(){const n=vt(),[o,l]=b.useState("password"),[s,d]=b.useState({username:"",password:""}),[p,f]=b.useState(!1),[x,h]=b.useState(""),[m,y]=b.useState(!1),[v,C]=b.useState("mobile"),[A,k]=b.useState(""),[z,D]=b.useState(["","","","","",""]),[R,w]=b.useState(""),[O,Y]=b.useState(0),[J,E]=b.useState(!1),[F,V]=b.useState(!1),de=b.useRef([]),he=K=>B=>d(j=>({...j,[K]:B.target.value}));b.useEffect(()=>{if(O<=0){E(!0);return}const K=setTimeout(()=>Y(B=>B-1),1e3);return()=>clearTimeout(K)},[O]);const G=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,pe=async K=>{if(K.preventDefault(),h(""),!s.username||!s.password){h("Please fill in all required fields. ❌");return}try{f(!0);const B=await Ot.post("/citizen/login",{username:s.username.trim(),password:s.password});if(!B.data.success){h(B.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(B.data.citizen)),localStorage.setItem("citizenToken",B.data.token||""),n("/my-appointments")}catch(B){h(B?.response?.data?.message||"Server Error ❌")}finally{f(!1)}},$=async()=>{const K=A.trim();if(!/^[0-9]{10}$/.test(K)){h("Please enter a valid mobile number.");return}h(""),V(!0);try{const q=await Ot.post("/citizen/check-mobile",{mobileNo:K});if(!q.data.success){h(q.data.message||"Mobile number is not registered. ❌"),V(!1);return}}catch(q){h(q?.response?.data?.message||"Mobile number is not registered. Please register first."),V(!1);return}const B=Math.floor(1e5+Math.random()*9e5).toString();w(B),Y(60),E(!1),D(["","","","","",""]);const j=`Dear Citizen, Your OTP for VVCMC Jan Samvaad Portal login is ${B}. This OTP is valid for 60 seconds. Do not share this OTP with anyone. SAAVI INFINET`,T=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379315&number=${K}&message=${j}`;fetch(T,{method:"GET",mode:"no-cors"}).catch(()=>{}),C("otp"),V(!1),setTimeout(()=>de.current[0]?.focus(),120)},me=async()=>{const K=z.join("");if(K.length<6){h("Please enter the 6-digit OTP.");return}if(O<=0){h("OTP has expired. Please request a new OTP.");return}if(K!==R){h("❌ Invalid OTP. Please try again."),D(["","","","","",""]),setTimeout(()=>de.current[0]?.focus(),50);return}try{V(!0),h("");const B=await Ot.post("/citizen/citizenLoginByMobile",{mobileNo:A.trim()});if(!B.data.success){h(B.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(B.data.citizen)),localStorage.setItem("citizenToken",B.data.token||""),n("/my-appointments")}catch(B){h(B?.response?.data?.message||"Server Error ❌")}finally{V(!1)}},we=(K,B)=>{if(!/^[0-9]?$/.test(B))return;const j=[...z];j[K]=B,D(j),B&&K<5&&de.current[K+1]?.focus()},W=(K,B)=>{B.key==="Backspace"&&!z[K]&&K>0&&de.current[K-1]?.focus()},ie=K=>{K.preventDefault();const B=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...z];B.split("").forEach((T,q)=>{j[q]=T}),D(j),de.current[Math.min(B.length,5)]?.focus()},fe=K=>{l(K),h(""),C("mobile"),D(["","","","","",""]),k(""),Y(0),y(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"cl-root",children:[a.jsx("div",{className:"cl-bg",style:{backgroundImage:`url(${Eo})`}}),a.jsx("div",{className:"cl-overlay"}),a.jsx("div",{className:"cl-stripe"}),a.jsxs("div",{className:"cl-wrapper",children:[a.jsxs("div",{className:"cl-card",children:[a.jsxs("div",{className:"cl-logo-row",children:[a.jsx("img",{src:Hb,alt:"VVCMC",className:"cl-logo-img"}),a.jsxs("div",{className:"cl-logo-texts",children:[a.jsx("div",{className:"cl-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"cl-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),a.jsx("p",{className:"cl-page-title",children:"Welcome Back"}),a.jsx("p",{className:"cl-page-sub",children:"Sign in to the Mayor Appointment Portal."}),a.jsxs("div",{className:"cl-tabs",children:[a.jsx("button",{className:`cl-tab ${o==="password"?"active":""}`,onClick:()=>fe("password"),children:"🔒 Password Login"}),a.jsx("button",{className:`cl-tab ${o==="otp"?"active":""}`,onClick:()=>fe("otp"),children:"📱 OTP Login"})]}),x&&a.jsxs("div",{className:"cl-error",children:["⚠️ ",x]}),o==="password"&&a.jsxs("div",{className:"fade-up",children:[a.jsxs("form",{onSubmit:pe,children:[a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Username"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-ficon",children:"👤"}),a.jsx("input",{className:"cl-finput has-icon",type:"text",placeholder:"Enter your username",value:s.username,onChange:he("username"),autoComplete:"username",autoFocus:!0})]})]}),a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Password"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-ficon",children:"🔒"}),a.jsx("input",{className:"cl-finput has-icon",type:m?"text":"password",placeholder:"Enter your password",value:s.password,onChange:he("password"),autoComplete:"current-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"cl-pbtn",onClick:()=>y(!m),tabIndex:-1,children:m?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"cl-sbtn",disabled:p||!s.username||!s.password,children:p?"⏳ Logging in...":"🔐 SIGN IN →"})]}),a.jsxs("div",{className:"cl-or",children:[a.jsx("div",{className:"cl-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"cl-orl"})]}),a.jsxs("p",{className:"cl-reg",children:["Don't have an account?",a.jsx("span",{className:"cl-link",onClick:()=>n("/citizen-registration"),children:"Register"})]})]}),o==="otp"&&a.jsxs("div",{className:"fade-up",children:[v==="mobile"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"cl-fld",children:[a.jsx("label",{className:"cl-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"cl-fwrap",children:[a.jsx("span",{className:"cl-prefix",children:"🇮🇳 +91"}),a.jsx("input",{className:"cl-finput with-prefix",type:"tel",maxLength:10,placeholder:"Enter 10-digit mobile number",value:A,onChange:K=>k(K.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:K=>K.key==="Enter"&&$(),autoFocus:!0})]})]}),a.jsx("button",{className:"cl-sbtn orange",onClick:$,disabled:A.length!==10||F,children:F?"⏳ Sending...":"Send OTP →"}),a.jsxs("div",{className:"cl-or",children:[a.jsx("div",{className:"cl-orl"}),a.jsx("span",{children:"or"}),a.jsx("div",{className:"cl-orl"})]}),a.jsxs("p",{className:"cl-reg",children:["Account नाही?",a.jsx("span",{className:"cl-link",onClick:()=>n("/register"),children:"Register करा"})]})]}),v==="otp"&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{C("mobile"),D(["","","","","",""]),h("")},children:"← मागे जा"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",A.slice(-3)]})," ","OTP has been sent to"]}),a.jsx("div",{className:"otp-row",onPaste:ie,children:z.map((K,B)=>a.jsx("input",{ref:j=>de.current[B]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>we(B,j.target.value),onKeyDown:j=>W(B,j)},B))}),a.jsxs("div",{className:"otp-timer",children:[O>0?a.jsxs(a.Fragment,{children:["OTP expires in:"," ",a.jsx("strong",{style:{color:O<=15?"#ff6b6b":"#CE9A54"},children:G(O)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP has expired!"}),a.jsxs("div",{style:{marginTop:6},children:["Didn't receive the OTP?"," ",a.jsx("button",{className:"resend-btn",onClick:$,disabled:!J,children:"Resend OTP"})]})]}),a.jsx("button",{className:"cl-sbtn green",onClick:me,disabled:z.join("").length<6||F,children:F?"⏳ Verifying...":"✅ Verify & Login"})]})]}),a.jsxs("div",{className:"cl-cfooter",children:[a.jsx("div",{className:"cl-cfdot"}),a.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"cl-mayor-panel",children:[a.jsx("span",{className:"cl-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"cl-mp-icon tr",children:"🤝"}),a.jsx("span",{className:"cl-mp-icon bl",children:"🏢"}),a.jsx("span",{className:"cl-mp-icon br",children:"🏙️"}),a.jsx("div",{className:"cl-mayor-photo-wrap",children:a.jsx("div",{className:"cl-mayor-ring",children:a.jsx("img",{src:vo,alt:"Mayor",className:"cl-mayor-photo"})})}),a.jsx("p",{className:"cl-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"cl-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"cl-mayor-bar-wrap",children:a.jsx("div",{className:"cl-mayor-bar"})})]})]})]})]})}function WS(){const n=vt();return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"ps-root",children:[a.jsx("div",{className:"ps-bg",style:{backgroundImage:`url(${Eo})`}}),a.jsx("div",{className:"ps-overlay"}),a.jsx("div",{className:"ps-stripe"}),a.jsx("div",{className:"ps-glow-tl"}),a.jsx("div",{className:"ps-glow-br"}),a.jsx("div",{className:"ps-dots"}),a.jsxs("div",{className:"ps-box",children:[a.jsxs("div",{className:"ps-header",children:[a.jsx("div",{className:"ps-logo-wrap",children:a.jsx("img",{className:"ps-logo-img",src:_n,alt:"VVCMC"})}),a.jsxs("div",{children:[a.jsx("div",{className:"ps-title",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"ps-title-jan",children:"जन संवाद"}),a.jsx("div",{className:"ps-hr"}),a.jsx("div",{className:"ps-sub",children:"Please select a portal to log in."})]})]}),a.jsxs("div",{className:"ps-cards",children:[a.jsxs("div",{className:"ps-card admin",onClick:()=>n("/admin-login"),children:[a.jsx("div",{className:"ps-icon-wrap",children:"🏛️"}),a.jsx("div",{className:"ps-card-title",children:"Official Login"}),a.jsx("div",{className:"ps-card-sep"}),a.jsx("div",{className:"ps-card-sub",children:"For Municipal Corporation Officers, Employees, and Administrative Staff."}),a.jsx("button",{className:"ps-card-btn",children:"Official Login →"})]}),a.jsxs("div",{className:"ps-card citizen",onClick:()=>n("/citizen-login"),children:[a.jsx("div",{className:"ps-icon-wrap",children:"👤"}),a.jsx("div",{className:"ps-card-title",children:"Citizen Login"}),a.jsx("div",{className:"ps-card-sep"}),a.jsx("div",{className:"ps-card-sub",children:"For Citizens — To Book an Appointment with the Mayor."}),a.jsx("button",{className:"ps-card-btn",children:"Citizen Login →"})]})]}),a.jsxs("div",{className:"ps-footer",children:[a.jsx("div",{className:"ps-dot"}),"Secure Government Portal · All rights reserved"]})]})]})]})}function FS(){const n=zo(),o=vt(),[l,s]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:""}),[d,p]=b.useState(!1),[f,x]=b.useState(!1),[h,m]=b.useState(!1);b.useEffect(()=>{const A=setTimeout(()=>m(!0),60);return()=>clearTimeout(A)},[]);const y=A=>s({...l,[A.target.name]:A.target.value}),v=async A=>{if(A.preventDefault(),!l.fullName||!l.userName||!l.mobileNumber||!l.email||!l.password){ye.error("All fields required ❌");return}try{p(!0);const z=(await Ue.post("/register",l)).data;if(!z.success){ye.error(z.message);return}n(Es(z.user)),localStorage.setItem("authUser",JSON.stringify(z.user)),ye.success("Registration Success ✅"),o("/dashboard")}catch(k){ye.error(k?.response?.data?.message||"Server Error ❌")}finally{p(!1)}},C=l.fullName&&l.userName&&l.mobileNumber&&l.email&&l.password;return a.jsxs(a.Fragment,{children:[d&&a.jsx(Mb,{}),a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"rp-root",children:[a.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${Eo})`}}),a.jsx("div",{className:"rp-overlay"}),a.jsx("div",{className:"rp-stripe"}),a.jsxs("div",{className:"rp-wrapper",style:{opacity:h?1:0,transform:h?"translateX(0)":"translateX(160px)"},children:[a.jsxs("div",{className:"rp-card",children:[a.jsxs("div",{className:"rp-logo-row",children:[a.jsx("img",{src:_n,alt:"VVCMC",className:"rp-logo-img"}),a.jsxs("div",{className:"rp-logo-texts",children:[a.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-logo-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"rp-ftitle",children:"Create Account"}),a.jsxs("form",{onSubmit:v,children:[a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Full Name"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"👤"}),a.jsx("input",{className:"rp-finput has-icon",type:"text",name:"fullName",placeholder:"Enter your full name",value:l.fullName,onChange:y,autoComplete:"name"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Username"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🪪"}),a.jsx("input",{className:"rp-finput has-icon",type:"text",name:"userName",placeholder:"Enter your username",value:l.userName,onChange:y,autoComplete:"username"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Mobile Number"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📱"}),a.jsx("input",{className:"rp-finput has-icon",type:"tel",name:"mobileNumber",placeholder:"Enter your mobile number",maxLength:10,value:l.mobileNumber,onChange:y})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Email"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"✉️"}),a.jsx("input",{className:"rp-finput has-icon",type:"email",name:"email",placeholder:"Enter your email",value:l.email,onChange:y,autoComplete:"email"})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Password"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔒"}),a.jsx("input",{className:"rp-finput has-icon",type:f?"text":"password",name:"password",placeholder:"Enter your password",value:l.password,onChange:y,autoComplete:"new-password",style:{paddingRight:42}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>x(!f),tabIndex:-1,children:f?"🙈":"👁️"})]})]}),a.jsx("button",{type:"submit",className:"rp-sbtn",disabled:!C||d,children:d?"⏳ Creating...":"CREATE ACCOUNT →"})]}),a.jsxs("p",{className:"rp-signin",children:["Already have an account?",a.jsx("a",{onClick:()=>o("/login"),children:"Sign in"})]})]}),a.jsxs("div",{className:"rp-cfooter",children:[a.jsx("div",{className:"rp-cfdot"}),a.jsx("span",{children:"Secure Government Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"rp-mayor-panel",style:{opacity:h?1:0,transform:h?"translate(0, 0)":"translate(80px, -60px)"},children:[a.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"rp-mp-icon tr",children:"🏥"}),a.jsx("span",{className:"rp-mp-icon bl",children:"🏗️"}),a.jsx("span",{className:"rp-mp-icon br",children:"🏢"}),a.jsxs("div",{className:"rp-mayor-photo-wrap",children:[a.jsx("div",{className:"rp-mayor-ring",children:a.jsx("img",{src:vo,alt:"Mayor",className:"rp-mayor-photo"})}),a.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-mayor-bar-wrap",children:a.jsx("div",{className:"rp-mayor-bar"})})]})]})]})]})}const HS="http://localhost:5000",N={teal:"#087E91",tealDeep:"#0A93A8",tealDark:"#0A6B7B",cyan:"#27AEC0",gold:"#F6A021",goldDeep:"#E08A12",sage:"#4CAF50",cream:"#FDF3DC",card1From:"#0B8CA0",card1To:"#27AEC0",card2From:"#F08A00",card2To:"#F6B13A",card3From:"#3B9B40",card3To:"#66BB6A",card5From:"#087E91",card5To:"#27AEC0",white:"#ffffff",text:"#123F4B",ink:"#123F4B",ink2:"#2C5F6C",muted:"#5F7C88",border:"#E3EEF0",soft:"#F6FBFC",head:"#E8F4F6",red:"#D9534F"},xt="Poppins,Inter,'Segoe UI',sans-serif",is=[N.teal,N.gold,N.sage,N.tealDeep,N.goldDeep,N.tealDark,N.gold,N.teal],xa={background:N.white,borderRadius:16,border:`1px solid ${N.border}`,boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 8px 24px rgba(18,63,75,.06)"},fp={padding:"12px 14px",textAlign:"left",color:N.ink,fontWeight:700,fontSize:11,whiteSpace:"nowrap",letterSpacing:.8,textTransform:"uppercase",background:N.head,fontFamily:xt},_u=(n,o)=>({background:`linear-gradient(135deg,${n},${o})`,color:"#fff",border:"none",borderRadius:12,padding:"10px 18px",fontSize:13,fontWeight:600,cursor:"pointer",boxShadow:`0 6px 16px ${n}47`,transition:"transform .2s, box-shadow .2s, filter .2s"}),tr={background:N.white,border:`1px solid ${N.border}`,borderRadius:12,padding:"9px 16px",fontSize:13,fontWeight:600,color:N.ink,cursor:"pointer",boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 4px 12px rgba(18,63,75,.05)",display:"inline-flex",alignItems:"center",gap:6,transition:"all .2s"},$b={display:"flex",alignItems:"center",gap:8,fontSize:11,fontWeight:700,letterSpacing:".25em",textTransform:"uppercase",color:N.gold},Pb=a.jsx("span",{style:{width:16,height:2,borderRadius:2,background:N.gold}}),ri=({c:n,s:o=8})=>a.jsx("span",{style:{width:o,height:o,borderRadius:"50%",background:n,display:"inline-block",flexShrink:0}});function $S(n,o=900){const[l,s]=b.useState(0);return b.useEffect(()=>{const d=Number(n)||0;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s(d);return}let p,f;const x=h=>{f=f||h;const m=Math.min((h-f)/o,1);s(Math.round(d*m)),m<1&&(p=requestAnimationFrame(x))};return p=requestAnimationFrame(x),()=>cancelAnimationFrame(p)},[n,o]),l}function ni({icon:n,children:o,size:l=16,color:s=N.teal}){return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,minWidth:0},children:[n&&a.jsx("span",{style:{width:36,height:36,borderRadius:12,background:`${s}16`,border:`1px solid ${s}2e`,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0},children:n}),a.jsx("span",{style:{fontSize:l,fontWeight:600,color:N.ink,fontFamily:xt},children:o})]})}const PS=["Super Admin","Guardian Minister","Mayor","Admin"],IS=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}},O0={pending:{bg:"#FBF0DC",color:"#A8741F",border:"#F3DDAE",dot:"#F6A021",label:"Pending"},approved:{bg:"#E4F3E8",color:"#2E7D4F",border:"#BFE2CB",dot:"#4CAF50",label:"Approved"},rejected:{bg:"#FBE7E4",color:"#C0392B",border:"#F3C4BD",dot:"#D9534F",label:"Rejected"},"in progress":{bg:"#DDF3F7",color:"#0A6B7B",border:"#B5E3EB",dot:"#27AEC0",label:"In Progress"},resolved:{bg:"#E4F3E8",color:"#2E7D4F",border:"#BFE2CB",dot:"#4CAF50",label:"Resolved"}},Ib=n=>O0[(n||"pending").toLowerCase()]||O0.pending;function YS({color:n="#fff",data:o=[30,45,35,60,40,70,55],w:l=90,h:s=36}){const d=Math.max(...o),p=Math.min(...o),f=o.map((h,m)=>`${m/(o.length-1)*l},${s-(h-p)/(d-p+1)*(s-4)-2}`).join(" "),x=`sg${n.replace("#","")}`;return a.jsxs("svg",{width:l,height:s,viewBox:`0 0 ${l} ${s}`,style:{opacity:.9,display:"block"},children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:x,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:n,stopOpacity:".45"}),a.jsx("stop",{offset:"100%",stopColor:n,stopOpacity:"0"})]})}),a.jsx("polygon",{points:`0,${s} ${f} ${l},${s}`,fill:`url(#${x})`}),a.jsx("polyline",{points:f,fill:"none",stroke:n,strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function VS({label:n,value:o,sub:l,from:s,to:d,spark:p,dark:f=!1,delay:x=0}){const h=$S(typeof o=="number"?o:0),m=typeof o=="number"?h:o;return a.jsxs("div",{className:"dc hov",style:{animationDelay:`${x}s`,borderRadius:18,background:`linear-gradient(135deg,${s},${d})`,padding:"20px 22px",boxShadow:`0 10px 24px ${s}47`,position:"relative",overflow:"hidden",minHeight:128},children:[a.jsx("div",{style:{position:"absolute",top:-50,right:-40,width:150,height:150,borderRadius:"50%",background:"rgba(255,255,255,0.16)"}}),a.jsx("div",{style:{position:"absolute",bottom:-40,left:-30,width:90,height:90,borderRadius:"50%",background:"rgba(255,255,255,0.10)"}}),a.jsxs("div",{style:{position:"relative",zIndex:1},children:[a.jsx("div",{style:{fontSize:12,fontWeight:600,color:f?"#7a5a1c":"rgba(255,255,255,.95)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:4},children:n}),a.jsx("div",{style:{fontFamily:xt,fontSize:40,fontWeight:700,color:f?N.tealDark:"#fff",lineHeight:1.15,fontVariantNumeric:"tabular-nums"},children:m}),l&&a.jsx("div",{style:{fontSize:11,color:f?"#8a6830":"rgba(255,255,255,.85)",fontWeight:600,marginTop:4},children:l})]}),a.jsx("div",{style:{position:"absolute",right:16,bottom:14,zIndex:1},children:a.jsx(YS,{color:f?"#9a7828":"#fff",data:p,w:120,h:46})})]})}function qS({pct:n=0}){const l=2*Math.PI*50,s=n/100*l;return a.jsxs("svg",{width:128,height:128,viewBox:"0 0 128 128",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"donutGrad",x1:"0",y1:"0",x2:"1",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:N.cyan}),a.jsx("stop",{offset:"100%",stopColor:N.teal})]})}),a.jsx("circle",{cx:64,cy:64,r:50,fill:"none",stroke:N.border,strokeWidth:13}),a.jsx("circle",{cx:64,cy:64,r:50,fill:"none",stroke:"url(#donutGrad)",strokeWidth:13,strokeDasharray:`${s} ${l-s}`,strokeLinecap:"round",transform:"rotate(-90 64 64)",style:{transition:"stroke-dasharray 1s ease"}}),a.jsxs("text",{x:64,y:62,textAnchor:"middle",fontSize:24,fontWeight:700,fill:N.ink,fontFamily:xt,children:[n,"%"]}),a.jsx("text",{x:64,y:78,textAnchor:"middle",fontSize:9.5,fill:N.muted,fontWeight:600,letterSpacing:1.2,children:"RESOLVED"})]})}function GS({data:n=[],color:o=N.teal}){const l=Math.max(...n,1);return a.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:48},children:n.map((s,d)=>a.jsx("div",{style:{flex:1,borderRadius:"6px 6px 2px 2px",minHeight:5,background:d===n.length-1?`linear-gradient(180deg,${N.cyan},${N.teal})`:"#BDE6EC",height:`${s/l*100}%`,transition:"height .6s ease"}},d))})}function Yb({name:n="",size:o=28,color:l=N.teal}){const s=n.split(" ").filter(Boolean).map(d=>d[0]).join("").slice(0,2).toUpperCase()||"?";return a.jsx("div",{style:{width:o,height:o,borderRadius:"50%",background:`linear-gradient(135deg,${l},${l}cc)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:o*.34,fontWeight:700,flexShrink:0,border:"2px solid #fff",boxShadow:`0 2px 8px ${l}44`},children:s})}function _0(n="08:00 AM"){if(!n)return 0;const[o,l]=(n||"08:00 AM").split(" "),[s,d]=(o||"08:00").split(":").map(Number);let p=s||8;return l==="PM"&&p!==12&&(p+=12),l==="AM"&&p===12&&(p=0),Math.max(0,p*60+(d||0)-480)}function XS(n){const o=new Date(n),l=o.getDay(),s=l===0?-6:1-l,d=new Date(o);return d.setDate(o.getDate()+s),Array.from({length:7},(p,f)=>{const x=new Date(d);return x.setDate(d.getDate()+f),x})}function B0(n,o){return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()&&n.getDate()===o.getDate()}const JS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function QS({appt:n,color:o,onClose:l,anchorRect:s}){const d=Ib(n.status),p=b.useRef(null),[f,x]=b.useState({top:0,left:0,ready:!1}),h=252,m=b.useCallback(()=>{if(!s||!p.current)return;const y=p.current.offsetHeight||320,v=window.innerWidth,C=window.innerHeight,A=10;let k=s.right+8;k+h>v-A&&(k=s.left-h-8),k=Math.max(A,Math.min(k,v-h-A));let z=s.top;z+y>C-A&&(z=C-y-A),z=Math.max(A,z),x({top:z,left:k,ready:!0})},[s]);return b.useEffect(()=>{const y=requestAnimationFrame(m);return()=>cancelAnimationFrame(y)},[m]),b.useEffect(()=>(window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[m]),b.useEffect(()=>{const y=v=>{p.current&&!p.current.contains(v.target)&&l()};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[l]),b.useEffect(()=>{let y;const v=()=>{clearTimeout(y),y=setTimeout(l,120)};return window.addEventListener("scroll",v,!0),()=>{window.removeEventListener("scroll",v,!0),clearTimeout(y)}},[l]),b.useEffect(()=>{const y=v=>{v.key==="Escape"&&l()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[l]),a.jsxs("div",{ref:p,style:{position:"fixed",top:f.top,left:f.left,opacity:f.ready?1:0,transition:"opacity .1s",zIndex:99999,width:h,background:N.white,borderRadius:16,boxShadow:"0 12px 40px rgba(18,63,75,0.22), 0 2px 8px rgba(18,63,75,0.08)",border:`1px solid ${N.border}`,overflow:"hidden",animation:"popIn .15s cubic-bezier(.34,1.4,.64,1)"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg,${o},${o}dd)`,padding:"12px 13px 11px",display:"flex",alignItems:"center",gap:10},children:[a.jsx(Yb,{name:n.fullName,size:36,color:o}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:13.5,fontWeight:700,color:"#fff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.fullName||"—"}),a.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.85)",marginTop:2,fontWeight:500},children:n.slotTime||"—"})]}),a.jsx("button",{onClick:y=>{y.stopPropagation(),l()},"aria-label":"Close",style:{background:"rgba(255,255,255,0.22)",border:"none",borderRadius:"50%",width:24,height:24,cursor:"pointer",color:"#fff",fontSize:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1},children:"✕"})]}),a.jsxs("div",{style:{padding:"11px 14px 12px"},children:[a.jsx(oo,{icon:"📱",val:n.mobileNumber||"—",bold:!0}),a.jsx(oo,{icon:"📍",val:`Ward: ${n.ward||"—"}`}),n.purpose&&a.jsx(oo,{icon:"🎯",val:n.purpose.slice(0,44)+(n.purpose.length>44?"…":"")}),a.jsx(oo,{icon:"👥",val:`Visitors: ${n.numberOfVisitors||1}`}),n.preferredDate&&a.jsx(oo,{icon:"📅",val:new Date(n.preferredDate+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}),a.jsx("div",{style:{marginTop:8,marginBottom:8},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,background:d.bg,color:d.color,border:`1px solid ${d.border}`,padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:700},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:d.dot,display:"inline-block"}}),d.label]})}),(n.tokenId||n._id)&&a.jsxs("div",{style:{fontSize:10,color:N.muted,fontWeight:500,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["Token: ",n.tokenId||n._id?.slice(-12)||"—"]}),a.jsx("div",{style:{borderTop:`1px solid ${N.border}`,marginTop:10,paddingTop:8,display:"flex",justifyContent:"flex-end"},children:a.jsx("span",{style:{fontSize:12,color:N.teal,fontWeight:700,cursor:"pointer"},children:"View Details ↗"})})]})]})}function oo({icon:n,val:o,bold:l=!1}){return a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{fontSize:13,flexShrink:0,marginTop:1},children:n}),a.jsx("span",{style:{fontSize:12,fontWeight:l?600:500,color:l?N.text:N.muted,lineHeight:1.4},children:o})]})}function L0({appt:n,color:o}){const[l,s]=b.useState(null),d=b.useRef(null),p=!!l,f=b.useCallback(m=>{if(m.stopPropagation(),p){s(null);return}const y=d.current?.getBoundingClientRect();y&&s({...y})},[p]),x=b.useCallback(()=>s(null),[]),h=p?`0 6px 18px ${o}40`:"0 1px 2px rgba(18,63,75,.04), 0 4px 10px rgba(18,63,75,.06)";return a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:d,onClick:f,style:{background:p?`${o}14`:N.white,border:`1px solid ${p?o:o+"40"}`,borderLeft:`3px solid ${o}`,borderRadius:"4px 10px 10px 4px",padding:"6px 9px",cursor:"pointer",marginBottom:4,userSelect:"none",transition:"all .2s",boxShadow:h},onMouseEnter:m=>{m.currentTarget.style.background=`${o}12`,m.currentTarget.style.borderColor=o,m.currentTarget.style.transform="translateY(-1px)",m.currentTarget.style.boxShadow=`0 6px 18px ${o}40`},onMouseLeave:m=>{m.currentTarget.style.background=p?`${o}14`:N.white,m.currentTarget.style.borderColor=p?o:`${o}40`,m.currentTarget.style.borderLeftColor=o,m.currentTarget.style.transform="none",m.currentTarget.style.boxShadow=h},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[a.jsx(Yb,{name:n.fullName,size:22,color:o}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:N.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.fullName||"—"}),a.jsxs("div",{style:{fontSize:10,fontWeight:600,color:o,marginTop:1,display:"flex",alignItems:"center",gap:5},children:[n.slotTime||"—",a.jsx("span",{style:{width:6,height:6,borderRadius:"50%",flexShrink:0,background:Ib(n.status).dot,display:"inline-block"}})]})]})]})}),p&&a.jsx(QS,{appt:n,color:o,onClose:x,anchorRect:l})]})}function ZS({appointments:n=[],mayorSlots:o=[],loading:l=!1}){const[s,d]=b.useState("week"),[p,f]=b.useState(new Date),[x,h]=b.useState(""),m=XS(p),y=new Date,v=n.filter(E=>{if(!x)return!0;const F=x.toLowerCase();return(E.fullName||"").toLowerCase().includes(F)||(E.purpose||"").toLowerCase().includes(F)||(E.ward||"").toLowerCase().includes(F)||(E.mobileNumber||"").includes(F)}),C=E=>`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}-${String(E.getDate()).padStart(2,"0")}`,A=E=>v.filter(F=>(F.preferredDate||"").slice(0,10)===C(E)),k=C(y),z=v.filter(E=>(E.preferredDate||"").slice(0,10)===k),D=v.filter(E=>(E.status||"").toLowerCase()==="approved").length,R=v.filter(E=>(E.status||"").toLowerCase()==="pending").length,w=m[0].toLocaleDateString("en-IN",{month:"long",year:"numeric"}),O=Array.from({length:10},(E,F)=>8+F),Y=E=>E<12?`${E} AM`:E===12?"12 PM":`${E-12} PM`,J={background:N.white,border:`1px solid ${N.border}`,borderRadius:10,width:34,height:34,cursor:"pointer",fontSize:15,color:N.tealDark,fontWeight:700,boxShadow:"0 1px 4px rgba(18,63,75,0.06)",transition:"all .2s"};return a.jsxs("div",{className:"dc",style:{animationDelay:".3s",...xa,overflow:"hidden",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{padding:"20px 22px 12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14,gap:10,flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:$b,children:[Pb,"Today's appointments"]}),a.jsx("p",{style:{margin:"6px 0 0",fontFamily:xt,fontSize:22,color:N.ink,fontWeight:700},children:y.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})})]}),a.jsxs("div",{style:{background:`linear-gradient(135deg,${N.teal},${N.cyan})`,color:"#fff",fontSize:12.5,fontWeight:600,padding:"7px 16px",borderRadius:22,boxShadow:`0 6px 16px ${N.teal}47`,whiteSpace:"nowrap"},children:[v.length," All Appointments"]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("span",{style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:12,color:N.muted},children:"🔍"}),a.jsx("input",{value:x,onChange:E=>h(E.target.value),placeholder:"Search…","aria-label":"Search appointments",style:{border:"1px solid transparent",borderRadius:12,padding:"8px 12px 8px 30px",fontSize:12.5,color:N.text,outline:"none",background:"#EEF6F8",width:160,fontFamily:"inherit",transition:"all .2s"}})]}),a.jsx("div",{style:{display:"flex",background:"#EEF6F8",borderRadius:12,padding:3},children:["Day","Week"].map(E=>a.jsx("button",{onClick:()=>d(E.toLowerCase()),style:{padding:"6px 16px",borderRadius:9,border:"none",background:s===E.toLowerCase()?N.white:"transparent",color:s===E.toLowerCase()?N.teal:N.muted,fontSize:12.5,fontWeight:600,cursor:"pointer",transition:"all .2s",boxShadow:s===E.toLowerCase()?"0 1px 4px rgba(18,63,75,.12)":"none"},children:E},E))})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8},children:[s==="week"?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("button",{className:"gbtn","aria-label":"Previous week",onClick:()=>{const E=new Date(p);E.setDate(E.getDate()-7),f(E)},style:J,children:"‹"}),a.jsx("span",{style:{fontSize:13,fontWeight:600,color:N.ink,minWidth:140,textAlign:"center",border:`1px solid ${N.border}`,borderRadius:10,padding:"7px 12px",background:N.white},children:w}),a.jsx("button",{className:"gbtn","aria-label":"Next week",onClick:()=>{const E=new Date(p);E.setDate(E.getDate()+7),f(E)},style:J,children:"›"})]}):a.jsx("div",{}),a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[{l:"Today",v:z.length,c:N.teal},{l:"Approved",v:D,c:N.sage},{l:"Pending",v:R,c:N.goldDeep}].map(({l:E,v:F,c:V})=>a.jsxs("span",{style:{background:`${V}14`,border:`1px solid ${V}40`,borderRadius:20,padding:"4px 12px",fontSize:11.5,fontWeight:600,color:V,whiteSpace:"nowrap"},children:[F," ",E]},E))})]})]}),o.length>0&&a.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",padding:"8px 22px",background:`${N.cream}88`,borderTop:`1px solid ${N.border}`,borderBottom:`1px solid ${N.border}`},children:[a.jsx("span",{style:{fontSize:10,fontWeight:700,color:N.tealDark,textTransform:"uppercase",letterSpacing:.8,alignSelf:"center"},children:"Mayor Available:"}),o.map((E,F)=>a.jsxs("span",{style:{fontSize:10.5,fontWeight:600,color:N.tealDark,background:`${N.teal}1a`,border:`1px solid ${N.teal}33`,borderRadius:20,padding:"2px 10px"},children:[E.start," – ",E.end]},F))]}),l?a.jsxs("div",{style:{textAlign:"center",padding:"48px 0",color:N.muted},children:[a.jsx("div",{style:{width:28,height:28,border:`3px solid ${N.border}`,borderTopColor:N.teal,borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 10px"}}),"Loading appointments…"]}):s==="week"?a.jsx("div",{style:{padding:"0 18px 12px"},children:a.jsx("div",{style:{overflowX:"auto",overflowY:"auto",maxHeight:380,border:`1px solid ${N.border}`,borderRadius:14},children:a.jsxs("div",{style:{minWidth:560},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"56px repeat(7,1fr)",borderBottom:`1px solid ${N.border}`,background:N.soft,position:"sticky",top:0,zIndex:4},children:[a.jsx("div",{style:{borderRight:`1px solid ${N.border}`}}),m.map((E,F)=>{const V=B0(E,y),de=A(E).length;return a.jsxs("div",{style:{padding:"9px 3px",textAlign:"center",borderRight:F<6?`1px solid ${N.border}`:void 0,background:V?`${N.cyan}1a`:"transparent"},children:[a.jsx("div",{style:{fontSize:11,fontWeight:600,color:V?N.tealDark:N.muted,letterSpacing:.3},children:JS[F]}),a.jsx("div",{style:{width:32,height:32,borderRadius:"50%",margin:"3px auto 0",background:V?`linear-gradient(135deg,${N.teal},${N.cyan})`:"transparent",boxShadow:V?`0 4px 12px ${N.teal}55`:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,fontFamily:xt,color:V?"#fff":N.ink},children:E.getDate()}),de>0&&a.jsx("div",{style:{marginTop:3,fontSize:9,fontWeight:700,color:V?"#fff":N.tealDark,background:V?`${N.teal}cc`:`${N.teal}1c`,borderRadius:20,padding:"1px 6px",display:"inline-block"},children:de})]},F)})]}),O.map(E=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"56px repeat(7,1fr)",borderBottom:`1px solid ${N.border}`,minHeight:56},children:[a.jsx("div",{style:{borderRight:`1px solid ${N.border}`,padding:"6px 7px 0 0",textAlign:"right",fontSize:10.5,fontWeight:600,color:N.muted,background:N.white,position:"sticky",left:0,zIndex:2},children:Y(E)}),m.map((F,V)=>{const de=B0(F,y),he=A(F).filter(G=>{const pe=_0(G.slotTime||"");return pe>=(E-8)*60&&pe<(E-8+1)*60});return a.jsx("div",{style:{borderRight:V<6?`1px solid ${N.border}`:void 0,padding:"4px 4px",background:de?`${N.cyan}0d`:"transparent"},children:he.map((G,pe)=>{const $=v.indexOf(G);return a.jsx(L0,{appt:G,color:is[$%is.length]},pe)})},V)})]},E))]})})}):a.jsx("div",{style:{overflowY:"auto",maxHeight:380},children:z.length===0?a.jsxs("div",{style:{textAlign:"center",padding:"44px 0",color:N.muted},children:[a.jsx("div",{style:{width:56,height:56,borderRadius:16,background:`${N.teal}14`,margin:"0 auto 10px",display:"grid",placeItems:"center",fontSize:26},children:"📅"}),a.jsx("div",{style:{fontWeight:600,fontSize:14,color:N.text,marginBottom:3},children:"No appointments today"}),a.jsx("div",{style:{fontSize:12.5},children:"Switch to Week view to browse other days."})]}):a.jsx("div",{style:{padding:"8px 22px"},children:O.map(E=>{const F=E<12?`${E}:00 AM`:E===12?"12:00 PM":`${E-12}:00 PM`,V=z.filter(de=>{const he=_0(de.slotTime||"");return he>=(E-8)*60&&he<(E-8+1)*60});return a.jsxs("div",{style:{display:"flex",gap:12,marginBottom:V.length?8:2},children:[a.jsx("div",{style:{width:60,fontSize:10.5,fontWeight:V.length?700:500,color:V.length?N.teal:N.muted,textAlign:"right",paddingTop:5,flexShrink:0,fontFamily:"monospace"},children:F}),a.jsx("div",{style:{flex:1,borderTop:V.length?"none":`1px solid ${N.border}`,paddingTop:V.length?0:5},children:V.length>0&&a.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(V.length,3)},1fr)`,gap:6},children:V.map((de,he)=>{const G=v.indexOf(de);return a.jsx(L0,{appt:de,color:is[G%is.length]},he)})})})]},E)})})}),a.jsxs("div",{style:{borderTop:`1px solid ${N.border}`,padding:"10px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",background:N.white,flexWrap:"wrap",gap:4,marginTop:"auto"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:N.sage,display:"inline-block",animation:"pulse 2s infinite",boxShadow:`0 0 6px ${N.sage}`}}),a.jsx("span",{style:{fontSize:11,color:N.muted,fontWeight:600},children:"Live · 8:00 AM – 6:00 PM"})]}),a.jsxs("span",{style:{fontSize:11,color:N.muted,fontWeight:500},children:[v.length," total appointments"]})]})]})}function Bu({value:n,max:o,color:l,height:s=6}){const d=o>0?Math.round(n/o*100):0;return a.jsx("div",{style:{height:s,borderRadius:99,background:N.border,overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",width:`${d}%`,background:`linear-gradient(90deg,${l},${l}cc)`,borderRadius:99,transition:"width 1s cubic-bezier(.2,.7,.2,1)"}})})}function go({icon:n="◎",title:o,hint:l,skeleton:s=!1}){return a.jsxs("div",{style:{textAlign:"center",padding:"30px 12px",color:N.muted},children:[a.jsx("div",{style:{width:52,height:52,borderRadius:14,background:`${N.teal}14`,margin:"0 auto 10px",display:"grid",placeItems:"center",fontSize:22},children:n}),a.jsx("div",{style:{fontWeight:600,color:N.ink,fontSize:14},children:o}),l&&a.jsx("div",{style:{fontSize:12.5,marginTop:2},children:l}),s&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sk",style:{width:"60%"}}),a.jsx("div",{className:"sk",style:{width:"40%"}})]})]})}const KS={Approved:{bg:"#E4F3E8",color:"#2E7D4F"},Rejected:{bg:"#FBE7E4",color:"#C0392B"},"On-Hold":{bg:"#FBF0DC",color:"#A8741F"},Postponed:{bg:"#DDF3F7",color:"#0A6B7B"},"Not Conducted":{bg:"#EEF2F3",color:"#5F7C88"}},e4=[{k:"all",l:"All"},{k:"progress",l:"In Progress"},{k:"done",l:"Completed"},{k:"notstart",l:"Not Started"}];function t4(n){const o=n.subjects||[],l=o.length,s=o.filter(h=>h.actionTaken&&String(h.actionTaken).trim()!=="").length,d=o.filter(h=>h.decisionInMeeting&&!(h.actionTaken&&String(h.actionTaken).trim()!=="")).length,p=l-s-d,f=l>0?Math.round(s/l*100):0;return{total:l,action:s,decided:d,pending:p,pct:f,status:l===0?"empty":f===100?"done":s===0&&d===0?"notstart":"progress"}}const a4={done:{l:"Completed",bg:"#E4F3E8",color:"#2E7D4F"},progress:{l:"In Progress",bg:"#DDF3F7",color:"#0A6B7B"},notstart:{l:"Not Started",bg:"#FBF0DC",color:"#A8741F"},empty:{l:"No Subjects",bg:"#EEF2F3",color:"#5F7C88"}};function n4({action:n,decided:o,total:l,height:s=10}){const d=p=>l>0?`${p/l*100}%`:"0%";return a.jsxs("div",{style:{display:"flex",height:s,borderRadius:99,background:N.border,overflow:"hidden"},children:[a.jsx("div",{title:`Action taken: ${n}`,style:{width:d(n),background:`linear-gradient(90deg,${N.teal},${N.cyan})`,transition:"width 1s cubic-bezier(.2,.7,.2,1)"}}),a.jsx("div",{title:`Decided, action pending: ${o}`,style:{width:d(o),background:`${N.gold}cc`,transition:"width 1s cubic-bezier(.2,.7,.2,1)"}})]})}function i4({meetings:n=[],scopeLabel:o,onOpen:l}){const[s,d]=b.useState("all"),[p,f]=b.useState(""),[x,h]=b.useState(null),[m,y]=b.useState(!1),v=n.map(R=>({m:R,p:t4(R)})),C={all:v.length,progress:v.filter(R=>R.p.status==="progress").length,done:v.filter(R=>R.p.status==="done").length,notstart:v.filter(R=>R.p.status==="notstart").length},A=p.trim().toLowerCase(),k=v.filter(R=>s==="all"||R.p.status===s).filter(R=>!A||(R.m.meetingNumber||"").toLowerCase().includes(A)||(R.m.meetingType||"").toLowerCase().includes(A)||(R.m.subjects||[]).some(w=>(w.subjectName||"").toLowerCase().includes(A)||(w.subjectId||"").toLowerCase().includes(A))),z=m?k:k.slice(0,2),D=R=>R?new Date(R).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—";return a.jsxs("div",{className:"pnl",style:{...xa,padding:"22px",marginBottom:18},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10,flexWrap:"wrap",marginBottom:14},children:[a.jsxs("div",{children:[a.jsx(ni,{icon:"📈",children:"Meeting-wise Subject Progress"}),a.jsx("p",{style:{margin:"6px 0 0 48px",fontSize:12.5,color:N.muted},children:o||"Progress = subjects with action taken"})]}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx("span",{style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:12,color:N.muted},children:"🔍"}),a.jsx("input",{value:p,onChange:R=>f(R.target.value),placeholder:"Meeting / subject…","aria-label":"Search meetings",style:{border:"1px solid transparent",borderRadius:12,padding:"8px 12px 8px 30px",fontSize:12.5,color:N.text,outline:"none",background:"#EEF6F8",width:200,fontFamily:"inherit"}})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap",marginBottom:14},children:[a.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:e4.map(({k:R,l:w})=>a.jsxs("button",{onClick:()=>{d(R),y(!1)},style:{border:`1px solid ${s===R?"transparent":N.border}`,background:s===R?`linear-gradient(135deg,${N.teal},${N.cyan})`:N.white,color:s===R?"#fff":N.ink2,borderRadius:20,padding:"6px 14px",fontSize:12.5,fontWeight:600,cursor:"pointer",transition:"all .2s",boxShadow:s===R?`0 4px 12px ${N.teal}47`:"none"},children:[w," ",a.jsxs("span",{style:{opacity:.8},children:["(",C[R],")"]})]},R))}),a.jsxs("div",{style:{display:"flex",gap:12,fontSize:11.5,color:N.muted,fontWeight:600,flexWrap:"wrap"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(ri,{c:N.teal}),"Action taken"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(ri,{c:N.gold}),"Decided, action pending"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(ri,{c:N.border}),"Decision pending"]})]})]}),k.length===0?a.jsx(go,{icon:"🏛",title:v.length?"No meetings match this filter":"No meetings to show yet",hint:v.length?"Try another filter or search.":"Meetings and their subjects will appear here."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:z.map(({m:R,p:w})=>{const O=a4[w.status],Y=x===R._id;return a.jsxs("div",{style:{border:`1px solid ${Y?N.teal+"66":N.border}`,borderRadius:14,background:Y?N.soft:N.white,transition:"all .2s"},children:[a.jsxs("div",{onClick:()=>h(Y?null:R._id),role:"button",tabIndex:0,onKeyDown:J=>{(J.key==="Enter"||J.key===" ")&&(J.preventDefault(),h(Y?null:R._id))},style:{padding:"14px 16px",cursor:"pointer",display:"grid",gridTemplateColumns:"minmax(0,1.3fr) minmax(0,2fr) auto",gap:16,alignItems:"center"},className:"mp-row",children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[a.jsx("span",{style:{fontFamily:xt,fontSize:14.5,fontWeight:700,color:N.ink},children:R.meetingNumber||"—"}),a.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"2px 9px",borderRadius:20,background:R.meetingType==="Standing Committee"?`${N.gold}1f`:`${N.teal}14`,color:R.meetingType==="Standing Committee"?"#A8741F":N.tealDark},children:R.meetingType||"—"})]}),a.jsxs("div",{style:{fontSize:12,color:N.muted,marginTop:3},children:["📅 ",D(R.meetingDate),R.meetingTime?` · ${R.meetingTime} ${R.meetingAmpm||""}`:""," · ",w.total," subject",w.total===1?"":"s"]})]}),a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11.5,color:N.muted,fontWeight:600,marginBottom:6,gap:8},children:[a.jsxs("span",{children:[w.action,"/",w.total," action taken"]}),a.jsxs("span",{style:{color:N.teal,fontWeight:700,fontSize:13},children:[w.pct,"%"]})]}),a.jsx(n4,{action:w.action,decided:w.decided,total:w.total})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"flex-end"},children:[a.jsx("span",{style:{fontSize:11,fontWeight:600,padding:"3px 10px",borderRadius:20,background:O.bg,color:O.color,whiteSpace:"nowrap"},children:O.l}),a.jsx("span",{"aria-hidden":"true",style:{color:N.muted,fontSize:12,transform:Y?"rotate(180deg)":"none",transition:"transform .2s"},children:"▾"})]})]}),Y&&a.jsxs("div",{style:{padding:"0 16px 14px"},children:[w.total===0?a.jsx("div",{style:{fontSize:12.5,color:N.muted,padding:"8px 2px"},children:"No subjects added to this meeting yet."}):a.jsx("div",{style:{overflowX:"auto",border:`1px solid ${N.border}`,borderRadius:12,background:N.white},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12.5},children:[a.jsx("thead",{children:a.jsx("tr",{children:["Subject ID","Subject","Type","Decision","Tagged To","Action Taken"].map(J=>a.jsx("th",{style:{...fp,padding:"10px 12px",fontSize:10.5},children:J},J))})}),a.jsx("tbody",{children:(R.subjects||[]).map((J,E)=>{const F=KS[J.decisionInMeeting],V=J.actionTaken&&String(J.actionTaken).trim()!=="";return a.jsxs("tr",{style:{borderTop:`1px solid ${N.border}`},children:[a.jsx("td",{style:{padding:"10px 12px",fontFamily:"monospace",fontSize:11.5,color:N.teal,fontWeight:700,whiteSpace:"nowrap"},children:J.subjectId||"—"}),a.jsx("td",{style:{padding:"10px 12px",color:N.ink,fontWeight:500,minWidth:180},children:J.subjectName||"—"}),a.jsx("td",{style:{padding:"10px 12px",color:N.muted,whiteSpace:"nowrap"},children:J.subjectType||"—"}),a.jsx("td",{style:{padding:"10px 12px"},children:F?a.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,background:F.bg,color:F.color,whiteSpace:"nowrap"},children:J.decisionInMeeting}):a.jsx("span",{style:{fontSize:11.5,color:N.muted},children:"Pending"})}),a.jsx("td",{style:{padding:"10px 12px",color:N.muted,maxWidth:220},children:(J.tagTo||[]).length?(J.tagTo||[]).join(", "):"—"}),a.jsx("td",{style:{padding:"10px 12px",minWidth:140},children:V?a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,fontSize:12,fontWeight:600,color:"#2E7D4F"},children:["✓ ",J.actionTaken]}):a.jsx("span",{style:{fontSize:11.5,color:N.muted},children:"Not yet"})})]},J._id||E)})})]})}),a.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:a.jsx("button",{className:"gbtn",onClick:()=>l(R),style:{...tr,padding:"6px 14px",fontSize:12.5},children:"Open meeting ↗"})})]})]},R._id)})}),k.length>2&&a.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:14},children:a.jsx("button",{className:"gbtn",onClick:()=>y(R=>!R),style:tr,children:m?"Show less":`Show all ${k.length} meetings`})})]})}function r4(){const n=vt(),{user:o}=Ps(X=>X.auth),[l,s]=b.useState({total:0,pending:0,resolved:0,inProgress:0}),[d,p]=b.useState([]),[f,x]=b.useState({}),[h,m]=b.useState([4,7,5,9,12,8,15]),[y,v]=b.useState(!0),[C,A]=b.useState("all"),[k,z]=b.useState([]),[D,R]=b.useState(!0),[w,O]=b.useState([]),[Y,J]=b.useState(0),[E,F]=b.useState({totalMeetings:0,totalSubjects:0,approved:0,rejected:0,onHold:0,postponed:0,notConducted:0,actionTakenSubjects:0,subjectsByType:{General:0,Administrative:0,Contract:0},actionProgress:{},departmentStats:{}}),[V,de]=b.useState(!0),[he,G]=b.useState([]),[pe,$]=b.useState(null),me=IS(),we=me?.role||"",W=me?.departmentName||"",ie=PS.includes(we),fe=["corporator","ward councillor"].includes(String(we||"").toLowerCase()),K=ie||fe,B=b.useCallback(async()=>{v(!0);try{let M=(await Ue.get("/inwardAll")).data?.data||[];if(!ie&&W&&(M=M.filter(ce=>ce.mainDepartment&&ce.mainDepartment===W||ce.departmentName&&ce.departmentName===W||Array.isArray(ce.departments)&&ce.departments.includes(W))),s({total:M.length,pending:M.filter(ce=>ce.status==="Pending").length,resolved:M.filter(ce=>ce.status==="Resolved").length,inProgress:M.filter(ce=>ce.status==="In Progress").length}),ie){const ce={};M.forEach(xe=>{xe.taluka&&(ce[xe.taluka]=(ce[xe.taluka]||0)+1)}),x(ce)}const L=Date.now(),ne=Array(7).fill(0);M.forEach(ce=>{const xe=Math.floor((L-new Date(ce.createdAt))/864e5);xe>=0&&xe<7&&ne[6-xe]++}),m(ne.map(ce=>ce||Math.floor(2+Math.random()*6))),p(M.slice(0,8))}catch(X){console.error(X)}finally{v(!1)}},[ie,W]),j=b.useCallback(async()=>{if(!ie){R(!1);return}R(!0);try{const X=await Ot.get("/citizen/admin/all-appointments");X.data.success&&z(X.data.appointments||[])}catch(X){console.error(X),z([])}finally{R(!1)}},[ie]),T=b.useCallback(async()=>{if(ie)try{const X=await Ze.get(`${HS}/api/availability/get`);if(X.data.success){const M=new Date().toISOString().slice(0,10),L=X.data.data.find(ne=>ne.date===M);O(L?.timeSlots||[])}}catch(X){console.error(X)}},[ie]),q=b.useCallback(async()=>{de(!0);try{let X=[];try{const ze=await Ue.get("/meetingProgress");X=ze.data?.data||[],$(ze.data?.scope||null)}catch(ze){console.warn("meetingProgress unavailable, falling back to /getMeetings",ze?.response?.status);const Bn=(await Ue.get("/getMeetings")).data?.data||[],pi=fe?[...me?.isGeneralBodyMember!==!1?["General Body"]:[],...me?.isStandingCommitteeMember?["Standing Committee"]:[]]:null;X=ie?Bn:fe?Bn.filter(Ca=>pi.includes(Ca.meetingType)):W?Bn.map(Ca=>({...Ca,subjects:(Ca.subjects||[]).filter(Ln=>Array.isArray(Ln.tagTo)&&Ln.tagTo.includes(W))})).filter(Ca=>Ca.subjects.length>0):[],$(null)}G(X);const M=[];X.forEach(ze=>{(ze.subjects||[]).forEach(it=>{M.push({...it,meetingNumber:ze.meetingNumber})})});const L=M.filter(ze=>ze.decisionInMeeting==="Approved").length,ne=M.filter(ze=>ze.decisionInMeeting==="Rejected").length,ce=M.filter(ze=>ze.decisionInMeeting==="On-Hold").length,xe=M.filter(ze=>ze.decisionInMeeting==="Postponed").length,Ye=M.filter(ze=>ze.decisionInMeeting==="Not Conducted").length,bt=M.filter(ze=>ze.actionTaken&&ze.actionTaken!=="").length,Ke={General:M.filter(ze=>ze.subjectType==="General").length,Administrative:M.filter(ze=>ze.subjectType==="Administrative and Financial Approval").length,Contract:M.filter(ze=>ze.subjectType==="Contract Approval").length},Dt={};M.forEach(ze=>{ze.actionTaken&&(Dt[ze.actionTaken]=(Dt[ze.actionTaken]||0)+1)});const St={};M.forEach(ze=>{(ze.tagTo||[]).forEach(it=>{!K&&it!==W||(St[it]||(St[it]={total:0,approved:0,actionTaken:0}),St[it].total++,ze.decisionInMeeting==="Approved"&&St[it].approved++,ze.actionTaken&&St[it].actionTaken++)})}),F({totalMeetings:X.length,totalSubjects:M.length,approved:L,rejected:ne,onHold:ce,postponed:xe,notConducted:Ye,actionTakenSubjects:bt,subjectsByType:Ke,actionProgress:Dt,departmentStats:St})}catch(X){console.error(X)}finally{de(!1)}},[ie,fe,K,W]);b.useEffect(()=>{B(),j(),T(),q();const X=setInterval(()=>J(Math.floor(12+Math.random()*8)),4e3);return J(Math.floor(12+Math.random()*8)),()=>clearInterval(X)},[B,j,T,q]);const oe=l.total>0?Math.round(l.resolved/l.total*100):0,P={Pending:"#A8741F",Resolved:"#2E7D4F","In Progress":N.tealDark,Rejected:"#C0392B"},ge={Pending:"#FBF0DC",Resolved:"#E4F3E8","In Progress":"#DDF3F7",Rejected:"#FBE7E4"},be=C==="all"?d:d.filter(X=>X.status===C),ke=[{l:"General",v:E.subjectsByType.General,c:N.teal,icon:"📄"},{l:"Administrative & Financial",v:E.subjectsByType.Administrative,c:N.goldDeep,icon:"💰"},{l:"Contract Approval",v:E.subjectsByType.Contract,c:N.sage,icon:"📝"}],Ce=()=>ke.map(({l:X,v:M,c:L,icon:ne},ce)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:ce<ke.length-1?`1px solid ${N.border}`:"none"},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:12,background:`${L}14`,border:`1px solid ${L}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,flexShrink:0},children:ne}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontSize:12.5,fontWeight:500,color:N.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginBottom:1},children:X}),a.jsx("div",{style:{fontFamily:xt,fontSize:24,fontWeight:700,color:L,lineHeight:1.1},children:M})]}),a.jsxs("div",{style:{fontSize:11,fontWeight:600,color:L,background:`${L}16`,padding:"3px 10px",borderRadius:20,flexShrink:0},children:[E.totalSubjects>0?Math.round(M/E.totalSubjects*100):0,"%"]})]},X)),et=new Date().getHours()<12?"morning":new Date().getHours()<17?"afternoon":"evening",tt=pe?.meetingTypes||[...me?.isGeneralBodyMember!==!1?["General Body"]:[],...me?.isStandingCommitteeMember?["Standing Committee"]:[]],Xt=pe?.wardNo||me?.wardNo,Lt=fe?`${pe?.designation||me?.designation||"corporator"}${Xt?` · Ward ${Xt}`:""} · ${tt.join(" + ")||"No committee"}`:!ie&&W?W:null,le=(X=11)=>Lt?a.jsx("span",{style:{marginLeft:8,background:`${N.teal}18`,color:N.tealDark,border:`1px solid ${N.teal}33`,borderRadius:20,padding:"2px 11px",fontSize:X,fontWeight:600},children:Lt}):null,je=ie?"All meetings · progress = subjects with action taken":fe?tt.length?`${tt.join(" + ")} meetings · all departments`:"General Body / Standing Committee सदस्य नाही":W?`Subjects tagged to ${W}`:"Meetings assigned to you";return a.jsxs("div",{style:{minHeight:"100vh",position:"relative",overflow:"hidden",background:"linear-gradient(to bottom,#F1F7F8,#FFFFFF 60%,#EAF5F7)",fontFamily:"Inter,'Segoe UI',sans-serif",color:N.text},children:[a.jsx("style",{children:`
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
      `}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",width:340,height:340,left:-120,top:-100,borderRadius:"50%",background:"rgba(39,174,192,.14)",filter:"blur(80px)",pointerEvents:"none"}}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",width:300,height:300,right:-100,bottom:80,borderRadius:"50%",background:"rgba(246,160,33,.10)",filter:"blur(80px)",pointerEvents:"none"}}),a.jsxs("div",{className:"dash-pad",style:{padding:"22px 26px",maxWidth:1440,margin:"0 auto",position:"relative",zIndex:1},children:[a.jsx("div",{style:{height:2,background:`linear-gradient(90deg,${N.teal},${N.gold})`,borderRadius:99,marginBottom:22}}),a.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:24,flexWrap:"wrap",gap:10},children:[a.jsxs("div",{className:"dc",children:[a.jsxs("div",{style:$b,children:[Pb,"Analytic overview"]}),a.jsxs("h2",{style:{margin:"6px 0 0",fontFamily:xt,fontSize:30,fontWeight:700,color:N.ink,lineHeight:1.2},children:["Good ",et,", ",a.jsx("span",{style:{color:N.teal},children:o?.fullName?.split(" ")[0]||"Admin"})]}),a.jsx("div",{style:{width:64,height:4,borderRadius:4,background:N.gold,margin:"10px 0 6px"}}),a.jsxs("p",{style:{margin:0,fontSize:14,color:N.muted,lineHeight:1.6},children:["Here's where your meetings and applications stand today.",le(11)]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsx("button",{className:"gbtn",onClick:()=>{B(),j(),T(),q()},style:tr,children:"↻ Refresh"}),a.jsx("div",{style:{...tr,cursor:"default"},children:"This year ▾"})]})]}),y?a.jsx("div",{style:{textAlign:"center",padding:80,color:N.teal,fontWeight:600,fontSize:14},children:"Loading dashboard…"}):a.jsxs(a.Fragment,{children:[!V&&a.jsxs("div",{className:"dc",style:{animationDelay:"0s",marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18,flexWrap:"wrap",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,minWidth:0},children:[a.jsx("span",{style:{width:46,height:46,borderRadius:14,background:N.white,border:`1px solid ${N.border}`,boxShadow:"0 1px 2px rgba(18,63,75,.04), 0 6px 16px rgba(18,63,75,.07)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0},children:"🏛"}),a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("div",{style:{fontFamily:xt,fontSize:20,fontWeight:700,color:N.ink},children:["Meeting ",a.jsx("span",{style:{color:N.teal},children:"Proceedings"})," Analytics"]}),a.jsxs("p",{style:{margin:"2px 0 0",fontSize:13,color:N.muted},children:["Sabha Kamkaj — Subject wise progress tracking",le(10.5)]})]})]}),a.jsx("button",{className:"pbtn",onClick:()=>n("/meetings"),style:_u(N.teal,N.cyan),children:"View Meetings →"})]}),a.jsx("div",{className:"dash-grid-4",style:{marginBottom:18},children:[{label:"TOTAL MEETINGS",value:E.totalMeetings,from:N.card1From,to:N.card1To,spark:[2,3,1,4,2,5,3]},{label:"TOTAL SUBJECTS",value:E.totalSubjects,from:N.card2From,to:N.card2To,spark:[5,8,6,10,7,12,9]},{label:"APPROVED",value:E.approved,from:N.card3From,to:N.card3To,spark:[3,5,4,7,5,9,7]},{label:"ACTION TAKEN",value:E.actionTakenSubjects,from:N.card5From,to:N.card5To,spark:[1,2,2,4,3,5,4]}].map((X,M)=>a.jsx(VS,{label:X.label,value:X.value,from:X.from,to:X.to,spark:X.spark,delay:M*.06},M))}),a.jsx(i4,{meetings:he,scopeLabel:je,onOpen:X=>n(`/proceedingsmeeting/${X._id}`)}),K?a.jsxs("div",{className:"mtg-grid-3",style:{marginBottom:18},children:[a.jsxs("div",{className:"pnl",style:{...xa,padding:"22px"},children:[a.jsx("div",{style:{marginBottom:18},children:a.jsx(ni,{icon:"📊",children:"Decision Breakdown"})}),[{l:"Approved",v:E.approved,c:N.sage},{l:"Rejected",v:E.rejected,c:N.red},{l:"On-Hold",v:E.onHold,c:N.gold},{l:"Postponed",v:E.postponed,c:N.cyan},{l:"Not Conducted",v:E.notConducted,c:N.teal}].map(({l:X,v:M,c:L})=>{const ne=E.totalSubjects>0?Math.round(M/E.totalSubjects*100):0;return a.jsxs("div",{style:{marginBottom:14},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:13.5,fontWeight:500,color:N.ink},children:X}),a.jsxs("span",{style:{fontSize:13.5,fontWeight:700,color:L},children:[M," ",a.jsxs("span",{style:{color:N.muted,fontWeight:500,fontSize:12},children:["(",ne,"%)"]})]})]}),a.jsx(Bu,{value:M,max:E.totalSubjects,color:L})]},X)})]}),a.jsxs("div",{className:"pnl",style:{...xa,padding:"22px"},children:[a.jsx("div",{style:{marginBottom:18},children:a.jsx(ni,{icon:"⚡",color:N.gold,children:"Action Taken Progress"})}),Object.keys(E.actionProgress).length===0?a.jsx(go,{icon:"⚡",title:"No action taken yet",hint:"Open a subject to record its next step."}):Object.entries(E.actionProgress).sort((X,M)=>M[1]-X[1]).map(([X,M],L)=>{const ne=[N.teal,N.gold,N.sage,N.cyan,N.goldDeep,N.tealDark],ce=ne[L%ne.length];return a.jsxs("div",{style:{marginBottom:14},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:13.5,fontWeight:500,color:N.ink,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:180},children:X}),a.jsx("span",{style:{fontSize:13.5,fontWeight:700,color:ce,flexShrink:0,marginLeft:6},children:M})]}),a.jsx(Bu,{value:M,max:E.totalSubjects,color:ce})]},X)})]}),a.jsxs("div",{className:"pnl",style:{...xa,padding:"22px"},children:[a.jsx("div",{style:{marginBottom:6},children:a.jsx(ni,{icon:"📋",children:"Subject Type Breakdown"})}),Ce()]})]}):a.jsx("div",{style:{marginBottom:18},children:a.jsxs("div",{className:"pnl",style:{...xa,padding:"22px",maxWidth:480},children:[a.jsx("div",{style:{marginBottom:6},children:a.jsx(ni,{icon:"📋",children:"Subject Type Breakdown"})}),Ce()]})}),K&&Object.keys(E.departmentStats).length>0&&a.jsxs("div",{className:"pnl",style:{...xa,padding:"22px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:8,flexWrap:"wrap"},children:[a.jsx(ni,{icon:"🏢",color:N.gold,children:"Department-wise Subject Progress"}),a.jsxs("span",{style:{fontSize:12.5,color:N.muted,fontWeight:500},children:[Object.keys(E.departmentStats).length," departments"]})]}),a.jsx("div",{style:{overflowX:"auto",borderRadius:12},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[a.jsx("thead",{children:a.jsx("tr",{children:["Department","Total Subjects","Approved","Action Taken","Completion"].map((X,M,L)=>a.jsx("th",{style:{...fp,borderTopLeftRadius:M===0?12:0,borderBottomLeftRadius:M===0?12:0,borderTopRightRadius:M===L.length-1?12:0,borderBottomRightRadius:M===L.length-1?12:0},children:X},X))})}),a.jsx("tbody",{children:Object.entries(E.departmentStats).sort((X,M)=>M[1].total-X[1].total).map(([X,M],L)=>{const ne=[N.teal,N.gold,N.sage,N.cyan,N.goldDeep,N.tealDark],ce=ne[L%ne.length],xe=M.total>0?Math.round(M.actionTaken/M.total*100):0;return a.jsxs("tr",{style:{borderBottom:`1px solid ${N.border}`,transition:"background .2s"},onMouseEnter:Ye=>Ye.currentTarget.style.background=N.soft,onMouseLeave:Ye=>Ye.currentTarget.style.background="transparent",children:[a.jsx("td",{style:{padding:"14px"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[a.jsx("div",{style:{width:9,height:9,borderRadius:"50%",background:ce,flexShrink:0}}),a.jsx("span",{style:{fontWeight:600,color:N.ink,fontSize:13.5},children:X})]})}),a.jsx("td",{style:{padding:"14px"},children:a.jsx("span",{style:{fontWeight:700,color:ce,fontSize:14},children:M.total})}),a.jsx("td",{style:{padding:"14px"},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,background:"#E4F3E8",color:"#2E7D4F",padding:"3px 11px",borderRadius:20,fontSize:12,fontWeight:600},children:["✓ ",M.approved]})}),a.jsx("td",{style:{padding:"14px"},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,background:"#DDF3F7",color:N.tealDark,padding:"3px 11px",borderRadius:20,fontSize:12,fontWeight:600},children:["⚡ ",M.actionTaken]})}),a.jsx("td",{style:{padding:"14px",minWidth:160},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{flex:1,height:8,borderRadius:99,background:N.border,overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",width:`${xe}%`,background:`linear-gradient(90deg,${N.teal},${N.cyan})`,borderRadius:99,transition:"width 1s ease"}})}),a.jsxs("span",{style:{fontSize:12.5,fontWeight:700,color:N.teal,minWidth:36,textAlign:"right"},children:[xe,"%"]})]})})]},X)})})]})})]}),!K&&W&&E.departmentStats[W]&&a.jsxs("div",{className:"pnl",style:{...xa,padding:"22px"},children:[a.jsx("div",{style:{marginBottom:16},children:a.jsx(ni,{icon:"🏢",color:N.gold,children:"Your Department Progress"})}),(()=>{const X=E.departmentStats[W],M=X.total>0?Math.round(X.actionTaken/X.total*100):0;return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{marginBottom:14,padding:"10px 14px",background:`${N.teal}10`,border:`1px solid ${N.teal}30`,borderRadius:12,fontSize:13.5,fontWeight:600,color:N.tealDark},children:W}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:16},children:[{l:"Total Subjects",v:X.total,c:N.teal,icon:"📋"},{l:"Approved",v:X.approved,c:N.sage,icon:"✅"},{l:"Action Taken",v:X.actionTaken,c:N.goldDeep,icon:"⚡"}].map(({l:L,v:ne,c:ce,icon:xe})=>a.jsxs("div",{style:{textAlign:"center",padding:"16px 10px",background:`${ce}10`,border:`1px solid ${ce}30`,borderRadius:14},children:[a.jsx("div",{style:{fontSize:22,marginBottom:5},children:xe}),a.jsx("div",{style:{fontFamily:xt,fontSize:24,fontWeight:700,color:ce},children:ne}),a.jsx("div",{style:{fontSize:10.5,fontWeight:600,color:N.muted,marginTop:3,textTransform:"uppercase",letterSpacing:.6},children:L})]},L))}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:13.5,fontWeight:500,color:N.ink},children:"Completion Rate"}),a.jsxs("span",{style:{fontSize:13.5,fontWeight:700,color:N.teal},children:[M,"%"]})]}),a.jsx(Bu,{value:X.actionTaken,max:X.total,color:N.teal,height:8})]})]})})()]}),!K&&W&&!E.departmentStats[W]&&E.totalSubjects===0&&a.jsx("div",{style:{...xa},children:a.jsx(go,{icon:"🏛",title:"No meeting subjects assigned yet",hint:a.jsxs(a.Fragment,{children:["Subjects tagged to ",a.jsx("strong",{children:W})," will appear here."]})})})]}),ie&&a.jsxs("div",{className:"dash-grid-cal",style:{marginBottom:20},children:[a.jsx(ZS,{appointments:k,mayorSlots:w,loading:D}),a.jsxs("div",{className:"dc",style:{animationDelay:".37s",...xa,padding:"20px",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[a.jsx("h3",{style:{margin:0,fontFamily:xt,fontSize:18,fontWeight:700,color:N.ink},children:"Status"}),a.jsx("div",{style:{...tr,cursor:"default",padding:"4px 12px",fontSize:11.5},children:"Today ▾"})]}),a.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2px 0 14px"},children:a.jsx(qS,{pct:oe})}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16},children:[{l:"BOOKED",v:l.total,c:N.teal},{l:"PROGRESS",v:l.inProgress,c:N.goldDeep},{l:"PENDING",v:l.pending,c:N.red}].map(({l:X,v:M,c:L})=>a.jsxs("div",{style:{textAlign:"center",padding:"11px 4px",background:`${L}10`,borderRadius:12,border:`1px solid ${L}2e`},children:[a.jsx("div",{style:{fontFamily:xt,fontSize:20,fontWeight:700,color:L},children:M}),a.jsx("div",{style:{fontSize:9,fontWeight:600,color:N.muted,letterSpacing:.8,textTransform:"uppercase",marginTop:2},children:X})]},X))}),a.jsxs("div",{style:{borderTop:`1px solid ${N.border}`,paddingTop:14,marginBottom:14},children:[a.jsx("div",{style:{fontFamily:xt,fontSize:14,fontWeight:600,color:N.ink,marginBottom:8},children:"📅 Appointments"}),[{l:"Total",v:k.length,c:N.teal},{l:"Approved",v:k.filter(X=>(X.status||"").toLowerCase()==="approved").length,c:N.sage},{l:"Pending",v:k.filter(X=>(X.status||"").toLowerCase()==="pending").length,c:N.goldDeep},{l:"In Progress",v:k.filter(X=>(X.status||"").toLowerCase()==="in progress").length,c:N.cyan}].map(({l:X,v:M,c:L})=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"4px 0"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8,fontSize:12.5,color:N.ink2,fontWeight:500},children:[a.jsx(ri,{c:L,s:8}),X]}),a.jsx("span",{style:{fontSize:13,fontWeight:700,color:L},children:M})]},X))]}),w.length>0&&a.jsxs("div",{style:{borderTop:`1px solid ${N.border}`,paddingTop:12,marginBottom:14},children:[a.jsx("div",{style:{fontFamily:xt,fontSize:14,fontWeight:600,color:N.ink,marginBottom:6},children:"🏛 Mayor Today"}),w.map((X,M)=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",fontSize:12.5,color:N.muted,fontWeight:500},children:[a.jsxs("span",{children:["Slot ",M+1]}),a.jsxs("span",{style:{color:N.tealDark,fontWeight:600},children:[X.start," – ",X.end]})]},M))]}),a.jsxs("div",{style:{borderTop:`1px solid ${N.border}`,paddingTop:14,marginTop:"auto"},children:[a.jsx("div",{style:{fontFamily:xt,fontSize:14,fontWeight:600,color:N.ink,marginBottom:10},children:"📈 Weekly Trend"}),a.jsx(GS,{data:h,color:N.teal}),a.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:5,gap:6},children:["M","T","W","T","F","S","S"].map((X,M)=>a.jsx("span",{style:{fontSize:10.5,color:N.muted,flex:1,textAlign:"center",fontWeight:500},children:X},M))})]})]})]}),ie&&a.jsxs("div",{className:"dash-grid-track",style:{marginBottom:20},children:[a.jsxs("div",{className:"dc pnl",style:{animationDelay:".44s",...xa,padding:"22px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[a.jsxs("h3",{style:{margin:0,fontFamily:xt,fontSize:18,fontWeight:700,color:N.ink,display:"flex",alignItems:"center",gap:8},children:[a.jsx(ri,{c:N.gold}),"Tracking"]}),a.jsx("div",{style:{...tr,cursor:"default",padding:"4px 12px",fontSize:11.5},children:"This year ▾"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 14px",background:N.head,borderRadius:12,marginBottom:6},children:[a.jsx("span",{style:{fontFamily:xt,fontSize:11,fontWeight:700,color:N.ink,textTransform:"uppercase",letterSpacing:.8},children:"Region"}),a.jsx("span",{style:{fontFamily:xt,fontSize:11,fontWeight:700,color:N.ink,textTransform:"uppercase",letterSpacing:.8},children:"Amount"})]}),Object.entries(f).sort((X,M)=>M[1]-X[1]).slice(0,6).map(([X,M],L)=>{const ne=[N.teal,N.gold,N.sage,N.cyan,N.goldDeep,N.tealDark],ce=ne[L%ne.length];return a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:`1px solid ${N.border}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx(ri,{c:ce}),a.jsx("span",{style:{fontSize:13.5,fontWeight:500,color:N.text},children:X})]}),a.jsx("span",{style:{fontSize:13.5,fontWeight:700,color:ce},children:M})]},X)}),!Object.keys(f).length&&a.jsx(go,{title:"No regional data yet",hint:"Counts appear once inward applications are tracked.",skeleton:!0})]}),a.jsxs("div",{className:"dc pnl",style:{animationDelay:".51s",...xa,padding:"22px",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:8},children:[a.jsxs("div",{children:[a.jsxs("h3",{style:{margin:0,fontFamily:xt,fontSize:18,fontWeight:700,color:N.ink,display:"flex",alignItems:"center",gap:8},children:[a.jsx(ri,{c:N.gold}),"Recent Applications"]}),a.jsx("p",{style:{margin:"3px 0 0 16px",fontSize:12.5,color:N.muted},children:"Latest inward complaints"})]}),a.jsx("div",{style:{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"},children:["all","Pending","Resolved","In Progress"].map(X=>a.jsx("button",{onClick:()=>A(X),style:{border:`1px solid ${C===X?"transparent":N.border}`,background:C===X?`linear-gradient(135deg,${N.teal},${N.cyan})`:N.white,color:C===X?"#fff":N.ink2,borderRadius:20,padding:"6px 14px",fontSize:12.5,fontWeight:600,cursor:"pointer",boxShadow:C===X?`0 4px 12px ${N.teal}47`:"none",transition:"all .2s"},children:X==="all"?"All":X},X))})]}),a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12.5},children:[a.jsx("thead",{children:a.jsx("tr",{children:["Inward No","Applicant","Subject","Taluka","Department","Priority","Status","Date"].map((X,M,L)=>a.jsx("th",{style:{...fp,borderTopLeftRadius:M===0?12:0,borderBottomLeftRadius:M===0?12:0,borderTopRightRadius:M===L.length-1?12:0,borderBottomRightRadius:M===L.length-1?12:0},children:X},X))})}),a.jsx("tbody",{children:be.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,children:a.jsx(go,{icon:"▣",title:"No applications yet",hint:"New inward complaints will show up here.",skeleton:!0})})}):be.map((X,M)=>a.jsxs("tr",{className:"tbl-row",onClick:()=>n("/allapplication"),style:{borderBottom:`1px solid ${N.border}`,transition:"background .2s"},children:[a.jsx("td",{style:{padding:"11px 14px",color:N.teal,fontWeight:700,whiteSpace:"nowrap",fontFamily:"monospace",fontSize:11.5},children:X.inwardNo||"—"}),a.jsx("td",{style:{padding:"11px 14px",fontWeight:600,color:N.text},children:X.fullName||"—"}),a.jsx("td",{style:{padding:"11px 14px",color:N.muted,maxWidth:150,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:X.subject||"—"}),a.jsx("td",{style:{padding:"11px 14px",color:N.muted},children:X.taluka||"—"}),a.jsx("td",{style:{padding:"11px 14px",color:N.muted,whiteSpace:"nowrap"},children:X.mainDepartment||"—"}),a.jsx("td",{style:{padding:"11px 14px"},children:a.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,background:X.priority==="Emergency"?"#FBE7E4":X.priority==="Urgent"?"#FBF0DC":"#E4F3E8",color:X.priority==="Emergency"?"#C0392B":X.priority==="Urgent"?"#A8741F":"#2E7D4F"},children:X.priority||"Normal"})}),a.jsx("td",{style:{padding:"11px 14px"},children:a.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 10px",borderRadius:20,background:ge[X.status]||`${N.border}`,color:P[X.status]||N.muted},children:X.status||"—"})}),a.jsx("td",{style:{padding:"11px 14px",color:N.muted,whiteSpace:"nowrap",fontSize:11.5},children:X.submissionDate||(X.createdAt?new Date(X.createdAt).toLocaleDateString("en-IN"):"—")})]},M))})]})}),a.jsxs("div",{style:{marginTop:"auto",paddingTop:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8},children:[a.jsxs("span",{style:{fontSize:12.5,color:N.muted},children:["Showing ",be.length," of ",l.total]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{className:"pbtn",onClick:()=>n("/allapplication"),style:_u(N.teal,N.cyan),children:"All Applications →"}),a.jsx("button",{className:"pbtn",onClick:()=>n("/applicationcitizens"),style:{..._u(N.gold,N.gold),color:"#3A2600",boxShadow:`0 6px 16px ${N.gold}4d`},children:"Citizen Appts →"})]})]})]})]}),a.jsxs("div",{style:{textAlign:"center",color:N.muted,fontSize:12,padding:"20px 0 6px"},children:["© ",new Date().getFullYear()," Vasai-Virar City Municipal Corporation · Janata Darbar System",a.jsx("span",{style:{margin:"0 8px",color:N.gold},children:"◆"}),"स्थापना : ३ जुलै २००९"]})]})]})]})}var Vb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},U0=Fe.createContext&&Fe.createContext(Vb),o4=["attr","size","title"];function l4(n,o){if(n==null)return{};var l=s4(n,o),s,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(d=0;d<p.length;d++)s=p[d],!(o.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(l[s]=n[s])}return l}function s4(n,o){if(n==null)return{};var l={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(o.indexOf(s)>=0)continue;l[s]=n[s]}return l}function Ds(){return Ds=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(n[s]=l[s])}return n},Ds.apply(this,arguments)}function W0(n,o){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);o&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),l.push.apply(l,s)}return l}function Ms(n){for(var o=1;o<arguments.length;o++){var l=arguments[o]!=null?arguments[o]:{};o%2?W0(Object(l),!0).forEach(function(s){c4(n,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):W0(Object(l)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(l,s))})}return n}function c4(n,o,l){return o=d4(o),o in n?Object.defineProperty(n,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[o]=l,n}function d4(n){var o=u4(n,"string");return typeof o=="symbol"?o:o+""}function u4(n,o){if(typeof n!="object"||!n)return n;var l=n[Symbol.toPrimitive];if(l!==void 0){var s=l.call(n,o);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function qb(n){return n&&n.map((o,l)=>Fe.createElement(o.tag,Ms({key:l},o.attr),qb(o.child)))}function Gt(n){return o=>Fe.createElement(p4,Ds({attr:Ms({},n.attr)},o),qb(n.child))}function p4(n){var o=l=>{var{attr:s,size:d,title:p}=n,f=l4(n,o4),x=d||l.size||"1em",h;return l.className&&(h=l.className),n.className&&(h=(h?h+" ":"")+n.className),Fe.createElement("svg",Ds({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,s,f,{className:h,style:Ms(Ms({color:n.color||l.color},l.style),n.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),p&&Fe.createElement("title",null,p),n.children)};return U0!==void 0?Fe.createElement(U0.Consumer,null,l=>o(l)):o(Vb)}function f4(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(n)}function Lu(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(n)}function g4(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(n)}function m4(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(n)}function h4(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(n)}function rs(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(n)}function x4(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(n)}function F0(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(n)}function gp(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(n)}function b4(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(n)}function H0(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(n)}function $0(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"},child:[]},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"},child:[]}]})(n)}function P0(n){return Gt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(n)}const Gb=b.createContext();function y4({children:n}){const[o,l]=b.useState("open");return a.jsx(Gb.Provider,{value:{mode:o,setMode:l},children:n})}function Xb(){return b.useContext(Gb)}const I0=[["Vasai-Virar City Municipal Corporation","वसई-विरार शहर महानगरपालिका","Vasai Virar City Municipal Corporation"],["Jan Samvad","जन संवाद","Jan Samvaad"],["VVCMC — Jan Samvad","वविशम — जन संवाद"],["Vasai-Virar City Municipal Corporation, Jan Samvad","वसई-विरार शहर महानगरपालिका, जन संवाद"],["Jan Samvad · Citizen Portal","जन संवाद · नागरिक पोर्टल","जन संवाद · Citizen Portal"],["Jan Samvad - Applications","जन संवाद - अर्ज","जन संवाद - Applications"],["Public Relations – Application Form","जनसंपर्क – अर्ज नमुना","जनसंपर्क – Application Form"],["ADMIN PANEL · VVCMC","प्रशासन पॅनेल · वविशम"],["Admin Panel","प्रशासन पॅनेल"],["Vasai-Virar City","वसई-विरार शहर"],["Vasai-Virar City Municipal Corporation · Janata Darbar System","वसई-विरार शहर महानगरपालिका · जनता दरबार प्रणाली"],["Vasai-Virar City Municipal Corporation. All rights reserved","वसई-विरार शहर महानगरपालिका. सर्व हक्क राखीव"],["Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad","वसई विरार शहर महानगरपालिका (वविशम) साठी डिझाइन व विकसित — जन संवाद"],["Secure Citizen Portal · All rights reserved","सुरक्षित नागरिक पोर्टल · सर्व हक्क राखीव"],["Secure Government Portal · All rights reserved","सुरक्षित शासकीय पोर्टल · सर्व हक्क राखीव"],["Secure Government Portal","सुरक्षित शासकीय पोर्टल"],["Hon. Mayor","मा. महापौर","मा. महापौर"],["Hon. Mayor Shri. Ajiv Patil","मा. महापौर श्री. अजीव पाटील"],["Hon. Mayor, Vasai Virar City Municipal Corporation","मा. महापौर, वसई विरार शहर महानगरपालिका"],["Hon. Shri. Ajiv Patil","मा. श्री.अजीव पाटील"],["Shri. Ajiv Patil","श्री. अजीव पाटील"],["Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेब","Repected Mayor Ajiv Patil Sir"],["Approved by Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेबांनी मंजूर केले"],["Rejected by Respected Mayor Ajiv Patil Sir","आदरणीय महापौर अजीव पाटील साहेबांनी नाकारले"],["Established : 3 July 2009","स्थापना : ३ जुलै २००९"],["Mayor","महापौर"],["Deputy Mayor","उपमहापौर"],["Mayor Today","आज महापौर"],["Mayor's Office Latest Updates & Activities","महापौर कार्यालयाच्या ताज्या घडामोडी व उपक्रम"],["Latest news from the Mayor's office","महापौर कार्यालयाच्या ताज्या बातम्या"],["Latest News","ताज्या बातम्या"],["Currently Ongoing","सध्या सुरू"],["Home","मुख्यपृष्ठ"],["My Appointments","माझ्या भेटी"],["View My Appointments","माझ्या भेटी बघा","My Appointments बघा"],["Book","बुक करा"],["Book Appointment","भेट बुक करा","Appointment बुक करा"],["Login","लॉगिन"],["Logout","लॉगआउट"],["Register","नोंदणी करा","Register करा","नोंदणी करा"],["Dashboard","डॅशबोर्ड"],["Notifications","सूचना"],["Help","मदत"],["Settings","सेटिंग्ज"],["Back","मागे"],["Go Back","मागे जा","मागे जा"],["Back to Meetings","सभांकडे परत"],["Back to Top","वर जा"],["Collapse sidebar","साइडबार लहान करा"],["Hide sidebar","साइडबार लपवा"],["Open sidebar","साइडबार उघडा"],["All Category","सर्व वर्ग"],["Search here","येथे शोधा"],["Search","शोधा"],["Prev","मागील"],["Next","पुढील"],["Previous week","मागील आठवडा"],["Next week","पुढील आठवडा"],["Contact Us","संपर्क करा"],["Follow Us","आम्हाला फॉलो करा"],["Site Map","साइट नकाशा"],["Helpline","हेल्पलाइन"],["WhatsApp Chatbot","व्हॉट्सअ‍ॅप चॅटबॉट"],["Virat Nagar, Near MHADA Colony","विराट नगर, म्हाडा कॉलनीजवळ"],["Virar West. PIN: 401303","विरार पश्चिम. पिन: ४०१३०३"],["Book an appointment easily","भेट सहज बुक करा","Appointment सहज बुक करा"],["How does it work","कसे काम करते"],["Book a meeting with the Mayor in 4 steps.","४ टप्प्यांमध्ये महापौरांची भेट बुक करा."],["Get Started — Register","सुरुवात करा — नोंदणी"],["Register to book a Mayor appointment","महापौर भेट बुक करण्यासाठी नोंदणी करा","Mayor Appointment बुक करण्यासाठी register करा"],["Create an account using your mobile number","मोबाईल नंबर वापरून खाते तयार करा","Mobile number वापरून account तयार करा"],["Choose from the available dates and time slots of the Hon. Mayor","मा. महापौर यांच्या उपलब्ध तारखा आणि वेळांमधून निवडा","मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"],["Fill in details","तपशील भरा"],["Give reason for visit, number of visitors and photo","भेटीचे कारण, अभ्यागत संख्या आणि फोटो द्या","भेटीचे कारण, visitors संख्या आणि photo द्या"],["You will get a confirmation token and QR code — show it on the day of the visit","पुष्टी टोकन आणि QR कोड मिळेल — भेटीच्या दिवशी दाखवा","Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"],["Get Token","टोकन मिळवा"],["Choose Date","तारीख निवडा"],["A platform created to take citizens' problems and suggestions directly to Hon. Mayor Shri. Ajiv Patil","नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"],["Since taking charge as Mayor on 3 February 2026, Hon. Mayor Shri. Ajiv Patil has set up this Jan Samvad platform to communicate directly with citizens. This transparent, simple and fast online medium has been created so that citizens' problems, suggestions and complaints reach the Mayor directly.","३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."],["For the citizens, by the citizens — committed to transparent, fast and digital public services","नागरिकांसाठी, नागरिकांकडून — पारदर्शक, जलद आणि डिजिटल लोकसेवेसाठी कटिबद्ध"],["Ongoing Projects","चालू प्रकल्प"],["Important ongoing projects of Vasai-Virar Municipal Corporation","वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"],["Progress","प्रगती"],["In progress","सुरू आहे","सुरू आहे"],["Citizen Participation","नागरिक सहभाग"],["By increasing active participation of citizens, their opinions and suggestions are becoming important in city development.","नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."],["Safe & Clean City","सुरक्षित व स्वच्छ शहर"],["The city is being made more liveable through safety, cleanliness and eco-friendly initiatives.","सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."],["Vasai Smart City Project","वसई स्मार्ट सिटी प्रकल्प"],["Under the Vasai Smart City project, emphasis is on digital, safe and well-equipped development of the city.","वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."],["Green Vasai-Virar — Tree Plantation Drive","हरित वसई-विरार — वृक्षारोपण मोहीम"],["Resolution to plant 5 lakh trees in the corporation area. The project aims to develop gardens, plant trees on both sides of roads and maintain environmental balance.","महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट."],["24×7 Water Supply Scheme — Vasai Division","24×7 पाणीपुरवठा योजना — वसई विभाग"],["Laying new water lines, renewing old pipelines and building new water tanks to provide 24-hour clean water to citizens of Vasai division.","वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे."],["Naringi Flyover Project Inspection","नारंगी उड्डाणपूल प्रकल्प पाहणी"],["Hon. Mayor Shri. Ajiv Patil personally inspected the work of the flyover at Naringi. During the inspection, he discussed the progress and difficulties of the work with the concerned officials, railway officials, contractors and sub-contractors, and gave instructions to speed up the work.","नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या."],["Open for traffic by end of March 2026","मार्च २०२६ अखेर वाहतुकीसाठी खुले"],["Discussion on forming committees","समिती गठनाबाबत चर्चा"],["Discussion is ongoing on important subjects of the Standing Committee and on forming ward committees.","स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे."],["Mayor and Corporators Meeting","महापौर व नगर सेवक बैठक"],["Daily Garbage Collection & Cleanliness Meeting","दैनंदिन कचरा संकलन व स्वच्छता बैठक"],["Road Repair & Infrastructure Planning Meeting","रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक"],["Road Repair & Construction","रस्ते दुरुस्ती व बांधकाम"],["Garbage Collection & Segregation","कचरा संकलन व वर्गीकरण"],["Gutter & Drain Cleaning","गटार व नाले साफसफाई"],["Footpath Construction Planning","फुटपाथ उभारणी नियोजन"],["Compost Production Technology Exhibition","खत निर्मिती तंत्रज्ञान प्रदर्शन"],["Solid Waste Management Exhibition","घनकचरा व्यवस्थापन प्रदर्शन"],["Inauguration of Solid Waste Management Camp-Exhibition","घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन"],["Camp Exhibition","शिबिर प्रदर्शन"],["Cleanliness Review","स्वच्छता आढावा"],["Road Development","रस्ते विकास"],["Electricity Development","वीज विकास"],["MSEDCL Vasai Circle Review Meeting","MSEDCL वसई मंडळ आढावा बैठक"],["MSEDCL Development Works Review","MSEDCL विकास कामे आढावा"],["Trees to be planted","झाडे लावणार"],["Beneficiary Families","लाभार्थी कुटुंबे"],["Citizens","नागरिक","नागरिक"],["Environment","पर्यावरण"],["Water Supply","पाणीपुरवठा"],["Infrastructure","पायाभूत सुविधा"],["Administration","प्रशासन","प्रशासन"],["Crore","कोटी"],["Lakh","लाख"],["Vasai-Virar City Municipal Corporation Mayor, Health, Virar City, Improvement Meeting, Office Vice President","वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"],["January","जानेवारी"],["February","फेब्रुवारी"],["March","मार्च"],["April","एप्रिल"],["May","मे"],["June","जून"],["July","जुलै"],["August","ऑगस्ट"],["September","सप्टेंबर"],["October","ऑक्टोबर"],["November","नोव्हेंबर"],["December","डिसेंबर"],["August 2025","ऑगस्ट 2025"],["December 2025","डिसेंबर 2025"],["March 2026","मार्च 2026"],["10 March 2026","१० मार्च २०२६"],["11 March 2026","११ मार्च २०२६"],["28 February 2026","२८ फेब्रुवारी २०२६"],["5 March 2026","५ मार्च २०२६"],["Mon","सोम"],["Tue","मंगळ"],["Wed","बुध"],["Thu","गुरु"],["Fri","शुक्र"],["Sat","शनि"],["Sun","रवि"],["Today","आज"],["Day","दिवस"],["Week","आठवडा"],["This year","हे वर्ष"],["Date","दिनांक"],["Time","वेळ"],["Official Login","अधिकारी लॉगिन"],["Citizen Login","नागरिक लॉगिन"],["For Citizens — To Book an Appointment with the Mayor.","नागरिकांसाठी — महापौरांची भेट बुक करण्यासाठी."],["For Municipal Corporation Officers, Employees, and Administrative Staff.","महानगरपालिका अधिकारी, कर्मचारी आणि प्रशासकीय कर्मचाऱ्यांसाठी."],["Welcome Back","पुन्हा स्वागत आहे"],["Sign in","साइन इन"],["SIGN IN","साइन इन"],["Sign In to Continue","पुढे जाण्यासाठी साइन इन करा"],["Sign in to the Mayor Appointment Portal.","महापौर भेट पोर्टलवर साइन इन करा."],["Continue","पुढे चला"],["Login now","लॉगिन करा","Login करा"],["Logging in","लॉगिन होत आहे"],["Login successful","लॉगिन यशस्वी","Login यशस्वी"],["Login failed","लॉगिन अयशस्वी"],["Redirecting to login page","लॉगिन पेजवर जात आहे","Login page वर redirect होत आहे"],["Username","वापरकर्ता नाव"],["User Name","वापरकर्ता नाव"],["Password","पासवर्ड"],["Confirm Password","पासवर्डची पुष्टी करा"],["Re-enter password","पासवर्ड परत टाका","Password परत टाका"],["Password Login","पासवर्ड लॉगिन"],["OTP Login","OTP लॉगिन"],["Mobile OTP Login","मोबाईल OTP लॉगिन"],["Send OTP","OTP पाठवा"],["Send OTP & Register","OTP पाठवा व नोंदणी करा"],["Sending OTP","OTP पाठवत आहे"],["Verify OTP","OTP पडताळा"],["Verifying","पडताळणी सुरू"],["Verify & Login","पडताळा व लॉगिन करा"],["Verify & Register","पडताळा व नोंदणी करा"],["Resend OTP","OTP पुन्हा पाठवा"],["Did not receive OTP","OTP मिळाला नाही"],["Didn't receive the OTP","OTP मिळाला नाही"],["OTP expired","OTP ची मुदत संपली"],["OTP has expired","OTP ची मुदत संपली आहे"],["OTP expires in","OTP ची मुदत संपेल"],["OTP has been sent to","OTP पाठवला आहे"],["OTP sent to","OTP पाठवला"],["Invalid OTP. Please try again.","चुकीचा OTP. कृपया पुन्हा प्रयत्न करा."],["Enter 6 digit OTP","६ अंकी OTP टाका"],["Your OTP will be sent to your registered mobile number","तुमचा OTP नोंदणीकृत मोबाईल नंबरवर पाठवला जाईल"],["via WhatsApp","व्हॉट्सअ‍ॅपद्वारे"],["Create account","खाते तयार करा","Account तयार करा"],["Create Account","खाते तयार करा"],["Don't have an account","खाते नाही","Account नाही"],["Already have an account","आधीच खाते आहे"],["Registering","नोंदणी सुरू आहे"],["Registration successful","नोंदणी यशस्वी"],["Registration Success","नोंदणी यशस्वी"],["Registration failed","नोंदणी अयशस्वी"],["Mobile number is not registered.","मोबाईल नंबर नोंदणीकृत नाही."],["Mobile number not registered","मोबाईल नंबर नोंदणीकृत नाही","Mobile number नोंदणीकृत नाही"],["Mobile number must be 10 digits","मोबाईल नंबर १० अंकी असावा"],["Password must be at least 6 characters","पासवर्ड किमान ६ अक्षरांचा असावा"],["Passwords do not match","पासवर्ड जुळत नाहीत"],["Min. 6 characters","किमान ६ अक्षरे"],["Minimum 6 characters","किमान 6 अक्षरे","किमान 6 characters"],["characters","अक्षरे"],["Enter 10-digit mobile number","१० अंकी मोबाईल नंबर टाका"],["digit mobile","अंकी मोबाईल"],["digit mobile number","अंकी मोबाईल नंबर"],["Enter email","ईमेल टाका"],["Enter full name","पूर्ण नाव टाका"],["Enter mobile number","मोबाईल नंबर टाका"],["Enter name","नाव टाका"],["Enter order number","आदेश क्रमांक टाका"],["Enter password","पासवर्ड टाका"],["Enter total revenue","एकूण महसूल टाका"],["Enter username","वापरकर्ता नाव टाका"],["Enter valid amount","योग्य रक्कम टाका"],["Enter your email","तुमचा ईमेल टाका"],["Enter your full name","तुमचे पूर्ण नाव टाका"],["Enter your mobile number","तुमचा मोबाईल नंबर टाका"],["Enter your password","तुमचा पासवर्ड टाका"],["Enter your username","तुमचे वापरकर्ता नाव टाका"],["Your full name","आपले पूर्ण नाव","आपले पूर्ण नाव"],["Full address","पूर्ण पत्ता","पूर्ण पत्ता"],["Get SMS notification","SMS द्वारे सूचना मिळवा","SMS द्वारे notification मिळवा"],["Full Name","पूर्ण नाव"],["Name","नाव"],["Mobile","मोबाईल"],["Mobile number","मोबाईल नंबर"],["Mobile Number","मोबाईल नंबर"],["Email","ईमेल"],["Email (optional)","ईमेल (ऐच्छिक)"],["Email Address","ईमेल पत्ता"],["Address","पत्ता"],["Pincode","पिनकोड"],["Ward","प्रभाग"],["Ward No","प्रभाग क्रमांक"],["Ward seat no","प्रभाग जागा क्रमांक"],["ward councillor","प्रभाग नगरसेवक"],["Select Ward","प्रभाग निवडा"],["Ward A","प्रभाग A"],["Ward B","प्रभाग B"],["Ward C","प्रभाग C"],["Ward D","प्रभाग D"],["Ward E","प्रभाग E"],["Ward F","प्रभाग F"],["Ward G","प्रभाग G"],["Ward H","प्रभाग H"],["Ward I","प्रभाग I"],["Ward J","प्रभाग J"],["Ward-A","प्रभाग-A"],["Ward-B","प्रभाग-B"],["Ward-C","प्रभाग-C"],["Ward-D","प्रभाग-D"],["Ward-E","प्रभाग-E"],["Ward-F","प्रभाग-F"],["Ward-G","प्रभाग-G"],["Ward-H","प्रभाग-H"],["Ward-I","प्रभाग-I"],["Taluka","तालुका"],["District","जिल्हा"],["Region","विभाग"],["Designation","पदनाम"],["Role","भूमिका"],["Department","विभाग"],["Departments","विभाग"],["departments","विभाग"],["Department Name","विभागाचे नाव"],["Main Department","मुख्य विभाग"],["Sub Department","उप विभाग"],["Select","निवडा"],["Select Department","विभाग निवडा"],["Select Role","भूमिका निवडा"],["Select Type","प्रकार निवडा"],["Select Decision","निर्णय निवडा"],["Select Financial Year","आर्थिक वर्ष निवडा"],["Select Time Slot","वेळ निवडा"],["Type","प्रकार"],["Category","वर्ग"],["Priority","प्राधान्य"],["Change Priority","प्राधान्य बदला","Priority बदला"],["Status","स्थिती"],["Change Status","स्थिती बदला","Status बदला"],["Update Status","स्थिती अद्ययावत करा"],["Description","वर्णन"],["Details","तपशील"],["Purpose","उद्देश"],["Purpose / Subject","उद्देश / विषय"],["Subject","विषय"],["subject","विषय"],["Subjects","विषय"],["Document","दस्तऐवज"],["Documents","दस्तऐवज"],["File","फाईल"],["Image","प्रतिमा"],["Image File","प्रतिमा फाईल"],["Photo","फोटो"],["Amount","रक्कम"],["Total","एकूण"],["Number","क्रमांक"],["Identity","ओळख"],["Company","कंपनी"],["Individual","वैयक्तिक"],["Other","इतर"],["Office","कार्यालय"],["Officer","अधिकारी"],["Citizen","नागरिक"],["User","वापरकर्ता"],["Users","वापरकर्ते"],["users","वापरकर्ते"],["Admin","प्रशासक"],["Admin User","प्रशासक वापरकर्ता"],["Super Admin","सुपर प्रशासक"],["Department User","विभाग वापरकर्ता"],["Personal Details","वैयक्तिक तपशील"],["Personal Info","वैयक्तिक माहिती"],["Personal Information","वैयक्तिक माहिती"],["Created At","तयार दिनांक"],["Updated At","अद्ययावत दिनांक"],["Joined","सामील दिनांक"],["ID","आयडी"],["Sr. No","अ.क्र"],["Show","दाखवा"],["Show all","सर्व दाखवा"],["Show less","कमी दाखवा"],["Showing","दाखवत आहे"],["Rows per page","प्रति पान ओळी"],["of","पैकी"],["to","ते"],["or","किंवा"],["more","अधिक"],["results","निकाल"],["selected","निवडले"],["Records","नोंदी"],["Replies","उत्तरे"],["Yes","होय"],["No","नाही"],["Not yet","अजून नाही"],["All","सर्व"],["Auto","स्वयं"],["Auto Generated","स्वयं निर्मित"],["Good","शुभ"],["Hello","नमस्कार"],["Dear","प्रिय"],["Dear Citizen","प्रिय नागरिक"],["Important Notice","महत्त्वाची सूचना","महत्त्वाची सूचना"],["Save","जतन करा"],["Save Changes","बदल जतन करा"],["Saving","जतन होत आहे"],["Cancel","रद्द करा"],["Close","बंद करा"],["Delete","हटवा"],["Yes, Delete","होय, हटवा"],["Deleting","हटवत आहे"],["Edit","संपादित करा"],["Update","अद्ययावत करा"],["View","पहा"],["View Details","तपशील पहा"],["View File","फाईल पहा"],["View Document","दस्तऐवज पहा"],["Doc","दस्तऐवज"],["Download","डाउनलोड करा","Download करा"],["Download below","खाली डाउनलोड करा","खाली download करा"],["Download failed","डाउनलोड अयशस्वी"],["Export CSV","CSV निर्यात करा"],["Refresh","रिफ्रेश करा"],["Reset","रीसेट करा"],["Fetch","मिळवा"],["Add","जोडा"],["Adding","जोडत आहे"],["Open Form","फॉर्म उघडा"],["Clear Filters","फिल्टर काढा"],["CLEAR","साफ करा"],["Submit Application","अर्ज सादर करा"],["Submit Appointment","भेट विनंती सादर करा"],["Submitting","सादर करत आहे"],["Review & Submit","तपासा व सादर करा"],["Verify all information and submit","सर्व माहिती तपासा आणि सादर करा","सर्व माहिती verify करा आणि submit करा"],["Choose File","फाईल निवडा"],["Choose Files","फाईल्स निवडा"],["No file chosen","कोणतीही फाईल निवडली नाही"],["No files","फाईल्स नाहीत"],["Upload Photo","फोटो अपलोड करा"],["Change Photo","फोटो बदला","Photo बदला"],["Upload Attachment","संलग्नक अपलोड करा"],["Upload Document to Submit","सादर करण्यासाठी दस्तऐवज अपलोड करा"],["Upload Excel File","Excel फाईल अपलोड करा"],["Attach document","दस्तऐवज जोडा"],["Camera","कॅमेरा"],["Use Camera","कॅमेरा वापरा"],["Use Webcam","वेबकॅम वापरा"],["Capture Photo","फोटो घ्या"],["Upload or use camera","अपलोड करा किंवा कॅमेरा वापरा","Upload करा किंवा camera वापरा"],["Provide photo by upload or camera","अपलोड किंवा कॅमेरा वापरून फोटो द्या","Upload किंवा camera वापरून photo द्या"],["Use Upload/Camera below only if you want to change it","बदलायचा असेल तरच खाली अपलोड/कॅमेरा वापरा","बदलायचा असेल तरच खाली Upload/Camera वापरा"],['Click "Change Photo" to change','बदलण्यासाठी "फोटो बदला" वर क्लिक करा','Click "Photo बदला" to change'],['Click "Upload Photo" to change','बदलण्यासाठी "फोटो अपलोड करा" वर क्लिक करा'],["Photo selected","फोटो निवडला"],["New photo selected","नवीन फोटो निवडला","नवीन Photo निवडला"],["This will be used instead of the old photo","हा जुन्या फोटोऐवजी वापरला जाईल","हा जुन्या photo ऐवजी वापरला जाईल"],["Use this photo","हाच फोटो वापरा","हाच फोटो वापरा"],["Photo from previous visit is available","मागील भेटीचा फोटो उपलब्ध आहे","मागील भेटीचा फोटो उपलब्ध आहे"],["Citizen's photo","नागरिकाचा फोटो","Citizen चा photo"],["Photo received from token","टोकनवरून फोटो मिळाला","Token वरून Photo मिळाला"],["Visitor Photo","अभ्यागत फोटो"],["File Selected","फाईल निवडली"],["Preview not available","पूर्वावलोकन उपलब्ध नाही","Preview उपलब्ध नाही"],["Maximum 12 files allowed","जास्तीत जास्त १२ फाईल्स परवानगी"],["PDF, Word, Excel, PNG, JPG — max 12, optional","PDF, Word, Excel, PNG, JPG — कमाल १२, ऐच्छिक"],["PDF, DOC, or Image","PDF, DOC किंवा प्रतिमा"],["PDF Document","PDF दस्तऐवज"],["Word Document","Word दस्तऐवज"],["Excel / Spreadsheet","Excel / स्प्रेडशीट"],["Existing Files","विद्यमान फाईल्स"],["Size","आकार"],["Duration","कालावधी"],["Pending","प्रलंबित"],["Approved","मंजूर"],["Rejected","नाकारले"],["Rejected by Admin","प्रशासकाने नाकारले"],["Cancelled","रद्द"],["Completed","पूर्ण"],["Resolved","निकाली"],["Expired","मुदत संपली"],["Failed","अयशस्वी"],["In Progress","प्रगतीपथावर"],["Not Started","सुरू नाही"],["Not Conducted","घेतली नाही"],["On-Hold","स्थगित"],["Postponed","पुढे ढकलले"],["Follow Up","पाठपुरावा"],["Booked","बुक केले"],["Available","उपलब्ध"],["available","उपलब्ध"],["High","उच्च"],["Medium","मध्यम"],["Low","कमी"],["Normal","सामान्य"],["Urgent","तातडीचे"],["Emergency","आणीबाणी"],["Pending — Admin approval is awaited","प्रलंबित — प्रशासक मंजुरी बाकी आहे","Pending — Admin approval बाकी आहे"],["Pending — Awaiting Mayor's Approval","प्रलंबित — महापौरांच्या मंजुरीची प्रतीक्षा"],["Pending (Activities)","प्रलंबित (उपक्रम)"],["Pending Amount","प्रलंबित रक्कम"],["Remaining","उर्वरित"],["Allocated","वाटप"],["Utilized","वापरले"],["Appointment","भेट"],["Appointments","भेटी"],["All Appointments","सर्व भेटी"],["New Appointment","नवीन भेट"],["Appointment Details","भेटीचा तपशील"],["Appointment Booked","भेट बुक झाली"],["Appointment Scheduling","भेट वेळापत्रक"],["Appointment Applications","भेट अर्ज"],["Applications For Appointment","भेटीसाठी अर्ज"],["Today's appointments","आजच्या भेटी"],["No appointments today","आज कोणत्याही भेटी नाहीत"],["No appointments","कोणत्याही भेटी नाहीत","कोणतेही appointments नाहीत"],["appointments found","भेटी सापडल्या"],["total appointments","एकूण भेटी"],["Loading appointments","भेटी लोड होत आहेत","Appointments लोड होत आहेत"],["all your appointments are here.","तुमच्या सर्व भेटी येथे आहेत."],["Book your first appointment to get started.","सुरुवात करण्यासाठी तुमची पहिली भेट बुक करा."],["Your appointment has been booked successfully","तुमची भेट यशस्वीरित्या बुक झाली आहे","तुमची appointment successfully book झाली आहे"],["Your appointment time","तुमची भेटीची वेळ","तुमचा appointment time"],["Booking failed","बुकिंग अयशस्वी"],["Booked On","बुक दिनांक"],["Preferred Date","पसंतीची तारीख"],["Available Dates","उपलब्ध तारखा"],["Allowed Date Range","परवानगी असलेली तारीख श्रेणी"],["To choose a date","तारीख निवडण्यासाठी","Date निवडण्यासाठी"],["Select Date","तारीख निवडा","Date Select करा"],["Select Time Slot","वेळ स्लॉट निवडा","Time Slot Select करा"],["Select 15-Minute Appointment Slot","१५ मिनिटांचा भेट स्लॉट निवडा","15-Minute Appointment Slot निवडा"],["Select 15-minute slot","१५ मिनिटांचा स्लॉट निवडा","15-minute slot निवडा"],["Select Start Time","सुरुवातीची वेळ निवडा","Start Time निवडा"],["Select End Time","समाप्तीची वेळ निवडा","End Time निवडा"],["Select Start Time!","सुरुवातीची वेळ निवडा!","Start Time select करा!"],["Select End Time!","समाप्तीची वेळ निवडा!","End Time select करा!"],["Select date first","आधी तारीख निवडा","आधी date select करा"],["Please select a date!","कृपया तारीख निवडा!","कृपया date select करा!"],["Select your preferred date, time slot, and 15-minute appointment window","तुमची पसंतीची तारीख, वेळ स्लॉट आणि १५ मिनिटांची भेट वेळ निवडा"],["Choose a date from the available dates above → choose time slot → choose 15-minute window","वरील उपलब्ध तारखांमधून तारीख निवडा → वेळ स्लॉट निवडा → १५ मिनिटांची वेळ निवडा","वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा"],["No dates available at the moment","सध्या कोणत्याही तारखा उपलब्ध नाहीत","सध्या कोणत्याही dates available नाहीत"],["Wait for admin to add availability","प्रशासकाकडून उपलब्धता जोडली जाण्याची वाट पाहा","Admin कडून availability add होण्याची वाट पाहा"],["Time Slot","वेळ स्लॉट"],["Time Slots","वेळ स्लॉट"],["TIME SLOTS","वेळ स्लॉट"],["Slot","स्लॉट"],["slot","स्लॉट"],["SLOT PREVIEW","स्लॉट पूर्वावलोकन"],["slots available","स्लॉट उपलब्ध"],["Slots loading","स्लॉट लोड होत आहेत"],["Start Time","सुरुवातीची वेळ"],["End Time","समाप्तीची वेळ"],["My Time","माझी वेळ"],["Your Time","तुमची वेळ"],["Mayor Available","महापौर उपलब्ध"],["Available | Booked |","उपलब्ध | बुक |"],["The slot you selected was just booked. Please choose another slot.","तुम्ही निवडलेला स्लॉट आत्ताच बुक झाला. कृपया दुसरा स्लॉट निवडा.","तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा."],["All 15-minute appointments for this slot are full. Please choose another slot.","या स्लॉटसाठी सर्व १५ मिनिटांच्या भेटी भरल्या आहेत. कृपया दुसरा स्लॉट निवडा.","या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा."],["This slot was just booked by someone else. Please choose another slot.","हा स्लॉट आत्ताच दुसऱ्याने बुक केला. कृपया दुसरा स्लॉट निवडा.","हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा."],["This slot is already booked. Please choose another.","हा स्लॉट आधीच बुक झाला आहे. कृपया दुसरा निवडा.","हा slot आधीच book झाला आहे. कृपया दुसरा निवडा."],["After submission, the appointment will be confirmed after Admin approval.","सादर केल्यानंतर प्रशासकाच्या मंजुरीनंतर भेट निश्चित होईल.","Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."],["Arrive on time on the day of the visit. The visit will not happen without token confirmation. Admin approval is required to confirm the appointment. For any difficulty contact the VVCMC office.","भेटीच्या दिवशी वेळेवर या. टोकन निश्चित झाल्याशिवाय भेट होणार नाही. भेट निश्चित होण्यासाठी प्रशासक मंजुरी आवश्यक आहे. कोणत्याही अडचणीसाठी वविशम कार्यालयाशी संपर्क करा.","भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."],["In order to process your appointment, all fields marked with an asterisk (*) are required.","तुमची भेट प्रक्रिया करण्यासाठी तारांकित (*) सर्व माहिती आवश्यक आहे."],["Provide details about your visit to the Mayor","महापौरांच्या भेटीबद्दल तपशील द्या"],["Write the reason for meeting the Mayor in detail — state your problem clearly","महापौरांना भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा","Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा"],["Reason for Visit","भेटीचे कारण"],["Visit Details","भेटीचा तपशील"],["Visit Information","भेटीची माहिती"],["Visit Number","भेट क्रमांक"],["Visited Before","आधी भेट दिली"],["Have you visited before","तुम्ही आधी भेट दिली आहे का"],["Number of Visitors","अभ्यागतांची संख्या"],["Visitors","अभ्यागत"],["existing visitor","जुने अभ्यागत"],["new visitor","नवीन अभ्यागत"],["last visit","शेवटची भेट"],["This citizen's","हे या नागरिकाचे","हे या नागरिकाचे"],["This will be this citizen's first visit","हे या नागरिकाचे पहिले भेट असेल","हे या नागरिकाचे पहिले भेट असेल"],["visit will be","वे भेट असेल","वे भेट असेल"],["Auto-filled from previous visit","मागील भेटीवरून स्वयं भरले","मागील भेटीवरून auto-filled"],["Already have token? (Has the citizen taken an appointment before?)","आधीच टोकन आहे? (नागरिकाने आधी भेट घेतली आहे का?)","Already have token? (Citizen ने आधी appointment घेतली आहे का?)"],["Do you have a token","टोकन आहे का","Token आहे का"],["Token","टोकन"],["Token ID","टोकन आयडी"],["Token No","टोकन क्रमांक"],["Token Number","टोकन क्रमांक"],["Token / Inward No","टोकन / आवक क्रमांक"],["Pre-filled from token","टोकनवरून आधीच भरले"],["Fetch Token first.","आधी टोकन मिळवा.","आधी Token Fetch करा."],["Please enter Token Number.","कृपया टोकन क्रमांक टाका.","कृपया Token Number टाका."],["Token not found","टोकन सापडले नाही","Token सापडले नाही"],["Token No not found","टोकन क्रमांक सापडला नाही","Token No सापडले नाही"],["Error while fetching token","टोकन मिळवताना त्रुटी आली","Token fetch करताना error आला"],["Citizen found","नागरिक सापडला","Citizen सापडला"],["Citizen Appointment not found","नागरिकाची भेट सापडली नाही","Citizen Appointment सापडले नाही"],["A blank form will open. Citizen's information will have to be filled manually.","रिकामा फॉर्म उघडेल. नागरिकाची माहिती स्वतः भरावी लागेल.","रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल."],["QR Code","QR कोड"],["QR Code — show on the day of the visit","QR कोड — भेटीच्या दिवशी दाखवा","QR Code — भेटीच्या दिवशी दाखवा"],["Information is loading","माहिती लोड होत आहे","माहिती लोड होत आहे"],["Camera access denied. Give browser permission.","कॅमेरा परवानगी नाकारली. ब्राउझर परवानगी द्या.","Camera access denied. Browser permission द्या."],["Application Form","अर्ज नमुना"],["Application Detail","अर्ज तपशील"],["Application Details","अर्ज तपशील"],["Application Records","अर्ज नोंदी"],["Applications","अर्ज"],["applications","अर्ज"],["All Applications","सर्व अर्ज"],["New Application","नवीन अर्ज"],["Recent Applications","अलीकडील अर्ज"],["Applicant","अर्जदार"],["Application submitted successfully! Token Number","अर्ज यशस्वीरित्या सादर झाला! टोकन क्रमांक"],["Loading applications","अर्ज लोड होत आहेत"],["No applications yet","अद्याप कोणतेही अर्ज नाहीत"],["No matching applications found.","जुळणारे अर्ज सापडले नाहीत."],["Error fetching applications","अर्ज मिळवताना त्रुटी"],["Citizen Details","नागरिक तपशील"],["Citizen Appts","नागरिक भेटी"],["Complaint","तक्रार"],["Complaint Subject","तक्रारीचा विषय"],["Complaint Description","तक्रारीचे वर्णन"],["Latest inward complaints","नवीन आवक तक्रारी"],["New inward complaints will show up here.","नवीन आवक तक्रारी येथे दिसतील."],["Counts appear once inward applications are tracked.","आवक अर्ज नोंदवल्यानंतर संख्या दिसेल."],["Inward No","आवक क्रमांक"],["CitizenBridge — Inward Records · All citizen appointment requests","CitizenBridge — आवक नोंदी · सर्व नागरिक भेट विनंत्या"],["Submitted By","सादरकर्ता"],["Submitted On","सादर दिनांक"],["Assign to Department","विभागाकडे सोपवा"],["Tag To","यांच्याकडे टॅग करा"],["Tag To (Authority)","यांच्याकडे टॅग करा (प्राधिकारी)"],["Tagged To","टॅग केलेले"],["Subjects tagged to","यांच्याकडे टॅग केलेले विषय"],["Click any row to view full details","पूर्ण तपशील पाहण्यासाठी कोणत्याही ओळीवर क्लिक करा"],["Click any row to view full details & reply","पूर्ण तपशील व उत्तरासाठी कोणत्याही ओळीवर क्लिक करा"],["Search by name, inward no, subject","नाव, आवक क्रमांक, विषयानुसार शोधा"],["Search by name, token ID, mobile, purpose, ward","नाव, टोकन आयडी, मोबाईल, उद्देश, प्रभागानुसार शोधा"],["Search by name, username, mobile, email","नाव, वापरकर्ता नाव, मोबाईल, ईमेलनुसार शोधा"],["Search by name, ward, mobile, designation","नाव, प्रभाग, मोबाईल, पदनामानुसार शोधा"],["Search by date","तारखेनुसार शोधा"],["Search subject ID","विषय आयडी शोधा"],["Search appointment","भेट शोधा"],["Search appointments","भेटी शोधा"],["Search meeting no","सभा क्रमांक शोधा"],["Search meetings","सभा शोधा"],["Search Order No","आदेश क्रमांक शोधा"],["Try a different filter or search term.","वेगळा फिल्टर किंवा शोध शब्द वापरा."],["Try another filter or search.","दुसरा फिल्टर किंवा शोध वापरा."],["No records found","कोणत्याही नोंदी सापडल्या नाहीत"],["Reply","उत्तर"],["Send Reply","उत्तर पाठवा"],["Reply Message","उत्तर संदेश"],["Reply Document","उत्तर दस्तऐवज"],["Attach Reply Document","उत्तर दस्तऐवज जोडा"],["Reply to Application","अर्जाला उत्तर द्या"],["Reply / Note to Citizen","नागरिकाला उत्तर / टीप"],["Reply By","उत्तरदाता"],["Write a reply message to the applicant","अर्जदाराला उत्तर संदेश लिहा","Applicant ला reply message लिहा"],["Please write a reply message.","कृपया उत्तर संदेश लिहा.","कृपया reply message लिहा."],["Reply sent successfully!","उत्तर यशस्वीरित्या पाठवले!","Reply यशस्वीरित्या पाठवली!"],["Error while sending reply","उत्तर पाठवताना त्रुटी आली","Reply पाठवताना error आला"],["Reply error","उत्तर त्रुटी"],["Write a note or reply that will be sent to the citizen as acknowledgement","नागरिकाला पोचपावती म्हणून पाठवली जाणारी टीप किंवा उत्तर लिहा"],["Saving will update the citizen's application status and send an acknowledgement notification automatically.","जतन केल्यावर नागरिकाच्या अर्जाची स्थिती अद्ययावत होईल आणि पोचपावती सूचना आपोआप पाठवली जाईल."],["Save & Notify Citizen","जतन करा व नागरिकाला कळवा"],["& citizen notified!","व नागरिकाला कळवले!"],["Status updated to","स्थिती अद्ययावत केली"],["Document from Admin","प्रशासकाकडून दस्तऐवज"],["Admin Note","प्रशासक टीप"],["SMS sent to","SMS पाठवला"],["WhatsApp sent to","व्हॉट्सअ‍ॅप पाठवला"],["SMS error for","SMS त्रुटी"],["SMS error","SMS त्रुटी"],["Error for","त्रुटी"],["Invalid mobile","चुकीचा मोबाईल"],["Availability","उपलब्धता"],["Mayor Availability","महापौर उपलब्धता"],["Set Mayor Availability","महापौर उपलब्धता ठरवा"],["Availability Details","उपलब्धता तपशील"],["Availability Records","उपलब्धता नोंदी"],["Add Availability","उपलब्धता जोडा"],["Manage Mayor's available dates and time slots","महापौरांच्या उपलब्ध तारखा व वेळ स्लॉट व्यवस्थापित करा","Mayor च्या available dates व time slots manage करा"],["Add Slot","स्लॉट जोडा"],["Remove slot","स्लॉट काढा"],["Slot removed.","स्लॉट काढला."],["Availability removed.","उपलब्धता काढली."],["Delete Availability","उपलब्धता हटवायची"],["all availability will be removed.","ची सर्व उपलब्धता काढली जाईल.","ची सर्व availability remove होईल."],["Existing slots","विद्यमान स्लॉट"],["No availability records found.","कोणत्याही उपलब्धता नोंदी सापडल्या नाहीत."],["Loading availability","उपलब्धता लोड होत आहे"],["Failed to load availability data","उपलब्धता माहिती लोड करण्यात अयशस्वी"],["Failed to add slot","स्लॉट जोडण्यात अयशस्वी"],["Failed to remove slot","स्लॉट काढण्यात अयशस्वी"],["Switch to Week view to browse other days.","इतर दिवस पाहण्यासाठी आठवडा दृश्य निवडा."],["Live · 8:00 AM – 6:00 PM","थेट · सकाळी 8:00 – सायं 6:00"],["Meeting","सभा"],["Meetings","सभा"],["Create Meeting","सभा तयार करा"],["Edit Meeting","सभा संपादित करा"],["Delete Meeting","सभा हटवायची"],["Meeting created","सभा तयार झाली"],["Meeting updated","सभा अद्ययावत झाली"],["Meeting deleted","सभा हटवली"],["Meeting Date","सभेचा दिनांक"],["Meeting Time","सभेची वेळ"],["Meeting No","सभा क्रमांक"],["Meeting Number","सभा क्रमांक"],["Meeting Proceedings","सभा कामकाज"],["Meeting Subjects","सभा विषय"],["Type Of Meeting","सभेचा प्रकार"],["Meeting / subject","सभा / विषय"],["Open meeting","सभा उघडा"],["View Meetings","सभा पहा"],["Meetings assigned to you","तुम्हाला सोपवलेल्या सभा"],["Meetings and their subjects will appear here.","सभा व त्यांचे विषय येथे दिसतील."],["meetings · all departments","सभा · सर्व विभाग"],["All meetings · progress = subjects with action taken","सर्व सभा · प्रगती = कार्यवाही झालेले विषय"],["Progress = subjects with action taken","प्रगती = कार्यवाही झालेले विषय"],["No meetings match this filter","या फिल्टरशी जुळणाऱ्या सभा नाहीत"],["No meetings to show yet","अद्याप दाखवण्यासाठी सभा नाहीत"],["No meeting available","कोणतीही सभा उपलब्ध नाही","कोणतीही meeting उपलब्ध नाही"],["No meeting subjects assigned yet","अद्याप कोणतेही सभा विषय सोपवलेले नाहीत"],["Click on the meeting number from the Meetings page","सभा पेजवरून सभा क्रमांकावर क्लिक करा","Meetings page वरून meeting number वर click करा"],["After saving the meeting, click on the Meeting Number and add Subjects","सभा जतन केल्यावर सभा क्रमांकावर क्लिक करून विषय जोडा","Meeting save केल्यावर Meeting Number वर click करून Subjects add करा"],["Click to view/add subjects","विषय पाहण्यासाठी/जोडण्यासाठी क्लिक करा"],["tap → subjects","टॅप करा → विषय"],["Manage Sabha Kamkaj","सभा कामकाज व्यवस्थापित करा","Sabha Kamkaj manage करा"],["Sabha Kamkaj — Subject wise progress tracking","सभा कामकाज — विषयनिहाय प्रगती मागोवा"],["— subjects of all departments of the selected meetings will appear on the dashboard","— निवडलेल्या सभांचे सर्व विभागांचे विषय डॅशबोर्डवर दिसतील","— निवडलेल्या सभांचे सर्व विभागांचे विषय dashboard वर दिसतील"],["General Body","महासभा"],["General Body (महासभा)","महासभा (General Body)"],["Standing Committee","स्थायी समिती"],["Standing Committee (स्थायी समिती)","स्थायी समिती (Standing Committee)"],["Standing Committee Chairman","स्थायी समिती सभापती"],["Not a member of General Body / Standing Committee","महासभा / स्थायी समिती सदस्य नाही","General Body / Standing Committee सदस्य नाही"],["No committee","समिती नाही"],["General","सर्वसाधारण"],["Administrative","प्रशासकीय"],["Administrative & Financial","प्रशासकीय व आर्थिक"],["Administrative and Financial Approval","प्रशासकीय व आर्थिक मान्यता"],["Contract Approval","करार मान्यता"],["Nivida Samiti Rate Approval","निविदा समिती दर मान्यता"],["Prashaskiy","प्रशासकीय"],["Samvida","संविदा"],["Agenda","कार्यसूची"],["Decision","निर्णय"],["Decision In Meeting","सभेतील निर्णय"],["Decision Breakdown","निर्णय विभागणी"],["Decision pending","निर्णय प्रलंबित"],["Decided, action pending","निर्णय झाला, कार्यवाही प्रलंबित"],["Proceedings","कामकाज"],["Subject ID","विषय आयडी"],["Subject Name","विषयाचे नाव"],["Subject Type","विषय प्रकार"],["Subject Type Breakdown","विषय प्रकार विभागणी"],["Add Subject","विषय जोडा"],["Edit Subject","विषय संपादित करा"],["Update Subject","विषय अद्ययावत करा"],["Delete Subject","विषय हटवायचा"],["Subject added","विषय जोडला"],["Subject updated","विषय अद्ययावत झाला"],["Subject deleted","विषय हटवला"],["Subject ID missing","विषय आयडी नाही"],["Subject Name is required","विषयाचे नाव आवश्यक आहे"],["Enter subject name","विषयाचे नाव टाका","Subject name टाका"],["No Subjects","विषय नाहीत"],["No subjects","कोणतेही विषय नाहीत","कोणतेही subjects नाहीत"],["No subject found","कोणताही विषय सापडला नाही","कोणताही subject सापडला नाही"],["Search a different Subject ID","वेगळा विषय आयडी शोधा","वेगळा Subject ID search करा"],["No subjects added to this meeting yet.","या सभेत अद्याप विषय जोडलेले नाहीत."],["Add subjects using the + Add Subject button","+ विषय जोडा बटण वापरून विषय जोडा","Add Subject button वापरून subjects add करा"],["Failed to load subjects","विषय लोड करण्यात अयशस्वी"],["Total Subjects","एकूण विषय"],["TOTAL MEETINGS","एकूण सभा"],["Department-wise Subject Progress","विभागनिहाय विषय प्रगती"],["Meeting-wise Subject Progress","सभानिहाय विषय प्रगती"],["Your Department Progress","तुमच्या विभागाची प्रगती"],["Action","कार्यवाही"],["Actions","क्रिया"],["Action taken","केलेली कार्यवाही"],["action taken","केलेली कार्यवाही"],["Action Taken Progress","कार्यवाही प्रगती"],["Action Taken saved","केलेली कार्यवाही जतन झाली"],["Save Action Taken","केलेली कार्यवाही जतन करा"],["No action taken yet","अद्याप कार्यवाही नाही"],["Open a subject to record its next step.","पुढील टप्पा नोंदवण्यासाठी विषय उघडा."],["Completion","पूर्तता"],["Completion Rate","पूर्तता दर"],["Here's where your meetings and applications stand today.","तुमच्या सभा आणि अर्जांची आजची स्थिती येथे आहे."],["Record Meeting","सभा रेकॉर्ड करा"],["Record Meeting — available at scheduled meeting time","सभा रेकॉर्ड करा — नियोजित सभेच्या वेळी उपलब्ध"],["Hide Recorder","रेकॉर्डर लपवा"],["Start Session","सत्र सुरू करा"],["Stop Session","सत्र थांबवा"],["Session ended.","सत्र संपले."],["Audio Recording (optional)","ऑडिओ रेकॉर्डिंग (ऐच्छिक)"],["Audio Recording ON","ऑडिओ रेकॉर्डिंग सुरू"],["Upload Meeting Recording (optional)","सभेचे रेकॉर्डिंग अपलोड करा (ऐच्छिक)"],["Recording saved","रेकॉर्डिंग जतन झाले"],["Recording ready","रेकॉर्डिंग तयार"],["Auto-recording saved","स्वयं-रेकॉर्डिंग जतन झाले"],["Waiting for someone to speak","कोणी बोलण्याची प्रतीक्षा"],["Waiting","प्रतीक्षा"],["Speaking","बोलत आहे"],["Silence","शांतता"],["Microphone Not Found","मायक्रोफोन सापडला नाही"],["Microphone Permission Denied","मायक्रोफोन परवानगी नाकारली"],["Microphone Could Not Start — Refresh page","मायक्रोफोन सुरू झाला नाही — पेज रिफ्रेश करा"],["1st Envelope Opened","पहिला लिफाफा उघडला"],["2nd Envelope Opened","दुसरा लिफाफा उघडला"],["Ghoshwara Ready","घोषवारा तयार"],["LOI Issued","LOI जारी"],["SD Submitted","SD सादर"],["Tender Floated","निविदा प्रसिद्ध"],["Work Order Issued","कार्यादेश जारी"],["Work Started","काम सुरू"],["Work Progress - Financial Progress","कामाची प्रगती - आर्थिक प्रगती"],["Work Progress - Physical Progress","कामाची प्रगती - भौतिक प्रगती"],["Tracking","मागोवा"],["Weekly Trend","साप्ताहिक कल"],["Analytics","विश्लेषण"],["Analytic overview","विश्लेषण आढावा"],["No regional data yet","अद्याप प्रादेशिक माहिती नाही"],["will appear here.","येथे दिसतील."],["User Management","वापरकर्ता व्यवस्थापन"],["Janata Darbar — User Management","जनता दरबार — वापरकर्ता व्यवस्थापन"],["All Users","सर्व वापरकर्ते"],["All Roles","सर्व भूमिका"],["Add User","वापरकर्ता जोडा"],["Add New User","नवीन वापरकर्ता जोडा"],["Edit User","वापरकर्ता संपादित करा"],["User Detail","वापरकर्ता तपशील"],["User Added Successfully","वापरकर्ता यशस्वीरित्या जोडला"],["User Updated Successfully","वापरकर्ता यशस्वीरित्या अद्ययावत झाला"],["Loading users","वापरकर्ते लोड होत आहेत"],["No users found","वापरकर्ते सापडले नाहीत"],["No users found for department","या विभागासाठी वापरकर्ते सापडले नाहीत"],["Users fetch failed","वापरकर्ते मिळवण्यात अयशस्वी"],["Error while fetching users","वापरकर्ते मिळवताना त्रुटी आली","Users fetch करताना error आला"],["Corporator","नगरसेवक"],["Corporators","नगरसेवक"],["corporators","नगरसेवक"],["Corporators / Nagarsevak","नगरसेवक / Corporators","Corporators / नगरसेवक"],["Add Corporator","नगरसेवक जोडा"],["Name of corporator","नगरसेवकाचे नाव"],["Names of corporators","नगरसेवकांची नावे"],["Corporator Added Successfully","नगरसेवक यशस्वीरित्या जोडला"],["Corporator Updated Successfully","नगरसेवक यशस्वीरित्या अद्ययावत झाला"],["Loading corporators","नगरसेवक लोड होत आहेत"],["Corporators fetch failed","नगरसेवक मिळवण्यात अयशस्वी"],["Error while fetching corporators","नगरसेवक मिळवताना त्रुटी आली","Corporators fetch करताना error आला"],['No corporators found — click on "+ Add Corporator"','नगरसेवक सापडले नाहीत — "+ नगरसेवक जोडा" वर क्लिक करा','No corporators found — "+ Add Corporator" वर click करा'],["Deleted Successfully","यशस्वीरित्या हटवले"],["Do you want to delete","हटवायचे आहे का","ला delete करायचे आहे का"],["This record will be permanently deleted. Are you sure?","ही नोंद कायमची हटवली जाईल. खात्री आहे का?","He record permanently delete होईल. Sure aahes ka?"],["This subject will be permanently deleted.","हा विषय कायमचा हटवला जाईल.","He subject permanently delete होईल."],["Leader of House","सभागृह नेते"],["Leader of Opposition","विरोधी पक्षनेते"],["Municipal Commissioner","महानगरपालिका आयुक्त"],["Additional Commissioner","अतिरिक्त आयुक्त"],["Secretary","सचिव"],["Collector","जिल्हाधिकारी"],["Collector Office","जिल्हाधिकारी कार्यालय"],["Deputy Collector","उपजिल्हाधिकारी"],["CEO","मुख्य कार्यकारी अधिकारी"],["Deputy CEO","उप मुख्य कार्यकारी अधिकारी"],["Chief Officer","मुख्याधिकारी"],["Deputy Chief Officer","उप मुख्याधिकारी"],["Guardian Minister","पालकमंत्री"],["Gram Sevak","ग्रामसेवक"],["Sarpanch","सरपंच"],["Grampanchayat","ग्रामपंचायत"],["Municipal Corporation","महानगरपालिका"],["Corporation / NagarPalika","महानगरपालिका / नगरपालिका"],["Mahanagarpalika Office","महानगरपालिका कार्यालय"],["Head Office","मुख्य कार्यालय"],["Main Office","मुख्य कार्यालय"],["NGO","स्वयंसेवी संस्था"],["Palghar","पालघर"],["Vasai","वसई"],["Dahanu","डहाणू"],["Jawhar","जव्हार"],["Mokhada","मोखाडा"],["Talasari","तलासरी"],["Vikramgad","विक्रमगड"],["Wada","वाडा"],["Accounts & Finance","लेखा व वित्त"],["Finance & Accounts","वित्त व लेखा"],["Finance & Audit","वित्त व लेखापरीक्षण"],["Agriculture & Allied","कृषी व संलग्न"],["Agriculture & Allied Services","कृषी व संलग्न सेवा"],["Disaster Management","आपत्ती व्यवस्थापन"],["Education","शिक्षण"],["Engineering & Works","अभियांत्रिकी व बांधकाम"],["Governance & Law","प्रशासन व कायदा"],["Health","आरोग्य"],["Health & Sanitation","आरोग्य व स्वच्छता"],["Health & Social Welfare","आरोग्य व समाजकल्याण"],["Health & Welfare","आरोग्य व कल्याण"],["Infrastructure & Utilities","पायाभूत सुविधा व सेवा"],["Legal Department","विधी विभाग"],["Office & Workflow","कार्यालय व कार्यपद्धती"],["Planning & Statistics","नियोजन व सांख्यिकी"],["Revenue & Tax","महसूल व कर"],["Rural & Development","ग्रामीण व विकास"],["Rural Development","ग्रामविकास"],["Social Welfare","समाजकल्याण"],["Supply & Control","पुरवठा व नियंत्रण"],["Supply & Food","पुरवठा व अन्न"],["Village Development","गाव विकास"],["Water & Sanitation","पाणी व स्वच्छता"],["Water & Sewerage","पाणी व मलनिःसारण"],["IT DEPARTMENT","माहिती तंत्रज्ञान विभाग"],["Accounting Department HO","लेखा विभाग मु.का."],["Accounting Department, (A) HO","लेखा विभाग, (अ) मु.का."],["Advertisement Tax Department HO","जाहिरात कर विभाग मु.का."],["Audit Department HO","लेखापरीक्षण विभाग मु.का."],["Birth and Death Department HO","जन्म व मृत्यू विभाग मु.का."],["Commissioner Office HO","आयुक्त कार्यालय मु.का."],["Construction department HO","बांधकाम विभाग मु.का."],["Department of Hygiene Disorder Management HO","स्वच्छता व्यवस्थापन विभाग मु.का."],["Disaster Management Departmengt HO","आपत्ती व्यवस्थापन विभाग मु.का."],["Diwabatti Department HO","दिवाबत्ती विभाग मु.का."],["Environment / Tree Authority / Forests / Parks Department / Election Department / Census Department HO","पर्यावरण / वृक्ष प्राधिकरण / वने / उद्यान विभाग / निवडणूक विभाग / जनगणना विभाग मु.का."],["Establishment Department HO","आस्थापना विभाग मु.का."],["Fire Brigade Department HO","अग्निशमन विभाग मु.का."],["General Administration Department / Records Department HO","सामान्य प्रशासन विभाग / अभिलेख विभाग मु.का."],["Handicapped welfare Department HO","दिव्यांग कल्याण विभाग मु.का."],["Health Department HO","आरोग्य विभाग मु.का."],["Inward-out Department HO","आवक-जावक विभाग मु.का."],["Library department HO","ग्रंथालय विभाग मु.का."],["Local Body Tax Department HO","स्थानिक संस्था कर विभाग मु.का."],["Market Recovery Department HO","बाजार वसुली विभाग मु.का."],["Marriage Registration Department HO","विवाह नोंदणी विभाग मु.का."],["Medical Health Department HO","वैद्यकीय आरोग्य विभाग मु.का."],["Meeting Department HO","सभा विभाग मु.का."],["Mud and Bhuibhade Department HO","माती व भुईभाडे विभाग मु.का."],["Naharkat / License Certificates Department HO","ना-हरकत / परवाना प्रमाणपत्र विभाग मु.का."],["Nulm department / hawker policy department HO","NULM विभाग / फेरीवाला धोरण विभाग मु.का."],["Satellite City Department HO","उपनगर विभाग मु.का."],["Special Planning Authority Department HO","विशेष नियोजन प्राधिकरण विभाग मु.का."],["Tax department HO","कर विभाग मु.का."],["Town Planning Department HO","नगररचना विभाग मु.का."],["Transportation / Vehicle Department HO","परिवहन / वाहन विभाग मु.का."],["Unauthorized Construction Committee HO","अनधिकृत बांधकाम समिती मु.का."],["Unauthorized Construction Department HO","अनधिकृत बांधकाम विभाग मु.का."],["Water Supply Department HO","पाणीपुरवठा विभाग मु.का."],["Women and Child welfare Department HO","महिला व बालकल्याण विभाग मु.का."],["Revenue Allocation","महसूल वाटप"],["Super Admin – Revenue Allocation","सुपर प्रशासक – महसूल वाटप"],["Add Revenue","महसूल जोडा"],["Save Revenue","महसूल जतन करा"],["Total Revenue","एकूण महसूल"],["Revenue Activity","महसूल उपक्रम"],["Add Revenue Activity","महसूल उपक्रम जोडा"],["Revenue Doc","महसूल दस्तऐवज"],["Revenue added successfully","महसूल यशस्वीरित्या जोडला"],["No revenue found","महसूल सापडला नाही"],["Matched revenue","जुळलेला महसूल"],["Add Activity","उपक्रम जोडा"],["Save Activity","उपक्रम जतन करा"],["Activity History","उपक्रम इतिहास"],["Activity added successfully","उपक्रम यशस्वीरित्या जोडला"],["Activity saved successfully","उपक्रम यशस्वीरित्या जतन झाला"],["No activities found","उपक्रम सापडले नाहीत"],["Error fetching activities","उपक्रम मिळवताना त्रुटी"],["Failed to add activity","उपक्रम जोडण्यात अयशस्वी"],["Failed to save activity","उपक्रम जतन करण्यात अयशस्वी"],["Add Disbursement","वितरण जोडा"],["Disburse Amount","वितरित रक्कम"],["Disburse Amt","वितरित रक्कम"],["Amount exceeds pending","रक्कम प्रलंबित रकमेपेक्षा जास्त आहे"],["Amount Sanctioned (₹)","मंजूर रक्कम (₹)"],["Sanctioned","मंजूर"],["Sanctioned Amt","मंजूर रक्कम"],["Sanctioned Order Date","मंजुरी आदेश दिनांक"],["Sanctioned Order No","मंजुरी आदेश क्रमांक"],["Add sanctioned & expenditure details","मंजूर व खर्च तपशील जोडा"],["Record sanctioned & spent details","मंजूर व खर्च झालेले तपशील नोंदवा"],["Order Date","आदेश दिनांक"],["Order No","आदेश क्रमांक"],["Financial Year","आर्थिक वर्ष"],["FY","आ.व."],["Financial year & role wise consolidated report","आर्थिक वर्ष व भूमिकानिहाय एकत्रित अहवाल"],["Bill","बिल"],["Bill / UC Upload","बिल / UC अपलोड"],["Resolved By","निकाली काढणारे"],["Resolved On","निकाली दिनांक"],["Resolved Role","निकाली काढणाऱ्याची भूमिका"],["Loading","लोड होत आहे"],["Loading dashboard","डॅशबोर्ड लोड होत आहे"],["Loading departments","विभाग लोड होत आहेत"],["Creating","तयार होत आहे"],["Sending","पाठवत आहे"],["added successfully","यशस्वीरित्या जोडले"],["Something went wrong","काहीतरी चूक झाली"],["Server error","सर्व्हर त्रुटी"],["Server error. Is the backend running?","सर्व्हर त्रुटी. बॅकएंड चालू आहे का?","Server error. Backend चालू आहे का?"],["All fields required","सर्व माहिती आवश्यक"],["Fill all fields","सर्व माहिती भरा","सर्व fields भरा"],["Fill all required fields","सर्व आवश्यक माहिती भरा","All required fields fill करा"],["All required fields must be filled","सर्व आवश्यक माहिती भरली पाहिजे"],["Required fields missing: Full Name, Mobile, and Subject are required","आवश्यक माहिती अपूर्ण: पूर्ण नाव, मोबाईल आणि विषय आवश्यक आहेत"],["Failed to fetch","मिळवण्यात अयशस्वी"],["Failed to save","जतन करण्यात अयशस्वी"],["Failed to update","अद्ययावत करण्यात अयशस्वी"],["Failed to delete","हटवण्यात अयशस्वी"],["Save failed","जतन अयशस्वी"],["Update failed","अद्ययावत अयशस्वी"],["Delete failed","हटवणे अयशस्वी"],["Department fetch error","विभाग मिळवताना त्रुटी"],["Camera access denied. Please allow camera permission.","कॅमेरा परवानगी नाकारली. कृपया कॅमेरा परवानगी द्या."],["Document file is required. Please upload a file before submitting.","दस्तऐवज फाईल आवश्यक आहे. सादर करण्यापूर्वी कृपया फाईल अपलोड करा."],["Failed to send OTP. Please try again.","OTP पाठवण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा."],["Financial year not found. Please add revenue first.","आर्थिक वर्ष सापडले नाही. कृपया आधी महसूल जोडा."],["Mobile number is not registered. Please register first.","मोबाईल नंबर नोंदणीकृत नाही. कृपया आधी नोंदणी करा."],["OTP expired! Please resend","OTP ची मुदत संपली! कृपया पुन्हा पाठवा"],["OTP has expired. Please request a new OTP.","OTP ची मुदत संपली आहे. कृपया नवीन OTP मागवा."],["Please enter a valid 10-digit mobile number.","कृपया योग्य १० अंकी मोबाईल नंबर टाका."],["Please enter a valid mobile number.","कृपया योग्य मोबाईल नंबर टाका."],["Please enter the 6-digit OTP.","कृपया ६ अंकी OTP टाका."],["Please enter your password.","कृपया तुमचा पासवर्ड टाका."],["Please enter your username.","कृपया तुमचे वापरकर्ता नाव टाका."],["Please fill all required fields","कृपया सर्व आवश्यक माहिती भरा"],["Please fill in all required fields.","कृपया सर्व आवश्यक माहिती भरा."],["Please fill required fields","कृपया आवश्यक माहिती भरा"],["Please login to the portal using OTP Login","कृपया OTP लॉगिन वापरून पोर्टलवर लॉगिन करा"],["Please provide your basic details to proceed","पुढे जाण्यासाठी कृपया तुमची मूलभूत माहिती द्या"],["Please select a portal to log in.","लॉगिन करण्यासाठी कृपया पोर्टल निवडा."],["Please select Financial Year","कृपया आर्थिक वर्ष निवडा"],["Please select Order Date","कृपया आदेश दिनांक निवडा"],["Please upload a file to proceed with submission","सादर करण्यासाठी कृपया फाईल अपलोड करा"],["Please upload Bill / UC document","कृपया बिल / UC दस्तऐवज अपलोड करा"],["Please upload or capture a clear photo for identification at the Mayor's office","महापौर कार्यालयात ओळखीसाठी कृपया स्पष्ट फोटो अपलोड करा किंवा काढा"],["Server Error. Please try again","सर्व्हर त्रुटी. कृपया पुन्हा प्रयत्न करा"],["Wrong OTP! Please try again","चुकीचा OTP! कृपया पुन्हा प्रयत्न करा"],["This mobile number is already registered. Please Login.","हा मोबाईल नंबर आधीच नोंदणीकृत आहे. कृपया लॉगिन करा.","हा mobile number already registered आहे ❌ Please Login करा."],["morning","सकाळ"],["afternoon","दुपार"],["evening","संध्याकाळ"],["Appointment Time","भेटीची वेळ","APPOINTMENT_TIME"],["Saturday","शनिवार"],["Sunday","रविवार"],["Monday","सोमवार"],["Tuesday","मंगळवार"],["Wednesday","बुधवार"],["Thursday","गुरुवार"],["Friday","शुक्रवार"]],Jb="appLang",Qb=["en","mr"],Y0="en",Zb=["placeholder","title","alt","aria-label"],Kb="[data-no-translate], script, style, noscript, textarea, code, pre, [contenteditable='true']",V0="(?:[^\\p{L}\\p{M}]|[\\uFE0E\\uFE0F\\u200D\\u20E3])*",v4=new RegExp("^("+V0+")([\\s\\S]*?)("+V0+")$","u"),Ki=n=>{const o=v4.exec(n);return o?[o[1],o[2],o[3]]:["",n,""]},Os=n=>n.replace(/\s+/g," ").trim().toLowerCase(),q0=n=>/[A-Z]/.test(n)&&!/[a-z]/.test(n),_s=new Map,mp=new Map;(()=>{const n=(o,l,s)=>{const d=Os(Ki(o)[1]);d&&!_s.has(d)&&_s.set(d,l);const p=Os(o);p&&!mp.has(p)&&mp.set(p,s)};I0.forEach(o=>{const l=[Ki(o[0])[1],Ki(o[1])[1]],s=[o[0],o[1]];o.forEach((d,p)=>p<2&&n(d,l,s))}),I0.forEach(o=>{const l=[Ki(o[0])[1],Ki(o[1])[1]];o.slice(2).forEach(s=>n(s,l,[o[0],o[1]]))})})();let wo=(()=>{try{const n=localStorage.getItem(Jb);return Qb.includes(n)?n:Y0}catch{return Y0}})();const j4=()=>wo,w4=["January","February","March","April","May","June","July","August","September","October","November","December","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],S4={jan:"जाने",feb:"फेब्रु",mar:"मार्च",apr:"एप्रि",jun:"जून",jul:"जुलै",aug:"ऑग",sep:"सप्टें",oct:"ऑक्टो",nov:"नोव्हें",dec:"डिसें"},Uu=new RegExp("\\b("+w4.join("|")+")\\b","g");function k4(n,o){return o!=="mr"||!/\d/.test(n)||!Uu.test(n)?null:(Uu.lastIndex=0,n.replace(Uu,s=>{const d=_s.get(s.toLowerCase());return d?d[1]:S4[s.toLowerCase()]||s}).replace(/\b(AM|PM)\b/g,s=>s==="AM"?"सकाळी":"सायं"))}function So(n,o=wo){if(n==null||typeof n!="string"||!/[\p{L}]/u.test(n))return n;const l=o==="mr"?1:0,s=mp.get(Os(n));if(s&&s[l]){const m=n.match(/^\s*/)[0],y=n.match(/\s*$/)[0];let v=s[l];return o==="en"&&q0(n)&&(v=v.toUpperCase()),m+v+y}const[d,p,f]=Ki(n);if(!p)return n;const x=_s.get(Os(p));if(!x)return k4(n,o)??n;let h=x[l];return h?(o==="en"&&q0(p)&&(h=h.toUpperCase()),d+h+f):n}const Wu=n=>typeof n=="string"?String(So(n)).split(`
`).map(o=>So(o)).join(`
`):n,ys=new WeakMap,G0=new WeakMap,Fp=n=>!n||n.closest&&n.closest(Kb);function N4(n){const o=ys.get(n);return o&&n.nodeValue===o.applied?o.orig:n.nodeValue}function C4(n){if(n.hasAttribute("value")&&!n.hasAttribute("data-i18n-autovalue"))return;const o=Array.from(n.childNodes).map(l=>l.nodeType===3?N4(l):l.textContent).join("").replace(/\s+/g," ").trim();n.getAttribute("value")!==o&&(n.setAttribute("value",o),n.setAttribute("data-i18n-autovalue",""))}function hp(n){const o=n.parentElement;if(Fp(o))return;let l=ys.get(n);(!l||n.nodeValue!==l.applied)&&(l={orig:n.nodeValue}),o.tagName==="OPTION"&&(ys.set(n,{orig:l.orig,applied:n.nodeValue}),C4(o));const s=So(l.orig);l.applied=s,ys.set(n,l),n.nodeValue!==s&&(n.nodeValue=s)}function xp(n){if(Fp(n))return;let o=G0.get(n);const l=Zb.slice();n.tagName==="INPUT"&&/^(button|submit|reset)$/i.test(n.type)&&l.push("value");for(const s of l){if(!n.hasAttribute(s))continue;const d=n.getAttribute(s);o||(o={},G0.set(n,o));let p=o[s];(!p||d!==p.applied)&&(p={orig:d});const f=So(p.orig);p.applied=f,o[s]=p,d!==f&&n.setAttribute(s,f)}}function bp(n){if(!n)return;if(n.nodeType===3){hp(n);return}if(n.nodeType!==1&&n.nodeType!==11)return;if(n.nodeType===1){if(Fp(n))return;xp(n)}const o=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:s=>s.nodeType===1&&s.matches(Kb)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let l=o.nextNode();for(;l;)l.nodeType===3?hp(l):xp(l),l=o.nextNode()}let Fu=null,os=null;function yp(){(Fu===null||document.title!==os)&&(Fu=document.title),os=So(Fu),document.title!==os&&(document.title=os)}let X0=!1;function T4(){if(X0||typeof window>"u")return;X0=!0;const{alert:n,confirm:o,prompt:l}=window;window.alert=p=>n.call(window,Wu(p)),window.confirm=p=>o.call(window,Wu(p)),window.prompt=(p,f)=>l.call(window,Wu(p),f),document.documentElement.lang=wo;const s=document.createElement("style");s.setAttribute("data-i18n",""),s.textContent='html[lang="mr"] body *{letter-spacing:normal !important;}',document.head.appendChild(s);const d=()=>{bp(document.body),yp(),new MutationObserver(f=>{for(const x of f)x.type==="characterData"?hp(x.target):x.type==="attributes"?xp(x.target):x.addedNodes.forEach(bp)}).observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[...Zb,"value"]});const p=document.querySelector("title");p&&new MutationObserver(yp).observe(p,{childList:!0,characterData:!0,subtree:!0})};document.body?d():document.addEventListener("DOMContentLoaded",d)}function J0(n){if(!(!Qb.includes(n)||n===wo)){wo=n;try{localStorage.setItem(Jb,n)}catch{}document.documentElement.lang=n,bp(document.body),yp(),window.dispatchEvent(new CustomEvent("app-langchange",{detail:n}))}}function z4(){const[n,o]=b.useState(j4());return b.useEffect(()=>{const l=s=>o(s.detail);return window.addEventListener("app-langchange",l),()=>window.removeEventListener("app-langchange",l)},[]),n}function Bs({variant:n="dark",style:o}){const l=z4(),s=n==="dark",d={display:"inline-flex",alignItems:"center",padding:3,borderRadius:50,border:s?"1.5px solid rgba(202,157,40,0.75)":"1px solid #E5EEEE",background:s?"rgba(255,255,255,0.08)":"#F1F7F8",flexShrink:0,gap:2,...o},p=f=>({border:"none",cursor:"pointer",borderRadius:50,padding:"6px 12px",fontSize:12.5,fontWeight:700,lineHeight:1.2,whiteSpace:"nowrap",fontFamily:"'Plus Jakarta Sans','Noto Sans Devanagari','Montserrat',sans-serif",transition:"all 0.25s ease",background:f?s?"#CA9D28":"#087F8C":"transparent",color:f?s?"#114e59":"#FFFFFF":s?"rgba(245,231,194,0.88)":"#087F8C"});return a.jsxs("div",{"data-no-translate":!0,style:d,role:"group","aria-label":"Language / भाषा",children:[a.jsx("button",{type:"button",style:p(l==="en"),onClick:()=>J0("en"),"aria-pressed":l==="en",children:"EN"}),a.jsx("button",{type:"button",style:p(l==="mr"),onClick:()=>J0("mr"),"aria-pressed":l==="mr",children:"मराठी"})]})}const ar="#FFFFFF",Hu="#F1F7F8",lo="#E5EEEE",Za="#087F8C",A4="#0d4f5c",so="#D8B66A",ls="#1a3a40",ss="#8AA5AB";function E4({name:n}){const o=(n||"A").split(" ").map(l=>l[0]).join("").slice(0,2).toUpperCase();return a.jsx("div",{className:"nb-avatar",style:{width:38,height:38,borderRadius:"50%",background:Za,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13.5,fontWeight:700,color:ar,flexShrink:0,fontFamily:"'Montserrat','Segoe UI',sans-serif",cursor:"pointer",border:`2px solid ${ar}`,userSelect:"none"},children:o})}const R4=()=>{const{user:n}=Ps(v=>v.auth),o=zo(),l=vt(),{mode:s}=Xb(),d=s==="hidden",[p,f]=b.useState(!1),[x,h]=b.useState(16),m=b.useRef(null);b.useEffect(()=>{const v=setInterval(()=>h(Math.floor(12+Math.random()*8)),4e3);return()=>clearInterval(v)},[]),b.useEffect(()=>{const v=C=>{m.current&&!m.current.contains(C.target)&&f(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]);const y=()=>{o(sb()),l("/login")};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Noto+Sans+Devanagari:wght@600;700&display=swap');

        .nb-wrap {
          background: ${ar};
          height: 60px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 0 24px;
          gap: 14px;
          border-bottom: 1px solid ${lo};
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
          background: ${Hu};
          border: 1px solid ${lo};
          border-radius: 10px;
          padding: 0 14px;
          flex: 0 1 420px;
          min-width: 0;
          transition: border-color 200ms ease, box-shadow 200ms ease, background 200ms ease;
        }
        .nb-search-box:hover { border-color: #D5E4E6; }
        .nb-search-box:focus-within {
          background: ${ar};
          border-color: ${Za};
          box-shadow: 0 0 0 3px rgba(8,127,140,0.10);
        }
        .nb-search-input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 13px;
          font-weight: 500;
          color: ${ls};
          font-family: 'Montserrat','Segoe UI',sans-serif;
          width: 100%;
          min-width: 0;
          height: 100%;
        }
        .nb-search-input::placeholder { color: ${ss}; font-weight: 500; }

        .nb-category-btn {
          display: flex; align-items: center; gap: 4px;
          background: transparent; border: none; cursor: pointer;
          color: ${Za}; font-size: 12.5px; font-weight: 600;
          font-family: 'Montserrat','Segoe UI',sans-serif;
          padding: 0; white-space: nowrap; flex-shrink: 0;
          transition: color 200ms ease;
        }
        .nb-category-btn:hover { color: ${so}; }

        .nb-sep { width: 1px; height: 18px; background: ${lo}; flex-shrink: 0; }

        .nb-online {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600;
          color: ${ls};
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
          box-shadow: 0 0 0 1px ${so}, 0 2px 6px rgba(8,127,140,0.18);
          transition: box-shadow 200ms ease;
        }
        .nb-avatar:hover {
          box-shadow: 0 0 0 1px ${so}, 0 4px 12px rgba(8,127,140,0.28);
        }

        .nb-dropdown {
          position: absolute; top: calc(100% + 10px); right: 0;
          background: ${ar};
          border: 1px solid ${lo};
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
          border-bottom: 1px solid ${lo};
          border-top: 2px solid ${so};
          background: ${Hu};
        }
        .nb-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 16px;
          font-size: 13px; font-weight: 500;
          color: ${ls};
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease;
          font-family: 'Montserrat','Segoe UI',sans-serif;
        }
        .nb-dropdown-item:hover { background: ${Hu}; color: ${Za}; }
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
      `}),a.jsxs("div",{className:"nb-wrap",children:[d&&a.jsxs("div",{className:"nb-brand-block",style:{marginRight:8},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:10,flexShrink:0,background:ar,overflow:"hidden",border:`1px solid ${so}`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 6px rgba(8,127,140,0.10)"},children:a.jsx("img",{src:_n,alt:"जन संवाद",style:{width:"100%",height:"100%",objectFit:"cover"},onError:v=>{v.target.style.display="none",v.target.parentNode.innerHTML='<span style="font-size:22px">⚖️</span>'}})}),a.jsxs("div",{style:{lineHeight:1.25},children:[a.jsx("div",{style:{fontSize:14,fontWeight:700,color:Za,fontFamily:"'Noto Sans Devanagari','Montserrat',sans-serif",letterSpacing:.1,whiteSpace:"nowrap"},children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{style:{fontSize:19,fontWeight:700,color:A4,fontFamily:"'Noto Sans Devanagari','Montserrat',sans-serif",letterSpacing:.2,lineHeight:1.15,whiteSpace:"nowrap"},children:"जन संवाद"}),a.jsx("div",{style:{fontSize:9,fontWeight:600,color:ss,letterSpacing:1.4,textTransform:"uppercase",marginTop:1,whiteSpace:"nowrap"},children:"ADMIN PANEL · VVCMC"})]}),a.jsx("div",{className:"nb-sep",style:{margin:"0 8px 0 14px",height:32}})]}),a.jsxs("div",{className:"nb-search-box",children:[a.jsx(b4,{size:15,color:Za,style:{flexShrink:0}}),a.jsx("div",{className:"nb-sep"}),a.jsxs("button",{className:"nb-category-btn",children:["All Category ",a.jsx(g4,{size:12})]}),a.jsx("div",{className:"nb-sep"}),a.jsx("input",{className:"nb-search-input",placeholder:"Search here…"})]}),a.jsx("div",{style:{flex:1}}),a.jsx("div",{className:"nb-sep"}),a.jsx(Bs,{variant:"light"}),a.jsx("div",{className:"nb-sep"}),a.jsxs("div",{className:"nb-avatar-wrap",ref:m,children:[a.jsx("div",{onClick:()=>f(v=>!v),children:a.jsx(E4,{name:n?.fullName||n?.userName||"Admin User"})}),p&&a.jsxs("div",{className:"nb-dropdown",children:[a.jsxs("div",{className:"nb-dropdown-user",children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:ls},children:n?.fullName||n?.userName||"Admin User"}),a.jsx("div",{style:{fontSize:11,color:ss,fontWeight:500,marginTop:2},children:n?.role||"Admin"}),n?.departmentName&&a.jsxs("div",{style:{fontSize:11,color:ss,fontWeight:500,marginTop:1},children:["Dept: ",a.jsx("span",{style:{color:Za,fontWeight:600},children:n.departmentName})]})]}),a.jsxs("div",{className:"nb-dropdown-item",children:[a.jsx(f4,{size:14,color:Za}),"Notifications"]}),a.jsxs("div",{className:"nb-dropdown-item",children:[a.jsx(x4,{size:14,color:Za}),"Help"]}),a.jsxs("div",{className:"nb-dropdown-item danger",onClick:y,children:[a.jsx(gp,{size:14}),"Logout"]})]})]})]})]})},Q0="#187484",D4="#0d4f5c",ia="#CE9A54",Qi=["Super Admin","Guardian Minister","Mayor","Admin"];function M4(){const n=zo(),o=vt(),{user:l}=Ps(C=>C.auth),{mode:s,setMode:d}=Xb(),[p,f]=b.useState(window.innerWidth<768);if(b.useEffect(()=>{const C=()=>f(window.innerWidth<768);return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]),!l)return null;const x=()=>{n(sb()),o("/login")},h=()=>d("open"),m=()=>d("collapsed"),y=s==="open",v=!y;return a.jsxs(a.Fragment,{children:[p&&y&&a.jsx("div",{onClick:m,style:{position:"fixed",inset:0,zIndex:90}}),a.jsxs("aside",{style:{width:y?230:64,minHeight:"100vh",background:`linear-gradient(175deg, ${Q0} 0%, ${D4} 100%)`,display:"flex",flexDirection:"column",transition:"width 0.3s ease",overflow:"visible",boxShadow:"4px 0 24px rgba(13,79,92,0.35)",position:p?"fixed":"relative",top:0,left:0,zIndex:p?100:"auto",height:p?"100vh":"auto",flexShrink:0,fontFamily:"'Montserrat','Noto Sans Devanagari','Segoe UI',sans-serif"},children:[a.jsx("div",{style:{position:"absolute",top:-40,right:-40,width:130,height:130,borderRadius:"50%",background:"rgba(255,255,255,0.06)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:120,left:-30,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:-20,right:-20,width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.05)",pointerEvents:"none"}}),a.jsx("style",{children:`
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
            border-left: 3px solid ${ia};
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
            border-left: 3px solid ${ia};
            box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.14);
          }

          .sb-pill-btn {
            position: absolute; top: 50%; right: -14px;
            transform: translateY(-50%);
            width: 28px; height: 28px; border-radius: 50%;
            background: ${Q0};
            border: 2px solid rgba(255,255,255,0.3);
            box-shadow: 0 2px 10px rgba(13,79,92,0.5);
            color: #fff; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: background 0.2s; z-index: 60;
          }
          .sb-pill-btn:hover { background: ${ia}; border-color: ${ia}; }
        `}),y&&a.jsx("button",{className:"sb-pill-btn",onClick:m,title:"Collapse sidebar",children:a.jsx(m4,{size:14})}),v&&a.jsx("button",{className:"sb-pill-btn",onClick:h,title:"Expand sidebar",children:a.jsx(h4,{size:14})}),y?a.jsxs("div",{style:{padding:"24px 18px 18px",paddingTop:p?"46px":"24px",display:"flex",flexDirection:"column",alignItems:"center",gap:6,overflow:"hidden"},children:[a.jsxs("div",{style:{color:`${ia}dd`,fontSize:15,fontWeight:700,fontFamily:"'Montserrat','Noto Sans Devanagari',sans-serif",whiteSpace:"nowrap",letterSpacing:.1,lineHeight:1.3,textAlign:"center"},children:["वसई-विरार शहर",a.jsx("br",{}),"महानगरपालिका"]}),a.jsx("div",{style:{color:"#fff",fontSize:21,fontWeight:800,fontFamily:"'Montserrat','Noto Sans Devanagari',sans-serif",whiteSpace:"nowrap",letterSpacing:.3,lineHeight:1,textShadow:`0 2px 10px ${ia}55`,textAlign:"center"},children:"जन संवाद"}),a.jsx("div",{style:{width:140,height:140,borderRadius:"5%",background:`linear-gradient(135deg,${ia},#b8832e)`,boxShadow:`0 4px 14px ${ia}88`,overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("img",{src:_n,alt:"VVCMC",style:{width:"100%",height:"100%",objectFit:"cover"},onError:C=>{C.target.style.display="none",C.target.parentNode.innerHTML='<span style="font-size:24px">⚖️</span>'}})})]}):a.jsx("div",{style:{width:"100%",padding:"20px 0",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("div",{style:{width:40,height:40,borderRadius:10,background:`linear-gradient(135deg,${ia},#b8832e)`,boxShadow:`0 4px 14px ${ia}77`,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("img",{src:_n,alt:"जन संवाद",style:{width:"100%",height:"100%",objectFit:"cover"},onError:C=>{C.target.style.display="none",C.target.parentNode.innerHTML='<span style="font-size:18px">⚖️</span>'}})})}),a.jsx("div",{style:{margin:"0 16px 10px",borderTop:"1px solid rgba(255,255,255,0.1)"}}),a.jsx("nav",{style:{flex:1,display:"flex",flexDirection:"column",gap:2,paddingTop:4,overflowY:"auto",overflowX:"hidden"},children:y?a.jsxs(a.Fragment,{children:[a.jsxs(Yt,{to:"/dashboard",title:"Dashboard",className:({isActive:C})=>`sb-link${C?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(F0,{size:18})}),a.jsx("span",{className:"sb-label",children:"Dashboard"})]}),a.jsxs(Yt,{to:"/meetings",title:"Meetings",className:({isActive:C})=>`sb-link${C?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(Lu,{size:18})}),a.jsx("span",{className:"sb-label",children:"Meetings"})]}),Qi.includes(l?.role)&&a.jsxs(Yt,{to:"/availability",title:"Availability",className:({isActive:C})=>`sb-link${C?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(Lu,{size:18})}),a.jsx("span",{className:"sb-label",children:"Availability"})]}),a.jsxs(Yt,{to:"/allapplication",title:"Applications",className:({isActive:C})=>`sb-link${C?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(rs,{size:18})}),a.jsx("span",{className:"sb-label",children:"Applications"})]}),Qi.includes(l?.role)&&a.jsxs(Yt,{to:"/allapplicationcitizens",title:"Appointment Applications",className:({isActive:C})=>`sb-link${C?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(rs,{size:18})}),a.jsx("span",{className:"sb-label",children:"Appointment Applications"})]}),Qi.includes(l?.role)&&a.jsxs(Yt,{to:"/users",title:"Users",className:({isActive:C})=>`sb-link${C?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(P0,{size:18})}),a.jsx("span",{className:"sb-label",children:"Users"})]}),Qi.includes(l?.role)&&a.jsxs(Yt,{to:"/corporators",title:"Corporators",className:({isActive:C})=>`sb-link${C?" active":""}`,children:[a.jsx("span",{className:"sb-icon",children:a.jsx(H0,{size:18})}),a.jsx("span",{className:"sb-label",children:"Corporators"})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Yt,{to:"/dashboard",className:({isActive:C})=>`sb-link-collapsed${C?" active":""}`,children:a.jsx(F0,{size:18})}),a.jsx(Yt,{to:"/availability",className:({isActive:C})=>`sb-link-collapsed${C?" active":""}`,children:a.jsx(Lu,{size:18})}),a.jsx(Yt,{to:"/allapplication",className:({isActive:C})=>`sb-link-collapsed${C?" active":""}`,children:a.jsx(rs,{size:18})}),a.jsx(Yt,{to:"/allapplicationcitizens",className:({isActive:C})=>`sb-link-collapsed${C?" active":""}`,children:a.jsx(rs,{size:18})}),Qi.includes(l?.role)&&a.jsx(Yt,{to:"/users",className:({isActive:C})=>`sb-link-collapsed${C?" active":""}`,children:a.jsx(P0,{size:18})}),Qi.includes(l?.role)&&a.jsx(Yt,{to:"/corporators",className:({isActive:C})=>`sb-link-collapsed${C?" active":""}`,children:a.jsx(H0,{size:18})})]})}),a.jsxs("div",{style:{marginTop:"auto"},children:[a.jsx("div",{style:{margin:"6px 16px",borderTop:"1px solid rgba(255,255,255,0.1)"}}),a.jsx("div",{style:{padding:y?"10px 16px 20px":"10px 0 20px"},children:y?a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",flexShrink:0,background:`linear-gradient(135deg,${ia},#b8832e)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:900,boxShadow:`0 3px 10px ${ia}66`,fontFamily:"'Montserrat',sans-serif"},children:(l?.fullName||l?.userName||"A")[0].toUpperCase()}),a.jsxs("div",{style:{overflow:"hidden"},children:[a.jsx("div",{style:{color:"#fff",fontSize:14,fontWeight:700,lineHeight:1.2,fontFamily:"'Montserrat',sans-serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:130},children:l?.fullName||l?.userName||"Admin User"}),a.jsx("div",{style:{color:"#B8D5DB",fontSize:11,fontWeight:500,fontFamily:"'Montserrat',sans-serif"},children:l?.role})]})]}),l?.departmentName&&a.jsxs("div",{style:{fontSize:10.5,color:"rgba(255,255,255,0.45)",fontWeight:600,marginBottom:10,paddingLeft:2},children:["Dept: ",a.jsx("span",{style:{color:"rgba(255,255,255,0.75)",fontWeight:700},children:l.departmentName})]}),p&&a.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10},children:a.jsx(Bs,{variant:"dark"})}),a.jsxs("button",{onClick:x,style:{width:"100%",background:"rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.85)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"8px",fontSize:12,fontWeight:600,cursor:"pointer",letterSpacing:.8,textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",gap:7,transition:"all 200ms ease",fontFamily:"'Montserrat',sans-serif"},onMouseEnter:C=>{C.currentTarget.style.background="rgba(220,50,50,0.3)",C.currentTarget.style.borderColor="rgba(220,50,50,0.4)"},onMouseLeave:C=>{C.currentTarget.style.background="rgba(255,255,255,0.1)",C.currentTarget.style.borderColor="rgba(255,255,255,0.2)"},children:[a.jsx(gp,{size:13})," Logout"]})]}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:`linear-gradient(135deg,${ia},#b8832e)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:900},children:(l?.fullName||l?.userName||"A")[0].toUpperCase()}),a.jsx("button",{onClick:x,style:{background:"transparent",border:"none",cursor:"pointer",color:"rgba(255,255,255,0.5)",padding:6,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 200ms ease"},onMouseEnter:C=>C.currentTarget.style.color="#fff",onMouseLeave:C=>C.currentTarget.style.color="rgba(255,255,255,0.5)",children:a.jsx(gp,{size:17})})]})})]})]})]})}function O4(){return a.jsx(y4,{children:a.jsxs("div",{style:{display:"flex",minHeight:"100vh",position:"relative"},children:[a.jsx("div",{style:{position:"sticky",top:0,height:"100vh",zIndex:50,flexShrink:0},children:a.jsx(M4,{})}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[a.jsx("div",{style:{position:"sticky",top:0,zIndex:40},className:"hidden md:block",children:a.jsx(R4,{})}),a.jsx("div",{style:{flex:1,overflowY:"auto",background:"#f3f4f6"},children:a.jsx(_2,{})})]})]})})}const Z0={"Guardian Minister Office":"Guardian Minister","Collector Office":"Collector","Zilla Parishad Office":"CEO","Mahanagarpalika Office":"Municipal Commissioner","Nagar Palika Office":"Chief Officer","Grampanchayat Office":"Sarpanch"},K0={"Guardian Minister Office":{},"Collector Office":{Administrative:"Deputy Collector","Health & Social Welfare":"Deputy Collector","Rural & Development":"Deputy Collector","Infrastructure & Utilities":"Deputy Collector","Supply & Control":"Deputy Collector","Governance & Law":"Deputy Collector",Education:"Deputy Collector","Finance & Audit":"Deputy Collector"},"Zilla Parishad Office":{"Rural Development":"Deputy CEO",Education:"Deputy CEO",Health:"Deputy CEO","Agriculture & Allied Services":"Deputy CEO","Water & Sanitation":"Deputy CEO","Social Welfare":"Deputy CEO","Engineering & Works":"Deputy CEO","Finance & Accounts":"Deputy CEO","Planning & Statistics":"Deputy CEO","Supply & Food":"Deputy CEO"},"Mahanagarpalika Office":{"Revenue & Tax":"Additional Commissioner","Health & Sanitation":"Additional Commissioner","Water & Sewerage":"Additional Commissioner","Engineering & Works":"Additional Commissioner",Administration:"Additional Commissioner","Accounts & Finance":"Additional Commissioner"},"Nagar Palika Office":{"Revenue & Tax":"Deputy Chief Officer","Health & Sanitation":"Deputy Chief Officer","Water & Sewerage":"Deputy Chief Officer","Engineering & Works":"Deputy Chief Officer",Administration:"Deputy Chief Officer","Accounts & Finance":"Deputy Chief Officer"},"Grampanchayat Office":{Administration:"Gram Sevak","Water & Sanitation":"Gram Sevak","Village Development":"Gram Sevak","Health & Welfare":"Gram Sevak","Agriculture & Allied":"Gram Sevak","Finance & Accounts":"Gram Sevak"}},_4={"Guardian Minister Office":[],"Collector Office":["Administrative","Health & Social Welfare","Rural & Development","Infrastructure & Utilities","Supply & Control","Governance & Law","Education","Finance & Audit"],"Zilla Parishad Office":["Rural Development","Education","Health","Agriculture & Allied Services","Water & Sanitation","Social Welfare","Engineering & Works","Finance & Accounts","Planning & Statistics","Supply & Food"],"Mahanagarpalika Office":["Revenue & Tax","Health & Sanitation","Water & Sewerage","Engineering & Works","Administration","Accounts & Finance"],"Nagar Palika Office":["Revenue & Tax","Health & Sanitation","Water & Sewerage","Engineering & Works","Administration","Accounts & Finance"],"Grampanchayat Office":["Administration","Water & Sanitation","Village Development","Health & Welfare","Agriculture & Allied","Finance & Accounts"]},cs=({label:n,name:o,value:l,onChange:s,type:d="text"})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:n}),a.jsx("input",{type:d,name:o,value:l,onChange:s,className:"w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"})]}),ex=({label:n,name:o,value:l,onChange:s})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:n}),a.jsx("textarea",{name:o,value:l,onChange:s,rows:"3",className:"w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"})]}),$u=({label:n,name:o,value:l,onChange:s,options:d,disabled:p=!1})=>a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-1",children:n}),a.jsxs("select",{name:o,value:l,onChange:s,disabled:p,className:`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${p?"bg-gray-100 cursor-not-allowed":""}`,children:[a.jsxs("option",{value:"",children:["Select ",n]}),d.map((f,x)=>a.jsx("option",{value:f,children:f},x))]})]}),tx=({title:n})=>a.jsx("div",{className:"mb-4 mt-6 first:mt-0",children:a.jsx("h3",{className:"text-sm font-semibold text-blue-700 uppercase tracking-wider border-b border-blue-100 pb-2",children:n})});function Pu(n){const o=new Date().toISOString().split("T")[0];return{inwardNo:(()=>{const s=new Date;return`JD/${s.getFullYear()}/${String(s.getMonth()+1).padStart(2,"0")}/${String(s.getDate()).padStart(2,"0")}/${Math.floor(100+Math.random()*900)}`})(),submissionDate:o,fullName:n?.fullName||"",mobile:n?.mobile||"",email:n?.email||"",address:n?.address||"",pincode:n?.pincode||"",wardNo:n?.wardNo||"",ward:n?.ward||n?.wardNo||"",existingPhotoUrl:n?.visitorPhoto||"",category:"",identityType:"",identityNumber:"",taluka:"",district:"",subject:"",description:"",office:"Mahanagarpalika Office",mainDepartment:"",subDepartment:"",priority:"Normal",tagTo:[],followUp:"Yes",documents:null,status:"Pending",visitorPhoto:null,photoPreview:null}}function e1({onClose:n,prefillData:o}){const l=vt(),s=n||(()=>l(-1)),[d,p]=b.useState(!1),[f,x]=b.useState(""),h=b.useRef(null),m=b.useRef(null),y=b.useRef(null),v=b.useRef(null),C=b.useRef(null),A=b.useRef(null),[k,z]=b.useState(!1),[D,R]=b.useState(""),[w,O]=b.useState(()=>Pu(o));b.useEffect(()=>{o&&O(Pu(o))},[]);const[Y,J]=b.useState([]),[E,F]=b.useState([]);b.useEffect(()=>{(async()=>{try{const j=await Ue.get("/getUsers");if(console.log("res>>>>>>>>",j.data),j.data.success){const T=j.data.users;F(T);const q=[...new Set(j.data.users.map(oe=>oe.departmentName).filter(Boolean))];J(q)}}catch(j){console.error("Department fetch error:",j)}})()},[]);const V=["Ward-A","Ward-B","Ward-C","Ward-D","Ward-E","Ward-F","Ward-G","Ward-H","Ward-I","General"],de=B=>{const{name:j,value:T}=B.target;O({...w,[j]:T})},he=B=>{const{value:j,checked:T}=B.target;if(T){const q=Z0[w.office],oe=K0[w.office]?.[w.mainDepartment],P=j===oe&&q&&q!==j?[q]:[],ge=[...new Set([...w.tagTo,...P,j])];O({...w,tagTo:ge})}else O({...w,tagTo:w.tagTo.filter(q=>q!==j)})},G=async()=>{x("");try{const B=await navigator.mediaDevices.getUserMedia({video:!0});y.current=B,p(!0),setTimeout(()=>{h.current&&(h.current.srcObject=B,h.current.play())},100)}catch{x("Camera access denied. Please allow camera permission.")}},pe=()=>{const B=h.current,j=m.current;!B||!j||(j.width=B.videoWidth,j.height=B.videoHeight,j.getContext("2d").drawImage(B,0,0),j.toBlob(T=>{const q=new File([T],`captured-photo-${Date.now()}.jpg`,{type:"image/jpeg"});O({...w,documents:q}),$()},"image/jpeg"))},$=()=>{y.current&&(y.current.getTracks().forEach(B=>B.stop()),y.current=null),p(!1)},me=async()=>{R("");try{const B=await navigator.mediaDevices.getUserMedia({video:!0});A.current=B,z(!0),setTimeout(()=>{v.current&&(v.current.srcObject=B,v.current.play())},100)}catch{R("Camera access denied. Please allow camera permission.")}},we=()=>{const B=v.current,j=C.current;!B||!j||(j.width=B.videoWidth,j.height=B.videoHeight,j.getContext("2d").drawImage(B,0,0),j.toBlob(T=>{const q=new File([T],`visitor-photo-${Date.now()}.jpg`,{type:"image/jpeg"}),oe=URL.createObjectURL(T);O(P=>({...P,visitorPhoto:q,photoPreview:oe})),W()},"image/jpeg"))},W=()=>{A.current&&(A.current.getTracks().forEach(B=>B.stop()),A.current=null),z(!1)},ie=(B,j)=>{const T="https://jansamvad.saavi.co.in";B.forEach(q=>{const oe=E.filter(P=>P.departmentName===q&&P.mobileNumber);oe.length!==0&&oe.forEach(P=>{const ge=P.mobileNumber.replace(/\D/g,"");if(ge.length<10)return;const be=`******${ge.slice(-4)}`;Ue.post("/sendWhatsApp",{mobile:ge,userName:P.userName||"Officer",tokenNo:j,deptName:q,portalLink:T,displayMobile:be}).then(ke=>console.log(`✅ WhatsApp sent to ${P.fullName}`,ke.data)).catch(ke=>console.error(`❌ Error for ${P.fullName}`,ke))})})},fe=(B,j)=>{const T="https://jansamvad.saavi.co.in";B.forEach(q=>{const oe=E.filter(P=>P.departmentName===q&&P.mobileNumber);if(oe.length===0){console.warn(`No users found for department: ${q}`);return}oe.forEach(P=>{const ge=P.mobileNumber.replace(/\D/g,""),be=P.userName;if(ge.length<10){console.warn(`Invalid mobile: ${P.fullName}`);return}const ke=`******${ge.slice(-4)}`,Ce=`Hello ${be}, A new complaint has been assigned to you. Token No: ${j} Department: ${q} Please login to the portal using OTP Login: ${T} Your OTP will be sent to your registered mobile number ${ke}. Note: Do not Register. Use OTP Login only. SAAVI INFINET`,et=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379323&number=${ge}&message=${encodeURIComponent(Ce)}`;fetch(et,{method:"GET",mode:"no-cors"}).then(()=>console.log(`✅ SMS sent to ${P.fullName} (${ke})`)).catch(tt=>console.error(`❌ SMS error for ${P.fullName}:`,tt))})})},K=async B=>{B.preventDefault();try{if(!w.fullName||!w.mobile||!w.subject){ye.error("Required fields missing: Full Name, Mobile, and Subject are required");return}if(!w.documents){ye.error("Document file is required. Please upload a file before submitting.");return}const j=localStorage.getItem("authUser"),T=j?JSON.parse(j):null,q=new FormData;Object.keys(w).forEach(be=>{be==="documents"||be==="visitorPhoto"||be==="photoPreview"||(Array.isArray(w[be])?q.append(be,JSON.stringify(w[be])):w[be]!==null&&w[be]!==void 0&&q.append(be,w[be]))}),w.documents&&q.append("documents",w.documents),w.visitorPhoto&&typeof w.visitorPhoto!="string"&&q.append("visitorPhoto",w.visitorPhoto),T&&(q.append("submittedById",T.id||""),q.append("submittedByName",T.fullName||""),q.append("submittedByRole",T.role||""),q.append("submittedByUserName",T.userName||""),q.append("submittedByDept",T.departmentName||"")),o?._tokenId&&q.append("existingTokenNo",o._tokenId);const P=(await Ue.post("/inwardAdd",q,{headers:{"Content-Type":"multipart/form-data"}})).data;if(!P.success){ye.error(P.message||"Something went wrong");return}const ge=o?._tokenId||P.tokenNo;ye.success(`✅ Application submitted successfully!
Token Number: ${ge}`),n&&n(),w.tagTo.length>0&&(fe(w.tagTo,ge),ie(w.tagTo,ge)),O(Pu(null))}catch(j){alert(j?.response?.data?.message||"Server Error")}};return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",children:a.jsxs("div",{className:"bg-white shadow-2xl rounded-xl w-full max-w-3xl max-h-[95vh] flex flex-col",children:[a.jsxs("div",{className:"px-8 py-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold text-gray-800",children:"Application Form"}),o&&a.jsxs("p",{className:"text-xs text-blue-600 font-semibold mt-0.5",children:["✅ Pre-filled from token: ",a.jsx("span",{className:"font-bold",children:o._tokenId})]})]}),a.jsx("button",{onClick:s,className:"w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors text-sm",children:"✕"})]}),a.jsx("div",{className:"px-8 py-6 overflow-y-auto flex-1",children:a.jsxs("form",{onSubmit:K,children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6",children:[a.jsx(cs,{label:"Mobile",name:"mobile",value:w.mobile,onChange:de}),a.jsx(cs,{label:"Full Name",name:"fullName",value:w.fullName,onChange:de}),a.jsx(cs,{label:"Email",name:"email",value:w.email,onChange:de}),a.jsx($u,{label:"Category",name:"category",value:w.category,onChange:de,options:["Company","NGO","Individual","Other"]})]}),a.jsx(ex,{label:"Address",name:"address",value:w.address,onChange:de}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6",children:a.jsx($u,{label:"Ward",name:"ward",value:w.ward,onChange:de,options:V})}),a.jsx(cs,{label:"Complaint Subject",name:"subject",value:w.subject,onChange:de}),a.jsx(ex,{label:"Complaint Description",name:"description",value:w.description,onChange:de}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-2",children:"Assign to Department"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50",children:Y.map((B,j)=>a.jsxs("label",{className:"flex items-center gap-2 bg-white p-2 rounded-lg border cursor-pointer hover:bg-blue-50 text-sm",children:[a.jsx("input",{type:"checkbox",value:B,checked:w.tagTo.includes(B),onChange:he,className:"accent-blue-600 w-4 h-4"}),a.jsx("span",{children:B})]},j))})]}),(w.mainDepartment||(_4[w.office]||[]).length===0)&&a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium mb-2",children:"Tag To (Authority)"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[Z0[w.office],K0[w.office]?.[w.mainDepartment]].filter(Boolean).filter((B,j,T)=>T.indexOf(B)===j).map((B,j)=>a.jsxs("label",{className:"flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border cursor-pointer hover:bg-blue-50",children:[a.jsx("input",{type:"checkbox",value:B,checked:w.tagTo.includes(B),onChange:he,className:"accent-blue-600 w-4 h-4"}),a.jsx("span",{className:"text-sm",children:B})]},j))})]}),a.jsx($u,{label:"Priority",name:"priority",value:w.priority,onChange:de,options:["Low","Medium","High"]}),a.jsx(tx,{title:"Visitor Photo"}),w.existingPhotoUrl&&!w.photoPreview&&a.jsxs("div",{className:"mb-4 p-4 border-2 border-green-300 rounded-lg bg-green-50 text-center",children:[a.jsx("p",{className:"text-xs font-semibold text-green-700 uppercase tracking-widest mb-2",children:"✅ Token वरून Photo मिळाला"}),a.jsx("img",{src:w.existingPhotoUrl.startsWith("http")?w.existingPhotoUrl:`${Ue.defaults.baseURL?.replace("/api","")||""}/${w.existingPhotoUrl.replace(/\\/g,"/")}`,alt:"existing visitor",className:"w-24 h-24 rounded-full object-cover border-4 border-green-400 mx-auto mb-2 shadow-md",onError:B=>{B.target.style.display="none"}}),a.jsx("p",{className:"text-green-700 text-sm font-semibold",children:"Citizen चा photo"}),a.jsx("p",{className:"text-gray-400 text-xs mt-1",children:"बदलायचा असेल तरच खाली Upload/Camera वापरा"})]}),a.jsxs("div",{className:"flex gap-3 mb-4",children:[a.jsxs("label",{className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition",children:["📁 ",w.existingPhotoUrl?"Photo बदला":"Upload Photo",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:B=>{const j=B.target.files[0];j&&O(T=>({...T,visitorPhoto:j,photoPreview:URL.createObjectURL(j)}))}})]}),a.jsx("button",{type:"button",onClick:me,className:"flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-700 bg-white text-sm font-semibold rounded-lg hover:bg-blue-50 transition",children:"📷 Use Camera"})]}),k?a.jsxs("div",{className:"mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black",children:[a.jsx("button",{type:"button",onClick:W,className:"absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg",children:"✕"}),a.jsx("video",{ref:v,autoPlay:!0,playsInline:!0,className:"w-full",style:{maxHeight:"300px",objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:C,className:"hidden"}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center",children:a.jsx("button",{type:"button",onClick:we,className:"px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg",children:"📸 Capture Photo"})})]}):w.photoPreview?a.jsxs("div",{className:"mb-4 p-4 border-2 border-blue-300 rounded-lg bg-blue-50 text-center",children:[a.jsx("img",{src:w.photoPreview,alt:"new visitor",className:"w-24 h-24 rounded-full object-cover border-4 border-blue-400 mx-auto mb-2 shadow-md"}),a.jsx("p",{className:"text-blue-700 text-sm font-semibold",children:"✅ नवीन Photo निवडला"}),a.jsx("p",{className:"text-gray-400 text-xs mt-1",children:w.existingPhotoUrl?"हा जुन्या photo ऐवजी वापरला जाईल":'Click "Photo बदला" to change'})]}):w.existingPhotoUrl?null:a.jsxs("div",{className:"mb-4 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 text-center",children:[a.jsx("div",{className:"text-4xl mb-2 text-blue-300",children:"📷"}),a.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"Upload करा किंवा camera वापरा"})]}),D&&a.jsx("p",{className:"text-red-600 text-xs mb-2",children:D}),a.jsx(tx,{title:"Documents"}),d?a.jsxs("div",{className:"mb-4 relative border-2 border-blue-500 rounded-lg overflow-hidden bg-black",children:[a.jsx("button",{type:"button",onClick:$,className:"absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-sm shadow-lg",children:"✕"}),a.jsx("video",{ref:h,autoPlay:!0,playsInline:!0,className:"w-full",style:{maxHeight:"360px",objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:m,className:"hidden"}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-center",children:a.jsx("button",{type:"button",onClick:pe,className:"px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-lg",children:"📸 Capture Photo"})})]}):a.jsx("div",{className:"mb-4 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-blue-50",children:a.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-3",children:[a.jsx("input",{type:"file",onChange:B=>O(j=>({...j,documents:B.target.files[0]})),className:"flex-1 text-sm"}),a.jsx("button",{type:"button",onClick:G,className:"flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 whitespace-nowrap",children:"📷 Camera"})]})}),f&&a.jsx("p",{className:"text-red-600 text-xs mb-2",children:f}),w.documents?a.jsxs("div",{className:"bg-green-50 border border-green-300 rounded-lg p-3 mb-4",children:[a.jsxs("p",{className:"text-green-800 text-sm font-medium",children:["✅ File Selected: ",w.documents.name]}),a.jsxs("p",{className:"text-green-700 text-xs",children:["Size: ",(w.documents.size/1024).toFixed(2)," KB"]})]}):a.jsx("div",{className:"bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4",children:a.jsx("p",{className:"text-yellow-800 text-sm",children:"Please upload a file to proceed with submission"})}),a.jsx("div",{className:"pt-2 pb-2",children:a.jsx("button",{type:"submit",disabled:!w.documents,className:`w-full py-3 rounded-lg text-white font-semibold text-sm transition ${w.documents?"bg-green-600 hover:bg-green-700 cursor-pointer":"bg-gray-300 cursor-not-allowed opacity-60"}`,children:w.documents?"✔ Submit Application":"Upload Document to Submit"})})]})})]})})}const H={bg:"#f0f4f0",white:"#fff",dark:"#1a4a2e",green:"#1a7a4a",greenLight:"#e8f5ee",greenBadge:"#d4edda",greenBorder:"#c8e0cc",muted:"#5a7a6a",rowHover:"#f8fdf8",rowBorder:"#eef4ee",red:"#c0392b",redLight:"#fdecea"},ax={Pending:{bg:"#fff8e1",color:"#b26a00",border:"#ffe082",dot:"#f59e0b",label:"Pending"},Resolved:{bg:H.greenLight,color:H.green,border:"#a8d5b5",dot:"#22c55e",label:"Resolved"},Rejected:{bg:H.redLight,color:H.red,border:"#f5c6cb",dot:H.red,label:"Rejected"},"In Progress":{bg:"#e8f0fe",color:"#1a4a8a",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"}};function rc(n){return ax[n]||ax.Pending}const Ls={Normal:{color:H.muted,bg:"#f0f4f0",border:H.greenBorder},Urgent:{color:"#b26a00",bg:"#fff8e1",border:"#ffe082"},Emergency:{color:H.red,bg:H.redLight,border:"#f5c6cb"},High:{color:H.red,bg:H.redLight,border:"#f5c6cb"}},nx=["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];function t1(n){let o=0;for(let l=0;l<(n||"").length;l++)o=n.charCodeAt(l)+((o<<5)-o);return nx[Math.abs(o)%nx.length]}function a1(n){return n?n.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2):"?"}function Hp(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"}function n1({status:n}){const o=rc(n);return a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:700,background:o.bg,color:o.color,border:`1px solid ${o.border}`,whiteSpace:"nowrap"},children:[a.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:o.dot,display:"inline-block"}}),o.label]})}function i1({priority:n}){const o=Ls[n]||Ls.Normal;return a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 9px",borderRadius:8,fontSize:11,fontWeight:700,background:o.bg,color:o.color,border:`1px solid ${o.border}`},children:[n==="Urgent"||n==="Emergency"||n==="High"?"🔴":"⚪"," ",n]})}function B4({app:n,onReply:o,onView:l}){rc(n.status);const s=t1(n.fullName);return a.jsxs("div",{style:{background:H.white,borderRadius:12,border:`1.5px solid ${H.greenBorder}`,padding:"14px 16px",marginBottom:10,boxShadow:"0 1px 6px rgba(0,0,0,0.06)"},onClick:()=>l(n),children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:s,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:14,flexShrink:0},children:a1(n.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:14,fontWeight:700,color:H.dark},children:n.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:12,color:H.muted},children:n.mobile||"—"})]})]}),a.jsx(n1,{status:n.status})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8,flexWrap:"wrap"},children:[a.jsx("span",{style:{background:H.greenLight,color:H.green,borderRadius:6,padding:"2px 9px",fontSize:11,fontWeight:700,fontFamily:"monospace"},children:n.tokenNo||"—"}),n.status!=="Resolved"&&n.priority&&a.jsx(i1,{priority:n.priority})]}),n.subject&&a.jsx("p",{style:{margin:"0 0 8px",fontSize:13,color:H.dark,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.subject}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"3px 10px",fontSize:11,color:H.muted,marginBottom:12},children:[n.mainDepartment&&a.jsxs("span",{children:["🏢 ",n.mainDepartment]}),n.submissionDate&&a.jsxs("span",{children:["📅 ",Hp(n.submissionDate)]}),n.submittedByName&&a.jsxs("span",{children:["👤 ",n.submittedByName]})]}),a.jsxs("div",{style:{display:"flex",gap:8},onClick:d=>d.stopPropagation(),children:[a.jsx("button",{onClick:()=>o(n),style:{flex:1,background:H.greenLight,border:`1.5px solid ${H.green}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:H.green,fontSize:13,fontWeight:700},children:"📨 Reply"}),a.jsx("button",{onClick:()=>l(n),style:{flex:1,background:"#f8fdf8",border:`1.5px solid ${H.greenBorder}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:H.dark,fontSize:13,fontWeight:600},children:"👁 View"}),n.documents&&a.jsx("a",{href:n.documents,target:"_blank",rel:"noreferrer",style:{flex:1,background:H.greenLight,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,padding:"8px 0",cursor:"pointer",color:H.green,fontSize:13,fontWeight:600,textDecoration:"none",textAlign:"center"},children:"📄 Doc"})]})]})}function L4({onClose:n,onProceed:o}){const[l,s]=b.useState(null),[d,p]=b.useState(""),[f,x]=b.useState(!1),[h,m]=b.useState(""),[y,v]=b.useState(null),C=async()=>{if(!d.trim()){m("कृपया Token Number टाका.");return}x(!0),m(""),v(null);try{const k=await Ue.get(`/citizen/appointment/token/${d.trim()}`);k.data.success&&k.data.appointment?v(k.data.appointment):m("Token सापडले नाही ❌")}catch(k){m(k?.response?.data?.message||"Token fetch करताना error आला ❌")}finally{x(!1)}},A=()=>{if(l==="yes"){if(!y){m("आधी Token Fetch करा.");return}o(y)}else o(null)};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)",padding:16},children:a.jsxs("div",{style:{background:H.white,borderRadius:16,width:"100%",maxWidth:440,maxHeight:"92vh",overflowY:"auto",boxShadow:"0 8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:`2px solid ${H.greenBadge}`,background:H.greenLight,borderRadius:"16px 16px 0 0"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:H.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"New Application"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:18,fontWeight:700,color:H.dark},children:"Token आहे का?"})]}),a.jsx("button",{onClick:n,style:{background:H.white,border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18,color:H.dark},children:"✕"})]}),a.jsxs("div",{style:{padding:20},children:[a.jsx("p",{style:{margin:"0 0 14px",fontSize:13,fontWeight:600,color:H.muted},children:"Already have token? (Citizen ने आधी appointment घेतली आहे का?)"}),a.jsx("div",{style:{display:"flex",gap:10,marginBottom:16},children:[["yes","✅ Yes"],["no","❌ No"]].map(([k,z])=>a.jsx("button",{onClick:()=>{s(k),m(""),v(null),p("")},style:{flex:1,padding:"10px 0",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",border:`1.5px solid ${H.greenBorder}`,transition:"all .15s",background:l===k?k==="yes"?H.green:H.dark:H.white,color:l===k?"#fff":H.muted},children:z},k))}),l==="yes"&&a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:.4},children:"Token Number"}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("input",{type:"text",placeholder:"e.g. VVCMC-20260323-0008",value:d,onChange:k=>{p(k.target.value),m(""),v(null)},onKeyDown:k=>{k.key==="Enter"&&C()},style:{flex:1,padding:"9px 12px",fontSize:13,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,outline:"none",color:H.dark,background:"#f8fdf8",fontFamily:"'Segoe UI', sans-serif",minWidth:0}}),a.jsx("button",{onClick:C,disabled:f,style:{padding:"9px 14px",background:f?"#888":H.green,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:f?"not-allowed":"pointer",flexShrink:0},children:f?"...":"🔍 Fetch"})]}),h&&a.jsx("p",{style:{color:H.red,fontSize:12,marginTop:6,fontWeight:600},children:h}),y&&a.jsxs("div",{style:{marginTop:12,background:H.greenLight,border:`1.5px solid ${H.greenBorder}`,borderRadius:10,padding:"12px 14px"},children:[a.jsx("p",{style:{fontSize:11,fontWeight:700,color:H.green,textTransform:"uppercase",letterSpacing:1,marginBottom:8},children:"✅ Citizen सापडला"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px 14px",fontSize:12},children:[["Name",y.fullName],["Mobile",y.mobileNumber],["Token",y.tokenId],["Ward",y.ward],["Date",y.preferredDate],["Slot",y.microSlot||y.slotTime]].map(([k,z])=>a.jsxs("div",{children:[a.jsx("span",{style:{color:H.muted,fontSize:11},children:k}),a.jsx("p",{style:{margin:"2px 0 0",fontWeight:700,color:H.dark},children:z||"--"})]},k))})]})]}),l==="no"&&a.jsx("div",{style:{background:"#f8fdf8",border:`1.5px solid ${H.greenBorder}`,borderRadius:10,padding:"12px 14px",fontSize:13,color:H.muted,marginBottom:14},children:"📝 रिकामा form उघडेल. Citizen ची माहिती manually भरावी लागेल."}),l!==null&&a.jsxs("div",{style:{display:"flex",gap:10,marginTop:8},children:[a.jsx("button",{onClick:n,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"11px 0",fontWeight:600,cursor:"pointer",color:H.dark,fontSize:13},children:"Cancel"}),a.jsx("button",{onClick:A,disabled:l==="yes"&&!y,style:{flex:2,background:l==="yes"&&!y?"#888":H.green,color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:l==="yes"&&!y?"not-allowed":"pointer",fontSize:13},children:"➕ Open Form"})]})]})]})})}function U4({record:n,onClose:o,onSubmit:l}){const[s,d]=b.useState(""),[p,f]=b.useState(n.status||"Pending"),[x,h]=b.useState(n.priority||"Normal"),[m,y]=b.useState(!1),[v,C]=b.useState(null);if(!n)return null;const A=async()=>{if(!s.trim()){alert("कृपया reply message लिहा.");return}y(!0),await l({applicationId:n._id,replyMessage:s,status:p,priority:x,replyDocument:v}),y(!1)};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,0.45)"},onClick:o,children:a.jsxs("div",{style:{background:H.white,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:640,maxHeight:"95vh",overflowY:"auto",boxShadow:"0 -8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:k=>k.stopPropagation(),children:[a.jsx("div",{style:{width:40,height:4,borderRadius:2,background:H.greenBorder,margin:"10px auto 0"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:`2px solid ${H.greenBadge}`,background:H.greenLight},children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx("p",{style:{margin:0,fontSize:11,color:H.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Reply to Application"}),a.jsxs("h3",{style:{margin:"3px 0 0",fontSize:15,fontWeight:700,color:H.dark,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[n.tokenNo," — ",n.fullName]})]}),a.jsx("button",{onClick:o,style:{background:H.white,border:"none",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:16,color:H.dark,flexShrink:0,marginLeft:10},children:"✕"})]}),a.jsxs("div",{style:{padding:"16px 20px"},children:[a.jsx("div",{style:{border:`1.5px solid ${H.greenBorder}`,borderRadius:10,overflow:"hidden",marginBottom:16},children:[["Applicant",n.fullName],["Mobile",n.mobile],["Subject",n.subject],["Office",n.office],["Submitted By",n.submittedByName+(n.submittedByRole?` (${n.submittedByRole})`:"")],["Submitted On",n.submissionDate?new Date(n.submissionDate).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"--"]].filter(([,k])=>k).map(([k,z])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"7px 14px",borderBottom:`1px solid ${H.rowBorder}`,fontSize:13,gap:8},children:[a.jsx("span",{style:{color:H.muted,fontWeight:600,flexShrink:0,minWidth:100},children:k}),a.jsx("span",{style:{color:H.dark,fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:z})]},k))}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Status बदला"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["Pending","In Progress","Resolved","Rejected"].map(k=>{const z=rc(k),D=p===k;return a.jsxs("button",{onClick:()=>f(k),style:{padding:"6px 14px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",border:`1.5px solid ${D?z.border:H.greenBorder}`,background:D?z.bg:"#f8fdf8",color:D?z.color:H.muted,transition:"all .15s"},children:[a.jsx("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",background:D?z.dot:"#a8c8b0",marginRight:4,verticalAlign:"middle"}}),k]},k)})})]}),p!=="Resolved"&&a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Priority बदला"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:["Normal","High","Urgent","Emergency"].map(k=>{const z=Ls[k]||Ls.Normal,D=x===k;return a.jsxs("button",{onClick:()=>h(k),style:{padding:"6px 12px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",border:`1.5px solid ${D?z.border:H.greenBorder}`,background:D?z.bg:"#f8fdf8",color:D?z.color:H.muted,transition:"all .15s"},children:[k==="Normal"?"⚪":"🔴"," ",k]},k)})})]}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsxs("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:["Reply Message ",a.jsx("span",{style:{color:H.red},children:"*"})]}),a.jsx("textarea",{rows:4,placeholder:"Applicant ला reply message लिहा...",value:s,onChange:k=>d(k.target.value),style:{width:"100%",padding:"10px 14px",fontSize:13,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,outline:"none",fontFamily:"'Segoe UI', sans-serif",resize:"vertical",boxSizing:"border-box",color:H.dark,background:"#f8fdf8"},onFocus:k=>k.target.style.borderColor=H.green,onBlur:k=>k.target.style.borderColor=H.greenBorder}),a.jsxs("p",{style:{fontSize:11,color:H.muted,textAlign:"right",margin:"4px 0 0"},children:[s.length," characters"]})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsxs("label",{style:{fontSize:12,fontWeight:700,color:H.dark,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:["Reply Document ",a.jsx("span",{style:{color:H.muted,fontWeight:400,fontSize:11},children:"(Optional)"})]}),a.jsxs("div",{style:{border:`2px dashed ${H.greenBorder}`,borderRadius:10,padding:14,background:"#f8fdf8"},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:10,cursor:"pointer",flexWrap:"wrap"},children:[a.jsxs("span",{style:{padding:"7px 14px",background:H.green,color:"#fff",fontSize:12,fontWeight:700,borderRadius:8,whiteSpace:"nowrap"},children:["📎 Choose File",a.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.jpg,.jpeg,.png",style:{display:"none"},onChange:k=>C(k.target.files[0]||null)})]}),a.jsx("span",{style:{fontSize:13,color:H.muted,wordBreak:"break-all"},children:v?v.name:"PDF, DOC, or Image"})]}),v&&a.jsxs("div",{style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"space-between",background:H.white,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,padding:"8px 12px"},children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsxs("p",{style:{margin:0,fontSize:12,fontWeight:700,color:H.green,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["✅ ",v.name]}),a.jsxs("p",{style:{margin:0,fontSize:11,color:H.muted},children:[(v.size/1024).toFixed(1)," KB"]})]}),a.jsx("button",{onClick:()=>C(null),style:{background:"none",border:"none",cursor:"pointer",color:H.red,fontSize:18,fontWeight:700,flexShrink:0,marginLeft:8},children:"✕"})]})]})]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{onClick:o,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:H.dark,fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:A,disabled:m,style:{flex:2,background:m?"#888":H.green,color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:m?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:m?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:13,height:13,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"Sending…"]}):"📨 Send Reply"})]})]})]})})}function W4({record:n,onClose:o}){if(!n)return null;const l=({label:d,value:p})=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 14px",borderBottom:`1px solid ${H.rowBorder}`,fontSize:13,gap:8},children:[a.jsx("span",{style:{color:H.muted,fontWeight:600,flexShrink:0,minWidth:110},children:d}),a.jsx("span",{style:{color:H.dark,fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:p||"--"})]}),s=({title:d})=>a.jsx("div",{style:{padding:"8px 14px 6px",background:H.greenLight,borderBottom:`1px solid ${H.greenBorder}`},children:a.jsx("span",{style:{fontSize:11,fontWeight:700,color:H.green,textTransform:"uppercase",letterSpacing:1},children:d})});return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,0.45)"},onClick:o,children:a.jsxs("div",{style:{background:H.white,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:640,maxHeight:"95vh",overflowY:"auto",boxShadow:"0 -8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:d=>d.stopPropagation(),children:[a.jsx("div",{style:{width:40,height:4,borderRadius:2,background:H.greenBorder,margin:"10px auto 0"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:`2px solid ${H.greenBadge}`,background:H.greenLight},children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:H.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Application Detail"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:16,fontWeight:700,color:H.dark},children:n.tokenNo})]}),a.jsx("button",{onClick:o,style:{background:H.white,border:"none",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:16,color:H.dark},children:"✕"})]}),a.jsxs("div",{style:{padding:"0 0 20px"},children:[[["Citizen Details",[["Full Name",n.fullName],["Mobile",n.mobile],["Email",n.email],["Category",n.category],["Ward No",n.wardNo],["Address",n.address],["Pincode",n.pincode],["Taluka",n.taluka],["District",n.district]]],["Identity",[["Type",n.identityType],["Number",n.identityNumber]]],["Complaint",[["Subject",n.subject],["Description",n.description]]],["Office & Workflow",[["Office",n.office],["Main Department",n.mainDepartment],["Sub Department",n.subDepartment],...n.status!=="Resolved"?[["Priority",n.priority]]:[],["Tag To",Array.isArray(n.tagTo)?n.tagTo.join(", "):n.tagTo],["Follow Up",n.followUp],["Status",n.status],["Submitted On",Hp(n.submissionDate)],...n.status==="Resolved"?(()=>{const d=n.replies?.find(p=>p.status==="Resolved");return d?[["Resolved By",d.repliedByName],["Resolved Role",d.repliedByRole],["Resolved On",d.createdAt?new Date(d.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"]]:[]})():[]]]].map(([d,p])=>a.jsxs("div",{style:{border:`1.5px solid ${H.greenBorder}`,borderRadius:10,overflow:"hidden",margin:"14px 16px 0"},children:[a.jsx(s,{title:d}),p.filter(([,f])=>f).map(([f,x])=>a.jsx(l,{label:f,value:x},f))]},d)),n.documents&&a.jsxs("div",{style:{margin:"14px 16px 0",padding:"12px 14px",background:H.greenLight,border:`1.5px solid ${H.greenBorder}`,borderRadius:10},children:[a.jsx("p",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:H.green,textTransform:"uppercase",letterSpacing:1},children:"Document"}),a.jsx("a",{href:n.documents,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 14px",background:H.green,color:"#fff",borderRadius:8,fontSize:13,fontWeight:600,textDecoration:"none"},children:"📄 View Document"})]}),n.replies&&n.replies.length>0&&a.jsxs("div",{style:{margin:"14px 16px 0"},children:[a.jsxs("p",{style:{fontSize:11,fontWeight:700,color:H.green,textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:["Replies (",n.replies.length,")"]}),n.replies.map((d,p)=>{const f=rc(d.status),x=d.status==="Resolved";return a.jsxs("div",{style:{borderRadius:10,border:`1.5px solid ${x?"#a8d5b5":H.greenBorder}`,padding:"12px 14px",background:x?H.greenLight:"#f8fdf8",marginBottom:8},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:6},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:x?H.green:"#6366f1",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:11,fontWeight:700},children:d.repliedByName?d.repliedByName.split(" ").map(h=>h[0]).join("").slice(0,2).toUpperCase():"?"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:H.dark},children:d.repliedByName||"—"}),d.repliedByRole&&a.jsx("div",{style:{fontSize:11,color:H.green,fontWeight:600},children:d.repliedByRole})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[d.status&&a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:700,background:f.bg,color:f.color,border:`1px solid ${f.border}`},children:[a.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:f.dot}}),d.status]}),a.jsx("span",{style:{fontSize:11,color:H.muted},children:d.createdAt?new Date(d.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""})]})]}),a.jsx("p",{style:{fontSize:13,color:x?H.green:H.dark,margin:0,paddingLeft:36},children:d.replyMessage})]},p)})]})]})]})})}function ix({page:n,totalPages:o,total:l,limit:s,onPageChange:d,onLimitChange:p}){if(o<=1&&l<=10)return null;const f=[],x=2,h=Math.max(1,n-x),m=Math.min(o,n+x);h>1&&(f.push(1),h>2&&f.push("..."));for(let v=h;v<=m;v++)f.push(v);m<o&&(m<o-1&&f.push("..."),f.push(o));const y={padding:"6px 12px",borderRadius:7,fontSize:13,fontWeight:600,cursor:"pointer",border:`1.5px solid ${H.greenBorder}`,transition:"all .15s",minWidth:36,textAlign:"center"};return a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",borderTop:`1px solid ${H.rowBorder}`,flexWrap:"wrap",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{fontSize:12,color:H.muted,fontWeight:600,whiteSpace:"nowrap"},children:"Rows per page:"}),a.jsx("select",{value:s,onChange:v=>p(Number(v.target.value)),style:{padding:"5px 10px",fontSize:13,border:`1.5px solid ${H.greenBorder}`,borderRadius:7,outline:"none",color:H.dark,background:H.white,cursor:"pointer",fontFamily:"'Segoe UI', sans-serif"},children:[10,20,50,100].map(v=>a.jsx("option",{value:v,children:v},v))}),a.jsxs("span",{style:{fontSize:12,color:H.muted,whiteSpace:"nowrap"},children:["of ",a.jsx("strong",{style:{color:H.dark},children:l})]})]}),o>1&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[a.jsx("button",{onClick:()=>d(n-1),disabled:n===1,style:{...y,background:n===1?"#f0f4f0":H.white,color:n===1?"#aaa":H.green,cursor:n===1?"not-allowed":"pointer"},children:"‹ Prev"}),f.map((v,C)=>v==="..."?a.jsx("span",{style:{padding:"6px 4px",fontSize:13,color:H.muted},children:"…"},`dot-${C}`):a.jsx("button",{onClick:()=>d(v),style:{...y,background:v===n?H.green:H.white,color:v===n?"#fff":H.dark,border:`1.5px solid ${v===n?H.green:H.greenBorder}`},children:v},v)),a.jsx("button",{onClick:()=>d(n+1),disabled:n===o,style:{...y,background:n===o?"#f0f4f0":H.white,color:n===o?"#aaa":H.green,cursor:n===o?"not-allowed":"pointer"},children:"Next ›"})]})]})}function F4(){const[n,o]=b.useState([]),[l,s]=b.useState(!0),[d,p]=b.useState(""),[f,x]=b.useState("All"),[h,m]=b.useState(null),[y,v]=b.useState(null),[C,A]=b.useState(!1),[k,z]=b.useState(!1),[D,R]=b.useState(null),[w,O]=b.useState(null),[Y,J]=b.useState(1),[E,F]=b.useState(1),[V,de]=b.useState(0),[he,G]=b.useState(20);vt();const pe=(T,q="success")=>{O({msg:T,type:q}),setTimeout(()=>O(null),3500)};b.useEffect(()=>{$(1,20)},[]);const $=async(T=Y,q=he)=>{try{s(!0);const oe=localStorage.getItem("authUser"),P=oe?JSON.parse(oe):null,ge=await Ue.get("/getAllApplications",{params:{role:P?.role,userId:P?.id,userOffice:P?.office,userDepartmentCategory:P?.departmentCategory,userDepartmentName:P?.departmentName,page:T,limit:q}});ge.data.success&&(o(ge.data.data||[]),de(ge.data.total||0),F(ge.data.totalPages||1),J(T))}catch(oe){console.error("Error fetching applications:",oe)}finally{s(!1)}},me=T=>{T<1||T>E||($(T,he),window.scrollTo({top:0,behavior:"smooth"}))},we=T=>{G(T),$(1,T),window.scrollTo({top:0,behavior:"smooth"})},W=()=>A(!0),ie=T=>{if(A(!1),T){const q=oe=>oe?oe.replace(/Ward\s+/i,"Ward-"):"";R({fullName:T.fullName||"",mobile:T.mobileNumber||"",email:T.email||"",address:T.address||"",pincode:T.pincode||"",wardNo:T.ward||"",ward:q(T.ward),visitorPhoto:T.visitorPhoto||"",_tokenId:T.tokenId||"",_citizenId:T.citizenId||"",_preferredDate:T.preferredDate||"",_slotTime:T.slotTime||"",_microSlot:T.microSlot||""})}else R(null);z(!0)},fe=()=>{z(!1),R(null),$(Y,he)},K=async({applicationId:T,replyMessage:q,status:oe,priority:P,replyDocument:ge})=>{try{const be=localStorage.getItem("authUser"),ke=be?JSON.parse(be):null,Ce=ke?.submittedByName||ke?.name||ke?.fullName||"",et=ke?.submittedByRole||ke?.role||"",tt=ke?.submittedById||ke?.id||"",Lt=n.find(L=>L._id===T)?.tokenNo;if(!Lt){pe("Token No सापडले नाही ❌","error");return}const le=await Ue.get(`/citizen/appointment/token/${Lt}`).catch(()=>null);if(!le?.data?.appointment?._id){pe("Citizen Appointment सापडले नाही ❌","error");return}const je=le.data.appointment._id,X=new FormData;X.append("status",oe.toLowerCase()),X.append("adminNote",q),X.append("replyMessage",q),X.append("priority",P),X.append("repliedBy",tt),X.append("repliedByName",Ce),X.append("repliedByRole",et),ge&&X.append("replyDocument",ge),await Ue.patch(`/citizen/admin/update-status/${je}`,X,{headers:{"Content-Type":"multipart/form-data"}});const M={replyMessage:q,status:oe,priority:P,repliedBy:tt,repliedByName:Ce,repliedByRole:et,createdAt:new Date().toISOString()};o(L=>L.map(ne=>ne._id===T?{...ne,status:oe,priority:P,replies:[...ne.replies||[],M]}:ne)),pe("Reply यशस्वीरित्या पाठवली! ✅"),v(null)}catch(be){console.error("Reply error:",be),pe(be?.response?.data?.message||"Reply पाठवताना error आला ❌","error")}},B=n.filter(T=>{const q=!d||T.fullName?.toLowerCase().includes(d.toLowerCase())||T.inwardNo?.toLowerCase().includes(d.toLowerCase())||T.subject?.toLowerCase().includes(d.toLowerCase())||T.mobile?.includes(d),oe=f==="All"||T.status===f;return q&&oe}),j=["All","Pending","In Progress","Resolved","Rejected"].map(T=>({label:T,count:T==="All"?V:n.filter(q=>q.status===T).length}));return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:H.bg,minHeight:"100vh",padding:"16px"},children:[a.jsx("style",{children:`
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
      `}),w&&a.jsx("div",{className:"toast-box",style:{position:"fixed",top:16,right:16,zIndex:9999,background:w.type==="success"?H.green:H.red,color:"#fff",padding:"12px 18px",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:w.msg}),a.jsxs("div",{className:"hdr-row",style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18},children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"page-title",style:{margin:0,fontSize:24,fontWeight:700,color:H.dark,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:["Applications",a.jsx("span",{style:{background:H.greenBadge,color:H.green,borderRadius:20,padding:"2px 10px",fontSize:13,fontWeight:700},children:V})]}),a.jsx("p",{style:{margin:"4px 0 0",color:H.muted,fontSize:13},children:"जन संवाद - Applications"})]}),a.jsxs("div",{className:"hdr-btns",style:{display:"flex",gap:10},children:[a.jsx("button",{onClick:()=>$(Y,he),style:{background:H.white,color:H.green,border:`2px solid ${H.green}`,borderRadius:8,padding:"9px 16px",fontWeight:600,fontSize:13,cursor:"pointer"},children:"🔄 Refresh"}),a.jsx("button",{onClick:W,style:{background:H.green,color:"#fff",border:"none",borderRadius:8,padding:"9px 16px",fontWeight:600,fontSize:13,cursor:"pointer"},children:"➕ Add"})]})]}),a.jsx("div",{style:{background:H.white,borderRadius:12,padding:"12px 16px",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"},children:a.jsxs("div",{className:"flt-bar",style:{display:"flex",alignItems:"center",gap:10},children:[a.jsxs("div",{className:"srch-wrap",style:{position:"relative",flex:1},children:[a.jsx("span",{style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:14,color:H.muted},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, inward no, subject...",value:d,onChange:T=>p(T.target.value),style:{width:"100%",padding:"9px 12px 9px 32px",fontSize:13,border:`1.5px solid ${H.greenBorder}`,borderRadius:8,outline:"none",color:H.dark,background:"#f8fdf8",boxSizing:"border-box",fontFamily:"'Segoe UI', sans-serif"}})]}),a.jsx("div",{className:"flt-tabs",style:{display:"flex",gap:6,flexWrap:"wrap"},children:j.map(({label:T,count:q})=>a.jsxs("button",{onClick:()=>x(T),style:{padding:"7px 14px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",border:f===T?"none":`1.5px solid ${H.greenBorder}`,background:f===T?H.green:H.white,color:f===T?"#fff":H.muted,transition:"all .15s",whiteSpace:"nowrap"},children:[T," ",a.jsx("span",{style:{marginLeft:4,fontSize:11,fontWeight:700,background:f===T?"rgba(255,255,255,0.25)":H.greenBadge,color:f===T?"#fff":H.green,padding:"1px 6px",borderRadius:10},children:q})]},T))})]})}),a.jsxs("div",{className:"desk-table",style:{background:H.white,borderRadius:12,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflowX:"auto"},children:[a.jsx("div",{style:{display:"flex",alignItems:"center",padding:"14px 20px 12px",borderBottom:`2px solid ${H.greenBadge}`},children:a.jsxs("h3",{style:{margin:0,fontSize:16,fontWeight:700,color:H.dark},children:["Application Records",a.jsx("span",{style:{background:H.greenBadge,color:H.green,borderRadius:20,padding:"2px 10px",fontSize:12,marginLeft:8},children:V})]})}),l?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:1200},children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:"#f0f7f2"},children:["Reply","#","Applicant","Token No","Status","Subject","Department","Priority","Date","Submitted By","Reply By","Document"].map(T=>a.jsx("th",{style:{padding:"12px 14px",textAlign:"left",fontSize:12,fontWeight:700,color:H.dark,borderBottom:`2px solid ${H.greenBadge}`,whiteSpace:"nowrap"},children:T},T))})}),a.jsx("tbody",{children:B.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:12,style:{textAlign:"center",padding:48,color:"#888",fontSize:14},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📭"}),d?"No matching applications found.":"No applications yet."]})}):B.map((T,q)=>a.jsxs("tr",{style:{borderBottom:`1px solid ${H.rowBorder}`,cursor:"pointer"},onMouseOver:oe=>oe.currentTarget.style.background=H.rowHover,onMouseOut:oe=>oe.currentTarget.style.background="transparent",onClick:()=>m(T),children:[a.jsx("td",{style:{padding:"10px 12px"},onClick:oe=>oe.stopPropagation(),children:a.jsx("button",{onClick:()=>v(T),style:{background:H.greenLight,border:`1.5px solid ${H.green}`,borderRadius:7,padding:"5px 11px",cursor:"pointer",color:H.green,fontSize:12,fontWeight:700},children:"📨 Reply"})}),a.jsx("td",{style:{padding:"10px 12px",fontSize:13,color:"#888"},children:(Y-1)*he+q+1}),a.jsx("td",{style:{padding:"10px 12px",minWidth:160},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:t1(T.fullName),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:12,flexShrink:0},children:a1(T.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:13,fontWeight:700,color:H.dark},children:T.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:11,color:H.muted},children:T.mobile})]})]})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsx("span",{style:{background:H.greenLight,color:H.green,borderRadius:6,padding:"2px 9px",fontSize:14,fontWeight:700,fontFamily:"monospace",whiteSpace:"nowrap"},children:T.tokenNo||"—"})}),a.jsx("td",{style:{padding:"10px 12px"},children:a.jsx(n1,{status:T.status})}),a.jsx("td",{style:{padding:"10px 12px",maxWidth:180},children:a.jsx("span",{style:{display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:170,fontSize:13,color:H.dark},title:T.subject,children:T.subject||"—"})}),a.jsxs("td",{style:{padding:"10px 12px",maxWidth:160},children:[a.jsx("div",{style:{fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:150,color:H.dark},children:T.mainDepartment||"—"}),T.subDepartment&&a.jsx("div",{style:{fontSize:11,color:H.muted,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:150},children:T.subDepartment})]}),a.jsx("td",{style:{padding:"10px 12px"},children:T.status!=="Resolved"?a.jsx(i1,{priority:T.priority}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px",whiteSpace:"nowrap",fontSize:12,color:H.muted},children:Hp(T.submissionDate)}),a.jsx("td",{style:{padding:"10px 12px",minWidth:130},children:T.submittedByName?a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:H.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:120},children:T.submittedByName}),T.submittedByRole&&a.jsx("div",{style:{fontSize:11,color:H.muted},children:T.submittedByRole})]}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px",minWidth:130},children:T.replies&&T.replies.length>0?(()=>{const oe=T.replies[0],P=oe.status==="Resolved",ge=T.replies.length-1;return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:P?"#22c55e":"#6366f1",display:"inline-block",flexShrink:0}}),a.jsx("div",{style:{fontSize:12,fontWeight:700,color:P?H.green:H.dark,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:110},children:oe.repliedByName||"—"})]}),oe.repliedByRole&&a.jsx("div",{style:{fontSize:11,color:H.muted,paddingLeft:12},children:oe.repliedByRole}),ge>0&&a.jsxs("div",{style:{fontSize:11,color:"#6366f1",fontWeight:700,paddingLeft:12},children:["+",ge," more"]})]})})():a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{padding:"10px 12px"},onClick:oe=>oe.stopPropagation(),children:T.documents?a.jsx("a",{href:T.documents,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:4,color:H.green,fontSize:12,fontWeight:600,padding:"4px 8px",borderRadius:6,background:H.greenLight,textDecoration:"none"},children:"📄 View"}):a.jsx("span",{style:{color:"#ccc"},children:"—"})})]},T._id))})]}),!l&&a.jsx(ix,{page:Y,totalPages:E,total:V,limit:he,onPageChange:me,onLimitChange:we})]}),a.jsx("div",{className:"mob-cards",children:l?a.jsxs("div",{style:{textAlign:"center",padding:48,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):B.length===0?a.jsxs("div",{style:{textAlign:"center",padding:48,color:"#888"},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📭"}),d?"No matching applications found.":"No applications yet."]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{fontSize:12,color:H.muted,marginBottom:10,padding:"0 2px"},children:["Showing ",a.jsxs("strong",{style:{color:H.dark},children:[(Y-1)*he+1,"–",Math.min(Y*he,V)]})," of ",a.jsx("strong",{style:{color:H.dark},children:V})," applications"]}),B.map((T,q)=>a.jsx(B4,{app:T,index:q,onReply:oe=>v(oe),onView:oe=>m(oe)},T._id||q)),a.jsx(ix,{page:Y,totalPages:E,total:V,limit:he,onPageChange:me,onLimitChange:we})]})}),h&&a.jsx(W4,{record:h,onClose:()=>m(null)}),y&&a.jsx(U4,{record:y,onClose:()=>v(null),onSubmit:K}),C&&a.jsx(L4,{onClose:()=>A(!1),onProceed:ie}),k&&a.jsx(e1,{onClose:fe,prefillData:D})]})}const Me={primary:"#1a5c45",primaryLight:"#e8f5f0",primaryBorder:"#b2d8cc",primaryMid:"#2d7a5f"},rx=["#1a5c45","#2d7a5f","#3a9b76","#0d4f5c","#1e7a6e","#256b4a","#4a9e7c","#1b6b52"],H4=["General Administration Department / Records Department HO","Satellite City Department HO","Establishment Department HO","Accounting Department HO","Construction department HO","Inward-out Department HO","Birth and Death Department HO","Marriage Registration Department HO","Commissioner Office HO","Tax department HO","Water Supply Department HO","Advertisement Tax Department HO","Mud and Bhuibhade Department HO","Naharkat / License Certificates Department HO","Market Recovery Department HO","Unauthorized Construction Committee HO","Accounting Department, (A) HO","Unauthorized Construction Department HO","Health Department HO","Meeting Department HO","Nulm department / hawker policy department HO","Library department HO","Local Body Tax Department HO","Diwabatti Department HO","Town Planning Department HO","Environment / Tree Authority / Forests / Parks Department / Election Department / Census Department HO","Audit Department HO","IT DEPARTMENT","Department of Hygiene Disorder Management HO","Fire Brigade Department HO","Legal Department","Transportation / Vehicle Department HO","Medical Health Department HO","Women and Child welfare Department HO","Handicapped welfare Department HO","Disaster Management Departmengt HO","Special Planning Authority Department HO"],$4=[{value:"Super Admin",label:"Super Admin"},{value:"Admin",label:"Admin"},{value:"Mayor",label:"Mayor"},{value:"Guardian Minister",label:"Guardian Minister"},{value:"Department User",label:"Department User"}],on=n=>["corporator","ward councillor"].includes(String(n||"").trim().toLowerCase()),ko=n=>String(n||"").trim().toLowerCase()==="corporator"?"corporator":n,P4=["corporator","Mayor","Deputy Mayor","Standing Committee Chairman","Leader of House","Leader of Opposition"];function ox({label:n,value:o,onChange:l}){const s=(d,p)=>a.jsx("button",{type:"button",onClick:()=>l(d),style:{flex:1,padding:"7px 0",borderRadius:6,fontSize:".8rem",fontWeight:600,cursor:"pointer",border:`1px solid ${o===d?Me.primary:Me.primaryBorder}`,background:o===d?Me.primary:"#fff",color:o===d?"#fff":Me.primary},children:p});return a.jsxs("div",{style:{flex:1,minWidth:150},children:[a.jsx("label",{style:oi,children:n}),a.jsxs("div",{style:{display:"flex",gap:6},children:[s(!0,"Yes"),s(!1,"No")]})]})}function r1({form:n,setForm:o,handleChange:l}){const s=on(n.role),d=p=>{const f=p.target.value;o({...n,role:f,...on(f)?{departmentName:"",designation:ko(n.designation)||"corporator",isGeneralBodyMember:n.isGeneralBodyMember!==!1}:{isStandingCommitteeMember:!1,isGeneralBodyMember:!0,wardNo:"",designation:""}})};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:mo,children:[a.jsx("label",{style:oi,children:"Role"}),a.jsxs("select",{name:"role",value:n.role,onChange:d,style:{...nr,cursor:"pointer"},children:[a.jsx("option",{value:"",children:"-- Select Role --"}),$4.map(p=>a.jsx("option",{value:p.value,children:p.label},p.value))]})]}),s?a.jsxs("div",{style:{...mo,background:Me.primaryLight,display:"flex",flexDirection:"column",gap:10},children:[a.jsxs("div",{style:{fontSize:".75rem",color:"#5a8a74",fontWeight:600},children:["Category: ",a.jsx("span",{style:{color:"#1a2e25"},children:"All"})," — निवडलेल्या सभांचे सर्व विभागांचे विषय dashboard वर दिसतील"]}),a.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[a.jsxs("div",{style:{flex:"0 0 110px"},children:[a.jsx("label",{style:oi,children:"Ward No."}),a.jsx("input",{name:"wardNo",value:n.wardNo||"",onChange:l,placeholder:"e.g. 1A",style:{...nr,background:"#fff",border:`1px solid ${Me.primaryBorder}`,borderRadius:6,padding:"7px 10px"}})]}),a.jsxs("div",{style:{flex:1,minWidth:160},children:[a.jsx("label",{style:oi,children:"Designation"}),a.jsx("select",{name:"designation",value:ko(n.designation)||"corporator",onChange:l,style:{...nr,background:"#fff",border:`1px solid ${Me.primaryBorder}`,borderRadius:6,padding:"7px 10px",cursor:"pointer"},children:P4.map(p=>a.jsx("option",{value:p,children:p},p))})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[a.jsx(ox,{label:"General Body (महासभा)",value:n.isGeneralBodyMember!==!1,onChange:p=>o({...n,isGeneralBodyMember:p})}),a.jsx(ox,{label:"Standing Committee (स्थायी समिती)",value:!!n.isStandingCommitteeMember,onChange:p=>o({...n,isStandingCommitteeMember:p})})]})]}):a.jsxs("div",{style:mo,children:[a.jsx("label",{style:oi,children:"Department Name"}),a.jsxs("select",{name:"departmentName",value:n.departmentName,onChange:l,style:{...nr,cursor:"pointer"},children:[a.jsx("option",{value:"",children:"-- Select Department --"}),H4.map(p=>a.jsx("option",{value:p,children:p},p))]})]})]})}function I4(n){return n?.role?on(n.role)?`${ko(n.designation)||"corporator"}${n.wardNo?` · Ward ${n.wardNo}`:""}`:n.role:"—"}function Y4({name:n="",index:o}){const l=n.split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase()||"?";return a.jsx("div",{style:{width:36,height:36,borderRadius:"50%",backgroundColor:rx[o%rx.length],display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".8125rem",fontWeight:700,flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,.2)",border:"2px solid #fff"},children:l})}function vp(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}const mo={border:"1px solid #d1e8df",borderRadius:8,padding:"10px 14px",transition:"border-color .2s",backgroundColor:"#fff"},oi={display:"block",fontSize:".75rem",color:"#5a8a74",marginBottom:3,fontWeight:600,letterSpacing:".02em"},nr={width:"100%",outline:"none",fontSize:".875rem",color:"#1a2e25",background:"transparent",border:"none",fontFamily:"inherit"};function V4({user:n,onClose:o}){return n?a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:480,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Me.primary} 0%, ${Me.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Detail"}),a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:n.fullName})]}),a.jsx("button",{onClick:o,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:24},children:a.jsx("div",{style:{background:Me.primaryLight,borderRadius:10,padding:"14px 18px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px 24px"},children:[["Full Name",n.fullName],["Username",n.userName],["Mobile Number",n.mobileNumber],["Email",n.email],["Role",n.role||"—"],...on(n.role)?[["Ward No.",n.wardNo||"—"],["Designation",ko(n.designation)||"corporator"],["General Body",n.isGeneralBodyMember!==!1?"Yes":"No"],["Standing Committee",n.isStandingCommitteeMember?"Yes":"No"]]:[],["Department",on(n.role)?"All":n.departmentName],["Created At",vp(n.createdAt)],["Updated At",vp(n.updatedAt)]].map(([l,s])=>a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"#5a8a74",marginBottom:2,fontWeight:600},children:l}),a.jsx("p",{style:{fontSize:".875rem",color:"#1a2e25",fontWeight:500,margin:0},children:s||"—"})]},l))})})]})}):null}function q4({user:n,onClose:o,onSuccess:l}){const[s,d]=b.useState(!1),[p,f]=b.useState({fullName:n.fullName||"",userName:n.userName||"",mobileNumber:n.mobileNumber||"",email:n.email||"",password:n.password||"",departmentName:n.departmentName||"",role:on(n.role)?"corporator":n.role||"",isStandingCommitteeMember:!!n.isStandingCommitteeMember,isGeneralBodyMember:n.isGeneralBodyMember!==!1,wardNo:n.wardNo||"",designation:ko(n.designation)||(on(n.role)?"corporator":"")}),x=y=>f({...p,[y.target.name]:y.target.value}),h=async y=>{if(y.preventDefault(),!p.fullName||!p.userName||!p.mobileNumber||!p.email){ye.warn("All required fields fill करा ❌");return}try{d(!0);const v=await Ue.patch(`/users/${n._id}`,p);if(!v.data.success){ye.error(v.data.message||"Update failed ❌");return}ye.success("User Updated Successfully ✅"),l(),o()}catch(v){ye.error(v?.response?.data?.message||"Server Error ❌")}finally{d(!1)}},m=p.fullName&&p.userName&&p.mobileNumber&&p.email&&!s;return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Me.primary} 0%, ${Me.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Management"}),a.jsxs("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:["Edit User — ",n.fullName]})]}),a.jsx("button",{onClick:o,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:"24px 28px"},children:a.jsxs("form",{onSubmit:h,style:{display:"flex",flexDirection:"column",gap:12},children:[[{label:"Full Name",name:"fullName",type:"text",ph:"Enter full name"},{label:"Username",name:"userName",type:"text",ph:"Enter username"},{label:"Mobile Number",name:"mobileNumber",type:"tel",ph:"Enter mobile number"},{label:"Email",name:"email",type:"email",ph:"Enter email"}].map(({label:y,name:v,type:C,ph:A})=>a.jsxs("div",{style:mo,children:[a.jsx("label",{style:oi,children:y}),a.jsx("input",{type:C,name:v,value:p[v],onChange:x,placeholder:A,style:nr,maxLength:v==="mobileNumber"?10:void 0})]},v)),a.jsx(r1,{form:p,setForm:f,handleChange:x}),a.jsxs("div",{style:{display:"flex",gap:10,paddingTop:4},children:[a.jsx("button",{type:"button",onClick:o,style:{flex:1,padding:"11px 0",borderRadius:8,border:`1px solid ${Me.primaryBorder}`,background:"#fff",color:Me.primary,fontWeight:600,fontSize:".875rem",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"submit",disabled:!m,style:{flex:1,padding:"11px 0",borderRadius:8,border:"none",background:m?Me.primary:"#ccc",color:"#fff",fontWeight:600,fontSize:".875rem",cursor:m?"pointer":"not-allowed",opacity:m?1:.65},children:s?"Saving...":"💾 Save Changes"})]})]})})]})})}function G4({onClose:n,onSuccess:o}){const[l,s]=b.useState(!1),[d,p]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:"",departmentName:"",role:"",isStandingCommitteeMember:!1,isGeneralBodyMember:!0,wardNo:"",designation:""}),f=m=>p({...d,[m.target.name]:m.target.value}),x=async m=>{if(m.preventDefault(),!d.fullName||!d.userName||!d.mobileNumber||!d.email||!d.password){ye.warn("All fields required ❌");return}try{s(!0);const y=await Ue.post("/register",d);if(!y.data.success){ye.error(y.data.message||"Registration failed ❌");return}ye.success("User Added Successfully ✅"),o(),n()}catch(y){ye.error(y?.response?.data?.message||"Server Error ❌")}finally{s(!1)}},h=!d.fullName||!d.userName||!d.mobileNumber||!d.email||!d.password||l;return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Me.primary} 0%, ${Me.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"User Management"}),a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:"Add New User"})]}),a.jsx("button",{onClick:n,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:"24px 28px"},children:a.jsxs("form",{onSubmit:x,style:{display:"flex",flexDirection:"column",gap:12},children:[[{label:"Full Name",name:"fullName",type:"text",ph:"Enter full name"},{label:"Username",name:"userName",type:"text",ph:"Enter username"},{label:"Mobile Number",name:"mobileNumber",type:"tel",ph:"Enter mobile number"},{label:"Email",name:"email",type:"email",ph:"Enter email"},{label:"Password",name:"password",type:"password",ph:"Enter password"}].map(({label:m,name:y,type:v,ph:C})=>a.jsxs("div",{style:mo,children:[a.jsx("label",{style:oi,children:m}),a.jsx("input",{type:v,name:y,value:d[y],onChange:f,placeholder:C,style:nr,maxLength:y==="mobileNumber"?10:void 0})]},y)),a.jsx(r1,{form:d,setForm:p,handleChange:f}),a.jsxs("div",{style:{display:"flex",gap:10,paddingTop:4},children:[a.jsx("button",{type:"button",onClick:n,style:{flex:1,padding:"11px 0",borderRadius:8,border:`1px solid ${Me.primaryBorder}`,background:"#fff",color:Me.primary,fontWeight:600,fontSize:".875rem",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"submit",disabled:h,style:{flex:1,padding:"11px 0",borderRadius:8,border:"none",background:h?"#ccc":Me.primary,color:"#fff",fontWeight:600,fontSize:".875rem",cursor:h?"not-allowed":"pointer",opacity:h?.65:1},children:l?"Creating...":"+ Add User"})]})]})})]})})}function X4(){const[n,o]=b.useState([]),[l,s]=b.useState(!0),[d,p]=b.useState(""),[f,x]=b.useState(null),[h,m]=b.useState(!1),[y,v]=b.useState(null),[C,A]=b.useState(null);b.useEffect(()=>{k()},[]);const k=async()=>{try{s(!0);const w=await Ue.get("/getUsers");w.data.success?o(w.data.users||[]):ye.error(w.data.message||"Users fetch failed ❌")}catch{ye.error("Users fetch करताना error आला ❌")}finally{s(!1)}},z=async(w,O,Y)=>{if(w.stopPropagation(),!!window.confirm(`"${Y}" ला delete करायचे आहे का?`))try{v(O);const J=await Ue.delete(`/deleteUser/${O}`);J.data.success?(o(E=>E.filter(F=>F._id!==O)),ye.success(`"${Y}" Deleted Successfully ✅`)):ye.error(J.data.message||"Delete failed ❌")}catch(J){ye.error(J?.response?.data?.message||"Server Error ❌")}finally{v(null)}},D=n.filter(w=>!on(w.role)),R=D.filter(w=>!d||w.fullName?.toLowerCase().includes(d.toLowerCase())||w.userName?.toLowerCase().includes(d.toLowerCase())||w.mobileNumber?.includes(d)||w.email?.toLowerCase().includes(d.toLowerCase())||w.role?.toLowerCase().includes(d.toLowerCase())||w.wardNo?.toLowerCase().includes(d.toLowerCase()));return a.jsxs("div",{style:{minHeight:"100vh",background:"#f0f7f4",padding:24},children:[a.jsx("style",{children:`
        @keyframes uspin { to { transform:rotate(360deg) } }
        .u-tr:hover { background: #e8f5f0 !important; }
        .u-del-btn:hover:not(:disabled) { background:#fee2e2 !important; border-color:#f87171 !important; }
        .u-edit-btn:hover { background:#d1fae5 !important; border-color:#6ee7b7 !important; }
        .u-ref-btn:hover { background:#e8f5f0 !important; color:#1a5c45 !important; border-color:#b2d8cc !important; }
        .u-add-btn:hover { background:#154d3a !important; }
        .u-search-input:focus { border-color: #1a5c45 !important; box-shadow: 0 0 0 3px rgba(26,92,69,.12) !important; }
      `}),a.jsxs("div",{style:{maxWidth:1280,margin:"0 auto"},children:[a.jsxs("div",{style:{marginBottom:24},children:[a.jsxs("h1",{style:{fontSize:"1.6rem",fontWeight:800,color:"#1a2e25",margin:0,display:"flex",alignItems:"center",gap:12},children:["All Users",a.jsx("span",{style:{fontSize:".8125rem",fontWeight:700,color:Me.primary,background:Me.primaryLight,border:`1px solid ${Me.primaryBorder}`,padding:"2px 10px",borderRadius:20},children:D.length})]}),a.jsx("p",{style:{color:"#5a8a74",fontSize:".9rem",fontWeight:500,marginTop:4},children:"Janata Darbar — User Management"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:16,flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative",flex:"1 1 300px",maxWidth:480},children:[a.jsx("span",{style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:"#5a8a74",fontSize:".9rem"},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, username, mobile, email...",value:d,onChange:w=>p(w.target.value),className:"u-search-input",style:{width:"100%",paddingLeft:36,paddingRight:14,paddingTop:9,paddingBottom:9,fontSize:".875rem",border:`1px solid ${Me.primaryBorder}`,borderRadius:8,outline:"none",background:"#fff",color:"#1a2e25",transition:"border-color .2s, box-shadow .2s",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{display:"flex",gap:10,flexShrink:0},children:[a.jsx("button",{onClick:k,className:"u-ref-btn",style:{display:"flex",alignItems:"center",gap:6,padding:"9px 16px",border:`1px solid ${Me.primaryBorder}`,borderRadius:8,background:"#fff",color:"#3a6b57",fontWeight:600,fontSize:".8125rem",cursor:"pointer",transition:"all .15s"},children:"🔄 Refresh"}),a.jsx("button",{onClick:()=>m(!0),className:"u-add-btn",style:{display:"flex",alignItems:"center",gap:6,padding:"9px 18px",border:"none",borderRadius:8,background:Me.primary,color:"#fff",fontWeight:600,fontSize:".8125rem",cursor:"pointer",transition:"background .15s"},children:"+ Add User"})]})]}),a.jsxs("div",{style:{background:"#fff",border:`1px solid ${Me.primaryBorder}`,borderRadius:10,overflow:"hidden",boxShadow:"0 2px 8px rgba(26,92,69,.08)"},children:[a.jsx("style",{children:`
            .u-th { padding:0 16px; height:50px; font-weight:600; font-size:.8rem; color:${Me.primary}; text-align:left; white-space:nowrap; background:${Me.primaryLight}; border-bottom:1px solid ${Me.primaryBorder}; letter-spacing:.04em; text-transform:uppercase; }
            .u-tr { border-bottom:1px solid #e8f2ee; cursor:pointer; transition:background .12s; }
            .u-tr:last-child { border-bottom:none; }
            .u-td { padding:0 16px; height:54px; vertical-align:middle; font-size:.875rem; }
            .u-mono { display:inline-block; padding:2px 8px; background:${Me.primaryLight}; border:1px solid ${Me.primaryBorder}; border-radius:4px; font-family:monospace; font-size:.8rem; color:${Me.primary}; font-weight:600; }
            .u-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:46px; border-top:1px solid ${Me.primaryBorder}; background:${Me.primaryLight}; font-size:.8125rem; color:${Me.primaryMid}; }
            .u-del-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #fca5a5; background:#fff5f5; color:#dc2626; cursor:pointer; transition:all .15s; }
            .u-del-btn:disabled { opacity:.5; cursor:not-allowed; }
            .u-edit-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #6ee7b7; background:#f0fdf4; color:#065f46; cursor:pointer; transition:all .15s; }
          `}),a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{children:["#","User","Username","Mobile","Email","Role","Department","Joined","Action"].map(w=>a.jsx("th",{className:"u-th",children:w},w))})}),a.jsx("tbody",{children:l?a.jsx("tr",{children:a.jsxs("td",{colSpan:9,style:{textAlign:"center",padding:"64px 0",color:"#5a8a74"},children:[a.jsx("div",{style:{width:32,height:32,margin:"0 auto 12px",border:`3px solid ${Me.primaryBorder}`,borderTopColor:Me.primary,borderRadius:"50%",animation:"uspin .8s linear infinite"}}),a.jsx("div",{style:{fontWeight:500},children:"Loading users…"})]})}):R.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:9,style:{textAlign:"center",padding:"64px 0",color:"#5a8a74"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:8},children:"👤"}),a.jsx("div",{style:{fontWeight:500},children:"No users found"})]})}):R.map((w,O)=>a.jsxs("tr",{className:"u-tr",style:{background:O%2===0?"#fff":"#fafcfb"},onClick:()=>x(w),children:[a.jsx("td",{className:"u-td",style:{color:"#5a8a74",width:50,fontWeight:600},children:O+1}),a.jsx("td",{className:"u-td",style:{minWidth:180},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(Y4,{name:w.fullName,index:O}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:".875rem",fontWeight:600,color:"#1a2e25",lineHeight:1.3},children:w.fullName}),a.jsxs("div",{style:{fontSize:".72rem",color:"#5a8a74",marginTop:1},children:["ID: ",w._id?.slice(-6)]})]})]})}),a.jsx("td",{className:"u-td",style:{width:140},children:a.jsxs("span",{className:"u-mono",children:["@",w.userName]})}),a.jsx("td",{className:"u-td",style:{width:140},children:a.jsx("div",{style:{fontSize:".875rem",color:"#2d5a45"},children:w.mobileNumber||"—"})}),a.jsx("td",{className:"u-td",style:{minWidth:180},children:a.jsx("div",{style:{fontSize:".875rem",color:"#2d5a45",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:200},children:w.email||"—"})}),a.jsx("td",{className:"u-td",style:{minWidth:150},children:a.jsx("div",{style:{fontSize:".8rem",color:"#2d5a45",whiteSpace:"nowrap"},children:w.role?I4(w):a.jsx("span",{style:{color:"#a0c4b5"},children:"—"})})}),a.jsx("td",{className:"u-td",style:{minWidth:200},children:a.jsx("div",{style:{fontSize:".8rem",color:"#2d5a45",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:220},title:w.departmentName||"—",children:on(w.role)?"All":w.departmentName||a.jsx("span",{style:{color:"#a0c4b5"},children:"—"})})}),a.jsx("td",{className:"u-td",style:{width:120,whiteSpace:"nowrap",color:"#3a6b57",fontSize:".8125rem"},children:vp(w.createdAt)}),a.jsx("td",{className:"u-td",style:{width:160},onClick:Y=>Y.stopPropagation(),children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("button",{className:"u-edit-btn",onClick:Y=>{Y.stopPropagation(),A(w)},children:"✏️ Edit"}),a.jsx("button",{className:"u-del-btn",disabled:y===w._id,onClick:Y=>z(Y,w._id,w.fullName),children:y===w._id?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:11,height:11,border:"2px solid #fca5a5",borderTopColor:"#dc2626",borderRadius:"50%",display:"inline-block",animation:"uspin .7s linear infinite"}}),"Deleting…"]}):a.jsx(a.Fragment,{children:"🗑️ Delete"})})]})})]},w._id))})]})}),!l&&R.length>0&&a.jsxs("div",{className:"u-footer",children:[a.jsxs("span",{children:["Showing ",a.jsx("strong",{style:{color:Me.primary},children:R.length})," of ",a.jsx("strong",{style:{color:Me.primary},children:D.length})," users"]}),a.jsx("span",{style:{color:"#5a8a74",fontSize:".8rem"},children:"👆 Click any row to view full details"})]})]})]}),f&&a.jsx(V4,{user:f,onClose:()=>x(null)}),h&&a.jsx(G4,{onClose:()=>m(!1),onSuccess:k}),C&&a.jsx(q4,{user:C,onClose:()=>A(null),onSuccess:k})]})}const Ie={primary:"#1a5c45",primaryLight:"#e8f5f0",primaryBorder:"#b2d8cc",primaryMid:"#2d7a5f"},No="corporator",J4=n=>["corporator","ward councillor"].includes(String(n||"").trim().toLowerCase()),o1=n=>String(n||"").trim().toLowerCase()===No?No:n||"",l1=[{value:"corporator",label:"Corporator"},{value:"Mayor",label:"Mayor"},{value:"Deputy Mayor",label:"Deputy Mayor"},{value:"Standing Committee Chairman",label:"Standing Committee Chairman"},{value:"Leader of House",label:"Leader of House"},{value:"Leader of Opposition",label:"Leader of Opposition"}],lx=n=>{const o=o1(n)||No;return l1.find(l=>l.value===o)?.label||o},co={border:"1px solid #d1e8df",borderRadius:8,padding:"10px 14px",transition:"border-color .2s",backgroundColor:"#fff"},er={display:"block",fontSize:".75rem",color:"#5a8a74",marginBottom:3,fontWeight:600,letterSpacing:".02em"},Q4={width:"100%",outline:"none",fontSize:".875rem",color:"#1a2e25",background:"transparent",border:"none",fontFamily:"inherit"};function sx({label:n,value:o,onChange:l}){const s=(d,p)=>a.jsx("button",{type:"button",onClick:()=>l(d),style:{flex:1,padding:"7px 0",borderRadius:6,fontSize:".8rem",fontWeight:600,cursor:"pointer",border:`1px solid ${o===d?Ie.primary:Ie.primaryBorder}`,background:o===d?Ie.primary:"#fff",color:o===d?"#fff":Ie.primary},children:p});return a.jsxs("div",{style:{flex:1,minWidth:150},children:[a.jsx("label",{style:er,children:n}),a.jsxs("div",{style:{display:"flex",gap:6},children:[s(!0,"Yes"),s(!1,"No")]})]})}const cx=n=>a.jsx("span",{style:{display:"inline-block",minWidth:44,textAlign:"center",padding:"3px 10px",borderRadius:20,fontSize:".78rem",fontWeight:700,background:n?"#e6f6ec":"#fdeeee",color:n?"#1f7a45":"#c0392b",border:`1px solid ${n?"#b7e2c6":"#f3c4bd"}`},children:n?"Yes":"No"});function dx({corporator:n,onClose:o,onSuccess:l}){const s=!!n,[d,p]=b.useState(!1),[f,x]=b.useState({wardNo:n?.wardNo||"",fullName:n?.fullName||"",mobileNumber:n?.mobileNumber||"",designation:o1(n?.designation)||No,isGeneralBodyMember:n?n.isGeneralBodyMember!==!1:!0,isStandingCommitteeMember:n?!!n.isStandingCommitteeMember:!1,password:""}),h=A=>x({...f,[A.target.name]:A.target.value}),m=/^\d{10}$/.test(f.mobileNumber.trim()),y=f.wardNo.trim()&&f.fullName.trim()&&m&&(s||f.password)&&!d,v=async A=>{if(A.preventDefault(),!y){ye.warn("सर्व fields भरा ❌");return}const k=f.mobileNumber.trim(),z={role:No,wardNo:f.wardNo.trim(),fullName:f.fullName.trim(),mobileNumber:k,designation:f.designation,isGeneralBodyMember:f.isGeneralBodyMember,isStandingCommitteeMember:f.isStandingCommitteeMember};try{p(!0);let D;if(s){const R={...z};(!n.userName||n.userName===n.mobileNumber)&&(R.userName=k),D=await Ue.patch(`/users/${n._id}`,R)}else D=await Ue.post("/register",{...z,userName:k,password:f.password});if(!D.data.success){ye.error(D.data.message||"Save failed ❌");return}ye.success(s?"Corporator Updated Successfully ✅":"Corporator Added Successfully ✅"),l(),o()}catch(D){ye.error(D?.response?.data?.message||"Server Error ❌")}finally{p(!1)}},C={...Q4};return a.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.45)",backdropFilter:"blur(4px)",padding:16},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,.2)",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{background:`linear-gradient(135deg, ${Ie.primary} 0%, ${Ie.primaryMid} 100%)`,borderRadius:"16px 16px 0 0",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:".7rem",color:"rgba(255,255,255,.7)",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:2},children:"Corporators / नगरसेवक"}),a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",margin:0},children:s?`Edit — ${n.fullName}`:"Add Corporator"})]}),a.jsx("button",{onClick:o,style:{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.2)",border:"none",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:".875rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),a.jsx("div",{style:{padding:"24px 28px"},children:a.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[a.jsxs("div",{style:{...co,flex:"0 0 130px"},children:[a.jsx("label",{style:er,children:"Ward seat no."}),a.jsx("input",{name:"wardNo",value:f.wardNo,onChange:h,placeholder:"e.g. 1A",style:C})]}),a.jsxs("div",{style:{...co,flex:1,minWidth:180},children:[a.jsx("label",{style:er,children:"Name of corporator"}),a.jsx("input",{name:"fullName",value:f.fullName,onChange:h,placeholder:"Enter full name",style:C})]})]}),a.jsxs("div",{style:co,children:[a.jsx("label",{style:er,children:"Mobile number"}),a.jsx("input",{type:"tel",name:"mobileNumber",value:f.mobileNumber,onChange:h,placeholder:"10 digit mobile number",maxLength:10,style:C})]}),a.jsxs("div",{style:co,children:[a.jsx("label",{style:er,children:"Designation"}),a.jsx("select",{name:"designation",value:f.designation,onChange:h,style:{...C,cursor:"pointer"},children:l1.map(A=>a.jsx("option",{value:A.value,children:A.label},A.value))})]}),a.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[a.jsx(sx,{label:"General Body",value:f.isGeneralBodyMember,onChange:A=>x({...f,isGeneralBodyMember:A})}),a.jsx(sx,{label:"Standing Committee",value:f.isStandingCommitteeMember,onChange:A=>x({...f,isStandingCommitteeMember:A})})]}),!s&&a.jsxs("div",{style:co,children:[a.jsx("label",{style:er,children:"Password"}),a.jsx("input",{type:"password",name:"password",value:f.password,onChange:h,placeholder:"Enter password",style:C})]}),a.jsxs("div",{style:{display:"flex",gap:10,paddingTop:4},children:[a.jsx("button",{type:"button",onClick:o,style:{flex:1,padding:"11px 0",borderRadius:8,border:`1px solid ${Ie.primaryBorder}`,background:"#fff",color:Ie.primary,fontWeight:600,fontSize:".875rem",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"submit",disabled:!y,style:{flex:1,padding:"11px 0",borderRadius:8,border:"none",background:y?Ie.primary:"#ccc",color:"#fff",fontWeight:600,fontSize:".875rem",cursor:y?"pointer":"not-allowed",opacity:y?1:.65},children:d?"Saving...":s?"💾 Save Changes":"+ Add Corporator"})]})]})})]})})}function Z4(){const[n,o]=b.useState([]),[l,s]=b.useState(!0),[d,p]=b.useState(""),[f,x]=b.useState(!1),[h,m]=b.useState(null),[y,v]=b.useState(null);b.useEffect(()=>{C()},[]);const C=async()=>{try{s(!0);const w=await Ue.get("/getUsers");w.data.success?o((w.data.users||[]).filter(O=>J4(O.role))):ye.error(w.data.message||"Corporators fetch failed ❌")}catch{ye.error("Corporators fetch करताना error आला ❌")}finally{s(!1)}},A=async w=>{if(window.confirm(`"${w.fullName}" ला delete करायचे आहे का?`))try{v(w._id);const O=await Ue.delete(`/deleteUser/${w._id}`);O.data.success?(o(Y=>Y.filter(J=>J._id!==w._id)),ye.success(`"${w.fullName}" Deleted Successfully ✅`)):ye.error(O.data.message||"Delete failed ❌")}catch(O){ye.error(O?.response?.data?.message||"Server Error ❌")}finally{v(null)}},k=d.trim().toLowerCase(),z=n.filter(w=>!k||w.fullName?.toLowerCase().includes(k)||w.mobileNumber?.includes(k)||String(w.wardNo||"").toLowerCase().includes(k)||lx(w.designation).toLowerCase().includes(k)).sort((w,O)=>String(w.wardNo||"").localeCompare(String(O.wardNo||""),"en",{numeric:!0})),D=n.filter(w=>w.isGeneralBodyMember!==!1).length,R=n.filter(w=>w.isStandingCommitteeMember).length;return a.jsxs("div",{style:{minHeight:"100vh",background:"#f0f7f4",padding:24},children:[a.jsx("style",{children:`
        @keyframes cspin { to { transform:rotate(360deg) } }
        .c-th { padding:0 16px; height:50px; font-weight:600; font-size:.8rem; color:${Ie.primary}; text-align:left; white-space:nowrap; background:${Ie.primaryLight}; border-bottom:1px solid ${Ie.primaryBorder}; letter-spacing:.04em; text-transform:uppercase; }
        .c-tr { border-bottom:1px solid #e8f2ee; transition:background .12s; }
        .c-tr:last-child { border-bottom:none; }
        .c-tr:hover { background:#e8f5f0 !important; }
        .c-td { padding:0 16px; height:54px; vertical-align:middle; font-size:.875rem; }
        .c-mono { display:inline-block; padding:2px 8px; background:${Ie.primaryLight}; border:1px solid ${Ie.primaryBorder}; border-radius:4px; font-family:monospace; font-size:.8rem; color:${Ie.primary}; font-weight:600; }
        .c-footer { display:flex; align-items:center; justify-content:space-between; padding:0 16px; height:46px; border-top:1px solid ${Ie.primaryBorder}; background:${Ie.primaryLight}; font-size:.8125rem; color:${Ie.primaryMid}; }
        .c-edit-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #6ee7b7; background:#f0fdf4; color:#065f46; cursor:pointer; transition:all .15s; }
        .c-edit-btn:hover { background:#d1fae5 !important; border-color:#6ee7b7 !important; }
        .c-del-btn { display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:6px; font-size:.78rem; font-weight:600; border:1px solid #fca5a5; background:#fff5f5; color:#dc2626; cursor:pointer; transition:all .15s; }
        .c-del-btn:hover:not(:disabled) { background:#fee2e2 !important; border-color:#f87171 !important; }
        .c-del-btn:disabled { opacity:.5; cursor:not-allowed; }
        .c-ref-btn:hover { background:#e8f5f0 !important; color:#1a5c45 !important; border-color:#b2d8cc !important; }
        .c-add-btn:hover { background:#154d3a !important; }
        .c-search-input:focus { border-color:#1a5c45 !important; box-shadow:0 0 0 3px rgba(26,92,69,.12) !important; }
      `}),a.jsxs("div",{style:{maxWidth:1280,margin:"0 auto"},children:[a.jsxs("div",{style:{marginBottom:24},children:[a.jsxs("h1",{style:{fontSize:"1.6rem",fontWeight:800,color:"#1a2e25",margin:0,display:"flex",alignItems:"center",gap:12},children:["Corporators",a.jsx("span",{style:{fontSize:".8125rem",fontWeight:700,color:Ie.primary,background:Ie.primaryLight,border:`1px solid ${Ie.primaryBorder}`,padding:"2px 10px",borderRadius:20},children:n.length})]}),a.jsxs("p",{style:{color:"#5a8a74",fontSize:".9rem",fontWeight:500,marginTop:4},children:["General Body ",a.jsx("strong",{style:{color:Ie.primary},children:D})," · Standing Committee ",a.jsx("strong",{style:{color:Ie.primary},children:R})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:16,flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative",flex:"1 1 300px",maxWidth:480},children:[a.jsx("span",{style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:"#5a8a74",fontSize:".9rem"},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, ward, mobile, designation...",value:d,onChange:w=>p(w.target.value),className:"c-search-input",style:{width:"100%",paddingLeft:36,paddingRight:14,paddingTop:9,paddingBottom:9,fontSize:".875rem",border:`1px solid ${Ie.primaryBorder}`,borderRadius:8,outline:"none",background:"#fff",color:"#1a2e25",transition:"border-color .2s, box-shadow .2s",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{display:"flex",gap:10,flexShrink:0},children:[a.jsx("button",{onClick:C,className:"c-ref-btn",style:{display:"flex",alignItems:"center",gap:6,padding:"9px 16px",border:`1px solid ${Ie.primaryBorder}`,borderRadius:8,background:"#fff",color:"#3a6b57",fontWeight:600,fontSize:".8125rem",cursor:"pointer",transition:"all .15s"},children:"🔄 Refresh"}),a.jsx("button",{onClick:()=>x(!0),className:"c-add-btn",style:{display:"flex",alignItems:"center",gap:6,padding:"9px 18px",border:"none",borderRadius:8,background:Ie.primary,color:"#fff",fontWeight:600,fontSize:".8125rem",cursor:"pointer",transition:"background .15s"},children:"+ Add Corporator"})]})]}),a.jsxs("div",{style:{background:"#fff",border:`1px solid ${Ie.primaryBorder}`,borderRadius:10,overflow:"hidden",boxShadow:"0 2px 8px rgba(26,92,69,.08)"},children:[a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{children:["Sr. No.","Ward seat no.","Names of corporators","Mobile number","Designation","General Body","Standing Committee","Action"].map(w=>a.jsx("th",{className:"c-th",children:w},w))})}),a.jsx("tbody",{children:l?a.jsx("tr",{children:a.jsxs("td",{colSpan:8,style:{textAlign:"center",padding:"64px 0",color:"#5a8a74"},children:[a.jsx("div",{style:{width:32,height:32,margin:"0 auto 12px",border:`3px solid ${Ie.primaryBorder}`,borderTopColor:Ie.primary,borderRadius:"50%",animation:"cspin .8s linear infinite"}}),a.jsx("div",{style:{fontWeight:500},children:"Loading corporators…"})]})}):z.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:8,style:{textAlign:"center",padding:"64px 0",color:"#5a8a74"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:8},children:"🏛"}),a.jsx("div",{style:{fontWeight:500},children:'No corporators found — "+ Add Corporator" वर click करा'})]})}):z.map((w,O)=>a.jsxs("tr",{className:"c-tr",style:{background:O%2===0?"#fff":"#fafcfb"},children:[a.jsx("td",{className:"c-td",style:{width:70,fontWeight:600,color:"#5a8a74"},children:O+1}),a.jsx("td",{className:"c-td",style:{width:120},children:a.jsx("span",{className:"c-mono",children:w.wardNo||"—"})}),a.jsx("td",{className:"c-td",style:{minWidth:200,fontWeight:600,color:"#1a2e25"},children:w.fullName||"—"}),a.jsx("td",{className:"c-td",style:{width:140,color:"#2d5a45"},children:w.mobileNumber||"—"}),a.jsx("td",{className:"c-td",style:{minWidth:140,color:"#2d5a45"},children:lx(w.designation)}),a.jsx("td",{className:"c-td",style:{width:120},children:cx(w.isGeneralBodyMember!==!1)}),a.jsx("td",{className:"c-td",style:{width:150},children:cx(!!w.isStandingCommitteeMember)}),a.jsx("td",{className:"c-td",style:{width:170},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("button",{className:"c-edit-btn",onClick:()=>m(w),children:"✏️ Edit"}),a.jsx("button",{className:"c-del-btn",disabled:y===w._id,onClick:()=>A(w),children:y===w._id?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:11,height:11,border:"2px solid #fca5a5",borderTopColor:"#dc2626",borderRadius:"50%",display:"inline-block",animation:"cspin .7s linear infinite"}}),"Deleting…"]}):a.jsx(a.Fragment,{children:"🗑️ Delete"})})]})})]},w._id))})]})}),!l&&z.length>0&&a.jsx("div",{className:"c-footer",children:a.jsxs("span",{children:["Showing ",a.jsx("strong",{style:{color:Ie.primary},children:z.length})," of ",a.jsx("strong",{style:{color:Ie.primary},children:n.length})," corporators"]})})]})]}),f&&a.jsx(dx,{onClose:()=>x(!1),onSuccess:C}),h&&a.jsx(dx,{corporator:h,onClose:()=>m(null),onSuccess:C})]})}const ds="https://jansamvad.saavi.co.in",K4=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ek=["January","February","March","April","May","June","July","August","September","October","November","December"],Us=[];for(let n=7;n<=20;n++)Us.push(`${String(n).padStart(2,"0")}:00`),n<20&&Us.push(`${String(n).padStart(2,"0")}:30`);function tk(n,o){return new Date(n,o+1,0).getDate()}function ak(n,o){let l=new Date(n,o,1).getDay();return l===0?6:l-1}function nk(n,o,l){return`${n}-${String(o+1).padStart(2,"0")}-${String(l).padStart(2,"0")}`}function uo(n){return new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function Ws(n){const[o,l]=n.split(":").map(Number);return o*60+l}function ux(n,o){const l=Ws(o)-Ws(n);return`${Math.floor(l/60)}h${l%60>0?" "+l%60+"m":""}`}function ik(){const n=new Date,[o,l]=b.useState([]),[s,d]=b.useState(!0),[p,f]=b.useState(!1),[x,h]=b.useState(""),[m,y]=b.useState(null),[v,C]=b.useState(null),[A,k]=b.useState(null),[z,D]=b.useState(!1),[R,w]=b.useState(n.getFullYear()),[O,Y]=b.useState(n.getMonth()),[J,E]=b.useState(null),[F,V]=b.useState(""),[de,he]=b.useState(""),[G,pe]=b.useState(window.innerWidth<640);b.useEffect(()=>{const P=()=>pe(window.innerWidth<640);return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const $=(P,ge="success")=>{y({msg:P,type:ge}),setTimeout(()=>y(null),3500)},me=async()=>{try{d(!0);const P=await Ze.get(`${ds}/api/availability/get`);P.data.success&&l(P.data.data)}catch{$("Failed to load availability data","error")}finally{d(!1)}};b.useEffect(()=>{me()},[]);const we=new Set(o.map(P=>P.date)),W=F?Us.filter(P=>Ws(P)>Ws(F)):[],ie=async()=>{if(!J)return $("कृपया date select करा!","error");if(!F)return $("Start Time select करा!","error");if(!de)return $("End Time select करा!","error");try{f(!0),(await Ze.post(`${ds}/api/availability/add-slot`,{date:J,start:F,end:de})).data.success&&($(`Slot ${F}–${de} added successfully!`),await me(),V(""),he(""),E(null),D(!1))}catch(P){$(P.response?.data?.message||"Failed to add slot","error")}finally{f(!1)}},fe=async(P,ge)=>{try{(await Ze.delete(`${ds}/api/availability/delete-slot/${P}`,{data:{slotIndex:ge}})).data.success&&($("Slot removed.","error"),await me())}catch{$("Failed to remove slot","error")}},K=async P=>{try{(await Ze.delete(`${ds}/api/availability/delete/${P}`)).data.success&&($("Availability removed.","error"),k(null),await me())}catch{$("Failed to delete","error")}},B=()=>{const P=["Date,Start Time,End Time,Status",...o.flatMap(Ce=>Ce.timeSlots.map(et=>`"${uo(Ce.date)}","${et.start}","${et.end}","${Ce.status}"`))].join(`
`),ge=new Blob([P],{type:"text/csv"}),be=URL.createObjectURL(ge),ke=document.createElement("a");ke.href=be,ke.download="mayor_availability.csv",ke.click()},j=o.filter(P=>uo(P.date).toLowerCase().includes(x.toLowerCase())),T=()=>{O===0?(Y(11),w(P=>P-1)):Y(P=>P-1)},q=()=>{O===11?(Y(0),w(P=>P+1)):Y(P=>P+1)},oe={border:"1.5px solid #c8e0cc",borderRadius:8,padding:"10px 12px",fontSize:14,color:"#1a4a2e",background:"#f8fdf8",outline:"none",cursor:"pointer",width:"100%",fontWeight:600};return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:"#f0f4f0",minHeight:"100vh",padding:G?"16px 12px":"24px"},children:[a.jsx("style",{children:`
        @keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        .avail-table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .avail-table { width: 100%; border-collapse: collapse; min-width: 560px; }
        .avail-card { background:#fff; border-radius:10px; padding:14px; margin-bottom:12px; box-shadow:0 1px 6px rgba(0,0,0,0.07); }
        .avail-card-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; }
        .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        @media (max-width: 639px) {
          .modal-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}),m&&a.jsx("div",{style:{position:"fixed",top:20,right:G?12:20,left:G?12:"auto",zIndex:9999,background:m.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"12px 20px",borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:m.msg}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsxs("div",{style:{marginBottom:12},children:[a.jsx("h1",{style:{margin:0,fontSize:G?20:26,fontWeight:700,color:"#1a4a2e"},children:"Mayor Availability"}),a.jsx("p",{style:{margin:"4px 0 0",color:"#5a7a6a",fontSize:G?12:14},children:"Mayor च्या available dates व time slots manage करा"})]}),a.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[a.jsx("button",{onClick:()=>{E(null),V(""),he(""),w(n.getFullYear()),Y(n.getMonth()),D(!0)},style:{background:"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:G?"9px 14px":"10px 20px",fontWeight:600,fontSize:G?13:14,cursor:"pointer",flex:G?1:"none"},children:"+ Add Availability"}),a.jsx("button",{onClick:B,style:{background:"#fff",color:"#1a7a4a",border:"2px solid #1a7a4a",borderRadius:8,padding:G?"9px 14px":"10px 20px",fontWeight:600,fontSize:G?13:14,cursor:"pointer",flex:G?1:"none"},children:"⬇ Export CSV"})]})]}),a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:G?14:24,boxShadow:"0 2px 12px rgba(0,0,0,0.07)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:10},children:[a.jsxs("h3",{style:{margin:0,fontSize:G?15:17,fontWeight:700,color:"#1a4a2e"},children:["Availability Records",a.jsx("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"2px 10px",fontSize:13,marginLeft:8},children:o.length})]}),a.jsx("input",{type:"text",placeholder:"🔍 Search by date...",value:x,onChange:P=>h(P.target.value),style:{border:"1.5px solid #d0e0d0",borderRadius:8,padding:"8px 14px",fontSize:13,outline:"none",width:G?"100%":220,color:"#1a4a2e"}})]}),s?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading availability..."]}):G?a.jsx("div",{children:j.length===0?a.jsx("div",{style:{textAlign:"center",padding:40,color:"#888",fontSize:14},children:"No availability records found."}):j.map((P,ge)=>{const be=new Date(P.date+"T00:00:00");return a.jsxs("div",{className:"avail-card",children:[a.jsxs("div",{className:"avail-card-row",children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#1a4a2e"},children:be.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}),a.jsx("div",{style:{fontSize:12,color:"#5a7a6a",marginTop:2},children:be.toLocaleDateString("en-IN",{weekday:"long"})})]}),a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:a.jsxs("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"4px 10px",fontSize:11,fontWeight:700},children:["✓ ",P.status]})})]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},children:P.timeSlots.map((ke,Ce)=>a.jsxs("span",{style:{background:"#e8f5ee",color:"#1a7a4a",borderRadius:6,padding:"4px 10px",fontSize:12,fontWeight:600,display:"inline-flex",alignItems:"center",gap:5},children:["🕐 ",ke.start," – ",ke.end,a.jsx("span",{onClick:()=>fe(P._id,Ce),title:"Remove slot",style:{cursor:"pointer",color:"#c0392b",fontWeight:800,fontSize:15,lineHeight:1,marginLeft:2},children:"×"})]},Ce))}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>C(P),style:{flex:1,background:"#e8f5ee",border:"none",borderRadius:7,padding:"8px 0",cursor:"pointer",color:"#1a7a4a",fontSize:13,fontWeight:600},children:"👁 View"}),a.jsx("button",{onClick:()=>k(P),style:{flex:1,background:"#fdecea",border:"none",borderRadius:7,padding:"8px 0",cursor:"pointer",color:"#c0392b",fontSize:13,fontWeight:600},children:"🗑 Delete"})]})]},P._id)})}):a.jsx("div",{className:"avail-table-wrap",children:a.jsxs("table",{className:"avail-table",children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:"#f0f7f2"},children:["#","Date","Day","Time Slots","Status","Actions"].map(P=>a.jsx("th",{style:{padding:"12px 14px",textAlign:"left",fontSize:13,fontWeight:700,color:"#1a4a2e",borderBottom:"2px solid #d4edda"},children:P},P))})}),a.jsx("tbody",{children:j.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:40,color:"#888",fontSize:14},children:"No availability records found."})}):j.map((P,ge)=>{const be=new Date(P.date+"T00:00:00");return a.jsxs("tr",{style:{borderBottom:"1px solid #eef4ee"},onMouseOver:ke=>ke.currentTarget.style.background="#f8fdf8",onMouseOut:ke=>ke.currentTarget.style.background="transparent",children:[a.jsx("td",{style:{padding:"12px 14px",fontSize:13,color:"#888"},children:ge+1}),a.jsx("td",{style:{padding:"12px 14px",fontSize:14,fontWeight:600,color:"#1a4a2e"},children:be.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}),a.jsx("td",{style:{padding:"12px 14px",fontSize:13,color:"#5a7a6a"},children:be.toLocaleDateString("en-IN",{weekday:"long"})}),a.jsx("td",{style:{padding:"12px 14px"},children:a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:P.timeSlots.map((ke,Ce)=>a.jsxs("span",{style:{background:"#e8f5ee",color:"#1a7a4a",borderRadius:6,padding:"4px 10px",fontSize:12,fontWeight:600,display:"inline-flex",alignItems:"center",gap:5},children:["🕐 ",ke.start," – ",ke.end,a.jsx("span",{onClick:()=>fe(P._id,Ce),title:"Remove slot",style:{cursor:"pointer",color:"#c0392b",fontWeight:800,fontSize:15,lineHeight:1,marginLeft:2},children:"×"})]},Ce))})}),a.jsx("td",{style:{padding:"12px 14px"},children:a.jsxs("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700},children:["✓ ",P.status]})}),a.jsx("td",{style:{padding:"12px 14px"},children:a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>C(P),style:{background:"#e8f5ee",border:"none",borderRadius:7,padding:"7px 10px",cursor:"pointer",color:"#1a7a4a",fontSize:14},children:"👁"}),a.jsx("button",{onClick:()=>k(P),style:{background:"#fdecea",border:"none",borderRadius:7,padding:"7px 10px",cursor:"pointer",color:"#c0392b",fontSize:14},children:"🗑"})]})})]},P._id)})})]})})]}),z&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:G?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:G?20:32,width:"100%",maxWidth:740,boxShadow:"0 8px 48px rgba(0,0,0,0.2)",maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{style:{margin:0,fontSize:G?16:20,fontWeight:700,color:"#1a4a2e"},children:"📅 Set Mayor Availability"}),a.jsx("button",{onClick:()=>D(!1),style:{background:"#f0f4f0",border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18},children:"✕"})]}),a.jsxs("div",{className:"modal-grid",children:[a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 14px",fontSize:14,fontWeight:700,color:"#1a4a2e"},children:"① Date Select करा"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[a.jsx("button",{onClick:T,style:{background:"#f0f4f0",border:"none",borderRadius:6,width:32,height:32,cursor:"pointer",fontSize:16},children:"←"}),a.jsxs("span",{style:{fontWeight:700,fontSize:15,color:"#1a4a2e"},children:[ek[O]," ",R]}),a.jsx("button",{onClick:q,style:{background:"#f0f4f0",border:"none",borderRadius:6,width:32,height:32,cursor:"pointer",fontSize:16},children:"→"})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:3,marginBottom:6},children:K4.map(P=>a.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:700,color:"#5a7a6a"},children:P},P))}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:3},children:[Array(ak(R,O)).fill(null).map((P,ge)=>a.jsx("div",{},"e"+ge)),Array(tk(R,O)).fill(null).map((P,ge)=>{const be=ge+1,ke=nk(R,O,be),Ce=J===ke,et=we.has(ke),tt=new Date(ke)<new Date(n.toDateString());return a.jsxs("button",{onClick:()=>{tt||(E(ke),V(""),he(""))},style:{border:"none",borderRadius:7,padding:"7px 0",cursor:tt?"not-allowed":"pointer",fontWeight:Ce?700:500,fontSize:12,background:Ce?"#1a7a4a":et?"#d4edda":"#f8faf8",color:Ce?"#fff":et?"#1a7a4a":tt?"#ccc":"#1a4a2e",position:"relative",transition:"all 0.15s"},children:[be,et&&!Ce&&a.jsx("span",{style:{position:"absolute",bottom:2,left:"50%",transform:"translateX(-50%)",width:4,height:4,borderRadius:"50%",background:"#1a7a4a",display:"block"}})]},be)})]}),J&&a.jsxs("div",{style:{marginTop:12,padding:"9px 12px",background:"#e8f5ee",borderRadius:8,fontSize:12,color:"#1a4a2e",fontWeight:600},children:["✓ ",uo(J)]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 14px",fontSize:14,fontWeight:700,color:"#1a4a2e"},children:"② Time Slot Select करा"}),J?a.jsxs(a.Fragment,{children:[o.find(P=>P.date===J)?.timeSlots.length>0&&a.jsxs("div",{style:{marginBottom:14,padding:"10px 12px",background:"#fff8e1",borderRadius:8,fontSize:12,color:"#b26a00"},children:[a.jsx("strong",{children:"⚠ Existing slots:"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginTop:5},children:o.find(P=>P.date===J)?.timeSlots.map((P,ge)=>a.jsxs("span",{style:{background:"#ffe082",color:"#7a4a00",borderRadius:6,padding:"3px 8px",fontSize:12,fontWeight:600},children:[P.start," – ",P.end]},ge))})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",display:"block",marginBottom:6},children:"START TIME"}),a.jsxs("select",{value:F,onChange:P=>{V(P.target.value),he("")},style:oe,children:[a.jsx("option",{value:"",children:"-- Start Time निवडा --"}),Us.slice(0,-1).map(P=>a.jsx("option",{value:P,children:P},P))]})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",display:"block",marginBottom:6},children:"END TIME"}),a.jsxs("select",{value:de,onChange:P=>he(P.target.value),style:{...oe,opacity:F?1:.5,cursor:F?"pointer":"not-allowed"},disabled:!F,children:[a.jsx("option",{value:"",children:"-- End Time निवडा --"}),W.map(P=>a.jsx("option",{value:P,children:P},P))]})]}),F&&de&&a.jsxs("div",{style:{padding:"14px 16px",background:"#e8f5ee",borderRadius:10,border:"2px solid #1a7a4a"},children:[a.jsx("div",{style:{fontSize:11,color:"#5a7a6a",fontWeight:700,marginBottom:4,letterSpacing:1},children:"SLOT PREVIEW"}),a.jsxs("div",{style:{fontSize:G?16:20,fontWeight:700,color:"#1a4a2e"},children:["🕐 ",F," → ",de]}),a.jsxs("div",{style:{fontSize:12,color:"#5a7a6a",marginTop:4},children:["Duration: ",ux(F,de)]})]})]}):a.jsx("div",{style:{background:"#f8faf8",borderRadius:10,padding:24,textAlign:"center",color:"#aaa",fontSize:13,border:"2px dashed #d0e0d0"},children:"← आधी date select करा"})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,marginTop:24},children:[a.jsx("button",{onClick:()=>D(!1),style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e",fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:ie,disabled:p,style:{flex:2,background:p?"#888":"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:p?"not-allowed":"pointer",fontSize:14},children:p?"Adding...":"+ Add Slot"})]})]})}),v&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:G?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:G?20:32,width:"100%",maxWidth:420,boxShadow:"0 8px 40px rgba(0,0,0,0.2)"},children:[a.jsx("h3",{style:{margin:"0 0 20px",color:"#1a4a2e",fontSize:G?16:18},children:"📅 Availability Details"}),a.jsxs("div",{style:{marginBottom:12},children:[a.jsx("span",{style:{fontSize:12,color:"#888",fontWeight:600},children:"DATE"}),a.jsx("p",{style:{margin:"4px 0 0",fontWeight:700,color:"#1a4a2e",fontSize:G?13:15},children:uo(v.date)})]}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("span",{style:{fontSize:12,color:"#888",fontWeight:600},children:"TIME SLOTS"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:8},children:v.timeSlots.map((P,ge)=>a.jsxs("div",{style:{background:"#e8f5ee",borderRadius:8,padding:"10px 14px",display:"flex",alignItems:"center",gap:10},children:[a.jsx("span",{style:{fontSize:16},children:"🕐"}),a.jsxs("span",{style:{fontWeight:700,color:"#1a4a2e",fontSize:G?13:15},children:[P.start," – ",P.end]}),a.jsx("span",{style:{fontSize:12,color:"#5a7a6a",marginLeft:"auto"},children:ux(P.start,P.end)})]},ge))})]}),a.jsx("button",{onClick:()=>C(null),style:{width:"100%",background:"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:"pointer",fontSize:14},children:"Close"})]})}),A&&a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:G?"12px":"0"},children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:G?20:32,width:"100%",maxWidth:380,boxShadow:"0 8px 40px rgba(0,0,0,0.2)",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:12},children:"🗑"}),a.jsx("h3",{style:{margin:"0 0 8px",color:"#1a4a2e",fontSize:G?16:18},children:"Delete Availability?"}),a.jsxs("p",{style:{color:"#666",fontSize:G?13:14,marginBottom:24},children:[a.jsx("strong",{children:uo(A.date)})," ची सर्व availability remove होईल."]}),a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("button",{onClick:()=>k(null),style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"11px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e"},children:"Cancel"}),a.jsx("button",{onClick:()=>K(A._id),style:{flex:1,background:"#c0392b",color:"#fff",border:"none",borderRadius:8,padding:"11px 0",fontWeight:700,cursor:"pointer"},children:"Delete"})]})]})})]})}function jp(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function rk(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function ok(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function s1(n){return n?n.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2):"?"}const px=["#6366f1","#0ea5e9","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6"];function c1(n){let o=0;for(let l=0;l<(n||"").length;l++)o=n.charCodeAt(l)+((o<<5)-o);return px[Math.abs(o)%px.length]}const fx={pending:{bg:"#fff8e1",color:"#b26a00",border:"#ffe082",dot:"#f59e0b",label:"Pending"},approved:{bg:"#d4edda",color:"#1a7a4a",border:"#a8d5b5",dot:"#1a7a4a",label:"Approved"},rejected:{bg:"#fdecea",color:"#c0392b",border:"#f5c6cb",dot:"#c0392b",label:"Rejected"},"in progress":{bg:"#e8f0fe",color:"#1a4a8a",border:"#93c5fd",dot:"#3b82f6",label:"In Progress"},resolved:{bg:"#e8f5ee",color:"#1a4a2e",border:"#a8d5b5",dot:"#22c55e",label:"Resolved"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",dot:"#9ca3af",label:"Expired"}};function wp(n){return fx[(n||"pending").toLowerCase()]||fx.pending}function lk({appt:n,onClose:o,onRefresh:l,showToast:s}){const[d,p]=b.useState(n.adminNote||""),[f,x]=b.useState(n.status||"pending"),[h,m]=b.useState(!1),[y,v]=b.useState(null),C=async()=>{try{m(!0);const A=new FormData;A.append("status",f),A.append("adminNote",d),y&&A.append("replyDocument",y),await Ot.patch(`/citizen/admin/update-status/${n._id}`,A,{headers:{"Content-Type":"multipart/form-data"}});const k=n.mobileNumber?.replace(/\D/g,"").slice(-10),z="Jan Samvaad",D="VVCMC",R="VVCMCJS",w="Vasai Virar City Municipal Corporation",O=n.fullName,Y=n.microStart,J=n.microEnd,E=n.tokenId,F={pending:"Pending — Awaiting Mayor's Approval",approved:"Approved by Respected Mayor Ajiv Patil Sir",rejected:"Rejected by Respected Mayor Ajiv Patil Sir",cancelled:"Cancelled"}[f]||f;if(k){console.log("mobile>>>>",k,z,D,"Repected Mayor Ajiv Patil Sir",R,n.preferredDate,jp(n.preferredDate),n.microSlot,n.slotTime,n.tokenId);const de=`Dear ${n.fullName}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been updated. Appointment Status: ${F} Date: ${jp(n.preferredDate)} Time Slot: ${Y} - ${J} Token No: ${E} Please carry this Token No on your visit day. SAAVI INFINET`,he=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379326&number=${k}&message=${encodeURIComponent(de)}`;fetch(he,{method:"GET",mode:"no-cors"}).catch(()=>{})}s(`Status updated to "${f}" & citizen notified!`,"success"),l(),o()}catch(A){s(A?.response?.data?.message||"Update failed","error")}finally{m(!1)}};return wp(f),a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:o,children:a.jsxs("div",{style:{background:"#fff",borderRadius:16,width:"100%",maxWidth:560,maxHeight:"92vh",overflowY:"auto",boxShadow:"0 8px 48px rgba(0,0,0,0.2)",fontFamily:"'Segoe UI', sans-serif"},onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 28px",borderBottom:"2px solid #d4edda",background:"#f0f7f2",borderRadius:"16px 16px 0 0"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:c1(n.fullName),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:16},children:s1(n.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:11,color:"#5a7a6a",fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"Application Details"}),a.jsx("h3",{style:{margin:"3px 0 0",fontSize:18,fontWeight:700,color:"#1a4a2e"},children:n.tokenId||n._id?.slice(-8)})]})]}),a.jsx("button",{onClick:o,style:{background:"#e8f5ee",border:"none",borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18,color:"#1a4a2e"},children:"✕"})]}),a.jsxs("div",{style:{padding:"22px 28px"},children:[n.visitorPhoto&&a.jsx("div",{style:{textAlign:"center",marginBottom:16},children:a.jsx("img",{src:n.visitorPhoto.startsWith("http")?n.visitorPhoto:`http://localhost:5000/${n.visitorPhoto}`,alt:"visitor",style:{width:80,height:80,borderRadius:"50%",objectFit:"cover",border:"3px solid #1a7a4a"}})}),a.jsx("div",{style:{border:"1.5px solid #d4edda",borderRadius:10,overflow:"hidden",marginBottom:16},children:[["Applicant",n.fullName],["Mobile",n.mobileNumber],["Email",n.email||"—"],["Ward",n.ward||"—"],["Address",n.address||"—"],["Preferred Date",ok(n.preferredDate)],["Time Slot",n.slotTime||"—"],["Visitors",n.numberOfVisitors],["Visited Before",n.visitedBefore?"Yes":"No"],["Purpose",n.purpose],["Submitted On",rk(n.createdAt)]].filter(([,A])=>A).map(([A,k])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 14px",borderBottom:"1px solid #eef4ee",fontSize:13},children:[a.jsx("span",{style:{color:"#5a7a6a",fontWeight:600,flexShrink:0,width:130},children:A}),a.jsx("span",{style:{color:"#1a4a2e",fontWeight:700,textAlign:"right",wordBreak:"break-word"},children:k})]},A))}),n.qrCode&&a.jsxs("div",{style:{textAlign:"center",padding:"12px 0 8px",borderTop:"1px solid #eef4ee",marginBottom:12},children:[a.jsx("p",{style:{fontSize:11,color:"#5a7a6a",marginBottom:6,fontWeight:600},children:"QR Code"}),a.jsx("img",{src:n.qrCode,alt:"QR",style:{width:110,height:110}})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Update Status"}),a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["pending","approved","rejected"].map(A=>{const k=wp(A),z=f===A;return a.jsxs("button",{onClick:()=>x(A),style:{padding:"6px 16px",borderRadius:20,border:`1.5px solid ${z?k.border:"#c8e0cc"}`,background:z?k.bg:"#f8fdf8",color:z?k.color:"#5a7a6a",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"},children:[a.jsx("span",{style:{display:"inline-block",width:7,height:7,borderRadius:"50%",background:z?k.dot:"#a8c8b0",marginRight:5,verticalAlign:"middle"}}),k.label]},A)})})]}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Reply / Note to Citizen"}),a.jsx("textarea",{value:d,onChange:A=>p(A.target.value),placeholder:"Write a note or reply that will be sent to the citizen as acknowledgement...",rows:4,style:{width:"100%",padding:"10px 14px",fontSize:13,border:"1.5px solid #c8e0cc",borderRadius:8,outline:"none",fontFamily:"'Segoe UI', sans-serif",resize:"vertical",boxSizing:"border-box",color:"#1a4a2e",background:"#f8fdf8",transition:"border-color .15s"},onFocus:A=>A.target.style.borderColor="#1a7a4a",onBlur:A=>A.target.style.borderColor="#c8e0cc"})]}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#1a4a2e",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.4},children:"Attach Reply Document"}),a.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png,.webp",onChange:A=>v(A.target.files[0]),style:{border:"1.5px solid #c8e0cc",borderRadius:8,padding:"8px 12px",fontSize:13,color:"#1a4a2e",background:"#f8fdf8",width:"100%",boxSizing:"border-box"}})]}),a.jsx("div",{style:{background:"#e8f5ee",border:"1.5px solid #a8d5b5",borderRadius:8,padding:"10px 14px",marginBottom:16,fontSize:12,color:"#1a4a2e"},children:"ℹ️ Saving will update the citizen's application status and send an acknowledgement notification automatically."}),a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("button",{onClick:o,style:{flex:1,background:"#f0f4f0",border:"none",borderRadius:8,padding:"12px 0",fontWeight:600,cursor:"pointer",color:"#1a4a2e",fontSize:14},children:"Cancel"}),a.jsx("button",{onClick:C,disabled:h,style:{flex:2,background:h?"#888":"#1a7a4a",color:"#fff",border:"none",borderRadius:8,padding:"12px 0",fontWeight:700,cursor:h?"not-allowed":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:h?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:13,height:13,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Saving..."]}):"✔ Save & Notify Citizen"})]})]})]})})}function sk(){const[n,o]=b.useState([]),[l,s]=b.useState(!0),[d,p]=b.useState(""),[f,x]=b.useState("all"),[h,m]=b.useState(null),[y,v]=b.useState(null),[C,A]=b.useState([]),[k,z]=b.useState(!1),D=(E,F="success")=>{v({msg:E,type:F}),setTimeout(()=>v(null),3500)},R=async()=>{try{s(!0);const E=await Ot.get("/citizen/admin/all-appointments");E.data.success&&o(E.data.appointments||[])}catch{}finally{s(!1)}};b.useEffect(()=>{R()},[]);const w={all:n.length,pending:n.filter(E=>E.status?.toLowerCase()==="pending").length,"in progress":n.filter(E=>E.status?.toLowerCase()==="in progress").length,approved:n.filter(E=>E.status?.toLowerCase()==="approved").length,rejected:n.filter(E=>E.status?.toLowerCase()==="rejected").length,resolved:n.filter(E=>E.status?.toLowerCase()==="resolved").length},O=n.filter(E=>{const F=f==="all"||E.status?.toLowerCase()===f,V=d.toLowerCase(),de=!V||E.fullName?.toLowerCase().includes(V)||E.tokenId?.toLowerCase().includes(V)||E.purpose?.toLowerCase().includes(V)||E.mobileNumber?.includes(V)||E.ward?.toLowerCase().includes(V);return F&&de}),Y=()=>{k?(A([]),z(!1)):(A(O.map((E,F)=>F)),z(!0))},J=E=>A(F=>F.includes(E)?F.filter(V=>V!==E):[...F,E]);return a.jsxs("div",{style:{fontFamily:"'Segoe UI', sans-serif",background:"#f0f4f0",minHeight:"100vh",padding:"24px"},children:[y&&a.jsx("div",{style:{position:"fixed",top:20,right:20,zIndex:9999,background:y.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"12px 20px",borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.2)",fontSize:14,fontWeight:600,animation:"fadeIn 0.3s ease"},children:y.msg}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24},children:[a.jsxs("div",{children:[a.jsxs("h1",{style:{margin:0,fontSize:26,fontWeight:700,color:"#1a4a2e",display:"flex",alignItems:"center",gap:10},children:["Applications For Appointment",a.jsx("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"2px 10px",fontSize:13,fontWeight:700},children:n.length})]}),a.jsx("p",{style:{margin:"4px 0 0",color:"#5a7a6a",fontSize:14},children:"CitizenBridge — Inward Records · All citizen appointment requests"})]}),a.jsx("button",{onClick:R,style:{background:"#fff",color:"#1a7a4a",border:"2px solid #1a7a4a",borderRadius:8,padding:"10px 20px",fontWeight:600,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",gap:7},children:"↻ Refresh"})]}),a.jsxs("div",{style:{position:"relative",marginBottom:16},children:[a.jsx("span",{style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:15,color:"#5a7a6a"},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search by name, token ID, mobile, purpose, ward...",value:d,onChange:E=>p(E.target.value),style:{width:"100%",padding:"10px 14px 10px 40px",fontSize:13,border:"1.5px solid #c8e0cc",borderRadius:8,outline:"none",fontFamily:"'Segoe UI', sans-serif",background:"#fff",color:"#1a4a2e",boxSizing:"border-box"}})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap"},children:[[{key:"all",label:"All",count:w.all},{key:"pending",label:"Pending",count:w.pending},{key:"in progress",label:"In Progress",count:w["in progress"]},{key:"approved",label:"Approved",count:w.approved},{key:"resolved",label:"Resolved",count:w.resolved},{key:"rejected",label:"Rejected",count:w.rejected}].map(E=>a.jsxs("button",{onClick:()=>{x(E.key),A([]),z(!1)},style:{padding:"7px 18px",borderRadius:20,fontSize:13,fontWeight:600,cursor:"pointer",border:f===E.key?"none":"1.5px solid #c8e0cc",background:f===E.key?"#1a7a4a":"#fff",color:f===E.key?"#fff":"#5a7a6a",transition:"all .15s"},children:[E.label," ",E.count]},E.key)),f!=="all"&&a.jsx("button",{onClick:()=>x("all"),style:{marginLeft:"auto",fontSize:12,color:"#1a7a4a",background:"none",border:"none",cursor:"pointer",fontWeight:600},children:"CLEAR"})]}),a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:0,boxShadow:"0 2px 12px rgba(0,0,0,0.07)",overflowX:"auto"},children:[a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px 12px",borderBottom:"2px solid #d4edda"},children:a.jsxs("h3",{style:{margin:0,fontSize:17,fontWeight:700,color:"#1a4a2e"},children:["Application Records",a.jsx("span",{style:{background:"#d4edda",color:"#1a7a4a",borderRadius:20,padding:"2px 10px",fontSize:13,marginLeft:8},children:n.length})]})}),l?a.jsxs("div",{style:{textAlign:"center",padding:60,color:"#888"},children:[a.jsx("div",{style:{fontSize:32,marginBottom:12},children:"⏳"}),"Loading applications..."]}):a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:1100},children:[a.jsx("thead",{children:a.jsxs("tr",{style:{background:"#f0f7f2"},children:[a.jsx("th",{style:gx,children:a.jsx("input",{type:"checkbox",checked:k,onChange:Y,style:{width:15,height:15,cursor:"pointer",accentColor:"#1a7a4a"}})}),["Reply","#","Applicant","Token / Inward No","Purpose / Subject","Status","Date","Slot",""].map(E=>a.jsx("th",{style:gx,children:E},E))]})}),a.jsx("tbody",{children:O.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:10,style:{textAlign:"center",padding:48,color:"#888",fontSize:14},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"📋"}),d?"No matching applications found.":"No applications yet."]})}):O.map((E,F)=>{const V=wp(E.status),de=C.includes(F),he=c1(E.fullName);return a.jsxs("tr",{style:{borderBottom:"1px solid #eef4ee",background:de?"#f0f7f2":"transparent",cursor:"pointer"},onMouseOver:G=>{de||(G.currentTarget.style.background="#f8fdf8")},onMouseOut:G=>{G.currentTarget.style.background=de?"#f0f7f2":"transparent"},onClick:()=>m(E),children:[a.jsx("td",{style:Da,onClick:G=>G.stopPropagation(),children:a.jsx("input",{type:"checkbox",checked:de,onChange:()=>J(F),style:{width:15,height:15,cursor:"pointer",accentColor:"#1a7a4a"}})}),a.jsx("td",{style:Da,onClick:G=>G.stopPropagation(),children:a.jsx("button",{onClick:()=>m(E),style:{background:"#e8f5ee",border:"1.5px solid #1a7a4a",borderRadius:7,padding:"5px 12px",cursor:"pointer",color:"#1a7a4a",fontSize:12,fontWeight:700},children:"Reply"})}),a.jsx("td",{style:{...Da,color:"#888",fontSize:13},children:F+1}),a.jsx("td",{style:Da,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:he,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:13,flexShrink:0},children:s1(E.fullName)}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:13,fontWeight:700,color:"#1a4a2e"},children:E.fullName||"—"}),a.jsx("p",{style:{margin:0,fontSize:11,color:"#5a7a6a"},children:E.mobileNumber||"—"})]})]})}),a.jsx("td",{style:Da,children:a.jsx("span",{style:{background:"#e8f5ee",color:"#1a7a4a",borderRadius:6,padding:"3px 10px",fontSize:12,fontWeight:600},children:E.tokenId||E._id?.slice(-10)||"—"})}),a.jsx("td",{style:{...Da,maxWidth:240},children:a.jsx("span",{style:{fontSize:13,color:"#1a4a2e",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block"},title:E.purpose,children:E.purpose?.length>50?E.purpose.slice(0,50)+"…":E.purpose||"—"})}),a.jsx("td",{style:Da,children:a.jsxs("span",{style:{background:V.bg,color:V.color,border:`1px solid ${V.border}`,borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,display:"inline-flex",alignItems:"center",gap:5,whiteSpace:"nowrap"},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:V.dot,display:"inline-block"}}),V.label]})}),a.jsx("td",{style:{...Da,fontSize:12,color:"#5a7a6a"},children:jp(E.preferredDate)}),a.jsx("td",{style:Da,children:a.jsx("span",{style:{fontSize:12,color:"#1a7a4a",background:"#e8f5ee",padding:"3px 10px",borderRadius:20,fontWeight:600,whiteSpace:"nowrap"},children:E.slotTime||"—"})}),a.jsx("td",{style:{...Da,fontSize:12,color:"#5a7a6a"},children:E.ward||"—"})]},E._id||F)})})]}),!l&&O.length>0&&a.jsxs("div",{style:{padding:"12px 20px",borderTop:"1px solid #eef4ee",fontSize:12,color:"#5a7a6a",display:"flex",justifyContent:"space-between"},children:[a.jsxs("span",{children:["Showing ",a.jsx("strong",{style:{color:"#1a4a2e"},children:O.length})," of ",a.jsx("strong",{style:{color:"#1a4a2e"},children:n.length})," applications",C.length>0&&a.jsxs("span",{style:{color:"#1a7a4a",fontWeight:700},children:[" · ",C.length," selected"]})]}),a.jsx("span",{children:"💡 Click any row to view full details & reply"})]})]}),h&&a.jsx(lk,{appt:h,onClose:()=>m(null),onRefresh:R,showToast:D}),a.jsx("style",{children:"@keyframes fadeIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } } @keyframes spin { to { transform: rotate(360deg); } }"})]})}const gx={padding:"12px 14px",textAlign:"left",fontSize:13,fontWeight:700,color:"#1a4a2e",borderBottom:"2px solid #d4edda",whiteSpace:"nowrap"},Da={padding:"12px 14px",fontSize:14,color:"#1a4a2e"},mx=["Super Admin","Guardian Minister","Mayor","Admin"],hx=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}};function ck(n,o,l,s){if(!n||!o||!l)return!1;const d=new Date,[p,f,x]=n.split("-").map(Number);let h=parseInt(o,10);s==="PM"&&h!==12&&(h+=12),s==="AM"&&h===12&&(h=0);const m=new Date(p,f-1,x,h,parseInt(l,10),0);return d>=m}function dk({onDecisionExtracted:n,onTranscriptUpdate:o,onRecordingReady:l}){const[s,d]=b.useState(!1),[p,f]=b.useState(!1),[x,h]=b.useState(!1),[m,y]=b.useState(""),[v,C]=b.useState(!1),[A,k]=b.useState(null),[z,D]=b.useState(null),R=b.useRef(null),w=b.useRef(null),O=b.useRef(null),Y=b.useRef([]),J=b.useRef(null),E=b.useRef(null),F=b.useRef(!1),V=-42,de=2e3,he=me=>{const we=new(window.AudioContext||window.webkitAudioContext),W=we.createAnalyser();W.fftSize=512,we.createMediaStreamSource(me).connect(W),R.current=we;const ie=new Uint8Array(W.frequencyBinCount),fe=()=>{J.current=requestAnimationFrame(fe),W.getByteFrequencyData(ie);const K=ie.reduce((T,q)=>T+q,0)/ie.length,j=(K===0?-1/0:20*Math.log10(K/255))>V;j!==F.current&&(F.current=j,f(j),j?(clearTimeout(E.current),y("🗣️ Speaking...")):(y("🤫 Silence..."),E.current=setTimeout(()=>{F.current||y("👂 Waiting...")},de)))};fe()},G=async()=>{D(null);try{const me=await navigator.mediaDevices.getUserMedia({audio:!0});if(w.current=me,he(me),x){Y.current=[],C(!1),k(null);const we=new MediaRecorder(me);we.ondataavailable=W=>{W.data.size>0&&Y.current.push(W.data)},we.onstop=()=>{const W=new Blob(Y.current,{type:"audio/webm"}),ie=URL.createObjectURL(W);k(ie),C(!0),l?.(ie)},we.start(),O.current=we}d(!0),y("👂 Waiting for someone to speak...")}catch(me){const we=me?.name==="NotAllowedError"||me?.name==="PermissionDeniedError",W=me?.name==="NotFoundError";D(W?"notfound":we?"denied":"other"),y("")}},pe=()=>{cancelAnimationFrame(J.current),clearTimeout(E.current),R.current?.close(),w.current?.getTracks().forEach(me=>me.stop()),O.current?.state==="recording"&&O.current.stop(),F.current=!1,f(!1),d(!1),y("⏹️ Session ended.")},$=()=>{pe(),k(null),C(!1),y("")};return a.jsxs("div",{className:"mr-wrap",children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14,marginBottom:12},children:[a.jsx("div",{className:`mr-vad-ring ${p?"speaking":""}`,children:p?"🗣️":s?"👂":"🎙️"}),a.jsxs("div",{style:{flex:1},children:[a.jsxs("label",{className:"mr-toggle",children:[a.jsx("input",{type:"checkbox",checked:x,onChange:me=>h(me.target.checked),disabled:s,style:{display:"none"}}),a.jsx("div",{className:`mr-toggle-track ${x?"on":""}`,children:a.jsx("div",{className:"mr-toggle-thumb"})}),a.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#3a6b50"},children:x?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"mr-rec-dot"}),"Audio Recording ON"]}):"Audio Recording (optional)"})]}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[s?a.jsx("button",{className:"mr-btn mr-btn-grey",onClick:pe,children:"⏹ Stop Session"}):a.jsx("button",{className:"mr-btn mr-btn-green",onClick:G,children:"▶ Start Session"}),a.jsx("button",{className:"mr-btn mr-btn-red",onClick:$,disabled:s,children:"🔄 Reset"})]})]})]}),z&&a.jsxs("div",{style:{background:z==="notfound"?"#fff8e1":"#fdecea",border:`1.5px solid ${z==="notfound"?"#ffe082":"#f5c6c2"}`,borderRadius:10,padding:"12px 14px",marginBottom:12,fontSize:13,fontWeight:500,color:"#3a2a2a"},children:[z==="denied"&&a.jsx("div",{style:{fontWeight:800,color:"#c0392b"},children:"🚫 Microphone Permission Denied"}),z==="notfound"&&a.jsx("div",{style:{fontWeight:800,color:"#b07a00"},children:"🎤 Microphone Not Found"}),z==="other"&&a.jsx("div",{style:{fontWeight:800,color:"#c0392b"},children:"❌ Microphone Could Not Start — Refresh page"})]}),a.jsx("div",{style:{fontSize:12,fontWeight:600,color:"#7a9a88",minHeight:16,marginBottom:10},children:m}),v&&A&&a.jsxs("div",{style:{marginTop:10,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#1a4a2e"},children:"🔴 Recording ready:"}),a.jsx("a",{href:A,download:"meeting-recording.webm",className:"mr-btn mr-btn-teal",style:{textDecoration:"none"},children:"⬇ Download"}),a.jsx("audio",{controls:!0,src:A,style:{height:32,flex:1,minWidth:120}})]})]})}function uk(){const n=vt(),[o,l]=b.useState([]),[s,d]=b.useState(""),[p,f]=b.useState(!1),[x,h]=b.useState(null),[m,y]=b.useState(!1),[v,C]=b.useState(null),[A,k]=b.useState(null),[z,D]=b.useState(window.innerWidth<640),[R,w]=b.useState(!1),O=b.useRef(null),[Y,J]=b.useState(null),[E,F]=b.useState(null),V=b.useRef(""),[de,he]=b.useState([]),[G,pe]=b.useState([]),[$,me]=b.useState(null),W=hx()?.role||"",ie=mx.includes(W);b.useEffect(()=>{const M=()=>D(window.innerWidth<640);return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);const fe=M=>{const L=new Date,ne=L.getFullYear(),ce=L.toLocaleString("en-US",{month:"short"}).toUpperCase(),xe=String(L.getDate()).padStart(2,"0"),Ye=String((M?.length??0)+1).padStart(4,"0");return`MTG-${ne}-${ce}-${xe}-${Ye}`},K={meetingNumber:"",meetingType:"",meetingDate:"",meetingHour:"",meetingMinute:"",meetingAmpm:"AM"},[B,j]=b.useState(K),T=ck(B.meetingDate,B.meetingHour,B.meetingMinute,B.meetingAmpm),q=(M,L="success")=>{h({msg:M,type:L}),setTimeout(()=>h(null),3e3)},oe=M=>{if(!M)return"-";const[L,ne]=M.split(":");let ce=parseInt(L,10);const xe=ce>=12?"PM":"AM";return ce=ce%12||12,`${ce}:${ne} ${xe}`},P=async(M="")=>{try{y(!0);const L=M?{search:M}:{},ce=(await Ue.get("/getMeetings",{params:L})).data;if(ce.success){const xe=hx(),Ye=xe?.role||"",bt=xe?.departmentName||"",Ke=mx.includes(Ye),Dt=ce.data||[];if(Ke)l(Dt);else if(["corporator","ward councillor"].includes(Ye.toLowerCase()))l(Dt);else{const St=Dt.filter(ze=>Array.isArray(ze.subjects)&&ze.subjects.some(it=>Array.isArray(it.tagTo)&&it.tagTo.includes(bt)));l(St)}}else q(ce.message||"Failed to fetch","error")}catch{q("Server error.","error")}finally{y(!1)}};b.useEffect(()=>{P()},[]),b.useEffect(()=>{const M=setTimeout(()=>P(s),400);return()=>clearTimeout(M)},[s]);const ge=M=>j({...B,[M.target.name]:M.target.value}),be=async()=>{C(null),w(!1),O.current=null,J(null),F(null),V.current="",he([]),pe([]),f(!0);try{const L=(await Ue.get("/getNextMeetingId")).data;j({...K,meetingNumber:L.success?L.meetingId:fe(o)})}catch{j({...K,meetingNumber:fe(o)})}},ke=M=>{C(M._id),j({meetingNumber:M.meetingNumber,meetingType:M.meetingType,meetingDate:M.meetingDate?M.meetingDate.slice(0,10):"",meetingHour:M.meetingTime?(()=>{const L=parseInt(M.meetingTime.split(":")[0],10);return String(L%12||12).padStart(2,"0")})():"",meetingMinute:M.meetingTime?M.meetingTime.split(":")[1]:"",meetingAmpm:M.meetingTime&&parseInt(M.meetingTime.split(":")[0],10)>=12?"PM":"AM"}),w(!1),V.current=M.aiExtractedDecision||"",O.current=M.meetingRecording||null,J(M.meetingRecording||null),F(null),he([]),pe(M.agendaFiles||[]),f(!0)},Ce=()=>{if(!B.meetingHour||!B.meetingMinute)return"";let M=parseInt(B.meetingHour,10);return B.meetingAmpm==="PM"&&M!==12&&(M+=12),B.meetingAmpm==="AM"&&M===12&&(M=0),`${String(M).padStart(2,"0")}:${B.meetingMinute}`},et=async()=>{try{y(!0);const M=new FormData;M.append("meetingNumber",B.meetingNumber),M.append("meetingType",B.meetingType),B.meetingDate&&M.append("meetingDate",B.meetingDate),Ce()&&M.append("meetingTime",Ce()),de.forEach(ce=>M.append("agendaFiles",ce));const ne=(await Ue.post("/createMeeting",M)).data;ne.success?(f(!1),q("Meeting created!"),P(s)):q(ne.message||"Failed","error")}catch{q("Server error.","error")}finally{y(!1)}},tt=async()=>{try{y(!0);const M=new FormData;M.append("meetingNumber",B.meetingNumber),M.append("meetingType",B.meetingType),B.meetingDate&&M.append("meetingDate",B.meetingDate),Ce()&&M.append("meetingTime",Ce());const L=V.current?.trim();L&&M.append("aiExtractedDecision",L),M.append("existingAgendaFiles",JSON.stringify(G)),de.forEach(Ye=>M.append("agendaFiles",Ye)),E&&M.append("meetingRecording",E);const ne=O.current;if(ne&&ne.startsWith("blob:"))try{const bt=await(await fetch(ne)).blob();M.append("meetingRecordingBlob",new File([bt],"auto-recording.webm",{type:"audio/webm"}))}catch{}else ne&&!E&&M.append("existingRecordingUrl",ne);const xe=(await Ue.put(`/updateMeeting/${v}`,M)).data;xe.success?(f(!1),C(null),q("Meeting updated!"),P(s)):q(xe.message||"Failed","error")}catch{q("Server error.","error")}finally{y(!1)}},Xt=()=>{if(!B.meetingNumber||!B.meetingType){q("Please fill required fields","error");return}v?tt():et()},Lt=async M=>{try{y(!0);const ne=(await Ue.delete(`/deleteMeeting/${M}`)).data;ne.success?(k(null),q("Meeting deleted!"),P(s)):q(ne.message||"Failed","error")}catch{q("Server error.","error")}finally{y(!1)}},le=M=>{n(`/proceedingsmeeting/${M._id}`,{state:{meetingNumber:M.meetingNumber,meetingType:M.meetingType,meetingDate:M.meetingDate||null,meetingTime:M.meetingTime||null}})},je=M=>{const L=M.match(/\.pdf$/i),ne=M.match(/\.(doc|docx)$/i),ce=M.match(/\.(xls|xlsx)$/i),xe=M.match(/\.(png|jpg|jpeg|gif|webp)$/i);return{type:L?"pdf":ne?"doc":ce?"xl":xe?"img":"other",icon:L?"📄":ne?"📝":ce?"📊":xe?"🖼️":"📁",label:L?"PDF":ne?"DOC":ce?"Excel":xe?"Image":"File"}},X=async M=>{const{type:L}=je(M),ne=M.split("/").pop()?.split("?")[0]||"Document";if(L==="img"){me({url:M,name:ne,type:L});return}try{const xe=(await Ue.post("/getSignedFileUrl",{fileUrl:M})).data;xe.success?me({url:xe.url,name:ne,type:L}):me({url:M,name:ne,type:L})}catch{me({url:M,name:ne,type:L})}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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


     
      `}),a.jsxs("div",{className:"pm-wrap",style:{background:"#f0f4f0",minHeight:"100vh",padding:z?12:24},children:[x&&a.jsx("div",{style:{position:"fixed",top:16,right:16,left:z?16:"auto",background:x.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"10px 18px",borderRadius:8,fontWeight:700,fontSize:13.5,zIndex:9999,fontFamily:"'Nunito Sans', sans-serif"},children:x.msg}),a.jsxs("div",{style:{marginBottom:16},children:[a.jsx("h1",{className:"pm-title",children:"Meeting Proceedings"}),ie&&a.jsx("p",{className:"pm-subtitle",children:"Sabha Kamkaj manage करा"}),ie&&a.jsx("button",{className:"pm-btn-primary",onClick:be,children:"+ Create Meeting"})]}),a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?12:20,overflowX:"auto"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:z?"column":"row",justifyContent:"space-between",alignItems:z?"flex-start":"center",gap:10,marginBottom:15},children:[a.jsxs("h3",{className:"pm-section-title",children:["Records (",o.length,")"]}),a.jsx("input",{className:"pm-search",placeholder:"Search meeting no...",value:s,onChange:M=>d(M.target.value),style:{width:z?"100%":"auto"}})]}),z?a.jsx("div",{children:m?a.jsx("div",{style:{textAlign:"center",padding:20,color:"#8a9a90"},children:"Loading..."}):o.length===0?a.jsx("div",{style:{textAlign:"center",padding:20,color:"#8a9a90"},children:"No records found"}):o.map((M,L)=>a.jsxs("div",{className:"pm-card",onClick:()=>le(M),children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[a.jsxs("span",{style:{fontWeight:800,color:"#1a4a2e",fontSize:14},children:["#",L+1," —"," ",a.jsx("span",{style:{background:"#e6f4ec",color:"#1a6640",fontWeight:700,fontSize:12.5,padding:"3px 10px",borderRadius:6},children:M.meetingNumber}),a.jsx("span",{className:"pm-click-hint",children:"tap → subjects"})]}),a.jsxs("div",{style:{display:"flex",gap:6},onClick:ne=>ne.stopPropagation(),children:[Array.isArray(M.agendaFiles)&&M.agendaFiles.length>0&&a.jsx("div",{style:{display:"flex",gap:4},children:M.agendaFiles.map((ne,ce)=>{const{icon:xe}=je(ne);return a.jsx("button",{className:"pm-file-btn",title:`View File ${ce+1}`,onClick:()=>X(ne),children:xe},ce)})}),ie&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"pm-btn-edit",onClick:()=>ke(M),children:"✏️"}),a.jsx("button",{className:"pm-btn-delete",onClick:()=>k(M._id),children:"🗑️"})]})]})]}),a.jsxs("div",{className:"pm-card-row",children:[a.jsx("span",{className:"pm-card-label",children:"Type"}),a.jsx("span",{children:M.meetingType||"-"})]}),a.jsxs("div",{className:"pm-card-row",children:[a.jsx("span",{className:"pm-card-label",children:"Date"}),a.jsx("span",{children:M.meetingDate?new Date(M.meetingDate).toLocaleDateString("en-IN"):"-"})]}),a.jsxs("div",{className:"pm-card-row",children:[a.jsx("span",{className:"pm-card-label",children:"Time"}),a.jsx("span",{className:"time-badge",children:oe(M.meetingTime)})]})]},M._id))}):a.jsxs("table",{className:"pm-table",style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[["#","Meeting No","Type","Date","Time"].map(M=>a.jsx("th",{children:M},M)),ie&&a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:m?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:24,color:"#8a9a90"},children:"Loading..."})}):o.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",padding:24,color:"#8a9a90"},children:"No records found"})}):o.map((M,L)=>a.jsxs("tr",{children:[a.jsx("td",{children:L+1}),a.jsx("td",{children:a.jsx("span",{className:"meeting-no-link",onClick:()=>le(M),title:"Click to view/add subjects",children:M.meetingNumber})}),a.jsx("td",{children:M.meetingType}),a.jsx("td",{children:M.meetingDate?new Date(M.meetingDate).toLocaleDateString("en-IN"):"-"}),a.jsx("td",{children:a.jsx("span",{className:"time-badge",children:oe(M.meetingTime)})}),ie&&a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[Array.isArray(M.agendaFiles)&&M.agendaFiles.length>0&&a.jsx("div",{style:{display:"flex",gap:4},children:M.agendaFiles.map((ne,ce)=>{const{icon:xe}=je(ne);return a.jsx("button",{className:"pm-file-btn",title:`View File ${ce+1}`,onClick:()=>X(ne),children:xe},ce)})}),a.jsx("button",{className:"pm-btn-edit",onClick:()=>ke(M),children:"✏️ Edit"}),a.jsx("button",{className:"pm-btn-delete",onClick:()=>k(M._id),children:"🗑️ Delete"})]})})]},M._id))})]})]}),p&&a.jsx("div",{style:xx,children:a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?16:25,width:z?"95%":"60%",maxWidth:680,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{className:"pm-modal-title",children:v?"Edit Meeting":"Create Meeting"}),a.jsx("button",{onClick:()=>f(!1),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:z?"1fr":"1fr 1fr",gap:14},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsxs("label",{className:"pm-label",children:["Meeting Number ",a.jsx("span",{className:"pm-auto-badge",children:"Auto Generated"})]}),a.jsx("input",{className:"pm-input-readonly",value:B.meetingNumber,readOnly:!0})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Type Of Meeting"}),a.jsxs("select",{className:"pm-input",name:"meetingType",value:B.meetingType,onChange:ge,children:[a.jsx("option",{value:"",children:"Select Type"}),a.jsx("option",{children:"General Body"}),a.jsx("option",{children:"Standing Committee"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Meeting Date"}),a.jsx("input",{className:"pm-input",name:"meetingDate",type:"date",value:B.meetingDate,onChange:ge})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"pm-label",children:"Meeting Time"}),a.jsxs("div",{style:{display:"flex",gap:6},children:[a.jsxs("select",{className:"pm-input",name:"meetingHour",value:B.meetingHour,onChange:ge,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"",children:"HH"}),Array.from({length:12},(M,L)=>String(L+1).padStart(2,"0")).map(M=>a.jsx("option",{value:M,children:M},M))]}),a.jsxs("select",{className:"pm-input",name:"meetingMinute",value:B.meetingMinute,onChange:ge,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"",children:"MM"}),["00","05","10","15","20","25","30","35","40","45","50","55"].map(M=>a.jsx("option",{value:M,children:M},M))]}),a.jsxs("select",{className:"pm-input",name:"meetingAmpm",value:B.meetingAmpm,onChange:ge,style:{flex:1,padding:"10px 4px"},children:[a.jsx("option",{value:"AM",children:"AM"}),a.jsx("option",{value:"PM",children:"PM"})]})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsxs("label",{className:"pm-label",children:["Agenda",a.jsx("span",{style:{fontSize:11,color:"#8a9a90",fontWeight:500,marginLeft:6},children:"(PDF, Word, Excel, PNG, JPG — max 12, optional)"})]}),a.jsxs("div",{style:{border:"1.5px dashed #c8e0cc",borderRadius:8,padding:"10px 14px",background:"#f7fbf8"},children:[G.length>0&&a.jsxs("div",{style:{marginBottom:8},children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#5a7a6a",marginBottom:4},children:"Existing Files:"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:G.map((M,L)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,background:"#e6f4ec",borderRadius:6,padding:"3px 8px"},children:[a.jsxs("button",{onClick:()=>X(M),style:{background:"none",border:"none",cursor:"pointer",fontSize:12,fontWeight:600,color:"#1a6640",padding:0,display:"flex",alignItems:"center",gap:4},children:[je(M).icon," File ",L+1]}),a.jsx("button",{onClick:()=>pe(ne=>ne.filter((ce,xe)=>xe!==L)),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:4,padding:"1px 5px",cursor:"pointer",fontSize:11,fontWeight:700},children:"✕"})]},L))})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[a.jsxs("label",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:13,fontWeight:700,background:"#e6f4ec",color:"#1a6640",border:"1.5px solid #c8e0cc",borderRadius:7,padding:"6px 14px",cursor:"pointer"},children:["📁 Choose Files",a.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,image/png,image/jpeg",style:{display:"none"},onChange:M=>{const L=Array.from(M.target.files);if(G.length+de.length+L.length>12){q("Maximum 12 files allowed!","error");return}he(ce=>[...ce,...L]),M.target.value=""}})]}),a.jsxs("span",{style:{fontSize:12,color:"#8a9a90"},children:[G.length+de.length,"/12 files"]})]}),de.length>0&&a.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6},children:de.map((M,L)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,background:"#fff8e1",border:"1px solid #ffe082",borderRadius:6,padding:"3px 8px"},children:[a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#7a5a00"},children:["📄 ",M.name]}),a.jsx("button",{onClick:()=>he(ne=>ne.filter((ce,xe)=>xe!==L)),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:4,padding:"1px 5px",cursor:"pointer",fontSize:11,fontWeight:700},children:"✕"})]},L))})]})]}),v&&(T?a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{gridColumn:z?"1":"span 2"},children:[a.jsxs("button",{className:`pm-recorder-toggle ${R?"active":""}`,onClick:()=>w(M=>!M),type:"button",children:["🎙️ ",R?"Hide Recorder":"Record Meeting"]}),R&&a.jsx("div",{className:"pm-recorder-section",children:a.jsx(dk,{onRecordingReady:M=>{O.current=M,J(M),q("Recording saved! 🔴")},onDecisionExtracted:M=>{V.current=M?.trim()||""},onTranscriptUpdate:()=>{}})})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"pm-label",children:"Upload Meeting Recording (optional)"}),a.jsxs("div",{style:{border:"1.5px dashed #c8e0cc",borderRadius:8,padding:"10px 14px",background:"#f7fbf8",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[a.jsxs("label",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:13,fontWeight:700,background:"#e6f4ec",color:"#1a6640",border:"1.5px solid #c8e0cc",borderRadius:7,padding:"6px 14px",cursor:"pointer"},children:["📁 Choose File",a.jsx("input",{type:"file",accept:"audio/*,video/webm",style:{display:"none"},onChange:M=>{const L=M.target.files[0];L&&F(L)}})]}),E?a.jsxs("span",{style:{fontSize:12.5,fontWeight:600,color:"#1a4a2e"},children:["🎵 ",E.name," ",a.jsx("button",{onClick:()=>F(null),style:{background:"#fdecea",color:"#c0392b",border:"none",borderRadius:5,padding:"2px 6px",cursor:"pointer",fontSize:11,fontWeight:700,marginLeft:6},children:"✕"})]}):Y?a.jsx("span",{style:{fontSize:12.5,fontWeight:600,color:"#1a4a2e"},children:"🔴 Auto-recording saved"}):a.jsx("span",{style:{fontSize:12.5,color:"#9ab5a0"},children:"No file chosen"})]})]})]}):a.jsx("div",{style:{gridColumn:z?"1":"span 2"},children:a.jsxs("div",{className:"pm-recording-locked",children:["🔒 Record Meeting — available at scheduled meeting time",B.meetingDate&&B.meetingHour&&a.jsxs("span",{style:{color:"#b07a00",marginLeft:4},children:["(",B.meetingDate," ",B.meetingHour,":",B.meetingMinute||"00"," ",B.meetingAmpm,")"]})]})}))]}),!v&&a.jsx("div",{style:{marginTop:14,background:"#f0f9f3",border:"1px solid #c8e0cc",borderRadius:8,padding:"10px 14px",fontSize:12.5,color:"#3a6b50",fontWeight:600},children:"💡 Meeting save केल्यावर Meeting Number वर click करून Subjects add करा"}),a.jsxs("div",{style:{display:"flex",gap:10,marginTop:22},children:[a.jsx("button",{className:"pm-btn-cancel",onClick:()=>f(!1),children:"Cancel"}),a.jsx("button",{className:"pm-btn-primary",onClick:Xt,disabled:m,children:m?"Saving...":v?"Update":"Save"})]})]})}),A&&a.jsx("div",{style:xx,children:a.jsxs("div",{style:{background:"#fff",padding:28,borderRadius:12,maxWidth:380,width:z?"90%":"100%",textAlign:"center"},children:[a.jsx("p",{className:"pm-delete-title",children:"Delete Meeting?"}),a.jsx("p",{className:"pm-delete-sub",children:"He record permanently delete होईल. Sure aahes ka?"}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[a.jsx("button",{className:"pm-btn-cancel",onClick:()=>k(null),children:"Cancel"}),a.jsx("button",{className:"pm-btn-primary",style:{background:"#c0392b"},onClick:()=>Lt(A),disabled:m,children:m?"Deleting...":"Yes, Delete"})]})]})}),$&&a.jsx("div",{className:"vm-overlay",onClick:()=>me(null),children:a.jsxs("div",{className:"vm-box",style:{width:z?"99%":"86%",maxWidth:1020,height:z?"97vh":"90vh"},onClick:M=>M.stopPropagation(),children:[a.jsxs("div",{className:"vm-header",children:[a.jsxs("div",{className:"vm-title",children:[a.jsx("div",{className:"vm-icon-wrap",children:$.type==="pdf"?"📄":$.type==="doc"?"📝":$.type==="xl"?"📊":$.type==="img"?"🖼️":"📁"}),a.jsxs("div",{children:[a.jsx("div",{className:"vm-name",style:{maxWidth:z?160:440},children:$.name}),a.jsx("div",{className:"vm-sub",children:$.type==="pdf"?"PDF Document":$.type==="doc"?"Word Document":$.type==="xl"?"Excel / Spreadsheet":$.type==="img"?"Image File":"Document"})]})]}),a.jsxs("div",{className:"vm-actions",children:[a.jsx("a",{href:$.url,download:$.name,target:"_blank",rel:"noreferrer",className:"vm-dl-btn",children:"⬇ Download"}),a.jsx("button",{className:"vm-close-btn",onClick:()=>me(null),children:"✕"})]})]}),a.jsxs("div",{className:"vm-body",children:[$.type==="img"&&a.jsx("div",{className:"vm-img-wrap",children:a.jsx("img",{src:$.url,alt:$.name})}),$.type==="pdf"&&a.jsx("iframe",{className:"vm-iframe",src:`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent($.url)}`,title:$.name,allow:"fullscreen"},$.url),$.type==="doc"&&a.jsx("iframe",{className:"vm-iframe",src:`https://docs.google.com/viewer?url=${encodeURIComponent($.url)}&embedded=true`,title:$.name,allow:"fullscreen"},$.url),$.type==="xl"&&a.jsx("iframe",{className:"vm-iframe",src:`https://docs.google.com/viewer?url=${encodeURIComponent($.url)}&embedded=true`,title:$.name,allow:"fullscreen"},$.url),$.type==="other"&&a.jsxs("div",{className:"vm-empty",children:[a.jsx("span",{children:"📁"}),a.jsx("p",{children:"Preview उपलब्ध नाही"}),a.jsx("small",{children:"खाली download करा"}),a.jsx("a",{href:$.url,download:$.name,target:"_blank",rel:"noreferrer",className:"vm-dl-btn",style:{marginTop:8},children:"⬇ Download करा"})]})]})]})})]})]})}const xx={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:16},bx=["Super Admin","Guardian Minister","Mayor","Admin"],yx=()=>{try{return JSON.parse(localStorage.getItem("authUser")||"{}")}catch{return{}}},po=(n,o)=>n?`${n}-SUB-${String(o+1).padStart(2,"0")}`:`SUB-${String(o+1).padStart(2,"0")}`,vx=({val:n})=>{const l={Approved:{bg:"#e6f4ec",color:"#1a6640"},Rejected:{bg:"#fdecea",color:"#c0392b"},"On-Hold":{bg:"#fff8e1",color:"#b07a00"},"Not Conducted":{bg:"#f3f3f3",color:"#6a6a6a"},Postponed:{bg:"#eee8ff",color:"#6a3ab0"}}[n]||{bg:"#f3f3f3",color:"#aaa"};return a.jsx("span",{style:{display:"inline-block",fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:l.bg,color:l.color,whiteSpace:"nowrap"},children:n||"-"})};function Iu(){const{meetingId:n}=j2(),o=Ma(),l=vt(),[s,d]=b.useState(o.state?{meetingNumber:o.state.meetingNumber||null,meetingType:o.state.meetingType||null,meetingDate:o.state.meetingDate||null,meetingTime:o.state.meetingTime||null}:null),[p,f]=b.useState(n||null),[x,h]=b.useState(""),[m,y]=b.useState([]),[v,C]=b.useState(!1),[A,k]=b.useState(null),[z,D]=b.useState(window.innerWidth<640),[R,w]=b.useState([]),[O,Y]=b.useState(!1),[J,E]=b.useState(null),F={subjectName:"",subjectType:"",decisionInMeeting:"",tagTo:[]},[V,de]=b.useState(F),[he,G]=b.useState(null),[pe,$]=b.useState(null),[me,we]=b.useState(""),[W,ie]=b.useState(!1),fe=yx(),K=fe?.role||"",B=bx.includes(K);b.useEffect(()=>{const le=()=>D(window.innerWidth<640);return window.addEventListener("resize",le),()=>window.removeEventListener("resize",le)},[]),b.useEffect(()=>{(async()=>{try{const je=await Ue.get("/getUsers");if(je.data.success){const X=[...new Set(je.data.users.map(M=>M.departmentName).filter(Boolean))];w(X)}}catch{}})()},[]);const j=async le=>{if(le)try{C(!0);const X=(await Ue.get("/getMeetings")).data;if(X.success){const M=yx(),L=M?.role||"",ne=M?.departmentName||"",ce=bx.includes(L),xe=X.data.find(Ye=>Ye._id===le);if(xe){d({meetingNumber:xe.meetingNumber||null,meetingType:xe.meetingType||null,meetingDate:xe.meetingDate||null,meetingTime:xe.meetingTime||null});const Ye=Array.isArray(xe.subjects)?xe.subjects:[];if(ce)y(Ye);else if(["corporator","ward councillor"].includes(L.toLowerCase()))y(Ye);else{const bt=Ye.filter(Ke=>Array.isArray(Ke.tagTo)&&Ke.tagTo.includes(ne));y(bt)}}}}catch{T("Failed to load subjects","error")}finally{C(!1)}};b.useEffect(()=>{p&&j(p)},[p]);const T=(le,je="success")=>{k({msg:le,type:je}),setTimeout(()=>k(null),3e3)},q=le=>le?new Date(le).toLocaleDateString("en-IN"):"-",oe=le=>{if(!le)return"-";const[je,X]=le.split(":");let M=parseInt(je,10);const L=M>=12?"PM":"AM";return M=M%12||12,`${M}:${X} ${L}`},P=m.filter(le=>!x||(le.subjectId||"").toLowerCase().includes(x.toLowerCase())),ge=()=>{E(null),de(F),Y(!0)},be=(le,je)=>{E(je),de({subjectName:le.subjectName||"",subjectType:le.subjectType||"",decisionInMeeting:le.decisionInMeeting||"",tagTo:Array.isArray(le.tagTo)?le.tagTo:[]}),Y(!0)},ke=async()=>{if(!V.subjectName.trim()){T("Subject Name is required","error");return}try{if(C(!0),J!==null){const le=m[J]?.subjectId;if(!le){T("Subject ID missing","error");return}const je=new FormData;je.append("subjectName",V.subjectName),je.append("subjectType",V.subjectType||""),je.append("decisionInMeeting",V.decisionInMeeting||""),je.append("tagTo",JSON.stringify(V.tagTo));const M=(await Ue.put(`/updateMeeting/updateSubject/${le}`,je)).data;M.success?(T("Subject updated!"),Y(!1),j(p)):T(M.message||"Failed to update","error")}else{const le={subjectId:po(s?.meetingNumber,m.length),subjectName:V.subjectName,subjectType:V.subjectType,decisionInMeeting:V.decisionInMeeting,tagTo:V.tagTo},je=[...m,le],X=new FormData;X.append("subjects",JSON.stringify(je)),s?.meetingNumber&&X.append("meetingNumber",s.meetingNumber),s?.meetingType&&X.append("meetingType",s.meetingType),s?.meetingDate&&X.append("meetingDate",s.meetingDate),s?.meetingTime&&X.append("meetingTime",s.meetingTime);const L=(await Ue.put(`/updateMeeting/${p}`,X)).data;L.success?(T("Subject added!"),Y(!1),j(p)):T(L.message||"Failed to save","error")}}catch{T("Server error","error")}finally{C(!1)}},Ce=async le=>{try{C(!0);const je=m.filter((ne,ce)=>ce!==le),X=new FormData;X.append("subjects",JSON.stringify(je)),s?.meetingNumber&&X.append("meetingNumber",s.meetingNumber),s?.meetingType&&X.append("meetingType",s.meetingType),s?.meetingDate&&X.append("meetingDate",s.meetingDate),s?.meetingTime&&X.append("meetingTime",s.meetingTime);const L=(await Ue.put(`/updateMeeting/${p}`,X)).data;L.success?(T("Subject deleted!"),G(null),j(p)):T(L.message||"Failed","error")}catch{T("Server error","error")}finally{C(!1)}},et=le=>{de(je=>({...je,tagTo:je.tagTo.includes(le)?je.tagTo.filter(X=>X!==le):[...je.tagTo,le]}))},tt=le=>le==="Administrative and Financial Approval"?["Tender Floated","1st Envelope Opened","2nd Envelope Opened","Nivida Samiti Rate Approval","Ghoshwara Ready"]:le==="Contract Approval"?["LOI Issued","SD Submitted","Work Order Issued","Work Started","Work Progress - Physical Progress","Work Progress - Financial Progress"]:["Yes","No"],Xt=le=>{$(le),we(le.actionTaken||"")},Lt=async()=>{if(pe)try{ie(!0);const le=pe;if(!le.subjectId){T("Subject ID missing","error");return}const je=new FormData;je.append("subjectName",le.subjectName||""),je.append("subjectType",le.subjectType||""),je.append("decisionInMeeting",le.decisionInMeeting||""),je.append("tagTo",JSON.stringify(le.tagTo||[])),je.append("actionTaken",me);const M=(await Ue.put(`/updateMeeting/updateSubject/${le.subjectId}`,je)).data;M.success?(T("Action Taken saved!"),$(null),j(p)):T(M.message||"Failed","error")}catch{T("Server error","error")}finally{ie(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"sms-wrap",style:{background:"#f0f4f0",minHeight:"100vh",padding:z?12:24},children:[A&&a.jsx("div",{style:{position:"fixed",top:16,right:16,left:z?16:"auto",background:A.type==="success"?"#1a7a4a":"#c0392b",color:"#fff",padding:"10px 18px",borderRadius:8,fontWeight:700,fontSize:13.5,zIndex:9999},children:A.msg}),a.jsx("button",{className:"sms-back-btn",onClick:()=>l("/meetings"),children:"← Back to Meetings"}),a.jsx("h1",{className:"sms-title",children:"Meeting Subjects"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18,flexWrap:"wrap"},children:[a.jsx("input",{className:"sms-search-input",placeholder:"🔍 Search subject ID...",value:x,onChange:le=>h(le.target.value)}),p&&B&&a.jsx("button",{className:"sms-btn-primary",onClick:ge,style:{display:"flex",alignItems:"center",gap:6},children:"+ Add Subject"})]}),s&&p&&a.jsxs("div",{className:"sms-meeting-card",children:[a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Meeting No"}),a.jsx("span",{className:"sms-chip-badge",children:s.meetingNumber})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Type"}),a.jsx("span",{className:"sms-chip-value",children:s.meetingType||"-"})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Date"}),a.jsx("span",{className:"sms-chip-value",children:q(s.meetingDate)})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Time"}),a.jsx("span",{className:"sms-chip-value",children:oe(s.meetingTime)})]}),a.jsxs("div",{className:"sms-meeting-chip",children:[a.jsx("span",{className:"sms-chip-label",children:"Subjects"}),a.jsx("span",{className:"sms-chip-value",style:{color:"#1a7a4a",fontWeight:800},children:P.length})]})]}),p?a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?12:20,overflowX:"auto"},children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},children:a.jsxs("h3",{style:{fontSize:15,fontWeight:800,color:"#1a4a2e",margin:0},children:["Subjects (",P.length,")"]})}),v?a.jsx("div",{style:{textAlign:"center",padding:24,color:"#8a9a90"},children:"Loading..."}):P.length===0?a.jsxs("div",{className:"sms-empty",children:[a.jsx("div",{className:"sms-empty-icon",children:"📋"}),a.jsx("div",{children:x?"कोणताही subject सापडला नाही":"कोणतेही subjects नाहीत"}),a.jsx("div",{style:{fontSize:12,color:"#aaa",marginTop:4},children:x?"वेगळा Subject ID search करा":"+ Add Subject button वापरून subjects add करा"})]}):z?a.jsx("div",{children:P.map((le,je)=>{const X=m.indexOf(le);return a.jsxs("div",{className:"sms-card",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[a.jsx("span",{className:"sms-sub-id",children:le.subjectId||po(s?.meetingNumber,X)}),a.jsxs("div",{style:{display:"flex",gap:5},children:[a.jsx("button",{className:"sms-btn-edit",onClick:()=>be(le,X),children:"✏️"}),a.jsx("button",{className:"sms-btn-delete",onClick:()=>G(X),children:"🗑️"})]})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Subject Name"}),a.jsx("span",{style:{fontWeight:600},children:le.subjectName||"-"})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Subject Type"}),a.jsx("span",{className:"sms-type-pill",children:le.subjectType||"-"})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Decision"}),a.jsx(vx,{val:le.decisionInMeeting})]}),a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Action Taken"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"},children:[le.actionTaken&&a.jsx("span",{style:{background:le.actionTaken==="Yes"?"#e6f4ec":le.actionTaken==="No"?"#fdecea":"#f0f0ff",color:le.actionTaken==="Yes"?"#1a6640":le.actionTaken==="No"?"#c0392b":"#3a3ab0",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20},children:le.actionTaken}),Array.isArray(le.tagTo)&&le.tagTo.includes(fe?.departmentName)&&a.jsx("button",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:11.5,fontWeight:700,background:"#fff8e1",color:"#b07a00",border:"1.5px solid #ffe082",borderRadius:6,padding:"3px 8px",cursor:"pointer"},onClick:()=>Xt(le),children:"⚡ Action"})]})]}),Array.isArray(le.tagTo)&&le.tagTo.length>0&&a.jsxs("div",{className:"sms-card-row",children:[a.jsx("span",{className:"sms-card-label",children:"Departments"}),a.jsx("div",{className:"sms-dept-chips",children:le.tagTo.map((M,L)=>a.jsx("span",{className:"sms-dept-chip",children:M},L))})]})]},je)})}):a.jsxs("table",{className:"sms-table",style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{children:["#","Subject ID","Subject Name","Subject Type","Decision","Departments","Action Taken","Actions"].map(le=>a.jsx("th",{children:le},le))})}),a.jsx("tbody",{children:P.map((le,je)=>{const X=m.indexOf(le);return a.jsxs("tr",{children:[a.jsx("td",{children:je+1}),a.jsx("td",{children:a.jsx("span",{className:"sms-sub-id",children:le.subjectId||po(s?.meetingNumber,X)})}),a.jsx("td",{style:{maxWidth:260,fontWeight:600},children:le.subjectName||"-"}),a.jsx("td",{children:a.jsx("span",{className:"sms-type-pill",children:le.subjectType||"-"})}),a.jsx("td",{children:a.jsx(vx,{val:le.decisionInMeeting})}),a.jsx("td",{style:{maxWidth:180},children:Array.isArray(le.tagTo)&&le.tagTo.length>0?a.jsx("div",{className:"sms-dept-chips",children:le.tagTo.map((M,L)=>a.jsx("span",{className:"sms-dept-chip",children:M},L))}):a.jsx("span",{style:{color:"#ccc"},children:"—"})}),a.jsx("td",{style:{maxWidth:260,fontWeight:600},children:le.actionTaken||"-"}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",gap:6},children:[a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-start"},children:Array.isArray(le.tagTo)&&le.tagTo.includes(fe?.departmentName)&&a.jsx("button",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:11.5,fontWeight:700,background:"#fff8e1",color:"#b07a00",border:"1.5px solid #ffe082",borderRadius:6,padding:"3px 10px",cursor:"pointer",whiteSpace:"nowrap"},onClick:()=>Xt(le),children:"⚡ Action"})}),B&&a.jsx("button",{className:"sms-btn-edit",onClick:()=>be(le,X),children:"✏️ Edit"}),B&&a.jsx("button",{className:"sms-btn-delete",onClick:()=>G(X),children:"🗑️ Delete"})]})})]},je)})})]})]}):a.jsx("div",{style:{background:"#fff",borderRadius:12,padding:20},children:a.jsxs("div",{className:"sms-empty",children:[a.jsx("div",{className:"sms-empty-icon",children:"🔍"}),a.jsx("div",{children:"कोणतीही meeting उपलब्ध नाही"}),a.jsx("div",{style:{fontSize:12,color:"#aaa",marginTop:4},children:"Meetings page वरून meeting number वर click करा"})]})}),O&&a.jsx("div",{style:Yu,children:a.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:z?16:25,width:z?"95%":"65%",maxWidth:720,maxHeight:"90vh",overflowY:"auto"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:20},children:[a.jsx("h3",{style:{fontSize:17,fontWeight:800,color:"#1a4a2e",margin:0},children:J===null?"Add Subject":"Edit Subject"}),a.jsx("button",{onClick:()=>Y(!1),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:z?"1fr":"1fr 1fr",gap:14},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsxs("label",{className:"sms-label",children:["Subject ID",a.jsx("span",{className:"sms-auto-badge",children:"Auto"})]}),a.jsx("input",{className:"sms-input-readonly",value:J!==null?m[J]?.subjectId||po(s?.meetingNumber,J):po(s?.meetingNumber,m.length),readOnly:!0})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{className:"sms-label",children:"Subject Type"}),a.jsxs("select",{className:"sms-input",value:V.subjectType,onChange:le=>de(je=>({...je,subjectType:le.target.value})),children:[a.jsx("option",{value:"",children:"Select Type"}),a.jsx("option",{children:"General"}),a.jsx("option",{children:"Administrative and Financial Approval"}),a.jsx("option",{children:"Contract Approval"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsxs("label",{className:"sms-label",children:["Subject Name ",a.jsx("span",{style:{color:"#c0392b"},children:"*"})]}),a.jsx("input",{className:"sms-input",placeholder:"Subject name टाका...",value:V.subjectName,onChange:le=>de(je=>({...je,subjectName:le.target.value}))})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"sms-label",children:"Decision In Meeting"}),a.jsxs("select",{className:"sms-input",value:V.decisionInMeeting,onChange:le=>de(je=>({...je,decisionInMeeting:le.target.value,tagTo:le.target.value!=="Approved"?[]:je.tagTo})),children:[a.jsx("option",{value:"",children:"Select Decision"}),a.jsx("option",{value:"Approved",children:"Approved"}),a.jsx("option",{value:"Rejected",children:"Rejected"}),a.jsx("option",{value:"On-Hold",children:"On-Hold"}),a.jsx("option",{value:"Not Conducted",children:"Not Conducted"}),a.jsx("option",{value:"Postponed",children:"Postponed"})]})]}),V.decisionInMeeting==="Approved"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",gridColumn:z?"1":"span 2"},children:[a.jsx("label",{className:"sms-label",style:{marginBottom:8},children:"Assign to Department"}),a.jsx("div",{className:"sms-dept-grid",children:R.length===0?a.jsx("div",{style:{gridColumn:"span 2",textAlign:"center",color:"#8a9a90",fontSize:13,padding:10},children:"Loading departments..."}):R.map((le,je)=>a.jsxs("label",{className:`sms-dept-item ${V.tagTo.includes(le)?"checked":""}`,children:[a.jsx("input",{type:"checkbox",checked:V.tagTo.includes(le),onChange:()=>et(le)}),a.jsx("span",{children:le})]},je))}),V.tagTo.length>0&&a.jsx("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:5},children:V.tagTo.map((le,je)=>a.jsxs("span",{style:{background:"#e6f4ec",color:"#1a6640",fontSize:11.5,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid #a8d5b5"},children:["✅ ",le]},je))})]})]}),a.jsxs("div",{style:{display:"flex",gap:10,marginTop:22},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>Y(!1),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",onClick:ke,disabled:v,children:v?"Saving...":J===null?"Add Subject":"Update Subject"})]})]})}),he!==null&&a.jsx("div",{style:Yu,children:a.jsxs("div",{style:{background:"#fff",padding:28,borderRadius:12,maxWidth:380,width:z?"90%":"100%",textAlign:"center"},children:[a.jsx("p",{style:{fontSize:17,fontWeight:700,color:"#1a4a2e",marginBottom:6},children:"Delete Subject?"}),a.jsx("p",{style:{fontSize:13.5,color:"#8a9a90",marginBottom:20,fontWeight:500},children:"He subject permanently delete होईल."}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>G(null),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",style:{background:"#c0392b"},onClick:()=>Ce(he),disabled:v,children:v?"Deleting...":"Yes, Delete"})]})]})}),pe&&a.jsx("div",{style:Yu,children:a.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:z?18:28,width:z?"95%":"480px",maxWidth:520,boxShadow:"0 8px 32px rgba(0,0,0,0.12)"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("span",{style:{fontSize:22},children:"⚡"}),a.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#1a4a2e",margin:0},children:"Action Taken"})]}),a.jsx("button",{onClick:()=>$(null),style:{background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8a9a90"},children:"✕"})]}),a.jsxs("div",{style:{background:"#f7fbf8",border:"1.5px solid #d6ede0",borderRadius:10,padding:"12px 16px",marginBottom:18,display:"flex",flexDirection:"column",gap:8},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Meeting No"}),a.jsx("span",{style:{background:"#e6f4ec",color:"#1a6640",fontWeight:700,fontSize:12.5,padding:"2px 10px",borderRadius:6},children:s?.meetingNumber||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject ID"}),a.jsx("span",{style:{background:"#eaf3fb",color:"#1565a8",fontWeight:700,fontSize:12,padding:"2px 8px",borderRadius:5,fontFamily:"monospace"},children:pe.subjectId||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject Name"}),a.jsx("span",{style:{fontWeight:600,color:"#2d3d35",maxWidth:220,textAlign:"right"},children:pe.subjectName||"-"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,borderTop:"1px solid #eef4ee",paddingTop:8},children:[a.jsx("span",{style:{fontWeight:700,color:"#5a7a6a"},children:"Subject Type"}),a.jsx("span",{style:{background:"#f3f0ff",color:"#6a3ab0",fontSize:11.5,fontWeight:600,padding:"2px 8px",borderRadius:20},children:pe.subjectType||"General"})]})]}),a.jsxs("div",{style:{marginBottom:22},children:[a.jsxs("label",{className:"sms-label",style:{marginBottom:6},children:["Action Taken",a.jsx("span",{style:{display:"inline-block",background:"#fff8e1",color:"#b07a00",fontSize:10,fontWeight:800,padding:"2px 7px",borderRadius:20,marginLeft:6,textTransform:"uppercase"},children:pe.subjectType==="Administrative and Financial Approval"?"Prashaskiy":pe.subjectType==="Contract Approval"?"Samvida":"General"})]}),a.jsxs("select",{className:"sms-input",value:me,onChange:le=>we(le.target.value),children:[a.jsx("option",{value:"",children:"-- Select --"}),tt(pe.subjectType).map((le,je)=>a.jsx("option",{value:le,children:le},je))]}),me&&a.jsx("div",{style:{marginTop:10},children:a.jsxs("span",{style:{background:me==="Yes"?"#e6f4ec":me==="No"?"#fdecea":"#f0f0ff",color:me==="Yes"?"#1a6640":me==="No"?"#c0392b":"#3a3ab0",fontSize:12,fontWeight:700,padding:"4px 12px",borderRadius:20},children:["✅ ",me]})})]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{className:"sms-btn-cancel",onClick:()=>$(null),children:"Cancel"}),a.jsx("button",{className:"sms-btn-primary",onClick:Lt,disabled:W||!me,children:W?"Saving...":"Save Action Taken"})]})]})})]})]})}const Yu={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:16};function pk(n){return Gt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"},child:[]}]})(n)}const fk="/assets/ajivsir8-CVMwJ6TC.jpeg",gk="/assets/ajivsir1-DtAuu40c.jpeg",mk="/assets/meeting2-BpgpR0FZ.jpeg",hk="/assets/tree-BGxUfGTP.jfif",xk="/assets/pani3-tuXII5q-.jpg",bk="/assets/narangibridgeahani-Ct7_szRG.jpeg";function Vu({src:n,style:o,loop:l=!0}){const s=b.useRef(null);return b.useEffect(()=>{let d;const p=()=>{window.lottie&&s.current&&(s.current.innerHTML="",d=window.lottie.loadAnimation({container:s.current,renderer:"svg",loop:l,autoplay:!0,path:n}))};if(window.lottie)p();else{const f=document.createElement("script");f.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js",f.onload=p,document.head.appendChild(f)}return()=>d&&d.destroy()},[n]),a.jsx("div",{ref:s,style:o})}function jx(){const n=vt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),l=b.useRef(null),[s,d]=b.useState(0),[p,f]=b.useState(!0),[x,h]=Fe.useState(0),[m,y]=Fe.useState(!0),v=[{icon:"🌉",tag:"पायाभूत सुविधा",title:"नारंगी उड्डाणपूल प्रकल्प पाहणी",desc:"नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 42 कोटी",deadline:"डिसेंबर 2025",stat:"",statLbl:"मार्च २०२६ अखेर वाहतुकीसाठी खुले",accent:"#51ABAC",bgimg:bk},{icon:"🏛️",tag:"प्रशासन",title:"समिती गठनाबाबत चर्चा",desc:"स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"",statLbl:"",accent:"#028945",bgimg:mk},{icon:"💧",tag:"पाणीपुरवठा",title:"24×7 पाणीपुरवठा योजना — वसई विभाग",desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"1.2 लाख",statLbl:"लाभार्थी कुटुंबे",accent:"#028945",bgimg:xk},{icon:"🌳",tag:"पर्यावरण",title:"हरित वसई-विरार — वृक्षारोपण मोहीम",desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 8 कोटी",deadline:"ऑगस्ट 2025",stat:"5 लाख",statLbl:"झाडे लावणार",accent:"#028945",bgimg:hk}];b.useEffect(()=>{if(!p)return;const R=setInterval(()=>{d(w=>(w+1)%v.length)},4e3);return()=>clearInterval(R)},[p,v.length]),b.useEffect(()=>{if(!m)return;const R=setInterval(()=>{h(w=>w>=z?0:w+1)},5e3);return()=>clearInterval(R)},[m]),b.useEffect(()=>{if(!l.current)return;const R=l.current,w=(R.offsetWidth-40)/3;R.scrollTo({left:x*(w+20),behavior:"smooth"})},[x]);const C=[{icon:a.jsx($0,{size:32,color:"#fff"}),lottie:"https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json",title:"नोंदणी करा",desc:"Mobile number वापरून account तयार करा."},{lottie:"https://assets4.lottiefiles.com/packages/lf20_tljjahng.json",title:"तारीख निवडा",desc:"मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"},{lottie:"https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json",title:"तपशील भरा",desc:"भेटीचे कारण, visitors संख्या आणि photo द्या"},{lottie:"https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title:"टोकन मिळवा",desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"}],A=v[s],k=[{tag:"🌿 शिबिर प्रदर्शन",title:"घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन",rows:["घनकचरा व्यवस्थापन प्रदर्शन","खत निर्मिती तंत्रज्ञान प्रदर्शन"],date:"२८ फेब्रुवारी २०२६",accent:"#4CABC1",bg:"linear-gradient(160deg,#b8e2ec 0%,#d0eff7 40%,#aad8e8 100%)",dotColors:["#4CABC1","#66A962"]},{tag:"🧹 स्वच्छता आढावा",title:"दैनंदिन कचरा संकलन व स्वच्छता बैठक",rows:["कचरा संकलन व वर्गीकरण","गटार व नाले साफसफाई"],date:"११ मार्च २०२६",accent:"#66A962",bg:"linear-gradient(160deg,#b5d9b3 0%,#d2edd0 40%,#a8cfaa 100%)",dotColors:["#66A962","#CA9D28"]},{tag:"🛣️ रस्ते विकास",title:"रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक",rows:["रस्ते दुरुस्ती व बांधकाम","फुटपाथ उभारणी नियोजन"],date:"१० मार्च २०२६",accent:"#CA9D28",bg:"linear-gradient(160deg,#f0d6a8 0%,#f7e6c2 40%,#e8c87a 100%)",dotColors:["#CA9D28","#CE9A54"]},{tag:"⚡ वीज विकास",title:"MSEDCL वसई मंडळ आढावा बैठक",rows:["MSEDCL विकास कामे आढावा","महापौर व नगर सेवक बैठक"],date:"५ मार्च २०२६",accent:"#49ACC3",bg:"linear-gradient(160deg,#a8d4dc 0%,#c8e8f0 40%,#8ec4d0 100%)",dotColors:["#49ACC3","#187480"]}],z=1,D=Math.min(x,z);return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

        /* ══ HERO ══ */
        .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 72px; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background-image:url(${fk}); background-size:cover; background-position:left; background-repeat:no-repeat; z-index:0; }
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

      `}),a.jsxs("div",{className:"home-root",children:[a.jsxs("div",{className:"hero",children:[a.jsxs("div",{className:"hero-orbit","aria-hidden":"true",children:[a.jsx("div",{className:"hero-float f1",children:"📅"}),a.jsx("div",{className:"hero-float f2",children:"👥"}),a.jsx("div",{className:"hero-float f3",children:"📅"}),a.jsx("div",{className:"hero-float f4",children:"👤"})]}),a.jsx("h1",{className:"hero-jansanwad",children:"जन संवाद"}),a.jsx("div",{className:"hero-title-underline"}),a.jsx("p",{className:"hero-desc",children:"नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"}),a.jsx("div",{className:"hero-btns",children:o?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"hero-btn-primary",onClick:()=>n("/book-appointment"),children:"📅 Book Appointment"}),a.jsx("button",{className:"hero-btn-outline",onClick:()=>n("/my-appointments"),children:"📋 My Appointments"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"hero-btn-primary",onClick:()=>n("/register"),children:"🚀 Get Started — Register"}),a.jsx("button",{className:"hero-btn-outline",onClick:()=>n("/login"),children:"Login करा"})]})})]}),a.jsx("div",{className:"hiw-section",children:a.jsxs("div",{className:"hiw-inner",children:[a.jsxs("div",{className:"hiw-header",children:[a.jsx("h2",{className:"hiw-title",children:"कसे काम करते?"}),a.jsx("div",{className:"hiw-title-bar"}),a.jsx("p",{className:"hiw-sub",children:"४ टप्प्यांमध्ये महापौरांची भेट बुक करा."})]}),a.jsxs("div",{className:"hiw-grid-wrap",children:[a.jsx("div",{className:"hiw-connector","aria-hidden":"true"}),a.jsx("div",{className:"hiw-grid",children:C.map((R,w)=>a.jsxs("div",{className:"hiw-card",children:[a.jsx("div",{className:"hiw-num",children:w+1}),a.jsx("div",{className:"hiw-icon-wrap",children:w===0?a.jsx($0,{size:32,color:"#fff"}):w===3?a.jsx(pk,{size:34,color:"#fff"}):a.jsx(Vu,{src:R.lottie,style:{width:44,height:44}})}),a.jsx("div",{className:"hiw-step-title",children:R.title}),a.jsx("div",{className:"hiw-step-desc",children:R.desc})]},w))})]})]})}),a.jsxs("div",{className:"mayor-section",children:[a.jsxs("div",{className:"mayor-left",children:[a.jsx("p",{className:"mayor-heading-line1",children:"मा. महापौर"}),a.jsx("p",{className:"mayor-heading-line2",children:"श्री. अजीव पाटील"}),a.jsx("p",{className:"mayor-bio",children:"३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."}),a.jsx("button",{className:"mayor-btn-primary",onClick:()=>n(o?"/book-appointment":"/register"),children:"📅 Appointment बुक करा"})]}),a.jsxs("div",{className:"mayor-right",children:[a.jsx("div",{className:"mayor-chevrons","aria-hidden":"true",children:a.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",children:[a.jsxs("g",{opacity:"0.2",stroke:"#7edede",strokeWidth:"1.4",fill:"none",children:[a.jsx("polyline",{points:"160,8 178,26 160,44"}),a.jsx("polyline",{points:"142,8 160,26 142,44"}),a.jsx("polyline",{points:"124,8 142,26 124,44"}),a.jsx("polyline",{points:"160,44 178,62 160,80"}),a.jsx("polyline",{points:"142,44 160,62 142,80"}),a.jsx("polyline",{points:"124,44 142,62 124,80"}),a.jsx("polyline",{points:"168,80 186,98 168,116"}),a.jsx("polyline",{points:"150,80 168,98 150,116"}),a.jsx("polyline",{points:"168,116 186,134 168,152"}),a.jsx("polyline",{points:"150,116 168,134 150,152"})]}),a.jsx("circle",{cx:"182",cy:"18",r:"16",fill:"rgba(81,200,200,0.3)",stroke:"rgba(81,200,200,0.4)",strokeWidth:"1"}),a.jsx("rect",{x:"108",y:"4",width:"10",height:"10",rx:"1",transform:"rotate(45 113 9)",fill:"#7edede",opacity:"0.3"})]})}),a.jsx("div",{className:"mayor-diamond-tl","aria-hidden":"true",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:a.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",transform:"rotate(45 8 8)",fill:"#7edede",opacity:"0.45"})})}),a.jsx("div",{className:"mayor-diamond-mid","aria-hidden":"true",children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:a.jsx("rect",{x:"1.5",y:"1.5",width:"9",height:"9",rx:"1",transform:"rotate(45 6 6)",fill:"#c9a040",opacity:"0.4"})})}),a.jsx("div",{className:"mayor-gold-tri","aria-hidden":"true",children:a.jsxs("svg",{width:"160",height:"110",viewBox:"0 0 160 110",fill:"none",children:[a.jsx("polygon",{points:"160,110 160,0 50,110",fill:"#C9963A",opacity:"0.25"}),a.jsx("polygon",{points:"160,110 160,40 95,110",fill:"#e8b84b",opacity:"0.18"})]})}),a.jsx("div",{className:"mayor-sparkle","aria-hidden":"true",children:a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:a.jsx("path",{d:"M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z",fill:"white",opacity:"0.7"})})}),a.jsx("div",{className:"mayor-phone-glow","aria-hidden":"true"}),a.jsxs("div",{className:"mayor-content-wrap",children:[a.jsxs("div",{className:"mayor-brand-row",children:[a.jsx("div",{className:"mayor-brand-logo-wrap",children:a.jsx("img",{src:Hb,alt:"VVCMC Logo"})}),a.jsx("div",{className:"mayor-brand-text",children:"वसई-विरार शहर महानगरपालिका, जन संवाद"})]}),a.jsxs("div",{className:"mayor-bottom-row",children:[a.jsxs("div",{className:"mayor-data-col",children:[a.jsx("div",{className:"mayor-data-col-head",children:"नागरिक सहभाग"}),a.jsx("div",{className:"mayor-data-text",children:"नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."}),a.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"वसई स्मार्ट सिटी प्रकल्प"}),a.jsx("div",{className:"mayor-data-text",children:"वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."})]}),a.jsxs("div",{className:"mayor-phone-center",children:[a.jsxs("div",{className:"mayor-bubbles-col",children:[a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("rect",{x:"4",y:"4",width:"18",height:"13",rx:"3",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M8 20 L8 17",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",strokeLinecap:"round"}),a.jsx("path",{d:"M7 7h12M7 10h8M7 13h10",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",strokeLinecap:"round"}),a.jsx("circle",{cx:"19",cy:"6",r:"4",fill:"#028945",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),a.jsx("path",{d:"M17 6h4M19 4v4",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})}),a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("polyline",{points:"5,19 10,12 15,15 21,7",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),a.jsx("polyline",{points:"17,7 21,7 21,11",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),a.jsx("line",{x1:"5",y1:"21",x2:"21",y2:"21",stroke:"rgba(255,255,255,0.45)",strokeWidth:"1.2",strokeLinecap:"round"})]})}),a.jsx("div",{className:"mayor-bubble-item",children:a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[a.jsx("circle",{cx:"13",cy:"8",r:"3.2",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M7 21 C7 16.5 19 16.5 19 21",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),a.jsx("circle",{cx:"6.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),a.jsx("path",{d:"M3 20 C3 16.8 10 16.8 10 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),a.jsx("circle",{cx:"19.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),a.jsx("path",{d:"M16 20 C16 16.8 23 16.8 23 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),a.jsx("path",{d:"M10 22.5 Q13 25 16 22.5",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1",strokeLinecap:"round",fill:"none"})]})})]}),a.jsx("div",{className:"mayor-phone-wrap",children:a.jsx("div",{className:"mayor-phone",children:a.jsxs("div",{className:"mayor-phone-inner",children:[a.jsx("img",{src:gk,alt:"मा. महापौर श्री. अजीव पाटील",className:"mayor-phone-img"}),a.jsxs("div",{className:"mayor-phone-badge",children:[a.jsx("div",{className:"mayor-phone-badge-name",children:"मा. महापौर श्री. अजीव पाटील"}),a.jsx("div",{className:"mayor-phone-badge-title",children:"वसई-विरार शहर महानगरपालिका"})]})]})})})]}),a.jsxs("div",{className:"mayor-data-col",children:[a.jsx("div",{className:"mayor-data-col-head",children:"पायाभूत सुविधा"}),a.jsx("div",{className:"mayor-data-text",children:"वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"}),a.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"सुरक्षित व स्वच्छ शहर"}),a.jsx("div",{className:"mayor-data-text",children:"सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."})]})]})]})]})]}),a.jsx("div",{className:"projects-section",style:{backgroundColor:"#F9FCFB"},children:a.jsxs("div",{className:"projects-inner",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-tag",children:"✦ सध्या सुरू"}),a.jsx("h2",{className:"section-title",children:"चालू प्रकल्प"}),a.jsx("p",{className:"section-sub",children:"वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"})]}),a.jsxs("div",{className:"proj-card",onMouseEnter:()=>f(!1),onMouseLeave:()=>f(!0),style:A.bgimg?{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${A.accent}99 100%), url(${A.bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[a.jsxs("div",{className:"proj-left",style:{background:"transparent",border:A.bgimg?"none":"1px solid rgba(81,171,172,0.12)",borderRight:"none"},children:[a.jsxs("div",{className:"proj-tag",style:{background:`${A.accent}18`,color:A.accent},children:[A.icon," ",A.tag]}),a.jsx("div",{className:"proj-title",children:A.title}),a.jsx("p",{className:"proj-desc",children:A.desc}),a.jsxs("div",{className:"proj-progress-row",children:[a.jsx("span",{className:"proj-progress-lbl",children:"प्रगती"}),a.jsx("span",{className:"proj-progress-pct",style:{color:A.accent},children:A.progress})]}),a.jsx("div",{className:"proj-bar",children:a.jsx("div",{className:"proj-bar-fill",style:{width:`${A.progress}%`,background:`linear-gradient(90deg,${A.accent}88,${A.accent})`}})}),a.jsxs("div",{className:"proj-meta",children:[a.jsxs("div",{className:"proj-meta-item",children:["💰 ",a.jsx("strong",{children:A.budget})]}),a.jsxs("div",{className:"proj-meta-item",children:["📅 ",a.jsx("strong",{children:A.deadline})]}),a.jsx("span",{className:`proj-chip ${A.status==="ongoing"?"chip-ongoing":"chip-planning"}`,children:A.statusLabel})]})]}),a.jsxs("div",{className:"proj-right",style:{background:`linear-gradient(160deg,${A.accent},${A.accent}bb)`},children:[a.jsx("div",{className:"proj-icon",children:A.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"proj-stat-num",children:A.stat}),a.jsx("div",{className:"proj-stat-lbl",children:A.statLbl})]})]})]}),a.jsxs("div",{className:"proj-nav",children:[a.jsx("button",{className:"proj-btn",onClick:()=>{f(!1),d(R=>(R-1+v.length)%v.length)},children:"‹"}),a.jsx("div",{className:"proj-dots",children:v.map((R,w)=>a.jsx("button",{className:`proj-dot${s===w?" active":""}`,onClick:()=>{f(!1),d(w)}},w))}),a.jsxs("span",{className:"proj-counter",children:[s+1," / ",v.length]}),a.jsx("button",{className:"proj-btn",onClick:()=>{f(!1),d(R=>(R+1)%v.length)},children:"›"})]})]})}),a.jsxs("div",{className:"notice",children:[a.jsx("span",{className:"notice-icon",children:"⚠️"}),a.jsxs("div",{children:[a.jsx("div",{className:"notice-title",children:"महत्त्वाची सूचना"}),a.jsx("div",{className:"notice-text",children:"भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."})]})]}),a.jsxs("div",{className:"cta",children:[a.jsx(Vu,{src:"https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",style:{position:"absolute",left:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}}),a.jsx(Vu,{src:"https://assets9.lottiefiles.com/packages/lf20_touohxv0.json",style:{position:"absolute",right:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}})]}),a.jsx("div",{className:"news-section",children:a.jsxs("div",{className:"news-inner",children:[a.jsxs("div",{className:"news-header",children:[a.jsx("div",{className:"news-section-tag",children:"✦ ताज्या बातम्या"}),a.jsx("h2",{className:"news-title",children:"महापौर कार्यालयाच्या ताज्या बातम्या"}),a.jsx("div",{className:"news-title-bar"}),a.jsx("p",{className:"news-sub",children:"Mayor's Office Latest Updates & Activities"})]}),a.jsx("div",{className:"news-viewport",ref:l,onMouseEnter:()=>y(!1),onMouseLeave:()=>y(!0),children:a.jsx("div",{className:"news-track",children:k.map((R,w)=>a.jsxs("div",{className:"news-card",style:{background:R.bg,"--nc-accent":R.accent},children:[a.jsxs("div",{className:"nc-widget",children:[a.jsx("div",{className:"nc-widget-day",children:R.day}),a.jsx("div",{className:"nc-widget-rows",children:R.rows.map((O,Y)=>a.jsxs("div",{className:"nc-widget-row",children:[a.jsx("span",{className:"nc-dot",style:{background:R.dotColors[Y]}}),O]},Y))})]}),a.jsxs("div",{className:"nc-caption",children:[a.jsx("div",{className:"nc-tag",children:R.tag}),a.jsx("div",{className:"nc-title",children:R.title}),a.jsxs("div",{className:"nc-date-row",children:[a.jsxs("div",{className:"nc-date",children:["📅 ",R.date]}),a.jsx("div",{className:"nc-arrow",children:"→"})]})]})]},w))},x)}),a.jsxs("div",{className:"news-nav",children:[a.jsx("button",{className:"news-btn",onClick:()=>{y(!1),h(R=>Math.max(0,R-1))},children:"‹"}),a.jsx("div",{className:"news-dots",children:Array.from({length:2}).map((R,w)=>a.jsx("button",{className:`news-dot${D===w?" active":""}`,onClick:()=>{y(!1),h(w)}},w))}),a.jsxs("span",{className:"news-counter",children:[D+1," / 2"]}),a.jsx("button",{className:"news-btn",onClick:()=>{y(!1),h(R=>Math.min(z,R+1))},children:"›"})]})]})})]})]})}function Dn(){const n=vt(),o=new Date().getFullYear(),l=()=>window.scrollTo({top:0,behavior:"smooth"});return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer-body",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsxs("div",{className:"footer-logo-row",children:[a.jsx("div",{className:"cn-logo-wrap",children:a.jsx("img",{src:_n,alt:"VVCMC"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-brand-name",children:["Vasai-Virar City",a.jsx("br",{}),"Municipal Corporation"]}),a.jsx("div",{className:"footer-brand-sub",children:"VVCMC — Jan Samvad"})]})]}),a.jsx("p",{className:"footer-tagline",children:"For the citizens, by the citizens — committed to transparent, fast and digital public services."}),a.jsxs("div",{className:"footer-address",children:[a.jsx("div",{className:"footer-address-title",children:"Head Office"}),a.jsxs("div",{className:"footer-address-text",children:["Virat Nagar, Near MHADA Colony,",a.jsx("br",{}),"Virar West. PIN: 401303"]})]}),a.jsxs("div",{className:"footer-contacts",children:[a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"📞"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Main Office"}),a.jsx("div",{className:"footer-contact-num",children:"0250-6630000"})]})]}),a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"🚨"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Disaster Management"}),a.jsx("div",{className:"footer-contact-num",children:"0250-2334546 / 0250-2334547"})]})]}),a.jsxs("div",{className:"footer-contact-row",children:[a.jsx("span",{className:"footer-contact-icon",children:"📱"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"Helpline"}),a.jsx("div",{className:"footer-contact-num",children:"7058911125 / 7058991430 / 8446427643"})]})]})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-col-title",children:[a.jsx("span",{className:"footer-col-title-dot"}),"Site Map"]}),a.jsxs("ul",{className:"footer-links",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/"),children:"Home"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/book-appointment"),children:"Book Appointment"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/my-appointments"),children:"My Appointments"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/register"),children:"Register"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>n("/login"),children:"Login"})})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"footer-col-title",children:[a.jsx("span",{className:"footer-col-title-dot"}),"Contact Us"]}),a.jsxs("a",{className:"footer-whatsapp-chip",href:"https://wa.me/919665877727",target:"_blank",rel:"noreferrer",children:[a.jsx("span",{children:"💬"})," WhatsApp Chatbot"]}),a.jsxs("div",{className:"footer-contact-row",style:{marginBottom:"20px"},children:[a.jsx("span",{className:"footer-contact-icon",children:"💬"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-contact-label",children:"WhatsApp"}),a.jsx("div",{className:"footer-contact-num",children:"9665877727"})]})]}),a.jsxs("div",{className:"footer-col-title",style:{marginTop:"20px"},children:[a.jsx("span",{className:"footer-col-title-dot"}),"Follow Us"]}),a.jsxs("div",{className:"footer-social",children:[a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Facebook",children:"𝑓"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Twitter",children:"𝕏"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Instagram",children:"◎"}),a.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"YouTube",children:"▶"})]})]})]}),a.jsx("div",{className:"footer-divider"}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"footer-copy",children:["© ",o," Vasai-Virar City Municipal Corporation. All rights reserved."]}),a.jsxs("button",{className:"footer-back-top",onClick:l,children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M6 10V2M6 2L2 6M6 2L10 6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Top"]})]}),a.jsx("div",{className:"footer-gold-strip",children:"Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad"})]})]})}function Mn(){const n=vt(),o=Ma(),[l,s]=b.useState(!1),[d,p]=b.useState(!1),f=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})();b.useEffect(()=>{const m=()=>p(window.scrollY>20);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const x=()=>{localStorage.removeItem("citizenUser"),n("/login"),s(!1)},h=m=>o.pathname===m;return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsx("div",{className:`cn-outer${d?" scrolled":""}`,children:a.jsxs("nav",{className:"cn-nav",children:[a.jsxs("div",{className:"cn-brand",onClick:()=>n("/"),children:[a.jsx("div",{className:"cn-logo-wrap",children:a.jsx("img",{src:_n,alt:"VVCMC"})}),a.jsxs("div",{className:"cn-brand-text",children:[a.jsx("span",{className:"cn-brand-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("span",{className:"cn-brand-sub",children:"जन संवाद"})]})]}),a.jsxs("div",{className:"cn-links",children:[a.jsx(Bs,{variant:"dark"}),a.jsx("button",{className:`cn-link${h("/")?" active":""}`,onClick:()=>n("/"),children:"Home"}),f&&a.jsx("button",{className:`cn-link${h("/my-appointments")?" active":""}`,onClick:()=>n("/my-appointments"),children:"My Appointments"}),f?a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"cn-citizen-name",children:["👋 ",f.fullName?.split(" ")[0]]}),a.jsx("button",{className:"cn-btn-solid",onClick:()=>n("/book-appointment"),children:"+ Book"}),a.jsx("button",{className:"cn-btn-danger",onClick:x,title:"Logout",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M18.36 6.64A9 9 0 1 1 5.64 6.64"}),a.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-btn-outline",onClick:()=>n("/login"),children:"Login"}),a.jsx("button",{className:"cn-btn-solid",onClick:()=>n("/register"),children:"Register"})]})]}),a.jsx("button",{className:"cn-ham",onClick:()=>s(m=>!m),children:l?"✕":"☰"})]})}),a.jsxs("div",{className:`cn-mobile-menu${l?" open":""}`,children:[a.jsx("div",{className:"cn-lang-mobile",children:a.jsx(Bs,{variant:"dark"})}),a.jsx("button",{className:`cn-mobile-link${h("/")?" active":""}`,onClick:()=>{n("/"),s(!1)},children:"🏠 Home"}),f&&a.jsx("button",{className:`cn-mobile-link${h("/my-appointments")?" active":""}`,onClick:()=>{n("/my-appointments"),s(!1)},children:"📅 My Appointments"}),f?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-mobile-link",style:{color:"#CA9D28"},onClick:()=>{n("/book-appointment"),s(!1)},children:"+ Book Appointment"}),a.jsx("button",{className:"cn-mobile-link",style:{color:"#f87171"},onClick:x,children:"🚪 Logout"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"cn-mobile-link",onClick:()=>{n("/login"),s(!1)},children:"🔐 Login"}),a.jsx("button",{className:"cn-mobile-link",onClick:()=>{n("/register"),s(!1)},children:"📝 Register"})]})]})]})}const qu=[{label:"Personal Details",icon:"👤"},{label:"Appointment",icon:"📅"},{label:"Details",icon:"ℹ️"},{label:"Photo",icon:"📷"},{label:"Review & Submit",icon:"📋"}];function us(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—"}function Gu(n){if(!n)return[];const o=n.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);if(!o)return[];const l=parseInt(o[1]),s=parseInt(o[2]),d=parseInt(o[3]),p=parseInt(o[4]),f=[];let x=l*60+s;const h=d*60+p;for(;x+15<=h;){const m=String(Math.floor(x/60)).padStart(2,"0"),y=String(x%60).padStart(2,"0"),v=String(Math.floor((x+15)/60)).padStart(2,"0"),C=String((x+15)%60).padStart(2,"0");f.push(`${m}:${y} - ${v}:${C}`),x+=15}return f}function yk(){const n=vt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[l,s]=b.useState(0),[d,p]=b.useState(!1),[f,x]=b.useState([]),[h,m]=b.useState(null),[y,v]=b.useState(null),[C,A]=b.useState("forward"),[k,z]=b.useState([]),[D,R]=b.useState(!1),[w,O]=b.useState(!1),[Y,J]=b.useState(!1),[E,F]=b.useState(!1),[V,de]=b.useState(null),[he,G]=b.useState(null),pe=(L,ne="success")=>{m({msg:L,type:ne}),setTimeout(()=>m(null),3500)},[$,me]=b.useState({username:o?.username||"",fullName:o?.fullName||"",mobileNumber:o?.mobileNumber||"",email:o?.email||"",address:"",pincode:"",preferredDate:"",slotTime:"",slotStart:"",slotEnd:"",microSlot:"",purpose:"",numberOfVisitors:"1",visitedBefore:!1,ward:"",visitorPhoto:null,photoPreview:null}),we=L=>ne=>me(ce=>({...ce,[L]:ne.target.value})),W=b.useRef("");b.useEffect(()=>{W.current=$.microSlot},[$.microSlot]),b.useEffect(()=>{if(!o?._id)return;(async()=>{try{J(!0);const ne=await Ot.get(`/citizen/by-id/${o._id}`);if(ne.data?.success&&ne.data?.citizen){const ce=ne.data.citizen;me(xe=>({...xe,username:ce.username||xe.username,fullName:ce.fullName||xe.fullName,mobileNumber:ce.mobileNumber||xe.mobileNumber,email:ce.email||xe.email,pincode:ce.pincode||xe.pincode,address:ce.address||xe.address,ward:ne.data.lastWard||xe.ward})),ne.data.lastPhoto&&G(ne.data.lastPhoto),de(ne.data.nextVisitNumber),F(!0)}}catch{}finally{J(!1)}})()},[]),b.useEffect(()=>{Ot.get("/availability/get").then(L=>{L.data&&x(Array.isArray(L.data)?L.data:L.data.data||[])}).catch(()=>{})},[]);const ie=L=>(L||"").replace(/\s*-\s*/g,"-").trim(),fe=L=>{if(L?.success===!1)return new Set;const ne=L?.data?.slots||L?.slots||[];return new Set(ne.filter(ce=>ce.booked).map(ce=>ie(ce.microSlot)))},K=async(L,ne,ce,xe)=>{try{const Ye=L.replace(/ /g,"%20"),bt=ne.replace(/ /g,"%20"),Ke=await Ot.get(`/citizen/micro-slots?date=${Ye}&slotTime=${bt}`),Dt=fe(Ke.data),St=ce.map(ze=>({...ze,booked:Dt.has(ie(ze.microSlot))}));return z(St),O(St.length>0&&St.every(ze=>ze.booked)),xe&&Dt.has(ie(xe))&&(pe("⚠️ तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा.","error"),me(ze=>({...ze,microSlot:""}))),Dt}catch{return new Set}};b.useEffect(()=>{if(l!==1||!$.preferredDate||!$.slotTime){(!$.preferredDate||!$.slotTime)&&(z([]),O(!1));return}let L=!1;const ne=$.preferredDate,ce=$.slotTime,xe=Gu(ce).map(bt=>({microSlot:bt,booked:!1}));z(xe),O(!1),R(!0),K(ne,ce,xe,W.current).finally(()=>{L||R(!1)});const Ye=setInterval(()=>{if(L)return;const bt=Gu(ce).map(Ke=>({microSlot:Ke,booked:!1}));K(ne,ce,bt,W.current)},3e4);return()=>{L=!0,clearInterval(Ye)}},[$.preferredDate,$.slotTime,l]);const B=b.useRef(null),j=b.useRef(null),T=b.useRef(null),[q,oe]=b.useState(!1),[P,ge]=b.useState(""),be=async()=>{ge("");try{const L=await navigator.mediaDevices.getUserMedia({video:!0});T.current=L,oe(!0),setTimeout(()=>{B.current&&(B.current.srcObject=L,B.current.play())},100)}catch{ge("Camera access denied. Browser permission द्या.")}},ke=()=>{const L=B.current,ne=j.current;!L||!ne||(ne.width=L.videoWidth,ne.height=L.videoHeight,ne.getContext("2d").drawImage(L,0,0),ne.toBlob(ce=>{const xe=new File([ce],`photo-${Date.now()}.jpg`,{type:"image/jpeg"}),Ye=URL.createObjectURL(ce);me(bt=>({...bt,visitorPhoto:xe,photoPreview:Ye})),Ce()},"image/jpeg"))},Ce=()=>{T.current&&(T.current.getTracks().forEach(L=>L.stop()),T.current=null),oe(!1)},et=new Date().toISOString().split("T")[0],tt=f.filter(L=>L.date>=et),Lt=tt.find(L=>L.date===$.preferredDate)?.timeSlots||[],le=l===0?!$.fullName||!$.mobileNumber||!$.address:l===1?!$.preferredDate||!$.slotTime||!$.microSlot:l===2?!$.purpose||!$.ward:l===3?!$.visitorPhoto:!1,je=()=>{A("forward"),s(L=>L+1)},X=()=>{A("back"),s(L=>L-1)},M=async()=>{if(!o){n("/login");return}try{p(!0);try{const it=Gu($.slotTime).map(pt=>({microSlot:pt,booked:!1})),Bn=$.preferredDate.replace(/ /g,"%20"),pi=$.slotTime.replace(/ /g,"%20"),Ca=await Ot.get(`/citizen/micro-slots?date=${Bn}&slotTime=${pi}`),Ln=fe(Ca.data),Un=it.map(pt=>({...pt,booked:Ln.has(ie(pt.microSlot))}));if(z(Un),Ln.has(ie($.microSlot))){pe("❌ हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा.","error"),me(pt=>({...pt,microSlot:""})),p(!1);return}}catch{}const L=o?._id&&o._id!=="undefined"?o._id:"",ne=new FormData;ne.append("citizenId",L),ne.append("fullName",$.fullName),ne.append("mobileNumber",$.mobileNumber),ne.append("email",$.email||""),ne.append("address",$.address),ne.append("pincode",$.pincode||""),ne.append("preferredDate",$.preferredDate),ne.append("slotTime",$.slotTime),ne.append("microSlot",$.microSlot),ne.append("purpose",$.purpose),ne.append("numberOfVisitors",$.numberOfVisitors),ne.append("visitedBefore",String($.visitedBefore)),ne.append("ward",$.ward),ne.append("submittedById",L),ne.append("submittedByName",o.fullName||""),$.visitorPhoto&&ne.append("visitorPhoto",$.visitorPhoto);const ce=await Ot.post("/citizen/book-appointment",ne,{headers:{"Content-Type":void 0}});if(!ce.data.success){pe(ce.data.message||"Booking failed ❌","error");return}const xe=ce.data.data,Ye=xe.mobileNumber||$.mobileNumber,bt=xe.fullName||$.fullName,Ke=it=>it?new Date(it+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—",Dt={pending:"Pending — Awaiting Mayor's Approval",approved:"Approved by Respected Mayor Ajiv Patil Sir",rejected:"Rejected by Admin",cancelled:"Cancelled"}[xe.status]||xe.status,St=`Dear ${bt}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been successfully booked. Appointment Status: ${Dt} Date: ${Ke(xe.preferredDate)} Time Slot: ${xe.microSlot} Token No: ${xe.tokenId} Please carry this Token No on your visit day. SAAVI INFINET`,ze=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379324&number=${Ye}&message=${encodeURIComponent(St)}`;fetch(ze,{method:"GET",mode:"no-cors"}).then(()=>console.log(`✅ SMS sent to ${Ye}`)).catch(it=>console.error("SMS error:",it)),v(xe)}catch(L){pe(L?.response?.data?.message||"Server Error ❌","error")}finally{p(!1)}};return y?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
          @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        `}),a.jsx("div",{className:"book-root",children:a.jsxs("div",{style:{background:"#fff",borderRadius:20,padding:"48px 40px",maxWidth:520,width:"100%",textAlign:"center",boxShadow:"0 8px 40px rgba(76,171,193,0.18)",border:"1.5px solid #b2e4ee",animation:"fadeUpIn .5s ease"},children:[a.jsx("div",{style:{width:90,height:90,borderRadius:"50%",background:"linear-gradient(135deg,#4CABC1,#66A962)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,margin:"0 auto 20px",animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both",boxShadow:"0 8px 24px rgba(76,171,193,0.35)"},children:"✅"}),a.jsx("h2",{style:{fontSize:26,fontWeight:800,color:"#187488",marginBottom:8,fontFamily:"'Plus Jakarta Sans',sans-serif",background:"linear-gradient(135deg,#4CABC1,#66A962)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Appointment Booked!"}),a.jsx("p",{style:{color:"#4a5568",marginBottom:24,fontSize:14,fontWeight:500},children:"तुमची appointment successfully book झाली आहे"}),a.jsx("div",{style:{background:"linear-gradient(135deg,#f0faf9,#f5fef5)",border:"1.5px solid #b2e4ee",borderRadius:12,padding:"20px 24px",marginBottom:24,textAlign:"left"},children:[["Token ID",y.tokenId],["Date",us(y.preferredDate)],["Slot",y.slotTime],["Your Time",y.microSlot||"—"],["Status","⏳ Pending — Admin approval बाकी आहे"]].map(([L,ne])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid #d4eff5",fontSize:13},children:[a.jsx("span",{style:{color:"#5a7a88",fontWeight:600},children:L}),a.jsx("span",{style:{color:"#187488",fontWeight:700},children:ne})]},L))}),y.qrCode&&a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("p",{style:{fontSize:12,color:"#6b7280",marginBottom:8,fontWeight:600},children:"QR Code — भेटीच्या दिवशी दाखवा"}),a.jsx("img",{src:y.qrCode,alt:"QR",style:{width:130,height:130}})]}),a.jsx("button",{onClick:()=>n("/my-appointments"),style:{width:"100%",padding:"13px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#4CABC1,#49ACC3)",color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)",transition:"transform .15s"},onMouseEnter:L=>L.target.style.transform="translateY(-1px)",onMouseLeave:L=>L.target.style.transform="none",children:"📋 My Appointments बघा"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),h&&a.jsx("div",{className:"toast",style:{background:h.type==="success"?"var(--teal)":"#dc2626"},children:h.msg}),a.jsx("div",{className:"book-root",children:a.jsxs("div",{className:"book-wrapper",children:[a.jsxs("div",{className:"book-titlebar",children:[a.jsx("h1",{children:"जनसंपर्क – Application Form"}),a.jsx("div",{className:"stepper",children:qu.map((L,ne)=>{const ce=ne<l?"done":ne===l?"active":"pending";return a.jsxs("div",{className:`step-tab ${ce}`,children:[a.jsx("div",{className:`step-dot ${ce}`,children:ce==="done"?"✓":ne+1}),L.label]},ne)})})]}),a.jsx("div",{className:"step-progress-bar",children:a.jsx("div",{className:"step-progress-fill",style:{width:`${(l+1)/qu.length*100}%`}})}),a.jsx("div",{className:"book-body",children:a.jsxs("div",{className:C==="forward"?"step-body-forward":"step-body-back",children:[l===0&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Personal Information"}),a.jsx("p",{className:"section-sub",children:"Please provide your basic details to proceed"}),Y&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--teal)",fontSize:13,fontWeight:600,marginBottom:16},children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"माहिती लोड होत आहे..."]}),E&&V!==null&&a.jsxs("div",{className:"visit-badge",style:{marginBottom:20,display:"inline-flex"},children:[a.jsx("span",{className:"badge-number",children:V}),a.jsx("span",{children:V===1?"हे या नागरिकाचे पहिले भेट असेल 🎉":`हे या नागरिकाचे ${V}वे भेट असेल`})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"User Name"}),a.jsx("input",{className:"f-input",value:$.username,onChange:we("username"),placeholder:"Username"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Full Name ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",value:$.fullName,onChange:we("fullName"),placeholder:"आपले पूर्ण नाव"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Mobile Number ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",type:"tel",value:$.mobileNumber,onChange:we("mobileNumber"),maxLength:10,placeholder:"10 digit mobile"})]})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Email Address"}),a.jsx("input",{className:"f-input",type:"email",value:$.email,onChange:we("email"),placeholder:"Email (optional)"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Pincode"}),a.jsx("input",{className:"f-input",value:$.pincode,onChange:we("pincode"),maxLength:6,placeholder:"Pincode"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Address ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",value:$.address,onChange:we("address"),placeholder:"पूर्ण पत्ता"})]})]}),a.jsx("p",{className:"form-note",children:"* In order to process your appointment, all fields marked with an asterisk (*) are required."})]}),l===1&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Appointment Scheduling"}),a.jsx("p",{className:"section-sub",children:"Select your preferred date, time slot, and 15-minute appointment window"}),tt.length===0?a.jsxs("div",{className:"empty-box",children:[a.jsx("div",{style:{fontSize:36,marginBottom:8},children:"📅"}),a.jsx("p",{style:{color:"#92400e",fontWeight:700,margin:"0 0 4px",fontSize:15},children:"सध्या कोणत्याही dates available नाहीत"}),a.jsx("p",{style:{color:"#a16207",fontSize:13.5,margin:0,fontWeight:500},children:"Admin कडून availability add होण्याची वाट पाहा"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Available Dates ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"date-grid",children:tt.map((L,ne)=>a.jsxs("button",{type:"button",className:`date-btn${$.preferredDate===L.date?" sel":""}`,onClick:()=>me(ce=>({...ce,preferredDate:L.date,slotTime:"",slotStart:"",slotEnd:"",microSlot:""})),children:["📅 ",us(L.date),a.jsxs("div",{className:"sub",children:[L.timeSlots?.length," slot",L.timeSlots?.length!==1?"s":""," available"]})]},ne))})]}),$.preferredDate&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Select Time Slot ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"slot-grid",children:Lt.map((L,ne)=>{const ce=`${L.start} - ${L.end}`;return a.jsxs("button",{type:"button",className:`slot-btn${$.slotTime===ce?" sel":""}`,onClick:()=>me(xe=>({...xe,slotTime:ce,slotStart:L.start,slotEnd:L.end,microSlot:""})),children:["⏰ ",ce]},ne)})})]}),$.preferredDate&&$.slotTime&&a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["15-Minute Appointment Slot निवडा ",a.jsx("span",{className:"req",children:"*"})]}),D?a.jsxs("div",{style:{color:"var(--teal)",fontSize:13,fontWeight:600,padding:"12px 0",display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"Slots loading..."]}):w?a.jsx("div",{style:{background:"#fee2e2",border:"1.5px solid #f87171",borderRadius:8,padding:"12px 16px",color:"#dc2626",fontWeight:700,fontSize:13},children:"❌ या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा."}):a.jsxs(a.Fragment,{children:[a.jsxs("select",{className:"f-input",style:{cursor:"pointer"},value:$.microSlot,onChange:L=>{const ne=L.target.value;if(k.find(xe=>xe.microSlot===ne)?.booked){pe("❌ हा slot आधीच book झाला आहे. कृपया दुसरा निवडा.","error");return}me(xe=>({...xe,microSlot:ne}))},children:[a.jsx("option",{value:"",children:"-- 15-minute slot निवडा --"}),k.map(L=>a.jsxs("option",{value:L.microSlot,disabled:L.booked,children:[L.booked?"🔴":"🟢"," ",L.microSlot,L.booked?" (Booked)":""]},L.microSlot))]}),k.length>0&&a.jsxs("p",{style:{fontSize:12,color:"var(--text-sm)",marginTop:8,fontWeight:500},children:["🟢 Available  |  🔴 Booked  | ",a.jsx("strong",{children:k.filter(L=>!L.booked).length})," of ",a.jsx("strong",{children:k.length})," slots available"]}),$.microSlot&&a.jsxs("div",{className:"selected-box",style:{marginTop:10,marginBottom:0},children:["✅ तुमचा appointment time: ",a.jsx("strong",{children:$.microSlot})]})]})]}),$.preferredDate&&$.slotTime&&$.microSlot&&a.jsxs("div",{className:"selected-box",children:["📅 ",us($.preferredDate),"  |  ⏰ ",$.slotTime,"  |  🕐 ",$.microSlot]})]}),a.jsxs("div",{className:"info-box",children:["ℹ️ ",a.jsx("strong",{children:"Date निवडण्यासाठी:"})," वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा"]})]}),l===2&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Visit Information"}),a.jsx("p",{className:"section-sub",children:"Provide details about your visit to the Mayor"}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Reason for Visit ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("textarea",{className:"f-input",rows:4,value:$.purpose,onChange:we("purpose"),placeholder:"Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा",style:{resize:"vertical"}})]}),a.jsxs("div",{className:"f-grid-2",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Number of Visitors ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{className:"f-input",type:"number",min:"1",max:"10",value:$.numberOfVisitors,onChange:we("numberOfVisitors")})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Ward ",a.jsx("span",{className:"req",children:"*"})]}),a.jsxs("select",{className:"f-input",value:$.ward,onChange:we("ward"),style:{cursor:"pointer"},children:[a.jsx("option",{value:"",children:"Select Ward"}),["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(L=>a.jsx("option",{children:L},L))]}),$.ward&&E&&a.jsx("p",{style:{fontSize:12,color:"#16a34a",fontWeight:600,marginTop:4},children:"✅ मागील भेटीवरून auto-filled"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Have you visited before? ",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("div",{className:"radio-group",children:["No","Yes"].map(L=>a.jsxs("label",{className:`radio-label${$.visitedBefore===(L==="Yes")?" selected":""}`,children:[a.jsx("input",{type:"radio",name:"vb",value:L,checked:$.visitedBefore===(L==="Yes"),onChange:()=>me(ne=>({...ne,visitedBefore:L==="Yes"})),style:{accentColor:"var(--teal)",width:15,height:15}}),L]},L))})]})]})]}),l===3&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Visitor Photo"}),a.jsx("p",{className:"section-sub",children:"Please upload or capture a clear photo for identification at the Mayor's office"}),he&&!$.photoPreview&&a.jsxs("div",{className:"last-photo-hint",children:[a.jsx("img",{src:`${he}`,alt:"last visit",style:{width:48,height:48,borderRadius:"50%",objectFit:"cover",border:"2px solid #7ec89a",flexShrink:0},onError:L=>{L.target.style.display="none"}}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontWeight:700,fontSize:13},children:"मागील भेटीचा फोटो उपलब्ध आहे"}),a.jsx("button",{type:"button",style:{marginTop:4,fontSize:12,color:"var(--teal)",fontWeight:700,background:"none",border:"none",cursor:"pointer",padding:0,textDecoration:"underline"},onClick:()=>{me(L=>({...L,photoPreview:he,visitorPhoto:he}))},children:"हाच फोटो वापरा ↗"})]})]}),a.jsxs("div",{style:{display:"flex",gap:12,marginBottom:20},children:[a.jsxs("label",{className:"photo-btn-primary",children:["📁 Upload Photo",a.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:L=>{const ne=L.target.files[0];ne&&me(ce=>({...ce,visitorPhoto:ne,photoPreview:URL.createObjectURL(ne)}))}})]}),a.jsx("button",{type:"button",onClick:be,className:"photo-btn-secondary",children:"📷 Use Webcam"})]}),q?a.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",border:"2px solid var(--border)",marginBottom:16},children:[a.jsx("button",{type:"button",onClick:Ce,style:{position:"absolute",top:10,right:10,zIndex:10,width:30,height:30,borderRadius:"50%",background:"#ef4444",color:"#fff",border:"none",cursor:"pointer",fontWeight:800},children:"✕"}),a.jsx("video",{ref:B,autoPlay:!0,playsInline:!0,style:{width:"100%",maxHeight:340,objectFit:"cover",display:"block"}}),a.jsx("canvas",{ref:j,style:{display:"none"}}),a.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:16,background:"linear-gradient(transparent,rgba(0,0,0,0.55))",display:"flex",justifyContent:"center"},children:a.jsx("button",{type:"button",onClick:ke,style:{padding:"11px 30px",borderRadius:9,border:"none",background:"linear-gradient(135deg,var(--teal),var(--green))",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)"},children:"📸 Capture Photo"})})]}):a.jsx("div",{style:{border:"2.5px dashed #b2d8e4",borderRadius:14,padding:36,textAlign:"center",background:"linear-gradient(135deg,#f7fcfe,#f5fef5)",marginBottom:16,transition:"all .2s"},children:$.photoPreview?a.jsxs(a.Fragment,{children:[a.jsx("img",{src:$.photoPreview,alt:"preview",style:{width:110,height:110,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginBottom:14,boxShadow:"0 4px 20px rgba(76,171,193,0.3)"}}),a.jsx("p",{style:{color:"var(--green)",fontWeight:700,fontSize:14,margin:"0 0 4px"},children:"✅ Photo selected"}),a.jsx("p",{style:{color:"#6a9aaa",fontSize:12.5,margin:0,fontWeight:500},children:'Click "Upload Photo" to change'})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{fontSize:44,marginBottom:12,color:"#b2d8e4"},children:"📷"}),a.jsx("p",{style:{color:"#6a9aaa",fontSize:14,margin:0,fontWeight:600},children:"Upload किंवा camera वापरून photo द्या"})]})}),P&&a.jsx("p",{style:{color:"#ef4444",fontSize:13,marginTop:4,fontWeight:600},children:P})]}),l===4&&a.jsxs("div",{children:[a.jsx("p",{className:"section-title",children:"Review & Submit"}),a.jsx("p",{className:"section-sub",children:"सर्व माहिती verify करा आणि submit करा"}),a.jsxs("div",{className:"review-grid",children:[[{title:"Personal Info",rows:[["Name",$.fullName],["Mobile",$.mobileNumber],["Email",$.email||"—"],["Address",$.address],["Pincode",$.pincode||"—"]]},{title:"Appointment",rows:[["Date",us($.preferredDate)],["Slot",$.slotTime],["My Time",$.microSlot]]},{title:"Visit Details",rows:[["Purpose",$.purpose],["Visitors",$.numberOfVisitors],["Visited Before",$.visitedBefore?"Yes":"No"],["Ward",$.ward],...V!==null?[["Visit Number",`#${V}`]]:[]]}].map((L,ne)=>a.jsxs("div",{className:"review-card",style:{animationDelay:`${ne*80}ms`},children:[a.jsx("div",{className:"review-card-title",children:L.title}),L.rows.map(([ce,xe])=>a.jsxs("div",{className:"review-row",children:[a.jsx("span",{className:"review-key",children:ce}),a.jsx("span",{className:"review-val",children:xe})]},ce))]},ne)),$.photoPreview&&a.jsxs("div",{className:"review-card",style:{textAlign:"center"},children:[a.jsx("div",{className:"review-card-title",children:"Visitor Photo"}),a.jsx("img",{src:$.photoPreview,alt:"v",style:{width:88,height:88,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginTop:8,boxShadow:"0 4px 16px rgba(76,171,193,0.25)"}})]})]}),a.jsx("div",{style:{background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",borderRadius:10,padding:"13px 18px",margin:"16px 0 0",fontSize:13.5,color:"#92400e",fontWeight:600},children:"⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."})]})]},l)}),a.jsxs("div",{className:"book-nav",children:[a.jsx("button",{className:"nav-cancel",onClick:()=>l>0?X():n(-1),children:l>0?"← Back":"CANCEL"}),l<qu.length-1?a.jsx("button",{className:"nav-continue",disabled:le,onClick:je,children:"CONTINUE →"}):a.jsx("button",{className:"nav-continue",disabled:d,onClick:M,children:d?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Submitting..."]}):"✔ Submit Appointment"})]})]})})]})}function vk(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function jk(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function wk(n){return n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}const wx={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",label:"⏳ Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",label:"✅ Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",label:"❌ Rejected"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",label:"🕰️ Expired"}};function Sx({name:n,photo:o,size:l=40}){const[s,d]=b.useState(!1),p=n?n.split(" ").map(m=>m[0]).join("").toUpperCase().slice(0,2):"?",f=["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"],x=n?n.charCodeAt(0)%f.length:0,h=o?o.startsWith("http")?o.replace("http://localhost:5000","https://jansamvad.saavi.co.in"):`https://jansamvad.saavi.co.in/${o}`:null;return h&&!s?a.jsx("img",{src:h,alt:n,onError:()=>d(!0),style:{width:l,height:l,borderRadius:"50%",objectFit:"cover",border:"2px solid #e2e8f0",flexShrink:0}}):a.jsx("div",{style:{width:l,height:l,borderRadius:"50%",background:f[x],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:l*.35,fontWeight:700,fontFamily:"'DM Sans',sans-serif",flexShrink:0,border:"2px solid rgba(255,255,255,0.3)"},children:p})}function Sk({appt:n,onView:o}){const[l,s]=b.useState(!1),d=b.useRef();return b.useEffect(()=>{const p=f=>{d.current&&!d.current.contains(f.target)&&s(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]),a.jsxs("div",{ref:d,style:{position:"relative",display:"flex",justifyContent:"center"},children:[a.jsx("button",{onClick:p=>{p.stopPropagation(),s(f=>!f)},style:{background:"none",border:"1px solid #e2e8f0",cursor:"pointer",padding:"4px 8px",borderRadius:6,color:"#6b7280",fontSize:18,lineHeight:1,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:p=>{p.target.style.borderColor="#16a34a",p.target.style.color="#16a34a"},onMouseLeave:p=>{p.target.style.borderColor="#e2e8f0",p.target.style.color="#6b7280"},title:"Actions",children:"⋮"}),l&&a.jsx("div",{style:{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:100,minWidth:150,overflow:"hidden"},children:a.jsx("button",{onClick:p=>{p.stopPropagation(),o(n),s(!1)},style:{display:"block",width:"100%",padding:"10px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:13,color:"#374151",fontFamily:"'DM Sans',sans-serif",fontWeight:500},onMouseEnter:p=>p.target.style.background="#f9fafb",onMouseLeave:p=>p.target.style.background="none",children:"👁 View Details"})})]})}const kk=[10,25,50],kx="160px 1fr 130px 200px 150px 60px";function Nk(){const n=vt(),o=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[l,s]=b.useState([]),[d,p]=b.useState(!0),[f,x]=b.useState(null),[h,m]=b.useState("all"),[y,v]=b.useState([]),[C,A]=b.useState(!1),[k,z]=b.useState(""),[D,R]=b.useState(1),[w,O]=b.useState(10);b.useEffect(()=>{if(!o){n("/login");return}Y()},[]);const Y=async()=>{try{p(!0);const G=await Ot.get("/citizen/my-appointments",{params:{citizenId:o._id,mobileNumber:o.mobileNumber}});G.data.success&&s(G.data.appointments||[])}catch{}finally{p(!1)}},J=l.filter(G=>h==="all"||G.status===h).filter(G=>{if(!k)return!0;const pe=k.toLowerCase();return G.tokenId?.toLowerCase().includes(pe)||G.purpose?.toLowerCase().includes(pe)||G.fullName?.toLowerCase().includes(pe)}),E=Math.max(1,Math.ceil(J.length/w)),F=J.slice((D-1)*w,D*w),V=G=>wx[G?.toLowerCase()]||wx.pending,de=()=>E<=5?Array.from({length:E},(G,pe)=>pe+1):D<=3?[1,2,3,"...",E]:D>=E-2?[1,"...",E-2,E-1,E]:[1,"...",D-1,D,D+1,"...",E],he=()=>x(null);return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
          grid-template-columns: ${kx};
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
          grid-template-columns: ${kx};
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
      `}),a.jsx("div",{className:"ma-root",children:a.jsxs("div",{className:"ma-inner",children:[a.jsxs("div",{className:"ma-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"ma-title",children:"My Appointments"}),a.jsxs("p",{className:"ma-sub",children:["Hello,",o?.fullName||`Citizen  ${o?.citizenId||""}`," 👋 — all your appointments are here."]})]}),a.jsxs("div",{className:"ma-actions",children:[a.jsx("button",{className:"ma-icon-btn",title:"Refresh",onClick:Y,children:"↻"}),a.jsxs("button",{className:"ma-book-btn",onClick:()=>n("/book-appointment"),children:[a.jsx("span",{style:{fontSize:18,lineHeight:1},children:"+"})," New Appointment"]})]})]}),a.jsxs("div",{className:"filter-search-row",children:[a.jsxs("div",{className:"filter-tabs",children:[a.jsx("span",{className:"filter-label",children:"Status"}),[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"approved",label:"Approved"},{key:"rejected",label:"Rejected"},{key:"expired",label:"Expired"}].map(G=>a.jsxs("button",{className:`ftab${h===G.key?" active":""}`,onClick:()=>{m(G.key),v([]),A(!1),R(1)},children:[G.label," (",G.key==="all"?l.length:l.filter(pe=>pe.status===G.key).length,")"]},G.key))]}),a.jsxs("div",{className:"search-wrap",children:[a.jsx("span",{className:"search-icon",children:"🔍"}),a.jsx("input",{className:"search-input",type:"text",placeholder:"Search appointment",value:k,onChange:G=>{z(G.target.value),R(1)}})]})]}),a.jsxs("div",{className:"table-card",children:[a.jsx("div",{className:"table-scroll-wrapper",children:a.jsxs("div",{className:"table-scroll-inner",children:[a.jsxs("div",{className:"tbl-head",children:[a.jsxs("div",{className:"tbl-head-cell",children:["# TOKEN ID ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"PURPOSE"}),a.jsxs("div",{className:"tbl-head-cell",children:["DATE ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"SLOT"}),a.jsx("div",{className:"tbl-head-cell",children:"APPOINTMENT_TIME"}),a.jsxs("div",{className:"tbl-head-cell",children:["STATUS ",a.jsx("span",{className:"sort-icon",children:"⇅"})]}),a.jsx("div",{className:"tbl-head-cell",children:"ACTIONS"})]}),d?a.jsxs("div",{style:{textAlign:"center",padding:"56px 0"},children:[a.jsx("div",{style:{width:34,height:34,border:"3px solid #e2e8f0",borderTopColor:"#16a34a",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 14px"}}),a.jsx("p",{style:{color:"#94a3b8",fontSize:14},children:"Appointments लोड होत आहेत..."})]}):F.length===0?a.jsxs("div",{className:"empty-box",children:[a.jsx("div",{style:{fontSize:48,marginBottom:14},children:"📅"}),a.jsx("p",{style:{color:"#374151",fontWeight:700,fontSize:16,marginBottom:6},children:h==="all"&&!k?"कोणतेही appointments नाहीत":`No ${h!=="all"?h:""} appointments found`}),a.jsx("p",{style:{color:"#94a3b8",fontSize:14,marginBottom:20},children:h==="all"&&!k?"Book your first appointment to get started.":"Try a different filter or search term."}),h==="all"&&!k&&a.jsx("button",{className:"ma-book-btn",style:{margin:"0 auto",display:"inline-flex"},onClick:()=>n("/book-appointment"),children:"+ Book Appointment"})]}):F.map((G,pe)=>{const $=V(G.status),me=y.includes(pe),we=G.purpose?G.purpose.length>40?G.purpose.slice(0,40)+"…":G.purpose:"—";return a.jsxs("div",{className:`tbl-row${me?" row-checked":""}`,style:{animationDelay:`${pe*40}ms`},onClick:()=>x(G),children:[a.jsx("div",{className:"cell-token",children:G.tokenId||"—"}),a.jsxs("div",{className:"cell-purpose-wrap",children:[a.jsx(Sx,{name:G.fullName,photo:G.visitorPhoto,size:38}),a.jsxs("div",{className:"cell-purpose-text",children:[a.jsx("div",{className:"purpose-title",children:we}),a.jsx("div",{className:"purpose-sub",children:G.fullName||"नागरिक"})]})]}),a.jsx("div",{className:"cell-date",children:jk(G.preferredDate)}),a.jsx("div",{className:"cell-slot",children:G.slotTime||"—"}),a.jsx("div",{className:"cell-slot",children:G.microSlot||"—"}),a.jsx("div",{children:a.jsx("span",{className:"status-badge",style:{background:$.bg,color:$.color,borderColor:$.border},children:$.label})}),a.jsx("div",{onClick:W=>W.stopPropagation(),children:a.jsx(Sk,{appt:G,onView:x})})]},pe)})]})}),!d&&J.length>0&&a.jsxs("div",{className:"tbl-footer",children:[a.jsxs("div",{className:"footer-left",children:[a.jsx("span",{children:"Show"}),a.jsx("select",{className:"page-size-select",value:w,onChange:G=>{O(Number(G.target.value)),R(1)},children:kk.map(G=>a.jsx("option",{value:G,children:G},G))}),a.jsxs("span",{children:["of ",a.jsx("strong",{children:J.length})," results"]}),y.length>0&&a.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:["· ",y.length," selected"]})]}),a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"pg-btn",onClick:()=>R(G=>Math.max(1,G-1)),disabled:D===1,children:a.jsx("span",{className:"pg-arrow",children:"‹"})}),de().map((G,pe)=>G==="..."?a.jsx("button",{className:"pg-btn pg-ellipsis",children:"…"},`ell-${pe}`):a.jsx("button",{className:`pg-btn${D===G?" active":""}`,onClick:()=>R(G),children:G},G)),a.jsx("button",{className:"pg-btn",onClick:()=>R(G=>Math.min(E,G+1)),disabled:D===E,children:a.jsx("span",{className:"pg-arrow",children:"›"})})]})]})]})]})}),f&&a.jsx("div",{className:"modal-overlay",onClick:he,children:a.jsxs("div",{className:"modal-card",onClick:G=>G.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontSize:10,opacity:.6,textTransform:"uppercase",letterSpacing:1},children:"Appointment Details"}),a.jsx("h3",{style:{margin:"4px 0 0",fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"},children:f.tokenId})]}),a.jsx("button",{type:"button",className:"modal-close",onClick:he,children:"✕"})]}),a.jsxs("div",{className:"modal-body",children:[a.jsx("div",{style:{textAlign:"center",marginBottom:20},children:a.jsx(Sx,{name:f.fullName,photo:f.visitorPhoto,size:80})}),(()=>{const G=V(f.status);return a.jsx("div",{style:{textAlign:"center",marginBottom:16},children:a.jsx("span",{className:"status-badge",style:{background:G.bg,color:G.color,borderColor:G.border,fontSize:13,padding:"6px 20px"},children:G.label})})})(),[["Name",f.fullName],["Mobile",f.mobileNumber],["Email",f.email||"—"],["Address",f.address||"—"],["Date",vk(f.preferredDate)],["Slot",f.slotTime],["Purpose",f.purpose],["Visitors",f.numberOfVisitors],["Visited Before",f.visitedBefore?"Yes":"No"],["Ward",f.ward||"—"],["Booked On",wk(f.createdAt)]].map(([G,pe])=>pe?a.jsxs("div",{className:"modal-row",children:[a.jsx("span",{className:"modal-key",children:G}),a.jsx("span",{className:"modal-val",children:pe})]},G):null),f.adminNote&&a.jsxs("div",{style:{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:13,color:"#92400e"},children:[a.jsx("strong",{children:"Admin Note:"})," ",f.adminNote]}),f.replyDocument&&a.jsxs("div",{style:{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:13},children:[a.jsx("p",{style:{color:"#166534",fontWeight:700,margin:"0 0 6px"},children:"📎 Document from Admin"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("button",{onClick:()=>{if(f.replyDocument?.toLowerCase().includes(".pdf")||f.replyDocument?.toLowerCase().includes("inward_pdf")){const pe=`https://docs.google.com/gview?url=${encodeURIComponent(f.replyDocument)}&embedded=true`;window.open(pe,"_blank")}else window.open(f.replyDocument,"_blank")},style:{color:"#16a34a",fontWeight:600,fontSize:13,background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0},children:"📄 View Document"}),a.jsx("button",{onClick:async()=>{try{const pe=await(await fetch(f.replyDocument)).blob(),$=f.replyDocument?.toLowerCase().includes(".pdf")||f.replyDocument?.toLowerCase().includes("inward_pdf"),me=new Blob([pe],{type:$?"application/pdf":pe.type}),we=window.URL.createObjectURL(me),W=document.createElement("a");W.href=we,W.download=$?"document.pdf":"document",document.body.appendChild(W),W.click(),document.body.removeChild(W),window.URL.revokeObjectURL(we)}catch(G){console.error("Download failed",G)}},style:{color:"#64748b",background:"none",border:"none",cursor:"pointer",fontSize:16},title:"Download",children:"⬇"})]})]}),f.qrCode&&a.jsxs("div",{style:{textAlign:"center",marginTop:20,paddingTop:16,borderTop:"1px solid #f1f5f9"},children:[a.jsx("p",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"QR Code — भेटीच्या दिवशी दाखवा"}),a.jsx("img",{src:f.qrCode,alt:"QR",style:{width:130,height:130}})]})]})]})})]})}function Ck(){const n=vt(),[o,l]=b.useState({fullName:"",userName:"",mobileNumber:"",email:"",address:"",pincode:"",password:"",confirmPassword:""}),[s,d]=b.useState(!1),[p,f]=b.useState(""),[x,h]=b.useState(!1),[m,y]=b.useState(!1),[v,C]=b.useState(!1),[A,k]=b.useState(!1),[z,D]=b.useState("form"),[R,w]=b.useState(["","","","","",""]),[O,Y]=b.useState(""),[J,E]=b.useState(0),[F,V]=b.useState(!1),[de,he]=b.useState(!1),G=b.useRef([]),pe=K=>B=>l(j=>({...j,[K]:B.target.value}));b.useEffect(()=>{const K=setTimeout(()=>k(!0),60);return()=>clearTimeout(K)},[]),b.useEffect(()=>{if(J<=0){V(!0);return}const K=setTimeout(()=>E(B=>B-1),1e3);return()=>clearTimeout(K)},[J]);const $=K=>`${String(Math.floor(K/60)).padStart(2,"0")}:${String(K%60).padStart(2,"0")}`,me=async K=>{if(K&&K.preventDefault&&K.preventDefault(),f(""),!o.fullName||!o.mobileNumber||!o.password){f("All required fields must be filled ❌");return}if(!/^\d{10}$/.test(o.mobileNumber)){f("Mobile number must be 10 digits ❌");return}if(o.password.length<6){f("Password must be at least 6 characters ❌");return}if(o.password!==o.confirmPassword){f("Passwords do not match ❌");return}try{if(he(!0),(await Ot.post("/citizen/check-mobile",{mobileNo:o.mobileNumber})).data.success){f("हा mobile number already registered आहे ❌ Please Login करा."),he(!1);return}}catch(q){if(q?.response?.status!==404){f("Server Error. Please try again ❌"),he(!1);return}}const B=Math.floor(1e5+Math.random()*9e5).toString();Y(B),E(60),V(!1),w(["","","","","",""]);const j=`Dear Citizen ${B} is OTP for VVCMC Jan Samvaad Portal login for citizen registration.VVCMC SAAVI INFINET`,T=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379312&number=${o.mobileNumber}&message=${encodeURIComponent(j)}`;fetch(T,{method:"GET",mode:"no-cors"}).catch(()=>{}),D("otp"),he(!1),setTimeout(()=>G.current[0]?.focus(),120)},we=async()=>{const K=R.join("");if(K.length<6){f("Enter 6 digit OTP ❌");return}if(J<=0){f("OTP expired! Please resend ❌");return}if(K!==O){f("Wrong OTP! Please try again ❌"),w(["","","","","",""]),setTimeout(()=>G.current[0]?.focus(),50);return}try{d(!0),f("");const B=await Ot.post("/citizen/register",{fullName:o.fullName,userName:o.userName,mobileNumber:o.mobileNumber,address:o.address,pincode:o.pincode,email:o.email,password:o.password});if(!B.data.success){f(B.data.message||"Registration failed ❌");return}h(!0),setTimeout(()=>n("/citizen-login"),2e3)}catch(B){f(B?.response?.data?.message||"Server Error ❌")}finally{d(!1)}},W=(K,B)=>{if(!/^[0-9]?$/.test(B))return;const j=[...R];j[K]=B,w(j),B&&K<5&&G.current[K+1]?.focus()},ie=(K,B)=>{B.key==="Backspace"&&!R[K]&&K>0&&G.current[K-1]?.focus()},fe=K=>{K.preventDefault();const B=K.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),j=[...R];B.split("").forEach((T,q)=>{j[q]=T}),w(j),G.current[Math.min(B.length,5)]?.focus()};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"rp-root",children:[a.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${Eo})`}}),a.jsx("div",{className:"rp-overlay"}),a.jsx("div",{className:"rp-stripe"}),a.jsxs("div",{className:"rp-wrapper",style:{opacity:A?1:0,transform:A?"translateX(0)":"translateX(160px)"},children:[a.jsxs("div",{className:"rp-card",children:[a.jsxs("div",{className:"rp-logo-row",children:[a.jsx("img",{src:vo,alt:"VVCMC",className:"rp-logo-img",style:{objectPosition:"top center"}}),a.jsxs("div",{className:"rp-logo-texts",children:[a.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),a.jsxs("div",{className:"fade-up",children:[a.jsx("p",{className:"rp-page-title",children:"Account तयार करा"}),a.jsx("p",{className:"rp-page-sub",children:"Mayor Appointment बुक करण्यासाठी register करा"}),x?a.jsxs("div",{className:"rp-success",children:["✅ Registration successful!",a.jsx("br",{}),a.jsx("span",{style:{fontSize:13,fontWeight:400,opacity:.8},children:"Login page वर redirect होत आहे..."})]}):z==="otp"?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"otp-back",onClick:()=>{D("form"),w(["","","","","",""]),f("")},children:"← Go Back"}),a.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:["OTP sent to"," ",a.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",o.mobileNumber.slice(-3)]})]}),p&&a.jsxs("div",{className:"rp-error",children:["⚠️ ",p]}),a.jsx("div",{className:"otp-row",onPaste:fe,children:R.map((K,B)=>a.jsx("input",{ref:j=>G.current[B]=j,className:"otp-box",type:"tel",maxLength:1,value:K,placeholder:"·",onChange:j=>W(B,j.target.value),onKeyDown:j=>ie(B,j)},B))}),a.jsxs("div",{className:"otp-timer",children:[J>0?a.jsxs(a.Fragment,{children:["OTP expires in:"," ",a.jsx("strong",{style:{color:J<=15?"#ff6b6b":"#CE9A54"},children:$(J)})]}):a.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP expired!"}),a.jsxs("div",{style:{marginTop:6},children:["Did not receive OTP?"," ",a.jsx("button",{className:"resend-btn",onClick:me,disabled:!F,children:"Resend OTP"})]})]}),a.jsx("button",{className:"rp-sbtn teal",onClick:we,disabled:R.join("").length<6||s,children:s?"⏳ Registering...":"✅ Verify & Register"})]}):a.jsxs(a.Fragment,{children:[p&&a.jsxs("div",{className:"rp-error",children:["⚠️ ",p]}),a.jsxs("form",{onSubmit:me,children:[a.jsxs("div",{className:"rp-grid",children:[a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Full Name ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"👤"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"आपले पूर्ण नाव",value:o.fullName,onChange:pe("fullName"),autoFocus:!0})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"User Name"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🪪"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Username",value:o.userName,onChange:pe("userName")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Mobile Number ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📱"}),a.jsx("input",{className:"rp-finput",type:"tel",placeholder:"10 digit mobile",value:o.mobileNumber,onChange:pe("mobileNumber"),maxLength:10})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Email"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"✉️"}),a.jsx("input",{className:"rp-finput",type:"email",placeholder:"Email (optional)",value:o.email,onChange:pe("email")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Address"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🏠"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Address",value:o.address,onChange:pe("address")})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsx("label",{className:"rp-flbl",children:"Pincode"}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"📍"}),a.jsx("input",{className:"rp-finput",type:"text",placeholder:"Pincode",value:o.pincode,onChange:pe("pincode"),maxLength:6})]})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Password ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔒"}),a.jsx("input",{className:"rp-finput",type:m?"text":"password",placeholder:"Min. 6 characters",value:o.password,onChange:pe("password"),style:{paddingRight:38}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>y(!m),tabIndex:-1,children:m?"🙈":"👁️"})]}),a.jsx("div",{className:"rp-input-hint",children:"किमान 6 characters"})]}),a.jsxs("div",{className:"rp-fld",children:[a.jsxs("label",{className:"rp-flbl",children:["Confirm Password ",a.jsx("span",{className:"rp-req",children:"*"})]}),a.jsxs("div",{className:"rp-fwrap",children:[a.jsx("span",{className:"rp-ficon",children:"🔐"}),a.jsx("input",{className:"rp-finput",type:v?"text":"password",placeholder:"Password परत टाका",value:o.confirmPassword,onChange:pe("confirmPassword"),style:{paddingRight:38}}),a.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>C(!v),tabIndex:-1,children:v?"🙈":"👁️"})]})]})]}),a.jsx("button",{type:"submit",className:"rp-sbtn",disabled:de||!o.fullName||!o.mobileNumber||!o.password||!o.confirmPassword,children:de?"⏳ Sending OTP...":"📱 Send OTP & Register"})]}),a.jsxs("p",{className:"rp-signin",children:["Already have an account?",a.jsx("span",{className:"rp-link",onClick:()=>n("/login"),children:"Login"})]})]})]}),a.jsxs("div",{className:"rp-cfooter",children:[a.jsx("div",{className:"rp-cfdot"}),a.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),a.jsxs("div",{className:"rp-mayor-panel",style:{opacity:A?1:0,transform:A?"translate(0,0)":"translate(80px,-60px)"},children:[a.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),a.jsx("span",{className:"rp-mp-icon tr",children:"🤝"}),a.jsx("span",{className:"rp-mp-icon bl",children:"🏢"}),a.jsx("span",{className:"rp-mp-icon br",children:"🏙️"}),a.jsxs("div",{className:"rp-mayor-photo-wrap",children:[a.jsx("div",{className:"rp-mayor-ring",children:a.jsx("img",{src:vo,alt:"Mayor",className:"rp-mayor-photo"})}),a.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),a.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),a.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),a.jsx("div",{className:"rp-mayor-bar-wrap",children:a.jsx("div",{className:"rp-mayor-bar"})}),a.jsxs("div",{className:"rp-mayor-info",children:[a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"📅"}),a.jsx("span",{children:"Appointment सहज बुक करा"})]}),a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"🔔"}),a.jsx("span",{children:"SMS द्वारे notification मिळवा"})]}),a.jsxs("div",{className:"rp-mayor-info-item",children:[a.jsx("span",{className:"rp-mayor-info-icon",children:"🛡️"}),a.jsx("span",{children:"Secure Government Portal"})]})]})]})]})]})]})}function Nx({children:n}){return localStorage.getItem("citizenUser")?n:a.jsx(zp,{to:"/citizen-login",replace:!0})}function Tk(){const{isLoggedIn:n}=Ps(l=>l.auth),o=localStorage.getItem("authUser");return n||o?a.jsx(O4,{}):a.jsx(zp,{to:"/login",replace:!0})}function zk(){const n=zo();return b.useEffect(()=>{const o=localStorage.getItem("authUser");o&&n(Es(JSON.parse(o)))},[n]),a.jsxs(a.Fragment,{children:[a.jsx(BS,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),a.jsxs(L2,{children:[a.jsx(lt,{path:"/",element:a.jsxs(a.Fragment,{children:[a.jsx(Mn,{}),a.jsx(jx,{}),a.jsx(Dn,{})]})}),a.jsx(lt,{path:"/home",element:a.jsxs(a.Fragment,{children:[a.jsx(Mn,{}),a.jsx(jx,{}),a.jsx(Dn,{})]})}),a.jsx(lt,{path:"/login",element:a.jsxs(a.Fragment,{children:[a.jsx(Mn,{}),a.jsx(WS,{}),a.jsx(Dn,{})]})}),a.jsx(lt,{path:"/admin-login",element:a.jsxs(a.Fragment,{children:[a.jsx(Mn,{}),a.jsx(LS,{}),a.jsx(Dn,{})]})}),a.jsx(lt,{path:"/citizen-login",element:a.jsxs(a.Fragment,{children:[a.jsx(Mn,{}),a.jsx(US,{}),a.jsx(Dn,{})]})}),a.jsx(lt,{path:"/citizen-registration",element:a.jsxs(a.Fragment,{children:[a.jsx(Mn,{}),a.jsx(Ck,{}),a.jsx(Dn,{})]})}),a.jsx(lt,{path:"/register",element:a.jsx(FS,{})}),a.jsx(lt,{path:"/book-appointment",element:a.jsx(Nx,{children:a.jsxs(a.Fragment,{children:[a.jsx(Mn,{}),a.jsx(yk,{}),a.jsx(Dn,{})]})})}),a.jsx(lt,{path:"/my-appointments",element:a.jsx(Nx,{children:a.jsxs(a.Fragment,{children:[a.jsx(Mn,{}),a.jsx(Nk,{}),a.jsx(Dn,{})]})})}),a.jsxs(lt,{element:a.jsx(Tk,{}),children:[a.jsx(lt,{path:"/dashboard",element:a.jsx(r4,{})}),a.jsx(lt,{path:"/meetings",element:a.jsx(uk,{})}),a.jsx(lt,{path:"/meetingsubjects",element:a.jsx(Iu,{})}),a.jsx(lt,{path:"/proceedingsmeeting/:meetingId",element:a.jsx(Iu,{})}),a.jsx(lt,{path:"/proceedingsmeeting",element:a.jsx(Iu,{})}),a.jsx(lt,{path:"/allapplication",element:a.jsx(F4,{})}),a.jsx(lt,{path:"/allapplicationcitizens",element:a.jsx(sk,{})}),a.jsx(lt,{path:"/availability",element:a.jsx(ik,{})}),a.jsx(lt,{path:"/Jansanwadappform",element:a.jsx(e1,{})}),a.jsx(lt,{path:"/users",element:a.jsx(X4,{})}),a.jsx(lt,{path:"/corporators",element:a.jsx(Z4,{})})]}),a.jsx(lt,{path:"*",element:a.jsx(zp,{to:"/",replace:!0})})]})]})}const Ak=p5({reducer:{auth:C5}});T4();Bv.createRoot(document.getElementById("root")).render(a.jsx(Fe.StrictMode,{children:a.jsx(Dj,{store:Ak,children:a.jsx(lj,{children:a.jsx(zk,{})})})}));
