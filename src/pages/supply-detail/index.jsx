import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusPill from '../../components/common/StatusPill.jsx'
import { useAppState } from '../../store/AppStateProvider.jsx'

function SupplyDetailPage() {
  const { id } = useParams()
  const { supplyItems } = useAppState()
  const [submitted, setSubmitted] = useState(false)
  const item = supplyItems.find((entry) => entry.id === id)

  if (!item) {
    return (
      <div className="page app-container">
        <EmptyState title="供应信息不存在" description="请返回供应广场重新选择要查看的记录。" />
      </div>
    )
  }

  return (
    <div className="page app-container">
      <section className="page-banner page-banner--market">
        <div>
          <span className="section-heading__eyebrow">Supply Detail</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <StatusPill tone="success">供应中</StatusPill>
      </section>
      <section className="detail-section-grid">
        <article className="detail-section-card">
          <h2>供应信息</h2>
          <div className="info-table">
            <div><dt>供应方</dt><dd>{item.subtitle}</dd></div>
            <div><dt>品类</dt><dd>{item.category}</dd></div>
            <div><dt>可供数量</dt><dd>{item.quantity}</dd></div>
            <div><dt>价格说明</dt><dd>{item.price}</dd></div>
            <div><dt>地区</dt><dd>{item.location}</dd></div>
            <div><dt>更新时间</dt><dd>{item.updatedAt}</dd></div>
          </div>
        </article>
        <article className="detail-section-card">
          <h2>联系供方</h2>
          <p>{item.contactHint}</p>
          <div className="info-table">
            <div><dt>联系人</dt><dd>{item.contactName}</dd></div>
            <div><dt>身份</dt><dd>{item.contactRole}</dd></div>
          </div>
          <button className="primary-button" type="button" onClick={() => setSubmitted(true)}>
            发起采购意向
          </button>
          {submitted ? <p className="inline-feedback">采购意向已登记，可前往消息通知页查看后续沟通结果。</p> : null}
        </article>
      </section>
      <div className="page-back-link">
        <Link className="text-link" to="/supply">返回供应广场</Link>
      </div>
    </div>
  )
}

export default SupplyDetailPage
