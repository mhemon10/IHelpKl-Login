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
    <div className="w-full h-full p-8 md:p-16 bg-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-100 opacity-50 blur-3xl animate-pulse delay-100"></div>

      {/* Main Image */}
      <div className="relative z-10 w-full max-w-3xl h-full max-h-[800px] flex items-center justify-center animate-fadeInRight">
        <Image
          src={LEFT_IMAGE_CONFIG.src}
          alt={LEFT_IMAGE_CONFIG.alt}
          width={LEFT_IMAGE_CONFIG.width}
          height={LEFT_IMAGE_CONFIG.height}
          className="rounded-xl object-cover shadow-2xl ring-4 ring-white"
        />
      </div>

      {/* Title */}
      <h3
        className="absolute top-10 left-10 text-3xl font-light text-gray-800 animate-fadeIn"
        style={{ animationDelay: "200ms" }}>
        Your trial includes
      </h3>

      {/* Feature bubbles */}
      {FEATURES.map((feature, index) => (
        <div
          key={index}
          className={`absolute z-20 p-4 bg-white rounded-lg shadow-xl text-gray-700 max-w-[220px] opacity-0 animate-fadeIn transform
            ${featurePositions[index % featurePositions.length]}`}
          style={{
            animationDelay: `${500 + index * 200}ms`,
            animationFillMode: "forwards",
          }}>
          <CheckCircle className="w-5 h-5 text-orange-500 mb-1" />
          <p className="text-sm font-medium leading-tight">{feature}</p>
        </div>
      ))}
    </div>
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
