"use client";
import React, { useState } from "react";
import { Button } from "@/components/button/Button";
import { ArrowLineUpRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { getToast } from "@/components/alert/Alerts";
import confetti from "canvas-confetti";
import CircularLoader from "@/components/loaders/CircularLoader";
// import confetti from "canvas-confetti";

const wrapperClassName = "p-4 bg-gray-50 rounded-2xl w-full";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    work_email: "",
    company_name: "",
    designation: "",
    company_website: "",
    phone_number: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    // if (type === "checkbox") {
    //   const checked = (e.target as HTMLInputElement).checked;
    //   setFormData((prev) => ({
    //     ...prev,
    //     excited_features: checked
    //       ? [...prev.excited_features, value]
    //       : prev.excited_features.filter((f) => f !== value),
    //   }));
    // } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    // }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      setIsSubmitting(true);
      getToast({type:"success", message:"testing"})
      e.preventDefault();
      await fetch(
        "https://hlgcaplvovaumyvsleml.supabase.co/functions/v1/waitlist-signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      getToast({
        type: "success",
        message: "Thanks for joining the waitlist!",
      });
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#605DFF", "#4ADE80", "#FBBF24", "#F43F5E"],
      });
      setFormData({
        full_name: "",
        work_email: "",
        company_name: "",
        designation: "",
        company_website: "",
        phone_number:""
      });
    } catch (err) {
      getToast({ type: "error", message: "Try again!" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const RadioGroup = ({
  //   name,
  //   options,
  //   value,
  // }: {
  //   name: string;
  //   options: string[];
  //   value: string;
  // }) => (
  //   <div className="grid gap-3">
  //     {options.map((opt) => (
  //       <label
  //         key={opt}
  //         className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${
  //           value === opt
  //             ? "border-[hsl(243,90%,66%)] bg-[hsl(243,90%,66%,0.05)]"
  //             : "border-gray-300 hover:border-[hsl(243,90%,66%)]"
  //         }`}
  //       >
  //         <input
  //           type="radio"
  //           name={name}
  //           value={opt}
  //           checked={value === opt}
  //           onChange={handleChange}
  //           className="w-4 h-4 text-[hsl(243,90%,66%)] focus:ring-[hsl(243,90%,66%)]"
  //         />
  //         <span>{opt}</span>
  //       </label>
  //     ))}
  //   </div>
  // );

  return (
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
          We're building India's smartest treasury platform to help startups and
          businesses invest idle cash, manage liquidity, and optimize returns –
          all in one place.
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
        {/* name */}
        <div className={clsx(wrapperClassName)}>
          <label className="block mb-2 font-semibold">Your name</label>
          <input
            type="text"
            name="full_name"
            placeholder="Your name"
            onChange={handleChange}
            value={formData.full_name}
            className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
          />
        </div>
        {/* email */}
        <div className={clsx(wrapperClassName)}>
          <label className="block mb-2 font-semibold">Work Email Address</label>
          <input
            type="email"
            name="work_email"
            placeholder="We'll send early access info here."
            value={formData.work_email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
          />
        </div>
        {/* designation */}
        <div className={clsx(wrapperClassName)}>
          <label className="block mb-2 font-semibold">Designation / Role</label>
          <input
            type="text"
            name="designation"
            placeholder="e.g., Founder, CFO, Finance Manager"
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
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
          />
        </div>
        <div className={clsx(wrapperClassName)}>
          <label className="block mb-2 font-semibold">Phone number (Optional)</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
          />
        </div>

        {/* website */}
        <div className={clsx(wrapperClassName)}>
          <label className="block mb-2 font-semibold">
            Company Website (optional)
          </label>
          <input
            type="text"
            name="company_website"
            value={formData.company_website}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
          />
        </div>
        {/* hear from us */}
        {/* <div className={clsx(wrapperClassName)}>
          <label className="block mb-2 font-semibold">
            Would you like someone from our team to reach out for a demo or
            discussion?
          </label>
          <div className="flex items-center gap-4">
            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="reach_out"
                  value={opt}
                  checked={formData.reach_out === opt}
                  onChange={handleChange}
                  className="w-4 h-4 text-[hsl(243,90%,66%)] focus:ring-[hsl(243,90%,66%)]"
                />
                {opt}
              </label>
            ))}
          </div>
        </div> */}
        {/* employees */}
        {/* <div className={clsx(wrapperClassName)}>
          <label className="block mb-2 font-semibold">
            Number of Employees
          </label>
          <RadioGroup
            name="num_employees"
            value={formData.num_employees}
            options={["1–10", "11–50", "51–200", "201–500", "500+"]}
          />
        </div> */}

        {/* cash */}
        {/* <div className={clsx(wrapperClassName)}>
          <label className="block mb-2 font-semibold">
            Monthly Idle Cash Available
          </label>
          <RadioGroup
            name="monthly_idle_cash"
            value={formData.monthly_idle_cash}
            options={[
              "Less than ₹10 lakhs",
              "₹10 – ₹50 lakhs",
              "₹50 lakhs – ₹2 crores",
              "₹2 crores – ₹10 crores",
              "₹10 crores+",
            ]}
          />
        </div> */}
      </div>
      <hr />

      {/* Full width sections */}
      {/* <div className={clsx(wrapperClassName)}>
        <label className="block mb-2 font-semibold">
          What features are you most excited about?
        </label>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Mutual Fund Investing for Idle Cash",
            "Real-time Cash Flow Visibility",
            "Account Aggregation",
            "Bulk Payments & Vendor Payouts",
            "AI Cash Flow Forecasting",
            "Treasury Automation",
            "Other",
          ].map((feature) => (
            <div key={feature} className="flex flex-col gap-2">
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-[hsl(243,90%,66%)] transition">
                <input
                  type="checkbox"
                  name="excited_features"
                  value={feature}
                  checked={formData.excited_features.includes(feature)}
                  onChange={(e) => {
                    handleChange(e);
                    if (
                      feature.startsWith("Other") &&
                      !(e.target as HTMLInputElement).checked
                    ) {
                      setFormData((prev) => ({ ...prev, otherFeature: "" }));
                    }
                  }}
                  className="w-4 h-4 text-[hsl(243,90%,66%)] focus:ring-[hsl(243,90%,66%)]"
                />
                <span>{feature}</span>
              </label>

              {feature.startsWith("Other") &&
                formData.excited_features.includes(feature) && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    value={formData.otherFeature || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        otherFeature: e.target.value,
                      }))
                    }
                    className="mt-1 p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
                  />
                )}
            </div>
          ))}
        </div>
      </div> */}

      {/* comment */}
      {/* <div className={clsx(wrapperClassName)}>
        <label className="block mb-2 font-semibold">
          Any comments or questions?
        </label>
        <textarea
          name="comments"
          placeholder="We’d love to hear from you."
          onChange={handleChange}
          rows={5}
          className="w-full p-3 border rounded-lg focus:ring-[hsl(243,90%,66%)] focus:ring-2 outline-none"
        />
      </div> */}

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
        {isSubmitting ? <div className="flex gap-0 items-center">
          <CircularLoader/>
          <span>Submitting...</span>
        </div> : <span>Join waitlist</span>}
      </Button>
    </form>
  );
}
