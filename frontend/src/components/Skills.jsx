import React from "react";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";









const Skills = ( {darkMode}) => {
    const skills = [
        { name: "JavaScript",  icon: IoLogoJavascript, level: 95, iconColor: "text-orange-500", progressColor: "from-orange-500 to-amber-500" },
        { name: "React", icon: FaReact, level: 95, iconColor: "text-cyan-500", progressColor: "from-cyan-500 to-blue-500" },
        { name: "Node.js", icon: IoLogoNodejs, level: 95, iconColor: "text-green-500", progressColor: "from-green-500 to-green-600" },
        { name: "Python", icon: FaPython, level: 90, iconColor: "text-yellow-500", progressColor: "from-yellow-500 to-yellow-600" },
        { name: "CSS", icon: FaCss3, level: 95, iconColor: "text-pink-500", progressColor: "from-pink-500 to-pink-600" },
        { name: "Git", icon: FaGit, level: 95, iconColor: "text-gray-500", progressColor: "from-gray-500 to-gray-600" },
        { name: "TypeScript", icon: SiTypescript, level: 85, iconColor: "text-blue-500", progressColor: "from-blue-500 to-blue-600" },
        { name: "Tailwind CSS", icon: RiTailwindCssFill, level: 90, iconColor: "text-teal-500", progressColor: "from-teal-500 to-teal-600" },
        { name: "MongoDB", icon: SiMongodb, level: 85, iconColor: "text-green-500", progressColor: "from-green-500 to-green-600" },
    ];

    return (
        <section id="skills"
        style={{ background: darkMode ? "#111827" : "#f9fafb" }}
          className="py-14 relative overflow-hidden"
          >

                <div className="container px-5 py-14 mx-auto">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h1
                        className="sm:text-4xl text-3xl font-bold mb-4 title-font"
                        style={{ color: darkMode ? "#f9fafb" : "#111827" }}>
                               My <span className="text-orange-500">Skills</span>
                        </h1>
                          <p
                          className="text-lg max-w-2xl mx-auto leading-relaxed"
                          style={{
                            color: darkMode ? "#d1d5db" : "#4b5563"
                          }}>
                                  My skill set spans frontend development, backend fundamentals, and UI/UX design, allowing me to 
                                  build visually appealing and functional digital products. 
                                  I work confidently with technologies like React, JavaScript, HTML, CSS, Node.js, and Git, and 
                                  I enjoy transforming design concepts into responsive, high-performing interfaces.
                                   I’m highly adaptable, quick to learn new tools, and focused on 
                                   creating scalable, efficient, and user-centered solutions.
                          </p>
                    </div>
                    <div
                    className="flex flex-wrap m-4"
                    data-aos="fade-up"
                    data-aos-delay="200">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="p-4 lg:w-1/4 md:w-1/2 w-full"
                                data-aos="fade-up"
                                data-aos-delay={`${300 + index * 100}`}
                            >
                                <div
                                    style={{
                                        background: darkMode ? "linear-gradient(to bottom right, #1f2937, #111827)" : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                                        borderColor: darkMode ? "#374151" : "#d1d5db"
                                    }}
                                    className="w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                >
                                    <skill.icon className={`text-2xl ${skill.iconColor}`} />
                                </div>
                                <h3 className="text-lg font-semibold mt-2" style={{ color: darkMode ? "#f9fafb" : "#111827" }}>{skill.name}</h3>

                                <div className="flex items-center justify-between mt-2">
                                    <span className="font-medium" style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}>Proficiency</span>
                                    <span
                                        style={{
                                            background: "linear-gradient(to right, #f97316, #f59e0b)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent"
                                        }}
                                        className="font-bold"
                                    >
                                        {skill.level}%
                                    </span>
                                </div>
                                <div
                                    className="w-full rounded-full h-3 overflow-hidden mt-1"
                                    style={{
                                        backgroundColor: darkMode ? "#374151" : "#d1d5db"
                                    }}
                                >
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.progressColor} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
          
        </section>
    )
}

export default Skills;