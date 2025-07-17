// const { readFile } = require('fs')
// const https = require('https')
// readFile('etc/passwd',(err,data)=>{
//     console.log("read file")
// })

// setTimeout(()=>{
//     console.log("timeout 1")
// },0)
// Promise.resolve("Resolve").then((res)=>{console.log("p1")})

// https.get("https://dummyjson.com/products",(res)=>{
//     console.log("api data")
//     Promise.resolve("Resolve").then((res)=>{console.log("p2")})
//     process.nextTick(()=>{
//         console.log("nextTick 3")
//     })
//     setImmediate(()=>{
//         console.log("setImmediate 3")
//     })
// }).on('error',(e)=>{
//     console.log("error")
// })

// Promise.resolve("Resolve").then((res)=>{console.log("p3")})


// setImmediate(()=>{
//     console.log("setImmediate")
// })

// setTimeout(()=>{
//     console.log("timeout 2")
// },0)

// process.nextTick(()=>{             
//     console.log("nextTick")
// })

// console.log("hello")

// process.nextTick(()=>{                
//     console.log("nextTick 2")
// })


// setTimeout(()=>{
//     console.log("timeout 1")
// },0)

// setImmediate(()=>{
//     console.log("setImmediate")
// })



const EventEmitter = require('events')
const emitter = new EventEmitter()
//console.log(emitter)
emitter.on('g5',()=>{
    console.log("event started")
})

emitter.emit('g5')
emitter.once('g5_once',()=>{
    console.log("event started once")
})
emitter.off('g5',()=>{
    console.log("event started off")
})

emitter.emit('g5')
emitter.emit('g5_once')
emitter.emit('g5_once')

