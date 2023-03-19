import express from 'express'
import { createBuying, getAllBuying, getBuying } from '../controllers/buyingController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
const router = express.Router()

router.post('/', verifyUser,createBuying)
router.get("/:id",verifyUser,getBuying)
router.post("/",verifyAdmin,getAllBuying)

export default router