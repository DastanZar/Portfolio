import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const credentials = [
  {
    id: 1,
    type: 'wide',
    title: 'Google Cloud Ready Facilitator 2024',
    subtitle: 'ML & Cloud Infrastructure Education',
  },
  {
    id: 2,
    type: 'square',
    title: 'IEEE Research',
    subtitle: 'Nanoelectronics Atlas 4.1 ASIC',
  },
  {
    id: 3,
    type: 'square',
    title: 'MOAI Club',
    metric: '15+ Listeners',
  },
  {
    id: 4,
    type: 'wide',
    title: 'Teach For India',
    subtitle: 'Grade 6 Mathematics & English',
  },
]

export function Credentials() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.defaults({ ease: 'power2.out' })

    const cards = document.querySelectorAll('.credential-card')
    
    gsap.fromTo(cards, 
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )
  }, { scope: container })

  return (
    <section
      ref={container}
      id="credentials"
      className="credentials"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 2rem',
        backgroundColor: '#0E0D0C',
      }}
    >
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: '#4A4744',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 48,
        }}
      >
        / 05 Credentials
      </p>

      <div className="credentials-grid">
        {credentials.map((item) => (
          <div
            key={item.id}
            className={`credential-card credential-card--${item.type}`}
            style={{
              backgroundColor: '#1A1916',
              border: '1px solid rgba(240, 237, 230, 0.08)',
              borderRadius: 'var(--radius-sm, 4px)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: item.type === 'wide' ? '180px' : '200px',
            }}
          >
            <h3
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: item.type === 'wide' ? '28px' : '22px',
                color: '#F0EDE6',
                marginBottom: item.metric ? '0.5rem' : '0.75rem',
                lineHeight: 1.2,
                transition: 'color 0.3s ease',
              }}
              className="credential-title"
            >
              {item.title}
            </h3>
            {item.subtitle && (
              <p
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '14px',
                  color: '#8A8680',
                }}
              >
                {item.subtitle}
              </p>
            )}
            {item.metric && (
              <p
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '36px',
                  fontWeight: 500,
                  color: '#D4A84B',
                }}
              >
                {item.metric}
              </p>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 1024px) {
          .credentials {
            padding: 120px 2.77778vw;
          }

          .credentials-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .credential-card--wide {
            grid-column: span 2;
          }
        }

        .credential-card {
          transition: border-color 0.3s ease;
        }

        .credential-card:hover {
          border-color: rgba(240, 237, 230, 0.2);
        }

        .credential-card:hover .credential-title {
          color: #D4A84B;
        }
      `}</style>
    </section>
  )
}