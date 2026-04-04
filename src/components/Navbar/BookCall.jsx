import React, { useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export default function BookCall() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5]">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f5f5f5]/90 backdrop-blur-md border-b">
        <div className="flex items-center justify-between px-6 lg:px-20 py-6">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#4f8dfd]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M12 20.5s-7-4.35-7-10a4 4 0 0 1 7-2.35A4 4 0 0 1 19 10.5c0 5.65-7 10-7 10Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            <h2 className="text-[22px] font-medium hover:text-[#4f8dfd] transition">
              Vital+Flow
            </h2>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-[16px]">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Doctors</a>
            <a href="#">Blog</a>
          </nav>

          <button className="bg-[#4f8dfd] text-white px-6 py-3 rounded-full">
            Book a call
          </button>
        </div>
      </header>

      <div className="h-[110px]"></div>

      {/* HERO */}
      <section data-aos="fade-up" className="text-center mt-12 px-6">
        <p className="text-[#4f8dfd] text-sm mb-4">• Contact us</p>

        <h1 className="text-[32px] md:text-[50px] lg:text-[64px] font-semibold leading-[1.1]">
          Your connection to better
          <br />
          care starts here
        </h1>

        <button className="mt-8 bg-[#4f8dfd] text-white px-8 py-3 rounded-full hover:scale-105 transition">
          What we do
        </button>
      </section>

      {/* CONTACT CARD */}
      <section data-aos="zoom-in" className="max-w-[1200px] mx-auto mt-20 px-6">
        <div className="grid lg:grid-cols-2 bg-white rounded-[30px] overflow-hidden shadow-sm">
          {/* FORM */}
          <div data-aos="fade-right" className="p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className="text-[15px] text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Carter"
                  className="w-full border-b border-gray-300 py-3 outline-none"
                />
              </div>

              <div>
                <label className="text-[15px] text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  className="w-full border-b border-gray-300 py-3 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-[15px] text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="+123 456 789"
                  className="w-full border-b border-gray-300 py-3 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-[15px] text-gray-700">Message</label>
                <textarea
                  placeholder="Type your message here"
                  className="w-full border-b border-gray-300 py-3 outline-none resize-none h-24"
                />
              </div>
            </div>

            <button className="mt-10 bg-[#9bb4df] text-white px-12 py-3 rounded-full hover:scale-105 transition">
              Submit
            </button>
          </div>

          {/* CONTACT INFO */}
          <div
            data-aos="fade-left"
            className="bg-[#4f8dfd] text-white p-12 flex flex-col justify-center"
          >
            <h2 className="text-[32px] font-semibold mb-4">
              Reach out directly
            </h2>

            <p className="text-blue-100 mb-10">
              We’re here to answer your questions and support your journey.
            </p>

            <div className="border-t border-blue-300 pt-8 space-y-6">
              <div className="flex items-center gap-4">
                <Phone size={20} />
                <span>(487) 120-7980</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={20} />
                <span>name@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin size={20} />
                <span>Riyadh, KSA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1200px] mx-auto mt-32 px-6">
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="text-[#4f8dfd] text-sm mb-4">• Testimonials</p>

          <h2 className="text-[32px] md:text-[44px] font-semibold">
            What our satisfied and happy
            <br />
            clients have to say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Emily Johnson",
            "Michael Roberts",
            "Sophia Martinez",
            "Olivia Harris",
            "James Anderson",
            "Daniel Thompson",
          ].map((name, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-[#e9edf2] p-8 rounded-[20px]"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={`https://randomuser.me/api/portraits/${
                    i % 2 ? "men" : "women"
                  }/${40 + i}.jpg`}
                  className="w-12 h-12 rounded-full"
                />

                <h4 className="font-medium text-lg">{name}</h4>
              </div>

              <p className="text-gray-600 mb-6">
                Their service was outstanding. They ensured I was comfortable
                and informed every step of the way.
              </p>

              <div className="text-yellow-500">★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 bg-white border-t">
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-4">Vital+Flow</h3>

            <p className="text-gray-600 mb-6">
              Creative healthcare template to launch your site quick and easily
            </p>

            <button className="bg-[#4f8dfd] text-white px-6 py-3 rounded-full">
              Book a call
            </button>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-6">Stay up to date</h3>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 bg-gray-100 px-4 py-3 rounded-lg outline-none"
              />

              <button className="bg-[#4f8dfd] text-white px-6 rounded-lg">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              by subscribing you will agree to privacy and policy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-4">Static pages</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>404</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">CMS Pages</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Services</li>
                <li>Doctors</li>
                <li>Careers</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Detail pages</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Service (CMS)</li>
                <li>Doctor (CMS)</li>
                <li>Career (CMS)</li>
                <li>Blogs (CMS)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow us</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Linkedin</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
