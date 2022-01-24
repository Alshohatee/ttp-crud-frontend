import NavBar from './NavBar'
import Axios from "axios"
import React, { useEffect, useState } from "react";
import CampusCard from './CampusCard'


export default function SingleCampusView() {
      const [campusesInfo, setCampusInfo] = useState([])
      const [isDelete, setIsDelete] = useState(false)

     useEffect(() => {
        const getId = window.location.href.split("/");
        const id  = getId[getId.length -1]

    async function fetchData(){
      const campusInfo = await Axios.get(`http://localhost:8080/api/campuses/${id}`)
      setCampusInfo(campusInfo.data)
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
            <CampusCard  key={campusesInfo.id}  campus={[ campusesInfo,true,handleOnClick ]} />
            { isDelete ? <h1> {campusesInfo.name} Deleted </h1> : null}
        </div>
    )
}