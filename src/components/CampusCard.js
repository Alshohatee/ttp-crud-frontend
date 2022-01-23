/* eslint-disable jsx-a11y/alt-text */

import React ,  { useState } from "react"
import {Link }from "react-router-dom";


// Create a card to hold the campus info
export default function CampusCard( props ) {

  function CardLessInfo(){
      return (
      <div>
        <img src={props.campus.image} />
            <p>{props.campus.name}</p>
            <p>{props.campus.address }</p>

          <Link
              to={`/singlecampusview/${props.id}`}
              state={{ id: props.id }}>
              View</Link>

          <Link
              to={`/editcampus/${props.id}`}
              state={{ id: props.id }}>
              Update</Link>
      </div>)
  }
  function CardWithInfo(){
      return (
      <div>
        <img src={props.campus.image } />
            <p>{props.campus.name}</p>
            <p>{props.campus.address }</p>
            <p>{props.campus.description }</p>
          <Link
              to={`/singlecampusview/${props.id}`}
              state={{ id: props.id }}>
              View</Link>

          <Link
              to={`/editcampus/${props.id}`}
              state={{ id: props.id }}>
              Update</Link>
      </div>)
  }
    return (
        <div>
    
        { !(props.campus.description) ? <CardWithInfo /> : <CardLessInfo />}
           
            
            
        </div>
    )
}