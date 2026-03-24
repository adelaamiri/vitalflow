import React from "react";

// icons
import icon1 from "../../assets/feature1.svg";
import icon2 from "../../assets/feature2.svg";
import icon3 from "../../assets/feature3.svg";
import icon4 from "../../assets/feature4.svg";
import icon5 from "../../assets/feature5.svg";
import icon6 from "../../assets/feature6.svg";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: icon1,
      title: "Easy appointment",
      description:
        "Schedule your appointments quickly with our simple and efficient booking system.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Personalized plans",
      description:
        "Receive tailored care plans designed to meet your unique health needs and goals.",
    },
    {
      id: 3,
      icon: icon3,
      title: "24/7 consultations",
      description:
        "Access expert medical advice anytime through secure and reliable virtual visits.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Medical technology",
      description:
        "Experience modern healthcare with innovative tools and state-of-the-art equipment.",
    },
    {
      id: 5,
      icon: icon5,
      title: "Patient records",
      description:
        "Stay organized with secure, easy access to your medical records whenever needed.",
    },
    {
      id: 6,
      icon: icon6,
      title: "Care network",
      description:
        "Connect with top specialists and facilities to ensure complete healthcare coverage.",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Top Label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[8px] w-[8px] rounded-full bg-[#4f86f7]"></span>
          <p className="text-[14px] font-medium text-black sm:text-[15px]">
            Features
          </p>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-[700px] text-center text-[28px] font-semibold leading-[1.18] tracking-[-0.04em] text-black sm:text-[36px] md:text-[42px] lg:text-[48px]">
          Innovative solutions to
          <br />
          enhance medical service
        </h2>

        {/* Grid Box */}
        <div className="mx-auto mt-10 max-w-[990px] overflow-hidden border border-[#dddddd] sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => {
              const isLastMobile = index === features.length - 1;
              const isLastTabletRow = index >= features.length - 2;
              const isLastDesktopRow = index >= features.length - 3;

              return (
                <div
                  key={item.id}
                  className={`
                    border-[#dddddd] px-6 py-10 text-center transition-all duration-300
                    sm:px-7 sm:py-12 lg:px-8 lg:py-14
                    border-b
                    sm:border-r
                    lg:border-r
                    sm:[&:nth-child(2n)]:border-r-0
                    lg:[&:nth-child(2n)]:border-r
                    lg:[&:nth-child(3n)]:border-r-0
                    ${isLastMobile ? "border-b-0" : ""}
                    ${isLastTabletRow ? "sm:border-b-0" : ""}
                    ${isLastDesktopRow ? "lg:border-b-0" : ""}
                  `}
                >
                  {/* Icon Circle */}
                  <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#eef3f8] sm:h-[78px] sm:w-[78px]">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-[30px] w-[30px] object-contain sm:h-[34px] sm:w-[34px]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-[18px] font-medium tracking-[-0.03em] text-black sm:text-[20px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-4 max-w-[250px] text-[15px] leading-[1.7] text-[#666666] sm:max-w-[270px] sm:text-[16px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
