// It will load / import  mongoose paackege
const mongoose = require('mongoose');
const main = async () =>{
    await mongoose.connect("mongodb://localhost:27017/ecom");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });

    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"max100",price:200});
    let result = await data.save();
    console.log(result)

}

main()