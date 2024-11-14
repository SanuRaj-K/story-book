import React from "react";
import {
  atom,
  bulb,
  globe,
  heart,
  jig,
  pencile,
  premiumLeft,
  react,
  system,
} from "../../constants/assetsData";

const Premium = () => {
  return (
    <div className=" ">
      <div className=" flex justify-evenly   px-10">
        <div className=" relative">
          <img className=" w-[350px] p-4" src={premiumLeft} alt="premiumleft" />
          <img src={globe} className=" absolute h-[50px]" alt="" />
          <img
            src={system}
            className=" absolute h-[40px]  -left-3 top-1/2"
            alt=""
          />
          <img src={bulb} className=" absolute h-[50px] top-0" alt="" />
          <img
            src={react}
            className=" absolute h-[50px] right-0  top-0"
            alt=""
          />
          <img
            src={pencile}
            className=" absolute h-[30px] -right-4 top-1/2"
            alt=""
          />
          <img
            src={atom}
            className=" absolute h-[40px] -right-[29px] bottom-8"
            alt=""
          />
        </div>
        <div>
          <div>
            <h1 className=" capitalize font-bold text-[60px] ">
              <span>Premium</span>
              <span className=" ml-2 text-primary">Learning</span> <br />
              <span>experience</span>
            </h1>
            <div>
              <ul >
                <li className=" flex  items-center ">
                  <div className="  rounded-lg bg-[#4D2C5E]">
                    <img className="   size-14 p-3" src={heart} alt="heart" />
                  </div>
                  <div className=" ml-3 flex flex-col">
                    <span className=" text-secondary font-medium text-[18px]">
                      Easly Accessible
                    </span>
                    <span className=" text-[#8A8A8A] text-[16px]">
                      Learning Will fell Very Comfortable With Courslab.
                    </span>
                  </div>
                </li>
                <li className="flex  mt-4 items-center">
                  <div className="rounded-lg bg-[#4D2C5E]">
                    <img className="size-14 p-3" src={jig} alt="heart" />
                  </div>
                  <div className=" ml-3 flex flex-col">
                    <span className=" text-secondary font-medium text-[18px]">
                      
                       
                      Fun Learning experience
                    </span>
                    <span className=" text-[#8A8A8A] text-[16px]">
                      Learning Will fell Very Comfortable With Courslab.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
