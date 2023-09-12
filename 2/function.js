//Function Declaration with Local variable and outer variable

let fruit = "Apple";          //Outer Variable

function showFruits() {
    fruit = "Orange";        //change the value of outer Variable
  
    let fav = "My Favorite Fruit: " + fruit;                //cann't use this variable outside the function
    console.log(fav);
}
console.log(fruit);            //Apple , before function call

showFruits();                  //function call
console.log(fruit);            //Orange , the value is changed by function

//return
function max(a, b) {
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log(max(3, 17));  //17
console.log(max(8, 1));   //8

//Function Expression
let sum = function(a, b){
    return a + b;
}
console.log(sum(8, 21));  //29