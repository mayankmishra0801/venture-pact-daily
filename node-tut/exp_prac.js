const express = require('express'); //loading express.js
const app = express();  //making function exexcutable


//we arecmaking pages like home, login

app.get('',(req,res)=>{
    //console.log("Data sent by browser =>>> ",req.query.name)
    res.send('<h1>Welcome, to Home Page</h1><a href="/about">Go to About Page</a>'); 

});
app.get('/about',(req,res)=>{
    res.send(
        `<input type = "text" placeholder = "User name"  value = "${req.query.name}"/>
        <button>Click Me</button>
        <a href="/">Go to Home Page</a>`
    );
});

app.get('/help',(req,res)=>{
    res.send({
        name:'anil',
        email:'anil@test.com'
    });
});

app.listen(5000);
