import loginC from "../controllers/loginC.js";
import express from 'express';

let loginRoute = express.Router();

loginRoute.post('/tologin',loginC)

export default loginRoute;

