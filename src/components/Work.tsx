import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    number: '01',
    title: 'AegisML Ops Engine',
    description: 'A self-healing ML infrastructure system. Real-time anomaly detection with automatic model retraining. FastAPI backend, React frontend, Prometheus metrics.',
    tags: ['AKS', 'Prometheus', 'FastAPI', 'Python', 'ML'],
    metric: '100%',
    metricLabel: 'model accuracy',
    side: 'left', // image on left, text on right
  },
  {
    number: '02',
    title: 'HaloGenie Observability Stack',
    description: 'Full observability stack for an Azure OpenAI-powered IVR product serving enterprise clients including Flipkart. Prometheus, Grafana, AlertManager on AKS.',
    tags: ['Azure', 'Grafana', 'AlertManager', 'AKS', 'GitLab CI'],
    metric: '132',
    metricLabel: 'page SRE knowledge base',
    side: 'right', // image on right, text on left
  },
  {
    number: '03',
    title: 'Flask Alert Relay',
    description: 'A microservice bridging Prometheus AlertManager to Slack and PagerDuty. Built and deployed to production as part of the HaloGenie platform.',
    tags: ['Flask', 'Docker', 'Prometheus', 'Slack API'],
    metric: '24/7',
    metricLabel: 'uptime monitoring',
    side: 'left',
  },
  {
    number: '04',
    title: 'MOAI Club',
    description: 'Community initiative running bi-weekly listener circles in Delhi. 13–15 participants per session. Co-hosting Death Café events with a clinical psychologist.',
    tags: ['Community', 'Mental Health', 'Social Impact'],
    metric: '13–15',
    metricLabel: 'participants per session',
    side: 'right',
  },
]

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const imageFrom = project.side === 'left' ? -120 : 120
  const textFrom = project.side === 'left' ? 120 : -120

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: project.side === 'left' ? 'row' : 'row-reverse',
        gap: 48,
        marginBottom: 80,
        alignItems: 'center',
      }}
    >
      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: imageFrom }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageFrom }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: '0 0 45%',
          height: 400,
          backgroundColor: '#1A1916',
          borderRadius: 12,
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(240, 237, 230, 0.08)',
        }}
      >
        {/* Project number watermark */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            fontFamily: 'var(--font-display)',
            fontSize: 120,
            fontStyle: 'italic',
            color: 'rgba(201, 169, 110, 0.15)',
            lineHeight: 1,
            pointerEvents: 'none',
          }}
        >
          {project.number}
        </div>
        {/* Placeholder label */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 24,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: '#4A4744',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          PREVIEW COMING SOON
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: textFrom }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: textFrom }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ flex: 1 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: '#4A4744',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 16,
          }}
        >
          {project.number}
        </span>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 36,
            color: '#F0EDE6',
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: '#8A8680',
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          {project.description}
        </p>

        {/* Metric */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 48,
              fontStyle: 'italic',
              color: '#C9A96E',
              lineHeight: 1,
            }}
          >
            {project.metric}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#4A4744',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {project.metricLabel}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {project.tags.map(tag => (
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

        <a
          href="#"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: '#C9A96E',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          View Case Study →
        </a>
      </motion.div>
    </motion.div>
  )
}

export function Work() {
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
        <div style={{ marginBottom: 80 }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#4A4744',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            / 03 Selected Work
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 56,
              color: '#F0EDE6',
              lineHeight: 1.1,
            }}
          >
            Projects
          </h2>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
