import React, { useEffect, useState } from "react";
import { services } from "../../services";
import Blogs from "../../components/Blogs";

const Profile = () => {
  const [user, setUser] = useState();
  const [userBlog, setuserBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBlogs = async (id) => {
    setLoading(true);
    const payload = {
      user_id: id,
    };

    try {
      const response = await services("post", payload, "blogs");
      console.log("---response---", response);
      setuserBlog(response.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userDetails = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    console.log("----userDetails-----", userDetails);
    if (userDetails) {
      setUser(userDetails);
    }
    getBlogs(userDetails.id);
  }, []);

  // const renderBlogs =(item,key)=>{
  //   console.log("--item.created_on---", item.created_on)
  //   return(
  //     <div className=' w-[30%] h-[400px] bg-white'>
  //     <div className='bg-white w-full h-[60%] flex justify-center items-center'>
  //       <img src={item.image} alt="image" className='w-full h-full'></img>
  //     </div>
  //     <div className='mt-6'>
  //         <div className='my-2'> <p className='font-bold text-purple-800'>{dayjs(item.created_on , 'YYYY-MM-DD h:mma').format('MMMM D, YYYY')}</p> </div>
  //         <div className='flex'>
  //           {
  //             item.categories.map((item,values)=>{
  //               return(
  //                 <div className=" mr-2">
  //                 <div>{item}</div>
  //                 </div>
  //               )
  //             })
  //           }
  //         </div>
  //         {/* <div className='my-2'> <p className='font-bold'>{item.categories}</p> </div>     */}
  //         <div className='my-2'>  <h1 className='text-2xl font-bold'>{item.title}</h1> </div>
  //         <div className='my-2'>
  //         <p>{item.summary}</p>
  //         </div>

  //     </div>
  // </div>
  //   )
  // }

  return (
    <div className="flex justify-center items-center">
      <div>
        <div>
          {user && (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
            </div>
          )}
        </div>

        <div>
          <Blogs allBlogs={userBlog} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
