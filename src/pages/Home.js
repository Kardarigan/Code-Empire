import { Hero, Services, Half, Customers, Overall } from "../comps/Portal";
import { homeOverall, lessCode, whatWeAre } from "../Constants";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Half thing={lessCode} />
      <Half thing={whatWeAre} reverse />
      <Customers />
      <Overall thing={homeOverall} />
    </>
  );
};

export default Home;
