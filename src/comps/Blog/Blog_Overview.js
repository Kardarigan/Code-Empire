import { categories, sortby } from "../../Constants";
import { blogs } from "../../data/Blogs";
import { Blog_Card } from "../Portal";

const Blog_Overview = () => {
  return (
    <section className="container padding" dir="rtl">
      <div className="flex-seperate mb-5 max-md:flex-col border-b border-blue-200 border-opacity-30 pb-3">
        <div className="flex gap-x-1">
          <label htmlFor="category" className="label">
            دسته بندی :{" "}
          </label>
          <select id="category" className="select">
            {categories.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
        </div>
        <div className="flex items-center gap-2">
          {sortby.map((item, index) => {
            return (
              <>
                <button className="text-slate-300">{item}</button>
                {index + 1 < sortby.length && (
                  <span className="text-slate-300">|</span>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {blogs.map((item, index) => {
          return <Blog_Card blog={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Blog_Overview;
