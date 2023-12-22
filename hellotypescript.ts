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
console.log(num3.push(200));
console.log("After Push:",num3);

// pop(): removes the last element from an array and returns that element
console.log(num3.pop());
console.log("After Pop:",num3);

// concat() : returns a new array comprised of this array joined with other arrays and/or values
var num4 : number[] = [11,22,33,44];
console.log("After Concat:",num3.concat(num4));

// reverse() : reverses the order of the elements of an array
// the first becomes the last, and the last becomes the first
console.log("After Reverse:",num4.reverse());

/*
------ Typescript String properties and Methods ------
*/

// Strings =  Sequence of characters
// How to declare and initialise string in TypeScript
var name4 : string = 'John';
var name5 : string = "Finance";
var name6 : string = `${name4} works in ${name5} company`;

console.log(name4);
console.log(name5);
console.log(name6);

// Property of the string : Length of the string
// Will return the total number of characters including space whitespace
console.log(name4.length);
console.log(name5.length);
console.log(name6.length);

// Methods of the string in TypeScript
// charAt() : returns the character at a given index
console.log("charAt() of name4 :", name4.charAt(0));

// concat() : combines the text of two strings and returns the new string
console.log(name4.concat(name5).concat(name6));

// indexOf() : Returns an index of first occurrence of the specified substring from a string (-1 if not found)
console.log(name4.indexOf('J'));    // 0
console.log(name4.indexOf('n'));    // 3
console.log(name4.indexOf('Z'));    // -1

// toUpperCase() : Returns the calling string value converted to upper case.
console.log(name4.toUpperCase());

// toLowerCase() : Returns the calling string value converted to lower case.
console.log(name4.toLowerCase());

//trim() : removes whitespace from a string
var name7 : string = "   Finance    ";
console.log(name7.trim());


// replace() : The replace() method replaces the matched substring with the specified string
var name8 : string = "Hello Typescript";
console.log(name8.replace("Type", "Java"));
console.log(name8.replace("e", "E"));   // replaces the first occurrence of "e"

// split() : split the entire string into multiple pieces depending on the space delemeter
var fruits3 : string = "Apple Banana Orange";
console.log(fruits3.split(' ')); // creates an array with these strings  
// adding an index i can decide what elements i want to split. In this case it will split the first 2 elements
console.log(fruits3.split(' ', 2));   // ["Apple", "Banana"]


// substring() : It returns a string between the two given indexes. Used to extract substrings in a string.
// it need 2 indexes : one for the starting point and one for the ending point.
// the ending point index does not consider the last index of the string.
var str : string = "Welcome";
console.log(str.substring(0, 3));   // "Wel"
console.log(str.substring(2, 5));   // "lco"