console.log("Introduction To Variables in JS");
// var variable.(Global Scope)
//var name ="Aaryan";
//name = "Aaryan Rai";
//console.log(name);
// let Variable. (Block scope, can be reassigned.)
let name ="Aaryan";
name = "Aaryan Rai";
console.log(name);
{
    let a=10;
    let b=20;
    let sum=a+b;
    console.log(sum); // a,b and sum only defined in this block.
}
// const Variable(Block Scope, cannot be reupdated or reassigned).
// const needs to be initialize with declaration(mandotary).
const Call="Aaryan";
// Type of Data Types in JS
// 1. Primitive(7 types)  2. Non Primitive.(Objects)
// Primitve further goes to- NNSSBBU
// 1.Null 2.Number 3.String 4.Symbol 5.Big Int 6.Bool 7.Undefined
let id="Aaryan";   //String.
let age=20;        //Number
let isStudent= true;  //Boolean
let score;         //Undefined
let car=null;     //Null
// Data Types
console.log(typeof id);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof score);
console.log(typeof car);