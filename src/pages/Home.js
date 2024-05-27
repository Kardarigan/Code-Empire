import { Home_Hero, Services, Half, Customers, Overall } from "../comps/Portal";
import { homeOverall, lessCode, whatWeAre } from "../Constants";

const Home = () => {
  return (
    <>
      <Home_Hero />
      <Services />
      <Half thing={lessCode} />
      <Half thing={whatWeAre} reverse />
      <Customers />
      <Overall thing={homeOverall} />
    </>
  );
};

export default Home;
