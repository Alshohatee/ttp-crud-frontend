import { useState } from "react"
import Axios from "axios"
import { Navigate } from 'react-router-dom';



export default function CreateCampus(){
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("") 

  const [redirect, setRedirect] = useState(false)



  async function submitHandler(e){
    e.preventDefault()
    await Axios.post(`http://localhost:8080/api/campus`, {name, imageUrl, address, description})
  }

if (redirect) {    
      
        return ( < Navigate to = "/campusesview" /> )
        
}

  return (
    <div>
      <h1>Add a Campus to the Registry</h1>
      <form onSubmit={submitHandler}>
    
        <label>
           Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          Image Url:
          <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
        </label>

        <label>
         Address:
          <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </label>

        <label>
         Description :
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}