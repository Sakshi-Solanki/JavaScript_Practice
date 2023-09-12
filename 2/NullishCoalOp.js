//Nullish Coalescing Operator[??]
//used when you have to check only undefined and null;
//?? returns the 1st defined value.
/*a??b => if a is defined, then a;
       => if a is undefined, then b.*/
       let a;
       let b = a ?? "default value";
       console.log(b);  // default value because a is undifined
       
       a = null;
       b = a ?? "default value";
       console.log(b);  // default value because a is null
       
       a = 10;
       b = a ?? "default value";
       console.log(b);  // 10 because a is not null and not undefined
       
       a = undefined;
       b = null;
       console.log(a ?? b);  // null because it is the last value 
       
       
       let name;
       console.log(name ?? "Anonymous");   //Anonymous, bcoz name Undefined
       
       let name1 = "Abcd";
       console.log(name1 ?? "Anonymous");     //Abcd, 1st defined value
       
       // we can chain it so it will scan from left to right and will return first not null and not undefined value... if all value are null or undefined then it will return the last value
       let x;
       let y = null;
       let z = "some value";
       
       console.log(x ?? y ?? z ?? null);  // it will give z beacuse it is the first value which is not null and not undefined
       
       // OR doesn't dustinguish between false, 0, empty string and null/undefined
       let value = false;
       console.log(value || "Hello");     //Hello
       console.log(value ?? "Hello");     //false
       
       // it was introduce to replace || for cheking if a username is defined or not
       // the problem with || was that is will treat 0, "" as falsy value and will not return them
       // but in many case any value which is not null not undefined will be a defined input, so ?? was introduced
       
       // difference between || and ??
       x = undefined;
       y = null;
       z = 0;
       let i = "";
       let j = "some truthy value"
       console.log(x || y || z || i || j);  // some truthy value because all other values are falsy
       console.log(x ?? y ?? z ?? i ?? j);  // 0 because it first not null not undefined value
       
       // ?? has same precedence as ||
       // but we cant use ?? with || or && without parentheses due to safety reasons
       //console.log(x && y ?? z);
       console.log((x && y) ?? z);  // not give error because parentheses are used
       