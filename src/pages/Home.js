import { Hero, Services, Half } from "../comps/Portal";
import { lessCode, whatWeAre } from "../Constants";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Half thing={lessCode} />
      <Half thing={whatWeAre} reverse />
    </>
  );
};

export default Home;
