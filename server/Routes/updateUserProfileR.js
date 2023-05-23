import express from 'express';

import userUserProfileC from '../controllers/updateUserProfile.js'

let userProfileRoute = express.Router()

userProfileRoute.post('/updateUserProfile/:id',userUserProfileC);

export default userProfileRoute;