//   Primitive

/*
Has 7 Types
1. String
2. Number
3. Boolan
4. Null
5. undefined
6. Symbol
7. BigInt
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 345674855n



/*==================================*/


//   Non Primitive (Reference)

/*
Has 3 Types
1. Array
2. Objects
3. Functions
*/

const heros = ["raja", "gull", "gull"]
let myObj =
{
    name:"hamza",
    age:"23"
}

const myFunction = function(){
    console.log(";hello how are you");
}

console.log(typeof myFunction);