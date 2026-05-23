import React, { useState } from "react";
import girl21 from './Home_i/girl21.png';
import styles from './Hero_sec.module.css';

export default function Hero_sec() {
  const [showMore, setShowMore] = useState(false);

  const more = () => {
    setShowMore(prev => !prev);
  };

  return (
    <section className="relative w-full bg-[#f1d7c4] overflow-hidden px-4 md:px-24 pt-40 pb-20">
      {/* Text + Image Row */}
      <div className="z-10 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-[#5e4b3c]">
          <h2 className="text-xl md:text-2xl italic font-light mb-2">
            Smith Prive' Aesthetique
          </h2>

          <h1 className="text-4xl md:text-4xl tracking-wide leading-tight mb-4">
            OUR PASSION, <br />
            <span className={`text-4xl md:text-6xl ${styles.heading}`}>
              YOUR PERFECTION
            </span>
          </h1>

          <p className="text-sm md:text-base text-gray-700 mb-6 max-w-md">
            Gentle precision in every treatment step for your perfect balance.
          </p>

          <button
            onClick={more}
            className="bg-white text-[#5e4b3c] border border-[#5e4b3c] px-6 py-2 rounded-md hover:bg-[#5e4b3c] hover:text-white transition-all"
          >
            {showMore ? "Read Less" : "Learn More"}
          </button>
        </div>

        {/* Image */}
        <img
          src={girl21}
          alt="Hero"
          className="w-[355px] h-[517px] pt-7 mr-28 object-contain md:absolute right-0 bottom-0 pointer-events-none"
        />
      </div>

      {/* Expanded Section */}
      {showMore && (
        <div className="mt-12 text-[#5e4b3c] max-w-3xl text-justify leading-relaxed">
          <p className="mb-4">
            At <strong>Smith Prive’ Aesthetique</strong>, we believe that beauty is not just about appearance—it's about confidence, self-care, and personal transformation. Our philosophy blends clinical expertise with artistic finesse to create an experience that is both indulgent and effective. Every detail of your journey is designed to help you feel seen, supported, and beautifully you.
          </p>
          <p className="mb-4">
            Our team of trained professionals offers a curated selection of advanced aesthetic treatments tailored to your unique skin type and concerns. From rejuvenating facials and anti-aging therapies to corrective skincare and wellness solutions, we deliver results that go beyond the surface—restoring balance, vitality, and inner glow.
          </p>
          <p>
            Step into a serene space where modern science meets timeless elegance. At Smith Prive’ Aesthetique, your experience is our signature. Let us guide you on a path of gentle transformation—where precision, luxury, and care come together to enhance the beauty that is already yours.
          </p>
        </div>
      )}
    </section>
  );
}
