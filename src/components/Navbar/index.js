import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [checkDetails, setCheckDetails] = useState();

  useEffect(() => {
    const userDetails = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    console.log(userDetails);
    setCheckDetails(userDetails);
  }, []);

  return (
    <div className="h-[60px] w-full flex items-center justify-center ">
      <div className="w-[90%] flex items-center justify-between  h-full">
        <div>
          <p className="font-bold text-xl">THE BLOGS</p>
        </div>
        {checkDetails ? (
          <div className="bg-red-400 h-8 w-8 rounded-[50%] flex justify-center items-center">
            A
          </div>
        ) : (
          <div>
           <Link to ="/login"> <p>LOGIN</p></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
