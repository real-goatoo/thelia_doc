"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[8768],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,g=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Apache configuration",sidebar_position:4},l=void 0,u={unversionedId:"getting_started/apache_configuration",id:"getting_started/apache_configuration",title:"Apache configuration",description:"Only the `web` directory has to be accessible with apache, you can configure your vhost like this :",source:"@site/docs/getting_started/apache_configuration.md",sourceDirName:"getting_started",slug:"/getting_started/apache_configuration",permalink:"/thelia_doc/docs/getting_started/apache_configuration",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/getting_started/apache_configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Apache configuration",sidebar_position:4},sidebar:"myAutogeneratedSidebar",previous:{title:"Update",permalink:"/thelia_doc/docs/getting_started/Update"},next:{title:"Nginx configuration",permalink:"/thelia_doc/docs/getting_started/nginx_configuration"}},p={},s=[],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Only the ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," directory has to be accessible with apache, you can configure your vhost like this :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<virtualhost *:80>\n\n    ServerName http://domain.tld\n    DocumentRoot "/var/www/thelia/web"\n\n    <Directory "/var/www/thelia/web">\n        AllowOverride All\n        \n        # on apache 2.2 use :\n        #Order allow,deny\n        #Allow from all\n        \n        # on apache 2.4 use :\n        Require all granted\n    </Directory>\n\n    # Custom log file\n    Loglevel warn\n    ErrorLog /var/log/apache2/yoursite.error.log\n    CustomLog /var/log/apache2/yoursite.log combined\n\n</virtualHost>\n\n')),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/www/thelia/web")," by the full path to the web directory of your project"),(0,a.kt)("p",null,"Apache write in some directories so check this directories and change their rights :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cache"),(0,a.kt)("li",{parentName:"ul"},"log"),(0,a.kt)("li",{parentName:"ul"},"local/session"),(0,a.kt)("li",{parentName:"ul"},"local/media"),(0,a.kt)("li",{parentName:"ul"},"web")))}f.isMDXComponent=!0}}]);