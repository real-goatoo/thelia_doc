"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[684],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||u;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<u;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),u=(n(7294),n(3905)),a=["components"],i={title:"Routing"},l=void 0,c={unversionedId:"modules/routing",id:"modules/routing",title:"Routing",description:"You can define your own routing rules for your Module.",source:"@site/docs/modules/routing.md",sourceDirName:"modules",slug:"/modules/routing",permalink:"/thelia_doc/docs/modules/routing",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/modules/routing.md",tags:[],version:"current",frontMatter:{title:"Routing"},sidebar:"myAutogeneratedSidebar",previous:{title:"Getting started",permalink:"/thelia_doc/docs/modules/getting_started"},next:{title:"Delivery modules",permalink:"/thelia_doc/docs/modules/special/delivery"}},s={},d=[{value:"Default Behaviour",id:"default-behaviour",level:2},{value:"Routes syntax",id:"routes-syntax",level:2},{value:"How to create a controller",id:"how-to-create-a-controller",level:2},{value:"Custom Routing",id:"custom-routing",level:2}],m={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"You can define your own routing rules for your Module.\nRouting definition uses XML files"),(0,u.kt)("h2",{id:"default-behaviour"},"Default Behaviour"),(0,u.kt)("p",null,"All you have to do is to create a file named routing.xml in your Config directory. Thelia will configure a new router (with id router.",(0,u.kt)("em",{parentName:"p"},"module_code")," (ex : router.hooksearch)) and set a default priority (150) to it."),(0,u.kt)("h2",{id:"routes-syntax"},"Routes syntax"),(0,u.kt)("p",null,"The routing.xml file contains something like this :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n\n<routes xmlns="http://symfony.com/schema/routing"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://symfony.com/schema/routing http://symfony.com/schema/routing/routing-1.0.xsd">\n\n    <route id="MyModule.home" path="/mymodule/" >\n        <default key="_controller">Thelia\\Controller\\Front\\DefaultController::noAction</default>\n        <default key="_view">index</default>\n    </route>\n    \n    <route id="MyModule.foo" path="/mymodule/foo" >\n        <default key="_controller">Thelia:Front\\Default:no</default>\n        <default key="_view">foo</default>\n    </route>\n\n    <route id="MyModule.create.something" path="/mymodule/something/create">\n        <default key="_controller">MyModule\\Controller\\SomethingController::createAction</default>\n    </route>\n    \n    <route id="MyModule.update.something" path="/mymodule/something/update">\n        <default key="_controller">MyModule:Something:update</default> \n        \x3c!-- It is the same as:\n        <default key="_controller">MyModule\\Controller\\SomethingController::updateAction</default> \n        --\x3e\n    </route>\n\n</routes>\n')),(0,u.kt)("h2",{id:"how-to-create-a-controller"},"How to create a controller"),(0,u.kt)("p",null,"A controller is basically a class. This class must extends a class, this class can differ according to its context."),(0,u.kt)("p",null,"If you are in FrontOffice context you must extend the ",(0,u.kt)("inlineCode",{parentName:"p"},"Thelia\\Controller\\Front\\BaseFrontController")," class. On the contrary in Admin context\nyou must extend the ",(0,u.kt)("inlineCode",{parentName:"p"},"Thelia\\Controller\\Admin\\BaseAdminController"),"."),(0,u.kt)("p",null,"Example :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"namespace MyModule\\Controller;\n\nuse Thelia\\Controller\\Front\\BaseFrontController;\n\nclass Something extends BaseFrontController\n{\n    public function createAction()\n    {\n        //my code here, you can access to many helpers here, see the api\n    }\n}\n")),(0,u.kt)("p",null,"If you want to generate URL from route id in controllers, keep attention to use the right router. For example, if you want to use the ",(0,u.kt)("inlineCode",{parentName:"p"},"generateRedirectFromRoute")," with a route defined in your module, you should set the current router properly : "),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"class Something extends BaseFrontController\n{\n    protected $currentRouter = \"router.mymodule\";\n    \n    public function redirectAction()\n    {\n        return $this->generateRedirectFromRoute('mymodule.create.success');\n    }\n}\n")),(0,u.kt)("h2",{id:"custom-routing"},"Custom Routing"),(0,u.kt)("p",null,"If you need a custom configuration for your routing, you can declare a new service and tag this service and put ",(0,u.kt)("inlineCode",{parentName:"p"},"router.register")," for the name property and the priority you want.\nDoing this, your file ",(0,u.kt)("strong",{parentName:"p"},"SHOULD NOT")," be named routing.xml (due to the default behaviour)."),(0,u.kt)("p",null,"You ",(0,u.kt)("strong",{parentName:"p"},"SHOULD")," set the service ID with a unique identifier, and define the path to your routing file in the second argument element "),(0,u.kt)("p",null,"The service ID, obviously, must be unique and a good practice is to prefix it with ",(0,u.kt)("inlineCode",{parentName:"p"},"router")," : router.",(0,u.kt)("em",{parentName:"p"},"something")),(0,u.kt)("p",null,"The second argument is the relative path to your routing file from the modules directory. The example below comes from the Front module and the priority level is set to 128 (so lower than the default priority)."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-xml"},'    \x3c!-- the service id must be unique and prefixed by router. --\x3e\n    <service id="router.front" class="%router.class%">\n        <argument type="service" id="router.module.xmlLoader"/>\n        \n        \x3c!-- This argument is the relative path to your routing file from the modules directory. Change it with your own path --\x3e\n        <argument>Front/Config/front.xml</argument>\n        <argument type="collection">\n            <argument key="cache_dir">%kernel.cache_dir%</argument>\n            <argument key="debug">%kernel.debug%</argument>\n        </argument>\n        <argument type="service" id="request.context"/>\n        <tag name="router.register" priority="128"/>\n    </service>\n')))}p.isMDXComponent=!0}}]);