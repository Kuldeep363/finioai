import { Button } from "@/components/button/Button";
import { ExportCircle } from "iconsax-react";
import Image from "next/image";
import Menubar from "./Menubar";

const NAV_ITEMS = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Product",
    link: "#product",
  },
  {
    title: "Contact",
    link: "#contact",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full py-3 flex justify-center">
      <div className=" container">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 sm:gap-2 items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/finioai-logo.svg`}
              width={15}
              height={30}
              alt="Finioai logo"
              className="w-[12px] sm:w-[20px]"
            />
            <p className="text-lg sm:text-2xl font-normal text-black">
              FinioAI
            </p>
          </div>
          <div className="hidden sm:flex gap-6">
            {NAV_ITEMS.map((item: any) => {
              return (
                <p
                  key={item.link}
                  className="font-light cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full after:rounded-full after:bg-primary"
                >
                  {item.title}
                </p>
              );
            })}
          </div>
          <div className="hidden sm:block">
            <Button
              iconPosition="right"
              icon={<ExportCircle color="hsl(var(--white))" size={16} />}
              className="font-redhat"
            >
              Join waitlist
            </Button>
          </div>
          <Menubar NAV_ITEMS={NAV_ITEMS} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
