//function calculate(param1){
//    console.log("calculate the BL")
//    param1();
//}
//var sumoftwo = () =>{
//    console.log("Sum of two");
//}
//calculate(sumoftwo);


//function calculate(logicFunction,a,b){
//    return logicFunction(a,b);
//}
//function add(a,b){
//    return a+b;
//}
//function sub(a,b){
//    return a-b;
//}
//console.log(calculate(add,10,20));
//console.log(calculate(sub,100,20));


//function studentDetails(name, fees){
//    return "name:" + name +"  fees: "+fees;
//}
//function emi(fees){
//    return "emi: " + fees/10; ;
//}
//function welcome(studentDetails,emi,name,fees){
//    //console.log(studentDetails(name,fees));
//    //console.log(emi(fees));
//    return studentDetails(name,fees) + "  " + emi(fees);
//}
//console.log(welcome(studentDetails,emi,"abc",100000));

setTimeout(()=>{
    console.log("hello set timeout");
},3000)

setInterval(()=>{
    console.log("set interval");
},2000)