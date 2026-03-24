import { useState } from "react";
import DynamicButton from "../DynamicButton/DynamicButton";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Array of objects containing link text and href
    const navLinks = [
        { text: "About", href: "#" },
        { text: "Services", href: "#" },
        { text: "Doctors", href: "#" },
        { text: "Blog", href: "#" },
    ];

    return (
        <div>
            <header className="fixed left-0 top-0 z-[999] w-full bg-[#f5f5f5]/90 backdrop-blur-md">
                <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
                    <div className="relative flex items-center justify-between py-5 md:py-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#4f8dfd] shadow-sm transition-transform duration-300 hover:scale-105 sm:h-11 sm:w-11">
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

                            <h2 className="text-[20px] font-medium tracking-[-0.03em] text-black sm:text-[24px]">
                                Vital+Flow
                            </h2>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden items-center gap-8 lg:flex">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-[15px] font-medium text-black transition-colors duration-300 hover:text-[#4f8dfd]"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </nav>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            <DynamicButton
                                text="Book a call"
                                bgColor="#4f8dfd"
                                textColor="white"  // Set text color to white
                                hoverColor="#3f7df1"
                                size="sm"
                            />

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-[#dcdcdc] bg-white lg:hidden"
                                aria-label="Open menu"
                            >
                                <span className="block h-[2px] w-5 rounded-full bg-black"></span>
                                <span className="block h-[2px] w-5 rounded-full bg-black"></span>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        <div
                            className={`absolute right-0 top-full z-50 mt-2 w-[200px] overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-white shadow-md transition-all duration-300 lg:hidden ${isMenuOpen
                                ? "visible translate-y-0 opacity-100"
                                : "invisible -translate-y-2 opacity-0"
                                }`}
                        >
                            <div className="flex flex-col p-4">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="rounded-xl px-3 py-2 text-[15px] text-black transition-colors duration-300 hover:bg-[#f3f6ff] hover:text-[#4f8dfd]"
                                    >
                                        {link.text}
                                    </a>
                                ))}

                                <button className="mt-3 rounded-full bg-[#4f8dfd] px-4 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#3f7df1]">
                                    Book a call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Spacer for fixed navbar */}
            <div className="h-[84px]"></div>
        </div>
    );
}