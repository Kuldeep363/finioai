import React from "react";
import { FEATURES } from "../../../../constants";
import { features } from "process";
import Image from "next/image";
import { Button } from "@/components/button/Button";
import { ExportCircle } from "iconsax-react";

const SmFeature = () => {
  return (
    <div className="lg:hidden">
      {FEATURES?.map((feature) => {
        return (
          <div
            className="py-6 relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-1/2 before:h-[1px] before:bg-border last:before:hidden"
            key={feature.label}
          >
            <h5 className="text-2xl mb-2 font-medium">{feature?.title}</h5>
            {/* <p className="font-light text-sub-text">{feature?.description}</p> */}
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/${feature.img}`}
              alt={feature.title}
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
            <div>
              <div className="features grid grid-cols-1 gap-4 mt-4">
                {feature?.features?.map((feature) => {
                  const ICON = feature?.icon;
                  return (
                    <div key={feature.title} className="col-span-1">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary rounded-md p-1">
                          <ICON
                            variant="Bold"
                            color="hsl(var(--white))"
                            size={18}
                          />
                        </div>
                        <p className="font-medium">{feature.title}</p>
                      </div>
                      {/* <p className="text-sub-text text-sm font-light">
                        {feature.description}
                      </p> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SmFeature;
