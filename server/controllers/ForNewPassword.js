import connectionInfo from "../server.js";
import nodemailer from "nodemailer";
import JWT from "jsonwebtoken";

let correctPassword = (req, res) => {
  const { user_email_for_Password } = req.body;
  // const { EncrypedEmail } = req.body;
  // console.log(req.body);
  // let emailDecoded = JWT.verify(EncrypedEmail, "IITPasswordEncrypted");

  let emailChecker = "SELECT user_email FROM userinfo";
  let forOTP = `UPDATE userinfo SET user_OTP = (?)  WHERE user_email='${user_email_for_Password}'`;

  connectionInfo.query(emailChecker, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      if (result) {
        let emailFinder = result.find(
          (email) => email.user_email === user_email_for_Password
        );
        if (emailFinder == undefined) {
          res.send({
            message: "Email doesn't Exist",
            redirect: "/signup",
            confirmation: false,
            redirectMessage: "Click Here To Signup",
          });
        } else {
          function sendEmail() {
            let mailSender = nodemailer.createTransport({
              service: "gmail",
              port: 465,
              auth: {
                user: "red.terefe@gmail.com",
                pass: "cvuvlniuqsjgmdbc",
              },
            });
            function generateOTP() {
              let digits = "0123456789";
              let OTP = "";
              for (let i = 0; i < 4; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
              }
              connectionInfo.query(forOTP, [OTP], (err, result, fields) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("OTP sent to DB");
                }
              });
              return OTP;
            }
            let OTP = generateOTP();
            let details = {
              from: "red.terefe@gmail.com",
              to: user_email_for_Password,
              subject: "Your OTP for Changing Password",
              text: `Please Dont share this number, Your OTP for Password Change is : ${OTP}`,
            };
            mailSender.sendMail(details, (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("email sent");
              }
            });
          }
          sendEmail();

          let emailEncrypted = JWT.sign(
            user_email_for_Password,
            "IITPasswordEncrypted"
          );

          res.send({
            forThanking: `Please Check Your Email for OTP!`,
            Status: true,
            Encrypt: emailEncrypted,
            // email:user_email_for_Password,
            forHomePageReturn: `Click Here To Go Back To Home Page`,
          });
        }
      }
    }
  });
};

export default correctPassword;
