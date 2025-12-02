// const http=require('http');
// const port=3000

// const server=http.createServer((request,response)=>{
    
//     response.writeHead(400,{
//         "content-type":"application/json"
//     })
//     response.write("hello world");
//     response.end()
// })


// server.listen(port,()=>{
//     console.log('server started')
// })


// custom modules

// const recipes=require('./recipes.js');
// console.log('recipes',recipes[0])

// const addition=require('./math.js');
// console.log('addition',addition())


// const recipes=require('./recipes.js');
// console.log('recipes',recipes());

// const {recipes,getRecipes}=require('./recipes.js');
// console.log(recipes,getRecipes())


// // ES6 modules
// import data from './recipes.js';
// console.log(data())


// Colors in Nodejs using es6 imort and expoert

// import colors from 'colors'

// console.log('hi'.blue)
// console.log('hi'.red)
// console.log('hi'.green)

//chnaging background colors

// console.log('hi'.bgRed)
// console.log('hi'.bgGreen)

// Colors in Nodejs using common js (if we are uisng th common js modules simply remove the type:'module" in packgae.json)

// const colors=require('colors')
// console.log(colors.red('hi'))
//  console.log(colors.bgBlue('hi'))
//  console.log(colors.rainbow('hikjdddd'))

// common js moudesl
// const id=require("uuid")
// console.log(id)

// es6 modules
// import {v4} from 'uuid';
// console.log(v4());
