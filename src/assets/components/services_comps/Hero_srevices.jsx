import React from 'react';
import girl1 from './services_i/skinlines.png';
import trend1 from './services_i/trend1.jpg';
import trend2 from './services_i/trend2.jpg';
import trend3 from './services_i/trend3.jpg';

export default function ServicesHero() {
    return (
        <div className="w-full text-[#5e4b3c]">

            {/* Hero Section */}
            <div className="relative w-full h-[250px] bg-[#fbf3ed] flex items-center justify-center px-6 md:px-20">

                <div className="z-10 max-w-5xl mx-auto">
                    <h1 className="text-center text-3xl md:text-3xl font-semibold italic mt-2 mb-2">OUR SERVICES</h1>

                    <p
                        className="text-lg md:text-lg italic leading-relaxed text-center "
                    >
                        Explore a world of <span className="not-italic font-semibold">cutting-edge skincare and aesthetic treatments</span> designed to enhance your natural beauty and confidence.
                        At Smith Aesthetic, each service is <span className="not-italic font-semibold">thoughtfully curated</span> using advanced technology and personalized techniques to ensure <span className="not-italic font-semibold">exceptional results</span> tailored to your unique skin needs.
                    </p>
                   
                </div>

            </div>
       

            {/* Trends Section */ }
    <div className="px-6 md:px-20 py-6">
        <h2 className="text-3xl md:text-4xl font-light text-center italic mb-8">TRENDING NOW</h2>

        <div className="flex overflow-x-auto gap-6 scrollbar-hide">
            {[
                { img: trend1, title: 'Vitamin Drip' },
                { img: trend2, title: 'Non-Surgical Face Lift Treatment' },
                { img: trend3, title: 'Skin Detox & Rejuvenation Facial' }
            ].map((trend, idx) => (
                <div key={idx} className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={trend.img} alt={trend.title} className="w-full h-[300px] object-cover" />
                    <div className="p-4 text-center">
                        <h3 className="text-md font-semibold">{trend.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">February 2025</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

      </div >


    );
}
