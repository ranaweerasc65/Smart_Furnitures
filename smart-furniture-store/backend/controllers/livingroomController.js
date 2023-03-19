

import LivingRoom from '../models/LivingRoom.js'

//create new living room item
export const createLivingroom = async(req,res)=>{

    const newLivingroom = new LivingRoom(req.body)
    try{
        const savedLivingroom = await newLivingroom.save()
        res
        .status(200)
        .json(
            {
                success:true,
                message:'Successfully created',
                data:savedLivingroom,
            });
    }catch(err){
        res
        .status(500)
        .json(
            {
                success:false,
                message:'Failed to create.Try again',
                message:(`ERROR:${err}`),
            });
    }
};





// update livingroom item
export const updateLivingroom=async(req,res)=>{

    const id=req.params.id
    try {
        const updatedLivingroom= await LivingRoom.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json(
            {
                success:true,
                message:'Successfully updated',
                data:updatedLivingroom,
            })

    } catch (err) {
        res.status(500).json(
            {
                success:false,
                message:'Failed to update',
                message:(`ERROR:${err}`),
            })
    }
}





// delete livingroom item
export const deleteLivingroom=async(req,res)=>{
    const id=req.params.id
    try {
        await LivingRoom.findByIdAndDelete(id);

        res.status(200).json(
            {
                success:true,
                message:"Successfully deleted",
            })

    } catch (err) {
        res.status(500).json(
            {
                success:false,
                message:"Failed to delete",
                message:(`ERROR:${err}`),
            })
    }
}









// getSingle livingroom item
export const getSingleLivingroom=async(req,res)=>{
    const id=req.params.id;
    try {
        const livingRoom=await LivingRoom.findById(id).populate('reviews')

        res.status(200).json(
            {
                success:true,
                message:"Successfully found",
                data:livingRoom,
            })

    } catch (err) {
        res.status(404).json(
            {
                success:false,
                message:"Failed to find",
                message:(`ERROR:${err}`),
            })
    }
}





// getAll livingroom items

export const getAllLivingroom=async(req,res)=>{
    //pagination
    const page=parseInt(req.query.page);
    try {
        const livingrooms=await LivingRoom.find({}).populate('reviews')
        .skip(page * 8)
        .limit(8);

        res.status(200).json(
            {
                success:true,
                count:livingrooms.length,
                message:"Successfully found",
                data:livingrooms,
        })
    } catch (err) {
        res.status(404).json(
            {
                success:false,
                message:"Failed to find",
                message:(`ERROR:${err}`),
            })
    }
}



//get living room items by search

export const getLivingroomBySearch = async(req,res)=>{
    const showroom =new RegExp(req.query.showroom,'i')
    const category =new RegExp(req.query.category,'i')
    const type =new RegExp(req.query.type,'i')

    try {
        const livingrooms = await LivingRoom.find({showroom,category,type}).populate('reviews')
        res.status(200).json(
            {
                success:true,
                message:"Successful",
                data:livingrooms,
        })
    } catch (err) {
        res.status(404).json(
            {
                success:false,
                message:"Failed",
                message:(`ERROR:${err}`),
            })
    }

}
