import React, { useEffect, useState } from 'react'
import { services } from '../../services';

const Blogs = () => {

  const [allBlogs, setAllBlogs] = useState([])

  const getBlogs =async ()=>{
    try{
      const allBlogs = await services("get", null, "blogs");
      console.log("--BLOGS----",allBlogs.data)
      setAllBlogs(allBlogs.data);
    }
    catch(err){
      console.log("err",err)
    }
  }

  useEffect(()=>{
     getBlogs()
  },[])

  const renderBlogs =(item,key)=>{
    return(
      <div className=' w-[30%] h-[400px] bg-white'>
      <div className='bg-white w-full h-[60%] flex justify-center items-center'>
        <img src={item.image} alt="image" className='w-full h-full'></img>
      </div>
      <div className='mt-6'>
          <div className='my-2'> <p className='font-bold text-purple-800'>{item.created_on}</p> </div>  
          <div className='flex'>
            {
              item.categories.map((item,values)=>{
                return(
                  <div className=" mr-2">
                  <div>{item}</div>
                  </div>
                )
              })
            }
          </div>  
          {/* <div className='my-2'> <p className='font-bold'>{item.categories}</p> </div>     */}
          <div className='my-2'>  <h1 className='text-2xl font-bold'>{item.title}</h1> </div>
          <div className='my-2'>
          <p>{item.summary}</p>
          </div>

      </div>
  </div>
    )
  }

  return (
    <div className='w-[90%] flex flex justify-center items-center gap-4 flex-wrap'> 
  {
    allBlogs && allBlogs.map(renderBlogs)
  }
    </div>
  )
}

export default Blogs