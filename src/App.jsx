import React, { useEffect, useRef, useState } from "react";

const TOKENS = {
  ink: "#0E1A24",
  ink2: "#132433",
  ink3: "#182C3D",
  line: "#2B4459",
  lineFaint: "#1D3345",
  paper: "#EAF1F5",
  muted: "#7E97A6",
  mutedDim: "#5A6E7A",
  amber: "#E8A94C",
  green: "#6FCF97",
  coral: "#E2725B",
};

const SKILL_GROUPS = [
  {
    label: "Business & CRM",
    color: TOKENS.amber,
    items: [
      "Salesforce CRM",
      "Customer Relationship Management",
      "Business Development",
      "Stakeholder Engagement",
      "Requirements Gathering",
    ],
  },
  {
    label: "Tools",
    color: TOKENS.green,
    items: ["Jira", "Confluence", "Figma", "Microsoft Excel", "Google Sheets"],
  },
  {
    label: "Data & Reporting",
    color: "#7FB3E8",
    items: ["SQL", "Data Analysis", "Reporting", "QA Testing", "Data Integrity"],
  },
  {
    label: "Professional Skills",
    color: TOKENS.coral,
    items: [
      "Cross-functional Collaboration",
      "Presentation Skills",
      "Communication",
      "Relationship Building",
    ],
  },
];

const EXPERIENCE = [
  {
    id: "HAYCARB-01",
    title: "Operations Intern",
    org: "Haycarb USA",
    place: "Pittsburgh, United States",
    date: "Jun 2025 — Jul 2025",
    status: "DONE",
    bullets: [
      "Collaborated with cross-functional teams to improve operational reporting and support business decision-making.",
      "Reduced process documentation gaps by coordinating scope definition and requirement capture across production and logistics teams, translating operational pain points into structured improvement recommendations.",
      "Supported project coordination activities by tracking deliverables and timelines across cross-functional teams, ensuring data consistency across reporting cycles.",
    ],
    labels: ["Process Docs", "Cross-functional"],
  },
  {
    id: "MARKETRIX-01",
    title: "Junior Data Analyst — AI Product QA & Validation",
    org: "Marketrix AI",
    place: "San Francisco, CA (Remote)",
    date: "Jan 2024 — Feb 2024",
    status: "DONE",
    bullets: [
      "Supported testing and validation of Marketrix AI, an AI-powered platform for autonomous software testing and user simulation, by executing functional and user acceptance testing (UAT).",
      "Collaborated with product and engineering teams to document defects, validate fixes, and improve software quality throughout the development lifecycle.",
      "Produced QA documentation, test cases, and testing reports to support product releases and continuous improvement.",
    ],
    labels: ["UAT", "QA Docs"],
  },
  {
    id: "NDI-01",
    title: "Junior Consultant",
    org: "National Democratic Institute",
    place: "Colombo, Sri Lanka",
    date: "Feb 2023 — Jun 2023",
    status: "DONE",
    bullets: [
      "Improved project delivery timeliness by coordinating administrative workflows and maintaining structured documentation across multi-team programmes, supporting accurate financial reporting, fund tracking, and audit-ready record management.",
      "Reduced reporting errors by implementing consistent internal documentation standards, ensuring audit-ready records across program delivery cycles.",
    ],
    labels: ["Documentation", "Audit-ready"],
  },
];

