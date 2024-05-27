import { Link } from "react-router-dom";
import { contactForm } from "../Constants";
import { Form, Hero, Tip } from "../comps/Portal";

const Contact = () => {
  return (
    <>
      <Hero
        title="سفارشی چیزی داری یا اگه مشاوره میخوای درست اومدی!"
        subtitle="تنها باید فرم زیر رو پر کنی تا با امپراتوری تماس بگیری"
      />
      <section className="container-sm mt-12 pb-40 padding-x" dir="rtl">
        <Form fields={contactForm} />
        <Tip
          className="mt-12"
          message='
          اگه ازین فرما خوشت نمیاد میتونی یه ایمیل ساده بهمون بفرستی. اگه میخوای
          <a class="link" href="mailto:duckduckstay@hotmail.com">بکلیک</a>.'
        />
      </section>
    </>
  );
};

export default Contact;
