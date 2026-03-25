import { useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { Work } from './components/Work'
import { Credentials } from './components/Credentials'
import { Ending } from './components/Ending'
import { Beyond } from './components/Beyond'
import { Timeline } from './components/Timeline'
import { PreLoader } from './components/PreLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useLenis(isLoading)

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <PreLoader onComplete={handleLoaderComplete} />}
      <div>
        <Nav />
        <Hero />
        <Introduction />
        <Work />
        <Credentials />
        <Beyond />
        <Timeline />
        <Ending />
      </div>
    </>
  )
}

export default App
