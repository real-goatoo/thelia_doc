"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[280],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(g,l(l({ref:e},m),{},{components:r})):n.createElement(g,l({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6401:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Global arguments",sidebar_position:1},l=void 0,i={unversionedId:"loops/global_arguments",id:"loops/global_arguments",title:"Global arguments",description:"These arguments can be set on all loops",source:"@site/docs/loops/global_arguments.md",sourceDirName:"loops",slug:"/loops/global_arguments",permalink:"/thelia_doc/docs/loops/global_arguments",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/global_arguments.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Global arguments",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Loops",permalink:"/thelia_doc/docs/loops/"},next:{title:"Search arguments",permalink:"/thelia_doc/docs/loops/search_arguments"}},p={},s=[],m={toc:s};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These arguments can be set on all loops"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backend_context"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Determine if loop is use in backend context."),(0,a.kt)("td",{parentName:"tr",align:"right"},"false"),(0,a.kt)("td",{parentName:"tr",align:"right"},'backend_context="on"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"force_return"),(0,a.kt)("td",{parentName:"tr",align:"center"},"force return result for i18n tables even if there is no record."),(0,a.kt)("td",{parentName:"tr",align:"right"},"false"),(0,a.kt)("td",{parentName:"tr",align:"right"},'force_return="on"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:"center"},"The maximum number of results to display."),(0,a.kt)("td",{parentName:"tr",align:"right"}),(0,a.kt)("td",{parentName:"tr",align:"right"},'limit="10"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name *"),(0,a.kt)("td",{parentName:"tr",align:"center"},"The loop name. This name must be unique and is used to reference this loop."),(0,a.kt)("td",{parentName:"tr",align:"right"}),(0,a.kt)("td",{parentName:"tr",align:"right"},'name="my_name_loop"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"offset"),(0,a.kt)("td",{parentName:"tr",align:"center"},"The first product to display offset. Will not be used if ",(0,a.kt)("inlineCode",{parentName:"td"},"page")," argument is set."),(0,a.kt)("td",{parentName:"tr",align:"right"},"0"),(0,a.kt)("td",{parentName:"tr",align:"right"},'offset="10"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"page"),(0,a.kt)("td",{parentName:"tr",align:"center"},"The page to display."),(0,a.kt)("td",{parentName:"tr",align:"right"}),(0,a.kt)("td",{parentName:"tr",align:"right"},'page="2"')))))}c.isMDXComponent=!0}}]);