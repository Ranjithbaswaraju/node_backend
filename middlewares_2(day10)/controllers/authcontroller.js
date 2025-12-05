

// function loginController(req, res) {
//   const data = {
//     email: "ranjith@gmail",
//     password: "@1234",
//   };

//   const { email, password } = req.body;

//   const profile =
//     email === data.email && password === data.password
//       ? "login success"
//       : "login failed";
//   return res.send({ profile });
// }
// module.exports = { loginController };

function getData(req,res){
const data={
  email:"ranjith@gmail",
  password:"@1234"
}

const{email,password}=req.body
const profile=email===data.email && password===data.password ?
"login success":
"login fail"

return res.send(profile)
}

module.exports={getData}