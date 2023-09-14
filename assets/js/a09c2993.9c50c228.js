"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4128],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(r),d=n,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(g,l(l({ref:e},u),{},{components:r})):a.createElement(g,l({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8495:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={title:"Introduction",slug:"/",sidebar_position:1},l=void 0,o={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"GitHub Workflow Status",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/thelia_doc/docs/",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",slug:"/",sidebar_position:1},sidebar:"docs",next:{title:"Getting started",permalink:"/thelia_doc/docs/getting_started"}},s={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2}],u={toc:p};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/thelia/thelia/test.yml?branch=main&style=flat-square",alt:"GitHub Workflow Status"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/scrutinizer/quality/g/thelia/thelia?style=flat-square",alt:"Scrutinizer code quality (GitHub/Bitbucket)"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/license/thelia/thelia?style=flat-square",alt:"GitHub"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/last-commit/thelia/thelia.svg?style=flat-square",alt:"Last commit"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/stars/thelia/thelia?style=flat-square",alt:"GitHub Repo stars"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/forks/thelia/thelia?style=flat-square",alt:"GitHub forks"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/release/thelia/thelia?label=latest%20release&style=flat-square",alt:"GitHub release (latest by date)"})),(0,n.kt)("p",null,"Thelia is an open source tool for creating e-business websites and managing online content. This software is published under LGPL."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This is the documentaion for Thelia version >= 2.5.0, if you are using a previous version, check the ",(0,n.kt)("a",{parentName:"p",href:"http://thelia.github.io"},"Legacy documentation"),".")),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Thelia version"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2.3"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2.4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2.5"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PHP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"5.5 / 5.6 / 7.0 / 7.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"7.0 / 7.1 / 7.2 / 7.3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"8.0.2       /     8.1 / 8.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"5.5 / 5.6"),(0,n.kt)("td",{parentName:"tr",align:"center"},"5.5 / 5.6 / 5.7"),(0,n.kt)("td",{parentName:"tr",align:"center"},"5.6 / 5.7 / 8.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Symfony"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2.8"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2.8"),(0,n.kt)("td",{parentName:"tr",align:"center"},"6.0  / 6.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maintained"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Security fixes only"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes")))),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PHP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Required extensions :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PDO_Mysql"),(0,n.kt)("li",{parentName:"ul"},"openssl"),(0,n.kt)("li",{parentName:"ul"},"intl"),(0,n.kt)("li",{parentName:"ul"},"gd"),(0,n.kt)("li",{parentName:"ul"},"curl"),(0,n.kt)("li",{parentName:"ul"},"dom"))),(0,n.kt)("li",{parentName:"ul"},"safe_mode off"),(0,n.kt)("li",{parentName:"ul"},"memory_limit at least 128M, preferably 256M."),(0,n.kt)("li",{parentName:"ul"},"post","_","max","_","size 20M"),(0,n.kt)("li",{parentName:"ul"},"upload","_","max","_","filesize 2M"),(0,n.kt)("li",{parentName:"ul"},"date.timezone must be defined"))),(0,n.kt)("li",{parentName:"ul"},"Web Server Apache 2 or Nginx")))}m.isMDXComponent=!0}}]);