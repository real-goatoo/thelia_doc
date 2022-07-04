"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[5136],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(a),f=n,c=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return a?r.createElement(c,i(i({ref:e},d),{},{components:a})):r.createElement(c,i({ref:e},d))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7818:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Feature availability"},p=void 0,u={unversionedId:"loops/FeatureAvailability",id:"loops/FeatureAvailability",title:"Feature availability",description:"Feature availability loop lists feature availabilities.",source:"@site/docs/loops/FeatureAvailability.md",sourceDirName:"loops",slug:"/loops/FeatureAvailability",permalink:"/docs/docs/loops/FeatureAvailability",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/FeatureAvailability.md",tags:[],version:"current",frontMatter:{title:"Feature availability"},sidebar:"myAutogeneratedSidebar",previous:{title:"Feature",permalink:"/docs/docs/loops/Feature"},next:{title:"Feature value",permalink:"/docs/docs/loops/FeatureValue"}},d={},m=[{value:"Arguments",id:"feature-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Order possible values",id:"feature-order-possible-values",level:2}],s={toc:m};function f(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Feature availability loop lists feature availabilities.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'{loop type="feature-availability" name="the-loop-name" [argument="value"], [...]}')),(0,l.kt)("h2",{id:"feature-arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclude"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or a list of feature availability ids to exclude."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'exclude="456,123"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"feature"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or a list of feature ids."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or a list of feature availability ids."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lang"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A lang id"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'lang="1"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"order"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of values see ",(0,l.kt)("a",{parentName:"td",href:"#feature-order-possible-values"},"sorting possible values")),(0,l.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,l.kt)("td",{parentName:"tr",align:"left"},'order="alpha_reverse"')))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature availability chapo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature availability description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$FEATURE_ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The ID ot the related feature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature availability id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,l.kt)("td",{parentName:"tr",align:"left"},"check if the feature availability is translated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The locale used for this research")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$POSITION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature availability position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature availability postscriptum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature availability title")))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")),(0,l.kt)("h2",{id:"feature-order-possible-values"},"Order possible values"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#feature-arguments"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,l.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"alpha-reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manual"),(0,l.kt)("td",{parentName:"tr",align:null},"manual_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"position")))))}f.isMDXComponent=!0}}]);