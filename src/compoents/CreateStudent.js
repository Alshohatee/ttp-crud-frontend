import { useState } from "react"
import Axios from "axios"

export default function CreateStudent(){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")


  async function submitHandler(e){
    e.preventDefault()
    await Axios.post(`http://localhost:8080/api/campus`, {firstName, lastName, email, imageUrl, address, description})
  }



  return (
    <div>
      <h1>Add a Student to the Registry</h1>
      <form onSubmit={submitHandler}>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={(e) =>setFirstName(e.target.value)}/>
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label>

        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
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