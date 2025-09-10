const express = require("express");
const multer  = require('multer')
const cors = require("cors");
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

// Log the configuration
console.log(cloudinary.config());


/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};



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
  console.log(req.body)
  console.log(req.file)
  return res.redirect("/");
});

app.post('/cloud',upload.single('avatar'),async function(req,res){
  console.log(req.body);
  console.log(req.file);
  const ip = path.join(__dirname, req.file.path);
  const result = await uploadImage(ip);
  console.log(result);
  return res.redirect("/");
})


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
