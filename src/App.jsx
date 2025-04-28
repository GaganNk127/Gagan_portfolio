import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Contact from "./components/Contact/Contact";
import LetterGlitch from "./components/LetterGlitch/LetterGlitch";
import BlurText from "./components/BlurText/BlurText";
const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="app" id={`${theme}`}>
      <main>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        
        <BlurText
        text="Hey, I am Gagan Naik"
      delay={200}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="text-8xl mb-8"
      />
        <About />
        <div className="h-[400px]">
        <LetterGlitch/>
        </div>
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
