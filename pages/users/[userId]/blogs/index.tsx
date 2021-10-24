import type { NextPage } from "next";
import { usePathParams } from "../../../../routing";

const Blogs: NextPage = () => {
  const { userId } = usePathParams<"blogs">();

  return (
    <main>
      <h1>{userId} Blogs</h1>
    </main>
  );
};

export default Blogs;
