import { Link } from "react-router-dom";
import { blogs } from "../../data/Blogs";
import { Button } from "../Portal";
import { socialButtons } from "../../Constants";

const Blog_Side = () => {
  const latestBlogs = blogs.slice(-3).reverse();

  return (
    <aside className="flex flex-col gap-y-5">
      <div className="border-mac pt-2 pb-5">
        <h4 className="title"># آخرین مطالب</h4>
        <div className="grid gap-y-5 my-8">
          {latestBlogs.map((item, index) => {
            return (
              <Link
                to={"/blog/" + item.title}
                className="flex gap-x-2"
                key={index}
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="size-20 rounded-lg"
                />
                <div>
                  <h3>{item.title}</h3>
                  <span className="warn text-xs px-2">{item.category}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <Button to="/blog" label="همه" customClass="w-full rounded-xl" />
      </div>

      <div className="border-mac py-2">
        <ul className="flex-seperate">
          {socialButtons.map((item) => {
            return (
              <li key={item}>
                <a
                  href={item.href}
                  className="text-blue-500 hover:text-blue-400"
                >
                  <i className={item.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Blog_Side;
