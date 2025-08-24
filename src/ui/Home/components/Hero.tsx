import {
  ArrowLineUpRightIcon,
  ArrowRightIcon,
  ChartBarIcon,
  LightningIcon,
  ShieldIcon,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Header from "./Header";
import { Button } from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url('https://kuldeep363.github.io/assets/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-32 pt-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Treasury <span className="text-primary">Intelligence.</span>
            <br />
            For <span className="text-primary">Modern</span> Businesses.
          </h1>

          <p className="text-sm md:text-xl text-sub-text mb-4 max-w-3xl mx-auto">
            Track, manage, and grow your business cash in one smart platform —
            real-time visibility, automated investments, and better decisions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full">
            <Link
              href="/join-waitlist"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="font-medium sm:w-[350px] w-full"
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
              <Button className="font-medium w-full" variant="outlined">
                Contact us
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              src="https://kuldeep363.github.io/assets/hero-img-lg.png"
              alt="finio ai dashboard"
              width={2000}
              height={1500}
              className="w-full hidden sm:block"
            />
            <Image
              src="https://kuldeep363.github.io/assets/hero-img-sm.png"
              alt="finio ai dashboard"
              width={2000}
              height={1500}
              className="w-full sm:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
