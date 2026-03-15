import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmptyState from '../../components/common/EmptyState.jsx'
import { getProductById } from '../../mock/data/content.js'
import { useAppState } from '../../store/AppStateProvider.jsx'

function CheckoutPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { createOrder } = useAppState()
  const product = getProductById(id)
  const [form, setForm] = useState({
    consignee: '林海同学',
    address: '合肥市滨湖新区学习交流街 18 号',
    quantity: '1 份',
    note: '',
  })

  const amount = useMemo(() => product?.price.replace('/ 份', '').replace('/ 盒', '').replace('/ 袋', '').replace('/ 箱', '') || '¥0', [product])

  if (!product) {
    return (
      <div className="page app-container">
        <EmptyState title="无法创建订单" description="目标商品不存在，请返回商品详情页重新选择。" />
      </div>
    )
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const orderId = createOrder(product, {
      ...form,
      amount,
    })
    navigate(`/orders/${orderId}`)
  }

  return (
    <div className="page app-container">
      <section className="page-banner">
        <div>
          <span className="section-heading__eyebrow">Checkout</span>
          <h1>提交模拟订单</h1>
          <p>用于承接商品详情页下单操作，后续可直接接入订单服务接口。</p>
        </div>
      </section>
      <section className="editor-layout">
        <form className="editor-form" onSubmit={handleSubmit}>
          <label>
            <span>商品名称</span>
            <input type="text" value={product.name} readOnly />
          </label>
          <div className="form-grid form-grid--double">
            <label>
              <span>收货人</span>
              <input name="consignee" onChange={handleChange} type="text" value={form.consignee} />
            </label>
            <label>
              <span>购买数量</span>
              <input name="quantity" onChange={handleChange} type="text" value={form.quantity} />
            </label>
          </div>
          <label>
            <span>收货地址</span>
            <input name="address" onChange={handleChange} type="text" value={form.address} />
          </label>
          <label>
            <span>备注信息</span>
            <textarea name="note" onChange={handleChange} rows="5" value={form.note} />
          </label>
          <button className="primary-button" type="submit">确认提交订单</button>
        </form>
        <aside className="editor-side-card">
          <h2>订单摘要</h2>
          <div className="info-table">
            <div><dt>商品</dt><dd>{product.name}</dd></div>
            <div><dt>规格</dt><dd>{product.spec}</dd></div>
            <div><dt>供应方</dt><dd>{product.merchant}</dd></div>
            <div><dt>参考金额</dt><dd>{amount}</dd></div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default CheckoutPage
