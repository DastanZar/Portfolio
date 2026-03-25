import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const credentials = [
  {
    id: '01',
    title: 'Oracle GenAI & Vector Search',
    issuer: 'Oracle University',
    date: '2025',
    front: 'Dual Professional Certifications',
    back: '1Z0-184-25 & 1Z0-1127-25. Built chained LangChain-style agents and hybrid SQL+VECTOR queries at 10K QPS.',
  },
  {
    id: '02',
    title: 'Investor Awareness Certification',
    issuer: 'SEBI / NISM',
    date: '2025',
    front: 'Series-XXVI (96% Score)',
    back: 'Near-perfect score on derivatives, debt instruments, and mutual funds regulations.',
  },
  {
    id: '03',
    title: 'Google Cloud Skill Badges',
    issuer: 'Google Cloud',
    date: '2021',
    front: '10x Technical Badges',
    back: 'GKE microservices, Vertex AI APIs, and BigQuery ETL. 99.9% uptime architectures.',
  },
  {
    id: '04',
    title: 'Aspire Leaders Program',
    issuer: 'Harvard-Backed',
    date: '2025',
    front: 'Global Top 2% Cohort',
    back: 'Advanced from 46,000 applicants. Led international pod on AI ethics; accessed alumni seed grant.',
  },
  {
    id: '05',
    title: '0 to 100 Full-Stack',
    issuer: '100x Engineers',
    date: '2025',
    front: '12-Week Intensive',
    back: 'MERN stack, Kubernetes, DevOps CI/CD. Built API serving 5K concurrent users.',
  },
  {
    id: '06',
    title: 'Advanced ML & AI',
    issuer: '365 Data Science',
    date: '2025',
    front: '8-Course Specialization',
    back: 'End-to-end pipelines, Math Foundations, Deep Learning, and GPT-4 interview simulators.',
  },
]

export function Credentials() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.batch('.credential-card', {
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          {
            scale: 0.8,
            opacity: 0,
            filter: 'blur(15px)',
            y: 60,
          },
          {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: 'back.out(1.4)',
          }
        )
      },
      start: 'top 85%',
    })
  }, { scope: container })

  return (
    <section
      ref={container}
      id="credentials"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '128px 0',
        backgroundColor: '#0A1210',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: '#8A8680',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          / 04
        </span>
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#F5F0E8',
            marginLeft: 32,
            display: 'inline',
          }}
        >
          Credentials & Honors
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {credentials.map((cred) => (
          <div
            key={cred.id}
            className="credential-card"
            style={{
              position: 'relative',
              height: 288,
              width: '100%',
              perspective: '1000px',
              cursor: 'pointer',
            }}
          >
            <div
              className="credential-card-inner"
              style={{
                width: '100%',
                height: '100%',
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 20px 50px rgba(212, 168, 75, 0.08)',
                transform: 'translateY(-8px)',
              }}
            >
              {/* Front */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#161A18',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: 4,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: '#D4A84B',
                    }}
                  >
                    {cred.date}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: '#8A8680',
                      textAlign: 'right',
                      maxWidth: '50%',
                    }}
                  >
                    {cred.issuer}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: 24,
                      color: '#F5F0E8',
                      marginBottom: 8,
                      lineHeight: 1.2,
                    }}
                  >
                    {cred.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: 14,
                      color: '#8A8680',
                    }}
                  >
                    {cred.front}
                  </p>
                </div>
              </div>

              {/* Back */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#D4A84B',
                  borderRadius: 4,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 20,
                    color: '#0E0D0C',
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {cred.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: 14,
                    color: 'rgba(14, 13, 12, 0.85)',
                    lineHeight: 1.6,
                  }}
                >
                  {cred.back}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .credential-card:hover .credential-card-inner {
          transform: rotateY(180deg) translateY(-8px) !important;
        }

        @media (min-width: 768px) {
          #credentials > div:last-of-type {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          #credentials > div:last-of-type {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
