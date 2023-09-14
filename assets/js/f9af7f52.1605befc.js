"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[7816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"smarty_plugins/{navigate}",id:"smarty_plugins/{navigate}",title:"{navigate}",description:"The  function is a convenient way to generate URLs pointing to common locations.",source:"@site/docs/smarty_plugins/{navigate}.md",sourceDirName:"smarty_plugins",slug:"/smarty_plugins/{navigate}",permalink:"/thelia_doc/docs/smarty_plugins/{navigate}",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/{navigate}.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"{intl}",permalink:"/thelia_doc/docs/smarty_plugins/{intl}"},next:{title:"{postage}",permalink:"/thelia_doc/docs/smarty_plugins/{postage}"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"{navigate}")," function is a convenient way to generate URLs pointing to common locations.",(0,r.kt)("br",{parentName:"p"}),"\n","This function has only one parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," which may take one of the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"current"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The absolute URL of the current page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"previous"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The absolute URL of the previous page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The absolute URL of the shop home page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"catalog_last"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The absolute URL of the last viewed catalog page, product or category. The index page URL is returned if no catalog page has been viewed yet.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"return to the shop home page : ",(0,r.kt)("inlineCode",{parentName:"li"},'<a href="{navigate to=\'index\'}">{intl l="Back to home"}</a>')),(0,r.kt)("li",{parentName:"ul"},"go back to the previous page : ",(0,r.kt)("inlineCode",{parentName:"li"},'<a href="{navigate to=\'previous\'}">{intl l="Back to home"}</a>')),(0,r.kt)("li",{parentName:"ul"},"reload the current page : ",(0,r.kt)("inlineCode",{parentName:"li"},'<a href="{navigate to=\'current\'}">{intl l="Reload !"}</a>'))),(0,r.kt)("p",null,"You can\u2019t add custom parameters to the URL generated by {navigate}. To do so, use it along with the ",(0,r.kt)("a",{parentName:"p",href:"./%7Burl%7D"},"{url}")," function :",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'{url path={navigate to="current"} limit="4"}'),(0,r.kt)("br",{parentName:"p"}),"\n","This way the limit=4 parameter is added to the URL : ",(0,r.kt)("inlineCode",{parentName:"p"},"http://www.myshop.com/current-page-url.html?limit=4")))}u.isMDXComponent=!0}}]);