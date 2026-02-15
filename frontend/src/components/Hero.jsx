import React from 'react';
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import tiktok from "../assets/tiktok.png";
import resume from "../assets/Revamped_Resume.docx?url";
import { DownloadIcon } from "lucide-react";
import { ContactIcon } from "lucide-react";
import hero from "../assets/hero.jpeg";
import laptop from "../assets/laptop.jfif"


const Hero = ({ darkMode }) => {
const socialIcons = [
    {icon: instagram, alt: "Instagram"},
    {icon: github, alt: "GitHub"},
    {icon: tiktok, alt: "TikTok"}
]

const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary: `text-white border-2 border-orange-500 
    hover:bg-orange-600`,
    decorativeCircle: "bg-orange-500 opacity-10"
}


const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary: `text-gray-800 border-2 border-orange-500 
    hover:bg-orange-500 hover:text-white`,
    decorativeCircle: "bg-orange-400 opacity-20"
}

const theme = darkMode ? darkTheme : lightTheme;


    return (
        <div className="relative overflow-hidden min-h-screen flex flex-col">
            <section
            id="home"
            data-aos="fade-up"
            data-aos-delay="250"
            className="body-font z-10">
                <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14">
                    <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center
                    lg:text-left mb-12 lg:mb-0">
                        <div className="flex justify-center lg:flex-start gap-4 sm:gap-6
                        mb-6 sm:mb-7 w-full">
                     {/* {socialIcons.map((social, index) => (
                        <a
                        key={index}
                        href="#"
                        target="_blank"
                        data-aos-delay={`${400 + index * 100}`}
                        className="transform hover:scale-110 transition duration-300"
                        ><img
                        src={social.icon}
                        alt={social.alt}
                        className={`w-8 h-8 sm:w-10 sm:h-10 object-contain
                        ${darkMode ? "" : "filter-brightness-700"}`}></img>

                        </a>
                     ))} */}

                        </div>
                        <h1
                        className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold
                        ${theme.textPrimary}`}
                        data-aos="fade-up"
                        data-aos-delay="500">
                             Hi, I'm Vivian
                        </h1>
                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                        data-aos="fade-up"
                        data-aos-delay="600">
                           Fast learning, UI obsessed Frontend Developer with hands on experience building responsive,
                            accessible, and user friendly applications across hackathons
                             and real world projects. Skilled in React, TailwindCSS, 
                             and API integration. Passionate about solving problems, 
                             simplifying user experiences, and shipping clean, modern interfaces.
                        </p>
                        {/*Buttons*/}

                        <div className="w-full pt-4 sm:pt-6">
                            <div className={`flex flex-col sm:flex-row justify-center lg:justify-start
                                gap-3 sm:gap-4`}
                                data-aos="fade-up"
                                data-aos-delay="700"
                                >
                                    <a href={resume} download className="w-full sm:w-auto">
                                        <button className="w-full sm:w-auto inline-flex items-center justify-center text-white
                                        bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8
                                        hover:shadow-[0_4px_15px_rgba(255,165,0,0.4)] rounded-lg text-lg font-medium transition-shadow duration-300">
                                            <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2"/>
                                            Download Resume
                                        </button> </a>
                                        <a href="#contact" className="w-full sm:w-auto">
                                            <button className={`w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondary} py-3 px-6 sm:px-8 rounded-lg text-lg font-medium transition-all duration-300`}>
                                                <ContactIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2"/>
                                                Contact Me
                                            </button>
                                        </a>
                                </div>

                        </div>

                    </div>
                    {/* Image */}
                    <div
                    className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:-mt-5 flex justify-center"
                    data-aos="fade-up"
                    data-aos-delay="800"
                    >
                        <div className="relative w-3/4 sm:w-3/5 lg:w-full">
                            <div className="relative overflow-hidden">
                                <img
                                src={hero}
                                alt="Hero Image"
                                className='w-[550px] h-[550px] object-cover transform hover:scale-105
                                transition-transform duration-500'/>
                            </div>
                            <div className={`absolute -top-20 -left-[800px] h-20 w-20 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full
                            mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`}></div>
                        </div>
                    </div>
                   
                </div>
                

            </section>
        </div>
    )
}

export default Hero;
