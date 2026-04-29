import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import Problem from './components/Problem'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import Technology from './components/Technology'
import Stats from './components/Stats'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[800px] bg-grid-fade" />
        <div className="glow-orb left-[-200px] top-[100px] h-[500px] w-[500px] bg-brand-600/30" />
        <div className="glow-orb right-[-200px] top-[600px] h-[500px] w-[500px] bg-accent-500/20" />
        <div className="glow-orb left-1/3 top-[1400px] h-[600px] w-[600px] bg-purple-700/15" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Problem />
        <ValueProps />
        <HowItWorks />
        <Stats />
        <Technology />
        <Comparison />
        <Pricing />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
