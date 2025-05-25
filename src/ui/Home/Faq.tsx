import { ExportCircle } from "iconsax-react";
import React from "react";
import { FAQ } from "../../../constants";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <div id="faq">
      <div className="flex justify-center w-full px-4 lg:px-44 py-8 lg:py-16">
        <div className="container">
          <div>
            <p className="text-2xl lg:text-4xl">Frequently asked questions</p>
            <p className="text-sub-text text-sm max-w-[400px] font-light">
              <span>
                If you can’t find what you need, feel free to email our support
                team for assistance. We’re here to help!
              </span>
              <span className="inline-flex items-center gap-1 ms-1 text-primary font-medium underline">
                <a href="">More Help</a>
                <ExportCircle color="hsl(var(--primary))" size={12} />
              </span>
            </p>
          </div>
          <div className="mt-6">
            {FAQ?.map((faq) => {
              return (
                <FaqItem
                  key={faq.title}
                  title={faq.title}
                  description={faq.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
