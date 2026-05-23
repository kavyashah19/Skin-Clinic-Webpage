import React from 'react';
import awardImage from './Home_i/award.jpeg';

function AwardsSection() {
    return (
        <div className="flex flex-col md:flex-row items-center bg-[#f4eee9] text-[#5e4b3c] md:py-8">

            {/* Text Section */}
            <div className="md:w-1/2 w-full text-left m-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-[#5e4b3c]">Global Recognition of Excellence</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                    At <strong>Smith Privé Aesthetique</strong>, we are honored to be recognized for our innovation and leadership in the field of advanced aesthetic technologies.
                    <br /><br />
                    Our award for <strong>“Distinction in Aesthetic Excellence – 2024”</strong> is a testament to our commitment to delivering world-class treatments with precision, elegance, and care. This recognition inspires us to continuously raise the bar in luxury skincare and wellness.
                </p>
            </div>

            {/* Background Image Section */}
            <div
                className="md:w-1/2 max-w-[380px] h-[530px] bg-cover ml-50 border-10 
                border-[#c09c80] "
                style={{ backgroundImage: `url(${awardImage})` }}
            >
                {/* Optional overlay or caption could go here */}
            </div>

        </div>
    );
}

export default AwardsSection;
