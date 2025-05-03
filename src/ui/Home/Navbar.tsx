import { Button } from "@/components/button/Button";
import { ExportCircle } from "iconsax-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full py-3 px-6 flex justify-center">
      <div className=" container">
        <div className="flex justify-between">
          <div className="flex gap-1 sm:gap-2 items-center">
            <Image
              src="https://kuldeep363.github.io/assets/finioai-logo.svg"
              width={25}
              height={50}
              alt="Finioai logo"
              className="w-[15px] sm:w-[20px]"
            />
            <p className="text-lg sm:text-xl font-medium text-black">FinioAI</p>
          </div>
          <div></div>
          <Button
            iconPosition="right"
            icon={<ExportCircle color="hsl(var(--white))" size={16} />}
            className="font-redHatDisplay "
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
