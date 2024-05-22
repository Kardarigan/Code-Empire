import { Button } from "../Portal";

const Half = ({ thing, reverse = false }) => {
  return (
    <section
      className={`padding-x py-10 flex ${
        reverse
          ? "md:flex-row-reverse flex-col"
          : "md:flex-row flex-col-reverse"
      }`}
    >
      <div className="md:w-1/2 flex-fullcenter">
        <div dir="rtl">
          <h1 className="title font-bold">{thing.title}</h1>
          <p className="max-md:text-sm my-5 text-justify">{thing.describe}</p>
          <Button to="/" label="شروع همکاری" />
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="padding flex-fullcenter">
          {thing.cover?.endsWith(".mp4") || thing.cover?.endsWith(".webm") ? (
            <video autoPlay muted loop className="bg-fullobject w-full">
              <source
                src={thing.cover}
                type={`video/${thing.cover.split(".").pop()}`}
              />
              Your browser does not support the video tag.
            </video>
          ) : thing.icon ? (
            <i className={thing.icon + " md:text-[300px] text-[100px]"} />
          ) : (
            <img
              src={thing.cover}
              alt={thing.title}
              className="w-full bg-fullobject"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Half;
