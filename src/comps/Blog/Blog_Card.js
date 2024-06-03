import { Link } from "react-router-dom";

const Blog_Card = ({ blog }) => {
  return (
    <Link
      to={"/blog/" + blog.title}
      className="overflow-hidden rounded-2xl border-4 border-blue-400 group relative"
    >
      <p className="absolute text-end w-full">
        <span className="bg-blue-400 px-2 py-1 rounded-br-lg">
          {blog.category}
        </span>
      </p>
      <div className="h-[300px] w-full">
        <img src={blog.cover} alt={blog.title} className=" bg-fullobject" />
      </div>
      <div className="px-3 py-1 md:h-24 absolute bottom-0 md:group-hover:h-32 h-32 transition-all bg-white/55 backdrop-blur-sm rounded-t-lg">
        <h3 className="md:text-3xl text-xl flex items-center transition-all md:group-hover:text-xl">
          {blog.title}
        </h3>
        <p className="line-clamp-2 text-ellipsis text-sm mt-3 displayTrans md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible">
          {blog.paragraphes[0].paragraphe}
        </p>
        <p className="text-end label absolute p-2 left-0 bottom-0">
          {blog.uploadData}
        </p>
      </div>
    </Link>
  );
};

export default Blog_Card;
