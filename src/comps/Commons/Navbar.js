import { Link } from "react-router-dom";
import { navLinks } from "../../Constants";
import { Button } from "../Portal";
import { useState } from "react";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerOn = () => {
    setHamburger(true);
  };
  const hamburgerOff = () => {
    setHamburger(false);
  };

  return (
    <>
      <header className="absolute w-full z-50">
        <nav
          className={`padding-x py-3 w-full z-10 flex-seperate text-slate-50 relative`}
        >
          <Link to="/">
            <h2 className="text-2xl">
              امپراتوری <span className="text-red-700">کد</span>
            </h2>
          </Link>
          <ul className="lg:flex hidden gap-4 ps-4">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  {item.target ? (
                    <a href={item.target} className={`navitem`}>
                      <i className={item.icon} />
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <Link to={item.href} className={`navitem`}>
                      <i className={item.icon} />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Button customClass="max-md:hidden" label="تماس باما" />
          <button
            className="md:hidden block transition text-sm font-semibold rounded px-3 py-2 bg-opacity-25 bg-slate-500 hover:bg-opacity-40 backdrop-blur-sm"
            onClick={hamburgerOn}
          >
            <span>MENU</span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
