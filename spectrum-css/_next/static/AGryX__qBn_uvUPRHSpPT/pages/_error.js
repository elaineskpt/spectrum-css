(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"+iuc":function(e,t,r){r("wgeU"),r("FlQf"),r("bBy9"),r("B9jh"),r("dL40"),r("xvv9"),r("V+O7"),e.exports=r("WEpk").Set},"/0+H":function(e,t,r){"use strict";var n=r("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};n(t,"__esModule",{value:!0});var o=a(r("q1tI")),i=r("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery;return r||a&&(void 0!==o&&o)}t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))}},"0tVQ":function(e,t,r){r("FlQf"),r("VJsP"),e.exports=r("WEpk").Array.from},"1HF/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r("Y0NT")}])},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,r){"use strict";var n=r("ttDY"),a=r("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var i=o(r("q1tI")),u=o(r("Xuae")),c=r("lwAK"),s=r("FYa8"),l=r("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=f;var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce(function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)},[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new n,t=new n,r=new n,a={};return function(o){if(o.key&&"number"!==typeof o.key&&0===o.key.indexOf(".$"))return!e.has(o.key)&&(e.add(o.key),!0);switch(o.type){case"title":case"base":if(t.has(o.type))return!1;t.add(o.type);break;case"meta":for(var i=0,u=p.length;i<u;i++){var c=p[i];if(o.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var s=o.props[c],l=a[c]||new n;if(l.has(s))return!1;l.add(s),a[c]=l}}}return!0}}()).reverse().map(function(e,t){var r=e.key||t;return i.default.cloneElement(e,{key:r})})}var h=u.default();function m(e){var t=e.children;return i.default.createElement(c.AmpStateContext.Consumer,null,function(e){return i.default.createElement(s.HeadManagerContext.Consumer,null,function(r){return i.default.createElement(h,{reduceComponentsToState:v,handleStateChange:r,inAmpMode:l.isInAmpMode(e)},t)})})}m.rewind=h.rewind,t.default=m},B9jh:function(e,t,r){"use strict";var n=r("Wu5q"),a=r("n3ko");e.exports=r("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return n.def(a(this,"Set"),e=0===e?0:e,e)}},n)},FYa8:function(e,t,r){"use strict";var n=r("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};n(t,"__esModule",{value:!0});var o=a(r("q1tI"));t.HeadManagerContext=o.createContext(null)},IP1Z:function(e,t,r){"use strict";var n=r("2faE"),a=r("rr1i");e.exports=function(e,t,r){t in e?n.f(e,t,a(0,r)):e[t]=r}},PQJW:function(e,t,r){var n=r("d04V"),a=r("yLu3");e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}},TbGu:function(e,t,r){var n=r("fGSI"),a=r("PQJW"),o=r("2PDY");e.exports=function(e){return n(e)||a(e)||o()}},"V+O7":function(e,t,r){r("aPfg")("Set")},VJsP:function(e,t,r){"use strict";var n=r("2GTP"),a=r("Y7ZC"),o=r("JB68"),i=r("sNwI"),u=r("NwJ3"),c=r("tEej"),s=r("IP1Z"),l=r("fNZA");a(a.S+a.F*!r("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,a,f,d=o(e),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,g=l(d);if(m&&(h=n(h,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&u(g))for(r=new p(t=c(d.length));t>y;y++)s(r,y,m?h(d[y],y):d[y]);else for(f=g.call(d),r=new p;!(a=f.next()).done;y++)s(r,y,m?i(f,h,[a.value,y],!0):a.value);return r.length=y,r}})},VKFn:function(e,t,r){r("bBy9"),r("FlQf"),e.exports=r("ldVq")},Xuae:function(e,t,r){"use strict";var n=r("/HRN"),a=r("ZDA2"),o=r("/+P4"),i=r("K47E"),u=r("WaGi"),c=r("N9n2"),s=r("TbGu"),l=r("ttDY");r("hfKm")(t,"__esModule",{value:!0});var f=r("q1tI"),d=!1;t.default=function(){var e,t=new l;function r(r){e=r.props.reduceComponentsToState(s(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(s){function l(e){var u;return n(this,l),u=a(this,o(l).call(this,e)),d&&(t.add(i(u)),r(i(u))),u}return c(l,s),u(l,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),u(l,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},Y0NT:function(e,t,r){"use strict";r.r(t);var n=r("0iUn"),a=r("sLSF"),o=r("MI3g"),i=r("a7VT"),u=r("Tit0"),c=r("q1tI"),s=r.n(c),l=(r("8Kt/"),r("YFqc"),r("TSYQ")),f=r.n(l),d=r("ISDn"),p=r.n(d),v=r("nOHt"),h=s.a.createElement,m=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e;switch(this.props.errorCode){case 200:case 404:e=h("div",{className:f()("afg-row",p.a.row)},h("div",{className:f()("afg-col-xs-12",p.a.container)},h("div",null,h("img",{src:"".concat("/spectrum-css","/static/404.svg")})),h("div",{className:f()("spectrum-Heading1--quiet",p.a.header)},"Error 404: page not found"),h("div",{className:f()("spectrum-Body4",p.a.body)},h("em",null,"The page isn't available. Try checking the URL or visit a different page."))));break;case 500:e=h("div",{className:f()("afg-row",p.a.row)},h("div",{className:f()("afg-col-xs-12",p.a.container)},h("div",null,h("img",{src:"".concat("/spectrum-css","/static/404.svg")})),h("div",{className:f()("spectrum-Heading1--quiet",p.a.header)},"An error has occurred"),h("div",{className:f()("spectrum-Body4",p.a.body)},h("em",null,"Try reloading this page, and if the error persists, contact the Spectrum team to report it."))));break;default:e=h("div",{className:f()("afg-row",p.a.row)},h("div",{className:f()("afg-col-xs-12",p.a.container)},h("div",null,h("img",{src:"".concat("/spectrum-css","/static/404.svg")})),h("div",{className:f()("spectrum-Heading1--quiet",p.a.header)},"Error 404: page not found"),h("div",{className:f()("spectrum-Body4",p.a.body)},h("em",null,"Try reloading this page, and if the error persists, contact the Spectrum team to report it."))))}return e}}],[{key:"propTypes",value:function(){return{errorCode:s.a.PropTypes.number.isRequired,url:s.a.PropTypes.string.isRequired}}},{key:"getInitialProps",value:function(e){var t=e.res,r=e.xhr;return{errorCode:t?t.statusCode:r?r.status:null}}}]),t}(s.a.Component);t.default=Object(v.withRouter)(m)},d04V:function(e,t,r){e.exports=r("0tVQ")},dL40:function(e,t,r){var n=r("Y7ZC");n(n.P+n.R,"Set",{toJSON:r("8iia")("Set")})},fGSI:function(e,t,r){var n=r("p0XB");e.exports=function(e){if(n(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},ldVq:function(e,t,r){var n=r("QMMT"),a=r("UWiX")("iterator"),o=r("SBuE");e.exports=r("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(n(t))}},lwAK:function(e,t,r){"use strict";var n=r("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};n(t,"__esModule",{value:!0});var o=a(r("q1tI"));t.AmpStateContext=o.createContext({})},ttDY:function(e,t,r){e.exports=r("+iuc")},xvv9:function(e,t,r){r("cHUd")("Set")},yLu3:function(e,t,r){e.exports=r("VKFn")}},[["1HF/",1,0,2]]]);