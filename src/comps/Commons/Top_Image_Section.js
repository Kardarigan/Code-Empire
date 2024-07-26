const Top_Image_Section = ({ title = null, label = null, describe, cover }) => {
  return (
    <section className="padding grid gap-y-5" dir="rtl">
      <div>
        <img
          src={cover}
          alt={title}
          className="w-full rounded-lg max-h-[80vh] bg-fullobject"
        />
        {label && <p className="label">* {label}</p>}
      </div>
      {title && (
        <h2 className="title-lg">
          <i class="fa-solid fa-hashtag text-purple-500" />
          <span className="halfbg-left"> {title}</span>
        </h2>
      )}
      <p className="para">{describe}</p>
    </section>
  );
};

export default Top_Image_Section;
