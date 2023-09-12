//Map: is a collection of keyed data items,just like an Object.
//   but the main difference is that map allows keys of any types!!

//creates map
let map = new Map();

//map.set(key, value) -> Stores the value by the key.
map.set('me', 'Sakshi');     //a string key
map.set(1, 'one');           //a numeric key
map.set(true, 'Boolean');    //a Boolean key

console.log(map);    //Map(3) { 'me' => 'Sakshi', 1 => 'one', true => 'Boolean' }

//map.get(key)- returns the value by key if exists, otherwise undefined
console.log(map.get('me'));   //Sakshi
console.log(map.get(2));      //undefined

//map.has(key)- returns true if key exists, otherwise false
console.log(map.has('1'));   //false
console.log(map.has(1));    //true

//map.delete(key) - removes the pair by key
// map.delete(true);
// console.log(map);   //Map(2) { 'me' => 'Sakshi', 1 => 'one' }

console.log(map.size);  //3

/*
map.clear();        // removes everything from the map
console.log(map);   //Map(0) {}
*/

//Iteration
let food = new Map([['Vegetable','Patato'],
                    ['fruit','Mango'],
                    ['fastfood','Pizza']]);

//map.keys() - returns an iterable for keys
for(let type of food.keys()){
    console.log(type);          //Vegetable, fruit, fastfood
}                    

//map.values() - returns an iterable for values
for(let fav of food.values()){
    console.log(fav);            //patato, Mango, Pizza
}

//map.entries() - returns an iterable for [key, value] ->default in for..of
//for(let all of food)
for(let all of food.entries()){
    console.log(all);     //[ 'Vegetable', 'Patato' ], [ 'fruit', 'Mango' ], [ 'fastfood', 'Pizza' ]
}

//Object.entries: Map from Object
let obj = {
    name: "Sakshi",
    age: 20
}

let objMap = new Map(Object.entries(obj));
console.log(objMap.get('name'));  //Sakshi

//Object.fromEntries: Object from Map
//creates object from given [key, value]

let me = Object.fromEntries([
    ['name', 'Sakshi'],
    ['age', 20]
]);

console.log(me.name); //Sakshi

//WeakMap:
//keys must be an object(not primitve)
//doesn't support iteration & keys(), values(), entries()
//easily remove by garbage collector.

let wm = new WeakMap();

let ob1 = { };

wm.set(ob1, "Ok");  //ob1 key
console.log(wm.get(ob1));   //Ok

ob1 = null;  //overwrite the reference

//ob1 removed from memory -> doesn't prevent garbage collection of key objects