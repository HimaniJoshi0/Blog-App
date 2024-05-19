import { FaceBookIcon, GoogleIcon, InstaIcon, LinkedInIcon } from 'assets/icons'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white p-10 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center md:text-md'>
     <div className='my-1 text-xxs'>Copyright @2024 Flaunter, Ltd. All rights reserved</div>
     <div><u>Privacy Policy</u> | <u> Terms & Condition</u> </div>
     <div className='mt-3 flex'>
      <InstaIcon classes="h-6 w-6 mx-2"/>
      < LinkedInIcon classes="h-6 w-6 mx-2"/>
      <GoogleIcon classes="h-6 w-6 mx-2"/>
      <FaceBookIcon classes="h-6 w-6 mx-2"/>
     </div>
      </div>
    </div>
  )
}

export default Footer