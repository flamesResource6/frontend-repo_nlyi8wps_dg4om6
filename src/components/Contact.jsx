import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${API}/inquire`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, msg: 'Thanks! We will get back to you shortly.' })
      else setStatus({ ok: false, msg: data.detail || 'Something went wrong' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, msg: 'Network error' })
    }
  }

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Contact Us</h2>
        <p className="text-blue-100/80 mb-8">Based in Muscat, Oman. Reach out for private charters, group rates, or special requests.</p>
        {status && (
          <div className={`mb-6 rounded-lg p-4 ${status.ok ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>
            {status.msg}
          </div>
        )}
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-blue-100 mb-1">Name</label>
            <input name="name" required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-blue-100 mb-1">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-blue-100 mb-1">Subject</label>
            <input name="subject" required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-blue-100 mb-1">Message</label>
            <textarea name="message" rows="4" required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
