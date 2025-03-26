import Hero from "../../components/aboutUs/hero";
import Register from "../../components/aboutUs/register";
import Who from "../../components/aboutUs/who";
import WhyChooseUs from "../../components/aboutUs/whyChooseUs";

const AboutUs = () => {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <WhyChooseUs />
      <Who />
      <Register />
    </main>
  );
};

export default AboutUs;
