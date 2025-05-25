import { Button } from "@/components/button/Button";
import { ExportCircle } from "iconsax-react";
import React from "react";
import LgFeature from "./feature/LgFeature";
import SmFeature from "./feature/SmFeature";

const Feature = () => {
  return (
    <div id="feature" className="px-4 lg:px-44 w-full flex justify-center mb-12">
      <div className="container mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <p className="text-2xl sm:text-4xl lg:pe-12 col-span-1 mt-2">
            Unleashing extraordinary capabilities to elevate and empower your
            business success.
          </p>
          <div className="col-span-1 mt-2">
            <p className="font-light">
              Empower your business with our platform’s centralized dashboard,
              seamless transactions, and automated reports. Streamline
              operations, ensure accuracy, and gain data-driven insights
              effortlessly. Experience enhanced efficiency and drive growth with
              our innovative, all-in-one solution.
            </p>
            <Button
              iconPosition="right"
              icon={<ExportCircle color="hsl(var(--white))" size={16} />}
              className="font-redhat mt-3"
            >
              Join waitlist
            </Button>
          </div>
        </div>
        <div className="mt-8">
                  <LgFeature />
                  <SmFeature/>
        </div>
      </div>
    </div>
  );
};

export default Feature;
