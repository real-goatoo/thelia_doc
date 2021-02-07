(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(124)),c={title:"How it works"},i={unversionedId:"events/index",id:"events/index",isDocsHomePage:!1,title:"How it works",description:"As in Thelia 1 you can use an action in order to create a new account, add a product in you cart and many more.",source:"@site/docs/events/index.md",slug:"/events/index",permalink:"/thelia_doc/docs/events/index",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/events/index.md",version:"current",sidebar:"docs",previous:{title:"Delivery modules",permalink:"/thelia_doc/docs/modules/special/delivery"},next:{title:"How it works",permalink:"/thelia_doc/docs/loops/index"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As in Thelia 1 you can use an action in order to create a new account, add a product in you cart and many more."),Object(o.b)("p",null,"Many Action are native and, of course, you can create your own using modules. But the new part in Thelia 2 is that you\ncan override all native actions and replace them with your own actions."),Object(o.b)("p",null,'Actions use EventListener process and are declared in configuration files. They are executed at the start of the TheliaHTTPKernel::handle method.\nAn internal listener will catch kernel.request event and dispatch a new one if the action parameter is presents in the request. This new event name starts with\n"action." follow by the action name. So if the action is createCustomer, the event name is action.createCustomer and you can now catch this event as you want.'),Object(o.b)("p",null,"All your method's action have for only argument a ",Object(o.b)("strong",{parentName:"p"},"Thelia\\Core\\Event\\ActionEvent")," object instance. This object\ncontains the current Request and a Dispatcher (for dispatching new Events if you want)."),Object(o.b)("p",null,"In order to declare actions in your module, you have to use your config.xml file and then to declare a new service,\nfor example you have the modules test with this structure :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Test\n    Config\n        config.xml\n    Loop\n        SuperLoop.php\n        MegaLoop.php\n    Filters\n        ...\n    Actions\n        Customer.php\n")),Object(o.b)("p",null,'In your config.xml you have already declared your own loops, filters and other services. EventListeners have to use the special "tag" named "kernel.event_subscriber".'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" ?>\n\n<config xmlns="http://thelia.net/schema/dic/config"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://thelia.net/schema/dic/config http://thelia.net/schema/dic/config/thelia-1.0.xsd">\n\n        ....\n        <services>\n            <service id="module.action.customer" class="MyModule\\Actions\\Customer">\n                <tag name="kernel.event_subscriber"/>\n            </service>\n        </services>\n\n</config>\n')),Object(o.b)("p",null,"You Customer class must have to implement ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://api.symfony.com/2.8/Symfony/Component/EventDispatcher/EventSubscriberInterface.html"}),"Symfony\\Component\\EventDispatcher\\EventSubscriberInterface")," and to implement the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://api.symfony.com/2.2/Symfony/Component/EventDispatcher/EventSubscriberInterface.html#method_getSubscribedEvents"}),"getSubscribedEvents")," method."),Object(o.b)("p",null,"The action name for creating a new customer is ",Object(o.b)("strong",{parentName:"p"},"createCustomer")," so the event name is ",Object(o.b)("strong",{parentName:"p"},"action.createCustomer")," and you have to declare in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://api.symfony.com/2.2/Symfony/Component/EventDispatcher/EventSubscriberInterface.html#method_getSubscribedEvents"}),"getSubscribedEvents")," that you want to listen this action.\nBecause this action is also a default thelia action, you can decide if your action has to be executed before the\ndefault one, if you want it to stop the propagation after the execution of your action or if you want it to be executed after\nthe thelia default action."),Object(o.b)("p",null,"If you want to execute your custom action before the default action, you have to declare a priority greater than 128. Also\nif you want it to be declared after the default action you have to declare a priority lesser than 128 (if you don't declare priority is like you have declaring a priority\nequal to 0)."),Object(o.b)("p",null,"If you read the API documentation you see that :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"    /**\n     * Returns an array of event names this subscriber wants to listen to.\n     *\n     * The array keys are event names and the value can be:\n     *\n     *  * The method name to call (priority defaults to 0)\n     *  * An array composed of the method name to call and the priority\n     *  * An array of arrays composed of the method names to call and respective\n     *    priorities, or 0 if unset\n     *\n     * For instance:\n     *\n     *  * array('eventName' => 'methodName')\n     *  * array('eventName' => array('methodName', $priority))\n     *  * array('eventName' => array(array('methodName1', $priority), array('methodName2'))\n     *\n     * @return array The event names to listen to\n     *\n     * @api\n     */\n")),Object(o.b)("p",null,"Your method for this action is named ",Object(o.b)("em",{parentName:"p"},"create"),"."),Object(o.b)("p",null,"Example for the case if you want to replace the default action :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'<?php\n\n    public static function getSubscribedEvents()\n    {\n        return array(\n            "action.createCustomer" => array("create", 256),\n        );\n    }\n\n')),Object(o.b)("p",null,"Example if you don't want to replace the default action :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'<?php\n\n    public static function getSubscribedEvents()\n    {\n        return array(\n            "action.createCustomer" => array("create", 0),\n        );\n    }\n\n')),Object(o.b)("p",null,"This is a complete example of your Customer class :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'<?php\n\nnamespace Test\\Actions;\n\nuse Symfony\\Component\\EventDispatcher\\EventSubscriberInterface;\nuse Thelia\\Core\\Event\\ActionEvent;\n\n\nclass Customer implements EventSubscriberInterface\n{\n\n    public function create(ActionEvent $event)\n    {\n        //your code here\n    }\n\n    public static function getSubscribedEvents()\n    {\n        return array(\n            "action.createCustomer" => array("create", 256),\n        );\n    }\n}\n\n')))}l.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,i(i({ref:t},u),{},{components:n})):r.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);