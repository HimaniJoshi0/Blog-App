import React from 'react'
import Blogs from '../../components/Blogs'

const Blog = () => {
  return (
    <>
    <h1 className='text-8xl font-bold text-center p-5 w-[90%] m-auto border-t-2 border-b-2 '>THE BLOG</h1>
    <div className='w-full  flex flex-col justify-center items-center mt-8'>
      <h1>All blogs post</h1>
       <Blogs/>  
    </div>
    </>
  )
}

export default Blog