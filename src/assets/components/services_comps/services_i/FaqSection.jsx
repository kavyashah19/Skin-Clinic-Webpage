import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqBanner from '../../home_comps/Home_i/consulting.jpg'; 

const faqData = [
  {
    question: "What kind of facial treatments do you offer?",
    answer: "We offer HydraFacials, acne therapy, anti-aging solutions, and personalized rejuvenation plans."
  },
  {
    question: "Are the treatments safe for sensitive skin?",
    answer: "Yes, our dermatologically tested treatments are gentle and suitable for all skin types."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "Yes, advance booking ensures your preferred slot and personalized service."
  },
  {
    question: "How long do the results last?",
    answer:
      "Results vary by treatment and skin type, but many clients enjoy visible improvements for several weeks. Regular sessions ensure sustained results."
  },
  {
    question: "Is there any downtime after the facial?",
    answer:
      "Most of our facial treatments require no downtime. You can resume your normal activities right after the session."
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showFaqs, setShowFaqs] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggleFaqs = () => {
    setShowFaqs(!showFaqs);
    setOpenIndex(null); // Reset open index when showing/hiding
  };

  return (
    <div className="w-full bg-white">
      {/* Banner Section */}
      <div className="grid md:grid-cols-2 items-center bg-[#f8f4ef] rounded-xl overflow-hidden shadow-md max-w-6xl mx-auto my-12">
        {/* Left Text Side */}
        <div className="p-10">
          <h2 className="text-3xl font-serif text-[#5e4b3c] font-semibold mb-4">
            Frequently <br /> asked <span className="font-bold">QUESTIONS</span>
          </h2>
          <button
            onClick={handleToggleFaqs}
            className="text-sm text-[#5e4b3c] font-medium hover:underline"
          >
            {showFaqs ? 'Read Less ←' : 'Learn More →'}
          </button>
        </div>

        {/* Right Image Side */}
        <div>
          <img
            src={faqBanner}
            alt="FAQs Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Actual FAQs Section (conditional) */}
      {showFaqs && (
        <div id="faqs" className="max-w-4xl mx-auto px-4 pb-12">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-[#d9c2ae] rounded-lg bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-[#5e4b3c] font-medium focus:outline-none"
                >
                  {faq.question}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
