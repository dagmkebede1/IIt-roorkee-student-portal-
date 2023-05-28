import React, { useState, useContext } from "react";
import axios from "axios";
import NewPassword from "../NewPassword/NewPassword.js";
import { userEmail } from "../ForgotPasword/ForgotPassword.js";
import { Link, useParams } from "react-router-dom";
import Cookie from "universal-cookie";
export const emailForNewPass = React.createContext();
function Otp() {
  const { email } = useParams();

  const EncrypedEmail = email;

  // let email_OTP = useContext(userEmail);

  // let cookie = new Cookie();
  // let email = cookie.get("email");

  const [forOtp, setForOTP] = useState({
    OTP: "",
    EncrypedEmail,
  });
  const [response, setresponse] = useState();
  let urlOfOTP = "http://localhost:6500/user/ForNewPasswordOTP";
  let OTPset = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: urlOfOTP,
      data: forOtp,
    }).then((res) => {
      setresponse(res.data);
    });
  };

  let handelChangeOTP = (e) => {
    switch (e.target.name) {
      // case "email_OTP":
      //   setForOTP((pre) => {
      //     return {...pre,email_OTP: e.target.value };
      //   });
      //   break;
      case "OTP":
        setForOTP((pre) => {
          return { ...pre, OTP: e.target.value };
        });
        break;
      default:
        break;
    }
  };

  if (response) {
    if (response.confirmation === "true") {
      return (
        <emailForNewPass.Provider value={forOtp.email_OTP}>
          <NewPassword />
        </emailForNewPass.Provider>
      );

      // return <h1>hi</h1>
    } else {
      return (
        <div className="forSuccessPage">
          <h1 className="thankYou">{response.message}</h1>
          <Link className="thankYouAnch" href={`${response.redirect}`}>
            {response.redirectMessage}
          </Link>
        </div>
      );
    }
  } else {
    return (
      <div className="container-fluid login_page">
        <div className="container py-5 d-md-flex justify-content-between login_container">
          <div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
            <p className="p1">Please Pass OTP?</p>
            {/* <p className="p1">{response.forThanking}</p> */}
            <form onSubmit={OTPset}>
              {/* <input className="in1" type="email" name="email_OTP"  placeholder="Your email here...." required autoComplete="new-password" onChange={handelChangeOTP}/> */}
              <input
                className="in1"
                type="text"
                name="OTP"
                placeholder="Please pass your four digit OTP here..."
                required
                autoComplete="new-password"
                onChange={handelChangeOTP}
              />
              <button className="btn1">Submit OTP</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Otp;
