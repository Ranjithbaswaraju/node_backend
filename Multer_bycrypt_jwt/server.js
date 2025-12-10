const express = require("express");
const port = 3000;
const app = express();
const multer = require("multer");
const mongoose = require("mongoose");
const ImageModel = require("./models/imageModel.js");

async function connectDB() {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/", { dbName: "MULTER_DEMO" })
      .then(() => console.log("connected successfully"))
      .catch((err) => console(err));
  } catch (err) {
    console.log(err);
  }
}

connectDB();

//middle ware
app.use("/images", express.static("images"));

// cb=callbackfunction
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/imageUpload", upload.single("image"), async (req, res) => {
  try {
    // console.log(req.file)
    const { imageName } = req.body;

    const imageAdd = await new ImageModel({
      imageName: imageName,
      imagePath: req.file.path,
    });

    imageAdd.save();

    res.json(imageAdd);
  } catch (err) {
    res.json(err);
  }
});

app.get("/getImages", async (req, res) => {
  //   res.send("retrive images");

  try {
    const data = await ImageModel.find();
    const results = data.map((val) => {
      return {
        ...val,
        url: "http://localhost:3000/" + val.imagePath.replace("\\", "/"),
      };
    });
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

app.get("/", (req, res) => {
  res.send("hello there");
});




//bcrypt exmaple

// 1st example without comparehash
const bcrypt=require('bcryptjs')
// const str="hello"
// console.log(bcrypt.hashSync(str,13))

// hashcompare example

const password='ranjith@321'
// console.log(bcrypt.hashSync(password,12))

const hassedpassword='$2b$12$JyUsvGIidg7V35LsxWkRgOH6eddzVuot8OY5JUh/7e3uBc.zXw5wS'
console.log(bcrypt.compareSync(password,hassedpassword))














//example ends here





app.listen(port, () => {
  console.log(`server running at${port}`);
});
