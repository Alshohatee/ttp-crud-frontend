// Create a card to hold the student info
import React from "react";
export default function StudentCard( {props} ) {
  

 
    return (
        <div style={{backgroundColor:'red'}}>
         {props.image  && <img src={props.image } /> }
            <p>{props.firstName }</p>
            <p>{props.lastName }</p>
            <p>{props.email }</p>           
             <p>{props.gpa }</p>
            
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
