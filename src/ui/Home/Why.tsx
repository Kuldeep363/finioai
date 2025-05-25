import { Button } from "@/components/button/Button";
import { Bank, Cpu, ExportCircle, SecurityUser, StatusUp } from "iconsax-react";
import Image from "next/image";
import React from "react";

const LIST = [
  {
    title: "Simplified Financial Management",
    description:
      "Streamline your financial processes and save time with centralised account management",
    icon: StatusUp,
  },
  {
    title: "Industry Leading Security",
    description:
      "Secure your financial data with encryption and multi-factor authentication",
    icon: SecurityUser,
  },
  {
    title: "Packed with AI for Smarter Banking",
    description:
      "Harness the power of AI-driven insights to manage your finances more efficiently",
    icon: Cpu,
  },
  {
    title: "Regulatory Compliant",
    description:
      "Fully compliant with Indian financial regulations and RBI guidelines",
    icon: Bank,
  },
];

const Why = () => {
  return (
    <div
      id="why-our-platform"
      style={{
        background: `url('${process.env.NEXT_PUBLIC_IMAGE_HOST}/why-bg.png') no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center w-full py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4">
          <div className="col-span-1 px-4 lg:ps-44">
            <div className="container">
              <p className="text-2xl lg:text-4xl">
                Why Our Platform? <br /> Because Excellence Matters
              </p>
              <div className="mt-4 lg:w-3/4">
                {LIST?.map((item) => {
                  const ICON = item?.icon;
                  return (
                    <div key={item.title} className="my-6">
                      <div className="bg-primary rounded-md p-1 w-max">
                        <ICON
                          variant="Bold"
                          color="hsl(var(--white))"
                          size={18}
                        />
                      </div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sub-text font-light text-sm">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4">
                <Button
                  iconPosition="right"
                  icon={<ExportCircle color="hsl(var(--white))" size={16} />}
                  className="font-redhat"
                >
                  Join waitlist
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-end ps-4 lg:ps-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/why-section.png`}
              alt="finio ai why section"
              width={1000}
              height={800}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
