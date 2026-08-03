const base = import.meta.env.BASE_URL;

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
          Recent Bachelor of Information Technology graduate specializing in
          Business Information Systems with experience in business analysis,
          technology consulting, QA testing, stakeholder collaboration, and
          operations. I enjoy transforming business problems into practical,
          user-focused technology solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a
            href={`${base}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={`${base}profile.jpg`}
          alt="Kavindi Karunaratne"
          className="profile-image"
        />
      </div>
    </section>
  );
}

export default Hero;