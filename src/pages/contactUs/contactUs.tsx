import { Button, Typography } from "@material-tailwind/react";
import { Location, WhatsAppIcon } from "../../assets/svg";
import { useContext } from "react";
import { LocationContext } from "../../components/constants/locationContext";

const ContactUs = () => {
  const { selectedLocation } = useContext(LocationContext);

  const address = selectedLocation?.label || "Address Here, UK";
  const phone = selectedLocation?.phone || "+44 117 234 5678";
  return (
    <>
      <main className="bg-[#7A8F8C] py-10 md:py-20">
        <div className="container md:max-w-[80%] mx-auto px-4 md:px-0">
          <Typography className="font-playfair text-white text-3xl md:text-5xl font-semibold">
            Contact Us
          </Typography>
          <Typography className="text-white max-w-sm mt-4 md:mt-8 font-normal text-base md:text-lg">
            Get in Touch! Fill out contact form or call us to schedule your
            cleaning.
          </Typography>
          <Typography className="text-white font-normal text-base md:text-lg">
            We Can't wait to make your space shine!
          </Typography>
          <section className="mt-6 md:mt-8">
            <div className="flex gap-4 md:gap-6 flex-col">
              <div className="flex gap-2.5">
                <Location />
                <Typography className="text-white font-normal text-base md:text-lg">
                  {address}
                </Typography>
              </div>
              <div className="flex gap-2.5">
                <WhatsAppIcon />
                <Typography className="text-white text-base md:text-lg font-normal">
                  {phone}
                </Typography>
              </div>
            </div>
          </section>
        </div>
      </main>
      <main className="flex flex-col md:flex-row md:-mt-[26%] mt-0 pb-10 md:pb-20 justify-center md:justify-end md:max-w-[80%] container mx-auto px-4 md:px-0">
        <div className="mt-8 md:mt-12 w-full md:w-2xl bg-[#F1EFE3] border-[2px] border-[#C1BBA4] px-6 sm:px-10 md:px-36 py-8 md:py-15 rounded-lg">
          <Typography className="text-center text-black text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Send Us A Message
          </Typography>

          <form className="mt-6 md:mt-10">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-base md:text-lg font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 md:p-3 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-base md:text-lg font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 md:p-3 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-base md:text-lg font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 md:p-3 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-base md:text-lg font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-base md:text-lg font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 h-24 md:h-30 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              ></textarea>
            </div>

            <Button
              type="button"
              className="w-full mt-6 md:mt-8 py-3 md:py-4 px-4 bg-[#7A8F8C] text-white rounded-md"
            >
              <Typography className="text-lg md:text-xl font-semibold">
                Send Message
              </Typography>
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
