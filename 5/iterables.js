//Objects that can used in "for..of" are -> iterable.
//The Result of obj[Symbol.iterator]() is -> an iterator!!
//An iterator must have the method "next()" returns Object

//Array is iterable
let arr = [8, 7, 6, 5, 4];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());  //{ value: 8, done: false }
console.log(iterator.next());  //{ value: 7, done: false }
console.log(iterator.next());  //{ value: 6, done: false }
console.log(iterator.next());  //{ value: 5, done: false }
console.log(iterator.next());  //{ value: 4, done: false }
console.log(iterator.next());  //{ value: undefined, done: true }

//String is iterable
let str = "Hello";

let iterator2 = str[Symbol.iterator]();
console.log(iterator2.next());  //{ value: 'H', done: false }
console.log(iterator2.next());  //{ value: 'e', done: false }

//Array-likes are objects that have indexes and length, so they look like array
//They are not iterable

/*let person = {
    0: "AAAA",
    1: "BBBB",
    length: 2
}
 for(let key of person){
    console.log(key);   //TypeError: person is not iterable
 }
 */

 //Array.from - universal method
 //takes an iterable of array-like value and makes a "real" Array from it.
 //Then we can call methods on it.
 //Array.from(obj[, mapFn, thisArg]) 
 // mapFn -function that wiil be applied to each ele. , thisArg - allow us to set this for it

let array = "123456";

let arrFrom = Array.from(array, num => num * num);
console.log(arrFrom);   //[ 1, 4, 9, 16, 25, 36 ]

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr1 = Array.from(arrayLike);
console.log(arr1.pop());  //World