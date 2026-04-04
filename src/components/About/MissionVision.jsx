import React from "react";
import { doctor4, doctor5, doctor6 } from "../../assets/images";

export default function MissionVision() {
  const missionPoints = [
    {
      title: "Compassionate care",
      desc: "Our mission is to provide personalized and empathetic healthcare for individual.",
    },
    {
      title: "Excellence in service",
      desc: "We strive to deliver high-quality, reliable, and innovative medical solutions.",
    },
  ];

  const visionPoints = [
    "Innovating for better healthcare futures",
    "Leading with patient-focused care solutions",
    "Building healthier and stronger communities",
    "Transforming lives through medical excellence",
  ];

  return (
    <section className="w-full bg-[#f3f3f3] py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 space-y-24">
        {/* ================== MISSION ================== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Small Image */}
            <div className="absolute left-0 bottom-0 w-[140px] h-[200px] sm:w-[180px] sm:h-[240px] rounded-full overflow-hidden shadow-md">
              <img
                src={doctor5}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Big Image */}
            <div className="w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] rounded-full overflow-hidden">
              <img
                src={doctor4}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm text-gray-500 mb-3">• Our Mission</p>

            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-snug">
              Transforming lives with <br /> medical solutions
            </h2>

            <div className="mt-8 space-y-6">
              {missionPoints.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    ✦
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
              Book a call
            </button>
          </div>
        </div>

        {/* ================== VISION ================== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-sm text-gray-500 mb-3">• Our Vision</p>

            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-snug">
              Passionate about creating <br /> healthier, happier lives
            </h2>

            <ul className="mt-8 space-y-4">
              {visionPoints.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <span className="w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
              Book a call
            </button>
          </div>

          {/* Image */}
          <div className="w-full h-[320px] sm:h-[420px] rounded-[30px] overflow-hidden">
            <img src={doctor6} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
