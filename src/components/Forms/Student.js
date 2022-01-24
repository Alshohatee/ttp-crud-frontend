import React from 'react';

import ReactDOM from 'react-dom';

import { useFormik } from 'formik';

import * as yup from 'yup';



export default function StudentForm(props){

    const [handleSubmit, firstName, lastName, email, image, gpa,setFirstName, setLastName, setEmail, setImage,setGPA] = [...props.props]
    const formik = useFormik({

        initialValues: {

            firstName: '',

            lastName: '',

            email: '',

            image: '',

            gpa: ''

        },

        validationSchema: yup.object({

            firstName: yup.string()

                .max(20, 'Name should not exceed 20 Characters')

                .required('Please Enter Student First Name'),

            lastName: yup.string()

                .max(20, 'Name should not exceed 20 Characters')

                .required('Please Enter Student Last Name'),


            email: yup.string()

                .email('Invalid email address')

                .required('Please Enter Email Id'),
        }),

        onSubmit: values => {

            alert(JSON.stringify(values));

        }

    });

    return (

        <div>

            <h1> Add a Student to the Registry</h1>

            <form onSubmit={handleSubmit}>

                <p>

                    <label htmlFor="firstName"> First Name : </label>

                    <input type="text" name="firstName" value = {firstName} onChange={(e) =>setFirstName(e.target.value)}></input>
                    {formik.touched.firstName && formik.errors.firstName ? <span style={{ color: 'red' }}>{formik.errors.firstName}</span> : null}

                </p>

                <p>

                    <label htmlFor="lastName"> Last Name : </label>

                    <input type="text" name="lastName" value = {lastName} onChange={(e) =>setLastName(e.target.value)} ></input>

                    {formik.touched.lastName && formik.errors.lastName ? <span style={{ color: 'red' }}>{formik.errors.lastName}</span> : null}
                </p>

                <p>

                    <label htmlFor="email">Email : </label>

                    <input type="text" name="email" value = {email} onChange={(e) =>setEmail(e.target.value)} ></input>

                    {formik.touched.email && formik.errors.email ? <span style={{ color: 'red' }}>{formik.errors.email}</span> : null}
                </p>

                <p>

                    <label htmlFor="image"> Profile Image : </label>

                    <input type="text" name="image" value = {image} onChange={(e) =>setImage(e.target.value)}></input>

                </p>

                <p>

                    <label htmlFor="gpa">GPA : </label>

                    <input type="text" name="gpa" value={gpa} onChange={(e) =>setGPA(e.target.value)} ></input>
                </p>
                <button type="submit">Submit</button>

            </form>

        </div>

    )

}
// const element=<StudentForm></StudentForm>

// ReactDOM.render(element,document.getElementById("root"));