import { Button } from "@/components/button/Button";
import { ArrowLineUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const TreasuryIsBroken = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full p-5 sm:px-10 sm:py-20 bg-[url('https://kuldeep363.github.io/assets/treasury-is-broken.jpg')] bg-no-repeat bg-cover bg-left sm:bg-center rounded-3xl sm:rounded-[30px]">
          <h4 className="font-medium text-2xl sm:text-3xl text-white text-center sm:text-left">
            Business Treasury is Broken
          </h4>
          <p className="text-white text-sm sm:text-lg w-full sm:w-2/5 text-center sm:text-left mt-2">
            Manual workflows. Idle funds. Missed returns. Traditional banking
            tools weren’t built for modern businesses <br /> —{" "}
            <span className="font-bold">FinioAI is.</span>
          </p>
          <div className="flex justify-center sm:justify-start">
            <Button
              className="font-medium bg-white !text-primary mt-3"
              icon={
                <ArrowLineUpRightIcon
                  weight="bold"
                  size={16}
                  color="hsl(var(--primary))"
                />
              }
              iconPosition="right"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasuryIsBroken;
