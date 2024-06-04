import { useParams } from "react-router-dom";
import { blogs } from "../data/Blogs";
import { Blog_Main, Blog_Side, Hero, Overall } from "../comps/Portal";
import { singleBlogOverall } from "../Constants";

const Single_Blog = () => {
  const { blog } = useParams();
  const theBlog = blogs.find(
    (e) =>
      e &&
      e.title.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase() ===
        blog.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase()
  );

  return (
    <>
      <Hero title={theBlog.title} background={theBlog.cover} />
      <section
        className="grid md:grid-cols-4 gap-8 container padding"
        dir="rtl"
      >
        <Blog_Main blog={theBlog} />
        <Blog_Side category={theBlog.category} />
      </section>
      <Overall thing={singleBlogOverall} />
    </>
  );
};

export default Single_Blog;
