import SectionCard from '../../components/common/SectionCard.jsx'
import StatCard from '../../components/common/StatCard.jsx'
import { statCards, structureGroups } from '../../mock/dashboard.js'

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <span className="dashboard-hero__tag">Clean Project</span>
          <h2>默认素材和模板页面已移除</h2>
          <p>
            当前工程已经重组为适合 React Web 后台项目继续扩展的基础骨架，
            后续可以直接补充路由系统、状态管理、接口层和业务模块。
          </p>
        </div>
      </section>

      <section className="stats-grid">
        {statCards.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="content-grid">
        {structureGroups.map((group) => (
          <SectionCard
            key={group.title}
            title={group.title}
            description="当前目录和约定已经落地，可直接继续开发。"
          >
            <ul className="content-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </section>
    </div>
  )
}

export default DashboardPage
