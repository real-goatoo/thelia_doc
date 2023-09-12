---
title: Addons
sidebar_position: 2
---

To allow module to add field in Thelia own model and to it's route (write or read) easily and quickly without to have to redefine all the models we have create the resources Addon.

## Create your addon
Your addon can be anywhere but must implements the `Thelia\Api\Resource\ResourceAddonInterface` and for convenience you can use (and it's greatly encouraged) the trait `Thelia\Api\Resource\ResourceAddonTrait` it provide useful method.
In our example we are adding the latitude and longitude to customer's addresses. These come from a custom model named AddressData who contain additional data for Thelia addresses this table is directly linked to address by the id column like explained [here](/docs/propel#add-a-column-to-native-thelia-table).

:::info

An addon can also be a [resource](/docs/api/Resources) to expose his own route (resource) and to add field to Thelia model (addon) at the same time.

:::

## Attach parent resource
To tell which resource your addon want to extend we have the function `getResourceToExtend`.

```php title="local/modules/ApiOverride/Api/Resource/AddressData.php"
public static function getResourceToExtend(): string
{
    return \Thelia\Api\Resource\Address::class;
}