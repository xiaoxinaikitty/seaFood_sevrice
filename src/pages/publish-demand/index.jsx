function PublishDemandPage() {
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
        <form className="editor-form">
          <label>
            <span>求购标题</span>
            <input type="text" placeholder="例如：求购宴会用深海白虾" />
          </label>
          <div className="form-grid form-grid--double">
            <label>
              <span>目标品类</span>
              <input type="text" placeholder="请输入品类" />
            </label>
            <label>
              <span>目标数量</span>
              <input type="text" placeholder="例如：60 盒" />
            </label>
            <label>
              <span>预算范围</span>
              <input type="text" placeholder="例如：¥100 - ¥130 / 盒" />
            </label>
            <label>
              <span>期望产地</span>
              <input type="text" placeholder="请输入产地偏好" />
            </label>
          </div>
          <label>
            <span>补充说明</span>
            <textarea placeholder="说明采购用途、规格偏好、交付时间等。" rows="6" />
          </label>
          <button className="primary-button" type="button">发布求购</button>
        </form>
        <aside className="editor-side-card">
          <h2>审核规则</h2>
          <ul className="content-list">
            <li>预算和数量应尽量填写完整，便于供应者评估。</li>
            <li>求购信息发布后将进入求购广场，并通过站内消息通知相关用户。</li>
            <li>该页当前为静态原型，后续可直接挂接接口。</li>
          </ul>
        </aside>
      </section>
    </div>
  )
}

export default PublishDemandPage
