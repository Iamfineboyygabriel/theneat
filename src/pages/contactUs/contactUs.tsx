import { Typography } from "@material-tailwind/react";

const ContactUs = () => {
  return (
    <main className="bg-[#7A8F8C] py-20">
      <div className="container max-w-[80%] mx-auto">
        <Typography className="font-playfair text-white text-5xl font-semibold">
          Contact Us
        </Typography>
        <Typography className="text-white text- font-medium ">
          Get in Touch! Fill out contact form or call us to schedule your
          cleaning
        </Typography>
        <Typography className="text-white font-medium ">
          We Can't wait tpo make your space shine!
        </Typography>
      </div>
    </main>
  );
};

export default ContactUs;
