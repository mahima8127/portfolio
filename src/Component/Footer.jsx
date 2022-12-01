import React from "react";
import {Row,Col, Container} from 'react-bootstrap';
import { FaFacebookF,FaTwitter,FaInstagram,FaBehance } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className="py-5"> 
       
        <Container>
           <Row>
    <Col >
    <h5 style={{fontWeight:'700'}}>RESUME</h5>
   
    <p style={{maxWidth: '350px'}}>'Fore' hosts a great set of highly creative unique element blocks to display your content in the most outstanding way possible. It's time to move out of the regular boxes.</p>
    
    </Col>
    <Col>
    <div style={{textAlign: 'right'}}>
<div >

    
    <FaFacebookF className="me-2"/>
    <FaTwitter className=" me-2"/>
    <FaInstagram className=" me-2"/>
    <FaBehance className=" me-2"/>
</div>
    <p>Copyright © 2022 Resume.</p>
    </div>
    </Col>
  </Row>
  </Container>

  </div>

  );
}
