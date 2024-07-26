const Service_Main = ({ service }) => {
  return (
    <main className="grid gap-y-12 md:col-span-3">
      <div
        className={`${
          service.availability ? "bg-green-600" : "bg-red-600"
        } text-red-50 rounded-full px-5 py-3 text-center`}
      >
        {service.availability
          ? "در دسترس برای همه"
          : "اکنون این سرویس در دسترس نیست"}
      </div>
      {service.paragraphs.map((item, index) => {
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
    </main>
  );
};

export default Service_Main;
