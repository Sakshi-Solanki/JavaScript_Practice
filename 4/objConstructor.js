 //constructor function
 /** Rules: 1.named with Capital letter First
  *         2.should be exexuted with only with "new" operator
  */

 function Coder(name, tech){
    this.name = name;
    this.tech = tech;
 }

 let coder1 = new Coder("abc", "JS");
 let coder2 = new Coder("xyz", "python");

coder2.name = "pqr";
console.log(coder2);    //Coder{name: "pqr", tech: "python"}
console.log(coder1);   //Coder{name: "abc", tech: "JS"}

//method in constructor

function Decoder(name){
    this.name = name;

    //Method-> same for all object which construted
    this.isDecode = function(){
        console.log("Yes, " + this.name + " able to decode the code!!");
    }
}

let decoder1 = new Decoder("ABC");
decoder1.isDecode();        //Yes, ABC able to decode the code!!

