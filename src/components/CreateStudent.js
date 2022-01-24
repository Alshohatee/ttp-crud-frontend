
import React, { useEffect, useState } from "react";
import Axios from "axios"
import { Navigate } from 'react-router-dom';
import NavBar from './NavBar'
// import StudentForm from "./Forms/Student";

export default function CreateStudent(){

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [gpa, setGPA] = useState("")
  const [redirect, setRedirect] = useState(false)
    
    async function handleSubmit(e,values){
      e.preventDefault()
      await Axios.post(`http://localhost:8080/api/students`, {values})
      setRedirect(true)
    }

  
 if (redirect) {    
      
        return ( < Navigate to = "/studentsview" /> )
        
    }

  return (
    <div>
      <NavBar />
      <h1>Add a Student to the Registry</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" className = "form-control" value={firstName} onChange={(e) =>setFirstName(e.target.value)}/>
        </label> <br/>

        <label>
          Last Name:
          <input type="text" name="lastName" className = "form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label><br/>

        <label>
          Email:
          <input type="email" name="email" className = "form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label><br/>

        <label>
          GPA:
          <input type="text" name="gpa" className = "form-control" value={gpa} onChange={(e) => setGPA(e.target.value)}/>
        </label><br/>

          <label>
          Profile Image URL:
          <input type="text" name="imageUrl" className = "form-control" value={image} onChange={(e) => setImage(e.target.value)}/>
        </label><br/>

        <input type="submit" value="Submit" />
      </form>
   
      {/* <StudentForm props={[handleSubmit, firstName, lastName, email, image,gpa,setFirstName, setLastName, setEmail, setImage,setGPA]}/> */}
     
    </div>
  )
}