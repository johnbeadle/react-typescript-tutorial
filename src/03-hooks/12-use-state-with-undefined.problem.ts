import { useEffect, useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";

interface Data {
  id: number;
  name: string;
}

type MaybeData = Data | undefined

const fetchData = () => {
  return Promise.resolve({ id: 1, name: "John" });
};

export const Component = () => {
  const [data, setData] = useState<MaybeData>();

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []);

  type test = [Expect<Equal<typeof data, Data | undefined>>];
};
