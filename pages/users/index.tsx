import type { NextPage } from "next";
import Link from "next/link";
import { USER_LIST } from "../../constants";
import { createPath } from "../../routing";

const Users: NextPage = () => {
  return (
    <main>
      <h1>Users</h1>

      <nav>
        <ul>
          {USER_LIST.map((user) => (
            <li key={user.id}>
              <Link
                href={createPath({
                  pathname: "user",
                  params: { userId: user.id },
                })}
              >
                <a>/users/{user.id}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Users;
