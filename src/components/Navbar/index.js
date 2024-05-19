import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Popover } from "antd";

const Navbar = () => {
  const location = useLocation();
  const [checkDetails, setCheckDetails] = useState();
  const [sticked, setSticked] = useState(false);
  const[name,setName]= useState()
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    console.log("logout function called");
    setCheckDetails(null);
  };

  const content = (
    <div>
      <Link to="/profile">
        <p className="cursor-pointer">Profile</p>
      </Link>
      <p className="cursor-pointer" onClick={logout}>
        Logout
      </p>
    </div>
  );

  useEffect(() => {
    const userDetails = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    console.log(userDetails);
    setName(userDetails.name[0]);
    setCheckDetails(userDetails);

    window.addEventListener("scroll", function () {
      if (window.scrollY > 120) {
        setSticked(true);
      } else if (this.window.screen.width < 700 && window.scrollY > 24) {
        setSticked(true);
      } else {
        setSticked(false);
      }
    });
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 mt-6 w-full ${
        sticked ? "" : "px-6 md:px-10"
      } transition-all`}
    >
      <div
        className={`p-2 md:p-4 flex items-center justify-center shadow-xl bg-white ${
          sticked ? "" : "rounded-full"
        }`}
      >
        <div className="w-full px-2 flex items-center justify-between  h-full">
          <div onClick={()=>{navigate("/")}}>
            <p className="font-bold text-xs md:text-xl cursor-pointer">THE BLOGS</p>
          </div>
          {checkDetails ? (
            <div className="flex items-center gap-2">
              <Popover
                placement="bottom"
                content={content}
                className="bg-black text-white w-8 h-8 md:h-10 md:w-10 rounded-full flex justify-center items-center"
              >
                <Button>{name}</Button>
              </Popover>
              {!location.pathname.includes("create-blog") && (
                <Button
                  onClick={() => navigate("/create-blog")}
                  className="border border-black font-semibold"
                >
                  Create
                </Button>
              )}
            </div>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className="border border-black font-semibold"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
