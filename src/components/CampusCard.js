/* eslint-disable jsx-a11y/alt-text */

import React  from "react"
import {Link }from "react-router-dom";
import {Card, Button} from 'react-bootstrap';

// Create a card to hold the campus info
export default function CampusCard( props ) {
    console.log(props)
    const info = props.campus[0]
    const showAll = props.campus[1]
    const handleClick = props.campus[2]

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
        
            
            <p> Address: {info.address }</p>
            <p> Description: {info.description }</p>
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
                <Card.Img variant="top" style={{ marginTop: '10px'}} src= {info.imgUrl? info.image :'https://picsum.photos/200'} />
                <Card.Body>
                        <Card.Title> Campus Name  {info.name} </Card.Title>
                      
                        <Card.Text>
                        { !(info.description) ? <CardWithInfo /> : <CardLessInfo />}

                        </Card.Text>
                        {!showAll&& <Link
                            to={`/singlecampusview/${ info.id}`}
                            state={{ id: info.id }}>
                            <Button variant="primary"> view </Button> 
                        </Link> }

                        <Link
                            to={`/editcampus/${info.id}`}
                            state={{ id: info.id }}>
                            <Button variant="primary"> Update </Button> 
                        </Link>

                    
                        {showAll&& (<button onClick={()=> handleClick()}>Delete </button>)}
                </Card.Body>

            </Card> 
    
           
            
            
        </div>
    )
}