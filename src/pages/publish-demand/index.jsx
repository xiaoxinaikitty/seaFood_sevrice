import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../../store/AppStateProvider.jsx'

function PublishDemandPage() {
  const navigate = useNavigate()
  const { addDemandItem } = useAppState()
  const [form, setForm] = useState({
    title: '',
    category: '',
    quantity: '',
    price: '',
    origin: '',
    description: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = addDemandItem(form)
    navigate(`/demand/${id}`)
  }

  return (
    <div className="page app-container">
      <section className="page-banner">
        <div>
          <span className="section-heading__eyebrow">Create Demand</span>
          <h1>发布求购需求</h1>
          <p>通过独立页面收集数量、预算、产地偏好和用途说明，便于供应者快速响应。</p>
        </div>
      </section>
      <section className="editor-layout">
        <form className="editor-form" onSubmit={handleSubmit}>
          <label>
            <span>求购标题</span>
            <input name="title" onChange={handleChange} type="text" placeholder="例如：求购宴会用深海白虾" value={form.title} />
          </label>
          <div className="form-grid form-grid--double">
            <label>
              <span>目标品类</span>
              <input name="category" onChange={handleChange} type="text" placeholder="请输入品类" value={form.category} />
            </label>
            <label>
              <span>目标数量</span>
              <input name="quantity" onChange={handleChange} type="text" placeholder="例如：60 盒" value={form.quantity} />
            </label>
            <label>
              <span>预算范围</span>
              <input name="price" onChange={handleChange} type="text" placeholder="例如：¥100 - ¥130 / 盒" value={form.price} />
            </label>
            <label>
              <span>期望产地</span>
              <input name="origin" onChange={handleChange} type="text" placeholder="请输入产地偏好" value={form.origin} />
            </label>
          </div>
          <label>
            <span>补充说明</span>
            <textarea name="description" onChange={handleChange} placeholder="说明采购用途、规格偏好、交付时间等。" rows="6" value={form.description} />
          </label>
          <button className="primary-button" type="submit">发布求购</button>
        </form>
        <aside className="editor-side-card">
          <h2>审核规则</h2>
          <ul className="content-list">
            <li>预算和数量应尽量填写完整，便于供应者评估。</li>
            <li>求购信息发布后会跳转到详情页，并可继续查看响应入口。</li>
            <li>该页当前为静态原型，后续可直接挂接接口。</li>
          </ul>
        </aside>
      </section>
    </div>
  )
}

export default PublishDemandPage
