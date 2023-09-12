//embed any expression into string, by wrapping it in ${..}
function sum(a, b){
    return a + b;
}
console.log(`5 + 8 = ${sum(5, 8)}.`);

//multiple lines
let mul = "Name: \n * Sakshi\n * Mayansh\n * Nevil";
console.log(mul);

//length
console.log(`My\n`.length);  //3

//access character
let str = "Sakshi";

console.log(str[2]);  //k
console.log(str.at(-1)); //i , last character

//Changing Case
 console.log(str.toLowerCase());   //sakshi
 console.log(str.toUpperCase());   //SAKSHI


 //Searching for a SUbstring from string
 let sen = "Hello, How Are You!?";
 console.log( sen.indexOf('How')); //7

//Getting a substring
//slice
console.log(str.slice(1, 4));  //aks

console.log(str.substring(2, 4));  //ks
console.log(str. substring(4, 2));  //ks , this is not same in slice
