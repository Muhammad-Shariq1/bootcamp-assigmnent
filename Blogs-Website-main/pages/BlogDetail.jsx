import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!router.isReady) return; 
    const { title, image, date, description, status } = router.query;
    setBlog({ title, image, date, description, status });
  }, [router.isReady, router.query]);

  if (!blog) return <p className="pt-28 text-center">Loading...</p>;

  return (
    <div className="w-full pt-28 pb-10 flex flex-col items-center gap-6">
      {blog.image && (
        <img
          className="w-2/3 h-auto rounded-xl"
          src={blog.image}
          alt={blog.title}
        />
      )}
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-500">
        {blog.date} | {blog.status}
      </p>
      {blog.description && (
        <p className="text-lg max-w-2xl mt-4">{blog.description}</p>
      )}
    </div>
  );
};

export default BlogDetail;
