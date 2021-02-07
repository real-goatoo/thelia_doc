(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return i}));var n=o(3),r=o(7),a=(o(0),o(124)),l={title:"Create your own"},p={unversionedId:"loops/create",id:"loops/create",isDocsHomePage:!1,title:"Create your own",description:"Declare your loops",source:"@site/docs/loops/create.md",slug:"/loops/create",permalink:"/thelia_doc/docs/loops/create",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/loops/create.md",version:"current",sidebar:"docs",previous:{title:"How it works",permalink:"/thelia_doc/docs/loops/index"},next:{title:"Thelia loops",permalink:"/thelia_doc/docs/loops/thelia"}},c=[{value:"Declare your loops",id:"declare-your-loops",children:[]},{value:"Implement your loops",id:"implement-your-loops",children:[{value:"What&#39;s the difference betwen <em>PropelSearchLoopInterface</em> and <em>ArraySearchLoopInterface</em>",id:"whats-the-difference-betwen-propelsearchloopinterface-and-arraysearchloopinterface",children:[]},{value:"Example 1",id:"example-1",children:[]}]}],u={toc:c};function i(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"declare-your-loops"},"Declare your loops"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<loops>\n    <loop name="mymodule_product" class="MyModule\\Loop\\Product" />\n    <loop name="mymodule_myloop" class="MyModule\\Loop\\MyLoop" />\n</loops>\n')),Object(a.b)("p",null,"You have to create as many loop node as loop you have into the loops node. In this example there is 2 loops. Name and\nclass properties are mandatory. The name is the loop name used into the template ( like in Thelia v1 : ",Object(a.b)("inlineCode",{parentName:"p"},'<THELIA_name\ntype="MyModule_Product">...</THELIA_name>'),"), class property is the class executed by the template engine. This\nclass must extends the Thelia\\Core\\Template\\Element\\BaseLoop abstract class, if not an exception is thrown.\n",Object(a.b)("strong",{parentName:"p"},"If you name your loop like a default loop (eg : product), your loop will replace the default loop.")),Object(a.b)("h2",{id:"implement-your-loops"},"Implement your loops"),Object(a.b)("p",null,"Your loop can be anywhere (Thanks to namespace) in your module but it's better to create a Loop directory and put all your loops in this directory."),Object(a.b)("p",null,"You have to extends the Thelia\\Core\\Template\\Element\\BaseLoop abstract class and implement either Thelia\\Core\\Template\\Element\\PropelSearchLoopInterface or Thelia\\Core\\Template\\Element\\ArraySearchLoopInterface. Therefore you will have to create ",Object(a.b)("em",{parentName:"p"},"getArgDefinitions"),", ",Object(a.b)("em",{parentName:"p"},"parseResults")," and either ",Object(a.b)("em",{parentName:"p"},"buildModelCriteria")," or ",Object(a.b)("em",{parentName:"p"},"buildArray")," methods."),Object(a.b)("p",null,"NB : You can also extend BaseI18nLoop which itself extends BaseLoop. This will provide tools to manage i18n in your loop."),Object(a.b)("h3",{id:"whats-the-difference-betwen-propelsearchloopinterface-and-arraysearchloopinterface"},"What's the difference betwen ",Object(a.b)("em",{parentName:"h3"},"PropelSearchLoopInterface")," and ",Object(a.b)("em",{parentName:"h3"},"ArraySearchLoopInterface")),Object(a.b)("p",null,"It's a matter of data type. If the data your loop returns come from the database you must implement ",Object(a.b)("em",{parentName:"p"},"PropelSearchLoopInterface")," and create ",Object(a.b)("em",{parentName:"p"},"buildModelCriteria")," method which return a ",Object(a.b)("em",{parentName:"p"},"Propel\\Runtime\\ActiveQuery\\ModelCriteria"),". Conversely if your loop displays data from an array you must implement ",Object(a.b)("em",{parentName:"p"},"ArraySearchLoopInterface")," and create ",Object(a.b)("em",{parentName:"p"},"buildArray")," method which return an array."),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"parseResults")," method is used to render the template. It must return a Thelia\\Core\\Template\\Element\\LoopResult instance."),Object(a.b)("p",null,"The getArgDefinitions method defines all args used in your loop. Args can be mandatory, optional, with default value, etc. This method must return an Thelia\\Core\\Template\\Loop\\Argument\\ArgumentCollection. ArgumentCollection contains Thelia\\Core\\Template\\Loop\\Argument which contains a Thelia\\Type\\TypeCollection. Types in the collection must implement Thelia\\Type\\TypeInterface."),Object(a.b)("p",null,"If you don't define your arguments here, you can't use them in your new loop. All arguments are accessible in the ",Object(a.b)("inlineCode",{parentName:"p"},"parseResults")," method."),Object(a.b)("p",null,"Baseloop class declares 3 public properties you might overload in your new loop."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public $countable = true;\npublic $timestampable = false;\npublic $versionable = false;\n")),Object(a.b)("p",null,"With these properties set to true, the loop will automatically render - or not - the following outputs :"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if($countable === true)\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"LOOP_COUNT"),Object(a.b)("li",{parentName:"ul"},"LOOP_TOTAL")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if($timestampable === true) //available if your table is timestampable\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CREATE_DATE"),Object(a.b)("li",{parentName:"ul"},"CREATE_UPDATE")),Object(a.b)("h3",{id:"example-1"},"Example 1"),Object(a.b)("p",null,'Here an example for my module "MyModule" and my loops in the loop directory. This is the architecture :'),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"\\local\n  \\modules\n    \\MyModule\n      ...\n      \\Loop\n        MyLoop.php\n")),Object(a.b)("p",null," MyLoop.php file :"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"namespace MyModule\\Loop;\n\nuse Thelia\\Core\\Template\\Element\\BaseLoop;\nuse Thelia\\Core\\Template\\Element\\LoopResult;\nuse Thelia\\Core\\Template\\Element\\LoopResultRow;\nuse Thelia\\Core\\Template\\Element\\ArraySearchLoopInterface;\nuse Thelia\\Core\\Template\\Loop\\Argument\\ArgumentCollection;\nuse Thelia\\Core\\Template\\Loop\\Argument\\Argument;\n\nclass MyLoop extends BaseLoop implements ArraySearchLoopInterface {\n\n   public $countable = true;\n   public $timestampable = false;\n   public $versionable = false;\n\n    public function getArgDefinitions()\n    {\n        return new ArgumentCollection(\n            Argument::createIntListTypeArgument('start', 0),\n            Argument::createIntListTypeArgument('stop', null, true)\n        );\n    }\n\n    public function buildArray()\n    {\n        $items = array();\n\n        $start = $this->getStart();\n        $stop = $this->getStop();\n\n        for($i=$start; $i<=$stop; $i++ {\n           $items[] = $i;\n        }\n\n        return $items;\n\n    }\n\n    public function parseResults(LoopResult $loopResult)\n    {\n        foreach ($loopResult->getResultDataCollection() as $item) {\n\n            $loopResultRow = new LoopResultRow();\n\n            $loopResultRow->set(\"MY_OUTPUT\", $item);\n\n            $loopResult->addRow($loopResultRow);\n        }\n\n        return $loopResult;\n    }\n}\n\n")),Object(a.b)("p",null," Of course you can use all classes you want in your own loop class, like model class. All Thelia's model classes are in the\nnamespace Thelia\\Model"),Object(a.b)("p",null," So if I want to add some search in my DB and return results from product table I can use something like this :"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'/**\n*\n* return Thelia\\Core\\Template\\Element\\LoopResult\n*/\npublic function buildModelCriteria()\n{\n   return ProductQuery::create();\n}\n\npublic function parseResults(LoopResult $loopResult)\n{\n    foreach ($loopResult->getResultDataCollection() as $product) {\n\n       $loopResultRow = new LoopResultRow($product);\n\n       $loopResultRow->set("REF", $product->getRef());\n\n       $loopResult->addRow($loopResultRow);\n   }\n\n   return $loopResult;\n}\n')))}i.isMDXComponent=!0},124:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=r.a.createContext({}),i=function(e){var t=r.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},s=function(e){var t=i(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(o),b=n,d=s["".concat(l,".").concat(b)]||s[b]||m[b]||a;return o?r.a.createElement(d,p(p({ref:t},u),{},{components:o})):r.a.createElement(d,p({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<a;u++)l[u]=o[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);