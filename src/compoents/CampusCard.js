/* eslint-disable jsx-a11y/alt-text */

import React ,  { useState } from "react"
import {Link }from "react-router-dom";
import SingleCampusView from "./SingleCampusView";

// Create a card to hold the campus info
export default function CampusCard( {props} ) {
    const info = props[0]
    const showAll = props[1]
    

  function CardLessInfo(){
      return (
      <div>
        <img src={info.imageUrl } /> 
            <p>{info.name}</p>
            <p>{info.address }</p>
            <Link to={'/singlecampusview/'+ info.id} >
                        view
            </Link>        
      </div>)
  }
  function CardWithInfo(){
      return (
      <div>
        <img src={info.imageUrl } /> 
            <p>{info.name}</p>
            <p>{info.address }</p>
            <p>{info.description }</p>
            <Link to={'/singlecampusview/'+ info.id} >
                        view
            </Link>        
      </div>)
  }
    return (
        <div>
    
        { !(showAll.info) ? <CardLessInfo /> : <CardWithInfo />} 
           
            
            
        </div>
    )
}