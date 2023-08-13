```php

$frutas = array("d" => "limao", "a" => "laranja", "b" => "banana", "c" => "melancia");

  

function test_alter($item,$key,$args)

{

echo "<pre>";

var_dump(...$args);

echo "</pre>";

}

  

echo "Antes ...:\n";

array_walk($frutas, 'test_alter',[1,2,3,4]);


```

```text

int(1)
int(2)
int(3)
int(4)

int(1)
int(2)
int(3)
int(4)

int(1)
int(2)
int(3)
int(4)

int(1)
int(2)
int(3)
int(4)
```