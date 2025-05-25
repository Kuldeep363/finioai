import { Button } from "@/components/button/Button";
import Faq from "@/ui/Home/Faq";
import Feature from "@/ui/Home/Feature";
import Navbar from "@/ui/Home/Navbar";
import Ready from "@/ui/Home/Ready";
import Why from "@/ui/Home/Why";
import { ExportCircle } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen w-full">
      <div
        id="hero-section"
        className="w-full min-h-screen px-6 relative"
        style={{
          background:
            "linear-gradient(0deg, rgba(231, 229, 255, 1) 0%, rgba(245, 245, 255, 1) 64%)",
        }}
      >
        <Navbar />
        <div className="flex justify-center">
          <div className="mt-36 flex flex-col items-center container">
            <p className="font-host text-5xl font-medium text-center leading-none">
              Centralised Management
            </p>
            <p className="font-host text-xl sm:text-3xl font-normal text-center">
              for All Your Financial Accounts
            </p>
            <p className="font-redhat text-sm sm:text-lg font-light text-center sm:w-[75%]">
              Effortlessly manage finances with our platform, <br />
              uniting all bank accounts and actions in one place.
            </p>
            <Button
              iconPosition="right"
              icon={<ExportCircle color="hsl(var(--white))" size={16} />}
              className="font-redhat mt-3 w-full max-w-[500px]"
            >
              Join waitlist
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="hidden sm:block w-[70%] mt-20">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/hero-img.png`}
              alt="finioai dashboard"
              width={2000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
          <div className="block sm:hidden w-[90%] mt-20">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/hero-img-sm.png`}
              alt="finioai dashboard"
              width={1000}
              height={2000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Feature />
      <Why />
      <Ready />
      <Faq/>
    </div>
  );
}
