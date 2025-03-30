import { Typography } from "@material-tailwind/react";
import logo from "../../assets/images/Logo.png";
import { ContactUs, QuickLinks, Services } from "../utils/mockData";

const Footer = () => {
  return (
    <main>
      <div className="pt-16 container max-w-[80%] mx-auto flex justify-between">
        <div>
          <img src={logo} alt="logo" />
          <Typography className="max-w-sm font-normal mt-6 text-[#5C6C72]">
            The Neat HQ is a professional cleaning service dedicated to making
            homes and offices spottless with reliable, efficient and
            eco-friendly solutions. whether you need a one-time deep clean or
            regular maintenance, our expert team ensures a fresh and tidy space
            every time. Clean home, happy life!
          </Typography>
        </div>
        <div>
          <div className="flex justify-between">
            <Typography className="text-[#2E3538] leading-relaxed max-w-xs text-4xl font-medium">
              Subscribe to Our Newsletter
            </Typography>
            <Typography className="text-lg max-w-xs text-[#5C6C72]">
              Get weekly update and join our community
            </Typography>
          </div>
          <div className="relative mt-6">
            <input className="bg-[#EEECE2] py-5 pl-6 pr-32 w-full rounded-lg" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#5C6C72] text-white py-3 px-6 rounded-lg font-medium">
              Subscribe
            </button>
          </div>

          <section className="flex text-[#5C6C72] mt-6 justify-between">
            <div className="flex flex-col gap-3">
              <Typography className="font-medium text-[#7A8F8C] text-xl">
                Services
              </Typography>
              {Services.map((service, index) => (
                <div key={index}>
                  <Typography className="font-normal text-lg">
                    {service.label}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Typography className="font-medium text-[#7A8F8C] text-xl">
                Quick Links
              </Typography>
              {QuickLinks.map((links, index) => (
                <div key={index}>
                  <Typography className="font-normal text-lg">
                    {links.label}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Typography className="font-medium text-[#7A8F8C] text-xl">
                Contact Us
              </Typography>
              {ContactUs.map((contact, index) => (
                <div key={index}>
                  <Typography className="font-normal text-lg">
                    {contact.label}
                  </Typography>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <hr className="text-[#D7D3C4] mt-3" />
      <div className="py-8 font-medium text-[#5C6C72] flex justify-between container max-w-[80%] mx-auto ">
        <Typography> © {new Date().getFullYear()} TheNeatHQ</Typography>
        <div className="flex gap-9">
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </div>
      </div>
    </main>
  );
};

export default Footer;
