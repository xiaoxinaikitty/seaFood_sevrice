import ArticleCard from '../../components/cards/ArticleCard.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import { articles, notices, products } from '../../mock/data/content.js'

function NewsPage() {
  return (
    <div className="page app-container">
      <section className="page-banner">
        <div>
          <span className="section-heading__eyebrow">News Center</span>
          <h1>资讯中心</h1>
          <p>用于承载海产品知识、平台资讯、保鲜常识和业务分析文章。</p>
        </div>
      </section>
      <section className="content-with-sidebar">
        <div className="stack-list">
          <SectionHeading title="最新文章" description="文章模块采用列表与主推混合结构，兼顾阅读与推荐。" />
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} featured={index === 0} />
          ))}
        </div>
        <aside className="side-panel">
          <div className="side-card">
            <h3>热门商品</h3>
            <div className="mini-list">
              {products.slice(0, 3).map((item) => (
                <div key={item.id} className="mini-list__item">
                  <strong>{item.name}</strong>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="side-card">
            <h3>平台公告</h3>
            <div className="mini-list">
              {notices.map((item) => (
                <div key={item} className="mini-list__item mini-list__item--text">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default NewsPage
