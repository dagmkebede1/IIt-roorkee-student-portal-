import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PotectRoute({ children }) {
  let navigate = useNavigate();
  let { isAuth } = useSelector((state) => state.auth);

  console.log(isAuth);

  if (isAuth) {
    return children;
  } else {
    return navigate("/login");
  }
}

export default PotectRoute;
