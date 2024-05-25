import { homeServices } from "../../Constants";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="padding-x py-10" dir="rtl" id="services">
      <h2 className="title-super">
        <span className="text-purple-500"># </span>
        <span className="halfbg-left pl-5 rounded-full">
          خدماتی که ما ارایه میدیم
        </span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-12">
        {homeServices.map((item) => {
          return (
            <div className="flex-fullcenter" key={item.title}>
              <Link
                to="/"
                className="size-full bg-blue-500 border-4 shadow-lg rounded-3xl border-slate-100 transition-all duration-300 backdrop-blur hover:scale-105 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5 relative transition-all text-slate-50">
                  <div className="md:text-3xl md:my-5 flex items-center transition-all md:group-hover:text-xl md:group-hover:my-0">
                    <i className={item.icon} />
                    <h3 className="ps-2">{item.title}</h3>
                  </div>
                  <p className="text-sm mt-3 displayTrans md:opacity-0 md:invisible md:absolute md:group-hover:opacity-100 md:group-hover:visible">
                    {item.describe}
                  </p>
                </div>
                <Link
                  to="#"
                  class="relative border-t-4 border-slate-100 inline-flex items-center justify-start py-3 pl-4 pr-12 font-bold text-blue-500 transition-all hover:pl-10 hover:pr-6 bg-slate-100 group/lets"
                >
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-purple-400 group-hover/lets:h-full"></span>
                  <span class="absolute text-slate-950 right-0 pr-4 duration-200 ease-out group-hover/lets:translate-x-12">
                    <i className="fal fa-chevron-right" />
                  </span>
                  <span class="absolute text-slate-50 left-0 pl-2.5 -translate-x-12 group-hover/lets:translate-x-0 ease-out duration-200">
                    <i className="fal fa-chevron-right" />
                  </span>
                  <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover/lets:text-white">
                    بزن بریم
                  </span>
                </Link>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
