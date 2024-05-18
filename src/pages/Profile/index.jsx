import React, { useEffect, useState } from "react";
import { services } from "../../services";
import Blogs from "../../components/Blogs";
import HeroSection from "components/hero-section";
import profileImage from "assets/images/profileImage.png";


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



  return (
    <>
    <div className="hero-section-profile h-[12rem] md:h-[9rem] lg:h-[21rem] -mt-[6rem] relative">
        <div className="h-[12rem] w-[12rem] bg-slate-50 rounded-full absolute bottom-[-3.5rem] left-[20rem] overflow-hidden p-2">
          <img src={profileImage} alt="image" className="w-full h-full object-cover rounded-full"/>
        </div>
    </div>
   
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
          {/* <Blogs allBlogs={userBlog} loading={loading} /> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
