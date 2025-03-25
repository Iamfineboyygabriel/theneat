import { Typography } from "@material-tailwind/react";

const WhyChooseUs = () => {
  return (
    <main className="bg-[#7A8F8C] py-20">
      <div className="container max-w-[85%] mx-auto">
        <div className="flex text-center items-center flex-col gap-6">
          <Typography className="text-white font-medium ">
            Welcome to The Neat HQ.
          </Typography>
          <Typography className="font-playfair text-[#D7D3C4] text-5xl font-semibold">
            Why Choose Us
          </Typography>
          <Typography className="leading-loose text-lg text-white max-w-2xl">
            Tired of the mess? We've got you covered! neat! HQ provides fast
            reliable, and affordable cleaning services for homes and officees.
            Our professional cleaners ensure every corner shines. so you can
            relax and enjoy your space.
          </Typography>
        </div>
      </div>
    </main>
  );
};

export default WhyChooseUs;
