import { Button } from "@/components/button/Button";
import {
  ArrowLineUpRightIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  WarningIcon,
  XCircleIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
const PROBLEMS = [
  {
    title: "Idle Cash Sitting Around",
    subtext:
      "Millions in operating accounts earning 0.01% while inflation eats away value.",
  },
  {
    title: "Manual Processes",
    subtext:
      "CFOs spending hours on spreadsheets instead of strategic financial planning.",
  },
  {
    title: "Limited Visibility",
    subtext:
      "No real-time view of cash across multiple accounts and currencies.",
  },
  {
    title: "Risk & Compliance",
    subtext:
      "Manual processes lead to errors, missed opportunities, and regulatory risks.",
  },
];

const SOLUTIONS = [
  {
    title: "Smart Cash Management",
    subtext:
      "Automatically invest excess cash in safe, liquid instruments while maintaining optimal runway.",
  },
  {
    title: "AI-Powered Fund Insights & Recommendations",
    subtext:
      "Analyze your cash, goals, and risk profile — then let FinioAI recommend the smartest investment options in real time.",
  },
  {
    title: "Complete Visibility",
    subtext:
      "Real-time dashboard showing all accounts, investments, and cash flows in one place.",
  },
  {
    title: "Enterprise Security",
    subtext:
      "Bank-level security with audit trails, compliance reporting, and multi-user access controls.",
  },
];

const ProblemSolution = () => {
  return (
    <section className="pt-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Problem */}
          <div className="space-y-8">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 rounded-full mb-2 px-4 py-1 bg-red">
                <WarningCircleIcon
                  size={16}
                  weight="fill"
                  color="hsl(var(--white))"
                />
                <span className="font-medium text-white text-sm">
                  The Problem
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-black mb-6">
                Treasury slows you down
              </h2>
            </div>

            <div className="space-y-6">
              {PROBLEMS.map((problem) => {
                return (
                  <div
                    className="flex items-start space-x-4"
                    key={problem.title}
                  >
                    <div className="bg-red-100 rounded-full mt-1">
                      <XCircleIcon weight="fill" color="var(--red)" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-sub-text">{problem.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-600 rounded-full mb-2 px-4 py-1 bg-green">
                <CheckCircleIcon
                  size={16}
                  weight="fill"
                  color="hsl(var(--white))"
                />
                <span className="font-medium text-white text-sm">
                  The Solution
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-black mb-6">
                FinioAI is the Fix
              </h2>
            </div>

            <div className="space-y-6">
              {SOLUTIONS.map((solution) => {
                return (
                  <div
                    className="flex items-start space-x-4"
                    key={solution.title}
                  >
                    <div className="bg-green-100 rounded-full p-2 mt-1">
                      <CheckCircleIcon
                        weight="fill"
                        color="var(--green)"
                        size={18}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sub-text">{solution.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="pt-4 w-full sm:w-1/3">
            <Link
              href="/join-waitlist"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                icon={<ArrowLineUpRightIcon size={16} weight="bold" />}
                iconPosition="right"
                className="font-medium w-full"
              >
                Join Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
