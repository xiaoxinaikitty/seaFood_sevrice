import { Link } from 'react-router-dom'
import ProductCard from '../../components/cards/ProductCard.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import { categoryFilters, originFilters, products } from '../../mock/data/content.js'

function ProductsPage() {
  return (
    <div className="page app-container">
      <section className="page-banner">
        <div>
          <span className="section-heading__eyebrow">SeaFood Mall</span>
          <h1>海产品商城</h1>
          <p>支持分类筛选、产地筛选、价格说明和相关推荐，面向商品浏览与学习型下单场景。</p>
        </div>
        <Link className="ghost-button" to="/publish-demand">
          没找到想要的？发布求购
        </Link>
      </section>

      <section className="filter-panel">
        <div className="filter-group">
          <span>分类</span>
          <div className="chip-list">
            {categoryFilters.map((item, index) => (
              <button key={item} className={`chip${index === 0 ? ' is-active' : ''}`} type="button">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span>产地</span>
          <div className="chip-list">
            {originFilters.map((item, index) => (
              <button key={item} className={`chip${index === 0 ? ' is-active' : ''}`} type="button">
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          title="商品列表"
          description="以下内容使用写死模拟数据，后续可直接替换为接口请求结果。"
        />
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
