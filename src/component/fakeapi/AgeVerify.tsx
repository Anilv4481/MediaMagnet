// import moment from "moment";
// import React from "react";

// export default function AgeVerify() {
//   let [startTime, setStartTime] = React.useState<number>(0);
//   const newAry = [
//     { name: "vikas" },
//     { name: "anil" },
//     { name: "sonam" },
//     { name: "neha" },
//     { name: "bhanu" },
//     { name: "shreya" },
//     { name: "tcs" },
//     { name: ";bhenchod" },
//   ];
//   const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   // const data = arry.slice();

//   setTimeout(() => {
//     setStartTime(Date.now() + 1);
//   }, 1000);

//   function sliceAry(start: number, end: number, ary: Array<any>) {
//     let sliceAry = [];
//     for (let i = start; i < end; i++) {
//       sliceAry.push(ary[i]);
//     }
//     return sliceAry;
//   }
//   // console.log(sliceAry(2, 6));
//   function splitAry(ary: Array<any>) {
//     const countLen = ary.length / 2;
//     return {
//       ary1: sliceAry(0, countLen, ary),
//       ary2: sliceAry(countLen, ary.length, ary),
//     };
//   }

//   return (
//     <>
//       <div>{splitAry(newAry).ary1.map((item: any) => item.name)}</div>
//       <div>{splitAry(newAry).ary2.map((item: any) => item.name)}</div>
//       <div>{splitAry(arry).ary1.map((item: any) => item)}</div>
//       <div>{splitAry(arry).ary2.map((item: any) => item)}</div>
//       {moment(startTime).format("MMMM Do YYYY, h:mm:ss a")}
//       <div>{startTime}</div>
//     </>
//   );
// }

import React from "react";

// export default function AgeVerify() {
//   const strArry = ["ABCDEFG", "ABCDEF"];

//   function splitAry(data: string[]) {
//     const numStr = [];
//     function sbStr(str: string, start: number, end: number) {
//       return str.substring(start, end);
//     }
//     for (const item of data) {
//       const strFragment = Math.ceil(item.length / 3);

//       console.log(strFragment, " strFragment");
//       for (let i = 1; i <= strFragment; i++) {
//         const strValue = sbStr(item, i - 1, strFragment * i);
//         numStr.push(strValue);
//       }
//       // const leftFrag =
//       // const rightFrag = item.substring(strFragment);
//       // numStr.push("first:- " + leftFrag, "last :- " + rightFrag);
//     }
//     return numStr;
//   }

//   return (
//     <>
//       <div>AgeVerify</div>
//       <div>{splitAry(strArry)}</div>
//     </>
//   );
// }

export default function AgeVerify() {
  const data = [10, 12, 8, 17, 14].sort((a, b) => a - b);
  const [highestVal, setHighestVal] = React.useState(data[0]);
  function findHighest() {
    for (let i = 0; i < data.length; i++) {
      if (data[i] > highestVal) {
        setHighestVal(i);
      }
    }
  }
  const tree = {
    a: { b: 5, c: 7 },
    b: { d: 8 },
    c: { d: 2 },
    d: 2,
  };
  function breakTree() {
    const goal = "d";
    const objKeys = Object.keys(tree);
    console.log(objKeys, "objKeys");
    const firstFrag = Object.keys(tree).length / 2;
    console.log(firstFrag);
    const path = [];
    for (let i = 0; i < firstFrag; i++) {
      if (objKeys[i] == goal) {
        path.push(objKeys[firstFrag]);
      } else if (objKeys[firstFrag + i] == goal) {
        path.push(objKeys[firstFrag + i]);
      }
    }
    console.log(path);
    return path;
    // console.log(listFrag, "slistFrag");
  }

  console.log(data[data.length - 1], data[data.length - 2]);

  React.useEffect(() => {
    findHighest();
    breakTree();
  }, []);

  // console.log(breakTree() ,"breakTree() ")
  return (
    <div>
      <div>ary:{data}</div>
      Highest Val: {data[highestVal]}
      Second Highest Val: {data[highestVal - 1]}
    </div>
  );
}
