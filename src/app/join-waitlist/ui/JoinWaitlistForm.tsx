"use client";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/button/Button";
import { ArrowLineUpRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { getToast } from "@/components/alert/Alerts";
import confetti from "canvas-confetti";
import CircularLoader from "@/components/loaders/CircularLoader";
import Modal from "@/components/modal/Modal";
import TextNormal from "@/components/text/TextNormal";
import LottieAnimation from "@/components/lottie/LottieAnimation";
import SucceessCheck from "@/lottie/SuccessCheck.json";
import { useRouter } from "next/navigation";
import { isValidWorkEmail } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}
const submitWaitlistForm = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      "https://hlgcaplvovaumyvsleml.supabase.co/functions/v1/waitlist-signup", // Replace with your Supabase project URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone_number: +formData.phone_number,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to submit form");
    }

    return result;
  } catch (err) {
    console.log("Error while submitting waitlist form");
    throw new Error("Failed to submit form");
  }
};

const wrapperClassName = "p-4 bg-gray-50 rounded-2xl w-full";
interface FormData {
  full_name: string;
  work_email: string;
  company_name: string;
  designation: string;
  company_website: string;
  phone_number: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    work_email: "",
    company_name: "",
    designation: "",
    company_website: "",
    phone_number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSuccessModalToggle = () => {
    setIsSuccessModalOpen((prev) => !prev);
  };
  const route = useRouter();
  const validateFormData = useCallback((formData: FormData) => {
    if (!!!formData.full_name)
      return {
        success: false,
        message: "Enter full nmae",
      };
    else if (!!!formData.work_email)
      return {
        success: false,
        message: " Enter work email",
      };
    else if (!isValidWorkEmail(formData.work_email))
      return {
        success: false,
        message: "Invalid email",
      };
    else if (!!!formData.company_name)
      return {
        success: false,
        message: "Enter company name",
      };
    else if (!!!formData.designation)
      return {
        success: false,
        message: "Enter your designation",
      };
    return {
      success: true,
      message: "",
    };
  }, []);

  const mutation = useMutation({
    mutationFn: submitWaitlistForm,
    onSuccess: (data) => {
      console.log("Form submitted successfully:", data);
      handleSuccessModalToggle();
      setIsSubmitting(false);
    },
    onError: (error: Error) => {
      console.log("Error while submitting waitlist form:::", error);
      getToast({ type: "error", message: "Try again" });
      setIsSubmitting(false);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (
      name === "phone_number" &&
      value !== "" &&
      (!/^\d*$/.test(value) || value.length > 10)
    )
      return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const validation = validateFormData(formData);
      if (validation.success) {
        setIsSubmitting(true);
        //send to DB
        mutation.mutate(formData);
      } else {
        getToast({ type: "error", message: validation.message });
      }
    } catch (err) {
      console.log("Error::::", err);
      setIsSubmitting(false);
    }
  };

  const handleOkayClick = useCallback(() => {
    handleSuccessModalToggle();
    route.push("/");
  }, [handleSuccessModalToggle]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clsx(
          "max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8",
          {
            "pointer-events-none select-none": isSubmitting,
          }
        )}
      >
        <header className="space-y-3">
          <div className="flex items-center space-x-3 justify-center gap-2 mb-6">
            <img
              src="https://kuldeep363.github.io/assets/finioai-logo.svg"
              alt="FinioAI Logo"
              className="h-10"
            />
            <p className="font-bold text-3xl text-primary">FinioAI</p>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-black">
            Join the Waitlist – Be the First to Experience Smart Treasury
          </h1>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
            We're building India's smartest treasury platform to help startups
            and businesses invest idle cash, manage liquidity, and optimize
            returns – all in one place.
          </p>

          <ul className="text-sm text-gray-700 bg-primary-light p-4 rounded-2xl">
            <li className="flex items-start gap-1 my-2">
              <CheckCircleIcon weight="fill" color="var(--green)" size={18} />{" "}
              Early access to our private beta
            </li>
            <li className="flex items-start gap-1 my-2">
              <CheckCircleIcon weight="fill" color="var(--green)" size={18} />{" "}
              Priority onboarding and support
            </li>
            <li className="flex items-start gap-1 my-2">
              <CheckCircleIcon weight="fill" color="var(--green)" size={18} />{" "}
              Exclusive insights and product updates
            </li>
          </ul>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* full name */}
          <div className={clsx(wrapperClassName)}>
            <label className="block mb-2 font-semibold">Your name</label>
            <input
              type="text"
              name="full_name"
              placeholder="e.g., Elon Musk"
              onChange={handleChange}
              value={formData.full_name}
              className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
            />
          </div>

          {/* email */}
          <div className={clsx(wrapperClassName)}>
            <label className="block mb-2 font-semibold">
              Work Email Address
            </label>
            <input
              type="text"
              name="work_email"
              placeholder="yes@work.com"
              value={formData.work_email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
            />
          </div>

          {/* role */}
          <div className={clsx(wrapperClassName)}>
            <label className="block mb-2 font-semibold">
              Designation / Role
            </label>
            <input
              type="text"
              name="designation"
              placeholder="Boss, Wizard..."
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
            />
          </div>

          {/* company name */}
          <div className={clsx(wrapperClassName)}>
            <label className="block mb-2 font-semibold">Company Name</label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              placeholder="e.g., Stark Industries"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
            />
          </div>

          {/* phone number */}
          <div className={clsx(wrapperClassName)}>
            <label className="block mb-2 font-semibold">
              Phone number (Optional)
            </label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              placeholder="123 456 7890"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
            />
          </div>

          {/* company website */}
          <div className={clsx(wrapperClassName)}>
            <label className="block mb-2 font-semibold">
              Company Website (optional)
            </label>
            <input
              type="text"
              name="company_website"
              placeholder="yourcompany.com"
              value={formData.company_website}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="font-medium w-full"
          icon={
            isSubmitting ? null : (
              <ArrowLineUpRightIcon
                weight="bold"
                size={16}
                color="hsl(var(--white))"
              />
            )
          }
          iconPosition="right"
        >
          {isSubmitting ? (
            <div className="flex gap-0 items-center">
              <CircularLoader />
              <span>Submitting...</span>
            </div>
          ) : (
            <span>Join waitlist</span>
          )}
        </Button>
      </form>
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessModalToggle}
        closeOnOutsideClick={false}
        className="w-[400px]"
      >
        <div className="grid place-items-center">
          <LottieAnimation
            animationData={SucceessCheck}
            width={"150px"}
            height={"150px"}
            loop={false}
          />
        </div>
        <TextNormal
          text="Thank you for joining the waitlist!"
          align="center"
          color="var(--black)"
          className="text-xl font-bold"
        />
        <TextNormal
          text="You're now one step closer to simplifying and supercharging your treasury operations. We'll keep you updated with early access details soon."
          align="center"
          color="var(--sub-text)"
          className="text-sm my-3"
        />
        <Button className="w-full my-3" onClick={handleOkayClick}>
          Okay
        </Button>
      </Modal>
    </>
  );
}
