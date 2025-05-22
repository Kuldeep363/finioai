import { Button } from "@/components/button/Button";
import Navbar from "@/ui/Home/Navbar";
import { ExportCircle } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen w-full">
      <div
        id="hero-section"
        className="w-full min-h-screen"
        style={{
          background:
            "linear-gradient(0deg, rgba(231, 229, 255, 1) 0%, rgba(245, 245, 255, 1) 64%)",
        }}
      >
        <Navbar />
        <div className="flex justify-center">
          <div className="mt-36 max-w-[90%] sm:max-w-[40%] flex flex-col items-center">
            <p className="font-host text-[48px] font-medium text-center leading-none">
              Centralised Management
            </p>
            <p className="font-host text-[32px] font-light text-center">
              for All Your Financial Accounts
            </p>
            <p className="font-redhat text-[18px] font-light text-center w-[75%]">
              Effortlessly manage finances with our platform, uniting all bank
              accounts and actions in one place.
            </p>
            <Button
              iconPosition="right"
              icon={<ExportCircle color="hsl(var(--white))" size={16} />}
              className="font-redhat mt-3 w-[90%]"
            >
              Join waitlist
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="hidden sm:block w-[70%] mt-20">
            <Image
              src={"https://kuldeep363.github.io/assets/hero-img.png"}
              alt="finioai dashboard"
              width={2000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
