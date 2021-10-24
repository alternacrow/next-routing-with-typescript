import type { NextPage } from "next";
import { usePathParams } from "../../../routing";

const User: NextPage = () => {
  const { userId } = usePathParams<"user">();

  return (
    <main>
      <h1>User: {userId}</h1>
    </main>
  );
};

export default User;
