"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[7597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"API"},i=void 0,c={unversionedId:"api/index",id:"api/index",title:"API",description:"Since 2.6.0 Thelia provide an admin API. This API is made with ApiPlatform and generate automatically an online documentation at yoursite.com/api/docs.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/api/index.md",tags:[],version:"current",frontMatter:{title:"API"},sidebar:"myAutogeneratedSidebar",previous:{title:"Update",permalink:"/docs/update"},next:{title:"Resources",permalink:"/docs/api/Resources"}},l={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since 2.6.0 Thelia provide an admin API. This API is made with ",(0,a.kt)("a",{parentName:"p",href:"https://api-platform.com/"},"ApiPlatform")," and generate automatically an online documentation at yoursite.com/api/docs."),(0,a.kt)("p",null,"Api platform has good documentation who can be readed ",(0,a.kt)("a",{parentName:"p",href:"https://api-platform.com/docs/distribution/"},"here")," but there are some specification due to Thelia and more specifically due to Propel instead of Doctrine as ORM.\nThis is the list of difference : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Api Resources, in propel Model are generated automatically as you change your schema so they can't be used as Api resource directly that's why we have to create a new class for each Propel model we want to be in API."),(0,a.kt)("li",{parentName:"ul"},"Resource addon, to allow module to add field in existing Thelia api route we have create the addons."),(0,a.kt)("li",{parentName:"ul"})))}u.isMDXComponent=!0}}]);