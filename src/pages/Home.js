import { Hero, Services, Half } from "../comps/Portal";
import { lessCode } from "../Constants";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Half thing={lessCode} />
    </>
  );
};

export default Home;
