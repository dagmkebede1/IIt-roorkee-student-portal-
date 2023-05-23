import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "./SignUp.css";
//* to import icons
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../components/Redux/Reducers/authSlice";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Ethiopia from "../../Images/countryFlags/Ethiopia_flag.png";

//* initializing dotenv
let server = `http://localhost:6500`;
let url = `${server}/user/register`;
// *for cookie
const cookies = new Cookies();
// *--------
const SignUp = () => {
  const [response, setresponse] = useState();
  //* for confirm password not pasting
  const [password, setPassword] = useState("");
  // **********icon part *********
  const [type, setType] = useState("password");
  //* to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);

  const [type1, setType1] = useState("password");
  const [icon1, setIcon1] = useState(eyeOff);

  const [userData, setUserData] = useState({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_password: "",
    user_Indian_number: "",
    user_department: "",
    user_study_section: "",
    user_whatsapp_number: "",
    Confirm_Password: "",
  });
  // *for navigation
  let navigate = useNavigate();

  // * let email validator for existences
  // console.log(emails)
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
  //* to change the icon when clicked
  const HandleIconChangee = () => {
    //* event listen for Password function
    if (type1 === "password") {
      setIcon1(eye);
      setType1("text");
    } else {
      setIcon1(eyeOff);
      setType1("password");
    }
  };

  //* for confirmation of password not to be pasted
  const handlePaste = (event) => {
    event.preventDefault();
    setPassword("");
  };
  // <input
  // required
  //   className="in11 mt-4"
  //   onChange={handleChange}
  //   name="Confirm_Password"
  //   autoComplete="new-password"
  //   type="password"
  //   onPaste={handlePaste}
  //   placeholder="Confirm Password"
  // />
  let dispatch = useDispatch();
  // const navigate = useNavigate()
  const formSubmitter = (e) => {
    e.preventDefault();
    if (userData.user_password === userData.Confirm_Password) {
      let userFile = {
        user_first_name: userData.user_first_name,
        user_last_name: userData.user_last_name,
        user_email: userData.user_email,
        user_password: userData.user_password,
        user_study_section: userData.user_study_section,
        user_Indian_number: userData.user_Indian_number,
        user_whatsapp_number: userData.user_whatsapp_number,
        user_department: userData.user_department,
      };
      axios({
        method: "post",
        url,
        data: userFile,
      })
        .then((data) => {
          setresponse(data.data);
          let token = data.data.token;
          cookies.set("token", token, {
            path: "/",
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          });
          dispatch(getUser());
          navigate("/dashbord");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setresponse({
        successMessage: "Passwords Doesn't Match",
        redirect: "/signup",
        message: "Click Here To Go Back To Signup  Page",
      });
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
          return { ...pre, user_password: e.target.value };
        });
        break;
      case "user_study_section":
        setUserData((pre) => {
          return { ...pre, user_study_section: e.target.value };
        });
        break;
      case "user_department":
        setUserData((pre) => {
          return { ...pre, user_department: e.target.value };
        });
        break;
      case "Confirm_Password":
        setUserData((pre) => {
          return { ...pre, Confirm_Password: e.target.value };
        });
        break;
      default:
        break;
    }
  };

  // ****************************
  if (response) {
    if (response?.redirect === "/dashbord") {
      navigate("/dashbord");
    } else {
      return (
        <div className="forSuccessPage">
          <h1 className="thankYou">{response.successMessage}</h1>
          <a className="thankYouAnch" href={response.redirect}>
            {response.message}
          </a>
        </div>
      );
    }
  } else {
    return (
      <div className="container-fluid sign_page">
        <div className="container d-md-flex mx-auto py-5 align-items-center">
          <div className="form_wrapper col-12 col-md-6 me-md-2 p-5 d-flex flex-column">
            <p className="p11">IITR Ethiopian Students Union</p>
            <p className="p22 lorem">
              Already have an account?
              <Link to="/login" className="a11">
                Sign in
              </Link>
            </p>
            <form onSubmit={formSubmitter}>
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

              <select
                required
                className="in11"
                onChange={handleChange}
                name="user_department"
                autoComplete="new-password"
                type="tel"
              >
                <option value="not selected">
                  Please select Your Department
                </option>
                <option value="Department of Earth Sciences">
                  Department of Earth Sciences
                </option>
                <option value="Department of Civil Engineering">
                  Department of Civil Engineering
                </option>
                <option value="Department of Computer Science and Engineering">
                  Department of Computer Science and Engineering
                </option>
                <option value="Department of Design">
                  Department of Design
                </option>
                <option value="Department of Applied Mathematics and Scientific Computing">
                  Department of Applied Mathematics and Scientific Computing
                </option>
                <option value="Department of Chemistry">
                  Department of Chemistry
                </option>
                <option value="Department of Architecture and Planning">
                  Department of Architecture and Planning
                </option>
                <option value="Department of Biosciences and Bioengineering">
                  Department of Biosciences and Bioengineering
                </option>
                <option value="Department of Chemical Engineering">
                  Department of Chemical Engineering
                </option>
                <option value="Department of Electrical Engineering">
                  Department of Electrical Engineering
                </option>
                <option value="Department of Humanities and Social Sciences">
                  Department of Humanities and Social Sciences
                </option>
                <option value="Department of Hydro and Renewable Energy">
                  Department of Hydro and Renewable Energy
                </option>
                <option value="Department of Hydrology">
                  Department of Hydrology
                </option>
                <option value="Department of Management Studies">
                  Department of Management Studies
                </option>
                <option value="Department of Mathematics">
                  Department of Mathematics
                </option>
                <option value="Department of Mechanical and Industrial Engineering">
                  Department of Mechanical and Industrial Engineering
                </option>
                <option value="Department of Metallurgical and Materials Engineering">
                  Department of Metallurgical and Materials Engineering
                </option>
                <option value="Department of Paper Technology">
                  Department of Paper Technology
                </option>
                <option value="Department of Physics">
                  Department of Physics
                </option>
                <option value="Department of Polymer and Process Engineering">
                  Department of Polymer and Process Engineering
                </option>
                <option value="Department of Water Resources Development and Management">
                  Department of Water Resources Development and Management
                </option>
                <option value="Department of Earthquake Engineering">
                  Department of Earthquake Engineering
                </option>
                <option value="Department of Electronics and Communication Engineering">
                  Department of Electronics and Communication Engineering
                </option>
              </select>
              <select
                required
                className="in11"
                onChange={handleChange}
                name="user_study_section"
                autoComplete="new-password"
                type="tel"
              >
                <option value="not selected">
                  Please select study section
                </option>
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
                type={type1}
                onPaste={handlePaste}
                placeholder="Confirm Password"
              />
              <span className="showHide ">
                <Icon icon={icon1} size={20} onClick={HandleIconChangee} />
              </span>

              <button className="btnSign">Agree and Join</button>
            </form>
            <p className="mt-md-5 mt-sm-5 text-center texttag">
              I agree to the
              <Link to="" className="a22">
                privacy policy
              </Link>
              and
              <Link to="" className="a22">
                terms of serivice.
              </Link>
            </p>
            <Link to="/login" className="a33 text-center">
              Already have an account?
            </Link>
          </div>
          <div className="SignupNote  col-12 col-md-6 ms-md-2  mt-sm-1">
            <p className="forTitle">David Rocastle Once Said...</p>
            <h1>Remember Who You Are, What you Are and Who you Represent! </h1>
            <img src={Ethiopia} alt="" />
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
