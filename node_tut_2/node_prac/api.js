const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
//mongodb object
const mongoDb = require('mongodb')
app.use(express.json());

app.get('/', async(req,res)=>{

    let data = await dbConnect();
     data = await data.find().toArray();
    //node  console.log(data);
    res.send(data)
});

app.post('/',async (req,res)=>{
   // console.log(req.body)
    let data = await dbConnect();
    let result = await data.insert(req.body)
    //res.send(req.body)
    res.send(result)
})

app.put("/", async(req,res)=>{
  //console.log(req.body)
  let data = await  dbConnect();
  let result = data.updateOne({
   // name:"max11"
   name: req.body.name
  },
  {
    // $set:{price:990}
    $set : req.body
  })
  res.send({result:"Update"})
})

app.delete("/:id", async (req,res)=>{
  console.log(req.params.id)
  const data = await dbConnect();
  const result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
  res.send(result)
})

app.listen(5000)