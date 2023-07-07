console.log('hello world');

// 1. Arithmetic Operators in javascript

var a = 2;
var b = 10;

// 1. Addition +

console.log(a + b);

//2. - --> substration

console.log(a-b);

//3. * --> multiplication

console.log(a * b);

//4. / --> division

console.log("Division of a/b is " , a/b);

//5. ** --> exponential operator (a raised to b)

console.log("2 raised to 2 is ", 2**2);
console.log("2 raised to 4 is ", 2**4);

//6. % --> modulo operator (remainder)
let c = 5;
let d = 2;
console.log("5 divided 2 then remainder is ", c%d);

//7. ++ --> increment operator
let num = 2;
console.log("increment of a is ", num++); // post increment
console.log("increment of a is ", ++num); // pre increment
console.log("increment of a is ",num); 
console.log("increment of a is ",num = num + 1);
console.log("increment of a is ",num = num + 1);  

//8. -- --> decrement operator

let num1 = 2;
console.log("increment of num2 is ", num1--); // post increment print 2--> after that num = 1
console.log("increment of num2 is ", --num1); // pre increment --> 0 after than assign num = 0
console.log("increment of num2 is ",num1); 
console.log("increment of num2 is ",num1 = num1 - 1);
console.log("increment of num2 is ",num1 = num1 - 1);

// 2. Assignment Operators in javascript

let num3 = 3;
let num4 = 5;
console.log(num3+=2); // num3 = num3 + 2
num3 += num4;
// 1. += 
console.log(num3);

// 2. -= 
console.log(num4-=2); // num4 = num4 - 2
console.log(num4);

// 3. *= 
console.log(num4*=2); // num4 = num4 * 2
console.log(num4);



// 4. /= 
console.log(num4/=2); // num4 = num4 / 2
console.log(num4);

// 3. Comparison Operators

//1. == 
console.log(2 == 2);
console.log(2 == 5);

console.log("sonu" == "Sonu");

//2. > 

console.log (5 > 2);
console.log("2>2 ",2>2);

//3 <
console.log(5 < 2);

//4. >=

console.log("2>=2 ",2>=2);
console.log("3>=2 ",3>=2);

//4. <=

console.log("2>=2 ",2<=2);
console.log("3>=2 ",3<=2);

//5. !=

console.log("2!=2", 2!=4);


// 5. Logical Operators
let num6 = 3;
let num7 = 10;
//1. && --> if both conditions are true then only true otherwise false
console.log("num6 >= 2 && num7 > 9 ",num6 >= 2 && num7 > 9);
console.log("num6 >= 2 && num7 > 9 ",num6 >= 2 && num7 < 9);
//2. || --> if any one condition is true then true otherwise false or if both false then false
console.log("num6 >= 2 && num7 > 9 ",num6 >= 2 || num7 > 9);
console.log("num6 >= 2 && num7 > 9 ",num6 >= 2 || num7 < 9);
console.log("num6 >= 2 && num7 > 9 ",num6 <= 2 || num7 < 9);

// ! not operator 

console.log(!2==2);
console.log(!2!=2);



