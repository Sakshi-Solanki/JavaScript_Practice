//Operator
let a = 8 , b = 9;

//Maths
console.log("addition " + ( a + b ));
console.log("Subtraction " + ( a - b ));
console.log("Multiplication "+ ( a * b ));
console.log("Divisior " + ( a / b ));
console.log("Remainder " + ( a % b));
console.log("Exponentiation " + ( a ** b));

//String Concatenation With Binary +

let c = "Hello " + "World!!"
console.log(c);


//if the 1st operand is a string,the compiler treats the other operand as string too.
console.log(4 + 4 + '2');  //82
console.log('2' + 4 + 4);  //244

//Unary+
//used for convert the string to number

let earth = "3";
let mass = "4";
console.log(+earth + +mass);  //7
console.log(earth + mass);   //34

//modify-in-place

let  n = 5;
n += 5; //10
n *= 2; //20
console.log(n);

//increment/decrement
let m = 6; p = 6; q = 6; r = 6;
console.log(m--);  //6, bcoz m-- returns "old" value
console.log(p++);  //6, bcoz n++ returns "old" value
console.log(++q);  //7
console.log(--r);  //5
