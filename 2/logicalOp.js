//Logical Operators 
// js has four logical operators: !, &&, ||, ??

// OR[||]
// a chain of OR returns the 1st truthy value or the last one if on truthy value is found.
// it can also take non boolean values and can also return non boolean values
// it scan all operands from left to right
// and converts them into boolean
// when it finds the first truthy value, it will return its ORIGNAL value
// if no truthy value is found then the last value is returned

let n = 6;
if( n > 0 || n < 5){
    console.log("OR")
}

console.log(false||false);  // false
console.log(null||1);  // 1 because 1 is the first truthy value
console.log(false||console.log("it will get executed because no truthy value was found"));  // also prints undefined becuse the inner console.log() does not return anything
console.log(true||console.log("sort circuit"));  // true
console.log( null || 0 || 1) //1,bcoz 1st truty value is 1.

// AND[&&]
//AND returns the first falsy value or the last value of none were found.

console.log( null && 5 )  //null, bcoz 1st falsy value

if( n == 6 && n > 0 && n < 8){
    console.log("AND")
}

console.log(true&&false);  // false
console.log("truthy value"&&0&&true );  // 0 because it is the first falsy value

//NOT[!]
//returns the invers value
//it evaluates the expresion and converts it into boolean and return the inverse of it

console.log(!true)  //false
console.log(!!true)  //true

// && has higher precedence then || and ! has higher precedence then &&
console.log(false||true&&!true);  // false