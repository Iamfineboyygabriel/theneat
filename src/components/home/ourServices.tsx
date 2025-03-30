import { Typography } from "@material-tailwind/react";
import { BlogCard } from "../general/blogCard";
import serive1 from "../../assets/images/service1.png";
import serive2 from "../../assets/images/service2.png";
import serive3 from "../../assets/images/service3.png";
import serive4 from "../../assets/images/service4.png";
import serive5 from "../../assets/images/service5.png";
import serive6 from "../../assets/images/service6.png";
import serive7 from "../../assets/images/service7.png";

const OurServices = () => {
  const cleaningServices = [
    {
      img: serive1,
      title: "Holiday Home Cleaning",
      description:
        "Moving out? Leave your old place spotless with Neat HQ's End of Tenancy Cleaning! We ensure every corner is deep cleaned, helping you secure your deposit and leave on a high note.",
    },
    {
      img: serive2,
      title: "Post Construction Cleaning",
      description:
        "Just finished a renovation or construction project? Let Neat HQ handle the mess! Our Post-Construction Cleaning service removes dust, debris, and residue, leaving your space spotless and move-in ready.",
    },
    {
      img: serive3,
      title: "Commercial Cleaning",
      description:
        "Keep your workplace spotless with Neat HQ's Commercial Cleaning Services! A clean office means a healthier, more productive environment for your team and clients.",
    },
    {
      img: serive4,
      title: "Laundry Services",
      description:
        "Keep your clothes fresh, clean, and perfectly cared for with Neat HQ's professional laundry services. We handle everything from everyday wear to delicate fabrics, so you can enjoy clean clothes without the hassle.",
    },
    {
      img: serive5,
      title: "Home Organisation",
      description:
        "A clean home is a happy home! Let Neat HQ take care of the mess so you can relax and enjoy your space. Our professional house cleaning services ensure every corner is spotless.",
    },
    {
      img: serive6,
      title: "Apartment Cleaning",
      description:
        "Live in a fresh, clean space without the hassle! Neat HQ offers professional apartment cleaning services to keep your home tidy and stress-free.",
    },
    {
      img: serive7,
      title: "Carpet Cleaning",
      description:
        "Revive your carpets with Neat HQ's professional carpet cleaning services! We remove dirt, stains, and allergens, leaving your carpets fresh, soft, and looking like new.",
    },
  ];

  return (
    <main className="bg-[#7A8F8C] py-20">
      <div className="container mx-auto px-4 md:px-0 md:max-w-[80%]">
        <div className="flex text-center items-center flex-col gap-6">
          <Typography className="text-white text-xl font-medium">
            What we Offer
          </Typography>
          <Typography className="font-playfair text-[#D7D3C4] text-3xl md:text-5xl font-semibold">
            Our Services
          </Typography>
        </div>
        <section className="grid mt-13 w-full justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:[&>*:nth-child(n+4)]:mt-13">
          {cleaningServices.map((service, index) => (
            <div
              key={index}
              className={
                index === cleaningServices.length - 1 &&
                cleaningServices.length % 3 !== 0
                  ? "md:col-start-2"
                  : ""
              }
            >
              <BlogCard
                image={service.img}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default OurServices;
