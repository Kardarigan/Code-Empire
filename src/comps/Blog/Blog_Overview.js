import { blogs } from "../../data/Blogs";
import { Blog_Card } from "../Portal";

const Blog_Overview = () => {
  return (
    <section className="container padding" dir="rtl">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {blogs.map((item, index) => {
          return <Blog_Card blog={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Blog_Overview;
