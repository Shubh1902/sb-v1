import e from"react";function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t,n={exports:{}},o={exports:{}},a={};var i,c,u,f,s,l,p,y,d,m,v,b,h,g,S={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function O(){return c||(c=1,"production"===process.env.NODE_ENV?o.exports=function(){if(t)return a;t=1;var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,v=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case s:case l:case o:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case f:case p:case v:case m:case u:return e;default:return t}}case n:return t}}}function w(e){return O(e)===l}return a.AsyncMode=s,a.ConcurrentMode=l,a.ContextConsumer=f,a.ContextProvider=u,a.Element=r,a.ForwardRef=p,a.Fragment=o,a.Lazy=v,a.Memo=m,a.Portal=n,a.Profiler=c,a.StrictMode=i,a.Suspense=y,a.isAsyncMode=function(e){return w(e)||O(e)===s},a.isConcurrentMode=w,a.isContextConsumer=function(e){return O(e)===f},a.isContextProvider=function(e){return O(e)===u},a.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},a.isForwardRef=function(e){return O(e)===p},a.isFragment=function(e){return O(e)===o},a.isLazy=function(e){return O(e)===v},a.isMemo=function(e){return O(e)===m},a.isPortal=function(e){return O(e)===n},a.isProfiler=function(e){return O(e)===c},a.isStrictMode=function(e){return O(e)===i},a.isSuspense=function(e){return O(e)===y},a.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===c||e===i||e===y||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===u||e.$$typeof===f||e.$$typeof===p||e.$$typeof===h||e.$$typeof===g||e.$$typeof===S||e.$$typeof===b)},a.typeOf=O,a}():o.exports=(i||(i=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,s=e?Symbol.for("react.forward_ref"):60112,l=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case r:var m=e.type;switch(m){case u:case f:case n:case a:case o:case l:return m;default:var v=m&&m.$$typeof;switch(v){case c:case s:case d:case y:case i:return v;default:return p}}case t:return p}}}var O=u,w=f,E=c,x=i,$=r,j=s,T=n,P=d,_=y,N=t,C=a,R=o,k=l,I=!1;function A(e){return g(e)===f}S.AsyncMode=O,S.ConcurrentMode=w,S.ContextConsumer=E,S.ContextProvider=x,S.Element=$,S.ForwardRef=j,S.Fragment=T,S.Lazy=P,S.Memo=_,S.Portal=N,S.Profiler=C,S.StrictMode=R,S.Suspense=k,S.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||g(e)===u},S.isConcurrentMode=A,S.isContextConsumer=function(e){return g(e)===c},S.isContextProvider=function(e){return g(e)===i},S.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},S.isForwardRef=function(e){return g(e)===s},S.isFragment=function(e){return g(e)===n},S.isLazy=function(e){return g(e)===d},S.isMemo=function(e){return g(e)===y},S.isPortal=function(e){return g(e)===t},S.isProfiler=function(e){return g(e)===a},S.isStrictMode=function(e){return g(e)===o},S.isSuspense=function(e){return g(e)===l},S.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===f||e===a||e===o||e===l||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h||e.$$typeof===m)},S.typeOf=g}()),S)),o.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function w(){if(f)return u;f=1;var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;return u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var a,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),u=1;u<arguments.length;u++){for(var f in a=Object(arguments[u]))r.call(a,f)&&(c[f]=a[f]);if(e){i=e(a);for(var s=0;s<i.length;s++)t.call(a,i[s])&&(c[i[s]]=a[i[s]])}}return c},u}function E(){if(l)return s;l=1;return s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function x(){return y?p:(y=1,p=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var $=O();n.exports=function(){if(b)return v;b=1;var e=O(),r=w(),t=E(),n=x(),o=function(){if(m)return d;m=1;var e=function(){};if("production"!==process.env.NODE_ENV){var r=E(),t={},n=x();e=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function o(o,a,i,c,u){if("production"!==process.env.NODE_ENV)for(var f in o)if(n(o,f)){var s;try{if("function"!=typeof o[f]){var l=Error((c||"React class")+": "+i+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}s=o[f](a,f,c,i,null,r)}catch(e){s=e}if(!s||s instanceof Error||e((c||"React class")+": type specification of "+i+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in t)){t[s.message]=!0;var p=u?u():"";e("Failed "+i+" type: "+s.message+(null!=p?p:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(t={})},d=o}(),a=function(){};function i(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),v=function(c,u){var f="function"==typeof Symbol&&Symbol.iterator,s="@@iterator",l="<<anonymous>>",p={array:v("array"),bigint:v("bigint"),bool:v("boolean"),func:v("function"),number:v("number"),object:v("object"),string:v("string"),symbol:v("symbol"),any:m(i),arrayOf:function(e){return m((function(r,n,o,a,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=r[n];if(!Array.isArray(c))return new d("Invalid "+a+" `"+i+"` of type `"+g(c)+"` supplied to `"+o+"`, expected an array.");for(var u=0;u<c.length;u++){var f=e(c,u,o,a,i+"["+u+"]",t);if(f instanceof Error)return f}return null}))},element:m((function(e,r,t,n,o){var a=e[r];return c(a)?null:new d("Invalid "+n+" `"+o+"` of type `"+g(a)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:m((function(r,t,n,o,a){var i=r[t];return e.isValidElementType(i)?null:new d("Invalid "+o+" `"+a+"` of type `"+g(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(r,t,n,o,a){if(!(r[t]instanceof e)){var i=e.name||l;return new d("Invalid "+o+" `"+a+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:l)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var c;return null}))},node:m((function(e,r,t,n,o){return h(e[r])?null:new d("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(r,o,a,i,c){if("function"!=typeof e)return new d("Property `"+c+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var u=r[o],f=g(u);if("object"!==f)return new d("Invalid "+i+" `"+c+"` of type `"+f+"` supplied to `"+a+"`, expected an object.");for(var s in u)if(n(u,s)){var l=e(u,s,a,i,c+"."+s,t);if(l instanceof Error)return l}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(r,t,n,o,a){for(var i=r[t],c=0;c<e.length;c++)if(y(i,e[c]))return null;var u=JSON.stringify(e,(function(e,r){return"symbol"===S(r)?String(r):r}));return new d("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+u+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),i)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+O(o)+" at index "+r+"."),i}return m((function(r,o,a,i,c){for(var u=[],f=0;f<e.length;f++){var s=(0,e[f])(r,o,a,i,c,t);if(null==s)return null;s.data&&n(s.data,"expectedType")&&u.push(s.data.expectedType)}return new d("Invalid "+i+" `"+c+"` supplied to `"+a+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(r,n,o,a,i){var c=r[n],u=g(c);if("object"!==u)return new d("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var f in e){var s=e[f];if("function"!=typeof s)return b(o,a,i,f,S(s));var l=s(c,f,o,a,i+"."+f,t);if(l)return l}return null}))},exact:function(e){return m((function(o,a,i,c,u){var f=o[a],s=g(f);if("object"!==s)return new d("Invalid "+c+" `"+u+"` of type `"+s+"` supplied to `"+i+"`, expected `object`.");var l=r({},o[a],e);for(var p in l){var y=e[p];if(n(e,p)&&"function"!=typeof y)return b(i,c,u,p,S(y));if(!y)return new d("Invalid "+c+" `"+u+"` key `"+p+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(f,p,i,c,u+"."+p,t);if(m)return m}return null}))}};function y(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function d(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function m(e){if("production"!==process.env.NODE_ENV)var r={},n=0;function o(o,i,c,f,s,p,y){if(f=f||l,p=p||c,y!==t){if(u){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var v=f+":"+c;!r[v]&&n<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[v]=!0,n++)}}return null==i[c]?o?null===i[c]?new d("The "+s+" `"+p+"` is marked as required in `"+f+"`, but its value is `null`."):new d("The "+s+" `"+p+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(i,c,f,s,p)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function v(e){return m((function(r,t,n,o,a,i){var c=r[t];return g(c)!==e?new d("Invalid "+o+" `"+a+"` of type `"+S(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,o){return new d((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||c(e))return!0;var r=function(e){var r=e&&(f&&e[f]||e[s]);if("function"==typeof r)return r}(e);if(!r)return!1;var t,n=r.call(e);if(r!==e.entries){for(;!(t=n.next()).done;)if(!h(t.value))return!1}else for(;!(t=n.next()).done;){var o=t.value;if(o&&!h(o[1]))return!1}return!0;default:return!1}}function g(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function S(e){if(null==e)return""+e;var r=g(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function O(e){var r=S(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return d.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},v}()($.isElement,!0)}else n.exports=function(){if(g)return h;g=1;var e=E();function r(){}function t(){}return t.resetWarningCache=r,h=function(){function n(r,t,n,o,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return a.PropTypes=a,a}}()();var j=r(n.exports),T=function(r){return r.user,r.onLogin,r.onLogout,r.onCreateAccount,e.createElement("header",null,e.createElement("div",{className:"storybook-header"},e.createElement("div",null,e.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e.createElement("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e.createElement("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),e.createElement("h1",null,"Acme"))))};T.propTypes={user:j.shape({name:j.string.isRequired}),onLogin:j.func.isRequired,onLogout:j.func.isRequired,onCreateAccount:j.func.isRequired},T.defaultProps={user:null};export{T as Header};
//# sourceMappingURL=bundle.esm.js.map
