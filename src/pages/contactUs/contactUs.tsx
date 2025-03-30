import { Button, Typography } from "@material-tailwind/react";
import { Location, WhatsAppIcon } from "../../assets/svg";

const ContactUs = () => {
  return (
    <>
      <main className="bg-[#7A8F8C] py-20">
        <div className="container max-w-[80%] mx-auto">
          <Typography className="font-playfair text-white text-5xl font-semibold">
            Contact Us
          </Typography>
          <Typography className="text-white max-w-sm mt-8 font-normal text-lg">
            Get in Touch! Fill out contact form or call us to schedule your
            cleaning.
          </Typography>
          <Typography className="text-white font-normal text-lg">
            We Can't wait to make your space shine!
          </Typography>
          <section className="mt-8">
            <div className="flex gap-6 flex-col">
              <div className="flex gap-2.5">
                <Location />
                <Typography className="text-white font-normal text-lg">
                  Address Here, UK
                </Typography>
              </div>
              <div className="flex gap-2.5">
                <WhatsAppIcon />
                <Typography className="text-white text-lg font-normal">
                  Address Here, UK
                </Typography>
              </div>
            </div>
          </section>
        </div>
      </main>
      <main className="flex -mt-[26%] pb-20  justify-end max-w-[80%] container mx-auto">
        <div className="mt-12 w-2xl bg-[#F1EFE3] border-[2px] border-[#C1BBA4] px-36 py-15 rounded-lg ">
          <Typography className="text-center text-black text-3xl font-bold mb-6">
            Send Us A Message
          </Typography>

          <form className="mt-10">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-lg font-medium  text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700 mb-1"
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
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 h-30 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
              ></textarea>
            </div>

            <Button
              type="button"
              className="w-full mt-8 py-4 px-4 bg-[#7A8F8C] text-white rounded-md"
            >
              <Typography className="text-xl font-semibold">
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
