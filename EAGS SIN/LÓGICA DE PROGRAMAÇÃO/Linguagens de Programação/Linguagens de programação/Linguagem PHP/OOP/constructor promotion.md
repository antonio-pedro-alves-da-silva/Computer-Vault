```php

// NOT USING CONSTRUCTOR PROMOTION
class Point {  
public int $x;  
public int $y;  
  
public function __construct(int $x, int $y = 0) {  
$this->x = $x;  
$this->y = $y;  
}  
}  
  
// Pass both parameters.  
$p1 = new Point(4, 5);  
// Pass only the required parameter. $y will take its default value of 0.  
$p2 = new Point(4);  
// With named parameters (as of PHP 8.0):  
$p3 = new Point(y: 5, x: 4);

//   USING CONTRUCTOR PROMOTION
// THE CODE BELOW AND THE CODE ABOVE THEY ARE EQUAL
// When a constructor argument includes a visibility modifier, PHP will interpret it as both an object property and a constructor argument, and assign the argument value to the property. The constructor body may then be empty or may contain other statements. Any additional statements will be executed after the argument values have been assigned to the corresponding properties.

class Point {  
public function __construct(public int $x, public int $y = 0) {  
}  
}

$my_class = new point(40,32);
echo $my_class->x;

```