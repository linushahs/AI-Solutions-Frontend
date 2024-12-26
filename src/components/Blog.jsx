import React from "react";

const Blog = () => {
  return (
    <div className="mt-20 mb-48 h-[100vh] flex justify-center">
      <div className="flex flex-col gap-20 mb-20">
        {/* head title */}
        <div className="text-center">
          <h2 className="uppercase text-blue font-bold text-black tracking-wide">
            FROM OUR BLOG
          </h2>
          <h1 className="uppercase font-bold text-3xl">Blogs and Articles</h1>
        </div>

        {/* mid content  */}
        <div className="flex items-center gap-4 justify-between px-20 ">
          {/* 1st */}
          <div className="basis-[100%] bg-white border flex flex-col gap-2">
            <img src="/blog/picture.png" alt="" />
            <div className="p-4 mb-20 flex flex-col gap-4">
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

          {/* 2nd */}
          <div className="basis-[100%] bg-white border flex flex-col gap-2">
            <img src="/blog/picture.png" alt="" />
            <div className="p-4 mb-20 flex flex-col gap-4">
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

          {/* 3rd  */}
          <div className="basis-[100%] bg-white border flex flex-col gap-2">
            <img src="/blog/picture.png" alt="" />
            <div className="p-4 mb-20 flex flex-col gap-4">
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

          {/* 4th */}
          <div className="basis-[100%] bg-white border flex flex-col gap-2">
            <img src="/blog/picture.png" alt="" />
            <div className="p-4 mb-20 flex flex-col gap-4">
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
        </div>

        {/* button  */}
        <div className="self-center">
          <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
            Primary Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
