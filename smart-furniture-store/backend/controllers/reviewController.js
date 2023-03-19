import LivingRoom from "../models/LivingRoom.js"
import Review from "../models/Review.js"

export const createReview = async(req,res)=>{
    
    const livingroomId = req.params.livingroomId
    const newReview = new Review({ ...req.body})
    
    try {
        
        const savedReview = await newReview.save()

        //update review array
        await LivingRoom.findByIdAndUpdate(livingroomId,{
            $push: {reviews: savedReview._id}
        })


        res
        .status(200)
        .json({
            success:true,
            message:'Review submission successful',
            data:savedReview
        })

    } catch (err) {
        res
        .status(500)
        .json({
            success:false,
            message:'Review submission failed'
        })
    }
}