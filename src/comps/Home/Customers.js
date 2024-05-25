import { customersReviews } from "../../Constants";

const Customers = () => {
  return (
    <section className="padding-x py-10" dir="rtl">
      <h2 className="title-super">
        <span className="text-purple-500"># </span>
        <span className="halfbg-left pl-5 rounded-full">
          چیز که دیگران دربارمون میگن
        </span>
      </h2>
      <div className="grid lg:grid-cols-3 mt-24 gap-14">
        {customersReviews.map((item, index) => {
          return (
            <div className="flex border-b border-blue-500 border-opacity-25 pb-5">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-24 h-24 me-3"
              />
              <div className="">
                <h3>
                  {item.name}{" "}
                  <span className="text-slate-500 font-thin">/ {item.job}</span>
                </h3>
                <p className="md:text-sm text-xs text-slate-700 text-justify mt-3">
                  {item.review}
                </p>
                <p className="text-slate-500 md:text-[10px] text-[8px] text-end">
                  آخرین همکاری : {item.lastCooperation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;
