"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[5241],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return N}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),o=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=o(a),N=n,g=k["".concat(d,".").concat(N)]||k[N]||m[N]||l;return a?r.createElement(g,i(i({ref:e},u),{},{components:a})):r.createElement(g,i({ref:e},u))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6566:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],p={title:"Product"},d=void 0,o={unversionedId:"loops/product",id:"loops/product",title:"Product",description:"Product loop lists products from your shop. You very probably will have to use the product sale elements loop inside your product loop.",source:"@site/docs/loops/product.md",sourceDirName:"loops",slug:"/loops/product",permalink:"/thelia_doc/docs/loops/product",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/loops/product.md",tags:[],version:"current",frontMatter:{title:"Product"},sidebar:"myAutogeneratedSidebar",previous:{title:"Product sale elements",permalink:"/thelia_doc/docs/loops/Product_sale_elements"},next:{title:"Smarty plugins",permalink:"/thelia_doc/docs/smarty_plugins/"}},u={},m=[{value:"Arguments",id:"product-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2},{value:"Order possible values",id:"product-order-possible-values",level:2},{value:"attribute_non_strict_match possible values",id:"product_attribute_non_strict_match_values",level:2}],k={toc:m};function N(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Product loop lists products from your shop. You very probably will have to use the product sale elements loop inside your product loop.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'{loop type="product" name="the-loop-name" [argument="value"], [...]}')),(0,l.kt)("h2",{id:"product-arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"attribute_non_strict_match"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",null,"Only available if complex='true'")," ",(0,l.kt)("br",null)," promo, new, quantity, weight or price may differ in the different product sale element depending on the different attributes. This parameter allows to provide a list of non-strict attributes. ",(0,l.kt)("br",null)," liste of ",(0,l.kt)("a",{parentName:"td",href:"#product_attribute_non_strict_match_values"},"expected values")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},'attribute_non_strict_match="promo,new" : ',(0,l.kt)("br",null)," loop will return the product if it has at least a product sale element in promo and at least a product sale element as new ; even if it's not the same product sale element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"brand"),(0,l.kt)("td",{parentName:"tr",align:null},"A single or a list of brand ids."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'page="2"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"category"),(0,l.kt)("td",{parentName:"tr",align:null},"A single or a list of category ids."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'limit="10"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"category_default"),(0,l.kt)("td",{parentName:"tr",align:null},"A single or a list of default category ids allowing to retrieve all products having this parameter as default category."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},'offset="10"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complex"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean. If set to true, product loop will consider all product sale elements else it will only consider default product sale element. Some of the arguments/outputs will not be available depending on the complex argument."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'complex="true"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"One or more content ID. When this parameter is set, the loop returns the products related to the specified content IDs."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'content="3"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currency"),(0,l.kt)("td",{parentName:"tr",align:null},"A currency id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'currency="1"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"current"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value which allows either to exclude current product from results either to match only this product"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'current="yes"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"current_category"),(0,l.kt)("td",{parentName:"tr",align:null},'A boolean value which allows either to exclude current category products from results either to match only current category products. If a product is in multiple categories whose one is current it will not be excluded if current_category="false" but will be included if current_category="yes"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'current_category="yes"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"depth"),(0,l.kt)("td",{parentName:"tr",align:null},"A positive integer value which precise how many subcategory levels will be browse. Will not be consider if category parameter is not set."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},'depth="2"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclude"),(0,l.kt)("td",{parentName:"tr",align:null},"A single or a list of product ids."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'exclude="2", exclude="1,4,7"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclude_category"),(0,l.kt)("td",{parentName:"tr",align:null},"A single or a list of category ids. If a product is in multiple categories which are not all excluded it will not be excluded."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'exclude_category="2", exclude_category="1,4,7"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclude_tax_rule_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter products not having this tax rule ID"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"exclude_tax_rule_id=21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"feature_availability"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of mandatory features and the feature_availability expected for these."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'feature_availability="1: ',"(","1 ","|"," 2",")"," , 2:*, 3: 10 ","|"," ","(","11&12",")",'" : feature 1 must have feature_availability 1 or 2 AND feature 2 must be set to any feature_availability AND feature 3 must have feature_availability 10 or both feature_availability 11 and 12')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"feature_values"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of mandatory features and the string value expected for these."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'feature_values="1: ',"(","foo ","|"," bar",")",' , 2:*, 3: foobar" : feature 1 must have feature value "foo" or "bar" AND feature 2 must be set to any feature_availability AND feature 3 must have feature value "foobar"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"A single or a list of product ids."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'id="2" or id="1,4,7"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lang"),(0,l.kt)("td",{parentName:"tr",align:null},"A lang id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'lang="1"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_price"),(0,l.kt)("td",{parentName:"tr",align:null},"A float value. Equal value matches."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'max_price="32.1"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_weight"),(0,l.kt)("td",{parentName:"tr",align:null},"A float value. Equal value matches."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'max_weight="32.1"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min_price"),(0,l.kt)("td",{parentName:"tr",align:null},"A float value. Equal value matches."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'min_price="12.3"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min_stock"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer value. Equal value matches."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'min_stock="3"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min_weight"),(0,l.kt)("td",{parentName:"tr",align:null},"A float value. Equal value matches."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'min_weight="32.1"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"new"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value to get products by their newness"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'new="yes"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"order"),(0,l.kt)("td",{parentName:"tr",align:null},"The order for sorting products, see ",(0,l.kt)("a",{parentName:"td",href:"#product-order-possible-values"},"sorting possible values")),(0,l.kt)("td",{parentName:"tr",align:null},"alpha"),(0,l.kt)("td",{parentName:"tr",align:null},'order="category,min_price"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"promo"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'promo="yes"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null},"A single or a list of product references."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'ref="PROD011" or ref="PROD011,PROD018"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"return_url"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value which allows the urls generation."),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'return_url="no"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tax_rule_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter products having this tax rule ID"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"tax_rule_id=21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"filter by title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'title="foo"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"virtual"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'virtual="yes"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value."),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'visible="no"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with_prev_next_info"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean. If set to true, $HAS_PREVIOUS, $HAS_NEXT, $PREVIOUS, and $NEXT output variables are available."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'with_prev_next_info="yes"')))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")," and ",(0,l.kt)("a",{parentName:"p",href:"./search_arguments"},"search arguments")),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("p",null,"The product loop has a specific behaviour with the parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"complex")," if set to true some values will not be handled the same way and some other will not be available.   "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:"center"},"If complex='true'"),(0,l.kt)("th",{parentName:"tr",align:"center"},"If complex='false'"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$BEST_PRICE"),(0,l.kt)("td",{parentName:"tr",align:null},"the product best tax-free price for the received arguments, depending on the attributes and promo status."),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$BEST_PRICE_TAX"),(0,l.kt)("td",{parentName:"tr",align:null},"the best price taxes amount"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$BEST_TAXED_PRICE"),(0,l.kt)("td",{parentName:"tr",align:null},"the best price including taxes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$BRAND_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"the brand id of this product. Empty if no brand is assigned for this product"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$CHAPO"),(0,l.kt)("td",{parentName:"tr",align:null},"Chapo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$DEFAULT_CATEGORY"),(0,l.kt)("td",{parentName:"tr",align:null},"the default category id associated to this product"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$DESCRIPTION"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$EAN_CODE"),(0,l.kt)("td",{parentName:"tr",align:null},"The default product sale elements EAN Code"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$HAS_NEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"true if a product exists after this one in the current category, following products positions. Only available if with_prev_next_info parameter is set to true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$HAS_PREVIOUS"),(0,l.kt)("td",{parentName:"tr",align:null},"true if a product exists before this one in the current category, following products positions. Only available if with_prev_next_info parameter is set to true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$ID"),(0,l.kt)("td",{parentName:"tr",align:null},"the product id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$IS_NEW"),(0,l.kt)("td",{parentName:"tr",align:null},"Newness"),(0,l.kt)("td",{parentName:"tr",align:"center"},"return true if at least one of it's product sale element is new"),(0,l.kt)("td",{parentName:"tr",align:"center"},"return true if the default product sale element is new")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$IS_PROMO"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"center"},"returns if at least one of it's product sale element is in promo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"returns if the default product sale element is in promo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$IS_TRANSLATED"),(0,l.kt)("td",{parentName:"tr",align:null},"check if the product is translated or not"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$LOCALE"),(0,l.kt)("td",{parentName:"tr",align:null},"the locale used for this loop"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$META_DESCRIPTION"),(0,l.kt)("td",{parentName:"tr",align:null},"the product meta description"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$META_KEYWORDS"),(0,l.kt)("td",{parentName:"tr",align:null},"the product meta keywords"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$META_TITLE"),(0,l.kt)("td",{parentName:"tr",align:null},"the product meta title"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$NEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of product after this one in the current category, following products positions, or null if none exists. Only available if ",(0,l.kt)("strong",null,"with_prev_next_info")," parameter is set to true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$POSITION"),(0,l.kt)("td",{parentName:"tr",align:null},"the product position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$POSTSCRIPTUM"),(0,l.kt)("td",{parentName:"tr",align:null},"Postscriptum"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$PREVIOUS"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of product before this one in the current category, following products positions, or null if none exists. Only available if ",(0,l.kt)("strong",null,"with_prev_next_info")," parameter is set to true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$PRICE"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements price"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$PRICE_TAX"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements price tax"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$PRODUCT_SALE_ELEMENT"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$PROMO_PRICE"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements promo price"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$PROMO_PRICE_TAX"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements promo price tax"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$PSE_COUNT"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of product sale elements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$QUANTITY"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements stock quantity"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$REF"),(0,l.kt)("td",{parentName:"tr",align:null},"the product reference"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$TAXED_PRICE"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements taxed price"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$TAXED_PROMO_PRICE"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements taxed promo price"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$TAX_RULE_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"the product's tax rule ID"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$TEMPLATE"),(0,l.kt)("td",{parentName:"tr",align:null},"the template id associated to this product"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$TITLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Title"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$URL"),(0,l.kt)("td",{parentName:"tr",align:null},"the product URL"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$VIRTUAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Return if the product is a virtual product or not"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$VISIBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Return if the product is visible or not"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$WEIGHT"),(0,l.kt)("td",{parentName:"tr",align:null},"the default product sale elements weight"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"I want to display all products from categories 1 and 2 and their subcategories whose feature ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," (ID : 1) is ",(0,l.kt)("inlineCode",{parentName:"p"},"blue")," (ID : 13) or ",(0,l.kt)("inlineCode",{parentName:"p"},"lightblue")," (ID : 17), order by ascending price"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-smarty"},'<ul>\n{loop type="product" name="my_product_loop" category="1,2" depth="2" feature_availability="1:13|17" order="min_price"}\n    <li>{$TITLE} ({$REF})</li>\n{/loop}\n</ul>\n')),(0,l.kt)("p",null,"I want to display all products which are in promo for the current category displaying the new products first and then order by decreasing price"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-smarty"},'<ul>\n{loop type="product" name="another_product_loop" promo="true" current_category="true" order="new,max_price"}\n    <li>{$TITLE} ({$REF})</li>\n{/loop}\n</ul>\n')),(0,l.kt)("h2",{id:"product-order-possible-values"},"Order possible values"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#product-arguments"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,l.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"alpha_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created"),(0,l.kt)("td",{parentName:"tr",align:null},"created_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creation date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updated"),(0,l.kt)("td",{parentName:"tr",align:null},"updated_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Last update date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"id_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null},"ref_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manual"),(0,l.kt)("td",{parentName:"tr",align:null},"manual_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"By position considering a given category, ",(0,l.kt)("inlineCode",{parentName:"td"},"category")," argument must be set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min_price"),(0,l.kt)("td",{parentName:"tr",align:null},"max_price"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Price")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"position_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"By position, without considering a parent category")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"visible_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Visible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"given_id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Return the same order received in id argument which therefore must be set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"new"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"left"},"New products first")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"promo"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Promo product first")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"random"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Random order")))),(0,l.kt)("h2",{id:"product_attribute_non_strict_match_values"},"attribute_non_strict_match possible values"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#product-arguments"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Expected values"),(0,l.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"all the attributes are non strict")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_price"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_weight"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min_price"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min_stock"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min_weight"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"new"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:"left"},"product loop will look for at least 1 attribute which matches all the loop criteria.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"promo"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}N.isMDXComponent=!0}}]);