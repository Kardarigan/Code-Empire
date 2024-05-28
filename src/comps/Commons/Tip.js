const Tip = ({ message, className }) => {
  return (
    <div
      className={`bg-indigo-400 w-full inline-flex justify-between items-center rounded-full text-slate-50 p-3 ${className}`}
    >
      <span className="bg-indigo-500 rounded-full text-indigo-50 font-extrabold px-5 text-center">
        بخون
      </span>
      <p
        dangerouslySetInnerHTML={{ __html: message }}
        className="mx-5 max-md:text-sm"
      />
      <i className="fal fa-chevron-left px-3" />
    </div>
  );
};

export default Tip;
