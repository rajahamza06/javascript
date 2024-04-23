const arrayone = [0,1,2,3,4,5]

const arraytwo = new Array(1,2,3,4)
console.log(arraytwo[1]);

//-------------------------ARRAY METHOD-----------------

// arraytwo.push(6)
// arraytwo.push(7)

// arraytwo.unshift(0)


// console.log(arraytwo.includes(9));
// console.log(arraytwo.indexOf(2));

const newarr = arraytwo.join()


console.log(arraytwo);
console.log(newarr);


// --------SLICE
console.log("A", arraytwo);
const myn1 = arraytwo.slice(1, 3)
console.log(myn1);
console.log("B", arraytwo);

const myn2 = arraytwo.splice(1, 3)
console.log("c", arraytwo);
console.log(myn2);


