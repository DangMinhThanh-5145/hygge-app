import React from "react";

const BlogItems = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.alt} style={props.imgStyle} />
      <h2 style={{ marginLeft: "30px", padding: "5px" }}>{props.blogTitle}</h2>
    </div>
  );
};

export default BlogItems;
