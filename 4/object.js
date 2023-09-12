//used to store keyed collection of various data & more complex entities!!
//key(a string):"value"(anything);

let me = {
    name : "Sakshi",
    age : 20,
    "Clg Name" : "GECM",   //multil word property name must be quoted
};

console.log(me.name);      //Sakshi
console.log(me.age);      //20
console.log(me["Clg Name"]) //GECM

/* delete me.age;            //delete the property
   console.log(me.age);      //undefined ,boz age  is deleted
*/

//Computed Properties

let fav = "Pizza";
let bag = {
    [fav + 'Order'] : 2 // bag.PizzaOrder = 2
}
console.log(bag);      // {PizzaOrder: 2}

// "in" Operator

let test = {
    value : undefined,
};

console.log(test.value);     //undefined, so there is no property??
console.log("value" in test);  //true, test has property!!

//for...in loop

for(let key in me){
    console.log(key);      //name,age,Clg Name
    console.log(me[key]);  //Sakshi,20,GECM
}

/* //copy Object
 let myDetails = me;  //copy reference

 myDetails["Clg Name"] = "Engineering Collage";   //change by myDetails reference
 console.log(me["Clg Name"]);     //Engineering Collage
 */

//Colning
let clone = {};

for(let key in me){
    clone[key] = me[key];
}

clone.name = "abcd"
console.log(clone.name);   //abcd
console.log(me.name);   //Sakshi , Not Change in Original Object

//object.assign(destination,......Sources)
let study = {
    canStudy : true,
}

let like = {
    fruit : "Mango",
}

Object.assign(me,study,like);  
console.log(me.canStudy);   //true
console.log(me.fruit);      //Mango

//structuredClone() -clones the object with all  nested properties.

let measure ={
    sizes: {
        height: 170,
        weight: 40,
    }
}

let clone1 = structuredClone(measure)
 
measure.sizes.weight = 45;
console.log(measure.sizes.weight);  //45 , changed
console.log(clone1.sizes.weight);   //40 , Not Related to change