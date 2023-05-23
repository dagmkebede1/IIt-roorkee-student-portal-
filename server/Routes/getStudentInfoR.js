import express from 'express';
import getStudentInfo from '../controllers/getStudentInfoC.js';

let getStudData = express.Router();

getStudData.get('/getStudentInfo',getStudentInfo)

export default getStudData