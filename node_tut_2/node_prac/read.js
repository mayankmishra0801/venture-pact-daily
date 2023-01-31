 const dbConnect = require('./mongodb')

//console.warn(dbConnect()) //promise pending 
//dbConnect(); //promise pending 
// dbConnect().then((res)=>{
//     console.warn(res.find().toArray())
// })

//using promise
    dbConnect().then((res)=>{
        res.find().toArray().then((data)=>{
           console.warn(data) 
        })
     })
// 2nd Method 
    //  const main = async()=>{
    //    let data = await dbConnect();
    //    data =  await data.find().toArray();
    //   // console.warn("Mayank");
    //    console.warn(data);
        
    //  }

    //  main();