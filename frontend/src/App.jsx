import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Footer from "./components/Footer"


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
    document.documentElement.classList.add("dark")
  }, [])

  useEffect(() => {
    AOS.refresh();
  }, [darkMode])
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
  }
  return (
    <div className={
      darkMode 
      ? "bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-700 min-h-screen":
      "bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen"
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode}/>
      

    </div>
  )
}

export default App;