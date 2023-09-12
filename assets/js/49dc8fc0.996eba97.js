"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[6030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const l={title:"Loops"},r=void 0,i={unversionedId:"loops/index",id:"loops/index",title:"Loops",description:"Loops are the most convenient feature in Thelia for front developers.",source:"@site/docs/loops/index.md",sourceDirName:"loops",slug:"/loops/",permalink:"/thelia_doc/docs/loops/",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/index.md",tags:[],version:"current",frontMatter:{title:"Loops"},sidebar:"myAutogeneratedSidebar",previous:{title:"{url}",permalink:"/thelia_doc/docs/smarty_plugins/{url}"},next:{title:"Global arguments",permalink:"/thelia_doc/docs/loops/global_arguments"}},p={},s=[{value:"Classic loop",id:"classic-loop",level:3},{value:"Conditional loop",id:"conditional-loop",level:3},{value:"Page loop",id:"page-loop",level:3},{value:"Implement your loops",id:"implement-your-loops",level:2},{value:"Array loop",id:"array-loop",level:2},{value:"Propel loop",id:"propel-loop",level:2},{value:"Argument types",id:"argument-types",level:2},{value:"Options",id:"options",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Loops are the most convenient feature in Thelia for front developers.",(0,o.kt)("br",{parentName:"p"}),"\n","Loops allow to get data from your shop back-end and display them in your front view. In Thelia loops are a Smarty plugin."),(0,o.kt)("h3",{id:"classic-loop"},"Classic loop"),(0,o.kt)("p",null,"Here is a piece of html code which intends to list 4 random products from your shop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <div class="product-block">\n        PRODUCT 0 (ref : 0535233)<br />\n        The ideal product to have fun.<br />\n        <strong>Afford it for 70 \u20ac</strong>\n    </div>\n    <div class="product-block">\n        PRODUCT 1 (ref : 1245152)<br />\n        A very beautiful product to make you happy.<br />\n        <strong>Afford it for only 10 \u20ac (instead of 100) !</strong>\n    </div>\n    <div class="product-block">\n        PRODUCT 2 (ref : 9437252)<br />\n        A perfect product to procrastinate.<br />\n        <strong>Afford it for 20 \u20ac</strong>\n    </div>\n    <div class="product-block">\n        PRODUCT 4 (ref : 3566236)<br />\n        The product which will change your life.<br />\n        <strong>Afford it for only 1 000 \u20ac (instead of 1 000 000) !</strong>\n    </div>\n</div>\n')),(0,o.kt)("p",null,"How to make this piece of code dynamic ? Gathering the products you set up in your Thelia back-office ?"),(0,o.kt)("p",null,"Just use a Thelia product loop :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},'<div>\n    {loop type="product" name="my_product_loop" limit="4" order="random"}\n        <div class="product-block">\n            {$TITLE} (ref : {$REF})<br />\n            {$DESCRIPTION}<br />\n            <strong>\n                {if $IS_PROMO == 1}\n                    Afford it for only {$PROMO_PRICE} \u20ac (instead of {$PRICE}) !\n                {else}\n                    Afford it for {$PRICE} \u20ac\n                {/if}\n            </strong>\n        </div>\n    {/loop}\n</div>\n')),(0,o.kt)("p",null,"And what if you want only the products you tagged as new ? And which are from category 3 and 5 ? And whose price is at least 100 \u20ac ?"),(0,o.kt)("p",null,"No problem ! Here you are :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},'<div>\n    {loop type="product" name="my_product_loop" limit="4" order="random" new="true" category="3,5" min_price="100"}\n        <div class="product-block">\n            [...]\n        </div>\n    {/loop}\n</div>\n')),(0,o.kt)("p",null,"You can of course use a loop into another loop and pass a loop output to another loop parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},'<div>\n    {loop type="category" name="my_category_loop"}\n        <h2>{$TITLE}</h2>\n        {loop type="product" name="my_product_loop" category="{$ID}"}\n            <div class="product-block">\n                [...]\n            </div>\n        {/loop}\n    {/loop}\n</div>\n')),(0,o.kt)("p",null,"Thelia  provides a lot of loop types. You can see all the loops and their parameters / outputs in the ",(0,o.kt)("strong",null,"Loops")," sidebar menu."),(0,o.kt)("h3",{id:"conditional-loop"},"Conditional loop"),(0,o.kt)("p",null,"Conditional loops are used to define a different behaviour depending on whether a classic loop displays something or not."),(0,o.kt)("p",null,"A conditional loop is therefore linked to a classic loop using the ",(0,o.kt)("inlineCode",{parentName:"p"},"rel")," attribute which must match a classic loop ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute."),(0,o.kt)("p",null,"For example, you want to display all the associated content of a product in an unorder list (ul). If the product has no associated contents you won't display empty ",(0,o.kt)("inlineCode",{parentName:"p"},"<ul></ul>"),". And you want a message to inform there is no available content. You can use a conditional loop to do this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},'{ifloop rel="my_associated_content_loop"}\n    Associated contents for this product :\n    <ul>\n        {loop type="associated_content" name="my_associated_content_loop" product="12"}\n            <li>\n                <a href="{$URL}">{$TITLE}</a>\n            </li>\n        {/loop}\n    </ul>\n{/ifloop}\n{elseloop rel="my_associated_content_loop"}\n    No associated content for this product\n{/elseloop}\n')),(0,o.kt)("h3",{id:"page-loop"},"Page loop"),(0,o.kt)("p",null,"Page loops can be use on any classic loop which has ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," parameter. Page loops list all the pages the classic loop needs to display all it's returns."),(0,o.kt)("p",null,"A page loop is therefore linked to a classic loop using the ",(0,o.kt)("inlineCode",{parentName:"p"},"rel")," attribute which must match a classic loop ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute."),(0,o.kt)("p",null,"By default, 10 pages are displayed. You can change this value using ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," parameter."),(0,o.kt)("p",null,"List of output parameters :"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",{class:"table table-striped table-bordered"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Variable"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"$PAGE"),(0,o.kt)("td",null,"Current page number. This value is equal to the ```page``` loop parameter.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"$END"),(0,o.kt)("td",null,"The last displayed page number")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"$CURRENT"),(0,o.kt)("td",null,"on each loop, this value is incremented. So it's started with the $PAGE value and end with the $END value")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"$LAST"),(0,o.kt)("td",null,"Max page number. If a loop generates 761 pages, the value of $LAST is 761")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"$PREV"),(0,o.kt)("td",null,"previous page number. This value is always $PAGE-1 if $PAGE is greater than 1. The value is 1 therefore")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"$NEXT"),(0,o.kt)("td",null,"next page number. This value is always $PAGE+1 if $PAGE is less than $LAST. The value is $LAST therefore"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},'<div class="text-center">\n    <ul class="pagination pagination-centered">\n    {pageloop rel="customer_list" limit="20"}\n        {if $PAGE == $CURRENT && $PAGE > 2}\n            <li><a href="{url path="/admin/customers" page=$PREV}">&lsaquo;</a></li>\n        {/if}\n\n        {if $PAGE != $CURRENT}\n            <li><a href="{url path="/admin/customers" page="{$PAGE}"}">{$PAGE}</a></li>\n\n        {else}\n            <li class="active"><a href="#">{$PAGE}</a></li>\n        {/if}\n\n        {if $PAGE == $END && $PAGE < $LAST}\n            <li><a href="{url path="/admin/customers" page=$NEXT}">&rsaquo;</a></li>\n        {/if}\n    {/pageloop}\n    </ul>\n</div>\n')),(0,o.kt)("h2",{id:"implement-your-loops"},"Implement your loops"),(0,o.kt)("p",null,"Your loop can be anywhere (Thanks to namespace) in your module, but it's better to create a Loop directory and put all your loops in this directory."),(0,o.kt)("p",null,"The only thing to do is create a new class that to extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"Thelia\\Core\\Template\\Element\\BaseLoop")," class and implement one of these interfaces :     "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Thelia\\Core\\Template\\Element\\ArraySearchLoopInterface")," for an ",(0,o.kt)("a",{parentName:"li",href:"#array-loop"},"Array loop"),"     "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Thelia\\Core\\Template\\Element\\PropelSearchLoopInterface")," for a ",(0,o.kt)("a",{parentName:"li",href:"#propel-loop"},"Propel loop"),".     ")),(0,o.kt)("p",null,"NB : Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseLoop")," you can also extend ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseI18nLoop"),". This will provide tools to manage i18n in your loop."),(0,o.kt)("p",null,"The type of your loop will be the class name in snake_case for example the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"MyLoop.php")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},"my_loop"),(0,o.kt)("br",{parentName:"p"}),"\n","So to call it in template ",(0,o.kt)("inlineCode",{parentName:"p"},'{loop type="my_loop" name="a_loop_name"}{/loop}')),(0,o.kt)("h2",{id:"array-loop"},"Array loop"),(0,o.kt)("p",null,"If data in your loop doesn't come directly from a model, use an array loop.",(0,o.kt)("br",{parentName:"p"}),"\n","3 functions must be implemented :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getArgDefinitions")," to describe what ",(0,o.kt)("a",{parentName:"li",href:"#argument-types"},"arguments")," are available for your loop"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"buildArray")," who gather the data for the defined parameters"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parseResults")," to assign data to smarty variables for each loop iteration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"}," <?php\n namespace MyModule\\Loop;\n\n use Thelia\\Core\\Template\\Element\\BaseLoop;\n use Thelia\\Core\\Template\\Element\\LoopResult;\n use Thelia\\Core\\Template\\Element\\LoopResultRow;\n use Thelia\\Core\\Template\\Element\\ArraySearchLoopInterface;\n use Thelia\\Core\\Template\\Loop\\Argument\\ArgumentCollection;\n use Thelia\\Core\\Template\\Loop\\Argument\\Argument;\n\n class MyLoop extends BaseLoop implements ArraySearchLoopInterface {\n\n    public $countable = true;\n    public $timestampable = false;\n    public $versionable = false;\n\n     public function getArgDefinitions()\n     {\n         // Always return an ArgumentCollection\n         return new ArgumentCollection(\n             Argument::createIntListTypeArgument('start', 0),\n             Argument::createIntListTypeArgument('stop', null, true)\n         );\n     }\n\n     public function buildArray()\n     {\n         $items = [];\n\n         // These magics methods will get the loop arguments \"start\" and \"stop\"\n         $start = $this->getStart();\n         $stop = $this->getStop();\n\n         // Get the data from where you want\n         for ( $i = $start; $i <= $stop; $i++) {\n            $items[] = [\n                'number' => $i,\n                'numberNext' => $i + 1\n            ];\n         }\n\n         return $items;\n     }\n\n     public function parseResults(LoopResult $loopResult)\n     {\n         // \"getResultDataCollection\" return an iterator that contain the items given by \"buildArray\"\n         foreach ($loopResult->getResultDataCollection() as $item) {\n             // Create a new result\n             $loopResultRow = new LoopResultRow();\n\n             // Assign variable that will be accessible in smarty by $CURRENT_NUMBER for example\n             $loopResultRow->set(\"CURRENT_NUMBER\", $item['number']);\n             $loopResultRow->set(\"NEXT_NUMBER\", $item['numberNext']);\n\n             // Add the result to loop result list\n             $loopResult->addRow($loopResultRow);\n         }\n\n         return $loopResult;\n     }\n }\n")),(0,o.kt)("h2",{id:"propel-loop"},"Propel loop"),(0,o.kt)("p",null,"If data in your loop comes directly from a model, use a Propel loop.",(0,o.kt)("br",{parentName:"p"}),"\n","3 functions must be implemented :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getArgDefinitions")," to describe what ",(0,o.kt)("a",{parentName:"li",href:"#argument-types"},"arguments")," are available for your loop"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"buildModelCriteria")," who build a Propel query to execute"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parseResults")," to assign data to smarty variables for each loop iteration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace Thelia\\Core\\Template\\Loop;\n\nuse Propel\\Runtime\\ActiveQuery\\Criteria;\nuse Thelia\\Core\\Template\\Element\\BaseLoop;\nuse Thelia\\Core\\Template\\Element\\LoopResult;\nuse Thelia\\Core\\Template\\Element\\LoopResultRow;\nuse Thelia\\Core\\Template\\Element\\PropelSearchLoopInterface;\nuse Thelia\\Core\\Template\\Loop\\Argument\\Argument;\nuse Thelia\\Core\\Template\\Loop\\Argument\\ArgumentCollection;\nuse Thelia\\Model\\Admin as AdminModel;\nuse Thelia\\Model\\AdminQuery;\n\nclass Admin extends BaseLoop implements PropelSearchLoopInterface\n{\n    protected function getArgDefinitions()\n    {\n         // Always return an ArgumentCollection\n        return new ArgumentCollection(\n            Argument::createIntListTypeArgument('id'),\n            Argument::createIntListTypeArgument('profile')\n        );\n    }\n\n    public function buildModelCriteria()\n    {\n        $search = AdminQuery::create();\n\n         // This magic method will get the loop argument \"id\"\n        $id = $this->getId();\n        if (null !== $id) {\n            $search->filterById($id, Criteria::IN);\n        }\n\n        $profile = $this->getProfile();\n        if (null !== $profile) {\n            $search->filterByProfileId($profile, Criteria::IN);\n        }\n\n        $search->orderByFirstname(Criteria::ASC);\n\n        // Don't execute the query, only return it\n        return $search;\n    }\n\n    public function parseResults(LoopResult $loopResult)\n    {\n        /** @var AdminModel $admin */\n        foreach ($loopResult->getResultDataCollection() as $admin) {\n             // Create a new result\n            $loopResultRow = new LoopResultRow($admin);\n            \n             // Assign variable that will be accessible in smarty by $PROFILE for example\n            $loopResultRow->set('ID', $admin->getId())\n                ->set('PROFILE', $admin->getProfileId())\n                ->set('FIRSTNAME', $admin->getFirstname())\n                ->set('LASTNAME', $admin->getLastname())\n                ->set('LOGIN', $admin->getLogin())\n                ->set('LOCALE', $admin->getLocale())\n                ->set('EMAIL', $admin->getEmail())\n            ;\n            $this->addOutputFields($loopResultRow, $admin);\n\n             // Add the result to loop result list\n            $loopResult->addRow($loopResultRow);\n        }\n\n        return $loopResult;\n    }\n}\n")),(0,o.kt)("h2",{id:"argument-types"},"Argument types"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Argument")," class you have multiple static function that will help you to specify which argument is expected"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"function"),(0,o.kt)("th",{parentName:"tr",align:"left"},"argument accepted"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createAnyTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Anything")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createIntTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Only an integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createFloatTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Only a float")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createBooleanTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Only a boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createBooleanOrBothTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},'A boolean or "*" for both')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createIntListTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A list of integers separated by a comma")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createAnyListTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A list of anythings separated by a comma")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createAlphaNumStringTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},"An alpha numeric string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"createAlphaNumStringListTypeArgument()"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A list of alpha numeric strings separated by a comma")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"Baseloop class declares 3 public properties you might overload in your new loop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public $countable = true;\npublic $timestampable = false;\n")),(0,o.kt)("p",null,"With these properties set to true, the loop will automatically render - or not - the following outputs :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"if($countable === true)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LOOP_COUNT")," The current iteration number (start from 1) "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LOOP_TOTAL")," Total of elements in current loop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"if($timestampable === true) //available if your table is timestampable\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CREATE_DATE"),"  Date of creation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UPDATE_DATE"),"  Date of last update")))}m.isMDXComponent=!0}}]);