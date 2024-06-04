import { useState } from "react";
import { categories, sortby } from "../../Constants";
import { blogs } from "../../data/Blogs";
import { Blog_Card } from "../Portal";

const Blog_Overview = () => {
  const [category, setCategory] = useState("همه");
  const handleCategoryChange = () => {
    let selectedCategory = document.getElementById("category").value;
    setCategory(selectedCategory);
  };

  const [serchValue, setSerchValue] = useState(null);
  const handleSearch = () => {
    let searchedThing = document.getElementById("search").value;
    setSerchValue(searchedThing);
  };

  return (
    <section className="container padding" dir="rtl">
      <div className="flex-seperate mb-5 max-md:flex-col gap-5 border-b border-blue-200 border-opacity-30 pb-3">
        <div className="flex gap-x-1">
          <label htmlFor="category" className="label">
            دسته بندی :{" "}
          </label>
          <select
            id="category"
            className="select w-[180px]"
            onChange={handleCategoryChange}
          >
            {categories.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex gap-x-3 border-mac rounded bg-blue-400 text-blue-50">
          <button onClick={handleSearch}>
            <i className="fas fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            id="search"
            className="field allunset bg-transparent"
          />
        </div>
        <div className="flex items-center gap-1 text-slate-400 font-thin">
          {sortby.map((item, index) => {
            return (
              <>
                <span className="cursor-pointer">{item}</span>
                {index + 1 < sortby.length && (
                  <span className="opacity-50">/</span>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {serchValue
          ? blogs
              .filter(
                (item) =>
                  item.title && item.title.toString().includes(serchValue)
              )
              .map((item, index) => {
                return <Blog_Card blog={item} key={index} />;
              })
          : blogs
              .filter(
                (item) => category === "همه" || item.category === category
              )
              .map((item, index) => {
                return <Blog_Card blog={item} key={index} />;
              })}
      </div>
    </section>
  );
};

export default Blog_Overview;
