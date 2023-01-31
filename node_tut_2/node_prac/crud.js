const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecom');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});


const saveInDB = async () =>{
    const Product = mongoose.model('products',productSchema);
    let data = new Product({name:"Note Pro",price:200, brand: "max", category:"Mobile"});
    const result = await data.save();
    console.log(result);
}


const updateInDB = async ()=>{
    const Product  =  mongoose.model('products',productSchema);
    let data = await  Product.updateOne(
        {name:"max10"},{
            $set:{price:700,name:'max77'}
        }
    )

    console.log(data);
}

const deleteInDB = async ()=>{
   const Product = mongoose.model('products',productSchema);
   let data = await Product.deleteOne({name:'m8'}); 
   console.log(data);
}


const  findInDB = async () =>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.find({name:"max 1311"});
    console.log(data);
}

findInDB();

