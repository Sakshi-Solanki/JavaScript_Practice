 //More way to write a number

 let million = 1_000_000;    //JS ignore _ between digits
 console.log(million);      //1000000
 
 let billion = 1e9;     //  e specify the zeroes count
 console.log(billion);  // 1000000000
 console.log(2.5e6);    //2500000
 
 //e for very small number
 let mcs = 1e-6;  //five 0s to the left from 1
 console.log(mcs); //0.000001
 
 console.log(2.34e-3)   // 0.00234, (2.34/1000)
 
 //Hex,binary and octal num
 let a = console.log(0xda); //218 , 0x for hexa- then the number
 console.log(0xDA); //218 , case doesn't matter
 let b = console.log(0b11011010);  //218, 0b for binary
 console.log(0o332);  //218, 0o for octal
 
 console.log(a == b);  //true
 
 //toString(base)-string representation of num with the given base.
 let c = 218;
 console.log(c.toString(8)); //332
 console.log(c.toString(16));  //da
 
 //Rounding
 let d = 23.3
 console.log(Math.floor(d)); //23
 console.log(Math.ceil(d));  //24
 console.log(Math.round(d)); //23
 console.log(Math.trunc(d));  //23 , removes anything after the decimal point without rounding
 
 console.log(Math.round(2.367 * 100));  //237
 console.log((43.678).toFixed(1));  //43.7
 
 //Tests:isFinite & isNaN
 //NaN represent error
 
 console.log( isFinite("88")); //true
 console.log( isFinite(Infinity)); //false
 console.log( isFinite("abc")); //false ,bcoz special value: NaN
 
 console.log( isNaN("abc")); //true
 
 //Number.isNaN/.isFinite -"strict"  version, returns the argument blongs to "number" type
 console.log(Number.isNaN("abc"));    //false ,bcoz it's not a number type
 console.log(Number.isFinite("88"));  //false
 console.log(Number.isFinite(88));    //true
 
 //parseInt and parseFloat
 console.log( parseInt("12.34.2")); //12 ,returns integer value
 console.log( parseFloat("12.34.2"));  //12.34 ,returns floating value
 
 //Other math functions
 console.log( Math.random());   //any random value
 console.log( Math.max(8, 21, 45)); //45
 console.log( Math.min(8, 21, 45));  //8
 console.log( Math.pow(2, 4));   //16
 