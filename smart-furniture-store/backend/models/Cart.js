
import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({

items: [
{
    itemId: {type: mongoose.Schema.Types.ObjectId,ref: 'Item',required: true,},
    quantity: {type: Number,required: true,default: 1,},
},
],

userId: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true,},

createdAt: {type: Date,default: Date.now,},

updatedAt: {type: Date,default: Date.now,},

}

);

export default mongoose.model("Cart", cartSchema);