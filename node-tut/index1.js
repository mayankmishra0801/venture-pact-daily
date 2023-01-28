const http = require('http');
const data = require('./data');
const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');

// for(i = 0;i<5;i++){
//    fs.writeFileSync(dirPath+"/helloe"+i+".txt","a simple text file");
// }
http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'application\json'});
   res.write(JSON.stringify({name:'Anil Sidhu',email:'anil@test.com'}));
   res.write(JSON.stringify(data));
   res.end();

}).listen(6001);

//console.log(process.argv[2])

const input = process.argv;
// fs.writeFileSync(input[2],input[3])


if(input[2] == 'add'){
   fs.writeFileSync(input[3],input[4])
}
else if(input[2] == 'remove'){
   fs.unlinkSync(input[3])
}

else{
   console.log("invalid input")
}

// fs.writeFileSync('apple.txt','This is a apple file')



















