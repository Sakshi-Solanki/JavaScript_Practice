//Delete
let num = ['8', '21','1', '5', '3'];

// delete num[2];
// console.log( num[2]); //undefined

//Splice -insert the elements with/without removal
num.splice(0,2, "AAA");
console.log(num); //[ 'AAA', '1', '5', '3' ]

//concate
console.log( num.concat([6, 7, 8], 4));  //[ 'AAA', '1', '5', '3', '6', '7', '8', '4' ]

//slice
console.log( num.slice(0, 2)) //[ 'AAA', '1' ]
console.log(num); //[ 'AAA', '1', '5', '3' ]

//for..each-> shows each element of array
num.forEach((item, index) => {
    console.log(`${item} is at ${index}`);  //AAA is at 0....so on
});

//searching of array

//indexOf/lastIndexOf/includes
console.log(num.indexOf('5'));  //2
console.log(num.indexOf('aaa')); //-1 , bcoz item is not found!!
console.log(num.lastIndexOf('5')); //2,  it looks from right to left
console.log(num.lastIndexOf('3')); //3
console.log( num.includes('1'));   //true

//includes handlea NaN corretly
const n = [NaN];
console.log(n.includes(NaN));  //true
console.log(n.indexOf(NaN));   //-1

//find and findIndex/findLastIndex

let student = [
    {name: "Sakshi", marks: 99, id: 1},
    {name: "Mayansh", marks: 98, id: 2},
    {name: "Nevil", marks: 97, id: 3}
];

let m = student.find(function(m){
    return m = Math.max(m.marks)
})

console.log(m);  //{ name: 'Sakshi', marks: 99, id: 1 }

console.log(student.findIndex(n => n.name == 'Mayansh')); //1
console.log(student.findLastIndex(n => n.name == 'Nevil')); //2

//filter
//'find' method looks for a single 1st element that makes the function return true.
//but 'filter' returns an array of all matching elements

let stuMarks = student.filter(function(s){
    return s.marks < 99;
})

console.log(stuMarks);   

   /* { name: 'Mayansh', marks: 98, id: 2 },
    { name: 'Nevil', marks: 97, id: 3 } */

//Transform an Array
//map: it calls the functions for each element of array & returns the array of results.

let l = student.map(function(len){
    return len.name.length;
});
console.log(l);  //[ 6, 7, 5 ]

//sort
//items are stored as string by default.
let x = [1, 2, 11, 3, 222]
x.sort();
console.log(x);  //[ 1, 11, 2, 222, 3 ]

//A comparison function may return any number
x.sort(function(a, b){
    return a-b;
})
console.log(x) //[ 1, 2, 3, 11, 222 ]

//use 'localeCompare' for string
/*let a = student.map( function(s){
    return s.name.sort((a,b) => a.localeComapre(b));
})
console.log(a)
*/

//reverse
console.log(x.reverse());  //[ 222, 11, 3, 2, 1 ]

//split & join
let arr = 'Surat, Ahemdabad, Rajkot';
let splitA = arr.split('a');
console.log(splitA);  //[ 'Sur', 't, Ahemd', 'b', 'd, R', 'jkot' ]

let joinS = splitA.join('a');
console.log(joinS);  //Surat, Ahemdabad, Rajkot

//reduce
 
let plus = x.reduce((sum, current) => sum + current, 0);
console.log(plus);  //239

let student1 = [
    {name: "Nothing", marks: 99, id: 1},
    {name: "Everything", marks: 98, id: 2},
    {name: "Something", marks: 97, id: 3}
];

//use 'localeCompare' for string
let c = student1.sort((a,b) => a.name.localeCompare(b.name));

console.log(c); 