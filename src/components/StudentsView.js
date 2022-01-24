import React, { useEffect, useState } from "react";
import Axios from "axios"
import StudentCard from './StudentCard'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'


export default function StudentsView( props ) {
    // use hooks to store students list from pros
    // pass the info from  students array to student compoent
    const [students, setStuents] = useState([])




   useEffect(() => {
    async function fectchData(){
      const allStudents = await Axios.get(`http://localhost:8080/api/students`)
      console.log("this", allStudents)
      setStuents(allStudents.data)
    }
    fectchData()
      console.log("this", students)
  },[]);
   
    return (
        <div> 
        <NavBar />
        <h1>Students</h1>
        <Link to="/createstudent">
                 <button> Create a student </button>
            </Link> 
        { students.length !== 0? students.map(student => <StudentCard key={student.id} props={[student, false]} />): <h2> No Students  Yet</h2>
        }





        </div>
    )
}

