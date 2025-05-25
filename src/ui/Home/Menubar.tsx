"use client";
import { Button } from "@/components/button/Button";
import clsx from "clsx";
import { CloseCircle, ExportCircle, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const Menubar = ({ NAV_ITEMS }: { NAV_ITEMS: any }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      setOpen((prev) => !prev);
    },
    [open]
  );
  return (
    <div className="sm:hidden">
      <div
        className={clsx("menu__button cursor-pointer")}
        role="button"
        aria-label="menu"
        onClick={handleOpen}
      >
        {open ? null : ( //   <CloseCircle color="hsl(var(--primary))" size={24} variant="Bold" />
          <HambergerMenu color="hsl(var(--primary))" size={24} />
        )}
      </div>
      <div
        className={clsx("menu__drawer absolute left-0 top-0 bottom-0", {
          "w-full bg-hsl-black/30": open,
          "w-0": !open,
        })}
        onClick={handleOpen}
      >
        <div
          className={clsx("h-full bg-white transition-all duration-300", {
            "w-3/4": open,
            "w-0": !open,
          })}
        >
          <div
            className={clsx("p-4 transition-all duration-200", {
              "opacity-0": !open,
              "opacity-100": open,
            })}
          >
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
            <div className="flex flex-col gap-6 mt-16">
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
            <div className="mt-6">
              <p className="font-redhat text-sm sm:text-lg font-light sm:w-[75%]">
                Effortlessly manage finances with our platform, uniting all bank
                accounts and actions in one place.
              </p>
              <Button
                iconPosition="right"
                icon={<ExportCircle color="hsl(var(--white))" size={16} />}
                className="font-redhat mt-2 w-full"
              >
                Join waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
