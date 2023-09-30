//Recursion: when function call itself
//If a function call itself then there must be an end point
//otherwise it will get called for infinite time.

let counter = 1;

function demo(num){
    if(counter>num){
        return;
    }
    console.log("Hello!! " +counter);
    counter++;
    demo(num);  //recursion function!!
}

demo(10);
/* Hello!! 1
   Hello!! 2
   .........
   Hello!! 10
   */

//Recursion Traversals
//Tree Structure
const tree = {
    title: 'A',
    children: [{
        title: 'B',     //child of A
        children: [{
            title: 'C'  //child of B 
        }]
    },
    {
        title: 'D'    //child of A
    }
]
}

function start(node){
    console.log("Node: ", node.title);
    if(node.children){
        node.children.forEach(function(child){
            start(child);
        })
    }
}

start(tree);  //Node: A, ......Node: D
