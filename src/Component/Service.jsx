import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SerCard from "./SerCard";
import {HiOutlineDesktopComputer,HiOutlineDeviceMobile,HiPencil,HiSpeakerphone,HiCamera,HiHeart} from 'react-icons/hi';
import Banner2 from "../assest/image/banner2.png";
export default function Service() {
  return (
    <div id="services" className="my-5 py-3" style={{background:'white'}}>
      <div className="my-5 py-3" style={{backgroundImage:`url(${Banner2})`, backgroundSize: 'cover',
        overflow: 'hidden',}}>
        <Container>
          <h1 style={{ textAlign: "center" }}>Services</h1>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!
          </p>
          <Row className="my-4">
            <Col>
            <SerCard icon={<HiOutlineDesktopComputer className="display-4 text-primary"/>} title="Web Design" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, facere voluptate. Quidem, facere voluptate."/>
    
            </Col>
            <Col>
            <SerCard icon={<HiOutlineDeviceMobile className="display-4 text-primary"/>} title="Responsive" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, facere voluptate. Quidem, facere voluptate."/>
              
            </Col>
            <Col>
            <SerCard icon={<HiPencil className="display-4 text-primary"/>} title="Branding" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, facere voluptate. Quidem, facere voluptate."/>
              
            </Col>
          </Row>
          <Row>
            <Col>
            <SerCard icon={<HiSpeakerphone className="display-4 text-primary"/>} title="Marketing" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, facere voluptate. Quidem, facere voluptate."/>
              
            </Col>
            <Col>
            <SerCard icon={<HiCamera className="display-4 text-primary"/>} title="Photography" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, facere voluptate. Quidem, facere voluptate."/>
              
            </Col>
            <Col>
            <SerCard icon={<HiHeart className="display-4 text-primary"/>} title="Customer Support" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, facere voluptate. Quidem, facere voluptate."/>
            
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
