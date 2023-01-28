const express = require('express');
const path = require('path');
const app = express();
app.set('view engine','ejs');

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
//use is middleware , afunction of express.js
//path module helps to access the folder of our project.
//all path  public or inside or outside we can take with the help of this module. 
//static method load the static content and page

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about_us.html`)
})

app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.get('/profile',(_,res)=>{
    const user ={
        name:'Anil Sidhu',
        email:'anil@test.com',
        city:'noida',
        skills:['php','Js','C++','Java','Node']
    }
    res.render('profile',{user});
  });

  app.get('/login',(_,res)=>{
    res.render('login');
  })

app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})

//we are setting template engine with set and using ejs,
//in first parameter we are writing view engine bcz we are using template engine.In second parameter we write ejs.
//by default we use views and make views, whatever template engine we make. 
//in views folder there will be extension of .ejs.
//header,footer,sidebar ia always common when we make a website.
//if there is nothinh in request we use _,












app.listen(5001);

//with the help of sendFile we can load file with  get method.

//template engine
//It is used to make dynamic page, It is also a npm package, it is need to be installed as we install npm.
//ejs is mostly used  for template enjine, though there are lots of template engine.
//in node.js we make dynamic website very less, mostle we make API till 95%.

//in react js we use {} quote on angular we use {{}} quote
//in ejs we use <%= %> to show that it is variable and it is dynamic data.
//we can make dynamic page with the help of template engine mostly we use ejs.


//Middleware are function which is used with route
//we can access request and response with the help of it, and we can modify it.
//to check age, to block site in particular country, to check connection login we use middleware.
//to change something between req and res  there we use middleware.
//we do changes in req, res in middleware not in route bcz 
//if wekeep on checking insite route we will have to write same code 50times 
//with middleware we can make it once and can use it again and again.
//to make middleware is too easy and to apply it is also easy.

