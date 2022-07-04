"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[8262],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return s}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(a),s=n,f=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return a?r.createElement(f,o(o({ref:e},d),{},{components:a})):r.createElement(f,o({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},880:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"Tax"},p=void 0,u={unversionedId:"loops/Tax",id:"loops/Tax",title:"Tax",description:"loop displaying taxes available.",source:"@site/docs/loops/Tax.md",sourceDirName:"loops",slug:"/loops/Tax",permalink:"/docs/docs/loops/Tax",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Tax.md",tags:[],version:"current",frontMatter:{title:"Tax"},sidebar:"myAutogeneratedSidebar",previous:{title:"State",permalink:"/docs/docs/loops/State"},next:{title:"Tax rule",permalink:"/docs/docs/loops/TaxRule"}},d={},m=[{value:"Arguments",id:"tax-arguments",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:m};function s(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"loop displaying taxes available.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'{loop type="tax" name="the-loop-name" [argument="value"], [...]}')),(0,l.kt)("h2",{id:"tax-arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"country"),(0,l.kt)("td",{parentName:"tr",align:"left"},"a country id"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'country="64"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclude"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or list of tax ids to exclude"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'exclude="2", exclude="1,4"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclude_tax_rule"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or list of tax_rule ids to exclude"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'exclude_tax_rule="2", exclude_tax_rule="1,4"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or list of tax ids."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tax_rule"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or list of tax_rule ids"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'tax_rule="2", tax_rule="1,4"')))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Tax description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$ESCAPED_TYPE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Provides a form-and-javascript-safe version of the type, which is a fully qualified classname, with \\ ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the tax id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,l.kt)("td",{parentName:"tr",align:"left"},"check if the tax is translated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The locale used for this research")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$REQUIREMENTS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"All requirements for this tax")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Tax title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$TYPE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The tax type")))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")))}s.isMDXComponent=!0}}]);