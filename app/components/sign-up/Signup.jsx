"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaEye,
  FaEyeSlash,
  FaBuilding,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import Link from "next/link";

// --- CONFIG ---
const LOGO_CONFIG = {
  src: "/logo.svg",
  alt: "ihelp logo",
  width: 140,
  height: 50,
};

const DASHBOARD_PREVIEW = "/dashboard-bg.png";
const MODAL_IMAGE = "/signup-main.jpeg";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [offset, setOffset] = useState(0);

  // স্লো স্ক্রলিং লজিক
  useEffect(() => {
    const handleWheel = (e) => {
      setOffset((prev) => {
        const newOffset = prev + e.deltaY * 0.15; // ০.১৫ স্লো স্পিড
        return Math.max(0, Math.min(newOffset, 800)); // লিমিট
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans relative">
      {/* 🟢 LEFT SECTION: SLOW SCROLLING BACKGROUND (Fixed Container) */}
      <div className="hidden lg:block relative w-[68%] h-full bg-[#1a1a1a] overflow-hidden z-0">
        {/* Background Image Wrapper - Full Height and No Cutting */}
        <div
          className="absolute w-full h-[200vh] top-0 left-0 transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(0, ${-offset}px, 0)`,
            willChange: "transform",
          }}>
          <img
            src={DASHBOARD_PREVIEW}
            alt="Dashboard Background"
            className="w-full h-full object-cover object-top opacity-30"
          />
        </div>

        {/* Sticky Modal Card - এটি স্থির থাকবে */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-12">
          <div className="pointer-events-auto w-full max-w-2xl bg-white rounded-xl shadow-2xl p-10 text-center animate-fadeInUp">
            <h2 className="text-[#e68a3e] font-bold text-lg uppercase tracking-widest mb-3">
              Grow your pipeline, not your expenses
            </h2>
            <h1 className="text-[#333] text-4xl font-extrabold mb-4 leading-tight">
              Explore everything without credit card
            </h1>
            <p className="text-gray-500 text-lg mb-8">
              Simple to use. Easy to afford
            </p>

            <div className="border border-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src={MODAL_IMAGE}
                alt="Feature Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🔴 RIGHT SECTION: REGISTRATION FORM - FIXED */}
      <div className="w-full lg:w-[32%] h-full bg-white flex flex-col items-center justify-center overflow-y-auto px-10 border-l border-gray-100 shadow-2xl z-50">
        <div className="w-full max-w-sm py-8">
          <div className="flex flex-col items-center mb-8">
            <Image
              src={LOGO_CONFIG.src}
              alt={LOGO_CONFIG.alt}
              width={LOGO_CONFIG.width}
              height={LOGO_CONFIG.height}
              unoptimized
            />
            <h2 className="text-3xl font-bold text-gray-700 mt-6">
              Register yourself
            </h2>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="flex items-center text-sm font-bold text-gray-600 mb-2">
                <FaBuilding className="mr-2 text-gray-400" /> Enter your company{" "}
                <span className="text-orange-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-orange-400 outline-none text-sm"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-bold text-gray-600 mb-2">
                <FaEnvelope className="mr-2 text-gray-400" /> Enter your email{" "}
                <span className="text-orange-500 ml-1">*</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-orange-400 outline-none text-sm"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-bold text-gray-600 mb-2">
                <FaLock className="mr-2 text-gray-400" /> Enter your password{" "}
                <span className="text-orange-500 ml-1">*</span>
              </label>
              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-l-sm focus:ring-1 focus:ring-orange-400 outline-none text-sm border-r-0"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-black text-white px-3 flex items-center justify-center rounded-r-sm hover:bg-gray-800 transition-colors">
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 text-center leading-relaxed">
              By signing up, you agree to our{" "}
              <span className="text-black font-bold underline cursor-pointer">
                Terms
              </span>{" "}
              and{" "}
              <span className="text-black font-bold underline cursor-pointer">
                Privacy
              </span>
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-[#e68a3e] hover:bg-[#d47930] text-white font-bold rounded-md shadow-md transition-all text-lg uppercase tracking-wide">
              Sign up
            </button>

            <button className="w-full flex items-center justify-center py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700 font-bold text-sm shadow-sm">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="G"
                className="w-5 h-5 mr-3"
              />
              Sign in with Google
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-gray-500 mb-6">
              <Link href="/">
                <span className="hover:text-black hover:underline">
                  Sign in
                </span>
              </Link>
              {" / "}
              <span className="hover:text-black hover:underline cursor-pointer">
                Forgot password
              </span>
            </p>
            <div className="flex justify-center space-x-6 text-[13px] text-gray-500 font-bold">
              <span className="hover:text-black cursor-pointer">Home</span>
              <span className="hover:text-black cursor-pointer">Privacy</span>
              <span className="hover:text-black cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          overflow: hidden;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
