import React from "react";
import {
  atom,
  bottle,
  bulb,
  circle,
  circleMedium,
  circleSmall,
  corn,
  globe,
  landing1,
  logo,
  pencile,
  react,
  scale,
  search,
  system,
} from "../../constants/assetsData";
import { backgroundList } from "../../constants";

const LandingComp = () => {
  const navBar = [
    "home",
    "about us",
    "courses",
    "our services",
    "contact us",
    "sign in",
  ];
  return (
    <div className="bg-background  relative">
      <div className="   px-20 ">
        <header className="  py-5 font-roboto font-medium text-[18px]">
          <div className=" flex justify-between items-center">
            <ul className=" flex items-center">
              <li className=" cursor-pointer">
                <img className="  p-1 size-10" src={logo} alt="logo" />
              </li>
              <li className=" cursor-pointer hover:underline ml-2">
                Book Store
              </li>
            </ul>
            <ul className=" flex items-center">
              {navBar?.map((item, index) => (
                <li
                  className=" mx-4 last:bg-secondary last:text-white last:px-4 last:py-1 last:rounded-full capitalize cursor-pointer hover:underline"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </header>
        <section className=" my-16 relative w-full ">
          <div>
            <img
              className=" absolute left-[400px] h-[100px]  
             "
              src={scale}
              alt="scale"
            />
            <img
              className=" absolute top-0  left-0 h-[30px]"
              src={circleMedium}
              alt="cirlce"
            />
            <img
              className=" absolute top-[25px]  left-[30px] h-[20px]"
              src={circleSmall}
              alt="smallcircle"
            />
            <img
              className=" absolute left-[650px] h-[60px] top-[20px]"
              src={system}
              alt="system"
            />
            <img
              className="  absolute right-[200px] h-[60px] -top-[70px]"
              src={bulb}
              alt="bulb"
            />
            <img
              className=" absolute -bottom-[20px] left-0 h-[50px]"
              src={bottle}
              alt="bottle"
            />
            <img
              className=" absolute bottom-0 left-[200px] h-[70px]"
              src={corn}
              alt="corn"
            />
            <img
              className=" absolute -right-[50px] h-[300px]   z-10"
              src={circle}
              alt="cricle"
            />
            <img
              className=" h-[60px] absolute right-0 -top-[70px]"
              src={react}
              alt="react"
            />
            <img
              className=" h-[40px] absolute  -right-[44px] bottom-[100px]"
              src={pencile}
              alt="pencile"
            />
            <img
              className=" h-[60px] absolute  -right-[44px] bottom-0"
              src={globe}
              alt="globe"
            />
            <img
              className=" h-[60px] absolute   right-[244px] -bottom-[50px]"
              src={atom}
              alt="atom"
            />
          </div>
          <div className="   relative   flex justify-between w-full items-center z-30">
            <div className=" p-5 w-[600px]">
              <div className=" text-[60px] font-bold">
                <div>
                  <span className=" text-secondary">The</span>
                  <span className=" ml-4 text-primary">Smart</span>
                </div>
                <div>
                  <span className=" text-secondary ">Choice For</span>
                  <span className=" text-primary ml-4">Future</span>
                </div>
              </div>
              <p className=" text-[#8A8A8A] font-medium w-[500px]">
                Elearn is a global training provider based across the UK that
                specialises in accredited and bespoke training courses. We crush
                the...
              </p>
              <div>
                <div className=" mt-3 h-[50px] rounded-full px-3 w-full inline-flex  justify-between items-center bg-white">
                  <img className="p-1" src={search} alt="search" />
                  <input
                    placeholder="search for location..."
                    className=" text-[#0F335E]  placeholder:text-[#0F335E] flex-1 h-full outline-none px-2"
                    type="text"
                    name=""
                    id=""
                  />
                  <div className="   bg-secondary px-4 py-1 rounded-full text-white">
                    Continue
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img className=" p-5" src={landing1} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="    flex justify-center">
        <div className=" bg-[#4D2C5E] px-5 py-2 rounded- w-[80%] ">
          <ul className=" grid grid-cols-3  gap-5 py-10 place-items-center  ">
            {backgroundList?.map((item, index) => (
              <li className=" flex  items-center " key={index}>
                <div className="  bg-[#081f5777] flex items-center justify-center  rounded-lg p-2">
                  <img className=" p-1 size-[34px]" src={item.icon} alt="icon" />
                </div>
                <div className=" flex flex-col ml-2 w-[300px]">
                  <span className=" text-[25px] font-bold  text-white">
                    {item.title}
                  </span>
                  <span className=" mt-2 text-[14px] font-medium text-white">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LandingComp;
