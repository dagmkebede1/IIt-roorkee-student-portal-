import express from 'express'
import deleteProfieC from "../controllers/DeleteC.js";

let DeleteRoute = express.Router();
DeleteRoute.delete('/deleteUser/:id',deleteProfieC)

export default DeleteRoute;