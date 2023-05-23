import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { Card } from 'react-bootstrap'

import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import img1 from "../../Images/Departments/Department of Earth Sciences.jpg";
import img2 from "../../Images/Departments/Department of Civil Engineering.jpg"
import img3 from "../../Images/Departments/Department of Computer Science and Engineering.jpg";
import img4 from "../../Images/Departments/Department of Design.jpg";
import img5 from "../../Images/Departments/Department of Applied Mathematics and Scientific Computing.jpg"
import img6 from "../../Images/Departments/Department of Chemistry.jpg";
import img7 from "../../Images/Departments/Department of Architecture and Planning.jpg";
import img8 from "../../Images/Departments/Department of Biosciences and Bioengineering.jpg";
import img9 from "../../Images/Departments/Department of Chemical Engineering.jpg";
import img10 from "../../Images/Departments/Department of Electrical Engineering.jpg";
import img11 from "../../Images/Departments/Department of Humanities and Social Sciences.jpg";
import img12 from "../../Images/Departments/Department of Hydro and Renewable Energy.jpg";
import img13 from "../../Images/Departments/Department of Hydrology.jpg";
import img14 from "../../Images/Departments/Department of Management Studies.jpeg";
import img15 from "../../Images/Departments/Department of Mathematics.jpg";
import img16 from "../../Images/Departments/Department of Mechanical and Industrial Engineering.jpg";
import img17 from "../../Images/Departments/Department of Metallurgical and Materials Engineering.jpg";
import img18 from "../../Images/Departments/Department of Paper Technology.jpg";
import img19 from "../../Images/Departments/Department of Physics.jpg";
import img20 from "../../Images/Departments/Department of Polymer and Process Engineering.jpg";
import img21 from "../../Images/Departments/Department of Water Resources Development and Management.jpg";
import img22 from "../../Images/Departments/Department of Earthquake Engineering.jpg";
import img23 from "../../Images/Departments/Department of Electronics and Communication Engineering.jpg";


function Departments() {
  //images of departments
    const itemData = [
        {
          img: `${img1}`,
          title: "Earth Sciences",
          url: "https://iitr.ac.in/Departments/Earth%20Sciences%20Department/Home.html",
        },
        {
          img: `${img2}`,
          title: " Civil Engineering",
          url: "https://civil.iitr.ac.in/",
        },
        {
          img: `${img3}`,
          title: "Computer Science and Engineering",
          url: "https://iitr.ac.in/Departments/Computer%20Science%20and%20Engineering%20Department/index.html",
        },
        {
          img: `${img4}`,
          title: "Design",
          url: "https://iitr.ac.in/Departments/Department%20of%20Design/home%20page.html",
        },
        {
          img: `${img5}`,
          title: "Applied Mathematics and Scientific Computing",
          url: "https://iitr.ac.in/Departments/Applied%20Mathematics%20and%20Scientific%20Computing%20Department/Home%20Page.html",
        },
        {
          img: `${img6}`,
          title: "Chemistry",
          url: "https://iitr.ac.in/Departments/Chemistry%20Department/Home.html",
        },
        {
          img: `${img7}`,
          title: "Architecture and Planning",
          url: "https://iitr.ac.in/Departments/Architecture%20and%20Planning%20Department/index.html",
        },
        {
          img: `${img8}`,
          title: "Biosciences and Bioengineering",
          url: "https://iitr.ac.in/Departments/Biosciences%20and%20Bioengineering%20Department/home.html",
        },
        {
          img: `${img9}`,
          title: "Chemical Engineering",
          url: "https://iitr.ac.in/Departments/Chemical%20Engineering%20Department/Chemical%20Department.html",
        },
        {
          img: `${img10}`,
          title: "Electrical Engineering",
          url: "https://iitr.ac.in/Departments/Electrical%20Engineering%20Department/Home.html",
        },
        {
          img: `${img11}`,
          title: "Humanities and Social Sciences",
          url: "https://hs.iitr.ac.in/",
        },
        {
          img: `${img12}`,
          title: "Hydro and Renewable Energy",
          url: "https://iitr.ac.in/Departments/Hydro%20and%20Renewable%20Energy%20Department/Home.html",
        },
        {
          img: `${img13}`,
          title: "Hydrology",
          url: "https://iitr.ac.in/Departments/Hydrology%20Department/Home.html",
        },
        {
          img: `${img14}`,
          title: "Management Studies",
          url: "https://iitr.ac.in/Departments/Management%20Studies%20Department/index.html",
        },
        {
          img: `${img15}`,
          title: "Mathematics",
          url: "https://iitr.ac.in/Departments/Mathematics%20Department/Home.html",
        },
        {
          img: `${img16}`,
          title: "Mechanical and Industrial Engineering",
          url: "https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Home.html",
        },
        {
          img: `${img17}`,
          title: "Metallurgical and Materials Engineering",
          url: "https://iitr.ac.in/Departments/Metallurgical%20and%20Materials%20Engineering%20Department/Home.html",
        },
        {
          img: `${img18}`,
          title: "Paper Technology",
          url: "https://iitr.ac.in/Departments/Paper%20Technology%20Department/Home%20Page.html",
        },
        {
          img: `${img19}`,
          title: "Physics",
          url: "https://iitr.ac.in/Departments/Physics%20Department/Physics.html",
        },
        {
          img: `${img20}`,
          title: "Polymer and Process Engineering",
          url: "https://iitr.ac.in/Departments/Polymer%20and%20Process%20Engineering%20Department/Home.html",
        },
        {
          img: `${img21}`,
          title: "Water Resources Development and Management",
          url: "https://iitr.ac.in/Departments/Water%20Resources%20Development%20and%20Management%20Department/Home.html",
        },
        {
          img: `${img22}`,
          title: "Earthquake Engineering",
          url: "https://iitr.ac.in/Departments/Earthquake%20Department/Home.html",
        },
        {
          img: `${img23}`,
          title: "Electronics and Communication Engineering",
          url: "http://ece.iitr.ac.in/",
        },
      ];
    
      return (
        <div className="container " border="light">
          <Card border="gray"  className='mb-2 mb-md-0 border-bottom-0 rounded-top  'style={{
            height: 450,width: 430,  borderRadius: 30, borderWidth: 20 , 
          }}>
          <ImageList
            border="gray"
            className="border-bottom-0 rounded-bottom"
            
          >
            <ImageListItem cols={2}>
              <ListSubheader 
                component="div"
                className="fs-4 text-center text "
                sx={{ fontWeight: 700, color: "black" }}
              >
                Department Information
              </ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=300&fit=crop&auto=format`} //Resizes the image to fill the width and height dimensions and crops any excess image data to fit
                  alt={item.title}
                />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton style={{ color: "orange" }}>
                      <a href={item.url}>
                        <InfoIcon key={item.url} />
                      </a>
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
            </ImageList>
            </Card>
        </div>
      );
    }
    

export default Departments