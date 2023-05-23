import connectionInfo from "../server.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
let loginC = (req, res) => {
  const { user_email, user_password } = req.body;
  //    let userChecker = `SELECT user_email FROM userinfo WHERE user_email = ${user_email} `
  let userChecker = `SELECT user_email FROM userinfo`;
  let passWordChecker = `SELECT user_password,user_email,userInfo_ID,user_first_name,user_last_name,user_Department,user_whatsapp_number,user_Indian_number,user_study_section,user_role,user_status  FROM userinfo WHERE user_email = '${user_email}'`;
  //    let passWordChecker = `SELECT user_password FROM userinfo`
  connectionInfo.query(userChecker, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      if (result[0]) {
        let resultFilter = result.find(
          (item) => item.user_email === user_email
        );
        if (resultFilter === undefined) {
          return res.send({
            message: "No User By This Credential, Please SignUp First ",
            redirect: "/signup",
            confirmation: "false",
            redirectMessage: "Click Here To Signup",
          });
        } else {
          connectionInfo.query(passWordChecker, (err, result, fields) => {
            if (err) {
              console.log(err);
            } else {
              if (result) {
                let pass = bcrypt.compareSync(
                  user_password,
                  result[0].user_password
                );
                if (!pass) {
                  return res.send({
                    message: "Incorrect Password Try Again",
                    redirect: "/login",
                    confirmation: "false",
                    redirectMessage: "Click Here To Login",
                  });
                } else {
                  let tokenFromJwt = jwt.sign(
                    { email: user_email, user_id: result[0].userInfo_ID },
                    "IITadmin@524334",
                    {
                      expiresIn: "3d",
                    }
                  );

                  let token = tokenFromJwt;
                  return res.json({
                    message: "user email and password are correct",
                    redirect: "/dashbord",
                    confirmation: "true",
                    token: token,
                    userData: result,
                  });
                }
              }
            }
          });
        }
      }
    }
  });
};

export default loginC;

// res.send({
//     successMessage: `${user_email}`,
//     redirect: `${user_password}`,
//     message:" successfully logged in",
//     result : "true"

// })
