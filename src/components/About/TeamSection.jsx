import React from "react";
import {
  doctor7,
  doctor8,
  doctor9,
  doctor10,
  doctor11,
  doctor12,
} from "../../assets/images";

export default function TeamSection() {
  const team = [
    {
      name: "Jonathan Reed",
      role: "Gastroenterologist",
      image: doctor7,
    },
    {
      name: "Olivia Bennett",
      role: "Dermatologist",
      image: doctor8,
    },
    {
      name: "David Harris",
      role: "Pediatrician",
      image: doctor9,
    },
    {
      name: "Emily Rogers",
      role: "Orthopedic",
      image: doctor10,
    },
    {
      name: "Michael Carter",
      role: "Cardiologist",
      image: doctor11,
    },
    {
      name: "Sarah Thompson",
      role: "Neurologist",
      image: doctor12,
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f7] py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Top Text */}
        <div className="text-center mb-14">
          <p className="text-sm text-blue-500 mb-2">• Team</p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
            Meet our dedicated and <br /> experienced team of experts
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index}>
              {/* Image Card */}
              <div className="rounded-[24px] overflow-hidden bg-[#e9ecef] group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                </div>

                {/* Arrow Button */}
                <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
