import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { BLOG_LIST } from "../../../../constants";
import { createPath, usePathParams } from "../../../../routing";

const Blogs: NextPage = () => {
  const { userId } = usePathParams<"blogs">();
  const blogs = BLOG_LIST.filter((blog) => blog.userId === userId);

  if (userId === undefined) {
    return (
      <main>
        <p>User is Not Found</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Blogs</h1>

      <nav>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link
                href={createPath({
                  pathname: "blog",
                  params: {
                    userId,
                    blogId: blog.id,
                  },
                })}
              >
                <a>{`/users/${userId}/blogs/${blog.id}`}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Blogs;
