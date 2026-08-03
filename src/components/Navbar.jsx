import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
      >
        Kavindi<span>.</span>
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>

        <a
          href="#about"
          className={active === "about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#experience"
          className={active === "experience" ? "active" : ""}
          onClick={closeMenu}
        >
          Experience
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>

        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-mobile"
          onClick={closeMenu}
        >
          Resume
        </a>

      </nav>

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        Resume
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

    </header>
  );
}

export default Navbar;