//While loop
//while the condition is truthy, the code from loop body is exexuted
console.log("while");
let i = 0, j = 0;
while(i < 4 , j < 4){
    console.log(i + j);
    i++;
    j++;
}  // 0 2 4 6

// "do...while" loop
/*The loop first execute the body,then check the condition
  and while it's truthy, execute it again and again!!*/
  
  console.log("do..while");
  let a = 0, b = 1;
  do{
    console.log((b*2) - a);
    a++;
    b++;
  }while(a <= 4, b <= 4);     //2 3 4 5


//"for" loop
/*for(begin; condition;  step){
    //...loop body
} */

console.log("for");
for(let c = 0; c < 5; c++){
    console.log(c);
} // 0 1 2 3 4

for (var k=0; k<5; k++){
    // do nothing
}
console.log(k);  // not give error because var is function scoped

// or the variable can be declared before using in for loop so alowing it to be used outside of the loop
// Example
letj;
for (j=0; j<5; j++){
    // do nothing
}
console.log(j);  // will not give error

// any part of for can be skiped (begin, condition and step)
// Example
i=0;
for (;;){
    if (i>=5){
        break;
    }
    console.log(i);
    i++;
}

//Breaking the loop
console.log("break");
for(let d = 10; d > 0; d--){
    console.log(d);
    if(d==5) break;
}   // 10 9 8 7 6 5

//Continue to the Next Iteration
console.log("contiune");
for(let e = 0; e < 10; e++){
    if(e % 2 == 0) continue;
    console.log(e)
}  //1 3 5 7 9

//label for break/continue
console.log("label");
firstLabel: for(let s = 0; s < 5; s++){
    for(let r = 1; r <2; r++){
        console.log(s + r);
        if(s == 3) break firstLabel; 
    }
}
console.log("done!")  //1 2 3 4

// when there are multiple nested loop then no break out of a specific loop labels are used
// break cannot be outside of that labeled loop
// Example
outer: for (leti=0; i<5; i++){
    inner: for (letj=0; j<5; j++){
        console.log(i,j);
        if (i == 3 && j == 3){
            break outer;
        }
    }
}
console.log("outside of the outer loop");

// continue can also be used with labels
outer:
for (leti=0; i<5; i++){
    inner: for (letj=0; j<5; j++){
        if (i%2&j%2){
            continue outer;  // skips to the next iteration of outer loop so when both i and j becomes odd it wil move to the next interation of the outer loop
        }
        console.log(i,j);
    }
}

// break can be used outside of loops for breaking out of labeled code block
// Example
someCodeBlock: {
    console.log("something before break");
    console.log("something before break");
    break someCodeBlock;
    console.log("something after break");  // it will not get executed
}