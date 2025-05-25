import { Button } from "@/components/button/Button";
import { ExportCircle } from "iconsax-react";
import React from "react";

const Ready = () => {
  return (
    <div id="ready">
      <div
        style={{
          background: `url('${process.env.NEXT_PUBLIC_IMAGE_HOST}/ready.png') no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center w-full py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4">
            <div className="col-span-1 px-4 lg:ps-44">
              <p className="text-2xl lg:text-5xl lg:w-3/4 text-white">
                Get Ready to Transform Your Business!
              </p>
              <p className="text-white font-light text-sm">
                Our product, packed with a centralized dashboard, seamless
                transactions, and automated reports, is launching soon. Don’t
                miss out on the future of efficiency and growth. Join the
                waitlist now to be the first to experience these powerful
                features!
              </p>
              <Button
                iconPosition="right"
                icon={<ExportCircle color="hsl(var(--primary))" size={16} />}
                className="font-redhat mt-4 bg-white !text-primary"
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

export default Ready;
