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
      <div className="md:w-1/2 flex-fullcenter z-10">
        <div dir={reverse ? "ltr" : "rtl"}>
          <h1 className="title-super font-bold relative">
            <span
              className={`absolute ${
                reverse ? "translate-x-[-47%]" : "translate-x-[47%]"
              } translate-y-[-120%] w-[200%]`}
            >
              {thing.title}
            </span>
          </h1>
          <p className="max-md:text-sm my-5 text-justify max-w-[500px]">
            {thing.describe}
          </p>
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
              className="w-full bg-fullobject ghost"
            />
          )}
        </div>
        {thing.overIcon && (
          <span
            className={`absolute ${
              reverse ? "translate-x-[20%]" : "translate-x-[500%]"
            } translate-y-[-150%] md:text-9xl hover:rotate-180 transition-all`}
          >
            {thing.overIcon}
          </span>
        )}
      </div>
    </section>
  );
};

export default Half;
