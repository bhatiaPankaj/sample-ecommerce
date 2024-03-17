const port = 4000;
const express = require("express")
const app = express();
const mongoose = require("mongoose")

const jwt = require("jsonwebtoken")
const multer = require("multer")

const  path = require("path")
const cors = require("cors")

app.use(express.json());
app.use(cors());


// database connection with mongo db
mongoose.connect(
  "mongodb+srv://hipankajbhatia:hipankajbhatia@cluster0.xym2tfs.mongodb.net/e-commerce"
);

// api creation

app.get("/",(req,res)=>{
    res.send(`express app is running`)
})


// image storage
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now(0)}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage });

// creating upload endpoint to upload images
app.post("/upload",upload.single('product'),(req,res)=>{
    
})


app.listen(port,(error)=>{
    if(!error){
        console.log(`server running on port: ${port}`);
    }
    else {
        console.log(`Error: ${error}`);
    }
});