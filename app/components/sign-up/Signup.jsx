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
      
    </div>
  );
};

export default SignUpPage;
