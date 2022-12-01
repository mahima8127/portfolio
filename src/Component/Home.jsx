import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Profile from '../assest/image/Profile.png'
import Banner from '../assest/image/banner.jpg'

export default function Home() {
    
  return (
    <div id="home" style={{backgroundColor:'blue',
        
       
        backgroundImage: `linear-gradient(rgba(15,10,222,0.5), rgba(15,10,222,0.5)),url(${Banner})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        color:'white'
       
    }}>
      <Container>
        <Row className="my-5 py-5">
          <Col className="my-5">
            <p className="h4" >
              Hello, my name is{" "}
              <span className="h5"
                style={{
                  backgroundColor: "#262935",
                  padding: "4px 10px",
                  
                  color:'white'
                }}
              >
                Mahima Singh
              </span>
            </p>
            <h1 className="display-3" style={{fontWeight:'600'}}>I'm a Web Devloper</h1>
            <p className="h5 my-1 " style={{fontWeight:'400'}}>I'm a Full-Stack Web Developer with extensive experience for over 8 years. My expertise is to create and design Websites, Apps, Mockups and many more...</p>
           
           <div className="my-4">   <Button variant="light" rounded className="me-3">Portfolio</Button>
                <Button>Resume</Button></div>
          </Col>
          <Col style={{textAlgin:'center'}}>
                     <Image src={Profile} style={{height:'auto',width:'55%',margin: 'auto',
  display: 'block'}} />
                     
 
          </Col>
        </Row>
      </Container>
    </div>
  );
}
