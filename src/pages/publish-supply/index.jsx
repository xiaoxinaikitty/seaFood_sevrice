import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../../store/AppStateProvider.jsx'

function PublishSupplyPage() {
  const navigate = useNavigate()
  const { addSupplyItem } = useAppState()
  const [form, setForm] = useState({
    title: '',
    name: '',
    category: '',
    origin: '',
    price: '',
    quantity: '',
    description: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = addSupplyItem(form)
    navigate(`/supply/${id}`)
  }

  return (
    <div className="page app-container">
      <section className="page-banner">
        <div>
          <span className="section-heading__eyebrow">Create Supply</span>
          <h1>发布供应信息</h1>
          <p>建议使用独立页面承载长表单，后续可直接接入文件上传与审核接口。</p>
        </div>
      </section>
      <section className="editor-layout">
        <form className="editor-form" onSubmit={handleSubmit}>
          <label>
            <span>供应标题</span>
            <input name="title" onChange={handleChange} type="text" placeholder="例如：舟山鲜活梭子蟹稳定供应" value={form.title} />
          </label>
          <label>
            <span>海产品名称</span>
            <input name="name" onChange={handleChange} type="text" placeholder="请输入海产品名称" value={form.name} />
          </label>
          <div className="form-grid form-grid--double">
            <label>
              <span>分类</span>
              <input name="category" onChange={handleChange} type="text" placeholder="鱼类 / 虾蟹 / 贝类" value={form.category} />
            </label>
            <label>
              <span>产地</span>
              <input name="origin" onChange={handleChange} type="text" placeholder="请输入产地" value={form.origin} />
            </label>
            <label>
              <span>参考价格</span>
              <input name="price" onChange={handleChange} type="text" placeholder="例如：¥158 / 箱" value={form.price} />
            </label>
            <label>
              <span>可供数量</span>
              <input name="quantity" onChange={handleChange} type="text" placeholder="例如：日供 180 箱" value={form.quantity} />
            </label>
          </div>
          <label>
            <span>商品简介</span>
            <textarea name="description" onChange={handleChange} placeholder="补充商品规格、冷链方式、适合场景等说明。" rows="6" value={form.description} />
          </label>
          <button className="primary-button" type="submit">提交审核</button>
        </form>
        <aside className="editor-side-card">
          <h2>填写建议</h2>
          <ul className="content-list">
            <li>标题建议包含产地、品类和稳定供应信息。</li>
            <li>价格、数量、地区是供应卡片的关键字段。</li>
            <li>提交后会跳转到新建的供应详情页，用于后续审核和沟通展示。</li>
          </ul>
        </aside>
      </section>
    </div>
  )
}

export default PublishSupplyPage
