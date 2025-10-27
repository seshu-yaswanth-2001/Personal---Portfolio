import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import { useRef } from "react";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import { ThemeProvider } from "./context/ThemeContext";
import Projects from "./components/Projects/Projects";
import { Toaster } from "sonner";
import { useContext, useEffect } from "react";
import { NavContext } from "./context/NavContext";

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  const sectionRefs = [
    { name: "Home", ref: home },
    { name: "About", ref: about },
    { name: "Experience", ref: experience },
    { name: "Projects", ref: projects },
    { name: "Contact", ref: contact },
  ];

  const { setNavItemSelected } = useContext(NavContext);

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (const { name, ref } of sectionRefs) {
        const elem = ref.current;
        if (!elem) continue;
        const rect = elem.getBoundingClientRect();
        // Check if the section is near the top of the viewport
        if (rect.top <= 120 && rect.bottom > 120) {
          setNavItemSelected(name);
          found = true;
          break;
        }
      }
      // Optional: if no match, set to none
      if (!found) setNavItemSelected("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <ThemeProvider>
        <Navbar
          scrollToSection={scrollToSection}
          home={home}
          about={about}
          experience={experience}
          projects={projects}
          contact={contact}
        />
      </ThemeProvider>

      <div className="sections">
        <section className="home" id="home" ref={home}>
          <Home scrollToSection={scrollToSection} contact={contact} />
        </section>
        <div className="homeBraker" />
        <section className="about" id="about" ref={about}>
          <About />
        </section>
        <section className="experience" id="experience" ref={experience}>
          <Experience />
        </section>
        <section className="projects" id="testimonials" ref={projects}>
          <Projects />
        </section>
        <section className="contact" id="contact" ref={contact}>
          <Contact />
          <Toaster position="bottom-right" />
        </section>
      </div>
      <footer className="footer">
        <p>&copy; {year} Seshu Yaswanth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
