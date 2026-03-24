import React, { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of healthcare services including consultations, diagnostics, personalized care plans, and preventive treatments tailored to your needs.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment easily through our online booking system, by calling our clinic, or by visiting us directly.",
    },
    {
      question: "Are your services available 24/7?",
      answer:
        "Yes, many of our consultation services are available 24/7 through our virtual healthcare platform.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance providers. Please contact our support team to confirm your specific insurance plan.",
    },
    {
      question: "What makes your care unique?",
      answer:
        "Our care focuses on personalized treatment plans, advanced medical technology, and compassionate healthcare professionals.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        {/* Top Label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[8px] w-[8px] rounded-full bg-[#4f86f7]"></span>
          <p className="text-[14px] font-medium text-black sm:text-[15px]">
            FAQ's
          </p>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-[760px] text-center text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] text-black sm:text-[42px] md:text-[52px] lg:text-[64px]">
          Frequently asked questions
          <br />
          for quick answers
        </h2>

        {/* FAQ List */}
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#e3e3e3] pb-6">
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex cursor-pointer items-center justify-between"
              >
                <h3 className="text-[20px] font-medium text-black sm:text-[22px]">
                  {faq.question}
                </h3>

                {/* Plus Button */}
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4f86f7] text-white text-[26px] leading-none">
                  {activeIndex === index ? "−" : "+"}
                </div>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "mt-5 max-h-[200px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-[700px] text-[16px] leading-[1.7] text-[#666666]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
