const Blog_Main = ({ blog }) => {
  return (
    <main className="grid gap-y-12 md:col-span-3">
      <div className="flex-seperate border-mac py-3">
        <span className="warn">{blog.category}</span>
        <span>
          <i class="fad fa-calendar text-blue-500 me-1" /> {blog.upload}
        </span>
      </div>
      <img
        src={blog.cover}
        alt={blog.title}
        className="bg-fullobject rounded-xl w-full h-[400px]"
      />
      {blog.paragraphes.map((item, index) => {
        return (
          <article key={index}>
            <h2 className="title halfbg-left inline">
              <span className="text-purple-500 me-2">#</span>
              {item.title}
            </h2>
            <p className="text-justify para mt-5 text-slate-700">
              {item.paragraph}
            </p>
          </article>
        );
      })}
    </main>
  );
};

export default Blog_Main;
