"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[8236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,y=m["".concat(o,".").concat(u)]||m[u]||s[u]||c;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const c={},i=void 0,l={unversionedId:"smarty_plugins/{cache}",id:"smarty_plugins/{cache}",title:"{cache}",description:"The cache block uses the thelia.cache service.",source:"@site/docs/smarty_plugins/{cache}.md",sourceDirName:"smarty_plugins",slug:"/smarty_plugins/{cache}",permalink:"/thelia_doc/docs/smarty_plugins/{cache}",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/{cache}.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"{product}",permalink:"/thelia_doc/docs/smarty_plugins/substitutions/{product}"},next:{title:"{check_auth}",permalink:"/thelia_doc/docs/smarty_plugins/{check_auth}"}},o={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Simple",id:"simple",level:3},{value:"By customer",id:"by-customer",level:3},{value:"By admin",id:"by-admin",level:3},{value:"Disable currency specific cache",id:"disable-currency-specific-cache",level:3},{value:"Conditional cache",id:"conditional-cache",level:3}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The cache block uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"thelia.cache")," service.    "),(0,r.kt)("p",null,"You can add this block on static parts (menu, footer, \u2026) of your site to improve the generation time of your web pages"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In dev mode, the cache is disabled.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(mandatory) a unique key to identify the cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ttl")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(mandatory) a time to live in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lang")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specific cache by lang, (default: current lang id)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"currency")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specific cache by currency, (default: current currency id)")))),(0,r.kt)("p",null,"You can also add as many arguments as you need. These arguments will be used to generate a unique key."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{cache key="my-cache" ttl=600}\n    ... HTML or Smarty code ...\n{/cache}\n')),(0,r.kt)("h3",{id:"by-customer"},"By customer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{cache key="my-cache" ttl=600 customer_id=$CUSTOMER_ID}\n    ... HTML or Smarty code specific by customer ...\n{/cache}\n')),(0,r.kt)("h3",{id:"by-admin"},"By admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{cache key="my-cache" ttl=600 admin_id_=$ADMIN_ID}\n    ... HTML or Smarty code specific by admin ...\n{/cache}\n')),(0,r.kt)("h3",{id:"disable-currency-specific-cache"},"Disable currency specific cache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{cache key="my-cache" ttl=600 currency"no"}\n    ... HTML or Smarty code same for every currency ...\n{/cache}\n')),(0,r.kt)("h3",{id:"conditional-cache"},"Conditional cache"),(0,r.kt)("p",null,"You can disable the caching of a block without delete it. For this, you must specify a ttl to 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{$ttl = 600}\n{if $myCondition}\n    {$ttl = 0}\n{/if}\n\n{cache key="my-cache" ttl=$ttl}\n    ... HTML or Smarty code ...\n{/cache}\n\n')))}s.isMDXComponent=!0}}]);