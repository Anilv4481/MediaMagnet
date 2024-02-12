import React from "react";
// src/components/VideoDownloader.tsx
import axios from "axios";
// import InstagramEmbed from "react-instagram-embed";

export default function ShowYtVideo() {
  const [videoLink, setVideoLink] = React.useState("");
  const [showVideoUrl, setShowVideoUrl] = React.useState<string>("");

  async function handleDownload() {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/download",
        { videoLink },
        { responseType: "blob" }
      );

      const videoDataUrl = URL.createObjectURL(response.data);
      setShowVideoUrl(videoDataUrl);
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  }

  console.log(showVideoUrl, "showVideoUrl");
  return (
    <div>
      <h1>Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter video link"
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <button onClick={() => handleDownload()}>View/Download Video</button>
      {/* <Embed url="https://www.instagram.com/reel/C3A3JhCpTeO/?utm_source=ig_web_copy_link" /> */}
      {showVideoUrl && (
        <video
          src={showVideoUrl}
          controls
          style={{ height: "200px", width: "400px" }}
        />
      )}
      {/* {isBs && (
          <img src={isBs} alt="" style={{ height: "100vh", width: "100vw" }} />
        )} */}
      {/* <input
          type="file"
          accept="video/*"
          onChange={async (e) =>
            await VUtils.convrtBs64(e, function (data: any) {
              setBs(data);
            })
          }
        /> */}
    </div>
  );
}
