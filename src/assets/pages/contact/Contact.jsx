// Contact.jsx
import { useState } from "react";
import React from 'react';
import contactimg from '../../components/services_comps/services_i/contact-img.png'



export default function Contact() {

  const branches = [
    {
      name: 'Thailand Branch',
      title: 'Smith Clinic – Thailand Branch',
      address: '4/1 Sukhumvit 49 Alley, Watthana, Bangkok 10110, Thailand',
      phone: '02-023-7165',
      hours: 'Mon–Sat: 10:00 AM – 8:00 PM, Sun: 10:00 AM – 4:00 PM THA',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15503.097930632806!2d100.55636659075081!3d13.732098981008258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4%2F1%20Sukhumvit%2049%20Alley%2C%20Watthana%2C%20Bangkok%2010110%2C%20Thailand!5e0!3m2!1sen!2sin!4v1752229269387!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    },
    {
      name: 'Mumbai Branch',
      title: 'Smith Clinic – Mumbai Branch',
      address: '1st Floor Shivanjali Society, Dr Ambedkar Road, Off Carter Rd, near Ambedkar Statue, Khar West, Mumbai, Maharashtra 400052, India ',
      phone: '02-123-4567',
      hours: 'Mon–Sat: 9:00 AM – 6:00 PM IST, Sun: Closed',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15082.982684436183!2d72.8205465424649!3d19.074916543691312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1st%20Floor%20Shivanjali%20Society%2C%20Dr%20Ambedkar%20Road%2C%20Off%20Carter%20Rd%2C%20near%20Ambedkar%20Statue%2C%20Khar%20West%2C%20Mumbai%2C%20Maharashtra%20400052%2C%20India!5e0!3m2!1sen!2sin!4v1752229609277!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    },
    {
      name: 'Ahmedabad Branch',
      title: 'Smith Clinic – Ahemdabad Branch',
      address: '203 Spectrum, Vivekanand Chowk, near Yash Arian, Memnagar, Ahmedabad, Gujarat 380052, India',
      phone: '02-987-6543',
      hours: 'Mon–Fri: 10:00 AM – 7:00 PM, Sat–Sun: 11:00 AM – 5:00 PM IST',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7342.470676493482!2d72.52776714039095!3d23.051832138797117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s203%20Spectrum%2C%20Vivekanand%20Chowk%2C%20near%20Yash%20Arian%2C%20Memnagar%2C%20Ahmedabad%2C%20Gujarat%20380052%2C%20India!5e0!3m2!1sen!2sin!4v1752229730663!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    }
  ];

  const [activeBranch, setActiveBranch] = useState(0);

  return (
    <div className="px-6 py-10 bg-white text-gray-800">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-lg tracking-widest text-gray-400 uppercase">Contact Us</h2>
        <h1 className="text-3xl font-semibold mt-1">Welcome to Smith Skin</h1>
        <p className="text-sm text-gray-500 mt-2">
          We are here to assist you with all skincare and wellness needs.
        </p>
      </div>

      <div className="flex justify-center gap-6 font-medium text-sm text-gray-600 mb-8">
        {branches.map((branch, index) => (
          <span
            key={index}
            className={`cursor-pointer ${activeBranch === index ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
            onClick={() => setActiveBranch(index)}
          >
            {branch.name}
          </span>
        ))}
      </div>

      {/* Branch Info */}
      <div className="flex flex-row items-center mb-12 bg-gradient-to-r from-[#ffdab9] via-[#e2cbb0] to-[#fcf9f5] rounded-xl gap-8">
        {/* Image Section */}
        <div className="w-1/3 justify-start ml-0 mr-[280px] pr-6">
          <img src={contactimg} alt="Branch" className=" justify-start w-full h-auto" />
        </div>

        {/* Text Content Section */}
        <div className="w-1/2">
          <h3 className="text-xl font-bold text-gray-700 mb-2">{branches[activeBranch].title}</h3>
          <p className="text-sm">{branches[activeBranch].address}</p>
          <p className="mt-4 text-sm"><strong>Opening Hours:</strong> {branches[activeBranch].hours}</p>
          <p className="mt-4 text-sm"><strong>Phone:</strong> {branches[activeBranch].phone}</p>
        </div>
      </div>



      {/* Google Map */}
      <div className="w-full h-72 mb-8">
        <iframe
          title="Branch Location"
          src={branches[activeBranch].mapEmbed}
          className="w-full h-full border-0 rounded-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


    </div>
  );
}
