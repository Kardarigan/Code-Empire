import { useEffect, useState, useMemo } from "react";
import { categories, sortby } from "../../Constants";
import { blogs } from "../../data/Blogs";
import { Blog_Card } from "../Portal";

const Blog_Overview = () => {
  const [category, setCategory] = useState("همه");
  const handleCategoryChange = () => {
    let selectedCategory = document.getElementById("category").value;
    setCategory(selectedCategory);
  };

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    let searchedThing = document.getElementById("search").value;
    setSearchValue(searchedThing);
  };

  const [sort, setSort] = useState(0);
  const handleSort = (index) => {
    setSort(index);
  };

  const filteredBlogs = useMemo(() => {
    let sortedBlogs = [...blogs];

    if (sort === 1) {
      sortedBlogs.reverse();
    } else if (sort === 2) {
      sortedBlogs.sort((a, b) => a.suggested - b.suggested);
    }

    if (category !== "همه") {
      sortedBlogs = sortedBlogs.filter((blog) => blog.category === category);
    }

    if (searchValue) {
      sortedBlogs = sortedBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return sortedBlogs;
  }, [sort, category, searchValue]);

  const [page, setPage] = useState(1);
  const blogsPerPage = 9;
  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
  const isFirstPage = page === 1;
  const isLastPage = page === pageCount;

  const currentBlogs = useMemo(() => {
    const startIndex = (page - 1) * blogsPerPage;
    return filteredBlogs.slice(startIndex, startIndex + blogsPerPage);
  }, [filteredBlogs, page]);

  const handlePageChanging = (e) => {
    const pageNumber = parseInt(e.target.value);
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (!isFirstPage) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    const selectBox = document.getElementById("pageSelect");
    if (selectBox) {
      selectBox.value = page;
    }
  }, [page]);

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
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
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
        <div className="flex items-center gap-1 text-slate-400 font-thin select-none">
          {sortby.map((item, index) => (
            <span key={index}>
              <span
                className={`cursor-pointer ${
                  index === sort && "text-blue-600"
                }`}
                onClick={() => handleSort(index)}
              >
                {item}
              </span>
              {index + 1 < sortby.length && (
                <span className="opacity-50">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {currentBlogs.map((blog, index) => (
          <Blog_Card blog={blog} key={index} />
        ))}
      </div>
      <div className="max-w-[250px] mx-auto text-center mt-12">
        {category === "همه" ? (
          <>
            <button
              onClick={handlePrevPage}
              className={isFirstPage && "opacity-70"}
            >
              Prev
            </button>
            <select
              id="pageSelect"
              className="mx-1 bg-transparent py-0 px-[30px!important] border border-transparent shadow-none focus:border focus:border-slate-100"
              onChange={handlePageChanging}
            >
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (item, index) => (
                  <option key={index} value={item} className="text-slate-950">
                    {item}
                  </option>
                )
              )}
            </select>
            <button
              onClick={handleNextPage}
              className={isLastPage && "opacity-70"}
            >
              Next
            </button>
          </>
        ) : (
          "این همه ی مطالب این دسته بود"
        )}
      </div>
    </section>
  );
};

export default Blog_Overview;
