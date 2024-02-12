import React, { useEffect } from "react";
import axios from "axios";
import { VUtils } from "./VUtils";

export default function FarziData() {
  //  const PicData = "https://www.shutterstock.com/video/search/animation-3d";
  const PicData = "https://picsum.photos/400/600";
  // what is difference between apis and url and uri
  const [imageData, setImageData] = React.useState<any>();
  const [isLoding, setIsLoding] = React.useState<boolean>(false);
  // console.log(first)
  async function getData() {
    try {
      setIsLoding(true);
      const res = await VUtils.fakeApis();
      //   const res = await (await fetch(VUtils.fakeApis() as any)).json();
      //   console.log(res, "res");
      setImageData(JSON.parse(res as any));
      setIsLoding(false);
    } catch (error) {
      console.log("This Is Your Error", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  //   getData();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await axios.get(PicData);
  //         setImageData(res.config.url);
  //       } catch (error) {}
  //     };
  //     fetchData();
  //   }, []);
  console.log(imageData, "imageData");
  //   if (isLoding) return <>Lodding</>;
  //   const ary = [1, 2];
  //   const mapFun = false&&imageData.map((item: any) => item.id);
  //   console.log(mapFun, "mapFun");

  function checkData(arg: string) {
    // console.log(arg)
    if (false === Boolean(arg)) {
      return "vikas";
    } else {
      return "anil funtio";
    }
  }
  console.log(false ? "anil" : "vikas");
  return (
    <>
      {checkData(false ? "tt" : true ? (!false ? "vik" : "") : "")}
      {/* {mapFun} */}
      <div>farziData</div>
      <div className="flex m-2">
        {imageData &&
          imageData.map((item: any, index: number) => (
            <div className="flex m-2">
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.age}</p>
              <img src={item.url} />
            </div>
          ))}
      </div>
      {/* <div>{imageData && <img src={imageData.uri} alt="Placeholder" />}</div> */}
    </>
  );
}
