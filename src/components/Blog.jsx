import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../utils/constants";
import { useTranslation } from "react-i18next";

const Blog = ({ showAllBlogs }) => {
  const {t} = useTranslation();

  return (
    <div className="mt-14 mb-20 flex justify-center">
      <div className="flex flex-col gap-14">
        {/* head title */}
        <div className="text-center">
          <h2 className="uppercase text-blue font-bold  tracking-wide mb-2">
            {t("blogs-subtitle")}
          </h2>
          <h1 className="uppercase font-bold text-3xl">{t("blogs-title")}</h1>
        </div>

        {/* mid content  */}
        <div className="flex items-center gap-4 justify-between px-20 ">
          {blogData.map(
            (
              {
                img,
                title,
                category,
                author,
                description,
                role,
                slug,
                authorImg,
              },
              index
            ) => (
              <div
                key={index}
                className="basis-[100%] group h-full bg-white border rounded-lg overflow-hidden flex flex-col gap-2"
              >
                <Link to={`/blogs/${slug}`} className="w-full">
                  <div className="h-[180px] w-full overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full group-hover:scale-105 duration-500 ease-in-out transition-transform object-cover"
                    />
                  </div>
                </Link>

                <div className="p-4 mb-4 flex flex-col gap-4">
                  <div className="self-start">
                    <h2 className="font-medium text-gray-600 mb-1">
                      {category}
                    </h2>
                    <h2 className="font-semibold text-lg">{title}</h2>
                  </div>
                  <p>{description.slice(0, 60)}..</p>
                  <div className="flex items-center gap-2">
                    <img
                      src={authorImg}
                      alt={author}
                      className="size-[40px] rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{author}</p>
                      <span className="text-gray-500">{role}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
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
