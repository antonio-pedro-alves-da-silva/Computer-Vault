```php
$a = "antonio pedro alves da silva";

$a1 = explode(' ',$a,2);

$a2 = explode(' ',$a,-1);

echo "<pre>";

var_dump($a1);

var_dump($a2);

echo implode(';',$a1);

echo "</pre>";
  

?>```