

import Buying from '../models/Buying.js'
//create buying
export const createBuying = async(req,res)=>{
    const newBuying = new Buying(req,body)
    try {
        const savedBuying = await newBuying.save()

        res
        .status(200)
        .json({
            success:true,
            message:"Your items are added to the cart",
            data:savedBuying
        })
    } catch (err) {

        res
        .status(500)
        .json({
            success:false,
            message:"Internal Server Error"
        })
        
    }
}

//get single buying
export const getBuying = async(req,res)=>{

    const id=req.params.id
    try {
        const buy = await Buying.findById(id);
        res.status(200).json({
            success:true,
            message:"successful",
            data:buy,
        })
    } catch (err) {
        res
        .status(404)
        .json({
            success:true,
            message:"not found"
        })
    }
}


// get all buying
export const getAllBuying = async(req,res)=>{

    
    try {
        const buys = await Buying.find();
        res.status(200).json({
            success:true,
            message:"successful",
            data:buys,
        })
    } catch (err) {
        res
        .status(404)
        .json({
            success:true,
            message:"server error"
        })
    }
}