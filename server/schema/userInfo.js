import connectionInfo from "../server.js";
let userInfo = `CREATE TABLE if not exists userInfo(
    userInfo_ID int auto_increment,
    user_first_name varchar(255) not null,
    user_last_name varchar(255) not null,
    user_email varchar(255) not null,
    user_email_forProfile varchar(255) not null,
    user_Department text not null, 
    user_whatsapp_number varchar(255) not null,
    user_Indian_number varchar(255) not null,
    user_password varchar(255) not null,
    user_study_section varchar(255) not null,
    date_of_registration varchar(255) not null,
    user_OTP varchar(255),
    user_role varchar(255),
    user_status varchar(255),
    PRIMARY KEY (userInfo_ID)
    )`;
let userProfile = `CREATE TABLE if not exists userProfile(
    user_profile_id int auto_increment,
    userInfo_ID int,
    user_first_name varchar(255) not null,
    user_last_name varchar(255) not null,
    user_email varchar(255) not null,
    user_email_forProfile varchar(255) not null,
    user_whatsapp_number varchar(255) not null,
    user_Indian_number varchar(255) not null,
    user_study_section varchar(255) not null,
    PRIMARY KEY (user_profile_id)
    )`;
let notificationTable = `CREATE TABLE if not exists notifications(
    notification_id int auto_increment,
    userInfo_ID int,
    user_notification_message text not null,
    date_of_notification varchar(255) not null,
    PRIMARY KEY (notification_id)
    )`;

let buyOrSellTable = `CREATE TABLE if not exists market(
    item_id int auto_increment,
    userInfo_ID int,
    item_name text not null,
    item_price text not null,
    item_description text not null,
    item_photo varchar(255) not null,
    status_check text not null,
    date_of_notification varchar(255) not null,
    PRIMARY KEY (item_id)
    )`;
let educationalDocument = `CREATE TABLE if not exists educationalDocument(
    Document_id int auto_increment,
    userInfo_ID int,
    Section text not null,
    Department text not null,  
    Document_type text not null,
    Course_Code varchar(255) not null,
    Course_name text not null,
    Course_given_by TEXT not null,
    Document_path TEXT not null,
    Document text not null,
    Date_of_file_upload varchar(255) not null,
    PRIMARY KEY (Document_id)
    )`;

let tableCreator = (req, res) => {
  connectionInfo.query(userInfo, (err) => {
    if (err) {
      console.log(err);
    }
  });
  connectionInfo.query(notificationTable, (err) => {
    if (err) {
      console.log(err);
    }
  });
  connectionInfo.query(buyOrSellTable, (err) => {
    if (err) {
      console.log(err);
    }
  });
  connectionInfo.query(educationalDocument, (err) => {
    if (err) {
      console.log(err);
    }
  });
  connectionInfo.query(userProfile, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("all tables created");
};

export default tableCreator;
