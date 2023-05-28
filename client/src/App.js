import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Login from "./Pages/LoginPage/Login.js";
import SignUp from "./Pages/SignupPage/SignUp.js";
import ForgotPassword from "./Pages/ForgotPasword/ForgotPassword.js";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.js";
import ForNewPassword from "./Pages/NewPassword/NewPassword.js";
import NewPassword from "./Pages/NewPassword/NewPassword.js";

import ToUploadForPhd from "./Pages/PhdSectionFileUpload/PhdSectionFileUpload.js";
import ToUploadForMtech from "./Pages/MtechSecitonFileUpload/MtechSecitonFileUpload.js";
import ToUploadForBTech from "./Pages/BtechSectionFileUpload/BtechSectionFileUpload.js";

import ToDisplayForBTech from "./Pages/BtechSectionFileDisplay/BtechSectionFileDisplay.js";
import ToDisplayForPhd from "./Pages/PhdSecitonFileDisplay/PhdSecitonFileDisplay.js";
import ToDisplayMtech from "./Pages/MtechSecitonFileDisplay/MtechSecitonFileDisplay.js";

import BuyOrSell from "./Pages/Products/BuyOrSell.js";
import DashBord from "./Pages/dashBordComponents/DashBoard.js";
import UpdateUserProfile from "./Pages/updateProfile/UpdateUserProfile.js";
import DeleteUserPage from "./Pages/DeleteUserProfile/DeletePage.js";
import UplaodNotifcations from "./Pages/UploadNotifications/UplaodNotifcations";
import StudentInfo from "./Pages/StudentInfo/StudentInfo";
import SellingGoods from "./Pages/uplaodSellGoods/UploadSellGoods.js";
import YemishetuCollection from "./Pages/EkaZirzir/YemishetuCollection.jsx";
import Otp from "./Pages/OTP/Otp";
import PotectRoute from "./components/Protect/PotectRoute";
import { axiosInstance } from "./Utility/axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/Redux/Reducers/authSlice";
function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/home" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgotPass" element={<ForgotPassword />} />
          <Route exact path="/forgotPass/:email" element={<Otp />} />
          <Route exact path="/ForNewPasswordOTP" element={<ForNewPassword />} />
          <Route exact path="/setNewPassword" element={<NewPassword />} />
          <Route
            exact
            path="/btechSectionUpload"
            element={<ToUploadForBTech />}
          />
          <Route
            exact
            path="/mtechSectioUpload"
            element={<ToUploadForMtech />}
          />
          <Route exact path="/phdSectionUpload" element={<ToUploadForPhd />} />
          <Route
            exact
            path="/btechSectionDisplay"
            element={<ToDisplayForBTech />}
          />
          <Route
            exact
            path="/mtechSectioDisplay"
            element={<ToDisplayMtech />}
          />
          <Route
            exact
            path="/phdSectionDisplay"
            element={<ToDisplayForPhd />}
          />
          <Route exact path="/buyorsell" element={<BuyOrSell />} />
          <Route
            exact
            path="/dashbord"
            element={
              <PotectRoute>
                <DashBord />
              </PotectRoute>
            }
          />
          <Route exact path="/updateProfile" element={<UpdateUserProfile />} />
          <Route exact path="/deleteProfile" element={<DeleteUserPage />} />
          <Route
            exact
            path="/uploadNotification"
            element={<UplaodNotifcations />}
          />
          <Route exact path="/studentInfo" element={<StudentInfo />} />
          <Route exact path="/buyGoods" element={<YemishetuCollection />} />
          <Route exact path="/sellGoods" element={<SellingGoods />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
