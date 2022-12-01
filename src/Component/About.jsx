import React from 'react'
import { Col, Container, Image, Row ,Button} from 'react-bootstrap'
import ab from '../assest/image/ab.png'


export default function About() {
  return (
    <div id="about" className='bg-white'>
        
        <Container className='my-5 py-5'>
            <Row >
            <Col style={{textAlign:'right'}}>
            <Image src={ab} style={{width:'85%'}}/>
            </Col>
            <Col className='mt-4'>
            <h1 style={{fontWeight:'700'}}>About Me</h1>
            <h5>I am a Full-Stack Web Developer</h5>
            <p style={{maxWidth:'550px'}}>Sed ut perspiciatis unde accusantium doloremque laudantium,totam rem aperiam.</p>
            <p style={{maxWidth:'550px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
            <hr></hr>
            <Row>
                <Col>
              <b style={{marginRight:'12px'}}>Name:</b><span>Mahima Singh</span>
                
                </Col>
                <Col>
                <b style={{marginRight:'12px'}}>Email:</b><span>saddhu6393@gmail.com</span>
                
                </Col>
            </Row>
            <Row className='my-3'>
                <Col>
              <b style={{marginRight:'12px'}}>Age:</b><span>20</span>
                
                </Col>
                <Col>
                <b style={{marginRight:'12px'}}>From:</b><span>Faizabad, Ayodhya</span>
                
                </Col>
            </Row>
            <div className="my-4">  
            <Button className="me-3">Resume</Button>
             <Button variant="dark" rounded >Experience</Button>
                </div>
            
            </Col>
            </Row>
        </Container>
    </div>
  )
}
