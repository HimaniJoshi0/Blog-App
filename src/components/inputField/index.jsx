import React from 'react'
import { Field, ErrorMessage } from 'formik';

const TextField = ({name ,label, type}) => {
  return (
    <div>
    <label htmlFor={name} className='font-semibold text-base'>{label}</label>
    <div>
    <Field type={type} name={name} className="border-2 w-full p-2 rounded-md" placeholder= {`Enter your ${label}`}/>
    <ErrorMessage name={name} component="div" className="text-red-600"/> 
    </div>
    
  </div>
  )
}

export default TextField