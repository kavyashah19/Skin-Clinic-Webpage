import React from 'react';
import aboutHero from './about_i/about_hero.jpg';
import model1 from './about_i/model1.jpg';
import model2 from './about_i/model2.jpg';
import styles from '../home_comps/Hero_sec.module.css';

export default function Hero_about() {
    return (
        <div className="w-full bg-[#fdf6f1] pt-24">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-stretch min-h-[90vh]">
                {/* Left Text Section */}
                <div className="md:w-1/2 w-full flex items-center justify-center px-6 md:px-16 py-12 text-[#5e4b3c] bg-gradient-to-r from-[#fdf6f1] to-transparent">
                    <div>
                        <h1 className="text-4xl md:text-4xl tracking-wide leading-tight mb-4">
                            OUR PASSION, <br />
                            <span className={`text-4xl md:text-6xl ${styles.heading}`}>
                                YOUR PERFECTION
                            </span>
                        </h1>
                        <p className="max-w-lg text-base md:text-lg leading-relaxed subheading">
                            Every detail in our treatments is delicately curated to bring out your natural radiance.
                            <br />
                            From consultation to post-care, we personalize every step to ensure you feel confident, empowered, and truly beautiful in your skin.
                        </p>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="md:w-1/2 w-full relative">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(to left, rgba(253, 246, 241, 0.4), rgba(253, 246, 241, 0)), url(${aboutHero})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                        }}
                    ></div>
                </div>
            </div>

            {/* Asymmetric Section */}
            <div className="px-6 md:px-24 pt-12 pb-20 text-[#5e4b3c] bg-[#fdf6f1]">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col items-center md:items-center text-center md:text-left">
                        <div className="mb-4 max-w-md">
                            <h2 className=" mb-3 heading">
                                <span className={`text-3xl font-bold ${styles.subheading2}`}>
                                    Customized Solutions For Your Unique Skin
                                </span>
                            </h2>
                            <p className="text-md text-gray-700 leading-relaxed subheading">
                                No two faces are alike—and neither are our treatments. We conduct in-depth skin analysis and facial assessments to design a personalized plan just for you. Whether it’s rejuvenation, hydration, or contouring, every procedure is done with expert precision and care.
                            </p>
                        </div>
                        <img
                            src={model1}
                            alt="Balanced Skin"
                            className="max-w-[408px] max-h-[612px] w-full rounded-lg shadow-md mt-4"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center md:items-center text-center md:text-left mt-4">
                        <img
                            src={model2}
                            alt="Healthy Glow"
                            className="max-w-[408px] max-h-[612px] w-full rounded-lg shadow-md mb-4"
                        />
                        <div className="max-w-md">
                            <h2 className=" mb-3 heading">
                                <span className={`text-3xl font-bold ${styles.subheading2}`}>
                                    Skin Clarity & Long-Term Radiance
                                </span>
                            </h2>
                            <p className="text-md text-gray-700 leading-relaxed subheading">
                                Our clinically advanced products stimulate collagen, enhance hydration, and promote inner skin healing. Over time, you’ll notice improved texture, tone, and glow that doesn’t fade quickly—because real results come from real care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
