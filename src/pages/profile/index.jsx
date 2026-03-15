import MarketCard from '../../components/cards/MarketCard.jsx'
import StatusPill from '../../components/common/StatusPill.jsx'
import { products } from '../../mock/data/content.js'
import { useAppState } from '../../store/AppStateProvider.jsx'

function ProfilePage() {
  const { favorites, profile, demandItems, supplyItems, isLoggedIn } = useAppState()
  const favoriteNames = products.filter((item) => favorites.includes(item.id)).map((item) => item.name)

  return (
    <div className="page app-container">
      <section className="profile-hero">
        <div>
          <span className="section-heading__eyebrow">Personal Center</span>
          <h1>{profile.name}</h1>
          <p>{profile.bio}</p>
          <div className="profile-role-group">
            {profile.role.split(' / ').map((role) => (
              <StatusPill key={role} tone="info">{role}</StatusPill>
            ))}
            <StatusPill tone={isLoggedIn ? 'success' : 'warning'}>{isLoggedIn ? '已登录' : '访客状态'}</StatusPill>
          </div>
        </div>
        <div className="profile-stats">
          {profile.stats.map((item) => (
            <article key={item.label} className="profile-stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section-grid">
        <article className="detail-section-card">
          <h2>我的收藏</h2>
          <div className="mini-list">
            {favoriteNames.map((item) => (
              <div key={item} className="mini-list__item mini-list__item--text">
                {item}
              </div>
            ))}
          </div>
        </article>
        <article className="detail-section-card">
          <h2>供应者入口</h2>
          <div className="info-table">
            <div><dt>当前身份</dt><dd>供应者已开通</dd></div>
            <div><dt>审核状态</dt><dd>审核通过</dd></div>
            <div><dt>推荐操作</dt><dd>继续发布商品或维护供应信息</dd></div>
          </div>
        </article>
      </section>

      <section className="detail-section-grid">
        <article>
          <h2 className="section-title">我的求购</h2>
          <div className="stack-list">
            {demandItems.slice(0, 2).map((item) => (
              <MarketCard key={item.id} item={item} type="demand" />
            ))}
          </div>
        </article>
        <article>
          <h2 className="section-title">我的供应</h2>
          <div className="stack-list">
            {supplyItems.slice(0, 2).map((item) => (
              <MarketCard key={item.id} item={item} type="supply" />
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default ProfilePage
