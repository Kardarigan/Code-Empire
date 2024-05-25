import { Hero, Services, Half, Customers } from "../comps/Portal";
import { lessCode, whatWeAre } from "../Constants";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Half thing={lessCode} />
      <Half thing={whatWeAre} reverse />
      <Customers />
    </>
  );
};

export default Home;
