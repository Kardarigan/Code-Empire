const Top_Image_Section = ({ title = null, label = null, describe, cover }) => {
  return (
    <section>
      <img
        src={cover}
        alt={title}
        className="w-full rounded h-auto bg-fullobject"
      />
      {label && <p className="label">{label}</p>}
      {title && <h2 className="title">{title}</h2>}
      <p className="para">{describe}</p>
    </section>
  );
};

export default Top_Image_Section;
