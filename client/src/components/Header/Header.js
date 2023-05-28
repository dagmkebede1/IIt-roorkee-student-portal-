import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../Images/logoIcon/IITR175.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { logout } from "../Redux/Reducers/authSlice";
import Cookies from "universal-cookie";

function Header() {
  const [display, setDisplay] = useState("Sign Up");
  const [route, setRoute] = useState("signup");

  const dispatch = useDispatch();
  let { isAuth } = useSelector((state) => state.auth);
  const cookie = new Cookies();

  function clickHandler() {
    if (display === "Sign Up") {
      setRoute("login");
      setDisplay("Log In");
    } else {
      setDisplay("Sign Up");
      setRoute("signup");
    }
  }
  useEffect(
    (e) => {
      if (e && e.preventDefault()) {
        clickHandler(e);
        console.log("its running again");
      }
    },
    [route, display]
  );
  const logoutHandler = (e) => {
    dispatch(logout());
    cookie.remove("token");
  };

  return (
    <div className="header container-fluid">
      <div className="innerContainer container d-flex justify-content-around ">
        <div className="header__image">
          <img src={logo} alt="IIT ROORKEE logo" />
        </div>
        <button className="ic d-sm-block d-md-none">☰</button>
        <div className="d-flex  innerContainer2 justify-content-between d-none d-md-block">
          <Link to="/">Home</Link>
          <Link to="https://acad.iitr.ac.in/Default.aspx?ReturnUrl=%2fStudent%2fDefault.aspx&AspxAutoDetectCookieSupport=1">
            IITR Portal
          </Link>
          <Link to="https://ir.iitr.ac.in/IR_Panel/">IR Portal</Link>
          <Link to="../../Resources/howToUse.pdf">How It Works</Link>
          <Link to="../../Resources/howToUse.pdf">Contribute</Link>

          <Link to={isAuth ? "/dashbord" : "/login"} className="loginHeader">
            {isAuth ? "Dashboard" : "Login"}
          </Link>
          {!isAuth && (
            <Link to={"/signup"}>
              <Button>SignUp</Button>
            </Link>
          )}
          {isAuth && (
            <Link>
              <Button onClick={logoutHandler}>Logout</Button>
            </Link>
          )}
          {/* <Link to ={`/${route}`} onClick={(e)=>clickHandler(e)} className='loginHeader'>{display}</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
