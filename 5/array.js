//An Array can store elements of any type.

let city = ["Surat", "Ahemdabad", "Rajkot", "Vadodra"];

//get element 
console.log( city[0]);   //Surat
console.log( city[2]);   //Rajkot
console.log( city.at(-1));  //Vadodra  ,for last elem.

//replace element
city[3] = "Navsari";
console.log(city);   //[ 'Surat', 'Ahemdabad', 'Rajkot', 'Navsari' ]

//add element
city[4] = "Gandinagar";
console.log(city);   //[ 'Surat', 'Ahemdabad', 'Rajkot', 'Navsari', 'Gandhinager' ]

//array length
console.log(city.length);  //5

//array is both stack(LIFO) & queue(FIFO)
//pop
console.log( "pop " + city.pop());  //Pop Gandhinagar , remove Ghandhinagar
console.log(city);  //[ 'Surat', 'Ahemdabad', 'Rajkot', 'Navsari' ]

//Push
 city.push("Kutch");
 console.log(city); //[ 'Surat', 'Ahemdabad', 'Rajkot', 'Navsari', 'Kutch' ]

//shift
console.log( "shift " + city.shift());  //shift Surat , remove Surat
console.log(city);  //[ 'Ahemdabad', 'Rajkot', 'Navsari', 'Kutch' ]

//unshift
city.unshift("Surat");   //add Surat
console.log(city);  //[ 'Surat', 'Ahemdabad', 'Rajkot', 'Navsari', 'Kutch' ]

//array in an object

let person = [ { name: "Alice"} , {age: "25"} ]
let emp = person;
console.log(emp[0].name); //Alice

//loops
for (let i = 0; i < city.length; i++ ){
    console.log(city[i]);     // Surat Ahemdabad Rajkot Navsari Kutch
}

//for of 
console.log("for..of");
for( let a of city) {
    console.log(a);      // Surat Ahemdabad Rajkot Navsari Kutch
}

//for..in
console.log("for..in");
for(let key in person){
    console.log( person[key]); // { name: 'Alice' } { age: '25' }
}

//length
city.length = 2;
console.log(city); // [ 'Surat', 'Ahemdabad' ]

//Multidimensional Array
let matrix = [
    [2, 4],
    [6, 8]
];
console.log( matrix[0][1]);  //4

//toString()
let num = [1, 2, 3];
console.log(String(num) === '1,2,3');  //true

console.log('4' + 8); //48
