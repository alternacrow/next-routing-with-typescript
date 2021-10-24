import type { NextPage } from "next";
import { usePathParams } from "../../../routing";

const Address: NextPage = () => {
  const { prefecture, cities } = usePathParams<"address">();

  return (
    <main>
      <h1>Address</h1>
      <p>prefecture: {prefecture}</p>
      <p>cities: {cities.join(",")}</p>
    </main>
  );
};

export default Address;
