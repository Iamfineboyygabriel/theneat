import { Typography } from "@material-tailwind/react";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsAppIcon,
} from "../../assets/svg";

const Header = () => {
  return (
    <div className="bg-[#7A8F8C] shadow-sm">
      <div className="container max-w-full px-4 md:px-0 md:max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex gap-3 sm:gap-4">
            <InstagramIcon />
            <FacebookIcon />
            <TiktokIcon />
            <div className="flex items-center gap-2 sm:gap-3">
              <WhatsAppIcon />
              <Typography className="text-white text-sm md:text-base font-medium hidden xs:inline-block">
                +244 117 234 5678
              </Typography>
            </div>
          </div>
          <div>
            <Typography className="underline font-medium text-white text-lg md:text-base">
              Get A Quote
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
