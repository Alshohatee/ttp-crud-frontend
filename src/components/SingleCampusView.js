/* eslint-disable jsx-a11y/alt-text */
import NavBar from './NavBar'
import Axios from "axios"
import React, { useEffect, useState } from "react";
import CampusCard from './CampusCard'

// ○	[   ] see details about a single campus, including enrolled students (if any)
// ○	[   ] see an informative message if no students are enrolled at that campus
// ○	[   ] navigate to any student’s single student view 
// ○	[   ] delete the campus (and elegantly handle associated students)
// ○	[   ] edit campus information (including adding/removing students)
//     ■	[   ] with a validated form displaying real-time error messages
//     ■	[   ] which redirects back to the single campus view

export default function SingleCampusView() {
      const [campusesInfo, setCampusInfo] = useState([])
      const [isDelete, setIsDelete] = useState(false)

     useEffect(() => {
        const getId = window.location.href.split("/");
        const id  = getId[getId.length -1]

    async function fectchData(){
      const campusInfo = await Axios.get(`http://localhost:8080/api/campuses/${id}`)
      console.log("this", campusInfo)
      setCampusInfo(campusInfo.data)
      alert("help")
    }
    fectchData()
     
  },[]);

  function handleOnClick(){

    // DELETE request using axios with error handling
  Axios.delete(`http://localhost:8080/api/campuses/${campusesInfo.id}`)
        .then(response => setIsDelete(true))
        
        .catch(error => {
          setIsDelete(false)
            console.error('There was an error!', error);
        })
setCampusInfo([])
      }
      


    return (
        <div>
        <NavBar />
       {/* <img  src={campusesInfo.imageUrl} />
        <p> {campusesInfo.name}</p>
        <p> {campusesInfo.address}</p>
        <p> {campusesInfo.description}</p>
        <button onClick={()=> handleOnClick()}>
          Delete
        </button> */}

      <CampusCard  key={campusesInfo.id}  campus={[campusesInfo,true,handleOnClick ] } />
    { isDelete ? <h1> {campusesInfo.name} Deleted </h1> : null}

{/* studentsAtCampus will be render here  */}
            
        </div>
    )
}