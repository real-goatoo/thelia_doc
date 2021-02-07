(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(124)),i={title:"Environment variables"},c={unversionedId:"configuration/environment_variables",id:"configuration/environment_variables",isDocsHomePage:!1,title:"Environment variables",description:"It is possible to use environment variables instead of hard coding database credentials.",source:"@site/docs/configuration/environment_variables.md",slug:"/configuration/environment_variables",permalink:"/docs/configuration/environment_variables",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/configuration/environment_variables.md",version:"current",sidebar:"docs",previous:{title:"Server",permalink:"/docs/configuration/server"},next:{title:"Database",permalink:"/docs/configuration/database"}},s=[],l={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It is possible to use environment variables instead of hard coding database credentials."),Object(a.b)("p",null,"The HttpKernel component already has this feature so we reuse it in Thelia so you stil have to use the prefix SYMFONY__ ,\nthe documentation is here : ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://symfony.com/fr/doc/2.8/cookbook/configuration/external_parameters.html"}),"http://symfony.com/fr/doc/2.8/cookbook/configuration/external_parameters.html")),Object(a.b)("p",null,"database.yml file exemple : "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"database:\n  connection:\n    driver: %database.driver%\n    user: %database.user%\n    password: %database.pwd%\n    dsn: mysql:host=%database.host%;dbname=%database.db_name%;port=3306\n    \n")),Object(a.b)("p",null,"and the variable in the Vhost :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"SetEnv  SYMFONY__DATABASE__USER foo\nSetEnv  SYMFONY__DATABASE__PWD bar\nSetEnv  SYMFONY__DATABASE__DRIVER mysql\nSetEnv  SYMFONY__DATABASE__HOST localhost\nSetEnv  SYMFONY__DATABASE__DB_NAME thelia\n")),Object(a.b)("p",null,"With this system, you can now add your database.yml file in your versionning system and deploy easily your Thelia without modifying it.\nOf course you have to configure the Vhost on your production environment."),Object(a.b)("p",null,"Obviously you can already use environment variables in all your container configuration."))}u.isMDXComponent=!0},124:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return t?o.a.createElement(f,c(c({ref:n},l),{},{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);