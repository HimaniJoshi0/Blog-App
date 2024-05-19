import React, { useEffect, useState } from "react";
import { services } from "../../services";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/en";
import { VisitIcon } from "assets/icons";

const Blogs = ({ allBlogs, loading }) => {
  let [authorname, setAuthorName] = useState();
  let [imgHover, setImgHover] = useState(false);

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
        <div
          className="bg-white flex flex-col justify-center items-start rounded-lg overflow-hidden relative"
          onMouseOver={(e) => setImgHover(true)}
          onMouseLeave={(e) => setImgHover(false)}
        >
          <img
            src={item.image}
            alt="image"
            className="h-[25rem] object-cover"
          ></img>
          <div
            className={`${
              imgHover ? "block" : "hidden"
            } bg-[#53515461] absolute top-0 w-full h-full flex justify-center items-center gap-2 transition-all`}
          >
            <p className="text-white text-lg font-semibold ">VISIT</p>
            <VisitIcon classes="w-6 h-6 stroke-white"/>
          </div>
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
            <p class="text-base text-gray-700 font-normal multi-line-truncate">
              {item.summary}
            </p>
          </div>
          <div className="mt-2">
            <div className="flex"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 ">
      {loading ? (
        <div className="mt-4">Loading...</div>
      ) : allBlogs.length > 0 ? (
        allBlogs.map(renderBlogs)
      ) : (
        <div className="col-span-full flex justify-center items-center h-full font-semibold text-xl">No Blogs</div>
      )}
    </div>
  );
};

export default Blogs;
