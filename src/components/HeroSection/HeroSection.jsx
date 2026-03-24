import React, { useState } from "react";


import { doctorImg, avatar1, avatar2, avatar3 } from "../../assets/images";
import Navbar from "../Navbar/Navbar";

export default function HeroSection() {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  return (
    <section className="w-full bg-[#f5f5f5]">
      {/* Fixed Navbar */}

      <Navbar />

      {/* Hero Content */}
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid min-h-[calc(100vh-88px)] grid-cols-1 items-center gap-8 py-6 md:gap-10 md:py-10 lg:grid-cols-[1fr_0.95fr] lg:gap-8 xl:grid-cols-[1fr_0.92fr] xl:gap-10">
          {/* Left Content */}
          <div className="max-w-[560px] lg:pr-2 xl:pr-4">
            {/* Rating */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[#f7b500]">
                <span className="text-[18px] leading-none">★</span>
                <span className="text-[18px] leading-none">★</span>
                <span className="text-[18px] leading-none">★</span>
                <span className="text-[18px] leading-none">★</span>
                <span className="text-[18px] leading-none">★</span>
              </div>

              <p className="text-[16px] font-medium text-black sm:text-[18px]">
                5.0 (980 Reviews)
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-[540px] text-[34px] font-semibold leading-[1.08] tracking-[-0.05em] text-black sm:text-[44px] md:text-[54px] lg:text-[60px] xl:text-[66px]">
              Partner in health
              <br />
              and wellness
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.8] text-[#666666] sm:text-[18px] md:text-[19px]">
              Providing advanced healthcare solutions with a compassionate touch
              for every patient.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onMouseEnter={() => setIsPrimaryHovered(true)}
                onMouseLeave={() => setIsPrimaryHovered(false)}
                className="group relative inline-flex h-[54px] items-center justify-center overflow-hidden rounded-full bg-[#4f8dfd] px-7 text-[16px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3f7df1]"
              >
                <span className="relative block min-w-[130px] text-center">
                  <span
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${isPrimaryHovered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                      }`}
                  >
                    Schedule now
                  </span>

                  <span
                    className={`block whitespace-nowrap transition-all duration-300 ${isPrimaryHovered
                      ? "-translate-y-3 opacity-0"
                      : "translate-y-0 opacity-100"
                      }`}
                  >
                    Book a call
                  </span>
                </span>
              </button>

              <button
                onMouseEnter={() => setIsVideoHovered(true)}
                onMouseLeave={() => setIsVideoHovered(false)}
                className="group inline-flex items-center gap-3 text-[16px] font-medium text-black transition-colors duration-300 hover:text-[#4f8dfd]"
              >
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#d7d7d7] bg-white transition-all duration-300 group-hover:scale-105 group-hover:border-[#4f8dfd]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5.14v13.72c0 .8.87 1.28 1.54.86l10.3-6.86a1 1 0 0 0 0-1.66L9.54 4.28A1 1 0 0 0 8 5.14Z" />
                  </svg>
                </span>

                <span className="relative inline-block min-w-[105px]">
                  <span
                    className={`absolute left-0 top-0 transition-all duration-300 ${isVideoHovered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                      }`}
                  >
                    Play Intro
                  </span>
                  <span
                    className={`inline-block transition-all duration-300 ${isVideoHovered
                      ? "-translate-y-2 opacity-0"
                      : "translate-y-0 opacity-100"
                      }`}
                  >
                    Watch Video
                  </span>
                </span>
              </button>
            </div>

            {/* Appointments */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center">
                <img
                  src={avatar1}
                  alt="Patient 1"
                  className="h-11 w-11 rounded-full border-[3px] border-[#f5f5f5] object-cover shadow-sm transition-transform duration-300 hover:scale-105"
                />
                <img
                  src={avatar2}
                  alt="Patient 2"
                  className="-ml-3 h-11 w-11 rounded-full border-[3px] border-[#f5f5f5] object-cover shadow-sm transition-transform duration-300 hover:scale-105"
                />
                <img
                  src={avatar3}
                  alt="Patient 3"
                  className="-ml-3 h-11 w-11 rounded-full border-[3px] border-[#f5f5f5] object-cover shadow-sm transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-[18px] font-medium text-black sm:text-[20px]">
                  5000+ Appointments
                </h3>
                <p className="mt-1 text-[15px] text-[#666666] sm:text-[16px]">
                  Patients booked already
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[500px] overflow-hidden rounded-[32px] sm:rounded-[38px] lg:max-w-[470px] xl:max-w-[500px]">
              <img
                src={doctorImg}
                alt="Doctor"
                className="h-[340px] w-full object-cover object-center transition-all duration-700 group-hover:scale-105 sm:h-[430px] md:h-[520px] lg:h-[560px] xl:h-[610px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/[0.04]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
