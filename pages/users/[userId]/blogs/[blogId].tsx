import type { NextPage } from "next";
import { usePathParams } from "../../../../routing";

const Blog: NextPage = () => {
  const { userId, blogId } = usePathParams<"blog">();

  return (
    <main>
      <h1>
        {userId} Blog {blogId}
      </h1>
    </main>
  );
};

export default Blog;
