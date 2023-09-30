//'Var' Has no block scope!!
//var ignores code blocks

var a = "Hello";

function exam1(){
    console.log(a);     
}

exam1();    ////Hello

if(true){
    var test = true;
}
console.log(test);    //true

//If a code block is inside a function, then var becomes a function-level variable:

function exam2(){
    if(true){
        var b = "Hi";
    }
    console.log(b);
}

exam2();    //Hi
//console.log(b);   //ReferenceError: b is not defined


//Var tolerates redeclarations

var person = "AAA";
var person = "BBB";
console.log(person);   //BBB

//Var can be declared below their use

function exam3(){
    greet = "Hello!!";
    console.log(greet);
    var greet;
}

exam3();         //Hello!!

/**var greet = "Hello" has 2 action
 * 1) Variable declartion - var
 * 2) Variable assisgnment - =.
 */