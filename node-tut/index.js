const http = require('http');

const fs = require('fs');
const app = require('./app')
// console.log(app)
// console.log(app.l)
// console.log(app.m)
// console.log(app.z())



// console.log("sub");
// var a = 20;
// var b = 30;
// var c = 40;
// console.warn(a+b+c);
// var x = '20';
// if(x == 20){
//     console.log("Matched")
// }

// for(i = 0;i<=10;i++){
//     console.log(i);
// }

// const arr = [2,4,7,3,8,3];
// console.log(arr)
// console.log(arr[0])


// const arr = [3,4,5,6,7,3,5,3];

// let result = arr.filter((item)=>{
//     return item > 4
// })

// console.warn(result)

// console.log("Code Step by step");
fs.writeFileSync("hello.txt","Code Step By Step ")
fs.writeFileSync("hello2.txt","like and subscribe")
console.log("->>",__dirname);
console.log("->>",__filename);


// const fs =  require('fs').writeFileSync;
// fs("abc.txt","abc")

const gs = require('fs').writeFileSync;
gs("xyz.txt","abc")


http.createServer((req,res)=>{
    res.write("<h1>Hello this is Anil Sidhu</h1>");
    res.end();
}).listen(4500);

// function dataControl(req,res){
//     res.write("<h1>Hello,This is Anil Sidhu...</h1>")
//     res.end();
// }

const dataControl = (req,res) =>{
    res.write("<h1>I know you are doing great.</h1>");
    res.end();
}
http.createServer(dataControl).listen(4501);




const colors = require('colors');
console.log("Hello".red);
console.log("Package.json".green);
console.warn("Code is ok")
console.log(100+2)


// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is a simple txt file');

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })