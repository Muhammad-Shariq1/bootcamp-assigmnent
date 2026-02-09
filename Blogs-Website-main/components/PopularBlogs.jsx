import React from "react";
import Link from "next/link";
import { popularBlogs } from "./blogs";

const PopularBlogs = () => {
  return (
    <div className="w-full pt-28 pb-10 flex flex-col items-center gap-3">
      <div className="text-4xl font-semibold">
        <h2>Popular Blogs</h2>
      </div>
      <div className="flex justify-center items-center gap-20">
        {popularBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={{
              pathname: "/BlogDetail",
              query: blog,
            }}
          >
            <div className="hover:border px-4 py-4 flex flex-col gap-3 rounded-2xl border-gray-600 cursor-pointer">
              <img
                className="rounded-2xl w-120 bg-cover h-100"
                src={blog.image}
                alt={blog.title}
              />
              <p className="text-lg font-bold">{blog.title}</p>
              <div className="flex justify-between items-center">
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

export default PopularBlogs;
