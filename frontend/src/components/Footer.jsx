import react from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";





const Footer = ( {darkMode}) => {
    const currentYear = new Date().getFullYear();


    return (
  <footer
  style={{
    background: darkMode ? "linear-linear(to bottom, #000000, #1118e7)"
                         : "linear-linear(to bottom, #f3f4f6, #e5e7eb)",
    borderColor: darkMode ? "#374151" : "#d1d5db"
  }}
  className="border-t">
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3
            classNmae="text-3xl font-bold mb-2 text-orange-500 dark:text-white"
            style={{
                background:"linear-linear(to right,#f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
            }}> Portfolio </h3>
            <p
            className="text-sm"
            style={{
                color: darkMode ? "#9ca3af" : "#6b7280"
            }}>
                Frontend Developer

            </p>

          </div>
          <div className="flex gap-4">
<a
href="https://github.com/vivi123-pro"
className="w-10 h-10 rounded-full flex items-center 
justify-center hover:scale-110 transition-all
hover:bg-gradient-to-r hover:from-orange-500
hover:to-amber-500  hover:text-white
bg-[#374151] dark:bg-[#f3f4f6]
text-white dark:text-white">
<FaGithub />
</a>
<a
href="https://linkedin.com/in/ogbonna-vivian-666a02223"
className="w-10 h-10 rounded-full flex items-center 
justify-center hover:scale-110 transition-all
hover:bg-gradient-to-r hover:from-orange-500
hover:to-amber-500  hover:text-white
bg-[#374151] dark:bg-[#f3f4f6]
text-white dark:text-white">
<FaLinkedin />
</a>
    <a
href="https://www.instagram.com/vivian__onyi54?igsh=OHAzamN5ZDZ6dG1u&utm_source=qr"
className="w-10 h-10 rounded-full flex items-center 
justify-center hover:scale-110 transition-all
hover:bg-gradient-to-r hover:from-orange-500
hover:to-amber-500  hover:text-white
bg-[#374151] dark:bg-[#f3f4f6]
text-white dark:text-white">
<FaInstagram />
</a>
          </div>
          <div className="text-center md:text-right">
           <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
            @ {currentYear} Made with <FaHeart className="text-red-500"/> by <span
            className="mt-1 text-[f97316]">Vivipro </span>
           </p>
          </div>
        </div>

    </div>

  </footer>
    )
}

export default Footer;