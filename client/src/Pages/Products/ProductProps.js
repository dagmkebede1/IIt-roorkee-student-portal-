
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img from '../../Images/Departments/Department of Chemistry.jpg'
function ProductProps(props) {
  const { name, description, imageUrl, ProductPrice, picture } = props;

  const mainStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    padding: "32px",
  };

  const imgContainerStyle = {
    borderRadius: "20px",
    overflow: "hidden",
    marginBottom: "24px",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "red",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };

  const detailsStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "32px",
    marginBottom: "24px",
  };

  const nameStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const priceStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FFA500",
    marginBottom: "24px",
  };

  const descriptionStyle
  = {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "24px",
    };
    
    const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    };
    
    const buttonStyle = {
    borderRadius: "8px",
    fontWeight: "bold",
    padding: "12px 24px",
    transition: "background-color 0.3s ease",
    };
    
    const updateButtonStyle = {
    backgroundColor: "#EAEAEA",
    color: "#000000",
    marginRight: "16px",
    border: "none",
    };
    
    const deleteButtonStyle = {
    backgroundColor: "#FF4136",
    color: "#FFFFFF",
    border: "none",
    };
    
    const handleImageHover = (e) => {
    e.target.style.transform = "scale(1.05)";
    };
    
    const handleImageLeave = (e) => {
    e.target.style.transform = "scale(1)";
    };
    
    return (
    <Container>
    <Card style={mainStyle}>
    <Row>
    <Col sm={12} md={6} lg={5}>
    <div style={imgContainerStyle}>
    <img
                 src={img}
                 alt={picture}
                 style={imgStyle}
                 onMouseOver={handleImageHover}
                 onMouseLeave={handleImageLeave}
               />
    </div>
    </Col>
    <Col sm={12} md={6} lg={7}>
    <div style={detailsStyle}>
    <div style={nameStyle}>{name}</div>
    <div style={priceStyle}>{ProductPrice}</div>
    <div style={descriptionStyle}>{description}</div>
    <div style={buttonContainerStyle}>
    <Button variant="light" style={{ ...buttonStyle, ...updateButtonStyle }}>
    Update
    </Button>
    <Button variant="danger" style={{ ...buttonStyle, ...deleteButtonStyle }}>
    Delete
    </Button>
    </div>
    </div>
    </Col>
    </Row>
    </Card>
    </Container>
    );
    }
    
    export default ProductProps;
    
    
    
    
  
    
