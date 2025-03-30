import { Card, Typography } from "@material-tailwind/react";

interface CardProps {
  description: string;
  logo?: string;
  name?: string;
}

const TestimonialCard = ({ description, logo, name }: CardProps) => {
  return (
    <Card className="bg-[#EEECE2] rounded-xl py-7 px-10 border-[2px] border-[#C1BBA4] w-full flex flex-col h-[270px]">
      <Typography className="text-[#5C6C72] mt-2 text-lg">
        {description}
      </Typography>
      <div className="mt-auto flex items-center gap-3">
        <img
          src={logo}
          alt="avatar"
          className="w-15 h-15 rounded-full object-cover"
        />
        {name && (
          <Typography className="font-medium text-lg text-[#5C6C72]">
            {name}
          </Typography>
        )}
      </div>
    </Card>
  );
};

export default TestimonialCard;
