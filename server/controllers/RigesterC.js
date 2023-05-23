import bcrypt from "bcrypt";
import connectionInfo from "../server.js";
import jwt from 'jsonwebtoken'
let registerController = (req, res) => {
  const {
    user_first_name,
    user_last_name,
    user_email,
    user_department,
    user_whatsapp_number,
    user_Indian_number,
    user_study_section,
    user_password,
  } = req.body;
  try {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    let verifiedInfo = {
      verified_user_first_name: "",
      verified_user_last_name: "",
      verified_user_email: "",
      verified_user_whatsapp_number: "",
      verified_user_Indian_number: "",
      verified_user_password: "",
      user_study_section:"",
      verified_user_role: 0,
      verified_user_OTP:0,
      verified_user_status:'Active Account',
      verified_registration_date:dateString
    };
    //* user input triming to avoid spaces
    let trimed_user_first_name = user_first_name
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    let trimed_user_last_name = user_last_name
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    let trimed_user_email = user_email.toLowerCase().trim().replace(/\s/g, "");
    let trimed_user_whatsapp_number = user_whatsapp_number
      .toString()
      .trim()
      .replace(/\s/g, "");
    let trimed_user_Indian_number = user_Indian_number
      .toString()
      .trim()
      .replace(/\s/g, "");
    let trimed_user_study_section = user_study_section
      .toString()
      .trim()
      .replace(/\s/g, "");
    let trimed_user_password = user_password
      .toString()
      .trim()
      .replace(/\s/g, "");
    //!  validators
    //! nameValidator = name should have only text character
    let nameValidator = /^[A-Za-z\\s]+$/;
    //! passwordValidatior is for password to  have  at list 8 characters, one upper case, one lower case, one number, and one special character.
    let passwordValidator =
    /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
    //! emailValidator is for email to have email characters
    let emailValidator =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    //! numberOnly is for chacking the phone number to be number only
    let phoneNumberValidatorEthiopia = /^\+251\d{9}$/;
    let phoneNumberValidatorIndia = /^\+91\d{10}$/;
    //! validation


    if (
      trimed_user_first_name === "" ||
      trimed_user_last_name === "" ||
      trimed_user_email === "" ||
      trimed_user_whatsapp_number === "" ||
      trimed_user_Indian_number === "" ||
      trimed_user_password === "" ||
      trimed_user_study_section ===""
    ) {
      res.send({
        successMessage: "All Input Fields are Required To Be Filled",
        redirect: "/signup",
        message:"click here to go to signup page"
      });
    } else {
      if (
        !nameValidator.test(trimed_user_first_name) ||
        !nameValidator.test(trimed_user_last_name)  ||
        !nameValidator.test(trimed_user_study_section)
      ) {
        return res.send({
          successMessage: `Name should only contain Alphabets`,
          redirect: "/signup",
          message : "Click here to go to signup page"
        });
      } else {
        verifiedInfo = {
          ...verifiedInfo,
          verified_user_first_name: trimed_user_first_name,
          verified_user_last_name: trimed_user_last_name,
          verified_user_study_section : trimed_user_study_section
        }
        if (!emailValidator.test(trimed_user_email)) {
          return res.send({
            successMessage: "Invalid email",
            redirect: "/signup",
            message :"click here to go to signup page"
          });
        } else {
          connectionInfo.query(
            `SELECT * FROM userinfo WHERE user_email = '${trimed_user_email}'`,
            (err, data) => {
              if (err) {
                console.log(`ERROR: ${err.message}`);
              } else {
                if (data[0]) {
                  return res.send({
                    successMessage: "Email Already Exist",
                    redirect: "/login",
                    message:"Click here to go to login page"
                  });
                } else {
                  verifiedInfo = {
                    ...verifiedInfo,
                    verified_user_email: trimed_user_email,
                  };

          if (
            !phoneNumberValidatorIndia.test(trimed_user_Indian_number) ||
            !phoneNumberValidatorEthiopia.test(trimed_user_whatsapp_number)
          ) {
            return res.send({
              successMessage: "Invalid Phone Number",
              redirect: "/signup",
              message :"click here to go to signup page"
            });
          } else {
            let intValueOfIndianN = parseInt(trimed_user_Indian_number);
            let intValueOfEthiopianN = parseInt(trimed_user_whatsapp_number);
            verifiedInfo = {
              ...verifiedInfo,
              verified_user_Indian_number: intValueOfIndianN,
              verified_user_whatsapp_number: intValueOfEthiopianN,
            };
            if (!passwordValidator.test(trimed_user_password)) {
              res.send({
                successMessage:
                  "password should have at list 8 character,one upper case, one lower case, one number and one special character",
                redirect: "/signup",
                message :"click here to go to signup page"
              });
            } else {
              let salt =  bcrypt.genSaltSync();
              let hash_password =  bcrypt.hashSync(trimed_user_password, salt);
              verifiedInfo = {
                ...verifiedInfo,
                verified_user_password: hash_password,
              };
              let userInfo = `INSERT INTO userInfo (user_first_name,user_last_name,user_email,user_email_forProfile,user_Department,user_whatsapp_number,user_Indian_number,user_password,user_study_section,date_of_registration,user_role,user_OTP,user_status) VALUES (?) `;
              let Value = [
                verifiedInfo.verified_user_first_name,
                verifiedInfo.verified_user_last_name,
                verifiedInfo.verified_user_email,
                verifiedInfo.verified_user_email,
                user_department,
                verifiedInfo.verified_user_whatsapp_number,
                verifiedInfo.verified_user_Indian_number,
                verifiedInfo.verified_user_password,
                verifiedInfo.verified_user_study_section,
                verifiedInfo.verified_registration_date,
                verifiedInfo.verified_user_role,
                verifiedInfo.verified_user_OTP,
                verifiedInfo.verified_user_status
              ];
              connectionInfo.query(userInfo, [Value], (err, data, field) => {
                if (err) {
                  console.log(err);
                } else {
                  let tokenFromJwt = jwt.sign({email : verifiedInfo.verified_user_email,user_id:data.insertId}, "IITadmin@524334", {
                    expiresIn:"3d"
                })
                let token = tokenFromJwt
                  return res.json({
                    successMessage:
                      "Welcome Aboard!! You Can login By clicking The Button Below",
                      redirect: "/dashbord",
                      message :"click here to go to login page",
                      token:token,
                  });
                }
              });
            }
          }
                }
              }
            }
          );

        }
      }
  
    }
  } catch (error) {
    console.log(error);
  }
};

export default registerController;
