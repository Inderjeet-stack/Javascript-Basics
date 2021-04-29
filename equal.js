
//== converts the variable values to the same type before performing comparison. 
//This is called type coercion.

//=== does not do any type conversion (coercion) and returns true only if both values and types are 
//identical for the two variables being compared.


var one = 1;
var one_again = 1;
var one_string = "1";  // note: this is string

console.log(one ==  one_again);  // true
console.log(one === one_again);  // true
console.log(one ==  one_string); // true. 
console.log(one === one_string); // false. 


//Line 15: console.log(one == one_string) returns true because both variables, one and one_string contain the
// same value even though they have different types: one is of type Number whereas one_string is String.
  //But since the == operator does type coercion, the result is true.

//Line 16: console.log(one === one_string) returns false because the types of variables are different.