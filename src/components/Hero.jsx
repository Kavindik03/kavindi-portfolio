import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-intro">
          BUSINESS ANALYST • TECHNOLOGY CONSULTANT
        </p>

        <h1>
          Hi, I'm <span>Kavindi Karunaratne</span>
        </h1>

        <h2>
          Business Information Systems Graduate
        </h2>

        <p className="hero-description">
          I help organisations solve business problems through technology,
          stakeholder collaboration and data-driven decision making.
          My passion lies in transforming business requirements into
          practical, user-focused digital solutions.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            Explore Projects
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            Resume
          </a>

        </div>

        <div className="hero-metrics">

          <div className="metric-card">
            <h3>3+</h3>
            <span>Industry Projects</span>
          </div>

          <div className="metric-card">
            <h3>3</h3>
            <span>Professional Roles</span>
          </div>

          <div className="metric-card">
            <h3>Salesforce</h3>
            <span>Certified</span>
          </div>

          <div className="metric-card">
            <h3>Monash</h3>
            <span>Business Information Systems</span>
          </div>

        </div>

      </div>

      <div className="hero-image">

        <div className="image-wrapper">

          <img
            src={profile}
            alt="Kavindi Karunaratne"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;