!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";e.exports=r(6)},function(e,t,r){"use strict";var n,o=(n=r(3))&&n.__esModule?n:{default:n};window.draftail.registerControl(o.default)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(0)),o=u(r(1)),a=r(8),i=u(r(11));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=(0,e.getEditorState)().getCurrentContent().getPlainText(),r=(0,i.default)(t);if(r)n="FOG Index: "+r.index;else var n="FOG Index: N/A";return o.default.createElement(a.ToolbarButton,{name:"FOG_INDEX",icon:null,label:"".concat(n)})};l.propTypes={getEditorState:n.default.func.isRequired};var s=l;t.default=s},function(e,t,r){"use strict";var n=r(5);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,h=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var g="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$={};function w(e,t,r){this.props=e,this.context=t,this.refs=$,this.updater=r||b}function O(){}function x(e,t,r){this.props=e,this.context=t,this.refs=$,this.updater=r||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=w.prototype;var j=x.prototype=new O;j.constructor=x,n(j,w.prototype),j.isPureReactComponent=!0;var _={current:null},k={suspense:null},E={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n=void 0,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:E.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,z=[];function M(e,t,r,n){if(z.length){var o=z.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>z.length&&z.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return n(o,t,""===r?"."+U(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var s=0;s<t.length;s++){var c=r+U(u=t[s],s);l+=e(u,c,n,o)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=g&&t[g]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),s=0;!(u=t.next()).done;)l+=e(u=u.value,c=r+U(u,s++),n,o);else if("object"===u)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return l}(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function N(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(T,"$&/")+"/"),A(e,D,t=M(t,a,n,o)),I(t)}function q(){var e=_.current;if(null===e)throw v(Error(321));return e}var H={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return N(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,L,t=M(null,null,t,r)),I(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return N(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:w,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,r){return q().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,r){return q().useReducer(e,t,r)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:u,Profiler:s,StrictMode:l,Suspense:d,unstable_SuspenseList:y,createElement:C,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=void 0,i=n({},e.props),u=e.key,l=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,s=E.current),void 0!==t.key&&(u=""+t.key);var c=void 0;for(o in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)S.call(t,o)&&!P.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==c?c[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){c=Array(o);for(var f=0;f<o;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:a,type:e.type,key:u,ref:l,props:i,_owner:s}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:k,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},B={default:H},F=B&&H||B;e.exports=F.default||F},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,u,l=i(e),s=1;s<arguments.length;s++){for(var c in r=Object(arguments[s]))o.call(r,c)&&(l[c]=r[c]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(l[u[f]]=r[u[f]])}}return l}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ToolbarButton",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(9))&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(0)),o=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}}r.default=e,t&&t.set(e,r);return r}(r(1)),a=u(r(10));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=c(t).call(this,e))||"object"!==l(o)&&"function"!=typeof o?f(n):o).state={showTooltipOnHover:!0},r.onMouseDown=r.onMouseDown.bind(f(r)),r.onMouseLeave=r.onMouseLeave.bind(f(r)),r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"onMouseDown",value:function(e){var t=this.props,r=t.name,n=t.onClick;e.preventDefault(),this.setState({showTooltipOnHover:!1}),n(r)}},{key:"onMouseLeave",value:function(){this.setState({showTooltipOnHover:!0})}},{key:"render",value:function(){var e=this.props,t=e.name,r=e.active,n=e.label,i=e.title,u=e.icon,l=this.state.showTooltipOnHover;return o.default.createElement("button",{name:t,className:"Draftail-ToolbarButton".concat(r?" Draftail-ToolbarButton--active":""),type:"button","aria-label":i||null,"data-draftail-balloon":!(!i||!l)||null,tabIndex:-1,onMouseDown:this.onMouseDown,onMouseLeave:this.onMouseLeave},u?o.default.createElement(a.default,{icon:u}):null,n?o.default.createElement("span",{className:"Draftail-ToolbarButton__label"},n):null)}}])&&s(r.prototype,n),i&&s(r,i),t}(o.PureComponent);d.propTypes={name:n.default.string,active:n.default.bool,label:n.default.string,title:n.default.string,icon:n.default.oneOfType([n.default.string,n.default.arrayOf(n.default.string),n.default.node]),onClick:n.default.func},d.defaultProps={name:null,active:!1,label:null,title:null,icon:null,onClick:function(){}};var y=d;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t,r=e.icon,n=e.title,a=e.className;if("string"==typeof r)t=r.includes("#")?o.default.createElement("use",{xlinkHref:r}):o.default.createElement("path",{d:r});else{if(!Array.isArray(r))return r;t=r.map((function(e,t){return o.default.createElement("path",{key:t,d:e})}))}return o.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 1024 1024",className:"Draftail-Icon ".concat(a||""),"aria-hidden":!n||null,role:n?"img":null,"aria-label":n||null},t)};i.propTypes={icon:n.default.oneOfType([n.default.string,n.default.arrayOf(n.default.string),n.default.node]).isRequired,title:n.default.string,className:n.default.string},i.defaultProps={title:null,className:null};var u=i;t.default=u},function(e,t,r){"use strict";var n=r(12);e.exports=function(e){for(var t=e.replace(/[^a-zA-Z ]/g,"").split(" "),r=t.filter((function(e){return""!=e})).length,o=[],a=0;a<t.length;a++)n(t[a])>2&&o.push(t[a]);var i=.4*(r/(e.replace(/\S[.?!](\s|$)/g,"$1|").split("|").length-1)+o.length/r*100);return i=Math.floor(100*i)/100,{index:isFinite(i)?i:0}}},function(e,t,r){"use strict";var n=r(13),o=r(14),a=r(16);e.exports=function(e){var t=o(String(e)).toLowerCase().replace(g,"").split(m),r=t.length,n=-1,a=0;for(;++n<r;)a+=b(t[n].replace(v,""));return a};var i={}.hasOwnProperty,u=new RegExp(["cia(?:l|$)","tia","cius","cious","[^aeiou]giu","[aeiouy][^aeiouy]ion","iou","sia$","eous$","[oa]gue$",".[^aeiuoycgltdb]{2,}ed$",".ely$","^jua","uai","eau","^busi$","(?:[aeiouy](?:"+["[bcfgklmnprsvwxyz]","ch","dg","g[hn]","lch","l[lv]","mm","nch","n[cgn]","r[bcnsv]","squ","s[chkls]","th"].join("|")+")ed$)","(?:[aeiouy](?:"+["[bdfklmnprstvy]","ch","g[hn]","lch","l[lv]","mm","nch","nn","r[nsv]","squ","s[cklst]","th"].join("|")+")es$)"].join("|"),"g"),l=new RegExp("[aeiouy](?:"+["[bcdfgklmnprstvyz]","ch","dg","g[hn]","l[lv]","mm","n[cgn]","r[cnsv]","squ","s[cklst]","th"].join("|")+")e$","g"),s=new RegExp("(?:"+["([^aeiouy])\\1l","[^aeiouy]ie(?:r|s?t)","[aeiouym]bl","eo","ism","asm","thm","dnt","snt","uity","dea","gean","oa","ua","react?","orbed","eings?","[aeiouy]sh?e[rs]"].join("|")+")$","g"),c=new RegExp(["creat(?!u)","[^gq]ua[^auieo]","[aeiou]{3}","^(?:ia|mc|coa[dglx].)","^re(app|es|im|us)"].join("|"),"g"),f=new RegExp(["[^aeiou]y[ae]","[^l]lien","riet","dien","iu","io","ii","uen","real","iell","eo[^aeiou]","[aeiou]y[aeiou]"].join("|"),"g"),p=/[^s]ia/,d=new RegExp(["^(?:"+["un","fore","ware","none?","out","post","sub","pre","pro","dis","side","some"].join("|")+")","(?:"+["ly","less","some","ful","ers?","ness","cians?","ments?","ettes?","villes?","ships?","sides?","ports?","shires?","tion(?:ed|s)?"].join("|")+")$"].join("|"),"g"),y=new RegExp(["^(?:"+["above","anti","ante","counter","hyper","afore","agri","infra","intra","inter","over","semi","ultra","under","extra","dia","micro","mega","kilo","pico","nano","macro","somer"].join("|")+")","(?:"+["fully","berry","woman","women","edly"].join("|")+")$"].join("|"),"g"),h=/(creations?|ology|ologist|onomy|onomist)$/g,m=/\b/g,g=/['’]/g,v=/[^a-z]/g;function b(e){var t,r,o,m,g,v,b=0;if(0===e.length)return b;if(e.length<3)return 1;if(i.call(a,e))return a[e];if(o=n(e,1),i.call(a,o))return a[o];for(g=w(1),v=w(-1),t=-1,r=(m=(e=e.replace(h,$(3)).replace(y,$(2)).replace(d,$(1))).split(/[^aeiouy]+/)).length;++t<r;)""!==m[t]&&b++;return e.replace(u,v).replace(l,v),e.replace(s,g).replace(c,g).replace(f,g).replace(p,g),b||1;function $(e){return function(){return b+=e,""}}function w(e){return function(t){return b+=e,t}}}},function(e,t,r){e.exports=function(){var e=[],t=[],r={},n={},o={};function a(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function i(e,t){return e===t?t:e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function u(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,r){return t[r]||""}))}function l(e,t){return e.replace(t[0],(function(r,n){var o=u(t[1],arguments);return i(""===r?e[n-1]:r,o)}))}function s(e,t,n){if(!e.length||r.hasOwnProperty(e))return t;for(var o=n.length;o--;){var a=n[o];if(a[0].test(t))return l(t,a)}return t}function c(e,t,r){return function(n){var o=n.toLowerCase();return t.hasOwnProperty(o)?i(n,o):e.hasOwnProperty(o)?i(n,e[o]):s(o,n,r)}}function f(e,t,r,n){return function(n){var o=n.toLowerCase();return!!t.hasOwnProperty(o)||!e.hasOwnProperty(o)&&s(o,o,r)===o}}function p(e,t,r){return(r?t+" ":"")+(1===t?p.singular(e):p.plural(e))}return p.plural=c(o,n,e),p.isPlural=f(o,n,e),p.singular=c(n,o,t),p.isSingular=f(n,o,t),p.addPluralRule=function(t,r){e.push([a(t),r])},p.addSingularRule=function(e,r){t.push([a(e),r])},p.addUncountableRule=function(e){"string"!=typeof e?(p.addPluralRule(e,"$0"),p.addSingularRule(e,"$0")):r[e.toLowerCase()]=!0},p.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),o[e]=t,n[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach((function(e){return p.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return p.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return p.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(p.addUncountableRule),p}()},function(e,t,r){var n,o;o="undefined"!=typeof window?window:this,void 0===(n=function(){return o.document,n=r(15),a=null,function(r,o){return t=e,e=o||n,a=a&&t===e?a:function(e){return new RegExp("["+Object.keys(e).map((function(e){return String.fromCharCode(e)})).join(" ")+"]","g")}(e),r.replace(a,(function(t){return e[t.charCodeAt(0)]||t}))};var e,t,n,a}.call(t,r,t,e))||(e.exports=n)},function(e){e.exports=JSON.parse('{"105":"i","192":"A","193":"A","194":"A","195":"A","196":"A","197":"A","199":"C","200":"E","201":"E","202":"E","203":"E","204":"I","205":"I","206":"I","207":"I","209":"N","210":"O","211":"O","212":"O","213":"O","214":"O","216":"O","217":"U","218":"U","219":"U","220":"U","221":"Y","224":"a","225":"a","226":"a","227":"a","228":"a","229":"a","231":"c","232":"e","233":"e","234":"e","235":"e","236":"i","237":"i","238":"i","239":"i","241":"n","242":"o","243":"o","244":"o","245":"o","246":"o","248":"o","249":"u","250":"u","251":"u","252":"u","253":"y","255":"y","256":"A","257":"a","258":"A","259":"a","260":"A","261":"a","262":"C","263":"c","264":"C","265":"c","266":"C","267":"c","268":"C","269":"c","270":"D","271":"d","272":"D","273":"d","274":"E","275":"e","276":"E","277":"e","278":"E","279":"e","280":"E","281":"e","282":"E","283":"e","284":"G","285":"g","286":"G","287":"g","288":"G","289":"g","290":"G","291":"g","292":"H","293":"h","294":"H","295":"h","296":"I","297":"i","298":"I","299":"i","300":"I","301":"i","302":"I","303":"i","304":"I","308":"J","309":"j","310":"K","311":"k","313":"L","314":"l","315":"L","316":"l","317":"L","318":"l","319":"L","320":"l","321":"L","322":"l","323":"N","324":"n","325":"N","326":"n","327":"N","328":"n","332":"O","333":"o","334":"O","335":"o","336":"O","337":"o","338":"O","339":"o","340":"R","341":"r","342":"R","343":"r","344":"R","345":"r","346":"S","347":"s","348":"S","349":"s","350":"S","351":"s","352":"S","353":"s","354":"T","355":"t","356":"T","357":"t","358":"T","359":"t","360":"U","361":"u","362":"U","363":"u","364":"U","365":"u","366":"U","367":"u","368":"U","369":"u","370":"U","371":"u","372":"W","373":"w","374":"Y","375":"y","376":"Y","377":"Z","378":"z","379":"Z","380":"z","381":"Z","382":"z","384":"b","385":"B","386":"B","387":"b","390":"O","391":"C","392":"c","393":"D","394":"D","395":"D","396":"d","398":"E","400":"E","401":"F","402":"f","403":"G","407":"I","408":"K","409":"k","410":"l","412":"M","413":"N","414":"n","415":"O","416":"O","417":"o","420":"P","421":"p","422":"R","427":"t","428":"T","429":"t","430":"T","431":"U","432":"u","434":"V","435":"Y","436":"y","437":"Z","438":"z","461":"A","462":"a","463":"I","464":"i","465":"O","466":"o","467":"U","468":"u","477":"e","484":"G","485":"g","486":"G","487":"g","488":"K","489":"k","490":"O","491":"o","500":"G","501":"g","504":"N","505":"n","512":"A","513":"a","514":"A","515":"a","516":"E","517":"e","518":"E","519":"e","520":"I","521":"i","522":"I","523":"i","524":"O","525":"o","526":"O","527":"o","528":"R","529":"r","530":"R","531":"r","532":"U","533":"u","534":"U","535":"u","536":"S","537":"s","538":"T","539":"t","542":"H","543":"h","544":"N","545":"d","548":"Z","549":"z","550":"A","551":"a","552":"E","553":"e","558":"O","559":"o","562":"Y","563":"y","564":"l","565":"n","566":"t","567":"j","570":"A","571":"C","572":"c","573":"L","574":"T","575":"s","576":"z","579":"B","580":"U","581":"V","582":"E","583":"e","584":"J","585":"j","586":"Q","587":"q","588":"R","589":"r","590":"Y","591":"y","592":"a","593":"a","595":"b","596":"o","597":"c","598":"d","599":"d","600":"e","603":"e","604":"e","605":"e","606":"e","607":"j","608":"g","609":"g","610":"g","613":"h","614":"h","616":"i","618":"i","619":"l","620":"l","621":"l","623":"m","624":"m","625":"m","626":"n","627":"n","628":"n","629":"o","633":"r","634":"r","635":"r","636":"r","637":"r","638":"r","639":"r","640":"r","641":"r","642":"s","647":"t","648":"t","649":"u","651":"v","652":"v","653":"w","654":"y","655":"y","656":"z","657":"z","663":"c","665":"b","666":"e","667":"g","668":"h","669":"j","670":"k","671":"l","672":"q","686":"h","688":"h","690":"j","691":"r","692":"r","694":"r","695":"w","696":"y","737":"l","738":"s","739":"x","780":"v","829":"x","851":"x","867":"a","868":"e","869":"i","870":"o","871":"u","872":"c","873":"d","874":"h","875":"m","876":"r","877":"t","878":"v","879":"x","7424":"a","7427":"b","7428":"c","7429":"d","7431":"e","7432":"e","7433":"i","7434":"j","7435":"k","7436":"l","7437":"m","7438":"n","7439":"o","7440":"o","7441":"o","7442":"o","7443":"o","7446":"o","7447":"o","7448":"p","7449":"r","7450":"r","7451":"t","7452":"u","7453":"u","7454":"u","7455":"m","7456":"v","7457":"w","7458":"z","7522":"i","7523":"r","7524":"u","7525":"v","7680":"A","7681":"a","7682":"B","7683":"b","7684":"B","7685":"b","7686":"B","7687":"b","7690":"D","7691":"d","7692":"D","7693":"d","7694":"D","7695":"d","7696":"D","7697":"d","7698":"D","7699":"d","7704":"E","7705":"e","7706":"E","7707":"e","7710":"F","7711":"f","7712":"G","7713":"g","7714":"H","7715":"h","7716":"H","7717":"h","7718":"H","7719":"h","7720":"H","7721":"h","7722":"H","7723":"h","7724":"I","7725":"i","7728":"K","7729":"k","7730":"K","7731":"k","7732":"K","7733":"k","7734":"L","7735":"l","7738":"L","7739":"l","7740":"L","7741":"l","7742":"M","7743":"m","7744":"M","7745":"m","7746":"M","7747":"m","7748":"N","7749":"n","7750":"N","7751":"n","7752":"N","7753":"n","7754":"N","7755":"n","7764":"P","7765":"p","7766":"P","7767":"p","7768":"R","7769":"r","7770":"R","7771":"r","7774":"R","7775":"r","7776":"S","7777":"s","7778":"S","7779":"s","7786":"T","7787":"t","7788":"T","7789":"t","7790":"T","7791":"t","7792":"T","7793":"t","7794":"U","7795":"u","7796":"U","7797":"u","7798":"U","7799":"u","7804":"V","7805":"v","7806":"V","7807":"v","7808":"W","7809":"w","7810":"W","7811":"w","7812":"W","7813":"w","7814":"W","7815":"w","7816":"W","7817":"w","7818":"X","7819":"x","7820":"X","7821":"x","7822":"Y","7823":"y","7824":"Z","7825":"z","7826":"Z","7827":"z","7828":"Z","7829":"z","7835":"s","7840":"A","7841":"a","7842":"A","7843":"a","7864":"E","7865":"e","7866":"E","7867":"e","7868":"E","7869":"e","7880":"I","7881":"i","7882":"I","7883":"i","7884":"O","7885":"o","7886":"O","7887":"o","7908":"U","7909":"u","7910":"U","7911":"u","7922":"Y","7923":"y","7924":"Y","7925":"y","7926":"Y","7927":"y","7928":"Y","7929":"y","8305":"i","8341":"h","8342":"k","8343":"l","8344":"m","8345":"n","8346":"p","8347":"s","8348":"t","8450":"c","8458":"g","8459":"h","8460":"h","8461":"h","8464":"i","8465":"i","8466":"l","8467":"l","8468":"l","8469":"n","8472":"p","8473":"p","8474":"q","8475":"r","8476":"r","8477":"r","8484":"z","8488":"z","8492":"b","8493":"c","8495":"e","8496":"e","8497":"f","8498":"F","8499":"m","8500":"o","8506":"q","8513":"g","8514":"l","8515":"l","8516":"y","8517":"d","8518":"d","8519":"e","8520":"i","8521":"j","8526":"f","8579":"C","8580":"c","8765":"s","8766":"s","8959":"z","8999":"x","9746":"x","9776":"i","9866":"i","10005":"x","10006":"x","10007":"x","10008":"x","10625":"z","10626":"z","11362":"L","11364":"R","11365":"a","11366":"t","11373":"A","11374":"M","11375":"A","11390":"S","11391":"Z","19904":"i","42893":"H","42922":"H","42923":"E","42924":"G","42925":"L","42928":"K","42929":"T","62937":"x"}')},function(e){e.exports=JSON.parse('{"abalone":4,"abare":3,"abbruzzese":4,"abed":2,"aborigine":5,"abruzzese":4,"acreage":3,"adame":3,"adieu":2,"adobe":3,"anemone":4,"apache":3,"aphrodite":4,"apostrophe":4,"ariadne":4,"cafe":2,"calliope":4,"catastrophe":4,"chile":2,"chloe":2,"circe":2,"coyote":3,"daphne":2,"epitome":4,"eurydice":4,"euterpe":3,"every":2,"everywhere":3,"forever":3,"gethsemane":4,"guacamole":4,"hermione":4,"hyperbole":4,"jesse":2,"jukebox":2,"karate":3,"machete":3,"maybe":2,"newlywed":3,"penelope":4,"people":2,"persephone":4,"phoebe":2,"pulse":1,"queue":1,"recipe":3,"riverbed":3,"sesame":3,"shoreline":2,"simile":3,"snuffleupagus":5,"sometimes":2,"syncope":3,"tamale":3,"waterbed":3,"wednesday":2,"yosemite":4,"zoe":2}')}]);