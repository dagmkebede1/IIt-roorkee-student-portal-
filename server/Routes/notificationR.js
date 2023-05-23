import express from 'express';
// import {notificationC,getYourNotfication,deleteNotification} from '../controllers/notificationC.js'
import {notificationC,getYourNotfication,deleteNotification,getAllNotfication} from '../controllers/notificationC.js'
import {protect} from '../controllers/aut.js'

let notificationRoute = express.Router();

notificationRoute.post('/notification',notificationC)
notificationRoute.get('/getUserNotfication',getYourNotfication)
notificationRoute.get('/getAllNotfication',getAllNotfication)
notificationRoute.delete('/deleteUserNotfication/:id',deleteNotification)

export default notificationRoute;