import React from "react";
import ReactPlayer from "react-player";

const VideoSec = () => {
  return (
    <div style={{ opacity: 0.5, backgroundColor: "black" }}>
      <ReactPlayer
        className="react-player"
        url="https://res.cloudinary.com/dnj3a7mfg/video/upload/v1686111028/El_Coleccionista_WM_2022_Teaser_sin_intro_s0tp4z.mp4"
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        muted={true}
      />
    </div>
  );
};

export default VideoSec;
