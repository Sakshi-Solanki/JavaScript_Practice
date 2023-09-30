//bind()

let example = {
    name: "aaa",
    content: "example",
    feature: function(){
        console.log(`Name is ${this.name}. content is ${this.content}.`)
    }
}

example.feature();     //Name is aaa. content is example

let exam1 = example.feature;
exam1();            //Name is undefined. content is undefined.

//The bind() method takes an object as an first argument and creates a new function.

let exam2 = example.feature.bind(example);
exam2();             //Name is aaa. content is example.

//Method:2

let example1 = {
    name: "bbb",
    content: "example1",
}

let example2 = {
    name: "ccc",
    content: "example2",
}

function feature2(){
    console.log(`Name is ${this.name}. content is ${this.content}.`);
}
 
let exam3 = feature2.bind(example1);
exam3();             //Name is bbb. content is example1.

let exam4 = feature2.bind(example2);
exam4();             //Name is ccc. content is example2.

//we can pass the argument also!!

function feature3(rating){
    console.log(`I'll give ${rating} to this ${this.content}`);
}

let rate = feature3.bind(example1);
rate(5);          //I'll give 5 to this example1