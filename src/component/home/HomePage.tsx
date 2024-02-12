import React from "react";
import GalleryPage from "./gallery/GalleryPage";
import { Button } from "@material-tailwind/react";
import LightOff from "./LightOff";
import LightOn from "./LightOn";
// import { Vnavbar } from "../navbar/VNavbar";

export default function HomePage() {
  const [lightData, setLightData] = React.useState<boolean>(false);
  const [lightON, setLightOff] = React.useState<boolean>(false);

  function checkType() {
    return "Anil";
    // if (arg) return "vikas pal";
    // return "";
    return ["Anil", "Vikas"];
  }
  function lightdata() {
    if (lightON)
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXA3r6n-TQ_PWVpOUBdZ5-svZmOIEcgk7I08B_OEdc3zwsAtxUpcuFPvT1QxBwlb-bCA&usqp=CAU";
    return "data:image/jpeg;base64,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";
  }
  // if (Boolean(checkType(true))) return <>fjdjdjdj</>;
  // console.log(checkType()[1], "checkType()[1]");

  // [getPosts].map((item: any, index: number) => {
  //   return item;
  // });
  // React.useEffect(() => {
  //   // console.log(getPosts());
  //   getPosts();
  // }, []);
  // return (
  //   <>
  //     {Array.isArray(checkType()) &&
  //       checkType().map((item: any, index: number) => {
  //         return item;
  //       })}
  //   </>
  // );
  // return <>{checkType()}</>;
  return (
    <>
      <div className="m-2">
        <p>Use Of Function</p>
        <img src={lightdata()} alt="" />
        <Button
          placeholder=""
          variant="gradient"
          size="sm"
          className=" lg:inline-block my-2"
          onClick={() => setLightOff(!lightON)}
        >
          {lightON ? "Turn On Light" : "Turn Off Light"}
        </Button>
      </div>
      <div className="m-2">
        <p>Use Of Ternary operator</p>
        {lightData ? <LightOff /> : <LightOn />}
        <Button
          placeholder=""
          variant="gradient"
          size="sm"
          className=" lg:inline-block "
          onClick={() => setLightData(!lightData)}
        >
          {lightData ? "Click For Light On" : "Click For light Off"}
        </Button>
      </div>
      <div className="m-2">
        <p>Use Globle Action</p>
        <Button
          placeholder=""
          variant="gradient"
          size="sm"
          className=" lg:inline-block "
          onClick={() => setLightData(!lightData)}
        >
          {lightData ? "Click For Light On" : "Click For light Off"}
        </Button>
      </div>
      <div>{/* <GalleryPage /> */}</div>
      {/* <div>
        {[getPosts()].map((item: any, index: number) => {
          return item;
        })}
      </div> */}
    </>
  );
}
