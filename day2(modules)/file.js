// let {demo}=require('./index.js')
// demo()


// -------->namedexpoerts
exports.add = (a, b) => {
  return a + b;
};

exports.sub = (a, b) => {
  return a - b;
};

// --------->default exports

const dummy=()=>{
    return{
        name:"abcxxc",
        age:20
    }
}
exports.data=dummy

// export var a=10