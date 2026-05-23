import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarCheck } from 'react-icons/fa';
import services from '../data/servicesData';

import trend1 from './services_i/trend1.jpg';
import trend2 from './services_i/trend2.jpg';
import trend3 from './services_i/trend3.jpg';
import trend4 from './services_i/trend4.jpg';

const extraServices = [
  {
    image: trend4,
    title: 'Aloe Vera Facial',
    category: 'Soothing Care',
  },
  {
    image: trend1,
    title: 'Vitamin Drip',
    category: 'Hydration Therapy',
  },
  {
    image: trend2,
    title: 'Non-Surgical Face Lift Treatment',
    category: 'Advanced Skin Care',
  },
  {
    image: trend3,
    title: 'Skin Detox & Rejuvenation Facial',
    category: 'Deep Cleansing',
  },
];

export default function ServiceCard() {
  const navigate = useNavigate();
  const allServices = [...services, ...extraServices];

  const handleBookNow = (service) => {
    navigate('/booking', { state: { service } });
  };

  return (
    <div className="p-8 bg-[#c5a891] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {allServices.map((service, index) => (
        <div key={index} className="bg-[#e0c8b2] rounded overflow-hidden p-2">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[408px] object-cover rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-lg text-[#5e4b3c]">
            {service.title}
          </h3>
          <p className="text-sm text-[#7b6d62]">{service.category}</p>

          <div className="mt-4 flex justify-center">
            <button
              onClick={() => handleBookNow(service)}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-[#3b2f25] text-white rounded hover:bg-[#1f1a17] transition"
            >
              <FaCalendarCheck /> Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
