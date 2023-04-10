console.log("Data Types in JavaScript");

// -->JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol --> Symbol() function
// 8. Object

// 1. String 
// --> single quotes
// --> double quotes
// --> back ticks

var name = "Sonu";
console.log("name:" , name);
var name1 = 'Sonu';
console.log("name1: ",name1);
var name2 = `Sonu`;
console.log('Name2: ', name2);
console.log(typeof name2);

// 2. Number 

var a = 378955748489473978;
console.log("a",typeof a);
console.log("a", a);

// 3. BigInt

var b = BigInt(37895574848947397868);
console.log(b);

// 4. Boolean
var bool = true;
var bool2 = false;
console.log( bool);
console.log( bool2);
console.log(2==2);
console.log(typeof bool);


// 5. Undefined

var c;
console.log(c);
console.log(typeof c);

// 6. Null

var d = null;

console.log(typeof d);
if (c){
    console.log("true");
}
else{
    console.log("False");
}

// 7. Symbol --> Symbol() function

let sym = Symbol("sonu");
var sym2 = Symbol("sonu");
console.log("Symbol",sym == sym2);

var str1 = "sonu";
var str2 = "sonu";
console.log(str1 ==str2);

// 8. Object --> key and value pair

var obj = {name : "sonu", rollNo : 23869};
console.log(obj);
console.log(typeof obj);

//9. Array-->can hold multiple data 

var arr = [1, "sonu", "yoy", 936.26];
console.log(arr);


//10. Date

var date = new Date("12/22/2023");
console.log(date);


//Auto Type Casting

var str2 = 16 + "sonu";
// --> var str2 = "16" + "sonu";
console.log(str2);

var str3 = 14 + 20 + "sonu";
// --> var str3 = 34 + "sonu";---> "34" + "sonu";
console.log(str3);

var st4 = "sonu" + 3 + 20;
// --> var st4 = "sonu" + "3" --> "sonu3" + "20" --> "sonu320";
console.log(st4);

//Exponential Notation

var a = 1e10 //--> 1*10^10
console.log(a);
var b = 2362e5;
console.log(b);