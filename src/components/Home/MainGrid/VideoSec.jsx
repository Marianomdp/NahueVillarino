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
        url="https://res.cloudinary.com/dnj3a7mfg/video/upload/v1690242242/DSC_2015_x73ly9.mp4"
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
