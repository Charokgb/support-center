import { useRouter } from 'next/router'
import articles from '../../data/articles.json'
import Link from 'next/link'

export default function ArticlePage() {
  const { query } = useRouter()
  const id = query.id
  const article = articles.find(a => a.id.toString() === id)

  if (!article) return <div className="p-6">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-6">
        <Link href={`/category/${article.category}`}><a className="text-blue-600">&larr; Back to category</a></Link>
        <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
        <p className="text-sm text-gray-500 mt-1">{article.published || 'Published'}</p>

        <article className="mt-6 bg-white p-6 rounded shadow">
          <div className="prose">
            <p>{article.body}</p>
          </div>
        </article>

        <div className="mt-6">
          <h3 className="font-semibold">Related articles</h3>
          <ul>
            {article.related?.map(rid => {
              const rel = articles.find(a => a.id === rid)
              if (!rel) return null
              return (
                <li key={rid}><Link href={`/article/${rel.id}`}><a className="text-blue-600">{rel.title}</a></Link></li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
