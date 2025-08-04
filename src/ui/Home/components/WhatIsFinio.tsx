import {
  BrainIcon,
  MonitorIcon,
  TargetIcon,
  TrendUpIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Chart, Cpu, EmptyWalletTick, StatusUp } from "iconsax-react";
import React from "react";

const FEATURES_LIST = [
  {
    title: "Real-Time Cash Visibility",
    subtext:
      "See your entire treasury — cash, investments, and returns — in one unified dashboard.",
    icon: StatusUp,
  },
  {
    title: "AI-Powered Fund Insights & Recommendations",
    subtext:
      "Analyze your cash, goals, and risk profile — then let FinioAI recommend the smartest investment options in real time.",
    icon: Cpu,
  },
  {
    title: "Optimize Cash Allocation",
    subtext:
      "FinioAI intelligently allocates capital — balancing cash needs, safety buffers, and return opportunities.",
    icon: EmptyWalletTick,
  },
  {
    title: "Actionable Insights",
    subtext:
      "Make better capital decisions with cashflow forecasts, burn rate alerts, and liquidity heatmaps.",
    icon: Chart,
  },
];

const WhatIsFinio = () => {
  return (
    <section className="pt-20 bg-white" id="feature">
      <div className="py-10 sm:py-20 bg-[url('https://kuldeep363.github.io/assets/what-you-can-do.png')] bg-no-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              FinioAI
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-2">
              All-in-One Treasury Power
            </h2>
            <p className="text-sm sm:text-lg text-sub-text max-w-xl mx-auto">
              From cash visibility to investment recommendations — Finio brings
              clarity, control, and intelligence to your business finances.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full sm:w-4/5 items-center">
              {FEATURES_LIST.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    className="flex items-start flex-col gap-1 border-[1px] border-white p-4 bg-white/30 backdrop-blur-[4px] rounded-2xl"
                    key={feature.title}
                  >
                    <div className="bg-primary rounded-lg p-1">
                      <Icon size={20.4} color="white" variant="Bold" />
                    </div>
                    <h3 className="text-lg font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-sub-text">{feature.subtext}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsFinio;
