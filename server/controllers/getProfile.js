import connectionInfo from "../server.js"
import jwt from 'jsonwebtoken'
let getUserProfile = (req,res)=>{
let tokenFromFront = req.cookies.token
let {email,user_id} = jwt.verify(tokenFromFront,"IITadmin@524334")
console.log(user_id,email)
    let userProfile = `SELECT user_last_name,user_first_name,user_email_forProfile,user_Department,user_whatsapp_number,user_Indian_number,user_study_section,date_of_registration FROM userinfo WHERE userInfo_ID='${user_id}'`
    connectionInfo.query(userProfile,(err,data,field)=>{
       if(err){
        console.log(err)
       }else{
             res.json({
                data:data
                
             })
       }
    })

}

export default getUserProfile;