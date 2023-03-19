import mongoose from "mongoose";

const buyingSchema = new mongoose.Schema(
  {
    userId: {type: String},

    userEmail: {type: String,},

    //livingroomId: {type: mongoose.Types.ObjectId,ref: "Livingroom",},

    livingroomName:{type:String, },

    firstName:{type:String, required:true,},

    lastName:{type:String, required:true,},

    phone:{type:Number, required:true,},

    no:{type:String, required:true,},
  },

  { timestamps: true }
);

export default mongoose.model("Buying", buyingSchema);