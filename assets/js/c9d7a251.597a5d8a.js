"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[3798],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(r),d=o,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(b,l(l({ref:e},c),{},{components:r})):n.createElement(b,l({ref:e},c))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1396:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Global outputs",sidebar_position:3},l=void 0,i={unversionedId:"loops/global_outputs",id:"loops/global_outputs",title:"Global outputs",description:"These output can be got on from all loops",source:"@site/docs/loops/global_outputs.md",sourceDirName:"loops",slug:"/loops/global_outputs",permalink:"/docs/loops/global_outputs",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/global_outputs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Global outputs",sidebar_position:3},sidebar:"myAutogeneratedSidebar",previous:{title:"Search arguments",permalink:"/docs/loops/search_arguments"},next:{title:"Accessory",permalink:"/docs/loops/Accessory"}},p={},s=[],c={toc:s};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These output can be got on from all loops"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"$LOOP_COUNT"),(0,o.kt)("td",{parentName:"tr",align:"center"},"The current results index, starting from 1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"$LOOP_TOTAL"),(0,o.kt)("td",{parentName:"tr",align:"center"},"The total number of results returned by the loop")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"$CREATE_DATE"),(0,o.kt)("td",{parentName:"tr",align:"center"},"The creation date of the item (only available for timestampable items)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"$UPDATE_DATE"),(0,o.kt)("td",{parentName:"tr",align:"center"},"The date of last update for the item (only available for timestampable items)")))))}u.isMDXComponent=!0}}]);