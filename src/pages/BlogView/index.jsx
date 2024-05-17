import React from "react";
import { useParams } from "react-router";

const BlogView = () => {
    const { id } = useParams();
    console.log("hiiii",id);

  return <div>BlogView</div>;
};

export default BlogView;
