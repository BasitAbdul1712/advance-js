//****undefined show korar reasons
//1. value declare na korle
//2. return na korle
//3. return likhen define na korle 
//4. proprety object "premik" er moddhe na thakle 




let pakhi; 
console.log(pakhi);

function add(num1, num2) {
    console.log(num1 + num2);
    //ekhane return na korar jonnoi undefiend dekhacche
    //return kore na define korle
}
const result = add(13, 82);
console.log(result);

function add2(num3, num4) {
    console.log(num3,  num4);
}
const result2 = add(15);
console.log(result);

const premik = {name: "smat boy", phone: 565465}; // premik object
//property hocche name, phone
console.log(premik.gf); // ekhane gf property moddhe nai tai undefined

let fun = undefined;
console.log(fun);

let ages = [2, 5 ,9];
console.log(ages[1100]);
