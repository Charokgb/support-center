import Link from 'next/link'
import categories from '../data/categories.json'
import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import articles from '../data/articles.json'

export default function Home() {
  const [query, setQuery] = useState('')
  const fuse = useMemo(() => new Fuse(articles, { keys: ['title', 'body'], threshold: 0.3 }), [])
  const results = query ? fuse.search(query).map(r => r.item) : []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Support Center</h1>
          <nav>
            <Link href="/submit"><a className="px-3 py-2 rounded bg-blue-600 text-white">Submit request</a></Link>
          </nav>
        </header>

        <section className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-3">How can we help?</h2>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search articles, guides, and FAQs..."
            className="w-full p-3 border rounded"
          />
          {query && (
            <div className="mt-4">
              <h3 className="font-medium mb-2">Search results</h3>
              {results.length === 0 && <p>No results found.</p>}
              <ul>
                {results.map(r => (
                  <li key={r.id} className="mb-2">
                    <Link href={`/article/${r.id}`}><a className="text-blue-600">{r.title}</a></Link>
                    <p className="text-sm text-gray-600">{r.excerpt}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(cat => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <a className="block bg-white rounded p-4 shadow hover:shadow-md">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{cat.description}</p>
              </a>
            </Link>
          ))}
        </section>

        <footer className="mt-12 text-sm text-gray-500">
          <p>Replica support center — built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  )
}
