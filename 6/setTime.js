//scheduling a call!!
//setTimeout -> allow to tun a function once after the interval of time.
/**Syntax:
 * let timerId = setTimeout(func|code, [delay], [aeg1], [arg2], ...)
*/
function setTimeOut(){

setTimeout(() => console.log("I'm 4 min late"), 4000);
console.log("I'm first");
}

setTimeOut();

//setInterval() -> allow to run a function once after the interval of time.
//method has the same syntax as setTimeout!!
// setTimeOut(() => {
//     clearInterval(interval);
//     console.log("stop");
// }, 6000)

let interval = setInterval(() => console.log("Repate in 2sec!!"), 2000);

let stop = setTimeOut(() => {
    clearInterval(interval);
    console.log("stop");
}, 6000)

//Canceling with clearTimeout
/**Syntax:
 * let timerId = setTimeout(...);
 * clearTimeout(timerId);
 */
