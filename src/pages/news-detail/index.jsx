import { Link, useParams } from 'react-router-dom'
import EmptyState from '../../components/common/EmptyState.jsx'
import { articles, getArticleById } from '../../mock/data/content.js'

function NewsDetailPage() {
  const { id } = useParams()
  const article = getArticleById(id)

  if (!article) {
    return (
      <div className="page app-container">
        <EmptyState title="文章不存在" description="当前文章可能已下线或演示数据中未配置该编号。" />
      </div>
    )
  }

  return (
    <div className="page app-container article-detail-page">
      <article className="article-detail">
        <span className="section-heading__eyebrow">{article.category}</span>
        <h1>{article.title}</h1>
        <div className="article-detail__meta">
          <span>发布于 {article.publishAt}</span>
          <span>作者：平台内容中心</span>
        </div>
        <div className="article-detail__cover">{article.coverLabel}</div>
        <div className="article-detail__content">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <aside className="side-panel">
        <div className="side-card">
          <h3>推荐阅读</h3>
          <div className="mini-list">
            {articles.filter((item) => item.id !== article.id).slice(0, 3).map((item) => (
              <Link key={item.id} className="mini-list__item mini-list__item--link" to={`/news/${item.id}`}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}

export default NewsDetailPage
