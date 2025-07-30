const express = require('express')
const app = express()
const port = 3000


// app.use('/secret', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

// app.get('/*splat', async (req, res) => {
//   res.send('ok')
// })

// app.get('/ab?cd', (req, res) => {
//   res.send('ab?cd')
// })
// app.get('/users/:userId/books/:bookId', (req, res) => {
//   res.send(req.params)
// })


// app.get('/example/a', (req, res) => {
//   res.send('Hello from A!')
// })

// app.get('/example/b', (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from B!')
// })

// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// const cb2 = function (req, res) {
//   res.send('Hello from C!')
// }

// app.get('/example/c', [cb0, cb1, cb2])


// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// app.get('/example/d', [cb0, cb1], (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from D!')
// })

// const chappal = function(req,res,next){
//     console.log("chappal")
//     next()
// }
// const prasad = function(req,res,next){
//     console.log("prasad")
//     next()
// }
// const pooja = function(req,res,next){
//     console.log("pooja")
//     next()
// }
// app.get("/club",chappal,prasad,pooja,(req,res)=>{
//     res.send("entered in the club")
// })

// app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//   })

const router = express.Router()
const m1 = function(req,res,next){
    console.log("this is m1")
    next()
}
const m2 = function(req,res,next){
    console.log("this is m2")
    next()
}
app.get("/home",m1,m2,(req,res)=>{
    console.log("this is home")
    res.send("this is home")
})

router.get("/login",m1,m2,(req,res)=>{
    console.log("this is login")
    res.send("this is login")
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
