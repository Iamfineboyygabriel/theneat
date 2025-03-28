import { Typography } from "@material-tailwind/react";
const Testimonials = () => {
  //   const testimonials = [
  //     {
  //       text: "Neat HQ transformed my home! The cleaners were professional, thorough, and so friendly. My place has never looked better!",
  //       name: "Sarah M.",
  //       image: serive1,
  //     },
  //     {
  //       text: "Exceptional service! They arrived on time, worked efficiently, and left my office spotless. Highly recommend!",
  //       name: "James R.",
  //       image: serive1,
  //     },
  //     {
  //       text: "Best cleaning service ever. Booking was easy, and the team did an amazing job. My apartment feels brand new!",
  //       name: "Emily T.",
  //       image: serive1,
  //     },
  //   ];

  return (
    <main className="bg-[#e0ddd1] py-20">
      <div className="container max-w-[80%] mx-auto">
        <div className="flex text-center items-center flex-col gap-6">
          <Typography className="text-[#5C6C72] font-medium ">
            Testimonials
          </Typography>
          <Typography className="font-playfair text-[#2E3538] text-5xl font-semibold">
            What Our Happy Customers Say
          </Typography>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
