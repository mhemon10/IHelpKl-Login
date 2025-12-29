"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaEye,
  FaEyeSlash,
  FaBuilding,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import Link from "next/link";

// Static Export এর জন্য Image Optimization ডিজেবল করতে হয় অথবা unoptimized প্রপ ব্যবহার করতে হয়।
const LOGO_CONFIG = { src: "/logo.svg", alt: "logo", width: 140, height: 50 };
const MODAL_IMAGE = "/signup-main.jpeg";

const FLOATING_IMAGES = [
  "/assets/img-1.webp",
  "/assets/img-2.webp",
  "/assets/img-3.webp",
  "/assets/img-4.webp",
  "/assets/img-5.webp",
  "/assets/img-6.webp",
  "/assets/img-7.webp",
  "/assets/img-8.webp",
  "/assets/img-9.webp",
  "/assets/img-10.webp",
];

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [items, setItems] = useState([]);

  // Floating items setup
  useEffect(() => {
    const tempItems = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      src: FLOATING_IMAGES[i % FLOATING_IMAGES.length],
      size: Math.random() * 60 + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: Math.random() * 0.05 + 0.02, // স্পিড কিছুটা কমানো হয়েছে স্মুথনেসের জন্য
      speedY: Math.random() * 0.05 + 0.02,
      rotate: Math.random() * 30 - 15,
      delay: Math.random() * 5,
    }));
    setItems(tempItems);
  }, []);

  // Animation loop with requestAnimationFrame
  useEffect(() => {
    if (items.length === 0) return;

    let animationFrame;
    const animate = () => {
      setItems((prev) =>
        prev.map((item) => {
          let newX = item.x + item.speedX;
          let newY = item.y + item.speedY;

          if (newX > 110) newX = -10;
          if (newY > 110) newY = -10;

          return { ...item, x: newX, y: newY };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [items.length > 0]);

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-white font-sans overflow-hidden">
      {/* LEFT SECTION */}
      <div className="hidden lg:block relative w-[68%] h-full bg-[#1a1a1a] overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-orange-600/20 blur-[130px]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-[#e68a3e]/20 blur-[130px]"></div>

        {items.map((item) => (
          <div
            key={item.id}
            className="absolute will-change-transform pointer-events-none"
            style={{
              top: `${item.y}%`,
              left: `${item.x}%`,
              transform: `rotate(${item.rotate}deg)`,
            }}>
            <div
              className="animate-float"
              style={{ animationDelay: `${item.delay}s` }}>
              <Image
                src={item.src}
                alt="floating"
                width={item.size}
                height={item.size}
                className="opacity-40 object-contain"
                unoptimized // স্ট্যাটিক এক্সপোর্ট এরর সলভ করতে এটি যোগ করা হয়েছে
              />
            </div>
          </div>
        ))}

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
            <div className="border border-gray-100 rounded-lg overflow-hidden shadow-md bg-gray-50">
              <img
                src={MODAL_IMAGE}
                alt="Feature Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION: FORM */}
      <div className="w-full lg:w-[32%] h-full bg-white flex flex-col items-center overflow-y-auto px-6 sm:px-10 border-l border-gray-100 shadow-2xl z-50 relative custom-scrollbar">
        <div className="w-full max-w-sm py-12 flex flex-col min-h-full">
          <div className="flex flex-col items-center mb-8">
            <Image
              src={LOGO_CONFIG.src}
              alt={LOGO_CONFIG.alt}
              width={LOGO_CONFIG.width}
              height={LOGO_CONFIG.height}
              unoptimized
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mt-6 text-center">
              Register yourself
            </h2>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <InputField
              label="Enter your company"
              icon={<FaBuilding />}
              type="text"
              placeholder="Company name"
            />
            <InputField
              label="Enter your email"
              icon={<FaEnvelope />}
              type="email"
              placeholder="email@example.com"
            />

            <div>
              <label className="flex items-center text-sm font-bold text-gray-600 mb-2">
                <FaLock className="mr-2 text-gray-400" /> Enter your password{" "}
                <span className="text-orange-500 ml-1">*</span>
              </label>
              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-l-md focus:ring-1 focus:ring-orange-400 outline-none text-sm border-r-0"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-black text-white px-3 flex items-center justify-center rounded-r-md transition-colors hover:bg-gray-800">
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-[#646c79] text-center leading-relaxed px-2">
              By signing up, you agree to the{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and acknowledge our{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-[#e68a3e] hover:bg-[#d47930] text-white font-bold rounded-md shadow-md transition-all text-lg uppercase tracking-wide active:scale-95">
              Sign up
            </button>
          </form>

          <div className="mt-10 text-center flex-grow flex flex-col justify-between">
            <p className="text-sm font-bold text-gray-500">
              <Link href="/">
                <span className="hover:text-black hover:underline cursor-pointer">
                  Sign in
                </span>
              </Link>{" "}
              /{" "}
              <span className="hover:text-black hover:underline cursor-pointer">
                Forgot password
              </span>
            </p>

            <div className="flex justify-center space-x-6 text-[13px] text-gray-500 font-bold pt-10 pb-4">
              <span className="hover:text-black cursor-pointer">Home</span>
              <span className="hover:text-black cursor-pointer">Privacy</span>
              <span className="hover:text-black cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function InputField({ label, icon, ...props }) {
  return (
    <div className="w-full">
      <label className="flex items-center text-sm font-bold text-gray-600 mb-2">
        <span className="mr-2 text-gray-400">{icon}</span> {label}{" "}
        <span className="text-orange-500 ml-1">*</span>
      </label>
      <input
        {...props}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 outline-none text-sm"
        required
      />
    </div>
  );
}
