import { Typography } from "@material-tailwind/react";
import map from "../../assets/images/map.png";
import { ChevronRight } from "lucide-react";

const Location = () => {
  return (
    <main className="max-w-[80%] container mx-auto py-20">
      <header className="text-center pb-16">
        <Typography className="font-bold text-2xl">
          Discover your location from the options below:
        </Typography>
        <Typography className="font-bold text-2xl">England</Typography>
      </header>
      <section>
        <div className="flex bg-[#EEECE2] border-[2px] border-[#C1BBA4] py-12 px-16 rounded-xl justify-between md:flex-row gap-10">
          <div className="flex flex-col gap-3">
            <Typography className="text-2xl font-semibold">
              East Midlands
            </Typography>
            <div className="flex mt-3.5">
              <ul className="flex flex-col gap-7 w-full">
                <li className="flex justify-between items-center">
                  <Typography className="text-xl text-[#5C6C72] font-normal">
                    Nottingham
                  </Typography>
                  <ChevronRight color="#5C6C72" />
                </li>
                <li className="flex justify-between items-center">
                  <Typography className="text-xl text-[#5C6C72] font-normal">
                    Leicester
                  </Typography>
                  <ChevronRight color="#5C6C72" />
                </li>
                <li className="flex justify-between items-center">
                  <Typography className="text-xl text-[#5C6C72] font-normal">
                    Hucknall
                  </Typography>
                  <ChevronRight color="#5C6C72" />
                </li>
                <li className="flex justify-between items-center">
                  <Typography className="text-xl text-[#5C6C72] font-normal">
                    Brackley
                  </Typography>
                  <ChevronRight color="#5C6C72" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={map} alt="map" />
          </div>
        </div>
        <div className="flex bg-[#EEECE2] mt-18 border-[2px] border-[#C1BBA4] p-12 rounded-xl justify-between md:flex-row gap-10">
          <div className="flex flex-col gap-3">
            <Typography className="text-2xl font-semibold">
              East of England
            </Typography>
            <div className="flex mt-3.5">
              <ul className="flex flex-col gap-7 w-full">
                <li className="flex justify-between items-center">
                  <Typography className="text-xl text-[#5C6C72] font-normal">
                    Nottingham
                  </Typography>
                  <ChevronRight color="#5C6C72" />
                </li>
                <li className="flex justify-between items-center">
                  <Typography className="text-xl text-[#5C6C72] font-normal">
                    Leicester
                  </Typography>
                  <ChevronRight color="#5C6C72" />
                </li>
                <li className="flex justify-between items-center">
                  <Typography className="text-xl text-[#5C6C72] font-normal">
                    Hucknall
                  </Typography>
                  <ChevronRight color="#5C6C72" />
                </li>
                <li className="flex justify-between items-center">
                  <Typography className="text-xl text-[#5C6C72] font-normal">
                    Brackley
                  </Typography>
                  <ChevronRight color="#5C6C72" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={map} alt="map" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Location;
