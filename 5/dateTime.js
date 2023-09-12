//Date: built-in Object
//It Stores the date,time and provides methods for date/time management.

//Today's Date: 08-09-2023!!
let toDay = new Date();

console.log(toDay);                          //2023-09-08T04:55:28.669Z
console.log(toDay.toString());               //Fri Sep 08 2023 10:25:28 GMT+0530 (India Standard Time)
console.log(toDay.toLocaleString());         //8/9/2023, 10:25:28 am
console.log(toDay.toLocaleDateString());     //8/9/2023

//An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
let Jan01_1970 = new Date(0);     //0 means 01.01.1970 UTC+0
console.log(Jan01_1970);         //1970-01-01T00:00:00.000Z

let Jan02_1970  = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);             //1970-01-02T00:00:00.000Z

//newDate(datestring)
let date = new Date("2003-01-08");
console.log(date);          //2003-01-08T00:00:00.000Z   ->time is not set

//newDate(year, month, date, hours, minutes, seconds, ms)
let date1 = new Date(2003, 0, 8, 8, 15, 30, 888);
console.log(date1);   //2003-01-08T02:45:30.888Z

//Access Date Components
//getFullYear() -> Get year(4 digit)
//getMonth() -> Month from 0 to 11
//getDate() -> Day of Month 1 to 31
//getHours(), getMinutes(), getSeconds(), getMilliseconds()
//getDay() -> weekDays 0(sunday) to 6(Saturday)
//getTime() -> Returns the TimeStamp for the date - a number os ms passed from the Jan 01 1970 UTC+0.
//getTImezoneOffset() -> Returns the difference between UTC and the local time zone, in mins

console.log(toDay.getFullYear());      //2023
console.log(toDay.getMonth() + 1);     //9
console.log(toDay.getDate());          //8
console.log(toDay.getDay());           //5 ->Friday
console.log(toDay.getTimezoneOffset()); //-330
//If local time zone is shifted relative to UTC, then 
console.log(toDay.getUTCHours());

//Setting Date Components
//setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds)

toDay.setHours(12);
console.log(toDay.toLocaleString());    //8/9/2023, 12:12:11 pm

//AutoCorrection
let auto = new Date(2020, 11, 32);
console.log(auto.toDateString());  //Fri Jan 01 2021

//Date to number,date diff
//When a Date object is converted to number, it becomes the timestamp same as date.getTime():
console.log(+toDay);   //1694155557111

//Date.now() -> that returns the current timestamp.
/* It is semantically equivalent to new Date().getTime(), 
but it doesn’t create an intermediate Date object. 
So it’s faster and doesn’t put pressure on garbage collection. */

//Date.parse(str): can read a date from a string.