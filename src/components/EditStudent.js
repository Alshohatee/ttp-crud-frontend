import React from "react";
import Axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "./NavBar"


export default function EditStudent() {
    const location = useLocation()
    const id = 1
    const navigate = useNavigate()
    const [errorMsg, showErrorMsg] = React.useState(false)


    const [formElements, setFormElements] = React.useState({
        studentName: "",
        image: "",
        email: "",
        GPA: "",
    })

    function changeHandler(e) {
        setFormElements(prevFormElements => ({
            ...prevFormElements,
            [e.target.name] : e.target.value
        }))
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const { studentName, email, GPA, image } = formElements
            const trimmedName = studentName.trim().split(" ")
            const firstName = trimmedName[0]
            const lastName = trimmedName[1]

            await Axios.patch(`http://localhost:8080/api/students/${id}`, { firstName, lastName, email, image, GPA })
            navigate(-1)
        } catch(e) {
            console.log(e)
            showErrorMsg(true)
        }

    }


    return (
        <div>
            <h1>Edit Student</h1>
            <NavBar />
            <form onSubmit={submitHandler}>
                <label>Student Name<input type="text" name="studentName" value={formElements.studentName} onChange={changeHandler} /></label> <br />
                <label>Email<input type="text" name="email" value={formElements.email} onChange={changeHandler} /></label> <br />
                <label>GPA<input type="text" name="GPA" value={formElements.GPA} onChange={changeHandler} /></label> <br />
                <label>Profile Image URL<input type="text" name="image" value={formElements.image} onChange={changeHandler} /></label> <br />
                <button>Save Changes</button>
            </form>
            {errorMsg && <h2 style={{color: "red"}}>An error has occurred. Detailed error info available on backend server console.</h2>}
        </div>
    )
}