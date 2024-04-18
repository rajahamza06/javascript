let score = "33abs"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* ----------------------------------*/
// number "33" or any number easily convewrt to number like =>33
// if number having some alphabet like "33abc" conert to the => NAN
// if the value is bolean like  true gives (1) & false gives (0)
// if the value is then 1 convert to (true) & 0 convert to (1)
/* ----------------------------------*/


let isLoggedIn = "name"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);



let someNumber = 25
let stringNumber = String(someNumber)
console.log(typeof stringNumber);