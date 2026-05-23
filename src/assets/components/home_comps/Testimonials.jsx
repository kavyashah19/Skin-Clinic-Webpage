import React from 'react';
import spa1 from '../home_comps/Home_i/spa1.jpeg';
import styles from './Hero_sec.module.css'; // assumes .heading uses cursive font

function Testimonials() {
    return (
        <div className="flex flex-col md:flex-row md:pt-2 pl-1 mt-0 pt-0">

            {/* Image on the left */}
            <div className="md:w-1/2 flex ">
                <img
                    src={spa1}
                    alt="spa_image"
                    className=" w-[620px] h-[428px]"
                />
            </div>

            {/* Text on the right, vertically centered */}
            <div className="md:w-1/2 w-full flex flex-col justify-center  text-left">
                <h1 className="text-3xl md:text-5xl font-medium text-[#5e4b3c]">
                    OUR PASSION,
                    <br />
                    <span className={`text-5xl md:text-7xl ${styles.heading}`}>
                        YOUR PERFECTION
                    </span>

                </h1>
                <p className="mt-4 text-sm md:text-base text-left text-gray-700 max-w-md">
                    Delicate in every step of treatment for your PERFECTION.
                </p>
            </div>

        </div>
    );
}

export default Testimonials;
