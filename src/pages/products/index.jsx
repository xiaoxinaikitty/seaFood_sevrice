import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/cards/ProductCard.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import { categoryFilters, originFilters, products } from '../../mock/data/content.js'

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [activeOrigin, setActiveOrigin] = useState('全部产地')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = activeCategory === '全部' || product.category === activeCategory
      const originMatch = activeOrigin === '全部产地' || product.origin.includes(activeOrigin)
      return categoryMatch && originMatch
    })
  }, [activeCategory, activeOrigin])

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
            {categoryFilters.map((item) => (
              <button key={item} className={`chip${activeCategory === item ? ' is-active' : ''}`} onClick={() => setActiveCategory(item)} type="button">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span>产地</span>
          <div className="chip-list">
            {originFilters.map((item) => (
              <button key={item} className={`chip${activeOrigin === item ? ' is-active' : ''}`} onClick={() => setActiveOrigin(item)} type="button">
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          title="商品列表"
          description={`当前共展示 ${filteredProducts.length} 个商品条目。以下内容为模拟数据，可直接替换为接口结果。`}
        />
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
