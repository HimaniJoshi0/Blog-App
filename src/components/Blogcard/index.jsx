import React, { useEffect, useState } from "react";
import { services } from "../../services";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/en";
import { VisitIcon } from "assets/icons";
import { Link } from "react-router-dom";


const Blogcard = ({item,key}) => {
 let [imgHover, setImgHover] = useState(false);
 dayjs.extend(localizedFormat);
 dayjs.extend(customParseFormat);
 dayjs.locale("en");
 console.log("id-----",item.blog_id)

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
                className="h-[25rem] object-cover w-full"
              ></img>
             
              <div
                className={`${
                  imgHover ? "md:flex" : "md:hidden"
                } md:bg-[#53515461] absolute top-0 botton-10 w-full h-full gap-2 md:transition-all justify-center items-center`}
              >
                 <Link to={`/blog-view/${item.blog_id}`}>
                  <div  className=" flex justify-end items-center">
                    <div className=" flex justify-end items-center bg-gray-700 rounded-md m-1 p-1">
                    <p className="md:text-white md:text-lg text-xxs font-semibold text-white ">VISIT</p>
                   <VisitIcon classes="w-6 h-6 stroke-white"/>
                    </div>
                 
                  </div>
          
                </Link>
              </div>
              
            </div>
     
            <div className="mt-2">
              <div className="my-2 flex flex-row  font-bold text-purple-800 text-sm">
                <p>{item?.users?.name}-</p>
                <p className="font-bold text-purple-800 text-sm ml-2">
                  {dayjs(item.created_on, "YYYY-MM-DD h:mma").format(
                    "MMMM D, YYYY"
                  )}
                </p>
              </div>
              <div className="my-2">
                <h1 className="text-xl font-bold multi-line-truncate-heading ">{item.title}</h1>
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
}

export default Blogcard