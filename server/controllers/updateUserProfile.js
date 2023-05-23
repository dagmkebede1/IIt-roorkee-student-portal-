import connectionInfo from '../server.js'
import bcrypt from 'bcrypt'
let updateUserProfile = (req, res) => {
    const { user_first_name, user_last_name, user_email, user_whatsapp_number, user_Indian_number, user_password, user_study_section} = req.body;
    //!  validators
    //! nameValidator = name should have only text character
    let nameValidator = /^[A-Za-z\\s]+$/;
    //! passwordValidatior is for password to  have  at list 8 characters, one upper case, one lower case, one number, and one special character.
    let passwordValidator =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?+=])[A-Za-z\d!@#$%^&*?+=]{8,}$/
    //! emailValidator is for email to have email characters
    let emailValidator =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    //! numberOnly is for chacking the phone number to be number only
    let phoneNumberValidatorEthiopia = /^\+251\d{9}$/;
    let phoneNumberValidatorIndia = /^\+91\d{10}$/;
    try {
        let verifiedUpdateInfo = {
            user_first_name_updated:"", 
            user_last_name_updated:"",
            user_email_updated:"", 
            user_whatsapp_number_updated:"",
            user_Indian_number_updated:"", 
            user_password_updated:"",
            user_study_section_updated:"",
            verified_user_role_updated: 0,
            verified_user_OTP_updated:0,
            verified_user_status:'active'
        }

    // * user input trimming to avoid unnecessary spaces 
                let user_first_name_updated_trimmed = user_first_name.toLowerCase().trim().replace(/\s/g, "");
                let user_last_name_updated_trimmed = user_last_name.toLowerCase().trim().replace(/\s/g, "");
                let user_email_updated_trimmed = user_email.toLowerCase().trim().replace(/\s/g, "");
                let user_whatsapp_number_updated_trimmed = user_whatsapp_number.toLowerCase().trim().replace(/\s/g, "");
                let user_Indian_number_updated_trimmed = user_Indian_number.toLowerCase().trim().replace(/\s/g, "");
                let user_password_updated_trimmed = user_password.trim().replace(/\s/g, "");
                let user_study_section_updated_trimmed = user_study_section.toLowerCase().trim().replace(/\s/g, "");  
      if(
        user_first_name_updated_trimmed ==="" || user_last_name_updated_trimmed==="" ||
        user_email_updated_trimmed===""||
        user_whatsapp_number_updated_trimmed ===""||
        user_Indian_number_updated_trimmed===""||
        user_password_updated_trimmed ===""||
        user_study_section_updated_trimmed===""
    ){
        res.send({
            successMessage: "All Input Fields are Required To Be Filled",
            redirect: "/dashbord",
            message : "Click Here To Try Again"
          });
    }else{
    
        if(
            !nameValidator.test(user_first_name_updated_trimmed) ||
            !nameValidator.test(user_last_name_updated_trimmed)  ||
            !nameValidator.test(user_study_section_updated_trimmed)
        ){

            return res.send({
                successMessage: `Name should only contain Alphabets`,
                redirect: "/dashbord",
                message : "Click Here To Try Again"
              });
        }else{
            verifiedUpdateInfo = {
                ...verifiedUpdateInfo,
                user_first_name_updated:user_first_name_updated_trimmed,
                user_last_name_updated : user_last_name_updated_trimmed,
                user_study_section_updated:user_study_section_updated_trimmed
            }
            if(!emailValidator.test(user_email_updated_trimmed)){
                return res.send({
                    successMessage: "Invalid Email",
                    redirect: "/dashbord",
                    message : "Click Here To Try Again"
                  });
            }else{
            verifiedUpdateInfo={
                ...verifiedUpdateInfo,
                user_email_updated : user_email_updated_trimmed
            }
              if(!phoneNumberValidatorIndia.test(user_Indian_number_updated_trimmed) || !phoneNumberValidatorEthiopia.test(user_whatsapp_number_updated_trimmed)){
                return res.send({
                    successMessage: "Invalid Phone Number",
                    redirect: "/dashbord",
                    message : "Click Here To Try Again"
                  });    
              }else{
                verifiedUpdateInfo = {
                    ...verifiedUpdateInfo,
                    user_Indian_number_updated :user_Indian_number_updated_trimmed,
                    user_whatsapp_number_updated:user_whatsapp_number_updated_trimmed
                }
                if(!passwordValidator.test(user_password_updated_trimmed)){
                    res.send({
                        successMessage:
                          "...password should have at list 8 character,one upper case, one lower case, one number and one special character",
                          redirect: "/dashbord",
                          message : "Click Here To Try Again"
                      });
                }else{
                    let salt =  bcrypt.genSaltSync();
                    let hash_password =  bcrypt.hashSync(user_password_updated_trimmed, salt);
                    verifiedUpdateInfo ={
                        ...verifiedUpdateInfo,
                        user_password_updated :hash_password
                    }
    const user_id = req.params.id
    let sqlQuery = `UPDATE userInfo SET user_first_name=?, user_last_name=?, user_email=?, user_whatsapp_number=?, user_indian_number=?, user_password=?, user_study_section=?, user_OTP=?, user_role=? ,user_status=? WHERE userInfo_ID=${user_id}`;

    let values = [user_first_name, user_last_name, user_email, user_whatsapp_number, user_Indian_number, user_password, user_study_section, 0, 0,'active'];

    connectionInfo.query(sqlQuery, values, (err, row, data) => {
        if (err) {
            res.status(500).send("Error updating profile");
        } else {
            res.status(200).send({
                successMessage: "Profile updated successfully",
                redirect:"/dashbord",
                message:"Click Here Go Back To Home Page"
            });
        }
    })
                }
              }
            }
        }
    }
    } catch (error) {
        console.log(error)
    };
};

export default updateUserProfile;





