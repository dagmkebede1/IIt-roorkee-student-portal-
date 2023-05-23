import express from 'express';
import userProfile from '../controllers/getProfile.js'

let userPrileR= express.Router()
userPrileR.get('/me',userProfile)

export default userPrileR