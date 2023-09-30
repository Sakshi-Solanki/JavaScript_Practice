//Variable
//A variable is a property of a special internal object, associated with the currently executing block/function/script.
//Working with variables is actually working with the properties of that object.

//Closure: A closure is a function that remembers its outer variables and can access them.

let message = "Good Morning";

function a() {
    {
        let message = "Good Afternoon";
        console.log("Hello1:  " + message);    //Hello1:  Good Afternoon
    }
    let b = function c() {
        console.log("Hello2: " + message);    //Hello2: Good Morning
    }
    return b;
}

let d = a();
d()

//Example2:

function init() {
    var name = "Init";    //name is local variable created by init
    function displayName() {
        //displayName() is the inner function, a closure
        console.log(name);
    }
    name = "Display"
    return displayName
}

let e = init();
e();       //Display