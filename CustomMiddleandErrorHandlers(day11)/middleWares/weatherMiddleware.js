const api_keyData=(req,res,next)=>{
    const {api_key}=req.query

    if(api_key=="kl331njnckj23"){
        next()
    }
    else{
        res.status(400).json({
            message:"Invalid api key"
        })
    }
}
module.exports={api_keyData}