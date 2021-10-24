import type { NextPage } from "next";
import { usePathParams } from "../../../routing";

const Calc: NextPage = () => {
  const { operator, numbers } = usePathParams<"calc">();

  const num =
    operator === "+"
      ? numbers?.reduce((sum, n) => sum + Number.parseInt(n), 0) ?? 0
      : 0;

  return (
    <main>
      <h1>Calc</h1>

      <p>operator: {operator}</p>
      <p>numbers: {numbers?.join(",")}</p>

      <p>{num}</p>
    </main>
  );
};

export default Calc;
