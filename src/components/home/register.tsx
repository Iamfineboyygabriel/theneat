import { Typography } from "@material-tailwind/react";
import { Link } from "react-router";
import { ROUTES } from "../constants/routes";

const Register = () => {
  return (
    <main className="bg-[#7A8F8C] py-14 md:py-20">
      <div className="container px-4 md:max-w-[80%] mx-auto">
        <div className="flex text-center items-center flex-col gap-6">
          <Typography className="font-playfair text-white text-3xl md:text-5xl font-semibold">
            Register to work with us
          </Typography>
          <Typography className="text-white font-medium ">
            Have questions or ready to book a cleaning? We're here to help!.
          </Typography>
          <Link to={ROUTES.CONTACT_US}>
            <button className="bg-[#D7D3C4] cursor-pointer items-center rounded-md py-3 px-6">
              <Typography className="text-[#7A8F8C] font-semibold text-lg">
                Register Here
              </Typography>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Register;
