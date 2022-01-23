// Create a card to hold the student info
import React from "react";
import {Link }from "react-router-dom";
import {Card, Button} from 'react-bootstrap';

export default function StudentCard( {props} ) {

  console.log(props)
      const info = props[0]
    const showAll = props[1]
    const handleClick = props[2]
console.log("hello")
 
    return (
        <div>

             
<Card style={{ width: '18rem' , margin: '10px' , background: '#A0A0A0'}}>
<Card.Img variant="top" style={{ marginTop: '10px'}} src= {info.image? info.image :'https://picsum.photos/200'} />
  <Card.Body>
    <Card.Title> Student Name  {info.firstName } {info.lastName } </Card.Title>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     Email: {info.email }
     GPA: {info.gpa }
    </Card.Text>
     <Link to={'/studentsingleview/'+ info.id} >
                        
      <Button variant="primary"> view </Button>
    </Link> 
     {showAll&& (<button onClick={()=> handleClick()}>Delete </button>)}
  </Card.Body>
</Card>
            
        </div>
    )
}



// createdAt: "2022-01-22T03:48:57.278Z"
// email: "steph@gmail.com"
// firstName: "Steph"
// gpa: "3.59"
// id: 1
// image: ""
// lastName: "Guer"
// updatedAt: "2022-01-22T03:48:57.278Z"
// [[Prototype]]: Object
