// import StudnetCard from './StudnetCard'
// view all students here
import React, { useEffect, useState } from "react";
import Axios from "axios"
import StudentCard from './StudentCard'
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
        <div> {students.map(student => <StudentCard key={student.id} props={student}/>)}</div>
    )
}