"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa"; // Using react-icons for consistency

// --- CONFIG ---
const LOGO_CONFIG = {
  src: "/logo.svg",
  alt: "Company Logo",
  width: 170,
  height: 170,
};

const RIGHT_IMAGE_CONFIG = {
  src: "/login-img-1.jpeg",
  alt: "CRM Feature Visual",
  width: 800,
  height: 600,
};

// MAIN COMPONENT
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt...");
  };

  // --- Icons ---
  const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 533.5 544.3">
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
    // Replaced custom SVG with FaFacebook for a cleaner implementation if using react-icons
    <FaFacebook className="w-5 h-5 mr-3 text-blue-600" />
   
  );

  // --- RIGHT SIDE FEATURE VISUAL ---
  const RightSideFeatureVisual = () => (
    <div
      // ⚠️ Added h-full to take full vertical space
      className="hidden lg:flex w-2/3 relative animate-fadeInRight h-full overflow-hidden"
      style={{
        backgroundImage: "url('/sign-up.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Removed min-height: 100vh as h-full is sufficient inside h-screen parent
      }}>
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Added py-10 for better vertical spacing and m-auto for centering */}
      <div className="relative z-10 bg-white p-6 md:p-10 rounded-xl shadow-xl max-w-2xl w-full text-center m-auto">
        <h5 className="text-sm font-semibold text-orange-500 mb-2 tracking-wider uppercase">
          SAY GOODBYE TO MANUAL DATA ENTRY
        </h5>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Let your CRM work for you
        </h2>
        <p className="text-gray-600 max-w-sm mx-auto mb-10">
          With our form builder, collecting customer info is effortless.
        </p>
        <div className="flex justify-center">
          <Image
            src={RIGHT_IMAGE_CONFIG.src}
            alt={RIGHT_IMAGE_CONFIG.alt}
            width={RIGHT_IMAGE_CONFIG.width}
            height={RIGHT_IMAGE_CONFIG.height}
            className="rounded-lg h-auto w-full max-w-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );

  return (
    // ⚠️ CRITICAL CHANGE: Enforcing h-screen and w-screen to take up the entire viewport
    <div className="flex items-stretch h-screen w-screen bg-white overflow-hidden">
      <style jsx global>{`
        /* ⚠️ CRITICAL GLOBAL STYLES TO ENSURE NO SCROLLING */
        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden; /* Hides global scrollbars */
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

      {/* LEFT SIDE LOGIN FORM */}
      {/* ⚠️ Added overflow-y-auto so the content scrolls INSIDE the column on small screens */}
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-10 py-16 animate-fadeInLeft overflow-y-auto">
        {/* Added margin to help center content vertically if scroll isn't needed */}
        <div className="max-w-md w-full my-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src={LOGO_CONFIG.src}
              alt={LOGO_CONFIG.alt}
              width={LOGO_CONFIG.width}
              height={LOGO_CONFIG.height}
              unoptimized
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              Login
            </button>

            {/* Social Login */}
            <div className="flex flex-col space-y-3 mt-4">
              <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <GoogleIcon /> Sign in with Google
              </button>
              <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <FacebookIcon /> Sign in with Facebook
              </button>
            </div>

            {/* Sign Up link */}
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

      {/* RIGHT SIDE FEATURE VISUAL */}
      <RightSideFeatureVisual />
    </div>
  );
};

export default LoginPage;
