import { Link, useParams } from 'react-router-dom'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusPill from '../../components/common/StatusPill.jsx'
import { useAppState } from '../../store/AppStateProvider.jsx'

function OrderDetailPage() {
  const { id } = useParams()
  const { orders, updateOrderStatus } = useAppState()
  const order = orders.find((item) => item.id === id)

  if (!order) {
    return (
      <div className="page app-container">
        <EmptyState title="订单不存在" description="请检查订单编号是否正确，或返回订单列表重新选择。" />
      </div>
    )
  }

  return (
    <div className="page app-container">
      <section className="page-banner">
        <div>
          <span className="section-heading__eyebrow">Order Detail</span>
          <h1>{order.title}</h1>
          <p>{order.id}</p>
        </div>
        <StatusPill tone={order.status === '已完成' ? 'success' : order.status === '已取消' ? 'danger' : 'info'}>{order.status}</StatusPill>
      </section>
      <section className="detail-section-grid">
        <article className="detail-section-card">
          <h2>订单进度</h2>
          <div className="timeline-list">
            {order.timeline.map((item, index) => (
              <div key={item} className="timeline-item">
                <span className="timeline-item__dot">{index + 1}</span>
                <div>
                  <strong>{item}</strong>
                  <p>当前流程节点用于静态演示，后续由后端状态驱动。</p>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="detail-section-card">
          <h2>收货与备注</h2>
          <div className="info-table">
            <div><dt>收货人</dt><dd>{order.consignee}</dd></div>
            <div><dt>收货地址</dt><dd>{order.address}</dd></div>
            <div><dt>订单金额</dt><dd>{order.amount}</dd></div>
            <div><dt>备注</dt><dd>{order.note}</dd></div>
          </div>
          <div className="detail-panel__actions">
            <button className="primary-button" onClick={() => updateOrderStatus(order.id, '已完成')} type="button">确认收货</button>
            <button className="ghost-button" onClick={() => updateOrderStatus(order.id, '已取消')} type="button">取消订单</button>
          </div>
        </article>
      </section>
      <div className="page-back-link">
        <Link className="text-link" to="/orders">返回订单列表</Link>
      </div>
    </div>
  )
}

export default OrderDetailPage
