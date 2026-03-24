import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TornEdge } from './TornEdge'

export function Beyond() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <TornEdge variant="dark-to-light" />
      <section
        id="beyond"
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
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#4A4744',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 48,
              }}
            >
              Beyond
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 64,
              }}
            >
              {/* Hand-drawn illustration */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                style={{ flexShrink: 0 }}
              >
                {/* Circle head */}
                <circle
                  cx="100"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="#1A1916"
                  strokeWidth="2"
                />
                {/* Rectangle body */}
                <rect
                  x="70"
                  y="85"
                  width="60"
                  height="80"
                  fill="none"
                  stroke="#1A1916"
                  strokeWidth="2"
                />
                {/* Laptop rectangle */}
                <rect
                  x="60"
                  y="120"
                  width="80"
                  height="50"
                  fill="none"
                  stroke="#1A1916"
                  strokeWidth="2"
                />
                {/* Laptop screen */}
                <rect
                  x="65"
                  y="125"
                  width="70"
                  height="35"
                  fill="none"
                  stroke="#1A1916"
                  strokeWidth="1"
                />
              </svg>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 32,
                    color: '#1A1916',
                    marginBottom: 16,
                  }}
                >
                  The Human Side
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 18,
                    color: '#5A5450',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  When I'm not building infrastructure, you'll find me mentoring
                  junior engineers, organizing community meetups, or exploring
                  the intersection of technology and human connection.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 18,
                    color: '#5A5450',
                    lineHeight: 1.6,
                  }}
                >
                  I believe the best systems are built by diverse teams who
                  understand both the technical and human aspects of software
                  development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <TornEdge variant="light-to-dark" />
    </>
  )
}
