import { useEffect, useMemo, useState } from 'react'
import { LANGS, TR } from './i18n'

/* ----------------------------- Data ----------------------------- */

const DISCORD = 'estxbvnnn'

// Solo los ids; las etiquetas vienen de las traducciones (t.nav[id]).
const NAV_IDS = ['start', 'about', 'tech', 'work', 'contact']

// Los números son fijos; las etiquetas vienen de t.stats (mismo orden).
const STATS = ['13', '2', '16–22']

const SKILLS = [
  { name: 'Rust', level: 92, tag: 'FOCUS', color: '#ff7a45' },
  { name: 'Java', level: 88, tag: 'MC PLUGINS', color: '#f89820' },
  { name: 'C#', level: 85, tag: 'uMod', color: '#9b5de5' },
  { name: 'C', level: 78, color: '#6c8ebf' },
  { name: 'C++', level: 76, color: '#5e97d0' },
  { name: 'TypeScript', level: 82, color: '#3178c6' },
  { name: 'JavaScript', level: 84, color: '#f7df1e' },
  { name: 'React', level: 80, color: '#61dafb' },
  { name: 'Python', level: 83, color: '#4b8bbe' },
  { name: 'HTML', level: 90, color: '#e34f26' },
  { name: 'Ruby', level: 65, color: '#cc342d' },
  { name: 'Bash', level: 79, color: '#4eaa25' },
  { name: 'SQL', level: 77, color: '#00b4d8' },
]

// key → título traducido (t.tech.cats[key]). items=null usa t.tech.areaItems.
const TECH_CATS = [
  { key: 'languages', items: ['Rust', 'Java', 'C#', 'C', 'C++', 'TypeScript', 'JavaScript', 'Python', 'HTML', 'Ruby', 'Bash', 'SQL'] },
  { key: 'modding', items: ['uMod / Oxide (Rust)', 'Spigot / Paper (Minecraft)', 'Carbon', 'RCON'] },
  { key: 'frameworks', items: ['React', '.NET', 'Node.js', 'Vite', 'Git', 'Linux'] },
  { key: 'areas', items: null },
]

const NOFOG_CODE = `using Oxide.Core;

namespace Oxide.Plugins
{
    [Info("NoFog", "estxbvn", "1.0.0")]
    [Description("Elimina la niebla del servidor automaticamente en todos los biomas.")]
    public class NoFog : RustPlugin
    {
        private static readonly string[] Biomes =
        {
            "arctic", "jungle", "temperate", "tundra", "arid"
        };

        private void OnServerInitialized()
        {
            Apply();
        }

        private void Apply()
        {
            foreach (string biome in Biomes)
            {
                Run("weather." + biome + "_fog_ramp_start 10000");

                Run("weather." + biome + "_fog_ambient_intensity_mult 0");
            }
        }

        private static void Run(string cmd)
        {
            ConsoleSystem.Run(ConsoleSystem.Option.Server.Quiet(), cmd);
        }
    }
}`

// Partes fijas; desc/status vienen de t.projects[key].
const PROJECTS = [
  { key: 'nofog', name: 'NoFog', kind: 'PLUGIN', platform: 'uMod / Oxide · Rust', lang: 'C#', tags: ['Rust', 'uMod', 'C#', 'Server'], code: NOFOG_CODE },
  { key: 'syvar', name: 'Syvar', kind: 'APP', platform: 'App · RCON para Rust', lang: 'Rust / App', tags: ['RCON', 'Rust', 'App', 'Admin'], code: null },
]

const ACCENTS = [
  { id: 'green', color: '#00ffa3' },
  { id: 'pink', color: '#ff5edb' },
  { id: 'amber', color: '#ffd84d' },
  { id: 'blue', color: '#00e0ff' },
]

const ROTATING = ['Build.', 'Develop.', 'Deploy.', 'Secure.']

/* ------------------------ Hooks ------------------------ */

function useSantiagoClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return useMemo(() => {
    const fmt = new Intl.DateTimeFormat('es-CL', {
      timeZone: 'America/Santiago',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    })
    const parts = fmt.formatToParts(now)
    const get = (t) => Number(parts.find((p) => p.type === t)?.value ?? 0)
    const h = get('hour'), m = get('minute'), s = get('second')
    const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    const available = h >= 16 && h < 22 // disponible 16:00–22:00 hora Santiago
    return { time, available, hour: h }
  }, [now])
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

