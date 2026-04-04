import React from "react";

export default function ConsultationSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* box */}
        <div className="rounded-[32px] bg-[#eef3f8] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          {/* title + review */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            <h2 className="text-[28px] font-semibold text-black sm:text-[34px] lg:text-[40px]">
              Virtual Consultation
            </h2>

            <div className="flex items-center gap-2">
              <div className="flex text-[#f4b400]">
                <span className="text-[16px]">★</span>
                <span className="text-[16px]">★</span>
                <span className="text-[16px]">★</span>
                <span className="text-[16px]">★</span>
                <span className="text-[16px]">★</span>
              </div>

              <p className="text-[15px] text-black sm:text-[16px]">
                5.0 (980 Reviews)
              </p>
            </div>
          </div>

          {/* form */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_200px] lg:gap-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-[15px] text-[#3d3d3d]">
                Name
              </label>

              <input
                type="text"
                defaultValue="Jane Smith"
                className="h-[52px] w-full rounded-[14px] bg-[#f7f7f7] px-4 text-[15px] outline-none"
              />
            </div>

            {/* Doctor */}
            <div>
              <label className="mb-2 block text-[15px] text-[#3d3d3d]">
                Doctor
              </label>

              <input
                type="text"
                defaultValue="Dr Maria Cleven"
                className="h-[52px] w-full rounded-[14px] bg-[#f7f7f7] px-4 text-[15px] outline-none"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-[15px] text-[#3d3d3d]">
                Location
              </label>

              <input
                type="text"
                defaultValue="Amsterdem"
                className="h-[52px] w-full rounded-[14px] bg-[#f7f7f7] px-4 text-[15px] outline-none"
              />
            </div>

            {/* button */}
            <div className="flex items-end">
              <button className="h-[52px] w-full rounded-full bg-[#8fb0ea] text-[16px] font-medium text-white transition hover:bg-[#7fa4e6]">
                Submit
              </button>
            </div>
          </div>

          {/* bottom text */}
          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
            <h3 className="text-[48px] font-semibold text-black sm:text-[58px] lg:text-[64px]">
              200K+
            </h3>

            <p className="max-w-[260px] text-[16px] text-[#2f2f2f] sm:text-[17px]">
              Cured satisfied patients
              <br />
              around the globe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
