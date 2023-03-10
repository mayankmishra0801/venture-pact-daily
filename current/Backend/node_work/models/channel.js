const mongoose = require("mongoose");
// const express = require("express");
// const channelModel = require("./models/channel")
const channelSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true,
        trim:true
    },

});

const ChannelModel = mongoose.Model('Channel',channelSchema)

module.exports = ChannelModel