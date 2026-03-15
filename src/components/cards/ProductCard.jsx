import { Link } from 'react-router-dom'
import StatusPill from '../common/StatusPill.jsx'

function ProductCard({ product, compact = false }) {
  return (
    <article className={`product-card${compact ? ' product-card--compact' : ''}`}>
      <div className="product-card__media">
        <span>{product.imageLabel}</span>
      </div>
      <div className="product-card__body">
        <div className="product-card__meta">
          <StatusPill tone="info">{product.category}</StatusPill>
          <span>{product.origin}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <div className="product-card__footer">
          <div>
            <strong>{product.price}</strong>
            <span>{product.spec}</span>
          </div>
          <Link className="text-link" to={`/products/${product.id}`}>
            查看详情
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
