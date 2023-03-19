
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import livingroomRoute from './routers/livingrooms.js';
import userRoute from './routers/users.js'
import authRoute from './routers/auth.js'
import reviewRoute from './routers/reviews.js'
import buyingRoute from './routers/buying.js'
import cartRoute from './routers/cart.js'


dotenv.config()
const app= express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin : true,
    credentials:true
}



//database connection
mongoose.set("strictQuery",false);
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MongoDB database connected');

    }catch(err){
        console.log(`ERROR:${err}`);
    }
}

//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/livingrooms',livingroomRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/review',reviewRoute)
app.use('/api/v1/buying',buyingRoute)
app.use('/carts',cartRoute)


app.listen(port, ()=>{
    connect();
    console.log('server listening on port', port)
})


