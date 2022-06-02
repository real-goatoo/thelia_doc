"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[1097],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(c,".").concat(p)]||m[p]||s[p]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4754:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Add your own logic",sidebar_position:2},c=void 0,u={unversionedId:"getting_started/add_your_own_logic",id:"getting_started/add_your_own_logic",title:"Add your own logic",description:"Create a module",source:"@site/docs/getting_started/add_your_own_logic.md",sourceDirName:"getting_started",slug:"/getting_started/add_your_own_logic",permalink:"/thelia_doc/docs/getting_started/add_your_own_logic",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/getting_started/add_your_own_logic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Add your own logic",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"Installation",permalink:"/thelia_doc/docs/getting_started/Installation"},next:{title:"Update",permalink:"/thelia_doc/docs/getting_started/Update"}},d={},s=[{value:"Create a module",id:"create-a-module",level:2},{value:"Base file (MyProject.php)",id:"base-file-myprojectphp",level:2},{value:"Extend the database",id:"extend-the-database",level:2},{value:"Create your tables",id:"create-your-tables",level:3},{value:"Update your table",id:"update-your-table",level:3}],m={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-a-module"},"Create a module"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We advise to create only one module for all your own logic, don't create one module by feature or something else.",(0,r.kt)("br",{parentName:"p"}),"\n","The only reason to create a separate module is if you want to share it with the community \ud83d\ude09"))),(0,r.kt)("p",null,"To extend to Thelia you need to create a module in general for the main module we call it with the same name as the project."),(0,r.kt)("p",null,"A command can help you to create the base files :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php Thelia module:generate MyProject\n")),(0,r.kt)("p",null,"This will generate this structure in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"local\\modules")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\\MyProject\n  MyProject.php <- mandatory\n  composer.json\n  \\Config\n    config.xml   <- mandatory\n    module.xml   <- mandatory\n    routing.xml\n    schema.xml\n  ...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyProject.php")," is the base file of your module it will help you to set up some behaviour  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"module.xml")," contains information about module like version of the module, compatibility and dependencies with other modules, author, ...    "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.xml")," to declare your services, event listener, loops, forms, commands or hooks. But thanks to symfony autowiring most of the time you won't need to do this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routing.xml")," to list your application's routes, like config.xml this file is not very useful anymore because we can put the routes directly in the controllers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema.xml")," to describe the database table related to your module."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"composer.json")," help you to share your module with the community")),(0,r.kt)("p",null,"Once the module is created you can go to your shop back-office and active it in the module list."),(0,r.kt)("h2",{id:"base-file-myprojectphp"},"Base file (MyProject.php)"),(0,r.kt)("p",null,"This file must extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"Thelia\\Module\\BaseModule")," class (except for payments and deliveries modules)\nDuring the lifecycle of a module theses function are called and allow you to apply your own logic by overwritting them :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"install(ConnectionInterface $con = null);")," This method is called when the plugin is installed for the first time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preActivation(ConnectionInterface $con = null);")," This method is called before the module activation, and may prevent it by returning false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postActivation(ConnectionInterface $con = null);")," This method is called after was successfully activated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preDeactivation(ConnectionInterface $con = null);")," This method is called before the module deactivation, and may prevent it by returning false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postDeactivation(ConnectionInterface $con = null);")," This method is called after was successfully deactivated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update($currentVersion, $newVersion, ConnectionInterface $con = null);")," This method is called on a module refresh if the previous version in module.xml is different than the current version")),(0,r.kt)("h2",{id:"extend-the-database"},"Extend the database"),(0,r.kt)("h3",{id:"create-your-tables"},"Create your tables"),(0,r.kt)("h3",{id:"update-your-table"},"Update your table"))}p.isMDXComponent=!0}}]);