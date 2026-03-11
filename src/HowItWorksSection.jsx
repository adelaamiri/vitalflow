import React from "react";

// images
import stepImg1 from "../src/assets/step1.webp";
import stepImg2 from "../src/assets/step2.jpg";
import stepImg3 from "../src/assets/step3.webp";

export default function HowItWorksSection() {
  const steps = [
    {
      id: "01",
      title: "Share your preferences",
      description:
        "Tell us about your unique needs and preferences to help us create a personalized plan for your care.",
      image: stepImg1,
      imagePosition: "bottom",
    },
    {
      id: "02",
      title: "Customized solutions",
      description:
        "We analyze your requirements and craft tailored solutions designed specifically for your goals.",
      image: stepImg2,
      imagePosition: "middle",
    },
    {
      id: "03",
      title: "Achieve your vision",
      description:
        "Experience seamless results as we bring your perfect vision to life with precision and care.",
      image: stepImg3,
      imagePosition: "bottom",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* top label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[8px] w-[8px] rounded-full bg-[#4f86f7]"></span>
          <p className="text-[14px] font-medium text-black sm:text-[15px]">
            How it works
          </p>
        </div>

        {/* heading */}
        <h2 className="mx-auto max-w-[780px] text-center text-[30px] font-semibold leading-[1.12] tracking-[-0.04em] text-black sm:text-[38px] md:text-[46px] lg:text-[58px]">
          Step-by-step process for
          <br />
          seamless user experience
        </h2>

        {/* cards / columns */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex h-full flex-col ${
                index === 1 ? "lg:pt-0" : "lg:pt-0"
              }`}
            >
              {/* number */}
              <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4f86f7] text-[18px] font-medium text-white">
                {step.id}
              </div>

              {/* title */}
              <h3 className="text-[22px] font-medium tracking-[-0.03em] text-black sm:text-[24px]">
                {step.title}
              </h3>

              {/* top description for step 1 and 3 */}
              {(step.id === "01" || step.id === "03") && (
                <p className="mt-5 max-w-[360px] text-[16px] leading-[1.7] text-[#666666] sm:text-[17px]">
                  {step.description}
                </p>
              )}

              {/* image */}
              <div
                className={`overflow-hidden rounded-[24px] sm:rounded-[26px] ${
                  step.id === "01" ? "mt-6" : step.id === "02" ? "mt-6" : "mt-6"
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className={`w-full object-cover object-center transition-transform duration-700 hover:scale-105 ${
                    step.id === "01"
                      ? "h-[250px] sm:h-[280px] lg:h-[300px]"
                      : step.id === "02"
                        ? "h-[250px] sm:h-[280px] lg:h-[270px]"
                        : "h-[250px] sm:h-[280px] lg:h-[270px]"
                  }`}
                />
              </div>

              {/* bottom description only for step 2 */}
              {step.id === "02" && (
                <p className="mt-5 max-w-[360px] text-[16px] leading-[1.7] text-[#666666] sm:text-[17px]">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
