import type { NextPage } from "next";
import Link from "next/link";
import { User, USER_LIST } from "../../../constants";
import { createPath, usePathParams } from "../../../routing";

const User: NextPage = () => {
  const { userId } = usePathParams<"user">();
  const user = USER_LIST.find((user) => user.id === userId);

  if (user === undefined) {
    return (
      <main>
        <p>User is Not Found</p>
      </main>
    );
  }

  return (
    <main>
      <h1>User</h1>

      <div>
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link
              href={createPath({
                pathname: "blogs",
                params: {
                  userId: user.id,
                },
              })}
            >
              <a>/users/{userId}/blogs</a>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default User;

User.getInitialProps = async (ctx) => {
  return {};
};
