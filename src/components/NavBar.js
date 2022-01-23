import React from 'react'
import { Link } from 'react-router-dom';

// Create a card to hold the campus info

export default function NavBar(  ) {
  
    
 
    return (
        <div className = {"nav"}>
           <Link to="/">
                 <button className ={"home"} >Home </button>
            </Link> 
           <Link to="/campusesview" >
                 <button className ={"campus"}> Campuses </button>
            </Link> 
            <Link to="/studentsview">
                 <button className ={"students"}> Students  </button>
            </Link> 
            
        </div>
    )
}