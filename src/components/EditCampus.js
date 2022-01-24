import React , {useState}from "react";
import Axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { nanoid } from "nanoid"
import CampusFrom from "./Forms/CampusForm"

export default function EditCampus() {
    const location = useLocation()
    const { id } = location.state
    console.log(id)
    const navigate = useNavigate()
    const [errorMsg, showErrorMsg] = React.useState(false)

    // added this 
    // const { name, image, address, description } = formElements
    const [name, setName] = useState("")
    const [ImageUrl, setImageUrl] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("") 
    const [formElements, setFormElements] = React.useState({
        name: "",
        image: "",
        address: "",
        description: ""
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
            
            await Axios.patch(`http://localhost:8080/api/campuses/${id}`, { name, ImageUrl, address, description })
            navigate(-1)
        } catch (error) {
            console.log(error)
            showErrorMsg(true)
        }
    }

    const [students, setStudents] = React.useState([])
    const [studentAdded, setStudentAdded] = React.useState(false)

    React.useEffect(function() {
        let mounted = true
        async function getStudents() {
            try {
                const {data} = await Axios.get("http://localhost:8080/api/students")
                console.log(data)
                setStudents(data)
                setStudentAdded(false)
                filterStudents()
            } catch (error) {
                console.log(error)
                showErrorMsg(true)
            }
        }
        if (mounted) {
            getStudents()
        }

        return () => mounted = false



    }, [studentAdded])

    async function addStudentToCampus(event) {
        event.preventDefault()
        const studentId = event.target[0].value
        try {
            await Axios.patch(`http://localhost:8080/api/students/${studentId}`, { campusId: id })
            setStudentAdded(true)
        } catch(error) {
            console.log(error)
            showErrorMsg(true)
        }
    }

    const [unassignedStudents, setUnassignedStudents] = React.useState([])
    const [assignedStudents, setAssignedStudents] = React.useState([])

    function filterStudents() {
        setAssignedStudents(students.filter(student => {
            if (student.campusId)
                return student
        }))
        setUnassignedStudents(students.filter(student => {
            if (!student.campusId)
                return student
        }))
    }


    console.log(unassignedStudents == true)
    return (
        <div>
            <h1>Edit Campus</h1>
            <NavBar />
            {/* <form onSubmit={submitHandler}> <br/>
                <label>Campus Name<input type = "text" name="name" value={formElements.name} onChange={changeHandler} /></label><br/>
                <label>Campus Location<input type = "text" name="address" value={formElements.address} onChange={changeHandler} /></label><br/>
                <label>Campus Image URL<input type = "text" name="image" value={formElements.image} onChange={changeHandler} /></label><br/>
                <label>Campus Description<input type = "text" name="description" value={formElements.description} onChange={changeHandler} /></label><br/>
                <button>Save Changes</button>
                {errorMsg && <span style={{color: "red"}}>An error has occurred. Detailed error info available on backend server console.</span>}
            </form> */}
                {/* I add this  */}
                < CampusFrom props={[submitHandler, name, ImageUrl, address, description,setName , setImageUrl, setAddress, setDescription]}/>
            <h2>Unassigned Students</h2>
            {unassignedStudents.length > 0 ?
                <form onSubmit={addStudentToCampus}>
                    <select>
                        {students.map(student => {
                            if (!student.campusId) {
                                return <option key={nanoid()}
                                               value={student.id}>{student.firstName} {student.lastName}</option>
                            }
                        })}
                    </select>
                    <button>Add to Campus</button>
                </form>
                : <h3>There are no unassigned students to add.</h3>
            }
            <div className="enrolledStudents">
                <h2>Enrolled Students</h2>
                {assignedStudents.length > 0 ?
                    students.map(student => {
                        if (student.campusId === id) {
                            return <div key={nanoid()}>{student.firstName} {student.lastName}</div>
                        }
                    })
                    : <h3>There are currently no students registered with this campus.</h3>
                }
                
            </div>
        </div>
    )

}