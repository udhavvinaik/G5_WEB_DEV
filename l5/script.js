// console.log("start")
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("get placed");
//     },3000);
// });
// myPromise
// .then((res)=>console.log(res))
// .then(()=>{
//     setTimeout(()=>{
//         console.log("Party")
//     },1100)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("Joining")
//     },1500)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("Work")
//     },1600)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("Fired")
//     },2000)
// })
// .catch((err)=>console.log(err))
// console.log(myPromise)



// function placement(placementStep,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("get placed" + placementStep)
//             console.log(placementStep)
//         },delay)
//     })
// }
// placement("got placement",1000)
// .then(()=> placement("party time"),3000)
// .then(()=> placement("joining"),2500)
// .then(()=> placement("work"),2000)
// .then(()=> placement("layed off"),1000)
// .catch((err)=>console.log(err))


// const myPromise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("get placed")
//     },5000)
// })
// const myPromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("get placed -2")
//     },2000)
// })
// const myPromise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("get placed -3")
//     },1000)
// })

// myPromise1
// .then((res)=>console.log(res))
// .then(()=> myPromise2)
// .then((res)=>console.log(res))
// .then(()=> myPromise3)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("JET1")
    },3000)
})
const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("JET2")
    },2000)
})
const myPromise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("JET3")
    },1000)
})
const myPromise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("JET4")
    },2000)
})

// Promise.all([myPromise1,myPromise2,myPromise3,myPromise4]) // if all resolved return array of resolved values
// .then((res)=>console.log(res)) // if rejected any returns first rejected value
// .catch((err)=>console.log(err))


// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4]) // return array of objects of promises
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// Promise.any([myPromise1,myPromise2,myPromise3,myPromise4]) //return any resolved value
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4]) //return first resolved value
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))