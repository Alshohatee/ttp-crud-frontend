/* eslint-disable jsx-a11y/alt-text */

import NavBar from './NavBar'
import Axios from "axios"
import React, { useEffect, useState } from "react";
import StudentCard from './StudentCard'
import CampusCard from './CampusCard'
import { useLocation } from "react-router-dom"
// import StudentCard from './CampusCard'
 

export default function SingleStudentView() {
      const location = useLocation()
      const { id } = location.state
      const [studentInfo, setStudentInfo] = useState([])
      const [isDelete, setIsDelete] = useState(false)
      const [campus, setCampus] = useState([])
     

      useEffect(() => {
        

      console.log(id)
    async function fectchData(){
      //  /api/students/id/campus
      const {data} = await Axios.get(`http://localhost:8080/api/students/${id}/campus`)
      console.log(data)
      const {  student, campus } = data
      console.log(campus)
      setStudentInfo(student)
      setCampus(campus)
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
 


    return (
        <div>
        <NavBar />

        <StudentCard props = {[studentInfo, true, ()=> handleOnClick() ]}/>
     {console.log(campus)}
   
            { campus ?   <CampusCard key={campus.id}  campus={[ campus,true,handleOnClick ]} />  : <h1>There are no campuses currently for this student.</h1>}

      {/* studentsAtCampus will be render here  */}
              { isDelete ? <h1> {studentInfo.firstName} Deleted </h1> : null}
                  
        </div>
    )
}  