"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// --- CONFIG --- (No Change)
const LOGO_CONFIG = {
  src: "/logo.svg",
  alt: "Company Logo",
  width: 170,
  height: 170,
};

const LEFT_IMAGE_CONFIG = {
  src: "/signup-main.jpeg",
  alt: "Trial Feature Visual",
  width: 800,
  height: 800,
};

const BACKGROUND_IMAGE_CONFIG = {
  src: "/sign-up.jpeg",
};


// ... (Icon components remain the same)
const GoogleIcon = () => (
  <svg
    className="w-5 h-5 mr-3"
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M533.5 272.2c0-18.7-1.4-37.1-4.7-55.1H266.7v104.2h149.2c-6.6 34.3-25.9 63.8-54.8 85.8v68.3h88.6c51.9-47.8 82-117.8 82-203.2z"
      fill="#4285F4"
    />
    <path
      d="M266.7 544.3c71.6 0 131.8-23.7 175.7-64.4l-88.6-68.3c-24.5 16.5-55.8 25.8-87.1 25.8-67.6 0-124.9-45.7-145.4-106.9H32.4v70.2c44.1 87.5 137.9 146.9 234.3 146.9z"
      fill="#34A853"
    />
    <path
      d="M121.3 320.1c-4.9-14.5-7.7-29.7-7.7-44.8s2.8-30.3 7.7-44.8V159.5H32.4c-15.9 31.5-24.5 68.4-24.5 108.8 0 40.4 8.6 77.3 24.5 108.8l88.9-70.2z"
      fill="#FBBC05"
    />
    <path
      d="M266.7 104.2c39.9 0 75.9 13.8 103.9 40.5l78.7-78.7c-48.4-45.5-112.5-67.1-182.7-67.1C128.8 0 35 59.4 0 146.9l88.9 70.2c20.5-61.2 77.8-106.9 145.4-106.9z"
      fill="#EA4335"
    />
  </svg>
);
const FacebookIcon = () => (
  <FaFacebook className="w-5 h-5 mr-3 text-blue-600" />
);

// --- Left Features Section (FIXED FOR RESPONSIVENESS AND AESTHETICS) ---
const LeftSideFeatureVisual = () => {
  const FEATURES = [
    "Unlimited everything, no credit card required.",
    "No limit on users. Invite the whole team.",
    "Use with confidence. Over 10,000 small businesses use LACRM.",
    "Private and secure.",
  ];


  const featurePositions = [

    "top-12 left-12",

    "top-12 right-12",

    "bottom-12 left-12",

    "bottom-12 right-12",
  ];

  return (
    <div
      className="w-full h-full p-8 md:p-16 flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_CONFIG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Wrapper to center the Image's visual space */}
      <div
        className="relative z-20 w-full max-w-3xl h-full flex items-center justify-center animate-fadeInRight"
        id="ImageAndBubbleWrapper">
        {/* New Inner Container (relative w-full h-full) to align Image and Bubbles */}
        <div className="relative w-full h-full ">
          <Image
            src={LEFT_IMAGE_CONFIG.src}
            alt={LEFT_IMAGE_CONFIG.alt}
            layout="fill"
            objectFit="contain"
            // className="object-cover"
            unoptimized
          />

          {FEATURES.map((feature, index) => (
            <div
              key={index}
              // Apply stable corner position classes for aesthetic offset
              className={`absolute z-30 bg-white/80 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] text-gray-900 backdrop-blur-xl flex flex-col items-center justify-center text-center float-bubble ${featurePositions[index]}`}
              style={{
                width: "150px",
                height: "150px",
                padding: "20px",
                borderRadius: "50%",
                animationDelay: `${300 + index * 200}ms`,
                minWidth: "150px",
                minHeight: "150px",
                // Adjusting transform origin slightly to make the positioning look cleaner.
                transform: `translate(${
                  featurePositions[index].includes("left") ? "-50%" : "50%"
                }, ${
                  featurePositions[index].includes("top") ? "-50%" : "50%"
                })`,
                // We are now manually calculating the translate to center the bubble on the offset
                // Top Left: translate(-50%, -50%)
                // Top Right: translate(50%, -50%)
                // Bottom Left: translate(-50%, 50%)
                // Bottom Right: translate(50%, 50%)
              }}>
              <FaCheckCircle className="w-8 h-8 flex-shrink-0 text-orange-600 mb-2" />
              <p className="text-[13px] font-semibold">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main SignUp Page (No Change) ---
export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="flex items-stretch h-screen w-full bg-white overflow-hidden">
      {/* LEFT FEATURES COLUMN */}
      <div className="hidden lg:flex h-full w-2/3">
        <LeftSideFeatureVisual />
      </div>

      {/* RIGHT FORM COLUMN */}
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-5 py-8 lg:p-10 lg:py-16 animate-fadeInLeft overflow-y-auto">
        <div className="max-w-md w-full">
          <div className="flex justify-center mb-6 lg:mb-10">
            <Image
              src={LOGO_CONFIG.src}
              alt={LOGO_CONFIG.alt}
              width={LOGO_CONFIG.width}
              height={LOGO_CONFIG.height}
              unoptimized
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Industry
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your industry"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="text-orange-500 text-sm mt-1"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              Start your free trial
            </button>

            {/* SOCIAL LOGIN */}
            <div className="flex flex-col space-y-3 pt-2">
              <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <GoogleIcon /> Sign in with Google
              </button>
              <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <FacebookIcon /> Sign in with Facebook
              </button>
            </div>

            {/* Adjusted pt-3 and pb-6 for better visibility on mobile */}
            <p className="text-center text-sm text-gray-600 pt-3 pb-6">
              Already have an account?{" "}
              <a
                href="/ "
                className="text-orange-500 font-semibold hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Animations and Global Styles (No functional changes here) */}
      <style jsx>{`
        /* This ensures no scrollbar on the main window */
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          box-sizing: border-box;
        }

        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.7s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.7s ease-out forwards;
        }
      `}</style>

      {/* Floating + Pop animation for features */}
      <style jsx global>{`
        /* Global styles specific to the body/html */
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        @keyframes bubblePop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          60% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .float-bubble {
          animation: bubblePop 0.6s ease-out forwards,
            floating 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
