import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Reviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`${API}/reviews`).then(r => r.json()).then(setReviews)
  }, [])

  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Traveler Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-blue-100/80">No reviews yet. Be the first to share your experience!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r._id} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{r.name}</p>
                  <p className="text-yellow-400">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
                </div>
                <p className="mt-3 text-blue-100/90">{r.comment}</p>
                {r.trip_type && <p className="mt-2 text-xs text-blue-200/70">Trip: {r.trip_type}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
