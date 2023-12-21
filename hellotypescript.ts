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