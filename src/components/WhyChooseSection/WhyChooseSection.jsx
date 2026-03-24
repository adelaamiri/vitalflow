import React from "react";
// / عکس اصلی
import mainDoctorImg from "../../assets/sec3.jpg";

// آواترهای کارت
import doctor1 from "../../assets/pro1sec3.png";
import doctor2 from "../../assets/pro2sec3.png";
export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
          {/* LEFT */}
          <div className="max-w-[560px]">
            {/* Why us */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[8px] w-[8px] rounded-full bg-[#4f86f7]"></span>
              <p className="text-[14px] font-medium text-black">Why us</p>
            </div>

            {/* Title */}
            <h2 className="text-[28px] font-semibold leading-[1.25] text-black sm:text-[34px] md:text-[38px] lg:text-[42px]">
              Why choose VitalFlow for your healthcare?
            </h2>

            {/* Item 1 */}
            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#dddddd] text-[16px] font-medium">
                01
              </div>

              <div>
                <h3 className="text-[18px] font-medium text-black sm:text-[20px]">
                  Experienced Professionals
                </h3>

                <p className="mt-2 text-[15px] leading-[1.6] text-[#666666] sm:text-[16px]">
                  Our team of dedicated healthcare providers brings years of
                  experience and expertise to deliver care
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#dddddd] text-[16px] font-medium">
                02
              </div>

              <div>
                <h3 className="text-[18px] font-medium text-black sm:text-[20px]">
                  Advanced Technology
                </h3>

                <p className="mt-2 text-[15px] leading-[1.6] text-[#666666] sm:text-[16px]">
                  We utilize cutting-edge medical technology to provide accurate
                  diagnoses and effective treatments
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 rounded-full bg-[#4f86f7] px-7 py-3 text-[15px] font-medium text-white transition hover:bg-[#3f78ee]">
              Get Started
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Image */}
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={mainDoctorImg}
                  alt="doctor"
                  className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[520px]"
                />
              </div>

              {/* Floating Card */}
              <div className="relative -mt-14 w-full max-w-[300px] rounded-[22px] bg-[#f7f7f7] p-5 shadow-md lg:absolute lg:bottom-[-40px] lg:left-0">
                <h3 className="text-[18px] font-medium text-black">
                  Available Doctors
                </h3>

                <p className="text-[14px] text-[#666666]">Choose Doctors</p>

                {/* doctor 1 */}
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={doctor1}
                    alt="doctor"
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-[15px] font-medium text-black">
                      Jonathan Reed
                    </p>

                    <p className="text-[13px] text-[#8a8a8a]">
                      Gastroenterologist
                    </p>
                  </div>
                </div>

                {/* doctor 2 */}
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={doctor2}
                    alt="doctor"
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-[15px] font-medium text-black">
                      Olivia Bennett
                    </p>

                    <p className="text-[13px] text-[#8a8a8a]">Dermatologist</p>
                  </div>
                </div>

                {/* button */}
                <button className="mt-6 w-full rounded-[14px] bg-[#e9eef6] py-3 text-[15px] font-medium text-[#4f86f7]">
                  Meet Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
