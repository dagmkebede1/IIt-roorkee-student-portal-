import React from "react";
import newresource from "../../Images/photoCollections/deepak-mehra-RxNXrrlSoOM-unsplash.jpg";
import "./DashBoard.css"
import {Link} from 'react-router-dom'
import { Container, Row, Col, Card} from "react-bootstrap";
function Resources() {
    const TestStyle = {
       opacity: 0.9,
      paddingBottom: 20,
      position: "absolute",
      top: 30,
      left: 0,
      width: "100%",
      height: "10%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", 
      borderRadius: 5,
      color: "white"
  };
  const Texts = {
    // backgroundColor: "gray",
    opacity: 0.8,
  paddingBottom: 20,
    position: "absolute",
  top: 70,
  left: 0,
  width: "100%",
  height: "10%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent overlay
  borderRadius: 5,
  color: "white"
  };
  return (
      <Container>
      <Row>
        <Col>
          <Card
            border="gray"
            className="mb-3 mb-md-0 border-bottom-0 rounded-top"
            style={{
              backgroundImage: `url(${newresource})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: 450,
              width: 390,
              borderRadius:30,
              borderWidth: 20,
            }}
          >
            <Card.Body>
              <br />
              <Card.Title className=" fs-4 rounded courseMaterial text bg-white text-black">Get uploaded Course materials</Card.Title>
              <br /><br/> <br/>
              <Card.Text  > 
                <div className="akafiOne">
              <Link to="/phdSectionDisplay" className='cardButton3' >Show PhD Resources</Link>
              <Link to="/mtechSectioDisplay" className='cardButton3' >Show M-Tech Resources</Link>
              <Link to="/btechSectionDisplay" className='cardButton3' >Show B-Tech Resources</Link>
            
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


);


}

export default Resources


