/* eslint-disable jsx-a11y/alt-text */

import React ,  { useState } from "react"
import {Link }from "react-router-dom";
import {Card, Button} from 'react-bootstrap';

// Create a card to hold the campus info
export default function CampusCard( props ) {
    const { id, name, address, image, description } = props.campus
    // const showAll = props.campus[1]
    // const handleClick = props.campus[2]
    console.log(id)
  function CardLessInfo(){
      return (
      <div>
        {/* <img src={props.campus.image} />
            <p>{props.campus.name}</p>
            <p>{props.campus.address }</p>

          <Link
              to={`/singlecampusview/${props.id}`}
              state={{ id: props.id }}>
              View</Link>

          <Link
              to={`/editcampus/${props.id}`}
              state={{ id: props.id }}>
              Update</Link> */}
      </div>)
  }
  function CardWithInfo(){
      return (
      <div>
        
            
            <p> Address: {address }</p>
            <p> Description: {description }</p>
          {/* <Link
              to={`/singlecampusview/${props.id}`}
              state={{ id: props.id }}>
              View</Link> */}

          {/* <Link
              to={`/editcampus/${props.id}`}
              state={{ id: props.id }}>
              Update</Link> */}
      </div>)
  }
    return (
        <div>
            <Card style={{ width: '18rem' , margin: '10px' , background: '#A0A0A0'}}>
                <Card.Img variant="top" style={{ marginTop: '10px'}} src= {image? image :'https://picsum.photos/200'} />
                <Card.Body>
                        <Card.Title> Campus Name {name} </Card.Title>
                      
                        <Card.Text>
                        { !(description) ? <CardWithInfo /> : <CardLessInfo />}

                        </Card.Text>
                         <Link
                            to={`/singlecampusview/${id}`}
                            state={{ id }}>
                            <Button variant="primary"> view </Button> 
                        </Link>

                        <Link
                            to={`/editcampus/${id}`}
                            state={{ id }}>
                            <Button variant="primary"> Update </Button> 
                        </Link>

                    
                        {/*<button onClick={()=> handleClick()}>Delete </button>*/}
                </Card.Body>

            </Card> 
    
           
            
            
        </div>
    )
}