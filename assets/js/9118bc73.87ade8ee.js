"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||s[d]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,o={unversionedId:"smarty_plugins/{check_auth}",id:"smarty_plugins/{check_auth}",title:"{check_auth}",description:"The function check_auth can be used to know if the user is granted to view something.",source:"@site/docs/smarty_plugins/{check_auth}.md",sourceDirName:"smarty_plugins",slug:"/smarty_plugins/{check_auth}",permalink:"/docs/smarty_plugins/{check_auth}",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/{check_auth}.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"{cache}",permalink:"/docs/smarty_plugins/{cache}"},next:{title:"{check_cart_not_empty}",permalink:"/docs/smarty_plugins/{check_cart_not_empty}"}},u={},c=[{value:"role",id:"role",level:2},{value:"login_tpl",id:"login_tpl",level:2},{value:"resource",id:"resource",level:2},{value:"module",id:"module",level:2},{value:"access",id:"access",level:2}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"check_auth")," can be used to know if the user is granted to view something."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{check_auth role="CUSTOMER" login_tpl="login"}\n\n{check_auth resource="admin.address" access="VIEW" login_tpl="login"}\n')),(0,r.kt)("h2",{id:"role"},"role"),(0,r.kt)("p",null,"A user can only have one of these two roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ADMIN : an administrator of the site"),(0,r.kt)("li",{parentName:"ul"},"CUSTOMER : a registed and logged in customer")),(0,r.kt)("h2",{id:"login_tpl"},"login_tpl"),(0,r.kt)("p",null,"This argument is the name of the view name (the login page is \u201clogin\u201d). If the user is not granted and this argument is defined, it redirects to this view."),(0,r.kt)("h2",{id:"resource"},"resource"),(0,r.kt)("p",null,"The resource argument may be useful in the back office. There is the list of the available resources in Thelia 2:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"admin.address"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.administrator"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.advanced"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.area"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.attribute"),(0,r.kt)("li",{parentName:"ul"},"admin.category"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration"),(0,r.kt)("li",{parentName:"ul"},"admin.content"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.country"),(0,r.kt)("li",{parentName:"ul"},"admin.coupon"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.currency"),(0,r.kt)("li",{parentName:"ul"},"admin.customer"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.feature"),(0,r.kt)("li",{parentName:"ul"},"admin.folder"),(0,r.kt)("li",{parentName:"ul"},"admin.home"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.language"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.mailing-system"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.message"),(0,r.kt)("li",{parentName:"ul"},"admin.module"),(0,r.kt)("li",{parentName:"ul"},"admin.order"),(0,r.kt)("li",{parentName:"ul"},"admin.product"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.profile"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.shipping-zone"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.tax"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.template"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.system-logs"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.admin-logs"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.store"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.translations"),(0,r.kt)("li",{parentName:"ul"},"admin.configuration.update"),(0,r.kt)("li",{parentName:"ul"},"admin.export"),(0,r.kt)("li",{parentName:"ul"},"admin.export.customer.newsletter"),(0,r.kt)("li",{parentName:"ul"},"admin.tools")),(0,r.kt)("h2",{id:"module"},"module"),(0,r.kt)("p",null,"Name of the module which the user must have access to. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    {check_auth role="ADMIN" module="Carousel" access="UPDATE" login_tpl="login"}\n')),(0,r.kt)("h2",{id:"access"},"access"),(0,r.kt)("p",null,"There is 4 types of access to a resource:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CREATE : create a new entry "),(0,r.kt)("li",{parentName:"ul"},"VIEW : view the resource "),(0,r.kt)("li",{parentName:"ul"},"UPDATE : update the resource "),(0,r.kt)("li",{parentName:"ul"},"DELETE : delete the resource")),(0,r.kt)("p",null,"Those accesses can be configured from the back office, tab \u201cConfiguration\u201d, on \u201cAdministration Profile\u201d."))}s.isMDXComponent=!0}}]);