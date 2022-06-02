"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[5030],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),u=s(t),g=o,d=u["".concat(l,".").concat(g)]||u[g]||f[g]||i;return t?r.createElement(d,a(a({ref:e},p),{},{components:t})):r.createElement(d,a({ref:e},p))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7810:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Nginx configuration",sidebar_position:5},l=void 0,s={unversionedId:"getting_started/nginx_configuration",id:"getting_started/nginx_configuration",title:"Nginx configuration",description:"Only the `web` directory has to be accessible :",source:"@site/docs/getting_started/nginx_configuration.md",sourceDirName:"getting_started",slug:"/getting_started/nginx_configuration",permalink:"/thelia_doc/docs/getting_started/nginx_configuration",draft:!1,editUrl:"https://github.com/real-goatoo/thelia_doc/edit/master/docs/getting_started/nginx_configuration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Nginx configuration",sidebar_position:5},sidebar:"myAutogeneratedSidebar",previous:{title:"Apache configuration",permalink:"/thelia_doc/docs/getting_started/apache_configuration"},next:{title:"Dockerize your Thelia",permalink:"/thelia_doc/docs/getting_started/docker"}},p={},f=[],u={toc:f};function g(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Only the ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," directory has to be accessible :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'server {\n    listen 80;\n    server_name domain.tld;\n\n    root /var/www/thelia/web/;\n    index index.php;\n\n    access_log      /var/log/nginx/domain.tld_access.log;\n    error_log       /var/log/nginx/domain.tld_error.log;\n\n    location / {\n        try_files $uri $uri/ @rewriteapp;\n    }\n\n    location @rewriteapp {\n    # rewrite all to index.php\n        rewrite ^(.*)$ /index.php/$1 last;\n    }\n\n    # Php configuration\n    location ~ ^/(index|index_dev)\\.php(/|$) {\n        # Php-FPM Config (Socks or Network) \n        fastcgi_pass unix:/var/run/php5-fpm.sock;\n        # fastcgi_pass 127.0.0.1:9000;\n        fastcgi_split_path_info ^(.+\\.php)(/.*)$;\n        include fastcgi_params;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n    }\n\n    # Security. discard all files and folders starting with a "."\n    location ~ /\\. {\n        deny  all;\n        access_log off;\n        log_not_found off;\n    }\n    # Stuffs\n    location = /favicon.ico {\n        allow all;\n        access_log off;\n        log_not_found off;\n    }\n    location ~ /robots.txt {\n        allow  all;\n        access_log off;\n        log_not_found off;\n    }\n\n    # Static files\n    location ~* ^.+\\.(jpg|jpeg|gif|css|png|js|pdf|zip)$ {\n        expires     30d;\n        access_log  off;\n        log_not_found off;\n    }\n}\n')),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/www/thelia/web")," by the full path to the web directory of your project"))}g.isMDXComponent=!0}}]);