import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import MarketCard from '../../components/cards/MarketCard.jsx'
import { categoryFilters } from '../../mock/data/content.js'
import { useAppState } from '../../store/AppStateProvider.jsx'

function DemandPage() {
  const { demandItems } = useAppState()
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredItems = useMemo(
    () => demandItems.filter((item) => activeCategory === '全部' || item.category === activeCategory),
    [activeCategory, demandItems],
  )

  return (
    <div className="page app-container">
      <section className="page-banner page-banner--market">
        <div>
          <span className="section-heading__eyebrow">Demand Market</span>
          <h1>求购广场</h1>
          <p>面向普通用户的求购意向发布区，突出预算、数量、产地偏好与响应入口。</p>
        </div>
        <Link className="primary-button" to="/publish-demand">
          发布求购需求
        </Link>
      </section>
      <section className="filter-panel">
        <div className="filter-group">
          <span>分类筛选</span>
          <div className="chip-list">
            {categoryFilters.map((item) => (
              <button key={item} className={`chip${activeCategory === item ? ' is-active' : ''}`} onClick={() => setActiveCategory(item)} type="button">
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="stack-list">
        {filteredItems.map((item) => (
          <MarketCard key={item.id} item={item} type="demand" />
        ))}
      </section>
    </div>
  )
}

export default DemandPage
