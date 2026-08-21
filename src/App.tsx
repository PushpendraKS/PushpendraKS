import { useState, useEffect } from "react";

import Nav from "./components/navigation";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/educations";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SectionTracker from "./analytics/sectionTracker";


const useTheme = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: light)")
      .matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

const useScrollSpy = (ids: string[]) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}


const App = () => {
  const active = useScrollSpy([
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "certifications",
    "contact",
  ]);
  const { dark, toggle } = useTheme();

  return (
    <div className="bg-background text-foreground min-h-screen [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <SectionTracker/>
      <Nav active={active} dark={dark} onToggle={toggle} />
      <Home dark={dark} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;