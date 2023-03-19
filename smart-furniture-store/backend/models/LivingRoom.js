import mongoose from "mongoose";

const LivingRoomSchema = new mongoose.Schema(
  {
    title: {type: String,required: true,unique: true,},
    
    color: {type: String,required: true,},

    category: {type: String,required: true,},

    showroom: {type: String,required: true,},

    type: {type: String,required: true,},

    photo: {type: String,required: true, },

    desc: {type: String,required: true,},

    price: {type: Number,required: true,},
    
    reviews: [{type: mongoose.Types.ObjectId,ref: "Review",},],

    featured: {type: Boolean,default: false,},
  },
  
  { timestamps: true }
);

export default mongoose.model("LivingRoom", LivingRoomSchema);
