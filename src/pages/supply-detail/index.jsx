import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Dialog from '../../components/common/Dialog.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusPill from '../../components/common/StatusPill.jsx'
import { useAppState } from '../../store/AppStateProvider.jsx'

function SupplyDetailPage() {
  const { id } = useParams()
  const { submitSupplyIntent, supplyItems } = useAppState()
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    contactName: '林海同学',
    contactPhone: '13800000000',
    quantity: '',
    budget: '',
    expectedDate: '',
    notes: '',
  })
  const item = supplyItems.find((entry) => entry.id === id)

  if (!item) {
    return (
      <div className="page app-container">
        <EmptyState title="供应信息不存在" description="请返回供应广场重新选择要查看的记录。" />
      </div>
    )
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitSupplyIntent(item, form)
    setSubmitted(true)
    setOpen(false)
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
          <button className="primary-button" type="button" onClick={() => setOpen(true)}>
            发起采购意向
          </button>
          {submitted ? <p className="inline-feedback">采购意向已登记，可前往消息通知页查看后续沟通结果。</p> : null}
        </article>
      </section>
      <div className="page-back-link">
        <Link className="text-link" to="/supply">返回供应广场</Link>
      </div>

      <Dialog
        description="请完整填写采购需求、联系人和期望交付时间，便于供方做出有效响应。"
        footer={null}
        onClose={() => setOpen(false)}
        open={open}
        title="发起采购意向"
        size="wide"
      >
        <form className="dialog-form" onSubmit={handleSubmit}>
          <div className="form-grid form-grid--double">
            <label>
              <span>联系人</span>
              <input name="contactName" onChange={handleChange} type="text" value={form.contactName} />
            </label>
            <label>
              <span>联系电话</span>
              <input name="contactPhone" onChange={handleChange} type="text" value={form.contactPhone} />
            </label>
            <label>
              <span>意向数量</span>
              <input name="quantity" onChange={handleChange} placeholder="例如：20 箱" type="text" value={form.quantity} />
            </label>
            <label>
              <span>预算范围</span>
              <input name="budget" onChange={handleChange} placeholder="例如：¥150 - ¥180 / 箱" type="text" value={form.budget} />
            </label>
            <label>
              <span>期望交付日期</span>
              <input name="expectedDate" onChange={handleChange} type="date" value={form.expectedDate} />
            </label>
            <label>
              <span>目标地区</span>
              <input type="text" value={item.location} readOnly />
            </label>
          </div>
          <label>
            <span>补充说明</span>
            <textarea name="notes" onChange={handleChange} rows="5" value={form.notes} placeholder="补充收货要求、包装偏好、票据说明等。" />
          </label>
          <div className="dialog-form__actions">
            <button className="ghost-button" onClick={() => setOpen(false)} type="button">取消</button>
            <button className="primary-button" type="submit">提交采购意向</button>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default SupplyDetailPage
