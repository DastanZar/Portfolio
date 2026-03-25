const leftImages = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop',
]

const rightImages = [
  'https://images.unsplash.com/photo-1604998103924-89e011166b26?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=800&auto=format&fit=crop',
]

export function Ending() {
  const playWow = () => {
    const audio = new Audio('/sounds/wow.mp3')
    audio.play()
  }

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0E0D0C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
        .gloria-font {
          font-family: 'Gloria Hallelujah', cursive;
          font-weight: 700;
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up 25s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 25s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        button:hover {
          transform: scale(1.1) rotate(-5deg);
        }
      `}</style>

      {/* Left Column */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '33.333%',
          height: '200%',
          opacity: 0.25,
          overflow: 'hidden',
        }}
      >
        <div
          className="animate-scroll-down"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {[...leftImages, ...leftImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '1rem',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Center Column */}
      <div
        style={{
          position: 'absolute',
          left: '33.333%',
          top: 0,
          width: '33.333%',
          height: '200%',
          opacity: 0.25,
          overflow: 'hidden',
        }}
      >
        <div
          className="animate-scroll-up"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {[...rightImages, ...rightImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '1rem',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '33.333%',
          height: '200%',
          opacity: 0.25,
          overflow: 'hidden',
        }}
      >
        <div
          className="animate-scroll-down"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {[...leftImages, ...leftImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '1rem',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          maxWidth: '64rem',
          textAlign: 'center',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          mixBlendMode: 'difference',
        }}
      >
        <p
          className="gloria-font"
          style={{
            fontSize: '3rem',
            color: '#F5F0E8',
          }}
        >
          Simply making cool
        </p>
        
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '3rem',
            color: '#F5F0E8',
          }}
        >
          <span className="gloria-font">sh*t Wilson</span>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="#F5F0E8"
            strokeWidth="3"
            style={{
              width: '4rem',
              height: '4rem',
              marginLeft: '1rem',
              animation: 'spin 12s linear infinite',
            }}
            className="md:w-24 md:h-24"
          >
            <circle cx="50" cy="50" r="45" />
            <path d="M 35 40 Q 40 35 45 40 M 55 40 Q 60 35 65 40" strokeLinecap="round" />
            <circle cx="40" cy="45" r="3" fill="#F5F0E8" />
            <circle cx="60" cy="45" r="3" fill="#F5F0E8" />
            <path d="M 35 65 C 45 80, 55 80, 65 65" strokeLinecap="round" />
          </svg>
        </div>
        
        <p
          className="gloria-font"
          style={{
            fontSize: '3rem',
            color: '#F5F0E8',
          }}
        >
          would say
        </p>
        
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <button
            onClick={playWow}
            className="gloria-font"
            style={{
              fontSize: '4.5rem',
              fontStyle: 'italic',
              color: '#D4A84B',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              lineHeight: 1,
            }}
          >
            wow
          </button>
          <span
            className="gloria-font"
            style={{
              fontSize: '3rem',
              color: '#F5F0E8',
            }}
          >
            too
          </span>
        </div>
      </div>
    </section>
  )
}