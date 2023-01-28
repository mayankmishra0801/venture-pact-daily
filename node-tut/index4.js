const express = require('express');
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();
//applying middleware on all route


//app.use(reqFilter)


//it will keep on loading untill and unless we call next.


route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
});
//applied middleware on single route
app.get('/users',(req,res)=>{
    res.send("Welcome to user page")
});
route.get('/about',(req,res)=>{
    res.send('Welcome to About Page')
});
route.get('/contact',(req,res)=>{
    res.send('<h1>Welcome to Contact Page</h1>')
});
app.use('/',route);

app.listen(5002);

//making middleware in same file
// we take reqFilter variable to filter and will have three paramtere
//req,res,next
//next will proced on which we have called  
//types of middleware
//application level
//router level
//error-handling
//built-in
//third-party
//if threr are 50 route, we used in home and user and want to use middleware on 10 route  then we use on eoutlevel.

//middleware will get applied on route.get not on app.get

//if we want to apply route then route.get 
//if you do not wnat to apply middle ware the app.get


//which is applied on route is route level middleware.
//applied on single, grouped,or all route 

//application route is  applied by default on all application.

//app level middleware is applied globally on all route et a time.

// route level middleware along with global can be applied on single or grouped. 


