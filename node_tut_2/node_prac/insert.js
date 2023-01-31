const dbConnect = require('./mongodb');

const insert = async()=>{

    const db = await dbConnect();
    const result =  await db.insert([
    {
        name:'max9',
        brand:'Micromax',
        price:43000,
        category:'mobile'
    },
    {
        name:'max10',
        brand:'micromax',
        price:48000,
        category:'mobile'
    },
    {
        name:'max11',
        brand:'Vivo',
        price:40800,
        category:'mobile'
    }]
    );

    // console.log(result)
//   if(result.acknowledged){
//     console.log("Data insertd")
//   }
    

}

insert();