/* eslint-disable jsx-a11y/alt-text */

import NavBar from './NavBar'
import Axios from "axios"
import React, { useEffect, useState } from "react";


 

export default function StudentSingleView() {
      const [studentInfo, setStudentInfo] = useState([])
     

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

  

    return (
        <div>
        <NavBar />
        hello
       <img  src={studentInfo.image} />
        <p> {studentInfo.firstName}</p>
        <p> {studentInfo.lastName}</p>
        <p> {studentInfo.email}</p>
        <p> {studentInfo.gpa}</p>
       

{/* studentsAtCampus will be render here  */}
            
        </div>
    )
}