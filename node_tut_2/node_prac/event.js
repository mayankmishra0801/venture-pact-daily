const express = require("express");
const EventEmitter = require("events");
const app = express()
const event = new  EventEmitter();

let count = 0

//It is a object of event
event.on("countAPI",()=>{
    count++;
   console.log("Event Called",count) 
})

app.get("/",(req,res)=>{
    res.send("API Called")
    event.emit("countAPI");
});

app.get("/search",(req,res)=>{
    res.send("API2 Called")
});

app.get("/update",(req,res)=>{
    res.send("Update API Called")
});
app.listen(5002, ()=>{
    console.log('Listening on 5002')
});

