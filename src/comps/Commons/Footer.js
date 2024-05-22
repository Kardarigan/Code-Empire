import { Link } from "react-router-dom";
import { footLinks, socialButtons } from "../../Constants";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0 text-slate-100 mix-blend-exclusion text-xs text-center z-20">
      <ul className="pb-3 mx-auto md:w-4/5 grid md:grid-cols-4 grid-cols-2 gap-4">
        {footLinks.map((item) => {
          return (
            <li key={item}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
      <ul className="mt-3 pb-3 max-w-32 mx-auto md:w-4/5 grid md:grid-cols-4 grid-cols-2 gap-4">
        {socialButtons.map((item) => {
          return (
            <li key={item}>
              <a href={item.href}>
                <i className={item.icon} />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
