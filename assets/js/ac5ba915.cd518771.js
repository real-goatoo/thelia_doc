"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[8067],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},292:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={title:"Title"},p=void 0,u={unversionedId:"loops/Title",id:"loops/Title",title:"Title",description:"Title loop lists titles.",source:"@site/docs/loops/Title.md",sourceDirName:"loops",slug:"/loops/Title",permalink:"/thelia_doc/docs/loops/Title",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/loops/Title.md",tags:[],version:"current",frontMatter:{title:"Title"},sidebar:"myAutogeneratedSidebar",previous:{title:"Tax rule",permalink:"/thelia_doc/docs/loops/TaxRule"},next:{title:"Product",permalink:"/thelia_doc/docs/loops/product"}},c={},m=[{value:"Arguments",id:"title-arguments",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:m};function d(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Title loop lists titles.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'{loop type="title" name="the-loop-name" [argument="value"], [...]}')),(0,l.kt)("h2",{id:"title-arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or a list of title ids."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")," "),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$DEFAULT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"return if the title is by default title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the title id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$LONG"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the full title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$POSITION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the title position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$SHORT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the short title")))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")))}d.isMDXComponent=!0}}]);