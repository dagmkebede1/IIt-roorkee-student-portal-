import express from 'express';
import ForConfirmOTP from '../controllers/ForConfirmOTP.js'

let confirmOTP = express.Router();

confirmOTP.post('/ForNewPasswordOTP',ForConfirmOTP);


export default confirmOTP
