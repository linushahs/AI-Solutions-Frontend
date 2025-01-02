import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ showAllBlogs }) => {
  return (
    <div className="mt-14 mb-20 flex justify-center">
      <div className="flex flex-col gap-14">
        {/* head title */}
        <div className="text-center">
          <h2 className="uppercase text-blue font-bold  tracking-wide">
            FROM OUR BLOG
          </h2>
          <h1 className="uppercase font-bold text-3xl">Blogs and Articles</h1>
        </div>

        {/* mid content  */}
        <div className="flex items-center gap-4 justify-between px-20 ">
          {new Array(4).fill("").map((_, index) => (
            <div
              key={index}
              className="basis-[100%] h-full bg-white border rounded-lg overflow-hidden flex flex-col gap-2"
            >
              <Link to="/blogs/title" className="w-full">
                <img src="/blog/picture.png" alt="" className="w-full" />
              </Link>

              <div className="p-4 mb-4 flex flex-col gap-4">
                <div className="self-start">
                  <h2 className="font-semibold">Category</h2>
                  <h2 className="font-bold text-lg">Article Title</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center gap-2">
                  <img src="/testimonials/pp.png" alt="" />
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <span className="text-gray-500">Seniour Designer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* button  */}
        {showAllBlogs && (
          <div className="self-center">
            <Link to="/blogs">
              <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] rounded-md text-white">
                See All Blogs
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
