(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),l=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),d=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,b=u["".concat(a,".").concat(s)]||u[s]||m[s]||o;return n?l.a.createElement(b,i(i({ref:t},p),{},{components:n})):l.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),l=n(7),o=(n(0),n(128)),a={title:"Templating"},i={unversionedId:"modules/templating",id:"modules/templating",isDocsHomePage:!1,title:"Templating",description:"Render your templates",source:"@site/docs/modules/templating.md",slug:"/modules/templating",permalink:"/thelia_doc/docs/modules/templating",editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/modules/templating.md",version:"current",sidebar:"docs",previous:{title:"Caching",permalink:"/thelia_doc/docs/modules/caching"},next:{title:"Payment modules",permalink:"/thelia_doc/docs/modules/special/payment"}},c=[{value:"Render your templates",id:"render-your-templates",children:[]},{value:"Overrides and fallbacks",id:"overrides-and-fallbacks",children:[]}],p={toc:c};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"render-your-templates"},"Render your templates"),Object(o.b)("p",null,"In your controller, you can use the templating engine to generate the content of your response, basicaly HTML content. "),Object(o.b)("p",null,"2 helper functions are present to do this job : ",Object(o.b)("inlineCode",{parentName:"p"},"render")," and ",Object(o.b)("inlineCode",{parentName:"p"},"renderRaw")),Object(o.b)("p",null,"The main difference is that ",Object(o.b)("inlineCode",{parentName:"p"},"renderRaw")," returns the rendered code (",Object(o.b)("inlineCode",{parentName:"p"},"string"),") whereas ",Object(o.b)("inlineCode",{parentName:"p"},"render")," returns a response (",Object(o.b)("inlineCode",{parentName:"p"},"\\Thelia\\Core\\HttpFoundation\\Response"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"namespace MyModule\\Controller;\n\nuse Thelia\\Controller\\Front\\BaseFrontController;\n\nclass Something extends BaseFrontController\n{\n    public function viewAction($productId)\n    {\n        // ...\n        \n        return $this->render('mytemplate', ['product_id' => $productId]);\n    }\n}\n")),Object(o.b)("p",null,"By default, the template file to render is located inside your module in the ",Object(o.b)("inlineCode",{parentName:"p"},"templates")," directory. Then, in one of the following directories depending of the context of the request : frontOffice, backOffice, pdf, email. And finally in the directory with the same name of you current template (in the current context)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mytemplate.html")," : "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-smarty"}),'{loop type="product" name="mymodule.product" id="{$product_id}"}\n    {* Do something with product *}\n{/loop}\n')),Object(o.b)("h2",{id:"overrides-and-fallbacks"},"Overrides and fallbacks"),Object(o.b)("p",null,"When you call the ",Object(o.b)("inlineCode",{parentName:"p"},"render")," function inside your module, Thelia will apply the following set of rules to find the file that will be rendered. "),Object(o.b)("p",null,"Example : if we use the frontOffice template ",Object(o.b)("inlineCode",{parentName:"p"},"mytemplate"),", and render ",Object(o.b)("inlineCode",{parentName:"p"},"myrender")," file inside ",Object(o.b)("inlineCode",{parentName:"p"},"mymodule")," module :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Thelia will first test if file ",Object(o.b)("inlineCode",{parentName:"li"},"templates/frontOffice/mytemplate/myrender.html")," exists and will use it."),Object(o.b)("li",{parentName:"ol"},"Then it will search for ",Object(o.b)("inlineCode",{parentName:"li"},"templates/frontOffice/mytemplate/modules/mymodule/myrender.html"),"."),Object(o.b)("li",{parentName:"ol"},"Then it will try ",Object(o.b)("inlineCode",{parentName:"li"},"/local/modules/mymodule/templates/frontOffice/mytemplate/myrender.html"),"."),Object(o.b)("li",{parentName:"ol"},"By default, Thelia will stop here and generate an error if the file was not found. However, if you've set the ",Object(o.b)("inlineCode",{parentName:"li"},"$useFallbackTemplate"),"variable to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," in your controller (this is the default), Thelia will enventually use ",Object(o.b)("inlineCode",{parentName:"li"},"/local/modules/mymodule/templates/frontOffice/*default*/myrender.html"),".")),Object(o.b)("p",null,"This way, you can override a module's template file either in the front office template (rule 2), or in the in the module's template directory (rule 3)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\nnamespace MyModule\\Controller;\n\nuse Thelia\\Controller\\Front\\BaseFrontController;\n\nclass MyController extends BaseFrontController\n{\n    \n    protected $useFallbackTemplate = true;\n    \n    public function viewAction($productId)\n    {\n        // ...\n        return $this->render('mytemplate', ['product_id' => $productId]);\n    }\n}\n")))}d.isMDXComponent=!0}}]);