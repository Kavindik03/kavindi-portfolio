function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          👋 Welcome to my portfolio
        </p>

        <h1>
          Hi, I'm <span>Kavindi Karunaratne</span>
        </h1>

        <h2>
          Business Information Systems Graduate
        </h2>

        <p className="hero-description">
          Recent Information Technology graduate specializing in Business
          Information Systems with experience in business analysis,
          technology consulting, QA testing, data reporting, and stakeholder
          collaboration. Passionate about solving business problems through
          technology and creating efficient, user-focused solutions.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Download Resume
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="/profile.jpg"
          alt="Kavindi Karunaratne"
          className="profile-image"
        />

      </div>

    </section>
  );
}

export default Hero;