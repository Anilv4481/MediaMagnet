import { Route, Routes } from "react-router";
import DecissionScreen from "../DecissionScreen";
import InstagramPage from "../insta/InstagramPage";
import TeraboxPage from "../terabx/TeraboxPage";
import YoutubePage from "../yt/YoutubePage";

export default function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DecissionScreen />} />
      <Route path="/youtube" element={<YoutubePage />} />
      <Route path="/instagram" element={<InstagramPage />} />
      <Route path="/terabox" element={<TeraboxPage />} />

      {/* <Route path="/farzidata" element={<FarziData />} />
      <Route path="/apidata" element={<ApiData />} />
      <Route path="/testdata" element={<TestData />} />
      <Route path="/ageverify" element={<AgeVerify />} />
      <Route path="/realtimedatafetch" element={<RealTimeDataFetch />} /> */}
    </Routes>
  );
}
