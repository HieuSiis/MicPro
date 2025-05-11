import React from "react";

const VideoComponent = () => {
  return (
    <section className="main-container sm:mt-0 mt-[60px] flex justify-center items-center ">
      <div className="h-[1074px] bg-slate-100 absolute w-full -z-10 translate-y-[530px]"></div>
      <video
        className=" sm:rounded-[30px] rounded-xl"
        controls
      >
        <source src='/videos/charity.mp4' type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoComponent;
