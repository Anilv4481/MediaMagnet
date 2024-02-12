import { ChildProcess } from "child_process";
import React, { useEffect } from "react";
import { number } from "yup";

export default function ApiData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = React.useState([]);
  const [isLodding, setIsLodding] = React.useState<boolean>(false);

  async function getData() {
    try {
      setIsLodding(true);
      const res = await (await fetch(url)).json();
      setData(res);
      setIsLodding(false);
    } catch (error) {
      console.log("err");
    }
  }
  useEffect(() => {
    getData();
  }, []);

  if (isLodding) return <>Lodding</>;
  return (
    <>
      <div>ApiData</div>

      {data.map((item: any, index: number) => (
        <li key={index}>{item.title}</li>
      ))}

      {/* {data.map((item: any, index: number) => (
        <li key={index}>{item.title}</li>
      ))} */}
    </>
  );
}
