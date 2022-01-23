/* eslint-disable jsx-a11y/alt-text */

import NavBar from './NavBar'
import Axios from "axios"
import React, { useEffect, useState } from "react";
import StudentCard from './StudentCard'
// import StudentCard from './CampusCard'
 

export default function SingleStudentView() {
      const [studentInfo, setStudentInfo] = useState([])
      const [isDelete, setIsDelete] = useState(false)

     useEffect(() => {
        const getId = window.location.href.split("/");
        const id  = getId[getId.length -1]

    async function fectchData(){
      const studentInfoApi = await Axios.get(`http://localhost:8080/api/students/${id}`)
      console.log("this", studentInfoApi)
      setStudentInfo(studentInfoApi.data)
    }
    fectchData()
     
  },[]);

  function handleOnClick(){

    // DELETE request using axios with error handling
  Axios.delete(`http://localhost:8080/api/students/${studentInfo.id}`)
        .then(response => setIsDelete(true))
        
        .catch(error => {
          setIsDelete(false)
          
            console.error('There was an error!', error);
        })

      }
      console.log(studentInfo.imageUrl)


    return (
        <div>
        <NavBar />
        
        <StudentCard props = {[studentInfo, true, ()=> handleOnClick() ]}/>
       {/* <img  src={studentInfo.imageUrl} />
        <p> {studentInfo.firstName}</p>
        <p> {studentInfo.lastName}</p>
        <p> {studentInfo.email}</p>
        <p> {studentInfo.gpa}</p> */}
        {/* <button onClick={()=> handleOnClick()}>
          Delete
        </button> */}
    { isDelete ? <h1> {studentInfo.firstName} Deleted </h1> : null}

{/* studentsAtCampus will be render here  */}
            
        </div>
    )
}