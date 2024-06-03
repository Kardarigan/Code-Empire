import { useParams } from "react-router-dom";
import { blogs } from "../data/Blogs";

const Single_Blog = () => {
  const { blog } = useParams();
  const theBlog = blogs.find(
    (e) =>
      e &&
      e.title.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase() ===
        blog.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase()
  );

  return <div>{theBlog.title}</div>;
};

export default Single_Blog;
