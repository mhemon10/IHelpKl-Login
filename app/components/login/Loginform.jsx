"use client";

import React, { useState } from "react";
import Image from "next/image";

// --- CONFIG ---
const LOGO_CONFIG = {
  src: "/logo.svg",
  alt: "Company Logo",
  width: 150,
  height: 150,
};
const RIGHT_IMAGE_CONFIG = {
  src: "/loginimg-1.jpeg",
  alt: "CRM Feature Visual",
  width: 800,
  height: 600,
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt...");
  };

  // --- Icons ---
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
    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.594 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z" />
    </svg>
  );

  // --- Right Side ---
  const RightSideFeatureVisual = () => (
    
  );

  return (
    <div className="flex min-h-screen bg-white">
      {/* Animation CSS */}
      <style jsx global>{`
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

      {/* LEFT SIDE FORM 35% */}
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-10 animate-fadeInLeft">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src={LOGO_CONFIG.src}
              alt={LOGO_CONFIG.alt}
              width={LOGO_CONFIG.width}
              height={LOGO_CONFIG.height}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
              Login
            </button>

            {/* SOCIAL LOGIN */}
           

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account yet?{" "}
              <a
                href="/signup"
                className="text-orange-500 font-semibold hover:underline">
                Start a free trial
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE 65% */}
      <RightSideFeatureVisual />
    </div>
  );
};

export default LoginPage;
