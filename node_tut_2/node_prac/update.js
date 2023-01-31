const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data =   await dbConnect();
    let result = await data.updateMany(
        { name:'max pro 5'},//this is the object where we should upadte //this is condition
        {
            $set:{name:'max pro 7', price:1000} //thing which we have to update 
        }

    );


    console.warn(result)
}

updateData();
