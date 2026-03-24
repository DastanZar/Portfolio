import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.5 }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        background: 'rgba(14, 13, 12, 0.88)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(240, 237, 230, 0.12)',
        borderRadius: 100,
        padding: '10px 28px',
        display: 'flex',
        gap: 28,
        alignItems: 'center',
      }}
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(id)
          }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            fontWeight: 400,
            color: activeSection === id ? 'var(--text-primary)' : 'var(--text-muted)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 200ms',
          }}
        >
          {label}
        </a>
      ))}
    </motion.nav>
  )
}
