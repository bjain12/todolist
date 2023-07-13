import React from 'react';
import './Tasks.css';
import Card from 'react-bootstrap/Card';
import { useRef, useState } from 'react';

function DatePick(){
    const [date, setDate] = useState();
    console.log("Date", date)

    return (
        <> {date}
        <input type='date' onChange={e=>setDate(e.target.value)}/>
        </>
    )

}


function TextExample() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}
export default function Tasks() {
    return (
        <> 
        <TextExample />
        <DatePick />
        </>
        
  
       
      
    )

}
