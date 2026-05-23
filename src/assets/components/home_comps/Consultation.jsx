import React from 'react';
import check from './Home_i/check.jpg';
import consulting from './Home_i/consulting.jpg';
import differ from './Home_i/differ.jpg';

function Consultation() {
  return (
    <div className="flex flex-col md:flex-row px-2 py-4 gap-2 text-[#5e4b3c] ">
      {/* Card 1 */}
      <div className="w-full md:w-1/3 flex flex-col items-center text-center">
        <img src={check} alt="Every skin is different" className="w-full h-64 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Every Skin is Different</h3>
        <p className="text-sm px-2">
          We understand that each skin type requires a personalized approach. Our tailored solutions are crafted to meet your individual needs and enhance your natural beauty.
        </p>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-1/3 flex flex-col items-center text-center">
        <img src={consulting} alt="Qualified skin consultants" className="w-full h-64 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Our Qualified Skin Consultants</h3>
        <p className="text-sm px-2">
          Our team of certified professionals provides in-depth consultations and guidance to help you select the most effective treatments for visible, lasting results.
        </p>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-1/3 flex flex-col items-center text-center">
        <img src={differ} alt="Long-lasting product benefits" className="w-full h-64 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Products that Benefit You Longer</h3>
        <p className="text-sm px-2">
          We use only the highest quality products to ensure results that last—nourishing your skin well beyond your treatment session.
        </p>
      </div>
    </div>
  );
}

export default Consultation;
