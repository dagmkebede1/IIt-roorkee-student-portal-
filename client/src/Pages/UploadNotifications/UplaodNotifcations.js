import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UploadNotificaitons.css";
import Button from "react-bootstrap/Button";
function UplaodNotifcations() {
  const [Response, setResponse] = useState();
  const [notificationData, setnotificationData] = useState({
    user_notification_message: "",
    date_of_notification: "",
  });

  // let token  = localStorage.getItem()

  const [userNotification, setuserNotification] = useState([]);
  let url = `http://localhost:6500/user/notification`;
  let url2 = `http://localhost:6500/user/getUserNotfication`;

  let submitHandler = (e) => {
    e.preventDefault();
    // let notificationMessage = new FormData()
    // notificationMessage.append("user_notification_message",notificationData.user_notification_message)
    // notificationMessage.append("date_of_notification",notificationData.date_of_notification)
    axios({
      method: "POST",
      data: notificationData,
      url,
      withCredentials: true,
    }).then((res) => {
      setResponse(res.data);
    });
    // to see formData content
    // for (let pair of notificationMessage.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);
    // }
  };

  async function usersNotificationD() {
    try {
      const responseForNotifications = await axios.get(url2);
      let converted = JSON.parse(JSON.stringify(responseForNotifications.data));
      setuserNotification(() => converted.data);
    } catch (err) {
      // console.log({ "its error": err });
    }
  }

  let handleChange = (e) => {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    switch (e.target.name) {
      case "user_notification_message":
        setnotificationData((pre) => {
          return {
            ...pre,
            user_notification_message: e.target.value,
            date_of_notification: dateString,
          };
        });
        break;
      default:
        break;
    }
  };
  //* For Delete
  function toDelete(id) {
    let deleteURL = `http://localhost:6500/user/deleteUserNotfication/${id}`;
    axios({
      method: "DELETE",
      url: deleteURL,
    });
  }

  useEffect(() => {
    usersNotificationD();
    console.log("use Effect in Notification running");
  }, []);

  if (Response) {
    return (
      <div className="forSuccessPage">
        <h1 className="thankYou">{Response.successMessage}</h1>
        <a className="thankYouAnch" href={`${Response.redirect}`}>
          {Response.message}
        </a>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="text-decoration-underline">Send Notification</h1>
        <form onSubmit={submitHandler} className="forForm mx-auto bg-warning">
          <textarea
            name="user_notification_message"
            id="textarea"
            maxLength="115"
            placeholder="please pass your notification here"
            onChange={handleChange}
          ></textarea>
          <div>
            <button className="notificationSumbit">Send Notification</button>
          </div>
        </form>
        <div className="toShowNotification">
          <hr />
          <h2 className="yn container">Posted Notifications By You</h2>
          {userNotification.map((data, i) => {
            let yourNotification = (
              <div
                key={i}
                className=" m-5 rounded border border-warning d-flex justify-content-around container mx-auto bg-white"
              >
                <h2 className="p-2">
                  <b>Your Notification</b> : {data.user_notification_message} |{" "}
                  <b>Notification Date</b> : {data.date_of_notification}{" "}
                </h2>
                <Button
                  onClick={() => toDelete(data.notification_id)}
                  variant="danger"
                >
                  Delete Notification
                </Button>
              </div>
            );
            return yourNotification;
          })}
        </div>
      </>
    );
  }
}

export default UplaodNotifcations;
