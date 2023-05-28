import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./NewPssword.css";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Icon } from "react-icons-kit";
// import {emailForNewPass} from '../OTP/Otp.js'

function NewPassword() {
  // let emailToPass = useContext(emailForNewPass);
  const [emailResponse, setemailResponse] = useState();
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");

  const { email } = useParams();
  const EncrypedEmail = email;

  const [newEmail, setNewEmail] = useState({
    new_password_one: "",
    new_password_two: "",
    EncrypedEmail,
  });

  let newPass = (e) => {
    e.preventDefault();
    if (newEmail.new_password_one === newEmail.new_password_two) {
      let url = "http://localhost:6500/user/setNewPassword";
      axios({
        method: "post",
        url,
        data: newEmail,
      })
        .then((data) => {
          console.log(data);
          console.log(newEmail);
          setemailResponse(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setemailResponse({
        successMessage: "Passwords Doesn't Match Please Try Again",
        redirect: "/logIn",
        message: "Click Here To Go Back To LogIn  Page",
      });
    }
  };

  //* to change the icon when clicked
  const HandleIconChange = () => {
    //* event listen for Password function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  //* for confirmation of password not to be pasted
  const handlePaste = (event) => {
    event.preventDefault();
    setPassword("");
  };
  let handle_change = (e) => {
    switch (e.target.name) {
      case "new_password_one":
        setNewEmail((pre) => {
          return { ...pre, new_password_one: e.target.value };
        });
        break;
      case "new_password_two":
        setNewEmail((pre) => {
          return { ...pre, new_password_two: e.target.value };
        });
        break;
      default:
        break;
    }
  };

  if (emailResponse) {
    return (
      <div className="forSuccessPage">
        <h1 className="thankYou">{emailResponse.successMessage}</h1>
        <a className="thankYouAnch" href={`${emailResponse.redirect}`}>
          {emailResponse.message}
        </a>
      </div>
    );
  } else {
    return (
      <div className="container-fluid login_page">
        <div className="container py-5 d-md-flex justify-content-between login_container">
          <div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
            <p className="p1">Update Password</p>
            <p className="p2 text-center">
              You Want To LogIn?
              <Link to="/login" className="a3">
                {" "}
                Click Here To LogIn
              </Link>
            </p>
            <form onSubmit={newPass}>
              {/* <input className="in1" type="email" name="user_email_new_password"  placeholder="your email here" required autoComplete="new-password" onChange={handle_change} /> */}
              <input
                className="in1"
                type={type}
                name="new_password_one"
                placeholder="New Password"
                required
                autoComplete="new-password"
                onChange={handle_change}
              />
              <span className="showHide ">
                <Icon icon={icon} size={20} onClick={HandleIconChange} />
              </span>
              <input
                className="in111"
                type={type}
                onPaste={handlePaste}
                name="new_password_two"
                placeholder="Confirm Password"
                required
                autoComplete="new-password"
                onChange={handle_change}
              />
              <span className="showHide "></span>
              <button className="btn1">Update Password</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPassword;
