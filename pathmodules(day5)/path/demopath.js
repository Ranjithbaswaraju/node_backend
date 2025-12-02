const path=require('path');

console.log(path.basename("data/users/file1.txt"))
console.log(path.dirname("data/users/file1.txt"))
console.log(path.join("data","users","file1.txt"))
console.log(path.extname('data/users/file1.txt'))
console.log(path.parse('data/users/file1.txt'))