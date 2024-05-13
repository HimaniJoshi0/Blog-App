import React, { useEffect, useState } from "react";
import Blogs from "../../components/Blogs";
import { Button, Modal } from "antd";
import CreateBlogForm from "../../components/CreateBlogForm";

const Blog = () => {
  const [checkDetails, setCheckDetails] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const userDetails = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    console.log(userDetails);
    setCheckDetails(userDetails);
  }, []);

  return (
    <div className=" w-full">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] flex border-t-2 border-b-2 ">
          <h1 className="text-8xl font-bold text-center p-5 w-[90%] m-auto ">
            THE BLOG
          </h1>
          {checkDetails && (
            <p onClick={() => setOpen(true)} className="cursor-pointer">
              Create
            </p>
          )}
        </div>
      </div>

      <div className="w-full  flex flex-col justify-center items-center mt-8">
        <h1>All blogs post</h1>
        <Blogs />
      </div>

      <Modal
        title="Create Blog"
        open={open}
        onClose={() => console.log("hiii")}
        onOk={() => {
          console.log("hiiii");
        }}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <CreateBlogForm setOpen={setOpen}/> 
      </Modal>
    </div>
  );
};

export default Blog;
