const express = require('express');
const app = express();

app.get("",(req,resp)=>{
     console.log("data sent by browser",req.query.name)
       resp.send("Welcome," + req.query.name);

});

app.get("/about",(req,resp)=>{
    resp.send('Hello,this is About Page');

})

app.post('/postRequest',(req,resp)=>{
    resp.send("This is successful post request")
})

app.listen(5001,()=>{
    console.log('Server is running on $(5001)')
});
