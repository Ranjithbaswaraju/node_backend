const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
app.use(express.urlencoded());
app.use(express.json());

const { sendMail } = require("./utils/mail.js");
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.node_mailer_email,
//     pass: process.env.node_mailer_pass,
//   },
// });

// const mailOptions = {
//   from: process.env.node_mailer_email,
//   to: "ranjithbaswaraju27@gmail.com",
//   subject: "test mail services",
//   // text:"hi i am good"
//   html: `<div><h1>Hello</h1><p>bye</p></div>`,
// };

// transporter.sendMail(mailOptions,(err,info)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("message sent successfully")
//     }
// })

app.post("/sendMail", async (req, res) => {
  try {
    if (req.body) {
      const { email } = req.body;
      if (!email) {
        return res.status(400).send("no email found");
      } else {
        const result = await sendMail(email);
        res.json({
          message:"mail sent succesfully",
          emailID:email
        })
      }
    } else {
      res.status(400).send("no data found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("something went wrong");
  }
});

app.listen(process.env.port, () => {
  console.log("server running at " + process.env.port);
});
