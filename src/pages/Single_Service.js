import { useParams } from "react-router-dom";
import { Hero, Service_Main, Service_Side } from "../comps/Portal";
import { services } from "../Constants";

const Single_Service = () => {
  const { service } = useParams();
  const theService = services.find((e) => e.path === service);

  return (
    <>
      <Hero title={theService.title} background={theService.cover} />
      <section
        className="grid md:grid-cols-5 gap-8 container padding"
        dir="rtl"
      >
        <Service_Main service={theService} />
        <Service_Side service={theService} />
      </section>
    </>
  );
};

export default Single_Service;
