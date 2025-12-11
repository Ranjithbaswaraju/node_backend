const nodemailer=require("nodemailer")
const dotenv=require("dotenv")
dotenv.config()

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.node_mailer_email,
        pass:process.env.node_mailer_pass
    }
})



async function sendMail(mailId){
    const mailOptions={
    from:process.env.node_mailer_email,
    to:mailId,
    subject:"test mail",
    text:"hi"
}
   try{
    const mailSent=await transporter.sendMail(mailOptions)
    console.log("------------------",mailSent)
    return "mail sent succesfully"
   }catch(err){
    console.log(err)
    return err
   }
}


module.exports={sendMail}