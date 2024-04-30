import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import TextField from '../../components/inputField';


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const MyForm = () => (
  <div className="flex justify-center items-center  h-screen w-full">      {/*min-h-screen h-full not working */}
     <div className='bg-green-200 w-[50%] h-[100%] flex justify-center items-center'>
      <h1>image</h1>
    </div>

    <div className=' w-[50%] h-full flex justify-center items-center'>
      <div >
        <div className='mb-6'>
          <h1 className='text-4xl font-bold '>Hi, Welcome to THE BLOG</h1>
          <p className='font-semibold mt-1'>Enter your credentials to access in your account</p>
        </div>
    <Formik
      initialValues={{ email: '', password: '' }}
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
          <div className='my-4'>
          <TextField name="email"  label="Email Address" type="email"/>
          </div>
        
        <div className='my-4'>
        <TextField name="password"  label="Password" type="password"/>
        </div>
          <button type="submit" className='w-full p-3 text-white bg-black rounded-md font-semibold mt-6'>Login</button>
        </Form>
      )}
    </Formik>
    <div className='my-3'>
      <p>Don't have account?  <Link to="/register" className='text-green-700 font-bold'>Register</Link></p>
    </div>
    </div>
    </div>
  </div>
);

export default MyForm;
