// const {MongoClient} = require('mongodb')
// const url = 'mongodb://localhost:2707';

// const databaseName='e-comm'
// const client = new MongoClient(url);

// async function dbConnect(){
//     let result = await client.connect();
//     db = result.db(databaseName);
//     return db.collection('products');

// }

// module.exports = dbConnect;


const express = require('express');
const app = express();
const db = require('./connection');

app.listen(3001, ()=>{
    console.log(`Listening to 3001`)
})