const PROJECTS = [
  {
    id: "PROJ-BREWHUB",
    title: "BrewHub Inventory & Order Management System",
    org: "Monash University",
    bullets: [
      "Delivered a fully documented system design by leading requirements gathering, producing UML diagrams, ERDs and user stories for an inventory and order management system within an Agile team.",
      "Accelerated stakeholder alignment by designing Figma UI prototypes, reducing ambiguity between business requirements and technical implementation.",
    ],
    labels: ["ERD", "UML", "Agile"],
  },
  {
    id: "PROJ-CHATBOT",
    title: "Monash Innovation Guarantee Chatbot Project",
    org: "OurVoice Australia",
    bullets: [
      "Delivered an AI-powered chatbot prototype for civic engagement by conducting stakeholder interviews, user journey mapping and cross-functional collaboration across a university-industry partnership.",
      "Strengthened solution quality by presenting the final prototype to an industry partner, incorporating feedback through iterative refinement cycles.",
    ],
    labels: ["User Journeys", "Prototyping"],
  },
  {
    id: "PROJ-COURIER",
    title: "Courier Tracking & Operations System",
    org: "Impeccable Couriers — Monash University",
    bullets: [
      "Reduced operational ambiguity in logistics tracking by gathering and documenting business requirements and producing UML diagrams, process flows and functional specifications.",
      "Validated system design by presenting the courier tracking solution to an industry expo panel, incorporating guest feedback to refine functional specifications.",
    ],
    labels: ["Process Flows", "Spec Docs"],
  },
];

