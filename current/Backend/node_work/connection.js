// module.exports{

const mongoose = require('mongoose');

require('dotenv').config();

const connectionParams = {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    

}

// const uri = "mongodb+srv://fresh:<password>@cluster0.ic3wtg0.mongodb.net/?retryWrites=true&w=majority"

const uri1 = "mongodb+srv://${process.env.MONGO_USER}:{process.env.MONGO_PASSWORD}@cluster0.ic3wtg0.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connect(uri,connectionParams).then[()=>
console.log('connected')
]
.catch[(err)=>console.log(err)]

module.exports = connection

// }