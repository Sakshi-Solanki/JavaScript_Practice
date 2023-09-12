//another way to decalre function
let sum = (a, b) => a + b;
console.log( sum(8, 21));   //29

//only one argument
let mul = n => n*2;
console.log( mul(20));      //40

//no argument
let value = () => console.log("Hello World!!")
value();        //Hello World!!

//multiple Arrow Function

let num = 20;

let checkNum = (num > 10) ?
 () => console.log(`It's More Than 10!!`) :
 () => console.log(`It's Less Than 10!!`);

checkNum();