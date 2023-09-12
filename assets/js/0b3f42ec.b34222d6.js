"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[3418],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>N});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),p=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):d(d({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=p(r),N=n,g=k["".concat(o,".").concat(N)]||k[N]||s[N]||l;return r?a.createElement(g,d(d({ref:e},m),{},{components:r})):a.createElement(g,d({ref:e},m))}));function N(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,d=new Array(l);d[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,d[1]=i;for(var p=2;p<l;p++)d[p]=r[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6375:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"Order"},d=void 0,i={unversionedId:"loops/Order",id:"loops/Order",title:"Order",description:"Order loop displays orders information.",source:"@site/docs/loops/Order.md",sourceDirName:"loops",slug:"/loops/Order",permalink:"/thelia_doc/docs/loops/Order",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Order.md",tags:[],version:"current",frontMatter:{title:"Order"},sidebar:"myAutogeneratedSidebar",previous:{title:"Module",permalink:"/thelia_doc/docs/loops/Module"},next:{title:"Order address",permalink:"/thelia_doc/docs/loops/OrderAddress"}},o={},p=[{value:"Arguments",id:"order-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Order possible values",id:"order-order-possible-values",level:2}],m={toc:p};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Order loop displays orders information.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="order" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"order-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"customer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single customer id or ",(0,n.kt)("inlineCode",{parentName:"td"},"current")," keyword to get logged in user or ",(0,n.kt)("inlineCode",{parentName:"td"},"*")," keyword to match all users."),(0,n.kt)("td",{parentName:"tr",align:"center"},"current"),(0,n.kt)("td",{parentName:"tr",align:"left"},'customer="2", customer="current"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of order status ID which are to be excluded from the results"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'status="*", exclude_status="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_status_code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of order status codes which are to be excluded from the results. The valid status codes are not_paid, paid, processing, sent, canceled, or any custom status that may be defined"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude_status_code="paid,processing"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of order ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values see ",(0,n.kt)("a",{parentName:"td",href:"#order-order-possible-values"},"sorting possible values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"create-date-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="create-date-reverse"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of order status ID or ",(0,n.kt)("inlineCode",{parentName:"td"},"*")," keyword to match all"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'status="*", status="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status_code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of order status codes or ",(0,n.kt)("inlineCode",{parentName:"td"},"*")," keyword to match all. The valid status codes are not_paid, paid, processing, sent, canceled, or any custom status that may be defined"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'status="*", status="not_paid,canceled"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"with_prev_next_info"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},'with_prev_next_info="yes"')))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")," and ",(0,n.kt)("a",{parentName:"p",href:"./search_arguments"},"search arguments")),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,n.kt)("th",{parentName:"tr",align:"center"},"If ",(0,n.kt)("small",null,"with_prev_next_info='true'")),(0,n.kt)("th",{parentName:"tr",align:"center"},"If ",(0,n.kt)("small",null,"with_prev_next_info='false'")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CURRENCY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order currency id ; you can use it in a ",(0,n.kt)("a",{parentName:"td",href:"./Currency"},"currency loop")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CURRENCY_RATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order currency rate"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CUSTOMER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order customer id ; you can use it in a ",(0,n.kt)("a",{parentName:"td",href:"./Customer"},"customer loop")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DELIVERY_ADDRESS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order delivery address id ; you can use it in a ",(0,n.kt)("a",{parentName:"td",href:"./OrderAddress"},"order address loop")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DELIVERY_MODULE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order delivery module id ; you can use it in a ",(0,n.kt)("a",{parentName:"td",href:"./Module"},"module loop")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DELIVERY_REF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order delivery reference. It's usually use for tracking package"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DISCOUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order discount"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_NEXT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true if a order exists after this one, following orders id."),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_PAID_STATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True is the order has the 'paid' status, false otherwise"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_PREVIOUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true if a order exists before this one following orders id."),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$INVOICE_ADDRESS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order the order invoice address id ; you can use it in a ",(0,n.kt)("a",{parentName:"td",href:"./OrderAddress"},"order address loop")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$INVOICE_REF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order invoice reference"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_CANCELED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True is the order has the 'canceled' status, false otherwise"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_NOT_PAID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True is the order has the 'not paid' status, false otherwise"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_PAID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True is the order has been paid (whatever current status is), false otherwise"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_PROCESSING"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True is the order has the 'processing' status, false otherwise"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_SENT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"True is the order has the 'sent' status, false otherwise"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LANG"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order language id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$NEXT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of order after this one, following orders id, or null if none exists."),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PAYMENT_MODULE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order payment module id ; you can use it in a ",(0,n.kt)("a",{parentName:"td",href:"./Module"},"module loop")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order postage"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE_TAX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order postage tax"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE_TAX_RULE_TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the tax rule used to get the postage tax amount"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE_UNTAXED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order postage amount without tax"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PREVIOUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of order before this one, following orders id, or null if none exists."),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$REF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order reference"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$STATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order status ; you can use it in a ",(0,n.kt)("a",{parentName:"td",href:"./OrderStatus"},"order status loop")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$STATUS_CODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order status code"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_AMOUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order amount without taxes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_ITEMS_AMOUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the total amount for ordered items, excluding taxes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_ITEMS_TAX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the total tax amount for of the ordered items only, without postage tax"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_TAX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order taxes amount"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_TAXED_AMOUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order amount including taxes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TOTAL_TAXED_ITEMS_AMOUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the total amount for ordered items, including taxes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TRANSACTION_REF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order transaction reference. It's usually the unique identifier shared between the e-shop and it's bank"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VIRTUAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order has at least one product which is a virtual product"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$WEIGHT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total weight of the order"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"global outputs")),(0,n.kt)("h2",{id:"order-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#order-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"company"),(0,n.kt)("td",{parentName:"tr",align:null},"company-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"company")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"create-date"),(0,n.kt)("td",{parentName:"tr",align:null},"create-date-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"creation date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"customer-name"),(0,n.kt)("td",{parentName:"tr",align:null},"customer-name-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"customer name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"invoice-date"),(0,n.kt)("td",{parentName:"tr",align:null},"invoice-date-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"invoice date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reference"),(0,n.kt)("td",{parentName:"tr",align:null},"reference-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reference")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"status-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"status")))))}s.isMDXComponent=!0}}]);