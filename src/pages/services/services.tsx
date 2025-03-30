import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import Register from "../../components/home/register";
import Hero from "../../components/services/hero";
import ConstructionCleaning from "./postConstructionCleaning";
import CommercialCleaning from "./commercialCleaning";
import AppartmentCleaning from "./appartmentCleaning";
import CarpetCleaning from "./carpetCleaning";
import HomeCleaning from "./homeCleaning";
import LaundryServices from "./laundryServices";
import HomeOrganisation from "./homeOrganisation";

const serviceLinks = [
  {
    id: "home-holiday-cleaning",
    label: "Holiday Home Cleaning",
  },
  {
    id: "post-construction-cleaning",
    label: "Post Construction Cleaning",
  },
  {
    id: "commercial-cleaning",
    label: "Commercial Cleaning",
  },
  {
    id: "laundry-services",
    label: "Laundry Services",
  },
  {
    id: "home-organisation",
    label: "Home Organisation",
  },
  {
    id: "appartment-cleaning",
    label: "Appartment Cleaning",
  },
  {
    id: "carpet-cleaning",
    label: "Carpet Cleaning",
  },
];

const Services = () => {
  const { serviceType } = useParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(
    serviceType || "home-holiday-cleaning"
  );

  useEffect(() => {
    if (serviceType) {
      setSelectedService(serviceType);
    } else {
      navigate(`/services/${serviceLinks[0].id}`, { replace: true });
    }
  }, [serviceType, navigate]);

  const renderServiceContent = () => {
    switch (selectedService) {
      case "home-holiday-cleaning":
        return <HomeCleaning />;
      case "post-construction-cleaning":
        return <ConstructionCleaning />;
      case "commercial-cleaning":
        return <CommercialCleaning />;
      case "laundry-services":
        return <LaundryServices />;
      case "home-organisation":
        return <HomeOrganisation />;
      case "appartment-cleaning":
        return <AppartmentCleaning />;
      case "carpet-cleaning":
        return <CarpetCleaning />;
      default:
        return <HomeCleaning />;
    }
  };

  return (
    <main>
      <Hero />
      <section className="py-20">
        <div className="max-w-[80%] container mx-auto">
          <div className="flex bg-[#EEECE2] border-[2px] border-[#C1BBA4] p-12 rounded-xl flex-col md:flex-row gap-10">
            <div className="w-full border-[#D7D3C4] pr-18 border-r md:w-1/3">
              <ul className="space-y-8 px-5">
                {serviceLinks.map((service) => (
                  <li key={service.id}>
                    <NavLink
                      to={`/services/${service.id}`}
                      className={({ isActive }) =>
                        `block px-4 py-3 transition-colors ${
                          isActive
                            ? "bg-[#F4F3F0] text-lg rounded-xl text-[#5C6C72]"
                            : "text-[#5C6C72] hover:text-black hover:bg-[#F4F3F0]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <Typography
                          className={isActive ? "font-medium" : "font-normal"}
                        >
                          {service.label}
                        </Typography>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-3/4 bg-inherit rounded-md">
              {renderServiceContent()}
            </div>
          </div>
        </div>
      </section>
      <Register />
    </main>
  );
};

export default Services;
