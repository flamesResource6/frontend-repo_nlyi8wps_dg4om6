import Hero from './components/Hero'
import Trips from './components/Trips'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white">Gulf Global Tours</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/90">
            <a href="#trips" className="hover:text-white">Trips</a>
            <a href="#booking" className="hover:text-white">Book</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Trips />
        <Reviews />
        <Booking />
        <FAQ />
        <div id="contact"><Contact /></div>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-blue-200/70">
          <p className="font-semibold text-white">Gulf Global Tours</p>
          <p className="mt-1">Muscat, Oman • Looker 370 glass-bottom boat</p>
          <p className="mt-1">Dimaniyat Islands Day Trips • Muscat Sunset Cruises</p>
          <p className="mt-4">© {new Date().getFullYear()} Gulf Global Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
