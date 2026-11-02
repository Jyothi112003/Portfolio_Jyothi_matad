import { useState } from 'react';
import { portfolio } from './data';

const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Back to top">JM<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="availability" href={`mailto:${portfolio.email}`}><i /> Available for opportunities</a>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / 2026</p>
            <p className="name-highlight">{portfolio.name}</p>
            <h1>Building useful<br /><em>intelligence.</em></h1>
            <p className="hero-intro">{portfolio.bio}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href={`mailto:${portfolio.email}`}>Let&apos;s talk <Arrow /></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img src={portfolio.photo} alt={`${portfolio.name} portrait`} onError={(event) => { event.currentTarget.style.display = 'none'; }} />
              <span className="portrait-fallback">JM</span>
            </div>
            <p className="portrait-caption">AI / ML engineer<br />curious by default</p>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of expertise">
          <span>Machine learning</span><b>✳</b><span>Generative AI</span><b>✳</b><span>Data products</span><b>✳</b><span>Human-centred tech</span><b>✳</b>
        </div>

        <section className="about section-grid" id="about">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-content">
            <h2>Making complex systems feel <em>simple.</em></h2>
            <p>I&apos;m an AI/ML engineer focused on turning messy data and ambitious ideas into products people can actually use. From RAG chatbots to video intelligence platforms, I enjoy going from first experiment to a dependable API.</p>
            <div className="stats">{portfolio.stats.filter(([, label]) => label === 'CGPA').map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-heading section-grid"><div className="section-label"><span>02</span><span>Selected work</span></div><p>Selected experiments, shipped ideas,<br />and problems worth solving.</p></div>
          <div className="project-list">{portfolio.projects.map((project) => (
            <a className="project-card" href={project.link} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <span className="project-arrow"><Arrow /></span>
            </a>
          ))}</div>
        </section>

        <section className="experience section-grid" id="journal">
          <div className="section-label"><span>03</span><span>Experience</span></div>
          <div className="timeline">{portfolio.experience.map((item) => <article className="timeline-item" key={item.period}><p className="period">{item.period}</p><div><h3>{item.title}</h3><p className="company">{item.company}</p><p>{item.detail}</p></div></article>)}</div>
        </section>

        <section className="journal-grid section-grid">
          <div className="section-label"><span>04</span><span>Toolkit & learning</span></div>
          <div className="toolkit"><div><h2>My current <em>toolkit.</em></h2><div className="skill-cloud">{portfolio.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="certificates"><h3>Certifications</h3>{portfolio.certifications.map((certificate) => <p key={certificate}><span>↳</span>{certificate}</p>)}</div></div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Have a problem worth solving?</p><h2>Let&apos;s make something<br /><em>remarkable.</em></h2>
          <a className="button button-light" href={`mailto:${portfolio.email}`}>Start a conversation <Arrow /></a>
          <div className="contact-meta"><span>{portfolio.location}</span><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a><a href={`tel:${portfolio.phone.replaceAll(' ', '')}`}>{portfolio.phone}</a></div>
        </section>
      </main>
      <footer><span>© 2026 {portfolio.name}</span><div><a href={portfolio.links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div><span>Designed with intent.</span></footer>
    </div>
  );
}

export default App;
