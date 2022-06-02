"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4376],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),s=l,f=c["".concat(p,".").concat(s)]||c[s]||m[s]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1316:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"Templating"},p=void 0,u={unversionedId:"modules/templating",id:"modules/templating",title:"Templating",description:"Render your templates",source:"@site/docs/modules/templating.md",sourceDirName:"modules",slug:"/modules/templating",permalink:"/thelia_doc/docs/modules/templating",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/modules/templating.md",tags:[],version:"current",frontMatter:{title:"Templating"},sidebar:"myAutogeneratedSidebar",previous:{title:"Payment modules",permalink:"/thelia_doc/docs/modules/special/payment"}},d={},m=[{value:"Render your templates",id:"render-your-templates",level:2},{value:"Overrides and fallbacks",id:"overrides-and-fallbacks",level:2}],c={toc:m};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"render-your-templates"},"Render your templates"),(0,o.kt)("p",null,"In your controller, you can use the templating engine to generate the content of your response, basicaly HTML content. "),(0,o.kt)("p",null,"2 helper functions are present to do this job : ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"renderRaw")),(0,o.kt)("p",null,"The main difference is that ",(0,o.kt)("inlineCode",{parentName:"p"},"renderRaw")," returns the rendered code (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),") whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," returns a response (",(0,o.kt)("inlineCode",{parentName:"p"},"\\Thelia\\Core\\HttpFoundation\\Response"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace MyModule\\Controller;\n\nuse Thelia\\Controller\\Front\\BaseFrontController;\n\nclass Something extends BaseFrontController\n{\n    public function viewAction($productId)\n    {\n        // ...\n        \n        return $this->render('mytemplate', ['product_id' => $productId]);\n    }\n}\n")),(0,o.kt)("p",null,"By default, the template file to render is located inside your module in the ",(0,o.kt)("inlineCode",{parentName:"p"},"templates")," directory. Then, in one of the following directories depending of the context of the request : frontOffice, backOffice, pdf, email. And finally in the directory with the same name of you current template (in the current context)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mytemplate.html")," : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},'{loop type="product" name="mymodule.product" id="{$product_id}"}\n    {* Do something with product *}\n{/loop}\n')),(0,o.kt)("h2",{id:"overrides-and-fallbacks"},"Overrides and fallbacks"),(0,o.kt)("p",null,"When you call the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function inside your module, Thelia will apply the following set of rules to find the file that will be rendered. "),(0,o.kt)("p",null,"Example : if we use the frontOffice template ",(0,o.kt)("inlineCode",{parentName:"p"},"mytemplate"),", and render ",(0,o.kt)("inlineCode",{parentName:"p"},"myrender")," file inside ",(0,o.kt)("inlineCode",{parentName:"p"},"mymodule")," module :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Thelia will first test if file ",(0,o.kt)("inlineCode",{parentName:"li"},"templates/frontOffice/mytemplate/myrender.html")," exists and will use it."),(0,o.kt)("li",{parentName:"ol"},"Then it will search for ",(0,o.kt)("inlineCode",{parentName:"li"},"templates/frontOffice/mytemplate/modules/mymodule/myrender.html"),"."),(0,o.kt)("li",{parentName:"ol"},"Then it will try ",(0,o.kt)("inlineCode",{parentName:"li"},"/local/modules/mymodule/templates/frontOffice/mytemplate/myrender.html"),"."),(0,o.kt)("li",{parentName:"ol"},"By default, Thelia will stop here and generate an error if the file was not found. However, if you've set the ",(0,o.kt)("inlineCode",{parentName:"li"},"$useFallbackTemplate"),"variable to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," in your controller (this is the default), Thelia will enventually use ",(0,o.kt)("inlineCode",{parentName:"li"},"/local/modules/mymodule/templates/frontOffice/*default*/myrender.html"),".")),(0,o.kt)("p",null,"This way, you can override a module's template file either in the front office template (rule 2), or in the in the module's template directory (rule 3)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace MyModule\\Controller;\n\nuse Thelia\\Controller\\Front\\BaseFrontController;\n\nclass MyController extends BaseFrontController\n{\n    \n    protected $useFallbackTemplate = true;\n    \n    public function viewAction($productId)\n    {\n        // ...\n        return $this->render('mytemplate', ['product_id' => $productId]);\n    }\n}\n")))}s.isMDXComponent=!0}}]);