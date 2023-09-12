//Optional Chaning-?
/*is a safe way to access nested object properties,
  even if the an inetrmediate property doesn't exist */

  let user = {
    name : "Sakshi",
    age: 20,
    address: {
        city: "bayad",
        state: "Gujarat",
        contry: "India",
    }
}

//without optional chaining
console.log(user.address.state)  //Gujarat
//console.log(user.address.cityname.district)  //show error, execution will stop


//with optional chaining
console.log(user?.address?.cityname?.district)  //undefined


//'?' also used to access array elem. using ?.[]

const person = [
    { name : "aaa" , age : 20},
    { name : "bbb" , age : 21},
]

//console.log(person[2].age);      //error
console.log(person[2]?.age);       //undefined