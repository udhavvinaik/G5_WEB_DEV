console.log("hello world")
var a =200;
console.log(a);
function abc(){
    console.log("hello class")
}
abc();
var b =3000;
console.log(b);
setTimeout(()=>{
    console.log("set timeout")
},2000);

console.log("end of program");




var a =20;
console.log(a); //20
console.log(xyz); //undefined
xyz() //type error
var xyz = () => {
    console.log("this is xyz")
}
console.log("end")




function grandparent(){
    var a=200;
    console.log(a);
    console.log(c); 
    function parent(){
        var b= 30;
        console.log(b);
        function child(){
            var c =400;
            console.log(c);
        }
        child();
    }
    parent();
}
grandparent();