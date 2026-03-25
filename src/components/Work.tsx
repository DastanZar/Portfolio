import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  // Row 1
  { id: '01', title: 'AegisML Ops Engine', desc: 'Self-healing ML infrastructure', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop' },
  { id: '02', title: 'HaloGenie Stack', desc: 'Azure OpenAI Observability', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop' },
  { id: '03', title: 'MOAI Club Platform', desc: 'Community listening circles', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop' },
  // Row 2
  { id: '04', title: 'SRE Knowledge Base', desc: '132-page Confluence system', img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000&auto=format&fit=crop' },
  { id: '05', title: 'Autonomous Job Agent', desc: 'AI-driven application pipeline', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop' },
  { id: '06', title: 'Portfolio Generator', desc: 'Resume-to-website architecture', img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop' }
]

export function Work() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const rows = document.querySelectorAll('.projects-row')
    
    rows.forEach((row, rowIndex) => {
      const leftCard = row.querySelector('.card-left')
      const centerCard = row.querySelector('.card-center')
      const rightCard = row.querySelector('.card-right')

      // SET INITIAL STATE (hidden before animation)
      gsap.set(leftCard, { x: -220, opacity: 0 })
      gsap.set(centerCard, { y: 80, opacity: 0 })
      gsap.set(rightCard, { x: 220, opacity: 0 })

      // SLIDE IN TIMELINE when row enters viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        }
      })

      tl.to(leftCard, { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, 0)
        .to(centerCard, { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, 0.15)
        .to(rightCard, { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, 0.05)

      // SLIDE OUT when scrolling past (row exits upward)
      if (rowIndex < rows.length - 1) {
        gsap.to(row, {
          y: -60,
          opacity: 0,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: row,
            start: 'bottom 20%',
            end: 'bottom -10%',
            scrub: 1,
          }
        })
      }
    })
  }, { scope: container })

  return (
    <section
      ref={container}
      id="work"
      className="projects-section"
      style={{
        padding: '120px 40px',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        overflow: 'hidden',
      }}
    >
      <p
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11,
          color: '#4A4744',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        / 03 Selected Work
      </p>

      {/* Row 1 */}
      <div className="projects-row" data-row="1">
        <div className="project-card card-left">
          <img src={projects[0].img} alt={projects[0].title} />
          <div className="card-overlay"><span>{projects[0].title}</span></div>
        </div>
        <div className="project-card card-center">
          <img src={projects[1].img} alt={projects[1].title} />
          <div className="card-overlay"><span>{projects[1].title}</span></div>
        </div>
        <div className="project-card card-right">
          <img src={projects[2].img} alt={projects[2].title} />
          <div className="card-overlay"><span>{projects[2].title}</span></div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="projects-row" data-row="2">
        <div className="project-card card-left">
          <img src={projects[3].img} alt={projects[3].title} />
          <div className="card-overlay"><span>{projects[3].title}</span></div>
        </div>
        <div className="project-card card-center">
          <img src={projects[4].img} alt={projects[4].title} />
          <div className="card-overlay"><span>{projects[4].title}</span></div>
        </div>
        <div className="project-card card-right">
          <img src={projects[5].img} alt={projects[5].title} />
          <div className="card-overlay"><span>{projects[5].title}</span></div>
        </div>
      </div>

      <style>{`
        .projects-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        
        .project-card {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .project-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .project-card:hover img {
          transform: scale(1.04);
        }
        
        .card-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
        }
        
        .project-card:hover .card-overlay {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
