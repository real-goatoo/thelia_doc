"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[3101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Smarty plugins"},o=void 0,l={unversionedId:"smarty_plugins/index",id:"smarty_plugins/index",title:"Smarty plugins",description:"To create plugin Smarty in Thelia, just create a new class that extend TheliaSmarty\\Template\\AbstractSmartyPlugin, then create function called getPluginDescriptors",source:"@site/docs/smarty_plugins/index.md",sourceDirName:"smarty_plugins",slug:"/smarty_plugins/",permalink:"/thelia_doc/docs/smarty_plugins/",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/index.md",tags:[],version:"current",frontMatter:{title:"Smarty plugins"},sidebar:"docs",previous:{title:"Template",permalink:"/thelia_doc/docs/template"},next:{title:"Substitutions",permalink:"/thelia_doc/docs/smarty_plugins/substitutions/"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To create plugin Smarty in Thelia, just create a new class that extend ",(0,a.kt)("inlineCode",{parentName:"p"},"TheliaSmarty\\Template\\AbstractSmartyPlugin"),", then create function called ",(0,a.kt)("inlineCode",{parentName:"p"},"getPluginDescriptors"),"\nthat lists and describes all the plugin you want to create (you can create as many plugins as you want in one class).",(0,a.kt)("br",{parentName:"p"}),"\n","A smarty plugin is described like this :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"new SmartyPluginDescriptor(\n    'function',\n    'myFunction',\n    $this,\n    'doMyFunction'\n)\n")),(0,a.kt)("p",null,"First parameter is the type of the plugin, more information ",(0,a.kt)("a",{parentName:"p",href:"https://smarty-php.github.io/smarty/programmers/plugins.html"},"here"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Second parameter is the name you have to put in your templates to call your plugin.",(0,a.kt)("br",{parentName:"p"}),"\n","Third parameter is location of the Class of your function, in general it's ",(0,a.kt)("inlineCode",{parentName:"p"},"$this")," because you write function in the same class as the declaration.",(0,a.kt)("br",{parentName:"p"}),"\n","Fourth parameter is the name of the function you want to call."),(0,a.kt)("p",null,"Declaration of your plugins :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class MyProjectPlugin extends AbstractSmartyPlugin\n{\n    public function getPluginDescriptors()\n    {\n        return [\n            new SmartyPluginDescriptor(\n                'function',\n                'lower',\n                 $this,\n                'lowerString'\n            ),\n            new SmartyPluginDescriptor(\n                'function',\n                'bestProduct',\n                $this,\n                'getBestProduct'\n            )\n        ];\n    }\n    \n    public function lowerString($params)\n    {\n        return strtolower($params['string']);\n    }\n    \n    public function getBestProduct($params)\n    {\n        // Do a query to find your best product and return it\n    }\n}\n")),(0,a.kt)("p",null,"Usage :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-smarty"},'    {lower string="A String THAT need to be LOWERCASE"} // Some plugins needs params\n    \n    {bestProduct} // Other don\'t\n')))}u.isMDXComponent=!0}}]);