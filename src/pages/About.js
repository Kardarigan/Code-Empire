import { Hero, Top_Image_Section } from "../comps/Portal";

const About = () => {
  return (
    <>
      <Hero
        title="پیش از هرچیز بهتره مارو بشناسی :)"
        subtitle="میتونی هر چی که میخوای از ما بدونی، تو این بخش پیدا کنی"
      />
      <Top_Image_Section
        label="جوخه ی هشتم، لشگر دوم کدزن ها"
        cover={}
        describe="اینجا امپراطوری از کد هاست! امپراطوری کد دارای ارتشی در کدزدن های نخبه، مشاورین ماهر و آموزگارانی با تجربه است که برای افزایش کیفیت کسب و کار ها و همچنین بنای دیگر پادشاهی ها از هیچ میجنگند."
      />
    </>
  );
};

export default About;
