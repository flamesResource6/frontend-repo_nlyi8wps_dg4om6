import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Trips() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/trips`).then(r => r.json()).then(setTrips).finally(() => setLoading(false))
  }, [])

  return (
    <section id="trips" className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Trips</h2>
        <p className="text-blue-100/80 mb-8">Based in Muscat, Oman. The Looker 370 accommodates 18-20 guests for Dimaniyat Island day trips and 8-10 guests for sunset cruises.</p>
        {loading ? (
          <p className="text-blue-100">Loading trips...</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {trips.map(trip => (
              <div key={trip._id} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <div className="aspect-[16/9] rounded-lg overflow-hidden bg-slate-800 mb-4">
                  {trip.images?.[0] && (
                    <img src={trip.images[0]} alt={trip.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white">{trip.title}</h3>
                <p className="mt-2 text-blue-100/90">{trip.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-blue-100/80 text-sm">
                  <span>OMR {trip.price_per_person.toFixed(1)} per person</span>
                  <span>•</span>
                  <span>Up to {trip.capacity} guests</span>
                  <span>•</span>
                  <span>{trip.duration_hours} hours</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <a href="#booking" className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold">Book</a>
                  <a href="#faq" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-semibold">Learn more</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
