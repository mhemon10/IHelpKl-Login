"use client";

import React, { useState } from "react";
import { CheckCircle, ChevronDown, Facebook, Apple } from "lucide-react"; // Apple icon যোগ করা হলো
import Image from "next/image";

// --- CONFIG ---
const LOGO_CONFIG = {
  src: "/logo.svg",
  alt: "Company Logo",
  width: 48,
  height: 48,
};

const LEFT_IMAGE_CONFIG = {
  src: "/sign-up.jpeg",
  alt: "Trial Feature Visual",
  width: 700, // বড় করা
  height: 700,
};

// --- FEATURE TEXTS ---
const FEATURES = [
  "Unlimited everything, no credit card required.",
  "No limit on users. Invite the whole team.",
  "Use with confidence. Over 10,000 small businesses use LACRM.",
  "Private and secure.",
  "Your data belongs to you.",
];

// --- Google Icon ---
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

// --- Left Side Component ---
const LeftSideFeatureVisual = () => {
  const featurePositions = [
    "top-[20%] left-[5%]",
    "top-[25%] right-[5%]",
    "top-[65%] right-[70%]",
    "top-[65%] right-[10%]",
    "bottom-[20%] left-[40%]",
  ];

  return (
    
  );
};

// --- SignUp Page ---
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up attempt...");
  };

  return (
    <div className="flex items-stretch min-h-screen bg-white">
      {/* CSS for animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
        .animate-fadeInRight {
          animation-name: fadeInRight;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>

      {/* Main Two Column Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[65%_35%]">
        {/* Left Column */}
        <div className="hidden lg:flex lg:items-center lg:justify-center min-h-screen">
          <LeftSideFeatureVisual />
        </div>

        {/* Right Column: Form */}
        <div
          className="flex flex-col p-6 md:p-10 lg:p-12 min-h-screen transition-all duration-700 transform opacity-0 animate-fadeIn bg-white"
          style={{ animationDelay: "500ms" }}>
          {/* 🚨 লোগোকে একদম উপরে বাম দিকে রাখা হলো */}
          <div className="flex items-start mb-8">
            <Image
              src={LOGO_CONFIG.src}
              alt={LOGO_CONFIG.alt}
              width={LOGO_CONFIG.width}
              height={LOGO_CONFIG.height}
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
          </div>

          {/* Form Content: Title, Social Sign-in, Form fields */}
          <div className="flex flex-col flex-grow justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Sign up for a free trial
            </h1>

            {/* Social Sign-in */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300">
                <GoogleIcon />
                Sign up with Google
              </button>

              {/* Facebook বা Apple ব্যবহার করা যেতে পারে, ছবির সাথে মিল রেখে Apple ব্যবহার করা হলো */}
              <button className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300">
                <Apple className="w-6 h-6 mr-3 text-gray-700" />
                Sign up with Apple
              </button>
            </div>

            <div className="w-full border-b border-gray-200 mb-6"></div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-medium text-blue-600 hover:text-blue-500">
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Must be at least 12 characters long
                </p>
              </div>

              {/* Users dropdown */}
              <div>
                <label
                  htmlFor="users"
                  className="block text-sm font-medium text-gray-700">
                  How many users will need access to your CRM?
                </label>
                <div className="relative">
                  <select
                    id="users"
                    name="users"
                    value={selectedUsers}
                    onChange={(e) => setSelectedUsers(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-orange-500 focus:border-orange-500 transition">
                    <option value={1}>Just me (1 user)</option>
                    <option value={2}>2 users</option>
                    <option value={5}>3-5 users</option>
                    <option value={10}>6-10 users</option>
                    <option value={99}>More than 10</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Industry dropdown */}
              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-700">
                  Industry
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-orange-500 focus:border-orange-500 transition">
                    <option value="">Select your industry</option>
                    <option value="real_estate">Real Estate</option>
                    <option value="financial">Financial Services</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  This helps us customize the CRM to fit your business
                </p>
              </div>

              {/* Start Trial Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 transition duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Start your 30-day free trial
                </button>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 pt-2 text-center">
                By signing up, you agree to our
                <a href="#" className="text-blue-600 hover:text-blue-500 ml-1">
                  terms
                </a>
                and
                <a href="#" className="text-blue-600 hover:text-blue-500 ml-1">
                  privacy policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
