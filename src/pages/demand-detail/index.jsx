import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Dialog from '../../components/common/Dialog.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusPill from '../../components/common/StatusPill.jsx'
import { useAppState } from '../../store/AppStateProvider.jsx'

function DemandDetailPage() {
  const { id } = useParams()
  const { demandItems, submitDemandResponse } = useAppState()
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    supplierName: '海湾优选供应社',
    quote: '',
    availableQuantity: '',
    deliveryCycle: '',
    contactPhone: '13900000000',
    notes: '',
  })
  const item = demandItems.find((entry) => entry.id === id)

  if (!item) {
    return (
      <div className="page app-container">
        <EmptyState title="求购信息不存在" description="请返回求购广场重新选择要查看的记录。" />
      </div>
    )
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitDemandResponse(item, form)
    setSubmitted(true)
    setOpen(false)
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
          <button className="primary-button" type="button" onClick={() => setOpen(true)}>
            提交响应意向
          </button>
          {submitted ? <p className="inline-feedback">响应意向已提交，平台将通过消息通知页面展示后续反馈。</p> : null}
        </article>
      </section>
      <div className="page-back-link">
        <Link className="text-link" to="/demand">返回求购广场</Link>
      </div>

      <Dialog
        description="请填写你的可供数量、报价和交付周期，保证与求购需求字段相匹配。"
        footer={null}
        onClose={() => setOpen(false)}
        open={open}
        title="提交需求响应"
        size="wide"
      >
        <form className="dialog-form" onSubmit={handleSubmit}>
          <div className="form-grid form-grid--double">
            <label>
              <span>供应方名称</span>
              <input name="supplierName" onChange={handleChange} type="text" value={form.supplierName} />
            </label>
            <label>
              <span>联系号码</span>
              <input name="contactPhone" onChange={handleChange} type="text" value={form.contactPhone} />
            </label>
            <label>
              <span>响应报价</span>
              <input name="quote" onChange={handleChange} placeholder="例如：¥96 / 盒" type="text" value={form.quote} />
            </label>
            <label>
              <span>可供数量</span>
              <input name="availableQuantity" onChange={handleChange} placeholder="例如：80 盒" type="text" value={form.availableQuantity} />
            </label>
            <label>
              <span>交付周期</span>
              <input name="deliveryCycle" onChange={handleChange} placeholder="例如：3 天内发货" type="text" value={form.deliveryCycle} />
            </label>
            <label>
              <span>目标地区</span>
              <input type="text" value={item.location} readOnly />
            </label>
          </div>
          <label>
            <span>补充说明</span>
            <textarea name="notes" onChange={handleChange} rows="5" value={form.notes} placeholder="说明包装方式、冷链条件、起订量或额外服务。" />
          </label>
          <div className="dialog-form__actions">
            <button className="ghost-button" onClick={() => setOpen(false)} type="button">取消</button>
            <button className="primary-button" type="submit">确认提交响应</button>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default DemandDetailPage
