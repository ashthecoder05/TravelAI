import React from 'react';
import video from '../assets/travel-video.mp4'; // Add your video file here

const VideoBackground = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex items-center justify-center h-full w-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold">Welcome to Travel AI</h1>
      </div>
    </div>
  );
};

export default VideoBackground;
