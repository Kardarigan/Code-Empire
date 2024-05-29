import { Half, Hero, Top_Image_Section } from "../comps/Portal";
import Cover_1 from "../assets/painting_of_an_ancient_Persian_with_sassanid_helmet_thousanse_soldiers_while_their_coding_in_their_laptop_png(1).png";

const About = () => {
  return (
    <>
      <Hero
        title="پیش از هرچیز بهتره مارو بشناسی :)"
        subtitle="میتونی هر چی که میخوای از ما بدونی، تو این بخش پیدا کنی"
      />
      <div className="container" dir="rtl">
        <Top_Image_Section
          label="جوخه ی هشتم، لشگر دوم کدزن ها"
          cover={Cover_1}
          describe="اینجا امپراتوری ای از کد هاست! امپراتوری کد دارای ارتشی در کدزدن های نخبه، مشاورین ماهر و آموزگارانی با تجربه است که برای افزایش کیفیت کسب و کار ها و همچنین بنای دیگر پادشاهی ها از هیچ میجنگند. این است امپراتوری کد..."
        />
        <Half />
      </div>
    </>
  );
};

export default About;
