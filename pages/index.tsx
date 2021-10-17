import type { NextPage } from "next";
import Link from "next/link";
import { createPath } from "../routing";

const Home: NextPage = () => {
  return (
    <main>
      <h1>Home</h1>

      <nav>
        <ul>
          <li>
            <Link
              href={createPath({
                pathname: "home",
              })}
            >
              <a>/users</a>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Home;
