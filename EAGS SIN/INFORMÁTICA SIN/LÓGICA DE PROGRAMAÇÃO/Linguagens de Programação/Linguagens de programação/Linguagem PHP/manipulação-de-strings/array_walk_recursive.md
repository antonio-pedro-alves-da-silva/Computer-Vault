```php
<?php

  

$arr = array(

"a" => 'auto',

"b" => 'brush',

"c" => array(

'cool',

"d" => array(

'dark'

)

),

"f" => 'famous'

);

  

function print_r_v($item){

echo "<br>";

echo "$item" . "<br>";

}

  

echo "<pre>";

var_dump($arr);

echo "</pre>";

  

echo '------------------------------------------ using print_R';

  

array_walk_recursive($arr,'print_r_v');

  

?>

```