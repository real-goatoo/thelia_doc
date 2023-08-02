"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[9801],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),s=o(r),k=n,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return r?a.createElement(c,i(i({ref:e},m),{},{components:r})):a.createElement(c,i({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6056:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const l={title:"Delivery"},i=void 0,d={unversionedId:"loops/Delivery",id:"loops/Delivery",title:"Delivery",description:"delivery loop displays delivery modules information.",source:"@site/docs/loops/Delivery.md",sourceDirName:"loops",slug:"/loops/Delivery",permalink:"/docs/loops/Delivery",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Delivery.md",tags:[],version:"current",frontMatter:{title:"Delivery"},sidebar:"myAutogeneratedSidebar",previous:{title:"Customer",permalink:"/docs/loops/Customer"},next:{title:"Document",permalink:"/docs/loops/Document"}},p={},o=[{value:"Arguments",id:"delivery-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Order possible values",id:"delivery-order-possible-values",level:2}],m={toc:o};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"delivery loop displays delivery modules information.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="delivery" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"delivery-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"An address id."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"address=21")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A module code."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"code='Atos'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"country"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A country id."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"country=2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of module IDs to exclude from the results"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude="12, 21"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of module codes to exclude from the results"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude_code="Cheque,Atos"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A module id."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"module=4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values see ",(0,n.kt)("a",{parentName:"td",href:"#delivery-order-possible-values"},"sorting possible values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="id_reverse"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"state"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A state id."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"state=12")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the delivery module short description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the module code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DELIVERY_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the expected delivery date. This output could be empty.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the delivery module description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the delivery module id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the delivery price with taxes, expressed in the current currency")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE_TAX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The delivery price tax amount, expressed in the current currency")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE_TAX_RULE_TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The tax rule title used to get delivery price tax")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE_UNTAXED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the delivery price without taxes, expressed in the current currency")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the delivery module postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the delivery module title")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"global outputs")),(0,n.kt)("h2",{id:"delivery-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#delivery-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manual"),(0,n.kt)("td",{parentName:"tr",align:null},"manual_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"position as defined in back-office")))))}u.isMDXComponent=!0}}]);