import React from "react";

const FooterList = ({ title, data }) => {
  return (
    <div>
      <div>
        <h1 className=" text-secondary text-[24px] font-bold   capitalize">{title}</h1>
        <ul className=" mt-3">
          {data?.map((item, index) => (
            <li  className=" hover:underline  cursor-pointer my-2 capitalize text-[#606060]" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
