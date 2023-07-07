// Single line comments
console.log('Single line comments');

/*
Multi
line 
Comments

*/
console.log("Multi line comments");


// -------------------------------------------------------------------------

let a = 2; // block level scope
console.log("Outside block value of a :", a);
{
    console.log("--------------------------------------------------------------");
    let b = 6;
    var c = 10;
    console.log("Inside block value of a:", a);
    console.log("Inside block value of b : ", b);
    console.log("Inside block var variable c : ", c);
}

console.log("--------------------------------------------------------------");
console.log("outside block value of a:", a);
console.log("outside block var variable c : ", c);
// console.log("outside  block value of b : ", b);


const constnum = 2;

console.log("Const num: " + constnum);

constnum = 6;
console.log("Const num after change", constnum);


