import { Link } from 'react-router-dom'

function ArticleCard({ article, featured = false }) {
  return (
    <article className={`article-card${featured ? ' article-card--featured' : ''}`}>
      <div className="article-card__media">{article.coverLabel}</div>
      <div className="article-card__body">
        <div className="article-card__meta">
          <span>{article.category}</span>
          <span>{article.publishAt}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <Link className="text-link" to={`/news/${article.id}`}>
          阅读全文
        </Link>
      </div>
    </article>
  )
}

export default ArticleCard
