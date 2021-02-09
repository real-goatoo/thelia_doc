(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(128)),o={title:"Database"},c={unversionedId:"configuration/database",id:"configuration/database",isDocsHomePage:!1,title:"Database",description:"This feature is only available since Thelia 2.2",source:"@site/docs/configuration/database.md",slug:"/configuration/database",permalink:"/thelia_doc/docs/configuration/database",editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/configuration/database.md",version:"current",sidebar:"docs",previous:{title:"Environment variables",permalink:"/thelia_doc/docs/configuration/environment_variables"},next:{title:"Configuration variables",permalink:"/thelia_doc/docs/configuration/configuration_variables"}},l=[{value:"Database",id:"database",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"alert alert-warning"},"This feature is only available since Thelia 2.2"),Object(i.b)("div",{class:"page-header"},Object(i.b)("h1",null,"Configuration")),Object(i.b)("h2",{id:"database"},"Database"),Object(i.b)("p",null,"It is possible to use different database, depending on the environment."),Object(i.b)("p",null,"Install Thelia with the graphical wizard or with ",Object(i.b)("inlineCode",{parentName:"p"},"php Thelia thelia:install")," command.\nThen you can define another connection for an environment by creating a ",Object(i.b)("inlineCode",{parentName:"p"},"database_*env*.yml")," file in the ",Object(i.b)("inlineCode",{parentName:"p"},"local/config")," directory."),Object(i.b)("p",null,"For instance, if you have a ",Object(i.b)("inlineCode",{parentName:"p"},"database_prod.yml")," file, the database used with ",Object(i.b)("inlineCode",{parentName:"p"},"index.php")," will be this one, while the one used with ",Object(i.b)("inlineCode",{parentName:"p"},"index_dev.php")," and during unit tests will be the one of ",Object(i.b)("inlineCode",{parentName:"p"},"database.yml")))}u.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);