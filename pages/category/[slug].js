import { useRouter } from 'next/router'
import categories from '../../data/categories.json'
import articles from '../../data/articles.json'
import Link from 'next/link'

export default function CategoryPage() {
  const { query } = useRouter()
  const slug = query.slug
  const category = categories.find(c => c.slug === slug)
  const filtered = articles.filter(a => a.category === slug)

  if (!category) return <div className="p-6">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <Link href="/"><a className="text-blue-600">&larr; Back</a></Link>
        <h1 className="text-2xl font-bold mt-4">{category.name}</h1>
        <p className="text-gray-600 mt-2">{category.description}</p>

        <div className="mt-6 bg-white p-4 rounded shadow">
          <ul>
            {filtered.map(a => (
              <li key={a.id} className="py-3 border-b last:border-b-0">
                <Link href={`/article/${a.id}`}><a className="text-blue-600 font-medium">{a.title}</a></Link>
                <p className="text-sm text-gray-600">{a.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
