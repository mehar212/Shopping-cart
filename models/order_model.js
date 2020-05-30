var mongoose = require('mongoose');
var  Schema = mongoose.Schema;

var orderSchema = new Schema({
    order:{
        type: String
    },
    total:{
        type: String
    }
});
mongoose.model('order',orderSchema);
module.exports = orderSchema

/*const mongoose = require('mongoose');

var orderSchema = new moongose.schema({
    order:{type:string},
    total:{type:string}
});

mongose.model('order',orderSchema);*/