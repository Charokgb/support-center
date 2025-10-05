import { useState } from 'react'

export default function Submit() {
  const [state, setState] = useState({ name: '', email: '', topic: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit', state)
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Submit a request</h1>
        {sent ? (
          <div className="bg-white p-4 rounded shadow">Thanks — we received your message.</div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
            <label className="block mb-3">
              <span className="text-sm">Name</span>
              <input name="name" value={state.name} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
            </label>
            <label className="block mb-3">
              <span className="text-sm">Email</span>
              <input name="email" type="email" value={state.email} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
            </label>
            <label className="block mb-3">
              <span className="text-sm">Topic</span>
              <input name="topic" value={state.topic} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
            </label>
            <label className="block mb-3">
              <span className="text-sm">Message</span>
              <textarea name="message" value={state.message} onChange={handleChange} className="w-full p-2 border rounded mt-1" rows={6} />
            </label>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
          </form>
        )}
      </div>
    </div>
  )
}
