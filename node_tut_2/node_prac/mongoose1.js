const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecom');

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});


const main = async () =>{
    const Product = mongoose.model('products',ProductSchema);
    let data = new Product({name:"Note Pro",price:200, brand: "max", category:"Mobile"});
    const result = await data.save();
}


main();

