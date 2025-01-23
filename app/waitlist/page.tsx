"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  role: z.string().min(2, "Please select your role"),
  interest: z.string().min(2, "Please tell us what interests you"),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

export default function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistForm) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you for joining our waitlist! We'll be in touch soon.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to join waitlist. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-medium text-gray-900">Early Access</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Join the Waitlist
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Be among the first to experience modern payroll management. Get
            early access to Kairo and help shape the future of payments.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <div className="relative mt-1">
                <input
                  {...register("name")}
                  type="text"
                  className={`block w-full rounded-lg border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.name
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-200 focus:ring-black"
                  } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                />
                {errors.name && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  {...register("email")}
                  className={`block w-full rounded-lg border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.email
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-200 focus:ring-black"
                  } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                />
                {errors.email && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-900"
              >
                Company (Optional)
              </label>
              <div className="relative mt-1">
                <input
                  {...register("company")}
                  type="text"
                  className="block w-full rounded-lg border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Role Field */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-900"
              >
                Role
              </label>
              <div className="relative mt-1">
                <select
                  {...register("role")}
                  className={`block w-full rounded-lg border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.role
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-200 focus:ring-black"
                  } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                >
                  <option value="" className="bg-[#0d0d0d] text-white">
                    Select your role
                  </option>
                  <option value="founder" className="bg-[#0d0d0d] text-white">
                    Founder/Executive
                  </option>
                  <option value="finance" className="bg-[#0d0d0d] text-white">
                    Finance/Accounting
                  </option>
                  <option value="hr" className="bg-[#0d0d0d] text-white">
                    HR/People Ops
                  </option>
                  <option
                    value="engineering"
                    className="bg-[#0d0d0d] text-white"
                  >
                    Engineering
                  </option>
                  <option value="other" className="bg-[#0d0d0d] text-white">
                    Other
                  </option>
                </select>
                {errors.role && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.role && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Interest Field */}
            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-gray-900"
              >
                What interests you most about Kairo?
              </label>
              <div className="relative mt-1">
                <textarea
                  {...register("interest")}
                  rows={4}
                  className={`block w-full rounded-lg border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.interest
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-200 focus:ring-black"
                  } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                />
                {errors.interest && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.interest && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.interest.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </button>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div
                className={`rounded-lg p-4 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
