"use client";
import clsx from "clsx";
import { Add, AddSquare, Minus } from "iconsax-react";
import React, { useState } from "react";

const FaqItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="p-2 bg-white shadow-gray_shadow rounded-xl my-4">
      <div className="grid grid-cols-6 items-center">
        <div className="col-span-5">
          <p className="text-lg">{title}</p>
        </div>
        <div className="col-span-1 flex justify-end">
          <div role="button" onClick={handleOpen}>
            {open ? (
              <Minus size={16} color="hsl(var(--primary))" />
            ) : (
              <AddSquare size={16} color="hsl(var(--primary))" variant="Bold" />
            )}
          </div>
        </div>
      </div>
      <div
        className={clsx("transition-all duration-300 overflow-hidden", {
          "h-0": !open,
          "h-max mt-1": open,
        })}
      >
        <p className="text-sub-text text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FaqItem;
