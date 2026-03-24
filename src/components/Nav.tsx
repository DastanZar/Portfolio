import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'timeline', label: 'Timeline' },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navItems.forEach(({ id }) => {
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      style={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        background: '#1A1816',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 100,
        padding: '8px 8px 8px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {navItems.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(id)
          }}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            fontWeight: activeSection === id ? 500 : 400,
            color: activeSection === id ? '#F0EDE6' : 'rgba(240,237,230,0.5)',
            padding: '8px 20px',
            cursor: 'pointer',
            transition: 'color 200ms',
            textDecoration: 'none',
            background: 'none',
          }}
          onMouseEnter={(e) => {
            if (activeSection !== id) {
              e.currentTarget.style.color = 'rgba(240,237,230,0.9)'
            }
          }}
          onMouseLeave={(e) => {
            if (activeSection !== id) {
              e.currentTarget.style.color = 'rgba(240,237,230,0.5)'
            }
          }}
        >
          {label}
        </a>
      ))}
      <button
        onClick={() => scrollToSection('contact')}
        style={{
          background: '#D4A84B',
          color: '#0E0D0C',
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 500,
          padding: '10px 24px',
          borderRadius: 100,
          border: 'none',
          cursor: 'pointer',
          marginLeft: 8,
          transition: 'background 200ms, transform 150ms',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#E8C06A'
          e.currentTarget.style.transform = 'scale(1.02)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#D4A84B'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        Contact
      </button>
    </motion.nav>
  )
}
