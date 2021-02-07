(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(124)),o={title:"Requirements"},l={unversionedId:"installation/requirements",id:"installation/requirements",isDocsHomePage:!1,title:"Requirements",description:"Requirements",source:"@site/docs/installation/requirements.md",slug:"/installation/requirements",permalink:"/thelia_doc/docs/installation/requirements",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation/requirements.md",version:"current",sidebar:"docs",previous:{title:"Contribute",permalink:"/thelia_doc/docs/thelia/contribute"},next:{title:"Installation with composer",permalink:"/thelia_doc/docs/installation/composer"}},c=[{value:"MySQL 5.6",id:"mysql-56",children:[]},{value:"Archive builders",id:"archive-builders",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"page-header"},Object(i.b)("h1",null,"Requirements")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PHP 5.5 to 7.2",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Required extensions :",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"PDO_Mysql"),Object(i.b)("li",{parentName:"ul"},"openssl"),Object(i.b)("li",{parentName:"ul"},"intl"),Object(i.b)("li",{parentName:"ul"},"gd"),Object(i.b)("li",{parentName:"ul"},"curl"),Object(i.b)("li",{parentName:"ul"},"calendar"),Object(i.b)("li",{parentName:"ul"},"dom"))),Object(i.b)("li",{parentName:"ul"},"safe_mode off"),Object(i.b)("li",{parentName:"ul"},"memory_limit at least 128M, preferably 256."),Object(i.b)("li",{parentName:"ul"},"post","_","max","_","size 20M"),Object(i.b)("li",{parentName:"ul"},"upload","_","max","_","filesize 2M"),Object(i.b)("li",{parentName:"ul"},"date.timezone must be defined"))),Object(i.b)("li",{parentName:"ul"},"Web Server Apache 2 or Nginx"),Object(i.b)("li",{parentName:"ul"},"MySQL 5")),Object(i.b)("p",null,"If you're using ",Object(i.b)("strong",{parentName:"p"},"Windows")," with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.wampserver.com/"}),"WAMP")," and encounter an issue with ",Object(i.b)("inlineCode",{parentName:"p"},"intl")," there is a special manipulation to do : you have to copy all files with name ",Object(i.b)("inlineCode",{parentName:"p"},"icu***.dll"),'  from php directory (eg: "C:\\wamp\\bin\\php\\php5.x.xx") to the ',Object(i.b)("inlineCode",{parentName:"p"},"apache"),' directory ("C:\\wamp\\bin\\apache\\apache2.x.xx\\bin").'),Object(i.b)("h2",{id:"mysql-56"},"MySQL 5.6"),Object(i.b)("p",null,"As of MySQL 5.6, default configuration sets the sql_mode value to"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION\n")),Object(i.b)("p",null,"This 'STRICT_TRANS_TABLES' configuration results in SQL errors when no default value is defined on NOT NULL columns and the value is empty or invalid."),Object(i.b)("p",null,"You can edit this default config in ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/my.cnf")," and change the sql_mode to remove the STRICT_TRANS_TABLES part"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"[mysqld]\nsql_mode=NO_ENGINE_SUBSTITUTION\n")),Object(i.b)("p",null,"Assuming your sql_mode is the default one, you can change the value directly on the run by running the following SQL Command"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"SET @@GLOBAL.sql_mode='NO_ENGINE_SUBSTITUTION', @@SESSION.sql_mode='NO_ENGINE_SUBSTITUTION'\n")),Object(i.b)("p",null,"For more information on sql_mode you can consult the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://dev.mysql.com/doc/refman/5.0/fr/server-sql-mode.html",title:"sql Mode"}),"MySQL doc")),Object(i.b)("h2",{id:"archive-builders"},"Archive builders"),Object(i.b)("p",null,"Thelia's archive builders need external libraries.\nFor zip archives, you need PECL zip. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://php.net/manual/en/zip.installation.php"}),"PHP Doc")),Object(i.b)("p",null,'For tar archives, you need PECL phar. Moreover, you need to deactivate php.ini option "phar.readonly":'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ini"}),"phar.readonly = Off\n")),Object(i.b)("p",null,'For tar.bz2 archives, you need tar\'s dependencies and the extension "bzip2". See ',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://php.net/manual/fr/book.bzip2.php"}),"PHP Doc")),Object(i.b)("p",null,'For tar.gz archives, you need tar\'s dependencies and the extension "zlib". See ',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://fr2.php.net/manual/fr/book.zlib.php"}),"PHP Doc")))}b.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);