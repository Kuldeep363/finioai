import { Button } from "@/components/button/Button";
import {
  ArrowLineUpRightIcon,
  ArrowRightIcon,
  ChartBarIcon,
  GearIcon,
  LinkIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Connect Your Accounts",
      description:
        "Securely connect all your business bank accounts for a real-time, unified cash view.",
    },
    {
      number: "2",
      title: "Get AI-Powered Insights",
      description:
        "Get intelligent fund insights tailored to your goals, risk, and returns.",
    },
    {
      number: "3",
      title: "Monitor & Act in Real Time",
      description:
        "Track key treasury metrics and take timely actions with full visibility and control.",
    },
  ];

  return (
    <section id="how-it-works" className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="https://kuldeep363.github.io/assets/sparkles.png"
              width={1000}
              height={1000}
              className="w-10"
              alt="finio ai how it works"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              How It Works
            </h2>
            <Image
              src="https://kuldeep363.github.io/assets/sparkles.png"
              width={1000}
              height={1000}
              className="w-10"
              alt="finio ai how it works"
            />
          </div>
          <p className="text-sm sm:text-lg text-sub-text max-w-xl mx-auto">
            Get started in minutes — no complex setup, no spreadsheets. Just
            smarter cash management with clarity, control, and automation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-10 w-1 bg-primary-light md:hidden" />
          <div className="absolute left-0 right-0 top-10 h-1 bg-primary-light hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl px-8 py-1 duration-300">
                  <div className="flex items-center mb-2">
                    <div className="text-6xl font-bold bg-gradient-to-r from-[#625BF6] to-[#362DFF] bg-clip-text text-transparent">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sub-text mb-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Link
            href="/join-waitlist"
            rel="noopener noreferrer"
            className="block w-full sm:w-[unset]"
          >
            <Button
              className="font-medium mt-3 w-full"
              icon={
                <ArrowLineUpRightIcon
                  weight="bold"
                  size={16}
                  color="hsl(var(--white))"
                />
              }
              iconPosition="right"
            >
              Join waitlist
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
