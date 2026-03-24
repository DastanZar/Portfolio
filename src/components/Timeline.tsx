import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timelineItems = [
  {
    year: '2024',
    title: 'SRE at Comnet Infotech',
    description: 'Leading site reliability engineering for enterprise infrastructure.',
  },
  {
    year: '2023',
    title: 'Founded MOAI Club',
    description: 'Building a community of engineers passionate about AI infrastructure.',
  },
  {
    year: '2022',
    title: 'DevOps Engineer',
    description: 'Implemented CI/CD pipelines and infrastructure automation.',
  },
  {
    year: '2021',
    title: 'Started in Tech',
    description: 'Began journey in software engineering and cloud infrastructure.',
  },
]

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!sectionRef.current || !dotRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(dotRef.current, {
        y: 400,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="timeline"
      style={{
        backgroundColor: '#0E0D0C',
        padding: '120px 48px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 820,
          margin: '0 auto',
        }}
      >
        <motion.div
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
            Timeline
          </p>

          <div
            style={{
              position: 'relative',
              paddingLeft: 48,
            }}
          >
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 1,
                backgroundColor: 'rgba(240, 237, 230, 0.08)',
              }}
            />

            {/* Sliding dot */}
            <div
              ref={dotRef}
              style={{
                position: 'absolute',
                left: -4,
                top: 0,
                width: 9,
                height: 9,
                borderRadius: '50%',
                backgroundColor: '#D4A84B',
              }}
            />

            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  marginBottom: 48,
                  position: 'relative',
                }}
              >
                {/* Dot on line */}
                <div
                  style={{
                    position: 'absolute',
                    left: -52,
                    top: 6,
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    backgroundColor: '#4A4744',
                  }}
                />

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: '#4A4744',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  {item.year}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 24,
                    color: '#F0EDE6',
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: '#8A8680',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
