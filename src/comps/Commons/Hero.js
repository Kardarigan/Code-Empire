import React from "react";

const Hero = ({ title, subtitle, light = false, background = false }) => {
  return (
    <section
      className={`text-center bg-fullcenter ${
        background ? "bg-fullcenter" : light ? "bg-slate-50" : "bg-slate-950"
      }`}
      dir="rtl"
      style={{ backgroundImage: "url(" + background + ")" }}
    >
      <div
        className={`padding-x pt-36 pb-40 ${
          background && "backdrop-blur-sm bg-blue-700 bg-opacity-30"
        }`}
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
      </div>
    </section>
  );
};

export default Hero;
