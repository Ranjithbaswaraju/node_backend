// const cities=(req,res)=>{
//     try{
//         if(cities_data){

//         res.json(cities_data)
//     }
//     }
//     catch(err){
//         res.status(400).send('no cities present')
//     }
// }

const addCities=(req,res)=>{
    try{
        res.send(city_data.push('hyderabad'))
    }
    catch{
        res.status(400).send("failed to add cities")
    }
}



//using th error handling  middleware

const cities=(req,res,next)=>{
    try{
        res.send(city_data.push('hyderbad'))
    }
    catch(err){
        next(err)
    }
}



module.exports={cities,addCities}