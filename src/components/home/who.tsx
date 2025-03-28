import { Typography } from "@material-tailwind/react";
import agent from "../../assets/images/agents.png";
import { Confirm } from "../../assets/svg";
const Who = () => {
  return (
    <main className="border border-t-[#D7D3C4] border-b-0">
      <section className="flex pt-25 gap-30 justify-between container max-w-[80%] mx-auto">
        <img src={agent} alt="agent" />
        <div className="flex flex-col w-full gap-6 items-start text-start">
          <Typography className="font-semibold text-[#5C6C72] text-xl">
            About Us
          </Typography>
          <Typography className="font-playfair font-semibold text-5xl text-[#2E3538]">
            Who We Are?
          </Typography>
          <div className="flex flex-col gap-6">
            <Typography className="text-[#5C6C72] max-w-xl text-lg">
              At Neat HQ, we are more than just a cleaning service-we are your
              partners in creating a fresh health, and stress-free space. Our
              team of dedicated, traineed professionals takes pride in
              delivering top-quality cleaning with a personal touch.
            </Typography>
            <div className="flex flex-col gap-6">
              <div className="flex gap-5">
                <Confirm />
                <div className="flex flex-col">
                  <Typography className="text-[#2E3538] text-xl font-semibold">
                    Committed to Excellence-
                  </Typography>
                  <Typography className="text-[#5C6C72]">
                    We go above and beyond to ensure spotless results.
                  </Typography>
                </div>
              </div>

              <div className="flex gap-5">
                <Confirm />
                <div className="flex flex-col">
                  <Typography className="text-[#2E3538] text-xl font-semibold">
                    Home & Office Experts
                  </Typography>
                  <Typography className="text-[#5C6C72]">
                    Whether it's your home or workplace, we make every space
                    shine.
                  </Typography>
                </div>
              </div>
              <button className="bg-[#7A8F8C] items-center mt-3 w-fit rounded-md py-3 px-6">
                <Typography className="text-white font-semibold text-lg">
                  Read More
                </Typography>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Who;
