import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const WhyFinio = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <QuotesIcon
              size={32}
              weight="fill"
              className="h-12 w-12 text-indigo-600 mx-auto mb-8"
            />
            <blockquote className="text-2xl md:text-3xl font-medium text-black mb-8">
              "Founders & CFOs need better cash management tools than
              spreadsheets."
            </blockquote>
            <p className="text-lg text-sub-text max-w-3xl mx-auto">
              Traditional banking tools leave businesses blind to their cash
              flow reality. Spreadsheets break down at scale. Finio bridges the
              gap with intelligent automation, real-time insights, and the
              financial control modern businesses demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFinio;
