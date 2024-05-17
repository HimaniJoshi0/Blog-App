import React, { useEffect, useState } from "react";
import Blogs from "../../components/Blogs";
import { Button, Modal } from "antd";
import CreateBlogForm from "../../components/CreateBlogForm";
import { services } from "../../services";

const Blog = () => {
  const [checkDetails, setCheckDetails] = useState();
  const [open, setOpen] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const allBlogs = await services("get", null, "blogs");
      console.log("--BLOGS----", allBlogs.data);
      setAllBlogs(allBlogs.data);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userDetails = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    console.log(userDetails);
    setCheckDetails(userDetails);
    getBlogs();
  }, []);

  return (
    <div className=" w-full mt-6">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] flex ">
          <h1 className="text-8xl font-bold text-center p-5 w-[90%] m-auto ">
            THE BLOGS
          </h1>
          {checkDetails && (
            <p onClick={() => setOpen(true)} className="cursor-pointer">
              Create
            </p>
          )}
        </div>
      </div>

      <div className="w-full  flex flex-col justify-center items-center mt-8 ">
        <div className="w-[83%] my-5">
          <h1 className="font-bold">All blogs post</h1>
        </div>
        <Blogs allBlogs={allBlogs} loading={loading} />
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
        <CreateBlogForm setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default Blog;
