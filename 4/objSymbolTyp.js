//Symbol Type
//A unique identifier
 

let us = Symbol("we");       //"us" is description of symbol
//alert(us);  //TypeError : can't convert into string automatically (only in alert)
console.log(us.toString());     //Symbol(we)
console.log(us.description);   //we

//for..in loop ingrone Symbol
let you = {
    name : "Yourname",
    us : "Group",
    [us] : 12 ,
};

for(let key in you){
    console.log(key)          //name us ,skip [we]
}

console.log("for..in skip " + you[us]);    //for..in skip 12

//object.assign copies symbol proprties

let clone = Object.assign({}, you);
console.log(clone[us]);  //12