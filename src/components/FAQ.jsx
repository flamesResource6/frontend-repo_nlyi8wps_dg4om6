import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function FAQ() {
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    fetch(`${API}/faqs`).then(r => r.json()).then(setFaqs)
  }, [])

  return (
    <section id="faq" className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          {faqs.map((f) => (
            <details key={f._id} className="group p-6">
              <summary className="list-none flex justify-between items-center cursor-pointer">
                <span className="text-white font-semibold">{f.question}</span>
                <span className="text-blue-200/70 group-open:hidden">+</span>
                <span className="text-blue-200/70 hidden group-open:inline">−</span>
              </summary>
              <p className="mt-3 text-blue-100/90">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
