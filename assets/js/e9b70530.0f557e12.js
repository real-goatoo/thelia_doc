"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[3376],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),i=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=i(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=i(r),k=n,N=u["".concat(d,".").concat(k)]||u[k]||c[k]||l;return r?a.createElement(N,o(o({ref:e},m),{},{components:r})):a.createElement(N,o({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1287:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const l={title:"Order product"},o=void 0,p={unversionedId:"loops/OrderProduct",id:"loops/OrderProduct",title:"Order product",description:"Order product loop displays Order products information.",source:"@site/docs/loops/OrderProduct.md",sourceDirName:"loops",slug:"/loops/OrderProduct",permalink:"/thelia_doc/docs/loops/OrderProduct",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/OrderProduct.md",tags:[],version:"current",frontMatter:{title:"Order product"},sidebar:"docs",previous:{title:"Order coupon",permalink:"/thelia_doc/docs/loops/OrderCoupon"},next:{title:"Order product attribute combination",permalink:"/thelia_doc/docs/loops/OrderProductAttributeCombination"}},d={},i=[{value:"Arguments",id:"order-arguments",level:2},{value:"Outputs",id:"outputs",level:2}],m={toc:i};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Order product loop displays Order products information.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="order_product" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"order-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of order product ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order *"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single order id."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="2"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"virtual"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean value."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'new="yes"')))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")," "),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CART_ITEM_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The related Cart Item ID of this order product")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product short description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$EAN_CODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product ean code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the product id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PARENT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the parent product in the cart, if the current product has one")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product price (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE_TAX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product taxes (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_SALE_ELEMENTS_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product sale elements id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_SALE_ELEMENTS_REF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product sale elements reference")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PROMO_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product in promo price (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PROMO_PRICE_TAX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product in promo price taxes (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$QUANTITY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product ordered quantity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$REF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product reference")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TAXED_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product price including taxes (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TAXED_PROMO_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product in promo price including taxes (unit price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TAX_RULE_DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the tax rule description for this item")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TAX_RULE_TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the tax rule title for this item")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product price (total price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_PROMO_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product in promo price (total price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_TAXED_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product price including taxes (total price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_TAXED_PROMO_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product in promo price including taxes (total price)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VIRTUAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"whatever the order product is a virtual product or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VIRTUAL_DOCUMENT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the name of the file if the product is virtual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$WAS_IN_PROMO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"whatever the order product sale elements was in promo or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$WAS_NEW"),(0,n.kt)("td",{parentName:"tr",align:"left"},"whatever the order product sale elements was new or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$WEIGHT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order product sale elements weight")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"global outputs")))}c.isMDXComponent=!0}}]);