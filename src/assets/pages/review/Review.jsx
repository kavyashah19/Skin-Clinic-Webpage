import React from 'react'
import { FaStar } from 'react-icons/fa'
import girl from '../../components/home_comps/Home_i/girl21.png'
import hydrafacial from '../../components/services_comps/services_i/hydrafacial.jpg'
import laser from '../../components/services_comps/services_i/laser.jpg'
import botox from '../../components/services_comps/services_i/botox.jpg'
import acne from '../../components/services_comps/services_i/acne.jpg'
import doctor from '../../components/about_comps/about_i/doctor2.jpg'
import doctor3 from '../../components/about_comps/about_i/doctor3.jpg'
import doctor4 from '../../components/about_comps/about_i/doctor4.jpg'
import cream from '../../components/home_comps/Home_i/cream1.png'

const Review = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 bg-[#fcf2e8]">
        <h2 className="text-4xl text-gray-500 font-semibold mb-4">Review and INSIGHTS</h2>
        <h3 className="text-lg text-gray-600 italic">accessible BEAUTY</h3>
        <p className="max-w-2xl mx-auto text-gray-500 mt-4">
          At Skin Pixie's Aesthetics, every review reflects our dedication to quality skincare. Explore real experiences and expert feedback from our valued clients.
        </p>
      </section>

      {/* Beauty Perfection (Services Overview) */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-[#ffdab9] via-[#e2cbb0] to-[#fcf9f5]">
        <div className="md:w-1/2 space-y-5 px-8 py-5 ">
          <h2 className="text-3xl font-semibold">Beauty, PERFECTION</h2>
          <p className="text-gray-600">
            Discover how our advanced facial treatments, laser therapy, and skin rejuvenation services have transformed real skin journeys. Each treatment is uniquely personalized by our experts.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full">Explore Services</button>
        </div>
        <div className="md:w-1/2">
          <img src={girl} alt="Beauty perfection" className="rounded-xl max-h-[400px] pl-[350px]" />
        </div>
      </section>

      {/* Client Reviews */}
      <section className="bg-white px-6 py-12">
        <h3 className="text-center text-2xl font-semibold mb-8">What Our Clients Say</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: 'HydraFacial',
              desc: 'My skin felt so smooth and glowing instantly after the session!',
              img: hydrafacial
            },
            {
              title: 'Laser Hair Removal',
              desc: 'Quick and painless experience. Highly recommended!',
              img: laser
            },
            {
              title: 'Botox Treatment',
              desc: 'Natural-looking results with zero downtime!',
              img: botox
            },
            {
              title: 'Acne Therapy',
              desc: 'Significant improvement in just a few weeks.',
              img: acne
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#f8f8f8] rounded-lg p-4 shadow-sm text-center">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-md mb-3" />
              <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Passion & Experience (Clinic) */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-[#f1c0db] via-[#f1e4eb] to-[#fcf9f5]">
        <div className="md:w-1/2 space-y-5 px-8 py-5 ">
          <h3 className="text-3xl font-bold mb-2">Our Passion. Your Perfection.</h3>
          <p className="max-w-xl text-lg">
            From ambiance to hygiene, every part of your journey is crafted to ensure comfort and care. Your beauty is our pride.
          </p>
        </div>
        <div>
          <img src={cream} alt="Beauty perfection" className="rounded-xl max-h-[400px] pl-[350px]" />
        </div>
      </section>

      {/* Staff Reviews Section */}
      <section className="px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center mb-10">Meet Our Experts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Dr. Olivia Patel',
              role: 'Dermatologist',
              img: doctor,
              review: 'The consultation was thorough and personalized. Dr. Maya explained every detail patiently.'
            },
            {
              name: 'Anjali Mehta',
              role: 'Senior Aesthetician',
              img: doctor3,
              review: 'Anjali made me feel comfortable throughout the entire facial process.'
            },
            {
              name: 'Riya Sharma',
              role: 'Laser Technician',
              img: doctor4,
              review: 'The laser treatment was smooth and fast. Very professional!'
            }
          ].map((staff, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-5 text-center">
              <img
                src={staff.img}
                alt={staff.name}
                className="w-full h-[500px] object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-lg">{staff.name}</h4>
              <p className="text-sm italic text-gray-500">{staff.role}</p>
              <p className="text-gray-600 mt-2">{staff.review}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Review
