import jwt from "jsonwebtoken"
import mysql from "mysql2"
import connectionInfo from '../server.js'

// *protect middleware : this middleware will run before all routing except signup and login
export const protect = (req, res, next)=>{

let tokenRecieved = req.cookies.token
let decodedEmail = jwt.verify(tokenRecieved,"IITadmin@524334")
let emailFinder = `SELECT * FROM userinfo WHERE user_email ="${decodedEmail.email}"`
connectionInfo.query(emailFinder,(err,result)=>{
        if(err){
            console.log(err.message)
        }else{
           if(result.length === 0){
            return res.json({
                successMessage:
                  "Your Are Not Logged In",
                  redirect: "/login",
                  message :"click here to go to login page",
              })
           }else{
            req.user = result[0]
               next()
           }
        }
})
}


// routes("/admin",protect, restrictTo([1]),manageControler)

// * restrictTo: will allow the access based on the user role
export const restrictTo = (...roles)=>{
    return (req, res, next)=>{
        let role = req.user.role
        if(roles.includes(role)){
            next()
        }else{
            return res.json({
                successMessage:
                  "Your Are Not Allowed To Access This Page",
                  redirect: "/dashboard",
                  message :"click here to go to Dash Board ",
              })
        }
    }
}

