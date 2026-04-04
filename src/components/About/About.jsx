import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MissionVision from "./MissionVision";
import ValuesSection from "./ValuesSection";
import TeamSection from "./TeamSection";
import ContactFooterSection from "../ContactFooterSection/ContactFooterSection";
import { doctor1, doctor2, doctor3 } from "../../assets/images";

export default function About() {
  const navigate = useNavigate();

  const stats = [
    { id: "satisfaction", label: "Satisfaction rate", value: 98, suffix: "%" },
    { id: "experience", label: "Years of experience", value: 30, suffix: "+" },
    { id: "patients", label: "Patients Treated", value: 1000, suffix: "" },
    { id: "doctors", label: "Expert Doctors", value: 80, suffix: "+" },
  ];

  const [count, setCount] = useState({
    satisfaction: 0,
    experience: 0,
    patients: 0,
    doctors: 0,
  });

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += 1;

      const newCount = {};
      stats.forEach((stat) => {
        newCount[stat.id] = Math.min(
          Math.floor((start / 100) * stat.value),
          stat.value,
        );
      });

      setCount(newCount);

      if (start >= 100) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const doctors = [doctor1, doctor2, doctor3];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-[#f3f3f3] pt-[120px] pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-base text-gray-500 mb-3">• About us</p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
            A modern dental care <br /> home for families
          </h1>

          {/* Button */}
          <div className="mt-6">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Images */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[20px] group h-[300px] sm:h-[340px]"
              >
                <img
                  src={img}
                  alt={`Doctor ${index + 1}`}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.id}>
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500">
                    {count[stat.id]}
                    {stat.suffix}
                  </h3>
                  <p className="text-gray-500 text-base mt-2">{stat.label}</p>
                </div>

                {index !== stats.length - 1 && (
                  <span className="hidden sm:block text-gray-400 text-xl">
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <ContactFooterSection />
    </>
  );
}
