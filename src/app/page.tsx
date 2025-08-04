import { Button } from "@/components/button/Button";
import CTA from "@/ui/Home/components/CTA";
import Footer from "@/ui/Home/components/Footer";
import Header from "@/ui/Home/components/Header";
import Hero from "@/ui/Home/components/Hero";
import HowItWorks from "@/ui/Home/components/HowItWorks";
import Integrations from "@/ui/Home/components/Integrations";
import Mission from "@/ui/Home/components/Mission";
import ProblemSolution from "@/ui/Home/components/ProblemSolution";
import TreasuryInsights from "@/ui/Home/components/TreasuryInsights";
import TreasuryIsBroken from "@/ui/Home/components/TreasuryIsBroken";
import WhatIsFinio from "@/ui/Home/components/WhatIsFinio";
import WhyFinio from "@/ui/Home/components/WhyFinio";
import { ExportCircle } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" id="landing__page">
      <main>
        <Hero />
        <TreasuryIsBroken/>
        <ProblemSolution />
        <WhatIsFinio />
        {/* <WhyFinio /> */}
        <HowItWorks />
        {/* <TreasuryInsights /> */}
        {/* <Integrations /> */}
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
