import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Doctors", href: "/doctors" },
    { text: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed left-0 top-0 z-[999] w-full bg-[#f5f5f5]/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="relative flex items-center justify-between py-5 md:py-6">
          {/* لوگو */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-gradient-to-r from-[#5b8cff] to-[#3f7df1] shadow-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21s-6.5-4.35-9-8.5C1 8.5 3.5 5 7 5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 6 3.5 4 7.5-2.5 4.15-9 8.5-9 8.5z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 12h2l1-2 1 4 1-2h2"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] text-black">
              Vital+Flow
            </h2>
          </Link>

          {/* منو دسکتاپ */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-[15px] font-medium text-black hover:text-[#4f8dfd]"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* دکمه Book a call */}
          <div>
            <Link
              to="/book-call"
              className="bg-[#4f8dfd] text-white px-6 py-3 rounded-full inline-block hover:bg-[#3f7df1] transition"
            >
              Book a call
            </Link>
          </div>

          {/* موبایل منو */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border bg-white"
          >
            <span className="block h-[2px] w-5 bg-black"></span>
            <span className="block h-[2px] w-5 bg-black"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
