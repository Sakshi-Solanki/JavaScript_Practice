// if statement
// if it is true then the code inside if block is executed
if (5>3){
    console.log("This code got executed because the condition was true");
}

// else clause
// if the condition is evaluated to be false than code in else block is executed
if (false){
    console.log("this code block will not be executed");
}
else{
    console.log("This block of code got executed because the condition in if was false");
}

//elseif
let a = 10 ; b = 30;
if(a == b){
    console.log("a equls to b");
} 
else if(a > b){
    console.log("a is greater than b");
}
else{
    console.log("a is less than b")    //output
}

//condition operator-?
//? - also called ternary
 let age = 18;

 let msg = (age < 3)?'Hi,baby':
 (age < 18)?'Hello':
 (age < 100)?'Greeting':
 'What an Unusual Age!!';
 console.log(msg);