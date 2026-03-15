import { Link } from 'react-router-dom'
import StatusPill from '../../components/common/StatusPill.jsx'
import { orderTabs, orders } from '../../mock/data/content.js'

function OrdersPage() {
  return (
    <div className="page app-container">
      <section className="page-banner">
        <div>
          <span className="section-heading__eyebrow">Orders</span>
          <h1>我的订单</h1>
          <p>学习型订单保留基础状态机，用于展示交易流转和页面交互逻辑。</p>
        </div>
      </section>
      <section className="filter-panel">
        <div className="chip-list">
          {orderTabs.map((tab, index) => (
            <button key={tab} className={`chip${index === 0 ? ' is-active' : ''}`} type="button">
              {tab}
            </button>
          ))}
        </div>
      </section>
      <section className="stack-list">
        {orders.map((order) => (
          <article key={order.id} className="order-card">
            <div className="order-card__header">
              <div>
                <strong>{order.title}</strong>
                <p>{order.id}</p>
              </div>
              <StatusPill tone={order.status === '已完成' ? 'success' : order.status === '已取消' ? 'danger' : 'info'}>
                {order.status}
              </StatusPill>
            </div>
            <div className="order-card__grid">
              <div>
                <span>数量</span>
                <strong>{order.quantity}</strong>
              </div>
              <div>
                <span>订单金额</span>
                <strong>{order.amount}</strong>
              </div>
              <div>
                <span>供应方</span>
                <strong>{order.supplier}</strong>
              </div>
              <div>
                <span>创建时间</span>
                <strong>{order.createdAt}</strong>
              </div>
            </div>
            <div className="order-card__footer">
              <span>{order.note}</span>
              <Link className="text-link" to={`/orders/${order.id}`}>
                查看详情
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default OrdersPage
