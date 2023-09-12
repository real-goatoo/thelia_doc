"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4375],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(a),c=n,b=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?r.createElement(b,i(i({ref:e},d),{},{components:a})):r.createElement(b,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7263:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={title:"Attribute combination"},i=void 0,o={unversionedId:"loops/Attribute_combination",id:"loops/Attribute_combination",title:"Attribute combination",description:"Attribute combination loop lists attribute combinations.",source:"@site/docs/loops/Attribute_combination.md",sourceDirName:"loops",slug:"/loops/Attribute_combination",permalink:"/thelia_doc/docs/loops/Attribute_combination",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Attribute_combination.md",tags:[],version:"current",frontMatter:{title:"Attribute combination"},sidebar:"myAutogeneratedSidebar",previous:{title:"Attribute availability",permalink:"/thelia_doc/docs/loops/Attribute_availability"},next:{title:"Authentification checker",permalink:"/thelia_doc/docs/loops/Authentification_checker"}},p={},m=[{value:"Arguments",id:"pse-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2},{value:"Order possible values",id:"accessory-order-possible-values",level:2}],d={toc:m};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Attribute combination loop lists attribute combinations.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="attribute_combination" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"pse-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lang"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A lang id"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'lang="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"#accessory-order-possible-values"},"Expected values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"alpha"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="alpha_reverse"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product_sale_elements ","*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single product sale elements id."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'product="2"')))),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_AVAILABILITY_CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute availability chapo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_AVAILABILITY_DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute availability description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_AVAILABILITY_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute availability id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_AVAILABILITY_POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute availability postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_AVAILABILITY_TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute availability title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute chapo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ATTRIBUTE_TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the locale used for this loop")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"I want to display all products sale elements for current product and show all the attribute combinations which matched it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'<ul>\n{loop name="pse" type="product_sale_elements" product="$PRODUCT_ID"}\n    <div>\n        {loop name="combi" type="attribute_combination" product_sale_elements="$ID"}\n        {$ATTRIBUTE_ID}. {$ATTRIBUTE_TITLE} = {$ATTRIBUTE_AVAILABILITY_ID}. {$ATTRIBUTE_AVAILABILITY_TITLE}<br />\n        {/loop}\n        <br />{$WEIGHT} g\n        <br /><strong>{if $IS_PROMO == 1} {$PROMO_PRICE} \u20ac (instead of {$PRICE}) {else} {$PRICE} \u20ac {/if}</strong>\n        <br /><br />\n        Add\n        <select>\n            {for $will=1 to $QUANTITY}\n            <option>{$will}</option>\n            {/for}\n        </select>\n        to my cart\n    </div>\n{/loop}\n</ul>\n')),(0,n.kt)("h2",{id:"accessory-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#pse-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manual"),(0,n.kt)("td",{parentName:"tr",align:null},"manual_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"order by position")))))}u.isMDXComponent=!0}}]);