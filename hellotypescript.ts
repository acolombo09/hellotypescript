// Typescript single line comment

/* 
Typescript multiline comment
*/

var message : string = "Hello World";
console.log(message);

// Different ways of variable declaration
var a : number ;    // only type declaration
var b = 10;     // only initial value
var c : number = 10;    // both type and value
var d;      // without the type and the initial value

// how to assign value to a variable
var x : number = 100;

// 'var'

// #1 var can be declared without being initialised
var name1 : string;     // no error

// #2 var variables can be re-declared and updated
var name11 : string = "Hello";
console.log("var Initialised :", name11);
name11 = "Hello Typescript";
console.log("var updated", name11);
var name11 : string = "Welcome to Typescript";
console.log("var re-declared", name11);

// #3 var variables are function/global scoped
function example1() {
    if(true){
    var x = 100;
    console.log(x);
  }
  console.log(x); // i can print with no error
}

// 'let'

// #1  let can be declared without being initialised
let name2 : string;     // no error

// #2 let variables can be updated but cannot be re-declared
let name22 : string = "Hello";
console.log("let initialised :", name22);
name22 = "hello typescript";
console.log("let updated", name22);
// let name22   error

// #3 let variables are block scoped
function example2() {
    if(true){
    let x1 = 100;
    console.log(x1); // block scope no error
  }
  // console.log(x1); // error
}

// 'const'

// #1 const must be initialised during declaration
// const name3 : string;    error
const name3 : string = "Hello";     //no error

// #2 const cannot be updated or re-declared
const name33 : string = "hello";
console.log("const initialised :", name33);
// name33 = "hello typescript";     error
// console.log("const updated", name33);
// var name33 : string = "welcome to typescript";   error
// console.log("const re-declared", name33);

// #3 const variables are block scoped
function example3() {
  if(true){
    const x3 = 100;
    console.log(x3); // block scope no error
  }
  // console.log(x3); // error
}

// Advanced data types

// void

var nothing :  void = undefined;
// nothing = 10;    // if it's undefined and i update it, it returns an error
// nothing = "hello";   // same here

// null

var xxx = null;
console.log(xxx);
// xxx = "Hello";
// console.log(xxx);
console.log(typeof(xxx));

var y : null ;
// y = 10;  // error

var aa = undefined;
// aa = 10;
console.log(aa);

var a1 : undefined;
// a1 = 100; // error

// never (will be never runned)

// var a2 : never = null; // error

// any (assign any data type)

var xx : any;
xx = "hello";
console.log(xx);
console.log(typeof(xx));
xx = 10;
console.log(xx);
console.log(typeof(xx));
xx = true;
console.log(xx);

/*
------ Typescript Arrays ------
*/

// --- 1 DIMENSION ARRAY ---

var num1 : number[] = [10, 20, 30, 40, 50];
console.log(num1);

// typescript declaration and initialisation
var fruit1 : string ="Mango";
var fruit2 : string ="Apple";
var fruit3 : string ="Banana";

// #1 way
var fruits : string[] = ["Mango", "Apple", "Banana"];
console.log(fruits);

// #2 way (less utilized)
var fruits2 : Array<string> = ["Mango1", "Apple2", "Banana2"];
console.log(fruits2);

// Access Array elements manually in typescript
console.log(fruits[0]); // Mango
console.log(fruits[1]); // Apple
console.log(fruits[2]); // Banana

// how many elements are present in an array
console.log(fruits.length);

// access array elements using looping
for(var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
console.log("Exited from the loop");

// for in loop (skipping the index setting part)
for(var j in fruits){
  console.log(fruits[j]);
}
console.log("Exited from the second loop");


// --- 2 DIMENSIONS ARRAY ---

var num2 : number[][] = [[10,20],[30,40],[50,60]];
console.log(num2);

// access 2D array elements using indexes
console.log(num2[0][0]); // 10
console.log(num2[1][1]); // 40
console.log(num2[2][0]); // 50

// access 2D array using for loop
console.log("Access array elements using for loop");

for(var i=0; i < num2.length; i++){
  for(var k=0; k < num2[i].length; k++){
    console.log(num2[i][k]);
  }
}

// access 2D array elements using for...in loop
console.log("Access array elements using for...in loop");

for(var i1 in num2){
  for(var j1 in num2[i1]){
    console.log(num2[i1][j1]);
  }
}

// --- ARRAY METHODS ---
var num3 : number[] = [1,2,3,4,5];
console.log(num3);

// push() : adds one or more elements to the end of an array and 
// returns the new length of the array



// pop(): removes the last element from an array and returns that element



// concat() : returns a new array comprised of this array joined with other arrays and/or values



// reverse() : reverses the order of the elements of an array
// the first becomes the last, and the last becomes the first
