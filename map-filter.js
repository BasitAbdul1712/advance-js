const numbers = [4, 5, 8 , 9 , 2 ,7];
// const output = []; // output e rest dekhbo tail blan array declare korchi
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }


// function square (element) {
//     return element * element;
// }

// ** for loop er bodla map diye kora
// const result = numbers.map(function(element, index, array) {
//     return element *  element;
// }) 

const result = numbers.map(x => x * x);
console.log(result);


// ** filter **

const bigger = numbers.filter(x => x >5);
console.log(bigger);

// ***foreasch
// ***reuse 
const isThere = numbers.find(x => x >5);
console.log(isThere);

