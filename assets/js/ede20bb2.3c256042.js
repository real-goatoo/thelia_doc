"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[3724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={title:"Resources",sidebar_position:1,description:"Create Api routes for your models"},l=void 0,o={unversionedId:"api/resources",id:"api/resources",title:"Resources",description:"Create Api routes for your models",source:"@site/docs/api/resources.md",sourceDirName:"api",slug:"/api/resources",permalink:"/thelia_doc/docs/api/resources",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/api/resources.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Resources",sidebar_position:1,description:"Create Api routes for your models"},sidebar:"docs",previous:{title:"API",permalink:"/thelia_doc/docs/api"},next:{title:"Addons",permalink:"/thelia_doc/docs/api/addons"}},p={},s=[{value:"Create your resource",id:"create-your-resource",level:2},{value:"Attach propel model",id:"attach-propel-model",level:2},{value:"Define your properties",id:"define-your-properties",level:2},{value:"Relation between resources",id:"relation-between-resources",level:2},{value:"Overriding propel setter / getter",id:"overriding-propel-setter--getter",level:2},{value:"Serialization groups",id:"serialization-groups",level:2},{value:"Define your routes",id:"define-your-routes",level:2},{value:"Filters",id:"filters",level:2},{value:"ApiFilter Attribute",id:"apifilter-attribute",level:2},{value:"Search filter",id:"search-filter",level:3},{value:"Date filter",id:"date-filter",level:3},{value:"Boolean filter",id:"boolean-filter",level:3},{value:"Range Filter",id:"range-filter",level:3},{value:"Order filter (sorting)",id:"order-filter-sorting",level:3},{value:"Custom filter",id:"custom-filter",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In propel, Model are generated automatically as you change your schema, so they can't be used as Api resource directly (like Entity for Doctrine) that's why we have to create a new class for each Propel model we want to be in API.\nIn the example below we are defining the API crud for a custom model named \"Store\" where we have data about our stores. "),(0,n.kt)("p",null,"In our example we have this schema who generate associate ",(0,n.kt)("inlineCode",{parentName:"p"},"Store")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<table name="store" namespace="ApiOverride\\Model">\n    <column name="id" primaryKey="true" required="true" type="INTEGER" />\n    <column name="name" type="VARCHAR"/>\n    <column name="address" type="VARCHAR"/>\n</table>\n')),(0,n.kt)("h2",{id:"create-your-resource"},"Create your resource"),(0,n.kt)("p",null,"Your resources must be in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Api\\Resource")," directory in your module directory and implements the ",(0,n.kt)("inlineCode",{parentName:"p"},"Thelia\\Api\\Resource\\PropelResourceInterface")," for convenience you can use (and it's greatly encouraged) the trait ",(0,n.kt)("inlineCode",{parentName:"p"},"Thelia\\Api\\Resource\\PropelResourceTrait"),".\nSo if we want to add an api crud to our store table we have to create a resource here ",(0,n.kt)("inlineCode",{parentName:"p"},"local/modules/ApiOverride/Api/Resource/Store.php")),(0,n.kt)("h2",{id:"attach-propel-model"},"Attach propel model"),(0,n.kt)("p",null,"To tell which model our class represents for that we have the function ",(0,n.kt)("inlineCode",{parentName:"p"},"getPropelRelatedTableMap"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="local/modules/ApiOverride/Api/Resource/Store.php"',title:'"local/modules/ApiOverride/Api/Resource/Store.php"'},"public static function getPropelRelatedTableMap(): string\n{\n    return new \\ApiOverride\\Model\\Map\\StoreTableMap();\n}\n")),(0,n.kt)("h2",{id:"define-your-properties"},"Define your properties"),(0,n.kt)("p",null,'You must "redefine" every model properties (with their getters/setters) you want to be accessible from the api.'),(0,n.kt)("h2",{id:"relation-between-resources"},"Relation between resources"),(0,n.kt)("p",null,"If a property contain relation to another model you must mark it with the attribute ",(0,n.kt)("inlineCode",{parentName:"p"},"#[Relation]"),"."),(0,n.kt)("h2",{id:"overriding-propel-setter--getter"},"Overriding propel setter / getter"),(0,n.kt)("p",null,"In most case data will be mapped automatically, and you do not have to do anything else.\nBut in some case where propel getter and setter doesn't match exactly with field, or if you want to use different name than propel, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Column")," attribute to redefine either directly the fieldname with ",(0,n.kt)("inlineCode",{parentName:"p"},"$propelFieldName")," from here Thelia will try to guess the ",(0,n.kt)("inlineCode",{parentName:"p"},"getter / setter")," just by adding the prefixes ",(0,n.kt)("inlineCode",{parentName:"p"},"get / set"),". But if your ",(0,n.kt)("inlineCode",{parentName:"p"},"getter / setter")," are different you can redefine them with ",(0,n.kt)("inlineCode",{parentName:"p"},"$propelSetter")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$propelGetter"),"."),(0,n.kt)("h2",{id:"serialization-groups"},"Serialization groups"),(0,n.kt)("p",null,"To choose where each property are accessible you must define serialization groups, it works exactly like in Api platform, so you can read the doc ",(0,n.kt)("a",{parentName:"p",href:"https://api-platform.com/docs/core/serialization/#using-serialization-groups"},"here"),"\nIn Thelia we create 3 base groups for each resource, the read group that contain all light data that doesn't need to do join or heavy query to get it, and we put this group on all normalizationContext, the read_single group contain heavy data and we add this group (with the ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," group) to context that is used to show only one item this is why we can add heavy data. And finally the write group to say what we can write through the api."),(0,n.kt)("h2",{id:"define-your-routes"},"Define your routes"),(0,n.kt)("p",null,"Routes work the same way as Api platform ",(0,n.kt)("a",{parentName:"p",href:"https://api-platform.com/docs/core/operations/"},"operations")," except you have to be careful with your route prefix if your route must be protected by admin login, you must prefix it by ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/admin/")," and if your route is public you have to only prefix it with ",(0,n.kt)("inlineCode",{parentName:"p"},"/api")," for now there is no way to create a route that is only available for customer, but it's in the roadmap and will come soon."),(0,n.kt)("h2",{id:"filters"},"Filters"),(0,n.kt)("p",null,"To add filter to the Collection route of a resource you must declare them with the attribute ",(0,n.kt)("inlineCode",{parentName:"p"},"#[ApiFilter]")),(0,n.kt)("h2",{id:"apifilter-attribute"},"ApiFilter Attribute"),(0,n.kt)("p",null,"The attribute can be used on a property or on a class."),(0,n.kt)("p",null,"If the attribute is given over a property, the filter will be configured on the property. For example, let\u2019s add a search filter on name and on the prop property of the colors relation:\nTodo : add example"),(0,n.kt)("h3",{id:"search-filter"},"Search filter"),(0,n.kt)("p",null,"The search filter allow to search by text in you field, in this filter you can specify a search strategy for each property.\nThe search filter supports exact, partial, start, end, and word_start matching strategies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"partial strategy uses LIKE %text% to search for fields that contain text."),(0,n.kt)("li",{parentName:"ul"},"start strategy uses LIKE text% to search for fields that start with text."),(0,n.kt)("li",{parentName:"ul"},"end strategy uses LIKE %text to search for fields that end with text."),(0,n.kt)("li",{parentName:"ul"},"word_start strategy uses LIKE text% OR LIKE % text% to search for fields that contain words starting with text.")),(0,n.kt)("p",null,"Prepend the letter i to the filter if you want it to be case insensitive. For example ipartial or iexact."),(0,n.kt)("h3",{id:"date-filter"},"Date filter"),(0,n.kt)("p",null,"The date filter allows filtering a collection by date intervals."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Strategy to set"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Use the default behavior of the DBMS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"null"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exclude items"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Thelia\\Api\\Bridge\\Propel\\Filter\\DateFilter::EXCLUDE_NULL")," (",(0,n.kt)("inlineCode",{parentName:"td"},"exclude_null"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Consider items as oldest"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Thelia\\Api\\Bridge\\Propel\\Filter\\DateFilter::INCLUDE_NULL_BEFORE")," (",(0,n.kt)("inlineCode",{parentName:"td"},"include_null_before"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Consider items as youngest"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Thelia\\Api\\Bridge\\Propel\\Filter\\DateFilter::INCLUDE_NULL_AFTER")," (",(0,n.kt)("inlineCode",{parentName:"td"},"include_null_after"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Always include items"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Thelia\\Api\\Bridge\\Propel\\Filter\\DateFilter::INCLUDE_NULL_BEFORE_AND_AFTER")," (",(0,n.kt)("inlineCode",{parentName:"td"},"include_null_before_and_after"),")")))),(0,n.kt)("h3",{id:"boolean-filter"},"Boolean filter"),(0,n.kt)("p",null,"The boolean filter allows you to search on boolean fields and values."),(0,n.kt)("h3",{id:"range-filter"},"Range Filter"),(0,n.kt)("p",null,"The range filter allows you to filter by a value lower than, greater than, lower than or equal, greater than or equal and between two values."),(0,n.kt)("h3",{id:"order-filter-sorting"},"Order filter (sorting)"),(0,n.kt)("p",null,"The order filter allows sorting a collection against the given properties."),(0,n.kt)("p",null,"When the property used for ordering can contain ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," values, you may want to specify how ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," values are treated in\nthe comparison:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Strategy to set"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Use the default behavior of the DBMS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"null"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Consider items as smallest"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Thelia\\Api\\Bridge\\Propel\\Filter\\OrderFilter::NULLS_SMALLEST")," (",(0,n.kt)("inlineCode",{parentName:"td"},"nulls_smallest"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Consider items as largest"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Thelia\\Api\\Bridge\\PropelFilter\\OrderFilter::NULLS_LARGEST")," (",(0,n.kt)("inlineCode",{parentName:"td"},"nulls_largest"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Order items always first"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Thelia\\Api\\Bridge\\Propel\\Filter\\OrderFilter::NULLS_ALWAYS_FIRST")," (",(0,n.kt)("inlineCode",{parentName:"td"},"nulls_always_first"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Order items always last"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Thelia\\Api\\Bridge\\Propel\\Filter\\OrderFilter::NULLS_ALWAYS_LAST")," (",(0,n.kt)("inlineCode",{parentName:"td"},"nulls_always_last"),")")))),(0,n.kt)("h3",{id:"custom-filter"},"Custom filter"),(0,n.kt)("p",null,"Custom filters can be written by implementing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Thelia\\Api\\Bridge\\Propel\\Filter\\FilterInterface")," interface."),(0,n.kt)("p",null,"Filters have access to the context created from the HTTP request and to the Query instance used to retrieve data from the database. They are only applied to collections.\nThelia includes a convenient abstract class implementing this interface and providing utility methods: ",(0,n.kt)("inlineCode",{parentName:"p"},"Thelia\\Api\\Bridge\\Propel\\Filter\\AbstractFilter"),"."),(0,n.kt)("p",null,"In the following example, we create a class to filter a collection by boolean value."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"final class BooleanFiler extends AbstractFilter\n{\n    protected function filterProperty(string $property, $value, ModelCriteria $query, string $resourceClass, Operation $operation = null, array $context = []): void\n    {\n        // Otherwise filter is applied to order and page as well\n        if (\n            !$this->isPropertyEnabled($property, $resourceClass)\n        ) {\n            return;\n        }\n        \n        // Get the property field path in current query\n        $fieldPath = $this->getPropertyQueryPath($query, $property, $context);\n\n        // Apply your condition\n        $query->where($fieldPath.' = ?', filter_var($value, \\FILTER_VALIDATE_BOOLEAN));\n    }\n    \n    // This function is only used to hook in documentation generators (supported by Swagger and Hydra)\n    public function getDescription(string $resourceClass): array\n    {\n        $filterProperties = $this->getProperties();\n    \n        if (null === $filterProperties) {\n            return [];\n        }\n        $description = [];\n        foreach ($filterProperties as $property => $strategy) {\n            $description[\"boolean_$property\"] = [\n                'property' => $property,\n                'type' => 'bool',\n                'required' => false,\n                'description' => 'Filter a boolean. This will appear in the OpenApi documentation!',\n                'openapi' => [\n                    'example' => 'Custom example that will be in the documentation and be the default value of the sandbox',\n                    'allowReserved' => false,// if true, query parameters will be not percent-encoded\n                    'allowEmptyValue' => true,\n                    'explode' => false, // to be true, the type must be Type::BUILTIN_TYPE_ARRAY, ?product=blue,green will be ?product=blue&product=green\n                ],\n            ];\n        }\n        return $description;\n    }\n}\n")))}u.isMDXComponent=!0}}]);