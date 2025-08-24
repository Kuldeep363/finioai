import { Button } from "@/components/button/Button";
import {
  ArrowLineUpRightIcon,
  ArrowRightIcon,
  CalendarIcon,
  ChatTeardropTextIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-2">
            Ready to Transform Your Treasury?
          </h2>
          <p className="text-sm sm:text-lg text-sub-text max-w-xl mx-auto mb-2">
            Join innovative startups and finance teams who are already using
            FinioAI to optimize their treasury management.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 mb-6">
            <Link href="/join-waitlist" rel="noopener noreferrer">
              <Button
                className="font-medium mt-3"
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
            <a href="mailto:info@finioai.com" className="block">
              <Button
                className="font-medium mt-3 bg-white w-full"
                icon={
                  <ChatTeardropTextIcon
                    weight="bold"
                    size={16}
                    color="hsl(var(--primary))"
                  />
                }
                variant="outlined"
                iconPosition="left"
              >
                Contact us
              </Button>
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-center space-x-2 text-sub-text">
              <EnvelopeSimpleIcon className="h-5 w-5" />
              <span>Questions? Reach out to</span>
              <a
                href="mailto:info@finioai.com"
                className="text-primary hover:text-primary-hover font-medium"
              >
                info@finioai.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
