const dbConnect = require('./mongodb');

const deleteData = async()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({name:'max pro 7 abc'})
  // here this data always return promise so we will write await
    //console.log("Function Called");
    console.warn(result);

    if(result.acknowleged){
        console.log("Record Deleted")
    }

}

deleteData();
