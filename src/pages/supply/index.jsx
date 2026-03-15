import { Link } from 'react-router-dom'
import MarketCard from '../../components/cards/MarketCard.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import { supplyItems, categoryFilters } from '../../mock/data/content.js'

function SupplyPage() {
  return (
    <div className="page app-container">
      <section className="page-banner page-banner--market">
        <div>
          <span className="section-heading__eyebrow">Supply Market</span>
          <h1>供应广场</h1>
          <p>集中展示供应方发布的海产品供应信息，突出品类、可供数量、价格区间和地区。</p>
        </div>
        <Link className="primary-button" to="/publish-supply">
          发布供应信息
        </Link>
      </section>
      <section className="filter-panel">
        <div className="filter-group">
          <span>热门分类</span>
          <div className="chip-list">
            {categoryFilters.map((item, index) => (
              <button key={item} className={`chip${index === 0 ? ' is-active' : ''}`} type="button">
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="stack-list">
        {supplyItems.map((item) => (
          <MarketCard key={item.id} item={item} type="supply" />
        ))}
      </section>
    </div>
  )
}

export default SupplyPage
