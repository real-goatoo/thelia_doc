"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[5272],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>s});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),m=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},d=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(r),s=n,f=u["".concat(i,".").concat(s)]||u[s]||c[s]||l;return r?a.createElement(f,p(p({ref:e},d),{},{components:r})):a.createElement(f,p({ref:e},d))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,p=new Array(l);p[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var m=2;m<l;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9706:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const l={title:"Cart"},p=void 0,o={unversionedId:"loops/Cart",id:"loops/Cart",title:"Cart",description:"Cart loop displays cart information.",source:"@site/docs/loops/Cart.md",sourceDirName:"loops",slug:"/loops/Cart",permalink:"/thelia_doc/docs/loops/Cart",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Cart.md",tags:[],version:"current",frontMatter:{title:"Cart"},sidebar:"myAutogeneratedSidebar",previous:{title:"Brand",permalink:"/thelia_doc/docs/loops/Brand"},next:{title:"Category",permalink:"/thelia_doc/docs/loops/Category"}},i={},m=[{value:"Arguments",id:"pse-arguments",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:m};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cart loop displays cart information.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="cart" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"pse-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values ",(0,n.kt)("br",null)," Expected values : ",(0,n.kt)("br",null)," - reverse : reverse chronological item add order"),(0,n.kt)("td",{parentName:"tr",align:"center"},"reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="reverse"')))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_PROMO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"if the product sale elements is in promo or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ITEM_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the cart item id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements price (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_SALE_ELEMENTS_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_URL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product url")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PROMO_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements in promo price (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PROMO_TAXED_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements in promo price including taxes (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$QUANTITY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the cart item quantity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$REF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product ref")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements available stock")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TAXED_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements price including taxes (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements price (total price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_PROMO_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements in promo price (total price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_PROMO_TAXED_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements in promo price including taxes (total price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_TAXED_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product sale elements price including taxes (total price)")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"global outputs")))}c.isMDXComponent=!0}}]);