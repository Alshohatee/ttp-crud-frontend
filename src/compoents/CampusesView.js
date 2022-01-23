// import CampusCard from './CampusCard'
// view all campuses here

// - [ ] Write a component to display a list of all campuses (just their names and images)
import React, { useEffect, useState } from "react";
import Axios from "axios"
import CampusCard from "./CampusCard";
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

// here is where all campuses will be render
export default function CampusesView( props ) {
    // use hooks to store campuses list from pros
    // pass the info from  campuses array to campus compoent
    const [campuses, setCampuses] = useState([])

 

   useEffect(() => {
    async function fectchData(){
      const allCampuses = await Axios.get(`http://localhost:8080/api/campuses`)
      console.log("this", allCampuses)
      setCampuses(allCampuses.data)
    }
    fectchData()
      // console.log("this", allCampuses)
  },[]);

    return (
        <div>
          <NavBar />
          <h1>Campuses</h1>
           <Link to="/createcampus" >
                 <button> Create a campus </button>
            </Link> 
            
          { campuses.length !== 0 ?    campuses.map(campus => <CampusCard key={campus.id} props={[campus,false]} />) :
          <h2> No Campuses </h2>}
              
        </div>
    )
}







