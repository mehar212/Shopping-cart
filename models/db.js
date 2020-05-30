const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerceOrders',{useNewUrlParser:true},(err) => 
{
     if (!err) {
        console.log('MongoBD connected');

    } else {
        console.log('error: '+err);

    }
});
require('./order_model');