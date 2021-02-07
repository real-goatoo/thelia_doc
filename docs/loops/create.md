---
title: Create your own
---

## Declare your loops

```xml
<loops>
    <loop name="mymodule_product" class="MyModule\Loop\Product" />
    <loop name="mymodule_myloop" class="MyModule\Loop\MyLoop" />
</loops>
```

You have to create as many loop node as loop you have into the loops node. In this example there is 2 loops. Name and
class properties are mandatory. The name is the loop name used into the template ( like in Thelia v1 : ```<THELIA_name
type="MyModule_Product">...</THELIA_name>```), class property is the class executed by the template engine. This
class must extends the Thelia\Core\Template\Element\BaseLoop abstract class, if not an exception is thrown.
**If you name your loop like a default loop (eg : product), your loop will replace the default loop.**

## Implement your loops

Your loop can be anywhere (Thanks to namespace) in your module but it's better to create a Loop directory and put all your loops in this directory.

You have to extends the Thelia\Core\Template\Element\BaseLoop abstract class and implement either Thelia\Core\Template\Element\PropelSearchLoopInterface or Thelia\Core\Template\Element\ArraySearchLoopInterface. Therefore you will have to create *getArgDefinitions*, *parseResults* and either *buildModelCriteria* or *buildArray* methods.

NB : You can also extend BaseI18nLoop which itself extends BaseLoop. This will provide tools to manage i18n in your loop.

### What's the difference betwen *PropelSearchLoopInterface* and *ArraySearchLoopInterface*

It's a matter of data type. If the data your loop returns come from the database you must implement *PropelSearchLoopInterface* and create *buildModelCriteria* method which return a *Propel\Runtime\ActiveQuery\ModelCriteria*. Conversely if your loop displays data from an array you must implement *ArraySearchLoopInterface* and create *buildArray* method which return an array.

The *parseResults* method is used to render the template. It must return a Thelia\Core\Template\Element\LoopResult instance.

The getArgDefinitions method defines all args used in your loop. Args can be mandatory, optional, with default value, etc. This method must return an Thelia\Core\Template\Loop\Argument\ArgumentCollection. ArgumentCollection contains Thelia\Core\Template\Loop\Argument which contains a Thelia\Type\TypeCollection. Types in the collection must implement Thelia\Type\TypeInterface.

If you don't define your arguments here, you can't use them in your new loop. All arguments are accessible in the ```parseResults``` method.

Baseloop class declares 3 public properties you might overload in your new loop.

```php
public $countable = true;
public $timestampable = false;
public $versionable = false;
```

With these properties set to true, the loop will automatically render - or not - the following outputs :

```php
if($countable === true)
```

* LOOP_COUNT
* LOOP_TOTAL

```php
if($timestampable === true) //available if your table is timestampable
```

* CREATE_DATE
* CREATE_UPDATE

### Example 1

Here an example for my module "MyModule" and my loops in the loop directory. This is the architecture :

 ```
 \local
   \modules
     \MyModule
       ...
       \Loop
         MyLoop.php
 ```

 MyLoop.php file :

 ```php
 namespace MyModule\Loop;

 use Thelia\Core\Template\Element\BaseLoop;
 use Thelia\Core\Template\Element\LoopResult;
 use Thelia\Core\Template\Element\LoopResultRow;
 use Thelia\Core\Template\Element\ArraySearchLoopInterface;
 use Thelia\Core\Template\Loop\Argument\ArgumentCollection;
 use Thelia\Core\Template\Loop\Argument\Argument;

 class MyLoop extends BaseLoop implements ArraySearchLoopInterface {

    public $countable = true;
    public $timestampable = false;
    public $versionable = false;

     public function getArgDefinitions()
     {
         return new ArgumentCollection(
             Argument::createIntListTypeArgument('start', 0),
             Argument::createIntListTypeArgument('stop', null, true)
         );
     }

     public function buildArray()
     {
         $items = array();

         $start = $this->getStart();
         $stop = $this->getStop();

         for($i=$start; $i<=$stop; $i++ {
            $items[] = $i;
         }

         return $items;

     }

     public function parseResults(LoopResult $loopResult)
     {
         foreach ($loopResult->getResultDataCollection() as $item) {

             $loopResultRow = new LoopResultRow();

             $loopResultRow->set("MY_OUTPUT", $item);

             $loopResult->addRow($loopResultRow);
         }

         return $loopResult;
     }
 }

 ```

 Of course you can use all classes you want in your own loop class, like model class. All Thelia's model classes are in the
 namespace Thelia\Model

 So if I want to add some search in my DB and return results from product table I can use something like this :

 ```php
/**
*
* return Thelia\Core\Template\Element\LoopResult
*/
public function buildModelCriteria()
{
    return ProductQuery::create();
}

public function parseResults(LoopResult $loopResult)
{
     foreach ($loopResult->getResultDataCollection() as $product) {

        $loopResultRow = new LoopResultRow($product);

        $loopResultRow->set("REF", $product->getRef());

        $loopResult->addRow($loopResultRow);
    }

    return $loopResult;
}
```
