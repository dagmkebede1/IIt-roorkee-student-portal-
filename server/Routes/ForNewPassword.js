import express from 'express';
import ForNewPassword from '../controllers/ForNewPassword.js';

let forPasswordChange = express.Router()

forPasswordChange.post('/ForNewPassword',ForNewPassword)

export default forPasswordChange;