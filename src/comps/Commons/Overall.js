import { Link } from "react-router-dom";

const Overall = ({ thing, light = false }) => {
  return (
    <section
      className={`h-screen padding-x pb-24 text-center flex flex-col justify-center ${
        light ? "bg-slate-50" : "bg-slate-950"
      }`}
      dir="rtl"
    >
      <h2 className={`title-lg ${!light && "text-slate-50"}`}>
        <span className="halfbg-right">{thing.title}</span>
      </h2>
      <p
        className={`max-md:text-xs my-5 ${
          light ? "text-slate-700" : "text-slate-300"
        }`}
      >
        {thing.describe}
      </p>
      <div className="md:inline-flex flex max-md:w-full max-md:flex-col gap-3 mx-auto">
        {thing.links.map((item, index) => {
          return (
            <Link
              to={item.link}
              className={`button ${
                light && index > 0
                  ? "button-dark"
                  : light && index === 0
                  ? "button-light"
                  : index > 0
                  ? "button-light"
                  : "button-dark"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Overall;
