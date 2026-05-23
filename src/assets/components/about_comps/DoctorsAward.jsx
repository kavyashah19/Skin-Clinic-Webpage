import React from 'react';
import doc1 from './about_i/doctor1.jpg';
import doc2 from './about_i/doctor2.jpg';
import doc3 from './about_i/doctor3.jpg';
import doc4 from './about_i/doctor4.jpg';
import doc5 from './about_i/doctor5.jpg';
import founderImg from './about_i/founder.jpg'; // Add founder image
import styles from '../home_comps/Hero_sec.module.css';

const doctors = [
    {
        image: doc1,
        name: 'Dr. Mike Modi',
        role: 'Medical Director',
        specialization: 'Board-Certified Aesthetic Dermatologist & Lifestyle Medicine Expert',
    },
    {
        image: doc2,
        name: 'Dr. Olivia Patel',
        role: 'Ophthalmologic Dermatologist',
        specialization: 'Expert in Vitreoretinal Surgery & Aesthetic Eye Care',
    },
    {
        image: doc3,
        name: 'Dr. Mia Thane',
        role: 'Dermatologic Surgeon',
        specialization: 'Laser Specialist, Dermatosurgery & Facial Aesthetics',
    },
    {
        image: doc4,
        name: 'Dr. Ava Khan',
        role: 'Anti-Aging Expert',
        specialization: 'Regenerative Dermatology & Youth Restoration Therapy',
    },
    {
        image: doc5,
        name: 'Dr. Dingus Huda',
        role: 'Skin Rejuvenation Specialist',
        specialization: 'Advanced Facial Treatments & Skin Health',
    },
];

const DoctorAwards = () => {
    return (
        <div className=" text-[#5e4b3c] pb-16">

            {/* Founder Section */}
            <div className=" bg-[#ffe8e0]  text-[#875640] rounded-xl  px-6 md:px-24 py-16">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image */}
                    <div className="md:w-1/3 w-full flex justify-center">
                        <img
                            src={founderImg}
                            alt="Founder"
                            className="w-64 h-80 object-cover rounded-lg shadow-md"
                        />
                    </div>
                    {/* Text */}
                    <div className="md:w-2/3 w-full text-left">
                        <h2 className=" mb-3 heading">
                            <span className={` underline text-4xl font-bold ${styles.subheading2}`}>
                               A Word from Our Founder
                            </span>
                        </h2>
                        <p className={`text-lg text-gray-700 leading-relaxed `}>

                            At <strong>Smith Privé Aesthetique</strong>, my vision was to create a refined space where science and artistry come together.
                            <br /><br />
                            Our philosophy is built on trust, precision, and personalization. Every patient is a unique canvas, and our goal is to help them feel empowered, confident, and radiant.
                            <br /><br />
                            Thank you for choosing us to be part of your self-care journey.
                        </p>
                        <p className="mt-6 font-semibold text-[#5e4b3c]">— Dr. Elina Chopra</p>
                        <p className="text-sm italic text-gray-500">Founder & Chief Aesthetic Physician</p>
                    </div>
                </div>
            </div>

            {/* Doctor Section */}
            <div className="text-center pt-12">
                <h2 className="text-4xl font-bold italic">
                    OUR <span className="not-italic">DOCTORS</span>
                </h2>
                <hr className="mt-2 mx-auto w-1/6 border-[#c5a891]" />
            </div>

            <div className="flex flex-wrap justify-center gap-6 px-6 mt-10">
                {doctors.map((doc, index) => (
                    <div
                        key={index}
                        className="w-[250px] text-center bg-white rounded-lg shadow-sm p-4 transition-transform duration-300 hover:shadow-md hover:scale-105"
                    >
                        <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-full h-[300px] object-cover rounded-lg mb-4"
                        />
                        <p className="font-semibold">{doc.role}</p>
                        <p className="text-sm text-gray-600">{doc.specialization}</p>
                        <p className="mt-2 font-bold text-[#5e4b3c]">{doc.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorAwards;
