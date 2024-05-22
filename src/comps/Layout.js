import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./Portal";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative text-slate-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
