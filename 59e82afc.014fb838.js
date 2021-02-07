(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||c;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(124)),o={title:"Caching"},i={unversionedId:"modules/caching",id:"modules/caching",isDocsHomePage:!1,title:"Caching",description:"Thelia uses the Symfony cache component.",source:"@site/docs/modules/caching.md",slug:"/modules/caching",permalink:"/docs/modules/caching",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/modules/caching.md",version:"current",sidebar:"docs",previous:{title:"Routing",permalink:"/docs/modules/routing"},next:{title:"Templating",permalink:"/docs/modules/templating"}},p=[],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Thelia uses the Symfony cache component."),Object(c.b)("p",null,"This component provides a strict ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.php-fig.org/psr/psr-6/"}),Object(c.b)("inlineCode",{parentName:"a"},"PSR-6"))," implementation for adding cache to your applications. It is designed to have a low overhead so that caching is fastest. It ships with a few caching adapters for the most widespread and suited to caching backends. It also provides a doctrine/cache proxy adapter to cover more advanced caching needs and a proxy adapter for greater interoperability between PSR-6 implementations."),Object(c.b)("p",null,'The service "thelia.cache" is available in Thelia. This service is a simple implementation of ',Object(c.b)("inlineCode",{parentName:"p"},"FilesystemAdapter"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"class MyController extends BaseFrontController\n{\n    public function myMethod()\n    {\n        $myItemKey = 'my_cache_key';\n\n        /** @var \\Symfony\\Component\\Cache\\Adapter\\AdapterInterface $cacheAdapter */\n        $cacheAdapter = $this->container->get('thelia.cache');\n\n        /** @var \\Symfony\\Component\\Cache\\Adapter\\AdapterInterface $cacheItem */\n        $cacheItem = $cacheAdapter->getItem($myItemKey);\n\n        if (!$cacheItem->isHit()) {\n            $cacheItem\n                ->set('My big value')\n                ->expiresAfter(6000)\n                ->save();\n        }\n\n        $myValue = $cacheItem->get();\n    }\n}\n")))}l.isMDXComponent=!0}}]);