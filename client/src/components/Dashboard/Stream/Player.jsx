import React from 'react'
import "plyr-react/plyr.css";
import Hls from "hls.js";
import Plyr, { APITypes, PlyrProps, PlyrInstance } from "plyr-react";



const VideoComponent = ({videoUrl}) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr");
      var hls = new Hls();
      hls.loadSource(
        videoUrl
      );
      hls.attachMedia(video);
      // @ts-ignore
      ref.current.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        ref.current.plyr.play();
      });
    };
    loadVideo();
  });

  return (
    <Plyr
      id="plyr"
      options={{
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
        },
        settings: ["captions", "quality", "speed", "loop"]
      }}
      source={{}}
      ref={ref}
    />
  );
};

export default VideoComponent