
import React from 'react';
import { ContactIcon } from "lucide-react";
import laptop from "../assets/laptop.jfif"

const About = ({ darkMode }) => {
    return (
        <section
            id="about"
            className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
                darkMode ? 'bg-gray-900' : 'bg-gray-50'
            }`}
        >
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
                >
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                        <div
                            className="absolute -inset-4 lg:-inset-20 bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b] z-0"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            aria-hidden="true"
                        />
                        <img
                            src= {laptop}
                            alt="About Image"
                            className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        />
                    </div>
                </figure>

                <div className="order-1 lg:order-2 text-center lg:text-left">
                    <header>
                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent 
                        bg-gradient-to-r from-orange-400 to orange-600 bg-clip-text`}
                        data-aos="fade-up"
                        data-aos-delay="400">
                        About Me
                    </h1>
                    </header>
                    <p className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8
                        leading-relaxed bg-gradient-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6
                        rounded-xl sm:rounded-2xl backdrop-blur-sm
                        ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        data-aos="fade-up"
                        data-aos-delay="500">
                      I’m a software developer focused on creating modern, interactive, and scalable web applications. 
                      I love building products that combine great design with solid functionality, and I’m driven by curiosity, innovation, and problem-solving.
                    Whether I’m working on personal projects or collaborating on larger ideas, 
             I aim to create meaningful digital experiences that make life easier and more enjoyable.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4
                    sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                        <div
                        className='text-center'
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        ><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                            5+
                        </div>
                        <div className={`text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Education
                        </div>

                        </div>
                          <div
                        className='text-center'
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        ><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                            2+
                        </div>
                        <div className={`text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Years of Experience
                        </div>

                        </div>
                          <div
                        className='text-center'
                        data-aos="zoom-in"
                        data-aos-delay="700"
                        ><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                            20+
                        </div>
                        <div className={`text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Education
                        </div>

                        </div>
                    </div>
                      
          {/* <button className={`w-full sm:w-auto border-2 border-orange-500
            inline-flex items-center justify-center py-2 px-4 sm:px-6
            hover:shadow-[0_4px_15px_rgba(255,165,0,0.4)] rounded-full text-base sm:text-lg font-semibold
            transition-all duration-300 transform ${darkMode ? 'text-white bg-orange-500/10' : 'text-gray-800 b-white/90'}`}
            data-aos="fade-up" 
            data-aos-delay="800"
            >
                                                Learn More
                                            </button> */}
                                        
                </div>
            </div>
        </section>
    );
};

export default About;