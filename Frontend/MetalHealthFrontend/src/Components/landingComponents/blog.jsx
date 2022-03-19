import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  return (
    <React.Fragment>
      <h1>Blog</h1>
      <Link to="/all-blogs">All Blogs</Link>
    </React.Fragment>
  );
};

export default Blog;
