import React from 'react'
import { Link } from 'react-router-dom';


// Create a card to hold the campus info

export default function NavBar(  ) {
  
    
 
    return (
        <div>
           <Link to="/">
                 <button>Home </button>
            </Link> 
           <Link to="/campusesview">
                 <button>Campuses </button>
            </Link> 
            <Link to="/studentsview">
                 <button>students  </button>
            </Link> 
            
        </div>
    )
}