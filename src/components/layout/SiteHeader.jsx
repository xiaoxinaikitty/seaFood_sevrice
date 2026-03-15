import { NavLink } from 'react-router-dom'
import { navItems } from '../../constants/navigation.js'

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner app-container">
        <NavLink className="brand-mark" to="/">
          <span className="brand-mark__badge">SF</span>
          <div>
            <strong>SeaFood</strong>
            <p>学习型海产品服务平台</p>
          </div>
        </NavLink>

        <nav className="site-nav" aria-label="用户端主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' is-active' : ''}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <NavLink className="ghost-button" to="/publish-demand">
            发布求购
          </NavLink>
          <NavLink className="primary-button" to="/publish-supply">
            发布供应
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
