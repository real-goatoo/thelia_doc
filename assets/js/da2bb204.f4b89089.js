"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[9260],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=l,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={title:"Internationalization",sidebar_position:13},i=void 0,o={unversionedId:"Internationalization",id:"Internationalization",title:"Internationalization",description:"In templates",source:"@site/docs/Internationalization.md",sourceDirName:".",slug:"/Internationalization",permalink:"/thelia_doc/docs/Internationalization",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/Internationalization.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Internationalization",sidebar_position:13},sidebar:"myAutogeneratedSidebar",previous:{title:"thelia:install",permalink:"/thelia_doc/docs/commands/thelia_install"},next:{title:"Update",permalink:"/thelia_doc/docs/update"}},s={},d=[{value:"In templates",id:"in-templates",level:2},{value:"{intl}",id:"intl",level:3},{value:"<code>l</code>",id:"l",level:4},{value:"<code>d</code>",id:"d",level:4},{value:"<code>js</code>",id:"js",level:4},{value:"Translating your templates",id:"translating-your-templates",level:4},{value:"{format_date}",id:"format_date",level:3},{value:"Examples",id:"examples",level:4},{value:"Parameters",id:"parameters",level:4},{value:"{format_number}",id:"format_number",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"{format_money}",id:"format_money",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"{format_address}",id:"format_address",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"In php files",id:"in-php-files",level:2}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"in-templates"},"In templates"),(0,l.kt)("p",null,"If you want to create multilingual compatible templates, you have to pay a special attention to :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"static text"),(0,l.kt)("li",{parentName:"ul"},"date formatting"),(0,l.kt)("li",{parentName:"ul"},"number formatting"),(0,l.kt)("li",{parentName:"ul"},"money formatting")),(0,l.kt)("p",null,"Thelia provides several Smarty functions to help you."),(0,l.kt)("h3",{id:"intl"},"{intl}"),(0,l.kt)("p",null,"The {intl} function translates a string into the current language."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{intl l="This is a string to translate"}\n\nor\n\n{intl l="This is another string to translate" d="mymodule.ai"}\n\nor\n\n{intl l="Hello, %name, how do you do ?" name={$name}}\n')),(0,l.kt)("p",null,"We have here three typical uses of {intl}"),(0,l.kt)("h4",{id:"l"},(0,l.kt)("inlineCode",{parentName:"h4"},"l")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"l")," parameter contains the string that will be translated. This string should not contains any variable, such as ",(0,l.kt)("inlineCode",{parentName:"p"},'{intl l="Hello, $name, how do you do ?"}'),", internal variables should be used instead. Every ",(0,l.kt)("inlineCode",{parentName:"p"},"%varname")," found in the string will be replaced by the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"varname")," parameter. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},'{intl l="Hello, %user, how do you do ?" user={$name}}')," is fine."),(0,l.kt)("p",null,"If no translation can be found for a given string, the translator will return either the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"l"),' parameter, or an empty string, depending on the "Languages & URLs" parameters.'),(0,l.kt)("h4",{id:"d"},(0,l.kt)("inlineCode",{parentName:"h4"},"d")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"d")," parameter is the message domain, a set of internationalized messages. Thelia contains the following domains :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"core")," => for thelia core translations"),(0,l.kt)("li",{parentName:"ul"},"bo.",(0,l.kt)("em",{parentName:"li"},"template_name")," (eg : ",(0,l.kt)("inlineCode",{parentName:"li"},"bo.default"),") => for each back-office template"),(0,l.kt)("li",{parentName:"ul"},"fo.",(0,l.kt)("em",{parentName:"li"},"template_name")," (eg : ",(0,l.kt)("inlineCode",{parentName:"li"},"fo.default"),") => for each front-office template"),(0,l.kt)("li",{parentName:"ul"},"pdf.",(0,l.kt)("em",{parentName:"li"},"template_name")," (eg : ",(0,l.kt)("inlineCode",{parentName:"li"},"pdf.default"),") => for each PDF template"),(0,l.kt)("li",{parentName:"ul"},"email.",(0,l.kt)("em",{parentName:"li"},"template_name")," (eg : ",(0,l.kt)("inlineCode",{parentName:"li"},"email.default"),") => for each email template"),(0,l.kt)("li",{parentName:"ul"},"In Modules :",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"module_code")," (eg : ",(0,l.kt)("inlineCode",{parentName:"li"},"paypal"),") => fore module core translations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"module_code"),".ai (eg : ",(0,l.kt)("inlineCode",{parentName:"li"},"paypal.ai"),") => used in AdminIncludes templates (Note: AdminIncludes are now deprecated)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"module_code"),".bo.",(0,l.kt)("em",{parentName:"li"},"template_name")," (eg : ",(0,l.kt)("inlineCode",{parentName:"li"},"paypal.bo.default"),") => used in back office template"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"module_code"),".fo.",(0,l.kt)("em",{parentName:"li"},"template_name")," (eg : ",(0,l.kt)("inlineCode",{parentName:"li"},"paypal.fo.default"),") => used in front office template")))),(0,l.kt)("p",null,"This parameter is mostly used in modules. Other templates (front-office, back-office, PDF and email) may use the ",(0,l.kt)("inlineCode",{parentName:"p"},"{default_translation_domain}")," function to define a template-wide message domain, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"d")," parameter could then be omitted."),(0,l.kt)("p",null,"For examples, in the ",(0,l.kt)("inlineCode",{parentName:"p"},"layout.tpl")," file of the default front-office template, you'll find ",(0,l.kt)("inlineCode",{parentName:"p"},"{default_translation_domain domain='fo.default'}"),"."),(0,l.kt)("h4",{id:"js"},(0,l.kt)("inlineCode",{parentName:"h4"},"js")),(0,l.kt)("p",null,"When using ",(0,l.kt)("inlineCode",{parentName:"p"},"{intl}")," in a Javascript string, the translated string may contain simple and/or double quotes, that should be escaped to prevent a syntax error."),(0,l.kt)("p",null,"To do so, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"js")," parameter, that will escape single and double quotes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var myString = '{intl l=\"A string with 'simple' and \\\"double\\\" quotes\" js=1}';\n")),(0,l.kt)("p",null,"The result will be :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var myString = 'A string \\'simple\\' and \\\"double\\\" quotes';\n")),(0,l.kt)("p",null,"You may also use the escape:'html' Smarty modifier :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var myString = '{intl l=\"A string with 'simple' and \\\"double\\\" quotes\"|escape:'html'}';\n")),(0,l.kt)("p",null,"The result will be in this case :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var myString = 'A string with &#039;simple&#039; and &quot;double&quot; quotes';\n")),(0,l.kt)("p",null,"The 'quotes' modifier could also be used, with some care as it escapes only simple quotes :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var myString = '{intl l=\"A string with 'simple' and \\\"double\\\" quotes\"|escape:'quotes'}';\n")),(0,l.kt)("p",null,"will gives :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var myString = 'A string with \\'simple\\' and \"double\" quotes';\n")),(0,l.kt)("h4",{id:"translating-your-templates"},"Translating your templates"),(0,l.kt)("p",null,"Translations is done through the back-office -> Configuration -> Translation. The string are automatically collected in your template, and you'll be able to enter the translation for any language defined in your store (see Configuration, -> Languages & URLs)."),(0,l.kt)("h3",{id:"format_date"},"{format_date}"),(0,l.kt)("p",null,"Use this function to format a date according to the current locale standards."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Return the given date using the locale date format as date and time\n{format_date date=$dateTimeObject}\n\nReturn the given date using a specified format    \n{format_date date=$dateTimeObject format="Y-m-d H:i:s"}\n\nReturn the given date as a date string, using the locale date\n{format_date date=$dateTimeObject output="date"}\n\nReturn the given date as a time string, using the locale date\n{format_date date=$dateTimeObject output="time"}\n')),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"date"),": a DateTime object (required)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format"),": the expected format. The current locale format will be used if this parameter is empty or missing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"output"),": the type of desired ouput, one of :",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"date"),": the date only"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"time"),": the time only"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"datetime"),": the date and the time (default)")))),(0,l.kt)("h3",{id:"format_number"},"{format_number}"),(0,l.kt)("p",null,"Use this function to format a number according to the current locale standards, or a specific format."),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Outputs "1 246,1"\n{format_number number="1246.12" decimals="1" dec_point="," thousands_sep=" "}\n\nOutputs "1246,12" if locale is fr_FR, 1 246.12 if locale is en_US\n{format_number number="1246.12"}\n')),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number"),": int or float number"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimals"),": how many decimals format expected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dec_point"),": separator for the decimal point"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"thousands_sep"),": thousands separator")),(0,l.kt)("h3",{id:"format_money"},"{format_money}"),(0,l.kt)("p",null,"Use this function to format an amount of money according to the current locale standards, or a specific format."),(0,l.kt)("h4",{id:"examples-2"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Outputs "1 246,1 \u20ac"\n{format_money number="1246.12" decimals="1" dec_point="," thousands_sep=" " symbol="\u20ac"}\n\nOutputs "1246,12 \u20ac" if locale is fr_FR, "\u20ac 1 246.12" if locale is en_US\n{format_money number="1246.12"}\n')),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number"),": int or float number"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimals"),": how many decimals format expected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dec_point"),": separator for the decimal point"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"thousands_sep"),": thousands separator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"symbol"),": Currency symbol"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove_zero_decimal")," (since 2.4.0) : Do not show decimals if they are zero. example: 1234.00 \u20ac will become 1234 \u20ac")),(0,l.kt)("h3",{id:"format_address"},"{format_address}"),(0,l.kt)("p",null,"Use this function to format an address according to the current country standards."),(0,l.kt)("h4",{id:"examples-3"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-smarty"},'{* format Address 1 in html *}\n{format_address address="1"}\n\n{* format Address 1 in html and in french (default is the session lang) *}\n{format_address address="1" locale="fr_FR"}\n\n{* format Address 1 in html with custom tag and attributes *}\n{format_address address="1" html_tag="address" html_class="customer-address" html_id="address1" }\n\n{* format Address 1 in plain text *}\n{format_address address="1" html="0"}\n\n{* format Address 1 as a postal label *}\n{format_address postal="1" address="1"}\n\n{* format Address 1 as a postal label and set the origin country (default is the shop country, then the default country) *}\n{format_address postal="1" address="1" origin_country=\'FR\'}\n\n{* format order address 1 *}\n{format_address order_address="1"}\n\n{* format a custom address *}\n{format_address\n    recipient="M. Barack Obama"\n    organization="The White House"\n    address_line1="1600 Pennsylvania Avenue NW"\n    postal_code="20500"\n    locality="Washington"\n    country_code="US"\n    administrative_area="US-DC"\n}\n')),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("p",null,"Address information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address"),": an address id"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"order_address"),": an order address id"),(0,l.kt)("li",{parentName:"ul"},"or separated list of information :",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"country_code")," : the country code. eg: US"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"administrative_area")," : state or province code. eg: US-CA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"locality")," : The city"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dependent_locality")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"postal_code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sorting_code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address_line1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address_line2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"organization")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recipient"))))),(0,l.kt)("p",null,"Formatting options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"postal")," : (boolean value) format address as a postal label. Takes care of uppercasing fields where required by the format (to facilitate automated mail sorting). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"origin_country")," : used when ",(0,l.kt)("inlineCode",{parentName:"li"},"postal")," is true to specify the origin country. allowing it to differentiate between domestic and international mail. The default value is the store country, then the default country if store country is not specified."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"html")," : (boolean value) format address in html (",(0,l.kt)("inlineCode",{parentName:"li"},"true"),") or in plain text (",(0,l.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"html_tag")," : main outer tag used if html formatting is used. default : ",(0,l.kt)("inlineCode",{parentName:"li"},"p")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"html_*")," : list of html attributes to add to the main tag. eg : ",(0,l.kt)("inlineCode",{parentName:"li"},'html_class="address"')," will generate ",(0,l.kt)("inlineCode",{parentName:"li"},'<p class="address">...')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"locale")," : the locale used to generate country name. Default: the current locale in session.")),(0,l.kt)("h2",{id:"in-php-files"},"In php files"),(0,l.kt)("p",null,"If you have string to translate in your php classes like error messages you have to use the translator.\nTranslator is a singleton class that help you to register your string as translatable like this :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'Translator::getInstance()\n    ->trans("A string that need to be translated");\n')),(0,l.kt)("p",null,"If you want to insert dynamic value that can change and that don't need to be translated you can pass it in the second parameter :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"Translator::getInstance()\n    ->trans(\"A string that need to be translated with %variable\", ['%variable' => $myVariable]);\n")),(0,l.kt)("p",null,"Third parameter of the tans function is the domain so if you are in a module file the best is to take the global module domain present in a constant of base class :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"Translator::getInstance()\n    ->trans(\n        \"A string that need to be translated with %variable\",\n        ['%variable' => $myVariable]\n        MyProject::DOMAIN_NAME\n    );\n")))}p.isMDXComponent=!0}}]);