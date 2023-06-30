import React from "react";
import ReactPlayer from "react-player";

const VideoSec = () => {
  return (
    <div
      style={{
        opacity: 0.7,
        margin: "25px",
      }}
    >
      <ReactPlayer
        className="react-player"
        url="https://res.cloudinary.com/dnj3a7mfg/video/upload/v1688007919/video_web_sfwpbi.mp4"
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        muted={true}
        border="solid"
      />
    </div>
  );
};

export default VideoSec;
