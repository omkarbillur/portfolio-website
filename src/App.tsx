import { useState } from 'react'

const SKILLS = [
  { name: 'HTML', desc: 'Creating structured and semantic webpages.' },
  { name: 'CSS', desc: 'Designing responsive and beautiful interfaces.' },
  { name: 'JavaScript', desc: 'Adding dynamic functionality to websites.' },
  { name: 'React', desc: 'Building reusable frontend components.' },
  { name: 'Python', desc: 'Scripting, automation, and data processing.' },
  { name: 'Machine Learning', desc: 'Training models to learn from data and make predictions.' },
]

const PROJECTS = [
  {
    title: 'Portfolio Website',
    desc: 'A personal portfolio website created using HTML, CSS and JavaScript.',
    link: '#',
  },
  {
    title: 'Weather App',
    desc: 'A weather application using API integration to show real-time weather data.',
    link: '#',
  },
  {
    title: 'Student Result Predictor',
    desc: 'A machine learning model to predict student performance using Python and Scikit-learn.',
    link: '#',
  },
  {
    title: 'To-Do App',
    desc: 'A task management app built with React featuring state management and local storage.',
    link: '#',
  },
]

export default function App() {
  const [dark, setDark] = useState(true)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [menuOpen, setMenuOpen] = useState(false)

  const bg = dark ? '#1a1a1a' : '#f5f5f5'
  const cardBg = dark ? '#242424' : '#e8e8e8'
  const textColor = dark ? '#f0f0f0' : '#111'
  const mutedColor = dark ? '#ccc' : '#444'
  const navBg = dark ? '#111' : '#ddd'

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const SectionTitle = ({ children }: { children: string }) => (
    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 6vw, 2.8rem)',
        fontWeight: 700,
        color: '#2bbfbf',
        margin: '0 0 0.5rem',
        fontFamily: 'Georgia, serif',
      }}>{children}</h2>
      <div style={{
        width: '120px',
        height: '3px',
        background: 'repeating-linear-gradient(90deg, #c0392b 0 8px, transparent 8px 14px)',
        margin: '0 auto',
      }} />
    </div>
  )

  return (
    <div style={{ background: bg, color: textColor, minHeight: '100vh', fontFamily: 'Georgia, serif', transition: 'background 0.3s, color 0.3s' }}>

      {/* NAV */}
      <nav style={{
        background: navBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        height: '56px',
        position: 'sticky', top: 0, zIndex: 100,
        flexWrap: 'wrap',
      }}>
        <span style={{ fontWeight: 800, fontSize: '1.3rem', color: '#2bbfbf', letterSpacing: '0.04em' }}>OB</span>
        <div
          className="md-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: mutedColor, fontSize: '0.95rem', fontFamily: 'Georgia, serif',
                padding: '4px 0',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2bbfbf')}
              onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}
            >{l}</button>
          ))}
          <button
            onClick={() => setDark(d => !d)}
            style={{
              background: dark ? '#333' : '#bbb',
              border: 'none', cursor: 'pointer',
              borderRadius: '20px',
              padding: '5px 14px',
              color: dark ? '#fff' : '#111',
              fontSize: '0.8rem',
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: 'Georgia, serif',
            }}
          >
            {dark ? '☀️ Light' : '🌙 Dark'} Mode
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{
        minHeight: '90vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '4rem 1.5rem',
      }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 4rem)', fontWeight: 700, lineHeight: 1.2, margin: '0 0 0.75rem' }}>
          Hi, I'm{' '}
          <span style={{ color: '#2bbfbf' }}>Omkar Babanna<br />Billur</span>
        </h1>
        <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', fontWeight: 700, color: textColor, margin: '0 0 0.5rem' }}>
          Web Developer &<br />AI/ML Student
        </h2>
        <div style={{
          width: '160px', height: '3px', margin: '0 auto 1.8rem',
          background: 'repeating-linear-gradient(90deg, #c0392b 0 8px, transparent 8px 14px)',
        }} />
        <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: mutedColor, maxWidth: '480px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          I build responsive websites using HTML, CSS, JavaScript and React.
        </p>
        <button
          onClick={() => scrollTo('contact')}
          style={{
            background: '#2bbfbf', color: '#fff', border: 'none',
            padding: '14px 48px', borderRadius: '8px', fontSize: '1.1rem',
            fontWeight: 600, cursor: 'pointer', fontFamily: 'Georgia, serif',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Contact Me
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: 'clamp(3rem,8vw,5rem) clamp(1.5rem,8vw,4rem)', maxWidth: '700px', margin: '0 auto' }}>
        <SectionTitle>About Me</SectionTitle>
        <p style={{
          textAlign: 'center', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          color: mutedColor, lineHeight: 1.9,
        }}>
          I am Omkar Babanna Billur, a passionate web developer and AI/ML student.
          I enjoy creating modern, responsive and user-friendly websites. I am currently
          pursuing my B.Tech in Artificial Intelligence & Machine Learning and improving
          my skills in both frontend development and machine learning.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: 'clamp(3rem,8vw,5rem) clamp(1.5rem,8vw,4rem)' }}>
        <SectionTitle>My Skills</SectionTitle>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {SKILLS.map(skill => (
            <div key={skill.name} style={{ textAlign: 'center', padding: '1.8rem 1rem', borderBottom: `1px solid ${dark ? '#333' : '#ccc'}` }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#2bbfbf', margin: '0 0 0.5rem' }}>{skill.name}</h3>
              <p style={{ fontSize: '1rem', color: mutedColor, margin: 0, lineHeight: 1.6 }}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: 'clamp(3rem,8vw,5rem) clamp(1.5rem,8vw,4rem)' }}>
        <SectionTitle>My Projects</SectionTitle>
        <div style={{
          maxWidth: '660px', margin: '0 auto',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {PROJECTS.map(p => (
            <div key={p.title} style={{
              background: cardBg, borderRadius: '10px',
              padding: '2rem 1.5rem', textAlign: 'center',
              boxShadow: dark ? '0 2px 12px rgba(0,0,0,0.4)' : '0 2px 12px rgba(0,0,0,0.1)',
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#2bbfbf', margin: '0 0 0.75rem' }}>{p.title}</h3>
              <p style={{ fontSize: '1rem', color: mutedColor, lineHeight: 1.7, margin: '0 0 1.5rem' }}>{p.desc}</p>
              <a
                href={p.link}
                style={{
                  display: 'inline-block',
                  background: '#2bbfbf', color: '#fff',
                  padding: '10px 36px', borderRadius: '6px',
                  textDecoration: 'none', fontWeight: 600, fontSize: '1rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: 'clamp(3rem,8vw,5rem) clamp(1.5rem,8vw,4rem)' }}>
        <SectionTitle>Contact Me</SectionTitle>
        <form
          onSubmit={e => { e.preventDefault(); alert('Message sent!') }}
          style={{ maxWidth: '580px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            style={{
              background: cardBg, border: `1px solid ${dark ? '#444' : '#bbb'}`,
              borderRadius: '8px', padding: '16px 18px',
              color: textColor, fontSize: '1rem', fontFamily: 'Georgia, serif',
              outline: 'none',
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            style={{
              background: cardBg, border: `1px solid ${dark ? '#444' : '#bbb'}`,
              borderRadius: '8px', padding: '16px 18px',
              color: textColor, fontSize: '1rem', fontFamily: 'Georgia, serif',
              outline: 'none',
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            style={{
              background: cardBg, border: `1px solid ${dark ? '#444' : '#bbb'}`,
              borderRadius: '8px', padding: '16px 18px',
              color: textColor, fontSize: '1rem', fontFamily: 'Georgia, serif',
              outline: 'none', resize: 'vertical',
            }}
          />
          <button
            type="submit"
            style={{
              background: '#2bbfbf', color: '#fff', border: 'none',
              borderRadius: '8px', padding: '16px',
              fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Georgia, serif', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: 'center', padding: '1.5rem',
        borderTop: `1px solid ${dark ? '#333' : '#ccc'}`,
        color: mutedColor, fontSize: '0.9rem',
      }}>
        © 2025 Omkar Babanna Billur. All rights reserved.
      </footer>

      <style>{`
        @media (max-width: 600px) {
          .md-nav { display: none !important; }
        }
        input::placeholder, textarea::placeholder { color: #888; }
      `}</style>
    </div>
  )
}
