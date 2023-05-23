import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import logo from "../../Images/logoIcon/IITR175.png";
import DashboardMenu from "./DashboardMenu.js";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';
import Resources from "./Resources";
import ShopComponent from "./ShopComponent.js";
import StudentInformation from "./StudentInformation";
import Upload from "./Upload";
import Notification from './Notification'
import Departments from "./Departments";
import {Button} from 'react-bootstrap'
import Avatar from 'react-avatar';
import './DashBoard.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import {getUser} from '../../components/Redux/Reducers/authSlice'

//* import jwt from 'jsonwebtoken';

 function DashBord() {
const [notifications, setNotifications] = useState([])
const [organizer, setorganizer] = useState("")
// const [decodedToken, setDecodedToken] = useState(null);

const {user,isLoading} = useSelector((state)=>state.auth)
const dispatch = useDispatch()
// * for all notifications
let urlForAllNotification = `http://localhost:6500/user/getAllNotfication`
let collector = ''
useEffect(() => {
   axios({
    url:urlForAllNotification,
    method :'GET'
   }).then((response)=>{
    setNotifications(response.data.data)
   })

  { notifications.map((singleNotification,i)=>{
     collector = collector + ` Notification By: ${singleNotification.userInfo_ID} , Notification : ${singleNotification.user_notification_message} | `
     setorganizer(collector)
  })
  }
},[])

useEffect(() => {
  window.scrollTo(0, 0);
  // dispatch(getUser())
}, [])
if(isLoading){
  return <h1>Loading...</h1>
}else{

  return (
    <div>
     <div  className='forMarquee d-flex'>
      <marquee className="text-dark pt-1"  behavior="scroll"  loop="infinite"  direction="left">{organizer}</marquee>
    </div>
    <div className="col-12 fluid d-flex text-center  ">
      <section className='profileSection'>   
        <h3 className='text-center headerTitle m-3 '>Your Personal Profile</h3>
  {/* <Avatar className="avatar" color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="100" textSizeRatio={1} round={true} /> */}
        <ul className="userProfile">
          <li className=" m-5 ">{`Name:- ${user.user_first_name} ${user.user_last_name}`}</li>
          <li className=" m-5">{` Study Section:- ${user.user_study_section}`}</li>
          <li className=" m-5">{`Email:- ${user.user_email_forProfile}`}</li>
          <li className=" m-5">{`Whatsapp Number:- +${user.user_whatsapp_number}`}</li>
          <li className="m-5">{`Indian Number:- +${user.user_Indian_number}`}</li>
        </ul>
        <Link to="/updateProfile">
            <Button className="m-3" >Update Profile</Button>
        </Link>
        <Link to="/deleteProfile">
            <Button className='m-3 bg-danger' >Delete Profile</Button>
        </Link>
      </section>
    
      <section className=' container-fluid  my-1' style={{ backgroundColor: '#e0e0e0', }} >
      <div className='d-md-flex '  >
      <StudentInformation />
          <Upload />
          <ShopComponent />  
        </div>
    <div className='d-md-flex my-sm-3  ' >  
    <Notification />
    <Resources />
        <Departments /> 
       </div>
       </section>
    </div>
    </div>
  );
}
}

export default DashBord