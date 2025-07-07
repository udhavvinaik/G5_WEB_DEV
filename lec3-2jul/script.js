// console.log("Start script");

// function walkIn(cb) {
//   console.log("going in restaurant");
//   setTimeout(cb, 3000);
// }
// function checkMenu(cb) {
//   console.log("checking menu");
//   setTimeout(cb, 2000);
// }

// function orderFood(cb) {
//   console.log("Ordering the food");
//   setTimeout(cb, 3000);
// }

// function havingLunch(cb) {
//   console.log("having the lunch");
//   setTimeout(cb, 4000);
// }
// function payBill(cb) {
//   console.log("paying the bill");
//   setTimeout(cb, 2000);
// }

// function walkOut() {
//   console.log("going out");
// }


// walkIn(() => {
//   checkMenu(() => {
//     orderFood(() => {
//       havingLunch(() => {
//         payBill(walkOut);
//       });
//     });
//   });
// });
// console.log("something");
// console.log("something");
// console.log("end script");

var cart = ["shoes","watch","clothes"]

function createOrder(cart,cb){
    //take price and toral no of order
    console.log("order created");
    var price=0;
    var no = cart.length;
    for(item in cart){
        price+= 1000*Math.floor(Math.random()*10);
    }
    setTimeout(()=>cb(price,no),2000);
}


function placeOrder(price,noOfItem,cb){
    //generate order id and go to payment
    console.log("order placed");
    var orderId = Math.floor(Math.random()*10);
    //orderPayment(orderId,price,noOfItem);
    setTimeout(()=>cb(orderId,price,noOfItem),3000);
}



function orderPayment(order,price,noOfItem,cb){
    //place order
    console.log("order payment");
    //orderStatus(order,price,noOfItem);
    setTimeout(()=>cb(order,price,noOfItem),3000);
}


function orderStatus(order,price,noOfItem){
    //all details
    console.log("order status");
    console.log("order id",order);
    console.log("price",price);
    console.log("no of item",noOfItem);
    console.log("arriving soon");
}

createOrder(cart,(price, no)=>{
    placeOrder(price,no,(orderId,price,noOfItem)=>{
        orderPayment(orderId,price,noOfItem,(order,price,noOfItem)=>{
            orderStatus(order,price,noOfItem);
        })
    })
});