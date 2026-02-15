import React from 'react';
import supplify from "../assets/supplify.png"
import narrate from "../assets/narrate.png"
import medvault from "../assets/medvault.png"
import bizpulse from "../assets/bizpulse.png"
import sorosurance from "../assets/sorosurance.png"
import eduguard from "../assets/eduguard.png"
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


const Projects = ({darkMode}) => {
 
    const projects = [
        {
            id: 1,
            title: "Supplify",
            desc: "A smart supply management platform that helps businesses track inventory, reduce waste, and restock faster.",
            img: supplify,
            link: "https://supplify-steel.vercel.app/",
            code: "https://github.com/vivi123-pro/SUPPLIFY.git"
        },
        {
            id: 2,
            title: "Narrate",
            desc: "A storytelling platform that allows users to create and share interactive stories with multimedia elements.",
            img: narrate,
            link: "https://read-flow-nu.vercel.app/",
            code:"https://github.com/vivi123-pro/ReadFlow.git"
        },
        {
            id: 3,
            title: "EduGuard AI",
            desc: "EduGuard AI is an intelligent verification platform that checks the authenticity of academic results, scholarship letters, and other education-related documents to prevent fraud and ensure trust",
            img: eduguard,
            link: "https://edu-guard-ai.vercel.app/",
            code: "https://github.com/vivi123-pro/Edu-Guard-AI.git"
        },
        {
            id: 4,
            title: "BizPulse",
            desc: "A business analytics dashboard that provides real-time insights into key performance metrics, helping companies make data-driven decisions.",
            img: bizpulse,
            link: "https://biz-pulse.vercel.app/",
            code:"https://github.com/vivi123-pro/Biz-Pulse.git"
        },
        {
            id: 5,
            title: "Sorosurance",
            desc: "An AI-voice-powered insurance platform that offers personalized policy recommendations and streamlines the claims process for customers.",
            img: sorosurance,
            link: "https://sorosurance.vercel.app/"
        }

    ]

    return (
        <section id="projects"
        style={{
            backgroundColor: darkMode ? "#111827" : "#f9fafb",
        }}
        className="relative py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10"
                data-aos="fade-up">
                    <h1
                style={{
                    color: darkMode? "white" : "#1f2937"
                }}
                className="text-6xl font-bold mb-4">
                    My <span
                    style={{
                        background: "linear-gradient(90deg, #FFA726, #FFCA28)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        fontWeight: "bold"
                    }}>Projects</span></h1>
                    <p className="max-w-xl mx-auto"
                    style={{color: darkMode ? "#d1d5db" : "#6b7280"}}>Here are some of my recent projects.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <a href={project.link
                            } target="_blank" rel="noopener noreferrer"
                            key={project.id}
                            className={`rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
                                darkMode ? "bg-gray-800" : "bg-white"
                            }`}
                            data-aos="fade-up"
                            data-aos-delay={project.id * 100}
                            >
                                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2"
                                    style={{color: darkMode ? "white" : "#1f2937"}}>{project.title}</h3>
                                    <p className="text-gray-300"
                                    style={{color: darkMode ? "#d1d5db" : "#6b7280"}}>{project.desc}</p>
                                    <div className="flex gap-2">
                                        {project.code && (
                                            <a
                                            href={project.code}
                                            style={{
                                                backgroundColor: darkMode? "#374151" : "#f3f4f6",
                                                color: darkMode ? "white" : "#374151"
                                            }}
                                            className="flex-1 flex items-center justify-center gap-1.5
                                            px-3 py-2 text-base rounded-lg hover:opacity-90 transition-colors"
                                            data-aos="zoom-in"
                                            data-aos-delay="300">
                                                <FaGithub className="text-md"/>
                                                <span>Code</span>
                                            </a>
                                        )}
                                         <a
                                        href={project.link}
                                        style={{
                                            backgroundImage: "linear-gradient(to right, #f97316, #f59e0b)",
                                            color: darkMode ? "white" : "#374151"
                                        }}
                                        className="flex-1 flex items-center justify-center gap-1.5
                                        px-3 py-2 text-base rounded-lg hover:opacity-90 transition-colors"
                                        data-aos="zoom-in"
                                        data-aos-delay="300">
                                            <IoIosLink className="text-md"/>
                                            <span>Link</span>
                                        </a>

                                    </div>
                                </div>
                            </a>
                        ))
                            }
                    </div>
            </div>

        </section>
    )
}

export default Projects;