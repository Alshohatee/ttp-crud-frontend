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
            
            gpa: yup.number()
             .typeError('gpa must be a number')
        }),

       
        onSubmit: values => {

            let string = JSON.stringify(values);
            string.split(",")
            setFirstName = string[0];
            console.log(firstName);
            setLastName = string[1];
            setEmail = string[2];
            setGPA = string[3];

        }

    });

    return (

        <div>

            <h1> Add a Student to the Registry</h1>

            <form onSubmit={handleSubmit}>

                <p>

                    <label htmlFor="firstName"> First Name : </label>

                    <input type="text" name="firstName" value = {firstName} onChange={(e) =>setFirstName(e.target.value)}  {...formik.getFieldProps("firstName")}></input>
                    {formik.touched.firstName && formik.errors.firstName ? <span style={{ color: 'red' }}>{formik.errors.firstName}</span> : null}

                </p>

                <p>

                    <label htmlFor="lastName"> Last Name : </label>

                    <input type="text" name="lastName" value = {lastName} onChange={(e) =>setLastName(e.target.value)}  {...formik.getFieldProps("lastName")} ></input>

                    {formik.touched.lastName && formik.errors.lastName ? <span style={{ color: 'red' }}>{formik.errors.lastName}</span> : null}
                </p>

                <p>

                    <label htmlFor="email">Email : </label>

                    <input type="text" name="email" value = {email} onChange={(e) =>setEmail(e.target.value)}  {...formik.getFieldProps("email")} ></input>

                    {formik.touched.email && formik.errors.email ? <span style={{ color: 'red' }}>{formik.errors.email}</span> : null}
                </p>
                   

                <p>

                    <label htmlFor="image"> Profile Image : </label>

                    <input type="text" name="image" value = {image} onChange={(e) =>setImage(e.target.value)}  {...formik.getFieldProps("image")}></input>

                </p>

                <p>

                    <label htmlFor="gpa">GPA : </label>

                    <input type="text" name="gpa" value={gpa} onChange={(e) =>setGPA(e.target.value)}  {...formik.getFieldProps("gpa")} ></input>
                    {formik.touched.gpa && formik.errors.gpa ? <span style={{ color: 'red' }}>{formik.errors.gpa}</span> : null}
                </p>
                <button type="submit">Submit</button>

            </form>

        </div>
        
        
        )
        

}
// const element=<StudentForm></StudentForm>

// ReactDOM.render(element,document.getElementById("root"));