const mongoose = require("mongoose");
const express = require("express");
const ChannelModel = require("./models/channel");
require('dotenv').config()
// const channelModel = require("./models/channel");
// const { default: mongoose } = require("mongoose");

const app = express();

const PORT = 3005;

// constdbUrl = "";
// const uri1 = "mongodb+srv://${process.env.MONGO_USER}:{process.env.MONGO_PASSWORD}@cluster0.ic3wtg0.mongodb.net/?retryWrites=true&w=majority"
const dbUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ic3wtg0.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(dbUrl)
  .then(() => {
        console.log("Connected to the DB");
        app.listen(PORT, () => {
            console.log(`Listening on PORT: ${PORT}`);
        });
    })
  
    .catch((e) => {
        console.log("Error:",e)
    });
 
    
    app.get("/insert",(req,res)=>{
       var channelModel = new ChannelModel()
       channelModel.name = "INFY TECH"
       channelModel.type = "TECH"

       channelModel.save((err,data)=>{
        if(err){
            console.error(err)
        }else{
            res.status(200).send({"msg":"Insertd to DB"})
        }
       })
    })
  
