function Skills() {

  const skills = [
    "Business Analysis",
    "SQL",
    "React",
    "JavaScript",
    "Salesforce",
    "Jira",
    "Confluence",
    "Figma",
    "Excel",
    "Git",
    "HTML",
    "CSS",
    "Agile",
    "QA Testing",
    "Requirements Gathering",
    "Stakeholder Management"
  ];

  return (
    <section className="section">

      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;