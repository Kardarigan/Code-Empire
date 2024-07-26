import { serviceDetails } from "../../Constants.js";

const Service_Side = ({ service }) => {
  return (
    <aside className="flex flex-col md:col-span-2 gap-y-5">
      <div className="border-mac pt-2 pb-5">
        <h4 className="title">
          <i className="fa-solid fa-hashtag"></i> مشخصات
        </h4>
        <ul className="grid gap-y-3 mt-5">
          {service.details.map((item, index) => {
            return (
              <li className="flex-seperate warn">
                <span className="font-bold">{serviceDetails[index]} :</span>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="warn py-3">شروع کار</button>
    </aside>
  );
};

export default Service_Side;
