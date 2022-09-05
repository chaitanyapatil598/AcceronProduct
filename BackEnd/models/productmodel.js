const mongoose = require("mongoose")

const productSchema =  mongoose.Schema({
    productId: {
        type: Number,
        required: [true, "product ID require"],
        
    },
    productPrice: {
        type: Number,
        ref: 'productPrice',
        required: [true, 'Please enter productPrice require'],
      
    },
    ProductQuantity: {
        type: Number,
        ref: 'ProductQuantity',
        required: [true, 'Please ProductQuantity require'],
      
    },
    TotalAmount: {
        type: Number,
        required: [true, "TotalAmountrequire"],    
    },
    discount: {
        type: Number,
        required: [true, "discount require"], 
    },
    subTotal: {
        type: Number,
        required: [true, "subTotal require"],    
    },
    shippingCharg: {
        type: Number,
        required: [true, "shippingCharg require"],    
    },
    address: {
        type: String,
        required: [true, "addressrequire"],    
    },
    taxes: {
        type: Number,
        required: [true, "taxes required"],    
    },

})


module.exports = mongoose.model("product", productSchema)