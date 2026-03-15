import { Link } from 'react-router-dom'
import ProductCard from '../../components/cards/ProductCard.jsx'
import MarketCard from '../../components/cards/MarketCard.jsx'
import ArticleCard from '../../components/cards/ArticleCard.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import { articles, heroStats, notices, products } from '../../mock/data/content.js'
import { useAppState } from '../../store/AppStateProvider.jsx'

function HomePage() {
  const { supplyItems, demandItems } = useAppState()

  return (
    <div className="page page--home">
      <section className="hero-panel app-container">
        <div className="hero-panel__content">
          <span className="hero-panel__eyebrow">SeaFood Service Platform</span>
          <h1>面向学习与交流场景的海产品服务平台</h1>
          <p>
            覆盖海产品展示、供需发布、学习型订单、资讯阅读与个人中心，
            用完整前端页面呈现 Spring Cloud 微服务项目的业务全貌。
          </p>
          <div className="hero-panel__actions">
            <Link className="primary-button" to="/products">
              浏览海产品商城
            </Link>
            <Link className="ghost-button" to="/publish-demand">
              发布求购需求
            </Link>
          </div>
        </div>
        <div className="hero-panel__visual">
          <div className="hero-visual-card hero-visual-card--primary">
            <strong>热门推荐</strong>
            <span>深海白虾礼盒</span>
            <p>冷链到仓，适合家宴与项目演示。</p>
          </div>
          <div className="hero-visual-card hero-visual-card--secondary">
            <strong>供需活跃</strong>
            <span>当前展示 {supplyItems.length + demandItems.length} 条供需信息</span>
          </div>
        </div>
      </section>

      <section className="stats-strip app-container">
        {heroStats.map((item) => (
          <article key={item.label} className="stats-strip__card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section-block app-container">
        <SectionHeading
          eyebrow="Hot Picks"
          title="热门海产品推荐"
          description="覆盖鱼类、虾蟹、贝类、海藻与冻品，帮助用户快速建立平台认知。"
          action={<Link className="text-link" to="/products">查看全部商品</Link>}
        />
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section-block app-container section-block--split">
        <div>
          <SectionHeading
            eyebrow="Supply Market"
            title="最新供应信息"
            description="突出品类、数量、价格和地区等关键字段。"
            action={<Link className="text-link" to="/supply">进入供应广场</Link>}
          />
          <div className="stack-list">
            {supplyItems.slice(0, 2).map((item) => (
              <MarketCard key={item.id} item={item} type="supply" />
            ))}
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Demand Market"
            title="最新求购需求"
            description="方便供应者快速响应不同地区和预算的采购意向。"
            action={<Link className="text-link" to="/demand">进入求购广场</Link>}
          />
          <div className="stack-list">
            {demandItems.slice(0, 2).map((item) => (
              <MarketCard key={item.id} item={item} type="demand" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block app-container section-block--split section-block--news">
        <div>
          <SectionHeading
            eyebrow="Knowledge Hub"
            title="海产品知识与平台资讯"
            description="增强平台内容属性，支持答辩展示和业务讲解。"
          />
          <ArticleCard article={articles[0]} featured />
        </div>
        <div className="news-side-list">
          {articles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="section-block app-container section-block--notice">
        <SectionHeading
          eyebrow="Platform Notice"
          title="平台公告"
          description="当前站点用于课程设计、毕业设计与系统演示，不涉及真实支付。"
        />
        <div className="notice-board">
          {notices.map((notice) => (
            <div key={notice} className="notice-board__item">
              <span className="notice-board__dot" />
              <p>{notice}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
