import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { ROUTES } from "../constants/routes";
import { Typography } from "@material-tailwind/react";

const navLinks = [
  { href: ROUTES.ABOUT_US, label: "About Us" },
  { href: ROUTES.SERVICES, label: "Services" },
  { href: ROUTES.CONTACT_US, label: "Contact Us" },
  { href: ROUTES.AREAS, label: "Area Covered" },
];

const NavBar = () => {
  const location = useLocation();

  const getLinkClassName = (href: string) => {
    const isActive = location.pathname === href;
    return `transition-colors text-[#5C6C72] tracking-wider hover:text-black ${
      isActive ? "text-black" : "text-[#5C6C72]"
    }`;
  };

  return (
    <div className="bg-[#D7D3C4]">
      <div className="container max-w-[85%] mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex gap-10 items-center">
            <img src={logo} alt="logo" className="h-12" />
            <div>
              <ul className="flex gap-10">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link to={href} className={getLinkClassName(href)}>
                      <Typography className="font-semibold text-lg">
                        {label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="div flex items-center gap-8">
            <Typography className="text-[#7A8F8C] text-lg font-medium">
              Login
            </Typography>
            <button className="bg-[#7A8F8C] items-center rounded-md py-3 px-6">
              <Typography className="text-white font-medium">
                Book A Call Back
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
