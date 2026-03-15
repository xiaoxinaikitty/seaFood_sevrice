import { menuGroups } from '../../constants/menu.js'

function AppSidebar() {
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__brand">
        <span className="app-sidebar__logo">SF</span>
        <div>
          <strong>SeaFood</strong>
          <p>Admin Starter</p>
        </div>
      </div>

      <nav className="app-sidebar__nav" aria-label="系统导航">
        {menuGroups.map((group) => (
          <section key={group.title} className="app-sidebar__group">
            <span className="app-sidebar__group-title">{group.title}</span>
            {group.items.map((item, index) => (
              <button
                key={item.key}
                className={`app-sidebar__item${group.title === '工作台' && index === 0 ? ' is-active' : ''}`}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </section>
        ))}
      </nav>
    </aside>
  )
}

export default AppSidebar
