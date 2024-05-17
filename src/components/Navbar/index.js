import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, ConfigProvider, Popover } from "antd";

const Navbar = () => {
  const [checkDetails, setCheckDetails] = useState();

  const logout=()=>{
    localStorage.removeItem('user');
    console.log("logout function called")
    setCheckDetails(null)
  }

  const content = (
    <div>
      <Link to="/profile">
        <p className="cursor-pointer">Profile</p>
      </Link>
        <p className="cursor-pointer" onClick={logout}>Logout</p>
    </div>
  );

  useEffect(() => {
    const userDetails = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    console.log(userDetails);
    setCheckDetails(userDetails);
  }, []);

  return (
    <div className="h-[70px] w-full flex items-center justify-center shadow-xl">
      <div className="w-[90%] flex items-center justify-between  h-full">
        <div>
          <p className="font-bold text-xl">THE BLOGS</p>
        </div>
        {checkDetails ? (
          <Popover
            placement="bottom"
            content={content}
            className="bg-red-400 h-8 w-8 rounded-[50%] flex justify-center items-center"
          >
            <Button>A</Button>
          </Popover>
        ) : (
          <div className="flex flex-row w-[40%]">
            <input type="text" className="p-2 bg-gray-100 w-[80%] rounded-md text-sm outline-none" placeholder="search for your blog" ></input>
            <div className="flex justify-center items-center  w-[40%]">
            <Link to="/login ">
              <p className="font-bold ">LOGIN</p>
            </Link>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
