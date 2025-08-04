import { RocketIcon, TargetIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Mission = () => {
  return (
    <section className="pt-20">
      <div className="py-20 bg-gradient-to-br from-[#625BF6] to-[#463cff] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 rounded-full p-4">
                <RocketIcon className="h-12 w-12 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Our Mission
            </h2>

            <blockquote className="text-xl md:text-2xl font-light mb-4 max-w-4xl mx-auto leading-relaxed">
              "Cash is a growth engine — not just a buffer."
            </blockquote>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-indigo-100 mb-4">
                FinioAI gives startups the treasury power of a Fortune 500 CFO. We
                believe every growing business deserves intelligent cash
                management, predictive insights, and the financial control to
                focus on what matters most — building the future.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
                  <TargetIcon className="h-8 w-8 text-indigo-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">For Startups</h3>
                  <p className="text-indigo-100">
                    Every rupee counts. Make your cash work harder with
                    intelligent analysis and predictive insights.
                  </p>
                </div>

                <div className="bg-white/10 rounded-3xl p-6">
                  <TargetIcon className="h-8 w-8 text-indigo-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">For CFOs</h3>
                  <p className="text-indigo-100">
                    Focus on strategy, not spreadsheets. Get the treasury
                    intelligence you need to drive growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
