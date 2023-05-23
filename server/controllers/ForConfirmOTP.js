import connectionInfo from "../server.js";

let OTP_confirming = (req,res)=>{
const {OTP,email_OTP} = req.body;
console.log("email from front end"+ email_OTP)
let emailChecker = 'SELECT user_email FROM userinfo'
let otpChecker = `SELECT user_OTP FROM userinfo WHERE user_email = '${email_OTP}'`
connectionInfo.query(emailChecker,(err,result,fields)=>{
    if(err){
        console.log(err)
    }else{
        if(result){
            let EmailChecker = result.find((emails)=>{
                return emails.user_email === email_OTP})
            if(EmailChecker === undefined){
                return res.send({
                    message: "This Email Is Not The Email Which OTP Is Sent To",
                    redirect: "/signup",
                    confirmation: "false",
                     redirectMessage :"Click Here To Signup"
                  });
            }else{
               connectionInfo.query(otpChecker,(err,otp_result,fields)=>{
                 if(err){
                    console.log(err)
                 }else{
                    if(otp_result[0].user_OTP===OTP){
                        return res.send({
                            message: "Both OTP are equal",
                            redirect: "/newPassword",
                            confirmation: "true",
                          });
                    }else{
                        return res.send({
                            message: "WRONG OTP Please Try Again",
                            redirect: "/login",
                            confirmation: "false",
                             redirectMessage :"Click Here For LogIn Page"
                          });
                    }
                
                 }
               })
            }
        }
    }

})
}








export default OTP_confirming