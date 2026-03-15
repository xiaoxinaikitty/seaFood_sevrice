import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Dialog from '../../components/common/Dialog.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusPill from '../../components/common/StatusPill.jsx'
import { useAppState } from '../../store/AppStateProvider.jsx'

function OrderDetailPage() {
  const { id } = useParams()
  const { orders, updateOrderStatus } = useAppState()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [cancelOpen, setCancelOpen] = useState(false)
  const [confirmForm, setConfirmForm] = useState({
    receiveStatus: '包装完好',
    receiveTime: '',
    evaluation: '',
  })
  const [cancelForm, setCancelForm] = useState({
    reason: '',
    contactPhone: '13800000000',
    remark: '',
  })
  const order = orders.find((item) => item.id === id)

  if (!order) {
    return (
      <div className="page app-container">
        <EmptyState title="订单不存在" description="请检查订单编号是否正确，或返回订单列表重新选择。" />
      </div>
    )
  }

  const handleConfirmChange = (event) => {
    const { name, value } = event.target
    setConfirmForm((current) => ({ ...current, [name]: value }))
  }

  const handleCancelChange = (event) => {
    const { name, value } = event.target
    setCancelForm((current) => ({ ...current, [name]: value }))
  }

  const submitConfirm = (event) => {
    event.preventDefault()
    updateOrderStatus(order.id, '已完成', confirmForm.evaluation || `收货状态：${confirmForm.receiveStatus}`)
    setConfirmOpen(false)
  }

  const submitCancel = (event) => {
    event.preventDefault()
    updateOrderStatus(order.id, '已取消', cancelForm.remark || cancelForm.reason)
    setCancelOpen(false)
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
            <button className="primary-button" onClick={() => setConfirmOpen(true)} type="button">确认收货</button>
            <button className="ghost-button" onClick={() => setCancelOpen(true)} type="button">取消订单</button>
          </div>
        </article>
      </section>
      <div className="page-back-link">
        <Link className="text-link" to="/orders">返回订单列表</Link>
      </div>

      <Dialog
        description="请补充收货状态与体验评价，确保订单完成节点包含必要的业务留痕。"
        footer={null}
        onClose={() => setConfirmOpen(false)}
        open={confirmOpen}
        title="确认收货"
      >
        <form className="dialog-form" onSubmit={submitConfirm}>
          <div className="form-grid form-grid--double">
            <label>
              <span>收货状态</span>
              <input name="receiveStatus" onChange={handleConfirmChange} type="text" value={confirmForm.receiveStatus} />
            </label>
            <label>
              <span>收货时间</span>
              <input name="receiveTime" onChange={handleConfirmChange} type="date" value={confirmForm.receiveTime} />
            </label>
          </div>
          <label>
            <span>体验评价</span>
            <textarea name="evaluation" onChange={handleConfirmChange} rows="5" value={confirmForm.evaluation} placeholder="填写包装、冷链、规格一致性等体验评价。" />
          </label>
          <div className="dialog-form__actions">
            <button className="ghost-button" onClick={() => setConfirmOpen(false)} type="button">取消</button>
            <button className="primary-button" type="submit">确认收货并完成订单</button>
          </div>
        </form>
      </Dialog>

      <Dialog
        description="取消订单前请填写原因与联系方式，便于后续售后或沟通环节追踪。"
        footer={null}
        onClose={() => setCancelOpen(false)}
        open={cancelOpen}
        title="取消订单"
      >
        <form className="dialog-form" onSubmit={submitCancel}>
          <div className="form-grid form-grid--double">
            <label>
              <span>取消原因</span>
              <input name="reason" onChange={handleCancelChange} placeholder="例如：计划变更、时间不匹配" type="text" value={cancelForm.reason} />
            </label>
            <label>
              <span>联系电话</span>
              <input name="contactPhone" onChange={handleCancelChange} type="text" value={cancelForm.contactPhone} />
            </label>
          </div>
          <label>
            <span>补充说明</span>
            <textarea name="remark" onChange={handleCancelChange} rows="5" value={cancelForm.remark} placeholder="补充取消背景、后续诉求或协商建议。" />
          </label>
          <div className="dialog-form__actions">
            <button className="ghost-button" onClick={() => setCancelOpen(false)} type="button">返回</button>
            <button className="primary-button" type="submit">确认取消订单</button>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default OrderDetailPage
