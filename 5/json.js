//JSON - represent values & objects

//JSON.stringify -> to convert object into JSON (String)
//JSON.parse -> to convert JSON back into an Object

let person = {
    name: 'John',
    age: '20',
    courses: ['html', 'css', 'js']
};

let json = JSON.stringify(person);
console.log(typeof json);             //string
console.log(json);            //{"name":"John","age":"20","courses":["html","css","js"]}

//Strings use double quotes. No single quotes or backticks in JSON.

//JSON.stringify - can be applied to primitives as well.
//JSON supports - Objects, Arrays, Primitives(string, numbers, booleans values, null)

//Excluding And Transforming: Replacer
//Syntax:- JSON.stringfy(value[, replacer, space])

let ppl = {
    address: "Bayad",
    info: person,
}

person.occupiedBy = ppl;

console.log(JSON.stringify(ppl, ['address', 'info', 'name', 'age', 'courses']));
//"address":"Bayad","info":{"name":"John","age":"20","courses":["html","css","js"]}}

console.log(JSON.stringify(ppl,  function replacer(key, value){
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}))
/*: [object Object]
address: Bayad
info: [object Object]
name: John
age: 20
courses: html,css,js
0: html
1: css
2: js
occupiedBy: [object Object]
{"address":"Bayad","info":{"name":"John","age":"20","courses":["html","css","js"]}}
*/

//Formatting:Space
//show nested objects on multiple lines

let user = {
    name : 'Alice',
    age : '21',
    roles : {
        isAdmin : false,
        isEditor : true
    }
};

console.log(JSON.stringify(user, null, 3));
console.log(JSON.stringify(user, null, 5));

//"toJSON" - for to-JSON conversion.
let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  
  let meetup = {
    title: "Conference",
    room
  };
  
  console.log( JSON.stringify(room) );  //23
  console.log( JSON.stringify(meetup) );  //{"title":"Conference","room":23}

  //JSON.parse - to decode a JSON-String.
  //Syntax - JSON.parse(str, [reviver]);

let p = '{ "name": "John", "age": 21, "friends": [0,1,2,3,4]}';
let u = JSON.parse(p);
console.log(u.friends[2]); //2
