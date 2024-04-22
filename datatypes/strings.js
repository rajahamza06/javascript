const name = "hamza"
const repocount = 10

// console.log(name + repocount + "value");
console.log(`Hello my name  is ${name} and my repo is ${repocount}`);

const gameName = new String(`hamza-gul`)
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf(`m`));


const newstring = gameName.substring(0, 2)
console.log(newstring);


const anotherString = gameName.slice(-8 , 3)
console.log(anotherString);

const newStringone = " raja"
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://hamza.com/hamza10%gul"
console.log(url.replace('10%' , '_'));
console.log(url.includes('hamza'));
console.log(url.includes('raja'));
console.log(gameName.split('-'));