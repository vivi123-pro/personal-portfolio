import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon,X, Menu } from "lucide-react";
const Navbar = ({darkMode, toggleDarkMode}) => {

    const [activeSession, setActiveSession] = useState('Home');
   const [isMenuOpen, setIsMenuOpen] = useState(false);


   const navItems = [
    {name: "Home", href:"#home"},
    {name: "About", href:"#about"},
    {name: "Skills", href:"#skills"},
    {name: "Projects", href:"#projects"},
    {name: "Contact", href:"#contact"},
   ]

    const lightColors = {
        navBg: "bg-gradient-to-br from-orange-200 to-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-800",
        textHover: "text-orange-500",
        textActive: "text-orange-600",
        indicator: "from-orange-500 to-orange-500",
        button: "from-orange-500 to-amber-500"
    };

    const darkColors = {
        navBg: "bg-gradient-to-br from-gray-700 to-black",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textHover: "text-orange-400",
        textActive: "text-orange-400",
        indicator: "from-orange-500 to-orange-500",
        button: "from-orange-500 to-amber-500"
    };

    const colors = darkMode ? darkColors : lightColors;

    const handleNavClick = (itemName) => {
        setActiveSession(itemName);
        setIsMenuOpen(false);
       }

 return (
    <>
    <div className="flex justify-center w-full fixed z-50 mt-4 mb-2">
        <motion.nav
        initial = {{y: -100}}
        animate ={{y : 0}}
        transition = {{duration: 1.0}}
        className={`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
        >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
            {/* logo */}

            <motion.a
            href="/"
            whileHover={{scale: 1.05}}
            className="flex items-center space-x-2"
            >
                <span 
                className={`text-2xl font-bold ${colors.textPrimary}`} 
                >Vivipro's Portfolio<span className="text-orange-400">.
                    </span></span>

            </motion.a>
            {/* nav items */}
            <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                    <a key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`relative ${colors.textSecondary}`}>
                        <motion.span
                        className={`font-medium transition-colors duration-300
                        ${
                            activeSession === item.name
                            ? colors.textActive
                            : `${colors.textSecondary} hover:text-orange-500`
                        }`}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}>
                        
                            {item.name}
                        </motion.span>
                        {(activeSession.toLowerCase() === item.name.toLowerCase()) && (
                            <motion.div
                            layoutId="navbar-indicator"
                            className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r rounded-full ${colors.indicator}`}
                            />
                        )}
                    </a>
                ))}
                </div>
                <div className="flex items-center space-x-2">

                    <motion.button
                    whileHover = {{scale: 1.1}}
                    whileTap = {{scale: 0.9}}
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-colors`}
                    aria-label={
                        darkMode ? "Switch to light mode" : "Switch to dark mode"
                    }>
                        {
                            darkMode ? (
                                <Sun className="w-5 h-5 text-yellow-300" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-800" />
                            )
                        }
                        
                    </motion.button>

                    {/* button for mobile menu */}
                    <motion.a
                    href="#contact"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    className={`lg:hidden px-3 py-2 rounded-md text-sm font-medium bg-gradient-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow duration-300`}>
                        Hire Me
                    </motion.a>

                </div>

                {/* mobile menu */}

                <div className="flex lg:hidden items-center space-x-4 px-2">
                    <motion.button
                    whileTap={{scale: 0.9}}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 rounded-lg ${darkMode
                    ? "bg-gray-700"
                    : "bg-gray-200"
                    }`}>
                        {
                            isMenuOpen ? (
                                <X className={`w-5 h-5 ${darkMode
                                    ? 'text-white':
                                    "text-gray-700"
                                }`}/>
                            ) : (
                                <Menu className={`w-5 h-5 ${darkMode
                                    ? 'text-white':
                                    "text-gray-700"
                                }`}/>
                            )
                        }

                    </motion.button>

                </div>
        </div>
        {
            isMenuOpen && (
                <motion.div
                initial ={{opacity: 0, height: 0}}
                animate ={{opacity: 1, height: "auto"}}
                exit={{opacity: 0, height: 0}}
                transition={{ duration: 0.3}}
                className={`absolute top-full left-0 right-0 mt-2 lg:hidden
                ${
                    darkMode
                    ? "bg-gray-900/95"
                    :  "bg-white/95"
                }backdrop-blur-lg rounded-xl shadow-lg border ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                }`}>
                    <div className="px-4 py-3 space-y-2">
                        {
                            navItems.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                onClick={() => handleNavClick(item.name)}
                                className="block">
                                    <motion.div
                                    whileHover={{x: 5}}
                                    className={`py-3 px-4 rounded-lg text-center
                                    ${
                                        activeSession === item.name.toLowerCase()
                                        ? darkMode
                                        ? 'bg-gray-800':'bg-orange-50': ""
                                    }`}>
                                        <span
                                        className={`font-medium ${
                                            activeSession === item.name.toLowerCase()
                                            ? colors.textActive
                                            : colors.textSecondary
                                        }`}>
                                            {item.name}
                                        </span>

                                    </motion.div>

                                </a>
                            ))
                        }
                        <motion.a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        whileTap={{scale: 0.95}}
                        className={`block py-3 px-4 text-center font-semibold
                        rounded-lg bg-gradient-to-r ${colors.button} text-white shadow-md`}>
                                Hire Me
                        </motion.a>
                    </div>

                </motion.div>
            )
        }
        </motion.nav>
        </div>
        <div aria-hidden className="h-4 lg:h-16" />
    </>
    )
}

export default Navbar;