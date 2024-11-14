import React from "react";
import LandingComp from "../../components/landing";
import Track from "../../components/track";
import Premium from "../../components/premium";

const Landing = () => {
  return (
    <div className=" ">
      <LandingComp />
      <section className=" py-10">
        <Track />
      </section>
      <section className=" bg-[#FDF8EE] py-20">
        <Premium />
      </section>
    </div>
  );
};

export default Landing;
