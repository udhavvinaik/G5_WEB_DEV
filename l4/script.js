// console.log("start")
// let arr =[2,4,5,6,8]
// const newArr = arr.map((x)=>x*2);
// // const newArr = arr.map((x)=>{x*2}); return undefied as {} is creating seperate scope
// console.log(newArr);



// let arr = [2,4,6,8,9]
// function doubleData(x){
//     return x*x;
// }

// Array.prototype.mapRep = function(logic){
//     let outputArr =[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }

// const myProto = arr.mapRep(doubleData);
// console.log(myProto);



// const words = ["spray","elite","abc","a"]
// const result = words.filter((word)=>word.length>3);
// console.log(result);


// Array.prototype.filterRep = function(logic){
//     let outputArr = [];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//             outputArr.push(this[i]);
//         }
//     }
//     return outputArr;
// }

// const protoRes = words.filterRep((word)=>word.length>3);
// console.log(protoRes);

let array1 = [1,2,3,4]
const initialVaue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialVaue
);
console.log("From reduce: " + sumWithInitial);



Array.prototype.reduceRep = function(logic,ini){
    let accumulator = ini;
    for(let i=0;i<this.length;i++){
        accumulator = logic(accumulator,this[i]);
    }
    return accumulator;
}

const protoSum = array1.reduceRep((acc,curr)=>acc+curr,100);
console.log("From Prototype: " + protoSum);