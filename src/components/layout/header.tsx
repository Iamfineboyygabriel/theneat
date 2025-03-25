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
      <div className="container max-w-[85%] mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex gap-4">
            <InstagramIcon />
            <FacebookIcon />
            <TiktokIcon />
            <div className="flex items-center gap-3">
              <WhatsAppIcon />
              <Typography className="text-white font-medium">
                +244 117 234 5678
              </Typography>
            </div>
          </div>
          <div>
            <Typography className="underline font-medium text-white">
              Get A Quote
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
