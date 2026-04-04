import { blog1, blog2, blog3, blog4, blog5, blog6 } from "../../assets/images";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import ContactFooterSection from "../ContactFooterSection/ContactFooterSection";
export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: "The Benefits of Regular Exercise: A Pathway to Health",
      date: "Sep 4, 2024",
      readTime: "5 min Read",
    },
    {
      id: 2,
      image: blog2,
      title: "Managing Stress for Better Health: Strategies for a Calmer Life",
      date: "Sep 5, 2024",
      readTime: "5 min Read",
    },
    {
      id: 3,
      image: blog3,
      title: "The Impact of Sleep on Your Health: Why Rest Matters",
      date: "Sep 16, 2024",
      readTime: "5 min Read",
    },
    {
      id: 4,
      image: blog4,
      title: "The Power of a Balanced Diet",
      date: "Sep 17, 2024",
      readTime: "5 min Read",
    },
    {
      id: 5,
      image: blog5,
      title: "The Role of Mental Health in Overall Wellness",
      date: "Sep 28, 2024",
      readTime: "5 min Read",
    },
    {
      id: 6,
      image: blog6,
      title: "The Importance of Preventive Healthcare",
      date: "Sep 26, 2024",
      readTime: "5 min Read",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] pt-[120px] pb-16 sm:pt-[130px] lg:pt-[140px]">
      {/* 👆 pt اضافه شد برای حل مشکل navbar */}

      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Top Label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[8px] w-[8px] rounded-full bg-[#4f86f7]"></span>
          <p className="text-[14px] font-medium text-black sm:text-[15px]">
            Blog
          </p>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-[820px] text-center text-[30px] font-semibold leading-[1.14] tracking-[-0.04em] text-black sm:text-[38px] md:text-[46px] lg:text-[56px]">
          Insights and tips for better
          <br />
          healthcare decisions
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-[26px] sm:rounded-[28px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[240px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[280px] md:h-[300px] lg:h-[320px]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 max-w-[420px] text-[22px] font-medium leading-[1.3] tracking-[-0.03em] text-black sm:text-[26px] lg:text-[28px]">
                {post.title}
              </h3>

              {/* Divider */}
              <div className="mt-6 h-px w-full bg-[#e3e3e3]"></div>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap items-center gap-5 text-[#6f6f6f]">
                {/* Date */}
                <div className="flex items-center gap-2.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#4f86f7]"
                  >
                    <path
                      d="M7 3V6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17 3V6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 9H20"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <rect
                      x="4"
                      y="5"
                      width="16"
                      height="15"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M8 13H8.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 13H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 13H16.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-[14px] sm:text-[15px]">
                    {post.date}
                  </span>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-2.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#4f86f7]"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 7V12L15.5 14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[14px] sm:text-[15px]">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <TestimonialsSection />
        <ContactFooterSection />
      </div>
    </section>
  );
}
