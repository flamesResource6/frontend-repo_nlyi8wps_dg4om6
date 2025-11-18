import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Gulf Global Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-blue-100/90"
          >
            Discover Muscat and the Dimaniyat Islands aboard our 11.3m Looker 370 glass-bottom boat. Memorable day trips, serene sunset cruises, and crystal-clear reef viewing.
          </motion.p>
          <div className="mt-10 flex gap-3">
            <a href="#trips" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow">
              Explore Trips
            </a>
            <a href="#booking" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/30">
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900" />
    </section>
  )
}
