import { Accordion } from "../Portal";

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
              <i class="fa-solid fa-hashtag text-purple-500 me-2" />
              {item.title}
            </h2>
            <p className="text-justify para mt-5 text-slate-700">
              {item.paragraph}
            </p>
          </article>
        );
      })}
      <section className="grid gap-y-3">
        <h2 className="title mb-3">ممکنه از خودت بپرسی: </h2>
        {blog.faq?.map((item, index) => {
          return (
            <Accordion
              key={index}
              label={item.label}
              describe={item.describe}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Blog_Main;
