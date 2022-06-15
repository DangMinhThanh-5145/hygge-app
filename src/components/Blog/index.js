import BlogItems from "../BlogItems";
import React from "react";
import CommonButton from "../Commons/CommonButton";
import CommonTile from "../Commons/CommonTile";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <CommonTile title="- Our Blog" subTitle="Check Out our Blog" />
      {/* //content 1 */}
      <div className="blog-item-content">
        <div>
          <BlogItems
            image="assets/natural-5.jpg"
            alt="cosmetic-images"
            imgStyle={{
              margin: "5px",
              padding: "5px",
              marginLeft: "25px",
              height: "400px",
              width: "850px",
              borderRadius: "15px",
            }}
            blogTitle="Morning Skincare Routine: 10 Top Tips for you"
          />
          <CommonButton
            name="TOP TIPS"
            color="yellowColor"
            variant="outlined"
            sx={{
              backgroundColor: "#FAD7A0 ",
              color: "#FFC123",
              width: "100px",
              borderRadius: "20px",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "30px",
              marginBottom: "20px",
            }}
          />
        </div>

        <div>
          <BlogItems
            image="assets/natural-6.jpg"
            alt="cosmetic-images"
            imgStyle={{
              margin: "5px",
              padding: "5px",
              marginLeft: "25px",
              height: "400px",
              width: "550px",
              borderRadius: "15px",
            }}
            blogTitle="New Collection is Out"
          />
          <CommonButton
            name="NEW IN"
            color="blueColor"
            variant="outlined"
            sx={{
              backgroundColor: "#D6EAF8",
              color: "#000080",
              width: "100px",
              borderRadius: "20px",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          />
        </div>
      </div>

      {/* //content 2 */}
      <div className="blog-item-content">
        <div>
          <BlogItems
            image="assets/blog1.jpg"
            alt="cosmetic-images"
            imgStyle={{
              margin: "5px",
              padding: "5px",
              marginLeft: "25px",
              height: "400px",
              width: "452px",
              borderRadius: "15px",
            }}
            blogTitle="Always Stay Fresh"
          />
          <CommonButton
            name="HOW TO"
            color="pinkColor"
            variant="outlined"
            sx={{
              backgroundColor: "#FFB6C1",
              color: "#FF66A0",
              width: "100px",
              borderRadius: "20px",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "30px",
              marginBottom: "50px",
            }}
          />
        </div>

        <div>
          <BlogItems
            image="assets/natural-1.png"
            alt="cosmetic-images"
            imgStyle={{
              margin: "5px",
              padding: "5px",
              marginLeft: "25px",
              height: "400px",
              width: "452px",
              borderRadius: "15px",
            }}
            blogTitle="Improve your Skin now"
          />
          <CommonButton
            name="MARKS"
            color="greenColor"
            variant="outlined"
            sx={{
              backgroundColor: "#A9DFBF",
              color: "green",
              width: "100px",
              borderRadius: "20px",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          />
        </div>

        <div>
          <BlogItems
            image="assets/natural.jpg"
            alt="cosmetic-images"
            imgStyle={{
              margin: "5px",
              padding: "5px",
              marginLeft: "25px",
              height: "400px",
              width: "452px",
              borderRadius: "15px",
            }}
            blogTitle="Stay Safe in the Sun"
          />
          <CommonButton
            name="SUN Care"
            color="yellowColor"
            variant="outlined"
            sx={{
              backgroundColor: "#FAD7A0",
              color: "#FFC123",
              width: "100px",
              borderRadius: "20px",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          />
        </div>
      </div>

      {/* //content 3 */}
      <div className="blog-item-content">
        <div>
          <BlogItems
            image="assets/natural-2.jpg"
            alt="cosmetic-images"
            imgStyle={{
              margin: "5px",
              padding: "5px",
              marginLeft: "25px",
              height: "400px",
              width: "700px",
              borderRadius: "15px",
            }}
            blogTitle="Explore our Bestselling Products"
          />
          <CommonButton
            name="BESTSELLERS"
            color="blueColor"
            variant="outlined"
            sx={{
              backgroundColor: "#D6EAF8",
              color: "#000080",
              width: "100px",
              borderRadius: "20px",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          />
        </div>

        <div>
          <BlogItems
            image="assets/natural-3.jpg"
            alt="cosmetic-images"
            imgStyle={{
              margin: "5px",
              padding: "5px",
              marginLeft: "25px",
              height: "400px",
              width: "700px",
              borderRadius: "15px",
            }}
            blogTitle="5 Great Tips to Get that Perfect Skin"
          />
          <CommonButton
            name="TOP TIPS"
            color="pinkColor"
            variant="outlined"
            sx={{
              backgroundColor: "#FFB6C1",
              color: "#FF66A0",
              width: "100px",
              borderRadius: "20px",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          />
        </div>
      </div>

      <div className="blog-button-style">
        <CommonButton title="View All" />
      </div>
    </div>
  );
};

export default Blog;
