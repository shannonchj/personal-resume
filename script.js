function Section({ id, title, englishTitle, children }) {
  return (
    <section className="section" id={id}>
      <h2 className="section-heading">
        {title}
        <span>{englishTitle}</span>
      </h2>
      {children}
    </section>
  );
}

function ProjectPreview({ type }) {
  return (
    <div className={`project-preview preview-${type}`} aria-hidden="true">
      <div className="preview-toolbar"><span /><span /><span /></div>
      <div className="preview-content">
        <div className="preview-sidebar"><i /><i /><i /></div>
        <div className="preview-main">
          <i className="preview-title" />
          <i /><i /><i />
          <div className="preview-cards"><b /><b /><b /></div>
        </div>
      </div>
    </div>
  );
}

function ProjectList({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title}>
          <ProjectPreview type={project.preview || "portfolio"} />
          <div className="project-card-content">
            <h3>{project.title}</h3>
            {project.category && <p className="entry-meta">{project.category}</p>}
            {project.overview && (
              <p className="entry-description">{project.overview}</p>
            )}
            {project.skills && project.skills.length > 0 && (
              <ul className="skill-list project-skills">
                {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            )}
            {(project.role || project.implementation || project.result) && (
              <div className="project-details">
                {project.role && <p><strong>我的角色：</strong>{project.role}</p>}
                {project.implementation && (
                  <p><strong>實作：</strong>{project.implementation}</p>
                )}
                {project.result && <p><strong>成果：</strong>{project.result}</p>}
              </div>
            )}
            {project.links && project.links.length > 0 && (
              <div className="project-links" aria-label={`${project.title} 專案連結`}>
                {project.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function EntryList({ entries }) {
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <article className="entry" key={`${entry.date}-${entry.title}`}>
          <div className="entry-date">{entry.date}</div>
          <div className="entry-content">
            <h3>{entry.title}</h3>
            <p className="entry-meta">{entry.organization}</p>
            {entry.description && (
              <ul className="entry-bullets">
                <li>{entry.description}</li>
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function App({ resume }) {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${resume.profile.name}首頁`}>
          個人履歷
        </a>
        <div className="header-tools">
          <nav className="site-nav" aria-label="主要導覽">
            <a href="#about">關於</a>
            <a href="#skills">技能</a>
            <a href="#projects">作品</a>
            {resume.experience.length > 0 && <a href="#experience">經歷</a>}
            <a href="#education">學歷</a>
          </nav>
          <div className="utility-actions">
            <button
              className="utility-button theme-toggle"
              type="button"
              aria-pressed={isDarkMode}
              aria-label={isDarkMode ? "切換淺色模式" : "切換深色模式"}
              title={isDarkMode ? "切換淺色模式" : "切換深色模式"}
              onClick={() => setIsDarkMode((currentMode) => !currentMode)}
            >
              <span aria-hidden="true">{isDarkMode ? "☀" : "☾"}</span>
            </button>
            <button
              className="utility-button"
              type="button"
              onClick={() => window.print()}
            >
              下載 PDF 履歷
            </button>
          </div>
        </div>
      </header>

      <main className="content" id="top">
        <section className="hero" aria-labelledby="profile-name">
          <p className="eyebrow">{resume.profile.location}</p>
          <h1 id="profile-name">{resume.profile.name}</h1>
          <p className="hero-title">{resume.profile.title}</p>
          <p className="hero-description">{resume.profile.introduction}</p>
          {resume.profile.tags && resume.profile.tags.length > 0 && (
            <ul className="skill-list profile-tags">
              {resume.profile.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          )}
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">查看專案</a>
            <a className="button button-secondary" href="#contact">聯絡我</a>
          </div>
        </section>

        <Section id="about" title="關於我" englishTitle="About Me">
          <p className="about-description">{resume.about.description}</p>
        </Section>

        <Section id="skills" title="技能與核心能力" englishTitle="Skills">
          <div className="skill-groups">
            {resume.skills.map((group) => (
              <article className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <ul className="skill-list">
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="精選作品" englishTitle="Projects">
          <ProjectList projects={resume.projects} />
        </Section>

        {resume.experience.length > 0 && (
          <Section id="experience" title="工作經歷" englishTitle="Experience">
            <EntryList entries={resume.experience} />
          </Section>
        )}

        <Section id="education" title="學歷" englishTitle="Education">
          <EntryList entries={resume.education} />
        </Section>

        <Section id="contact" title="聯絡我" englishTitle="Contact">
          <p className="about-description">歡迎透過 Email 或社群平台與我聯繫。</p>
          <div className="contact-links">
            {resume.links.map((link) => (
              link.href && !link.placeholder ? (
                <a
                  className="contact-link"
                  href={link.href}
                  key={link.label}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                >
                  {link.label} ↗
                </a>
              ) : (
                <span className="contact-link link-pending" key={link.label}>
                  {link.label}（請更新連結）
                </span>
              )
            ))}
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {resume.profile.name}. 保留所有權利。</p>
      </footer>
    </div>
  );
}

function ResumeLoader() {
  const [resume, setResume] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("./content.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`載入內容失敗（HTTP ${response.status}）`);
        }
        return response.json();
      })
      .then(setResume)
      .catch(setError);
  }, []);

  if (error) {
    return <p role="alert">無法載入履歷內容：{error.message}</p>;
  }
  if (!resume) {
    return <p>履歷載入中…</p>;
  }

  return <App resume={resume} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<ResumeLoader />);