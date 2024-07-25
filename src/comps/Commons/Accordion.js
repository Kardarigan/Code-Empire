import { useState } from "react";

const Accordion = ({ label, describe }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full border-2 transition-all rounded-xl px-5 py-3 border-blue-400 overflow-hidden ${
        open ? "max-h-max" : "h-[55px]"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex-seperate">
        <h5>{label}</h5>
        <i
          className={`fas fa-chevron-down text-blue-400 transition-all ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </div>
      <div className="mt-5">{describe}</div>
    </div>
  );
};

export default Accordion;
