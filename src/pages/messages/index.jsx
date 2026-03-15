import StatusPill from '../../components/common/StatusPill.jsx'
import { messageTabs, messages } from '../../mock/data/content.js'

function MessagesPage() {
  return (
    <div className="page app-container">
      <section className="page-banner">
        <div>
          <span className="section-heading__eyebrow">Inbox</span>
          <h1>消息通知</h1>
          <p>涵盖系统通知、审核结果、订单更新和互动消息四类内容。</p>
        </div>
        <button className="ghost-button" type="button">全部已读</button>
      </section>
      <section className="filter-panel">
        <div className="chip-list">
          {messageTabs.map((tab, index) => (
            <button key={tab} className={`chip${index === 0 ? ' is-active' : ''}`} type="button">
              {tab}
            </button>
          ))}
        </div>
      </section>
      <section className="stack-list">
        {messages.map((item) => (
          <article key={item.title} className="message-card">
            <div className="message-card__header">
              <div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <StatusPill tone={item.unread ? 'warning' : 'default'}>
                {item.category}
              </StatusPill>
            </div>
            <div className="message-card__footer">
              <span>{item.time}</span>
              <span>{item.unread ? '未读' : '已读'}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default MessagesPage
