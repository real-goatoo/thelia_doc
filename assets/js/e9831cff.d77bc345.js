"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[8588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Update",sidebar_position:14},o=void 0,l={unversionedId:"update",id:"update",title:"Update",description:"Update components",source:"@site/docs/update.md",sourceDirName:".",slug:"/update",permalink:"/thelia_doc/docs/update",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/update.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Update",sidebar_position:14},sidebar:"docs",previous:{title:"Internationalization",permalink:"/thelia_doc/docs/Internationalization"},next:{title:"Contribute",permalink:"/thelia_doc/docs/contribute"}},u={},p=[{value:"Update components",id:"update-components",level:2},{value:"Update database",id:"update-database",level:2},{value:"Migrate from Thelia &lt; 2.4 to 2.5",id:"migrate-from-thelia--24-to-25",level:2},{value:"Module",id:"module",level:3},{value:"Propel",id:"propel",level:3},{value:"Forms",id:"forms",level:3},{value:"Dispatcher",id:"dispatcher",level:3},{value:"Smarty",id:"smarty",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update-components"},"Update components"),(0,r.kt)("p",null,"To update Thelia components just execute this command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"composer update thelia/thelia-skeleton 2.5.0\n")),(0,r.kt)("h2",{id:"update-database"},"Update database"),(0,r.kt)("p",null,"Then update you can update your database with this script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php local/setup/update.php\n")),(0,r.kt)("h2",{id:"migrate-from-thelia--24-to-25"},"Migrate from Thelia < 2.4 to 2.5"),(0,r.kt)("p",null,"Module made for Thelia <= 2.4 are not compatible with the new version of Thelia, but there is no lot of change to make it compatible."),(0,r.kt)("h3",{id:"module"},"Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some functions in BaseModule had their return type set, because you are overwriting them you need to set their return type as well"),(0,r.kt)("li",{parentName:"ul"},"If you want to enable autowiring in your module you must add this function in your base class :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public static function configureServices(ServicesConfigurator $servicesConfigurator): void\n{\n    $servicesConfigurator->load(self::getModuleCode().'\\\\', __DIR__)\n        ->exclude([THELIA_MODULE_DIR . ucfirst(self::getModuleCode()). \"/I18n/*\"])\n        ->autowire(true)\n        ->autoconfigure(true);\n}\n")),(0,r.kt)("h3",{id:"propel"},"Propel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"schema.xml")," change the database name from ",(0,r.kt)("inlineCode",{parentName:"li"},"Thelia")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"TheliaMain")),(0,r.kt)("li",{parentName:"ul"},"If some model has been generated by Propel in ",(0,r.kt)("inlineCode",{parentName:"li"},"Model/Base")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Model/Map")," remove these two folders, they are now generated in the cache")),(0,r.kt)("h3",{id:"forms"},"Forms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Form type alias name doesn't work anymore, you have to use the fully qualified class name, like ",(0,r.kt)("inlineCode",{parentName:"li"},"TextType::class")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"text")),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"choices")," parameter in choice type invert the ",(0,r.kt)("inlineCode",{parentName:"li"},"label")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"value")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"getName()")," must be static"),(0,r.kt)("li",{parentName:"ul"},"Form name must not contain dot ",(0,r.kt)("inlineCode",{parentName:"li"},".")," replace it with an underscore ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," (don't forget to replace it in your templates)"),(0,r.kt)("li",{parentName:"ul"},"The callback constraints structure has changed"),(0,r.kt)("li",{parentName:"ul"},"In controllers don't call ",(0,r.kt)("inlineCode",{parentName:"li"},"new MyForm();")," to create your form but ",(0,r.kt)("inlineCode",{parentName:"li"},"createForm(FormClassName::getName())"))),(0,r.kt)("h3",{id:"dispatcher"},"Dispatcher"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arguments in dispatch function are inverted, the ",(0,r.kt)("inlineCode",{parentName:"li"},"event object")," is the first argument and ",(0,r.kt)("inlineCode",{parentName:"li"},"event name")," is the second")),(0,r.kt)("h3",{id:"smarty"},"Smarty"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you try to access to a not defined variable in Smarty it will now throw an error, you have to either do a check before using it or adding a default value like this ",(0,r.kt)("inlineCode",{parentName:"li"},"{$var|default:null}"))))}c.isMDXComponent=!0}}]);