// Idioma inicial: localStorage → idioma del navegador → 'es'.
function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && TR[saved]) return saved
  } catch { /* ignore */ }
  const nav = (typeof navigator !== 'undefined' && navigator.language || '').slice(0, 2)
  return TR[nav] ? nav : 'es'
}

/* ----------------------------- UI bits ----------------------------- */

function SkillBar({ s }) {
  const filled = Math.round((s.level / 100) * 20)
  return (
    <div className="skill">
      <div className="skill-head">
        <span className="skill-name">{s.name}</span>
        {s.tag && <span className="skill-tag">{s.tag}</span>}
        <span className="skill-pct">{s.level}%</span>
      </div>
      <div className="skill-bar" aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => i < filled).map((on, i) => (
          <span key={i} className={`pixel ${on ? 'on' : ''}`}
            style={on ? { background: s.color, boxShadow: `0 0 6px ${s.color}` } : undefined} />
        ))}
      </div>
    </div>
  )
}

function Typewriter() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % ROTATING.length), 1600)
    return () => clearInterval(id)
  }, [])
  return <span className="rot" key={i}>{ROTATING[i]}</span>
}

/* ------------------------------ App ------------------------------ */

export default function App() {
  const { time, available, hour } = useSantiagoClock()
  const [lang, setLang] = useState(initialLang)
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openCode, setOpenCode] = useState(null)
  const [accent, setAccent] = useState('green')
  const active = useScrollSpy(NAV_IDS)

  const t = TR[lang]

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent)
  }, [accent])

  useEffect(() => {
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* ignore */ }
  }

  // Mensaje del reloj según el idioma activo.
  const clockMsg = available
    ? t.clock.availableNow
    : hour < 16
      ? t.clock.comeBack(16 - hour)
      : t.clock.closed

  return (
    <div className="screen">
      {/* animated decorated background */}
      <div className="bg" aria-hidden="true">
        <div className="bg-aurora" />
        <div className="bg-grid" />
        <div className="bg-stars s1" />
        <div className="bg-stars s2" />
        <div className="bg-stars s3" />
        <div className="bg-sprites">
          <span style={{ left: '8%',  animationDelay: '0s',  fontSize: '22px' }}>👾</span>
          <span style={{ left: '24%', animationDelay: '6s',  fontSize: '18px' }}>🦀</span>
          <span style={{ left: '46%', animationDelay: '12s', fontSize: '26px' }}>🛸</span>
          <span style={{ left: '63%', animationDelay: '3s',  fontSize: '16px' }}>☄️</span>
          <span style={{ left: '78%', animationDelay: '9s',  fontSize: '20px' }}>👾</span>
          <span style={{ left: '90%', animationDelay: '15s', fontSize: '24px' }}>⭐</span>
        </div>
      </div>
      <div className="scanlines" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      {/* ---------------- NAV ---------------- */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#start" className="brand">
          <span className="brand-mark"><img src="/estxbvnnn.png" alt="" /></span>
          <span className="brand-name">estxbvnnn<span className="bcursor">_</span></span>
        </a>
        <div className="nav-links">
          {NAV_IDS.map((id) => (
            <a key={id} href={`#${id}`} className={`nav-link ${active === id ? 'active' : ''}`}>
              {t.nav[id]}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <div className="lang-switch" title={t.langTitle}>
            {LANGS.map((l) => (
              <button key={l.id} className={`lang ${lang === l.id ? 'on' : ''}`}
                onClick={() => setLang(l.id)} aria-label={l.label}>
                {l.label}
              </button>
            ))}
          </div>
          <div className="accent-switch" title={t.accentTitle}>
            {ACCENTS.map((a) => (
              <button key={a.id} className={`acc ${accent === a.id ? 'on' : ''}`}
                style={{ background: a.color }} onClick={() => setAccent(a.id)}
                aria-label={`accent ${a.id}`} />
            ))}
          </div>
          <span className={`nav-status ${available ? 'on' : 'off'}`}>
            <span className="dot" />{available ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>
      </nav>

      <main className="wrap">
        {/* ---------------- START / HERO ---------------- */}
        <section id="start" className="hero">
          <span className="bg-num">01</span>
          <div className="avatar-frame">
            <img src="/estxbvnnn.png" alt="estxbvnnn avatar" className="avatar" />
          </div>
          <div className={`status ${available ? 'on' : 'off'}`}>
            <span className="dot" />
            {available ? t.hero.availableNow : t.hero.notAvailable}
            <span className="status-sub">{t.hero.statusSub(time)}</span>
          </div>
          <h1 className="title glitch" data-text="estxbvnnn">estxbvnnn</h1>
          <p className="hero-rotor"><Typewriter /> <span className="muted-rot">Secure.</span></p>
          <p className="subtitle">{t.hero.subtitle}</p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">{t.hero.seeProjects}</a>
            <button className="btn btn-ghost" onClick={copyDiscord}>
              {copied ? t.hero.copied : `DISCORD · ${DISCORD}`}
            </button>
          </div>

          <div className="stats">
            {STATS.map((num, i) => (
              <div className="stat" key={i}>
                <span className="stat-num">{num}</span>
                <span className="stat-label">{t.stats[i]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section id="about" className="panel terminal">
          <span className="bg-num">02</span>
          <div className="term-bar">
            <span className="tb red" /><span className="tb yellow" /><span className="tb green" />
            <span className="term-title">{t.about.termTitle}</span>
          </div>
          <pre className="term-body">
{t.about.terminal}
            <span className="cursor">█</span>
          </pre>
        </section>

        {/* ---------------- TECH / STACK ---------------- */}
        <section id="tech" className="panel">
          <span className="bg-num">03</span>
          <h2 className="h2">{t.tech.heading}</h2>
          <div className="skills-grid">
            {SKILLS.map((s) => <SkillBar key={s.name} s={s} />)}
          </div>
          <div className="tech-cats">
            {TECH_CATS.map((c) => (
              <div className="tech-cat" key={c.key}>
                <h4>{t.tech.cats[c.key]}</h4>
                <div className="chips">
                  {(c.items ?? t.tech.areaItems).map((it) => <span className="chip" key={it}>{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- WORK / PROJECTS ---------------- */}
        <section id="work" className="panel">
          <span className="bg-num">04</span>
          <h2 className="h2">{t.work.heading}</h2>
          <p className="section-note">{t.work.note(DISCORD)}<b>{DISCORD}</b></p>
          <div className="projects">
            {PROJECTS.map((p) => (
              <article className="project" key={p.key}>
                <div className="project-top">
                  <span className={`kind ${p.kind.toLowerCase()}`}>{p.kind}</span>
                  <span className="project-status">● {t.projects[p.key].status}</span>
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-platform">{p.platform} · <span className="lang">{p.lang}</span></p>
                <p className="project-desc">{t.projects[p.key].desc}</p>
                <div className="chips">
                  {p.tags.map((tg) => <span className="chip sm" key={tg}>{tg}</span>)}
                </div>
                <div className="project-actions">
                  {p.code && (
                    <button className="btn btn-ghost sm" onClick={() => setOpenCode(p)}>{t.work.seeCode}</button>
                  )}
                  <button className="btn btn-primary sm" onClick={copyDiscord}>
                    {t.work.get}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="panel contact">
          <span className="bg-num">05</span>
          <h2 className="h2">{t.contact.heading}</h2>
          <div className="contact-row">
            <button className="discord-card" onClick={copyDiscord} title="Click">
              <span className="dc-icon">🎮</span>
              <span className="dc-text">
                <span className="dc-label">DISCORD</span>
                <span className="dc-handle">{DISCORD}</span>
              </span>
              <span className="dc-copy">{copied ? t.contact.copied : t.contact.copy}</span>
            </button>
            <div className="avail-card">
              <span className="avail-clock">{time}</span>
              <span className="avail-label">{t.contact.place}</span>
              <span className={`avail-state ${available ? 'on' : 'off'}`}>{clockMsg}</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span className="end-sq" />
          <span>© {new Date().getFullYear()} estxbvnnn</span>
          <span className="footer-sep">·</span>
          <span>{t.footer}</span>
        </footer>
      </main>

      {/* ---------------- CODE MODAL ---------------- */}
      {openCode && (
        <div className="modal" onClick={() => setOpenCode(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="term-bar">
              <span className="tb red" /><span className="tb yellow" /><span className="tb green" />
              <span className="term-title">{openCode.name}.cs</span>
              <button className="modal-close" onClick={() => setOpenCode(null)}>✕</button>
            </div>
            <pre className="code-body"><code>{openCode.code}</code></pre>
            <div className="modal-foot">
              <span>{t.modalFoot(openCode.lang)}</span>
              <button className="btn btn-primary sm" onClick={copyDiscord}>{t.work.get}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
