// Create a card to hold the student info
import React from "react";
import {Link }from "react-router-dom";

export default function StudentCard( {props} ) {
      const info = props[0]
    const showAll = props[1]
console.log("hello")
 
    return (
        <div>

         {info.image  && <img src={info.image} /> }
            <p>{info.firstName }</p>
            <p>{info.lastName }</p>
            <p>{info.email }</p>           
             <p>{info.gpa }</p>
            <Link to={'/studentsingleview/'+ info.id} >
                        view
            </Link>   
            
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
