import React from "react";

const footerLinks = [
  {
    title: "Static pages",
    links: ["Home", "About", "Contact", "404"],
  },
  {
    title: "CMS Pages",
    links: ["Services", "Doctors", "Careers", "Blogs"],
  },
  {
    title: "Detail pages",
    links: ["Service (CMS)", "Doctor (CMS)", "Career (CMS)", "Blogs (CMS)"],
  },
  {
    title: "Follow us",
    links: ["Linkedin", "Facebook", "Twitter", "Youtube"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1380px] px-5 py-12 sm:px-8 sm:py-14 lg:px-14 lg:py-16 xl:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* LEFT */}
          <div className="max-w-[360px]">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#4f86f7] shadow-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20.5s-7-4.35-7-10a4 4 0 0 1 7-2.35A4 4 0 0 1 19 10.5c0 5.65-7 10-7 10Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7.8v4.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.8 10h4.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="text-[24px] font-medium tracking-[-0.03em] text-black">
                Vital+Flow
              </h3>
            </div>

            {/* Text */}
            <p className="mt-7 max-w-[320px] text-[17px] leading-[1.7] text-[#666666] sm:text-[18px]">
              Creative healthcare template to launch your site quick and easily
            </p>

            {/* Button */}
            <button className="mt-8 rounded-full bg-[#4f86f7] px-7 py-3 text-[16px] font-medium text-white transition hover:bg-[#3f78ee]">
              Book a call
            </button>
          </div>

          {/* RIGHT */}
          <div>
            {/* Subscribe */}
            <div>
              <h3 className="text-[24px] font-medium text-black sm:text-[26px]">
                Stay up to date
              </h3>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="h-[58px] w-full rounded-[16px] bg-[#edf2f7] px-6 text-[16px] outline-none placeholder:text-[#7a7a7a] sm:max-w-[420px]"
                />

                <button className="h-[58px] rounded-[16px] bg-[#4f86f7] px-8 text-[18px] font-medium text-white transition hover:bg-[#3f78ee]">
                  Subscribe
                </button>
              </div>

              <p className="mt-4 text-[15px] text-[#666666]">
                by subscribing you will agree to privacy and policy
              </p>
            </div>

            {/* Links */}
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h4 className="text-[18px] font-medium text-black">
                    {section.title}
                  </h4>

                  <ul className="mt-5 space-y-3 text-[16px] text-[#666666]">
                    {section.links.map((link, i) => (
                      <li
                        key={i}
                        className="cursor-pointer hover:text-black transition"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
