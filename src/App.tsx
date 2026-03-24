import { useLenis } from './hooks/useLenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { Work } from './components/Work'
import { Beyond } from './components/Beyond'
import { Timeline } from './components/Timeline'

function App() {
  useLenis()
  return (
    <div>
      <Nav />
      <Hero />
      <Introduction />
      <Work />
      <Beyond />
      <Timeline />
    </div>
  )
}

export default App
