// "use scrict" can also be used inside a function
// it will have scope only inside that function

function func(){
    // calling this function will give error
    "use strict";
    x=5;
}

y = 5;  // this will not give error because the srict mode is not enabled for whole file
//func();


// only comments can be at the top of "use strict"
// otherwise it will not be enabled

console.log("Here the strict mode will not be enabled!");

"use strict";

x = 5; // it will not give error!


// if strict mode is not enabled than we can declare a var variable even after its assignment

a = 5;
var a; // declared later
console.log(a); // it will print 5 the value of a

b = 10;
let b; // this will give error because we cant declare a let after its assinment



"use strict";

function func1() {
    let x = 10;

    if (true){
        // outer x will have scope here also because it this block is inside the outer block in which x is defined
        console.log(x);  // 10
    }
    console.log(x);  //10
}

func1();

function func2(){
    let x=10;
     
    if (true){
        let x = 5; // it will not give error because is is new scope and outer x will not have scope inside this block now
        console.log(x);  // 5 because in THIS block new x is diffined, so the outer x will not have scope inside this block now
    }
    console.log(x); // 10 because inner x was a diffrent variable and it will not effect outer x
}

func2();
