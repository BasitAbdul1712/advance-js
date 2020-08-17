const age =4; // age er vale 4 hole just age likhle true hisabe count korbe r 0 hole value nai hisabe dhore false count korbe

if (age) {
    console.log('true');
} 
else{
    console.log('false');
}

//const name = "solama"
//const name = "0" true means string truthy  but empty string false
//0 vale false but 1,2,3 vale hole true

//let name; value declare kore na thakle undefiend dekhabe.

let name = 12;
if (name || name == 0) {
    console.log('true');
} 
else{
    console.log('false');
}
/*** false */
// 0 hole 
// "" empty string hole
// undefined hole 
// null hole;
// NaN

// ** true
// '0'
// [] epty array
// {} empty object thakle o true
