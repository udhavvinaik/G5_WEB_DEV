const express = require("express");
const multer  = require('multer')
const cors = require("cors");
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');


app.use(cors());
var hbs = require('hbs');
app.use(express.urlencoded({ extended: true }));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


const up = './uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, up)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix+ext)
  }
})

const upload = multer({ storage: storage })

app.post('/profile', upload.single('avatar'), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
  console.log(req.body)
  console.log(req.file)
  return res.redirect("/");
});


app.get("/",(req,res)=>{
  res.render('home.hbs',{
    firstname:"submit",
    lastname: "image"
  })
})


app.get("/products",(req,res)=>{
  res.render('products.hbs',{
  products: [
    "Watch",
    "Shirts",
    "Sunglasses",
  ],
})
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
