
// avatars
import avatar1 from "../../assets/testimonial1.webp";
import avatar2 from "../../assets/testimonial2.png";
import avatar3 from "../../assets/testimonial3.webp";
import avatar4 from "../../assets/testimonial4.webp";
import avatar5 from "../../assets/testimonial5.webp";
import avatar6 from "../../assets/testimonial6.webp";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      image: avatar1,
      review:
        "Their service was outstanding. They ensured I was comfortable and informed every step of the way.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Roberts",
      image: avatar2,
      review:
        "The support I received was excellent. They truly cared about my needs and exceeded my expectations.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sophia Martinez",
      image: avatar3,
      review:
        "I felt valued and cared for. Their team made every effort to provide exceptional support and service.",
      rating: 4,
    },
    {
      id: 4,
      name: "Olivia Harris",
      image: avatar4,
      review:
        "They were attentive and thorough. Their professionalism and kindness made the entire process seamless.",
      rating: 4,
    },
    {
      id: 5,
      name: "James Anderson",
      image: avatar5,
      review:
        "My experience was remarkable. They delivered exactly what they promised with care and dedication.",
      rating: 5,
    },
    {
      id: 6,
      name: "Daniel Thompson",
      image: avatar6,
      review:
        "Their team was exceptional. They listened to my concerns and made sure all my needs were addressed.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Top label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[8px] w-[8px] rounded-full bg-[#4f86f7]"></span>
          <p className="text-[14px] font-medium text-black sm:text-[15px]">
            Testimonials
          </p>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-[760px] text-center text-[30px] font-semibold leading-[1.16] tracking-[-0.04em] text-black sm:text-[38px] md:text-[46px] lg:text-[56px]">
          What our satisfied and happy
          <br />
          clients have to say
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-[28px] bg-[#edf2f7] px-6 py-7 sm:px-7 sm:py-8 lg:px-7 lg:py-8"
            >
              {/* top row */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[58px] w-[58px] rounded-full object-cover"
                />

                <h3 className="text-[18px] font-medium tracking-[-0.02em] text-black sm:text-[20px]">
                  {item.name}
                </h3>
              </div>

              {/* review */}
              <p className="mt-7 text-[15px] leading-[1.7] text-[#666666] sm:text-[16px]">
                {item.review}
              </p>

              {/* stars */}
              <div className="mt-8 flex items-center gap-1 text-[#f4b400]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[24px] leading-none">
                    {star <= item.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
