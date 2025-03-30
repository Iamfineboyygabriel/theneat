import { Typography } from "@material-tailwind/react";
import homeCleaning from "../../assets/images/homeCleaning.png";
import { Confirm } from "../../assets/svg";

const HomeCleaning = () => {
  return (
    <div className="service-content">
      <Typography variant="h2" className="text-4xl font-bold mb-6">
        Holiday Home Cleaning
      </Typography>
      <section className="mt-14 flex flex-col gap-8">
        <img src={homeCleaning} alt="man chair" />
        <Typography className="font-normal leading-normal max-w-2xl text-lg text-[#5C6C72]">
          Moving out? Leave your old place spotless with Neat HQ's End of
          Tenancy Cleaning! We ensure every corner is deep cleaned, helping your
          secure your deposit and leave on high note.
        </Typography>

        <div className="grid grid-cols-1 space-y-8">
          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Thorough Deep Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Floors, carpets, windows and appliances cleaned to perfection.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Landlord & Agent Approved:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                We meet the highest cleaning standards for a hassle-free
                handover.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Eco-Friendly Products:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Safe for you, your pets, and the environment.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                100% Satisfaction Guarantee:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                If you're not completely satisfied, we'll re-clean at no extra
                cost.
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Typography className="text-[#5C6C72] mt-2">
            Book your end of tenancy clean today and move out with peace of
            mind!
          </Typography>
          <button className="bg-[#7A8F8C] flex self-center justify-center mt-4 w-fit items-center rounded-md py-3 px-6">
            <Typography className="text-[#FFFFFF] font-semibold text-lg">
              Book A Call Back
            </Typography>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeCleaning;
