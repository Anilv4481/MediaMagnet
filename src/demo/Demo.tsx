import React from "react";
import Cart from "./Cart";
import YouTube from "react-youtube";
import { saveAs } from "file-saver";

export default function Demo() {
  const [cart, setCart] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState();

  function pocUp(data: any) {
    setCart(data);
  }
  function videoUrlChange(e: any) {
    setVideoUrl(e.target.value);
  }
  function videoDownload(e: any) {
    const videoDirectLink = manipulateVideoLink(videoUrl);
    saveAs(videoDirectLink, "downloaded-video.mp4");
  }
  function manipulateVideoLink(originalLink: any) {
    return originalLink;
  }
  return (
    <>
      <div>
        {/* <Cart /> */}
        <button className="text-center" onClick={() => setCart(!cart)}>
          Pop Up
        </button>

        {cart && <Cart />}
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter video link"
          value={videoUrl}
          onChange={videoUrlChange}
        />
        <button onClick={videoDownload}>Download Video</button>
        {videoUrl && <YouTube videoId={videoUrl} />}
      </div>
    </>
  );
}
