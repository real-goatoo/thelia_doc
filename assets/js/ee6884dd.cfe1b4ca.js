"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[2449],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),g=d(a),u=n,c=g["".concat(p,".").concat(u)]||g[u]||f[u]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5547:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"Config"},i=void 0,o={unversionedId:"loops/Config",id:"loops/Config",title:"Config",description:"Config loop, to access configuration variables",source:"@site/docs/loops/Config.md",sourceDirName:"loops",slug:"/loops/Config",permalink:"/thelia_doc/docs/loops/Config",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Config.md",tags:[],version:"current",frontMatter:{title:"Config"},sidebar:"docs",previous:{title:"Category tree",permalink:"/thelia_doc/docs/loops/Category_tree"},next:{title:"Content",permalink:"/thelia_doc/docs/loops/Content"}},p={},d=[{value:"Arguments",id:"conf-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Order possible values",id:"conf-order-possible-values",level:2}],m={toc:d};function f(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Config loop, to access configuration variables",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="config" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"conf-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of config ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude="2", exclude="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hidden"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean value."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'hidden="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single of config id."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"#conf-order-possible-values"},"Expected values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="id_reverse"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"secured"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean value."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'secured="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"variable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of a variable config"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'variable="rewriting_enable"')))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The config variable chapo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The config variable description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HIDDEN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"check if the config variable is hidden")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the config variable id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"check if the config is translated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The locale used for this research")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$NAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the config variable name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The config variable postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$SECURED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"check if the config variable is secured")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The config variable title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VALUE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the config variable value")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"global outputs")),(0,n.kt)("h2",{id:"conf-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#conf-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"name_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"title_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"value_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Value")))))}f.isMDXComponent=!0}}]);