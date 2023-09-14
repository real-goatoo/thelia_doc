---
title: Resources
sidebar_position: 1
description: Create Api routes for your models
---

In propel, Model are generated automatically as you change your schema, so they can't be used as Api resource directly (like Entity for Doctrine) that's why we have to create a new class for each Propel model we want to be in API.
In the example below we are defining the API crud for a custom model named "Store" where we have data about our stores. 

In our example we have this schema who generate associate `Store` :
```xml
<table name="store" namespace="ApiOverride\Model">
    <column name="id" primaryKey="true" required="true" type="INTEGER" />
    <column name="name" type="VARCHAR"/>
    <column name="address" type="VARCHAR"/>
</table>
```

## Create your resource
Your resources must be in the `Api\Resource` directory in your module directory and implements the `Thelia\Api\Resource\PropelResourceInterface` for convenience you can use (and it's greatly encouraged) the trait `Thelia\Api\Resource\PropelResourceTrait`.
So if we want to add an api crud to our store table we have to create a resource here `local/modules/ApiOverride/Api/Resource/Store.php`

## Attach propel model
To tell which model our class represents for that we have the function `getPropelRelatedTableMap`.

```php title="local/modules/ApiOverride/Api/Resource/Store.php"
public static function getPropelRelatedTableMap(): string
{
    return new \ApiOverride\Model\Map\StoreTableMap();
}
``` 

## Define your properties
You must "redefine" every model properties (with their getters/setters) you want to be accessible from the api.

## Relation between resources
If a property contain relation to another model you must mark it with the attribute `#[Relation]`.

## Overriding propel setter / getter
In most case data will be mapped automatically, and you do not have to do anything else.
But in some case where propel getter and setter doesn't match exactly with field, or if you want to use different name than propel, you can use the `Column` attribute to redefine either directly the fieldname with `$propelFieldName` from here Thelia will try to guess the `getter / setter` just by adding the prefixes `get / set`. But if your `getter / setter` are different you can redefine them with `$propelSetter` and `$propelGetter`.

## Serialization groups
To choose where each property are accessible you must define serialization groups, it works exactly like in Api platform, so you can read the doc [here](https://api-platform.com/docs/core/serialization/#using-serialization-groups)
In Thelia we create 3 base groups for each resource, the read group that contain all light data that doesn't need to do join or heavy query to get it, and we put this group on all normalizationContext, the read_single group contain heavy data and we add this group (with the `read` group) to context that is used to show only one item this is why we can add heavy data. And finally the write group to say what we can write through the api.

## Define your routes
Routes work the same way as Api platform [operations](https://api-platform.com/docs/core/operations/) except you have to be careful with your route prefix if your route must be protected by admin login, you must prefix it by `/api/admin/` and if your route is public you have to only prefix it with `/api` for now there is no way to create a route that is only available for customer, but it's in the roadmap and will come soon.


## Filters
To add filter to the Collection route of a resource you must declare them with the attribute `#[ApiFilter]`

## ApiFilter Attribute
The attribute can be used on a property or on a class.

If the attribute is given over a property, the filter will be configured on the property. For example, let’s add a search filter on name and on the prop property of the colors relation:
Todo : add example

### Search filter
The search filter allow to search by text in you field, in this filter you can specify a search strategy for each property.
The search filter supports exact, partial, start, end, and word_start matching strategies:

- partial strategy uses LIKE %text% to search for fields that contain text.
- start strategy uses LIKE text% to search for fields that start with text.
- end strategy uses LIKE %text to search for fields that end with text.
- word_start strategy uses LIKE text% OR LIKE % text% to search for fields that contain words starting with text.

Prepend the letter i to the filter if you want it to be case insensitive. For example ipartial or iexact.

### Date filter
The date filter allows filtering a collection by date intervals.

| Description                          | Strategy to set                                                                                               |
|--------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Use the default behavior of the DBMS | `null`                                                                                                        |
| Exclude items                        | `Thelia\Api\Bridge\Propel\Filter\DateFilter::EXCLUDE_NULL` (`exclude_null`)                                   |
| Consider items as oldest             | `Thelia\Api\Bridge\Propel\Filter\DateFilter::INCLUDE_NULL_BEFORE` (`include_null_before`)                     |
| Consider items as youngest           | `Thelia\Api\Bridge\Propel\Filter\DateFilter::INCLUDE_NULL_AFTER` (`include_null_after`)                       |
| Always include items                 | `Thelia\Api\Bridge\Propel\Filter\DateFilter::INCLUDE_NULL_BEFORE_AND_AFTER` (`include_null_before_and_after`) |

### Boolean filter
The boolean filter allows you to search on boolean fields and values.

### Range Filter
The range filter allows you to filter by a value lower than, greater than, lower than or equal, greater than or equal and between two values.

### Order filter (sorting)
The order filter allows sorting a collection against the given properties.


When the property used for ordering can contain `null` values, you may want to specify how `null` values are treated in
the comparison:

| Description                          | Strategy to set                                                                          |
|--------------------------------------|------------------------------------------------------------------------------------------|
| Use the default behavior of the DBMS | `null`                                                                                   |
| Consider items as smallest           | `Thelia\Api\Bridge\Propel\Filter\OrderFilter::NULLS_SMALLEST` (`nulls_smallest`)         |
| Consider items as largest            | `Thelia\Api\Bridge\PropelFilter\OrderFilter::NULLS_LARGEST` (`nulls_largest`)            |
| Order items always first             | `Thelia\Api\Bridge\Propel\Filter\OrderFilter::NULLS_ALWAYS_FIRST` (`nulls_always_first`) |
| Order items always last              | `Thelia\Api\Bridge\Propel\Filter\OrderFilter::NULLS_ALWAYS_LAST` (`nulls_always_last`)   |


### Custom filter 
Custom filters can be written by implementing the `Thelia\Api\Bridge\Propel\Filter\FilterInterface` interface.

Filters have access to the context created from the HTTP request and to the Query instance used to retrieve data from the database. They are only applied to collections.
Thelia includes a convenient abstract class implementing this interface and providing utility methods: `Thelia\Api\Bridge\Propel\Filter\AbstractFilter`.

In the following example, we create a class to filter a collection by boolean value.

```php
final class BooleanFiler extends AbstractFilter
{
    protected function filterProperty(string $property, $value, ModelCriteria $query, string $resourceClass, Operation $operation = null, array $context = []): void
    {
        // Otherwise filter is applied to order and page as well
        if (
            !$this->isPropertyEnabled($property, $resourceClass)
        ) {
            return;
        }
        
        // Get the property field path in current query
        $fieldPath = $this->getPropertyQueryPath($query, $property, $context);

        // Apply your condition
        $query->where($fieldPath.' = ?', filter_var($value, \FILTER_VALIDATE_BOOLEAN));
    }
    
    // This function is only used to hook in documentation generators (supported by Swagger and Hydra)
    public function getDescription(string $resourceClass): array
    {
        $filterProperties = $this->getProperties();
    
        if (null === $filterProperties) {
            return [];
        }
        $description = [];
        foreach ($filterProperties as $property => $strategy) {
            $description["boolean_$property"] = [
                'property' => $property,
                'type' => 'bool',
                'required' => false,
                'description' => 'Filter a boolean. This will appear in the OpenApi documentation!',
                'openapi' => [
                    'example' => 'Custom example that will be in the documentation and be the default value of the sandbox',
                    'allowReserved' => false,// if true, query parameters will be not percent-encoded
                    'allowEmptyValue' => true,
                    'explode' => false, // to be true, the type must be Type::BUILTIN_TYPE_ARRAY, ?product=blue,green will be ?product=blue&product=green
                ],
            ];
        }
        return $description;
    }
}
```