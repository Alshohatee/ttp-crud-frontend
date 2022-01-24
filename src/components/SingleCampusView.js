import NavBar from './NavBar'
import Axios from "axios"
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import CampusCard from './CampusCard'
import { nanoid } from 'nanoid'
import StudentCard from "./StudentCard";


export default function SingleCampusView() {

    const location = useLocation()
    const { id } = location.state

    const [campusesInfo, setCampusInfo] = useState([])
    const [studentsEnrolled, setStudentsEnrolled] = useState([])
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const { data } = await Axios.get(`http://localhost:8080/api/campuses/${id}/students`) // endpoint returns campus info and its students
            const { campus, students } = data
            setCampusInfo(campus)
            setStudentsEnrolled(students)
        }
        fetchData().then(() => console.log("Data Fetched"))
  },[]);

  function handleOnClick(){
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
            <CampusCard key={campusesInfo.id}  campus={[ campusesInfo,true,handleOnClick ]} />
            { isDelete ? <h1> {campusesInfo.name} Deleted </h1> : null}
            {studentsEnrolled.length > 0
                ? studentsEnrolled.map(student => <StudentCard key={nanoid()} props={[student, false]} />)
                : <h1>There are no students currently enrolled for this campus.</h1>
            }
        </div>
    )
}