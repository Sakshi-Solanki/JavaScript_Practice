//Set: a special type of collection- "Set of Values"(without keys),
//    where each value occur only once!!

//It's Methods:

let array = [1, 2, 3, 4, 5];

//Convert Array into Set
//new Set([ietarable])
let set = new Set(array);

console.log(array);   //[ 1, 2, 3, 4, 5 ]
console.log(set);     //Set(5) { 1, 2, 3, 4, 5 }

/*
set.add(6);   //add a value, returns the set itself!!
set.add('Sakshi');
set.add([7, 8, 9]);
set.add({ me : 'Hello'});

console.log(set);   //Set(9) { 1, 2, 3, 4, 5, 6, 'Sakshi', [ 7, 8, 9 ], { me: 'Hello' } }
*/

set.delete(5);
console.log(set);  //Set(4) { 1, 2, 3, 4 }

console.log(set.has(4));  //true
console.log(set.has(5));  //false

console.log(set.size);   //4

set.clear();        //removes everything from the set
console.log(set);   //Set(0) {}

let set1 = new Set([1, 1, 2, 3, 4, 5, 4, 6, 5]);
console.log(set1);   //Set(6) { 1, 2, 3, 4, 5, 6 }

//Iteration

for(let a of set1.keys()){
    console.log(a);     // 1 2 3 4 5 6 
}

for(let b of set1.values()){
    console.log(b);     // 1 2 3 4 5 6
}

for(let c of set1.entries()){
    console.log(c);   //[1, 1] [2, 2] [3, 3]..so on
}

for(let value of set1){
    console.log(value);  //1 2 3 4 5 6
}

set1.forEach((value) => {
    console.log(value);   //1 2 3 4 5 6
}) 

//WeakSet: 
//can add object only(not primitive)
//An object exists in the set while it is reachable from somewhere else
//not support size, keys() & no iterations

let ws = new WeakSet();

let obj = {
    name: "aaa",
}

let obj2 = {
    name: "ccc",
}

ws.add(obj);
ws.add(obj2);

console.log(ws.has(obj));     //true
ws.delete(obj2);
console.log(ws.has(obj2));    //false