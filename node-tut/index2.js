const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

//to upadte file
fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
    if(!err)
    console.log("file is updated");
})
//to update name of file
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("File name is upadted")
})

//to delete file
fs.unlinkSync(`${dirPath}/fruit.txt`)

console.log("Start exe...")

setTimeout(()=>{
    console.log("logic exe...")
}, 2000)

console.log("complete exe ...")