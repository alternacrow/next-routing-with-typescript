import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { BLOG_LIST } from "../../../../constants";
import { usePathParams } from "../../../../routing";

const Blog: NextPage = () => {
  const { userId, blogId } = usePathParams<"blog">();

  const blog = BLOG_LIST.find(
    (blog) => blog.userId === userId && blog.id === Number(blogId)
  );

  if (blog === undefined) {
    return (
      <main>
        <p>Blog is Not Found</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Blog</h1>

      <div>
        <p>Id: {blog.id}</p>
        <p>Title: {blog.title}</p>
        <p>Content: {blog.content}</p>
      </div>
    </main>
  );
};

export default Blog;
