

// //Here we are taking the file patha and reading the data from data.json file
// //why used the json .parse means actually we are getting data in string format but we want the data in object format so i useed the json.parse
// const fs=require('fs')
// const path=require('path')

// const filepath=path.join(__dirname,"data.json")
// console.log(filepath)

// const readFile=()=>{
//    const fileData=fs.readFileSync(filepath,'utf-8')
//    return JSON.parse(fileData)
// }
// console.log(readFile())

// //writing files
// const writeFile=(data)=>{
//    fs.writeFileSync(filepath,JSON.stringify(data))
//    //compulosry we need to convert into string coming because we dont know which type of data it i scoming so is better to convert into the string

// }
// checking wherether data is adding or not inot data.json thius is the method
// writeFile({
//     name:"laptop ultra",
//     category:"electronics",
//     price:3
// })
// module.exports={readFile,writeFile}


const fs=require('fs');
const path=require('path');

const filepath=path.join(__dirname,"data.json")
const readFile=()=>{
   const fileData=fs.readFileSync(filepath,'utf-8')
   return JSON.parse(fileData)
}
readFile()

const writeFile=(data)=>{
   fs.writeFileSync(filepath,JSON.stringify(data))
}

// writeFile({
//     name:"laptop ultra",
//     category:"electronics",
//     price:3
// })

module.exports={readFile,writeFile}