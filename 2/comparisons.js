// comparison operators are ==, ===, <, >, <=, >=, !=, !==
// comparison operators alsways return a boolean value
console.log(5>6);  // false
console.log(1==1)  // true

//String Comparison
// strings are compared lexographically
//strings are compared letter by letter
console.log('zoo' > 'bee'); //true
console.log('zoo' > 'ZOO'); //true
console.log('a'>'Aa');  // true because acording to unicode a is greater then A
console.log('abca'=='abcb');  // false because it differs at last character
console.log('abc'<'abc ');  // true because first 3 chars are same and the length of second string is more

//operand of different type is converted to number by == 
console.log( 0 == false); //true
console.log(1 == true);  // true because true is converted to number
console.log(null > -5);  // true because null is converted to number

// there is an exception for undifined and null when comparing with == operator
// null and undefined are only eqal to themself and each other, it will give false for any other datatype
console.log(null==undefined);  // true
console.log(undefined==undefined);  // true
console.log(null==0);  // false due to above exception

//strict equality operator ==== checks the equality without type conversion
// it will not convert operands into number if they are of diffrent data types
// it will simply return false if data type are diffrent
console.log(""===false);  // false
console.log(0!==false);  // true
console.log( 0 === false);  //false, bcoz types are diff.

//Compressions(<,>,<=,>=) convert null to 0 , undefined to NaN.
//// so (x > y) || (x ==y)  is not same as x >=y in case of null and undefined
console.log(null >= 0) // true
console.log(null == 0) //false,  bcoz equlity check doesn't convert null to 0.
console.log(null>0||null==0);  // false

// comparing NaN with anything will always give false
console.log(NaN > 0);  // false
console.log(NaN == 0);  // false
console.log(NaN < 0);  // false
console.log(NaN == NaN);  // false (even comparing with it self will give false!)