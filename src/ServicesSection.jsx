import React, { useEffect, useRef, useState } from "react";

// آیکن ها
import icon1 from "../src/assets/service1.svg";
import icon2 from "../src/assets/service2.svg";
import icon3 from "../src/assets/service3.svg";
import icon4 from "../src/assets/service4.svg";
import icon5 from "../src/assets/service5.svg";
import icon6 from "../src/assets/service6.svg";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: icon1,
      title: "Pediatrics",
      description:
        "Monitor your child's growth and development closely to ensure their health at every stage.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Orthopedics",
      description:
        "Receive care for bone and muscle health with advanced treatments tailored to your needs.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Gastroenterology",
      description:
        "Comprehensive care for digestive health to address issues with precision and personalized attention.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Neurology",
      description:
        "Expert heart care and preventive solutions designed to support your long-term wellness.",
    },
    {
      id: 5,
      icon: icon5,
      title: "Cardiology",
      description:
        "Personalized neurological care focused on accurate diagnosis and modern treatment plans.",
    },
    {
      id: 6,
      icon: icon6,
      title: "Genral Care",
      description:
        "Advanced skin care services for healthy skin, confidence, and lasting comfort.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f5f5f5] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* top label */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-[8px] w-[8px] rounded-full bg-[#4f86f7]"></span>
          <p className="text-[14px] font-medium text-black sm:text-[15px]">
            Services
          </p>
        </div>

        {/* heading */}
        <h2 className="mx-auto max-w-[760px] text-center text-[28px] font-semibold leading-[1.2] tracking-[-0.04em] text-black sm:text-[36px] md:text-[42px] lg:text-[52px]">
          Personalized solutions for better oral health
        </h2>

        {/* cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-[28px] bg-[#edf2f7] px-6 py-8 transition-all duration-700 ease-out sm:px-7 sm:py-9 lg:px-8 lg:py-10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              {/* icon */}
              <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full bg-[#e7edf6] sm:h-[92px] sm:w-[92px]">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-[34px] w-[34px] object-contain sm:h-[38px] sm:w-[38px]"
                />
              </div>

              {/* title */}
              <h3 className="mt-8 text-center text-[18px] font-medium tracking-[-0.03em] text-black sm:text-[20px]">
                {service.title}
              </h3>

              {/* description */}
              <p className="mx-auto mt-4 max-w-[300px] text-center text-[15px] leading-[1.7] text-[#666666] sm:text-[16px]">
                {service.description}
              </p>

              {/* link */}
              <button className="group mx-auto mt-8 flex items-center gap-2 text-[16px] font-medium text-black transition-colors duration-300 hover:text-[#4f86f7]">
                <span>View Services</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
