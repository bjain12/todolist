import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AutoLayoutExample from './AllTasks';
import './Mainpage.css';
import MiddlepageTop from './MiddlepageTop';
import RightSidebar from './RightSidebar';
import Tasks from './Tasks';


function AutoLayoutSizingExample() {
  return (
    <Container>
      <Row>
        <Col className='sidebar'><div> <AutoLayoutExample /></div></Col>
        <Col><MiddlepageTop />
        <Row className='tasks'> 
            <Col> <Tasks /> </Col>
        </Row>
        </Col>
        <Col className='rightsidebar'><RightSidebar/></Col>
      </Row>
      
    </Container>
  );
}

export default function Mainpage() {
  return (
    <AutoLayoutSizingExample />
  )
}
