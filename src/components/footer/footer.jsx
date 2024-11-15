import React from "react";
import { logo } from "../../constants/assetsData";
import FooterList from "../footer-lists";
import { footerListOne, footerListThree, footerListTwo } from "../../constants";

const Footer = () => {
  return (
    <div className=" bg-[#FDF8EE]">
      <div className="  flex justify-evenly flex-wrap py-10 px-16 w-full  ">
        <div>
          <div className="  mb-2 flex items-center">
            <img className=" p-2 size-10" src={logo} alt="logo" />
            <span className=" text-[24px] font-bold text-secondary ml-2" >Book Store</span>
          </div>
          <p className="pr-4 w-[300px] text-[#606060]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </p>
        </div>
        <div>
          <div className=" grid grid-cols-3 gap-20">
            <FooterList data={footerListOne} title="company" />
            <FooterList data={footerListTwo} title="courses" />
            <FooterList data={footerListThree} title="support" />
          </div>
        </div>

        <div>
          <h1  className="text-[24px] text-secondary font-bold mb-2">Contact info</h1>
          <div className=" text-[#606060] flex flex-col">
            <span>+0913-705-3875</span>
            <span className=" my-2">ElizabethJ@jourrapide.com</span>
            <span className=" flex flex-col">
              <span>4808 Skinner Hollow Road</span>
              <span>Days Creek, OR 97429</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
