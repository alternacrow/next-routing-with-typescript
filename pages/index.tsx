import type { NextPage } from "next";
import Link from "next/link";
import { createPath } from "../routing";

const home = createPath({ pathname: "home" });
const users = createPath({ pathname: "users" });
const user1 = createPath({ pathname: "user", params: { userId: "abc1234" } });
const user2 = createPath({ pathname: "user", params: { userId: "abc2345" } });
const user1blogs = createPath({
  pathname: "blogs",
  params: { userId: "abc1234" },
});
const user2blogs = createPath({
  pathname: "blogs",
  params: { userId: "abc2345" },
});
const user1blog1 = createPath({
  pathname: "blog",
  params: { userId: "abc1234", blogId: 1 },
});
const user1blog2 = createPath({
  pathname: "blog",
  params: { userId: "abc1234", blogId: 2 },
});
const user2blog1 = createPath({
  pathname: "blog",
  params: { userId: "abc2345", blogId: 1 },
});
const user2blog2 = createPath({
  pathname: "blog",
  params: { userId: "abc2345", blogId: 2 },
});
const address1 = createPath({
  pathname: "address",
  params: { prefecture: "hokkaido", cities: ["sendai", "hakodate"] },
});
const address2 = createPath({
  pathname: "address",
  params: { prefecture: "tokyo", cities: ["shibuya", "shinjuku"] },
});
const sum0 = createPath({
  pathname: "calc",
  params: { operator: "+" },
});
const sum1 = createPath({
  pathname: "calc",
  params: { operator: "+", numbers: [1, 2] },
});
const sum2 = createPath({
  pathname: "calc",
  params: { operator: "+", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
});

const paths = [
  home,
  users,
  user1,
  user2,
  user1blogs,
  user2blogs,
  user1blog1,
  user1blog2,
  user2blog1,
  user2blog2,
  address1,
  address2,
  sum0,
  sum1,
  sum2,
];

const Home: NextPage = () => {
  return (
    <main>
      <h1>Home</h1>

      <nav>
        <ul>
          {paths.map((path) => (
            <li key={`link-${path}`}>
              <Link href={path}>
                <a>{path}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Home;
