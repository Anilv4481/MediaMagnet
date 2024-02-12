import { truncate } from "fs";
import React from "react";
import { number } from "yup";

export default function TestData() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  interface SortableItem {
    // Define the type of elements in the array (assuming numbers in this case)
    value: number;
  }

  function trangle(t1: number, t2: number, t3: number) {
    const prag =
      t1 === t2
        ? t2 === t3
          ? "Equilateral"
          : "Isosceles"
        : t1 === t3
        ? "Isosceles"
        : "Scalene";

    return prag;
  }
  function valiData(data: any) {
    return data !== null && data !== undefined && data !== ""
      ? "valid"
      : "unvalid";
  }
  
  const numbers = [
    { value: 5 },
    { value: 2 },
    { value: 8 },
    { value: 1 },
    { value: 7 },
  ];
  function sortArrayAscending(inputArray: SortableItem[]): SortableItem[] {
    return inputArray.slice().sort((a, b) => (a.value > b.value ? 1 : -1));
  }
  const sortedNumbers = sortArrayAscending(numbers);

  
  return (
    <>
      <div className="flex text-2xl text-center text-gray-950  list-none hover:list-disc">
        TestData
      </div>
      <div className="mx-6">
        <p>1.Even And Odd</p>
        <div className="flex">
          {number.map((item: number, index: number) =>
            item % 2 === 0 ? "even" : "odd"
          )}
        </div>
        <p>2.Trangle</p>
        <div>{trangle(1, 2, 3)}</div>
        <p>3.Valid Or Not Valid Data</p>
        <div>{valiData("")}</div>
        <p>4.Sorting</p>
        {sortedNumbers.map((item: any, index: number) => (
          <li key={index}>{item.value}</li>
        ))}
        {/* <div>{sortedNumbers[]}</div> */}
      </div>
    </>
  );
}
