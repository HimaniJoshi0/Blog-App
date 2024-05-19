import React, { useEffect, useState } from "react";
import { services } from "../../services";
import Blogs from "../../components/Blogs";
import HeroSection from "components/hero-section";
import profileImage from "assets/images/profileImage.png";
import { ProfileIcon } from "assets/icons";

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
      getBlogs(userDetails.id);
    }
   
  }, []);

  return (
    <>
      <div className="hero-section-profile h-[21rem] -mt-[6rem] relative">
        <div className="h-[9rem] w-[9rem] md:h-[12rem] md:w-[12rem] bg-slate-50 rounded-full absolute bottom-[-4.7rem] md:bottom-[-6.2rem] left-[50%] translate-x-[-50%] overflow-hidden p-2">
         { user? (
               <img
               src={profileImage}
               alt="image"
               className="w-full h-full object-cover rounded-full"
             />
         ):(
         <ProfileIcon classes="w-full h-full object-cover rounded-full"/> 
         )
          
         } 
        </div>
      </div>
      <div className="mt-[7rem] flex justify-center items-center">
        {user && (
          <div>
            <h1 className="text-xl text-center">{user.name}</h1>
            <h1 className="text-gray-400 text-centerq">{user.email}</h1>
          </div>
        )}
      </div>
      <div className="flex">
        <Blogs allBlogs={userBlog} loading={loading} />{" "}
      </div>
    </>
  );
};

export default Profile;
