import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import TextField from "../../components/inputField";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const MyForm = () => (
  <div className="flex justify-center items-center  h-screen w-full">     
  <div className='bg-green-200 w-[50%] h-[100%] flex justify-center items-center'>
   <h1>image</h1>
 </div>

 <div className=' w-[50%] h-full flex justify-center items-center'>
    <div >
        <div className='mb-6'>
          <h1 className='text-4xl font-bold '>Hi, Welcome to THE BLOG</h1>
          <p className='font-semibold mt-1'>Create  your account</p>
        </div>
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {() => (
        <Form>
          <div className="mt-2">
          <TextField name="name"  label="Name" type="text"/>
          </div>

          <div className="mt-2">
          <TextField name="email"  label="Email Address" type="email"/>
          </div>
         
         <div className="mt-2">
         <TextField name="phone"  label="Contact Number" type="text"/>
         </div>
         
        
        <div className="mt-2">
        <TextField name="password"  label="Password" type="password"/>
        </div>

        <div className="mt-2">
        <TextField name="confirmPassword"  label="Confirm Password" type="password"/>
        </div>
         
          <button type="submit" className='w-full p-3 text-white bg-black rounded-md font-semibold mt-6'>Submit</button>
        </Form>
      )}
    </Formik>
    <div className='my-3'>
      <p>Already registered? <Link to="/login" className='text-green-700 font-bold'>Login</Link></p>
    </div>
  </div>
  </div>
  </div>
);

export default MyForm;
