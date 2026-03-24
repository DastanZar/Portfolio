import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'Project One',
    description: 'AI-powered infrastructure monitoring and self-healing systems.',
    tags: ['DevOps', 'AI', 'SRE'],
  },
  {
    title: 'Project Two',
    description: 'Community platform for developer collaboration and knowledge sharing.',
    tags: ['Community', 'Platform', 'Open Source'],
  },
  {
    title: 'Project Three',
    description: 'Automated deployment pipelines with intelligent rollback capabilities.',
    tags: ['CI/CD', 'Automation', 'Infrastructure'],
  },
]

export function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="work"
      style={{
        backgroundColor: '#0E0D0C',
        padding: '120px 48px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#4A4744',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 48,
            }}
          >
            Work
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: 32,
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  backgroundColor: '#1A1916',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid rgba(240, 237, 230, 0.08)',
                }}
              >
                {/* Placeholder Image */}
                <div
                  style={{
                    height: 240,
                    backgroundColor: '#0E0D0C',
                    backgroundImage:
                      'radial-gradient(circle, rgba(240, 237, 230, 0.08) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    padding: '24px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 24,
                      color: '#F0EDE6',
                      marginBottom: 12,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: '#8A8680',
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 8,
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          color: '#4A4744',
                          padding: '4px 10px',
                          backgroundColor: 'rgba(240, 237, 230, 0.05)',
                          borderRadius: 100,
                          border: '1px solid rgba(240, 237, 230, 0.08)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
