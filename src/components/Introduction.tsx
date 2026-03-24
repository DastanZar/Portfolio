import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TornEdge } from './TornEdge'

export function Introduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <TornEdge variant="dark-to-light" />
      <section
        style={{
          backgroundColor: '#F5F0E8',
          padding: '120px 48px',
        }}
      >
        <div
          style={{
            maxWidth: 820,
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
                fontFamily: 'var(--font-display)',
                fontSize: 42,
                fontStyle: 'italic',
                lineHeight: 1.3,
                color: '#1A1916',
                textAlign: 'center',
                marginBottom: 64,
              }}
            >
              Hey, I'm Avihai — an engineer who builds
              infrastructure that{' '}
              <span style={{ color: '#8B6914' }}>heals itself</span>, communities
              that <span style={{ color: '#8B6914' }}>listen</span>, and systems
              that <span style={{ color: '#8B6914' }}>matter</span>.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 18,
                color: '#5A5450',
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              Based in Bengaluru. Building at the intersection of AI
              infrastructure and human connection. Currently: SRE at
              Comnet Infotech. Always: founder of MOAI Club.
            </p>
          </motion.div>
        </div>
      </section>
      <TornEdge variant="light-to-dark" />
    </>
  )
}
