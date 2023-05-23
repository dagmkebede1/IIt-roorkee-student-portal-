import connectionInfo from "../server.js";
import bcrypt from "bcrypt";
let setNewPassWord = (req,res)=>{
    const {new_password_two,new_password_one,user_email_new_password} = req.body
    console.log(new_password_two,new_password_one,user_email_new_password)
    let passwordValidator =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(new_password_one === new_password_two){
        if(!passwordValidator.test(new_password_one)){
            res.send({
                successMessage:
                  "password should have at list 8 character,one upper case, one lower case, one number and one special character",
                redirect: "/signup",
                message :"click here to go to signup page"
              });
        }else{
          let salt =  bcrypt.genSaltSync();
          let hash_password =  bcrypt.hashSync(new_password_two,salt);
            let updatePasswordQuery = `UPDATE userInfo SET user_password='${hash_password}' WHERE user_email='${user_email_new_password}'`
            connectionInfo.query(updatePasswordQuery, (err, data, field) => {
                if (err) {
                  console.log(err);
                } else {
                  return res.send({
                    successMessage:`Password Updated Successfully!`,
                    redirect: "/login",
                    message :"click here to  logIn "
                  });
                }
              });
        }
    }

}

export default setNewPassWord