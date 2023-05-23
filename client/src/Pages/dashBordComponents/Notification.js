import React from "react";
import image from "../../Images/photoCollections/jonson_white.png";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import "react-awesome-button/dist/styles.css";
import DshboradProps from "./DshboradProps.js";

function Notification() {
  return (
    <DshboradProps
      imageUrl={image}
      title=" Notifications!"
      subtitle="You can send notifications here"
      buttonLabel="Click To Send Notifications"
      url="/uploadNotification"
      buttonIcon={NotificationsActiveOutlinedIcon}
    />
  );
}

export default Notification;
