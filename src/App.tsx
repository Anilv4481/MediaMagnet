import React, { useEffect } from "react";
import LoggedInRoutes from "./component/customRoutes/LoggedInRoutes";
import PublicRoutes from "./component/customRoutes/PublicRoutes";
import { button } from "@material-tailwind/react";
import { authStore } from "./component/pullstate/store";
import Alert from "./component/fakeapi/Alert";
import PdfRead from "./component/fakeapi/ExplorePdf";
import ExplorePdf from "./component/fakeapi/ExplorePdf";
import { initFirebase } from "./services/FirebaseServices";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/FirebaseConfig";
import Demo from "./demo/Demo";
import NewComponent from "./NewComponent";
import Embed from "react-embed";
import DecissionScreen from "./component/DecissionScreen";

export default function App() {
  //   const [isImg, setIsImg] = React.useState(false);
  //   function displayUrl() {
  //     if (isImg)
  //       return "https://tse1.mm.bing.net/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&pid=Api&P=0&h=180";
  //     return "https://tse1.mm.bing.net/th?id=OIP.CvMAeJSHI_WeUIJD8x32QAHaEZ&pid=Api&P=0&h=180";
  //   }
  //   return (
  //     <>
  //       <img src={displayUrl()} alt="" />
  //       <button onClick={() => setIsImg(!isImg)}>Click me</button>
  //     </>
  //   );
  // }

  const Iscondistion = authStore.useState();
  //   return (
  //     <>
  //       {Iscondistion ? <PublicRoutes /> : <LoggedInRoutes />}
  //       <button onClick={() => setIscondistion(!Iscondistion)}>
  //         {Iscondistion ? "Click to LoggedIn Routes" : "Click to Public Routes"}
  //       </button>
  //     </>
  //   );
  useEffect(() => {
    initFirebase();
  }, []);

  const isLoggedIn = authStore.useState((s) => s.isloggedin);
  // return <NewComponent />;
  // console.log(isLoggedIn, "isLoggedIn");

  // <VideoLinkDownloder />;
  // if (isLoggedIn)
  return <LoggedInRoutes />;
  return <PublicRoutes />;
}
