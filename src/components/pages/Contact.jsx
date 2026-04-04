import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import Footer from "./Footer";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* TOP TEXT */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2">• Contact us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your connection to better <br />
            care starts here
          </h2>

          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
            What we do
          </button>
        </div>

        {/* MAIN BOX */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* LEFT FORM */}
          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Carter"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="+123 456 789"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                placeholder="Type your message here !!!"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full md:w-[200px] bg-blue-300 text-white py-3 rounded-full hover:bg-blue-400 transition"
            >
              Submit
            </button>
          </form>

          {/* RIGHT INFO */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Reach out directly
              </h3>
              <p className="text-sm text-blue-100 mb-8">
                We’re here to answer your questions and support your journey.
              </p>

              <div className="border-t border-blue-300 mb-6"></div>

              {/* Contact Info */}
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>(487) 120-7980</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>name@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>Riyadh, KSA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialsSection />
        <Footer />
      </div>
    </section>
  );
}
