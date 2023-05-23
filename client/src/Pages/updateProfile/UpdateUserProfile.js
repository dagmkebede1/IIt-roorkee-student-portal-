import './UpdateUserProfile.css'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
//* to import icons
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Ethiopia from '../../Images/countryFlags/Ethiopia_flag.png'
//* initializing dotenv
let user_id = 2
let server = `http://localhost:6500`;
let url = `${server}/user/updateUserProfile/${user_id}`;
// *--------
const UpdateUserProfile = () => { 
  const [response, setresponse] = useState();  
  //* for confirm password not pasting
  const [password, setPassword] = useState('');
  // **********icon part *********
  const [type, setType] = useState("password");
  //* to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);
  const [userData, setUserData] = useState({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_password: "",
    user_Indian_number:"",
    user_study_section : "",
    user_whatsapp_number:"",
    Confirm_Password:""
  });

// * let email validator for existences 
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
    setPassword('');
  };

  const formSubmitter =  (e) => {
    e.preventDefault();
 if(userData.user_password === userData.Confirm_Password){
      let userFile = {
        user_first_name :userData.user_first_name,
        user_last_name:userData.user_last_name,
        user_email:userData.user_email,
        user_password:userData.user_password,
        user_study_section : userData.user_study_section,
        user_Indian_number:userData.user_Indian_number,
        user_whatsapp_number : userData.user_whatsapp_number
      }
      axios({
        method: "post",
        url,
        data: userFile,
      })
        .then((data) => {
        setresponse(data.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    }else{
    return  setresponse(
      {successMessage:"Passwords Doesn't Match",
        redirect : "/updateProfile",
        message:"Click Here To Try Again"
      }
        )
    }
  };
  // ******************************
  let handleChange = (e) => {
    switch (e.target.name) {
      case "user_last_name":
        setUserData((pre) => {
          return { ...pre, user_last_name: e.target.value };
        });
        break;
      case "user_first_name":
        setUserData((pre) => {
          return { ...pre, user_first_name: e.target.value };
        });
        break;
      case "user_email":
        setUserData((pre) => {
              return { ...pre, user_email: e.target.value };
        });
        break;
      case "user_whatsapp_number":
        setUserData((pre) => {
          return { ...pre, user_whatsapp_number: e.target.value };
        });
        break;
      case "user_Indian_number":
        setUserData((pre) => {
          return { ...pre, user_Indian_number: e.target.value };
        });
        break;
      case "user_password":
        setUserData((pre) => {
          return { ...pre,
             user_password: e.target.value };
        });
        break;
      case "user_study_section":
        setUserData((pre) => {
          return { ...pre,
            user_study_section: e.target.value };
        });
        break;
      case "Confirm_Password":
        setUserData((pre) => {
          return { ...pre,
            Confirm_Password: e.target.value };
        });
        break;
      default:
        break;
    }
  };

  // ****************************
  if (response) {
    return (
      <div className="forSuccessPage">
        <h1 className="thankYou">{response.successMessage}</h1>
        <a className="thankYouAnch" href={`${response.redirect}`}>
          {response.message}
        </a>
      </div>
    );
  } else {
    return (

          <div className="container forupdateP vh-100   my-1 form_wrapper col-12 col-md-6 d-flex flex-column ">
            <p className="p11">Update your profile</p>
            <form className='my-3 vh-75' onSubmit={formSubmitter}>
              <div className="FLname d-flex">
                <input
                required
                  className="in11 me-1"
                  autoComplete="new-password"
                  name="user_first_name"
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                />
                <input
                required
                  className="in11 ms-1"
                  name="user_last_name"
                  onChange={handleChange}
                  type="text"
                  autoComplete="new-password"
                  placeholder="Last Name"
                />
              </div>
              <input
              required
                className="in11 mr-1"
                name="user_email"
                autoComplete="new-password"
                onChange={handleChange}
                type="email"
                placeholder="Email"
              />
              <input
              required
                className="in11"
                onChange={handleChange}
                name="user_whatsapp_number"
                autoComplete="new-password"
                type="tel"
                placeholder="Insert Whatsapp Number start by +251...."
              />
              <input
              required
                className="in11"
                onChange={handleChange}
                name="user_Indian_number"
                autoComplete="new-password"
                type="tel"
                placeholder="Insert Indian Number start by +91..."
              />
              <select required
                className="in11"
                onChange={handleChange}
                name="user_study_section"
                autoComplete="new-password"
                type="tel"
                placeholder="phD , M-Tech , B-Tech....">
                <option value="not selected">Please select study section</option>
                <option value="Phd">Phd</option>
                <option value="MTech">M-Tech</option>
                <option value="BTech">B-Tech</option>
              </select>
              <input
              required
                className="in11"
                onChange={handleChange}
                name="user_password"
                autoComplete="new-password"
                type={type}
                placeholder="Password"
              />
              <span className="showHide ">
                <Icon icon={icon} size={20} onClick={HandleIconChange} />
              </span>
              <input
              required
                className="in11 mt-4"
                onChange={handleChange}
                name="Confirm_Password"
                autoComplete="new-password"
                type="password"
                onPaste={handlePaste}
                placeholder="Confirm Password"
              />
              <button className="btnSign">Update</button>
            </form>
          </div>
    );
  }
};

export default UpdateUserProfile;
