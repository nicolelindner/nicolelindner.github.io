(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{5177:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exhibitions",function(){return t(8557)}])},3912:function(e){"use strict";e.exports="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,o=(i=t(7294))&&i.__esModule?i:{default:i},a=t(6273),u=t(387),c=t(7190);var l={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,i=u.useRouter(),f=o.default.useMemo((function(){var n=r(a.resolveHref(i,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?a.resolveHref(i,e.as):o||t}}),[i,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,b=e.scroll,_=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var x=(n=o.default.Children.only(v))&&"object"===typeof n&&n.ref,y=r(c.useIntersection({rootMargin:"200px"}),2),E=y[0],g=y[1],w=o.default.useCallback((function(e){E(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,E]);o.default.useEffect((function(){var e=g&&t&&a.isLocalURL(d),n="undefined"!==typeof _?_:i&&i.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(i,d,p,{locale:n})}),[p,d,g,_,t,i]);var j={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,u,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[i?"replace":"push"](t,r,{shallow:o,locale:c,scroll:u}))}(e,i,d,p,h,m,b,_)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&s(i,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof _?_:i&&i.locale,C=i&&i.isLocaleDomain&&a.getDomainLocale(p,L,i&&i.locales,i&&i.domainLocales);j.href=C||a.addBasePath(a.addLocale(p,L,i&&i.defaultLocale))}return o.default.cloneElement(n,j)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,c=i.useRef(),l=r(i.useState(!1),2),s=l[0],f=l[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||s||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),u.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return i.useEffect((function(){if(!a&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var i=t(7294),o=t(9311),a="undefined"!==typeof IntersectionObserver;var u=new Map},8557:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(5893),i=t(9008),o=t(1664),a=t(3171),u=t.n(a),c=t(3912),l=t.n(c);function s(){return(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"nicole lindner | exhibitions"}),(0,r.jsx)("meta",{name:"description",content:"Nicole Lindner's exhibitions"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("div",{className:u().navContainer,children:(0,r.jsxs)("nav",{className:u().nav,children:[(0,r.jsx)(o.default,{href:"/about",children:"About"}),(0,r.jsx)(o.default,{href:"/about",children:"Conversations"}),(0,r.jsx)("span",{className:u().selected,children:"Exhibitions"}),(0,r.jsx)(o.default,{href:"/about",children:"Projects"})]})}),(0,r.jsx)("main",{className:u().main,children:(0,r.jsx)("p",{className:u().about,children:l()})})]})}},3171:function(e){e.exports={container:"Exhibitions_container__VL0mD",navContainer:"Exhibitions_navContainer__waToC",nav:"Exhibitions_nav__BLb7f",selected:"Exhibitions_selected__b9726",main:"Exhibitions_main__S0q1a",about:"Exhibitions_about__AqoHn"}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=5177,e(e.s=n);var n}));var n=e.O();_N_E=n}]);