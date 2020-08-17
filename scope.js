let bonus = 20; //global variable , function er baire acehe tai etake baire thekeo call kora jay

function sum(first, second) {
    let result = first + second + bonus;
    //console.log(bonus); // ekhane call korle output dekhabe but function er baire call korle error dekhabe.
    if (result > 9) {
        let mood = "happy"; // ekhane let ba const use korle ei if scope er baire theke call kora jabena
        mood = "franky";
        mood = "kranky"
        console.log(mood);
    }
    return result;
    console.log(mood);
}
const output = sum(3 , 7);
console.log('output', output);
//console.log(mood);
//console.log(bonus);
