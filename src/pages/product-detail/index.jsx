import { Link, useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../../components/cards/ProductCard.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusPill from '../../components/common/StatusPill.jsx'
import { getProductById, products } from '../../mock/data/content.js'
import { useAppState } from '../../store/AppStateProvider.jsx'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { favorites, toggleFavorite } = useAppState()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="page app-container">
        <EmptyState title="商品不存在" description="当前商品可能已下架或演示数据中不存在该编号。" />
      </div>
    )
  }

  const isFavorite = favorites.includes(product.id)

  return (
    <div className="page app-container">
      <section className="detail-layout">
        <div className="detail-gallery">
          <div className="detail-gallery__main">{product.imageLabel}</div>
          <div className="detail-gallery__thumbs">
            {product.features.map((feature) => (
              <div key={feature} className="detail-gallery__thumb">
                {feature}
              </div>
            ))}
          </div>
        </div>
        <div className="detail-panel">
          <div className="detail-panel__meta">
            <StatusPill tone="info">{product.category}</StatusPill>
            <span>{product.origin}</span>
            <span>{product.publishAt}</span>
          </div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="detail-panel__price">
            <strong>{product.price}</strong>
            <span>{product.spec}</span>
          </div>
          <div className="detail-panel__info">
            <div><dt>供应方</dt><dd>{product.merchant}</dd></div>
            <div><dt>库存状态</dt><dd>{product.stock}</dd></div>
          </div>
          <div className="detail-panel__actions">
            <button className="primary-button" type="button" onClick={() => navigate(`/checkout/${product.id}`)}>
              提交模拟订单
            </button>
            <button className="ghost-button" type="button" onClick={() => toggleFavorite(product.id)}>
              {isFavorite ? '取消收藏' : '加入收藏'}
            </button>
          </div>
        </div>
      </section>

      <section className="section-block detail-section-grid">
        <article className="detail-section-card">
          <h2>商品介绍</h2>
          <p>{product.description}</p>
        </article>
        <article className="detail-section-card">
          <h2>用户评论</h2>
          <div className="comment-list">
            {product.comments.map((comment) => (
              <div key={comment.user} className="comment-item">
                <strong>{comment.user}</strong>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-block">
        <h2 className="section-title">相关推荐</h2>
        <div className="product-grid">
          {products.filter((item) => item.id !== product.id).slice(0, 3).map((item) => (
            <ProductCard key={item.id} product={item} compact />
          ))}
        </div>
      </section>

      <div className="page-back-link">
        <Link className="text-link" to="/products">返回商品列表</Link>
      </div>
    </div>
  )
}

export default ProductDetailPage
