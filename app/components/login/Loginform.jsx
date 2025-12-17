"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";

// --- CONFIG ---
const LOGO_CONFIG = {
  src: "/logo.svg",
  alt: "ihelp logo",
  width: 140,
  height: 50,
};

const DASHBOARD_BG = "/dashboard-bg.png";
const FEATURE_PREVIEW = "/login-img-1.jpeg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [offset, setOffset] = useState(0);
  const bgImageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!bgImageRef.current || !containerRef.current) return;

      const imgHeight = bgImageRef.current.offsetHeight;
      const screenHeight = containerRef.current.offsetHeight;
      const maxScroll = imgHeight - screenHeight;

      setOffset((prev) => {
        const newOffset = prev + e.deltaY * 0.15; // speed control
        return Math.max(0, Math.min(newOffset, maxScroll > 0 ? maxScroll : 0));
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const stopParallax = (e) => e.stopPropagation();

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row h-screen w-full bg-white overflow-hidden font-sans relative">
      {/* 🔴 LEFT SIDE: LOGIN FORM - SCROLL FIX APPLIED */}
      <div
        onWheel={stopParallax}
        className="w-full lg:w-[32%] h-full bg-white z-50 flex flex-col items-center px-8 xl:px-14 border-r border-gray-100 shadow-2xl relative overflow-y-auto custom-scrollbar">

        <div className="w-full max-w-sm py-12 flex flex-col min-h-full">
          <div className="flex flex-col items-center mb-8">
            <Image
              src={LOGO_CONFIG.src}
              alt={LOGO_CONFIG.alt}
              width={LOGO_CONFIG.width}
              height={LOGO_CONFIG.height}
              unoptimized
            />
            <h2 className="text-[32px] font-bold text-[#646c79] mt-4">
              Sign in
            </h2>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="flex items-center text-[15px] font-semibold text-[#646c79] mb-2">
                <FaEnvelope className="mr-2 text-gray-400" size={14} /> Enter
                your email <span className="text-orange-500 ml-1">*</span>
              </label>
              <input
                type="email"
                defaultValue="tenant1@ihelpkl.com"
                className="w-full px-4 py-2.5 border border-gray-400 rounded-sm outline-none text-[15px] text-gray-700 focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="flex items-center text-[15px] font-semibold text-[#646c79] mb-2">
                <FaLock className="mr-2 text-gray-400" size={14} /> Enter your
                password <span className="text-orange-500 ml-1">*</span>
              </label>
              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue=".........."
                  className="w-full px-4 py-2.5 border border-gray-400 rounded-l-sm outline-none text-[15px] text-gray-700 border-r-0"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-black text-white px-4 flex items-center justify-center rounded-r-sm hover:bg-gray-800 transition-colors">
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[14px] text-[#646c79]">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />{" "}
                Remember me
              </label>
              <a href="#" className="text-[#e68a3e] font-bold hover:underline">
                Forgot password
              </a>
            </div>

            <p className="text-[11px] text-[#646c79] text-center leading-relaxed">
              By signing up, you agree to the{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and acknowledge our{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>

            <button className="w-full py-3 bg-[#e68a3e] hover:bg-[#d47930] text-white font-bold rounded-md shadow-md text-lg transition-all uppercase tracking-wide">
              Sign in
            </button>

            <button className="w-full flex items-center justify-center py-2.5 border border-gray-200 rounded-md text-gray-700 font-bold text-[15px] shadow-sm hover:bg-gray-50 transition-all">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="google"
                className="w-5 h-5 mr-3"
              />{" "}
              Sign in with Google
            </button>
          </form>

          <div className="mt-10 text-center text-[#646c79] font-bold flex-grow">
            <p className="text-[14px] mb-4">
              Do not have account?{" "}
              <Link href="/register">
                <span className="text-black font-extrabold cursor-pointer hover:underline">
                  Start a free trial
                </span>
              </Link>
            </p>
            <div className="flex justify-center space-x-6 text-[13px] mt-auto pb-4">
              <span className="hover:text-black cursor-pointer">Home</span>
              <span className="hover:text-black cursor-pointer">Privacy</span>
              <span className="hover:text-black cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🟢 RIGHT SIDE: BACKGROUND IMAGE WITH DYNAMIC LIMIT */}
      <div className="hidden lg:block relative flex-1 h-full bg-[#1a1a1a] overflow-hidden z-0">
        <div
          className="absolute w-full top-0 left-0 transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(0, ${-offset}px, 0)`,
            willChange: "transform",
          }}>
          <img
            ref={bgImageRef}
            src={DASHBOARD_BG}
            alt="Dashboard Background"
            className="w-full h-auto min-h-screen object-cover object-top opacity-40"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-12">
          <div className="pointer-events-auto w-full max-w-[700px] bg-white rounded-2xl shadow-2xl p-12 text-center animate-fadeInUp">
            <h5 className="text-[#e68a3e] font-bold text-xs uppercase tracking-widest mb-4">
              SAY GOODBYE TO MANUAL DATA ENTRY
            </h5>
            <h1 className="text-[#333] text-[36px] font-extrabold mb-4 leading-tight">
              Let your CRM work for you
            </h1>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              With our form builder, collecting customer info is effortless.
            </p>
            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-lg">
              <img
                src={FEATURE_PREVIEW}
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          body {
            overflow: hidden;
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
