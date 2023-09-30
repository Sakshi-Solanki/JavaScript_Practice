//Rest Parameters
//get an array from the list of parameters

function sumAll(...args){    //args is the array
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
}

console.log( sumAll(1, 8, 9));       //18
console.log( sumAll(1, 7));          //8
console.log( sumAll(1, 3, 5, 10));   //19

//function exam(1name, 2name, ...titles)

//The 'arguments' variable
//arguments is both array-like and iterable, it’s not an array -does not support array methods

function show() {
    console.log( arguments.length);
    console.log( arguments[0]);
    console.log( arguments[1]);
}

show('Hello', 'World!!');  //2 Hello World!!
show('How r u??');   //1 How r u?? undefined

//Spread Syntax
//get the list of parameters from array

let arr1 = [3, 12, 21];
let arr2 = [4, 5, 10];
let merge = [10, ...arr1, ...arr2]

console.log( Math.max(...arr1)); //21
console.log( Math.max(...arr1, 13, ...arr2, 23)); //23
console.log(merge);  //[10, 3, 12, 21, 4, 5, 10]

let str = "Hello";
console.log(...str);   //H e l l o
console.log( Array.from(str));   //[ 'H', 'e', 'l', 'l', 'o' ]

//Copy an array/object

let arr = [1, 2, 3];

let arrCopy = [...arr]; 

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

//same for object!!