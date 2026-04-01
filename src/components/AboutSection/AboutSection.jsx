import React from "react";
import { aboutImg } from "../../assets/images";
export default function AboutSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-12 xl:gap-16">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[670px] overflow-hidden rounded-[28px] sm:rounded-[34px]">
              <img
                src={aboutImg}
                alt="Healthcare team"
                className="h-[320px] w-full object-cover object-center sm:h-[430px] md:h-[520px] lg:h-[620px]"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-[620px]">
            {/* Top label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[8px] w-[8px] rounded-full bg-[#4f86f7]"></span>
              <p className="text-[15px] font-medium text-black">About us</p>
            </div>

            {/* Heading */}
            <h2 className="max-w-[560px] text-[30px] font-semibold leading-[1.2] tracking-[-0.04em] text-black sm:text-[38px] md:text-[44px] lg:text-[52px]">
              Vision for a healthier and brighter tomorrow
            </h2>

            {/* Mission */}
            <div className="mt-8 flex items-start gap-4 sm:mt-10 sm:gap-5">
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#f1f3f5] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#4f86f7]"
                >
                  <rect
                    x="4.5"
                    y="4.5"
                    width="15"
                    height="15"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M8.5 12L10.8 14.3L15.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-[20px] font-medium text-black sm:text-[22px]">
                  Our Mission
                </h3>
                <p className="mt-2 max-w-[480px] text-[16px] leading-[1.7] text-[#666666] sm:text-[17px]">
                  Our mission is to deliver compassionate and high-quality
                  healthcare services.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="mt-7 flex items-start gap-4 sm:mt-8 sm:gap-5">
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#f1f3f5] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#4f86f7]"
                >
                  <path d="M12 2.8L14.3 7.5L19.5 8.2L15.7 12L16.6 17.2L12 14.8L7.4 17.2L8.3 12L4.5 8.2L9.7 7.5L12 2.8Z" />
                </svg>
              </div>

              <div>
                <h3 className="text-[20px] font-medium text-black sm:text-[22px]">
                  Our Vision
                </h3>
                <p className="mt-2 max-w-[500px] text-[16px] leading-[1.7] text-[#666666] sm:text-[17px]">
                  Leading healthcare provider, recognized for innovative
                  practices and care.
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-9 rounded-full bg-[#4f86f7] px-8 py-3.5 text-[16px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3f78ee] sm:mt-10 sm:px-9 sm:py-4">
              What we do
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
