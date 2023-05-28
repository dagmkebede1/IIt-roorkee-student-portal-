import express from "express";
import setNewPassWord from "../controllers/setNewPassword.js";

let forNewPasswordUpdate = express.Router();

forNewPasswordUpdate.post("/setNewPassword", setNewPassWord);

export default forNewPasswordUpdate;
