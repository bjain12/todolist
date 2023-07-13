import React from 'react';
import './RightSidebar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function ContainerFluidExample() {
    return (
        <Container className='container2'>
            <Row>
                <Col className='hi-user'><h4>Hi, User!</h4></Col>
            </Row>
            <Row>
                <Col className='darkmode'>Darkmode</Col>
            </Row>
            <Row>
                <Col className='darkmode'>Tasks Today</Col>
            </Row>
            <Row>
                <Col className='darkmode'>All Tasks</Col>
            </Row>
            <Row>
                <Col className='darkmode'>Today's Tasks</Col>
            </Row>
        </Container>
    )
}

  

export default function RightSidebar(){
return (
   <ContainerFluidExample />

)

}