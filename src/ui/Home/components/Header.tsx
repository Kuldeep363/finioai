"use client";
import { Button } from "@/components/button/Button";
import {
  ArrowLineUpIcon,
  ArrowLineUpRightIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import { ExportCircle, Menu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  useEffect(() => {
    const page = document.getElementById("landing__page");
    if (isMenuOpen) {
      if (page) {
        page.style.height = "100vh";
        page.style.overflowY = "hidden";
      }
    } else {
      if (page) {
        page.style.height = "unset";
        page.style.overflowY = "auto";
      }
    }
  }, [isMenuOpen]);

  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="https://kuldeep363.github.io/assets/finioai-logo.svg"
              alt="finio ai logo"
              width={1000}
              height={500}
              className="w-4"
            />
            <span className="ml-2 text-2xl font-bold text-primary">
              FinioAI
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-black font-medium hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#feature"
              className="text-black font-medium hover:text-black transition-colors"
            >
              Feature
            </a>
            <a
              href="mailto:hello@finioai.com"
              className="text-black font-medium hover:text-black transition-colors"
            >
              Contact
            </a>
            {/* <a
              href="#integrations"
              className="text-black font-medium hover:text-black transition-colors"
            >
              FAQ
            </a> */}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/join-waitlist"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="font-medium w-full"
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

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" size={16} color="var(--black)" />
            ) : (
              <ListIcon className="h-6 w-6" size={16} color="var(--black)" />
            )}
          </button>
        </div>

        <div
          className={clsx(
            "md:hidden px-4 absolute bg-white/30 left-0 right-0 backdrop-blur-[8px] overflow-hidden transition-all",
            {
              "h-screen py-4": isMenuOpen,
              "h-0": !isMenuOpen,
            }
          )}
        >
          <div
            className="flex flex-col space-y-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <a
              href="#about"
              className="text-black font-medium hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#feature"
              className="text-black font-medium hover:text-black transition-colors"
            >
              Feature
            </a>
            <a
              href="mailto:hello@finioai.com"
              className="text-black font-medium hover:text-black transition-colors"
            >
              Contact
            </a>
            {/* <a
              href="#integrations"
              className="text-black font-medium hover:text-black transition-colors"
            >
              FAQ
            </a> */}
            <Link
              href="/join-waitlist"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="font-medium w-full"
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
      </div>
    </header>
  );
};

export default Header;
