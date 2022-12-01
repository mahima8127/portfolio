import React from "react";
import { Container,Col, Row, Button } from "react-bootstrap";
import Map from "../assest/image/map.png";
import {FaMobileAlt,FaAddressCard} from 'react-icons/fa';
import{MdEmail} from 'react-icons/md';


export default function Contact() {
  return (
    <div id="contact" style={{background:'white'}}>
    <div style={{backgroundImage:`url(${Map})`, backgroundSize: 'cover',
    overflow: 'hidden',padding:'50px'}}>
        <Container className="p-4" style={{textAlign: "center",maxWidth:'800px',background:'white', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <h1 className="mt-2" style={{  fontWeight: "800" }}>Get a Quote</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!
      </p>
      <form >
        <div>
          <Container>
            <Row className="my-4">
           
              <Col><input className="form-control " name="name" type="text" placeholder="Name*" required />
              
              
              </Col>
              <Col><input className="form-control" name="Email" type="text" placeholder="Email*" required />
              </Col>
              
              </Row>
              <Row className="my-4">
              <Col><input className="form-control" name="Company Name" type="text" placeholder="Compane Name*" required />
              </Col>
              <Col><input className="form-control" name="Phonne" type="text" placeholder="Phone*" required />
              </Col>
              </Row>
              <Row className="my-4">
               
                <Col>
                <textarea className="form-control" name="message" placeholder="Enter Massege.."  required>

                </textarea>
                <Row className="my-4">
                    <Col>
                    <Button style={{textAlign:'center'}}>Send Message</Button>
                    </Col>
                </Row>
                </Col>
              </Row>
          </Container>
        </div>
      </form>
      
      
      </Container>
      <Container className="mt-5" style={{textAlign: "center",maxWidth:'800px'}}>
      <Row>
        <Col>< FaMobileAlt style={{color:'blue' ,fontSize:'40px' ,marginBottom:'15PX'}}/>
       <h5 style={{fontWeight:'700'}}>Call Us</h5>
       <p>(+91) 8127059975</p>
       <p> (+91) 7827585752</p>

        </Col>
        <Col>
        
        < MdEmail style={{color:'blue' ,fontSize:'40px' ,marginBottom:'15PX'}}/>
      
        <h5 style={{fontWeight:'700'}}>Email</h5>
       <p>saddhu6393@gmail.com</p>
       <p>sdisha5830@gmail.com</p>
        </Col>
        <Col>
        < FaAddressCard style={{color:'blue' ,fontSize:'40px' ,marginBottom:'15PX'}}/>
      
        <h5 style={{fontWeight:'700'}}>Address</h5>
       <p>PreetVihar</p>
       <p>Delhi, India</p>
        </Col>
        </Row>
        </Container>
    </div>
    </div>
  );
}
