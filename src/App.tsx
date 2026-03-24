import { useLenis } from './hooks/useLenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'

function App() {
  useLenis()
  return (
    <div>
      <Nav />
      <Hero />
    </div>
  )
}

export default App
