import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import services from '../../components/data/servicesData';

import clinic1 from '../../components/services_comps/services_i/clinic1.jpg';
import clinic2 from '../../components/services_comps/services_i/clinic2.jpg';
import clinic3 from '../../components/services_comps/services_i/clinic3.jpg';
import poster from '../../components/services_comps/services_i/consultPoster.jpg';
import poster2 from '../../components/services_comps/services_i/videocall.jpg';


export default function Booking() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const passedService = location.state?.service;

    const [showAddMore, setShowAddMore] = useState(false);
    const [showConsultForm, setShowConsultForm] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        phone: '',
        email: '',
        country: '',
        selectedService: passedService?.title || '',
        addmoreservices: []
    });

    const [consultData, setConsultData] = useState({
        name: '',
        email: '',
        method: ''
    });

    const handleChange = (e) => {
        const { name, value, multiple, options } = e.target;

        if (multiple) {
            const selected = Array.from(options).filter(o => o.selected).map(o => o.value);
            setFormData({ ...formData, [name]: selected });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleConsultInput = (e) => {
        setConsultData({ ...consultData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const additional = formData.addmoreservices.length
            ? ` and additional services: ${formData.addmoreservices.join(', ')}`
            : '';

        alert(
            `Thank you ${formData.name}, your booking for "${formData.selectedService}"${additional} is confirmed!\n\nWe will contact you shortly through your mail-id.`
        );

        navigate('/home');
    };

    const handleConsultSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${consultData.name}, your ${consultData.method} consultation request has been submitted!`);
        setConsultData({ name: '', email: '', method: '' });
        setShowConsultForm(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdf3e7] via-[#f9e4d4] to-[#e9d2c0] py-10 px-6">
            <h2 className="text-4xl font-extrabold text-center text-[#5e4b3c] mb-6">Book Your Appointment</h2>
            <p className="text-center text-[#7a6452] mb-12 text-lg">Experience advanced skincare with personalized attention in our luxury clinics.</p>

            {/* Booking Section */}
            {/* Booking Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto justify-center items-stretch">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white bg-opacity-80 backdrop-blur-sm shadow-2xl rounded-2xl px-8 py-10 space-y-4"
                >
                    <h3 className="text-2xl font-bold text-[#5e4b3c] mb-4">Booking Details</h3>

                    <label className="block text-[#5e4b3c] font-semibold mb-1">Select Your Primary Service</label>
                    <select
                        name="selectedService"
                        required
                        className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#c5a891]"
                        value={formData.selectedService}
                        onChange={handleChange}
                    >
                        <option value="">-- Choose a Service --</option>
                        {services.map((s, i) => (
                            <option key={i} value={s.title}>{s.title}</option>
                        ))}
                    </select>

                    {/* Toggle More Services */}
                    <div>
                        <button
                            type="button"
                            className="text-[#5e4b3c] font-medium hover:text-[#3b2f25] transition mb-2"
                            onClick={() => setShowAddMore(!showAddMore)}
                        >
                            {showAddMore ? 'Hide Additional Services' : '➕ Add More Services (Optional)'}
                        </button>

                        {showAddMore && (
                            <>
                                <p className="text-sm text-gray-500 mb-1">Hold Ctrl (Windows) or Cmd (Mac) to select multiple.</p>
                                <select
                                    name="addmoreservices"
                                    multiple
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#c5a891]"
                                    value={formData.addmoreservices}
                                    onChange={handleChange}
                                >
                                    {services.map((s, i) => (
                                        <option key={i} value={s.title}>{s.title}</option>
                                    ))}
                                </select>
                            </>
                        )}
                    </div>

                    {/* User Inputs */}
                    <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-2 border rounded" onChange={handleChange} />
                    <select name="gender" required className="w-full px-4 py-2 border rounded" onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="tel" name="phone" required placeholder="Phone Number" className="w-full px-4 py-2 border rounded" onChange={handleChange} />
                    <input type="email" name="email" required placeholder="Email Address" className="w-full px-4 py-2 border rounded" onChange={handleChange} />
                    <select name="country" required className="w-full px-4 py-2 border rounded" onChange={handleChange}>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="Thailand">Thailand</option>
                        <option value="USA">USA</option>
                        <option value="Japan">Japan</option>
                        <option value="Singapore">Singapore</option>
                        <option value="UAE">UAE</option>
                    </select>

                    <button type="submit" className="w-full py-3 bg-[#5e4b3c] text-white font-semibold rounded hover:bg-[#3b2f25] transition">
                        Confirm Booking
                    </button>
                </form>

                {/* Poster Consultation Section */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm shadow-2xl rounded-2xl px-6 py-8 min-h-[700px] flex flex-col justify-between">
                    <div>
                        <img src={poster} alt="Free Consultation 1" className="rounded-xl shadow mb-4" />
                        <img src={poster2} alt="Free Consultation 2" className="rounded-xl shadow mb-6" />

                        <div className="text-center text-[#3b2f25]">
                            <h3 className="text-3xl font-bold mb-2">Free Skin Consultation</h3>
                            <p className="text-lg mb-4">
                                Unlock your best glow yet. Book a 1-on-1 consultation with our experts — totally free!
                            </p>
                            <button
                                onClick={() => setShowConsultForm(!showConsultForm)}
                                className="bg-[#f5c6aa] text-[#3b2f25] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e4b392] transition"
                            >
                                {showConsultForm ? 'Cancel' : 'Book Now'}
                            </button>
                        </div>
                    </div>

                    {showConsultForm && (
                        <form
                            onSubmit={handleConsultSubmit}
                            className="mt-6 bg-white p-4 rounded-xl shadow border border-gray-200 space-y-4"
                        >
                            <input
                                type="text"
                                name="name"
                                required
                                value={consultData.name}
                                onChange={handleConsultInput}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                value={consultData.email}
                                onChange={handleConsultInput}
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border rounded"
                            />
                            <select
                                name="method"
                                required
                                value={consultData.method}
                                onChange={handleConsultInput}
                                className="w-full px-4 py-2 border rounded"
                            >
                                <option value="">Select Consultation Method</option>
                                <option value="Video Call">Video Call</option>
                                <option value="In-Person Visit">In-Person Visit</option>
                            </select>

                            <button
                                type="submit"
                                className="w-full py-2 bg-[#5e4b3c] text-white font-semibold rounded hover:bg-[#3b2f25] transition"
                            >
                                Submit Consultation Request
                            </button>
                        </form>
                    )}
                </div>
            </div>


            {/* Clinic Info */}
            <div className="mt-16 space-y-12 max-w-6xl mx-auto">
                <h1 className="text-[#5e4b3c] text-lg font-extrabold">Why choose us?</h1>
                {[clinic1, clinic2, clinic3].map((img, idx) => (
                    <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`}>
                        <img src={img} alt={`Clinic ${idx + 1}`} className="w-full md:w-1/2 rounded-xl shadow-xl object-cover" />
                        <ul className="text-[#5e4b3c] text-lg space-y-2 list-disc pl-5">
                            <li>{idx === 0 ? 'Our clinics maintain extremely high cleanliness standards and are sanitized after every appointment.' : idx === 1 ? 'Our experienced dermatologists and trained professionals provide personalized and expert care at every step.' : 'Our consultation rooms are designed for comfort and privacy to enhance your overall experience.'}</li>
                            <li>{idx === 0 ? 'We use internationally certified cutting-edge technologies for skin rejuvenation and treatment.' : idx === 1 ? 'We use only organic, skin-friendly products to ensure gentle yet effective results.' : 'We ensure continuous follow-up and personalized aftercare post-treatment to ensure optimal results.'}</li>
                        </ul>
                    </div>
                ))}
            </div>

            {/* Contact */}
            <div className="text-center mt-16 bg-[#c5a891] text-white py-6 rounded-lg shadow-lg max-w-xl mx-auto">
                <p className="text-lg font-medium">📞 Have questions? Call us at: <span className="font-bold">+91 98765 43210</span></p>
                <p className="text-lg">📧 Or email: <span className="underline">contact@smithpixie.in</span></p>
            </div>
        </div>
    );
}
