import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Ccard from "./Ccard";
import Icon1 from "../assest/image/icon1.png";
import Icon2 from "../assest/image/icon2.png";
import Icon3 from "../assest/image/icon3.png";
import Icon4 from "../assest/image/icon4.png";

export default function Experience() {
  return (
    <>
      <div id="experience">
        <Container>
          <Row>
            <Col>
              <p>HAVING 8 YEARS EXPERIENCE</p>
              <h3 className="" style={{ fontWeight: "500" }}>
                Amazing experience with those companies
              </h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam
              </p>

              <p>
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
              <Button>Portfolio</Button>
            </Col>
            <Col>
              <Row>
                <Col>
              
             
                  <Ccard file={Icon1} title={"Themeforest"} year={'2016 - Present'}/>
                  
                </Col>
                <Col>
                  <Ccard file={Icon2} title={"Codecanyon"} year={'2015 - 2016'}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Ccard file={Icon3} title={"Audiojungle"} year={'2014 - 2015'}/>
                </Col>
                <Col>
                  <Ccard file={Icon4} title={"Graphicriver"} year={'2013 - 2014'}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
