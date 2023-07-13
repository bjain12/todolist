import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './MiddlepageTop.css';


function NavScrollExample() {
  return (
    <Container className='container3'>
      <Row>
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search task"
              className="search-task"
              aria-label="Search"
            />
            <Button className='search-btn'>Search</Button>
          </Form>
        </Col>
        <Col className='date'>
          {newdate}
        </Col>
        <Col className='icon'>
        <i class="fas fa-bell"></i>
        </Col>
        <Col className='button-new-task-col'>
        <button className='btn-add-new-task'>Add New task</button>
       
        </Col>
      </Row>
      <Row className='page-changing'>
        <div>All Tasks</div>
      </Row>
      <Row className='sort-by'>
        <div>Icons</div>

      </Row>
    </Container>

  );
}
const newdate = new Date().toLocaleDateString();

export default function Middlepage() {
  return (
    <NavScrollExample />
   
  )
}
