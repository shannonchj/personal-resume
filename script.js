const emailAddress = ["shannonchj", "gmail", "com"];
const email = `${emailAddress[0]}@${emailAddress[1]}.${emailAddress[2]}`;
const linkedin = "https://www.linkedin.com/in/shannonchj/";
const github = "https://github.com/shannonchj";

const resume = {
  name: "陳宣儒",
  title: "Forward Deployed Engineer | Backend Engineer",
  location: "台灣・台北",
  introduction:
    "經濟與資訊工程學士畢業生，專注於分散式系統、資料庫架構與後端 API 開發。具備建立高可用性關聯式資料庫（PostgreSQL/MySQL）及端到端 ETL 資料管線的實務專案經驗。",
  careerGoal:
    "熱衷於將複雜資料轉換為高價值產出，具備跨領域溝通與快速落地解決方案的能力。期許成為兼具後端工程深度與商業敏銳度的 FDE 或資料工程師，深入業務前線快速交付高可用、可擴展的資料與系統解決方案，為企業創造可量化的業務價值",
  links: [
    { label: "Email", href: `mailto:${email}` },
    { label: "LinkedIn", href: `mailto:${linkedin}` },
    { label: "GitHub", href: `mailto:${github}` },
  ],
  experience: [
    {
      date: "2026 - 現在",
      title: "後端工程師",
      organization: "程式驅動協會-AI新秀計畫",
      description: "協作開發網站API與資料庫設計，並改善使用體驗；成果數據請補入實際提升比例或完成項目數。",
    }
  ],
  projects: [
    {
      date: "個人專案範例",
      title: "日常筆記",
      organization: "React・JavaScript",
      description: "整理日常筆記與分類資訊，呈現 React 介面與前端狀態管理的實作方式。",
      preview: "notes",
      demoUrl: "",
      repoUrl: "",
    },
    {
      date: "專案範例",
      title: "來點送 | 後端",
      organization: "Python・FastAPI・PostgerSQL",
      description: "",
      preview: "portfolio",
      demoUrl: "",
      repoUrl: "https://github.com/shannonchj/fde-calldeliver-backend",
    },
    {
      date: "專案範例",
      title: "任務管理工具",
      organization: "React・JavaScript",
      description: "集中整理任務狀態與優先順序，透過元件化介面練習清楚的資訊呈現。",
      preview: "tasks",
      demoUrl: "",
      repoUrl: "",
    },
  ],
  education: [
    {
      date: "2021 — 2026",
      title: "經濟學系 / 資訊工程學系・學士",
      organization: "國立中正大學",
      description: "",
    },
  ],
  skills: [
    {
      category: "後端",
      items: ["Python", "Node.js", "FastAPI", "Data Structures & Algorithms"],
    },
    {
      category: "資料庫",
      items: [
        "PostgreSQL",
        "MySQL",
        "Database Design",
        "ER Modeling",
        "Data Pipeline",
      ],
    },
    {
      category: "前端",
      items: ["HTML/CSS", "React", "JavaScript", "RWD"],
    },
    {
      category: "AI 協作與自動化",
      items: [
        "AI 工作流自動化",
        "AI 代理協作",
        "n8n",
        "GitHub Copilot",
        "ChatGPT",
      ],
    },
    {
      category: "開發工具協作",
      items: ["Git", "GitHub", "Figma", "Postman"],
    },
    {
      category: "雲端部署與基礎設施",
      items: [
        "Linux",
        "Windows / MacOS",
        "Docker",
        "GitHub Actions",
        "Networking Fundamentals",
        "Server Deployment",
      ],
    },
  ],
};

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
          <ProjectPreview type={project.preview} />
          <div className="project-card-content">
            <p className="entry-date">{project.date}</p>
            <h3>{project.title}</h3>
            <p className="entry-meta">{project.organization}</p>
            <p className="entry-description">{project.description}</p>
            <div className="project-links" aria-label={`${project.title} 專案連結`}>
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noreferrer">Live Demo ↗</a>
              ) : (
                <span className="link-pending">Live Demo 待補</span>
              )}
              {project.repoUrl ? (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub Repo ↗</a>
              ) : (
                <span className="link-pending">GitHub Repo 待補</span>
              )}
            </div>
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

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${resume.name}首頁`}>
          {resume.name}
        </a>
        <nav className="site-nav" aria-label="主要導覽">
          <a href="#about">關於</a>
          <a href="#skills">技能</a>
          <a href="#projects">作品</a>
          <a href="#experience">經歷</a>
          <a href="#education">學歷</a>
        </nav>
      </header>

      <main className="content" id="top">
        <section className="hero" aria-labelledby="profile-name">
          <p className="eyebrow">{resume.location}</p>
          <h1 id="profile-name">{resume.name}</h1>
          <p className="hero-title">{resume.title}</p>
          <p className="hero-description">{resume.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">查看專案</a>
            <a className="button button-secondary" href="#contact">聯絡我</a>
          </div>
        </section>

        <Section id="about" title="關於我" englishTitle="About Me">
          <p className="about-description">{resume.careerGoal}</p>
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

        <Section id="experience" title="經歷與學歷" englishTitle="Experience / Education">
          <h3 className="timeline-heading">工作經歷</h3>
          <EntryList entries={resume.experience} />
          <h3 className="timeline-heading education-heading" id="education">學歷</h3>
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
        <p>© {new Date().getFullYear()} {resume.name}. 保留所有權利。</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);