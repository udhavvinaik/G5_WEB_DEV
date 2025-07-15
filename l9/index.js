const {divOfTwo,xy} = require('./divOfTwo');
const sumOfTwo = require('./sumOfTwo');
console.log("modules")

// function divOfTwo(a,b){
//     console.log(a/b);
//     return a/b;
// }

// function sumOfTwo(a,b){
//     console.log(a+b);
//     return a+b;
// }

// function subOfTwo(a,b){
//     console.log(a-b);
//     return a-b;
// }

sumOfTwo(10,20);
divOfTwo(10,20);


// IIFE EXPORT PROTOTYPE(immediately invoked function expressions)
// (function(module,require){
//     require("./path")
//     function sumOfTwo(a,b){
//         console.log(a+b);
//         return a+b;
//     }
//     module.exports = {sumOfTwo}
// }())