import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const hellos = [
  'Hello',      // English
  'Hola',       // Spanish
  'Bonjour',    // French
  'Hallo',      // German
  'Ciao',       // Italian
  'Olá',        // Portuguese
  'Привет',     // Russian
  '你好',        // Chinese
  'こんにちは',   // Japanese
  '안녕하세요',   // Korean
  'مرحبا',      // Arabic
  'Namaste',    // Hindi
  'Szia',       // Hungarian
  'Ahoj',       // Czech
  'Hei',        // Finnish
  'Hej',        // Swedish
  'Hallo',      // Dutch
  'Witaj',      // Polish
  'Salve',      // Latin
  'Xin chào',   // Vietnamese
]

interface PreLoaderProps {
  onComplete: () => void
}

export function PreLoader({ onComplete }: PreLoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (currentIndex >= hellos.length) {
      // All words shown, trigger completion after a brief delay
      const timeout = setTimeout(() => {
        onComplete()
      }, 300)
      return () => clearTimeout(timeout)
    }

    // Flash effect: fade out slightly, change word, fade back in
    const fadeOutTimeout = setTimeout(() => {
      setOpacity(0.8)
    }, 60)

    const changeWordTimeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
      setOpacity(1)
    }, 120)

    return () => {
      clearTimeout(fadeOutTimeout)
      clearTimeout(changeWordTimeout)
    }
  }, [currentIndex, onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{
          duration: 1.2,
          ease: [0.87, 0, 0.13, 1], // expo easing
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#0E0D0C',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0.8 }}
          animate={{ opacity }}
          transition={{ duration: 0.06 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 8vw, 6rem)',
            color: '#F5F0E8',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          {hellos[currentIndex] || hellos[hellos.length - 1]}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  )
}
