"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[7634],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"How it works"},s=void 0,u={unversionedId:"events/index",id:"events/index",title:"How it works",description:"As in Thelia 1 you can use an action in order to create a new account, add a product in you cart and many more.",source:"@site/docs/events/index.md",sourceDirName:"events",slug:"/events/",permalink:"/thelia_doc/docs/events/",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/events/index.md",tags:[],version:"current",frontMatter:{title:"How it works"},sidebar:"myAutogeneratedSidebar",previous:{title:"Contribute",permalink:"/thelia_doc/docs/contribute"},next:{title:"Caching",permalink:"/thelia_doc/docs/modules/caching"}},l={},p=[],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As in Thelia 1 you can use an action in order to create a new account, add a product in you cart and many more."),(0,o.kt)("p",null,"Many Action are native and, of course, you can create your own using modules. But the new part in Thelia 2 is that you\ncan override all native actions and replace them with your own actions."),(0,o.kt)("p",null,'Actions use EventListener process and are declared in configuration files. They are executed at the start of the TheliaHTTPKernel::handle method.\nAn internal listener will catch kernel.request event and dispatch a new one if the action parameter is presents in the request. This new event name starts with\n"action." follow by the action name. So if the action is createCustomer, the event name is action.createCustomer and you can now catch this event as you want.'),(0,o.kt)("p",null,"All your method's action have for only argument a ",(0,o.kt)("strong",{parentName:"p"},"Thelia\\Core\\Event\\ActionEvent")," object instance. This object\ncontains the current Request and a Dispatcher (for dispatching new Events if you want)."),(0,o.kt)("p",null,"In order to declare actions in your module, you have to use your config.xml file and then to declare a new service,\nfor example you have the modules test with this structure :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Test\n    Config\n        config.xml\n    Loop\n        SuperLoop.php\n        MegaLoop.php\n    Filters\n        ...\n    Actions\n        Customer.php\n")),(0,o.kt)("p",null,'In your config.xml you have already declared your own loops, filters and other services. EventListeners have to use the special "tag" named "kernel.event_subscriber".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n\n<config xmlns="http://thelia.net/schema/dic/config"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">\n\n        ....\n        <services>\n            <service id="module.action.customer" class="MyModule\\Actions\\Customer">\n                <tag name="kernel.event_subscriber"/>\n            </service>\n        </services>\n\n</config>\n')),(0,o.kt)("p",null,"You Customer class must have to implement ",(0,o.kt)("a",{parentName:"p",href:"http://api.symfony.com/2.8/Symfony/Component/EventDispatcher/EventSubscriberInterface.html"},"Symfony\\Component\\EventDispatcher\\EventSubscriberInterface")," and to implement the ",(0,o.kt)("a",{parentName:"p",href:"http://api.symfony.com/2.2/Symfony/Component/EventDispatcher/EventSubscriberInterface.html#method_getSubscribedEvents"},"getSubscribedEvents")," method."),(0,o.kt)("p",null,"The action name for creating a new customer is ",(0,o.kt)("strong",{parentName:"p"},"createCustomer")," so the event name is ",(0,o.kt)("strong",{parentName:"p"},"action.createCustomer")," and you have to declare in the ",(0,o.kt)("a",{parentName:"p",href:"http://api.symfony.com/2.2/Symfony/Component/EventDispatcher/EventSubscriberInterface.html#method_getSubscribedEvents"},"getSubscribedEvents")," that you want to listen this action.\nBecause this action is also a default thelia action, you can decide if your action has to be executed before the\ndefault one, if you want it to stop the propagation after the execution of your action or if you want it to be executed after\nthe thelia default action."),(0,o.kt)("p",null,"If you want to execute your custom action before the default action, you have to declare a priority greater than 128. Also\nif you want it to be declared after the default action you have to declare a priority lesser than 128 (if you don't declare priority is like you have declaring a priority\nequal to 0)."),(0,o.kt)("p",null,"If you read the API documentation you see that :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    /**\n     * Returns an array of event names this subscriber wants to listen to.\n     *\n     * The array keys are event names and the value can be:\n     *\n     *  * The method name to call (priority defaults to 0)\n     *  * An array composed of the method name to call and the priority\n     *  * An array of arrays composed of the method names to call and respective\n     *    priorities, or 0 if unset\n     *\n     * For instance:\n     *\n     *  * array('eventName' => 'methodName')\n     *  * array('eventName' => array('methodName', $priority))\n     *  * array('eventName' => array(array('methodName1', $priority), array('methodName2'))\n     *\n     * @return array The event names to listen to\n     *\n     * @api\n     */\n")),(0,o.kt)("p",null,"Your method for this action is named ",(0,o.kt)("em",{parentName:"p"},"create"),"."),(0,o.kt)("p",null,"Example for the case if you want to replace the default action :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\n    public static function getSubscribedEvents()\n    {\n        return array(\n            "action.createCustomer" => array("create", 256),\n        );\n    }\n\n')),(0,o.kt)("p",null,"Example if you don't want to replace the default action :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\n    public static function getSubscribedEvents()\n    {\n        return array(\n            "action.createCustomer" => array("create", 0),\n        );\n    }\n\n')),(0,o.kt)("p",null,"This is a complete example of your Customer class :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\nnamespace Test\\Actions;\n\nuse Symfony\\Component\\EventDispatcher\\EventSubscriberInterface;\nuse Thelia\\Core\\Event\\ActionEvent;\n\n\nclass Customer implements EventSubscriberInterface\n{\n\n    public function create(ActionEvent $event)\n    {\n        //your code here\n    }\n\n    public static function getSubscribedEvents()\n    {\n        return array(\n            "action.createCustomer" => array("create", 256),\n        );\n    }\n}\n\n')))}h.isMDXComponent=!0}}]);