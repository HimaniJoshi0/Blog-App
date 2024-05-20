// import React, { useEffect, useState } from "react";
// import { services } from "../../services";
// import dayjs from "dayjs";
// import localizedFormat from "dayjs/plugin/localizedFormat";
// import customParseFormat from "dayjs/plugin/customParseFormat";
// import "dayjs/locale/en";
// import { VisitIcon } from "assets/icons";
import Blogcard from "components/Blogcard";

const Blogs = ({ allBlogs, loading }) => {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 ">
      {loading ? (
        <div className="mt-4">Loading...</div>
      ) : allBlogs.length > 0 ? (
        allBlogs.map((blog, index) => (
          <Blogcard key={index} item={blog} />
        ))
      ) : (
        <div className="col-span-full flex justify-center items-center h-full font-semibold text-xl">No Blogs</div>
      )}
    </div>
  );
};

export default Blogs;
