import React from "react";
import LandingComp from "../../components/landing";
import Track from "../../components/track";

const Landing = () => {
  return (
    <div className=" ">
      <LandingComp />
      <section className=" py-10">
        <Track />
      </section>
    </div>
  );
};

export default Landing;
