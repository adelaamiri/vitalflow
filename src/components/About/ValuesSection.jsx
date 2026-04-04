// src/components/About/ValuesSection.jsx
import React from "react";
import { FaRegEdit, FaMedal, FaTimes } from "react-icons/fa";

export default function ValuesSection() {
  const values = [
    {
      icon: <FaRegEdit />,
      title: "Compassion",
      text: "We prioritize empathy and understanding, ensuring every patient feels valued, respected, and cared for in their healthcare journey.",
    },
    {
      icon: <FaMedal />,
      title: "Excellence",
      text: "We are committed to delivering the highest standards of quality in every aspect of our services, striving for continuous improvement.",
    },
    {
      icon: <FaTimes />,
      title: "Integrity",
      text: "We uphold honesty and transparency in all interactions, building trust with patients, families, and the community through ethical practices.",
    },
  ];

  return (
    <section className="w-full bg-[#f2f4f7] py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-sm text-[#4f8dfd] mb-3">• Our Values</p>

          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-black leading-snug">
            Core principles guiding our <br className="hidden sm:block" />
            healthcare mission
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#5b8cff] to-[#3f7df1] text-white p-8 rounded-[24px] transition duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-xl mb-6 text-white text-xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-semibold mb-4">{item.title}</h3>

              {/* Text */}
              <p className="text-[15px] leading-[1.7] text-white/90">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
