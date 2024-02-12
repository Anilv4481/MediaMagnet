import React from "react";
import { VUtils } from "./VUtils";

export default function Alert() {
  const [ary, setAry] = React.useState<Array<any>>([]);
  function addFun() {
    const value = VUtils.takeInp("Enter Data:- ");
    setAry((prv) => [...prv, value]);
  }
  function deleteData(num: number) {
    const filterData = ary.filter((asd) => asd !== num);
    setAry(filterData);
  }

  const testAry = ["vikas", "anil"];
  return (
    <>
      table
      <button onClick={() => addFun()}>click me to add</button>
      {/* <div className="flex">{ary}</div> */}
      <div>
        {ary.map((item: number) => (
          <p onClick={() => deleteData(item)}>{item}</p>
        ))}
      </div>
    </>
  );
}
