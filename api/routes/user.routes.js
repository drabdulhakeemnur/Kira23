import express from "express"
const router= express.Router()
import{test, updateUser} from '../controllers/user.controller.js'
import { veriftyToken } from "../utils/verifyUser.js"

router.get('/test', test)
router.post('/update/:id', veriftyToken, updateUser)
export default router