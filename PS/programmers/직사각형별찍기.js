let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ')
newArray = []
input.map((item)=>{
    newArray.push(+item)
})

for (let i = 1; i <= newArray[1]; i++) {
  console.log('*'.repeat(newArray[0]));
}