import React from "react";
import photo from "../../Images/photoCollections/aashish-singh-Cms-91q0FZM-unsplash.jpg";
import DshboradProps from "./DshboradProps";
import ContactsIcon from '@mui/icons-material/Contacts';
function StudentInformation() {
  return (
    <DshboradProps
       imageUrl={photo}
       title="Get Students Information"
       subtitle="Expand Your Networking!"
       url="/studentInfo"
       buttonLabel="Click for Student Info"
       buttonIcon={ContactsIcon}
  />
      );
};

export default StudentInformation