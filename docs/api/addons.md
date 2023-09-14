---
title: Addons
sidebar_position: 2
description: Add data to Thelia model API
---

To allow module to add field in Thelia own model and to it's route (write or read) easily and quickly without to have to redefine all the models we have create the resources Addon.

## Create your addon
Your addon can be anywhere but must implements the `Thelia\Api\Resource\ResourceAddonInterface` for convenience you can use (and it's greatly encouraged) the trait `Thelia\Api\Resource\ResourceAddonTrait`.
To addon work well out of the box we advised to link your table directly to parent by id like explained [here](/docs/propel#add-a-column-to-native-thelia-table).
In our example we are adding the latitude and longitude to customer's addresses. These come from a custom model named AddressData who contain additional data for Thelia addresses.

:::info

An addon can also be a [resource](/docs/api/Resources) to expose his own route (resource) and to add field to Thelia model (addon) at the same time.

:::

## Attach parent resource
To tell which resource your addon want to add data we have the function `getResourceParent`.

```php title="local/modules/ApiOverride/Api/Resource/AddressData.php"
public static function getResourceParent(): string
{
    return \Thelia\Api\Resource\Address::class;
}
```

## Define your properties
Like for resource you must define every property (with their getters/setters) you want to be accessible from the api.

## Add fields to parent routes
To make your field accessible to parent route you need to add parent groups to properties.

To add latitude and longitude to address in read and write routes :

```php title="local/modules/ApiOverride/Api/Resource/AddressData.php"
    #[Groups([Address::GROUP_READ, Address::GROUP_WRITE])]
    public ?float $lat;

    #[Groups([Address::GROUP_READ, Address::GROUP_WRITE])]
    public ?float $lon;
```

## Specific case
In most case that will work directly, but sometimes you would need to implement some method :

### ```extendQuery```

```php
public static function extendQuery(ModelCriteria $query, Operation $operation = null, array $context = []): void;
```

This method allow you to modify query execute to retrieve parent data. So here you can add some join with your table and select your columns to retrieve them in results.

```php 
    public static function extendQuery(ModelCriteria $query, Operation $operation = null, array $context = []): void
    {
        $tableMap = static::getPropelRelatedTableMap();
        $query->useAddressDataQuery()->endUse();

        foreach ($tableMap->getColumns() as $column) {
            $query->withColumn(AddressDataTableMap::COL_LON, 'AddressData_lon');
            $query->withColumn(AddressDataTableMap::COL_LAT, 'AddressData_lat');
        }
    }
```

### ```buildFromModel```

```php
public function buildFromModel(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): self;
```

Here you have to build your resource from query results.

```php 
    public function buildFromModel(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): ResourceAddonInterface
    {       
        $this->lon = $activeRecord->getVirtualColumn('AddressData_lon");
        $this->lat = $activeRecord->getVirtualColumn('AddressData_lat");

        return $this;
    }
```

### ```buildFromArray```

```php
public function buildFromArray(array $data, PropelResourceInterface $abstractPropelResource): self;
```

Here you have to build your resource from array data that come from request.

```php 
    public function build(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): ResourceAddonInterface
    {       
        $this->lon = $data['lon'];
        $this->lat = $data['lat'];

        return $this;
    }
```

### ```doSave```

```php
public function doSave(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): void;
```

Called on write operation of the parent. This method is not needed if you don't put your field on write groups. But it's needed for the interface so you can just do a `return;`.

```php
    public function doSave(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): void
    {
        // You need first to create or retrieve the model
        $model = $query->filterById($activeRecord->getId())
            ->findOneOrCreate();
            
        // Then fill propel model from resource data
        $model->setLon($abstractPropelResource->getLon());
        $model->setLat($abstractPropelResource->getLat());

        // And persist the model
        $model->save();
    }
```

### ```doDelete```

```php
public function doDelete(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): void;
```

Called on delete operation of the parent. This method is not needed if you don't put your field on write groups. But it's needed for the interface so you can just do a `return;`.

```php
    public function doDelete(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): void
    {
        // You need first to create or retrieve the model
        $model = $query->filterById($activeRecord->getId())
            ->findOneOrCreate();
            

        // And then delete the model
        $model->delete();
    }
```

