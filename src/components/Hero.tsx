import { useState, useEffect } from 'react'

export function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: '#F5F0E8',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      {/* Left Column */}
      <div
        style={{
          width: '55%',
          padding: '72px 0 120px 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Top Row with Clock and Status */}
        <div
          style={{
            position: 'absolute',
            top: 32,
            left: 80,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: '#8A8680',
            }}
          >
            BENGALURU · IST
          </span>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: '#8A8680',
            }}
          >
            {time}
          </span>
        </div>

        {/* Main Heading */}
        <div style={{ marginBottom: 48 }}>
          <h1
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 88,
              fontWeight: 400,
              color: '#1A1916',
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            Avihai Singh Chauhan
          </h1>
          <h2
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 72,
              fontStyle: 'italic',
              color: '#8A8680',
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            — Engineer · Builder
          </h2>
        </div>

        {/* Paragraph */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 16,
            color: '#8A8680',
            lineHeight: 1.6,
            margin: 0,
            marginBottom: 48,
          }}
        >
          DevOps · AI Infrastructure · SRE
          <br />
          MOAI Club Founder · Community Builder
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <button
            onClick={() => scrollToSection('work')}
            style={{
              background: '#1A1916',
              color: '#F5F0E8',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              padding: '14px 32px',
              borderRadius: 100,
              border: 'none',
              cursor: 'pointer',
              transition: 'background 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2A2826'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1A1916'
            }}
          >
            View My Work →
          </button>
          <button
            style={{
              background: 'transparent',
              color: '#8A8680',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              padding: '14px 0',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'text-decoration 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none'
            }}
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative w-full md:w-2/5 flex flex-col justify-between items-end min-h-[50vh] md:min-h-full">
        
        {/* Rotating Badge */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            right: 48,
            width: 100,
            height: 100,
            border: '1px solid rgba(26,25,22,0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'spin 8s linear infinite',
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 10,
                fill: '#1A1916',
              }}
            >
              <textPath href="#circlePath">
                Get in touch · Get in touch ·
              </textPath>
            </text>
            <g transform="translate(38, 38)">
              <rect
                x="0"
                y="0"
                width="24"
                height="18"
                rx="2"
                fill="none"
                stroke="#1A1916"
                strokeWidth="1.5"
              />
              <rect
                x="2"
                y="2"
                width="20"
                height="12"
                fill="none"
                stroke="#1A1916"
                strokeWidth="1"
              />
              <rect
                x="6"
                y="16"
                width="12"
                height="2"
                fill="#1A1916"
              />
            </g>
          </svg>
        </div>
        
        {/* Doodle - bottom aligned, anchored natively */}
        <img
          src="/images/doodle.png"
          alt="Avihai Illustration"
          className="w-full max-w-[280px] md:max-w-[450px] h-auto mt-auto opacity-85 -translate-x-[80px] md:-translate-x-[60px]"
          style={{ filter: 'brightness(0)' }}
        />
      </div>

      {/* Bottom Edge */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 80,
        }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
          fill="#EDE8DF"
        />
      </svg>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
