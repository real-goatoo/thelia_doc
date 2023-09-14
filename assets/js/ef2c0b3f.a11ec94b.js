"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[7279],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=d(a),s=n,N=k["".concat(p,".").concat(s)]||k[s]||g[s]||l;return a?r.createElement(N,o(o({ref:e},m),{},{components:a})):r.createElement(N,o({ref:e},m))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4974:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"Category"},o=void 0,i={unversionedId:"loops/Category",id:"loops/Category",title:"Category",description:"Category loop lists categories from your shop.",source:"@site/docs/loops/Category.md",sourceDirName:"loops",slug:"/loops/Category",permalink:"/thelia_doc/docs/loops/Category",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Category.md",tags:[],version:"current",frontMatter:{title:"Category"},sidebar:"docs",previous:{title:"Cart",permalink:"/thelia_doc/docs/loops/Cart"},next:{title:"Category path",permalink:"/thelia_doc/docs/loops/Category_path"}},p={},d=[{value:"Arguments",id:"category-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Order possible values",id:"category-order-possible-values",level:2}],m={toc:d};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Category loop lists categories from your shop.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="category" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"category-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"content"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more content ID. When this parameter is set, the loop returns the categories related to the specified content IDs."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'content="3"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean value which allows either to exclude current category from results either to match only this category"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'current="yes"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of category ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude="2", exclude="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_parent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or list of categories id to exclude."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude_parent="12,22"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_product"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or list product id to exclude."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude_product="3"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of category ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lang"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A lang id"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'lang="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"need_count_child"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean. If set to true, count how many subcategories contains the current category"),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},'need_count_child="yes"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"need_product_count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean. If set to true, count how many products contains the current category"),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},'need_product_count="yes"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"not_empty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(",(0,n.kt)("strong",{parentName:"td"},"not implemented yet"),") A boolean value. If true, only the categories which contains at least a visible product (either directly or through a subcategory) are returned"),(0,n.kt)("td",{parentName:"tr",align:"center"},"no"),(0,n.kt)("td",{parentName:"tr",align:"left"},'not_empty="yes"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"#category-order-possible-values"},"Expected values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="random"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"parent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of category ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'parent="3", parent="2,5,8"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or list of product IDs."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'product="3"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean value which allows the urls generation."),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},'return_url="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visible"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean value."),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},'visible="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"with_prev_next_info"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},'with_prev_next_info="yes"')))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")," and ",(0,n.kt)("a",{parentName:"p",href:"./search_arguments"},"search arguments")),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category chapo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CREATE_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category create date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"check if the category is translated or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the locale used for this loop")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$META_DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category meta description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$META_KEYWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category meta keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$META_TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category meta title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PARENT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the parent category")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSITION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TEMPLATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the template id associated to this category")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$UPDATE_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category update date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$URL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VERSION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category version")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VERSION_AUTHOR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category version author")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VERSION_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the category version date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VISIBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return if the category is visible or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_COUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of visible products contained by the current category. ",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Only available if "need_product_child" is set to true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHILD_COUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of subcategories contained by the current category.",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Only available if "need_count_child" is set to true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_NEXT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true if a category exists after this one in the current parent category, following categories positions.",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Only available if "with_prev_next_info" is set to true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$NEXT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of category after this one in the current parent category, following categories positions, or null if none exists.",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Only available if "with_prev_next_info" is set to true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_PREVIOUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true if a category exists before this one in the current parent category, following categories positions.",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Only available if "with_prev_next_info" is set to true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PREVIOUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of category before this one in the current parent category, following categories positions, or null if none exists.",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Only available if "with_prev_next_info" is set to true '))))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"global outputs")),(0,n.kt)("h2",{id:"category-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#category-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"created"),(0,n.kt)("td",{parentName:"tr",align:null},"created_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date of content creation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Order ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manual"),(0,n.kt)("td",{parentName:"tr",align:null},"manual_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"random"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"updated"),(0,n.kt)("td",{parentName:"tr",align:null},"updated_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date of content update")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visible"),(0,n.kt)("td",{parentName:"tr",align:null},"visible_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"online items")))))}g.isMDXComponent=!0}}]);