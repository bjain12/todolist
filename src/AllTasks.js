import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import './AllTasks.css';
import { useState } from 'react';


function BasicExample() {
    return (

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic"> 
        Directories
        </Dropdown.Toggle>
  
        <Dropdown.Menu className='dropdown-menu'>
          <Dropdown.Item href="#/action-1" className='dropdown-1'> Main</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className='dropdown-2'> New</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
function AutoLayoutExample() {
  function Color() {
    let yellow = '#ffc800';
    const [bgColor, setBgColor] = useState(yellow);
     const changeColor =()=>{
        let purple = '#A020F0';
        setBgColor(purple);
      }
  }
    return (
      <Container className='container1'>
        
        <Row>
          
          <Col className='side-bar'>
          <div><h3 className='to-do'>TO-DO-LIST</h3>
          <button className='btn-task'>Add New Task</button>
          <ul className='list1'>
            <li className='list-item'  onClick={Color}> Today's Task</li>
            <li className='list-item'>All Tasks</li>
            <li className='list-item'>Important Tasks</li>
            <li className='list-item'>Completed Tasks</li>
            <li className='list-item'>Uncompleted Tasks</li>
            <li className='list-item'><BasicExample /></li>
          </ul>
            </div>
            
            </Col>
        </Row>
      </Container>
    );
  }
export default function AllTasks() {
  return (
    <div>
        <>
        <AutoLayoutExample />
        </>
    </div>
  )
}
