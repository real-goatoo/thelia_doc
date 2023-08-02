"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(r),p=l,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function p(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var n=r(7462),l=(r(7294),r(3905));const a={title:"module:generate:sql"},o=void 0,i={unversionedId:"commands/module_generate_sql",id:"commands/module_generate_sql",title:"module:generate:sql",description:"Description",source:"@site/docs/commands/module_generate_sql.md",sourceDirName:"commands",slug:"/commands/module_generate_sql",permalink:"/docs/commands/module_generate_sql",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/commands/module_generate_sql.md",tags:[],version:"current",frontMatter:{title:"module:generate:sql"},sidebar:"myAutogeneratedSidebar",previous:{title:"module:generate:model",permalink:"/docs/commands/module_generate_model"},next:{title:"module:list",permalink:"/docs/commands/module_list"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}],s={toc:m};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Generate the sql from schema.xml file"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"module:generate:sql <name>\n")),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),"                   Module name")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"To generate the sql for your module ",(0,l.kt)("inlineCode",{parentName:"p"},"MyModule")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"php Thelia module:generate:sql MyModule\n")))}u.isMDXComponent=!0}}]);