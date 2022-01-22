import React, { useEffect, useState } from "react";
import Axios from "axios"
import StudentCard from './StudentCard'
// import StudnetCard from './StudnetCard'
// view all students here
// - [ ] Write a component to display a list of all students (just their names).
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
        <h1>students</h1>
        { students.length != 0? students.map(student => <StudentCard key={student.id} props={student}/>): <h2> No Students  Yet</h2>
        }
        </div>
    )
}