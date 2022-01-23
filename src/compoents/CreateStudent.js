
import React, { useEffect, useState } from "react";
import Axios from "axios"
import { Navigate } from 'react-router-dom';
import NavBar from './NavBar'

export default function CreateStudent(){

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [redirect, setRedirect] = useState(false)

  async function submitHandler(e){
    e.preventDefault()
    await Axios.post(`http://localhost:8080/api/students`, {firstName, lastName, email, imageUrl, address, description})
    setRedirect(true)
  }

 if (redirect) {    
      
        return ( < Navigate to = "/studentsview" /> )
        
    }

  return (
    <div>
      <NavBar />
      <h1>Add a Student to the Registry</h1>
      <form onSubmit={submitHandler}>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={(e) =>setFirstName(e.target.value)}/>
        </label> <br/>

        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label><br/>

        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label><br/>

        <label>
          Image Url:
          <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
        </label><br/>

        <label>
         Address:
          <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </label><br/>

        <label>
         Description :
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label><br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}