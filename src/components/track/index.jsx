import React from "react";
import { lambArrow, lambTrack } from "../../constants/assetsData";
import TrackCard from "../cards/track-card";
import { trackList } from "../../constants";

const Track = () => {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <img className=" p-2 h-[100px]" src={lambTrack} alt="bulb" />
        </div>
        <div className=" text-center">
          <h1 className=" text-[50px]  font-semibold text-black">Our Tracks</h1>
          <span className=" text-[#8A8A8A]">
            Lorem Ipsum is simply dummy text of the printing.
          </span>
        </div>
        <div>
          <img className=" p-2 h-[100px]" src={lambArrow} alt="arrow" />
        </div>
      </div>
      <div>
        <ul className=" grid grid-cols-3 place-items-center w-[80%] mx-auto my-10">
          {trackList?.map((item, index) => (
            <li key={index}>
              {" "}
              <TrackCard
                course={item.course}
                downloadCount={item.downloadCount}
                fee={item.fee}
                image={item.Image}
                timeCount={item.timeCount}
                videoCount={item.videoCount}
                title={item.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Track;
