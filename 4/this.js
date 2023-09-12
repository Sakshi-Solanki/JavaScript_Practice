 //used to access the object

 let me = {
    name : "Sakshi",
    age : 20,

    demo(){
    console.log(this.name);    //"this" is the current object
    }
};

me.demo(); //Sakshi

//"this" is not bound, can be used in any function

let value = { number: 8};
let count = { number: 21};

function cal(){
    console.log(this.number);
}

//use same function
value.f = cal;
count.f = cal;

//call them
value.f(); //8  (this == value)
count.f(); //21 (this == count)