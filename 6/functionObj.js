 //funtion :- called action object   
 //The "name" Property!!
 
 //a function's name is accessible as the "name" property

 let say = function(){
    console.log("Hello");
 }

 console.log(say.name);  //say -> function's name

//The "length" property -> returns the number of function parameter!!

function f1(a, b, c){}
console.log(f1.length);   //3

function f2(a, b, c, ...more){}
console.log(f2.length);       //3

//Named Function Expression -> is a term for Function Expresssions that have a name!!
/*func() -> * Adding the name "func" aftre function did not make it a Function Declaration,
            * because it is still created as a part of an assisgnment expression.
            * 2 special things about the name func =>
            * (1) It allows the funtion to reference itself internally.
            * (2) It is not visible outside of the funtion. */
        
let sayHi = function func(who){
    if(who){
    console.log(`Hello, ${who}`);
    } else{
        console.log("Welcome!!")
    }
}

sayHi("Sakshi");        //Hello, Sakshi
sayHi();                //Welcome!!

//also assign the variable to funtion call!!

let hi = sayHi;
hi();              //welcome!!

//new Function()

let mod = new Function('a', 'b', 'return a % b');
console.log( mod(3, 2));     //1
