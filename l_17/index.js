const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/user',(req,res)=>{
//     res.send('Hello User!')
// })

// app.post('/user',(req,res)=>{
//     res.send('Post request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
