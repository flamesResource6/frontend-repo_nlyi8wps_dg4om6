import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Booking() {
  const [trips, setTrips] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
    fetch(`${API}/trips`).then(r => r.json()).then(setTrips)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.people_count = Number(payload.people_count)
    try {
      const res = await fetch(`${API}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, msg: 'Booking received! We will confirm shortly.' })
      else setStatus({ ok: false, msg: data.detail || 'Something went wrong' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, msg: 'Network error' })
    }
  }

  return (
    <section id="booking" className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Book Your Trip</h2>
        <p className="text-blue-100/80 mb-8">Choose your trip and tell us who’s coming. We’ll get back to you with confirmation and meeting point details.</p>
        {status && (
          <div className={`mb-6 rounded-lg p-4 ${status.ok ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>
            {status.msg}
          </div>
        )}
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
          <div className="sm:col-span-2">
            <label className="block text-sm text-blue-100 mb-1">Trip</label>
            <select name="trip_type" className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2">
              {trips.map(t => (
                <option key={t._id} value={t.trip_type}>{t.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-blue-100 mb-1">Name</label>
            <input name="name" required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-blue-100 mb-1">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-blue-100 mb-1">Phone</label>
            <input name="phone" required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-blue-100 mb-1">Date</label>
            <input type="date" name="date" required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-blue-100 mb-1">People</label>
            <input type="number" name="people_count" min="1" defaultValue={2} className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-blue-100 mb-1">Notes</label>
            <textarea name="notes" rows="3" className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Submit Booking</button>
          </div>
        </form>
      </div>
    </section>
  )
}
