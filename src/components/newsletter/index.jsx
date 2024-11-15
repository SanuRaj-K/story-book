import React from "react";
import { arrowPrimary, lambTrack, newsletterRound } from "../../constants/assetsData";

const NewsLetter = () => {
  return (
    <div>
      <div className=" relative text-white h-[350px]  flex justify-center items-center bg-[#4D2C5E] w-[80%] mx-auto">
        <img src={newsletterRound} className=" absolute top-0 right-0" alt="round" />
        <img src={newsletterRound} className=" absolute top-0 -right-[70px] " alt="round" />
        <img src={newsletterRound} className=" absolute top-0 left-0" alt="round" />
        <img src={newsletterRound} className=" absolute top-0 -left-[70px] " alt="round" />
        
        
        <img src={arrowPrimary} className=" absolute bottom-0  left-10  w-[130px]" alt="" />
        <img src={lambTrack} className="absolute bottom-0 right-10 w-[120px]" alt="" />
        <div className="py-10 ">
          <h1 className=" text-[40px] font-semibold">
            Subscribe to our newsletter
          </h1>
          <span className="  text-center text-[18px] font-medium">
            Lorem Ipsum is simply dummy text of the printing.
          </span>
          <div className="     rounded-full text-[14px] flex justify-between bg-white w-full">
            <input
              type="text"
              className="  px-3 placeholder:text-[#abababa] flex-1 outline-none"
              placeholder="Email address"
              name=""
              id=""
            />
            <div className="   m-1 bg-primary px-10 font-bold cursor-pointer py-2 rounded-full">
              send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
