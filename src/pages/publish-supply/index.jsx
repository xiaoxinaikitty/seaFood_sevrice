function PublishSupplyPage() {
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
        <form className="editor-form">
          <label>
            <span>供应标题</span>
            <input type="text" placeholder="例如：舟山鲜活梭子蟹稳定供应" />
          </label>
          <label>
            <span>海产品名称</span>
            <input type="text" placeholder="请输入海产品名称" />
          </label>
          <div className="form-grid form-grid--double">
            <label>
              <span>分类</span>
              <input type="text" placeholder="鱼类 / 虾蟹 / 贝类" />
            </label>
            <label>
              <span>产地</span>
              <input type="text" placeholder="请输入产地" />
            </label>
            <label>
              <span>参考价格</span>
              <input type="text" placeholder="例如：¥158 / 箱" />
            </label>
            <label>
              <span>可供数量</span>
              <input type="text" placeholder="例如：日供 180 箱" />
            </label>
          </div>
          <label>
            <span>商品简介</span>
            <textarea placeholder="补充商品规格、冷链方式、适合场景等说明。" rows="6" />
          </label>
          <button className="primary-button" type="button">提交审核</button>
        </form>
        <aside className="editor-side-card">
          <h2>填写建议</h2>
          <ul className="content-list">
            <li>标题建议包含产地、品类和稳定供应信息。</li>
            <li>价格、数量、地区是供应卡片的关键字段。</li>
            <li>提交后默认进入待审核状态，用于后续后台联调。</li>
          </ul>
        </aside>
      </section>
    </div>
  )
}

export default PublishSupplyPage
