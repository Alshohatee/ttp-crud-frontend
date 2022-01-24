
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
  
  // const nameValidation = (fieldName, fieldValue) => {
  //   if (fieldValue.trim() === '') {
  //     return `${fieldName} is required`;
  //   }
  //   if (/[^a-zA-Z -]/.test(fieldValue)) {
  //     return 'Invalid characters';
  //   }
  //   if (fieldValue.trim().length < 3) {
  //     return `${fieldName} needs to be at least three characters`;
  //   }
  //   return null;
  // };
  
  // const emailValidation = email => {
  //   if (
  //     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
  //       email,
  //       )
  //       ) {
  //     return null;
  //   }
  //   if (email.trim() === '') {
  //     return 'Email is required';
  //   }
  //   return 'Please enter a valid email';
  // };
  
  // const validate = {
  //   firstName: name => nameValidation('First Name', name),
  //   lastName: name => nameValidation('Last Name', name),
  //   email: emailValidation,
  // };
  
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
          Image Url:
          <input type="text" name="imageUrl" className = "form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
        </label><br/>

        <label>
         Address:
          <input type="text" name="address" className = "form-control" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </label><br/>

        <label>
         Description :
          <input type="text" name="description" className = "form-control" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label><br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}