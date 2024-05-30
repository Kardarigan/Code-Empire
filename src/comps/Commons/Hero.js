import React from "react";

const Hero = ({ title, subtitle, light = false }) => {
  return (
    <section
      className={`text-center padding-x pt-36 pb-40 ${
        light ? "bg-slate-50" : "bg-slate-950"
      }`}
      dir="rtl"
    >
      <h1 className={`title-lg ${!light && "text-slate-50"}`}>
        <span className="halfbg-right">{title}</span>
      </h1>
      <h3
        className={`font-thin mt-5 ${
          light ? "text-slate-700" : "text-slate-300"
        }`}
      >
        {subtitle}
      </h3>
    </section>
  );
};

export default Hero;
