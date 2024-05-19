import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { services } from "services";
import profileImage from "assets/images/profileImage.png";

const BlogView = () => {
  const { id } = useParams();
  const [currBlog, setCurrBlog] = useState(null);
  const getCurrentBlog = async () => {
    try {
      const response = await services("get", null, `blogs?id=${id}`);
      if (response.status) {
        setCurrBlog(response.data[0]);
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
      console.log("Err:", err);
    }
  };

  console.log("currBlog", currBlog);
  useEffect(() => {
    getCurrentBlog();
  }, []);

  const renderCategoryChip = (item, index) => {
    console.log("item", item);
    return (
      <div className="p-2 border border-green-600 text-white bg-green-300 rounded-full h-min">
        {item}
      </div>
    );
  };

  return (
    <>
      {" "}
      <div className="hero-section-profile h-[21rem] -mt-[6rem] relative">
        <div className="h-[9rem] w-[9rem] md:h-[12rem] md:w-[12rem] bg-slate-50 rounded-full absolute bottom-[-4.7rem] md:bottom-[-6.2rem] left-[20%] overflow-hidden p-2">
          <img
            src={profileImage}
            alt="image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div>
        <div className="mt-[7rem] ml-[22%]">
          <div>
            <h1 className="text-xl">User</h1>
            <h1 className="text-gray-400">test@mail.com</h1>
          </div>
        </div>
        {currBlog ? (
          <div className="flex flex-col gap-4 p-4 md:p-10 items-center min-h-[calc(100vh-16.625rem)]">
            <div>
              <div className="flex gap-1">
                {currBlog?.categories?.map(renderCategoryChip)}
              </div>
              <div className="mt-6">
                <h1 className="text-2xl font-semibold">{currBlog.title}</h1>
              </div>

              <div className="mt-4">
                <img
                  src={currBlog.image}
                  className="max-h-[40rem]"
                  alt="Blog Image"
                />
              </div>
              <div className="max-w-[40rem]">
                <h1 className="text-lg">{currBlog.summary}</h1>
              </div>
            </div>
          </div>
        ) : (
          <div>No blog found</div>
        )}
      </div>
    </>
  );
};

export default BlogView;
