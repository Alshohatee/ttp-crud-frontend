import React, { useEffect, useState } from "react";
import Axios from "axios"
import StudentCard from './StudentCard'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
// ○	[   ] see a list of all students in the database
// ○	[   ] see an informative message if no students exist
// ○	[   ] add a new student
//     ■	[   ] with a validated form displaying real-time error messages
//     ■	[   ] which redirects the new student’s single student view

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