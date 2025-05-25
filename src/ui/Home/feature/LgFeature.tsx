"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { FEATURES } from "../../../../constants";

const LgFeature = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="hidden lg:block">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl  bg-primary-light flex justify-between p-2 rounded-full my-4 mb-8">
          {FEATURES?.map((feat, index) => {
            return (
              <div
                key={feat.label}
                className={clsx("px-4 py-2 rounded-full cursor-pointer", {
                  "text-white bg-primary": activeTab === index,
                  "text-black hover:bg-primary-light-hover":
                    activeTab !== index,
                })}
                onClick={() => handleActiveTabChange(index)}
              >
                <p>{feat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 md:gap-8 items-center">
        <div className="me-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/${FEATURES[activeTab].img}`}
            alt={FEATURES[activeTab].title}
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
        <div>
          <h5 className="text-xl lg:text-2xl">{FEATURES[activeTab]?.title}</h5>
          <p className="font-light text-sub-text">
            {FEATURES[activeTab]?.description}
          </p>
          <div className="features grid grid-cols-2 gap-4 mt-4">
            {FEATURES[activeTab]?.features?.map((feature) => {
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
                  <p className="text-sub-text text-sm font-light">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgFeature;
