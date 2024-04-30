import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <div className='h-[60px] w-full flex items-center justify-center '>
      <div className='w-[90%] flex items-center justify-between '>
      <div>
          <p className='font-bold text-xl'>THE BLOGS</p>
        </div>
        <div>
        <p><Link to="/register">Register</Link></p>
        </div>
      </div>
       
    </div>
  )
}

export default Navbar