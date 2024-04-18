const accountId = 144553
let accountEmail = "haamza@gmail.com"
var accountPassword = "12345"
accountCity = "islamabad"
let accountState;
// accountId = 2 // not allowed

accountEmail = "raja@g.com"
accountPassword = "231456"
accountCity = "karachi"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])