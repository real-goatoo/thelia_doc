"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[2091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Search arguments",sidebar_position:2},i=void 0,l={unversionedId:"loops/search_arguments",id:"loops/search_arguments",title:"Search arguments",description:"These arguments can be set on all loops that are searchable",source:"@site/docs/loops/search_arguments.md",sourceDirName:"loops",slug:"/loops/search_arguments",permalink:"/thelia_doc/docs/loops/search_arguments",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/search_arguments.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Search arguments",sidebar_position:2},sidebar:"docs",previous:{title:"Global arguments",permalink:"/thelia_doc/docs/loops/global_arguments"},next:{title:"Global outputs",permalink:"/thelia_doc/docs/loops/global_outputs"}},s={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These arguments can be set on all loops that are searchable"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"search_in"),(0,a.kt)("td",{parentName:"tr",align:"center"},"A comma separated list of fields in which the search is performed. Possible values : ref, title, chapo, description, postscriptum."),(0,a.kt)("td",{parentName:"tr",align:"right"}),(0,a.kt)("td",{parentName:"tr",align:"right"},'search_in="title"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"search_mode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"The search mode : ",(0,a.kt)("inlineCode",{parentName:"td"},"any_word")," (search any word separeted by a space), ",(0,a.kt)("inlineCode",{parentName:"td"},"sentence")," (the sentence, anywhere in the field) or ",(0,a.kt)("inlineCode",{parentName:"td"},"strict_sentence")," (the exact sentence)."),(0,a.kt)("td",{parentName:"tr",align:"right"},"strict_sentence"),(0,a.kt)("td",{parentName:"tr",align:"right"},'search_mode="strict_sentence"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"search_term"),(0,a.kt)("td",{parentName:"tr",align:"center"},"The term to search."),(0,a.kt)("td",{parentName:"tr",align:"right"},"0"),(0,a.kt)("td",{parentName:"tr",align:"right"},'search_term="my product"')))))}m.isMDXComponent=!0}}]);