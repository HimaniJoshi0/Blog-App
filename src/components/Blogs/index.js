import React, { useEffect, useState } from "react";
import { services } from "../../services";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/en";

const Blogs = ({ allBlogs, loading }) => {
  let [authorname, setAuthorName] = useState();

  useEffect(() => {
    let name = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    setAuthorName(name);
  }, []);

  dayjs.extend(localizedFormat);
  dayjs.extend(customParseFormat);
  dayjs.locale("en");

  const renderBlogs = (item, key) => {
    return (
      <div className="bg-white max-h-[50rem] ">
        <div className="bg-white flex justify-center items-start rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt="image"
            className="h-[30rem] object-cover"
          ></img>
        </div>
        <div className="mt-2">
          <div className="my-2 flex flex-row  font-bold text-purple-800 text-sm">
            <p>{authorname?.name} -</p>
            <p className="font-bold text-purple-800 text-sm ml-2">
              {dayjs(item.created_on, "YYYY-MM-DD h:mma").format(
                "MMMM D, YYYY"
              )}
            </p>
          </div>
          <div className="my-2">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p>{item.summary}</p>
          </div>
          <div className="mt-2">
            <div className="flex">
              {/* {item.categories.map((item, values) => {
                return (
                  <div className=" mr-2 ">
                    <div className="text-purple-800 p-1 border rounded-lg bg-purple-200 font-semibold">
                      {item}
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
      {loading ? (
        <div className="mt-4">Loading...</div>
      ) : allBlogs.length > 0 ? (
        allBlogs.map(renderBlogs)
      ) : (
        <div>No Blogs</div>
      )}
    </div>
  );
};

export default Blogs;
