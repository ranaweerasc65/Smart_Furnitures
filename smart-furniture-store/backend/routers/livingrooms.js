
import  express  from 'express';
//import livingrooms from "../../frontend/src/assets/data/livingrooms.js";
import { 
    createLivingroom, 
    updateLivingroom, 
    deleteLivingroom, 
    getSingleLivingroom, 
    getAllLivingroom, 
    getLivingroomBySearch
} from "../controllers/livingroomController.js";
import { verifyAdmin } from '../utils/verifyToken.js';
//import LivingRoom from "../models/LivingRoom.js";

const router=express.Router()

// create new living room item
router.post('/',verifyAdmin, createLivingroom);

// update living room item
router.put('/:id',verifyAdmin, updateLivingroom);

// delete living room item
router.delete('/:id',verifyAdmin, deleteLivingroom);

// get single living room item
router.get('/:id',getSingleLivingroom);

// get all living room item
router.get('/',getAllLivingroom);

// get livingroom by search
router.get("/search/getLivingroomBySearch",getLivingroomBySearch)

export default router;