const CERTS = [
  { name: "Salesforce Certified Platform Foundations", year: "2025", status: "PASS" },
  { name: "Salesforce Platform Administrator Certification", year: "Expected Aug 2026", status: "IN PROGRESS" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function CornerMarks() {
  return (
    <>
      <span className="crop crop-tl" />
      <span className="crop crop-tr" />
      <span className="crop crop-bl" />
      <span className="crop crop-br" />
    </>
  );
}

function SectionHeader({ eyebrow, title }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`sec-head ${visible ? "in" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="sec-title">{title}</h2>
      <div className="rule" />
    </div>
  );
}

function StatusPill({ status }) {
  const isDone = status === "DONE" || status === "PASS";
  const isProgress = status === "IN PROGRESS";
  const color = isDone ? TOKENS.green : isProgress ? TOKENS.amber : TOKENS.muted;
  return (
    <span className="pill" style={{ borderColor: color, color }}>
      <svg width="8" height="8" viewBox="0 0 8 8" style={{ marginRight: 6 }}>
        <circle cx="4" cy="4" r="4" fill={color} />
      </svg>
      {status}
    </span>
  );
}

function TicketCard({ item }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`ticket ${visible ? "in" : ""}`}>
      <div className="ticket-top">
        <span className="ticket-id">{item.id}</span>
        <StatusPill status={item.status || "DONE"} />
      </div>
      <h3 className="ticket-title">{item.title}</h3>
      <p className="ticket-sub">
        {item.org}
        {item.place ? <> · {item.place}</> : null}
        {item.date ? <span className="ticket-date"> · {item.date}</span> : null}
      </p>
      <ul className="ticket-bullets">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {item.labels && (
        <div className="ticket-labels">
          {item.labels.map((l) => (
            <span key={l} className="label-chip">
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function HeroDiagram() {
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 300);
    return () => clearTimeout(t);
  }, []);
  const nodes = [
    { label: "Business Analysis", x: 430, y: 40, color: TOKENS.amber },
    { label: "QA & Testing", x: 470, y: 150, color: TOKENS.green },
    { label: "Salesforce Admin", x: 430, y: 260, color: "#7FB3E8" },
    { label: "Data & SQL", x: 300, y: 300, color: TOKENS.coral },
  ];
  const cx = 150,
    cy = 150;
  return (
    <svg
      viewBox="0 0 560 340"
      className={`hero-diagram ${drawn ? "drawn" : ""}`}
      role="img"
      aria-label="Diagram connecting Kavindi to her core skill areas"
    >
      {nodes.map((n, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke={TOKENS.line}
          strokeWidth="1.5"
          className="conn-line"
          style={{ transitionDelay: `${i * 120 + 100}ms` }}
        />
      ))}
      <g>
        <circle cx={cx} cy={cy} r="54" fill={TOKENS.ink2} stroke={TOKENS.amber} strokeWidth="1.5" />
        <text x={cx} y={cy - 4} textAnchor="middle" className="node-init">
          KK
        </text>
        <text x={cx} y={cy + 16} textAnchor="middle" className="node-sub">
          Pittsburgh, PA
        </text>
      </g>
      {nodes.map((n, i) => (
        <g key={n.label} className="skill-node" style={{ transitionDelay: `${i * 120 + 260}ms` }}>
          <circle cx={n.x} cy={n.y} r="6" fill={TOKENS.ink} stroke={n.color} strokeWidth="2" />
          <text
            x={n.x + (n.x > cx ? 14 : -14)}
            y={n.y + 4}
            textAnchor={n.x > cx ? "start" : "end"}
            className="node-label"
            fill={n.color}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function App() {
  const [navSolid, setNavSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["overview", "Overview"],
    ["skills", "Skills"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["credentials", "Credentials"],
    ["contact", "Contact"],
  ];

  return (
    <div className="kk-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        .kk-root {
          --ink: ${TOKENS.ink};
          background: var(--ink);
          color: ${TOKENS.paper};
          font-family: 'IBM Plex Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
          line-height: 1.6;
          min-height: 100vh;
        }
        .kk-root * { box-sizing: border-box; }

        .bp-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(${TOKENS.lineFaint} 1px, transparent 1px),
            linear-gradient(90deg, ${TOKENS.lineFaint} 1px, transparent 1px);
          background-size: 44px 44px;
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }

        .crop { position: fixed; width: 18px; height: 18px; z-index: 3; opacity: 0.5; pointer-events: none; }
        .crop::before, .crop::after { content: ""; position: absolute; background: ${TOKENS.amber}; }
        .crop-tl { top: 14px; left: 14px; }
        .crop-tr { top: 14px; right: 14px; }
        .crop-bl { bottom: 14px; left: 14px; }
        .crop-br { bottom: 14px; right: 14px; }
        .crop-tl::before, .crop-bl::before { width: 1px; height: 18px; left: 0; }
        .crop-tl::after, .crop-tr::after { width: 18px; height: 1px; top: 0; }
        .crop-tr::before, .crop-br::before { width: 1px; height: 18px; right: 0; }
        .crop-bl::after, .crop-br::after { width: 18px; height: 1px; bottom: 0; }
        .crop-tl::after { left: 0; }
        .crop-tr::before { right: 0; }
        .crop-bl::before { left: 0; }
        .crop-br::before { right: 0; }

        .mono { font-family: 'IBM Plex Mono', monospace; }

        nav.topnav {
          position: sticky; top: 0; z-index: 20;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 40px;
          background: rgba(14, 26, 36, 0.7);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        nav.topnav.solid { border-bottom-color: ${TOKENS.line}; background: rgba(14, 26, 36, 0.92); }
        .brand-mark { font-family: 'IBM Plex Mono', monospace; font-size: 13px; letter-spacing: 0.08em; color: ${TOKENS.paper}; text-decoration: none; }
        .brand-mark span { color: ${TOKENS.amber}; }
        .nav-links { display: flex; gap: 28px; list-style: none; margin: 0; padding: 0; }
        .nav-links a {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
          color: ${TOKENS.muted}; text-decoration: none; transition: color 0.2s;
        }
        .nav-links a:hover { color: ${TOKENS.amber}; }
        @media (max-width: 820px) { .nav-links { display: none; } }

        section { position: relative; z-index: 1; padding: 96px 40px; max-width: 980px; margin: 0 auto; }
        @media (max-width: 640px) { section { padding: 64px 22px; } }

        .hero-sec { padding-top: 64px; padding-bottom: 64px; position: relative; }
        .hero-inner { display: grid; grid-template-columns: 1.1fr 1fr; gap: 32px; align-items: center; }
        @media (max-width: 900px) { .hero-inner { grid-template-columns: 1fr; } }

        .kicker {
          font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: ${TOKENS.amber};
          letter-spacing: 0.12em; text-transform: uppercase; display: flex; align-items: center; gap: 10px;
        }
        .kicker::before { content: ""; width: 22px; height: 1px; background: ${TOKENS.amber}; display: inline-block; }
        h1.name {
          font-family: 'IBM Plex Mono', monospace; font-weight: 600;
          font-size: clamp(34px, 5vw, 52px); line-height: 1.08; margin: 18px 0 10px; letter-spacing: -0.01em;
        }
        .role-line { font-size: 17px; color: ${TOKENS.muted}; margin: 0 0 22px; max-width: 46ch; }
        .meta-row { display: flex; flex-wrap: wrap; gap: 10px 18px; font-size: 13px; color: ${TOKENS.mutedDim}; font-family: 'IBM Plex Mono', monospace; margin-bottom: 30px; }
        .meta-row .ok { color: ${TOKENS.green}; }
        .cta-row { display: flex; flex-wrap: wrap; gap: 12px; }
        .btn {
          font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; letter-spacing: 0.03em;
          padding: 12px 20px; border-radius: 3px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
        }
        .btn-primary { background: ${TOKENS.amber}; color: ${TOKENS.ink}; font-weight: 600; }
        .btn-primary:hover { transform: translateY(-2px); }
        .btn-ghost { border: 1px solid ${TOKENS.line}; color: ${TOKENS.paper}; }
        .btn-ghost:hover { border-color: ${TOKENS.amber}; color: ${TOKENS.amber}; transform: translateY(-2px); }

        .hero-diagram { width: 100%; height: auto; overflow: visible; }
        .conn-line { stroke-dasharray: 260; stroke-dashoffset: 260; transition: stroke-dashoffset 0.9s ease; }
        .hero-diagram.drawn .conn-line { stroke-dashoffset: 0; }
        .skill-node { opacity: 0; transform: translateY(6px); transition: opacity 0.5s ease, transform 0.5s ease; }
        .hero-diagram.drawn .skill-node { opacity: 1; transform: translateY(0); }
        .node-init { font-family: 'IBM Plex Mono', monospace; font-size: 22px; font-weight: 600; fill: ${TOKENS.paper}; }
        .node-sub { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: ${TOKENS.muted}; letter-spacing: 0.05em; }
        .node-label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; }

        .sec-head { margin-bottom: 40px; opacity: 0; transform: translateY(14px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .sec-head.in { opacity: 1; transform: translateY(0); }
        .eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: ${TOKENS.amber}; }
        .sec-title { font-family: 'IBM Plex Mono', monospace; font-size: clamp(22px, 3vw, 30px); margin: 10px 0 16px; font-weight: 600; }
        .rule { height: 1px; background: linear-gradient(90deg, ${TOKENS.line}, transparent); }

        .ticket-card-intro {
          border: 1px solid ${TOKENS.line}; background: ${TOKENS.ink2}; border-radius: 4px; padding: 26px 28px; position: relative;
        }
        .ticket-card-intro::before {
          content: "PORTFOLIO-001"; position: absolute; top: -11px; left: 24px; background: ${TOKENS.ink};
          padding: 0 8px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: ${TOKENS.muted};
        }
        .summary-text { color: ${TOKENS.paper}; font-size: 15.5px; margin: 6px 0 0; }
        .summary-text .hl { color: ${TOKENS.amber}; }

        .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; margin-top: 8px; }
        @media (max-width: 720px) { .skills-grid { grid-template-columns: 1fr; } }
        .skill-group { border-left: 2px solid var(--gcolor); padding-left: 16px; }
        .skill-group-label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.06em; color: var(--gcolor); margin-bottom: 12px; text-transform: uppercase; }
        .chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          font-size: 12.5px; padding: 6px 12px; border-radius: 20px; border: 1px solid ${TOKENS.line};
          color: ${TOKENS.paper}; background: ${TOKENS.ink2};
        }

        .ticket-list { display: flex; flex-direction: column; gap: 18px; }
        .ticket {
          border: 1px solid ${TOKENS.line}; background: ${TOKENS.ink2}; border-radius: 4px; padding: 22px 26px;
          opacity: 0; transform: translateY(16px); transition: opacity 0.55s ease, transform 0.55s ease, border-color 0.2s ease;
        }
        .ticket.in { opacity: 1; transform: translateY(0); }
        .ticket:hover { border-color: ${TOKENS.amber}44; }
        .ticket-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .ticket-id { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: ${TOKENS.muted}; letter-spacing: 0.04em; }
        .pill {
          font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.06em; border: 1px solid;
          padding: 3px 10px; border-radius: 20px; display: inline-flex; align-items: center;
        }
        .ticket-title { font-size: 17px; margin: 4px 0 4px; font-weight: 600; color: ${TOKENS.paper}; }
        .ticket-sub { font-size: 13px; color: ${TOKENS.muted}; margin: 0 0 14px; }
        .ticket-date { color: ${TOKENS.mutedDim}; }
        .ticket-bullets { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; }
        .ticket-bullets li { font-size: 14px; color: #C7D6DE; }
        .ticket-labels { display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; }
        .label-chip {
          font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; padding: 3px 9px; border-radius: 3px;
          background: ${TOKENS.ink3}; color: ${TOKENS.muted}; border: 1px solid ${TOKENS.line};
        }

        .cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        @media (max-width: 640px) { .cert-grid { grid-template-columns: 1fr; } }
        .cert-card {
          border: 1px solid ${TOKENS.line}; background: ${TOKENS.ink2}; border-radius: 4px; padding: 22px;
          display: flex; align-items: flex-start; justify-content: space-between; gap: 14px;
        }
        .cert-name { font-size: 14.5px; color: ${TOKENS.paper}; margin: 0 0 6px; font-weight: 500; }
        .cert-year { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: ${TOKENS.mutedDim}; }
        .stamp {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
          border: 2px solid; border-radius: 3px; padding: 5px 10px; white-space: nowrap; transform: rotate(-4deg);
        }
        .stamp.pass { color: ${TOKENS.green}; border-color: ${TOKENS.green}; }
        .stamp.progress { color: ${TOKENS.amber}; border-color: ${TOKENS.amber}; }

        .edu-card {
          border: 1px solid ${TOKENS.line}; background: ${TOKENS.ink2}; border-radius: 4px; padding: 24px 26px; margin-top: 18px;
        }
        .edu-title { font-size: 16px; font-weight: 600; margin: 0 0 4px; }
        .edu-sub { font-size: 13.5px; color: ${TOKENS.muted}; margin: 0; }
        .edu-wam { font-family: 'IBM Plex Mono', monospace; color: ${TOKENS.amber}; }

        footer.contact-sec {
          border-top: 1px solid ${TOKENS.line}; text-align: center; padding: 80px 24px;
        }
        .contact-title { font-family: 'IBM Plex Mono', monospace; font-size: clamp(22px, 4vw, 34px); margin-bottom: 14px; }
        .contact-sub { color: ${TOKENS.muted}; max-width: 44ch; margin: 0 auto 30px; }
        .contact-links { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .foot-note { margin-top: 50px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: ${TOKENS.mutedDim}; }
      `}</style>

      <div className="bp-grid" />
      <CornerMarks />

      <nav className={`topnav ${navSolid ? "solid" : ""}`}>
        <a href="#top" className="brand-mark">
          KK<span>.</span>SYS
        </a>
        <ul className="nav-links">
          {nav.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="top" className="hero-sec">
        <div className="hero-inner">
          <div>
            <span className="kicker">Business Systems · QA · Salesforce</span>
            <h1 className="name">Kavindi Karunaratne</h1>
            <p className="role-line">
              Business Analysis, QA testing, and Salesforce systems — turning ambiguous
              requirements into documented, working processes.
            </p>
            <div className="meta-row">
              <span>Pittsburgh, PA</span>
              <span>·</span>
              <span className="ok">✓ US Permanent Resident</span>
              <span>·</span>
              <span>No sponsorship required</span>
            </div>
            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:kavindi.k2003@gmail.com">
                Email me
              </a>
              
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/kavindi-karunaratne-a598a9290/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn btn-ghost" href="#experience">
                View experience
              </a>
            </div>
          </div>
          <HeroDiagram />
        </div>
      </section>

      <section id="overview">
        <SectionHeader eyebrow="Fig. 01 — Overview" title="Professional summary" />
        <div className="ticket-card-intro">
          <p className="summary-text">
            Recent <span className="hl">Bachelor of Information Technology</span> graduate
            specializing in Business Information Systems, with experience across IT operations,
            business analysis, software testing, data reporting, and project coordination.
            Skilled in gathering requirements, documenting processes, and running UAT and QA
            cycles alongside technical and non-technical stakeholders. Proficient in{" "}
            <span className="hl">Jira, Confluence, SQL, Salesforce, Excel, and Figma</span>,
            with strong communication and organizational instincts. Seeking an entry-level role
            in IT support, business systems, technology operations, application support, or
            business analysis.
          </p>
        </div>
      </section>

      <section id="skills">
        <SectionHeader eyebrow="Fig. 02 — Schema" title="Skills & tools" />
        <div className="skills-grid">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label} className="skill-group" style={{ "--gcolor": g.color }}>
              <div className="skill-group-label">{g.label}</div>
              <div className="chip-row">
                {g.items.map((it) => (
                  <span className="chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <SectionHeader eyebrow="Fig. 03 — Backlog" title="Professional experience" />
        <div className="ticket-list">
          {EXPERIENCE.map((e) => (
            <TicketCard key={e.id} item={e} />
          ))}
        </div>
      </section>

      <section id="projects">
        <SectionHeader eyebrow="Fig. 04 — Epics" title="Project experience" />
        <div className="ticket-list">
          {PROJECTS.map((p) => (
            <TicketCard key={p.id} item={{ ...p, status: "DONE" }} />
          ))}
        </div>
      </section>

      <section id="credentials">
        <SectionHeader eyebrow="Fig. 05 — Test results" title="Certifications & education" />
        <div className="cert-grid">
          {CERTS.map((c) => (
            <div className="cert-card" key={c.name}>
              <div>
                <p className="cert-name">{c.name}</p>
                <span className="cert-year">{c.year}</span>
              </div>
              <span className={`stamp ${c.status === "PASS" ? "pass" : "progress"}`}>
                {c.status === "PASS" ? "✓ PASS" : "IN PROGRESS"}
              </span>
            </div>
          ))}
        </div>
        <div className="edu-card">
          <p className="edu-title">Bachelor of Information Technology (Business Information Systems)</p>
          <p className="edu-sub">
            Monash University Australia · July 2023 – June 2026 ·{" "}
            <span className="edu-wam">WAM 70.1/100 (Distinction)</span>
          </p>
          <p className="edu-sub" style={{ marginTop: 8 }}>
            CIE A-Levels — Psychology, Mathematics, Information Technology
          </p>
        </div>
      </section>

      <footer id="contact" className="contact-sec">
        <p className="contact-title">Let's build something documented.</p>
        <p className="contact-sub">
          Open to entry-level Business Analyst, QA Analyst, Business Systems Analyst, and
          Salesforce Administrator roles. Reach out any time.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href="mailto:kavindi.k2003@gmail.com">
            kavindi.k2003@gmail.com
          </a>
          <a className="btn btn-ghost" href="tel:+14128803097">
            +1 412 880 3097
          </a>
          
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/kavindi-karunaratne-a598a9290/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <p className="foot-note">STATUS: OPEN FOR OPPORTUNITIES · LAST UPDATED 2026</p>
      </footer>
    </div>
  );
}
