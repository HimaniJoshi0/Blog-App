import React, { useEffect, useState } from 'react'
import { services } from '../../services';

const Profile = () => {
  const[user, setUser] = useState()

  const getBlogs=async(id)=>{
    console.log("hello")

    const payload = {
      user_id: id,  
    };

    try{
      const response= await services("get",payload,"blogs")
      console.log("---response---",response)
    }
    catch(err){
      console.log(err)
    }
   
  }

  useEffect(()=>{
   const userDetails = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : null;
   console.log("----userDetails-----", userDetails)
   if (userDetails) {
    setUser(userDetails);
   }
   getBlogs(userDetails.id)
  },[])


  return (
    <div className='flex justify-center items-center'>

      <div>
      {user && 
      <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
        }
      </div> 
    </div>
  )
}

export default Profile