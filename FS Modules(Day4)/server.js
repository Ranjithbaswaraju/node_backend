// const fileSystem=require('fs')
// console.log(fileSystem)


//Asynchronous File Reading
// console.log('Exection Satred')
// fileSystem.readFile('./hello.txt',(err,data)=>{
//     if(err){
//         console.log("Unable to Read File")
//     }
//     else{
//         console.log(data.toString())
//     }
// })
// console.log("Execution Ended")

// Synchronous File Reading

// console.log("File Reading Started");
// let fileSystem=require('fs');
// const file=fileSystem.readFileSync('./hello.txt','utf-8')
// console.log(file)
// console.log('File Reading Ended')


// WRTTING TEXT INTO A FILE iron max USING ASYNCHRONOUS WAY
// const a={name:'ranjith'}
// const fs=require('fs')
// fs.writeFile('./ironman.txt',JSON.stringify(a),(err,data)=>{
//     console.log('data inserted Sucesffuly')
// })
//WRITING TEXT INTO FILE USING SYNCHRONOUS WAY
// const a={name:'mom'}
// const fs=require('fs')
// fs.writeFileSync('./ironman.txt','Bye')
// console.log('data inserted Sucesffuly')
// Appending text into a file using synchronous Way

// const fs=require('fs')
// const a=fs.appendFileSync('./ironman.txt','hello111')
// console.log(a)

// Appending text into a file using Asynchronous Way

// const fs=require('fs')
// fs.appendFile('./ironman.txt','hello',(err)=>{
//     console.log('data inserted Sucesffuly')
// })

// creating a Folder Asynchronous Way

// const fs=require('fs')
// fs.mkdir("./Day4",(err,data)=>{
//     if(err){
//         console.log('Unable to create a folder')
//     }
//     else{
//         console.log('folder created successfully')
//     }
// })

// creating a folder synchronously
// const fs=require('fs')
// fs.mkdirSync("./Day4")
// console.log('folder created successfully')

// creating a folder and insdie that creating a file at a time

// const fs=require('fs')
// fs.mkdir("./Day6",(err,data)=>{
//     if(err){
//         console.log("Unable to create a folder")

//     }
//     else{
//         fs.writeFile("./Day6/bye1.txt",'good boy',()=>{
//             console.log('file created successfully')
//         })
//     }
// })

//Delete a Folder

// const fs=require('fs')
// fs.rmdir('../Day6',(err,data)=>{
//     if(err){
//         console.log(err)
//         console.log('Unable to delete a folder')
//     }
//     else{
//         console.log('folder deleted successfully')
//     }
// })

// Deleting a File

// const fs=require('fs')
// fs.unlink('./bye.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//         console.log('Unable to delete a file')
//     }
//     else{
//         console.log('file deleted successfully')
//     }
// })

// Checking file wherather file is exists or not

// const fs=require('fs');
// const a=fs.existsSync('./ironman.txt')
// console.log(a)

// Checking multple folders at a time

// const fs=require('fs')
// fs.readdir('./',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// ile Reading using Promises

const fs=require('fs/promises')

async function read(){
    try{
        console.log('file Reading Started');
        const a=await fs.readFile('./ironman.txt','utf-8',()=>{
        console.log(a)
            console.log('file Reading Ended')
           
        })
    }
    catch(err){
        console.log(err)
    }
}
read()
