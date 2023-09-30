//getters:used for get the value!!

let person = {
    name: "Sakshi",
    age: 20,

    getname: function(){                  //method
        return this.name.toUpperCase();
    } 
};

console.log(person.name);          //Sakshi
console.log(person.getname());     //SAKSHI

let person2 = {
    name: "Pavan",
    age: 17,

    get getname(){
        return this.name.toUpperCase();
    } 
};

//call as property
console.log(person2.getname);       //PAVAN

person2.name = "Mayansh";
console.log(person2.name);     //MAYANSH

//setters: used for set(change) the value!!
//syntax- set propName(value)
let person3 = {
    name: "Neville",
    age: 21,

    set setname(n){
        this.name = n.toUpperCase();
    }
};

person3.setname = "prachi"

console.log(person3);      //{ name: 'PRACHI', age: 21, setname: [Setter]}

//Accessor Descriptors

//create an accessor fullName with defineProperty!!

let user = {
    name: "Smith",
    surname: "John"
};

Object.defineProperty(user, 'fullname',{
    get(){
        return `${this.name} ${this.surname}`;
    },

    set(value){
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user.fullname);    //Smith John

//Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

