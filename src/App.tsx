import { AppShell } from './components/layout/AppShell'
import { Hero } from './components/hero/Hero'
import { Marquee } from './components/ui/Marquee'
import { About } from './components/sections/About'
import { Stack } from './components/sections/Stack'
import { Projects } from './components/sections/Projects'
import { Hackathons } from './components/sections/Hackathons'
import { Learning } from './components/sections/Learning'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <AppShell>
      <main>
        <Hero />
        <Marquee items={['BUILD', 'SHIP', 'SOLVE', 'LEARN', 'CREATE']} speed={22} />
        <About />
        <Marquee items={['FULL-STACK', 'AI', 'PRODUCTS', 'HACKATHONS', 'EXPERIMENTS']} speed={25} />
        <Stack />
        <Projects />
        <Hackathons />
        <Learning />
        <Contact />
      </main>
    </AppShell>
  )
}

export default App
