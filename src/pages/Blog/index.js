import React, { useEffect, useState } from "react";
import Blogs from "../../components/Blogs";
import {  Modal } from "antd";
import { services } from "services";
import ClientSlider from "components/crousal";
import HeroSection from "components/hero-section";

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
    <>
       <HeroSection title="THE BLOGS"/>
      <div className="mt-6">{/* <h3>Recent Blogs</h3> */}</div>
      <div className="p-10 flex justify-center">
        <ClientSlider />
      </div>
      <div className=" w-full mt-6">
        <div className="w-full flex justify-center items-center">
          <div className="w-[90%] flex ">
            {/* {checkDetails && (
              <p onClick={() => setOpen(true)} className="cursor-pointer">
                Create
              </p>
            )} */}
          </div>
        </div>
        <Blogs allBlogs={allBlogs} loading={loading} />
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
          {/* <CreateBlogForm setOpen={setOpen} /> */}
        </Modal>
      </div>
    </>
  );
};

export default Blog;
