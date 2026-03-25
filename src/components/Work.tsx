import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  { id: 1, position: 'left', title: 'AegisML Ops Engine', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop' },
  { id: 2, position: 'center', title: 'HaloGenie Stack', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop' },
  { id: 3, position: 'right', title: 'MOAI Club Platform', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop' },
  { id: 4, position: 'left', title: 'SRE Knowledge Base', img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000&auto=format&fit=crop' },
  { id: 5, position: 'center', title: 'Autonomous Job Agent', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop' },
  { id: 6, position: 'right', title: 'Portfolio Generator', img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop' }
]

export function Work() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.defaults({ ease: 'power2.out' })

    const isMobile = window.innerWidth < 1024

    const items = document.querySelectorAll('.gallery-item')
    items.forEach((item, index) => {
      const position = (item as HTMLElement).getAttribute('data-position') || ['left', 'center', 'right'][index % 3]
      const wrapper = item.querySelector('.gallery-item__wrapper') as HTMLElement
      const fig = item.querySelector('.gallery-item__fig') as HTMLElement

      // On mobile, only animate first 2 items (id <= 1)
      if (isMobile && index > 1) return

      // Exact starting values from source
      const startX = isMobile ? 0 :
                     position === 'left' ? -30 :
                     position === 'right' ? 30 : 0

      const startY = isMobile ? 30 :
                     position === 'center' ? 25 : 40

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: isMobile ? '+=20%' : '+=40%',
          scrub: 1,
        }
      })

      tl.addLabel('start')

      // Wrapper slide-in (exact values)
      tl.fromTo(wrapper,
        { yPercent: startY, xPercent: startX },
        { yPercent: 0, xPercent: 0, ease: 'none' },
        'start'
      )

      // Image zoom-out (exact values)
      tl.fromTo(fig,
        { scale: 1.3 },
        { scale: 1, ease: 'none' },
        'start'
      )
    })
  }, { scope: container })

  return (
    <section
      ref={container}
      id="work"
      className="gallery"
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        backgroundColor: '#fff',
        gridTemplateColumns: 'repeat(2, 1fr)',
        rowGap: '1rem',
        columnGap: '1.4rem',
        overflow: 'hidden',
        padding: '0 2rem',
      }}
    >
      <p
        style={{
          gridColumn: '1 / -1',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11,
          color: '#4A4744',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 24,
          marginTop: 120,
        }}
      >
        / 03 Selected Work
      </p>

      {projects.map((project) => (
        <div
          key={project.id}
          className="gallery-item"
          data-position={project.position}
          style={{
            aspectRatio: '480 / 632',
          }}
        >
          <div className="gallery-item__wrapper">
            <a className="gallery-item__link" href="#">
              <figure className="gallery-item__fig">
                <img src={project.img} alt={project.title} />
              </figure>
            </a>
          </div>
        </div>
      ))}

      <style>{`
        @media (min-width: 1024px) {
          .gallery {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 3.61111vw;
            column-gap: 3.61111vw;
            padding: 0 2.77778vw;
          }
        }

        .gallery-item__wrapper {
          display: flex;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-item__link {
          width: 100%;
          height: 100%;
        }

        .gallery-item__fig {
          height: 100%;
          width: 100%;
        }

        .gallery-item__fig img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </section>
  )
}
