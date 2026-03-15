import { Link } from 'react-router-dom'
import StatusPill from '../common/StatusPill.jsx'

function MarketCard({ item, type = 'supply' }) {
  const detailPath = type === 'supply' ? `/supply/${item.id}` : `/demand/${item.id}`

  return (
    <article className="market-card">
      <div className="market-card__header">
        <div>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
        <StatusPill tone={type === 'supply' ? 'success' : 'warning'}>
          {type === 'supply' ? '供应中' : item.status}
        </StatusPill>
      </div>
      <dl className="market-card__grid">
        <div>
          <dt>品类</dt>
          <dd>{item.category}</dd>
        </div>
        <div>
          <dt>{type === 'supply' ? '可供数量' : '目标数量'}</dt>
          <dd>{item.quantity}</dd>
        </div>
        <div>
          <dt>{type === 'supply' ? '参考价格' : '预算范围'}</dt>
          <dd>{item.price}</dd>
        </div>
        <div>
          <dt>地区</dt>
          <dd>{item.location}</dd>
        </div>
      </dl>
      <div className="market-card__footer market-card__footer--actions">
        <span>{item.updatedAt}</span>
        <div className="market-card__actions">
          <Link className="text-link" to={detailPath}>
            查看详情
          </Link>
          <Link className="ghost-button" to={detailPath}>
            {type === 'supply' ? '联系供方' : '响应需求'}
          </Link>
        </div>
      </div>
    </article>
  )
}

export default MarketCard
