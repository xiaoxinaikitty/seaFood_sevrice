import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusPill from '../../components/common/StatusPill.jsx'
import { useAppState } from '../../store/AppStateProvider.jsx'

function DemandDetailPage() {
  const { id } = useParams()
  const { demandItems } = useAppState()
  const [submitted, setSubmitted] = useState(false)
  const item = demandItems.find((entry) => entry.id === id)

  if (!item) {
    return (
      <div className="page app-container">
        <EmptyState title="求购信息不存在" description="请返回求购广场重新选择要查看的记录。" />
      </div>
    )
  }

  return (
    <div className="page app-container">
      <section className="page-banner page-banner--market">
        <div>
          <span className="section-heading__eyebrow">Demand Detail</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <StatusPill tone="warning">{item.status}</StatusPill>
      </section>
      <section className="detail-section-grid">
        <article className="detail-section-card">
          <h2>需求信息</h2>
          <div className="info-table">
            <div><dt>发布方</dt><dd>{item.subtitle}</dd></div>
            <div><dt>品类</dt><dd>{item.category}</dd></div>
            <div><dt>目标数量</dt><dd>{item.quantity}</dd></div>
            <div><dt>预算范围</dt><dd>{item.price}</dd></div>
            <div><dt>地区</dt><dd>{item.location}</dd></div>
            <div><dt>发布时间</dt><dd>{item.updatedAt}</dd></div>
          </div>
        </article>
        <article className="detail-section-card">
          <h2>响应需求</h2>
          <p>{item.contactHint}</p>
          <div className="info-table">
            <div><dt>联系人</dt><dd>{item.contactName}</dd></div>
            <div><dt>身份</dt><dd>{item.contactRole}</dd></div>
          </div>
          <button className="primary-button" type="button" onClick={() => setSubmitted(true)}>
            提交响应意向
          </button>
          {submitted ? <p className="inline-feedback">响应意向已提交，平台将通过消息通知页面展示后续反馈。</p> : null}
        </article>
      </section>
      <div className="page-back-link">
        <Link className="text-link" to="/demand">返回求购广场</Link>
      </div>
    </div>
  )
}

export default DemandDetailPage
