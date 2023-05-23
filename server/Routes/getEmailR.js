import express from 'express';
import emailChecker from '../controllers/regEmailC.js'

let emailCheck = express.Router();

emailCheck.get('/getSingleEmail',emailChecker);

export default emailCheck;