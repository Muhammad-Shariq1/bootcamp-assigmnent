import React from "react";
import Link from "next/link";
import { featuredBlogs } from "./blogs";

const FeaturedBlogs = () => {
  return (
    <div className="w-full pt-28 pb-10 flex flex-col items-center gap-10">
      <div className="text-4xl font-semibold">
        <h2>Featured Blogs</h2>
      </div>
      <div className="w-[80%] flex flex-wrap justify-center items-center gap-20">
        {featuredBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={{
              pathname: "/BlogDetail",
              query: blog,
            }}
          >
            <div className="shadow-2xl flex flex-col gap-5 rounded-t-2xl border-gray-600 pb-6 cursor-pointer">
              <img
                className="p-4 w-160 bg-cover h-120"
                src={blog.image}
                alt={blog.title}
              />
              <p className="px-4 text-lg font-bold">{blog.title}</p>
              <p className="max-w-140 line-clamp-2 px-4">{blog.description}</p>
              <div className="px-4 flex justify-between items-center">
                <p className="font-semibold">🕛 {blog.date}</p>
                <p>{blog.status}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
