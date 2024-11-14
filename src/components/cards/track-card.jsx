import React from "react";
import {
  download,
  star,
  time,
  
  video,
} from "../../constants/assetsData";

const TrackCard = ({ course, title, fee, timeCount, videoCount, image, downloadCount }) => {
  return (
    <div >
      <div className=" bg-white relative  pl-3 pt-3 pr-3  pb-10  rounded-md shadow-lg w-[350px]">
        <div className=" rounded-md ">
          <img className=" rounded-md w-full " src={image} alt="" />
        </div>
        <div className=" mt-2 flex items-center justify-between ">
          <span className=" text-[14px] text-[#ACACAC]">{course}</span>
          <span>
            <img src={star} alt="" />
          </span>
        </div>
        <div className=" flex flex-col">
          <span className=" text-[16px] text-black font-medium">{title}</span>
          <span className=" text-primary">{fee}</span>
        </div>
        <hr />
        <div>
          <ul className=" text-[14px] text-[#ACACAC] flex items-center">
            <li className="flex items-center">
              <img className=" size-6 p-1 " src={time} alt="" />
              <span>{timeCount}</span>
            </li>
            <li className="flex   mx-3 items-center">
              <img className=" size-6 p-1 " src={video} alt="" />
              <span>{videoCount}</span>
            </li>
            <li className="flex items-center">
              <img className=" size-6 p-1 " src={download} alt="" />
              <span>{downloadCount}</span>
            </li>
          </ul>
        </div>
        <div className="  absolute flex  justify-center w-full items-center z-20 -bottom-4 ">
            <div className=" px-4 py-1 bg-primary   rounded-full text-white">Join course</div>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
