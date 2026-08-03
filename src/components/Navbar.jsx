import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      <div className="logo">
        Kavindi<span>.</span>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

      <a
        className="resume-btn"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </header>
  );
}

export default Navbar;