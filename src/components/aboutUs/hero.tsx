import { Typography } from "@material-tailwind/react";
import hero from "../../assets/images/hero.png";
import Card from "../general/card";
import { Results } from "../utils/mockData";

const Hero = () => {
  return (
    <main className="container max-w-[85%] mx-auto">
      <div className="flex  justify-center items-center flex-grow">
        <img src={hero} alt="hero" className="max-w-full h-auto" />
      </div>
      <section className="flex py-10 justify-between">
        <Typography className="font-playfair max-w-lg font-semibold text-5xl">
          Effortless Cleaning, Exceptional Results
        </Typography>
        <div className="flex space-x-10 items-center">
          <button className="bg-[#7A8F8C] rounded-md py-3 px-6">
            <Typography className="text-white font-medium">
              Get A Quote
            </Typography>
          </button>
          <button className="bg-[#EEECE2] rounded-md py-3 px-6">
            <Typography className="text-[#7A8F8C] font-medium">
              Book A Call Back
            </Typography>
          </button>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-3.5">
        {Results.map((result, index) => (
          <Card key={index} title={result.label} description={result.detail} />
        ))}
      </section>
    </main>
  );
};

export default Hero;
