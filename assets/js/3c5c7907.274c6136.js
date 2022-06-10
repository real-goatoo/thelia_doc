"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[1077],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=m(n),c=a,f=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3517:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Admin"},p=void 0,m={unversionedId:"loops/Admin",id:"loops/Admin",title:"Admin",description:"Admin loop displays admins information.",source:"@site/docs/loops/Admin.md",sourceDirName:"loops",slug:"/loops/Admin",permalink:"/thelia_doc/docs/loops/Admin",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/loops/Admin.md",tags:[],version:"current",frontMatter:{title:"Admin"},sidebar:"myAutogeneratedSidebar",previous:{title:"Address",permalink:"/thelia_doc/docs/loops/Address"},next:{title:"Area",permalink:"/thelia_doc/docs/loops/Area"}},d={},u=[{value:"Arguments",id:"pse-arguments",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Admin loop displays admins information.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'{loop type="admin" name="the-loop-name" [argument="value"], [...]}')),(0,l.kt)("h2",{id:"pse-arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or a list of admin ids."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or a list of profile ids."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'profile="2", profile="1,4,7"')))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$FIRSTNAME"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the admin firstname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the admin id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$LASTNAME"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the admin lastname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the admin locale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$LOGIN"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the admin login")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$PROFILE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the admin profile id")))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")))}c.isMDXComponent=!0}}]);